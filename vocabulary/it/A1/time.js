(function() {
    const data = [
    {
        "word": "mattina",
        "level": "starter",
        "theme": "time",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "mattine",
        "subtext": "mattina presto, buongiorno",
        "definitions": [
            {
                "text": "La parte della giornata prima delle 12.",
                "examples": [
                    "Inizio a lavorare la mattina."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "matˈtina",
        "synonyms": [],
        "antonyms": [],
        "id": "it_starter_time_001",
        "lang": "it"
    },
    {
        "word": "sera",
        "level": "starter",
        "theme": "time",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sere",
        "subtext": "",
        "synonyms": [
            "stasera",
            "buonasera"
        ],
        "definitions": [
            {
                "text": "La parte della giornata dopo il pomeriggio.",
                "examples": [
                    "Ceniamo la sera."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈsera",
        "antonyms": [],
        "id": "it_starter_time_002",
        "lang": "it"
    },
    {
        "word": "giorno",
        "level": "starter",
        "theme": "time",
        "article": "il",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "giorni",
        "gender": "masculine",
        "partitive": "del",
        "definitions": [
            {
                "text": "Periodo di ventiquattro ore.",
                "examples": [
                    "Oggi è un bel giorno."
                ]
            }
        ],
        "transcription": "ˈdʒorno",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "diurnus"
        },
        "id": "it_starter_time_003",
        "lang": "it"
    },
    {
        "word": "settimana",
        "level": "starter",
        "theme": "time",
        "article": "la",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "settimane",
        "gender": "feminine",
        "partitive": "della",
        "definitions": [
            {
                "text": "Periodo di sette giorni.",
                "examples": [
                    "La settimana ha sette giorni."
                ]
            }
        ],
        "transcription": "settiˈmana",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_004",
        "lang": "it"
    },
    {
        "word": "ogni giorno",
        "level": "starter",
        "theme": "time",
        "emoji": "🔁",
        "form": "adverb",
        "definitions": [
            {
                "text": "Tutti i giorni senza eccezioni.",
                "examples": [
                    "Bevo caffè ogni giorno."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "transcription": "ˈɔɲɲi ˈdʒorno",
        "id": "it_starter_time_005",
        "lang": "it"
    },
    {
        "word": "fine settimana",
        "level": "starter",
        "theme": "time",
        "article": "il",
        "emoji": "🗓️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "fine settimana",
        "subtext": "fine settimana",
        "definitions": [
            {
                "text": "Sabato e domenica.",
                "examples": [
                    "Mi rilasso nel fine settimana."
                ]
            }
        ],
        "gender": "feminine",
        "partitive": "del",
        "transcription": "ˈfine settiˈmana",
        "synonyms": [],
        "antonyms": [],
        "id": "it_starter_time_006",
        "lang": "it"
    },
    {
        "word": "pomeriggio",
        "level": "starter",
        "theme": "time",
        "article": "il",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pomeriggi",
        "subtext": "questo pomeriggio, buon pomeriggio",
        "definitions": [
            {
                "text": "La parte della giornata da mezzogiorno fino a sera.",
                "examples": [
                    "Finisco di lavorare alle cinque del pomeriggio."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "pomeˈriddʒo",
        "synonyms": [],
        "antonyms": [],
        "id": "it_starter_time_007",
        "lang": "it"
    },
    {
        "word": "notte",
        "level": "starter",
        "theme": "time",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌙",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "notti",
        "subtext": "buonanotte, di notte",
        "definitions": [
            {
                "text": "Il periodo di oscurità tra sera e mattina.",
                "examples": [
                    "Dormo otto ore ogni notte."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈnɔtte",
        "synonyms": [],
        "antonyms": [],
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "nox"
        },
        "id": "it_starter_time_008",
        "lang": "it"
    },
    {
        "word": "oggi",
        "level": "starter",
        "theme": "time",
        "article": "",
        "gender": "",
        "emoji": "📅",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Il giorno presente.",
                "examples": [
                    "Lavoro oggi."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "transcription": "ˈɔddʒi",
        "id": "it_starter_time_009",
        "lang": "it"
    },
    {
        "word": "domani",
        "level": "starter",
        "theme": "time",
        "article": "",
        "gender": "",
        "emoji": "⏭️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Il giorno dopo oggi.",
                "examples": [
                    "Ci vediamo domani."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "transcription": "doˈmani",
        "id": "it_starter_time_010",
        "lang": "it"
    },
    {
        "word": "tempo",
        "level": "starter",
        "theme": "time",
        "article": "il",
        "gender": "masculine",
        "emoji": "⌚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "tempi",
        "definitions": [
            {
                "text": "La durata o l'ora.",
                "examples": [
                    "Non ho tempo."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈtɛmpo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "tempus"
        },
        "id": "it_starter_time_011",
        "lang": "it"
    },
    {
        "word": "lunedì",
        "level": "starter",
        "theme": "time",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "lunedì",
        "definitions": [
            {
                "text": "Primo giorno della settimana.",
                "examples": [
                    "Il lunedì è difficile."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "luneˈdi",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_012",
        "lang": "it"
    },
    {
        "word": "martedì",
        "level": "starter",
        "theme": "time",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "martedì",
        "definitions": [
            {
                "text": "Secondo giorno della settimana.",
                "examples": [
                    "Martedì ho sport."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "marteˈdi",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_013",
        "lang": "it"
    },
    {
        "word": "mercoledì",
        "level": "starter",
        "theme": "time",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "mercoledì",
        "definitions": [
            {
                "text": "Terzo giorno della settimana.",
                "examples": [
                    "Il mercoledì è calmo."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "merkoleˈdi",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_014",
        "lang": "it"
    },
    {
        "word": "giovedì",
        "level": "starter",
        "theme": "time",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "giovedì",
        "definitions": [
            {
                "text": "Quarto giorno della settimana.",
                "examples": [
                    "Giovedì sera."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "dʒoveˈdi",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_015",
        "lang": "it"
    },
    {
        "word": "venerdì",
        "level": "starter",
        "theme": "time",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "venerdì",
        "definitions": [
            {
                "text": "Quinto giorno della settimana.",
                "examples": [
                    "Venerdì è il weekend."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "venerˈdi",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_016",
        "lang": "it"
    },
    {
        "word": "sabato",
        "level": "starter",
        "theme": "time",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sabati",
        "definitions": [
            {
                "text": "Sesto giorno della settimana.",
                "examples": [
                    "Faccio la spesa sabato."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈsabato",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_017",
        "lang": "it"
    },
    {
        "word": "domenica",
        "level": "starter",
        "theme": "time",
        "article": "la",
        "gender": "feminine",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "domeniche",
        "definitions": [
            {
                "text": "Settimo giorno della settimana.",
                "examples": [
                    "Domenica è un giorno di riposo."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "doˈmenika",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_018",
        "lang": "it"
    },
    {
        "word": "gennaio",
        "level": "starter",
        "theme": "time",
        "article": "il",
        "gender": "masculine",
        "emoji": "❄️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "gennai",
        "definitions": [
            {
                "text": "Primo mese dell'anno.",
                "examples": [
                    "A gennaio fa freddo."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "dʒenˈnajo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_019",
        "lang": "it"
    },
    {
        "word": "febbraio",
        "level": "starter",
        "theme": "time",
        "article": "il",
        "gender": "masculine",
        "emoji": "❄️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "febbrai",
        "definitions": [
            {
                "text": "Secondo mese dell'anno.",
                "examples": [
                    "Febbraio è corto."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "febˈbrajo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_020",
        "lang": "it"
    },
    {
        "word": "marzo",
        "level": "starter",
        "theme": "time",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "marzi",
        "definitions": [
            {
                "text": "Terzo mese dell'anno.",
                "examples": [
                    "La primavera comincia in marzo."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈmartsɔ",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_021",
        "lang": "it"
    },
    {
        "word": "aprile",
        "level": "starter",
        "theme": "time",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🌧️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "aprili",
        "definitions": [
            {
                "text": "Quarto mese dell'anno.",
                "examples": [
                    "In aprile piove spesso."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "aˈprile",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_022",
        "lang": "it"
    },
    {
        "word": "maggio",
        "level": "starter",
        "theme": "time",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌸",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "maggi",
        "definitions": [
            {
                "text": "Quinto mese dell'anno.",
                "examples": [
                    "Maggio è un bel mese."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈmaddʒo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_023",
        "lang": "it"
    },
    {
        "word": "giugno",
        "level": "starter",
        "theme": "time",
        "article": "il",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "giugni",
        "definitions": [
            {
                "text": "Sesto mese dell'anno.",
                "examples": [
                    "L'estate inizia in giugno."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈdʒuɲɲo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_024",
        "lang": "it"
    },
    {
        "word": "luglio",
        "level": "starter",
        "theme": "time",
        "article": "il",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "lugli",
        "definitions": [
            {
                "text": "Settimo mese dell'anno.",
                "examples": [
                    "Vado in vacanza in luglio."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈluʎʎo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_025",
        "lang": "it"
    },
    {
        "word": "agosto",
        "level": "starter",
        "theme": "time",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏖️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "agosti",
        "definitions": [
            {
                "text": "Ottavo mese dell'anno.",
                "examples": [
                    "Fa molto caldo in agosto."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "aˈɡosto",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_026",
        "lang": "it"
    },
    {
        "word": "settembre",
        "level": "starter",
        "theme": "time",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍂",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "settembri",
        "definitions": [
            {
                "text": "Nono mese dell'anno.",
                "examples": [
                    "La scuola inizia in settembre."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "setˈtɛmbre",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_027",
        "lang": "it"
    },
    {
        "word": "ottobre",
        "level": "starter",
        "theme": "time",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🎃",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "ottobri",
        "definitions": [
            {
                "text": "Decimo mese dell'anno.",
                "examples": [
                    "Halloween è in ottobre."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "otˈtobre",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_028",
        "lang": "it"
    },
    {
        "word": "novembre",
        "level": "starter",
        "theme": "time",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌫️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "novembri",
        "definitions": [
            {
                "text": "Undicesimo mese dell'anno.",
                "examples": [
                    "Piove spesso in novembre."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "noˈvɛmbre",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_029",
        "lang": "it"
    },
    {
        "word": "dicembre",
        "level": "starter",
        "theme": "time",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎄",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "dicembri",
        "definitions": [
            {
                "text": "Dodicesimo mese dell'anno.",
                "examples": [
                    "Natale è in dicembre."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "diˈtʃɛmbre",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_030",
        "lang": "it"
    },
    {
        "word": "sempre",
        "level": "starter",
        "theme": "frequency_adverbs",
        "article": "",
        "gender": "",
        "emoji": "♾️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Tutto il tempo.",
                "examples": [
                    "Bevo sempre acqua."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "transcription": "ˈsɛmpre",
        "id": "it_starter_time_031",
        "lang": "it"
    },
    {
        "word": "solitamente",
        "level": "starter",
        "theme": "frequency_adverbs",
        "article": "",
        "gender": "",
        "emoji": "🔄",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Di solito.",
                "examples": [
                    "Di solito finisco alle 18."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "transcription": "solitaˈmente",
        "id": "it_starter_time_032",
        "lang": "it"
    },
    {
        "word": "qualche volta",
        "level": "starter",
        "theme": "frequency_adverbs",
        "article": "",
        "gender": "",
        "emoji": "⏱️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Talvolta.",
                "examples": [
                    "Arriva qualche volta in ritardo."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "transcription": "ˈkwalke ˈvɔlta",
        "id": "it_starter_time_033",
        "lang": "it"
    },
    {
        "word": "ancora",
        "level": "starter",
        "theme": "frequency_adverbs",
        "article": "",
        "gender": "",
        "emoji": "🔁",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Un'altra volta.",
                "examples": [
                    "Ancora una volta."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "transcription": "ˈancora",
        "id": "it_starter_time_034",
        "lang": "it"
    },
    {
        "word": "fa",
        "level": "starter",
        "theme": "duration_expressions",
        "article": "",
        "gender": "",
        "emoji": "🕰️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Indica tempo passato.",
                "examples": [
                    "Due giorni fa."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "transcription": "ˈfa",
        "id": "it_starter_time_035",
        "lang": "it"
    },
    {
        "word": "ora",
        "level": "starter",
        "theme": "time",
        "article": "l'",
        "gender": "feminine",
        "emoji": "⌚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "ore",
        "definitions": [
            {
                "text": "Sessanta minuti.",
                "examples": [
                    "È l'una."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "ˈora",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_036",
        "lang": "it"
    },
    {
        "word": "minuto",
        "level": "starter",
        "theme": "time",
        "article": "il",
        "gender": "masculine",
        "emoji": "⏱️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "minuti",
        "definitions": [
            {
                "text": "Sessanta secondi.",
                "examples": [
                    "Aspetta un minuto."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈminuto",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_037",
        "lang": "it"
    },
    {
        "word": "secondo",
        "level": "starter",
        "theme": "time",
        "article": "il",
        "gender": "masculine",
        "emoji": "⏱️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "secondi",
        "definitions": [
            {
                "text": "Tempo molto breve.",
                "examples": [
                    "Un secondo, per favore."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈsecondo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_038",
        "lang": "it"
    },
    {
        "word": "ieri",
        "level": "starter",
        "theme": "time",
        "article": "",
        "gender": "",
        "emoji": "🔙",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Il giorno prima di oggi.",
                "examples": [
                    "Ieri ero stanco."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "transcription": "ˈjɛri",
        "id": "it_starter_time_039",
        "lang": "it"
    },
    {
        "word": "mezzanotte",
        "level": "starter",
        "theme": "time",
        "article": "la",
        "gender": "feminine",
        "emoji": "🕛",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "",
        "definitions": [
            {
                "text": "Le dodici di notte.",
                "examples": [
                    "È mezzanotte."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈmezzanotte",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_040",
        "lang": "it"
    },
    {
        "word": "mezzogiorno",
        "level": "starter",
        "theme": "time",
        "article": "il",
        "gender": "masculine",
        "emoji": "🕛",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "",
        "definitions": [
            {
                "text": "Le dodici del giorno.",
                "examples": [
                    "È mezzogiorno."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈmezzogiorno",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_041",
        "lang": "it"
    },
    {
        "word": "sveglia",
        "level": "starter",
        "theme": "time",
        "article": "la",
        "gender": "feminine",
        "emoji": "⏰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sveglie",
        "definitions": [
            {
                "text": "Orologio che suona al mattino.",
                "examples": [
                    "La sveglia suona."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈzveʎʎa",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_042",
        "lang": "it"
    },
    {
        "word": "orario",
        "level": "starter",
        "theme": "time",
        "article": "l'",
        "gender": "masculine",
        "emoji": "⌚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "orari",
        "definitions": [
            {
                "text": "Tempo stabilito.",
                "examples": [
                    "L'orario dei treni."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "oˈrarjo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_043",
        "lang": "it"
    },
    {
        "word": "anno",
        "level": "starter",
        "theme": "dates_years",
        "article": "l'",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "anni",
        "transcription": "ˈanno",
        "definitions": [
            {
                "text": "Periodo di 365 giorni.",
                "examples": [
                    "Ho vent'anni.",
                    "L'anno scorso è stato bello."
                ]
            }
        ],
        "partitive": "dell'",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_044",
        "lang": "it"
    },
    {
        "word": "mese",
        "level": "starter",
        "theme": "time",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "mesi",
        "transcription": "ˈmeze",
        "definitions": [
            {
                "text": "Una delle dodici parti in cui è diviso l'anno.",
                "examples": [
                    "Gennaio è il primo mese dell'anno."
                ]
            }
        ],
        "partitive": "del",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_time_045",
        "lang": "it"
    }
];
    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();