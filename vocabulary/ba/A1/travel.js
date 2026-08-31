// TODO: verify level classification
(function() {
    const lang = "ba";
    const data = [
    {
        "word": "машина",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Транспорт ҡоролмаһы.",
                "examples": [
                    "Машина менән барыу."
                ]
            }
        ],
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_travel_001"
    },
    {
        "word": "поезд",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Тимер юл транспорты.",
                "examples": [
                    "Поезд менән юлға сығыу."
                ]
            }
        ],
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_travel_002"
    },
    {
        "word": "сәйәхәт",
        "level": "starter",
        "theme": "travel",
        "emoji": "🧳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Яңы ерҙәргә барыу.",
                "examples": [
                    "Ҡыҙыҡлы сәйәхәт ҡылыу."
                ]
            }
        ],
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_travel_003"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
