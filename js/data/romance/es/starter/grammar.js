(function() {
    const pronouns = ["yo", "tú", "él", "ella", "nosotros", "vosotros", "ellos", "ellas"];
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
                    "positive": ["soy", "eres", "es", "es", "somos", "sois", "son", "son"],
                    "negative": ["no soy", "no eres", "no es", "no es", "no somos", "no sois", "no son", "no son"],
                    "question": ["¿soy yo?", "¿eres tú?", "¿es él?", "¿es ella?", "¿somos nosotros?", "¿sois vosotros?", "¿son ellos?", "¿son ellas?"]
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
                    "positive": ["estoy", "estás", "está", "está", "estamos", "estáis", "están", "están"],
                    "negative": ["no estoy", "no estás", "no está", "no está", "no estamos", "no estáis", "no están", "no están"],
                    "question": ["¿estoy yo?", "¿estás tú?", "¿está él?", "¿está ella?", "¿estamos nosotros?", "¿estáis vosotros?", "¿están ellos?", "¿están ellas?"]
                }
            }
        }
    ];
    const lang = "es";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
