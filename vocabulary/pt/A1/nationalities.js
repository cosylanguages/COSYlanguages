// TODO: verify level classification
(function() {
    const data = [
        { "word": "português", "level": "starter", "theme": "nationalities", "emoji": "🇵🇹", "form": "adjective", "definitions": [{ "text": "De Portugal.", "examples": ["Sou português."] }] },
        { "word": "brasileiro", "level": "starter", "theme": "nationalities", "emoji": "🇧🇷", "form": "adjective", "definitions": [{ "text": "Do Brasil.", "examples": ["Ele é brasileiro."] }] },
        { "word": "inglês", "level": "starter", "theme": "nationalities", "emoji": "🇬🇧", "form": "adjective", "definitions": [{ "text": "Da Inglaterra.", "examples": ["Ela é inglesa."] }] }
    ];
    const lang = "pt";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
