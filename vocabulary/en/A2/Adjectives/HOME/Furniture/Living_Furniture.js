(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-ADJ-HOM-003",
        "word": "cozy",
        "emoji": "🛋️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Giving a feeling of comfort, warmth, and relaxation.",
                "examples": [
                    "They spent a cozy evening by the fireplace.",
                    "The cafe has a small cozy corner."
                ]
            }
        ],
        "subtext": "warm, comfortable",
        "synonyms": [
            "warm",
            "comfortable"
        ],
        "transcription": "ˈkəʊzi",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "home",
        "domain": "HOME",
        "subcategory": "Furniture",
        "pos_section": "Adjectives",
        "sub_subcategory": "Living_Furniture"
    },
    {
        "id": "A2-ADJ-HOM-004",
        "word": "adjusted",
        "emoji": "🔧",
        "form": "adjective",
        "definitions": [
            {
                "text": "Altered or arranged to fit a new condition.",
                "examples": [
                    "The chair has an adjusted height.",
                    "She felt well adjusted to her new school."
                ]
            }
        ],
        "subtext": "adapted, tuned",
        "synonyms": [
            "adapted",
            "tuned"
        ],
        "transcription": "əˈdʒʌstɪd",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "home",
        "domain": "HOME",
        "subcategory": "Furniture",
        "pos_section": "Adjectives",
        "sub_subcategory": "Living_Furniture"
    }
];

    if (typeof window !== 'undefined') {
        window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData.en = (window.vocabularyData.en || []).concat(data);
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = data;
    }
})();
