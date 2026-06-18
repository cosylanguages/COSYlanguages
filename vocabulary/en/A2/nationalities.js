// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "en_elementary_places_069",
        "word": "Russian",
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
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "elementary",
        "theme": "furniture",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_070",
        "word": "Greek",
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
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "elementary",
        "theme": "furniture",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_071",
        "word": "Turkish",
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
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "elementary",
        "theme": "furniture",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_072",
        "word": "Canadian",
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
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "elementary",
        "theme": "furniture",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_073",
        "word": "Australian",
        "emoji": "🇦🇺",
        "form": "adjective",
        "transcription": "🇬🇧 ɒˈstreɪliən | 🇺🇸 ɑːˈstreɪliən",
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
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "elementary",
        "theme": "furniture",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_074",
        "word": "Indian",
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
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "elementary",
        "theme": "furniture",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_075",
        "word": "Mexican",
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
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "elementary",
        "theme": "furniture",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_076",
        "word": "Brazilian",
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
        "comparative": null,
        "superlative": null,
        "lang": "en",
        "level": "elementary",
        "theme": "furniture",
        "sub_theme": null
    }
];
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data.filter(i => i.form === 'adjective')];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
