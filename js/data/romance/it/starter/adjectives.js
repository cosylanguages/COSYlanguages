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
        "femininePlural": "alte"
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
        "femininePlural": "basse"
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
        "femininePlural": "vecchie"
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
        "femininePlural": "buone"
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
        "femininePlural": "cattive"
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
        "femininePlural": "facili"
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
        "femininePlural": "difficili"
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
        "femininePlural": "grandi"
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
        "femininePlural": "piccole"
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
        "femininePlural": "felici"
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
        "femininePlural": "stanche"
    },
    {
        "word": "caro",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "economico",
        "oppositeEmoji": "🏷️"
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
        "femininePlural": "economiche"
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
        "theme": "diet_healthy_eating_A2",
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
        ]
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
        "femininePlural": "occupate"
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
        "word": "gratuito",
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
        "feminine": "gratuita",
        "translation": "free",
        "plural": "gratuiti",
        "femininePlural": "gratuite"
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
        "femininePlural": "grandi"
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
        "femininePlural": "piccole"
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
        "femininePlural": "corte"
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
        "femininePlural": "lunghe"
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
        "femininePlural": "alte"
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
        "femininePlural": "piene"
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
        "femininePlural": "vuote"
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
        "femininePlural": "tiepide"
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
        "femininePlural": "fresche"
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
        "femininePlural": "bagnate"
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
        "femininePlural": "asciutte"
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
        "femininePlural": "sporche"
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
        "femininePlural": "dure"
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
        "femininePlural": "morbide"
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
        "femininePlural": "pesanti"
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
        "femininePlural": "leggere"
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
        "femininePlural": "marroni"
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
        "femininePlural": "grigie"
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
        "femininePlural": "rosa"
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
        "femininePlural": "arancioni"
    },
    {
        "word": "grande",
        "feminine": "grande",
        "translation": "great",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🌟",
        "form": "adjective",
        "plural": "grandi",
        "femininePlural": "grandi"
    },
    {
        "word": "bello",
        "feminine": "bella",
        "translation": "nice",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "😊",
        "form": "adjective",
        "plural": "belli",
        "femininePlural": "belle"
    },
    {
        "word": "meraviglioso",
        "feminine": "meravigliosa",
        "translation": "wonderful",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "✨",
        "form": "adjective",
        "plural": "meravigliosi",
        "femininePlural": "meravigliose"
    },
    {
        "word": "terribile",
        "feminine": "terribile",
        "translation": "terrible",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "😫",
        "form": "adjective",
        "plural": "terribili",
        "femininePlural": "terribili"
    },
    {
        "word": "orribile",
        "feminine": "orribile",
        "translation": "awful",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🤮",
        "form": "adjective",
        "plural": "orribili",
        "femininePlural": "orribili"
    },
    {
        "word": "incredibile",
        "feminine": "incredibile",
        "translation": "amazing",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "😲",
        "form": "adjective",
        "plural": "incredibili",
        "femininePlural": "incredibili"
    },
    {
        "word": "fantastico",
        "feminine": "fantastica",
        "translation": "fantastic",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🤩",
        "form": "adjective",
        "plural": "fantastici",
        "femininePlural": "fantastiche"
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
        "femininePlural": "tristi"
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
        "femininePlural": "affamate"
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
        "femininePlural": "arrabbiate"
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
        "femininePlural": "annoiate"
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
        "femininePlural": "emozionate"
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
        "femininePlural": "spaventate"
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
        "femininePlural": "dispiaciute"
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
        "femininePlural": "giuste"
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
        "femininePlural": "sbagliate"
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
        "femininePlural": "nuove"
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
        "femininePlural": "differenti"
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
        "femininePlural": "stesse"
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
        "femininePlural": "costose"
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
        "femininePlural": "veloci"
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
        "femininePlural": "lente"
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
        "femininePlural": "silenziose"
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
        "femininePlural": "rumorose"
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
        "femininePlural": "sicure"
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
        "femininePlural": "pericolose"
    }
];
    const lang = "it";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();