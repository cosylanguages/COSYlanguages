(function() {
    const data = [
    {
        "word": "brush teeth",
        "level": "elementary",
        "theme": "household_tasks_A1",
        "emoji": "🪥",
        "form": "verb"
    },
    {
        "word": "shower",
        "level": "elementary",
        "theme": "household_tasks_A1",
        "emoji": "🚿",
        "form": "verb"
    },
    {
        "word": "drawing",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🎨",
        "form": "verb"
    },
    {
        "word": "cooking",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "👨‍🍳",
        "form": "verb"
    },
    {
        "word": "dancing",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "💃",
        "form": "verb"
    },
    {
        "word": "singing",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🎤",
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
        "word": "become",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🦋",
        "form": "verb"
    },
    {
        "word": "move",
        "level": "elementary",
        "theme": "moving_home_A2",
        "emoji": "📦",
        "form": "verb"
    },
    {
        "word": "believe",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🙏",
        "form": "verb"
    },
    {
        "word": "happen",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "⚡",
        "form": "verb"
    },
    {
        "word": "include",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "➕",
        "form": "verb"
    },
    {
        "word": "continue",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "➡️",
        "form": "verb"
    },
    {
        "word": "set",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "⚙️",
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
        "word": "follow",
        "level": "elementary",
        "theme": "directions_navigation_A1",
        "emoji": "👣",
        "form": "verb"
    },
    {
        "word": "create",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
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
        "word": "grow",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🌱",
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
        "word": "consider",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🤔",
        "form": "verb"
    },
    {
        "word": "appear",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👻",
        "form": "verb"
    },
    {
        "word": "serve",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "emoji": "🍽️",
        "form": "verb"
    },
    {
        "word": "expect",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💭",
        "form": "verb"
    },
    {
        "word": "build",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🏗️",
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
        "theme": "right_wrong_basic_A2",
        "emoji": "⚔️",
        "form": "verb"
    },
    {
        "word": "remain",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "⏳",
        "form": "verb"
    },
    {
        "word": "suggest",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💡",
        "form": "verb"
    },
    {
        "word": "raise",
        "level": "elementary",
        "theme": "family_life_A1",
        "emoji": "🙋",
        "form": "verb"
    },
    {
        "word": "require",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "📜",
        "form": "verb"
    },
    {
        "word": "report",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📋",
        "form": "verb"
    },
    {
        "word": "decide",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "⚖️",
        "form": "verb"
    },
    {
        "word": "explain",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👨‍🏫",
        "form": "verb"
    },
    {
        "word": "develop",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💻",
        "form": "verb"
    },
    {
        "word": "support",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "To help or encourage someone.",
                "examples": [
                    "My family supports my decisions."
                ]
            }
        ]
    },
    {
        "word": "apply for",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "📝",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a formal request for a job.",
                "examples": [
                    "She applied for the manager position."
                ]
            }
        ]
    },
    {
        "word": "hire",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "To give someone a job.",
                "examples": [
                    "The company hired two new people."
                ]
            }
        ]
    },
    {
        "word": "retire",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👴",
        "form": "verb",
        "definitions": [
            {
                "text": "To stop working because you have reached a certain age.",
                "examples": [
                    "My father will retire next year."
                ]
            }
        ]
    },
    {
        "word": "afford",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "To have enough money to pay for something.",
                "examples": [
                    "We can't afford a bigger flat."
                ]
            }
        ]
    },
    {
        "word": "argue",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🗣️",
        "form": "verb",
        "definitions": [
            {
                "text": "To disagree with someone in an angry way.",
                "examples": [
                    "They sometimes argue about money."
                ]
            }
        ]
    },
    {
        "word": "trust",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "To believe that someone is honest and reliable.",
                "examples": [
                    "You need to trust your partner."
                ]
            }
        ]
    },
    {
        "word": "agree",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "👍",
        "form": "verb",
        "definitions": [
            {
                "text": "To have the same opinion as someone else.",
                "examples": [
                    "We don't always agree."
                ]
            }
        ]
    },
    {
        "word": "compromise",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "To accept less than you want so both sides are satisfied.",
                "examples": [
                    "Good relationships need compromise."
                ]
            }
        ]
    },
    {
        "word": "recycle",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "♻️",
        "form": "verb",
        "definitions": [
            {
                "text": "To process used materials so they can be used again.",
                "examples": [
                    "We recycle paper and glass."
                ]
            }
        ]
    },
    {
        "word": "hit",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🥊",
        "form": "verb"
    },
    {
        "word": "produce",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏭",
        "form": "verb"
    },
    {
        "word": "face",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👤",
        "form": "verb"
    },
    {
        "word": "cover",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🧥",
        "form": "verb"
    },
    {
        "word": "describe",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📝",
        "form": "verb"
    },
    {
        "word": "catch",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🎣",
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
