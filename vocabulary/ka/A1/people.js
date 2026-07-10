// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "ადამიანი",
        "level": "starter",
        "theme": "people",
        "emoji": "👤",
        "form": "noun",
        "definitions": [
            {
                "text": "ერთი პირი.",
                "examples": [
                    "კეთილი ადამიანი."
                ]
            }
        ],
        "id": "ka_starter_people_001",
        "lang": "ka",
        "transcription": ""
    },
    {
        "word": "ქალი",
        "level": "starter",
        "theme": "people",
        "emoji": "👩",
        "form": "noun",
        "definitions": [
            {
                "text": "ზრდასრული მდედრობითი სქესის პირი.",
                "examples": [
                    "ეს ქალი მასწავლებელია."
                ]
            }
        ],
        "id": "ka_starter_people_002",
        "lang": "ka",
        "transcription": ""
    },
    {
        "word": "კაცი",
        "level": "starter",
        "theme": "people",
        "emoji": "👨",
        "form": "noun",
        "definitions": [
            {
                "text": "ზრდასრული მამრობითი სქესის პირი.",
                "examples": [
                    "კაცი აქ მუშაობს."
                ]
            }
        ],
        "id": "ka_starter_people_003",
        "lang": "ka",
        "transcription": ""
    }
];
    const lang = "ka";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
