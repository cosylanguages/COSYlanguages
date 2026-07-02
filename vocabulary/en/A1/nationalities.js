// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "en_starter_nationality_country_001",
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
        "opposite": "foreign",
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_starter_nationality_country_002",
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
        "opposite": "foreign",
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_starter_nationality_country_003",
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
        "opposite": "foreign",
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_starter_nationality_country_004",
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
        "opposite": "foreign",
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_starter_nationality_country_005",
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
        "opposite": "foreign",
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_starter_nationality_country_006",
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
        "opposite": "foreign",
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_starter_nationality_country_007",
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
        "opposite": "foreign",
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_starter_nationality_country_008",
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
        "opposite": "foreign",
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_starter_nationality_country_009",
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
        "opposite": "foreign",
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_starter_personal_identity_020",
        "word": "nationality",
        "emoji": "🏳️",
        "form": "noun",
        "plural": "nationalities",
        "transcription": "ˌnæʃəˈnæləti",
        "definitions": [
            {
                "text": "The legal right of belonging to a particular nation.",
                "examples": [
                    "What is your nationality?",
                    "She has dual nationality."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "British nationality, dual nationality",
        "lang": "en",
        "level": "starter",
        "theme": "personal_identity",
        "sub_theme": null
    }
]
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data.filter(i => i.form === 'adjective')];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
