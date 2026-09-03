(function() {
    const lang = "en";
    const data = [
    {
            "id": "A2-VERB-HOM-005",
            "word": "bathe",
            "emoji": "🛁",
            "form": "verb",
            "definitions": [
                    {
                            "text": "To wash by immersing one's body in water.",
                            "examples": [
                                    "Bathe in warm water to relax tired muscles.",
                                    "Parents bathed the baby before bedtime."
                            ]
                    }
            ],
            "subtext": "wash, shower",
            "synonyms": [
                    "wash",
                    "shower"
            ],
            "transcription": "beɪð",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "home",
            "domain": "HOME",
            "subcategory": "Rooms",
            "pos_section": "Verbs",
            "sub_subcategory": "Indoor_Rooms"
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
