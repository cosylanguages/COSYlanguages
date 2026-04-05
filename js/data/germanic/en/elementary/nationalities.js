(function() {
    const data = [
    {
        "word": "Russian",
        "level": "elementary",
        "theme": "places_geography_A2",
        "emoji": "🇷🇺",
        "form": "adjective",
        "transcription": "ˈrʌʃən",
        "definitions": [
            {
                "text": "From or connected with Russia.",
                "examples": [
                    "She is Russian.",
                    "I am learning the Russian alphabet."
                ]
            }
        ],
        "subtext": "nationality",
        "opposite": "foreign",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "Greek",
        "level": "elementary",
        "theme": "places_geography_A2",
        "emoji": "🇬🇷",
        "form": "adjective",
        "transcription": "ɡriːk",
        "definitions": [
            {
                "text": "From or connected with Greece.",
                "examples": [
                    "We love Greek salad.",
                    "He is Greek."
                ]
            }
        ],
        "subtext": "nationality",
        "opposite": "foreign",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "Turkish",
        "level": "elementary",
        "theme": "places_geography_A2",
        "emoji": "🇹🇷",
        "form": "adjective",
        "transcription": "ˈtɜːrkɪʃ",
        "definitions": [
            {
                "text": "From or connected with Turkey.",
                "examples": [
                    "Turkish coffee is very strong.",
                    "They are Turkish."
                ]
            }
        ],
        "subtext": "nationality",
        "opposite": "foreign",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "Canadian",
        "level": "elementary",
        "theme": "places_geography_A2",
        "emoji": "🇨🇦",
        "form": "adjective",
        "transcription": "kəˈneɪdiən",
        "definitions": [
            {
                "text": "From or connected with Canada.",
                "examples": [
                    "He is Canadian.",
                    "Canadian winters are cold."
                ]
            }
        ],
        "subtext": "nationality",
        "opposite": "foreign",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "Australian",
        "level": "elementary",
        "theme": "places_geography_A2",
        "emoji": "🇦🇺",
        "form": "adjective",
        "transcription": "ɒˈstreɪliən",
        "definitions": [
            {
                "text": "From or connected with Australia.",
                "examples": [
                    "She has an Australian accent.",
                    "Are you Australian?"
                ]
            }
        ],
        "subtext": "nationality",
        "opposite": "foreign",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "Indian",
        "level": "elementary",
        "theme": "places_geography_A2",
        "emoji": "🇮🇳",
        "form": "adjective",
        "transcription": "ˈɪndiən",
        "definitions": [
            {
                "text": "From or connected with India.",
                "examples": [
                    "I love Indian food.",
                    "He is Indian."
                ]
            }
        ],
        "subtext": "nationality",
        "opposite": "foreign",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "Mexican",
        "level": "elementary",
        "theme": "places_geography_A2",
        "emoji": "🇲🇽",
        "form": "adjective",
        "transcription": "ˈmɛksɪkən",
        "definitions": [
            {
                "text": "From or connected with Mexico.",
                "examples": [
                    "Mexican music is very lively.",
                    "Is she Mexican?"
                ]
            }
        ],
        "subtext": "nationality",
        "opposite": "foreign",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "Brazilian",
        "level": "elementary",
        "theme": "places_geography_A2",
        "emoji": "🇧🇷",
        "form": "adjective",
        "transcription": "brəˈzɪliən",
        "definitions": [
            {
                "text": "From or connected with Brazil.",
                "examples": [
                    "He is a famous Brazilian football player.",
                    "We visited a Brazilian beach."
                ]
            }
        ],
        "subtext": "nationality",
        "opposite": "foreign",
        "comparative": null,
        "superlative": null
    }
];
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data.filter(i => i.form === 'adjective')];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
