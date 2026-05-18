(function() {
    const lang = "de";
    const data = [
    {
        "word": "sein",
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
                    "bin",
                    "bist",
                    "ist",
                    "ist",
                    "ist",
                    "sind"
                ],
                "negative": [
                    "bin nicht",
                    "bist nicht",
                    "ist nicht",
                    "ist nicht",
                    "ist nicht",
                    "sind nicht"
                ]
            }
        },
        "pronouns": [
            "ich",
            "du",
            "er / sie / es",
            "wir",
            "ihr",
            "sie / Sie"
        ],
        "group": "irregular",
        "classification": "irregular",
        "aspect": "stative"
    },
    {
        "word": "haben",
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
                    "habe",
                    "hast",
                    "hat",
                    "hat",
                    "hat",
                    "haben"
                ],
                "negative": [
                    "habe nicht",
                    "hast nicht",
                    "hat nicht",
                    "hat nicht",
                    "hat nicht",
                    "haben nicht"
                ]
            }
        },
        "pronouns": [
            "ich",
            "du",
            "er / sie / es",
            "wir",
            "ihr",
            "sie / Sie"
        ],
        "group": "irregular",
        "classification": "irregular",
        "aspect": "stative"
    },
    {
        "word": "arbeiten",
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
                    "arbeite",
                    "arbeitest",
                    "arbeitet",
                    "arbeitet",
                    "arbeitet",
                    "arbeiten"
                ],
                "negative": [
                    "arbeite nicht",
                    "arbeitest nicht",
                    "arbeitet nicht",
                    "arbeitet nicht",
                    "arbeitet nicht",
                    "arbeiten nicht"
                ]
            }
        },
        "pronouns": [
            "ich",
            "du",
            "er / sie / es",
            "wir",
            "ihr",
            "sie / Sie"
        ],
        "group": "en",
        "classification": "regular",
        "aspect": "action"
    },
    {
        "word": "machen",
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
                    "mache",
                    "machst",
                    "macht",
                    "macht",
                    "macht",
                    "machen"
                ],
                "negative": [
                    "mache nicht",
                    "machst nicht",
                    "macht nicht",
                    "macht nicht",
                    "macht nicht",
                    "machen nicht"
                ]
            }
        },
        "pronouns": [
            "ich",
            "du",
            "er / sie / es",
            "wir",
            "ihr",
            "sie / Sie"
        ],
        "group": "en",
        "classification": "regular",
        "aspect": "action"
    },
    {
        "word": "gehen",
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
                    "gehe",
                    "gehst",
                    "geht",
                    "geht",
                    "geht",
                    "gehen"
                ],
                "negative": [
                    "gehe nicht",
                    "gehst nicht",
                    "geht nicht",
                    "geht nicht",
                    "geht nicht",
                    "gehen nicht"
                ]
            }
        },
        "pronouns": [
            "ich",
            "du",
            "er / sie / es",
            "wir",
            "ihr",
            "sie / Sie"
        ],
        "group": "en",
        "classification": "irregular",
        "aspect": "action"
    },
    {
        "word": "essen",
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
                    "esse",
                    "isst",
                    "isst",
                    "isst",
                    "isst",
                    "essen"
                ],
                "negative": [
                    "esse nicht",
                    "isst nicht",
                    "isst nicht",
                    "isst nicht",
                    "isst nicht",
                    "essen nicht"
                ]
            }
        },
        "pronouns": [
            "ich",
            "du",
            "er / sie / es",
            "wir",
            "ihr",
            "sie / Sie"
        ],
        "group": "en",
        "classification": "irregular",
        "aspect": "action"
    },
    {
        "word": "sprechen",
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
                    "spreche",
                    "sprichst",
                    "spricht",
                    "spricht",
                    "spricht",
                    "sprechen"
                ],
                "negative": [
                    "spreche nicht",
                    "sprichst nicht",
                    "spricht nicht",
                    "spricht nicht",
                    "spricht nicht",
                    "sprechen nicht"
                ]
            }
        },
        "pronouns": [
            "ich",
            "du",
            "er / sie / es",
            "wir",
            "ihr",
            "sie / Sie"
        ],
        "group": "en",
        "classification": "irregular",
        "aspect": "action"
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