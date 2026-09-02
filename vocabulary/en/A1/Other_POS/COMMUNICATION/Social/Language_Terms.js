(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-OTH-COM-01",
        "word": "a",
        "emoji": "🅰️",
        "form": "determiner",
        "transcription": "ə",
        "definitions": [
            {
                "text": "Used before a noun to refer to one thing or person for the first time.",
                "examples": [
                    "I have a car.",
                    "She is a doctor."
                ]
            }
        ],
        "subtext": "indefinite article",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "the"
        ],
        "legacy_id": "A1-COMM-01",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-OTH-COM-02",
        "word": "an",
        "emoji": "🅰️",
        "form": "determiner",
        "transcription": "ən",
        "definitions": [
            {
                "text": "Used before a noun starting with a vowel sound.",
                "examples": [
                    "I have an apple.",
                    "He is an engineer."
                ]
            }
        ],
        "subtext": "indefinite article",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "the"
        ],
        "legacy_id": "A1-COMM-06",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-OTH-COM-03",
        "word": "and",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Used to join words or parts of sentences.",
                "examples": [
                    "I like coffee and tea."
                ]
            }
        ],
        "subtext": "related to conjunctions connectors",
        "emoji": "➕",
        "transcription": "ænd",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "or"
        ],
        "legacy_id": "A1-COMM-07",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-OTH-COM-04",
        "word": "any",
        "emoji": "❓",
        "form": "determiner",
        "transcription": "ˈɛni",
        "definitions": [
            {
                "text": "Used in questions and negative sentences to refer to one or more of something.",
                "examples": [
                    "Do you have any questions?",
                    "I don't have any money."
                ]
            }
        ],
        "subtext": "used in negatives and questions",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "some"
        ],
        "legacy_id": "A1-COMM-10",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-OTH-COM-05",
        "word": "at",
        "form": "preposition",
        "transcription": "æt",
        "definitions": [
            {
                "text": "Used to show a place or position.",
                "examples": [
                    "I am at the office.",
                    "Wait at the bus stop.",
                    "He is at home."
                ]
            },
            {
                "text": "Used to show a specific time.",
                "examples": [
                    "At seven o'clock.",
                    "At night.",
                    "At the weekend."
                ]
            }
        ],
        "subtext": "at work, at school, at the top",
        "emoji": "📍",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "away from"
        ],
        "legacy_id": "A1-COMM-13",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-OTH-COM-06",
        "word": "because",
        "form": "conjunction",
        "definitions": [
            {
                "text": "For the reason that.",
                "examples": [
                    "I am tired because I worked late."
                ]
            }
        ],
        "subtext": "related to conjunctions connectors",
        "emoji": "💡",
        "transcription": "🇬🇧 bɪˈkɒz | 🇺🇸 bɪˈkɑːz",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "so"
        ],
        "legacy_id": "A1-COMM-15",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-OTH-COM-07",
        "word": "behind",
        "form": "preposition",
        "definitions": [
            {
                "text": "At or towards the back of someone or something.",
                "examples": [
                    "The car is behind the house."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "🫣",
        "transcription": "bɪˈhaɪnd",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "in front of"
        ],
        "legacy_id": "A1-COMM-16",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-OTH-COM-08",
        "word": "between",
        "form": "preposition",
        "definitions": [
            {
                "text": "In the space that separates two places, people, or objects.",
                "examples": [
                    "The bank is between the school and the shop."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "🧘",
        "transcription": "bɪtˈwin",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "outside"
        ],
        "legacy_id": "A1-COMM-18",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-OTH-COM-09",
        "word": "but",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Used to introduce a contrast.",
                "examples": [
                    "I like coffee, but I don't like milk."
                ]
            }
        ],
        "subtext": "related to conjunctions connectors",
        "emoji": "❓",
        "transcription": "bət",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "and"
        ],
        "legacy_id": "A1-COMM-19",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-OTH-COM-10",
        "word": "in",
        "form": "preposition",
        "transcription": "ɪn",
        "definitions": [
            {
                "text": "Inside a place or container.",
                "examples": [
                    "The keys are in the bag.",
                    "He is in the kitchen."
                ]
            },
            {
                "text": "Used with months, years, seasons, and parts of the day.",
                "examples": [
                    "In January.",
                    "In 2023.",
                    "In the morning.",
                    "In summer."
                ]
            }
        ],
        "subtext": "in the box, in London, in a car",
        "emoji": "📥",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "out"
        ],
        "legacy_id": "A1-COMM-45",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-OTH-COM-11",
        "word": "in front of",
        "form": "preposition",
        "definitions": [
            {
                "text": "Further forward than someone or something else.",
                "examples": [
                    "There is a bus stop in front of the school."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "🚶",
        "transcription": "ɪn frənt əv",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "behind"
        ],
        "legacy_id": "A1-COMM-46",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-OTH-COM-12",
        "word": "next to",
        "form": "preposition",
        "subtext": "next to",
        "synonyms": [
            "beside"
        ],
        "definitions": [
            {
                "text": "Very close to someone or something, with nothing in between.",
                "examples": [
                    "He sat next to me."
                ]
            }
        ],
        "emoji": "👫",
        "transcription": "nɛkst tɪ",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "far from"
        ],
        "legacy_id": "A1-COMM-55",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-OTH-COM-13",
        "word": "on",
        "form": "preposition",
        "transcription": "🇬🇧 ɒn | 🇺🇸 ɑːn",
        "definitions": [
            {
                "text": "Supported by or touching a surface.",
                "examples": [
                    "The book is on the table.",
                    "The picture is on the wall."
                ]
            },
            {
                "text": "Used with days and dates.",
                "examples": [
                    "On Monday.",
                    "On my birthday.",
                    "On the first of May."
                ]
            }
        ],
        "subtext": "on the floor, on a bus, on the phone",
        "emoji": "🔛",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "off"
        ],
        "legacy_id": "A1-COMM-58",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-OTH-COM-14",
        "word": "or",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Used to introduce another possibility.",
                "examples": [
                    "Do you want tea or coffee?"
                ]
            }
        ],
        "subtext": "related to conjunctions connectors",
        "emoji": "❓",
        "transcription": "ɔː(r)",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "and"
        ],
        "legacy_id": "A1-COMM-59",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-OTH-COM-15",
        "word": "so",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Used to show the result of something.",
                "examples": [
                    "It was raining, so I took an umbrella."
                ]
            }
        ],
        "subtext": "related to conjunctions connectors",
        "emoji": "💡",
        "transcription": "🇬🇧 səʊ | 🇺🇸 soʊ",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "because"
        ],
        "legacy_id": "A1-COMM-82",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-OTH-COM-16",
        "word": "some",
        "emoji": "➕",
        "form": "determiner",
        "transcription": "səm",
        "definitions": [
            {
                "text": "An amount or number of something that is not exact.",
                "examples": [
                    "I have some bread.",
                    "There are some students in the room."
                ]
            }
        ],
        "subtext": "unspecified quantity",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "any"
        ],
        "legacy_id": "A1-COMM-83",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-OTH-COM-17",
        "word": "that",
        "emoji": "👉",
        "form": "determiner",
        "transcription": "ðæt",
        "definitions": [
            {
                "text": "Used to refer to a person, thing, or event that is not close to the speaker.",
                "examples": [
                    "That is a big building.",
                    "Who is that man?"
                ]
            }
        ],
        "subtext": "singular, far",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "this"
        ],
        "legacy_id": "A1-COMM-95",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-OTH-COM-18",
        "word": "the",
        "emoji": "👉",
        "form": "determiner",
        "transcription": "ðə",
        "definitions": [
            {
                "text": "Used to refer to a specific thing or person.",
                "examples": [
                    "The book is on the table.",
                    "The sun is bright."
                ]
            }
        ],
        "subtext": "definite article",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "a"
        ],
        "legacy_id": "A1-COMM-96",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-OTH-COM-19",
        "word": "these",
        "emoji": "👇",
        "form": "determiner",
        "transcription": "ðiːz",
        "definitions": [
            {
                "text": "The plural form of 'this'.",
                "examples": [
                    "These are my keys.",
                    "I need these documents."
                ]
            }
        ],
        "subtext": "plural, near",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "those"
        ],
        "legacy_id": "A1-COMM-97",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-OTH-COM-20",
        "word": "this",
        "emoji": "👇",
        "form": "determiner",
        "transcription": "ðɪs",
        "definitions": [
            {
                "text": "Used to refer to a person, thing, or event that is close to the speaker.",
                "examples": [
                    "This is my friend.",
                    "I like this book."
                ]
            }
        ],
        "subtext": "singular, near",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "that"
        ],
        "legacy_id": "A1-COMM-99",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-OTH-COM-21",
        "word": "those",
        "emoji": "👉",
        "form": "determiner",
        "transcription": "🇬🇧 ðəʊz | 🇺🇸 ðoʊz",
        "definitions": [
            {
                "text": "The plural form of 'that'.",
                "examples": [
                    "Those mountains are beautiful.",
                    "Who are those people?"
                ]
            }
        ],
        "subtext": "plural, far",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "these"
        ],
        "legacy_id": "A1-COMM-100",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A1-OTH-COM-22",
        "word": "under",
        "form": "preposition",
        "definitions": [
            {
                "text": "Below or lower than something else.",
                "examples": [
                    "The cat is under the chair."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "👇",
        "transcription": "ˈəndər",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "above"
        ],
        "legacy_id": "A1-COMM-103",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
