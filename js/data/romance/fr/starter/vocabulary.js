(function() {
    const data = [
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
