(function() {
    const data = [
    {
        "word": "bezañ",
        "level": "baby",
        "theme": "personal_identity_A0",
        "emoji": "👤",
        "form": "verb",
        "classification": "irregular",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Bezañ, kaout ur stad pe ur berzh.",
                "examples": [
                    "Me zo skuizh. Ur medisin eo hi."
                ]
            }
        ],
        "v3": "bet"
    },
    {
        "word": "kaout",
        "level": "baby",
        "theme": "personal_identity_A0",
        "emoji": "👜",
        "form": "verb",
        "classification": "irregular",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Perc'hennañ un dra bennak.",
                "examples": [
                    "Ur labour am eus. Ur c'harr en deus."
                ]
            }
        ],
        "v3": "bet"
    },
    {
        "word": "ober",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "form": "verb",
        "classification": "irregular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Seveniñ un obererezh.",
                "examples": [
                    "Ober a ran ma labour-skol."
                ]
            }
        ],
        "v3": "graet"
    },
    {
        "word": "mont",
        "level": "baby",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "form": "verb",
        "classification": "irregular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Diloc'hañ eus ul lec'h d'unan all.",
                "examples": [
                    "Mont a ran d'al labour."
                ]
            }
        ],
        "v3": "aet"
    },
    {
        "word": "debriñ",
        "level": "baby",
        "theme": "basic_foods_A0",
        "emoji": "🍎",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Lakaat boued en e c'henoù hag e lonkañ.",
                "examples": [
                    "Debriñ a reomp koan da seizh eur."
                ]
            }
        ],
        "v3": "debret"
    },
    {
        "word": "evañ",
        "level": "baby",
        "theme": "drinks_A0",
        "emoji": "🥛",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Lakaat dourenn en e c'henoù hag e lonkañ.",
                "examples": [
                    "Evañ a ra kafe bep beure."
                ]
            }
        ],
        "v3": "evet"
    }
];
    const lang = "br";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
