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
        "form": "verb"
    },
    {
        "word": "have",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👜",
        "subtext": "have breakfast, have a car",
        "form": "verb"
    },
    {
        "word": "go",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "subtext": "go to school, go home",
        "form": "verb"
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
        "form": "verb"
    },
    {
        "word": "speak",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗣️",
        "subtext": "speak English, speak slowly",
        "form": "verb"
    },
    {
        "word": "know",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🧠",
        "subtext": "know the answer, know a person",
        "form": "verb"
    },
    {
        "word": "think",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "💭",
        "subtext": "think about, think that",
        "form": "verb"
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
        "form": "verb"
    },
    {
        "word": "like",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "👍",
        "subtext": "like chocolate, like dancing",
        "form": "verb"
    },
    {
        "word": "love",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "❤️",
        "subtext": "love my family, love travel",
        "form": "verb"
    },
    {
        "word": "write",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "subtext": "write a letter, write a message",
        "opposite": "read",
        "oppositeEmoji": "📖",
        "form": "verb"
    },
    {
        "word": "come",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🏃‍♂️",
        "subtext": "come here, come home",
        "opposite": "go",
        "oppositeEmoji": "🚶",
        "form": "verb"
    },
    {
        "word": "give",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "subtext": "give a gift, give help",
        "opposite": "take",
        "oppositeEmoji": "👜",
        "form": "verb"
    },
    {
        "word": "take",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "👜",
        "subtext": "take a bus, take a photo",
        "opposite": "give",
        "oppositeEmoji": "🎁",
        "form": "verb"
    },
    {
        "word": "find",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔍",
        "form": "verb"
    },
    {
        "word": "tell",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗣️",
        "form": "verb"
    },
    {
        "word": "ask",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "❓",
        "form": "verb"
    },
    {
        "word": "feel",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🌡️",
        "form": "verb"
    },
    {
        "word": "try",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🎯",
        "form": "verb"
    },
    {
        "word": "leave",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚪",
        "form": "verb"
    },
    {
        "word": "call",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "📞",
        "form": "verb"
    },
    {
        "word": "look",
        "level": "starter",
        "theme": "health_body",
        "emoji": "👀",
        "form": "verb"
    },
    {
        "word": "use",
        "level": "starter",
        "theme": "technology_media",
        "emoji": "🛠️",
        "form": "verb"
    },
    {
        "word": "get",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📥",
        "form": "verb"
    },
    {
        "word": "start",
        "level": "starter",
        "theme": "time",
        "emoji": "▶️",
        "opposite": "finish",
        "oppositeEmoji": "🏁",
        "form": "verb"
    },
    {
        "word": "help",
        "level": "starter",
        "theme": "society_politics",
        "emoji": "🤝",
        "form": "verb"
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
        "form": "verb"
    },
    {
        "word": "run",
        "level": "starter",
        "theme": "common_sports_A0",
        "emoji": "🏃",
        "form": "verb"
    },
    {
        "word": "live",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "🏠",
        "opposite": "die",
        "oppositeEmoji": "⚰️",
        "form": "verb"
    },
    {
        "word": "bring",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "form": "verb"
    },
    {
        "word": "sit",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🪑",
        "opposite": "stand",
        "oppositeEmoji": "🧍",
        "form": "verb"
    },
    {
        "word": "stand",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🧍",
        "opposite": "sit",
        "oppositeEmoji": "🪑",
        "form": "verb"
    },
    {
        "word": "lose",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📉",
        "opposite": "win",
        "oppositeEmoji": "🏆",
        "form": "verb"
    },
    {
        "word": "pay",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💰",
        "form": "verb"
    },
    {
        "word": "meet",
        "level": "starter",
        "theme": "society_politics",
        "emoji": "🤝",
        "form": "verb"
    },
    {
        "word": "learn",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "📚",
        "form": "verb"
    },
    {
        "word": "change",
        "level": "starter",
        "theme": "time",
        "emoji": "🔄",
        "form": "verb"
    },
    {
        "word": "understand",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "💡",
        "form": "verb"
    },
    {
        "word": "stop",
        "level": "starter",
        "theme": "time",
        "emoji": "🛑",
        "form": "verb"
    },
    {
        "word": "add",
        "level": "starter",
        "theme": "numbers_math",
        "emoji": "➕",
        "form": "verb"
    },
    {
        "word": "spend",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💸",
        "form": "verb"
    },
    {
        "word": "open",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📖",
        "opposite": "close",
        "oppositeEmoji": "🔒",
        "form": "verb"
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
        "form": "verb"
    },
    {
        "word": "remember",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🧠",
        "form": "verb"
    },
    {
        "word": "buy",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🛒",
        "opposite": "sell",
        "oppositeEmoji": "🏷️",
        "form": "verb"
    },
    {
        "word": "wait",
        "level": "starter",
        "theme": "time",
        "emoji": "⏳",
        "form": "verb"
    },
    {
        "word": "die",
        "level": "starter",
        "theme": "health_body",
        "emoji": "⚰️",
        "opposite": "live",
        "oppositeEmoji": "🏠",
        "form": "verb"
    },
    {
        "word": "send",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "✉️",
        "form": "verb"
    },
    {
        "word": "stay",
        "level": "starter",
        "theme": "places_geography",
        "emoji": "🏨",
        "form": "verb"
    },
    {
        "word": "fall",
        "level": "starter",
        "theme": "environment_nature",
        "emoji": "🍂",
        "form": "verb"
    },
    {
        "word": "cut",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "✂️",
        "form": "verb"
    },
    {
        "word": "pass",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🏔️",
        "form": "verb"
    },
    {
        "word": "sell",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🏷️",
        "opposite": "buy",
        "oppositeEmoji": "🛒",
        "form": "verb"
    },
    {
        "word": "pull",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🚜",
        "opposite": "push",
        "oppositeEmoji": "🛒",
        "form": "verb"
    },
    {
        "word": "push",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🛒",
        "opposite": "pull",
        "oppositeEmoji": "🚜",
        "form": "verb"
    },
    {
        "word": "hope",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🤞",
        "form": "verb"
    },
    {
        "word": "carry",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🎒",
        "form": "verb"
    },
    {
        "word": "break",
        "level": "starter",
        "theme": "describing_things",
        "emoji": "💔",
        "form": "verb"
    },
    {
        "word": "receive",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "📩",
        "form": "verb"
    },
    {
        "word": "agree",
        "level": "starter",
        "theme": "opinion_debate",
        "emoji": "👍",
        "form": "verb"
    },
    {
        "word": "draw",
        "level": "starter",
        "theme": "culture_arts",
        "emoji": "🎨",
        "form": "verb"
    },
    {
        "word": "share",
        "level": "starter",
        "theme": "society_politics",
        "emoji": "🍕",
        "form": "verb"
    },
    {
        "word": "smile",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "😊",
        "opposite": "cry",
        "oppositeEmoji": "😢",
        "form": "verb"
    },
    {
        "word": "cry",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "😢",
        "opposite": "smile",
        "oppositeEmoji": "😊",
        "form": "verb"
    },
    {
        "word": "dance",
        "level": "starter",
        "theme": "culture_arts",
        "emoji": "💃",
        "form": "verb"
    },
    {
        "word": "sing",
        "level": "starter",
        "theme": "culture_arts",
        "emoji": "🎤",
        "form": "verb"
    },
    {
        "word": "jump",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🦘",
        "form": "verb"
    },
    {
        "word": "fly",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "✈️",
        "form": "verb"
    },
    {
        "word": "swim",
        "level": "starter",
        "theme": "common_sports_A0",
        "emoji": "🏊",
        "form": "verb"
    },
    {
        "word": "wash",
        "level": "starter",
        "theme": "home_living",
        "emoji": "🧼",
        "form": "verb"
    },
    {
        "word": "clean",
        "level": "starter",
        "theme": "home_living",
        "emoji": "🧹",
        "form": "verb"
    },
    {
        "word": "cook",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍳",
        "form": "verb"
    },
    {
        "word": "travel",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "✈️",
        "form": "verb"
    },
    {
        "word": "study",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "📖",
        "form": "verb"
    },
    {
        "word": "teach",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "👨‍🏫",
        "form": "verb"
    },
    {
        "word": "listen",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🎧",
        "form": "verb"
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
    }
];
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
