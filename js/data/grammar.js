const grammarData = {
    "en": [
        {
            "word": "book",
            "theme": "grammar_plurals",
            "level": "starter",
            "numberPlural": "2 book",
            "answer": "two books",
            "emoji": "📚"
        },
        {
            "word": "city",
            "theme": "grammar_plurals",
            "level": "elementary",
            "numberPlural": "3 city",
            "answer": "three cities",
            "emoji": "🏙️"
        },
        {
            "word": "child",
            "theme": "grammar_plurals",
            "level": "intermediate",
            "numberPlural": "5 child",
            "answer": "five children",
            "emoji": "🧒"
        },
        {
            "word": "leaf",
            "theme": "grammar_plurals",
            "level": "intermediate",
            "numberPlural": "many leaf",
            "answer": "many leaves",
            "emoji": "🍃"
        },
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
                "future_simple": {
                    "positive": ["will work", "will work", "will work", "will work", "will work", "will work", "will work"],
                    "negative": ["won't work", "won't work", "won't work", "won't work", "won't work", "won't work", "won't work"],
                    "question": ["Will I work", "Will you work", "Will he work", "Will she work", "Will it work", "Will we work", "Will they work"]
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
            "word": "pain",
            "theme": "grammar_gender",
            "level": "starter",
            "article": "le",
            "baseWord": "pain",
            "emoji": "🥖"
        },
        {
            "word": "pomme",
            "theme": "grammar_gender",
            "level": "starter",
            "article": "la",
            "baseWord": "pomme",
            "emoji": "🍎"
        },
        {
            "word": "eau",
            "theme": "grammar_gender",
            "level": "starter",
            "article": "l'",
            "baseWord": "eau",
            "emoji": "🚰"
        },
        {
            "word": "chat",
            "theme": "grammar_plurals",
            "level": "starter",
            "numberPlural": "2 chat",
            "answer": "deux chats",
            "emoji": "🐈"
        },
        {
            "word": "bureau",
            "theme": "grammar_plurals",
            "level": "elementary",
            "numberPlural": "3 bureau",
            "answer": "trois bureaux",
            "emoji": "🏢"
        },
        {
            "verb": "être",
            "level": "starter",
            "pronouns": ["je", "tu", "il", "nous", "vous", "ils"],
            "tenses": {
                "present_simple": {
                    "positive": ["suis", "es", "est", "sommes", "êtes", "sont"],
                    "negative": ["ne suis pas", "n'es pas", "n'est pas", "ne sommes pas", "n'êtes pas", "ne sont pas"],
                    "question": ["suis-je", "es-tu", "est-il", "sommes-nous", "êtes-vous", "sont-ils"]
                }
            }
        },
        {
            "verb": "parler",
            "level": "starter",
            "pronouns": ["je", "tu", "il", "nous", "vous", "ils"],
            "tenses": {
                "present_simple": {
                    "positive": ["parle", "parles", "parle", "parlons", "parlez", "parlent"],
                    "negative": ["ne parle pas", "ne parles pas", "ne parle pas", "ne parlons pas", "ne parlez pas", "ne parlent pas"],
                    "question": ["est-ce que je parle", "est-ce que tu parles", "est-ce qu'il parle", "est-ce que nous parlons", "est-ce que vous parlez", "est-ce qu'ils parlent"]
                },
                "future_simple": {
                    "positive": ["parlerai", "parleras", "parlera", "parlerons", "parlerez", "parleront"],
                    "negative": ["ne parlerai pas", "ne parleras pas", "ne parlera pas", "ne parlerons pas", "ne parlerez pas", "ne parleront pas"],
                    "question": ["est-ce que je parlerai", "est-ce que tu parleras", "est-ce qu'il parlera", "est-ce que nous parlerons", "est-ce que vous parlerez", "est-ce qu'ils parleront"]
                }
            }
        }
    ],
    "it": [
        {
            "word": "ragazzo",
            "theme": "grammar_gender",
            "level": "starter",
            "article": "il",
            "baseWord": "ragazzo",
            "emoji": "👦"
        },
        {
            "word": "ragazza",
            "theme": "grammar_gender",
            "level": "starter",
            "article": "la",
            "baseWord": "ragazza",
            "emoji": "👧"
        },
        {
            "word": "amico",
            "theme": "grammar_plurals",
            "level": "starter",
            "numberPlural": "2 amico",
            "answer": "due amici",
            "emoji": "🧑‍🤝‍🧑"
        },
        {
            "verb": "essere",
            "level": "starter",
            "pronouns": ["io", "tu", "lui", "noi", "voi", "loro"],
            "tenses": {
                "present_simple": {
                    "positive": ["sono", "sei", "è", "siamo", "siete", "sono"],
                    "negative": ["non sono", "non sei", "non è", "non siamo", "non siete", "non sono"],
                    "question": ["sono io", "sei tu", "è lui", "siamo noi", "siete voi", "sono loro"]
                }
            }
        },
        {
            "verb": "parlare",
            "level": "starter",
            "pronouns": ["io", "tu", "lui", "noi", "voi", "loro"],
            "tenses": {
                "present_simple": {
                    "positive": ["parlo", "parli", "parla", "parliamo", "parlate", "parlano"],
                    "negative": ["non parlo", "non parli", "non parla", "non parliamo", "non parlate", "non parlano"],
                    "question": ["parlo io", "parli tu", "parla lui", "parliamo noi", "parlate voi", "parlano loro"]
                }
            }
        }
    ],
    "ru": [
        {
            "word": "кофе",
            "theme": "grammar_gender",
            "level": "starter",
            "article": "он",
            "baseWord": "кофе",
            "emoji": "☕"
        },
        {
            "word": "вода",
            "theme": "grammar_gender",
            "level": "starter",
            "article": "она",
            "baseWord": "вода",
            "emoji": "🚰"
        },
        {
            "word": "окно",
            "theme": "grammar_gender",
            "level": "starter",
            "article": "оно",
            "baseWord": "окно",
            "emoji": "🪟"
        },
        {
            "word": "книга",
            "theme": "grammar_plurals",
            "level": "starter",
            "numberPlural": "2 книга",
            "answer": "две книги",
            "emoji": "📖"
        },
        {
            "verb": "быть",
            "level": "starter",
            "pronouns": ["я", "ты", "он", "мы", "вы", "они"],
            "tenses": {
                "present_simple": {
                    "positive": ["есть", "есть", "есть", "есть", "есть", "есть"],
                    "negative": ["нет", "нет", "нет", "нет", "нет", "нет"],
                    "question": ["есть я", "есть ты", "есть он", "есть мы", "есть вы", "есть они"]
                }
            }
        },
        {
            "verb": "работать",
            "level": "starter",
            "pronouns": ["я", "ты", "он", "мы", "вы", "они"],
            "tenses": {
                "present_simple": {
                    "positive": ["работаю", "работаешь", "работает", "работаем", "работаете", "работают"],
                    "negative": ["не работаю", "не работаешь", "не работает", "не работаем", "не работаете", "не работают"],
                    "question": ["я работаю", "ты работаешь", "он работает", "мы работаем", "вы работаете", "они работают"]
                }
            }
        }
    ],
    "el": [
        {
            "word": "καφές",
            "theme": "grammar_gender",
            "level": "starter",
            "article": "ο",
            "baseWord": "καφές",
            "emoji": "☕"
        },
        {
            "word": "μπίρα",
            "theme": "grammar_gender",
            "level": "starter",
            "article": "η",
            "baseWord": "μπίρα",
            "emoji": "🍺"
        },
        {
            "word": "νερό",
            "theme": "grammar_gender",
            "level": "starter",
            "article": "το",
            "baseWord": "νερό",
            "emoji": "🚰"
        },
        {
            "word": "βιβλίο",
            "theme": "grammar_plurals",
            "level": "starter",
            "numberPlural": "2 βιβλίο",
            "answer": "δύο βιβλία",
            "emoji": "📖"
        },
        {
            "verb": "είμαι",
            "level": "starter",
            "pronouns": ["εγώ", "εσύ", "αυτός", "εμείς", "εσείς", "αυτοί"],
            "tenses": {
                "present_simple": {
                    "positive": ["είμαι", "είσαι", "είναι", "είμαστε", "είστε", "είναι"],
                    "negative": ["δεν είμαι", "δεν είσαι", "δεν είναι", "δεν είμαστε", "δεν είστε", "δεν είναι"],
                    "question": ["είμαι εγώ", "είσαι εσύ", "είναι αυτός", "είμαστε εμείς", "είστε εσείς", "είναι αυτοί"]
                }
            }
        }
    ]
};

window.grammarData = grammarData;
