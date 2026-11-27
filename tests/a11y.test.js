/**
 * tests/a11y.test.js
 * Static accessibility guards for the published pages. These are the checks a
 * grep can make honestly: a name for every control, alt text for every image,
 * one id per document, aria references that resolve, and a heading outline that
 * never skips a level. Anything requiring layout or a browser (contrast, focus
 * order, target size) is not here.
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const IGNORED = new Set(['.git', 'node_modules', '.github', 'tests', 'docs', 'partials']);
const NOT_A_PAGE = /^google[0-9a-f]+\.html$/;

function walk(dir, found = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.isDirectory()) {
            if (!IGNORED.has(entry.name)) walk(path.join(dir, entry.name), found);
        } else if (entry.name.endsWith('.html')) {
            found.push(path.join(dir, entry.name));
        }
    }
    return found;
}

const PAGES = walk(ROOT).filter(file => !NOT_A_PAGE.test(path.basename(file)));
const relative = file => path.relative(ROOT, file).split(path.sep).join('/');

const hasName = (attrs, inner) => {
    if (/\b(?:aria-label|aria-labelledby|title)\s*=/.test(attrs)) return true;
    if (inner.replace(/<[^>]+>/g, '').trim()) return true;
    return /<img\b[^>]*\balt\s*=\s*["'][^"']+["']/i.test(inner);
};

test('every page declares its language', () => {
    const offenders = PAGES.filter(file => !/<html[^>]*\blang\s*=/i.test(fs.readFileSync(file, 'utf8')));
    assert.deepEqual(offenders.map(relative), [], 'add lang to <html>');
});

test('every image carries alt text', () => {
    const offenders = [];
    for (const file of PAGES) {
        const source = fs.readFileSync(file, 'utf8');
        for (const img of source.matchAll(/<img\b[^>]*>/gi)) {
            if (!/\balt\s*=/i.test(img[0])) offenders.push(`${relative(file)}: ${img[0].slice(0, 70)}`);
        }
    }
    assert.deepEqual(offenders, [], 'add alt (empty alt is fine for decoration)');
});

test('every button and link has an accessible name', () => {
    const offenders = [];
    for (const file of PAGES) {
        const source = fs.readFileSync(file, 'utf8');
        for (const match of source.matchAll(/<(button|a)\b([^>]*)>([\s\S]*?)<\/\1>/gi)) {
            const [, tag, attrs, inner] = match;
            if (!hasName(attrs, inner)) offenders.push(`${relative(file)}: <${tag}${attrs.slice(0, 60)}>`);
        }
    }
    assert.deepEqual(offenders, [], 'give icon-only controls an aria-label');
});

test('every form field is labelled', () => {
    const offenders = [];
    for (const file of PAGES) {
        const source = fs.readFileSync(file, 'utf8');
        const labelled = new Set(
            [...source.matchAll(/<label\b[^>]*\bfor\s*=\s*["']([^"']+)["']/gi)].map(match => match[1])
        );
        for (const match of source.matchAll(/<(input|select|textarea)\b([^>]*)>/gi)) {
            const [, tag, attrs] = match;
            if (/\btype\s*=\s*["'](?:hidden|submit|button|reset|image)["']/i.test(attrs)) continue;
            if (/\b(?:aria-label|aria-labelledby|title)\s*=/.test(attrs)) continue;
            const id = /\bid\s*=\s*["']([^"']+)["']/i.exec(attrs)?.[1];
            if (id && labelled.has(id)) continue;
            const open = source.lastIndexOf('<label', match.index);
            if (open !== -1 && open > source.lastIndexOf('</label>', match.index)) continue;
            offenders.push(`${relative(file)}: <${tag}${attrs.slice(0, 60)}>`);
        }
    }
    assert.deepEqual(offenders, [], 'add a label, aria-label or aria-labelledby');
});

test('ids are unique per page and aria references resolve', () => {
    const problems = [];
    for (const file of PAGES) {
        const source = fs.readFileSync(file, 'utf8');
        const ids = [...source.matchAll(/\bid\s*=\s*["']([^"']+)["']/gi)].map(match => match[1]);
        const seen = new Set();
        for (const id of ids) {
            if (seen.has(id)) problems.push(`${relative(file)}: duplicate id "${id}"`);
            seen.add(id);
        }
        for (const match of source.matchAll(/\baria-(?:labelledby|describedby|controls|owns)\s*=\s*["']([^"']+)["']/gi)) {
            for (const ref of match[1].split(/\s+/).filter(Boolean)) {
                if (!seen.has(ref)) problems.push(`${relative(file)}: aria reference "${ref}" has no target`);
            }
        }
    }
    assert.deepEqual(problems, []);
});

test('heading levels never skip a level', () => {
    const problems = [];
    for (const file of PAGES) {
        let previous = null;
        for (const match of fs.readFileSync(file, 'utf8').matchAll(/<h([1-6])\b/gi)) {
            const level = Number(match[1]);
            if (previous !== null && level > previous + 1) {
                problems.push(`${relative(file)}: h${previous} -> h${level}`);
            }
            previous = level;
        }
    }
    assert.deepEqual(problems, [], 'use the next level down instead of skipping one');
});
