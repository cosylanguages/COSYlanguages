// TODO: verify level classification
(function() {
    const data = [
        { "word": "հայ", "level": "starter", "theme": "nationalities_A1", "emoji": "🇦🇲", "form": "adjective", "definitions": [{ "text": "Հայաստանից:", "examples": ["Ես հայ եմ:"] }] },
        { "word": "ռուս", "level": "starter", "theme": "nationalities_A1", "emoji": "🇷🇺", "form": "adjective", "definitions": [{ "text": "Ռուսաստանից:", "examples": ["Նա ռուս է:"] }] },
        { "word": "ֆրանսիացի", "level": "starter", "theme": "nationalities_A1", "emoji": "🇫🇷", "form": "adjective", "definitions": [{ "text": "Ֆրանսիայից:", "examples": ["Նա ֆրանսիացի է:"] }] }
    ];
    const lang = "hy";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
