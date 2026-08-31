// TODO: verify level classification
(function() {
    const lang = "de";
    const data = [
    {
        "word": "Kopf",
        "level": "starter",
        "theme": "body",
        "emoji": "🗣️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Der oberste Teil des menschlichen Körpers.",
                "examples": [
                    "Mein Kopf tut weh."
                ]
            }
        ],
        "lang": "de",
        "transcription": "kɔp͡f",
        "id": "de_starter_body_001"
    },
    {
        "word": "Hand",
        "level": "starter",
        "theme": "body",
        "emoji": "✋",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Der Körperteil zum Greifen von Dingen.",
                "examples": [
                    "Wasche deine Hände vor dem Essen."
                ]
            }
        ],
        "lang": "de",
        "transcription": "hant",
        "id": "de_starter_body_002"
    },
    {
        "word": "Fuß",
        "level": "starter",
        "theme": "body",
        "emoji": "🦶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Der Körperteil zum Gehen.",
                "examples": [
                    "Ich gehe zu Fuß zur Schule."
                ]
            }
        ],
        "lang": "de",
        "transcription": "fuːs",
        "id": "de_starter_body_003"
    },
    {
        "word": "Auge",
        "level": "starter",
        "theme": "body",
        "emoji": "👁️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Das Organ zum Sehen.",
                "examples": [
                    "Sie hat blaue Augen."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈaʊ̯ɡə",
        "id": "de_starter_body_004"
    },
    {
        "word": "Ohr",
        "level": "starter",
        "theme": "body",
        "emoji": "👂",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Das Organ zum Hören.",
                "examples": [
                    "Wir hören mit den Ohren."
                ]
            }
        ],
        "lang": "de",
        "transcription": "oːɐ̯",
        "id": "de_starter_body_005"
    },
    {
        "word": "Mund",
        "level": "starter",
        "theme": "body",
        "emoji": "👄",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Das Organ zum Sprechen und Essen.",
                "examples": [
                    "Öffne bitte den Mund."
                ]
            }
        ],
        "lang": "de",
        "transcription": "mʊnt",
        "id": "de_starter_body_006"
    },
    {
        "word": "Nase",
        "level": "starter",
        "theme": "body",
        "emoji": "👃",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Das Organ zum Riechen.",
                "examples": [
                    "Meine Nase ist kalt."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈnaːzə",
        "id": "de_starter_body_007"
    },
    {
        "word": "Arm",
        "level": "starter",
        "theme": "body",
        "emoji": "💪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Der obere Körperteil zwischen Schulter und Hand.",
                "examples": [
                    "Er hat starke Arme."
                ]
            }
        ],
        "lang": "de",
        "transcription": "aʁm",
        "id": "de_starter_body_008"
    },
    {
        "word": "Bein",
        "level": "starter",
        "theme": "body",
        "emoji": "🦵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Der Körperteil zwischen Hüfte und Fuß.",
                "examples": [
                    "Meine Beine sind müde."
                ]
            }
        ],
        "lang": "de",
        "transcription": "baɪ̯n",
        "id": "de_starter_body_009"
    },
    {
        "word": "Bauch",
        "level": "starter",
        "theme": "body",
        "emoji": "🫃",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Der mittlere Körperteil vorn.",
                "examples": [
                    "Ich habe Bauchschmerzen."
                ]
            }
        ],
        "lang": "de",
        "transcription": "baʊ̯x",
        "id": "de_starter_body_010"
    },
    {
        "word": "Haar",
        "level": "starter",
        "theme": "body",
        "emoji": "💇",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Der Bewuchs auf dem Kopf.",
                "examples": [
                    "Sie hat kurzes blondes Haar."
                ]
            }
        ],
        "lang": "de",
        "transcription": "haːɐ̯",
        "id": "de_starter_body_011"
    },
    {
        "word": "Zahn",
        "level": "starter",
        "theme": "body",
        "emoji": "🦷",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Hartes Teil im Mund zum Kauen.",
                "examples": [
                    "Putze deine Zähne nach dem Essen."
                ]
            }
        ],
        "lang": "de",
        "transcription": "t͡saːn",
        "id": "de_starter_body_012"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
