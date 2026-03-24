(function() {
    const data = [
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
        "word": "work",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "work in an office, work hard",
        "form": "verb",
        "definitions": [
            {
                "text": "To do a job to earn money.",
                "examples": [
                    "I work five days a week.",
                    "She works at a bank."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "worked",
        "v3": "worked"
    },
    {
        "word": "sleep",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "😴",
        "subtext": "sleep 8 hours, go to sleep",
        "opposite": "wake up",
        "oppositeEmoji": "⏰",
        "form": "verb",
        "definitions": [
            {
                "text": "To rest with your eyes closed.",
                "examples": [
                    "I need to sleep.",
                    "The baby is sleeping."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "slept",
        "v3": "slept"
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
        "word": "be",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👤",
        "subtext": "be cold, be 20 years old",
        "form": "verb",
        "definitions": [
            {
                "text": "To exist or live.",
                "examples": [
                    "I am a student.",
                    "She is happy."
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
        "subtext": "have breakfast, have a car",
        "form": "verb",
        "definitions": [
            {
                "text": "To own or possess something.",
                "examples": [
                    "I have a red car.",
                    "We have two cats."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "had",
        "v3": "had"
    },
    {
        "word": "go",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "subtext": "go to school, go home",
        "form": "verb",
        "definitions": [
            {
                "text": "To move from one place to another.",
                "examples": [
                    "I go to school by bus.",
                    "Let's go home."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "went",
        "v3": "gone"
    },
    {
        "word": "eat",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍎",
        "subtext": "eat an apple, eat dinner",
        "opposite": "drink",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "To put food in your mouth and swallow it.",
                "examples": [
                    "I eat an apple every day.",
                    "What do you want to eat?"
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
        "subtext": "drink water, drink coffee",
        "opposite": "eat",
        "oppositeEmoji": "🍎",
        "form": "verb",
        "definitions": [
            {
                "text": "To take liquid into your mouth and swallow it.",
                "examples": [
                    "I drink a lot of water.",
                    "Do you want a drink?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drank",
        "v3": "drunk"
    },
    {
        "word": "do",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "subtext": "do homework, do sport",
        "form": "verb",
        "definitions": [
            {
                "text": "To perform an action or activity.",
                "examples": [
                    "I do my homework in the afternoon.",
                    "What are you doing?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "did",
        "v3": "done"
    },
    {
        "word": "speak",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗣️",
        "subtext": "speak English, speak slowly",
        "form": "verb",
        "definitions": [
            {
                "text": "To use your voice to say words.",
                "examples": [
                    "I speak English and French.",
                    "Please speak slowly."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "spoke",
        "v3": "spoken"
    },
    {
        "word": "know",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🧠",
        "subtext": "know the answer, know a person",
        "form": "verb",
        "definitions": [
            {
                "text": "To have information about something in your mind.",
                "examples": [
                    "I know the answer.",
                    "Do you know that man?"
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
        "subtext": "think about, think that",
        "form": "verb",
        "definitions": [
            {
                "text": "To use your mind to have ideas or opinions.",
                "examples": [
                    "I think this is a good idea.",
                    "What do you think about the movie?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "thought",
        "v3": "thought"
    },
    {
        "word": "see",
        "level": "starter",
        "theme": "health_body",
        "emoji": "👁️",
        "subtext": "see a movie, see a friend",
        "form": "verb",
        "definitions": [
            {
                "text": "To use your eyes to look at something.",
                "examples": [
                    "I can see a bird.",
                    "Did you see that movie?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "saw",
        "v3": "seen"
    },
    {
        "word": "want",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🙏",
        "subtext": "want water, want to go",
        "form": "verb",
        "definitions": [
            {
                "text": "To feel that you would like to have or do something.",
                "examples": [
                    "I want a glass of water.",
                    "I want to go home."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "wanted",
        "v3": "wanted"
    },
    {
        "word": "like",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "👍",
        "subtext": "like chocolate, like dancing",
        "form": "verb",
        "definitions": [
            {
                "text": "To enjoy something or think it is nice.",
                "examples": [
                    "I like chocolate.",
                    "Do you like dancing?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "liked",
        "v3": "liked"
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
        "word": "come",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🏃‍♂️",
        "subtext": "come here, come home",
        "opposite": "go",
        "oppositeEmoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "To move toward the speaker or the place where they are.",
                "examples": [
                    "Please come here.",
                    "He is coming to the party."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "came",
        "v3": "come"
    },
    {
        "word": "give",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "subtext": "give a gift, give help",
        "opposite": "take",
        "oppositeEmoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "To hand something to someone so that they can keep it.",
                "examples": [
                    "Can you give me that book?",
                    "I give gifts to my family."
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
        "subtext": "take a bus, take a photo",
        "opposite": "give",
        "oppositeEmoji": "🎁",
        "form": "verb",
        "definitions": [
            {
                "text": "To get something into your hands or possession.",
                "examples": [
                    "I take the bus to work.",
                    "She takes beautiful photos."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "took",
        "v3": "taken"
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
        "word": "ask",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "❓",
        "form": "verb",
        "definitions": [
            {
                "text": "To say something to someone because you want to know something.",
                "examples": [
                    "I need to ask a question.",
                    "She asked me for help."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "asked",
        "v3": "asked"
    },
    {
        "word": "feel",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🌡️",
        "form": "verb",
        "definitions": [
            {
                "text": "To experience an emotion or physical sensation.",
                "examples": [
                    "I feel happy today.",
                    "Do you feel cold?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "felt",
        "v3": "felt"
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
        "word": "call",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "📞",
        "form": "verb",
        "definitions": [
            {
                "text": "To phone someone or to shout their name.",
                "examples": [
                    "Call me later.",
                    "He called my name."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "called",
        "v3": "called"
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
        "word": "use",
        "level": "starter",
        "theme": "technology_media",
        "emoji": "🛠️",
        "form": "verb",
        "definitions": [
            {
                "text": "To do something with an object to complete a task.",
                "examples": [
                    "I use a computer for work.",
                    "Can I use your pen?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "used",
        "v3": "used"
    },
    {
        "word": "get",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📥",
        "form": "verb",
        "definitions": [
            {
                "text": "To receive, buy, or obtain something.",
                "examples": [
                    "I get a lot of emails.",
                    "Can you get some milk?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "got",
        "v3": "got/gotten"
    },
    {
        "word": "start",
        "level": "starter",
        "theme": "time",
        "emoji": "▶️",
        "opposite": "finish",
        "oppositeEmoji": "🏁",
        "form": "verb",
        "definitions": [
            {
                "text": "To begin doing something.",
                "examples": [
                    "The movie starts at 7pm.",
                    "Let's start the meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "started",
        "v3": "started"
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
        "word": "live",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "🏠",
        "opposite": "die",
        "oppositeEmoji": "⚰️",
        "form": "verb",
        "definitions": [
            {
                "text": "To have your home in a particular place.",
                "examples": [
                    "I live in London.",
                    "She lives with her family."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "lived",
        "v3": "lived"
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
        "word": "pay",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "To give money for something.",
                "examples": [
                    "I pay for my coffee.",
                    "How do you want to pay?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "paid",
        "v3": "paid"
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
        "word": "open",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📖",
        "opposite": "close",
        "oppositeEmoji": "🔒",
        "form": "verb",
        "definitions": [
            {
                "text": "To move something so that an opening is not covered.",
                "examples": [
                    "Open the door.",
                    "Can you open the window?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "opened",
        "v3": "opened"
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
        "word": "buy",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🛒",
        "opposite": "sell",
        "oppositeEmoji": "🏷️",
        "form": "verb",
        "definitions": [
            {
                "text": "To get something by paying money for it.",
                "examples": [
                    "I want to buy a new phone.",
                    "Where can I buy milk?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "bought",
        "v3": "bought"
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
        "word": "close",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔒",
        "opposite": "open",
        "oppositeEmoji": "📖",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "closed",
        "v3": "closed"
    },
    {
        "word": "finish",
        "level": "starter",
        "theme": "time",
        "emoji": "🏁",
        "opposite": "start",
        "oppositeEmoji": "▶️",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "finished",
        "v3": "finished"
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
