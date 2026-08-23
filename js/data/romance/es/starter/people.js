// TODO: verify level classification
(function() {
    const lang = "es";
    const data = [
    {
        "word": "Albert Einstein",
        "level": "starter",
        "theme": "people",
        "emoji": "👨‍🔬",
        "definitions": [
            {
                "text": "Un científico famoso muy conocido.",
                "examples": [
                    "Albert Einstein era muy famoso."
                ]
            }
        ],
        "subtext": "científico famoso",
        "transcription": "ˈalβert ˈainstain",
        "form": "noun",
        "lang": "es",
        "sub_theme": "city",
        "id": "es_starter_places_062"
    },
    {
        "word": "Taylor Swift",
        "level": "starter",
        "theme": "people",
        "emoji": "🎤",
        "definitions": [
            {
                "text": "Un cantante famosa muy conocido.",
                "examples": [
                    "Taylor Swift era muy famoso."
                ]
            }
        ],
        "subtext": "cantante famosa",
        "transcription": "ˈteilor swift",
        "form": "noun",
        "lang": "es",
        "sub_theme": "city",
        "id": "es_starter_places_063"
    },
    {
        "word": "Cristiano Ronaldo",
        "level": "starter",
        "theme": "people",
        "emoji": "⚽",
        "definitions": [
            {
                "text": "Un atleta famoso muy conocido.",
                "examples": [
                    "Cristiano Ronaldo era muy famoso."
                ]
            }
        ],
        "subtext": "atleta famoso",
        "transcription": "krisˈtjano roˈnaldo",
        "form": "noun",
        "lang": "es",
        "sub_theme": "city",
        "id": "es_starter_places_064"
    },
    {
        "word": "Lionel Messi",
        "level": "starter",
        "theme": "people",
        "emoji": "⚽",
        "definitions": [
            {
                "text": "Un atleta famoso muy conocido.",
                "examples": [
                    "Lionel Messi era muy famoso."
                ]
            }
        ],
        "subtext": "atleta famoso",
        "transcription": "ljoˈnel ˈmesi",
        "form": "noun",
        "lang": "es",
        "sub_theme": "city",
        "id": "es_starter_places_065"
    },
    {
        "word": "Beyoncé",
        "level": "starter",
        "theme": "people",
        "emoji": "🎤",
        "definitions": [
            {
                "text": "Un cantante famosa muy conocido.",
                "examples": [
                    "Beyoncé era muy famoso."
                ]
            }
        ],
        "subtext": "cantante famosa",
        "transcription": "biˈonse",
        "form": "noun",
        "lang": "es",
        "sub_theme": "city",
        "id": "es_starter_places_066"
    },
    {
        "word": "Elon Musk",
        "level": "starter",
        "theme": "people",
        "emoji": "🚀",
        "definitions": [
            {
                "text": "Un empresario famoso muy conocido.",
                "examples": [
                    "Elon Musk era muy famoso."
                ]
            }
        ],
        "subtext": "empresario famoso",
        "transcription": "ˈilon mask",
        "form": "noun",
        "lang": "es",
        "sub_theme": "city",
        "id": "es_starter_places_067"
    },
    {
        "word": "Reina Isabel II",
        "level": "starter",
        "theme": "people",
        "emoji": "👑",
        "definitions": [
            {
                "text": "Un reina famosa muy conocido.",
                "examples": [
                    "Reina Isabel II era muy famoso."
                ]
            }
        ],
        "subtext": "reina famosa",
        "transcription": "ˈkwin iˈliθaβeθ",
        "form": "noun",
        "lang": "es",
        "sub_theme": "city",
        "id": "es_starter_places_068"
    },
    {
        "word": "Marie Curie",
        "level": "starter",
        "theme": "people",
        "emoji": "🧪",
        "definitions": [
            {
                "text": "Un científica famosa muy conocido.",
                "examples": [
                    "Marie Curie era muy famoso."
                ]
            }
        ],
        "subtext": "científica famosa",
        "transcription": "maˈri kuˈri",
        "form": "noun",
        "lang": "es",
        "sub_theme": "city",
        "id": "es_starter_places_069"
    },
    {
        "word": "Leonardo da Vinci",
        "level": "starter",
        "theme": "people",
        "emoji": "🎨",
        "definitions": [
            {
                "text": "Un artista famoso muy conocido.",
                "examples": [
                    "Leonardo da Vinci era muy famoso."
                ]
            }
        ],
        "subtext": "artista famoso",
        "transcription": "leoˈnarðo ðha ˈβintʃi",
        "form": "noun",
        "lang": "es",
        "sub_theme": "city",
        "id": "es_starter_places_070"
    },
    {
        "word": "Nelson Mandela",
        "level": "starter",
        "theme": "people",
        "emoji": "🇿🇦",
        "definitions": [
            {
                "text": "Un líder famoso muy conocido.",
                "examples": [
                    "Nelson Mandela era muy famoso."
                ]
            }
        ],
        "subtext": "líder famoso",
        "transcription": "ˈnelson manˈdela",
        "form": "noun",
        "lang": "es",
        "sub_theme": "city",
        "id": "es_starter_places_071"
    },
    {
        "word": "William Shakespeare",
        "level": "starter",
        "theme": "people",
        "emoji": "✍️",
        "definitions": [
            {
                "text": "Un escritor famoso muy conocido.",
                "examples": [
                    "William Shakespeare era muy famoso."
                ]
            }
        ],
        "subtext": "escritor famoso",
        "transcription": "ˈwiljam ˈʃeikspir",
        "form": "noun",
        "lang": "es",
        "sub_theme": "city",
        "id": "es_starter_places_072"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
