// TODO: verify level classification
(function() {
    const data = [
        { "word": "español", "level": "starter", "theme": "nationalities_A1", "emoji": "🇪🇸", "form": "adjective", "definitions": [{ "text": "De España.", "examples": ["Soy español."] }] },
        { "word": "francés", "level": "starter", "theme": "nationalities_A1", "emoji": "🇫🇷", "form": "adjective", "definitions": [{ "text": "De Francia.", "examples": ["Él es francés."] }] },
        { "word": "italiano", "level": "starter", "theme": "nationalities_A1", "emoji": "🇮🇹", "form": "adjective", "definitions": [{ "text": "De Italia.", "examples": ["Ella es italiana."] }] }
    ];
    const lang = "es";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
