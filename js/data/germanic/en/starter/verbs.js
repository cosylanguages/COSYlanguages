(function() {
    const data = [
    {
        "word": "be",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👤",
        "subtext": "be tired / be happy / be at work / be ready",
        "form": "verb",
        "definitions": [
            {
                "text": "To exist; to have a quality or state.",
                "examples": [
                    "I am tired. She is a doctor. We are late."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "was/were",
        "v3": "been"
    },
    {
        "word": "have",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👜",
        "subtext": "have a job / have lunch / have a problem / have time",
        "form": "verb",
        "definitions": [
            {
                "text": "To possess something; to experience something.",
                "examples": [
                    "I have a job. He has a car. She has a headache."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "had",
        "v3": "had"
    },
    {
        "word": "do",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "subtext": "do work / do the shopping / do exercise / do nothing",
        "form": "verb",
        "definitions": [
            {
                "text": "To perform an action or activity.",
                "examples": [
                    "I do my work every day. She does the shopping."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "did",
        "v3": "done"
    },
    {
        "word": "go",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "subtext": "go to work / go home / go out / go shopping",
        "form": "verb",
        "definitions": [
            {
                "text": "To move from one place to another.",
                "examples": [
                    "I go to work by bus. She goes to the doctor."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "went",
        "v3": "gone"
    },
    {
        "word": "come",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🏃‍♂️",
        "subtext": "come home / come to work / come back / come here",
        "opposite": "go",
        "oppositeEmoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "To move towards a place or person.",
                "examples": [
                    "He comes to the office at nine. She comes home late."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "came",
        "v3": "come"
    },
    {
        "word": "eat",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍎",
        "subtext": "eat breakfast / eat lunch / eat dinner / eat out",
        "opposite": "drink",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "To put food in your mouth and swallow it.",
                "examples": [
                    "We eat dinner at seven. He eats lunch at his desk."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ate",
        "v3": "eaten"
    },
    {
        "word": "drink",
        "level": "starter",
        "theme": "drinks_A0",
        "emoji": "🥛",
        "subtext": "drink coffee / drink tea / drink water / drink beer",
        "opposite": "eat",
        "oppositeEmoji": "🍎",
        "form": "verb",
        "definitions": [
            {
                "text": "To take liquid into your mouth and swallow it.",
                "examples": [
                    "She drinks coffee every morning. I drink water."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drank",
        "v3": "drunk"
    },
    {
        "word": "sleep",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "😴",
        "subtext": "sleep well / sleep badly / sleep eight hours / sleep late",
        "opposite": "wake up",
        "oppositeEmoji": "⏰",
        "form": "verb",
        "definitions": [
            {
                "text": "To rest with your eyes closed in a natural state of unconsciousness.",
                "examples": [
                    "He sleeps seven hours a night. I sleep badly."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "slept",
        "v3": "slept"
    },
    {
        "word": "work",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "work from home / work full-time / work hard / work late",
        "form": "verb",
        "definitions": [
            {
                "text": "To do a job in order to earn money.",
                "examples": [
                    "She works in a hospital. I work from home."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "worked",
        "v3": "worked"
    },
    {
        "word": "live",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "🏠",
        "subtext": "live in a flat / live alone / live with someone / live abroad",
        "opposite": "die",
        "oppositeEmoji": "⚰️",
        "form": "verb",
        "definitions": [
            {
                "text": "To have your home in a place; to be alive.",
                "examples": [
                    "He lives in a flat near the centre. We live together."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "lived",
        "v3": "lived"
    },
    {
        "word": "like",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "👍",
        "subtext": "like work / like to travel / like someone / like the idea",
        "form": "verb",
        "definitions": [
            {
                "text": "To find something pleasant; to enjoy.",
                "examples": [
                    "I like my job. She likes cooking. He likes coffee."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "liked",
        "v3": "liked"
    },
    {
        "word": "want",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🙏",
        "subtext": "want a job / want to leave / want more money / want help",
        "form": "verb",
        "definitions": [
            {
                "text": "To desire or wish for something.",
                "examples": [
                    "I want a coffee. She wants a better job. He wants to retire."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "wanted",
        "v3": "wanted"
    },
    {
        "word": "need",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🆘",
        "subtext": "need help / need time / need money / need to rest",
        "form": "verb",
        "definitions": [
            {
                "text": "To require something; to feel that something is necessary.",
                "examples": [
                    "I need a break. She needs help. We need more time."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "needed",
        "v3": "needed"
    },
    {
        "word": "see",
        "level": "starter",
        "theme": "health_body",
        "emoji": "👁️",
        "subtext": "see a doctor / see friends / see the problem / see clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "To notice or perceive with the eyes.",
                "examples": [
                    "I see my doctor tomorrow. She sees the problem."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "saw",
        "v3": "seen"
    },
    {
        "word": "hear",
        "level": "starter",
        "theme": "health_body",
        "emoji": "👂",
        "subtext": "hear news / hear from someone / hear a sound / hear clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "To perceive sound through the ears.",
                "examples": [
                    "I hear the alarm every morning. Can you hear me?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "heard",
        "v3": "heard"
    },
    {
        "word": "feel",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🌡️",
        "subtext": "feel tired / feel better / feel well / feel stressed",
        "form": "verb",
        "definitions": [
            {
                "text": "To experience an emotion or physical sensation.",
                "examples": [
                    "I feel tired. She feels stressed. He feels better."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "felt",
        "v3": "felt"
    },
    {
        "word": "know",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🧠",
        "subtext": "know someone / know the answer / know a place / know how to",
        "form": "verb",
        "definitions": [
            {
                "text": "To have information or awareness about something.",
                "examples": [
                    "I know his name. She knows the answer. Do you know him?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "knew",
        "v3": "known"
    },
    {
        "word": "think",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "💭",
        "subtext": "think about / think of / think it is / think carefully",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a belief or opinion; to use the mind.",
                "examples": [
                    "I think it is a good idea. She thinks about her job."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "thought",
        "v3": "thought"
    },
    {
        "word": "speak",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗣️",
        "subtext": "speak to someone / speak English / speak clearly / speak at a meeting",
        "form": "verb",
        "definitions": [
            {
                "text": "To say words; to communicate verbally.",
                "examples": [
                    "He speaks French. She speaks to her manager every day."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "spoke",
        "v3": "spoken"
    },
    {
        "word": "say",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗨️",
        "subtext": "say hello / say yes / say no / say something",
        "form": "verb",
        "definitions": [
            {
                "text": "To express something in words.",
                "examples": [
                    "She says hello every morning. He says it is difficult."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "said",
        "v3": "said"
    },
    {
        "word": "ask",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "❓",
        "subtext": "ask a question / ask for help / ask someone / ask about",
        "form": "verb",
        "definitions": [
            {
                "text": "To put a question to someone; to request something.",
                "examples": [
                    "She asks a lot of questions. I ask my boss for advice."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "asked",
        "v3": "asked"
    },
    {
        "word": "give",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "subtext": "give advice / give money / give a present / give information",
        "opposite": "take",
        "oppositeEmoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "To hand or transfer something to someone.",
                "examples": [
                    "He gives me a lot of work. She gives advice."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "gave",
        "v3": "given"
    },
    {
        "word": "take",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "👜",
        "subtext": "take the bus / take medicine / take a break / take time",
        "opposite": "give",
        "oppositeEmoji": "🎁",
        "form": "verb",
        "definitions": [
            {
                "text": "To hold and move something; to use or consume.",
                "examples": [
                    "I take the bus to work. She takes medicine."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "took",
        "v3": "taken"
    },
    {
        "word": "make",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏗️",
        "subtext": "make coffee / make a decision / make a mistake / make money",
        "form": "verb",
        "definitions": [
            {
                "text": "To create or produce something; to cause something.",
                "examples": [
                    "I make coffee in the morning. She makes a decision."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "made",
        "v3": "made"
    },
    {
        "word": "get",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📥",
        "subtext": "get a job / get tired / get better / get home",
        "form": "verb",
        "definitions": [
            {
                "text": "To receive, obtain or become.",
                "examples": [
                    "I get a good salary. He gets tired quickly. She gets a promotion."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "got",
        "v3": "got/gotten"
    },
    {
        "word": "pay",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💰",
        "subtext": "pay the rent / pay by card / pay cash / pay a bill",
        "form": "verb",
        "definitions": [
            {
                "text": "To give money for something.",
                "examples": [
                    "I pay the rent every month. He pays by card."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "paid",
        "v3": "paid"
    },
    {
        "word": "buy",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🛒",
        "subtext": "buy food / buy a ticket / buy online / buy a house",
        "opposite": "sell",
        "oppositeEmoji": "🏷️",
        "form": "verb",
        "definitions": [
            {
                "text": "To get something in exchange for money.",
                "examples": [
                    "She buys food online. He wants to buy a flat."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "bought",
        "v3": "bought"
    },
    {
        "word": "open",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📖",
        "subtext": "open a door / open an account / open a shop / open at nine",
        "opposite": "close",
        "oppositeEmoji": "🔒",
        "form": "verb",
        "definitions": [
            {
                "text": "To make something not closed; or to start.",
                "examples": [
                    "He opens the office at eight. She opens a bank account."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "opened",
        "v3": "opened"
    },
    {
        "word": "close",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔒",
        "subtext": "close a door / close at six / close an account / close the meeting",
        "opposite": "open",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "To make something not open; or to finish.",
                "examples": [
                    "The office closes at six. She closes her laptop."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "closed",
        "v3": "closed"
    },
    {
        "word": "start",
        "level": "starter",
        "theme": "time",
        "emoji": "▶️",
        "subtext": "start work / start a meeting / start a new job / start early",
        "opposite": "finish",
        "oppositeEmoji": "🏁",
        "form": "verb",
        "definitions": [
            {
                "text": "To begin doing something.",
                "examples": [
                    "I start work at eight thirty. She starts a new job."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "started",
        "v3": "started"
    },
    {
        "word": "finish",
        "level": "starter",
        "theme": "time",
        "emoji": "🏁",
        "subtext": "finish work / finish a project / finish early / finish late",
        "opposite": "start",
        "oppositeEmoji": "▶️",
        "form": "verb",
        "definitions": [
            {
                "text": "To complete something; to come to an end.",
                "examples": [
                    "He finishes work at five. She finishes the report."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "finished",
        "v3": "finished"
    },
    {
        "word": "use",
        "level": "starter",
        "theme": "technology_media",
        "emoji": "🛠️",
        "subtext": "use a phone / use public transport / use a computer / use time",
        "form": "verb",
        "definitions": [
            {
                "text": "To employ something for a purpose.",
                "examples": [
                    "I use my phone for everything. She uses public transport."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "used",
        "v3": "used"
    },
    {
        "word": "walk",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "subtext": "walk to work / walk home / walk slowly / walk every day",
        "form": "verb",
        "definitions": [
            {
                "text": "To move on foot at a normal pace.",
                "examples": [
                    "He walks to work every day. She walks during her lunch break."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "walked",
        "v3": "walked"
    },
    {
        "word": "drive",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚗",
        "subtext": "drive to work / drive a car / drive home / drive carefully",
        "form": "verb",
        "definitions": [
            {
                "text": "To operate a vehicle.",
                "examples": [
                    "She drives to work. He drives a company car."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drove",
        "v3": "driven"
    },
    {
        "word": "call",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "📞",
        "subtext": "call someone / call a meeting / call back / call in sick",
        "form": "verb",
        "definitions": [
            {
                "text": "To telephone someone.",
                "examples": [
                    "I call my boss every morning. She calls a meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "called",
        "v3": "called"
    },
    {
        "word": "wake up",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "wake up early, wake up at 7am",
        "opposite": "sleep",
        "oppositeEmoji": "😴",
        "definitions": [
            {
                "text": "To stop sleeping and open your eyes.",
                "examples": [
                    "I wake up at seven o'clock.",
                    "What time do you wake up?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "woke up",
        "v3": "woken up"
    },
    {
        "word": "watch",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "form": "verb",
        "subtext": "watch TV, watch a movie",
        "definitions": [
            {
                "text": "To look at something for a period of time.",
                "examples": [
                    "I watch TV in the evening.",
                    "They watch the birds."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "watched",
        "v3": "watched"
    },
    {
        "word": "read",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "form": "verb",
        "subtext": "read a book, read a newspaper",
        "opposite": "write",
        "oppositeEmoji": "✍️",
        "definitions": [
            {
                "text": "To look at and understand words in a book or on paper.",
                "examples": [
                    "I read a book every night.",
                    "She can read English."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "read",
        "v3": "read"
    },
    {
        "word": "love",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "❤️",
        "subtext": "love my family, love travel",
        "form": "verb",
        "definitions": [
            {
                "text": "To like someone or something very much.",
                "examples": [
                    "I love my family.",
                    "I love travel."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "loved",
        "v3": "loved"
    },
    {
        "word": "write",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "subtext": "write a letter, write a message",
        "opposite": "read",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "To make marks on paper or a screen with a pen or keyboard.",
                "examples": [
                    "I write in my journal every day.",
                    "She writes books for children."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "wrote",
        "v3": "written"
    },
    {
        "word": "find",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔍",
        "form": "verb",
        "definitions": [
            {
                "text": "To see or get something after looking for it.",
                "examples": [
                    "I can't find my keys.",
                    "Did you find your way?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "found",
        "v3": "found"
    },
    {
        "word": "tell",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗣️",
        "form": "verb",
        "definitions": [
            {
                "text": "To say something to someone, giving them information.",
                "examples": [
                    "Tell me a story.",
                    "He told her the truth."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "told",
        "v3": "told"
    },
    {
        "word": "try",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🎯",
        "form": "verb",
        "definitions": [
            {
                "text": "To attempt to do something.",
                "examples": [
                    "I try to exercise every day.",
                    "Try one of these cookies."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "tried",
        "v3": "tried"
    },
    {
        "word": "leave",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚪",
        "form": "verb",
        "definitions": [
            {
                "text": "To go away from a place.",
                "examples": [
                    "I leave for work at 8am.",
                    "Don't leave your bag here."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "left",
        "v3": "left"
    },
    {
        "word": "look",
        "level": "starter",
        "theme": "health_body",
        "emoji": "👀",
        "form": "verb",
        "definitions": [
            {
                "text": "To direct your eyes toward something.",
                "examples": [
                    "Look at this photo.",
                    "He is looking for his keys."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "looked",
        "v3": "looked"
    },
    {
        "word": "help",
        "level": "starter",
        "theme": "society_politics",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "To do something for someone to make a task easier.",
                "examples": [
                    "Can you help me?",
                    "I help my mother with the shopping."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "helped",
        "v3": "helped"
    },
    {
        "word": "talk",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "💬",
        "form": "verb",
        "definitions": [
            {
                "text": "To say words to someone.",
                "examples": [
                    "I like to talk to my friends.",
                    "Stop talking and listen."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "talked",
        "v3": "talked"
    },
    {
        "word": "play",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "form": "verb",
        "definitions": [
            {
                "text": "To do something for fun or in a game.",
                "examples": [
                    "I play football with my friends.",
                    "She likes to play video games."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "played",
        "v3": "played"
    },
    {
        "word": "run",
        "level": "starter",
        "theme": "common_sports_A0",
        "emoji": "🏃",
        "form": "verb",
        "definitions": [
            {
                "text": "To move very fast on your legs.",
                "examples": [
                    "I run in the park.",
                    "He runs to catch the bus."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ran",
        "v3": "run"
    },
    {
        "word": "bring",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "form": "verb",
        "definitions": [
            {
                "text": "To take someone or something to a place with you.",
                "examples": [
                    "Please bring me a glass of water.",
                    "He brings his lunch to work."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "brought",
        "v3": "brought"
    },
    {
        "word": "sit",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🪑",
        "opposite": "stand",
        "oppositeEmoji": "🧍",
        "form": "verb",
        "definitions": [
            {
                "text": "To rest your weight on your bottom rather than your feet.",
                "examples": [
                    "Please sit down.",
                    "I sit on a chair."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sat",
        "v3": "sat"
    },
    {
        "word": "stand",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🧍",
        "opposite": "sit",
        "oppositeEmoji": "🪑",
        "form": "verb",
        "definitions": [
            {
                "text": "To be on your feet in an upright position.",
                "examples": [
                    "Please stand up.",
                    "She is standing near the door."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "stood",
        "v3": "stood"
    },
    {
        "word": "lose",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📉",
        "opposite": "win",
        "oppositeEmoji": "🏆",
        "form": "verb",
        "definitions": [
            {
                "text": "To fail to win or to not be able to find something.",
                "examples": [
                    "I don't want to lose the game.",
                    "I often lose my keys."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "lost",
        "v3": "lost"
    },
    {
        "word": "meet",
        "level": "starter",
        "theme": "society_politics",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "To see and talk to someone for the first time.",
                "examples": [
                    "Nice to meet you.",
                    "We meet every Friday."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "met",
        "v3": "met"
    },
    {
        "word": "learn",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "📚",
        "form": "verb",
        "definitions": [
            {
                "text": "To get knowledge or a skill.",
                "examples": [
                    "I want to learn English.",
                    "Children learn fast."
                ]
            }
        ],
        "classification": "both",
        "aspect": "action",
        "v2": "learned/learnt",
        "v3": "learned/learnt"
    },
    {
        "word": "change",
        "level": "starter",
        "theme": "time",
        "emoji": "🔄",
        "form": "verb",
        "definitions": [
            {
                "text": "To make something different.",
                "examples": [
                    "I want to change my clothes.",
                    "The weather changes quickly."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "changed",
        "v3": "changed"
    },
    {
        "word": "understand",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "💡",
        "form": "verb",
        "definitions": [
            {
                "text": "To know the meaning of something.",
                "examples": [
                    "I don't understand this word.",
                    "Do you understand English?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "understood",
        "v3": "understood"
    },
    {
        "word": "stop",
        "level": "starter",
        "theme": "time",
        "emoji": "🛑",
        "form": "verb",
        "definitions": [
            {
                "text": "To finish doing something or to not move anymore.",
                "examples": [
                    "Stop the car.",
                    "Please stop talking."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stopped",
        "v3": "stopped"
    },
    {
        "word": "add",
        "level": "starter",
        "theme": "numbers_math",
        "emoji": "➕",
        "form": "verb",
        "definitions": [
            {
                "text": "To put things together to make a larger group.",
                "examples": [
                    "Add some sugar to the tea.",
                    "What is five plus five?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "added",
        "v3": "added"
    },
    {
        "word": "spend",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💸",
        "form": "verb",
        "definitions": [
            {
                "text": "To use money to pay for things.",
                "examples": [
                    "I spend a lot of money on food."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "spent",
        "v3": "spent"
    },
    {
        "word": "walk",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "To move on your legs at a normal speed.",
                "examples": [
                    "I walk to school.",
                    "Let's take a walk in the park."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "walked",
        "v3": "walked"
    },
    {
        "word": "win",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "opposite": "lose",
        "oppositeEmoji": "📉",
        "form": "verb",
        "definitions": [
            {
                "text": "To be the best in a game or competition.",
                "examples": [
                    "We want to win the game."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "won",
        "v3": "won"
    },
    {
        "word": "remember",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🧠",
        "form": "verb",
        "definitions": [
            {
                "text": "To keep information in your mind.",
                "examples": [
                    "I remember your name.",
                    "Do you remember me?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "remembered",
        "v3": "remembered"
    },
    {
        "word": "wait",
        "level": "starter",
        "theme": "time",
        "emoji": "⏳",
        "form": "verb",
        "definitions": [
            {
                "text": "To stay in a place until something happens.",
                "examples": [
                    "Wait for the bus here.",
                    "I am waiting for my friend."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "waited",
        "v3": "waited"
    },
    {
        "word": "die",
        "level": "starter",
        "theme": "health_body",
        "emoji": "⚰️",
        "opposite": "live",
        "oppositeEmoji": "🏠",
        "form": "verb",
        "definitions": [
            {
                "text": "To stop living.",
                "examples": [
                    "Plants die without water."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "died",
        "v3": "died"
    },
    {
        "word": "send",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "To cause something to go to a place.",
                "examples": [
                    "I send an email every morning.",
                    "Can you send me a photo?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sent",
        "v3": "sent"
    },
    {
        "word": "stay",
        "level": "starter",
        "theme": "places_geography",
        "emoji": "🏨",
        "form": "verb",
        "definitions": [
            {
                "text": "To continue to be in a place.",
                "examples": [
                    "I stay at home on Sundays.",
                    "We are staying in a hotel."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stayed",
        "v3": "stayed"
    },
    {
        "word": "fall",
        "level": "starter",
        "theme": "environment_nature",
        "emoji": "🍂",
        "form": "verb",
        "definitions": [
            {
                "text": "To move down toward the ground.",
                "examples": [
                    "Leaves fall in autumn.",
                    "Be careful, don't fall."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "fell",
        "v3": "fallen"
    },
    {
        "word": "cut",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "✂️",
        "form": "verb",
        "definitions": [
            {
                "text": "To use a knife or scissors to divide something.",
                "examples": [
                    "I cut the bread.",
                    "Can you cut the paper?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "cut",
        "v3": "cut"
    },
    {
        "word": "pass",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🏔️",
        "form": "verb",
        "definitions": [
            {
                "text": "To go past something or to succeed in an exam.",
                "examples": [
                    "I pass the park on my way home.",
                    "I hope I pass the test."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "passed",
        "v3": "passed"
    },
    {
        "word": "sell",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🏷️",
        "opposite": "buy",
        "oppositeEmoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "To give something to someone for money.",
                "examples": [
                    "They sell fruit at the market."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sold",
        "v3": "sold"
    },
    {
        "word": "pull",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🚜",
        "opposite": "push",
        "oppositeEmoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "To move something toward you.",
                "examples": [
                    "Pull the door to open it."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pulled",
        "v3": "pulled"
    },
    {
        "word": "push",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🛒",
        "opposite": "pull",
        "oppositeEmoji": "🚜",
        "form": "verb",
        "definitions": [
            {
                "text": "To move something away from you.",
                "examples": [
                    "Push the button.",
                    "I push the shopping cart."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pushed",
        "v3": "pushed"
    },
    {
        "word": "hope",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🤞",
        "form": "verb",
        "definitions": [
            {
                "text": "To want something to happen.",
                "examples": [
                    "I hope you feel better.",
                    "We hope to see you soon."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "hoped",
        "v3": "hoped"
    },
    {
        "word": "carry",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🎒",
        "form": "verb",
        "definitions": [
            {
                "text": "To hold something and move it from one place to another.",
                "examples": [
                    "I carry my bag to school.",
                    "Can you help me carry this box?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "carried",
        "v3": "carried"
    },
    {
        "word": "break",
        "level": "starter",
        "theme": "describing_things",
        "emoji": "💔",
        "form": "verb",
        "definitions": [
            {
                "text": "To separate something into two or more pieces.",
                "examples": [
                    "Don't break the glass.",
                    "He broke his leg."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "broke",
        "v3": "broken"
    },
    {
        "word": "receive",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "📩",
        "form": "verb",
        "definitions": [
            {
                "text": "To get something that someone gave or sent to you.",
                "examples": [
                    "I receive a lot of mail.",
                    "She received a gift."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "received",
        "v3": "received"
    },
    {
        "word": "agree",
        "level": "starter",
        "theme": "opinion_debate",
        "emoji": "👍",
        "form": "verb",
        "definitions": [
            {
                "text": "To have the same opinion as someone.",
                "examples": [
                    "I agree with you.",
                    "We agree on the plan."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "agreed",
        "v3": "agreed"
    },
    {
        "word": "draw",
        "level": "starter",
        "theme": "culture_arts",
        "emoji": "🎨",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a picture with a pen or pencil.",
                "examples": [
                    "I like to draw birds.",
                    "Can you draw a map?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drew",
        "v3": "drawn"
    },
    {
        "word": "share",
        "level": "starter",
        "theme": "society_politics",
        "emoji": "🍕",
        "form": "verb",
        "definitions": [
            {
                "text": "To give a part of something to others.",
                "examples": [
                    "Let's share the pizza.",
                    "I share a room with my brother."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "shared",
        "v3": "shared"
    },
    {
        "word": "smile",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "😊",
        "opposite": "cry",
        "oppositeEmoji": "😢",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a happy expression with your mouth.",
                "examples": [
                    "She has a beautiful smile.",
                    "Smile for the camera."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "smiled",
        "v3": "smiled"
    },
    {
        "word": "cry",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "😢",
        "opposite": "smile",
        "oppositeEmoji": "😊",
        "form": "verb",
        "definitions": [
            {
                "text": "To produce tears because you are sad or in pain.",
                "examples": [
                    "The baby is crying.",
                    "Don't cry."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cried",
        "v3": "cried"
    },
    {
        "word": "dance",
        "level": "starter",
        "theme": "culture_arts",
        "emoji": "💃",
        "form": "verb",
        "definitions": [
            {
                "text": "To move your body to music.",
                "examples": [
                    "I love to dance.",
                    "They are dancing."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "danced",
        "v3": "danced"
    },
    {
        "word": "sing",
        "level": "starter",
        "theme": "culture_arts",
        "emoji": "🎤",
        "form": "verb",
        "definitions": [
            {
                "text": "To make musical sounds with your voice.",
                "examples": [
                    "I like to sing in the shower.",
                    "She sings very well."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sang",
        "v3": "sung"
    },
    {
        "word": "jump",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🦘",
        "form": "verb",
        "definitions": [
            {
                "text": "To push yourself off the ground with your legs.",
                "examples": [
                    "Can you jump high?",
                    "The cat jumped onto the table."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "jumped",
        "v3": "jumped"
    },
    {
        "word": "fly",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "✈️",
        "form": "verb",
        "definitions": [
            {
                "text": "To move through the air.",
                "examples": [
                    "Birds can fly.",
                    "I fly to Paris tomorrow."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "flew",
        "v3": "flown"
    },
    {
        "word": "swim",
        "level": "starter",
        "theme": "common_sports_A0",
        "emoji": "🏊",
        "form": "verb",
        "definitions": [
            {
                "text": "To move through water using your arms and legs.",
                "examples": [
                    "I swim every morning.",
                    "Can you swim?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "swam",
        "v3": "swum"
    },
    {
        "word": "wash",
        "level": "starter",
        "theme": "home_living",
        "emoji": "🧼",
        "form": "verb",
        "definitions": [
            {
                "text": "To make something clean using water and soap.",
                "examples": [
                    "I wash my hands.",
                    "Can you wash the car?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "washed",
        "v3": "washed"
    },
    {
        "word": "clean",
        "level": "starter",
        "theme": "home_living",
        "emoji": "🧹",
        "form": "verb",
        "definitions": [
            {
                "text": "To remove dirt from something.",
                "examples": [
                    "I clean my room every week."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cleaned",
        "v3": "cleaned"
    },
    {
        "word": "cook",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍳",
        "form": "verb",
        "definitions": [
            {
                "text": "To prepare food by heating it.",
                "examples": [
                    "I cook dinner for my family.",
                    "She likes to cook."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cooked",
        "v3": "cooked"
    },
    {
        "word": "travel",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "✈️",
        "form": "verb",
        "definitions": [
            {
                "text": "To go from one place to another.",
                "examples": [
                    "I love to travel.",
                    "We travel by train."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "traveled",
        "v3": "traveled"
    },
    {
        "word": "study",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "To spend time learning about a subject.",
                "examples": [
                    "I study English at school.",
                    "He is studying for his exams."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "studied",
        "v3": "studied"
    },
    {
        "word": "teach",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "👨‍🏫",
        "form": "verb",
        "definitions": [
            {
                "text": "To give knowledge to others.",
                "examples": [
                    "I teach English.",
                    "She teaches at a university."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "taught",
        "v3": "taught"
    },
    {
        "word": "listen",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🎧",
        "form": "verb",
        "definitions": [
            {
                "text": "To pay attention to a sound.",
                "examples": [
                    "I like to listen to music.",
                    "Listen to me!"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "listened",
        "v3": "listened"
    },
    {
        "word": "commute",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🚆",
        "form": "verb",
        "definitions": [
            {
                "text": "To travel some distance between one's home and place of work on a regular basis.",
                "examples": [
                    "I commute to the city by train."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "commuted",
        "v3": "commuted"
    },
    {
        "word": "rent",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏠",
        "form": "verb",
        "definitions": [
            {
                "text": "To pay money to use a house or flat that belongs to someone else.",
                "examples": [
                    "We rent a flat in the city."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "rented",
        "v3": "rented"
    },
    {
        "word": "exercise",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏋️",
        "form": "verb",
        "definitions": [
            {
                "text": "To do physical activity to stay healthy.",
                "examples": [
                    "I exercise every morning."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "exercised",
        "v3": "exercised"
    },
    {
        "word": "save",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "verb",
        "opposite": "spend",
        "oppositeEmoji": "💸",
        "definitions": [
            {
                "text": "To keep money instead of spending it.",
                "examples": [
                    "She saves money every month."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "saved",
        "v3": "saved"
    },
    {
        "word": "cost",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a certain price.",
                "examples": [
                    "The flat costs a lot."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "cost",
        "v3": "cost"
    },
    {
        "word": "invite",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "To ask someone to come to a place or event.",
                "examples": [
                    "I invite friends for dinner."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invited",
        "v3": "invited"
    }
];
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
