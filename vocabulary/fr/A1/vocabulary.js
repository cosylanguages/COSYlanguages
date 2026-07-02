// TODO: verify level classification
(function() {
    const data = [
{
        "word": "et",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
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
        "transcription": "/e/"
    },
{
        "word": "mais",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
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
        "transcription": "/mɛ/"
    },
{
        "word": "parce que",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
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
        "transcription": "/paʁ.sə kə/"
    },
{
        "word": "problème",
        "level": "starter",
        "theme": "language",
        "article": "le",
        "gender": "masculine",
        "emoji": "❓",
        "form": "noun", "classification": "regular", "countability": "countable",
        "plural": "problèmes",
        "definitions": [
            {
                "text": "Une difficulté.",
                "examples": [
                    "Il y a un problème."
                ]
            }
        ],
        "transcription": "/pʁɔ.blɛm/"
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
        "transcription": "/wi/"
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
        "transcription": "/nɔ̃/"
    },
{
        "word": "conversation",
        "level": "starter",
        "theme": "language",
        "article": "la",
        "gender": "feminine",
        "emoji": "💬",
        "form": "noun", "classification": "regular", "countability": "countable",
        "plural": "conversations",
        "definitions": [
            {
                "text": "Action de parler ensemble.",
                "examples": [
                    "Une conversation intéressante."
                ]
            }
        ],
        "transcription": "/kɔ̃.vɛʁ.sa.sjɔ̃/"
    },
{
        "word": "aussi",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
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
        "transcription": "/o.si/"
    },
{
        "word": "chose",
        "level": "starter",
        "theme": "describing",
        "article": "la",
        "gender": "feminine",
        "emoji": "📦",
        "form": "noun", "classification": "regular", "countability": "countable",
        "plural": "choses",
        "definitions": [
            {
                "text": "Un objet ou une idée.",
                "examples": [
                    "C'est une bonne chose."
                ]
            }
        ],
        "transcription": "/ʃoz/"
    },
{
        "word": "question",
        "level": "starter",
        "theme": "language",
        "article": "la",
        "gender": "feminine",
        "emoji": "❓",
        "form": "noun", "classification": "regular", "countability": "countable",
        "plural": "questions",
        "definitions": [
            {
                "text": "Ce qu'on demande.",
                "examples": [
                    "J'ai une question."
                ]
            }
        ],
        "transcription": "/kɛs.tjɔ̃/"
    },
{
        "word": "réponse",
        "level": "starter",
        "theme": "language",
        "article": "la",
        "gender": "feminine",
        "emoji": "💡",
        "form": "noun", "classification": "regular", "countability": "countable",
        "plural": "réponses",
        "definitions": [
            {
                "text": "Ce qu'on dit après une question.",
                "examples": [
                    "La réponse est non."
                ]
            }
        ],
        "transcription": "/ʁe.pɔ̃s/"
    }
    ];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();