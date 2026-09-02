(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-ADJ-SEL-191",
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
        "emoji": "\ud83d\ude28",
        "transcription": "\u0259\u02c8fre\u026ad",
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
        "id": "A1-ADJ-SEL-192",
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
        "emoji": "\ud83d\ude20",
        "transcription": "\u02c8\u00e6\u014bgri",
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
        "id": "A1-ADJ-SEL-193",
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
        "emoji": "\ud83d\ude34",
        "transcription": "b\u0254rd",
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
        "id": "A1-ADJ-SEL-194",
        "word": "calm",
        "emoji": "\ud83d\ude0c",
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
        "transcription": "k\u0251m",
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
        "id": "A1-ADJ-SEL-195",
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
        "emoji": "\ud83d\ude1e",
        "transcription": "\u02ccd\u026as\u0259\u02c8p\u0254\u026an\u026ad",
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
        "id": "A1-ADJ-SEL-196",
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
        "emoji": "\ud83e\udd29",
        "transcription": "\u026ak\u02c8sa\u026at\u026ad",
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
        "id": "A1-ADJ-SEL-197",
        "word": "glad",
        "emoji": "\ud83d\ude0a",
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
        "transcription": "gl\u00e6d",
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
        "id": "A1-ADJ-SEL-198",
        "word": "happy",
        "emoji": "\ud83d\ude0a",
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
        "transcription": "\u02c8h\u00e6pi",
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
        "id": "A1-ADJ-SEL-199",
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
                    "I am hungry \u2014 it is already two o'clock."
                ]
            }
        ],
        "comparative": "hungrier",
        "superlative": "the hungriest",
        "emoji": "\ud83c\udf54",
        "transcription": "\u02c8h\u0259\u014bgri",
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
        "id": "A1-ADJ-SEL-200",
        "word": "lucky",
        "emoji": "\ud83c\udf40",
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
        "transcription": "\u02c8l\u0259ki",
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
        "id": "A1-ADJ-SEL-201",
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
        "emoji": "\ud83d\ude1f",
        "transcription": "\u02c8n\u0259rv\u0259s",
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
        "id": "A1-ADJ-SEL-202",
        "word": "relaxed",
        "emoji": "\ud83d\ude0c",
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
        "transcription": "r\u026a\u02c8l\u00e6kst",
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
        "id": "A1-ADJ-SEL-203",
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
        "emoji": "\ud83d\ude22",
        "transcription": "s\u00e6d",
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
        "id": "A1-ADJ-SEL-204",
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
        "emoji": "\ud83d\ude28",
        "transcription": "sk\u025brd",
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
        "id": "A1-ADJ-SEL-205",
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
        "emoji": "\ud83d\ude4f",
        "transcription": "\u02c8s\u0251ri",
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
        "id": "A1-ADJ-SEL-206",
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
        "emoji": "\ud83d\ude32",
        "transcription": "s\u0259\u02c8pra\u026azd",
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
        "id": "A1-ADJ-SEL-207",
        "word": "thirsty",
        "emoji": "\ud83e\udd64",
        "form": "adjective",
        "definitions": [
            {
                "text": "Needing or wanting to drink.",
                "examples": [
                    "I am thirsty \u2014 can I have some water?"
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
        "transcription": "\u02c8\u03b8\u0259rsti",
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
        "id": "A1-ADJ-SEL-208",
        "word": "tired",
        "emoji": "\ud83d\ude2b",
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
        "transcription": "ta\u026a\u0259rd",
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
        "id": "A1-ADJ-SEL-209",
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
        "emoji": "\ud83d\ude22",
        "transcription": "\u0259n\u02c8h\u00e6pi",
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
        "id": "A1-ADJ-SEL-210",
        "word": "worried",
        "emoji": "\ud83d\ude1f",
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
        "transcription": "\u02c8w\u0259rid",
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
