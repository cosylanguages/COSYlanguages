// TODO: verify level classification
(function() {
    const lang = "ka";
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
        "lang": "ka",
        "transcription": "",
        "id": "ka_starter_people_001"
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
        "lang": "ka",
        "transcription": "",
        "id": "ka_starter_people_002"
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
        "lang": "ka",
        "transcription": "",
        "id": "ka_starter_people_003"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
