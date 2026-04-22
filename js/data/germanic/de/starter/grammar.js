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
        },
        {
            "verb": "arbeiten",
            "group": "en",
            "classification": "regular",
            "aspect": "action",
            "past_participle": "gearbeitet",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["arbeite", "arbeitest", "arbeitet", "arbeitet", "arbeitet", "arbeiten", "arbeitet", "arbeiten"],
                    "negative": ["arbeite nicht", "arbeitest nicht", "arbeitet nicht", "arbeitet nicht", "arbeitet nicht", "arbeiten nicht", "arbeitet nicht", "arbeiten nicht"],
                    "question": ["Arbeite ich", "Arbeitest du", "Arbeitet er", "Arbeitet sie", "Arbeitet es", "Arbeiten wir", "Arbeitet ihr", "Arbeiten sie"]
                }
            }
        },
        {
            "verb": "machen",
            "group": "en",
            "classification": "regular",
            "aspect": "action",
            "past_participle": "gemacht",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["mache", "machst", "macht", "macht", "macht", "machen", "macht", "machen"],
                    "negative": ["mache nicht", "machst nicht", "macht nicht", "macht nicht", "macht nicht", "machen nicht", "macht nicht", "machen nicht"],
                    "question": ["Mache ich", "Machst du", "Macht er", "Macht sie", "Macht es", "Machen wir", "Macht ihr", "Machen sie"]
                }
            }
        },
        {
            "verb": "gehen",
            "group": "en",
            "classification": "irregular",
            "aspect": "action",
            "past_participle": "gegangen",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["gehe", "gehst", "geht", "geht", "geht", "gehen", "geht", "gehen"],
                    "negative": ["gehe nicht", "gehst nicht", "geht nicht", "geht nicht", "geht nicht", "gehen nicht", "geht nicht", "gehen nicht"],
                    "question": ["Gehe ich", "Gehst du", "Geht er", "Geht sie", "Geht es", "Gehen wir", "Geht ihr", "Gehen sie"]
                }
            }
        },
        {
            "verb": "essen",
            "group": "en",
            "classification": "irregular",
            "aspect": "action",
            "past_participle": "gegessen",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["esse", "isst", "isst", "isst", "isst", "essen", "esst", "essen"],
                    "negative": ["esse nicht", "isst nicht", "isst nicht", "isst nicht", "isst nicht", "essen nicht", "esst nicht", "essen nicht"],
                    "question": ["Esse ich", "Isst du", "Isst er", "Isst sie", "Isst es", "Essen wir", "Esst ihr", "Essen sie"]
                }
            }
        },
        {
            "verb": "sprechen",
            "group": "en",
            "classification": "irregular",
            "aspect": "action",
            "past_participle": "gesprochen",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["spreche", "sprichst", "spricht", "spricht", "spricht", "sprechen", "sprecht", "sprechen"],
                    "negative": ["spreche nicht", "sprichst nicht", "spricht nicht", "spricht nicht", "spricht nicht", "sprechen nicht", "sprecht nicht", "sprechen nicht"],
                    "question": ["Spreche ich", "Sprichst du", "Spricht er", "Spricht sie", "Spricht es", "Sprechen wir", "Sprecht ihr", "Sprechen sie"]
                }
            }
        }
    ]
    const lang = "de";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
