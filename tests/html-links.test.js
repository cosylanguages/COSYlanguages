/**
 * tests/html-links.test.js
 * Static integrity checks for the published HTML.
 *
 * The site has no build step, so a broken relative path or a missing rel attribute ships
 * straight to GitHub Pages. These tests walk the files on disk and fail on the three
 * defects that have actually reached production: dead local links, target="_blank"
 * without rel, and sitemap entries that no longer exist.
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
// shared/partials holds fragments (the footer), not published pages.
const IGNORED_DIRS = new Set(['.git', 'node_modules', '.github', 'partials']);

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

const PAGES = htmlFiles();

function isLocalReference(url) {
    if (!url) return false;
    if (/^(?:[a-z]+:|\/\/)/i.test(url)) return false; // scheme or protocol-relative
    if (url[0] === '#' || url[0] === '?' || url[0] === '/') return false;
    return !url.includes('${'); // template literal resolved at runtime
}

test('every relative href and src in the pages resolves on disk', () => {
    const missing = [];
    for (const file of PAGES) {
        const source = fs.readFileSync(file, 'utf8');
        for (const match of source.matchAll(/(?:href|src)="([^"]+)"/g)) {
            const url = match[1];
            if (!isLocalReference(url)) continue;
            const target = url.split('#')[0].split('?')[0];
            if (!target) continue;
            const resolved = path.resolve(path.dirname(file), target);
            if (!fs.existsSync(resolved)) {
                missing.push(`${path.relative(ROOT, file)} -> ${url}`);
            }
        }
    }
    assert.deepEqual(missing, [], 'broken local references');
});

test('every target="_blank" link is rel="noopener noreferrer"', () => {
    const offenders = [];
    for (const file of PAGES) {
        const source = fs.readFileSync(file, 'utf8');
        for (const match of source.matchAll(/<a\b[^>]*target="_blank"[^>]*>/gi)) {
            const tag = match[0];
            const rel = tag.match(/\brel="([^"]*)"/);
            const tokens = rel ? rel[1].split(/\s+/) : [];
            if (!tokens.includes('noopener') || !tokens.includes('noreferrer')) {
                offenders.push(`${path.relative(ROOT, file)} -> ${tag.slice(0, 80)}`);
            }
        }
    }
    assert.deepEqual(offenders, [], 'target="_blank" without rel="noopener noreferrer"');
});

test('every sitemap URL points at a file that exists', () => {
    const sitemap = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
    const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    assert.ok(locs.length > 0, 'sitemap has entries');

    const missing = [];
    for (const loc of locs) {
        const pathname = new URL(loc).pathname.replace(/^\/COSYlanguages\//, '');
        const candidate = pathname === '' || pathname.endsWith('/')
            ? path.join(ROOT, pathname, 'index.html')
            : path.join(ROOT, pathname);
        if (!fs.existsSync(candidate)) missing.push(loc);
    }
    assert.deepEqual(missing, [], 'sitemap entries without a file');
});
