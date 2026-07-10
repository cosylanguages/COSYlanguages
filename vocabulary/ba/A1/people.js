// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "кеше",
        "level": "starter",
        "theme": "people",
        "emoji": "👤",
        "form": "noun",
        "definitions": [
            {
                "text": "Бер кеше.",
                "examples": [
                    "Яҡшы кеше."
                ]
            }
        ],
        "id": "ba_starter_people_001",
        "lang": "ba",
        "transcription": ""
    },
    {
        "word": "ҡатын",
        "level": "starter",
        "theme": "people",
        "emoji": "👩",
        "form": "noun",
        "definitions": [
            {
                "text": "Өлкән ҡатын-ҡыҙ.",
                "examples": [
                    "Был ҡатын — уҡытыусы."
                ]
            }
        ],
        "id": "ba_starter_people_002",
        "lang": "ba",
        "transcription": ""
    },
    {
        "word": "ир",
        "level": "starter",
        "theme": "people",
        "emoji": "👨",
        "form": "noun",
        "definitions": [
            {
                "text": "Өлкән ир-ат.",
                "examples": [
                    "Ир монда эшлай."
                ]
            }
        ],
        "id": "ba_starter_people_003",
        "lang": "ba",
        "transcription": ""
    }
];
    const lang = "ba";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
