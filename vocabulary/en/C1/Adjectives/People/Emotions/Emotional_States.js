(function() {
    const lang = "en";
    const data = [
    {
        "id": "C1-ADJ-PEO-01",
        "word": "cynical",
        "emoji": "😒",
        "subtext": "deeply cynical / very cynical / grow cynical",
        "form": "adjective",
        "transcription": "ˈsɪnɪkl",
        "definitions": [
            {
                "text": "Believing people are motivated only by self-interest.",
                "examples": [
                    "He has a very cynical view of corporate social responsibility."
                ]
            }
        ],
        "synonyms": [
            "skeptical",
            "pessimistic",
            "distrustful"
        ],
        "antonyms": [
            "optimistic",
            "idealistic"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "C1-PPL-04",
        "level_code": "C1",
        "domain": "People",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Emotional_States"
    },
    {
        "id": "C1-ADJ-PEO-02",
        "word": "hostile",
        "emoji": "😠",
        "subtext": "deeply hostile / very hostile / a hostile environment",
        "form": "adjective",
        "transcription": "🇬🇧 ˈhɒstaɪl | 🇺🇸 ˈhɑːstaɪl",
        "definitions": [
            {
                "text": "Showing strong opposition; unfriendly.",
                "examples": [
                    "The acquisition was met with a hostile response."
                ]
            }
        ],
        "synonyms": [
            "unfriendly",
            "antagonistic",
            "belligerent"
        ],
        "antonyms": [
            "friendly",
            "amicable"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "C1-PPL-06",
        "level_code": "C1",
        "domain": "People",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Emotional_States"
    },
    {
        "id": "C1-ADJ-PEO-03",
        "word": "humane",
        "emoji": "🤝",
        "subtext": "very humane / completely humane / a humane approach",
        "form": "adjective",
        "transcription": "hjuːˈmeɪn",
        "definitions": [
            {
                "text": "Showing compassion and benevolence.",
                "examples": [
                    "The company treats its workers in a very humane way."
                ]
            }
        ],
        "synonyms": [
            "compassionate",
            "kind",
            "benevolent"
        ],
        "antonyms": [
            "inhumane",
            "cruel"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "C1-PPL-07",
        "level_code": "C1",
        "domain": "People",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Emotional_States"
    },
    {
        "id": "C1-ADJ-PEO-04",
        "word": "hypocritical",
        "emoji": "👺",
        "subtext": "deeply hypocritical / utterly hypocritical / openly hypocritical",
        "form": "adjective",
        "transcription": "ˌhɪpəˈkrɪtɪkl",
        "definitions": [
            {
                "text": "Pretending to have beliefs you do not actually have.",
                "examples": [
                    "It is hypocritical to talk about sustainability while flying constantly."
                ]
            }
        ],
        "synonyms": [
            "sanctimonious",
            "insincere",
            "two-faced"
        ],
        "antonyms": [
            "sincere",
            "honest"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "C1-PPL-08",
        "level_code": "C1",
        "domain": "People",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Emotional_States"
    },
    {
        "id": "C1-ADJ-PEO-05",
        "word": "impulsive",
        "emoji": "⚡",
        "subtext": "very impulsive / completely impulsive / act impulsively",
        "form": "adjective",
        "transcription": "ɪmˈpʌlsɪv",
        "definitions": [
            {
                "text": "Acting without thinking; responding to impulses.",
                "examples": [
                    "He made an impulsive decision and regretted it later."
                ]
            }
        ],
        "synonyms": [
            "rash",
            "hasty",
            "unpredictable"
        ],
        "antonyms": [
            "deliberate",
            "planned"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "C1-PPL-09",
        "level_code": "C1",
        "domain": "People",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Emotional_States"
    },
    {
        "id": "C1-ADJ-PEO-06",
        "word": "manipulative",
        "emoji": "🕹️",
        "subtext": "deeply manipulative / very manipulative / overtly manipulative",
        "form": "adjective",
        "transcription": "məˈnɪpjələtɪv",
        "definitions": [
            {
                "text": "Using unfair influence to control others.",
                "examples": [
                    "He has a manipulative approach that makes colleagues uncomfortable."
                ]
            }
        ],
        "synonyms": [
            "calculating",
            "deceptive",
            "cunning"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "C1-PPL-12",
        "level_code": "C1",
        "domain": "People",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Emotional_States"
    },
    {
        "id": "C1-ADJ-PEO-07",
        "word": "naive",
        "emoji": "👶",
        "subtext": "very naive / somewhat naive / dangerously naive",
        "form": "adjective",
        "transcription": "naɪˈiːv",
        "definitions": [
            {
                "text": "Having too simple a view of the world; lacking experience.",
                "examples": [
                    "It would be naive to think this problem has an easy solution."
                ]
            }
        ],
        "synonyms": [
            "innocent",
            "unsophisticated",
            "artless"
        ],
        "antonyms": [
            "sophisticated",
            "experienced"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "C1-PPL-13",
        "level_code": "C1",
        "domain": "People",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Emotional_States"
    },
    {
        "id": "C1-ADJ-PEO-08",
        "word": "pragmatic",
        "emoji": "🛠️",
        "subtext": "very pragmatic / highly pragmatic / a pragmatic solution",
        "form": "adjective",
        "transcription": "præɡˈmætɪk",
        "definitions": [
            {
                "text": "Dealing with things in a practical way.",
                "examples": [
                    "She has a very pragmatic approach to problem-solving."
                ]
            }
        ],
        "synonyms": [
            "practical",
            "realistic",
            "down-to-earth"
        ],
        "antonyms": [
            "idealistic",
            "impractical"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "C1-PPL-14",
        "level_code": "C1",
        "domain": "People",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Emotional_States"
    },
    {
        "id": "C1-ADJ-PEO-09",
        "word": "principled",
        "emoji": "⚖️",
        "subtext": "highly principled / firmly principled / a principled stand",
        "form": "adjective",
        "transcription": "ˈprɪnsəpəld",
        "definitions": [
            {
                "text": "Acting in accordance with strong moral values.",
                "examples": [
                    "She is known for being a principled and fair leader."
                ]
            }
        ],
        "synonyms": [
            "moral",
            "upright",
            "ethical"
        ],
        "antonyms": [
            "unprincipled",
            "immoral"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "C1-PPL-15",
        "level_code": "C1",
        "domain": "People",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Emotional_States"
    },
    {
        "id": "C1-ADJ-PEO-10",
        "word": "reckless",
        "emoji": "🏎️",
        "subtext": "very reckless / utterly reckless / recklessly ambitious",
        "form": "adjective",
        "transcription": "ˈrekləs",
        "definitions": [
            {
                "text": "Not thinking about the dangers of your actions.",
                "examples": [
                    "The decision was described as reckless and irresponsible."
                ]
            }
        ],
        "synonyms": [
            "rash",
            "careless",
            "foolhardy"
        ],
        "antonyms": [
            "careful",
            "cautious"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "C1-PPL-18",
        "level_code": "C1",
        "domain": "People",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Emotional_States"
    },
    {
        "id": "C1-ADJ-PEO-11",
        "word": "resilient",
        "emoji": "🎾",
        "subtext": "very resilient / highly resilient / a resilient organisation",
        "form": "adjective",
        "transcription": "rɪˈzɪliənt",
        "definitions": [
            {
                "text": "Able to recover quickly from difficulties.",
                "examples": [
                    "The team proved resilient in the face of crisis."
                ]
            }
        ],
        "synonyms": [
            "tough",
            "strong",
            "flexible"
        ],
        "antonyms": [
            "fragile",
            "weak"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "C1-PPL-20",
        "level_code": "C1",
        "domain": "People",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Emotional_States"
    },
    {
        "id": "C1-ADJ-PEO-12",
        "word": "ruthless",
        "emoji": "🗡️",
        "subtext": "utterly ruthless / completely ruthless / a ruthless approach",
        "form": "adjective",
        "transcription": "ˈruːθləs",
        "definitions": [
            {
                "text": "Willing to do anything to achieve your aims.",
                "examples": [
                    "The CEO has a reputation for being ruthlessly efficient."
                ]
            }
        ],
        "synonyms": [
            "merciless",
            "pitiless",
            "cold-blooded"
        ],
        "antonyms": [
            "merciful",
            "compassionate"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "C1-PPL-21",
        "level_code": "C1",
        "domain": "People",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Emotional_States"
    },
    {
        "id": "C1-ADJ-PEO-13",
        "word": "shrewd",
        "emoji": "🦊",
        "subtext": "very shrewd / extremely shrewd / a shrewd move",
        "form": "adjective",
        "transcription": "ʃruːd",
        "definitions": [
            {
                "text": "Having good practical judgement; clever.",
                "examples": [
                    "She is a very shrewd negotiator."
                ]
            }
        ],
        "synonyms": [
            "clever",
            "astute",
            "sharp"
        ],
        "antonyms": [
            "stupid",
            "naive"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "C1-PPL-22",
        "level_code": "C1",
        "domain": "People",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Emotional_States"
    },
    {
        "id": "C1-ADJ-PEO-14",
        "word": "tenacious",
        "emoji": "⚓",
        "subtext": "very tenacious / extremely tenacious / tenaciously pursued",
        "form": "adjective",
        "transcription": "təˈneɪʃəs",
        "definitions": [
            {
                "text": "Holding firmly to something; very determined.",
                "examples": [
                    "He is tenacious and never gives up on a deal."
                ]
            }
        ],
        "synonyms": [
            "determined",
            "persistent",
            "resolute"
        ],
        "antonyms": [
            "irresolute",
            "weak"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "C1-PPL-25",
        "level_code": "C1",
        "domain": "People",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Emotional_States"
    },
    {
        "id": "C1-ADJ-PEO-15",
        "word": "visionary",
        "emoji": "🔭",
        "subtext": "truly visionary / a visionary approach / a visionary leader",
        "form": "adjective",
        "transcription": "ˈvɪʒənəri",
        "definitions": [
            {
                "text": "Thinking about the future in an original way.",
                "examples": [
                    "She is known as a visionary leader in the sector."
                ]
            }
        ],
        "synonyms": [
            "inspired",
            "imaginative",
            "creative"
        ],
        "antonyms": [
            "unimaginative",
            "short-sighted"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "C1-PPL-26",
        "level_code": "C1",
        "domain": "People",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Emotional_States"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
