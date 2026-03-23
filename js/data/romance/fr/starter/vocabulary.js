(function() {
    const data = [
    {
        "word": "médecin",
        "level": "starter",
        "theme": "job_titles_professions_A0",
        "article": "le",
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
        "article": "le",
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
        "article": "le",
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
        ]
    },
    {
        "word": "croissant",
        "level": "starter",
        "theme": "basic_foods_A0",
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
        "article": "l'",
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
        "article": "le",
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
        "article": "le",
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
        "article": "la",
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
        "article": "la",
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
        "article": "le",
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
        "article": "le",
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
        "article": "le",
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
        "article": "le",
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
        "article": "l'",
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
        "article": "le",
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
        "article": "le",
        "emoji": "👕",
        "form": "noun",
        "plural": "t-shirts"
    },
    {
        "word": "pantalon",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "article": "le",
        "emoji": "👖",
        "form": "noun",
        "plural": "pantalons"
    },
    {
        "word": "chaussures",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "article": "les",
        "emoji": "👟",
        "form": "noun",
        "plural": "chaussures"
    },
    {
        "word": "chapeau",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "article": "le",
        "emoji": "👒",
        "form": "noun",
        "plural": "chapeaux"
    },
    {
        "word": "chaise",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "article": "la",
        "emoji": "🪑",
        "form": "noun",
        "plural": "chaises"
    },
    {
        "word": "table",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "article": "la",
        "emoji": "🪑",
        "form": "noun",
        "plural": "tables"
    },
    {
        "word": "lit",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "article": "le",
        "emoji": "🛏️",
        "form": "noun",
        "plural": "lits"
    },
    {
        "word": "clé",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "article": "la",
        "emoji": "🔑",
        "form": "noun",
        "plural": "clés"
    },
    {
        "word": "téléphone",
        "level": "starter",
        "theme": "basic_technology_devices_A0",
        "article": "le",
        "emoji": "📱",
        "form": "noun",
        "plural": "téléphones"
    },
    {
        "word": "livre",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "article": "le",
        "emoji": "📖",
        "form": "noun",
        "plural": "livres"
    },
    {
        "word": "sac",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "article": "le",
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
        "article": "le",
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
        "article": "l'",
        "emoji": "🐦",
        "form": "noun",
        "plural": "oiseaux"
    },
    {
        "word": "poisson",
        "level": "starter",
        "theme": "animals_A0",
        "article": "le",
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
        "article": "la",
        "emoji": "👤",
        "form": "noun",
        "plural": "têtes"
    },
    {
        "word": "main",
        "level": "starter",
        "theme": "body_parts_A0",
        "article": "la",
        "emoji": "✋",
        "form": "noun",
        "plural": "mains"
    },
    {
        "word": "jambe",
        "level": "starter",
        "theme": "body_parts_A0",
        "article": "la",
        "emoji": "🦵",
        "form": "noun",
        "plural": "jambes"
    },
    {
        "word": "oeil",
        "level": "starter",
        "theme": "body_parts_A0",
        "article": "l'",
        "emoji": "👁️",
        "form": "noun",
        "plural": "yeux"
    },
    {
        "word": "nez",
        "level": "starter",
        "theme": "body_parts_A0",
        "article": "le",
        "emoji": "👃",
        "form": "noun",
        "plural": "nez"
    },
    {
        "word": "bouche",
        "level": "starter",
        "theme": "body_parts_A0",
        "article": "la",
        "emoji": "👄",
        "form": "noun",
        "plural": "bouches"
    },
    {
        "word": "oreille",
        "level": "starter",
        "theme": "body_parts_A0",
        "article": "l'",
        "emoji": "👂",
        "form": "noun",
        "plural": "oreilles"
    },
    {
        "word": "mère",
        "level": "starter",
        "theme": "immediate_family_A0",
        "article": "la",
        "emoji": "👩",
        "form": "noun",
        "plural": "mères"
    },
    {
        "word": "père",
        "level": "starter",
        "theme": "immediate_family_A0",
        "article": "le",
        "emoji": "👨",
        "form": "noun",
        "plural": "pères"
    },
    {
        "word": "famille",
        "level": "starter",
        "theme": "immediate_family_A0",
        "article": "la",
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
        "article": "l'",
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
        "article": "le",
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
        "article": "l'",
        "numberPlural": "2 homme",
        "answer": "deux hommes",
        "emoji": "👨",
        "form": "noun",
        "plural": "hommes",
        "definitions": [
            {
                "text": "Une person mâle adulte.",
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
        ]
    },
    {
        "word": "maison",
        "level": "starter",
        "theme": "rooms_of_a_home_A0",
        "article": "la",
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
        "article": "l'",
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
        "article": "le",
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
        "article": "le",
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
        "article": "la",
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
        "article": "le",
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
        "article": "le",
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
        "article": "l'",
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
        "form": "adjective",
        "emoji": "💎",
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
        "form": "adjective",
        "emoji": "🏷️",
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
        "article": "le",
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
        "article": "le",
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
        "article": "le",
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
        "article": "la",
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
    },
    {
        "word": "à plein temps",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Travailler le nombre complet d'heures d'une semaine de travail.",
                "examples": [
                    "Elle a un emploi à plein temps dans une banque."
                ]
            }
        ]
    },
    {
        "word": "à temps partiel",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Travailler moins d'heures qu'une semaine de travail standard.",
                "examples": [
                    "Il travaille à temps partiel le samedi."
                ]
            }
        ]
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
        ]
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
        ]
    },
    {
        "word": "salaire",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        ]
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
        ]
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
        ]
    },
    {
        "word": "stress",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        ]
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
        ]
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
        ]
    },
    {
        "word": "pièce",
        "level": "starter",
        "theme": "rooms_of_a_home_A0",
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
        ]
    },
    {
        "word": "cuisine",
        "level": "starter",
        "theme": "rooms_of_a_home_A0",
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
        ]
    },
    {
        "word": "propre",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "sale",
        "oppositeEmoji": "💩",
        "definitions": [
            {
                "text": "Exempt de saleté.",
                "examples": [
                    "Ma chambre est propre."
                ]
            }
        ]
    },
    {
        "word": "sain",
        "level": "starter",
        "theme": "medical_appointments_A1",
        "emoji": "🍎",
        "form": "adjective",
        "opposite": "malsain",
        "definitions": [
            {
                "text": "Bon pour votre corps ; pas malade.",
                "examples": [
                    "Les légumes sont des aliments sains."
                ]
            }
        ]
    },
    {
        "word": "malade",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤒",
        "form": "adjective",
        "opposite": "en bonne santé",
        "definitions": [
            {
                "text": "Pas bien ; souffrant d'une maladie.",
                "examples": [
                    "Je me sens malade aujourd'hui."
                ]
            }
        ]
    },
    {
        "word": "sommeil",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "article": "le",
        "emoji": "😴",
        "form": "noun",
        "definitions": [
            {
                "text": "Le repos naturel dont votre corps a besoin chaque nuit.",
                "examples": [
                    "Je dors huit heures par nuit."
                ]
            }
        ]
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
        ]
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
        ]
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
        ]
    },
    {
        "word": "en ligne",
        "level": "starter",
        "theme": "using_a_smartphone_A1",
        "emoji": "🌐",
        "form": "adjective",
        "definitions": [
            {
                "text": "Utilisant l'internet.",
                "examples": [
                    "J'achète parfois de la nourriture en ligne."
                ]
            }
        ]
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
        ]
    },
    {
        "word": "seul",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "emoji": "🧍",
        "form": "adjective",
        "opposite": "ensemble",
        "oppositeEmoji": "👫",
        "definitions": [
            {
                "text": "Sans autres personnes ; par soi-même.",
                "examples": [
                    "Elle vit seule."
                ]
            }
        ]
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
        "word": "vacances",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A0",
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
        ]
    },
    {
        "word": "voyage",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A0",
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
        ]
    },
    {
        "word": "hôtel",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
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
        ]
    },
    {
        "word": "week-end",
        "level": "starter",
        "theme": "times_day_A0",
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
        ]
    },
    {
        "word": "temps libre",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "article": "le",
        "emoji": "🎮",
        "form": "noun",
        "definitions": [
            {
                "text": "Moment où vous ne travaillez pas et pouvez faire ce que vous voulez.",
                "examples": [
                    "Je lis des livres pendant mon temps libre."
                ]
            }
        ]
    },
    {
        "word": "détendu",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "stressé",
        "oppositeEmoji": "😫",
        "definitions": [
            {
                "text": "Calme ; pas inquiet ou stressé.",
                "examples": [
                    "Je me sens détendu le week-end."
                ]
            }
        ]
    },
    {
        "word": "inquiet",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "emoji": "😟",
        "form": "adjective",
        "opposite": "calme",
        "definitions": [
            {
                "text": "Se sentir anxieux à propos de quelque chose qui pourrait arriver.",
                "examples": [
                    "Elle est inquiète pour son travail."
                ]
            }
        ]
    },
    {
        "word": "occupé",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "opposite": "libre",
        "definitions": [
            {
                "text": "Avoir beaucoup de choses à faire.",
                "examples": [
                    "Je suis très occupé cette semaine."
                ]
            }
        ]
    },
    {
        "word": "utile",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "inutile",
        "definitions": [
            {
                "text": "Serviable ; ayant un but pratique.",
                "examples": [
                    "Une voiture est très utile à la campagne."
                ]
            }
        ]
    },
    {
        "word": "important",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "💎",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ayant une grande valeur ou un grand effet.",
                "examples": [
                    "Le sommeil est très important."
                ]
            }
        ]
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
