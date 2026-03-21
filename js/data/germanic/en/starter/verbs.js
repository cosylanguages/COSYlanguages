(function() {
    const data = [
    {
        "word": "wake up",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "⏰",
        "form": "verb"
    },
    {
        "word": "breakfast",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🍳",
        "form": "verb"
    },
    {
        "word": "work",
        "level": "starter",
        "theme": "home_A0",
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
            },
            {
                "text": "The place where you do your job.",
                "examples": [
                    "I am at work right now.",
                    "He goes to work by bus."
                ]
            }
        ]
    },
    {
        "word": "lunch",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🍱",
        "form": "verb"
    },
    {
        "word": "dinner",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🍽️",
        "form": "verb"
    },
    {
        "word": "sleep",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "😴",
        "subtext": "sleep 8 hours, go to sleep",
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
        "theme": "neighbourhood_local_A2",
        "emoji": "📺",
        "form": "verb",
        "definitions": [
            {
                "text": "To look at something for a period of time.",
                "examples": [
                    "I watch TV in the evening.",
                    "They watch the birds."
                ]
            },
            {
                "text": "A small clock that you wear on your arm.",
                "examples": [
                    "My watch is broken.",
                    "What time is it on your watch?"
                ]
            }
        ]
    },
    {
        "word": "reading",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "📖",
        "form": "verb"
    },
    {
        "word": "be",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "👤",
        "subtext": "be cold, be 20 years old",
        "form": "verb"
    },
    {
        "word": "have",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "👜",
        "subtext": "have breakfast, have a car",
        "form": "verb"
    },
    {
        "word": "go",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🚶",
        "subtext": "go to school, go home",
        "form": "verb"
    },
    {
        "word": "eat",
        "level": "starter",
        "theme": "food_drink_A0",
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
        "theme": "food_drink_A0",
        "emoji": "🥛",
        "subtext": "drink water, drink coffee",
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
        "theme": "home_A0",
        "emoji": "🛠️",
        "subtext": "do homework, do sport",
        "form": "verb"
    },
    {
        "word": "speak",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🗣️",
        "subtext": "speak English, speak slowly",
        "form": "verb"
    },
    {
        "word": "know",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🧠",
        "subtext": "know the answer, know a person",
        "form": "verb"
    },
    {
        "word": "think",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "💭",
        "subtext": "think about, think that",
        "form": "verb"
    },
    {
        "word": "see",
        "level": "starter",
        "theme": "adjectives_A0",
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
        "theme": "adjectives_A0",
        "emoji": "🙏",
        "subtext": "want water, want to go",
        "form": "verb"
    },
    {
        "word": "like",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "👍",
        "subtext": "like chocolate, like dancing",
        "form": "verb"
    },
    {
        "word": "love",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "❤️",
        "subtext": "love my family, love travel",
        "form": "verb"
    },
    {
        "word": "read",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📖",
        "subtext": "read a book, read the news",
        "opposite": "write",
        "oppositeEmoji": "✍️",
        "form": "verb"
    },
    {
        "word": "write",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "✍️",
        "subtext": "write a letter, write a message",
        "opposite": "read",
        "oppositeEmoji": "📖",
        "form": "verb"
    },
    {
        "word": "come",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🏃‍♂️",
        "subtext": "come here, come home",
        "opposite": "go",
        "oppositeEmoji": "🚶",
        "form": "verb"
    },
    {
        "word": "give",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🎁",
        "subtext": "give a gift, give help",
        "opposite": "take",
        "oppositeEmoji": "👜",
        "form": "verb"
    },
    {
        "word": "take",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "👜",
        "subtext": "take a bus, take a photo",
        "opposite": "give",
        "oppositeEmoji": "🎁",
        "form": "verb"
    },
    {
        "word": "find",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🔍",
        "form": "verb"
    },
    {
        "word": "tell",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🗣️",
        "form": "verb"
    },
    {
        "word": "ask",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "❓",
        "form": "verb"
    },
    {
        "word": "feel",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "🌡️",
        "form": "verb"
    },
    {
        "word": "try",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🎯",
        "form": "verb"
    },
    {
        "word": "leave",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🚪",
        "form": "verb"
    },
    {
        "word": "call",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📞",
        "form": "verb"
    },
    {
        "word": "look",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "👀",
        "form": "verb"
    },
    {
        "word": "use",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🛠️",
        "form": "verb"
    },
    {
        "word": "get",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📥",
        "form": "verb"
    },
    {
        "word": "start",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "▶️",
        "opposite": "finish",
        "oppositeEmoji": "🏁",
        "form": "verb"
    },
    {
        "word": "help",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🤝",
        "form": "verb"
    },
    {
        "word": "talk",
        "level": "starter",
        "theme": "adjectives_A0",
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
        "theme": "neighbourhood_local_A2",
        "emoji": "🎮",
        "form": "verb"
    },
    {
        "word": "run",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🏃",
        "form": "verb"
    },
    {
        "word": "live",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🏠",
        "opposite": "die",
        "oppositeEmoji": "⚰️",
        "form": "verb"
    },
    {
        "word": "bring",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🎁",
        "form": "verb"
    },
    {
        "word": "sit",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🪑",
        "opposite": "stand",
        "oppositeEmoji": "🧍",
        "form": "verb"
    },
    {
        "word": "stand",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🧍",
        "opposite": "sit",
        "oppositeEmoji": "🪑",
        "form": "verb"
    },
    {
        "word": "lose",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📉",
        "opposite": "win",
        "oppositeEmoji": "🏆",
        "form": "verb"
    },
    {
        "word": "pay",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "💰",
        "form": "verb"
    },
    {
        "word": "meet",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🤝",
        "form": "verb"
    },
    {
        "word": "learn",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "📚",
        "form": "verb"
    },
    {
        "word": "change",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🔄",
        "form": "verb"
    },
    {
        "word": "understand",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "💡",
        "form": "verb"
    },
    {
        "word": "stop",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🛑",
        "form": "verb"
    },
    {
        "word": "add",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "➕",
        "form": "verb"
    },
    {
        "word": "spend",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "💸",
        "form": "verb"
    },
    {
        "word": "open",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📖",
        "opposite": "close",
        "oppositeEmoji": "🔒",
        "form": "verb"
    },
    {
        "word": "walk",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
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
        "theme": "neighbourhood_local_A2",
        "emoji": "🏆",
        "opposite": "lose",
        "oppositeEmoji": "📉",
        "form": "verb"
    },
    {
        "word": "remember",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🧠",
        "form": "verb"
    },
    {
        "word": "buy",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🛒",
        "opposite": "sell",
        "oppositeEmoji": "🏷️",
        "form": "verb"
    },
    {
        "word": "wait",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "⏳",
        "form": "verb"
    },
    {
        "word": "die",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "⚰️",
        "opposite": "live",
        "oppositeEmoji": "🏠",
        "form": "verb"
    },
    {
        "word": "send",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "✉️",
        "form": "verb"
    },
    {
        "word": "stay",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🏨",
        "form": "verb"
    },
    {
        "word": "fall",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "🍂",
        "form": "verb"
    },
    {
        "word": "cut",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "✂️",
        "form": "verb"
    },
    {
        "word": "pass",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🏔️",
        "form": "verb"
    },
    {
        "word": "sell",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🏷️",
        "opposite": "buy",
        "oppositeEmoji": "🛒",
        "form": "verb"
    },
    {
        "word": "pull",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🚜",
        "opposite": "push",
        "oppositeEmoji": "🛒",
        "form": "verb"
    },
    {
        "word": "push",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🛒",
        "opposite": "pull",
        "oppositeEmoji": "🚜",
        "form": "verb"
    },
    {
        "word": "hope",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🤞",
        "form": "verb"
    },
    {
        "word": "carry",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🎒",
        "form": "verb"
    },
    {
        "word": "break",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "💔",
        "form": "verb"
    },
    {
        "word": "receive",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📩",
        "form": "verb"
    },
    {
        "word": "agree",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "👍",
        "form": "verb"
    },
    {
        "word": "draw",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🎨",
        "form": "verb"
    },
    {
        "word": "share",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🍕",
        "form": "verb"
    },
    {
        "word": "smile",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "😊",
        "opposite": "cry",
        "oppositeEmoji": "😢",
        "form": "verb"
    },
    {
        "word": "cry",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "😢",
        "opposite": "smile",
        "oppositeEmoji": "😊",
        "form": "verb"
    },
    {
        "word": "dance",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "💃",
        "form": "verb"
    },
    {
        "word": "sing",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🎤",
        "form": "verb"
    },
    {
        "word": "jump",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🦘",
        "form": "verb"
    },
    {
        "word": "fly",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "✈️",
        "form": "verb"
    },
    {
        "word": "swim",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🏊",
        "form": "verb"
    },
    {
        "word": "wash",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🧼",
        "form": "verb"
    },
    {
        "word": "clean",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🧹",
        "form": "verb"
    },
    {
        "word": "cook",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🍳",
        "form": "verb"
    },
    {
        "word": "travel",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "✈️",
        "form": "verb"
    },
    {
        "word": "study",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "📖",
        "form": "verb"
    },
    {
        "word": "teach",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "👨‍🏫",
        "form": "verb"
    },
    {
        "word": "listen",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "🎧",
        "form": "verb"
    },
    {
        "word": "close",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🔒",
        "opposite": "open",
        "oppositeEmoji": "📖",
        "form": "verb"
    },
    {
        "word": "finish",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🏁",
        "opposite": "start",
        "oppositeEmoji": "▶️",
        "form": "verb"
    }
];
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
