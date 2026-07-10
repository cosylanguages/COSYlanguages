// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "et",
        "level": "starter",
        "theme": "conjunctions_connectors",
        "article": "",
        "gender": "",
        "emoji": "✨",
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
        "transcription": "e",
        "id": "fr_starter_vocabulary_001",
        "lang": "fr"
    },
    {
        "word": "mais",
        "level": "starter",
        "theme": "conjunctions_connectors",
        "article": "",
        "gender": "",
        "emoji": "✨",
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
        "transcription": "mɛ",
        "id": "fr_starter_vocabulary_002",
        "lang": "fr"
    },
    {
        "word": "parce que",
        "level": "starter",
        "theme": "conjunctions_connectors",
        "article": "",
        "gender": "",
        "emoji": "✨",
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
        "transcription": "paʁ.sə kə",
        "id": "fr_starter_vocabulary_003",
        "lang": "fr"
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
        "transcription": "pʁɔ.blɛm",
        "id": "fr_starter_vocabulary_004",
        "lang": "fr"
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
        "transcription": "wi",
        "id": "fr_starter_vocabulary_005",
        "lang": "fr"
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
        "transcription": "nɔ̃",
        "id": "fr_starter_vocabulary_006",
        "lang": "fr"
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
        "transcription": "kɔ̃.vɛʁ.sa.sjɔ̃",
        "id": "fr_starter_vocabulary_007",
        "lang": "fr"
    },
    {
        "word": "aussi",
        "level": "starter",
        "theme": "conjunctions_connectors",
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
        "transcription": "o.si",
        "id": "fr_starter_vocabulary_008",
        "lang": "fr"
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
        "transcription": "ʃoz",
        "id": "fr_starter_vocabulary_009",
        "lang": "fr"
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
        "transcription": "kɛs.tjɔ̃",
        "id": "fr_starter_vocabulary_010",
        "lang": "fr"
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
        "transcription": "ʁe.pɔ̃s",
        "id": "fr_starter_vocabulary_011",
        "lang": "fr"
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();