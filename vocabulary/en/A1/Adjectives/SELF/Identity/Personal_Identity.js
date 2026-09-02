(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-ADJ-SEL-01",
        "word": "American",
        "emoji": "🇺🇸",
        "form": "adjective",
        "transcription": "əˈmɛrɪkən",
        "definitions": [
            {
                "text": "From or connected with the United States of America.",
                "examples": [
                    "She is American.",
                    "I like American movies."
                ]
            }
        ],
        "subtext": "nationality",
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "foreign"
        ],
        "legacy_id": "A1-SELF-01",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "Personal_Identity"
    },
    {
        "id": "A1-ADJ-SEL-02",
        "word": "British",
        "emoji": "🇬🇧",
        "form": "adjective",
        "transcription": "ˈbrɪtɪʃ",
        "definitions": [
            {
                "text": "From or connected with Great Britain.",
                "examples": [
                    "He is British.",
                    "I like British tea."
                ]
            }
        ],
        "subtext": "nationality",
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "foreign"
        ],
        "legacy_id": "A1-SELF-02",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "Personal_Identity"
    },
    {
        "id": "A1-ADJ-SEL-03",
        "word": "Chinese",
        "emoji": "🇨🇳",
        "form": "adjective",
        "transcription": "ˌtʃaɪˈniːz",
        "definitions": [
            {
                "text": "From or connected with China.",
                "examples": [
                    "She is Chinese.",
                    "Chinese history is very long."
                ]
            }
        ],
        "subtext": "nationality",
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "foreign"
        ],
        "legacy_id": "A1-SELF-03",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "Personal_Identity"
    },
    {
        "id": "A1-ADJ-SEL-04",
        "word": "English",
        "emoji": "🇬🇧",
        "form": "adjective",
        "transcription": "ˈɪŋɡlɪʃ",
        "definitions": [
            {
                "text": "From or connected with England.",
                "examples": [
                    "I am learning English.",
                    "She speaks English very well."
                ]
            }
        ],
        "subtext": "nationality",
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "foreign"
        ],
        "legacy_id": "A1-SELF-04",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "Personal_Identity"
    },
    {
        "id": "A1-ADJ-SEL-05",
        "word": "French",
        "emoji": "🇫🇷",
        "form": "adjective",
        "transcription": "frɛntʃ",
        "definitions": [
            {
                "text": "From or connected with France.",
                "examples": [
                    "She is French.",
                    "I love French food."
                ]
            }
        ],
        "subtext": "nationality",
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "foreign"
        ],
        "legacy_id": "A1-SELF-05",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "Personal_Identity"
    },
    {
        "id": "A1-ADJ-SEL-06",
        "word": "German",
        "emoji": "🇩🇪",
        "form": "adjective",
        "transcription": "ˈdʒɜːrmən",
        "definitions": [
            {
                "text": "From or connected with Germany.",
                "examples": [
                    "He is German.",
                    "German cars are famous."
                ]
            }
        ],
        "subtext": "nationality",
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "foreign"
        ],
        "legacy_id": "A1-SELF-06",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "Personal_Identity"
    },
    {
        "id": "A1-ADJ-SEL-07",
        "word": "Italian",
        "emoji": "🇮🇹",
        "form": "adjective",
        "transcription": "ɪˈtæliən",
        "definitions": [
            {
                "text": "From or connected with Italy.",
                "examples": [
                    "We are Italian.",
                    "I like Italian pizza."
                ]
            }
        ],
        "subtext": "nationality",
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "foreign"
        ],
        "legacy_id": "A1-SELF-08",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "Personal_Identity"
    },
    {
        "id": "A1-ADJ-SEL-08",
        "word": "Japanese",
        "emoji": "🇯🇵",
        "form": "adjective",
        "transcription": "ˌdʒæpəˈniːz",
        "definitions": [
            {
                "text": "From or connected with Japan.",
                "examples": [
                    "He is Japanese.",
                    "Japanese technology is great."
                ]
            }
        ],
        "subtext": "nationality",
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "foreign"
        ],
        "legacy_id": "A1-SELF-09",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "Personal_Identity"
    },
    {
        "id": "A1-ADJ-SEL-09",
        "word": "Spanish",
        "emoji": "🇪🇸",
        "form": "adjective",
        "transcription": "ˈspænɪʃ",
        "definitions": [
            {
                "text": "From or connected with Spain.",
                "examples": [
                    "They are Spanish.",
                    "He speaks Spanish."
                ]
            }
        ],
        "subtext": "nationality",
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "foreign"
        ],
        "legacy_id": "A1-SELF-10",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "Personal_Identity"
    },
    {
        "id": "A1-ADJ-SEL-10",
        "word": "alone",
        "emoji": "👤",
        "form": "adjective",
        "definitions": [
            {
                "text": "Without other people; by yourself.",
                "examples": [
                    "She lives alone."
                ]
            }
        ],
        "subtext": "live alone / travel alone / feel alone",
        "comparative": "more alone",
        "superlative": "the most alone",
        "transcription": "əˈloʊn",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "together"
        ],
        "legacy_id": "A1-SELF-11",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "Personal_Identity"
    },
    {
        "id": "A1-ADJ-SEL-11",
        "word": "alone",
        "emoji": "👤",
        "form": "adjective",
        "definitions": [
            {
                "text": "Without other people; by yourself.",
                "examples": [
                    "She lives alone."
                ]
            }
        ],
        "subtext": "live alone / travel alone / feel alone",
        "comparative": "more alone",
        "superlative": "the most alone",
        "transcription": "əˈloʊn",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "together"
        ],
        "legacy_id": "A1-SELF-12",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "Personal_Identity"
    },
    {
        "id": "A1-ADJ-SEL-12",
        "word": "famous",
        "emoji": "🌟",
        "form": "adjective",
        "subtext": "a famous person / become famous",
        "synonyms": [
            "well-known",
            "popular"
        ],
        "definitions": [
            {
                "text": "Known by many people.",
                "examples": [
                    "He is a famous actor."
                ]
            }
        ],
        "comparative": "more famous",
        "superlative": "the most famous",
        "transcription": "ˈfeɪməs",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "unknown"
        ],
        "legacy_id": "A1-SELF-22",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "Personal_Identity"
    },
    {
        "id": "A1-ADJ-SEL-13",
        "word": "married",
        "emoji": "💍",
        "form": "adjective",
        "subtext": "having a husband or wife / a married couple / get married",
        "definitions": [
            {
                "text": "Having a husband or wife.",
                "examples": [
                    "Are you married?"
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈmɛrid",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "single"
        ],
        "legacy_id": "A1-SELF-40",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "Personal_Identity"
    },
    {
        "id": "A1-ADJ-SEL-14",
        "word": "nasty",
        "emoji": "😠",
        "form": "adjective",
        "subtext": "a nasty person / nasty weather",
        "synonyms": [
            "unpleasant",
            "mean"
        ],
        "definitions": [
            {
                "text": "Very bad or unpleasant; unkind.",
                "examples": [
                    "Don't be nasty to your colleagues."
                ]
            }
        ],
        "comparative": "nastier",
        "superlative": "the nastiest",
        "transcription": "ˈnæsti",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "nice"
        ],
        "legacy_id": "A1-SELF-43",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "Personal_Identity"
    },
    {
        "id": "A1-ADJ-SEL-15",
        "word": "shy",
        "emoji": "😳",
        "form": "adjective",
        "definitions": [
            {
                "text": "Nervous and uncomfortable about meeting and talking to other people.",
                "examples": [
                    "He is a shy boy."
                ]
            }
        ],
        "subtext": "feel shy / quite shy",
        "synonyms": [
            "timid"
        ],
        "comparative": "shyer",
        "superlative": "the shyest",
        "transcription": "ʃaɪ",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "confident"
        ],
        "legacy_id": "A1-SELF-51",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "Personal_Identity"
    },
    {
        "id": "A1-ADJ-SEL-16",
        "word": "single",
        "emoji": "👤",
        "form": "adjective",
        "subtext": "a single man",
        "synonyms": [
            "not married"
        ],
        "definitions": [
            {
                "text": "Not married or in a serious relationship.",
                "examples": [
                    "He is single and lives alone."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈsɪŋgəl",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "married"
        ],
        "legacy_id": "A1-SELF-52",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "Personal_Identity"
    },
    {
        "id": "A1-ADJ-SEL-17",
        "word": "stupid",
        "emoji": "🤡",
        "form": "adjective",
        "definitions": [
            {
                "text": "Silly or not intelligent.",
                "examples": [
                    "It was a stupid mistake."
                ]
            }
        ],
        "subtext": "don't be stupid / very stupid",
        "synonyms": [
            "silly"
        ],
        "comparative": "stupider",
        "superlative": "the stupidest",
        "transcription": "ˈstupɪd",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "smart"
        ],
        "legacy_id": "A1-SELF-55",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "Personal_Identity"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
