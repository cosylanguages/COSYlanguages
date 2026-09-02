(function() {
    const lang = "en";
    const data = [
    {
        "id": "B2-VERB-SOC-01",
        "word": "acquire",
        "emoji": "🤝",
        "form": "verb",
        "transcription": "🇬🇧 əˈkwaɪə | 🇺🇸 əˈkwaɪər",
        "subtext": "Formal | acquire a company / acquire skills / acquire assets",
        "definitions": [
            {
                "text": "To obtain something, especially for a business.",
                "examples": [
                    "The company acquired a smaller competitor for twenty million."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "acquired",
        "v3": "acquired",
        "group": "regular",
        "auxiliary": "have",
        "v4": "acquiring",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "B2-SOC-09",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Employment_Business_Commerce"
    },
    {
        "id": "B2-VERB-SOC-02",
        "word": "depreciate",
        "emoji": "📉",
        "form": "verb",
        "transcription": "dɪˈpriːʃieɪt",
        "subtext": "Formal | depreciate in value / rapidly depreciate / depreciation rate",
        "definitions": [
            {
                "text": "To decrease in value over time.",
                "examples": [
                    "Cars depreciate quickly in the first three years."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "depreciated",
        "v3": "depreciated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "depreciating",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "B2-SOC-11",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Employment_Business_Commerce"
    },
    {
        "id": "B2-VERB-SOC-03",
        "word": "diversify",
        "emoji": "🔀",
        "form": "verb",
        "transcription": "daɪˈvɜːsɪfaɪ",
        "subtext": "Formal | diversify a portfolio / diversify the economy / diversify income",
        "definitions": [
            {
                "text": "To develop a wider range of products, skills or investments.",
                "examples": [
                    "She diversified her investment portfolio to reduce risk."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "diversified",
        "v3": "diversified",
        "group": "regular",
        "auxiliary": "have",
        "v4": "diversifying",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "B2-SOC-12",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Employment_Business_Commerce"
    },
    {
        "id": "B2-VERB-SOC-04",
        "word": "fluctuate",
        "emoji": "📈",
        "form": "verb",
        "transcription": "ˈflʌktʃueɪt",
        "subtext": "Formal | prices fluctuate / exchange rates fluctuate / wildly fluctuate",
        "definitions": [
            {
                "text": "To change frequently and irregularly.",
                "examples": [
                    "Oil prices fluctuated significantly throughout the past year."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "fluctuated",
        "v3": "fluctuated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "fluctuating",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "B2-SOC-13",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Employment_Business_Commerce"
    },
    {
        "id": "B2-VERB-SOC-05",
        "word": "generate",
        "emoji": "⚡",
        "form": "verb",
        "transcription": "ˈdʒɛnəreɪt",
        "subtext": "Formal | generate income / generate jobs / generate growth",
        "definitions": [
            {
                "text": "To produce or create something, especially income.",
                "examples": [
                    "Tourism generates significant revenue for the local economy."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "generated",
        "v3": "generated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "generating",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "B2-SOC-14",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Employment_Business_Commerce"
    },
    {
        "id": "B2-VERB-SOC-06",
        "word": "invest",
        "emoji": "📈",
        "form": "verb",
        "transcription": "ɪnˈvɛst",
        "subtext": "Neutral | invest in property / invest long-term / return on investment",
        "definitions": [
            {
                "text": "To put money into something expecting a return.",
                "examples": [
                    "The firm invested heavily in new technology last year."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invested",
        "v3": "invested",
        "group": "regular",
        "auxiliary": "have",
        "v4": "investing",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "B2-SOC-17",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Employment_Business_Commerce"
    },
    {
        "id": "B2-VERB-SOC-07",
        "word": "redistribute",
        "emoji": "🔄",
        "form": "verb",
        "transcription": "ˌriːdɪˈstrɪbjuːt",
        "subtext": "Formal | redistribute wealth / redistribute income / redistribution policy",
        "definitions": [
            {
                "text": "To share something differently from before.",
                "examples": [
                    "Taxation is a key mechanism used to redistribute wealth."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "redistributed",
        "v3": "redistributed",
        "group": "regular",
        "auxiliary": "have",
        "v4": "redistributing",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "B2-SOC-21",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Employment_Business_Commerce"
    },
    {
        "id": "B2-VERB-SOC-08",
        "word": "stimulate",
        "emoji": "🌱",
        "form": "verb",
        "transcription": "ˈstɪmjuleɪt",
        "subtext": "Formal | stimulate growth / stimulate demand / economic stimulus",
        "definitions": [
            {
                "text": "To encourage activity, growth or development.",
                "examples": [
                    "Low interest rates are designed to stimulate economic growth."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stimulated",
        "v3": "stimulated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "stimulating",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "B2-SOC-22",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Employment_Business_Commerce"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
