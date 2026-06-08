/**
 * js/core/i18n.js
 * Language detection and UI localization system based on JSON string files.
 * Adheres to the "No-Translation" immersion principle: content is exclusively
 * target-language based, no fallback to English permitted.
 */

(function() {
    'use strict';

    let currentLang = null;
    let translations = {};

    /**
     * Determines the current language based on the environment.
     * URL path wins, then portal preference, then fallback to null (neutral).
     */
    function detectLanguage() {
        const path = window.location.pathname;

        // Rule 1: URL path determines language (e.g., /languages/el/)
        const langMatch = path.match(/\/languages\/([a-z]{2})\//);
        if (langMatch) return langMatch[1].toLowerCase();

        // Rule 4: Student portal language
        if (path.includes('/portal/')) {
            return localStorage.getItem('cosy_user_lang') || 'en';
        }

        // Rule 3: Homepage has no language mode
        return null;
    }

    /**
     * Fetches the UI strings JSON for a given language.
     */
    async function fetchTranslations(lang) {
        if (!lang) return {};

        const prefix = (window.COSY && typeof window.COSY.getPrefix === 'function')
            ? window.COSY.getPrefix()
            : '/';

        try {
            const response = await fetch(`${prefix}data/ui/${lang}.json?v=${Date.now()}`);
            if (!response.ok) throw new Error(`Could not load ${lang}.json`);
            return await response.json();
        } catch (e) {
            console.warn(`[i18n] Failed to load UI strings for ${lang}`, e);
            return {};
        }
    }


    /**
     * Translates a key using the currently loaded strings.
     * Supports nested keys (e.g., "nav.home").
     */
    window.t = function(key) {
        if (!key) return '';

        // Try literal match first
        if (translations[key]) return translations[key];

        // Try nested match
        const parts = key.split('.');
        let val = translations;
        for (const part of parts) {
            if (val && typeof val === 'object' && part in val) {
                val = val[part];
            } else {
                return ''; // No-Translation Rule: leave blank if missing
            }
        }
        return typeof val === 'string' ? val : '';
    };

    /**
     * Applies translations to all elements with data-translate-key.
     */
    function applyTranslations() {
        if (!currentLang) return; // Rule 3: Do nothing on neutral pages
        if (!translations || Object.keys(translations).length === 0) return; // Safety check

        const elements = document.querySelectorAll('[data-translate-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-translate-key');
            const translation = window.t(key);

            // Immersion rule: if key is missing, it becomes blank (or stays blank)
            // if we are in a specific language mode.
            if (translation || el.hasAttribute('data-immersion-strict')) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (el.hasAttribute('placeholder')) el.setAttribute('placeholder', translation);
                    else el.value = translation;
                } else if (el.tagName === 'META') {
                    el.setAttribute('content', translation);
                } else if (el.tagName === 'TITLE') {
                    if (translation) document.title = translation;
                } else {
                    el.innerHTML = translation;
                }
            }
        });
    }

    /**
     * Public setLanguage for manual switching (mostly portal/settings)
     */
    window.setLanguage = async function(lang) {
        if (!lang) return;
        currentLang = lang.toLowerCase();
        localStorage.setItem('cosy_user_lang', currentLang);
        localStorage.setItem('cosy_last_language', currentLang);
        translations = await fetchTranslations(currentLang);
        applyTranslations();
        document.dispatchEvent(new CustomEvent('cosyLanguageChanged', { detail: { lang: currentLang } }));
    };

    /**
     * Initializes the i18n system.
     */
    async function initI18n() {
        currentLang = detectLanguage();

        if (currentLang) {
            // Rule 2: Remember last used language
            localStorage.setItem('cosy_last_language', currentLang);
            translations = await fetchTranslations(currentLang);
            applyTranslations();
        }

        document.dispatchEvent(new CustomEvent('cosyI18nReady', { detail: { lang: currentLang } }));
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initI18n);
    } else {
        initI18n();
    }

    // Expose internal state for debugging/engine
    window.COSY_I18N = {
        get currentLang() { return currentLang; },
        get translations() { return translations; },
        refresh: applyTranslations
    };
})();
