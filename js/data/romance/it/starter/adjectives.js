(function() {
    const data = [
    {
        "word": "alto",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "corto",
        "oppositeEmoji": "📏",
        "feminine": "alta",
        "emoji": "🦒",
        "plural": "alti",
        "femininePlural": "alte",
        "definitions": [
            {
                "text": "Una persona o una cosa che è alta.",
                "examples": [
                    "Lui è molto alto.",
                    "Quell'edificio è alto."
                ]
            },
            {
                "text": "Di statura superiore alla media.",
                "examples": [
                    "È una donna alta che lavora come ingegnere."
                ]
            }
        ],
        "subtext": "un edificio alto / una persona alta / abbastanza alto",
        "comparative": "più alto",
        "superlative": "il più alto"
    },
    {
        "word": "corto",
        "feminine": "corta",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "plural": "corti",
        "femininePlural": "corte",
        "definitions": [
            {
                "text": "Una persona o una cosa che non è alta.",
                "examples": [
                    "Lei è bassa.",
                    "La matita è corta."
                ]
            },
            {
                "text": "Of less than average height or length.",
                "examples": [
                    "He has a short commute — ten minutes by bike."
                ]
            }
        ],
        "subtext": "a short journey / short hair / too short",
        "comparative": "più corto",
        "superlative": "il più corto",
        "opposite": "alto",
        "oppositeEmoji": "🗼"
    },
    {
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "feminine": "giovane",
        "plural": "giovani",
        "femininePlural": "giovani",
        "definitions": [
            {
                "text": "Che ha vissuto o è esistito per poco tempo.",
                "examples": [
                    "È un uomo giovane."
                ]
            }
        ],
        "comparative": "più giovane",
        "superlative": "il più giovane",
        "opposite": "vecchio",
        "oppositeEmoji": "👴",
        "subtext": "young person / young professional / young at heart",
        "word": "giovane"
    },
    {
        "word": "vecchio",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "giovane",
        "oppositeEmoji": "👶",
        "feminine": "vecchia",
        "emoji": "👴",
        "plural": "vecchi",
        "femininePlural": "vecchie",
        "definitions": [
            {
                "text": "Che ha vissuto o è esistito per molto tempo.",
                "examples": [
                    "Questo è un libro vecchio."
                ]
            },
            {
                "text": "Having existed for a long time.",
                "examples": [
                    "He works with old clients from ten years ago."
                ]
            }
        ],
        "subtext": "old friend / old habits / very old",
        "comparative": "più vecchio",
        "superlative": "il più vecchio"
    },
    {
        "word": "soleggiato",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Con molta luce dal sole.",
                "examples": [
                    "È una giornata soleggiata.",
                    "I like sunny weather."
                ]
            }
        ],
        "subtext": "sunny day / sunny weather / sunny spell",
        "comparative": "più soleggiato",
        "superlative": "il più soleggiato",
        "feminine": "soleggiata",
        "plural": "soleggiati",
        "femininePlural": "soleggiate"
    },
    {
        "word": "piovoso",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌧️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Con molta pioggia.",
                "examples": [
                    "È una giornata piovosa.",
                    "Wear a coat, it's rainy outside."
                ]
            }
        ],
        "subtext": "rainy day / rainy weather / rainy season",
        "comparative": "più piovoso",
        "superlative": "il più piovoso",
        "feminine": "piovosa",
        "plural": "piovosi",
        "femininePlural": "piovose"
    },
    {
        "word": "caldo",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🔥",
        "form": "adjective",
        "opposite": "freddo",
        "oppositeEmoji": "❄️",
        "subtext": "molto caldo, bollente",
        "definitions": [
            {
                "text": "Che ha un'alta temperatura.",
                "examples": [
                    "Il caffè è caldo."
                ]
            }
        ],
        "feminine": "calda",
        "plural": "caldi",
        "femininePlural": "calde",
        "comparative": "più caldo",
        "superlative": "il più caldo"
    },
    {
        "word": "freddo",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "❄️",
        "form": "adjective",
        "opposite": "caldo",
        "oppositeEmoji": "🔥",
        "subtext": "molto freddo, gelido",
        "definitions": [
            {
                "text": "Che ha una bassa temperatura.",
                "examples": [
                    "L'acqua è fredda."
                ]
            }
        ],
        "feminine": "fredda",
        "plural": "freddi",
        "femininePlural": "fredde",
        "comparative": "più freddo",
        "superlative": "il più freddo"
    },
    {
        "word": "ordinario",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "speciale",
        "oppositeEmoji": "✨",
        "definitions": [
            {
                "text": "Normale o usuale; non speciale.",
                "examples": [
                    "Era una giornata ordinaria."
                ]
            }
        ],
        "subtext": "ordinary day / ordinary life / nothing ordinary",
        "comparative": "più ordinario",
        "superlative": "il più ordinario",
        "feminine": "ordinaria",
        "plural": "ordinari",
        "femininePlural": "ordinarie"
    },
    {
        "word": "economico",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "costoso",
        "oppositeEmoji": "💎",
        "feminine": "economica",
        "plural": "economici",
        "femininePlural": "economiche",
        "definitions": [
            {
                "text": "Not expensive; low in price.",
                "examples": [
                    "Questo caffè è economico."
                ]
            },
            {
                "text": "A basso prezzo.",
                "examples": [
                    "The lunch near the office is very cheap."
                ]
            }
        ],
        "subtext": "low price, inexpensive / cheap flight / very cheap / cheap and cheerful",
        "comparative": "più economico",
        "superlative": "il più economico"
    },
    {
        "word": "costoso",
        "feminine": "costosa",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💎",
        "form": "adjective",
        "plural": "costosi",
        "femininePlural": "costose",
        "definitions": [
            {
                "text": "Che costa molti soldi.",
                "examples": [
                    "That car is expensive."
                ]
            },
            {
                "text": "Ad alto prezzo.",
                "examples": [
                    "The city centre is expensive for rent."
                ]
            }
        ],
        "subtext": "costly, high price / very expensive / expensive taste / too expensive",
        "comparative": "più costoso",
        "superlative": "il più costoso",
        "opposite": "economico",
        "oppositeEmoji": "🏷️"
    },
    {
        "word": "buono",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "cattivo",
        "oppositeEmoji": "👎",
        "feminine": "buona",
        "plural": "buoni",
        "femininePlural": "buone",
        "definitions": [
            {
                "text": "Of high quality or ability; pleasant.",
                "examples": [
                    "Questo è un buon lavoro."
                ]
            },
            {
                "text": "Di alta qualità o piacevole.",
                "examples": [
                    "She has a good job with flexible hours."
                ]
            }
        ],
        "subtext": "great, nice, pleasant / good idea / good luck / good value",
        "comparative": "migliore",
        "superlative": "il migliore"
    },
    {
        "word": "cattivo",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "buono",
        "oppositeEmoji": "👍",
        "feminine": "cattiva",
        "plural": "cattivi",
        "femininePlural": "cattive",
        "definitions": [
            {
                "text": "Not good; unpleasant or of poor quality.",
                "examples": [
                    "Il tempo è brutto oggi."
                ]
            },
            {
                "text": "Of low quality; unpleasant or harmful.",
                "examples": [
                    "He had a bad day at work."
                ]
            }
        ],
        "subtext": "terrible, awful, unpleasant / bad news / bad luck / bad decision",
        "comparative": "peggiore",
        "superlative": "il peggiore"
    },
    {
        "word": "grande",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "piccolo",
        "oppositeEmoji": "🐭",
        "feminine": "grande",
        "plural": "grandi",
        "femininePlural": "grandi",
        "definitions": [
            {
                "text": "Large in size.",
                "examples": [
                    "È un grande ufficio."
                ]
            },
            {
                "text": "Grande per dimensioni o quantità.",
                "examples": [
                    "They have a big house near the park."
                ]
            }
        ],
        "subtext": "large, huge / a big house / a big problem / big enough",
        "comparative": "più grande",
        "superlative": "il più grande"
    },
    {
        "word": "piccolo",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "grande",
        "oppositeEmoji": "🐘",
        "feminine": "piccola",
        "plural": "piccoli",
        "femininePlural": "piccole",
        "definitions": [
            {
                "text": "Little in size.",
                "examples": [
                    "Ha un piccolo appartamento."
                ]
            },
            {
                "text": "Little in size or amount.",
                "examples": [
                    "She rents a small flat in the city centre."
                ]
            }
        ],
        "subtext": "little, tiny / a small flat / a small salary / too small",
        "comparative": "più piccolo",
        "superlative": "il più piccolo"
    },
    {
        "word": "facile",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "difficile",
        "oppositeEmoji": "❌",
        "feminine": "facile",
        "plural": "facili",
        "femininePlural": "facili",
        "definitions": [
            {
                "text": "Non difficile.",
                "examples": [
                    "Il test è facile.",
                    "The application form is easy to complete."
                ]
            }
        ],
        "subtext": "easy to do / nice and easy / not easy",
        "comparative": "più facile",
        "superlative": "il più facile"
    },
    {
        "word": "difficile",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "facile",
        "oppositeEmoji": "✅",
        "feminine": "difficile",
        "plural": "difficili",
        "femininePlural": "difficili",
        "definitions": [
            {
                "text": "Hard to do or understand.",
                "examples": [
                    "This work is difficult."
                ]
            },
            {
                "text": "Not easy; requiring effort.",
                "examples": [
                    "The negotiation was very difficult."
                ]
            }
        ],
        "subtext": "difficult to do / very difficult / find it difficult",
        "comparative": "più difficile",
        "superlative": "il più difficile"
    },
    {
        "word": "felice",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "form": "adjective",
        "feminine": "felice",
        "plural": "felici",
        "femininePlural": "felici",
        "definitions": [
            {
                "text": "Che prova piacere o gioia.",
                "examples": [
                    "Sono felice oggi."
                ]
            },
            {
                "text": "Feeling pleasure or satisfaction.",
                "examples": [
                    "She is happy in her new role."
                ]
            }
        ],
        "subtext": "glad, cheerful, feel happy / feel happy / happy with something / a happy day",
        "comparative": "più felice",
        "superlative": "il più felice"
    },
    {
        "word": "stanco",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😫",
        "form": "adjective",
        "feminine": "stanca",
        "plural": "stanchi",
        "femininePlural": "stanche",
        "definitions": [
            {
                "text": "Che ha bisogno di riposo o sonno.",
                "examples": [
                    "Sono molto stanco dopo il lavoro.",
                    "I feel tired after a long week."
                ]
            }
        ],
        "subtext": "sleepy, exhausted, feel tired / feel tired / tired of something / very tired",
        "comparative": "più stanco",
        "superlative": "il più stanco"
    },
    {
        "word": "a tempo pieno",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "adjective",
        "opposite": "a tempo parziale",
        "oppositeEmoji": "⏳",
        "definitions": [
            {
                "text": "Che lavora il numero completo di ore in una settimana lavorativa.",
                "examples": [
                    "Ha un lavoro a tempo pieno in banca."
                ]
            }
        ],
        "subtext": "full-time job / full-time work / full-time employee",
        "comparative": "più a tempo pieno",
        "superlative": "il più a tempo pieno",
        "feminine": "a tempo pieno",
        "plural": "a tempo pieno",
        "femininePlural": "a tempo pieno"
    },
    {
        "word": "a tempo parziale",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "form": "adjective",
        "opposite": "a tempo pieno",
        "oppositeEmoji": "⏰",
        "definitions": [
            {
                "text": "Che lavora meno ore di una settimana lavorativa standard.",
                "examples": [
                    "Lavora part-time il sabato."
                ]
            }
        ],
        "subtext": "part-time job / part-time work / part-time student",
        "comparative": "più a tempo parziale",
        "superlative": "il più a tempo parziale",
        "feminine": "a tempo parziale",
        "plural": "a tempo parziale",
        "femininePlural": "a tempo parziale"
    },
    {
        "word": "pulito",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "sporco",
        "oppositeEmoji": "💩",
        "subtext": "ordinato, limpido",
        "definitions": [
            {
                "text": "Privo di sporco.",
                "examples": [
                    "La mia camera è pulita."
                ]
            }
        ],
        "feminine": "pulita",
        "plural": "puliti",
        "femininePlural": "pulite",
        "comparative": "più pulito",
        "superlative": "il più pulito"
    },
    {
        "word": "sano",
        "level": "starter",
        "theme": "basic_foods_A1",
        "form": "adjective",
        "feminine": "sana",
        "plural": "sani",
        "femininePlural": "sane",
        "definitions": [
            {
                "text": "Good for your body; not ill.",
                "examples": [
                    "Le verdure sono cibo sano."
                ]
            }
        ],
        "subtext": "well, fit, healthy diet",
        "comparative": "più sano",
        "superlative": "il più sano",
        "opposite": "unhealthy",
        "oppositeEmoji": "🍔"
    },
    {
        "word": "malato",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "feminine": "malata",
        "plural": "malati",
        "femininePlural": "malate",
        "definitions": [
            {
                "text": "Non sta bene; malato.",
                "examples": [
                    "Mi sento male oggi."
                ]
            }
        ],
        "subtext": "sick, feel ill",
        "comparative": "più malato",
        "superlative": "il più malato",
        "opposite": "well",
        "oppositeEmoji": "💪"
    },
    {
        "word": "online",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🌐",
        "form": "adjective",
        "definitions": [
            {
                "text": "Utilizzando internet.",
                "examples": [
                    "A volte compro cibo online."
                ]
            }
        ],
        "subtext": "online shopping / online course / stay online",
        "comparative": "più online",
        "superlative": "il più online",
        "opposite": "offline",
        "oppositeEmoji": "📴",
        "feminine": "online",
        "plural": "online",
        "femininePlural": "online"
    },
    {
        "word": "solo",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "together",
        "oppositeEmoji": "👫",
        "definitions": [
            {
                "text": "Senza altre persone; da solo.",
                "examples": [
                    "Vive da sola."
                ]
            }
        ],
        "subtext": "live alone / travel alone / feel alone",
        "comparative": "più solo",
        "superlative": "il più solo",
        "feminine": "sola",
        "plural": "soli",
        "femininePlural": "sole"
    },
    {
        "word": "rilassato",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "feminine": "rilassata",
        "plural": "rilassati",
        "femininePlural": "rilassate",
        "definitions": [
            {
                "text": "Calmo; non preoccupato o stressato.",
                "examples": [
                    "Mi sento rilassato nel fine settimana."
                ]
            }
        ],
        "subtext": "calm, feeling relaxed",
        "comparative": "più rilassato",
        "superlative": "il più rilassato",
        "opposite": "stressato",
        "oppositeEmoji": "😫"
    },
    {
        "word": "preoccupato",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "preoccupata",
        "plural": "preoccupati",
        "femininePlural": "preoccupate",
        "definitions": [
            {
                "text": "Che si sente ansioso per qualcosa che potrebbe accadere.",
                "examples": [
                    "È preoccupata per il suo lavoro."
                ]
            }
        ],
        "subtext": "anxious",
        "comparative": "più preoccupato",
        "superlative": "il più preoccupato",
        "opposite": "calm",
        "oppositeEmoji": "😌"
    },
    {
        "word": "occupato",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "definitions": [
            {
                "text": "Avere molte cose da fare.",
                "examples": [
                    "Sono molto occupato questa settimana."
                ]
            }
        ],
        "feminine": "occupata",
        "plural": "occupati",
        "femininePlural": "occupate",
        "subtext": "very busy, busy day / busy schedule / very busy / too busy",
        "comparative": "più occupato",
        "superlative": "il più occupato"
    },
    {
        "word": "utile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "utile",
        "plural": "utili",
        "femininePlural": "utili",
        "definitions": [
            {
                "text": "Helpful; having a practical purpose.",
                "examples": [
                    "A car is very useful in the country."
                ]
            }
        ],
        "subtext": "helpful, practical",
        "comparative": "più utile",
        "superlative": "il più utile",
        "opposite": "inutile",
        "oppositeEmoji": "🗑️"
    },
    {
        "word": "importante",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❗",
        "form": "adjective",
        "subtext": "essenziale",
        "definitions": [
            {
                "text": "Che ha grande valore o effetto.",
                "examples": [
                    "Il sonno è molto importante."
                ]
            }
        ],
        "feminine": "importante",
        "plural": "importanti",
        "femininePlural": "importanti",
        "comparative": "più importante",
        "superlative": "il più importante"
    },
    {
        "word": "rosso",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟥",
        "form": "adjective",
        "subtext": "rosso scuro, rosso vivo",
        "definitions": [
            {
                "text": "Che ha il colore del sangue o di un pomodoro maturo.",
                "examples": [
                    "Lei ha una borsa rossa."
                ]
            }
        ],
        "feminine": "rossa",
        "plural": "rossi",
        "femininePlural": "rosse",
        "comparative": "più rosso",
        "superlative": "il più rosso"
    },
    {
        "word": "blu",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟦",
        "form": "adjective",
        "subtext": "azzurro, blu scuro",
        "definitions": [
            {
                "text": "Che ha il colore del cielo limpido.",
                "examples": [
                    "La sua macchina è blu."
                ]
            }
        ],
        "feminine": "blu",
        "plural": "blu",
        "femininePlural": "blu",
        "comparative": "più blu",
        "superlative": "il più blu"
    },
    {
        "word": "verde",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟩",
        "form": "adjective",
        "subtext": "verde chiaro, verde scuro",
        "definitions": [
            {
                "text": "Che ha il colore dell'erba o delle foglie.",
                "examples": [
                    "Lei indossa un vestito verde."
                ]
            }
        ],
        "feminine": "verde",
        "plural": "verdi",
        "femininePlural": "verdi",
        "comparative": "più verde",
        "superlative": "il più verde"
    },
    {
        "word": "bianco",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬜",
        "form": "adjective",
        "subtext": "bianco puro, bianco neve",
        "definitions": [
            {
                "text": "Che ha il colore della neve o del latte.",
                "examples": [
                    "Le pareti sono bianche."
                ]
            }
        ],
        "feminine": "bianca",
        "plural": "bianchi",
        "femininePlural": "bianche",
        "comparative": "più bianco",
        "superlative": "il più bianco"
    },
    {
        "word": "nero",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬛",
        "form": "adjective",
        "subtext": "nero come la pece, scuro",
        "definitions": [
            {
                "text": "Che ha il colore più scuro, come il cielo notturno.",
                "examples": [
                    "Lui indossa un cappotto nero."
                ]
            }
        ],
        "feminine": "nera",
        "plural": "neri",
        "femininePlural": "nere",
        "comparative": "più nero",
        "superlative": "il più nero"
    },
    {
        "word": "giallo",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟨",
        "form": "adjective",
        "subtext": "giallo limone, giallo oro",
        "definitions": [
            {
                "text": "Che ha il colore del sole o di un limone.",
                "examples": [
                    "Lei ha un ombrello giallo."
                ]
            }
        ],
        "feminine": "gialla",
        "plural": "gialli",
        "femininePlural": "gialle",
        "comparative": "più giallo",
        "superlative": "il più giallo"
    },
    {
        "word": "libero",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "gratis, senza costi",
        "definitions": [
            {
                "text": "Che non costa denaro.",
                "examples": [
                    "Il museo è gratuito la domenica."
                ]
            }
        ],
        "feminine": "libera",
        "plural": "liberi",
        "femininePlural": "libere",
        "comparative": "più libero",
        "superlative": "il più libero"
    },
    {
        "word": "aperto",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "form": "adjective",
        "opposite": "chiuso",
        "oppositeEmoji": "🔒",
        "subtext": "libero, non chiuso",
        "definitions": [
            {
                "text": "Che non è chiuso; che permette l'ingresso.",
                "examples": [
                    "Il negozio è aperto fino alle otto."
                ]
            }
        ],
        "feminine": "aperta",
        "plural": "aperti",
        "femininePlural": "aperte",
        "comparative": "più aperto",
        "superlative": "il più aperto"
    },
    {
        "word": "chiuso",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "form": "adjective",
        "opposite": "aperto",
        "oppositeEmoji": "📖",
        "subtext": "non accessibile",
        "definitions": [
            {
                "text": "Che non è aperto.",
                "examples": [
                    "La banca è chiusa la domenica."
                ]
            }
        ],
        "feminine": "chiusa",
        "plural": "chiusi",
        "femininePlural": "chiuse",
        "comparative": "più chiuso",
        "superlative": "il più chiuso"
    },
    {
        "word": "grande",
        "feminine": "grande",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "plural": "grandi",
        "femininePlural": "grandi",
        "definitions": [
            {
                "text": "Of more than average size or amount.",
                "examples": [
                    "Paris is a very large city."
                ]
            }
        ],
        "subtext": "a large city / a large company / a large amount",
        "comparative": "più grande",
        "superlative": "il più grande"
    },
    {
        "word": "piccolo",
        "feminine": "piccola",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "plural": "piccoli",
        "femininePlural": "piccole",
        "definitions": [
            {
                "text": "Small in size; a small amount of.",
                "examples": [
                    "He drives a little car to save on fuel."
                ]
            }
        ],
        "subtext": "a little bit / a little money / too little",
        "comparative": "più piccolo",
        "superlative": "il più piccolo"
    },
    {
        "word": "lungo",
        "feminine": "lunga",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "plural": "lunghi",
        "femininePlural": "lunghe",
        "definitions": [
            {
                "text": "Of great length; lasting a long time.",
                "examples": [
                    "She has a long commute every day."
                ]
            }
        ],
        "subtext": "a long journey / a long day / a long time",
        "comparative": "più lungo",
        "superlative": "il più lungo"
    },
    {
        "word": "alto",
        "feminine": "alta",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📈",
        "form": "adjective",
        "plural": "alti",
        "femininePlural": "alte",
        "definitions": [
            {
                "text": "Of greater than average height or level.",
                "examples": [
                    "The rent in this area is very high."
                ]
            }
        ],
        "subtext": "high price / high rent / high quality",
        "comparative": "più alto",
        "superlative": "il più alto"
    },
    {
        "word": "basso",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "feminine": "bassa",
        "emoji": "📉",
        "plural": "bassi",
        "femininePlural": "basse",
        "definitions": [
            {
                "text": "Of less than average height or level.",
                "examples": [
                    "The salary is too low for the hours involved."
                ]
            }
        ],
        "subtext": "low price / low salary / low quality",
        "comparative": "più basso",
        "superlative": "il più basso"
    },
    {
        "word": "pieno",
        "feminine": "piena",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🥛",
        "form": "adjective",
        "plural": "pieni",
        "femininePlural": "piene",
        "definitions": [
            {
                "text": "Containing as much as possible; complete.",
                "examples": [
                    "I feel full after that lunch."
                ]
            }
        ],
        "subtext": "full time / a full day / full of people",
        "comparative": "più pieno",
        "superlative": "il più pieno"
    },
    {
        "word": "vuoto",
        "feminine": "vuota",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🫙",
        "form": "adjective",
        "plural": "vuoti",
        "femininePlural": "vuote",
        "definitions": [
            {
                "text": "Containing nothing; with no people.",
                "examples": [
                    "The office is empty at weekends."
                ]
            }
        ],
        "subtext": "an empty flat / an empty room / nearly empty",
        "comparative": "più vuoto",
        "superlative": "il più vuoto"
    },
    {
        "word": "tiepido",
        "feminine": "tiepida",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "adjective",
        "plural": "tiepidi",
        "femininePlural": "tiepide",
        "definitions": [
            {
                "text": "Slightly hot; pleasantly heated.",
                "examples": [
                    "The office is warm and comfortable."
                ]
            }
        ],
        "subtext": "warm weather / a warm welcome / keep warm",
        "comparative": "più tiepido",
        "superlative": "il più tiepido"
    },
    {
        "word": "fresco",
        "feminine": "fresca",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌬️",
        "form": "adjective",
        "plural": "freschi",
        "femininePlural": "fresche",
        "definitions": [
            {
                "text": "Slightly cold; pleasantly low temperature.",
                "examples": [
                    "She prefers cool weather for working."
                ]
            }
        ],
        "subtext": "cool weather / a cool drink / stay cool",
        "comparative": "più fresco",
        "superlative": "il più fresco"
    },
    {
        "word": "bagnato",
        "feminine": "bagnata",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🚿",
        "form": "adjective",
        "plural": "bagnati",
        "femininePlural": "bagnate",
        "definitions": [
            {
                "text": "Covered with water or liquid.",
                "examples": [
                    "His jacket is wet from the rain."
                ]
            }
        ],
        "subtext": "wet weather / wet clothes / get wet",
        "comparative": "più bagnato",
        "superlative": "il più bagnato"
    },
    {
        "word": "asciutto",
        "feminine": "asciutta",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🏜️",
        "form": "adjective",
        "plural": "asciutti",
        "femininePlural": "asciutte",
        "definitions": [
            {
                "text": "Without water or liquid; not wet.",
                "examples": [
                    "The storage room must stay dry."
                ]
            }
        ],
        "subtext": "dry weather / dry skin / keep dry",
        "comparative": "più asciutto",
        "superlative": "il più asciutto"
    },
    {
        "word": "sporco",
        "feminine": "sporca",
        "level": "starter",
        "emoji": "💩",
        "form": "adjective",
        "plural": "sporchi",
        "femininePlural": "sporche",
        "definitions": [
            {
                "text": "Covered in dirt or impurities.",
                "examples": [
                    "His hands are dirty after fixing the car."
                ]
            }
        ],
        "subtext": "dirty hands / dirty clothes / get dirty",
        "comparative": "più sporco",
        "superlative": "il più sporco"
    },
    {
        "word": "duro",
        "feminine": "dura",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🧱",
        "form": "adjective",
        "plural": "duri",
        "femininePlural": "dure",
        "definitions": [
            {
                "text": "Firm and solid; difficult.",
                "examples": [
                    "The chair is very hard and uncomfortable."
                ]
            }
        ],
        "subtext": "hard work / a hard decision / too hard",
        "comparative": "più duro",
        "superlative": "il più duro"
    },
    {
        "word": "morbido",
        "feminine": "morbida",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "☁️",
        "form": "adjective",
        "plural": "morbidi",
        "femininePlural": "morbide",
        "definitions": [
            {
                "text": "Not hard; gentle to the touch.",
                "examples": [
                    "The sofa is very soft and comfortable."
                ]
            }
        ],
        "subtext": "soft light / soft music / soft skills",
        "comparative": "più morbido",
        "superlative": "il più morbido"
    },
    {
        "word": "pesante",
        "feminine": "pesante",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🏋️",
        "form": "adjective",
        "plural": "pesanti",
        "femininePlural": "pesanti",
        "definitions": [
            {
                "text": "Of great weight; difficult to carry.",
                "examples": [
                    "The bag is very heavy with all those files."
                ]
            }
        ],
        "subtext": "heavy traffic / heavy rain / too heavy",
        "comparative": "più pesante",
        "superlative": "il più pesante"
    },
    {
        "word": "leggero",
        "feminine": "leggera",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🪶",
        "form": "adjective",
        "plural": "leggeri",
        "femininePlural": "leggere",
        "definitions": [
            {
                "text": "Not heavy; pale in colour.",
                "examples": [
                    "She carries a light bag to work every day."
                ]
            }
        ],
        "subtext": "light rain / light traffic / a light meal",
        "comparative": "più leggero",
        "superlative": "il più leggero"
    },
    {
        "word": "marrone",
        "feminine": "marrone",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟫",
        "form": "adjective",
        "plural": "marroni",
        "femininePlural": "marroni",
        "definitions": [
            {
                "text": "Having the colour of wood or earth.",
                "examples": [
                    "She has brown eyes and dark hair."
                ]
            }
        ],
        "subtext": "dark brown / light brown / brown bread",
        "comparative": "più marrone",
        "superlative": "il più marrone"
    },
    {
        "word": "grigio",
        "feminine": "grigia",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🩶",
        "form": "adjective",
        "plural": "grigi",
        "femininePlural": "grigie",
        "definitions": [
            {
                "text": "Having a colour between black and white.",
                "examples": [
                    "He has grey hair and a kind face."
                ]
            }
        ],
        "subtext": "grey area / grey sky / pale grey",
        "comparative": "più grigio",
        "superlative": "il più grigio"
    },
    {
        "word": "rosa",
        "feminine": "rosa",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🩷",
        "form": "adjective",
        "plural": "rosa",
        "femininePlural": "rosa",
        "definitions": [
            {
                "text": "Having a pale red colour.",
                "examples": [
                    "She prefers pink to red."
                ]
            }
        ],
        "subtext": "light pink / bright pink / hot pink",
        "comparative": "più rosa",
        "superlative": "il più rosa"
    },
    {
        "word": "arancione",
        "feminine": "arancioni",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟧",
        "form": "adjective",
        "plural": "arancioni",
        "femininePlural": "arancioni",
        "definitions": [
            {
                "text": "Having the colour of an orange fruit.",
                "examples": [
                    "He bought an orange jacket."
                ]
            }
        ],
        "subtext": "bright orange / dark orange / orange light",
        "comparative": "più arancione",
        "superlative": "il più arancione"
    },
    {
        "word": "grande",
        "feminine": "grande",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🌟",
        "form": "adjective",
        "plural": "grandi",
        "femininePlural": "grandi",
        "definitions": [
            {
                "text": "Extremely good; large in amount.",
                "examples": [
                    "She is a great manager."
                ]
            }
        ],
        "subtext": "a great idea / a great opportunity / great value",
        "comparative": "più grande",
        "superlative": "il più grande"
    },
    {
        "word": "bello",
        "feminine": "bella",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😊",
        "form": "adjective",
        "plural": "belli",
        "femininePlural": "belle",
        "definitions": [
            {
                "text": "Pleasant or kind.",
                "examples": [
                    "The new office is very nice."
                ]
            }
        ],
        "subtext": "a nice day / a nice place / a nice person",
        "comparative": "più bello",
        "superlative": "il più bello"
    },
    {
        "word": "meraviglioso",
        "feminine": "meravigliosa",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "✨",
        "form": "adjective",
        "plural": "meravigliosi",
        "femininePlural": "meravigliose",
        "definitions": [
            {
                "text": "Extremely good; causing delight.",
                "examples": [
                    "They had a wonderful team."
                ]
            }
        ],
        "subtext": "a wonderful opportunity / a wonderful time",
        "comparative": "più meraviglioso",
        "superlative": "il più meraviglioso"
    },
    {
        "word": "terribile",
        "feminine": "terribile",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😫",
        "form": "adjective",
        "plural": "terribili",
        "femininePlural": "terribili",
        "definitions": [
            {
                "text": "Extremely bad.",
                "examples": [
                    "The traffic this morning was terrible."
                ]
            }
        ],
        "subtext": "terrible weather / a terrible mistake / terrible news",
        "comparative": "più terribile",
        "superlative": "il più terribile"
    },
    {
        "word": "orribile",
        "feminine": "orribile",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤮",
        "form": "adjective",
        "plural": "orribili",
        "femininePlural": "orribili",
        "definitions": [
            {
                "text": "Very bad or unpleasant.",
                "examples": [
                    "The noise in the open office is awful."
                ]
            }
        ],
        "subtext": "awful weather / awful news / simply awful",
        "comparative": "più orribile",
        "superlative": "il più orribile"
    },
    {
        "word": "incredibile",
        "feminine": "incredibile",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😲",
        "form": "adjective",
        "plural": "incredibili",
        "femininePlural": "incredibili",
        "definitions": [
            {
                "text": "Causing great surprise or admiration.",
                "examples": [
                    "She gave an amazing presentation."
                ]
            }
        ],
        "subtext": "an amazing result / an amazing offer / truly amazing",
        "comparative": "più incredibile",
        "superlative": "il più incredibile"
    },
    {
        "word": "fantastico",
        "feminine": "fantastica",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤩",
        "form": "adjective",
        "plural": "fantastici",
        "femininePlural": "fantastiche",
        "definitions": [
            {
                "text": "Extremely good.",
                "examples": [
                    "The new system works in a fantastic way."
                ]
            }
        ],
        "subtext": "fantastic news / a fantastic opportunity / truly fantastic",
        "comparative": "più fantastico",
        "superlative": "il più fantastico"
    },
    {
        "word": "triste",
        "feminine": "triste",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😢",
        "form": "adjective",
        "plural": "tristi",
        "femininePlural": "tristi",
        "definitions": [
            {
                "text": "Feeling unhappy or sorrowful.",
                "examples": [
                    "He was sad to leave the company."
                ]
            }
        ],
        "subtext": "feel sad / a sad situation / deeply sad",
        "comparative": "più triste",
        "superlative": "il più triste"
    },
    {
        "word": "affamato",
        "feminine": "affamata",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🤤",
        "form": "adjective",
        "plural": "affamati",
        "femininePlural": "affamate",
        "definitions": [
            {
                "text": "Needing food.",
                "examples": [
                    "I am hungry — it is already two o'clock."
                ]
            }
        ],
        "subtext": "feel hungry / very hungry / go hungry",
        "comparative": "più affamato",
        "superlative": "il più affamato"
    },
    {
        "word": "arrabbiato",
        "feminine": "arrabbiata",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😠",
        "form": "adjective",
        "plural": "arrabbiati",
        "femininePlural": "arrabbiate",
        "definitions": [
            {
                "text": "Feeling strong displeasure.",
                "examples": [
                    "She was angry about the decision."
                ]
            }
        ],
        "subtext": "feel angry / angry with someone / very angry",
        "comparative": "più arrabbiato",
        "superlative": "il più arrabbiato"
    },
    {
        "word": "annoiato",
        "feminine": "annoiata",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😐",
        "form": "adjective",
        "plural": "annoiati",
        "femininePlural": "annoiate",
        "definitions": [
            {
                "text": "Feeling uninterested or restless.",
                "examples": [
                    "He feels bored in long meetings."
                ]
            }
        ],
        "subtext": "feel bored / bored with / easily bored",
        "comparative": "più annoiato",
        "superlative": "il più annoiato"
    },
    {
        "word": "emozionato",
        "feminine": "emozionata",
        "level": "starter",
        "emoji": "🤩",
        "form": "adjective",
        "plural": "emozionati",
        "femininePlural": "emozionate",
        "definitions": [
            {
                "text": "Feeling enthusiasm and eagerness.",
                "examples": [
                    "She is excited about her new job."
                ]
            }
        ],
        "subtext": "feel excited / excited about / very excited",
        "comparative": "più emozionato",
        "superlative": "il più emozionato"
    },
    {
        "word": "spaventato",
        "feminine": "spaventata",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😨",
        "form": "adjective",
        "plural": "spaventati",
        "femininePlural": "spaventate",
        "definitions": [
            {
                "text": "Feeling fear.",
                "examples": [
                    "He is afraid of making mistakes."
                ]
            }
        ],
        "subtext": "afraid of / feel afraid / deeply afraid",
        "comparative": "più spaventato",
        "superlative": "il più spaventato"
    },
    {
        "word": "dispiaciuto",
        "feminine": "dispiaciuta",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🥺",
        "form": "adjective",
        "plural": "dispiaciuti",
        "femininePlural": "dispiaciute",
        "definitions": [
            {
                "text": "Feeling regret or sadness.",
                "examples": [
                    "She is sorry for the delay."
                ]
            }
        ],
        "subtext": "feel sorry / sorry for / sorry about",
        "comparative": "più dispiaciuto",
        "superlative": "il più dispiaciuto"
    },
    {
        "word": "giusto",
        "feminine": "giusta",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "✅",
        "form": "adjective",
        "plural": "giusti",
        "femininePlural": "giuste",
        "definitions": [
            {
                "text": "Correct; suitable.",
                "examples": [
                    "Is this the right office?"
                ]
            }
        ],
        "subtext": "right answer / right time / absolutely right",
        "comparative": "più giusto",
        "superlative": "il più giusto"
    },
    {
        "word": "sbagliato",
        "feminine": "sbagliata",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❌",
        "form": "adjective",
        "plural": "sbagliati",
        "femininePlural": "sbagliate",
        "definitions": [
            {
                "text": "Not correct; not suitable.",
                "examples": [
                    "That was the wrong decision."
                ]
            }
        ],
        "subtext": "wrong answer / go wrong / completely wrong",
        "comparative": "più sbagliato",
        "superlative": "il più sbagliato"
    },
    {
        "word": "nuovo",
        "feminine": "nuova",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🆕",
        "form": "adjective",
        "plural": "nuovi",
        "femininePlural": "nuove",
        "definitions": [
            {
                "text": "Not existing before; recently made.",
                "examples": [
                    "She has a new job starting in March."
                ]
            }
        ],
        "subtext": "new job / brand new / completely new",
        "comparative": "più nuovo",
        "superlative": "il più nuovo"
    },
    {
        "word": "differente",
        "feminine": "differente",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "↔️",
        "form": "adjective",
        "plural": "differenti",
        "femininePlural": "differenti",
        "definitions": [
            {
                "text": "Not the same as another.",
                "examples": [
                    "This job is very different from my last one."
                ]
            }
        ],
        "subtext": "completely different / very different / different from",
        "comparative": "più differente",
        "superlative": "il più differente"
    },
    {
        "word": "stesso",
        "feminine": "stessa",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "identical",
        "form": "adjective",
        "plural": "stessi",
        "femininePlural": "stesse",
        "definitions": [
            {
                "text": "Not different; identical.",
                "examples": [
                    "They earn the same salary."
                ]
            }
        ],
        "subtext": "the same as / exactly the same / same time",
        "comparative": "più stesso",
        "superlative": "il più stesso"
    },
    {
        "word": "veloce",
        "feminine": "veloce",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "⚡",
        "form": "adjective",
        "plural": "veloci",
        "femininePlural": "veloci",
        "definitions": [
            {
                "text": "Moving or happening quickly.",
                "examples": [
                    "The train to work is fast and reliable."
                ]
            }
        ],
        "subtext": "fast food / fast train / very fast",
        "comparative": "più veloce",
        "superlative": "il più veloce"
    },
    {
        "word": "lento",
        "feminine": "lenta",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐢",
        "form": "adjective",
        "plural": "lenti",
        "femininePlural": "lente",
        "definitions": [
            {
                "text": "Not fast; taking a long time.",
                "examples": [
                    "The new system is very slow."
                ]
            }
        ],
        "subtext": "slow progress / slow internet / very slow",
        "comparative": "più lento",
        "superlative": "il più lento"
    },
    {
        "word": "silenzioso",
        "feminine": "silenziosa",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤫",
        "form": "adjective",
        "plural": "silenziosi",
        "femininePlural": "silenziose",
        "definitions": [
            {
                "text": "Making little or no noise; peaceful.",
                "examples": [
                    "The office is quiet at lunchtime."
                ]
            }
        ],
        "subtext": "quiet area / keep quiet / nice and quiet",
        "comparative": "più silenzioso",
        "superlative": "il più silenzioso"
    },
    {
        "word": "rumoroso",
        "feminine": "rumorosa",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🔊",
        "form": "adjective",
        "plural": "rumorosi",
        "femininePlural": "rumorose",
        "definitions": [
            {
                "text": "Making a lot of noise.",
                "examples": [
                    "The open-plan office is too loud."
                ]
            }
        ],
        "subtext": "loud noise / too loud / a loud voice",
        "comparative": "più rumoroso",
        "superlative": "il più rumoroso"
    },
    {
        "word": "sicuro",
        "feminine": "sicura",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🛡️",
        "form": "adjective",
        "plural": "sicuri",
        "femininePlural": "sicure",
        "definitions": [
            {
                "text": "Not dangerous; protected from harm.",
                "examples": [
                    "This neighbourhood is very safe."
                ]
            }
        ],
        "subtext": "safe area / safe to do / feel safe",
        "comparative": "più sicuro",
        "superlative": "il più sicuro"
    },
    {
        "word": "pericoloso",
        "feminine": "pericolosa",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "⚠️",
        "form": "adjective",
        "plural": "pericolosi",
        "femininePlural": "pericolose",
        "definitions": [
            {
                "text": "Likely to cause harm.",
                "examples": [
                    "The commute on that road is dangerous."
                ]
            }
        ],
        "subtext": "dangerous situation / very dangerous / potentially dangerous",
        "comparative": "più pericoloso",
        "superlative": "il più pericoloso"
    },
    {
        "word": "infelice",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "infelice",
        "plural": "infelici",
        "femininePlural": "infelici",
        "definitions": [
            {
                "text": "Non sentirsi soddisfatto o felice.",
                "examples": [
                    "He is unhappy with his current salary."
                ]
            }
        ],
        "subtext": "infelice per qualcosa / profondamente infelice",
        "comparative": "più infelice",
        "superlative": "il più infelice"
    },
    {
        "word": "nervoso",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "nervosa",
        "plural": "nervosi",
        "femininePlural": "nervose",
        "definitions": [
            {
                "text": "Sentirsi ansioso o preoccupato.",
                "examples": [
                    "He was nervous before the job interview."
                ]
            }
        ],
        "subtext": "nervoso prima di un colloquio / molto nervoso",
        "comparative": "più nervoso",
        "superlative": "il più nervoso"
    },
    {
        "word": "stressato",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "stressata",
        "plural": "stressati",
        "femininePlural": "stressate",
        "definitions": [
            {
                "text": "Feeling worried and tense from pressure.",
                "examples": [
                    "She feels stressed before every deadline."
                ]
            }
        ],
        "subtext": "feel stressed / very stressed / stressed out",
        "comparative": "più stressato",
        "superlative": "il più stressato"
    },
    {
        "word": "sicuro di sé",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "sicura di sé",
        "plural": "sicuri di sé",
        "femininePlural": "sicure di sé",
        "definitions": [
            {
                "text": "Feeling sure of your own abilities.",
                "examples": [
                    "She is very confident in client presentations."
                ]
            }
        ],
        "subtext": "feel confident / self-confident / very confident",
        "comparative": "più sicuro di sé",
        "superlative": "il più sicuro di sé"
    },
    {
        "word": "orgoglioso",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "orgogliosa",
        "plural": "orgogliosi",
        "femininePlural": "orgogliose",
        "definitions": [
            {
                "text": "Feeling pleased about an achievement.",
                "examples": [
                    "He was proud to get his first promotion."
                ]
            }
        ],
        "subtext": "feel proud / very proud / proud of",
        "comparative": "più orgoglioso",
        "superlative": "il più orgoglioso"
    },
    {
        "word": "spaventato",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "spaventata",
        "plural": "spaventati",
        "femininePlural": "spaventate",
        "definitions": [
            {
                "text": "Feeling fear about something.",
                "examples": [
                    "She was scared about giving the presentation."
                ]
            }
        ],
        "subtext": "feel scared / scared of / very scared",
        "comparative": "più spaventato",
        "superlative": "il più spaventato"
    },
    {
        "word": "sorpreso",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "feminine": "sorpresa",
        "plural": "sorpresi",
        "femininePlural": "sorprese",
        "definitions": [
            {
                "text": "Feeling shock at something unexpected.",
                "examples": [
                    "He was surprised to get a pay rise."
                ]
            }
        ],
        "subtext": "feel surprised / very surprised / pleasantly surprised",
        "comparative": "più sorpreso",
        "superlative": "il più sorpreso"
    },
    {
        "word": "deluso",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "delusa",
        "plural": "delusi",
        "femininePlural": "deluse",
        "definitions": [
            {
                "text": "Feeling sad because something was not as good as expected.",
                "examples": [
                    "She was disappointed not to get the job."
                ]
            }
        ],
        "subtext": "feel disappointed / deeply disappointed / disappointed with",
        "comparative": "più deluso",
        "superlative": "il più deluso"
    },
    {
        "word": "bello",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "bella",
        "plural": "belli",
        "femininePlural": "belle",
        "definitions": [
            {
                "text": "Attractive and pleasing to look at.",
                "examples": [
                    "She has a beautiful, bright office with city views."
                ]
            }
        ],
        "subtext": "beautiful view / beautiful city / absolutely beautiful",
        "comparative": "più bello",
        "superlative": "il più bello"
    },
    {
        "word": "carino",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "carina",
        "plural": "carini",
        "femininePlural": "carine",
        "definitions": [
            {
                "text": "Pleasant to look at; quite attractive.",
                "examples": [
                    "The new meeting room is very pretty."
                ]
            }
        ],
        "subtext": "pretty good / a pretty place / quite pretty",
        "comparative": "più carino",
        "superlative": "il più carino"
    },
    {
        "word": "forte",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "forte",
        "plural": "forti",
        "femininePlural": "forti",
        "definitions": [
            {
                "text": "Having great physical or mental power.",
                "examples": [
                    "She is a strong leader and very respected."
                ]
            }
        ],
        "subtext": "strong coffee / strong opinion / very strong",
        "comparative": "più forte",
        "superlative": "il più forte"
    },
    {
        "word": "debole",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "debole",
        "plural": "deboli",
        "femininePlural": "deboli",
        "definitions": [
            {
                "text": "Lacking strength or power.",
                "examples": [
                    "The signal is weak on the top floor."
                ]
            }
        ],
        "subtext": "weak connection / a weak argument / very weak",
        "comparative": "più debole",
        "superlative": "il più debole"
    },
    {
        "word": "in forma",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "feminine": "in forma",
        "plural": "in forma",
        "femininePlural": "in forma",
        "definitions": [
            {
                "text": "In good physical condition through exercise.",
                "examples": [
                    "She keeps fit by cycling to work every day."
                ]
            }
        ],
        "subtext": "physically fit / stay fit / keep fit",
        "comparative": "più in forma",
        "superlative": "il più in forma"
    },
    {
        "word": "eccellente",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "eccellente",
        "plural": "eccellenti",
        "femininePlural": "eccellenti",
        "definitions": [
            {
                "text": "Extremely good; of a very high standard.",
                "examples": [
                    "She received an excellent review."
                ]
            }
        ],
        "subtext": "excellent work / excellent results / absolutely excellent",
        "comparative": "più eccellente",
        "superlative": "il più eccellente"
    },
    {
        "word": "perfetto",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "perfetta",
        "plural": "perfetti",
        "femininePlural": "perfette",
        "definitions": [
            {
                "text": "Without any faults; completely correct.",
                "examples": [
                    "The timing of the launch was perfect."
                ]
            }
        ],
        "subtext": "a perfect opportunity / perfect timing / absolutely perfect",
        "comparative": "più perfetto",
        "superlative": "il più perfetto"
    },
    {
        "word": "inutile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "inutile",
        "plural": "inutili",
        "femininePlural": "inutili",
        "definitions": [
            {
                "text": "Without any useful value; not helpful.",
                "examples": [
                    "This software is useless for our needs."
                ]
            }
        ],
        "subtext": "completely useless / prove useless / a useless idea",
        "comparative": "più inutile",
        "superlative": "il più inutile"
    },
    {
        "word": "corretto",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "corretta",
        "plural": "corretti",
        "femininePlural": "corrette",
        "definitions": [
            {
                "text": "True or right; without errors.",
                "examples": [
                    "Please check the figures are correct."
                ]
            }
        ],
        "subtext": "correct answer / the correct way / completely correct",
        "comparative": "più corretto",
        "superlative": "il più corretto"
    },
    {
        "word": "interessante",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "interessante",
        "plural": "interessanti",
        "femininePlural": "interessanti",
        "definitions": [
            {
                "text": "Attracting attention; worth knowing about.",
                "examples": [
                    "The new proposal is very interesting."
                ]
            }
        ],
        "subtext": "find interesting / very interesting / an interesting idea",
        "comparative": "più interessante",
        "superlative": "il più interessante"
    },
    {
        "word": "noioso",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "noiosa",
        "plural": "noiosi",
        "femininePlural": "noiose",
        "definitions": [
            {
                "text": "Not interesting; dull.",
                "examples": [
                    "The training session was very boring."
                ]
            }
        ],
        "subtext": "very boring / a boring meeting / find boring",
        "comparative": "più noioso",
        "superlative": "il più noioso"
    },
    {
        "word": "necessario",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "necessaria",
        "plural": "necessari",
        "femininePlural": "necessarie",
        "definitions": [
            {
                "text": "Needed; required in order to do something.",
                "examples": [
                    "A good internet connection is necessary for remote work."
                ]
            }
        ],
        "subtext": "absolutely necessary / if necessary / necessary to do",
        "comparative": "più necessario",
        "superlative": "il più necessario"
    },
    {
        "word": "possibile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "possibile",
        "plural": "possibili",
        "femininePlural": "possibili",
        "definitions": [
            {
                "text": "Able to happen or be achieved.",
                "examples": [
                    "Is it possible to finish by Friday?"
                ]
            }
        ],
        "subtext": "as soon as possible / it is possible / make possible",
        "comparative": "più possibile",
        "superlative": "il più possibile"
    },
    {
        "word": "impossibile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "impossibile",
        "plural": "impossibili",
        "femininePlural": "impossibili",
        "definitions": [
            {
                "text": "Not able to happen or be done.",
                "examples": [
                    "It is impossible to finish in one day."
                ]
            }
        ],
        "subtext": "virtually impossible / make impossible / nearly impossible",
        "comparative": "più impossibile",
        "superlative": "il più impossibile"
    },
    {
        "word": "speciale",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "speciale",
        "plural": "speciali",
        "femininePlural": "speciali",
        "definitions": [
            {
                "text": "Different from what is usual; particularly important.",
                "examples": [
                    "She has a special talent for problem-solving."
                ]
            }
        ],
        "subtext": "a special offer / special occasion / very special",
        "comparative": "più speciale",
        "superlative": "il più speciale"
    },
    {
        "word": "popolare",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "popolare",
        "plural": "popolari",
        "femininePlural": "popolari",
        "definitions": [
            {
                "text": "Liked by many people.",
                "examples": [
                    "The new café near the office is very popular."
                ]
            }
        ],
        "subtext": "very popular / popular choice / most popular",
        "comparative": "più popolare",
        "superlative": "il più popolare"
    },
    {
        "word": "simile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "simile",
        "plural": "simili",
        "femininePlural": "simili",
        "definitions": [
            {
                "text": "Almost the same; having many shared features.",
                "examples": [
                    "Our approaches are very similar."
                ]
            }
        ],
        "subtext": "very similar / similar to / similar results",
        "comparative": "più simile",
        "superlative": "il più simile"
    },
    {
        "word": "amichevole",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "amichevole",
        "plural": "amichevoli",
        "femininePlural": "amichevoli",
        "definitions": [
            {
                "text": "Kind and pleasant; easy to talk to.",
                "examples": [
                    "The new manager is very friendly and approachable."
                ]
            }
        ],
        "subtext": "very friendly / a friendly face / friendly atmosphere",
        "comparative": "più amichevole",
        "superlative": "il più amichevole"
    },
    {
        "word": "gentile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "gentile",
        "plural": "gentili",
        "femininePlural": "gentili",
        "definitions": [
            {
                "text": "Caring and generous to others.",
                "examples": [
                    "She is kind to everyone in the office."
                ]
            }
        ],
        "subtext": "very kind / kind of you / a kind person",
        "comparative": "più gentile",
        "superlative": "il più gentile"
    },
    {
        "word": "divertente",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "divertente",
        "plural": "divertenti",
        "femininePlural": "divertenti",
        "definitions": [
            {
                "text": "Making people laugh; humorous.",
                "examples": [
                    "He has a funny way of explaining complex ideas."
                ]
            }
        ],
        "subtext": "very funny / funny story / find funny",
        "comparative": "più divertente",
        "superlative": "il più divertente"
    },
    {
        "word": "intelligente",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "intelligente",
        "plural": "intelligenti",
        "femininePlural": "intelligenti",
        "definitions": [
            {
                "text": "Intelligent; quick to understand.",
                "examples": [
                    "She is a clever negotiator."
                ]
            }
        ],
        "subtext": "very clever / a clever idea / clever enough",
        "comparative": "più intelligente",
        "superlative": "il più intelligente"
    },
    {
        "word": "educato",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "educata",
        "plural": "educati",
        "femininePlural": "educate",
        "definitions": [
            {
                "text": "Behaving in a respectful and courteous way.",
                "examples": [
                    "He is always polite with clients."
                ]
            }
        ],
        "subtext": "very polite / polite request / polite enough",
        "comparative": "più educato",
        "superlative": "il più educato"
    },
    {
        "word": "maleducato",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "maleducata",
        "plural": "maleducati",
        "femininePlural": "maleducate",
        "definitions": [
            {
                "text": "Not polite; showing a lack of respect.",
                "examples": [
                    "That email was quite rude and unprofessional."
                ]
            }
        ],
        "subtext": "very rude / incredibly rude / deliberately rude",
        "comparative": "più maleducato",
        "superlative": "il più maleducato"
    },
    {
        "word": "pigro",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "pigra",
        "plural": "pigri",
        "femininePlural": "pigre",
        "definitions": [
            {
                "text": "Not willing to work or use effort.",
                "examples": [
                    "He has a reputation for being lazy with follow-ups."
                ]
            }
        ],
        "subtext": "very lazy / a lazy approach / too lazy",
        "comparative": "più pigro",
        "superlative": "il più pigro"
    },
    {
        "word": "onesto",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "onesta",
        "plural": "onesti",
        "femininePlural": "oneste",
        "definitions": [
            {
                "text": "Telling the truth; not deceiving.",
                "examples": [
                    "She is known for being completely honest with clients."
                ]
            }
        ],
        "subtext": "very honest / brutally honest / completely honest",
        "comparative": "più onesto",
        "superlative": "il più onesto"
    },
    {
        "word": "rumoroso",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "rumorosa",
        "plural": "rumorosi",
        "femininePlural": "rumorose",
        "definitions": [
            {
                "text": "Making a lot of sound; loud.",
                "examples": [
                    "The open plan office is very noisy."
                ]
            }
        ],
        "subtext": "very noisy / noisy environment / too noisy",
        "comparative": "più rumoroso",
        "superlative": "il più rumoroso"
    }
];
    const lang = "it";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();