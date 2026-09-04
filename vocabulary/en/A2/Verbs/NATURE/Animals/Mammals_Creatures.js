(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-VERB-NAT-001",
        "word": "bite",
        "emoji": "🦷",
        "form": "verb",
        "subtext": "bite food / dog bite",
        "definitions": [
            {
                "text": "To use your teeth to cut into something.",
                "examples": [
                    "The dog bit the man."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "bit",
        "v3": "bitten",
        "transcription": "baɪt",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "elementary",
        "theme": "animals",
        "sub_theme": null,
        "legacy_id": "A2-NAT-01",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Animals",
        "pos_section": "Verbs",
        "sub_subcategory": "Mammals_Creatures"
    },
    {
        "id": "A2-VERB-NAT-002",
        "word": "survive",
        "emoji": "🐾",
        "form": "verb",
        "definitions": [
            {
                "text": "To continue to live or exist despite danger.",
                "examples": [
                    "Desert plants survive long droughts.",
                    "Few animals survived the harsh winter."
                ]
            }
        ],
        "subtext": "endure, live on",
        "synonyms": [
            "endure",
            "live on"
        ],
        "transcription": "səˈvaɪv",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "nature",
        "domain": "NATURE",
        "subcategory": "Animals",
        "pos_section": "Verbs",
        "sub_subcategory": "Mammals_Creatures"
    },
    {
        "id": "A2-VERB-NAT-003",
        "word": "adapt",
        "emoji": "🦎",
        "form": "verb",
        "definitions": [
            {
                "text": "To make something suitable for a new use or purpose.",
                "examples": [
                    "Animals adapt to harsh winter climates.",
                    "It takes time to adapt to a new country."
                ]
            }
        ],
        "subtext": "adjust, modify",
        "synonyms": [
            "adjust",
            "modify"
        ],
        "transcription": "əˈdæpt",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "nature",
        "domain": "NATURE",
        "subcategory": "Animals",
        "pos_section": "Verbs",
        "sub_subcategory": "Mammals_Creatures"
    },
    {
        "id": "A2-VERB-NAT-004",
        "word": "attack",
        "emoji": "🐅",
        "form": "verb",
        "definitions": [
            {
                "text": "To take aggressive action against a place or person.",
                "examples": [
                    "Wild animals rarely attack unless threatened.",
                    "The army attacked at dawn."
                ]
            }
        ],
        "subtext": "assault, strike",
        "synonyms": [
            "assault",
            "strike"
        ],
        "transcription": "əˈtæk",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "nature",
        "domain": "NATURE",
        "subcategory": "Animals",
        "pos_section": "Verbs",
        "sub_subcategory": "Mammals_Creatures"
    },
    {
        "id": "A2-VERB-NAT-005",
        "word": "bark",
        "emoji": "🐕",
        "form": "verb",
        "definitions": [
            {
                "text": "To utter a sharp explosive cry (of a dog).",
                "examples": [
                    "The dog barked loudly at the mail carrier.",
                    "Neighborhood dogs barked through the night."
                ]
            }
        ],
        "subtext": "yelp, bay",
        "synonyms": [
            "yelp",
            "bay"
        ],
        "transcription": "bɑːk",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "nature",
        "domain": "NATURE",
        "subcategory": "Animals",
        "pos_section": "Verbs",
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
