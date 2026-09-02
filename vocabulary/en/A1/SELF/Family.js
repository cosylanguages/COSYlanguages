(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-SELF-01",
        "word": "aunt",
        "emoji": "👩",
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
        "transcription": "ɔnt",
        "lang": "en",
        "level": "starter",
        "theme": "extended_family",
        "sub_theme": null,
        "legacy_id": "en_starter_extended_family_004",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family"
    },
    {
        "id": "A1-SELF-02",
        "word": "baby",
        "emoji": "👶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "babies",
        "definitions": [
            {
                "text": "A very young child.",
                "examples": [
                    "The baby is sleeping."
                ]
            }
        ],
        "subtext": "related to immediate family",
        "transcription": "ˈbeɪbi",
        "lang": "en",
        "level": "starter",
        "theme": "immediate_family",
        "sub_theme": null,
        "legacy_id": "en_starter_immediate_family_015",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family"
    },
    {
        "id": "A1-SELF-03",
        "word": "brother",
        "emoji": "👦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "brothers",
        "subtext": "elder brother, younger brother",
        "definitions": [
            {
                "text": "A boy or man who has the same parents as another person.",
                "examples": [
                    "He is my elder brother.",
                    "Do you have any brothers?"
                ]
            }
        ],
        "transcription": "ˈbrəðər",
        "lang": "en",
        "level": "starter",
        "theme": "immediate_family",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "brōþēr",
            "origin_meaning": "brother"
        },
        "legacy_id": "en_starter_immediate_family_012",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family"
    },
    {
        "id": "A1-SELF-04",
        "word": "child",
        "emoji": "👶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "children",
        "subtext": "related to immediate family",
        "synonyms": [
            "kid",
            "young person"
        ],
        "definitions": [
            {
                "text": "A young person; a son or daughter.",
                "examples": [
                    "They have two children."
                ]
            }
        ],
        "transcription": "ʧaɪld",
        "lang": "en",
        "level": "starter",
        "theme": "immediate_family",
        "sub_theme": null,
        "antonyms": [
            "adult"
        ],
        "legacy_id": "en_starter_immediate_family_009",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family"
    },
    {
        "id": "A1-SELF-05",
        "word": "cousin",
        "emoji": "🧑",
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
        "transcription": "ˈkəzən",
        "lang": "en",
        "level": "starter",
        "theme": "extended_family",
        "sub_theme": null,
        "legacy_id": "en_starter_extended_family_005",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family"
    },
    {
        "id": "A1-SELF-06",
        "word": "dad",
        "emoji": "👨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "dads",
        "definitions": [
            {
                "text": "A father.",
                "examples": [
                    "My dad is at home."
                ]
            }
        ],
        "subtext": "related to immediate family",
        "transcription": "dæd",
        "lang": "en",
        "level": "starter",
        "theme": "immediate_family",
        "sub_theme": null,
        "legacy_id": "en_starter_immediate_family_016",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family"
    },
    {
        "id": "A1-SELF-07",
        "word": "daughter",
        "emoji": "👧",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "daughters",
        "definitions": [
            {
                "text": "A person's female child.",
                "examples": [
                    "Her daughter is five years old."
                ]
            }
        ],
        "subtext": "related to immediate family",
        "transcription": "ˈdɔtər",
        "lang": "en",
        "level": "starter",
        "theme": "immediate_family",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "duhtēr",
            "origin_meaning": "daughter"
        },
        "legacy_id": "en_starter_immediate_family_014",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family"
    },
    {
        "id": "A1-SELF-08",
        "word": "family",
        "emoji": "👪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "families",
        "definitions": [
            {
                "text": "A group of people who are related.",
                "examples": [
                    "My family is big."
                ]
            }
        ],
        "subtext": "related to immediate family",
        "transcription": "ˈfæməli",
        "lang": "en",
        "level": "starter",
        "theme": "immediate_family",
        "sub_theme": null,
        "legacy_id": "en_starter_immediate_family_005",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family"
    },
    {
        "id": "A1-SELF-09",
        "word": "father",
        "emoji": "👨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "fathers",
        "definitions": [
            {
                "text": "A man who is your parent (usually the husband of your mother).",
                "examples": [
                    "My father is at work.",
                    "His father is tall."
                ]
            }
        ],
        "subtext": "related to immediate family",
        "transcription": "ˈfɑðər",
        "lang": "en",
        "level": "starter",
        "theme": "immediate_family",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "fader",
            "origin_meaning": "father"
        },
        "legacy_id": "en_starter_immediate_family_004",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family"
    },
    {
        "id": "A1-SELF-10",
        "word": "friend",
        "emoji": "👫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "friends",
        "definitions": [
            {
                "text": "A person you like and know well.",
                "examples": [
                    "She is my friend."
                ]
            }
        ],
        "subtext": "related to immediate family",
        "transcription": "frɛnd",
        "lang": "en",
        "level": "starter",
        "theme": "immediate_family",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "frijōndz",
            "origin_meaning": "friend"
        },
        "legacy_id": "en_starter_immediate_family_006",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family"
    },
    {
        "id": "A1-SELF-11",
        "word": "grandfather",
        "emoji": "👴",
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
        "transcription": "ˈgrænˌfɑðər",
        "lang": "en",
        "level": "starter",
        "theme": "extended_family",
        "sub_theme": null,
        "legacy_id": "en_starter_extended_family_001",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family"
    },
    {
        "id": "A1-SELF-12",
        "word": "grandmother",
        "emoji": "👵",
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
        "transcription": "ˈgrændˌməðər",
        "lang": "en",
        "level": "starter",
        "theme": "extended_family",
        "sub_theme": null,
        "legacy_id": "en_starter_extended_family_002",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family"
    },
    {
        "id": "A1-SELF-13",
        "word": "husband",
        "emoji": "👨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "husbands",
        "subtext": "related to immediate family",
        "synonyms": [
            "spouse",
            "partner"
        ],
        "definitions": [
            {
                "text": "A married man, in relation to his wife.",
                "examples": [
                    "Her husband is a doctor."
                ]
            }
        ],
        "transcription": "ˈhəzbənd",
        "lang": "en",
        "level": "starter",
        "theme": "immediate_family",
        "sub_theme": null,
        "legacy_id": "en_starter_immediate_family_007",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family"
    },
    {
        "id": "A1-SELF-14",
        "word": "mother",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "mothers",
        "definitions": [
            {
                "text": "A woman who is your parent.",
                "examples": [
                    "My mother is very kind.",
                    "I love my mother."
                ]
            }
        ],
        "subtext": "related to immediate family",
        "transcription": "ˈməðər",
        "lang": "en",
        "level": "starter",
        "theme": "immediate_family",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "mōdēr",
            "origin_meaning": "mother"
        },
        "legacy_id": "en_starter_immediate_family_003",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family"
    },
    {
        "id": "A1-SELF-15",
        "word": "mum",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "mums",
        "definitions": [
            {
                "text": "A mother.",
                "examples": [
                    "I will ask my mum."
                ]
            }
        ],
        "subtext": "related to immediate family",
        "transcription": "məm",
        "lang": "en",
        "level": "starter",
        "theme": "immediate_family",
        "sub_theme": null,
        "legacy_id": "en_starter_immediate_family_017",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family"
    },
    {
        "id": "A1-SELF-16",
        "word": "nephew",
        "emoji": "👦",
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
        "transcription": "ˈnɛfju",
        "lang": "en",
        "level": "starter",
        "theme": "extended_family",
        "sub_theme": null,
        "legacy_id": "en_starter_extended_family_006",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family"
    },
    {
        "id": "A1-SELF-17",
        "word": "niece",
        "emoji": "👧",
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
        "legacy_id": "en_starter_extended_family_007",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family"
    },
    {
        "id": "A1-SELF-18",
        "word": "parent",
        "emoji": "👪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "parents",
        "subtext": "related to immediate family",
        "synonyms": [
            "mother or father"
        ],
        "definitions": [
            {
                "text": "A mother or father.",
                "examples": [
                    "My parents live in the north."
                ]
            }
        ],
        "transcription": "ˈpɛrənt",
        "lang": "en",
        "level": "starter",
        "theme": "immediate_family",
        "sub_theme": null,
        "legacy_id": "en_starter_immediate_family_010",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family"
    },
    {
        "id": "A1-SELF-19",
        "word": "sibling",
        "form": "noun",
        "transcription": "ˈsɪblɪŋ",
        "definitions": [
            {
                "text": "A brother or sister.",
                "examples": [
                    "I have two siblings: a brother and a sister."
                ]
            }
        ],
        "emoji": "👨‍👩‍👧‍👦",
        "lang": "en",
        "level": "a1",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family"
    },
    {
        "id": "A1-SELF-20",
        "word": "sister",
        "emoji": "👧",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sisters",
        "subtext": "elder sister, younger sister",
        "definitions": [
            {
                "text": "A girl or woman who has the same parents as another person.",
                "examples": [
                    "I have two sisters.",
                    "My sister is a student."
                ]
            }
        ],
        "transcription": "ˈsɪstər",
        "lang": "en",
        "level": "starter",
        "theme": "immediate_family",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "swestēr",
            "origin_meaning": "sister"
        },
        "legacy_id": "en_starter_immediate_family_011",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family"
    },
    {
        "id": "A1-SELF-21",
        "word": "son",
        "emoji": "👦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sons",
        "definitions": [
            {
                "text": "A person's male child.",
                "examples": [
                    "They have one son and two daughters."
                ]
            }
        ],
        "subtext": "related to immediate family",
        "transcription": "sən",
        "lang": "en",
        "level": "starter",
        "theme": "immediate_family",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "sunuz",
            "origin_meaning": "son"
        },
        "legacy_id": "en_starter_immediate_family_013",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family"
    },
    {
        "id": "A1-SELF-22",
        "word": "uncle",
        "emoji": "👨",
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
        "transcription": "ˈəŋkəl",
        "lang": "en",
        "level": "starter",
        "theme": "extended_family",
        "sub_theme": null,
        "legacy_id": "en_starter_extended_family_003",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family"
    },
    {
        "id": "A1-SELF-23",
        "word": "wife",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "wives",
        "subtext": "related to immediate family",
        "synonyms": [
            "spouse",
            "partner"
        ],
        "definitions": [
            {
                "text": "A married woman, in relation to her husband.",
                "examples": [
                    "His wife works in finance."
                ]
            }
        ],
        "transcription": "waɪf",
        "lang": "en",
        "level": "starter",
        "theme": "immediate_family",
        "sub_theme": null,
        "legacy_id": "en_starter_immediate_family_008",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Family"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
