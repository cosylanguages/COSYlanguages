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
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_people_001"
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
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_people_002"
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
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_people_003"
    }
];
    const lang = "tt";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
