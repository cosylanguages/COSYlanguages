(function() {
    const pronouns = ["yo", "tú", "él / ella", "nosotros", "vosotros", "ellos / ellas"];
    const data = [
        {
            "verb": "lavarse",
            "group": "pronominal (-ar)",
            "classification": "regular",
            "aspect": "action",
            "auxiliary": "haber",
            "past_participle": "lavado",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["me lavo", "te lavas", "se lava", "nos lavamos", "os laváis", "se lavan"],
                    "negative": ["no me lavo", "no te lavas", "no se lava", "no nos lavamos", "no os laváis", "no se lavan"],
                    "question": ["¿me lavo?", "¿te lavas?", "¿se lava?", "¿nos lavamos?", "¿os laváis?", "¿se lavan?"]
                },
                "past_simple": {
                    "positive": ["me lavé", "te lavaste", "se lavó", "nos lavamos", "os lavasteis", "se lavaron"],
                    "negative": ["no me lavé", "no te lavaste", "no se lavó", "no nos lavamos", "no os lavasteis", "no se lavaron"],
                    "question": ["¿me lavé?", "¿te lavaste?", "¿se lavó?", "¿nos lavamos?", "¿os lavasteis?", "¿se lavaron?"]
                }
            }
        },
        {
            "verb": "ser",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "stative",
            "auxiliary": "haber",
            "past_participle": "sido",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["soy", "eres", "es", "somos", "sois", "son"],
                    "negative": ["no soy", "no eres", "no es", "no somos", "no sois", "no son"],
                    "question": ["¿soy yo?", "¿eres tú?", "¿es él/ella?", "¿somos nosotros?", "¿sois vosotros?", "¿son ellos/ellas?"]
                },
                "past_simple": {
                    "positive": ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"],
                    "negative": ["no fui", "no fuiste", "no fue", "no fuimos", "no fuisteis", "no fueron"],
                    "question": ["¿fui yo?", "¿fuiste tú?", "¿fue él?", "¿fuimos nosotros?", "¿fuisteis vosotros?", "¿fueron ellos?"]
                },
                "imperfect": {
                    "positive": ["era", "eras", "era", "éramos", "erais", "eran"],
                    "negative": ["no era", "no eras", "no era", "no éramos", "no erais", "no eran"],
                    "question": ["¿era yo?", "¿eras tú?", "¿era él/ella?", "¿éramos nosotros?", "¿erais vosotros?", "¿eran ellos/ellas?"]
                },
                "future_simple": {
                    "positive": ["seré", "serás", "será", "seremos", "seréis", "serán"],
                    "negative": ["no seré", "no serás", "no será", "no seremos", "no seréis", "no serán"],
                    "question": ["¿seré yo?", "¿serás tú?", "¿será él/ella?", "¿seremos nosotros?", "¿seréis vosotros?", "¿serán ellos/ellas?"]
                },
                "conditional_present": {
                    "positive": ["sería", "serías", "sería", "seríamos", "seríais", "serían"],
                    "negative": ["no sería", "no serías", "no sería", "no seríamos", "no seríais", "no serían"],
                    "question": ["¿sería yo?", "¿serías tú?", "¿sería él/ella?", "¿seríamos nosotros?", "¿seríais vosotros?", "¿serían ellos/ellas?"]
                },
                "subjunctive_present": {
                    "positive": ["sea", "seas", "sea", "seamos", "seáis", "sean"],
                    "negative": ["no sea", "no seas", "no sea", "no seamos", "no seáis", "no sean"],
                    "question": ["que yo sea", "que tú seas", "que él/ella sea", "que nosotros seamos", "que vosotros seáis", "que ellos sean"]
                }
            }
        },
        {
            "verb": "estar",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "stative",
            "auxiliary": "haber",
            "past_participle": "estado",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["estoy", "estás", "está", "estamos", "estáis", "están"],
                    "negative": ["no estoy", "no estás", "no está", "no estamos", "no estáis", "no están"],
                    "question": ["¿estoy yo?", "¿estás tú?", "¿está él/ella?", "¿estamos nosotros?", "¿estáis vosotros?", "¿están ellos/ellas?"]
                },
                "past_simple": {
                    "positive": ["estuve", "estuviste", "estuvo", "estuvimos", "estuvisteis", "estuvieron"],
                    "negative": ["no estuve", "no estuviste", "no estuvo", "no estuvimos", "no estuvisteis", "no estuvieron"],
                    "question": ["¿estuve yo?", "¿estuviste tú?", "¿estuvo él?", "¿estuvimos nosotros?", "¿estuvisteis vosotros?", "¿estuvieron ellos?"]
                },
                "imperfect": {
                    "positive": ["estaba", "estabas", "estaba", "estábamos", "estabais", "estaban"],
                    "negative": ["no estaba", "no estabas", "no estaba", "no estábamos", "no estabais", "no estaban"],
                    "question": ["¿estaba yo?", "¿estabas tú?", "¿estaba él/ella?", "¿estábamos nosotros?", "¿estabais vosotros?", "¿estaban ellos/ellas?"]
                },
                "future_simple": {
                    "positive": ["estaré", "estarás", "estará", "estaremos", "estaréis", "estarán"],
                    "negative": ["no estaré", "no estarás", "no estará", "no estaremos", "no estaréis", "no estarán"],
                    "question": ["¿estaré yo?", "¿estarás tú?", "¿estará él/ella?", "¿estaremos nosotros?", "¿estaréis vosotros?", "¿estarán ellos/ellas?"]
                },
                "conditional_present": {
                    "positive": ["estaría", "estarías", "estaría", "estaríamos", "estaríais", "estarían"],
                    "negative": ["no estaría", "no estarías", "no estaría", "no estaríamos", "no estaríais", "no estarían"],
                    "question": ["¿estaría yo?", "¿estarías tú?", "¿estaría él/ella?", "¿estaríamos nosotros?", "¿estaríais vosotros?", "¿estarían ellos/ellas?"]
                },
                "subjunctive_present": {
                    "positive": ["esté", "estés", "esté", "estemos", "estéis", "estén"],
                    "negative": ["no esté", "no estés", "no esté", "no estemos", "no estéis", "no estén"],
                    "question": ["que yo esté", "que tú estés", "que él/ella esté", "que nosotros estemos", "que vosotros estéis", "que ellos estén"]
                }
            }
        },
        {
            "verb": "tener",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "stative",
            "auxiliary": "haber",
            "past_participle": "tenido",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"],
                    "negative": ["no tengo", "no tienes", "no tiene", "no tenemos", "no tenéis", "no tienen"],
                    "question": ["¿tengo yo?", "¿tienes tú?", "¿tiene él/ella?", "¿tenemos nosotros?", "¿tenéis vosotros?", "¿tienen ellos/ellas?"]
                },
                "past_simple": {
                    "positive": ["tuve", "tuviste", "tuvo", "tuvimos", "tuvisteis", "tuvieron"],
                    "negative": ["no tuve", "no tuviste", "no tuvo", "no tuvimos", "no tuvisteis", "no tuvieron"],
                    "question": ["¿tuve yo?", "¿tuviste tú?", "¿tuvo él?", "¿tuvimos nosotros?", "¿tuvisteis vosotros?", "¿tuvieron ellos?"]
                },
                "imperfect": {
                    "positive": ["tenía", "tenías", "tenía", "teníamos", "teníais", "tenían"],
                    "negative": ["no tenía", "no tenías", "no tenía", "no teníamos", "no teníais", "no tenían"],
                    "question": ["¿tenía yo?", "¿tenías tú?", "¿tenía él/ella?", "¿teníamos nosotros?", "¿teníais vosotros?", "¿tenían ellos/ellas?"]
                },
                "future_simple": {
                    "positive": ["tendré", "tendrás", "tendrá", "tendremos", "tendréis", "tendrán"],
                    "negative": ["no tendré", "no tendrás", "no tendrá", "no tendremos", "no tendréis", "no tendrán"],
                    "question": ["¿tendré yo?", "¿tendrás tú?", "¿tendrá él/ella?", "¿tendremos nosotros?", "¿tendréis vosotros?", "¿tendrán ellos/ellas?"]
                },
                "conditional_present": {
                    "positive": ["tendría", "tendrías", "tendría", "tendríamos", "tendríais", "tendrían"],
                    "negative": ["no tendría", "no tendrías", "no tendría", "no tendríamos", "no tendríais", "no tendrían"],
                    "question": ["¿tendría yo?", "¿tendrías tú?", "¿tendría él/ella?", "¿tendríamos nosotros?", "¿tendríais vosotros?", "¿tendrían ellos/ellas?"]
                },
                "subjunctive_present": {
                    "positive": ["tenga", "tengas", "tenga", "tengamos", "tengáis", "tengan"],
                    "negative": ["no tenga", "no tengas", "no tenga", "no tengamos", "no tengáis", "no tengan"],
                    "question": ["que yo tenga", "que tú tengas", "que él/ella tenga", "que nosotros tengamos", "que vosotros tengáis", "que ellos tengan"]
                }
            }
        },
        {
            "verb": "hacer",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "action",
            "auxiliary": "haber",
            "past_participle": "hecho",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["hago", "haces", "hace", "hacemos", "hacéis", "hacen"],
                    "negative": ["no hago", "no haces", "no hace", "no hacemos", "no hacéis", "no hacen"],
                    "question": ["¿hago yo?", "¿haces tú?", "¿hace él/ella?", "¿hacemos nosotros?", "¿hacéis vosotros?", "¿hacen ellos/ellas?"]
                },
                "past_simple": {
                    "positive": ["hice", "hiciste", "hizo", "hicimos", "hicisteis", "hicieron"],
                    "negative": ["no hice", "no hiciste", "no hizo", "no hicimos", "no hicisteis", "no hicieron"],
                    "question": ["¿hice yo?", "¿hiciste tú?", "¿hizo él?", "¿hicimos nosotros?", "¿hicisteis vosotros?", "¿hicieron ellos?"]
                },
                "imperfect": {
                    "positive": ["hacía", "hacías", "hacía", "hacíamos", "hacíais", "hacían"],
                    "negative": ["no hacía", "no hacías", "no hacía", "no hacíamos", "no hacíais", "no hacían"],
                    "question": ["¿hacía yo?", "¿hacías tú?", "¿hacía él/ella?", "¿hacíamos nosotros?", "¿hacíais vosotros?", "¿hacían ellos/ellas?"]
                },
                "future_simple": {
                    "positive": ["haré", "harás", "hará", "haremos", "haréis", "harán"],
                    "negative": ["no haré", "no harás", "no hará", "no haremos", "no haréis", "no harán"],
                    "question": ["¿haré yo?", "¿harás tú?", "¿hará él/ella?", "¿haremos nosotros?", "¿haréis vosotros?", "¿harán ellos/ellas?"]
                },
                "conditional_present": {
                    "positive": ["haría", "harías", "haría", "haríamos", "haríais", "harían"],
                    "negative": ["no haría", "no harías", "no haría", "no haríamos", "no haríais", "no harán"],
                    "question": ["¿haría yo?", "¿harías tú?", "¿haría él/ella?", "¿haríamos nosotros?", "¿haríais vosotros?", "¿harían ellos/ellas?"]
                },
                "subjunctive_present": {
                    "positive": ["haga", "hagas", "haga", "hagamos", "hagáis", "hagan"],
                    "negative": ["no haga", "no hagas", "no haga", "no hagamos", "no hagáis", "no hagan"],
                    "question": ["que yo haga", "que tú hagas", "que él/ella haga", "que nosotros hagamos", "que vosotros hagáis", "que ellos hagan"]
                }
            }
        },
        {
            "verb": "ir",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "action",
            "auxiliary": "haber",
            "past_participle": "ido",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["voy", "vas", "va", "vamos", "vais", "van"],
                    "negative": ["no voy", "no vas", "no va", "no vamos", "no vais", "no van"],
                    "question": ["¿voy yo?", "¿vas tú?", "¿va él/ella?", "¿vamos nosotros?", "¿vais vosotros?", "¿van ellos/ellas?"]
                },
                "past_simple": {
                    "positive": ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"],
                    "negative": ["no fui", "no fuiste", "no fue", "no fuimos", "no fuisteis", "no fueron"],
                    "question": ["¿fui yo?", "¿fuiste tú?", "¿fue él?", "¿fuimos nosotros?", "¿fuisteis vosotros?", "¿fueron ellos?"]
                },
                "imperfect": {
                    "positive": ["iba", "ibas", "iba", "íbamos", "ibais", "iban"],
                    "negative": ["no iba", "no ibas", "no iba", "no íbamos", "no ibais", "no iban"],
                    "question": ["¿iba yo?", "¿ibas tú?", "¿iba él/ella?", "¿íbamos nosotros?", "¿ibais vosotros?", "¿iban ellos/ellas?"]
                },
                "future_simple": {
                    "positive": ["iré", "irás", "irá", "iremos", "iréis", "irán"],
                    "negative": ["no iré", "no irás", "no irá", "no iremos", "no iréis", "no irán"],
                    "question": ["¿iré yo?", "¿irás tú?", "¿irá él/ella?", "¿iremos nosotros?", "¿iréis vosotros?", "¿irán ellos/ellas?"]
                },
                "conditional_present": {
                    "positive": ["iría", "irías", "iría", "iríamos", "iríais", "irían"],
                    "negative": ["no iría", "no irías", "no iría", "no iríamos", "no iríais", "no irían"],
                    "question": ["¿iría yo?", "¿irías tú?", "¿iría él/ella?", "¿iríamos nosotros?", "¿iríais vosotros?", "¿irían ellos/ellas?"]
                },
                "subjunctive_present": {
                    "positive": ["vaya", "vayas", "vaya", "vayamos", "vayáis", "vayan"],
                    "negative": ["no vaya", "no vayas", "no vaya", "no vayamos", "no vayáis", "no vayan"],
                    "question": ["que yo vaya", "que tú vayas", "que él/ella vaya", "que nosotros vayamos", "que vosotros vayáis", "que ellos vayan"]
                }
            }
        },
        {
            "verb": "venir",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "action",
            "auxiliary": "haber",
            "past_participle": "venido",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["vengo", "vienes", "viene", "venimos", "venís", "vienen"],
                    "negative": ["no vengo", "no vienes", "no viene", "no venimos", "no venís", "no vienen"],
                    "question": ["¿vengo yo?", "¿vienes tú?", "¿viene él/ella?", "¿venimos nosotros?", "¿venís vosotros?", "¿vienen ellos/ellas?"]
                },
                "past_simple": {
                    "positive": ["vine", "viniste", "vino", "vinimos", "vinisteis", "vinieron"],
                    "negative": ["no vine", "no viniste", "no vino", "no vinimos", "no vinisteis", "no vinieron"],
                    "question": ["¿vine yo?", "¿viniste tú?", "¿vino él?", "¿vinimos nosotros?", "¿vinisteis vosotros?", "¿vinieron ellos?"]
                },
                "imperfect": {
                    "positive": ["venía", "venías", "venía", "veníamos", "veníais", "venían"],
                    "negative": ["no venía", "no venías", "no venía", "no veníamos", "no veníais", "no venían"],
                    "question": ["¿venía yo?", "¿venías tú?", "¿venía él/ella?", "¿veníamos nosotros?", "¿veníais vosotros?", "¿venían ellos/ellas?"]
                },
                "future_simple": {
                    "positive": ["vendré", "vendrás", "vendrá", "vendremos", "vendréis", "vendrán"],
                    "negative": ["no vendré", "no vendrás", "no vendrá", "no vendremos", "no vendréis", "no vendrán"],
                    "question": ["¿vendré yo?", "¿vendrás tú?", "¿vendrá él/ella?", "¿vendremos nosotros?", "¿vendréis vosotros?", "¿vendrán ellos/ellas?"]
                },
                "conditional_present": {
                    "positive": ["vendría", "vendrías", "vendría", "vendríamos", "vendríais", "vendrían"],
                    "negative": ["no vendría", "no vendrías", "no vendría", "no vendríamos", "no vendríais", "no vendrían"],
                    "question": ["¿vendría yo?", "¿vendrías tú?", "¿vendría él/ella?", "¿vendríamos nosotros?", "¿vendríais vosotros?", "¿vendrían ellos/ellas?"]
                },
                "subjunctive_present": {
                    "positive": ["venga", "vengas", "venga", "vengamos", "vengáis", "vengan"],
                    "negative": ["no venga", "no vengas", "no viga", "no vengamos", "no vengáis", "no vengan"],
                    "question": ["que yo venga", "que tú vengas", "que él/ella venga", "que nosotros vengamos", "que vosotros vengáis", "que ellos vengan"]
                }
            }
        },
        {
            "verb": "hablar",
            "group": "ar",
            "classification": "regular",
            "aspect": "action",
            "auxiliary": "haber",
            "past_participle": "hablado",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["hablo", "hablas", "habla", "hablamos", "habláis", "hablan"],
                    "negative": ["no hablo", "no hablas", "no habla", "no hablamos", "no habláis", "no hablan"],
                    "question": ["¿hablo yo?", "¿hablas tú?", "¿habla él/ella?", "¿hablamos nosotros?", "¿habláis vosotros?", "¿hablan ellos/ellas?"]
                },
                "past_simple": {
                    "positive": ["hablé", "hablaste", "habló", "hablamos", "hablasteis", "hablaron"],
                    "negative": ["no hablé", "no hablaste", "no habló", "no hablamos", "no hablasteis", "no hablaron"],
                    "question": ["¿hablé?", "¿hablaste?", "¿habló?", "¿hablamos?", "¿hablasteis?", "¿hablaron?"]
                },
                "imperfect": {
                    "positive": ["hablaba", "hablabas", "hablaba", "hablábamos", "hablabais", "hablaban"],
                    "negative": ["no hablaba", "no hablabas", "no hablaba", "no hablábamos", "no hablabais", "no hablaban"],
                    "question": ["¿hablaba yo?", "¿hablabas tú?", "¿hablaba él/ella?", "¿hablábamos nosotros?", "¿hablabais vosotros?", "¿hablaban ellos/ellas?"]
                },
                "future_simple": {
                    "positive": ["hablaré", "hablarás", "hablará", "hablaremos", "hablaréis", "hablarán"],
                    "negative": ["no hablaré", "no hablarás", "no hablará", "no hablaremos", "no hablaréis", "no hablarán"],
                    "question": ["¿hablaré yo?", "¿hablarás tú?", "¿hablará él/ella?", "¿hablaremos nosotros?", "¿hablaréis vosotros?", "¿hablarán ellos/ellas?"]
                },
                "conditional_present": {
                    "positive": ["hablaría", "hablarías", "hablaría", "hablaríamos", "hablaríais", "hablarían"],
                    "negative": ["no hablaría", "no hablarías", "no hablaría", "no hablaríamos", "no hablaríais", "no hablarían"],
                    "question": ["¿hablaría yo?", "¿hablarías tú?", "¿hablaría él/ella?", "¿hablaríamos nosotros?", "¿hablaríais vosotros?", "¿hablarían ellos/ellas?"]
                },
                "subjunctive_present": {
                    "positive": ["hable", "hables", "hable", "hablemos", "habléis", "hablen"],
                    "negative": ["no hable", "no hables", "no hable", "no hablemos", "no habléis", "no hablen"],
                    "question": ["que yo hable", "que tú hables", "que él/ella hable", "que nosotros hablemos", "que vosotros habléis", "que ellos hablen"]
                }
            }
        },
        {
            "verb": "comer",
            "group": "er",
            "classification": "regular",
            "aspect": "action",
            "auxiliary": "haber",
            "past_participle": "comido",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["como", "comes", "come", "comemos", "coméis", "comen"],
                    "negative": ["no como", "no comes", "no come", "no comemos", "no coméis", "no comen"],
                    "question": ["¿como yo?", "¿comes tú?", "¿come él/ella?", "¿comemos nosotros?", "¿coméis vosotros?", "¿comen ellos/ellas?"]
                },
                "past_simple": {
                    "positive": ["comí", "comiste", "comió", "comimos", "comisteis", "comieron"],
                    "negative": ["no comí", "no comiste", "no comió", "no comimos", "no comisteis", "no comieron"],
                    "question": ["¿comí?", "¿comiste?", "¿comió?", "¿comimos?", "¿comisteis?", "¿comieron?"]
                },
                "imperfect": {
                    "positive": ["comía", "comías", "comía", "comíamos", "comíais", "comían"],
                    "negative": ["no comía", "no comías", "no comía", "no comíamos", "no comíais", "no comían"],
                    "question": ["¿comía yo?", "¿comías tú?", "¿comía él/ella?", "¿comíamos nosotros?", "¿comíais vosotros?", "¿comían ellos/ellas?"]
                },
                "future_simple": {
                    "positive": ["comeré", "comerás", "comerá", "comeremos", "comeréis", "comerán"],
                    "negative": ["no comeré", "no comerás", "no comerá", "no comeremos", "no comeréis", "no comerán"],
                    "question": ["¿comeré yo?", "¿comerás tú?", "¿comerá él/ella?", "¿comeremos nosotros?", "¿comeréis vosotros?", "¿comerán ellos/ellas?"]
                },
                "conditional_present": {
                    "positive": ["comería", "comerías", "comería", "comeríamos", "comeríais", "comerían"],
                    "negative": ["no comería", "no comerías", "no comería", "no comeríamos", "no comeríais", "no comerían"],
                    "question": ["¿comería yo?", "¿comerías tú?", "¿comería él/ella?", "¿comeríamos nosotros?", "¿comeríais vosotros?", "¿comerían ellos/ellas?"]
                },
                "subjunctive_present": {
                    "positive": ["coma", "comas", "coma", "comamos", "comáis", "coman"],
                    "negative": ["no coma", "no comas", "no coma", "no comamos", "no comáis", "no coman"],
                    "question": ["que yo coma", "que tú comas", "que él/ella coma", "que nosotros comamos", "que vosotros comáis", "que ellos coman"]
                }
            }
        },
        {
            "verb": "beber",
            "group": "er",
            "classification": "regular",
            "aspect": "action",
            "auxiliary": "haber",
            "past_participle": "bebido",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["bebo", "bebes", "bebe", "bebemos", "bebéis", "beben"],
                    "negative": ["no bebo", "no bebes", "no bebe", "no bebemos", "no bebéis", "no beben"],
                    "question": ["¿bebo yo?", "¿bebes tú?", "¿bebe él/ella?", "¿bebemos nosotros?", "¿bebéis vosotros?", "¿beben ellos/ellas?"]
                },
                "past_simple": {
                    "positive": ["bebí", "bebiste", "bebió", "bebimos", "bebisteis", "bebieron"],
                    "negative": ["no bebí", "no bebiste", "no bebió", "no bebimos", "no bebisteis", "no bebieron"],
                    "question": ["¿bebí?", "¿bebiste?", "¿bebió?", "¿bebimos?", "¿bebisteis?", "¿bebieron?"]
                },
                "imperfect": {
                    "positive": ["bebía", "bebías", "bebía", "bebíamos", "bebíais", "bebían"],
                    "negative": ["no bebía", "no bebías", "no bebía", "no bebíamos", "no bebíais", "no bebían"],
                    "question": ["¿bebía yo?", "¿bebías tú?", "¿bebía él/ella?", "¿bebíamos nosotros?", "¿bebíais vosotros?", "¿bebían ellos/ellas?"]
                },
                "future_simple": {
                    "positive": ["beberé", "beberás", "beberá", "beberemos", "beberéis", "beberán"],
                    "negative": ["no beberé", "no beberás", "no beberá", "no beberemos", "no beberéis", "no beberán"],
                    "question": ["¿beberé yo?", "¿beberás tú?", "¿beberá él/ella?", "¿beberemos nosotros?", "¿beberéis vosotros?", "¿beberán ellos/ellas?"]
                },
                "conditional_present": {
                    "positive": ["bebería", "beberías", "bebería", "beberíamos", "beberíais", "beberían"],
                    "negative": ["no bebería", "no beberías", "no bebería", "no beberíamos", "no beberíais", "no beberían"],
                    "question": ["¿bebería yo?", "¿beberías tú?", "¿beberá él/ella?", "¿beberíamos nosotros?", "¿beberíais vosotros?", "¿beberán ellos/ellas?"]
                },
                "subjunctive_present": {
                    "positive": ["beba", "bebas", "beba", "bebamos", "bebáis", "beban"],
                    "negative": ["no beba", "no bebas", "no beba", "no bebamos", "no bebáis", "no beban"],
                    "question": ["que yo beba", "que tú bebas", "que él/ella beba", "que nosotros bebamos", "que vosotros bebáis", "que ellos beban"]
                }
            }
        },
        {
            "verb": "trabajar",
            "group": "ar",
            "classification": "regular",
            "aspect": "action",
            "auxiliary": "haber",
            "past_participle": "trabajado",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["trabajo", "trabajas", "trabaja", "trabajamos", "trabajáis", "trabajan"],
                    "negative": ["no trabajo", "no trabajas", "no trabaja", "no trabajamos", "no trabajáis", "no trabajan"],
                    "question": ["¿trabajo yo?", "¿trabajas tú?", "¿trabaja él/ella?", "¿trabajamos nosotros?", "¿trabajáis vosotros?", "¿trabajan ellos/ellas?"]
                },
                "past_simple": {
                    "positive": ["trabajé", "trabajaste", "trabajó", "trabajamos", "trabajasteis", "trabajaron"],
                    "negative": ["no trabajé", "no trabajaste", "no trabajó", "no trabajamos", "no trabajasteis", "no trabajaron"],
                    "question": ["¿trabajé?", "¿trabajaste?", "¿trabajó?", "¿trabajamos?", "¿trabajasteis?", "¿trabajaron?"]
                },
                "imperfect": {
                    "positive": ["trabajaba", "trabajabas", "trabajaba", "trabajábamos", "trabajabais", "trabajaban"],
                    "negative": ["no trabajaba", "no trabajabas", "no trabajaba", "no trabajábamos", "no trabajabais", "no trabajaban"],
                    "question": ["¿trabajaba yo?", "¿trabajabas tú?", "¿trabajaba él/ella?", "¿trabajábamos nosotros?", "¿trabajabais vosotros?", "¿trabajaban ellos/ellas?"]
                },
                "future_simple": {
                    "positive": ["trabajaré", "trabajarás", "trabajará", "trabajaremos", "trabajaréis", "trabajarán"],
                    "negative": ["no trabajaré", "no trabajarás", "no trabajará", "no trabajaremos", "no trabajaréis", "no trabajarán"],
                    "question": ["¿trabajaré yo?", "¿trabajarás tú?", "¿trabajará él/ella?", "¿trabajaremos nosotros?", "¿trabajaréis vosotros?", "¿trabajarán ellos/ellas?"]
                },
                "conditional_present": {
                    "positive": ["trabajaría", "trabajarías", "trabajaría", "trabajaríamos", "trabajaríais", "trabajarían"],
                    "negative": ["no trabajaría", "no trabajarías", "no trabajaría", "no trabajaríamos", "no trabajaríais", "no trabajaría"],
                    "question": ["¿trabajaría yo?", "¿trabajarías tú?", "¿trabajaría él/ella?", "¿trabajaríamos nosotros?", "¿trabajaríais vosotros?", "¿trabajarían ellos/ellas?"]
                },
                "subjunctive_present": {
                    "positive": ["trabaje", "trabajes", "trabaje", "trabajemos", "trabajéis", "trabajen"],
                    "negative": ["no trabaje", "no trabajes", "no trabaje", "no trabajemos", "no trabajéis", "no trabajen"],
                    "question": ["que yo trabaje", "que tú trabajes", "que él/ella trabaje", "que nosotros trabajemos", "que vosotros trabajéis", "que ellos trabajen"]
                }
            }
        }
    ]
    const lang = "es";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
