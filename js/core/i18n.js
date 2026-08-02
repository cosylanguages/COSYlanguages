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
     * localStorage wins, otherwise fallback to path/URL, otherwise 'en'.
     */
    function detectLanguage() {
        const stored = localStorage.getItem('cosy_last_language');
        if (stored) return stored.toLowerCase();

        const path = window.location.pathname;

        // Rule 1: URL path determines language (e.g., /languages/el/)
        const langMatch = path.match(/\/languages\/([a-z]{2})\//);
        if (langMatch) return langMatch[1].toLowerCase();

        // Fallback to English
        return 'en';
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
     * Dynamically loads translations.js from translations map if present.
     */
    async function loadTranslationsJs(lang) {
        if (!lang) return {};

        // If already loaded in window.translations
        if (window.translations && window.translations[lang]) {
            return window.translations[lang];
        }

        const prefix = (window.COSY && typeof window.COSY.getPrefix === 'function')
            ? window.COSY.getPrefix()
            : '/';

        const map = {
            'en': 'js/data/germanic/en/translations.js',
            'fr': 'js/data/romance/fr/translations.js',
            'it': 'js/data/romance/it/translations.js',
            'ru': 'js/data/slavic/ru/translations.js',
            'el': 'js/data/hellenic/el/translations.js',
            'es': 'js/data/romance/es/translations.js',
            'de': 'js/data/germanic/de/translations.js',
            'pt': 'js/data/romance/pt/translations.js',
            'hy': 'js/data/armenian/hy/translations.js',
            'ka': 'js/data/kartvelian/ka/translations.js',
            'tt': 'js/data/turkic/tt/translations.js',
            'ba': 'js/data/turkic/ba/translations.js',
            'br': 'js/data/celtic/br/translations.js'
        };

        const path = map[lang];
        if (!path) return {};

        return new Promise((resolve) => {
            const s = document.createElement('script');
            s.src = prefix + path;
            s.onload = () => {
                s.remove();
                resolve(window.translations && window.translations[lang] ? window.translations[lang] : {});
            };
            s.onerror = () => {
                s.remove();
                resolve({});
            };
            document.head.appendChild(s);
        });
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
        if (!currentLang) return; // Safety check
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
     * Public setLanguage for manual switching.
     */
    window.setLanguage = async function(lang) {
        if (!lang) return;
        currentLang = lang.toLowerCase();
        localStorage.setItem('cosy_last_language', currentLang);
        const jsonTranslations = await fetchTranslations(currentLang);
        const jsTranslations = await loadTranslationsJs(currentLang);
        translations = { ...jsTranslations, ...jsonTranslations };
        applyTranslations();

        // Refresh navbar/mobile menu/etc. to update lang pickers & menus
        if (window.COSY && typeof window.COSY.refresh === 'function') {
            window.COSY.refresh();
        }

        document.dispatchEvent(new CustomEvent('cosyLanguageChanged', { detail: { lang: currentLang } }));
    };

    /**
     * Initializes the i18n system.
     */
    async function initI18n() {
        currentLang = detectLanguage();

        if (currentLang) {
            localStorage.setItem('cosy_last_language', currentLang);
            const jsonTranslations = await fetchTranslations(currentLang);
            const jsTranslations = await loadTranslationsJs(currentLang);
            translations = { ...jsTranslations, ...jsonTranslations };
            applyTranslations();

            // Refresh navbar/mobile menu/etc. if engine is already loaded
            if (window.COSY && typeof window.COSY.refresh === 'function') {
                window.COSY.refresh();
            }
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
