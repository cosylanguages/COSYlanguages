(function() {
    const data = [
    {
        "word": "médecin",
        "level": "starter",
        "theme": "job_titles_professions_A0",
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
        "word": "professeur",
        "level": "starter",
        "theme": "job_titles_professions_A0",
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
        "word": "parc",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
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
        "theme": "neighbourhood_local_A2",
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
        "word": "pluvieux",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "🌧️",
        "form": "noun",
        "plural": "pluvieux"
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
        "theme": "body_parts_A0",
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
        "theme": "body_parts_A0",
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
        "theme": "body_parts_A0",
        "emoji": "🦵",
        "form": "noun",
        "plural": "jambes"
    },
    {
        "word": "oeil",
        "level": "starter",
        "theme": "body_parts_A0",
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
        "theme": "body_parts_A0",
        "emoji": "👃",
        "form": "noun",
        "plural": "nez"
    },
    {
        "word": "bouche",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "👄",
        "form": "noun",
        "plural": "bouches"
    },
    {
        "word": "oreille",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "👂",
        "form": "noun",
        "plural": "oreilles"
    },
    {
        "word": "pied",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "🦶",
        "form": "noun",
        "plural": "pieds"
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
        "theme": "neighbourhood_local_A2",
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
        "theme": "neighbourhood_local_A2",
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
        "theme": "neighbourhood_local_A2",
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
        "theme": "neighbourhood_local_A2",
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
        "word": "sentir",
        "level": "starter",
        "theme": "body_parts_A0",
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
        "theme": "neighbourhood_local_A2",
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
        "theme": "neighbourhood_local_A2",
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
        "theme": "neighbourhood_local_A2",
        "emoji": "🎮",
        "form": "noun",
        "plural": "jouers"
    },
    {
        "word": "courir",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🏃",
        "form": "noun",
        "plural": "courirs"
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
        "word": "apporter",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🎁",
        "form": "noun",
        "plural": "apporters"
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
        "word": "apprendre",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
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
        "word": "comprendre",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "💡",
        "form": "noun",
        "plural": "comprendres"
    },
    {
        "word": "s'arrêter",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🛑",
        "form": "noun",
        "plural": "s'arrêters"
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
        "theme": "neighbourhood_local_A2",
        "emoji": "🏆",
        "opposite": "perdre",
        "oppositeEmoji": "📉",
        "form": "noun",
        "plural": "gagners"
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
