(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-OTH-TIM-003",
        "word": "meanwhile",
        "emoji": "⏳",
        "form": "adverb",
        "definitions": [
            {
                "text": "In the intervening period of time.",
                "examples": [
                    "Dinner is cooking; meanwhile, let's set the table.",
                    "He was studying; meanwhile, his brother slept."
                ]
            }
        ],
        "subtext": "in the meantime",
        "synonyms": [
            "in the meantime"
        ],
        "transcription": "ˈmiːnwaɪl",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "time",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A2-OTH-TIM-004",
        "word": "frequently",
        "emoji": "🔄",
        "form": "adverb",
        "definitions": [
            {
                "text": "Regularly or on many occasions.",
                "examples": [
                    "Buses run frequently during peak hours.",
                    "She frequently travels on business."
                ]
            }
        ],
        "subtext": "often, regularly",
        "synonyms": [
            "often",
            "regularly"
        ],
        "transcription": "ˈfriːkwəntli",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "time",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A2-OTH-TIM-005",
        "word": "rarely",
        "emoji": "🌙",
        "form": "adverb",
        "definitions": [
            {
                "text": "Not often; seldom.",
                "examples": [
                    "It rarely snows in this coastal town.",
                    "He rarely eats fast food."
                ]
            }
        ],
        "subtext": "seldom, hardly ever",
        "synonyms": [
            "seldom",
            "hardly ever"
        ],
        "transcription": "ˈreəli",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "time",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
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
