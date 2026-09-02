(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-SEL-001",
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
        "transcription": "bɛlt",
        "lang": "en",
        "level": "starter",
        "theme": "accessories",
        "sub_theme": null,
        "legacy_id": "A1-SELF-13",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Nouns",
        "sub_subcategory": "Accessories_Fashion"
    },
    {
        "id": "A1-NOUN-SEL-002",
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
        "transcription": "ˈglæsɪz",
        "lang": "en",
        "level": "starter",
        "theme": "accessories",
        "sub_theme": null,
        "legacy_id": "A1-SELF-71",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Nouns",
        "sub_subcategory": "Accessories_Fashion"
    },
    {
        "id": "A1-NOUN-SEL-003",
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
        "lang": "en",
        "level": "starter",
        "theme": "accessories",
        "sub_theme": null,
        "legacy_id": "A1-SELF-72",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Nouns",
        "sub_subcategory": "Accessories_Fashion"
    },
    {
        "id": "A1-NOUN-SEL-004",
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
        "transcription": "ˈʤuəlri",
        "lang": "en",
        "level": "starter",
        "theme": "accessories",
        "sub_theme": null,
        "legacy_id": "A1-SELF-96",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Nouns",
        "sub_subcategory": "Accessories_Fashion"
    },
    {
        "id": "A1-NOUN-SEL-005",
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
        "transcription": "ˈnɛkləs",
        "lang": "en",
        "level": "starter",
        "theme": "accessories",
        "sub_theme": null,
        "legacy_id": "A1-SELF-108",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Nouns",
        "sub_subcategory": "Accessories_Fashion"
    },
    {
        "id": "A1-NOUN-SEL-006",
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
        "transcription": "rɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "accessories",
        "sub_theme": null,
        "legacy_id": "A1-SELF-150",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Nouns",
        "sub_subcategory": "Accessories_Fashion"
    },
    {
        "id": "A1-NOUN-SEL-007",
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
        "lang": "en",
        "level": "starter",
        "theme": "accessories",
        "sub_theme": null,
        "legacy_id": "A1-SELF-159",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Nouns",
        "sub_subcategory": "Accessories_Fashion"
    },
    {
        "id": "A1-NOUN-SEL-008",
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
        "lang": "en",
        "level": "starter",
        "theme": "accessories",
        "sub_theme": null,
        "legacy_id": "A1-SELF-188",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Nouns",
        "sub_subcategory": "Accessories_Fashion"
    },
    {
        "id": "A1-NOUN-SEL-009",
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
        "transcription": "wɔʧ",
        "lang": "en",
        "level": "starter",
        "theme": "accessories",
        "sub_theme": null,
        "legacy_id": "A1-SELF-214",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Nouns",
        "sub_subcategory": "Accessories_Fashion"
    },
    {
        "id": "A1-NOUN-SEL-113",
        "word": "handbag",
        "form": "noun",
        "transcription": "ˈhændbæɡ",
        "emoji": "👛",
        "definitions": [
            {
                "text": "A small bag carried by hand.",
                "examples": [
                    "She left her handbag on the chair.",
                    "A leather handbag."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Nouns",
        "sub_subcategory": "Accessories_Fashion"
    },
    {
        "id": "A1-NOUN-SEL-114",
        "word": "wallet",
        "form": "noun",
        "transcription": "ˈwɒlɪt",
        "emoji": "👛",
        "definitions": [
            {
                "text": "A small pocket case for money.",
                "examples": [
                    "He lost his wallet.",
                    "Keep money in your wallet."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Nouns",
        "sub_subcategory": "Accessories_Fashion"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
