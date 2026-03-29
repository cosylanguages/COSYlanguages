(function() {
    const pronouns = ["eu", "tu", "ele", "ela", "nós", "vós", "eles", "elas"];
    const data = [
        {
            "verb": "ser",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "stative",
            "past_participle": "sido",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["sou", "és", "é", "é", "somos", "sois", "são", "são"],
                    "negative": ["não sou", "não és", "não é", "não é", "não somos", "não sois", "não são", "não são"],
                    "question": ["sou eu?", "és tu?", "é ele?", "é ela?", "somos nós?", "sois vós?", "são eles?", "são elas?"]
                }
            }
        },
        {
            "verb": "estar",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "stative",
            "past_participle": "estado",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["estou", "estás", "está", "está", "estamos", "estais", "estão", "estão"],
                    "negative": ["não estou", "não estás", "não está", "não está", "não estamos", "não estais", "não estão", "não estão"],
                    "question": ["estou eu?", "estás tu?", "está ele?", "está ela?", "estamos nós?", "estais vós?", "estão eles?", "estão elas?"]
                }
            }
        }
    ];
    const lang = "pt";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
