(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-NOUN-NAT-001",
        "word": "insect",
        "emoji": "🐝",
        "form": "noun",
        "definitions": [
            {
                "text": "A small arthropod animal that has six legs.",
                "examples": [
                    "Bees and ants are social insects.",
                    "Protect your skin against insect bites."
                ]
            }
        ],
        "subtext": "bug, creature",
        "synonyms": [
            "bug",
            "creature"
        ],
        "transcription": "ˈɪnsekt",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "nature",
        "domain": "NATURE",
        "subcategory": "Animals",
        "pos_section": "Nouns",
        "sub_subcategory": "Insects_Bugs"
    },
    {
        "id": "A2-NOUN-NAT-002",
        "word": "bug",
        "emoji": "🐛",
        "form": "noun",
        "definitions": [
            {
                "text": "A small insect or a software error.",
                "examples": [
                    "A tiny bug crawled up the leaf.",
                    "Developers fixed a bug in the code."
                ]
            }
        ],
        "subtext": "insect, error",
        "synonyms": [
            "insect",
            "error"
        ],
        "transcription": "bʌɡ",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "nature",
        "domain": "NATURE",
        "subcategory": "Animals",
        "pos_section": "Nouns",
        "sub_subcategory": "Insects_Bugs"
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
