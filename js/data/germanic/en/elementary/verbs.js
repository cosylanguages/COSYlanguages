(function() {
    const data = [
    {
        "word": "brush teeth",
        "level": "elementary",
        "theme": "household_tasks_A1",
        "emoji": "🪥",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "brushed teeth",
        "v3": "brushed teeth"
    },
    {
        "word": "shower",
        "level": "elementary",
        "theme": "household_tasks_A1",
        "emoji": "🚿",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "showered",
        "v3": "showered"
    },
    {
        "word": "draw",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🎨",
        "form": "verb",
        "classification": "irregular",
        "aspect": "action",
        "v2": "drew",
        "v3": "drawn"
    },
    {
        "word": "cook",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "👨‍🍳",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "cooked",
        "v3": "cooked"
    },
    {
        "word": "dance",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "💃",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "danced",
        "v3": "danced"
    },
    {
        "word": "sing",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🎤",
        "form": "verb",
        "classification": "irregular",
        "aspect": "action",
        "v2": "sang",
        "v3": "sung"
    },
    {
        "word": "seem",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤔",
        "form": "verb",
        "classification": "regular",
        "aspect": "stative",
        "v2": "seemed",
        "v3": "seemed"
    },
    {
        "word": "become",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🦋",
        "form": "verb",
        "classification": "irregular",
        "aspect": "action",
        "v2": "became",
        "v3": "become"
    },
    {
        "word": "move",
        "level": "elementary",
        "theme": "moving_home_A2",
        "emoji": "📦",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "moved",
        "v3": "moved"
    },
    {
        "word": "believe",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🙏",
        "form": "verb",
        "classification": "regular",
        "aspect": "stative",
        "v2": "believed",
        "v3": "believed"
    },
    {
        "word": "happen",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "⚡",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "happened",
        "v3": "happened"
    },
    {
        "word": "include",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "➕",
        "form": "verb",
        "classification": "regular",
        "aspect": "stative",
        "v2": "included",
        "v3": "included"
    },
    {
        "word": "continue",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "➡️",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "continued",
        "v3": "continued"
    },
    {
        "word": "set",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "⚙️",
        "form": "verb",
        "classification": "irregular",
        "aspect": "action",
        "v2": "set",
        "v3": "set"
    },
    {
        "word": "lead",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "👑",
        "form": "verb",
        "classification": "irregular",
        "aspect": "action",
        "v2": "led",
        "v3": "led"
    },
    {
        "word": "follow",
        "level": "elementary",
        "theme": "directions_navigation_A1",
        "emoji": "👣",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "followed",
        "v3": "followed"
    },
    {
        "word": "create",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "✨",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "created",
        "v3": "created"
    },
    {
        "word": "allow",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "✅",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "allowed",
        "v3": "allowed"
    },
    {
        "word": "grow",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🌱",
        "form": "verb",
        "classification": "irregular",
        "aspect": "action",
        "v2": "grew",
        "v3": "grown"
    },
    {
        "word": "offer",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤲",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "offered",
        "v3": "offered"
    },
    {
        "word": "consider",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🤔",
        "form": "verb",
        "classification": "regular",
        "aspect": "both",
        "v2": "considered",
        "v3": "considered"
    },
    {
        "word": "appear",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👻",
        "form": "verb",
        "classification": "regular",
        "aspect": "stative",
        "v2": "appeared",
        "v3": "appeared"
    },
    {
        "word": "serve",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "emoji": "🍽️",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "served",
        "v3": "served"
    },
    {
        "word": "expect",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💭",
        "form": "verb",
        "classification": "regular",
        "aspect": "stative",
        "v2": "expected",
        "v3": "expected"
    },
    {
        "word": "build",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🏗️",
        "form": "verb",
        "classification": "irregular",
        "aspect": "action",
        "v2": "built",
        "v3": "built"
    },
    {
        "word": "reach",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🏁",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "reached",
        "v3": "reached"
    },
    {
        "word": "kill",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "⚔️",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "killed",
        "v3": "killed"
    },
    {
        "word": "remain",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "⏳",
        "form": "verb",
        "classification": "regular",
        "aspect": "stative",
        "v2": "remained",
        "v3": "remained"
    },
    {
        "word": "suggest",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💡",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "suggested",
        "v3": "suggested"
    },
    {
        "word": "raise",
        "level": "elementary",
        "theme": "family_life_A1",
        "emoji": "🙋",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "raised",
        "v3": "raised"
    },
    {
        "word": "require",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "📜",
        "form": "verb",
        "classification": "regular",
        "aspect": "stative",
        "v2": "required",
        "v3": "required"
    },
    {
        "word": "report",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📋",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "reported",
        "v3": "reported"
    },
    {
        "word": "decide",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "⚖️",
        "form": "verb",
        "classification": "regular",
        "aspect": "stative",
        "v2": "decided",
        "v3": "decided"
    },
    {
        "word": "explain",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👨‍🏫",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "explained",
        "v3": "explained"
    },
    {
        "word": "develop",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💻",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "developed",
        "v3": "developed"
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
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "supported",
        "v3": "supported"
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
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "applied for",
        "v3": "applied for"
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
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "hired",
        "v3": "hired"
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
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "retired",
        "v3": "retired"
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
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "afforded",
        "v3": "afforded"
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
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "argued",
        "v3": "argued"
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
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "trusted",
        "v3": "trusted"
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
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "agreed",
        "v3": "agreed"
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
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "compromised",
        "v3": "compromised"
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
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recycled",
        "v3": "recycled"
    },
    {
        "word": "hit",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🥊",
        "form": "verb",
        "classification": "irregular",
        "aspect": "action",
        "v2": "hit",
        "v3": "hit"
    },
    {
        "word": "produce",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏭",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "produced",
        "v3": "produced"
    },
    {
        "word": "face",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👤",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "faced",
        "v3": "faced"
    },
    {
        "word": "cover",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🧥",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "covered",
        "v3": "covered"
    },
    {
        "word": "describe",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📝",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "described",
        "v3": "described"
    },
    {
        "word": "catch",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🎣",
        "form": "verb",
        "classification": "irregular",
        "aspect": "action",
        "v2": "caught",
        "v3": "caught"
    }
];
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
