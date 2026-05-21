/**
 * js/core/i18n.js
 * Language detection and translation-key system. Handles UI localization.
 *
 * --- i18n System Specification ---
 * 1. UI Shell Localization:
 *    - Uses the `data-translate-key` attribute on HTML elements.
 *    - Supported UI languages: en, fr, it, ru, el, es, de, pt, hy, ka, tt, ba, br.
 *    - Translations are stored in `js/data/{family}/{lang}/translations.js`.
 *
 * 2. Translation Lookup:
 *    - `window.t(key, lang)`: Programmatic lookup of a translation string.
 *    - Fallback: If a key is missing in the target language, it falls back to English ('en').
 *
 * 3. The "No-Translation" Immersion Principle:
 *    - Content (lessons, exercises, games) is primarily in the target language to encourage immersion.
 *    - UI elements (buttons, labels, instructions) are localized to assist navigation.
 *
 * 4. Automatic Update:
 *    - `setLanguage(lang)` updates all elements with `data-translate-key` and persists preference in `localStorage`.
 */

async function loadLanguageFile(lang) {
    if (window.translations && window.translations[lang]) return;

    let url = window.TRANSLATION_MAP ? window.TRANSLATION_MAP[lang] : null;
    if (!url) return;

    // Use a robust relative path mechanism
    const depth = (window.location.pathname.split('/').length - (window.location.pathname.includes('/COSYlanguages/') ? 3 : 2));
    let prefix = "";
    if (depth > 0) {
        prefix = '../'.repeat(depth);
    }
    url = prefix + url;

    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

window.t = function(key, lang) {
    lang = lang || localStorage.getItem('language') || 'en';
    if (window.translations && window.translations[lang] && window.translations[lang][key]) {
        return window.translations[lang][key];
    }
    if (window.translations && window.translations['en'] && window.translations['en'][key]) {
        return window.translations['en'][key];
    }
    return key;
};

async function setLanguage(lang) {
    try {
        await loadLanguageFile('en'); // Always load English as fallback
        await loadLanguageFile(lang);
    } catch (e) {
        console.error("Failed to load translation for", lang, e);
    }

    const elements = document.querySelectorAll('[data-translate-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate-key');
        if (window.translations && window.translations[lang] && window.translations[lang][key]) {
            const translation = window.translations[lang][key];
            if (element.tagName === 'META') {
                element.setAttribute('content', translation);
            } else if (element.tagName === 'TITLE') {
                document.title = translation;
                element.innerText = translation;
            } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.hasAttribute('placeholder')) {
                    element.setAttribute('placeholder', translation);
                } else {
                    element.value = translation;
                }
            } else {
                element.innerHTML = translation;
            }
        } else if (window.translations && window.translations['en'] && window.translations['en'][key]) {
            // Fallback to English
            element.innerHTML = window.translations['en'][key];
        }
    });

    // Update exam info
    const examText = document.getElementById('exam-text');
    if (examText) {
        const examKey = `exams_${lang}`;
        let finalKey;
        if (window.translations[lang] && window.translations[lang][examKey]) {
            finalKey = examKey;
        } else {
            finalKey = 'exams_en';
        }
        examText.setAttribute('data-translate-key', finalKey);
        const langForTranslation = (window.translations[lang] && window.translations[lang][finalKey]) ? lang : 'en';
        examText.innerHTML = window.translations[langForTranslation][finalKey];
    }

    localStorage.setItem('language', lang);

    const firstTab = document.querySelector('.ctab');
    if (firstTab && typeof showCountry === 'function') {
        const activeTab = document.querySelector('.ctab.active');
        if (activeTab) {
            showCountry(activeTab.getAttribute('data-country'));
        } else {
            firstTab.click();
        }
    }

    const langSelect = document.getElementById('calc-lang');
    if (langSelect) langSelect.value = lang;

    const langSwitcher = document.getElementById('language-switcher');
    if (langSwitcher) langSwitcher.value = lang;

    if (window.calcPrice) window.calcPrice();
    if (window.updateDailyDose) window.updateDailyDose();
    if (typeof window.checkLanguageRoadmap === 'function') window.checkLanguageRoadmap(lang);
}

document.addEventListener('DOMContentLoaded', async () => {
    const languageSwitcher = document.getElementById('language-switcher');

    document.querySelectorAll('.nav-lang a[data-lang]').forEach(link => {
        link.addEventListener('click', () => {
            localStorage.setItem('language', link.getAttribute('data-lang'));
        });
    });

    const savedLanguage = localStorage.getItem('language') || document.documentElement.lang || 'en';
    if (languageSwitcher) {
        languageSwitcher.addEventListener('change', (event) => {
            setLanguage(event.target.value);
        });
        languageSwitcher.value = savedLanguage;
    }
    await setLanguage(savedLanguage);
});
