(function() {
    const pronouns = ["ich", "du", "er / sie / es", "wir", "ihr", "sie / Sie"];
    const data = [
        {
            "verb": "sein",
            "group": "unregelmäßig",
            "classification": "irregular",
            "aspect": "stative",
            "auxiliary": "sein",
            "past_participle": "gewesen",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["bin", "bist", "ist", "sind", "seid", "sind"],
                    "negative": ["bin nicht", "bist nicht", "ist nicht", "sind nicht", "seid nicht", "sind nicht"],
                    "question": ["bin ich?", "bist du?", "ist er?", "sind wir?", "seid ihr?", "sind sie?"]
                },
                "past_simple (Präteritum)": {
                    "positive": ["war", "warst", "war", "waren", "wart", "waren"],
                    "negative": ["war nicht", "warst nicht", "war nicht", "waren nicht", "wart nicht", "waren nicht"],
                    "question": ["war ich?", "warst du?", "war er?", "waren wir?", "wart ihr?", "waren sie?"]
                }
            }
        },
        {
            "verb": "haben",
            "group": "unregelmäßig",
            "classification": "irregular",
            "aspect": "stative",
            "auxiliary": "haben",
            "past_participle": "gehabt",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["habe", "hast", "hat", "haben", "habt", "haben"],
                    "negative": ["habe nicht", "hast nicht", "hat nicht", "haben nicht", "habt nicht", "haben nicht"],
                    "question": ["habe ich?", "hast du?", "hat er?", "haben wir?", "habt ihr?", "haben sie?"]
                },
                "past_simple (Präteritum)": {
                    "positive": ["hatte", "hattest", "hatte", "hatten", "hattet", "hatten"],
                    "negative": ["hatte nicht", "hattest nicht", "hatte nicht", "hatten nicht", "hattet nicht", "hatten nicht"],
                    "question": ["hatte ich?", "hattest du?", "hatte er?", "hatten wir?", "hattet ihr?", "hatten sie?"]
                }
            }
        },
        {
            "verb": "machen",
            "group": "regelmäßig",
            "classification": "regular",
            "aspect": "action",
            "auxiliary": "haben",
            "past_participle": "gemacht",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["mache", "machst", "macht", "machen", "macht", "machen"],
                    "negative": ["mache nicht", "machst nicht", "macht nicht", "machen nicht", "macht nicht", "machen nicht"],
                    "question": ["mache ich?", "machst du?", "macht er?", "machen wir?", "macht ihr?", "machen sie?"]
                },
                "past_simple (Präteritum)": {
                    "positive": ["machte", "machtest", "machte", "machten", "machtet", "machten"],
                    "negative": ["machte nicht", "machtest nicht", "machte nicht", "machten nicht", "machtet nicht", "machten nicht"],
                    "question": ["machte ich?", "machtest du?", "machte er?", "machte wir?", "machtet ihr?", "machten sie?"]
                }
            }
        },
        {
            "verb": "können",
            "group": "modal (unregelmäßig)",
            "classification": "irregular",
            "aspect": "modal",
            "auxiliary": "haben",
            "past_participle": "gekonnt",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["kann", "kannst", "kann", "können", "könnt", "können"],
                    "negative": ["kann nicht", "kannst nicht", "kann nicht", "können nicht", "könnt nicht", "können nicht"],
                    "question": ["kann ich?", "kannst du?", "kann er?", "können wir?", "könnt ihr?", "können sie?"]
                },
                "past_simple (Präteritum)": {
                    "positive": ["konnte", "konntest", "konnte", "konnten", "konntet", "konnten"],
                    "negative": ["konnte nicht", "konntest nicht", "konnte nicht", "konnten nicht", "konntet nicht", "konnten nicht"],
                    "question": ["konnte ich?", "konntest du?", "konnte er?", "konnten wir?", "konntet ihr?", "konnten sie?"]
                }
            }
        },
        {
            "verb": "müssen",
            "group": "modal (unregelmäßig)",
            "classification": "irregular",
            "aspect": "modal",
            "auxiliary": "haben",
            "past_participle": "gemusst",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["muss", "musst", "muss", "müssen", "müsst", "müssen"],
                    "negative": ["muss nicht", "musst nicht", "muss nicht", "müssen nicht", "müsst nicht", "müssen nicht"],
                    "question": ["muss ich?", "musst du?", "muss er?", "müssen wir?", "müsst ihr?", "müssen sie?"]
                },
                "past_simple (Präteritum)": {
                    "positive": ["musste", "musstest", "musste", "mussten", "musstet", "mussten"],
                    "negative": ["musste nicht", "musstest nicht", "musste nicht", "mussten nicht", "musstet nicht", "mussten nicht"],
                    "question": ["musste ich?", "musstest du?", "musste er?", "mussten wir?", "musstet ihr?", "mussten sie?"]
                }
            }
        }
    ]
    const lang = "de";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
