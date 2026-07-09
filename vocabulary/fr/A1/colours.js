(function() {
    const data = [
    {
        "word": "violet",
        "level": "starter",
        "theme": "colours",
        "article": "le",
        "gender": "masculine",
        "emoji": "🟣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "violets",
        "definitions": [
            {
                "text": "Couleur entre bleu et rouge.",
                "examples": [
                    "J'ai un sac violet."
                ]
            }
        ],
        "transcription": "/vjɔ.lɛ/",
        "lang": "fr",
        "id": "fr_starter_colours_001"
    },
    {
        "word": "cercle",
        "level": "starter",
        "theme": "describing",
        "emoji": "⭕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "masculine",
        "article": "le",
        "plural": "cercles",
        "definitions": [
            {
                "text": "Une forme parfaitement ronde.",
                "examples": [
                    "Dessine un cercle sur la feuille.",
                    "La balle a la forme d'un cercle."
                ]
            }
        ],
        "transcription": "sɛʁkl",
        "lang": "fr",
        "id": "fr_starter_describing_001"
    },
    {
        "word": "triangle",
        "level": "starter",
        "theme": "describing",
        "emoji": "🔺",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "masculine",
        "article": "le",
        "plural": "triangles",
        "definitions": [
            {
                "text": "Une forme avec trois côtés et trois angles.",
                "examples": [
                    "Un morceau de pizza ressemble à un triangle.",
                    "Le professeur explique le triangle."
                ]
            }
        ],
        "transcription": "tʁijɑ̃ɡl",
        "lang": "fr",
        "id": "fr_starter_describing_002"
    },
    {
        "word": "bleu",
        "translation": "blue",
        "level": "starter",
        "theme": "colours",
        "language": "fr",
        "emoji": "🔵",
        "form": "adjective",
        "definitions": [
            {
                "text": "De la couleur du ciel par beau temps.",
                "examples": [
                    "Le ciel est bleu."
                ]
            }
        ],
        "transcription": "/blø/",
        "lang": "fr",
        "id": "fr_starter_colours_002"
    },
    {
        "word": "rouge",
        "translation": "red",
        "level": "starter",
        "theme": "colours",
        "language": "fr",
        "emoji": "🔴",
        "form": "adjective",
        "definitions": [
            {
                "text": "De la couleur du sang.",
                "examples": [
                    "Une pomme rouge."
                ]
            }
        ],
        "transcription": "/ʁuʒ/",
        "lang": "fr",
        "id": "fr_starter_colours_003"
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();