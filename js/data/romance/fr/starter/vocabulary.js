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
        "countability": "uncountable",
        "transcription": "/lɛ/"
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
        "countability": "uncountable",
        "transcription": "/ri/"
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
        "countability": "uncountable",
        "transcription": "/vjɑ̃d/"
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
        "countability": "countable",
        "transcription": "/nu.ʁi.tyʁ/"
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
        "countability": "uncountable",
        "transcription": "/te/"
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
        "countability": "uncountable",
        "transcription": "/ʒy/"
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
        "countability": "uncountable",
        "transcription": "/o/"
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
        "countability": "countable",
        "transcription": "/paʁk/"
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
        "countability": "countable",
        "transcription": "/e.kɔl/"
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
        "countability": "countable",
        "transcription": "/tabl/"
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
        "countability": "countable",
        "transcription": "/livʁ/"
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
        "countability": "countable",
        "transcription": "/sti.lo/"
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
        "countability": "countable",
        "transcription": "/ʃa/"
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
        "countability": "countable",
        "transcription": "/ʃjɛ̃/"
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
        "countability": "countable",
        "transcription": "/wa.zo/"
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
        "countability": "countable",
        "transcription": "/pwa.sɔ̃/"
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
        "countability": "countable",
        "transcription": "/tɛt/"
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
        "countability": "countable",
        "transcription": "/mɛ̃/"
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
        "countability": "countable",
        "transcription": "/ʒɑ̃b/"
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
        "countability": "countable",
        "transcription": "/œj/"
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
        "countability": "countable",
        "transcription": "/ne/"
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
        "countability": "countable",
        "transcription": "/buʃ/"
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
        "countability": "countable",
        "transcription": "/ɔ.ʁɛj/"
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
        "countability": "countable",
        "transcription": "/do/"
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
        "countability": "countable",
        "transcription": "/bʁa/"
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
        "countability": "countable",
        "transcription": "/mɛʁ/"
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
        "countability": "countable",
        "transcription": "/pɛʁ/"
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
        "countability": "countable",
        "transcription": "/fa.mij/"
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
        "countability": "countable",
        "transcription": "/a.mi/"
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
        "countability": "countable",
        "transcription": "/paʁ.tə.nɛʁ/"
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
        "countability": "countable",
        "transcription": "/ɔm/"
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
        "countability": "countable",
        "transcription": "/mɛ.zɔ̃/"
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
        "countability": "countable",
        "transcription": "/a.paʁ.tə.mɑ̃/"
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
        "countability": "uncountable",
        "transcription": "/fwa.je/"
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
        "countability": "countable",
        "transcription": "/vwa.tyʁ/"
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
        "countability": "uncountable",
        "transcription": "/aʁ.ʒɑ̃/"
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
        "countability": "countable",
        "transcription": "/ma.tɛ̃/"
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
        "countability": "countable",
        "transcription": "/swaʁ/"
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
        "countability": "countable",
        "transcription": "/ʒuʁ/"
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
        "countability": "countable",
        "transcription": "/sə.mɛn/"
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
        ],
        "transcription": "/ʃak ʒuʁ/"
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
        "countability": "countable",
        "transcription": "/pa.tʁɔ̃/"
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
        "countability": "countable",
        "transcription": "/kɔ.lɛɡ/"
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
        "countability": "countable",
        "transcription": "/sa.lɛʁ/"
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
        "countability": "countable",
        "transcription": "/ʁe.y.njɔ̃/"
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
        "countability": "countable",
        "transcription": "/tʁa.ʒɛ/"
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
        "countability": "uncountable",
        "transcription": "/stʁɛs/"
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
        "countability": "countable",
        "transcription": "/lwa.je/"
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
        "countability": "countable",
        "transcription": "/vwa.zɛ̃/"
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
        "countability": "countable",
        "transcription": "/pjɛs/"
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
        "countability": "countable",
        "transcription": "/sɔ.mɛj/"
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
        "countability": "countable",
        "transcription": "/eɡ.zɛʁ.sis/"
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
        "countability": "countable",
        "transcription": "/ʁə.la.sjɔ̃/"
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
        ],
        "transcription": "/ɑ̃.sɑ̃bl/"
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
        "countability": "countable",
        "transcription": "/o.tɛl/"
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
        "countability": "countable",
        "transcription": "/wi.kɛnd/"
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
        "countability": "uncountable",
        "transcription": "/tɑ̃ libʁ/"
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
        "countability": "uncountable",
        "transcription": "/bjɛʁ/"
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
        "countability": "uncountable",
        "transcription": "/vɛ̃/"
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
        "countability": "countable",
        "transcription": "/pɔʁt/"
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
        "countability": "countable",
        "transcription": "/fə.nɛtʁ/"
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
        "countability": "countable",
        "transcription": "/ɛ̃.fiʁ.mje/"
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
        "countability": "countable",
        "transcription": "/kɔ̃.dyk.tœʁ/"
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
        "countability": "countable",
        "transcription": "/ʃɛf/"
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
        "countability": "countable",
        "transcription": "/di.ʁɛk.tœʁ/"
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
        "countability": "countable",
        "transcription": "/a.vjɔ̃/"
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
        "countability": "countable",
        "transcription": "/ve.lo/"
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
        "countability": "countable",
        "transcription": "/o.pi.tal/"
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
        "countability": "countable",
        "transcription": "/ʁɛs.tɔ.ʁɑ̃/"
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
        "countability": "countable",
        "transcription": "/sy.pɛʁ.maʁ.ʃe/"
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
        "countability": "countable",
        "transcription": "/sɔ.lɛj/"
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
        "countability": "countable",
        "transcription": "/plɥi/"
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
        "countability": "countable",
        "transcription": "/vɑ̃/"
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
        "countability": "countable",
        "transcription": "/nɥi/"
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
        ],
        "transcription": "/o.ʒuʁ.dɥi/"
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
        ],
        "transcription": "/də.mɛ̃/"
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
        "countability": "countable",
        "transcription": "/ma.ʁi/"
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
        "countability": "countable",
        "transcription": "/fam/"
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
        "countability": "countable",
        "transcription": "/ɑ̃.fɑ̃/"
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
        "countability": "countable",
        "transcription": "/pa.ʁɑ̃/"
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
        "countability": "countable",
        "transcription": "/sœʁ/"
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
        "countability": "countable",
        "transcription": "/fʁɛʁ/"
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
        "countability": "countable",
        "transcription": "/fis/"
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
        "countability": "countable",
        "transcription": "/ɡʁɑ̃.pɛʁ/"
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
        "countability": "countable",
        "transcription": "/ɡʁɑ̃.mɛʁ/"
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
        "countability": "countable",
        "transcription": "/ɔ̃kl/"
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
        "countability": "countable",
        "transcription": "/tɑ̃t/"
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
        "countability": "countable",
        "transcription": "/ku.zɛ̃/"
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
        "countability": "countable",
        "transcription": "/aʁbʁ/"
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
        "countability": "countable",
        "transcription": "/flœʁ/"
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
        "countability": "countable",
        "transcription": "/mɔ̃.taɲ/"
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
        "countability": "countable",
        "transcription": "/ʁi.vjɛʁ/"
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
        "countability": "countable",
        "transcription": "/mɛʁ/"
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
        "countability": "countable",
        "transcription": "/sjɛl/"
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
        "countability": "countable",
        "transcription": "/lyn/"
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
        "countability": "countable",
        "transcription": "/a.sjɛt/"
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
        "countability": "countable",
        "transcription": "/tas/"
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
        "countability": "countable",
        "transcription": "/vɛʁ/"
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
        "countability": "countable",
        "transcription": "/fuʁ.ʃɛt/"
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
        "countability": "countable",
        "transcription": "/kɥi.jɛʁ/"
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
        "countability": "countable",
        "transcription": "/ku.to/"
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
        "countability": "countable",
        "transcription": "/ɔʁ.di.na.tœʁ pɔʁ.tabl/"
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
        "countability": "countable",
        "transcription": "/si.ne.ma/"
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
        "countability": "countable",
        "transcription": "/my.ze/"
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
        "countability": "countable",
        "transcription": "/faʁ.ma.si/"
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
        "countability": "countable",
        "transcription": "/pu.lɛ/"
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
        "countability": "uncountable",
        "transcription": "/sykʁ/"
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
        "countability": "countable",
        "transcription": "/sa.lad/"
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
        "countability": "countable",
        "transcription": "/ku/"
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
        "countability": "countable",
        "transcription": "/e.pol/"
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
        ],
        "transcription": "/dɑ̃/"
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
        ],
        "transcription": "/syʁ/"
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
        ],
        "transcription": "/a/"
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
        ],
        "transcription": "/su/"
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
        ],
        "transcription": "/e/"
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
        ],
        "transcription": "/mɛ/"
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
        ],
        "transcription": "/paʁ.sə kə/"
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
        "countability": "countable",
        "transcription": "/pʁɔ.blɛm/"
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
        "countability": "countable",
        "transcription": "/bœf/"
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
        "countability": "countable",
        "transcription": "/pɔʁ/"
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
        "countability": "countable",
        "transcription": "/pɔm də tɛʁ/"
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
        "countability": "countable",
        "transcription": "/tɔ.mat/"
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
        "countability": "countable",
        "transcription": "/ɔ.ɲɔ̃/"
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
        "countability": "countable",
        "transcription": "/ka.ʁɔt/"
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
        "countability": "uncountable",
        "transcription": "/sup/"
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
        "countability": "countable",
        "transcription": "/ɡɑ.to/"
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
        "countability": "uncountable",
        "transcription": "/ʃɔ.kɔ.la/"
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
        "countability": "uncountable",
        "transcription": "/ɡlas/"
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
        "countability": "countable",
        "transcription": "/dwa/"
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
        "countability": "countable",
        "transcription": "/ɔʁ.tɛj/"
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
        "countability": "countable",
        "transcription": "/ɛs.tɔ.ma/"
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
        "countability": "countable",
        "transcription": "/ʒə.nu/"
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
        "countability": "countable",
        "transcription": "/ɛʁb/"
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
        "countability": "countable",
        "transcription": "/nɥaʒ/"
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
        "countability": "countable",
        "transcription": "/e.twal/"
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
        "countability": "countable",
        "transcription": "/ɔʁ.lɔʒ/"
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
        "countability": "countable",
        "transcription": "/bi.bli.jɔ.tɛk/"
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
        "countability": "countable",
        "transcription": "/lœ̃.di/"
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
        "countability": "countable",
        "transcription": "/maʁ.di/"
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
        "countability": "countable",
        "transcription": "/mɛʁ.kʁə.di/"
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
        "countability": "countable",
        "transcription": "/ʒø.di/"
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
        "countability": "countable",
        "transcription": "/vɑ̃.dʁə.di/"
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
        "countability": "countable",
        "transcription": "/sam.di/"
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
        "countability": "countable",
        "transcription": "/di.mɑ̃ʃ/"
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
        "countability": "countable",
        "transcription": "/ʒɑ̃.vje/"
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
        "countability": "countable",
        "transcription": "/fe.vʁi.je/"
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
        "countability": "countable",
        "transcription": "/maʁs/"
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
        "countability": "countable",
        "transcription": "/a.vʁil/"
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
        "countability": "countable",
        "transcription": "/mɛ/"
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
        "countability": "countable",
        "transcription": "/ʒɥɛ̃/"
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
        "countability": "countable",
        "transcription": "/ʒɥi.jɛ/"
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
        "countability": "countable",
        "transcription": "/ut/"
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
        "countability": "countable",
        "transcription": "/sɛp.tɑ̃bʁ/"
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
        "countability": "countable",
        "transcription": "/ɔk.tɔbʁ/"
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
        "countability": "countable",
        "transcription": "/nɔ.vɑ̃bʁ/"
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
        "countability": "countable",
        "transcription": "/de.sɑ̃bʁ/"
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
        "countability": "countable",
        "transcription": "/pʁɛ̃.tɑ̃/"
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
        "countability": "countable",
        "transcription": "/e.te/"
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
        "countability": "countable",
        "transcription": "/o.tɔn/"
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
        "countability": "countable",
        "transcription": "/i.vɛʁ/"
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
        "countability": "countable",
        "transcription": "/ljɔ̃/"
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
        "countability": "countable",
        "transcription": "/e.le.fɑ̃/"
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
        "countability": "countable",
        "transcription": "/la.pɛ̃/"
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
        "countability": "countable",
        "transcription": "/ʃə.val/"
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
        "countability": "countable",
        "transcription": "/vaʃ/"
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
        "countability": "countable",
        "transcription": "/kɔ.ʃɔ̃/"
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
        "countability": "countable",
        "transcription": "/mu.tɔ̃/"
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
        "countability": "countable",
        "transcription": "/si.tʁɔ̃/"
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
        "countability": "countable",
        "transcription": "/ɔ.ʁɑ̃ʒ/"
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
        "countability": "countable",
        "transcription": "/fʁɛz/"
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
        "countability": "countable",
        "transcription": "/ʁɛ.zɛ̃/"
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
        "countability": "uncountable",
        "transcription": "/aj/"
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
        ],
        "transcription": "/tu.ʒuʁ/"
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
        ],
        "transcription": "/a.bi.tɥɛl.mɑ̃/"
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
        ],
        "transcription": "/su.vɑ̃/"
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
        ],
        "transcription": "/kɛl.kə.fwa/"
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
        ],
        "transcription": "/ʒa.mɛ/"
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
        ],
        "transcription": "/ki/"
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
        ],
        "transcription": "/kwa/"
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
        ],
        "transcription": "/u/"
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
        ],
        "transcription": "/kɑ̃/"
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
        ],
        "transcription": "/puʁ.kwa/"
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
        ],
        "transcription": "/kɔ.mɑ̃/"
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
        "countability": "countable",
        "transcription": "/bɔ̃.ʒuʁ/"
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
        "countability": "countable",
        "transcription": "/o ʁə.vwaʁ/"
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
        ],
        "transcription": "/sil vu plɛ/"
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
        "countability": "countable",
        "transcription": "/mɛʁ.si/"
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
        "countability": "countable",
        "transcription": "/paʁ.dɔ̃/"
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
        ],
        "transcription": "/wi/"
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
        ],
        "transcription": "/nɔ̃/"
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
        "countability": "countable",
        "transcription": "/nɔ̃/"
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
        "countability": "countable",
        "transcription": "/vjɔ.lɛ/"
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
        "countability": "countable",
        "transcription": "/sal də bɛ̃/"
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
        "countability": "countable",
        "transcription": "/ʃɑ̃bʁ/"
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
        "countability": "countable",
        "transcription": "/be.be/"
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
        "countability": "countable",
        "transcription": "/ɡaʁ.sɔ̃/"
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
        "countability": "countable",
        "transcription": "/fij/"
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
        "countability": "countable",
        "transcription": "/pə.ti.t‿a.mi/"
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
        "countability": "countable",
        "transcription": "/pə.ti.t‿a.mi/"
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
        "countability": "countable",
        "transcription": "/e.ty.djɑ̃/"
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
        "countability": "countable",
        "transcription": "/ka.ma.ʁad də klas/"
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
        "countability": "countable",
        "transcription": "/a.pa.ʁɛj fo.to/"
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
        "countability": "countable",
        "transcription": "/ɔʁ.di.na.tœʁ/"
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
        "countability": "countable",
        "transcription": "/bu.tɛj/"
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
        "countability": "countable",
        "transcription": "/bwat/"
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
        "countability": "countable",
        "transcription": "/ba.lɔ̃/"
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
        "countability": "countable",
        "transcription": "/i.mœbl/"
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
        "countability": "uncountable",
        "transcription": "/ka.fe/"
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
        "countability": "countable",
        "transcription": "/sɑ̃tʁ/"
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
        "countability": "uncountable",
        "transcription": "/bœʁ/"
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
        "countability": "uncountable",
        "transcription": "/fʁɔ.maʒ/"
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
        "countability": "countable",
        "transcription": "/ak.tœʁ/"
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
        "countability": "countable",
        "transcription": "/aʁ.tist/"
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
        "countability": "countable",
        "transcription": "/a.dylt/"
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
        "countability": "countable",
        "transcription": "/kɔ̃.sɛj/"
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
        "countability": "countable",
        "transcription": "/aʒ/"
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
        "countability": "countable",
        "transcription": "/ɛʁ/"
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
        "countability": "countable",
        "transcription": "/kaʁ.tje/"
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
        "countability": "countable",
        "transcription": "/aʁ/"
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
        "countability": "countable",
        "transcription": "/ɡʁup/"
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
        "countability": "countable",
        "transcription": "/bɛ̃/"
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
        "countability": "countable",
        "transcription": "/a.ni.vɛʁ.sɛʁ/"
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
        "countability": "countable",
        "transcription": "/ba.to/"
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
        "countability": "countable",
        "transcription": "/a.fɛʁ/"
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
        "countability": "countable",
        "transcription": "/y.ni.vɛʁ.si.te/"
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
        "countability": "countable",
        "transcription": "/kɔ̃.sɛʁ/"
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
        "countability": "countable",
        "transcription": "/kɔ̃.vɛʁ.sa.sjɔ̃/"
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
        ],
        "transcription": "/ɑ̃.kɔʁ/"
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
        ],
        "transcription": "/i.l‿i.j‿a/"
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
        ],
        "transcription": "/o.si/"
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
        ],
        "transcription": "/vʁɛ.mɑ̃/"
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
        ],
        "transcription": "/la/"
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
        "countability": "countable",
        "transcription": "/kʁɛ.jɔ̃/"
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
        "countability": "countable",
        "transcription": "/pa.pje/"
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
        "countability": "countable",
        "transcription": "/mə.sjø/"
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
        "countability": "countable",
        "transcription": "/ma.dam/"
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
        "countability": "countable",
        "transcription": "/vil/"
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
        "countability": "countable",
        "transcription": "/pe.i/"
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
        "countability": "uncountable",
        "transcription": "/mɔ̃d/"
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
        "countability": "countable",
        "transcription": "/ʒɑ̃/"
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
        "countability": "countable",
        "transcription": "/ʃoz/"
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
        "countability": "uncountable",
        "transcription": "/tɑ̃/"
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
        "countability": "countable",
        "transcription": "/œʁ/"
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
        "countability": "countable",
        "transcription": "/mi.nyt/"
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
        "countability": "countable",
        "transcription": "/sə.ɡɔ̃d/"
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
        ],
        "transcription": "/jɛʁ/"
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
        "countability": "countable",
        "transcription": "/ma.ti.ne/"
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
        "countability": "countable",
        "transcription": "/a.pʁɛ mi.di/"
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
        "countability": "countable",
        "transcription": "/swa.ʁe/"
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
        "countability": "uncountable",
        "transcription": "/mi.nɥi/"
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
        "countability": "uncountable",
        "transcription": "/mi.di/"
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
        "countability": "countable",
        "transcription": "/tʁa.vaj/"
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
        "countability": "countable",
        "transcription": "/bu.lo/"
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
        "countability": "countable",
        "transcription": "/me.tje/"
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
        "countability": "countable",
        "transcription": "/ɑ̃.tʁə.pʁiz/"
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
        "countability": "countable",
        "transcription": "/kli.jɑ̃/"
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
        "countability": "countable",
        "transcription": "/me.saʒ/"
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
        "countability": "countable",
        "transcription": "/i.mɛl/"
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
        "countability": "countable",
        "transcription": "/sit wɛb/"
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
        "countability": "countable",
        "transcription": "/mo də pas/"
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
        "countability": "countable",
        "transcription": "/kla.vje/"
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
        "countability": "countable",
        "transcription": "/su.ʁi/"
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
        "countability": "countable",
        "transcription": "/e.kʁɑ̃/"
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
        "countability": "countable",
        "transcription": "/my.zik/"
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
        "countability": "countable",
        "transcription": "/ʃɑ̃.sɔ̃/"
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
        "countability": "countable",
        "transcription": "/film/"
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
        "countability": "countable",
        "transcription": "/fo.to/"
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
        "countability": "countable",
        "transcription": "/spɔʁ/"
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
        "countability": "uncountable",
        "transcription": "/fut.bal/"
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
        "countability": "uncountable",
        "transcription": "/te.nis/"
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
        "countability": "uncountable",
        "transcription": "/na.ta.sjɔ̃/"
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
        "countability": "countable",
        "transcription": "/ka.fe.te.ʁja/"
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
        "countability": "countable",
        "transcription": "/ti.kɛ/"
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
        "countability": "countable",
        "transcription": "/ʁə.sy/"
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
        "countability": "countable",
        "transcription": "/fak.tyʁ/"
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
        "countability": "countable",
        "transcription": "/kaʁt bɑ̃.kɛʁ/"
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
        "countability": "countable",
        "transcription": "/ɛs.pɛs/"
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
        "countability": "countable",
        "transcription": "/vɛt.mɑ̃/"
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
        "countability": "uncountable",
        "transcription": "/sɛl/"
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
        "countability": "uncountable",
        "transcription": "/pwavʁ/"
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
        "countability": "countable",
        "transcription": "/ɥil/"
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
        "countability": "countable",
        "transcription": "/vi.nɛɡʁ/"
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
        "countability": "countable",
        "transcription": "/pə.ti de.ʒœ.ne/"
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
        "countability": "countable",
        "transcription": "/ɡu.te/"
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
        "countability": "countable",
        "transcription": "/ɛ̃.vi.te/"
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
        "countability": "countable",
        "transcription": "/fɛt/"
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
        "countability": "countable",
        "transcription": "/vwa.ja.ʒœʁ/"
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
        "countability": "countable",
        "transcription": "/ʁy/"
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
        "countability": "countable",
        "transcription": "/ʃə.mɛ̃/"
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
        "countability": "countable",
        "transcription": "/ʁut/"
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
        "countability": "countable",
        "transcription": "/plas/"
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
        "countability": "countable",
        "transcription": "/pɔ̃/"
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
        "countability": "countable",
        "transcription": "/plaʒ/"
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
        "countability": "uncountable",
        "transcription": "/kɑ̃.paɲ/"
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
        "countability": "countable",
        "transcription": "/vi.laʒ/"
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
        "countability": "countable",
        "transcription": "/lɑ̃ɡ/"
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
        "countability": "countable",
        "transcription": "/mo/"
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
        "countability": "countable",
        "transcription": "/fʁaz/"
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
        "countability": "countable",
        "transcription": "/kɛs.tjɔ̃/"
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
        "countability": "countable",
        "transcription": "/ʁe.pɔ̃s/"
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
        "countability": "countable",
        "transcription": "/i.de/"
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
        "countability": "countable",
        "transcription": "/a.vi/"
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
        "countability": "countable",
        "transcription": "/ɔ.pi.njɔ̃/"
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
        "countability": "countable",
        "transcription": "/ʃwa/"
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
        "countability": "countable",
        "transcription": "/de.si.zjɔ̃/"
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
        "countability": "countable",
        "transcription": "/pʁɔ.ʒɛ/"
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
        "countability": "countable",
        "transcription": "/ʁe.y.sit/"
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
        "countability": "countable",
        "transcription": "/e.ʁœʁ/"
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
        "countability": "countable",
        "transcription": "/fot/"
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
        "countability": "countable",
        "transcription": "/ka.do/"
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
        "countability": "countable",
        "transcription": "/pʁi/"
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
        "countability": "countable",
        "transcription": "/a.ʃa/"
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
        "countability": "countable",
        "transcription": "/ma.ɡa.zɛ̃/"
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
        "countability": "countable",
        "transcription": "/sɑ̃.tʁə kɔ.mɛʁ.sjal/"
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
        "countability": "uncountable",
        "transcription": "/mɔ.nɛ/"
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
        "countability": "countable",
        "transcription": "/kɔ̃t/"
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
        "countability": "countable",
        "transcription": "/bɑ̃k/"
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
        "countability": "uncountable",
        "transcription": "/e.paʁɲ/"
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
        "countability": "countable",
        "transcription": "/de.pɑ̃s/"
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
        "countability": "countable",
        "transcription": "/pɛ.mɑ̃/"
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
        "countability": "countable",
        "transcription": "/ku/"
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
        "countability": "countable",
        "transcription": "/maʁ.ʃe/"
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
        "countability": "countable",
        "transcription": "/pʁɔ.dɥi/"
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
        "countability": "countable",
        "transcription": "/sɛʁ.vis/"
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
        "countability": "countable",
        "transcription": "/ɔfʁ/"
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
        "countability": "countable",
        "transcription": "/də.mɑ̃d/"
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
        "countability": "countable",
        "transcription": "/li.vʁɛ.zɔ̃/"
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
        "countability": "countable",
        "transcription": "/kɔ.mɑ̃d/"
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
        "countability": "uncountable",
        "transcription": "/kli.jɑ̃.tɛl/"
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
        "countability": "countable",
        "transcription": "/vɑ̃t/"
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
        "countability": "countable",
        "transcription": "/bu.tik/"
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
        "countability": "countable",
        "transcription": "/e.taʒ/"
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
        "countability": "countable",
        "transcription": "/ɑ̃.tʁe/"
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
        "countability": "countable",
        "transcription": "/sɔʁ.ti/"
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
        "countability": "countable",
        "transcription": "/ɛs.ka.lje/"
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
        "countability": "countable",
        "transcription": "/a.sɑ̃.sœʁ/"
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
        "countability": "countable",
        "transcription": "/ku.lwaʁ/"
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
        "countability": "countable",
        "transcription": "/myʁ/"
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
        "countability": "countable",
        "transcription": "/twa/"
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
        "countability": "countable",
        "transcription": "/ʒaʁ.dɛ̃/"
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
        "countability": "countable",
        "transcription": "/ɡa.ʁaʒ/"
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
        "countability": "countable",
        "transcription": "/sa.lɔ̃/"
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
        "countability": "countable",
        "transcription": "/kɥi.zin/"
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
        "countability": "countable",
        "transcription": "/sal a mɑ̃.ʒe/"
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
        "countability": "countable",
        "transcription": "/twa.lɛt/"
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
        "countability": "countable",
        "transcription": "/duʃ/"
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
        "countability": "countable",
        "transcription": "/ʁɔ.bi.nɛ/"
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
        "countability": "countable",
        "transcription": "/sa.vɔ̃/"
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
        "countability": "countable",
        "transcription": "/sɛʁ.vjɛt/"
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
        "countability": "countable",
        "transcription": "/mi.ʁwaʁ/"
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
        "countability": "countable",
        "transcription": "/li/"
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
        "countability": "countable",
        "transcription": "/ɔ.ʁɛ.je/"
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
        "countability": "countable",
        "transcription": "/ku.vɛʁ.tyʁ/"
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
        "countability": "countable",
        "transcription": "/aʁ.mwaʁ/"
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
        "countability": "countable",
        "transcription": "/e.ta.ʒɛʁ/"
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
        "countability": "countable",
        "transcription": "/by.ʁo/"
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
        "countability": "countable",
        "transcription": "/ʃɛz/"
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
        "countability": "countable",
        "transcription": "/fo.tœj/"
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
        "countability": "countable",
        "transcription": "/ka.na.pe/"
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
        "countability": "countable",
        "transcription": "/lɑ̃p/"
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
        "countability": "countable",
        "transcription": "/te.le.vi.zjɔ̃/"
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
        "countability": "countable",
        "transcription": "/ʁa.djo/"
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
        "countability": "countable",
        "transcription": "/te.le.fɔn/"
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
        "countability": "countable",
        "transcription": "/mɔ̃tʁ/"
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
        "countability": "countable",
        "transcription": "/sak/"
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
        "countability": "countable",
        "transcription": "/pɔʁ.tə.fœj/"
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
        "countability": "countable",
        "transcription": "/ly.nɛt/"
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
        "countability": "countable",
        "transcription": "/pa.ʁa.plɥi/"
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
        "countability": "countable",
        "transcription": "/ʃo.syʁ/"
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
        "countability": "countable",
        "transcription": "/bɔt/"
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
        "countability": "countable",
        "transcription": "/ʃo.sɛt/"
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
        "countability": "countable",
        "transcription": "/pɑ̃.ta.lɔ̃/"
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
        "countability": "countable",
        "transcription": "/dʒin/"
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
        "countability": "countable",
        "transcription": "/ʒyp/"
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
        "countability": "countable",
        "transcription": "/ʁɔb/"
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
        "countability": "countable",
        "transcription": "/ʃə.miz/"
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
        "countability": "countable",
        "transcription": "/pyl/"
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
        "countability": "countable",
        "transcription": "/mɑ̃.to/"
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
        "countability": "countable",
        "transcription": "/vɛst/"
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
        "countability": "countable",
        "transcription": "/kas.kɛt/"
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
        "countability": "countable",
        "transcription": "/bɔ.nɛ/"
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
        "countability": "countable",
        "transcription": "/ɡɑ̃/"
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
        "countability": "countable",
        "transcription": "/sɛ̃.tyʁ/"
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
        "countability": "countable",
        "transcription": "/ma.jo də bɛ̃/"
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
        "countability": "countable",
        "transcription": "/pi.ʒa.ma/"
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
        "countability": "countable",
        "transcription": "/va.liz/"
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
        "countability": "countable",
        "transcription": "/sak a do/"
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
        "countability": "countable",
        "transcription": "/pas.pɔʁ/"
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
        "countability": "countable",
        "transcription": "/bi.jɛ/"
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
        "countability": "countable",
        "transcription": "/kaʁt/"
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
        "countability": "countable",
        "transcription": "/plɑ̃/"
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
        "countability": "countable",
        "transcription": "/ɡaʁ/"
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
        "countability": "countable",
        "transcription": "/a.e.ʁɔ.pɔʁ/"
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
        "countability": "countable",
        "transcription": "/sta.sjɔ̃ də bys/"
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
        "countability": "countable",
        "transcription": "/a.ʁɛ də bys/"
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
        "countability": "countable",
        "transcription": "/ke/"
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
        "countability": "countable",
        "transcription": "/vwa/"
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
        "countability": "countable",
        "transcription": "/tʁɛ̃/"
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
        "countability": "countable",
        "transcription": "/bys/"
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
        "countability": "countable",
        "transcription": "/me.tʁo/"
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
        "countability": "countable",
        "transcription": "/tak.si/"
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
        "countability": "countable",
        "transcription": "/vi.tɛs/"
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
        "countability": "countable",
        "transcription": "/ba.ɡaʒ/"
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
        "countability": "countable",
        "transcription": "/vwa.jaʒ/"
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
        "countability": "countable",
        "transcription": "/va.kɑ̃s/"
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
        "countability": "countable",
        "transcription": "/de.paʁ/"
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
        "countability": "countable",
        "transcription": "/a.ʁi.ve/"
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
        "countability": "countable",
        "transcription": "/vɔl/"
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
        "countability": "countable",
        "transcription": "/ʁe.zɛʁ.va.sjɔ̃/"
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
        "countability": "countable",
        "transcription": "/ʃɑ̃.bʁə d‿o.tɛl/"
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
        "countability": "countable",
        "transcription": "/kle/"
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
        "countability": "countable",
        "transcription": "/ʁe.sɛp.sjɔ̃/"
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
        "countability": "countable",
        "transcription": "/de.ʒœ.ne/"
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
        "countability": "countable",
        "transcription": "/di.ne/"
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
        "countability": "countable",
        "transcription": "/su.pe/"
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
        "countability": "countable",
        "transcription": "/kɔ.la.sjɔ̃/"
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
        "countability": "countable",
        "transcription": "/ʁe.vɛj/"
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
]
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];

})();