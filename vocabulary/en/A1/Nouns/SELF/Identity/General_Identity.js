(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-SEL-01",
        "word": "I",
        "emoji": "🙋",
        "form": "pronoun",
        "transcription": "aɪ",
        "definitions": [
            {
                "text": "Used by a speaker to refer to himself or herself.",
                "examples": [
                    "I am a student.",
                    "I like coffee."
                ]
            }
        ],
        "subtext": "subject pronoun",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null,
        "legacy_id": "A1-SELF-07",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-02",
        "word": "algorithm",
        "form": "noun",
        "transcription": "ˈælɡərɪðəm",
        "definitions": [
            {
                "text": "A set of rules for a computer to solve a problem.",
                "examples": [
                    "The search engine uses a complex algorithm."
                ]
            }
        ],
        "emoji": "💻",
        "lang": "en",
        "level": "b1",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "legacy_id": "B1-SCI-01",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-03",
        "word": "balcony",
        "form": "noun",
        "transcription": "ˈbælkəni",
        "definitions": [
            {
                "text": "A platform outside an upper window of a building.",
                "examples": [
                    "We sat on the balcony in the morning."
                ]
            }
        ],
        "emoji": "🏙️",
        "lang": "en",
        "level": "a1",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "legacy_id": "A1-HOME-01",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-04",
        "word": "he",
        "emoji": "👨",
        "form": "pronoun",
        "transcription": "hi",
        "definitions": [
            {
                "text": "Used to refer to a male person or animal already mentioned.",
                "examples": [
                    "He is my brother.",
                    "He works in an office."
                ]
            }
        ],
        "subtext": "subject pronoun",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null,
        "antonyms": [
            "she"
        ],
        "legacy_id": "A1-SELF-27",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-05",
        "word": "her",
        "emoji": "👩",
        "form": "pronoun",
        "transcription": "hər",
        "definitions": [
            {
                "text": "The object form of 'she'.",
                "examples": [
                    "I see her.",
                    "Talk to her."
                ]
            }
        ],
        "subtext": "object pronoun",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null,
        "antonyms": [
            "him"
        ],
        "legacy_id": "A1-SELF-28",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-06",
        "word": "hermeneutics",
        "form": "noun",
        "transcription": "ˌhɜːrməˈnuːtɪks",
        "definitions": [
            {
                "text": "The branch of knowledge that deals with interpretation, especially of text.",
                "examples": [
                    "Literary analysis relies on hermeneutics."
                ]
            }
        ],
        "emoji": "📖",
        "lang": "en",
        "level": "c2",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "legacy_id": "C2-PHIL-01",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-07",
        "word": "him",
        "emoji": "👨",
        "form": "pronoun",
        "transcription": "hɪm",
        "definitions": [
            {
                "text": "The object form of 'he'.",
                "examples": [
                    "I know him.",
                    "Give it to him."
                ]
            }
        ],
        "subtext": "object pronoun",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null,
        "antonyms": [
            "her"
        ],
        "legacy_id": "A1-SELF-29",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-08",
        "word": "it",
        "emoji": "📦",
        "form": "pronoun",
        "transcription": "ɪt",
        "definitions": [
            {
                "text": "Used to refer to a thing, animal, or situation already mentioned.",
                "examples": [
                    "It is a big house.",
                    "I like it."
                ]
            }
        ],
        "subtext": "subject or object pronoun",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null,
        "legacy_id": "A1-SELF-38",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-09",
        "word": "journalism",
        "form": "noun",
        "transcription": "ˈdʒɜːrnəlɪzəm",
        "definitions": [
            {
                "text": "The work of collecting and writing news stories.",
                "examples": [
                    "She studied journalism at university."
                ]
            }
        ],
        "emoji": "📰",
        "lang": "en",
        "level": "b1",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "legacy_id": "B1-SOC-36",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-10",
        "word": "jurisdiction",
        "form": "noun",
        "transcription": "ˌdʒʊrɪsˈdɪkʃn",
        "definitions": [
            {
                "text": "The official power to make legal decisions and judgments.",
                "examples": [
                    "The court has jurisdiction over international disputes."
                ]
            }
        ],
        "emoji": "⚖️",
        "lang": "en",
        "level": "c1",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "legacy_id": "C1-LAW-68",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-11",
        "word": "jurisprudence",
        "form": "noun",
        "transcription": "ˌdʒʊrɪsˈpruːdns",
        "definitions": [
            {
                "text": "The theory or philosophy of law.",
                "examples": [
                    "Modern jurisprudence emphasizes human rights."
                ]
            }
        ],
        "emoji": "📜",
        "lang": "en",
        "level": "c2",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "legacy_id": "C2-LAW-50",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-12",
        "word": "me",
        "emoji": "🙋",
        "form": "pronoun",
        "transcription": "mi",
        "definitions": [
            {
                "text": "Used by a speaker to refer to himself or herself as the object of a verb or preposition.",
                "examples": [
                    "Help me, please.",
                    "This gift is for me."
                ]
            }
        ],
        "subtext": "object pronoun",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null,
        "legacy_id": "A1-SELF-41",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-13",
        "word": "nickname",
        "form": "noun",
        "transcription": "ˈnɪkneɪm",
        "definitions": [
            {
                "text": "An informal name used by family or friends.",
                "examples": [
                    "His nickname is Alex."
                ]
            }
        ],
        "emoji": "📛",
        "lang": "en",
        "level": "a1",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "legacy_id": "A1-SELF-45",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-14",
        "word": "she",
        "emoji": "👩",
        "form": "pronoun",
        "transcription": "ʃi",
        "definitions": [
            {
                "text": "Used to refer to a female person or animal already mentioned.",
                "examples": [
                    "She is my sister.",
                    "She likes to dance."
                ]
            }
        ],
        "subtext": "subject pronoun",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null,
        "antonyms": [
            "he"
        ],
        "legacy_id": "A1-SELF-50",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-15",
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
        "subcategory": "Identity",
        "legacy_id": "A1-SELF-19",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-16",
        "word": "them",
        "emoji": "👥",
        "form": "pronoun",
        "transcription": "ðɛm",
        "definitions": [
            {
                "text": "The object form of 'they'.",
                "examples": [
                    "I like them.",
                    "Tell them the news."
                ]
            }
        ],
        "subtext": "object pronoun",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null,
        "antonyms": [
            "us"
        ],
        "legacy_id": "A1-SELF-59",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-17",
        "word": "they",
        "emoji": "👥",
        "form": "pronoun",
        "transcription": "ðeɪ",
        "definitions": [
            {
                "text": "Used to refer to two or more people or things already mentioned.",
                "examples": [
                    "They are my parents.",
                    "They work together."
                ]
            }
        ],
        "subtext": "subject pronoun",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null,
        "antonyms": [
            "we"
        ],
        "legacy_id": "A1-SELF-60",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-18",
        "word": "toaster",
        "form": "noun",
        "transcription": "ˈtoʊstər",
        "definitions": [
            {
                "text": "An electric machine for making toast.",
                "examples": [
                    "Put the bread in the toaster."
                ]
            }
        ],
        "emoji": "🍞",
        "lang": "en",
        "level": "a1",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "legacy_id": "A1-HOME-05",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-19",
        "word": "us",
        "emoji": "👥",
        "form": "pronoun",
        "transcription": "əs",
        "definitions": [
            {
                "text": "The object form of 'we'.",
                "examples": [
                    "Join us.",
                    "He invited us to the party."
                ]
            }
        ],
        "subtext": "object pronoun",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null,
        "antonyms": [
            "them"
        ],
        "legacy_id": "A1-SELF-66",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-20",
        "word": "we",
        "emoji": "👥",
        "form": "pronoun",
        "transcription": "wi",
        "definitions": [
            {
                "text": "Used to refer to the speaker and one or more other people.",
                "examples": [
                    "We are friends.",
                    "We live in London."
                ]
            }
        ],
        "subtext": "subject pronoun",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null,
        "antonyms": [
            "they"
        ],
        "legacy_id": "A1-SELF-69",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-21",
        "word": "you",
        "emoji": "🫵",
        "form": "pronoun",
        "transcription": "ju",
        "definitions": [
            {
                "text": "Used to refer to the person or people the speaker is addressing.",
                "examples": [
                    "How are you?",
                    "You are helpful."
                ]
            }
        ],
        "subtext": "subject or object pronoun",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null,
        "legacy_id": "A1-SELF-72",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
