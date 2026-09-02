(function() {
    const lang = "en";
    const data = [
    {
        "id": "B1-NOUN-SOC-01",
        "word": "airport",
        "lang": "en",
        "level": "intermediate",
        "theme": "travel",
        "form": "noun",
        "definitions": [
            {
                "text": "A place where planes land and take off.",
                "examples": [
                    "I am going to the airport.",
                    "The airport is very big."
                ]
            },
            {
                "text": "This is the place where you go to catch a flight.",
                "examples": [
                    "We need to be at the airport two hours before the flight."
                ]
            }
        ],
        "transcription": "ˈeəpɔːt",
        "emoji": "✈️",
        "_legacy": {
            "classification": "regular",
            "plural": "airports",
            "countability": "countable"
        },
        "legacy_id": "B1-SOC-04",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B1-NOUN-SOC-02",
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
        "id": "B1-NOUN-SOC-03",
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
        "id": "B1-NOUN-SOC-04",
        "word": "garden",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "A public garden or large green area in a city for everyone to use.",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "🌳",
        "_legacy": {
            "image": "images/vocabulary/places/garden.png",
            "classification": "regular",
            "countability": "countable"
        },
        "legacy_id": "B1-SOC-27",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B1-NOUN-SOC-05",
        "word": "library",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "ˈlaɪbrəri",
        "emoji": "📚",
        "_legacy": {
            "explanation": "A library is a place for books, while the others might be related to food or travel.",
            "classification": "regular",
            "plural": "libraries",
            "countability": "countable"
        },
        "legacy_id": "B1-SOC-38",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B1-NOUN-SOC-06",
        "word": "mortgage",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "A bank loan secured against a property, repaid over many years.",
                "examples": [
                    "The mortgage is spread over twenty-five years."
                ]
            }
        ],
        "transcription": "ˈmɔːɡɪdʒ",
        "emoji": "🏠",
        "_legacy": {
            "classification": "regular",
            "plural": "mortgages",
            "countability": "countable",
            "subtext": "take out a mortgage, pay off a mortgage"
        },
        "legacy_id": "B1-SOC-45",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B1-NOUN-SOC-07",
        "word": "museum",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "mjuˈziːəm",
        "emoji": "🏛️",
        "_legacy": {
            "classification": "regular",
            "plural": "museums",
            "countability": "countable"
        },
        "legacy_id": "B1-SOC-46",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B1-NOUN-SOC-08",
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
        "id": "B1-NOUN-SOC-09",
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
        "id": "B1-NOUN-SOC-10",
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
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
