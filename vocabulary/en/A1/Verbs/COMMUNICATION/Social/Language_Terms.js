(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-COM-086",
        "word": "again",
        "emoji": "🔁",
        "form": "adverb",
        "definitions": [
            {
                "text": "One more time.",
                "examples": [
                    "Can you say that again, please?"
                ]
            }
        ],
        "subtext": "related to frequency adverbs",
        "transcription": "əˈgɛn",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A1-COMM-02",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-VERB-COM-087",
        "word": "also",
        "emoji": "➕",
        "form": "adverb",
        "definitions": [
            {
                "text": "In addition; too.",
                "examples": [
                    "I speak English and also French."
                ]
            }
        ],
        "subtext": "related to conjunctions connectors",
        "transcription": "ˈɔlsoʊ",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A1-COMM-04",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-VERB-COM-088",
        "word": "always",
        "emoji": "♾️",
        "form": "adverb",
        "definitions": [
            {
                "text": "At all times; every time.",
                "examples": [
                    "I always drink coffee in the morning."
                ]
            }
        ],
        "subtext": "related to frequency adverbs",
        "transcription": "ˈɔlˌweɪz",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "never"
        ],
        "legacy_id": "A1-COMM-05",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-VERB-COM-089",
        "word": "colour",
        "emoji": "🖍️",
        "form": "verb",
        "subtext": "colour the picture / use colours",
        "synonyms": [
            "color"
        ],
        "definitions": [
            {
                "text": "To use a pen or pencil to put colour on a picture.",
                "examples": [
                    "Colour the picture blue."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "coloured",
        "v3": "coloured",
        "group": "regular",
        "transcription": "ˈkələr",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "erase"
        ],
        "legacy_id": "A1-COMM-25",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-VERB-COM-091",
        "word": "cross",
        "emoji": "❌",
        "form": "verb",
        "subtext": "cross out / cross the answer",
        "synonyms": [
            "x-mark"
        ],
        "definitions": [
            {
                "text": "To put a mark (X) next to something to show it is wrong.",
                "examples": [
                    "Cross the wrong answer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "crossed",
        "v3": "crossed",
        "group": "regular",
        "transcription": "krɔs",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "tick"
        ],
        "legacy_id": "A1-COMM-28",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-VERB-COM-093",
        "word": "explain",
        "emoji": "🗣️",
        "form": "verb",
        "transcription": "ɪkˈspleɪn",
        "definitions": [
            {
                "text": "To make something clear or easy to understand by describing or giving information about it.",
                "examples": [
                    "Can you explain this rule?",
                    "The teacher explained the lesson."
                ]
            }
        ],
        "v2": "explained",
        "v3": "explained",
        "classification": "regular",
        "group": "regular",
        "subtext": "explain something to someone",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A1-COMM-37",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-VERB-COM-095",
        "word": "never",
        "emoji": "🚫",
        "form": "adverb",
        "definitions": [
            {
                "text": "Not at any time.",
                "examples": [
                    "He never drinks alcohol."
                ]
            }
        ],
        "subtext": "related to frequency adverbs",
        "transcription": "ˈnɛvər",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "always"
        ],
        "legacy_id": "A1-COMM-54",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-VERB-COM-096",
        "word": "often",
        "emoji": "🔁",
        "form": "adverb",
        "definitions": [
            {
                "text": "Many times.",
                "examples": [
                    "We often eat out on Fridays."
                ]
            }
        ],
        "subtext": "related to frequency adverbs",
        "transcription": "ˈɔfən",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A1-COMM-57",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-VERB-COM-097",
        "word": "point",
        "emoji": "☝️",
        "form": "verb",
        "subtext": "point at / to, point to / point at",
        "synonyms": [
            "indicate"
        ],
        "definitions": [
            {
                "text": "To show something by holding out your finger towards it.",
                "examples": [
                    "Point to the window.",
                    "He pointed at the map."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pointed",
        "v3": "pointed",
        "group": "regular",
        "transcription": "pɔɪnt",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "hide"
        ],
        "legacy_id": "A1-COMM-66",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-VERB-COM-099",
        "word": "repeat",
        "emoji": "🔁",
        "subtext": "repeat that / repeat yourself / repeat an order",
        "form": "verb",
        "definitions": [
            {
                "text": "To say or do something again.",
                "examples": [
                    "Please repeat that.",
                    "He repeated the instruction twice."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "repeated",
        "v3": "repeated",
        "group": "regular",
        "transcription": "rɪˈpit",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "change"
        ],
        "legacy_id": "A1-COMM-73",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-VERB-COM-101",
        "word": "shout",
        "emoji": "📢",
        "form": "verb",
        "subtext": "shout at / don't shout",
        "synonyms": [
            "yell"
        ],
        "definitions": [
            {
                "text": "To say something very loudly.",
                "examples": [
                    "Don't shout in the classroom."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "shouted",
        "v3": "shouted",
        "group": "regular",
        "transcription": "ʃaʊt",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "whisper"
        ],
        "legacy_id": "A1-COMM-78",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-VERB-COM-103",
        "word": "sometimes",
        "emoji": "⏱️",
        "form": "adverb",
        "definitions": [
            {
                "text": "At some times but not all the time.",
                "examples": [
                    "Sometimes I walk to the office."
                ]
            }
        ],
        "subtext": "related to frequency adverbs",
        "transcription": "ˈsəmˌtaɪmz",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A1-COMM-84",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-VERB-COM-104",
        "word": "spell",
        "emoji": "🔤",
        "form": "verb",
        "subtext": "spell your name / spell correctly",
        "synonyms": [
            "lettering"
        ],
        "definitions": [
            {
                "text": "To say or write the letters of a word in the correct order.",
                "examples": [
                    "How do you spell your name?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "spelled / spelt",
        "v3": "spelled / spelt",
        "group": "irregular",
        "transcription": "spɛl",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "misspell"
        ],
        "legacy_id": "A1-COMM-88",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-VERB-COM-106",
        "word": "tick",
        "emoji": "✅",
        "form": "verb",
        "subtext": "tick the box / tick correctly",
        "synonyms": [
            "check"
        ],
        "definitions": [
            {
                "text": "To put a mark (✓) next to something to show it is correct.",
                "examples": [
                    "Tick the correct answer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ticked",
        "v3": "ticked",
        "group": "regular",
        "transcription": "tɪk",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "cross"
        ],
        "legacy_id": "A1-COMM-101",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-VERB-COM-108",
        "word": "usually",
        "emoji": "🔄",
        "form": "adverb",
        "definitions": [
            {
                "text": "In the way that most often happens.",
                "examples": [
                    "I usually go to work by bus."
                ]
            }
        ],
        "subtext": "related to frequency adverbs",
        "transcription": "ˈjuʒəwəli",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A1-COMM-107",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-VERB-COM-109",
        "word": "whisper",
        "emoji": "🤫",
        "form": "verb",
        "subtext": "whisper a secret",
        "synonyms": [
            "murmur",
            "speak softly"
        ],
        "definitions": [
            {
                "text": "To speak very quietly so that other people cannot hear you.",
                "examples": [
                    "She whispered the answer to me."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "whispered",
        "v3": "whispered",
        "group": "regular",
        "transcription": "ˈwɪspər",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "shout"
        ],
        "legacy_id": "A1-COMM-113",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
