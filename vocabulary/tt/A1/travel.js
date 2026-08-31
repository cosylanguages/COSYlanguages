// TODO: verify level classification
(function() {
    const lang = "tt";
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
                "text": "Транспорт чарасы.",
                "examples": [
                    "Машина белән бару."
                ]
            }
        ],
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_travel_001"
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
                    "Поезд белән юлга чыгу."
                ]
            }
        ],
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_travel_002"
    },
    {
        "word": "сәяхәт",
        "level": "starter",
        "theme": "travel",
        "emoji": "🧳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Яңа җирләргә бару.",
                "examples": [
                    "Кызыклы сәяхәт кылу."
                ]
            }
        ],
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_travel_003"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
