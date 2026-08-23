// TODO: verify level classification
(function() {
    const lang = "fr";
    const data = [
    {
        "word": "jardin",
        "level": "elementary",
        "theme": "places",
        "emoji": "🌳",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Un jardin public ou un parc.",
                "examples": []
            }
        ],
        "countability": "countable",
        "lang": "fr",
        "transcription": "/ʒaʁdɛ̃/",
        "id": "fr_elementary_places_001"
    },
    {
        "word": "artiste",
        "level": "elementary",
        "theme": "art_culture",
        "article": "l'",
        "emoji": "🎨",
        "form": "noun",
        "classification": "regular",
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
        ],
        "lang": "fr",
        "transcription": "/aʁtist/",
        "id": "fr_elementary_art_culture_001"
    },
    {
        "word": "chef",
        "level": "elementary",
        "theme": "jobs",
        "article": "le",
        "emoji": "👨‍🍳",
        "form": "noun",
        "classification": "regular",
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
        ],
        "lang": "fr",
        "transcription": "/ʃɛf/",
        "id": "fr_elementary_jobs_001"
    },
    {
        "word": "infirmier",
        "level": "elementary",
        "theme": "jobs",
        "article": "l'",
        "emoji": "👩‍⚕️",
        "form": "noun",
        "classification": "regular",
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
        ],
        "lang": "fr",
        "transcription": "/ɛ̃fiʁmje/",
        "id": "fr_elementary_jobs_002"
    },
    {
        "word": "crêpe",
        "level": "elementary",
        "theme": "food_drink",
        "article": "la",
        "emoji": "🥞",
        "form": "noun",
        "classification": "regular",
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
        ],
        "lang": "fr",
        "transcription": "/kʁɛp/",
        "id": "fr_elementary_food_drink_002"
    },
    {
        "word": "fondue",
        "level": "elementary",
        "theme": "food_drink",
        "article": "la",
        "emoji": "🫕",
        "form": "noun",
        "classification": "regular",
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
        ],
        "lang": "fr",
        "transcription": "/fɔ̃dy/",
        "id": "fr_elementary_food_drink_003"
    },
    {
        "word": "fromage",
        "level": "elementary",
        "theme": "food_drink",
        "article": "le",
        "emoji": "🧀",
        "form": "noun",
        "classification": "regular",
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
        ],
        "lang": "fr",
        "transcription": "/fʁɔmaʒ/",
        "id": "fr_elementary_food_drink_004"
    },
    {
        "word": "riz",
        "level": "elementary",
        "theme": "food_drink",
        "article": "le",
        "emoji": "🍚",
        "form": "noun",
        "classification": "regular",
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
        ],
        "lang": "fr",
        "transcription": "/ʁi/",
        "id": "fr_elementary_food_drink_005"
    },
    {
        "word": "tomate",
        "level": "elementary",
        "theme": "food_drink",
        "article": "la",
        "emoji": "🍅",
        "form": "noun",
        "classification": "regular",
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
        ],
        "lang": "fr",
        "transcription": "/tɔmat/",
        "id": "fr_elementary_food_drink_006"
    },
    {
        "word": "pomme de terre",
        "level": "elementary",
        "theme": "food_drink",
        "article": "la",
        "emoji": "🥔",
        "form": "noun",
        "classification": "regular",
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
        ],
        "lang": "fr",
        "transcription": "/pɔm də tɛʁ/",
        "id": "fr_elementary_food_drink_007"
    },
    {
        "word": "vin",
        "level": "elementary",
        "theme": "food_drink",
        "article": "le",
        "baseWord": "vin",
        "emoji": "🍷",
        "form": "noun",
        "classification": "regular",
        "plural": "vin",
        "lang": "fr",
        "transcription": "/vɛ̃/",
        "definitions": [
            {
                "text": "vin",
                "examples": []
            }
        ],
        "id": "fr_elementary_food_drink_008"
    },
    {
        "word": "bière",
        "level": "elementary",
        "theme": "food_drink",
        "article": "la",
        "baseWord": "bière",
        "emoji": "🍺",
        "form": "noun",
        "classification": "regular",
        "plural": "bière",
        "lang": "fr",
        "transcription": "/bjɛʁ/",
        "definitions": [
            {
                "text": "bière",
                "examples": []
            }
        ],
        "id": "fr_elementary_food_drink_009"
    },
    {
        "word": "hôpital",
        "level": "elementary",
        "theme": "places",
        "article": "l'",
        "emoji": "🏥",
        "form": "noun",
        "classification": "regular",
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
        ],
        "lang": "fr",
        "transcription": "/opital/",
        "id": "fr_elementary_places_007"
    },
    {
        "word": "cinéma",
        "level": "elementary",
        "theme": "places",
        "article": "le",
        "emoji": "🎬",
        "form": "noun",
        "classification": "regular",
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
        ],
        "lang": "fr",
        "transcription": "/sinema/",
        "id": "fr_elementary_places_008"
    },
    {
        "word": "restaurant",
        "level": "elementary",
        "theme": "places",
        "article": "le",
        "emoji": "🍴",
        "form": "noun",
        "classification": "regular",
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
        ],
        "lang": "fr",
        "transcription": "/ʁɛstɔʁɑ̃/",
        "id": "fr_elementary_places_009"
    },
    {
        "word": "robe",
        "level": "elementary",
        "theme": "clothes",
        "article": "la",
        "emoji": "👗",
        "form": "noun",
        "classification": "regular",
        "plural": "robes",
        "lang": "fr",
        "transcription": "/ʁɔb/",
        "definitions": [
            {
                "text": "robe",
                "examples": []
            }
        ],
        "id": "fr_elementary_clothes_004"
    },
    {
        "word": "veste",
        "level": "elementary",
        "theme": "clothes",
        "article": "la",
        "emoji": "🧥",
        "form": "noun",
        "classification": "regular",
        "plural": "vestes",
        "lang": "fr",
        "transcription": "/vɛst/",
        "definitions": [
            {
                "text": "veste",
                "examples": []
            }
        ],
        "id": "fr_elementary_clothes_005"
    },
    {
        "word": "jupe",
        "level": "elementary",
        "theme": "clothes",
        "article": "la",
        "emoji": "👗",
        "form": "noun",
        "classification": "regular",
        "plural": "jupes",
        "lang": "fr",
        "transcription": "/ʒyp/",
        "definitions": [
            {
                "text": "jupe",
                "examples": []
            }
        ],
        "id": "fr_elementary_clothes_006"
    },
    {
        "word": "canapé",
        "level": "elementary",
        "theme": "places",
        "article": "le",
        "emoji": "🛋️",
        "form": "noun",
        "classification": "regular",
        "plural": "canapés",
        "lang": "fr",
        "transcription": "/kanape/",
        "definitions": [
            {
                "text": "canapé",
                "examples": []
            }
        ],
        "id": "fr_elementary_furniture_001"
    },
    {
        "word": "lampe",
        "level": "elementary",
        "theme": "places",
        "article": "la",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "plural": "lampes",
        "lang": "fr",
        "transcription": "/lɑ̃p/",
        "definitions": [
            {
                "text": "lampe",
                "examples": []
            }
        ],
        "id": "fr_elementary_furniture_002"
    },
    {
        "word": "bureau",
        "level": "elementary",
        "theme": "places",
        "emoji": "🏢",
        "form": "noun",
        "classification": "regular",
        "plural": "bureaux",
        "lang": "fr",
        "transcription": "/byʁo/",
        "definitions": [
            {
                "text": "bureau",
                "examples": []
            }
        ],
        "id": "fr_elementary_furniture_003"
    },
    {
        "word": "montre",
        "level": "elementary",
        "theme": "clothes",
        "article": "la",
        "emoji": "⌚",
        "form": "noun",
        "classification": "regular",
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
        ],
        "lang": "fr",
        "transcription": "/mɔ̃tʁ/",
        "id": "fr_elementary_clothes_001"
    },
    {
        "word": "portefeuille",
        "level": "elementary",
        "theme": "clothes",
        "article": "le",
        "emoji": "👛",
        "form": "noun",
        "classification": "regular",
        "plural": "portefeuilles",
        "definitions": [
            {
                "text": "Un petit accessoire pour ranger son argent et ses cartes.",
                "examples": [
                    "J'ai perdu mon portefeuille.",
                    "Mets l'argent dans ton portefeuille."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/pɔʁtəfœj/",
        "id": "fr_elementary_clothes_002"
    },
    {
        "word": "lunettes",
        "level": "elementary",
        "theme": "clothes",
        "emoji": "👓",
        "form": "noun",
        "classification": "regular",
        "plural": "lunettes",
        "lang": "fr",
        "transcription": "/lynɛt/",
        "definitions": [
            {
                "text": "lunettes",
                "examples": []
            }
        ],
        "id": "fr_elementary_clothes_003"
    },
    {
        "word": "lion",
        "level": "elementary",
        "theme": "animals",
        "article": "le",
        "emoji": "🦁",
        "form": "noun",
        "classification": "regular",
        "plural": "lions",
        "lang": "fr",
        "transcription": "/ljɔ̃/",
        "definitions": [
            {
                "text": "lion",
                "examples": []
            }
        ],
        "id": "fr_elementary_animals_001"
    },
    {
        "word": "tigre",
        "level": "elementary",
        "theme": "animals",
        "article": "le",
        "emoji": "🐯",
        "form": "noun",
        "classification": "regular",
        "plural": "tigres",
        "lang": "fr",
        "transcription": "/tiɡʁ/",
        "definitions": [
            {
                "text": "tigre",
                "examples": []
            }
        ],
        "id": "fr_elementary_animals_002"
    },
    {
        "word": "cheval",
        "level": "elementary",
        "theme": "animals",
        "article": "le",
        "emoji": "🐎",
        "form": "noun",
        "classification": "regular",
        "plural": "chevaux",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "caballus"
        },
        "lang": "fr",
        "transcription": "/ʃəval/",
        "definitions": [
            {
                "text": "cheval",
                "examples": []
            }
        ],
        "id": "fr_elementary_animals_003"
    },
    {
        "word": "bras",
        "level": "elementary",
        "theme": "body",
        "article": "le",
        "emoji": "💪",
        "form": "noun",
        "classification": "regular",
        "plural": "bras",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "bracchium"
        },
        "lang": "fr",
        "transcription": "/bʁa/",
        "definitions": [
            {
                "text": "bras",
                "examples": []
            }
        ],
        "id": "fr_elementary_body_001"
    },
    {
        "word": "université",
        "level": "elementary",
        "theme": "places",
        "emoji": "🎓",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Un établissement d'enseignement supérieur.",
                "examples": [
                    "Elle étudie à l'université.",
                    "L'université est fermée pendant les vacances."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/ynivɛʁsite/",
        "id": "fr_elementary_places_010"
    },
    {
        "word": "cuisine locale",
        "level": "elementary",
        "theme": "food_drink",
        "article": "la",
        "emoji": "🍜",
        "form": "noun",
        "classification": "regular",
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
        ],
        "lang": "fr",
        "transcription": "/kɥizin lɔkal/",
        "id": "fr_elementary_food_drink_011"
    },
    {
        "word": "oiseau",
        "level": "elementary",
        "theme": "animals",
        "article": "l'",
        "baseWord": "oiseau",
        "emoji": "🐦",
        "form": "noun",
        "classification": "regular",
        "plural": "oiseaux",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "avicellus"
        },
        "lang": "fr",
        "transcription": "/wazo/",
        "definitions": [
            {
                "text": "oiseau",
                "examples": []
            }
        ],
        "id": "fr_elementary_animals_004"
    },
    {
        "word": "pollution",
        "level": "elementary",
        "theme": "environment",
        "emoji": "🏭",
        "article": "la",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Dommages causés à l'environnement par des substances nocives.",
                "examples": [
                    "La pollution de l'air est un gros problème ici."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/pɔlysjɔ̃/",
        "id": "fr_elementary_environment_007"
    },
    {
        "word": "heures supplémentaires",
        "level": "elementary",
        "theme": "work",
        "emoji": "⏰",
        "form": "phrase",
        "classification": "regular",
        "article": "les",
        "plural": "heures supplémentaires",
        "definitions": [
            {
                "text": "Heures de travail effectuées au-delà de la journée normale de travail.",
                "examples": [
                    "Elle fait des heures supplémentaires pour finir le projet."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/œʁ syplemɑ̃tɛʁ/",
        "id": "fr_elementary_work_003"
    },
    {
        "word": "promotion",
        "level": "elementary",
        "theme": "work",
        "emoji": "📈",
        "form": "noun",
        "classification": "regular",
        "article": "la",
        "plural": "promotions",
        "definitions": [
            {
                "text": "Passage à un poste plus élevé et mieux rémunéré au sein de la même entreprise.",
                "examples": [
                    "Il a obtenu une promotion le mois dernier."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/pʁɔmɔsjɔ̃/",
        "id": "fr_elementary_work_004"
    },
    {
        "word": "entretien d'embauche",
        "level": "elementary",
        "theme": "work",
        "emoji": "🤝",
        "form": "noun",
        "classification": "regular",
        "article": "l'",
        "plural": "entretiens d'embauche",
        "definitions": [
            {
                "text": "Une réunion formelle où l'on pose des questions à quelqu'un pour un emploi.",
                "examples": [
                    "J'ai un entretien d'embauche lundi."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/ɑ̃tʁətjɛ̃ dɑ̃boʃ/",
        "id": "fr_elementary_work_005"
    },
    {
        "word": "contrat",
        "level": "elementary",
        "theme": "work",
        "emoji": "📄",
        "form": "noun",
        "classification": "regular",
        "article": "le",
        "plural": "contrats",
        "definitions": [
            {
                "text": "Un accord écrit entre un employeur et un employé.",
                "examples": [
                    "Elle a signé un contrat de deux ans."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/kɔ̃tʁa/",
        "id": "fr_elementary_work_006"
    },
    {
        "word": "date limite",
        "level": "elementary",
        "theme": "work",
        "emoji": "⏳",
        "form": "noun",
        "classification": "regular",
        "article": "la",
        "plural": "dates limites",
        "definitions": [
            {
                "text": "Le moment ultime où un travail doit être terminé.",
                "examples": [
                    "La date limite est vendredi."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/dat limit/",
        "id": "fr_elementary_work_007"
    },
    {
        "word": "expérience",
        "level": "elementary",
        "theme": "work",
        "emoji": "🧠",
        "form": "noun",
        "classification": "regular",
        "article": "l'",
        "plural": "expériences",
        "definitions": [
            {
                "text": "Connaissances ou compétences acquises en faisant quelque chose.",
                "examples": [
                    "Il a cinq ans d'expérience."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/ɛkspeʁjɑ̃s/",
        "id": "fr_elementary_work_008"
    },
    {
        "word": "prêt hypothécaire",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "🏠",
        "form": "noun",
        "classification": "regular",
        "article": "le",
        "plural": "prêts hypothécaires",
        "definitions": [
            {
                "text": "Un prêt d'une banque pour acheter une maison ou un appartement.",
                "examples": [
                    "Ils ont un gros prêt hypothécaire."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/pʁɛ ipɔtekɛʁ/",
        "id": "fr_elementary_numbers_001"
    },
    {
        "word": "prêt",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "💰",
        "form": "noun",
        "classification": "regular",
        "article": "le",
        "plural": "prêts",
        "definitions": [
            {
                "text": "Argent emprunté à une banque qui doit être remboursé.",
                "examples": [
                    "Elle a contracté un prêt pour acheter une voiture."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/pʁɛ/",
        "id": "fr_elementary_numbers_002"
    },
    {
        "word": "facture",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "🧾",
        "form": "noun",
        "classification": "regular",
        "article": "la",
        "plural": "factures",
        "definitions": [
            {
                "text": "Un document qui indique combien d'argent vous devez payer.",
                "examples": [
                    "Je paie ma facture d'électricité chaque mois."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/faktyʁ/",
        "id": "fr_elementary_numbers_003"
    },
    {
        "word": "dette",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "💸",
        "form": "noun",
        "classification": "regular",
        "article": "la",
        "plural": "dettes",
        "definitions": [
            {
                "text": "Argent que vous devez à une autre personne ou à une banque.",
                "examples": [
                    "Il a beaucoup de dettes."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/dɛt/",
        "id": "fr_elementary_numbers_004"
    },
    {
        "word": "compte",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "🏦",
        "form": "noun",
        "classification": "regular",
        "article": "le",
        "plural": "comptes",
        "definitions": [
            {
                "text": "Un arrangement avec une banque pour stocker votre argent.",
                "examples": [
                    "J'ai un compte d'épargne."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/kɔ̃t/",
        "id": "fr_elementary_numbers_005"
    },
    {
        "word": "budget",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "📊",
        "form": "noun",
        "classification": "regular",
        "article": "le",
        "plural": "budgets",
        "definitions": [
            {
                "text": "Un plan pour la façon de dépenser l'argent.",
                "examples": [
                    "Nous avons besoin d'un budget mensuel."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/bydʒɛ/",
        "id": "fr_elementary_numbers_006"
    },
    {
        "word": "régime",
        "level": "elementary",
        "theme": "food_drink",
        "article": "le",
        "emoji": "🥗",
        "form": "noun",
        "classification": "regular",
        "plural": "régimes",
        "definitions": [
            {
                "text": "La nourriture qu'une personne mange normalement ; ou un plan alimentaire spécial.",
                "examples": [
                    "Elle suit un régime sain."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/ʁeʒim/",
        "id": "fr_elementary_food_drink_012"
    },
    {
        "word": "rendez-vous",
        "level": "elementary",
        "theme": "health_medicine",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "article": "le",
        "plural": "rendez-vous",
        "definitions": [
            {
                "text": "Un moment que vous organisez pour rencontrer quelqu'un, par exemple un médecin.",
                "examples": [
                    "J'ai un rendez-vous chez le médecin mardi."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/ʁɑ̃devu/",
        "id": "fr_elementary_health_medicine_003"
    },
    {
        "word": "vitamine",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "💊",
        "form": "noun",
        "classification": "regular",
        "article": "la",
        "plural": "vitamines",
        "definitions": [
            {
                "text": "Une substance naturelle dans les aliments dont votre corps a besoin pour rester en bonne santé.",
                "examples": [
                    "Les oranges contiennent de la vitamine C."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/vitamin/",
        "id": "fr_elementary_food_drink_013"
    },
    {
        "word": "douleur",
        "level": "elementary",
        "theme": "health_medicine",
        "emoji": "🤕",
        "form": "noun",
        "classification": "regular",
        "article": "la",
        "plural": "douleurs",
        "definitions": [
            {
                "text": "Une sensation désagréable dans votre corps quand quelque chose ne va pas.",
                "examples": [
                    "Elle a une douleur au dos."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/dulœʁ/",
        "id": "fr_elementary_health_medicine_004"
    },
    {
        "word": "soutien",
        "level": "elementary",
        "theme": "people",
        "emoji": "🤝",
        "form": "noun",
        "classification": "regular",
        "article": "le",
        "plural": "soutiens",
        "definitions": [
            {
                "text": "Aide ou encouragement donné à quelqu'un.",
                "examples": [
                    "J'ai besoin de votre soutien."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/sutjɛ̃/",
        "id": "fr_elementary_people_025"
    },
    {
        "word": "confiance",
        "level": "elementary",
        "theme": "people",
        "emoji": "🤝",
        "form": "noun",
        "classification": "regular",
        "article": "la",
        "definitions": [
            {
                "text": "Le fait de croire que quelqu'un est honnête et fiable.",
                "examples": [
                    "La confiance est importante dans une relation."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/kɔ̃fjɑ̃s/",
        "id": "fr_elementary_people_026"
    },
    {
        "word": "compromis",
        "level": "elementary",
        "theme": "people",
        "emoji": "🤝",
        "form": "noun",
        "classification": "regular",
        "article": "le",
        "plural": "compromis",
        "definitions": [
            {
                "text": "Un accord où les deux parties acceptent moins que ce qu'elles voulaient.",
                "examples": [
                    "Les bonnes relations ont besoin de compromis."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/kɔ̃pʁɔmi/",
        "id": "fr_elementary_people_027"
    },
    {
        "word": "voyage",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🛤️",
        "form": "noun",
        "classification": "regular",
        "article": "le",
        "plural": "voyages",
        "definitions": [
            {
                "text": "Déplacement d'un endroit à un autre.",
                "examples": [
                    "Le trajet jusqu'au travail prend 40 minutes."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/vwajaʒ/",
        "id": "fr_elementary_travel_003"
    },
    {
        "word": "à l'étranger",
        "level": "elementary",
        "theme": "travel",
        "emoji": "✈️",
        "form": "adverb",
        "definitions": [
            {
                "text": "Dans ou vers un autre pays.",
                "examples": [
                    "Ils vont à l'étranger chaque été."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/a letʁɑ̃ʒe/",
        "id": "fr_elementary_travel_004"
    },
    {
        "word": "destination",
        "level": "elementary",
        "theme": "travel",
        "emoji": "📍",
        "form": "noun",
        "classification": "regular",
        "article": "la",
        "plural": "destinations",
        "definitions": [
            {
                "text": "L'endroit où vous voyagez.",
                "examples": [
                    "Paris est une destination populaire."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/dɛstinasjɔ̃/",
        "id": "fr_elementary_travel_005"
    },
    {
        "word": "vol",
        "level": "elementary",
        "theme": "travel",
        "emoji": "✈️",
        "form": "noun",
        "classification": "regular",
        "article": "le",
        "plural": "vols",
        "definitions": [
            {
                "text": "Un trajet effectué en avion.",
                "examples": [
                    "Le vol pour Londres dure deux heures."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/vɔl/",
        "id": "fr_elementary_travel_006"
    },
    {
        "word": "bagages",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🧳",
        "form": "noun",
        "classification": "regular",
        "article": "les",
        "plural": "bagages",
        "definitions": [
            {
                "text": "Sacs et valises que vous emportez avec vous lorsque vous voyagez.",
                "examples": [
                    "Elle a beaucoup de bagages."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/baɡaʒ/",
        "id": "fr_elementary_travel_007"
    },
    {
        "word": "quartier",
        "level": "elementary",
        "theme": "places",
        "emoji": "🏘️",
        "form": "noun",
        "classification": "regular",
        "article": "le",
        "plural": "quartiers",
        "definitions": [
            {
                "text": "La zone autour de votre maison.",
                "examples": [
                    "Nous vivons dans un quartier sûr."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/kaʁtje/",
        "id": "fr_elementary_places_011"
    },
    {
        "word": "communauté",
        "level": "elementary",
        "theme": "places",
        "emoji": "👥",
        "form": "noun",
        "classification": "regular",
        "article": "la",
        "plural": "communautés",
        "definitions": [
            {
                "text": "Un groupe de personnes qui vivent dans la même zone ou partagent des intérêts.",
                "examples": [
                    "Elle est active dans sa communauté locale."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "/kɔmynote/",
        "id": "fr_elementary_places_012"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();