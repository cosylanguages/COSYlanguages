(function() {
    const data = [
    {
        "word": "ingénieur",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "👷",
        "form": "noun",
        "plural": "ingénieurs",
        "definitions": [
            {
                "text": "Une personne qui conçoit ou construit des machines ou des structures.",
                "examples": [
                    "L'ingénieur travaille sur un nouveau pont.",
                    "Elle veut être ingénieure civile."
                ]
            },
            {
                "text": "Cette personne travaille souvent dans un bureau ou sur un chantier.",
                "examples": [
                    "Les ingénieurs utilisent des ordinateurs pour dessiner."
                ]
            }
        ]
    },
    {
        "word": "pilote",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "🧑‍✈️",
        "form": "noun",
        "plural": "pilotes",
        "definitions": [
            {
                "text": "Une personne qui conduit un avion ou un hélicoptère.",
                "examples": [
                    "Le pilote est dans le cockpit.",
                    "Il veut devenir pilote."
                ]
            },
            {
                "text": "Cette personne travaille dans le ciel et à l'aéroport.",
                "examples": [
                    "Les pilotes portent un uniforme."
                ]
            }
        ]
    },
    {
        "word": "quiche",
        "level": "intermediate",
        "theme": "society_community_B1",
        "form": "noun",
        "plural": "quiches",
        "definitions": [
            {
                "text": "Une tarte salée garnie d'un mélange d'œufs et de crème.",
                "examples": [
                    "La quiche lorraine est très connue.",
                    "Je vais faire une quiche aux épinards."
                ]
            },
            {
                "text": "Ce plat est originaire de l'est de la France.",
                "examples": [
                    "On mange souvent la quiche avec une salade."
                ]
            }
        ]
    },
    {
        "word": "escargots",
        "level": "intermediate",
        "theme": "society_community_B1",
        "form": "noun",
        "plural": "escargots",
        "definitions": [
            {
                "text": "Des mollusques terrestres cuisinés avec du beurre et de l'ail.",
                "examples": [
                    "Il a mangé une douzaine d'escargots.",
                    "Les escargots sont une spécialité française."
                ]
            },
            {
                "text": "Ce plat est considéré comme un mets raffiné.",
                "examples": [
                    "On utilise une pince spéciale pour manger les escargots."
                ]
            }
        ]
    },
    {
        "word": "limonade",
        "level": "intermediate",
        "theme": "society_community_B1",
        "form": "noun",
        "plural": "limonades",
        "definitions": [
            {
                "text": "Une boisson fraîche à base de citron, d'eau et de sucre.",
                "examples": [
                    "J'aime boire une limonade quand il fait chaud.",
                    "La limonade est pétillante."
                ]
            },
            {
                "text": "C'est une boisson très désaltérante.",
                "examples": [
                    "On ajoute souvent des glaçons dans la limonade."
                ]
            }
        ]
    },
    {
        "word": "bibliothèque",
        "level": "intermediate",
        "theme": "travel_cultural_B1",
        "emoji": "📚",
        "form": "noun",
        "plural": "bibliothèques",
        "definitions": [
            {
                "text": "Un endroit avec beaucoup de livres que l'on peut lire ou emprunter.",
                "examples": [
                    "J'étudie à la bibliothèque universitaire.",
                    "La bibliothèque est fermée le lundi."
                ]
            },
            {
                "text": "C'est un lieu calme pour étudier.",
                "examples": [
                    "Il faut faire silence dans la bibliothèque."
                ]
            }
        ]
    },
    {
        "word": "musée",
        "level": "intermediate",
        "theme": "travel_cultural_B1",
        "emoji": "🏛️",
        "form": "noun",
        "plural": "musées",
        "definitions": [
            {
                "text": "Un bâtiment où l'on expose des objets d'art, d'histoire ou de science.",
                "examples": [
                    "Nous avons visité le musée du Louvre.",
                    "Le musée possède de belles sculptures."
                ]
            },
            {
                "text": "C'est un lieu culturel pour apprendre sur le passé.",
                "examples": [
                    "L'entrée du musée est gratuite pour les étudiants."
                ]
            }
        ]
    },
    {
        "word": "armoire",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "👗",
        "form": "noun",
        "plural": "armoires"
    },
    {
        "word": "mince",
        "level": "intermediate",
        "theme": "society_community_B1",
        "form": "noun",
        "plural": "minces"
    },
    {
        "word": "éléphant",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🐘",
        "form": "noun",
        "plural": "éléphants"
    },
    {
        "word": "singe",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🐒",
        "form": "noun",
        "plural": "singes"
    },
    {
        "word": "chaud",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "🔥",
        "form": "noun",
        "plural": "chauds"
    },
    {
        "word": "développeur logiciel",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "💻",
        "form": "noun",
        "plural": "développeur logiciels",
        "definitions": [
            {
                "text": "Une personne qui écrit des programmes informatiques.",
                "examples": [
                    "Le développeur crée une application.",
                    "Je veux devenir développeur."
                ]
            },
            {
                "text": "Cette personne travaille avec un ordinateur.",
                "examples": [
                    "Les développeurs utilisent plusieurs langages."
                ]
            }
        ]
    },
    {
        "word": "algorithme",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "💻",
        "form": "noun",
        "plural": "algorithmes"
    },
    {
        "word": "santé mentale",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "emoji": "🧠",
        "form": "adjective"
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
