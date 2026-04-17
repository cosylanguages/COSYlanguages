
const TRANSLATION_MAP = {
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

async function loadLanguageFile(lang) {
    if (window.translations && window.translations[lang]) return;

    let url = TRANSLATION_MAP[lang];
    if (!url) return;

    // Adjust path for subdirectories
    const pathDepth = window.location.pathname.split('/').filter(Boolean).length;
    // COSYlanguages is usually a subfolder in GH pages, but let's be safe.
    // If we are in /COSYlanguages/languages/it.html, pathname is /COSYlanguages/languages/it.html
    // parts: ['COSYlanguages', 'languages', 'it.html'] -> length 3.
    // Root is /COSYlanguages/index.html -> parts: ['COSYlanguages', 'index.html'] -> length 2.
    // So if length > 2, we need to go up.
    if (window.location.pathname.includes('/languages/') || window.location.pathname.includes('/grammar/')) {
        url = '../' + url;
    }

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
