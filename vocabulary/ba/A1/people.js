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
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_people_001"
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
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_people_002"
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
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_people_003"
    }
];
    const lang = "ba";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
