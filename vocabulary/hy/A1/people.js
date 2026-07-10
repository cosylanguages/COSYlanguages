// TODO: verify level classification
(function() {
    const lang = "hy";
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
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_people_001"
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
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_people_002"
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
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_people_003"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
