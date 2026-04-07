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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "piede sinistro, a piedi",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "lasagna al forno",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "mela rossa",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "plural": null,
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "uovo",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🥚",
        "form": "noun",
        "transcription": "ˈwɔvo",
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "plural": null,
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "plural": null,
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "carne",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥩",
        "form": "noun",
        "plural": null,
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "cibo sano",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "acqua",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🚰",
        "form": "noun",
        "plural": null,
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "ˈtʃena",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "parco giochi",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "scuola primaria",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "un paio di pantaloni",
        "antonyms": [],
        "in_article": "nei",
        "da_article": "dai"
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
        "subtext": "scarpe da ginnastica",
        "antonyms": [],
        "in_article": "nelle",
        "da_article": "dalle"
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
        "transcription": "ˈsedja",
        "synonyms": [],
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "ˈtavolo",
        "synonyms": [],
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈkjave",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "teˈlɛfono",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈlibro",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "antonyms": [
            "cane"
        ],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈkane",
        "synonyms": [],
        "subtext": "cane da guardia",
        "antonyms": [
            "gatto"
        ],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "uccello canoro",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
    },
    {
        "word": "frutta",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍎",
        "form": "noun",
        "plural": null,
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "verˈdura",
        "synonyms": [],
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "pesce fresco",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "mal di testa",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "ˈmano",
        "synonyms": [],
        "subtext": "mano destra",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "gamba sinistra",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "chiudere gli occhi",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "transcription": "ˈnazo",
        "synonyms": [],
        "subtext": "naso chiuso",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "bocca aperta",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "mal d'orecchio",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "transcription": "ˈskjɛna",
        "synonyms": [],
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈmadre",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "ˈpadre",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "aˈmiko",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈwɔmo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "ˈkaza",
        "synonyms": [],
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "transcription": "ufˈfitʃo",
        "synonyms": [],
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "transcription": "ˈtrɛno",
        "synonyms": [],
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "denaro",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💰",
        "form": "noun",
        "plural": null,
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
        "transcription": "deˈnaro",
        "synonyms": [],
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "matˈtina",
        "synonyms": [],
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "ˈsera",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "settiˈmana",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "antonyms": [],
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
        "transcription": "ˈkapo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "kolˈlɛɡa",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "stiˈpɛndjo",
        "antonyms": [],
        "in_article": "nello",
        "da_article": "dallo"
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
        "transcription": "rjuˈnjone",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "stress",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "😫",
        "form": "noun",
        "plural": null,
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nello",
        "da_article": "dallo"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "transcription": "viˈtʃino",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈstantsa",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "kuˈtʃina",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "sonno",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "article": "il",
        "emoji": "😴",
        "form": "noun",
        "plural": null,
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "relatˈtsjone",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "antonyms": [],
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "transcription": "ˈfine settiˈmana",
        "synonyms": [],
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈtɛmpo ˈlibero",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "ˈvino",
        "synonyms": [],
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "inferˈmjɛre",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "transcription": "konduˈtʃɛnte",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈkwɔko",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "diretˈtore",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "aˈɛreo",
        "synonyms": [],
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "ospeˈdale",
        "synonyms": [],
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "supermerˈkato",
        "synonyms": [],
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈsole",
        "synonyms": [],
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "synonyms": [],
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "antonyms": [],
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
        "antonyms": [],
        "transcription": "doˈmani"
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
        "transcription": "maˈrito",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈmɔʎʎe",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "bamˈbino",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "dʒeniˈtore",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nello",
        "da_article": "dallo"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "ˈtsio",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nello",
        "da_article": "dallo"
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
        "transcription": "ˈtsia",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "kuˈdʒino",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "transcription": "ˈfjore",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "ˈfjume",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈmare",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "ˈtʃɛlo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈluna",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "bikˈkjɛre",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "kukˈkjajo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "komˈpjuter porˈtatile",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "ˈtʃinema",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "muˈzɛo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "transcription": "farmaˈtʃia",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nello",
        "da_article": "dallo"
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
        "transcription": "insaˈlata",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "kalˈtsini",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nei",
        "da_article": "dai"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "antonyms": [],
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
        "antonyms": [],
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
        "antonyms": [],
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
        "antonyms": [],
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
        "antonyms": [],
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
        "antonyms": [],
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
        "antonyms": [],
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "proˈblɛma",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "maˈjale",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "paˈtata",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "pomoˈdɔro",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "kaˈrɔta",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "tʃokkoˈlato",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "dʒeˈlato",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "maʎˈʎone",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "vesˈtito",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "stiˈvali",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "negli",
        "da_article": "dagli"
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
        "transcription": "ˈdito",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈdito del ˈpjɛde",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈstɔmako",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nello",
        "da_article": "dallo"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "transcription": "ˈnuvola",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "skrivaˈnia",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "oroˈlɔdʒo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nello",
        "da_article": "dallo"
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
        "transcription": "biblioˈtɛka",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈsabato",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "doˈmenika",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "dʒenˈnajo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "febˈbrajo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "aˈprile",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "otˈtobre",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "primaˈvɛra",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "esˈtate",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "ˈpɛkora",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "liˈmone",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "transcription": "ˈfraɡola",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "ˈuva",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "antonyms": [],
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
        "antonyms": [],
        "transcription": "solitaˈmente"
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
        "antonyms": [],
        "transcription": "ˈkwalke ˈvɔlta"
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
        "antonyms": [],
        "transcription": "ˈki"
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
        "antonyms": [],
        "transcription": "ˈdove"
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
        "antonyms": [],
        "transcription": "ˈkwando"
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
        "transcription": "ˈtʃao",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "antonyms": [],
        "transcription": "per faˈvore"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈskuza",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "antonyms": [],
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
        "antonyms": [],
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
        "transcription": "ˈnome",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈvjɔla",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "neoˈnato",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "ragazzo",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "ragazza",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nello",
        "da_article": "dallo"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈmakkina fotoˈɡrafika",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "komˈpjuter",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "ˈskatola",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈstrada",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "ediˈfitʃo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "atˈtore",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
    },
    {
        "word": "adulto",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "transcription": "kwarˈtjɛre",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "afˈfari",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "negli",
        "da_article": "dagli"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "antonyms": [],
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
        "antonyms": [],
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
        "antonyms": [],
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
        "antonyms": [],
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
        "antonyms": [],
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "negli",
        "da_article": "dagli"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "gente",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "antonyms": [],
        "transcription": "ˈjɛri"
    },
    {
        "word": "mezzanotte",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🕛",
        "form": "noun",
        "plural": "mezzanotti",
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "mezzogiorno",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🕛",
        "form": "noun",
        "plural": "mezzogiorni",
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "laˈvoro",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "imˈpjɛɡo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "transcription": "mesˈtjɛre",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈimeil",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "transcription": "ˈsito ˈwɛb",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "tasˈtjɛra",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nello",
        "da_article": "dallo"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "kanˈtsone",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈfɔto",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nello",
        "da_article": "dallo"
    },
    {
        "word": "calcio",
        "level": "starter",
        "theme": "common_sports_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "⚽",
        "form": "noun",
        "plural": "calci",
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "tennis",
        "level": "starter",
        "theme": "common_sports_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎾",
        "form": "noun",
        "plural": "tennis",
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "nuoto",
        "level": "starter",
        "theme": "common_sports_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏊",
        "form": "noun",
        "plural": "nuoti",
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "merˈkato",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "fatˈtura",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "ˈkarta di ˈkredito",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nei",
        "da_article": "dai"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "viaddʒaˈtore",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "vaˈlidʒa",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nello",
        "da_article": "dallo"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "pjanˈtina",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "ˈvia",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "senˈtjɛro",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "paˈrɔla",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "ˈfraze",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "iˈdɛa",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "transcription": "paˈrere",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "opiniˈone",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "detʃiziˈone",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "ˈpjano",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nello",
        "da_article": "dallo"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "ˈtʃɛntro kommerˈtʃale",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "moˈnete",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nelle",
        "da_article": "dalle"
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
        "transcription": "baŋkoˈnɔta",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈspeza",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "transcription": "klijenˈtɛla",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "enˈtrata",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "transcription": "uʃˈʃita",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "transcription": "ˈskale",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nelle",
        "da_article": "dalle"
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
        "transcription": "aʃʃenˈsore",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "transcription": "korriˈdojo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈmuri",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nei",
        "da_article": "dai"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "dʒarˈdino",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ɡaˈraʒ",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈsala da ˈprandzo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "saˈpone",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "aʃʃuɡaˈmano",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "transcription": "skafˈfale",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nello",
        "da_article": "dallo"
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
        "transcription": "diˈvano",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈradjo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "kaˈmitʃa",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "ˈtiʃert",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nello",
        "da_article": "dallo"
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
        "transcription": "tʃinˈtura",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "kosˈtume da ˈbaɲɲo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "piˈdʒama",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ferˈmata delˈlautobus",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "baŋˈkina",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "biˈnarjo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "metropoliˈtana",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nei",
        "da_article": "dai"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "arˈrivo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "transcription": "ˈvolo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "ˈkamera dalˈbɛrɡo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "spunˈtino",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nello",
        "da_article": "dallo"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "oˈrarjo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "subtext": "chiedere informazioni",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "transcription": "ˈneve",
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
        "subtext": "palla di neve",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "nebbia fitta",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "ˈmɔbili",
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
        "subtext": "negozio di mobili",
        "antonyms": [],
        "in_article": "nei",
        "da_article": "dai"
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
        "transcription": "baˈnana",
        "definitions": [
            {
                "text": "Un frutto lungo e giallo.",
                "examples": [
                    "Mangio una banana a merenda."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "friɡoˈrifero",
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "ˈpera",
        "definitions": [
            {
                "text": "Un frutto a forma di campanella.",
                "examples": [
                    "La pera è matura."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
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
        "transcription": "tʃiˈljɛdʒa",
        "definitions": [
            {
                "text": "Un piccolo frutto rosso e tondo.",
                "examples": [
                    "Mangio una ciliegia."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "io",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "antonyms": []
    },
    {
        "word": "tu",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "antonyms": []
    },
    {
        "word": "lui",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        ]
    },
    {
        "word": "lei",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        ]
    },
    {
        "word": "noi",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "antonyms": []
    },
    {
        "word": "voi",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "antonyms": []
    },
    {
        "word": "loro",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "antonyms": []
    },
    {
        "word": "mio",
        "level": "starter",
        "theme": "personal_identity_A1",
        "form": "adjective",
        "transcription": "ˈmio",
        "feminine": "mia",
        "plural": "miei",
        "femininePlural": "mie",
        "definitions": [
            {
                "text": "Che appartiene a me.",
                "examples": [
                    "Il mio nome è Marco.",
                    "Dov'è la mia borsa?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "aggettivo possessivo",
        "antonyms": []
    },
    {
        "word": "tuo",
        "level": "starter",
        "theme": "personal_identity_A1",
        "form": "adjective",
        "transcription": "ˈtuo",
        "feminine": "tua",
        "plural": "tuoi",
        "femininePlural": "tue",
        "definitions": [
            {
                "text": "Che appartiene a te.",
                "examples": [
                    "Qual è il tuo nome?",
                    "È questo il tuo telefono?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "aggettivo possessivo",
        "antonyms": []
    },
    {
        "word": "suo",
        "level": "starter",
        "theme": "personal_identity_A1",
        "form": "adjective",
        "transcription": "ˈsuo",
        "feminine": "sua",
        "plural": "suoi",
        "femininePlural": "sue",
        "definitions": [
            {
                "text": "Che appartiene a lui o a lei.",
                "examples": [
                    "La sua macchina è rossa.",
                    "Quello è il suo ufficio."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "aggettivo possessivo",
        "antonyms": []
    },
    {
        "word": "nostro",
        "level": "starter",
        "theme": "personal_identity_A1",
        "form": "adjective",
        "transcription": "ˈnɔstro",
        "feminine": "nostra",
        "plural": "nostri",
        "femininePlural": "nostre",
        "definitions": [
            {
                "text": "Che appartiene a noi.",
                "examples": [
                    "Questa è la nostra casa.",
                    "Il nostro manager è amichevole."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "aggettivo possessivo",
        "antonyms": []
    },
    {
        "word": "vostro",
        "level": "starter",
        "theme": "personal_identity_A1",
        "form": "adjective",
        "transcription": "ˈvɔstro",
        "feminine": "vostra",
        "plural": "vostri",
        "femininePlural": "vostre",
        "definitions": [
            {
                "text": "Che appartiene a voi.",
                "examples": [
                    "Dov'è il vostro libro?",
                    "Il vostro cane è bello."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "aggettivo possessivo",
        "antonyms": []
    },
    {
        "word": "questo",
        "level": "starter",
        "theme": "personal_identity_A1",
        "form": "adjective",
        "transcription": "ˈkwesto",
        "feminine": "questa",
        "plural": "questi",
        "femininePlural": "queste",
        "definitions": [
            {
                "text": "Indica una persona o cosa vicina a chi parla.",
                "examples": [
                    "Questo è il mio amico.",
                    "Mi piace questo libro."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "aggettivo dimostrativo",
        "antonyms": [
            "quello"
        ]
    },
    {
        "word": "quello",
        "level": "starter",
        "theme": "personal_identity_A1",
        "form": "adjective",
        "transcription": "ˈkwello",
        "feminine": "quella",
        "plural": "quelli",
        "femininePlural": "quelle",
        "definitions": [
            {
                "text": "Indica una persona o cosa lontana da chi parla.",
                "examples": [
                    "Quello è un grande edificio.",
                    "Chi è quell'uomo?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "aggettivo dimostrativo",
        "antonyms": [
            "questo"
        ]
    },
    {
        "word": "un",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "antonyms": []
    },
    {
        "word": "una",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "antonyms": []
    },
    {
        "word": "il",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "antonyms": []
    },
    {
        "word": "la",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "antonyms": []
    },
    {
        "word": "mai",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
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
        ]
    },
    {
        "word": "a volte",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
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
        "antonyms": []
    },
    {
        "word": "spesso",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
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
        ]
    },
    {
        "word": "di solito",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
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
        "antonyms": []
    },
    {
        "word": "o",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
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
        "antonyms": []
    },
    {
        "word": "quindi",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
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
        "antonyms": []
    },
    {
        "word": "se",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
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
        "antonyms": []
    },
    {
        "word": "cosa",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "antonyms": []
    },
    {
        "word": "come",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "antonyms": []
    },
    {
        "word": "quanto",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "❓",
        "form": "adjective",
        "transcription": "ˈkwanto",
        "feminine": "quanta",
        "plural": "quanti",
        "femininePlural": "quante",
        "definitions": [
            {
                "text": "Usato per chiedere la quantità o il numero.",
                "examples": [
                    "Quanto costa?",
                    "Quanti anni hai?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "aggettivo interrogativo",
        "antonyms": []
    },
    {
        "word": "con",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        ]
    },
    {
        "word": "per",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "antonyms": []
    },
    {
        "word": "persona",
        "level": "starter",
        "theme": "personal_identity_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👤",
        "form": "noun",
        "plural": "persone",
        "transcription": "perˈsona",
        "definitions": [
            {
                "text": "Un essere umano.",
                "examples": [
                    "Lei è una brava persona."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "completo",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👔",
        "form": "noun",
        "plural": "completi",
        "transcription": "komˈplɛto",
        "definitions": [
            {
                "text": "Un insieme di vestiti fatti dello stesso tessuto (giacca e pantaloni).",
                "examples": [
                    "Lui indossa un completo per il lavoro."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "synonyms": [
            "abito"
        ],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "bevanda",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥤",
        "form": "noun",
        "plural": "bevande",
        "transcription": "beˈvanda",
        "definitions": [
            {
                "text": "Un liquido dolce con bollicine o una bibita in generale.",
                "examples": [
                    "Non bevo molte bevande gassate perché hanno molto zucchero."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "synonyms": [
            "bibita"
        ],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "cereali",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "i",
        "gender": "masculine",
        "emoji": "🥣",
        "form": "noun",
        "plural": "cereali",
        "transcription": "tʃereˈali",
        "definitions": [
            {
                "text": "Cibo fatto di chicchi di grano che le persone mangiano spesso a colazione con il latte.",
                "examples": [
                    "Mangio una ciotola di cereali ogni mattina."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "dei",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nei",
        "da_article": "dai"
    },
    {
        "word": "occhiali da sole",
        "level": "starter",
        "theme": "accessories_A1",
        "article": "gli",
        "gender": "masculine",
        "emoji": "🕶️",
        "form": "noun",
        "plural": "occhiali da sole",
        "transcription": "okˈkjali da ˈsole",
        "definitions": [
            {
                "text": "Occhiali scuri che si indossano per proteggere gli occhi dal sole.",
                "examples": [
                    "Ho bisogno dei miei occhiali da sole oggi."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "degli",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "negli",
        "da_article": "dagli"
    },
    {
        "word": "rapporto",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📄",
        "form": "noun",
        "plural": "rapporti",
        "transcription": "rapˈpɔrto",
        "definitions": [
            {
                "text": "Un documento che fornisce informazioni su un argomento.",
                "examples": [
                    "Sto scrivendo un rapporto."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "synonyms": [
            "relazione"
        ],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "anno",
        "level": "starter",
        "theme": "dates_years_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
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
        "countability": "countable",
        "partitive": "dell'",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
    },
    {
        "word": "mese",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
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
        "countability": "countable",
        "partitive": "del",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "stagione",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍂",
        "form": "noun",
        "plural": "stagioni",
        "transcription": "staˈdʒone",
        "definitions": [
            {
                "text": "Ognuna delle quattro parti in cui si divide l'anno.",
                "examples": [
                    "La mia stagione preferita è l'estate."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "faccia",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👤",
        "form": "noun",
        "plural": "facce",
        "transcription": "ˈfattʃa",
        "definitions": [
            {
                "text": "La parte anteriore della testa.",
                "examples": [
                    "Lavati la faccia."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "synonyms": [
            "viso",
            "volto"
        ],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "capelli",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "i",
        "gender": "masculine",
        "emoji": "💇",
        "form": "noun",
        "plural": "capelli",
        "transcription": "kaˈpelli",
        "definitions": [
            {
                "text": "I peli che crescono sulla testa.",
                "examples": [
                    "Ha i capelli biondi."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "dei",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nei",
        "da_article": "dai"
    },
    {
        "word": "dente",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🦷",
        "form": "noun",
        "plural": "denti",
        "transcription": "ˈdɛnte",
        "definitions": [
            {
                "text": "Ognuno degli organi duri e bianchi nella bocca per masticare.",
                "examples": [
                    "Lavati i denti."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "cravatta",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👔",
        "form": "noun",
        "plural": "cravatte",
        "transcription": "kraˈvatta",
        "definitions": [
            {
                "text": "Accessorio di abbigliamento maschile che si annoda al collo della camicia.",
                "examples": [
                    "Porta una cravatta blu."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "molto",
        "level": "starter",
        "theme": "basic_intensifiers_A1",
        "form": "adverb",
        "transcription": "ˈmolto",
        "definitions": [
            {
                "text": "In grande misura o quantità.",
                "examples": [
                    "Lui è molto simpatico.",
                    "Mi piace molto viaggiare."
                ]
            }
        ],
        "synonyms": [
            "assai",
            "tanto"
        ],
        "subtext": "avverbio di quantità",
        "antonyms": [
            "poco"
        ]
    },
    {
        "word": "poco",
        "level": "starter",
        "theme": "basic_intensifiers_A1",
        "form": "adverb",
        "transcription": "ˈpɔko",
        "definitions": [
            {
                "text": "In scarsa misura o quantità.",
                "examples": [
                    "Mangio poco la sera.",
                    "C'è poco tempo."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "avverbio di quantità",
        "antonyms": [
            "molto",
            "tanto"
        ]
    },
    {
        "word": "troppo",
        "level": "starter",
        "theme": "basic_intensifiers_A1",
        "form": "adverb",
        "transcription": "ˈtrɔppo",
        "definitions": [
            {
                "text": "In misura eccessiva.",
                "examples": [
                    "Questo caffè è troppo caldo.",
                    "Lavori troppo."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "avverbio di quantità",
        "antonyms": []
    },
    {
        "word": "bene",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "form": "adverb",
        "transcription": "ˈbɛne",
        "definitions": [
            {
                "text": "In modo buono o soddisfacente.",
                "examples": [
                    "Sto bene, grazie.",
                    "Lui parla bene l'italiano."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "avverbio di modo",
        "antonyms": [
            "male"
        ]
    },
    {
        "word": "male",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adverb",
        "transcription": "ˈmale",
        "definitions": [
            {
                "text": "In modo cattivo o non soddisfacente.",
                "examples": [
                    "Mi sento male.",
                    "Oggi il tempo è male."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "avverbio di modo",
        "antonyms": [
            "bene"
        ]
    },
    {
        "word": "qui",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "form": "adverb",
        "transcription": "ˈkwi",
        "definitions": [
            {
                "text": "In questo luogo (vicino a chi parla).",
                "examples": [
                    "Vieni qui.",
                    "Abito qui vicino."
                ]
            }
        ],
        "synonyms": [
            "qua"
        ],
        "subtext": "avverbio di luogo",
        "antonyms": [
            "là",
            "lì"
        ]
    },
    {
        "word": "là",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "form": "adverb",
        "transcription": "ˈla",
        "definitions": [
            {
                "text": "In quel luogo (lontano da chi parla).",
                "examples": [
                    "Vai là.",
                    "Il libro è là sul tavolo."
                ]
            }
        ],
        "synonyms": [
            "lì"
        ],
        "subtext": "avverbio di luogo",
        "antonyms": [
            "qui",
            "qua"
        ]
    },
    {
        "word": "di",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "antonyms": []
    },
    {
        "word": "da",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "antonyms": []
    },
    {
        "word": "tra",
        "level": "starter",
        "theme": "prepositions_place_A1",
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
        "antonyms": []
    },
    {
        "word": "fra",
        "level": "starter",
        "theme": "prepositions_place_A1",
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
        "antonyms": []
    },
    {
        "word": "uno",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "synonyms": [],
        "subtext": "articolo indeterminativo maschile",
        "antonyms": []
    },
    {
        "word": "lo",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "antonyms": []
    },
    {
        "word": "gli",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "antonyms": []
    },
    {
        "word": "le",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "antonyms": []
    },
    {
        "word": "quasi",
        "level": "starter",
        "theme": "basic_intensifiers_A1",
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
        "antonyms": []
    },
    {
        "word": "forse",
        "level": "starter",
        "theme": "giving_opinions_A1",
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
        ]
    },
    {
        "word": "già",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
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
        ]
    },
    {
        "word": "colore",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎨",
        "form": "noun",
        "plural": "colori",
        "transcription": "koˈlore",
        "definitions": [
            {
                "text": "Sensazione visiva prodotta dalla luce (rosso, blu, ecc.).",
                "examples": [
                    "Qual è il tuo colore preferito?"
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "adesso",
        "level": "starter",
        "theme": "prepositions_time_A1",
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
        ]
    },
    {
        "word": "dopo",
        "level": "starter",
        "theme": "prepositions_time_A1",
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
        ]
    },
    {
        "word": "prima",
        "level": "starter",
        "theme": "prepositions_time_A1",
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
        ]
    },
    {
        "word": "accanto a",
        "level": "starter",
        "theme": "prepositions_place_A1",
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
        ]
    },
    {
        "word": "davanti a",
        "level": "starter",
        "theme": "prepositions_place_A1",
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
        ]
    },
    {
        "word": "dietro a",
        "level": "starter",
        "theme": "prepositions_place_A1",
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
        ]
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
                "text": "Insieme di fogli di carta rilegati per scrivere.",
                "examples": [
                    "Scrivo i compiti sul quaderno."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
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
        "transcription": "ˈɡɔmma",
        "definitions": [
            {
                "text": "Oggetto usato per cancellare i segni della matita.",
                "examples": [
                    "Uso la gomma per cancellare l'errore."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "lezione",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏫",
        "form": "noun",
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
        "countability": "countable",
        "partitive": "della",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "classe",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏫",
        "form": "noun",
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
        "countability": "countable",
        "partitive": "della",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "compiti",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "i",
        "gender": "masculine",
        "emoji": "📝",
        "form": "noun",
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
        "countability": "countable",
        "partitive": "dei",
        "synonyms": [],
        "subtext": "compiti a casa",
        "antonyms": [],
        "in_article": "nei",
        "da_article": "dai"
    },
    {
        "word": "esame",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "📝",
        "form": "noun",
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
        "countability": "countable",
        "partitive": "dell'",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
    },
    {
        "word": "pavimento",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧱",
        "form": "noun",
        "plural": "pavimenti",
        "transcription": "paviˈmento",
        "definitions": [
            {
                "text": "La superficie orizzontale su cui si cammina in una stanza.",
                "examples": [
                    "Il libro è caduto sul pavimento."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "corpo",
        "level": "starter",
        "theme": "health_body_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👤",
        "form": "noun",
        "plural": "corpi",
        "transcription": "ˈkɔrpo",
        "definitions": [
            {
                "text": "L'intera struttura fisica di un essere umano.",
                "examples": [
                    "L'esercizio fisico fa bene al corpo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "cuore",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "❤️",
        "form": "noun",
        "plural": "cuori",
        "transcription": "ˈkwɔre",
        "definitions": [
            {
                "text": "L'organo che pompa il sangue nel corpo.",
                "examples": [
                    "Sento il battito del cuore."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "sinistra",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⬅️",
        "form": "noun",
        "plural": "sinistre",
        "transcription": "siˈnistra",
        "definitions": [
            {
                "text": "La parte opposta alla destra.",
                "examples": [
                    "Gira a sinistra."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "synonyms": [],
        "subtext": "",
        "antonyms": [
            "destra"
        ],
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "destra",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "➡️",
        "form": "noun",
        "plural": "destre",
        "transcription": "ˈdɛstra",
        "definitions": [
            {
                "text": "La parte opposta alla sinistra.",
                "examples": [
                    "Gira a destra."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "synonyms": [],
        "subtext": "",
        "antonyms": [
            "sinistra"
        ],
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "tutto",
        "level": "starter",
        "theme": "basic_intensifiers_A1",
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
        ]
    },
    {
        "word": "niente",
        "level": "starter",
        "theme": "basic_intensifiers_A1",
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
        ]
    },
    {
        "word": "qualcosa",
        "level": "starter",
        "theme": "basic_intensifiers_A1",
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
        ]
    },
    {
        "word": "sopra",
        "level": "starter",
        "theme": "prepositions_place_A1",
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
        ]
    },
    {
        "word": "dentro",
        "level": "starter",
        "theme": "prepositions_place_A1",
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
        ]
    },
    {
        "word": "fuori",
        "level": "starter",
        "theme": "prepositions_place_A1",
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
        ]
    },
    {
        "word": "intorno",
        "level": "starter",
        "theme": "prepositions_place_A1",
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
        "antonyms": []
    },
    {
        "word": "animale",
        "level": "starter",
        "theme": "animals_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🐾",
        "form": "noun",
        "plural": "animali",
        "transcription": "aniˈmale",
        "definitions": [
            {
                "text": "Essere vivente che si muove e sente.",
                "examples": [
                    "Il gatto è il mio animale preferito."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
    },
    {
        "word": "alfabeto",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🔤",
        "form": "noun",
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
        "countability": "countable",
        "partitive": "dell'",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
    },
    {
        "word": "nipote",
        "level": "starter",
        "theme": "extended_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧒",
        "form": "noun",
        "plural": "nipoti",
        "transcription": "niˈpote",
        "definitions": [
            {
                "text": "Figlio di un figlio o di un fratello/sorella.",
                "examples": [
                    "Mio nipote gioca a calcio."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "aula",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🏫",
        "form": "noun",
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
        "countability": "countable",
        "partitive": "dell'",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
    },
    {
        "word": "giornale",
        "level": "starter",
        "theme": "books_reading_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📰",
        "form": "noun",
        "plural": "giornali",
        "transcription": "dʒorˈnale",
        "definitions": [
            {
                "text": "Pubblicazione quotidiana con notizie e informazioni.",
                "examples": [
                    "Leggo il giornale ogni mattina."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "synonyms": [
            "quotidiano"
        ],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "rivista",
        "level": "starter",
        "theme": "books_reading_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📖",
        "form": "noun",
        "plural": "riviste",
        "transcription": "riˈvista",
        "definitions": [
            {
                "text": "Pubblicazione periodica su vari argomenti.",
                "examples": [
                    "Compro una rivista di moda."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "dizionario",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📕",
        "form": "noun",
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
        "countability": "countable",
        "partitive": "del",
        "synonyms": [
            "vocabolario"
        ],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "lettera",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "✉️",
        "form": "noun",
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
        "countability": "countable",
        "partitive": "della",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "soffitto",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏠",
        "form": "noun",
        "plural": "soffitti",
        "transcription": "sofˈfitte",
        "definitions": [
            {
                "text": "La superficie interna superiore di una stanza.",
                "examples": [
                    "Il soffitto è bianco."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "synonyms": [],
        "subtext": "",
        "antonyms": [
            "pavimento"
        ],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "quadro",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🖼️",
        "form": "noun",
        "plural": "quadri",
        "transcription": "ˈkwadro",
        "definitions": [
            {
                "text": "Opera di pittura racchiusa in una cornice.",
                "examples": [
                    "C'è un bel quadro alla parete."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "synonyms": [
            "dipinto"
        ],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "padella",
        "level": "starter",
        "theme": "kitchen_items_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍳",
        "form": "noun",
        "plural": "padelle",
        "transcription": "paˈdɛlla",
        "definitions": [
            {
                "text": "Recipiente basso con manico usato per friggere.",
                "examples": [
                    "Cucino le uova in padella."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "pentola",
        "level": "starter",
        "theme": "kitchen_items_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍲",
        "form": "noun",
        "plural": "pentole",
        "transcription": "ˈpɛntola",
        "definitions": [
            {
                "text": "Recipiente profondo con manici usato per bollire.",
                "examples": [
                    "Metto l'acqua per la pasta nella pentola."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "app",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "📱",
        "form": "noun",
        "plural": "app",
        "transcription": "ˈɛp",
        "definitions": [
            {
                "text": "Programma software per smartphone o tablet.",
                "examples": [
                    "Scarico una nuova app."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "synonyms": [
            "applicazione"
        ],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
    },
    {
        "word": "wifi",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📶",
        "form": "noun",
        "plural": "wifi",
        "transcription": "ˈwaifai",
        "definitions": [
            {
                "text": "Sistema per collegarsi a internet senza fili.",
                "examples": [
                    "Qual è la password del wifi?"
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "del",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "astuccio",
        "level": "starter",
        "theme": "school_stationery_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "✏️",
        "form": "noun",
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
        "countability": "countable",
        "partitive": "dell'",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
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
        "transcription": "ˈskopa",
        "definitions": [
            {
                "text": "Attrezzo usato per pulire il pavimento.",
                "examples": [
                    "Uso la scopa per pulire la cucina."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "bambola",
        "level": "starter",
        "theme": "toys_games_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🪆",
        "form": "noun",
        "plural": "bambole",
        "transcription": "ˈbambola",
        "definitions": [
            {
                "text": "Giocattolo a forma di persona.",
                "examples": [
                    "La bambina gioca con la bambola."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "della",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "delfino",
        "level": "starter",
        "theme": "sea_animals_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🐬",
        "form": "noun",
        "plural": "delfini",
        "transcription": "delˈfino",
        "definitions": [
            {
                "text": "Mammifero marino intelligente e socievole.",
                "examples": [
                    "Il delfino nuota nel mare."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "ape",
        "level": "starter",
        "theme": "insects_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🐝",
        "form": "noun",
        "plural": "api",
        "transcription": "ˈape",
        "definitions": [
            {
                "text": "Insetto giallo e nero che produce il miele.",
                "examples": [
                    "L'ape vola sul fiore."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "dell'",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
    },
    {
        "word": "ragno",
        "level": "starter",
        "theme": "insects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🕷️",
        "form": "noun",
        "plural": "ragni",
        "transcription": "ˈraɲɲo",
        "definitions": [
            {
                "text": "Piccolo animale con otto zampe che fa la tela.",
                "examples": [
                    "C'è un ragno nell'angolo."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "violino",
        "level": "starter",
        "theme": "musical_instruments_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎻",
        "form": "noun",
        "plural": "violini",
        "transcription": "vjoˈlino",
        "definitions": [
            {
                "text": "Strumento musicale a corde suonato con un archetto.",
                "examples": [
                    "Lui suona il violino."
                ]
            }
        ],
        "countability": "countable",
        "partitive": "del",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "gentilezza",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🤝",
        "form": "noun",
        "plural": "gentilezze",
        "transcription": "dʒentiˈlettsa",
        "definitions": [
            {
                "text": "Qualità di chi è gentile.",
                "examples": [
                    "Grazie per la tua gentilezza."
                ]
            }
        ],
        "countability": "uncountable",
        "partitive": "della",
        "synonyms": [
            "cortesia"
        ],
        "subtext": "",
        "antonyms": [
            "maleducazione"
        ],
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "matematica",
        "level": "starter",
        "theme": "school_subjects_A1",
        "emoji": "🔢",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "countability": "uncountable",
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
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "storia",
        "level": "starter",
        "theme": "school_subjects_A1",
        "emoji": "📜",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "countability": "uncountable",
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
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "scienza",
        "level": "starter",
        "theme": "school_subjects_A1",
        "emoji": "🧪",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "countability": "uncountable",
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
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "geografia",
        "level": "starter",
        "theme": "school_subjects_A1",
        "emoji": "🌍",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "countability": "uncountable",
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
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "leone",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🦁",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "plural": "leoni",
        "countability": "countable",
        "definitions": [
            {
                "text": "Un grande animale selvatico con una criniera, che vive in Africa.",
                "examples": [
                    "Il leone è il re della foresta.",
                    "Abbiamo visto un leone allo zoo."
                ]
            }
        ],
        "transcription": "leˈone",
        "partitive": "del",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "elefante",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐘",
        "form": "noun",
        "gender": "masculine",
        "article": "l'",
        "plural": "elefanti",
        "countability": "countable",
        "definitions": [
            {
                "text": "Un animale molto grande con una proboscide e grandi orecchie.",
                "examples": [
                    "L'elefante è un animale molto intelligente.",
                    "Gli elefanti vivono in gruppi."
                ]
            }
        ],
        "transcription": "eleˈfante",
        "partitive": "dell'",
        "in_article": "nell'",
        "da_article": "dall'"
    },
    {
        "word": "tigre",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐅",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "tigri",
        "countability": "countable",
        "definitions": [
            {
                "text": "Un grande gatto selvatico con strisce nere e arancioni.",
                "examples": [
                    "La tigre corre molto veloce.",
                    "C'è una tigre nel parco nazionale."
                ]
            }
        ],
        "transcription": "ˈtiɡre",
        "partitive": "della",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "scimmia",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐒",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "scimmie",
        "countability": "countable",
        "definitions": [
            {
                "text": "Un animale che vive sugli alberi e mangia banane.",
                "examples": [
                    "La scimmia salta tra gli alberi.",
                    "Le scimmie sono animali divertenti."
                ]
            }
        ],
        "transcription": "ˈʃimmja",
        "partitive": "della",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "squalo",
        "level": "starter",
        "theme": "sea_animals_A1",
        "emoji": "🦈",
        "form": "noun",
        "gender": "masculine",
        "article": "lo",
        "plural": "squali",
        "countability": "countable",
        "definitions": [
            {
                "text": "Un grande pesce con molti denti che vive nel mare.",
                "examples": [
                    "Lo squalo nuota velocemente.",
                    "Molte persone hanno paura degli squali."
                ]
            }
        ],
        "transcription": "ˈskwalo",
        "partitive": "dello",
        "in_article": "nello",
        "da_article": "dallo"
    },
    {
        "word": "balena",
        "level": "starter",
        "theme": "sea_animals_A1",
        "emoji": "🐋",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "balene",
        "countability": "countable",
        "definitions": [
            {
                "text": "Un animale marino molto grande che respira aria.",
                "examples": [
                    "La balena è l'animale più grande del mondo.",
                    "Abbiamo visto una balena durante il viaggio."
                ]
            }
        ],
        "transcription": "baˈlena",
        "partitive": "della",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "cerchio",
        "level": "starter",
        "theme": "shapes_A1",
        "emoji": "⭕",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "plural": "cerchi",
        "countability": "countable",
        "definitions": [
            {
                "text": "Una forma perfettamente rotonda.",
                "examples": [
                    "Disegna un cerchio sul foglio.",
                    "La palla ha la forma di un cerchio."
                ]
            }
        ],
        "transcription": "ˈtʃerkjo",
        "partitive": "del",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "triangolo",
        "level": "starter",
        "theme": "shapes_A1",
        "emoji": "🔺",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "plural": "triangoli",
        "countability": "countable",
        "definitions": [
            {
                "text": "Una forma con tre lati e tre angoli.",
                "examples": [
                    "Un pezzo di pizza sembra un triangolo.",
                    "L'insegnante spiega il triangolo."
                ]
            }
        ],
        "transcription": "triˈanɡolo",
        "partitive": "del",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "lavatrice",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "🧺",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "lavatrici",
        "countability": "countable",
        "definitions": [
            {
                "text": "Una macchina usata per lavare i vestiti.",
                "examples": [
                    "Metto i vestiti nella lavatrice.",
                    "La lavatrice è in bagno."
                ]
            }
        ],
        "transcription": "lavaˈtritʃe",
        "partitive": "della",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "tostapane",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "🍞",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "plural": "tostapane",
        "countability": "countable",
        "definitions": [
            {
                "text": "Un apparecchio elettrico per tostare il pane.",
                "examples": [
                    "Uso il tostapane per la colazione.",
                    "Il tostapane è sul tavolo della cucina."
                ]
            }
        ],
        "transcription": "tostaˈpane",
        "partitive": "del",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "microonde",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "📟",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "plural": "microonde",
        "countability": "countable",
        "definitions": [
            {
                "text": "Un forno che usa onde per scaldare il cibo velocemente.",
                "examples": [
                    "Scaldo il latte nel microonde.",
                    "Il microonde è molto utile in cucina."
                ]
            }
        ],
        "transcription": "mikroˈonde",
        "partitive": "del",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "righello",
        "level": "starter",
        "theme": "school_stationery_A1",
        "emoji": "📏",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "plural": "righelli",
        "countability": "countable",
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
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "contadino",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "👨‍🌾",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "plural": "contadini",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Una persona che lavora la terra o alleva animali in una fattoria.",
                "examples": [
                    "Il contadino coltiva il grano.",
                    "Abbiamo comprato le uova dal contadino."
                ]
            }
        ],
        "transcription": "kontaˈdino",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "pilota",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "👨‍✈️",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "plural": "piloti",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Una persona che guida un aereo.",
                "examples": [
                    "Il pilota ha annunciato l'atterraggio.",
                    "Voglio diventare un pilota."
                ]
            }
        ],
        "transcription": "piˈlɔta",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "cameriere",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🤵",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "plural": "camerieri",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Una persona che serve cibo e bevande in un ristorante.",
                "examples": [
                    "Il cameriere porta il menu.",
                    "Chiedi al cameriere il conto."
                ]
            }
        ],
        "transcription": "kameˈrjɛre",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "dentista",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🦷",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "plural": "dentisti",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un medico che cura i denti.",
                "examples": [
                    "Ho un appuntamento dal dentista alle tre.",
                    "Il dentista dice che i miei denti stanno bene."
                ]
            }
        ],
        "transcription": "denˈtista",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "poliziotto",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "👮",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "plural": "poliziotti",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un membro della polizia.",
                "examples": [
                    "Il poliziotto aiuta le persone per strada.",
                    "Abbiamo chiamato un poliziotto."
                ]
            }
        ],
        "transcription": "politˈtsjɔtto",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "vigile del fuoco",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "👨‍🚒",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "plural": "vigili del fuoco",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Una persona addestrata a spegnere gli incendi.",
                "examples": [
                    "Il vigile del fuoco è molto coraggioso.",
                    "I vigili del fuoco sono arrivati subito."
                ]
            }
        ],
        "transcription": "ˈvidʒile del ˈfwɔko",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "soldato",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🪖",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "plural": "soldati",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Una persona che fa parte di un esercito.",
                "examples": [
                    "Il soldato indossa una divisa.",
                    "Molti soldati lavorano per la pace."
                ]
            }
        ],
        "transcription": "solˈdato",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "scrittore",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "✍️",
        "form": "noun",
        "gender": "masculine",
        "article": "lo",
        "plural": "scrittori",
        "countability": "countable",
        "partitive": "dello",
        "definitions": [
            {
                "text": "Una persona che scrive libri o articoli.",
                "examples": [
                    "Il mio scrittore preferito è Dante.",
                    "Lui vuole essere uno scrittore famoso."
                ]
            }
        ],
        "transcription": "skritˈtore",
        "in_article": "nello",
        "da_article": "dallo"
    },
    {
        "word": "professore",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "👨‍🏫",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "plural": "professori",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un insegnante di scuola superiore o università.",
                "examples": [
                    "Il professore spiega la lezione di oggi.",
                    "Ho parlato con il professore dopo la classe."
                ]
            }
        ],
        "transcription": "profesˈsore",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "ingegnere",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "👷",
        "form": "noun",
        "gender": "masculine",
        "article": "l'",
        "plural": "ingegneri",
        "countability": "countable",
        "partitive": "dell'",
        "definitions": [
            {
                "text": "Una persona che progetta macchine, edifici o strade.",
                "examples": [
                    "Mio fratello è un ingegnere civile.",
                    "L'ingegnere lavora al nuovo progetto."
                ]
            }
        ],
        "transcription": "indʒeɲˈɲɛre",
        "in_article": "nell'",
        "da_article": "dall'"
    },
    {
        "word": "segretario",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "⌨️",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "plural": "segretari",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Una persona che lavora in un ufficio, scrive lettere e organizza appuntamenti.",
                "examples": [
                    "Il segretario risponde al telefono.",
                    "Ho dato il documento al segretario."
                ]
            }
        ],
        "transcription": "segreˈtarjo",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "cappello",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "🎩",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "plural": "cappelli",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un accessorio che si mette sulla testa.",
                "examples": [
                    "Porto un cappello quando c'è il sole.",
                    "Il cappello è sulla sedia."
                ]
            }
        ],
        "transcription": "kapˈpɛllo",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "maglietta",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👕",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "magliette",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Un indumento leggero per la parte superiore del corpo.",
                "examples": [
                    "Indosso una maglietta bianca.",
                    "Hai una maglietta di ricambio?"
                ]
            }
        ],
        "transcription": "maʎˈʎetta",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "jeans",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👖",
        "form": "noun",
        "gender": "masculine",
        "article": "i",
        "plural": "jeans",
        "countability": "plural-only",
        "partitive": "dei",
        "definitions": [
            {
                "text": "Pantaloni fatti di tela resistente, solitamente blu.",
                "examples": [
                    "Indosso i miei jeans nuovi.",
                    "I jeans sono molto comodi."
                ]
            }
        ],
        "transcription": "ˈdʒins",
        "in_article": "nei",
        "da_article": "dai"
    },
    {
        "word": "pantaloncini",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "🩳",
        "form": "noun",
        "gender": "masculine",
        "article": "i",
        "plural": "pantaloncini",
        "countability": "plural-only",
        "partitive": "dei",
        "definitions": [
            {
                "text": "Pantaloni corti che arrivano sopra il ginocchio.",
                "examples": [
                    "Metto i pantaloncini perché fa caldo.",
                    "Indosso i pantaloncini per giocare a calcio."
                ]
            }
        ],
        "transcription": "pantalontˈʃini",
        "in_article": "nei",
        "da_article": "dai"
    },
    {
        "word": "stivale",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "🥾",
        "form": "noun",
        "gender": "masculine",
        "article": "lo",
        "plural": "stivali",
        "countability": "countable",
        "partitive": "dello",
        "definitions": [
            {
                "text": "Un tipo di scarpa che copre anche parte della gamba.",
                "examples": [
                    "Metto gli stivali quando piove.",
                    "Ha comprato degli stivali di pelle."
                ]
            }
        ],
        "transcription": "stiˈvale",
        "in_article": "nello",
        "da_article": "dallo"
    },
    {
        "word": "sciarpa",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "🧣",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "sciarpe",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Una striscia di stoffa che si mette intorno al collo per stare caldi.",
                "examples": [
                    "Metto la sciarpa perché fa freddo.",
                    "La mia sciarpa è di lana."
                ]
            }
        ],
        "transcription": "ˈʃarpa",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "guanti",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "🧤",
        "form": "noun",
        "gender": "masculine",
        "article": "i",
        "plural": "guanti",
        "countability": "plural-only",
        "partitive": "dei",
        "definitions": [
            {
                "text": "Accessori che coprono le mani per proteggerle dal freddo.",
                "examples": [
                    "Porto i guanti per sciare.",
                    "Dove sono i miei guanti?"
                ]
            }
        ],
        "transcription": "ˈɡwanti",
        "in_article": "nei",
        "da_article": "dai"
    },
    {
        "word": "terra",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🌎",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "countability": "uncountable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Il pianeta su cui viviamo; o il suolo.",
                "examples": [
                    "La Terra è un pianeta bellissimo.",
                    "I bambini giocano sulla terra."
                ]
            }
        ],
        "transcription": "ˈtɛrra",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "collina",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "⛰️",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "colline",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Una piccola montagna con fianchi dolci.",
                "examples": [
                    "Facciamo una passeggiata in collina.",
                    "La nostra casa è su una collina."
                ]
            }
        ],
        "transcription": "kolˈlina",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "valle",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "⛰️",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "valli",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Un'area di terra tra colline o montagne.",
                "examples": [
                    "Il fiume scorre nella valle.",
                    "La valle è molto verde in primavera."
                ]
            }
        ],
        "transcription": "ˈvalle",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "foresta",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🌲",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "foreste",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Un'area molto grande coperta da alberi.",
                "examples": [
                    "Ci sono molti animali nella foresta.",
                    "La foresta è fitta e scura."
                ]
            }
        ],
        "transcription": "foˈrɛsta",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "bosco",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🌳",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "plural": "boschi",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un'area coperta da alberi, più piccola di una foresta.",
                "examples": [
                    "Andiamo a cercare funghi nel bosco.",
                    "C'è un piccolo bosco vicino al villaggio."
                ]
            }
        ],
        "transcription": "ˈbɔsko",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "lago",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "💧",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "plural": "laghi",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Una grande massa d'acqua circondata dalla terra.",
                "examples": [
                    "Nuotiamo nel lago d'estate.",
                    "Il lago è molto calmo oggi."
                ]
            }
        ],
        "transcription": "ˈlaɡo",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "campo",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🌱",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "plural": "campi",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un'area di terra aperta usata per l'agricoltura.",
                "examples": [
                    "Il campo è pieno di fiori.",
                    "Lavorano nel campo tutto il giorno."
                ]
            }
        ],
        "transcription": "ˈkampo",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "foglia",
        "level": "starter",
        "theme": "plants_natural_world_A1",
        "emoji": "🍃",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "foglie",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "La parte piatta e verde di una pianta o di un albero.",
                "examples": [
                    "Le foglie cadono in autunno.",
                    "Questa pianta ha foglie molto grandi."
                ]
            }
        ],
        "transcription": "ˈfɔʎʎa",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "pianta",
        "level": "starter",
        "theme": "plants_natural_world_A1",
        "emoji": "🌵",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "piante",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Un essere vivente che cresce nella terra e ha radici e foglie.",
                "examples": [
                    "Devo dare l'acqua alle piante.",
                    "C'è una pianta nell'angolo della stanza."
                ]
            }
        ],
        "transcription": "ˈpjanta",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "natura",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🌿",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "countability": "uncountable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Il mondo fisico e tutto ciò che contiene, come piante e animali.",
                "examples": [
                    "Amiamo passare il tempo nella natura.",
                    "Dobbiamo proteggere la natura."
                ]
            }
        ],
        "transcription": "naˈtura",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "anello",
        "level": "starter",
        "theme": "accessories_A1",
        "emoji": "💍",
        "form": "noun",
        "gender": "masculine",
        "article": "l'",
        "plural": "anelli",
        "countability": "countable",
        "partitive": "dell'",
        "definitions": [
            {
                "text": "Un piccolo cerchio di metallo prezioso che si porta al dito.",
                "examples": [
                    "Porta un anello d'oro.",
                    "L'anello è un regalo di mia madre."
                ]
            }
        ],
        "transcription": "aˈnɛllo",
        "in_article": "nell'",
        "da_article": "dall'"
    },
    {
        "word": "collana",
        "level": "starter",
        "theme": "accessories_A1",
        "emoji": "📿",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "collane",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Un gioiello che si porta intorno al collo.",
                "examples": [
                    "Indossa una bellissima collana di perle.",
                    "Questa collana è molto costosa."
                ]
            }
        ],
        "transcription": "kolˈlana",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "gioielli",
        "level": "starter",
        "theme": "accessories_A1",
        "emoji": "💎",
        "form": "noun",
        "gender": "masculine",
        "article": "i",
        "plural": "gioielli",
        "countability": "plural-only",
        "partitive": "dei",
        "definitions": [
            {
                "text": "Oggetti preziosi come anelli o collane usati come ornamenti.",
                "examples": [
                    "Le piacciono molto i gioielli.",
                    "I gioielli sono chiusi nella cassaforte."
                ]
            }
        ],
        "transcription": "dʒoˈjɛlli",
        "in_article": "nei",
        "da_article": "dai"
    },
    {
        "word": "batteria",
        "level": "starter",
        "theme": "musical_instruments_A1",
        "emoji": "🥁",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "batterie",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Uno strumento musicale a percussione.",
                "examples": [
                    "Suona la batteria in una band.",
                    "La batteria fa molto rumore."
                ]
            }
        ],
        "transcription": "batteˈria",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "flauto",
        "level": "starter",
        "theme": "musical_instruments_A1",
        "emoji": "🪈",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "plural": "flauti",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Uno strumento musicale a fiato.",
                "examples": [
                    "Impara a suonare il flauto a scuola.",
                    "Il suono del flauto è molto dolce."
                ]
            }
        ],
        "transcription": "ˈflauto",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "poltrona",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "🛋️",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "poltrone",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Una sedia grande e comoda con braccioli.",
                "examples": [
                    "Mi siedo sulla poltrona per leggere.",
                    "Abbiamo comprato una poltrona nuova."
                ]
            }
        ],
        "transcription": "polˈtrona",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "libreria",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "📚",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "librerie",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Un mobile con scaffali usato per tenere i libri.",
                "examples": [
                    "La libreria è piena di libri.",
                    "Metti il dizionario nella libreria."
                ]
            }
        ],
        "transcription": "libreˈria",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "armadio",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "🧥",
        "form": "noun",
        "gender": "masculine",
        "article": "l'",
        "plural": "armadi",
        "countability": "countable",
        "partitive": "dell'",
        "definitions": [
            {
                "text": "Un mobile grande usato per riporre i vestiti.",
                "examples": [
                    "Metto il cappotto nell'armadio.",
                    "L'armadio è in camera da letto."
                ]
            }
        ],
        "transcription": "arˈmadjo",
        "in_article": "nell'",
        "da_article": "dall'"
    },
    {
        "word": "tappeto",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "🧶",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "plural": "tappeti",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un tessuto pesante usato per coprire parte del pavimento.",
                "examples": [
                    "C'è un tappeto colorato in soggiorno.",
                    "Puliamo il tappeto ogni settimana."
                ]
            }
        ],
        "transcription": "tapˈpɛto",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "cassetto",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "🗄️",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "plural": "cassetti",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Una parte di un mobile che si può tirare fuori per metterci delle cose.",
                "examples": [
                    "Le chiavi sono nel cassetto della scrivania.",
                    "Chiudi il cassetto, per favore."
                ]
            }
        ],
        "transcription": "kasˈsɛtto",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "telecomando",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "🎮",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "plural": "telecomandi",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un piccolo apparecchio usato per controllare la televisione a distanza.",
                "examples": [
                    "Dov'è il telecomando della TV?",
                    "Usa il telecomando per cambiare canale."
                ]
            }
        ],
        "transcription": "telekoˈmando",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "coperta",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "🛌",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "coperte",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Un panno pesante usato sul letto per stare caldi.",
                "examples": [
                    "Ho bisogno di un'altra coperta, ho freddo.",
                    "La coperta è fatta di lana."
                ]
            }
        ],
        "transcription": "koˈpɛrta",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "cuscino",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "🛌",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "plural": "cuscini",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un oggetto morbido su cui si appoggia la testa per dormire.",
                "examples": [
                    "Il mio cuscino è molto morbido.",
                    "Ci sono due cuscini sul letto."
                ]
            }
        ],
        "transcription": "kuʃˈʃino",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "lenzuolo",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "🛌",
        "form": "noun",
        "gender": "masculine",
        "article": "il",
        "plural": "lenzuola",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Un pezzo di stoffa leggera usato per coprire il materasso o per coprirsi a letto.",
                "examples": [
                    "Cambio le lenzuola ogni sabato.",
                    "Le lenzuola sono bianche e pulite."
                ]
            }
        ],
        "transcription": "lenˈtswɔlo",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "esempio",
        "level": "starter",
        "theme": "classroom_language_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "💡",
        "form": "noun",
        "plural": "esempi",
        "countability": "countable",
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
        "in_article": "nell'",
        "da_article": "dall'"
    },
    {
        "word": "indirizzo email",
        "level": "starter",
        "theme": "contact_details_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "📧",
        "form": "noun",
        "plural": "indirizzi email",
        "countability": "countable",
        "partitive": "dell'",
        "transcription": "indiˈrittso iˈmeil",
        "definitions": [
            {
                "text": "Indirizzo per la posta elettronica.",
                "examples": [
                    "Qual è il tuo indirizzo email?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nell'",
        "da_article": "dall'"
    },
    {
        "word": "numero di telefono",
        "level": "starter",
        "theme": "contact_details_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📞",
        "form": "noun",
        "plural": "numeri di telefono",
        "countability": "countable",
        "partitive": "del",
        "transcription": "ˈnumere di teˈlɛfono",
        "definitions": [
            {
                "text": "Serie di cifre per chiamare qualcuno.",
                "examples": [
                    "Qual è il tuo numero di telefono?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "spazzolino",
        "level": "starter",
        "theme": "household_items_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🪥",
        "form": "noun",
        "plural": "spazzolini",
        "countability": "countable",
        "partitive": "dello",
        "transcription": "spattsoˈlino",
        "definitions": [
            {
                "text": "Strumento per lavarsi i denti.",
                "examples": [
                    "Uso lo spazzolino ogni mattina."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nello",
        "da_article": "dallo"
    },
    {
        "word": "dentifricio",
        "level": "starter",
        "theme": "household_items_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🦷",
        "form": "noun",
        "plural": "dentifrici",
        "countability": "uncountable",
        "partitive": "del",
        "transcription": "dentiˈfritʃo",
        "definitions": [
            {
                "text": "Pasta per lavarsi i denti.",
                "examples": [
                    "Metti il dentifricio sullo spazzolino."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "pagina",
        "level": "starter",
        "theme": "classroom_language_A1",
        "article": "la",
        "form": "noun",
        "transcription": "ˈpadʒina",
        "plural": "pagine",
        "gender": "feminine",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Una delle due facciate di un foglio.",
                "examples": [
                    "Apri il libro a pagina dieci."
                ]
            }
        ],
        "emoji": "📄",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "lavagna",
        "level": "starter",
        "theme": "classroom_language_A1",
        "article": "la",
        "form": "noun",
        "transcription": "laˈvaɲɲa",
        "plural": "lavagne",
        "gender": "feminine",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Superficie su cui si scrive a scuola.",
                "examples": [
                    "L'insegnante scrive sulla lavagna."
                ]
            }
        ],
        "emoji": "👩‍🏫",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "studentessa",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "la",
        "form": "noun",
        "transcription": "studenˈtessa",
        "plural": "studentesse",
        "gender": "feminine",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Donna che studia in una scuola.",
                "examples": [
                    "Lei è una brava studentessa."
                ]
            }
        ],
        "emoji": "👩‍🎓",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "prego",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🤝",
        "form": "adverb",
        "transcription": "ˈprɛɡo",
        "definitions": [
            {
                "text": "Risposta a un ringraziamento.",
                "examples": [
                    "- Grazie! - Prego."
                ]
            }
        ]
    },
    {
        "word": "internet",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "article": "l'",
        "emoji": "🌐",
        "form": "noun",
        "transcription": "ˈintɛrnɛt",
        "gender": "masculine",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Rete informatica mondiale.",
                "examples": [
                    "Uso internet per studiare."
                ]
            }
        ],
        "in_article": "nell'",
        "da_article": "dall'"
    },
    {
        "word": "numero",
        "level": "starter",
        "theme": "numbers_0_9_A1",
        "article": "il",
        "form": "noun",
        "transcription": "ˈnumere",
        "plural": "numeri",
        "gender": "masculine",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Simbolo che indica una quantità.",
                "examples": [
                    "Il numero dieci."
                ]
            }
        ],
        "emoji": "🔢",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "pausa",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "article": "la",
        "form": "noun",
        "transcription": "ˈpauza",
        "plural": "pause",
        "gender": "feminine",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Breve interruzione del lavoro.",
                "examples": [
                    "Faccio una pausa caffè."
                ]
            }
        ],
        "emoji": "☕",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "calcolatrice",
        "level": "starter",
        "theme": "school_stationery_A1",
        "article": "la",
        "form": "noun",
        "transcription": "kalkolaˈtritʃe",
        "plural": "calcolatrici",
        "gender": "feminine",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Macchina per fare calcoli.",
                "examples": [
                    "Uso la calcolatrice per la matematica."
                ]
            }
        ],
        "emoji": "🔢",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "forbici",
        "level": "starter",
        "theme": "school_stationery_A1",
        "article": "le",
        "form": "noun",
        "transcription": "ˈforbitʃi",
        "plural": "forbici",
        "gender": "feminine",
        "countability": "plural-only",
        "partitive": "delle",
        "definitions": [
            {
                "text": "Strumento per tagliare.",
                "examples": [
                    "Uso le forbici per tagliare la carta."
                ]
            }
        ],
        "emoji": "✂️",
        "in_article": "nelle",
        "da_article": "dalle"
    },
    {
        "word": "polizia",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "la",
        "form": "noun",
        "transcription": "politˈtsia",
        "gender": "feminine",
        "countability": "uncountable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Organo dello Stato che mantiene l'ordine pubblico.",
                "examples": [
                    "Chiamare la polizia."
                ]
            }
        ],
        "emoji": "👮",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "fattoria",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "la",
        "form": "noun",
        "transcription": "fattoˈria",
        "plural": "fattorie",
        "gender": "feminine",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Luogo in campagna dove si allevano animali e si coltiva la terra.",
                "examples": [
                    "Il contadino lavora nella fattoria."
                ]
            }
        ],
        "emoji": "🚜",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "documento",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "il",
        "form": "noun",
        "transcription": "dokuˈmento",
        "plural": "documenti",
        "gender": "masculine",
        "countability": "countable",
        "partitive": "del",
        "definitions": [
            {
                "text": "Carta o file che contiene informazioni.",
                "examples": [
                    "Devo firmare questo documento."
                ]
            }
        ],
        "emoji": "📄",
        "in_article": "nel",
        "da_article": "dal"
    },
    {
        "word": "fabbrica",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "la",
        "form": "noun",
        "transcription": "ˈfabbrika",
        "plural": "fabbriche",
        "gender": "feminine",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "Edificio dove si producono beni in serie.",
                "examples": [
                    "Lui lavora in una fabbrica di auto."
                ]
            }
        ],
        "emoji": "🏭",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "fotografia",
        "level": "starter",
        "theme": "hobbies_interests_A1",
        "article": "la",
        "form": "noun",
        "transcription": "fotoɡraˈfia",
        "plural": "fotografie",
        "gender": "feminine",
        "countability": "countable",
        "partitive": "della",
        "definitions": [
            {
                "text": "L'arte di scattare foto; o l'immagine stessa.",
                "examples": [
                    "La fotografia è il mio hobby."
                ]
            }
        ],
        "emoji": "📷",
        "in_article": "nella",
        "da_article": "dalla"
    },
    {
        "word": "assetato",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "form": "adjective",
        "transcription": "asseˈtato",
        "definitions": [
            {
                "text": "Che ha bisogno di bere.",
                "examples": [
                    "Sono molto assetato."
                ]
            }
        ],
        "emoji": "💧"
    }
];

    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();