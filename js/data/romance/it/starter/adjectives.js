(function() {
    const data = [
    {
        "word": "alto",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "basso",
        "oppositeEmoji": "📏",
        "feminine": "alta",
        "translation": "tall",
        "emoji": "🦒",
        "plural": "alti",
        "femininePlural": "alte",
        "definitions": [
            {
                "text": "A person or thing that is big from bottom to top.",
                "examples": [
                    "He is very tall.",
                    "That building is tall."
                ]
            },
            {
                "text": "Of greater than average height.",
                "examples": [
                    "She is a tall woman who works as an engineer."
                ]
            }
        ],
        "subtext": "a tall building / a tall person / tall enough"
    },
    {
        "word": "basso",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "alto",
        "oppositeEmoji": "🗼",
        "feminine": "bassa",
        "translation": "low",
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
        "subtext": "low price / low salary / low quality"
    },
    {
        "word": "giovane",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "vecchio",
        "oppositeEmoji": "👴"
    },
    {
        "word": "vecchio",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "giovane",
        "oppositeEmoji": "👶",
        "feminine": "vecchia",
        "translation": "old",
        "emoji": "👴",
        "plural": "vecchi",
        "femininePlural": "vecchie",
        "definitions": [
            {
                "text": "Having lived or existed for a long time.",
                "examples": [
                    "This is an old book."
                ]
            },
            {
                "text": "Having existed for a long time.",
                "examples": [
                    "He works with old clients from ten years ago."
                ]
            }
        ],
        "subtext": "old friend / old habits / very old"
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
        "translation": "good",
        "plural": "buoni",
        "femininePlural": "buone",
        "definitions": [
            {
                "text": "Of high quality or ability; pleasant.",
                "examples": [
                    "This is a good job."
                ]
            },
            {
                "text": "Of high quality or pleasant.",
                "examples": [
                    "She has a good job with flexible hours."
                ]
            }
        ],
        "subtext": "great, nice, pleasant / good idea / good luck / good value"
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
        "translation": "bad",
        "plural": "cattivi",
        "femininePlural": "cattive",
        "definitions": [
            {
                "text": "Not good; unpleasant or of poor quality.",
                "examples": [
                    "The weather is bad today."
                ]
            },
            {
                "text": "Of low quality; unpleasant or harmful.",
                "examples": [
                    "He had a bad day at work."
                ]
            }
        ],
        "subtext": "terrible, awful, unpleasant / bad news / bad luck / bad decision"
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
        "translation": "easy",
        "plural": "facili",
        "femininePlural": "facili",
        "definitions": [
            {
                "text": "Not difficult.",
                "examples": [
                    "The test is easy.",
                    "The application form is easy to complete."
                ]
            }
        ],
        "subtext": "easy to do / nice and easy / not easy"
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
        "translation": "difficult",
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
        "subtext": "difficult to do / very difficult / find it difficult"
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
        "translation": "big",
        "plural": "grandi",
        "femininePlural": "grandi",
        "definitions": [
            {
                "text": "Large in size.",
                "examples": [
                    "It is a big office."
                ]
            },
            {
                "text": "Large in size or amount.",
                "examples": [
                    "They have a big house near the park."
                ]
            }
        ],
        "subtext": "large, huge / a big house / a big problem / big enough"
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
        "translation": "small",
        "plural": "piccoli",
        "femininePlural": "piccole",
        "definitions": [
            {
                "text": "Little in size.",
                "examples": [
                    "She has a small flat."
                ]
            },
            {
                "text": "Little in size or amount.",
                "examples": [
                    "She rents a small flat in the city centre."
                ]
            }
        ],
        "subtext": "little, tiny / a small flat / a small salary / too small"
    },
    {
        "word": "felice",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "form": "adjective",
        "opposite": "triste",
        "feminine": "felice",
        "translation": "happy",
        "plural": "felici",
        "femininePlural": "felici",
        "definitions": [
            {
                "text": "Feeling pleasure or joy.",
                "examples": [
                    "I am happy today."
                ]
            },
            {
                "text": "Feeling pleasure or satisfaction.",
                "examples": [
                    "She is happy in her new role."
                ]
            }
        ],
        "subtext": "glad, cheerful, feel happy / feel happy / happy with something / a happy day"
    },
    {
        "word": "stanco",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😫",
        "form": "adjective",
        "opposite": "riposato",
        "feminine": "stanca",
        "translation": "tired",
        "plural": "stanchi",
        "femininePlural": "stanche",
        "definitions": [
            {
                "text": "Needing rest or sleep.",
                "examples": [
                    "I am very tired after work.",
                    "I feel tired after a long week."
                ]
            }
        ],
        "subtext": "sleepy, exhausted, feel tired / feel tired / tired of something / very tired"
    },
    {
        "word": "caro",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "economico",
        "oppositeEmoji": "🏷️",
        "definitions": [
            {
                "text": "Costing a lot of money.",
                "examples": []
            }
        ],
        "subtext": "molto caro / troppo caro / prezzo caro"
    },
    {
        "word": "economico",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "caro",
        "oppositeEmoji": "💎",
        "feminine": "economica",
        "translation": "cheap",
        "plural": "economici",
        "femininePlural": "economiche",
        "definitions": [
            {
                "text": "Not expensive; low in price.",
                "examples": [
                    "This coffee is cheap."
                ]
            },
            {
                "text": "Low in price.",
                "examples": [
                    "The lunch near the office is very cheap."
                ]
            }
        ],
        "subtext": "low price, inexpensive / cheap flight / very cheap / cheap and cheerful"
    },
    {
        "word": "a tempo pieno",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "form": "adjective",
        "opposite": "a tempo parziale",
        "definitions": [
            {
                "text": "Lavorare il numero completo di ore di una settimana lavorativa.",
                "examples": [
                    "Ha un lavoro a tempo pieno in banca."
                ]
            }
        ]
    },
    {
        "word": "a tempo parziale",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "form": "adjective",
        "opposite": "a tempo pieno",
        "definitions": [
            {
                "text": "Lavorare meno ore di una settimana lavorativa standard.",
                "examples": [
                    "Lavora a tempo parziale il sabato."
                ]
            }
        ]
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
        "translation": "clean",
        "plural": "puliti",
        "femininePlural": "pulite"
    },
    {
        "word": "sano",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍎",
        "form": "adjective",
        "opposite": "malsano",
        "definitions": [
            {
                "text": "Che fa bene al corpo; non malato.",
                "examples": [
                    "Le verdure sono cibo sano."
                ]
            }
        ]
    },
    {
        "word": "malato",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤒",
        "form": "adjective",
        "opposite": "sano",
        "definitions": [
            {
                "text": "Non bene; sofferente di una malattia.",
                "examples": [
                    "Mi sento malato oggi."
                ]
            }
        ]
    },
    {
        "word": "online",
        "level": "starter",
        "theme": "using_a_smartphone_A1",
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
        "subtext": "online shopping / online course / stay online"
    },
    {
        "word": "solo",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🧍",
        "form": "adjective",
        "opposite": "insieme",
        "oppositeEmoji": "👫",
        "definitions": [
            {
                "text": "Senza altre persone; da solo.",
                "examples": [
                    "Vive da sola."
                ]
            }
        ]
    },
    {
        "word": "rilassato",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "stressato",
        "oppositeEmoji": "😫",
        "subtext": "calmo, tranquillo",
        "definitions": [
            {
                "text": "Calmo; non preoccupato o stressato.",
                "examples": [
                    "Mi sento rilassato nel fine settimana."
                ]
            }
        ]
    },
    {
        "word": "preoccupato",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😟",
        "form": "adjective",
        "opposite": "calmo",
        "oppositeEmoji": "😌",
        "subtext": "ansioso",
        "definitions": [
            {
                "text": "Sentirsi ansiosi per qualcosa che potrebbe accadere.",
                "examples": [
                    "È preoccupata per il suo lavoro."
                ]
            }
        ]
    },
    {
        "word": "occupato",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "opposite": "libero",
        "definitions": [
            {
                "text": "Avere molte cose da fare.",
                "examples": [
                    "Sono molto occupato questa settimana."
                ]
            }
        ],
        "feminine": "occupata",
        "translation": "busy",
        "plural": "occupati",
        "femininePlural": "occupate",
        "subtext": "very busy, busy day / busy schedule / very busy / too busy"
    },
    {
        "word": "utile",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "inutile",
        "definitions": [
            {
                "text": "D'aiuto; che ha uno scopo pratico.",
                "examples": [
                    "Un'auto è molto utile in campagna."
                ]
            }
        ]
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
        "translation": "important",
        "plural": "importanti",
        "femininePlural": "importanti"
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
        "translation": "red",
        "plural": "rossi",
        "femininePlural": "rosse"
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
        "translation": "blue",
        "plural": "blu",
        "femininePlural": "blu"
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
        "translation": "green",
        "plural": "verdi",
        "femininePlural": "verdi"
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
        "translation": "white",
        "plural": "bianchi",
        "femininePlural": "bianche"
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
        "translation": "black",
        "plural": "neri",
        "femininePlural": "nere"
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
        "translation": "yellow",
        "plural": "gialli",
        "femininePlural": "gialle"
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
        "translation": "free",
        "plural": "liberi",
        "femininePlural": "libere"
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
        "translation": "open",
        "plural": "aperti",
        "femininePlural": "aperte"
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
        "translation": "closed",
        "plural": "chiusi",
        "femininePlural": "chiuse"
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
        "translation": "cold",
        "plural": "freddi",
        "femininePlural": "fredde"
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
        "translation": "hot",
        "plural": "caldi",
        "femininePlural": "calde"
    },
    {
        "word": "grande",
        "feminine": "grande",
        "translation": "large",
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
        "subtext": "a large city / a large company / a large amount"
    },
    {
        "word": "piccolo",
        "feminine": "piccola",
        "translation": "little",
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
        "subtext": "a little bit / a little money / too little"
    },
    {
        "word": "corto",
        "feminine": "corta",
        "translation": "short",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "plural": "corti",
        "femininePlural": "corte",
        "definitions": [
            {
                "text": "A person or thing that is not tall.",
                "examples": [
                    "She is short.",
                    "The pencil is short."
                ]
            },
            {
                "text": "Of less than average height or length.",
                "examples": [
                    "He has a short commute — ten minutes by bike."
                ]
            }
        ],
        "subtext": "a short journey / short hair / too short"
    },
    {
        "word": "lungo",
        "feminine": "lunga",
        "translation": "long",
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
        "subtext": "a long journey / a long day / a long time"
    },
    {
        "word": "alto",
        "feminine": "alta",
        "translation": "high",
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
        "subtext": "high price / high rent / high quality"
    },
    {
        "word": "pieno",
        "feminine": "piena",
        "translation": "full",
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
        "subtext": "full time / a full day / full of people"
    },
    {
        "word": "vuoto",
        "feminine": "vuota",
        "translation": "empty",
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
        "subtext": "an empty flat / an empty room / nearly empty"
    },
    {
        "word": "tiepido",
        "feminine": "tiepida",
        "translation": "warm",
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
        "subtext": "warm weather / a warm welcome / keep warm"
    },
    {
        "word": "fresco",
        "feminine": "fresca",
        "translation": "cool",
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
        "subtext": "cool weather / a cool drink / stay cool"
    },
    {
        "word": "bagnato",
        "feminine": "bagnata",
        "translation": "wet",
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
        "subtext": "wet weather / wet clothes / get wet"
    },
    {
        "word": "asciutto",
        "feminine": "asciutta",
        "translation": "dry",
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
        "subtext": "dry weather / dry skin / keep dry"
    },
    {
        "word": "sporco",
        "feminine": "sporca",
        "translation": "dirty",
        "level": "starter",
        "theme": "household_tasks_A1",
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
        "subtext": "dirty hands / dirty clothes / get dirty"
    },
    {
        "word": "duro",
        "feminine": "dura",
        "translation": "hard",
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
        "subtext": "hard work / a hard decision / too hard"
    },
    {
        "word": "morbido",
        "feminine": "morbida",
        "translation": "soft",
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
        "subtext": "soft light / soft music / soft skills"
    },
    {
        "word": "pesante",
        "feminine": "pesante",
        "translation": "heavy",
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
        "subtext": "heavy traffic / heavy rain / too heavy"
    },
    {
        "word": "leggero",
        "feminine": "leggera",
        "translation": "light",
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
        "subtext": "light rain / light traffic / a light meal"
    },
    {
        "word": "marrone",
        "feminine": "marrone",
        "translation": "brown",
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
        "subtext": "dark brown / light brown / brown bread"
    },
    {
        "word": "grigio",
        "feminine": "grigia",
        "translation": "grey",
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
        "subtext": "grey area / grey sky / pale grey"
    },
    {
        "word": "rosa",
        "feminine": "rosa",
        "translation": "pink",
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
        "subtext": "light pink / bright pink / hot pink"
    },
    {
        "word": "arancione",
        "feminine": "arancioni",
        "translation": "orange",
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
        "subtext": "bright orange / dark orange / orange light"
    },
    {
        "word": "grande",
        "feminine": "grande",
        "translation": "great",
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
        "subtext": "a great idea / a great opportunity / great value"
    },
    {
        "word": "bello",
        "feminine": "bella",
        "translation": "nice",
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
        "subtext": "a nice day / a nice place / a nice person"
    },
    {
        "word": "meraviglioso",
        "feminine": "meravigliosa",
        "translation": "wonderful",
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
        "subtext": "a wonderful opportunity / a wonderful time"
    },
    {
        "word": "terribile",
        "feminine": "terribile",
        "translation": "terrible",
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
        "subtext": "terrible weather / a terrible mistake / terrible news"
    },
    {
        "word": "orribile",
        "feminine": "orribile",
        "translation": "awful",
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
        "subtext": "awful weather / awful news / simply awful"
    },
    {
        "word": "incredibile",
        "feminine": "incredibile",
        "translation": "amazing",
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
        "subtext": "an amazing result / an amazing offer / truly amazing"
    },
    {
        "word": "fantastico",
        "feminine": "fantastica",
        "translation": "fantastic",
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
        "subtext": "fantastic news / a fantastic opportunity / truly fantastic"
    },
    {
        "word": "triste",
        "feminine": "triste",
        "translation": "sad",
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
        "subtext": "feel sad / a sad situation / deeply sad"
    },
    {
        "word": "affamato",
        "feminine": "affamata",
        "translation": "hungry",
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
        "subtext": "feel hungry / very hungry / go hungry"
    },
    {
        "word": "arrabbiato",
        "feminine": "arrabbiata",
        "translation": "angry",
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
        "subtext": "feel angry / angry with someone / very angry"
    },
    {
        "word": "annoiato",
        "feminine": "annoiata",
        "translation": "bored",
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
        "subtext": "feel bored / bored with / easily bored"
    },
    {
        "word": "emozionato",
        "feminine": "emozionata",
        "translation": "excited",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "subtext": "feel excited / excited about / very excited"
    },
    {
        "word": "spaventato",
        "feminine": "spaventata",
        "translation": "afraid",
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
        "subtext": "afraid of / feel afraid / deeply afraid"
    },
    {
        "word": "dispiaciuto",
        "feminine": "dispiaciuta",
        "translation": "sorry",
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
        "subtext": "feel sorry / sorry for / sorry about"
    },
    {
        "word": "giusto",
        "feminine": "giusta",
        "translation": "right",
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
        "subtext": "right answer / right time / absolutely right"
    },
    {
        "word": "sbagliato",
        "feminine": "sbagliata",
        "translation": "wrong",
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
        "subtext": "wrong answer / go wrong / completely wrong"
    },
    {
        "word": "nuovo",
        "feminine": "nuova",
        "translation": "new",
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
        "subtext": "new job / brand new / completely new"
    },
    {
        "word": "differente",
        "feminine": "differente",
        "translation": "different",
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
        "subtext": "completely different / very different / different from"
    },
    {
        "word": "stesso",
        "feminine": "stessa",
        "translation": "same",
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
        "subtext": "the same as / exactly the same / same time"
    },
    {
        "word": "costoso",
        "feminine": "costosa",
        "translation": "expensive",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💎",
        "form": "adjective",
        "plural": "costosi",
        "femininePlural": "costose",
        "definitions": [
            {
                "text": "Costing a lot of money.",
                "examples": [
                    "That car is expensive."
                ]
            },
            {
                "text": "High in price.",
                "examples": [
                    "The city centre is expensive for rent."
                ]
            }
        ],
        "subtext": "costly, high price / very expensive / expensive taste / too expensive"
    },
    {
        "word": "veloce",
        "feminine": "veloce",
        "translation": "fast",
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
        "subtext": "fast food / fast train / very fast"
    },
    {
        "word": "lento",
        "feminine": "lenta",
        "translation": "slow",
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
        "subtext": "slow progress / slow internet / very slow"
    },
    {
        "word": "silenzioso",
        "feminine": "silenziosa",
        "translation": "quiet",
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
        "subtext": "quiet area / keep quiet / nice and quiet"
    },
    {
        "word": "rumoroso",
        "feminine": "rumorosa",
        "translation": "loud",
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
        "subtext": "loud noise / too loud / a loud voice"
    },
    {
        "word": "sicuro",
        "feminine": "sicura",
        "translation": "safe",
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
        "subtext": "safe area / safe to do / feel safe"
    },
    {
        "word": "pericoloso",
        "feminine": "pericolosa",
        "translation": "dangerous",
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
        "subtext": "dangerous situation / very dangerous / potentially dangerous"
    },
    {
        "word": "infelice",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "unhappy",
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
        "subtext": "infelice per qualcosa / profondamente infelice"
    },
    {
        "word": "nervoso",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "nervous",
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
        "subtext": "nervoso prima di un colloquio / molto nervoso"
    },
    {
        "word": "stressato",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "stressed",
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
        "subtext": "feel stressed / very stressed / stressed out"
    },
    {
        "word": "sicuro di sé",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "confident",
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
        "subtext": "feel confident / self-confident / very confident"
    },
    {
        "word": "orgoglioso",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "proud",
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
        "subtext": "feel proud / very proud / proud of"
    },
    {
        "word": "spaventato",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "scared",
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
        "subtext": "feel scared / scared of / very scared"
    },
    {
        "word": "sorpreso",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "translation": "surprised",
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
        "subtext": "feel surprised / very surprised / pleasantly surprised"
    },
    {
        "word": "deluso",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "disappointed",
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
        "subtext": "feel disappointed / deeply disappointed / disappointed with"
    },
    {
        "word": "bello",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "beautiful",
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
        "subtext": "beautiful view / beautiful city / absolutely beautiful"
    },
    {
        "word": "carino",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "pretty",
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
        "subtext": "pretty good / a pretty place / quite pretty"
    },
    {
        "word": "forte",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "strong",
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
        "subtext": "strong coffee / strong opinion / very strong"
    },
    {
        "word": "debole",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "weak",
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
        "subtext": "weak connection / a weak argument / very weak"
    },
    {
        "word": "in forma",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "translation": "fit",
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
        "subtext": "physically fit / stay fit / keep fit"
    },
    {
        "word": "eccellente",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "excellent",
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
        "subtext": "excellent work / excellent results / absolutely excellent"
    },
    {
        "word": "perfetto",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "perfect",
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
        "subtext": "a perfect opportunity / perfect timing / absolutely perfect"
    },
    {
        "word": "inutile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "useless",
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
        "subtext": "completely useless / prove useless / a useless idea"
    },
    {
        "word": "corretto",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "correct",
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
        "subtext": "correct answer / the correct way / completely correct"
    },
    {
        "word": "interessante",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "interesting",
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
        "subtext": "find interesting / very interesting / an interesting idea"
    },
    {
        "word": "noioso",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "boring",
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
        "subtext": "very boring / a boring meeting / find boring"
    },
    {
        "word": "necessario",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "necessary",
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
        "subtext": "absolutely necessary / if necessary / necessary to do"
    },
    {
        "word": "possibile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "possible",
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
        "subtext": "as soon as possible / it is possible / make possible"
    },
    {
        "word": "impossibile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "impossible",
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
        "subtext": "virtually impossible / make impossible / nearly impossible"
    },
    {
        "word": "speciale",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "special",
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
        "subtext": "a special offer / special occasion / very special"
    },
    {
        "word": "popolare",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "popular",
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
        "subtext": "very popular / popular choice / most popular"
    },
    {
        "word": "simile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "similar",
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
        "subtext": "very similar / similar to / similar results"
    },
    {
        "word": "amichevole",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "friendly",
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
        "subtext": "very friendly / a friendly face / friendly atmosphere"
    },
    {
        "word": "gentile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "kind",
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
        "subtext": "very kind / kind of you / a kind person"
    },
    {
        "word": "divertente",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "funny",
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
        "subtext": "very funny / funny story / find funny"
    },
    {
        "word": "intelligente",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "clever",
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
        "subtext": "very clever / a clever idea / clever enough"
    },
    {
        "word": "educato",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "polite",
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
        "subtext": "very polite / polite request / polite enough"
    },
    {
        "word": "maleducato",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "rude",
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
        "subtext": "very rude / incredibly rude / deliberately rude"
    },
    {
        "word": "pigro",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "lazy",
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
        "subtext": "very lazy / a lazy approach / too lazy"
    },
    {
        "word": "onesto",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "honest",
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
        "subtext": "very honest / brutally honest / completely honest"
    },
    {
        "word": "rumoroso",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "noisy",
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
        "subtext": "very noisy / noisy environment / too noisy"
    },
    {
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "translation": "young",
        "feminine": "giovane",
        "plural": "giovani",
        "femininePlural": "giovani",
        "definitions": [
            {
                "text": "Having lived or existed for only a short time.",
                "examples": [
                    "He is a young man."
                ]
            }
        ]
    },
    {
        "word": "sano",
        "level": "starter",
        "theme": "basic_foods_A1",
        "form": "adjective",
        "translation": "healthy",
        "feminine": "sana",
        "plural": "sani",
        "femininePlural": "sane",
        "definitions": [
            {
                "text": "Good for your body; not ill.",
                "examples": [
                    "Vegetables are healthy food."
                ]
            }
        ],
        "subtext": "well, fit, healthy diet"
    },
    {
        "word": "malato",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "translation": "ill",
        "feminine": "malata",
        "plural": "malati",
        "femininePlural": "malate",
        "definitions": [
            {
                "text": "Not well; sick.",
                "examples": [
                    "I feel ill today."
                ]
            }
        ],
        "subtext": "sick, feel ill"
    },
    {
        "word": "utile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "useful",
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
        "subtext": "helpful, practical"
    },
    {
        "word": "rilassato",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "translation": "relaxed",
        "feminine": "rilassata",
        "plural": "rilassati",
        "femininePlural": "rilassate",
        "definitions": [
            {
                "text": "Calm; not worried or stressed.",
                "examples": [
                    "I feel relaxed at the weekend."
                ]
            }
        ],
        "subtext": "calm, feeling relaxed"
    },
    {
        "word": "preoccupato",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "worried",
        "feminine": "preoccupata",
        "plural": "preoccupati",
        "femininePlural": "preoccupate",
        "definitions": [
            {
                "text": "Feeling anxious about something that might happen.",
                "examples": [
                    "She is worried about her job."
                ]
            }
        ],
        "subtext": "anxious"
    }
];
    const lang = "it";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();