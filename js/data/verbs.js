(function() {
    const verbsData = {
        "en": [
                {
                        "word": "wake up",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "⏰",
                        "form": "verb"
                },
                {
                        "word": "brush teeth",
                        "level": "elementary",
                        "theme": "neighbourhood_A2",
                        "emoji": "🪥",
                        "form": "verb"
                },
                {
                        "word": "shower",
                        "level": "elementary",
                        "theme": "neighbourhood_A2",
                        "emoji": "🚿",
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
                        "theme": "places_buildings_activities_A2",
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
                        "word": "drawing",
                        "level": "elementary",
                        "theme": "leisure_hobbies_A2",
                        "emoji": "🎨",
                        "form": "verb"
                },
                {
                        "word": "cooking",
                        "level": "elementary",
                        "theme": "leisure_hobbies_A2",
                        "emoji": "👨‍🍳",
                        "form": "verb"
                },
                {
                        "word": "reading",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "📖",
                        "form": "verb"
                },
                {
                        "word": "dancing",
                        "level": "elementary",
                        "theme": "leisure_hobbies_A2",
                        "emoji": "💃",
                        "form": "verb"
                },
                {
                        "word": "singing",
                        "level": "elementary",
                        "theme": "leisure_hobbies_A2",
                        "emoji": "🎤",
                        "form": "verb"
                },
                {
                        "word": "photography",
                        "level": "intermediate",
                        "theme": "society_community_B1",
                        "emoji": "📷",
                        "form": "verb"
                },
                {
                        "word": "gardening",
                        "level": "intermediate",
                        "theme": "society_community_B1",
                        "emoji": "🪴",
                        "form": "verb"
                },
                {
                        "word": "fishing",
                        "level": "intermediate",
                        "theme": "society_community_B1",
                        "emoji": "🎣",
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
                        "theme": "places_buildings_activities_A2",
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
                        "theme": "places_buildings_activities_A2",
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
                        "word": "seem",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "🤔",
                        "form": "verb"
                },
                {
                        "word": "feel",
                        "level": "starter",
                        "theme": "body_A0",
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
                        "theme": "places_buildings_activities_A2",
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
                        "word": "become",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "🦋",
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
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🎮",
                        "form": "verb"
                },
                {
                        "word": "run",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🏃",
                        "form": "verb"
                },
                {
                        "word": "move",
                        "level": "elementary",
                        "theme": "neighbourhood_A2",
                        "emoji": "📦",
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
                        "word": "believe",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "🙏",
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
                        "word": "happen",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "⚡",
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
                        "word": "include",
                        "level": "elementary",
                        "theme": "neighbourhood_A2",
                        "emoji": "➕",
                        "form": "verb"
                },
                {
                        "word": "continue",
                        "level": "elementary",
                        "theme": "neighbourhood_A2",
                        "emoji": "➡️",
                        "form": "verb"
                },
                {
                        "word": "set",
                        "level": "elementary",
                        "theme": "neighbourhood_A2",
                        "emoji": "⚙️",
                        "form": "verb"
                },
                {
                        "word": "learn",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
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
                        "word": "lead",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "👑",
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
                        "word": "follow",
                        "level": "elementary",
                        "theme": "transport_travel_A2",
                        "emoji": "👣",
                        "form": "verb"
                },
                {
                        "word": "stop",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🛑",
                        "form": "verb"
                },
                {
                        "word": "create",
                        "level": "elementary",
                        "theme": "leisure_hobbies_A2",
                        "emoji": "✨",
                        "form": "verb"
                },
                {
                        "word": "allow",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "✅",
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
                        "word": "grow",
                        "level": "elementary",
                        "theme": "environment_A2",
                        "emoji": "🌱",
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
                        "theme": "places_buildings_activities_A2",
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
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🏆",
                        "opposite": "lose",
                        "oppositeEmoji": "📉",
                        "form": "verb"
                },
                {
                        "word": "offer",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "🤲",
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
                        "word": "consider",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "🤔",
                        "form": "verb"
                },
                {
                        "word": "appear",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "👻",
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
                        "word": "serve",
                        "level": "elementary",
                        "theme": "neighbourhood_A2",
                        "emoji": "🍽️",
                        "form": "verb"
                },
                {
                        "word": "die",
                        "level": "starter",
                        "theme": "body_A0",
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
                        "word": "expect",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "💭",
                        "form": "verb"
                },
                {
                        "word": "build",
                        "level": "elementary",
                        "theme": "neighbourhood_A2",
                        "emoji": "🏗️",
                        "form": "verb"
                },
                {
                        "word": "stay",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
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
                        "word": "reach",
                        "level": "elementary",
                        "theme": "transport_travel_A2",
                        "emoji": "🏁",
                        "form": "verb"
                },
                {
                        "word": "kill",
                        "level": "elementary",
                        "theme": "health_body_A2",
                        "emoji": "⚔️",
                        "form": "verb"
                },
                {
                        "word": "remain",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "⏳",
                        "form": "verb"
                },
                {
                        "word": "suggest",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "💡",
                        "form": "verb"
                },
                {
                        "word": "raise",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "🙋",
                        "form": "verb"
                },
                {
                        "word": "pass",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
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
                        "word": "require",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "📜",
                        "form": "verb"
                },
                {
                        "word": "report",
                        "level": "elementary",
                        "theme": "career_A2",
                        "emoji": "📋",
                        "form": "verb"
                },
                {
                        "word": "decide",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "⚖️",
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
                        "word": "explain",
                        "level": "elementary",
                        "theme": "career_A2",
                        "emoji": "👨‍🏫",
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
                        "word": "develop",
                        "level": "elementary",
                        "theme": "career_A2",
                        "emoji": "💻",
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
                        "word": "support",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "🤝",
                        "form": "verb"
                },
                {
                        "word": "hit",
                        "level": "elementary",
                        "theme": "leisure_hobbies_A2",
                        "emoji": "🥊",
                        "form": "verb"
                },
                {
                        "word": "produce",
                        "level": "elementary",
                        "theme": "career_A2",
                        "emoji": "🏭",
                        "form": "verb"
                },
                {
                        "word": "face",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "👤",
                        "form": "verb"
                },
                {
                        "word": "cover",
                        "level": "elementary",
                        "theme": "neighbourhood_A2",
                        "emoji": "🧥",
                        "form": "verb"
                },
                {
                        "word": "describe",
                        "level": "elementary",
                        "theme": "career_A2",
                        "emoji": "📝",
                        "form": "verb"
                },
                {
                        "word": "draw",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🎨",
                        "form": "verb"
                },
                {
                        "word": "catch",
                        "level": "elementary",
                        "theme": "leisure_hobbies_A2",
                        "emoji": "🎣",
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
                        "theme": "places_buildings_activities_A2",
                        "emoji": "💃",
                        "form": "verb"
                },
                {
                        "word": "sing",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🎤",
                        "form": "verb"
                },
                {
                        "word": "jump",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🦘",
                        "form": "verb"
                },
                {
                        "word": "fly",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "✈️",
                        "form": "verb"
                },
                {
                        "word": "swim",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
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
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🍳",
                        "form": "verb"
                },
                {
                        "word": "travel",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "✈️",
                        "form": "verb"
                },
                {
                        "word": "study",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "📖",
                        "form": "verb"
                },
                {
                        "word": "teach",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "👨‍🏫",
                        "form": "verb"
                },
                {
                        "word": "listen",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
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
        ],
        "fr": [
                {
                        "word": "dormir",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "😴",
                        "subtext": "dormir 8 heures, aller dormir",
                        "form": "verb",
                        "plural": "dormirs"
                },
                {
                        "word": "dessiner",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🎨",
                        "form": "verb"
                },
                {
                        "word": "cuisiner",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🍳",
                        "form": "verb"
                },
                {
                        "word": "lire",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "📖",
                        "subtext": "lire un livre, lire les nouvelles",
                        "opposite": "écrire",
                        "oppositeEmoji": "✍️",
                        "form": "verb"
                },
                {
                        "word": "danser",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "💃",
                        "form": "verb"
                },
                {
                        "word": "chanter",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🎤",
                        "form": "verb"
                },
                {
                        "word": "jardiner",
                        "level": "intermediate",
                        "theme": "society_community_B1",
                        "form": "verb"
                },
                {
                        "word": "ensoleillé",
                        "level": "starter",
                        "theme": "weather_A0",
                        "emoji": "☀️",
                        "form": "verb"
                },
                {
                        "word": "nuageux",
                        "level": "elementary",
                        "theme": "environment_A2",
                        "emoji": "☁️",
                        "form": "verb"
                },
                {
                        "word": "collègue",
                        "level": "intermediate",
                        "theme": "career_development_B1",
                        "emoji": "👥",
                        "form": "verb"
                },
                {
                        "word": "durable",
                        "level": "upper-intermediate",
                        "theme": "environment_policy_B2",
                        "emoji": "🌱",
                        "form": "verb"
                },
                {
                        "word": "infrastructure",
                        "level": "advanced",
                        "theme": "science_tech_society_C1",
                        "emoji": "🏗️",
                        "form": "verb"
                },
                {
                        "word": "changement de paradigme",
                        "level": "proficiency",
                        "theme": "ontology_metaphysics_C2",
                        "emoji": "🔄",
                        "form": "verb"
                },
                {
                        "word": "télétravail",
                        "level": "intermediate",
                        "theme": "society_community_B1",
                        "emoji": "💻",
                        "form": "verb"
                },
                {
                        "word": "réchauffement climatique",
                        "level": "intermediate",
                        "theme": "environment_sustainability_B1",
                        "emoji": "🌡️",
                        "form": "verb"
                },
                {
                        "word": "intelligence artificielle",
                        "level": "upper-intermediate",
                        "theme": "technology_privacy_B2",
                        "emoji": "🤖",
                        "form": "verb"
                },
                {
                        "word": "manger",
                        "level": "starter",
                        "theme": "food_drink_A0",
                        "emoji": "🍎",
                        "subtext": "manger une pomme, dîner",
                        "opposite": "boire",
                        "oppositeEmoji": "🥛",
                        "form": "verb",
                        "definitions": [
                                {
                                        "text": "Mettre de la nourriture dans sa bouche et l'avaler.",
                                        "examples": [
                                                "Je mange une pomme.",
                                                "Qu'est-ce que tu veux manger ?"
                                        ]
                                }
                        ]
                },
                {
                        "word": "boire",
                        "level": "starter",
                        "theme": "food_drink_A0",
                        "emoji": "🥛",
                        "subtext": "boire de l'eau, boire du café",
                        "form": "verb",
                        "definitions": [
                                {
                                        "text": "Prendre un liquide par la bouche et l'avaler.",
                                        "examples": [
                                                "Je bois beaucoup d'eau.",
                                                "Tu veux boire quelque chose ?"
                                        ]
                                }
                        ]
                },
                {
                        "word": "parler",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "💬",
                        "subtext": "parler anglais, parler lentement",
                        "form": "verb",
                        "definitions": [
                                {
                                        "text": "S'exprimer par la parole.",
                                        "examples": [
                                                "Je parle à mon ami.",
                                                "Elle parle très bien français."
                                        ]
                                }
                        ]
                },
                {
                        "word": "voir",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "👁️",
                        "subtext": "voir un film, voir un ami",
                        "form": "verb",
                        "definitions": [
                                {
                                        "text": "Utiliser ses yeux pour regarder quelque chose.",
                                        "examples": [
                                                "Je vois un oiseau.",
                                                "As-tu vu ce film ?"
                                        ]
                                }
                        ]
                },
                {
                        "word": "marcher",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🚶",
                        "form": "verb",
                        "definitions": [
                                {
                                        "text": "Se déplacer à pied.",
                                        "examples": [
                                                "Je marche pour aller à l'école.",
                                                "Nous marchons dans la forêt."
                                        ]
                                }
                        ]
                },
                {
                        "word": "se souvenir",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "🧠",
                        "form": "verb"
                },
                {
                        "word": "considérer",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "🤔",
                        "form": "verb"
                },
                {
                        "word": "apparaître",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "👻",
                        "form": "verb"
                },
                {
                        "word": "acheter",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🛒",
                        "opposite": "vendre",
                        "oppositeEmoji": "🏷️",
                        "form": "verb"
                },
                {
                        "word": "attendre",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "💭",
                        "form": "verb"
                },
                {
                        "word": "servir",
                        "level": "elementary",
                        "theme": "neighbourhood_A2",
                        "emoji": "🍽️",
                        "form": "verb"
                },
                {
                        "word": "mourir",
                        "level": "starter",
                        "theme": "body_A0",
                        "emoji": "⚰️",
                        "opposite": "vivre",
                        "oppositeEmoji": "🏠",
                        "form": "verb"
                },
                {
                        "word": "envoyer",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "✉️",
                        "form": "verb"
                },
                {
                        "word": "construire",
                        "level": "elementary",
                        "theme": "neighbourhood_A2",
                        "emoji": "🏗️",
                        "form": "verb"
                },
                {
                        "word": "rester",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "⏳",
                        "form": "verb"
                },
                {
                        "word": "tomber",
                        "level": "starter",
                        "theme": "weather_A0",
                        "emoji": "🍂",
                        "form": "verb"
                },
                {
                        "word": "couper",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "✂️",
                        "form": "verb"
                },
                {
                        "word": "atteindre",
                        "level": "elementary",
                        "theme": "transport_travel_A2",
                        "emoji": "🏁",
                        "form": "verb"
                },
                {
                        "word": "tuer",
                        "level": "elementary",
                        "theme": "health_body_A2",
                        "emoji": "⚔️",
                        "form": "verb"
                },
                {
                        "word": "suggérer",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "💡",
                        "form": "verb"
                },
                {
                        "word": "lever",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "🙋",
                        "form": "verb"
                },
                {
                        "word": "passer",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🏔️",
                        "form": "verb"
                },
                {
                        "word": "vendre",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🏷️",
                        "opposite": "acheter",
                        "oppositeEmoji": "🛒",
                        "form": "verb"
                },
                {
                        "word": "exiger",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "📜",
                        "form": "verb"
                },
                {
                        "word": "rapporter",
                        "level": "elementary",
                        "theme": "career_A2",
                        "emoji": "📋",
                        "form": "verb"
                },
                {
                        "word": "décider",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "⚖️",
                        "form": "verb"
                },
                {
                        "word": "tirer",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🚜",
                        "opposite": "pousser",
                        "oppositeEmoji": "🛒",
                        "form": "verb"
                },
                {
                        "word": "pousser",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🛒",
                        "opposite": "tirer",
                        "oppositeEmoji": "🚜",
                        "form": "verb"
                },
                {
                        "word": "expliquer",
                        "level": "elementary",
                        "theme": "career_A2",
                        "emoji": "👨‍🏫",
                        "form": "verb"
                },
                {
                        "word": "espérer",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "🤞",
                        "form": "verb"
                },
                {
                        "word": "développer",
                        "level": "elementary",
                        "theme": "career_A2",
                        "emoji": "💻",
                        "form": "verb"
                },
                {
                        "word": "porter",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🎒",
                        "form": "verb"
                },
                {
                        "word": "casser",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "💔",
                        "form": "verb"
                },
                {
                        "word": "recevoir",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "📩",
                        "form": "verb"
                },
                {
                        "word": "être d'accord",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "👍",
                        "form": "verb"
                },
                {
                        "word": "soutenir",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "🤝",
                        "form": "verb"
                },
                {
                        "word": "frapper",
                        "level": "elementary",
                        "theme": "leisure_hobbies_A2",
                        "emoji": "🥊",
                        "form": "verb"
                },
                {
                        "word": "produire",
                        "level": "elementary",
                        "theme": "career_A2",
                        "emoji": "🏭",
                        "form": "verb"
                },
                {
                        "word": "faire face",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "👤",
                        "form": "verb"
                },
                {
                        "word": "couvrir",
                        "level": "elementary",
                        "theme": "neighbourhood_A2",
                        "emoji": "🧥",
                        "form": "verb"
                },
                {
                        "word": "décrire",
                        "level": "elementary",
                        "theme": "career_A2",
                        "emoji": "📝",
                        "form": "verb"
                },
                {
                        "word": "attraper",
                        "level": "elementary",
                        "theme": "leisure_hobbies_A2",
                        "emoji": "🎣",
                        "form": "verb"
                },
                {
                        "word": "partager",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "🍕",
                        "form": "verb"
                },
                {
                        "word": "sourire",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "😊",
                        "opposite": "pleurer",
                        "oppositeEmoji": "😢",
                        "form": "verb"
                },
                {
                        "word": "pleurer",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "😢",
                        "opposite": "sourire",
                        "oppositeEmoji": "😊",
                        "form": "verb"
                },
                {
                        "word": "sauter",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🦘",
                        "form": "verb"
                },
                {
                        "word": "voler",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "✈️",
                        "form": "verb"
                },
                {
                        "word": "nager",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🏊",
                        "form": "verb"
                },
                {
                        "word": "laver",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🧼",
                        "form": "verb"
                },
                {
                        "word": "nettoyer",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🧹",
                        "form": "verb"
                },
                {
                        "word": "voyager",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "✈️",
                        "form": "verb"
                },
                {
                        "word": "étudier",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "📖",
                        "form": "verb"
                },
                {
                        "word": "enseigner",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "👨‍🏫",
                        "form": "verb"
                },
                {
                        "word": "écouter",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🎧",
                        "form": "verb"
                },
                {
                        "word": "fermer",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🔒",
                        "opposite": "ouvrir",
                        "oppositeEmoji": "📖",
                        "form": "verb"
                },
                {
                        "word": "finir",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🏁",
                        "opposite": "commencer",
                        "oppositeEmoji": "▶️",
                        "form": "verb"
                }
        ],
        "it": [
                {
                        "word": "disegnare",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🎨",
                        "form": "verb",
                        "definitions": [
                                {
                                        "text": "Rappresentare qualcosa con linee e colori su carta.",
                                        "examples": [
                                                "Mi piace disegnare paesaggi.",
                                                "Disegna un cerchio."
                                        ]
                                }
                        ]
                },
                {
                        "word": "cucinare",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🍳",
                        "form": "verb"
                },
                {
                        "word": "leggere",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "📖",
                        "subtext": "leggere un libro, leggere le notizie",
                        "opposite": "scrivere",
                        "oppositeEmoji": "✍️",
                        "form": "verb"
                },
                {
                        "word": "danzare",
                        "level": "elementary",
                        "theme": "leisure_hobbies_A2",
                        "form": "verb"
                },
                {
                        "word": "cantare",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🎤",
                        "form": "verb"
                },
                {
                        "word": "giardinaggio",
                        "level": "intermediate",
                        "theme": "society_community_B1",
                        "emoji": "🪴",
                        "form": "verb"
                },
                {
                        "word": "soleggiato",
                        "level": "starter",
                        "theme": "weather_A0",
                        "emoji": "☀️",
                        "form": "verb"
                },
                {
                        "word": "piovoso",
                        "level": "starter",
                        "theme": "weather_A0",
                        "emoji": "🌧️",
                        "form": "verb"
                },
                {
                        "word": "caldo",
                        "level": "intermediate",
                        "theme": "environment_sustainability_B1",
                        "emoji": "🔥",
                        "form": "verb"
                },
                {
                        "word": "infrastruttura",
                        "level": "advanced",
                        "theme": "science_tech_society_C1",
                        "emoji": "🏗️",
                        "form": "verb"
                },
                {
                        "word": "cambio di paradigma",
                        "level": "proficiency",
                        "theme": "ontology_metaphysics_C2",
                        "emoji": "🔄",
                        "form": "verb"
                },
                {
                        "word": "telelavoro",
                        "level": "intermediate",
                        "theme": "society_community_B1",
                        "emoji": "💻",
                        "form": "verb"
                },
                {
                        "word": "riscaldamento globale",
                        "level": "intermediate",
                        "theme": "environment_sustainability_B1",
                        "emoji": "🌡️",
                        "form": "verb"
                },
                {
                        "word": "intelligenza artificiale",
                        "level": "upper-intermediate",
                        "theme": "technology_privacy_B2",
                        "emoji": "🤖",
                        "form": "verb"
                },
                {
                        "word": "mangiare",
                        "level": "starter",
                        "theme": "food_drink_A0",
                        "emoji": "🍎",
                        "subtext": "mangiare una mela, cenare",
                        "opposite": "bere",
                        "oppositeEmoji": "🥛",
                        "form": "verb",
                        "definitions": [
                                {
                                        "text": "Mettere del cibo in bocca e deglutire.",
                                        "examples": [
                                                "Mangio una mela al giorno.",
                                                "Cosa vuoi mangiare?"
                                        ]
                                }
                        ]
                },
                {
                        "word": "bere",
                        "level": "starter",
                        "theme": "food_drink_A0",
                        "emoji": "🥛",
                        "subtext": "bere acqua, bere caffè",
                        "form": "verb",
                        "definitions": [
                                {
                                        "text": "Introdurre un liquido in bocca e deglutire.",
                                        "examples": [
                                                "Bevo molta acqua.",
                                                "Vuoi qualcosa da bere?"
                                        ]
                                }
                        ]
                },
                {
                        "word": "parlare",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "💬",
                        "subtext": "parlare inglese, parlare lentamente",
                        "form": "verb",
                        "definitions": [
                                {
                                        "text": "Esprimersi con la voce.",
                                        "examples": [
                                                "Parlo con il mio amico.",
                                                "Lui parla tre lingue."
                                        ]
                                }
                        ]
                },
                {
                        "word": "vedere",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "👁️",
                        "subtext": "vedere un film, vedere un amico",
                        "form": "verb",
                        "definitions": [
                                {
                                        "text": "Usare gli occhi per guardare qualcosa.",
                                        "examples": [
                                                "Vedo un uccello.",
                                                "Hai visto quel film?"
                                        ]
                                }
                        ]
                },
                {
                        "word": "camminare",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🚶",
                        "form": "verb",
                        "definitions": [
                                {
                                        "text": "Muoversi a piedi.",
                                        "examples": [
                                                "Mi piace camminare in montagna.",
                                                "Camminiamo verso casa."
                                        ]
                                }
                        ]
                },
                {
                        "word": "ricordare",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "🧠",
                        "form": "verb"
                },
                {
                        "word": "considerare",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "🤔",
                        "form": "verb"
                },
                {
                        "word": "apparire",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "👻",
                        "form": "verb"
                },
                {
                        "word": "comprare",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🛒",
                        "opposite": "vendere",
                        "oppositeEmoji": "🏷️",
                        "form": "verb"
                },
                {
                        "word": "aspettare",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "⏳",
                        "form": "verb"
                },
                {
                        "word": "servire",
                        "level": "elementary",
                        "theme": "neighbourhood_A2",
                        "emoji": "🍽️",
                        "form": "verb"
                },
                {
                        "word": "morire",
                        "level": "starter",
                        "theme": "body_A0",
                        "emoji": "⚰️",
                        "opposite": "vivere",
                        "oppositeEmoji": "🏠",
                        "form": "verb"
                },
                {
                        "word": "inviare",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "✉️",
                        "form": "verb"
                },
                {
                        "word": "aspettarsi",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "💭",
                        "form": "verb"
                },
                {
                        "word": "costruire",
                        "level": "elementary",
                        "theme": "neighbourhood_A2",
                        "emoji": "🏗️",
                        "form": "verb"
                },
                {
                        "word": "restare",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🏨",
                        "form": "verb"
                },
                {
                        "word": "cadere",
                        "level": "starter",
                        "theme": "weather_A0",
                        "emoji": "🍂",
                        "form": "verb"
                },
                {
                        "word": "tagliare",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "✂️",
                        "form": "verb"
                },
                {
                        "word": "raggiungere",
                        "level": "elementary",
                        "theme": "transport_travel_A2",
                        "emoji": "🏁",
                        "form": "verb"
                },
                {
                        "word": "uccidere",
                        "level": "elementary",
                        "theme": "health_body_A2",
                        "emoji": "⚔️",
                        "form": "verb"
                },
                {
                        "word": "rimanere",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "⏳",
                        "form": "verb"
                },
                {
                        "word": "suggerire",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "💡",
                        "form": "verb"
                },
                {
                        "word": "alzare",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "🙋",
                        "form": "verb"
                },
                {
                        "word": "passare",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🏔️",
                        "form": "verb"
                },
                {
                        "word": "vendere",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🏷️",
                        "opposite": "comprare",
                        "oppositeEmoji": "🛒",
                        "form": "verb"
                },
                {
                        "word": "richiedere",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "📜",
                        "form": "verb"
                },
                {
                        "word": "riferire",
                        "level": "elementary",
                        "theme": "career_A2",
                        "emoji": "📋",
                        "form": "verb"
                },
                {
                        "word": "decidere",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "⚖️",
                        "form": "verb"
                },
                {
                        "word": "tirare",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🚜",
                        "opposite": "spingere",
                        "oppositeEmoji": "🛒",
                        "form": "verb"
                },
                {
                        "word": "spingere",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🛒",
                        "opposite": "tirare",
                        "oppositeEmoji": "🚜",
                        "form": "verb"
                },
                {
                        "word": "spiegare",
                        "level": "elementary",
                        "theme": "career_A2",
                        "emoji": "👨‍🏫",
                        "form": "verb"
                },
                {
                        "word": "sperare",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "🤞",
                        "form": "verb"
                },
                {
                        "word": "sviluppare",
                        "level": "elementary",
                        "theme": "career_A2",
                        "emoji": "💻",
                        "form": "verb"
                },
                {
                        "word": "rompere",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "💔",
                        "form": "verb"
                },
                {
                        "word": "ricevere",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "📩",
                        "form": "verb"
                },
                {
                        "word": "essere d'accordo",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "👍",
                        "form": "verb"
                },
                {
                        "word": "sostenere",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "🤝",
                        "form": "verb"
                },
                {
                        "word": "colpire",
                        "level": "elementary",
                        "theme": "leisure_hobbies_A2",
                        "emoji": "🥊",
                        "form": "verb"
                },
                {
                        "word": "produrre",
                        "level": "elementary",
                        "theme": "career_A2",
                        "emoji": "🏭",
                        "form": "verb"
                },
                {
                        "word": "affrontare",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "👤",
                        "form": "verb"
                },
                {
                        "word": "coprire",
                        "level": "elementary",
                        "theme": "neighbourhood_A2",
                        "emoji": "🧥",
                        "form": "verb"
                },
                {
                        "word": "descrivere",
                        "level": "elementary",
                        "theme": "career_A2",
                        "emoji": "📝",
                        "form": "verb"
                },
                {
                        "word": "catturare",
                        "level": "elementary",
                        "theme": "leisure_hobbies_A2",
                        "emoji": "🎣",
                        "form": "verb"
                },
                {
                        "word": "condividere",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "🍕",
                        "form": "verb"
                },
                {
                        "word": "sorridere",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "😊",
                        "opposite": "piangere",
                        "oppositeEmoji": "😢",
                        "form": "verb"
                },
                {
                        "word": "piangere",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "😢",
                        "opposite": "sorridere",
                        "oppositeEmoji": "😊",
                        "form": "verb"
                },
                {
                        "word": "ballare",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "💃",
                        "form": "verb"
                },
                {
                        "word": "saltare",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🦘",
                        "form": "verb"
                },
                {
                        "word": "volare",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "✈️",
                        "form": "verb"
                },
                {
                        "word": "nuotare",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🏊",
                        "form": "verb"
                },
                {
                        "word": "lavare",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🧼",
                        "form": "verb"
                },
                {
                        "word": "pulire",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🧹",
                        "form": "verb"
                },
                {
                        "word": "viaggiare",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "✈️",
                        "form": "verb"
                },
                {
                        "word": "studiare",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "📖",
                        "form": "verb"
                },
                {
                        "word": "insegnare",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "👨‍🏫",
                        "form": "verb"
                },
                {
                        "word": "ascoltare",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🎧",
                        "form": "verb"
                },
                {
                        "word": "chiudere",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🔒",
                        "opposite": "aprire",
                        "oppositeEmoji": "📖",
                        "form": "verb"
                },
                {
                        "word": "finire",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🏁",
                        "opposite": "iniziare",
                        "oppositeEmoji": "▶️",
                        "form": "verb"
                }
        ],
        "ru": [
                {
                        "word": "обезьяна",
                        "level": "intermediate",
                        "theme": "society_community_B1",
                        "form": "verb"
                },
                {
                        "word": "лошадь",
                        "level": "elementary",
                        "theme": "neighbourhood_A2",
                        "emoji": "🐎",
                        "form": "verb"
                },
                {
                        "word": "рисование",
                        "level": "elementary",
                        "theme": "leisure_hobbies_A2",
                        "form": "verb"
                },
                {
                        "word": "готовка",
                        "level": "elementary",
                        "theme": "leisure_hobbies_A2",
                        "form": "verb"
                },
                {
                        "word": "чтение",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "form": "verb"
                },
                {
                        "word": "танцы",
                        "level": "elementary",
                        "theme": "leisure_hobbies_A2",
                        "form": "verb"
                },
                {
                        "word": "пение",
                        "level": "elementary",
                        "theme": "leisure_hobbies_A2",
                        "form": "verb"
                },
                {
                        "word": "садоводство",
                        "level": "intermediate",
                        "theme": "society_community_B1",
                        "emoji": "🪴",
                        "form": "verb"
                },
                {
                        "word": "ветрено",
                        "level": "elementary",
                        "theme": "environment_A2",
                        "emoji": "💨",
                        "form": "verb"
                },
                {
                        "word": "коллега",
                        "level": "intermediate",
                        "theme": "career_development_B1",
                        "emoji": "👥",
                        "form": "verb"
                },
                {
                        "word": "устойчивый",
                        "level": "upper-intermediate",
                        "theme": "environment_policy_B2",
                        "emoji": "🌱",
                        "form": "verb"
                },
                {
                        "word": "инфраструктура",
                        "level": "advanced",
                        "theme": "science_tech_society_C1",
                        "emoji": "🏗️",
                        "form": "verb"
                },
                {
                        "word": "смена парадигмы",
                        "level": "proficiency",
                        "theme": "ontology_metaphysics_C2",
                        "emoji": "🔄",
                        "form": "verb"
                },
                {
                        "word": "удаленная работа",
                        "level": "intermediate",
                        "theme": "society_community_B1",
                        "emoji": "💻",
                        "form": "verb"
                },
                {
                        "word": "глобальное потепление",
                        "level": "intermediate",
                        "theme": "environment_sustainability_B1",
                        "emoji": "🌡️",
                        "form": "verb"
                },
                {
                        "word": "искусственный интеллект",
                        "level": "upper-intermediate",
                        "theme": "technology_privacy_B2",
                        "emoji": "🤖",
                        "form": "verb"
                },
                {
                        "word": "есть",
                        "level": "starter",
                        "theme": "food_drink_A0",
                        "emoji": "🍎",
                        "subtext": "есть яблоко, ужинать",
                        "opposite": "пить",
                        "oppositeEmoji": "🥛",
                        "form": "verb",
                        "definitions": [
                                {
                                        "text": "Класть еду в рот и глотать ее.",
                                        "examples": [
                                                "Я ем яблоко каждый день.",
                                                "Что ты хочешь поесть?"
                                        ]
                                }
                        ]
                },
                {
                        "word": "пить",
                        "level": "starter",
                        "theme": "food_drink_A0",
                        "emoji": "🥛",
                        "subtext": "пить воду, пить кофе",
                        "form": "verb",
                        "definitions": [
                                {
                                        "text": "Принимать жидкость внутрь через рот.",
                                        "examples": [
                                                "Я пью много воды.",
                                                "Хочешь чего-нибудь выпить?"
                                        ]
                                }
                        ]
                },
                {
                        "word": "видеть",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "👁️",
                        "subtext": "видеть фильм, видеть друга",
                        "form": "verb",
                        "definitions": [
                                {
                                        "text": "Воспринимать что-либо глазами.",
                                        "examples": [
                                                "Я вижу птицу.",
                                                "Ты видел этот фильм?"
                                        ]
                                }
                        ]
                },
                {
                        "word": "читать",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "📖",
                        "subtext": "читать книгу, читать новости",
                        "opposite": "писать",
                        "oppositeEmoji": "✍️",
                        "form": "verb"
                },
                {
                        "word": "писать",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "✍️",
                        "subtext": "писать письмо, писать сообщение",
                        "opposite": "читать",
                        "oppositeEmoji": "📖",
                        "form": "verb"
                },
                {
                        "word": "приходить",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🏃‍♂️",
                        "subtext": "прийти сюда, прийти домой",
                        "opposite": "идти",
                        "oppositeEmoji": "🚶",
                        "form": "verb"
                },
                {
                        "word": "давать",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🎁",
                        "subtext": "дарить подарок, помогать",
                        "opposite": "брать",
                        "oppositeEmoji": "👜",
                        "form": "verb"
                },
                {
                        "word": "разговаривать",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "💬",
                        "form": "verb",
                        "definitions": [
                                {
                                        "text": "Общаться с помощью слов.",
                                        "examples": [
                                                "Я люблю разговаривать с друзьями.",
                                                "Они долго разговаривали."
                                        ]
                                }
                        ]
                },
                {
                        "word": "открывать",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "📖",
                        "opposite": "закрывать",
                        "oppositeEmoji": "🔒",
                        "form": "verb"
                },
                {
                        "word": "гулять",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🚶",
                        "form": "verb",
                        "definitions": [
                                {
                                        "text": "Идти пешком ради удовольствия.",
                                        "examples": [
                                                "Я гуляю в парке.",
                                                "Пойдем погуляем?"
                                        ]
                                }
                        ]
                },
                {
                        "word": "выигрывать",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🏆",
                        "opposite": "терять",
                        "oppositeEmoji": "📉",
                        "form": "verb"
                },
                {
                        "word": "предлагать",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "💡",
                        "form": "verb"
                },
                {
                        "word": "помнить",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "🧠",
                        "form": "verb"
                },
                {
                        "word": "рассматривать",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "🤔",
                        "form": "verb"
                },
                {
                        "word": "появляться",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "👻",
                        "form": "verb"
                },
                {
                        "word": "покупать",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🛒",
                        "opposite": "продавать",
                        "oppositeEmoji": "🏷️",
                        "form": "verb"
                },
                {
                        "word": "ждать",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "⏳",
                        "form": "verb"
                },
                {
                        "word": "служить",
                        "level": "elementary",
                        "theme": "neighbourhood_A2",
                        "emoji": "🍽️",
                        "form": "verb"
                },
                {
                        "word": "умирать",
                        "level": "starter",
                        "theme": "body_A0",
                        "emoji": "⚰️",
                        "opposite": "жить",
                        "oppositeEmoji": "🏠",
                        "form": "verb"
                },
                {
                        "word": "посылать",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "✉️",
                        "form": "verb"
                },
                {
                        "word": "ожидать",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "💭",
                        "form": "verb"
                },
                {
                        "word": "строить",
                        "level": "elementary",
                        "theme": "neighbourhood_A2",
                        "emoji": "🏗️",
                        "form": "verb"
                },
                {
                        "word": "оставаться",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "⏳",
                        "form": "verb"
                },
                {
                        "word": "падать",
                        "level": "starter",
                        "theme": "weather_A0",
                        "emoji": "🍂",
                        "form": "verb"
                },
                {
                        "word": "резать",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "✂️",
                        "form": "verb"
                },
                {
                        "word": "достигать",
                        "level": "elementary",
                        "theme": "transport_travel_A2",
                        "emoji": "🏁",
                        "form": "verb"
                },
                {
                        "word": "убивать",
                        "level": "elementary",
                        "theme": "health_body_A2",
                        "emoji": "⚔️",
                        "form": "verb"
                },
                {
                        "word": "поднимать",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "🙋",
                        "form": "verb"
                },
                {
                        "word": "проходить",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🏔️",
                        "form": "verb"
                },
                {
                        "word": "продавать",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🏷️",
                        "opposite": "покупать",
                        "oppositeEmoji": "🛒",
                        "form": "verb"
                },
                {
                        "word": "требовать",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "📜",
                        "form": "verb"
                },
                {
                        "word": "сообщать",
                        "level": "elementary",
                        "theme": "career_A2",
                        "emoji": "📋",
                        "form": "verb"
                },
                {
                        "word": "решать",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "⚖️",
                        "form": "verb"
                },
                {
                        "word": "тянуть",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🚜",
                        "opposite": "толкать",
                        "oppositeEmoji": "🛒",
                        "form": "verb"
                },
                {
                        "word": "толкать",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🛒",
                        "opposite": "тянуть",
                        "oppositeEmoji": "🚜",
                        "form": "verb"
                },
                {
                        "word": "объяснять",
                        "level": "elementary",
                        "theme": "career_A2",
                        "emoji": "👨‍🏫",
                        "form": "verb"
                },
                {
                        "word": "надеяться",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "🤞",
                        "form": "verb"
                },
                {
                        "word": "развивать",
                        "level": "elementary",
                        "theme": "career_A2",
                        "emoji": "💻",
                        "form": "verb"
                },
                {
                        "word": "нести",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🎒",
                        "form": "verb"
                },
                {
                        "word": "ломать",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "💔",
                        "form": "verb"
                },
                {
                        "word": "соглашаться",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "👍",
                        "form": "verb"
                },
                {
                        "word": "поддерживать",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "🤝",
                        "form": "verb"
                },
                {
                        "word": "ударять",
                        "level": "elementary",
                        "theme": "leisure_hobbies_A2",
                        "emoji": "🥊",
                        "form": "verb"
                },
                {
                        "word": "производить",
                        "level": "elementary",
                        "theme": "career_A2",
                        "emoji": "🏭",
                        "form": "verb"
                },
                {
                        "word": "сталкиваться",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "👤",
                        "form": "verb"
                },
                {
                        "word": "покрывать",
                        "level": "elementary",
                        "theme": "neighbourhood_A2",
                        "emoji": "🧥",
                        "form": "verb"
                },
                {
                        "word": "описывать",
                        "level": "elementary",
                        "theme": "career_A2",
                        "emoji": "📝",
                        "form": "verb"
                },
                {
                        "word": "рисовать",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🎨",
                        "form": "verb",
                        "definitions": [
                                {
                                        "text": "Изображать что-либо с помощью линий и красок на бумаге.",
                                        "examples": [
                                                "Мне нравится рисовать пейзажи.",
                                                "Нарисуй круг."
                                        ]
                                }
                        ]
                },
                {
                        "word": "ловить",
                        "level": "elementary",
                        "theme": "leisure_hobbies_A2",
                        "emoji": "🎣",
                        "form": "verb"
                },
                {
                        "word": "делиться",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "🍕",
                        "form": "verb"
                },
                {
                        "word": "улыбаться",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "😊",
                        "opposite": "плакать",
                        "oppositeEmoji": "😢",
                        "form": "verb"
                },
                {
                        "word": "плакать",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "😢",
                        "opposite": "улыбаться",
                        "oppositeEmoji": "😊",
                        "form": "verb"
                },
                {
                        "word": "танцевать",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "💃",
                        "form": "verb"
                },
                {
                        "word": "петь",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🎤",
                        "form": "verb"
                },
                {
                        "word": "прыгать",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🦘",
                        "form": "verb"
                },
                {
                        "word": "летать",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "✈️",
                        "form": "verb"
                },
                {
                        "word": "плавать",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🏊",
                        "form": "verb"
                },
                {
                        "word": "мыть",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🧼",
                        "form": "verb"
                },
                {
                        "word": "чистить",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🧹",
                        "form": "verb"
                },
                {
                        "word": "готовить",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🍳",
                        "form": "verb"
                },
                {
                        "word": "путешествовать",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "✈️",
                        "form": "verb"
                },
                {
                        "word": "учиться",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "📖",
                        "form": "verb"
                },
                {
                        "word": "преподавать",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "👨‍🏫",
                        "form": "verb"
                },
                {
                        "word": "слушать",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🎧",
                        "form": "verb"
                },
                {
                        "word": "закрывать",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🔒",
                        "opposite": "открывать",
                        "oppositeEmoji": "📖",
                        "form": "verb"
                },
                {
                        "word": "заканчивать",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🏁",
                        "opposite": "начинать",
                        "oppositeEmoji": "▶️",
                        "form": "verb"
                }
        ],
        "el": [
                {
                        "word": "χορός",
                        "level": "elementary",
                        "theme": "leisure_hobbies_A2",
                        "form": "verb"
                },
                {
                        "word": "τραγούδι",
                        "level": "elementary",
                        "theme": "leisure_hobbies_A2",
                        "form": "verb"
                },
                {
                        "word": "κηπουρική",
                        "level": "intermediate",
                        "theme": "society_community_B1",
                        "emoji": "🪴",
                        "form": "verb"
                },
                {
                        "word": "ηλιόλουστος",
                        "level": "starter",
                        "theme": "weather_A0",
                        "emoji": "☀️",
                        "form": "verb"
                },
                {
                        "word": "βροχερός",
                        "level": "starter",
                        "theme": "weather_A0",
                        "emoji": "🌧️",
                        "form": "verb"
                },
                {
                        "word": "χιονισμένος",
                        "level": "elementary",
                        "theme": "environment_A2",
                        "emoji": "❄️",
                        "form": "verb"
                },
                {
                        "word": "ανεμώδης",
                        "level": "elementary",
                        "theme": "environment_A2",
                        "emoji": "💨",
                        "form": "verb"
                },
                {
                        "word": "συννεφιασμένος",
                        "level": "elementary",
                        "theme": "environment_A2",
                        "emoji": "☁️",
                        "form": "verb"
                },
                {
                        "word": "πόδι",
                        "level": "starter",
                        "theme": "body_A0",
                        "emoji": "🦶",
                        "form": "verb"
                },
                {
                        "word": "καφές",
                        "theme": "food_drink_A0",
                        "level": "starter",
                        "article": "ο",
                        "baseWord": "καφές",
                        "emoji": "☕",
                        "form": "verb",
                        "plural": "καφές"
                },
                {
                        "word": "μπίρα",
                        "theme": "food_drink_A0",
                        "level": "starter",
                        "article": "η",
                        "baseWord": "μπίρα",
                        "emoji": "🍺",
                        "form": "verb",
                        "plural": "μπίρα"
                },
                {
                        "word": "νερό",
                        "theme": "food_drink_A0",
                        "level": "starter",
                        "article": "το",
                        "baseWord": "νερό",
                        "emoji": "🚰",
                        "form": "verb",
                        "plural": "νερό",
                        "definitions": [
                                {
                                        "text": "Ένα διαφανές υγρό που πίνουμε για να ζήσουμε.",
                                        "examples": [
                                                "Πίνω ένα ποτήρι νερό.",
                                                "Το νερό είναι κρύο."
                                        ]
                                }
                        ]
                },
                {
                        "word": "βιβλίο",
                        "theme": "home_A0",
                        "level": "starter",
                        "article": "το",
                        "baseWord": "βιβλίο",
                        "numberPlural": "2 βιβλίο",
                        "answer": "δύο βιβλία",
                        "emoji": "📖",
                        "form": "verb",
                        "plural": "βιβλία",
                        "definitions": [
                                {
                                        "text": "Πολλές σελίδες με λέξεις και εικόνες που διαβάζετε.",
                                        "examples": [
                                                "Διαβάζω ένα βιβλίο κάθε βράδυ.",
                                                "Αυτό το βιβλίο είναι ενδιαφέρον."
                                        ]
                                }
                        ]
                },
                {
                        "word": "είμαι",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "👤",
                        "subtext": "κρυώνω, είμαι 20 χρονών",
                        "form": "verb"
                },
                {
                        "word": "έχω",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "👜",
                        "subtext": "τρώω πρωινό, έχω ένα αυτοκίνητο",
                        "form": "verb"
                },
                {
                        "word": "πηγαίνω",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🚶",
                        "subtext": "πηγαίνω στο σχολείο, πηγαίνω σπίτι",
                        "form": "verb"
                },
                {
                        "word": "τρώω",
                        "level": "starter",
                        "theme": "food_drink_A0",
                        "emoji": "🍎",
                        "subtext": "τρώω ένα μήλο, τρώω βραδινό",
                        "opposite": "πίνω",
                        "oppositeEmoji": "🥛",
                        "form": "verb",
                        "definitions": [
                                {
                                        "text": "Βάζω τροφή στο στόμα και την καταπίνω.",
                                        "examples": [
                                                "Τρώω ένα μήλο κάθε μέρα.",
                                                "Τι θέλεις να φας;"
                                        ]
                                }
                        ]
                },
                {
                        "word": "πίνω",
                        "level": "starter",
                        "theme": "food_drink_A0",
                        "emoji": "🥛",
                        "subtext": "πίνω νερό, πίνω καφέ",
                        "form": "verb",
                        "definitions": [
                                {
                                        "text": "Βάζω υγρό στο στόμα και το καταπίνω.",
                                        "examples": [
                                                "Πίνω πολύ νερό.",
                                                "Θέλεις κάτι να πιεις;"
                                        ]
                                }
                        ]
                },
                {
                        "word": "βλέπω",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "👁️",
                        "subtext": "βλέπω μια ταινία, βλέπω ένα φίλο",
                        "form": "verb",
                        "definitions": [
                                {
                                        "text": "Χρησιμοποιώ τα μάτια μου για να κοιτάξω κάτι.",
                                        "examples": [
                                                "Βλέπω ένα πουλί.",
                                                "Είδες αυτή την ταινία;"
                                        ]
                                }
                        ]
                },
                {
                        "word": "βοηθάω",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "🤝",
                        "form": "verb",
                        "definitions": [
                                {
                                        "text": "Δίνω βοήθεια σε κάποιον που τη χρειάζεται.",
                                        "examples": [
                                                "Μπορώ να σε βοηθήσω;",
                                                "Βοηθάει τη μητέρα του στο σπίτι."
                                        ]
                                }
                        ]
                },
                {
                        "word": "περπατάω",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🚶",
                        "form": "verb",
                        "definitions": [
                                {
                                        "text": "Μετακινούμαι με τα πόδια.",
                                        "examples": [
                                                "Περπατάω για να πάω στο σχολείο.",
                                                "Ας περπατήσουμε στο πάρκο."
                                        ]
                                }
                        ]
                },
                {
                        "word": "αγοράζω",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🛒",
                        "opposite": "πουλάω",
                        "oppositeEmoji": "🏷️",
                        "form": "verb"
                },
                {
                        "word": "περιμένω",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "💭",
                        "form": "verb"
                },
                {
                        "word": "υπηρετώ",
                        "level": "elementary",
                        "theme": "neighbourhood_A2",
                        "emoji": "🍽️",
                        "form": "verb"
                },
                {
                        "word": "πεθαίνω",
                        "level": "starter",
                        "theme": "body_A0",
                        "emoji": "⚰️",
                        "opposite": "ζω",
                        "oppositeEmoji": "🏠",
                        "form": "verb"
                },
                {
                        "word": "στέλνω",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "✉️",
                        "form": "verb"
                },
                {
                        "word": "χτίζω",
                        "level": "elementary",
                        "theme": "neighbourhood_A2",
                        "emoji": "🏗️",
                        "form": "verb"
                },
                {
                        "word": "μένω",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🏨",
                        "form": "verb"
                },
                {
                        "word": "πέφτω",
                        "level": "starter",
                        "theme": "weather_A0",
                        "emoji": "🍂",
                        "form": "verb"
                },
                {
                        "word": "κόβω",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "✂️",
                        "form": "verb"
                },
                {
                        "word": "φτάνω",
                        "level": "elementary",
                        "theme": "transport_travel_A2",
                        "emoji": "🏁",
                        "form": "verb"
                },
                {
                        "word": "σκοτώνω",
                        "level": "elementary",
                        "theme": "health_body_A2",
                        "emoji": "⚔️",
                        "form": "verb"
                },
                {
                        "word": "παραμένω",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "⏳",
                        "form": "verb"
                },
                {
                        "word": "προτείνω",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "💡",
                        "form": "verb"
                },
                {
                        "word": "σηκώνω",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "🙋",
                        "form": "verb"
                },
                {
                        "word": "περνώ",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🏔️",
                        "form": "verb"
                },
                {
                        "word": "πουλάω",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🏷️",
                        "opposite": "αγοράζω",
                        "oppositeEmoji": "🛒",
                        "form": "verb"
                },
                {
                        "word": "απαιτώ",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "📜",
                        "form": "verb"
                },
                {
                        "word": "αναφέρω",
                        "level": "elementary",
                        "theme": "career_A2",
                        "emoji": "📋",
                        "form": "verb"
                },
                {
                        "word": "αποφασίζω",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "⚖️",
                        "form": "verb"
                },
                {
                        "word": "τραβάω",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🚜",
                        "opposite": "σπρώχνω",
                        "oppositeEmoji": "🛒",
                        "form": "verb"
                },
                {
                        "word": "σπρώχνω",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🛒",
                        "opposite": "τραβάω",
                        "oppositeEmoji": "🚜",
                        "form": "verb"
                },
                {
                        "word": "εξηγώ",
                        "level": "elementary",
                        "theme": "career_A2",
                        "emoji": "👨‍🏫",
                        "form": "verb"
                },
                {
                        "word": "ελπίζω",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "🤞",
                        "form": "verb"
                },
                {
                        "word": "αναπτύσσω",
                        "level": "elementary",
                        "theme": "career_A2",
                        "emoji": "💻",
                        "form": "verb"
                },
                {
                        "word": "κουβαλώ",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🎒",
                        "form": "verb"
                },
                {
                        "word": "σπάω",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "💔",
                        "form": "verb"
                },
                {
                        "word": "λαμβάνω",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "📩",
                        "form": "verb"
                },
                {
                        "word": "συμφωνώ",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "👍",
                        "form": "verb"
                },
                {
                        "word": "υποστηρίζω",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "🤝",
                        "form": "verb"
                },
                {
                        "word": "χτυπώ",
                        "level": "elementary",
                        "theme": "leisure_hobbies_A2",
                        "emoji": "🥊",
                        "form": "verb"
                },
                {
                        "word": "παράγω",
                        "level": "elementary",
                        "theme": "career_A2",
                        "emoji": "🏭",
                        "form": "verb"
                },
                {
                        "word": "αντιμετωπίζω",
                        "level": "elementary",
                        "theme": "relationships_dating_A2",
                        "emoji": "👤",
                        "form": "verb"
                },
                {
                        "word": "καλύπτω",
                        "level": "elementary",
                        "theme": "neighbourhood_A2",
                        "emoji": "🧥",
                        "form": "verb"
                },
                {
                        "word": "περιγράφω",
                        "level": "elementary",
                        "theme": "career_A2",
                        "emoji": "📝",
                        "form": "verb"
                },
                {
                        "word": "σχεδιάζω",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🎨",
                        "form": "verb",
                        "definitions": [
                                {
                                        "text": "Αναπαριστώ κάτι με γραμμές και χρώματα στο χαρτί.",
                                        "examples": [
                                                "Μου αρέσει να σχεδιάζω τοπία.",
                                                "Σχεδίασε έναν κύκλο."
                                        ]
                                }
                        ]
                },
                {
                        "word": "πιάζω",
                        "level": "elementary",
                        "theme": "leisure_hobbies_A2",
                        "emoji": "🎣",
                        "form": "verb"
                },
                {
                        "word": "μοιράζομαι",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "🍕",
                        "form": "verb"
                },
                {
                        "word": "χαμογελώ",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "😊",
                        "opposite": "κλαίω",
                        "oppositeEmoji": "😢",
                        "form": "verb"
                },
                {
                        "word": "κλαίω",
                        "level": "starter",
                        "theme": "adjectives_A0",
                        "emoji": "😢",
                        "opposite": "χαμογελώ",
                        "oppositeEmoji": "😊",
                        "form": "verb"
                },
                {
                        "word": "χορεύω",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "💃",
                        "form": "verb"
                },
                {
                        "word": "τραγουδάω",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🎤",
                        "form": "verb"
                },
                {
                        "word": "πηδάω",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🦘",
                        "form": "verb"
                },
                {
                        "word": "πετάω",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "✈️",
                        "form": "verb"
                },
                {
                        "word": "κολυμπάω",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🏊",
                        "form": "verb"
                },
                {
                        "word": "πλένω",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🧼",
                        "form": "verb"
                },
                {
                        "word": "καθαρίζω",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🧹",
                        "form": "verb"
                },
                {
                        "word": "μαγειρεύω",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🍳",
                        "form": "verb"
                },
                {
                        "word": "ταξιδεύω",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "✈️",
                        "form": "verb"
                },
                {
                        "word": "σπουδάζω",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "📖",
                        "form": "verb"
                },
                {
                        "word": "διδάσκω",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "👨‍🏫",
                        "form": "verb"
                },
                {
                        "word": "ακούω",
                        "level": "starter",
                        "theme": "places_buildings_activities_A2",
                        "emoji": "🎧",
                        "form": "verb"
                },
                {
                        "word": "κλείνω",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🔒",
                        "opposite": "ανοίγω",
                        "oppositeEmoji": "📖",
                        "form": "verb"
                },
                {
                        "word": "τελειώνω",
                        "level": "starter",
                        "theme": "home_A0",
                        "emoji": "🏁",
                        "opposite": "αρχίζω",
                        "oppositeEmoji": "▶️",
                        "form": "verb"
                }
        ],
        "tt": [],
        "ba": [],
        "br": []
}

    if (window.vocabularyData) {
        for (let lang in verbsData) {
            if (window.vocabularyData[lang]) {
                window.vocabularyData[lang] = [...window.vocabularyData[lang], ...verbsData[lang]]
            } else {
                window.vocabularyData[lang] = verbsData[lang]
            }
        }
    }

    window.verbsData = verbsData
})();
