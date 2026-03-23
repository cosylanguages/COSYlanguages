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
            }
        ]
    },
    {
        "word": "pied",
        "level": "starter",
        "theme": "body_parts_A0",
        "numberPlural": "2 pied",
        "answer": "deux pieds",
        "emoji": "🦶",
        "form": "noun",
        "plural": "pieds"
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
            }
        ]
    },
    {
        "word": "ratatouille",
        "level": "starter",
        "theme": "basic_foods_A0",
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
        ]
    },
    {
        "word": "croissant",
        "level": "starter",
        "theme": "basic_foods_A0",
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
        ]
    },
    {
        "word": "pomme",
        "level": "starter",
        "theme": "basic_foods_A0",
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
        "theme": "basic_foods_A0",
        "article": "le",
        "baseWord": "pain",
        "emoji": "🥖",
        "form": "noun",
        "plural": "pains",
        "definitions": [
            {
                "text": "Un aliment de base fait de farine et d'eau.",
                "examples": [
                    "J'aime le pain frais.",
                    "Peux-tu acheter du pain ?",
                    "Je mange du pain au petit-déjeuner."
                ]
            }
        ]
    },
    {
        "word": "oeuf",
        "level": "starter",
        "theme": "basic_foods_A0",
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
            }
        ]
    },
    {
        "word": "lait",
        "level": "starter",
        "theme": "basic_foods_A0",
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
            }
        ]
    },
    {
        "word": "riz",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍚",
        "form": "noun",
        "definitions": [
            {
                "text": "De petits grains blancs que nous cuisons et mangeons.",
                "examples": [
                    "Nous mangeons du riz tous les jours."
                ]
            }
        ]
    },
    {
        "word": "viande",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🥩",
        "form": "noun",
        "definitions": [
            {
                "text": "Nourriture qui provient des animaux.",
                "examples": [
                    "Il mange de la viande et des légumes."
                ]
            }
        ]
    },
    {
        "word": "nourriture",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍲",
        "form": "noun",
        "definitions": [
            {
                "text": "Choses que les gens mangent.",
                "examples": [
                    "La nourriture est bonne ici."
                ]
            }
        ]
    },
    {
        "word": "café",
        "level": "starter",
        "theme": "drinks_A0",
        "article": "le",
        "baseWord": "café",
        "emoji": "☕",
        "form": "noun",
        "plural": "cafés",
        "definitions": [
            {
                "text": "Une boisson marron chaude faite à partir de grains de café.",
                "examples": [
                    "Je bois du café le matin.",
                    "Tu veux du sucre dans ton café ?"
                ]
            }
        ]
    },
    {
        "word": "thé",
        "level": "starter",
        "theme": "drinks_A0",
        "article": "le",
        "baseWord": "thé",
        "emoji": "🍵",
        "form": "noun",
        "plural": "thés",
        "definitions": [
            {
                "text": "Une boisson chaude faite avec de l'eau chaude et des feuilles de thé.",
                "examples": [
                    "Voulez-vous une tasse de thé ?",
                    "Elle boit du thé chaque jour."
                ]
            }
        ]
    },
    {
        "word": "jus",
        "level": "starter",
        "theme": "drinks_A0",
        "article": "le",
        "baseWord": "jus",
        "emoji": "🧃",
        "form": "noun",
        "plural": "jus",
        "definitions": [
            {
                "text": "Un liquide provenant de fruits ou de légumes.",
                "examples": [
                    "Je veux un verre de jus d'orange."
                ]
            }
        ]
    },
    {
        "word": "eau",
        "level": "starter",
        "theme": "drinks_A0",
        "article": "l'",
        "baseWord": "eau",
        "emoji": "🚰",
        "form": "noun",
        "plural": "eaux",
        "definitions": [
            {
                "text": "Un liquide clair que nous buvons.",
                "examples": [
                    "S'il vous plaît, buvez de l'eau.",
                    "L'eau est froide."
                ]
            }
        ]
    },
    {
        "word": "petit-déjeuner",
        "level": "starter",
        "theme": "meals_of_the_day_A0",
        "emoji": "🍳",
        "form": "noun",
        "definitions": [
            {
                "text": "Le premier repas de la journée.",
                "examples": [
                    "Le petit-déjeuner est à sept heures."
                ]
            }
        ]
    },
    {
        "word": "dîner",
        "level": "starter",
        "theme": "meals_of_the_day_A0",
        "emoji": "🍽️",
        "form": "noun",
        "definitions": [
            {
                "text": "Le repas principal de la journée, généralement le soir.",
                "examples": [
                    "Le dîner est à huit heures."
                ]
            }
        ]
    },
    {
        "word": "déjeuner",
        "level": "starter",
        "theme": "meals_of_the_day_A0",
        "emoji": "🍱",
        "form": "noun",
        "definitions": [
            {
                "text": "Un repas mangé au milieu de la journée.",
                "examples": [
                    "Je mange mon déjeuner à une heure."
                ]
            }
        ]
    },
    {
        "word": "parc",
        "level": "starter",
        "theme": "local_places_services_A0",
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
        ]
    },
    {
        "word": "école",
        "level": "starter",
        "theme": "local_places_services_A0",
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
        ]
    },
    {
        "word": "magasin",
        "level": "starter",
        "theme": "local_places_services_A0",
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
        ]
    },
    {
        "word": "t-shirt",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "emoji": "👕",
        "form": "noun",
        "plural": "t-shirts"
    },
    {
        "word": "pantalon",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "emoji": "👖",
        "form": "noun",
        "plural": "pantalons"
    },
    {
        "word": "chaussures",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "emoji": "👟",
        "form": "noun",
        "plural": "chaussures"
    },
    {
        "word": "chapeau",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "emoji": "👒",
        "form": "noun",
        "plural": "chapeaux"
    },
    {
        "word": "chaise",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "🪑",
        "form": "noun",
        "plural": "chaises"
    },
    {
        "word": "table",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "🪑",
        "form": "noun",
        "plural": "tables"
    },
    {
        "word": "lit",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "🛏️",
        "form": "noun",
        "plural": "lits"
    },
    {
        "word": "clé",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "🔑",
        "form": "noun",
        "plural": "clés"
    },
    {
        "word": "téléphone",
        "level": "starter",
        "theme": "basic_technology_devices_A0",
        "emoji": "📱",
        "form": "noun",
        "plural": "téléphones"
    },
    {
        "word": "livre",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "📖",
        "form": "noun",
        "plural": "livres"
    },
    {
        "word": "sac",
        "level": "starter",
        "theme": "furniture_objects_A0",
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
        ]
    },
    {
        "word": "stylo",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "🖊️",
        "form": "noun",
        "plural": "stylos"
    },
    {
        "word": "grand",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "petit",
        "oppositeEmoji": "📏",
        "definitions": [
            {
                "text": "De grande taille.",
                "examples": [
                    "C'est un grand bureau."
                ]
            }
        ]
    },
    {
        "word": "petit",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "grand",
        "oppositeEmoji": "🗼",
        "definitions": [
            {
                "text": "De petite taille.",
                "examples": [
                    "Elle a un petit appartement."
                ]
            }
        ]
    },
    {
        "word": "jeune",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "vieux",
        "oppositeEmoji": "👴"
    },
    {
        "word": "vieux",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "jeune",
        "oppositeEmoji": "👶"
    },
    {
        "word": "bon",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "mauvais",
        "oppositeEmoji": "👎",
        "definitions": [
            {
                "text": "De haute qualité ou agréable.",
                "examples": [
                    "C'est un bon travail."
                ]
            }
        ]
    },
    {
        "word": "mauvais",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "bon",
        "oppositeEmoji": "👍",
        "definitions": [
            {
                "text": "Pas bon ; désagréable.",
                "examples": [
                    "Le temps est mauvais aujourd'hui."
                ]
            }
        ]
    },
    {
        "word": "facile",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "difficile",
        "oppositeEmoji": "❌",
        "definitions": [
            {
                "text": "Pas difficile.",
                "examples": [
                    "Le test est facile."
                ]
            }
        ]
    },
    {
        "word": "difficile",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "facile",
        "oppositeEmoji": "✅",
        "definitions": [
            {
                "text": "Dur à faire ou à comprendre.",
                "examples": [
                    "Ce travail est difficile."
                ]
            }
        ]
    },
    {
        "word": "heureux",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "emoji": "😊",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ressentir du plaisir ou de la joie.",
                "examples": [
                    "Je suis heureux aujourd'hui."
                ]
            }
        ]
    },
    {
        "word": "fatigué",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "emoji": "😫",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ayant besoin de repos ou de sommeil.",
                "examples": [
                    "Je suis très fatigué après le travail."
                ]
            }
        ]
    },
    {
        "word": "chat",
        "level": "starter",
        "theme": "animals_A0",
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
        ]
    },
    {
        "word": "chien",
        "level": "starter",
        "theme": "animals_A0",
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
        ]
    },
    {
        "word": "oiseau",
        "level": "starter",
        "theme": "animals_A0",
        "emoji": "🐦",
        "form": "noun",
        "plural": "oiseaux"
    },
    {
        "word": "poisson",
        "level": "starter",
        "theme": "animals_A0",
        "emoji": "🐟",
        "form": "noun",
        "plural": "poissons"
    },
    {
        "word": "ensoleillé",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "☀️",
        "form": "adjective"
    },
    {
        "word": "pluvieux",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "🌧️",
        "form": "adjective"
    },
    {
        "word": "chaud",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "🔥",
        "form": "adjective",
        "opposite": "froid",
        "oppositeEmoji": "❄️"
    },
    {
        "word": "froid",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "❄️",
        "form": "adjective",
        "opposite": "chaud",
        "oppositeEmoji": "🔥"
    },
    {
        "word": "tête",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "👤",
        "form": "noun",
        "plural": "têtes"
    },
    {
        "word": "main",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "✋",
        "form": "noun",
        "plural": "mains"
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
        "plural": "yeux"
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
        "word": "mère",
        "level": "starter",
        "theme": "immediate_family_A0",
        "emoji": "👩",
        "form": "noun",
        "plural": "mères"
    },
    {
        "word": "père",
        "level": "starter",
        "theme": "immediate_family_A0",
        "emoji": "👨",
        "form": "noun",
        "plural": "pères"
    },
    {
        "word": "famille",
        "level": "starter",
        "theme": "immediate_family_A0",
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
        ]
    },
    {
        "word": "ami",
        "level": "starter",
        "theme": "immediate_family_A0",
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
        ]
    },
    {
        "word": "partenaire",
        "level": "starter",
        "theme": "marital_status_A0",
        "emoji": "💑",
        "form": "noun",
        "plural": "partenaires",
        "definitions": [
            {
                "text": "La personne avec qui vous vivez ou êtes en couple.",
                "examples": [
                    "Mon partenaire travaille ici."
                ]
            }
        ]
    },
    {
        "word": "homme",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "numberPlural": "2 homme",
        "answer": "deux hommes",
        "emoji": "👨",
        "form": "noun",
        "plural": "hommes",
        "definitions": [
            {
                "text": "Une personne mâle adulte.",
                "examples": [
                    "Cet homme est mon patron."
                ]
            }
        ]
    },
    {
        "word": "femme",
        "level": "starter",
        "theme": "physical_appearance_A1",
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
        ]
    },
    {
        "word": "maison",
        "level": "starter",
        "theme": "rooms_of_a_home_A0",
        "emoji": "🏡",
        "form": "noun",
        "plural": "maisons",
        "definitions": [
            {
                "text": "Un bâtiment où vit une famille.",
                "examples": [
                    "Ils ont une grande maison."
                ]
            }
        ]
    },
    {
        "word": "appartement",
        "level": "starter",
        "theme": "rooms_of_a_home_A0",
        "emoji": "🏢",
        "form": "noun",
        "plural": "appartements",
        "definitions": [
            {
                "text": "Un ensemble de pièces sur un étage d'un bâtiment.",
                "examples": [
                    "Elle vit dans un appartement."
                ]
            }
        ]
    },
    {
        "word": "foyer",
        "level": "starter",
        "theme": "rooms_of_a_home_A0",
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
        ]
    },
    {
        "word": "bureau",
        "level": "starter",
        "theme": "rooms_indoor_spaces_A0",
        "emoji": "🏢",
        "form": "noun",
        "plural": "bureaux",
        "definitions": [
            {
                "text": "Une pièce ou un bâtiment où les gens travaillent.",
                "examples": [
                    "Il est au bureau."
                ]
            }
        ]
    },
    {
        "word": "voiture",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚗",
        "form": "noun",
        "plural": "voitures",
        "definitions": [
            {
                "text": "Un véhicule avec quatre roues et un moteur.",
                "examples": [
                    "Sa voiture est rouge."
                ]
            }
        ]
    },
    {
        "word": "bus",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚌",
        "form": "noun",
        "plural": "bus",
        "definitions": [
            {
                "text": "Un grand véhicule qui transporte beaucoup de gens.",
                "examples": [
                    "Je prends le bus pour aller au travail."
                ]
            }
        ]
    },
    {
        "word": "train",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚆",
        "form": "noun",
        "plural": "trains",
        "definitions": [
            {
                "text": "Un véhicule qui circule sur des rails.",
                "examples": [
                    "Le train est rapide."
                ]
            }
        ]
    },
    {
        "word": "argent",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💰",
        "form": "noun",
        "definitions": [
            {
                "text": "Pièces ou billets utilisés pour acheter des choses.",
                "examples": [
                    "J'ai de l'argent dans mon sac."
                ]
            }
        ]
    },
    {
        "word": "cher",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "bon marché",
        "oppositeEmoji": "🏷️",
        "definitions": [
            {
                "text": "Qui coûte beaucoup d'argent.",
                "examples": [
                    "Cette voiture est chère."
                ]
            }
        ]
    },
    {
        "word": "bon marché",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "cher",
        "oppositeEmoji": "💎",
        "definitions": [
            {
                "text": "Pas cher ; à bas prix.",
                "examples": [
                    "Ce café est bon marché."
                ]
            }
        ]
    },
    {
        "word": "matin",
        "level": "starter",
        "theme": "times_day_A0",
        "emoji": "🌅",
        "form": "noun",
        "plural": "matins",
        "definitions": [
            {
                "text": "La partie de la journée avant 12 heures.",
                "examples": [
                    "Je commence le travail le matin."
                ]
            }
        ]
    },
    {
        "word": "soir",
        "level": "starter",
        "theme": "times_day_A0",
        "emoji": "🌆",
        "form": "noun",
        "plural": "soirs",
        "definitions": [
            {
                "text": "La partie de la journée après l'après-midi.",
                "examples": [
                    "Nous dînons le soir."
                ]
            }
        ]
    },
    {
        "word": "jour",
        "level": "starter",
        "theme": "times_day_A0",
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
        ]
    },
    {
        "word": "semaine",
        "level": "starter",
        "theme": "times_day_A0",
        "emoji": "📅",
        "form": "noun",
        "plural": "semaines",
        "definitions": [
            {
                "text": "Une période de sept jours.",
                "examples": [
                    "Je travaille cinq jours par semaine."
                ]
            }
        ]
    },
    {
        "word": "chaque jour",
        "level": "starter",
        "theme": "times_day_A0",
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
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
