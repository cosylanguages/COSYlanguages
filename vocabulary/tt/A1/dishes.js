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
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_food_drink_001"
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
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_food_drink_002"
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
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_food_drink_003"
    }
];
    const lang = "tt";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
