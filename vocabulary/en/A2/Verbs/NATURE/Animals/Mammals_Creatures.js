(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-VERB-NAT-001",
        "word": "bite",
        "emoji": "\ud83e\uddb7",
        "form": "verb",
        "subtext": "bite food / dog bite",
        "definitions": [
            {
                "text": "To use your teeth to cut into something.",
                "examples": [
                    "The dog bit the man."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "bit",
        "v3": "bitten",
        "transcription": "ba\u026at",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "elementary",
        "theme": "animals",
        "sub_theme": null,
        "legacy_id": "A2-NAT-01",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Animals",
        "pos_section": "Verbs",
        "sub_subcategory": "Mammals_Creatures"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
