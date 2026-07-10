// TODO: verify level classification
(function() {
    const lang = "ba";
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
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_food_drink_001"
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
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_food_drink_002"
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
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_food_drink_003"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
