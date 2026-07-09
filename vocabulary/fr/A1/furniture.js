(function() {
    const data = [
    {
        "word": "table",
        "level": "starter",
        "theme": "furniture",
        "article": "la",
        "gender": "feminine",
        "emoji": "🪑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "transcription": "/tabl/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "tabula"
        },
        "lang": "fr",
        "id": "fr_starter_furniture_001"
    },
    {
        "word": "livre",
        "level": "starter",
        "theme": "furniture",
        "article": "le",
        "gender": "masculine",
        "emoji": "📖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "livres",
        "definitions": [
            {
                "text": "Des pages avec du texte que l'on lit.",
                "examples": [
                    "Je lis un livre."
                ]
            }
        ],
        "transcription": "/livʁ/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "liber",
            "origin_meaning": "book"
        },
        "lang": "fr",
        "id": "fr_starter_furniture_002"
    },
    {
        "word": "stylo",
        "level": "starter",
        "theme": "furniture",
        "article": "le",
        "gender": "masculine",
        "emoji": "🖊️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "stylos",
        "definitions": [
            {
                "text": "Un objet utilisé pour écrire avec de l'encre.",
                "examples": [
                    "Puis-je emprunter ton stylo ?"
                ]
            }
        ],
        "transcription": "/sti.lo/",
        "lang": "fr",
        "id": "fr_starter_furniture_003"
    },
    {
        "word": "maison",
        "level": "starter",
        "theme": "furniture",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏡",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "transcription": "/mɛ.zɔ̃/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "mansio",
            "origin_meaning": "dwelling"
        },
        "lang": "fr",
        "id": "fr_starter_furniture_004"
    },
    {
        "word": "appartement",
        "level": "starter",
        "theme": "furniture",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏢",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "transcription": "/a.paʁ.tə.mɑ̃/",
        "lang": "fr",
        "id": "fr_starter_furniture_005"
    },
    {
        "word": "foyer",
        "level": "starter",
        "theme": "furniture",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏠",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "subtext": "à la maison, rentrer",
        "definitions": [
            {
                "text": "L'endroit où vous vivez.",
                "examples": [
                    "Je rentre à la maison à six heures."
                ]
            }
        ],
        "transcription": "/fwa.je/",
        "lang": "fr",
        "id": "fr_starter_furniture_006"
    },
    {
        "word": "pièce",
        "level": "starter",
        "theme": "furniture",
        "article": "la",
        "emoji": "🚪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pièces",
        "definitions": [
            {
                "text": "Une partie séparée d'un bâtiment avec des murs et une porte.",
                "examples": [
                    "L'appartement a trois pièces."
                ]
            }
        ],
        "transcription": "/pjɛs/",
        "lang": "fr",
        "id": "fr_starter_furniture_007"
    },
    {
        "word": "porte",
        "level": "starter",
        "theme": "furniture",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "portes",
        "definitions": [
            {
                "text": "Panneau pour entrer dans une pièce.",
                "examples": [
                    "Ferme la porte, s'il te plaît."
                ]
            }
        ],
        "transcription": "/pɔʁt/",
        "lang": "fr",
        "id": "fr_starter_furniture_008"
    },
    {
        "word": "fenêtre",
        "level": "starter",
        "theme": "furniture",
        "article": "la",
        "gender": "feminine",
        "emoji": "🪟",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "fenêtres",
        "definitions": [
            {
                "text": "Ouverture vitrée dans un mur.",
                "examples": [
                    "Ouvre la fenêtre."
                ]
            }
        ],
        "transcription": "/fə.nɛtʁ/",
        "lang": "fr",
        "id": "fr_starter_furniture_009"
    },
    {
        "word": "assiette",
        "level": "starter",
        "theme": "furniture",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🍽️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "assiettes",
        "definitions": [
            {
                "text": "Objet plat pour manger.",
                "examples": [
                    "Mets l'assiette sur la table."
                ]
            }
        ],
        "transcription": "/a.sjɛt/",
        "lang": "fr",
        "id": "fr_starter_furniture_010"
    },
    {
        "word": "tasse",
        "level": "starter",
        "theme": "furniture",
        "article": "la",
        "gender": "feminine",
        "emoji": "☕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "tasses",
        "definitions": [
            {
                "text": "Petit récipient avec une anse.",
                "examples": [
                    "Une tasse de café."
                ]
            }
        ],
        "transcription": "/tas/",
        "lang": "fr",
        "id": "fr_starter_furniture_011"
    },
    {
        "word": "verre",
        "level": "starter",
        "theme": "furniture",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥛",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "verres",
        "definitions": [
            {
                "text": "Récipient pour boire.",
                "examples": [
                    "Un verre d'eau."
                ]
            }
        ],
        "transcription": "/vɛʁ/",
        "lang": "fr",
        "id": "fr_starter_furniture_012"
    },
    {
        "word": "fourchette",
        "level": "starter",
        "theme": "furniture",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍴",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "fourchettes",
        "definitions": [
            {
                "text": "Ustensile avec des dents.",
                "examples": [
                    "Je mange avec une fourchette."
                ]
            }
        ],
        "transcription": "/fuʁ.ʃɛt/",
        "lang": "fr",
        "id": "fr_starter_furniture_013"
    },
    {
        "word": "cuillère",
        "level": "starter",
        "theme": "furniture",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥄",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cuillères",
        "definitions": [
            {
                "text": "Ustensile pour la soupe.",
                "examples": [
                    "Une cuillère de sucre."
                ]
            }
        ],
        "transcription": "/kɥi.jɛʁ/",
        "lang": "fr",
        "id": "fr_starter_furniture_014"
    },
    {
        "word": "couteau",
        "level": "starter",
        "theme": "furniture",
        "article": "le",
        "gender": "masculine",
        "emoji": "🔪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "couteaux",
        "definitions": [
            {
                "text": "Ustensile pour couper.",
                "examples": [
                    "Le couteau coupe bien."
                ]
            }
        ],
        "transcription": "/ku.to/",
        "lang": "fr",
        "id": "fr_starter_furniture_015"
    },
    {
        "word": "horloge",
        "level": "starter",
        "theme": "furniture",
        "article": "l'",
        "gender": "feminine",
        "emoji": "⏰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "horloges",
        "definitions": [
            {
                "text": "Objet pour donner l'heure.",
                "examples": [
                    "Regarde l'horloge."
                ]
            }
        ],
        "transcription": "/ɔʁ.lɔʒ/",
        "lang": "fr",
        "id": "fr_starter_furniture_016"
    },
    {
        "word": "salle de bain",
        "level": "starter",
        "theme": "furniture",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚿",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "salles de bain",
        "definitions": [
            {
                "text": "Pièce pour se laver.",
                "examples": [
                    "La salle de bain est petite."
                ]
            }
        ],
        "transcription": "/sal də bɛ̃/",
        "lang": "fr",
        "id": "fr_starter_furniture_017"
    },
    {
        "word": "chambre",
        "level": "starter",
        "theme": "furniture",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛏️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "chambres",
        "definitions": [
            {
                "text": "Pièce pour dormir.",
                "examples": [
                    "Ma chambre est propre."
                ]
            }
        ],
        "transcription": "/ʃɑ̃bʁ/",
        "lang": "fr",
        "id": "fr_starter_furniture_018"
    },
    {
        "word": "bouteille",
        "level": "starter",
        "theme": "furniture",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍼",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "bouteilles",
        "definitions": [
            {
                "text": "Récipient pour les liquides.",
                "examples": [
                    "Une bouteille d'eau."
                ]
            }
        ],
        "transcription": "/bu.tɛj/",
        "lang": "fr",
        "id": "fr_starter_furniture_019"
    },
    {
        "word": "boîte",
        "level": "starter",
        "theme": "furniture",
        "article": "la",
        "gender": "feminine",
        "emoji": "📦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "boîtes",
        "definitions": [
            {
                "text": "Objet creux pour ranger.",
                "examples": [
                    "Le chat est dans la boîte."
                ]
            }
        ],
        "transcription": "/bwat/",
        "lang": "fr",
        "id": "fr_starter_furniture_020"
    },
    {
        "word": "bain",
        "level": "starter",
        "theme": "furniture",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛁",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "bains",
        "definitions": [
            {
                "text": "Action de se laver dans l'eau.",
                "examples": [
                    "Prendre un bain chaud."
                ]
            }
        ],
        "transcription": "/bɛ̃/",
        "lang": "fr",
        "id": "fr_starter_furniture_021"
    },
    {
        "word": "crayon",
        "level": "starter",
        "theme": "furniture",
        "article": "le",
        "gender": "masculine",
        "emoji": "✏️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "crayons",
        "definitions": [
            {
                "text": "Objet pour écrire ou dessiner.",
                "examples": [
                    "Un crayon de couleur."
                ]
            }
        ],
        "transcription": "/kʁɛ.jɔ̃/",
        "lang": "fr",
        "id": "fr_starter_furniture_022"
    },
    {
        "word": "papier",
        "level": "starter",
        "theme": "furniture",
        "article": "le",
        "gender": "masculine",
        "emoji": "📄",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "papiers",
        "definitions": [
            {
                "text": "Matière en feuilles.",
                "examples": [
                    "Une feuille de papier."
                ]
            }
        ],
        "transcription": "/pa.pje/",
        "lang": "fr",
        "id": "fr_starter_furniture_023"
    },
    {
        "word": "étage",
        "level": "starter",
        "theme": "furniture",
        "article": "l'",
        "gender": "masculine",
        "emoji": "📶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "étages",
        "definitions": [
            {
                "text": "Niveau d'un bâtiment.",
                "examples": [
                    "J'habite au premier étage."
                ]
            }
        ],
        "transcription": "/e.taʒ/",
        "lang": "fr",
        "id": "fr_starter_furniture_024"
    },
    {
        "word": "entrée",
        "level": "starter",
        "theme": "furniture",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🚪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "entrées",
        "definitions": [
            {
                "text": "Lieu par où l'on entre.",
                "examples": [
                    "L'entrée de la maison."
                ]
            }
        ],
        "transcription": "/ɑ̃.tʁe/",
        "lang": "fr",
        "id": "fr_starter_furniture_025"
    },
    {
        "word": "sortie",
        "level": "starter",
        "theme": "furniture",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sorties",
        "definitions": [
            {
                "text": "Lieu par où l'on sort.",
                "examples": [
                    "La sortie est là."
                ]
            }
        ],
        "transcription": "/sɔʁ.ti/",
        "lang": "fr",
        "id": "fr_starter_furniture_026"
    },
    {
        "word": "escalier",
        "level": "starter",
        "theme": "furniture",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🪜",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "escaliers",
        "definitions": [
            {
                "text": "Suite de marches.",
                "examples": [
                    "Monter l'escalier."
                ]
            }
        ],
        "transcription": "/ɛs.ka.lje/",
        "lang": "fr",
        "id": "fr_starter_furniture_027"
    },
    {
        "word": "ascenseur",
        "level": "starter",
        "theme": "furniture",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🛗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "ascenseurs",
        "definitions": [
            {
                "text": "Appareil pour monter les étages.",
                "examples": [
                    "Prendre l'ascenseur."
                ]
            }
        ],
        "transcription": "/a.sɑ̃.sœʁ/",
        "lang": "fr",
        "id": "fr_starter_furniture_028"
    },
    {
        "word": "couloir",
        "level": "starter",
        "theme": "furniture",
        "article": "le",
        "gender": "masculine",
        "emoji": "👣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "couloirs",
        "definitions": [
            {
                "text": "Passage long et étroit.",
                "examples": [
                    "Le couloir est sombre."
                ]
            }
        ],
        "transcription": "/ku.lwaʁ/",
        "lang": "fr",
        "id": "fr_starter_furniture_029"
    },
    {
        "word": "murs",
        "level": "starter",
        "theme": "furniture",
        "article": "les",
        "gender": "masculine",
        "emoji": "🧱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "murs",
        "definitions": [
            {
                "text": "Parois d'une pièce.",
                "examples": [
                    "Des murs blancs."
                ]
            }
        ],
        "transcription": "/myʁ/",
        "lang": "fr",
        "id": "fr_starter_furniture_030"
    },
    {
        "word": "toit",
        "level": "starter",
        "theme": "furniture",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏠",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "toits",
        "definitions": [
            {
                "text": "Couverture d'une maison.",
                "examples": [
                    "Le chat est sur le toit."
                ]
            }
        ],
        "transcription": "/twa/",
        "lang": "fr",
        "id": "fr_starter_furniture_031"
    },
    {
        "word": "jardin",
        "level": "starter",
        "theme": "furniture",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏡",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "jardins",
        "definitions": [
            {
                "text": "Terrain avec des plantes.",
                "examples": [
                    "Travailler au jardin."
                ]
            }
        ],
        "transcription": "/ʒaʁ.dɛ̃/",
        "lang": "fr",
        "id": "fr_starter_furniture_032"
    },
    {
        "word": "garage",
        "level": "starter",
        "theme": "furniture",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "garages",
        "definitions": [
            {
                "text": "Lieu pour la voiture.",
                "examples": [
                    "La voiture est au garage."
                ]
            }
        ],
        "transcription": "/ɡa.ʁaʒ/",
        "lang": "fr",
        "id": "fr_starter_furniture_033"
    },
    {
        "word": "salon",
        "level": "starter",
        "theme": "furniture",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛋️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "salons",
        "definitions": [
            {
                "text": "Pièce de réception.",
                "examples": [
                    "Regarder la télé au salon."
                ]
            }
        ],
        "transcription": "/sa.lɔ̃/",
        "lang": "fr",
        "id": "fr_starter_furniture_034"
    },
    {
        "word": "food_drink",
        "level": "starter",
        "theme": "furniture",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cuisines",
        "definitions": [
            {
                "text": "Pièce pour cuisiner.",
                "examples": [
                    "La cuisine est moderne."
                ]
            }
        ],
        "transcription": "/kɥi.zin/",
        "lang": "fr",
        "id": "fr_starter_furniture_035"
    },
    {
        "word": "salle à manger",
        "level": "starter",
        "theme": "furniture",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍽️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "salles à manger",
        "definitions": [
            {
                "text": "Pièce pour manger.",
                "examples": [
                    "Dîner dans la salle à manger."
                ]
            }
        ],
        "transcription": "/sal a mɑ̃.ʒe/",
        "lang": "fr",
        "id": "fr_starter_furniture_036"
    },
    {
        "word": "toilette",
        "level": "starter",
        "theme": "furniture",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚽",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "toilettes",
        "definitions": [
            {
                "text": "Lieu pour les besoins naturels.",
                "examples": [
                    "Où sont les toilettes ?"
                ]
            }
        ],
        "transcription": "/twa.lɛt/",
        "lang": "fr",
        "id": "fr_starter_furniture_037"
    },
    {
        "word": "douche",
        "level": "starter",
        "theme": "furniture",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚿",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "douches",
        "definitions": [
            {
                "text": "Installation pour se laver debout.",
                "examples": [
                    "Prendre une douche."
                ]
            }
        ],
        "transcription": "/duʃ/",
        "lang": "fr",
        "id": "fr_starter_furniture_038"
    },
    {
        "word": "robinet",
        "level": "starter",
        "theme": "furniture",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "robinets",
        "definitions": [
            {
                "text": "Objet pour l'eau.",
                "examples": [
                    "Ferme le robinet."
                ]
            }
        ],
        "transcription": "/ʁɔ.bi.nɛ/",
        "lang": "fr",
        "id": "fr_starter_furniture_039"
    },
    {
        "word": "savon",
        "level": "starter",
        "theme": "furniture",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧼",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "savons",
        "definitions": [
            {
                "text": "Produit pour se laver.",
                "examples": [
                    "Se laver avec du savon."
                ]
            }
        ],
        "transcription": "/sa.vɔ̃/",
        "lang": "fr",
        "id": "fr_starter_furniture_040"
    },
    {
        "word": "serviette",
        "level": "starter",
        "theme": "furniture",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧺",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "serviettes",
        "definitions": [
            {
                "text": "Linge pour s'essuyer.",
                "examples": [
                    "Une serviette propre."
                ]
            }
        ],
        "transcription": "/sɛʁ.vjɛt/",
        "lang": "fr",
        "id": "fr_starter_furniture_041"
    },
    {
        "word": "miroir",
        "level": "starter",
        "theme": "furniture",
        "article": "le",
        "gender": "masculine",
        "emoji": "🪞",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "miroirs",
        "definitions": [
            {
                "text": "Glace pour se voir.",
                "examples": [
                    "Se regarder dans le miroir."
                ]
            }
        ],
        "transcription": "/mi.ʁwaʁ/",
        "lang": "fr",
        "id": "fr_starter_furniture_042"
    },
    {
        "word": "lit",
        "level": "starter",
        "theme": "furniture",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛌",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "lits",
        "definitions": [
            {
                "text": "Meuble pour dormir.",
                "examples": [
                    "Un lit confortable."
                ]
            }
        ],
        "transcription": "/li/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "lectus"
        },
        "lang": "fr",
        "id": "fr_starter_furniture_043"
    },
    {
        "word": "oreiller",
        "level": "starter",
        "theme": "furniture",
        "article": "l'",
        "gender": "masculine",
        "emoji": "☁️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "oreillers",
        "definitions": [
            {
                "text": "Coussin pour la tête.",
                "examples": [
                    "Un oreiller mou."
                ]
            }
        ],
        "transcription": "/ɔ.ʁɛ.je/",
        "lang": "fr",
        "id": "fr_starter_furniture_044"
    },
    {
        "word": "couverture",
        "level": "starter",
        "theme": "furniture",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "couvertures",
        "definitions": [
            {
                "text": "Linge chaud pour le lit.",
                "examples": [
                    "Une couverture en laine."
                ]
            }
        ],
        "transcription": "/ku.vɛʁ.tyʁ/",
        "lang": "fr",
        "id": "fr_starter_furniture_045"
    },
    {
        "word": "armoire",
        "level": "starter",
        "theme": "furniture",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🚪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "armoires",
        "definitions": [
            {
                "text": "Meuble pour les vêtements.",
                "examples": [
                    "Ranger l'armoire."
                ]
            }
        ],
        "transcription": "/aʁ.mwaʁ/",
        "lang": "fr",
        "id": "fr_starter_furniture_046"
    },
    {
        "word": "étagère",
        "level": "starter",
        "theme": "furniture",
        "article": "l'",
        "gender": "feminine",
        "emoji": "📶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "étagères",
        "definitions": [
            {
                "text": "Planche pour poser des livres.",
                "examples": [
                    "Une étagère pleine."
                ]
            }
        ],
        "transcription": "/e.ta.ʒɛʁ/",
        "lang": "fr",
        "id": "fr_starter_furniture_047"
    },
    {
        "word": "bureau",
        "level": "starter",
        "theme": "furniture",
        "article": "le",
        "gender": "masculine",
        "emoji": "🖥️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "bureaux",
        "definitions": [
            {
                "text": "Table de travail.",
                "examples": [
                    "Travailler à son bureau."
                ]
            }
        ],
        "transcription": "/by.ʁo/",
        "lang": "fr",
        "id": "fr_starter_furniture_048"
    },
    {
        "word": "chaise",
        "level": "starter",
        "theme": "furniture",
        "article": "la",
        "gender": "feminine",
        "emoji": "🪑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "chaises",
        "definitions": [
            {
                "text": "Siège avec dossier.",
                "examples": [
                    "Une chaise en bois."
                ]
            }
        ],
        "transcription": "/ʃɛz/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "cathedra"
        },
        "lang": "fr",
        "id": "fr_starter_furniture_049"
    },
    {
        "word": "fauteuil",
        "level": "starter",
        "theme": "furniture",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛋️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "fauteuils",
        "definitions": [
            {
                "text": "Siège confortable.",
                "examples": [
                    "S'asseoir dans un fauteuil."
                ]
            }
        ],
        "transcription": "/fo.tœj/",
        "lang": "fr",
        "id": "fr_starter_furniture_050"
    },
    {
        "word": "canapé",
        "level": "starter",
        "theme": "furniture",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛋️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "canapés",
        "definitions": [
            {
                "text": "Grand siège pour plusieurs.",
                "examples": [
                    "Dormir sur le canapé."
                ]
            }
        ],
        "transcription": "/ka.na.pe/",
        "lang": "fr",
        "id": "fr_starter_furniture_051"
    },
    {
        "word": "lampe",
        "level": "starter",
        "theme": "furniture",
        "article": "la",
        "gender": "feminine",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "lampes",
        "definitions": [
            {
                "text": "Objet lumineux.",
                "examples": [
                    "Allume la lampe."
                ]
            }
        ],
        "transcription": "/lɑ̃p/",
        "lang": "fr",
        "id": "fr_starter_furniture_052"
    },
    {
        "word": "sac",
        "level": "starter",
        "theme": "furniture",
        "article": "le",
        "gender": "masculine",
        "emoji": "👜",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sacs",
        "definitions": [
            {
                "text": "Contenant souple.",
                "examples": [
                    "Un sac à main."
                ]
            },
            {
                "word": "mallette",
                "image": "images/vocabulary/actions/to go to work.png",
                "level": "starter",
                "theme": "furniture_objects",
                "emoji": "💼",
                "form": "noun",
                "classification": "regular",
                "countability": "countable",
                "definitions": [
                    {
                        "text": "Un étui plat utilisé pour transporter des papiers et des documents.",
                        "examples": [
                            "Il transporte ses documents dans une mallette."
                        ]
                    }
                ],
                "transcription": "/ma.lɛt/"
            }
        ],
        "transcription": "/sak/",
        "lang": "fr",
        "id": "fr_starter_furniture_053"
    },
    {
        "word": "grille-pain",
        "level": "starter",
        "theme": "household_items",
        "emoji": "🍞",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "masculine",
        "article": "le",
        "plural": "grille-pains",
        "definitions": [
            {
                "text": "Un appareil électrique pour griller le pain.",
                "examples": [
                    "J'utilise le grille-pain pour le petit déjeuner.",
                    "Le grille-pain est sur la table de la cuisine."
                ]
            }
        ],
        "transcription": "ɡʁij pɛ̃",
        "lang": "fr",
        "id": "fr_starter_household_items_001"
    },
    {
        "word": "four à micro-ondes",
        "level": "starter",
        "theme": "household_items",
        "emoji": "📟",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "masculine",
        "article": "le",
        "plural": "fours à micro-ondes",
        "definitions": [
            {
                "text": "Un four qui utilise des ondes pour chauffer les aliments rapidement.",
                "examples": [
                    "Je chauffe le lait au micro-ondes.",
                    "Le micro-ondes est très utile dans la cuisine."
                ]
            }
        ],
        "transcription": "fuʁ a mikʁo ɔ̃d",
        "lang": "fr",
        "id": "fr_starter_household_items_002"
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();