// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "մարդ",
        "level": "starter",
        "theme": "people",
        "emoji": "👤",
        "form": "noun",
        "definitions": [
            {
                "text": "Մեկ անձ:",
                "examples": [
                    "Բարի մարդ:"
                ]
            }
        ],
        "id": "hy_starter_people_001",
        "lang": "hy",
        "transcription": ""
    },
    {
        "word": "կին",
        "level": "starter",
        "theme": "people",
        "emoji": "👩",
        "form": "noun",
        "definitions": [
            {
                "text": "Չափահաս իգական սեռի անձ:",
                "examples": [
                    "Այդ կինը ուսուցչուհի է:"
                ]
            }
        ],
        "id": "hy_starter_people_002",
        "lang": "hy",
        "transcription": ""
    },
    {
        "word": "տղամարդ",
        "level": "starter",
        "theme": "people",
        "emoji": "👨",
        "form": "noun",
        "definitions": [
            {
                "text": "Չափահաս արական սեռի անձ:",
                "examples": [
                    "Տղամարդը աշխատում է այստեղ:"
                ]
            }
        ],
        "id": "hy_starter_people_003",
        "lang": "hy",
        "transcription": ""
    }
];
    const lang = "hy";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
