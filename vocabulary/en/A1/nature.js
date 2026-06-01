(function() {
    const data = [
    {
        "id": "en_starter_plants_natural_world_003",
        "word": "tree",
        "emoji": "🌳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "trees",
        "subtext": "green tree, tall tree",
        "definitions": [
            {
                "text": "A tall plant that has a hard trunk, branches, and leaves.",
                "examples": [
                    "There are many trees in the park.",
                    "The bird is in the tree."
                ]
            }
        ],
        "opposite": null,
        "transcription": "tri",
        "lang": "en",
        "level": "starter",
        "theme": "plants_natural_world",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "trewa",
            "origin_meaning": "tree"
        }
    },
    {
        "id": "en_starter_plants_natural_world_004",
        "word": "flower",
        "emoji": "🌸",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "flowers",
        "subtext": "beautiful flower, smell a flower",
        "definitions": [
            {
                "text": "The brightly colored part of a plant from which seeds or fruit grow.",
                "examples": [
                    "I bought some flowers for my mother.",
                    "Roses are beautiful flowers."
                ]
            }
        ],
        "opposite": null,
        "transcription": "flaʊər",
        "lang": "en",
        "level": "starter",
        "theme": "plants_natural_world",
        "sub_theme": null
    },
    {
        "id": "en_starter_nature_022",
        "word": "mountain",
        "emoji": "🏔️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "mountains",
        "subtext": "high mountain, snow-capped mountain",
        "definitions": [
            {
                "text": "A very high hill.",
                "examples": [
                    "We can see mountains from our window.",
                    "The mountain is covered in snow."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ˈmaʊntən",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null
    },
    {
        "id": "en_starter_nature_023",
        "word": "river",
        "emoji": "🏞️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "rivers",
        "subtext": "long river, swim in a river",
        "definitions": [
            {
                "text": "A natural wide flow of fresh water across the land into the sea.",
                "examples": [
                    "The river flows through the city.",
                    "There is a bridge over the river."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ˈrɪvər",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null
    },
    {
        "id": "en_starter_nature_024",
        "word": "sea",
        "emoji": "🌊",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "seas",
        "subtext": "blue sea, swim in the sea",
        "definitions": [
            {
                "text": "The large area of salty water that covers much of the Earth's surface.",
                "examples": [
                    "I love swimming in the sea.",
                    "The sea is very calm today."
                ]
            }
        ],
        "opposite": null,
        "transcription": "si",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "saiwiz"
        }
    },
    {
        "id": "en_starter_nature_025",
        "word": "beach",
        "emoji": "🏖️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "beaches",
        "subtext": "sandy beach, go to the beach",
        "definitions": [
            {
                "text": "An area of sand or small stones next to the sea.",
                "examples": [
                    "Let's go to the beach today.",
                    "The children are playing on the beach."
                ]
            }
        ],
        "opposite": null,
        "transcription": "biʧ",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null
    },
    {
        "id": "en_starter_nature_026",
        "word": "sky",
        "emoji": "🌌",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "skies",
        "subtext": "blue sky, cloudy sky",
        "definitions": [
            {
                "text": "The space above the Earth that you see when you look up.",
                "examples": [
                    "The sky is very blue today.",
                    "There are no clouds in the sky."
                ]
            }
        ],
        "opposite": null,
        "transcription": "skaɪ",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Old Norse",
            "origin_word": "ský"
        }
    },
    {
        "id": "en_starter_nature_027",
        "word": "moon",
        "emoji": "🌙",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "full moon, look at the moon",
        "definitions": [
            {
                "text": "The large round object that moves around the Earth and shines at night.",
                "examples": [
                    "The moon is very bright tonight."
                ]
            }
        ],
        "opposite": null,
        "transcription": "mun",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "mēnô",
            "origin_meaning": "moon"
        }
    },
    {
        "id": "en_starter_nature_028",
        "word": "grass",
        "emoji": "🌱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "A common wild plant with narrow green leaves.",
                "examples": [
                    "Don't walk on the grass."
                ]
            }
        ],
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "græs",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null
    },
    {
        "id": "en_starter_nature_029",
        "word": "lake",
        "emoji": "🏞️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "lakes",
        "definitions": [
            {
                "text": "A large area of water surrounded by land.",
                "examples": [
                    "We went for a walk around the lake."
                ]
            }
        ],
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "leɪk",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null
    },
    {
        "id": "en_starter_nature_030",
        "word": "cloud",
        "emoji": "☁️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "clouds",
        "definitions": [
            {
                "text": "A white or grey mass in the sky that is made of very small drops of water.",
                "examples": [
                    "Look at those big white clouds."
                ]
            }
        ],
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "klaʊd",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null
    },
    {
        "id": "en_starter_nature_031",
        "word": "star",
        "emoji": "⭐",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "stars",
        "definitions": [
            {
                "text": "A small bright light that you see in the sky at night.",
                "examples": [
                    "The stars are very bright tonight."
                ]
            }
        ],
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "stɑr",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "sternon",
            "origin_meaning": "star"
        }
    },
    {
        "id": "en_starter_nature_032",
        "word": "air",
        "emoji": "🌬️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "The mixture of gases that surrounds the Earth and that we breathe.",
                "examples": [
                    "I need some fresh air."
                ]
            }
        ],
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "ɛr",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null
    },
    {
        "id": "en_starter_nature_033",
        "word": "forest",
        "emoji": "🌲",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "forests",
        "definitions": [
            {
                "text": "A large area of land covered with trees.",
                "examples": [
                    "We went for a walk in the forest."
                ]
            }
        ],
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "ˈfɔrɪst",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null
    },
    {
        "id": "en_starter_nature_034",
        "word": "island",
        "emoji": "🏝️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "islands",
        "definitions": [
            {
                "text": "A piece of land completely surrounded by water.",
                "examples": [
                    "They live on a small island."
                ]
            }
        ],
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "ˈaɪlənd",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null
    },
    {
        "id": "en_starter_nature_035",
        "word": "hill",
        "emoji": "⛰️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "hills",
        "definitions": [
            {
                "text": "An area of land that is higher than the land around it, but smaller than a mountain.",
                "examples": [
                    "The house is on a hill."
                ]
            }
        ],
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "hɪl",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null
    },
    {
        "id": "en_starter_nature_036",
        "word": "bridge",
        "emoji": "🌉",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "bridges",
        "definitions": [
            {
                "text": "A structure that is built over a river or road so that people or vehicles can cross it.",
                "examples": [
                    "There is a bridge over the river."
                ]
            }
        ],
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "brɪʤ",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null
    },
    {
        "id": "en_starter_nature_037",
        "word": "ocean",
        "emoji": "🌊",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "oceans",
        "definitions": [
            {
                "text": "The very large area of salty water that covers most of the Earth's surface.",
                "examples": [
                    "The Atlantic Ocean is big."
                ]
            }
        ],
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "ˈoʊʃən",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null
    },
    {
        "id": "en_starter_nature_038",
        "word": "desert",
        "emoji": "🏜️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "deserts",
        "definitions": [
            {
                "text": "A large area of land that has very little water and very few plants growing on it.",
                "examples": [
                    "It is very hot in the desert."
                ]
            }
        ],
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "ˈdɛzərt",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null
    },
    {
        "id": "en_starter_nature_039",
        "word": "jungle",
        "emoji": "🌴",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "jungles",
        "definitions": [
            {
                "text": "A thick tropical forest with many trees and plants.",
                "examples": [
                    "Monkeys live in the jungle."
                ]
            }
        ],
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "ˈʤəŋgəl",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null
    },
    {
        "id": "en_starter_nature_040",
        "word": "earth",
        "emoji": "🌍",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The planet on which we live.",
                "examples": [
                    "The Earth moves around the sun."
                ]
            }
        ],
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "ərθ",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "erþō",
            "origin_meaning": "earth"
        }
    },
    {
        "id": "en_starter_nature_041",
        "word": "planet",
        "emoji": "🪐",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "planets",
        "definitions": [
            {
                "text": "A very large round object in space that moves around the sun or another star.",
                "examples": [
                    "Mars is a red planet."
                ]
            }
        ],
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "ˈplænət",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null
    },
    {
        "id": "en_starter_nature_042",
        "word": "rainbow",
        "emoji": "🌈",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "rainbows",
        "definitions": [
            {
                "text": "A large curve of different colors that can sometimes be seen in the sky when there is sun and rain.",
                "examples": [
                    "Look! There is a beautiful rainbow in the sky."
                ]
            }
        ],
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "ˈreɪnˌboʊ",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null
    },
    {
        "id": "en_starter_nature_043",
        "word": "storm",
        "emoji": "⛈️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "storms",
        "definitions": [
            {
                "text": "A period of very bad weather when there is a lot of rain, wind, and often lightning and thunder.",
                "examples": [
                    "There was a big storm last night."
                ]
            }
        ],
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "stɔrm",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null
    },
    {
        "id": "en_starter_nature_044",
        "word": "nature",
        "emoji": "🌳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "The physical world and everything in it that is not made by people.",
                "examples": [
                    "I love being in nature.",
                    "We must protect nature."
                ]
            }
        ],
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "ˈneɪtʃə(r)",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null
    },
    {
        "id": "en_starter_nature_045",
        "word": "fire",
        "emoji": "🔥",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "fires",
        "subtext": "start a fire",
        "synonyms": [
            "flames"
        ],
        "definitions": [
            {
                "text": "Heat and light from something burning.",
                "examples": [
                    "Be careful with the fire."
                ]
            }
        ],
        "opposite": null,
        "transcription": "faɪər",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "fōr",
            "origin_meaning": "fire"
        }
    },
    {
        "id": "en_starter_nature_046",
        "word": "climb",
        "emoji": "🧗",
        "subtext": "climb a mountain / climb a hill / climb stairs / climb up",
        "form": "verb",
        "definitions": [
            {
                "text": "To go up something using your hands and feet.",
                "examples": [
                    "We climbed the hill to see the view.",
                    "The cat climbed the tree."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "climbed",
        "v3": "climbed",
        "group": "regular",
        "opposite": "descend",
        "transcription": "klaɪm",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null
    },
    {
        "id": "en_starter_nature_047",
        "word": "pick",
        "emoji": "🧺",
        "form": "verb",
        "subtext": "pick flowers / pick up",
        "definitions": [
            {
                "text": "To take flowers, fruit, etc. from the plant where they are growing.",
                "examples": [
                    "They are picking apples in the garden."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "picked",
        "v3": "picked",
        "group": "regular",
        "opposite": "drop",
        "transcription": "pɪk",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null
    },
    {
        "id": "en_starter_plants_natural_world_005",
        "word": "natural",
        "emoji": "🌱",
        "form": "adjective",
        "opposite": "artificial",
        "oppositeEmoji": "🤖",
        "subtext": "natural light / natural products",
        "synonyms": [
            "nature-made"
        ],
        "definitions": [
            {
                "text": "Existing in nature; not made or caused by people.",
                "examples": [
                    "I prefer natural products."
                ]
            }
        ],
        "comparative": "more natural",
        "superlative": "the most natural",
        "transcription": "ˈnæʧərəl",
        "lang": "en",
        "level": "starter",
        "theme": "plants_natural_world",
        "sub_theme": null
    },
    {
        "id": "en_starter_plants_natural_world_006",
        "word": "alive",
        "emoji": "🌱",
        "form": "adjective",
        "opposite": "dead",
        "oppositeEmoji": "💀",
        "subtext": "stay alive / still alive",
        "synonyms": [
            "living"
        ],
        "definitions": [
            {
                "text": "Living, not dead.",
                "examples": [
                    "The plant is still alive."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "əˈlaɪv",
        "lang": "en",
        "level": "starter",
        "theme": "plants_natural_world",
        "sub_theme": null
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();