(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-ADJ-TIM-020",
        "word": "ancient",
        "emoji": "🏛️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Belonging to the very distant past.",
                "examples": [
                    "We toured ancient Greek ruins in Athens.",
                    "Ancient trees stood tall in the forest."
                ]
            }
        ],
        "subtext": "historic, old",
        "synonyms": [
            "historic",
            "old"
        ],
        "transcription": "ˈeɪnʃənt",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "time",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Adjectives",
        "sub_subcategory": "Dates_Years"
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
