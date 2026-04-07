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
        "transcription": "me.dsɛ̃",
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
        "countability": "countable"
    },
    {
        "word": "fruit",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍎",
        "form": "noun",
        "transcription": "fʁɥi",
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
        "countability": "countable"
    },
    {
        "word": "légume",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥦",
        "form": "noun",
        "transcription": "le.ɡym",
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
        "countability": "countable"
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
        "transcription": "pje",
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
        "countability": "countable"
    },
    {
        "word": "professeur",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧑‍🏫",
        "form": "noun",
        "transcription": "pʁɔ.fɛ.sœʁ",
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
        "countability": "countable"
    },
    {
        "word": "ratatouille",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "form": "noun",
        "transcription": "ʁa.ta.tuj",
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
        "countability": "countable"
    },
    {
        "word": "croissant",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "form": "noun",
        "transcription": "kʁwa.sɑ̃",
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
        "countability": "countable"
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
        "transcription": "pɔm",
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
        "countability": "countable"
    },
    {
        "word": "pain",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥖",
        "form": "noun",
        "transcription": "pɛ̃",
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
        "countability": "uncountable"
    },
    {
        "word": "oeuf",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🥚",
        "form": "noun",
        "transcription": "œf",
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "subtext": "",
        "synonyms": [
            "maman"
        ],
        "definitions": [
            {
                "text": "La femme qui est votre parent.",
                "examples": [
                    "Ma mère est gentille."
                ]
            }
        ],
        "countability": "countable"
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
        "subtext": "",
        "synonyms": [
            "papa"
        ],
        "definitions": [
            {
                "text": "L'homme qui est votre parent.",
                "examples": [
                    "Mon père est au travail."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        ],
        "countability": "countable"
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
        "countability": "countable"
    },
    {
        "word": "salaire",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "le",
        "emoji": "💰",
        "form": "noun",
        "plural": "salaires",
        "subtext": "",
        "synonyms": [
            "paie",
            "rémunération"
        ],
        "definitions": [
            {
                "text": "L'argent qu'une personne gagne de son travail chaque mois.",
                "examples": [
                    "Son salaire est bon."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "réunion",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "la",
        "emoji": "🤝",
        "form": "noun",
        "plural": "réunions",
        "subtext": "",
        "synonyms": [
            "rencontre",
            "assemblée"
        ],
        "definitions": [
            {
                "text": "Un moment où les gens se rassemblent pour parler de quelque chose.",
                "examples": [
                    "Nous avons une réunion tous les lundis."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
    },
    {
        "word": "stress",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "article": "le",
        "emoji": "😫",
        "form": "noun",
        "subtext": "",
        "synonyms": [
            "pression",
            "tension"
        ],
        "definitions": [
            {
                "text": "Un sentiment d'inquiétude causé par une situation difficile.",
                "examples": [
                    "J'ai beaucoup de stress au travail."
                ]
            }
        ],
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
    },
    {
        "word": "relation",
        "level": "starter",
        "theme": "family_life_A1",
        "article": "la",
        "emoji": "❤️",
        "form": "noun",
        "plural": "relations",
        "subtext": "",
        "synonyms": [
            "rapport",
            "lien"
        ],
        "definitions": [
            {
                "text": "Une connexion entre deux personnes.",
                "examples": [
                    "Ils ont une bonne relation."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "subtext": "",
        "synonyms": [
            "loisirs",
            "détente"
        ],
        "definitions": [
            {
                "text": "Moment où vous ne travaillez pas et pouvez faire ce que vous voulez.",
                "examples": [
                    "Je lis des livres pendant mon temps libre."
                ]
            }
        ],
        "countability": "uncountable"
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
        "countability": "uncountable"
    },
    {
        "word": "vin",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "le",
        "gender": "masculine",
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
        ],
        "countability": "uncountable"
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
        "definitions": [
            {
                "text": "Panneau pour entrer dans une pièce.",
                "examples": [
                    "Ferme la porte, s'il te plaît."
                ]
            }
        ],
        "countability": "countable"
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
        "definitions": [
            {
                "text": "Ouverture vitrée dans un mur.",
                "examples": [
                    "Ouvre la fenêtre."
                ]
            }
        ],
        "countability": "countable"
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
        "definitions": [
            {
                "text": "Personne qui soigne les malades.",
                "examples": [
                    "L'infirmier travaille à l'hôpital."
                ]
            }
        ],
        "countability": "countable"
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
        "definitions": [
            {
                "text": "Personne qui conduit un véhicule.",
                "examples": [
                    "Le conducteur de bus est sympa."
                ]
            }
        ],
        "countability": "countable"
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
        "definitions": [
            {
                "text": "Un cuisinier professionnel.",
                "examples": [
                    "Le chef prépare le repas."
                ]
            }
        ],
        "countability": "countable"
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
        "definitions": [
            {
                "text": "Personne qui dirige une équipe.",
                "examples": [
                    "Le directeur est en réunion."
                ]
            }
        ],
        "countability": "countable"
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
        "definitions": [
            {
                "text": "Véhicule qui vole.",
                "examples": [
                    "L'avion part à midi."
                ]
            }
        ],
        "countability": "countable"
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
        "definitions": [
            {
                "text": "Véhicule à deux roues.",
                "examples": [
                    "Je vais au travail à vélo."
                ]
            }
        ],
        "countability": "countable"
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
        "definitions": [
            {
                "text": "Lieu de soins médicaux.",
                "examples": [
                    "Il est à l'hôpital."
                ]
            }
        ],
        "countability": "countable"
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
        "definitions": [
            {
                "text": "Lieu pour manger dehors.",
                "examples": [
                    "Allons au restaurant."
                ]
            }
        ],
        "countability": "countable"
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
        "definitions": [
            {
                "text": "Grand magasin d'alimentation.",
                "examples": [
                    "Je fais les courses au supermarché."
                ]
            }
        ],
        "countability": "countable"
    },
    {
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
        ],
        "countability": "countable"
    },
    {
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
        ],
        "countability": "countable"
    },
    {
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
        ],
        "countability": "countable"
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
        "definitions": [
            {
                "text": "Temps quand il fait noir.",
                "examples": [
                    "Bonne nuit."
                ]
            }
        ],
        "countability": "countable"
    },
    {
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
    },
    {
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
        "definitions": [
            {
                "text": "Homme marié.",
                "examples": [
                    "Mon mari est gentil."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        "definitions": [
            {
                "text": "Jeune personne.",
                "examples": [
                    "Ils ont un enfant."
                ]
            }
        ],
        "countability": "countable"
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
        "definitions": [
            {
                "text": "Mère ou père.",
                "examples": [
                    "Mes parents habitent ici."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
    },
    {
        "word": "garçon",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "countability": "countable"
    },
    {
        "word": "fille",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
    },
    {
        "word": "adulte",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
    },
    {
        "word": "gens",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "countability": "countable"
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
        "countability": "countable"
    },
    {
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
        ],
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "definitions": [
            {
                "text": "Après 12 heures.",
                "examples": [
                    "Je travaille l'après-midi."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
                "text": "Société où l'on travaille.",
                "examples": [
                    "Une grande entreprise."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
    },
    {
        "word": "petit-déjeuner",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "le",
        "gender": "masculine",
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
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
                "text": "Voie de circulation.",
                "examples": [
                    "Quelle rue ?"
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
                "text": "Sable au bord de l'eau.",
                "examples": [
                    "J'aime la plage."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
                "text": "Présent.",
                "examples": [
                    "Merci pour le cadeau."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
    },
    {
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
        ],
        "countability": "countable"
    },
    {
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
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
                "text": "Action de céder pour de l'argent.",
                "examples": [
                    "En vente libre."
                ]
            }
        ],
        "countability": "countable"
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
                    "Une boutique de mode."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
    },
    {
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
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
                "text": "Glace pour se voir.",
                "examples": [
                    "Se regarder dans le miroir."
                ]
            }
        ],
        "countability": "countable"
    },
    {
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
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
                "text": "Table de travail.",
                "examples": [
                    "Travailler à son bureau."
                ]
            }
        ],
        "countability": "countable"
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
        "definitions": [
            {
                "text": "Siège avec dossier.",
                "examples": [
                    "Une chaise en bois."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
                "text": "Objet lumineux.",
                "examples": [
                    "Allume la lampe."
                ]
            }
        ],
        "countability": "countable"
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
                "text": "Appareil vidéo.",
                "examples": [
                    "Regarder la télévision."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
    },
    {
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
        ],
        "countability": "countable"
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
        "countability": "countable"
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
                "text": "Contenant souple.",
                "examples": [
                    "Un sac à main."
                ]
            }
        ],
        "countability": "countable"
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
                "text": "Pour mettre l'argent.",
                "examples": [
                    "Oublier son portefeuille."
                ]
            }
        ],
        "countability": "countable"
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
                "text": "Pour mieux voir.",
                "examples": [
                    "Porter des lunettes."
                ]
            }
        ],
        "countability": "countable"
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
                "text": "Contre la pluie.",
                "examples": [
                    "Prendre un parapluie."
                ]
            }
        ],
        "countability": "countable"
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
                "text": "Pour marcher.",
                "examples": [
                    "Mettre ses chaussures."
                ]
            }
        ],
        "countability": "countable"
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
                    "Des bottes de cuir."
                ]
            }
        ],
        "countability": "countable"
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
                "text": "Vêtements de pied.",
                "examples": [
                    "Une paire de chaussettes."
                ]
            }
        ],
        "countability": "countable"
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
                "text": "Vêtement de jambe.",
                "examples": [
                    "Un pantalon bleu."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
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
                "text": "Vêtement féminin court.",
                "examples": [
                    "Une jupe plissée."
                ]
            }
        ],
        "countability": "countable"
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
                "text": "Vêtement féminin entier.",
                "examples": [
                    "Une robe de soirée."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
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
                "text": "Haut chaud.",
                "examples": [
                    "Mettre un pull."
                ]
            }
        ],
        "countability": "countable"
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
                "text": "Vêtement d'hiver.",
                "examples": [
                    "Un long manteau."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
                "text": "Contenant de voyage.",
                "examples": [
                    "Boucler sa valise."
                ]
            }
        ],
        "countability": "countable"
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
                "text": "Sac sur le dos.",
                "examples": [
                    "Prendre son sac à dos."
                ]
            }
        ],
        "countability": "countable"
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
                "text": "Papier de voyage.",
                "examples": [
                    "Montrer son passeport."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
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
                "text": "Représentation d'un lieu.",
                "examples": [
                    "Une carte routière."
                ]
            }
        ],
        "countability": "countable"
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
                    "Un plan de métro."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
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
                "text": "Lieu des avions.",
                "examples": [
                    "Prendre un taxi pour l'aéroport."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
    },
    {
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
        ],
        "countability": "countable"
    },
    {
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
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
    },
    {
        "word": "déjeuner",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "le",
        "gender": "masculine",
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
        ],
        "countability": "countable"
    },
    {
        "word": "dîner",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "le",
        "gender": "masculine",
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
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
                "text": "Objet pour se réveiller.",
                "examples": [
                    "Le réveil a sonné."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "je",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👤",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Pronom utilisé par la personne qui parle pour se désigner elle-même.",
                "examples": [
                    "Je suis étudiant.",
                    "Je m'appelle Marc."
                ]
            }
        ],
        "transcription": "ʒə"
    },
    {
        "word": "tu",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👤",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Pronom utilisé pour s'adresser à une seule personne.",
                "examples": [
                    "Comment vas-tu ?",
                    "Tu es très gentil."
                ]
            }
        ],
        "transcription": "ty"
    },
    {
        "word": "il",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👨",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Pronom utilisé pour désigner un homme ou un garçon dont on a déjà parlé.",
                "examples": [
                    "Il travaille à Paris.",
                    "Est-ce qu'il est là ?"
                ]
            }
        ],
        "transcription": "il"
    },
    {
        "word": "elle",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👩",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Pronom utilisé pour désigner une femme ou une fille dont on a déjà parlé.",
                "examples": [
                    "Elle habite à Lyon.",
                    "Est-ce qu'elle est prête ?"
                ]
            }
        ],
        "transcription": "ɛl"
    },
    {
        "word": "nous",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👥",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Pronom utilisé par la personne qui parle pour se désigner elle-même ainsi que d'autres personnes.",
                "examples": [
                    "Nous allons au cinéma.",
                    "Nous sommes amis."
                ]
            }
        ],
        "transcription": "nu"
    },
    {
        "word": "vous",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👥",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Pronom utilisé pour s'adresser à plusieurs personnes, ou à une seule personne de manière formelle.",
                "examples": [
                    "Comment allez-vous ?",
                    "Est-ce que vous voulez du café ?"
                ]
            }
        ],
        "transcription": "vu"
    },
    {
        "word": "ils",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👨‍👨‍👦",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Pronom utilisé pour désigner plusieurs personnes (masculin).",
                "examples": [
                    "Ils sont en vacances.",
                    "Ils habitent ensemble."
                ]
            }
        ],
        "transcription": "il"
    },
    {
        "word": "elles",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👩‍👩‍👧",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Pronom utilisé pour désigner plusieurs personnes (féminin).",
                "examples": [
                    "Elles étudient le français.",
                    "Est-ce qu'elles sont arrivées ?"
                ]
            }
        ],
        "transcription": "ɛl"
    },
    {
        "word": "mon",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "🙋",
        "form": "determiner",
        "definitions": [
            {
                "text": "Déterminant possessif utilisé par la personne qui parle pour désigner quelque chose qui lui appartient (masculin).",
                "examples": [
                    "C'est mon livre.",
                    "Voici mon ami."
                ]
            }
        ],
        "transcription": "mɔ̃"
    },
    {
        "word": "ma",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "🙋",
        "form": "determiner",
        "definitions": [
            {
                "text": "Déterminant possessif utilisé par la personne qui parle pour désigner quelque chose qui lui appartient (féminin).",
                "examples": [
                    "C'est ma voiture.",
                    "Voici ma maison."
                ]
            }
        ],
        "transcription": "ma"
    },
    {
        "word": "mes",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "🙋",
        "form": "determiner",
        "definitions": [
            {
                "text": "Déterminant possessif utilisé par la personne qui parle pour désigner plusieurs choses qui lui appartiennent.",
                "examples": [
                    "Ce sont mes clés.",
                    "Voici mes enfants."
                ]
            }
        ],
        "transcription": "me"
    },
    {
        "word": "ton",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👤",
        "form": "determiner",
        "definitions": [
            {
                "text": "Déterminant possessif utilisé pour désigner quelque chose qui appartient à la personne à qui l'on parle (masculin).",
                "examples": [
                    "Où est ton sac ?",
                    "C'est ton tour."
                ]
            }
        ],
        "transcription": "tɔ̃"
    },
    {
        "word": "son",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👨",
        "form": "determiner",
        "definitions": [
            {
                "text": "Déterminant possessif utilisé pour désigner quelque chose qui appartient à une tierce personne (masculin).",
                "examples": [
                    "C'est son bureau.",
                    "Où est son frère ?"
                ]
            }
        ],
        "transcription": "sɔ̃"
    },
    {
        "word": "un",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "1️⃣",
        "form": "determiner",
        "definitions": [
            {
                "text": "Article indéfini singulier masculin.",
                "examples": [
                    "J'ai un chien.",
                    "C'est un bon jour."
                ]
            }
        ],
        "transcription": "œ̃"
    },
    {
        "word": "une",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "1️⃣",
        "form": "determiner",
        "definitions": [
            {
                "text": "Article indéfini singulier féminin.",
                "examples": [
                    "C'est une pomme.",
                    "J'ai une idée."
                ]
            }
        ],
        "transcription": "yn"
    },
    {
        "word": "le",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "📦",
        "form": "determiner",
        "definitions": [
            {
                "text": "Article défini singulier masculin.",
                "examples": [
                    "Le soleil brille.",
                    "Où est le chat ?"
                ]
            }
        ],
        "transcription": "lə"
    },
    {
        "word": "la",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "📦",
        "form": "determiner",
        "definitions": [
            {
                "text": "Article défini singulier féminin.",
                "examples": [
                    "La porte est ouverte.",
                    "Regarde la lune."
                ]
            }
        ],
        "transcription": "la"
    },
    {
        "word": "les",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "📦",
        "form": "determiner",
        "definitions": [
            {
                "text": "Article défini pluriel.",
                "examples": [
                    "Les enfants jouent.",
                    "J'aime les fleurs."
                ]
            }
        ],
        "transcription": "le"
    },
    {
        "word": "ce",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👉",
        "form": "determiner",
        "definitions": [
            {
                "text": "Déterminant utilisé pour désigner quelque chose ou quelqu'un de proche (masculin).",
                "examples": [
                    "Ce livre est intéressant.",
                    "Regarde ce garçon."
                ]
            }
        ],
        "transcription": "sə"
    },
    {
        "word": "ou",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "emoji": "❓",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Mot utilisé pour relier deux choix ou possibilités.",
                "examples": [
                    "Thé ou café ?",
                    "Aujourd'hui ou demain ?"
                ]
            }
        ],
        "transcription": "u"
    },
    {
        "word": "si",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "emoji": "❓",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Mot utilisé pour introduire une condition.",
                "examples": [
                    "S'il pleut, nous resterons à la maison.",
                    "Je ne sais pas si elle vient."
                ]
            }
        ],
        "transcription": "si"
    },
    {
        "word": "donc",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "emoji": "➡️",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Mot utilisé pour introduire un résultat ou une conclusion.",
                "examples": [
                    "Je pense, donc je suis.",
                    "Il est tard, donc je dois partir."
                ]
            }
        ],
        "transcription": "dɔ̃k"
    },
    {
        "word": "devant",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "emoji": "🚪",
        "form": "preposition",
        "definitions": [
            {
                "text": "En face de quelque chose ou quelqu'un.",
                "examples": [
                    "Le chat est devant la porte.",
                    "Il y a un jardin devant la maison."
                ]
            }
        ],
        "transcription": "dəvɑ̃"
    },
    {
        "word": "derrière",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "emoji": "🚪",
        "form": "preposition",
        "definitions": [
            {
                "text": "À la partie postérieure de quelque chose ou quelqu'un.",
                "examples": [
                    "La voiture est derrière la maison.",
                    "Qui est derrière toi ?"
                ]
            }
        ],
        "transcription": "dɛʁjɛʁ"
    },
    {
        "word": "en",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "📍",
        "form": "preposition",
        "definitions": [
            {
                "text": "Préposition indiquant le lieu ou le temps.",
                "examples": [
                    "Il habite en France.",
                    "Nous partons en été."
                ]
            }
        ],
        "transcription": "ɑ̃"
    },
    {
        "word": "mathématiques",
        "level": "starter",
        "theme": "school_subjects_A1",
        "emoji": "🔢",
        "form": "noun",
        "gender": "feminine",
        "article": "les",
        "plural": "mathématiques",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "L'étude des nombres, des quantités et des formes.",
                "examples": [
                    "Les mathématiques sont ma matière préférée.",
                    "Nous avons cours de maths à neuf heures."
                ]
            }
        ],
        "transcription": "matematik"
    },
    {
        "word": "histoire",
        "level": "starter",
        "theme": "school_subjects_A1",
        "emoji": "📜",
        "form": "noun",
        "gender": "feminine",
        "article": "l'",
        "plural": "histoires",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "L'étude des événements passés.",
                "examples": [
                    "Nous étudions l'histoire de France.",
                    "Il aime lire des livres d'histoire."
                ]
            }
        ],
        "transcription": "istwaʁ"
    },
    {
        "word": "science",
        "level": "starter",
        "theme": "school_subjects_A1",
        "emoji": "🧪",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "sciences",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "L'étude de la nature et du monde physique.",
                "examples": [
                    "La science est très intéressante.",
                    "Aujourd'hui, nous faisons une expérience de science."
                ]
            }
        ],
        "transcription": "sjɑ̃s"
    },
    {
        "word": "géographie",
        "level": "starter",
        "theme": "school_subjects_A1",
        "emoji": "🌍",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "géographies",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "L'étude des lieux et des relations entre les personnes et leurs environnements.",
                "examples": [
                    "Nous utilisons une carte pour le cours de géographie.",
                    "J'aime étudier la géographie du monde."
                ]
            }
        ],
        "transcription": "ʒeɔɡʁafi"
    },
    {
        "word": "tigre",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐅",
        "form": "noun",
        "gender": "masculine",
        "article": "le",
        "plural": "tigres",
        "countability": "countable",
        "definitions": [
            {
                "text": "Un grand chat sauvage avec des rayures noires et oranges.",
                "examples": [
                    "Le tigre court très vite.",
                    "Il y a un tigre dans le parc national."
                ]
            }
        ],
        "transcription": "tiɡʁ"
    },
    {
        "word": "singe",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐒",
        "form": "noun",
        "gender": "masculine",
        "article": "le",
        "plural": "singes",
        "countability": "countable",
        "definitions": [
            {
                "text": "Un animal qui vit dans les arbres et mange des bananes.",
                "examples": [
                    "Le singe saute entre les arbres.",
                    "Les singes sont des animaux amusants."
                ]
            }
        ],
        "transcription": "sɛ̃ʒ"
    },
    {
        "word": "baleine",
        "level": "starter",
        "theme": "sea_animals_A1",
        "emoji": "🐋",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "baleines",
        "countability": "countable",
        "definitions": [
            {
                "text": "Un très grand animal marin qui respire de l'air.",
                "examples": [
                    "La baleine est l'animal le plus grand du monde.",
                    "Nous avons vu une baleine pendant le voyage."
                ]
            }
        ],
        "transcription": "balɛn"
    },
    {
        "word": "cercle",
        "level": "starter",
        "theme": "shapes_A1",
        "emoji": "⭕",
        "form": "noun",
        "gender": "masculine",
        "article": "le",
        "plural": "cercles",
        "countability": "countable",
        "definitions": [
            {
                "text": "Une forme parfaitement ronde.",
                "examples": [
                    "Dessine un cercle sur la feuille.",
                    "La balle a la forme d'un cercle."
                ]
            }
        ],
        "transcription": "sɛʁkl"
    },
    {
        "word": "triangle",
        "level": "starter",
        "theme": "shapes_A1",
        "emoji": "🔺",
        "form": "noun",
        "gender": "masculine",
        "article": "le",
        "plural": "triangles",
        "countability": "countable",
        "definitions": [
            {
                "text": "Une forme avec trois côtés et trois angles.",
                "examples": [
                    "Un morceau de pizza ressemble à un triangle.",
                    "Le professeur explique le triangle."
                ]
            }
        ],
        "transcription": "tʁijɑ̃ɡl"
    },
    {
        "word": "grille-pain",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "🍞",
        "form": "noun",
        "gender": "masculine",
        "article": "le",
        "plural": "grille-pains",
        "countability": "countable",
        "definitions": [
            {
                "text": "Un appareil électrique pour griller le pain.",
                "examples": [
                    "J'utilise le grille-pain pour le petit déjeuner.",
                    "Le grille-pain est sur la table de la cuisine."
                ]
            }
        ],
        "transcription": "ɡʁij pɛ̃"
    },
    {
        "word": "four à micro-ondes",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "📟",
        "form": "noun",
        "gender": "masculine",
        "article": "le",
        "plural": "fours à micro-ondes",
        "countability": "countable",
        "definitions": [
            {
                "text": "Un four qui utilise des ondes pour chauffer les aliments rapidement.",
                "examples": [
                    "Je chauffe le lait au micro-ondes.",
                    "Le micro-ondes est très utile dans la cuisine."
                ]
            }
        ],
        "transcription": "fuʁ a mikʁo ɔ̃d"
    },
    {
        "word": "règle",
        "level": "starter",
        "theme": "school_stationery_A1",
        "emoji": "📏",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "règles",
        "countability": "countable",
        "definitions": [
            {
                "text": "Un instrument utilisé pour mesurer ou tracer des lignes droites.",
                "examples": [
                    "J'utilise la règle pour dessiner une ligne.",
                    "Ma règle mesure trente centimètres."
                ]
            }
        ],
        "transcription": "ʁɛɡl"
    },
    {
        "word": "pilote",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "👨‍✈️",
        "form": "noun",
        "gender": "masculine",
        "article": "le",
        "plural": "pilotes",
        "countability": "countable",
        "definitions": [
            {
                "text": "Une personne qui conduit un avion.",
                "examples": [
                    "Le pilote a annoncé l'atterrissage.",
                    "Je veux devenir pilote."
                ]
            }
        ],
        "transcription": "pilɔt"
    },
    {
        "word": "serveur",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🤵",
        "form": "noun",
        "gender": "masculine",
        "article": "le",
        "plural": "serveurs",
        "countability": "countable",
        "definitions": [
            {
                "text": "Une personne qui sert de la nourriture et des boissons dans un restaurant.",
                "examples": [
                    "Le serveur apporte le menu.",
                    "Demande le compte au serveur."
                ]
            }
        ],
        "transcription": "sɛʁvœʁ"
    },
    {
        "word": "dentiste",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🦷",
        "form": "noun",
        "gender": "masculine",
        "article": "le",
        "plural": "dentistes",
        "countability": "countable",
        "definitions": [
            {
                "text": "Un médecin qui soigne les dents.",
                "examples": [
                    "J'ai un rendez-vous chez le dentiste à trois heures.",
                    "Le dentiste dit que mes dents vont bien."
                ]
            }
        ],
        "transcription": "dɑ̃tist"
    },
    {
        "word": "policier",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "👮",
        "form": "noun",
        "gender": "masculine",
        "article": "le",
        "plural": "policiers",
        "countability": "countable",
        "definitions": [
            {
                "text": "Un membre de la police.",
                "examples": [
                    "Le policier aide les gens dans la rue.",
                    "Nous avons appelé un policier."
                ]
            }
        ],
        "transcription": "pɔlisje"
    },
    {
        "word": "pompier",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "👨‍🚒",
        "form": "noun",
        "gender": "masculine",
        "article": "le",
        "plural": "pompiers",
        "countability": "countable",
        "definitions": [
            {
                "text": "Une personne entraînée pour éteindre les incendies.",
                "examples": [
                    "Le pompier est très courageux.",
                    "Les pompiers sont arrivés immédiatement."
                ]
            }
        ],
        "transcription": "pɔ̃pje"
    },
    {
        "word": "soldat",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🪖",
        "form": "noun",
        "gender": "masculine",
        "article": "le",
        "plural": "soldats",
        "countability": "countable",
        "definitions": [
            {
                "text": "Une personne qui fait partie d'une armée.",
                "examples": [
                    "Le soldat porte un uniforme.",
                    "Beaucoup de soldats travaillent pour la paix."
                ]
            }
        ],
        "transcription": "sɔlda"
    },
    {
        "word": "écrivain",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "✍️",
        "form": "noun",
        "gender": "masculine",
        "article": "l'",
        "plural": "écrivains",
        "countability": "countable",
        "definitions": [
            {
                "text": "Une personne qui écrit des livres ou des articles.",
                "examples": [
                    "Mon écrivain préféré est Victor Hugo.",
                    "Il veut être un écrivain célèbre."
                ]
            }
        ],
        "transcription": "ekʁivɛ̃"
    },
    {
        "word": "ingénieur",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "👷",
        "form": "noun",
        "gender": "masculine",
        "article": "l'",
        "plural": "ingénieurs",
        "countability": "countable",
        "definitions": [
            {
                "text": "Une personne qui conçoit des machines, des bâtiments ou des routes.",
                "examples": [
                    "Mon frère est ingénieur civil.",
                    "L'ingénieur travaille sur le nouveau projet."
                ]
            }
        ],
        "transcription": "ɛ̃ʒenjœʁ"
    },
    {
        "word": "secrétaire",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "⌨️",
        "form": "noun",
        "gender": "masculine",
        "article": "le",
        "plural": "secrétaires",
        "countability": "countable",
        "definitions": [
            {
                "text": "Une personne qui travaille dans un bureau, écrit des lettres et organise des rendez-vous.",
                "examples": [
                    "Le secrétaire répond au téléphone.",
                    "J'ai donné le document au secrétaire."
                ]
            }
        ],
        "transcription": "səkʁetɛʁ"
    },
    {
        "word": "chapeau",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "🎩",
        "form": "noun",
        "gender": "masculine",
        "article": "le",
        "plural": "chapeaux",
        "countability": "countable",
        "definitions": [
            {
                "text": "Un accessoire qu'on met sur la tête.",
                "examples": [
                    "Je porte un chapeau quand il y a du soleil.",
                    "Le chapeau est sur la chaise."
                ]
            }
        ],
        "transcription": "ʃapo"
    },
    {
        "word": "t-shirt",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👕",
        "form": "noun",
        "gender": "masculine",
        "article": "le",
        "plural": "t-shirts",
        "countability": "countable",
        "definitions": [
            {
                "text": "Un vêtement léger pour la partie supérieure du corps.",
                "examples": [
                    "Je porte un t-shirt blanc.",
                    "As-tu un t-shirt de rechange ?"
                ]
            }
        ],
        "transcription": "ti ʃœʁt"
    },
    {
        "word": "short",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "🩳",
        "form": "noun",
        "gender": "masculine",
        "article": "le",
        "plural": "shorts",
        "countability": "countable",
        "definitions": [
            {
                "text": "Un pantalon court qui arrive au-dessus du genou.",
                "examples": [
                    "Je mets un short parce qu'il fait chaud.",
                    "Je porte un short pour jouer au football."
                ]
            }
        ],
        "transcription": "ʃɔʁt"
    },
    {
        "word": "botte",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "🥾",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "bottes",
        "countability": "countable",
        "definitions": [
            {
                "text": "Un type de chaussure qui couvre aussi une partie de la jambe.",
                "examples": [
                    "Je mets des bottes quand il pleut.",
                    "Elle a acheté des bottes en cuir."
                ]
            }
        ],
        "transcription": "bɔt"
    },
    {
        "word": "écharpe",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "🧣",
        "form": "noun",
        "gender": "feminine",
        "article": "l'",
        "plural": "écharpes",
        "countability": "countable",
        "definitions": [
            {
                "text": "Une bande de tissu qu'on met autour du cou pour rester au chaud.",
                "examples": [
                    "Je mets mon écharpe parce qu'il fait froid.",
                    "Mon écharpe est en laine."
                ]
            }
        ],
        "transcription": "eʃaʁp"
    },
    {
        "word": "gant",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "🧤",
        "form": "noun",
        "gender": "masculine",
        "article": "le",
        "plural": "gants",
        "countability": "countable",
        "definitions": [
            {
                "text": "Accessoires qui couvrent les mains pour les protéger du froid.",
                "examples": [
                    "Je porte des gants pour skier.",
                    "Où sont mes gants ?"
                ]
            }
        ],
        "transcription": "ɡɑ̃"
    },
    {
        "word": "terre",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🌎",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "La planète sur laquelle nous vivons ; ou le sol.",
                "examples": [
                    "La Terre est une belle planète.",
                    "Les enfants jouent sur la terre."
                ]
            }
        ],
        "transcription": "tɛʁ"
    },
    {
        "word": "colline",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "⛰️",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "collines",
        "countability": "countable",
        "definitions": [
            {
                "text": "Une petite montagne avec des flancs doux.",
                "examples": [
                    "Nous faisons une promenade sur la colline.",
                    "Notre maison est sur une colline."
                ]
            }
        ],
        "transcription": "kɔlin"
    },
    {
        "word": "vallée",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "⛰️",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "vallées",
        "countability": "countable",
        "definitions": [
            {
                "text": "Une zone de terre entre des collines ou des montagnes.",
                "examples": [
                    "La rivière coule dans la vallée.",
                    "La vallée est très verte au printemps."
                ]
            }
        ],
        "transcription": "vale"
    },
    {
        "word": "forêt",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🌲",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "forêts",
        "countability": "countable",
        "definitions": [
            {
                "text": "Une zone très grande couverte d'arbres.",
                "examples": [
                    "Il y a beaucoup d'animaux dans la forêt.",
                    "La forêt est dense et sombre."
                ]
            }
        ],
        "transcription": "fɔʁɛ"
    },
    {
        "word": "bois",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🌳",
        "form": "noun",
        "gender": "masculine",
        "article": "le",
        "plural": "bois",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Une zone couverte d'arbres, plus petite qu'une forêt.",
                "examples": [
                    "Nous allons chercher des champignons dans le bois.",
                    "Il y a un petit bois près du village."
                ]
            }
        ],
        "transcription": "bwa"
    },
    {
        "word": "lac",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "💧",
        "form": "noun",
        "gender": "masculine",
        "article": "le",
        "plural": "lacs",
        "countability": "countable",
        "definitions": [
            {
                "text": "Une grande masse d'eau entourée par la terre.",
                "examples": [
                    "Nous nageons dans le lac en été.",
                    "Le lac est très calme aujourd'hui."
                ]
            }
        ],
        "transcription": "lak"
    },
    {
        "word": "champ",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🌱",
        "form": "noun",
        "gender": "masculine",
        "article": "le",
        "plural": "champs",
        "countability": "countable",
        "definitions": [
            {
                "text": "Une zone de terre ouverte utilisée pour l'agriculture.",
                "examples": [
                    "Le champ est plein de fleurs.",
                    "Ils travaillent dans le champ toute la journée."
                ]
            }
        ],
        "transcription": "ʃɑ̃"
    },
    {
        "word": "feuille",
        "level": "starter",
        "theme": "plants_natural_world_A1",
        "emoji": "🍃",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "feuilles",
        "countability": "countable",
        "definitions": [
            {
                "text": "La partie plate et verte d'une plante ou d'un arbre.",
                "examples": [
                    "Les feuilles tombent en automne.",
                    "Cette plante a de très grandes feuilles."
                ]
            }
        ],
        "transcription": "fœj"
    },
    {
        "word": "plante",
        "level": "starter",
        "theme": "plants_natural_world_A1",
        "emoji": "🌵",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "plural": "plantes",
        "countability": "countable",
        "definitions": [
            {
                "text": "Un être vivant qui pousse dans la terre et a des racines et des feuilles.",
                "examples": [
                    "Je dois donner de l'eau aux plantes.",
                    "Il y a une plante dans le coin de la pièce."
                ]
            }
        ],
        "transcription": "plɑ̃t"
    },
    {
        "word": "nature",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🌿",
        "form": "noun",
        "gender": "feminine",
        "article": "la",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Le monde physique et tout ce qu'il contient, comme les plantes et les animaux.",
                "examples": [
                    "Nous aimons passer du temps dans la nature.",
                    "Nous devons protéger la nature."
                ]
            }
        ],
        "transcription": "natyʁ"
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];

})();