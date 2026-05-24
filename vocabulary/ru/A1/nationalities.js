// TODO: verify level classification
(function() {
    const data = [
        { "word": "русский", "level": "starter", "theme": "nationalities_A1", "emoji": "🇷🇺", "form": "adjective", "definitions": [{ "text": "Из России.", "examples": ["Я русский."] }] },
        { "word": "американец", "level": "starter", "theme": "nationalities_A1", "emoji": "🇺🇸", "form": "adjective", "definitions": [{ "text": "Из Америки.", "examples": ["Он американец."] }] },
        { "word": "китаец", "level": "starter", "theme": "nationalities_A1", "emoji": "🇨🇳", "form": "adjective", "definitions": [{ "text": "Из Китая.", "examples": ["Она китаянка."] }] }
    ];
    const lang = "ru";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
