/**
 * tests/contact-chooser.test.js
 *
 * "Contact us" must offer WhatsApp and Telegram, not send every visitor straight
 * to WhatsApp. The chooser lives in js/core/ui.js so it is available on every page
 * that already loads the shared UI, and the existing WhatsApp links stay as a
 * no-JS fallback. Telegram contact is the direct handle, not the broadcast channel.
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

test('the shared UI owns the contact chooser and its styles', () => {
    const ui = fs.readFileSync(path.join(ROOT, 'js', 'core', 'ui.js'), 'utf8');
    assert.match(ui, /const CONTACT_TELEGRAM = 'https:\/\/t\.me\/jamesyork'/);
    assert.match(ui, /data-contact-chooser/);
    assert.match(ui, /\.wa-fab/);
    assert.match(ui, /cosy-contact-wa/);
    assert.ok(fs.existsSync(path.join(ROOT, 'css', 'contact-chooser.css')));
});

test('the nav and mobile menu open the chooser', () => {
    const engine = fs.readFileSync(path.join(ROOT, 'js', 'core', 'engine.js'), 'utf8');
    const nav = engine.match(/<a class="nav-cta"[^>]*>/);
    const mobile = engine.match(/<a href="https:\/\/wa\.me\/330766784195"[^>]*mm-cta[^>]*>/);
    assert.ok(nav && nav[0].includes('data-contact-chooser'), 'nav CTA should open the chooser');
    assert.ok(mobile && mobile[0].includes('data-contact-chooser'), 'mobile CTA should open the chooser');
});

test('the homepage hero CTA opens the chooser with a neutral label', () => {
    const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
    const hero = html.match(/<a[^>]*class="btn-primary"[^>]*data-translate-key="nav_contact"[^>]*>/);
    assert.ok(hero, 'homepage hero CTA should use the neutral contact label');
    assert.match(hero[0], /data-contact-chooser/, 'homepage hero CTA should open the chooser');
    assert.match(hero[0], /aria-haspopup="dialog"/, 'homepage hero CTA should announce the dialog');
});

test('every floating WhatsApp button is backed by the chooser', () => {
    const missing = [];
    for (const file of htmlFiles()) {
        const html = fs.readFileSync(file, 'utf8');
        if (!/class="wa-fab"/.test(html)) continue;
        if (!/js\/core\/ui\.js/.test(html)) {
            missing.push(path.relative(ROOT, file));
        }
    }
    assert.deepEqual(missing, [], `pages with .wa-fab but no shared UI: ${missing.join(', ')}`);
});

test('Telegram contact links use the direct handle, not the channel', () => {
    const offenders = [];
    for (const file of htmlFiles()) {
        const html = fs.readFileSync(file, 'utf8');
        if (html.includes('t.me/cosylanguagesproject')) offenders.push(path.relative(ROOT, file));
    }
    assert.deepEqual(offenders, [], `pages still linking the Telegram channel: ${offenders.join(', ')}`);
});
