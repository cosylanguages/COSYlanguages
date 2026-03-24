(function() {
    const data = [
    {
        "word": "brush teeth",
        "level": "elementary",
        "theme": "household_tasks_A1",
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
        "v3": "brushed teeth"
    },
    {
        "word": "shower",
        "level": "elementary",
        "theme": "household_tasks_A1",
        "emoji": "🚿",
        "form": "verb",
        "subtext": "take a shower, morning shower",
        "definitions": [
            {
                "text": "To wash your body under a shower.",
                "examples": [
                    "I usually shower in the morning."
                ]
            }
        ],
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
        "subtext": "draw a picture, draw with a pencil",
        "definitions": [
            {
                "text": "To make a picture with a pen or pencil.",
                "examples": [
                    "She loves to draw birds."
                ]
            }
        ],
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
        "subtext": "cook dinner, cook for friends",
        "definitions": [
            {
                "text": "To prepare food by heating it.",
                "examples": [
                    "I like to cook Italian food."
                ]
            }
        ],
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
        "subtext": "dance to music, go dancing",
        "definitions": [
            {
                "text": "To move your body to music.",
                "examples": [
                    "We danced all night at the party."
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
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🎤",
        "form": "verb",
        "subtext": "sing a song, sing in a choir",
        "definitions": [
            {
                "text": "To make musical sounds with your voice.",
                "examples": [
                    "She sings beautifully."
                ]
            }
        ],
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
        "subtext": "seem happy, seem like a good idea",
        "definitions": [
            {
                "text": "To give the impression of being something.",
                "examples": [
                    "You seem tired today."
                ]
            }
        ],
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
        "subtext": "become a doctor, become famous",
        "definitions": [
            {
                "text": "To begin to be something.",
                "examples": [
                    "He wants to become a pilot."
                ]
            }
        ],
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
        "subtext": "move house, move to a new city",
        "definitions": [
            {
                "text": "To go to live in a different place.",
                "examples": [
                    "We are moving to London next month."
                ]
            }
        ],
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
        "subtext": "believe in something, believe someone",
        "definitions": [
            {
                "text": "To think that something is true.",
                "examples": [
                    "I believe you."
                ]
            }
        ],
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
        "subtext": "happen suddenly, what happened?",
        "definitions": [
            {
                "text": "To take place; to occur.",
                "examples": [
                    "The accident happened yesterday."
                ]
            }
        ],
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
        "subtext": "include everything, price includes tax",
        "definitions": [
            {
                "text": "To contain something as part of a whole.",
                "examples": [
                    "The breakfast is included in the price."
                ]
            }
        ],
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
        "subtext": "continue working, continue to do something",
        "definitions": [
            {
                "text": "To keep doing something without stopping.",
                "examples": [
                    "Please continue reading."
                ]
            }
        ],
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
        "subtext": "set the table, set an alarm",
        "definitions": [
            {
                "text": "To put something in a particular place or position.",
                "examples": [
                    "I set my alarm for 7 am."
                ]
            }
        ],
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
        "subtext": "lead a team, lead the way",
        "definitions": [
            {
                "text": "To show the way or be in charge of a group.",
                "examples": [
                    "She leads a large team of researchers."
                ]
            }
        ],
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
        "subtext": "follow the rules, follow someone",
        "definitions": [
            {
                "text": "To go behind someone or obey something.",
                "examples": [
                    "Please follow me to the meeting room."
                ]
            }
        ],
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
        "subtext": "create a website, create a mess",
        "definitions": [
            {
                "text": "To make something new.",
                "examples": [
                    "He created a beautiful piece of art."
                ]
            }
        ],
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
        "subtext": "allow someone to do something, not allowed",
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
        "v3": "allowed"
    },
    {
        "word": "grow",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🌱",
        "form": "verb",
        "subtext": "grow plants, grow up",
        "definitions": [
            {
                "text": "To increase in size or develop.",
                "examples": [
                    "Children grow very fast."
                ]
            }
        ],
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
        "v3": "offered"
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
        "v3": "considered"
    },
    {
        "word": "appear",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👻",
        "form": "verb",
        "subtext": "appear on TV, appear suddenly",
        "definitions": [
            {
                "text": "To become visible or seem to be.",
                "examples": [
                    "He appeared to be very happy."
                ]
            }
        ],
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
        "v3": "served"
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
        "v3": "expected"
    },
    {
        "word": "build",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🏗️",
        "form": "verb",
        "subtext": "build a house, build a relationship",
        "definitions": [
            {
                "text": "To make something by putting parts together.",
                "examples": [
                    "They are building a new office block."
                ]
            }
        ],
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
        "v3": "reached"
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
        "v3": "killed"
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
        "v3": "remained"
    },
    {
        "word": "suggest",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💡",
        "form": "verb",
        "subtext": "suggest a plan, suggest doing something",
        "definitions": [
            {
                "text": "To mention an idea or plan.",
                "examples": [
                    "I suggest we go for a walk."
                ]
            }
        ],
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
        "subtext": "raise your hand, raise a child",
        "definitions": [
            {
                "text": "To lift something up or look after a child.",
                "examples": [
                    "She raised her hand to ask a question."
                ]
            }
        ],
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
        "v3": "required"
    },
    {
        "word": "report",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📋",
        "form": "verb",
        "subtext": "report a crime, report a problem",
        "definitions": [
            {
                "text": "To give information about something.",
                "examples": [
                    "He reported the stolen car to the police."
                ]
            }
        ],
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
        "subtext": "decide to go, decide between",
        "definitions": [
            {
                "text": "To make a choice after thinking.",
                "examples": [
                    "I can't decide which one I want."
                ]
            }
        ],
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
        "subtext": "explain the rules, explain why",
        "definitions": [
            {
                "text": "To make something clear by giving details.",
                "examples": [
                    "Can you explain this word to me?"
                ]
            }
        ],
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
        "subtext": "develop a skill, develop a product",
        "definitions": [
            {
                "text": "To grow or change into something more advanced.",
                "examples": [
                    "The company is developing a new app."
                ]
            }
        ],
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
        "subtext": "support a friend, support a team",
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
        "subtext": "apply for a job, apply for a visa",
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
        "subtext": "hire a new employee, hire a car",
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
        "v3": "retired"
    },
    {
        "word": "afford",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💰",
        "form": "verb",
        "subtext": "can't afford, afford a house",
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
        "subtext": "argue about money, have an argument",
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
        "subtext": "trust someone, break someone's trust",
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
        "subtext": "agree with someone, agree on a plan",
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
        "subtext": "reach a compromise, willing to compromise",
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
        "v3": "recycled"
    },
    {
        "word": "hit",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🥊",
        "form": "verb",
        "subtext": "hit the ball, hit a target",
        "definitions": [
            {
                "text": "To touch something with sudden force.",
                "examples": [
                    "He hit the ball with the bat."
                ]
            }
        ],
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
        "subtext": "produce energy, produce a movie",
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
        "v3": "produced"
    },
    {
        "word": "face",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👤",
        "form": "verb",
        "subtext": "face a problem, face reality",
        "definitions": [
            {
                "text": "To deal with a difficult situation.",
                "examples": [
                    "We must face our fears."
                ]
            }
        ],
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
        "subtext": "cover with a blanket, cover a story",
        "definitions": [
            {
                "text": "To put something over something else.",
                "examples": [
                    "She covered the table with a cloth."
                ]
            }
        ],
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
        "subtext": "describe someone, describe a situation",
        "definitions": [
            {
                "text": "To say what someone or something is like.",
                "examples": [
                    "Can you describe the man you saw?"
                ]
            }
        ],
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
        "subtext": "catch a ball, catch a cold, catch a bus",
        "definitions": [
            {
                "text": "To take hold of something that is moving.",
                "examples": [
                    "Try to catch the ball!"
                ]
            }
        ],
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
