(function() {
    const lang = "en";
    const data = [
    {
        "id": "B1-ADJ-SCI-002",
        "word": "chronic",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "Lasting a long time; persistent.",
                "examples": [
                    "She suffers from chronic back pain from desk work."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈkrɒnɪk | 🇺🇸 ˈkrɑːnɪk",
        "emoji": "❓",
        "_legacy": {
            "subtext": "chronic illness / chronic pain / chronic stress"
        },
        "legacy_id": "B1-SCI-04",
        "level_code": "B1",
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
