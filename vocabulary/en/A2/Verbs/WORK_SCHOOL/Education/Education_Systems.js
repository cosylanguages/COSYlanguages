(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-VERB-WOR-001",
        "word": "attend",
        "emoji": "🏛️",
        "form": "verb",
        "definitions": [
            {
                "text": "To be present at an event, meeting, or function.",
                "examples": [
                    "Over one hundred guests attended the wedding.",
                    "Students must attend all morning lectures."
                ]
            }
        ],
        "subtext": "present, join",
        "synonyms": [
            "present",
            "join"
        ],
        "transcription": "əˈtend",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "school",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Verbs",
        "sub_subcategory": "Education_Systems"
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
