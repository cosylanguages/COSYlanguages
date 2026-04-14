(function() {
    const data = [
    {
        "word": "accept",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "✅",
        "form": "verb",
        "transcription": "əkˈsept",
        "subtext": "agree to, take, receive",
        "synonyms": [
            "agree to",
            "take",
            "receive"
        ],
        "definitions": [
            {
                "text": "To agree to take or receive something.",
                "examples": [
                    "She accepted the job offer after negotiating the salary."
                ]
            }
        ],
        "classification": "regular",
        "group": "regular",
        "aspect": "action",
        "v2": "accepted",
        "v3": "accepted",
        "opposite": "refuse"
    },
    {
        "word": "achieve",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🎯",
        "form": "verb",
        "transcription": "əˈtʃiːv",
        "subtext": "succeed, reach, accomplish",
        "synonyms": [
            "succeed",
            "reach",
            "accomplish"
        ],
        "definitions": [
            {
                "text": "To succeed in finishing something or reaching a goal, especially after a lot of work or effort.",
                "examples": [
                    "She worked hard to achieve her goals.",
                    "The team achieved a great victory."
                ]
            }
        ],
        "classification": "regular",
        "group": "regular",
        "aspect": "action",
        "v2": "achieved",
        "v3": "achieved",
        "opposite": "fail"
    },
    {
        "word": "admire",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🤩",
        "form": "verb",
        "transcription": "🇬🇧 ədˈmaɪə | 🇺🇸 ədˈmaɪər",
        "subtext": "respect, look up to",
        "synonyms": [
            "respect",
            "look up to"
        ],
        "definitions": [
            {
                "text": "To find someone or something attractive and pleasant to look at.",
                "examples": [
                    "I really admire your courage."
                ]
            }
        ],
        "classification": "regular",
        "group": "regular",
        "aspect": "action",
        "v2": "admired",
        "v3": "admired",
        "opposite": "despise"
    },
    {
        "word": "admit",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "🗣️",
        "form": "verb",
        "transcription": "ədˈmɪt",
        "subtext": "confess, acknowledge",
        "synonyms": [
            "confess",
            "acknowledge"
        ],
        "definitions": [
            {
                "text": "To agree that something is true, especially unwillingly.",
                "examples": [
                    "He admitted that he was wrong."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "admitted",
        "v3": "admitted",
        "opposite": "deny"
    },
    {
        "word": "advise",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "👨‍🏫",
        "form": "verb",
        "transcription": "ədˈvaɪz",
        "subtext": "counsel, suggest, recommend",
        "synonyms": [
            "counsel",
            "suggest",
            "recommend"
        ],
        "definitions": [
            {
                "text": "To give someone advice.",
                "examples": [
                    "I would advise you to wait until tomorrow."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "advised",
        "v3": "advised",
        "opposite": "mislead"
    },
    {
        "word": "afford",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💰",
        "form": "verb",
        "subtext": "afford a house / afford to travel / can't afford it",
        "definitions": [
            {
                "text": "To have enough money for something.",
                "examples": [
                    "They cannot afford to buy a flat in the city centre."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "afforded",
        "v3": "afforded",
        "opposite": "lack",
        "transcription": "əˈfɔːrd",
        "synonyms": [
            "pay for"
        ]
    },
    {
        "word": "allow",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "✅",
        "form": "verb",
        "subtext": "let, permit",
        "synonyms": [
            "let",
            "permit"
        ],
        "definitions": [
            {
                "text": "To let someone do something.",
                "examples": [
                    "Smoking is not allowed here."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "allowed",
        "v3": "allowed",
        "opposite": "forbid",
        "transcription": "əˈlaʊ"
    },
    {
        "word": "analyze",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "📊",
        "form": "verb",
        "subtext": "examine, study",
        "synonyms": [
            "examine",
            "study"
        ],
        "definitions": [
            {
                "text": "To study something in detail to understand it.",
                "examples": [
                    "We need to analyze the results of the experiment."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "analyzed",
        "v3": "analyzed",
        "opposite": "ignore",
        "transcription": "ˈænəlaɪz"
    },
    {
        "word": "announce",
        "level": "elementary",
        "theme": "news_media_A2",
        "emoji": "📣",
        "form": "verb",
        "subtext": "state, declare",
        "synonyms": [
            "state",
            "declare"
        ],
        "definitions": [
            {
                "text": "To make something known or tell people about something officially.",
                "examples": [
                    "The company announced a new product today."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "announced",
        "v3": "announced",
        "opposite": "hide",
        "transcription": "əˈnaʊns"
    },
    {
        "word": "apologise",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🙏",
        "form": "verb",
        "subtext": "apologise for something / to someone",
        "synonyms": [
            "say sorry"
        ],
        "definitions": [
            {
                "text": "To express regret for something you have done wrong.",
                "examples": [
                    "He apologised for missing the meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "apologised",
        "v3": "apologised",
        "opposite": "offend",
        "transcription": "🇬🇧 əˈpɒlədʒaɪz | 🇺🇸 əˈpɑːlədʒaɪz"
    },
    {
        "word": "appear",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👻",
        "form": "verb",
        "subtext": "look like",
        "synonyms": [
            "seem"
        ],
        "definitions": [
            {
                "text": "To come into view; to seem.",
                "examples": [
                    "She appeared calm despite the difficult situation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "appeared",
        "v3": "appeared",
        "opposite": "disappear",
        "transcription": "əˈpɪər"
    },
    {
        "word": "apply",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "📝",
        "form": "verb",
        "subtext": "apply for a job / apply to university",
        "definitions": [
            {
                "text": "To make a formal request for a job, a place at university, etc.",
                "examples": [
                    "I am going to apply for that position."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "applied",
        "v3": "applied",
        "opposite": "resign",
        "transcription": "əˈplaɪ",
        "synonyms": [
            "request"
        ]
    },
    {
        "word": "apply for",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "📝",
        "form": "verb",
        "subtext": "apply for a job / apply for a position",
        "synonyms": [
            "apply online"
        ],
        "definitions": [
            {
                "text": "To make a formal written request for a job or position.",
                "examples": [
                    "She applied for three different management positions."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "applied for",
        "v3": "applied for",
        "opposite": "resign",
        "transcription": "əˈplaɪ fɔːr"
    },
    {
        "word": "appreciate",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🙏",
        "form": "verb",
        "subtext": "value, enjoy",
        "synonyms": [
            "value",
            "enjoy"
        ],
        "definitions": [
            {
                "text": "To understand how good or useful someone or something is.",
                "examples": [
                    "I really appreciate your help."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "appreciated",
        "v3": "appreciated",
        "opposite": "ignore",
        "transcription": "əˈpriːʃieɪt"
    },
    {
        "word": "argue",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "🗣️",
        "form": "verb",
        "subtext": "argue with someone / about something",
        "synonyms": [
            "fight",
            "disagree"
        ],
        "definitions": [
            {
                "text": "To disagree with someone in an angry or forceful way.",
                "examples": [
                    "They often argue about money and work schedules."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "argued",
        "v3": "argued",
        "opposite": "agree",
        "transcription": "ˈɑːrɡjuː"
    },
    {
        "word": "arrange",
        "level": "elementary",
        "theme": "booking_planning_a_trip_A2",
        "emoji": "🗓️",
        "form": "verb",
        "subtext": "plan, organize",
        "synonyms": [
            "plan",
            "organize"
        ],
        "definitions": [
            {
                "text": "To plan, prepare for, or organize something.",
                "examples": [
                    "I've arranged a meeting for ten o'clock."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "arranged",
        "v3": "arranged",
        "opposite": "disorganize",
        "transcription": "əˈreɪndʒ"
    },
    {
        "word": "arrest",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "👮",
        "form": "verb",
        "subtext": "be under arrest",
        "synonyms": [
            "get arrested"
        ],
        "definitions": [
            {
                "text": "If the police arrest someone, they take them to the police station because they think they have committed a crime.",
                "examples": [
                    "The police arrested the thief."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "arrested",
        "v3": "arrested",
        "opposite": "release",
        "transcription": "əˈrɛst"
    },
    {
        "word": "assist",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "help, support, aid",
        "synonyms": [
            "help",
            "support",
            "aid"
        ],
        "definitions": [
            {
                "text": "To help.",
                "examples": [
                    "The clerk assisted the customer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "assisted",
        "v3": "assisted",
        "opposite": "hinder",
        "transcription": "əˈsɪst"
    },
    {
        "word": "attach",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "📎",
        "form": "verb",
        "subtext": "join, connect, fasten",
        "synonyms": [
            "join",
            "connect",
            "fasten"
        ],
        "definitions": [
            {
                "text": "To fasten, join, or connect something.",
                "examples": [
                    "Please attach your CV to the email."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "attached",
        "v3": "attached",
        "opposite": "detach",
        "transcription": "əˈtætʃ"
    },
    {
        "word": "attract",
        "level": "elementary",
        "theme": "personality_character_A2",
        "emoji": "🧲",
        "form": "verb",
        "subtext": "draw, pull, appeal to",
        "synonyms": [
            "draw",
            "pull",
            "appeal to"
        ],
        "definitions": [
            {
                "text": "To pull or draw someone or something towards them.",
                "examples": [
                    "The bright lights attract insects.",
                    "The city attracts many tourists."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "attracted",
        "v3": "attracted",
        "opposite": "repel",
        "transcription": "əˈtrækt"
    },
    {
        "word": "avoid",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🚫",
        "form": "verb",
        "subtext": "avoid problems / avoid traffic / avoid someone",
        "definitions": [
            {
                "text": "To stay away from someone or something.",
                "examples": [
                    "I try to avoid processed foods.",
                    "She avoided eye contact with him."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "avoided",
        "v3": "avoided",
        "opposite": "confront",
        "transcription": "əˈvɔɪd",
        "synonyms": [
            "keep away from"
        ]
    },
    {
        "word": "beat",
        "level": "elementary",
        "theme": "exercise_fitness_A2",
        "emoji": "🥊",
        "form": "verb",
        "subtext": "beat a record / beat an opponent",
        "definitions": [
            {
                "text": "To defeat someone in a game, competition, election, or battle.",
                "examples": [
                    "Our team beat them 3-1."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "beat",
        "v3": "beaten",
        "opposite": "lose",
        "transcription": "biːt",
        "synonyms": [
            "win against",
            "defeat"
        ]
    },
    {
        "word": "behave",
        "level": "elementary",
        "theme": "personality_character_A2",
        "emoji": "😇",
        "form": "verb",
        "subtext": "behave well / behave badly / behave yourself",
        "definitions": [
            {
                "text": "To act in a particular way.",
                "examples": [
                    "The children behaved very well today.",
                    "He needs to learn how to behave in public."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "behaved",
        "v3": "behaved",
        "opposite": "misbehave",
        "transcription": "bɪˈheɪv",
        "synonyms": [
            "act"
        ]
    },
    {
        "word": "bite",
        "level": "elementary",
        "theme": "animals_nature_A2",
        "emoji": "🦷",
        "form": "verb",
        "subtext": "bite food / dog bite",
        "definitions": [
            {
                "text": "To use your teeth to cut into something.",
                "examples": [
                    "The dog bit the man."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "bit",
        "v3": "bitten",
        "opposite": "lick",
        "transcription": "baɪt"
    },
    {
        "word": "blame",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "👈",
        "form": "verb",
        "subtext": "blame someone / take the blame",
        "definitions": [
            {
                "text": "To say or think that someone or something is responsible for something bad.",
                "examples": [
                    "Don't blame me for your mistakes."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "blamed",
        "v3": "blamed",
        "opposite": "praise",
        "transcription": "bleɪm"
    },
    {
        "word": "brush teeth",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🪥",
        "form": "verb",
        "subtext": "brush my teeth, brush twice a day",
        "definitions": [
            {
                "text": "To clean your teeth using a toothbrush.",
                "examples": [
                    "I brush my teeth every morning and night."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "brushed teeth",
        "v3": "brushed teeth",
        "opposite": "mess up",
        "transcription": "brʌʃ tiːθ"
    },
    {
        "word": "budget",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📊",
        "form": "verb",
        "subtext": "budget for something / budget carefully / budget monthly",
        "definitions": [
            {
                "text": "To plan how money will be spent.",
                "examples": [
                    "They budget carefully to save for a house."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "budgeted",
        "v3": "budgeted",
        "opposite": "waste",
        "transcription": "ˈbʌdʒɪt"
    },
    {
        "word": "build",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏗️",
        "form": "verb",
        "subtext": "build a career / build a team / build experience / build trust",
        "definitions": [
            {
                "text": "To make something by putting parts together; to construct.",
                "examples": [
                    "They are building a new office block.",
                    "She built a strong reputation over ten years."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "built",
        "v3": "built",
        "opposite": "destroy",
        "transcription": "bɪld"
    },
    {
        "word": "calculate",
        "level": "elementary",
        "theme": "basic_arithmetic_A2",
        "emoji": "🧮",
        "form": "verb",
        "subtext": "calculate the cost / calculate the distance / calculate results",
        "definitions": [
            {
                "text": "To discover an amount or number using mathematics.",
                "examples": [
                    "Can you calculate the total cost?",
                    "We need to calculate how much paint we need."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "calculated",
        "v3": "calculated",
        "opposite": "guess",
        "transcription": "ˈkælkjuleɪt",
        "synonyms": [
            "count",
            "compute"
        ]
    },
    {
        "word": "carry on",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⏩",
        "form": "verb",
        "subtext": "carry on working / carry on regardless / carry on with something",
        "definitions": [
            {
                "text": "To continue doing something.",
                "examples": [
                    "He carried on working despite feeling ill."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "carried on",
        "v3": "carried on",
        "opposite": "stop",
        "transcription": "🇬🇧 ˈkæri ɒn | 🇺🇸 ˈkæri ɑːn"
    },
    {
        "word": "challenge",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏔️",
        "form": "verb",
        "subtext": "challenge yourself / difficult challenge",
        "definitions": [
            {
                "text": "To test someone's ability or determination.",
                "examples": [
                    "The new job will challenge me."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "challenged",
        "v3": "challenged",
        "opposite": "comfort",
        "transcription": "ˈtʃælɪndʒ"
    },
    {
        "word": "charge",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💳",
        "form": "verb",
        "subtext": "charge a fee / charge for a service / charge extra",
        "definitions": [
            {
                "text": "To ask an amount of money for a service.",
                "examples": [
                    "The mechanic charged more than the estimate.",
                    "The mechanic charged three hundred euros."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "charged",
        "v3": "charged",
        "opposite": "pay",
        "transcription": "tʃɑːrdʒ",
        "synonyms": [
            "bill"
        ]
    },
    {
        "word": "claim",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📜",
        "form": "verb",
        "subtext": "claim insurance / claim expenses / claim a refund",
        "definitions": [
            {
                "text": "To formally ask for money you are owed, especially insurance.",
                "examples": [
                    "He claimed on his insurance after the accident."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "claimed",
        "v3": "claimed",
        "opposite": "give up",
        "transcription": "kleɪm"
    },
    {
        "word": "collaborate",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👥",
        "form": "verb",
        "subtext": "collaborate with / collaborate on a project",
        "synonyms": [
            "work collaboratively"
        ],
        "definitions": [
            {
                "text": "To work jointly with others on a shared project.",
                "examples": [
                    "They collaborated with a team in Berlin on the campaign."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "collaborated",
        "v3": "collaborated",
        "opposite": "work alone",
        "transcription": "kəˈlæbəreɪt"
    },
    {
        "word": "communicate",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "🗣️",
        "form": "verb",
        "subtext": "communicate with",
        "definitions": [
            {
                "text": "To share information with others by speaking, writing, etc.",
                "examples": [
                    "We communicate by email."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "communicated",
        "v3": "communicated",
        "opposite": "be silent",
        "transcription": "kəˈmjuːnɪkeɪt"
    },
    {
        "word": "compare",
        "level": "elementary",
        "theme": "comparison_A2",
        "emoji": "⚖️",
        "form": "verb",
        "subtext": "compare prices / compare options",
        "synonyms": [
            "contrast"
        ],
        "definitions": [
            {
                "text": "To examine or look for the difference between two or more things.",
                "examples": [
                    "Compare the two maps.",
                    "If you compare the prices, this one is cheaper."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "compared",
        "v3": "compared",
        "opposite": "differentiate",
        "transcription": "kəmˈpeər"
    },
    {
        "word": "compete",
        "level": "elementary",
        "theme": "exercise_fitness_A2",
        "emoji": "🏃",
        "form": "verb",
        "subtext": "compete in a race",
        "synonyms": [
            "competitive"
        ],
        "definitions": [
            {
                "text": "To try to be more successful than someone or something else.",
                "examples": [
                    "She competed in the Olympic Games."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "competed",
        "v3": "competed",
        "opposite": "cooperate",
        "transcription": "kəmˈpiːt"
    },
    {
        "word": "complain",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "😠",
        "form": "verb",
        "subtext": "complain about something / to someone / complain about / complain to someone",
        "synonyms": [
            "criticize"
        ],
        "definitions": [
            {
                "text": "To say that something is wrong or not satisfactory.",
                "examples": [
                    "She complained about the noise.",
                    "We should complain to the manager."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "complained",
        "v3": "complained",
        "opposite": "praise",
        "transcription": "kəmˈpleɪn"
    },
    {
        "word": "complete",
        "level": "elementary",
        "theme": "school_life_routines_A2",
        "emoji": "✅",
        "form": "verb",
        "subtext": "complete a task / complete a form",
        "synonyms": [
            "finish"
        ],
        "definitions": [
            {
                "text": "To finish doing something.",
                "examples": [
                    "Please complete the application form.",
                    "He completed the race in record time."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "completed",
        "v3": "completed",
        "opposite": "start",
        "transcription": "kəmˈpliːt"
    },
    {
        "word": "compromise",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "compromise on something / reach a compromise / be willing to compromise",
        "definitions": [
            {
                "text": "To accept less than ideal in order to reach an agreement.",
                "examples": [
                    "They compromised on the price and signed the contract."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "compromised",
        "v3": "compromised",
        "opposite": "demand",
        "transcription": "🇬🇧 ˈkɒmprəmaɪz | 🇺🇸 ˈkɑːmprəmaɪz"
    },
    {
        "word": "concentrate",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🧠",
        "form": "verb",
        "subtext": "concentrate on something / concentrate on work / hard to concentrate",
        "definitions": [
            {
                "text": "To give all your attention to something.",
                "examples": [
                    "I can't concentrate with all this noise."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "concentrated",
        "v3": "concentrated",
        "opposite": "distract",
        "transcription": "🇬🇧 ˈkɒnsəntreɪt | 🇺🇸 ˈkɑːnsəntreɪt"
    },
    {
        "word": "confirm",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "✅",
        "form": "verb",
        "subtext": "confirm a booking / confirm receipt / confirm in writing",
        "definitions": [
            {
                "text": "To say definitively that something is true or will happen.",
                "examples": [
                    "Please confirm your attendance before Friday morning."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "confirmed",
        "v3": "confirmed",
        "opposite": "cancel",
        "transcription": "kənˈfɜːrm",
        "synonyms": [
            "verify",
            "check"
        ]
    },
    {
        "word": "confuse",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "😕",
        "form": "verb",
        "subtext": "confuse someone",
        "synonyms": [
            "get confused"
        ],
        "definitions": [
            {
                "text": "To make someone feel that they do not understand something.",
                "examples": [
                    "The road signs confused him."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "confused",
        "v3": "confused",
        "opposite": "clarify",
        "transcription": "kənˈfjuːz"
    },
    {
        "word": "connect",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "🔗",
        "form": "verb",
        "subtext": "connect to wifi / connect with people / connect dots",
        "definitions": [
            {
                "text": "To join or be joined with something else.",
                "examples": [
                    "Click here to connect to the internet.",
                    "The bridge connects the two islands."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "connected",
        "v3": "connected",
        "opposite": "disconnect",
        "transcription": "kənˈnɛkt",
        "synonyms": [
            "join",
            "link"
        ]
    },
    {
        "word": "conserve",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "💧",
        "form": "verb",
        "subtext": "conserve energy / conserve water",
        "definitions": [
            {
                "text": "To keep and protect something from damage, change, or waste.",
                "examples": [
                    "We should try to conserve water during the summer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "conserved",
        "v3": "conserved",
        "opposite": "waste",
        "synonyms": [
            "save",
            "protect"
        ],
        "transcription": "kənˈsɜːrv"
    },
    {
        "word": "consider",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🤔",
        "form": "verb",
        "subtext": "consider an option, consider someone for a job",
        "definitions": [
            {
                "text": "To think about something carefully.",
                "examples": [
                    "Please consider my application."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "considered",
        "v3": "considered",
        "opposite": "ignore",
        "transcription": "kənˈsɪdər",
        "synonyms": [
            "think about"
        ]
    },
    {
        "word": "contact",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "📞",
        "form": "verb",
        "subtext": "contact someone / contact by email / contact us",
        "definitions": [
            {
                "text": "To get in touch with someone.",
                "examples": [
                    "I will contact you by the end of the week with an answer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "contacted",
        "v3": "contacted",
        "opposite": "ignore",
        "synonyms": [
            "call",
            "message"
        ],
        "transcription": "🇬🇧 ˈkɒntækt | 🇺🇸 ˈkɑːntækt"
    },
    {
        "word": "contain",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "📦",
        "form": "verb",
        "subtext": "contain sugar / contain information / the box contains",
        "definitions": [
            {
                "text": "To have something inside or include something as a part.",
                "examples": [
                    "This drink contains a lot of sugar.",
                    "The letter contains important news."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "contained",
        "v3": "contained",
        "opposite": "exclude",
        "transcription": "kənˈteɪn",
        "synonyms": [
            "include",
            "hold"
        ]
    },
    {
        "word": "continue",
        "level": "elementary",
        "theme": "school_life_routines_A2",
        "emoji": "➡️",
        "form": "verb",
        "subtext": "continue working / continue the journey",
        "synonyms": [
            "go on",
            "keep doing"
        ],
        "definitions": [
            {
                "text": "To keep happening, or to keep doing something without stopping.",
                "examples": [
                    "The rain continued all day.",
                    "Please continue reading."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "continued",
        "v3": "continued",
        "opposite": "stop",
        "transcription": "kənˈtɪnjuː"
    },
    {
        "word": "contract",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📄",
        "form": "verb",
        "subtext": "contract with",
        "synonyms": [
            "be contracted to"
        ],
        "definitions": [
            {
                "text": "To make a legal agreement with someone.",
                "examples": [
                    "They contracted the company to build the bridge."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "contracted",
        "v3": "contracted",
        "opposite": "cancel",
        "transcription": "🇬🇧 ˈkɒntrækt | 🇺🇸 ˈkɑːntrækt"
    },
    {
        "word": "control",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🎮",
        "form": "verb",
        "subtext": "lose control / under control",
        "definitions": [
            {
                "text": "To order, limit, or rule something, or someone's actions or behavior.",
                "examples": [
                    "It's hard to control the situation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "controlled",
        "v3": "controlled",
        "opposite": "release",
        "transcription": "kənˈtroʊl",
        "synonyms": [
            "manage",
            "direct"
        ]
    },
    {
        "word": "convince",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🗣️",
        "form": "verb",
        "subtext": "convince someone / convince yourself / hard to convince",
        "definitions": [
            {
                "text": "To persuade someone or make them certain.",
                "examples": [
                    "He managed to convince me to go.",
                    "I'm not convinced by his story."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "convinced",
        "v3": "convinced",
        "opposite": "dissuade",
        "synonyms": [
            "persuade"
        ],
        "transcription": "kənˈvɪns"
    },
    {
        "word": "create",
        "level": "elementary",
        "theme": "art_design_A2",
        "emoji": "🎨",
        "form": "verb",
        "subtext": "create something new",
        "synonyms": [
            "creative"
        ],
        "definitions": [
            {
                "text": "To make something new, or invent something.",
                "examples": [
                    "She created a beautiful painting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "created",
        "v3": "created",
        "opposite": "destroy",
        "transcription": "kriˈeɪt"
    },
    {
        "word": "cure",
        "level": "elementary",
        "theme": "health_body_A2",
        "emoji": "💊",
        "form": "verb",
        "subtext": "cure a disease",
        "definitions": [
            {
                "text": "To make someone with an illness healthy again.",
                "examples": [
                    "Doctors hope to find a cure for cancer soon."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cured",
        "v3": "cured",
        "opposite": "infect",
        "synonyms": [
            "heal"
        ],
        "transcription": "kjʊər"
    },
    {
        "word": "cut down on",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "📉",
        "form": "verb",
        "subtext": "cut down on spending / cut down on sugar",
        "synonyms": [
            "cut costs"
        ],
        "definitions": [
            {
                "text": "To reduce the amount of something you do or consume.",
                "examples": [
                    "She cut down on caffeine to improve her sleep."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "cut down on",
        "v3": "cut down on",
        "opposite": "increase",
        "transcription": "🇬🇧 kʌt daʊn ɒn | 🇺🇸 kʌt daʊn ɑːn"
    },
    {
        "word": "damage",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🔨",
        "form": "verb",
        "subtext": "damage something / cause damage",
        "definitions": [
            {
                "text": "To harm or spoil something.",
                "examples": [
                    "The storm damaged several houses."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "damaged",
        "v3": "damaged",
        "opposite": "repair",
        "transcription": "ˈdæmɪdʒ",
        "synonyms": [
            "hurt",
            "break"
        ]
    },
    {
        "word": "decorate",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "emoji": "🎨",
        "form": "verb",
        "subtext": "decorate a room",
        "synonyms": [
            "redecorate",
            "interior decoration"
        ],
        "definitions": [
            {
                "text": "To make a place more attractive, especially by painting.",
                "examples": [
                    "They decorated the flat before moving in."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "decorated",
        "v3": "decorated",
        "opposite": "damage",
        "transcription": "ˈdɛkəreɪt"
    },
    {
        "word": "decrease",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "📉",
        "form": "verb",
        "subtext": "decrease in number / decrease gradually / significant decrease",
        "definitions": [
            {
                "text": "To become less, or to make something become less.",
                "examples": [
                    "The number of students decreased this year.",
                    "We should decrease our spending."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "decreased",
        "v3": "decreased",
        "opposite": "increase",
        "synonyms": [
            "reduce",
            "go down"
        ],
        "transcription": "dɪˈkriːs"
    },
    {
        "word": "delegate",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📋",
        "form": "verb",
        "subtext": "delegate a task / delegate responsibility / delegate to a colleague",
        "definitions": [
            {
                "text": "To give a task or responsibility to someone else.",
                "examples": [
                    "A good manager knows how to delegate effectively."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "delegated",
        "v3": "delegated",
        "opposite": "do yourself",
        "transcription": "ˈdɛlɪɡeɪt"
    },
    {
        "word": "deliver",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "emoji": "📦",
        "form": "verb",
        "subtext": "deliver food / deliver a package / deliver a speech",
        "definitions": [
            {
                "text": "To take goods, letters, parcels, etc. to people's houses or places of work.",
                "examples": [
                    "The mail is delivered every morning.",
                    "Can you deliver the pizza to my house?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "delivered",
        "v3": "delivered",
        "opposite": "collect",
        "transcription": "dɪˈlɪvər",
        "synonyms": [
            "bring",
            "send"
        ]
    },
    {
        "word": "deposit",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "💰",
        "form": "verb",
        "subtext": "deposit money / deposit a check / direct deposit",
        "definitions": [
            {
                "text": "To put money into a bank account.",
                "examples": [
                    "I need to deposit this check.",
                    "She deposited five hundred dollars into her savings account."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "deposited",
        "v3": "deposited",
        "opposite": "withdraw",
        "synonyms": [
            "put in"
        ],
        "transcription": "🇬🇧 dɪˈpɒzɪt | 🇺🇸 dɪˈpɑːzɪt"
    },
    {
        "word": "design",
        "level": "elementary",
        "theme": "art_design_A2",
        "emoji": "📐",
        "form": "verb",
        "subtext": "design a website / graphic design",
        "definitions": [
            {
                "text": "To make or draw plans for something, for example clothes or buildings.",
                "examples": [
                    "He designs beautiful gardens."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "designed",
        "v3": "designed",
        "opposite": "copy",
        "transcription": "dɪˈzaɪn",
        "synonyms": [
            "plan",
            "create"
        ]
    },
    {
        "word": "destroy",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💣",
        "form": "verb",
        "subtext": "destroy a file / destroy completely",
        "synonyms": [
            "damage"
        ],
        "definitions": [
            {
                "text": "To damage something so badly that it cannot be used or does not exist any more.",
                "examples": [
                    "Be careful not to destroy important files."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "destroyed",
        "v3": "destroyed",
        "opposite": "build",
        "transcription": "dɪˈstrɔɪ"
    },
    {
        "word": "develop",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💻",
        "form": "verb",
        "subtext": "develop a product / develop a skill",
        "synonyms": [
            "research and development"
        ],
        "definitions": [
            {
                "text": "To grow or change into something more advanced.",
                "examples": [
                    "The company is developing a new app.",
                    "She is developing her photography skills."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "developed",
        "v3": "developed",
        "opposite": "regress",
        "transcription": "dɪˈvɛləp"
    },
    {
        "word": "diagnose",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🩺",
        "form": "verb",
        "subtext": "diagnose an illness / diagnose early",
        "synonyms": [
            "be diagnosed with"
        ],
        "definitions": [
            {
                "text": "To identify an illness or problem after examination.",
                "examples": [
                    "The doctor diagnosed her with high blood pressure."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "diagnosed",
        "v3": "diagnosed",
        "opposite": "ignore",
        "transcription": "ˌdaɪəɡˈnoʊs"
    },
    {
        "word": "disagree",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "👎",
        "form": "verb",
        "subtext": "disagree with someone / disagree with / I disagree",
        "definitions": [
            {
                "text": "To have a different opinion from someone.",
                "examples": [
                    "I disagree with that statement."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "disagreed",
        "v3": "disagreed",
        "opposite": "agree",
        "transcription": "ˌdɪsəˈɡriː",
        "synonyms": [
            "differ",
            "argue"
        ]
    },
    {
        "word": "discover",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "🔎",
        "form": "verb",
        "subtext": "discover something new",
        "synonyms": [
            "discovery"
        ],
        "definitions": [
            {
                "text": "To find information, a place, or an object, especially for the first time.",
                "examples": [
                    "They discovered a new planet."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "discovered",
        "v3": "discovered",
        "opposite": "hide",
        "transcription": "dɪˈskʌvər"
    },
    {
        "word": "discuss",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "🗣️",
        "form": "verb",
        "subtext": "discuss something with someone / discuss a topic / discuss in detail / discuss with someone",
        "definitions": [
            {
                "text": "To talk about something in detail.",
                "examples": [
                    "We discussed the new contract terms for two hours."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "discussed",
        "v3": "discussed",
        "opposite": "be silent",
        "transcription": "dɪˈskʌs",
        "synonyms": [
            "talk about"
        ]
    },
    {
        "word": "dismiss",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "❌",
        "form": "verb",
        "subtext": "dismiss an employee",
        "synonyms": [
            "be dismissed",
            "dismissal proceedings"
        ],
        "definitions": [
            {
                "text": "To officially remove someone from their job.",
                "examples": [
                    "He was dismissed for repeated absence without explanation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "dismissed",
        "v3": "dismissed",
        "opposite": "hire",
        "transcription": "dɪsˈmɪs"
    },
    {
        "word": "divide",
        "level": "elementary",
        "theme": "basic_arithmetic_A2",
        "emoji": "➗",
        "form": "verb",
        "subtext": "divide by",
        "synonyms": [
            "division"
        ],
        "definitions": [
            {
                "text": "To separate into parts or groups.",
                "examples": [
                    "The teacher divided the class into four groups."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "divided",
        "v3": "divided",
        "opposite": "multiply",
        "transcription": "dɪˈvaɪd"
    },
    {
        "word": "doubt",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🤨",
        "form": "verb",
        "subtext": "doubt it",
        "synonyms": [
            "not believe"
        ],
        "definitions": [
            {
                "text": "To not feel certain or confident about something.",
                "examples": [
                    "I doubt he will come."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "doubted",
        "v3": "doubted",
        "opposite": "believe",
        "transcription": "daʊt"
    },
    {
        "word": "dream",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💭",
        "form": "verb",
        "subtext": "dream about / have a dream",
        "definitions": [
            {
                "text": "To experience pictures or ideas in your mind while sleeping.",
                "examples": [
                    "I dreamed about a holiday last night."
                ]
            }
        ],
        "classification": "both",
        "aspect": "action",
        "v2": "dreamed / dreamt",
        "v3": "dreamed / dreamt",
        "opposite": "wake up",
        "transcription": "driːm",
        "synonyms": [
            "imagine"
        ]
    },
    {
        "word": "encourage",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "👏",
        "form": "verb",
        "subtext": "encourage someone",
        "synonyms": [
            "support"
        ],
        "definitions": [
            {
                "text": "To talk or behave in a way that gives someone confidence to do something.",
                "examples": [
                    "My parents encouraged me to study hard."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "encouraged",
        "v3": "encouraged",
        "opposite": "discourage",
        "transcription": "ɪnˈkʌrɪdʒ"
    },
    {
        "word": "entertain",
        "level": "elementary",
        "theme": "theatre_performance_A2",
        "emoji": "🎭",
        "form": "verb",
        "subtext": "entertain people",
        "synonyms": [
            "entertainment"
        ],
        "definitions": [
            {
                "text": "To keep a group of people interested or enjoying themselves.",
                "examples": [
                    "The clown entertained the children."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "entertained",
        "v3": "entertained",
        "opposite": "bore",
        "transcription": "ˌɛntərˈteɪn"
    },
    {
        "word": "escape",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "🏃",
        "form": "verb",
        "subtext": "escape from prison / lucky escape",
        "definitions": [
            {
                "text": "To get free from something, or to avoid something.",
                "examples": [
                    "They managed to escape from the burning building."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "escaped",
        "v3": "escaped",
        "opposite": "capture",
        "transcription": "ɪˈskeɪp"
    },
    {
        "word": "evaluate",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📊",
        "form": "verb",
        "subtext": "evaluate performance / evaluate results / evaluate a proposal",
        "definitions": [
            {
                "text": "To judge the quality or value of something.",
                "examples": [
                    "The manager evaluates each team member's performance annually."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "evaluated",
        "v3": "evaluated",
        "opposite": "ignore",
        "transcription": "ɪˈvæljueɪt"
    },
    {
        "word": "evolve",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "🧬",
        "form": "verb",
        "subtext": "slowly evolve / evolve into",
        "definitions": [
            {
                "text": "To develop gradually.",
                "examples": [
                    "Birds evolved from dinosaurs."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "evolved",
        "v3": "evolved",
        "opposite": "stagnate",
        "transcription": "🇬🇧 ɪˈvɒlv | 🇺🇸 ɪˈvɑːlv"
    },
    {
        "word": "examine",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "🔬",
        "form": "verb",
        "subtext": "examine a patient / examine a document",
        "synonyms": [
            "look at",
            "study"
        ],
        "definitions": [
            {
                "text": "To look at or consider a person or thing carefully in order to discover something about them.",
                "examples": [
                    "The doctor examined the child.",
                    "We need to examine the evidence."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "examined",
        "v3": "examined",
        "opposite": "ignore",
        "transcription": "ɪɡˈzæmɪn"
    },
    {
        "word": "excite",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🤩",
        "form": "verb",
        "subtext": "excite someone",
        "synonyms": [
            "exciting"
        ],
        "definitions": [
            {
                "text": "To make someone feel very happy and enthusiastic.",
                "examples": [
                    "The news excited the fans."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "excited",
        "v3": "excited",
        "opposite": "bore",
        "transcription": "ɪkˈsaɪt"
    },
    {
        "word": "exhale",
        "level": "elementary",
        "theme": "human_body_A2",
        "emoji": "🌬️",
        "form": "verb",
        "subtext": "exhale slowly",
        "definitions": [
            {
                "text": "To breathe out.",
                "examples": [
                    "Exhale slowly through your mouth."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "exhaled",
        "v3": "exhaled",
        "opposite": "inhale",
        "transcription": "ɛksˈheɪl"
    },
    {
        "word": "expand",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🎈",
        "form": "verb",
        "subtext": "expand a business",
        "definitions": [
            {
                "text": "To increase in size or amount.",
                "examples": [
                    "The company is expanding quickly."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "expanded",
        "v3": "expanded",
        "opposite": "shrink",
        "transcription": "ɪkˈspænd"
    },
    {
        "word": "expect",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💭",
        "form": "verb",
        "subtext": "expect a baby, expect someone to arrive",
        "definitions": [
            {
                "text": "To think that something will happen.",
                "examples": [
                    "I expect them to arrive soon."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "expected",
        "v3": "expected",
        "opposite": "doubt",
        "transcription": "ɪkˈspɛkt",
        "synonyms": [
            "wait for",
            "think"
        ]
    },
    {
        "word": "explore",
        "level": "elementary",
        "theme": "holiday_types_A2",
        "emoji": "🧭",
        "form": "verb",
        "subtext": "explore the city / explore options / explore nature",
        "definitions": [
            {
                "text": "To search and discover about something.",
                "examples": [
                    "We went to explore the old town.",
                    "Scientists are exploring the ocean floor."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "explored",
        "v3": "explored",
        "opposite": "ignore",
        "transcription": "ɪkˈsplɔːr",
        "synonyms": [
            "travel",
            "search"
        ]
    },
    {
        "word": "fail",
        "level": "elementary",
        "theme": "school_life_routines_A2",
        "emoji": "❌",
        "form": "verb",
        "subtext": "fail an exam / fail to do / fail a test / fail to meet a deadline",
        "definitions": [
            {
                "text": "To not succeed; to not do something required.",
                "examples": [
                    "She failed the first exam but passed the second attempt.",
                    "I failed my driving test three times."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "failed",
        "v3": "failed",
        "opposite": "succeed",
        "transcription": "feɪl",
        "synonyms": [
            "not pass"
        ]
    },
    {
        "word": "find out",
        "level": "elementary",
        "theme": "news_media_A2",
        "emoji": "🔎",
        "form": "verb",
        "subtext": "find out about / find out the truth / find out later",
        "definitions": [
            {
                "text": "To discover or learn information.",
                "examples": [
                    "She found out that the rent was going to increase."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "found out",
        "v3": "found out",
        "opposite": "hide",
        "transcription": "faɪnd aʊt"
    },
    {
        "word": "forgive",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "forgive someone / forgive a mistake / hard to forgive",
        "definitions": [
            {
                "text": "To stop feeling angry with someone for something they did.",
                "examples": [
                    "She eventually forgave him for the mistake."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "forgave",
        "v3": "forgiven",
        "opposite": "blame",
        "transcription": "fərˈɡɪv",
        "synonyms": [
            "pardon"
        ]
    },
    {
        "word": "freeze",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "❄️",
        "form": "verb",
        "subtext": "freeze water",
        "synonyms": [
            "turn to ice"
        ],
        "definitions": [
            {
                "text": "To become or cause to become hard because of extreme cold.",
                "examples": [
                    "The lake has frozen over."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "froze",
        "v3": "frozen",
        "opposite": "melt",
        "transcription": "friːz"
    },
    {
        "word": "give up",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏳️",
        "form": "verb",
        "subtext": "give up a job / give up smoking / give up trying",
        "definitions": [
            {
                "text": "To stop trying to do something; to quit.",
                "examples": [
                    "She gave up her job to start her own company."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "gave up",
        "v3": "given up",
        "opposite": "continue",
        "transcription": "ɡɪv ʌp"
    },
    {
        "word": "graduate",
        "level": "elementary",
        "theme": "qualifications_exams_A2",
        "emoji": "🎓",
        "form": "verb",
        "subtext": "graduate from university / graduate high school / recent graduate",
        "definitions": [
            {
                "text": "To complete a school, college, or university course.",
                "examples": [
                    "She graduated from Oxford last year.",
                    "My brother is graduating this summer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "graduated",
        "v3": "graduated",
        "opposite": "drop out",
        "transcription": "ˈɡrædʒueɪt"
    },
    {
        "word": "greet",
        "level": "elementary",
        "theme": "customs_traditions_A2",
        "emoji": "👋",
        "form": "verb",
        "subtext": "greet someone",
        "synonyms": [
            "welcome",
            "say hello"
        ],
        "definitions": [
            {
                "text": "To welcome someone with particular words or a particular action.",
                "examples": [
                    "She greeted me with a smile."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "greeted",
        "v3": "greeted",
        "opposite": "ignore",
        "transcription": "ɡriːt"
    },
    {
        "word": "guess",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🤔",
        "form": "verb",
        "subtext": "guess what / can you guess? / I guess so",
        "definitions": [
            {
                "text": "To give an answer to a particular question when you do not have all the facts and so cannot be certain if you are correct.",
                "examples": [
                    "Can you guess how old he is?",
                    "I guess she is about thirty."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "guessed",
        "v3": "guessed",
        "opposite": "know",
        "transcription": "ɡɛs",
        "synonyms": [
            "estimate"
        ]
    },
    {
        "word": "happen",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "⚡",
        "form": "verb",
        "subtext": "happen to someone / if it happens",
        "synonyms": [
            "occur",
            "take place"
        ],
        "definitions": [
            {
                "text": "To occur; to take place.",
                "examples": [
                    "What happened in the meeting? Everything went wrong."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "happened",
        "v3": "happened",
        "opposite": "stop",
        "transcription": "ˈhæpən"
    },
    {
        "word": "hire",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "hire someone / hire a team / hire for a role",
        "definitions": [
            {
                "text": "To formally take someone on as an employee.",
                "examples": [
                    "The company hired fifteen new people last quarter."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "hired",
        "v3": "hired",
        "opposite": "fire",
        "transcription": "ˈhaɪər",
        "synonyms": [
            "rent",
            "employ"
        ]
    },
    {
        "word": "identify",
        "level": "elementary",
        "theme": "personality_character_A2",
        "emoji": "🔎",
        "form": "verb",
        "subtext": "identify a problem / identify a suspect / identify as",
        "definitions": [
            {
                "text": "To recognize someone or something and say who or what they are.",
                "examples": [
                    "Can you identify the man in the photo?",
                    "The police identified the problem quickly."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "identified",
        "v3": "identified",
        "opposite": "ignore",
        "transcription": "aɪˈdɛntɪfaɪ",
        "synonyms": [
            "recognize"
        ]
    },
    {
        "word": "ignore",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🙈",
        "form": "verb",
        "subtext": "completely ignore",
        "definitions": [
            {
                "text": "To pay no attention to something or someone.",
                "examples": [
                    "I smiled at her but she ignored me."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ignored",
        "v3": "ignored",
        "opposite": "notice",
        "transcription": "ɪɡˈnɔːr",
        "synonyms": [
            "not listen to"
        ]
    },
    {
        "word": "imagine",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💭",
        "form": "verb",
        "subtext": "imagine that / can you imagine?",
        "definitions": [
            {
                "text": "To form a picture or idea in your mind.",
                "examples": [
                    "Imagine you are on a beach."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "imagined",
        "v3": "imagined",
        "opposite": "know",
        "transcription": "ɪˈmædʒɪn",
        "synonyms": [
            "think of"
        ]
    },
    {
        "word": "impress",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "✨",
        "form": "verb",
        "subtext": "impress someone",
        "synonyms": [
            "amaze"
        ],
        "definitions": [
            {
                "text": "To cause someone to admire or respect you.",
                "examples": [
                    "He tried to impress the manager."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "impressed",
        "v3": "impressed",
        "opposite": "disappoint",
        "transcription": "ɪmˈprɛs"
    },
    {
        "word": "improve",
        "level": "elementary",
        "theme": "school_life_routines_A2",
        "emoji": "📈",
        "form": "verb",
        "subtext": "improve your English / improve performance",
        "synonyms": [
            "get better"
        ],
        "definitions": [
            {
                "text": "To get better, or to make something better.",
                "examples": [
                    "I want to improve my speaking skills.",
                    "The weather is improving."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "improved",
        "v3": "improved",
        "opposite": "worsen",
        "transcription": "ɪmˈpruːv"
    },
    {
        "word": "improve skills",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📈",
        "form": "verb",
        "subtext": "improve performance, improve health, room for improvement",
        "synonyms": [
            "improve performance",
            "improve health",
            "room for improvement"
        ],
        "definitions": [
            {
                "text": "To become or make something better.",
                "examples": [
                    "She improved her public speaking skills significantly."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "improved skills",
        "v3": "improved skills",
        "opposite": "lose skills",
        "transcription": "ɪmˈpruːv skɪlz"
    },
    {
        "word": "include",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "➕",
        "form": "verb",
        "subtext": "include something / include in / price includes",
        "synonyms": [
            "contain"
        ],
        "definitions": [
            {
                "text": "To make something part of a whole.",
                "examples": [
                    "The price includes breakfast and evening meals."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "included",
        "v3": "included",
        "opposite": "exclude",
        "transcription": "ɪnˈkluːd"
    },
    {
        "word": "increase",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "📈",
        "form": "verb",
        "subtext": "increase in price / increase by ten percent / steady increase",
        "definitions": [
            {
                "text": "To become or make something larger in amount or size.",
                "examples": [
                    "The population is increasing.",
                    "We need to increase our sales."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "increased",
        "v3": "increased",
        "opposite": "decrease",
        "transcription": "ɪnˈkriːs",
        "synonyms": [
            "grow",
            "go up"
        ]
    },
    {
        "word": "inform",
        "level": "elementary",
        "theme": "news_media_A2",
        "emoji": "ℹ️",
        "form": "verb",
        "subtext": "inform someone",
        "synonyms": [
            "tell",
            "notify"
        ],
        "definitions": [
            {
                "text": "To tell someone about something.",
                "examples": [
                    "Please inform us of any changes."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "informed",
        "v3": "informed",
        "opposite": "mislead",
        "transcription": "ɪnˈfɔːrm"
    },
    {
        "word": "inhale",
        "level": "elementary",
        "theme": "human_body_A2",
        "emoji": "🫁",
        "form": "verb",
        "subtext": "inhale deeply",
        "definitions": [
            {
                "text": "To breathe in.",
                "examples": [
                    "Inhale deeply through your nose."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "inhaled",
        "v3": "inhaled",
        "opposite": "exhale",
        "transcription": "ɪnˈheɪl"
    },
    {
        "word": "injure",
        "level": "elementary",
        "theme": "health_body_A2",
        "emoji": "🤕",
        "form": "verb",
        "subtext": "get injured, injury",
        "synonyms": [
            "get injured",
            "injury"
        ],
        "definitions": [
            {
                "text": "To hurt yourself or someone else.",
                "examples": [
                    "He injured his leg while playing football."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "injured",
        "v3": "injured",
        "opposite": "heal",
        "transcription": "ˈɪndʒər"
    },
    {
        "word": "intend",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🎯",
        "form": "verb",
        "subtext": "intend to do",
        "definitions": [
            {
                "text": "To have as a plan or purpose.",
                "examples": [
                    "I intend to finish the project by Friday."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "intended",
        "v3": "intended",
        "opposite": "improvise",
        "transcription": "ɪnˈtɛnd",
        "synonyms": [
            "plan",
            "mean"
        ]
    },
    {
        "word": "interview",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "interview someone",
        "synonyms": [
            "talk to"
        ],
        "definitions": [
            {
                "text": "To ask someone questions in a formal meeting.",
                "examples": [
                    "They interviewed five candidates for the job."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "interviewed",
        "v3": "interviewed",
        "opposite": "ignore",
        "transcription": "ˈɪntərvjuː"
    },
    {
        "word": "invent",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "⚙️",
        "form": "verb",
        "subtext": "invent something",
        "synonyms": [
            "create",
            "make"
        ],
        "definitions": [
            {
                "text": "To design or create something that has never been made before.",
                "examples": [
                    "Who invented the telephone?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invented",
        "v3": "invented",
        "opposite": "copy",
        "transcription": "ɪnˈvɛnt"
    },
    {
        "word": "invest",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📈",
        "form": "verb",
        "subtext": "invest money / invest in",
        "definitions": [
            {
                "text": "To put money into something to make a profit.",
                "examples": [
                    "He invested all his savings in the company."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invested",
        "v3": "invested",
        "opposite": "spend",
        "transcription": "ɪnˈvɛst",
        "synonyms": [
            "put money in"
        ]
    },
    {
        "word": "kill",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "⚔️",
        "form": "verb",
        "subtext": "kill time, kill an insect",
        "definitions": [
            {
                "text": "To cause the death of someone or something.",
                "examples": [
                    "The cold weather killed the plants."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "killed",
        "v3": "killed",
        "opposite": "save",
        "transcription": "kɪl",
        "synonyms": [
            "die"
        ]
    },
    {
        "word": "lend",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "lend money / lend to someone / lend a hand",
        "definitions": [
            {
                "text": "To give something to someone temporarily.",
                "examples": [
                    "The bank refused to lend him more money."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "lent",
        "v3": "lent",
        "opposite": "borrow",
        "transcription": "lɛnd",
        "synonyms": [
            "give"
        ]
    },
    {
        "word": "log out",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "🚪",
        "form": "verb",
        "subtext": "log in to a system / log out / log in with a password",
        "definitions": [
            {
                "text": "To connect to or disconnect from a computer system.",
                "examples": [
                    "Please log out of the system when you leave the office."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "logged out",
        "v3": "logged out",
        "opposite": "log in",
        "transcription": "🇬🇧 lɒɡ aʊt | 🇺🇸 lɑːɡ aʊt"
    },
    {
        "word": "look after",
        "level": "elementary",
        "theme": "relationships_family_A2",
        "emoji": "👶",
        "form": "verb",
        "subtext": "look after someone / look after yourself / look after a child",
        "definitions": [
            {
                "text": "To take care of someone or something.",
                "examples": [
                    "He looks after his elderly mother at weekends."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "looked after",
        "v3": "looked after",
        "opposite": "neglect",
        "transcription": "lʊk ˈɑːftər"
    },
    {
        "word": "look for",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "🔍",
        "form": "verb",
        "subtext": "look for a job / look for something / look for a solution",
        "definitions": [
            {
                "text": "To try to find something.",
                "examples": [
                    "He is looking for a new job with better work-life balance."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "looked for",
        "v3": "looked for",
        "opposite": "find",
        "transcription": "lʊk fɔːr"
    },
    {
        "word": "lose weight",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "⚖️",
        "form": "verb",
        "subtext": "lose weight / lose a few kilos / trying to lose weight",
        "definitions": [
            {
                "text": "To become lighter; to reduce body weight.",
                "examples": [
                    "He lost ten kilos after changing his diet and lifestyle."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "lost weight",
        "v3": "lost weight",
        "opposite": "gain weight",
        "transcription": "luːz weɪt"
    },
    {
        "word": "measure",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "📏",
        "form": "verb",
        "subtext": "measure length / measure temperature / measure success",
        "definitions": [
            {
                "text": "To discover the exact size or amount of something.",
                "examples": [
                    "Measure the width of the window.",
                    "The nurse measured my height."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "measured",
        "v3": "measured",
        "opposite": "estimate",
        "transcription": "ˈmɛʒər",
        "synonyms": [
            "calculate"
        ]
    },
    {
        "word": "memorise",
        "level": "elementary",
        "theme": "school_life_routines_A2",
        "emoji": "🧠",
        "form": "verb",
        "subtext": "memorise words",
        "definitions": [
            {
                "text": "To learn something so that you remember it exactly.",
                "examples": [
                    "You need to memorise these irregular verbs."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "memorised",
        "v3": "memorised",
        "opposite": "forget",
        "transcription": "ˈmɛməraɪz",
        "synonyms": [
            "learn by heart"
        ]
    },
    {
        "word": "mention",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🗣️",
        "form": "verb",
        "subtext": "mention something / don't mention it",
        "synonyms": [
            "say"
        ],
        "definitions": [
            {
                "text": "To speak or write about something briefly.",
                "examples": [
                    "He mentioned that he was going to be late.",
                    "Did she mention the new project?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "mentioned",
        "v3": "mentioned",
        "opposite": "ignore",
        "transcription": "ˈmɛnʃən"
    },
    {
        "word": "multiply",
        "level": "elementary",
        "theme": "basic_arithmetic_A2",
        "emoji": "✖️",
        "form": "verb",
        "subtext": "multiply by",
        "synonyms": [
            "increase"
        ],
        "definitions": [
            {
                "text": "To add a number to itself a particular number of times.",
                "examples": [
                    "Two multiplied by three is six."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "multiplied",
        "v3": "multiplied",
        "opposite": "divide",
        "transcription": "ˈmʌltɪplaɪ"
    },
    {
        "word": "negotiate",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "negotiate a salary / negotiate terms / negotiate a deal",
        "definitions": [
            {
                "text": "To discuss something to reach an agreement.",
                "examples": [
                    "She negotiated a higher salary before signing the contract."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "negotiated",
        "v3": "negotiated",
        "opposite": "agree",
        "transcription": "nəˈɡoʊʃieɪt",
        "synonyms": [
            "discuss"
        ]
    },
    {
        "word": "notice",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "👀",
        "form": "verb",
        "subtext": "notice a difference / did you notice?",
        "synonyms": [
            "see",
            "hear"
        ],
        "definitions": [
            {
                "text": "To see or become aware of something.",
                "examples": [
                    "Did you notice the new office?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "noticed",
        "v3": "noticed",
        "opposite": "ignore",
        "transcription": "ˈnoʊtɪs"
    },
    {
        "word": "observe",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "🧐",
        "form": "verb",
        "subtext": "carefully observe",
        "definitions": [
            {
                "text": "To watch someone or something carefully.",
                "examples": [
                    "The scientists observed the animals for several weeks."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "observed",
        "v3": "observed",
        "opposite": "ignore",
        "transcription": "əbˈzɜːrv",
        "synonyms": [
            "watch",
            "see"
        ]
    },
    {
        "word": "offer",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤲",
        "form": "verb",
        "subtext": "offer a job, offer help",
        "definitions": [
            {
                "text": "To ask someone if they would like something.",
                "examples": [
                    "He offered me a coffee."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "offered",
        "v3": "offered",
        "opposite": "refuse",
        "transcription": "🇬🇧 ˈɒfər | 🇺🇸 ˈɑːfər",
        "synonyms": [
            "give"
        ]
    },
    {
        "word": "organize",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📂",
        "form": "verb",
        "subtext": "organize a meeting / organize a trip",
        "synonyms": [
            "plan",
            "arrange"
        ],
        "definitions": [
            {
                "text": "To make arrangements for something to happen.",
                "examples": [
                    "She is organizing the office party.",
                    "I need to organize my desk."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "organized",
        "v3": "organized",
        "opposite": "mess up",
        "transcription": "ˈɔːrɡənaɪz"
    },
    {
        "word": "owe",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💸",
        "form": "verb",
        "subtext": "owe money / owe someone / owe a lot / owe nothing",
        "definitions": [
            {
                "text": "To be required to pay money to someone.",
                "examples": [
                    "He owes the bank fifty thousand euros."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "owed",
        "v3": "owed",
        "opposite": "pay",
        "transcription": "oʊ",
        "synonyms": [
            "must pay"
        ]
    },
    {
        "word": "participate",
        "level": "elementary",
        "theme": "community_neighbourhood_local_A2",
        "emoji": "🙋",
        "form": "verb",
        "subtext": "participate in something / participate in a meeting / participate in a discussion",
        "synonyms": [
            "take part",
            "join"
        ],
        "definitions": [
            {
                "text": "To take part in or become involved in an activity.",
                "examples": [
                    "Everyone is encouraged to participate in the project.",
                    "She participated in the marathon."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "participated",
        "v3": "participated",
        "opposite": "withdraw",
        "transcription": "pɑːrˈtɪsɪpeɪt"
    },
    {
        "word": "perform",
        "level": "elementary",
        "theme": "theatre_performance_A2",
        "emoji": "🎭",
        "form": "verb",
        "subtext": "perform on stage / perform well / perform a task",
        "definitions": [
            {
                "text": "To entertain people by acting, singing, dancing, etc.",
                "examples": [
                    "The band performed their new song.",
                    "She performs in the local theatre."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "performed",
        "v3": "performed",
        "opposite": "watch",
        "transcription": "pərˈfɔːrm",
        "synonyms": [
            "act",
            "do"
        ]
    },
    {
        "word": "pollute",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🏭",
        "form": "verb",
        "subtext": "pollute the air / pollute the ocean",
        "definitions": [
            {
                "text": "To make water, air, or land dirty.",
                "examples": [
                    "Factories often pollute the environment."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "polluted",
        "v3": "polluted",
        "opposite": "clean",
        "transcription": "pəˈluːt"
    },
    {
        "word": "predict",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "🔮",
        "form": "verb",
        "subtext": "predict the future",
        "definitions": [
            {
                "text": "To say that an event or action will happen in the future.",
                "examples": [
                    "It's hard to predict the weather accurately."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "predicted",
        "v3": "predicted",
        "opposite": "recollect",
        "transcription": "prɪˈdɪkt",
        "synonyms": [
            "forecast",
            "guess"
        ]
    },
    {
        "word": "prevent",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🛡️",
        "form": "verb",
        "subtext": "prevent illness / prevent disease / take steps to prevent",
        "definitions": [
            {
                "text": "To stop something bad from happening.",
                "examples": [
                    "Exercise and diet can prevent many common illnesses."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "prevented",
        "v3": "prevented",
        "opposite": "cause",
        "transcription": "prɪˈvɛnt",
        "synonyms": [
            "stop"
        ]
    },
    {
        "word": "produce",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏭",
        "form": "verb",
        "subtext": "produce energy, produce goods / produce results",
        "definitions": [
            {
                "text": "To make or create something.",
                "examples": [
                    "The factory produces cars."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "produced",
        "v3": "produced",
        "opposite": "consume",
        "transcription": "prəˈdjuːs",
        "synonyms": [
            "make",
            "create"
        ]
    },
    {
        "word": "prohibit",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "🚫",
        "form": "verb",
        "subtext": "stop, not allow",
        "synonyms": [
            "stop",
            "not allow"
        ],
        "definitions": [
            {
                "text": "To officially forbid something.",
                "examples": [
                    "Smoking is prohibited in the building."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "prohibited",
        "v3": "prohibited",
        "opposite": "allow",
        "transcription": "prəˈhɪbɪt"
    },
    {
        "word": "promise",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "promise to / I promise",
        "definitions": [
            {
                "text": "To say that you will certainly do something.",
                "examples": [
                    "I promise to help you tomorrow."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "promised",
        "v3": "promised",
        "opposite": "lie",
        "transcription": "🇬🇧 ˈprɒmɪs | 🇺🇸 ˈprɑːmɪs",
        "synonyms": [
            "vow"
        ]
    },
    {
        "word": "promote",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📈",
        "form": "verb",
        "subtext": "promote someone / promote from within",
        "synonyms": [
            "advance"
        ],
        "definitions": [
            {
                "text": "To move an employee to a higher position.",
                "examples": [
                    "He was promoted to senior manager after two years."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "promoted",
        "v3": "promoted",
        "opposite": "demote",
        "transcription": "prəˈmoʊt"
    },
    {
        "word": "protect",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🛡️",
        "form": "verb",
        "subtext": "protect the environment / protect wildlife / protect from harm",
        "definitions": [
            {
                "text": "To keep someone or something safe from injury, damage, or loss.",
                "examples": [
                    "We must protect the forest.",
                    "Sunglasses protect your eyes from the sun."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "protected",
        "v3": "protected",
        "opposite": "damage",
        "transcription": "prəˈtɛkt",
        "synonyms": [
            "save",
            "guard"
        ]
    },
    {
        "word": "provide",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🤲",
        "form": "verb",
        "subtext": "provide support / provide information / provide a service",
        "definitions": [
            {
                "text": "To give or supply something to someone.",
                "examples": [
                    "The company provides all employees with a laptop."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "provided",
        "v3": "provided",
        "opposite": "take",
        "transcription": "prəˈvaɪd",
        "synonyms": [
            "give",
            "supply"
        ]
    },
    {
        "word": "put off",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⏳",
        "form": "verb",
        "subtext": "put off a meeting / put off a decision / stop putting things off",
        "definitions": [
            {
                "text": "To postpone something to a later time.",
                "examples": [
                    "He keeps putting off the conversation about his salary."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "put off",
        "v3": "put off",
        "opposite": "do now",
        "transcription": "🇬🇧 pʊt ɒf | 🇺🇸 pʊt ɑːf"
    },
    {
        "word": "reach",
        "level": "elementary",
        "theme": "booking_planning_a_trip_A2",
        "emoji": "🏁",
        "form": "verb",
        "subtext": "reach the top, reach an agreement",
        "definitions": [
            {
                "text": "To arrive at a place or a level.",
                "examples": [
                    "We reached the hotel late at night."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reached",
        "v3": "reached",
        "opposite": "miss",
        "transcription": "riːtʃ",
        "synonyms": [
            "arrive at"
        ]
    },
    {
        "word": "react",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "🧪",
        "form": "verb",
        "subtext": "react to",
        "synonyms": [
            "respond"
        ],
        "definitions": [
            {
                "text": "To act in a particular way because of something that has happened.",
                "examples": [
                    "How did he react to the news?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reacted",
        "v3": "reacted",
        "opposite": "ignore",
        "transcription": "riˈækt"
    },
    {
        "word": "realize",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💡",
        "form": "verb",
        "subtext": "suddenly realize",
        "definitions": [
            {
                "text": "To understand a situation, sometimes suddenly.",
                "examples": [
                    "I suddenly realized that I had left my keys at home."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "realized",
        "v3": "realized",
        "opposite": "misunderstand",
        "transcription": "ˈriːəlaɪz",
        "synonyms": [
            "understand",
            "know"
        ]
    },
    {
        "word": "recommend",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "👍",
        "form": "verb",
        "subtext": "recommend a book / recommend a restaurant",
        "synonyms": [
            "suggest"
        ],
        "definitions": [
            {
                "text": "To suggest that someone or something would be good or suitable for a particular job or purpose.",
                "examples": [
                    "Can you recommend a good hotel?",
                    "I recommend this book to everyone."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recommended",
        "v3": "recommended",
        "opposite": "warn against",
        "transcription": "ˌrɛkəˈmɛnd"
    },
    {
        "word": "record",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "⏺️",
        "form": "verb",
        "subtext": "record a video / record a song",
        "definitions": [
            {
                "text": "To store sounds or pictures using electronic equipment.",
                "examples": [
                    "She is recording a video of the party."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recorded",
        "v3": "recorded",
        "opposite": "delete",
        "transcription": "ˈrɛkɔːrd",
        "synonyms": [
            "note",
            "save"
        ]
    },
    {
        "word": "recover",
        "level": "elementary",
        "theme": "human_body_A2",
        "emoji": "🩹",
        "form": "verb",
        "subtext": "recover from illness / recover quickly / recover fully",
        "definitions": [
            {
                "text": "To return to good health after illness or injury.",
                "examples": [
                    "She is recovering from a back injury."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recovered",
        "v3": "recovered",
        "opposite": "get sick",
        "transcription": "rɪˈkʌvər",
        "synonyms": [
            "get well",
            "get better"
        ]
    },
    {
        "word": "recycle",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "♻️",
        "form": "verb",
        "subtext": "recycle paper, recycle bins",
        "definitions": [
            {
                "text": "To process used materials so they can be used again.",
                "examples": [
                    "We recycle paper and glass."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recycled",
        "v3": "recycled",
        "opposite": "waste",
        "transcription": "ˌriːˈsaɪkl",
        "synonyms": [
            "reuse"
        ]
    },
    {
        "word": "reduce",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📉",
        "form": "verb",
        "subtext": "reduce costs / reduce stress / significantly reduce",
        "definitions": [
            {
                "text": "To make something smaller in size or amount.",
                "examples": [
                    "They reduced the team from twelve to eight members."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reduced",
        "v3": "reduced",
        "opposite": "increase",
        "transcription": "rɪˈdjuːs",
        "synonyms": [
            "decrease",
            "cut"
        ]
    },
    {
        "word": "refuse",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "❌",
        "form": "verb",
        "subtext": "refuse an offer / refuse to do / refuse permission",
        "definitions": [
            {
                "text": "To say no to something; to decline.",
                "examples": [
                    "He refused to sign the contract without legal advice."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "refused",
        "v3": "refused",
        "opposite": "accept",
        "transcription": "rɪˈfjuːz",
        "synonyms": [
            "say no",
            "reject"
        ]
    },
    {
        "word": "remain",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "⏳",
        "form": "verb",
        "subtext": "remain calm, remain at home",
        "definitions": [
            {
                "text": "To stay in the same place or condition.",
                "examples": [
                    "Please remain seated until the plane stops."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "remained",
        "v3": "remained",
        "opposite": "change",
        "transcription": "rɪˈmeɪn",
        "synonyms": [
            "stay"
        ]
    },
    {
        "word": "repair",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🔧",
        "form": "verb",
        "subtext": "repair something / carry out repairs / repair costs",
        "definitions": [
            {
                "text": "To fix something that is broken or not working.",
                "examples": [
                    "The landlord is slow to repair things in the flat."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "repaired",
        "v3": "repaired",
        "opposite": "break",
        "transcription": "rɪˈpɛər",
        "synonyms": [
            "fix"
        ]
    },
    {
        "word": "replace",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🔄",
        "form": "verb",
        "subtext": "replace something / replace someone",
        "synonyms": [
            "change"
        ],
        "definitions": [
            {
                "text": "To take the place of someone or something.",
                "examples": [
                    "The new software will replace the old system next year."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "replaced",
        "v3": "replaced",
        "opposite": "keep",
        "transcription": "rɪˈpleɪs"
    },
    {
        "word": "require",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "📜",
        "form": "verb",
        "subtext": "require help, require a passport",
        "definitions": [
            {
                "text": "To need something.",
                "examples": [
                    "This job requires a lot of travel."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "required",
        "v3": "required",
        "opposite": "lack",
        "transcription": "rɪˈkwaɪər",
        "synonyms": [
            "need"
        ]
    },
    {
        "word": "reserve",
        "level": "elementary",
        "theme": "accommodation_A2",
        "emoji": "🛎️",
        "form": "verb",
        "subtext": "reserve a room / reserve a table / reserve a seat",
        "definitions": [
            {
                "text": "To keep something for a particular person or purpose.",
                "examples": [
                    "I'd like to reserve a table for two.",
                    "The seats are reserved for elderly passengers."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reserved",
        "v3": "reserved",
        "opposite": "cancel",
        "transcription": "rɪˈzɜːrv",
        "synonyms": [
            "book"
        ]
    },
    {
        "word": "resign",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🚪",
        "form": "verb",
        "subtext": "resign from a job / resign formally / hand in your resignation",
        "definitions": [
            {
                "text": "To formally leave a job by choice.",
                "examples": [
                    "She resigned after disagreeing with the new strategy."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "resigned",
        "v3": "resigned",
        "opposite": "join",
        "transcription": "rɪˈzaɪn",
        "synonyms": [
            "quit",
            "leave"
        ]
    },
    {
        "word": "retire",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👴",
        "form": "verb",
        "subtext": "retire from work, early retirement",
        "definitions": [
            {
                "text": "To stop working because you have reached a certain age.",
                "examples": [
                    "My father will retire next year."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "retired",
        "v3": "retired",
        "opposite": "work",
        "transcription": "rɪˈtaɪər",
        "synonyms": [
            "stop working"
        ]
    },
    {
        "word": "schedule",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📅",
        "form": "verb",
        "subtext": "schedule a meeting / schedule time / schedule a call",
        "definitions": [
            {
                "text": "To arrange a time for something to happen.",
                "examples": [
                    "Can we schedule a meeting for Thursday afternoon?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "scheduled",
        "v3": "scheduled",
        "opposite": "cancel",
        "transcription": "ˈskɛdʒuːl"
    },
    {
        "word": "search",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "🔍",
        "form": "verb",
        "subtext": "search online / search for / search the web",
        "definitions": [
            {
                "text": "To look for something carefully.",
                "examples": [
                    "I searched for my keys everywhere.",
                    "You can search the database for more information."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "searched",
        "v3": "searched",
        "opposite": "find",
        "transcription": "sɜːrtʃ",
        "synonyms": [
            "look for",
            "find"
        ]
    },
    {
        "word": "seem",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🤔",
        "form": "verb",
        "subtext": "seem happy, seem like a good idea, seem worried",
        "definitions": [
            {
                "text": "To give the impression of being something; to appear to be.",
                "examples": [
                    "You seem tired today.",
                    "She seems very confident in client meetings."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "seemed",
        "v3": "seemed",
        "opposite": "be",
        "transcription": "siːm",
        "synonyms": [
            "appear"
        ]
    },
    {
        "word": "serve",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "emoji": "🍽️",
        "form": "verb",
        "subtext": "serve food, serve a purpose",
        "definitions": [
            {
                "text": "To provide food or a service.",
                "examples": [
                    "They serve breakfast until 11 am."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "served",
        "v3": "served",
        "opposite": "wait",
        "transcription": "sɜːrv",
        "synonyms": [
            "give",
            "help"
        ]
    },
    {
        "word": "set up",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏗️",
        "form": "verb",
        "subtext": "set up a business / set up a meeting / set up an account",
        "definitions": [
            {
                "text": "To start or establish something.",
                "examples": [
                    "He set up his own consulting business at the age of thirty."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "set up",
        "v3": "set up",
        "opposite": "close down",
        "transcription": "sɛt ʌp"
    },
    {
        "word": "solve",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🧩",
        "form": "verb",
        "subtext": "solve a problem / solve a riddle",
        "synonyms": [
            "fix",
            "resolve"
        ],
        "definitions": [
            {
                "text": "To find an answer to a problem.",
                "examples": [
                    "He solved the mystery.",
                    "We need to solve this problem quickly."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "solved",
        "v3": "solved",
        "opposite": "complicate",
        "transcription": "🇬🇧 sɒlv | 🇺🇸 sɑːlv"
    },
    {
        "word": "sort out",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🔧",
        "form": "verb",
        "subtext": "sort out a problem / sort out a situation",
        "synonyms": [
            "sort something out"
        ],
        "definitions": [
            {
                "text": "To resolve a problem or deal with something.",
                "examples": [
                    "Can you sort out the problem with the contract?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sorted out",
        "v3": "sorted out",
        "opposite": "mess up",
        "transcription": "sɔːrt aʊt"
    },
    {
        "word": "succeed",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏆",
        "form": "verb",
        "subtext": "succeed in doing / succeed at something / succeed against the odds",
        "definitions": [
            {
                "text": "To achieve what you set out to do.",
                "examples": [
                    "He succeeded in closing the deal after three months."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "succeeded",
        "v3": "succeeded",
        "opposite": "fail",
        "transcription": "səkˈsiːd",
        "synonyms": [
            "win",
            "do well"
        ]
    },
    {
        "word": "suffer",
        "level": "elementary",
        "theme": "human_body_A2",
        "emoji": "🤕",
        "form": "verb",
        "subtext": "suffer from / suffer pain / suffer stress",
        "definitions": [
            {
                "text": "To experience pain or distress.",
                "examples": [
                    "She suffers from chronic back pain due to desk work."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "suffered",
        "v3": "suffered",
        "opposite": "enjoy",
        "transcription": "ˈsʌfər",
        "synonyms": [
            "be in pain"
        ]
    },
    {
        "word": "suggest",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💡",
        "form": "verb",
        "subtext": "suggest an idea / let me suggest",
        "definitions": [
            {
                "text": "To mention an idea or a plan for someone to consider.",
                "examples": [
                    "Can you suggest a good restaurant?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "suggested",
        "v3": "suggested",
        "opposite": "demand",
        "transcription": "səˈdʒɛst",
        "synonyms": [
            "recommend",
            "advise"
        ]
    },
    {
        "word": "support",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "support someone / support a decision / offer support",
        "definitions": [
            {
                "text": "To help and encourage someone through difficulties.",
                "examples": [
                    "He supports his partner during a difficult period at work."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "supported",
        "v3": "supported",
        "opposite": "oppose",
        "transcription": "səˈpɔːrt",
        "synonyms": [
            "help",
            "encourage"
        ]
    },
    {
        "word": "swallow",
        "level": "elementary",
        "theme": "human_body_A2",
        "emoji": "👅",
        "form": "verb",
        "subtext": "hard to swallow",
        "definitions": [
            {
                "text": "To make food or drink go down your throat.",
                "examples": [
                    "Drink some water to help you swallow the pill."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "swallowed",
        "v3": "swallowed",
        "opposite": "spit out",
        "transcription": "🇬🇧 ˈswɒloʊ | 🇺🇸 ˈswɑːloʊ",
        "synonyms": [
            "eat"
        ]
    },
    {
        "word": "take on",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💪",
        "form": "verb",
        "subtext": "take on responsibility / take on extra work / take on a project",
        "definitions": [
            {
                "text": "To accept a responsibility or piece of work.",
                "examples": [
                    "He took on a second job to pay off the mortgage faster."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "took on",
        "v3": "taken on",
        "opposite": "refuse",
        "transcription": "🇬🇧 teɪk ɒn | 🇺🇸 teɪk ɑːn"
    },
    {
        "word": "transfer",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "📲",
        "form": "verb",
        "subtext": "transfer money / transfer funds / bank transfer",
        "definitions": [
            {
                "text": "To move money from one account to another.",
                "examples": [
                    "She transferred the rent to the landlord's account."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "transferred",
        "v3": "transferred",
        "opposite": "keep",
        "transcription": "trænsˈfɜːr",
        "synonyms": [
            "move",
            "send"
        ]
    },
    {
        "word": "treat",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🩹",
        "form": "verb",
        "subtext": "treat a patient / treat an illness / treat with medicine",
        "definitions": [
            {
                "text": "To give medical care to someone who is ill or injured.",
                "examples": [
                    "The specialist treated his knee injury with physiotherapy."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "treated",
        "v3": "treated",
        "opposite": "neglect",
        "transcription": "triːt",
        "synonyms": [
            "handle"
        ]
    },
    {
        "word": "trust",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "trust someone / trust your instincts / trust a process",
        "definitions": [
            {
                "text": "To have confidence in someone's honesty and reliability.",
                "examples": [
                    "She trusts her business partner completely."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "trusted",
        "v3": "trusted",
        "opposite": "doubt",
        "transcription": "trʌst",
        "synonyms": [
            "believe"
        ]
    },
    {
        "word": "turn down",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "👎",
        "form": "verb",
        "subtext": "turn down an offer / turn down a job / turn down a request",
        "definitions": [
            {
                "text": "To refuse an offer or request.",
                "examples": [
                    "She turned down the job because the salary was too low."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned down",
        "v3": "turned down",
        "opposite": "accept",
        "transcription": "tɜːrn daʊn"
    },
    {
        "word": "vote",
        "level": "elementary",
        "theme": "society_politics_A2",
        "emoji": "🗳️",
        "form": "verb",
        "subtext": "vote for / vote against",
        "definitions": [
            {
                "text": "To make an official choice in an election.",
                "examples": [
                    "I am going to vote for the green candidate."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "voted",
        "v3": "voted",
        "opposite": "abstain",
        "transcription": "voʊt"
    },
    {
        "word": "withdraw",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "🏧",
        "form": "verb",
        "subtext": "withdraw cash / withdraw from an account / withdraw funds",
        "definitions": [
            {
                "text": "To take money out of a bank account.",
                "examples": [
                    "I withdraw cash every Monday for the week."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "withdrew",
        "v3": "withdrawn",
        "opposite": "deposit",
        "transcription": "wɪðˈdrɔː",
        "synonyms": [
            "take out",
            "remove"
        ]
    },
    {
        "word": "wonder",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💭",
        "form": "verb",
        "subtext": "I wonder why / wonder if",
        "synonyms": [
            "think about"
        ],
        "definitions": [
            {
                "text": "To ask yourself questions or express a wish to know about something.",
                "examples": [
                    "I wonder why she is late.",
                    "I was wondering if you could help me."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "wondered",
        "v3": "wondered",
        "opposite": "know",
        "transcription": "ˈwʌndər"
    },
    {
        "word": "insist",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🗣️",
        "form": "verb",
        "definitions": [
            {
                "text": "To say firmly that something is true, especially when other people do not believe you.",
                "examples": [
                    "She insisted that she was innocent.",
                    "He insisted on paying for the dinner."
                ]
            }
        ],
        "subtext": "demand",
        "synonyms": [
            "demand"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "insisted",
        "v3": "insisted",
        "opposite": "give in",
        "transcription": "ɪnˈsɪst"
    },
    {
        "word": "interrupt",
        "level": "elementary",
        "theme": "language_communication_A2",
        "emoji": "🚫🗣️",
        "form": "verb",
        "definitions": [
            {
                "text": "To stop someone from speaking by saying or doing something.",
                "examples": [
                    "Please don't interrupt when I am speaking.",
                    "The rain interrupted the game."
                ]
            }
        ],
        "subtext": "stop",
        "synonyms": [
            "stop"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "interrupted",
        "v3": "interrupted",
        "opposite": "continue",
        "transcription": "ˌɪntəˈrʌpt"
    },
    {
        "word": "involve",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "To include someone or something in an activity.",
                "examples": [
                    "The project involves a lot of work.",
                    "We want to involve more people in the project."
                ]
            }
        ],
        "subtext": "include",
        "synonyms": [
            "include"
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "involved",
        "v3": "involved",
        "opposite": "exclude",
        "transcription": "🇬🇧 ɪnˈvɒlv | 🇺🇸 ɪnˈvɑːlv"
    },
    {
        "word": "obtain",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📥",
        "form": "verb",
        "definitions": [
            {
                "text": "To get something, especially by making an effort.",
                "examples": [
                    "He obtained a degree from Oxford.",
                    "You need to obtain permission first."
                ]
            }
        ],
        "subtext": "get, receive",
        "synonyms": [
            "get",
            "receive"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "obtained",
        "v3": "obtained",
        "opposite": "lose",
        "transcription": "əbˈteɪn"
    },
    {
        "word": "occur",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "⚡",
        "form": "verb",
        "definitions": [
            {
                "text": "To happen, especially unexpectedly.",
                "examples": [
                    "The accident occurred at midnight.",
                    "Complications occurred during the surgery."
                ]
            }
        ],
        "subtext": "happen",
        "synonyms": [
            "happen"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "occurred",
        "v3": "occurred",
        "opposite": "stop",
        "transcription": "əˈkɜːr"
    },
    {
        "word": "operate",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⚙️",
        "form": "verb",
        "definitions": [
            {
                "text": "To work or cause a machine to work.",
                "examples": [
                    "Do you know how to operate this machine?",
                    "The company operates in three countries."
                ]
            }
        ],
        "subtext": "run, work",
        "synonyms": [
            "run",
            "work"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "operated",
        "v3": "operated",
        "opposite": "break down",
        "transcription": "🇬🇧 ˈɒpəreɪt | 🇺🇸 ˈɑːpəreɪt"
    },
    {
        "word": "persuade",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🗣️",
        "form": "verb",
        "definitions": [
            {
                "text": "To make someone do or believe something by giving them a good reason to do it.",
                "examples": [
                    "I persuaded him to come with us.",
                    "She managed to persuade the manager."
                ]
            }
        ],
        "subtext": "convince",
        "synonyms": [
            "convince"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "persuaded",
        "v3": "persuaded",
        "opposite": "dissuade",
        "transcription": "pərˈsweɪd"
    },
    {
        "word": "publish",
        "level": "elementary",
        "theme": "news_media_A2",
        "emoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "To make information available to the public in a book, magazine, or website.",
                "examples": [
                    "The company publishes three newspapers.",
                    "The results will be published next week."
                ]
            }
        ],
        "subtext": "print, release",
        "synonyms": [
            "print",
            "release"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "published",
        "v3": "published",
        "opposite": "hide",
        "transcription": "ˈpʌblɪʃ"
    },
    {
        "word": "recognize",
        "level": "elementary",
        "theme": "personality_character_A2",
        "emoji": "👁️",
        "form": "verb",
        "definitions": [
            {
                "text": "To know someone or something because you have seen or heard them before.",
                "examples": [
                    "I recognized him from his photo.",
                    "She recognized the tune immediately."
                ]
            }
        ],
        "subtext": "know, identify",
        "synonyms": [
            "know",
            "identify"
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "recognized",
        "v3": "recognized",
        "opposite": "forget",
        "transcription": "ˈrɛkəɡnaɪz"
    },
    {
        "word": "reflect",
        "level": "elementary",
        "theme": "art_design_A2",
        "emoji": "🪞",
        "form": "verb",
        "definitions": [
            {
                "text": "To send back light, heat, or sound from a surface.",
                "examples": [
                    "The water reflected the sunlight.",
                    "The mirror reflected her face."
                ]
            }
        ],
        "subtext": "show",
        "synonyms": [
            "show"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reflected",
        "v3": "reflected",
        "opposite": "absorb",
        "transcription": "rɪˈflɛkt"
    },
    {
        "word": "release",
        "level": "elementary",
        "theme": "news_media_A2",
        "emoji": "🔓",
        "form": "verb",
        "definitions": [
            {
                "text": "To allow someone or something to leave a place; or to make something public.",
                "examples": [
                    "The police released the man without charge.",
                    "The company released a new app today."
                ]
            }
        ],
        "subtext": "let go, free",
        "synonyms": [
            "let go",
            "free"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "released",
        "v3": "released",
        "opposite": "capture",
        "transcription": "rɪˈliːs"
    },
    {
        "word": "rely",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "To trust or depend on someone or something.",
                "examples": [
                    "You can rely on me.",
                    "Many people rely on public transport."
                ]
            }
        ],
        "subtext": "rely on someone/something",
        "synonyms": [
            "depend"
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "relied",
        "v3": "relied",
        "opposite": "distrust",
        "transcription": "rɪˈlaɪ"
    },
    {
        "word": "remind",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🎗️",
        "form": "verb",
        "definitions": [
            {
                "text": "To make someone remember something.",
                "examples": [
                    "Remind me to call her.",
                    "This song reminds me of my childhood."
                ]
            }
        ],
        "subtext": "tell again",
        "synonyms": [
            "tell again"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reminded",
        "v3": "reminded",
        "opposite": "forget",
        "transcription": "rɪˈmaɪnd"
    },
    {
        "word": "remove",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🗑️",
        "form": "verb",
        "definitions": [
            {
                "text": "To take something away.",
                "examples": [
                    "Please remove your shoes.",
                    "They removed the old furniture."
                ]
            }
        ],
        "subtext": "take away, delete",
        "synonyms": [
            "take away",
            "delete"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "removed",
        "v3": "removed",
        "opposite": "add",
        "transcription": "rɪˈmuːv"
    },
    {
        "word": "represent",
        "level": "elementary",
        "theme": "society_politics_A2",
        "emoji": "👔",
        "form": "verb",
        "definitions": [
            {
                "text": "To speak or act for someone else.",
                "examples": [
                    "He represents the local community.",
                    "The lawyer represents the defendant."
                ]
            }
        ],
        "subtext": "stand for",
        "synonyms": [
            "stand for"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "represented",
        "v3": "represented",
        "opposite": "oppose",
        "transcription": "ˌrɛprɪˈzɛnt"
    },
    {
        "word": "request",
        "level": "elementary",
        "theme": "language_communication_A2",
        "emoji": "📧",
        "form": "verb",
        "definitions": [
            {
                "text": "To politely ask for something.",
                "examples": [
                    "They requested more information.",
                    "He requested a meeting with the manager."
                ]
            }
        ],
        "subtext": "ask for",
        "synonyms": [
            "ask for"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "requested",
        "v3": "requested",
        "opposite": "command",
        "transcription": "rɪˈkwɛst"
    },
    {
        "word": "rescue",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🚁",
        "form": "verb",
        "definitions": [
            {
                "text": "To save someone from a dangerous or unpleasant situation.",
                "examples": [
                    "The firefighters rescued the cat from the tree.",
                    "They were rescued from the sinking boat."
                ]
            }
        ],
        "subtext": "save",
        "synonyms": [
            "save"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "rescued",
        "v3": "rescued",
        "opposite": "abandon",
        "transcription": "ˈrɛskjuː"
    },
    {
        "word": "resolve",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🧩",
        "form": "verb",
        "definitions": [
            {
                "text": "To find an answer or solution to a problem.",
                "examples": [
                    "We need to resolve this issue quickly.",
                    "They finally resolved their disagreement."
                ]
            }
        ],
        "subtext": "solve, fix",
        "synonyms": [
            "solve",
            "fix"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "resolved",
        "v3": "resolved",
        "opposite": "complicate",
        "transcription": "🇬🇧 rɪˈzɒlv | 🇺🇸 rɪˈzɑːlv"
    },
    {
        "word": "respond",
        "level": "elementary",
        "theme": "language_communication_A2",
        "emoji": "💬",
        "form": "verb",
        "definitions": [
            {
                "text": "To say or do something as an answer or reaction to something that has been said or done.",
                "examples": [
                    "I asked him a question but he didn't respond.",
                    "The government responded to the crisis quickly."
                ]
            }
        ],
        "subtext": "respond to an email / respond to someone",
        "synonyms": [
            "answer",
            "reply"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "responded",
        "v3": "responded",
        "opposite": "ignore",
        "transcription": "🇬🇧 rɪˈspɒnd | 🇺🇸 rɪˈspɑːnd"
    },
    {
        "word": "rehearse",
        "level": "elementary",
        "theme": "theatre_performance_A2",
        "emoji": "🎭",
        "form": "verb",
        "v2": "rehearsed",
        "v3": "rehearsed",
        "opposite": "perform",
        "definitions": [
            {
                "text": "To practice a play, piece of music, etc. in order to prepare it for performance.",
                "examples": [
                    "The orchestra is rehearsing for the concert.",
                    "They have been rehearsing the play for months."
                ]
            }
        ],
        "subtext": "practice",
        "synonyms": [
            "practice"
        ],
        "classification": "regular",
        "transcription": "rɪˈhɜːrs"
    },
    {
        "word": "applaud",
        "level": "elementary",
        "theme": "theatre_performance_A2",
        "emoji": "👏",
        "form": "verb",
        "v2": "applauded",
        "v3": "applauded",
        "opposite": null,
        "definitions": [
            {
                "text": "To show approval of something by clapping your hands.",
                "examples": [
                    "The audience applauded for several minutes.",
                    "The teacher applauded the students' efforts."
                ]
            }
        ],
        "subtext": "clap, cheer",
        "synonyms": [
            "clap",
            "cheer"
        ],
        "classification": "regular",
        "transcription": "əˈplɔːd"
    },
    {
        "word": "check in",
        "level": "elementary",
        "theme": "at_the_airport_A2",
        "emoji": "🏢",
        "form": "verb",
        "v2": "checked in",
        "v3": "checked in",
        "opposite": "check out",
        "definitions": [
            {
                "text": "To report your arrival at an airport or hotel.",
                "examples": [
                    "You need to check in two hours before the flight.",
                    "We checked in at the hotel at 3 pm."
                ]
            }
        ],
        "subtext": "register arrival",
        "synonyms": [
            "register arrival"
        ],
        "classification": "regular",
        "transcription": "tʃɛk ɪn"
    },
    {
        "word": "overtake",
        "level": "elementary",
        "theme": "driving_roads_A2",
        "emoji": "🏎️",
        "form": "verb",
        "v2": "overtook",
        "v3": "overtaken",
        "opposite": null,
        "definitions": [
            {
                "text": "To come from behind another vehicle and go past it.",
                "examples": [
                    "It's dangerous to overtake on a corner.",
                    "He overtook the slow truck."
                ]
            }
        ],
        "subtext": "pass",
        "synonyms": [
            "pass"
        ],
        "classification": "irregular",
        "transcription": "ˌoʊvərˈteɪk"
    },
    {
        "word": "break up",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "💔",
        "form": "verb",
        "v2": "broke up",
        "v3": "broken up",
        "opposite": "get together",
        "definitions": [
            {
                "text": "To end a romantic relationship.",
                "examples": [
                    "They broke up after three years together.",
                    "She's very sad because they just broke up."
                ]
            }
        ],
        "subtext": "end relationship, separate",
        "synonyms": [
            "end relationship",
            "separate"
        ],
        "classification": "irregular",
        "transcription": "breɪk ʌp"
    },
    {
        "word": "check out",
        "level": "elementary",
        "theme": "accommodation_A2",
        "emoji": "🚪",
        "form": "verb",
        "v2": "checked out",
        "v3": "checked out",
        "opposite": "check in",
        "definitions": [
            {
                "text": "To leave a hotel after paying the bill.",
                "examples": [
                    "We need to check out before 11 am.",
                    "They checked out of the hotel this morning."
                ]
            }
        ],
        "subtext": "register departure",
        "synonyms": [
            "register departure"
        ],
        "classification": "regular",
        "transcription": "tʃɛk aʊt"
    }
];
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();