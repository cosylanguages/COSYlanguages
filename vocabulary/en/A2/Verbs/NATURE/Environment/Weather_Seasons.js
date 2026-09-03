(function() {
    const lang = "en";
    const data = [
    {
            "id": "A2-VERB-NAT-022",
            "word": "blow",
            "emoji": "💨",
            "form": "verb",
            "definitions": [
                    {
                            "text": "To move creating an air current (of wind).",
                            "examples": [
                                    "Strong wind blew autumn leaves across the lawn.",
                                    "Blow out the birthday candles."
                            ]
                    }
            ],
            "subtext": "puff, gust",
            "synonyms": [
                    "puff",
                    "gust"
            ],
            "transcription": "bləʊ",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "nature",
            "domain": "NATURE",
            "subcategory": "Environment",
            "pos_section": "Verbs",
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
