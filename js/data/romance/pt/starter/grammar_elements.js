(function() {
    const data = [
    {
        "word": "eu",
        "level": "starter",
        "theme": "people",
        "emoji": "🙋",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Primeira pessoa do singular.",
                "examples": [
                    "Eu sou estudante."
                ]
            }
        ],
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_people_003"
    },
    {
        "word": "tu",
        "level": "starter",
        "theme": "people",
        "emoji": "🫵",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Segunda pessoa do singular.",
                "examples": [
                    "Como estás tu?"
                ]
            }
        ],
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_people_004"
    },
    {
        "word": "ele",
        "level": "starter",
        "theme": "people",
        "emoji": "👨",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Terceira pessoa do singular (masculino).",
                "examples": [
                    "Ele é meu irmão."
                ]
            }
        ],
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_people_005"
    },
    {
        "word": "ela",
        "level": "starter",
        "theme": "people",
        "emoji": "👩",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Terceira pessoa do singular (feminino).",
                "examples": [
                    "Ela é minha irmã."
                ]
            }
        ],
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_people_006"
    },
    {
        "word": "nós",
        "level": "starter",
        "theme": "people",
        "emoji": "👥",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Primeira pessoa do plural.",
                "examples": [
                    "Nós somos amigos."
                ]
            }
        ],
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_people_007"
    },
    {
        "word": "eles",
        "level": "starter",
        "theme": "people",
        "emoji": "👥",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Terceira pessoa do plural.",
                "examples": [
                    "Eles trabalham juntos."
                ]
            }
        ],
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_people_008"
    },
    {
        "word": "meu",
        "level": "starter",
        "theme": "people",
        "emoji": "🙋",
        "form": "determiner",
        "definitions": [
            {
                "text": "Indica posse (eu).",
                "examples": [
                    "O meu nome é João."
                ]
            }
        ],
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_people_009"
    },
    {
        "word": "teu",
        "level": "starter",
        "theme": "people",
        "emoji": "🫵",
        "form": "determiner",
        "definitions": [
            {
                "text": "Indica posse (tu).",
                "examples": [
                    "É o teu telefone?"
                ]
            }
        ],
        "lang": "pt",
        "sub_theme": null,
        "id": "pt_starter_people_010"
    },
    {
        "word": "sempre",
        "level": "starter",
        "theme": "language",
        "emoji": "🔄",
        "form": "adverb",
        "definitions": [
            {
                "text": "Em todos os momentos.",
                "examples": [
                    "Sempre bebo café."
                ]
            }
        ],
        "lang": "pt",
        "sub_theme": "grammar_terms",
        "id": "pt_starter_language_009"
    },
    {
        "word": "nunca",
        "level": "starter",
        "theme": "language",
        "emoji": "❌",
        "form": "adverb",
        "definitions": [
            {
                "text": "Em nenhum momento.",
                "examples": [
                    "Nunca chego atrasado."
                ]
            }
        ],
        "lang": "pt",
        "sub_theme": "grammar_terms",
        "id": "pt_starter_language_010"
    },
    {
        "word": "e",
        "level": "starter",
        "theme": "language",
        "emoji": "➕",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Une palavras ou frases.",
                "examples": [
                    "Café e chá."
                ]
            }
        ],
        "lang": "pt",
        "sub_theme": "grammar_terms",
        "id": "pt_starter_language_011"
    },
    {
        "word": "mas",
        "level": "starter",
        "theme": "language",
        "emoji": "❓",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Indica contraste.",
                "examples": [
                    "Gosto de café, mas não de leite."
                ]
            }
        ],
        "lang": "pt",
        "sub_theme": "grammar_terms",
        "id": "pt_starter_language_012"
    }
];
    const lang = "pt";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();