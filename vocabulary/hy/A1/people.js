// TODO: verify level classification
(function() {
    const data = [
        {
            "word": "մարդ",
            "level": "starter",
            "theme": "people_A1",
            "emoji": "👤",
            "form": "noun",
            "definitions": [
                {
                    "text": "Մեկ անձ:",
                    "examples": ["Բարի մարդ:"]
                }
            ]
        },
        {
            "word": "կին",
            "level": "starter",
            "theme": "people_A1",
            "emoji": "👩",
            "form": "noun",
            "definitions": [
                {
                    "text": "Չափահաս իգական սեռի անձ:",
                    "examples": ["Այդ կինը ուսուցչուհի է:"]
                }
            ]
        },
        {
            "word": "տղամարդ",
            "level": "starter",
            "theme": "people_A1",
            "emoji": "👨",
            "form": "noun",
            "definitions": [
                {
                    "text": "Չափահաս արական սեռի անձ:",
                    "examples": ["Տղամարդը աշխատում է այստեղ:"]
                }
            ]
        }
    ];
    const lang = "hy";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
