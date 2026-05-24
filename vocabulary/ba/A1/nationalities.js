// TODO: verify level classification
(function() {
    const data = [
        { "word": "башҡорт", "level": "starter", "theme": "nationalities_A1", "emoji": "⬜", "form": "adjective", "definitions": [{ "text": "Башҡортостандан.", "examples": ["Мин башҡорт."] }] },
        { "word": "урыҫ", "level": "starter", "theme": "nationalities_A1", "emoji": "🇷🇺", "form": "adjective", "definitions": [{ "text": "Россиянан.", "examples": ["Ул урыҫ."] }] },
        { "word": "татар", "level": "starter", "theme": "nationalities_A1", "emoji": "⬜", "form": "adjective", "definitions": [{ "text": "Татарстандан.", "examples": ["Алар татар."] }] }
    ];
    const lang = "ba";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
