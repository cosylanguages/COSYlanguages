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
                    "examples": ["Un den mat."]
                }
            ]
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
                    "examples": ["Ar maouez-mañ zo kelennerez."]
                }
            ]
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
                    "examples": ["Ar gwaz a labour amañ."]
                }
            ]
        }
    ];
    const lang = "br";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
