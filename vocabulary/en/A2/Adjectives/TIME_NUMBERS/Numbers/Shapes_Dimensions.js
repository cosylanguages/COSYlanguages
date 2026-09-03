(function() {
    const lang = "en";
    const data = [
    {
            "id": "A2-ADJ-TIM-021",
            "word": "broad",
            "emoji": "📐",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Having an ample distance from side to side; wide.",
                            "examples": [
                                    "The river flows through a broad valley.",
                                    "He has broad shoulders and a wide smile."
                            ]
                    }
            ],
            "subtext": "wide, spacious",
            "synonyms": [
                    "wide",
                    "spacious"
            ],
            "transcription": "brɔːd",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "numbers",
            "domain": "TIME_NUMBERS",
            "subcategory": "Numbers",
            "pos_section": "Adjectives",
            "sub_subcategory": "Shapes_Dimensions"
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
