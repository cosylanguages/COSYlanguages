(function() {
    const lang = "it";
    const data = [
    {
        "word": "studente",
        "level": "starter",
        "theme": "school",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🧑‍🎓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "studenti",
        "definitions": [
            {
                "text": "Persona che studia.",
                "examples": [
                    "Sono uno studente."
                ]
            }
        ],
        "partitive": "dello",
        "transcription": "stuˈdɛnte",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_school_001"
    },
    {
        "word": "compagno di classe",
        "level": "starter",
        "theme": "school",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "compagni di classe",
        "definitions": [
            {
                "text": "Persona nella stessa classe.",
                "examples": [
                    "Il mio compagno è simpatico."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "komˈpaɲɲo di ˈklasse",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_school_002"
    },
    {
        "word": "università",
        "level": "starter",
        "theme": "types_of_education",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🎓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "università",
        "definitions": [
            {
                "text": "Scuola superiore.",
                "examples": [
                    "Vado all'università."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "universiˈta",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_types_of_education_001"
    },
    {
        "word": "lingua",
        "level": "starter",
        "theme": "school",
        "article": "la",
        "gender": "feminine",
        "emoji": "🗣️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "lingue",
        "definitions": [
            {
                "text": "Ciò che si parla.",
                "examples": [
                    "L'italiano è una lingua."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈlingua",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "lingua"
        },
        "lang": "it",
        "id": "it_starter_school_003"
    },
    {
        "word": "parola",
        "level": "starter",
        "theme": "school",
        "article": "la",
        "gender": "feminine",
        "emoji": "📝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "parole",
        "definitions": [
            {
                "text": "Unità del linguaggio.",
                "examples": [
                    "Una parola difficile."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "paˈrɔla",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_school_004"
    },
    {
        "word": "frase",
        "level": "starter",
        "theme": "school",
        "article": "la",
        "gender": "feminine",
        "emoji": "📝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "frasi",
        "definitions": [
            {
                "text": "Insieme di parole.",
                "examples": [
                    "Fai una frase."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈfraze",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_school_005"
    },
    {
        "word": "errore",
        "level": "starter",
        "theme": "school",
        "article": "l'",
        "gender": "masculine",
        "emoji": "❌",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "errori",
        "definitions": [
            {
                "text": "Sbaglio.",
                "examples": [
                    "Fare un errore."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "ˈerrore",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_school_006"
    },
    {
        "word": "sbaglio",
        "level": "starter",
        "theme": "school",
        "article": "lo",
        "gender": "masculine",
        "emoji": "⚠️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sbagli",
        "definitions": [
            {
                "text": "Mancanza o errore.",
                "examples": [
                    "Uno sbaglio di grammatica."
                ]
            }
        ],
        "partitive": "dello",
        "transcription": "ˈzbaʎʎo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_school_007"
    },
    {
        "word": "quaderno",
        "level": "starter",
        "theme": "school_stationery",
        "article": "il",
        "gender": "masculine",
        "emoji": "📓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "quaderni",
        "transcription": "kwaˈdɛrno",
        "definitions": [
            {
                "text": "Insieme di fogli di carta rilegati per scrivere.",
                "examples": [
                    "Scrivo i compiti sul quaderno."
                ]
            }
        ],
        "partitive": "del",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_school_stationery_001"
    },
    {
        "word": "gomma",
        "level": "starter",
        "theme": "school_stationery",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧼",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "gomme",
        "transcription": "ˈɡɔmma",
        "definitions": [
            {
                "text": "Oggetto usato per cancellare i segni della matita.",
                "examples": [
                    "Uso la gomma per cancellare l'errore."
                ]
            }
        ],
        "partitive": "della",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_school_stationery_002"
    },
    {
        "word": "lezione",
        "level": "starter",
        "theme": "school",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "lezioni",
        "transcription": "letˈtsjone",
        "definitions": [
            {
                "text": "Insegnamento dato da un professore.",
                "examples": [
                    "La lezione di italiano inizia alle nove."
                ]
            }
        ],
        "partitive": "della",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_school_008"
    },
    {
        "word": "classe",
        "level": "starter",
        "theme": "school",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "classi",
        "transcription": "ˈklasse",
        "definitions": [
            {
                "text": "Gruppo di studenti che studiano insieme.",
                "examples": [
                    "Ci sono venti studenti nella mia classe."
                ]
            }
        ],
        "partitive": "della",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_school_009"
    },
    {
        "word": "compiti",
        "level": "starter",
        "theme": "school",
        "article": "i",
        "gender": "masculine",
        "emoji": "📝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "compiti",
        "transcription": "ˈkompiti",
        "definitions": [
            {
                "text": "Lavoro che gli studenti fanno a casa.",
                "examples": [
                    "Faccio i compiti il pomeriggio."
                ]
            }
        ],
        "partitive": "dei",
        "synonyms": [],
        "subtext": "compiti a casa",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_school_010"
    },
    {
        "word": "esame",
        "level": "starter",
        "theme": "school",
        "article": "l'",
        "gender": "masculine",
        "emoji": "📝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "esami",
        "transcription": "eˈzame",
        "definitions": [
            {
                "text": "Prova per valutare le conoscenze di uno studente.",
                "examples": [
                    "Ho un esame di storia domani."
                ]
            }
        ],
        "partitive": "dell'",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_school_011"
    },
    {
        "word": "alfabeto",
        "level": "starter",
        "theme": "school",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🔤",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "alfabeti",
        "transcription": "alfaˈbɛto",
        "definitions": [
            {
                "text": "L'insieme delle lettere di una lingua.",
                "examples": [
                    "L'alfabeto italiano ha 21 lettere."
                ]
            }
        ],
        "partitive": "dell'",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_school_012"
    },
    {
        "word": "aula",
        "level": "starter",
        "theme": "school",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "aule",
        "transcription": "ˈaula",
        "definitions": [
            {
                "text": "La stanza dove si fanno le lezioni a scuola.",
                "examples": [
                    "L'aula è grande e luminosa."
                ]
            }
        ],
        "partitive": "dell'",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_school_013"
    },
    {
        "word": "dizionario",
        "level": "starter",
        "theme": "school",
        "article": "il",
        "gender": "masculine",
        "emoji": "📕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "dizionari",
        "transcription": "dittsjoˈnarjo",
        "definitions": [
            {
                "text": "Libro che spiega il significato delle parole.",
                "examples": [
                    "Cerco la parola sul dizionario."
                ]
            }
        ],
        "partitive": "del",
        "synonyms": [
            "vocabolario"
        ],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_school_014"
    },
    {
        "word": "lettera",
        "level": "starter",
        "theme": "school",
        "article": "la",
        "gender": "feminine",
        "emoji": "✉️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "lettere",
        "transcription": "ˈlɛttera",
        "definitions": [
            {
                "text": "Ognuno dei segni dell'alfabeto; o un messaggio scritto su carta.",
                "examples": [
                    "Scrivo una lettera a un amico."
                ]
            }
        ],
        "partitive": "della",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_school_015"
    },
    {
        "word": "astuccio",
        "level": "starter",
        "theme": "school_stationery",
        "article": "l'",
        "gender": "masculine",
        "emoji": "✏️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "astucci",
        "transcription": "asˈtuttʃo",
        "definitions": [
            {
                "text": "Contenitore per penne e matite.",
                "examples": [
                    "Metto le penne nell'astuccio."
                ]
            }
        ],
        "partitive": "dell'",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_school_stationery_003"
    },
    {
        "word": "matematica",
        "level": "starter",
        "theme": "school",
        "emoji": "🔢",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "feminine",
        "article": "la",
        "definitions": [
            {
                "text": "Lo studio dei numeri, delle quantità e delle forme.",
                "examples": [
                    "La matematica è la mia materia preferita.",
                    "Abbiamo lezione di matematica alle nove."
                ]
            }
        ],
        "transcription": "mateˈmatika",
        "partitive": "della",
        "subtext": "",
        "lang": "it",
        "id": "it_starter_school_016"
    },
    {
        "word": "storia",
        "level": "starter",
        "theme": "school",
        "emoji": "📜",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "feminine",
        "article": "la",
        "definitions": [
            {
                "text": "Lo studio degli eventi passati.",
                "examples": [
                    "Studiamo la storia d'Italia.",
                    "Lui ama leggere libri di storia."
                ]
            }
        ],
        "transcription": "ˈstɔrja",
        "partitive": "della",
        "subtext": "",
        "lang": "it",
        "id": "it_starter_school_017"
    },
    {
        "word": "scienza",
        "level": "starter",
        "theme": "school",
        "emoji": "🧪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "feminine",
        "article": "la",
        "definitions": [
            {
                "text": "Lo studio della natura e del mondo fisico.",
                "examples": [
                    "La scienza è molto interessante.",
                    "Oggi facciamo un esperimento di scienza."
                ]
            }
        ],
        "transcription": "ˈʃɛntsa",
        "partitive": "della",
        "subtext": "",
        "lang": "it",
        "id": "it_starter_school_018"
    },
    {
        "word": "geografia",
        "level": "starter",
        "theme": "school",
        "emoji": "🌍",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "feminine",
        "article": "la",
        "definitions": [
            {
                "text": "Lo studio dei luoghi e delle relazioni tra le persone e i loro ambienti.",
                "examples": [
                    "Usiamo una mappa per la lezione di geografia.",
                    "Mi piace studiare la geografia del mondo."
                ]
            }
        ],
        "transcription": "dʒeograˈfia",
        "partitive": "della",
        "subtext": "",
        "lang": "it",
        "id": "it_starter_school_019"
    },
    {
        "word": "righello",
        "level": "starter",
        "theme": "school_stationery",
        "emoji": "📏",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "masculine",
        "article": "il",
        "plural": "righelli",
        "definitions": [
            {
                "text": "Uno strumento usato per misurare o tracciare linee dritte.",
                "examples": [
                    "Uso il righello per disegnare una linea.",
                    "Il mio righello è lungo trenta centimetri."
                ]
            }
        ],
        "transcription": "riˈɡɛllo",
        "partitive": "del",
        "subtext": "",
        "lang": "it",
        "id": "it_starter_school_stationery_004"
    },
    {
        "word": "esempio",
        "level": "starter",
        "theme": "school",
        "article": "l'",
        "gender": "masculine",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "esempi",
        "partitive": "dell'",
        "transcription": "eˈzɛmpjo",
        "definitions": [
            {
                "text": "Cosa che serve a illustrare una regola o un concetto.",
                "examples": [
                    "Fai un esempio.",
                    "Questo è un buon esempio."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "per esempio",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_school_020"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
