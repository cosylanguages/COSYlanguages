(function() {
    const lang = "en";
    const data = [
    {
        "id": "B2-ADJ-SCI-002",
        "word": "preventive",
        "emoji": "🛡️",
        "form": "adjective",
        "transcription": "prɪˈvɛntɪv",
        "subtext": "Formal | preventive medicine / preventive measure / preventive action",
        "definitions": [
            {
                "text": "Designed to stop something bad from happening.",
                "examples": [
                    "Preventive medicine reduces long-term costs.",
                    "They took preventive action to avoid a strike."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "antonyms": [],
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "health_medicine",
        "sub_theme": null,
        "legacy_id": "B2-SCI-04",
        "level_code": "B2",
        "domain": "Science",
        "subcategory": "Biology",
        "pos_section": "Adjectives",
        "sub_subcategory": "Medical_Health"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
