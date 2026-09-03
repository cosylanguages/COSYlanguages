(function() {
    const lang = "en";
    const data = [
    {
            "id": "A2-ADJ-HOM-003",
            "word": "architectural",
            "emoji": "🏛️",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Relating to the art or practice of designing buildings.",
                            "examples": [
                                    "Rome is famous for architectural heritage.",
                                    "The building won architectural awards."
                            ]
                    }
            ],
            "subtext": "structural, design",
            "synonyms": [
                    "structural",
                    "design"
            ],
            "transcription": "ˌɑːkɪˈtektʃərəl",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "home",
            "domain": "HOME",
            "subcategory": "Buildings",
            "pos_section": "Adjectives",
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
