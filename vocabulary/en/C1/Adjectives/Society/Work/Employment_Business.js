(function() {
    const lang = "en";
    const data = [
    {
        "id": "C1-ADJ-SOC-003",
        "word": "legitimate",
        "emoji": "⚖️",
        "subtext": "entirely legitimate / wholly legitimate / a legitimate concern",
        "form": "adjective",
        "transcription": "lɪˈdʒɪtɪmət",
        "definitions": [
            {
                "text": "Lawful; conforming to accepted standards.",
                "examples": [
                    "This is a legitimate concern that must be addressed."
                ]
            }
        ],
        "synonyms": [
            "legal",
            "lawful",
            "valid"
        ],
        "antonyms": [
            "illegitimate",
            "invalid"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "C1-SOC-03",
        "level_code": "C1",
        "domain": "Society",
        "subcategory": "Work",
        "pos_section": "Adjectives",
        "sub_subcategory": "Employment_Business"
    },
    {
        "id": "C1-ADJ-SOC-004",
        "word": "regulatory",
        "emoji": "🛂",
        "subtext": "strict regulatory / a regulatory framework / regulatory approval",
        "form": "adjective",
        "transcription": "ˈreɡjələtəri",
        "definitions": [
            {
                "text": "Relating to official rules and controls.",
                "examples": [
                    "The company must comply with all regulatory requirements."
                ]
            }
        ],
        "synonyms": [
            "supervisory",
            "managerial"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "C1-SOC-04",
        "level_code": "C1",
        "domain": "Society",
        "subcategory": "Work",
        "pos_section": "Adjectives",
        "sub_subcategory": "Employment_Business"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
