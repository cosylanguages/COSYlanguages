(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-SELF-01",
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
        "legacy_id": "en_elementary_emotions_014",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A2-SELF-02",
        "word": "anxious",
        "emoji": "😟",
        "form": "adjective",
        "definitions": [
            {
                "text": "Worried and nervous.",
                "examples": [
                    "I feel anxious about the exam.",
                    "The long wait made her anxious."
                ]
            }
        ],
        "subtext": "worried, nervous, uneasy",
        "synonyms": [
            "worried",
            "nervous",
            "uneasy"
        ],
        "comparative": "more anxious",
        "superlative": "the most anxious",
        "transcription": "ˈæŋkʃəs",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "anxius",
            "origin_meaning": "solicitous, uneasy"
        },
        "legacy_id": "en_elementary_emotions_003",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A2-SELF-03",
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
        "legacy_id": "en_elementary_emotions_015",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A2-SELF-04",
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
        "legacy_id": "en_elementary_emotions_016",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A2-SELF-05",
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
        "legacy_id": "en_elementary_emotions_017",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A2-SELF-06",
        "word": "delighted",
        "emoji": "😊",
        "form": "adjective",
        "definitions": [
            {
                "text": "Very pleased.",
                "examples": [
                    "I was delighted with my exam results.",
                    "We are delighted to welcome you to our team."
                ]
            }
        ],
        "subtext": "very happy, pleased",
        "synonyms": [
            "very happy",
            "pleased"
        ],
        "comparative": "more delighted",
        "superlative": "the most delighted",
        "transcription": "dɪˈlaɪtɪd",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "en_elementary_emotions_012",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A2-SELF-07",
        "word": "dissatisfied",
        "emoji": "😒",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not pleased with something.",
                "examples": [
                    "He is dissatisfied with the service."
                ]
            }
        ],
        "subtext": "dissatisfied customer / feel dissatisfied",
        "synonyms": [
            "unhappy",
            "not content"
        ],
        "comparative": "more dissatisfied",
        "superlative": "the most dissatisfied",
        "transcription": "dɪˈsætɪsfaɪd",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "en_elementary_emotions_004",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A2-SELF-08",
        "word": "emotional",
        "emoji": "🥺",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having strong feelings.",
                "examples": [
                    "It was a very emotional moment."
                ]
            }
        ],
        "subtext": "feeling-based",
        "synonyms": [
            "feeling-based"
        ],
        "comparative": "more emotional",
        "superlative": "the most emotional",
        "transcription": "ɪˈmoʊʃənl",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "en_elementary_emotions_005",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A2-SELF-09",
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
        "legacy_id": "en_elementary_emotions_018",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A2-SELF-10",
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
        "legacy_id": "en_elementary_emotions_019",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A2-SELF-11",
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
        "legacy_id": "en_elementary_emotions_020",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A2-SELF-12",
        "word": "grateful",
        "emoji": "🙏",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling or showing thanks.",
                "examples": [
                    "I am very grateful for your help."
                ]
            }
        ],
        "subtext": "thankful",
        "synonyms": [
            "thankful"
        ],
        "comparative": "more grateful",
        "superlative": "the most grateful",
        "transcription": "ˈɡreɪtfl",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "en_elementary_emotions_006",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A2-SELF-13",
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
        "legacy_id": "en_elementary_emotions_021",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A2-SELF-14",
        "word": "pleased",
        "emoji": "😊",
        "form": "adjective",
        "definitions": [
            {
                "text": "Happy or satisfied.",
                "examples": [
                    "I am very pleased with my new car.",
                    "She was pleased to see him."
                ]
            }
        ],
        "subtext": "happy, satisfied",
        "synonyms": [
            "happy",
            "satisfied"
        ],
        "comparative": "more pleased",
        "superlative": "the most pleased",
        "transcription": "pliːzd",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "en_elementary_emotions_013",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A2-SELF-15",
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
        "legacy_id": "en_elementary_emotions_022",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A2-SELF-16",
        "word": "satisfied",
        "emoji": "😌",
        "form": "adjective",
        "definitions": [
            {
                "text": "Pleased because you have got what you wanted.",
                "examples": [
                    "She is satisfied with her new salary."
                ]
            }
        ],
        "subtext": "feel satisfied / satisfied with",
        "synonyms": [
            "content",
            "pleased"
        ],
        "comparative": "more satisfied",
        "superlative": "the most satisfied",
        "transcription": "ˈsætɪsfaɪd",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "en_elementary_emotions_007",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A2-SELF-17",
        "word": "stressed",
        "emoji": "😫",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling worried and tense from pressure.",
                "examples": [
                    "She feels stressed about the upcoming presentation.",
                    "She feels stressed before every deadline."
                ]
            }
        ],
        "subtext": "feel stressed / very stressed / completely stressed",
        "comparative": "more stressed",
        "superlative": "the most stressed",
        "transcription": "strɛst",
        "synonyms": [
            "worried"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "en_elementary_emotions_008",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A2-SELF-18",
        "word": "stressful",
        "emoji": "😫",
        "form": "adjective",
        "definitions": [
            {
                "text": "Causing worry or anxiety.",
                "examples": [
                    "Her job is very stressful."
                ]
            }
        ],
        "subtext": "a stressful job / very stressful / stressful situation",
        "comparative": "more stressful",
        "superlative": "the most stressful",
        "transcription": "ˈstrɛsfl",
        "synonyms": [
            "difficult"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "en_elementary_emotions_009",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A2-SELF-19",
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
        "legacy_id": "en_elementary_emotions_023",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A2-SELF-20",
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
        "legacy_id": "en_elementary_emotions_024",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A2-SELF-21",
        "word": "unlucky",
        "emoji": "😿",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having or bringing bad luck.",
                "examples": [
                    "Thirteen is considered an unlucky number by some."
                ]
            }
        ],
        "subtext": "feel unlucky / an unlucky day",
        "synonyms": [
            "unfortunate"
        ],
        "comparative": "unluckier",
        "superlative": "the unluckiest",
        "transcription": "ʌnˈlʌki",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "en_elementary_emotions_010",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A2-SELF-22",
        "word": "upset",
        "emoji": "😢",
        "form": "adjective",
        "definitions": [
            {
                "text": "Worried, unhappy, or angry.",
                "examples": [
                    "She was very upset when she heard the news.",
                    "Don't get upset over small things."
                ]
            }
        ],
        "subtext": "unhappy, sad",
        "synonyms": [
            "unhappy",
            "sad"
        ],
        "comparative": "more upset",
        "superlative": "the most upset",
        "transcription": "ˌʌpˈsɛt",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "en_elementary_emotions_011",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Emotions"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
