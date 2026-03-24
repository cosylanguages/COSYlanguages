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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    },
    {
        "word": "close",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔒",
        "opposite": "open",
        "oppositeEmoji": "📖",
        "form": "verb"
    },
    {
        "word": "finish",
        "level": "starter",
        "theme": "time",
        "emoji": "🏁",
        "opposite": "start",
        "oppositeEmoji": "▶️",
        "form": "verb"
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    },
    {
        "word": "rain",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "🌧️",
        "form": "verb",
        "definitions": [
            {
                "text": "When water falls from the sky in drops.",
                "examples": [
                    "It is raining today.",
                    "Does it rain a lot in autumn?"
                ]
            }
        ]
    }
];
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
