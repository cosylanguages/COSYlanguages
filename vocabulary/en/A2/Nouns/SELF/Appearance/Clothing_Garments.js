(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-NOUN-SEL-154",
        "word": "button",
        "emoji": "🔘",
        "form": "noun",
        "definitions": [
            {
                "text": "A small disc sewn onto a garment to fasten it.",
                "examples": [
                    "Fasten the top button of your shirt.",
                    "Press the elevator call button."
                ]
            }
        ],
        "subtext": "fastener, switch",
        "synonyms": [
            "fastener",
            "switch"
        ],
        "transcription": "ˈbʌtn",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "identity",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Nouns",
        "sub_subcategory": "Clothing_Garments"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
