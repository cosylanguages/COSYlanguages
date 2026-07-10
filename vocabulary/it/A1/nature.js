(function() {
    const lang = "it";
    const data = [
    {
        "word": "sole",
        "level": "starter",
        "theme": "nature",
        "article": "il",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "sole caldo, sole del mattino",
        "definitions": [
            {
                "text": "La stella che dà luce e calore durante il giorno.",
                "examples": [
                    "Il sole è molto forte oggi."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈsole",
        "synonyms": [],
        "antonyms": [],
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "sol",
            "origin_meaning": "sun"
        },
        "lang": "it",
        "id": "it_starter_nature_001"
    },
    {
        "word": "pioggia",
        "level": "starter",
        "theme": "nature",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌧️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "forte pioggia, stivali da pioggia",
        "definitions": [
            {
                "text": "Acqua che cade dalle nuvole in gocce.",
                "examples": [
                    "C'è molta pioggia in autunno."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈpjɔddʒa",
        "synonyms": [],
        "antonyms": [],
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "pluvia"
        },
        "lang": "it",
        "id": "it_starter_nature_002"
    },
    {
        "word": "vento",
        "level": "starter",
        "theme": "nature",
        "article": "il",
        "gender": "masculine",
        "emoji": "💨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "vento forte, vento freddo",
        "definitions": [
            {
                "text": "Aria che si muove, a volte fortemente.",
                "examples": [
                    "Il vento è molto forte oggi."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "ˈvɛnto",
        "synonyms": [],
        "antonyms": [],
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "ventus"
        },
        "lang": "it",
        "id": "it_starter_nature_003"
    },
    {
        "word": "primavera",
        "level": "starter",
        "theme": "nature",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "primavere",
        "definitions": [
            {
                "text": "Stagione dopo l'inverno.",
                "examples": [
                    "In primavera i fiori sbocciano."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "primaˈvɛra",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_nature_004"
    },
    {
        "word": "estate",
        "level": "starter",
        "theme": "nature",
        "article": "l'",
        "gender": "feminine",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "estati",
        "definitions": [
            {
                "text": "La stagione più calda.",
                "examples": [
                    "Amo l'estate."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "esˈtate",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_nature_005"
    },
    {
        "word": "autunno",
        "level": "starter",
        "theme": "nature",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🍂",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "autunni",
        "definitions": [
            {
                "text": "Stagione quando cadono le foglie.",
                "examples": [
                    "L'autunno è bello."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "auˈtunno",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_nature_006"
    },
    {
        "word": "inverno",
        "level": "starter",
        "theme": "nature",
        "article": "l'",
        "gender": "masculine",
        "emoji": "❄️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "inverni",
        "definitions": [
            {
                "text": "La stagione più fredda.",
                "examples": [
                    "Nevica in inverno."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "inˈvɛrno",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_nature_007"
    },
    {
        "word": "ombrello",
        "level": "starter",
        "theme": "nature",
        "article": "l'",
        "gender": "masculine",
        "emoji": "☂️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "ombrelli",
        "definitions": [
            {
                "text": "Oggetto contro la pioggia.",
                "examples": [
                    "Prendi l'ombrello."
                ]
            }
        ],
        "partitive": "dell'",
        "transcription": "ˈombrello",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_nature_008"
    },
    {
        "level": "starter",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "tempo meteorologici",
        "word": "tempo meteorologico",
        "theme": "nature",
        "gender": "masculine",
        "article": "il",
        "partitive": "del",
        "transcription": "ˈtɛmpo meteoroˈlɔdʒiko",
        "definitions": [
            {
                "text": "Le condizioni di sole, pioggia, vento, ecc.",
                "examples": [
                    "Com'è il tempo oggi?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "emoji": "✨",
        "id": "it_starter_nature_009"
    },
    {
        "level": "starter",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "temperature",
        "word": "temperatura",
        "theme": "nature",
        "gender": "feminine",
        "article": "la",
        "partitive": "della",
        "transcription": "temperaˈtura",
        "definitions": [
            {
                "text": "La misura del caldo o del freddo.",
                "examples": [
                    "La temperatura è alta."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "emoji": "✨",
        "id": "it_starter_nature_010"
    },
    {
        "level": "starter",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "nevi",
        "word": "neve",
        "theme": "nature",
        "gender": "feminine",
        "article": "la",
        "partitive": "della",
        "transcription": "ˈneve",
        "definitions": [
            {
                "text": "Acqua ghiacciata che cade dal cielo in fiocchi bianchi.",
                "examples": [
                    "La neve è bianca.",
                    "C'è molta neve in montagna."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "palla di neve",
        "antonyms": [],
        "lang": "it",
        "emoji": "✨",
        "id": "it_starter_nature_011"
    },
    {
        "level": "starter",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "nebbie",
        "word": "nebbia",
        "theme": "nature",
        "gender": "feminine",
        "article": "la",
        "partitive": "della",
        "transcription": "ˈnebbja",
        "definitions": [
            {
                "text": "Vapore acqueo che impedisce la vista.",
                "examples": [
                    "C'è molta nebbia stamattina.",
                    "Non vedo bene a causa della nebbia."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "nebbia fitta",
        "antonyms": [],
        "lang": "it",
        "emoji": "✨",
        "id": "it_starter_nature_012"
    },
    {
        "word": "stagione",
        "level": "starter",
        "theme": "nature",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍂",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "stagioni",
        "transcription": "staˈdʒone",
        "definitions": [
            {
                "text": "Ognuna delle quattro parti in cui si divide l'anno.",
                "examples": [
                    "La mia stagione preferita è l'estate."
                ]
            }
        ],
        "partitive": "della",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "it",
        "id": "it_starter_nature_013"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
