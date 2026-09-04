(function() {
    const lang = "en";
    const data = [
    {
        "id": "B1-ADJ-SOC-013",
        "word": "national",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to a whole country.",
                "examples": [
                    "The new policy will affect national healthcare."
                ]
            }
        ],
        "transcription": "ˈnæʃnəl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "national interest / national policy / on a national level"
        },
        "legacy_id": "B1-SOC-47",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Adjectives",
        "sub_subcategory": "Social_Relations"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
