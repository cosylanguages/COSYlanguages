(function() {
    const lang = "en";
    const data = [
    {
        "id": "B1-VERB-PEO-01",
        "word": "worry",
        "lang": "en",
        "level": "intermediate",
        "theme": "emotions",
        "form": "verb",
        "definitions": [
            {
                "text": "To feel anxious about something uncertain.",
                "examples": [
                    "He worries constantly about job security."
                ]
            }
        ],
        "transcription": "ˈwʌri",
        "emoji": "😟",
        "_legacy": {
            "subtext": "worry about / stop worrying / cause worry",
            "classification": "regular",
            "aspect": "stative",
            "v2": "worried",
            "v3": "worried",
            "group": "regular",
            "auxiliary": "have",
            "v4": "worrying"
        },
        "legacy_id": "B1-PPL-12",
        "level_code": "B1",
        "domain": "People",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Emotional_States"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
