(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-ADJ-NAT-018",
        "word": "tropical",
        "emoji": "🌴",
        "form": "adjective",
        "definitions": [
            {
                "text": "Of or characteristic of the tropics.",
                "examples": [
                    "The island enjoys a warm tropical climate.",
                    "Tropical fruits include mangoes and pineapples."
                ]
            }
        ],
        "subtext": "warm, equatorial",
        "synonyms": [
            "warm",
            "equatorial"
        ],
        "transcription": "ˈtrɒpɪkl",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "nature",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Adjectives",
        "sub_subcategory": "Weather_Seasons"
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
