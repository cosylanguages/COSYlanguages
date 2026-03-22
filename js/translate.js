
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

function setLanguage(lang) {
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
            // Fallback to English if the key doesn't exist for the selected language
            finalKey = 'exams_en';
        }
        examText.setAttribute('data-translate-key', finalKey);

        // Update the text content immediately
        const langForTranslation = (window.translations[lang] && window.translations[lang][finalKey]) ? lang : 'en';
        examText.innerHTML = window.translations[langForTranslation][finalKey];
    }

    localStorage.setItem('language', lang);

    // Sync with page UI elements
    const langSelect = document.getElementById('calc-lang');
    if (langSelect) langSelect.value = lang;

    const langSwitcher = document.getElementById('language-switcher');
    if (langSwitcher) langSwitcher.value = lang;

    if (window.calcPrice) window.calcPrice();
}

document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher');

    if (languageSwitcher) {
        languageSwitcher.addEventListener('change', (event) => {
            setLanguage(event.target.value);
        });
        const savedLanguage = localStorage.getItem('language') || 'en';
        languageSwitcher.value = savedLanguage;
        setLanguage(savedLanguage);
    } else {
        const savedLanguage = localStorage.getItem('language') || 'en';
        setLanguage(savedLanguage);
    }
});
