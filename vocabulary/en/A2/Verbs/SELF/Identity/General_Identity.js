(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-VERB-SEL-01",
        "word": "applaud",
        "emoji": "👏",
        "form": "verb",
        "v2": "applauded",
        "v3": "applauded",
        "definitions": [
            {
                "text": "To show approval of something by clapping your hands.",
                "examples": [
                    "The audience applauded for several minutes.",
                    "The teacher applauded the students' efforts."
                ]
            }
        ],
        "subtext": "clap, cheer",
        "synonyms": [
            "clap",
            "cheer"
        ],
        "classification": "regular",
        "transcription": "əˈplɔːd",
        "group": "regular",
        "auxiliary": "have",
        "v4": "applauding",
        "lang": "en",
        "level": "elementary",
        "theme": "art_culture",
        "sub_theme": null,
        "legacy_id": "A2-SELF-12",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-VERB-SEL-02",
        "word": "arrest",
        "emoji": "👮",
        "form": "verb",
        "subtext": "be under arrest",
        "synonyms": [
            "get arrested"
        ],
        "definitions": [
            {
                "text": "If the police arrest someone, they take them to the police station because they think they have committed a crime.",
                "examples": [
                    "The police arrested the thief."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "arrested",
        "v3": "arrested",
        "transcription": "əˈrɛst",
        "group": "regular",
        "auxiliary": "have",
        "v4": "arresting",
        "lang": "en",
        "level": "elementary",
        "theme": "psychology",
        "sub_theme": null,
        "legacy_id": "A2-SELF-13",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-VERB-SEL-03",
        "word": "blame",
        "emoji": "👈",
        "form": "verb",
        "subtext": "blame someone / take the blame",
        "definitions": [
            {
                "text": "To say or think that someone or something is responsible for something bad.",
                "examples": [
                    "Don't blame me for your mistakes."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "blamed",
        "v3": "blamed",
        "transcription": "bleɪm",
        "group": "regular",
        "auxiliary": "have",
        "v4": "blaming",
        "lang": "en",
        "level": "elementary",
        "theme": "psychology",
        "sub_theme": null,
        "legacy_id": "A2-SELF-20",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-VERB-SEL-04",
        "word": "create",
        "emoji": "🎨",
        "form": "verb",
        "subtext": "create something new",
        "synonyms": [
            "creative"
        ],
        "definitions": [
            {
                "text": "To make something new, or invent something.",
                "examples": [
                    "She created a beautiful painting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "created",
        "v3": "created",
        "transcription": "kriˈeɪt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "creating",
        "lang": "en",
        "level": "elementary",
        "theme": "art_culture",
        "sub_theme": null,
        "legacy_id": "A2-SELF-32",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-VERB-SEL-05",
        "word": "cure",
        "emoji": "💊",
        "form": "verb",
        "subtext": "cure a disease",
        "definitions": [
            {
                "text": "To make someone with an illness healthy again.",
                "examples": [
                    "Doctors hope to find a cure for cancer soon."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cured",
        "v3": "cured",
        "synonyms": [
            "heal"
        ],
        "transcription": "kjʊər",
        "group": "regular",
        "auxiliary": "have",
        "v4": "curing",
        "lang": "en",
        "level": "elementary",
        "theme": "health_medicine",
        "sub_theme": null,
        "legacy_id": "A2-SELF-36",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-VERB-SEL-06",
        "word": "design",
        "emoji": "📐",
        "form": "verb",
        "subtext": "design a website / graphic design",
        "definitions": [
            {
                "text": "To make or draw plans for something, for example clothes or buildings.",
                "examples": [
                    "He designs beautiful gardens."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "designed",
        "v3": "designed",
        "transcription": "dɪˈzaɪn",
        "synonyms": [
            "plan",
            "create"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "designing",
        "lang": "en",
        "level": "elementary",
        "theme": "art_culture",
        "sub_theme": null,
        "legacy_id": "A2-SELF-38",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-VERB-SEL-07",
        "word": "entertain",
        "emoji": "🎭",
        "form": "verb",
        "subtext": "entertain people",
        "synonyms": [
            "entertainment"
        ],
        "definitions": [
            {
                "text": "To keep a group of people interested or enjoying themselves.",
                "examples": [
                    "The clown entertained the children."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "entertained",
        "v3": "entertained",
        "transcription": "ˌɛntərˈteɪn",
        "group": "regular",
        "auxiliary": "have",
        "v4": "entertaining",
        "lang": "en",
        "level": "elementary",
        "theme": "art_culture",
        "sub_theme": null,
        "legacy_id": "A2-SELF-43",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-VERB-SEL-08",
        "word": "escape",
        "emoji": "🏃",
        "form": "verb",
        "subtext": "escape from prison / lucky escape",
        "definitions": [
            {
                "text": "To get free from something, or to avoid something.",
                "examples": [
                    "They managed to escape from the burning building."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "escaped",
        "v3": "escaped",
        "transcription": "ɪˈskeɪp",
        "group": "regular",
        "auxiliary": "have",
        "v4": "escaping",
        "lang": "en",
        "level": "elementary",
        "theme": "psychology",
        "sub_theme": null,
        "legacy_id": "A2-SELF-44",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-VERB-SEL-09",
        "word": "exhale",
        "emoji": "🌬️",
        "form": "verb",
        "subtext": "exhale slowly",
        "definitions": [
            {
                "text": "To breathe out.",
                "examples": [
                    "Exhale slowly through your mouth."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "exhaled",
        "v3": "exhaled",
        "transcription": "ɛksˈheɪl",
        "group": "regular",
        "auxiliary": "have",
        "v4": "exhaling",
        "lang": "en",
        "level": "elementary",
        "theme": "health_medicine",
        "sub_theme": null,
        "legacy_id": "A2-SELF-46",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-VERB-SEL-10",
        "word": "inhale",
        "emoji": "🫁",
        "form": "verb",
        "subtext": "inhale deeply",
        "definitions": [
            {
                "text": "To breathe in.",
                "examples": [
                    "Inhale deeply through your nose."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "inhaled",
        "v3": "inhaled",
        "transcription": "ɪnˈheɪl",
        "group": "regular",
        "auxiliary": "have",
        "v4": "inhaling",
        "lang": "en",
        "level": "elementary",
        "theme": "health_medicine",
        "sub_theme": null,
        "legacy_id": "A2-SELF-59",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-VERB-SEL-11",
        "word": "injure",
        "emoji": "🤕",
        "form": "verb",
        "subtext": "get injured, injury",
        "synonyms": [
            "get injured",
            "injury"
        ],
        "definitions": [
            {
                "text": "To hurt yourself or someone else.",
                "examples": [
                    "He injured his leg while playing football."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "injured",
        "v3": "injured",
        "transcription": "ˈɪndʒər",
        "group": "regular",
        "auxiliary": "have",
        "v4": "injuring",
        "lang": "en",
        "level": "elementary",
        "theme": "health_medicine",
        "sub_theme": null,
        "legacy_id": "A2-SELF-60",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-VERB-SEL-12",
        "word": "kill",
        "emoji": "⚔️",
        "form": "verb",
        "subtext": "kill time, kill an insect",
        "definitions": [
            {
                "text": "To cause the death of someone or something.",
                "examples": [
                    "The cold weather killed the plants."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "killed",
        "v3": "killed",
        "transcription": "kɪl",
        "synonyms": [
            "die"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "killing",
        "lang": "en",
        "level": "elementary",
        "theme": "psychology",
        "sub_theme": null,
        "legacy_id": "A2-SELF-64",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-VERB-SEL-13",
        "word": "perform",
        "emoji": "🎭",
        "form": "verb",
        "subtext": "perform on stage / perform well / perform a task",
        "definitions": [
            {
                "text": "To entertain people by acting, singing, dancing, etc.",
                "examples": [
                    "The band performed their new song.",
                    "She performs in the local theatre."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "performed",
        "v3": "performed",
        "transcription": "pərˈfɔːrm",
        "synonyms": [
            "act",
            "do"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "performing",
        "lang": "en",
        "level": "elementary",
        "theme": "art_culture",
        "sub_theme": null,
        "legacy_id": "A2-SELF-77",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-VERB-SEL-14",
        "word": "prohibit",
        "emoji": "🚫",
        "form": "verb",
        "subtext": "stop, not allow",
        "synonyms": [
            "stop",
            "not allow"
        ],
        "definitions": [
            {
                "text": "To officially forbid something.",
                "examples": [
                    "Smoking is prohibited in the building."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "prohibited",
        "v3": "prohibited",
        "transcription": "prəˈhɪbɪt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "prohibiting",
        "lang": "en",
        "level": "elementary",
        "theme": "psychology",
        "sub_theme": null,
        "legacy_id": "A2-SELF-84",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-VERB-SEL-15",
        "word": "recover",
        "emoji": "🩹",
        "form": "verb",
        "subtext": "recover from illness / recover quickly / recover fully",
        "definitions": [
            {
                "text": "To return to good health after illness or injury.",
                "examples": [
                    "She is recovering from a back injury."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recovered",
        "v3": "recovered",
        "transcription": "rɪˈkʌvər",
        "synonyms": [
            "get well",
            "get better"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "recovering",
        "lang": "en",
        "level": "elementary",
        "theme": "health_medicine",
        "sub_theme": null,
        "legacy_id": "A2-SELF-87",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-VERB-SEL-16",
        "word": "reflect",
        "emoji": "🪞",
        "form": "verb",
        "definitions": [
            {
                "text": "To send back light, heat, or sound from a surface.",
                "examples": [
                    "The water reflected the sunlight.",
                    "The mirror reflected her face."
                ]
            }
        ],
        "subtext": "show",
        "synonyms": [
            "show"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reflected",
        "v3": "reflected",
        "transcription": "rɪˈflɛkt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "reflecting",
        "lang": "en",
        "level": "elementary",
        "theme": "art_culture",
        "sub_theme": null,
        "legacy_id": "A2-SELF-88",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-VERB-SEL-17",
        "word": "rehearse",
        "emoji": "🎭",
        "form": "verb",
        "v2": "rehearsed",
        "v3": "rehearsed",
        "definitions": [
            {
                "text": "To practice a play, piece of music, etc. in order to prepare it for performance.",
                "examples": [
                    "The orchestra is rehearsing for the concert.",
                    "They have been rehearsing the play for months."
                ]
            }
        ],
        "subtext": "practice",
        "synonyms": [
            "practice"
        ],
        "classification": "regular",
        "transcription": "rɪˈhɜːrs",
        "group": "regular",
        "auxiliary": "have",
        "v4": "rehearsing",
        "lang": "en",
        "level": "elementary",
        "theme": "art_culture",
        "sub_theme": null,
        "legacy_id": "A2-SELF-90",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-VERB-SEL-18",
        "word": "suffer",
        "emoji": "🤕",
        "form": "verb",
        "subtext": "suffer from / suffer pain / suffer stress",
        "definitions": [
            {
                "text": "To experience pain or distress.",
                "examples": [
                    "She suffers from chronic back pain due to desk work."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "suffered",
        "v3": "suffered",
        "transcription": "ˈsʌfər",
        "synonyms": [
            "be in pain"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "suffering",
        "lang": "en",
        "level": "elementary",
        "theme": "health_medicine",
        "sub_theme": null,
        "legacy_id": "A2-SELF-102",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A2-VERB-SEL-19",
        "word": "swallow",
        "emoji": "👅",
        "form": "verb",
        "subtext": "hard to swallow",
        "definitions": [
            {
                "text": "To make food or drink go down your throat.",
                "examples": [
                    "Drink some water to help you swallow the pill."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "swallowed",
        "v3": "swallowed",
        "transcription": "🇬🇧 ˈswɒloʊ | 🇺🇸 ˈswɑːloʊ",
        "synonyms": [
            "eat"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "swallowing",
        "lang": "en",
        "level": "elementary",
        "theme": "health_medicine",
        "sub_theme": null,
        "legacy_id": "A2-SELF-105",
        "level_code": "A2",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Identity"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
