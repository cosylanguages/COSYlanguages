(function() {
    const lang = "en";
    const data = [
    {
            "id": "A2-NOUN-TIM-047",
            "word": "arrangement",
            "emoji": "📅",
            "form": "noun",
            "definitions": [
                    {
                            "text": "A plan or preparation for a future event.",
                            "examples": [
                                    "Travel arrangements were made well in advance.",
                                    "They have a flexible working arrangement."
                            ]
                    }
            ],
            "subtext": "plan, setup",
            "synonyms": [
                    "plan",
                    "setup"
            ],
            "transcription": "əˈreɪndʒmənt",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "time",
            "domain": "TIME_NUMBERS",
            "subcategory": "Time",
            "pos_section": "Nouns",
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
