(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-VERB-NAT-01",
        "word": "analyze",
        "emoji": "📊",
        "form": "verb",
        "subtext": "examine, study",
        "synonyms": [
            "examine",
            "study"
        ],
        "definitions": [
            {
                "text": "To study something in detail to understand it.",
                "examples": [
                    "We need to analyze the results of the experiment."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "analyzed",
        "v3": "analyzed",
        "transcription": "ˈænəlaɪz",
        "group": "regular",
        "auxiliary": "have",
        "v4": "analyzing",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Greek",
            "origin_word": "analuein",
            "origin_meaning": "unloose, release"
        },
        "legacy_id": "A2-NAT-01",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Verbs",
        "sub_subcategory": "Natural_World_Phenomena"
    },
    {
        "id": "A2-VERB-NAT-02",
        "word": "conserve",
        "emoji": "💧",
        "form": "verb",
        "subtext": "conserve energy / conserve water",
        "definitions": [
            {
                "text": "To keep and protect something from damage, change, or waste.",
                "examples": [
                    "We should try to conserve water during the summer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "conserved",
        "v3": "conserved",
        "synonyms": [
            "save",
            "protect"
        ],
        "transcription": "kənˈsɜːrv",
        "group": "regular",
        "auxiliary": "have",
        "v4": "conserving",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "A2-NAT-15",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Verbs",
        "sub_subcategory": "Natural_World_Phenomena"
    },
    {
        "id": "A2-VERB-NAT-03",
        "word": "discover",
        "emoji": "🔎",
        "form": "verb",
        "subtext": "discover something new",
        "synonyms": [
            "discovery"
        ],
        "definitions": [
            {
                "text": "To find information, a place, or an object, especially for the first time.",
                "examples": [
                    "They discovered a new planet."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "discovered",
        "v3": "discovered",
        "transcription": "dɪˈskʌvər",
        "group": "regular",
        "auxiliary": "have",
        "v4": "discovering",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "A2-NAT-16",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Verbs",
        "sub_subcategory": "Natural_World_Phenomena"
    },
    {
        "id": "A2-VERB-NAT-04",
        "word": "evolve",
        "emoji": "🧬",
        "form": "verb",
        "subtext": "slowly evolve / evolve into",
        "definitions": [
            {
                "text": "To develop gradually.",
                "examples": [
                    "Birds evolved from dinosaurs."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "evolved",
        "v3": "evolved",
        "transcription": "🇬🇧 ɪˈvɒlv | 🇺🇸 ɪˈvɑːlv",
        "group": "regular",
        "auxiliary": "have",
        "v4": "evolving",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "A2-NAT-24",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Verbs",
        "sub_subcategory": "Natural_World_Phenomena"
    },
    {
        "id": "A2-VERB-NAT-05",
        "word": "examine",
        "emoji": "🔬",
        "form": "verb",
        "subtext": "examine a patient / examine a document",
        "synonyms": [
            "look at",
            "study"
        ],
        "definitions": [
            {
                "text": "To look at or consider a person or thing carefully in order to discover something about them.",
                "examples": [
                    "The doctor examined the child.",
                    "We need to examine the evidence."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "examined",
        "v3": "examined",
        "transcription": "ɪɡˈzæmɪn",
        "group": "regular",
        "auxiliary": "have",
        "v4": "examining",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "A2-NAT-25",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Verbs",
        "sub_subcategory": "Natural_World_Phenomena"
    },
    {
        "id": "A2-VERB-NAT-06",
        "word": "freeze",
        "emoji": "❄️",
        "form": "verb",
        "subtext": "freeze water",
        "synonyms": [
            "turn to ice"
        ],
        "definitions": [
            {
                "text": "To become or cause to become hard because of extreme cold.",
                "examples": [
                    "The lake has frozen over."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "froze",
        "v3": "frozen",
        "transcription": "friːz",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "A2-NAT-31",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Verbs",
        "sub_subcategory": "Natural_World_Phenomena"
    },
    {
        "id": "A2-VERB-NAT-07",
        "word": "invent",
        "emoji": "⚙️",
        "form": "verb",
        "subtext": "invent something",
        "synonyms": [
            "create",
            "make"
        ],
        "definitions": [
            {
                "text": "To design or create something that has never been made before.",
                "examples": [
                    "Who invented the telephone?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invented",
        "v3": "invented",
        "transcription": "ɪnˈvɛnt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "inventing",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "A2-NAT-37",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Verbs",
        "sub_subcategory": "Natural_World_Phenomena"
    },
    {
        "id": "A2-VERB-NAT-08",
        "word": "measure",
        "emoji": "📏",
        "form": "verb",
        "subtext": "measure length / measure temperature / measure success",
        "definitions": [
            {
                "text": "To discover the exact size or amount of something.",
                "examples": [
                    "Measure the width of the window.",
                    "The nurse measured my height."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "measured",
        "v3": "measured",
        "transcription": "ˈmɛʒər",
        "synonyms": [
            "calculate"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "measuring",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "A2-NAT-41",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Verbs",
        "sub_subcategory": "Natural_World_Phenomena"
    },
    {
        "id": "A2-VERB-NAT-09",
        "word": "observe",
        "emoji": "🧐",
        "form": "verb",
        "subtext": "carefully observe",
        "definitions": [
            {
                "text": "To watch someone or something carefully.",
                "examples": [
                    "The scientists observed the animals for several weeks."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "observed",
        "v3": "observed",
        "transcription": "əbˈzɜːrv",
        "synonyms": [
            "watch",
            "see"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "observing",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "A2-NAT-45",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Verbs",
        "sub_subcategory": "Natural_World_Phenomena"
    },
    {
        "id": "A2-VERB-NAT-10",
        "word": "pollute",
        "emoji": "🏭",
        "form": "verb",
        "subtext": "pollute the air / pollute the ocean",
        "definitions": [
            {
                "text": "To make water, air, or land dirty.",
                "examples": [
                    "Factories often pollute the environment."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "polluted",
        "v3": "polluted",
        "transcription": "pəˈluːt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "polluting",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "A2-NAT-48",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Verbs",
        "sub_subcategory": "Natural_World_Phenomena"
    },
    {
        "id": "A2-VERB-NAT-11",
        "word": "predict",
        "emoji": "🔮",
        "form": "verb",
        "subtext": "predict the future",
        "definitions": [
            {
                "text": "To say that an event or action will happen in the future.",
                "examples": [
                    "It's hard to predict the weather accurately."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "predicted",
        "v3": "predicted",
        "transcription": "prɪˈdɪkt",
        "synonyms": [
            "forecast",
            "guess"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "predicting",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "A2-NAT-50",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Verbs",
        "sub_subcategory": "Natural_World_Phenomena"
    },
    {
        "id": "A2-VERB-NAT-12",
        "word": "protect",
        "emoji": "🛡️",
        "form": "verb",
        "subtext": "protect the environment / protect wildlife / protect from harm",
        "definitions": [
            {
                "text": "To keep someone or something safe from injury, damage, or loss.",
                "examples": [
                    "We must protect the forest.",
                    "Sunglasses protect your eyes from the sun."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "protected",
        "v3": "protected",
        "transcription": "prəˈtɛkt",
        "synonyms": [
            "save",
            "guard"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "protecting",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "A2-NAT-51",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Verbs",
        "sub_subcategory": "Natural_World_Phenomena"
    },
    {
        "id": "A2-VERB-NAT-13",
        "word": "react",
        "emoji": "🧪",
        "form": "verb",
        "subtext": "react to",
        "synonyms": [
            "respond"
        ],
        "definitions": [
            {
                "text": "To act in a particular way because of something that has happened.",
                "examples": [
                    "How did he react to the news?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reacted",
        "v3": "reacted",
        "transcription": "riˈækt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "reacting",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "A2-NAT-52",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Verbs",
        "sub_subcategory": "Natural_World_Phenomena"
    },
    {
        "id": "A2-VERB-NAT-14",
        "word": "recycle",
        "emoji": "♻️",
        "form": "verb",
        "subtext": "recycle paper, recycle bins",
        "definitions": [
            {
                "text": "To process used materials so they can be used again.",
                "examples": [
                    "We recycle paper and glass."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recycled",
        "v3": "recycled",
        "transcription": "ˌriːˈsaɪkl",
        "synonyms": [
            "reuse"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "recycling",
        "lang": "en",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": null,
        "legacy_id": "A2-NAT-53",
        "level_code": "A2",
        "domain": "NATURE",
        "subcategory": "Environment",
        "pos_section": "Verbs",
        "sub_subcategory": "Natural_World_Phenomena"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
