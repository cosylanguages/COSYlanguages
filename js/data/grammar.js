const grammarData = {
    "en": [
        {
            "verb": "to be",
            "level": "starter",
            "pronouns": ["I", "you", "he", "she", "it", "we", "they"],
            "tenses": {
                "present_simple": {
                    "positive": ["am", "are", "is", "is", "is", "are", "are"],
                    "negative": ["am not", "are not", "is not", "is not", "is not", "are not", "are not"],
                    "question": ["Am I", "Are you", "Is he", "Is she", "Is it", "Are we", "Are they"]
                },
                "past_simple": {
                    "positive": ["was", "were", "was", "was", "was", "were", "were"],
                    "negative": ["was not", "were not", "was not", "was not", "was not", "were not", "were not"],
                    "question": ["Was I", "Were you", "Was he", "Was she", "Was it", "Were we", "Were they"]
                }
            }
        },
        {
            "verb": "to work",
            "level": "starter",
            "pronouns": ["I", "you", "he", "she", "it", "we", "they"],
            "tenses": {
                "present_simple": {
                    "positive": ["work", "work", "works", "works", "works", "work", "work"],
                    "negative": ["don't work", "don't work", "doesn't work", "doesn't work", "doesn't work", "don't work", "don't work"],
                    "question": ["Do I work", "Do you work", "Does he work", "Does she work", "Does it work", "Do we work", "Do they work"]
                },
                "past_simple": {
                    "positive": ["worked", "worked", "worked", "worked", "worked", "worked", "worked"],
                    "negative": ["didn't work", "didn't work", "didn't work", "didn't work", "didn't work", "didn't work", "didn't work"],
                    "question": ["Did I work", "Did you work", "Did he work", "Did she work", "Did it work", "Did we work", "Did they work"]
                }
            }
        },
        {
            "verb": "to see",
            "level": "elementary",
            "pronouns": ["I", "you", "he", "she", "it", "we", "they"],
            "tenses": {
                "past_simple": {
                    "positive": ["saw", "saw", "saw", "saw", "saw", "saw", "saw"],
                    "negative": ["didn't see", "didn't see", "didn't see", "didn't see", "didn't see", "didn't see", "didn't see"],
                    "question": ["Did I see", "Did you see", "Did he see", "Did she see", "Did it see", "Did we see", "Did they see"]
                }
            }
        }
    ],
    "fr": [
        {
            "verb": "être",
            "level": "starter",
            "pronouns": ["je", "tu", "il", "elle", "nous", "vous", "ils", "elles"],
            "tenses": {
                "present_simple": {
                    "positive": ["suis", "es", "est", "est", "sommes", "êtes", "sont", "sont"],
                    "negative": ["ne suis pas", "n'es pas", "n'est pas", "n'est pas", "ne sommes pas", "n'êtes pas", "ne sont pas", "ne sont pas"],
                    "question": ["suis-je", "es-tu", "est-il", "est-elle", "sommes-nous", "êtes-vous", "sont-ils", "sont-elles"]
                }
            }
        },
        {
            "verb": "parler",
            "level": "starter",
            "pronouns": ["je", "tu", "il", "elle", "nous", "vous", "ils", "elles"],
            "tenses": {
                "present_simple": {
                    "positive": ["parle", "parles", "parle", "parle", "parlons", "parlez", "parlent", "parlent"],
                    "negative": ["ne parle pas", "ne parles pas", "ne parle pas", "ne parle pas", "ne parlons pas", "ne parlez pas", "ne parlent pas", "ne parlent pas"],
                    "question": ["est-ce que je parle", "est-ce que tu parles", "est-ce qu'il parle", "est-ce qu'elle parle", "est-ce que nous parlons", "est-ce que vous parlez", "est-ce qu'ils parlent", "est-ce qu'elles parlent"]
                },
                "future_simple": {
                    "positive": ["parlerai", "parleras", "parlera", "parlera", "parlerons", "parlerez", "parleront", "parleront"],
                    "negative": ["ne parlerai pas", "ne parleras pas", "ne parlera pas", "ne parlera pas", "ne parlerons pas", "ne parlerez pas", "ne parleront pas", "ne parleront pas"],
                    "question": ["est-ce que je parlerai", "est-ce que tu parleras", "est-ce qu'il parlera", "est-ce qu'elle parlera", "est-ce que nous parlerons", "est-ce que vous parlerez", "est-ce qu'ils parleront", "est-ce qu'elles parleront"]
                }
            }
        }
    ],
    "it": [
        {
            "verb": "essere",
            "level": "starter",
            "pronouns": ["io", "tu", "lui", "lei", "noi", "voi", "loro"],
            "tenses": {
                "present_simple": {
                    "positive": ["sono", "sei", "è", "è", "siamo", "siete", "sono"],
                    "negative": ["non sono", "non sei", "non è", "non è", "non siamo", "non siete", "non sono"],
                    "question": ["sono io", "sei tu", "è lui", "è lei", "siamo noi", "siete voi", "sono loro"]
                }
            }
        },
        {
            "verb": "parlare",
            "level": "starter",
            "pronouns": ["io", "tu", "lui", "lei", "noi", "voi", "loro"],
            "tenses": {
                "present_simple": {
                    "positive": ["parlo", "parli", "parla", "parla", "parliamo", "parlate", "parlano"],
                    "negative": ["non parlo", "non parli", "non parla", "non parla", "non parliamo", "non parlate", "non parlano"],
                    "question": ["parlo io", "parli tu", "parla lui", "parla lei", "parliamo noi", "parlate voi", "parlano loro"]
                }
            }
        }
    ],
    "ru": [
        {
            "verb": "быть",
            "level": "starter",
            "pronouns": ["я", "ты", "он", "она", "оно", "мы", "вы", "они"],
            "tenses": {
                "present_simple": {
                    "positive": ["есть", "есть", "есть", "есть", "есть", "есть", "есть", "есть"],
                    "negative": ["нет", "нет", "нет", "нет", "нет", "нет", "нет", "нет"],
                    "question": ["есть я", "есть ты", "есть он", "есть она", "есть оно", "есть мы", "есть вы", "есть они"]
                }
            }
        },
        {
            "verb": "работать",
            "level": "starter",
            "pronouns": ["я", "ты", "он", "она", "оно", "мы", "вы", "они"],
            "tenses": {
                "present_simple": {
                    "positive": ["работаю", "работаешь", "работает", "работает", "работает", "работаем", "работаете", "работают"],
                    "negative": ["не работаю", "не работаешь", "не работает", "не работает", "не работает", "не работаем", "не работаете", "не работают"],
                    "question": ["я работаю", "ты работаешь", "он работает", "она работает", "оно работает", "мы работаем", "вы работаете", "они работают"]
                }
            }
        }
    ],
    "el": [
        {
            "verb": "είμαι",
            "level": "starter",
            "pronouns": ["εγώ", "εσύ", "αυτός", "αυτή", "αυτό", "εμείς", "εσείς", "αυτοί", "αυτές", "αυτά"],
            "tenses": {
                "present_simple": {
                    "positive": ["είμαι", "είσαι", "είναι", "είναι", "είναι", "είμαστε", "είστε", "είναι", "είναι", "είναι"],
                    "negative": ["δεν είμαι", "δεν είσαι", "δεν είναι", "δεν είναι", "δεν είναι", "δεν είμαστε", "δεν είστε", "δεν είναι", "δεν είναι", "δεν είναι"],
                    "question": ["είμαι εγώ", "είσαι εσύ", "είναι αυτός", "είναι αυτή", "είναι αυτό", "είμαστε εμείς", "είστε εσείς", "είναι αυτοί", "είναι αυτές", "είναι αυτά"]
                }
            }
        }
    ]
};

window.grammarData = grammarData;
