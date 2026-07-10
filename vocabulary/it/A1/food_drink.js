(function() {
    const data = [
    {
        "word": "pasta",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "emoji": "🍝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "partitive": "della",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_001",
        "lang": "it"
    },
    {
        "word": "mela",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "emoji": "🍎",
        "numberPlural": "4 mela",
        "answer": "quattro mele",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "transcription": "ˈmela",
        "plural": "mele",
        "gender": "feminine",
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "mala",
            "origin_meaning": "apples"
        },
        "id": "it_starter_food_drink_002",
        "lang": "it"
    },
    {
        "word": "pane",
        "level": "starter",
        "theme": "food_drink",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍞",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "transcription": "ˈpane",
        "plural": null,
        "subtext": "pane bianco",
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "panis",
            "origin_meaning": "bread"
        },
        "id": "it_starter_food_drink_003",
        "lang": "it"
    },
    {
        "word": "uovo",
        "level": "starter",
        "theme": "food_drink",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🥚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "transcription": "ˈwɔvo",
        "plural": "uova",
        "subtext": "uovo sodo",
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
        "id": "it_starter_food_drink_004",
        "lang": "it"
    },
    {
        "word": "latte",
        "level": "starter",
        "theme": "food_drink",
        "article": "il",
        "gender": "masculine",
        "emoji": "🥛",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "transcription": "ˈlatte",
        "plural": null,
        "subtext": "latte fresco",
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "lac",
            "origin_meaning": "milk"
        },
        "id": "it_starter_food_drink_005",
        "lang": "it"
    },
    {
        "word": "riso",
        "level": "starter",
        "theme": "food_drink",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "transcription": "ˈrizo",
        "plural": null,
        "subtext": "riso bianco",
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
        "id": "it_starter_food_drink_006",
        "lang": "it"
    },
    {
        "word": "carne",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "carne di manzo",
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "caro",
            "origin_meaning": "flesh, meat"
        },
        "id": "it_starter_food_drink_007",
        "lang": "it"
    },
    {
        "word": "cibo",
        "level": "starter",
        "theme": "food_drink",
        "article": "il",
        "emoji": "🍲",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cibi",
        "gender": "masculine",
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
        "id": "it_starter_food_drink_008",
        "lang": "it"
    },
    {
        "word": "caffè",
        "level": "starter",
        "theme": "food_drink",
        "article": "il",
        "gender": "masculine",
        "emoji": "☕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "caffè espresso",
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
        "id": "it_starter_food_drink_009",
        "lang": "it"
    },
    {
        "word": "tè",
        "level": "starter",
        "theme": "food_drink",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "tè verde",
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
        "id": "it_starter_food_drink_010",
        "lang": "it"
    },
    {
        "word": "succo",
        "level": "starter",
        "theme": "food_drink",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧃",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "succo di frutta",
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
        "id": "it_starter_food_drink_011",
        "lang": "it"
    },
    {
        "word": "acqua",
        "level": "starter",
        "theme": "food_drink",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🚰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "acqua naturale",
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "aqua",
            "origin_meaning": "water"
        },
        "id": "it_starter_food_drink_012",
        "lang": "it"
    },
    {
        "word": "colazione",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "☕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "colazioni",
        "definitions": [
            {
                "text": "Pasto del mattino.",
                "examples": [
                    "Faccio colazione."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "kolatˈtsjone",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_013",
        "lang": "it"
    },
    {
        "word": "cena",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍷",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cene",
        "definitions": [
            {
                "text": "Pasto della sera.",
                "examples": [
                    "Una buona cena."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈtʃena",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_014",
        "lang": "it"
    },
    {
        "word": "pranzo",
        "level": "starter",
        "theme": "food_drink",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍽️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pranzi",
        "definitions": [
            {
                "text": "Pasto di mezzogiorno.",
                "examples": [
                    "È ora di pranzo."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈprandzo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_015",
        "lang": "it"
    },
    {
        "word": "frutta",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍎",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "partitive": "della",
        "transcription": "ˈfrutta",
        "synonyms": [],
        "antonyms": [],
        "id": "it_starter_food_drink_016",
        "lang": "it"
    },
    {
        "word": "verdura",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "partitive": "della",
        "transcription": "verˈdura",
        "synonyms": [],
        "antonyms": [],
        "id": "it_starter_food_drink_017",
        "lang": "it"
    },
    {
        "word": "cucina",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cucine",
        "definitions": [
            {
                "text": "L'arte di cucinare.",
                "examples": [
                    "Amo la cucina italiana."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "kuˈtʃina",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_018",
        "lang": "it"
    },
    {
        "word": "birra",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍺",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "birra fredda, alla spina",
        "definitions": [
            {
                "text": "Una bevanda alcolica popolare fatta dal grano.",
                "examples": [
                    "Lui beve una birra nel fine settimana."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈbirra",
        "synonyms": [],
        "antonyms": [],
        "id": "it_starter_food_drink_019",
        "lang": "it"
    },
    {
        "word": "vino",
        "level": "starter",
        "theme": "food_drink",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍷",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "vino rosso, vino bianco, bicchiere di vino",
        "definitions": [
            {
                "text": "Una bevanda alcolica fatta dall'uva.",
                "examples": [
                    "Lei beve un bicchiere di vino la sera."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈvino",
        "synonyms": [],
        "antonyms": [],
        "id": "it_starter_food_drink_020",
        "lang": "it"
    },
    {
        "word": "pollo",
        "level": "starter",
        "theme": "food_drink",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "polli",
        "definitions": [
            {
                "text": "Carne di gallina.",
                "examples": [
                    "Mi piace il pollo."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈpollo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_021",
        "lang": "it"
    },
    {
        "word": "zucchero",
        "level": "starter",
        "theme": "food_drink",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🍚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "zuccheri",
        "definitions": [
            {
                "text": "Polvere dolce per i dolci.",
                "examples": [
                    "Niente zucchero nel mio tè."
                ]
            }
        ],
        "partitive": "dello",
        "transcription": "ˈtsukkero",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_022",
        "lang": "it"
    },
    {
        "word": "insalata",
        "level": "starter",
        "theme": "food_drink",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🥗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "insalate",
        "definitions": [
            {
                "text": "Piatto di verdure fredde.",
                "examples": [
                    "Un'insalata piccola, per favore."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "insaˈlata",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_023",
        "lang": "it"
    },
    {
        "word": "manzo",
        "level": "starter",
        "theme": "food_drink",
        "article": "il",
        "gender": "masculine",
        "emoji": "🥩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "manzi",
        "definitions": [
            {
                "text": "Carne di mucca.",
                "examples": [
                    "Mangio del manzo."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈmandzo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_024",
        "lang": "it"
    },
    {
        "word": "maiale",
        "level": "starter",
        "theme": "food_drink",
        "article": "il",
        "gender": "masculine",
        "emoji": "🥩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "maiali",
        "definitions": [
            {
                "text": "Carne di maiale.",
                "examples": [
                    "Lei non mangia maiale."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "maˈjale",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "maialis"
        },
        "id": "it_starter_food_drink_025",
        "lang": "it"
    },
    {
        "word": "patata",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥔",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "patate",
        "definitions": [
            {
                "text": "Un tubero commestibile.",
                "examples": [
                    "Patatine fritte fatte con le patate."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "paˈtata",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_026",
        "lang": "it"
    },
    {
        "word": "pomodoro",
        "level": "starter",
        "theme": "food_drink",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pomodori",
        "definitions": [
            {
                "text": "Un frutto rosso mangiato come verdura.",
                "examples": [
                    "Il pomodoro è maturo."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "pomoˈdɔro",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_027",
        "lang": "it"
    },
    {
        "word": "cipolla",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cipolle",
        "definitions": [
            {
                "text": "Verdura forte che fa piangere.",
                "examples": [
                    "Taglio una cipolla."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "tʃiˈpɔlla",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_028",
        "lang": "it"
    },
    {
        "word": "carota",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "carote",
        "definitions": [
            {
                "text": "Verdura arancione lunga.",
                "examples": [
                    "Il coniglio mangia una carota."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "kaˈrɔta",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_029",
        "lang": "it"
    },
    {
        "word": "zuppa",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "zuppe",
        "definitions": [
            {
                "text": "Piatto liquido caldo.",
                "examples": [
                    "La zuppa è buona."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈtsuppa",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_030",
        "lang": "it"
    },
    {
        "word": "torta",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "torte",
        "definitions": [
            {
                "text": "Dolce cotto al forno.",
                "examples": [
                    "Una torta al cioccolato."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈtɔrta",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_031",
        "lang": "it"
    },
    {
        "word": "cioccolato",
        "level": "starter",
        "theme": "food_drink",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cioccolati",
        "definitions": [
            {
                "text": "Cibo dolce marrone.",
                "examples": [
                    "Amo il cioccolato."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "tʃokkoˈlato",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_032",
        "lang": "it"
    },
    {
        "word": "gelato",
        "level": "starter",
        "theme": "food_drink",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "gelati",
        "definitions": [
            {
                "text": "Cibo freddo e dolce.",
                "examples": [
                    "Un gelato alla vaniglia."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "dʒeˈlato",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_033",
        "lang": "it"
    },
    {
        "word": "limone",
        "level": "starter",
        "theme": "food_drink",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍋",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "limoni",
        "definitions": [
            {
                "text": "Un frutto giallo acido.",
                "examples": [
                    "Del limone nel mio tè."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "liˈmone",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_034",
        "lang": "it"
    },
    {
        "word": "arancia",
        "level": "starter",
        "theme": "food_drink",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🍊",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "arance",
        "definitions": [
            {
                "text": "Un frutto arancione e tondo.",
                "examples": [
                    "Mangio un'arancia."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "aˈrantʃa",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_035",
        "lang": "it"
    },
    {
        "word": "fragola",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "fragole",
        "definitions": [
            {
                "text": "Un piccolo frutto rosso dolce.",
                "examples": [
                    "Mi piacciono le fragole."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈfraɡola",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_036",
        "lang": "it"
    },
    {
        "word": "uva",
        "level": "starter",
        "theme": "food_drink",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🍇",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "uve",
        "definitions": [
            {
                "text": "Piccoli frutti per fare il vino.",
                "examples": [
                    "Un grappolo d'uva."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "ˈuva",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_037",
        "lang": "it"
    },
    {
        "word": "aglio",
        "level": "starter",
        "theme": "food_drink",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🧄",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "agli",
        "definitions": [
            {
                "text": "Pianta con un forte odore.",
                "examples": [
                    "Cucino con l'aglio."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "ˈaʎʎo",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_038",
        "lang": "it"
    },
    {
        "word": "burro",
        "level": "starter",
        "theme": "food_drink",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧈",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "burri",
        "definitions": [
            {
                "text": "Prodotto grasso del latte.",
                "examples": [
                    "Del burro sul pane."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈburro",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_039",
        "lang": "it"
    },
    {
        "word": "formaggio",
        "level": "starter",
        "theme": "food_drink",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧀",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "formaggi",
        "definitions": [
            {
                "text": "Prodotto fatto col latte.",
                "examples": [
                    "Mi piace il formaggio."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈformaggio",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_040",
        "lang": "it"
    },
    {
        "word": "sale",
        "level": "starter",
        "theme": "food_drink",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧂",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sali",
        "definitions": [
            {
                "text": "Polvere bianca per salare.",
                "examples": [
                    "Un po' di sale."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈsale",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_041",
        "lang": "it"
    },
    {
        "word": "pepe",
        "level": "starter",
        "theme": "food_drink",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧂",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pepi",
        "definitions": [
            {
                "text": "Polvere nera piccante.",
                "examples": [
                    "Metti il pepe."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈpepe",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_042",
        "lang": "it"
    },
    {
        "word": "olio",
        "level": "starter",
        "theme": "food_drink",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏺",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "oli",
        "definitions": [
            {
                "text": "Liquido per condire.",
                "examples": [
                    "Olio d'oliva."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "ˈolio",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_043",
        "lang": "it"
    },
    {
        "word": "aceto",
        "level": "starter",
        "theme": "food_drink",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏺",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "aceti",
        "definitions": [
            {
                "text": "Liquido acido per insalata.",
                "examples": [
                    "Sale, pepe e aceto."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "ˈaceto",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_044",
        "lang": "it"
    },
    {
        "word": "merenda",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "merende",
        "definitions": [
            {
                "text": "Pasto del pomeriggio.",
                "examples": [
                    "I bambini fanno merenda."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "meˈrɛnda",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_045",
        "lang": "it"
    },
    {
        "word": "spuntino",
        "level": "starter",
        "theme": "food_drink",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🥣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "spuntini",
        "definitions": [
            {
                "text": "Piccolo pasto.",
                "examples": [
                    "Fare uno spuntino."
                ]
            }
        ],
        "partitive": "dello",
        "transcription": "spunˈtino",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_046",
        "lang": "it"
    },
    {
        "word": "pasto",
        "level": "starter",
        "theme": "food_drink",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍽️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pasti",
        "definitions": [
            {
                "text": "L'atto di mangiare.",
                "examples": [
                    "Un pasto abbondante."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈpasto",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_047",
        "lang": "it"
    },
    {
        "word": "banana",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍌",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "banane",
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
        "id": "it_starter_food_drink_048",
        "lang": "it"
    },
    {
        "word": "pizza",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pizze",
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
        "id": "it_starter_food_drink_049",
        "lang": "it"
    },
    {
        "word": "pesca",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pesche",
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
        "id": "it_starter_food_drink_050",
        "lang": "it"
    },
    {
        "word": "pera",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍐",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pere",
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
        "id": "it_starter_food_drink_051",
        "lang": "it"
    },
    {
        "word": "ciliegia",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "ciliegie",
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
        "id": "it_starter_food_drink_052",
        "lang": "it"
    },
    {
        "word": "bevanda",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥤",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "partitive": "della",
        "synonyms": [
            "bibita"
        ],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_053",
        "lang": "it"
    },
    {
        "word": "cereali",
        "level": "starter",
        "theme": "food_drink",
        "article": "i",
        "gender": "masculine",
        "emoji": "🥣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "partitive": "dei",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_food_drink_054",
        "lang": "it"
    }
];
    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();