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
                "text": "Бер шәхес.",
                "examples": [
                    "Яхшы кеше."
                ]
            }
        ],
        "id": "tt_starter_people_001",
        "lang": "tt",
        "transcription": ""
    },
    {
        "word": "хатын-кыз",
        "level": "starter",
        "theme": "people",
        "emoji": "👩",
        "form": "noun",
        "definitions": [
            {
                "text": "Өлкән кеше (хатын).",
                "examples": [
                    "Ул хатын — укытучы."
                ]
            }
        ],
        "id": "tt_starter_people_002",
        "lang": "tt",
        "transcription": ""
    },
    {
        "word": "ир-ат",
        "level": "starter",
        "theme": "people",
        "emoji": "👨",
        "form": "noun",
        "definitions": [
            {
                "text": "Өлкән кеше (ир).",
                "examples": [
                    "Бу ир монда эшли."
                ]
            }
        ],
        "id": "tt_starter_people_003",
        "lang": "tt",
        "transcription": ""
    }
];
    const lang = "tt";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
