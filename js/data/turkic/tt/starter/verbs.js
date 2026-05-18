(function() {
    const lang = "tt";
    const data = [
    {
        "word": "булу",
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
                    "сың",
                    "дыр",
                    "быз",
                    "сыз",
                    "дырлар"
                ],
                "negative": [
                    "төгелмен",
                    "төгелсең",
                    "төгел",
                    "төгелбез",
                    "төгелсез",
                    "төгелләр"
                ]
            }
        },
        "pronouns": [
            "мин",
            "син",
            "ул",
            "без",
            "сез",
            "алар"
        ],
        "group": "irregular",
        "classification": "irregular",
        "aspect": "stative"
    },
    {
        "word": "ия булу",
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
                    "ия булам",
                    "ия буласың",
                    "ия була",
                    "ия булабыз",
                    "ия буласыз",
                    "ия булалар"
                ],
                "negative": [
                    "ия булмыйм",
                    "ия булмыйсың",
                    "ия булмый",
                    "ия булмыйбыз",
                    "ия булмыйсыз",
                    "ия булмыйлар"
                ]
            }
        },
        "pronouns": [
            "мин",
            "син",
            "ул",
            "без",
            "сез",
            "алар"
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