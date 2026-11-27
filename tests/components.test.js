/**
 * tests/components.test.js
 * The component contract in docs/COMPONENTS.md, enforced.
 *
 * A documented public component must exist in the kernel and be used by
 * something, or the inventory is fiction. A product's styles must stay in the
 * product, or "delete the product" stops being safe.
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const DOC = path.join(ROOT, 'docs', 'COMPONENTS.md');
const COMPONENTS = path.join(ROOT, 'css', 'components.css');

const KERNEL_CSS = [
    ...fs.readdirSync(path.join(ROOT, 'css')).filter(name => name.endsWith('.css')).map(name => path.join('css', name)),
    ...fs.readdirSync(path.join(ROOT, 'shared', 'css')).filter(name => name.endsWith('.css')).map(name => path.join('shared', 'css', name)),
];

const IGNORED = new Set(['.git', 'node_modules', '.github', 'tests', 'docs', 'partials']);

function walk(dir, found = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.isDirectory()) {
            if (!IGNORED.has(entry.name)) walk(path.join(dir, entry.name), found);
        } else {
            found.push(path.join(dir, entry.name));
        }
    }
    return found;
}

const read = file => fs.readFileSync(path.join(ROOT, file), 'utf8');
const relative = file => path.relative(ROOT, file).split(path.sep).join('/');
const PAGES = walk(ROOT).filter(file => file.endsWith('.html'));
const SOURCES = walk(ROOT).filter(file => /\.(html|js)$/.test(file));

function section(heading) {
    const start = DOC_TEXT.indexOf(heading);
    if (start === -1) return '';
    const rest = DOC_TEXT.slice(start + heading.length);
    const end = rest.search(/^## /m);
    return end === -1 ? rest : rest.slice(0, end);
}

function classesIn(text) {
    return [...text.matchAll(/^\|\s*`\.([a-z0-9-]+)`/gm)].map(match => match[1]);
}

const DOC_TEXT = fs.readFileSync(DOC, 'utf8');

function isDefined(name) {
    const pattern = new RegExp(`(^|[^\\w-])\\.${name}(?![\\w-])`);
    return KERNEL_CSS.some(file => pattern.test(read(file)));
}

function isUsed(name) {
    const patterns = [
        new RegExp(`class\\s*=\\s*["'][^"']*(?<![\\w-])${name}(?![\\w-])`),
        new RegExp(`classList\\.(?:add|remove|toggle)\\(\\s*["']${name}["']`),
        new RegExp(`className\\s*=\\s*["'][^"']*(?<![\\w-])${name}(?![\\w-])`),
        new RegExp(`querySelector(?:All)?\\(\\s*["']\\.${name}["']`),
    ];
    return SOURCES.some(file => {
        const source = fs.readFileSync(file, 'utf8');
        return patterns.some(pattern => pattern.test(source));
    });
}

// Product stylesheets and the selectors each one owns.
const OWNED = {
    'comparative/atlas.css': [/\.comp-/, /\.family-badge/, /\.insight-card/, /\.observations-panel/, /\.transfer-tip/],
    'comparative/word-explorer.css': [/\.we-/],
    'languages/coming-soon.css': [/\.coming-soon-cta-/, /\.lang-card/],
};

const CORE = [
    'btn-primary', 'btn-secondary', 'btn-soft', 'btn-ghost',
    'nav-links', 'nav-cta', 'nav-login', 'mobile-nav-item',
    'hero', 'course-card', 'tool-card', 'calc-card',
    'sd-breadcrumbs', 'sd-jump-link', 'wa-fab', 'site-footer',
];

test('the public component API is defined in the kernel and actually used', () => {
    const api = classesIn(section('## Public component API'));
    assert.ok(api.length >= 15, `documented public API looks thin: ${api.length}`);
    for (const name of CORE) assert.ok(api.includes(name), `public API must document .${name}`);
    assert.deepEqual(api.filter(name => !isDefined(name)), [], 'documented but not defined in a kernel stylesheet');
    assert.deepEqual(api.filter(name => !isUsed(name)), [], 'documented but never used; drop it from the API or use it');
});

test('cross-repo nav hooks stay defined in the kernel', () => {
    const hooks = classesIn(section('## Cross-repo hooks'));
    assert.ok(hooks.length >= 1, 'the nav has at least one hook sibling repos rely on');
    assert.deepEqual(hooks.filter(name => !isDefined(name)), []);
});

test('reserved classes are real, so the inventory cannot rot', () => {
    const reserved = classesIn(section('## Reserved kernel classes'));
    assert.ok(reserved.length >= 5);
    assert.deepEqual(reserved.filter(name => !isDefined(name)), []);
});

test('product-owned styles live in the product, not in the kernel', () => {
    const kernel = fs.readFileSync(COMPONENTS, 'utf8');
    for (const [file, patterns] of Object.entries(OWNED)) {
        assert.ok(fs.existsSync(path.join(ROOT, file)), `${file} is documented but missing`);
        for (const pattern of patterns) {
            assert.ok(!pattern.test(kernel), `${file} owns ${pattern}; it must not reappear in css/components.css`);
        }
    }
});

test('each product stylesheet is loaded only by pages in its own folder', () => {
    for (const file of Object.keys(OWNED)) {
        const base = path.basename(file);
        const dir = path.dirname(file);
        const refs = PAGES.filter(page => fs.readFileSync(page, 'utf8').includes(base)).map(relative);
        assert.ok(refs.length > 0, `${file} is never loaded`);
        for (const ref of refs) {
            assert.equal(path.posix.dirname(ref), dir, `${ref} loads ${file} from outside ${dir}/`);
        }
    }
});
