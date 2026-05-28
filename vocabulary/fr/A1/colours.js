(function() {
    const data = [
{
        "word": "violet",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🟣",
        "form": "noun", "classification": "regular", "countability": "countable",
        "plural": "violets",
        "definitions": [
            {
                "text": "Couleur entre bleu et rouge.",
                "examples": [
                    "J'ai un sac violet."
                ]
            }
        ],
        "transcription": "/vjɔ.lɛ/"
    },
{
        "word": "cercle",
        "level": "starter",
        "theme": "shapes_A1",
        "emoji": "⭕",
        "form": "noun", "classification": "regular", "countability": "countable",
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
        "transcription": "sɛʁkl"
    },
{
        "word": "triangle",
        "level": "starter",
        "theme": "shapes_A1",
        "emoji": "🔺",
        "form": "noun", "classification": "regular", "countability": "countable",
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
        "transcription": "tʁijɑ̃ɡl"
    }
    ];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();