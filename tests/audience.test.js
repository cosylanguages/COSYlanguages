/**
 * tests/audience.test.js
 * Unit tests for js/core/audience.js (audience preference + accessibility settings).
 * Runs the real script in a vm sandbox with a minimal fake DOM, no dependencies.
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const SRC = fs.readFileSync(path.join(__dirname, '..', 'js', 'core', 'audience.js'), 'utf8');

function makeEl() {
    const attrs = {};
    const el = {
        id: '', className: '', innerHTML: '', value: '', checked: false,
        setAttribute: (k, v) => { attrs[k] = String(v); },
        getAttribute: (k) => (k in attrs ? attrs[k] : null),
        addEventListener: () => {},
        appendChild: () => {},
        contains: () => false,
        querySelectorAll: () => [],
        querySelector: () => null,
        classList: { add() {}, remove() {}, toggle() {}, contains: () => false },
        style: {}
    };
    return el;
}

function boot({ stored = {}, storageBlocked = false } = {}) {
    const store = new Map(Object.entries(stored));
    const localStorage = storageBlocked
        ? { getItem() { throw new Error('blocked'); }, setItem() { throw new Error('blocked'); }, removeItem() { throw new Error('blocked'); } }
        : { getItem: (k) => (store.has(k) ? store.get(k) : null), setItem: (k, v) => store.set(k, String(v)), removeItem: (k) => store.delete(k) };
    const root = makeEl();
    const byId = {};
    let network = 0;
    const document = {
        readyState: 'complete',
        documentElement: root,
        body: { appendChild: (el) => { if (el.id) byId[el.id] = el; } },
        createElement: () => makeEl(),
        getElementById: (id) => byId[id] || (id !== 'cosy-audience-widget' && /^(cosy-audience-|cap-)/.test(id) ? makeEl() : null),
        addEventListener: () => {},
        dispatchEvent: () => true
    };
    const window = { COSYlanguages: undefined, localStorage, matchMedia: () => ({ matches: false }), CustomEvent: function (t, o) { this.type = t; this.detail = o && o.detail; }, dispatchEvent: () => true, fetch: () => { network++; }, XMLHttpRequest: function () { network++; } };
    window.window = window; window.document = document;
    const ctx = vm.createContext({ window, document, localStorage, CustomEvent: window.CustomEvent, console });
    vm.runInContext(SRC, ctx);
    return { api: window.COSY.Audience, root, store, network: () => network, byId };
}

test('exposes API, starts neutral and does not inject the old settings panel', () => {
    const { api, root, byId } = boot();
    assert.ok(api);
    assert.equal(root.getAttribute('data-audience'), 'default');
    assert.equal(root.getAttribute('data-text-scale'), '1.0');
    assert.equal(root.getAttribute('data-reduced-motion'), 'false');
    assert.equal(byId['cosy-audience-widget'], undefined);
});

test('setAudience / setTextScale / setReducedMotion apply and persist', () => {
    const { api, root, store } = boot();
    api.setAudience('seniors');
    api.setTextScale('1.25');
    api.setReducedMotion(true);
    assert.equal(root.getAttribute('data-audience'), 'seniors');
    assert.equal(root.getAttribute('data-text-scale'), '1.25');
    assert.equal(root.getAttribute('data-reduced-motion'), 'true');
    assert.equal(store.get('cosy_audience_preference'), 'seniors');
    assert.equal(store.get('cosy_accessibility_text_scale'), '1.25');
    assert.equal(store.get('cosy_accessibility_reduced_motion'), 'true');
});

test('invalid values fall back to safe defaults', () => {
    const { api, root } = boot();
    api.setAudience('seniors');
    api.setAudience('bogus');
    assert.equal(root.getAttribute('data-audience'), 'default');
    api.setTextScale('9');
    assert.equal(root.getAttribute('data-text-scale'), '1.0');
});

test('stores only documented cosy keys and never age or identity data', () => {
    const { api, store } = boot();
    api.setAudience('teens'); api.setTextScale('1.15'); api.setReducedMotion(true);
    const keys = [...store.keys()].sort();
    assert.deepEqual(keys, ['cosy_accessibility_reduced_motion', 'cosy_accessibility_text_scale', 'cosy_audience_preference']);
    assert.ok(!keys.some((k) => /age|birth|dob/i.test(k)));
});

test('resetAll restores defaults', () => {
    const { api, root } = boot();
    api.setAudience('adults'); api.setTextScale('1.25'); api.setReducedMotion(true);
    api.resetAll();
    assert.equal(root.getAttribute('data-audience'), 'default');
    assert.equal(root.getAttribute('data-text-scale'), '1.0');
    assert.equal(root.getAttribute('data-reduced-motion'), 'false');
});

test('restores saved state on the next load and survives corrupt storage', () => {
    const a = boot({ stored: { cosy_audience_preference: 'teens', cosy_accessibility_text_scale: '1.40', cosy_accessibility_reduced_motion: 'true' } });
    assert.equal(a.root.getAttribute('data-audience'), 'teens');
    assert.equal(a.root.getAttribute('data-reduced-motion'), 'true');
    const b = boot({ stored: { cosy_audience_preference: '<script>', cosy_accessibility_text_scale: 'abc' } });
    assert.equal(b.root.getAttribute('data-audience'), 'default');
    assert.equal(b.root.getAttribute('data-text-scale'), '1.0');
});

test('works when localStorage is blocked and makes no network calls', () => {
    const { api, root, network } = boot({ storageBlocked: true });
    assert.doesNotThrow(() => api.setAudience('children'));
    assert.equal(root.getAttribute('data-audience'), 'children');
    assert.equal(network(), 0);
});

test('privacy page documents every storage key the feature uses', () => {
    const html = fs.readFileSync(path.join(__dirname, '..', 'privacy.html'), 'utf8');
    for (const k of ['cosy_audience_preference', 'cosy_accessibility_text_scale', 'cosy_accessibility_reduced_motion']) {
        assert.ok(html.includes(`<code class="storage-key">${k}</code>`), `${k} listed in privacy list`);
        assert.ok(html.includes(`'${k}',`), `${k} in storage console`);
    }
});
