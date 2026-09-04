(function() {
    const lang = "en";
    const data = [
    {
        "id": "B1-VERB-SCI-002",
        "word": "resent",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "verb",
        "definitions": [
            {
                "text": "To feel bitter or angry about something you consider unfair.",
                "examples": [
                    "He resents the fact that junior colleagues earn more."
                ]
            }
        ],
        "transcription": "rɪˈzɛnt",
        "emoji": "😠",
        "_legacy": {
            "subtext": "resent something / resent someone / feel resentment",
            "classification": "regular",
            "aspect": "stative",
            "v2": "resented",
            "v3": "resented",
            "group": "regular",
            "auxiliary": "have",
            "v4": "resenting"
        },
        "legacy_id": "B1-SCI-16",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Biology",
        "pos_section": "Verbs",
        "sub_subcategory": "Medical_Health"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
