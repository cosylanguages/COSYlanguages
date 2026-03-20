(function() {
    const data = [
    {
        "word": "dormir",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "😴",
        "subtext": "dormir 8 heures, aller dormir",
        "form": "verb",
        "plural": "dormirs"
    },
    {
        "word": "dessiner",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🎨",
        "form": "verb"
    },
    {
        "word": "cuisiner",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🍳",
        "form": "verb"
    },
    {
        "word": "lire",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📖",
        "subtext": "lire un livre, lire les nouvelles",
        "opposite": "écrire",
        "oppositeEmoji": "✍️",
        "form": "verb"
    },
    {
        "word": "danser",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "💃",
        "form": "verb"
    },
    {
        "word": "chanter",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🎤",
        "form": "verb"
    },
    {
        "word": "ensoleillé",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "☀️",
        "form": "verb"
    },
    {
        "word": "manger",
        "level": "starter",
        "theme": "food_drink_A0",
        "emoji": "🍎",
        "subtext": "manger une pomme, dîner",
        "opposite": "boire",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettre de la nourriture dans sa bouche et l'avaler.",
                "examples": [
                    "Je mange une pomme.",
                    "Qu'est-ce que tu veux manger ?"
                ]
            }
        ]
    },
    {
        "word": "boire",
        "level": "starter",
        "theme": "food_drink_A0",
        "emoji": "🥛",
        "subtext": "boire de l'eau, boire du café",
        "form": "verb",
        "definitions": [
            {
                "text": "Prendre un liquide par la bouche et l'avaler.",
                "examples": [
                    "Je bois beaucoup d'eau.",
                    "Tu veux boire quelque chose ?"
                ]
            }
        ]
    },
    {
        "word": "parler",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "💬",
        "subtext": "parler anglais, parler lentement",
        "form": "verb",
        "definitions": [
            {
                "text": "S'exprimer par la parole.",
                "examples": [
                    "Je parle à mon ami.",
                    "Elle parle très bien français."
                ]
            }
        ]
    },
    {
        "word": "voir",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "👁️",
        "subtext": "voir un film, voir un ami",
        "form": "verb",
        "definitions": [
            {
                "text": "Utiliser ses yeux pour regarder quelque chose.",
                "examples": [
                    "Je vois un oiseau.",
                    "As-tu vu ce film ?"
                ]
            }
        ]
    },
    {
        "word": "marcher",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "Se déplacer à pied.",
                "examples": [
                    "Je marche pour aller à l'école.",
                    "Nous marchons dans la forêt."
                ]
            }
        ]
    },
    {
        "word": "se souvenir",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🧠",
        "form": "verb"
    },
    {
        "word": "acheter",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🛒",
        "opposite": "vendre",
        "oppositeEmoji": "🏷️",
        "form": "verb"
    },
    {
        "word": "mourir",
        "level": "starter",
        "theme": "body_A0",
        "emoji": "⚰️",
        "opposite": "vivre",
        "oppositeEmoji": "🏠",
        "form": "verb"
    },
    {
        "word": "envoyer",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "✉️",
        "form": "verb"
    },
    {
        "word": "tomber",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "🍂",
        "form": "verb"
    },
    {
        "word": "couper",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "✂️",
        "form": "verb"
    },
    {
        "word": "passer",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🏔️",
        "form": "verb"
    },
    {
        "word": "vendre",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🏷️",
        "opposite": "acheter",
        "oppositeEmoji": "🛒",
        "form": "verb"
    },
    {
        "word": "tirer",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🚜",
        "opposite": "pousser",
        "oppositeEmoji": "🛒",
        "form": "verb"
    },
    {
        "word": "pousser",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🛒",
        "opposite": "tirer",
        "oppositeEmoji": "🚜",
        "form": "verb"
    },
    {
        "word": "espérer",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🤞",
        "form": "verb"
    },
    {
        "word": "porter",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🎒",
        "form": "verb"
    },
    {
        "word": "casser",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "💔",
        "form": "verb"
    },
    {
        "word": "recevoir",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📩",
        "form": "verb"
    },
    {
        "word": "être d'accord",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "👍",
        "form": "verb"
    },
    {
        "word": "partager",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🍕",
        "form": "verb"
    },
    {
        "word": "sourire",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "😊",
        "opposite": "pleurer",
        "oppositeEmoji": "😢",
        "form": "verb"
    },
    {
        "word": "pleurer",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "😢",
        "opposite": "sourire",
        "oppositeEmoji": "😊",
        "form": "verb"
    },
    {
        "word": "sauter",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🦘",
        "form": "verb"
    },
    {
        "word": "voler",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "✈️",
        "form": "verb"
    },
    {
        "word": "nager",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🏊",
        "form": "verb"
    },
    {
        "word": "laver",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🧼",
        "form": "verb"
    },
    {
        "word": "nettoyer",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🧹",
        "form": "verb"
    },
    {
        "word": "voyager",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "✈️",
        "form": "verb"
    },
    {
        "word": "étudier",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "📖",
        "form": "verb"
    },
    {
        "word": "enseigner",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "👨‍🏫",
        "form": "verb"
    },
    {
        "word": "écouter",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🎧",
        "form": "verb"
    },
    {
        "word": "fermer",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🔒",
        "opposite": "ouvrir",
        "oppositeEmoji": "📖",
        "form": "verb"
    },
    {
        "word": "finir",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🏁",
        "opposite": "commencer",
        "oppositeEmoji": "▶️",
        "form": "verb"
    }
];
    const lang = "fr";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
