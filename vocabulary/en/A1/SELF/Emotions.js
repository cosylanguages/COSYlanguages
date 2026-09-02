(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-SELF-01",
        "word": "afraid",
        "form": "adjective",
        "subtext": "afraid of / feel afraid / deeply afraid",
        "synonyms": [
            "scared",
            "frightened",
            "terrified"
        ],
        "definitions": [
            {
                "text": "Feeling fear.",
                "examples": [
                    "He is afraid of making mistakes."
                ]
            }
        ],
        "comparative": "more afraid",
        "superlative": "the most afraid",
        "emoji": "😨",
        "transcription": "əˈfreɪd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "brave"
        ],
        "legacy_id": "en_starter_emotions_012",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-02",
        "word": "angry",
        "form": "adjective",
        "subtext": "feel angry / angry with someone / very angry",
        "synonyms": [
            "mad",
            "furious",
            "annoyed"
        ],
        "definitions": [
            {
                "text": "Feeling strong displeasure.",
                "examples": [
                    "She was angry about the decision."
                ]
            }
        ],
        "comparative": "angrier",
        "superlative": "the angriest",
        "emoji": "😠",
        "transcription": "ˈæŋgri",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "calm"
        ],
        "legacy_id": "en_starter_emotions_009",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-03",
        "word": "bored",
        "form": "adjective",
        "subtext": "feel bored / bored with / easily bored",
        "synonyms": [
            "uninterested",
            "weary"
        ],
        "definitions": [
            {
                "text": "Feeling uninterested or restless.",
                "examples": [
                    "He feels bored in long meetings."
                ]
            }
        ],
        "comparative": "more bored",
        "superlative": "the most bored",
        "emoji": "😴",
        "transcription": "bɔrd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "interesting"
        ],
        "legacy_id": "en_starter_emotions_010",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-04",
        "word": "calm",
        "emoji": "😌",
        "form": "adjective",
        "subtext": "stay calm / a calm sea",
        "synonyms": [
            "peaceful",
            "quiet"
        ],
        "definitions": [
            {
                "text": "Peaceful, quiet, and without worry.",
                "examples": [
                    "The sea is very calm today.",
                    "Please stay calm."
                ]
            }
        ],
        "comparative": "calmer",
        "superlative": "the calmest",
        "transcription": "kɑm",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "stormy"
        ],
        "legacy_id": "en_starter_emotions_020",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-05",
        "word": "disappointed",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling sad because something was not as good as expected.",
                "examples": [
                    "She was disappointed not to get the job."
                ]
            }
        ],
        "subtext": "feel disappointed / deeply disappointed / disappointed with",
        "synonyms": [
            "sad",
            "let down"
        ],
        "comparative": "more disappointed",
        "superlative": "the most disappointed",
        "emoji": "😞",
        "transcription": "ˌdɪsəˈpɔɪnɪd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "satisfied"
        ],
        "legacy_id": "en_starter_emotions_018",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-06",
        "word": "dislike",
        "emoji": "👎",
        "subtext": "not like / dislike doing",
        "form": "verb",
        "definitions": [
            {
                "text": "To not like someone or something.",
                "examples": [
                    "I dislike loud music."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "disliked",
        "v3": "disliked",
        "group": "regular",
        "transcription": "dɪsˈlaɪk",
        "auxiliary": "have",
        "v4": "disliking",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "prefer"
        ],
        "legacy_id": "en_starter_emotions_057",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-07",
        "word": "enjoy",
        "emoji": "😊",
        "subtext": "enjoy doing / enjoy a meal / enjoy your work / enjoy life",
        "form": "verb",
        "definitions": [
            {
                "text": "To take pleasure from something.",
                "examples": [
                    "She really enjoys working from home three days a week."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "enjoyed",
        "v3": "enjoyed",
        "group": "regular",
        "transcription": "ˌɛnˈʤɔɪ",
        "auxiliary": "have",
        "v4": "enjoying",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "hate"
        ],
        "legacy_id": "en_starter_emotions_061",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-08",
        "word": "excited",
        "form": "adjective",
        "subtext": "feel excited / excited about / very excited",
        "definitions": [
            {
                "text": "Feeling enthusiasm and eagerness.",
                "examples": [
                    "She is excited about her new job."
                ]
            }
        ],
        "comparative": "more excited",
        "superlative": "the most excited",
        "emoji": "🤩",
        "transcription": "ɪkˈsaɪtɪd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "bored"
        ],
        "legacy_id": "en_starter_emotions_011",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-09",
        "word": "fight",
        "emoji": "⚔️",
        "form": "verb",
        "subtext": "fight for / a big fight",
        "synonyms": [
            "battle"
        ],
        "definitions": [
            {
                "text": "To use physical force to try to hurt someone or win something.",
                "examples": [
                    "The two boys are fighting."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "fought",
        "v3": "fought",
        "group": "regular",
        "transcription": "faɪt",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "make peace"
        ],
        "legacy_id": "en_starter_emotions_064",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-10",
        "word": "glad",
        "emoji": "😊",
        "form": "adjective",
        "definitions": [
            {
                "text": "Happy and pleased.",
                "examples": [
                    "I am glad to see you."
                ]
            }
        ],
        "subtext": "glad that / so glad",
        "synonyms": [
            "happy",
            "pleased"
        ],
        "comparative": "gladder",
        "superlative": "the gladdest",
        "transcription": "glæd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "happy"
        ],
        "legacy_id": "en_starter_emotions_021",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-11",
        "word": "happy",
        "emoji": "😊",
        "form": "adjective",
        "subtext": "feel happy / happy with something / a happy day",
        "synonyms": [
            "glad",
            "joyful",
            "cheerful"
        ],
        "definitions": [
            {
                "text": "Feeling pleasure or joy.",
                "examples": [
                    "I am happy today."
                ]
            },
            {
                "text": "Feeling pleasure or satisfaction.",
                "examples": [
                    "She is happy in her new role."
                ]
            }
        ],
        "comparative": "happier",
        "superlative": "the happiest",
        "transcription": "ˈhæpi",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "sad"
        ],
        "legacy_id": "en_starter_emotions_002",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-12",
        "word": "hate",
        "emoji": "😡",
        "subtext": "hate doing / hate someone / hate meetings / hate commuting",
        "form": "verb",
        "definitions": [
            {
                "text": "To strongly dislike.",
                "examples": [
                    "He hates commuting by bus.",
                    "She hates long meetings."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "hated",
        "v3": "hated",
        "group": "regular",
        "transcription": "heɪt",
        "synonyms": [
            "dislike"
        ],
        "auxiliary": "have",
        "v4": "hating",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "love"
        ],
        "legacy_id": "en_starter_emotions_059",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-13",
        "word": "hope",
        "emoji": "🤞",
        "subtext": "hope for / hope to do / hope that / I hope so",
        "form": "verb",
        "definitions": [
            {
                "text": "To wish for something to happen.",
                "examples": [
                    "I hope to get a promotion this year.",
                    "She hopes for better pay."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "hoped",
        "v3": "hoped",
        "group": "regular",
        "transcription": "hoʊp",
        "synonyms": [
            "wish"
        ],
        "auxiliary": "have",
        "v4": "hoping",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "fear"
        ],
        "legacy_id": "en_starter_emotions_060",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-14",
        "word": "hungry",
        "form": "adjective",
        "subtext": "feel hungry / very hungry / go hungry",
        "synonyms": [
            "starving",
            "famished"
        ],
        "definitions": [
            {
                "text": "Needing food.",
                "examples": [
                    "I am hungry — it is already two o'clock."
                ]
            }
        ],
        "comparative": "hungrier",
        "superlative": "the hungriest",
        "emoji": "🍔",
        "transcription": "ˈhəŋgri",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "full"
        ],
        "legacy_id": "en_starter_emotions_008",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-15",
        "word": "laugh",
        "emoji": "😂",
        "form": "verb",
        "subtext": "laugh at / laugh together",
        "synonyms": [
            "chuckle"
        ],
        "definitions": [
            {
                "text": "To make sounds with your voice because you think something is funny.",
                "examples": [
                    "They were laughing at his joke."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "laughed",
        "v3": "laughed",
        "group": "regular",
        "transcription": "læf",
        "auxiliary": "have",
        "v4": "laughing",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "cry"
        ],
        "legacy_id": "en_starter_emotions_062",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-16",
        "word": "like",
        "emoji": "👍",
        "subtext": "like work / like to travel / like someone / like the idea",
        "form": "verb",
        "definitions": [
            {
                "text": "To find something pleasant; to enjoy.",
                "examples": [
                    "I like my job.",
                    "She likes cooking.",
                    "He likes coffee."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "liked",
        "v3": "liked",
        "group": "regular",
        "transcription": "laɪk",
        "synonyms": [
            "enjoy"
        ],
        "auxiliary": "have",
        "v4": "liking",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "en_starter_emotions_056",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-17",
        "word": "love",
        "emoji": "❤️",
        "subtext": "love someone / love doing / love a place / love the idea",
        "form": "verb",
        "definitions": [
            {
                "text": "To have strong affection for; to enjoy greatly.",
                "examples": [
                    "She loves her job.",
                    "He loves travelling for work."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "loved",
        "v3": "loved",
        "group": "regular",
        "transcription": "ləv",
        "synonyms": [
            "adore"
        ],
        "auxiliary": "have",
        "v4": "loving",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "hate"
        ],
        "legacy_id": "en_starter_emotions_058",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-18",
        "word": "lucky",
        "emoji": "🍀",
        "form": "adjective",
        "subtext": "a lucky person / feel lucky",
        "synonyms": [
            "fortunate"
        ],
        "definitions": [
            {
                "text": "Having good luck.",
                "examples": [
                    "He is very lucky to have such a good job."
                ]
            }
        ],
        "comparative": "luckier",
        "superlative": "the luckiest",
        "transcription": "ˈləki",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "unlucky"
        ],
        "legacy_id": "en_starter_emotions_019",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-19",
        "word": "need",
        "emoji": "🆘",
        "subtext": "need help / need time / need money / need to rest",
        "form": "verb",
        "definitions": [
            {
                "text": "To require something; to feel that something is necessary.",
                "examples": [
                    "I need a break.",
                    "She needs help.",
                    "We need more time."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "needed",
        "v3": "needed",
        "group": "regular",
        "transcription": "nid",
        "synonyms": [
            "require"
        ],
        "auxiliary": "have",
        "v4": "needing",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "have"
        ],
        "legacy_id": "en_starter_emotions_055",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-20",
        "word": "nervous",
        "form": "adjective",
        "subtext": "feel nervous / nervous about / very nervous",
        "synonyms": [
            "anxious",
            "worried"
        ],
        "definitions": [
            {
                "text": "Feeling anxious or uneasy.",
                "examples": [
                    "He was nervous before the job interview."
                ]
            }
        ],
        "comparative": "more nervous",
        "superlative": "the most nervous",
        "emoji": "😟",
        "transcription": "ˈnərvəs",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "confident"
        ],
        "legacy_id": "en_starter_emotions_015",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-21",
        "word": "relaxed",
        "emoji": "😌",
        "form": "adjective",
        "subtext": "feeling relaxed",
        "synonyms": [
            "calm",
            "peaceful",
            "chilled"
        ],
        "definitions": [
            {
                "text": "Calm; not worried or stressed.",
                "examples": [
                    "I feel relaxed at the weekend."
                ]
            }
        ],
        "comparative": "more relaxed",
        "superlative": "the most relaxed",
        "transcription": "rɪˈlækst",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "stressed"
        ],
        "legacy_id": "en_starter_emotions_005",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-22",
        "word": "sad",
        "form": "adjective",
        "subtext": "feel sad / a sad situation / deeply sad",
        "synonyms": [
            "unhappy",
            "miserable",
            "gloomy"
        ],
        "definitions": [
            {
                "text": "Feeling unhappy or sorrowful.",
                "examples": [
                    "He was sad to leave the company."
                ]
            }
        ],
        "comparative": "sadder",
        "superlative": "the saddest",
        "emoji": "😢",
        "transcription": "sæd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "happy"
        ],
        "legacy_id": "en_starter_emotions_007",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-23",
        "word": "scared",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling fear about something.",
                "examples": [
                    "She was scared about giving the presentation."
                ]
            }
        ],
        "subtext": "feel scared / scared of / very scared",
        "synonyms": [
            "afraid",
            "frightened"
        ],
        "comparative": "more scared",
        "superlative": "the most scared",
        "emoji": "😨",
        "transcription": "skɛrd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "brave"
        ],
        "legacy_id": "en_starter_emotions_016",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-24",
        "word": "sorry",
        "form": "adjective",
        "subtext": "feel sorry / sorry for / sorry about",
        "definitions": [
            {
                "text": "Feeling regret or sadness.",
                "examples": [
                    "She is sorry for the delay."
                ]
            }
        ],
        "comparative": "sorrier",
        "superlative": "the sorriest",
        "emoji": "🙏",
        "transcription": "ˈsɑri",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "unapologetic"
        ],
        "legacy_id": "en_starter_emotions_013",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-25",
        "word": "surprised",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling shock at something unexpected.",
                "examples": [
                    "He was surprised to get a pay rise."
                ]
            }
        ],
        "subtext": "feel surprised / very surprised / pleasantly surprised",
        "synonyms": [
            "amazed",
            "astonished"
        ],
        "comparative": "more surprised",
        "superlative": "the most surprised",
        "emoji": "😲",
        "transcription": "səˈpraɪzd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "unmoved"
        ],
        "legacy_id": "en_starter_emotions_017",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-26",
        "word": "thirsty",
        "emoji": "🥤",
        "form": "adjective",
        "definitions": [
            {
                "text": "Needing or wanting to drink.",
                "examples": [
                    "I am thirsty — can I have some water?"
                ]
            }
        ],
        "subtext": "feel thirsty",
        "synonyms": [
            "parched",
            "dehydrated"
        ],
        "comparative": "thirstier",
        "superlative": "the thirstiest",
        "transcription": "ˈθərsti",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "satisfied"
        ],
        "legacy_id": "en_starter_emotions_004",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-27",
        "word": "tired",
        "emoji": "😫",
        "form": "adjective",
        "subtext": "sleepy, exhausted, feel tired / feel tired / tired of something / very tired",
        "definitions": [
            {
                "text": "Needing rest or sleep.",
                "examples": [
                    "I am very tired after work.",
                    "I feel tired after a long week."
                ]
            }
        ],
        "comparative": "more tired",
        "superlative": "the most tired",
        "transcription": "taɪərd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "energetic"
        ],
        "legacy_id": "en_starter_emotions_003",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-28",
        "word": "unhappy",
        "form": "adjective",
        "subtext": "feel unhappy / very unhappy / unhappy about",
        "synonyms": [
            "sad",
            "miserable"
        ],
        "definitions": [
            {
                "text": "Not feeling pleased; dissatisfied.",
                "examples": [
                    "He is unhappy with his current salary."
                ]
            }
        ],
        "comparative": "unhappier",
        "superlative": "the unhappiest",
        "emoji": "😢",
        "transcription": "ənˈhæpi",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "happy"
        ],
        "legacy_id": "en_starter_emotions_014",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-29",
        "word": "want",
        "emoji": "🙏",
        "subtext": "want a job / want to leave / want more money / want help",
        "form": "verb",
        "definitions": [
            {
                "text": "To desire or wish for something.",
                "examples": [
                    "I want a coffee.",
                    "She wants a better job.",
                    "He wants to retire."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "wanted",
        "v3": "wanted",
        "group": "regular",
        "transcription": "wɔnt",
        "synonyms": [
            "desire"
        ],
        "auxiliary": "have",
        "v4": "wanting",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "refuse"
        ],
        "legacy_id": "en_starter_emotions_054",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-30",
        "word": "worried",
        "emoji": "😟",
        "form": "adjective",
        "subtext": "worried about / deeply worried",
        "synonyms": [
            "anxious",
            "nervous",
            "uneasy"
        ],
        "definitions": [
            {
                "text": "Feeling anxious about something that might happen.",
                "examples": [
                    "She is worried about her job."
                ]
            }
        ],
        "comparative": "more worried",
        "superlative": "the most worried",
        "transcription": "ˈwərid",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "calm"
        ],
        "legacy_id": "en_starter_emotions_006",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    },
    {
        "id": "A1-SELF-31",
        "word": "worry",
        "emoji": "😟",
        "form": "verb",
        "subtext": "worry about / don't worry",
        "synonyms": [
            "fret"
        ],
        "definitions": [
            {
                "text": "To think about problems or unpleasant things that might happen.",
                "examples": [
                    "Don't worry, everything will be fine."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "worried",
        "v3": "worried",
        "group": "regular",
        "transcription": "ˈwəri",
        "auxiliary": "have",
        "v4": "worrying",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "relax"
        ],
        "legacy_id": "en_starter_emotions_063",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
