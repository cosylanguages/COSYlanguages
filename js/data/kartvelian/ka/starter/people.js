(function() {
    const data = [
        {
            "word": "ადამიანი",
            "level": "starter",
            "theme": "people_A1",
            "emoji": "👤",
            "form": "noun",
            "definitions": [
                {
                    "text": "ერთი პირი.",
                    "examples": ["კეთილი ადამიანი."]
                }
            ]
        },
        {
            "word": "ქალი",
            "level": "starter",
            "theme": "people_A1",
            "emoji": "👩",
            "form": "noun",
            "definitions": [
                {
                    "text": "ზრდასრული მდედრობითი სქესის პირი.",
                    "examples": ["ეს ქალი მასწავლებელია."]
                }
            ]
        },
        {
            "word": "კაცი",
            "level": "starter",
            "theme": "people_A1",
            "emoji": "👨",
            "form": "noun",
            "definitions": [
                {
                    "text": "ზრდასრული მამრობითი სქესის პირი.",
                    "examples": ["კაცი აქ მუშაობს."]
                }
            ]
        }
    ];
    const lang = "ka";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
