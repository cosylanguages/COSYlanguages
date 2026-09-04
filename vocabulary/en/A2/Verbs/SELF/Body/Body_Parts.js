(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-VERB-SEL-051",
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
    },
    {
        "id": "A2-VERB-SEL-052",
        "word": "bleed",
        "emoji": "🩸",
        "form": "verb",
        "definitions": [
            {
                "text": "To lose blood from the vascular system.",
                "examples": [
                    "Clean the cut if it starts to bleed.",
                    "His nose bled after being struck by the ball."
                ]
            }
        ],
        "subtext": "shed blood",
        "synonyms": [
            "shed blood"
        ],
        "transcription": "bliːd",
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

    if (typeof window !== 'undefined') {
        window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData.en = (window.vocabularyData.en || []).concat(data);
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = data;
    }
})();
