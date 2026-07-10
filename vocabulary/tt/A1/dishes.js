// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "чәк-чәк",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍯",
        "form": "noun",
        "definitions": [
            {
                "text": "Татлы татар ризыгы.",
                "examples": [
                    "Чәк-чәк бик тәмле."
                ]
            }
        ],
        "id": "tt_starter_dishes_001",
        "lang": "tt",
        "transcription": ""
    },
    {
        "word": "өчпочмак",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥧",
        "form": "noun",
        "definitions": [
            {
                "text": "ИТ белән бәрәңгедән ясалган татар ризыгы.",
                "examples": [
                    "Миңа өчпочмак ошый."
                ]
            }
        ],
        "id": "tt_starter_dishes_002",
        "lang": "tt",
        "transcription": ""
    },
    {
        "word": "кыстыбый",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥞",
        "form": "noun",
        "definitions": [
            {
                "text": "Бәрәңге белән татар ризыгы.",
                "examples": [
                    "Кичә кыстыбый ашадык."
                ]
            }
        ],
        "id": "tt_starter_dishes_003",
        "lang": "tt",
        "transcription": ""
    }
];
    const lang = "tt";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
