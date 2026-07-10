// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "den",
        "level": "starter",
        "theme": "people",
        "emoji": "👤",
        "form": "noun",
        "definitions": [
            {
                "text": "Un den bennak.",
                "examples": [
                    "Un den mat."
                ]
            }
        ],
        "id": "br_starter_people_001",
        "lang": "br",
        "transcription": ""
    },
    {
        "word": "maouez",
        "level": "starter",
        "theme": "people",
        "emoji": "👩",
        "form": "noun",
        "definitions": [
            {
                "text": "Ur plac'h vras.",
                "examples": [
                    "Ar maouez-mañ zo kelennerez."
                ]
            }
        ],
        "id": "br_starter_people_002",
        "lang": "br",
        "transcription": ""
    },
    {
        "word": "gwaz",
        "level": "starter",
        "theme": "people",
        "emoji": "👨",
        "form": "noun",
        "definitions": [
            {
                "text": "Ur paotr bras.",
                "examples": [
                    "Ar gwaz a labour amañ."
                ]
            }
        ],
        "id": "br_starter_people_003",
        "lang": "br",
        "transcription": ""
    }
];
    const lang = "br";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
