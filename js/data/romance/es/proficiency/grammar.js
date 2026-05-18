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
                    "question": ["¿sería yo?", "¿serás tú?", "¿sería él/ella?", "¿seríamos nosotros?", "¿seríais vosotros?", "¿serían ellos/ellas?"]
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
            "verb": "vivir",
            "group": "ir",
            "classification": "regular",
            "aspect": "action",
            "auxiliary": "haber",
            "past_participle": "vivido",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["vivo", "vives", "vive", "vivimos", "vivís", "viven"],
                    "negative": ["no vivo", "no vives", "no vive", "no vivimos", "no vivís", "no viven"],
                    "question": ["¿vivo?", "¿vives?", "¿vive?", "¿vivimos?", "¿vivís?", "¿viven?"]
                },
                "past_simple": {
                    "positive": ["viví", "viviste", "vivió", "vivimos", "vivisteis", "vivieron"],
                    "negative": ["no viví", "no viviste", "no vivió", "no vivimos", "no vivisteis", "no vivieron"],
                    "question": ["¿viví?", "¿viviste?", "¿vivió?", "¿vivimos?", "¿vivisteis?", "¿vivieron?"]
                },
                "future_simple": {
                    "positive": ["viviré", "vivirás", "vivirá", "viviremos", "viviréis", "vivirán"],
                    "negative": ["no viviré", "no vivirás", "no vivirá", "no viviremos", "no viviréis", "no vivirán"],
                    "question": ["¿viviré?", "¿vivirás?", "¿vivirá?", "¿viviremos?", "¿viviréis?", "¿vivirán?"]
                }
            }
        },
        {
            "verb": "poder",
            "group": "er (stem-changing o->ue)",
            "classification": "irregular",
            "aspect": "modal",
            "auxiliary": "haber",
            "past_participle": "podido",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["puedo", "puedes", "puede", "podemos", "podéis", "pueden"],
                    "negative": ["no puedo", "no puedes", "no puede", "no podemos", "no podéis", "no pueden"],
                    "question": ["¿puedo?", "¿puedes?", "¿puede?", "¿podemos?", "¿podéis?", "¿pueden?"]
                },
                "past_simple": {
                    "positive": ["pude", "pudiste", "pudo", "pudimos", "pudisteis", "pudieron"],
                    "negative": ["no pude", "no pudiste", "no pudo", "no pudimos", "no pudisteis", "no pudieron"],
                    "question": ["¿pude?", "¿pudiste?", "¿pudo?", "¿pudimos?", "¿pudisteis?", "¿pudieron?"]
                },
                "future_simple": {
                    "positive": ["podré", "podrás", "podrá", "podremos", "podréis", "podrán"],
                    "negative": ["no podré", "no podrás", "no podrá", "no podremos", "no podréis", "no podrán"],
                    "question": ["¿podré?", "¿podrás?", "¿podρά?", "¿podremos?", "¿podréis?", "¿podrán?"]
                }
            }
        },
        {
            "verb": "querer",
            "group": "er (stem-changing e->ie)",
            "classification": "irregular",
            "aspect": "modal",
            "auxiliary": "haber",
            "past_participle": "querido",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["quiero", "quieres", "quiere", "queremos", "queréis", "quieren"],
                    "negative": ["no quiero", "no quieres", "no quiere", "no queremos", "no queréis", "no quieren"],
                    "question": ["¿quiero?", "¿quieres?", "¿quiere?", "¿queremos?", "¿queréis?", "¿quieren?"]
                },
                "past_simple": {
                    "positive": ["quise", "quisiste", "quiso", "quisimos", "quisisteis", "quisieron"],
                    "negative": ["no quise", "no quisiste", "no quiso", "no quisimos", "no quisisteis", "no quisieron"],
                    "question": ["¿quise?", "¿quisiste?", "¿quiso?", "¿quisimos?", "¿quisisteis?", "¿quisieron?"]
                },
                "future_simple": {
                    "positive": ["querré", "querrás", "querrá", "querremos", "querréis", "querrán"],
                    "negative": ["no querré", "no querrás", "no querrá", "no querremos", "no querréis", "no querrán"],
                    "question": ["¿querré?", "¿querrás?", "¿querrá?", "¿querremos?", "¿querréis?", "¿querrán?"]
                }
            }
        }
    ]
    const lang = "es";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
