(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-SEL-078",
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
        "id": "A1-NOUN-SEL-079",
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
        "id": "A1-NOUN-SEL-080",
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
        "id": "A1-NOUN-SEL-081",
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
        "id": "A1-NOUN-SEL-082",
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
        "id": "A1-NOUN-SEL-083",
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
        "id": "A1-NOUN-SEL-084",
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
        "id": "A1-NOUN-SEL-085",
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
        "id": "A1-NOUN-SEL-086",
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
        "id": "A1-NOUN-SEL-087",
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
        "id": "A1-NOUN-SEL-088",
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
        "id": "A1-NOUN-SEL-089",
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
        "id": "A1-NOUN-SEL-091",
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
        "id": "A1-NOUN-SEL-092",
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
        "id": "A1-NOUN-SEL-093",
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
    },
    {
        "id": "A1-NOUN-SEL-095",
        "word": "adult",
        "emoji": "🧑",
        "form": "noun",
        "transcription": "ˈædʌlt",
        "definitions": [
            {
                "text": "A fully grown person.",
                "examples": [
                    "He is an adult now.",
                    "Adults pay full price for tickets."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-096",
        "word": "beginner",
        "emoji": "🔰",
        "form": "noun",
        "transcription": "bɪˈɡɪnər",
        "definitions": [
            {
                "text": "A person who is starting to learn or do something.",
                "examples": [
                    "She is a beginner in English.",
                    "This course is great for beginners."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-097",
        "word": "fan",
        "emoji": "👏",
        "form": "noun",
        "transcription": "fæn",
        "definitions": [
            {
                "text": "A person who admires and supports a person, team, or sport.",
                "examples": [
                    "He is a big football fan.",
                    "She is a fan of pop music."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-098",
        "word": "female",
        "emoji": "👩",
        "form": "noun",
        "transcription": "ˈfiːmeɪl",
        "definitions": [
            {
                "text": "A female person or animal.",
                "examples": [
                    "The doctor was a young female.",
                    "Three females joined the club."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-099",
        "word": "gentleman",
        "emoji": "🎩",
        "form": "noun",
        "transcription": "ˈʤɛntl·mən",
        "definitions": [
            {
                "text": "A polite and courteous man.",
                "examples": [
                    "He is a true gentleman.",
                    "Good morning, ladies and gentlemen."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-100",
        "word": "guy",
        "emoji": "🧑",
        "form": "noun",
        "transcription": "ɡaɪ",
        "definitions": [
            {
                "text": "A man or boy in informal speech.",
                "examples": [
                    "That guy is my neighbor.",
                    "Who is that guy near the door?"
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-101",
        "word": "human",
        "emoji": "👤",
        "form": "noun",
        "transcription": "ˈhjuːmən",
        "definitions": [
            {
                "text": "A person rather than an animal or machine.",
                "examples": [
                    "Humans need water to live.",
                    "Every human makes mistakes."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-102",
        "word": "kid",
        "emoji": "🧒",
        "form": "noun",
        "transcription": "kɪd",
        "definitions": [
            {
                "text": "A child or young person.",
                "examples": [
                    "The kids are playing in the park.",
                    "She has two kids."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-103",
        "word": "lady",
        "emoji": "👩",
        "form": "noun",
        "transcription": "ˈleɪdi",
        "definitions": [
            {
                "text": "A polite term for a woman.",
                "examples": [
                    "An old lady lives in that house.",
                    "This lady helped me yesterday."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-104",
        "word": "male",
        "emoji": "👨",
        "form": "noun",
        "transcription": "meɪl",
        "definitions": [
            {
                "text": "A male person or animal.",
                "examples": [
                    "Most of the students were male.",
                    "The dog is a male."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-105",
        "word": "person",
        "emoji": "👤",
        "form": "noun",
        "transcription": "ˈpɜːrsən",
        "definitions": [
            {
                "text": "A human being as an individual.",
                "examples": [
                    "She is a very nice person.",
                    "Only one person can enter at a time."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-106",
        "word": "stranger",
        "emoji": "❓",
        "form": "noun",
        "transcription": "ˈstreɪnʤər",
        "definitions": [
            {
                "text": "A person whom one does not know.",
                "examples": [
                    "Do not talk to strangers.",
                    "He was a stranger in this city."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-107",
        "word": "youth",
        "emoji": "🧑",
        "form": "noun",
        "transcription": "juːθ",
        "definitions": [
            {
                "text": "The period between childhood and adult age.",
                "examples": [
                    "He enjoyed his youth in Madrid.",
                    "Youths love using new technology."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-141",
        "word": "adolescent",
        "emoji": "🧒",
        "form": "noun",
        "transcription": "ˌædəˈlɛsənt",
        "definitions": [
            {
                "text": "A young person who is developing into an adult.",
                "examples": [
                    "Adolescents need plenty of sleep.",
                    "The program supports adolescents."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-143",
        "word": "citizens",
        "emoji": "👥",
        "form": "noun",
        "transcription": "ˈsɪtəzənz",
        "definitions": [
            {
                "text": "Legal members of a state or nation.",
                "examples": [
                    "Local citizens voted in the election.",
                    "Rights belong to all citizens."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-144",
        "word": "crew",
        "emoji": "👥",
        "form": "noun",
        "transcription": "kruː",
        "definitions": [
            {
                "text": "A group of people who work together on a ship or plane.",
                "examples": [
                    "The flight crew welcomed passengers.",
                    "The boat crew adjusted the sails."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-145",
        "word": "crowds",
        "emoji": "👥",
        "form": "noun",
        "transcription": "kraʊdz",
        "definitions": [
            {
                "text": "Large gatherings of people.",
                "examples": [
                    "Crowds filled the city streets.",
                    "Police managed the festival crowds."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-146",
        "word": "fellow",
        "emoji": "🤝",
        "form": "noun",
        "transcription": "ˈfɛloʊ",
        "definitions": [
            {
                "text": "A man or boy; a companion.",
                "examples": [
                    "He is a pleasant young fellow.",
                    "Greet your fellow travelers."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-147",
        "word": "folk",
        "emoji": "👥",
        "form": "noun",
        "transcription": "foʊk",
        "definitions": [
            {
                "text": "People in general.",
                "examples": [
                    "Country folk enjoy quiet living.",
                    "Hello folks, welcome back!"
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-148",
        "word": "hero",
        "emoji": "🦸",
        "form": "noun",
        "transcription": "ˈhɪroʊ",
        "definitions": [
            {
                "text": "A person admired for courage or outstanding achievements.",
                "examples": [
                    "The firefighter was a local hero.",
                    "He is his father's hero."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-149",
        "word": "heroine",
        "emoji": "🦸‍♀️",
        "form": "noun",
        "transcription": "ˈhɛroʊən",
        "definitions": [
            {
                "text": "A female hero admired for courage.",
                "examples": [
                    "She is the heroine of the novel.",
                    "The heroine saved the town."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-150",
        "word": "ladies",
        "emoji": "👩‍🦰",
        "form": "noun",
        "transcription": "ˈleɪdiz",
        "definitions": [
            {
                "text": "Plural form of lady.",
                "examples": [
                    "Ladies and gentlemen, welcome!",
                    "The ladies sat in the lounge."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-173",
        "word": "bystander",
        "emoji": "👀",
        "form": "noun",
        "transcription": "ˈbaɪˌstændər",
        "definitions": [
            {
                "text": "A person who is present at an event without participating.",
                "examples": [
                    "Bystanders watched the parade pass by.",
                    "A helpful bystander called for aid."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-174",
        "word": "citizenship",
        "emoji": "🪪",
        "form": "noun",
        "transcription": "ˈsɪtəzənˌʃɪp",
        "definitions": [
            {
                "text": "The status of being a citizen of a country.",
                "examples": [
                    "She applied for dual citizenship.",
                    "Citizenship gives voting rights."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-175",
        "word": "genius",
        "emoji": "🧠",
        "form": "noun",
        "transcription": "ˈʤiːnjəs",
        "definitions": [
            {
                "text": "Exceptional intellectual or creative power.",
                "examples": [
                    "Albert Einstein was a mathematical genius.",
                    "She has a genius for painting."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-176",
        "word": "infancy",
        "emoji": "👶",
        "form": "noun",
        "transcription": "ˈɪnfənsi",
        "definitions": [
            {
                "text": "The state or period of early childhood.",
                "examples": [
                    "She spent her infancy in Wales.",
                    "He has lived here since infancy."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-177",
        "word": "majority",
        "emoji": "📊",
        "form": "noun",
        "transcription": "məˈʤɔːrəti",
        "definitions": [
            {
                "text": "The greater number or part of something.",
                "examples": [
                    "The majority of students passed the test.",
                    "A vast majority voted yes."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-178",
        "word": "minority",
        "emoji": "📊",
        "form": "noun",
        "transcription": "maɪˈnɔːrəti",
        "definitions": [
            {
                "text": "The smaller number or part of something.",
                "examples": [
                    "Only a minority arrived late.",
                    "Ethnic minorities enrich culture."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-179",
        "word": "neighbor",
        "emoji": "🏡",
        "form": "noun",
        "transcription": "ˈneɪbər",
        "definitions": [
            {
                "text": "A person living near or next door.",
                "examples": [
                    "Our neighbor brought freshly baked bread.",
                    "Be kind to your neighbors."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-180",
        "word": "personality",
        "emoji": "✨",
        "form": "noun",
        "transcription": "ˌpɜːrsəˈnæləti",
        "definitions": [
            {
                "text": "The combination of characteristics forming an individual's character.",
                "examples": [
                    "She has a warm friendly personality.",
                    "His outgoing personality wins friends."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-181",
        "word": "population",
        "emoji": "👥",
        "form": "noun",
        "transcription": "ˌpɑːpjəˈleɪʃən",
        "definitions": [
            {
                "text": "All the inhabitants of a particular place.",
                "examples": [
                    "The city population grew last year.",
                    "Small island populations share close bonds."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-183",
        "word": "resident",
        "emoji": "🏠",
        "form": "noun",
        "transcription": "ˈrɛzədənt",
        "definitions": [
            {
                "text": "A person who lives somewhere permanently or on a long-term basis.",
                "examples": [
                    "Local residents attended the meeting.",
                    "Hotel residents enjoy free breakfast."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-184",
        "word": "senior",
        "emoji": "👴",
        "form": "noun",
        "transcription": "ˈsiːnjər",
        "definitions": [
            {
                "text": "An older person or someone of higher rank.",
                "examples": [
                    "Senior citizens get discounts.",
                    "She is a senior manager."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-185",
        "word": "society",
        "emoji": "🌐",
        "form": "noun",
        "transcription": "səˈsaɪəti",
        "definitions": [
            {
                "text": "People living together in an ordered community.",
                "examples": [
                    "Education is vital for modern society.",
                    "Libraries serve all of society."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-186",
        "word": "sir",
        "form": "noun",
        "transcription": "sɜːr",
        "emoji": "🎩",
        "definitions": [
            {
                "text": "A polite word used to address a man.",
                "examples": [
                    "Good morning, sir.",
                    "Can I help you, sir?"
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    },
    {
        "id": "A1-NOUN-SEL-187",
        "word": "madam",
        "form": "noun",
        "transcription": "ˈmædəm",
        "emoji": "👑",
        "definitions": [
            {
                "text": "A polite word used to address a woman.",
                "examples": [
                    "Thank you, madam.",
                    "May I take your order, madam?"
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Nouns",
        "sub_subcategory": "General_Identity"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
