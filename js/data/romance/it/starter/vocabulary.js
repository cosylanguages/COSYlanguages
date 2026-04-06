(function() {
    const data = [
    {
        "word": "medico",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "il",
        "numberPlural": "2 medico",
        "answer": "due medici",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "transcription": "ˈmɛdiko",
        "plural": "medici",
        "definitions": [
            {
                "text": "Una persona che aiuta le persone malate.",
                "examples": [
                    "Il medico è all'ospedale.",
                    "Devo vedere un medico."
                ]
            }
        ],
        "gender": "masculine",
        "countability": "countable",
        "partitive": "del",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "piede",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "il",
        "numberPlural": "2 piede",
        "answer": "due piedi",
        "emoji": "🦶",
        "form": "noun",
        "transcription": "ˈpjɛde",
        "plural": "piedi",
        "gender": "masculine",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "La parte del corpo alla fine della gamba.",
                "examples": [
                    "I piedi sono nelle scarpe."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "piede sinistro, a piedi"
    },
    {
        "word": "insegnante",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "l'",
        "emoji": "🧑‍🏫",
        "form": "noun",
        "transcription": "inseɲˈɲante",
        "plural": "insegnanti",
        "definitions": [
            {
                "text": "Una persona che aiuta a imparare cose nuove.",
                "examples": [
                    "L'insegnante è in classe."
                ]
            }
        ],
        "gender": "masculine",
        "countability": "countable",
        "partitive": "dell'",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "pasta",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "emoji": "🍝",
        "form": "noun",
        "transcription": "ˈpasta",
        "plural": "pasta",
        "definitions": [
            {
                "text": "Un cibo tipico italiano fatto di farina.",
                "examples": [
                    "Amo la pasta al pomodoro."
                ]
            }
        ],
        "gender": "feminine",
        "countability": "countable",
        "partitive": "della",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "lasagna",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "form": "noun",
        "transcription": "laˈzaɲɲa",
        "plural": "lasagne",
        "gender": "feminine",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Un tipo di pasta italiana a strati con carne e formaggio.",
                "examples": [
                    "La lasagna è deliziosa."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "lasagna al forno"
    },
    {
        "word": "mela",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "emoji": "🍎",
        "numberPlural": "4 mela",
        "answer": "quattro mele",
        "form": "noun",
        "transcription": "ˈmela",
        "plural": "mele",
        "gender": "feminine",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Un frutto rotondo di colore rosso, verde o giallo.",
                "examples": [
                    "Mangio una mela ogni giorno."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "mela rossa"
    },
    {
        "word": "pane",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍞",
        "form": "noun",
        "transcription": "ˈpane",
        "plural": "pani",
        "subtext": "pane bianco",
        "countability": "uncountable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un cibo fatto con farina e acqua, cotto al forno.",
                "examples": [
                    "Compro il pane fresco."
                ]
            }
        ],
        "synonyms": []
    },
    {
        "word": "uovo",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🥚",
        "form": "noun",
        "transcription": "ˈwɔːvo",
        "plural": "uova",
        "subtext": "uovo sodo",
        "countability": "countable",
        "partitive": "dell'",
        "definitions": [
            {
                "text": "Un oggetto ovale prodotto dagli uccelli, usato come cibo.",
                "examples": [
                    "Mangio un uovo a colazione."
                ]
            }
        ],
        "synonyms": []
    },
    {
        "word": "latte",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🥛",
        "form": "noun",
        "transcription": "ˈlatte",
        "plural": "latti",
        "subtext": "latte fresco",
        "countability": "uncountable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un liquido bianco prodotto dalle mucche.",
                "examples": [
                    "Bevo un bicchiere di latte."
                ]
            }
        ],
        "synonyms": []
    },
    {
        "word": "riso",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍚",
        "form": "noun",
        "transcription": "ˈrizo",
        "plural": "risi",
        "subtext": "riso bianco",
        "countability": "uncountable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Piccoli semi bianchi che si mangiano cotti.",
                "examples": [
                    "Mi piace il riso con le verdure."
                ]
            }
        ],
        "synonyms": []
    },
    {
        "word": "carne",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥩",
        "form": "noun",
        "plural": "carni",
        "subtext": "carne di manzo",
        "countability": "uncountable",
        "partitive": "della",
        "definitions": [
            {
                "text": "La parte muscolare degli animali usata come cibo.",
                "examples": [
                    "Non mangio carne."
                ]
            }
        ],
        "transcription": "ˈkarne",
        "synonyms": []
    },
    {
        "word": "cibo",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "emoji": "🍲",
        "form": "noun",
        "plural": "cibi",
        "gender": "masculine",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Tutto ciò che si mangia.",
                "examples": [
                    "Il cibo italiano è famoso."
                ]
            }
        ],
        "transcription": "ˈtʃibo",
        "synonyms": [],
        "subtext": "cibo sano"
    },
    {
        "word": "caffè",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☕",
        "form": "noun",
        "plural": "caffè",
        "subtext": "caffè espresso",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Una bevanda calda scura e forte.",
                "examples": [
                    "Prendo un caffè al bar."
                ]
            }
        ],
        "transcription": "kafˈfɛ",
        "synonyms": []
    },
    {
        "word": "tè",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍵",
        "form": "noun",
        "plural": "tè",
        "subtext": "tè verde",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Una bevanda fatta con foglie in acqua calda.",
                "examples": [
                    "Preferisco il tè al caffè."
                ]
            }
        ],
        "transcription": "ˈtɛ",
        "synonyms": []
    },
    {
        "word": "succo",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧃",
        "form": "noun",
        "plural": "succhi",
        "subtext": "succo di frutta",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un liquido estratto dalla frutta.",
                "examples": [
                    "Un succo d'arancia, per favore."
                ]
            }
        ],
        "transcription": "ˈsukkɔ",
        "synonyms": []
    },
    {
        "word": "acqua",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🚰",
        "form": "noun",
        "plural": "acque",
        "subtext": "acqua naturale",
        "countability": "uncountable",
        "partitive": "dell'",
        "definitions": [
            {
                "text": "Il liquido trasparente necessario per la vita.",
                "examples": [
                    "Bevo molta acqua."
                ]
            }
        ],
        "transcription": "ˈakkwa",
        "synonyms": []
    },
    {
        "word": "colazione",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "☕",
        "form": "noun",
        "plural": "colazioni",
        "definitions": [
            {
                "text": "Pasto del mattino.",
                "examples": [
                    "Faccio colazione."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "kolatˈtsjone",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "cena",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍷",
        "form": "noun",
        "plural": "cene",
        "definitions": [
            {
                "text": "Pasto della sera.",
                "examples": [
                    "Una buona cena."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈtʃeːna",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "pranzo",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "pranzi",
        "definitions": [
            {
                "text": "Pasto di mezzogiorno.",
                "examples": [
                    "È ora di pranzo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈprandzo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "parco",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "il",
        "emoji": "🌳",
        "form": "noun",
        "plural": "parchi",
        "gender": "masculine",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un'area verde pubblica in città.",
                "examples": [
                    "Vado al parco a correre."
                ]
            }
        ],
        "transcription": "ˈparko",
        "synonyms": [],
        "subtext": "parco giochi"
    },
    {
        "word": "scuola",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "la",
        "emoji": "🏫",
        "form": "noun",
        "plural": "scuole",
        "gender": "feminine",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Il luogo dove si impara e si studia.",
                "examples": [
                    "I bambini sono a scuola."
                ]
            }
        ],
        "transcription": "ˈskwɔla",
        "synonyms": [],
        "subtext": "scuola primaria"
    },
    {
        "word": "negozio",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏪",
        "form": "noun",
        "plural": "negozi",
        "definitions": [
            {
                "text": "Luogo per comprare.",
                "examples": [
                    "Il negozio è grande."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "neˈɡɔttsjo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "maglietta",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "emoji": "👕",
        "form": "noun",
        "plural": "magliette",
        "gender": "feminine",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Un indumento leggero per la parte superiore del corpo.",
                "examples": [
                    "Indosso una maglietta blu."
                ]
            }
        ],
        "transcription": "maʎˈʎetta",
        "synonyms": [],
        "subtext": "maglietta di cotone"
    },
    {
        "word": "pantaloni",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "i",
        "gender": "masculine",
        "emoji": "👖",
        "form": "noun",
        "plural": "pantaloni",
        "definitions": [
            {
                "text": "Un indumento per le gambe.",
                "examples": [
                    "Porto i pantaloni lunghi."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dei",
        "transcription": "pantaˈloni",
        "synonyms": [],
        "subtext": "un paio di pantaloni"
    },
    {
        "word": "scarpe",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "le",
        "gender": "feminine",
        "emoji": "👟",
        "form": "noun",
        "plural": "scarpe",
        "definitions": [
            {
                "text": "Indumenti per i piedi.",
                "examples": [
                    "Ho scarpe nuove."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "delle",
        "transcription": "ˈskarpe",
        "synonyms": [],
        "subtext": "scarpe da ginnastica"
    },
    {
        "word": "cappello",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎩",
        "form": "noun",
        "plural": "cappelli",
        "definitions": [
            {
                "text": "Un accessorio per coprire la testa.",
                "examples": [
                    "Metti il cappello, fa freddo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "kapˈpɛllo",
        "synonyms": [],
        "subtext": "cappello di lana"
    },
    {
        "word": "sedia",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🪑",
        "form": "noun",
        "plural": "sedie",
        "subtext": "sedia di legno, sedersi su una sedia",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Mobile per sedersi con schienale.",
                "examples": [
                    "Mi siedo sulla sedia."
                ]
            }
        ],
        "transcription": "ˈseːdja",
        "synonyms": []
    },
    {
        "word": "tavolo",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🪑",
        "form": "noun",
        "plural": "tavoli",
        "subtext": "tavolo da cucina, sul tavolo",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Mobile con piano orizzontale e gambe.",
                "examples": [
                    "Il piatto è sul tavolo."
                ]
            }
        ],
        "transcription": "ˈtaːvolo",
        "synonyms": []
    },
    {
        "word": "letto",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛏️",
        "form": "noun",
        "plural": "letti",
        "subtext": "letto comodo, andare a letto",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Mobile usato per dormire.",
                "examples": [
                    "Vado a letto alle dieci."
                ]
            }
        ],
        "transcription": "ˈlɛtto",
        "synonyms": []
    },
    {
        "word": "chiave",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🔑",
        "form": "noun",
        "plural": "chiavi",
        "definitions": [
            {
                "text": "Oggetto per aprire.",
                "examples": [
                    "Dov'è la chiave?"
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈkjaːve",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "telefono",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📞",
        "form": "noun",
        "plural": "telefoni",
        "definitions": [
            {
                "text": "Apparecchio per chiamare.",
                "examples": [
                    "Rispondere al telefono."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "teˈlɛːfono",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "libro",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "emoji": "📖",
        "form": "noun",
        "plural": "libri",
        "gender": "masculine",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Insieme di fogli stampati e rilegati.",
                "examples": [
                    "Leggo un libro interessante."
                ]
            }
        ],
        "transcription": "ˈliːbro",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "borsa",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👜",
        "form": "noun",
        "plural": "borse",
        "definitions": [
            {
                "text": "Contenitore flessibile.",
                "examples": [
                    "Una borsa a mano."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈborsa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "penna",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "emoji": "🖊️",
        "form": "noun",
        "plural": "penne",
        "gender": "feminine",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Strumento usato per scrivere con inchiostro.",
                "examples": [
                    "Scrivo con la penna blu."
                ]
            }
        ],
        "transcription": "ˈpenna",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "gatto",
        "level": "starter",
        "theme": "animals_A1",
        "article": "il",
        "emoji": "🐈",
        "numberPlural": "2 gatto",
        "answer": "due gatti",
        "form": "noun",
        "plural": "gatti",
        "gender": "masculine",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un piccolo animale domestico che fa \"miao\".",
                "examples": [
                    "Il mio gatto dorme sul divano."
                ]
            }
        ],
        "transcription": "ˈɡatto",
        "synonyms": [],
        "subtext": "un bel gatto",
        "opposite": "cane"
    },
    {
        "word": "cane",
        "level": "starter",
        "theme": "animals_A1",
        "article": "il",
        "emoji": "🐕",
        "numberPlural": "5 cane",
        "answer": "cinque cani",
        "form": "noun",
        "plural": "cani",
        "gender": "masculine",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un animale domestico fedele che fa \"bau\".",
                "examples": [
                    "Porto il cane al parco."
                ]
            }
        ],
        "transcription": "ˈkaːne",
        "synonyms": [],
        "subtext": "cane da guardia",
        "opposite": "gatto"
    },
    {
        "word": "uccello",
        "level": "starter",
        "theme": "animals_A1",
        "article": "l'",
        "emoji": "🐦",
        "form": "noun",
        "plural": "uccelli",
        "gender": "masculine",
        "countability": "countable",
        "partitive": "dell'",
        "definitions": [
            {
                "text": "Un animale con le ali che può volare.",
                "examples": [
                    "L'uccello vola nel cielo."
                ]
            }
        ],
        "transcription": "utˈtʃɛllo",
        "synonyms": [],
        "subtext": "uccello canoro"
    },
    {
        "word": "frutta",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍎",
        "form": "noun",
        "plural": "frutta",
        "subtext": "frutta fresca, succo di frutta",
        "definitions": [
            {
                "text": "La parte dolce di una pianta che contiene semi, usata come cibo.",
                "examples": [
                    "La frutta è sana."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "della",
        "transcription": "ˈfrutta",
        "synonyms": []
    },
    {
        "word": "verdura",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥦",
        "form": "noun",
        "plural": "verdure",
        "subtext": "verdura fresca, verdure verdi",
        "definitions": [
            {
                "text": "Una pianta che viene mangiata come cibo, come una carota o un pomodoro.",
                "examples": [
                    "Lui mangia verdura ogni giorno."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "della",
        "transcription": "verˈduːra",
        "synonyms": []
    },
    {
        "word": "pesce",
        "level": "starter",
        "theme": "animals_A1",
        "article": "il",
        "emoji": "🐟",
        "form": "noun",
        "plural": "pesci",
        "gender": "masculine",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un animale che vive nell'acqua.",
                "examples": [
                    "Il pesce nuota nel mare."
                ]
            }
        ],
        "transcription": "ˈpeʃʃe",
        "synonyms": [],
        "subtext": "pesce fresco"
    },
    {
        "word": "testa",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "la",
        "emoji": "👤",
        "form": "noun",
        "plural": "teste",
        "gender": "feminine",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "La parte superiore del corpo umano.",
                "examples": [
                    "Mi fa male la testa."
                ]
            }
        ],
        "transcription": "ˈtɛsta",
        "synonyms": [],
        "subtext": "mal di testa"
    },
    {
        "word": "mano",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "la",
        "emoji": "✋",
        "form": "noun",
        "plural": "mani",
        "gender": "masculine",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "La parte del corpo alla fine del braccio.",
                "examples": [
                    "Lavati le mani."
                ]
            }
        ],
        "transcription": "ˈmaːno",
        "synonyms": [],
        "subtext": "mano destra"
    },
    {
        "word": "gamba",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "la",
        "emoji": "🦵",
        "form": "noun",
        "plural": "gambe",
        "gender": "feminine",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "La parte del corpo usata per camminare.",
                "examples": [
                    "Ho le gambe stanche."
                ]
            }
        ],
        "transcription": "ˈɡamba",
        "synonyms": [],
        "subtext": "gamba sinistra"
    },
    {
        "word": "occhio",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "l'",
        "emoji": "👁️",
        "form": "noun",
        "plural": "occhi",
        "gender": "masculine",
        "countability": "countable",
        "partitive": "dell'",
        "definitions": [
            {
                "text": "L'organo usato per vedere.",
                "examples": [
                    "Hai gli occhi azzurri."
                ]
            }
        ],
        "transcription": "ˈɔkkjo",
        "synonyms": [],
        "subtext": "chiudere gli occhi"
    },
    {
        "word": "naso",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "il",
        "emoji": "👃",
        "form": "noun",
        "plural": "nasi",
        "gender": "masculine",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "La parte del viso usata per odorare.",
                "examples": [
                    "Il naso è tra gli occhi e la bocca."
                ]
            }
        ],
        "transcription": "ˈnaːzo",
        "synonyms": [],
        "subtext": "naso chiuso"
    },
    {
        "word": "bocca",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "la",
        "emoji": "👄",
        "form": "noun",
        "plural": "bocche",
        "gender": "feminine",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "La parte del viso usata per mangiare e parlare.",
                "examples": [
                    "Apri la bocca."
                ]
            }
        ],
        "transcription": "ˈbokka",
        "synonyms": [],
        "subtext": "bocca aperta"
    },
    {
        "word": "orecchio",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "l'",
        "emoji": "👂",
        "form": "noun",
        "plural": "orecchi",
        "gender": "masculine",
        "countability": "countable",
        "partitive": "dell'",
        "definitions": [
            {
                "text": "L'organo usato per ascoltare.",
                "examples": [
                    "Tirati su le orecchie."
                ]
            }
        ],
        "transcription": "oˈrekkjo",
        "synonyms": [],
        "subtext": "mal d'orecchio"
    },
    {
        "word": "schiena",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚶",
        "form": "noun",
        "plural": "schiene",
        "subtext": "mal di schiena, sdraiarsi sulla schiena",
        "definitions": [
            {
                "text": "La parte posteriore del corpo, dal collo al sedere.",
                "examples": [
                    "Ho dolore alla schiena."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈskjɛːna",
        "synonyms": []
    },
    {
        "word": "braccio",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💪",
        "form": "noun",
        "plural": "braccia",
        "subtext": "braccio rotto, braccio sinistro",
        "definitions": [
            {
                "text": "La parte del corpo dalla spalla alla mano.",
                "examples": [
                    "Si è rotta il braccio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈbrattʃo",
        "synonyms": []
    },
    {
        "word": "madre",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "plural": "madri",
        "subtext": "",
        "synonyms": [
            "mamma"
        ],
        "definitions": [
            {
                "text": "La donna che è vostra parente.",
                "examples": [
                    "Mia madre è gentile."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈmaːdre"
    },
    {
        "word": "padre",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "plural": "padri",
        "subtext": "",
        "synonyms": [
            "papà"
        ],
        "definitions": [
            {
                "text": "L'uomo che è vostro parente.",
                "examples": [
                    "Mio padre è al lavoro."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈpaːdre"
    },
    {
        "word": "famiglia",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👪",
        "form": "noun",
        "plural": "famiglie",
        "definitions": [
            {
                "text": "Un gruppo di persone che sono legate.",
                "examples": [
                    "Mia famiglia è grande."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "faˈmiʎʎa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "amico",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "👫",
        "form": "noun",
        "plural": "amici",
        "definitions": [
            {
                "text": "Una persona che amate e conoscete bene.",
                "examples": [
                    "Lei è la mia amica."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "aˈmiːko",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "partner",
        "level": "starter",
        "theme": "marital_status_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💑",
        "form": "noun",
        "plural": "partner",
        "subtext": "marito, moglie, fidanzato, fidanzata",
        "definitions": [
            {
                "text": "La persona con cui vivi o hai una relazione.",
                "examples": [
                    "Il mio partner lavora qui."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈpartner",
        "synonyms": []
    },
    {
        "word": "uomo",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "article": "l'",
        "numberPlural": "2 uomo",
        "answer": "due uomini",
        "emoji": "👨",
        "form": "noun",
        "plural": "uomini",
        "gender": "masculine",
        "countability": "countable",
        "partitive": "dell'",
        "definitions": [
            {
                "text": "Essere umano maschio adulto.",
                "examples": [
                    "Quell'uomo è mio padre."
                ]
            }
        ],
        "transcription": "ˈwɔːmo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "donna",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "article": "la",
        "numberPlural": "2 donna",
        "answer": "due donne",
        "emoji": "👩",
        "form": "noun",
        "plural": "donne",
        "gender": "feminine",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Essere umano femmina adulta.",
                "examples": [
                    "La donna parla al telefono."
                ]
            }
        ],
        "transcription": "ˈdɔnna",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "casa",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏡",
        "form": "noun",
        "plural": "case",
        "subtext": "a casa, tornare a casa",
        "definitions": [
            {
                "text": "Un edificio dove vive una famiglia.",
                "examples": [
                    "Hanno una grande casa."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈkaːza",
        "synonyms": []
    },
    {
        "word": "appartamento",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏢",
        "form": "noun",
        "plural": "appartamenti",
        "subtext": "flat, vivere in un appartamento",
        "definitions": [
            {
                "text": "Un insieme di stanze su un piano di un edificio.",
                "examples": [
                    "Lei vive in un appartamento."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "appartaˈmento",
        "synonyms": []
    },
    {
        "word": "ufficio",
        "level": "starter",
        "theme": "rooms_indoor_spaces_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏢",
        "form": "noun",
        "plural": "uffici",
        "subtext": "luogo di lavoro, grande ufficio",
        "definitions": [
            {
                "text": "Una stanza o un edificio dove lavorano le persone.",
                "examples": [
                    "Lui è in ufficio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ufˈfiːtʃo",
        "synonyms": []
    },
    {
        "word": "macchina",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚗",
        "form": "noun",
        "plural": "macchine",
        "subtext": "guidare una macchina, macchina veloce",
        "definitions": [
            {
                "text": "Un veicolo con quattro ruote e un motore.",
                "examples": [
                    "La sua macchina è rossa."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈmakkina",
        "synonyms": []
    },
    {
        "word": "autobus",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🚌",
        "form": "noun",
        "plural": "autobus",
        "subtext": "prendere l'autobus, fermata dell'autobus",
        "definitions": [
            {
                "text": "Un grande veicolo che trasporta molte persone.",
                "examples": [
                    "Prendo l'autobus per andare al lavoro."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ˈautobus",
        "synonyms": []
    },
    {
        "word": "treno",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🚆",
        "form": "noun",
        "plural": "treni",
        "subtext": "prendere il treno, in treno, stazione",
        "definitions": [
            {
                "text": "Un veicolo che circola su rotaie.",
                "examples": [
                    "Il treno è veloce."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈtrɛːno",
        "synonyms": []
    },
    {
        "word": "denaro",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💰",
        "form": "noun",
        "plural": "denari",
        "subtext": "spendere denaro, risparmiare denaro",
        "countability": "uncountable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Monete e banconote usate come mezzo di pagamento.",
                "examples": [
                    "Ho bisogno di denaro per fare la spesa."
                ]
            }
        ],
        "transcription": "deˈnaːro",
        "synonyms": []
    },
    {
        "word": "mattina",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌅",
        "form": "noun",
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
        "countability": "countable",
        "partitive": "della",
        "transcription": "matˈtiːna",
        "synonyms": []
    },
    {
        "word": "sera",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌆",
        "form": "noun",
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
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈseːra"
    },
    {
        "word": "giorno",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "il",
        "emoji": "☀️",
        "form": "noun",
        "plural": "giorni",
        "gender": "masculine",
        "countability": "countable",
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
        "subtext": ""
    },
    {
        "word": "settimana",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "la",
        "emoji": "📅",
        "form": "noun",
        "plural": "settimane",
        "gender": "feminine",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Periodo di sette giorni.",
                "examples": [
                    "La settimana ha sette giorni."
                ]
            }
        ],
        "transcription": "settiˈmaːna",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "ogni giorno",
        "level": "starter",
        "theme": "times_day_A1",
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
        "transcription": "ˈɔɲɲi ˈdʒorno"
    },
    {
        "word": "capo",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "il",
        "emoji": "👨‍💼",
        "form": "noun",
        "plural": "capi",
        "definitions": [
            {
                "text": "La persona che è responsabile al lavoro.",
                "examples": [
                    "Il mio capo è molto gentile."
                ]
            }
        ],
        "gender": "masculine",
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈkaːpo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "collega",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "il",
        "emoji": "🧑‍💼",
        "form": "noun",
        "plural": "colleghi",
        "definitions": [
            {
                "text": "Una persona con cui lavori.",
                "examples": [
                    "I miei colleghi sono d'aiuto."
                ]
            }
        ],
        "gender": "feminine",
        "countability": "countable",
        "partitive": "del",
        "transcription": "kolˈlɛːɡa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "stipendio",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "lo",
        "emoji": "💰",
        "form": "noun",
        "plural": "stipendi",
        "subtext": "",
        "synonyms": [
            "salario"
        ],
        "definitions": [
            {
                "text": "Il denaro che una persona guadagna dal proprio lavoro ogni mese.",
                "examples": [
                    "Il suo stipendio è buono."
                ]
            }
        ],
        "gender": "masculine",
        "countability": "countable",
        "partitive": "dello",
        "transcription": "stiˈpɛndjo"
    },
    {
        "word": "riunione",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "la",
        "emoji": "🤝",
        "form": "noun",
        "plural": "riunioni",
        "subtext": "",
        "synonyms": [
            "meeting"
        ],
        "definitions": [
            {
                "text": "Un momento in cui le persone si riuniscono per parlare di qualcosa.",
                "examples": [
                    "Abbiamo una riunione ogni lunedì."
                ]
            }
        ],
        "gender": "masculine",
        "countability": "countable",
        "partitive": "della",
        "transcription": "rjuˈnjone"
    },
    {
        "word": "tragitto",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "il",
        "emoji": "🚆",
        "form": "noun",
        "plural": "tragitti",
        "definitions": [
            {
                "text": "Il viaggio per andare e tornare dal lavoro ogni giorno.",
                "examples": [
                    "Il mio tragitto dura un'ora."
                ]
            }
        ],
        "gender": "masculine",
        "countability": "countable",
        "partitive": "del",
        "transcription": "traˈdʒitto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "stress",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "😫",
        "form": "noun",
        "plural": "stress",
        "definitions": [
            {
                "text": "Una sensazione di preoccupazione causata da una situazione difficile.",
                "examples": [
                    "Ho molto stress al lavoro."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "dello",
        "transcription": "ˈstrɛss",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "affitto",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "article": "l'",
        "emoji": "🏠",
        "form": "noun",
        "plural": "affitti",
        "definitions": [
            {
                "text": "Il denaro pagato per usare una casa o un appartamento che appartiene a qualcun altro.",
                "examples": [
                    "L'affitto è alto in città."
                ]
            }
        ],
        "gender": "masculine",
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "afˈfitto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "vicino",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "il",
        "emoji": "🏠",
        "form": "noun",
        "plural": "vicini",
        "definitions": [
            {
                "text": "Una persona che vive accanto a te o vicino a te.",
                "examples": [
                    "I miei vicini sono molto simpatici."
                ]
            }
        ],
        "gender": "masculine",
        "countability": "countable",
        "partitive": "del",
        "transcription": "viˈtʃiːno",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "stanza",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "emoji": "🚪",
        "form": "noun",
        "plural": "stanze",
        "subtext": "",
        "synonyms": [
            "camera"
        ],
        "definitions": [
            {
                "text": "Una parte separata di un edificio con pareti e una porta.",
                "examples": [
                    "L'appartamento ha tre stanze."
                ]
            }
        ],
        "gender": "feminine",
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈstantsa"
    },
    {
        "word": "cucina",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍳",
        "form": "noun",
        "plural": "cucine",
        "definitions": [
            {
                "text": "L'arte di cucinare.",
                "examples": [
                    "Amo la cucina italiana."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "kuˈtʃiːna",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "sonno",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "article": "il",
        "emoji": "😴",
        "form": "noun",
        "plural": "sonni",
        "definitions": [
            {
                "text": "Il riposo naturale di cui il corpo ha bisogno ogni notte.",
                "examples": [
                    "Dormo otto ore a notte."
                ]
            }
        ],
        "gender": "masculine",
        "countability": "uncountable",
        "partitive": "del",
        "transcription": "ˈsɔnno",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "esercizio",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "article": "l'",
        "emoji": "🏋️",
        "form": "noun",
        "plural": "esercizi",
        "definitions": [
            {
                "text": "Attività fisica che ti mantiene in forma e in salute.",
                "examples": [
                    "Faccio esercizio tre volte a settimana."
                ]
            }
        ],
        "gender": "masculine",
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ezerˈtʃittsjo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "prezzo",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏷️",
        "form": "noun",
        "plural": "prezzi",
        "definitions": [
            {
                "text": "Valore di una cosa.",
                "examples": [
                    "Qual è il prezzo?"
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈprɛttso",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "costo",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💰",
        "form": "noun",
        "plural": "costi",
        "definitions": [
            {
                "text": "Ciò che costa.",
                "examples": [
                    "Il costo della vita."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈkɔsto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "relazione",
        "level": "starter",
        "theme": "family_life_A1",
        "article": "la",
        "emoji": "❤️",
        "form": "noun",
        "plural": "relazioni",
        "subtext": "",
        "synonyms": [
            "rapporto",
            "legame"
        ],
        "definitions": [
            {
                "text": "Una connessione tra due persone.",
                "examples": [
                    "Hanno una buona relazione."
                ]
            }
        ],
        "gender": "masculine",
        "countability": "countable",
        "partitive": "della",
        "transcription": "relatˈtsjone"
    },
    {
        "word": "insieme",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👫",
        "form": "adverb",
        "opposite": "solo",
        "oppositeEmoji": "🧍",
        "definitions": [
            {
                "text": "Con un'altra persona o gruppo.",
                "examples": [
                    "Ceniamo insieme."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "transcription": "ˈinsieme"
    },
    {
        "word": "vacanza",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏖️",
        "form": "noun",
        "plural": "vacanze",
        "definitions": [
            {
                "text": "Tempo di riposo.",
                "examples": [
                    "Andare in vacanza."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "vaˈkantsa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "viaggio",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "plural": "viaggi",
        "definitions": [
            {
                "text": "Azione di viaggiare.",
                "examples": [
                    "Buon viaggio!"
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈvjaddʒo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "hotel",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏨",
        "form": "noun",
        "plural": "hotel",
        "definitions": [
            {
                "text": "Un edificio dove le persone pagano per pernottare.",
                "examples": [
                    "L'hotel è vicino alla stazione."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "oˈtɛl",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "fine settimana",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "il",
        "emoji": "🗓️",
        "form": "noun",
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
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈfiːne settiˈmaːna",
        "synonyms": []
    },
    {
        "word": "tempo libero",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎮",
        "form": "noun",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "svago",
            "relax"
        ],
        "definitions": [
            {
                "text": "Momento in cui non lavori e puoi fare ciò che vuoi.",
                "examples": [
                    "Leggo libri nel mio tempo libero."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈtɛmpo ˈliːbero"
    },
    {
        "word": "birra",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍺",
        "form": "noun",
        "plural": "birre",
        "subtext": "birra fredda, alla spina",
        "definitions": [
            {
                "text": "Una bevanda alcolica popolare fatta dal grano.",
                "examples": [
                    "Lui beve una birra nel fine settimana."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈbirra",
        "synonyms": []
    },
    {
        "word": "vino",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍷",
        "form": "noun",
        "plural": "vini",
        "subtext": "vino rosso, vino bianco, bicchiere di vino",
        "definitions": [
            {
                "text": "Una bevanda alcolica fatta dall'uva.",
                "examples": [
                    "Lei beve un bicchiere di vino la sera."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈviːno",
        "synonyms": []
    },
    {
        "word": "porta",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚪",
        "form": "noun",
        "plural": "porte",
        "subtext": "aprire la porta, porta d'ingresso",
        "definitions": [
            {
                "text": "Un pannello piatto che si apre e si chiude per far entrare e uscire le persone.",
                "examples": [
                    "Per favore, chiudi la porta."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈpɔrta",
        "synonyms": []
    },
    {
        "word": "finestra",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🪟",
        "form": "noun",
        "plural": "finestre",
        "subtext": "aprire la finestra, vetrina",
        "definitions": [
            {
                "text": "Un'apertura in una parete riempita di vetro che lascia entrare la luce.",
                "examples": [
                    "Apri la finestra — fa caldo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "fiˈnɛstra",
        "synonyms": []
    },
    {
        "word": "infermiere",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "plural": "infermieri",
        "subtext": "",
        "synonyms": [
            "infermiera",
            "assistente"
        ],
        "definitions": [
            {
                "text": "Una persona addestrata per curare malati o feriti.",
                "examples": [
                    "L'infermiere controlla la pressione sanguigna."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "inferˈmjɛːre"
    },
    {
        "word": "conducente",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🚗",
        "form": "noun",
        "plural": "conducenti",
        "subtext": "",
        "synonyms": [
            "autista",
            "guidatore"
        ],
        "definitions": [
            {
                "text": "Una persona che guida un veicolo per lavoro.",
                "examples": [
                    "L'autista dell'autobus era amichevole."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "konduˈtʃɛnte"
    },
    {
        "word": "cuoco",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👨‍🍳",
        "form": "noun",
        "plural": "cuochi",
        "subtext": "",
        "synonyms": [
            "chef",
            "cuciniere"
        ],
        "definitions": [
            {
                "text": "Un cuoco professionista, specialmente il capo cuoco in un ristorante.",
                "examples": [
                    "Il cuoco prepara un cibo eccellente."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈkwɔːko"
    },
    {
        "word": "direttore",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧑‍💼",
        "form": "noun",
        "plural": "direttori",
        "subtext": "",
        "synonyms": [
            "manager",
            "dirigente"
        ],
        "definitions": [
            {
                "text": "Una persona che è a capo di un team o di un'azienda.",
                "examples": [
                    "Il mio direttore lavora per molte ore."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "diretˈtoːre"
    },
    {
        "word": "aereo",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "plural": "aerei",
        "subtext": "prendere l'aereo, volo",
        "definitions": [
            {
                "text": "Un veicolo con ali che vola nell'aria.",
                "examples": [
                    "L'aereo atterra alle nove."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "aˈɛːreo",
        "synonyms": []
    },
    {
        "word": "bicicletta",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚲",
        "form": "noun",
        "plural": "biciclette",
        "subtext": "bici, andare in bici",
        "definitions": [
            {
                "text": "Un veicolo a due ruote che guidi spingendo i pedali.",
                "examples": [
                    "Lui va al lavoro in bicicletta."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "bitʃiˈkletta",
        "synonyms": []
    },
    {
        "word": "ospedale",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏥",
        "form": "noun",
        "plural": "ospedali",
        "subtext": "andare all'ospedale, pronto soccorso",
        "definitions": [
            {
                "text": "Un luogo dove le persone malate o ferite ricevono cure mediche.",
                "examples": [
                    "È andato all'ospedale in ambulanza."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ospeˈdaːle",
        "synonyms": []
    },
    {
        "word": "ristorante",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍴",
        "form": "noun",
        "plural": "ristoranti",
        "subtext": "ristorante italiano, andare al ristorante",
        "definitions": [
            {
                "text": "Un luogo dove paghi per mangiare i pasti.",
                "examples": [
                    "Andiamo al ristorante il venerdì."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ristoˈrante",
        "synonyms": []
    },
    {
        "word": "banca",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏦",
        "form": "noun",
        "plural": "banche",
        "subtext": "conto in banca, andare in banca",
        "definitions": [
            {
                "text": "Un luogo dove le persone tengono i soldi e fanno transazioni finanziarie.",
                "examples": [
                    "La banca è vicino al mio ufficio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈbaŋka",
        "synonyms": []
    },
    {
        "word": "stazione",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚉",
        "form": "noun",
        "plural": "stazioni",
        "subtext": "stazione ferroviaria, stazione degli autobus",
        "definitions": [
            {
                "text": "Un edificio dove i treni o gli autobus si fermano per i passeggeri.",
                "examples": [
                    "La stazione è a dieci minuti da qui."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "statˈtsjone",
        "synonyms": []
    },
    {
        "word": "supermercato",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛒",
        "form": "noun",
        "plural": "supermercati",
        "subtext": "andare al supermercato",
        "definitions": [
            {
                "text": "Un grande negozio che vende cibo e altri beni per la casa.",
                "examples": [
                    "Vado al supermercato il sabato."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "supermerˈkaːto",
        "synonyms": []
    },
    {
        "word": "sole",
        "level": "starter",
        "theme": "weather_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "plural": "soli",
        "subtext": "sole caldo, sole del mattino",
        "definitions": [
            {
                "text": "La stella che dà luce e calore durante il giorno.",
                "examples": [
                    "Il sole è molto forte oggi."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈsoːle",
        "synonyms": []
    },
    {
        "word": "pioggia",
        "level": "starter",
        "theme": "weather_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌧️",
        "form": "noun",
        "plural": "piogge",
        "subtext": "forte pioggia, stivali da pioggia",
        "definitions": [
            {
                "text": "Acqua che cade dalle nuvole in gocce.",
                "examples": [
                    "C'è molta pioggia in autunno."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈpjɔddʒa",
        "synonyms": []
    },
    {
        "word": "vento",
        "level": "starter",
        "theme": "weather_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💨",
        "form": "noun",
        "plural": "venti",
        "subtext": "vento forte, vento freddo",
        "definitions": [
            {
                "text": "Aria che si muove, a volte fortemente.",
                "examples": [
                    "Il vento è molto forte oggi."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈvɛnto",
        "synonyms": []
    },
    {
        "word": "pomeriggio",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
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
        "countability": "countable",
        "partitive": "del",
        "transcription": "pomeˈriddʒo",
        "synonyms": []
    },
    {
        "word": "notte",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌙",
        "form": "noun",
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
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈnɔtte",
        "synonyms": []
    },
    {
        "word": "oggi",
        "level": "starter",
        "theme": "times_day_A1",
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
        "transcription": "ˈɔddʒi"
    },
    {
        "word": "domani",
        "level": "starter",
        "theme": "times_day_A1",
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
        "transcription": "doˈmaːni"
    },
    {
        "word": "marito",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "plural": "mariti",
        "opposite": "moglie",
        "oppositeEmoji": "👩",
        "subtext": "",
        "synonyms": [
            "sposo",
            "compagno"
        ],
        "definitions": [
            {
                "text": "Un uomo sposato, in relazione a sua moglie.",
                "examples": [
                    "Suo marito è un medico."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "maˈriːto"
    },
    {
        "word": "moglie",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "plural": "mogli",
        "opposite": "marito",
        "oppositeEmoji": "👨",
        "subtext": "",
        "synonyms": [
            "sposa",
            "compagna"
        ],
        "definitions": [
            {
                "text": "Una donna sposata, in relazione a suo marito.",
                "examples": [
                    "Sua moglie lavora in finanza."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈmɔʎʎe"
    },
    {
        "word": "bambino",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👶",
        "form": "noun",
        "plural": "bambini",
        "subtext": "",
        "synonyms": [
            "bimbo",
            "ragazzino"
        ],
        "definitions": [
            {
                "text": "Una giovane persona; un figlio o una figlia.",
                "examples": [
                    "Hanno due bambini."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "bamˈbiːno"
    },
    {
        "word": "genitore",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👪",
        "form": "noun",
        "plural": "genitori",
        "subtext": "",
        "synonyms": [
            "madre o padre"
        ],
        "definitions": [
            {
                "text": "Una madre o un padre.",
                "examples": [
                    "I miei genitori vivono al nord."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "dʒeniˈtoːre"
    },
    {
        "word": "autista",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🚗",
        "form": "noun",
        "plural": "autisti",
        "definitions": [
            {
                "text": "Persona che guida un veicolo.",
                "examples": [
                    "L'autista dell'autobus è gentile."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "auˈtista",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "chef",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "👨‍🍳",
        "form": "noun",
        "plural": "chef",
        "definitions": [
            {
                "text": "Un cuoco professionista.",
                "examples": [
                    "Lo chef prepara il pasto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello",
        "transcription": "ˈʃɛf",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "sorella",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👧",
        "form": "noun",
        "plural": "sorelle",
        "definitions": [
            {
                "text": "Figlia degli stessi genitori.",
                "examples": [
                    "Ho una sorella."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "soˈrɛlla",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "fratello",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👦",
        "form": "noun",
        "plural": "fratelli",
        "definitions": [
            {
                "text": "Figlio degli stessi genitori.",
                "examples": [
                    "Mio fratello ha dieci anni."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "fraˈtɛllo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "figlio",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👦",
        "form": "noun",
        "plural": "figli",
        "definitions": [
            {
                "text": "Figlio maschio.",
                "examples": [
                    "È mio figlio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈfiʎʎo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "figlia",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👧",
        "form": "noun",
        "plural": "figlie",
        "definitions": [
            {
                "text": "Figlia femmina.",
                "examples": [
                    "È mia figlia."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈfiʎʎa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "nonno",
        "level": "starter",
        "theme": "extended_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👴",
        "form": "noun",
        "plural": "nonni",
        "definitions": [
            {
                "text": "Padre di un genitore.",
                "examples": [
                    "Mio nonno è vecchio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈnɔnno",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "nonna",
        "level": "starter",
        "theme": "extended_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👵",
        "form": "noun",
        "plural": "nonne",
        "definitions": [
            {
                "text": "Madre di un genitore.",
                "examples": [
                    "Mia nonna cucina bene."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈnɔnna",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "zio",
        "level": "starter",
        "theme": "extended_family_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "plural": "zii",
        "definitions": [
            {
                "text": "Fratello del padre o della madre.",
                "examples": [
                    "Mio zio vive a Roma."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello",
        "transcription": "ˈtsiːo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "zia",
        "level": "starter",
        "theme": "extended_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "plural": "zie",
        "definitions": [
            {
                "text": "Sorella del padre o della madre.",
                "examples": [
                    "Mia zia è medico."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈtsiːa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "cugino",
        "level": "starter",
        "theme": "extended_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧑",
        "form": "noun",
        "plural": "cugini",
        "definitions": [
            {
                "text": "Figlio di uno zio o di una zia.",
                "examples": [
                    "È mio cugino."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "kuˈdʒiːno",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "albero",
        "level": "starter",
        "theme": "plants_natural_world_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🌳",
        "form": "noun",
        "plural": "alberi",
        "definitions": [
            {
                "text": "Grande pianta con un tronco.",
                "examples": [
                    "L'albero è verde."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ˈalbero",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "fiore",
        "level": "starter",
        "theme": "plants_natural_world_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌸",
        "form": "noun",
        "plural": "fiori",
        "definitions": [
            {
                "text": "Parte colorata di una pianta.",
                "examples": [
                    "Il fiore profuma."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈfjoːre",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "montagna",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏔️",
        "form": "noun",
        "plural": "montagne",
        "definitions": [
            {
                "text": "Grande massa di terra elevata.",
                "examples": [
                    "La montagna è alta."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "monˈtaɲɲa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "fiume",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏞️",
        "form": "noun",
        "plural": "fiumi",
        "definitions": [
            {
                "text": "Corso d'acqua.",
                "examples": [
                    "L'acqua del fiume è fredda."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈfjuːme",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "mare",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌊",
        "form": "noun",
        "plural": "mari",
        "definitions": [
            {
                "text": "Vasta distesa di acqua salata.",
                "examples": [
                    "Nuoto nel mare."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈmaːre",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "spiaggia",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏖️",
        "form": "noun",
        "plural": "spiagge",
        "definitions": [
            {
                "text": "Riva del mare con sabbia.",
                "examples": [
                    "Andiamo in spiaggia."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈspjaddʒa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "cielo",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌌",
        "form": "noun",
        "plural": "cieli",
        "definitions": [
            {
                "text": "Spazio sopra la Terra.",
                "examples": [
                    "Il cielo è blu."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈtʃɛːlo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "luna",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌙",
        "form": "noun",
        "plural": "lune",
        "definitions": [
            {
                "text": "Astro che brilla di notte.",
                "examples": [
                    "La luna è tonda."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈluːna",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "piatto",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "piatti",
        "definitions": [
            {
                "text": "Oggetto piatto per mangiare.",
                "examples": [
                    "Metti il piatto sul tavolo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈpjatto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "tazza",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "☕",
        "form": "noun",
        "plural": "tazze",
        "definitions": [
            {
                "text": "Piccolo recipiente con manico.",
                "examples": [
                    "Una tazza di caffè."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈtattsa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "bicchiere",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🥛",
        "form": "noun",
        "plural": "bicchieri",
        "definitions": [
            {
                "text": "Recipiente per bere.",
                "examples": [
                    "Un bicchiere d'acqua."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "bikˈkjɛːre",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "forchetta",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍴",
        "form": "noun",
        "plural": "forchette",
        "definitions": [
            {
                "text": "Utensile con rebbi.",
                "examples": [
                    "Mangio con la forchetta."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "forˈketta",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "cucchiaio",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🥄",
        "form": "noun",
        "plural": "cucchiai",
        "definitions": [
            {
                "text": "Utensile per la minestra.",
                "examples": [
                    "Un cucchiaio di zucchero."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "kukˈkjaːjo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "coltello",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🔪",
        "form": "noun",
        "plural": "coltelli",
        "definitions": [
            {
                "text": "Utensile per tagliare.",
                "examples": [
                    "Il coltello taglia bene."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "kolˈtɛllo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "computer portatile",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💻",
        "form": "noun",
        "plural": "computer portatili",
        "definitions": [
            {
                "text": "Piccolo computer che si trasporta.",
                "examples": [
                    "Uso il mio computer portatile."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "komˈpjuːter porˈtaːtile",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "televisione",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📺",
        "form": "noun",
        "plural": "televisioni",
        "definitions": [
            {
                "text": "Apparecchio per guardare i film.",
                "examples": [
                    "Guardo la televisione."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "televizˈjone",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "cinema",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎬",
        "form": "noun",
        "plural": "cinema",
        "definitions": [
            {
                "text": "Luogo per vedere i film.",
                "examples": [
                    "Andiamo al cinema."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈtʃiːnema",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "museo",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏛️",
        "form": "noun",
        "plural": "musei",
        "definitions": [
            {
                "text": "Luogo con oggetti d'arte.",
                "examples": [
                    "Il museo è grande."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "muˈzɛːo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "aeroporto",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "plural": "aeroporti",
        "definitions": [
            {
                "text": "Luogo per prendere l'aereo.",
                "examples": [
                    "Vado all'aeroporto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ˈaeroporto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "farmacia",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💊",
        "form": "noun",
        "plural": "farmacie",
        "definitions": [
            {
                "text": "Luogo per comprare medicine.",
                "examples": [
                    "Dov'è la farmacia?"
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "farmaˈtʃiːa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "pollo",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍗",
        "form": "noun",
        "plural": "polli",
        "definitions": [
            {
                "text": "Carne di gallina.",
                "examples": [
                    "Mi piace il pollo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈpollo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "zucchero",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🍚",
        "form": "noun",
        "plural": "zuccheri",
        "definitions": [
            {
                "text": "Polvere dolce per i dolci.",
                "examples": [
                    "Niente zucchero nel mio tè."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "dello",
        "transcription": "ˈtsukkero",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "insalata",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🥗",
        "form": "noun",
        "plural": "insalate",
        "definitions": [
            {
                "text": "Piatto di verdure fredde.",
                "examples": [
                    "Un'insalata piccola, per favore."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "insaˈlaːta",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "cappotto",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧥",
        "form": "noun",
        "plural": "cappotti",
        "definitions": [
            {
                "text": "Vestito caldo per fuori.",
                "examples": [
                    "Metti il cappotto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "kapˈpɔtto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "calzini",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "i",
        "gender": "masculine",
        "emoji": "🧦",
        "form": "noun",
        "plural": "calzini",
        "definitions": [
            {
                "text": "Vestiti per i piedi.",
                "examples": [
                    "I miei calzini sono blu."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dei",
        "transcription": "kalˈtsiːni",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "collo",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🦒",
        "form": "noun",
        "plural": "colli",
        "definitions": [
            {
                "text": "Parte tra la testa e il corpo.",
                "examples": [
                    "Ho male al collo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈkɔllo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "spalla",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👤",
        "form": "noun",
        "plural": "spalle",
        "definitions": [
            {
                "text": "Parte del corpo tra il collo e il braccio.",
                "examples": [
                    "Mi fa male la spalla."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈspalla",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "in",
        "level": "starter",
        "theme": "prepositions_place_A1",
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
        "transcription": "ˈin"
    },
    {
        "word": "su",
        "level": "starter",
        "theme": "prepositions_place_A1",
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
        "transcription": "ˈsu"
    },
    {
        "word": "a",
        "level": "starter",
        "theme": "prepositions_place_A1",
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
        "transcription": "ˈa"
    },
    {
        "word": "sotto",
        "level": "starter",
        "theme": "prepositions_place_A1",
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
        "transcription": "ˈsotto"
    },
    {
        "word": "e",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
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
        "transcription": "ˈe"
    },
    {
        "word": "ma",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
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
        "transcription": "ˈma"
    },
    {
        "word": "perché",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
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
        "transcription": "perˈke"
    },
    {
        "word": "tempo",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "⌚",
        "form": "noun",
        "plural": "tempi",
        "definitions": [
            {
                "text": "La durata o l'ora.",
                "examples": [
                    "Non ho tempo."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "del",
        "transcription": "ˈtɛmpo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "problema",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "❓",
        "form": "noun",
        "plural": "problemi",
        "definitions": [
            {
                "text": "Una difficoltà.",
                "examples": [
                    "C'è un problema."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "proˈblɛːma",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "manzo",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🥩",
        "form": "noun",
        "plural": "manzi",
        "definitions": [
            {
                "text": "Carne di mucca.",
                "examples": [
                    "Mangio del manzo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈmandzo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "maiale",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🥩",
        "form": "noun",
        "plural": "maiali",
        "definitions": [
            {
                "text": "Carne di maiale.",
                "examples": [
                    "Lei non mangia maiale."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "maˈjaːle",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "patata",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥔",
        "form": "noun",
        "plural": "patate",
        "definitions": [
            {
                "text": "Un tubero commestibile.",
                "examples": [
                    "Patatine fritte fatte con le patate."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "paˈtaːta",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "pomodoro",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍅",
        "form": "noun",
        "plural": "pomodori",
        "definitions": [
            {
                "text": "Un frutto rosso mangiato come verdura.",
                "examples": [
                    "Il pomodoro è maturo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "pomoˈdɔːro",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "cipolla",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧅",
        "form": "noun",
        "plural": "cipolle",
        "definitions": [
            {
                "text": "Verdura forte che fa piangere.",
                "examples": [
                    "Taglio una cipolla."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "tʃiˈpɔlla",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "carota",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥕",
        "form": "noun",
        "plural": "carote",
        "definitions": [
            {
                "text": "Verdura arancione lunga.",
                "examples": [
                    "Il coniglio mangia una carota."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "kaˈrɔːta",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "zuppa",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥣",
        "form": "noun",
        "plural": "zuppe",
        "definitions": [
            {
                "text": "Piatto liquido caldo.",
                "examples": [
                    "La zuppa è buona."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈtsuppa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "torta",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍰",
        "form": "noun",
        "plural": "torte",
        "definitions": [
            {
                "text": "Dolce cotto al forno.",
                "examples": [
                    "Una torta al cioccolato."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈtɔrta",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "cioccolato",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍫",
        "form": "noun",
        "plural": "cioccolati",
        "definitions": [
            {
                "text": "Cibo dolce marrone.",
                "examples": [
                    "Amo il cioccolato."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "tʃokkoˈlaːto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "gelato",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍦",
        "form": "noun",
        "plural": "gelati",
        "definitions": [
            {
                "text": "Cibo freddo e dolce.",
                "examples": [
                    "Un gelato alla vaniglia."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "dʒeˈlaːto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "maglione",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧶",
        "form": "noun",
        "plural": "maglioni",
        "definitions": [
            {
                "text": "Vestito caldo di lana.",
                "examples": [
                    "Metto un maglione."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "maʎˈʎoːne",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "vestito",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👗",
        "form": "noun",
        "plural": "vestiti",
        "definitions": [
            {
                "text": "Abito intero.",
                "examples": [
                    "Lei ha un bel vestito."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "vesˈtiːto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "gonna",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👗",
        "form": "noun",
        "plural": "gonne",
        "definitions": [
            {
                "text": "Vestito che copre dai fianchi in giù.",
                "examples": [
                    "Una gonna corta."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈɡɔnna",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "stivali",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "gli",
        "gender": "masculine",
        "emoji": "🥾",
        "form": "noun",
        "plural": "stivali",
        "definitions": [
            {
                "text": "Scarpe alte.",
                "examples": [
                    "Stivali per la pioggia."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "degli",
        "transcription": "stiˈvaːli",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "dito",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☝️",
        "form": "noun",
        "plural": "dita",
        "definitions": [
            {
                "text": "Una delle cinque parti della mano.",
                "examples": [
                    "Ho dieci dita."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈdiːto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "dito del piede",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🦶",
        "form": "noun",
        "plural": "dita dei piedi",
        "definitions": [
            {
                "text": "Un dito del piede.",
                "examples": [
                    "Mi fa male il dito del piede."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈdiːto del ˈpjɛːde",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "stomaco",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🤰",
        "form": "noun",
        "plural": "stomaci",
        "definitions": [
            {
                "text": "Parte del corpo per digerire.",
                "examples": [
                    "Ho male allo stomaco."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello",
        "transcription": "ˈstɔːmako",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "ginocchio",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🦵",
        "form": "noun",
        "plural": "ginocchia",
        "definitions": [
            {
                "text": "Parte a metà della gamba.",
                "examples": [
                    "Cado sul ginocchio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "dʒiˈnɔkkjo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "erba",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🌱",
        "form": "noun",
        "plural": "erbe",
        "definitions": [
            {
                "text": "Piccole piante verdi a terra.",
                "examples": [
                    "L'erba è verde."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "dell'",
        "transcription": "ˈɛrba",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "lago",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏞️",
        "form": "noun",
        "plural": "laghi",
        "definitions": [
            {
                "text": "Grande distesa di acqua dolce.",
                "examples": [
                    "Il lago è calmo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈlaːɡo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "nuvola",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "☁️",
        "form": "noun",
        "plural": "nuvole",
        "definitions": [
            {
                "text": "Massa bianca nel cielo.",
                "examples": [
                    "Ci sono delle nuvole."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈnuːvola",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "stella",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⭐",
        "form": "noun",
        "plural": "stelle",
        "definitions": [
            {
                "text": "Punto luminoso nel cielo di notte.",
                "examples": [
                    "Guardo le stelle."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈstɛlla",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "scrivania",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🖥️",
        "form": "noun",
        "plural": "scrivanie",
        "definitions": [
            {
                "text": "Tavolo per lavorare.",
                "examples": [
                    "Sono alla mia scrivania."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "skrivaˈniːa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "lampada",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💡",
        "form": "noun",
        "plural": "lampade",
        "definitions": [
            {
                "text": "Oggetto che fa luce.",
                "examples": [
                    "Accendi la lampada."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈlampada",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "orologio",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "⏰",
        "form": "noun",
        "plural": "orologi",
        "definitions": [
            {
                "text": "Oggetto per dare l'ora.",
                "examples": [
                    "Guarda l'orologio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "oroˈlɔːdʒo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "specchio",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🪞",
        "form": "noun",
        "plural": "specchi",
        "definitions": [
            {
                "text": "Superficie che riflette l'immagine.",
                "examples": [
                    "Mi guardo allo specchio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello",
        "transcription": "ˈspɛkkjo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "biblioteca",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📚",
        "form": "noun",
        "plural": "biblioteche",
        "definitions": [
            {
                "text": "Luogo con molti libri.",
                "examples": [
                    "Vado in biblioteca."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "biblioˈtɛːka",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "lunedì",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "lunedì",
        "definitions": [
            {
                "text": "Primo giorno della settimana.",
                "examples": [
                    "Il lunedì è difficile."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "luneˈdi",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "martedì",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "martedì",
        "definitions": [
            {
                "text": "Secondo giorno della settimana.",
                "examples": [
                    "Martedì ho sport."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "marteˈdi",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "mercoledì",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "mercoledì",
        "definitions": [
            {
                "text": "Terzo giorno della settimana.",
                "examples": [
                    "Il mercoledì è calmo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "merkoleˈdi",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "giovedì",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "giovedì",
        "definitions": [
            {
                "text": "Quarto giorno della settimana.",
                "examples": [
                    "Giovedì sera."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "dʒoveˈdi",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "venerdì",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "venerdì",
        "definitions": [
            {
                "text": "Quinto giorno della settimana.",
                "examples": [
                    "Venerdì è il weekend."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "venerˈdi",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "sabato",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "sabati",
        "definitions": [
            {
                "text": "Sesto giorno della settimana.",
                "examples": [
                    "Faccio la spesa sabato."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈsaːbato",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "domenica",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📅",
        "form": "noun",
        "plural": "domeniche",
        "definitions": [
            {
                "text": "Settimo giorno della settimana.",
                "examples": [
                    "Domenica è un giorno di riposo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "doˈmeːnika",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "gennaio",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "❄️",
        "form": "noun",
        "plural": "gennai",
        "definitions": [
            {
                "text": "Primo mese dell'anno.",
                "examples": [
                    "A gennaio fa freddo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "dʒenˈnaːjo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "febbraio",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "❄️",
        "form": "noun",
        "plural": "febbrai",
        "definitions": [
            {
                "text": "Secondo mese dell'anno.",
                "examples": [
                    "Febbraio è corto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "febˈbraːjo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "marzo",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌱",
        "form": "noun",
        "plural": "marzi",
        "definitions": [
            {
                "text": "Terzo mese dell'anno.",
                "examples": [
                    "La primavera comincia in marzo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈmartsɔ",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "aprile",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🌧️",
        "form": "noun",
        "plural": "aprili",
        "definitions": [
            {
                "text": "Quarto mese dell'anno.",
                "examples": [
                    "In aprile piove spesso."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "aˈpriːle",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "maggio",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌸",
        "form": "noun",
        "plural": "maggi",
        "definitions": [
            {
                "text": "Quinto mese dell'anno.",
                "examples": [
                    "Maggio è un bel mese."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈmaddʒo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "giugno",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "plural": "giugni",
        "definitions": [
            {
                "text": "Sesto mese dell'anno.",
                "examples": [
                    "L'estate inizia in giugno."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈdʒuɲɲo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "luglio",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "plural": "lugli",
        "definitions": [
            {
                "text": "Settimo mese dell'anno.",
                "examples": [
                    "Vado in vacanza in luglio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈluʎʎo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "agosto",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏖️",
        "form": "noun",
        "plural": "agosti",
        "definitions": [
            {
                "text": "Ottavo mese dell'anno.",
                "examples": [
                    "Fa molto caldo in agosto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "aˈɡosto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "settembre",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍂",
        "form": "noun",
        "plural": "settembri",
        "definitions": [
            {
                "text": "Nono mese dell'anno.",
                "examples": [
                    "La scuola inizia in settembre."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "setˈtɛmbre",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "ottobre",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🎃",
        "form": "noun",
        "plural": "ottobri",
        "definitions": [
            {
                "text": "Decimo mese dell'anno.",
                "examples": [
                    "Halloween è in ottobre."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "otˈtoːbre",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "novembre",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌫️",
        "form": "noun",
        "plural": "novembri",
        "definitions": [
            {
                "text": "Undicesimo mese dell'anno.",
                "examples": [
                    "Piove spesso in novembre."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "noˈvɛmbre",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "dicembre",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎄",
        "form": "noun",
        "plural": "dicembri",
        "definitions": [
            {
                "text": "Dodicesimo mese dell'anno.",
                "examples": [
                    "Natale è in dicembre."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "diˈtʃɛmbre",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "primavera",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌱",
        "form": "noun",
        "plural": "primavere",
        "definitions": [
            {
                "text": "Stagione dopo l'inverno.",
                "examples": [
                    "In primavera i fiori sbocciano."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "primaˈvɛːra",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "estate",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "☀️",
        "form": "noun",
        "plural": "estati",
        "definitions": [
            {
                "text": "La stagione più calda.",
                "examples": [
                    "Amo l'estate."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "esˈtaːte",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "autunno",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🍂",
        "form": "noun",
        "plural": "autunni",
        "definitions": [
            {
                "text": "Stagione quando cadono le foglie.",
                "examples": [
                    "L'autunno è bello."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "auˈtunno",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "inverno",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "❄️",
        "form": "noun",
        "plural": "inverni",
        "definitions": [
            {
                "text": "La stagione più fredda.",
                "examples": [
                    "Nevica in inverno."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "inˈvɛrno",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "leone",
        "level": "starter",
        "theme": "animals_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🦁",
        "form": "noun",
        "plural": "leoni",
        "definitions": [
            {
                "text": "Un grande felino selvaggio.",
                "examples": [
                    "Il leone è il re."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "leˈoːne",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "elefante",
        "level": "starter",
        "theme": "animals_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🐘",
        "form": "noun",
        "plural": "elefanti",
        "definitions": [
            {
                "text": "Un animale molto grande con la proboscide.",
                "examples": [
                    "L'elefante è grigio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "eleˈfante",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "coniglio",
        "level": "starter",
        "theme": "animals_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🐰",
        "form": "noun",
        "plural": "conigli",
        "definitions": [
            {
                "text": "Piccolo animale con lunghe orecchie.",
                "examples": [
                    "Il coniglio mangia una carota."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈconiglio",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "cavallo",
        "level": "starter",
        "theme": "animals_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🐴",
        "form": "noun",
        "plural": "cavalli",
        "definitions": [
            {
                "text": "Un animale che si può cavalcare.",
                "examples": [
                    "Vado a cavallo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈcavallo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "mucca",
        "level": "starter",
        "theme": "animals_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🐮",
        "form": "noun",
        "plural": "mucche",
        "definitions": [
            {
                "text": "L'animale che dà il latte.",
                "examples": [
                    "La mucca è nel prato."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈmucca",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "pecora",
        "level": "starter",
        "theme": "animals_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🐑",
        "form": "noun",
        "plural": "pecore",
        "definitions": [
            {
                "text": "Animale con la lana bianca.",
                "examples": [
                    "Un gregge di pecore."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈpɛːkora",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "limone",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍋",
        "form": "noun",
        "plural": "limoni",
        "definitions": [
            {
                "text": "Un frutto giallo acido.",
                "examples": [
                    "Del limone nel mio tè."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "liˈmoːne",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "arancia",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🍊",
        "form": "noun",
        "plural": "arance",
        "definitions": [
            {
                "text": "Un frutto arancione e tondo.",
                "examples": [
                    "Mangio un'arancia."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "aˈrantʃa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "fragola",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍓",
        "form": "noun",
        "plural": "fragole",
        "definitions": [
            {
                "text": "Un piccolo frutto rosso dolce.",
                "examples": [
                    "Mi piacciono le fragole."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈfraːɡola",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "uva",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🍇",
        "form": "noun",
        "plural": "uve",
        "definitions": [
            {
                "text": "Piccoli frutti per fare il vino.",
                "examples": [
                    "Un grappolo d'uva."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ˈuːva",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "aglio",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🧄",
        "form": "noun",
        "plural": "agli",
        "definitions": [
            {
                "text": "Pianta con un forte odore.",
                "examples": [
                    "Cucino con l'aglio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ˈaʎʎo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "sempre",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
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
        "transcription": "ˈsɛmpre"
    },
    {
        "word": "solitamente",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
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
        "transcription": "solitaˈmente"
    },
    {
        "word": "spesso",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "article": "",
        "gender": "",
        "emoji": "🔁",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Molte volte.",
                "examples": [
                    "Vado spesso al cinema."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "transcription": "ˈspɛsso"
    },
    {
        "word": "qualche volta",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
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
        "transcription": "ˈkwalke ˈvɔlta"
    },
    {
        "word": "mai",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "article": "",
        "gender": "",
        "emoji": "🚫",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Nessuna volta.",
                "examples": [
                    "Non fumo mai."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "transcription": "ˈmai"
    },
    {
        "word": "chi",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "transcription": "ˈki"
    },
    {
        "word": "cosa",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "❓",
        "form": "pronoun",
        "plural": "",
        "definitions": [
            {
                "text": "Chiede di una cosa.",
                "examples": [
                    "Cos'è?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "transcription": "ˈkɔːza"
    },
    {
        "word": "dove",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "📍",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Chiede di un luogo.",
                "examples": [
                    "Dove abiti?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "transcription": "ˈdoːve"
    },
    {
        "word": "quando",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "⏰",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Chiede del tempo.",
                "examples": [
                    "Quando vieni?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "transcription": "ˈkwando"
    },
    {
        "word": "come",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "⚙️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Chiede la maniera.",
                "examples": [
                    "Come stai?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "transcription": "ˈkoːme"
    },
    {
        "word": "ciao",
        "level": "starter",
        "theme": "name_greeting_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👋",
        "form": "noun",
        "plural": "ciao",
        "definitions": [
            {
                "text": "Saluto amichevole.",
                "examples": [
                    "Ciao a tutti."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈtʃaːo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "arrivederci",
        "level": "starter",
        "theme": "name_greeting_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "👋",
        "form": "noun",
        "plural": "arrivederci",
        "definitions": [
            {
                "text": "Saluto quando si parte.",
                "examples": [
                    "Arrivederci, signore."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "arrivedˈdertʃi",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "per favore",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "article": "",
        "gender": "",
        "emoji": "🙏",
        "form": "phrase",
        "plural": "",
        "definitions": [
            {
                "text": "Formula di cortesia.",
                "examples": [
                    "Un caffè, per favore."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "transcription": "per faˈvoːre"
    },
    {
        "word": "grazie",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🙏",
        "form": "noun",
        "plural": "grazie",
        "definitions": [
            {
                "text": "Formula per ringraziare.",
                "examples": [
                    "Grazie mille."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈɡrattsje",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "scusa",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🙇",
        "form": "noun",
        "plural": "scuse",
        "definitions": [
            {
                "text": "Formula per scusarsi.",
                "examples": [
                    "Scusa, sono in ritardo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈskuːza",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "sì",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "✅",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Affermazione.",
                "examples": [
                    "Sì, voglio bene."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "transcription": "ˈsi"
    },
    {
        "word": "no",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "❌",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Negazione.",
                "examples": [
                    "No, grazie."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "transcription": "ˈnɔ"
    },
    {
        "word": "nome",
        "level": "starter",
        "theme": "name_greeting_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🆔",
        "form": "noun",
        "plural": "nomi",
        "definitions": [
            {
                "text": "Come ci si chiama.",
                "examples": [
                    "Il mio nome è Mario."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈnoːme",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "viola",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🟣",
        "form": "noun",
        "plural": "viola",
        "definitions": [
            {
                "text": "Colore tra blu e rosso.",
                "examples": [
                    "Ho una borsa viola."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈvjɔːla",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "bagno",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🚿",
        "form": "noun",
        "plural": "bagni",
        "definitions": [
            {
                "text": "Stanza per lavarsi.",
                "examples": [
                    "Il bagno è piccolo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈbagno",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "camera da letto",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛏️",
        "form": "noun",
        "plural": "camere da letto",
        "definitions": [
            {
                "text": "Stanza per dormire.",
                "examples": [
                    "La mia camera è pulita."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈcamera da letto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "neonato",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👶",
        "form": "noun",
        "plural": "neonati",
        "definitions": [
            {
                "text": "Bambino molto piccolo.",
                "examples": [
                    "Il neonato dorme."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "neoˈnaːto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "ragazzo",
        "level": "starter",
        "theme": "people_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👦",
        "form": "noun",
        "plural": "ragazzi",
        "definitions": [
            {
                "text": "Giovane maschio.",
                "examples": [
                    "È un bel ragazzo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "raˈɡattso",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "ragazza",
        "level": "starter",
        "theme": "people_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👧",
        "form": "noun",
        "plural": "ragazze",
        "definitions": [
            {
                "text": "Giovane femmina.",
                "examples": [
                    "È una brava ragazza."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "raˈɡattsa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "fidanzato",
        "level": "starter",
        "theme": "marital_status_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "plural": "fidanzati",
        "definitions": [
            {
                "text": "Partner maschile.",
                "examples": [
                    "Il mio fidanzato è qui."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈfidanzato",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "fidanzata",
        "level": "starter",
        "theme": "marital_status_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "plural": "fidanzate",
        "definitions": [
            {
                "text": "Partner femminile.",
                "examples": [
                    "La sua fidanzata è italiana."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈfidanzata",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "studente",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🧑‍🎓",
        "form": "noun",
        "plural": "studenti",
        "definitions": [
            {
                "text": "Persona che studia.",
                "examples": [
                    "Sono uno studente."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello",
        "transcription": "stuˈdɛnte",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "compagno di classe",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "plural": "compagni di classe",
        "definitions": [
            {
                "text": "Persona nella stessa classe.",
                "examples": [
                    "Il mio compagno è simpatico."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "komˈpaɲɲo di ˈklasse",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "macchina fotografica",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📷",
        "form": "noun",
        "plural": "macchine fotografiche",
        "definitions": [
            {
                "text": "Apparecchio per fare foto.",
                "examples": [
                    "Ho una nuova macchina fotografica."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈmakkina fotoˈɡraːfika",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "computer",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💻",
        "form": "noun",
        "plural": "computer",
        "definitions": [
            {
                "text": "Macchina elettronica per lavorare.",
                "examples": [
                    "Il mio computer è veloce."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "komˈpjuːter",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "bottiglia",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍼",
        "form": "noun",
        "plural": "bottiglie",
        "definitions": [
            {
                "text": "Recipiente per liquidi.",
                "examples": [
                    "Una bottiglia d'acqua."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "botˈtiʎʎa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "scatola",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📦",
        "form": "noun",
        "plural": "scatole",
        "definitions": [
            {
                "text": "Contenitore cavo.",
                "examples": [
                    "Il gatto è nella scatola."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈskaːtola",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "palla",
        "level": "starter",
        "theme": "sports_equipment_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⚽",
        "form": "noun",
        "plural": "palle",
        "definitions": [
            {
                "text": "Oggetto tondo per lo sport.",
                "examples": [
                    "Giochiamo con la palla."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈpalla",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "regalo",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎁",
        "form": "noun",
        "plural": "regali",
        "definitions": [
            {
                "text": "Ciò che si offre a qualcuno.",
                "examples": [
                    "È un regalo per te."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈregalo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "strada",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛣️",
        "form": "noun",
        "plural": "strade",
        "definitions": [
            {
                "text": "Via in una città.",
                "examples": [
                    "Abito in questa strada."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈstraːda",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "edificio",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏢",
        "form": "noun",
        "plural": "edifici",
        "definitions": [
            {
                "text": "Grande costruzione urbana.",
                "examples": [
                    "Un bell'edificio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ediˈfiːtʃo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "bar",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☕",
        "form": "noun",
        "plural": "bar",
        "definitions": [
            {
                "text": "Luogo dove si beve il caffè.",
                "examples": [
                    "Andiamo al bar."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈbar",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "centro",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📍",
        "form": "noun",
        "plural": "centri",
        "definitions": [
            {
                "text": "Il mezzo di un luogo.",
                "examples": [
                    "Il centro città."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈtʃɛntro",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "burro",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧈",
        "form": "noun",
        "plural": "burri",
        "definitions": [
            {
                "text": "Prodotto grasso del latte.",
                "examples": [
                    "Del burro sul pane."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈburro",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "formaggio",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧀",
        "form": "noun",
        "plural": "formaggi",
        "definitions": [
            {
                "text": "Prodotto fatto col latte.",
                "examples": [
                    "Mi piace il formaggio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈformaggio",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "attore",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🎭",
        "form": "noun",
        "plural": "attori",
        "definitions": [
            {
                "text": "Persona che recita.",
                "examples": [
                    "È un attore famoso."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "atˈtoːre",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "artista",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🎨",
        "form": "noun",
        "plural": "artisti",
        "definitions": [
            {
                "text": "Persona che fa arte.",
                "examples": [
                    "Lei è una grande artista."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "arˈtista",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "adulto",
        "level": "starter",
        "theme": "people_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🧑",
        "form": "noun",
        "plural": "adulti",
        "definitions": [
            {
                "text": "Persona non più bambina.",
                "examples": [
                    "Un biglietto per adulti."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "aˈdulto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "consiglio",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💡",
        "form": "noun",
        "plural": "consigli",
        "definitions": [
            {
                "text": "Suggerimento per aiutare.",
                "examples": [
                    "Dammi un consiglio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "konˈsiʎʎo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "età",
        "level": "starter",
        "theme": "age_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🎂",
        "form": "noun",
        "plural": "età",
        "definitions": [
            {
                "text": "Numero di anni vissuti.",
                "examples": [
                    "Che età hai?"
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "eˈta",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "aria",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🌬️",
        "form": "noun",
        "plural": "arie",
        "definitions": [
            {
                "text": "Gas che si respira.",
                "examples": [
                    "L'aria è pura qui."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "dell'",
        "transcription": "ˈaria",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "quartiere",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📍",
        "form": "noun",
        "plural": "quartieri",
        "definitions": [
            {
                "text": "Parte di una città.",
                "examples": [
                    "È il mio quartiere."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "kwarˈtjɛːre",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "arte",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🎨",
        "form": "noun",
        "plural": "arti",
        "definitions": [
            {
                "text": "Creazione di cose belle.",
                "examples": [
                    "Amo l'arte moderna."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ˈarte",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "band",
        "level": "starter",
        "theme": "music_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎸",
        "form": "noun",
        "plural": "band",
        "definitions": [
            {
                "text": "Gruppo di musicisti.",
                "examples": [
                    "Una rock band."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈbɛnd",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "compleanno",
        "level": "starter",
        "theme": "personal_identity_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎂",
        "form": "noun",
        "plural": "compleanni",
        "definitions": [
            {
                "text": "Giorno della nascita.",
                "examples": [
                    "Buon compleanno!"
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "kompleˈanno",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "barca",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⛵",
        "form": "noun",
        "plural": "barche",
        "definitions": [
            {
                "text": "Veicolo per l'acqua.",
                "examples": [
                    "La barca è sul mare."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈbarka",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "affari",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "gli",
        "gender": "masculine",
        "emoji": "💼",
        "form": "noun",
        "plural": "affari",
        "definitions": [
            {
                "text": "Attività commerciali.",
                "examples": [
                    "Viaggia per affari."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "degli",
        "transcription": "afˈfaːri",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "università",
        "level": "starter",
        "theme": "types_of_education_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🎓",
        "form": "noun",
        "plural": "università",
        "definitions": [
            {
                "text": "Scuola superiore.",
                "examples": [
                    "Vado all'università."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "universiˈta",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "azienda",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🏢",
        "form": "noun",
        "plural": "aziende",
        "definitions": [
            {
                "text": "Luogo di lavoro o servizio.",
                "examples": [
                    "È una grande azienda."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "adˈdzjɛnda",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "concerto",
        "level": "starter",
        "theme": "music_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎵",
        "form": "noun",
        "plural": "concerti",
        "definitions": [
            {
                "text": "Spettacolo musicale.",
                "examples": [
                    "Un concerto di piano."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "konˈtʃɛrto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "conversazione",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💬",
        "form": "noun",
        "plural": "conversazioni",
        "definitions": [
            {
                "text": "Parlare insieme.",
                "examples": [
                    "Una conversazione interessante."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "konverzatˈtsjone",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "ancora",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
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
        "transcription": "ˈancora"
    },
    {
        "word": "fa",
        "level": "starter",
        "theme": "duration_expressions_A1",
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
        "transcription": "ˈfa"
    },
    {
        "word": "anche",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "article": "",
        "gender": "",
        "emoji": "➕",
        "form": "adjunction",
        "plural": "",
        "definitions": [
            {
                "text": "Pure.",
                "examples": [
                    "Anch'io."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "transcription": "ˈanche"
    },
    {
        "word": "veramente",
        "level": "starter",
        "theme": "basic_intensifiers_A1",
        "article": "",
        "gender": "",
        "emoji": "‼️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Realmente.",
                "examples": [
                    "È veramente bello."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "transcription": "ˈveramente"
    },
    {
        "word": "lì",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": "👉",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "In quel posto.",
                "examples": [
                    "Il gatto è lì."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "transcription": "ˈlì"
    },
    {
        "word": "matita",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "✏️",
        "form": "noun",
        "plural": "matite",
        "definitions": [
            {
                "text": "Oggetto per scrivere.",
                "examples": [
                    "Una matita colorata."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈmatita",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "carta",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📄",
        "form": "noun",
        "plural": "carte",
        "definitions": [
            {
                "text": "Materiale in fogli.",
                "examples": [
                    "Un foglio di carta."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈcarta",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "portafoglio",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👛",
        "form": "noun",
        "plural": "portafogli",
        "definitions": [
            {
                "text": "Oggetto per i soldi.",
                "examples": [
                    "Ho il mio portafoglio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈportafoglio",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "ombrello",
        "level": "starter",
        "theme": "weather_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "☂️",
        "form": "noun",
        "plural": "ombrelli",
        "definitions": [
            {
                "text": "Oggetto contro la pioggia.",
                "examples": [
                    "Prendi l'ombrello."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ˈombrello",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "occhiali",
        "level": "starter",
        "theme": "accessories_A1",
        "article": "gli",
        "gender": "masculine",
        "emoji": "👓",
        "form": "noun",
        "plural": "occhiali",
        "definitions": [
            {
                "text": "Oggetto per vedere meglio.",
                "examples": [
                    "I miei occhiali sono sul tavolo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "degli",
        "transcription": "ˈocchiali",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "signore",
        "level": "starter",
        "theme": "name_greeting_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "plural": "signori",
        "definitions": [
            {
                "text": "Uomo adulto.",
                "examples": [
                    "Buongiorno, signore."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈsignore",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "signora",
        "level": "starter",
        "theme": "name_greeting_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "plural": "signore",
        "definitions": [
            {
                "text": "Donna adulta.",
                "examples": [
                    "Grazie, signora."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈsignora",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "città",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏙️",
        "form": "noun",
        "plural": "città",
        "definitions": [
            {
                "text": "Luogo con molte case.",
                "examples": [
                    "Roma è una grande città."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈcittà",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "paese",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🗺️",
        "form": "noun",
        "plural": "paesi",
        "definitions": [
            {
                "text": "Territorio di una nazione.",
                "examples": [
                    "L'Italia è un bel paese."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈpaese",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "mondo",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌍",
        "form": "noun",
        "plural": "mondi",
        "definitions": [
            {
                "text": "L'intera Terra.",
                "examples": [
                    "Tutto il mondo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈmondo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "gente",
        "level": "starter",
        "theme": "people_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👥",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Persone in generale.",
                "examples": [
                    "C'è molta gente."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈgente",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "ora",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "⌚",
        "form": "noun",
        "plural": "ore",
        "definitions": [
            {
                "text": "Sessanta minuti.",
                "examples": [
                    "È l'una."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ˈora",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "minuto",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "⏱️",
        "form": "noun",
        "plural": "minuti",
        "definitions": [
            {
                "text": "Sessanta secondi.",
                "examples": [
                    "Aspetta un minuto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈminuto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "secondo",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "⏱️",
        "form": "noun",
        "plural": "secondi",
        "definitions": [
            {
                "text": "Tempo molto breve.",
                "examples": [
                    "Un secondo, per favore."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈsecondo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "ieri",
        "level": "starter",
        "theme": "times_day_A1",
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
        "transcription": "ˈjɛːri"
    },
    {
        "word": "mezzanotte",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🕛",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Le dodici di notte.",
                "examples": [
                    "È mezzanotte."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈmezzanotte",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "mezzogiorno",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🕛",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Le dodici del giorno.",
                "examples": [
                    "È mezzogiorno."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈmezzogiorno",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "lavoro",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💼",
        "form": "noun",
        "plural": "lavori",
        "definitions": [
            {
                "text": "Ciò che si fa per vivere.",
                "examples": [
                    "Vado al lavoro."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "laˈvoːro",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "impiego",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🛠️",
        "form": "noun",
        "plural": "impieghi",
        "definitions": [
            {
                "text": "Lavoro o occupazione.",
                "examples": [
                    "Ho un nuovo impiego."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "imˈpjɛːɡo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "mestiere",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👔",
        "form": "noun",
        "plural": "mestieri",
        "definitions": [
            {
                "text": "Professione.",
                "examples": [
                    "Qual è il tuo mestiere?"
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "mesˈtjɛːre",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "cliente",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👤",
        "form": "noun",
        "plural": "clienti",
        "definitions": [
            {
                "text": "Persona che compra un servizio.",
                "examples": [
                    "Il cliente ha ragione."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈcliente",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "messaggio",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "✉️",
        "form": "noun",
        "plural": "messaggi",
        "definitions": [
            {
                "text": "Informazione inviata.",
                "examples": [
                    "Hai un messaggio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "mesˈsaddʒo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "email",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "📧",
        "form": "noun",
        "plural": "email",
        "definitions": [
            {
                "text": "Posta elettronica.",
                "examples": [
                    "Rispondo alle email."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ˈiːmeil",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "sito web",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌐",
        "form": "noun",
        "plural": "siti web",
        "definitions": [
            {
                "text": "Pagine su internet.",
                "examples": [
                    "Guarda questo sito."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈsiːto ˈwɛb",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "password",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🔑",
        "form": "noun",
        "plural": "password",
        "definitions": [
            {
                "text": "Codice segreto.",
                "examples": [
                    "Ho dimenticato la password."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈpassvord",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "tastiera",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⌨️",
        "form": "noun",
        "plural": "tastiere",
        "definitions": [
            {
                "text": "Oggetto per scrivere al computer.",
                "examples": [
                    "Una tastiera nuova."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "tasˈtjɛːra",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "mouse",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🖱️",
        "form": "noun",
        "plural": "mouse",
        "definitions": [
            {
                "text": "Oggetto per muovere il cursore.",
                "examples": [
                    "Il mouse è rotto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈmouse",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "schermo",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🖥️",
        "form": "noun",
        "plural": "schermi",
        "definitions": [
            {
                "text": "Parte del computer per vedere.",
                "examples": [
                    "Lo schermo è luminoso."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello",
        "transcription": "ˈskɛrmo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "musica",
        "level": "starter",
        "theme": "music_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎵",
        "form": "noun",
        "plural": "musiche",
        "definitions": [
            {
                "text": "Suoni melodici.",
                "examples": [
                    "Ascolto musica."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "della",
        "transcription": "ˈmusica",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "canzone",
        "level": "starter",
        "theme": "music_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎤",
        "form": "noun",
        "plural": "canzoni",
        "definitions": [
            {
                "text": "Parole con musica.",
                "examples": [
                    "È una bella canzone."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "kanˈtsoːne",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "film",
        "level": "starter",
        "theme": "cinema_film_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎞️",
        "form": "noun",
        "plural": "film",
        "definitions": [
            {
                "text": "Storia vista al cinema.",
                "examples": [
                    "Guardo un film."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈfilm",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "foto",
        "level": "starter",
        "theme": "hobbies_interests_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📷",
        "form": "noun",
        "plural": "foto",
        "definitions": [
            {
                "text": "Immagine da una macchina fotografica.",
                "examples": [
                    "Una foto ricordo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈfɔːto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "sport",
        "level": "starter",
        "theme": "common_sports_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "⚽",
        "form": "noun",
        "plural": "sport",
        "definitions": [
            {
                "text": "Attività fisica.",
                "examples": [
                    "Faccio sport."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello",
        "transcription": "ˈsport",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "calcio",
        "level": "starter",
        "theme": "common_sports_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "⚽",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Sport con palla tonda.",
                "examples": [
                    "Giochiamo a calcio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈcalcio",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "tennis",
        "level": "starter",
        "theme": "common_sports_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎾",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Sport con la racchetta.",
                "examples": [
                    "Lui gioca a tennis."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈtennis",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "nuoto",
        "level": "starter",
        "theme": "common_sports_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏊",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "L'atto di nuotare.",
                "examples": [
                    "Mi piace il nuoto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈnuoto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "mensa",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍴",
        "form": "noun",
        "plural": "mense",
        "definitions": [
            {
                "text": "Ristorante per lavoratori o studenti.",
                "examples": [
                    "Mangiamo in mensa."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈmɛnsa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "mercato",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛒",
        "form": "noun",
        "plural": "mercati",
        "definitions": [
            {
                "text": "Luogo per comprare cibo fresco.",
                "examples": [
                    "Andiamo al mercato."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "merˈkaːto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "biglietto",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎟️",
        "form": "noun",
        "plural": "biglietti",
        "definitions": [
            {
                "text": "Tagliando per bus o cinema.",
                "examples": [
                    "Un biglietto per il treno."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈbiglietto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "ricevuta",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📄",
        "form": "noun",
        "plural": "ricevute",
        "definitions": [
            {
                "text": "Foglio che prova il pagamento.",
                "examples": [
                    "Tieni la ricevuta."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈricevuta",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "fattura",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💳",
        "form": "noun",
        "plural": "fatture",
        "definitions": [
            {
                "text": "Documento di pagamento.",
                "examples": [
                    "Pago la fattura."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "fatˈtuːra",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "carta di credito",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💳",
        "form": "noun",
        "plural": "carte di credito",
        "definitions": [
            {
                "text": "Carta per pagare.",
                "examples": [
                    "Pago con la carta."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈkarta di ˈkreːdito",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "contanti",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "i",
        "gender": "masculine",
        "emoji": "💵",
        "form": "noun",
        "plural": "contanti",
        "definitions": [
            {
                "text": "Soldi liquidi.",
                "examples": [
                    "Non ho contanti."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dei",
        "transcription": "konˈtanti",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "sale",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧂",
        "form": "noun",
        "plural": "sali",
        "definitions": [
            {
                "text": "Polvere bianca per salare.",
                "examples": [
                    "Un po' di sale."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "del",
        "transcription": "ˈsale",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "pepe",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧂",
        "form": "noun",
        "plural": "pepi",
        "definitions": [
            {
                "text": "Polvere nera piccante.",
                "examples": [
                    "Metti il pepe."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈpepe",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "olio",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏺",
        "form": "noun",
        "plural": "oli",
        "definitions": [
            {
                "text": "Liquido per condire.",
                "examples": [
                    "Olio d'oliva."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "dell'",
        "transcription": "ˈolio",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "aceto",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏺",
        "form": "noun",
        "plural": "aceti",
        "definitions": [
            {
                "text": "Liquido acido per insalata.",
                "examples": [
                    "Sale, pepe e aceto."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "dell'",
        "transcription": "ˈaceto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "merenda",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍪",
        "form": "noun",
        "plural": "merende",
        "definitions": [
            {
                "text": "Pasto del pomeriggio.",
                "examples": [
                    "I bambini fanno merenda."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "meˈrɛnda",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "ospite",
        "level": "starter",
        "theme": "family_life_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "👤",
        "form": "noun",
        "plural": "ospiti",
        "definitions": [
            {
                "text": "Persona che si riceve.",
                "examples": [
                    "Abbiamo ospiti."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ˈɔspite",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "festa",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎉",
        "form": "noun",
        "plural": "feste",
        "definitions": [
            {
                "text": "Momento per divertirsi insieme.",
                "examples": [
                    "Buona festa!"
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈfɛsta",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "viaggiatore",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👤",
        "form": "noun",
        "plural": "viaggiatori",
        "definitions": [
            {
                "text": "Persona che viaggia.",
                "examples": [
                    "Il treno è pieno di viaggiatori."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "viaddʒaˈtoːre",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "valigia",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧳",
        "form": "noun",
        "plural": "valigie",
        "definitions": [
            {
                "text": "Contenitore per i viaggi.",
                "examples": [
                    "Preparo la valigia."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "vaˈliːdʒa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "zaino",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🎒",
        "form": "noun",
        "plural": "zaini",
        "definitions": [
            {
                "text": "Sacca da spalla.",
                "examples": [
                    "Ho un grosso zaino."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello",
        "transcription": "ˈdzaino",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "passaporto",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛂",
        "form": "noun",
        "plural": "passaporti",
        "definitions": [
            {
                "text": "Documento per viaggiare.",
                "examples": [
                    "Dov'è il passaporto?"
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "passaˈpɔrto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "mappa",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🗺️",
        "form": "noun",
        "plural": "mappe",
        "definitions": [
            {
                "text": "Disegno di un luogo.",
                "examples": [
                    "Guarda la mappa."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈmappa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "piantina",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📍",
        "form": "noun",
        "plural": "piantine",
        "definitions": [
            {
                "text": "Mappa di una città.",
                "examples": [
                    "La piantina di Roma."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "pjanˈtiːna",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "via",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛣️",
        "form": "noun",
        "plural": "vie",
        "definitions": [
            {
                "text": "Strada di città.",
                "examples": [
                    "In che via?"
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈviːa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "sentiero",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👣",
        "form": "noun",
        "plural": "sentieri",
        "definitions": [
            {
                "text": "Piccola strada.",
                "examples": [
                    "Il sentiero nel bosco."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "senˈtjɛːro",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "piazza",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏙️",
        "form": "noun",
        "plural": "piazze",
        "definitions": [
            {
                "text": "Spazio pubblico aperto.",
                "examples": [
                    "La piazza del Duomo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈpjattsa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "ponte",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌉",
        "form": "noun",
        "plural": "ponti",
        "definitions": [
            {
                "text": "Passaggio sopra l'acqua.",
                "examples": [
                    "Il ponte è vecchio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈponte",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "foresta",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌲",
        "form": "noun",
        "plural": "foreste",
        "definitions": [
            {
                "text": "Luogo con molti alberi.",
                "examples": [
                    "Camminiamo nella foresta."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "foˈrɛsta",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "campagna",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚜",
        "form": "noun",
        "plural": "campagne",
        "definitions": [
            {
                "text": "Luogo fuori città.",
                "examples": [
                    "Vivere in campagna."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "kamˈpaɲɲa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "villaggio",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏘️",
        "form": "noun",
        "plural": "villaggi",
        "definitions": [
            {
                "text": "Piccolo centro abitato.",
                "examples": [
                    "Un bel villaggio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "vilˈladdʒo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "lingua",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🗣️",
        "form": "noun",
        "plural": "lingue",
        "definitions": [
            {
                "text": "Ciò che si parla.",
                "examples": [
                    "L'italiano è una lingua."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈlingua",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "parola",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📝",
        "form": "noun",
        "plural": "parole",
        "definitions": [
            {
                "text": "Unità del linguaggio.",
                "examples": [
                    "Una parola difficile."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "paˈrɔːla",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "frase",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📝",
        "form": "noun",
        "plural": "frasi",
        "definitions": [
            {
                "text": "Insieme di parole.",
                "examples": [
                    "Fai una frase."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈfraːze",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "domanda",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "❓",
        "form": "noun",
        "plural": "domande",
        "definitions": [
            {
                "text": "Ciò che si chiede.",
                "examples": [
                    "Ho una domanda."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈdomanda",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "risposta",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💡",
        "form": "noun",
        "plural": "risposte",
        "definitions": [
            {
                "text": "Ciò che si dice dopo una domanda.",
                "examples": [
                    "La risposta è corretta."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "risˈpɔsta",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "idea",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "💡",
        "form": "noun",
        "plural": "idee",
        "definitions": [
            {
                "text": "Ciò che si pensa.",
                "examples": [
                    "È una buona idea."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "iˈdɛːa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "parere",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💬",
        "form": "noun",
        "plural": "pareri",
        "definitions": [
            {
                "text": "Ciò che si crede su un tema.",
                "examples": [
                    "Dammi il tuo parere."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "paˈreːre",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "opinione",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🗣️",
        "form": "noun",
        "plural": "opinioni",
        "definitions": [
            {
                "text": "Giudizio personale.",
                "examples": [
                    "Un'opinione forte."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "opiniˈoːne",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "scelta",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👉",
        "form": "noun",
        "plural": "scelte",
        "definitions": [
            {
                "text": "Atto di scegliere.",
                "examples": [
                    "È la tua scelta."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈʃɛlta",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "decisione",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⚖️",
        "form": "noun",
        "plural": "decisioni",
        "definitions": [
            {
                "text": "Ciò che si decide.",
                "examples": [
                    "Prendere una decisione."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "detʃiziˈoːne",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "piano",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "piani",
        "definitions": [
            {
                "text": "Ciò che si prevede di fare.",
                "examples": [
                    "Qual è il piano?"
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈpjaːno",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "progetto",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📊",
        "form": "noun",
        "plural": "progetti",
        "definitions": [
            {
                "text": "Lavoro programmato.",
                "examples": [
                    "Un nuovo progetto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "proˈdʒɛtto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "successo",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏆",
        "form": "noun",
        "plural": "successi",
        "definitions": [
            {
                "text": "Riuscita positiva.",
                "examples": [
                    "È un successo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "sutˈtʃɛsso",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "errore",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "❌",
        "form": "noun",
        "plural": "errori",
        "definitions": [
            {
                "text": "Sbaglio.",
                "examples": [
                    "Fare un errore."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ˈerrore",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "sbaglio",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "⚠️",
        "form": "noun",
        "plural": "sbagli",
        "definitions": [
            {
                "text": "Mancanza o errore.",
                "examples": [
                    "Uno sbaglio di grammatica."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello",
        "transcription": "ˈzbaʎʎo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "vendita",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏷️",
        "form": "noun",
        "plural": "vendite",
        "definitions": [
            {
                "text": "Atto di vendere.",
                "examples": [
                    "In vendita."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈvendita",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "acquisto",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🛒",
        "form": "noun",
        "plural": "acquisti",
        "definitions": [
            {
                "text": "Atto di comprare.",
                "examples": [
                    "Un acquisto utile."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "akˈkwisto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "boutique",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👗",
        "form": "noun",
        "plural": "boutique",
        "definitions": [
            {
                "text": "Piccolo negozio elegante.",
                "examples": [
                    "Una bella boutique."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "buˈtik",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "centro commerciale",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏬",
        "form": "noun",
        "plural": "centri commerciali",
        "definitions": [
            {
                "text": "Luogo con molti negozi.",
                "examples": [
                    "Andiamo al centro commerciale."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈtʃɛntro kommerˈtʃaːle",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "monete",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "le",
        "gender": "feminine",
        "emoji": "🪙",
        "form": "noun",
        "plural": "monete",
        "definitions": [
            {
                "text": "Soldi metallici.",
                "examples": [
                    "Hai delle monete?"
                ]
            }
        ],
        "countability": "countable",
        "partitive": "delle",
        "transcription": "moˈneːte",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "banconota",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💵",
        "form": "noun",
        "plural": "banconote",
        "definitions": [
            {
                "text": "Soldi di carta.",
                "examples": [
                    "Una banconota da dieci euro."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "baŋkoˈnɔːta",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "conto",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏦",
        "form": "noun",
        "plural": "conti",
        "definitions": [
            {
                "text": "Conto in banca.",
                "examples": [
                    "Aprire un conto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈkonto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "risparmio",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💰",
        "form": "noun",
        "plural": "risparmi",
        "definitions": [
            {
                "text": "Soldi messi da parte.",
                "examples": [
                    "I miei risparmi."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "risˈparmjo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "spesa",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💸",
        "form": "noun",
        "plural": "spese",
        "definitions": [
            {
                "text": "Soldi che escono.",
                "examples": [
                    "Ridurre le spese."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈspeːza",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "pagamento",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💳",
        "form": "noun",
        "plural": "pagamenti",
        "definitions": [
            {
                "text": "Azione di pagare.",
                "examples": [
                    "Pagamento con carta."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "paɡaˈmento",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "prodotto",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📦",
        "form": "noun",
        "plural": "prodotti",
        "definitions": [
            {
                "text": "Cosa fabbricata.",
                "examples": [
                    "Un nuovo prodotto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "proˈdɔtto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "servizio",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🤝",
        "form": "noun",
        "plural": "servizi",
        "definitions": [
            {
                "text": "Azione di aiutare.",
                "examples": [
                    "Un buon servizio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "serˈvittsjo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "offerta",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🏷️",
        "form": "noun",
        "plural": "offerte",
        "definitions": [
            {
                "text": "Proposta di prezzo.",
                "examples": [
                    "Un'offerta speciale."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ofˈfɛrta",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "consegna",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚚",
        "form": "noun",
        "plural": "consegne",
        "definitions": [
            {
                "text": "Trasporto di merci.",
                "examples": [
                    "Consegna a domicilio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "konˈseɲɲa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "ordine",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "📦",
        "form": "noun",
        "plural": "ordini",
        "definitions": [
            {
                "text": "Acquisto richiesto.",
                "examples": [
                    "Fare un ordine."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "ˈordine",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "clientela",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👥",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Insieme dei clienti.",
                "examples": [
                    "Una clientela fedele."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "klijenˈtɛːla",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "entrata",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🚪",
        "form": "noun",
        "plural": "entrate",
        "definitions": [
            {
                "text": "Luogo da cui si entra.",
                "examples": [
                    "L'entrata della casa."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "enˈtraːta",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "uscita",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🚪",
        "form": "noun",
        "plural": "uscite",
        "definitions": [
            {
                "text": "Luogo da cui si esce.",
                "examples": [
                    "L'uscita è lì."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "uʃˈʃiːta",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "scale",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "le",
        "gender": "feminine",
        "emoji": "🪜",
        "form": "noun",
        "plural": "scale",
        "definitions": [
            {
                "text": "Serie di scalini.",
                "examples": [
                    "Salire le scale."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "delle",
        "transcription": "ˈskaːle",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "ascensore",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🛗",
        "form": "noun",
        "plural": "ascensori",
        "definitions": [
            {
                "text": "Apparecchio per salire i piani.",
                "examples": [
                    "Prendere l'ascensore."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "aʃʃenˈsoːre",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "corridoio",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👣",
        "form": "noun",
        "plural": "corridoi",
        "definitions": [
            {
                "text": "Passaggio lungo e stretto.",
                "examples": [
                    "Il corridoio è buio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "korriˈdoːjo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "muri",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "i",
        "gender": "masculine",
        "emoji": "🧱",
        "form": "noun",
        "plural": "muri",
        "definitions": [
            {
                "text": "Pareti di una stanza.",
                "examples": [
                    "Muri bianchi."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dei",
        "transcription": "ˈmuːri",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "tetto",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏠",
        "form": "noun",
        "plural": "tetti",
        "definitions": [
            {
                "text": "Copertura di una casa.",
                "examples": [
                    "Il gatto è sul tetto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈtetto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "giardino",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏡",
        "form": "noun",
        "plural": "giardini",
        "definitions": [
            {
                "text": "Terreno con piante.",
                "examples": [
                    "Lavorare in giardino."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "dʒarˈdiːno",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "garage",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🚗",
        "form": "noun",
        "plural": "garage",
        "definitions": [
            {
                "text": "Luogo per l'auto.",
                "examples": [
                    "L'auto è in garage."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ɡaˈraːʒ",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "soggiorno",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "soggiorni",
        "definitions": [
            {
                "text": "Stanza per stare insieme.",
                "examples": [
                    "Guardare la tv in soggiorno."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "sodˈdʒorno",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "sala da pranzo",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "sale da pranzo",
        "definitions": [
            {
                "text": "Stanza per mangiare.",
                "examples": [
                    "Cenare in sala da pranzo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈsaːla da ˈprandzo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "doccia",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚿",
        "form": "noun",
        "plural": "docce",
        "definitions": [
            {
                "text": "Installazione per lavarsi in piedi.",
                "examples": [
                    "Fare una doccia."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈdottʃa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "rubinetto",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🚰",
        "form": "noun",
        "plural": "rubinetti",
        "definitions": [
            {
                "text": "Oggetto per l'acqua.",
                "examples": [
                    "Chiudi il rubinetto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "rubiˈnetto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "sapone",
        "level": "starter",
        "theme": "household_tasks_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧼",
        "form": "noun",
        "plural": "saponi",
        "definitions": [
            {
                "text": "Prodotto per lavarsi.",
                "examples": [
                    "Lavarsi col sapone."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "saˈpoːne",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "asciugamano",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🧺",
        "form": "noun",
        "plural": "asciugamani",
        "definitions": [
            {
                "text": "Panno per asciugarsi.",
                "examples": [
                    "Un asciugamano pulito."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "aʃʃuɡaˈmaːno",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "cuscino",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☁️",
        "form": "noun",
        "plural": "cuscini",
        "definitions": [
            {
                "text": "Appoggio per la testa.",
                "examples": [
                    "Un cuscino morbido."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "kuʃˈʃiːno",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "coperta",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧶",
        "form": "noun",
        "plural": "coperte",
        "definitions": [
            {
                "text": "Telo caldo per il letto.",
                "examples": [
                    "Una coperta di lana."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "koˈpɛrta",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "armadio",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🚪",
        "form": "noun",
        "plural": "armadi",
        "definitions": [
            {
                "text": "Mobile per vestiti.",
                "examples": [
                    "Riorganizzare l'armadio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "arˈmaːdjo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "scaffale",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "📶",
        "form": "noun",
        "plural": "scaffali",
        "definitions": [
            {
                "text": "Ripiano per libri.",
                "examples": [
                    "Uno scaffale pieno."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello",
        "transcription": "skafˈfaːle",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "poltrona",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "poltrone",
        "definitions": [
            {
                "text": "Seduta comoda.",
                "examples": [
                    "Sedersi in poltrona."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "polˈtroːna",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "divano",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "divani",
        "definitions": [
            {
                "text": "Grande seduta per più persone.",
                "examples": [
                    "Dormire sul divano."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "diˈvaːno",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "radio",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📻",
        "form": "noun",
        "plural": "radio",
        "definitions": [
            {
                "text": "Apparecchio audio.",
                "examples": [
                    "Ascoltare la radio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈraːdjo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "sveglia",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⏰",
        "form": "noun",
        "plural": "sveglie",
        "definitions": [
            {
                "text": "Orologio che suona al mattino.",
                "examples": [
                    "La sveglia suona."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈzveʎʎa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "jeans",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "i",
        "gender": "masculine",
        "emoji": "👖",
        "form": "noun",
        "plural": "jeans",
        "definitions": [
            {
                "text": "Pantaloni di tela blu.",
                "examples": [
                    "Indossare i jeans."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dei",
        "transcription": "ˈdʒiːnz",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "camicia",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👔",
        "form": "noun",
        "plural": "camicie",
        "definitions": [
            {
                "text": "Indumento con bottoni.",
                "examples": [
                    "Una camicia bianca."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "kaˈmiːtʃa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "t-shirt",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👕",
        "form": "noun",
        "plural": "t-shirt",
        "definitions": [
            {
                "text": "Maglietta a maniche corte.",
                "examples": [
                    "Una t-shirt di cotone."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈtiːʃert",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "giacca",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧥",
        "form": "noun",
        "plural": "giacche",
        "definitions": [
            {
                "text": "Cappotto leggero.",
                "examples": [
                    "Una giacca leggera."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈdʒakka",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "berretto",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧢",
        "form": "noun",
        "plural": "berretti",
        "definitions": [
            {
                "text": "Cappello sportivo.",
                "examples": [
                    "Mettere un berretto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "berˈretto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "zuccotto",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🧣",
        "form": "noun",
        "plural": "zuccotti",
        "definitions": [
            {
                "text": "Cappello di lana.",
                "examples": [
                    "Uno zuccotto caldo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello",
        "transcription": "tsukˈkɔtto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "sciarpa",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧣",
        "form": "noun",
        "plural": "sciarpe",
        "definitions": [
            {
                "text": "Per il collo.",
                "examples": [
                    "Indossare la sciarpa."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈʃarpa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "guanti",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "i",
        "gender": "masculine",
        "emoji": "🧤",
        "form": "noun",
        "plural": "guanti",
        "definitions": [
            {
                "text": "Per le mani.",
                "examples": [
                    "Un paio di guanti."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dei",
        "transcription": "ˈɡwanti",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "cintura",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎗️",
        "form": "noun",
        "plural": "cinture",
        "definitions": [
            {
                "text": "Per tenere i pantaloni.",
                "examples": [
                    "Una cintura di pelle."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "tʃinˈtuːra",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "costume da bagno",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🩱",
        "form": "noun",
        "plural": "costumi da bagno",
        "definitions": [
            {
                "text": "Per nuotare.",
                "examples": [
                    "Prendere il costume."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "kosˈtuːme da ˈbaɲɲo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "pigiama",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛌",
        "form": "noun",
        "plural": "pigiami",
        "definitions": [
            {
                "text": "Per dormire.",
                "examples": [
                    "Mettere il pigiama."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "piˈdʒaːma",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "fermata dell'autobus",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚌",
        "form": "noun",
        "plural": "fermate dell'autobus",
        "definitions": [
            {
                "text": "Luogo dei bus.",
                "examples": [
                    "Aspettare alla fermata."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ferˈmaːta delˈlautobus",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "banchina",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛤️",
        "form": "noun",
        "plural": "banchine",
        "definitions": [
            {
                "text": "Bordo del binario.",
                "examples": [
                    "Il treno arriva alla banchina 3."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "baŋˈkiːna",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "binario",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛤️",
        "form": "noun",
        "plural": "binari",
        "definitions": [
            {
                "text": "Percorso del treno.",
                "examples": [
                    "Il binario è libero."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "biˈnaːrjo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "metropolitana",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚇",
        "form": "noun",
        "plural": "metropolitane",
        "definitions": [
            {
                "text": "Treno sotterraneo.",
                "examples": [
                    "Prendere la metro."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "metropoliˈtaːna",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "taxi",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🚕",
        "form": "noun",
        "plural": "taxi",
        "definitions": [
            {
                "text": "Auto con autista.",
                "examples": [
                    "Chiamare un taxi."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈtaksi",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "velocità",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏎️",
        "form": "noun",
        "plural": "velocità",
        "definitions": [
            {
                "text": "Rapidità di movimento.",
                "examples": [
                    "Limitare la velocità."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "velotʃiˈta",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "bagagli",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "i",
        "gender": "masculine",
        "emoji": "🧳",
        "form": "noun",
        "plural": "bagagli",
        "definitions": [
            {
                "text": "Effetti personali.",
                "examples": [
                    "Portare i bagagli."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dei",
        "transcription": "baˈɡaʎʎi",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "partenza",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛫",
        "form": "noun",
        "plural": "partenze",
        "definitions": [
            {
                "text": "Azione di partire.",
                "examples": [
                    "L'ora della partenza."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "parˈtɛntsa",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "arrivo",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🛬",
        "form": "noun",
        "plural": "arrivi",
        "definitions": [
            {
                "text": "Azione di arrivare.",
                "examples": [
                    "L'ora dell'arrivo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "arˈriːvo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "volo",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "plural": "voli",
        "definitions": [
            {
                "text": "Viaggio in aereo.",
                "examples": [
                    "Un volo notturno."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈvoːlo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "prenotazione",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📖",
        "form": "noun",
        "plural": "prenotazioni",
        "definitions": [
            {
                "text": "Azione di prenotare.",
                "examples": [
                    "Fare una prenotazione."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "prenotatˈtsjone",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "camera d'albergo",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏨",
        "form": "noun",
        "plural": "camere d'albergo",
        "definitions": [
            {
                "text": "Stanza in albergo.",
                "examples": [
                    "Prenotare una camera d'albergo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈkaːmera dalˈbɛrɡo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "reception",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛎️",
        "form": "noun",
        "plural": "reception",
        "definitions": [
            {
                "text": "Accoglienza in hotel.",
                "examples": [
                    "Andare alla reception."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "transcription": "reˈtʃɛpʃon",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "spuntino",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🥣",
        "form": "noun",
        "plural": "spuntini",
        "definitions": [
            {
                "text": "Piccolo pasto.",
                "examples": [
                    "Fare uno spuntino."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dello",
        "transcription": "spunˈtiːno",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "pasto",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "pasti",
        "definitions": [
            {
                "text": "L'atto di mangiare.",
                "examples": [
                    "Un pasto abbondante."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈpasto",
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "orario",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "⌚",
        "form": "noun",
        "plural": "orari",
        "definitions": [
            {
                "text": "Tempo stabilito.",
                "examples": [
                    "L'orario dei treni."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "oˈraːrjo",
        "synonyms": [],
        "subtext": ""
    },
    {
        "level": "starter",
        "form": "noun",
        "plural": "indirizzi",
        "word": "indirizzo",
        "theme": "address_location_A1",
        "gender": "masculine",
        "article": "l'",
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "indiˈrittso",
        "definitions": [
            {
                "text": "Il luogo dove qualcuno vive.",
                "examples": [
                    "Qual è il tuo indirizzo?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": ""
    },
    {
        "level": "starter",
        "form": "noun",
        "plural": "cognome",
        "word": "cognome",
        "theme": "personal_identity_A1",
        "gender": "masculine",
        "article": "il",
        "countability": "countable",
        "partitive": "del",
        "transcription": "koɲˈɲome",
        "definitions": [
            {
                "text": "Il nome di famiglia.",
                "examples": [
                    "Il mio cognome è Rossi."
                ]
            }
        ],
        "synonyms": [],
        "subtext": ""
    },
    {
        "level": "starter",
        "form": "noun",
        "plural": "nature",
        "word": "natura",
        "theme": "nature_landscapes_A1",
        "gender": "feminine",
        "article": "la",
        "countability": "uncountable",
        "partitive": "della",
        "transcription": "naˈtura",
        "definitions": [
            {
                "text": "Il mondo fisico e tutto ciò che contiene.",
                "examples": [
                    "Amo la natura."
                ]
            }
        ],
        "synonyms": [],
        "subtext": ""
    },
    {
        "level": "starter",
        "form": "noun",
        "plural": "tempo meteorologici",
        "word": "tempo meteorologico",
        "theme": "weather_A1",
        "gender": "masculine",
        "article": "il",
        "countability": "uncountable",
        "partitive": "del",
        "transcription": "ˈtɛmpo meteoroˈlɔdʒiko",
        "definitions": [
            {
                "text": "Le condizioni di sole, pioggia, vento, ecc.",
                "examples": [
                    "Com'è il tempo oggi?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": ""
    },
    {
        "level": "starter",
        "form": "noun",
        "plural": "temperature",
        "word": "temperatura",
        "theme": "weather_A1",
        "gender": "feminine",
        "article": "la",
        "countability": "uncountable",
        "partitive": "della",
        "transcription": "temperaˈtura",
        "definitions": [
            {
                "text": "La misura del caldo o del freddo.",
                "examples": [
                    "La temperatura è alta."
                ]
            }
        ],
        "synonyms": [],
        "subtext": ""
    },
    {
        "level": "starter",
        "form": "noun",
        "plural": "occupazione",
        "word": "occupazione",
        "theme": "job_titles_professions_A1",
        "gender": "feminine",
        "article": "l'",
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "okkutpatˈtsjone",
        "definitions": [
            {
                "text": "Il lavoro di una persona.",
                "examples": [
                    "Qual è la tua occupazione?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": ""
    },
    {
        "level": "starter",
        "form": "noun",
        "plural": "informazioni",
        "word": "informazione",
        "theme": "personal_identity_A1",
        "gender": "feminine",
        "article": "l'",
        "countability": "uncountable",
        "partitive": "dell'",
        "transcription": "iŋformatˈtsjone",
        "definitions": [
            {
                "text": "Notizia o elemento che consente di conoscere qualcosa.",
                "examples": [
                    "Chiedo un'informazione.",
                    "Abbiamo molte informazioni."
                ]
            }
        ],
        "synonyms": [
            "notizia",
            "dato"
        ],
        "subtext": "chiedere informazioni"
    },
    {
        "level": "starter",
        "form": "noun",
        "plural": "nevi",
        "word": "neve",
        "theme": "weather_A1",
        "gender": "feminine",
        "article": "la",
        "countability": "uncountable",
        "partitive": "della",
        "transcription": "ˈneːve",
        "definitions": [
            {
                "text": "Acqua ghiacciata che cade dal cielo in fiocchi bianchi.",
                "examples": [
                    "La neve è bianca.",
                    "C'è molta neve in montagna."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "palla di neve"
    },
    {
        "level": "starter",
        "form": "noun",
        "plural": "nebbie",
        "word": "nebbia",
        "theme": "weather_A1",
        "gender": "feminine",
        "article": "la",
        "countability": "uncountable",
        "partitive": "della",
        "transcription": "ˈnebbja",
        "definitions": [
            {
                "text": "Vapore acqueo che impedisce la vista.",
                "examples": [
                    "C'è molta nebbia stamattina.",
                    "Non vedo bene a causa della nebbia."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "nebbia fitta"
    },
    {
        "level": "starter",
        "form": "noun",
        "plural": "mobili",
        "word": "mobili",
        "theme": "furniture_objects_A1",
        "gender": "masculine",
        "article": "i",
        "countability": "countable",
        "partitive": "dei",
        "transcription": "ˈmɔːbili",
        "definitions": [
            {
                "text": "Oggetti che arredano una casa.",
                "examples": [
                    "Compriamo dei mobili nuovi.",
                    "I mobili sono di legno."
                ]
            }
        ],
        "synonyms": [
            "arredamento"
        ],
        "subtext": "negozio di mobili"
    },
    {
        "word": "banana",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍌",
        "form": "noun",
        "plural": "banane",
        "countability": "countable",
        "partitive": "della",
        "transcription": "baˈnaːna",
        "definitions": [
            {
                "text": "Un frutto lungo e giallo.",
                "examples": [
                    "Mangio una banana a merenda."
                ]
            }
        ],
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "pizza",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍕",
        "form": "noun",
        "plural": "pizze",
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈpittsa",
        "definitions": [
            {
                "text": "Cibo tipico italiano con pomodoro e mozzarella.",
                "examples": [
                    "Voglio una pizza margherita."
                ]
            }
        ],
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "lavatrice",
        "level": "starter",
        "theme": "household_tasks_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧺",
        "form": "noun",
        "plural": "lavatrici",
        "countability": "countable",
        "partitive": "della",
        "transcription": "lavaˈtritʃe",
        "definitions": [
            {
                "text": "Macchina per lavare i vestiti.",
                "examples": [
                    "Metto i vestiti nella lavatrice."
                ]
            }
        ],
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "lavastoviglie",
        "level": "starter",
        "theme": "household_tasks_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "lavastoviglie",
        "countability": "countable",
        "partitive": "della",
        "transcription": "lavastoˈviʎʎe",
        "definitions": [
            {
                "text": "Macchina per lavare i piatti.",
                "examples": [
                    "Carico la lavastoviglie."
                ]
            }
        ],
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "forno",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🥘",
        "form": "noun",
        "plural": "forni",
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈforno",
        "definitions": [
            {
                "text": "Apparecchio per cuocere i cibi.",
                "examples": [
                    "La pizza è nel forno."
                ]
            }
        ],
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "frigorifero",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧊",
        "form": "noun",
        "plural": "frigoriferi",
        "countability": "countable",
        "partitive": "del",
        "transcription": "friɡoˈriːfero",
        "definitions": [
            {
                "text": "Apparecchio per conservare i cibi al fresco.",
                "examples": [
                    "Il latte è in frigorifero."
                ]
            }
        ],
        "synonyms": [
            "frigo"
        ],
        "subtext": ""
    },
    {
        "word": "tenda",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⛺",
        "form": "noun",
        "plural": "tende",
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈtɛnda",
        "definitions": [
            {
                "text": "Tessuto per coprire le finestre.",
                "examples": [
                    "Chiudi le tende."
                ]
            }
        ],
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "pesca",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍑",
        "form": "noun",
        "plural": "pesche",
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈpɛska",
        "definitions": [
            {
                "text": "Un frutto estivo con la buccia vellutata.",
                "examples": [
                    "Mangio una pesca dolce."
                ]
            }
        ],
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "pera",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍐",
        "form": "noun",
        "plural": "pere",
        "countability": "countable",
        "partitive": "della",
        "transcription": "ˈpeːra",
        "definitions": [
            {
                "text": "Un frutto a forma di campanella.",
                "examples": [
                    "La pera è matura."
                ]
            }
        ],
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "ciliegia",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍒",
        "form": "noun",
        "plural": "ciliegie",
        "countability": "countable",
        "partitive": "della",
        "transcription": "tʃiˈljɛːdʒa",
        "definitions": [
            {
                "text": "Un piccolo frutto rosso e tondo.",
                "examples": [
                    "Mangio una ciliegia."
                ]
            }
        ],
        "synonyms": [],
        "subtext": ""
    },
    {
        "word": "zanzara",
        "level": "starter",
        "theme": "animals_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🦟",
        "form": "noun",
        "plural": "zanzare",
        "transcription": "dzanˈdzara",
        "definitions": [
            {
                "text": "Un piccolo insetto volante che punge e succhia il sangue.",
                "examples": [
                    "Una zanzara mi ha punto stanotte."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "subtext": "insetto fastidioso",
        "opposite": null,
        "synonyms": []
    },
    {
        "word": "coleottero",
        "level": "starter",
        "theme": "animals_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🪲",
        "form": "noun",
        "plural": "coleotteri",
        "transcription": "koleˈɔttero",
        "definitions": [
            {
                "text": "Un insetto con ali anteriori rigide come scudi.",
                "examples": [
                    "Ho visto un coleottero nero in giardino."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "subtext": "insetto comune",
        "opposite": null,
        "synonyms": []
    },
    {
        "word": "tromba",
        "level": "starter",
        "theme": "music_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎺",
        "form": "noun",
        "plural": "trombe",
        "transcription": "ˈtromba",
        "definitions": [
            {
                "text": "Uno strumento musicale a fiato in ottone.",
                "examples": [
                    "Lui suona la tromba in una banda."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "subtext": "strumento a fiato",
        "opposite": null,
        "synonyms": []
    },
    {
        "word": "microonde",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍲",
        "form": "noun",
        "plural": "microonde",
        "transcription": "mikroˈonde",
        "definitions": [
            {
                "text": "Un apparecchio per riscaldare il cibo velocemente.",
                "examples": [
                    "Uso il microonde per scaldare il latte."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "subtext": "elettrodomestico da cucina",
        "opposite": null,
        "synonyms": []
    },
    {
        "word": "gomma",
        "level": "starter",
        "theme": "school_stationery_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧼",
        "form": "noun",
        "plural": "gomme",
        "transcription": "ˈɡomma",
        "definitions": [
            {
                "text": "Oggetto usato per cancellare segni di matita.",
                "examples": [
                    "Uso la gomma per cancellare l'errore."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "subtext": "cancelleria",
        "synonyms": []
    },
    {
        "word": "quaderno",
        "level": "starter",
        "theme": "school_stationery_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📓",
        "form": "noun",
        "plural": "quaderni",
        "transcription": "kwaˈdɛrno",
        "definitions": [
            {
                "text": "Insieme di fogli bianchi per scrivere.",
                "examples": [
                    "Scrivo i compiti sul quaderno."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "subtext": "cancelleria",
        "synonyms": []
    },
    {
        "word": "righello",
        "level": "starter",
        "theme": "school_stationery_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📏",
        "form": "noun",
        "plural": "righelli",
        "transcription": "riˈɡɛllo",
        "definitions": [
            {
                "text": "Strumento per misurare e tirare linee dritte.",
                "examples": [
                    "Usa il righello per fare una linea."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "subtext": "cancelleria",
        "synonyms": []
    },
    {
        "word": "astuccio",
        "level": "starter",
        "theme": "school_stationery_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "👝",
        "form": "noun",
        "plural": "astucci",
        "transcription": "asˈtuttʃo",
        "definitions": [
            {
                "text": "Contenitore per penne e matite.",
                "examples": [
                    "Metti le penne nell'astuccio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "subtext": "cancelleria",
        "synonyms": []
    },
    {
        "word": "scopa",
        "level": "starter",
        "theme": "household_items_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧹",
        "form": "noun",
        "plural": "scope",
        "transcription": "ˈskoːpa",
        "definitions": [
            {
                "text": "Strumento per pulire il pavimento.",
                "examples": [
                    "Uso la scopa per pulire la cucina."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "subtext": "pulizia casa",
        "synonyms": []
    },
    {
        "word": "ferro da stiro",
        "level": "starter",
        "theme": "household_items_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💨",
        "form": "noun",
        "plural": "ferri da stiro",
        "transcription": "ˈfɛrro da ˈstiːro",
        "definitions": [
            {
                "text": "Apparecchio per togliere le pieghe dai vestiti.",
                "examples": [
                    "Stiro la camicia col ferro da stiro."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "subtext": "elettrodomestico",
        "synonyms": []
    },
    {
        "word": "tostapane",
        "level": "starter",
        "theme": "household_items_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍞",
        "form": "noun",
        "plural": "tostapane",
        "transcription": "tostaˈpaːne",
        "definitions": [
            {
                "text": "Apparecchio per tostare il pane.",
                "examples": [
                    "Metti il pane nel tostapane."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "subtext": "elettrodomestico da cucina",
        "synonyms": []
    },
    {
        "word": "bollitore",
        "level": "starter",
        "theme": "household_items_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🫖",
        "form": "noun",
        "plural": "bollitori",
        "transcription": "bolliˈtoːre",
        "definitions": [
            {
                "text": "Apparecchio per far bollire l'acqua.",
                "examples": [
                    "Uso il bollitore per fare il tè."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "subtext": "elettrodomestico da cucina",
        "synonyms": []
    },
    {
        "word": "davanti a",
        "level": "starter",
        "theme": "prepositions_grammar_A1",
        "emoji": "⬅️",
        "form": "preposition",
        "transcription": "daˈvanti a",
        "definitions": [
            {
                "text": "In posizione anteriore rispetto a qualcosa.",
                "examples": [
                    "La macchina è davanti alla casa."
                ]
            }
        ],
        "subtext": "posizione",
        "synonyms": []
    },
    {
        "word": "dietro a",
        "level": "starter",
        "theme": "prepositions_grammar_A1",
        "emoji": "➡️",
        "form": "preposition",
        "transcription": "ˈdjɛːtro a",
        "definitions": [
            {
                "text": "In posizione posteriore rispetto a qualcosa.",
                "examples": [
                    "Il gatto è dietro al divano."
                ]
            }
        ],
        "subtext": "posizione",
        "synonyms": []
    },
    {
        "word": "accanto a",
        "level": "starter",
        "theme": "prepositions_grammar_A1",
        "emoji": "↔️",
        "form": "preposition",
        "transcription": "akˈkanto a",
        "definitions": [
            {
                "text": "A lato di qualcosa.",
                "examples": [
                    "La sedia è accanto al tavolo."
                ]
            }
        ],
        "subtext": "posizione",
        "synonyms": [
            "vicino a"
        ]
    },
    {
        "word": "tra",
        "level": "starter",
        "theme": "prepositions_grammar_A1",
        "emoji": "📍",
        "form": "preposition",
        "transcription": "ˈtra",
        "definitions": [
            {
                "text": "In mezzo a due cose o persone.",
                "examples": [
                    "Il bar è tra la banca e il cinema."
                ]
            }
        ],
        "subtext": "posizione",
        "synonyms": [
            "fra"
        ]
    },
    {
        "word": "schermata",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📱",
        "form": "noun",
        "plural": "schermate",
        "transcription": "skerˈmaːta",
        "definitions": [
            {
                "text": "Ciò che appare sullo schermo del telefono.",
                "examples": [
                    "Guarda questa schermata."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "subtext": "tecnologia",
        "synonyms": []
    },
    {
        "word": "app",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "📲",
        "form": "noun",
        "plural": "app",
        "transcription": "ˈapp",
        "definitions": [
            {
                "text": "Programma per lo smartphone.",
                "examples": [
                    "Scarico una nuova app."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "subtext": "tecnologia",
        "synonyms": []
    }
];
    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();