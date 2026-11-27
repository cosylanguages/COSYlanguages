/**
 * tests/component-i18n.test.js
 * Chrome that JavaScript renders itself must ask the dictionaries for its labels.
 *
 * The nav, the ecosystem mega-menu, the language panel and the daily strip build
 * their labels in template literals. Those literals used to be the only copy, so a
 * French page still read "Mark done today", "Learn for free" and "Languages We Teach".
 * Each label now resolves through window.t(key) with the English string as fallback;
 * this test fails when a key the components ask for is missing from a dictionary,
 * which would blank the label in every language that ships translations.
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const UI_LANGS = ['en', 'fr', 'it', 'ru', 'el'];

// `tt(` is the engine helper; the strip's `t(`; the ecosystem strip carries its own map.
const COMPONENTS = {
    'js/daily-strip.js': /(?<![\w.])t\(\s*'([a-z][a-z0-9_.-]*)'/g,
    'js/core/engine.js': /(?<![\w.])tt\(\s*'([a-z][a-z0-9_.-]*)'/g,
    'js/core/ui.js': /(?<![\w.])contactText\(\s*'([a-z][a-z0-9_.-]*)'/g,
};

function keysUsedBy(file) {
    const source = fs.readFileSync(path.join(ROOT, file), 'utf8');
    const keys = new Set();
    for (const match of source.matchAll(COMPONENTS[file])) {
        keys.add(match[1]);
    }
    for (const match of source.matchAll(/data-translate-key="([^"]+)"/g)) {
        keys.add(match[1]);
    }
    return keys;
}

const dictionaries = Object.fromEntries(UI_LANGS.map(lang => [
    lang,
    JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'ui', `${lang}.json`), 'utf8')),
]));

function block(source, start, end) {
    const from = source.indexOf(start);
    assert.notEqual(from, -1, `missing ${start}`);
    return source.slice(from, source.indexOf(end, from));
}

// Keys built as `prefix + key` at runtime cannot be read from the literal alone, so the
// vocabularies they are built from are parsed out of the component instead.
function generatedKeys() {
    const strip = fs.readFileSync(path.join(ROOT, 'js', 'daily-strip.js'), 'utf8');
    const engine = fs.readFileSync(path.join(ROOT, 'js', 'core', 'engine.js'), 'utf8');
    const keys = [];

    for (const [name, prefix] of [
        ['ACTIVITY_LABELS', 'strip_activity_'],
        ['WRITING_ACTIVITY_LABELS', 'strip_writing_activity_'],
    ]) {
        const map = block(strip, `const ${name} = {`, '\n    };');
        for (const match of map.matchAll(/^\s*'?([a-z-]+)'?:/gm)) keys.push(prefix + match[1]);
    }

    const menu = block(engine, 'const COSY_ECOSYSTEM_MENU = [', '\n];');
    for (const match of menu.matchAll(/key: '([a-z-]+)'/g)) {
        keys.push(`eco_${match[1].replace(/-/g, '_')}_title`, `eco_${match[1].replace(/-/g, '_')}_promise`);
    }
    for (const match of menu.matchAll(/accentKey: '([a-z-]+)'/g)) {
        keys.push(`eco_group_${match[1].replace(/-/g, '_')}`);
    }
    return keys;
}

test('every label a component asks for exists in all five dictionaries', () => {
    const used = new Set();
    for (const file of Object.keys(COMPONENTS)) {
        for (const key of keysUsedBy(file)) {
            if (key.endsWith('_') || key.includes('${')) continue;
            used.add(key);
        }
    }
    for (const key of generatedKeys()) used.add(key);

    const problems = [];
    for (const key of [...used].sort()) {
        for (const lang of UI_LANGS) {
            if (!(key in dictionaries[lang])) problems.push(`${key} missing from ${lang}.json`);
        }
    }
    assert.equal(problems.length, 0, problems.join('\n'));
});

test('the components ask for their own labels instead of hardcoding them', () => {
    const strip = fs.readFileSync(path.join(ROOT, 'js', 'daily-strip.js'), 'utf8');
    const engine = fs.readFileSync(path.join(ROOT, 'js', 'core', 'engine.js'), 'utf8');

    const banned = [
        [strip, /'Mark done today'/, 'strip done button'],
        [strip, /'Show answer'/, 'strip reveal button'],
        [strip, /'Daily Practice Strip'/, 'strip title default'],
        [engine, /group: 'Learn for free'[\s\S]{0,200}?title: 'Practice'[\s\S]{0,200}?\$\{grp\.group\}/, 'menu group rendered raw'],
    ];
    for (const [source, pattern, what] of banned) {
        if (pattern.test(source) && !/t\(|tt\(/.test(source)) {
            assert.fail(`${what} is still hardcoded`);
        }
    }

    assert.match(strip, /const t = \(key, fallback\)/, 'the strip needs its translation helper');
    assert.match(engine, /function tt\(key, fallback\)/, 'the engine needs its translation helper');
});

test('pages do not carry their own translation tables or a hardcoded site base', () => {
    const pages = [];
    for (const dir of ['.', 'courses', 'about', 'comparative']) {
        for (const file of fs.readdirSync(path.join(ROOT, dir))) {
            if (file.endsWith('.html')) pages.push(path.join(dir, file));
        }
    }
    const problems = [];
    for (const page of pages) {
        const html = fs.readFileSync(path.join(ROOT, page), 'utf8');
        // 404.html used to translate itself from an inline UI_TEXT map, so switching
        // language there left the nav and the footer in English.
        if (/const UI_TEXT\s*=/.test(html)) problems.push(`${page}: inline UI_TEXT table`);
        // 404.html answers unknown paths, so it derives its <base> from the URL; a
        // hardcoded one 404s every asset whenever the site is not at /COSYlanguages/.
        if (/<base href="\/COSYlanguages\/">/.test(html)) problems.push(`${page}: hardcoded <base href>`);
    }
    assert.deepEqual(problems, [], problems.join('\n'));
});
