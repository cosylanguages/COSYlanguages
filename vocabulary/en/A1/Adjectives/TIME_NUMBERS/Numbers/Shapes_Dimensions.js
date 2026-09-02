(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-ADJ-TIM-006",
        "word": "bad",
        "emoji": "👎",
        "form": "adjective",
        "subtext": "bad news / bad luck / bad decision",
        "synonyms": [
            "terrible",
            "awful",
            "unpleasant"
        ],
        "definitions": [
            {
                "text": "Not good; unpleasant or of poor quality.",
                "examples": [
                    "The weather is bad today."
                ]
            },
            {
                "text": "Of low quality; unpleasant or harmful.",
                "examples": [
                    "He had a bad day at work."
                ]
            }
        ],
        "comparative": "worse",
        "superlative": "the worst",
        "transcription": "bæd",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Middle English",
            "origin_word": "badde"
        },
        "antonyms": [
            "good"
        ],
        "legacy_id": "A1-NUM-03",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-008",
        "word": "big",
        "emoji": "🐘",
        "form": "adjective",
        "subtext": "a big house / a big problem / big enough",
        "synonyms": [
            "large",
            "huge"
        ],
        "definitions": [
            {
                "text": "Large in size.",
                "examples": [
                    "It is a big office."
                ]
            },
            {
                "text": "Large in size or amount.",
                "examples": [
                    "They have a big house near the park."
                ]
            }
        ],
        "comparative": "bigger",
        "superlative": "the biggest",
        "transcription": "bɪg",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Middle English",
            "origin_word": "bigge"
        },
        "antonyms": [
            "small"
        ],
        "legacy_id": "A1-NUM-05",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-010",
        "word": "deep",
        "emoji": "🕳️",
        "form": "adjective",
        "subtext": "deep water / a deep hole",
        "synonyms": [
            "bottomless"
        ],
        "definitions": [
            {
                "text": "Going a long way from the top or surface to the bottom.",
                "examples": [
                    "The river is very deep here."
                ]
            }
        ],
        "comparative": "deeper",
        "superlative": "the deepest",
        "transcription": "dip",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "shallow"
        ],
        "legacy_id": "A1-NUM-10",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-012",
        "word": "difficult",
        "emoji": "❌",
        "form": "adjective",
        "definitions": [
            {
                "text": "Hard to do or understand.",
                "examples": [
                    "This work is difficult."
                ]
            },
            {
                "text": "Not easy; requiring effort.",
                "examples": [
                    "The negotiation was very difficult."
                ]
            }
        ],
        "subtext": "difficult to do / very difficult / find it difficult",
        "comparative": "more difficult",
        "superlative": "the most difficult",
        "transcription": "ˈdɪfəkəlt",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "easy"
        ],
        "legacy_id": "A1-NUM-12",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-014",
        "word": "easy",
        "emoji": "✅",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not difficult.",
                "examples": [
                    "The test is easy.",
                    "The application form is easy to complete."
                ]
            }
        ],
        "subtext": "easy to do / nice and easy / not easy",
        "comparative": "easier",
        "superlative": "the easiest",
        "transcription": "ˈizi",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "difficult"
        ],
        "legacy_id": "A1-NUM-14",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-016",
        "word": "empty",
        "form": "adjective",
        "subtext": "an empty flat / an empty room / nearly empty",
        "definitions": [
            {
                "text": "Containing nothing; with no people.",
                "examples": [
                    "The office is empty at weekends."
                ]
            }
        ],
        "comparative": "emptier",
        "superlative": "the emptiest",
        "emoji": "🫙",
        "transcription": "ˈɛmti",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "full"
        ],
        "legacy_id": "A1-NUM-16",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-018",
        "word": "fast",
        "form": "adjective",
        "subtext": "fast food / fast train / very fast",
        "synonyms": [
            "quick",
            "rapid"
        ],
        "definitions": [
            {
                "text": "Moving or happening quickly.",
                "examples": [
                    "The train to work is fast and reliable."
                ]
            }
        ],
        "comparative": "faster",
        "superlative": "the fastest",
        "emoji": "🏎️",
        "transcription": "fæst",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "slow"
        ],
        "legacy_id": "A1-NUM-18",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-020",
        "word": "full",
        "form": "adjective",
        "subtext": "full time / a full day / full of people",
        "definitions": [
            {
                "text": "Containing as much as possible; complete.",
                "examples": [
                    "I feel full after that lunch."
                ]
            }
        ],
        "comparative": "fuller",
        "superlative": "the fullest",
        "emoji": "🥛",
        "transcription": "fʊl",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "empty"
        ],
        "legacy_id": "A1-NUM-23",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-022",
        "word": "good",
        "emoji": "👍",
        "form": "adjective",
        "subtext": "good idea / good luck / good value",
        "synonyms": [
            "great",
            "nice",
            "pleasant"
        ],
        "definitions": [
            {
                "text": "Of high quality or ability; pleasant.",
                "examples": [
                    "This is a good job."
                ]
            },
            {
                "text": "Of high quality or pleasant.",
                "examples": [
                    "She has a good job with flexible hours."
                ]
            }
        ],
        "comparative": "better",
        "superlative": "the best",
        "transcription": "gʊd",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "gōdaz"
        },
        "antonyms": [
            "bad"
        ],
        "legacy_id": "A1-NUM-25",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-024",
        "word": "hard",
        "form": "adjective",
        "subtext": "hard work / a hard decision / too hard",
        "synonyms": [
            "firm",
            "solid",
            "difficult"
        ],
        "definitions": [
            {
                "text": "Firm and solid; difficult.",
                "examples": [
                    "The chair is very hard and uncomfortable."
                ]
            }
        ],
        "comparative": "harder",
        "superlative": "the hardest",
        "emoji": "🧱",
        "transcription": "hɑrd",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "soft"
        ],
        "legacy_id": "A1-NUM-27",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-026",
        "word": "heavy",
        "form": "adjective",
        "subtext": "heavy traffic / heavy rain / too heavy",
        "synonyms": [
            "weighty"
        ],
        "definitions": [
            {
                "text": "Of great weight; difficult to carry.",
                "examples": [
                    "The bag is very heavy with all those files."
                ]
            }
        ],
        "comparative": "heavier",
        "superlative": "the heaviest",
        "emoji": "🏋️",
        "transcription": "ˈhɛvi",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "light"
        ],
        "legacy_id": "A1-NUM-29",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-028",
        "word": "high",
        "form": "adjective",
        "subtext": "high price / high rent / high quality",
        "definitions": [
            {
                "text": "Of greater than average height or level.",
                "examples": [
                    "The rent in this area is very high."
                ]
            }
        ],
        "comparative": "higher",
        "superlative": "the highest",
        "emoji": "🏔️",
        "transcription": "haɪ",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "low"
        ],
        "legacy_id": "A1-NUM-31",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-030",
        "word": "large",
        "form": "adjective",
        "subtext": "a large city / a large company / a large amount",
        "definitions": [
            {
                "text": "Of more than average size or amount.",
                "examples": [
                    "Paris is a very large city."
                ]
            }
        ],
        "comparative": "larger",
        "superlative": "the largest",
        "emoji": "🐘",
        "transcription": "lɑrʤ",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "small"
        ],
        "legacy_id": "A1-NUM-33",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-032",
        "word": "light",
        "form": "adjective",
        "subtext": "light rain / light traffic / a light meal",
        "synonyms": [
            "not heavy",
            "pale"
        ],
        "definitions": [
            {
                "text": "Not heavy; pale in colour.",
                "examples": [
                    "She carries a light bag to work every day."
                ]
            }
        ],
        "comparative": "lighter",
        "superlative": "the lightest",
        "emoji": "🪶",
        "transcription": "laɪt",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "heavy"
        ],
        "legacy_id": "A1-NUM-35",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-034",
        "word": "little",
        "form": "adjective",
        "subtext": "a little bit / a little money / too little",
        "definitions": [
            {
                "text": "Small in size; a small amount of.",
                "examples": [
                    "He drives a little car to save on fuel."
                ]
            }
        ],
        "comparative": "smaller",
        "superlative": "the smallest",
        "emoji": "🐭",
        "transcription": "ˈlɪtəl",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "small"
        ],
        "legacy_id": "A1-NUM-37",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-036",
        "word": "long",
        "form": "adjective",
        "subtext": "a long journey / a long day / a long time",
        "definitions": [
            {
                "text": "Of great length; lasting a long time.",
                "examples": [
                    "She has a long commute every day."
                ]
            }
        ],
        "comparative": "longer",
        "superlative": "the longest",
        "emoji": "📏",
        "transcription": "lɔŋ",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "langaz"
        },
        "antonyms": [
            "short"
        ],
        "legacy_id": "A1-NUM-39",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-038",
        "word": "low",
        "form": "adjective",
        "subtext": "low price / low salary / low quality",
        "definitions": [
            {
                "text": "Of less than average height or level.",
                "examples": [
                    "The salary is too low for the hours involved."
                ]
            }
        ],
        "comparative": "lower",
        "superlative": "the lowest",
        "emoji": "⬇️",
        "transcription": "loʊ",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "high"
        ],
        "legacy_id": "A1-NUM-41",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-040",
        "word": "new",
        "form": "adjective",
        "subtext": "new job / brand new / completely new",
        "synonyms": [
            "modern",
            "recently made"
        ],
        "definitions": [
            {
                "text": "Not existing before; recently made.",
                "examples": [
                    "She has a new job starting in March."
                ]
            }
        ],
        "comparative": "newer",
        "superlative": "the newest",
        "emoji": "🆕",
        "transcription": "nu",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "neujaz"
        },
        "antonyms": [
            "old"
        ],
        "legacy_id": "A1-NUM-47",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-042",
        "word": "old",
        "form": "adjective",
        "emoji": "👴",
        "definitions": [
            {
                "text": "Having lived or existed for a long time.",
                "examples": [
                    "This is an old book."
                ]
            },
            {
                "text": "Having existed for a long time.",
                "examples": [
                    "He works with old clients from ten years ago."
                ]
            }
        ],
        "subtext": "old friend / old habits / very old",
        "synonyms": [
            "elderly",
            "ancient"
        ],
        "comparative": "older",
        "superlative": "the oldest",
        "transcription": "oʊld",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "new"
        ],
        "legacy_id": "A1-NUM-50",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-044",
        "word": "quick",
        "emoji": "⚡",
        "form": "adjective",
        "definitions": [
            {
                "text": "Happening or done in a short time.",
                "examples": [
                    "She gave a quick answer."
                ]
            }
        ],
        "subtext": "a quick lunch / very quick",
        "synonyms": [
            "fast"
        ],
        "comparative": "quicker",
        "superlative": "the quickest",
        "transcription": "kwɪk",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "slow"
        ],
        "legacy_id": "A1-NUM-52",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-046",
        "word": "round",
        "emoji": "⭕",
        "form": "adjective",
        "subtext": "a round table / round shape",
        "synonyms": [
            "circular"
        ],
        "definitions": [
            {
                "text": "Shaped like a circle.",
                "examples": [
                    "The table is round."
                ]
            }
        ],
        "comparative": "rounder",
        "superlative": "the roundest",
        "transcription": "raʊnd",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "oval"
        ],
        "legacy_id": "A1-NUM-54",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-048",
        "word": "shallow",
        "emoji": "📏",
        "form": "adjective",
        "subtext": "shallow water / a shallow end",
        "synonyms": [
            "not deep"
        ],
        "definitions": [
            {
                "text": "Having only a short distance from the top to the bottom.",
                "examples": [
                    "The water is shallow, so we can walk across."
                ]
            }
        ],
        "comparative": "shallower",
        "superlative": "the shallowest",
        "transcription": "ˈʃæloʊ",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "deep"
        ],
        "legacy_id": "A1-NUM-56",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-050",
        "word": "short",
        "form": "adjective",
        "emoji": "📏",
        "definitions": [
            {
                "text": "A person or thing that is not tall.",
                "examples": [
                    "She is short.",
                    "The pencil is short."
                ]
            },
            {
                "text": "Of less than average height or length.",
                "examples": [
                    "He has a short commute — ten minutes by bike."
                ]
            }
        ],
        "subtext": "a short journey / short hair / too short",
        "synonyms": [
            "small",
            "brief"
        ],
        "comparative": "shorter",
        "superlative": "the shortest",
        "transcription": "ʃɔrt",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "tall"
        ],
        "legacy_id": "A1-NUM-58",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-052",
        "word": "slow",
        "form": "adjective",
        "subtext": "slow progress / slow internet / very slow",
        "synonyms": [
            "leisurely"
        ],
        "definitions": [
            {
                "text": "Not fast; taking a long time.",
                "examples": [
                    "The new system is very slow."
                ]
            }
        ],
        "comparative": "slower",
        "superlative": "the slowest",
        "emoji": "🐢",
        "transcription": "sloʊ",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "fast"
        ],
        "legacy_id": "A1-NUM-60",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-054",
        "word": "small",
        "emoji": "🐭",
        "form": "adjective",
        "subtext": "a small flat / a small salary / too small",
        "synonyms": [
            "little",
            "tiny"
        ],
        "definitions": [
            {
                "text": "Little in size.",
                "examples": [
                    "She has a small flat."
                ]
            },
            {
                "text": "Little in size or amount.",
                "examples": [
                    "She rents a small flat in the city centre."
                ]
            }
        ],
        "comparative": "smaller",
        "superlative": "the smallest",
        "transcription": "smɔl",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "smalaz"
        },
        "antonyms": [
            "large"
        ],
        "legacy_id": "A1-NUM-62",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-056",
        "word": "soft",
        "form": "adjective",
        "subtext": "soft light / soft music / soft skills",
        "synonyms": [
            "gentle",
            "smooth"
        ],
        "definitions": [
            {
                "text": "Not hard; gentle to the touch.",
                "examples": [
                    "The sofa is very soft and comfortable."
                ]
            }
        ],
        "comparative": "softer",
        "superlative": "the softest",
        "emoji": "☁️",
        "transcription": "sɔft",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "hard"
        ],
        "legacy_id": "A1-NUM-64",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-058",
        "word": "square",
        "emoji": "⬛",
        "form": "adjective",
        "subtext": "a square box / square shape",
        "synonyms": [
            "four-sided"
        ],
        "definitions": [
            {
                "text": "Having four equal sides and four 90-degree angles.",
                "examples": [
                    "The box is square."
                ]
            }
        ],
        "comparative": "squarer",
        "superlative": "the squarest",
        "transcription": "skwɛr",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "triangular"
        ],
        "legacy_id": "A1-NUM-66",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-060",
        "word": "tall",
        "form": "adjective",
        "emoji": "🦒",
        "definitions": [
            {
                "text": "A person or thing that is big from bottom to top.",
                "examples": [
                    "He is very tall.",
                    "That building is tall."
                ]
            },
            {
                "text": "Of greater than average height.",
                "examples": [
                    "She is a tall woman who works as an engineer."
                ]
            }
        ],
        "subtext": "a tall building / a tall person / tall enough",
        "synonyms": [
            "high",
            "lofty"
        ],
        "comparative": "taller",
        "superlative": "the tallest",
        "transcription": "tɔl",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "short"
        ],
        "legacy_id": "A1-NUM-70",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-062",
        "word": "thick",
        "emoji": "📖",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having a large distance between two sides.",
                "examples": [
                    "This is a thick book."
                ]
            }
        ],
        "subtext": "thick walls / thick hair",
        "synonyms": [
            "wide"
        ],
        "comparative": "thicker",
        "superlative": "the thickest",
        "transcription": "θɪk",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "thin"
        ],
        "legacy_id": "A1-NUM-72",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-ADJ-TIM-064",
        "word": "young",
        "form": "adjective",
        "emoji": "👶",
        "definitions": [
            {
                "text": "Having lived or existed for only a short time.",
                "examples": [
                    "He is a young man."
                ]
            }
        ],
        "subtext": "young person / young professional / young at heart",
        "synonyms": [
            "youthful"
        ],
        "comparative": "younger",
        "superlative": "the youngest",
        "transcription": "jəŋ",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "old"
        ],
        "legacy_id": "A1-NUM-77",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Adjectives",
        "sub_subcategory": "Shapes_Dimensions"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
