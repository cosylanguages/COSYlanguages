(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-VERB-FOO-01",
        "word": "contain",
        "emoji": "📦",
        "form": "verb",
        "subtext": "contain sugar / contain information / the box contains",
        "definitions": [
            {
                "text": "To have something inside or include something as a part.",
                "examples": [
                    "This drink contains a lot of sugar.",
                    "The letter contains important news."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "contained",
        "v3": "contained",
        "transcription": "kənˈteɪn",
        "synonyms": [
            "include",
            "hold"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "containing",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A2-FOOD-05",
        "level_code": "A2",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Verbs",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A2-VERB-FOO-02",
        "word": "cut down on",
        "emoji": "📉",
        "form": "verb",
        "subtext": "cut down on spending / cut down on sugar",
        "synonyms": [
            "cut costs"
        ],
        "definitions": [
            {
                "text": "To reduce the amount of something you do or consume.",
                "examples": [
                    "She cut down on caffeine to improve her sleep."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "cut down on",
        "v3": "cut down on",
        "transcription": "🇬🇧 kʌt daʊn ɒn | 🇺🇸 kʌt daʊn ɑːn",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A2-FOOD-06",
        "level_code": "A2",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Verbs",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A2-VERB-FOO-03",
        "word": "deliver",
        "emoji": "📦",
        "form": "verb",
        "subtext": "deliver food / deliver a package / deliver a speech",
        "definitions": [
            {
                "text": "To take goods, letters, parcels, etc. to people's houses or places of work.",
                "examples": [
                    "The mail is delivered every morning.",
                    "Can you deliver the pizza to my house?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "delivered",
        "v3": "delivered",
        "transcription": "dɪˈlɪvər",
        "synonyms": [
            "bring",
            "send"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "delivering",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A2-FOOD-07",
        "level_code": "A2",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Verbs",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A2-VERB-FOO-04",
        "word": "diagnose",
        "emoji": "🩺",
        "form": "verb",
        "subtext": "diagnose an illness / diagnose early",
        "synonyms": [
            "be diagnosed with"
        ],
        "definitions": [
            {
                "text": "To identify an illness or problem after examination.",
                "examples": [
                    "The doctor diagnosed her with high blood pressure."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "diagnosed",
        "v3": "diagnosed",
        "transcription": "ˌdaɪəɡˈnoʊs",
        "group": "regular",
        "auxiliary": "have",
        "v4": "diagnosing",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A2-FOOD-08",
        "level_code": "A2",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Verbs",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A2-VERB-FOO-05",
        "word": "lose weight",
        "emoji": "⚖️",
        "form": "verb",
        "subtext": "lose weight / lose a few kilos / trying to lose weight",
        "definitions": [
            {
                "text": "To become lighter; to reduce body weight.",
                "examples": [
                    "He lost ten kilos after changing his diet and lifestyle."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "lost weight",
        "v3": "lost weight",
        "transcription": "luːz weɪt",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A2-FOOD-13",
        "level_code": "A2",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Verbs",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A2-VERB-FOO-06",
        "word": "prevent",
        "emoji": "🛡️",
        "form": "verb",
        "subtext": "prevent illness / prevent disease / take steps to prevent",
        "definitions": [
            {
                "text": "To stop something bad from happening.",
                "examples": [
                    "Exercise and diet can prevent many common illnesses."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "prevented",
        "v3": "prevented",
        "transcription": "prɪˈvɛnt",
        "synonyms": [
            "stop"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "preventing",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A2-FOOD-16",
        "level_code": "A2",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Verbs",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A2-VERB-FOO-07",
        "word": "serve",
        "emoji": "🍽️",
        "form": "verb",
        "subtext": "serve food, serve a purpose",
        "definitions": [
            {
                "text": "To provide food or a service.",
                "examples": [
                    "They serve breakfast until 11 am."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "served",
        "v3": "served",
        "transcription": "sɜːrv",
        "synonyms": [
            "give",
            "help"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "serving",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A2-FOOD-19",
        "level_code": "A2",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Verbs",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A2-VERB-FOO-08",
        "word": "treat",
        "emoji": "🩹",
        "form": "verb",
        "subtext": "treat a patient / treat an illness / treat with medicine",
        "definitions": [
            {
                "text": "To give medical care to someone who is ill or injured.",
                "examples": [
                    "The specialist treated his knee injury with physiotherapy."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "treated",
        "v3": "treated",
        "transcription": "triːt",
        "synonyms": [
            "handle"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "treating",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A2-FOOD-22",
        "level_code": "A2",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Verbs",
        "sub_subcategory": "Food_Beverages"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
