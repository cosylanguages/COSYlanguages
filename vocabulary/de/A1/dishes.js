// TODO: verify level classification
(function() {
    const data = [
        {
            "word": "Currywurst",
            "level": "starter",
            "theme": "basic_foods_A1",
            "emoji": "🌭",
            "form": "noun",
            "definitions": [
                {
                    "text": "Wurst mit Curry-Sauce.",
                    "examples": ["Eine Currywurst bitte."]
                }
            ],
            "article": "die",
            "gender": "feminine"
        },
        {
            "word": "Schnitzel",
            "level": "starter",
            "theme": "basic_foods_A1",
            "emoji": "🥩",
            "form": "noun",
            "definitions": [
                {
                    "text": "Gebratenes Fleisch.",
                    "examples": ["Das Schnitzel schmeckt gut."]
                }
            ],
            "article": "das",
            "gender": "neuter"
        },
        {
            "word": "Brezel",
            "level": "starter",
            "theme": "basic_foods_A1",
            "emoji": "🥨",
            "form": "noun",
            "definitions": [
                {
                    "text": "Ein deutsches Gebäck.",
                    "examples": ["Ich mag Brezeln mit Salz."]
                }
            ],
            "article": "die",
            "gender": "feminine"
        }
    ];
    const lang = "de";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
