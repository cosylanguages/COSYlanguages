(function() {
    const lang = "en";
    const data = [
    {
        "id": "B2-VERB-PEO-001",
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
        "sub_subcategory": "Individual_Traits"
    },
    {
        "id": "B2-VERB-PEO-003",
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
        "sub_subcategory": "Individual_Traits"
    },
    {
        "id": "B2-VERB-PEO-006",
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
        "sub_subcategory": "Individual_Traits"
    },
    {
        "id": "B2-VERB-PEO-007",
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
        "sub_subcategory": "Individual_Traits"
    },
    {
        "id": "B2-VERB-PEO-008",
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
        "sub_subcategory": "Individual_Traits"
    },
    {
        "id": "B2-VERB-PEO-009",
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
        "sub_subcategory": "Individual_Traits"
    },
    {
        "id": "B2-VERB-PEO-010",
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
        "sub_subcategory": "Individual_Traits"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
