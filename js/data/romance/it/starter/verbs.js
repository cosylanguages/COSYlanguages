(function() {
    const data = [
    {
        "word": "disegnare",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🎨",
        "form": "verb",
        "definitions": [
            {
                "text": "Rappresentare qualcosa con linee e colori su carta.",
                "examples": [
                    "Mi piace disegnare paesaggi.",
                    "Disegna un cerchio."
                ]
            }
        ]
    },
    {
        "word": "cucinare",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🍳",
        "form": "verb"
    },
    {
        "word": "leggere",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📖",
        "subtext": "leggere un libro, leggere le notizie",
        "opposite": "scrivere",
        "oppositeEmoji": "✍️",
        "form": "verb"
    },
    {
        "word": "cantare",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🎤",
        "form": "verb"
    },
    {
        "word": "soleggiato",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "☀️",
        "form": "verb"
    },
    {
        "word": "piovoso",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "🌧️",
        "form": "verb"
    },
    {
        "word": "mangiare",
        "level": "starter",
        "theme": "food_drink_A0",
        "emoji": "🍎",
        "subtext": "mangiare una mela, cenare",
        "opposite": "bere",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettere del cibo in bocca e deglutire.",
                "examples": [
                    "Mangio una mela al giorno.",
                    "Cosa vuoi mangiare?"
                ]
            }
        ]
    },
    {
        "word": "bere",
        "level": "starter",
        "theme": "food_drink_A0",
        "emoji": "🥛",
        "subtext": "bere acqua, bere caffè",
        "form": "verb",
        "definitions": [
            {
                "text": "Introdurre un liquido in bocca e deglutire.",
                "examples": [
                    "Bevo molta acqua.",
                    "Vuoi qualcosa da bere?"
                ]
            }
        ]
    },
    {
        "word": "parlare",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "💬",
        "subtext": "parlare inglese, parlare lentamente",
        "form": "verb",
        "definitions": [
            {
                "text": "Esprimersi con la voce.",
                "examples": [
                    "Parlo con il mio amico.",
                    "Lui parla tre lingue."
                ]
            }
        ]
    },
    {
        "word": "vedere",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "👁️",
        "subtext": "vedere un film, vedere un amico",
        "form": "verb",
        "definitions": [
            {
                "text": "Usare gli occhi per guardare qualcosa.",
                "examples": [
                    "Vedo un uccello.",
                    "Hai visto quel film?"
                ]
            }
        ]
    },
    {
        "word": "camminare",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "Muoversi a piedi.",
                "examples": [
                    "Mi piace camminare in montagna.",
                    "Camminiamo verso casa."
                ]
            }
        ]
    },
    {
        "word": "ricordare",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🧠",
        "form": "verb"
    },
    {
        "word": "comprare",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🛒",
        "opposite": "vendere",
        "oppositeEmoji": "🏷️",
        "form": "verb"
    },
    {
        "word": "aspettare",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "⏳",
        "form": "verb"
    },
    {
        "word": "morire",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "⚰️",
        "opposite": "vivere",
        "oppositeEmoji": "🏠",
        "form": "verb"
    },
    {
        "word": "inviare",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "✉️",
        "form": "verb"
    },
    {
        "word": "restare",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🏨",
        "form": "verb"
    },
    {
        "word": "cadere",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "🍂",
        "form": "verb"
    },
    {
        "word": "tagliare",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "✂️",
        "form": "verb"
    },
    {
        "word": "passare",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🏔️",
        "form": "verb"
    },
    {
        "word": "vendere",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🏷️",
        "opposite": "comprare",
        "oppositeEmoji": "🛒",
        "form": "verb"
    },
    {
        "word": "tirare",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🚜",
        "opposite": "spingere",
        "oppositeEmoji": "🛒",
        "form": "verb"
    },
    {
        "word": "spingere",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🛒",
        "opposite": "tirare",
        "oppositeEmoji": "🚜",
        "form": "verb"
    },
    {
        "word": "sperare",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🤞",
        "form": "verb"
    },
    {
        "word": "rompere",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "💔",
        "form": "verb"
    },
    {
        "word": "ricevere",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📩",
        "form": "verb"
    },
    {
        "word": "essere d'accordo",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "👍",
        "form": "verb"
    },
    {
        "word": "condividere",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🍕",
        "form": "verb"
    },
    {
        "word": "sorridere",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "😊",
        "opposite": "piangere",
        "oppositeEmoji": "😢",
        "form": "verb"
    },
    {
        "word": "piangere",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "😢",
        "opposite": "sorridere",
        "oppositeEmoji": "😊",
        "form": "verb"
    },
    {
        "word": "ballare",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "💃",
        "form": "verb"
    },
    {
        "word": "saltare",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🦘",
        "form": "verb"
    },
    {
        "word": "volare",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "✈️",
        "form": "verb"
    },
    {
        "word": "nuotare",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🏊",
        "form": "verb"
    },
    {
        "word": "lavare",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🧼",
        "form": "verb"
    },
    {
        "word": "pulire",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🧹",
        "form": "verb"
    },
    {
        "word": "viaggiare",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "✈️",
        "form": "verb"
    },
    {
        "word": "studiare",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "📖",
        "form": "verb"
    },
    {
        "word": "insegnare",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "👨‍🏫",
        "form": "verb"
    },
    {
        "word": "ascoltare",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🎧",
        "form": "verb"
    },
    {
        "word": "chiudere",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🔒",
        "opposite": "aprire",
        "oppositeEmoji": "📖",
        "form": "verb"
    },
    {
        "word": "finire",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🏁",
        "opposite": "iniziare",
        "oppositeEmoji": "▶️",
        "form": "verb"
    }
];
    const lang = "it";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
