(function() {
    const lang = "en";
    const data = [
    {
        "id": "B1-NOUN-SOC-002",
        "word": "commuter",
        "lang": "en",
        "level": "intermediate",
        "theme": "travel",
        "form": "noun",
        "definitions": [
            {
                "text": "A person who travels some distance to work on a regular basis.",
                "examples": [
                    "The train is full of commuters.",
                    "I am a daily commuter."
                ]
            },
            {
                "text": "This person often uses public transport like trains or buses.",
                "examples": [
                    "Commuters often travel during rush hour."
                ]
            }
        ],
        "transcription": "🇬🇧 kəˈmjuːtə | 🇺🇸 kəˈmjuːtər",
        "emoji": "🚆",
        "_legacy": {
            "classification": "regular",
            "plural": "commuters",
            "countability": "countable"
        },
        "legacy_id": "B1-SOC-15",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B1-NOUN-SOC-003",
        "word": "equity",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "The value of a property minus the amount still owed on the mortgage.",
                "examples": [
                    "They have built up significant equity in their home."
                ]
            }
        ],
        "transcription": "ˈɛkwɪti",
        "emoji": "📈",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "home equity, negative equity"
        },
        "legacy_id": "B1-SOC-22",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B1-NOUN-SOC-008",
        "word": "property",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "A building and the land it stands on; also a legal right to own something.",
                "examples": [
                    "Property prices have risen sharply in this city."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈprɒpəti | 🇺🇸 ˈprɑːpəti",
        "emoji": "🏡",
        "_legacy": {
            "classification": "regular",
            "plural": "properties",
            "countability": "countable",
            "subtext": "property market, rental property"
        },
        "legacy_id": "B1-SOC-56",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B1-NOUN-SOC-009",
        "word": "renovation",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "The process of improving a building by repairing or updating it.",
                "examples": [
                    "They spent a year on renovations before moving in."
                ]
            }
        ],
        "transcription": "ˌrɛnəˈveɪʃn",
        "emoji": "🔨",
        "_legacy": {
            "classification": "regular",
            "plural": "renovations",
            "countability": "countable",
            "subtext": "home renovation, undergo renovations"
        },
        "legacy_id": "B1-SOC-62",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B1-NOUN-SOC-010",
        "word": "survey",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "A professional inspection of a property's condition before purchase.",
                "examples": [
                    "The survey revealed serious problems with the roof."
                ]
            }
        ],
        "transcription": "ˈsɜːveɪ",
        "emoji": "📝",
        "_legacy": {
            "classification": "regular",
            "plural": "surveys",
            "countability": "countable",
            "subtext": "property survey, conduct a survey"
        },
        "legacy_id": "B1-SOC-69",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Culture"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
