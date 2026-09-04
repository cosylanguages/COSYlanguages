(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-VERB-SEL-095",
        "word": "bend",
        "emoji": "🧘",
        "form": "verb",
        "definitions": [
            {
                "text": "To shape or force something straight into a curve or angle.",
                "examples": [
                    "Bend your knees when lifting heavy boxes.",
                    "The river bends sharply to the east."
                ]
            }
        ],
        "subtext": "flex, curve",
        "synonyms": [
            "flex",
            "curve"
        ],
        "transcription": "bend",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "identity",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Verbs",
        "sub_subcategory": "Body_Parts"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
