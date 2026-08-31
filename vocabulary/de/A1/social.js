// TODO: verify level classification
(function() {
    const lang = "de";
    const data = [
    {
        "word": "Freund",
        "level": "starter",
        "theme": "social",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Nahestehende geliebte Person.",
                "examples": [
                    "Mein Freund hilft mir gerne."
                ]
            }
        ],
        "lang": "de",
        "transcription": "fʁɔɪ̯nt",
        "id": "de_starter_social_001"
    },
    {
        "word": "Fest",
        "level": "starter",
        "theme": "social",
        "emoji": "🎉",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Fröhliche Feier von Menschen.",
                "examples": [
                    "Wir feiern ein großes Fest."
                ]
            }
        ],
        "lang": "de",
        "transcription": "fɛst",
        "id": "de_starter_social_002"
    },
    {
        "word": "Gespräch",
        "level": "starter",
        "theme": "social",
        "emoji": "💬",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Unterhaltung zwischen Personen.",
                "examples": [
                    "Wir hatten ein gutes Gespräch."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ɡəˈʃpʁɛːx",
        "id": "de_starter_social_003"
    },
    {
        "word": "Mensch",
        "level": "starter",
        "theme": "social",
        "emoji": "👤",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Person, Individuum.",
                "examples": [
                    "Viele Menschen sind im Park."
                ]
            }
        ],
        "lang": "de",
        "transcription": "mɛnʃ",
        "id": "de_starter_social_004"
    },
    {
        "word": "Freundschaft",
        "level": "starter",
        "theme": "social",
        "emoji": "🤝",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Beziehung zwischen Freunden.",
                "examples": [
                    "Unsere Freundschaft ist wichtig."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈfʁɔɪ̯ntʃaft",
        "id": "de_starter_social_005"
    },
    {
        "word": "zusammen",
        "level": "starter",
        "theme": "social",
        "emoji": "🧑‍🤝‍🧑",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "Gemeinsam mit anderen.",
                "examples": [
                    "Wir lernen zusammen Deutsch."
                ]
            }
        ],
        "lang": "de",
        "transcription": "t͡suˈzamən",
        "id": "de_starter_social_006"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
