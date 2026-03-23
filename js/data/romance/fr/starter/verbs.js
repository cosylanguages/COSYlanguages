(function() {
    const data = [
    {
        "word": "se réveiller",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "se réveiller tôt, se réveiller à 7h",
        "opposite": "dormir",
        "oppositeEmoji": "😴",
        "definitions": [
            {
                "text": "Arrêter de dormir et ouvrir les yeux.",
                "examples": [
                    "Je me réveille à sept heures.",
                    "À quelle heure te réveilles-tu ?"
                ]
            }
        ]
    },
    {
        "word": "travailler",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "travailler dans un bureau, travailler dur",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire un travail pour gagner de l'argent.",
                "examples": [
                    "Je travaille cinq jours par semaine.",
                    "Elle travaille dans une banque."
                ]
            }
        ]
    },
    {
        "word": "dormir",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "😴",
        "subtext": "dormir 8 heures, aller dormir",
        "opposite": "se réveiller",
        "oppositeEmoji": "⏰",
        "form": "verb",
        "definitions": [
            {
                "text": "Se reposer les yeux fermés.",
                "examples": [
                    "J'ai besoin de dormir.",
                    "Le bébé dort."
                ]
            }
        ]
    },
    {
        "word": "regarder",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "form": "verb",
        "subtext": "regarder la télé, regarder un film",
        "definitions": [
            {
                "text": "Porter son regard sur quelque chose.",
                "examples": [
                    "Je regarde la télé le soir.",
                    "Ils regardent les oiseaux."
                ]
            }
        ]
    },
    {
        "word": "lire",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "form": "verb",
        "subtext": "lire un livre, lire le journal",
        "opposite": "écrire",
        "oppositeEmoji": "✍️",
        "definitions": [
            {
                "text": "Regarder et comprendre des mots écrits.",
                "examples": [
                    "Je lis un livre tous les soirs.",
                    "Elle sait lire le français."
                ]
            }
        ]
    },
    {
        "word": "être",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👤",
        "form": "verb"
    },
    {
        "word": "avoir",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👜",
        "form": "verb"
    },
    {
        "word": "aller",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "form": "verb"
    },
    {
        "word": "manger",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍎",
        "subtext": "manger une pomme, manger le dîner",
        "opposite": "boire",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettre de la nourriture dans sa bouche et l'avaler.",
                "examples": [
                    "Je mange une pomme chaque jour.",
                    "Qu'est-ce que tu veux manger ?"
                ]
            }
        ]
    },
    {
        "word": "boire",
        "level": "starter",
        "theme": "drinks_A0",
        "emoji": "🥛",
        "subtext": "boire de l'eau, boire du café",
        "opposite": "manger",
        "oppositeEmoji": "🍎",
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
        "word": "faire",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "form": "verb"
    },
    {
        "word": "parler",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗣️",
        "form": "verb"
    },
    {
        "word": "savoir",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🧠",
        "form": "verb"
    },
    {
        "word": "penser",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "💭",
        "form": "verb"
    },
    {
        "word": "voir",
        "level": "starter",
        "theme": "health_body",
        "emoji": "👁️",
        "form": "verb"
    },
    {
        "word": "vouloir",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🙏",
        "form": "verb"
    },
    {
        "word": "aimer",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "❤️",
        "form": "verb"
    },
    {
        "word": "écrire",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "form": "verb"
    },
    {
        "word": "venir",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🏃‍♂️",
        "form": "verb"
    },
    {
        "word": "donner",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "form": "verb"
    },
    {
        "word": "prendre",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "👜",
        "form": "verb"
    },
    {
        "word": "trouver",
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
        "word": "demander",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "❓",
        "form": "verb"
    },
    {
        "word": "sentir",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🌡️",
        "form": "verb"
    },
    {
        "word": "essayer",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🎯",
        "form": "verb"
    },
    {
        "word": "partir",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚪",
        "form": "verb"
    },
    {
        "word": "appeler",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "📞",
        "form": "verb"
    },
    {
        "word": "utiliser",
        "level": "starter",
        "theme": "technology_media",
        "emoji": "🛠️",
        "form": "verb"
    },
    {
        "word": "obtenir",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📥",
        "form": "verb"
    },
    {
        "word": "commencer",
        "level": "starter",
        "theme": "time",
        "emoji": "▶️",
        "form": "verb"
    },
    {
        "word": "aider",
        "level": "starter",
        "theme": "society_politics",
        "emoji": "🤝",
        "form": "verb"
    },
    {
        "word": "jouer",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "form": "verb"
    },
    {
        "word": "courir",
        "level": "starter",
        "theme": "common_sports_A0",
        "emoji": "🏃",
        "form": "verb"
    },
    {
        "word": "vivre",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "🏠",
        "form": "verb"
    },
    {
        "word": "apporter",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "form": "verb"
    },
    {
        "word": "s'asseoir",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🪑",
        "form": "verb"
    },
    {
        "word": "être debout",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🧍",
        "form": "verb"
    },
    {
        "word": "perdre",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📉",
        "form": "verb"
    },
    {
        "word": "payer",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💰",
        "form": "verb"
    },
    {
        "word": "rencontrer",
        "level": "starter",
        "theme": "society_politics",
        "emoji": "🤝",
        "form": "verb"
    },
    {
        "word": "apprendre",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "📚",
        "form": "verb"
    },
    {
        "word": "changer",
        "level": "starter",
        "theme": "time",
        "emoji": "🔄",
        "form": "verb"
    },
    {
        "word": "comprendre",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "💡",
        "form": "verb"
    },
    {
        "word": "s'arrêter",
        "level": "starter",
        "theme": "time",
        "emoji": "🛑",
        "form": "verb"
    },
    {
        "word": "ajouter",
        "level": "starter",
        "theme": "numbers_math",
        "emoji": "➕",
        "form": "verb"
    },
    {
        "word": "dépenser",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💸",
        "form": "verb"
    },
    {
        "word": "ouvrir",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📖",
        "form": "verb"
    },
    {
        "word": "gagner",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "form": "verb"
    },
    {
        "word": "marcher",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "form": "verb"
    },
    {
        "word": "se souvenir",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🧠",
        "form": "verb"
    },
    {
        "word": "acheter",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🛒",
        "form": "verb"
    },
    {
        "word": "mourir",
        "level": "starter",
        "theme": "health_body",
        "emoji": "⚰️",
        "form": "verb"
    },
    {
        "word": "envoyer",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "✉️",
        "form": "verb"
    },
    {
        "word": "tomber",
        "level": "starter",
        "theme": "environment_nature",
        "emoji": "🍂",
        "form": "verb"
    },
    {
        "word": "couper",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "✂️",
        "form": "verb"
    },
    {
        "word": "passer",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🏔️",
        "form": "verb"
    },
    {
        "word": "vendre",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🏷️",
        "form": "verb"
    },
    {
        "word": "tirer",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🚜",
        "form": "verb"
    },
    {
        "word": "pousser",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🛒",
        "form": "verb"
    },
    {
        "word": "espérer",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🤞",
        "form": "verb"
    },
    {
        "word": "porter",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🎒",
        "form": "verb"
    },
    {
        "word": "casser",
        "level": "starter",
        "theme": "describing_things",
        "emoji": "💔",
        "form": "verb"
    },
    {
        "word": "recevoir",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "📩",
        "form": "verb"
    },
    {
        "word": "être d'accord",
        "level": "starter",
        "theme": "opinion_debate",
        "emoji": "👍",
        "form": "verb"
    },
    {
        "word": "dessiner",
        "level": "starter",
        "theme": "culture_arts",
        "emoji": "🎨",
        "form": "verb"
    },
    {
        "word": "partager",
        "level": "starter",
        "theme": "society_politics",
        "emoji": "🍕",
        "form": "verb"
    },
    {
        "word": "sourire",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "😊",
        "form": "verb"
    },
    {
        "word": "pleurer",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "😢",
        "form": "verb"
    },
    {
        "word": "danser",
        "level": "starter",
        "theme": "culture_arts",
        "emoji": "💃",
        "form": "verb"
    },
    {
        "word": "chanter",
        "level": "starter",
        "theme": "culture_arts",
        "emoji": "🎤",
        "form": "verb"
    },
    {
        "word": "sauter",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🦘",
        "form": "verb"
    },
    {
        "word": "voler",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "✈️",
        "form": "verb"
    },
    {
        "word": "nager",
        "level": "starter",
        "theme": "common_sports_A0",
        "emoji": "🏊",
        "form": "verb"
    },
    {
        "word": "laver",
        "level": "starter",
        "theme": "home_living",
        "emoji": "🧼",
        "form": "verb"
    },
    {
        "word": "nettoyer",
        "level": "starter",
        "theme": "home_living",
        "emoji": "🧹",
        "form": "verb"
    },
    {
        "word": "cuisiner",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍳",
        "form": "verb"
    },
    {
        "word": "voyager",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "✈️",
        "form": "verb"
    },
    {
        "word": "étudier",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "📖",
        "form": "verb"
    },
    {
        "word": "enseigner",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "👨‍🏫",
        "form": "verb"
    },
    {
        "word": "écouter",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🎧",
        "form": "verb"
    },
    {
        "word": "fermer",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔒",
        "form": "verb"
    },
    {
        "word": "finir",
        "level": "starter",
        "theme": "time",
        "emoji": "🏁",
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
