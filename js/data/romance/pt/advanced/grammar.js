(function() {
    const pronouns = ["eu", "tu", "ele / ela", "nós", "vós", "eles / elas"];
    const data = [
        {
            "verb": "ser",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "stative",
            "auxiliary": "ter",
            "past_participle": "sido",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["sou", "és", "é", "somos", "sois", "são"],
                    "negative": ["não sou", "não és", "não é", "não somos", "não sois", "não são"],
                    "question": ["sou eu?", "és tu?", "é ele?", "somos nós?", "sois vós?", "são eles?"]
                },
                "past_simple": {
                    "positive": ["fui", "foste", "foi", "fomos", "fostes", "foram"],
                    "negative": ["não fui", "não foste", "não foi", "não fomos", "não fostes", "não foram"],
                    "question": ["fui?", "foste?", "foi?", "fomos?", "fostes?", "foram?"]
                },
                "future_simple": {
                    "positive": ["serei", "serás", "será", "seremos", "sereis", "serão"],
                    "negative": ["não serei", "não serás", "não será", "não seremos", "não sereis", "não serão"],
                    "question": ["serei?", "serás?", "será?", "seremos?", "sereis?", "serão?"]
                }
            }
        },
        {
            "verb": "estar",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "stative",
            "auxiliary": "ter",
            "past_participle": "estado",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["estou", "estás", "está", "estamos", "estais", "estão"],
                    "negative": ["não estou", "não estás", "não está", "não estamos", "não estais", "não estão"],
                    "question": ["estou eu?", "estás tu?", "está ele?", "estamos nós?", "estais vós?", "estão eles?"]
                },
                "past_simple": {
                    "positive": ["estive", "estiveste", "esteve", "estivemos", "estivestes", "estiveram"],
                    "negative": ["não estive", "não estiveste", "não esteve", "não estivemos", "não estivestes", "não estiveram"],
                    "question": ["estive?", "estiveste?", "esteve?", "estivemos?", "estivestes?", "estiveram?"]
                }
            }
        },
        {
            "verb": "ter",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "stative",
            "auxiliary": "ter",
            "past_participle": "tido",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["tenho", "tens", "tem", "temos", "tendes", "têm"],
                    "negative": ["não tenho", "não tens", "não tem", "não temos", "não tendes", "não têm"],
                    "question": ["tenho eu?", "tens tu?", "tem ele?", "temos nós?", "tendes vós?", "têm eles?"]
                },
                "past_simple": {
                    "positive": ["tive", "tiveste", "teve", "tivemos", "tivestes", "tiveram"],
                    "negative": ["não tive", "não tiveste", "não teve", "não tivemos", "não tivestes", "não tiveram"],
                    "question": ["tive?", "tiveste?", "teve?", "tivemos?", "tivestes?", "tiveram?"]
                }
            }
        },
        {
            "verb": "trabalhar",
            "group": "-ar",
            "classification": "regular",
            "aspect": "action",
            "auxiliary": "ter",
            "past_participle": "trabalhado",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["trabalho", "trabalhas", "trabalha", "trabalhamos", "trabalhais", "trabalham"],
                    "negative": ["não trabalho", "não trabalhas", "não trabalha", "não trabalhamos", "não trabalhais", "não trabalham"],
                    "question": ["trabalho eu?", "trabalhas tu?", "trabalha ele?", "trabalhamos nós?", "trabalhais vós?", "trabalham eles?"]
                },
                "past_simple": {
                    "positive": ["trabalhei", "trabalhaste", "trabalhou", "trabalhámos", "trabalhasteis", "trabalharam"],
                    "negative": ["não trabalhei", "não trabalhaste", "não trabalhou", "não trabalhámos", "não trabalhasteis", "não trabalharam"],
                    "question": ["trabalhei?", "trabalhaste?", "trabalhou?", "trabalhámos?", "trabalhasteis?", "trabalharam?"]
                }
            }
        },
        {
            "verb": "falar",
            "group": "-ar",
            "classification": "regular",
            "aspect": "action",
            "auxiliary": "ter",
            "past_participle": "falado",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["falo", "falas", "fala", "falamos", "falais", "falam"],
                    "negative": ["não falo", "não falas", "não fala", "não falamos", "não falais", "não falam"],
                    "question": ["falo eu?", "falas tu?", "fala ele?", "falamos nós?", "falais vós?", "falam eles?"]
                },
                "past_simple": {
                    "positive": ["falei", "falaste", "falou", "falámos", "falastes", "falaram"],
                    "negative": ["não falei", "não falaste", "não falou", "não falámos", "não falastes", "não falaram"],
                    "question": ["falei?", "falaste?", "falou?", "falámos?", "falastes?", "falaram?"]
                }
            }
        },
        {
            "verb": "comer",
            "group": "-er",
            "classification": "regular",
            "aspect": "action",
            "auxiliary": "ter",
            "past_participle": "comido",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["como", "comes", "come", "comemos", "comeis", "comem"],
                    "negative": ["não como", "não comes", "não come", "não comemos", "não comeis", "não comem"],
                    "question": ["como?", "comes?", "come?", "comemos?", "comeis?", "comem?"]
                },
                "past_simple": {
                    "positive": ["comi", "comeste", "comeu", "comemos", "comestes", "comeram"],
                    "negative": ["não comi", "não comeste", "não comeu", "não comemos", "não comestes", "não comeram"],
                    "question": ["comi?", "comeste?", "comeu?", "comemos?", "comestes?", "comeram?"]
                }
            }
        }
    ]
    const lang = "pt";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
