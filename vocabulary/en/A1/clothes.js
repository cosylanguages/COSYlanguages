(function() {
    const lang = "en";
    const data = [
    {
        "id": "en_starter_accessories_001",
        "word": "scarf",
        "emoji": "🧣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "scarves",
        "transcription": "skɑːf",
        "definitions": [
            {
                "text": "A piece of cloth that you wear around your neck to keep warm.",
                "examples": [
                    "He wears a scarf around his neck."
                ]
            }
        ],
        "subtext": "related to accessories",
        "opposite": null,
        "lang": "en",
        "level": "starter",
        "theme": "accessories",
        "sub_theme": null
    },
    {
        "id": "en_starter_accessories_002",
        "word": "gloves",
        "emoji": "🧤",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "gloves",
        "transcription": "ɡlʌvz",
        "definitions": [
            {
                "text": "Pieces of clothing that you wear on your hands to keep them warm.",
                "examples": [
                    "Wear your gloves — it is cold."
                ]
            }
        ],
        "subtext": "related to accessories",
        "opposite": null,
        "lang": "en",
        "level": "starter",
        "theme": "accessories",
        "sub_theme": null
    },
    {
        "id": "en_starter_accessories_003",
        "word": "sunglasses",
        "emoji": "🕶️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sunglasses",
        "transcription": "ˈsʌnɡlɑːsɪz",
        "definitions": [
            {
                "text": "Dark glasses that you wear to protect your eyes from the sun.",
                "examples": [
                    "I need my sunglasses today."
                ]
            }
        ],
        "subtext": "related to accessories",
        "opposite": null,
        "lang": "en",
        "level": "starter",
        "theme": "accessories",
        "sub_theme": null
    },
    {
        "id": "en_starter_items_of_clothing_001",
        "word": "suit",
        "emoji": "👔",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "suits",
        "transcription": "suːt",
        "subtext": "wear a suit",
        "definitions": [
            {
                "text": "A set of clothes made from the same cloth.",
                "examples": [
                    "He wears a suit to work."
                ]
            }
        ],
        "opposite": null,
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": "formal",
        "etymology": {
            "origin_lang": "Old French",
            "origin_word": "suite",
            "origin_meaning": "following"
        }
    },
    {
        "id": "en_starter_items_of_clothing_002",
        "word": "jacket",
        "emoji": "🧥",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "jackets",
        "subtext": "coat, wear a jacket",
        "definitions": [
            {
                "text": "A short coat.",
                "examples": [
                    "He is wearing a leather jacket."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ˈdʒækɪt",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Old French",
            "origin_word": "jaquet"
        }
    },
    {
        "id": "en_starter_items_of_clothing_003",
        "word": "shirt",
        "emoji": "👔",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "shirts",
        "subtext": "white shirt, wear a shirt",
        "definitions": [
            {
                "text": "A piece of clothing worn on the upper part of the body.",
                "examples": [
                    "He wears a white shirt to work."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ʃɜːt",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": "everyday",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "skurtijǭ"
        }
    },
    {
        "id": "en_starter_items_of_clothing_004",
        "word": "t-shirt",
        "emoji": "👕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "t-shirts",
        "subtext": "wear a t-shirt",
        "definitions": [
            {
                "text": "A casual shirt with short sleeves and no collar.",
                "examples": [
                    "I am wearing a white t-shirt."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ˈtiˌsərt",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": "everyday"
    },
    {
        "id": "en_starter_items_of_clothing_005",
        "word": "pants",
        "emoji": "👖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pants",
        "subtext": "related to items of clothing",
        "synonyms": [
            "🇬🇧 trousers"
        ],
        "definitions": [
            {
                "text": "An outer garment covering each leg separately from waist to ankle.",
                "examples": [
                    "I need new pants."
                ]
            }
        ],
        "opposite": null,
        "transcription": "pænts",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Italian",
            "origin_word": "Pantalone",
            "origin_meaning": "Commedia dell'arte character"
        }
    },
    {
        "id": "en_starter_items_of_clothing_006",
        "word": "shoe",
        "emoji": "👟",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "shoes",
        "subtext": "put on shoes, pair of shoes",
        "definitions": [
            {
                "text": "Something you wear on your feet.",
                "examples": [
                    "Put on your shoes."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ʃu",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "skōhaz"
        }
    },
    {
        "id": "en_starter_items_of_clothing_007",
        "word": "hat",
        "emoji": "👒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "hats",
        "subtext": "wear a hat",
        "definitions": [
            {
                "text": "Something you wear on your head.",
                "examples": [
                    "She is wearing a beautiful hat."
                ]
            }
        ],
        "opposite": null,
        "transcription": "hæt",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": null
    },
    {
        "id": "en_starter_items_of_clothing_008",
        "word": "coat",
        "emoji": "🧥",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "coats",
        "subtext": "put on a coat",
        "definitions": [
            {
                "text": "A piece of clothing that you wear over other clothes to keep warm.",
                "examples": [
                    "Put on your coat — it's cold."
                ]
            }
        ],
        "opposite": null,
        "transcription": "koʊt",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": null
    },
    {
        "id": "en_starter_items_of_clothing_009",
        "word": "socks",
        "emoji": "🧦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "socks",
        "definitions": [
            {
                "text": "Clothing worn on the feet inside shoes.",
                "examples": [
                    "I need some new socks."
                ]
            }
        ],
        "subtext": "related to items of clothing",
        "opposite": null,
        "transcription": "sɑks",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": null
    },
    {
        "id": "en_starter_items_of_clothing_010",
        "word": "sweater",
        "emoji": "🧶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sweaters",
        "subtext": "related to items of clothing",
        "synonyms": [
            "🇬🇧 jumper"
        ],
        "definitions": [
            {
                "text": "A warm piece of clothing with long sleeves.",
                "examples": [
                    "It's cold, wear a sweater."
                ]
            }
        ],
        "opposite": null,
        "transcription": "sˈwɛtər",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": null
    },
    {
        "id": "en_starter_items_of_clothing_011",
        "word": "dress",
        "emoji": "👗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "dresses",
        "definitions": [
            {
                "text": "A piece of clothing for a woman or girl that covers the top of the body and part of the legs.",
                "examples": [
                    "She is wearing a beautiful blue dress."
                ]
            }
        ],
        "subtext": "related to items of clothing",
        "opposite": null,
        "transcription": "drɛs",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": "formal"
    },
    {
        "id": "en_starter_items_of_clothing_012",
        "word": "skirt",
        "emoji": "👗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "skirts",
        "definitions": [
            {
                "text": "A piece of clothing for a woman or girl that hangs from the waist.",
                "examples": [
                    "She wore a black skirt."
                ]
            }
        ],
        "subtext": "related to items of clothing",
        "opposite": null,
        "transcription": "skərt",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": null
    },
    {
        "id": "en_starter_items_of_clothing_013",
        "word": "boots",
        "emoji": "🥾",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "boots",
        "definitions": [
            {
                "text": "A type of strong shoe that covers your foot and part of your leg.",
                "examples": [
                    "I need some new winter boots."
                ]
            }
        ],
        "subtext": "related to items of clothing",
        "opposite": null,
        "transcription": "buts",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": null
    },
    {
        "id": "en_starter_accessories_004",
        "word": "glasses",
        "emoji": "👓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "glasses",
        "definitions": [
            {
                "text": "Two pieces of glass in a frame that you wear on your face to help you see.",
                "examples": [
                    "I wear glasses for reading."
                ]
            }
        ],
        "subtext": "related to accessories",
        "opposite": null,
        "transcription": "ˈglæsɪz",
        "lang": "en",
        "level": "starter",
        "theme": "accessories",
        "sub_theme": null
    },
    {
        "id": "en_starter_accessories_005",
        "word": "watch",
        "emoji": "⌚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "watches",
        "definitions": [
            {
                "text": "A small clock that you wear on your wrist.",
                "examples": [
                    "What time is it on your watch?"
                ]
            }
        ],
        "subtext": "related to accessories",
        "opposite": null,
        "transcription": "wɔʧ",
        "lang": "en",
        "level": "starter",
        "theme": "accessories",
        "sub_theme": null
    },
    {
        "id": "en_starter_items_of_clothing_014",
        "word": "jeans",
        "emoji": "👖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "jeans",
        "subtext": "pair of jeans",
        "definitions": [
            {
                "text": "Trousers made of strong blue cotton cloth.",
                "examples": [
                    "I am wearing blue jeans."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ʤinz",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": "everyday",
        "etymology": {
            "origin_lang": "Old French",
            "origin_word": "Gênes",
            "origin_meaning": "Genoa, Italy"
        }
    },
    {
        "id": "en_starter_accessories_006",
        "word": "belt",
        "emoji": "🎗️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "belts",
        "definitions": [
            {
                "text": "A long thin piece of leather or cloth that you wear around your waist.",
                "examples": [
                    "He is wearing a black belt."
                ]
            }
        ],
        "subtext": "related to accessories",
        "opposite": null,
        "transcription": "bɛlt",
        "lang": "en",
        "level": "starter",
        "theme": "accessories",
        "sub_theme": null
    },
    {
        "id": "en_starter_items_of_clothing_015",
        "word": "tie",
        "emoji": "👔",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "ties",
        "definitions": [
            {
                "text": "A long, thin piece of cloth that a man wears around his neck with a shirt.",
                "examples": [
                    "He wears a tie to work."
                ]
            }
        ],
        "subtext": "related to items of clothing",
        "opposite": null,
        "transcription": "taɪ",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": "formal"
    },
    {
        "id": "en_starter_accessories_007",
        "word": "ring",
        "emoji": "💍",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "rings",
        "definitions": [
            {
                "text": "A small circular piece of jewelry that you wear on your finger.",
                "examples": [
                    "She has a gold ring."
                ]
            }
        ],
        "subtext": "related to accessories",
        "opposite": null,
        "transcription": "rɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "accessories",
        "sub_theme": null
    },
    {
        "id": "en_starter_accessories_008",
        "word": "necklace",
        "emoji": "📿",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "necklaces",
        "definitions": [
            {
                "text": "A piece of jewelry that you wear around your neck.",
                "examples": [
                    "She is wearing a beautiful necklace."
                ]
            }
        ],
        "subtext": "related to accessories",
        "opposite": null,
        "transcription": "ˈnɛkləs",
        "lang": "en",
        "level": "starter",
        "theme": "accessories",
        "sub_theme": null
    },
    {
        "id": "en_starter_items_of_clothing_016",
        "word": "pyjamas",
        "emoji": "🛌",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pyjamas",
        "definitions": [
            {
                "text": "Soft loose clothes that you wear in bed.",
                "examples": [
                    "Put on your pyjamas and go to sleep."
                ]
            }
        ],
        "subtext": "related to items of clothing",
        "opposite": null,
        "transcription": "pəˈdʒɑːməz",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Hindi",
            "origin_word": "pāyjāma",
            "entered_via": "Persian pāy-jāmah"
        }
    },
    {
        "id": "en_starter_items_of_clothing_017",
        "word": "shorts",
        "emoji": "🩳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "shorts",
        "definitions": [
            {
                "text": "Short trousers that end above the knees.",
                "examples": [
                    "I wear shorts in summer."
                ]
            }
        ],
        "subtext": "related to items of clothing",
        "opposite": null,
        "transcription": "ʃɔrts",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": null
    },
    {
        "id": "en_starter_items_of_clothing_018",
        "word": "trainers",
        "emoji": "👟",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "trainers",
        "subtext": "related to items of clothing",
        "synonyms": [
            "🇺🇸 sneakers"
        ],
        "definitions": [
            {
                "text": "Soft shoes that you wear for sport or as casual clothes.",
                "examples": [
                    "I need a new pair of trainers."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ˈtreɪnərz",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": null
    },
    {
        "id": "en_starter_items_of_clothing_019",
        "word": "clothes",
        "emoji": "👕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "clothes",
        "subtext": "clothing, wear clothes",
        "definitions": [
            {
                "text": "Items such as shirts and pants that you wear on your body.",
                "examples": [
                    "I need to buy some new clothes.",
                    "She is wearing beautiful clothes."
                ]
            }
        ],
        "opposite": null,
        "transcription": "🇬🇧 kləʊðz | 🇺🇸 kloʊðz",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": null
    },
    {
        "id": "en_starter_items_of_clothing_020",
        "word": "pocket",
        "emoji": "👖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pockets",
        "definitions": [
            {
                "text": "A small bag that is sewn into or onto a piece of clothing so that you can carry things in it.",
                "examples": [
                    "I have some money in my pocket."
                ]
            }
        ],
        "subtext": "related to items of clothing",
        "opposite": null,
        "transcription": "ˈpɑkət",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": null
    },
    {
        "id": "en_starter_items_of_clothing_021",
        "word": "shoes",
        "emoji": "👟",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "shoes",
        "subtext": "pair of shoes, wear shoes",
        "definitions": [
            {
                "text": "A pair of coverings for your feet.",
                "examples": [
                    "Take off your shoes."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ʃuz",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": null
    },
    {
        "id": "en_starter_accessories_009",
        "word": "jewelry",
        "emoji": "💍",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "jewellery, gold jewelry",
        "definitions": [
            {
                "text": "Decorative objects that you wear on your body, such as rings or necklaces.",
                "examples": [
                    "She is wearing a lot of jewelry."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ˈʤuəlri",
        "lang": "en",
        "level": "starter",
        "theme": "accessories",
        "sub_theme": null
    },
    {
        "id": "en_starter_items_of_clothing_022",
        "word": "wear",
        "emoji": "👕",
        "subtext": "wear a suit / wear glasses / wear casual clothes",
        "form": "verb",
        "definitions": [
            {
                "text": "To have clothing or accessories on your body.",
                "examples": [
                    "She wears a suit to work.",
                    "He wears glasses."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "wore",
        "v3": "worn",
        "group": "irregular",
        "transcription": "wɛr",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": null,
        "antonyms": [
            "undress"
        ]
    },
    {
        "id": "en_starter_items_of_clothing_023",
        "word": "fit",
        "emoji": "👕",
        "form": "verb",
        "subtext": "fit well / does it fit?",
        "definitions": [
            {
                "text": "To be the right size or shape for someone or something.",
                "examples": [
                    "These shoes don't fit me."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "fitted",
        "v3": "fitted",
        "group": "regular",
        "transcription": "fɪt",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": null,
        "antonyms": [
            "unfit"
        ]
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
