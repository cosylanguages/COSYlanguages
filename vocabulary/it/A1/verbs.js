// TODO: verify level classification
(function() {
const data = [
    {
        "word": "essere",
        "level": "starter",
        "theme": "name_greeting",
        "emoji": "👤",
        "subtext": "essere pronto / essere stanco / essere a casa",
        "form": "verb",
        "transcription": "ˈɛssere",
        "definitions": [
            {
                "text": "Esistere; avere una qualità o uno stato.",
                "examples": [
                    "Sono stanco.",
                    "Lei è un medico.",
                    "Siamo in ritardo."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "stato",
        "group": "ere",
        "auxiliary": "essere",
        "tenses": {
            "present_simple": {
                "positive": [
                    "sono",
                    "sei",
                    "è",
                    "siamo",
                    "siete",
                    "sono"
                ]
            }
        },
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "esse",
            "origin_meaning": "to be"
        },
        "id": "it_starter_verbs_001",
        "lang": "it"
    },
    {
        "word": "avere",
        "level": "starter",
        "theme": "work",
        "emoji": "👜",
        "subtext": "avere un lavoro / avere un problema",
        "synonyms": [
            "pranzare"
        ],
        "form": "verb",
        "transcription": "aˈvere",
        "definitions": [
            {
                "text": "Possedere qualcosa; provare qualcosa.",
                "examples": [
                    "Ho un lavoro.",
                    "Lui ha una macchina.",
                    "Lei ha mal di testa."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "avuto",
        "group": "ere",
        "auxiliary": "avere",
        "tenses": {
            "present_simple": {
                "positive": [
                    "ho",
                    "hai",
                    "ha",
                    "abbiamo",
                    "avete",
                    "hanno"
                ]
            }
        },
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "habere",
            "origin_meaning": "to have"
        },
        "id": "it_starter_verbs_002",
        "lang": "it"
    },
    {
        "word": "sentire",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "🌡️",
        "subtext": "",
        "synonyms": [
            "sentirsi stanco",
            "sentirsi meglio",
            "sentirsi bene"
        ],
        "form": "verb",
        "transcription": "senˈtire",
        "definitions": [
            {
                "text": "Provare un emozione o una sensazione fisica.",
                "examples": [
                    "Mi sento stanco.",
                    "Lei si sente stressata.",
                    "Lui si sente meglio."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v3": "sentito",
        "group": "ire",
        "auxiliary": "avere",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "sentire",
            "origin_meaning": "to feel, perceive"
        },
        "id": "it_starter_verbs_003",
        "lang": "it"
    },
    {
        "word": "dare",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🎁",
        "subtext": "dare consigli / dare soldi / dare un regalo",
        "form": "verb",
        "transcription": "ˈdare",
        "definitions": [
            {
                "text": "Consegnare o trasferire qualcosa a qualcuno.",
                "examples": [
                    "Lui mi dà un sacco di lavoro.",
                    "Lei dà consigli."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "dato",
        "group": "are",
        "auxiliary": "avere",
        "tenses": {
            "present_simple": {
                "positive": [
                    "do",
                    "dai",
                    "dà",
                    "diamo",
                    "date",
                    "danno"
                ]
            }
        },
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "dare"
        },
        "id": "it_starter_verbs_004",
        "lang": "it",
        "antonyms": [
            "prendere"
        ]
    },
    {
        "word": "prendere",
        "level": "starter",
        "theme": "travel",
        "emoji": "👜",
        "subtext": "prendere l autobus / prendere una medicina",
        "synonyms": [
            "fare una pausa"
        ],
        "form": "verb",
        "transcription": "ˈprɛndere",
        "definitions": [
            {
                "text": "Tenere e spostare qualcosa; usare o consumare.",
                "examples": [
                    "Prendo l autobus per andare al lavoro.",
                    "Lei prende le medicine."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "preso",
        "group": "ere",
        "auxiliary": "avere",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "prehendere"
        },
        "id": "it_starter_verbs_005",
        "lang": "it",
        "antonyms": [
            "dare"
        ]
    },
    {
        "word": "ottenere",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📥",
        "subtext": "ottenere un lavoro",
        "synonyms": [
            "stancarsi",
            "migliorare"
        ],
        "form": "verb",
        "transcription": "otteˈnere",
        "definitions": [
            {
                "text": "Ricevere, ottenere o diventare.",
                "examples": [
                    "Ottengo un buon stipendio.",
                    "Lui si stanca velocemente.",
                    "Lei ottiene una promozione."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "ottenuto",
        "group": "ere",
        "auxiliary": "avere",
        "id": "it_starter_verbs_006",
        "lang": "it"
    },
    {
        "word": "mettere",
        "level": "starter",
        "theme": "furniture_objects",
        "emoji": "📥",
        "subtext": "mettere / mettere giù il telefono",
        "synonyms": [
            "riporre"
        ],
        "form": "verb",
        "transcription": "ˈmettere",
        "definitions": [
            {
                "text": "Mettere qualcosa in una posizione.",
                "examples": [
                    "Metti la borsa qui.",
                    "Lei mette i soldi in banca."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "messo",
        "group": "ere",
        "auxiliary": "avere",
        "id": "it_starter_verbs_007",
        "lang": "it"
    },
    {
        "word": "fare",
        "level": "starter",
        "theme": "work",
        "emoji": "🏗️",
        "subtext": "fare il caffè / fare un errore",
        "synonyms": [
            "prendere una decisione"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Creare o produrre qualcosa; causare.",
                "examples": [
                    "Faccio il caffè al mattino.",
                    "Lei prende decisioni velocemente."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "fatto",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈfare",
        "tenses": {
            "present_simple": {
                "positive": [
                    "faccio",
                    "fai",
                    "fa",
                    "facciamo",
                    "fate",
                    "fanno"
                ]
            }
        },
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "facere",
            "origin_meaning": "to do"
        },
        "id": "it_starter_verbs_008",
        "lang": "it"
    },
    {
        "word": "fare",
        "level": "starter",
        "theme": "work",
        "emoji": "🛠️",
        "subtext": "fare il lavoro / fare la spesa / fare esercizio",
        "form": "verb",
        "definitions": [
            {
                "text": "Compiere un azione o un attività.",
                "examples": [
                    "Faccio il mio lavoro ogni giorno.",
                    "Lei fa la spesa."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "fatto",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈfare",
        "tenses": {
            "present_simple": {
                "positive": [
                    "faccio",
                    "fai",
                    "fa",
                    "facciamo",
                    "fate",
                    "fanno"
                ]
            }
        },
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "facere"
        },
        "id": "it_starter_verbs_009",
        "lang": "it"
    },
    {
        "word": "usare",
        "level": "starter",
        "theme": "technology",
        "emoji": "🛠️",
        "subtext": "usare un telefono / usare i mezzi pubblici / usare un computer",
        "form": "verb",
        "definitions": [
            {
                "text": "Impiegare qualcosa per uno scopo.",
                "examples": [
                    "Uso il mio telefono per tutto.",
                    "Lei usa i mezzi pubblici."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "usato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈusare",
        "v4": "usando",
        "id": "it_starter_verbs_010",
        "lang": "it"
    },
    {
        "word": "aprire",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📖",
        "subtext": "aprire una porta / aprire un conto / aprire un negozio",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare in modo che qualcosa non sia chiuso; o iniziare.",
                "examples": [
                    "Lui apre l ufficio alle otto.",
                    "Lei apre un conto bancario."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "aperto",
        "group": "ire",
        "auxiliary": "avere",
        "transcription": "ˈaprire",
        "v4": "aprendo",
        "id": "it_starter_verbs_011",
        "lang": "it",
        "antonyms": [
            "chiudere"
        ]
    },
    {
        "word": "chiudere",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔒",
        "subtext": "chiudere una porta / chiudere alle sei / chiudere un conto",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare in modo che qualcosa non sia aperto; o finire.",
                "examples": [
                    "L ufficio chiude alle sei.",
                    "Lei chiude il portatile."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "chiuso",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈchiudere",
        "v4": "chiudendo",
        "id": "it_starter_verbs_012",
        "lang": "it",
        "antonyms": [
            "aprire"
        ]
    },
    {
        "word": "iniziare",
        "level": "starter",
        "theme": "work",
        "emoji": "▶️",
        "subtext": "iniziare il lavoro / iniziare una riunione / iniziare un nuovo lavoro, iniziare a",
        "form": "verb",
        "transcription": "initˈtsjare",
        "definitions": [
            {
                "text": "Iniziare a fare qualcosa.",
                "examples": [
                    "Inizio a lavorare alle otto e mezza.",
                    "Lei inizia un nuovo lavoro."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "iniziato",
        "group": "are",
        "auxiliary": "avere",
        "v4": "iniziando",
        "id": "it_starter_verbs_013",
        "lang": "it",
        "antonyms": [
            "finire"
        ]
    },
    {
        "word": "finire",
        "level": "starter",
        "theme": "work",
        "emoji": "🏁",
        "subtext": "finire il lavoro / finire un progetto / finire presto, finire di",
        "form": "verb",
        "transcription": "fiˈnire",
        "definitions": [
            {
                "text": "Completare qualcosa; giungere al termine.",
                "examples": [
                    "Lui finisce il lavoro alle cinque.",
                    "Lei finisce il rapporto."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "finito",
        "group": "ire_isco",
        "auxiliary": "avere",
        "v4": "finendo",
        "id": "it_starter_verbs_014",
        "lang": "it",
        "antonyms": [
            "iniziare"
        ]
    },
    {
        "word": "aiutare",
        "level": "starter",
        "theme": "work",
        "emoji": "🤝",
        "subtext": "aiutare qualcuno / aiutare con",
        "synonyms": [
            "chiedere aiuto"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Aiutare qualcuno.",
                "examples": [
                    "Aiuta i suoi colleghi.",
                    "Puoi aiutarmi?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "aiutato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈaiutare",
        "v4": "aiutando",
        "id": "it_starter_verbs_015",
        "lang": "it"
    },
    {
        "word": "provare",
        "level": "starter",
        "theme": "school",
        "emoji": "🎯",
        "subtext": "provare a fare / provare sodo / provare qualcosa",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare un sforzo; tentare qualcosa.",
                "examples": [
                    "Provo sempre a fare del mio meglio al lavoro.",
                    "Prova il caffè qui."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "provato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈprovare",
        "v4": "provando",
        "id": "it_starter_verbs_016",
        "lang": "it"
    },
    {
        "word": "mostrare",
        "level": "starter",
        "theme": "language",
        "emoji": "📽️",
        "subtext": "mostrare a qualcuno / mostrare come / mostrare un documento",
        "form": "verb",
        "definitions": [
            {
                "text": "Lasciare che qualcuno veda qualcosa; spiegare.",
                "examples": [
                    "Lei mi mostra la mappa.",
                    "Lui mostra il suo lavoro."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "mostrato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈmostrare",
        "id": "it_starter_verbs_017",
        "lang": "it"
    },
    {
        "word": "trovare",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔍",
        "subtext": "trovare un lavoro / trovare difficile",
        "synonyms": [
            "scoprire"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Scoprire o localizzare qualcosa.",
                "examples": [
                    "Trovo il lavoro interessante.",
                    "Lei ha trovato un nuovo lavoro."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "trovato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈtrovare",
        "id": "it_starter_verbs_018",
        "lang": "it"
    },
    {
        "word": "tenere",
        "level": "starter",
        "theme": "work",
        "emoji": "📦",
        "subtext": "tenere un registro",
        "synonyms": [
            "continuare",
            "stare zitti"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Continuare ad avere o fare qualcosa.",
                "examples": [
                    "Tieni la ricevuta.",
                    "Lei tiene il telefono acceso tutto il giorno."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v3": "tenuto",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈtenere",
        "tenses": {
            "present_simple": {
                "positive": [
                    "tengo",
                    "tieni",
                    "tiene",
                    "teniamo",
                    "tenite",
                    "tengono"
                ]
            }
        },
        "id": "it_starter_verbs_019",
        "lang": "it"
    },
    {
        "word": "perdere",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📉",
        "subtext": "perdere un lavoro / perdere soldi / perdere peso",
        "form": "verb",
        "definitions": [
            {
                "text": "Non avere più qualcosa; non riuscire a vincere.",
                "examples": [
                    "Ho perso le chiavi.",
                    "Lei ha perso il lavoro.",
                    "Lui non perde mai."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "perso",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈperdere",
        "id": "it_starter_verbs_020",
        "lang": "it",
        "antonyms": [
            "vincere"
        ]
    },
    {
        "word": "tagliare",
        "level": "starter",
        "theme": "cooking_methods",
        "emoji": "✂️",
        "subtext": "tagliare i costi / tagliare le spese / tagliare a metà",
        "form": "verb",
        "definitions": [
            {
                "text": "Dividere con qualcosa di affilato; ridurre.",
                "examples": [
                    "Lei taglia la sua pausa pranzo.",
                    "Riduce i costi."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "tagliato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈtagliare",
        "id": "it_starter_verbs_021",
        "lang": "it"
    },
    {
        "word": "girare",
        "level": "starter",
        "theme": "directions_navigation",
        "emoji": "🔄",
        "subtext": "girare a sinistra / girare a destra",
        "synonyms": [
            "accendere",
            "spegnere"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Muoversi in una direzione; cambiare stato.",
                "examples": [
                    "Gira a sinistra all ufficio.",
                    "Lei spegne la luce."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "girato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈgirare",
        "v4": "girando",
        "id": "it_starter_verbs_022",
        "lang": "it"
    },
    {
        "word": "portare",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🎁",
        "subtext": "portare qualcuno / portare cibo / portare un documento",
        "form": "verb",
        "definitions": [
            {
                "text": "Trasportare qualcosa in un posto.",
                "examples": [
                    "Porta il tuo documento all intervista.",
                    "Lui porta il pranzo."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "portato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈportare",
        "id": "it_starter_verbs_023",
        "lang": "it"
    },
    {
        "word": "dire",
        "level": "starter",
        "theme": "greetings_social_phrases",
        "emoji": "🗨️",
        "subtext": "dire ciao / dire di sì / dire di no / dire qualcosa",
        "form": "verb",
        "definitions": [
            {
                "text": "Esprimere qualcosa a parole.",
                "examples": [
                    "Lei dice ciao ogni mattina.",
                    "Lui dice che è difficile."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "detto",
        "group": "ire",
        "auxiliary": "avere",
        "transcription": "ˈdire",
        "tenses": {
            "present_simple": {
                "positive": [
                    "dico",
                    "dici",
                    "dice",
                    "diciamo",
                    "dite",
                    "dicono"
                ]
            }
        },
        "id": "it_starter_verbs_024",
        "lang": "it"
    },
    {
        "word": "dire",
        "level": "starter",
        "theme": "language",
        "emoji": "🗣️",
        "subtext": "dire la verità / dire a qualcuno",
        "synonyms": [
            "raccontare una storia"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Dare informazioni a qualcuno.",
                "examples": [
                    "Dice la verità.",
                    "Lei mi racconta della sua giornata."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "detto",
        "group": "ire",
        "auxiliary": "avere",
        "transcription": "ˈdire",
        "tenses": {
            "present_simple": {
                "positive": [
                    "dico",
                    "dici",
                    "dice",
                    "diciamo",
                    "dite",
                    "dicono"
                ]
            }
        },
        "id": "it_starter_verbs_025",
        "lang": "it"
    },
    {
        "word": "chiedere",
        "level": "starter",
        "theme": "language",
        "emoji": "❓",
        "subtext": "chiedere aiuto / chiedere di",
        "synonyms": [
            "fare una domanda"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Porre una domanda a qualcuno; richiedere qualcosa.",
                "examples": [
                    "Lei fa molte domande.",
                    "Chiedo consiglio al mio capo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "chiesto",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈchiedere",
        "v4": "chiedendo",
        "id": "it_starter_verbs_026",
        "lang": "it"
    },
    {
        "word": "parlare",
        "level": "starter",
        "theme": "greetings_social_phrases",
        "emoji": "🗣️",
        "subtext": "parlare con qualcuno / parlare una lingua / parlare chiaramente, parlare di",
        "form": "verb",
        "definitions": [
            {
                "text": "Comunicare verbalmente; conoscere una lingua.",
                "examples": [
                    "Lui parla tre lingue.",
                    "Lei parla con il suo manager."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "parlato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈparlare",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "parabolare"
        },
        "id": "it_starter_verbs_027",
        "lang": "it"
    },
    {
        "word": "parlare",
        "level": "starter",
        "theme": "social",
        "emoji": "💬",
        "subtext": "parlare con qualcuno / parlare di / parlare apertamente",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere una conversazione.",
                "examples": [
                    "Parliamo di lavoro ogni lunedì.",
                    "Lei parla molto."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "parlato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈparlare",
        "v4": "parlando",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "parabolare"
        },
        "id": "it_starter_verbs_028",
        "lang": "it"
    },
    {
        "word": "chiamare",
        "level": "starter",
        "theme": "technology",
        "emoji": "📞",
        "subtext": "chiamare qualcuno",
        "synonyms": [
            "richiamare",
            "convocare una riunione"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Telefonare a qualcuno.",
                "examples": [
                    "Chiamo i miei clienti ogni mattina.",
                    "Lei convoca una riunione."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "chiamato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈchiamare",
        "v4": "chiamando",
        "id": "it_starter_verbs_029",
        "lang": "it"
    },
    {
        "word": "scrivere",
        "level": "starter",
        "theme": "school",
        "emoji": "✍️",
        "subtext": "scrivere un email / scrivere un rapporto / scrivere una lettera",
        "form": "verb",
        "definitions": [
            {
                "text": "Tracciare segni su carta o su uno schermo.",
                "examples": [
                    "Scrivo email tutto il giorno.",
                    "Lei scrive un rapporto ogni venerdì."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "scritto",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈscrivere",
        "id": "it_starter_verbs_030",
        "lang": "it",
        "antonyms": [
            "leggere"
        ]
    },
    {
        "word": "leggere",
        "level": "starter",
        "theme": "school",
        "emoji": "📖",
        "subtext": "leggere un libro / leggere le notizie / leggere un contratto",
        "form": "verb",
        "definitions": [
            {
                "text": "Guardare e capire parole scritte.",
                "examples": [
                    "Lei legge le notizie ogni mattina.",
                    "Lui legge i contratti."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "letto",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈleggere",
        "id": "it_starter_verbs_031",
        "lang": "it",
        "antonyms": [
            "scrivere"
        ]
    },
    {
        "word": "ascoltare",
        "level": "starter",
        "theme": "school",
        "emoji": "🎧",
        "subtext": "ascoltare musica / ascoltare attentamente / ascoltare un podcast",
        "form": "verb",
        "definitions": [
            {
                "text": "Prestare attenzione ai suoni o al parlato.",
                "examples": [
                    "Ascolto podcast al lavoro.",
                    "Lei ascolta attentamente."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "ascoltato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈascoltare",
        "v4": "ascoltando",
        "id": "it_starter_verbs_032",
        "lang": "it"
    },
    {
        "word": "rispondere",
        "level": "starter",
        "theme": "language",
        "emoji": "📞",
        "subtext": "rispondere a una domanda / rispondere al telefono",
        "form": "verb",
        "definitions": [
            {
                "text": "Rispondere a una domanda o a una comunicazione.",
                "examples": [
                    "Risponde a tutte le email velocemente.",
                    "Lei ha risposto al telefono."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "risposto",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈrispondere",
        "v4": "rispondendo",
        "id": "it_starter_verbs_033",
        "lang": "it"
    },
    {
        "word": "ripetere",
        "level": "starter",
        "theme": "classroom_language",
        "emoji": "🔁",
        "subtext": "ripetere quello / ripetere un ordine",
        "synonyms": [
            "ripetersi"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Dire o fare qualcosa di nuovo.",
                "examples": [
                    "Per favore ripeti quello.",
                    "Ha ripetuto l istruzione due volte."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "ripetuto",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈripetere",
        "v4": "ripetendo",
        "id": "it_starter_verbs_034",
        "lang": "it"
    },
    {
        "word": "andare",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚶",
        "subtext": "andare al lavoro / andare a casa / andare a",
        "synonyms": [
            "uscire"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Spostarsi da un luogo a un altro.",
                "examples": [
                    "Vado al lavoro in treno.",
                    "Lei va all estero ogni anno."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "andato",
        "group": "are",
        "auxiliary": "essere",
        "transcription": "ˈandare",
        "tenses": {
            "present_simple": {
                "positive": [
                    "vado",
                    "vai",
                    "va",
                    "andiamo",
                    "andate",
                    "vanno"
                ]
            }
        },
        "id": "it_starter_verbs_035",
        "lang": "it"
    },
    {
        "word": "venire",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏃‍♂️",
        "subtext": "venire a casa / venire al lavoro, venire da",
        "synonyms": [
            "tornare"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Spostarsi verso un luogo o una persona.",
                "examples": [
                    "Lui viene in ufficio alle nove.",
                    "Lei viene a casa tardi."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "venuto",
        "group": "ire",
        "auxiliary": "essere",
        "transcription": "ˈvenire",
        "tenses": {
            "present_simple": {
                "positive": [
                    "vengo",
                    "vieni",
                    "viene",
                    "veniamo",
                    "venite",
                    "vengono"
                ]
            }
        },
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "venire"
        },
        "id": "it_starter_verbs_036",
        "lang": "it",
        "antonyms": [
            "andare"
        ]
    },
    {
        "word": "camminare",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚶",
        "subtext": "camminare verso il lavoro / camminare verso casa / camminare",
        "form": "verb",
        "definitions": [
            {
                "text": "Muoversi a piedi a passo normale.",
                "examples": [
                    "Lui cammina verso il lavoro ogni giorno.",
                    "Lei cammina durante la pausa pranzo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "camminato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈcamminare",
        "v4": "camminando",
        "id": "it_starter_verbs_037",
        "lang": "it"
    },
    {
        "word": "guidare",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚗",
        "subtext": "guidare verso il lavoro / guidare la macchina / guidare verso casa",
        "form": "verb",
        "definitions": [
            {
                "text": "Azionare un veicolo.",
                "examples": [
                    "Lei guida verso il lavoro.",
                    "Lui guida un auto aziendale."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "guidato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈguidare",
        "id": "it_starter_verbs_038",
        "lang": "it"
    },
    {
        "word": "volare",
        "level": "starter",
        "theme": "travel",
        "emoji": "✈️",
        "subtext": "volare verso una città / volare in business class",
        "form": "verb",
        "definitions": [
            {
                "text": "Viaggiare in aereo.",
                "examples": [
                    "Lei vola a Parigi per riunioni.",
                    "Lui odia volare."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "volato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈvolare",
        "id": "it_starter_verbs_039",
        "lang": "it"
    },
    {
        "word": "arrivare",
        "level": "starter",
        "theme": "work",
        "emoji": "🏁",
        "subtext": "arrivare al lavoro / arrivare tardi / arrivare in orario",
        "form": "verb",
        "definitions": [
            {
                "text": "Raggiungere una destinazione.",
                "examples": [
                    "Lui arriva in ufficio alle nove.",
                    "Il treno arriva in ritardo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "arrivato",
        "group": "are",
        "auxiliary": "essere",
        "transcription": "ˈarrivare",
        "v4": "arrivando",
        "id": "it_starter_verbs_040",
        "lang": "it"
    },
    {
        "word": "partire",
        "level": "starter",
        "theme": "work",
        "emoji": "🚪",
        "subtext": "partire presto",
        "synonyms": [
            "lasciare casa",
            "lasciare il lavoro"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Allontanarsi da un luogo.",
                "examples": [
                    "Parto da casa alle otto.",
                    "Lei ha lasciato l azienda l anno scorso."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "partito",
        "group": "ire",
        "auxiliary": "essere",
        "transcription": "ˈpartire",
        "id": "it_starter_verbs_041",
        "lang": "it"
    },
    {
        "word": "muovere",
        "level": "starter",
        "theme": "furniture",
        "emoji": "📦",
        "subtext": "trasferirsi in una città",
        "synonyms": [
            "traslocare",
            "andare avanti"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Cambiare posizione o luogo di vita.",
                "examples": [
                    "Si sono trasferiti in un nuovo appartamento.",
                    "Lei si sposta in un team diverso."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "mosso",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈmuovere",
        "v4": "muovendo",
        "id": "it_starter_verbs_042",
        "lang": "it"
    },
    {
        "word": "tornare",
        "level": "starter",
        "theme": "travel",
        "emoji": "🔙",
        "subtext": "tornare a casa / tornare al lavoro",
        "form": "verb",
        "definitions": [
            {
                "text": "Venire o tornare in un luogo.",
                "examples": [
                    "Lui torna da un viaggio venerdì.",
                    "Lei ha ricambiato la chiamata."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "tornato",
        "group": "are",
        "auxiliary": "essere",
        "transcription": "ˈtornare",
        "v4": "tornando",
        "id": "it_starter_verbs_043",
        "lang": "it"
    },
    {
        "word": "viaggiare",
        "level": "starter",
        "theme": "public_transport",
        "emoji": "✈️",
        "subtext": "viaggiare per lavoro / viaggiare all estero",
        "form": "verb",
        "definitions": [
            {
                "text": "Andare da un posto all altro, spesso lontano.",
                "examples": [
                    "Lei viaggia per lavoro una volta al mese.",
                    "Lui ama viaggiare."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "viaggiato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈviaggiare",
        "v4": "viaggiando",
        "id": "it_starter_verbs_044",
        "lang": "it"
    },
    {
        "word": "mangiare",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍎",
        "subtext": "",
        "synonyms": [
            "fare colazione",
            "pranzare",
            "cenare"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Mettere cibo in bocca e consumarlo.",
                "examples": [
                    "Mangiamo il pranzo all una.",
                    "Lei mangia alla sua scrivania."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "mangiato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈmangiare",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "manducare",
            "origin_meaning": "to chew, eat"
        },
        "id": "it_starter_verbs_045",
        "lang": "it",
        "antonyms": [
            "bere"
        ]
    },
    {
        "word": "bere",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥛",
        "subtext": "bere caffè / bere tè / bere acqua",
        "form": "verb",
        "definitions": [
            {
                "text": "Ingoiare del liquido.",
                "examples": [
                    "Lei beve caffè ogni mattina.",
                    "Bevo acqua al lavoro."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "bevuto",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈbere",
        "tenses": {
            "present_simple": {
                "positive": [
                    "bevo",
                    "bevi",
                    "beve",
                    "beviamo",
                    "bevete",
                    "bevono"
                ]
            }
        },
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "bibere",
            "origin_meaning": "to drink"
        },
        "id": "it_starter_verbs_046",
        "lang": "it",
        "antonyms": [
            "mangiare"
        ]
    },
    {
        "word": "dormire",
        "level": "starter",
        "theme": "time",
        "emoji": "😴",
        "subtext": "dormire bene / dormire male / dormire otto ore",
        "form": "verb",
        "definitions": [
            {
                "text": "Riposare in uno stato di incoscienza.",
                "examples": [
                    "Lui dorme sette ore a notte.",
                    "Lei dorme male."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "dormito",
        "group": "ire",
        "auxiliary": "avere",
        "transcription": "ˈdormire",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "dormire",
            "origin_meaning": "to sleep"
        },
        "id": "it_starter_verbs_047",
        "lang": "it",
        "antonyms": [
            "svegliarsi"
        ]
    },
    {
        "word": "cucinare",
        "level": "starter",
        "theme": "cooking_methods",
        "emoji": "🍳",
        "subtext": "cucinare la cena / cucinare un pasto",
        "form": "verb",
        "definitions": [
            {
                "text": "Preparare il cibo usando il calore.",
                "examples": [
                    "Lei cucina la cena ogni sera.",
                    "Lui cucina per la squadra."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "cucinato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈcucinare",
        "v4": "cucinando",
        "id": "it_starter_verbs_048",
        "lang": "it"
    },
    {
        "word": "pulire",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🧹",
        "subtext": "pulire l appartamento / pulire tutto / pulire la cucina",
        "form": "verb",
        "definitions": [
            {
                "text": "Rimuovere lo sporco da qualcosa.",
                "examples": [
                    "Pulisco l appartamento il sabato.",
                    "Lui pulisce la sua scrivania ogni giorno."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "pulito",
        "group": "ire_isco",
        "auxiliary": "avere",
        "transcription": "ˈpulire",
        "v4": "pulendo",
        "id": "it_starter_verbs_049",
        "lang": "it"
    },
    {
        "word": "indossare",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👕",
        "subtext": "indossare un completo / indossare gli occhiali",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere vestiti o accessori sul corpo.",
                "examples": [
                    "Lei indossa un completo per il lavoro.",
                    "Lui indossa gli occhiali."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "indossato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈindossare",
        "id": "it_starter_verbs_050",
        "lang": "it"
    },
    {
        "word": "lavare",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🧼",
        "subtext": "lavare i piatti / lavare i vestiti",
        "synonyms": [
            "lavarsi le mani"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Pulire qualcosa con l acqua.",
                "examples": [
                    "Lava la sua macchina ogni domenica.",
                    "Lavati le mani."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "lavato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈlavare",
        "v4": "lavando",
        "id": "it_starter_verbs_051",
        "lang": "it"
    },
    {
        "word": "comprare",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🛒",
        "subtext": "comprare cibo / comprare un biglietto",
        "form": "verb",
        "definitions": [
            {
                "text": "Ottenere qualcosa pagando denaro.",
                "examples": [
                    "Lei compra la spesa online.",
                    "Lui vuole comprare un appartamento."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "comprato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈcomprare",
        "id": "it_starter_verbs_052",
        "lang": "it",
        "antonyms": [
            "vendere"
        ]
    },
    {
        "word": "pagare",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💳",
        "subtext": "pagare una bolletta / pagare l affitto / pagare con carta",
        "form": "verb",
        "definitions": [
            {
                "text": "Dare denaro in cambio di qualcosa.",
                "examples": [
                    "Pago l affitto mensilmente.",
                    "Lei paga con carta."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "pagato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈpagare",
        "id": "it_starter_verbs_053",
        "lang": "it"
    },
    {
        "word": "spendere",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💸",
        "subtext": "spendere soldi / spendere tempo",
        "form": "verb",
        "definitions": [
            {
                "text": "Usare denaro o tempo.",
                "examples": [
                    "Lui spende troppo per il cibo da asporto.",
                    "Lei spende tempo per il pendolarismo."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "speso",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈspendere",
        "id": "it_starter_verbs_054",
        "lang": "it"
    },
    {
        "word": "risparmiare",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💰",
        "subtext": "risparmiare soldi / risparmiare per una casa",
        "form": "verb",
        "definitions": [
            {
                "text": "Tenere i soldi invece di spenderli.",
                "examples": [
                    "Risparmia cento euro al mese.",
                    "Salva il tuo lavoro."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "risparmiato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈrisparmiare",
        "v4": "risparmiando",
        "id": "it_starter_verbs_055",
        "lang": "it",
        "antonyms": [
            "spendere"
        ]
    },
    {
        "word": "lavorare",
        "level": "starter",
        "theme": "work",
        "emoji": "💼",
        "subtext": "lavorare da casa / lavorare a tempo pieno",
        "form": "verb",
        "definitions": [
            {
                "text": "Svolgere compiti per guadagnare denaro.",
                "examples": [
                    "Lavora da casa tre giorni a settimana.",
                    "Lei lavora sodo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "lavorato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈlavorare",
        "v4": "lavorando",
        "id": "it_starter_verbs_056",
        "lang": "it"
    },
    {
        "word": "vivere",
        "level": "starter",
        "theme": "places",
        "emoji": "🏠",
        "subtext": "vivere in un appartamento / vivere da soli",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere la propria casa in un luogo ; essere vivo.",
                "examples": [
                    "Lei vive in un appartamento vicino al centro.",
                    "Viviamo insieme."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "vissuto",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈvivere",
        "v4": "vivendo",
        "id": "it_starter_verbs_057",
        "lang": "it",
        "antonyms": [
            "morire"
        ]
    },
    {
        "word": "pensare",
        "level": "starter",
        "theme": "social",
        "emoji": "💭",
        "subtext": "pensare a / pensare di / pensare attentamente",
        "form": "verb",
        "definitions": [
            {
                "text": "Usare la mente; avere un opinione.",
                "examples": [
                    "Penso che sia una buona idea.",
                    "Lei pensa di dimettersi."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v3": "pensato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈpensare",
        "id": "it_starter_verbs_058",
        "lang": "it"
    },
    {
        "word": "sapere",
        "level": "starter",
        "theme": "school",
        "emoji": "🧠",
        "subtext": "sapere la risposta / sapere come",
        "synonyms": [
            "conoscere qualcuno"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Avere informazioni o avere familiarità con.",
                "examples": [
                    "Conosco il suo nome.",
                    "Lei sa come negoziare."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "saputo",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈsapere",
        "tenses": {
            "present_simple": {
                "positive": [
                    "so",
                    "sai",
                    "sa",
                    "sappiamo",
                    "sapete",
                    "sanno"
                ]
            }
        },
        "id": "it_starter_verbs_059",
        "lang": "it"
    },
    {
        "word": "volere",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🙏",
        "subtext": "volere un lavoro / volere fare / volere di più",
        "form": "verb",
        "definitions": [
            {
                "text": "Desiderare o augurarsi qualcosa.",
                "examples": [
                    "Voglio un caffè.",
                    "Lei vuole una promozione.",
                    "Lui vuole andare in pensione."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "voluto",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈvolere",
        "tenses": {
            "present_simple": {
                "positive": [
                    "voglio",
                    "vuoi",
                    "vuole",
                    "vogliamo",
                    "volete",
                    "vogliono"
                ]
            }
        },
        "id": "it_starter_verbs_060",
        "lang": "it"
    },
    {
        "word": "avere bisogno di",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🆘",
        "subtext": "",
        "synonyms": [
            "bisogno di aiuto",
            "bisogno di tempo",
            "bisogno di soldi"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Richiedere qualcosa.",
                "examples": [
                    "Ho bisogno di una pausa.",
                    "Lei ha bisogno di più tempo.",
                    "Lui ha bisogno di aiuto."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "avuto bisogno",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈavere bisogno di",
        "id": "it_starter_verbs_061",
        "lang": "it"
    },
    {
        "word": "piacere",
        "level": "starter",
        "theme": "emotions",
        "emoji": "👍",
        "subtext": "mi piace il lavoro / mi piace l idea",
        "synonyms": [
            "mi piace viaggiare"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Trovare qualcosa di piacevole.",
                "examples": [
                    "Mi piace il mio lavoro.",
                    "A lei piace cucinare a casa.",
                    "A lui piace il caffè."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "piaciuto",
        "group": "ere",
        "auxiliary": "essere",
        "transcription": "ˈpiacere",
        "v4": "piacendo",
        "id": "it_starter_verbs_062",
        "lang": "it"
    },
    {
        "word": "amare",
        "level": "starter",
        "theme": "emotions",
        "emoji": "❤️",
        "subtext": "amare qualcuno / amare fare qualcosa / amare un posto",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere un forte affetto per; godere grandemente.",
                "examples": [
                    "Lei ama il suo lavoro.",
                    "Lui ama viaggiare per lavoro."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "amato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈamare",
        "v4": "amando",
        "id": "it_starter_verbs_063",
        "lang": "it"
    },
    {
        "word": "odiare",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😡",
        "subtext": "odiare fare / odiare qualcuno / odiare le riunioni",
        "form": "verb",
        "definitions": [
            {
                "text": "Fortemente non gradire.",
                "examples": [
                    "Odia fare il pendolare in autobus.",
                    "Lei odia le lunghe riunioni."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "odiato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈodiare",
        "v4": "odiando",
        "id": "it_starter_verbs_064",
        "lang": "it"
    },
    {
        "word": "sperare",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🤞",
        "subtext": "sperare / sperare di fare",
        "synonyms": [
            "spero di sì"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Desiderare che succeda qualcosa.",
                "examples": [
                    "Spero di ottenere una promozione quest anno.",
                    "Lei spera in una paga migliore."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "sperato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈsperare",
        "v4": "sperando",
        "id": "it_starter_verbs_065",
        "lang": "it"
    },
    {
        "word": "ricordare",
        "level": "starter",
        "theme": "school",
        "emoji": "🧠",
        "subtext": "ricordare di fare / ricordare un nome",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere un ricordo di; non dimenticare.",
                "examples": [
                    "Per favore ricorda la scadenza.",
                    "Lei ricorda ogni cliente."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "ricordato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈricordare",
        "v4": "ricordando",
        "id": "it_starter_verbs_066",
        "lang": "it"
    },
    {
        "word": "dimenticare",
        "level": "starter",
        "theme": "school",
        "emoji": "🤔",
        "subtext": "dimenticare un nome / dimenticare di fare",
        "form": "verb",
        "definitions": [
            {
                "text": "Mancare di ricordare.",
                "examples": [
                    "Non dimenticare la riunione.",
                    "Dimentica sempre le password."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "dimenticato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈdimenticare",
        "id": "it_starter_verbs_067",
        "lang": "it"
    },
    {
        "word": "capire",
        "level": "starter",
        "theme": "language",
        "emoji": "💡",
        "subtext": "capire un problema / capire qualcuno / capire chiaramente",
        "form": "verb",
        "definitions": [
            {
                "text": "Afferrare il significato di qualcosa.",
                "examples": [
                    "Capisco il contratto.",
                    "Lei capisce il francese."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "capito",
        "group": "ire_isco",
        "auxiliary": "avere",
        "transcription": "ˈcapire",
        "id": "it_starter_verbs_068",
        "lang": "it"
    },
    {
        "word": "decidere",
        "level": "starter",
        "theme": "social",
        "emoji": "⚖️",
        "subtext": "decidere di fare / decidere su",
        "synonyms": [
            "prendere una decisione"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Fare una scelta.",
                "examples": [
                    "Ha deciso di cambiare carriera.",
                    "Lui decide velocemente."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "deciso",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈdecidere",
        "v4": "decidendo",
        "id": "it_starter_verbs_069",
        "lang": "it"
    },
    {
        "word": "godere",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😊",
        "subtext": "godere di fare",
        "synonyms": [
            "godersi un pasto",
            "godersi il lavoro"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Trarre piacere da qualcosa.",
                "examples": [
                    "Gode di lavorare da casa.",
                    "Lei gode del suo nuovo ruolo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "goduto",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈgodere",
        "v4": "godendo",
        "id": "it_starter_verbs_070",
        "lang": "it"
    },
    {
        "word": "vedere",
        "level": "starter",
        "theme": "body",
        "emoji": "👁️",
        "subtext": "vedere un dottore / vedere gli amici / vedere il problema",
        "form": "verb",
        "definitions": [
            {
                "text": "Notare o percepire con gli occhi.",
                "examples": [
                    "Vedo il mio dottore domani.",
                    "Lei vede il problema."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v3": "visto",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈvedere",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "videre",
            "origin_meaning": "to see"
        },
        "id": "it_starter_verbs_071",
        "lang": "it"
    },
    {
        "word": "udire",
        "level": "starter",
        "theme": "body",
        "emoji": "👂",
        "subtext": "udire notizie / udire qualcuno / udire un suono",
        "form": "verb",
        "definitions": [
            {
                "text": "Percepire il suono attraverso le orecchie.",
                "examples": [
                    "Odo l allarme ogni mattina.",
                    "Puoi udirmi?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v3": "udito",
        "group": "ire",
        "auxiliary": "avere",
        "transcription": "ˈudire",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "audire"
        },
        "id": "it_starter_verbs_072",
        "lang": "it"
    },
    {
        "word": "svegliarsi",
        "level": "starter",
        "theme": "work",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "svegliarsi presto / svegliarsi alle 7 / svegliarsi stanco",
        "definitions": [
            {
                "text": "Smettere di dormire e aprire gli occhi.",
                "examples": [
                    "Mi sveglio alle sette.",
                    "A che ora ti svegli?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "svegliato",
        "group": "are",
        "auxiliary": "essere",
        "transcription": "ˈsvegliarsi",
        "reflexive": true,
        "id": "it_starter_verbs_073",
        "lang": "it",
        "antonyms": [
            "dormire"
        ]
    },
    {
        "word": "guardare",
        "level": "starter",
        "theme": "social",
        "emoji": "📺",
        "form": "verb",
        "subtext": "guardare la TV / guardare un film",
        "definitions": [
            {
                "text": "Guardare qualcosa per un periodo di tempo.",
                "examples": [
                    "Guardo la TV la sera.",
                    "Guardano gli uccelli."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "guardato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈguardare",
        "v4": "guardando",
        "id": "it_starter_verbs_074",
        "lang": "it"
    },
    {
        "word": "guardare",
        "level": "starter",
        "theme": "people",
        "emoji": "👀",
        "subtext": "guardare",
        "synonyms": [
            "cercare",
            "assomigliare a"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Dirigere gli occhi verso qualcosa.",
                "examples": [
                    "Guarda questa foto.",
                    "Lui sta cercando le sue chiavi."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v3": "guardato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈguardare",
        "v4": "guardando",
        "id": "it_starter_verbs_075",
        "lang": "it"
    },
    {
        "word": "giocare",
        "level": "starter",
        "theme": "social",
        "emoji": "🎮",
        "subtext": "giocare al sport / giocare a un gioco / giocare un ruolo",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare qualcosa per divertimento o in un gioco.",
                "examples": [
                    "Gioco a calcio con i miei amici.",
                    "Le piace giocare ai videogiochi."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "giocato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈgiocare",
        "v4": "giocando",
        "id": "it_starter_verbs_076",
        "lang": "it"
    },
    {
        "word": "correre",
        "level": "starter",
        "theme": "sports",
        "emoji": "🏃",
        "subtext": "correre / correre una corsa",
        "synonyms": [
            "dirigere un impresa"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Muoversi molto velocemente sulle gambe.",
                "examples": [
                    "Corro nel parco.",
                    "Lui corre per prendere l autobus."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "corso",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈcorrere",
        "id": "it_starter_verbs_077",
        "lang": "it"
    },
    {
        "word": "sedersi",
        "level": "starter",
        "theme": "work",
        "emoji": "🪑",
        "subtext": "sedersi a una scrivania / sedersi in riunione",
        "synonyms": [
            "prendere posto"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Riposare il peso sul sedere piuttosto che sui piedi.",
                "examples": [
                    "Per favore siediti.",
                    "Mi siedo su una sedia."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "seduto",
        "group": "are",
        "auxiliary": "essere",
        "transcription": "seˈdersi",
        "reflexive": true,
        "id": "it_starter_verbs_078",
        "lang": "it",
        "antonyms": [
            "stare in piedi"
        ]
    },
    {
        "word": "stare in piedi",
        "level": "starter",
        "theme": "work",
        "emoji": "🧍",
        "subtext": "stare in piedi",
        "synonyms": [
            "alzarsi",
            "essere in piedi"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Essere sui piedi in posizione eretta.",
                "examples": [
                    "Per favore alzati.",
                    "Lei sta in piedi vicino alla porta."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "stato in piedi",
        "group": "are",
        "auxiliary": "essere",
        "transcription": "ˈstare in piˈɛdi",
        "id": "it_starter_verbs_079",
        "lang": "it",
        "antonyms": [
            "sedersi"
        ]
    },
    {
        "word": "incontrare",
        "level": "starter",
        "theme": "work",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Vedere e parlare con qualcuno per la prima volta.",
                "examples": [
                    "Piacere di conoscerti.",
                    "Ci incontriamo ogni venerdì."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "incontrato",
        "subtext": "incontrare qualcuno / incontrare per il pranzo",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈincontrare",
        "id": "it_starter_verbs_080",
        "lang": "it"
    },
    {
        "word": "imparare",
        "level": "starter",
        "theme": "school",
        "emoji": "📚",
        "subtext": "imparare / imparare una lingua / imparare in fretta",
        "form": "verb",
        "definitions": [
            {
                "text": "Ottenere conoscenza o un abilità.",
                "examples": [
                    "Voglio imparare l italiano.",
                    "I bambini imparano in fretta."
                ]
            }
        ],
        "classification": "both",
        "aspect": "action",
        "v3": "imparato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈimparare",
        "id": "it_starter_verbs_081",
        "lang": "it"
    },
    {
        "word": "cambiare",
        "level": "starter",
        "theme": "work",
        "emoji": "🔄",
        "subtext": "cambiare / cambiare idea / cambiare piano",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendere qualcosa diverso.",
                "examples": [
                    "Voglio cambiare i miei vestiti.",
                    "Il tempo cambia velocemente."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "cambiato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈcambiare",
        "v4": "cambiando",
        "id": "it_starter_verbs_082",
        "lang": "it"
    },
    {
        "word": "fermare",
        "level": "starter",
        "theme": "work",
        "emoji": "🛑",
        "subtext": "fermare / fermare qualcuno",
        "synonyms": [
            "smettere di fare"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Finire di fare qualcosa o non muoversi più.",
                "examples": [
                    "Ferma la macchina.",
                    "Per favore smetti di parlare."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "fermato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈfermare",
        "v4": "fermando",
        "id": "it_starter_verbs_083",
        "lang": "it"
    },
    {
        "word": "aggiungere",
        "level": "starter",
        "theme": "numbers",
        "emoji": "➕",
        "subtext": "aggiungere / aggiungere un commento / aggiungere zucchero",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettere le cose insieme per formare un gruppo più grande.",
                "examples": [
                    "Aggiungi dello zucchero al tè.",
                    "Quanto fa cinque più cinque?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "aggiunto",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈaggiungere",
        "v4": "aggiungendo",
        "id": "it_starter_verbs_084",
        "lang": "it"
    },
    {
        "word": "vincere",
        "level": "starter",
        "theme": "social",
        "emoji": "🏆",
        "subtext": "vincere / vincere un premio / vincere un contratto",
        "form": "verb",
        "definitions": [
            {
                "text": "Essere il migliore in un gioco o in una competizione.",
                "examples": [
                    "Vogliamo vincere la partita."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "vinto",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈvincere",
        "id": "it_starter_verbs_085",
        "lang": "it",
        "antonyms": [
            "perdere"
        ]
    },
    {
        "word": "aspettare",
        "level": "starter",
        "theme": "work",
        "emoji": "⏳",
        "subtext": "aspettare / aspettare qualcuno / aspettare un momento",
        "form": "verb",
        "definitions": [
            {
                "text": "Stare in un posto finché non succede qualcosa.",
                "examples": [
                    "Aspetta l autobus qui.",
                    "Sto aspettando il mio amico."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "aspettato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈaspettare",
        "v4": "aspettando",
        "id": "it_starter_verbs_086",
        "lang": "it"
    },
    {
        "word": "morire",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "⚰️",
        "subtext": "morire / morire di",
        "synonyms": [
            "estinguersi"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Smettere di vivere.",
                "examples": [
                    "Le piante muoiono senza acqua."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "morto",
        "group": "ire",
        "auxiliary": "essere",
        "transcription": "ˈmorire",
        "v4": "morendo",
        "id": "it_starter_verbs_087",
        "lang": "it",
        "antonyms": [
            "vivere"
        ]
    },
    {
        "word": "inviare",
        "level": "starter",
        "theme": "work",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Far sì che qualcosa vada in un posto.",
                "examples": [
                    "Invio un email ogni mattina.",
                    "Puoi inviarmi una foto?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "inviato",
        "subtext": "inviare / inviare un email / inviare un messaggio",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈinviare",
        "id": "it_starter_verbs_088",
        "lang": "it"
    },
    {
        "word": "restare",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏨",
        "subtext": "restare / restare a casa / stare in un hotel",
        "form": "verb",
        "definitions": [
            {
                "text": "Continuare a essere in un posto.",
                "examples": [
                    "Resto a casa la domenica.",
                    "Stiamo in un hotel."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "restato",
        "group": "are",
        "auxiliary": "essere",
        "transcription": "ˈrestare",
        "v4": "restando",
        "id": "it_starter_verbs_089",
        "lang": "it"
    },
    {
        "word": "cadere",
        "level": "starter",
        "theme": "nature",
        "emoji": "🍂",
        "subtext": "cadere",
        "synonyms": [
            "innamorarsi",
            "addormentarsi"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Muoversi verso il basso verso il suolo.",
                "examples": [
                    "Le foglie cadono in autunno.",
                    "Fai attenzione, non cadere."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "caduto",
        "group": "ere",
        "auxiliary": "essere",
        "transcription": "ˈcadere",
        "id": "it_starter_verbs_090",
        "lang": "it"
    },
    {
        "word": "passare",
        "level": "starter",
        "theme": "school",
        "emoji": "🏔️",
        "subtext": "passare / passare un esame / passare il tempo",
        "form": "verb",
        "definitions": [
            {
                "text": "Passare oltre qualcosa o superare un esame.",
                "examples": [
                    "Passo davanti al parco mentre vado a casa.",
                    "Spero di superare il test."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "passato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈpassare",
        "v4": "passando",
        "id": "it_starter_verbs_091",
        "lang": "it"
    },
    {
        "word": "vendere",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "subtext": "vendere / vendere online / vendere al mercato",
        "form": "verb",
        "definitions": [
            {
                "text": "Dare qualcosa a qualcuno in cambio di denaro.",
                "examples": [
                    "Vendono frutta al mercato."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "venduto",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈvendere",
        "id": "it_starter_verbs_092",
        "lang": "it",
        "antonyms": [
            "comprare"
        ]
    },
    {
        "word": "tirare",
        "level": "starter",
        "theme": "work",
        "emoji": "🚜",
        "subtext": "tirare / tirare la porta",
        "synonyms": [
            "allontanarsi"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Spostare qualcosa verso di sé.",
                "examples": [
                    "Tira la porta per aprirla."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "tirato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈtirare",
        "v4": "tirando",
        "id": "it_starter_verbs_093",
        "lang": "it",
        "antonyms": [
            "spingere"
        ]
    },
    {
        "word": "spingere",
        "level": "starter",
        "theme": "work",
        "emoji": "🛒",
        "subtext": "spingere / spingere il pulsante / spingere il carrello",
        "form": "verb",
        "definitions": [
            {
                "text": "Spostare qualcosa lontano da sé.",
                "examples": [
                    "Premi il pulsante.",
                    "Spingo il carrello della spesa."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "spinto",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈspingere",
        "v4": "spingendo",
        "id": "it_starter_verbs_094",
        "lang": "it",
        "antonyms": [
            "tirare"
        ]
    },
    {
        "word": "trasportare",
        "level": "starter",
        "theme": "work",
        "emoji": "🎒",
        "subtext": "trasportare / trasportare una borsa / trasportare note",
        "form": "verb",
        "definitions": [
            {
                "text": "Tenere qualcosa e spostarlo da un posto all altro.",
                "examples": [
                    "Porto la mia borsa a scuola.",
                    "Puoi aiutarmi a trasportare questa scatola?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "trasportato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈtrasportare",
        "v4": "trasportando",
        "id": "it_starter_verbs_095",
        "lang": "it"
    },
    {
        "word": "rompere",
        "level": "starter",
        "theme": "describing",
        "emoji": "💔",
        "subtext": "rompere / rompere il vetro",
        "synonyms": [
            "fare una pausa"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Separare qualcosa in due o più pezzi.",
                "examples": [
                    "Non rompere il vetro.",
                    "Si è rotto la gamba."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "rotto",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈrompere",
        "id": "it_starter_verbs_096",
        "lang": "it"
    },
    {
        "word": "ricevere",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📩",
        "subtext": "ricevere / ricevere un email / ricevere un pagamento",
        "form": "verb",
        "definitions": [
            {
                "text": "Ottenere qualcosa che qualcuno ti ha dato o inviato.",
                "examples": [
                    "Ricevo molta posta.",
                    "Ha ricevuto un regalo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "ricevuto",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈricevere",
        "v4": "ricevendo",
        "id": "it_starter_verbs_097",
        "lang": "it"
    },
    {
        "word": "essere d accordo",
        "level": "starter",
        "theme": "social",
        "emoji": "👍",
        "subtext": "essere d accordo / essere d accordo con qualcuno",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere la stessa opinione di qualcuno.",
                "examples": [
                    "Sono d accordo con te.",
                    "Siamo d accordo sul piano."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "stato d accordo",
        "group": "ere",
        "auxiliary": "essere",
        "transcription": "ˈessere d accordo",
        "id": "it_starter_verbs_098",
        "lang": "it"
    },
    {
        "word": "disegnare",
        "level": "starter",
        "theme": "cinema_film",
        "emoji": "🎨",
        "subtext": "disegnare / disegnare un immagine / disegnare una linea",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare un immagine con una penna o una matita.",
                "examples": [
                    "Mi piace disegnare uccelli.",
                    "Puoi disegnare una mappa?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "disegnato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈdisegnare",
        "id": "it_starter_verbs_099",
        "lang": "it"
    },
    {
        "word": "condividere",
        "level": "starter",
        "theme": "social",
        "emoji": "🍕",
        "subtext": "condividere / condividere una stanza / condividere un idea",
        "form": "verb",
        "definitions": [
            {
                "text": "Dare una parte di qualcosa ad altri.",
                "examples": [
                    "Condividiamo la pizza.",
                    "Condivido la stanza con mio fratello."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "condiviso",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈcondividere",
        "v4": "condividendo",
        "id": "it_starter_verbs_100",
        "lang": "it"
    },
    {
        "word": "sorridere",
        "level": "starter",
        "theme": "people",
        "emoji": "😊",
        "subtext": "sorridere / sorridere a qualcuno / sorridere ampiamente",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare un espressione felice con la bocca.",
                "examples": [
                    "Ha un bellissimo sorriso.",
                    "Sorridi per la macchina fotografica."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "sorriso",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈsorridere",
        "v4": "sorridendo",
        "id": "it_starter_verbs_101",
        "lang": "it",
        "antonyms": [
            "piangere"
        ]
    },
    {
        "word": "piangere",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😢",
        "subtext": "piangere / piangere per aiuto / piangere per qualcosa",
        "form": "verb",
        "definitions": [
            {
                "text": "Produrre lacrime perché si è tristi o si prova dolore.",
                "examples": [
                    "Il bambino sta piangendo.",
                    "Non piangere."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "pianto",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈpiangere",
        "v4": "piangendo",
        "id": "it_starter_verbs_102",
        "lang": "it",
        "antonyms": [
            "sorridere"
        ]
    },
    {
        "word": "ballare",
        "level": "starter",
        "theme": "music",
        "emoji": "💃",
        "subtext": "ballare / ballare a tempo di musica / andare a ballare",
        "form": "verb",
        "definitions": [
            {
                "text": "Muovere il corpo a tempo di musica.",
                "examples": [
                    "Amo ballare.",
                    "Stanno ballando."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "ballato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈballare",
        "v4": "ballando",
        "id": "it_starter_verbs_103",
        "lang": "it"
    },
    {
        "word": "cantare",
        "level": "starter",
        "theme": "music",
        "emoji": "🎤",
        "subtext": "cantare / cantare una canzone / cantare insieme",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare suoni musicali con la voce.",
                "examples": [
                    "Mi piace cantare sotto la doccia.",
                    "Canta molto bene."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "cantato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈcantare",
        "id": "it_starter_verbs_104",
        "lang": "it"
    },
    {
        "word": "saltare",
        "level": "starter",
        "theme": "sports",
        "emoji": "🦘",
        "subtext": "saltare / saltare in alto / saltare oltre",
        "form": "verb",
        "definitions": [
            {
                "text": "Spingersi lontano dal suolo con le gambe.",
                "examples": [
                    "Puoi saltare in alto?",
                    "Il gatto è saltato sul tavolo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "saltato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈsaltare",
        "v4": "saltando",
        "id": "it_starter_verbs_105",
        "lang": "it"
    },
    {
        "word": "nuotare",
        "level": "starter",
        "theme": "sports",
        "emoji": "🏊",
        "subtext": "nuotare / andare a nuotare / nuotare vasche",
        "form": "verb",
        "definitions": [
            {
                "text": "Muoversi attraverso l acqua usando braccia e gambe.",
                "examples": [
                    "Nuoto ogni mattina.",
                    "Sai nuotare?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "nuotato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈnuotare",
        "id": "it_starter_verbs_106",
        "lang": "it"
    },
    {
        "word": "studiare",
        "level": "starter",
        "theme": "school",
        "emoji": "📖",
        "subtext": "studiare / studiare inglese / studiare per un esame",
        "form": "verb",
        "definitions": [
            {
                "text": "Passare del tempo a imparare un argomento.",
                "examples": [
                    "Studio l inglese a scuola.",
                    "Sta studiando per i suoi esami."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "studiato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈstudiare",
        "v4": "studiando",
        "id": "it_starter_verbs_107",
        "lang": "it"
    },
    {
        "word": "insegnare",
        "level": "starter",
        "theme": "school",
        "emoji": "👨‍🏫",
        "subtext": "insegnare / insegnare a qualcuno / insegnare un argomento",
        "form": "verb",
        "definitions": [
            {
                "text": "Dare conoscenza agli altri.",
                "examples": [
                    "Insegno inglese.",
                    "Insegna in un università."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "insegnato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈinsegnare",
        "id": "it_starter_verbs_108",
        "lang": "it"
    },
    {
        "word": "fare il pendolare",
        "level": "starter",
        "theme": "public_transport",
        "emoji": "🚆",
        "subtext": "fare il pendolare",
        "synonyms": [
            "pendolarismo quotidiano",
            "lungo pendolarismo"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Viaggiare per una certa distanza tra la propria casa e il posto di lavoro regolarmente.",
                "examples": [
                    "Faccio il pendolare verso la città in treno."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "fatto il pendolare",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈfare il pendolare",
        "id": "it_starter_verbs_109",
        "lang": "it"
    },
    {
        "word": "affittare",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏠",
        "subtext": "affittare / affittare un appartamento / affittare una stanza",
        "form": "verb",
        "definitions": [
            {
                "text": "Pagare denaro per usare una casa o un appartamento che appartiene a qualcun altro.",
                "examples": [
                    "Affittiamo un appartamento in città."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "affittato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈaffittare",
        "v4": "affittando",
        "id": "it_starter_verbs_110",
        "lang": "it"
    },
    {
        "word": "esercitarsi",
        "level": "starter",
        "theme": "social",
        "emoji": "🏋️",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare attività fisica per mantenersi in salute.",
                "examples": [
                    "Mi esercito ogni mattina."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "esercitato",
        "subtext": "esercitarsi / esercitarsi regolarmente / esercitarsi in palestra",
        "group": "are",
        "auxiliary": "essere",
        "transcription": "ˈesercitarsi",
        "reflexive": true,
        "v4": "esercitaando",
        "id": "it_starter_verbs_111",
        "lang": "it"
    },
    {
        "word": "costare",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere un certo prezzo.",
                "examples": [
                    "L appartamento costa molto."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "costato",
        "subtext": "costare / costare molto / costare soldi",
        "group": "are",
        "auxiliary": "essere",
        "transcription": "ˈcostare",
        "id": "it_starter_verbs_112",
        "lang": "it"
    },
    {
        "word": "invitare",
        "level": "starter",
        "theme": "social",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Chiedere a qualcuno di venire in un posto o a un evento.",
                "examples": [
                    "Invito gli amici a cena."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "invitato",
        "subtext": "invitare / invitare qualcuno / invitare a cena",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈinvitare",
        "v4": "invitando",
        "id": "it_starter_verbs_113",
        "lang": "it"
    },
    {
        "word": "alzarsi",
        "definitions": [
            {
                "text": "Alzarsi dal letto dopo essersi svegliati.",
                "examples": [
                    "Si alza alle sette e fa subito il caffè."
                ]
            }
        ],
        "subtext": "alzarsi presto / alzarsi tardi / alzarsi velocemente",
        "classification": "irregular",
        "aspect": "action",
        "v3": "alzato",
        "theme": "work",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "essere",
        "transcription": "ˈalzarsi",
        "reflexive": true,
        "id": "it_starter_verbs_114",
        "lang": "it"
    },
    {
        "word": "fare colazione",
        "definitions": [
            {
                "text": "Fare il pasto del mattino.",
                "examples": [
                    "Fa sempre colazione prima di uscire di casa."
                ]
            }
        ],
        "subtext": "fare colazione a casa",
        "synonyms": [
            "colazione veloce",
            "saltare la colazione"
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "fatto colazione",
        "theme": "work",
        "emoji": "🍳",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈfare colazione",
        "id": "it_starter_verbs_115",
        "lang": "it"
    },
    {
        "word": "tornare",
        "definitions": [
            {
                "text": "Tornare in un luogo.",
                "examples": [
                    "Torna dal pranzo alle due."
                ]
            }
        ],
        "subtext": "tornare a casa / tornare tardi / tornare da un viaggio",
        "classification": "irregular",
        "aspect": "action",
        "v3": "tornato",
        "theme": "work",
        "emoji": "🔙",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "essere",
        "transcription": "ˈtornare",
        "id": "it_starter_verbs_116",
        "lang": "it"
    },
    {
        "word": "andare a letto",
        "definitions": [
            {
                "text": "Mettersi a letto per dormire.",
                "examples": [
                    "Vanno a letto alle undici ogni sera."
                ]
            }
        ],
        "subtext": "andare a letto presto / andare a letto tardi / andare a letto stanchi",
        "classification": "irregular",
        "aspect": "action",
        "v3": "andato a letto",
        "theme": "work",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "essere",
        "transcription": "ˈandare a letto",
        "id": "it_starter_verbs_117",
        "lang": "it"
    },
    {
        "word": "controllare",
        "definitions": [
            {
                "text": "Esaminare o verificare qualcosa.",
                "examples": [
                    "Controllo le mie email come prima cosa ogni mattina."
                ]
            }
        ],
        "subtext": "controllare le email / controllare i messaggi / controllare un documento",
        "classification": "regular",
        "aspect": "action",
        "v3": "controllato",
        "theme": "work",
        "emoji": "✅",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈcontrollare",
        "v4": "controllando",
        "id": "it_starter_verbs_118",
        "lang": "it"
    },
    {
        "word": "rispondere",
        "definitions": [
            {
                "text": "Rispondere a un messaggio o a una domanda.",
                "examples": [
                    "Risponde sempre alle email il giorno stesso."
                ]
            }
        ],
        "subtext": "rispondere a un email / rispondere velocemente / rispondere a un messaggio",
        "classification": "regular",
        "aspect": "action",
        "v3": "risposto",
        "theme": "work",
        "emoji": "↩️",
        "level": "starter",
        "form": "verb",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈrispondere",
        "v4": "rispondendo",
        "id": "it_starter_verbs_119",
        "lang": "it"
    },
    {
        "word": "presentare",
        "definitions": [
            {
                "text": "Mostrare o spiegare qualcosa a un gruppo.",
                "examples": [
                    "Presenta i risultati ogni venerdì pomeriggio."
                ]
            }
        ],
        "subtext": "presentare un rapporto / presentare idee / presentare a un cliente",
        "classification": "regular",
        "aspect": "action",
        "v3": "presentato",
        "theme": "work",
        "emoji": "📊",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈpresentare",
        "v4": "presentando",
        "id": "it_starter_verbs_120",
        "lang": "it"
    },
    {
        "word": "partecipare",
        "definitions": [
            {
                "text": "Andare a un evento o a una riunione.",
                "examples": [
                    "Partecipo a una riunione di direzione ogni lunedì."
                ]
            }
        ],
        "subtext": "partecipare a una riunione / partecipare a un evento",
        "synonyms": [
            "frequentare un corso"
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "partecipato",
        "theme": "work",
        "emoji": "📅",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈpartecipare",
        "v4": "partecipando",
        "id": "it_starter_verbs_121",
        "lang": "it"
    },
    {
        "word": "gestire",
        "definitions": [
            {
                "text": "Essere responsabile di persone o di una situazione.",
                "examples": [
                    "Gestisce un team di otto persone."
                ]
            }
        ],
        "subtext": "gestire un team / gestire un progetto / gestire il tempo",
        "classification": "regular",
        "aspect": "action",
        "v3": "gestito",
        "theme": "work",
        "emoji": "👤",
        "level": "starter",
        "form": "verb",
        "group": "ire_isco",
        "auxiliary": "avere",
        "transcription": "ˈgestire",
        "v4": "gestendo",
        "id": "it_starter_verbs_122",
        "lang": "it"
    },
    {
        "word": "addebitare",
        "definitions": [
            {
                "text": "Chiedere una somma di denaro per un servizio.",
                "examples": [
                    "Il meccanico ha addebitato trecento euro."
                ]
            }
        ],
        "subtext": "addebitare una tariffa / far pagare un servizio",
        "synonyms": [
            "far pagare extra"
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "addebitato",
        "theme": "shopping",
        "emoji": "💳",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈaddebitare",
        "v4": "addebitando",
        "id": "it_starter_verbs_123",
        "lang": "it"
    },
    {
        "word": "permettersi",
        "definitions": [
            {
                "text": "Avere abbastanza soldi per qualcosa.",
                "examples": [
                    "Non possono permettersi di comprare un appartamento in centro città."
                ]
            }
        ],
        "subtext": "permettersi una casa / permettersi di viaggiare / permettersi qualcosa",
        "classification": "regular",
        "aspect": "stative",
        "v3": "permesso",
        "theme": "shopping",
        "emoji": "🏦",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "essere",
        "transcription": "ˈpermettersi",
        "reflexive": true,
        "v4": "permetteando",
        "id": "it_starter_verbs_124",
        "lang": "it"
    },
    {
        "word": "dovere",
        "definitions": [
            {
                "text": "Essere tenuti a pagare soldi a qualcuno.",
                "examples": [
                    "Deve alla banca cinquantamila euro."
                ]
            }
        ],
        "subtext": "dovere dei soldi / dovere a qualcuno / dovere molto",
        "classification": "irregular",
        "aspect": "stative",
        "v3": "dovuto",
        "theme": "shopping",
        "emoji": "💸",
        "level": "starter",
        "form": "verb",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈdovere",
        "tenses": {
            "present_simple": {
                "positive": [
                    "devo",
                    "devi",
                    "deve",
                    "dobbiamo",
                    "dovete",
                    "devono"
                ]
            }
        },
        "id": "it_starter_verbs_125",
        "lang": "it"
    },
    {
        "word": "guadagnare",
        "definitions": [
            {
                "text": "Ricevere denaro per il lavoro svolto.",
                "examples": [
                    "Guadagna un buon stipendio come project manager."
                ]
            }
        ],
        "subtext": "guadagnare uno stipendio / guadagnare soldi / guadagnare di più",
        "classification": "regular",
        "aspect": "action",
        "v3": "guadagnato",
        "theme": "shopping",
        "emoji": "💶",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈguadagnare",
        "v4": "guadagnando",
        "id": "it_starter_verbs_126",
        "lang": "it"
    },
    {
        "word": "visitare",
        "definitions": [
            {
                "text": "Andare a vedere una persona o un luogo.",
                "examples": [
                    "Visita i suoi genitori a fine settimana alterni."
                ]
            }
        ],
        "subtext": "visitare la famiglia / andare a trovare un amico / visitare una città",
        "classification": "regular",
        "aspect": "action",
        "v3": "visitato",
        "theme": "social",
        "emoji": "🏘️",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈvisitare",
        "v4": "visitando",
        "id": "it_starter_verbs_127",
        "lang": "it"
    },
    {
        "word": "festeggiare",
        "definitions": [
            {
                "text": "Fare qualcosa di piacevole per un occasione speciale.",
                "examples": [
                    "Festeggiano ogni anniversario di lavoro insieme."
                ]
            }
        ],
        "subtext": "festeggiare un compleanno / festeggiare il successo / festeggiare insieme",
        "classification": "regular",
        "aspect": "action",
        "v3": "festeggiato",
        "theme": "social",
        "emoji": "🎉",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈfesteggiare",
        "v4": "festeggiando",
        "id": "it_starter_verbs_128",
        "lang": "it"
    },
    {
        "word": "consigliare",
        "definitions": [
            {
                "text": "Suggerire qualcosa come buono o adatto.",
                "examples": [
                    "Puoi consigliare un buon ristorante vicino all ufficio?"
                ]
            }
        ],
        "subtext": "consigliare un posto / consigliare un film",
        "synonyms": [
            "raccomandare qualcuno"
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "consigliato",
        "theme": "social",
        "emoji": "👍",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈconsigliare",
        "v4": "consigliando",
        "id": "it_starter_verbs_129",
        "lang": "it"
    },
    {
        "word": "far male",
        "definitions": [
            {
                "text": "Causare dolore; o sentire dolore.",
                "examples": [
                    "Mi fa male la schiena dopo essere stato seduto tutto il giorno."
                ]
            }
        ],
        "subtext": "farsi male alla schiena / far male a qualcuno",
        "synonyms": [
            "fa male"
        ],
        "classification": "irregular",
        "aspect": "both",
        "v3": "fatto male",
        "theme": "health_medicine",
        "emoji": "🤕",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈfar male",
        "id": "it_starter_verbs_130",
        "lang": "it"
    },
    {
        "word": "riposare",
        "definitions": [
            {
                "text": "Smettere di lavorare e rilassarsi per recuperare energia.",
                "examples": [
                    "Riposa per un ora dopo pranzo ogni giorno."
                ]
            }
        ],
        "subtext": "riposare a casa / riposare dopo il lavoro / aver bisogno di riposo",
        "classification": "regular",
        "aspect": "action",
        "v3": "riposato",
        "theme": "work",
        "emoji": "🛋️",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈriposare",
        "v4": "riposando",
        "id": "it_starter_verbs_131",
        "lang": "it"
    },
    {
        "word": "guarire",
        "definitions": [
            {
                "text": "Tornare in buona salute dopo una malattia o un infortunio.",
                "examples": [
                    "Sta guarendo da un infortunio alla schiena."
                ]
            }
        ],
        "subtext": "guarire da una malattia / guarire velocemente / guarire completamente",
        "classification": "regular",
        "aspect": "action",
        "v3": "guarito",
        "theme": "health_medicine",
        "emoji": "🩹",
        "level": "starter",
        "form": "verb",
        "group": "ire_isco",
        "auxiliary": "essere",
        "transcription": "ˈguarire",
        "v4": "guarendo",
        "id": "it_starter_verbs_132",
        "lang": "it"
    },
    {
        "word": "prenotare",
        "definitions": [
            {
                "text": "Riservare un posto, un biglietto o un servizio in anticipo.",
                "examples": [
                    "Prenoto sempre gli hotel online."
                ]
            }
        ],
        "subtext": "prenotare un hotel / prenotare un volo / prenotare un tavolo",
        "classification": "regular",
        "aspect": "action",
        "v3": "prenotato",
        "theme": "travel",
        "emoji": "📖",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈprenotare",
        "v4": "prenotando",
        "id": "it_starter_verbs_133",
        "lang": "it"
    },
    {
        "word": "fare le valigie",
        "definitions": [
            {
                "text": "Mettere gli oggetti in una borsa o in una valigia per un viaggio.",
                "examples": [
                    "Fa le valigie la sera prima di un viaggio."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "fare lo zaino",
            "fare i bagagli",
            "fare bagagli leggeri"
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "fatto le valigie",
        "theme": "travel",
        "emoji": "🎒",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈfare le valigie",
        "v4": "fare le valiando",
        "id": "it_starter_verbs_134",
        "lang": "it"
    },
    {
        "word": "annullare",
        "definitions": [
            {
                "text": "Decidere che qualcosa di pianificato non avverrà.",
                "examples": [
                    "Ha dovuto annullare il suo volo a causa di una malattia."
                ]
            }
        ],
        "subtext": "annullare un volo / annullare una prenotazione / annullare una riunione",
        "classification": "regular",
        "aspect": "action",
        "v3": "annullato",
        "theme": "travel",
        "emoji": "❌",
        "level": "starter",
        "form": "verb",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈannullare",
        "v4": "annullando",
        "id": "it_starter_verbs_135",
        "lang": "it"
    },
    {
        "word": "perdere",
        "definitions": [
            {
                "text": "Non riuscire a prendere un mezzo di trasporto; o sentirsi tristi per l assenza.",
                "examples": [
                    "Ha perso il treno e ha dovuto aspettare un ora."
                ]
            }
        ],
        "subtext": "perdere un treno / perdere un volo / sentire la mancanza di qualcuno",
        "classification": "regular",
        "aspect": "both",
        "v3": "perso",
        "theme": "public_transport",
        "emoji": "🏃‍♂️",
        "level": "starter",
        "form": "verb",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈperdere",
        "v4": "perdendo",
        "id": "it_starter_verbs_136",
        "lang": "it"
    },
    {
        "word": "ordinare",
        "level": "starter",
        "theme": "work",
        "emoji": "📦",
        "subtext": "ordinare cibo / ordinare da bere / ordinare online",
        "form": "verb",
        "definitions": [
            {
                "text": "Richiedere qualcosa formalmente, specialmente cibo o merci.",
                "examples": [
                    "Ordino sempre il pranzo dallo stesso posto vicino all ufficio."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "ordinato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈordinare",
        "v4": "ordinando",
        "id": "it_starter_verbs_137",
        "lang": "it"
    },
    {
        "word": "spiegare",
        "level": "starter",
        "theme": "work",
        "emoji": "💡",
        "subtext": "spiegare un processo / spiegare chiaramente / spiegare a qualcuno",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendere qualcosa chiaro fornendo dettagli.",
                "examples": [
                    "Spiega sempre il processo ai nuovi membri del team."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "spiegato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈspiegare",
        "v4": "spiegando",
        "id": "it_starter_verbs_138",
        "lang": "it"
    },
    {
        "word": "ringraziare",
        "level": "starter",
        "theme": "greetings_social_phrases",
        "emoji": "🙏",
        "subtext": "ringraziare qualcuno / ringraziare per",
        "synonyms": [
            "molte grazie"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Esprimere gratitudine a qualcuno.",
                "examples": [
                    "Ha ringraziato il team per il duro lavoro sul progetto."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "ringraziato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈringraziare",
        "v4": "ringraziando",
        "id": "it_starter_verbs_139",
        "lang": "it"
    },
    {
        "word": "presentare",
        "level": "starter",
        "theme": "name_greeting",
        "emoji": "🤝",
        "subtext": "presentare qualcuno / presentare un argomento",
        "synonyms": [
            "presentarsi"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Presentare qualcuno a un altra persona.",
                "examples": [
                    "Si è presentata all inizio della riunione."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "presentato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈpresentare",
        "v4": "presentando",
        "id": "it_starter_verbs_140",
        "lang": "it"
    },
    {
        "word": "rilassarsi",
        "level": "starter",
        "theme": "social",
        "emoji": "🧘",
        "subtext": "rilassarsi a casa / rilassarsi dopo il lavoro / rilassarsi in vacanza",
        "form": "verb",
        "definitions": [
            {
                "text": "Smettere di lavorare e riposare; diventare meno tesi.",
                "examples": [
                    "Mi rilasso nel fine settimana e non controllo mai le email."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "rilassato",
        "group": "are",
        "auxiliary": "essere",
        "transcription": "ˈrilassarsi",
        "reflexive": true,
        "v4": "rilassaando",
        "id": "it_starter_verbs_141",
        "lang": "it"
    },
    {
        "word": "riparare",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🛠️",
        "subtext": "riparare qualcosa / far riparare",
        "synonyms": [
            "costi di riparazione"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Aggiustare qualcosa che è rotto.",
                "examples": [
                    "Il proprietario è lento a riparare le cose nell appartamento."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "riparato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈriparare",
        "v4": "riparando",
        "id": "it_starter_verbs_142",
        "lang": "it"
    },
    {
        "word": "succedere",
        "level": "starter",
        "theme": "social",
        "emoji": "❔",
        "subtext": "succedere a qualcuno",
        "synonyms": [
            "cos è successo",
            "succede"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Aver luogo; accadere.",
                "examples": [
                    "Cos è successo alla riunione? Qualcosa è andato storto."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "successo",
        "group": "ere",
        "auxiliary": "essere",
        "transcription": "ˈsuccedere",
        "v4": "succedendo",
        "id": "it_starter_verbs_143",
        "lang": "it"
    },
    {
        "word": "sembrare",
        "level": "starter",
        "theme": "social",
        "emoji": "🎭",
        "subtext": "sembrare bene / sembrare preoccupato / sembrare felice",
        "form": "verb",
        "definitions": [
            {
                "text": "Apparire come qualcosa; dare un impressione.",
                "examples": [
                    "Sembra molto sicura di sé nelle riunioni con i clienti."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "sembrato",
        "group": "are",
        "auxiliary": "essere",
        "transcription": "ˈsembrare",
        "v4": "sembrando",
        "id": "it_starter_verbs_144",
        "lang": "it"
    },
    {
        "word": "significare",
        "level": "starter",
        "theme": "school",
        "emoji": "❔",
        "subtext": "significare qualcosa",
        "synonyms": [
            "cosa significa",
            "voler dire"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Avere un particolare significato; avere l intenzione.",
                "examples": [
                    "Cosa significa questa clausola nel contratto?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "significato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈsignificare",
        "id": "it_starter_verbs_145",
        "lang": "it"
    },
    {
        "word": "seguire",
        "level": "starter",
        "theme": "work",
        "emoji": "👣",
        "subtext": "seguire le istruzioni / seguire qualcuno / seguire le notizie",
        "form": "verb",
        "definitions": [
            {
                "text": "Venire dopo; obbedire a regole o istruzioni.",
                "examples": [
                    "Per favore segui attentamente le istruzioni. Lui segue le notizie."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "seguito",
        "group": "ire",
        "auxiliary": "avere",
        "transcription": "ˈseguire",
        "v4": "seguendo",
        "id": "it_starter_verbs_146",
        "lang": "it"
    },
    {
        "word": "continuare",
        "level": "starter",
        "theme": "school",
        "emoji": "⏩",
        "subtext": "continuare a lavorare / continuare a fare / continuare un compito",
        "form": "verb",
        "definitions": [
            {
                "text": "Continuare a fare qualcosa senza fermarsi.",
                "examples": [
                    "Ha continuato a lavorare dopo le sei nonostante si sentisse male."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "continuato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈcontinuare",
        "v4": "continuando",
        "id": "it_starter_verbs_147",
        "lang": "it"
    },
    {
        "word": "crescere",
        "level": "starter",
        "theme": "work",
        "emoji": "📈",
        "subtext": "far crescere un azienda / crescere velocemente",
        "synonyms": [
            "trasformarsi in"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Aumentare di dimensioni o quantità; svilupparsi.",
                "examples": [
                    "L azienda è cresciuta del venti percento l anno scorso."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "cresciuto",
        "group": "ere",
        "auxiliary": "essere",
        "transcription": "ˈcrescere",
        "id": "it_starter_verbs_148",
        "lang": "it"
    },
    {
        "word": "includere",
        "level": "starter",
        "theme": "shopping",
        "emoji": "➕",
        "subtext": "includere qualcosa / includere in",
        "synonyms": [
            "non incluso"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Rendere qualcosa parte di un tutto.",
                "examples": [
                    "Il prezzo include la colazione e la cena."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "incluso",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈincludere",
        "v4": "includendo",
        "id": "it_starter_verbs_149",
        "lang": "it"
    },
    {
        "word": "diventare",
        "level": "starter",
        "theme": "work",
        "emoji": "✨",
        "subtext": "diventare manager / diventare popolare / diventare chiaro",
        "form": "verb",
        "definitions": [
            {
                "text": "Iniziare a essere qualcosa.",
                "examples": [
                    "È diventata manager dopo soli due anni nel ruolo."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "diventato",
        "group": "are",
        "auxiliary": "essere",
        "transcription": "ˈdiventare",
        "id": "it_starter_verbs_150",
        "lang": "it"
    },
    {
        "word": "appartenere",
        "level": "starter",
        "theme": "work",
        "emoji": "📎",
        "subtext": "appartenere a qualcuno / appartenere a",
        "synonyms": [
            "sentirsi a casa"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Essere di proprietà di qualcuno; essere un membro.",
                "examples": [
                    "Quel conto appartiene al dipartimento finanziario."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "appartenuto",
        "group": "ere",
        "auxiliary": "essere",
        "transcription": "ˈappartenere",
        "v4": "appartenendo",
        "id": "it_starter_verbs_151",
        "lang": "it"
    },
    {
        "word": "scegliere",
        "level": "starter",
        "theme": "social",
        "emoji": "👉",
        "subtext": "scegliere tra / scegliere di fare / scegliere con cura",
        "form": "verb",
        "definitions": [
            {
                "text": "Selezionare tra opzioni.",
                "examples": [
                    "Ha scelto di lavorare a tempo parziale per passare più tempo con la famiglia."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "scelto",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈscegliere",
        "id": "it_starter_verbs_152",
        "lang": "it"
    },
    {
        "word": "costruire",
        "level": "starter",
        "theme": "work",
        "emoji": "🏗️",
        "subtext": "costruire una carriera / costruire un team / costruire fiducia",
        "form": "verb",
        "definitions": [
            {
                "text": "Costruire qualcosa; sviluppare qualcosa nel tempo.",
                "examples": [
                    "Ha costruito una solida reputazione in dieci anni."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "costruito",
        "group": "ire_isco",
        "auxiliary": "avere",
        "transcription": "ˈcostruire",
        "id": "it_starter_verbs_153",
        "lang": "it"
    },
    {
        "word": "cominciare",
        "level": "starter",
        "theme": "work",
        "emoji": "▶️",
        "form": "verb",
        "definitions": [
            {
                "text": "Iniziare a fare qualcosa.",
                "examples": [
                    "Cominciamo la riunione alle nove."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "cominciato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈcominciare",
        "subtext": "cominciare a",
        "v4": "cominciando",
        "id": "it_starter_verbs_154",
        "lang": "it"
    },
    {
        "word": "finire",
        "level": "starter",
        "theme": "work",
        "emoji": "🏁",
        "form": "verb",
        "definitions": [
            {
                "text": "Finire ; fermarsi.",
                "examples": [
                    "La lezione finisce alle tre."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "finito",
        "group": "ire_isco",
        "auxiliary": "avere",
        "transcription": "ˈfinire",
        "subtext": "finire di",
        "id": "it_starter_verbs_155",
        "lang": "it"
    },
    {
        "word": "spazzolare",
        "level": "starter",
        "theme": "work",
        "emoji": "🪥",
        "form": "verb",
        "definitions": [
            {
                "text": "Pulire qualcosa con una spazzola.",
                "examples": [
                    "Mi spazzolo i denti ogni mattina."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "spazzolato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈspazzolare",
        "subtext": "",
        "v4": "spazzolando",
        "id": "it_starter_verbs_156",
        "lang": "it"
    },
    {
        "word": "cavalcare",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚲",
        "form": "verb",
        "definitions": [
            {
                "text": "Viaggiare in bicicletta o a cavallo.",
                "examples": [
                    "Vado al lavoro in bicicletta."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "cavalcato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈcavalcare",
        "subtext": "",
        "v4": "cavalcando",
        "id": "it_starter_verbs_157",
        "lang": "it"
    },
    {
        "word": "sognare",
        "level": "starter",
        "theme": "work",
        "emoji": "💭",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere immagini o idee in mente durante il sonno.",
                "examples": [
                    "Ho sognato una vacanza ieri notte."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "sognato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈsognare",
        "subtext": "",
        "v4": "sognando",
        "id": "it_starter_verbs_158",
        "lang": "it"
    },
    {
        "word": "credere",
        "level": "starter",
        "theme": "social",
        "emoji": "🙏",
        "form": "verb",
        "definitions": [
            {
                "text": "Pensare che qualcosa sia vero.",
                "examples": [
                    "Ti credo.",
                    "Credo in Dio."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "creduto",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈkredere",
        "subtext": "credere a qualcuno / credere in qualcosa",
        "id": "it_starter_verbs_159",
        "lang": "it"
    },
    {
        "word": "preferire",
        "level": "starter",
        "theme": "social",
        "emoji": "👉",
        "form": "verb",
        "definitions": [
            {
                "text": "Preferire una cosa a un'altra.",
                "examples": [
                    "Preferisco il tè al caffè."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "preferito",
        "group": "ire_isco",
        "auxiliary": "avere",
        "transcription": "ˈpreferire",
        "subtext": "",
        "id": "it_starter_verbs_160",
        "lang": "it"
    },
    {
        "word": "prendere",
        "level": "starter",
        "theme": "public_transport",
        "emoji": "🧤",
        "form": "verb",
        "definitions": [
            {
                "text": "Prendere qualcosa ; salire su un autobus o un treno.",
                "examples": [
                    "Devo prendere l'autobus alle otto."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "preso",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈprendere",
        "subtext": "",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "prehendere"
        },
        "id": "it_starter_verbs_161",
        "lang": "it"
    },
    {
        "word": "riparare",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🛠️",
        "form": "verb",
        "definitions": [
            {
                "text": "Riparare qualcosa che è rotto.",
                "examples": [
                    "Puoi riparare il mio telefono?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "riparato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈriparare",
        "subtext": "",
        "v4": "riparando",
        "id": "it_starter_verbs_162",
        "lang": "it"
    },
    {
        "word": "creare",
        "level": "starter",
        "theme": "work",
        "emoji": "🎨",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare qualcosa di nuovo.",
                "examples": [
                    "Lei crea bellissimi siti web."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "creato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈcreare",
        "subtext": "",
        "v4": "creando",
        "id": "it_starter_verbs_163",
        "lang": "it"
    },
    {
        "word": "notare",
        "level": "starter",
        "theme": "social",
        "emoji": "👀",
        "form": "verb",
        "definitions": [
            {
                "text": "Vedere o diventare consapevoli di qualcosa.",
                "examples": [
                    "Hai notato il nuovo ufficio?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "notato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈnotare",
        "subtext": "",
        "v4": "notando",
        "id": "it_starter_verbs_164",
        "lang": "it"
    },
    {
        "word": "migliorare",
        "level": "starter",
        "theme": "school",
        "emoji": "📈",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendere qualcosa migliore.",
                "examples": [
                    "Voglio migliorare il mio italiano."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "migliorato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈmigliorare",
        "subtext": "",
        "v4": "migliorando",
        "id": "it_starter_verbs_165",
        "lang": "it"
    },
    {
        "word": "preparare",
        "level": "starter",
        "theme": "cooking_methods",
        "emoji": "🥘",
        "form": "verb",
        "definitions": [
            {
                "text": "Preparare qualcosa.",
                "examples": [
                    "Lui prepara la cena."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "preparato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈpreparare",
        "subtext": "",
        "v4": "preparando",
        "id": "it_starter_verbs_166",
        "lang": "it"
    },
    {
        "word": "organizzare",
        "level": "starter",
        "theme": "work",
        "emoji": "📂",
        "form": "verb",
        "definitions": [
            {
                "text": "Pianificare o organizzare qualcosa.",
                "examples": [
                    "Lei organizza tutte le riunioni."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "organizzato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈorganizzare",
        "subtext": "",
        "v4": "organizzando",
        "id": "it_starter_verbs_167",
        "lang": "it"
    },
    {
        "word": "pianificare",
        "level": "starter",
        "theme": "work",
        "emoji": "📅",
        "form": "verb",
        "definitions": [
            {
                "text": "Decidere cosa farai.",
                "examples": [
                    "Stiamo pianificando un viaggio."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "pianificato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈpianificare",
        "subtext": "",
        "v4": "pianificando",
        "id": "it_starter_verbs_168",
        "lang": "it"
    },
    {
        "word": "prendere in prestito",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📥",
        "form": "verb",
        "definitions": [
            {
                "text": "Prendere qualcosa per un breve periodo e poi restituirlo.",
                "examples": [
                    "Posso prendere in prestito la tua penna?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "preso in prestito",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈprendere in prestito",
        "subtext": "",
        "id": "it_starter_verbs_169",
        "lang": "it"
    },
    {
        "word": "prestare",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📤",
        "form": "verb",
        "definitions": [
            {
                "text": "Dare qualcosa per un breve periodo.",
                "examples": [
                    "Posso prestarti dei soldi."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "prestato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈprestare",
        "subtext": "",
        "v4": "prestando",
        "id": "it_starter_verbs_170",
        "lang": "it"
    },
    {
        "word": "odorare",
        "level": "starter",
        "theme": "body",
        "emoji": "👃",
        "form": "verb",
        "definitions": [
            {
                "text": "Notare o riconoscere qualcosa con il naso.",
                "examples": [
                    "Sento l'odore del caffè."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "odorato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈodorare",
        "subtext": "",
        "v4": "odorando",
        "id": "it_starter_verbs_171",
        "lang": "it"
    },
    {
        "word": "assaggiare",
        "level": "starter",
        "theme": "tastes_textures",
        "emoji": "👅",
        "form": "verb",
        "definitions": [
            {
                "text": "Sentire il sapore di qualcosa in bocca.",
                "examples": [
                    "Assaggia questa zuppa."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "assaggiato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈassaggiare",
        "subtext": "",
        "v4": "assaggiando",
        "id": "it_starter_verbs_172",
        "lang": "it"
    },
    {
        "word": "sdraiarsi",
        "level": "starter",
        "theme": "work",
        "emoji": "🛌",
        "form": "verb",
        "definitions": [
            {
                "text": "Essere in posizione orizzontale su una superficie.",
                "examples": [
                    "Mi piace sdraiarmi sulla spiaggia."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "sdraiato",
        "group": "are",
        "auxiliary": "essere",
        "transcription": "ˈsdraiarsi",
        "subtext": "",
        "reflexive": true,
        "id": "it_starter_verbs_173",
        "lang": "it"
    },
    {
        "word": "ridere",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😂",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare suoni con la voce perché pensi che qualcosa sia divertente.",
                "examples": [
                    "Ridevano della sua battuta."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "riso",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈridere",
        "subtext": "",
        "id": "it_starter_verbs_174",
        "lang": "it"
    },
    {
        "word": "preoccuparsi",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😟",
        "form": "verb",
        "definitions": [
            {
                "text": "Pensare a problemi o cose spiacevoli che potrebbero accadere.",
                "examples": [
                    "Non preoccuparti, andrà tutto bene."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "preoccupato",
        "group": "are",
        "auxiliary": "essere",
        "transcription": "ˈpreoccuparsi",
        "subtext": "",
        "reflexive": true,
        "id": "it_starter_verbs_175",
        "lang": "it"
    },
    {
        "word": "suonare",
        "level": "starter",
        "theme": "social",
        "emoji": "👂",
        "form": "verb",
        "definitions": [
            {
                "text": "Sembrare qualcosa da quello che hai sentito o letto.",
                "examples": [
                    "Sembra una buona idea."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "suonato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈsuonare",
        "subtext": "",
        "v4": "suonando",
        "id": "it_starter_verbs_176",
        "lang": "it"
    },
    {
        "word": "compitare",
        "level": "starter",
        "theme": "classroom_language",
        "emoji": "🔤",
        "form": "verb",
        "definitions": [
            {
                "text": "Dire o scrivere le lettere di una parola nell'ordine corretto.",
                "examples": [
                    "Come si compita il tuo nome?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "compitato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈcompitare",
        "subtext": "",
        "v4": "compitando",
        "id": "it_starter_verbs_177",
        "lang": "it"
    },
    {
        "word": "indicare",
        "level": "starter",
        "theme": "classroom_language",
        "emoji": "☝️",
        "form": "verb",
        "definitions": [
            {
                "text": "Mostrare qualcosa tenendo il dito verso di esso.",
                "examples": [
                    "Indica la finestra."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "indicato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈindicare",
        "subtext": "",
        "v4": "indicando",
        "id": "it_starter_verbs_178",
        "lang": "it"
    },
    {
        "word": "gridare",
        "level": "starter",
        "theme": "classroom_language",
        "emoji": "📢",
        "form": "verb",
        "definitions": [
            {
                "text": "Dire qualcosa a voce molto alta.",
                "examples": [
                    "Non gridare in classe."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "gridato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈgridare",
        "subtext": "",
        "v4": "gridando",
        "id": "it_starter_verbs_179",
        "lang": "it"
    },
    {
        "word": "salutare",
        "level": "starter",
        "theme": "name_greeting",
        "emoji": "👋",
        "form": "verb",
        "definitions": [
            {
                "text": "Muovere la mano da un lato all'altro per dire ciao o arrivederci.",
                "examples": [
                    "Saluta il tuo amico con la mano."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "salutato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈsalutare",
        "subtext": "",
        "v4": "salutando",
        "id": "it_starter_verbs_180",
        "lang": "it"
    },
    {
        "word": "calciare",
        "level": "starter",
        "theme": "sports",
        "emoji": "🦶",
        "form": "verb",
        "definitions": [
            {
                "text": "Colpire qualcosa con il piede.",
                "examples": [
                    "Calcia la palla!"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "calciato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈcalciare",
        "subtext": "",
        "v4": "calciando",
        "id": "it_starter_verbs_181",
        "lang": "it"
    },
    {
        "word": "lanciare",
        "level": "starter",
        "theme": "sports",
        "emoji": "⚾",
        "form": "verb",
        "definitions": [
            {
                "text": "Far muovere qualcosa nell'aria spingendolo dalla mano.",
                "examples": [
                    "Puoi lanciarmi la palla?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "lanciato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈlanciare",
        "subtext": "",
        "v4": "lanciando",
        "id": "it_starter_verbs_182",
        "lang": "it"
    },
    {
        "word": "rimbalzare",
        "level": "starter",
        "theme": "sports",
        "emoji": "🏀",
        "form": "verb",
        "definitions": [
            {
                "text": "Muoversi verso l'alto o lontano dopo aver colpito una superficie.",
                "examples": [
                    "La palla rimbalza."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "rimbalzato",
        "group": "are",
        "auxiliary": "essere",
        "transcription": "ˈrimbalzare",
        "subtext": "",
        "v4": "rimbalzando",
        "id": "it_starter_verbs_183",
        "lang": "it"
    },
    {
        "word": "dipingere",
        "level": "starter",
        "theme": "hobbies_interests",
        "emoji": "🎨",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare un'immagine usando la pittura.",
                "examples": [
                    "Mi piace dipingere fiori."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "dipinto",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈdipingere",
        "subtext": "",
        "id": "it_starter_verbs_184",
        "lang": "it"
    },
    {
        "word": "saltellare",
        "level": "starter",
        "theme": "social",
        "emoji": "🐇",
        "form": "verb",
        "definitions": [
            {
                "text": "Saltare su un piede.",
                "examples": [
                    "Puoi saltellare come un coniglio?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "saltellato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈsaltellare",
        "subtext": "",
        "v4": "saltellando",
        "id": "it_starter_verbs_185",
        "lang": "it"
    },
    {
        "word": "saltare",
        "level": "starter",
        "theme": "social",
        "emoji": "🏃",
        "form": "verb",
        "definitions": [
            {
                "text": "Muoversi saltando da un piede all'altro.",
                "examples": [
                    "I bambini saltano la corda nel parco giochi."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "saltato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈsaltare",
        "subtext": "",
        "v4": "saltando",
        "id": "it_starter_verbs_186",
        "lang": "it"
    },
    {
        "word": "contare",
        "level": "starter",
        "theme": "numbers_0_9",
        "emoji": "🔢",
        "form": "verb",
        "definitions": [
            {
                "text": "Dire i numeri in ordine.",
                "examples": [
                    "Puoi contare da uno a dieci?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "contato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈcontare",
        "subtext": "",
        "v4": "contando",
        "id": "it_starter_verbs_187",
        "lang": "it"
    },
    {
        "word": "segnare",
        "level": "starter",
        "theme": "classroom_language",
        "emoji": "✅",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettere un segno (v) accanto a qualcosa per mostrare che è corretto.",
                "examples": [
                    "Segna la risposta corretta."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "segnato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈsegnare",
        "subtext": "",
        "v4": "segnando",
        "id": "it_starter_verbs_188",
        "lang": "it"
    },
    {
        "word": "barrare",
        "level": "starter",
        "theme": "classroom_language",
        "emoji": "❌",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettere un segno (X) accanto a qualcosa per mostrare che è sbagliato.",
                "examples": [
                    "Barra la risposta sbagliata."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "barrato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈbarrare",
        "subtext": "",
        "v4": "barrando",
        "id": "it_starter_verbs_189",
        "lang": "it"
    },
    {
        "word": "colorare",
        "level": "starter",
        "theme": "classroom_language",
        "emoji": "🖍️",
        "form": "verb",
        "definitions": [
            {
                "text": "Usare una penna o una matita per mettere il colore su un'immagine.",
                "examples": [
                    "Colora l'immagine di blu."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "colorato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈcolorare",
        "subtext": "",
        "v4": "colorando",
        "id": "it_starter_verbs_190",
        "lang": "it"
    },
    {
        "word": "tenere",
        "level": "starter",
        "theme": "work",
        "emoji": "🤲",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere o tenere qualcosa nelle mani o nelle braccia.",
                "examples": [
                    "Tieni il bambino con cura."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "tenuto",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈtenere",
        "subtext": "",
        "tenses": {
            "present_simple": {
                "positive": [
                    "tengo",
                    "tieni",
                    "tiene",
                    "teniamo",
                    "tenite",
                    "tengono"
                ]
            }
        },
        "id": "it_starter_verbs_191",
        "lang": "it"
    },
    {
        "word": "guidare",
        "level": "starter",
        "theme": "work",
        "emoji": "👤",
        "form": "verb",
        "definitions": [
            {
                "text": "Controllare un gruppo di persone, un paese o una situazione.",
                "examples": [
                    "Lei guida una piccola squadra."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "guidato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈguidare",
        "subtext": "",
        "v4": "guidando",
        "id": "it_starter_verbs_192",
        "lang": "it"
    },
    {
        "word": "combattere",
        "level": "starter",
        "theme": "emotions",
        "emoji": "⚔️",
        "form": "verb",
        "definitions": [
            {
                "text": "Usare la forza fisica per cercare di ferire qualcuno o vincere qualcosa.",
                "examples": [
                    "I due ragazzi stanno combattendo."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "combattuto",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈcombattere",
        "subtext": "",
        "id": "it_starter_verbs_193",
        "lang": "it"
    },
    {
        "word": "nascondere",
        "level": "starter",
        "theme": "social",
        "emoji": "🙈",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettere qualcosa o qualcuno in un posto dove non possono essere visti.",
                "examples": [
                    "Si nasconde dietro la porta."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "nascondo",
        "group": "ere",
        "auxiliary": "avere",
        "transcription": "ˈnascondere",
        "subtext": "",
        "id": "it_starter_verbs_194",
        "lang": "it"
    },
    {
        "word": "cercare",
        "level": "starter",
        "theme": "social",
        "emoji": "🔍",
        "form": "verb",
        "definitions": [
            {
                "text": "Cercare di trovare o ottenere qualcosa.",
                "examples": [
                    "Cerco le mie chiavi.",
                    "Cerco di capire."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "cercato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "tʃerˈkare",
        "subtext": "cercare di fare",
        "v4": "cercando",
        "id": "it_starter_verbs_195",
        "lang": "it"
    },
    {
        "word": "suonare",
        "level": "starter",
        "theme": "technology",
        "emoji": "🔔",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare un suono come una campana.",
                "examples": [
                    "Il telefono squilla."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "suonato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈsuonare",
        "subtext": "",
        "v4": "suonando",
        "id": "it_starter_verbs_196",
        "lang": "it"
    },
    {
        "word": "mandare un SMS",
        "level": "starter",
        "theme": "using_smartphone",
        "emoji": "📱",
        "form": "verb",
        "definitions": [
            {
                "text": "Inviare un messaggio da un telefono cellulare.",
                "examples": [
                    "Mandami un SMS quando arrivi."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "mandato un SMS",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈmandare un sms",
        "subtext": "",
        "id": "it_starter_verbs_197",
        "lang": "it"
    },
    {
        "word": "sussurrare",
        "level": "starter",
        "theme": "classroom_language",
        "emoji": "🤫",
        "form": "verb",
        "definitions": [
            {
                "text": "Parlare molto piano in modo che gli altri non possano sentirti.",
                "examples": [
                    "Mi ha sussurrato la risposta."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "sussurrato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈsussurrare",
        "subtext": "",
        "v4": "sussurrando",
        "id": "it_starter_verbs_198",
        "lang": "it"
    },
    {
        "word": "toccare",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🫫",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettere la mano o un'altra parte del corpo su qualcosa.",
                "examples": [
                    "Non toccare la vernice fresca!"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "toccato",
        "group": "are",
        "auxiliary": "avere",
        "transcription": "ˈtoccare",
        "subtext": "",
        "v4": "toccando",
        "id": "it_starter_verbs_199",
        "lang": "it"
    },
    {
        "word": "potere",
        "level": "starter",
        "theme": "language",
        "emoji": "💪",
        "subtext": "posso aiutare?",
        "form": "verb",
        "transcription": "poˈtere",
        "definitions": [
            {
                "text": "Essere in grado di fare qualcosa; avere il permesso.",
                "examples": [
                    "Posso entrare?",
                    "Non posso venire oggi."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "potuto",
        "group": "ere",
        "auxiliary": "avere",
        "tenses": {
            "present_simple": {
                "positive": [
                    "posso",
                    "puoi",
                    "può",
                    "possiamo",
                    "potete",
                    "possono"
                ]
            }
        },
        "id": "it_starter_verbs_200",
        "lang": "it"
    },
    {
        "word": "conoscere",
        "level": "starter",
        "theme": "people",
        "emoji": "🤝",
        "subtext": "conoscere qualcuno",
        "form": "verb",
        "transcription": "koˈnoʃʃere",
        "definitions": [
            {
                "text": "Avere familiarità con una persona, un luogo o una cosa.",
                "examples": [
                    "Conosco bene Roma.",
                    "Piacere di conoscerti."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "conosciuto",
        "group": "ere",
        "auxiliary": "avere",
        "v4": "conoscendo",
        "id": "it_starter_verbs_201",
        "lang": "it"
    },
    {
        "word": "riuscire",
        "level": "starter",
        "theme": "work",
        "emoji": "✅",
        "subtext": "riuscire a fare / non riesco a",
        "form": "verb",
        "transcription": "rjuˈʃire",
        "definitions": [
            {
                "text": "Essere in grado di fare qualcosa con successo.",
                "examples": [
                    "Riesco a finire il lavoro.",
                    "Non riesco a capire."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "riuscito",
        "group": "ire",
        "auxiliary": "essere",
        "id": "it_starter_verbs_202",
        "lang": "it"
    },
    {
        "word": "stare",
        "level": "starter",
        "theme": "name_greeting",
        "emoji": "🏠",
        "subtext": "stare bene / stare a casa",
        "form": "verb",
        "transcription": "ˈstare",
        "definitions": [
            {
                "text": "Trovarsi in un luogo o in una condizione.",
                "examples": [
                    "Come stai?",
                    "Sto bene, grazie."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "stato",
        "group": "are",
        "auxiliary": "essere",
        "tenses": {
            "present_simple": {
                "positive": [
                    "sto",
                    "stai",
                    "sta",
                    "stiamo",
                    "state",
                    "stanno"
                ]
            }
        },
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "stare"
        },
        "id": "it_starter_verbs_203",
        "lang": "it"
    },
    {
        "word": "uscire",
        "level": "starter",
        "theme": "work",
        "emoji": "🚪",
        "subtext": "uscire di casa / uscire con gli amici",
        "form": "verb",
        "transcription": "uʃˈʃire",
        "definitions": [
            {
                "text": "Andare fuori da un luogo.",
                "examples": [
                    "Esco di casa alle otto.",
                    "Usciamo stasera?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "uscito",
        "group": "ire",
        "auxiliary": "essere",
        "tenses": {
            "present_simple": {
                "positive": [
                    "esco",
                    "esci",
                    "esce",
                    "usciamo",
                    "uscite",
                    "escono"
                ]
            }
        },
        "id": "it_starter_verbs_204",
        "lang": "it"
    },
    {
        "word": "dovere",
        "level": "starter",
        "theme": "work",
        "emoji": "⚠️",
        "subtext": "dovere fare qualcosa",
        "form": "verb",
        "transcription": "doˈvere",
        "definitions": [
            {
                "text": "Essere obbligato a fare qualcosa.",
                "examples": [
                    "Devo andare al lavoro.",
                    "Dobbiamo finire il progetto."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "dovuto",
        "group": "ere",
        "auxiliary": "avere",
        "tenses": {
            "present_simple": {
                "positive": [
                    "devo",
                    "devi",
                    "deve",
                    "dobbiamo",
                    "dovete",
                    "devono"
                ]
            }
        },
        "id": "it_starter_verbs_205",
        "lang": "it"
    },
    {
        "word": "entrare",
        "level": "starter",
        "theme": "places",
        "emoji": "🚪",
        "subtext": "entrare in casa",
        "form": "verb",
        "transcription": "enˈtrare",
        "definitions": [
            {
                "text": "Andare all'interno di un luogo.",
                "examples": [
                    "Entro in ufficio alle nove."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "entrato",
        "group": "are",
        "auxiliary": "essere",
        "v4": "entrando",
        "id": "it_starter_verbs_206",
        "lang": "it"
    },
    {
        "word": "salire",
        "level": "starter",
        "theme": "public_transport",
        "emoji": "🪜",
        "subtext": "salire le scale / salire sull'autobus",
        "form": "verb",
        "transcription": "saˈlire",
        "definitions": [
            {
                "text": "Andare verso l'alto o su un mezzo di trasporto.",
                "examples": [
                    "Salgo sull'autobus."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "salito",
        "group": "ire",
        "auxiliary": "essere",
        "id": "it_starter_verbs_207",
        "lang": "it"
    },
    {
        "word": "scendere",
        "level": "starter",
        "theme": "public_transport",
        "emoji": "📉",
        "subtext": "scendere le scale / scendere dal treno",
        "form": "verb",
        "transcription": "ˈʃendere",
        "definitions": [
            {
                "text": "Andare verso il basso o giù da un mezzo di trasporto.",
                "examples": [
                    "Scendo alla prossima fermata."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "sceso",
        "group": "ere",
        "auxiliary": "essere",
        "id": "it_starter_verbs_208",
        "lang": "it"
    },
    {
        "word": "accendere",
        "level": "starter",
        "theme": "technology",
        "emoji": "💡",
        "form": "verb",
        "transcription": "atˈtʃɛndere",
        "definitions": [
            {
                "text": "Far funzionare un apparecchio o una luce.",
                "examples": [
                    "Accendi la luce, per favore.",
                    "Lui accende il computer alle nove."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "acceso",
        "group": "ere",
        "auxiliary": "avere",
        "subtext": "",
        "id": "it_starter_verbs_209",
        "lang": "it",
        "antonyms": [
            "spegnere"
        ]
    },
    {
        "word": "spegnere",
        "level": "starter",
        "theme": "technology",
        "emoji": "🌑",
        "form": "verb",
        "transcription": "ˈspeɲɲere",
        "definitions": [
            {
                "text": "Far cessare di funzionare un apparecchio o una luce.",
                "examples": [
                    "Non dimenticare di spegnere le luci.",
                    "Spegne il telefono durante le riunioni."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "spento",
        "group": "ere",
        "auxiliary": "avere",
        "subtext": "",
        "id": "it_starter_verbs_210",
        "lang": "it",
        "antonyms": [
            "accendere"
        ]
    },
    {
        "word": "respirare",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🫁",
        "form": "verb",
        "transcription": "respiˈrare",
        "definitions": [
            {
                "text": "Prendere aria nei polmoni e buttarla fuori.",
                "examples": [
                    "Respira profondamente.",
                    "È difficile respirare qui dentro."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "respirato",
        "group": "are",
        "auxiliary": "avere",
        "subtext": "",
        "v4": "respirando",
        "id": "it_starter_verbs_211",
        "lang": "it"
    },
    {
        "word": "tossire",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "😷",
        "form": "verb",
        "transcription": "tosˈsire",
        "definitions": [
            {
                "text": "Espellere aria dai polmoni con un rumore improvviso.",
                "examples": [
                    "Lui tossisce perché ha il raffreddore.",
                    "Smetti di tossire!"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "tossito",
        "group": "ire",
        "auxiliary": "avere",
        "subtext": "",
        "v4": "tossendo",
        "id": "it_starter_verbs_212",
        "lang": "it"
    },
    {
        "word": "starnutire",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "🤧",
        "form": "verb",
        "transcription": "starnuˈtire",
        "definitions": [
            {
                "text": "Espellere aria dal naso e dalla bocca in modo improvviso e rumoroso.",
                "examples": [
                    "Salute! Hai starnutito?",
                    "Starnutisco sempre quando c'è polvere."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "starnutito",
        "group": "ire",
        "auxiliary": "avere",
        "subtext": "",
        "v4": "starnutendo",
        "id": "it_starter_verbs_213",
        "lang": "it"
    },
    {
        "word": "sbadigliare",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🥱",
        "form": "verb",
        "transcription": "zbadidˈʎare",
        "definitions": [
            {
                "text": "Aprire la bocca involontariamente per sonno o noia.",
                "examples": [
                    "Ha sbadigliato durante la riunione.",
                    "Sbadiglio perché sono stanco."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "sbadigliato",
        "group": "are",
        "auxiliary": "avere",
        "subtext": "",
        "v4": "sbadigliando",
        "id": "it_starter_verbs_214",
        "lang": "it"
    },
    {
        "word": "arrampicarsi",
        "level": "starter",
        "theme": "nature",
        "emoji": "🧗",
        "form": "verb",
        "transcription": "arrampiˈkarsi",
        "definitions": [
            {
                "text": "Salire su qualcosa usando mani e piedi.",
                "examples": [
                    "Il gatto si arrampica sull'albero.",
                    "Ci arrampichiamo sulla collina per vedere il panorama."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "arrampicato",
        "group": "are",
        "auxiliary": "essere",
        "subtext": "",
        "reflexive": true,
        "v4": "arrampicaando",
        "id": "it_starter_verbs_215",
        "lang": "it"
    },
    {
        "word": "vestirsi",
        "level": "starter",
        "theme": "work",
        "emoji": "👗",
        "form": "verb",
        "transcription": "vesˈtirsi",
        "definitions": [
            {
                "text": "Mettersi i vestiti.",
                "examples": [
                    "Mi vesto alle sette.",
                    "Si veste sempre di nero."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "vestito",
        "group": "are",
        "auxiliary": "essere",
        "subtext": "",
        "reflexive": true,
        "v4": "vestiando",
        "id": "it_starter_verbs_216",
        "lang": "it",
        "antonyms": [
            "spogliarsi"
        ]
    },
    {
        "word": "spogliarsi",
        "level": "starter",
        "theme": "work",
        "emoji": "👕",
        "form": "verb",
        "transcription": "spoʎˈʎarsi",
        "definitions": [
            {
                "text": "Togliersi i vestiti.",
                "examples": [
                    "Si spoglia e va a letto.",
                    "Spogliati e fai il bagno."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "spogliato",
        "group": "are",
        "auxiliary": "essere",
        "subtext": "",
        "reflexive": true,
        "v4": "spogliaando",
        "id": "it_starter_verbs_217",
        "lang": "it",
        "antonyms": [
            "vestirsi"
        ]
    },
    {
        "word": "riempire",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🫗",
        "form": "verb",
        "transcription": "riemˈpire",
        "definitions": [
            {
                "text": "Rendere pieno qualcosa.",
                "examples": [
                    "Per favore riempi il bicchiere d'acqua.",
                    "Riempi il modulo con i tuoi dati."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "riempito",
        "group": "ire",
        "auxiliary": "avere",
        "subtext": "",
        "v4": "riempendo",
        "id": "it_starter_verbs_218",
        "lang": "it"
    },
    {
        "word": "desiderare",
        "level": "starter",
        "theme": "greetings_social_phrases",
        "emoji": "🤞",
        "form": "verb",
        "transcription": "dezideˈrare",
        "definitions": [
            {
                "text": "Volere qualcosa che si ritiene piacevole o necessario.",
                "examples": [
                    "Desidero un po' di pace.",
                    "Cosa desidera per cena?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "desiderato",
        "group": "are",
        "auxiliary": "avere",
        "subtext": "",
        "v4": "desiderando",
        "id": "it_starter_verbs_219",
        "lang": "it"
    },
    {
        "word": "descrivere",
        "level": "starter",
        "theme": "social",
        "emoji": "💬",
        "form": "verb",
        "transcription": "deˈskrivere",
        "definitions": [
            {
                "text": "Dire o scrivere com'è qualcuno o qualcosa.",
                "examples": [
                    "Puoi descrivere la tua casa?",
                    "Ha descritto il suo viaggio nei minimi dettagli."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "descritto",
        "group": "ere",
        "auxiliary": "avere",
        "subtext": "",
        "id": "it_starter_verbs_220",
        "lang": "it"
    },
    {
        "word": "annotare",
        "level": "starter",
        "theme": "work",
        "emoji": "📝",
        "form": "verb",
        "transcription": "annoˈtare",
        "definitions": [
            {
                "text": "Scrivere qualcosa per ricordarsene.",
                "examples": [
                    "Annota l'ora dell'appuntamento.",
                    "Prendi appunti durante la lezione."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "annotato",
        "group": "are",
        "auxiliary": "avere",
        "subtext": "",
        "v4": "annotando",
        "id": "it_starter_verbs_221",
        "lang": "it"
    },
    {
        "word": "produrre",
        "level": "starter",
        "theme": "work",
        "emoji": "🏭",
        "form": "verb",
        "transcription": "proˈdurre",
        "definitions": [
            {
                "text": "Creare o fabbricare qualcosa.",
                "examples": [
                    "L'azienda produce auto."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "prodotto",
        "group": "are",
        "auxiliary": "avere",
        "subtext": "",
        "id": "it_starter_verbs_222",
        "lang": "it"
    },
    {
        "word": "progettare",
        "level": "starter",
        "theme": "work",
        "emoji": "📐",
        "form": "verb",
        "transcription": "prodʒetˈtare",
        "definitions": [
            {
                "text": "Fare un progetto per qualcosa.",
                "examples": [
                    "L'ingegnere progetta un ponte."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "progettato",
        "group": "are",
        "auxiliary": "avere",
        "subtext": "",
        "v4": "progettando",
        "id": "it_starter_verbs_223",
        "lang": "it"
    },
    {
        "word": "funzionare",
        "level": "starter",
        "theme": "technology",
        "emoji": "⚙️",
        "form": "verb",
        "transcription": "funtsjoˈnare",
        "definitions": [
            {
                "text": "Operare correttamente.",
                "examples": [
                    "Il computer non funziona."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "funzionato",
        "group": "are",
        "auxiliary": "avere",
        "subtext": "",
        "v4": "funzionando",
        "id": "it_starter_verbs_224",
        "lang": "it"
    },
    {
        "word": "smettere",
        "level": "starter",
        "theme": "work",
        "emoji": "🛑",
        "form": "verb",
        "transcription": "ˈzmettere",
        "definitions": [
            {
                "text": "Finire di fare qualcosa.",
                "examples": [
                    "Smetti di parlare!",
                    "Ha smesso di piovere."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "smesso",
        "group": "ere",
        "auxiliary": "avere",
        "subtext": "smettere di",
        "id": "it_starter_verbs_225",
        "lang": "it"
    },
    {
        "word": "completare",
        "level": "starter",
        "theme": "work",
        "emoji": "✅",
        "form": "verb",
        "transcription": "kompleˈtare",
        "definitions": [
            {
                "text": "Rendere completo qualcosa.",
                "examples": [
                    "Completa il modulo, per favore."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "completato",
        "group": "are",
        "auxiliary": "avere",
        "subtext": "",
        "v4": "completando",
        "id": "it_starter_verbs_226",
        "lang": "it"
    }
];
    const lang = "it";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);

})();