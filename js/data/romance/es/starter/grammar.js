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
        },
        {
            "verb": "tener",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "stative",
            "past_participle": "tenido",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["tengo", "tienes", "tiene", "tiene", "tenemos", "tenéis", "tienen", "tienen"],
                    "negative": ["no tengo", "no tienes", "no tiene", "no tiene", "no tenemos", "no tenéis", "no tienen", "no tienen"],
                    "question": ["¿tengo yo?", "¿tienes tú?", "¿tiene él?", "¿tiene ella?", "¿tenemos nosotros?", "¿tenéis vosotros?", "¿tienen ellos?", "¿tienen ellas?"]
                }
            }
        },
        {
            "verb": "trabajar",
            "group": "ar",
            "classification": "regular",
            "aspect": "action",
            "past_participle": "trabajado",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["trabajo", "trabajas", "trabaja", "trabaja", "trabajamos", "trabajáis", "trabajan", "trabajan"],
                    "negative": ["no trabajo", "no trabajas", "no trabaja", "no trabaja", "no trabajamos", "no trabajáis", "no trabajan", "no trabajan"],
                    "question": ["¿trabajo yo?", "¿trabajas tú?", "¿trabaja él?", "¿trabaja ella?", "¿trabajamos nosotros?", "¿trabajáis vosotros?", "¿trabajan ellos?", "¿trabajan ellas?"]
                }
            }
        },
        {
            "verb": "hacer",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "action",
            "past_participle": "hecho",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["hago", "haces", "hace", "hace", "hacemos", "hacéis", "hacen", "hacen"],
                    "negative": ["no hago", "no haces", "no hace", "no hace", "no hacemos", "no hacéis", "no hacen", "no hacen"],
                    "question": ["¿hago yo?", "¿haces tú?", "¿hace él?", "¿hace ella?", "¿hacemos nosotros?", "¿hacéis vosotros?", "¿hacen ellos?", "¿hacen ellas?"]
                }
            }
        },
        {
            "verb": "ir",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "action",
            "past_participle": "ido",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["voy", "vas", "va", "va", "vamos", "vais", "van", "van"],
                    "negative": ["no voy", "no vas", "no va", "no va", "no vamos", "no vais", "no van", "no van"],
                    "question": ["¿voy yo?", "¿vas tú?", "¿va él?", "¿va ella?", "¿vamos nosotros?", "¿vais vosotros?", "¿van ellos?", "¿van ellas?"]
                }
            }
        },
        {
            "verb": "comer",
            "group": "er",
            "classification": "regular",
            "aspect": "action",
            "past_participle": "comido",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["como", "comes", "come", "come", "comemos", "coméis", "comen", "comen"],
                    "negative": ["no como", "no comes", "no come", "no come", "no comemos", "no coméis", "no comen", "no comen"],
                    "question": ["¿como yo?", "¿comes tú?", "¿come él?", "¿come ella?", "¿comemos nosotros?", "¿coméis vosotros?", "¿comen ellos?", "¿comen ellas?"]
                }
            }
        },
        {
            "verb": "hablar",
            "group": "ar",
            "classification": "regular",
            "aspect": "action",
            "past_participle": "hablado",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["hablo", "hablas", "habla", "habla", "hablamos", "habláis", "hablan", "hablan"],
                    "negative": ["no hablo", "no hablas", "no habla", "no habla", "no hablamos", "no habláis", "no hablan", "no hablan"],
                    "question": ["¿hablo yo?", "¿hablas tú?", "¿habla él?", "¿habla ella?", "¿hablamos nosotros?", "¿habláis vosotros?", "¿hablan ellos?", "¿hablan ellas?"]
                }
            }
        }
    ];
    const lang = "es";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
