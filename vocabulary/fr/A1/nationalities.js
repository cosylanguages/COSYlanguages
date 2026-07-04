// TODO: verify level classification
(function() {
    const data = [
        { "word": "français", "level": "starter", "theme": "nationalities", "emoji": "🇫🇷", "form": "adjective", "definitions": [{ "text": "De France.", "examples": ["Je suis français."] }] },
        { "word": "anglais", "level": "starter", "theme": "nationalities", "emoji": "🇬🇧", "form": "adjective", "definitions": [{ "text": "D'Angleterre.", "examples": ["Il est anglais."] }] },
        { "word": "italien", "level": "starter", "theme": "nationalities", "emoji": "🇮🇹", "form": "adjective", "definitions": [{ "text": "D'Italie.", "examples": ["Elle est italienne."] }] }
    ];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
