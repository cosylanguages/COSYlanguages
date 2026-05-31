// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Albert Einstein",
        "level": "starter",
        "theme": "social",
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
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_155"
    },
    {
        "word": "Taylor Swift",
        "level": "starter",
        "theme": "social",
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
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_156"
    },
    {
        "word": "Cristiano Ronaldo",
        "level": "starter",
        "theme": "social",
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
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_157"
    },
    {
        "word": "Lionel Messi",
        "level": "starter",
        "theme": "social",
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
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_158"
    },
    {
        "word": "Beyoncé",
        "level": "starter",
        "theme": "social",
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
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_159"
    },
    {
        "word": "Elon Musk",
        "level": "starter",
        "theme": "social",
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
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_160"
    },
    {
        "word": "Rainha Isabel II",
        "level": "starter",
        "theme": "social",
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
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_161"
    },
    {
        "word": "Marie Curie",
        "level": "starter",
        "theme": "social",
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
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_162"
    },
    {
        "word": "Leonardo da Vinci",
        "level": "starter",
        "theme": "social",
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
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_163"
    },
    {
        "word": "Nelson Mandela",
        "level": "starter",
        "theme": "social",
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
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_164"
    },
    {
        "word": "William Shakespeare",
        "level": "starter",
        "theme": "social",
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
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_social_165"
    }
];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();