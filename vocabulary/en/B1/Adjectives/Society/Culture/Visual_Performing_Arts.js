(function() {
    const lang = "en";
    const data = [
    {
        "id": "B1-ADJ-SOC-017",
        "word": "original",
        "lang": "en",
        "level": "intermediate",
        "theme": "art_culture",
        "form": "adjective",
        "definitions": [
            {
                "text": "New and creative; not a copy.",
                "examples": [
                    "Her proposal was very original and well received."
                ]
            }
        ],
        "transcription": "əˈrɪdʒənl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very original / completely original / an original idea"
        },
        "legacy_id": "B1-SOC-51",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Adjectives",
        "sub_subcategory": "Visual_Performing_Arts"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
