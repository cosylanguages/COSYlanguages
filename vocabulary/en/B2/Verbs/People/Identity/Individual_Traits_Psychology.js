(function() {
    const lang = "en";
    const data = [
    {
        "id": "B2-VERB-PEO-01",
        "word": "allocate",
        "emoji": "💰",
        "form": "verb",
        "transcription": "ˈæləkeɪt",
        "subtext": "Formal | allocate resources / allocate funding / allocate responsibility",
        "definitions": [
            {
                "text": "To distribute resources for a specific purpose.",
                "examples": [
                    "The budget allocates more funding to mental health services."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "allocated",
        "v3": "allocated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "allocating",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "people",
        "sub_theme": null,
        "legacy_id": "B2-PPL-09",
        "level_code": "B2",
        "domain": "People",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "Individual_Traits_Psychology"
    },
    {
        "id": "B2-VERB-PEO-02",
        "word": "ban",
        "emoji": "🚫",
        "form": "verb",
        "transcription": "bæn",
        "subtext": "Neutral | ban something / ban the use of / impose a ban",
        "definitions": [
            {
                "text": "To officially forbid something.",
                "examples": [
                    "The city has banned single-use plastics in all public venues."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "banned",
        "v3": "banned",
        "group": "regular",
        "auxiliary": "have",
        "v4": "baning",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "people",
        "sub_theme": null,
        "legacy_id": "B2-PPL-10",
        "level_code": "B2",
        "domain": "People",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "Individual_Traits_Psychology"
    },
    {
        "id": "B2-VERB-PEO-03",
        "word": "enforce",
        "emoji": "👮",
        "form": "verb",
        "transcription": "ɪnˈfɔːs",
        "subtext": "Formal | enforce a law / strictly enforce / difficult to enforce",
        "definitions": [
            {
                "text": "To compel people to comply with a law or rule.",
                "examples": [
                    "The new regulations will be difficult to enforce in practice."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "enforced",
        "v3": "enforced",
        "group": "regular",
        "auxiliary": "have",
        "v4": "enforcing",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "people",
        "sub_theme": null,
        "legacy_id": "B2-PPL-24",
        "level_code": "B2",
        "domain": "People",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "Individual_Traits_Psychology"
    },
    {
        "id": "B2-VERB-PEO-04",
        "word": "implement",
        "emoji": "⚙️",
        "form": "verb",
        "transcription": "ˈɪmplɪmɛnt",
        "subtext": "Formal | implement a policy / implement changes / implementation plan",
        "definitions": [
            {
                "text": "To put a decision or policy into effect.",
                "examples": [
                    "The new data protection rules will be implemented in spring."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "implemented",
        "v3": "implemented",
        "group": "regular",
        "auxiliary": "have",
        "v4": "implementing",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "people",
        "sub_theme": null,
        "legacy_id": "B2-PPL-26",
        "level_code": "B2",
        "domain": "People",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "Individual_Traits_Psychology"
    },
    {
        "id": "B2-VERB-PEO-05",
        "word": "introduce",
        "emoji": "✨",
        "form": "verb",
        "transcription": "ˌɪntrəˈdjuːs",
        "subtext": "Neutral | introduce a policy / introduce changes / introduce someone to",
        "definitions": [
            {
                "text": "To bring something new into use for the first time.",
                "examples": [
                    "The company introduced a new flexible working policy last spring."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "introduced",
        "v3": "introduced",
        "group": "regular",
        "auxiliary": "have",
        "v4": "introducing",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "people",
        "sub_theme": null,
        "legacy_id": "B2-PPL-28",
        "level_code": "B2",
        "domain": "People",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "Individual_Traits_Psychology"
    },
    {
        "id": "B2-VERB-PEO-06",
        "word": "reform",
        "emoji": "🛠️",
        "form": "verb",
        "transcription": "rɪˈfɔːm",
        "subtext": "Formal | reform a system / structural reform / reform the law",
        "definitions": [
            {
                "text": "To change a system or institution to make it better.",
                "examples": [
                    "The government has promised to reform the pension system soon."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reformed",
        "v3": "reformed",
        "group": "regular",
        "auxiliary": "have",
        "v4": "reforming",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "people",
        "sub_theme": null,
        "legacy_id": "B2-PPL-33",
        "level_code": "B2",
        "domain": "People",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "Individual_Traits_Psychology"
    },
    {
        "id": "B2-VERB-PEO-07",
        "word": "regulate",
        "emoji": "⚖️",
        "form": "verb",
        "transcription": "ˈrɛɡjuleɪt",
        "subtext": "Formal | regulate an industry / tightly regulated / self-regulation",
        "definitions": [
            {
                "text": "To control an activity through official rules or laws.",
                "examples": [
                    "The government plans to regulate the gig economy more strictly."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "regulated",
        "v3": "regulated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "regulating",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "people",
        "sub_theme": null,
        "legacy_id": "B2-PPL-34",
        "level_code": "B2",
        "domain": "People",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "Individual_Traits_Psychology"
    },
    {
        "id": "B2-VERB-PEO-08",
        "word": "restrict",
        "emoji": "🚫",
        "form": "verb",
        "transcription": "rɪˈstrɪkt",
        "subtext": "Formal | restrict access / impose restrictions / tightly restricted",
        "definitions": [
            {
                "text": "To limit the size or range of something.",
                "examples": [
                    "Access to the building is restricted to badge holders only."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "restricted",
        "v3": "restricted",
        "group": "regular",
        "auxiliary": "have",
        "v4": "restricting",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "people",
        "sub_theme": null,
        "legacy_id": "B2-PPL-37",
        "level_code": "B2",
        "domain": "People",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "Individual_Traits_Psychology"
    },
    {
        "id": "B2-VERB-PEO-09",
        "word": "subsidise",
        "emoji": "💸",
        "form": "verb",
        "transcription": "ˈsʌbsɪdaɪz",
        "subtext": "Formal | subsidise an industry / heavily subsidised / public subsidy",
        "definitions": [
            {
                "text": "To support something financially with public money.",
                "examples": [
                    "The government subsidises renewable energy to encourage its use."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "subsidised",
        "v3": "subsidised",
        "group": "regular",
        "auxiliary": "have",
        "v4": "subsidising",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "people",
        "sub_theme": null,
        "legacy_id": "B2-PPL-40",
        "level_code": "B2",
        "domain": "People",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "Individual_Traits_Psychology"
    },
    {
        "id": "B2-VERB-PEO-10",
        "word": "veto",
        "emoji": "🚫",
        "form": "verb",
        "transcription": "🇬🇧 ˈviːtəʊ | 🇺🇸 ˈviːtoʊ",
        "subtext": "veto legislation, exercise a veto",
        "definitions": [
            {
                "text": "To refuse to allow something to be done.",
                "examples": [
                    "The president has the power to veto legislation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "vetoed",
        "v3": "vetoed",
        "group": "regular",
        "auxiliary": "have",
        "v4": "vetoing",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "people",
        "sub_theme": null,
        "legacy_id": "B2-PPL-42",
        "level_code": "B2",
        "domain": "People",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "Individual_Traits_Psychology"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
