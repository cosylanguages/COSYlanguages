(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-ADJ-SEL-001",
        "word": "black",
        "emoji": "\u2b1b",
        "form": "adjective",
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
        "transcription": "bl\u00e6k",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "blakaz",
            "origin_meaning": "black"
        },
        "antonyms": [
            "white"
        ],
        "legacy_id": "A1-SELF-16",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Colours_Shades"
    },
    {
        "id": "A1-ADJ-SEL-003",
        "word": "blue",
        "emoji": "\ud83d\udfe6",
        "form": "adjective",
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
            "origin_word": "bl\u0113waz",
            "origin_meaning": "blue"
        },
        "antonyms": [
            "orange"
        ],
        "legacy_id": "A1-SELF-18",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Colours_Shades"
    },
    {
        "id": "A1-ADJ-SEL-005",
        "word": "brown",
        "form": "adjective",
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
        "emoji": "\ud83e\udd0e",
        "transcription": "bra\u028an",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": null,
        "antonyms": [
            "grey"
        ],
        "legacy_id": "A1-SELF-29",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Colours_Shades"
    },
    {
        "id": "A1-ADJ-SEL-007",
        "word": "gold",
        "emoji": "\ud83d\udfe1",
        "form": "adjective",
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
        "transcription": "go\u028ald",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": null,
        "antonyms": [
            "silver"
        ],
        "legacy_id": "A1-SELF-73",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Colours_Shades"
    },
    {
        "id": "A1-ADJ-SEL-009",
        "word": "green",
        "emoji": "\ud83d\udfe9",
        "form": "adjective",
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
            "origin_word": "gr\u014dniz",
            "origin_meaning": "green"
        },
        "antonyms": [
            "pink"
        ],
        "legacy_id": "A1-SELF-77",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Colours_Shades"
    },
    {
        "id": "A1-ADJ-SEL-011",
        "word": "grey",
        "form": "adjective",
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
        "emoji": "\ud83e\ude76",
        "transcription": "gre\u026a",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": null,
        "antonyms": [
            "brown"
        ],
        "legacy_id": "A1-SELF-79",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Colours_Shades"
    },
    {
        "id": "A1-ADJ-SEL-013",
        "word": "orange",
        "form": "adjective",
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
        "emoji": "\ud83e\udde1",
        "transcription": "\u02c8\u0254r\u026an\u02a4",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": "fruit",
        "antonyms": [
            "blue"
        ],
        "legacy_id": "A1-SELF-117",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Colours_Shades"
    },
    {
        "id": "A1-ADJ-SEL-015",
        "word": "pink",
        "form": "adjective",
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
        "emoji": "\ud83e\ude77",
        "transcription": "p\u026a\u014bk",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": null,
        "antonyms": [
            "green"
        ],
        "legacy_id": "A1-SELF-128",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Colours_Shades"
    },
    {
        "id": "A1-ADJ-SEL-017",
        "word": "purple",
        "emoji": "\ud83d\udfe3",
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
        "transcription": "\u02c8p\u0259rp\u0259l",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": null,
        "antonyms": [
            "yellow"
        ],
        "legacy_id": "A1-SELF-137",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Colours_Shades"
    },
    {
        "id": "A1-ADJ-SEL-019",
        "word": "red",
        "emoji": "\ud83d\udfe5",
        "form": "adjective",
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
        "transcription": "r\u025bd",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": "basic",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "raudaz",
            "origin_meaning": "red"
        },
        "antonyms": [
            "green"
        ],
        "legacy_id": "A1-SELF-146",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Colours_Shades"
    },
    {
        "id": "A1-ADJ-SEL-021",
        "word": "silver",
        "emoji": "\u26aa",
        "form": "adjective",
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
        "transcription": "\u02c8s\u026alv\u0259r",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": null,
        "antonyms": [
            "gold"
        ],
        "legacy_id": "A1-SELF-170",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Colours_Shades"
    },
    {
        "id": "A1-ADJ-SEL-023",
        "word": "white",
        "emoji": "\u2b1c",
        "form": "adjective",
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
        "transcription": "wa\u026at",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "hw\u012btaz",
            "origin_meaning": "white"
        },
        "antonyms": [
            "black"
        ],
        "legacy_id": "A1-SELF-219",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Colours_Shades"
    },
    {
        "id": "A1-ADJ-SEL-025",
        "word": "yellow",
        "emoji": "\ud83d\udfe8",
        "form": "adjective",
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
        "transcription": "\u02c8j\u025blo\u028a",
        "lang": "en",
        "level": "starter",
        "theme": "colours",
        "sub_theme": "basic",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "gelwaz",
            "origin_meaning": "yellow"
        },
        "antonyms": [
            "purple"
        ],
        "legacy_id": "A1-SELF-225",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Colours_Shades"
    },
    {
        "id": "A1-ADJ-SEL-241",
        "word": "pale",
        "emoji": "\ud83c\udfa8",
        "form": "adjective",
        "transcription": "pe\u026al",
        "definitions": [
            {
                "text": "Light in color or shade.",
                "examples": [
                    "She looked pale after being sick.",
                    "The walls are painted pale green."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Colours_Shades"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
