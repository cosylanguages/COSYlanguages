// TODO: verify level classification
(function() {
    const lang = "de";
    const data = [
    {
        "word": "Vater",
        "level": "starter",
        "theme": "family",
        "emoji": "👨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Der männliche Elternteil.",
                "examples": [
                    "Mein Vater arbeitet im Büro."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈfaːtɐ",
        "id": "de_starter_family_001"
    },
    {
        "word": "Mutter",
        "level": "starter",
        "theme": "family",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Der weibliche Elternteil.",
                "examples": [
                    "Meine Mutter kocht das Abendessen."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈmʊtɐ",
        "id": "de_starter_family_002"
    },
    {
        "word": "Bruder",
        "level": "starter",
        "theme": "family",
        "emoji": "👦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Männliches Geschwisterteil.",
                "examples": [
                    "Mein Bruder geht noch zur Schule."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈbʁuːdɐ",
        "id": "de_starter_family_003"
    },
    {
        "word": "Schwester",
        "level": "starter",
        "theme": "family",
        "emoji": "👧",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Weibliches Geschwisterteil.",
                "examples": [
                    "Meine Schwester liest gern Bücher."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈʃvɛstɐ",
        "id": "de_starter_family_004"
    },
    {
        "word": "Sohn",
        "level": "starter",
        "theme": "family",
        "emoji": "👶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Männliches Kind der Eltern.",
                "examples": [
                    "Unser Sohn ist fünf Jahre alt."
                ]
            }
        ],
        "lang": "de",
        "transcription": "zoːn",
        "id": "de_starter_family_005"
    },
    {
        "word": "Tochter",
        "level": "starter",
        "theme": "family",
        "emoji": "👧",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Weibliches Kind der Eltern.",
                "examples": [
                    "Ihre Tochter spielt im Garten."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈtɔxtɐ",
        "id": "de_starter_family_006"
    },
    {
        "word": "Großvater",
        "level": "starter",
        "theme": "family",
        "emoji": "👴",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Der Vater von Vater oder Mutter (Opa).",
                "examples": [
                    "Mein Großvater erzählt Geschichten."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈɡʁoːsˌfaːtɐ",
        "id": "de_starter_family_007"
    },
    {
        "word": "Großmutter",
        "level": "starter",
        "theme": "family",
        "emoji": "👵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Die Mutter von Vater oder Mutter (Oma).",
                "examples": [
                    "Meine Großmutter backt Kuchen."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈɡʁoːsˌmʊtɐ",
        "id": "de_starter_family_008"
    },
    {
        "word": "Onkel",
        "level": "starter",
        "theme": "family",
        "emoji": "👨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Der Bruder von Vater oder Mutter.",
                "examples": [
                    "Mein Onkel wohnt in Berlin."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈɔŋkl̩",
        "id": "de_starter_family_009"
    },
    {
        "word": "Tante",
        "level": "starter",
        "theme": "family",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Die Schwester von Vater oder Mutter.",
                "examples": [
                    "Meine Tante besucht uns heute."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈtantə",
        "id": "de_starter_family_010"
    },
    {
        "word": "Cousine",
        "level": "starter",
        "theme": "family",
        "emoji": "👧",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Die Tochter von Onkel oder Tante.",
                "examples": [
                    "Meine Cousine studiert in München."
                ]
            }
        ],
        "lang": "de",
        "transcription": "kuˈziːnə",
        "id": "de_starter_family_011"
    },
    {
        "word": "Kind",
        "level": "starter",
        "theme": "family",
        "emoji": "👶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Mensch im Kindesalter.",
                "examples": [
                    "Die Kinder spielen draußen."
                ]
            }
        ],
        "lang": "de",
        "transcription": "kɪnt",
        "id": "de_starter_family_012"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
