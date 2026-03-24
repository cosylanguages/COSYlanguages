(function() {
    const data = [
    {
        "word": "alto",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "basso",
        "oppositeEmoji": "📏"
    },
    {
        "word": "basso",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "alto",
        "oppositeEmoji": "🗼"
    },
    {
        "word": "giovane",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "vecchio",
        "oppositeEmoji": "👴"
    },
    {
        "word": "vecchio",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "giovane",
        "oppositeEmoji": "👶"
    },
    {
        "word": "buono",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "cattivo",
        "oppositeEmoji": "👎"
    },
    {
        "word": "cattivo",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "buono",
        "oppositeEmoji": "👍"
    },
    {
        "word": "facile",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "difficile",
        "oppositeEmoji": "❌"
    },
    {
        "word": "difficile",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "facile",
        "oppositeEmoji": "✅"
    },
    {
        "word": "grande",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "piccolo",
        "oppositeEmoji": "🐭"
    },
    {
        "word": "piccolo",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "grande",
        "oppositeEmoji": "🐘"
    },
    {
        "word": "felice",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "emoji": "😊",
        "form": "adjective",
        "opposite": "triste"
    },
    {
        "word": "stanco",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "emoji": "😫",
        "form": "adjective",
        "opposite": "riposato"
    },
    {
        "word": "caro",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "economico",
        "oppositeEmoji": "🏷️"
    },
    {
        "word": "economico",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "caro",
        "oppositeEmoji": "💎"
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
        ]
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
        "theme": "basic_negative_emotions_A0",
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
        "theme": "basic_positive_emotions_A0",
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
        "theme": "basic_negative_emotions_A0",
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
        ]
    },
    {
        "word": "utile",
        "level": "starter",
        "theme": "size_shape_A0",
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
        ]
    },
    {
        "word": "rosso",
        "level": "starter",
        "theme": "colours_patterns_A0",
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
        ]
    },
    {
        "word": "blu",
        "level": "starter",
        "theme": "colours_patterns_A0",
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
        ]
    },
    {
        "word": "verde",
        "level": "starter",
        "theme": "colours_patterns_A0",
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
        ]
    },
    {
        "word": "bianco",
        "level": "starter",
        "theme": "colours_patterns_A0",
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
        ]
    },
    {
        "word": "nero",
        "level": "starter",
        "theme": "colours_patterns_A0",
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
        ]
    },
    {
        "word": "giallo",
        "level": "starter",
        "theme": "colours_patterns_A0",
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
        ]
    },
    {
        "word": "gratuito",
        "level": "starter",
        "theme": "everyday_shopping_A0",
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
        ]
    },
    {
        "word": "aperto",
        "level": "starter",
        "theme": "everyday_shopping_A0",
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
        ]
    },
    {
        "word": "chiuso",
        "level": "starter",
        "theme": "everyday_shopping_A0",
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
        ]
    },
    {
        "word": "freddo",
        "level": "starter",
        "theme": "weather_A0",
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
        ]
    },
    {
        "word": "caldo",
        "level": "starter",
        "theme": "weather_A0",
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
        ]
    }
];
    const lang = "it";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
