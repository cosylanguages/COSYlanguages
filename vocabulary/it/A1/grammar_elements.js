(function() {
    const lang = "it";
    const data = [
    {
        "word": "in",
        "level": "starter",
        "theme": "language",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "preposition",
        "plural": "",
        "definitions": [
            {
                "text": "All'interno di.",
                "examples": [
                    "Il gatto è nella scatola."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "transcription": "ˈin",
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_008"
    },
    {
        "word": "su",
        "level": "starter",
        "theme": "language",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "preposition",
        "plural": "",
        "definitions": [
            {
                "text": "A contatto con il sopra di.",
                "examples": [
                    "Il libro è sul tavolo."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "transcription": "ˈsu",
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_009"
    },
    {
        "word": "a",
        "level": "starter",
        "theme": "language",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "preposition",
        "plural": "",
        "definitions": [
            {
                "text": "Luogo o direzione.",
                "examples": [
                    "Vado a Roma."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "transcription": "ˈa",
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_010"
    },
    {
        "word": "sotto",
        "level": "starter",
        "theme": "language",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "preposition",
        "plural": "",
        "definitions": [
            {
                "text": "Al di sotto di.",
                "examples": [
                    "Il cane è sotto il tavolo."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "transcription": "ˈsotto",
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_011"
    },
    {
        "word": "e",
        "level": "starter",
        "theme": "language",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "conjunction",
        "plural": "",
        "definitions": [
            {
                "text": "Aggiunge qualcosa.",
                "examples": [
                    "Tu ed io."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "transcription": "ˈe",
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_012"
    },
    {
        "word": "ma",
        "level": "starter",
        "theme": "language",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "conjunction",
        "plural": "",
        "definitions": [
            {
                "text": "Indica una opposizione.",
                "examples": [
                    "È buono ma costoso."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "transcription": "ˈma",
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_013"
    },
    {
        "word": "perché",
        "level": "starter",
        "theme": "language",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "conjunction",
        "plural": "",
        "definitions": [
            {
                "text": "Dà una ragione.",
                "examples": [
                    "Dormo perché sono stanco."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "transcription": "perˈke",
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_014"
    },
    {
        "word": "chi",
        "level": "starter",
        "theme": "language",
        "article": "",
        "gender": "",
        "emoji": "👤",
        "form": "pronoun",
        "plural": "",
        "definitions": [
            {
                "text": "Chiede di una persona.",
                "examples": [
                    "Chi è lì?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "transcription": "ˈki",
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_015"
    },
    {
        "word": "io",
        "level": "starter",
        "theme": "people",
        "form": "pronoun",
        "transcription": "ˈio",
        "definitions": [
            {
                "text": "Usato da chi parla per riferirsi a se stesso.",
                "examples": [
                    "Io sono uno studente.",
                    "Io mangio una mela."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "pronome soggetto",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_people_005",
        "emoji": "✨"
    },
    {
        "word": "tu",
        "level": "starter",
        "theme": "people",
        "form": "pronoun",
        "transcription": "ˈtu",
        "definitions": [
            {
                "text": "Usato per riferirsi alla persona a cui si parla.",
                "examples": [
                    "Tu sei gentile.",
                    "Come stai tu?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "pronome soggetto",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_people_006",
        "emoji": "✨"
    },
    {
        "word": "lui",
        "level": "starter",
        "theme": "people",
        "form": "pronoun",
        "transcription": "ˈlui",
        "definitions": [
            {
                "text": "Usato per riferirsi a un uomo o un ragazzo di cui si parla.",
                "examples": [
                    "Lui è mio fratello.",
                    "Lui lavora in ufficio."
                ]
            }
        ],
        "synonyms": [
            "egli"
        ],
        "subtext": "pronome soggetto maschile",
        "antonyms": [
            "lei"
        ],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_people_007",
        "emoji": "✨"
    },
    {
        "word": "lei",
        "level": "starter",
        "theme": "people",
        "form": "pronoun",
        "transcription": "ˈlɛi",
        "definitions": [
            {
                "text": "Usato per riferirsi a una donna o una ragazza di cui si parla.",
                "examples": [
                    "Lei è mia sorella.",
                    "Lei ama ballare."
                ]
            }
        ],
        "synonyms": [
            "ella"
        ],
        "subtext": "pronome soggetto femminile",
        "antonyms": [
            "lui"
        ],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_people_008",
        "emoji": "✨"
    },
    {
        "word": "noi",
        "level": "starter",
        "theme": "people",
        "form": "pronoun",
        "transcription": "ˈnɔi",
        "definitions": [
            {
                "text": "Usato per riferirsi a chi parla e ad altre persone.",
                "examples": [
                    "Noi siamo amici.",
                    "Noi viviamo a Roma."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "pronome soggetto plurale",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_people_009",
        "emoji": "✨"
    },
    {
        "word": "voi",
        "level": "starter",
        "theme": "people",
        "form": "pronoun",
        "transcription": "ˈvoi",
        "definitions": [
            {
                "text": "Usato per riferirsi alle persone a cui si parla.",
                "examples": [
                    "Voi siete bravi.",
                    "Cosa fate voi?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "pronome soggetto plurale",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_people_010",
        "emoji": "✨"
    },
    {
        "word": "loro",
        "level": "starter",
        "theme": "people",
        "form": "pronoun",
        "transcription": "ˈloro",
        "definitions": [
            {
                "text": "Usato per riferirsi a più persone o cose di cui si parla.",
                "examples": [
                    "Loro sono i miei genitori.",
                    "Loro lavorano insieme."
                ]
            }
        ],
        "synonyms": [
            "essi",
            "esse"
        ],
        "subtext": "pronome soggetto plurale",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_people_011",
        "emoji": "✨"
    },
    {
        "word": "un",
        "level": "starter",
        "theme": "people",
        "form": "determiner",
        "transcription": "ˈun",
        "definitions": [
            {
                "text": "Articolo usato prima di un nome maschile singolare.",
                "examples": [
                    "Ho un cane.",
                    "Lui è un medico."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "articolo indeterminativo maschile",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_people_012",
        "emoji": "✨"
    },
    {
        "word": "una",
        "level": "starter",
        "theme": "people",
        "form": "determiner",
        "transcription": "ˈuna",
        "definitions": [
            {
                "text": "Articolo usato prima di un nome femminile singolare.",
                "examples": [
                    "Ho una macchina.",
                    "Lei è una dottoressa."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "articolo indeterminativo femminile",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_people_013",
        "emoji": "✨"
    },
    {
        "word": "il",
        "level": "starter",
        "theme": "people",
        "form": "determiner",
        "transcription": "ˈil",
        "definitions": [
            {
                "text": "Articolo usato per riferirsi a una cosa o persona maschile specifica.",
                "examples": [
                    "Il libro è sul tavolo.",
                    "Il sole è luminoso."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "articolo determinativo maschile",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_people_014",
        "emoji": "✨"
    },
    {
        "word": "la",
        "level": "starter",
        "theme": "people",
        "form": "determiner",
        "transcription": "ˈla",
        "definitions": [
            {
                "text": "Articolo usato per riferirsi a una cosa o persona femminile specifica.",
                "examples": [
                    "La casa è grande.",
                    "La mela è rossa."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "articolo determinativo femminile",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_people_015",
        "emoji": "✨"
    },
    {
        "word": "mai",
        "level": "starter",
        "theme": "time",
        "emoji": "❌",
        "form": "adverb",
        "transcription": "ˈmai",
        "definitions": [
            {
                "text": "In nessun tempo.",
                "examples": [
                    "Non arrivo mai in ritardo al lavoro."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "0% del tempo",
        "antonyms": [
            "sempre"
        ],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_time_009"
    },
    {
        "word": "a volte",
        "level": "starter",
        "theme": "time",
        "emoji": "🌗",
        "form": "adverb",
        "transcription": "a ˈvolte",
        "definitions": [
            {
                "text": "In alcune occasioni, ma non sempre.",
                "examples": [
                    "A volte vado al lavoro a piedi."
                ]
            }
        ],
        "synonyms": [
            "qualche volta"
        ],
        "subtext": "occasionalmente",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_time_010"
    },
    {
        "word": "spesso",
        "level": "starter",
        "theme": "time",
        "emoji": "📈",
        "form": "adverb",
        "transcription": "ˈspɛsso",
        "definitions": [
            {
                "text": "Molte volte; frequentemente.",
                "examples": [
                    "Abbiamo spesso riunioni il lunedì."
                ]
            }
        ],
        "synonyms": [
            "frequentemente"
        ],
        "subtext": "frequentemente",
        "antonyms": [
            "raramente"
        ],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_time_011"
    },
    {
        "word": "di solito",
        "level": "starter",
        "theme": "time",
        "emoji": "🔄",
        "form": "adverb",
        "transcription": "di soˈlito",
        "definitions": [
            {
                "text": "Nel modo che accade più spesso.",
                "examples": [
                    "Di solito mi sveglio alle sette."
                ]
            }
        ],
        "synonyms": [
            "normalmente",
            "solitamente"
        ],
        "subtext": "normalmente",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_time_012"
    },
    {
        "word": "o",
        "level": "starter",
        "theme": "language",
        "form": "conjunction",
        "transcription": "ˈo",
        "definitions": [
            {
                "text": "Usato per introdurre un'alternativa.",
                "examples": [
                    "Vuoi caffè o tè?"
                ]
            }
        ],
        "synonyms": [
            "oppure"
        ],
        "subtext": "congiunzione disgiuntiva",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_016",
        "emoji": "✨"
    },
    {
        "word": "quindi",
        "level": "starter",
        "theme": "language",
        "form": "conjunction",
        "transcription": "ˈkwindi",
        "definitions": [
            {
                "text": "Esprime una conseguenza.",
                "examples": [
                    "Sono stanco, quindi vado a letto."
                ]
            }
        ],
        "synonyms": [
            "perciò",
            "dunque"
        ],
        "subtext": "congiunzione conclusiva",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_017",
        "emoji": "✨"
    },
    {
        "word": "se",
        "level": "starter",
        "theme": "language",
        "form": "conjunction",
        "transcription": "ˈse",
        "definitions": [
            {
                "text": "Introduce una condizione.",
                "examples": [
                    "Se piove, resto a casa."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "congiunzione condizionale",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_018",
        "emoji": "✨"
    },
    {
        "word": "cosa",
        "level": "starter",
        "theme": "language",
        "emoji": "❓",
        "form": "pronoun",
        "transcription": "ˈkɔza",
        "definitions": [
            {
                "text": "Usato per chiedere informazioni su qualcosa.",
                "examples": [
                    "Che cosa fai?",
                    "Cosa vuoi mangiare?"
                ]
            }
        ],
        "synonyms": [
            "che cosa",
            "che"
        ],
        "subtext": "pronome interrogativo",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_019"
    },
    {
        "word": "come",
        "level": "starter",
        "theme": "language",
        "emoji": "❓",
        "form": "adverb",
        "transcription": "ˈkome",
        "definitions": [
            {
                "text": "Usato per chiedere in che modo.",
                "examples": [
                    "Come stai?",
                    "Come si dice questo in italiano?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "avverbio interrogativo",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_020"
    },
    {
        "word": "con",
        "level": "starter",
        "theme": "people",
        "form": "preposition",
        "transcription": "ˈkon",
        "definitions": [
            {
                "text": "In compagnia di o per mezzo di.",
                "examples": [
                    "Vado al cinema con Marco.",
                    "Scrivo con la penna."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "preposizione semplice",
        "antonyms": [
            "senza"
        ],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_people_016",
        "emoji": "✨"
    },
    {
        "word": "per",
        "level": "starter",
        "theme": "people",
        "form": "preposition",
        "transcription": "ˈper",
        "definitions": [
            {
                "text": "Indica scopo, destinazione o durata.",
                "examples": [
                    "Questo regalo è per te.",
                    "Il treno per Milano."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "preposizione semplice",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_people_017",
        "emoji": "✨"
    },
    {
        "word": "di",
        "level": "starter",
        "theme": "people",
        "form": "preposition",
        "transcription": "ˈdi",
        "definitions": [
            {
                "text": "Indica possesso, origine o materia.",
                "examples": [
                    "Il libro di Marco.",
                    "Un bicchiere di vino."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "preposizione semplice",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_people_018",
        "emoji": "✨"
    },
    {
        "word": "da",
        "level": "starter",
        "theme": "people",
        "form": "preposition",
        "transcription": "ˈda",
        "definitions": [
            {
                "text": "Indica provenienza, tempo o fine.",
                "examples": [
                    "Vengo da Roma.",
                    "Lavoro qui da un anno."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "preposizione semplice",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_people_019",
        "emoji": "✨"
    },
    {
        "word": "tra",
        "level": "starter",
        "theme": "language",
        "form": "preposition",
        "transcription": "ˈtra",
        "definitions": [
            {
                "text": "Indica una posizione intermedia nello spazio o nel tempo.",
                "examples": [
                    "La banca è tra la scuola e il negozio.",
                    "Arrivo tra dieci minuti."
                ]
            }
        ],
        "synonyms": [
            "fra"
        ],
        "subtext": "preposizione semplice",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_021",
        "emoji": "✨"
    },
    {
        "word": "fra",
        "level": "starter",
        "theme": "language",
        "form": "preposition",
        "transcription": "ˈfra",
        "definitions": [
            {
                "text": "Indica una posizione intermedia nello spazio o nel tempo.",
                "examples": [
                    "Siamo fra amici.",
                    "Finisco fra un'ora."
                ]
            }
        ],
        "synonyms": [
            "tra"
        ],
        "subtext": "preposizione semplice",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_022",
        "emoji": "✨"
    },
    {
        "word": "uno",
        "level": "starter",
        "theme": "people",
        "form": "determiner",
        "transcription": "ˈuno",
        "definitions": [
            {
                "text": "Articolo indeterminativo usato prima di nomi maschili che iniziano con s+consonante, z, ps, gn, x.",
                "examples": [
                    "Uno studente.",
                    "Uno zaino."
                ]
            }
        ],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_people_020",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "unus",
            "origin_meaning": "one"
        },
        "emoji": "✨"
    },
    {
        "word": "lo",
        "level": "starter",
        "theme": "people",
        "form": "determiner",
        "transcription": "ˈlo",
        "definitions": [
            {
                "text": "Articolo determinativo maschile singolare usato prima di s+consonante, z, ps, gn, x.",
                "examples": [
                    "Lo studente.",
                    "Lo zaino."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "articolo determinativo maschile",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_people_021",
        "emoji": "✨"
    },
    {
        "word": "gli",
        "level": "starter",
        "theme": "people",
        "form": "determiner",
        "transcription": "ˈʎi",
        "definitions": [
            {
                "text": "Articolo determinativo maschile plurale usato prima di vocali o s+consonante, z, ps, gn, x.",
                "examples": [
                    "Gli amici.",
                    "Gli studenti."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "articolo determinativo maschile plurale",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_people_022",
        "emoji": "✨"
    },
    {
        "word": "le",
        "level": "starter",
        "theme": "people",
        "form": "determiner",
        "transcription": "ˈle",
        "definitions": [
            {
                "text": "Articolo determinativo femminile plurale.",
                "examples": [
                    "Le amiche.",
                    "Le chiavi."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "articolo determinativo femminile plurale",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_people_023",
        "emoji": "✨"
    },
    {
        "word": "quasi",
        "level": "starter",
        "theme": "describing",
        "form": "adverb",
        "transcription": "ˈkwazi",
        "definitions": [
            {
                "text": "Indica che manca poco a una condizione o quantità.",
                "examples": [
                    "È quasi mezzogiorno.",
                    "Ho quasi finito."
                ]
            }
        ],
        "synonyms": [
            "circa"
        ],
        "subtext": "avverbio di quantità",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_describing_001",
        "emoji": "✨"
    },
    {
        "word": "forse",
        "level": "starter",
        "theme": "language",
        "emoji": "❓",
        "form": "adverb",
        "transcription": "ˈfɔrse",
        "definitions": [
            {
                "text": "Esprime incertezza o possibilità.",
                "examples": [
                    "Forse vengo domani.",
                    "Forse hai ragione."
                ]
            }
        ],
        "synonyms": [
            "probabilmente"
        ],
        "subtext": "avverbio di dubbio",
        "antonyms": [
            "sicuramente"
        ],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_023"
    },
    {
        "word": "già",
        "level": "starter",
        "theme": "time",
        "form": "adverb",
        "transcription": "ˈdʒa",
        "definitions": [
            {
                "text": "Indica che un'azione è avvenuta prima del previsto.",
                "examples": [
                    "Ho già mangiato.",
                    "Sei già qui?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "avverbio di tempo",
        "antonyms": [
            "ancora"
        ],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_time_013",
        "emoji": "✨"
    },
    {
        "word": "adesso",
        "level": "starter",
        "theme": "language",
        "emoji": "⏰",
        "form": "adverb",
        "transcription": "aˈdɛsso",
        "definitions": [
            {
                "text": "Nel momento presente.",
                "examples": [
                    "Devo andare adesso.",
                    "Adesso sono in ufficio."
                ]
            }
        ],
        "synonyms": [
            "ora"
        ],
        "subtext": "avverbio di tempo",
        "antonyms": [
            "dopo",
            "prima"
        ],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_024"
    },
    {
        "word": "dopo",
        "level": "starter",
        "theme": "language",
        "emoji": "⏭️",
        "form": "adverb",
        "transcription": "ˈdopo",
        "definitions": [
            {
                "text": "In un momento successivo.",
                "examples": [
                    "Ci vediamo dopo.",
                    "Dopo il lavoro vado in palestra."
                ]
            }
        ],
        "synonyms": [
            "poi"
        ],
        "subtext": "avverbio di tempo",
        "antonyms": [
            "prima",
            "adesso"
        ],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_025"
    },
    {
        "word": "prima",
        "level": "starter",
        "theme": "language",
        "emoji": "⏮️",
        "form": "adverb",
        "transcription": "ˈprima",
        "definitions": [
            {
                "text": "In un momento precedente.",
                "examples": [
                    "Faccio colazione prima di uscire.",
                    "Sono arrivato prima di te."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "avverbio di tempo",
        "antonyms": [
            "dopo"
        ],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_026"
    },
    {
        "word": "accanto a",
        "level": "starter",
        "theme": "language",
        "emoji": "👫",
        "form": "preposition",
        "transcription": "akˈkanto a",
        "definitions": [
            {
                "text": "Molto vicino a qualcuno o qualcosa.",
                "examples": [
                    "Lui è seduto accanto a me."
                ]
            }
        ],
        "synonyms": [
            "vicino a"
        ],
        "subtext": "locuzione preposizionale",
        "antonyms": [
            "lontano da"
        ],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_027"
    },
    {
        "word": "davanti a",
        "level": "starter",
        "theme": "language",
        "emoji": "🚶",
        "form": "preposition",
        "transcription": "daˈvanti a",
        "definitions": [
            {
                "text": "In una posizione più avanzata rispetto a qualcosa.",
                "examples": [
                    "C'è una fermata dell'autobus davanti alla scuola."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "locuzione preposizionale",
        "antonyms": [
            "dietro a"
        ],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_028"
    },
    {
        "word": "dietro a",
        "level": "starter",
        "theme": "language",
        "emoji": "🫣",
        "form": "preposition",
        "transcription": "ˈdjɛtro a",
        "definitions": [
            {
                "text": "Nella parte posteriore di qualcosa.",
                "examples": [
                    "La macchina è dietro alla casa."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "locuzione preposizionale",
        "antonyms": [
            "davanti a"
        ],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_029"
    },
    {
        "word": "tutto",
        "level": "starter",
        "theme": "describing",
        "form": "pronoun",
        "transcription": "ˈtutto",
        "feminine": "tutta",
        "plural": "tutti",
        "femininePlural": "tutte",
        "definitions": [
            {
                "text": "L'intera quantità o numero di qualcosa.",
                "examples": [
                    "Tutto è pronto.",
                    "Ciao a tutti!"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [
            "niente",
            "nulla"
        ],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_describing_002",
        "emoji": "✨"
    },
    {
        "word": "niente",
        "level": "starter",
        "theme": "describing",
        "form": "pronoun",
        "transcription": "ˈnjɛnte",
        "definitions": [
            {
                "text": "Nessuna cosa.",
                "examples": [
                    "Non ho niente.",
                    "Niente di nuovo."
                ]
            }
        ],
        "synonyms": [
            "nulla"
        ],
        "subtext": "",
        "antonyms": [
            "tutto",
            "qualcosa"
        ],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_describing_003",
        "emoji": "✨"
    },
    {
        "word": "qualcosa",
        "level": "starter",
        "theme": "describing",
        "form": "pronoun",
        "transcription": "kwalˈkɔza",
        "definitions": [
            {
                "text": "Una cosa non specificata.",
                "examples": [
                    "Vuoi qualcosa da bere?",
                    "Ho qualcosa per te."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [
            "niente"
        ],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_describing_004",
        "emoji": "✨"
    },
    {
        "word": "sopra",
        "level": "starter",
        "theme": "language",
        "form": "preposition",
        "transcription": "ˈsopra",
        "definitions": [
            {
                "text": "In una posizione più alta rispetto a qualcosa.",
                "examples": [
                    "Il libro è sopra il tavolo."
                ]
            }
        ],
        "synonyms": [
            "su"
        ],
        "subtext": "",
        "antonyms": [
            "sotto"
        ],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_030",
        "emoji": "✨"
    },
    {
        "word": "dentro",
        "level": "starter",
        "theme": "language",
        "form": "preposition",
        "transcription": "ˈdentro",
        "definitions": [
            {
                "text": "Nella parte interna.",
                "examples": [
                    "Il gatto è dentro la scatola."
                ]
            }
        ],
        "synonyms": [
            "in"
        ],
        "subtext": "",
        "antonyms": [
            "fuori"
        ],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_031",
        "emoji": "✨"
    },
    {
        "word": "fuori",
        "level": "starter",
        "theme": "language",
        "form": "preposition",
        "transcription": "ˈfwɔri",
        "definitions": [
            {
                "text": "Nella parte esterna.",
                "examples": [
                    "Vado fuori.",
                    "I bambini giocano fuori."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [
            "dentro"
        ],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_032",
        "emoji": "✨"
    },
    {
        "word": "intorno",
        "level": "starter",
        "theme": "language",
        "form": "preposition",
        "transcription": "inˈtorno",
        "definitions": [
            {
                "text": "In cerchio o in varie parti rispetto a un centro.",
                "examples": [
                    "Siamo seduti intorno al tavolo."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "intorno a",
        "antonyms": [],
        "lang": "it",
        "sub_theme": null,
        "id": "it_starter_language_033",
        "emoji": "✨"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
