(function() {
    const lang = "br";
    const data = [
    {
        "word": "bezañ",
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
                    "on",
                    "out",
                    "eo",
                    "eo",
                    "omp",
                    "oc'h"
                ],
                "negative": [
                    "n'on ket",
                    "n'out ket",
                    "n'eo ket",
                    "n'eo ket",
                    "n'omp ket",
                    "n'oc'h ket"
                ]
            }
        },
        "pronouns": [
            "me",
            "te",
            "eñ / hi",
            "ni",
            "c'hwi",
            "int"
        ],
        "group": "irregular",
        "classification": "irregular",
        "aspect": "stative"
    },
    {
        "word": "kaout",
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
                    "am eus",
                    "az peus",
                    "en deus",
                    "he deus",
                    "hon eus",
                    "ho peus"
                ],
                "negative": [
                    "n'am eus ket",
                    "n'az peus ket",
                    "n'en deus ket",
                    "n'he deus ket",
                    "n'hon eus ket",
                    "n'ho peus ket"
                ]
            }
        },
        "pronouns": [
            "me",
            "te",
            "eñ / hi",
            "ni",
            "c'hwi",
            "int"
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