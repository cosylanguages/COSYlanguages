(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-NOUN-SEL-004",
        "word": "jacket",
        "emoji": "🧥",
        "form": "noun",
        "definitions": [
            {
                "text": "An outer garment extending either to the waist or hips.",
                "examples": [
                    "Wear a warm jacket outside.",
                    "He hung his suit jacket on the chair."
                ]
            }
        ],
        "subtext": "coat, outerwear",
        "synonyms": [
            "coat",
            "outerwear"
        ],
        "transcription": "ˈdʒækɪt",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "identity",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Nouns",
        "sub_subcategory": "Clothing_Garments"
    },
    {
        "id": "A2-NOUN-SEL-005",
        "word": "button",
        "emoji": "🔘",
        "form": "noun",
        "definitions": [
            {
                "text": "A small disc sewn onto a garment to fasten it.",
                "examples": [
                    "Fasten the top button of your shirt.",
                    "Press the elevator call button."
                ]
            }
        ],
        "subtext": "fastener, switch",
        "synonyms": [
            "fastener",
            "switch"
        ],
        "transcription": "ˈbʌtn",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "identity",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Nouns",
        "sub_subcategory": "Clothing_Garments"
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
