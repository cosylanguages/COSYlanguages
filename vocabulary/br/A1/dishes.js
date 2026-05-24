// TODO: verify level classification
(function() {
    const data = [
        {
            "word": "krampouezh",
            "level": "starter",
            "theme": "basic_foods_A1",
            "emoji": "🥞",
            "form": "noun",
            "definitions": [
                {
                    "text": "Boued tipik eus Breizh.",
                    "examples": ["Krampouezh dous zo mat."]
                }
            ]
        },
        {
            "word": "galetez",
            "level": "starter",
            "theme": "basic_foods_A1",
            "emoji": "🍳",
            "form": "noun",
            "definitions": [
                {
                    "text": "Krampouezh gant bleud ed-du.",
                    "examples": ["Debriñ a reomp galetez."]
                }
            ]
        },
        {
            "word": "kouign-amann",
            "level": "starter",
            "theme": "basic_foods_A1",
            "emoji": "🥮",
            "form": "noun",
            "definitions": [
                {
                    "text": "Gwastell gant amann ha sukr.",
                    "examples": ["Ar kouign-amann zo tomm."]
                }
            ]
        }
    ];
    const lang = "br";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
