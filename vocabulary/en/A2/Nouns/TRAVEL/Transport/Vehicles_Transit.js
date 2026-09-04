(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-NOUN-TRA-058",
        "word": "vehicle",
        "emoji": "🚘",
        "form": "noun",
        "definitions": [
            {
                "text": "A machine with wheels used for transporting people or goods.",
                "examples": [
                    "Emergency vehicles arrived quickly.",
                    "Park your vehicle in the designated space."
                ]
            }
        ],
        "subtext": "car, transit",
        "synonyms": [
            "car",
            "transit"
        ],
        "transcription": "ˈviːəkl",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "travel",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Vehicles_Transit"
    },
    {
        "id": "A2-NOUN-TRA-069",
        "word": "fuel",
        "emoji": "⛽",
        "form": "noun",
        "definitions": [
            {
                "text": "Material such as coal, gas, or oil burned to produce heat or power.",
                "examples": [
                    "The car ran out of fuel on the highway.",
                    "Wood is used as fuel in stoves."
                ]
            }
        ],
        "subtext": "energy, gas",
        "synonyms": [
            "energy",
            "gas"
        ],
        "transcription": "ˈfjuːəl",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "travel",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Nouns",
        "sub_subcategory": "Vehicles_Transit"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
