(function() {
    const data = [
    {
        "word": "bague",
        "level": "starter",
        "theme": "accessories_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💍",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de ring.",
                "examples": []
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "ceinture",
        "level": "starter",
        "theme": "accessories_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎗️",
        "form": "noun",
        "plural": "ceintures",
        "definitions": [
            {
                "text": "Pour tenir le pantalon.",
                "examples": [
                    "Une ceinture en cuir."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "collier",
        "level": "starter",
        "theme": "accessories_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📿",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de necklace.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "gants",
        "level": "starter",
        "theme": "accessories_A1",
        "article": "les",
        "gender": "masculine",
        "emoji": "🧤",
        "form": "noun",
        "plural": "gants",
        "definitions": [
            {
                "text": "Pour les mains.",
                "examples": [
                    "Une paire de gants."
                ]
            }
        ],
        "partitive": "des"
    },
    {
        "word": "lunettes",
        "level": "starter",
        "theme": "accessories_A1",
        "article": "les",
        "gender": "feminine",
        "emoji": "👓",
        "form": "noun",
        "plural": "lunettes",
        "definitions": [
            {
                "text": "Objet pour mieux voir.",
                "examples": [
                    "Mes lunettes sont sur la table."
                ]
            }
        ],
        "partitive": "des"
    },
    {
        "word": "lunettes de soleil",
        "level": "starter",
        "theme": "accessories_A1",
        "article": "les",
        "gender": "feminine",
        "emoji": "🕶️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de sunglasses.",
                "examples": []
            }
        ],
        "partitive": "des"
    },
    {
        "word": "montre",
        "level": "starter",
        "theme": "accessories_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⌚",
        "form": "noun",
        "plural": "montres",
        "definitions": [
            {
                "text": "Petit appareil pour l'heure.",
                "examples": [
                    "Ma montre avance."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "écharpe",
        "level": "starter",
        "theme": "accessories_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🧣",
        "form": "noun",
        "plural": "écharpes",
        "definitions": [
            {
                "text": "Pour le cou.",
                "examples": [
                    "Porter une écharpe."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "centre",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📍",
        "form": "noun",
        "plural": "centres",
        "definitions": [
            {
                "text": "Le milieu d'un lieu.",
                "examples": [
                    "Le centre-ville."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "chemin",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👣",
        "form": "noun",
        "plural": "chemins",
        "definitions": [
            {
                "text": "Petite voie.",
                "examples": [
                    "Le chemin est long."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "immeuble",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏢",
        "form": "noun",
        "plural": "immeubles",
        "definitions": [
            {
                "text": "Grand bâtiment urbain.",
                "examples": [
                    "Un bel immeuble."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "pays",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🗺️",
        "form": "noun",
        "plural": "pays",
        "definitions": [
            {
                "text": "Territoire d'une nation.",
                "examples": [
                    "La France est un beau pays."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "place",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏙️",
        "form": "noun",
        "plural": "places",
        "definitions": [
            {
                "text": "Espace public ouvert.",
                "examples": [
                    "La place du village."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "quartier",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📍",
        "form": "noun",
        "plural": "quartiers",
        "definitions": [
            {
                "text": "Partie d'une ville.",
                "examples": [
                    "C'est mon quartier."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "route",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛣️",
        "form": "noun",
        "plural": "routes",
        "definitions": [
            {
                "text": "Voie entre deux villes.",
                "examples": [
                    "La route est belle."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "rue",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛣️",
        "form": "noun",
        "plural": "rues",
        "definitions": [
            {
                "text": "Voie dans une ville.",
                "examples": [
                    "J'habite dans cette rue."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "village",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏘️",
        "form": "noun",
        "plural": "villages",
        "definitions": [
            {
                "text": "Petite ville.",
                "examples": [
                    "C'est un beau village."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "ville",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏙️",
        "form": "noun",
        "plural": "villes",
        "definitions": [
            {
                "text": "Lieu avec beaucoup de maisons.",
                "examples": [
                    "Paris est une grande ville."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "voisin",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "le",
        "emoji": "🏠",
        "form": "noun",
        "plural": "voisins",
        "definitions": [
            {
                "text": "Une personne qui vit à côté de vous ou près de vous.",
                "examples": [
                    "Mes voisins sont très gentils."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "âge",
        "level": "starter",
        "theme": "age_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🎂",
        "form": "noun",
        "plural": "âges",
        "definitions": [
            {
                "text": "Nombre d'années vécues.",
                "examples": [
                    "Quel âge as-tu ?"
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "abeille",
        "level": "starter",
        "theme": "animals_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🐝",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Un insecte qui fait du miel.",
                "examples": [
                    "L'abeille est sur la fleur."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "araignée",
        "level": "starter",
        "theme": "animals_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🕷️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Une petite bête avec huit pattes.",
                "examples": [
                    "Il y a une araignée au plafond."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "canard",
        "level": "starter",
        "theme": "animals_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🦆",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Un oiseau qui nage dans l'eau.",
                "examples": [
                    "Le canard nage sur l'étang."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "chat",
        "level": "starter",
        "theme": "animals_A1",
        "article": "le",
        "baseWord": "chat",
        "emoji": "🐈",
        "numberPlural": "2 chat",
        "answer": "deux chats",
        "form": "noun",
        "plural": "chats",
        "definitions": [
            {
                "text": "Un petit animal à fourrure.",
                "examples": [
                    "Mon chat dort."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "cheval",
        "level": "starter",
        "theme": "animals_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🐴",
        "form": "noun",
        "plural": "chevaux",
        "definitions": [
            {
                "text": "Un animal que l'on peut monter.",
                "examples": [
                    "Je monte à cheval."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "chien",
        "level": "starter",
        "theme": "animals_A1",
        "article": "le",
        "baseWord": "chien",
        "emoji": "🐕",
        "numberPlural": "5 chien",
        "answer": "cinq chiens",
        "form": "noun",
        "plural": "chiens",
        "definitions": [
            {
                "text": "Le meilleur ami de l'homme.",
                "examples": [
                    "Je promène mon chien."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "cochon",
        "level": "starter",
        "theme": "animals_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🐷",
        "form": "noun",
        "plural": "cochons",
        "definitions": [
            {
                "text": "Un animal rose de la ferme.",
                "examples": [
                    "Le cochon est gras."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "crocodile",
        "level": "starter",
        "theme": "animals_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🐊",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de crocodile.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "lapin",
        "level": "starter",
        "theme": "animals_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🐰",
        "form": "noun",
        "plural": "lapins",
        "definitions": [
            {
                "text": "Petit animal avec de longues oreilles.",
                "examples": [
                    "Le lapin mange une carotte."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "lion",
        "level": "starter",
        "theme": "animals_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🦁",
        "form": "noun",
        "plural": "lions",
        "definitions": [
            {
                "text": "Un grand félin sauvage.",
                "examples": [
                    "Le lion est le roi."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "mouton",
        "level": "starter",
        "theme": "animals_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🐑",
        "form": "noun",
        "plural": "moutons",
        "definitions": [
            {
                "text": "Animal avec de la laine blanche.",
                "examples": [
                    "Un troupeau de moutons."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "oiseau",
        "level": "starter",
        "theme": "animals_A1",
        "article": "l'",
        "emoji": "🐦",
        "form": "noun",
        "plural": "oiseaux",
        "definitions": [
            {
                "text": "Un animal avec des plumes et des ailes.",
                "examples": [
                    "L'oiseau chante."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "ours",
        "level": "starter",
        "theme": "animals_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🐻",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Un grand animal fort avec de la fourrure.",
                "examples": [
                    "J'ai vu un ours dans la forêt."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "poisson",
        "level": "starter",
        "theme": "animals_A1",
        "article": "le",
        "emoji": "🐟",
        "form": "noun",
        "plural": "poissons",
        "definitions": [
            {
                "text": "Un animal qui vit dans l'eau.",
                "examples": [
                    "Le poisson nage."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "serpent",
        "level": "starter",
        "theme": "animals_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🐍",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Un long animal sans pattes.",
                "examples": [
                    "J'ai peur des serpents."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "singe",
        "level": "starter",
        "theme": "animals_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🐒",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Un animal sauvage qui grimpe aux arbres.",
                "examples": [
                    "Le singe mange une banane."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "souris",
        "level": "starter",
        "theme": "animals_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🖱️",
        "form": "noun",
        "plural": "souris",
        "definitions": [
            {
                "text": "Objet pour diriger le curseur.",
                "examples": [
                    "La souris est à droite."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "tigre",
        "level": "starter",
        "theme": "animals_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🐅",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Un grand félin orange avec des rayures noires.",
                "examples": [
                    "Les tigres vivent en Asie."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "vache",
        "level": "starter",
        "theme": "animals_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🐮",
        "form": "noun",
        "plural": "vaches",
        "definitions": [
            {
                "text": "L'animal qui donne du lait.",
                "examples": [
                    "La vache est dans le pré."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "éléphant",
        "level": "starter",
        "theme": "animals_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🐘",
        "form": "noun",
        "plural": "éléphants",
        "definitions": [
            {
                "text": "Un très gros animal avec une trompe.",
                "examples": [
                    "L'éléphant est gris."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "comment",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "⚙️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Interroge sur la manière.",
                "examples": [
                    "Comment vas-tu ?"
                ]
            }
        ]
    },
    {
        "word": "conversation",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💬",
        "form": "noun",
        "plural": "conversations",
        "definitions": [
            {
                "text": "Action de parler ensemble.",
                "examples": [
                    "Une conversation intéressante."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "non",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "❌",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Négation.",
                "examples": [
                    "Non, merci."
                ]
            }
        ]
    },
    {
        "word": "oui",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "✅",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Affirmation.",
                "examples": [
                    "Oui, je veux bien."
                ]
            }
        ]
    },
    {
        "word": "où",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "📍",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Interroge sur un lieu.",
                "examples": [
                    "Où habites-tu ?"
                ]
            }
        ]
    },
    {
        "word": "pourquoi",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "❓",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Interroge sur la raison.",
                "examples": [
                    "Pourquoi dors-tu ?"
                ]
            }
        ]
    },
    {
        "word": "problème",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "❓",
        "form": "noun",
        "plural": "problèmes",
        "definitions": [
            {
                "text": "Une difficulté.",
                "examples": [
                    "Il y a un problème."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "quand",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "⏰",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Interroge sur le temps.",
                "examples": [
                    "Quand viens-tu ?"
                ]
            }
        ]
    },
    {
        "word": "question",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "❓",
        "form": "noun",
        "plural": "questions",
        "definitions": [
            {
                "text": "Ce qu'on demande.",
                "examples": [
                    "J'ai une question."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "qui",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "👤",
        "form": "pronoun",
        "plural": "",
        "definitions": [
            {
                "text": "Interroge sur une personne.",
                "examples": [
                    "Qui est là ?"
                ]
            }
        ]
    },
    {
        "word": "quoi",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "❓",
        "form": "pronoun",
        "plural": "",
        "definitions": [
            {
                "text": "Interroge sur une chose.",
                "examples": [
                    "C'est quoi ?"
                ]
            }
        ]
    },
    {
        "word": "réponse",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💡",
        "form": "noun",
        "plural": "réponses",
        "definitions": [
            {
                "text": "Ce qu'on dit après une question.",
                "examples": [
                    "La réponse est non."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "ail",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🧄",
        "form": "noun",
        "plural": "aulx",
        "definitions": [
            {
                "text": "Plante potagère à forte odeur.",
                "examples": [
                    "Je cuisine avec de l'ail."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "bacon",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥓",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de bacon.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "banane",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍌",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Un fruit long et jaune.",
                "examples": [
                    "Le singe mange une banane."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "beurre",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧈",
        "form": "noun",
        "plural": "beurres",
        "definitions": [
            {
                "text": "Produit gras du lait.",
                "examples": [
                    "Du beurre sur le pain."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "biscuit",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍪",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de cookie.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "boeuf",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥩",
        "form": "noun",
        "plural": "boeufs",
        "definitions": [
            {
                "text": "Viande de vache.",
                "examples": [
                    "Je mange du boeuf."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "carotte",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥕",
        "form": "noun",
        "plural": "carottes",
        "definitions": [
            {
                "text": "Légume orange allongé.",
                "examples": [
                    "Le lapin mange une carotte."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "chocolat",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍫",
        "form": "noun",
        "plural": "chocolats",
        "definitions": [
            {
                "text": "Nourriture sucrée marron.",
                "examples": [
                    "J'adore le chocolat."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "citron",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍋",
        "form": "noun",
        "plural": "citrons",
        "definitions": [
            {
                "text": "Un fruit jaune acide.",
                "examples": [
                    "Du citron dans mon thé."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "collation",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥨",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Une petite quantité de nourriture entre les repas.",
                "examples": [
                    "Prendre une collation saine."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "concombre",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥒",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Un long légume vert pour les salades.",
                "examples": [
                    "Une salade de concombre."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "confiture",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍓",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de jam.",
                "examples": []
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "croissant",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "form": "noun",
        "plural": "croissants",
        "definitions": [
            {
                "text": "Une viennoiserie en forme de lune croissante.",
                "examples": [
                    "Je mange un croissant au petit-déjeuner.",
                    "Le boulanger fait des croissants frais."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "cuisine",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍳",
        "form": "noun",
        "plural": "cuisines",
        "definitions": [
            {
                "text": "L'art de préparer les repas.",
                "examples": [
                    "J'aime la cuisine française."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "céréales",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "les",
        "gender": "feminine",
        "emoji": "🥣",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Aliment à base de grains mangé au petit-déjeuner.",
                "examples": [
                    "Je mange un bol de céréales."
                ]
            }
        ],
        "partitive": "des"
    },
    {
        "word": "fraise",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍓",
        "form": "noun",
        "plural": "fraises",
        "definitions": [
            {
                "text": "Un petit fruit rouge sucré.",
                "examples": [
                    "J'aime les fraises."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "fromage",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧀",
        "form": "noun",
        "plural": "fromages",
        "definitions": [
            {
                "text": "Produit fait avec du lait caillé.",
                "examples": [
                    "J'aime le fromage français."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "fruit",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍎",
        "form": "noun",
        "plural": null,
        "subtext": "fruit frais, jus de fruit",
        "definitions": [
            {
                "text": "La partie sucrée d'une plante qui contient des graines, utilisée comme nourriture.",
                "examples": [
                    "Les fruits sont bons pour la santé."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "glace",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍦",
        "form": "noun",
        "plural": "glaces",
        "definitions": [
            {
                "text": "Nourriture froide et sucrée.",
                "examples": [
                    "Une glace à la vanille."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "gâteau",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍰",
        "form": "noun",
        "plural": "gâteaux",
        "definitions": [
            {
                "text": "Pâtisserie sucrée.",
                "examples": [
                    "Un gâteau au chocolat."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "huile",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🏺",
        "form": "noun",
        "plural": "huiles",
        "definitions": [
            {
                "text": "Liquide gras pour cuisiner.",
                "examples": [
                    "De l'huile d'olive."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "jambon",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍖",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de ham.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "lait",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥛",
        "form": "noun",
        "plural": null,
        "subtext": "verre de lait, lait frais",
        "definitions": [
            {
                "text": "Un liquide blanc produit par les vaches.",
                "examples": [
                    "Tu veux du lait dans ton café ?",
                    "Les enfants boivent du lait."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "laitue",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥬",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Une plante à feuilles vertes pour la salade.",
                "examples": [
                    "Lave la laitue."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "légume",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥦",
        "form": "noun",
        "plural": "légumes",
        "subtext": "légumes frais, légumes verts",
        "definitions": [
            {
                "text": "Une plante qui est mangée comme nourriture, comme une carotte ou une tomate.",
                "examples": [
                    "Il mange des légumes tous les jours."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "miel",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍯",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de honey.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "nourriture",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "emoji": "🍲",
        "form": "noun",
        "plural": "nourritures",
        "definitions": [
            {
                "text": "Choses que les gens mangent.",
                "examples": [
                    "La nourriture est bonne ici."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "oeuf",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🥚",
        "form": "noun",
        "plural": "oeufs",
        "subtext": "oeuf dur, omelette",
        "definitions": [
            {
                "text": "Un objet de forme ovale pondu par une poule.",
                "examples": [
                    "J'ai mangé un oeuf à la coque.",
                    "On a besoin d'oeufs pour faire un gâteau."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "oignon",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🧅",
        "form": "noun",
        "plural": "oignons",
        "definitions": [
            {
                "text": "Légume fort qui fait pleurer.",
                "examples": [
                    "Je coupe un oignon."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "orange",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🍊",
        "form": "noun",
        "plural": "oranges",
        "definitions": [
            {
                "text": "Un fruit orange et rond.",
                "examples": [
                    "Je mange une orange."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "pain",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥖",
        "form": "noun",
        "plural": null,
        "subtext": "pain frais, baguette",
        "definitions": [
            {
                "text": "Un aliment de base fait de farine et d'eau.",
                "examples": [
                    "J'aime le pain frais.",
                    "Peux-tu acheter du pain ?",
                    "Je mange du pain au petit-déjeuner."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "pizza",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍕",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Un pain plat avec du fromage et de la tomate.",
                "examples": [
                    "Commandons une pizza."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "poire",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍐",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Un fruit sucré en forme de cloche.",
                "examples": [
                    "Je mange une poire."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "poivre",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧂",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Poudre noire pour relever le goût.",
                "examples": [
                    "Mets du poivre."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "pomme",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "baseWord": "pomme",
        "emoji": "🍎",
        "numberPlural": "4 pomme",
        "answer": "quatre pommes",
        "form": "noun",
        "plural": "pommes",
        "definitions": [
            {
                "text": "Un fruit rond, rouge ou vert.",
                "examples": [
                    "Je mange une pomme.",
                    "La pomme est sucrée."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "pomme de terre",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥔",
        "form": "noun",
        "plural": "pommes de terre",
        "definitions": [
            {
                "text": "Un légume qui pousse sous terre.",
                "examples": [
                    "Des frites avec des pommes de terre."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "porc",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥩",
        "form": "noun",
        "plural": "porcs",
        "definitions": [
            {
                "text": "Viande de cochon.",
                "examples": [
                    "Elle ne mange pas de porc."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "poulet",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍗",
        "form": "noun",
        "plural": "poulets",
        "definitions": [
            {
                "text": "Viande de poule.",
                "examples": [
                    "J'aime le poulet."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "pâtes",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "les",
        "gender": "feminine",
        "emoji": "🍝",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Aliment fait de farine et d'œufs.",
                "examples": [
                    "J'adore les pâtes."
                ]
            }
        ],
        "partitive": "des"
    },
    {
        "word": "raisin",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍇",
        "form": "noun",
        "plural": "raisins",
        "definitions": [
            {
                "text": "Petits fruits pour faire le vin.",
                "examples": [
                    "Une grappe de raisin."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "ratatouille",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "form": "noun",
        "plural": "ratatouilles",
        "definitions": [
            {
                "text": "Un plat provençal composé de légumes cuits.",
                "examples": [
                    "On met des aubergines dans la ratatouille.",
                    "La ratatouille est un plat sain."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "riz",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍚",
        "form": "noun",
        "plural": null,
        "subtext": "riz blanc, riz frit",
        "definitions": [
            {
                "text": "De petits grains blancs que nous cuisons et mangeons.",
                "examples": [
                    "Nous mangeons du riz tous les jours."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "salade",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥗",
        "form": "noun",
        "plural": "salades",
        "definitions": [
            {
                "text": "Plat de légumes froids.",
                "examples": [
                    "Une petite salade, s'il vous plaît."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "sandwich",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥪",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Deux tranches de pain avec de la nourriture entre.",
                "examples": [
                    "Je mange un sandwich au fromage."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "saucisse",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌭",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de sausage.",
                "examples": []
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "sel",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧂",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Poudre blanche pour saler.",
                "examples": [
                    "Un peu de sel."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "soupe",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥣",
        "form": "noun",
        "plural": "soupes",
        "definitions": [
            {
                "text": "Plat liquide chaud.",
                "examples": [
                    "La soupe est bonne."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "sucre",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍚",
        "form": "noun",
        "plural": "sucres",
        "definitions": [
            {
                "text": "Poudre douce pour les gâteaux.",
                "examples": [
                    "Pas de sucre dans mon thé."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "tomate",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍅",
        "form": "noun",
        "plural": "tomates",
        "definitions": [
            {
                "text": "Un fruit rouge mangé comme légume.",
                "examples": [
                    "La tomate est mûre."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "viande",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥩",
        "form": "noun",
        "plural": null,
        "subtext": "viande fraîche, boeuf, poulet",
        "definitions": [
            {
                "text": "Nourriture qui provient des animaux.",
                "examples": [
                    "Il mange de la viande et des légumes."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "vinaigre",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏺",
        "form": "noun",
        "plural": "vinaigres",
        "definitions": [
            {
                "text": "Liquide acide pour salade.",
                "examples": [
                    "Sel, poivre et vinaigre."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "yaourt",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥛",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de yogurt.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "vraiment",
        "level": "starter",
        "theme": "basic_intensifiers_A1",
        "article": "",
        "gender": "",
        "emoji": "‼️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Réellement.",
                "examples": [
                    "C'est vraiment bien."
                ]
            }
        ]
    },
    {
        "word": "stress",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "article": "le",
        "emoji": "😫",
        "form": "noun",
        "subtext": "pression, tension",
        "definitions": [
            {
                "text": "Un sentiment d'inquiétude causé par une situation difficile.",
                "examples": [
                    "J'ai beaucoup de stress au travail."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "appareil photo",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "📷",
        "form": "noun",
        "plural": "appareils photo",
        "definitions": [
            {
                "text": "Appareil pour prendre des photos.",
                "examples": [
                    "J'ai un nouvel appareil photo."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "clavier",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "⌨️",
        "form": "noun",
        "plural": "claviers",
        "definitions": [
            {
                "text": "Objet pour taper du texte.",
                "examples": [
                    "Un clavier d'ordinateur."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "email",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "📧",
        "form": "noun",
        "plural": "emails",
        "definitions": [
            {
                "text": "Courrier électronique.",
                "examples": [
                    "Je réponds aux emails."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "journal",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📰",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Grandes feuilles de papier avec des nouvelles.",
                "examples": [
                    "Il lit le journal le matin."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "magazine",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📖",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Un livre mince avec des photos et articles.",
                "examples": [
                    "J'aime lire des magazines."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "message",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "✉️",
        "form": "noun",
        "plural": "messages",
        "definitions": [
            {
                "text": "Information envoyée.",
                "examples": [
                    "J'ai un message pour toi."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "mot de passe",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🔑",
        "form": "noun",
        "plural": "mots de passe",
        "definitions": [
            {
                "text": "Code secret.",
                "examples": [
                    "J'ai oublié mon mot de passe."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "ordinateur",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "💻",
        "form": "noun",
        "plural": "ordinateurs",
        "definitions": [
            {
                "text": "Machine électronique pour travailler.",
                "examples": [
                    "Mon ordinateur est rapide."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "ordinateur portable",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "💻",
        "form": "noun",
        "plural": "ordinateurs portables",
        "definitions": [
            {
                "text": "Petit ordinateur que l'on transporte.",
                "examples": [
                    "J'utilise mon ordinateur portable."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "radio",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📻",
        "form": "noun",
        "plural": "radios",
        "definitions": [
            {
                "text": "Appareil audio.",
                "examples": [
                    "Écouter la radio."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "site web",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🌐",
        "form": "noun",
        "plural": "sites web",
        "definitions": [
            {
                "text": "Pages sur internet.",
                "examples": [
                    "Regarde ce site web."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "smartphone",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📱",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Un téléphone mobile avec internet.",
                "examples": [
                    "J'utilise mon smartphone chaque jour."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "souris",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🖱️",
        "form": "noun",
        "plural": "souris",
        "definitions": [
            {
                "text": "Objet pour diriger le curseur.",
                "examples": [
                    "La souris est à droite."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "téléphone",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📱",
        "form": "noun",
        "plural": "téléphones",
        "definitions": [
            {
                "text": "Un appareil pour parler à distance.",
                "examples": [
                    "Je parle au téléphone."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "télévision",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📺",
        "form": "noun",
        "plural": "télévisions",
        "definitions": [
            {
                "text": "Appareil pour regarder des films.",
                "examples": [
                    "Je regarde la télévision."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "écran",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🖥️",
        "form": "noun",
        "plural": "écrans",
        "definitions": [
            {
                "text": "Partie de l'ordinateur pour voir.",
                "examples": [
                    "L'écran est grand."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "bouche",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👄",
        "form": "noun",
        "plural": "bouches",
        "subtext": "ouvrir la bouche, se taire",
        "definitions": [
            {
                "text": "La partie du visage pour manger et parler.",
                "examples": [
                    "Ouvre la bouche."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "bras",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "💪",
        "form": "noun",
        "plural": "bras",
        "subtext": "bras cassé, bras gauche",
        "definitions": [
            {
                "text": "La partie du corps de l'épaule à la main.",
                "examples": [
                    "Elle s'est cassé le bras."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "cheveux",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "les",
        "gender": "masculine",
        "emoji": "💇",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de hair.",
                "examples": []
            }
        ],
        "partitive": "des"
    },
    {
        "word": "coeur",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "❤️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de heart.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "cou",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🦒",
        "form": "noun",
        "plural": "cous",
        "definitions": [
            {
                "text": "Partie entre la tête et le corps.",
                "examples": [
                    "J'ai mal au cou."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "dent",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🦷",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de tooth.",
                "examples": []
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "doigt",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "☝️",
        "form": "noun",
        "plural": "doigts",
        "definitions": [
            {
                "text": "Une des cinq parties de la main.",
                "examples": [
                    "J'ai dix doigts."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "dos",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚶",
        "form": "noun",
        "plural": "dos",
        "subtext": "mal de dos, s'allonger sur le dos",
        "definitions": [
            {
                "text": "La partie arrière du corps, du cou aux fesses.",
                "examples": [
                    "J'ai mal au dos."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "estomac",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🤰",
        "form": "noun",
        "plural": "estomacs",
        "definitions": [
            {
                "text": "Partie du corps pour digérer.",
                "examples": [
                    "J'ai mal à l'estomac."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "genou",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🦵",
        "form": "noun",
        "plural": "genoux",
        "definitions": [
            {
                "text": "Partie au milieu de la jambe.",
                "examples": [
                    "Je tombe sur le genou."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "jambe",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🦵",
        "form": "noun",
        "plural": "jambes",
        "subtext": "jambe gauche, jambe droite, longues jambes",
        "definitions": [
            {
                "text": "La partie du corps utilisée pour marcher.",
                "examples": [
                    "Il a de longues jambes."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "main",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "✋",
        "form": "noun",
        "plural": "mains",
        "subtext": "main gauche, main droite, laver les mains",
        "definitions": [
            {
                "text": "La partie du bras avec les doigts.",
                "examples": [
                    "Lave tes mains."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "nez",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👃",
        "form": "noun",
        "plural": "nez",
        "definitions": [
            {
                "text": "La partie du visage pour sentir les odeurs.",
                "examples": [
                    "Il a un petit nez."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "oeil",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "👁️",
        "form": "noun",
        "plural": "yeux",
        "subtext": "yeux bleus, fermer les yeux",
        "definitions": [
            {
                "text": "La partie du corps pour voir.",
                "examples": [
                    "Elle a les yeux bleus."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "oreille",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "👂",
        "form": "noun",
        "plural": "oreilles",
        "subtext": "oreille gauche, oreille droite, mal à l'oreille",
        "definitions": [
            {
                "text": "La partie du corps pour entendre.",
                "examples": [
                    "J'ai deux oreilles."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "orteil",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🦶",
        "form": "noun",
        "plural": "orteils",
        "definitions": [
            {
                "text": "Un doigt de pied.",
                "examples": [
                    "J'ai mal à l'orteil."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "pied",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "le",
        "gender": "masculine",
        "numberPlural": "2 pied",
        "answer": "deux pieds",
        "emoji": "🦶",
        "form": "noun",
        "plural": "pieds",
        "definitions": [
            {
                "text": "La partie du corps au bout de la jambe.",
                "examples": [
                    "J'ai mal au pied.",
                    "Elle a de petits pieds."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "tête",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👤",
        "form": "noun",
        "plural": "têtes",
        "subtext": "mal de tête, secouer la tête",
        "definitions": [
            {
                "text": "La partie supérieure du corps.",
                "examples": [
                    "J'ai un chapeau sur la tête."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "visage",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👤",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de face.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "épaule",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "👤",
        "form": "noun",
        "plural": "épaules",
        "definitions": [
            {
                "text": "Partie du corps entre le cou et le bras.",
                "examples": [
                    "Mon épaule me fait mal."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "histoire",
        "level": "starter",
        "theme": "books_reading_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "📜",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "L'étude des événements du passé.",
                "examples": [
                    "J'aime apprendre l'histoire."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "film",
        "level": "starter",
        "theme": "cinema_film_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎞️",
        "form": "noun",
        "plural": "films",
        "definitions": [
            {
                "text": "Histoire vue au cinéma.",
                "examples": [
                    "Je regarde un film."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "village",
        "level": "starter",
        "theme": "cities_towns_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏘️",
        "form": "noun",
        "plural": "villages",
        "definitions": [
            {
                "text": "Petite ville.",
                "examples": [
                    "C'est un beau village."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "ville",
        "level": "starter",
        "theme": "cities_towns_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏙️",
        "form": "noun",
        "plural": "villes",
        "definitions": [
            {
                "text": "Lieu avec beaucoup de maisons.",
                "examples": [
                    "Paris est une grande ville."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "affiche",
        "level": "starter",
        "theme": "classroom_language_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "📜",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de poster.",
                "examples": []
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "carte",
        "level": "starter",
        "theme": "classroom_language_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🗺️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Dessin d'une ville ou d'un pays.",
                "examples": [
                    "Regarde la carte."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "dictionnaire",
        "level": "starter",
        "theme": "classroom_language_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📖",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Un livre qui explique les mots.",
                "examples": [
                    "Cherche dans le dictionnaire."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "globe",
        "level": "starter",
        "theme": "classroom_language_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🌍",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de globe.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "mot",
        "level": "starter",
        "theme": "classroom_language_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📝",
        "form": "noun",
        "plural": "mots",
        "definitions": [
            {
                "text": "Unité de langage.",
                "examples": [
                    "Un mot difficile."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "page",
        "level": "starter",
        "theme": "classroom_language_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📄",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de page.",
                "examples": []
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "phrase",
        "level": "starter",
        "theme": "classroom_language_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📝",
        "form": "noun",
        "plural": "phrases",
        "definitions": [
            {
                "text": "Ensemble de mots.",
                "examples": [
                    "Fais une phrase."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "règle",
        "level": "starter",
        "theme": "classroom_language_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📏",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Objet pour mesurer ou tracer des lignes.",
                "examples": [
                    "Utilise une règle."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "violet",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🟣",
        "form": "noun",
        "plural": "violets",
        "definitions": [
            {
                "text": "Couleur entre bleu et rouge.",
                "examples": [
                    "J'ai un sac violet."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "baseball",
        "level": "starter",
        "theme": "common_sports_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "⚾",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de baseball.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "basket-ball",
        "level": "starter",
        "theme": "common_sports_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏀",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de basketball.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "football",
        "level": "starter",
        "theme": "common_sports_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "⚽",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Sport avec un ballon rond.",
                "examples": [
                    "Jouons au football."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "natation",
        "level": "starter",
        "theme": "common_sports_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏊",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Fait de nager.",
                "examples": [
                    "J'aime la natation."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "sport",
        "level": "starter",
        "theme": "common_sports_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "⚽",
        "form": "noun",
        "plural": "sports",
        "definitions": [
            {
                "text": "Activité physique.",
                "examples": [
                    "Je fais du sport."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "tennis",
        "level": "starter",
        "theme": "common_sports_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎾",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Sport avec une raquette.",
                "examples": [
                    "Il joue au tennis."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "aussi",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "article": "",
        "gender": "",
        "emoji": "➕",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Également.",
                "examples": [
                    "Moi aussi."
                ]
            }
        ]
    },
    {
        "word": "donc",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "article": "",
        "gender": "",
        "emoji": null,
        "form": "conjunction",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de so.",
                "examples": []
            }
        ]
    },
    {
        "word": "et",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "conjunction",
        "plural": "",
        "definitions": [
            {
                "text": "Ajoute quelque chose.",
                "examples": [
                    "Toi et moi."
                ]
            }
        ]
    },
    {
        "word": "mais",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "conjunction",
        "plural": "",
        "definitions": [
            {
                "text": "Indique une opposition.",
                "examples": [
                    "C'est bon mais cher."
                ]
            }
        ]
    },
    {
        "word": "ou",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "article": "",
        "gender": "",
        "emoji": null,
        "form": "conjunction",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de or.",
                "examples": []
            }
        ]
    },
    {
        "word": "parce que",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "conjunction",
        "plural": "",
        "definitions": [
            {
                "text": "Donne une raison.",
                "examples": [
                    "Je dors parce que je suis fatigué."
                ]
            }
        ]
    },
    {
        "word": "monde",
        "level": "starter",
        "theme": "countries_capitals_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🌍",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "La Terre entière.",
                "examples": [
                    "Tout le monde est là."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "pays",
        "level": "starter",
        "theme": "countries_capitals_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🗺️",
        "form": "noun",
        "plural": "pays",
        "definitions": [
            {
                "text": "Territoire d'une nation.",
                "examples": [
                    "La France est un beau pays."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "boulot",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛠️",
        "form": "noun",
        "plural": "boulots",
        "definitions": [
            {
                "text": "Terme familier pour travail.",
                "examples": [
                    "J'ai trop de boulot."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "pause",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "☕",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de break.",
                "examples": []
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "sommeil",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "article": "le",
        "emoji": "😴",
        "form": "noun",
        "plural": "sommeils",
        "definitions": [
            {
                "text": "Le repos naturel dont votre corps a besoin chaque nuit.",
                "examples": [
                    "Je dors huit heures par nuit."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "travail",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "💼",
        "form": "noun",
        "plural": "travaux",
        "definitions": [
            {
                "text": "Ce que l'on fait pour gagner sa vie.",
                "examples": [
                    "Je vais au travail."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "année",
        "level": "starter",
        "theme": "dates_years_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "📅",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Une période de douze mois.",
                "examples": [
                    "Bonne année !"
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "dimanche",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "dimanches",
        "definitions": [
            {
                "text": "Septième jour de la semaine.",
                "examples": [
                    "Dimanche est un jour de repos."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "jeudi",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "jeudis",
        "definitions": [
            {
                "text": "Quatrième jour de la semaine.",
                "examples": [
                    "Jeudi soir."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "lundi",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "lundis",
        "definitions": [
            {
                "text": "Premier jour de la semaine.",
                "examples": [
                    "Lundi est difficile."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "mardi",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "mardis",
        "definitions": [
            {
                "text": "Deuxième jour de la semaine.",
                "examples": [
                    "Mardi, j'ai sport."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "mercredi",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "mercredis",
        "definitions": [
            {
                "text": "Troisième jour de la semaine.",
                "examples": [
                    "Mercredi est calme."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "samedi",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "samedis",
        "definitions": [
            {
                "text": "Sixième jour de la semaine.",
                "examples": [
                    "Je fais les courses samedi."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "vendredi",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "vendredis",
        "definitions": [
            {
                "text": "Cinquième jour de la semaine.",
                "examples": [
                    "Vendredi, c'est le week-end."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "chose",
        "level": "starter",
        "theme": "describing_things_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📦",
        "form": "noun",
        "plural": "choses",
        "definitions": [
            {
                "text": "Un objet ou une idée.",
                "examples": [
                    "C'est une bonne chose."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "quelque chose",
        "level": "starter",
        "theme": "describing_things_A1",
        "article": "",
        "gender": "",
        "emoji": "📦",
        "form": "pronoun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de something.",
                "examples": []
            }
        ]
    },
    {
        "word": "chemin",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👣",
        "form": "noun",
        "plural": "chemins",
        "definitions": [
            {
                "text": "Petite voie.",
                "examples": [
                    "Le chemin est long."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "est",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "➡️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "La direction où le soleil se lève.",
                "examples": [
                    "Le soleil se lève à l'est."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "nord",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "⬆️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "La direction vers le haut sur une carte.",
                "examples": [
                    "La ville est au nord."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "ouest",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "⬅️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "La direction où le soleil se couche.",
                "examples": [
                    "Le soleil se couche à l'ouest."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "sud",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "⬇️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "La direction vers le bas sur une carte.",
                "examples": [
                    "Nous allons vers le sud."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "bière",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍺",
        "form": "noun",
        "plural": null,
        "subtext": "bière froide, pression",
        "definitions": [
            {
                "text": "Une boisson alcoolisée populaire faite à partir de grains.",
                "examples": [
                    "Il boit une bière le week-end."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "café",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "☕",
        "form": "noun",
        "plural": null,
        "subtext": "café noir, tasse de café",
        "definitions": [
            {
                "text": "Une boisson marron chaude faite à partir de grains de café.",
                "examples": [
                    "Je bois du café le matin.",
                    "Tu veux du sucre dans ton café ?"
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "eau",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🚰",
        "form": "noun",
        "plural": null,
        "subtext": "eau froide, verre d'eau",
        "definitions": [
            {
                "text": "Un liquide clair que nous buvons.",
                "examples": [
                    "S'il vous plaît, buvez de l'eau.",
                    "L'eau est froide."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "jus",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧃",
        "form": "noun",
        "plural": null,
        "subtext": "jus d'orange, jus de pomme",
        "definitions": [
            {
                "text": "Un liquide provenant de fruits ou de légumes.",
                "examples": [
                    "Je veux un verre de jus d'orange."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "soda",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥤",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Une boisson sucrée avec des bulles.",
                "examples": [
                    "Je ne bois pas beaucoup de soda."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "thé",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍵",
        "form": "noun",
        "plural": null,
        "subtext": "thé vert, tasse de thé",
        "definitions": [
            {
                "text": "Une boisson chaude faite avec de l'eau chaude et des feuilles de thé.",
                "examples": [
                    "Voulez-vous une tasse de thé ?",
                    "Elle boit du thé chaque jour."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "vin",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍷",
        "form": "noun",
        "plural": null,
        "subtext": "vin rouge, vin blanc, verre de vin",
        "definitions": [
            {
                "text": "Une boisson alcoolisée faite à partir de raisins.",
                "examples": [
                    "Elle boit un verre de vin le soir."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "bientôt",
        "level": "starter",
        "theme": "duration_expressions_A1",
        "article": "",
        "gender": "",
        "emoji": "🔜",
        "form": "adverb",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de soon.",
                "examples": []
            }
        ]
    },
    {
        "word": "déjà",
        "level": "starter",
        "theme": "duration_expressions_A1",
        "article": "",
        "gender": "",
        "emoji": "⏳",
        "form": "adverb",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de already.",
                "examples": []
            }
        ]
    },
    {
        "word": "encore",
        "level": "starter",
        "theme": "duration_expressions_A1",
        "article": "",
        "gender": "",
        "emoji": "🔁",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Une autre fois.",
                "examples": [
                    "Encore une fois."
                ]
            }
        ]
    },
    {
        "word": "il y a",
        "level": "starter",
        "theme": "duration_expressions_A1",
        "article": "",
        "gender": "",
        "emoji": "🕰️",
        "form": "phrase",
        "plural": "",
        "definitions": [
            {
                "text": "Indique un temps passé.",
                "examples": [
                    "Il y a deux jours."
                ]
            }
        ]
    },
    {
        "word": "maintenant",
        "level": "starter",
        "theme": "duration_expressions_A1",
        "article": "",
        "gender": "",
        "emoji": "⏱️",
        "form": "adverb",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de now.",
                "examples": []
            }
        ]
    },
    {
        "word": "pas encore",
        "level": "starter",
        "theme": "duration_expressions_A1",
        "article": "",
        "gender": "",
        "emoji": "❓",
        "form": "adverb",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de yet.",
                "examples": []
            }
        ]
    },
    {
        "word": "plus tard",
        "level": "starter",
        "theme": "duration_expressions_A1",
        "article": "",
        "gender": "",
        "emoji": "🕙",
        "form": "adverb",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de later.",
                "examples": []
            }
        ]
    },
    {
        "word": "achat",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🛒",
        "form": "noun",
        "plural": "achats",
        "definitions": [
            {
                "text": "Action d'acheter.",
                "examples": [
                    "Un achat utile."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "argent",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "💰",
        "form": "noun",
        "plural": null,
        "subtext": "dépenser de l'argent, économiser de l'argent",
        "definitions": [
            {
                "text": "Pièces ou billets utilisés pour acheter des choses.",
                "examples": [
                    "J'ai de l'argent dans mon sac."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "boutique",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👗",
        "form": "noun",
        "plural": "boutiques",
        "definitions": [
            {
                "text": "Petit magasin.",
                "examples": [
                    "Une jolie boutique."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "cadeau",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎁",
        "form": "noun",
        "plural": "cadeaux",
        "definitions": [
            {
                "text": "Ce que l'on offre à quelqu'un.",
                "examples": [
                    "C'est un cadeau pour toi."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "centre commercial",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏬",
        "form": "noun",
        "plural": "centres commerciaux",
        "definitions": [
            {
                "text": "Lieu avec beaucoup de magasins.",
                "examples": [
                    "Allons au centre commercial."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "commande",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📦",
        "form": "noun",
        "plural": "commandes",
        "definitions": [
            {
                "text": "Achat demandé.",
                "examples": [
                    "Passer une commande."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "demande",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "❓",
        "form": "noun",
        "plural": "demandes",
        "definitions": [
            {
                "text": "Action de demander.",
                "examples": [
                    "La demande est forte."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "livraison",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚚",
        "form": "noun",
        "plural": "livraisons",
        "definitions": [
            {
                "text": "Transport de marchandises.",
                "examples": [
                    "Livraison à domicile."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "magasin",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏪",
        "form": "noun",
        "plural": "magasins",
        "definitions": [
            {
                "text": "Lieu pour acheter.",
                "examples": [
                    "Le magasin est grand."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "marché",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛒",
        "form": "noun",
        "plural": "marchés",
        "definitions": [
            {
                "text": "Lieu pour acheter des produits frais.",
                "examples": [
                    "Allons au marché."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "offre",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🏷️",
        "form": "noun",
        "plural": "offres",
        "definitions": [
            {
                "text": "Proposition de prix.",
                "examples": [
                    "Une offre spéciale."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "portefeuille",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👛",
        "form": "noun",
        "plural": "portefeuilles",
        "definitions": [
            {
                "text": "Objet pour ranger l'argent.",
                "examples": [
                    "J'ai mon portefeuille."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "prix",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏷️",
        "form": "noun",
        "plural": "prix",
        "definitions": [
            {
                "text": "Valeur d'une chose.",
                "examples": [
                    "Quel est le prix ?"
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "produit",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📦",
        "form": "noun",
        "plural": "produits",
        "definitions": [
            {
                "text": "Chose fabriquée.",
                "examples": [
                    "Un nouveau produit."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "vente",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏷️",
        "form": "noun",
        "plural": "ventes",
        "definitions": [
            {
                "text": "Action de vendre.",
                "examples": [
                    "Mise en vente."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "cousin",
        "level": "starter",
        "theme": "extended_family_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧑",
        "form": "noun",
        "plural": "cousins",
        "definitions": [
            {
                "text": "Enfant d'un oncle ou d'une tante.",
                "examples": [
                    "C'est mon cousin."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "grand-mère",
        "level": "starter",
        "theme": "extended_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👵",
        "form": "noun",
        "plural": "grands-mères",
        "definitions": [
            {
                "text": "Mère d'un parent.",
                "examples": [
                    "Ma grand-mère cuisine bien."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "grand-père",
        "level": "starter",
        "theme": "extended_family_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👴",
        "form": "noun",
        "plural": "grands-pères",
        "definitions": [
            {
                "text": "Père d'un parent.",
                "examples": [
                    "Mon grand-père est vieux."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "oncle",
        "level": "starter",
        "theme": "extended_family_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "plural": "oncles",
        "definitions": [
            {
                "text": "Frère du père ou de la mère.",
                "examples": [
                    "Mon oncle vit à Paris."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "tante",
        "level": "starter",
        "theme": "extended_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "plural": "tantes",
        "definitions": [
            {
                "text": "Soeur du père ou de la mère.",
                "examples": [
                    "Ma tante est médecin."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "ensemble",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👫",
        "form": "adverb",
        "opposite": "seul",
        "oppositeEmoji": "🧍",
        "definitions": [
            {
                "text": "Avec une autre personne ou un groupe.",
                "examples": [
                    "Nous dînons ensemble."
                ]
            }
        ]
    },
    {
        "word": "invité",
        "level": "starter",
        "theme": "family_life_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "👤",
        "form": "noun",
        "plural": "invités",
        "definitions": [
            {
                "text": "Personne que l'on reçoit.",
                "examples": [
                    "Nous avons des invités."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "relation",
        "level": "starter",
        "theme": "family_life_A1",
        "article": "la",
        "emoji": "❤️",
        "form": "noun",
        "plural": "relations",
        "subtext": "rapport, lien",
        "definitions": [
            {
                "text": "Une connexion entre deux personnes.",
                "examples": [
                    "Ils ont une bonne relation."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "encore",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "article": "",
        "gender": "",
        "emoji": "🔁",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Une autre fois.",
                "examples": [
                    "Encore une fois."
                ]
            }
        ]
    },
    {
        "word": "habituellement",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "article": "",
        "gender": "",
        "emoji": "🔄",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "D'habitude.",
                "examples": [
                    "D'habitude, je finis à 18h."
                ]
            }
        ]
    },
    {
        "word": "jamais",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "article": "",
        "gender": "",
        "emoji": "🚫",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Aucune fois.",
                "examples": [
                    "Je ne fume jamais."
                ]
            }
        ]
    },
    {
        "word": "quelquefois",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "article": "",
        "gender": "",
        "emoji": "⏱️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Parfois.",
                "examples": [
                    "Il arrive quelquefois en retard."
                ]
            }
        ]
    },
    {
        "word": "souvent",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "article": "",
        "gender": "",
        "emoji": "🔁",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Plusieurs fois.",
                "examples": [
                    "Je vais souvent au cinéma."
                ]
            }
        ]
    },
    {
        "word": "toujours",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "article": "",
        "gender": "",
        "emoji": "♾️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Tout le temps.",
                "examples": [
                    "Je bois toujours de l'eau."
                ]
            }
        ]
    },
    {
        "word": "ananas",
        "level": "starter",
        "theme": "fruits_vegetables_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🍍",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de pineapple.",
                "examples": []
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "brocoli",
        "level": "starter",
        "theme": "fruits_vegetables_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥦",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de broccoli.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "champignon",
        "level": "starter",
        "theme": "fruits_vegetables_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍄",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de mushroom.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "pastèque",
        "level": "starter",
        "theme": "fruits_vegetables_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍉",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de watermelon.",
                "examples": []
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "petits pois",
        "level": "starter",
        "theme": "fruits_vegetables_A1",
        "article": "les",
        "gender": "masculine",
        "emoji": "🫛",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de peas.",
                "examples": []
            }
        ],
        "partitive": "des"
    },
    {
        "word": "armoire",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🚪",
        "form": "noun",
        "plural": "armoires",
        "definitions": [
            {
                "text": "Meuble pour les vêtements.",
                "examples": [
                    "Ranger l'armoire."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "assiette",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "assiettes",
        "definitions": [
            {
                "text": "Objet plat pour manger.",
                "examples": [
                    "Mets l'assiette sur la table."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "bouteille",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍼",
        "form": "noun",
        "plural": "bouteilles",
        "definitions": [
            {
                "text": "Récipient pour les liquides.",
                "examples": [
                    "Une bouteille d'eau."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "boîte",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📦",
        "form": "noun",
        "plural": "boîtes",
        "definitions": [
            {
                "text": "Objet creux pour ranger.",
                "examples": [
                    "Le chat est dans la boîte."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "brosse à dents",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🪥",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Brosse pour se nettoyer les dents.",
                "examples": [
                    "J'ai besoin d'une brosse à dents."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "bureau",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🖥️",
        "form": "noun",
        "plural": "bureaux",
        "definitions": [
            {
                "text": "Table pour travailler.",
                "examples": [
                    "Je suis à mon bureau."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "canapé",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "canapés",
        "definitions": [
            {
                "text": "Grand siège pour plusieurs.",
                "examples": [
                    "Dormir sur le canapé."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "chaise",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🪑",
        "form": "noun",
        "plural": "chaises",
        "subtext": "chaise en bois, s'asseoir sur une chaise",
        "definitions": [
            {
                "text": "Un meuble pour s'asseoir.",
                "examples": [
                    "Assieds-toi sur la chaise."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "clé",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🔑",
        "form": "noun",
        "plural": "clés",
        "definitions": [
            {
                "text": "Un objet métallique pour ouvrir une porte.",
                "examples": [
                    "Où sont mes clés ?"
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "couteau",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🔪",
        "form": "noun",
        "plural": "couteaux",
        "definitions": [
            {
                "text": "Ustensile pour couper.",
                "examples": [
                    "Le couteau coupe bien."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "couverture",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧶",
        "form": "noun",
        "plural": "couvertures",
        "definitions": [
            {
                "text": "Linge chaud pour le lit.",
                "examples": [
                    "Une couverture en laine."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "crayon",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "✏️",
        "form": "noun",
        "plural": "crayons",
        "definitions": [
            {
                "text": "Objet pour écrire ou dessiner.",
                "examples": [
                    "Un crayon de couleur."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "cuillère",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥄",
        "form": "noun",
        "plural": "cuillères",
        "definitions": [
            {
                "text": "Ustensile pour la soupe.",
                "examples": [
                    "Une cuillère de sucre."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "dentifrice",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧴",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Pâte pour se laver les dents.",
                "examples": [
                    "Mets du dentifrice sur la brosse."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "fauteuil",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "fauteuils",
        "definitions": [
            {
                "text": "Siège confortable.",
                "examples": [
                    "S'asseoir dans un fauteuil."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "fenêtre",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🪟",
        "form": "noun",
        "plural": "fenêtres",
        "subtext": "ouvrir la fenêtre, vitrine",
        "definitions": [
            {
                "text": "Une ouverture dans un mur remplie de verre qui laisse entrer la lumière.",
                "examples": [
                    "Ouvrez la fenêtre — il fait chaud."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "four",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🔥",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de oven.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "fourchette",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍴",
        "form": "noun",
        "plural": "fourchettes",
        "definitions": [
            {
                "text": "Ustensile avec des dents.",
                "examples": [
                    "Je mange avec une fourchette."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "horloge",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "⏰",
        "form": "noun",
        "plural": "horloges",
        "definitions": [
            {
                "text": "Objet pour donner l'heure.",
                "examples": [
                    "Regarde l'horloge."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "lampe",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💡",
        "form": "noun",
        "plural": "lampes",
        "definitions": [
            {
                "text": "Objet qui fait de la lumière.",
                "examples": [
                    "Allume la lampe."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "lit",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛏️",
        "form": "noun",
        "plural": "lits",
        "subtext": "lit confortable, aller au lit",
        "definitions": [
            {
                "text": "Un meuble pour dormir.",
                "examples": [
                    "Mon lit est confortable."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "livre",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📖",
        "form": "noun",
        "plural": "livres",
        "definitions": [
            {
                "text": "Des pages avec du texte que l'on lit.",
                "examples": [
                    "Je lis un livre."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "miroir",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🪞",
        "form": "noun",
        "plural": "miroirs",
        "definitions": [
            {
                "text": "Surface qui reflète l'image.",
                "examples": [
                    "Je me regarde dans le miroir."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "oreiller",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "☁️",
        "form": "noun",
        "plural": "oreillers",
        "definitions": [
            {
                "text": "Coussin pour la tête.",
                "examples": [
                    "Un oreiller mou."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "papier",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📄",
        "form": "noun",
        "plural": "papiers",
        "definitions": [
            {
                "text": "Matière en feuilles.",
                "examples": [
                    "Une feuille de papier."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "plat",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥣",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de dish.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "porte",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚪",
        "form": "noun",
        "plural": "portes",
        "subtext": "ouvrir la porte, porte d'entrée",
        "definitions": [
            {
                "text": "Un panneau plat qui s'ouvre et se ferme pour laisser entrer et sortir les gens.",
                "examples": [
                    "S'il vous plaît, fermez la porte."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "robinet",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚰",
        "form": "noun",
        "plural": "robinets",
        "definitions": [
            {
                "text": "Objet pour l'eau.",
                "examples": [
                    "Ferme le robinet."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "réfrigérateur",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧊",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de fridge.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "sac",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👜",
        "form": "noun",
        "plural": "sacs",
        "definitions": [
            {
                "text": "Un contenant pour transporter des choses.",
                "examples": [
                    "J'ai de l'argent dans mon sac."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "savon",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧼",
        "form": "noun",
        "plural": "savons",
        "definitions": [
            {
                "text": "Produit pour se laver.",
                "examples": [
                    "Se laver avec du savon."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "serviette",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧺",
        "form": "noun",
        "plural": "serviettes",
        "definitions": [
            {
                "text": "Linge pour s'essuyer.",
                "examples": [
                    "Une serviette propre."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "shampooing",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧴",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Savon liquide pour les cheveux.",
                "examples": [
                    "Acheter du shampooing."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "stylo",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🖊️",
        "form": "noun",
        "plural": "stylos",
        "definitions": [
            {
                "text": "Un objet utilisé pour écrire avec de l'encre.",
                "examples": [
                    "Puis-je emprunter ton stylo ?"
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "table",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🪑",
        "form": "noun",
        "plural": "tables",
        "subtext": "table de cuisine, sur la table",
        "definitions": [
            {
                "text": "Un meuble utilisé pour manger ou travailler.",
                "examples": [
                    "Le repas est sur la table."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "tasse",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "☕",
        "form": "noun",
        "plural": "tasses",
        "definitions": [
            {
                "text": "Petit récipient avec une anse.",
                "examples": [
                    "Une tasse de café."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "verre",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥛",
        "form": "noun",
        "plural": "verres",
        "definitions": [
            {
                "text": "Récipient pour boire.",
                "examples": [
                    "Un verre d'eau."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "étagère",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "📶",
        "form": "noun",
        "plural": "étagères",
        "definitions": [
            {
                "text": "Planche pour poser des livres.",
                "examples": [
                    "Une étagère pleine."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "avis",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "💬",
        "form": "noun",
        "plural": "avis",
        "definitions": [
            {
                "text": "Ce que l'on croit sur un sujet.",
                "examples": [
                    "Donne-moi ton avis."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "choix",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👉",
        "form": "noun",
        "plural": "choix",
        "definitions": [
            {
                "text": "Action de choisir.",
                "examples": [
                    "C'est ton choix."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "décision",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⚖️",
        "form": "noun",
        "plural": "décisions",
        "definitions": [
            {
                "text": "Ce que l'on décide.",
                "examples": [
                    "Prendre une décision."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "idée",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "💡",
        "form": "noun",
        "plural": "idées",
        "definitions": [
            {
                "text": "Ce que l'on pense.",
                "examples": [
                    "C'est une bonne idée."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "opinion",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🗣️",
        "form": "noun",
        "plural": "opinions",
        "definitions": [
            {
                "text": "Jugement personnel.",
                "examples": [
                    "Une opinion tranchée."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "conseil",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "💡",
        "form": "noun",
        "plural": "conseils",
        "definitions": [
            {
                "text": "Ce qu'on dit pour aider.",
                "examples": [
                    "Donne-moi un conseil."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "merci",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🙏",
        "form": "noun",
        "plural": "mercis",
        "definitions": [
            {
                "text": "Formule pour remercier.",
                "examples": [
                    "Merci beaucoup."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "pardon",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🙇",
        "form": "noun",
        "plural": "pardons",
        "definitions": [
            {
                "text": "Formule pour s'excuser.",
                "examples": [
                    "Pardon, je suis en retard."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "s'il vous plaît",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "article": "",
        "gender": "",
        "emoji": "🙏",
        "form": "phrase",
        "plural": "",
        "definitions": [
            {
                "text": "Formule de politesse.",
                "examples": [
                    "Un café, s'il vous plaît."
                ]
            }
        ]
    },
    {
        "word": "corps",
        "level": "starter",
        "theme": "health_body_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👤",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de body.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "loisir",
        "level": "starter",
        "theme": "hobbies_interests_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎨",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de hobby.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "photo",
        "level": "starter",
        "theme": "hobbies_interests_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📷",
        "form": "noun",
        "plural": "photos",
        "definitions": [
            {
                "text": "Image prise par un appareil.",
                "examples": [
                    "Une photo de famille."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "aspirateur",
        "level": "starter",
        "theme": "household_items_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🧹",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de vacuum cleaner.",
                "examples": []
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "bibliothèque",
        "level": "starter",
        "theme": "household_items_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📚",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Meuble avec des étagères pour les livres.",
                "examples": [
                    "Range le livre dans la bibliothèque."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "fauteuil",
        "level": "starter",
        "theme": "household_items_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛋️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Un siège confortable avec des bras.",
                "examples": [
                    "Mon grand-père est assis dans son fauteuil."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "grille-pain",
        "level": "starter",
        "theme": "household_items_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍞",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de toaster.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "lave-vaisselle",
        "level": "starter",
        "theme": "household_items_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧼",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de dishwasher.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "machine à laver",
        "level": "starter",
        "theme": "household_items_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧺",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de washing machine.",
                "examples": []
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "placard",
        "level": "starter",
        "theme": "household_items_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚪",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Meuble avec des portes pour ranger des choses.",
                "examples": [
                    "Les tasses sont dans le placard."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "tapis",
        "level": "starter",
        "theme": "household_items_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧶",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Épaisse pièce de tissu sur le sol.",
                "examples": [
                    "Il y a un tapis dans la chambre."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "tiroir",
        "level": "starter",
        "theme": "household_items_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🗄️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Partie coulissante d'un meuble.",
                "examples": [
                    "Mes chaussettes sont dans le tiroir."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "télécommande",
        "level": "starter",
        "theme": "household_items_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎮",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de remote control.",
                "examples": []
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "savon",
        "level": "starter",
        "theme": "household_tasks_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧼",
        "form": "noun",
        "plural": "savons",
        "definitions": [
            {
                "text": "Produit pour se laver.",
                "examples": [
                    "Se laver avec du savon."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "ami",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "👫",
        "form": "noun",
        "plural": "amis",
        "definitions": [
            {
                "text": "Une personne que vous aimez et connaissez bien.",
                "examples": [
                    "Elle est mon amie."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "bébé",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👶",
        "form": "noun",
        "plural": "bébés",
        "definitions": [
            {
                "text": "Très jeune enfant.",
                "examples": [
                    "Le bébé dort."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "enfant",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "👶",
        "form": "noun",
        "plural": "enfants",
        "subtext": "gamin, jeune personne",
        "definitions": [
            {
                "text": "Une jeune personne ; un fils ou une fille.",
                "examples": [
                    "Ils ont deux enfants."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "famille",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👪",
        "form": "noun",
        "plural": "familles",
        "definitions": [
            {
                "text": "Un groupe de personnes qui sont liées.",
                "examples": [
                    "Ma famille est grande."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "femme",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "plural": "femmes",
        "definitions": [
            {
                "text": "Femme mariée ou adulte.",
                "examples": [
                    "C'est sa femme."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "fille",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👧",
        "form": "noun",
        "plural": "filles",
        "definitions": [
            {
                "text": "Enfant femelle.",
                "examples": [
                    "C'est ma fille."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "fils",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👦",
        "form": "noun",
        "plural": "fils",
        "definitions": [
            {
                "text": "Enfant mâle.",
                "examples": [
                    "C'est mon fils."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "frère",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👦",
        "form": "noun",
        "plural": "frères",
        "definitions": [
            {
                "text": "Garçon né des mêmes parents.",
                "examples": [
                    "Mon frère a dix ans."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "maman",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "La mère.",
                "examples": [
                    "Je vais demander à maman."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "mari",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "plural": "maris",
        "opposite": "femme",
        "oppositeEmoji": "👩",
        "subtext": "époux, partenaire",
        "definitions": [
            {
                "text": "Un homme marié, par rapport à sa femme.",
                "examples": [
                    "Son mari est médecin."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "mère",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "plural": "mères",
        "subtext": "maman",
        "definitions": [
            {
                "text": "La femme qui est votre parent.",
                "examples": [
                    "Ma mère est gentille."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "papa",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Le père.",
                "examples": [
                    "Mon papa est à la maison."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "parent",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👪",
        "form": "noun",
        "plural": "parents",
        "subtext": "mère ou père",
        "definitions": [
            {
                "text": "Une mère ou un père.",
                "examples": [
                    "Mes parents vivent dans le nord."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "père",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "plural": "pères",
        "subtext": "papa",
        "definitions": [
            {
                "text": "L'homme qui est votre parent.",
                "examples": [
                    "Mon père est au travail."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "soeur",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👧",
        "form": "noun",
        "plural": "soeurs",
        "definitions": [
            {
                "text": "Fille née des mêmes parents.",
                "examples": [
                    "J'ai une soeur."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "fourmi",
        "level": "starter",
        "theme": "insects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🐜",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Un petit insecte qui vit en groupe.",
                "examples": [
                    "Il y a des fourmis dans le jardin."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "papillon",
        "level": "starter",
        "theme": "insects_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🦋",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Insecte avec quatre ailes colorées.",
                "examples": [
                    "Regarde ce beau papillon."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "baskets",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "les",
        "gender": "feminine",
        "emoji": "👟",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de trainers.",
                "examples": []
            }
        ],
        "partitive": "des"
    },
    {
        "word": "bonnet",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧣",
        "form": "noun",
        "plural": "bonnets",
        "definitions": [
            {
                "text": "Chapeau en laine.",
                "examples": [
                    "Un bonnet chaud."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "bottes",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "les",
        "gender": "feminine",
        "emoji": "🥾",
        "form": "noun",
        "plural": "bottes",
        "definitions": [
            {
                "text": "Chaussures hautes.",
                "examples": [
                    "Des bottes pour la pluie."
                ]
            }
        ],
        "partitive": "des"
    },
    {
        "word": "casquette",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧢",
        "form": "noun",
        "plural": "casquettes",
        "definitions": [
            {
                "text": "Chapeau de sport.",
                "examples": [
                    "Mettre une casquette."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "ceinture",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎗️",
        "form": "noun",
        "plural": "ceintures",
        "definitions": [
            {
                "text": "Pour tenir le pantalon.",
                "examples": [
                    "Une ceinture en cuir."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "chapeau",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👒",
        "form": "noun",
        "plural": "chapeaux",
        "definitions": [
            {
                "text": "Ce que l'on porte sur la tête.",
                "examples": [
                    "Elle porte un beau chapeau."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "chaussettes",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "les",
        "gender": "feminine",
        "emoji": "🧦",
        "form": "noun",
        "plural": "chaussettes",
        "definitions": [
            {
                "text": "Vêtements pour les pieds.",
                "examples": [
                    "Mes chaussettes sont bleues."
                ]
            }
        ],
        "partitive": "des"
    },
    {
        "word": "chaussure",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👟",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de shoe.",
                "examples": []
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "chaussures",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "les",
        "gender": "feminine",
        "emoji": "👟",
        "form": "noun",
        "plural": "chaussures",
        "definitions": [
            {
                "text": "Ce que l'on porte aux pieds.",
                "examples": [
                    "Mets tes chaussures."
                ]
            }
        ],
        "partitive": "des"
    },
    {
        "word": "chemise",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👔",
        "form": "noun",
        "plural": "chemises",
        "definitions": [
            {
                "text": "Haut à boutons.",
                "examples": [
                    "Une chemise blanche."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "costume",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👔",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de suit.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "cravate",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👔",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de tie.",
                "examples": []
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "gants",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "les",
        "gender": "masculine",
        "emoji": "🧤",
        "form": "noun",
        "plural": "gants",
        "definitions": [
            {
                "text": "Pour les mains.",
                "examples": [
                    "Une paire de gants."
                ]
            }
        ],
        "partitive": "des"
    },
    {
        "word": "jean",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👖",
        "form": "noun",
        "plural": "jeans",
        "definitions": [
            {
                "text": "Pantalon de toile bleue.",
                "examples": [
                    "Porter un jean."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "jupe",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👗",
        "form": "noun",
        "plural": "jupes",
        "definitions": [
            {
                "text": "Vêtement qui couvre les hanches.",
                "examples": [
                    "Une jupe courte."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "maillot de bain",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🩱",
        "form": "noun",
        "plural": "maillots de bain",
        "definitions": [
            {
                "text": "Pour nager.",
                "examples": [
                    "Prendre son maillot."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "manteau",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧥",
        "form": "noun",
        "plural": "manteaux",
        "definitions": [
            {
                "text": "Vêtement chaud pour dehors.",
                "examples": [
                    "Mets ton manteau."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "pantalon",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👖",
        "form": "noun",
        "plural": "pantalons",
        "definitions": [
            {
                "text": "Un vêtement qui couvre les jambes séparément.",
                "examples": [
                    "J'ai besoin d'un nouveau pantalon."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "pull",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧶",
        "form": "noun",
        "plural": "pulls",
        "definitions": [
            {
                "text": "Vêtement chaud en laine.",
                "examples": [
                    "Je mets un pull."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "pyjama",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛌",
        "form": "noun",
        "plural": "pyjamas",
        "definitions": [
            {
                "text": "Pour dormir.",
                "examples": [
                    "Mettre son pyjama."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "robe",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👗",
        "form": "noun",
        "plural": "robes",
        "definitions": [
            {
                "text": "Vêtement féminin d'un seul morceau.",
                "examples": [
                    "Elle a une jolie robe."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "short",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🩳",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de shorts.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "t-shirt",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👕",
        "form": "noun",
        "plural": "t-shirts",
        "definitions": [
            {
                "text": "Un haut léger à manches courtes.",
                "examples": [
                    "Je porte un t-shirt blanc."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "veste",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧥",
        "form": "noun",
        "plural": "vestes",
        "definitions": [
            {
                "text": "Petit manteau.",
                "examples": [
                    "Une veste légère."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "vêtement",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👕",
        "form": "noun",
        "plural": "vêtements",
        "definitions": [
            {
                "text": "Ce que l'on porte.",
                "examples": [
                    "Un nouveau vêtement."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "écharpe",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🧣",
        "form": "noun",
        "plural": "écharpes",
        "definitions": [
            {
                "text": "Pour le cou.",
                "examples": [
                    "Porter une écharpe."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "acteur",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🎭",
        "form": "noun",
        "plural": "acteurs",
        "definitions": [
            {
                "text": "Personne qui joue au cinéma.",
                "examples": [
                    "C'est un acteur célèbre."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "agent de police",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "👮",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de police officer.",
                "examples": []
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "artiste",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🎨",
        "form": "noun",
        "plural": "artistes",
        "definitions": [
            {
                "text": "Personne qui fait de l'art.",
                "examples": [
                    "Elle est une grande artiste."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "chef",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👨‍🍳",
        "form": "noun",
        "plural": "chefs",
        "subtext": "chef de cuisine, cuisinier",
        "definitions": [
            {
                "text": "Un cuisinier professionnel, surtout le chef de cuisine d'un restaurant.",
                "examples": [
                    "Le chef prépare une excellente cuisine."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "conducteur",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚗",
        "form": "noun",
        "plural": "conducteurs",
        "subtext": "chauffeur de bus, chauffeur de taxi",
        "definitions": [
            {
                "text": "Une personne qui conduit un véhicule comme métier.",
                "examples": [
                    "Le chauffeur de bus était amical."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "dentiste",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de dentist.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "directeur",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧑‍💼",
        "form": "noun",
        "plural": "directeurs",
        "subtext": "manager, gérant",
        "definitions": [
            {
                "text": "Une personne responsable d'une équipe ou d'une entreprise.",
                "examples": [
                    "Mon directeur travaille de très longues heures."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "fermier",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👨‍🌾",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de farmer.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "infirmier",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "plural": "infirmiers",
        "subtext": "infirmière, soignant",
        "definitions": [
            {
                "text": "Une personne formée pour soigner les malades ou les blessés.",
                "examples": [
                    "L'infirmier vérifie votre tension artérielle."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "mécanicien",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧑‍🔧",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de mechanic.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "médecin",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "le",
        "gender": "masculine",
        "numberPlural": "2 médecin",
        "answer": "deux médecins",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "plural": "médecins",
        "subtext": "voir un médecin, médecin de famille",
        "definitions": [
            {
                "text": "Une personne qui soigne les gens malades.",
                "examples": [
                    "Le médecin travaille à l'hôpital.",
                    "Je dois voir un médecin."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "métier",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👔",
        "form": "noun",
        "plural": "métiers",
        "definitions": [
            {
                "text": "Profession.",
                "examples": [
                    "Quel est ton métier ?"
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "pilote",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧑‍✈️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de pilot.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "pompier",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👩‍🚒",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de firefighter.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "professeur",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧑‍🏫",
        "form": "noun",
        "plural": "professeurs",
        "subtext": "professeur de français, professeur d'école",
        "definitions": [
            {
                "text": "Une personne qui aide à apprendre.",
                "examples": [
                    "Le professeur parle à la classe.",
                    "C'est un bon professeur."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "serveur",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🤵",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de waiter.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "serveuse",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👩‍🍳",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de waitress.",
                "examples": []
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "soldat",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🪖",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de soldier.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "travail",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "💼",
        "form": "noun",
        "plural": "travaux",
        "definitions": [
            {
                "text": "Ce que l'on fait pour gagner sa vie.",
                "examples": [
                    "Je vais au travail."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "bol",
        "level": "starter",
        "theme": "kitchen_items_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥣",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de bowl.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "bouilloire",
        "level": "starter",
        "theme": "kitchen_items_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🫖",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Récipient pour faire bouillir l'eau.",
                "examples": [
                    "La bouilloire chante."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "marmite",
        "level": "starter",
        "theme": "kitchen_items_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍲",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Récipient profond pour cuire la soupe.",
                "examples": [
                    "La marmite est pleine de soupe."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "poêle",
        "level": "starter",
        "theme": "kitchen_items_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍳",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Récipient en métal pour cuire les aliments.",
                "examples": [
                    "Mets la poêle sur le feu."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "camarade de classe",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "plural": "camarades de classe",
        "definitions": [
            {
                "text": "Personne dans la même classe.",
                "examples": [
                    "Mon camarade de classe est sympa."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "devoirs",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "les",
        "gender": "masculine",
        "emoji": "📝",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Travail à faire à la maison pour l'école.",
                "examples": [
                    "Faire ses devoirs."
                ]
            }
        ],
        "partitive": "des"
    },
    {
        "word": "erreur",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "❌",
        "form": "noun",
        "plural": "erreurs",
        "definitions": [
            {
                "text": "Faute.",
                "examples": [
                    "Faire une erreur."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "faute",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⚠️",
        "form": "noun",
        "plural": "fautes",
        "definitions": [
            {
                "text": "Manquement à une règle.",
                "examples": [
                    "Une faute de français."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "langue",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🗣️",
        "form": "noun",
        "plural": "langues",
        "definitions": [
            {
                "text": "Ce qu'on parle.",
                "examples": [
                    "Le français est une langue."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "leçon",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📚",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Un temps d'apprentissage avec un professeur.",
                "examples": [
                    "J'ai une leçon de français."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "mot",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📝",
        "form": "noun",
        "plural": "mots",
        "definitions": [
            {
                "text": "Unité de langage.",
                "examples": [
                    "Un mot difficile."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "phrase",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📝",
        "form": "noun",
        "plural": "phrases",
        "definitions": [
            {
                "text": "Ensemble de mots.",
                "examples": [
                    "Fais une phrase."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "étudiant",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🧑‍🎓",
        "form": "noun",
        "plural": "étudiants",
        "definitions": [
            {
                "text": "Personne qui étudie.",
                "examples": [
                    "Je suis étudiant."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "aire de jeux",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🛝",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de playground.",
                "examples": []
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "cadeau",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎁",
        "form": "noun",
        "plural": "cadeaux",
        "definitions": [
            {
                "text": "Objet offert.",
                "examples": [
                    "Un cadeau d'anniversaire."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "exercice",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "article": "l'",
        "emoji": "🏋️",
        "form": "noun",
        "plural": "exercices",
        "definitions": [
            {
                "text": "Activité physique qui vous maintient en forme et en bonne santé.",
                "examples": [
                    "Je fais de l'exercice trois fois par semaine."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "fête",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎉",
        "form": "noun",
        "plural": "fêtes",
        "definitions": [
            {
                "text": "Moment pour s'amuser ensemble.",
                "examples": [
                    "Bonne fête !"
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "jeu",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎮",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de game.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "temps libre",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎮",
        "form": "noun",
        "plural": null,
        "subtext": "loisirs, détente",
        "definitions": [
            {
                "text": "Moment où vous ne travaillez pas et pouvez faire ce que vous voulez.",
                "examples": [
                    "Je lis des livres pendant mon temps libre."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "vacances",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "article": "les",
        "emoji": "🏖️",
        "form": "noun",
        "plural": "vacances",
        "definitions": [
            {
                "text": "Une période de temps loin du travail quand vous voyagez ou vous détendez.",
                "examples": [
                    "Nous avons des vacances en juillet."
                ]
            }
        ],
        "partitive": "des"
    },
    {
        "word": "banque",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏦",
        "form": "noun",
        "plural": "banques",
        "subtext": "compte bancaire, aller à la banque",
        "definitions": [
            {
                "text": "Un endroit où les gens gardent de l'argent et effectuent des transactions financières.",
                "examples": [
                    "La banque est près de mon bureau."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "café",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "☕",
        "form": "noun",
        "plural": "cafés",
        "definitions": [
            {
                "text": "Lieu où l'on boit du café.",
                "examples": [
                    "Allons au café."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "cafétéria",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍴",
        "form": "noun",
        "plural": "cafétérias",
        "definitions": [
            {
                "text": "Petit restaurant libre-service.",
                "examples": [
                    "On mange à la cafétéria."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "endroit",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "📍",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de place.",
                "examples": []
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "gare",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚉",
        "form": "noun",
        "plural": "gares",
        "subtext": "gare ferroviaire, station de bus",
        "definitions": [
            {
                "text": "Un bâtiment où les trains ou les bus s'arrêtent pour les passagers.",
                "examples": [
                    "La gare est à dix minutes d'ici."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "hôpital",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏥",
        "form": "noun",
        "plural": "hôpitaux",
        "subtext": "aller à l'hôpital, lit d'hôpital",
        "definitions": [
            {
                "text": "Un endroit où les malades ou les blessés reçoivent des soins médicaux.",
                "examples": [
                    "Il est allé à l'hôpital en ambulance."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "magasin",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛒",
        "form": "noun",
        "plural": "magasins",
        "definitions": [
            {
                "text": "Un endroit où vous pouvez acheter des choses.",
                "examples": [
                    "Le magasin est ouvert."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "marché",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛒",
        "form": "noun",
        "plural": "marchés",
        "definitions": [
            {
                "text": "Lieu pour acheter des produits frais.",
                "examples": [
                    "Allons au marché."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "parc",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🌳",
        "form": "noun",
        "plural": "parcs",
        "definitions": [
            {
                "text": "Un jardin public où les gens vont marcher et se détendre.",
                "examples": [
                    "Marchons dans le parc."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "pharmacie",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💊",
        "form": "noun",
        "plural": "pharmacies",
        "definitions": [
            {
                "text": "Lieu pour acheter des médicaments.",
                "examples": [
                    "Où est la pharmacie ?"
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "restaurant",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍴",
        "form": "noun",
        "plural": "restaurants",
        "subtext": "restaurant italien, aller au restaurant",
        "definitions": [
            {
                "text": "Un endroit où l'on paie pour manger des repas.",
                "examples": [
                    "Nous allons au restaurant le vendredi."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "supermarché",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛒",
        "form": "noun",
        "plural": "supermarchés",
        "subtext": "aller au supermarché",
        "definitions": [
            {
                "text": "Un grand magasin vendant de la nourriture et d'autres articles ménagers.",
                "examples": [
                    "Je vais au supermarché le samedi."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "école",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🏫",
        "form": "noun",
        "plural": "écoles",
        "definitions": [
            {
                "text": "Un endroit où les enfants vont pour apprendre.",
                "examples": [
                    "Mon école est près de ma maison."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "partenaire",
        "level": "starter",
        "theme": "marital_status_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "💑",
        "form": "noun",
        "plural": "partenaires",
        "subtext": "mari, femme, copain, copine",
        "definitions": [
            {
                "text": "La personne avec qui vous vivez ou êtes en couple.",
                "examples": [
                    "Mon partenaire travaille ici."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "petit ami",
        "level": "starter",
        "theme": "marital_status_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "plural": "petits amis",
        "definitions": [
            {
                "text": "Copain amoureux.",
                "examples": [
                    "Mon petit ami est là."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "petite amie",
        "level": "starter",
        "theme": "marital_status_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "plural": "petites amies",
        "definitions": [
            {
                "text": "Copine amoureuse.",
                "examples": [
                    "Sa petite amie est française."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "collation",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍪",
        "form": "noun",
        "plural": "collations",
        "definitions": [
            {
                "text": "Petit repas.",
                "examples": [
                    "Prendre une collation."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "déjeuner",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍱",
        "form": "noun",
        "plural": "déjeuners",
        "definitions": [
            {
                "text": "Un repas mangé au milieu de la journée.",
                "examples": [
                    "Je mange mon déjeuner à une heure."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "dîner",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "dîners",
        "definitions": [
            {
                "text": "Le repas principal de la journée, généralement le soir.",
                "examples": [
                    "Le dîner est à huit heures."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "goûter",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍪",
        "form": "noun",
        "plural": "goûters",
        "definitions": [
            {
                "text": "Petit repas l'après-midi.",
                "examples": [
                    "Les enfants prennent le goûter."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "petit-déjeuner",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍳",
        "form": "noun",
        "plural": "petits-déjeuners",
        "definitions": [
            {
                "text": "Le premier repas de la journée.",
                "examples": [
                    "Le petit-déjeuner est à sept heures."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "souper",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥣",
        "form": "noun",
        "plural": "soupers",
        "definitions": [
            {
                "text": "Dernier repas du soir.",
                "examples": [
                    "Prendre le souper."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "avion",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "plural": "avions",
        "subtext": "prendre l'avion, vol",
        "definitions": [
            {
                "text": "Un véhicule avec des ailes qui vole dans les airs.",
                "examples": [
                    "L'avion atterrit à neuf heures."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "bateau",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "⛵",
        "form": "noun",
        "plural": "bateaux",
        "definitions": [
            {
                "text": "Véhicule pour aller sur l'eau.",
                "examples": [
                    "Le bateau est sur la mer."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "bus",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚌",
        "form": "noun",
        "plural": "bus",
        "subtext": "prendre le bus, arrêt de bus",
        "definitions": [
            {
                "text": "Un grand véhicule qui transporte beaucoup de gens.",
                "examples": [
                    "Je prends le bus pour aller au travail."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "camion",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚚",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de truck.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "moto",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏍️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de motorbike.",
                "examples": []
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "taxi",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚕",
        "form": "noun",
        "plural": "taxis",
        "definitions": [
            {
                "text": "Voiture avec chauffeur.",
                "examples": [
                    "Appeler un taxi."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "train",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚆",
        "form": "noun",
        "plural": "trains",
        "subtext": "prendre le train, par le train, gare",
        "definitions": [
            {
                "text": "Un véhicule qui circule sur des rails.",
                "examples": [
                    "Le train est rapide."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "trottinette",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛴",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de scooter.",
                "examples": []
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "vitesse",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏎️",
        "form": "noun",
        "plural": "vitesses",
        "definitions": [
            {
                "text": "Rapidité du mouvement.",
                "examples": [
                    "Limiter la vitesse."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "voiture",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚗",
        "form": "noun",
        "plural": "voitures",
        "subtext": "conduire une voiture, voiture rapide",
        "definitions": [
            {
                "text": "Un véhicule avec quatre roues et un moteur.",
                "examples": [
                    "Sa voiture est rouge."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "vélo",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚲",
        "form": "noun",
        "plural": "vélos",
        "subtext": "bicyclette, faire du vélo",
        "definitions": [
            {
                "text": "Un véhicule à deux roues que l'on conduit en poussant des pédales.",
                "examples": [
                    "Il va au travail à vélo."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "banque",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏢",
        "form": "noun",
        "plural": "banques",
        "definitions": [
            {
                "text": "Lieu de l'argent.",
                "examples": [
                    "Je vais à la banque."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "billet",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "💵",
        "form": "noun",
        "plural": "billets",
        "definitions": [
            {
                "text": "Argent en papier.",
                "examples": [
                    "Un billet de dix euros."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "carte bancaire",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💳",
        "form": "noun",
        "plural": "cartes bancaires",
        "definitions": [
            {
                "text": "Carte pour payer.",
                "examples": [
                    "Je paie par carte."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "compte",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏦",
        "form": "noun",
        "plural": "comptes",
        "definitions": [
            {
                "text": "Compte en banque.",
                "examples": [
                    "Ouvrir un compte."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "coût",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "le",
        "emoji": "💰",
        "form": "noun",
        "plural": "coûts",
        "definitions": [
            {
                "text": "Le montant d'argent nécessaire pour acheter quelque chose.",
                "examples": [
                    "Le coût de l'appartement est élevé."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "dépense",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💸",
        "form": "noun",
        "plural": "dépenses",
        "definitions": [
            {
                "text": "Argent que l'on sort.",
                "examples": [
                    "Réduire les dépenses."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "espèces",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "les",
        "gender": "feminine",
        "emoji": "💵",
        "form": "noun",
        "plural": "espèces",
        "definitions": [
            {
                "text": "Argent liquide.",
                "examples": [
                    "Je n'ai pas d'espèces."
                ]
            }
        ],
        "partitive": "des"
    },
    {
        "word": "facture",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💳",
        "form": "noun",
        "plural": "factures",
        "definitions": [
            {
                "text": "Papier demandant paiement.",
                "examples": [
                    "Je paie mes factures."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "monnaie",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🪙",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Pièces d'argent.",
                "examples": [
                    "Avez-vous de la monnaie ?"
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "paiement",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "💳",
        "form": "noun",
        "plural": "paiements",
        "definitions": [
            {
                "text": "Action de payer.",
                "examples": [
                    "Paiement par carte."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "prix",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "le",
        "emoji": "🏷️",
        "form": "noun",
        "plural": "prix",
        "definitions": [
            {
                "text": "Le montant d'argent que vous payez pour quelque chose.",
                "examples": [
                    "Le prix de la nourriture est élevé."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "reçu",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📄",
        "form": "noun",
        "plural": "reçus",
        "definitions": [
            {
                "text": "Papier prouvant le paiement.",
                "examples": [
                    "Gardez le reçu."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "salaire",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "le",
        "emoji": "💰",
        "form": "noun",
        "plural": "salaires",
        "subtext": "paie, rémunération",
        "definitions": [
            {
                "text": "L'argent qu'une personne gagne de son travail chaque mois.",
                "examples": [
                    "Son salaire est bon."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "ticket",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎟️",
        "form": "noun",
        "plural": "tickets",
        "definitions": [
            {
                "text": "Billet pour le bus ou cinéma.",
                "examples": [
                    "Un ticket de métro."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "épargne",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "💰",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Argent économisé.",
                "examples": [
                    "Mes épargnes."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "août",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏖️",
        "form": "noun",
        "plural": "aoûts",
        "definitions": [
            {
                "text": "Huitième mois de l'année.",
                "examples": [
                    "Il fait chaud en août."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "avril",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🌧️",
        "form": "noun",
        "plural": "avrils",
        "definitions": [
            {
                "text": "Quatrième mois de l'année.",
                "examples": [
                    "En avril, ne te découvre pas d'un fil."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "décembre",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎄",
        "form": "noun",
        "plural": "décembres",
        "definitions": [
            {
                "text": "Douzième mois de l'année.",
                "examples": [
                    "Noël est en décembre."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "février",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "❄️",
        "form": "noun",
        "plural": "févriers",
        "definitions": [
            {
                "text": "Deuxième mois de l'année.",
                "examples": [
                    "Février est court."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "janvier",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "❄️",
        "form": "noun",
        "plural": "janviers",
        "definitions": [
            {
                "text": "Premier mois de l'année.",
                "examples": [
                    "En janvier, il fait froid."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "juillet",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "plural": "juillets",
        "definitions": [
            {
                "text": "Septième mois de l'année.",
                "examples": [
                    "Je pars en vacances en juillet."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "juin",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "plural": "juins",
        "definitions": [
            {
                "text": "Sixième mois de l'année.",
                "examples": [
                    "L'été commence en juin."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "mai",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🌸",
        "form": "noun",
        "plural": "mais",
        "definitions": [
            {
                "text": "Cinquième mois de l'année.",
                "examples": [
                    "Fais ce qu'il te plaît en mai."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "mars",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🌱",
        "form": "noun",
        "plural": "mars",
        "definitions": [
            {
                "text": "Troisième mois de l'année.",
                "examples": [
                    "Le printemps commence en mars."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "novembre",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🌫️",
        "form": "noun",
        "plural": "novembres",
        "definitions": [
            {
                "text": "Onzième mois de l'année.",
                "examples": [
                    "Il pleut souvent en novembre."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "octobre",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🎃",
        "form": "noun",
        "plural": "octobres",
        "definitions": [
            {
                "text": "Dixième mois de l'année.",
                "examples": [
                    "Halloween est en octobre."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "septembre",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍂",
        "form": "noun",
        "plural": "septembres",
        "definitions": [
            {
                "text": "Neuvième mois de l'année.",
                "examples": [
                    "La rentrée est en septembre."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "chanson",
        "level": "starter",
        "theme": "music_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎤",
        "form": "noun",
        "plural": "chansons",
        "definitions": [
            {
                "text": "Paroles sur de la musique.",
                "examples": [
                    "C'est une belle chanson."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "concert",
        "level": "starter",
        "theme": "music_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎵",
        "form": "noun",
        "plural": "concerts",
        "definitions": [
            {
                "text": "Spectacle musical.",
                "examples": [
                    "Un concert de piano."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "groupe",
        "level": "starter",
        "theme": "music_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎸",
        "form": "noun",
        "plural": "groupes",
        "definitions": [
            {
                "text": "Ensemble de musiciens.",
                "examples": [
                    "Un groupe de rock."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "guitare",
        "level": "starter",
        "theme": "music_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎸",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de guitar.",
                "examples": []
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "musique",
        "level": "starter",
        "theme": "music_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎵",
        "form": "noun",
        "plural": "musiques",
        "definitions": [
            {
                "text": "Sons mélodieux.",
                "examples": [
                    "J'écoute de la musique."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "piano",
        "level": "starter",
        "theme": "music_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎹",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Un grand instrument avec des touches blanches et noires.",
                "examples": [
                    "Elle joue du piano."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "batterie",
        "level": "starter",
        "theme": "musical_instruments_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥁",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Ensemble d'instruments que l'on frappe avec des baguettes.",
                "examples": [
                    "Elle joue de la batterie dans un groupe."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "flûte",
        "level": "starter",
        "theme": "musical_instruments_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🪈",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Instrument en forme de tuyau avec des trous.",
                "examples": [
                    "Elle joue de la flûte."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "violon",
        "level": "starter",
        "theme": "musical_instruments_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎻",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Instrument à quatre cordes que l'on joue avec un archet.",
                "examples": [
                    "Il joue du violon."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "au revoir",
        "level": "starter",
        "theme": "name_greeting_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👋",
        "form": "noun",
        "plural": "au revoir",
        "definitions": [
            {
                "text": "Salutation en partant.",
                "examples": [
                    "Au revoir, monsieur."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "bonjour",
        "level": "starter",
        "theme": "name_greeting_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👋",
        "form": "noun",
        "plural": "bonjours",
        "definitions": [
            {
                "text": "Salutation le jour.",
                "examples": [
                    "Bonjour à tous."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "madame",
        "level": "starter",
        "theme": "name_greeting_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "plural": "mesdames",
        "definitions": [
            {
                "text": "Femme adulte.",
                "examples": [
                    "Merci, madame."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "monsieur",
        "level": "starter",
        "theme": "name_greeting_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "plural": "messieurs",
        "definitions": [
            {
                "text": "Homme adulte.",
                "examples": [
                    "Bonjour, monsieur."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "nom",
        "level": "starter",
        "theme": "name_greeting_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🆔",
        "form": "noun",
        "plural": "noms",
        "definitions": [
            {
                "text": "Comment on s'appelle.",
                "examples": [
                    "Mon nom est Dupont."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "air",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🌬️",
        "form": "noun",
        "plural": "airs",
        "definitions": [
            {
                "text": "Gaz que l'on respire.",
                "examples": [
                    "L'air est pur ici."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "arc-en-ciel",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🌈",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de rainbow.",
                "examples": []
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "campagne",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚜",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Lieu hors de la ville.",
                "examples": [
                    "Vivre à la campagne."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "ciel",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🌌",
        "form": "noun",
        "plural": "cieux",
        "definitions": [
            {
                "text": "Espace au-dessus de la Terre.",
                "examples": [
                    "Le ciel est bleu."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "colline",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⛰️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Une petite montagne.",
                "examples": [
                    "La maison est sur la colline."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "désert",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏜️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de desert.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "forêt",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌲",
        "form": "noun",
        "plural": "forêts",
        "definitions": [
            {
                "text": "Lieu avec beaucoup d'arbres.",
                "examples": [
                    "Marchons dans la forêt."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "herbe",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🌱",
        "form": "noun",
        "plural": "herbes",
        "definitions": [
            {
                "text": "Petites plantes vertes au sol.",
                "examples": [
                    "L'herbe est verte."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "jungle",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌴",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de jungle.",
                "examples": []
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "lac",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏞️",
        "form": "noun",
        "plural": "lacs",
        "definitions": [
            {
                "text": "Grande étendue d'eau douce.",
                "examples": [
                    "Le lac est calme."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "lune",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌙",
        "form": "noun",
        "plural": "lunes",
        "definitions": [
            {
                "text": "Astre qui brille la nuit.",
                "examples": [
                    "La lune est ronde."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "mer",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌊",
        "form": "noun",
        "plural": "mers",
        "definitions": [
            {
                "text": "Vaste étendue d'eau salée.",
                "examples": [
                    "Je nage dans la mer."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "monde",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🌍",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "La Terre entière.",
                "examples": [
                    "Tout le monde est là."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "montagne",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏔️",
        "form": "noun",
        "plural": "montagnes",
        "definitions": [
            {
                "text": "Grande masse de terre élevée.",
                "examples": [
                    "La montagne est haute."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "nuage",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "☁️",
        "form": "noun",
        "plural": "nuages",
        "definitions": [
            {
                "text": "Masse blanche dans le ciel.",
                "examples": [
                    "Il y a des nuages."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "océan",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🌊",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de ocean.",
                "examples": []
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "orage",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "⛈️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de storm.",
                "examples": []
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "plage",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏖️",
        "form": "noun",
        "plural": "plages",
        "definitions": [
            {
                "text": "Bord de mer avec du sable.",
                "examples": [
                    "Allons à la plage."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "planète",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🪐",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de planet.",
                "examples": []
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "pont",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🌉",
        "form": "noun",
        "plural": "ponts",
        "definitions": [
            {
                "text": "Passage au-dessus de l'eau.",
                "examples": [
                    "Le pont est vieux."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "rivière",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏞️",
        "form": "noun",
        "plural": "rivières",
        "definitions": [
            {
                "text": "Cours d'eau.",
                "examples": [
                    "L'eau de la rivière est froide."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "terre",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌍",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de earth.",
                "examples": []
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "étoile",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "⭐",
        "form": "noun",
        "plural": "étoiles",
        "definitions": [
            {
                "text": "Point lumineux dans le ciel la nuit.",
                "examples": [
                    "Je regarde les étoiles."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "île",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🏝️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Une terre entourée d'eau.",
                "examples": [
                    "Ils vivent sur une île."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "nombre",
        "level": "starter",
        "theme": "numbers_0_9_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🔢",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de number.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "adulte",
        "level": "starter",
        "theme": "people_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🧑",
        "form": "noun",
        "plural": "adultes",
        "definitions": [
            {
                "text": "Personne qui n'est plus un enfant.",
                "examples": [
                    "Un billet pour adulte."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "fille",
        "level": "starter",
        "theme": "people_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👧",
        "form": "noun",
        "plural": "filles",
        "definitions": [
            {
                "text": "Enfant femelle.",
                "examples": [
                    "C'est une gentille fille."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "garçon",
        "level": "starter",
        "theme": "people_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👦",
        "form": "noun",
        "plural": "garçons",
        "definitions": [
            {
                "text": "Enfant mâle.",
                "examples": [
                    "C'est un petit garçon."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "gens",
        "level": "starter",
        "theme": "people_A1",
        "article": "les",
        "gender": "masculine",
        "emoji": "👥",
        "form": "noun",
        "plural": "gens",
        "definitions": [
            {
                "text": "Personnes en général.",
                "examples": [
                    "Il y a beaucoup de gens."
                ]
            }
        ],
        "partitive": "des"
    },
    {
        "word": "personne",
        "level": "starter",
        "theme": "people_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👤",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de person.",
                "examples": []
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "quelqu'un",
        "level": "starter",
        "theme": "people_A1",
        "article": "",
        "gender": "",
        "emoji": "👤",
        "form": "pronoun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de someone.",
                "examples": []
            }
        ]
    },
    {
        "word": "tout le monde",
        "level": "starter",
        "theme": "people_A1",
        "article": "",
        "gender": "",
        "emoji": "👥",
        "form": "pronoun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de everyone.",
                "examples": []
            }
        ]
    },
    {
        "word": "anniversaire",
        "level": "starter",
        "theme": "personal_identity_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🎂",
        "form": "noun",
        "plural": "anniversaires",
        "definitions": [
            {
                "text": "Jour de la naissance.",
                "examples": [
                    "Bon anniversaire !"
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "vie",
        "level": "starter",
        "theme": "personal_identity_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌱",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de life.",
                "examples": []
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "animal domestique",
        "level": "starter",
        "theme": "pets_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🐾",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de pet.",
                "examples": []
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "hamster",
        "level": "starter",
        "theme": "pets_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🐹",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Un petit animal avec de la fourrure douce.",
                "examples": [
                    "J'ai un hamster domestique."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "lézard",
        "level": "starter",
        "theme": "pets_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🦎",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Un petit reptile avec un long corps.",
                "examples": [
                    "J'ai vu un lézard sur le mur."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "tortue",
        "level": "starter",
        "theme": "pets_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🐢",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Un animal lent avec une carapace dure.",
                "examples": [
                    "La tortue nage dans l'étang."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "femme",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "article": "la",
        "numberPlural": "2 femme",
        "answer": "deux femmes",
        "emoji": "👩",
        "form": "noun",
        "plural": "femmes",
        "definitions": [
            {
                "text": "Une personne femelle adulte.",
                "examples": [
                    "Cette femme est médecin."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "homme",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "article": "l'",
        "numberPlural": "2 homme",
        "answer": "deux hommes",
        "emoji": "👨",
        "form": "noun",
        "plural": "hommes",
        "definitions": [
            {
                "text": "Un homme adulte.",
                "examples": [
                    "Cet homme est mon patron."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "art",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🎨",
        "form": "noun",
        "plural": "arts",
        "definitions": [
            {
                "text": "Création de belles choses.",
                "examples": [
                    "J'aime l'art moderne."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "bibliothèque",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📚",
        "form": "noun",
        "plural": "bibliothèques",
        "definitions": [
            {
                "text": "Lieu avec beaucoup de livres.",
                "examples": [
                    "Je vais à la bibliothèque."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "cinéma",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎬",
        "form": "noun",
        "plural": "cinémas",
        "definitions": [
            {
                "text": "Lieu pour voir des films.",
                "examples": [
                    "Allons au cinéma."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "musée",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏛️",
        "form": "noun",
        "plural": "musées",
        "definitions": [
            {
                "text": "Lieu avec des objets d'art.",
                "examples": [
                    "Le musée est grand."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "peinture",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🖼️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de painting.",
                "examples": []
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "stade",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏟️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Un grand bâtiment pour le sport.",
                "examples": [
                    "Le stade était plein."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "théâtre",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎭",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de theatre.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "zoo",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🦁",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de zoo.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "arbre",
        "level": "starter",
        "theme": "plants_natural_world_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🌳",
        "form": "noun",
        "plural": "arbres",
        "definitions": [
            {
                "text": "Grande plante avec un tronc.",
                "examples": [
                    "L'arbre est vert."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "fleur",
        "level": "starter",
        "theme": "plants_natural_world_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌸",
        "form": "noun",
        "plural": "fleurs",
        "definitions": [
            {
                "text": "Partie colorée d'une plante.",
                "examples": [
                    "La fleur sent bon."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "en bas",
        "level": "starter",
        "theme": "prepositions_movement_A1",
        "article": "",
        "gender": "",
        "emoji": "⬇️",
        "form": "preposition",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de down.",
                "examples": []
            }
        ]
    },
    {
        "word": "en haut",
        "level": "starter",
        "theme": "prepositions_movement_A1",
        "article": "",
        "gender": "",
        "emoji": "⬆️",
        "form": "preposition",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de up.",
                "examples": []
            }
        ]
    },
    {
        "word": "à",
        "level": "starter",
        "theme": "prepositions_movement_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "preposition",
        "plural": "",
        "definitions": [
            {
                "text": "Lieu ou direction.",
                "examples": [
                    "Je vais à Paris."
                ]
            }
        ]
    },
    {
        "word": "avec",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": null,
        "form": "preposition",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de with.",
                "examples": []
            }
        ]
    },
    {
        "word": "dans",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "preposition",
        "plural": "",
        "definitions": [
            {
                "text": "À l'intérieur de.",
                "examples": [
                    "Le chat est dans la boîte."
                ]
            }
        ]
    },
    {
        "word": "de",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": null,
        "form": "preposition",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de from.",
                "examples": []
            }
        ]
    },
    {
        "word": "derrière",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": null,
        "form": "preposition",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de behind.",
                "examples": []
            }
        ]
    },
    {
        "word": "devant",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": null,
        "form": "preposition",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de in front of.",
                "examples": []
            }
        ]
    },
    {
        "word": "entre",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": null,
        "form": "preposition",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de between.",
                "examples": []
            }
        ]
    },
    {
        "word": "là",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": "👉",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "À cet endroit.",
                "examples": [
                    "Le chat est là."
                ]
            }
        ]
    },
    {
        "word": "sans",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": null,
        "form": "preposition",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de without.",
                "examples": []
            }
        ]
    },
    {
        "word": "sous",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "preposition",
        "plural": "",
        "definitions": [
            {
                "text": "En dessous de.",
                "examples": [
                    "Le chien est sous la table."
                ]
            }
        ]
    },
    {
        "word": "sur",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "preposition",
        "plural": "",
        "definitions": [
            {
                "text": "En contact avec le haut de.",
                "examples": [
                    "Le livre est sur la table."
                ]
            }
        ]
    },
    {
        "word": "à",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "preposition",
        "plural": "",
        "definitions": [
            {
                "text": "Lieu ou direction.",
                "examples": [
                    "Je vais à Paris."
                ]
            }
        ]
    },
    {
        "word": "à côté de",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": null,
        "form": "preposition",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de next to.",
                "examples": []
            }
        ]
    },
    {
        "word": "pour",
        "level": "starter",
        "theme": "prepositions_time_A1",
        "article": "",
        "gender": "",
        "emoji": null,
        "form": "preposition",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de for.",
                "examples": []
            }
        ]
    },
    {
        "word": "arrêt de bus",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🚏",
        "form": "noun",
        "plural": "arrêts de bus",
        "definitions": [
            {
                "text": "Point d'arrêt du bus.",
                "examples": [
                    "S'arrêter au prochain arrêt."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "aéroport",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "plural": "aéroports",
        "definitions": [
            {
                "text": "Lieu pour prendre l'avion.",
                "examples": [
                    "Je vais à l'aéroport."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "billet",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎟️",
        "form": "noun",
        "plural": "billets",
        "definitions": [
            {
                "text": "Titre de transport.",
                "examples": [
                    "Un billet de train."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "bus",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚌",
        "form": "noun",
        "plural": "bus",
        "definitions": [
            {
                "text": "Grand véhicule urbain.",
                "examples": [
                    "Le bus de 8h."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "gare",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚉",
        "form": "noun",
        "plural": "gares",
        "definitions": [
            {
                "text": "Lieu des trains.",
                "examples": [
                    "Aller à la gare."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "hôtel",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "l'",
        "emoji": "🏨",
        "form": "noun",
        "plural": "hôtels",
        "definitions": [
            {
                "text": "Un bâtiment où les gens paient pour passer la nuit.",
                "examples": [
                    "L'hôtel est près de la gare."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "métro",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚇",
        "form": "noun",
        "plural": "métros",
        "definitions": [
            {
                "text": "Train souterrain.",
                "examples": [
                    "Prendre le métro."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "quai",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛤️",
        "form": "noun",
        "plural": "quais",
        "definitions": [
            {
                "text": "Bord de la voie ferrée.",
                "examples": [
                    "Le train arrive au quai 3."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "station de bus",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚌",
        "form": "noun",
        "plural": "stations de bus",
        "definitions": [
            {
                "text": "Lieu des bus.",
                "examples": [
                    "Attendre à la station."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "taxi",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚕",
        "form": "noun",
        "plural": "taxis",
        "definitions": [
            {
                "text": "Voiture avec chauffeur.",
                "examples": [
                    "Appeler un taxi."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "train",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚆",
        "form": "noun",
        "plural": "trains",
        "definitions": [
            {
                "text": "Véhicule sur rails.",
                "examples": [
                    "Prendre le train."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "trajet",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "le",
        "emoji": "🚆",
        "form": "noun",
        "plural": "trajets",
        "definitions": [
            {
                "text": "Le voyage pour aller et revenir du travail chaque jour.",
                "examples": [
                    "Mon trajet prend une heure."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "voie",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛤️",
        "form": "noun",
        "plural": "voies",
        "definitions": [
            {
                "text": "Chemin de fer.",
                "examples": [
                    "La voie est libre."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "vol",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "plural": "vols",
        "definitions": [
            {
                "text": "Voyage en avion.",
                "examples": [
                    "Un vol de nuit."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "voyageur",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👤",
        "form": "noun",
        "plural": "voyageurs",
        "definitions": [
            {
                "text": "Personne qui voyage.",
                "examples": [
                    "Le train est plein de voyageurs."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "bureau",
        "level": "starter",
        "theme": "rooms_indoor_spaces_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏢",
        "form": "noun",
        "plural": "bureaux",
        "subtext": "lieu de travail, grand bureau",
        "definitions": [
            {
                "text": "Une pièce ou un bâtiment où les gens travaillent.",
                "examples": [
                    "Il est au bureau."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "appartement",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏢",
        "form": "noun",
        "plural": "appartements",
        "subtext": "flat, vivre dans un appartement",
        "definitions": [
            {
                "text": "Un ensemble de pièces sur un étage d'un bâtiment.",
                "examples": [
                    "Elle vit dans un appartement."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "ascenseur",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🛗",
        "form": "noun",
        "plural": "ascenseurs",
        "definitions": [
            {
                "text": "Appareil pour monter les étages.",
                "examples": [
                    "Prendre l'ascenseur."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "bain",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛁",
        "form": "noun",
        "plural": "bains",
        "definitions": [
            {
                "text": "Action de se laver dans l'eau.",
                "examples": [
                    "Prendre un bain chaud."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "balcon",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏘️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de balcony.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "chambre",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛏️",
        "form": "noun",
        "plural": "chambres",
        "definitions": [
            {
                "text": "Pièce pour dormir.",
                "examples": [
                    "Ma chambre est propre."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "clôture",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚧",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de fence.",
                "examples": []
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "couloir",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👣",
        "form": "noun",
        "plural": "couloirs",
        "definitions": [
            {
                "text": "Passage long et étroit.",
                "examples": [
                    "Le couloir est sombre."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "cuisine",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "emoji": "🍳",
        "form": "noun",
        "plural": "cuisines",
        "definitions": [
            {
                "text": "La pièce d'une maison où la nourriture est préparée.",
                "examples": [
                    "Je cuisine dans la cuisine."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "douche",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚿",
        "form": "noun",
        "plural": "douches",
        "definitions": [
            {
                "text": "Installation pour se laver debout.",
                "examples": [
                    "Prendre une douche."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "entrée",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🚪",
        "form": "noun",
        "plural": "entrées",
        "definitions": [
            {
                "text": "Lieu par où l'on entre.",
                "examples": [
                    "L'entrée de la maison."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "escalier",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🪜",
        "form": "noun",
        "plural": "escaliers",
        "definitions": [
            {
                "text": "Suite de marches.",
                "examples": [
                    "Monter l'escalier."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "foyer",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏠",
        "form": "noun",
        "subtext": "à la maison, rentrer",
        "definitions": [
            {
                "text": "L'endroit où vous vivez.",
                "examples": [
                    "Je rentre à la maison à six heures."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "garage",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚗",
        "form": "noun",
        "plural": "garages",
        "definitions": [
            {
                "text": "Lieu pour la voiture.",
                "examples": [
                    "La voiture est au garage."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "jardin",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏡",
        "form": "noun",
        "plural": "jardins",
        "definitions": [
            {
                "text": "Terrain avec des plantes.",
                "examples": [
                    "Travailler au jardin."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "maison",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏡",
        "form": "noun",
        "plural": "maisons",
        "subtext": "grande maison, vivre dans une maison",
        "definitions": [
            {
                "text": "Un bâtiment où vit une famille.",
                "examples": [
                    "Ils ont une grande maison."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "mur",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧱",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de wall.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "murs",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "les",
        "gender": "masculine",
        "emoji": "🧱",
        "form": "noun",
        "plural": "murs",
        "definitions": [
            {
                "text": "Parois d'une pièce.",
                "examples": [
                    "Des murs blancs."
                ]
            }
        ],
        "partitive": "des"
    },
    {
        "word": "pièce",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "emoji": "🚪",
        "form": "noun",
        "plural": "pièces",
        "definitions": [
            {
                "text": "Une partie séparée d'un bâtiment avec des murs et une porte.",
                "examples": [
                    "L'appartement a trois pièces."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "plafond",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏠",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de ceiling.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "portail",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚪",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de gate.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "salle de bain",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚿",
        "form": "noun",
        "plural": "salles de bain",
        "definitions": [
            {
                "text": "Pièce pour se laver.",
                "examples": [
                    "La salle de bain est petite."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "salle à manger",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "salles à manger",
        "definitions": [
            {
                "text": "Pièce pour manger.",
                "examples": [
                    "Dîner dans la salle à manger."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "salon",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "salons",
        "definitions": [
            {
                "text": "Pièce de réception.",
                "examples": [
                    "Regarder la télé au salon."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "sol",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧹",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "La partie d'une pièce sur laquelle on marche.",
                "examples": [
                    "Assieds-toi sur le sol."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "sortie",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚪",
        "form": "noun",
        "plural": "sorties",
        "definitions": [
            {
                "text": "Lieu par où l'on sort.",
                "examples": [
                    "La sortie est là."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "toilette",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚽",
        "form": "noun",
        "plural": "toilettes",
        "definitions": [
            {
                "text": "Lieu pour les besoins naturels.",
                "examples": [
                    "Où sont les toilettes ?"
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "toit",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏠",
        "form": "noun",
        "plural": "toits",
        "definitions": [
            {
                "text": "Couverture d'une maison.",
                "examples": [
                    "Le chat est sur le toit."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "étage",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "📶",
        "form": "noun",
        "plural": "étages",
        "definitions": [
            {
                "text": "Niveau d'un bâtiment.",
                "examples": [
                    "J'habite au premier étage."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "évier",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🚰",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Un bac pour laver la vaisselle ou les mains.",
                "examples": [
                    "L'évier est dans la cuisine."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "agrafeuse",
        "level": "starter",
        "theme": "school_stationery_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🖇️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de stapler.",
                "examples": []
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "cahier",
        "level": "starter",
        "theme": "school_stationery_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📓",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Livre avec des pages vides pour écrire.",
                "examples": [
                    "J'écris mes leçons dans un cahier."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "calculatrice",
        "level": "starter",
        "theme": "school_stationery_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🔢",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de calculator.",
                "examples": []
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "ciseaux",
        "level": "starter",
        "theme": "school_stationery_A1",
        "article": "les",
        "gender": "masculine",
        "emoji": "✂️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de scissors.",
                "examples": []
            }
        ],
        "partitive": "des"
    },
    {
        "word": "colle",
        "level": "starter",
        "theme": "school_stationery_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧪",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de glue.",
                "examples": []
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "enveloppe",
        "level": "starter",
        "theme": "school_stationery_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "✉️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de envelope.",
                "examples": []
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "gomme",
        "level": "starter",
        "theme": "school_stationery_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧽",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Petit objet pour effacer le crayon.",
                "examples": [
                    "Puis-je emprunter ta gomme ?"
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "manuel",
        "level": "starter",
        "theme": "school_stationery_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📖",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Livre d'école sur un sujet.",
                "examples": [
                    "Ouvrez vos manuels à la page dix."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "sac à dos",
        "level": "starter",
        "theme": "school_stationery_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎒",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Sac que l'on porte sur le dos.",
                "examples": [
                    "Je mets mes livres dans mon sac à dos."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "tableau",
        "level": "starter",
        "theme": "school_stationery_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📋",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Surface au mur de la classe pour écrire.",
                "examples": [
                    "Regarde le tableau."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "timbre",
        "level": "starter",
        "theme": "school_stationery_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧧",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de stamp.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "trousse",
        "level": "starter",
        "theme": "school_stationery_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "✏️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Petit sac pour les stylos et crayons.",
                "examples": [
                    "Mes stylos sont dans ma trousse."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "géographie",
        "level": "starter",
        "theme": "school_subjects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌍",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "L'étude de la Terre.",
                "examples": [
                    "Utiliser des cartes en géographie."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "histoire",
        "level": "starter",
        "theme": "school_subjects_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "📜",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "L'étude des événements du passé.",
                "examples": [
                    "J'aime apprendre l'histoire."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "maths",
        "level": "starter",
        "theme": "school_subjects_A1",
        "article": "les",
        "gender": "feminine",
        "emoji": "🔢",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "L'étude des nombres et des formes.",
                "examples": [
                    "Les maths sont difficiles."
                ]
            }
        ],
        "partitive": "des"
    },
    {
        "word": "science",
        "level": "starter",
        "theme": "school_subjects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧪",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "L'étude du monde naturel.",
                "examples": [
                    "Le cours de science."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "baleine",
        "level": "starter",
        "theme": "sea_animals_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🐋",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Un très grand animal marin.",
                "examples": [
                    "Nous avons vu une baleine depuis le bateau."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "dauphin",
        "level": "starter",
        "theme": "sea_animals_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🐬",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Un animal marin très intelligent.",
                "examples": [
                    "Les dauphins aiment sauter hors de l'eau."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "poulpe",
        "level": "starter",
        "theme": "sea_animals_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🐙",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Animal marin avec huit bras.",
                "examples": [
                    "Le poulpe a huit bras."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "requin",
        "level": "starter",
        "theme": "sea_animals_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🦈",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Un grand poisson avec des dents pointues.",
                "examples": [
                    "Le requin nage dans l'océan."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "automne",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🍂",
        "form": "noun",
        "plural": "automnes",
        "definitions": [
            {
                "text": "Saison quand les feuilles tombent.",
                "examples": [
                    "L'automne est beau."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "hiver",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "❄️",
        "form": "noun",
        "plural": "hivers",
        "definitions": [
            {
                "text": "Saison la plus froide.",
                "examples": [
                    "Il neige en hiver."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "printemps",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🌱",
        "form": "noun",
        "plural": "printemps",
        "definitions": [
            {
                "text": "Saison après l'hiver.",
                "examples": [
                    "Au printemps, les fleurs poussent."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "été",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "plural": "étés",
        "definitions": [
            {
                "text": "Saison la plus chaude.",
                "examples": [
                    "J'adore l'été."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "ballon",
        "level": "starter",
        "theme": "sports_equipment_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "⚽",
        "form": "noun",
        "plural": "ballons",
        "definitions": [
            {
                "text": "Objet rond pour le sport.",
                "examples": [
                    "Jouons au ballon."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "batte",
        "level": "starter",
        "theme": "sports_equipment_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏏",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de bat.",
                "examples": []
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "heure",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "⌚",
        "form": "noun",
        "plural": "heures",
        "definitions": [
            {
                "text": "Soixante minutes.",
                "examples": [
                    "Il est une heure."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "minute",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⏱️",
        "form": "noun",
        "plural": "minutes",
        "definitions": [
            {
                "text": "Soixante secondes.",
                "examples": [
                    "Attends une minute."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "montre",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⌚",
        "form": "noun",
        "plural": "montres",
        "definitions": [
            {
                "text": "Petit appareil pour l'heure.",
                "examples": [
                    "Ma montre avance."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "réveil",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "⏰",
        "form": "noun",
        "plural": "réveils",
        "definitions": [
            {
                "text": "Horloge qui sonne le matin.",
                "examples": [
                    "Le réveil sonne."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "seconde",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⏱️",
        "form": "noun",
        "plural": "secondes",
        "definitions": [
            {
                "text": "Temps très court.",
                "examples": [
                    "Une seconde, s'il vous plaît."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "temps",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "⌚",
        "form": "noun",
        "plural": "temps",
        "definitions": [
            {
                "text": "La durée ou l'heure.",
                "examples": [
                    "Je n'ai pas le temps."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "après-midi",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "plural": "après-midi",
        "subtext": "cet après-midi, bon après-midi",
        "definitions": [
            {
                "text": "La partie de la journée allant de midi jusqu'au soir.",
                "examples": [
                    "Je finis le travail à cinq heures de l'après-midi."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "aujourd'hui",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "📅",
        "form": "adverb",
        "subtext": "la réunion d'aujourd'hui, commencer aujourd'hui",
        "definitions": [
            {
                "text": "En ce jour ; le jour actuel.",
                "examples": [
                    "J'ai une réunion aujourd'hui à dix heures."
                ]
            }
        ]
    },
    {
        "word": "ce soir",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "",
        "gender": "",
        "emoji": "🌙",
        "form": "adverb",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de tonight.",
                "examples": []
            }
        ]
    },
    {
        "word": "chaque jour",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🔁",
        "form": "adverb",
        "definitions": [
            {
                "text": "Tous les jours sans exception.",
                "examples": [
                    "Je bois du café chaque jour."
                ]
            }
        ]
    },
    {
        "word": "demain",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "⏭️",
        "form": "adverb",
        "subtext": "demain matin, à demain",
        "definitions": [
            {
                "text": "Le jour après aujourd'hui.",
                "examples": [
                    "Elle a un rendez-vous chez le médecin demain."
                ]
            }
        ]
    },
    {
        "word": "hier",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "",
        "gender": "",
        "emoji": "🔙",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Le jour avant aujourd'hui.",
                "examples": [
                    "Hier, j'étais fatigué."
                ]
            }
        ]
    },
    {
        "word": "jour",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "plural": "jours",
        "definitions": [
            {
                "text": "Une période de 24 heures.",
                "examples": [
                    "Je travaille cinq jours par semaine."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "matin",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🌅",
        "form": "noun",
        "plural": "matins",
        "subtext": "tôt le matin, bonjour",
        "definitions": [
            {
                "text": "La partie de la journée avant 12 heures.",
                "examples": [
                    "Je commence le travail le matin."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "matinée",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌅",
        "form": "noun",
        "plural": "matinées",
        "definitions": [
            {
                "text": "Temps du matin.",
                "examples": [
                    "Bonne matinée !"
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "midi",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "",
        "gender": "masculine",
        "emoji": "🕛",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Douze heures du jour.",
                "examples": [
                    "Il est midi."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "minuit",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "",
        "gender": "masculine",
        "emoji": "🕛",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Douze heures de la nuit.",
                "examples": [
                    "Il est minuit."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "nuit",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌙",
        "form": "noun",
        "plural": "nuits",
        "subtext": "bonne nuit, à la nuit",
        "definitions": [
            {
                "text": "La période d'obscurité entre le soir et le matin.",
                "examples": [
                    "Je dors huit heures chaque nuit."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "semaine",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📅",
        "form": "noun",
        "plural": "semaines",
        "subtext": "la semaine prochaine, la semaine dernière",
        "definitions": [
            {
                "text": "Une période de sept jours.",
                "examples": [
                    "Je travaille cinq jours par semaine."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "soir",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🌆",
        "form": "noun",
        "plural": "soirs",
        "subtext": "ce soir, bonsoir",
        "definitions": [
            {
                "text": "La partie de la journée après l'après-midi.",
                "examples": [
                    "Nous dînons le soir."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "soirée",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌆",
        "form": "noun",
        "plural": "soirées",
        "definitions": [
            {
                "text": "Temps du soir.",
                "examples": [
                    "Bonne soirée !"
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "week-end",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "le",
        "emoji": "🗓️",
        "form": "noun",
        "plural": "week-ends",
        "definitions": [
            {
                "text": "Samedi et dimanche.",
                "examples": [
                    "Je me détends le week-end."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "ballon",
        "level": "starter",
        "theme": "toys_games_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎈",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Sac en caoutchouc rempli d'air.",
                "examples": [
                    "Nous avons beaucoup de ballons pour la fête."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "cerf-volant",
        "level": "starter",
        "theme": "toys_games_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🪁",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Jouet qui vole dans le vent avec une ficelle.",
                "examples": [
                    "Faisons voler un cerf-volant au parc."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "extraterrestre",
        "level": "starter",
        "theme": "toys_games_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "👽",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Une créature d'une autre planète.",
                "examples": [
                    "Est-ce que tu crois aux extraterrestres ?"
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "jouet",
        "level": "starter",
        "theme": "toys_games_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧸",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de toy.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "monstre",
        "level": "starter",
        "theme": "toys_games_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👹",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Une grande créature imaginaire qui fait peur.",
                "examples": [
                    "L'histoire parle d'un gentil monstre."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "poupée",
        "level": "starter",
        "theme": "toys_games_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🪆",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Jouet qui ressemble à une petite personne.",
                "examples": [
                    "Elle aime jouer avec ses poupées."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "robot",
        "level": "starter",
        "theme": "toys_games_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🤖",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Une machine qui peut travailler seule.",
                "examples": [
                    "J'ai un robot jouet."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "arrivée",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🛬",
        "form": "noun",
        "plural": "arrivées",
        "definitions": [
            {
                "text": "Action d'arriver.",
                "examples": [
                    "L'heure de l'arrivée."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "bagages",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "les",
        "gender": "masculine",
        "emoji": "🧳",
        "form": "noun",
        "plural": "bagages",
        "definitions": [
            {
                "text": "Affaires de voyage.",
                "examples": [
                    "Porter les bagages."
                ]
            }
        ],
        "partitive": "des"
    },
    {
        "word": "billet",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "💵",
        "form": "noun",
        "plural": "billets",
        "definitions": [
            {
                "text": "Argent en papier.",
                "examples": [
                    "Un billet de dix euros."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "carte",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🗺️",
        "form": "noun",
        "plural": "cartes",
        "definitions": [
            {
                "text": "Dessin d'un lieu ou région.",
                "examples": [
                    "Regarde la carte."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "chambre d'hôtel",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏨",
        "form": "noun",
        "plural": "chambres d'hôtel",
        "definitions": [
            {
                "text": "Pièce dans un hôtel.",
                "examples": [
                    "Réserver une chambre d'hôtel."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "clé",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🔑",
        "form": "noun",
        "plural": "clés",
        "definitions": [
            {
                "text": "Pour ouvrir la chambre.",
                "examples": [
                    "Rendre la clé."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "départ",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛫",
        "form": "noun",
        "plural": "départs",
        "definitions": [
            {
                "text": "Action de partir.",
                "examples": [
                    "L'heure du départ."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "passeport",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛂",
        "form": "noun",
        "plural": "passeports",
        "definitions": [
            {
                "text": "Document pour voyager.",
                "examples": [
                    "Où est mon passeport ?"
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "plan",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📍",
        "form": "noun",
        "plural": "plans",
        "definitions": [
            {
                "text": "Carte d'une ville.",
                "examples": [
                    "Le plan de Paris."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "réception",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛎️",
        "form": "noun",
        "plural": "réceptions",
        "definitions": [
            {
                "text": "Accueil de l'hôtel.",
                "examples": [
                    "Aller à la réception."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "réservation",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📖",
        "form": "noun",
        "plural": "réservations",
        "definitions": [
            {
                "text": "Action de réserver.",
                "examples": [
                    "Faire une réservation."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "sac à dos",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎒",
        "form": "noun",
        "plural": "sacs à dos",
        "definitions": [
            {
                "text": "Sac que l'on porte sur le dos.",
                "examples": [
                    "Il a un gros sac à dos."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "valise",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧳",
        "form": "noun",
        "plural": "valises",
        "definitions": [
            {
                "text": "Contenant pour les voyages.",
                "examples": [
                    "Je prépare ma valise."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "voyage",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "le",
        "emoji": "✈️",
        "form": "noun",
        "plural": "voyages",
        "definitions": [
            {
                "text": "L'action d'aller d'un endroit à un autre.",
                "examples": [
                    "J'adore les voyages."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "loyer",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "article": "le",
        "emoji": "🏠",
        "form": "noun",
        "plural": "loyers",
        "definitions": [
            {
                "text": "L'argent payé pour utiliser une maison ou un appartement qui appartient à quelqu'un d'autre.",
                "examples": [
                    "Le loyer est cher ici."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "université",
        "level": "starter",
        "theme": "types_of_education_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🎓",
        "form": "noun",
        "plural": "universités",
        "definitions": [
            {
                "text": "École d'enseignement supérieur.",
                "examples": [
                    "Je vais à l'université."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "email",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "📧",
        "form": "noun",
        "plural": "emails",
        "definitions": [
            {
                "text": "Courrier électronique.",
                "examples": [
                    "Je réponds aux emails."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "internet",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🌐",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de internet.",
                "examples": []
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "message",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "✉️",
        "form": "noun",
        "plural": "messages",
        "definitions": [
            {
                "text": "Information envoyée.",
                "examples": [
                    "J'ai un message pour toi."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "site web",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🌐",
        "form": "noun",
        "plural": "sites web",
        "definitions": [
            {
                "text": "Pages sur internet.",
                "examples": [
                    "Regarde ce site web."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "parapluie",
        "level": "starter",
        "theme": "weather_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "☂️",
        "form": "noun",
        "plural": "parapluies",
        "definitions": [
            {
                "text": "Objet contre la pluie.",
                "examples": [
                    "Prends ton parapluie."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "pluie",
        "level": "starter",
        "theme": "weather_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌧️",
        "form": "noun",
        "plural": null,
        "subtext": "forte pluie, bottes de pluie",
        "definitions": [
            {
                "text": "De l'eau qui tombe des nuages en gouttes.",
                "examples": [
                    "Il y a beaucoup de pluie en automne."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "soleil",
        "level": "starter",
        "theme": "weather_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "plural": null,
        "subtext": "soleil chaud, soleil du matin",
        "definitions": [
            {
                "text": "L'étoile qui donne de la lumière et de la chaleur pendant la journée.",
                "examples": [
                    "Le soleil est très fort aujourd'hui."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "vent",
        "level": "starter",
        "theme": "weather_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "💨",
        "form": "noun",
        "plural": null,
        "subtext": "vent fort, vent froid",
        "definitions": [
            {
                "text": "De l'air qui bouge, parfois fortement.",
                "examples": [
                    "Le vent est très fort aujourd'hui."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "affaires",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "les",
        "gender": "feminine",
        "emoji": "💼",
        "form": "noun",
        "plural": "affaires",
        "definitions": [
            {
                "text": "Activités commerciales.",
                "examples": [
                    "Il voyage pour les affaires."
                ]
            }
        ],
        "partitive": "des"
    },
    {
        "word": "bureau",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🖥️",
        "form": "noun",
        "plural": "bureaux",
        "definitions": [
            {
                "text": "Lieu de travail ou table.",
                "examples": [
                    "Il est à son bureau."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "client",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👤",
        "form": "noun",
        "plural": "clients",
        "definitions": [
            {
                "text": "Personne qui achète un service.",
                "examples": [
                    "Le client est content."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "clientèle",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👥",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Ensemble des clients.",
                "examples": [
                    "Une clientèle fidèle."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "collègue",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "le",
        "emoji": "🧑‍💼",
        "form": "noun",
        "plural": "collègues",
        "definitions": [
            {
                "text": "Une personne avec qui vous travaillez.",
                "examples": [
                    "Mes collègues sont serviables."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "entreprise",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🏢",
        "form": "noun",
        "plural": "entreprises",
        "definitions": [
            {
                "text": "Lieu de production ou service.",
                "examples": [
                    "C'est une grande entreprise."
                ]
            }
        ],
        "partitive": "de l'"
    },
    {
        "word": "patron",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "le",
        "emoji": "👨‍💼",
        "form": "noun",
        "plural": "patrons",
        "definitions": [
            {
                "text": "La personne qui est responsable au travail.",
                "examples": [
                    "Mon patron est très amical."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "plan",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "plans",
        "definitions": [
            {
                "text": "Ce qu'on prévoit de faire.",
                "examples": [
                    "Quel est le plan ?"
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "projet",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📊",
        "form": "noun",
        "plural": "projets",
        "definitions": [
            {
                "text": "Travail que l'on prévoit.",
                "examples": [
                    "Un nouveau projet."
                ]
            }
        ],
        "partitive": "du"
    },
    {
        "word": "rapport",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📄",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Traduction de report.",
                "examples": []
            }
        ],
        "partitive": "du"
    },
    {
        "word": "réunion",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "la",
        "emoji": "🤝",
        "form": "noun",
        "plural": "réunions",
        "subtext": "rencontre, assemblée",
        "definitions": [
            {
                "text": "Un moment où les gens se rassemblent pour parler de quelque chose.",
                "examples": [
                    "Nous avons une réunion tous les lundis."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "réussite",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏆",
        "form": "noun",
        "plural": "réussites",
        "definitions": [
            {
                "text": "Succès.",
                "examples": [
                    "C'est une réussite."
                ]
            }
        ],
        "partitive": "de la"
    },
    {
        "word": "service",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🤝",
        "form": "noun",
        "plural": "services",
        "definitions": [
            {
                "text": "Action d'aider.",
                "examples": [
                    "Un bon service."
                ]
            }
        ],
        "partitive": "du"
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();