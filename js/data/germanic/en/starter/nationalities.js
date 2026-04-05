(function() {
    const data = [
    {
        "word": "British",
        "level": "starter",
        "theme": "nationality_country_A1",
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
        "superlative": null
    },
    {
        "word": "American",
        "level": "starter",
        "theme": "nationality_country_A1",
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
        "superlative": null
    },
    {
        "word": "Spanish",
        "level": "starter",
        "theme": "nationality_country_A1",
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
        "superlative": null
    },
    {
        "word": "French",
        "level": "starter",
        "theme": "nationality_country_A1",
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
        "superlative": null
    },
    {
        "word": "German",
        "level": "starter",
        "theme": "nationality_country_A1",
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
        "superlative": null
    },
    {
        "word": "Italian",
        "level": "starter",
        "theme": "nationality_country_A1",
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
        "superlative": null
    },
    {
        "word": "Chinese",
        "level": "starter",
        "theme": "nationality_country_A1",
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
        "superlative": null
    },
    {
        "word": "Japanese",
        "level": "starter",
        "theme": "nationality_country_A1",
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
        "superlative": null
    },
    {
        "word": "English",
        "level": "starter",
        "theme": "nationality_country_A1",
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
        "superlative": null
    },
    {
        "word": "nationality",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "subtext": "British nationality, dual nationality"
    }
];
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data.filter(i => i.form === 'adjective')];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
