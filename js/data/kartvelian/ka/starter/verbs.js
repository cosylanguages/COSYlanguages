(function() {
    const lang = "ka";
    const data = [
    {
        "word": "ყოფნა",
        "level": "starter",
        "theme": "grammar_sync",
        "emoji": "📐",
        "form": "verb",
        "definitions": [
            {
                "text": "Verb from grammar reference",
                "examples": []
            }
        ],
        "tenses": {
            "present_simple": {
                "positive": [
                    "ვარ",
                    "ხარ",
                    "არის",
                    "ვართ",
                    "ხართ",
                    "არიან"
                ],
                "negative": [
                    "არ ვარ",
                    "არ ხარ",
                    "არ არის",
                    "არ ვართ",
                    "არ ხართ",
                    "არ არიან"
                ]
            }
        },
        "pronouns": [
            "მე",
            "შენ",
            "ის",
            "ჩვენ",
            "თქვენ",
            "ისინი"
        ],
        "group": "irregular",
        "classification": "irregular",
        "aspect": "stative"
    },
    {
        "word": "ქონა",
        "level": "starter",
        "theme": "grammar_sync",
        "emoji": "📐",
        "form": "verb",
        "definitions": [
            {
                "text": "Verb from grammar reference",
                "examples": []
            }
        ],
        "tenses": {
            "present_simple": {
                "positive": [
                    "მაქვს",
                    "გაქვს",
                    "აქვს",
                    "გვაქვს",
                    "გაქვთ",
                    "აქვთ"
                ],
                "negative": [
                    "არ მაქვს",
                    "არ გაქვს",
                    "არ აქვს",
                    "არ გვაქვს",
                    "არ გაქვთ",
                    "არ აქვთ"
                ]
            }
        },
        "pronouns": [
            "მე",
            "შენ",
            "ის",
            "ჩვენ",
            "თქვენ",
            "ისინი"
        ],
        "group": "irregular",
        "classification": "irregular",
        "aspect": "stative"
    }
];

    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [
        ...(window.verbsData[lang] || []),
        ...data
    ];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [
        ...(window.vocabularyData[lang] || []),
        ...data
    ];
})();