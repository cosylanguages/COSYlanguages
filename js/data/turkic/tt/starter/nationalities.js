(function() {
    const data = [
        { "word": "татар", "level": "starter", "theme": "nationalities_A1", "emoji": "⬜", "form": "adjective", "definitions": [{ "text": "Татарстаннан.", "examples": ["Мин татар."] }] },
        { "word": "урыс", "level": "starter", "theme": "nationalities_A1", "emoji": "🇷🇺", "form": "adjective", "definitions": [{ "text": "Россиядән.", "examples": ["Ул урыс."] }] },
        { "word": "төрек", "level": "starter", "theme": "nationalities_A1", "emoji": "🇹🇷", "form": "adjective", "definitions": [{ "text": "Төркиядән.", "examples": ["Алар төрек."] }] }
    ];
    const lang = "tt";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
