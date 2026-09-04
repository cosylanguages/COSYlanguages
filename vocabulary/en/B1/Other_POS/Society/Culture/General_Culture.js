(function() {
    const lang = "en";
    const data = [
    {
        "id": "B1-OTH-SOC-002",
        "word": "as a result",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "phrase",
        "definitions": [
            {
                "text": "Because of this; consequently.",
                "examples": [
                    "He worked hard. As a result, he got a promotion.",
                    "It rained heavily. As a result, the match was cancelled."
                ]
            }
        ],
        "transcription": "æz ə rɪˈzʌlt",
        "emoji": "🔚",
        "_legacy": {
            "subtext": ""
        },
        "legacy_id": "B1-SOC-09",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Other_POS",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B1-OTH-SOC-003",
        "word": "on the other hand",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "phrase",
        "definitions": [
            {
                "text": "Used to introduce a contrasting point.",
                "examples": [
                    "City life is exciting. On the other hand, it is stressful.",
                    "Laptops are portable. On the other hand, they are less powerful."
                ]
            }
        ],
        "transcription": "🇬🇧 ɒn ði ˈʌðə hænd | 🇺🇸 ɑːn ði ˈʌðə hænd",
        "emoji": "⚖️",
        "_legacy": {
            "subtext": ""
        },
        "legacy_id": "B1-SOC-49",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Other_POS",
        "sub_subcategory": "General_Culture"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
