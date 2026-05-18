(function() {
    const pronouns = [
        "je",
        "tu",
        "il",
        "elle",
        "nous",
        "vous",
        "ils",
        "elles"
    ];

    const data = [
    {
        "verb": "se laver",
        "group": "pronominal (-er)",
        "classification": "regular",
        "aspect": "action",
        "auxiliary": "être",
        "past_participle": "lavé",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["me lave", "te laves", "se lave", "se lave", "nous lavons", "vous lavez", "se lavent", "se lavent"],
                "negative": ["ne me lave pas", "ne te laves pas", "ne se lave pas", "ne se lave pas", "ne nous lavons pas", "ne vous lavez pas", "ne se lavent pas", "ne se lavent pas"],
                "question": ["me lavé-je?", "te laves-tu?", "se lave-t-il?", "se lave-t-elle?", "nous lavons-nous?", "vous lavez-vous?", "se lavent-ils?", "se lavent-elles?"]
            }
        }
    },
    {
        "verb": "être",
        "group": "irregular",
        "classification": "irregular",
        "aspect": "stative",
        "auxiliary": "avoir",
        "past_participle": "été",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["suis", "es", "est", "est", "sommes", "êtes", "sont", "sont"],
                "negative": ["ne suis pas", "n'es pas", "n'est pas", "n'est pas", "ne sommes pas", "n'êtes pas", "ne sont pas", "ne sont pas"],
                "question": ["suis-je?", "es-tu?", "est-il?", "est-elle?", "sommes-nous?", "êtes-vous?", "sont-ils?", "sont-elles?"]
            },
            "imperfect": {
                "positive": ["étais", "étais", "était", "était", "étions", "étiez", "étaient", "étaient"],
                "negative": ["n'étais pas", "n'étais pas", "n'était pas", "n'était pas", "n'étions pas", "n'étiez pas", "n'étaient pas", "n'étaient pas"],
                "question": ["étais-je?", "étais-tu?", "était-il?", "était-elle?", "étions-nous?", "étiez-vous?", "étaient-ils?", "étaient-elles?"]
            },
            "future_simple": {
                "positive": ["serai", "seras", "sera", "sera", "serons", "serez", "seront", "seront"],
                "negative": ["ne serai pas", "ne seras pas", "ne sera pas", "ne sera pas", "ne serons pas", "ne serez pas", "ne seront pas", "ne seront pas"],
                "question": ["serai-je?", "seras-tu?", "sera-t-il?", "sera-t-elle?", "serons-nous?", "serez-vous?", "seront-ils?", "seront-elles?"]
            },
            "conditional_present": {
                "positive": ["serais", "serais", "serait", "serait", "serions", "seriez", "seraient", "seraient"],
                "negative": ["ne serais pas", "ne serais pas", "ne serait pas", "ne serait pas", "ne serions pas", "ne seriez pas", "ne seraient pas", "ne seraient pas"],
                "question": ["serais-je?", "serais-tu?", "serait-il?", "serait-elle?", "serions-nous?", "seriez-vous?", "seraient-ils?", "seraient-elles?"]
            },
            "subjunctive_present": {
                "positive": ["sois", "sois", "soit", "soit", "soyons", "soyez", "soient", "soient"],
                "negative": ["ne sois pas", "ne sois pas", "ne soit pas", "ne soit pas", "ne soyons pas", "ne soyez pas", "ne soient pas", "ne soient pas"],
                "question": ["sois-je?", "sois-tu?", "soit-il?", "soit-elle?", "soyons-nous?", "soyez-vous?", "soient-ils?", "soient-elles?"]
            }
        }
    },
    {
        "verb": "avoir",
        "group": "irregular",
        "classification": "irregular",
        "aspect": "stative",
        "auxiliary": "avoir",
        "past_participle": "eu",
        "level": "starter",
        "pronouns": ["j'", "tu", "il", "elle", "nous", "vous", "ils", "elles"],
        "tenses": {
            "present_simple": {
                "positive": ["ai", "as", "a", "a", "avons", "avez", "ont", "ont"],
                "negative": ["n'ai pas", "n'as pas", "n'a pas", "n'a pas", "n'avons pas", "n'avez pas", "n'ont pas", "n'ont pas"],
                "question": ["ai-je?", "as-tu?", "a-t-il?", "a-t-elle?", "avons-nous?", "avez-vous?", "ont-ils?", "ont-elles?"]
            },
            "imperfect": {
                "positive": ["avais", "avais", "avait", "avait", "avions", "aviez", "avaient", "avaient"],
                "negative": ["n'avais pas", "n'avais pas", "n'avait pas", "n'avait pas", "n'avions pas", "n'aviez pas", "n'avaient pas", "n'avaient pas"],
                "question": ["avais-je?", "avais-tu?", "avait-il?", "avait-elle?", "avions-nous?", "aviez-vous?", "avaient-ils?", "avaient-elles?"]
            },
            "future_simple": {
                "positive": ["aurai", "auras", "aura", "aura", "aurons", "aurez", "auront", "auront"],
                "negative": ["n'aurai pas", "n'auras pas", "n'aura pas", "n'aura pas", "n'aurons pas", "n'aurez pas", "n'auront pas", "n'auront pas"],
                "question": ["aurai-je?", "auras-tu?", "aura-t-il?", "aura-t-elle?", "aurons-nous?", "aurez-vous?", "auront-ils?", "auront-elles?"]
            },
            "conditional_present": {
                "positive": ["aurais", "aurais", "aurait", "aurait", "aurions", "auriez", "auraient", "auraient"],
                "negative": ["n'aurais pas", "n'aurais pas", "n'aurait pas", "n'aurait pas", "n'aurions pas", "n'auriez pas", "n'auraient pas", "n'auraient pas"],
                "question": ["aurais-je?", "aurais-tu?", "aurait-il?", "aurait-elle?", "aurions-nous?", "auriez-vous?", "auraient-ils?", "auraient-elles?"]
            },
            "subjunctive_present": {
                "positive": ["aie", "aies", "ait", "ait", "ayons", "ayez", "aient", "aient"],
                "negative": ["n'aie pas", "n'aies pas", "n'ait pas", "n'ait pas", "n'ayons pas", "n'ayez pas", "n'aient pas", "n'aient pas"],
                "question": ["aie-je?", "aies-tu?", "ait-il?", "ait-elle?", "ayons-nous?", "ayez-vous?", "aient-ils?", "aient-elles?"]
            }
        }
    },
    {
        "verb": "faire",
        "group": "irregular",
        "classification": "irregular",
        "aspect": "action",
        "auxiliary": "avoir",
        "past_participle": "fait",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["fais", "fais", "fait", "fait", "faisons", "faites", "font", "font"],
                "negative": ["ne fais pas", "ne fais pas", "ne fait pas", "ne fait pas", "ne faisons pas", "ne faites pas", "ne font pas", "ne font pas"],
                "question": ["fais-je?", "fais-tu?", "fait-il?", "fait-elle?", "faisons-nous?", "faites-vous?", "font-ils?", "font-elles?"]
            },
            "imperfect": {
                "positive": ["faisais", "faisais", "faisait", "faisait", "faisions", "faisiez", "faisaient", "faisaient"],
                "negative": ["ne faisais pas", "ne faisais pas", "ne faisait pas", "ne faisait pas", "ne faisions pas", "ne faisiez pas", "ne faisaient pas", "ne faisaient pas"],
                "question": ["faisais-je?", "faisais-tu?", "faisait-il?", "faisait-elle?", "faisions-nous?", "faisiez-vous?", "faisaient-ils?", "faisaient-elles?"]
            },
            "future_simple": {
                "positive": ["ferai", "feras", "fera", "fera", "ferons", "ferez", "feront", "feront"],
                "negative": ["ne ferai pas", "ne feras pas", "ne fera pas", "ne fera pas", "ne ferons pas", "ne ferez pas", "ne feront pas", "ne feront pas"],
                "question": ["ferai-je?", "feras-tu?", "fera-t-il?", "fera-t-elle?", "ferons-nous?", "ferez-vous?", "feront-ils?", "feront-elles?"]
            },
            "conditional_present": {
                "positive": ["ferais", "ferais", "ferait", "ferait", "ferions", "feriez", "feraient", "feraient"],
                "negative": ["ne ferais pas", "ne ferais pas", "ne ferait pas", "ne ferait pas", "ne ferions pas", "ne feriez pas", "ne feraient pas", "ne feraient pas"],
                "question": ["ferais-je?", "ferais-tu?", "ferait-il?", "ferait-elle?", "ferions-nous?", "feriez-vous?", "feraient-ils?", "feraient-elles?"]
            },
            "subjunctive_present": {
                "positive": ["fasse", "fasses", "fasse", "fasse", "fassions", "fassiez", "fassent", "fassent"],
                "negative": ["ne fasse pas", "ne fasses pas", "ne fasse pas", "ne fasse pas", "ne fassions pas", "ne fassiez pas", "ne fassent pas", "ne fassent pas"],
                "question": ["fasse-je?", "fasses-tu?", "fasse-il?", "fasse-elle?", "fassions-nous?", "fassiez-vous?", "fassent-ils?", "fassent-elles?"]
            }
        }
    },
    {
        "verb": "aller",
        "group": "irregular",
        "classification": "irregular",
        "aspect": "action",
        "auxiliary": "être",
        "past_participle": "allé",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["vais", "vas", "va", "va", "allons", "allez", "vont", "vont"],
                "negative": ["ne vais pas", "ne vas pas", "ne va pas", "ne va pas", "n'allons pas", "n'allez pas", "ne vont pas", "ne vont pas"],
                "question": ["vais-je?", "vas-tu?", "va-t-il?", "va-t-elle?", "allons-nous?", "allez-vous?", "vont-ils?", "vont-elles?"]
            },
            "imperfect": {
                "positive": ["allais", "allais", "allait", "allait", "allions", "alliez", "allaient", "allaient"],
                "negative": ["n'allais pas", "n'allais pas", "n'allait pas", "n'allait pas", "n'allions pas", "n'alliez pas", "n'allaient pas", "n'allaient pas"],
                "question": ["allais-je?", "allais-tu?", "allait-il?", "allait-elle?", "allions-nous?", "alliez-vous?", "allaient-ils?", "allaient-elles?"]
            },
            "future_simple": {
                "positive": ["irai", "iras", "ira", "ira", "irons", "irez", "iront", "iront"],
                "negative": ["n'irai pas", "n'iras pas", "n'ira pas", "n'ira pas", "n'irons pas", "n'irez pas", "n'iront pas", "n'iront pas"],
                "question": ["irai-je?", "iras-tu?", "ira-t-il?", "ira-t-elle?", "irons-nous?", "irez-vous?", "iront-ils?", "iront-elles?"]
            },
            "conditional_present": {
                "positive": ["irais", "irais", "irait", "irait", "irions", "iriez", "iraient", "iraient"],
                "negative": ["n'irais pas", "n'irais pas", "n'irait pas", "n'irait pas", "n'irions pas", "n'iriez pas", "n'iraient pas", "n'iraient pas"],
                "question": ["irais-je?", "irais-tu?", "irait-il?", "irait-elle?", "irions-nous?", "iriez-vous?", "iraient-ils?", "iraient-elles?"]
            },
            "subjunctive_present": {
                "positive": ["aille", "ailles", "aille", "aille", "allions", "alliez", "aillent", "aillent"],
                "negative": ["n'aille pas", "n'ailles pas", "n'aille pas", "n'aille pas", "n'allions pas", "n'alliez pas", "n'aillent pas", "n'aillent pas"],
                "question": ["aille-je?", "ailles-tu?", "aille-il?", "aille-elle?", "allions-nous?", "alliez-vous?", "aillent-ils?", "aillent-elles?"]
            }
        }
    },
    {
        "verb": "venir",
        "group": "irregular",
        "classification": "irregular",
        "aspect": "action",
        "auxiliary": "être",
        "past_participle": "venu",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["viens", "viens", "vient", "vient", "venons", "venez", "viennent", "viennent"],
                "negative": ["ne viens pas", "ne viens pas", "ne vient pas", "ne vient pas", "ne venons pas", "ne venez pas", "ne viennent pas", "ne viennent pas"],
                "question": ["viens-je?", "viens-tu?", "vient-il?", "vient-elle?", "venons-nous?", "venez-vous?", "viennent-ils?", "viennent-elles?"]
            },
            "imperfect": {
                "positive": ["venais", "venais", "venait", "venait", "venions", "veniez", "venaient", "venaient"],
                "negative": ["ne venais pas", "ne venais pas", "ne venait pas", "ne venait pas", "ne venions pas", "ne veniez pas", "ne venaient pas", "ne venaient pas"],
                "question": ["venais-je?", "venais-tu?", "venait-il?", "venait-elle?", "venions-nous?", "venez-vous?", "venaient-ils?", "venaient-elles?"]
            },
            "future_simple": {
                "positive": ["viendrai", "viendras", "viendra", "viendra", "viendrons", "viendrez", "viendront", "viendront"],
                "negative": ["ne viendrai pas", "ne viendras pas", "ne viendra pas", "ne viendra pas", "ne viendrons pas", "ne viendrez pas", "ne viendront pas", "ne viendront pas"],
                "question": ["viendrai-je?", "viendras-tu?", "viendra-t-il?", "viendra-t-elle?", "viendrons-nous?", "viendrez-vous?", "viendront-ils?", "viendront-elles?"]
            },
            "conditional_present": {
                "positive": ["viendrais", "viendrais", "viendrait", "viendrait", "viendrions", "viendriez", "viendraient", "viendraient"],
                "negative": ["ne viendrais pas", "ne viendrais pas", "ne viendrait pas", "ne viendrait pas", "ne viendrions pas", "ne viendriez pas", "ne viendraient pas", "ne viendraient pas"],
                "question": ["viendrais-je?", "viendrais-tu?", "viendrait-il?", "viendrait-elle?", "viendrions-nous?", "viendriez-vous?", "viendraient-ils?", "viendraient-elles?"]
            },
            "subjunctive_present": {
                "positive": ["vienne", "viennes", "vienne", "vienne", "venions", "veniez", "viennent", "viennent"],
                "negative": ["ne vienne pas", "ne viennes pas", "ne vienne pas", "ne vienne pas", "ne venions pas", "ne veniez pas", "ne viennent pas", "ne viennent pas"],
                "question": ["vienne-je?", "viennes-tu?", "vienne-il?", "vienne-elle?", "venions-nous?", "veniez-vous?", "viennent-ils?", "viennent-elles?"]
            }
        }
    },
    {
        "verb": "parler",
        "group": "-er",
        "classification": "regular",
        "aspect": "action",
        "auxiliary": "avoir",
        "past_participle": "parlé",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["parle", "parles", "parle", "parle", "parlons", "parlez", "parlent", "parlent"],
                "negative": ["ne parle pas", "ne parles pas", "ne parle pas", "ne parle pas", "ne parlons pas", "ne parlez pas", "ne parlent pas", "ne parlent pas"],
                "question": ["parlé-je?", "parles-tu?", "parle-t-il?", "parle-t-elle?", "parlons-nous?", "parlez-vous?", "parlent-ils?", "parlent-elles?"]
            },
            "imperfect": {
                "positive": ["parlais", "parlais", "parlait", "parlait", "parlions", "parliez", "parlaient", "parlaient"],
                "negative": ["ne parlais pas", "ne parlais pas", "ne parlait pas", "ne parlait pas", "ne parlions pas", "ne parliez pas", "ne parlaient pas", "ne parlaient pas"],
                "question": ["parlais-je?", "parlais-tu?", "parlait-il?", "parlait-elle?", "parlions-nous?", "parliez-vous?", "parlaient-ils?", "parlaient-elles?"]
            },
            "future_simple": {
                "positive": ["parlerai", "parleras", "parlera", "parlera", "parlerons", "parlerez", "parleront", "parleront"],
                "negative": ["ne parlerai pas", "ne parleras pas", "ne parlera pas", "ne parlera pas", "ne parlerons pas", "ne parlerez pas", "ne parleront pas", "ne parleront pas"],
                "question": ["parlerai-je?", "parleras-tu?", "parlera-t-il?", "parlera-t-elle?", "parlerons-nous?", "parlerez-vous?", "parleront-ils?", "parleront-elles?"]
            },
            "conditional_present": {
                "positive": ["parlerais", "parlerais", "parlerait", "parlerait", "parlerions", "parleriez", "parleraient", "parleraient"],
                "negative": ["ne parlerais pas", "ne parlerais pas", "ne parlerait pas", "ne parlerait pas", "ne parlerions pas", "ne parleriez pas", "ne parleraient pas", "ne parleraient pas"],
                "question": ["parlerais-je?", "parlerais-tu?", "parlerait-il?", "parlerait-elle?", "parlerions-nous?", "parleriez-vous?", "parleraient-ils?", "parleraient-elles?"]
            },
            "subjunctive_present": {
                "positive": ["parle", "parles", "parle", "parle", "parlions", "parliez", "parlent", "parlent"],
                "negative": ["ne parle pas", "ne parles pas", "ne parle pas", "ne parle pas", "ne parlions pas", "ne parliez pas", "ne parlent pas", "ne parlent pas"],
                "question": ["parle-je?", "parles-tu?", "parle-il?", "parle-elle?", "parlions-nous?", "parliez-vous?", "parlent-ils?", "parlent-elles?"]
            }
        }
    },
    {
        "verb": "manger",
        "group": "-er",
        "classification": "regular",
        "aspect": "action",
        "auxiliary": "avoir",
        "past_participle": "mangé",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["mange", "manges", "mange", "mange", "mangeons", "mangez", "mangent", "mangent"],
                "negative": ["ne mange pas", "ne manges pas", "ne mange pas", "ne mange pas", "ne mangeons pas", "ne mangez pas", "ne mangent pas", "ne mangent pas"],
                "question": ["mangé-je?", "manges-tu?", "mange-t-il?", "mange-t-elle?", "mangeons-nous?", "mangez-vous?", "mangent-ils?", "mangent-elles?"]
            },
            "imperfect": {
                "positive": ["mangeais", "mangeais", "mangeait", "mangeait", "mangions", "mangiez", "mangeaient", "mangeaient"],
                "negative": ["ne mangeais pas", "ne mangeais pas", "ne mangeait pas", "ne mangeait pas", "ne mangions pas", "ne mangiez pas", "ne mangeaient pas", "ne mangeaient pas"],
                "question": ["mangeais-je?", "mangeais-tu?", "mangeait-il?", "mangeait-elle?", "mangions-nous?", "mangiez-vous?", "mangeaient-ils?", "mangeaient-elles?"]
            },
            "future_simple": {
                "positive": ["mangerai", "mangeras", "mangera", "mangera", "mangerons", "mangerez", "mangeront", "mangeront"],
                "negative": ["ne mangerai pas", "ne mangeras pas", "ne mangera pas", "ne mangera pas", "ne mangerons pas", "ne mangerez pas", "ne mangeront pas", "ne mangeront pas"],
                "question": ["mangerai-je?", "mangeras-tu?", "mangera-t-il?", "mangera-t-elle?", "mangerons-nous?", "mangerez-vous?", "mangeront-ils?", "mangeront-elles?"]
            },
            "conditional_present": {
                "positive": ["mangerais", "mangerais", "mangerait", "mangerait", "mangerions", "mangeriez", "mangeraient", "mangeraient"],
                "negative": ["ne mangerais pas", "ne mangerais pas", "ne mangerait pas", "ne mangerait pas", "ne mangerions pas", "ne mangeriez pas", "ne mangeraient pas", "ne mangeraient pas"],
                "question": ["mangerais-je?", "mangerais-tu?", "mangerait-il?", "mangerait-elle?", "mangerions-nous?", "mangeriez-vous?", "mangeraient-ils?", "mangeraient-elles?"]
            },
            "subjunctive_present": {
                "positive": ["mange", "manges", "mange", "mange", "mangions", "mangiez", "mangent", "mangent"],
                "negative": ["ne mange pas", "ne manges pas", "ne mange pas", "ne mange pas", "ne mangions pas", "ne mangiez pas", "ne mangent pas", "ne mangent pas"],
                "question": ["mange-je?", "manges-tu?", "mange-il?", "mange-elle?", "mangions-nous?", "mangiez-vous?", "mangent-ils?", "mangent-elles?"]
            }
        }
    },
    {
        "verb": "boire",
        "group": "irregular",
        "classification": "irregular",
        "aspect": "action",
        "auxiliary": "avoir",
        "past_participle": "bu",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["bois", "bois", "boit", "boit", "buvons", "buvez", "boivent", "boivent"],
                "negative": ["ne bois pas", "ne bois pas", "ne boit pas", "ne boit pas", "ne buvons pas", "ne buvez pas", "ne boivent pas", "ne boivent pas"],
                "question": ["bois-je?", "bois-tu?", "boit-il?", "boit-elle?", "buvons-nous?", "buvez-vous?", "boivent-ils?", "boivent-elles?"]
            },
            "imperfect": {
                "positive": ["buvais", "buvais", "buvait", "buvait", "buvions", "buviez", "buvaient", "buvaient"],
                "negative": ["ne buvais pas", "ne buvais pas", "ne buvait pas", "ne buvait pas", "ne buvions pas", "ne buvez pas", "ne buvaient pas", "ne buvaient pas"],
                "question": ["buvais-je?", "buvais-tu?", "buvait-il?", "buvait-elle?", "buvions-nous?", "buviez-vous?", "buvaient-ils?", "buvaient-elles?"]
            },
            "future_simple": {
                "positive": ["boirai", "boiras", "boira", "boira", "boirons", "boirez", "boiront", "boiront"],
                "negative": ["ne boirai pas", "ne boiras pas", "ne boira pas", "ne boira pas", "ne boirons pas", "ne boirez pas", "ne boiront pas", "ne boiront pas"],
                "question": ["boirai-je?", "boiras-tu?", "boira-t-il?", "boira-t-elle?", "boirons-nous?", "boirez-vous?", "boiront-ils?", "boiront-elles?"]
            },
            "conditional_present": {
                "positive": ["boirais", "boirais", "boirait", "boirait", "boirions", "boiriez", "boiraient", "boiraient"],
                "negative": ["ne boirais pas", "ne boiras pas", "ne boirait pas", "ne boirait pas", "ne boirions pas", "ne boiriez pas", "ne boiraient pas", "ne boiraient pas"],
                "question": ["boirais-je?", "boiras-tu?", "boira-t-il?", "boira-t-elle?", "boirons-nous?", "boirez-vous?", "boiraient-ils?", "boiraient-elles?"]
            },
            "subjunctive_present": {
                "positive": ["boive", "boives", "boive", "boive", "buvions", "buviez", "boivent", "boivent"],
                "negative": ["ne boive pas", "ne boives pas", "ne boive pas", "ne boive pas", "ne buvions pas", "ne buviez pas", "ne boivent pas", "ne boivent pas"],
                "question": ["boive-je?", "boives-tu?", "boive-il?", "boive-elle?", "buvions-nous?", "buviez-vous?", "boivent-ils?", "boivent-elles?"]
            }
        }
    },
    {
        "verb": "travailler",
        "group": "-er",
        "classification": "regular",
        "aspect": "action",
        "auxiliary": "avoir",
        "past_participle": "travaillé",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["travaille", "travailles", "travaille", "travaille", "travaillons", "travaillez", "travaillent", "travaillent"],
                "negative": ["ne travaille pas", "ne travailles pas", "ne travaille pas", "ne travaille pas", "ne travaillons pas", "ne travaillez pas", "ne travaillent pas", "ne travaillent pas"],
                "question": ["travaillé-je?", "travailles-tu?", "travaille-t-il?", "travaille-t-elle?", "travaillons-nous?", "travaillez-vous?", "travaillent-ils?", "travaillent-elles?"]
            },
            "imperfect": {
                "positive": ["travaillais", "travaillais", "travaillait", "travaillait", "travaillions", "travailliez", "travaillaient", "travaillaient"],
                "negative": ["ne travaillais pas", "ne travaillais pas", "ne travaillait pas", "ne travaillait pas", "ne travaillions pas", "ne travailliez pas", "ne travaillaient pas", "ne travaillaient pas"],
                "question": ["travaillais-je?", "travaillais-tu?", "travaillait-il?", "travaillait-elle?", "travaillions-nous?", "travailliez-vous?", "travaillaient-ils?", "travaillaient-elles?"]
            },
            "future_simple": {
                "positive": ["travaillerai", "travailleras", "travaillera", "travaillera", "travaillerons", "travaillerez", "travailleront", "travailleront"],
                "negative": ["ne travaillerai pas", "ne travailleras pas", "ne travaillera pas", "ne travaillera pas", "ne travaillerons pas", "ne travaillerez pas", "ne travailleront pas", "ne travailleront pas"],
                "question": ["travaillerai-je?", "travailleras-tu?", "travaillera-t-il?", "travaillera-t-elle?", "travaillerons-nous?", "travaillerez-vous?", "travailleront-ils?", "travailleront-elles?"]
            },
            "conditional_present": {
                "positive": ["travaillerais", "travaillerais", "travaillerait", "travaillerait", "travaillerions", "travailleriez", "travailleraient", "travailleraient"],
                "negative": ["ne travaillerais pas", "ne travaillerais pas", "ne travaillerait pas", "ne travaillerait pas", "ne travaillerions pas", "ne travailleriez pas", "ne travailleraient pas", "ne travailleraient pas"],
                "question": ["travaillerais-je?", "travaillerais-tu?", "travaillerait-il?", "travaillerait-elle?", "travaillerions-nous?", "travailleriez-vous?", "travailleraient-ils?", "travailleraient-elles?"]
            },
            "subjunctive_present": {
                "positive": ["travaille", "travailles", "travaille", "travaille", "travaillions", "travailliez", "travaillent", "travaillent"],
                "negative": ["ne travaille pas", "ne travailles pas", "ne travaille pas", "ne travaille pas", "ne travaillions pas", "ne travaillez pas", "ne travaillent pas", "ne travaillent pas"],
                "question": ["travaille-je?", "travailles-tu?", "travaille-il?", "travaille-elle?", "travaillions-nous?", "travailliez-vous?", "travaillent-ils?", "travaillent-elles?"]
            }
        }
    }
]
    const lang = "fr";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
