/**
 * js/core/i18n.js
 * The site's single i18n engine.
 *
 * Two string sets exist and both are consumed here:
 *   data/ui/<lang>.json      flat or nested keys for t() and [data-translate-key]
 *   js/i18n/<lang>.json      nested keys for [data-i18n] chrome in page markup
 *
 * Page chrome that lives in markup (nav, footer) is translated in place through
 * [data-translate-key] and [data-i18n]; nothing is rewritten wholesale.
 */

(function() {
    'use strict';

    const UI_DATA_LANGS = ['el', 'en', 'fr', 'it', 'ru'];
    const CHROME_LANGS = ['el', 'en', 'fr', 'it', 'ru'];

    let currentLang = null;
    let translations = {};
    let chromeTranslations = {};
    let chromeFallback = {};

    /**
     * Relative prefix ('../' repeated) that reaches the site root. Used for the
     * fetches and for the injected footer links, on Pages, on a local server and
     * from a file:// checkout.
     */
    function getPrefix() {
        if (window.COSY && typeof window.COSY.getPrefix === 'function') {
            return window.COSY.getPrefix();
        }
        let path = window.location.pathname;
        for (const base of ['/COSYlanguages/', '/COSYlanguages']) {
            if (path.startsWith(base)) {
                path = path.slice(base.length);
                break;
            }
        }
        if (path.startsWith('/')) path = path.slice(1);
        const segments = path.split('/').filter(Boolean);
        if (segments.length && segments[segments.length - 1].includes('.')) segments.pop();
        return segments.length ? '../'.repeat(segments.length) : './';
    }

    /**
     * Determines the current language: stored choice, then the URL path, then 'en'.
     */
    function detectLanguage() {
        // A /languages/<code>/ page is written in that language; the URL wins over
        // a previously stored UI choice, otherwise the page reads in one language
        // and its navigation in another.
        const langMatch = window.location.pathname.match(/\/languages\/([a-z]{2})\//);
        if (langMatch) return langMatch[1].toLowerCase();

        const stored = localStorage.getItem('cosy_last_language');
        if (stored) return stored.toLowerCase();

        return (document.documentElement.lang || 'en').toLowerCase();
    }

    async function fetchJSON(path) {
        try {
            const response = await fetch(`${path}?v=${Date.now()}`);
            if (!response.ok) return null;
            return await response.json();
        } catch (error) {
            console.warn('[i18n] could not load', path, error);
            return null;
        }
    }

    async function fetchTranslations(lang) {
        if (!lang || !UI_DATA_LANGS.includes(lang)) return {};
        return (await fetchJSON(`${getPrefix()}data/ui/${lang}.json`)) || {};
    }

    async function fetchChrome(lang) {
        return (await fetchJSON(`${getPrefix()}js/i18n/${lang}.json`)) || {};
    }

    function nestedLookup(source, key) {
        if (!source || !key) return '';
        if (typeof source[key] === 'string') return source[key];
        let value = source;
        for (const part of key.split('.')) {
            if (value && typeof value === 'object' && part in value) {
                value = value[part];
            } else {
                return '';
            }
        }
        return typeof value === 'string' ? value : '';
    }

    /**
     * t() resolves against data/ui/<lang>.json: literal key first, then nested.
     * A missing key stays empty: target-language pages are not back-filled with
     * English (the documented immersion rule).
     */
    window.t = function(key) {
        if (!key) return '';
        if (typeof translations[key] === 'string') return translations[key];
        return nestedLookup(translations, key);
    };

    /** Chrome lookup for [data-i18n]: current language, then English. */
    function tc(key) {
        return nestedLookup(chromeTranslations, key) || nestedLookup(chromeFallback, key);
    }

    const PICTOGRAPH = /[\u{1F000}-\u{1FAFF}\u{2190}-\u{21FF}\u{2300}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}]/u;

    /**
     * Many string values carry their own emoji while the surrounding template
     * renders one too, which showed up as "🔐🔐 Connexion". Drop the value's
     * pictographs when the same node's context already shows one.
     */
    function dedupeIcon(el, value) {
        const parent = el.parentElement;
        if (!parent || !parent.querySelector('.nav-item-icon')) return value;

        const stripped = value.replace(/[\u{1F000}-\u{1FAFF}\u{2190}-\u{21FF}\u{2300}-\u{27BF}\u{2B00}-\u{2BFF}]/gu, '')
            .replace(/\s{2,}/g, ' ')
            .trim();
        return stripped || value;
    }

    function applyText(el, value) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            if (el.hasAttribute('placeholder')) el.setAttribute('placeholder', value);
            else el.value = value;
        } else if (el.tagName === 'META') {
            el.setAttribute('content', value);
        } else if (el.tagName === 'TITLE') {
            if (value) document.title = value;
        } else {
            el.innerHTML = value;
        }
    }

    function applyTranslations() {
        // data-translate-key wins: it is the language-specific string, while
        // data-i18n falls back to English and would overwrite it on shared nodes.
        document.querySelectorAll('[data-translate-key]').forEach(el => {
            const value = window.t(el.getAttribute('data-translate-key'));
            if (value || el.hasAttribute('data-immersion-strict')) {
                applyText(el, value ? dedupeIcon(el, value) : value);
                if (value) el.setAttribute('data-i18n-applied', '1');
            }
        });

        document.querySelectorAll('[data-i18n]').forEach(el => {
            if (el.getAttribute('data-i18n-applied')) return;
            const value = tc(el.getAttribute('data-i18n'));
            if (value) applyText(el, value);
        });

        document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
            const value = tc(el.getAttribute('data-i18n-aria-label'));
            if (value) el.setAttribute('aria-label', value);
        });

        updateFlagPickerUI();
    }

    function updateFlagPickerUI() {
        for (const id of ['cosy-language-switcher', 'cosy-language-switcher-mobile']) {
            const el = document.getElementById(id);
            if (el) el.value = currentLang;
        }
    }

    async function loadLanguage(lang) {
        currentLang = (lang || 'en').toLowerCase();
        if (UI_DATA_LANGS.includes(currentLang)) document.documentElement.lang = currentLang;
        const [ui, chrome] = await Promise.all([
            fetchTranslations(currentLang),
            CHROME_LANGS.includes(currentLang) ? fetchChrome(currentLang) : Promise.resolve({})
        ]);
        translations = ui || {};
        chromeTranslations = chrome || {};
        if (Object.keys(chromeFallback).length === 0) {
            chromeFallback = currentLang === 'en' ? chromeTranslations : await fetchChrome('en');
        }
    }

    let inSyncChange = false;

    /**
     * Switching entry point, exposed as both setLanguage (engine scripts) and
     * setUILanguage (page controls) so every existing caller keeps working.
     */
    async function switchTo(lang) {
        if (!lang || inSyncChange) return;
        const next = lang.toLowerCase();
        if (currentLang && next === currentLang) return;
        if (localStorage.getItem('cosy_ui_lang_locked') === 'true' && currentLang) return;

        inSyncChange = true;
        try {
            await loadLanguage(next);
            // Only an explicit choice is remembered; reading a /languages/<code>/
            // page must not silently switch the whole site's chrome.
            localStorage.setItem('cosy_last_language', currentLang);
            applyTranslations();
            if (window.COSY && typeof window.COSY.refresh === 'function') window.COSY.refresh();
            document.dispatchEvent(new CustomEvent('cosyLanguageChanged', { detail: { lang: currentLang } }));
        } finally {
            inSyncChange = false;
        }
    }

    window.setLanguage = switchTo;
    window.setUILanguage = switchTo;

    window.toggleLanguageLock = function() {
        const locked = localStorage.getItem('cosy_ui_lang_locked') === 'true';
        const next = !locked;
        localStorage.setItem('cosy_ui_lang_locked', next ? 'true' : 'false');
        const message = nestedLookup(chromeTranslations, next ? 'lang_locked_notice' : 'lang_unlocked_notice') ||
            (next ? 'Device language locked.' : 'Device language unlocked.');
        if (window.COSY && typeof window.COSY.showToast === 'function') window.COSY.showToast(message);
        updateFlagPickerUI();
        document.dispatchEvent(new CustomEvent('cosyLanguageLockChanged', { detail: { locked: next } }));
        return next;
    };

    async function initI18n() {
        await loadLanguage(detectLanguage());
        applyTranslations();
        if (window.COSY && typeof window.COSY.refresh === 'function') window.COSY.refresh();
        document.dispatchEvent(new CustomEvent('cosyI18nReady', { detail: { lang: currentLang } }));
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initI18n);
    } else {
        initI18n();
    }

    window.COSY_I18N = {
        get currentLang() { return currentLang; },
        get translations() { return translations; },
        get chrome() { return chromeTranslations; },
        t: window.t,
        refresh: applyTranslations
    };
    window.COSY_UI_I18N = window.COSY_I18N;
})();
