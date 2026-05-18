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
        "past_participle": "lavato",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["mi lavo", "ti lavi", "si lava", "ci laviamo", "vi lavate", "si lavano"],
                "negative": ["non mi lavo", "non ti lavi", "non si lava", "non ci laviamo", "non vi lavate", "non si lavano"],
                "question": ["mi lavo io", "ti lavi tu", "si lava lui/lei", "ci laviamo noi", "vi lavate voi", "si lavano loro"]
            }
        }
    },
    {
        "verb": "essere",
        "group": "irregular",
        "classification": "irregular",
        "aspect": "stative",
        "past_participle": "stato",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["sono", "sei", "è", "siamo", "siete", "sono"],
                "negative": ["non sono", "non sei", "non è", "non siamo", "non siete", "non sono"],
                "question": ["sono io", "sei tu", "è lui/lei", "siamo noi", "siete voi", "sono loro"]
            },
            "imperfect": {
                "positive": ["ero", "eri", "era", "eravamo", "eravate", "erano"],
                "negative": ["non ero", "non eri", "non era", "non eravamo", "non eravate", "non erano"],
                "question": ["ero io", "eri tu", "era lui/lei", "eravamo noi", "eravate voi", "erano loro"]
            },
            "future_simple": {
                "positive": ["sarò", "sarai", "sarà", "saremo", "sarete", "saranno"],
                "negative": ["non sarò", "non sarai", "non sarà", "non saremo", "non sarete", "non saranno"],
                "question": ["sarò io", "sarai tu", "sarà lui/lei", "saremo noi", "sarete voi", "saranno loro"]
            },
            "conditional_present": {
                "positive": ["sarei", "saresti", "sarebbe", "saremmo", "sareste", "sarebbero"],
                "negative": ["non sarei", "non saresti", "non sarebbe", "non saremmo", "non sareste", "non sarebbero"],
                "question": ["sarei io", "saresti tu", "sarebbe lui/lei", "saremmo noi", "sareste voi", "sarebbero loro"]
            },
            "subjunctive_present": {
                "positive": ["sia", "sia", "sia", "siamo", "siate", "siano"],
                "negative": ["non sia", "non sia", "non sia", "non siamo", "non siate", "non siano"],
                "question": ["che io sia", "che tu sia", "che lui/lei sia", "che noi siamo", "che voi siate", "che loro siano"]
            }
        }
    },
    {
        "verb": "avere",
        "group": "irregular",
        "classification": "irregular",
        "aspect": "stative",
        "past_participle": "avuto",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["ho", "hai", "ha", "abbiamo", "avete", "hanno"],
                "negative": ["non ho", "non hai", "non ha", "non abbiamo", "non avete", "non hanno"],
                "question": ["ho io", "hai tu", "ha lui/lei", "abbiamo noi", "avete voi", "hanno loro"]
            },
            "imperfect": {
                "positive": ["avevo", "avevi", "aveva", "avevamo", "avevate", "avevano"],
                "negative": ["non avevo", "non avevi", "non aveva", "non avevamo", "non avevate", "non avevano"],
                "question": ["avevo io", "avevi tu", "aveva lui/lei", "avevamo noi", "avevate voi", "avevano loro"]
            },
            "future_simple": {
                "positive": ["avrò", "avrai", "avrà", "avremo", "avrete", "avranno"],
                "negative": ["non avrò", "non avrai", "non avrà", "non avremo", "non avrete", "non avranno"],
                "question": ["avrò io", "avrai tu", "avrò lui/lei", "avremo noi", "avrete voi", "avranno loro"]
            },
            "conditional_present": {
                "positive": ["avrei", "avresti", "avrebbe", "avremmo", "avreste", "avrebbero"],
                "negative": ["non avrei", "non avresti", "non avrebbe", "non avremmo", "non avreste", "non avrebbero"],
                "question": ["avrei io", "avresti tu", "avrebbe lui/lei", "avremmo noi", "avreste voi", "avrebbero loro"]
            },
            "subjunctive_present": {
                "positive": ["abbia", "abbia", "abbia", "abbiamo", "abbiate", "abbiano"],
                "negative": ["non abbia", "non abbia", "non abbia", "non abbiamo", "non abbiate", "non abbiano"],
                "question": ["che io abbia", "che tu abbia", "che lui/lei abbia", "che noi abbiamo", "che voi abbiate", "che loro abbiano"]
            }
        }
    },
    {
        "verb": "fare",
        "group": "irregular",
        "classification": "irregular",
        "aspect": "action",
        "past_participle": "fatto",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["faccio", "fai", "fa", "facciamo", "fate", "fanno"],
                "negative": ["non faccio", "non fai", "non fa", "non facciamo", "non fate", "non fanno"],
                "question": ["faccio io", "fai tu", "fa lui/lei", "facciamo noi", "fate voi", "fanno loro"]
            },
            "imperfect": {
                "positive": ["facevo", "facevi", "faceva", "facevamo", "facevate", "facevano"],
                "negative": ["non facevo", "non facevi", "non faceva", "non facevamo", "non facevate", "non facevano"],
                "question": ["facevo io", "facevi tu", "faceva lui/lei", "facevamo noi", "facevate voi", "facevano loro"]
            },
            "future_simple": {
                "positive": ["farò", "farai", "farà", "faremo", "farete", "faranno"],
                "negative": ["non farò", "non farai", "non farà", "non faremo", "non farete", "non faranno"],
                "question": ["farò io", "farai tu", "farà lui/lei", "faremo noi", "farete voi", "faranno loro"]
            },
            "conditional_present": {
                "positive": ["farei", "faresti", "farebbe", "faremmo", "fareste", "farebbero"],
                "negative": ["non farei", "non faresti", "non farebbe", "non faremmo", "non fareste", "non farebbero"],
                "question": ["farei io", "faresti tu", "farebbe lui/lei", "faremmo noi", "fareste voi", "farebbero loro"]
            },
            "subjunctive_present": {
                "positive": ["faccia", "faccia", "faccia", "facciamo", "facciate", "facciano"],
                "negative": ["non faccia", "non faccia", "non faccia", "non facciamo", "non facciate", "non facciano"],
                "question": ["che io faccia", "che tu faccia", "che lui/lei faccia", "che noi facciamo", "che voi facciate", "che loro facciano"]
            }
        }
    },
    {
        "verb": "andare",
        "group": "irregular",
        "classification": "irregular",
        "aspect": "action",
        "past_participle": "andato",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["vado", "vai", "va", "andiamo", "andate", "vanno"],
                "negative": ["non vado", "non vai", "non va", "non andiamo", "non andate", "non vanno"],
                "question": ["vado io", "vai tu", "va lui/lei", "andiamo noi", "andate voi", "vanno loro"]
            },
            "imperfect": {
                "positive": ["andavo", "andavi", "andava", "andavamo", "andavate", "andavano"],
                "negative": ["non andavo", "non andavi", "non andava", "non andavamo", "non andavate", "non andavano"],
                "question": ["andavo io", "andavi tu", "andava lui/lei", "andavamo noi", "andavate voi", "andavano loro"]
            },
            "future_simple": {
                "positive": ["andrò", "andrai", "andrà", "andremo", "andrete", "andranno"],
                "negative": ["non andrò", "non andrai", "non andrà", "non andremo", "non andrete", "non andranno"],
                "question": ["andrò io", "andrai tu", "andrà lui/lei", "andremo noi", "andrete voi", "andranno loro"]
            },
            "conditional_present": {
                "positive": ["andrei", "andresti", "andrebbe", "andremmo", "andreste", "andrebbero"],
                "negative": ["non andrei", "non andresti", "non andrebbe", "non andremmo", "non andreste", "non andrebbero"],
                "question": ["andrei io", "andresti tu", "andrebbe lui/lei", "andremmo noi", "andreste voi", "andrebbero loro"]
            },
            "subjunctive_present": {
                "positive": ["vada", "vada", "vada", "andiamo", "andiate", "vadano"],
                "negative": ["non vada", "non vada", "non vada", "non andiamo", "non andiate", "non vadano"],
                "question": ["che io vada", "che tu vada", "che lui/lei vada", "che noi andiamo", "che voi andiate", "che loro vadano"]
            }
        }
    },
    {
        "verb": "venire",
        "group": "irregular",
        "classification": "irregular",
        "aspect": "action",
        "past_participle": "venuto",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["vengo", "vieni", "viene", "veniamo", "venite", "vengono"],
                "negative": ["non vengo", "non vieni", "non viene", "non veniamo", "non venite", "non vengono"],
                "question": ["vengo io", "vieni tu", "viene lui/lei", "veniamo noi", "venite voi", "vengono loro"]
            },
            "imperfect": {
                "positive": ["venivo", "venivi", "veniva", "venivamo", "venivate", "venivano"],
                "negative": ["non venivo", "non venivi", "non veniva", "non venivamo", "non venivate", "non venivano"],
                "question": ["venivo io", "venivi tu", "veniva lui/lei", "venivamo noi", "venivate voi", "venivano loro"]
            },
            "future_simple": {
                "positive": ["verrò", "verrai", "verrà", "verremo", "verrete", "verranno"],
                "negative": ["non verrò", "non verrai", "non verrà", "non verremo", "non verrete", "non verranno"],
                "question": ["verrò io", "verrai tu", "verrà lui/lei", "verremo noi", "verrete voi", "verranno loro"]
            },
            "conditional_present": {
                "positive": ["verrei", "verresti", "verrebbe", "verremmo", "verreste", "verrebbero"],
                "negative": ["non verrei", "non verresti", "non verrebbe", "non verremmo", "non verreste", "non verrebbero"],
                "question": ["verrei io", "verresti tu", "verrebbe lui/lei", "verremmo noi", "verreste voi", "verrebbero loro"]
            },
            "subjunctive_present": {
                "positive": ["venga", "venga", "venga", "veniamo", "veniate", "vengano"],
                "negative": ["non venga", "non venga", "non venga", "non veniamo", "non veniate", "non vengano"],
                "question": ["che io venga", "che tu venga", "che lui/lei venga", "che noi veniamo", "che voi veniate", "che loro vengano"]
            }
        }
    },
    {
        "verb": "parlare",
        "group": "-are",
        "classification": "regular",
        "aspect": "action",
        "past_participle": "parlato",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["parlo", "parli", "parla", "parliamo", "parlate", "parlano"],
                "negative": ["non parlo", "non parli", "non parla", "non parliamo", "non parlate", "non parlano"],
                "question": ["parlo io", "parli tu", "parla lui/lei", "parliamo noi", "parlate voi", "parlano loro"]
            },
            "imperfect": {
                "positive": ["parlavo", "parlavi", "parlava", "parlavamo", "parlavate", "parlavano"],
                "negative": ["non parlavo", "non parlavi", "non parlava", "non parlavamo", "non parlavate", "non parlavano"],
                "question": ["parlavo io", "parlavi tu", "parlava lui/lei", "parlavamo noi", "parlavate voi", "parlavano loro"]
            },
            "future_simple": {
                "positive": ["parlerò", "parlerai", "parlerà", "parleremo", "parlerete", "parleranno"],
                "negative": ["non parlerò", "non parlerai", "non parlerà", "non parleremo", "non parlerete", "non parleranno"],
                "question": ["parlerò io", "parlerai tu", "parlerà lui/lei", "parleremo noi", "parlerete voi", "parleranno loro"]
            },
            "conditional_present": {
                "positive": ["parlerei", "parleresti", "parlerebbe", "parleremmo", "parlereste", "parlerebbero"],
                "negative": ["non parlerei", "non parleresti", "non parlerebbe", "non parleremmo", "non parlereste", "non parlerebbero"],
                "question": ["parlerei io", "parleresti tu", "parlerebbe lui/lei", "parleremmo noi", "parlereste voi", "parlerebbero loro"]
            },
            "subjunctive_present": {
                "positive": ["parli", "parli", "parli", "parliamo", "parliate", "parlino"],
                "negative": ["non parli", "non parli", "non parli", "non parliamo", "non parliate", "non parlino"],
                "question": ["che io parli", "che tu parli", "che lui/lei parli", "che noi parliamo", "che voi parliate", "che loro parlino"]
            }
        }
    },
    {
        "verb": "mangiare",
        "group": "-are",
        "classification": "regular",
        "aspect": "action",
        "past_participle": "mangiato",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["mangio", "mangi", "mangia", "mangiamo", "mangiate", "mangiano"],
                "negative": ["non mangio", "non mangi", "non mangia", "non mangiamo", "non mangiate", "non mangiano"],
                "question": ["mangio io", "mangi tu", "mangia lui/lei", "mangiamo noi", "mangiate voi", "mangiano loro"]
            },
            "imperfect": {
                "positive": ["mangiavo", "mangiavi", "mangiava", "mangiavamo", "mangiavate", "mangiavano"],
                "negative": ["non mangiavo", "non mangiavi", "non mangiava", "non mangiavamo", "non mangiavate", "non mangiavano"],
                "question": ["mangiavo io", "mangiavi tu", "mangiava lui/lei", "mangiavamo noi", "mangiavate voi", "mangiavano loro"]
            },
            "future_simple": {
                "positive": ["mangerò", "mangerai", "mangerà", "mangeremo", "mangerete", "mangeranno"],
                "negative": ["non mangerò", "non mangerai", "non mangerà", "non mangeremo", "non mangerete", "non mangeranno"],
                "question": ["mangerò io", "mangerai tu", "mangerà lui/lei", "mangeremo noi", "mangerete voi", "mangeranno loro"]
            },
            "conditional_present": {
                "positive": ["mangerei", "mangeresti", "mangerebbe", "mangeremmo", "mangereste", "mangerebbero"],
                "negative": ["non mangerei", "non mangeresti", "non mangerebbe", "non mangeremmo", "non mangereste", "non mangerebbero"],
                "question": ["mangerei io", "mangeresti tu", "mangerebbe lui/lei", "mangeremmo noi", "mangereste voi", "mangerebbero loro"]
            },
            "subjunctive_present": {
                "positive": ["mangi", "mangi", "mangi", "mangiamo", "mangiate", "mangino"],
                "negative": ["non mangi", "non mangi", "non mangi", "non mangiamo", "non mangiate", "non mangino"],
                "question": ["che io mangi", "che tu mangi", "che lui/lei mangi", "che noi mangiamo", "che voi mangiate", "che loro mangino"]
            }
        }
    },
    {
        "verb": "bere",
        "group": "irregular",
        "classification": "irregular",
        "aspect": "action",
        "past_participle": "bevuto",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["bevo", "bevi", "beve", "beviamo", "bevite", "bevono"],
                "negative": ["non bevo", "non bevi", "non beve", "non beviamo", "non bevite", "non bevono"],
                "question": ["bevo io", "bevi tu", "beve lui/lei", "beviamo noi", "bevite voi", "bevono loro"]
            },
            "imperfect": {
                "positive": ["bevevo", "bevevi", "beveva", "bevevamo", "bevevate", "bevevano"],
                "negative": ["non bevevo", "non bevevi", "non beveva", "non bevevamo", "non bevevate", "non bevevano"],
                "question": ["bevevo io", "bevevi tu", "beveva lui/lei", "bevevamo noi", "bevevate voi", "bevevano loro"]
            },
            "future_simple": {
                "positive": ["berrò", "berrai", "berrà", "berremo", "berrete", "berranno"],
                "negative": ["non berrò", "non berrai", "non berrà", "non berremo", "non berrete", "non berranno"],
                "question": ["berrò io", "berrai tu", "berrà lui/lei", "berremo noi", "berrete voi", "berranno loro"]
            },
            "conditional_present": {
                "positive": ["berrei", "berresti", "berrebbe", "berremmo", "berreste", "berrebbero"],
                "negative": ["non berrei", "non berresti", "non berrebbe", "non berremmo", "non berreste", "non berrebbero"],
                "question": ["berrei io", "berresti tu", "berrebbe lui/lei", "berremmo noi", "berreste voi", "berrebbero loro"]
            },
            "subjunctive_present": {
                "positive": ["beva", "beva", "beva", "beviamo", "beviate", "bevano"],
                "negative": ["non beva", "non beva", "non beva", "non beviamo", "non beviate", "non bevano"],
                "question": ["che io beva", "che tu beva", "che lui/lei beva", "che noi beviamo", "che voi beviate", "che loro bevano"]
            }
        }
    },
    {
        "verb": "lavorare",
        "group": "-are",
        "classification": "regular",
        "aspect": "action",
        "past_participle": "lavorato",
        "level": "starter",
        "pronouns": pronouns,
        "tenses": {
            "present_simple": {
                "positive": ["lavoro", "lavori", "lavora", "lavoriamo", "lavorate", "lavorano"],
                "negative": ["non lavoro", "non lavori", "non lavora", "non lavoriamo", "non lavorate", "non lavorano"],
                "question": ["lavoro io", "lavori tu", "lavora lui/lei", "lavoriamo noi", "lavorate voi", "lavorano loro"]
            },
            "imperfect": {
                "positive": ["lavoravo", "lavoravi", "lavorava", "lavoravamo", "lavoravate", "lavoravano"],
                "negative": ["non lavoravo", "non lavoravi", "non lavorava", "non lavoravamo", "non lavoravate", "non lavoravano"],
                "question": ["lavoravo io", "lavoravi tu", "lavorava lui/lei", "lavoravamo noi", "lavorate voi", "lavorano loro"]
            },
            "future_simple": {
                "positive": ["lavorerò", "lavorerai", "lavorerà", "lavoreremo", "lavorerete", "lavoreranno"],
                "negative": ["non lavorerò", "non lavorerai", "non lavorerà", "non lavoreremo", "non lavorerete", "non lavoreranno"],
                "question": ["lavorerò io", "lavorerai tu", "lavorerà lui/lei", "lavoreremo noi", "lavorerete voi", "lavoreranno loro"]
            },
            "conditional_present": {
                "positive": ["lavorerei", "lavoreresti", "lavorerebbe", "lavoreremmo", "lavorereste", "lavorerebbero"],
                "negative": ["non lavorerei", "non lavoreresti", "non lavorerebbe", "non lavoreremmo", "non lavorereste", "non lavorerebbero"],
                "question": ["lavorerei io", "lavoreresti tu", "lavorerebbe lui/lei", "lavoreremmo noi", "lavorereste voi", "lavorerebbero loro"]
            },
            "subjunctive_present": {
                "positive": ["lavori", "lavori", "lavori", "lavoriamo", "lavoriate", "lavorino"],
                "negative": ["non lavori", "non lavori", "non lavori", "non lavoriamo", "non lavoriate", "non lavorino"],
                "question": ["che io lavori", "che tu lavori", "che lui/lei lavori", "che noi lavoriamo", "che voi lavoriate", "che loro lavorino"]
            }
        }
    }
]
    const lang = "it";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
