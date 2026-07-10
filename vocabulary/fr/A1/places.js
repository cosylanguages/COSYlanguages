(function() {
    const data = [
    {
        "word": "jardin",
        "level": "starter",
        "theme": "places",
        "emoji": "🌳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Un jardin public ou un parc.",
                "examples": []
            }
        ],
        "id": "fr_starter_places_001",
        "lang": "fr",
        "transcription": ""
    },
    {
        "word": "parc",
        "level": "starter",
        "theme": "places",
        "article": "le",
        "gender": "masculine",
        "emoji": "🌳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "parcs",
        "definitions": [
            {
                "text": "Un jardin public où les gens vont marcher et se détendre.",
                "examples": [
                    "Marchons dans le parc."
                ]
            }
        ],
        "transcription": "paʁk",
        "id": "fr_starter_places_002",
        "lang": "fr"
    },
    {
        "word": "école",
        "level": "starter",
        "theme": "places",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "écoles",
        "definitions": [
            {
                "text": "Un endroit où les enfants vont pour apprendre.",
                "examples": [
                    "Mon école est près de ma maison."
                ]
            }
        ],
        "transcription": "e.kɔl",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "schola"
        },
        "id": "fr_starter_places_003",
        "lang": "fr"
    },
    {
        "word": "loyer",
        "level": "starter",
        "theme": "travel",
        "article": "le",
        "emoji": "🏠",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "loyers",
        "definitions": [
            {
                "text": "L'argent payé pour utiliser une maison ou un appartement qui appartient à quelqu'un d'autre.",
                "examples": [
                    "Le loyer est cher ici."
                ]
            }
        ],
        "transcription": "lwa.je",
        "id": "fr_starter_places_004",
        "lang": "fr"
    },
    {
        "word": "voisin",
        "level": "starter",
        "theme": "places",
        "article": "le",
        "emoji": "🏠",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "voisins",
        "definitions": [
            {
                "text": "Une personne qui vit à côté de vous ou près de vous.",
                "examples": [
                    "Mes voisins sont très gentils."
                ]
            }
        ],
        "transcription": "vwa.zɛ̃",
        "id": "fr_starter_places_005",
        "lang": "fr"
    },
    {
        "word": "hôpital",
        "level": "starter",
        "theme": "places",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏥",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "hôpitaux",
        "definitions": [
            {
                "text": "Lieu de soins médicaux.",
                "examples": [
                    "Il est à l'hôpital."
                ]
            }
        ],
        "transcription": "o.pi.tal",
        "id": "fr_starter_places_006",
        "lang": "fr"
    },
    {
        "word": "restaurant",
        "level": "starter",
        "theme": "places",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍴",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "restaurants",
        "definitions": [
            {
                "text": "Lieu pour manger dehors.",
                "examples": [
                    "Allons au restaurant."
                ]
            }
        ],
        "transcription": "ʁɛs.tɔ.ʁɑ̃",
        "id": "fr_starter_places_007",
        "lang": "fr"
    },
    {
        "word": "supermarché",
        "level": "starter",
        "theme": "places",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "supermarchés",
        "definitions": [
            {
                "text": "Grand magasin d'alimentation.",
                "examples": [
                    "Je fais les courses au supermarché."
                ]
            }
        ],
        "transcription": "sy.pɛʁ.maʁ.ʃe",
        "id": "fr_starter_places_008",
        "lang": "fr"
    },
    {
        "word": "pharmacie",
        "level": "starter",
        "theme": "places",
        "article": "la",
        "gender": "feminine",
        "emoji": "💊",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pharmacies",
        "definitions": [
            {
                "text": "Lieu pour acheter des médicaments.",
                "examples": [
                    "Où est la pharmacie ?"
                ]
            }
        ],
        "transcription": "faʁ.ma.si",
        "id": "fr_starter_places_009",
        "lang": "fr"
    },
    {
        "word": "immeuble",
        "level": "starter",
        "theme": "places",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏢",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "immeubles",
        "definitions": [
            {
                "text": "Grand bâtiment urbain.",
                "examples": [
                    "Un bel immeuble."
                ]
            }
        ],
        "transcription": "i.mœbl",
        "id": "fr_starter_places_010",
        "lang": "fr"
    },
    {
        "word": "café",
        "level": "starter",
        "theme": "places",
        "article": "le",
        "gender": "masculine",
        "emoji": "☕",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "plural": "cafés",
        "definitions": [
            {
                "text": "Lieu où l'on boit du café.",
                "examples": [
                    "Allons au café."
                ]
            }
        ],
        "transcription": "ka.fe",
        "id": "fr_starter_places_011",
        "lang": "fr"
    },
    {
        "word": "centre",
        "level": "starter",
        "theme": "places",
        "article": "le",
        "gender": "masculine",
        "emoji": "📍",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "centres",
        "definitions": [
            {
                "text": "Le milieu d'un lieu.",
                "examples": [
                    "Le centre-ville."
                ]
            }
        ],
        "transcription": "sɑ̃tʁ",
        "id": "fr_starter_places_012",
        "lang": "fr"
    },
    {
        "word": "quartier",
        "level": "starter",
        "theme": "places",
        "article": "le",
        "gender": "masculine",
        "emoji": "📍",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "quartiers",
        "definitions": [
            {
                "text": "Partie d'une ville.",
                "examples": [
                    "C'est mon quartier."
                ]
            }
        ],
        "transcription": "kaʁ.tje",
        "id": "fr_starter_places_013",
        "lang": "fr"
    },
    {
        "word": "là",
        "level": "starter",
        "theme": "prepositions_place",
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
        "transcription": "la",
        "id": "fr_starter_places_014",
        "lang": "fr"
    },
    {
        "word": "ville",
        "level": "starter",
        "theme": "places",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏙️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "villes",
        "definitions": [
            {
                "text": "Lieu avec beaucoup de maisons.",
                "examples": [
                    "Paris est une grande ville."
                ]
            }
        ],
        "transcription": "vil",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "villa"
        },
        "id": "fr_starter_places_015",
        "lang": "fr"
    },
    {
        "word": "pays",
        "level": "starter",
        "theme": "places",
        "article": "le",
        "gender": "masculine",
        "emoji": "🗺️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pays",
        "definitions": [
            {
                "text": "Territoire d'une nation.",
                "examples": [
                    "La France est un beau pays."
                ]
            }
        ],
        "transcription": "pe.i",
        "id": "fr_starter_places_016",
        "lang": "fr"
    },
    {
        "word": "cafétéria",
        "level": "starter",
        "theme": "places",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍴",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cafétérias",
        "definitions": [
            {
                "text": "Petit restaurant libre-service.",
                "examples": [
                    "On mange à la cafétéria."
                ]
            }
        ],
        "transcription": "ka.fe.te.ʁja",
        "id": "fr_starter_places_017",
        "lang": "fr"
    },
    {
        "word": "rue",
        "level": "starter",
        "theme": "places",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛣️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "rues",
        "definitions": [
            {
                "text": "Voie de circulation.",
                "examples": [
                    "Quelle rue ?"
                ]
            }
        ],
        "transcription": "ʁy",
        "id": "fr_starter_places_018",
        "lang": "fr"
    },
    {
        "word": "chemin",
        "level": "starter",
        "theme": "places",
        "article": "le",
        "gender": "masculine",
        "emoji": "👣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "chemins",
        "definitions": [
            {
                "text": "Petite voie.",
                "examples": [
                    "Le chemin est long."
                ]
            }
        ],
        "transcription": "ʃə.mɛ̃",
        "id": "fr_starter_places_019",
        "lang": "fr"
    },
    {
        "word": "route",
        "level": "starter",
        "theme": "places",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛣️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "routes",
        "definitions": [
            {
                "text": "Voie entre deux villes.",
                "examples": [
                    "La route est belle."
                ]
            }
        ],
        "transcription": "ʁut",
        "id": "fr_starter_places_020",
        "lang": "fr"
    },
    {
        "word": "place",
        "level": "starter",
        "theme": "places",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏙️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "places",
        "definitions": [
            {
                "text": "Espace public ouvert.",
                "examples": [
                    "La place du village."
                ]
            }
        ],
        "transcription": "plas",
        "id": "fr_starter_places_021",
        "lang": "fr"
    },
    {
        "word": "village",
        "level": "starter",
        "theme": "places",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏘️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "villages",
        "definitions": [
            {
                "text": "Petite ville.",
                "examples": [
                    "C'est un beau village."
                ]
            }
        ],
        "transcription": "vi.laʒ",
        "id": "fr_starter_places_022",
        "lang": "fr"
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();