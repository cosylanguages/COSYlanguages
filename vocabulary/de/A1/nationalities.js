// TODO: verify level classification
(function() {
    const data = [
        { "word": "deutsch", "level": "starter", "theme": "nationalities", "emoji": "🇩🇪", "form": "adjective", "definitions": [{ "text": "Aus Deutschland.", "examples": ["Ich bin deutsch."] }] },
        { "word": "österreichisch", "level": "starter", "theme": "nationalities", "emoji": "🇦🇹", "form": "adjective", "definitions": [{ "text": "Aus Österreich.", "examples": ["Er ist österreichisch."] }] },
        { "word": "schweizerisch", "level": "starter", "theme": "nationalities", "emoji": "🇨🇭", "form": "adjective", "definitions": [{ "text": "Aus der Schweiz.", "examples": ["Sie ist schweizerisch."] }] }
    ];
    const lang = "de";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
