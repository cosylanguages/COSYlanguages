// TODO: verify level classification
(function() {
    const data = [
        {
            "word": "Mensch",
            "level": "starter",
            "theme": "people_A1",
            "emoji": "👤",
            "form": "noun",
            "definitions": [
                {
                    "text": "Eine Person.",
                    "examples": ["Ein netter Mensch."]
                }
            ],
            "article": "der",
            "gender": "masculine"
        },
        {
            "word": "Frau",
            "level": "starter",
            "theme": "people_A1",
            "emoji": "👩",
            "form": "noun",
            "definitions": [
                {
                    "text": "Eine erwachsene weibliche Person.",
                    "examples": ["Die Frau ist Lehrerin."]
                }
            ],
            "article": "die",
            "gender": "feminine"
        },
        {
            "word": "Mann",
            "level": "starter",
            "theme": "people_A1",
            "emoji": "👨",
            "form": "noun",
            "definitions": [
                {
                    "text": "Eine erwachsene männliche Person.",
                    "examples": ["Der Mann arbeitet hier."]
                }
            ],
            "article": "der",
            "gender": "masculine"
        }
    ];
    const lang = "de";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
