(function() {
    const lang = "en";
    const data = [
        {
            "id": "en_elementary_language_001",
            "word": "into",
            "form": "preposition",
            "definitions": [
                {
                    "text": "To the inside or middle of something.",
                    "examples": ["He walked into the room."]
                }
            ],
            "subtext": "preposition of movement",
            "emoji": "➡️",
            "transcription": "ˈɪntuː",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "antonyms": ["out of"]
        },
        {
            "id": "en_elementary_language_002",
            "word": "out of",
            "form": "preposition",
            "definitions": [
                {
                    "text": "From the inside of something to the outside.",
                    "examples": ["She ran out of the building."]
                }
            ],
            "subtext": "preposition of movement",
            "emoji": "🚪",
            "transcription": "aʊt əv",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "antonyms": ["into"]
        },
        {
            "id": "en_elementary_language_003",
            "word": "through",
            "form": "preposition",
            "definitions": [
                {
                    "text": "Moving in one side and out of the other side of an object or space.",
                    "examples": ["The train went through the tunnel."]
                }
            ],
            "subtext": "preposition of movement",
            "emoji": "🚇",
            "transcription": "θruː",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "en_elementary_language_004",
            "word": "across",
            "form": "preposition",
            "definitions": [
                {
                    "text": "From one side to the other side of something.",
                    "examples": ["We walked across the street."]
                }
            ],
            "subtext": "preposition of movement",
            "emoji": "🌉",
            "transcription": "əˈkrɒs",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "en_elementary_language_005",
            "word": "however",
            "form": "conjunction",
            "definitions": [
                {
                    "text": "Used to introduce a statement that contrasts with something already said.",
                    "examples": ["The exam was hard. However, everyone passed."]
                }
            ],
            "subtext": "contrast connector",
            "emoji": "🔄",
            "transcription": "haʊˈevər",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "synonyms": ["but", "nevertheless"]
        },
        {
            "id": "en_elementary_language_006",
            "word": "although",
            "form": "conjunction",
            "definitions": [
                {
                    "text": "In spite of the fact that; even though.",
                    "examples": ["Although it was raining, we went for a walk."]
                }
            ],
            "subtext": "concession connector",
            "emoji": "🌧️",
            "transcription": "ɔːlˈðəʊ",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "synonyms": ["even though"]
        },
        {
            "id": "en_elementary_language_007",
            "word": "so",
            "form": "conjunction",
            "definitions": [
                {
                    "text": "Used to express a result or decision.",
                    "examples": ["I was hungry, so I cooked dinner."]
                }
            ],
            "subtext": "result connector",
            "emoji": "👉",
            "transcription": "səʊ",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "en_elementary_language_008",
            "word": "already",
            "form": "adverb",
            "definitions": [
                {
                    "text": "Before now or before a specified time.",
                    "examples": ["I have already eaten breakfast."]
                }
            ],
            "subtext": "present perfect time adverb",
            "emoji": "⏰",
            "transcription": "ɔːlˈredi",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "en_elementary_language_009",
            "word": "yet",
            "form": "adverb",
            "definitions": [
                {
                    "text": "Until now (used in negative sentences and questions).",
                    "examples": ["Have you finished your homework yet?", "I haven't called him yet."]
                }
            ],
            "subtext": "present perfect time adverb",
            "emoji": "⏳",
            "transcription": "jet",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "en_elementary_language_010",
            "word": "just",
            "form": "adverb",
            "definitions": [
                {
                    "text": "A very short time ago.",
                    "examples": ["I have just seen the news."]
                }
            ],
            "subtext": "present perfect time adverb",
            "emoji": "⚡",
            "transcription": "dʒʌst",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "en_elementary_language_011",
            "word": "for",
            "form": "preposition",
            "definitions": [
                {
                    "text": "Used to specify a period of time.",
                    "examples": ["I have lived here for five years."]
                }
            ],
            "subtext": "duration with present perfect",
            "emoji": "📅",
            "transcription": "fɔːr",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "antonyms": ["since"]
        },
        {
            "id": "en_elementary_language_012",
            "word": "since",
            "form": "preposition",
            "definitions": [
                {
                    "text": "From a specific point in time in the past until now.",
                    "examples": ["She has worked here since 2018."]
                }
            ],
            "subtext": "starting point with present perfect",
            "emoji": "📍",
            "transcription": "sɪns",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "antonyms": ["for"]
        },
        {
            "id": "en_elementary_language_013",
            "word": "much",
            "form": "determiner",
            "definitions": [
                {
                    "text": "A large amount of uncountable noun.",
                    "examples": ["Do you have much free time?"]
                }
            ],
            "subtext": "quantifier for uncountable nouns",
            "emoji": "📊",
            "transcription": "mʌtʃ",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "antonyms": ["little"]
        },
        {
            "id": "en_elementary_language_014",
            "word": "many",
            "form": "determiner",
            "definitions": [
                {
                    "text": "A large number of countable nouns.",
                    "examples": ["There are many books on the shelf."]
                }
            ],
            "subtext": "quantifier for plural countable nouns",
            "emoji": "🔢",
            "transcription": "ˈmeni",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "antonyms": ["few"]
        },
        {
            "id": "en_elementary_language_015",
            "word": "too",
            "form": "adverb",
            "definitions": [
                {
                    "text": "More than is necessary, allowed, or desirable.",
                    "examples": ["This coffee is too hot to drink."]
                }
            ],
            "subtext": "degree modifier",
            "emoji": "⚠️",
            "transcription": "tuː",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "en_elementary_language_016",
            "word": "enough",
            "form": "adverb",
            "definitions": [
                {
                    "text": "As much or as many as needed or required.",
                    "examples": ["Is the room warm enough?"]
                }
            ],
            "subtext": "sufficiency modifier",
            "emoji": "✅",
            "transcription": "ɪˈnʌf",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "en_elementary_language_017",
            "word": "should",
            "form": "verb",
            "definitions": [
                {
                    "text": "Used to give advice or make recommendations.",
                    "examples": ["You should drink more water."]
                }
            ],
            "subtext": "modal auxiliary for advice",
            "emoji": "💡",
            "transcription": "ʃʊd",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "en_elementary_language_018",
            "word": "must",
            "form": "verb",
            "definitions": [
                {
                    "text": "Used to express strong obligation or necessity.",
                    "examples": ["You must wear a seatbelt."]
                }
            ],
            "subtext": "modal auxiliary for obligation",
            "emoji": "❗",
            "transcription": "mʌst",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "en_elementary_language_019",
            "word": "could",
            "form": "verb",
            "definitions": [
                {
                    "text": "Used to express past ability or polite requests.",
                    "examples": ["When I was young, I could run fast.", "Could you open the window?"]
                }
            ],
            "subtext": "modal auxiliary for past ability and requests",
            "emoji": "🤝",
            "transcription": "kʊd",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "en_elementary_language_020",
            "word": "someone",
            "form": "pronoun",
            "definitions": [
                {
                    "text": "An unknown or unspecified person.",
                    "examples": ["There is someone at the door."]
                }
            ],
            "subtext": "indefinite pronoun",
            "emoji": "👤",
            "transcription": "ˈsʌmwʌn",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "synonyms": ["somebody"]
        },
        {
            "id": "en_elementary_language_021",
            "word": "anything",
            "form": "pronoun",
            "definitions": [
                {
                    "text": "A thing of any kind, used in questions and negative sentences.",
                    "examples": ["I don't have anything in my bag.", "Did you buy anything?"]
                }
            ],
            "subtext": "indefinite pronoun",
            "emoji": "❓",
            "transcription": "ˈeniθɪŋ",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "en_elementary_language_022",
            "word": "who",
            "form": "pronoun",
            "definitions": [
                {
                    "text": "Relative pronoun used to refer to a person.",
                    "examples": ["That is the teacher who helped me."]
                }
            ],
            "subtext": "relative pronoun for people",
            "emoji": "👤",
            "transcription": "huː",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "en_elementary_language_023",
            "word": "which",
            "form": "pronoun",
            "definitions": [
                {
                    "text": "Relative pronoun used to refer to things or animals.",
                    "examples": ["This is the key which opens the door."]
                }
            ],
            "subtext": "relative pronoun for things",
            "emoji": "🔑",
            "transcription": "wɪtʃ",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null
        }
    ];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
