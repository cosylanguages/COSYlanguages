(function() {
    const data = [
    {
        "word": "artiste",
        "level": "elementary",
        "theme": "art_design_A2",
        "article": "l'",
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
        "theme": "restaurants_ordering_A2",
        "article": "le",
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
        "theme": "medical_appointments_A1",
        "article": "l'",
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
        "article": "la",
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
        "article": "la",
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
        "article": "le",
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
        "article": "le",
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
        "article": "la",
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
        "article": "la",
        "emoji": "🥔",
        "form": "noun",
        "plural": "pommes de terre",
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
        "theme": "medical_appointments_A1",
        "article": "l'",
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
        "theme": "theatre_performance_A2",
        "article": "le",
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
        "theme": "restaurants_ordering_A2",
        "article": "le",
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
        "theme": "shopping_for_clothes_A2",
        "article": "la",
        "emoji": "👗",
        "form": "noun",
        "plural": "robes"
    },
    {
        "word": "veste",
        "level": "elementary",
        "theme": "shopping_for_clothes_A2",
        "article": "la",
        "emoji": "🧥",
        "form": "noun",
        "plural": "vestes"
    },
    {
        "word": "jupe",
        "level": "elementary",
        "theme": "shopping_for_clothes_A2",
        "article": "la",
        "emoji": "👗",
        "form": "noun",
        "plural": "jupes"
    },
    {
        "word": "canapé",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "article": "le",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "canapés"
    },
    {
        "word": "lampe",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "article": "la",
        "emoji": "💡",
        "form": "noun",
        "plural": "lampes"
    },
    {
        "word": "bureau",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "theme_alt": "grammar_plurals",
        "numberPlural": "3 bureau",
        "answer": "trois bureaux",
        "emoji": "🏢",
        "form": "noun",
        "plural": "bureaux"
    },
    {
        "word": "se brosser les dents",
        "level": "elementary",
        "theme": "household_tasks_A1",
        "emoji": "🪥",
        "form": "noun"
    },
    {
        "word": "prendre une douche",
        "level": "elementary",
        "theme": "household_tasks_A1",
        "emoji": "🚿",
        "form": "noun"
    },
    {
        "word": "montre",
        "level": "elementary",
        "theme": "accessories_A1",
        "article": "la",
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
        "theme": "accessories_A1",
        "article": "le",
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
        "theme": "accessories_A1",
        "emoji": "👓",
        "form": "noun",
        "plural": "lunettes"
    },
    {
        "word": "lion",
        "level": "elementary",
        "theme": "animals_nature_A2",
        "article": "le",
        "emoji": "🦁",
        "form": "noun",
        "plural": "lions"
    },
    {
        "word": "tigre",
        "level": "elementary",
        "theme": "animals_nature_A2",
        "article": "le",
        "emoji": "🐯",
        "form": "noun",
        "plural": "tigres"
    },
    {
        "word": "cheval",
        "level": "elementary",
        "theme": "animals_nature_A2",
        "article": "le",
        "emoji": "🐎",
        "form": "noun",
        "plural": "chevaux"
    },
    {
        "word": "bras",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "le",
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
        "article": "la",
        "emoji": "🍜",
        "form": "noun",
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
        "theme": "animals_nature_A2",
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
        "theme": "personal_qualities_A2",
        "emoji": "🤔",
        "form": "verb"
    },
    {
        "word": "devenir",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🦋",
        "form": "verb"
    },
    {
        "word": "bouger",
        "level": "elementary",
        "theme": "moving_home_A2",
        "emoji": "📦",
        "form": "verb"
    },
    {
        "word": "croire",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🙏",
        "form": "verb"
    },
    {
        "word": "se passer",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "⚡",
        "form": "verb"
    },
    {
        "word": "inclure",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "➕",
        "form": "verb"
    },
    {
        "word": "continuer",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "➡️",
        "form": "verb"
    },
    {
        "word": "poser",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "⚙️",
        "form": "verb"
    },
    {
        "word": "mener",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👑",
        "form": "verb"
    },
    {
        "word": "suivre",
        "level": "elementary",
        "theme": "directions_navigation_A1",
        "emoji": "👣",
        "form": "verb"
    },
    {
        "word": "créer",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "✨",
        "form": "verb"
    },
    {
        "word": "permettre",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "✅",
        "form": "verb"
    },
    {
        "word": "grandir",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🌱",
        "form": "verb"
    },
    {
        "word": "pollution",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🏭",
        "article": "la",
        "form": "noun",
        "definitions": [
            {
                "text": "Dommages causés à l'environnement par des substances nocives.",
                "examples": [
                    "La pollution de l'air est un gros problème ici."
                ]
            }
        ]
    },
    {
        "word": "offrir",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤲",
        "form": "verb"
    },
    {
        "word": "heures supplémentaires",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⏰",
        "form": "noun",
        "article": "les",
        "plural": "heures supplémentaires",
        "definitions": [
            {
                "text": "Heures de travail effectuées au-delà de la journée normale de travail.",
                "examples": [
                    "Elle fait des heures supplémentaires pour finir le projet."
                ]
            }
        ]
    },
    {
        "word": "promotion",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📈",
        "form": "noun",
        "article": "la",
        "plural": "promotions",
        "definitions": [
            {
                "text": "Passage à un poste plus élevé et mieux rémunéré au sein de la même entreprise.",
                "examples": [
                    "Il a obtenu une promotion le mois dernier."
                ]
            }
        ]
    },
    {
        "word": "entretien d'embauche",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "🤝",
        "form": "noun",
        "article": "l'",
        "plural": "entretiens d'embauche",
        "definitions": [
            {
                "text": "Une réunion formelle où l'on pose des questions à quelqu'un pour un emploi.",
                "examples": [
                    "J'ai un entretien d'embauche lundi."
                ]
            }
        ]
    },
    {
        "word": "contrat",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📄",
        "form": "noun",
        "article": "le",
        "plural": "contrats",
        "definitions": [
            {
                "text": "Un accord écrit entre un employeur et un employé.",
                "examples": [
                    "Elle a signé un contrat de deux ans."
                ]
            }
        ]
    },
    {
        "word": "date limite",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⏳",
        "form": "noun",
        "article": "la",
        "plural": "dates limites",
        "definitions": [
            {
                "text": "Le moment ultime où un travail doit être terminé.",
                "examples": [
                    "La date limite est vendredi."
                ]
            }
        ]
    },
    {
        "word": "expérience",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🧠",
        "form": "noun",
        "article": "l'",
        "plural": "expériences",
        "definitions": [
            {
                "text": "Connaissances ou compétences acquises en faisant quelque chose.",
                "examples": [
                    "Il a cinq ans d'expérience."
                ]
            }
        ]
    },
    {
        "word": "prêt hypothécaire",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "🏠",
        "form": "noun",
        "article": "le",
        "plural": "prêts hypothécaires",
        "definitions": [
            {
                "text": "Un prêt d'une banque pour acheter une maison ou un appartement.",
                "examples": [
                    "Ils ont un gros prêt hypothécaire."
                ]
            }
        ]
    },
    {
        "word": "prêt",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "💰",
        "form": "noun",
        "article": "le",
        "plural": "prêts",
        "definitions": [
            {
                "text": "Argent emprunté à une banque qui doit être remboursé.",
                "examples": [
                    "Elle a contracté un prêt pour acheter une voiture."
                ]
            }
        ]
    },
    {
        "word": "facture",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🧾",
        "form": "noun",
        "article": "la",
        "plural": "factures",
        "definitions": [
            {
                "text": "Un document qui indique combien d'argent vous devez payer.",
                "examples": [
                    "Je paie ma facture d'électricité chaque mois."
                ]
            }
        ]
    },
    {
        "word": "dette",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💸",
        "form": "noun",
        "article": "la",
        "plural": "dettes",
        "definitions": [
            {
                "text": "Argent que vous devez à une autre personne ou à une banque.",
                "examples": [
                    "Il a beaucoup de dettes."
                ]
            }
        ]
    },
    {
        "word": "compte",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "🏦",
        "form": "noun",
        "article": "le",
        "plural": "comptes",
        "definitions": [
            {
                "text": "Un arrangement avec une banque pour stocker votre argent.",
                "examples": [
                    "J'ai un compte d'épargne."
                ]
            }
        ]
    },
    {
        "word": "budget",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📊",
        "form": "noun",
        "article": "le",
        "plural": "budgets",
        "definitions": [
            {
                "text": "Un plan pour la façon de dépenser l'argent.",
                "examples": [
                    "Nous avons besoin d'un budget mensuel."
                ]
            }
        ]
    },
    {
        "word": "régime",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🥗",
        "form": "noun",
        "article": "le",
        "plural": "régimes",
        "definitions": [
            {
                "text": "La nourriture qu'une personne mange normalement ; ou un plan alimentaire spécial.",
                "examples": [
                    "Elle suit un régime sain."
                ]
            }
        ]
    },
    {
        "word": "rendez-vous",
        "level": "elementary",
        "theme": "medical_appointments_A1",
        "emoji": "📅",
        "form": "noun",
        "article": "le",
        "plural": "rendez-vous",
        "definitions": [
            {
                "text": "Un moment que vous organisez pour rencontrer quelqu'un, par exemple un médecin.",
                "examples": [
                    "J'ai un rendez-vous chez le médecin mardi."
                ]
            }
        ]
    },
    {
        "word": "vitamine",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "💊",
        "form": "noun",
        "article": "la",
        "plural": "vitamines",
        "definitions": [
            {
                "text": "Une substance naturelle dans les aliments dont votre corps a besoin pour rester en bonne santé.",
                "examples": [
                    "Les oranges contiennent de la vitamine C."
                ]
            }
        ]
    },
    {
        "word": "douleur",
        "level": "elementary",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤕",
        "form": "noun",
        "article": "la",
        "plural": "douleurs",
        "definitions": [
            {
                "text": "Une sensation désagréable dans votre corps quand quelque chose ne va pas.",
                "examples": [
                    "Elle a une douleur au dos."
                ]
            }
        ]
    },
    {
        "word": "soutien",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "noun",
        "article": "le",
        "plural": "soutiens",
        "definitions": [
            {
                "text": "Aide ou encouragement donné à quelqu'un.",
                "examples": [
                    "J'ai besoin de votre soutien."
                ]
            }
        ]
    },
    {
        "word": "confiance",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "noun",
        "article": "la",
        "definitions": [
            {
                "text": "Le fait de croire que quelqu'un est honnête et fiable.",
                "examples": [
                    "La confiance est importante dans une relation."
                ]
            }
        ]
    },
    {
        "word": "compromis",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "noun",
        "article": "le",
        "plural": "compromis",
        "definitions": [
            {
                "text": "Un accord où les deux parties acceptent moins que ce qu'elles voulaient.",
                "examples": [
                    "Les bonnes relations ont besoin de compromis."
                ]
            }
        ]
    },
    {
        "word": "voyage",
        "level": "elementary",
        "theme": "holiday_types_A2",
        "emoji": "🛤️",
        "form": "noun",
        "article": "le",
        "plural": "voyages",
        "definitions": [
            {
                "text": "Déplacement d'un endroit à un autre.",
                "examples": [
                    "Le trajet jusqu'au travail prend 40 minutes."
                ]
            }
        ]
    },
    {
        "word": "à l'étranger",
        "level": "elementary",
        "theme": "holiday_types_A2",
        "emoji": "✈️",
        "form": "adverb",
        "definitions": [
            {
                "text": "Dans ou vers un autre pays.",
                "examples": [
                    "Ils vont à l'étranger chaque été."
                ]
            }
        ]
    },
    {
        "word": "destination",
        "level": "elementary",
        "theme": "holiday_types_A2",
        "emoji": "📍",
        "form": "noun",
        "article": "la",
        "plural": "destinations",
        "definitions": [
            {
                "text": "L'endroit où vous voyagez.",
                "examples": [
                    "Paris est une destination populaire."
                ]
            }
        ]
    },
    {
        "word": "vol",
        "level": "elementary",
        "theme": "at_the_airport_A2",
        "emoji": "✈️",
        "form": "noun",
        "article": "le",
        "plural": "vols",
        "definitions": [
            {
                "text": "Un trajet effectué en avion.",
                "examples": [
                    "Le vol pour Londres dure deux heures."
                ]
            }
        ]
    },
    {
        "word": "bagages",
        "level": "elementary",
        "theme": "at_the_airport_A2",
        "emoji": "🧳",
        "form": "noun",
        "article": "les",
        "plural": "bagages",
        "definitions": [
            {
                "text": "Sacs et valises que vous emportez avec vous lorsque vous voyagez.",
                "examples": [
                    "Elle a beaucoup de bagages."
                ]
            }
        ]
    },
    {
        "word": "quartier",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "🏘️",
        "form": "noun",
        "article": "le",
        "plural": "quartiers",
        "definitions": [
            {
                "text": "La zone autour de votre maison.",
                "examples": [
                    "Nous vivons dans un quartier sûr."
                ]
            }
        ]
    },
    {
        "word": "communauté",
        "level": "elementary",
        "theme": "community_neighbourhood_local_A2",
        "emoji": "👥",
        "form": "noun",
        "article": "la",
        "plural": "communautés",
        "definitions": [
            {
                "text": "Un groupe de personnes qui vivent dans la même zone ou partagent des intérêts.",
                "examples": [
                    "Elle est active dans sa communauté locale."
                ]
            }
        ]
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
