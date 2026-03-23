(function() {
    const pronouns = [
        "I",
        "you",
        "he",
        "she",
        "it",
        "we",
        "they"
    ];
    const tenses = {
        "present_simple": {
            "positive": [
                "am",
                "are",
                "is",
                "is",
                "is",
                "are",
                "are"
            ],
            "negative": [
                "am not",
                "are not",
                "is not",
                "is not",
                "is not",
                "are not",
                "are not"
            ],
            "question": [
                "Am I",
                "Are you",
                "Is he",
                "Is she",
                "Is it",
                "Are we",
                "Are they"
            ]
        },
        "past_simple": {
            "positive": [
                "was",
                "were",
                "was",
                "was",
                "was",
                "were",
                "were"
            ],
            "negative": [
                "was not",
                "were not",
                "was not",
                "was not",
                "was not",
                "were not",
                "were not"
            ],
            "question": [
                "Was I",
                "Were you",
                "Was he",
                "Was she",
                "Was it",
                "Were we",
                "Were they"
            ]
        },
        "future_simple": {
            "positive": [
                "will be",
                "will be",
                "will be",
                "will be",
                "will be",
                "will be",
                "will be"
            ],
            "negative": [
                "won't be",
                "won't be",
                "won't be",
                "won't be",
                "won't be",
                "won't be",
                "won't be"
            ],
            "question": [
                "Will I be",
                "Will you be",
                "Will he be",
                "Will she be",
                "Will it be",
                "Will we be",
                "Will they be"
            ]
        }
    };

    const have_tenses = {
        "present_simple": {
            "positive": [
                "have",
                "have",
                "has",
                "has",
                "has",
                "have",
                "have"
            ],
            "negative": [
                "don't have",
                "don't have",
                "doesn't have",
                "doesn't have",
                "doesn't have",
                "don't have",
                "don't have"
            ],
            "question": [
                "Do I have",
                "Do you have",
                "Does he have",
                "Does she have",
                "Does it have",
                "Do we have",
                "Do they have"
            ]
        },
        "past_simple": {
            "positive": [
                "had",
                "had",
                "had",
                "had",
                "had",
                "had",
                "had"
            ],
            "negative": [
                "didn't have",
                "didn't have",
                "didn't have",
                "didn't have",
                "didn't have",
                "didn't have",
                "didn't have"
            ],
            "question": [
                "Did I have",
                "Did you have",
                "Did he have",
                "Did she have",
                "Did it have",
                "Did we have",
                "Did they have"
            ]
        },
        "future_simple": {
            "positive": [
                "will have",
                "will have",
                "will have",
                "will have",
                "will have",
                "will have",
                "will have"
            ],
            "negative": [
                "won't have",
                "won't have",
                "won't have",
                "won't have",
                "won't have",
                "won't have",
                "won't have"
            ],
            "question": [
                "Will I have",
                "Will you have",
                "Will he have",
                "Will she have",
                "Will it have",
                "Will we have",
                "Will they have"
            ]
        }
    };

    const work_tenses = {
        "present_simple": {
            "positive": [
                "work",
                "work",
                "works",
                "works",
                "works",
                "work",
                "work"
            ],
            "negative": [
                "don't work",
                "don't work",
                "doesn't work",
                "doesn't work",
                "doesn't work",
                "don't work",
                "don't work"
            ],
            "question": [
                "Do I work",
                "Do you work",
                "Does he work",
                "Does she work",
                "Does it work",
                "Do we work",
                "Do they work"
            ]
        },
        "past_simple": {
            "positive": [
                "worked",
                "worked",
                "worked",
                "worked",
                "worked",
                "worked",
                "worked"
            ],
            "negative": [
                "didn't work",
                "didn't work",
                "didn't work",
                "didn't work",
                "didn't work",
                "didn't work",
                "didn't work"
            ],
            "question": [
                "Did I work",
                "Did you work",
                "Did he work",
                "Did she work",
                "Did it work",
                "Did we work",
                "Did they work"
            ]
        },
        "future_simple": {
            "positive": [
                "will work",
                "will work",
                "will work",
                "will work",
                "will work",
                "will work",
                "will work"
            ],
            "negative": [
                "won't work",
                "won't work",
                "won't work",
                "won't work",
                "won't work",
                "won't work",
                "won't work"
            ],
            "question": [
                "Will I work",
                "Will you work",
                "Will he work",
                "Will she work",
                "Will it work",
                "Will we work",
                "Will they work"
            ]
        }
    };

    const do_tenses = {
        "present_simple": {
            "positive": [
                "do",
                "do",
                "does",
                "does",
                "does",
                "do",
                "do"
            ],
            "negative": [
                "don't do",
                "don't do",
                "doesn't do",
                "doesn't do",
                "doesn't do",
                "don't do",
                "don't do"
            ],
            "question": [
                "Do I do",
                "Do you do",
                "Does he do",
                "Does she do",
                "Does it do",
                "Do we do",
                "Do they do"
            ]
        },
        "past_simple": {
            "positive": [
                "did",
                "did",
                "did",
                "did",
                "did",
                "did",
                "did"
            ],
            "negative": [
                "didn't do",
                "didn't do",
                "didn't do",
                "didn't do",
                "didn't do",
                "didn't do",
                "didn't do"
            ],
            "question": [
                "Did I do",
                "Did you do",
                "Did he do",
                "Did she do",
                "Did it do",
                "Did we do",
                "Did they do"
            ]
        },
        "future_simple": {
            "positive": [
                "will do",
                "will do",
                "will do",
                "will do",
                "will do",
                "will do",
                "will do"
            ],
            "negative": [
                "won't do",
                "won't do",
                "won't do",
                "won't do",
                "won't do",
                "won't do",
                "won't do"
            ],
            "question": [
                "Will I do",
                "Will you do",
                "Will he do",
                "Will she do",
                "Will it do",
                "Will we do",
                "Will they do"
            ]
        }
    };

    const go_tenses = {
        "present_simple": {
            "positive": [
                "go",
                "go",
                "goes",
                "goes",
                "goes",
                "go",
                "go"
            ],
            "negative": [
                "don't go",
                "don't go",
                "doesn't go",
                "doesn't go",
                "doesn't go",
                "don't go",
                "don't go"
            ],
            "question": [
                "Do I go",
                "Do you go",
                "Does he go",
                "Does she go",
                "Does it go",
                "Do we go",
                "Do they go"
            ]
        },
        "past_simple": {
            "positive": [
                "went",
                "went",
                "went",
                "went",
                "went",
                "went",
                "went"
            ],
            "negative": [
                "didn't go",
                "didn't go",
                "didn't go",
                "didn't go",
                "didn't go",
                "didn't go",
                "didn't go"
            ],
            "question": [
                "Did I go",
                "Did you go",
                "Did he go",
                "Did she go",
                "Did it go",
                "Did we go",
                "Did they go"
            ]
        },
        "future_simple": {
            "positive": [
                "will go",
                "will go",
                "will go",
                "will go",
                "will go",
                "will go",
                "will go"
            ],
            "negative": [
                "won't go",
                "won't go",
                "won't go",
                "won't go",
                "won't go",
                "won't go",
                "won't go"
            ],
            "question": [
                "Will I go",
                "Will you go",
                "Will he go",
                "Will she go",
                "Will it go",
                "Will we go",
                "Will they go"
            ]
        }
    };

    const eat_tenses = {
        "present_simple": {
            "positive": [
                "eat",
                "eat",
                "eats",
                "eats",
                "eats",
                "eat",
                "eat"
            ],
            "negative": [
                "don't eat",
                "don't eat",
                "doesn't eat",
                "doesn't eat",
                "doesn't eat",
                "don't eat",
                "don't eat"
            ],
            "question": [
                "Do I eat",
                "Do you eat",
                "Does he eat",
                "Does she eat",
                "Does it eat",
                "Do we eat",
                "Do they eat"
            ]
        },
        "past_simple": {
            "positive": [
                "ate",
                "ate",
                "ate",
                "ate",
                "ate",
                "ate",
                "ate"
            ],
            "negative": [
                "didn't eat",
                "didn't eat",
                "didn't eat",
                "didn't eat",
                "didn't eat",
                "didn't eat",
                "didn't eat"
            ],
            "question": [
                "Did I eat",
                "Did you eat",
                "Did he eat",
                "Did she eat",
                "Did it eat",
                "Did we eat",
                "Did they eat"
            ]
        },
        "future_simple": {
            "positive": [
                "will eat",
                "will eat",
                "will eat",
                "will eat",
                "will eat",
                "will eat",
                "will eat"
            ],
            "negative": [
                "won't eat",
                "won't eat",
                "won't eat",
                "won't eat",
                "won't eat",
                "won't eat",
                "won't eat"
            ],
            "question": [
                "Will I eat",
                "Will you eat",
                "Will he eat",
                "Will she eat",
                "Will it eat",
                "Will we eat",
                "Will they eat"
            ]
        }
    };

    const speak_tenses = {
        "present_simple": {
            "positive": [
                "speak",
                "speak",
                "speaks",
                "speaks",
                "speaks",
                "speak",
                "speak"
            ],
            "negative": [
                "don't speak",
                "don't speak",
                "doesn't speak",
                "doesn't speak",
                "doesn't speak",
                "don't speak",
                "don't speak"
            ],
            "question": [
                "Do I speak",
                "Do you speak",
                "Does he speak",
                "Does she speak",
                "Does it speak",
                "Do we speak",
                "Do they speak"
            ]
        },
        "past_simple": {
            "positive": [
                "spoke",
                "spoke",
                "spoke",
                "spoke",
                "spoke",
                "spoke",
                "spoke"
            ],
            "negative": [
                "didn't speak",
                "didn't speak",
                "didn't speak",
                "didn't speak",
                "didn't speak",
                "didn't speak",
                "didn't speak"
            ],
            "question": [
                "Did I speak",
                "Did you speak",
                "Did he speak",
                "Did she speak",
                "Did it speak",
                "Did we speak",
                "Did they speak"
            ]
        },
        "future_simple": {
            "positive": [
                "will speak",
                "will speak",
                "will speak",
                "will speak",
                "will speak",
                "will speak",
                "will speak"
            ],
            "negative": [
                "won't speak",
                "won't speak",
                "won't speak",
                "won't speak",
                "won't speak",
                "won't speak",
                "won't speak"
            ],
            "question": [
                "Will I speak",
                "Will you speak",
                "Will he speak",
                "Will she speak",
                "Will it speak",
                "Will we speak",
                "Will they speak"
            ]
        }
    };

    const data = [
        { "verb": "to be", "level": "starter", "past_participle": "been", "pronouns": pronouns, "tenses": tenses },
        { "verb": "to be", "level": "elementary", "past_participle": "been", "pronouns": pronouns, "tenses": tenses },
        { "verb": "to have", "level": "starter", "past_participle": "had", "pronouns": pronouns, "tenses": have_tenses },
        { "verb": "to have", "level": "elementary", "past_participle": "had", "pronouns": pronouns, "tenses": have_tenses },
        { "verb": "to work", "level": "starter", "past_participle": "worked", "pronouns": pronouns, "tenses": work_tenses },
        { "verb": "to work", "level": "elementary", "past_participle": "worked", "pronouns": pronouns, "tenses": work_tenses },
        { "verb": "to do", "level": "starter", "past_participle": "done", "pronouns": pronouns, "tenses": do_tenses },
        { "verb": "to do", "level": "elementary", "past_participle": "done", "pronouns": pronouns, "tenses": do_tenses },
        { "verb": "to go", "level": "starter", "past_participle": "gone", "pronouns": pronouns, "tenses": go_tenses },
        { "verb": "to go", "level": "elementary", "past_participle": "gone", "pronouns": pronouns, "tenses": go_tenses },
        { "verb": "to eat", "level": "starter", "past_participle": "eaten", "pronouns": pronouns, "tenses": eat_tenses },
        { "verb": "to eat", "level": "elementary", "past_participle": "eaten", "pronouns": pronouns, "tenses": eat_tenses },
        { "verb": "to speak", "level": "starter", "past_participle": "spoken", "pronouns": pronouns, "tenses": speak_tenses },
        { "verb": "to speak", "level": "elementary", "past_participle": "spoken", "pronouns": pronouns, "tenses": speak_tenses }
    ];
    const lang = "en";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
