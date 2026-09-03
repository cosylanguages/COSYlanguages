(function() {
    const lang = "en";
    const data = [
    {
            "id": "A2-NOUN-TIM-040",
            "word": "duration",
            "emoji": "⏱️",
            "form": "noun",
            "definitions": [
                    {
                            "text": "The length of time that something continues.",
                            "examples": [
                                    "The duration of the concert was two hours.",
                                    "Parking is restricted for the duration of the event."
                            ]
                    }
            ],
            "subtext": "length, span",
            "synonyms": [
                    "length",
                    "span"
            ],
            "transcription": "djuˈreɪʃn",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "time",
            "domain": "TIME_NUMBERS",
            "subcategory": "Time",
            "pos_section": "Nouns",
            "sub_subcategory": "Clocks_Periods"
    },
    {
            "id": "A2-NOUN-TIM-041",
            "word": "interval",
            "emoji": "⏸️",
            "form": "noun",
            "definitions": [
                    {
                            "text": "A pause or break between two events or parts.",
                            "examples": [
                                    "There is a twenty-minute interval in the play.",
                                    "Trains run at regular intervals."
                            ]
                    }
            ],
            "subtext": "break, pause",
            "synonyms": [
                    "break",
                    "pause"
            ],
            "transcription": "ˈɪntəvl",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "time",
            "domain": "TIME_NUMBERS",
            "subcategory": "Time",
            "pos_section": "Nouns",
            "sub_subcategory": "Clocks_Periods"
    },
    {
            "id": "A2-NOUN-TIM-058",
            "word": "gradualness",
            "emoji": "⏳",
            "form": "noun",
            "definitions": [
                    {
                            "text": "The quality of happening slowly over time.",
                            "examples": [
                                    "The gradualness of climate change makes it hard to notice.",
                                    "Improvement came with steady gradualness."
                            ]
                    }
            ],
            "subtext": "slow pace",
            "synonyms": [
                    "slow pace"
            ],
            "transcription": "ˈɡrædʒuəlnəs",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "time",
            "domain": "TIME_NUMBERS",
            "subcategory": "Time",
            "pos_section": "Nouns",
            "sub_subcategory": "Clocks_Periods"
    },
    {
            "id": "A2-NOUN-TIM-061",
            "word": "hour",
            "emoji": "⏰",
            "form": "noun",
            "definitions": [
                    {
                            "text": "A period of time equal to sixty minutes.",
                            "examples": [
                                    "The flight takes one hour and thirty minutes.",
                                    "Peak rush hour traffic starts at five."
                            ]
                    }
            ],
            "subtext": "sixty minutes",
            "synonyms": [
                    "sixty minutes"
            ],
            "transcription": "ˈaʊə",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "time",
            "domain": "TIME_NUMBERS",
            "subcategory": "Time",
            "pos_section": "Nouns",
            "sub_subcategory": "Clocks_Periods"
    }
    ];

    if (typeof window !== 'undefined') {
        window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData.en = (window.vocabularyData.en || []).concat(data);
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = data;
    }
})();
