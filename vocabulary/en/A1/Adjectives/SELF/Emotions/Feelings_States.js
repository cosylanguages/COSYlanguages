(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-ADJ-SEL-01",
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
        "legacy_id": "A1-SELF-01",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-02",
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
        "legacy_id": "A1-SELF-02",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-03",
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
        "legacy_id": "A1-SELF-03",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-04",
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
        "legacy_id": "A1-SELF-04",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-05",
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
        "legacy_id": "A1-SELF-05",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-06",
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
        "legacy_id": "A1-SELF-08",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-07",
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
        "legacy_id": "A1-SELF-10",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-08",
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
        "legacy_id": "A1-SELF-11",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-09",
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
        "legacy_id": "A1-SELF-14",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-10",
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
        "legacy_id": "A1-SELF-18",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-11",
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
        "legacy_id": "A1-SELF-20",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-12",
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
        "legacy_id": "A1-SELF-21",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-13",
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
        "legacy_id": "A1-SELF-22",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-14",
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
        "legacy_id": "A1-SELF-23",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-15",
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
        "legacy_id": "A1-SELF-24",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-16",
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
        "legacy_id": "A1-SELF-25",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-17",
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
        "legacy_id": "A1-SELF-26",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-18",
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
        "legacy_id": "A1-SELF-27",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-19",
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
        "legacy_id": "A1-SELF-28",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-20",
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
        "legacy_id": "A1-SELF-30",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
