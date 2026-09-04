(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-ADJ-COM-005",
        "word": "aesthetic",
        "emoji": "🎨",
        "form": "adjective",
        "definitions": [
            {
                "text": "Concerned with beauty or the appreciation of beauty.",
                "examples": [
                    "The building has great aesthetic appeal.",
                    "Consider aesthetic design alongside functionality."
                ]
            }
        ],
        "subtext": "artistic, beautiful",
        "synonyms": [
            "artistic",
            "beautiful"
        ],
        "transcription": "iːsˈθetɪk",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "communication",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Adjectives",
        "sub_subcategory": "Literature_Books"
    },
    {
        "id": "A2-ADJ-COM-008",
        "word": "artistic",
        "emoji": "🎨",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having or revealing natural creative skill.",
                "examples": [
                    "She shows remarkable artistic talent.",
                    "The photography has great artistic merit."
                ]
            }
        ],
        "subtext": "creative, talented",
        "synonyms": [
            "creative",
            "talented"
        ],
        "transcription": "ɑːˈtɪstɪk",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "communication",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Adjectives",
        "sub_subcategory": "Literature_Books"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
