// TODO: verify level classification
(function() {
    const lang = "ba";
    const data = [
    {
        "word": "мөстәҡил",
        "level": "upper_intermediate",
        "theme": "describing",
        "emoji": "🗽",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "Бер кемгә лә бәйле булмаған.",
                "examples": [
                    "Мөстәҡил ҡарар ҡабул итеү."
                ]
            }
        ],
        "lang": "ba",
        "transcription": "",
        "id": "ba_upper_intermediate_describing_001"
    },
    {
        "word": "файҙалы",
        "level": "upper_intermediate",
        "theme": "describing",
        "emoji": "💡",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "Яҡшы нәтижә бирә торган.",
                "examples": [
                    "Файҙалы кәңәш биреү."
                ]
            }
        ],
        "lang": "ba",
        "transcription": "",
        "id": "ba_upper_intermediate_describing_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
