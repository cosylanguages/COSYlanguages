/**
 * tests/footer.test.js
 * The footer is per-page markup, translated in place.
 *
 * It used to be replaced at runtime by a generated "canonical" footer, which threw
 * away the six course links and left every page carrying markup that was dead the
 * moment JS ran. These tests hold the current contract: each page owns its footer,
 * the standard footer keeps its links, and every label it asks a dictionary for
 * exists in all thirteen dictionaries (a missing key blanks the label, not just
 * falls back to English).
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const IGNORED_DIRS = new Set(['.git', 'node_modules', '.github']);

function htmlFiles(dir = ROOT, found = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.isDirectory()) {
            if (!IGNORED_DIRS.has(entry.name)) htmlFiles(path.join(dir, entry.name), found);
        } else if (entry.name.endsWith('.html')) {
            found.push(path.join(dir, entry.name));
        }
    }
    return found;
}

const PAGES = htmlFiles().sort();

// Not documents: the Google site-verification token and meta-refresh stubs.
const NOT_A_PAGE = [/^google[0-9a-f]+\.html$/];
const REDIRECT_STUB = [/^courses\/exam\.html$/, /^languages\/(?:en|fr|it|el|ru|de|es|pt)\.html$/];

// Print artefacts and single-purpose documents ship a deliberately short footer.
const MINIMAL_FOOTER = [
    /^print-studio\//,
    /^languages\/fr\/marathon\//,
    /^languages\/fr\/marathon-prononciation\.html$/,
    /^login\.html$/,
];

const STANDARD_LINKS = [
    'courses/index.html',
    'courses/general.html',
    'courses/spoken.html',
    'courses/exam-preparation.html',
    'courses/travelling.html',
    'courses/professional.html',
    'courses/relocation.html',
    'privacy.html',
    'wa.me/330766784195',
    't.me/jamesyork',
    'mailto:cosylanguages@gmail.com',
];

const DICTIONARIES = fs
    .readdirSync(path.join(ROOT, 'data', 'ui'))
    .filter(name => name.endsWith('.json'));

function relative(file) {
    return path.relative(ROOT, file).split(path.sep).join('/');
}

function isPage(name) {
    return !NOT_A_PAGE.some(pattern => pattern.test(name)) && !REDIRECT_STUB.some(pattern => pattern.test(name));
}

function footerOf(source) {
    const match = source.match(/<footer\b[^>]*>([\s\S]*?)<\/footer>/);
    return match ? match[1] : null;
}

test('every page has one non-empty footer', () => {
    const problems = [];
    for (const file of PAGES) {
        if (!isPage(relative(file))) continue;
        const source = fs.readFileSync(file, 'utf8');
        const footers = source.match(/<footer\b/g) || [];
        if (footers.length !== 1) {
            problems.push(`${relative(file)}: ${footers.length} <footer> elements`);
            continue;
        }
        const text = footerOf(source).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
        if (text.length < 20) problems.push(`${relative(file)}: footer text "${text}"`);
    }
    assert.deepEqual(problems, []);
});

test('the standard footer keeps its navigation', () => {
    const problems = [];
    for (const file of PAGES) {
        const name = relative(file);
        if (!isPage(name) || MINIMAL_FOOTER.some(pattern => pattern.test(name))) continue;
        const footer = footerOf(fs.readFileSync(file, 'utf8')) || '';
        const missing = STANDARD_LINKS.filter(link => !footer.includes(link));
        if (missing.length) problems.push(`${name}: missing ${missing.join(', ')}`);
    }
    assert.deepEqual(problems, []);
});

test('every footer label resolves in all thirteen dictionaries', () => {
    const dictionaries = DICTIONARIES.map(name => ({
        name,
        data: JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'ui', name), 'utf8')),
    }));
    const used = new Set();
    for (const file of PAGES) {
        const footer = footerOf(fs.readFileSync(file, 'utf8'));
        if (!footer) continue;
        for (const match of footer.matchAll(/data-translate-key="([^"]+)"/g)) {
            if (/^(footer_|course_)/.test(match[1])) used.add(match[1]);
        }
    }
    assert.ok(used.size >= 15, `expected the footer to ask for its labels, found ${used.size} keys`);

    const problems = [];
    for (const key of [...used].sort()) {
        for (const { name, data } of dictionaries) {
            if (!(key in data)) problems.push(`${name}: ${key}`);
        }
    }
    assert.deepEqual(problems, []);
});

test('nothing regenerates the footer at runtime', () => {
    const engine = fs.readFileSync(path.join(ROOT, 'js', 'core', 'i18n.js'), 'utf8');
    assert.doesNotMatch(engine, /injectCanonicalFooter/, 'the i18n engine must not overwrite the footer');

    const leftovers = PAGES.filter(file => /data-no-canonical-footer/.test(fs.readFileSync(file, 'utf8')));
    assert.deepEqual(leftovers.map(relative), [], 'data-no-canonical-footer is obsolete');
});
