(function() {
    const lang = "en";
    const data = [
    {
        "id": "C1-VERB-PEO-01",
        "word": "confront",
        "emoji": "🤜",
        "subtext": "confront a problem / confront someone / be confronted with",
        "form": "verb",
        "transcription": "kənˈfrʌnt",
        "definitions": [
            {
                "text": "To face a problem or person directly.",
                "examples": [
                    "She confronted the difficult issue at the board meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "confronted",
        "v3": "confronted",
        "group": "regular",
        "auxiliary": "have",
        "v4": "confronting",
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "C1-PPL-02",
        "level_code": "C1",
        "domain": "People",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Emotional_States"
    },
    {
        "id": "C1-VERB-PEO-02",
        "word": "contemplate",
        "emoji": "🧘",
        "subtext": "contemplate a change / contemplate doing / contemplate the future",
        "form": "verb",
        "transcription": "🇬🇧 ˈkɒntəmpleɪt | 🇺🇸 ˈkɑːntəmpleɪt",
        "definitions": [
            {
                "text": "To think about something carefully; to consider doing it.",
                "examples": [
                    "He is contemplating a complete career change at forty."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "contemplated",
        "v3": "contemplated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "contemplating",
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "C1-PPL-03",
        "level_code": "C1",
        "domain": "People",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Emotional_States"
    },
    {
        "id": "C1-VERB-PEO-03",
        "word": "displace",
        "emoji": "⚗️",
        "subtext": "displace anger / displacement activity / emotionally displaced",
        "form": "verb",
        "transcription": "dɪsˈpleɪs",
        "definitions": [
            {
                "text": "To shift an emotion from its true target to a safer one.",
                "examples": [
                    "He displaced his anger at his employer onto his family."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "displaced",
        "v3": "displaced",
        "group": "regular",
        "auxiliary": "have",
        "v4": "displacing",
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "C1-PPL-05",
        "level_code": "C1",
        "domain": "People",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Emotional_States"
    },
    {
        "id": "C1-VERB-PEO-04",
        "word": "internalise",
        "emoji": "🧠",
        "subtext": "internalise values / internalise criticism / deeply internalised",
        "form": "verb",
        "transcription": "ɪnˈtɜːnəlaɪz",
        "definitions": [
            {
                "text": "To absorb and accept ideas or values as one's own.",
                "examples": [
                    "He internalised the belief that hard work always leads to success."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "internalised",
        "v3": "internalised",
        "group": "regular",
        "auxiliary": "have",
        "v4": "internalising",
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "C1-PPL-10",
        "level_code": "C1",
        "domain": "People",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Emotional_States"
    },
    {
        "id": "C1-VERB-PEO-05",
        "word": "project",
        "emoji": "🎭",
        "subtext": "project feelings onto / project blame / psychological projection",
        "form": "verb",
        "transcription": "prəˈdʒekt",
        "definitions": [
            {
                "text": "To attribute one's own feelings to someone else.",
                "examples": [
                    "She accused him of projecting his own anxieties onto the team."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "projected",
        "v3": "projected",
        "group": "regular",
        "auxiliary": "have",
        "v4": "projecting",
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "C1-PPL-16",
        "level_code": "C1",
        "domain": "People",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Emotional_States"
    },
    {
        "id": "C1-VERB-PEO-06",
        "word": "rationalise",
        "emoji": "🧐",
        "subtext": "rationalise a decision / rationalise behaviour / rationalise fear",
        "form": "verb",
        "transcription": "ˈræʃnəlaɪz",
        "definitions": [
            {
                "text": "To attempt to explain one's behaviour with plausible but false reasons.",
                "examples": [
                    "He rationalised his decision to stay in the bad job as loyalty."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "rationalised",
        "v3": "rationalised",
        "group": "regular",
        "auxiliary": "have",
        "v4": "rationalising",
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "C1-PPL-17",
        "level_code": "C1",
        "domain": "People",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Emotional_States"
    },
    {
        "id": "C1-VERB-PEO-07",
        "word": "repress",
        "emoji": "🧠",
        "subtext": "repress memories / repress desires / psychologically repressed",
        "form": "verb",
        "transcription": "rɪˈpres",
        "definitions": [
            {
                "text": "To prevent thoughts from entering conscious awareness.",
                "examples": [
                    "Freud argued that we repress desires that are socially unacceptable."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "repressed",
        "v3": "repressed",
        "group": "regular",
        "auxiliary": "have",
        "v4": "repressing",
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "C1-PPL-19",
        "level_code": "C1",
        "domain": "People",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Emotional_States"
    },
    {
        "id": "C1-VERB-PEO-08",
        "word": "sublimate",
        "emoji": "⚗️",
        "subtext": "sublimate desires / sublimate aggression / psychological sublimation",
        "form": "verb",
        "transcription": "ˈsʌblɪmeɪt",
        "definitions": [
            {
                "text": "To redirect a desire or impulse into something socially acceptable.",
                "examples": [
                    "Freud argued that art allows us to sublimate aggressive drives."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sublimated",
        "v3": "sublimated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "sublimating",
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "C1-PPL-23",
        "level_code": "C1",
        "domain": "People",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Emotional_States"
    },
    {
        "id": "C1-VERB-PEO-09",
        "word": "suppress",
        "emoji": "🤐",
        "subtext": "suppress emotions / suppress information / hard to suppress",
        "form": "verb",
        "transcription": "səˈpres",
        "definitions": [
            {
                "text": "To consciously prevent a feeling or information from being expressed.",
                "examples": [
                    "She suppressed her frustration and continued the meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "suppressed",
        "v3": "suppressed",
        "group": "regular",
        "auxiliary": "have",
        "v4": "suppressing",
        "lang": "en",
        "level": "advanced",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "C1-PPL-24",
        "level_code": "C1",
        "domain": "People",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Emotional_States"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
