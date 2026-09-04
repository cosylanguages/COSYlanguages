(function() {
    const lang = "en";
    const data = [
    {
        "id": "B1-ADJ-SOC-006",
        "word": "obvious",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Easy to see or understand; clear to everyone.",
                "examples": [
                    "It is obvious that the system needs updating."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈɒbviəs | 🇺🇸 ˈɑːbviəs",
        "emoji": "❓",
        "_legacy": {
            "subtext": "perfectly obvious / very obvious / make obvious"
        },
        "legacy_id": "B1-SOC-48",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Adjectives",
        "sub_subcategory": "General_Culture"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
