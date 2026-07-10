(function() {
    const data = [
    {
        "word": "fruit",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍎",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
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
        "id": "fr_starter_food_drink_001",
        "lang": "fr"
    },
    {
        "word": "légume",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "id": "fr_starter_food_drink_002",
        "lang": "fr"
    },
    {
        "word": "croissant",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "id": "fr_starter_food_drink_003",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "pomme",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "baseWord": "pomme",
        "emoji": "🍎",
        "numberPlural": "4 pomme",
        "answer": "quatre pommes",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "poma",
            "origin_meaning": "fruit"
        },
        "id": "fr_starter_food_drink_004",
        "lang": "fr"
    },
    {
        "word": "pain",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥖",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "panis",
            "origin_meaning": "bread"
        },
        "id": "fr_starter_food_drink_005",
        "lang": "fr"
    },
    {
        "word": "oeuf",
        "level": "starter",
        "theme": "food_drink",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🥚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "id": "fr_starter_food_drink_006",
        "lang": "fr"
    },
    {
        "word": "lait",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥛",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
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
        "transcription": "lɛ",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "lac",
            "origin_meaning": "milk"
        },
        "id": "fr_starter_food_drink_007",
        "lang": "fr"
    },
    {
        "word": "riz",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍚",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
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
        "transcription": "ri",
        "id": "fr_starter_food_drink_008",
        "lang": "fr"
    },
    {
        "word": "viande",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥩",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
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
        "transcription": "vjɑ̃d",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "vivenda",
            "origin_meaning": "things to live on"
        },
        "id": "fr_starter_food_drink_009",
        "lang": "fr"
    },
    {
        "word": "nourriture",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "emoji": "🍲",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "nourritures",
        "definitions": [
            {
                "text": "Choses que les gens mangent.",
                "examples": [
                    "La nourriture est bonne ici."
                ]
            }
        ],
        "transcription": "nu.ʁi.tyʁ",
        "id": "fr_starter_food_drink_010",
        "lang": "fr"
    },
    {
        "word": "thé",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍵",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
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
        "transcription": "te",
        "id": "fr_starter_food_drink_011",
        "lang": "fr"
    },
    {
        "word": "jus",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧃",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
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
        "transcription": "ʒy",
        "id": "fr_starter_food_drink_012",
        "lang": "fr"
    },
    {
        "word": "eau",
        "level": "starter",
        "theme": "food_drink",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🚰",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
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
        "transcription": "o",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "aqua",
            "origin_meaning": "water"
        },
        "id": "fr_starter_food_drink_013",
        "lang": "fr"
    },
    {
        "word": "bière",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍺",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
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
        "transcription": "bjɛʁ",
        "id": "fr_starter_food_drink_014",
        "lang": "fr"
    },
    {
        "word": "vin",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍷",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "plural": "vins",
        "definitions": [
            {
                "text": "Une boisson alcoolisée faite de raisins.",
                "examples": [
                    "Il boit du vin rouge."
                ]
            }
        ],
        "transcription": "vɛ̃",
        "id": "fr_starter_food_drink_015",
        "lang": "fr"
    },
    {
        "word": "poulet",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "poulets",
        "definitions": [
            {
                "text": "Viande de poule.",
                "examples": [
                    "J'aime le poulet."
                ]
            }
        ],
        "transcription": "pu.lɛ",
        "id": "fr_starter_food_drink_016",
        "lang": "fr"
    },
    {
        "word": "sucre",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍚",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "plural": "sucres",
        "definitions": [
            {
                "text": "Poudre douce pour les gâteaux.",
                "examples": [
                    "Pas de sucre dans mon thé."
                ]
            }
        ],
        "transcription": "sykʁ",
        "id": "fr_starter_food_drink_017",
        "lang": "fr"
    },
    {
        "word": "salade",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "salades",
        "definitions": [
            {
                "text": "Plat de légumes froids.",
                "examples": [
                    "Une petite salade, s'il vous plaît."
                ]
            }
        ],
        "transcription": "sa.lad",
        "id": "fr_starter_food_drink_018",
        "lang": "fr"
    },
    {
        "word": "boeuf",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "boeufs",
        "definitions": [
            {
                "text": "Viande de vache.",
                "examples": [
                    "Je mange du boeuf."
                ]
            }
        ],
        "transcription": "bœf",
        "id": "fr_starter_food_drink_019",
        "lang": "fr"
    },
    {
        "word": "porc",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "porcs",
        "definitions": [
            {
                "text": "Viande de cochon.",
                "examples": [
                    "Elle ne mange pas de porc."
                ]
            }
        ],
        "transcription": "pɔʁ",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "porcus"
        },
        "id": "fr_starter_food_drink_020",
        "lang": "fr"
    },
    {
        "word": "pomme de terre",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥔",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pommes de terre",
        "definitions": [
            {
                "text": "Un légume qui pousse sous terre.",
                "examples": [
                    "Des frites avec des pommes de terre."
                ]
            }
        ],
        "transcription": "pɔm də tɛʁ",
        "id": "fr_starter_food_drink_021",
        "lang": "fr"
    },
    {
        "word": "tomate",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "tomates",
        "definitions": [
            {
                "text": "Un fruit rouge mangé comme légume.",
                "examples": [
                    "La tomate est mûre."
                ]
            }
        ],
        "transcription": "tɔ.mat",
        "id": "fr_starter_food_drink_022",
        "lang": "fr"
    },
    {
        "word": "oignon",
        "level": "starter",
        "theme": "food_drink",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🧅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "oignons",
        "definitions": [
            {
                "text": "Légume fort qui fait pleurer.",
                "examples": [
                    "Je coupe un oignon."
                ]
            }
        ],
        "transcription": "ɔ.ɲɔ̃",
        "id": "fr_starter_food_drink_023",
        "lang": "fr"
    },
    {
        "word": "carotte",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "carottes",
        "definitions": [
            {
                "text": "Légume orange allongé.",
                "examples": [
                    "Le lapin mange une carotte."
                ]
            }
        ],
        "transcription": "ka.ʁɔt",
        "id": "fr_starter_food_drink_024",
        "lang": "fr"
    },
    {
        "word": "soupe",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥣",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "plural": "soupes",
        "definitions": [
            {
                "text": "Plat liquide chaud.",
                "examples": [
                    "La soupe est bonne."
                ]
            }
        ],
        "transcription": "sup",
        "id": "fr_starter_food_drink_025",
        "lang": "fr"
    },
    {
        "word": "gâteau",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "gâteaux",
        "definitions": [
            {
                "text": "Pâtisserie sucrée.",
                "examples": [
                    "Un gâteau au chocolat."
                ]
            }
        ],
        "transcription": "ɡɑ.to",
        "id": "fr_starter_food_drink_026",
        "lang": "fr"
    },
    {
        "word": "chocolat",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍫",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "plural": "chocolats",
        "definitions": [
            {
                "text": "Nourriture sucrée marron.",
                "examples": [
                    "J'adore le chocolat."
                ]
            }
        ],
        "transcription": "ʃɔ.kɔ.la",
        "id": "fr_starter_food_drink_027",
        "lang": "fr"
    },
    {
        "word": "glace",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍦",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "plural": "glaces",
        "definitions": [
            {
                "text": "Nourriture froide et sucrée.",
                "examples": [
                    "Une glace à la vanille."
                ]
            }
        ],
        "transcription": "ɡlas",
        "id": "fr_starter_food_drink_028",
        "lang": "fr"
    },
    {
        "word": "citron",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍋",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "citrons",
        "definitions": [
            {
                "text": "Un fruit jaune acide.",
                "examples": [
                    "Du citron dans mon thé."
                ]
            }
        ],
        "transcription": "si.tʁɔ̃",
        "id": "fr_starter_food_drink_029",
        "lang": "fr"
    },
    {
        "word": "orange",
        "level": "starter",
        "theme": "food_drink",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🍊",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "oranges",
        "definitions": [
            {
                "text": "Un fruit orange et rond.",
                "examples": [
                    "Je mange une orange."
                ]
            }
        ],
        "transcription": "ɔ.ʁɑ̃ʒ",
        "id": "fr_starter_food_drink_030",
        "lang": "fr"
    },
    {
        "word": "fraise",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "fraises",
        "definitions": [
            {
                "text": "Un petit fruit rouge sucré.",
                "examples": [
                    "J'aime les fraises."
                ]
            }
        ],
        "transcription": "fʁɛz",
        "id": "fr_starter_food_drink_031",
        "lang": "fr"
    },
    {
        "word": "raisin",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍇",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "raisins",
        "definitions": [
            {
                "text": "Petits fruits pour faire le vin.",
                "examples": [
                    "Une grappe de raisin."
                ]
            }
        ],
        "transcription": "ʁɛ.zɛ̃",
        "id": "fr_starter_food_drink_032",
        "lang": "fr"
    },
    {
        "word": "ail",
        "level": "starter",
        "theme": "food_drink",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🧄",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "plural": "aulx",
        "definitions": [
            {
                "text": "Plante potagère à forte odeur.",
                "examples": [
                    "Je cuisine avec de l'ail."
                ]
            }
        ],
        "transcription": "aj",
        "id": "fr_starter_food_drink_033",
        "lang": "fr"
    },
    {
        "word": "beurre",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧈",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "plural": "beurres",
        "definitions": [
            {
                "text": "Produit gras du lait.",
                "examples": [
                    "Du beurre sur le pain."
                ]
            }
        ],
        "transcription": "bœʁ",
        "id": "fr_starter_food_drink_034",
        "lang": "fr"
    },
    {
        "word": "fromage",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧀",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "plural": "fromages",
        "definitions": [
            {
                "text": "Produit fait avec du lait caillé.",
                "examples": [
                    "J'aime le fromage français."
                ]
            }
        ],
        "transcription": "fʁɔ.maʒ",
        "id": "fr_starter_food_drink_035",
        "lang": "fr"
    },
    {
        "word": "sel",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧂",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "plural": "",
        "definitions": [
            {
                "text": "Poudre blanche pour saler.",
                "examples": [
                    "Un peu de sel."
                ]
            }
        ],
        "transcription": "sɛl",
        "id": "fr_starter_food_drink_036",
        "lang": "fr"
    },
    {
        "word": "poivre",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧂",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "plural": "",
        "definitions": [
            {
                "text": "Poudre noire pour relever le goût.",
                "examples": [
                    "Mets du poivre."
                ]
            }
        ],
        "transcription": "pwavʁ",
        "id": "fr_starter_food_drink_037",
        "lang": "fr"
    },
    {
        "word": "huile",
        "level": "starter",
        "theme": "food_drink",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🏺",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "huiles",
        "definitions": [
            {
                "text": "Liquide gras pour cuisiner.",
                "examples": [
                    "De l'huile d'olive."
                ]
            }
        ],
        "transcription": "ɥil",
        "id": "fr_starter_food_drink_038",
        "lang": "fr"
    },
    {
        "word": "vinaigre",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏺",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "vinaigres",
        "definitions": [
            {
                "text": "Liquide acide pour salade.",
                "examples": [
                    "Sel, poivre et vinaigre."
                ]
            }
        ],
        "transcription": "vi.nɛɡʁ",
        "id": "fr_starter_food_drink_039",
        "lang": "fr"
    },
    {
        "word": "petit-déjeuner",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "☕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "petits-déjeuners",
        "definitions": [
            {
                "text": "Repas du matin.",
                "examples": [
                    "Je prends mon petit-déjeuner."
                ]
            }
        ],
        "transcription": "pə.ti de.ʒœ.ne",
        "id": "fr_starter_food_drink_040",
        "lang": "fr"
    },
    {
        "word": "goûter",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "goûters",
        "definitions": [
            {
                "text": "Petit repas l'après-midi.",
                "examples": [
                    "Les enfants prennent le goûter."
                ]
            }
        ],
        "transcription": "ɡu.te",
        "id": "fr_starter_food_drink_041",
        "lang": "fr"
    },
    {
        "word": "déjeuner",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍽️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "déjeuners",
        "definitions": [
            {
                "text": "Repas du midi.",
                "examples": [
                    "Un déjeuner léger."
                ]
            }
        ],
        "transcription": "de.ʒœ.ne",
        "id": "fr_starter_food_drink_042",
        "lang": "fr"
    },
    {
        "word": "dîner",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍷",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "dîners",
        "definitions": [
            {
                "text": "Repas du soir.",
                "examples": [
                    "Un dîner entre amis."
                ]
            }
        ],
        "transcription": "di.ne",
        "id": "fr_starter_food_drink_043",
        "lang": "fr"
    },
    {
        "word": "souper",
        "level": "starter",
        "theme": "food_drink",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "soupers",
        "definitions": [
            {
                "text": "Dernier repas du soir.",
                "examples": [
                    "Prendre le souper."
                ]
            }
        ],
        "transcription": "su.pe",
        "id": "fr_starter_food_drink_044",
        "lang": "fr"
    },
    {
        "word": "collation",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "collations",
        "definitions": [
            {
                "text": "Petit repas.",
                "examples": [
                    "Prendre une collation."
                ]
            }
        ],
        "transcription": "kɔ.la.sjɔ̃",
        "id": "fr_starter_food_drink_045",
        "lang": "fr"
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();