(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-VERB-SEL-01",
        "word": "admire",
        "emoji": "🤩",
        "form": "verb",
        "transcription": "🇬🇧 ədˈmaɪə | 🇺🇸 ədˈmaɪər",
        "subtext": "respect, look up to",
        "synonyms": [
            "respect",
            "look up to"
        ],
        "definitions": [
            {
                "text": "To find someone or something attractive and pleasant to look at.",
                "examples": [
                    "I really admire your courage."
                ]
            }
        ],
        "classification": "regular",
        "group": "regular",
        "aspect": "action",
        "v2": "admired",
        "v3": "admired",
        "auxiliary": "have",
        "v4": "admiring",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "admirari",
            "origin_meaning": "regard with wonder"
        },
        "legacy_id": "A2-SELF-01",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A2-VERB-SEL-02",
        "word": "apologise",
        "emoji": "🙏",
        "form": "verb",
        "subtext": "apologise for something / to someone",
        "synonyms": [
            "say sorry"
        ],
        "definitions": [
            {
                "text": "To express regret for something you have done wrong.",
                "examples": [
                    "He apologised for missing the meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "apologised",
        "v3": "apologised",
        "transcription": "🇬🇧 əˈpɒlədʒaɪz | 🇺🇸 əˈpɑːlədʒaɪz",
        "group": "regular",
        "auxiliary": "have",
        "v4": "apologising",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "A2-SELF-03",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A2-VERB-SEL-03",
        "word": "appreciate",
        "emoji": "🙏",
        "form": "verb",
        "subtext": "value, enjoy",
        "synonyms": [
            "value",
            "enjoy"
        ],
        "definitions": [
            {
                "text": "To understand how good or useful someone or something is.",
                "examples": [
                    "I really appreciate your help."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "appreciated",
        "v3": "appreciated",
        "transcription": "əˈpriːʃieɪt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "appreciating",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "A2-SELF-04",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A2-VERB-SEL-04",
        "word": "avoid",
        "emoji": "🚫",
        "form": "verb",
        "subtext": "avoid problems / avoid traffic / avoid someone",
        "definitions": [
            {
                "text": "To stay away from someone or something.",
                "examples": [
                    "I try to avoid processed foods.",
                    "She avoided eye contact with him."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "avoided",
        "v3": "avoided",
        "transcription": "əˈvɔɪd",
        "synonyms": [
            "keep away from"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "avoiding",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "A2-SELF-05",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A2-VERB-SEL-05",
        "word": "encourage",
        "emoji": "👏",
        "form": "verb",
        "subtext": "encourage someone",
        "synonyms": [
            "support"
        ],
        "definitions": [
            {
                "text": "To talk or behave in a way that gives someone confidence to do something.",
                "examples": [
                    "My parents encouraged me to study hard."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "encouraged",
        "v3": "encouraged",
        "transcription": "ɪnˈkʌrɪdʒ",
        "group": "regular",
        "auxiliary": "have",
        "v4": "encouraging",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "A2-SELF-09",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A2-VERB-SEL-06",
        "word": "excite",
        "emoji": "🤩",
        "form": "verb",
        "subtext": "excite someone",
        "synonyms": [
            "exciting"
        ],
        "definitions": [
            {
                "text": "To make someone feel very happy and enthusiastic.",
                "examples": [
                    "The news excited the fans."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "excited",
        "v3": "excited",
        "transcription": "ɪkˈsaɪt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "exciting",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "A2-SELF-10",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A2-VERB-SEL-07",
        "word": "forgive",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "forgive someone / forgive a mistake / hard to forgive",
        "definitions": [
            {
                "text": "To stop feeling angry with someone for something they did.",
                "examples": [
                    "She eventually forgave him for the mistake."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "forgave",
        "v3": "forgiven",
        "transcription": "fərˈɡɪv",
        "synonyms": [
            "pardon"
        ],
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "A2-SELF-11",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A2-VERB-SEL-08",
        "word": "impress",
        "emoji": "✨",
        "form": "verb",
        "subtext": "impress someone",
        "synonyms": [
            "amaze"
        ],
        "definitions": [
            {
                "text": "To cause someone to admire or respect you.",
                "examples": [
                    "He tried to impress the manager."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "impressed",
        "v3": "impressed",
        "transcription": "ɪmˈprɛs",
        "group": "regular",
        "auxiliary": "have",
        "v4": "impressing",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "A2-SELF-13",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A2-VERB-SEL-09",
        "word": "promise",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "promise to / I promise",
        "definitions": [
            {
                "text": "To say that you will certainly do something.",
                "examples": [
                    "I promise to help you tomorrow."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "promised",
        "v3": "promised",
        "transcription": "🇬🇧 ˈprɒmɪs | 🇺🇸 ˈprɑːmɪs",
        "synonyms": [
            "vow"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "promising",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "A2-SELF-15",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A2-VERB-SEL-10",
        "word": "support",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "support someone / support a decision / offer support",
        "definitions": [
            {
                "text": "To help and encourage someone through difficulties.",
                "examples": [
                    "He supports his partner during a difficult period at work."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "supported",
        "v3": "supported",
        "transcription": "səˈpɔːrt",
        "synonyms": [
            "help",
            "encourage"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "supporting",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "A2-SELF-19",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A2-VERB-SEL-11",
        "word": "trust",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "trust someone / trust your instincts / trust a process",
        "definitions": [
            {
                "text": "To have confidence in someone's honesty and reliability.",
                "examples": [
                    "She trusts her business partner completely."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "trusted",
        "v3": "trusted",
        "transcription": "trʌst",
        "synonyms": [
            "believe"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "trusting",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "A2-SELF-20",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Feelings_States"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
