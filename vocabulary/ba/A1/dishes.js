// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "бишбармаҡ",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍲",
        "form": "noun",
        "definitions": [
            {
                "text": "Традицион башҡорт ризығы.",
                "examples": [
                    "Бишбармаҡ бик тәмле."
                ]
            }
        ],
        "id": "ba_starter_dishes_001",
        "lang": "ba",
        "transcription": ""
    },
    {
        "word": "ҡыҙыл э싩",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍵",
        "form": "noun",
        "definitions": [
            {
                "text": "Башҡорт сәйе.",
                "examples": [
                    "Сәй эсәбеҙ."
                ]
            }
        ],
        "id": "ba_starter_dishes_002",
        "lang": "ba",
        "transcription": ""
    },
    {
        "word": "чак-чак",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍯",
        "form": "noun",
        "definitions": [
            {
                "text": "Татлы ризыҡ.",
                "examples": [
                    "Чак-чак баллы."
                ]
            }
        ],
        "id": "ba_starter_dishes_003",
        "lang": "ba",
        "transcription": ""
    }
];
    const lang = "ba";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
