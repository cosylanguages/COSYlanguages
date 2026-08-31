// TODO: verify level classification
(function() {
    const lang = "de";
    const data = [
    {
        "word": "hallo",
        "level": "starter",
        "theme": "greetings",
        "emoji": "👋",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Freundlicher Gruß.",
                "examples": [
                    "Hallo! Wie geht es dir?"
                ]
            }
        ],
        "lang": "de",
        "transcription": "haˈloː",
        "id": "de_starter_greetings_001"
    },
    {
        "word": "guten Morgen",
        "level": "starter",
        "theme": "greetings",
        "emoji": "🌅",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Morgendlicher Gruß.",
                "examples": [
                    "Guten Morgen, zusammen!"
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈɡuːtn̩ ˈmɔʁɡn̩",
        "id": "de_starter_greetings_002"
    },
    {
        "word": "guten Tag",
        "level": "starter",
        "theme": "greetings",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Gruß am Tag.",
                "examples": [
                    "Guten Tag, Herr Müller!"
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈɡuːtn̩ taːk",
        "id": "de_starter_greetings_003"
    },
    {
        "word": "guten Abend",
        "level": "starter",
        "theme": "greetings",
        "emoji": "🌆",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Gruß am Abend.",
                "examples": [
                    "Guten Abend, meine Damen und Herren!"
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈɡuːtn̩ ˈaːbn̩t",
        "id": "de_starter_greetings_004"
    },
    {
        "word": "gute Nacht",
        "level": "starter",
        "theme": "greetings",
        "emoji": "🌙",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Gruß vor dem Schlafen.",
                "examples": [
                    "Gute Nacht, schlaf gut!"
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈɡuːtə naxt",
        "id": "de_starter_greetings_005"
    },
    {
        "word": "auf Wiedersehen",
        "level": "starter",
        "theme": "greetings",
        "emoji": "👋",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Formeller Abschiedsgruß.",
                "examples": [
                    "Auf Wiedersehen und bis bald!"
                ]
            }
        ],
        "lang": "de",
        "transcription": "aʊ̯f ˈviːdɐˌzeːən",
        "id": "de_starter_greetings_006"
    },
    {
        "word": "danke",
        "level": "starter",
        "theme": "greetings",
        "emoji": "🙏",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Ausdruck des Danks.",
                "examples": [
                    "Vielen Dank für die Hilfe."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈdaŋkə",
        "id": "de_starter_greetings_007"
    },
    {
        "word": "bitte",
        "level": "starter",
        "theme": "greetings",
        "emoji": "🤝",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Höfliches Wort bei Bitten oder Antworten.",
                "examples": [
                    "Ein Wasser, bitte."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈbɪtə",
        "id": "de_starter_greetings_008"
    },
    {
        "word": "tschüss",
        "level": "starter",
        "theme": "greetings",
        "emoji": "👋",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Informeller Abschiedsgruß.",
                "examples": [
                    "Tschüss, bis morgen!"
                ]
            }
        ],
        "lang": "de",
        "transcription": "t͡ʃyːs",
        "id": "de_starter_greetings_009"
    },
    {
        "word": "Entschuldigung",
        "level": "starter",
        "theme": "greetings",
        "emoji": "🙇",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Höfliches Wort zur Entschuldigung.",
                "examples": [
                    "Entschuldigung, wie spät ist es?"
                ]
            }
        ],
        "lang": "de",
        "transcription": "ɛntˈʃʊldɪɡʊŋ",
        "id": "de_starter_greetings_010"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
