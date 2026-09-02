(function() {
    const lang = "en";
    const data = [
    {
        "id": "B2-SOC-01",
        "lang": "en",
        "transcription": "ɪnˈsɛntɪv",
        "level": "upper_intermediate",
        "theme": "work",
        "emoji": "🥕",
        "form": "noun",
        "classification": "regular",
        "plural": "incentives",
        "subtext": "financial incentive, tax incentive",
        "definitions": [
            {
                "text": "Something that motivates a person to take a particular action.",
                "examples": [
                    "Financial incentives can improve productivity.",
                    "The government offers incentives for green energy."
                ]
            }
        ],
        "legacy_id": "en_upper_intermediate_economy_labour_market_001",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work"
    },
    {
        "id": "B2-SOC-02",
        "lang": "en",
        "transcription": "ɔːˈtɒnəmi",
        "level": "upper_intermediate",
        "theme": "work",
        "emoji": "🔓",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "worker autonomy, high degree of autonomy",
        "antonyms": [
            "dependence"
        ],
        "definitions": [
            {
                "text": "The right or ability to act independently.",
                "examples": [
                    "Employees perform better when they have autonomy.",
                    "The region was granted more autonomy."
                ]
            }
        ],
        "legacy_id": "en_upper_intermediate_employment_law_rights_001",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work"
    },
    {
        "id": "B2-SOC-03",
        "lang": "en",
        "transcription": "prɪˈkɛərɪti",
        "level": "upper_intermediate",
        "theme": "work",
        "emoji": "🧗",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "job precarity, social precarity",
        "antonyms": [
            "stability"
        ],
        "definitions": [
            {
                "text": "An insecure and uncertain state of employment or living conditions.",
                "examples": [
                    "The gig economy has increased job precarity.",
                    "They live in a state of financial precarity."
                ]
            }
        ],
        "legacy_id": "en_upper_intermediate_economy_labour_market_002",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work"
    },
    {
        "id": "B2-SOC-04",
        "lang": "en",
        "transcription": "rɪˈdʌndənsi ˈpækɪdʒ",
        "level": "upper_intermediate",
        "theme": "work",
        "emoji": "📦",
        "form": "noun phrase",
        "plural": "redundancy packages",
        "subtext": "severance pay, redundancy deal",
        "definitions": [
            {
                "text": "The money and benefits given when someone loses their job.",
                "examples": [
                    "She received a generous redundancy package.",
                    "The company offered a voluntary redundancy package."
                ]
            }
        ],
        "legacy_id": "en_upper_intermediate_employment_law_rights_002",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work"
    },
    {
        "id": "B2-SOC-05",
        "lang": "en",
        "transcription": "ˌɒntrəprəˈnɜːʃɪp",
        "level": "upper_intermediate",
        "theme": "work",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "social entrepreneurship, startup culture",
        "definitions": [
            {
                "text": "The activity of setting up and running a business.",
                "examples": [
                    "Entrepreneurship requires risk-taking and creativity.",
                    "Courses in entrepreneurship are very popular."
                ]
            }
        ],
        "legacy_id": "en_upper_intermediate_economy_labour_market_003",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work"
    },
    {
        "id": "B2-SOC-06",
        "lang": "en",
        "transcription": "ˌprɒdʌkˈtɪvəti",
        "level": "upper_intermediate",
        "theme": "work",
        "emoji": "⚡",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "increase productivity, level of productivity",
        "definitions": [
            {
                "text": "The rate at which goods are produced or work is completed.",
                "examples": [
                    "Remote work can increase productivity for some people.",
                    "Low productivity is a problem for the economy."
                ]
            }
        ],
        "legacy_id": "en_upper_intermediate_economy_labour_market_004",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work"
    },
    {
        "id": "B2-SOC-07",
        "lang": "en",
        "transcription": "ˈaʊtsɔːsɪŋ",
        "level": "upper_intermediate",
        "theme": "work",
        "emoji": "🌐",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "offshore outsourcing, business process outsourcing",
        "definitions": [
            {
                "text": "Hiring an external company to do work previously done internally.",
                "examples": [
                    "They are outsourcing customer service to reduce costs.",
                    "Outsourcing has led to job losses in the local area."
                ]
            }
        ],
        "legacy_id": "en_upper_intermediate_globalisation_trade_001",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work"
    },
    {
        "id": "B2-SOC-08",
        "lang": "en",
        "word": "GDP",
        "level": "upper_intermediate",
        "theme": "work",
        "emoji": "📈",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "transcription": "ˌdʒiːdiːˈpiː",
        "subtext": "economic output, Gross Domestic Product",
        "definitions": [
            {
                "text": "Gross Domestic Product — the total value of goods and services produced in a country.",
                "examples": [
                    "GDP growth slowed significantly last quarter."
                ]
            }
        ],
        "legacy_id": "en_upper_intermediate_economy_labour_market_016",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work"
    },
    {
        "id": "B2-SOC-09",
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
        "legacy_id": "en_upper_intermediate_economy_labour_market_010",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work"
    },
    {
        "id": "B2-SOC-10",
        "lang": "en",
        "word": "austerity",
        "level": "upper_intermediate",
        "theme": "work",
        "emoji": "📉",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "transcription": "ɔːˈstɛrɪti",
        "subtext": "spending cuts, fiscal policy",
        "definitions": [
            {
                "text": "Government policy of reducing public spending to cut debt.",
                "examples": [
                    "Years of austerity weakened public services."
                ]
            }
        ],
        "legacy_id": "en_upper_intermediate_economy_labour_market_015",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work"
    },
    {
        "id": "B2-SOC-11",
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
        "legacy_id": "en_upper_intermediate_economy_labour_market_011",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work"
    },
    {
        "id": "B2-SOC-12",
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
        "legacy_id": "en_upper_intermediate_economy_labour_market_012",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work"
    },
    {
        "id": "B2-SOC-13",
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
        "legacy_id": "en_upper_intermediate_economy_labour_market_007",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work"
    },
    {
        "id": "B2-SOC-14",
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
        "legacy_id": "en_upper_intermediate_economy_labour_market_005",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work"
    },
    {
        "id": "B2-SOC-15",
        "lang": "en",
        "word": "gig economy",
        "level": "upper_intermediate",
        "theme": "work",
        "emoji": "💼",
        "form": "noun phrase",
        "plural": null,
        "transcription": "🇬🇧 ˈɡɪɡ ɪˌkɒnəmi | 🇺🇸 ˈɡɪɡ ɪˌkɑːnəmi",
        "subtext": "freelance work, flexible working",
        "definitions": [
            {
                "text": "A labour market based on short-term contracts and freelance work rather than permanent jobs.",
                "examples": [
                    "The gig economy offers flexibility but little security."
                ]
            }
        ],
        "legacy_id": "en_upper_intermediate_economy_labour_market_013",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work"
    },
    {
        "id": "B2-SOC-16",
        "lang": "en",
        "word": "inflation",
        "level": "upper_intermediate",
        "theme": "work",
        "emoji": "💸",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "transcription": "ɪnˈfleɪʃn",
        "subtext": "rising prices, cost of living",
        "definitions": [
            {
                "text": "The rate at which the general level of prices rises over time.",
                "examples": [
                    "High inflation reduced the real value of wages."
                ]
            }
        ],
        "legacy_id": "en_upper_intermediate_economy_labour_market_017",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work"
    },
    {
        "id": "B2-SOC-17",
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
        "legacy_id": "en_upper_intermediate_economy_labour_market_009",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work"
    },
    {
        "id": "B2-SOC-18",
        "lang": "en",
        "word": "labour market",
        "level": "upper_intermediate",
        "theme": "work",
        "emoji": "🤝",
        "form": "noun",
        "classification": "regular",
        "plural": "labour markets",
        "transcription": "ˈleɪbə ˈmɑːkɪt",
        "subtext": "job market, workforce",
        "definitions": [
            {
                "text": "The system in which employers and workers negotiate employment and wages.",
                "examples": [
                    "The pandemic fundamentally disrupted the labour market."
                ]
            }
        ],
        "legacy_id": "en_upper_intermediate_economy_labour_market_014",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work"
    },
    {
        "id": "B2-SOC-19",
        "lang": "en",
        "word": "pay transparency",
        "level": "upper_intermediate",
        "theme": "work",
        "emoji": "🪟",
        "form": "noun phrase",
        "plural": null,
        "transcription": "peɪ trænˈspærənsi",
        "subtext": "salary disclosure, pay equality",
        "definitions": [
            {
                "text": "The practice of openly sharing information about employee salaries.",
                "examples": [
                    "Pay transparency can reduce the gender pay gap."
                ]
            }
        ],
        "legacy_id": "en_upper_intermediate_employment_law_rights_003",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work"
    },
    {
        "id": "B2-SOC-20",
        "lang": "en",
        "word": "privatisation",
        "level": "upper_intermediate",
        "theme": "work",
        "emoji": "🏢",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "transcription": "ˌpraɪvətaɪˈzeɪʃn",
        "subtext": "private ownership, deregulation",
        "definitions": [
            {
                "text": "The transfer of services from public to private ownership.",
                "examples": [
                    "The privatisation of water has been controversial."
                ]
            }
        ],
        "legacy_id": "en_upper_intermediate_economy_labour_market_018",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work"
    },
    {
        "id": "B2-SOC-21",
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
        "legacy_id": "en_upper_intermediate_economy_labour_market_006",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work"
    },
    {
        "id": "B2-SOC-22",
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
        "legacy_id": "en_upper_intermediate_economy_labour_market_008",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Work"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
