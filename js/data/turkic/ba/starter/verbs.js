(function() {
    const lang = "ba";
    const data = [
    {
        "word": "булыу",
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
                    "мын",
                    "һың",
                    "дыр",
                    "быҙ",
                    "һығыҙ",
                    "дырҙар"
                ],
                "negative": [
                    "төгелмен",
                    "төгелһең",
                    "төгел",
                    "төгелбеҙ",
                    "төгелһегеҙ",
                    "төгелләр"
                ]
            }
        },
        "pronouns": [
            "мин",
            "син",
            "ул",
            "беҙ",
            "һеҙ",
            "улар"
        ],
        "group": "irregular",
        "classification": "irregular",
        "aspect": "stative"
    },
    {
        "word": "эйә булыу",
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
                    "эйә булам",
                    "эйә булаһың",
                    "эйә була",
                    "эйә булабыҙ",
                    "эйә булаһығыҙ",
                    "эйә булалар"
                ],
                "negative": [
                    "эйә булмайым",
                    "эйә булмайһың",
                    "эйә булмай",
                    "эйә булмайбыҙ",
                    "эйә булмайһығыҙ",
                    "эйә булмайҙар"
                ]
            }
        },
        "pronouns": [
            "мин",
            "син",
            "ул",
            "беҙ",
            "һеҙ",
            "улар"
        ],
        "group": "regular",
        "classification": "regular",
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