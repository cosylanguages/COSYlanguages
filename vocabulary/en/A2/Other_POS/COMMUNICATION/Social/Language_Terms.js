(function() {
    const lang = "en";
    const data = [
    {
            "id": "A2-OTH-COM-001",
            "word": "across",
            "form": "preposition",
            "definitions": [
                    {
                            "text": "From one side to the other side of something.",
                            "examples": [
                                    "We walked across the street."
                            ]
                    }
            ],
            "subtext": "preposition of movement",
            "emoji": "🌉",
            "transcription": "əˈkrɒs",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "legacy_id": "A2-COMM-01",
            "level_code": "A2",
            "domain": "COMMUNICATION",
            "subcategory": "Social",
            "pos_section": "Other_POS",
            "sub_subcategory": "Language_Terms"
    },
    {
            "id": "A2-OTH-COM-002",
            "word": "although",
            "form": "conjunction",
            "definitions": [
                    {
                            "text": "In spite of the fact that; even though.",
                            "examples": [
                                    "Although it was raining, we went for a walk."
                            ]
                    }
            ],
            "subtext": "concession connector",
            "emoji": "🌧️",
            "transcription": "ɔːlˈðəʊ",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "synonyms": [
                    "even though"
            ],
            "legacy_id": "A2-COMM-03",
            "level_code": "A2",
            "domain": "COMMUNICATION",
            "subcategory": "Social",
            "pos_section": "Other_POS",
            "sub_subcategory": "Language_Terms"
    },
    {
            "id": "A2-OTH-COM-003",
            "word": "for",
            "form": "preposition",
            "definitions": [
                    {
                            "text": "Used to specify a period of time.",
                            "examples": [
                                    "I have lived here for five years."
                            ]
                    }
            ],
            "subtext": "duration with present perfect",
            "emoji": "📅",
            "transcription": "fɔːr",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "antonyms": [
                    "since"
            ],
            "legacy_id": "A2-COMM-23",
            "level_code": "A2",
            "domain": "COMMUNICATION",
            "subcategory": "Social",
            "pos_section": "Other_POS",
            "sub_subcategory": "Language_Terms"
    },
    {
            "id": "A2-OTH-COM-004",
            "word": "however",
            "form": "conjunction",
            "definitions": [
                    {
                            "text": "Used to introduce a statement that contrasts with something already said.",
                            "examples": [
                                    "The exam was hard. However, everyone passed."
                            ]
                    }
            ],
            "subtext": "contrast connector",
            "emoji": "🔄",
            "transcription": "haʊˈevər",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "synonyms": [
                    "but",
                    "nevertheless"
            ],
            "legacy_id": "A2-COMM-25",
            "level_code": "A2",
            "domain": "COMMUNICATION",
            "subcategory": "Social",
            "pos_section": "Other_POS",
            "sub_subcategory": "Language_Terms"
    },
    {
            "id": "A2-OTH-COM-005",
            "word": "into",
            "form": "preposition",
            "definitions": [
                    {
                            "text": "To the inside or middle of something.",
                            "examples": [
                                    "He walked into the room."
                            ]
                    }
            ],
            "subtext": "preposition of movement",
            "emoji": "➡️",
            "transcription": "ˈɪntuː",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "antonyms": [
                    "out of"
            ],
            "legacy_id": "A2-COMM-28",
            "level_code": "A2",
            "domain": "COMMUNICATION",
            "subcategory": "Social",
            "pos_section": "Other_POS",
            "sub_subcategory": "Language_Terms"
    },
    {
            "id": "A2-OTH-COM-006",
            "word": "many",
            "form": "determiner",
            "definitions": [
                    {
                            "text": "A large number of countable nouns.",
                            "examples": [
                                    "There are many books on the shelf."
                            ]
                    }
            ],
            "subtext": "quantifier for plural countable nouns",
            "emoji": "🔢",
            "transcription": "ˈmeni",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "antonyms": [
                    "few"
            ],
            "legacy_id": "A2-COMM-32",
            "level_code": "A2",
            "domain": "COMMUNICATION",
            "subcategory": "Social",
            "pos_section": "Other_POS",
            "sub_subcategory": "Language_Terms"
    },
    {
            "id": "A2-OTH-COM-007",
            "word": "much",
            "form": "determiner",
            "definitions": [
                    {
                            "text": "A large amount of uncountable noun.",
                            "examples": [
                                    "Do you have much free time?"
                            ]
                    }
            ],
            "subtext": "quantifier for uncountable nouns",
            "emoji": "📊",
            "transcription": "mʌtʃ",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "antonyms": [
                    "little"
            ],
            "legacy_id": "A2-COMM-34",
            "level_code": "A2",
            "domain": "COMMUNICATION",
            "subcategory": "Social",
            "pos_section": "Other_POS",
            "sub_subcategory": "Language_Terms"
    },
    {
            "id": "A2-OTH-COM-008",
            "word": "out of",
            "form": "preposition",
            "definitions": [
                    {
                            "text": "From the inside of something to the outside.",
                            "examples": [
                                    "She ran out of the building."
                            ]
                    }
            ],
            "subtext": "preposition of movement",
            "emoji": "🚪",
            "transcription": "aʊt əv",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "antonyms": [
                    "into"
            ],
            "legacy_id": "A2-COMM-36",
            "level_code": "A2",
            "domain": "COMMUNICATION",
            "subcategory": "Social",
            "pos_section": "Other_POS",
            "sub_subcategory": "Language_Terms"
    },
    {
            "id": "A2-OTH-COM-009",
            "word": "since",
            "form": "preposition",
            "definitions": [
                    {
                            "text": "From a specific point in time in the past until now.",
                            "examples": [
                                    "She has worked here since 2018."
                            ]
                    }
            ],
            "subtext": "starting point with present perfect",
            "emoji": "📍",
            "transcription": "sɪns",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "antonyms": [
                    "for"
            ],
            "legacy_id": "A2-COMM-47",
            "level_code": "A2",
            "domain": "COMMUNICATION",
            "subcategory": "Social",
            "pos_section": "Other_POS",
            "sub_subcategory": "Language_Terms"
    },
    {
            "id": "A2-OTH-COM-010",
            "word": "so",
            "form": "conjunction",
            "definitions": [
                    {
                            "text": "Used to express a result or decision.",
                            "examples": [
                                    "I was hungry, so I cooked dinner."
                            ]
                    }
            ],
            "subtext": "result connector",
            "emoji": "👉",
            "transcription": "səʊ",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "legacy_id": "A2-COMM-48",
            "level_code": "A2",
            "domain": "COMMUNICATION",
            "subcategory": "Social",
            "pos_section": "Other_POS",
            "sub_subcategory": "Language_Terms"
    },
    {
            "id": "A2-OTH-COM-011",
            "word": "through",
            "form": "preposition",
            "definitions": [
                    {
                            "text": "Moving in one side and out of the other side of an object or space.",
                            "examples": [
                                    "The train went through the tunnel."
                            ]
                    }
            ],
            "subtext": "preposition of movement",
            "emoji": "🚇",
            "transcription": "θruː",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "legacy_id": "A2-COMM-53",
            "level_code": "A2",
            "domain": "COMMUNICATION",
            "subcategory": "Social",
            "pos_section": "Other_POS",
            "sub_subcategory": "Language_Terms"
    },
    {
            "id": "A2-OTH-COM-012",
            "word": "despite",
            "emoji": "↗️",
            "form": "preposition",
            "definitions": [
                    {
                            "text": "Without being affected by; in spite of.",
                            "examples": [
                                    "We enjoyed the walk despite the rainy weather.",
                                    "He passed the exam despite being unwell."
                            ]
                    }
            ],
            "subtext": "in spite of",
            "synonyms": [
                    "in spite of"
            ],
            "transcription": "dɪˈspaɪt",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "language",
            "domain": "COMMUNICATION",
            "subcategory": "Social",
            "pos_section": "Other_POS",
            "sub_subcategory": "Language_Terms"
    },
    {
            "id": "A2-OTH-COM-013",
            "word": "unless",
            "emoji": "🛑",
            "form": "conjunction",
            "definitions": [
                    {
                            "text": "Except if; on the condition that not.",
                            "examples": [
                                    "I won't call you unless there is an emergency.",
                                    "We will arrive early unless traffic is bad."
                            ]
                    }
            ],
            "subtext": "except if",
            "synonyms": [
                    "except if"
            ],
            "transcription": "ənˈles",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "language",
            "domain": "COMMUNICATION",
            "subcategory": "Social",
            "pos_section": "Other_POS",
            "sub_subcategory": "Language_Terms"
    },
    {
            "id": "A2-OTH-COM-014",
            "word": "moreover",
            "emoji": "➕",
            "form": "adverb",
            "definitions": [
                    {
                            "text": "As a further matter; besides.",
                            "examples": [
                                    "The report is accurate; moreover, it is easy to read.",
                                    "He is intelligent; moreover, he works hard."
                            ]
                    }
            ],
            "subtext": "furthermore, besides",
            "synonyms": [
                    "furthermore",
                    "besides"
            ],
            "transcription": "mɔːrˈəʊvə",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "language",
            "domain": "COMMUNICATION",
            "subcategory": "Social",
            "pos_section": "Other_POS",
            "sub_subcategory": "Language_Terms"
    },
    {
            "id": "A2-OTH-COM-015",
            "word": "therefore",
            "emoji": "➡️",
            "form": "adverb",
            "definitions": [
                    {
                            "text": "For that reason; consequently.",
                            "examples": [
                                    "The streets were icy; therefore, we drove slowly.",
                                    "He was sick and therefore stayed in bed."
                            ]
                    }
            ],
            "subtext": "thus, consequently",
            "synonyms": [
                    "thus",
                    "consequently"
            ],
            "transcription": "ˈðeəfɔː",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "language",
            "domain": "COMMUNICATION",
            "subcategory": "Social",
            "pos_section": "Other_POS",
            "sub_subcategory": "Language_Terms"
    },
    {
            "id": "A2-OTH-COM-016",
            "word": "definitely",
            "emoji": "💯",
            "form": "adverb",
            "definitions": [
                    {
                            "text": "Without doubt; clearly.",
                            "examples": [
                                    "I will definitely come to your party.",
                                    "The food here is definitely worth trying."
                            ]
                    }
            ],
            "subtext": "certainly, surely",
            "synonyms": [
                    "certainly",
                    "surely"
            ],
            "transcription": "ˈdefɪnətli",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "language",
            "domain": "COMMUNICATION",
            "subcategory": "Social",
            "pos_section": "Other_POS",
            "sub_subcategory": "Language_Terms"
    }
    ];

    if (typeof window !== 'undefined') {
        window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData.en = (window.vocabularyData.en || []).concat(data);
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = data;
    }
})();
