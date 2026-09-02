(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-COM-01",
        "word": "band",
        "emoji": "🎸",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "bands",
        "definitions": [
            {
                "text": "A group of people who play music together.",
                "examples": [
                    "He plays in a rock band."
                ]
            }
        ],
        "subtext": "related to music",
        "transcription": "bænd",
        "lang": "en",
        "level": "starter",
        "theme": "music",
        "sub_theme": null,
        "legacy_id": "A1-COMM-06",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Music_Instruments_Genres"
    },
    {
        "id": "A1-NOUN-COM-02",
        "word": "concert",
        "emoji": "🎵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "concerts",
        "definitions": [
            {
                "text": "A performance of music by one or more musicians or singers.",
                "examples": [
                    "Are you going to the concert tonight?"
                ]
            }
        ],
        "subtext": "related to music",
        "transcription": "ˈkɑnsərt",
        "lang": "en",
        "level": "starter",
        "theme": "music",
        "sub_theme": null,
        "legacy_id": "A1-COMM-14",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Music_Instruments_Genres"
    },
    {
        "id": "A1-NOUN-COM-03",
        "word": "drums",
        "emoji": "🥁",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "A set of musical instruments that you hit with sticks.",
                "examples": [
                    "She plays the drums in a band."
                ]
            }
        ],
        "subtext": "related to musical instruments",
        "transcription": "drəmz",
        "lang": "en",
        "level": "starter",
        "theme": "music",
        "sub_theme": null,
        "legacy_id": "A1-COMM-18",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Music_Instruments_Genres"
    },
    {
        "id": "A1-NOUN-COM-04",
        "word": "flute",
        "emoji": "🪈",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "flutes",
        "definitions": [
            {
                "text": "A musical instrument in the shape of a pipe with holes that you blow across.",
                "examples": [
                    "She is playing the flute."
                ]
            }
        ],
        "subtext": "related to musical instruments",
        "transcription": "flut",
        "lang": "en",
        "level": "starter",
        "theme": "music",
        "sub_theme": null,
        "legacy_id": "A1-COMM-21",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Music_Instruments_Genres"
    },
    {
        "id": "A1-NOUN-COM-05",
        "word": "guitar",
        "emoji": "🎸",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "guitars",
        "definitions": [
            {
                "text": "A musical instrument with strings that you play with your fingers.",
                "examples": [
                    "He plays the guitar."
                ]
            }
        ],
        "subtext": "related to music",
        "transcription": "gɪˈtɑr",
        "lang": "en",
        "level": "starter",
        "theme": "music",
        "sub_theme": null,
        "legacy_id": "A1-COMM-26",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Music_Instruments_Genres"
    },
    {
        "id": "A1-NOUN-COM-06",
        "word": "music",
        "emoji": "🎵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "The sound of people singing or playing instruments.",
                "examples": [
                    "I like listening to music."
                ]
            }
        ],
        "subtext": "related to music",
        "transcription": "mˈjuzɪk",
        "lang": "en",
        "level": "starter",
        "theme": "music",
        "sub_theme": null,
        "legacy_id": "A1-COMM-39",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Music_Instruments_Genres"
    },
    {
        "id": "A1-NOUN-COM-07",
        "word": "piano",
        "emoji": "🎹",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pianos",
        "definitions": [
            {
                "text": "A large musical instrument with a row of black and white keys.",
                "examples": [
                    "She is learning to play the piano."
                ]
            }
        ],
        "subtext": "related to music",
        "transcription": "piˈænə",
        "lang": "en",
        "level": "starter",
        "theme": "music",
        "sub_theme": null,
        "legacy_id": "A1-COMM-41",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Music_Instruments_Genres"
    },
    {
        "id": "A1-NOUN-COM-08",
        "word": "song",
        "emoji": "🎶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "songs",
        "definitions": [
            {
                "text": "A short piece of music with words that you sing.",
                "examples": [
                    "This is a beautiful song."
                ]
            }
        ],
        "subtext": "related to music",
        "transcription": "sɔŋ",
        "lang": "en",
        "level": "starter",
        "theme": "music",
        "sub_theme": null,
        "legacy_id": "A1-COMM-57",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Music_Instruments_Genres"
    },
    {
        "id": "A1-NOUN-COM-09",
        "word": "violin",
        "emoji": "🎻",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "violins",
        "definitions": [
            {
                "text": "A musical instrument with four strings that you hold under your chin and play with a bow.",
                "examples": [
                    "He plays the violin."
                ]
            }
        ],
        "subtext": "related to musical instruments",
        "transcription": "vaɪəˈlɪn",
        "lang": "en",
        "level": "starter",
        "theme": "music",
        "sub_theme": null,
        "legacy_id": "A1-COMM-66",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Music_Instruments_Genres"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
