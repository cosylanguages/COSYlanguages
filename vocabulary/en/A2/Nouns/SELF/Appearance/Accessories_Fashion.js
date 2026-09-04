(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-NOUN-SEL-146",
        "word": "jewel",
        "emoji": "💎",
        "form": "noun",
        "definitions": [
            {
                "text": "A precious stone, typically a single crystal or cut stone.",
                "examples": [
                    "Gems and jewels sparkled in the display.",
                    "She wore a necklace set with jewels."
                ]
            }
        ],
        "subtext": "gem, stone",
        "synonyms": [
            "gem",
            "stone"
        ],
        "transcription": "ˈdʒuːəl",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "identity",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Nouns",
        "sub_subcategory": "Accessories_Fashion"
    },
    {
        "id": "A2-NOUN-SEL-152",
        "word": "leather",
        "emoji": "👞",
        "form": "noun",
        "definitions": [
            {
                "text": "A material made from the skin of an animal by tanning.",
                "examples": [
                    "He wore a stylish black leather jacket.",
                    "She bought a genuine leather handbag."
                ]
            }
        ],
        "subtext": "animal hide",
        "synonyms": [
            "animal hide"
        ],
        "transcription": "ˈleðə",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "identity",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Nouns",
        "sub_subcategory": "Accessories_Fashion"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
