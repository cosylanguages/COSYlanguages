(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-NOUN-COM-008",
        "word": "hobby",
        "emoji": "🎨",
        "form": "noun",
        "definitions": [
            {
                "text": "An activity done regularly in one's leisure time for pleasure.",
                "examples": [
                    "Gardening is a relaxing weekend hobby.",
                    "Her hobbies include painting and photography."
                ]
            }
        ],
        "subtext": "pastime, interest",
        "synonyms": [
            "pastime",
            "interest"
        ],
        "transcription": "ˈhɒbi",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "communication",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Hobbies_Pastimes"
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
