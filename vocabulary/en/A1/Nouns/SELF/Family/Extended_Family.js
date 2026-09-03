(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-SEL-056",
        "word": "aunt",
        "emoji": "\ud83d\udc69",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "aunts",
        "definitions": [
            {
                "text": "The sister of your mother or father, or the wife of your uncle.",
                "examples": [
                    "My aunt is a teacher."
                ]
            }
        ],
        "subtext": "related to extended family",
        "transcription": "\u0254nt",
        "lang": "en",
        "level": "starter",
        "theme": "extended_family",
        "sub_theme": null,
        "legacy_id": "A1-SELF-01",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family",
        "pos_section": "Nouns",
        "sub_subcategory": "Extended_Family"
    },
    {
        "id": "A1-NOUN-SEL-057",
        "word": "cousin",
        "emoji": "\ud83e\uddd1",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cousins",
        "definitions": [
            {
                "text": "The child of your aunt or uncle.",
                "examples": [
                    "I have many cousins."
                ]
            }
        ],
        "subtext": "related to extended family",
        "transcription": "\u02c8k\u0259z\u0259n",
        "lang": "en",
        "level": "starter",
        "theme": "extended_family",
        "sub_theme": null,
        "legacy_id": "A1-SELF-05",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family",
        "pos_section": "Nouns",
        "sub_subcategory": "Extended_Family"
    },
    {
        "id": "A1-NOUN-SEL-058",
        "word": "grandfather",
        "emoji": "\ud83d\udc74",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "grandfathers",
        "definitions": [
            {
                "text": "The father of your father or mother.",
                "examples": [
                    "My grandfather is eighty years old."
                ]
            }
        ],
        "subtext": "related to extended family",
        "transcription": "\u02c8gr\u00e6n\u02ccf\u0251\u00f0\u0259r",
        "lang": "en",
        "level": "starter",
        "theme": "extended_family",
        "sub_theme": null,
        "legacy_id": "A1-SELF-11",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family",
        "pos_section": "Nouns",
        "sub_subcategory": "Extended_Family"
    },
    {
        "id": "A1-NOUN-SEL-059",
        "word": "grandmother",
        "emoji": "\ud83d\udc75",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "grandmothers",
        "definitions": [
            {
                "text": "The mother of your father or mother.",
                "examples": [
                    "My grandmother lives in a small village."
                ]
            }
        ],
        "subtext": "related to extended family",
        "transcription": "\u02c8gr\u00e6nd\u02ccm\u0259\u00f0\u0259r",
        "lang": "en",
        "level": "starter",
        "theme": "extended_family",
        "sub_theme": null,
        "legacy_id": "A1-SELF-12",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family",
        "pos_section": "Nouns",
        "sub_subcategory": "Extended_Family"
    },
    {
        "id": "A1-NOUN-SEL-060",
        "word": "nephew",
        "emoji": "\ud83d\udc66",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "nephews",
        "definitions": [
            {
                "text": "The son of your brother or sister.",
                "examples": [
                    "My nephew is ten years old."
                ]
            }
        ],
        "subtext": "related to extended family",
        "transcription": "\u02c8n\u025bfju",
        "lang": "en",
        "level": "starter",
        "theme": "extended_family",
        "sub_theme": null,
        "legacy_id": "A1-SELF-16",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family",
        "pos_section": "Nouns",
        "sub_subcategory": "Extended_Family"
    },
    {
        "id": "A1-NOUN-SEL-061",
        "word": "niece",
        "emoji": "\ud83d\udc67",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "nieces",
        "definitions": [
            {
                "text": "The daughter of your brother or sister.",
                "examples": [
                    "My niece is a student."
                ]
            }
        ],
        "subtext": "related to extended family",
        "transcription": "nis",
        "lang": "en",
        "level": "starter",
        "theme": "extended_family",
        "sub_theme": null,
        "legacy_id": "A1-SELF-17",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family",
        "pos_section": "Nouns",
        "sub_subcategory": "Extended_Family"
    },
    {
        "id": "A1-NOUN-SEL-062",
        "word": "uncle",
        "emoji": "\ud83d\udc68",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "uncles",
        "definitions": [
            {
                "text": "The brother of your mother or father, or the husband of your aunt.",
                "examples": [
                    "My uncle lives in London."
                ]
            }
        ],
        "subtext": "related to extended family",
        "transcription": "\u02c8\u0259\u014bk\u0259l",
        "lang": "en",
        "level": "starter",
        "theme": "extended_family",
        "sub_theme": null,
        "legacy_id": "A1-SELF-22",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family",
        "pos_section": "Nouns",
        "sub_subcategory": "Extended_Family"
    },
    {
        "id": "A1-NOUN-SEL-116",
        "word": "relative",
        "emoji": "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",
        "form": "noun",
        "transcription": "\u02c8r\u025bl\u0259t\u026av",
        "definitions": [
            {
                "text": "A person connected by blood or marriage.",
                "examples": [
                    "We visit our relatives during holidays.",
                    "All my relatives met at the wedding."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family",
        "pos_section": "Nouns",
        "sub_subcategory": "Extended_Family"
    },
    {
        "id": "A1-NOUN-SEL-117",
        "word": "stepfather",
        "emoji": "\ud83d\udc68",
        "form": "noun",
        "transcription": "\u02c8st\u025bp\u02ccf\u0251\u02d0\u00f0\u0259r",
        "definitions": [
            {
                "text": "The husband of one's mother by a later marriage.",
                "examples": [
                    "His stepfather is very kind.",
                    "Her stepfather works at a bank."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family",
        "pos_section": "Nouns",
        "sub_subcategory": "Extended_Family"
    },
    {
        "id": "A1-NOUN-SEL-118",
        "word": "stepmother",
        "emoji": "\ud83d\udc69",
        "form": "noun",
        "transcription": "\u02c8st\u025bp\u02ccm\u028c\u00f0\u0259r",
        "definitions": [
            {
                "text": "The wife of one's father by a later marriage.",
                "examples": [
                    "Her stepmother cooks great soup.",
                    "My stepmother lives in Leeds."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family",
        "pos_section": "Nouns",
        "sub_subcategory": "Extended_Family"
    },
    {
        "id": "A1-NOUN-SEL-152",
        "word": "ancestor",
        "emoji": "\ud83d\udc74",
        "form": "noun",
        "transcription": "\u02c8\u00e6n\u02ccs\u025bst\u0259r",
        "definitions": [
            {
                "text": "A person from whom one is descended.",
                "examples": [
                    "Her ancestors came from Ireland.",
                    "They researched their family ancestors."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family",
        "pos_section": "Nouns",
        "sub_subcategory": "Extended_Family"
    },
    {
        "id": "A1-NOUN-SEL-153",
        "word": "bride",
        "emoji": "\ud83d\udc70",
        "form": "noun",
        "transcription": "bra\u026ad",
        "definitions": [
            {
                "text": "A woman on her wedding day.",
                "examples": [
                    "The bride wore a white dress.",
                    "Guests congratulated the bride."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family",
        "pos_section": "Nouns",
        "sub_subcategory": "Extended_Family"
    },
    {
        "id": "A1-NOUN-SEL-154",
        "word": "groom",
        "emoji": "\ud83e\udd35",
        "form": "noun",
        "transcription": "\u0261ru\u02d0m",
        "definitions": [
            {
                "text": "A man on his wedding day.",
                "examples": [
                    "The groom waited at the altar.",
                    "He stood beside his bride."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family",
        "pos_section": "Nouns",
        "sub_subcategory": "Extended_Family"
    },
    {
        "id": "A1-NOUN-SEL-155",
        "word": "infant",
        "emoji": "\ud83d\udc76",
        "form": "noun",
        "transcription": "\u02c8\u026anf\u0259nt",
        "definitions": [
            {
                "text": "A very young child or baby.",
                "examples": [
                    "The infant slept in the crib.",
                    "Pediatricians care for infants."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family",
        "pos_section": "Nouns",
        "sub_subcategory": "Extended_Family"
    },
    {
        "id": "A1-NOUN-SEL-156",
        "word": "orphan",
        "emoji": "\ud83e\uddd2",
        "form": "noun",
        "transcription": "\u02c8\u0254\u02d0rf\u0259n",
        "definitions": [
            {
                "text": "A child whose parents are deceased.",
                "examples": [
                    "The shelter cares for orphans.",
                    "He grew up as an orphan."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family",
        "pos_section": "Nouns",
        "sub_subcategory": "Extended_Family"
    },
    {
        "id": "A1-NOUN-SEL-157",
        "word": "toddler",
        "emoji": "\ud83d\udc76",
        "form": "noun",
        "transcription": "\u02c8t\u0251\u02d0dl\u0259r",
        "definitions": [
            {
                "text": "A young child who is just beginning to walk.",
                "examples": [
                    "The toddler took three small steps.",
                    "Keep small toys away from toddlers."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family",
        "pos_section": "Nouns",
        "sub_subcategory": "Extended_Family"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
