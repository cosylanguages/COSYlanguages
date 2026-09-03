(function() {
    const lang = "en";
    const data = [
    {
            "id": "A2-VERB-HOM-001",
            "word": "renovate",
            "emoji": "🔨",
            "form": "verb",
            "definitions": [
                    {
                            "text": "To restore a building to a good state of repair.",
                            "examples": [
                                    "They bought an old house and renovated it.",
                                    "The museum was renovated last year."
                            ]
                    }
            ],
            "subtext": "restore, remodel",
            "synonyms": [
                    "restore",
                    "remodel"
            ],
            "transcription": "ˈrenəveɪt",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "home",
            "domain": "HOME",
            "subcategory": "Buildings",
            "pos_section": "Verbs",
            "sub_subcategory": "Housing_Types"
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
