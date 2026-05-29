(function() {
    const data = [
    {
        "id": "en_starter_size_shape_031",
        "word": "top",
        "emoji": "🔝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "opposite": "bottom",
        "definitions": [
            {
                "text": "The highest part of something.",
                "examples": [
                    "The book is on the top shelf."
                ]
            }
        ],
        "subtext": "related to size shape",
        "transcription": "tɔp",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_032",
        "word": "bottom",
        "emoji": "⬇️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "opposite": "top",
        "definitions": [
            {
                "text": "The lowest part of something.",
                "examples": [
                    "Write your name at the bottom of the page."
                ]
            }
        ],
        "subtext": "related to size shape",
        "transcription": "ˈbɑtəm",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_033",
        "word": "tall",
        "form": "adjective",
        "opposite": "short",
        "oppositeEmoji": "📏",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_034",
        "word": "short",
        "form": "adjective",
        "opposite": "tall",
        "oppositeEmoji": "🗼",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_035",
        "word": "young",
        "form": "adjective",
        "opposite": "old",
        "oppositeEmoji": "👴",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_036",
        "word": "old",
        "form": "adjective",
        "opposite": "new",
        "oppositeEmoji": "👶",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_037",
        "word": "good",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "bad",
        "oppositeEmoji": "👎",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_038",
        "word": "bad",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "good",
        "oppositeEmoji": "👍",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_039",
        "word": "big",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "small",
        "oppositeEmoji": "🐭",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_040",
        "word": "small",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "large",
        "oppositeEmoji": "🐘",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_041",
        "word": "easy",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "difficult",
        "oppositeEmoji": "❌",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_042",
        "word": "difficult",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "easy",
        "oppositeEmoji": "✅",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_colours_015",
        "word": "red",
        "emoji": "🟥",
        "form": "adjective",
        "opposite": "green",
        "subtext": "dark red, bright red / red wine / red face / red light",
        "definitions": [
            {
                "text": "Having the colour of blood or a ripe tomato.",
                "examples": [
                    "She has a red bag."
                ]
            },
            {
                "text": "Having the colour of blood.",
                "examples": [
                    "She drives a red car."
                ]
            }
        ],
        "comparative": "redder",
        "superlative": "the reddest",
        "transcription": "rɛd",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": "basic",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "raudaz",
            "origin_meaning": "red"
        }
    },
    {
        "id": "en_starter_colours_016",
        "word": "blue",
        "emoji": "🟦",
        "form": "adjective",
        "opposite": "orange",
        "subtext": "light blue, dark blue / dark blue / light blue / blue sky",
        "definitions": [
            {
                "text": "Having the colour of a clear sky.",
                "examples": [
                    "His car is blue."
                ]
            },
            {
                "text": "Having the colour of the sky.",
                "examples": [
                    "He wears a blue shirt to work."
                ]
            }
        ],
        "comparative": "bluer",
        "superlative": "the bluest",
        "transcription": "blu",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": "basic",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "blēwaz",
            "origin_meaning": "blue"
        }
    },
    {
        "id": "en_starter_colours_017",
        "word": "green",
        "emoji": "🟩",
        "form": "adjective",
        "opposite": "pink",
        "subtext": "bright green, dark green / green energy / green space / bright green",
        "definitions": [
            {
                "text": "Having the colour of grass or leaves.",
                "examples": [
                    "She wears a green dress."
                ]
            },
            {
                "text": "Having the colour of grass.",
                "examples": [
                    "The company has green credentials."
                ]
            }
        ],
        "comparative": "greener",
        "superlative": "the greenest",
        "transcription": "grin",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": "basic",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "grōniz",
            "origin_meaning": "green"
        }
    },
    {
        "id": "en_starter_colours_018",
        "word": "white",
        "emoji": "⬜",
        "form": "adjective",
        "opposite": "black",
        "oppositeEmoji": "⬛",
        "subtext": "pure white, snow white / white wine / off-white / bright white",
        "definitions": [
            {
                "text": "Having the colour of snow or milk.",
                "examples": [
                    "The walls are white."
                ]
            },
            {
                "text": "Having the lightest colour.",
                "examples": [
                    "The office walls are painted white."
                ]
            }
        ],
        "comparative": "whiter",
        "superlative": "the whitest",
        "transcription": "waɪt",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "hwītaz",
            "origin_meaning": "white"
        }
    },
    {
        "id": "en_starter_colours_019",
        "word": "black",
        "emoji": "⬛",
        "form": "adjective",
        "opposite": "white",
        "oppositeEmoji": "⬜",
        "subtext": "jet black, dark as night / black coffee / black market / jet black",
        "definitions": [
            {
                "text": "Having the darkest colour, like the night sky.",
                "examples": [
                    "He wears a black coat."
                ]
            },
            {
                "text": "Having the darkest colour.",
                "examples": [
                    "He always wears a black suit."
                ]
            }
        ],
        "comparative": "blacker",
        "superlative": "the blackest",
        "transcription": "blæk",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "blakaz",
            "origin_meaning": "black"
        }
    },
    {
        "id": "en_starter_colours_020",
        "word": "yellow",
        "emoji": "🟨",
        "form": "adjective",
        "opposite": "purple",
        "subtext": "bright yellow, lemon yellow / yellow light / pale yellow / bright yellow",
        "definitions": [
            {
                "text": "Having the colour of the sun or a lemon.",
                "examples": [
                    "She has a yellow umbrella."
                ]
            },
            {
                "text": "Having the colour of the sun.",
                "examples": [
                    "She bought a yellow notepad."
                ]
            }
        ],
        "comparative": "yellower",
        "superlative": "the yellowest",
        "transcription": "ˈjɛloʊ",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": "basic",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "gelwaz",
            "origin_meaning": "yellow"
        }
    },
    {
        "id": "en_starter_size_shape_043",
        "word": "large",
        "form": "adjective",
        "opposite": "small",
        "oppositeEmoji": "🐭",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_044",
        "word": "little",
        "form": "adjective",
        "opposite": "small",
        "oppositeEmoji": "🐘",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_045",
        "word": "long",
        "form": "adjective",
        "opposite": "short",
        "oppositeEmoji": "📏",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_046",
        "word": "high",
        "form": "adjective",
        "opposite": "low",
        "oppositeEmoji": "📉",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_047",
        "word": "low",
        "form": "adjective",
        "opposite": "high",
        "oppositeEmoji": "📈",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_048",
        "word": "full",
        "form": "adjective",
        "opposite": "empty",
        "oppositeEmoji": "🫙",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_049",
        "word": "empty",
        "form": "adjective",
        "opposite": "full",
        "oppositeEmoji": "🥛",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_050",
        "word": "hard",
        "form": "adjective",
        "opposite": "soft",
        "oppositeEmoji": "☁️",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_051",
        "word": "soft",
        "form": "adjective",
        "opposite": "hard",
        "oppositeEmoji": "🧱",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_052",
        "word": "heavy",
        "form": "adjective",
        "opposite": "light",
        "oppositeEmoji": "🪶",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_053",
        "word": "light",
        "form": "adjective",
        "opposite": "heavy",
        "oppositeEmoji": "🐘",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_colours_021",
        "word": "brown",
        "form": "adjective",
        "opposite": "grey",
        "subtext": "dark brown / light brown / brown bread",
        "definitions": [
            {
                "text": "Having the colour of wood or earth.",
                "examples": [
                    "She has brown eyes and dark hair."
                ]
            }
        ],
        "comparative": "browner",
        "superlative": "the brownest",
        "emoji": "🤎",
        "transcription": "braʊn",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": null
    },
    {
        "id": "en_starter_colours_022",
        "word": "grey",
        "form": "adjective",
        "opposite": "brown",
        "subtext": "grey area / grey sky / pale grey",
        "definitions": [
            {
                "text": "Having a colour between black and white.",
                "examples": [
                    "He has grey hair and a kind face."
                ]
            }
        ],
        "comparative": "greyer",
        "superlative": "the greyest",
        "emoji": "🩶",
        "transcription": "greɪ",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": null
    },
    {
        "id": "en_starter_colours_023",
        "word": "pink",
        "form": "adjective",
        "opposite": "green",
        "subtext": "light pink / bright pink / hot pink",
        "definitions": [
            {
                "text": "Having a pale red colour.",
                "examples": [
                    "She prefers pink to red."
                ]
            }
        ],
        "comparative": "pinker",
        "superlative": "the pinkest",
        "emoji": "🩷",
        "transcription": "pɪŋk",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": null
    },
    {
        "id": "en_starter_colours_024",
        "word": "orange",
        "image": "images/vocabulary/colours/orange.png",
        "form": "adjective",
        "opposite": "blue",
        "subtext": "bright orange / dark orange / orange light",
        "definitions": [
            {
                "text": "Having the colour of an orange fruit.",
                "examples": [
                    "He bought an orange jacket."
                ]
            }
        ],
        "comparative": "more orange",
        "superlative": "the most orange",
        "emoji": "🧡",
        "transcription": "ˈɔrɪnʤ",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": "fruit"
    },
    {
        "id": "en_starter_size_shape_054",
        "word": "new",
        "form": "adjective",
        "opposite": "old",
        "oppositeEmoji": "👴",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_055",
        "word": "fast",
        "form": "adjective",
        "opposite": "slow",
        "oppositeEmoji": "🐢",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_056",
        "word": "slow",
        "form": "adjective",
        "opposite": "fast",
        "oppositeEmoji": "🏎️",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_057",
        "word": "round",
        "emoji": "⭕",
        "form": "adjective",
        "opposite": "oval",
        "oppositeEmoji": "⬛",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_058",
        "word": "square",
        "emoji": "⬛",
        "form": "adjective",
        "opposite": "triangular",
        "oppositeEmoji": "⭕",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_082",
        "word": "triangular",
        "emoji": "🔺",
        "form": "adjective",
        "opposite": "square",
        "subtext": "a triangular shape",
        "synonyms": [
            "three-sided"
        ],
        "definitions": [
            {
                "text": "Shaped like a triangle.",
                "examples": [
                    "The sign is triangular."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "traɪˈæŋgjələr",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_083",
        "word": "rectangular",
        "emoji": "▭",
        "form": "adjective",
        "opposite": "round",
        "subtext": "a rectangular room",
        "synonyms": [
            "four-sided"
        ],
        "definitions": [
            {
                "text": "Shaped like a rectangle.",
                "examples": [
                    "We have a rectangular table in the kitchen."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "rɛkˈtæŋgjələr",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_084",
        "word": "oval",
        "emoji": "🥚",
        "form": "adjective",
        "opposite": "round",
        "subtext": "an oval mirror",
        "synonyms": [
            "egg-shaped"
        ],
        "definitions": [
            {
                "text": "Shaped like an egg.",
                "examples": [
                    "The mirror is oval."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈoʊvəl",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_colours_025",
        "word": "gold",
        "emoji": "🟡",
        "form": "adjective",
        "opposite": "silver",
        "subtext": "a gold ring / gold medal",
        "synonyms": [
            "golden"
        ],
        "definitions": [
            {
                "text": "Having the color of gold.",
                "examples": [
                    "She has a gold watch."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "goʊld",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": null
    },
    {
        "id": "en_starter_colours_026",
        "word": "silver",
        "emoji": "⚪",
        "form": "adjective",
        "opposite": "gold",
        "subtext": "a silver car / silver jewelry",
        "synonyms": [
            "silvery"
        ],
        "definitions": [
            {
                "text": "Having the color of silver.",
                "examples": [
                    "He has a silver car."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈsɪlvər",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_059",
        "word": "deep",
        "emoji": "🕳️",
        "form": "adjective",
        "opposite": "shallow",
        "oppositeEmoji": "📏",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_060",
        "word": "shallow",
        "emoji": "📏",
        "form": "adjective",
        "opposite": "deep",
        "oppositeEmoji": "🕳️",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_measurements_003",
        "word": "wide",
        "emoji": "↔️",
        "form": "adjective",
        "opposite": "narrow",
        "oppositeEmoji": "⬇️",
        "subtext": "a wide road / wide open",
        "synonyms": [
            "broad"
        ],
        "definitions": [
            {
                "text": "Measuring a long distance from one side to the other.",
                "examples": [
                    "The river is very wide here."
                ]
            }
        ],
        "comparative": "wider",
        "superlative": "the widest",
        "transcription": "waɪd",
        "lang": "en",
        "level": "starter",
        "theme": "size_measurements",
        "sub_theme": null
    },
    {
        "id": "en_starter_size_measurements_004",
        "word": "narrow",
        "emoji": "⬇️",
        "form": "adjective",
        "opposite": "wide",
        "oppositeEmoji": "↔️",
        "subtext": "a narrow street / too narrow",
        "synonyms": [
            "thin"
        ],
        "definitions": [
            {
                "text": "Measuring only a small distance from one side to the other.",
                "examples": [
                    "The path was too narrow for the car."
                ]
            }
        ],
        "comparative": "narrower",
        "superlative": "the narrowest",
        "transcription": "ˈnɛroʊ",
        "lang": "en",
        "level": "starter",
        "theme": "size_measurements",
        "sub_theme": null
    },
    {
        "id": "en_starter_colours_027",
        "word": "purple",
        "emoji": "🟣",
        "form": "adjective",
        "definitions": [
            {
                "text": "A color between blue and red.",
                "examples": [
                    "I have a purple shirt."
                ]
            }
        ],
        "subtext": "purple flowers / bright purple",
        "synonyms": [
            "violet"
        ],
        "comparative": "more purple",
        "superlative": "the most purple",
        "opposite": "yellow",
        "transcription": "ˈpərpəl",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_061",
        "word": "quick",
        "emoji": "⚡",
        "form": "adjective",
        "opposite": "slow",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_size_shape_062",
        "word": "thick",
        "emoji": "📖",
        "form": "adjective",
        "opposite": "thin",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_colours_028",
        "word": "color",
        "emoji": "🎨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Red, blue, green, etc. (American spelling)",
                "examples": [
                    "What is your favorite color?"
                ]
            }
        ],
        "subtext": "visual property",
        "transcription": "ˈkələr",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": null
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();