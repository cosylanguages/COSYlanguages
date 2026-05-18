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
                "negative": ["n'avais pas", "n'avais pas", "n'avait pas", "n'avait pas", "n'avions pas", "n'avez pas", "n'avaient pas", "n'avaient pas"],
                "question": ["avais-je?", "avais-tu?", "avait-il?", "avait-elle?", "avions-nous?", "aviez-vous?", "avaient-ils?", "avaient-elles?"]
            },
            "future_simple": {
                "positive": ["aurai", "auras", "aura", "aura", "aurons", "aurez", "auront", "auront"],
                "negative": ["n'aurai pas", "n'auras pas", "n'aura pas", "n'aura pas", "n'aurons pas", "n'aurez pas", "n'auront pas", "n'auront pas"],
                "question": ["aurai-je?", "auras-tu?", "aura-t-il?", "aura-t-elle?", "aurons-nous?", "aurez-vous?", "auront-ils?", "auront-elles?"]
            }
        }
    },
    {
        "verb": "finir",
        "group": "2ème groupe (-ir)",
        "classification": "regular",
        "aspect": "action",
        "auxiliary": "avoir",
        "past_participle": "fini",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["finis", "finis", "finit", "finit", "finissons", "finissez", "finissent", "finissent"],
                "negative": ["ne finis pas", "ne finis pas", "ne finit pas", "ne finit pas", "ne finissons pas", "ne finissez pas", "ne finissent pas", "ne finissent pas"],
                "question": ["finis-je?", "finis-tu?", "finit-il?", "finit-elle?", "finissons-nous?", "finissez-vous?", "finissent-ils?", "finissent-elles?"]
            },
            "future_simple": {
                "positive": ["finirai", "finiras", "finira", "finira", "finirons", "finirez", "finiront", "finiront"],
                "negative": ["ne finirai pas", "ne finiras pas", "ne finira pas", "ne finira pas", "ne finirons pas", "ne finirez pas", "ne finiront pas", "ne finiront pas"],
                "question": ["finirai-je?", "finiras-tu?", "finira-t-il?", "finira-t-elle?", "finirons-nous?", "finirez-vous?", "finiront-ils?", "finiront-elles?"]
            }
        }
    },
    {
        "verb": "attendre",
        "group": "3ème groupe (-re)",
        "classification": "regular",
        "aspect": "action",
        "auxiliary": "avoir",
        "past_participle": "attendu",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["attends", "attends", "attend", "attends", "attendons", "attendez", "attendent", "attendent"],
                "negative": ["n'attends pas", "n'attends pas", "n'attend pas", "n'attend pas", "n'attendons pas", "n'attendez pas", "n'attendent pas", "n'attendent pas"],
                "question": ["attends-je?", "attends-tu?", "attend-il?", "attend-elle?", "attendons-nous?", "attendez-vous?", "attendent-ils?", "attendent-elles?"]
            },
            "imperfect": {
                "positive": ["attendais", "attendais", "attendait", "attendait", "attendions", "attendiez", "attendaient", "attendaient"],
                "negative": ["n'attendais pas", "n'attendais pas", "n'attendait pas", "n'attendait pas", "n'attendions pas", "n'attendiez pas", "n'attendaient pas", "n'attendaient pas"],
                "question": ["attendais-je?", "attendais-tu?", "attendait-il?", "attendait-elle?", "attendions-nous?", "attendiez-vous?", "attendaient-ils?", "attendaient-elles?"]
            }
        }
    },
    {
        "verb": "pouvoir",
        "group": "modal (3ème groupe)",
        "classification": "irregular",
        "aspect": "modal",
        "auxiliary": "avoir",
        "past_participle": "pu",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["peux", "peux", "peut", "peut", "pouvons", "pouvez", "peuvent", "peuvent"],
                "negative": ["ne peux pas", "ne peux pas", "ne peut pas", "ne peut pas", "ne pouvons pas", "ne pouvez pas", "ne peuvent pas", "ne peuvent pas"],
                "question": ["puis-je?", "peux-tu?", "peut-il?", "peut-elle?", "pouvons-nous?", "pouvez-vous?", "peuvent-ils?", "peuvent-elles?"]
            },
            "future_simple": {
                "positive": ["pourrai", "pourras", "pourra", "pourra", "pourrons", "pourrez", "pourront", "pourront"],
                "negative": ["ne pourrai pas", "ne pourras pas", "ne pourra pas", "ne pourra pas", "ne pourrons pas", "ne pourrez pas", "ne pourront pas", "ne pourront pas"],
                "question": ["pourrai-je?", "pourras-tu?", "pourra-t-il?", "pourra-t-elle?", "pourrons-nous?", "pourrez-vous?", "pourront-ils?", "pourront-elles?"]
            },
            "conditional_present": {
                "positive": ["pourrais", "pourrais", "pourrait", "pourrait", "pourrions", "pourriez", "pourraient", "pourraient"],
                "negative": ["ne pourrais pas", "ne pourrais pas", "ne pourrait pas", "ne pourrait pas", "ne pourrions pas", "ne pourriez pas", "ne pourraient pas", "ne pourraient pas"],
                "question": ["pourrais-je?", "pourrais-tu?", "pourrait-il?", "pourrait-elle?", "pourrions-nous?", "pourriez-vous?", "pourraient-ils?", "pourraient-elles?"]
            }
        }
    }
]
    const lang = "fr";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
