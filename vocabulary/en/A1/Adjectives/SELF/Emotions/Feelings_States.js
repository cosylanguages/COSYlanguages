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
    },
    {
        "id": "A1-ADJ-SEL-248",
        "word": "anxious",
        "emoji": "\ud83d\ude1f",
        "form": "adjective",
        "transcription": "\u02c8\u00e6\u014bk\u0283\u0259s",
        "definitions": [
            {
                "text": "Feeling worried or nervous.",
                "examples": [
                    "He felt anxious before the test.",
                    "She looked anxious when waiting."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-249",
        "word": "asleep",
        "emoji": "\ud83d\ude34",
        "form": "adjective",
        "transcription": "\u0259\u02c8sli\u02d0p",
        "definitions": [
            {
                "text": "In a state of sleep.",
                "examples": [
                    "The baby is fast asleep.",
                    "He fell asleep on the train."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-250",
        "word": "cheerful",
        "emoji": "\ud83d\ude0a",
        "form": "adjective",
        "transcription": "\u02c8\u02a7\u026arf\u0259l",
        "definitions": [
            {
                "text": "Noticeably happy and optimistic.",
                "examples": [
                    "She gave a cheerful smile.",
                    "He has a bright cheerful personality."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-251",
        "word": "confused",
        "emoji": "\ud83d\ude15",
        "form": "adjective",
        "transcription": "k\u0259n\u02c8fju\u02d0zd",
        "definitions": [
            {
                "text": "Unable to think clearly or understand.",
                "examples": [
                    "I am confused by these directions.",
                    "He looked confused after the explanation."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-252",
        "word": "delighted",
        "emoji": "\ud83d\ude03",
        "form": "adjective",
        "transcription": "d\u026a\u02c8la\u026at\u0259d",
        "definitions": [
            {
                "text": "Feeling or showing great pleasure.",
                "examples": [
                    "We were delighted to meet you.",
                    "She was delighted with her present."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-253",
        "word": "lonely",
        "emoji": "\ud83e\udd7a",
        "form": "adjective",
        "transcription": "\u02c8lo\u028anli",
        "definitions": [
            {
                "text": "Sad because one has no friends or company.",
                "examples": [
                    "He felt lonely in the big city.",
                    "She gets lonely living by herself."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-254",
        "word": "satisfied",
        "emoji": "\ud83d\ude0c",
        "form": "adjective",
        "transcription": "\u02c8s\u00e6t\u0259s\u02ccfa\u026ad",
        "definitions": [
            {
                "text": "Contented and pleased.",
                "examples": [
                    "She was satisfied with her exam score.",
                    "Are you satisfied with the service?"
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-255",
        "word": "sick",
        "emoji": "\ud83e\udd12",
        "form": "adjective",
        "transcription": "s\u026ak",
        "definitions": [
            {
                "text": "Affected by physical or mental illness.",
                "examples": [
                    "He stayed home because he felt sick.",
                    "She was sick with a bad cold."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-256",
        "word": "upset",
        "emoji": "\ud83d\ude22",
        "form": "adjective",
        "transcription": "\u028cp\u02c8s\u025bt",
        "definitions": [
            {
                "text": "Unhappy, disappointed, or worried.",
                "examples": [
                    "Do not get upset over small things.",
                    "She was upset when she lost her key."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-257",
        "word": "ashamed",
        "emoji": "\ud83d\ude33",
        "form": "adjective",
        "transcription": "\u0259\u02c8\u0283e\u026amd",
        "definitions": [
            {
                "text": "Embarrassed or guilty because of one's actions.",
                "examples": [
                    "He felt ashamed of his rude behavior.",
                    "She was ashamed to admit her mistake."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-258",
        "word": "confident",
        "emoji": "\ud83d\ude0a",
        "form": "adjective",
        "transcription": "\u02c8k\u0251\u02d0nf\u0259d\u0259nt",
        "definitions": [
            {
                "text": "Feeling or showing certainty about something.",
                "examples": [
                    "She felt confident before her speech.",
                    "He is confident in his abilities."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-259",
        "word": "eager",
        "emoji": "\ud83e\udd29",
        "form": "adjective",
        "transcription": "\u02c8i\u02d0\u0261\u0259r",
        "definitions": [
            {
                "text": "Strongly wanting to do or have something.",
                "examples": [
                    "The students were eager to learn.",
                    "He was eager to start his new job."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-260",
        "word": "embarrassed",
        "emoji": "\ud83d\ude33",
        "form": "adjective",
        "transcription": "\u026am\u02c8b\u00e6r\u0259st",
        "definitions": [
            {
                "text": "Feeling awkward, self-conscious, or ashamed.",
                "examples": [
                    "She felt embarrassed when she spilled her drink.",
                    "He got embarrassed in front of class."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-261",
        "word": "enthusiastic",
        "emoji": "\ud83d\ude03",
        "form": "adjective",
        "transcription": "\u026an\u02cc\u03b8u\u02d0zi\u02c8\u00e6st\u026ak",
        "definitions": [
            {
                "text": "Having or showing intense enjoyment or interest.",
                "examples": [
                    "The team gave an enthusiastic response.",
                    "She is enthusiastic about music."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-262",
        "word": "envious",
        "emoji": "\ud83d\ude12",
        "form": "adjective",
        "transcription": "\u02c8\u025bnvi\u0259s",
        "definitions": [
            {
                "text": "Feeling or showing envy toward someone.",
                "examples": [
                    "Do not be envious of others' success.",
                    "She felt envious of her friend's new car."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-263",
        "word": "frightened",
        "emoji": "\ud83d\ude31",
        "form": "adjective",
        "transcription": "\u02c8fra\u026at\u0259nd",
        "definitions": [
            {
                "text": "Afraid or anxious.",
                "examples": [
                    "The loud thunder made the cat frightened.",
                    "She felt frightened in the dark."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-264",
        "word": "grateful",
        "emoji": "\ud83d\ude4f",
        "form": "adjective",
        "transcription": "\u02c8\u0261re\u026atf\u0259l",
        "definitions": [
            {
                "text": "Feeling or showing appreciation for kindness.",
                "examples": [
                    "I am grateful for your help.",
                    "She expressed grateful thanks to her host."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-265",
        "word": "guilty",
        "emoji": "\ud83d\ude14",
        "form": "adjective",
        "transcription": "\u02c8\u0261\u026alti",
        "definitions": [
            {
                "text": "Feeling responsible for a specified wrong.",
                "examples": [
                    "He felt guilty for forgetting her birthday.",
                    "She looked guilty after breaking the vase."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-266",
        "word": "hopeless",
        "emoji": "\ud83d\ude1e",
        "form": "adjective",
        "transcription": "\u02c8ho\u028apl\u0259s",
        "definitions": [
            {
                "text": "Feeling or causing despair.",
                "examples": [
                    "Do not feel hopeless about your progress.",
                    "The situation seemed hopeless."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-267",
        "word": "impatient",
        "emoji": "\ud83d\ude24",
        "form": "adjective",
        "transcription": "\u026am\u02c8pe\u026a\u0283\u0259nt",
        "definitions": [
            {
                "text": "Tendency to be quickly irritated or provoked.",
                "examples": [
                    "He grew impatient waiting for the bus.",
                    "She was impatient to hear the result."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-268",
        "word": "jealous",
        "emoji": "\ud83d\ude12",
        "form": "adjective",
        "transcription": "\u02c8\u02a4\u025bl\u0259s",
        "definitions": [
            {
                "text": "Feeling envious of someone or their achievements.",
                "examples": [
                    "He felt jealous when he saw his rival.",
                    "Try not to be jealous."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-269",
        "word": "miserable",
        "emoji": "\ud83d\ude2d",
        "form": "adjective",
        "transcription": "\u02c8m\u026az\u0259r\u0259b\u0259l",
        "definitions": [
            {
                "text": "Wretchedly unhappy or uncomfortable.",
                "examples": [
                    "The cold rain made everyone feel miserable.",
                    "She felt miserable with a bad cold."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-270",
        "word": "panicked",
        "emoji": "\ud83d\ude31",
        "form": "adjective",
        "transcription": "\u02c8p\u00e6n\u026akt",
        "definitions": [
            {
                "text": "Filled with sudden uncontrollable fear.",
                "examples": [
                    "The panicked crowd ran toward the exit.",
                    "She felt panicked when she lost her passport."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-ADJ-SEL-271",
        "word": "peaceful",
        "emoji": "\ud83d\udd4a\ufe0f",
        "form": "adjective",
        "transcription": "\u02c8pi\u02d0sf\u0259l",
        "definitions": [
            {
                "text": "Free from disturbance; tranquil.",
                "examples": [
                    "The quiet lake was calm and peaceful.",
                    "Enjoy a peaceful evening at home."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Feelings_States"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
