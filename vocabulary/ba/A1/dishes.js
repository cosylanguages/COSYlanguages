// TODO: verify level classification
(function() {
    const data = [
        {
            "word": "бишбармаҡ",
            "level": "starter",
            "theme": "basic_foods_A1",
            "emoji": "🍲",
            "form": "noun",
            "definitions": [
                {
                    "text": "Традицион башҡорт ризығы.",
                    "examples": ["Бишбармаҡ бик тәмле."]
                }
            ]
        },
        {
            "word": "ҡыҙыл э싩",
            "level": "starter",
            "theme": "basic_foods_A1",
            "emoji": "🍵",
            "form": "noun",
            "definitions": [
                {
                    "text": "Башҡорт сәйе.",
                    "examples": ["Сәй эсәбеҙ."]
                }
            ]
        },
        {
            "word": "чак-чак",
            "level": "starter",
            "theme": "basic_foods_A1",
            "emoji": "🍯",
            "form": "noun",
            "definitions": [
                {
                    "text": "Татлы ризыҡ.",
                    "examples": ["Чак-чак баллы."]
                }
            ]
        }
    ];
    const lang = "ba";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
