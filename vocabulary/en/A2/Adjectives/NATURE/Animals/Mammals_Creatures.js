(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-ADJ-NAT-001",
        "word": "tame",
        "emoji": "🐈",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not wild; comfortable around humans.",
                "examples": [
                    "The bird is very tame and will sit on your hand."
                ]
            }
        ],
        "subtext": "tame animal / very tame",
        "synonyms": [
            "domesticated"
        ],
        "comparative": "tamer",
        "superlative": "the tamest",
        "transcription": "teɪm",
        "lang": "en",
        "level": "elementary",
        "theme": "animals",
        "sub_theme": null,
        "legacy_id": "A2-NAT-03",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Animals",
        "pos_section": "Adjectives",
        "sub_subcategory": "Mammals_Creatures"
    },
    {
        "id": "A2-ADJ-NAT-002",
        "word": "wild",
        "emoji": "🦁",
        "form": "adjective",
        "definitions": [
            {
                "text": "Living or growing in nature; not controlled by humans.",
                "examples": [
                    "I saw some wild animals in the forest."
                ]
            }
        ],
        "subtext": "wild flowers / wild cats",
        "synonyms": [
            "natural"
        ],
        "comparative": "wilder",
        "superlative": "the wildest",
        "transcription": "waɪld",
        "lang": "en",
        "level": "elementary",
        "theme": "animals",
        "sub_theme": null,
        "legacy_id": "A2-NAT-05",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Animals",
        "pos_section": "Adjectives",
        "sub_subcategory": "Mammals_Creatures"
    }
];

    if (typeof window !== 'undefined') {
        window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData.en = (window.vocabularyData.en || []).concat(data);
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = data;
    }
})();
