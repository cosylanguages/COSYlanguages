(function() {
    const data = [
    {
        "word": "pied",
        "level": "starter",
        "theme": "body",
        "article": "le",
        "gender": "masculine",
        "numberPlural": "2 pied",
        "answer": "deux pieds",
        "emoji": "🦶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "pes",
            "origin_meaning": "foot"
        },
        "lang": "fr",
        "id": "fr_starter_body_001"
    },
    {
        "word": "tête",
        "level": "starter",
        "theme": "body",
        "article": "la",
        "gender": "feminine",
        "emoji": "👤",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "transcription": "/tɛt/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "testa",
            "origin_meaning": "pot, shell"
        },
        "lang": "fr",
        "id": "fr_starter_body_002"
    },
    {
        "word": "main",
        "level": "starter",
        "theme": "body",
        "article": "la",
        "gender": "feminine",
        "emoji": "✋",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "transcription": "/mɛ̃/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "manus",
            "origin_meaning": "hand"
        },
        "lang": "fr",
        "id": "fr_starter_body_003"
    },
    {
        "word": "jambe",
        "level": "starter",
        "theme": "body",
        "article": "la",
        "gender": "feminine",
        "emoji": "🦵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "transcription": "/ʒɑ̃b/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "gamba",
            "origin_meaning": "hoof, leg"
        },
        "lang": "fr",
        "id": "fr_starter_body_004"
    },
    {
        "word": "oeil",
        "level": "starter",
        "theme": "body",
        "article": "l'",
        "gender": "masculine",
        "emoji": "👁️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "transcription": "/œj/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "oculus",
            "origin_meaning": "eye"
        },
        "lang": "fr",
        "id": "fr_starter_body_005"
    },
    {
        "word": "nez",
        "level": "starter",
        "theme": "body",
        "article": "le",
        "gender": "masculine",
        "emoji": "👃",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "nez",
        "definitions": [
            {
                "text": "La partie du visage pour sentir les odeurs.",
                "examples": [
                    "Il a un petit nez."
                ]
            }
        ],
        "transcription": "/ne/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "nasus",
            "origin_meaning": "nose"
        },
        "lang": "fr",
        "id": "fr_starter_body_006"
    },
    {
        "word": "bouche",
        "level": "starter",
        "theme": "body",
        "article": "la",
        "gender": "feminine",
        "emoji": "👄",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "transcription": "/buʃ/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "bucca",
            "origin_meaning": "cheek, mouth"
        },
        "lang": "fr",
        "id": "fr_starter_body_007"
    },
    {
        "word": "oreille",
        "level": "starter",
        "theme": "body",
        "article": "l'",
        "gender": "feminine",
        "emoji": "👂",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "transcription": "/ɔ.ʁɛj/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "auricula",
            "origin_meaning": "ear"
        },
        "lang": "fr",
        "id": "fr_starter_body_008"
    },
    {
        "word": "dos",
        "level": "starter",
        "theme": "body",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "transcription": "/do/",
        "lang": "fr",
        "id": "fr_starter_body_009"
    },
    {
        "word": "bras",
        "level": "starter",
        "theme": "body",
        "article": "le",
        "gender": "masculine",
        "emoji": "💪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "transcription": "/bʁa/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "bracchium",
            "origin_meaning": "arm"
        },
        "lang": "fr",
        "id": "fr_starter_body_010"
    },
    {
        "word": "cou",
        "level": "starter",
        "theme": "body",
        "article": "le",
        "gender": "masculine",
        "emoji": "🦒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cous",
        "definitions": [
            {
                "text": "Partie entre la tête et le corps.",
                "examples": [
                    "J'ai mal au cou."
                ]
            }
        ],
        "transcription": "/ku/",
        "lang": "fr",
        "id": "fr_starter_body_011"
    },
    {
        "word": "épaule",
        "level": "starter",
        "theme": "body",
        "article": "l'",
        "gender": "feminine",
        "emoji": "👤",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "épaules",
        "definitions": [
            {
                "text": "Partie du corps entre le cou et le bras.",
                "examples": [
                    "Mon épaule me fait mal."
                ]
            }
        ],
        "transcription": "/e.pol/",
        "lang": "fr",
        "id": "fr_starter_body_012"
    },
    {
        "word": "doigt",
        "level": "starter",
        "theme": "body",
        "article": "le",
        "gender": "masculine",
        "emoji": "☝️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "doigts",
        "definitions": [
            {
                "text": "Une des cinq parties de la main.",
                "examples": [
                    "J'ai dix doigts."
                ]
            }
        ],
        "transcription": "/dwa/",
        "lang": "fr",
        "id": "fr_starter_body_013"
    },
    {
        "word": "orteil",
        "level": "starter",
        "theme": "body",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🦶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "orteils",
        "definitions": [
            {
                "text": "Un doigt de pied.",
                "examples": [
                    "J'ai mal à l'orteil."
                ]
            }
        ],
        "transcription": "/ɔʁ.tɛj/",
        "lang": "fr",
        "id": "fr_starter_body_014"
    },
    {
        "word": "estomac",
        "level": "starter",
        "theme": "body",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🤰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "estomacs",
        "definitions": [
            {
                "text": "Partie du corps pour digérer.",
                "examples": [
                    "J'ai mal à l'estomac."
                ]
            }
        ],
        "transcription": "/ɛs.tɔ.ma/",
        "lang": "fr",
        "id": "fr_starter_body_015"
    },
    {
        "word": "genou",
        "level": "starter",
        "theme": "body",
        "article": "le",
        "gender": "masculine",
        "emoji": "🦵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "genoux",
        "definitions": [
            {
                "text": "Partie au milieu de la jambe.",
                "examples": [
                    "Je tombe sur le genou."
                ]
            }
        ],
        "transcription": "/ʒə.nu/",
        "lang": "fr",
        "id": "fr_starter_body_016"
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();