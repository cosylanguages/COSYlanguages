(function() {
    const data = {
    "fr": [
        {
            "word": "médecin",
            "level": "starter",
            "theme": "jobs_A0",
            "numberPlural": "2 médecin",
            "answer": "deux médecins",
            "emoji": "🧑‍⚕️",
            "form": "noun",
            "plural": "médecins",
            "definitions": [
                {
                    "text": "Une personne qui soigne les gens malades.",
                    "examples": [
                        "Le médecin travaille à l'hôpital.",
                        "Je dois voir un médecin."
                    ]
                },
                {
                    "text": "Cette personne travaille généralement dans un hôpital ou une clinique.",
                    "examples": [
                        "Les médecins portent une blouse blanche."
                    ]
                }
            ]
        },
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
            "word": "artiste",
            "level": "elementary",
            "theme": "neighbourhood_A2",
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
            "word": "chef",
            "level": "elementary",
            "theme": "neighbourhood_A2",
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
            "word": "avocat",
            "level": "upper-intermediate",
            "theme": "academic_vocabulary_B2",
            "emoji": "⚖️",
            "form": "noun",
            "plural": "avocats",
            "definitions": [
                {
                    "text": "Une personne qui donne des conseils juridiques et représente les gens au tribunal.",
                    "examples": [
                        "Je dois parler à mon avocat.",
                        "L'avocat est au tribunal."
                    ]
                },
                {
                    "text": "Cette personne travaille souvent dans un bureau ou un tribunal.",
                    "examples": [
                        "Les avocats lisent beaucoup de documents."
                    ]
                }
            ]
        },
        {
            "word": "professeur",
            "level": "starter",
            "theme": "jobs_A0",
            "emoji": "🧑‍🏫",
            "form": "noun",
            "plural": "professeurs",
            "definitions": [
                {
                    "text": "Une personne qui aide à apprendre.",
                    "examples": [
                        "Le professeur parle à la classe.",
                        "C'est un bon professeur."
                    ]
                },
                {
                    "text": "Cette personne travaille généralement dans une école ou une université.",
                    "examples": [
                        "Les professeurs expliquent de nouveaux sujets."
                    ]
                }
            ]
        },
        {
            "word": "infirmier",
            "level": "elementary",
            "theme": "neighbourhood_A2",
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
            "word": "ratatouille",
            "level": "starter",
            "theme": "food_drink_A0",
            "form": "noun",
            "plural": "ratatouilles",
            "definitions": [
                {
                    "text": "Un plat provençal composé de légumes cuits.",
                    "examples": [
                        "On met des aubergines dans la ratatouille.",
                        "La ratatouille est un plat sain."
                    ]
                },
                {
                    "text": "C'est un plat traditionnel du sud de la France.",
                    "examples": [
                        "On peut manger la ratatouille chaude ou froide."
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
            "word": "croissant",
            "level": "starter",
            "theme": "food_drink_A0",
            "form": "noun",
            "plural": "croissants",
            "definitions": [
                {
                    "text": "Une viennoiserie en forme de lune croissante.",
                    "examples": [
                        "Je mange un croissant au petit-déjeuner.",
                        "Le boulanger fait des croissants frais."
                    ]
                },
                {
                    "text": "C'est un symbole classique de la gastronomie française.",
                    "examples": [
                        "Un bon croissant doit être croustillant."
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
            "word": "pomme",
            "level": "starter",
            "theme": "food_drink_A0",
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
            ]
        },
        {
            "word": "pain",
            "level": "starter",
            "theme": "food_drink_A0",
            "article": "le",
            "baseWord": "pain",
            "emoji": "🥖",
            "form": "noun",
            "plural": "pains",
            "definitions": [
                {
                    "text": "Un aliment fait de farine et d'eau, puis cuit au four.",
                    "examples": [
                        "J'aime le pain frais.",
                        "Peux-tu acheter du pain ?"
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
            "word": "oeuf",
            "level": "starter",
            "theme": "food_drink_A0",
            "emoji": "🥚",
            "form": "noun",
            "plural": "oeufs",
            "definitions": [
                {
                    "text": "Un objet de forme ovale pondu par une poule.",
                    "examples": [
                        "J'ai mangé un oeuf à la coque.",
                        "On a besoin d'oeufs pour faire un gâteau."
                    ]
                },
                {
                    "text": "On mange souvent des œufs au petit-déjeuner.",
                    "examples": [
                        "Les oeufs sont riches en protéines."
                    ]
                }
            ]
        },
        {
            "word": "lait",
            "level": "starter",
            "theme": "food_drink_A0",
            "emoji": "🥛",
            "form": "noun",
            "plural": "lait",
            "definitions": [
                {
                    "text": "Un liquide blanc produit par les vaches.",
                    "examples": [
                        "Tu veux du lait dans ton café ?",
                        "Les enfants boivent du lait."
                    ]
                },
                {
                    "text": "On utilise le lait pour faire du fromage.",
                    "examples": [
                        "Le lait doit rester au frais."
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
            "word": "café",
            "level": "starter",
            "theme": "food_drink_A0",
            "article": "le",
            "baseWord": "café",
            "emoji": "☕",
            "form": "noun",
            "plural": "café"
        },
        {
            "word": "thé",
            "level": "starter",
            "theme": "food_drink_A0",
            "article": "le",
            "baseWord": "thé",
            "emoji": "🍵",
            "form": "noun",
            "plural": "thé"
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
            "word": "jus",
            "level": "starter",
            "theme": "food_drink_A0",
            "article": "le",
            "baseWord": "jus",
            "emoji": "🧃",
            "form": "noun",
            "plural": "jus"
        },
        {
            "word": "eau",
            "level": "starter",
            "theme": "food_drink_A0",
            "article": "l'",
            "baseWord": "eau",
            "emoji": "🚰",
            "form": "noun",
            "plural": "eaux",
            "definitions": [
                {
                    "text": "Un liquide clair que nous buvons pour rester en vie.",
                    "examples": [
                        "Je bois un verre d'eau.",
                        "L'eau est froide."
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
            "word": "parc",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🌳",
            "form": "noun",
            "plural": "parcs",
            "definitions": [
                {
                    "text": "Un grand jardin public avec de l'herbe et des arbres.",
                    "examples": [
                        "Je joue au ballon dans le parc.",
                        "Il y a des fleurs au parc."
                    ]
                }
            ]
        },
        {
            "word": "école",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🏫",
            "form": "noun",
            "plural": "écoles",
            "definitions": [
                {
                    "text": "Un endroit où les enfants vont pour apprendre.",
                    "examples": [
                        "Je vais à l'école en bus.",
                        "Mon école est près de ma maison."
                    ]
                }
            ]
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
            "word": "t-shirt",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👕",
            "form": "noun",
            "plural": "t-shirts"
        },
        {
            "word": "pantalon",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👖",
            "form": "noun",
            "plural": "pantalons"
        },
        {
            "word": "robe",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "👗",
            "form": "noun",
            "plural": "robes"
        },
        {
            "word": "chaussures",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👟",
            "form": "noun",
            "plural": "chaussures"
        },
        {
            "word": "chapeau",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👒",
            "form": "noun",
            "plural": "chapeaus"
        },
        {
            "word": "veste",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🧥",
            "form": "noun",
            "plural": "vestes"
        },
        {
            "word": "jupe",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "👗",
            "form": "noun",
            "plural": "jupes"
        },
        {
            "word": "chaise",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🪑",
            "form": "noun",
            "plural": "chaises"
        },
        {
            "word": "table",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🪑",
            "form": "noun",
            "plural": "tables"
        },
        {
            "word": "lit",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🛏️",
            "form": "noun",
            "plural": "lits"
        },
        {
            "word": "canapé",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🛋️",
            "form": "noun",
            "plural": "canapés"
        },
        {
            "word": "lampe",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "💡",
            "form": "noun",
            "plural": "lampes"
        },
        {
            "word": "bureau",
            "level": "elementary",
            "theme": "places_buildings_activities_A2",
            "theme_alt": "grammar_plurals",
            "numberPlural": "3 bureau",
            "answer": "trois bureaux",
            "emoji": "🏢",
            "form": "noun",
            "plural": "bureaux"
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
            "word": "grand",
            "level": "starter",
            "theme": "adjectives_A0",
            "form": "noun",
            "plural": "grands",
            "definitions": [
                {
                    "text": "Une personne ou une chose qui est de grande taille de bas en haut.",
                    "examples": [
                        "Il est très grand.",
                        "Ce bâtiment est grand."
                    ]
                }
            ]
        },
        {
            "word": "petit",
            "level": "starter",
            "theme": "adjectives_A0",
            "form": "noun",
            "plural": "petits",
            "definitions": [
                {
                    "text": "Une personne ou une chose qui n'est pas grande.",
                    "examples": [
                        "Elle est petite.",
                        "Le crayon est petit."
                    ]
                }
            ]
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
            "word": "mince",
            "level": "intermediate",
            "theme": "society_community_B1",
            "form": "noun",
            "plural": "minces"
        },
        {
            "word": "jeune",
            "level": "starter",
            "theme": "adjectives_A0",
            "form": "noun",
            "plural": "jeunes"
        },
        {
            "word": "vieux",
            "level": "starter",
            "theme": "adjectives_A0",
            "form": "noun",
            "plural": "vieux"
        },
        {
            "word": "se réveiller",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "⏰",
            "form": "noun",
            "plural": "se réveillers"
        },
        {
            "word": "se brosser les dents",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🪥",
            "form": "noun",
            "plural": "se brosser les dents"
        },
        {
            "word": "prendre une douche",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🚿",
            "form": "noun",
            "plural": "prendre une douches"
        },
        {
            "word": "clé",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🔑",
            "form": "noun",
            "plural": "clés"
        },
        {
            "word": "téléphone",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "📱",
            "form": "noun",
            "plural": "téléphones"
        },
        {
            "word": "livre",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "📖",
            "form": "noun",
            "plural": "livres",
            "definitions": [
                {
                    "text": "Un objet avec beaucoup de pages pour lire une histoire.",
                    "examples": [
                        "C'est mon livre préféré.",
                        "Ouvre ton livre à la page dix."
                    ]
                },
                {
                    "text": "Une ancienne unité de mesure ou monnaie (la livre).",
                    "examples": [
                        "J'achète une livre de pommes.",
                        "La livre sterling est la monnaie du Royaume-Uni."
                    ]
                }
            ]
        },
        {
            "word": "montre",
            "level": "elementary",
            "theme": "neighbourhood_A2",
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
            "theme": "neighbourhood_A2",
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
            "theme": "neighbourhood_A2",
            "emoji": "👓",
            "form": "noun",
            "plural": "lunettes"
        },
        {
            "word": "chat",
            "level": "starter",
            "theme": "weather_A0",
            "article": "le",
            "baseWord": "chat",
            "emoji": "🐈",
            "numberPlural": "2 chat",
            "answer": "deux chats",
            "form": "noun",
            "plural": "chats",
            "definitions": [
                {
                    "text": "Un petit animal à fourrure que beaucoup de gens gardent à la maison.",
                    "examples": [
                        "Mon chat dort.",
                        "J'aime les chats."
                    ]
                }
            ]
        },
        {
            "word": "chien",
            "level": "starter",
            "theme": "weather_A0",
            "article": "le",
            "baseWord": "chien",
            "emoji": "🐕",
            "numberPlural": "5 chien",
            "answer": "cinq chiens",
            "form": "noun",
            "plural": "chiens",
            "definitions": [
                {
                    "text": "Un animal qui est souvent appelé 'le meilleur ami de l'homme'.",
                    "examples": [
                        "Je promène mon chien dans le parc.",
                        "Le chien aboie."
                    ]
                }
            ]
        },
        {
            "word": "oiseau",
            "level": "starter",
            "theme": "weather_A0",
            "emoji": "🐦",
            "form": "noun",
            "plural": "oiseaux"
        },
        {
            "word": "lion",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🦁",
            "form": "noun",
            "plural": "lions"
        },
        {
            "word": "tigre",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🐯",
            "form": "noun",
            "plural": "tigres"
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
            "word": "cheval",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🐎",
            "form": "noun",
            "plural": "chevaux"
        },
        {
            "word": "pluvieux",
            "level": "starter",
            "theme": "weather_A0",
            "emoji": "🌧️",
            "form": "noun",
            "plural": "pluvieux"
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
            "word": "chaud",
            "level": "intermediate",
            "theme": "environment_sustainability_B1",
            "emoji": "🔥",
            "form": "noun",
            "plural": "chauds"
        },
        {
            "word": "froid",
            "level": "starter",
            "theme": "weather_A0",
            "emoji": "❄️",
            "form": "noun",
            "plural": "froids"
        },
        {
            "word": "tête",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "👤",
            "form": "noun",
            "plural": "têtes",
            "definitions": [
                {
                    "text": "La partie supérieure du corps contenant le cerveau et le visage.",
                    "examples": [
                        "Il porte un chapeau sur la tête.",
                        "Elle a mal à la tête."
                    ]
                },
                {
                    "text": "Le chef ou le dirigeant d'un groupe.",
                    "examples": [
                        "Il est à la tête de l'entreprise.",
                        "C'est la tête pensante du projet."
                    ]
                }
            ]
        },
        {
            "word": "main",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "✋",
            "form": "noun",
            "plural": "mains",
            "definitions": [
                {
                    "text": "La partie du corps au bout du bras, avec des doigts.",
                    "examples": [
                        "Lave-toi les mains.",
                        "Elle tient son sac à la main."
                    ]
                },
                {
                    "text": "Une aide ou une assistance.",
                    "examples": [
                        "Peux-tu me donner un coup de main ?",
                        "J'ai besoin d'une main secourable."
                    ]
                }
            ]
        },
        {
            "word": "jambe",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "🦵",
            "form": "noun",
            "plural": "jambes"
        },
        {
            "word": "oeil",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "👁️",
            "form": "noun",
            "plural": "yeux",
            "definitions": [
                {
                    "text": "L'organe de la vue.",
                    "examples": [
                        "Ferme les yeux.",
                        "Elle a les yeux bleus."
                    ]
                }
            ]
        },
        {
            "word": "nez",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "👃",
            "form": "noun",
            "plural": "nez"
        },
        {
            "word": "bouche",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "👄",
            "form": "noun",
            "plural": "bouches"
        },
        {
            "word": "oreille",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "👂",
            "form": "noun",
            "plural": "oreilles"
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
            "word": "pied",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "🦶",
            "form": "noun",
            "plural": "pieds"
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
            "word": "psychologue",
            "level": "upper-intermediate",
            "theme": "academic_vocabulary_B2",
            "emoji": "🧠",
            "form": "noun",
            "plural": "psychologues",
            "definitions": [
                {
                    "text": "Une personne qui étudie le comportement et la pensée.",
                    "examples": [
                        "Le psychologue écoute son patient.",
                        "Elle est psychologue clinicienne."
                    ]
                },
                {
                    "text": "Cette personne travaille souvent dans un cabinet privé.",
                    "examples": [
                        "Les psychologues aident à surmonter les difficultés."
                    ]
                }
            ]
        },
        {
            "word": "philosophe",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🧐",
            "form": "noun",
            "plural": "philosophes",
            "definitions": [
                {
                    "text": "Une personne qui réfléchit au sens de la vie.",
                    "examples": [
                        "Platon était un grand philosophe.",
                        "Il étudie les oeuvres des philosophes."
                    ]
                },
                {
                    "text": "Cette personne lit beaucoup de livres et pose des questions.",
                    "examples": [
                        "Les philosophes débattent de l'éthique."
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
            "word": "réalité virtuelle",
            "level": "advanced",
            "theme": "science_tech_society_C1",
            "emoji": "🥽",
            "form": "noun",
            "plural": "réalité virtuelles"
        },
        {
            "word": "université",
            "level": "elementary",
            "theme": "career_A2",
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
            "word": "santé mentale",
            "level": "intermediate",
            "theme": "mental_health_B1",
            "emoji": "🧠",
            "form": "adjective"
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
            "word": "mère",
            "level": "starter",
            "theme": "immediate_family_A0",
            "emoji": "👩",
            "form": "noun",
            "definitions": [
                {
                    "text": "La femme qui est votre parent.",
                    "examples": [
                        "Ma mère est gentille.",
                        "J'aime ma mère."
                    ]
                },
                {
                    "text": "Cette personne est généralement la femme de votre père (ou un autre parent).",
                    "examples": [
                        "Les mères s'occupent de leurs enfants."
                    ]
                }
            ]
        },
        {
            "word": "père",
            "level": "starter",
            "theme": "immediate_family_A0",
            "emoji": "👨",
            "form": "noun",
            "definitions": [
                {
                    "text": "L'homme qui est votre parent.",
                    "examples": [
                        "Mon père est grand.",
                        "Il ressemble à son père."
                    ]
                },
                {
                    "text": "Cette personne est généralement le mari de votre mère (ou un autre parent).",
                    "examples": [
                        "Mon père travaille beaucoup."
                    ]
                }
            ]
        },
        {
            "word": "eau",
            "theme": "food_drink_A0",
            "level": "starter",
            "article": "l'",
            "baseWord": "eau",
            "emoji": "🚰",
            "form": "adjective",
            "plural": "eaux",
            "definitions": [
                {
                    "text": "Un liquide clair que nous buvons pour rester en vie.",
                    "examples": [
                        "Je bois un verre d'eau.",
                        "L'eau est froide."
                    ]
                }
            ]
        },
        {
            "word": "voiture",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "article": "la",
            "baseWord": "voiture",
            "numberPlural": "2 voiture",
            "answer": "deux voitures",
            "emoji": "🚗",
            "form": "adjective",
            "plural": "voitures"
        },
        {
            "word": "maison",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "article": "la",
            "baseWord": "maison",
            "numberPlural": "3 maison",
            "answer": "trois maisons",
            "emoji": "🏠",
            "form": "adjective",
            "plural": "maisons"
        },
        {
            "word": "livre",
            "level": "starter",
            "theme": "home_A0",
            "article": "le",
            "baseWord": "livre",
            "numberPlural": "des livre",
            "answer": "des livres",
            "emoji": "📚",
            "form": "adjective",
            "plural": "livres",
            "definitions": [
                {
                    "text": "De nombreuses pages avec des mots et des images que vous lisez.",
                    "examples": [
                        "Je lis un livre tous les soirs.",
                        "Ce livre est intéressant."
                    ]
                }
            ]
        },
        {
            "word": "oiseau",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "article": "l'",
            "baseWord": "oiseau",
            "numberPlural": "2 oiseau",
            "answer": "deux oiseaux",
            "emoji": "🐦",
            "form": "noun",
            "plural": "oiseaux"
        },
        {
            "word": "être",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "👤",
            "subtext": "avoir froid, avoir 20 ans",
            "form": "noun",
            "plural": "êtres"
        },
        {
            "word": "avoir",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👜",
            "subtext": "prendre le petit déjeuner, avoir une voiture",
            "form": "noun",
            "plural": "avoirs"
        },
        {
            "word": "aller",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🚶",
            "subtext": "aller à l'école, rentrer à la maison",
            "form": "noun",
            "plural": "allers"
        },
        {
            "word": "faire",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🛠️",
            "subtext": "faire les devoirs, faire du sport",
            "form": "noun",
            "plural": "faires"
        },
        {
            "word": "travailler",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "💼",
            "subtext": "travailler dans un bureau, travailler dur",
            "form": "noun",
            "plural": "travaillers"
        },
        {
            "word": "savoir",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "🧠",
            "subtext": "savoir la réponse, connaître une personne",
            "form": "noun",
            "plural": "savoirs"
        },
        {
            "word": "penser",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "💭",
            "subtext": "penser à, penser que",
            "form": "noun",
            "plural": "pensers"
        },
        {
            "word": "vouloir",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "🙏",
            "subtext": "vouloir de l'eau, vouloir aller",
            "form": "noun",
            "plural": "vouloirs"
        },
        {
            "word": "aimer",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "❤️",
            "subtext": "aimer ma famille, aimer voyager",
            "form": "noun",
            "plural": "aimers"
        },
        {
            "word": "écrire",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "✍️",
            "subtext": "écrire une lettre, écrire un message",
            "opposite": "lire",
            "oppositeEmoji": "📖",
            "form": "noun",
            "plural": "écrires"
        },
        {
            "word": "venir",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🏃‍♂️",
            "subtext": "venir ici, venir à la maison",
            "opposite": "aller",
            "oppositeEmoji": "🚶",
            "form": "noun",
            "plural": "venirs"
        },
        {
            "word": "donner",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🎁",
            "subtext": "donner un cadeau, donner de l'aide",
            "opposite": "prendre",
            "oppositeEmoji": "👜",
            "form": "adjective"
        },
        {
            "word": "prendre",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👜",
            "subtext": "prendre le bus, prendre une photo",
            "opposite": "donner",
            "oppositeEmoji": "🎁",
            "form": "adjective"
        },
        {
            "word": "trouver",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🔍",
            "form": "adjective"
        },
        {
            "word": "dire",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "🗣️",
            "form": "adjective"
        },
        {
            "word": "demander",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "❓",
            "form": "noun",
            "plural": "demanders"
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
            "word": "sentir",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "🌡️",
            "form": "noun",
            "plural": "sentirs"
        },
        {
            "word": "essayer",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🎯",
            "form": "noun",
            "plural": "essayers"
        },
        {
            "word": "partir",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🚪",
            "form": "noun",
            "plural": "partirs"
        },
        {
            "word": "appeler",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "📞",
            "form": "noun",
            "plural": "appelers"
        },
        {
            "word": "regarder",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "📺",
            "form": "noun",
            "plural": "regarders"
        },
        {
            "word": "utiliser",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🛠️",
            "form": "noun",
            "plural": "utilisers"
        },
        {
            "word": "obtenir",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "📥",
            "form": "noun",
            "plural": "obtenirs"
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
            "word": "commencer",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "▶️",
            "opposite": "finir",
            "oppositeEmoji": "🏁",
            "form": "noun",
            "plural": "commencers"
        },
        {
            "word": "aider",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "🤝",
            "form": "noun",
            "plural": "aiders"
        },
        {
            "word": "jouer",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🎮",
            "form": "noun",
            "plural": "jouers"
        },
        {
            "word": "courir",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🏃",
            "form": "noun",
            "plural": "courirs"
        },
        {
            "word": "bouger",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "📦",
            "form": "noun",
            "plural": "bougers"
        },
        {
            "word": "vivre",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "🏠",
            "opposite": "mourir",
            "oppositeEmoji": "⚰️",
            "form": "noun",
            "plural": "vivres"
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
            "word": "apporter",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🎁",
            "form": "noun",
            "plural": "apporters"
        },
        {
            "word": "se passer",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "⚡",
            "form": "adjective"
        },
        {
            "word": "s'asseoir",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🪑",
            "opposite": "être debout",
            "oppositeEmoji": "🧍",
            "form": "noun",
            "plural": "s'asseoirs"
        },
        {
            "word": "être debout",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🧍",
            "opposite": "s'asseoir",
            "oppositeEmoji": "🪑",
            "form": "noun",
            "plural": "être debouts"
        },
        {
            "word": "perdre",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "📉",
            "opposite": "gagner",
            "oppositeEmoji": "🏆",
            "form": "noun",
            "plural": "perdres"
        },
        {
            "word": "payer",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "💰",
            "form": "noun",
            "plural": "payers"
        },
        {
            "word": "rencontrer",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "🤝",
            "form": "noun",
            "plural": "rencontrers"
        },
        {
            "word": "inclure",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "➕",
            "form": "noun",
            "plural": "inclures"
        },
        {
            "word": "continuer",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "➡️",
            "form": "noun",
            "plural": "continuers"
        },
        {
            "word": "poser",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "⚙️",
            "form": "noun",
            "plural": "posers"
        },
        {
            "word": "apprendre",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "📚",
            "form": "noun",
            "plural": "apprendres"
        },
        {
            "word": "changer",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🔄",
            "form": "adjective"
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
            "word": "comprendre",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "💡",
            "form": "noun",
            "plural": "comprendres"
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
            "word": "s'arrêter",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🛑",
            "form": "noun",
            "plural": "s'arrêters"
        },
        {
            "word": "créer",
            "level": "elementary",
            "theme": "leisure_hobbies_A2",
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
            "word": "ajouter",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "➕",
            "form": "noun",
            "plural": "ajouters"
        },
        {
            "word": "dépenser",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "💸",
            "form": "noun",
            "plural": "dépensers"
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
            "word": "ouvrir",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "📖",
            "opposite": "fermer",
            "oppositeEmoji": "🔒",
            "form": "noun",
            "plural": "ouvrirs"
        },
        {
            "word": "gagner",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🏆",
            "opposite": "perdre",
            "oppositeEmoji": "📉",
            "form": "noun",
            "plural": "gagners"
        },
        {
            "word": "offrir",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "🤲",
            "form": "noun",
            "plural": "offrirs"
        }
    ],
    "it": [
        {
            "word": "medico",
            "level": "starter",
            "theme": "jobs_A0",
            "numberPlural": "2 medico",
            "answer": "due medici",
            "emoji": "🧑‍⚕️",
            "form": "noun",
            "plural": "medici",
            "definitions": [
                {
                    "text": "Una persona che cura i malati.",
                    "examples": [
                        "Il medico è in ospedale.",
                        "Vado dal medico."
                    ]
                },
                {
                    "text": "Questa persona lavora solitamente in un ospedale o in una clinica.",
                    "examples": [
                        "I medici portano il camice bianco."
                    ]
                }
            ]
        },
        {
            "word": "ingegnere",
            "level": "intermediate",
            "theme": "career_development_B1",
            "emoji": "👷",
            "form": "noun",
            "plural": "ingegneri",
            "definitions": [
                {
                    "text": "Una persona che progetta o costruisce macchine, motori o strutture.",
                    "examples": [
                        "L'ingegnere lavora a un nuovo ponte.",
                        "Vuole diventare un ingegnere civile."
                    ]
                },
                {
                    "text": "Questa persona lavora spesso in un ufficio o in un cantiere.",
                    "examples": [
                        "Gli ingegneri usano il computer per progettare."
                    ]
                }
            ]
        },
        {
            "word": "artista",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🎨",
            "form": "noun",
            "plural": "artisti",
            "definitions": [
                {
                    "text": "Una persona che crea dipinti o disegni.",
                    "examples": [
                        "L'artista dipinge un bel quadro.",
                        "È un artista famoso."
                    ]
                },
                {
                    "text": "Questa persona lavora spesso in uno studio.",
                    "examples": [
                        "Gli artisti usano colori e pennelli."
                    ]
                }
            ]
        },
        {
            "word": "pilota",
            "level": "intermediate",
            "theme": "career_development_B1",
            "emoji": "🧑‍✈️",
            "form": "noun",
            "plural": "piloti",
            "definitions": [
                {
                    "text": "Una persona che guida un aereo o un elicottero.",
                    "examples": [
                        "Il pilota è nella cabina di pilotaggio.",
                        "Vuole diventare un pilota."
                    ]
                },
                {
                    "text": "Questa persona lavora nel cielo e all'aeroporto.",
                    "examples": [
                        "I piloti portano la divisa."
                    ]
                }
            ]
        },
        {
            "word": "chef",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "👨‍🍳",
            "form": "noun",
            "plural": "chef",
            "definitions": [
                {
                    "text": "Un cuoco professionista che lavora in un ristorante.",
                    "examples": [
                        "Lo chef prepara un pasto delizioso.",
                        "Il nostro chef ha molto talento."
                    ]
                },
                {
                    "text": "Questa persona lavora in cucina.",
                    "examples": [
                        "Gli chef portano un alto cappello bianco."
                    ]
                }
            ]
        },
        {
            "word": "avvocato",
            "level": "upper-intermediate",
            "theme": "academic_vocabulary_B2",
            "emoji": "⚖️",
            "form": "noun",
            "plural": "avvocati",
            "definitions": [
                {
                    "text": "Una persona che dà consigli legali e rappresenta le persone in tribunale.",
                    "examples": [
                        "Devo parlare con il mio avvocato.",
                        "L'avvocato è in tribunale."
                    ]
                },
                {
                    "text": "Questa persona lavora spesso in un ufficio o in un tribunale.",
                    "examples": [
                        "Gli avvocati leggono molti documenti."
                    ]
                }
            ]
        },
        {
            "word": "insegnante",
            "level": "starter",
            "theme": "jobs_A0",
            "emoji": "🧑‍🏫",
            "form": "noun",
            "plural": "insegnanti",
            "definitions": [
                {
                    "text": "Una persona che aiuta a imparare.",
                    "examples": [
                        "L'insegnante spiega la lezione.",
                        "Ho una brava insegnante."
                    ]
                },
                {
                    "text": "Questa persona lavora solitamente in una scuola o all'università.",
                    "examples": [
                        "Gli insegnanti spiegano nuovi argomenti."
                    ]
                }
            ]
        },
        {
            "word": "pasta",
            "level": "starter",
            "theme": "food_drink_A0",
            "emoji": "🍝",
            "form": "noun",
            "plural": "paste",
            "definitions": [
                {
                    "text": "Un alimento a base di farina e acqua o uova.",
                    "examples": [
                        "Mi piace la pasta al pomodoro.",
                        "Gli spaghetti sono un tipo di pasta."
                    ]
                },
                {
                    "text": "Questo cibo è il simbolo della cucina italiana.",
                    "examples": [
                        "Ci sono molti formati di pasta."
                    ]
                }
            ]
        },
        {
            "word": "pizza",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "🍕",
            "form": "noun",
            "plural": "pizze",
            "definitions": [
                {
                    "text": "Un pane piatto condito con pomodoro e mozzarella.",
                    "examples": [
                        "Mi piace la pizza margherita.",
                        "Ordiniamo una pizza."
                    ]
                },
                {
                    "text": "Questo cibo è originario di Napoli.",
                    "examples": [
                        "La pizza è famosa in tutto il mondo."
                    ]
                }
            ]
        },
        {
            "word": "risotto",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "form": "noun",
            "plural": "risotti",
            "definitions": [
                {
                    "text": "Un piatto di riso cotto con brodo fino a diventare cremoso.",
                    "examples": [
                        "Il risotto allo zafferano è giallo.",
                        "Mia nonna fa un ottimo risotto."
                    ]
                },
                {
                    "text": "È un primo piatto tipico del Nord Italia.",
                    "examples": [
                        "Il risotto va servito ben caldo."
                    ]
                }
            ]
        },
        {
            "word": "lasagna",
            "level": "starter",
            "theme": "food_drink_A0",
            "form": "noun",
            "plural": "lasagne",
            "definitions": [
                {
                    "text": "Fogli di pasta alternati con ragù e besciamella.",
                    "examples": [
                        "Le lasagne sono nel forno.",
                        "Mi piacciono le lasagne della mamma."
                    ]
                },
                {
                    "text": "Questo piatto viene spesso mangiato la domenica.",
                    "examples": [
                        "Le lasagne sono molto nutrienti."
                    ]
                }
            ]
        },
        {
            "word": "gelato",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "form": "noun",
            "plural": "gelati",
            "definitions": [
                {
                    "text": "Un dolce freddo fatto con latte e zucchero.",
                    "examples": [
                        "Prendiamo un gelato al cioccolato.",
                        "Il gelato è rinfrescante in estate."
                    ]
                },
                {
                    "text": "L'Italia è famosa per il suo gelato artigianale.",
                    "examples": [
                        "Il gelato può essere servito nel cono o nella coppetta."
                    ]
                }
            ]
        },
        {
            "word": "tiramisù",
            "level": "intermediate",
            "theme": "society_community_B1",
            "form": "noun",
            "plural": "tiramisù",
            "definitions": [
                {
                    "text": "Un dolce al cucchiaio con savoiardi, caffè e mascarpone.",
                    "examples": [
                        "Il tiramisù è il mio dolce preferito.",
                        "C'è del cacao sopra il tiramisù."
                    ]
                },
                {
                    "text": "Il nome significa letteralmente 'sollevami'.",
                    "examples": [
                        "Il tiramisù deve riposare in frigo."
                    ]
                }
            ]
        },
        {
            "word": "mela",
            "level": "starter",
            "theme": "food_drink_A0",
            "numberPlural": "4 mela",
            "answer": "quattro mele",
            "emoji": "🍎",
            "form": "noun",
            "plural": "mele",
            "definitions": [
                {
                    "text": "Un frutto tondo, rosso o verde.",
                    "examples": [
                        "Mangio una mela ogni giorno.",
                        "La mela è buona."
                    ]
                }
            ]
        },
        {
            "word": "pane",
            "level": "starter",
            "theme": "food_drink_A0",
            "emoji": "🍞",
            "form": "noun",
            "plural": "pane",
            "definitions": [
                {
                    "text": "Un cibo fatto di farina e acqua, poi cotto al forno.",
                    "examples": [
                        "Mi piace il pane fresco.",
                        "Puoi comprare del pane?"
                    ]
                }
            ]
        },
        {
            "word": "formaggio",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "emoji": "🧀",
            "form": "noun",
            "plural": "formaggio",
            "definitions": [
                {
                    "text": "Un alimento solido ricavato dal latte.",
                    "examples": [
                        "Mi piace il formaggio sulla pasta.",
                        "Esistono molti tipi di formaggio."
                    ]
                },
                {
                    "text": "L'Italia produce centinaia di formaggi diversi.",
                    "examples": [
                        "Il parmigiano è un formaggio stagionato."
                    ]
                }
            ]
        },
        {
            "word": "uovo",
            "level": "starter",
            "theme": "food_drink_A0",
            "emoji": "🥚",
            "form": "noun",
            "plural": "uova"
        },
        {
            "word": "latte",
            "level": "starter",
            "theme": "food_drink_A0",
            "emoji": "🥛",
            "form": "noun",
            "plural": "latte"
        },
        {
            "word": "riso",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "emoji": "🍚",
            "form": "noun",
            "plural": "riso"
        },
        {
            "word": "pomodoro",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "emoji": "🍅",
            "form": "noun",
            "plural": "pomodori"
        },
        {
            "word": "patata",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "emoji": "🥔",
            "form": "noun",
            "plural": "patate"
        },
        {
            "word": "caffè",
            "level": "starter",
            "theme": "food_drink_A0",
            "article": "il",
            "baseWord": "caffè",
            "emoji": "☕",
            "form": "noun",
            "plural": "caffè"
        },
        {
            "word": "tè",
            "level": "starter",
            "theme": "food_drink_A0",
            "article": "il",
            "baseWord": "tè",
            "emoji": "🍵",
            "form": "noun",
            "plural": "tè"
        },
        {
            "word": "vino",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "article": "il",
            "baseWord": "vino",
            "emoji": "🍷",
            "form": "noun",
            "plural": "vino"
        },
        {
            "word": "birra",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "article": "la",
            "baseWord": "birra",
            "emoji": "🍺",
            "form": "noun",
            "plural": "birra"
        },
        {
            "word": "succo",
            "level": "starter",
            "theme": "food_drink_A0",
            "article": "il",
            "baseWord": "succo",
            "emoji": "🧃",
            "form": "noun",
            "plural": "succo"
        },
        {
            "word": "acqua",
            "level": "starter",
            "theme": "food_drink_A0",
            "article": "l'",
            "baseWord": "acqua",
            "emoji": "🚰",
            "form": "noun",
            "plural": "acqua",
            "definitions": [
                {
                    "text": "Un liquido trasparente che beviamo per vivere.",
                    "examples": [
                        "Bevo un bicchiere d'acqua.",
                        "L'acqua è fredda."
                    ]
                }
            ]
        },
        {
            "word": "aranciata",
            "level": "intermediate",
            "theme": "society_community_B1",
            "form": "noun",
            "plural": "aranciate"
        },
        {
            "word": "parco",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🌳",
            "form": "noun",
            "plural": "parci",
            "definitions": [
                {
                    "text": "Un'area verde pubblica per camminare o giocare.",
                    "examples": [
                        "Domenica andiamo al parco.",
                        "Ci sono molti fiori nel parco."
                    ]
                }
            ]
        },
        {
            "word": "scuola",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🏫",
            "form": "noun",
            "plural": "scuole",
            "definitions": [
                {
                    "text": "Un luogo dove i bambini vanno per imparare.",
                    "examples": [
                        "Vado a scuola in autobus.",
                        "La mia scuola è vicino a casa mia."
                    ]
                }
            ]
        },
        {
            "word": "ospedale",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "emoji": "🏥",
            "form": "noun",
            "plural": "ospedali",
            "definitions": [
                {
                    "text": "Un luogo dove si curano i malati e i feriti.",
                    "examples": [
                        "L'ambulanza sta andando all'ospedale.",
                        "Lavora in ospedale."
                    ]
                },
                {
                    "text": "Questo è un luogo dove si va per vedere un medico o un infermiere.",
                    "examples": [
                        "Gli ospedali sono aperti 24 ore su 24."
                    ]
                }
            ]
        },
        {
            "word": "cinema",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "emoji": "🎬",
            "form": "noun",
            "plural": "cinema",
            "definitions": [
                {
                    "text": "Un luogo dove si proiettano film su un grande schermo.",
                    "examples": [
                        "Andiamo al cinema stasera.",
                        "Cosa danno al cinema?"
                    ]
                },
                {
                    "text": "Questo è un luogo dove si possono mangiare popcorn e guardare un film.",
                    "examples": [
                        "Mi piace andare al cinema con gli amici."
                    ]
                }
            ]
        },
        {
            "word": "ristorante",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "emoji": "🍴",
            "form": "noun",
            "plural": "ristoranti",
            "definitions": [
                {
                    "text": "Un posto dove si può comprare e mangiare un pasto.",
                    "examples": [
                        "Andiamo al ristorante stasera.",
                        "Il ristorante è chiuso."
                    ]
                },
                {
                    "text": "In questo luogo, un cameriere porta il cibo al tavolo.",
                    "examples": [
                        "Abbiamo cenato in un ristorante elegante."
                    ]
                }
            ]
        },
        {
            "word": "biblioteca",
            "level": "intermediate",
            "theme": "travel_cultural_B1",
            "emoji": "📚",
            "form": "noun",
            "plural": "biblioteche",
            "definitions": [
                {
                    "text": "Un luogo con molti libri da leggere o prendere in prestito.",
                    "examples": [
                        "Studio nella biblioteca dell'università.",
                        "La biblioteca comunale è grande."
                    ]
                },
                {
                    "text": "Questo è un luogo silenzioso per lo studio e la ricerca.",
                    "examples": [
                        "Bisogna stare in silenzio in biblioteca."
                    ]
                }
            ]
        },
        {
            "word": "museo",
            "level": "intermediate",
            "theme": "travel_cultural_B1",
            "emoji": "🏛️",
            "form": "noun",
            "plural": "musei",
            "definitions": [
                {
                    "text": "Un edificio dove si possono guardare oggetti importanti del passato.",
                    "examples": [
                        "Abbiamo visto i resti romani al museo.",
                        "Il museo ha una collezione di quadri antichi."
                    ]
                },
                {
                    "text": "Questo è un luogo dove imparare la storia, l'arte o la scienza.",
                    "examples": [
                        "L'ingresso al museo è gratuito la domenica."
                    ]
                }
            ]
        },
        {
            "word": "supermercato",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "emoji": "🛒",
            "form": "noun",
            "plural": "supermercati",
            "definitions": [
                {
                    "text": "Un grande negozio dove si comprano cibo e prodotti per la casa.",
                    "examples": [
                        "Vado a fare la spesa al supermercato.",
                        "Il supermercato è vicino a casa."
                    ]
                },
                {
                    "text": "In questo luogo si usa un carrello per fare la spesa.",
                    "examples": [
                        "Ci sono molte offerte al supermercato."
                    ]
                }
            ]
        },
        {
            "word": "farmacia",
            "level": "upper-intermediate",
            "theme": "academic_vocabulary_B2",
            "emoji": "💊",
            "form": "noun",
            "plural": "farmacie",
            "definitions": [
                {
                    "text": "Un negozio dove si comprano le medicine.",
                    "examples": [
                        "Devo andare in farmacia a prendere uno sciroppo.",
                        "La farmacia è aperta anche di notte."
                    ]
                },
                {
                    "text": "È il luogo dove si portano le ricette del medico.",
                    "examples": [
                        "Il farmacista prepara i medicinali."
                    ]
                }
            ]
        },
        {
            "word": "aeroporto",
            "level": "intermediate",
            "theme": "travel_cultural_B1",
            "emoji": "✈️",
            "form": "noun",
            "plural": "aeroporti",
            "definitions": [
                {
                    "text": "Un luogo dove gli aerei atterrano e decollano.",
                    "examples": [
                        "Siamo arrivati all'aeroporto in orario.",
                        "L'aeroporto di Roma è molto grande."
                    ]
                },
                {
                    "text": "È il luogo dove si prende l'aereo per viaggiare.",
                    "examples": [
                        "Dobbiamo fare il check-in in aeroporto."
                    ]
                }
            ]
        },
        {
            "word": "maglietta",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👕",
            "form": "noun",
            "plural": "magliette"
        },
        {
            "word": "pantaloni",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👖",
            "form": "noun",
            "plural": "pantaloni"
        },
        {
            "word": "vestito",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "👗",
            "form": "noun",
            "plural": "vestiti"
        },
        {
            "word": "scarpe",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👟",
            "form": "noun",
            "plural": "scarpi"
        },
        {
            "word": "cappello",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👒",
            "form": "noun",
            "plural": "cappelli"
        },
        {
            "word": "giacca",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🧥",
            "form": "noun",
            "plural": "giacce"
        },
        {
            "word": "gonna",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "👗",
            "form": "noun",
            "plural": "gonne"
        },
        {
            "word": "sedia",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🪑",
            "form": "noun",
            "plural": "sedie"
        },
        {
            "word": "tavolo",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🪑",
            "form": "noun",
            "plural": "tavoli"
        },
        {
            "word": "letto",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🛏️",
            "form": "noun",
            "plural": "letti",
            "definitions": [
                {
                    "text": "Un mobile su cui si dorme.",
                    "examples": [
                        "Il mio letto è molto comodo.",
                        "È ora di andare a letto."
                    ]
                }
            ]
        },
        {
            "word": "divano",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🛋️",
            "form": "noun",
            "plural": "divani"
        },
        {
            "word": "lampada",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "💡",
            "form": "noun",
            "plural": "lampade"
        },
        {
            "word": "scrivania",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "⌨️",
            "form": "noun",
            "plural": "scrivanie"
        },
        {
            "word": "armadio",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "👗",
            "form": "noun",
            "plural": "armadii"
        },
        {
            "word": "alto",
            "level": "starter",
            "theme": "adjectives_A0",
            "form": "noun",
            "plural": "alti",
            "definitions": [
                {
                    "text": "Una persona o una cosa che è grande dal basso verso l'alto.",
                    "examples": [
                        "Lui è molto alto.",
                        "Quell'edificio è alto."
                    ]
                }
            ]
        },
        {
            "word": "basso",
            "level": "starter",
            "theme": "adjectives_A0",
            "form": "noun",
            "plural": "bassi",
            "definitions": [
                {
                    "text": "Una persona o una cosa che non è alta.",
                    "examples": [
                        "Lei è bassa.",
                        "La matita è bassa."
                    ]
                }
            ]
        },
        {
            "word": "bello",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "form": "noun",
            "plural": "belli"
        },
        {
            "word": "forte",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "form": "noun",
            "plural": "forti"
        },
        {
            "word": "magro",
            "level": "intermediate",
            "theme": "society_community_B1",
            "form": "noun",
            "plural": "magri"
        },
        {
            "word": "giovane",
            "level": "starter",
            "theme": "adjectives_A0",
            "form": "noun",
            "plural": "giovani"
        },
        {
            "word": "vecchio",
            "level": "starter",
            "theme": "adjectives_A0",
            "form": "noun",
            "plural": "vecchii"
        },
        {
            "word": "svegliarsi",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "⏰",
            "form": "noun",
            "plural": "svegliarsi"
        },
        {
            "word": "lavarsi i denti",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🪥",
            "form": "noun",
            "plural": "lavarsi i denti"
        },
        {
            "word": "fare la doccia",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🚿",
            "form": "noun",
            "plural": "fare la doccie"
        },
        {
            "word": "dormire",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "😴",
            "subtext": "dormire 8 ore, andare a dormire",
            "form": "noun",
            "plural": "dormiri"
        },
        {
            "word": "chiave",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🔑",
            "form": "noun",
            "plural": "chiavi",
            "definitions": [
                {
                    "text": "Un oggetto metallico per aprire una porta o accendere l'auto.",
                    "examples": [
                        "Non trovo le mie chiavi.",
                        "Ecco la chiave della camera."
                    ]
                },
                {
                    "text": "Qualcosa di molto importante (come la chiave del successo).",
                    "examples": [
                        "La pratica è la chiave per imparare.",
                        "Qual è il punto chiave?"
                    ]
                }
            ]
        },
        {
            "word": "telefono",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "📱",
            "form": "noun",
            "plural": "telefoni"
        },
        {
            "word": "libro",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "📖",
            "form": "noun",
            "plural": "libri",
            "definitions": [
                {
                    "text": "Un insieme di fogli stampati che si leggono.",
                    "examples": [
                        "Il libro è sul tavolo.",
                        "Amo leggere libri gialli."
                    ]
                }
            ]
        },
        {
            "word": "orologio",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "⌚",
            "form": "noun",
            "plural": "orologi",
            "definitions": [
                {
                    "text": "Uno strumento per misurare il tempo.",
                    "examples": [
                        "Il mio orologio è rotto.",
                        "Che ore sono sul tuo orologio?"
                    ]
                }
            ]
        },
        {
            "word": "portafoglio",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "👛",
            "form": "noun",
            "plural": "portafogli",
            "definitions": [
                {
                    "text": "Un piccolo contenitore per tenere soldi e carte.",
                    "examples": [
                        "Ho perso il portafoglio.",
                        "Metti i soldi nel portafoglio."
                    ]
                }
            ]
        },
        {
            "word": "occhiali",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "👓",
            "form": "noun",
            "plural": "occhiali",
            "definitions": [
                {
                    "text": "Uno strumento che si indossa sul viso per vedere meglio.",
                    "examples": [
                        "Ho bisogno di occhiali nuovi.",
                        "Lui porta occhiali neri."
                    ]
                }
            ]
        },
        {
            "word": "gatto",
            "level": "starter",
            "theme": "weather_A0",
            "article": "il",
            "baseWord": "gatto",
            "emoji": "🐈",
            "numberPlural": "2 gatto",
            "answer": "due gatti",
            "form": "adjective",
            "plural": "gatti",
            "definitions": [
                {
                    "text": "Un piccolo animale con il pelo che molte persone tengono in casa.",
                    "examples": [
                        "Il mio gatto dorme.",
                        "Amo i gatti."
                    ]
                }
            ]
        },
        {
            "word": "cane",
            "level": "starter",
            "theme": "weather_A0",
            "article": "il",
            "baseWord": "cane",
            "emoji": "🐕",
            "numberPlural": "5 cane",
            "answer": "cinque cani",
            "form": "adjective",
            "plural": "cani",
            "definitions": [
                {
                    "text": "Un animale che viene spesso chiamato 'il migliore amico dell'uomo'.",
                    "examples": [
                        "Porto il mio cane al parco.",
                        "Il cane abbaia."
                    ]
                }
            ]
        },
        {
            "word": "uccello",
            "level": "starter",
            "theme": "weather_A0",
            "emoji": "🐦",
            "form": "noun",
            "plural": "uccelli",
            "definitions": [
                {
                    "text": "Un animale con piume e ali che di solito può volare.",
                    "examples": [
                        "L'uccello canta al mattino.",
                        "Guarda quel bell'uccello!"
                    ]
                }
            ]
        },
        {
            "word": "leone",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🦁",
            "form": "noun",
            "plural": "leoni",
            "definitions": [
                {
                    "text": "Un grande felino selvatico che vive in Africa ed è chiamato 'il re della foresta'.",
                    "examples": [
                        "Il leone è molto forte.",
                        "Abbiamo visto un leone allo zoo."
                    ]
                }
            ]
        },
        {
            "word": "tigre",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🐯",
            "form": "adjective"
        },
        {
            "word": "elefante",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "🐘",
            "form": "adjective"
        },
        {
            "word": "scimmia",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "🐒",
            "form": "adjective"
        },
        {
            "word": "cavallo",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🐎",
            "form": "adjective"
        },
        {
            "word": "nevoso",
            "level": "elementary",
            "theme": "environment_A2",
            "emoji": "❄️",
            "form": "noun",
            "plural": "nevosi"
        },
        {
            "word": "ventoso",
            "level": "elementary",
            "theme": "environment_A2",
            "emoji": "💨",
            "form": "noun",
            "plural": "ventosi"
        },
        {
            "word": "nuvoloso",
            "level": "elementary",
            "theme": "environment_A2",
            "emoji": "☁️",
            "form": "noun",
            "plural": "nuvolosi"
        },
        {
            "word": "freddo",
            "level": "starter",
            "theme": "weather_A0",
            "emoji": "❄️",
            "form": "noun",
            "plural": "freddi"
        },
        {
            "word": "testa",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "👤",
            "form": "noun",
            "plural": "teste",
            "definitions": [
                {
                    "text": "La parte superiore del corpo umano.",
                    "examples": [
                        "Porta un cappello in testa.",
                        "Muove la testa per dire di sì."
                    ]
                },
                {
                    "text": "La parte anteriore o superiore di qualcosa.",
                    "examples": [
                        "In testa alla classifica.",
                        "Il treno è in testa al binario."
                    ]
                }
            ]
        },
        {
            "word": "mano",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "✋",
            "form": "noun",
            "plural": "mani",
            "definitions": [
                {
                    "text": "La parte finale del braccio con cinque dita.",
                    "examples": [
                        "Lavarsi le mani.",
                        "Tenersi per mano."
                    ]
                },
                {
                    "text": "Un aiuto.",
                    "examples": [
                        "Dammi una mano con queste buste.",
                        "Serve una mano?"
                    ]
                }
            ]
        },
        {
            "word": "gamba",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "🦵",
            "form": "noun",
            "plural": "gambe"
        },
        {
            "word": "occhio",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "👁️",
            "form": "noun",
            "plural": "occhi",
            "definitions": [
                {
                    "text": "L'organo della vista.",
                    "examples": [
                        "Chiudi gli occhi.",
                        "Ha gli occhi azzurri."
                    ]
                }
            ]
        },
        {
            "word": "naso",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "👃",
            "form": "noun",
            "plural": "nasi"
        },
        {
            "word": "bocca",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "👄",
            "form": "noun",
            "plural": "bocce"
        },
        {
            "word": "orecchio",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "👂",
            "form": "noun",
            "plural": "orecchii"
        },
        {
            "word": "braccio",
            "level": "elementary",
            "theme": "health_body_A2",
            "emoji": "💪",
            "form": "noun",
            "plural": "braccii"
        },
        {
            "word": "piede",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "🦶",
            "form": "noun",
            "plural": "piedi"
        },
        {
            "word": "sviluppatore software",
            "level": "intermediate",
            "theme": "career_development_B1",
            "emoji": "💻",
            "form": "noun",
            "plural": "sviluppatore softwari"
        },
        {
            "word": "psicologo",
            "level": "upper-intermediate",
            "theme": "academic_vocabulary_B2",
            "emoji": "🧠",
            "form": "noun",
            "plural": "psicologi"
        },
        {
            "word": "filosofo",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🧐",
            "form": "noun",
            "plural": "filosofi"
        },
        {
            "word": "università",
            "level": "elementary",
            "theme": "career_A2",
            "emoji": "🎓",
            "form": "noun",
            "plural": "università",
            "definitions": [
                {
                    "text": "Un istituto di istruzione superiore.",
                    "examples": [
                        "Studia all'università.",
                        "L'università ha una grande biblioteca."
                    ]
                }
            ]
        },
        {
            "word": "collega",
            "level": "intermediate",
            "theme": "career_development_B1",
            "emoji": "👥",
            "form": "noun",
            "plural": "college"
        },
        {
            "word": "sostenibile",
            "level": "upper-intermediate",
            "theme": "environment_policy_B2",
            "emoji": "🌱",
            "form": "noun",
            "plural": "sostenibili"
        },
        {
            "word": "salute mentale",
            "level": "intermediate",
            "theme": "mental_health_B1",
            "emoji": "🧠",
            "form": "noun",
            "definitions": [
                {
                    "text": "Η κατάσταση της συναισθηματικής και ψυχολογικής ευεξίας.",
                    "examples": [
                        "Η ψυχική υγεία είναι εξίσου σημαντική με τη σωματική.",
                        "Πρέπει να φροντίζουμε την ψυχική μας υγεία."
                    ]
                }
            ]
        },
        {
            "word": "cucina locale",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "emoji": "🍜",
            "form": "noun",
            "definitions": [
                {
                    "text": "Il cibo tradizionale di una zona specifica.",
                    "examples": [
                        "Amo provare la cucina locale.",
                        "La cucina locale qui è molto saporita."
                    ]
                },
                {
                    "text": "Provare la cucina locale è una parte importante del viaggio.",
                    "examples": [
                        "La cucina locale usa ingredienti freschi della regione."
                    ]
                }
            ]
        },
        {
            "word": "madre",
            "level": "starter",
            "theme": "immediate_family_A0",
            "emoji": "👩",
            "form": "noun",
            "definitions": [
                {
                    "text": "Una donna che è un tuo genitore.",
                    "examples": [
                        "Mia madre cucina bene.",
                        "Voglio bene a mia madre."
                    ]
                },
                {
                    "text": "Questa persona è solitamente la moglie di tuo padre (o un altro genitore).",
                    "examples": [
                        "Le madri si prendono cura dei loro figli."
                    ]
                }
            ]
        },
        {
            "word": "padre",
            "level": "starter",
            "theme": "immediate_family_A0",
            "emoji": "👨",
            "form": "noun",
            "definitions": [
                {
                    "text": "Un uomo che è un tuo genitore.",
                    "examples": [
                        "Mio padre lavora molto.",
                        "Mio padre è simpatico."
                    ]
                },
                {
                    "text": "Questa persona è solitamente il marito di tua madre (o un altro genitore).",
                    "examples": [
                        "Mio padre lavora molto."
                    ]
                }
            ]
        },
        {
            "word": "ragazzo",
            "theme": "adjectives_A0",
            "level": "starter",
            "article": "il",
            "baseWord": "ragazzo",
            "numberPlural": "2 ragazzo",
            "answer": "due ragazzi",
            "emoji": "👦",
            "form": "adjective",
            "plural": "ragazzi"
        },
        {
            "word": "ragazza",
            "theme": "adjectives_A0",
            "level": "starter",
            "article": "la",
            "baseWord": "ragazza",
            "numberPlural": "3 ragazza",
            "answer": "tre ragazze",
            "emoji": "👧",
            "form": "adjective",
            "plural": "ragazze"
        },
        {
            "word": "amico",
            "theme": "adjectives_A0",
            "level": "starter",
            "article": "l'",
            "baseWord": "amico",
            "numberPlural": "2 amico",
            "answer": "due amici",
            "emoji": "🧑‍🤝‍🧑",
            "form": "adjective",
            "plural": "amici"
        },
        {
            "word": "libro",
            "level": "starter",
            "theme": "home_A0",
            "article": "il",
            "baseWord": "libro",
            "numberPlural": "4 libro",
            "answer": "quattro libri",
            "emoji": "📚",
            "form": "adjective",
            "plural": "libri",
            "definitions": [
                {
                    "text": "Molte pagine con parole e immagini che si leggono.",
                    "examples": [
                        "Leggo un libro ogni sera.",
                        "Questo libro è interessante."
                    ]
                }
            ]
        },
        {
            "word": "casa",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "article": "la",
            "baseWord": "casa",
            "numberPlural": "molte casa",
            "answer": "molte case",
            "emoji": "🏠",
            "form": "adjective",
            "plural": "case"
        },
        {
            "word": "uomo",
            "level": "starter",
            "theme": "adjectives_A0",
            "article": "l'",
            "baseWord": "uomo",
            "numberPlural": "2 uomo",
            "answer": "due uomini",
            "emoji": "👨",
            "form": "noun",
            "plural": "uomini",
            "definitions": [
                {
                    "text": "Un essere umano maschio adulto.",
                    "examples": [
                        "Quell'uomo è mio padre.",
                        "Un uomo alto attraversa la strada."
                    ]
                }
            ]
        },
        {
            "word": "donna",
            "level": "starter",
            "theme": "adjectives_A0",
            "article": "la",
            "baseWord": "donna",
            "numberPlural": "3 donna",
            "answer": "tre donne",
            "emoji": "👩",
            "form": "noun",
            "plural": "donne",
            "definitions": [
                {
                    "text": "Un essere umano femmina adulta.",
                    "examples": [
                        "È una donna molto intelligente.",
                        "Tre donne lavorano qui."
                    ]
                }
            ]
        },
        {
            "word": "essere",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "👤",
            "subtext": "avere freddo, avere 20 anni",
            "form": "noun",
            "plural": "esseri"
        },
        {
            "word": "avere",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👜",
            "subtext": "fare colazione, avere un'auto",
            "form": "noun",
            "plural": "averi"
        },
        {
            "word": "andare",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🚶",
            "subtext": "andare a scuola, andare a casa",
            "form": "noun",
            "plural": "andari"
        },
        {
            "word": "fare",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🛠️",
            "subtext": "fare i compiti, fare sport",
            "form": "noun",
            "plural": "fari"
        },
        {
            "word": "lavorare",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "💼",
            "subtext": "lavorare in un ufficio, lavorare sodo",
            "form": "noun",
            "plural": "lavorari"
        },
        {
            "word": "sapere",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "🧠",
            "subtext": "sapere la risposta, conoscere una persona",
            "form": "noun",
            "plural": "saperi"
        },
        {
            "word": "pensare",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "💭",
            "subtext": "pensare a, pensare che",
            "form": "noun",
            "plural": "pensari"
        },
        {
            "word": "volere",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "🙏",
            "subtext": "volere acqua, volere andare",
            "form": "noun",
            "plural": "voleri"
        },
        {
            "word": "piacere",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "👍",
            "subtext": "mi piace il cioccolato, mi piace ballare",
            "form": "noun",
            "plural": "piaceri"
        },
        {
            "word": "amare",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "❤️",
            "subtext": "amare la mia famiglia, amare viaggiare",
            "form": "noun",
            "plural": "amari"
        },
        {
            "word": "scrivere",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "✍️",
            "subtext": "scrivere una lettera, scrivere un messaggio",
            "opposite": "leggere",
            "oppositeEmoji": "📖",
            "form": "noun",
            "plural": "scriveri"
        },
        {
            "word": "venire",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🏃‍♂️",
            "subtext": "venire qui, venire a casa",
            "opposite": "andare",
            "oppositeEmoji": "🚶",
            "form": "noun",
            "plural": "veniri"
        },
        {
            "word": "dare",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🎁",
            "subtext": "dare un regalo, dare aiuto",
            "opposite": "prendere",
            "oppositeEmoji": "👜",
            "form": "adjective"
        },
        {
            "word": "prendere",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👜",
            "subtext": "prendere l'autobus, fare una foto",
            "opposite": "dare",
            "oppositeEmoji": "🎁",
            "form": "adjective"
        },
        {
            "word": "trovare",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🔍",
            "form": "adjective"
        },
        {
            "word": "dire",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "🗣️",
            "form": "adjective"
        },
        {
            "word": "chiedere",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "❓",
            "form": "noun",
            "plural": "chiederi"
        },
        {
            "word": "sembrare",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "🤔",
            "form": "noun",
            "plural": "sembrari"
        },
        {
            "word": "sentire",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "🌡️",
            "form": "noun",
            "plural": "sentiri"
        },
        {
            "word": "provare",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🎯",
            "form": "noun",
            "plural": "provari"
        },
        {
            "word": "partire",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🚪",
            "form": "noun",
            "plural": "partiri"
        },
        {
            "word": "chiamare",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "📞",
            "form": "noun",
            "plural": "chiamari"
        },
        {
            "word": "guardare",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "📺",
            "form": "noun",
            "plural": "guardari"
        },
        {
            "word": "usare",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🛠️",
            "form": "noun",
            "plural": "usari"
        },
        {
            "word": "ottenere",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "📥",
            "form": "noun",
            "plural": "otteneri"
        },
        {
            "word": "diventare",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "🦋",
            "form": "noun",
            "plural": "diventari"
        },
        {
            "word": "iniziare",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "▶️",
            "opposite": "finire",
            "oppositeEmoji": "🏁",
            "form": "noun",
            "plural": "iniziari"
        },
        {
            "word": "aiutare",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "🤝",
            "form": "noun",
            "plural": "aiutari"
        },
        {
            "word": "giocare",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🎮",
            "form": "noun",
            "plural": "giocari"
        },
        {
            "word": "correre",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🏃",
            "form": "noun",
            "plural": "correri"
        },
        {
            "word": "muovere",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "📦",
            "form": "noun",
            "plural": "muoveri"
        },
        {
            "word": "vivere",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "🏠",
            "opposite": "morire",
            "oppositeEmoji": "⚰️",
            "form": "noun",
            "plural": "viveri"
        },
        {
            "word": "credere",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "🙏",
            "form": "noun",
            "plural": "crederi"
        },
        {
            "word": "portare",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🎒",
            "form": "noun",
            "plural": "portari"
        },
        {
            "word": "succedere",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "⚡",
            "form": "adjective"
        },
        {
            "word": "sedersi",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🪑",
            "opposite": "stare in piedi",
            "oppositeEmoji": "🧍",
            "form": "noun",
            "plural": "sedersi"
        },
        {
            "word": "stare in piedi",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🧍",
            "opposite": "sedersi",
            "oppositeEmoji": "🪑",
            "form": "noun",
            "plural": "stare in piedi"
        },
        {
            "word": "perdere",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "📉",
            "opposite": "vincere",
            "oppositeEmoji": "🏆",
            "form": "noun",
            "plural": "perderi"
        },
        {
            "word": "pagare",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "💰",
            "form": "noun",
            "plural": "pagari"
        },
        {
            "word": "incontrare",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "🤝",
            "form": "noun",
            "plural": "incontrari"
        },
        {
            "word": "includere",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "➕",
            "form": "noun",
            "plural": "includeri"
        },
        {
            "word": "continuare",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "➡️",
            "form": "noun",
            "plural": "continuari"
        },
        {
            "word": "impostare",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "⚙️",
            "form": "noun",
            "plural": "impostari"
        },
        {
            "word": "imparare",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "📚",
            "form": "noun",
            "plural": "imparari"
        },
        {
            "word": "cambiare",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🔄",
            "form": "adjective"
        },
        {
            "word": "guidare",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "👑",
            "form": "noun",
            "plural": "guidari"
        },
        {
            "word": "capire",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "💡",
            "form": "noun",
            "plural": "capiri"
        },
        {
            "word": "seguire",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "emoji": "👣",
            "form": "noun",
            "plural": "seguiri"
        },
        {
            "word": "fermarsi",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🛑",
            "form": "noun",
            "plural": "fermarsi"
        },
        {
            "word": "creare",
            "level": "elementary",
            "theme": "leisure_hobbies_A2",
            "emoji": "✨",
            "form": "noun",
            "plural": "creari"
        },
        {
            "word": "permettre",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "✅",
            "form": "noun",
            "plural": "permettri"
        },
        {
            "word": "aggiungere",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "➕",
            "form": "noun",
            "plural": "aggiungeri"
        },
        {
            "word": "spendere",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "💸",
            "form": "noun",
            "plural": "spenderi"
        },
        {
            "word": "crescere",
            "level": "elementary",
            "theme": "environment_A2",
            "emoji": "🌱",
            "form": "noun",
            "plural": "cresceri"
        },
        {
            "word": "aprire",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "📖",
            "opposite": "chiudere",
            "oppositeEmoji": "🔒",
            "form": "noun",
            "plural": "apriri"
        },
        {
            "word": "vincere",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🏆",
            "opposite": "perdere",
            "oppositeEmoji": "📉",
            "form": "noun",
            "plural": "vinceri"
        },
        {
            "word": "offrire",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "🤲",
            "form": "noun",
            "plural": "offriri"
        }
    ]
};
    window.vocabularyData = { ...window.vocabularyData, ...data };
})();
