(function() {
    const lang = "hy";
    const data = [
    {
        "word": "լինել",
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
                    "եմ",
                    "ես",
                    "է",
                    "ենք",
                    "եք",
                    "են"
                ],
                "negative": [
                    "չեմ",
                    "չես",
                    "չէ",
                    "չենք",
                    "չեք",
                    "չեն"
                ]
            }
        },
        "pronouns": [
            "ես",
            "դու",
            "նա",
            "մենք",
            "դուք",
            "նրանք"
        ],
        "group": "irregular",
        "classification": "irregular",
        "aspect": "stative"
    },
    {
        "word": "ունենալ",
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
                    "ունեմ",
                    "ունես",
                    "ունի",
                    "ունենք",
                    "ունեք",
                    "ունեն"
                ],
                "negative": [
                    "չունեմ",
                    "չունես",
                    "չունի",
                    "չունենք",
                    "չունեք",
                    "չունեն"
                ]
            }
        },
        "pronouns": [
            "ես",
            "դու",
            "նա",
            "մենք",
            "դուք",
            "նրանք"
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