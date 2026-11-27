/**
 * tests/architecture.test.js
 * The shell contract: one kernel, independent products.
 *
 * There is no build step, so "each product is independent" cannot be enforced by
 * a bundler. It is enforced here instead. A page is a product page if it lives
 * under about/, comparative/, courses/, print-studio/ or languages/<code>/;
 * everything else (css/, js/, shared/, images/, data/, fonts/) is the kernel.
 *
 * Five rules, each one a defect that already shipped once:
 *   1. Every real page loads the shell: tokens, the nav engine, one footer.
 *   2. No page paints its footer inline (the eight marathon footers did).
 *   3. No product reaches into another product's internals; the kernel never
 *      reaches into a product at all.
 *   4. Inline styles carry no off-palette colour (the last hand-painted ones are
 *      the atlas HUD, which draws on a fixed dark canvas).
 *   5. The off-palette colour debt in markup may only shrink.
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const IGNORED_DIRS = new Set(['.git', 'node_modules', '.github', 'tests', 'docs', 'partials']);
const KERNEL = new Set(['css', 'js', 'shared', 'images', 'fonts', 'data']);
const TOKENS = path.join(ROOT, 'shared', 'css', 'tokens.css');

// Not documents: the Google verification token and the meta-refresh stubs.
const NOT_A_PAGE = [/^google[0-9a-f]+\.html$/];
const REDIRECT_STUB = [/^courses\/exam\.html$/, /^languages\/(?:en|fr|it|el|ru|de|es|pt)\.html$/];
// Printed issues ship without the nav: they are artefacts, not site pages.
const NO_NAV = [/^print-studio\/monthly-zine-issue-1\.html$/];

function walk(dir, found = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.isDirectory()) {
            if (!IGNORED_DIRS.has(entry.name)) walk(path.join(dir, entry.name), found);
        } else {
            found.push(path.join(dir, entry.name));
        }
    }
    return found;
}

const FILES = walk(ROOT);
const PAGES = FILES.filter(file => file.endsWith('.html'));
const relative = file => path.relative(ROOT, file).split(path.sep).join('/');
const isPage = name =>
    !NOT_A_PAGE.some(pattern => pattern.test(name)) && !REDIRECT_STUB.some(pattern => pattern.test(name));

// `#fff` and `#FFFFFF` are the same colour, so the palette compares values,
// not spellings. Without this, every short hex counted as debt.
const expandHex = hex => {
    const value = hex.toLowerCase();
    return value.length === 4 ? '#' + value.slice(1).split('').map(c => c + c).join('') : value;
};
const PALETTE = new Set(
    (fs.readFileSync(TOKENS, 'utf8').match(/#[0-9a-fA-F]{3,8}\b/g) || []).map(expandHex)
);

const HEX = /#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b/g;
const HEX_ONE = /#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b/;

function product(name) {
    const parts = name.split('/');
    if (parts.length === 1) return null;
    if (KERNEL.has(parts[0])) return `kernel:${parts[0]}`;
    if (parts[0] === 'languages') {
        // `languages/<code>/…` is one product per language. A bare file such as
        // `languages/coming-soon.html` belongs to the shared language hub, not to
        // a product named after the file.
        return parts.length > 2 || (parts.length === 2 && !parts[1].includes('.'))
            ? `languages/${parts[1]}`
            : 'languages';
    }
    return parts[0];
}

test('every page loads the shell: tokens, nav engine, one footer', () => {
    const problems = [];
    for (const file of PAGES) {
        const name = relative(file);
        if (!isPage(name)) continue;
        const source = fs.readFileSync(file, 'utf8');
        if (!/href="[^"]*(?:shared\/css\/|css\/)tokens\.css"/.test(source)) problems.push(`${name}: no tokens.css`);
        if (!NO_NAV.some(pattern => pattern.test(name)) && !/src="[^"]*js\/core\/engine\.js"/.test(source)) {
            problems.push(`${name}: no nav engine`);
        }
        const footers = source.match(/<footer\b/g) || [];
        if (footers.length !== 1) problems.push(`${name}: ${footers.length} <footer> elements`);
    }
    assert.deepEqual(problems, []);
});

test('no page paints its footer inline', () => {
    const problems = [];
    for (const file of PAGES) {
        const source = fs.readFileSync(file, 'utf8');
        for (const match of source.matchAll(/<footer\b[^>]*>/g)) {
            const style = match[0].match(/\sstyle\s*=\s*"([^"]*)"/);
            if (!style) continue;
            // Layout is harmless; a colour is what drifts. var() fallbacks are tokens.
            const body = style[1].replace(/var\(--[^)]*\)/g, '');
            if (HEX_ONE.test(body) || /\brgba?\(/.test(body)) problems.push(`${relative(file)}: ${match[0].slice(0, 90)}`);
        }
    }
    assert.deepEqual(problems, [], 'the footer is a themed surface; give it a class, not a colour');
});

test('no product depends on another product internals', () => {
    const problems = [];
    for (const file of FILES) {
        if (!/\.(?:html|css|js)$/.test(file)) continue;
        const from = product(relative(file));
        if (!from) continue;
        const source = fs.readFileSync(file, 'utf8');
        const dir = path.dirname(file);
        for (const match of source.matchAll(/(?:href|src)=["']([^"']+)["']/g)) {
            const target = match[1];
            if (/^(?:[a-z]+:|\/\/)/i.test(target) || /^[#?/]/.test(target) || target.includes('${')) continue;
            const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(relative(file)), target));
            const to = product(resolved);
            if (!to || to === from) continue;
            if (from.startsWith('kernel:')) {
                if (!to.startsWith('kernel:')) problems.push(`kernel ${relative(file)} -> ${resolved}`);
                continue;
            }
            if (!to.startsWith('kernel:') && !resolved.endsWith('.html')) {
                problems.push(`${from} -> ${to}: ${relative(file)} -> ${resolved}`);
            }
        }
    }
    assert.deepEqual(problems, [], 'a product may link another product page, never its css/js/data');
});

test('inline styles carry no off-palette colour', () => {
    // The Comparative Atlas HUD draws on a fixed dark canvas, so its colours cannot
    // flip with the theme. Convert them with dedicated HUD tokens before removing.
    const ALLOWED = new Set(['#2e7d32', '#64b5f6', '#81c784', '#c62828', '#cfd8dc', '#e0e0e0', '#ffd54f']);
    const problems = [];
    for (const file of PAGES) {
        const source = fs.readFileSync(file, 'utf8');
        for (const style of source.matchAll(/style="([^"]*)"/g)) {
            // A var() fallback is a defensive copy of a token, not a new colour.
            const body = style[1].replace(/var\(--[^)]*\)/g, '');
            for (const hex of body.matchAll(HEX)) {
                const value = hex[0].toLowerCase();
                if (PALETTE.has(value) || ALLOWED.has(value)) continue;
                problems.push(`${relative(file)}: ${value}`);
            }
        }
    }
    assert.deepEqual(problems, [], 'use a token from shared/css/tokens.css');
});

test('off-palette colour debt in markup may only shrink', () => {
    // A `var(--token, #fallback)` literal is sanctioned: it is the token's own
    // value, spelled out for engines without custom properties. Only literals
    // that stand on their own are debt, so fallbacks are stripped first.
    // Add a token instead of raising this.
    const BUDGET = 399;
    const VAR = /var\([^()]*\)/g;
    const offenders = [];
    for (const file of FILES) {
        if (!/\.(?:html|css)$/.test(file) || file === TOKENS) continue;
        const source = fs.readFileSync(file, 'utf8').replace(VAR, '');
        for (const hex of source.matchAll(HEX)) {
            if (!PALETTE.has(expandHex(hex[0]))) offenders.push(relative(file));
        }
    }
    assert.ok(
        offenders.length <= BUDGET,
        `${offenders.length} off-palette colour literals, budget ${BUDGET}. Use a token from shared/css/tokens.css.`
    );
});
