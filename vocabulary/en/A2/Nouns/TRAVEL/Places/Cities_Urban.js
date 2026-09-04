(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-NOUN-TRA-001",
        "word": "district",
        "emoji": "🏙️",
        "form": "noun",
        "definitions": [
            {
                "text": "An area of a country or city having particular characteristics.",
                "examples": [
                    "We stayed in the historic financial district.",
                    "School districts manage local education."
                ]
            }
        ],
        "subtext": "area, neighborhood",
        "synonyms": [
            "area",
            "neighborhood"
        ],
        "transcription": "ˈdɪstrɪkt",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "travel",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Nouns",
        "sub_subcategory": "Cities_Urban"
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
