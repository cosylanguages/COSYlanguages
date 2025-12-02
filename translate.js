
function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update exam info
    const examText = document.getElementById('exam-text');
    if (examText) {
        const examKey = `exams_${lang}`;
        if (translations[lang] && translations[lang][examKey]) {
            examText.setAttribute('data-translate-key', examKey);
        } else {
            // Fallback to English if the key doesn't exist for the selected language
            examText.setAttribute('data-translate-key', 'exams_en');
        }
    }

    localStorage.setItem('language', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher');

    languageSwitcher.addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });

    const savedLanguage = localStorage.getItem('language') || 'en';
    languageSwitcher.value = savedLanguage;
    setLanguage(savedLanguage);
});
