(function() {
    const data = [
        { "word": "brezhon", "level": "starter", "theme": "nationalities_A1", "emoji": "⬜", "form": "adjective", "definitions": [{ "text": "Eus Breizh.", "examples": ["Brezhon on-me."] }] },
        { "word": "gall", "level": "starter", "theme": "nationalities_A1", "emoji": "🇫🇷", "form": "adjective", "definitions": [{ "text": "Eus Bro-C'hall.", "examples": ["Gall eo eñ."] }] },
        { "word": "saoz", "level": "starter", "theme": "nationalities_A1", "emoji": "🇬🇧", "form": "adjective", "definitions": [{ "text": "Eus Bro-Saoz.", "examples": ["Saoz eo hi."] }] }
    ];
    const lang = "br";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
