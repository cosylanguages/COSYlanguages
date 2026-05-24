// TODO: verify level classification
(function() {
    const data = [
        { "word": "ქართველი", "level": "starter", "theme": "nationalities_A1", "emoji": "🇬🇪", "form": "adjective", "definitions": [{ "text": "საქართველოდან.", "examples": ["მე ქართველი ვარ."] }] },
        { "word": "ინგლისელი", "level": "starter", "theme": "nationalities_A1", "emoji": "🇬🇧", "form": "adjective", "definitions": [{ "text": "ინგლისიდან.", "examples": ["ის ინგლისელია."] }] },
        { "word": "გერმანელი", "level": "starter", "theme": "nationalities_A1", "emoji": "🇩🇪", "form": "adjective", "definitions": [{ "text": "გერმანიიდან.", "examples": ["ის გერმანელია."] }] }
    ];
    const lang = "ka";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
