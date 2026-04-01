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
    }, {
        "word": "fruit",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
    }, {
        "word": "légume",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
    }, {
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
    }, {
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
    }, {
        "word": "ratatouille",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "partitive": "de la",
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
    }, {
        "word": "croissant",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "partitive": "du",
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
    }, {
        "word": "pomme",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "partitive": "de la",
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
    }, {
        "word": "pain",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
    }, {
        "word": "oeuf",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "masculine",
        "partitive": "de l'",
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
    }, {
        "word": "lait",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
    }, {
        "word": "riz",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
    }, {
        "word": "viande",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "partitive": "de la",
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
    }, {
        "word": "nourriture",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "partitive": "de la",
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
    }, {
        "word": "café",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
    }, {
        "word": "thé",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
    }, {
        "word": "jus",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
    }, {
        "word": "eau",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "l'",
        "gender": "feminine",
        "partitive": "de l'",
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
    }, {
        "word": "petit-déjeuner",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
    }, {
        "word": "dîner",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
    }, {
        "word": "déjeuner",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
        ]
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
        "word": "bière",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "la",
        "gender": "feminine",
        "partitive": "de la",
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
    }, {
        "word": "vin",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
        "word": "vin",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
        "emoji": "🍷",
        "form": "noun",
        "plural": "vins",
        "definitions": [
            {
                "text": "Une boisson alcoolisée faite de raisins.",
                "examples": [
                    "Il boit du vin rouge."
                ]
            }
        ]
    }, {
        "word": "porte",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚪",
        "form": "noun",
        "plural": "portes",
        "definitions": [
            {
                "text": "Panneau pour entrer dans une pièce.",
                "examples": [
                    "Ferme la porte, s'il te plaît."
                ]
            }
        ]
    }, {
        "word": "fenêtre",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🪟",
        "form": "noun",
        "plural": "fenêtres",
        "definitions": [
            {
                "text": "Ouverture vitrée dans un mur.",
                "examples": [
                    "Ouvre la fenêtre."
                ]
            }
        ]
    }, {
        "word": "infirmier",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "plural": "infirmiers",
        "definitions": [
            {
                "text": "Personne qui soigne les malades.",
                "examples": [
                    "L'infirmier travaille à l'hôpital."
                ]
            }
        ]
    }, {
        "word": "conducteur",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚗",
        "form": "noun",
        "plural": "conducteurs",
        "definitions": [
            {
                "text": "Personne qui conduit un véhicule.",
                "examples": [
                    "Le conducteur de bus est sympa."
                ]
            }
        ]
    }, {
        "word": "chef",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👨‍🍳",
        "form": "noun",
        "plural": "chefs",
        "definitions": [
            {
                "text": "Un cuisinier professionnel.",
                "examples": [
                    "Le chef prépare le repas."
                ]
            }
        ]
    }, {
        "word": "directeur",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧑‍💼",
        "form": "noun",
        "plural": "directeurs",
        "definitions": [
            {
                "text": "Personne qui dirige une équipe.",
                "examples": [
                    "Le directeur est en réunion."
                ]
            }
        ]
    }, {
        "word": "avion",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "plural": "avions",
        "definitions": [
            {
                "text": "Véhicule qui vole.",
                "examples": [
                    "L'avion part à midi."
                ]
            }
        ]
    }, {
        "word": "vélo",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚲",
        "form": "noun",
        "plural": "vélos",
        "definitions": [
            {
                "text": "Véhicule à deux roues.",
                "examples": [
                    "Je vais au travail à vélo."
                ]
            }
        ]
    }, {
        "word": "hôpital",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏥",
        "form": "noun",
        "plural": "hôpitaux",
        "definitions": [
            {
                "text": "Lieu de soins médicaux.",
                "examples": [
                    "Il est à l'hôpital."
                ]
            }
        ]
    }, {
        "word": "restaurant",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍴",
        "form": "noun",
        "plural": "restaurants",
        "definitions": [
            {
                "text": "Lieu pour manger dehors.",
                "examples": [
                    "Allons au restaurant."
                ]
            }
        ]
    }, {
        "word": "banque",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏦",
        "form": "noun",
        "plural": "banques",
        "definitions": [
            {
                "text": "Lieu où l'on garde l'argent.",
                "examples": [
                    "La banque est fermée."
                ]
            }
        ]
    }, {
        "word": "gare",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚉",
        "form": "noun",
        "plural": "gares",
        "definitions": [
            {
                "text": "Lieu où s'arrêtent les trains.",
                "examples": [
                    "Où est la gare ?"
                ]
            }
        ]
    }, {
        "word": "supermarché",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛒",
        "form": "noun",
        "plural": "supermarchés",
        "definitions": [
            {
                "text": "Grand magasin d'alimentation.",
                "examples": [
                    "Je fais les courses au supermarché."
                ]
            }
        ]
    }, {
        "word": "soleil",
        "level": "starter",
        "theme": "weather_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "plural": "soleils",
        "definitions": [
            {
                "text": "L'étoile qui nous éclaire.",
                "examples": [
                    "Le soleil brille."
                ]
            }
        ]
    }, {
        "word": "pluie",
        "level": "starter",
        "theme": "weather_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌧️",
        "form": "noun",
        "plural": "pluies",
        "definitions": [
            {
                "text": "Eau qui tombe du ciel.",
                "examples": [
                    "J'aime marcher sous la pluie."
                ]
            }
        ]
    }, {
        "word": "vent",
        "level": "starter",
        "theme": "weather_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "💨",
        "form": "noun",
        "plural": "vents",
        "definitions": [
            {
                "text": "Air qui bouge.",
                "examples": [
                    "Le vent est fort."
                ]
            }
        ]
    }, {
        "word": "après-midi",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "plural": "après-midi",
        "definitions": [
            {
                "text": "Temps entre midi et le soir.",
                "examples": [
                    "Bon après-midi !"
                ]
            }
        ]
    }, {
        "word": "nuit",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌙",
        "form": "noun",
        "plural": "nuits",
        "definitions": [
            {
                "text": "Temps quand il fait noir.",
                "examples": [
                    "Bonne nuit."
                ]
            }
        ]
    }, {
        "word": "aujourd'hui",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "",
        "gender": "",
        "emoji": "📅",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Le jour présent.",
                "examples": [
                    "Je travaille aujourd'hui."
                ]
            }
        ]
    }, {
        "word": "demain",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "",
        "gender": "",
        "emoji": "⏭️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Le jour après aujourd'hui.",
                "examples": [
                    "On se voit demain."
                ]
            }
        ]
    }, {
        "word": "mari",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "plural": "maris",
        "definitions": [
            {
                "text": "Homme marié.",
                "examples": [
                    "Mon mari est gentil."
                ]
            }
        ]
    }, {
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
        ]
    }, {
        "word": "enfant",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "👶",
        "form": "noun",
        "plural": "enfants",
        "definitions": [
            {
                "text": "Jeune personne.",
                "examples": [
                    "Ils ont un enfant."
                ]
            }
        ]
    }, {
        "word": "parent",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "👪",
        "form": "noun",
        "plural": "parents",
        "definitions": [
            {
                "text": "Mère ou père.",
                "examples": [
                    "Mes parents habitent ici."
                ]
            }
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
        "word": "poulet",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
        ]
    }, {
        "word": "sucre",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
        ]
    }, {
        "word": "salade",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "partitive": "de la",
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
        ]
    }, {
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
        ]
    }, {
        "word": "boeuf",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
        ]
    }, {
        "word": "porc",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
        ]
    }, {
        "word": "pomme de terre",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "partitive": "de la",
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
        ]
    }, {
        "word": "tomate",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "partitive": "de la",
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
        ]
    }, {
        "word": "oignon",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "masculine",
        "partitive": "de l'",
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
        ]
    }, {
        "word": "carotte",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "partitive": "de la",
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
        ]
    }, {
        "word": "soupe",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "partitive": "de la",
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
        ]
    }, {
        "word": "gâteau",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
        ]
    }, {
        "word": "chocolat",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
        ]
    }, {
        "word": "glace",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "partitive": "de la",
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
        "word": "citron",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
        ]
    }, {
        "word": "orange",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "feminine",
        "partitive": "de l'",
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
        ]
    }, {
        "word": "fraise",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "partitive": "de la",
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
        ]
    }, {
        "word": "raisin",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
        ]
    }, {
        "word": "ail",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "masculine",
        "partitive": "de l'",
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
        ]
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
    }, {
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
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
        "word": "beurre",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
        ]
    }, {
        "word": "fromage",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
        "word": "temps",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "⏱️",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Heure ou durée.",
                "examples": [
                    "Je n'ai pas le temps."
                ]
            }
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
    }, {
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
        ]
    }, {
        "word": "après-midi",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "plural": "après-midi",
        "definitions": [
            {
                "text": "Après 12 heures.",
                "examples": [
                    "Je travaille l'après-midi."
                ]
            }
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
                "text": "Société où l'on travaille.",
                "examples": [
                    "Une grande entreprise."
                ]
            }
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
        "word": "cuisine",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "partitive": "de la",
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
        ]
    }, {
        "word": "sel",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
        ]
    }, {
        "word": "poivre",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
        ]
    }, {
        "word": "huile",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "feminine",
        "partitive": "de l'",
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
        ]
    }, {
        "word": "vinaigre",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
        ]
    }, {
        "word": "petit-déjeuner",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
        "emoji": "☕",
        "form": "noun",
        "plural": "petits-déjeuners",
        "definitions": [
            {
                "text": "Repas du matin.",
                "examples": [
                    "Je prends mon petit-déjeuner."
                ]
            }
        ]
    }, {
        "word": "déjeuner",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "déjeuners",
        "definitions": [
            {
                "text": "Repas du midi.",
                "examples": [
                    "C'est l'heure du déjeuner."
                ]
            }
        ]
    }, {
        "word": "dîner",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
        "emoji": "🍷",
        "form": "noun",
        "plural": "dîners",
        "definitions": [
            {
                "text": "Repas du soir.",
                "examples": [
                    "Un bon dîner."
                ]
            }
        ]
    }, {
        "word": "goûter",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
                "text": "Voie de circulation.",
                "examples": [
                    "Quelle rue ?"
                ]
            }
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
                "text": "Sable au bord de l'eau.",
                "examples": [
                    "J'aime la plage."
                ]
            }
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
                "text": "Présent.",
                "examples": [
                    "Merci pour le cadeau."
                ]
            }
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
        "word": "coût",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "💰",
        "form": "noun",
        "plural": "coûts",
        "definitions": [
            {
                "text": "Ce que ça coûte.",
                "examples": [
                    "Le coût de la vie."
                ]
            }
        ]
    }, {
        "word": "marché",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏢",
        "form": "noun",
        "plural": "marchés",
        "definitions": [
            {
                "text": "Lieu de commerce.",
                "examples": [
                    "Le marché mondial."
                ]
            }
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
                "text": "Action de céder pour de l'argent.",
                "examples": [
                    "En vente libre."
                ]
            }
        ]
    }, {
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
                    "Une boutique de mode."
                ]
            }
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
        "word": "cuisine",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍳",
        "form": "noun",
        "plural": "cuisines",
        "definitions": [
            {
                "text": "Pièce pour cuisiner.",
                "examples": [
                    "La cuisine est moderne."
                ]
            }
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
                "text": "Glace pour se voir.",
                "examples": [
                    "Se regarder dans le miroir."
                ]
            }
        ]
    }, {
        "word": "lit",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛌",
        "form": "noun",
        "plural": "lits",
        "definitions": [
            {
                "text": "Meuble pour dormir.",
                "examples": [
                    "Un lit confortable."
                ]
            }
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
                "text": "Table de travail.",
                "examples": [
                    "Travailler à son bureau."
                ]
            }
        ]
    }, {
        "word": "chaise",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🪑",
        "form": "noun",
        "plural": "chaises",
        "definitions": [
            {
                "text": "Siège avec dossier.",
                "examples": [
                    "Une chaise en bois."
                ]
            }
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
                "text": "Objet lumineux.",
                "examples": [
                    "Allume la lampe."
                ]
            }
        ]
    }, {
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
                "text": "Appareil vidéo.",
                "examples": [
                    "Regarder la télévision."
                ]
            }
        ]
    }, {
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
        ]
    }, {
        "word": "téléphone",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "📞",
        "form": "noun",
        "plural": "téléphones",
        "definitions": [
            {
                "text": "Appareil pour appeler.",
                "examples": [
                    "Répondre au téléphone."
                ]
            }
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
                "text": "Objet pour ouvrir.",
                "examples": [
                    "Où est la clé ?"
                ]
            }
        ]
    }, {
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
                "text": "Contenant souple.",
                "examples": [
                    "Un sac à main."
                ]
            }
        ]
    }, {
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
                "text": "Pour mettre l'argent.",
                "examples": [
                    "Oublier son portefeuille."
                ]
            }
        ]
    }, {
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
                "text": "Pour mieux voir.",
                "examples": [
                    "Porter des lunettes."
                ]
            }
        ]
    }, {
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
                "text": "Contre la pluie.",
                "examples": [
                    "Prendre un parapluie."
                ]
            }
        ]
    }, {
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
                "text": "Pour marcher.",
                "examples": [
                    "Mettre ses chaussures."
                ]
            }
        ]
    }, {
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
                    "Des bottes de cuir."
                ]
            }
        ]
    }, {
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
                "text": "Vêtements de pied.",
                "examples": [
                    "Une paire de chaussettes."
                ]
            }
        ]
    }, {
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
                "text": "Vêtement de jambe.",
                "examples": [
                    "Un pantalon bleu."
                ]
            }
        ]
    }, {
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
        ]
    }, {
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
                "text": "Vêtement féminin court.",
                "examples": [
                    "Une jupe plissée."
                ]
            }
        ]
    }, {
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
                "text": "Vêtement féminin entier.",
                "examples": [
                    "Une robe de soirée."
                ]
            }
        ]
    }, {
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
        ]
    }, {
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
                "text": "Haut à manches courtes.",
                "examples": [
                    "Un t-shirt coton."
                ]
            }
        ]
    }, {
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
                "text": "Haut chaud.",
                "examples": [
                    "Mettre un pull."
                ]
            }
        ]
    }, {
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
                "text": "Vêtement d'hiver.",
                "examples": [
                    "Un long manteau."
                ]
            }
        ]
    }, {
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
        ]
    }, {
        "word": "chapeau",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎩",
        "form": "noun",
        "plural": "chapeaux",
        "definitions": [
            {
                "text": "Pour la tête.",
                "examples": [
                    "Un chapeau melon."
                ]
            }
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
                "text": "Contenant de voyage.",
                "examples": [
                    "Boucler sa valise."
                ]
            }
        ]
    }, {
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
                "text": "Sac sur le dos.",
                "examples": [
                    "Prendre son sac à dos."
                ]
            }
        ]
    }, {
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
                "text": "Papier de voyage.",
                "examples": [
                    "Montrer son passeport."
                ]
            }
        ]
    }, {
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
        ]
    }, {
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
                "text": "Représentation d'un lieu.",
                "examples": [
                    "Une carte routière."
                ]
            }
        ]
    }, {
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
                    "Un plan de métro."
                ]
            }
        ]
    }, {
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
        ]
    }, {
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
                "text": "Lieu des avions.",
                "examples": [
                    "Prendre un taxi pour l'aéroport."
                ]
            }
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
        "word": "voyage",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "plural": "voyages",
        "definitions": [
            {
                "text": "Action de voyager.",
                "examples": [
                    "Bon voyage !"
                ]
            }
        ]
    }, {
        "word": "vacances",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "article": "les",
        "gender": "feminine",
        "emoji": "🏖️",
        "form": "noun",
        "plural": "vacances",
        "definitions": [
            {
                "text": "Temps de repos.",
                "examples": [
                    "Partir en vacances."
                ]
            }
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
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
        ]
    }, {
        "word": "déjeuner",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "déjeuners",
        "definitions": [
            {
                "text": "Repas du midi.",
                "examples": [
                    "Un déjeuner léger."
                ]
            }
        ]
    }, {
        "word": "dîner",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
        "emoji": "🍷",
        "form": "noun",
        "plural": "dîners",
        "definitions": [
            {
                "text": "Repas du soir.",
                "examples": [
                    "Un dîner entre amis."
                ]
            }
        ]
    }, {
        "word": "souper",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
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
        ]
    }, {
        "word": "collation",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "la",
        "gender": "feminine",
        "partitive": "de la",
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
        ]
    }, {
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
                "text": "Objet pour se réveiller.",
                "examples": [
                    "Le réveil a sonné."
                ]
            }
        ]
    }, {
        "word": "pâtes",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "les",
        "gender": "feminine",
        "partitive": "des",
        "emoji": "🍝",
        "form": "noun",
        "plural": "pâtes",
        "definitions": [
            {
                "text": "Un aliment fait de farine et d'œufs, souvent servi avec de la sauce.",
                "examples": [
                    "J'adore les pâtes à la sauce tomate.",
                    "Les spaghettis sont un type de pâtes."
                ]
            }
        ]
    }, {
        "word": "pizza",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "partitive": "de la",
        "emoji": "🍕",
        "form": "noun",
        "plural": "pizzas",
        "definitions": [
            {
                "text": "Un pain plat avec du fromage et de la tomate.",
                "examples": [
                    "J'aime la pizza au fromage.",
                    "Commandons une pizza."
                ]
            }
        ]
    }, {
        "word": "soda",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "le",
        "gender": "masculine",
        "partitive": "du",
        "emoji": "🥤",
        "form": "noun",
        "plural": "sodas",
        "subtext": "boisson gazeuse",
        "definitions": [
            {
                "text": "Une boisson sucrée avec des bulles.",
                "examples": [
                    "Je ne bois pas beaucoup de soda."
                ]
            }
        ]
    }, {
        "word": "banane",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "partitive": "de la",
        "emoji": "🍌",
        "form": "noun",
        "plural": "bananes",
        "definitions": [
            {
                "text": "Un fruit long et jaune.",
                "examples": [
                    "Les singes aiment les bananes.",
                    "Je mange une banane chaque matin."
                ]
            }
        ]
    }, {
        "word": "dent",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🦷",
        "form": "noun",
        "plural": "dents",
        "definitions": [
            {
                "text": "L'un des objets blancs et durs dans votre bouche que vous utilisez pour manger.",
                "examples": [
                    "Brossez-vous les dents tous les jours."
                ]
            }
        ]
    }, {
        "word": "cheveux",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "les",
        "gender": "masculine",
        "emoji": "💇",
        "form": "noun",
        "plural": "cheveux",
        "definitions": [
            {
                "text": "La masse de choses comme des fils qui poussent sur votre tête.",
                "examples": [
                    "Il a les cheveux courts et bruns."
                ]
            }
        ]
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
