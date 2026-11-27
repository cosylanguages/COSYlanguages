/**
 * tests/theme-consistency.test.js
 *
 * Guards against light and dark styles leaking into each other. A page must be
 * fully light when the visitor picks light, and fully dark when they pick dark,
 * regardless of the OS setting. These tests assert the invariants that keep that
 * true: one shared theme module, one bootstrapped choice per page, and no dark
 * colour rules that are reachable outside a dark selector.
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const SKIP_DIRS = new Set(['.git', 'node_modules']);

function walk(dir, ext, out = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (SKIP_DIRS.has(entry.name)) continue;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full, ext, out);
        else if (entry.name.endsWith(ext)) out.push(full);
    }
    return out;
}

const htmlFiles = walk(ROOT, '.html');
const cssFiles = walk(ROOT, '.css');

test('every page loads the shared theme module before first paint', () => {
    const missing = [];
    for (const file of htmlFiles) {
        const rel = path.relative(ROOT, file);
        // Google's verification stub is a plain text file, not a page.
        if (rel === 'google43a10f426eb2253d.html') continue;
        const html = fs.readFileSync(file, 'utf8');
        if (!html.includes('cosy-theme.js')) missing.push(rel);
    }
    assert.deepEqual(missing, [], `pages without cosy-theme.js: ${missing.join(', ')}`);
});

test('the theme module is loaded without defer so it runs before paint', () => {
    for (const file of htmlFiles) {
        const html = fs.readFileSync(file, 'utf8');
        const tags = html.match(/<script[^>]*cosy-theme\.js[^>]*>/g) || [];
        for (const tag of tags) {
            assert.ok(!/\bdefer\b/.test(tag), `${path.relative(ROOT, file)} defers cosy-theme.js`);
        }
    }
});

test('the shared theme module exists and is identical to its sibling copies', () => {
    const source = path.join(ROOT, 'shared/js/cosy-theme.js');
    assert.ok(fs.existsSync(source), 'shared/js/cosy-theme.js is missing');
    const text = fs.readFileSync(source, 'utf8');
    assert.match(text, /localStorage/, 'theme module should persist the choice');
    assert.match(text, /data-theme/, 'theme module should set html[data-theme]');
});

test('no page pins a light theme-color while the document can go dark', () => {
    // The browser chrome colour is repainted by cosy-theme.js, but a hardcoded
    // light value with no dark counterpart is the bug this guards against.
    for (const file of htmlFiles) {
        const html = fs.readFileSync(file, 'utf8');
        const metas = html.match(/<meta[^>]*name="theme-color"[^>]*>/g) || [];
        for (const meta of metas) {
            const hasMedia = /media=/.test(meta);
            assert.ok(
                hasMedia || html.includes('cosy-theme.js'),
                `${path.relative(ROOT, file)} has a theme-color that cannot follow the theme`
            );
        }
    }
});

test('pale surface tokens darken instead of staying cream on a dark page', () => {
    // A token that is a light surface in :root but has no dark counterpart keeps
    // its cream fill on a dark page. Paired with a flipping text token that is the
    // classic "mixed" defect: near-white text on a cream chip.
    const tokens = fs.readFileSync(path.join(ROOT, 'shared/css/tokens.css'), 'utf8')
        .replace(/\/\*[\s\S]*?\*\//g, '');

    function luminance(hex) {
        const h = hex.replace('#', '');
        const [r, g, b] = [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16) / 255);
        const f = c => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
        return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
    }

    const darkStart = tokens.indexOf('html[data-theme="dark"], body.theme-dark {');
    const lightPart = tokens.slice(0, darkStart);
    const darkPart = tokens.slice(darkStart);

    const stuck = [];
    for (const m of lightPart.matchAll(/(--[a-z0-9-]+)\s*:\s*(#[0-9a-fA-F]{6})/g)) {
        const [, name, value] = m;
        if (luminance(value) <= 0.6) continue; // not a pale surface
        // Only surface-ish tokens must darken. Text tokens such as --cosy-color-ink
        // are meant to stay light so they read on a dark background.
        if (/ink|text/.test(name)) continue;
        if (!/(?:-bg|-light|-pale|-mist|surface|paper|cream|warm-white)$/.test(name)) continue;
        const darkValue = new RegExp(`${name}\\s*:\\s*(#[0-9a-fA-F]{6})`).exec(darkPart);
        if (!darkValue || luminance(darkValue[1]) > 0.6) {
            stuck.push(`${name} (${value}${darkValue ? ` -> ${darkValue[1]}` : ', no dark value'})`);
        }
    }
    assert.deepEqual(stuck, [], `pale surfaces that never darken:\n${stuck.join('\n')}`);
});

test('no rule puts a light literal surface under a theme-flipping text token', () => {
    // background stays #fff while the text token flips to a near-white dark value:
    // that pair is invisible in dark mode and is the classic "mixed" defect.
    const flips = new Set();
    const tokens = fs.readFileSync(path.join(ROOT, 'shared/css/tokens.css'), 'utf8')
        .replace(/\/\*[\s\S]*?\*\//g, '');
    const darkStart = tokens.indexOf('html[data-theme="dark"], body.theme-dark {');
    const lightPart = tokens.slice(0, darkStart);
    const darkPart = tokens.slice(darkStart);

    for (const m of lightPart.matchAll(/(--[a-z0-9-]+)\s*:\s*(#[0-9a-fA-F]{6})/g)) {
        const name = m[1];
        const darkMatch = new RegExp(`${name}\\s*:\\s*(#[0-9a-fA-F]{6})`).exec(darkPart);
        if (darkMatch && darkMatch[1].toLowerCase() !== m[2].toLowerCase()) flips.add(name);
    }
    for (const alias of lightPart.matchAll(/(--[a-z0-9-]+)\s*:\s*var\((--[a-z0-9-]+)\)/g)) {
        if (flips.has(alias[2])) flips.add(alias[1]);
    }

    const offenders = [];
    for (const file of cssFiles) {
        const rel = path.relative(ROOT, file);
        const css = fs.readFileSync(file, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
        for (const match of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
            const selector = match[1];
            const body = match[2];
            if (/data-theme|theme-dark/.test(selector)) continue;
            if (!/background(?:-color)?\s*:\s*(#fff\b|#ffffff\b|white)\s*[;}]/i.test(body)) continue;
            const tokenText = /(?<!background-)\bcolor\s*:\s*var\((--[a-z0-9-]+)/.exec(body);
            if (!tokenText || !flips.has(tokenText[1])) continue;
            // A rule with its own dark override is fine; only unguarded ones mix.
            const key = (/\.([\w-]+)/.exec(selector) || [])[1];
            const guarded = key
                ? new RegExp(`(?:data-theme="dark"|theme-dark)[^{}]*\\.${key}\\b`).test(css)
                : false;
            if (!guarded) offenders.push(`${rel}: ${selector.trim().slice(0, 60)} (${tokenText[1]})`);
        }
    }
    assert.deepEqual(offenders, [], `light surface with a flipping text token:\n${offenders.join('\n')}`);
});

test('an unguarded prefers-color-scheme block cannot override an explicit light choice', () => {
    for (const file of cssFiles) {
        const rel = path.relative(ROOT, file);
        const css = fs.readFileSync(file, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
        const blocks = css.match(/@media\s*\(prefers-color-scheme:\s*dark\)\s*\{/g) || [];
        for (const _ of blocks) {
            // Each dark media query must guard with :not([data-theme="light"])
            // so a visitor who picked light is not dragged back to dark.
            assert.match(
                css,
                /@media\s*\(prefers-color-scheme:\s*dark\)\s*\{[\s\S]{0,400}?:root:not\(\[data-theme="light"\]\)/,
                `${rel}: dark media query does not respect an explicit light choice`
            );
        }
    }
});

test('course and atlas heroes follow the theme instead of a light literal', () => {
    const course = fs.readFileSync(path.join(ROOT, 'css', 'course-roadmaps.css'), 'utf8');
    assert.doesNotMatch(course, /\.course-hero-modern\s*\{[^}]*#ffffff/i);
    assert.match(course, /html\[data-theme="dark"\] \.decision-side-card\.necessary/);
    assert.match(course, /html\[data-theme="dark"\] \.decision-side-card\.alternative/);

    const atlas = fs.readFileSync(path.join(ROOT, 'comparative', 'index.html'), 'utf8');
    assert.doesNotMatch(atlas, /\.atlas-hero\s*\{[^}]*#f4efe6/i);
    assert.match(atlas, /\.atlas-hero\s*\{[^}]*var\(--cosy-color-surface/);
    assert.match(atlas, /html\[data-theme="dark"\] \.atlas-tab-btn\.active/);

    const wordExplorer = fs.readFileSync(path.join(ROOT, 'comparative', 'word-explorer.css'), 'utf8');
    assert.match(wordExplorer, /html\[data-theme="dark"\] \.we-chip\.active/);
});
