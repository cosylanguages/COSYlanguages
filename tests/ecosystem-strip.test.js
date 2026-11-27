/**
 * tests/ecosystem-strip.test.js
 * Unit tests for the shared ecosystem strip (js/ecosystem-strip.js).
 *
 * The strip is the top "🌐 COSYlanguages Ecosystem" bar on every COSYlanguages site except the COSYlanguages hub.
 * These tests assert the canonical link set and order, that the host's own site is left out, and
 * that the member-only links (COSYplatform, COSYmanuals) appear only for signed-in visitors.
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const SOURCE = fs.readFileSync(path.join(__dirname, '../js/ecosystem-strip.js'), 'utf8');

function fakeNode(attrs = {}) {
    return {
        _html: '',
        _attrs: attrs,
        _classes: [],
        getAttribute(k) { return k in this._attrs ? this._attrs[k] : null; },
        hasAttribute(k) { return k in this._attrs; },
        setAttribute(k, v) { this._attrs[k] = v; },
        querySelector() { return null; },
        classList: {
            add(c) { if (!this._owner._classes.includes(c)) this._owner._classes.push(c); },
            toggle() {}
        },
        get innerHTML() { return this._html; },
        set innerHTML(v) { this._html = v; }
    };
}

function makeHost(selfKey) {
    const host = fakeNode(selfKey ? { 'data-self': selfKey } : {});
    host.classList._owner = host;
    return host;
}

// A minimal <button> for the theme toggle the strip may create.
function fakeButton() {
    return {
        type: '', id: '', className: '', textContent: '',
        _attrs: {},
        setAttribute(k, v) { this._attrs[k] = v; },
        hasAttribute(k) { return k in this._attrs; },
        getAttribute(k) { return k in this._attrs ? this._attrs[k] : null; }
    };
}

function load(hostEl, storage = {}, lang = 'en', opts = {}) {
    const store = Object.assign({}, storage);
    const docEl = {
        lang,
        _attrs: {},
        style: {},
        getAttribute(k) { return k in this._attrs ? this._attrs[k] : null; },
        setAttribute(k, v) { this._attrs[k] = v; },
        classList: {
            _set: new Set(),
            toggle(c, on) { if (on) this._set.add(c); else this._set.delete(c); },
            contains(c) { return this._set.has(c); }
        }
    };
    const document = {
        readyState: 'complete',
        documentElement: docEl,
        body: opts.body,
        createElement: () => fakeButton(),
        querySelector(sel) {
            if (opts.querySelector) return opts.querySelector(sel);
            // Default: an opted-in mount is found only when the host carries the attribute.
            if (sel === '[data-ecosystem-strip][data-theme-toggle]') {
                return hostEl && hostEl.hasAttribute && hostEl.hasAttribute('data-theme-toggle') ? hostEl : null;
            }
            return null;
        },
        querySelectorAll(sel) {
            if (sel === '[data-ecosystem-strip]') return hostEl ? [hostEl] : [];
            return opts.controls || [];
        },
        addEventListener() {}
    };
    const localStorage = {
        getItem: (k) => (k in store ? store[k] : null),
        setItem: (k, v) => { store[k] = String(v); },
        removeItem: (k) => { delete store[k]; }
    };
    const window = {
        localStorage,
        addEventListener() {},
        matchMedia: () => ({ matches: !!opts.systemDark, addEventListener() {} })
    };
    const context = { window, document, console, Date, Math, JSON, Set };
    context.window.document = document;
    vm.createContext(context);
    vm.runInContext(SOURCE, context);
    return { api: context.window.COSY_EcosystemStrip, document, docEl, store, window };
}

const PUBLIC_KEYS = ['languages', 'events', 'data', 'tools', 'practice', 'games', 'magazine'];
const MEMBER_KEYS = ['platform', 'manuals'];

function liveSession() {
    return JSON.stringify({ access_token: 'token', refresh_token: 'refresh', expires_at: Math.floor(Date.now() / 1000) + 3600 });
}

function linksOf(html) {
    return [...html.matchAll(/<a class="cosy-strip-link"[^>]*href="([^"]+)"[^>]*>([^<]+)<\/a>/g)]
        .map((m) => ({ url: m[1], label: m[2].trim() }));
}

test('Ecosystem Strip Suite', async (t) => {

    await t.test('1. Canonical public set, in order, for a signed-out visitor', () => {
        const host = makeHost('studio'); // not a public site, so nothing is filtered out
        load(host);
        const links = linksOf(host.innerHTML);
        const labels = links.map((l) => l.label.replace(/ [^\s]+$/, '')); // drop trailing emoji
        assert.deepEqual(labels, ['COSYlanguages', 'COSYevents', 'COSYdata', 'COSYtools', 'COSYpractice', 'COSYgames', 'COSYmagazine']);
    });

    await t.test('2. The host\'s own site is left out', () => {
        for (const self of PUBLIC_KEYS) {
            const host = makeHost(self);
            load(host);
            const labels = linksOf(host.innerHTML).map((l) => l.label.toLowerCase());
            const selfLabel = 'cosy' + (self === 'languages' ? 'languages' : self);
            assert.ok(!labels.some((l) => l.startsWith(selfLabel)), `${self}: own link must be removed`);
            assert.equal(linksOf(host.innerHTML).length, PUBLIC_KEYS.length - 1);
        }
    });

    await t.test('3. Every link points at its repository on the github.io origin', () => {
        const host = makeHost('events');
        load(host);
        for (const l of linksOf(host.innerHTML)) {
            assert.match(l.url, /^https:\/\/cosylanguages\.github\.io\//);
        }
    });

    await t.test('4. Signed-out visitors do not see platform or manuals', () => {
        const host = makeHost('events');
        load(host, {});
        const labels = linksOf(host.innerHTML).map((l) => l.label);
        assert.ok(!labels.some((l) => l.includes('COSYplatform')));
        assert.ok(!labels.some((l) => l.includes('COSYmanuals')));
    });

    await t.test('5. Signed-in visitors also see platform and manuals', () => {
        const host = makeHost('events');
        load(host, { 'cosy-auth': liveSession() });
        const labels = linksOf(host.innerHTML).map((l) => l.label);
        assert.ok(labels.some((l) => l.includes('COSYplatform')), 'platform link shown when signed in');
        assert.ok(labels.some((l) => l.includes('COSYmanuals')), 'manuals link shown when signed in');
        assert.equal(linksOf(host.innerHTML).length, PUBLIC_KEYS.length + MEMBER_KEYS.length - 1);
    });

    await t.test('6. An expired or malformed session counts as signed out', () => {
        const expired = JSON.stringify({ access_token: 't', expires_at: Math.floor(Date.now() / 1000) - 10 });
        const host = makeHost('events');
        load(host, { 'cosy-auth': expired });
        assert.ok(!linksOf(host.innerHTML).some((l) => l.label.includes('COSYplatform')));

        const host2 = makeHost('events');
        load(host2, { 'cosy-auth': '{not json' });
        assert.ok(!linksOf(host2.innerHTML).some((l) => l.label.includes('COSYplatform')));
    });

    await t.test('7. Renders the branded container and marks itself for styling', () => {
        const host = makeHost('data');
        load(host);
        assert.ok(host.innerHTML.includes('🌐 COSYlanguages Ecosystem:'));
        assert.ok(host.innerHTML.includes('class="cosy-strip-links"'));
        assert.ok(host._classes.includes('cosy-ecosystem-strip'));
        assert.equal(host.getAttribute('role'), 'navigation');
    });

    await t.test('8. Brand and label follow the page language', () => {
        const fr = makeHost('events');
        load(fr, {}, 'fr');
        assert.ok(fr.innerHTML.includes('Écosystème COSYlanguages'));
        assert.equal(fr.getAttribute('aria-label'), 'Produits de l’écosystème COSYlanguages');

        const ru = makeHost('events');
        load(ru, {}, 'ru');
        assert.ok(ru.innerHTML.includes('Экосистема COSYlanguages'));

        const unknown = makeHost('events');
        load(unknown, {}, 'zz');
        assert.ok(unknown.innerHTML.includes('🌐 COSYlanguages Ecosystem:'), 'unknown language falls back to English');
    });

    await t.test('9. A host control inside the mount is moved into the bar', () => {
        const toggle = { id: 'cosy-theme-toggle' };
        const slot = { _kids: [], appendChild(n) { this._kids.push(n); } };
        const host = {
            _html: '', _attrs: { 'data-self': 'tools' }, _classes: [],
            classList: { add(c) { host._classes.push(c); } },
            getAttribute(k) { return k in this._attrs ? this._attrs[k] : null; },
            setAttribute(k, v) { this._attrs[k] = v; },
            get innerHTML() { return this._html; },
            set innerHTML(v) { this._html = v; },
            querySelector(sel) {
                if (sel === '.cosy-strip-inner') return null;
                if (sel.indexOf('cosy-theme-toggle') !== -1) return toggle;
                if (sel === '.cosy-strip-extra') {
                    return host._html.includes('cosy-strip-extra') ? slot : null;
                }
                return null;
            }
        };
        load(host);
        assert.deepEqual(slot._kids, [toggle], 'the live control node is moved into the trailing slot');
        assert.ok(host.innerHTML.includes('cosy-strip-extra'));
        assert.ok(host.innerHTML.includes('COSYlanguages'), 'links still render');
    });

    await t.test('10. Pages that do not opt in are left untouched', () => {
        const host = makeHost('events'); // no data-theme-toggle
        const { docEl, api } = load(host);
        assert.equal(docEl.getAttribute('data-theme'), null, 'no theme attribute set');
        assert.equal(api.getTheme(), 'light');
    });

    await t.test('11. Opted-in page applies the saved theme on load', () => {
        const host = makeHost('manuals');
        host.setAttribute('data-theme-toggle', '');
        const { docEl } = load(host, { 'cosy.theme': 'dark' });
        assert.equal(docEl.getAttribute('data-theme'), 'dark');
    });

    await t.test('12. Legacy storage keys are honoured', () => {
        const host = makeHost('manuals');
        host.setAttribute('data-theme-toggle', '');
        const { docEl } = load(host, { cosy_theme: 'dark' });
        assert.equal(docEl.getAttribute('data-theme'), 'dark');
    });

    await t.test('13. With no saved choice the system preference wins', () => {
        const darkHost = makeHost('manuals');
        darkHost.setAttribute('data-theme-toggle', '');
        assert.equal(load(darkHost, {}, 'en', { systemDark: true }).docEl.getAttribute('data-theme'), 'dark');

        const lightHost = makeHost('manuals');
        lightHost.setAttribute('data-theme-toggle', '');
        assert.equal(load(lightHost, {}, 'en', { systemDark: false }).docEl.getAttribute('data-theme'), 'light');
    });

    await t.test('14. Toggling flips the theme and writes every storage key', () => {
        const host = makeHost('manuals');
        host.setAttribute('data-theme-toggle', '');
        const { api, docEl, store } = load(host, { 'cosy.theme': 'light' });
        api.toggleTheme();
        assert.equal(docEl.getAttribute('data-theme'), 'dark');
        assert.equal(store['cosy.theme'], 'dark');
        assert.equal(store.cosy_theme, 'dark');
        assert.equal(store['ce-theme'], 'dark');
    });

    await t.test('15. A page that ships its own control gets no second toggle', () => {
        const host = makeHost('events');
        host.setAttribute('data-theme-toggle', '');
        const own = { _attrs: {}, setAttribute(k, v) { this._attrs[k] = v; }, hasAttribute(k) { return k in this._attrs; } };
        const slot = { _kids: [], appendChild(n) { this._kids.push(n); }, querySelector() { return null; } };
        const host2 = makeHost('events');
        host2.setAttribute('data-theme-toggle', '');
        host2.querySelector = (sel) => (sel === '.cosy-strip-extra' ? slot : null);
        load(host2, { 'cosy.theme': 'dark' }, 'en', {
            controls: [own],
            querySelector: (sel) => {
                if (sel === '[data-ecosystem-strip][data-theme-toggle]') return host2;
                if (sel === '[data-ecosystem-strip]') return host2;
                if (sel.indexOf('#cosy-theme-toggle') === 0) return null;
                return own; // THEME_CONTROL_SELECTOR matches an existing control
            }
        });
        assert.deepEqual(slot._kids, [], 'no extra toggle is appended');
        assert.equal(own._attrs['aria-pressed'], 'true', 'the existing control is driven');
    });
});
