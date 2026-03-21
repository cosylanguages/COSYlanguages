(function() {
    const data = [
    {
        "word": "artiste",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "🎨",
        "form": "noun",
        "plural": "artistes",
        "definitions": [
            {
                "text": "Une personne qui crée des peintures ou des dessins.",
                "examples": [
                    "L'artiste peint un beau tableau.",
                    "C'est un artiste célèbre."
                ]
            },
            {
                "text": "Cette personne travaille souvent dans un atelier.",
                "examples": [
                    "Les artistes utilisent des couleurs et des pinceaux."
                ]
            }
        ]
    },
    {
        "word": "chef",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "👨‍🍳",
        "form": "noun",
        "plural": "chefs",
        "definitions": [
            {
                "text": "Un cuisinier professionnel qui travaille dans un restaurant.",
                "examples": [
                    "Le chef prépare un délicieux repas.",
                    "Notre chef est très talentueux."
                ]
            },
            {
                "text": "Cette personne travaille dans une cuisine.",
                "examples": [
                    "Les chefs portent une grande toque blanche."
                ]
            }
        ]
    },
    {
        "word": "infirmier",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "👩‍⚕️",
        "form": "noun",
        "plural": "infirmiers",
        "definitions": [
            {
                "text": "Une personne qui aide les médecins à soigner les malades.",
                "examples": [
                    "L'infirmier donne les médicaments.",
                    "Elle travaille comme infirmière."
                ]
            },
            {
                "text": "Cette personne travaille dans un hôpital ou une clinique.",
                "examples": [
                    "Les infirmiers sont très courageux."
                ]
            }
        ]
    },
    {
        "word": "crêpe",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "form": "noun",
        "plural": "crêpes",
        "definitions": [
            {
                "text": "Une galette très fine à base de farine.",
                "examples": [
                    "Je voudrais une crêpe au chocolat.",
                    "On fait des crêpes pour la Chandeleur."
                ]
            },
            {
                "text": "La Bretagne est célèbre pour ses crêpes.",
                "examples": [
                    "On peut manger des crêpes sucrées ou salées."
                ]
            }
        ]
    },
    {
        "word": "fondue",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "form": "noun",
        "plural": "fondues",
        "definitions": [
            {
                "text": "Un plat de fromage fondu dans lequel on trempe du pain.",
                "examples": [
                    "La fondue savoyarde est délicieuse.",
                    "On mange de la fondue en hiver."
                ]
            },
            {
                "text": "C'est un plat convivial que l'on partage entre amis.",
                "examples": [
                    "Il existe aussi des fondues au chocolat."
                ]
            }
        ]
    },
    {
        "word": "fromage",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🧀",
        "form": "noun",
        "plural": "fromages",
        "definitions": [
            {
                "text": "Un aliment solide fait à partir de lait.",
                "examples": [
                    "J'aime le fromage sur ma pizza.",
                    "Il y a beaucoup de sortes de fromage."
                ]
            },
            {
                "text": "La France est célèbre pour ses nombreux fromages.",
                "examples": [
                    "On mange souvent du fromage après le plat principal."
                ]
            }
        ]
    },
    {
        "word": "riz",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🍚",
        "form": "noun",
        "plural": "riz",
        "definitions": [
            {
                "text": "Des petits grains blancs ou bruns.",
                "examples": [
                    "Je mange du riz avec du poulet.",
                    "Le riz est délicieux."
                ]
            },
            {
                "text": "C'est un aliment de base dans de nombreux pays.",
                "examples": [
                    "Le riz pousse dans l'eau."
                ]
            }
        ]
    },
    {
        "word": "tomate",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🍅",
        "form": "noun",
        "plural": "tomates",
        "definitions": [
            {
                "text": "Un fruit rouge utilisé dans les salades.",
                "examples": [
                    "La tomate est très juteuse.",
                    "J'ai besoin de tomates pour la sauce."
                ]
            },
            {
                "text": "La tomate est souvent utilisée comme légume.",
                "examples": [
                    "Les tomates cerises sont sucrées."
                ]
            }
        ]
    },
    {
        "word": "pomme de terre",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🥔",
        "form": "noun",
        "plural": "pomme de terres",
        "definitions": [
            {
                "text": "Un légume qui pousse sous la terre.",
                "examples": [
                    "J'aime la purée de pommes de terre.",
                    "Peux-tu éplucher les pommes de terre ?"
                ]
            },
            {
                "text": "On utilise les pommes de terre pour faire des frites.",
                "examples": [
                    "La pomme de terre est un féculent."
                ]
            }
        ]
    },
    {
        "word": "vin",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "article": "le",
        "baseWord": "vin",
        "emoji": "🍷",
        "form": "noun",
        "plural": "vin"
    },
    {
        "word": "bière",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "article": "la",
        "baseWord": "bière",
        "emoji": "🍺",
        "form": "noun",
        "plural": "bière"
    },
    {
        "word": "hôpital",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🏥",
        "form": "noun",
        "plural": "hôpitaux",
        "definitions": [
            {
                "text": "Un établissement où l'on soigne des malades ou des blessés.",
                "examples": [
                    "L'ambulance arrive à l'hôpital.",
                    "Il travaille à l'hôpital."
                ]
            },
            {
                "text": "C'est un endroit où l'on va pour voir un médecin ou une infirmière.",
                "examples": [
                    "Les hôpitaux sont ouverts 24h/24."
                ]
            }
        ]
    },
    {
        "word": "cinéma",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🎬",
        "form": "noun",
        "plural": "cinémas",
        "definitions": [
            {
                "text": "Un lieu où l'on projette des films sur un grand écran.",
                "examples": [
                    "On va au cinéma ce soir ?",
                    "Le cinéma est près d'ici."
                ]
            },
            {
                "text": "C'est un endroit où l'on peut manger du popcorn et regarder un film.",
                "examples": [
                    "J'adore aller au cinéma avec des amis."
                ]
            }
        ]
    },
    {
        "word": "restaurant",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🍴",
        "form": "noun",
        "plural": "restaurants",
        "definitions": [
            {
                "text": "Un endroit où l'on peut acheter et manger un repas.",
                "examples": [
                    "Allons dans un restaurant italien.",
                    "Le restaurant est complet ce soir."
                ]
            },
            {
                "text": "Dans ce lieu, un serveur apporte les plats à table.",
                "examples": [
                    "On a réservé une table au restaurant."
                ]
            }
        ]
    },
    {
        "word": "robe",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "👗",
        "form": "noun",
        "plural": "robes"
    },
    {
        "word": "veste",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "🧥",
        "form": "noun",
        "plural": "vestes"
    },
    {
        "word": "jupe",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "👗",
        "form": "noun",
        "plural": "jupes"
    },
    {
        "word": "canapé",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "canapés"
    },
    {
        "word": "lampe",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "💡",
        "form": "noun",
        "plural": "lampes"
    },
    {
        "word": "bureau",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "theme_alt": "grammar_plurals",
        "numberPlural": "3 bureau",
        "answer": "trois bureaux",
        "emoji": "🏢",
        "form": "noun",
        "plural": "bureaux"
    },
    {
        "word": "beau",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "form": "noun",
        "plural": "beaus"
    },
    {
        "word": "fort",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "form": "noun",
        "plural": "forts"
    },
    {
        "word": "se brosser les dents",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "🪥",
        "form": "noun",
        "plural": "se brosser les dents"
    },
    {
        "word": "prendre une douche",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "🚿",
        "form": "noun",
        "plural": "prendre une douches"
    },
    {
        "word": "montre",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "form": "noun",
        "plural": "montres",
        "definitions": [
            {
                "text": "Un petit appareil que l'on porte au poignet pour donner l'heure.",
                "examples": [
                    "Ma montre avance de cinq minutes.",
                    "Regarde l'heure sur ta montre."
                ]
            },
            {
                "text": "Du verbe montrer : faire voir quelque chose à quelqu'un.",
                "examples": [
                    "Il me montre ses photos.",
                    "Montre-moi ton dessin."
                ]
            }
        ]
    },
    {
        "word": "portefeuille",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "👛",
        "form": "noun",
        "plural": "portefeuilles",
        "definitions": [
            {
                "text": "Un petit accessoire pour ranger son argent et ses cartes.",
                "examples": [
                    "J'ai perdu mon portefeuille.",
                    "Mets l'argent dans ton portefeuille."
                ]
            }
        ]
    },
    {
        "word": "lunettes",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "👓",
        "form": "noun",
        "plural": "lunettes"
    },
    {
        "word": "lion",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "🦁",
        "form": "noun",
        "plural": "lions"
    },
    {
        "word": "tigre",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "🐯",
        "form": "noun",
        "plural": "tigres"
    },
    {
        "word": "cheval",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "🐎",
        "form": "noun",
        "plural": "chevaux"
    },
    {
        "word": "neigeux",
        "level": "elementary",
        "theme": "environment_A2",
        "emoji": "❄️",
        "form": "noun",
        "plural": "neigeux"
    },
    {
        "word": "venteux",
        "level": "elementary",
        "theme": "environment_A2",
        "emoji": "💨",
        "form": "noun",
        "plural": "venteux"
    },
    {
        "word": "bras",
        "level": "elementary",
        "theme": "health_body_A2",
        "emoji": "💪",
        "form": "noun",
        "plural": "bras"
    },
    {
        "word": "université",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🎓",
        "form": "noun",
        "definitions": [
            {
                "text": "Un établissement d'enseignement supérieur.",
                "examples": [
                    "Elle étudie à l'université.",
                    "L'université est fermée pendant les vacances."
                ]
            }
        ]
    },
    {
        "word": "cuisine locale",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🍜",
        "form": "adjective",
        "definitions": [
            {
                "text": "La nourriture traditionnelle d'une région précise.",
                "examples": [
                    "J'aime découvrir la cuisine locale.",
                    "La cuisine locale est authentique."
                ]
            },
            {
                "text": "Découvrir la cuisine locale fait partie du voyage.",
                "examples": [
                    "La cuisine locale utilise des produits du terroir."
                ]
            }
        ]
    },
    {
        "word": "oiseau",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "article": "l'",
        "baseWord": "oiseau",
        "numberPlural": "2 oiseau",
        "answer": "deux oiseaux",
        "emoji": "🐦",
        "form": "noun",
        "plural": "oiseaux"
    },
    {
        "word": "sembler",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤔",
        "form": "noun",
        "plural": "semblers"
    },
    {
        "word": "devenir",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🦋",
        "form": "noun",
        "plural": "devenirs"
    },
    {
        "word": "bouger",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "📦",
        "form": "noun",
        "plural": "bougers"
    },
    {
        "word": "croire",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🙏",
        "form": "noun",
        "plural": "croires"
    },
    {
        "word": "se passer",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "⚡",
        "form": "adjective"
    },
    {
        "word": "inclure",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "➕",
        "form": "noun",
        "plural": "inclures"
    },
    {
        "word": "continuer",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "➡️",
        "form": "noun",
        "plural": "continuers"
    },
    {
        "word": "poser",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "⚙️",
        "form": "noun",
        "plural": "posers"
    },
    {
        "word": "mener",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "👑",
        "form": "noun",
        "plural": "meners"
    },
    {
        "word": "suivre",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "👣",
        "form": "noun",
        "plural": "suivres"
    },
    {
        "word": "créer",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "✨",
        "form": "noun",
        "plural": "créers"
    },
    {
        "word": "permettere",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "✅",
        "form": "noun",
        "plural": "permetteres"
    },
    {
        "word": "grandir",
        "level": "elementary",
        "theme": "environment_A2",
        "emoji": "🌱",
        "form": "noun",
        "plural": "grandirs"
    },
    {
        "word": "offrir",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤲",
        "form": "noun",
        "plural": "offrirs"
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
