(function() {
    const pronouns = ["I", "you", "he / she / it", "we", "you (plural)", "they"];
    const data = [
        {
            "verb": "to be",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "stative",
            "past_participle": "been",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["am", "are", "is", "are", "are", "are"],
                    "negative": ["am not", "are not", "is not", "are not", "are not", "are not"],
                    "question": ["Am I?", "Are you?", "Is he?", "Are we?", "Are you?", "Are they?"]
                },
                "past_simple": {
                    "positive": ["was", "were", "was", "were", "were", "were"],
                    "negative": ["was not", "were not", "was not", "were not", "were not", "were not"],
                    "question": ["Was I?", "Were you?", "Was he?", "Were we?", "Were you?", "Were they?"]
                }
            }
        },
        {
            "verb": "to have",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "stative",
            "past_participle": "had",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["have", "have", "has", "have", "have", "have"],
                    "negative": ["don't have", "don't have", "doesn't have", "don't have", "don't have", "don't have"],
                    "question": ["Do I have?", "Do you have?", "Does he have?", "Do we have?", "Do you have?", "Do they have?"]
                },
                "past_simple": {
                    "positive": ["had", "had", "had", "had", "had", "had"],
                    "negative": ["didn't have", "didn't have", "didn't have", "didn't have", "didn't have", "didn't have"],
                    "question": ["Did I have?", "Did you have?", "Did he have?", "Did we have?", "Did you have?", "Did they have?"]
                }
            }
        },
        {
            "verb": "to work",
            "group": "regular",
            "classification": "regular",
            "aspect": "action",
            "past_participle": "worked",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["work", "work", "works", "work", "work", "work"],
                    "negative": ["don't work", "don't work", "doesn't work", "don't work", "don't work", "don't work"],
                    "question": ["Do I work?", "Do you work?", "Does he work?", "Do we work?", "Do you work?", "Do they work?"]
                },
                "past_simple": {
                    "positive": ["worked", "worked", "worked", "worked", "worked", "worked"],
                    "negative": ["didn't work", "didn't work", "didn't work", "didn't work", "didn't work", "didn't work"],
                    "question": ["Did I work?", "Did you work?", "Did he work?", "Did we work?", "Did you work?", "Did they work?"]
                }
            }
        }
    ]
    const lang = "en";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
