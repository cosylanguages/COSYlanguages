// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Albert Einstein",
        "level": "starter",
        "theme": "places",
        "emoji": "👨‍🔬",
        "definitions": [
            {
                "text": "Um cientista famoso muito conhecido.",
                "examples": [
                    "Albert Einstein era muito famoso."
                ]
            }
        ],
        "subtext": "cientista famoso",
        "transcription": "ˈalβert ˈainstain",
        "form": "noun",
        "id": "pt_starter_people_001",
        "lang": "pt"
    },
    {
        "word": "Taylor Swift",
        "level": "starter",
        "theme": "places",
        "emoji": "🎤",
        "definitions": [
            {
                "text": "Um cantora famosa muito conhecido.",
                "examples": [
                    "Taylor Swift era muito famoso."
                ]
            }
        ],
        "subtext": "cantora famosa",
        "transcription": "ˈteilor swift",
        "form": "noun",
        "id": "pt_starter_people_002",
        "lang": "pt"
    },
    {
        "word": "Cristiano Ronaldo",
        "level": "starter",
        "theme": "places",
        "emoji": "⚽",
        "definitions": [
            {
                "text": "Um atleta famoso muito conhecido.",
                "examples": [
                    "Cristiano Ronaldo era muito famoso."
                ]
            }
        ],
        "subtext": "atleta famoso",
        "transcription": "krisˈtjano roˈnaldo",
        "form": "noun",
        "id": "pt_starter_people_003",
        "lang": "pt"
    },
    {
        "word": "Lionel Messi",
        "level": "starter",
        "theme": "places",
        "emoji": "⚽",
        "definitions": [
            {
                "text": "Um atleta famoso muito conhecido.",
                "examples": [
                    "Lionel Messi era muito famoso."
                ]
            }
        ],
        "subtext": "atleta famoso",
        "transcription": "ljoˈnel ˈmesi",
        "form": "noun",
        "id": "pt_starter_people_004",
        "lang": "pt"
    },
    {
        "word": "Beyoncé",
        "level": "starter",
        "theme": "places",
        "emoji": "🎤",
        "definitions": [
            {
                "text": "Um cantora famosa muito conhecido.",
                "examples": [
                    "Beyoncé era muito famoso."
                ]
            }
        ],
        "subtext": "cantora famosa",
        "transcription": "biˈonse",
        "form": "noun",
        "id": "pt_starter_people_005",
        "lang": "pt"
    },
    {
        "word": "Elon Musk",
        "level": "starter",
        "theme": "places",
        "emoji": "🚀",
        "definitions": [
            {
                "text": "Um empresário famoso muito conhecido.",
                "examples": [
                    "Elon Musk era muito famoso."
                ]
            }
        ],
        "subtext": "empresário famoso",
        "transcription": "ˈilon mask",
        "form": "noun",
        "id": "pt_starter_people_006",
        "lang": "pt"
    },
    {
        "word": "Rainha Isabel II",
        "level": "starter",
        "theme": "places",
        "emoji": "👑",
        "definitions": [
            {
                "text": "Um rainha famosa muito conhecido.",
                "examples": [
                    "Rainha Isabel II era muito famoso."
                ]
            }
        ],
        "subtext": "rainha famosa",
        "transcription": "ˈkwin iˈliθaβeθ",
        "form": "noun",
        "id": "pt_starter_people_007",
        "lang": "pt"
    },
    {
        "word": "Marie Curie",
        "level": "starter",
        "theme": "places",
        "emoji": "🧪",
        "definitions": [
            {
                "text": "Um cientista famosa muito conhecido.",
                "examples": [
                    "Marie Curie era muito famoso."
                ]
            }
        ],
        "subtext": "cientista famosa",
        "transcription": "maˈri kuˈri",
        "form": "noun",
        "id": "pt_starter_people_008",
        "lang": "pt"
    },
    {
        "word": "Leonardo da Vinci",
        "level": "starter",
        "theme": "places",
        "emoji": "🎨",
        "definitions": [
            {
                "text": "Um artista famoso muito conhecido.",
                "examples": [
                    "Leonardo da Vinci era muito famoso."
                ]
            }
        ],
        "subtext": "artista famoso",
        "transcription": "leoˈnarðo ðha ˈβintʃi",
        "form": "noun",
        "id": "pt_starter_people_009",
        "lang": "pt"
    },
    {
        "word": "Nelson Mandela",
        "level": "starter",
        "theme": "places",
        "emoji": "🇿🇦",
        "definitions": [
            {
                "text": "Um líder famoso muito conhecido.",
                "examples": [
                    "Nelson Mandela era muito famoso."
                ]
            }
        ],
        "subtext": "líder famoso",
        "transcription": "ˈnelson manˈdela",
        "form": "noun",
        "id": "pt_starter_people_010",
        "lang": "pt"
    },
    {
        "word": "William Shakespeare",
        "level": "starter",
        "theme": "places",
        "emoji": "✍️",
        "definitions": [
            {
                "text": "Um escritor famoso muito conhecido.",
                "examples": [
                    "William Shakespeare era muito famoso."
                ]
            }
        ],
        "subtext": "escritor famoso",
        "transcription": "ˈwiljam ˈʃeikspir",
        "form": "noun",
        "id": "pt_starter_people_011",
        "lang": "pt"
    }
]
    const lang = "pt";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();