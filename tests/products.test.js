/**
 * tests/products.test.js
 * Delete-safety for products.
 *
 * A product is an independent app: one folder, one public entry, no shared
 * internals. The rule this file enforces is the one the architecture depends
 * on: removing a product's folder and its products.json entry may leave
 * navigation links to fix, but it can never leave a script, style, data or
 * image dependency pointing into the deleted folder.
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const MANIFEST = JSON.parse(fs.readFileSync(path.join(ROOT, 'products.json'), 'utf8'));
const PRODUCTS = MANIFEST.products;

const PRODUCT_ROOTS = ['about', 'comparative', 'courses', 'print-studio'];
const IGNORED = new Set(['.git', 'node_modules', '.github', 'tests', 'docs', 'partials']);
const ASSET = /\.(js|css|json|png|svg|jpe?g|gif|webp|woff2?|ttf|otf|pdf|mp3|mp4|webm)$/i;

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

const FILES = walk(ROOT).map(file => path.relative(ROOT, file).split(path.sep).join('/'));
const SOURCES = FILES.filter(file => /\.(html|css|js|json|xml)$/.test(file));

function productDirsOnDisk() {
    const dirs = new Set(PRODUCT_ROOTS.filter(root => fs.existsSync(path.join(ROOT, root))));
    for (const entry of fs.readdirSync(path.join(ROOT, 'languages'), { withFileTypes: true })) {
        if (entry.isDirectory()) dirs.add(`languages/${entry.name}`);
    }
    return [...dirs].sort();
}

function sitemapLocs() {
    const xml = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
    return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match =>
        match[1].replace(/^https?:\/\/[^/]+\/COSYlanguages\//, '').replace(/\/$/, '/index.html')
    );
}

function stripComments(source) {
    return source
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/<!--[\s\S]*?-->/g, '')
        .replace(/^\s*\/\/.*$/gm, '');
}

test('products.json is the complete, unique list of product folders', () => {
    const ids = PRODUCTS.map(product => product.id);
    const dirs = PRODUCTS.map(product => product.dir);
    assert.equal(new Set(ids).size, ids.length, 'duplicate product id');
    assert.equal(new Set(dirs).size, dirs.length, 'duplicate product dir');
    assert.deepEqual(dirs.slice().sort(), productDirsOnDisk(), 'products.json and the folders on disk disagree');
});

test('every product has a real HTML entry inside its own folder', () => {
    for (const product of PRODUCTS) {
        const entry = path.join(ROOT, product.entry);
        assert.ok(fs.existsSync(entry), `${product.id}: missing entry ${product.entry}`);
        assert.ok(product.entry.endsWith('.html'), `${product.id}: entry must be HTML`);
        assert.ok(product.entry.startsWith(`${product.dir}/`), `${product.id}: entry must live inside ${product.dir}/`);
        assert.ok(fs.statSync(entry).isFile(), `${product.id}: entry is not a file`);
    }
});

test('every product entry is reachable from a navigation surface', () => {
    const locs = sitemapLocs();
    const surfaces = ['sitemap.xml', 'index.html', 'sw.js', 'js/core/engine.js', 'shared/partials/footer.html']
        .filter(file => fs.existsSync(path.join(ROOT, file)))
        .map(file => fs.readFileSync(path.join(ROOT, file), 'utf8'))
        .join('\n');
    for (const product of PRODUCTS) {
        const dirUrl = `${product.dir}/`;
        const reachable = locs.includes(product.entry)
            || surfaces.includes(product.entry)
            || surfaces.includes(dirUrl);
        assert.ok(reachable, `${product.id}: entry ${product.entry} is not linked from sitemap, home, nav or footer`);
    }
});

test('no file outside a product reaches into that product\'s internals', () => {
    const offenders = [];
    for (const product of PRODUCTS) {
        const prefix = `${product.dir}/`;
        const pattern = new RegExp(`${prefix.replace(/[/.]/g, '\\$&')}[A-Za-z0-9._/-]+`, 'g');
        for (const file of SOURCES) {
            if (file.startsWith(prefix)) continue;
            const source = stripComments(fs.readFileSync(path.join(ROOT, file), 'utf8'));
            for (const match of source.matchAll(pattern)) {
                const target = match[0].replace(/[)"'<>,;:]+$/, '');
                if (ASSET.test(target)) offenders.push(`${file} -> ${target}`);
            }
        }
    }
    assert.deepEqual(offenders, [], `product internals must not be shared; move the asset to the kernel or expose a page:\n${offenders.join('\n')}`);
});

test('no product reaches into another product\'s internals', () => {
    const offenders = [];
    for (const product of PRODUCTS) {
        for (const other of PRODUCTS) {
            if (product.dir === other.dir) continue;
            const prefix = `${other.dir}/`;
            const pattern = new RegExp(`${prefix.replace(/[/.]/g, '\\$&')}[A-Za-z0-9._/-]+`, 'g');
            for (const file of SOURCES.filter(name => name.startsWith(`${product.dir}/`))) {
                const source = stripComments(fs.readFileSync(path.join(ROOT, file), 'utf8'));
                for (const match of source.matchAll(pattern)) {
                    const target = match[0].replace(/[)"'<>,;:]+$/, '');
                    if (ASSET.test(target)) offenders.push(`${file} -> ${target}`);
                }
            }
        }
    }
    assert.deepEqual(offenders, [], `products must not share internals; link the page or use the kernel:\n${offenders.join('\n')}`);
});
