(function() {
    const lang = "en";
    const data = [
    {
            "id": "A2-ADJ-TIM-020",
            "word": "big",
            "emoji": "🐘",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Of considerable size or extent.",
                            "examples": [
                                    "They live in a big house near the park.",
                                    "A big crowd gathered outside."
                            ]
                    }
            ],
            "subtext": "large, huge",
            "synonyms": [
                    "large",
                    "huge"
            ],
            "transcription": "bɪɡ",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "numbers",
            "domain": "TIME_NUMBERS",
            "subcategory": "Numbers",
            "pos_section": "Adjectives",
            "sub_subcategory": "Sizes_Units"
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
