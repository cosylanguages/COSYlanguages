/**
 * COSY Ecosystem Strip (shared)
 * File: js/ecosystem-strip.js
 *
 * One shared "🌐 COSY Ecosystem" bar for every COSY site except the COSYlanguages hub itself.
 * It links to the sibling repositories; it never copies their content.
 *
 * Hosts mount it with:
 *   <link rel="stylesheet" href="https://cosylanguages.github.io/COSYlanguages/css/ecosystem-strip.css">
 *   <div data-ecosystem-strip data-self="events"></div>
 *   <script src="https://cosylanguages.github.io/COSYlanguages/js/ecosystem-strip.js" defer></script>
 *
 * `data-self` (languages|events|data|tools|practice|games|platform|manuals|studio) removes the host's
 * own link. COSYplatform and COSYmanuals are shown only to signed-in visitors; the session is read
 * from the shared Supabase storage key "cosy-auth" (same key every COSY site writes), and the bar
 * updates live when the visitor signs in or out in another tab.
 */

(function () {
    'use strict';

    var BASE = 'https://cosylanguages.github.io/';

    // Public sites every visitor sees, in canonical order. The host's own entry is dropped via data-self.
    var PUBLIC_DESTINATIONS = [
        { key: 'languages', label: 'COSYlanguages', icon: '🏠', url: BASE + 'COSYlanguages/' },
        { key: 'events',    label: 'COSYevents',    icon: '🎉', url: BASE + 'COSYevents/' },
        { key: 'data',      label: 'COSYdata',      icon: '📊', url: BASE + 'COSYdata/' },
        { key: 'tools',     label: 'COSYtools',     icon: '🔎', url: BASE + 'COSYtools/' },
        { key: 'practice',  label: 'COSYpractice',  icon: '🗣️', url: BASE + 'COSYpractice/' },
        { key: 'games',     label: 'COSYgames',     icon: '🎮', url: BASE + 'COSYgames/' },
        { key: 'magazine',  label: 'COSYmagazine',  icon: '📰', url: BASE + 'COSYmagazine/' }
    ];

    // Gated / account areas, revealed only to signed-in visitors.
    var MEMBER_DESTINATIONS = [
        { key: 'platform', label: 'COSYplatform', icon: '🧑‍🏫', url: BASE + 'COSYplatform/' },
        { key: 'manuals',  label: 'COSYmanuals',  icon: '📖', url: BASE + 'COSYmanuals/' }
    ];

    var AUTH_STORAGE_KEY = 'cosy-auth';

    // The brand phrase and accessible name, translated for the languages the ecosystem ships.
    var STRINGS = {
        en: { brand: '🌐 COSY Ecosystem:', label: 'COSY Ecosystem products' },
        fr: { brand: '🌐 Écosystème COSY :', label: 'Produits de l\u2019écosystème COSY' },
        it: { brand: '🌐 Ecosistema COSY:', label: 'Prodotti dell\u2019ecosistema COSY' },
        ru: { brand: '🌐 Экосистема COSY:', label: 'Продукты экосистемы COSY' },
        el: { brand: '🌐 Οικοσύστημα COSY:', label: 'Προϊόντα οικοσυστήματος COSY' }
    };

    function stringsFor(lang) {
        var code = String(lang || 'en').slice(0, 2).toLowerCase();
        return STRINGS[code] || STRINGS.en;
    }

    function escapeHTML(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    // A stored Supabase session is a JSON object with access_token and a future expiry. Anything
    // missing, malformed or expired counts as signed out.
    function sessionIsLive(raw) {
        if (!raw) return false;
        var session;
        try { session = JSON.parse(raw); } catch (e) { return false; }
        if (!session || typeof session !== 'object') return false;
        if (!session.access_token && !session.refresh_token) return false;
        if (typeof session.expires_at === 'number' && session.expires_at * 1000 < Date.now()) return false;
        return true;
    }

    function isSignedIn() {
        try {
            return sessionIsLive(window.localStorage.getItem(AUTH_STORAGE_KEY));
        } catch (e) {
            return false;
        }
    }

    function linkHTML(dest) {
        return '<a class="cosy-strip-link" href="' + escapeHTML(dest.url) + '">' +
            escapeHTML(dest.label) + ' ' + escapeHTML(dest.icon) + '</a>';
    }

    function linksHTML(selfKey) {
        var destinations = PUBLIC_DESTINATIONS.slice();
        if (isSignedIn()) destinations = destinations.concat(MEMBER_DESTINATIONS);

        // The host's own site is left out of the bar entirely.
        destinations = destinations.filter(function (dest) { return dest.key !== selfKey; });

        return destinations.map(function (dest) {
            return '<li>' + linkHTML(dest) + '</li>';
        }).join('');
    }

    // Hosts may keep their own trailing control (e.g. COSYtools' theme toggle) inside the bar:
    //   <div data-ecosystem-strip data-self="tools"><button id="cosy-theme-toggle">…</button></div>
    var EXTRA_SELECTOR = '[data-strip-extra], #cosy-theme-toggle';

    function render(host) {
        var selfKey = (host.getAttribute('data-self') || '').trim().toLowerCase();
        var lang = host.getAttribute('data-lang') ||
            (document.documentElement && document.documentElement.lang) || 'en';
        var t = stringsFor(lang);
        host.classList.add('cosy-ecosystem-strip');
        host.setAttribute('role', 'navigation');
        host.setAttribute('aria-label', t.label);

        // On a later refresh, update the brand and links in place so any host control we already
        // moved into the bar keeps its event listeners.
        var inner = host.querySelector('.cosy-strip-inner');
        if (inner) {
            var brandEl = inner.querySelector('.cosy-strip-brand');
            if (brandEl) brandEl.textContent = t.brand;
            var listEl = inner.querySelector('.cosy-strip-links');
            if (listEl) listEl.innerHTML = linksHTML(selfKey);
            return;
        }

        var extra = host.querySelector(EXTRA_SELECTOR);
        host.innerHTML = '<div class="cosy-strip-inner">' +
            '<span class="cosy-strip-brand">' + escapeHTML(t.brand) + '</span>' +
            '<ul class="cosy-strip-links">' + linksHTML(selfKey) + '</ul>' +
            '<span class="cosy-strip-extra"></span>' +
            '</div>';

        // Move the live node (not a copy) into the trailing slot so it keeps its listeners.
        if (extra) {
            var slot = host.querySelector('.cosy-strip-extra');
            if (slot && slot.appendChild) slot.appendChild(extra);
        }
    }

    function initAll() {
        Array.prototype.forEach.call(document.querySelectorAll('[data-ecosystem-strip]'), function (el) {
            if (!el.__ecosystemStripRendered) {
                render(el);
                el.__ecosystemStripRendered = true;
            }
        });
    }

    // Re-render every mounted strip when the session changes in this tab or another one.
    function refreshAll() {
        Array.prototype.forEach.call(document.querySelectorAll('[data-ecosystem-strip]'), function (el) {
            render(el);
        });
    }

    function watchAuth() {
        window.addEventListener('storage', function (event) {
            if (event.key === AUTH_STORAGE_KEY) refreshAll();
        });
        // Supabase fires this within the same tab after sign-in/sign-out.
        document.addEventListener('cosy:auth', refreshAll);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () { initAll(); watchAuth(); });
    } else {
        initAll();
        watchAuth();
    }

    window.COSY_EcosystemStrip = {
        render: render,
        refresh: refreshAll,
        isSignedIn: isSignedIn,
        PUBLIC_DESTINATIONS: PUBLIC_DESTINATIONS,
        MEMBER_DESTINATIONS: MEMBER_DESTINATIONS
    };
})();
