(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-VERB-TIM-021",
        "word": "postpone",
        "emoji": "🗓️",
        "form": "verb",
        "definitions": [
            {
                "text": "To cause or arrange for something to take place at a later time.",
                "examples": [
                    "The match was postponed due to heavy rain.",
                    "Never postpone until tomorrow what you can do today."
                ]
            }
        ],
        "subtext": "delay, put off",
        "synonyms": [
            "delay",
            "put off"
        ],
        "transcription": "pəˈspəʊn",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "time",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Verbs",
        "sub_subcategory": "Days_Schedule"
    },
    {
        "id": "A2-VERB-TIM-022",
        "word": "anticipate",
        "emoji": "🔮",
        "form": "verb",
        "definitions": [
            {
                "text": "To regard as probable; to expect or predict.",
                "examples": [
                    "We anticipate a large turnout at the concert.",
                    "Experts anticipate lower oil prices."
                ]
            }
        ],
        "subtext": "expect, predict",
        "synonyms": [
            "expect",
            "predict"
        ],
        "transcription": "ænˈtɪsɪpeɪt",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "time",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Verbs",
        "sub_subcategory": "Days_Schedule"
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
