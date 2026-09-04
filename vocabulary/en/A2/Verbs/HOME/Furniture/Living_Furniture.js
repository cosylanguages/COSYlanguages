(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-VERB-HOM-002",
        "word": "furnish",
        "emoji": "🛋️",
        "form": "verb",
        "definitions": [
            {
                "text": "To provide a house or room with furniture.",
                "examples": [
                    "They furnished their apartment with modern sofas.",
                    "The room is fully furnished."
                ]
            }
        ],
        "subtext": "equip, fit out",
        "synonyms": [
            "equip",
            "fit out"
        ],
        "transcription": "ˈfɜːnɪʃ",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "home",
        "domain": "HOME",
        "subcategory": "Furniture",
        "pos_section": "Verbs",
        "sub_subcategory": "Living_Furniture"
    },
    {
        "id": "A2-VERB-HOM-003",
        "word": "adjust",
        "emoji": "🔧",
        "form": "verb",
        "definitions": [
            {
                "text": "To alter or move something slightly in order to achieve the desired fit.",
                "examples": [
                    "Adjust the chair height to sit comfortably.",
                    "She adjusted her glasses before reading."
                ]
            }
        ],
        "subtext": "alter, tune",
        "synonyms": [
            "alter",
            "tune"
        ],
        "transcription": "əˈdʒʌst",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "home",
        "domain": "HOME",
        "subcategory": "Furniture",
        "pos_section": "Verbs",
        "sub_subcategory": "Living_Furniture"
    },
    {
        "id": "A2-VERB-HOM-004",
        "word": "alter",
        "emoji": "✂️",
        "form": "verb",
        "definitions": [
            {
                "text": "To change or cause to change in character or composition.",
                "examples": [
                    "She altered her dress to fit better.",
                    "Nothing can alter the final result."
                ]
            }
        ],
        "subtext": "change, modify",
        "synonyms": [
            "change",
            "modify"
        ],
        "transcription": "ˈɔːltə",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "home",
        "domain": "HOME",
        "subcategory": "Furniture",
        "pos_section": "Verbs",
        "sub_subcategory": "Living_Furniture"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
