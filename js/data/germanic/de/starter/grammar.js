(function() {
    const pronouns = ["ich", "du", "er", "sie", "es", "wir", "ihr", "sie"];
    const data = [
        {
            "verb": "sein",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "stative",
            "past_participle": "gewesen",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["bin", "bist", "ist", "ist", "ist", "sind", "seid", "sind"],
                    "negative": ["bin nicht", "bist nicht", "ist nicht", "ist nicht", "ist nicht", "sind nicht", "seid nicht", "sind nicht"],
                    "question": ["Bin ich", "Bist du", "Ist er", "Ist sie", "Ist es", "Sind wir", "Seid ihr", "Sind sie"]
                }
            }
        },
        {
            "verb": "haben",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "stative",
            "past_participle": "gehabt",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["habe", "hast", "hat", "hat", "hat", "haben", "habt", "haben"],
                    "negative": ["habe nicht", "hast nicht", "hat nicht", "hat nicht", "hat nicht", "haben nicht", "habt nicht", "haben nicht"],
                    "question": ["Habe ich", "Hast du", "Hat er", "Hat sie", "Hat es", "Haben wir", "Habt ihr", "Haben sie"]
                }
            }
        }
    ];
    const lang = "de";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
