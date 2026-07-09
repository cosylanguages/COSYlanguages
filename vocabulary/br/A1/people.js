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
        "lang": "br",
        "transcription": "",
        "id": "br_starter_people_001"
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
        "lang": "br",
        "transcription": "",
        "id": "br_starter_people_002"
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
        "lang": "br",
        "transcription": "",
        "id": "br_starter_people_003"
    }
];
    const lang = "br";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
