(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-NOUN-NAT-014",
        "word": "harvest",
        "emoji": "🌾",
        "form": "noun",
        "definitions": [
            {
                "text": "The process or period of gathering in crops.",
                "examples": [
                    "Farmers celebrate a bountiful autumn harvest.",
                    "Rain delayed the wheat harvest."
                ]
            }
        ],
        "subtext": "reaping, crop",
        "synonyms": [
            "reaping",
            "crop"
        ],
        "transcription": "ˈhɑːvɪst",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "nature",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Flora_Plants"
    },
    {
        "id": "A2-NOUN-NAT-015",
        "word": "leaf",
        "emoji": "🍃",
        "form": "noun",
        "definitions": [
            {
                "text": "A flattened structure of a higher plant.",
                "examples": [
                    "Autumn turns green leaves into brilliant gold.",
                    "Rake dry leaves from the lawn."
                ]
            }
        ],
        "subtext": "foliage",
        "synonyms": [
            "foliage"
        ],
        "transcription": "liːf",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "nature",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Flora_Plants"
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
