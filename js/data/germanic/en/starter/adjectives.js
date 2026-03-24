(function() {
    const data = [
    {
        "word": "tall",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "short",
        "oppositeEmoji": "📏",
        "definitions": [
            {
                "text": "A person or thing that is big from bottom to top.",
                "examples": [
                    "He is very tall.",
                    "That building is tall."
                ]
            }
        ]
    },
    {
        "word": "short",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "tall",
        "oppositeEmoji": "🗼",
        "definitions": [
            {
                "text": "A person or thing that is not tall.",
                "examples": [
                    "She is short.",
                    "The pencil is short."
                ]
            }
        ]
    },
    {
        "word": "young",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "old",
        "oppositeEmoji": "👴",
        "definitions": [
            {
                "text": "Having lived or existed for only a short time.",
                "examples": [
                    "He is a young man."
                ]
            }
        ]
    },
    {
        "word": "old",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "young",
        "oppositeEmoji": "👶",
        "definitions": [
            {
                "text": "Having lived or existed for a long time.",
                "examples": [
                    "This is an old book."
                ]
            }
        ]
    },
    {
        "word": "sunny",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "☀️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having a lot of light from the sun.",
                "examples": [
                    "It is a sunny day.",
                    "I like sunny weather."
                ]
            }
        ]
    },
    {
        "word": "rainy",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "🌧️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having a lot of rain.",
                "examples": [
                    "It is a rainy day.",
                    "Wear a coat, it's rainy outside."
                ]
            }
        ]
    },
    {
        "word": "hot",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "🔥",
        "form": "adjective",
        "opposite": "cold",
        "oppositeEmoji": "❄️",
        "definitions": [
            {
                "text": "Having a high temperature.",
                "examples": [
                    "The coffee is hot.",
                    "It is very hot in summer."
                ]
            }
        ]
    },
    {
        "word": "cold",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "❄️",
        "form": "adjective",
        "opposite": "hot",
        "oppositeEmoji": "🔥",
        "definitions": [
            {
                "text": "Having a low temperature.",
                "examples": [
                    "The water is cold.",
                    "It is cold in winter."
                ]
            }
        ]
    },
    {
        "word": "ordinary",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "special",
        "oppositeEmoji": "✨",
        "definitions": [
            {
                "text": "Normal or usual; not special.",
                "examples": [
                    "It was an ordinary day."
                ]
            }
        ]
    },
    {
        "word": "cheap",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "expensive",
        "oppositeEmoji": "💎",
        "definitions": [
            {
                "text": "Not expensive; low in price.",
                "examples": [
                    "This coffee is cheap."
                ]
            }
        ]
    },
    {
        "word": "expensive",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "cheap",
        "oppositeEmoji": "🏷️",
        "definitions": [
            {
                "text": "Costing a lot of money.",
                "examples": [
                    "That car is expensive."
                ]
            }
        ]
    },
    {
        "word": "good",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "bad",
        "oppositeEmoji": "👎",
        "definitions": [
            {
                "text": "Of high quality or ability; pleasant.",
                "examples": [
                    "This is a good job."
                ]
            }
        ]
    },
    {
        "word": "bad",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "good",
        "oppositeEmoji": "👍",
        "definitions": [
            {
                "text": "Not good; unpleasant or of poor quality.",
                "examples": [
                    "The weather is bad today."
                ]
            }
        ]
    },
    {
        "word": "big",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "small",
        "oppositeEmoji": "🐭",
        "definitions": [
            {
                "text": "Large in size.",
                "examples": [
                    "It is a big office."
                ]
            }
        ]
    },
    {
        "word": "small",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "big",
        "oppositeEmoji": "🐘",
        "definitions": [
            {
                "text": "Little in size.",
                "examples": [
                    "She has a small flat."
                ]
            }
        ]
    },
    {
        "word": "easy",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "difficult",
        "oppositeEmoji": "❌",
        "definitions": [
            {
                "text": "Not difficult.",
                "examples": [
                    "The test is easy."
                ]
            }
        ]
    },
    {
        "word": "difficult",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "easy",
        "oppositeEmoji": "✅",
        "definitions": [
            {
                "text": "Hard to do or understand.",
                "examples": [
                    "This work is difficult."
                ]
            }
        ]
    },
    {
        "word": "happy",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "emoji": "😊",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling pleasure or joy.",
                "examples": [
                    "I am happy today."
                ]
            }
        ]
    },
    {
        "word": "tired",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "emoji": "😫",
        "form": "adjective",
        "definitions": [
            {
                "text": "Needing rest or sleep.",
                "examples": [
                    "I am very tired after work."
                ]
            }
        ]
    },
    {
        "word": "full-time",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "adjective",
        "opposite": "part-time",
        "oppositeEmoji": "⏳",
        "definitions": [
            {
                "text": "Working the complete number of hours in a working week.",
                "examples": [
                    "She has a full-time job in a bank."
                ]
            }
        ]
    },
    {
        "word": "part-time",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "form": "adjective",
        "opposite": "full-time",
        "oppositeEmoji": "⏰",
        "definitions": [
            {
                "text": "Working fewer hours than a standard working week.",
                "examples": [
                    "He works part-time on Saturdays."
                ]
            }
        ]
    },
    {
        "word": "clean",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "dirty",
        "oppositeEmoji": "💩",
        "subtext": "oпрятный, безупречный",
        "definitions": [
            {
                "text": "Free from dirt.",
                "examples": [
                    "The flat is clean now."
                ]
            }
        ]
    },
    {
        "word": "healthy",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🥗",
        "form": "adjective",
        "opposite": "unhealthy",
        "oppositeEmoji": "🍔",
        "subtext": "well, fit, healthy diet",
        "definitions": [
            {
                "text": "Good for your body; not ill.",
                "examples": [
                    "Vegetables are healthy food."
                ]
            }
        ]
    },
    {
        "word": "ill",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤒",
        "form": "adjective",
        "opposite": "well",
        "oppositeEmoji": "💪",
        "subtext": "sick, feel ill",
        "definitions": [
            {
                "text": "Not well; sick.",
                "examples": [
                    "I feel ill today."
                ]
            }
        ]
    },
    {
        "word": "online",
        "level": "starter",
        "theme": "using_a_smartphone_A1",
        "emoji": "🌐",
        "form": "adjective",
        "opposite": "offline",
        "oppositeEmoji": "📴",
        "definitions": [
            {
                "text": "Using the internet.",
                "examples": [
                    "I buy food online sometimes."
                ]
            }
        ]
    },
    {
        "word": "alone",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "together",
        "oppositeEmoji": "👫",
        "definitions": [
            {
                "text": "Without other people; by yourself.",
                "examples": [
                    "She lives alone."
                ]
            }
        ]
    },
    {
        "word": "relaxed",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "stressed",
        "oppositeEmoji": "😫",
        "subtext": "calm, feeling relaxed",
        "definitions": [
            {
                "text": "Calm; not worried or stressed.",
                "examples": [
                    "I feel relaxed at the weekend."
                ]
            }
        ]
    },
    {
        "word": "worried",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "emoji": "😟",
        "form": "adjective",
        "opposite": "calm",
        "oppositeEmoji": "😌",
        "subtext": "anxious",
        "definitions": [
            {
                "text": "Feeling anxious about something that might happen.",
                "examples": [
                    "She is worried about her job."
                ]
            }
        ]
    },
    {
        "word": "busy",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having a lot of things to do.",
                "examples": [
                    "I am very busy this week."
                ]
            }
        ]
    },
    {
        "word": "useful",
        "level": "starter",
        "theme": "using_a_smartphone_A1",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "useless",
        "oppositeEmoji": "🗑️",
        "subtext": "helpful, practical",
        "definitions": [
            {
                "text": "Helpful; having a practical purpose.",
                "examples": [
                    "A car is very useful in the country."
                ]
            }
        ]
    },
    {
        "word": "important",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❗",
        "form": "adjective",
        "subtext": "essential",
        "definitions": [
            {
                "text": "Having great value or effect.",
                "examples": [
                    "Sleep is very important."
                ]
            }
        ]
    }
];
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
