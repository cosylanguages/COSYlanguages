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
        },
        {
            "verb": "ter",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "stative",
            "past_participle": "tido",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["tenho", "tens", "tem", "tem", "temos", "tendes", "têm", "têm"],
                    "negative": ["não tenho", "não tens", "não tem", "não tem", "não temos", "não tendes", "não têm", "não têm"],
                    "question": ["tenho eu?", "tens tu?", "tem ele?", "tem ela?", "temos nós?", "tendes vós?", "têm eles?", "têm elas?"]
                }
            }
        },
        {
            "verb": "trabalhar",
            "group": "ar",
            "classification": "regular",
            "aspect": "action",
            "past_participle": "trabalhado",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["trabalho", "trabalhas", "trabalha", "trabalha", "trabalhamos", "trabalhais", "trabalham", "trabalham"],
                    "negative": ["não trabalho", "não trabalhas", "não trabalha", "não trabalha", "não trabalhamos", "não trabalhais", "não trabalham", "não trabalham"],
                    "question": ["trabalho eu?", "trabalhas tu?", "trabalha ele?", "trabalha ela?", "trabalhamos nós?", "trabalhais vós?", "trabalham eles?", "trabalham elas?"]
                }
            }
        },
        {
            "verb": "fazer",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "action",
            "past_participle": "feito",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["faço", "fazes", "faz", "faz", "fazemos", "fazeis", "fazem", "fazem"],
                    "negative": ["não faço", "não fazes", "não faz", "não faz", "não fazemos", "não fazeis", "não fazem", "não fazem"],
                    "question": ["faço eu?", "fazes tu?", "faz ele?", "faz ela?", "fazemos nós?", "fazeis vós?", "fazem eles?", "fazem elas?"]
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
                    "positive": ["vou", "vais", "vai", "vai", "vamos", "ides", "vão", "vão"],
                    "negative": ["não vou", "não vais", "não vai", "não vai", "não vamos", "não ides", "não vão", "não vão"],
                    "question": ["vou eu?", "vais tu?", "vai ele?", "vai ela?", "vamos nós?", "ides vós?", "vão eles?", "vão elas?"]
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
                    "positive": ["como", "comes", "come", "come", "comemos", "comeis", "comem", "comem"],
                    "negative": ["não como", "não comes", "não come", "não come", "não comemos", "não comeis", "não comem", "não comem"],
                    "question": ["como eu?", "comes tu?", "come ele?", "come ela?", "comemos nós?", "comeis vós?", "comem eles?", "comem elas?"]
                }
            }
        },
        {
            "verb": "falar",
            "group": "ar",
            "classification": "regular",
            "aspect": "action",
            "past_participle": "falado",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["falo", "falas", "fala", "fala", "falamos", "falais", "falam", "falam"],
                    "negative": ["não falo", "não falas", "não fala", "não fala", "não falamos", "não falais", "não falam", "não falam"],
                    "question": ["falo eu?", "falas tu?", "fala ele?", "fala ela?", "falamos nós?", "falais vós?", "falam eles?", "falam elas?"]
                }
            }
        }
    ];
    const lang = "pt";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
