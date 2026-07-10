// TODO: verify level classification
(function() {
    const lang = "fr";
    const data = [
    {
        "word": "et",
        "level": "starter",
        "theme": "language",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "conjunction",
        "plural": "",
        "definitions": [
            {
                "text": "Ajoute quelque chose.",
                "examples": [
                    "Toi et moi."
                ]
            }
        ],
        "transcription": "/e/",
        "lang": "fr",
        "id": "fr_starter_language_001"
    },
    {
        "word": "mais",
        "level": "starter",
        "theme": "language",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "conjunction",
        "plural": "",
        "definitions": [
            {
                "text": "Indique une opposition.",
                "examples": [
                    "C'est bon mais cher."
                ]
            }
        ],
        "transcription": "/mɛ/",
        "lang": "fr",
        "id": "fr_starter_language_002"
    },
    {
        "word": "parce que",
        "level": "starter",
        "theme": "language",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "conjunction",
        "plural": "",
        "definitions": [
            {
                "text": "Donne une raison.",
                "examples": [
                    "Je dors parce que je suis fatigué."
                ]
            }
        ],
        "transcription": "/paʁ.sə kə/",
        "lang": "fr",
        "id": "fr_starter_language_003"
    },
    {
        "word": "problème",
        "level": "starter",
        "theme": "language",
        "article": "le",
        "gender": "masculine",
        "emoji": "❓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "problèmes",
        "definitions": [
            {
                "text": "Une difficulté.",
                "examples": [
                    "Il y a un problème."
                ]
            }
        ],
        "transcription": "/pʁɔ.blɛm/",
        "lang": "fr",
        "id": "fr_starter_language_004"
    },
    {
        "word": "oui",
        "level": "starter",
        "theme": "language",
        "article": "",
        "gender": "",
        "emoji": "✅",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Affirmation.",
                "examples": [
                    "Oui, je veux bien."
                ]
            }
        ],
        "transcription": "/wi/",
        "lang": "fr",
        "id": "fr_starter_language_005"
    },
    {
        "word": "non",
        "level": "starter",
        "theme": "language",
        "article": "",
        "gender": "",
        "emoji": "❌",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Négation.",
                "examples": [
                    "Non, merci."
                ]
            }
        ],
        "transcription": "/nɔ̃/",
        "lang": "fr",
        "id": "fr_starter_language_006"
    },
    {
        "word": "conversation",
        "level": "starter",
        "theme": "language",
        "article": "la",
        "gender": "feminine",
        "emoji": "💬",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "conversations",
        "definitions": [
            {
                "text": "Action de parler ensemble.",
                "examples": [
                    "Une conversation intéressante."
                ]
            }
        ],
        "transcription": "/kɔ̃.vɛʁ.sa.sjɔ̃/",
        "lang": "fr",
        "id": "fr_starter_language_007"
    },
    {
        "word": "aussi",
        "level": "starter",
        "theme": "language",
        "article": "",
        "gender": "",
        "emoji": "➕",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Également.",
                "examples": [
                    "Moi aussi."
                ]
            }
        ],
        "transcription": "/o.si/",
        "lang": "fr",
        "id": "fr_starter_language_008"
    },
    {
        "word": "chose",
        "level": "starter",
        "theme": "describing",
        "article": "la",
        "gender": "feminine",
        "emoji": "📦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "choses",
        "definitions": [
            {
                "text": "Un objet ou une idée.",
                "examples": [
                    "C'est une bonne chose."
                ]
            }
        ],
        "transcription": "/ʃoz/",
        "lang": "fr",
        "id": "fr_starter_describing_001"
    },
    {
        "word": "question",
        "level": "starter",
        "theme": "language",
        "article": "la",
        "gender": "feminine",
        "emoji": "❓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "questions",
        "definitions": [
            {
                "text": "Ce qu'on demande.",
                "examples": [
                    "J'ai une question."
                ]
            }
        ],
        "transcription": "/kɛs.tjɔ̃/",
        "lang": "fr",
        "id": "fr_starter_language_009"
    },
    {
        "word": "réponse",
        "level": "starter",
        "theme": "language",
        "article": "la",
        "gender": "feminine",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "réponses",
        "definitions": [
            {
                "text": "Ce qu'on dit après une question.",
                "examples": [
                    "La réponse est non."
                ]
            }
        ],
        "transcription": "/ʁe.pɔ̃s/",
        "lang": "fr",
        "id": "fr_starter_language_010"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
