(function() {
    const lang = "en";
    const data = [
    {
        "id": "B1-OTH-SOC-001",
        "word": "although",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "conjunction",
        "definitions": [
            {
                "text": "In spite of the fact that; even though.",
                "examples": [
                    "Although she is tired, she goes to the gym.",
                    "Although it was raining, we went for a walk."
                ]
            }
        ],
        "transcription": "\ud83c\uddec\ud83c\udde7 \u0254\u02d0l\u02c8\u00f0\u0259\u028a | \ud83c\uddfa\ud83c\uddf8 \u0254\u02d0l\u02c8\u00f0o\u028a",
        "emoji": "\ud83d\udd04",
        "_legacy": {
            "subtext": "even though, despite the fact"
        },
        "legacy_id": "B1-SOC-06",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Other_POS",
        "sub_subcategory": "General_Culture"
    },
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
        "transcription": "\u00e6z \u0259 r\u026a\u02c8z\u028clt",
        "emoji": "\ud83d\udd1a",
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
        "transcription": "\ud83c\uddec\ud83c\udde7 \u0252n \u00f0i \u02c8\u028c\u00f0\u0259 h\u00e6nd | \ud83c\uddfa\ud83c\uddf8 \u0251\u02d0n \u00f0i \u02c8\u028c\u00f0\u0259 h\u00e6nd",
        "emoji": "\u2696\ufe0f",
        "_legacy": {
            "subtext": ""
        },
        "legacy_id": "B1-SOC-49",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Other_POS",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B1-OTH-SOC-007",
        "word": "shop daily",
        "emoji": "\ud83d\udcd6",
        "form": "adverb",
        "subtext": "to buy food every day.",
        "definitions": [
            {
                "text": "to buy food every day.",
                "examples": [
                    "Without a fridge, people must shop daily."
                ]
            }
        ],
        "transcription": "\u0283\u02c8\u0251p d\u02c8e\u026ali",
        "lang": "en",
        "level": "intermediate",
        "theme": "culture",
        "sub_theme": "general_culture",
        "antonyms": [],
        "legacy_id": "EVENT-life-fridge-life",
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
    if (typeof module !== "undefined" && module.exports) {
        module.exports = data;
    }
})();
