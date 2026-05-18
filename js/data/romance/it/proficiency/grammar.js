(function() {
    const pronouns = [
        "io",
        "tu",
        "lui / lei",
        "noi",
        "voi",
        "loro"
    ];

    const data = [
    {
        "verb": "lavarsi",
        "group": "pronominale (-are)",
        "classification": "regular",
        "aspect": "action",
        "auxiliary": "essere",
        "past_participle": "lavato",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["mi lavo", "ti lavi", "si lava", "ci laviamo", "vi lavate", "si lavano"],
                "negative": ["non mi lavo", "non ti lavi", "non si lava", "non ci laviamo", "non vi lavate", "non si lavano"],
                "question": ["mi lavo?", "ti lavi?", "si lava?", "ci laviamo?", "vi lavate?", "si lavano?"]
            },
            "past_simple": {
                "positive": ["mi lavai", "ti lavasti", "si lavò", "ci lavammo", "vi lavaste", "si lavarono"],
                "negative": ["non mi lavai", "non ti lavasti", "non si lavò", "non ci lavammo", "non vi lavaste", "non si lavarono"],
                "question": ["mi lavai?", "ti lavasti?", "si lavò?", "ci lavammo?", "vi lavaste?", "si lavarono?"]
            }
        }
    },
    {
        "verb": "essere",
        "group": "irregular",
        "classification": "irregular",
        "aspect": "stative",
        "auxiliary": "essere",
        "past_participle": "stato",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["sono", "sei", "è", "siamo", "siete", "sono"],
                "negative": ["non sono", "non sei", "non è", "non siamo", "non siete", "non sono"],
                "question": ["sono io?", "sei tu?", "è lui/lei?", "siamo noi?", "siete voi?", "sono loro?"]
            },
            "imperfect": {
                "positive": ["ero", "eri", "era", "eravamo", "eravate", "erano"],
                "negative": ["non ero", "non eri", "non era", "non eravamo", "non eravate", "non erano"],
                "question": ["ero io?", "eri tu?", "era lui/lei?", "eravamo noi?", "eravate voi?", "erano loro?"]
            },
            "future_simple": {
                "positive": ["sarò", "sarai", "sarà", "saremo", "sarete", "saranno"],
                "negative": ["non sarò", "non sarai", "non sarà", "non saremo", "non sarete", "non saranno"],
                "question": ["sarò io?", "sarai tu?", "sarà lui/lei?", "saremo noi?", "sarete voi?", "saranno loro?"]
            },
            "conditional_present": {
                "positive": ["sarei", "saresti", "sarebbe", "saremmo", "sareste", "sarebbero"],
                "negative": ["non sarei", "non saresti", "non sarebbe", "non saremmo", "non sareste", "non sarebbero"],
                "question": ["sarei io?", "saresti tu?", "sarebbe lui/lei?", "saremmo noi?", "sareste voi?", "sarebbero loro?"]
            },
            "subjunctive_present": {
                "positive": ["sia", "sia", "sia", "siamo", "siate", "siano"],
                "negative": ["non sia", "non sia", "non sia", "non siamo", "non siate", "non siano"],
                "question": ["che io sia", "che tu sia", "che lui/lei sia", "che noi siamo", "che voi siate", "che loro siano"]
            }
        }
    },
    {
        "verb": "parlare",
        "group": "-are",
        "classification": "regular",
        "aspect": "action",
        "auxiliary": "avere",
        "past_participle": "parlato",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["parlo", "parli", "parla", "parliamo", "parlate", "parlano"],
                "negative": ["non parlo", "non parli", "non parla", "non parliamo", "non parlate", "non parlano"],
                "question": ["parlo?", "parli?", "parla?", "parliamo?", "parlate?", "parlano?"]
            },
            "imperfect": {
                "positive": ["parlavo", "parlavi", "parlava", "parlavamo", "parlavate", "parlavano"],
                "negative": ["non parlavo", "non parlavi", "non parlava", "non parlavamo", "non parlavate", "non parlavano"],
                "question": ["parlavo?", "parlavi?", "parlava?", "parlavamo?", "parlavate?", "parlavano?"]
            },
            "future_simple": {
                "positive": ["parlerò", "parlerai", "parlerà", "parleremo", "parlerete", "parleranno"],
                "negative": ["non parlerò", "non parlerai", "non parlerà", "non parleremo", "non parlerete", "non parleranno"],
                "question": ["parlerò?", "parlerai?", "parlerà?", "parleremo?", "parlerete?", "parleranno?"]
            }
        }
    },
    {
        "verb": "sentire",
        "group": "-ire (Type A)",
        "classification": "regular",
        "aspect": "action",
        "auxiliary": "avere",
        "past_participle": "sentito",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["sento", "senti", "sente", "sentiamo", "sentite", "sentono"],
                "negative": ["non sento", "non senti", "non sente", "non sentiamo", "non sentite", "non sentono"],
                "question": ["sento?", "senti?", "sente?", "sentiamo?", "sentite?", "sentono?"]
            },
            "past_simple": {
                "positive": ["sentii", "sentisti", "sentì", "sentimmo", "sentiste", "sentirono"],
                "negative": ["non sentii", "non sentisti", "non sentì", "non sentimmo", "non sentiste", "non sentirono"],
                "question": ["sentii?", "sentisti?", "sentì?", "sentimmo?", "sentiste?", "sentirono?"]
            }
        }
    },
    {
        "verb": "capire",
        "group": "-ire (Type B -isc)",
        "classification": "regular",
        "aspect": "action",
        "auxiliary": "avere",
        "past_participle": "capito",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["capisco", "capisci", "capisce", "capiamo", "capite", "capiscono"],
                "negative": ["non capisco", "non capisci", "non capisce", "non capiamo", "non capite", "non capiscono"],
                "question": ["capisco?", "capisci?", "capisce?", "capiamo?", "capite?", "capiscono?"]
            },
            "future_simple": {
                "positive": ["capirò", "capirai", "capirà", "capiremo", "capirete", "capiranno"],
                "negative": ["non capirò", "non capirai", "non capirà", "non capiremo", "non capirete", "non capiranno"],
                "question": ["capirò?", "capirai?", "capirà?", "capiremo?", "capirete?", "capiranno?"]
            }
        }
    },
    {
        "verb": "potere",
        "group": "modal (-ere)",
        "classification": "irregular",
        "aspect": "modal",
        "auxiliary": "avere",
        "past_participle": "potuto",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["posso", "puoi", "può", "possiamo", "potete", "possono"],
                "negative": ["non posso", "non puoi", "non può", "non possiamo", "non potete", "non possono"],
                "question": ["posso?", "puoi?", "può?", "possiamo?", "potete?", "possono?"]
            },
            "future_simple": {
                "positive": ["potrò", "potrai", "potrà", "potremo", "potrete", "potranno"],
                "negative": ["non potrò", "non potrai", "non potrà", "non potremo", "non potrete", "non potranno"],
                "question": ["potrò?", "potrai?", "potrà?", "potremo?", "potrete?", "potranno?"]
            },
            "conditional_present": {
                "positive": ["potrei", "potresti", "potrebbe", "potremmo", "potreste", "potrebbero"],
                "negative": ["non potrei", "non potresti", "non potrebbe", "non potremmo", "non potreste", "non potrebbero"],
                "question": ["potrei?", "potresti?", "potrebbe?", "potremmo?", "potreste?", "potrebbero?"]
            }
        }
    }
]
    const lang = "it";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
