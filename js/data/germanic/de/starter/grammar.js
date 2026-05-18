(function() {
    const pronouns = ["ich", "du", "er / sie / es", "wir", "ihr", "sie / Sie"];
    const data = [
        {
            "verb": "sein",
            "group": "unregelmäßig",
            "classification": "irregular",
            "aspect": "stative",
            "past_participle": "gewesen",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["bin", "bist", "ist", "sind", "seid", "sind"],
                    "negative": ["bin nicht", "bist nicht", "ist nicht", "sind nicht", "seid nicht", "sind nicht"],
                    "question": ["bin ich?", "bist du?", "ist er/sie/es?", "sind wir?", "seid ihr?", "sind sie?"]
                },
                "past_simple (Präteritum)": {
                    "positive": ["war", "warst", "war", "waren", "wart", "waren"],
                    "negative": ["war nicht", "warst nicht", "war nicht", "waren nicht", "wart nicht", "waren nicht"],
                    "question": ["war ich?", "warst du?", "war er/sie/es?", "waren wir?", "wart ihr?", "waren sie?"]
                }
            }
        },
        {
            "verb": "haben",
            "group": "unregelmäßig",
            "classification": "irregular",
            "aspect": "stative",
            "past_participle": "gehabt",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["habe", "hast", "hat", "haben", "habt", "haben"],
                    "negative": ["habe nicht", "hast nicht", "hat nicht", "haben nicht", "habt nicht", "haben nicht"],
                    "question": ["habe ich?", "hast du?", "hat er/sie/es?", "haben wir?", "habt ihr?", "haben sie?"]
                },
                "past_simple (Präteritum)": {
                    "positive": ["hatte", "hattest", "hatte", "hatten", "hattet", "hatten"],
                    "negative": ["hatte nicht", "hattest nicht", "hatte nicht", "hatten nicht", "hattet nicht", "hatten nicht"],
                    "question": ["hatte ich?", "hattest du?", "hatte er/sie/es?", "hatten wir?", "hattet ihr?", "hatten sie?"]
                }
            }
        },
        {
            "verb": "essen",
            "group": "unregelmäßig (vowel change e -> i)",
            "classification": "irregular",
            "aspect": "action",
            "past_participle": "gegessen",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["esse", "isst", "isst", "essen", "esst", "essen"],
                    "negative": ["esse nicht", "isst nicht", "isst nicht", "essen nicht", "esst nicht", "essen nicht"],
                    "question": ["esse ich?", "isst du?", "isst er/sie/es?", "essen wir?", "esst ihr?", "essen sie?"]
                }
            }
        },
        {
            "verb": "sprechen",
            "group": "unregelmäßig (vowel change e -> i)",
            "classification": "irregular",
            "aspect": "action",
            "past_participle": "gesprochen",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["spreche", "sprichst", "spricht", "sprechen", "sprecht", "sprechen"],
                    "negative": ["spreche nicht", "sprichst nicht", "spricht nicht", "sprechen nicht", "sprecht nicht", "sprechen nicht"],
                    "question": ["spreche ich?", "sprichst du?", "spricht er/sie/es?", "sprechen wir?", "sprecht ihr?", "sprechen sie?"]
                }
            }
        },
        {
            "verb": "fahren",
            "group": "unregelmäßig (vowel change a -> ä)",
            "classification": "irregular",
            "aspect": "action",
            "past_participle": "gefahren",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["fahre", "fährst", "fährt", "fahren", "fahrt", "fahren"],
                    "negative": ["fahre nicht", "fährst nicht", "fährt nicht", "fahren nicht", "fahrt nicht", "fahren nicht"],
                    "question": ["fahre ich?", "fährst du?", "fährt er/sie/es?", "fahren wir?", "fahrt ihr?", "fahren sie?"]
                }
            }
        }
    ]
    const lang = "de";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
