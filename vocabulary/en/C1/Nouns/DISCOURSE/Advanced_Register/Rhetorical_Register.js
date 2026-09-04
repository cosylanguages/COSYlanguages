(function() {
    const lang = "en";
    const data = [
    {
        "word": "data scientist",
        "level": "advanced",
        "theme": "advanced_register_c1",
        "emoji": "📊",
        "form": "noun",
        "classification": "regular",
        "plural": "data scientists",
        "transcription": "ˈdeɪtə ˈsaɪəntɪst",
        "definitions": [
            {
                "text": "A person who analyzes data to find patterns and insights.",
                "examples": [
                    "The data scientist is using machine learning.",
                    "Data scientists help companies make better decisions."
                ]
            }
        ],
        "lang": "en",
        "id": "C1-NOUN-DIS-001",
        "legacy_id": "C1-DIS-01",
        "level_code": "C1",
        "domain": "DISCOURSE",
        "subcategory": "Advanced_Register",
        "pos_section": "Nouns",
        "sub_subcategory": "Rhetorical_Register"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
