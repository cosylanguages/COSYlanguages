(function() {
    const lang = "en";
    const pronouns = [
        "I",
        "you",
        "he",
        "she",
        "it",
        "we",
        "they"
    ];

    const data = [
        {
            "id": "en_elementary_language_001",
            "verb": "to be",
            "past_participle": "been",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["am", "are", "is", "is", "is", "are", "are"],
                    "negative": ["am not", "are not", "is not", "is not", "is not", "are not", "are not"],
                    "question": ["Am I", "Are you", "Is he", "Is she", "Is it", "Are we", "Are they"]
                },
                "present_continuous": {
                    "positive": ["am being", "are being", "is being", "is being", "is being", "are being", "are being"],
                    "negative": ["am not being", "are not being", "is not being", "is not being", "is not being", "are not being", "are not being"],
                    "question": ["Am I being", "Are you being", "Is he being", "Is she being", "Is it being", "Are we being", "Are they being"]
                },
                "past_simple": {
                    "positive": ["was", "were", "was", "was", "was", "were", "were"],
                    "negative": ["was not", "were not", "was not", "was not", "was not", "were not", "were not"],
                    "question": ["Was I", "Were you", "Was he", "Was she", "Was it", "Were we", "Were they"]
                },
                "past_continuous": {
                    "positive": ["was being", "were being", "was being", "was being", "was being", "were being", "were being"],
                    "negative": ["was not being", "were not being", "was not being", "was not being", "was not being", "were not being", "were not being"],
                    "question": ["Was I being", "Were you being", "Was he being", "Was she being", "Was it being", "Were we being", "Were they being"]
                },
                "present_perfect": {
                    "positive": ["have been", "have been", "has been", "has been", "has been", "have been", "have been"],
                    "negative": ["haven't been", "haven't been", "hasn't been", "hasn't been", "hasn't been", "haven't been", "haven't been"],
                    "question": ["Have I been", "Have you been", "Has he been", "Has she been", "Has it been", "Have we been", "Have they been"]
                },
                "future_simple": {
                    "positive": ["will be", "will be", "will be", "will be", "will be", "will be", "will be"],
                    "negative": ["won't be", "won't be", "won't be", "won't be", "won't be", "won't be", "won't be"],
                    "question": ["Will I be", "Will you be", "Will he be", "Will she be", "Will it be", "Will we be", "Will they be"]
                },
                "going_to": {
                    "positive": ["am going to be", "are going to be", "is going to be", "is going to be", "is going to be", "are going to be", "are going to be"],
                    "negative": ["am not going to be", "are not going to be", "is not going to be", "is not going to be", "is not going to be", "are not going to be", "are not going to be"],
                    "question": ["Am I going to be", "Are you going to be", "Is he going to be", "Is she going to be", "Is it going to be", "Are we going to be", "Are they going to be"]
                }
            },
            "classification": "irregular",
            "aspect": "stative",
            "v2": "was/were",
            "v3": "been",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "word": "to be",
            "form": "verb",
            "definitions": [
                {
                    "text": "Exist or live; describe state or identity in Elementary A2 context.",
                    "examples": ["I have been to London twice.", "They were being quiet."]
                }
            ],
            "transcription": "biː",
            "emoji": "✨"
        },
        {
            "id": "en_elementary_language_002",
            "verb": "to have",
            "past_participle": "had",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["have", "have", "has", "has", "has", "have", "have"],
                    "negative": ["don't have", "don't have", "doesn't have", "doesn't have", "doesn't have", "don't have", "don't have"],
                    "question": ["Do I have", "Do you have", "Does he have", "Does she have", "Does it have", "Do we have", "Do they have"]
                },
                "present_continuous": {
                    "positive": ["am having", "are having", "is having", "is having", "is having", "are having", "are having"],
                    "negative": ["am not having", "are not having", "is not having", "is not having", "is not having", "are not having", "are not having"],
                    "question": ["Am I having", "Are you having", "Is he having", "Is she having", "Is it having", "Are we having", "Are they having"]
                },
                "past_simple": {
                    "positive": ["had", "had", "had", "had", "had", "had", "had"],
                    "negative": ["didn't have", "didn't have", "didn't have", "didn't have", "didn't have", "didn't have", "didn't have"],
                    "question": ["Did I have", "Did you have", "Did he have", "Did she have", "Did it have", "Did we have", "Did they have"]
                },
                "past_continuous": {
                    "positive": ["was having", "were having", "was having", "was having", "was having", "were having", "were having"],
                    "negative": ["was not having", "were not having", "was not having", "was not having", "was not having", "were not having", "were not having"],
                    "question": ["Was I having", "Were you having", "Was he having", "Was she having", "Was it having", "Were we having", "Were they having"]
                },
                "present_perfect": {
                    "positive": ["have had", "have had", "has had", "has had", "has had", "have had", "have had"],
                    "negative": ["haven't had", "haven't had", "hasn't had", "hasn't had", "hasn't had", "haven't had", "haven't had"],
                    "question": ["Have I had", "Have you had", "Has he had", "Has she had", "Has it had", "Have we had", "Have they had"]
                },
                "modal_obligation": {
                    "positive": ["have to", "have to", "has to", "has to", "has to", "have to", "have to"],
                    "negative": ["don't have to", "don't have to", "doesn't have to", "doesn't have to", "doesn't have to", "don't have to", "don't have to"],
                    "question": ["Do I have to", "Do you have to", "Does he have to", "Does she have to", "Does it have to", "Do we have to", "Do they have to"]
                },
                "going_to": {
                    "positive": ["am going to have", "are going to have", "is going to have", "is going to have", "is going to have", "are going to have", "are going to have"],
                    "negative": ["am not going to have", "are not going to have", "is not going to have", "is not going to have", "is not going to have", "are not going to have", "are not going to have"],
                    "question": ["Am I going to have", "Are you going to have", "Is he going to have", "Is she going to have", "Is it going to have", "Are we going to have", "Are they going to have"]
                }
            },
            "classification": "irregular",
            "aspect": "stative",
            "v2": "had",
            "v3": "had",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "word": "to have",
            "form": "verb",
            "definitions": [
                {
                    "text": "Possess, experience, or express obligation (have to).",
                    "examples": ["I have had this car for three years.", "You don't have to work on Sunday."]
                }
            ],
            "transcription": "hæv",
            "emoji": "🛄"
        },
        {
            "id": "en_elementary_language_003",
            "verb": "to work",
            "past_participle": "worked",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["work", "work", "works", "works", "works", "work", "work"],
                    "negative": ["don't work", "don't work", "doesn't work", "doesn't work", "doesn't work", "don't work", "don't work"],
                    "question": ["Do I work", "Do you work", "Does he work", "Does she work", "Does it work", "Do we work", "Do they work"]
                },
                "present_continuous": {
                    "positive": ["am working", "are working", "is working", "is working", "is working", "are working", "are working"],
                    "negative": ["am not working", "are not working", "is not working", "is not working", "is not working", "are not working", "are not working"],
                    "question": ["Am I working", "Are you working", "Is he working", "Is she working", "Is it working", "Are we working", "Are they working"]
                },
                "past_simple": {
                    "positive": ["worked", "worked", "worked", "worked", "worked", "worked", "worked"],
                    "negative": ["didn't work", "didn't work", "didn't work", "didn't work", "didn't work", "didn't work", "didn't work"],
                    "question": ["Did I work", "Did you work", "Did he work", "Did she work", "Did it work", "Did we work", "Did they work"]
                },
                "past_continuous": {
                    "positive": ["was working", "were working", "was working", "was working", "was working", "were working", "were working"],
                    "negative": ["was not working", "were not working", "was not working", "was not working", "was not working", "were not working", "were not working"],
                    "question": ["Was I working", "Were you working", "Was he working", "Was she working", "Was it working", "Were we working", "Were they working"]
                },
                "present_perfect": {
                    "positive": ["have worked", "have worked", "has worked", "has worked", "has worked", "have worked", "have worked"],
                    "negative": ["haven't worked", "haven't worked", "hasn't worked", "hasn't worked", "hasn't worked", "haven't worked", "haven't worked"],
                    "question": ["Have I worked", "Have you worked", "Has he worked", "Has she worked", "Has it worked", "Have we worked", "Have they worked"]
                },
                "going_to": {
                    "positive": ["am going to work", "are going to work", "is going to work", "is going to work", "is going to work", "are going to work", "are going to work"],
                    "negative": ["am not going to work", "are not going to work", "is not going to work", "is not going to work", "is not going to work", "are not going to work", "are not going to work"],
                    "question": ["Am I going to work", "Are you going to work", "Is he going to work", "Is she going to work", "Is it going to work", "Are we going to work", "Are they going to work"]
                }
            },
            "classification": "regular",
            "aspect": "action",
            "v2": "worked",
            "v3": "worked",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "word": "to work",
            "form": "verb",
            "definitions": [
                {
                    "text": "Perform labor, execute job tasks.",
                    "examples": ["I was working when you called.", "She has worked here since 2020."]
                }
            ],
            "transcription": "wɜːk",
            "emoji": "💼"
        },
        {
            "id": "en_elementary_language_004",
            "verb": "to go",
            "past_participle": "gone",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["go", "go", "goes", "goes", "goes", "go", "go"],
                    "negative": ["don't go", "don't go", "doesn't go", "doesn't go", "doesn't go", "don't go", "don't go"],
                    "question": ["Do I go", "Do you go", "Does he go", "Does she go", "Does it go", "Do we go", "Do they go"]
                },
                "present_continuous": {
                    "positive": ["am going", "are going", "is going", "is going", "is going", "are going", "are going"],
                    "negative": ["am not going", "are not going", "is not going", "is not going", "is not going", "are not going", "are not going"],
                    "question": ["Am I going", "Are you going", "Is he going", "Is she going", "Is it going", "Are we going", "Are they going"]
                },
                "past_simple": {
                    "positive": ["went", "went", "went", "went", "went", "went", "went"],
                    "negative": ["didn't go", "didn't go", "didn't go", "didn't go", "didn't go", "didn't go", "didn't go"],
                    "question": ["Did I go", "Did you go", "Did he go", "Did she go", "Did it go", "Did we go", "Did they go"]
                },
                "past_continuous": {
                    "positive": ["was going", "were going", "was going", "was going", "was going", "were going", "were going"],
                    "negative": ["was not going", "were not going", "was not going", "was not going", "was not going", "were not going", "were not going"],
                    "question": ["Was I going", "Were you going", "Was he going", "Was she going", "Was it going", "Were we going", "Were they going"]
                },
                "present_perfect": {
                    "positive": ["have gone", "have gone", "has gone", "has gone", "has gone", "have gone", "have gone"],
                    "negative": ["haven't gone", "haven't gone", "hasn't gone", "hasn't gone", "hasn't gone", "haven't gone", "haven't gone"],
                    "question": ["Have I gone", "Have you gone", "Has he gone", "Has she gone", "Has it gone", "Have we gone", "Have they gone"]
                },
                "going_to": {
                    "positive": ["am going to go", "are going to go", "is going to go", "is going to go", "is going to go", "are going to go", "are going to go"],
                    "negative": ["am not going to go", "are not going to go", "is not going to go", "is not going to go", "is not going to go", "are not going to go", "are not going to go"],
                    "question": ["Am I going to go", "Are you going to go", "Is he going to go", "Is she going to go", "Is it going to go", "Are we going to go", "Are they going to go"]
                }
            },
            "classification": "irregular",
            "aspect": "action",
            "v2": "went",
            "v3": "gone",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "word": "to go",
            "form": "verb",
            "definitions": [
                {
                    "text": "Move or travel from one place to another.",
                    "examples": ["Where were you going at 8 PM?", "He has gone to Spain on holiday."]
                }
            ],
            "transcription": "ɡəʊ",
            "emoji": "🏃"
        },
        {
            "id": "en_elementary_language_005",
            "verb": "to study",
            "past_participle": "studied",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["study", "study", "studies", "studies", "studies", "study", "study"],
                    "negative": ["don't study", "don't study", "doesn't study", "doesn't study", "doesn't study", "don't study", "don't study"],
                    "question": ["Do I study", "Do you study", "Does he study", "Does she study", "Does it study", "Do we study", "Do they study"]
                },
                "present_continuous": {
                    "positive": ["am studying", "are studying", "is studying", "is studying", "is studying", "are studying", "are studying"],
                    "negative": ["am not studying", "are not studying", "is not studying", "is not studying", "is not studying", "are not studying", "are not studying"],
                    "question": ["Am I studying", "Are you studying", "Is he studying", "Is she studying", "Is it studying", "Are we studying", "Are they studying"]
                },
                "past_simple": {
                    "positive": ["studied", "studied", "studied", "studied", "studied", "studied", "studied"],
                    "negative": ["didn't study", "didn't study", "didn't study", "didn't study", "didn't study", "didn't study", "didn't study"],
                    "question": ["Did I study", "Did you study", "Did he study", "Did she study", "Did it study", "Did we study", "Did they study"]
                },
                "past_continuous": {
                    "positive": ["was studying", "were studying", "was studying", "was studying", "was studying", "were studying", "were studying"],
                    "negative": ["was not studying", "were not studying", "was not studying", "was not studying", "was not studying", "were not studying", "were not studying"],
                    "question": ["Was I studying", "Were you studying", "Was he studying", "Was she studying", "Was it studying", "Were we studying", "Were they studying"]
                },
                "present_perfect": {
                    "positive": ["have studied", "have studied", "has studied", "has studied", "has studied", "have studied", "have studied"],
                    "negative": ["haven't studied", "haven't studied", "hasn't studied", "hasn't studied", "hasn't studied", "haven't studied", "haven't studied"],
                    "question": ["Have I studied", "Have you studied", "Has he studied", "Has she studied", "Has it studied", "Have we studied", "Have they studied"]
                },
                "going_to": {
                    "positive": ["am going to study", "are going to study", "is going to study", "is going to study", "is going to study", "are going to study", "are going to study"],
                    "negative": ["am not going to study", "are not going to study", "is not going to study", "is not going to study", "is not going to study", "are not going to study", "are not going to study"],
                    "question": ["Am I going to study", "Are you going to study", "Is he going to study", "Is she going to study", "Is it going to study", "Are we going to study", "Are they going to study"]
                }
            },
            "classification": "regular",
            "aspect": "action",
            "v2": "studied",
            "v3": "studied",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "word": "to study",
            "form": "verb",
            "definitions": [
                {
                    "text": "Spend time learning a subject.",
                    "examples": ["I have studied English for two years.", "Are you going to study tonight?"]
                }
            ],
            "transcription": "ˈstʌdi",
            "emoji": "📚"
        },
        {
            "id": "en_elementary_language_006",
            "verb": "to see",
            "past_participle": "seen",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["see", "see", "sees", "sees", "sees", "see", "see"],
                    "negative": ["don't see", "don't see", "doesn't see", "doesn't see", "doesn't see", "don't see", "don't see"],
                    "question": ["Do I see", "Do you see", "Does he see", "Does she see", "Does it see", "Do we see", "Do they see"]
                },
                "past_simple": {
                    "positive": ["saw", "saw", "saw", "saw", "saw", "saw", "saw"],
                    "negative": ["didn't see", "didn't see", "didn't see", "didn't see", "didn't see", "didn't see", "didn't see"],
                    "question": ["Did I see", "Did you see", "Did he see", "Did she see", "Did it see", "Did we see", "Did they see"]
                },
                "present_perfect": {
                    "positive": ["have seen", "have seen", "has seen", "has seen", "has seen", "have seen", "have seen"],
                    "negative": ["haven't seen", "haven't seen", "hasn't seen", "hasn't seen", "hasn't seen", "haven't seen", "haven't seen"],
                    "question": ["Have I seen", "Have you seen", "Has he seen", "Has she seen", "Has it seen", "Have we seen", "Have they seen"]
                },
                "going_to": {
                    "positive": ["am going to see", "are going to see", "is going to see", "is going to see", "is going to see", "are going to see", "are going to see"],
                    "negative": ["am not going to see", "are not going to see", "is not going to see", "is not going to see", "is not going to see", "are not going to see", "are not going to see"],
                    "question": ["Am I going to see", "Are you going to see", "Is he going to see", "Is she going to see", "Is it going to see", "Are we going to see", "Are they going to see"]
                }
            },
            "classification": "irregular",
            "aspect": "stative",
            "v2": "saw",
            "v3": "seen",
            "lang": "en",
            "level": "elementary",
            "theme": "language",
            "sub_theme": null,
            "word": "to see",
            "form": "verb",
            "definitions": [
                {
                    "text": "Perceive with eyes or experience.",
                    "examples": ["Have you ever seen a movie in English?", "I saw him yesterday."]
                }
            ],
            "transcription": "siː",
            "emoji": "👁️"
        }
    ];

    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
