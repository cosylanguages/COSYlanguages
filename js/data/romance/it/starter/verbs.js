(function() {
    const data = [
    {
        "word": "svegliarsi",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "svegliarsi presto, svegliarsi alle 7",
        "opposite": "dormire",
        "oppositeEmoji": "😴",
        "definitions": [
            {
                "text": "Smettere di dormire e aprire gli occhi.",
                "examples": [
                    "Mi sveglio alle sette.",
                    "A che ora ti svegli?"
                ]
            }
        ]
    },
    {
        "word": "lavorare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "lavorare in ufficio, lavorare sodo",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare un lavoro per guadagnare denaro.",
                "examples": [
                    "Lavoro cinque giorni a settimana.",
                    "Lei lavora in banca."
                ]
            }
        ]
    },
    {
        "word": "dormire",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "😴",
        "subtext": "dormire 8 ore, andare a dormire",
        "opposite": "svegliarsi",
        "oppositeEmoji": "⏰",
        "form": "verb",
        "definitions": [
            {
                "text": "Riposare con gli occhi chiusi.",
                "examples": [
                    "Ho bisogno di dormire.",
                    "Il bambino dorme."
                ]
            }
        ]
    },
    {
        "word": "guardare",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "form": "verb",
        "subtext": "guardare la TV, guardare un film",
        "definitions": [
            {
                "text": "Fissare lo sguardo su qualcosa.",
                "examples": [
                    "Guardo la TV la sera.",
                    "Guardano gli uccelli."
                ]
            }
        ]
    },
    {
        "word": "leggere",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "form": "verb",
        "subtext": "leggere un libro, leggere il giornale",
        "opposite": "scrivere",
        "oppositeEmoji": "✍️",
        "definitions": [
            {
                "text": "Guardare e capire parole scritte.",
                "examples": [
                    "Leggo un libro ogni notte.",
                    "Lei sa leggere l'italiano."
                ]
            }
        ]
    },
    {
        "word": "essere",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👤",
        "form": "verb"
    },
    {
        "word": "avere",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👜",
        "form": "verb"
    },
    {
        "word": "andare",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "form": "verb"
    },
    {
        "word": "mangiare",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍎",
        "subtext": "mangiare una mela, mangiare la cena",
        "opposite": "bere",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettere cibo in bocca e deglutire.",
                "examples": [
                    "Mangio una mela ogni giorno.",
                    "Cosa vuoi mangiare?"
                ]
            }
        ]
    },
    {
        "word": "bere",
        "level": "starter",
        "theme": "drinks_A0",
        "emoji": "🥛",
        "subtext": "bere acqua, bere caffè",
        "opposite": "mangiare",
        "oppositeEmoji": "🍎",
        "form": "verb",
        "definitions": [
            {
                "text": "Prendere un liquido per bocca e deglutire.",
                "examples": [
                    "Bevo molta acqua.",
                    "Vuoi bere qualcosa?"
                ]
            }
        ]
    },
    {
        "word": "fare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "form": "verb"
    },
    {
        "word": "parlare",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗣️",
        "form": "verb"
    },
    {
        "word": "sapere",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🧠",
        "form": "verb"
    },
    {
        "word": "pensare",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "💭",
        "form": "verb"
    },
    {
        "word": "vedere",
        "level": "starter",
        "theme": "health_body",
        "emoji": "👁️",
        "form": "verb"
    },
    {
        "word": "volere",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🙏",
        "form": "verb"
    },
    {
        "word": "amare",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "❤️",
        "form": "verb"
    },
    {
        "word": "scrivere",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "form": "verb"
    },
    {
        "word": "venire",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🏃‍♂️",
        "form": "verb"
    },
    {
        "word": "dare",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "form": "verb"
    },
    {
        "word": "prendere",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "👜",
        "form": "verb"
    },
    {
        "word": "trovare",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔍",
        "form": "verb"
    },
    {
        "word": "dire",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗣️",
        "form": "verb"
    },
    {
        "word": "chiedere",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "❓",
        "form": "verb"
    },
    {
        "word": "sentire",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🌡️",
        "form": "verb"
    },
    {
        "word": "provare",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🎯",
        "form": "verb"
    },
    {
        "word": "partire",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚪",
        "form": "verb"
    },
    {
        "word": "chiamare",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "📞",
        "form": "verb"
    },
    {
        "word": "utilizzare",
        "level": "starter",
        "theme": "technology_media",
        "emoji": "🛠️",
        "form": "verb"
    },
    {
        "word": "ottenere",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📥",
        "form": "verb"
    },
    {
        "word": "iniziare",
        "level": "starter",
        "theme": "time",
        "emoji": "▶️",
        "form": "verb"
    },
    {
        "word": "aiutare",
        "level": "starter",
        "theme": "society_politics",
        "emoji": "🤝",
        "form": "verb"
    },
    {
        "word": "giocare",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "form": "verb"
    },
    {
        "word": "correre",
        "level": "starter",
        "theme": "common_sports_A0",
        "emoji": "🏃",
        "form": "verb"
    },
    {
        "word": "vivere",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "🏠",
        "form": "verb"
    },
    {
        "word": "portare",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "form": "verb"
    },
    {
        "word": "sedersi",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🪑",
        "form": "verb"
    },
    {
        "word": "stare in piedi",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🧍",
        "form": "verb"
    },
    {
        "word": "perdere",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📉",
        "form": "verb"
    },
    {
        "word": "pagare",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💰",
        "form": "verb"
    },
    {
        "word": "incontrare",
        "level": "starter",
        "theme": "society_politics",
        "emoji": "🤝",
        "form": "verb"
    },
    {
        "word": "imparare",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "📚",
        "form": "verb"
    },
    {
        "word": "cambiare",
        "level": "starter",
        "theme": "time",
        "emoji": "🔄",
        "form": "verb"
    },
    {
        "word": "capire",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "💡",
        "form": "verb"
    },
    {
        "word": "fermarsi",
        "level": "starter",
        "theme": "time",
        "emoji": "🛑",
        "form": "verb"
    },
    {
        "word": "aggiungere",
        "level": "starter",
        "theme": "numbers_math",
        "emoji": "➕",
        "form": "verb"
    },
    {
        "word": "spendere",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💸",
        "form": "verb"
    },
    {
        "word": "aprire",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📖",
        "form": "verb"
    },
    {
        "word": "vincere",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "form": "verb"
    },
    {
        "word": "camminare",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "form": "verb"
    },
    {
        "word": "ricordare",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🧠",
        "form": "verb"
    },
    {
        "word": "comprare",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🛒",
        "form": "verb"
    },
    {
        "word": "morire",
        "level": "starter",
        "theme": "health_body",
        "emoji": "⚰️",
        "form": "verb"
    },
    {
        "word": "inviare",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "✉️",
        "form": "verb"
    },
    {
        "word": "cadere",
        "level": "starter",
        "theme": "environment_nature",
        "emoji": "🍂",
        "form": "verb"
    },
    {
        "word": "tagliare",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "✂️",
        "form": "verb"
    },
    {
        "word": "passare",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🏔️",
        "form": "verb"
    },
    {
        "word": "vendere",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🏷️",
        "form": "verb"
    },
    {
        "word": "tirare",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🚜",
        "form": "verb"
    },
    {
        "word": "spingere",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🛒",
        "form": "verb"
    },
    {
        "word": "sperare",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🤞",
        "form": "verb"
    },
    {
        "word": "cucinare",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍳",
        "form": "verb"
    },
    {
        "word": "fermare",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔒",
        "form": "verb"
    },
    {
        "word": "finire",
        "level": "starter",
        "theme": "time",
        "emoji": "🏁",
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
