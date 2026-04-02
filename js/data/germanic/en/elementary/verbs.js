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
        "v3": "brushed teeth",
        "opposite": "mess up"
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
        "v3": "showered",
        "opposite": "get dirty"
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
        "v3": "become",
        "opposite": "remain"
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
        "v3": "believed",
        "opposite": "doubt"
    },
    {
        "word": "happen",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "⚡",
        "form": "verb",
        "subtext": "what happened / happen to someone / if it happens",
        "definitions": [
            {
                "text": "To occur; to take place.",
                "examples": [
                    "What happened in the meeting? Everything went wrong."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "happened",
        "v3": "happened",
        "opposite": "stop"
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
        "v3": "included",
        "opposite": "exclude"
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
        "v3": "continued",
        "opposite": "stop"
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
        "v3": "set",
        "opposite": "reset"
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
        "v3": "led",
        "opposite": "follow"
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
        "v3": "followed",
        "opposite": "lead"
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
        "v3": "created",
        "opposite": "destroy"
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
        "v3": "allowed",
        "opposite": "forbid"
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
        "v3": "grown",
        "opposite": "shrink"
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
        "v3": "offered",
        "opposite": "refuse"
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
        "v3": "considered",
        "opposite": "ignore"
    },
    {
        "word": "appear",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👻",
        "form": "verb",
        "subtext": "appear to be / appear in public / appear online / appear confident",
        "definitions": [
            {
                "text": "To come into view; to seem.",
                "examples": [
                    "She appeared calm despite the difficult situation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "appeared",
        "v3": "appeared",
        "opposite": "disappear"
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
        "v3": "served",
        "opposite": "wait"
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
        "v3": "expected",
        "opposite": "doubt"
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
        "v3": "built",
        "opposite": "destroy"
    },
    {
        "word": "reach",
        "level": "elementary",
        "theme": "booking_planning_a_trip_A2",
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
        "v3": "reached",
        "opposite": "miss"
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
        "v3": "killed",
        "opposite": "save"
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
        "v3": "remained",
        "opposite": "change"
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
        "v3": "suggested",
        "opposite": "demand"
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
        "v3": "raised",
        "opposite": "lower"
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
        "v3": "required",
        "opposite": "lack"
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
        "v3": "reported",
        "opposite": "hide"
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
        "v3": "explained",
        "opposite": "confuse"
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
        "v3": "developed",
        "opposite": "regress"
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
        "v3": "retired",
        "opposite": "work"
    },
    {
        "word": "afford",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💰",
        "form": "verb",
        "subtext": "afford a house / afford to travel / can't afford it",
        "definitions": [
            {
                "text": "To have enough money for something.",
                "examples": [
                    "They cannot afford to buy a flat in the city centre."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "afforded",
        "v3": "afforded",
        "opposite": "lack"
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
        "v3": "recycled",
        "opposite": "waste"
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
        "v3": "hit",
        "opposite": "miss"
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
        "v3": "produced",
        "opposite": "consume"
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
        "v3": "faced",
        "opposite": "avoid"
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
        "v3": "covered",
        "opposite": "uncover"
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
        "v3": "described",
        "opposite": "summarize"
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
        "v3": "caught",
        "opposite": "throw"
    },
    {
        "word": "apply for",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "📝",
        "form": "verb",
        "subtext": "apply for a job / apply for a position / apply online",
        "definitions": [
            {
                "text": "To make a formal written request for a job or position.",
                "examples": [
                    "She applied for three different management positions."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "applied for",
        "v3": "applied for",
        "opposite": "resign"
    },
    {
        "word": "hire",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "hire someone / hire a team / hire for a role",
        "definitions": [
            {
                "text": "To formally take someone on as an employee.",
                "examples": [
                    "The company hired fifteen new people last quarter."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "hired",
        "v3": "hired",
        "opposite": "fire"
    },
    {
        "word": "promote",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📈",
        "form": "verb",
        "subtext": "promote someone / get promoted / promote from within",
        "definitions": [
            {
                "text": "To move an employee to a higher position.",
                "examples": [
                    "He was promoted to senior manager after two years."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "promoted",
        "v3": "promoted",
        "opposite": "demote"
    },
    {
        "word": "resign",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🚪",
        "form": "verb",
        "subtext": "resign from a job / resign formally / hand in your resignation",
        "definitions": [
            {
                "text": "To formally leave a job by choice.",
                "examples": [
                    "She resigned after disagreeing with the new strategy."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "resigned",
        "v3": "resigned",
        "opposite": "join"
    },
    {
        "word": "dismiss",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "❌",
        "form": "verb",
        "subtext": "dismiss an employee / be dismissed / dismissal proceedings",
        "definitions": [
            {
                "text": "To officially remove someone from their job.",
                "examples": [
                    "He was dismissed for repeated absence without explanation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "dismissed",
        "v3": "dismissed",
        "opposite": "hire"
    },
    {
        "word": "delegate",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📋",
        "form": "verb",
        "subtext": "delegate a task / delegate responsibility / delegate to a colleague",
        "definitions": [
            {
                "text": "To give a task or responsibility to someone else.",
                "examples": [
                    "A good manager knows how to delegate effectively."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "delegated",
        "v3": "delegated",
        "opposite": "do yourself"
    },
    {
        "word": "negotiate",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "negotiate a salary / negotiate terms / negotiate a deal",
        "definitions": [
            {
                "text": "To discuss something to reach an agreement.",
                "examples": [
                    "She negotiated a higher salary before signing the contract."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "negotiated",
        "v3": "negotiated",
        "opposite": "agree"
    },
    {
        "word": "evaluate",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📊",
        "form": "verb",
        "subtext": "evaluate performance / evaluate results / evaluate a proposal",
        "definitions": [
            {
                "text": "To judge the quality or value of something.",
                "examples": [
                    "The manager evaluates each team member's performance annually."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "evaluated",
        "v3": "evaluated",
        "opposite": "ignore"
    },
    {
        "word": "collaborate",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👥",
        "form": "verb",
        "subtext": "collaborate with / collaborate on a project / work collaboratively",
        "definitions": [
            {
                "text": "To work jointly with others on a shared project.",
                "examples": [
                    "They collaborated with a team in Berlin on the campaign."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "collaborated",
        "v3": "collaborated",
        "opposite": "work alone"
    },
    {
        "word": "schedule",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📅",
        "form": "verb",
        "subtext": "schedule a meeting / schedule time / schedule a call",
        "definitions": [
            {
                "text": "To arrange a time for something to happen.",
                "examples": [
                    "Can we schedule a meeting for Thursday afternoon?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "scheduled",
        "v3": "scheduled",
        "opposite": "cancel"
    },
    {
        "word": "invest",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📈",
        "form": "verb",
        "subtext": "invest money / invest in property / invest long-term",
        "definitions": [
            {
                "text": "To put money into something expecting a future return.",
                "examples": [
                    "He invests part of his salary in an index fund every month."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invested",
        "v3": "invested",
        "opposite": "spend"
    },
    {
        "word": "borrow",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💸",
        "form": "verb",
        "subtext": "borrow money / borrow from a bank / borrow from someone",
        "definitions": [
            {
                "text": "To take something with the intention of returning it.",
                "examples": [
                    "She borrowed money from her parents for the deposit."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "borrowed",
        "v3": "borrowed",
        "opposite": "lend"
    },
    {
        "word": "lend",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "lend money / lend to someone / lend a hand",
        "definitions": [
            {
                "text": "To give something to someone temporarily.",
                "examples": [
                    "The bank refused to lend him more money."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "lent",
        "v3": "lent",
        "opposite": "borrow"
    },
    {
        "word": "budget",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📊",
        "form": "verb",
        "subtext": "budget for something / budget carefully / budget monthly",
        "definitions": [
            {
                "text": "To plan how money will be spent.",
                "examples": [
                    "They budget carefully to save for a house."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "budgeted",
        "v3": "budgeted",
        "opposite": "waste"
    },
    {
        "word": "withdraw",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "🏧",
        "form": "verb",
        "subtext": "withdraw cash / withdraw from an account / withdraw funds",
        "definitions": [
            {
                "text": "To take money out of a bank account.",
                "examples": [
                    "I withdraw cash every Monday for the week."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "withdrew",
        "v3": "withdrawn",
        "opposite": "deposit"
    },
    {
        "word": "transfer",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "📲",
        "form": "verb",
        "subtext": "transfer money / transfer funds / bank transfer",
        "definitions": [
            {
                "text": "To move money from one account to another.",
                "examples": [
                    "She transferred the rent to the landlord's account."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "transferred",
        "v3": "transferred",
        "opposite": "keep"
    },
    {
        "word": "charge",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💳",
        "form": "verb",
        "subtext": "charge a fee / charge for a service / charge extra",
        "definitions": [
            {
                "text": "To ask an amount of money for a service.",
                "examples": [
                    "The mechanic charged more than the estimate."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "charged",
        "v3": "charged",
        "opposite": "pay"
    },
    {
        "word": "claim",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📜",
        "form": "verb",
        "subtext": "claim insurance / claim expenses / claim a refund",
        "definitions": [
            {
                "text": "To formally ask for money you are owed, especially insurance.",
                "examples": [
                    "He claimed on his insurance after the accident."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "claimed",
        "v3": "claimed",
        "opposite": "give up"
    },
    {
        "word": "argue",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "🗣️",
        "form": "verb",
        "subtext": "argue about / argue with someone / argue over something",
        "definitions": [
            {
                "text": "To disagree with someone in an angry or forceful way.",
                "examples": [
                    "They often argue about money and work schedules."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "argued",
        "v3": "argued",
        "opposite": "agree"
    },
    {
        "word": "trust",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "trust someone / trust your instincts / trust a process",
        "definitions": [
            {
                "text": "To have confidence in someone's honesty and reliability.",
                "examples": [
                    "She trusts her business partner completely."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "trusted",
        "v3": "trusted",
        "opposite": "doubt"
    },
    {
        "word": "support",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "support someone / support a decision / offer support",
        "definitions": [
            {
                "text": "To help and encourage someone through difficulties.",
                "examples": [
                    "He supports his partner during a difficult period at work."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "supported",
        "v3": "supported",
        "opposite": "oppose"
    },
    {
        "word": "disagree",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "👎",
        "form": "verb",
        "subtext": "disagree with someone / disagree on something / agree to disagree",
        "definitions": [
            {
                "text": "To have a different opinion from someone.",
                "examples": [
                    "She respectfully disagreed with the manager's decision."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "disagreed",
        "v3": "disagreed",
        "opposite": "agree"
    },
    {
        "word": "apologise",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🙏",
        "form": "verb",
        "subtext": "apologise for / apologise to someone / sincerely apologise",
        "definitions": [
            {
                "text": "To express regret for something you have done wrong.",
                "examples": [
                    "He apologised for missing the meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "apologised",
        "v3": "apologised",
        "opposite": "offend"
    },
    {
        "word": "forgive",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "forgive someone / forgive a mistake / hard to forgive",
        "definitions": [
            {
                "text": "To stop feeling angry with someone for something they did.",
                "examples": [
                    "She eventually forgave him for the mistake."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "forgave",
        "v3": "forgiven",
        "opposite": "blame"
    },
    {
        "word": "compromise",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "compromise on something / reach a compromise / be willing to compromise",
        "definitions": [
            {
                "text": "To accept less than ideal in order to reach an agreement.",
                "examples": [
                    "They compromised on the price and signed the contract."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "compromised",
        "v3": "compromised",
        "opposite": "demand"
    },
    {
        "word": "diagnose",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🩺",
        "form": "verb",
        "subtext": "diagnose an illness / be diagnosed with / diagnose early",
        "definitions": [
            {
                "text": "To identify an illness or problem after examination.",
                "examples": [
                    "The doctor diagnosed her with high blood pressure."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "diagnosed",
        "v3": "diagnosed",
        "opposite": "ignore"
    },
    {
        "word": "treat",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🩹",
        "form": "verb",
        "subtext": "treat a patient / treat an illness / treat with medicine",
        "definitions": [
            {
                "text": "To give medical care to someone who is ill or injured.",
                "examples": [
                    "The specialist treated his knee injury with physiotherapy."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "treated",
        "v3": "treated",
        "opposite": "neglect"
    },
    {
        "word": "prevent",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🛡️",
        "form": "verb",
        "subtext": "prevent illness / prevent disease / take steps to prevent",
        "definitions": [
            {
                "text": "To stop something bad from happening.",
                "examples": [
                    "Exercise and diet can prevent many common illnesses."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "prevented",
        "v3": "prevented",
        "opposite": "cause"
    },
    {
        "word": "suffer",
        "level": "elementary",
        "theme": "human_body_A2",
        "emoji": "🤕",
        "form": "verb",
        "subtext": "suffer from / suffer pain / suffer stress",
        "definitions": [
            {
                "text": "To experience pain or distress.",
                "examples": [
                    "She suffers from chronic back pain due to desk work."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "suffered",
        "v3": "suffered",
        "opposite": "enjoy"
    },
    {
        "word": "recommend",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💡",
        "form": "verb",
        "subtext": "recommend treatment / recommend rest / recommend seeing a specialist",
        "definitions": [
            {
                "text": "To suggest a course of action as good or suitable.",
                "examples": [
                    "The doctor recommended more sleep and less caffeine."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recommended",
        "v3": "recommended",
        "opposite": "warn"
    },
    {
        "word": "improve",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "📈",
        "form": "verb",
        "subtext": "improve health / improve fitness / room for improvement",
        "definitions": [
            {
                "text": "To get better; or to make something better.",
                "examples": [
                    "His health improved after changing his diet and routine."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "improved",
        "v3": "improved",
        "opposite": "worsen"
    },
    {
        "word": "rent",
        "level": "elementary",
        "theme": "renting_landlords_A2",
        "emoji": "🏠",
        "form": "verb",
        "subtext": "rent a flat / rent a property / rent out a room",
        "definitions": [
            {
                "text": "To pay regularly to use property belonging to someone else.",
                "examples": [
                    "They rent a two-bedroom flat near the city centre."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "rented",
        "v3": "rented",
        "opposite": "own"
    },
    {
        "word": "own",
        "level": "elementary",
        "theme": "renting_landlords_A2",
        "emoji": "🏡",
        "form": "verb",
        "subtext": "own a property / own a car / own a business",
        "definitions": [
            {
                "text": "To legally possess something.",
                "examples": [
                    "She owns a small flat in the suburbs."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "owned",
        "v3": "owned",
        "opposite": "rent"
    },
    {
        "word": "repair",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🔧",
        "form": "verb",
        "subtext": "repair something / carry out repairs / repair costs",
        "definitions": [
            {
                "text": "To fix something that is broken or not working.",
                "examples": [
                    "The landlord is slow to repair things in the flat."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "repaired",
        "v3": "repaired",
        "opposite": "break"
    },
    {
        "word": "move",
        "level": "elementary",
        "theme": "moving_home_A2",
        "emoji": "📦",
        "form": "verb",
        "subtext": "move to a new place / move in / move out / move house",
        "definitions": [
            {
                "text": "To go to live or work in a different place.",
                "examples": [
                    "They moved to a larger flat when their daughter was born."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "moved",
        "v3": "moved",
        "opposite": "stay"
    },
    {
        "word": "decorate",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "emoji": "🎨",
        "form": "verb",
        "subtext": "decorate a room / redecorate / interior decoration",
        "definitions": [
            {
                "text": "To make a place more attractive, especially by painting.",
                "examples": [
                    "They decorated the flat before moving in."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "decorated",
        "v3": "decorated",
        "opposite": "damage"
    },
    {
        "word": "set up",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏗️",
        "form": "verb",
        "subtext": "set up a business / set up a meeting / set up an account",
        "definitions": [
            {
                "text": "To start or establish something.",
                "examples": [
                    "He set up his own consulting business at the age of thirty."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "set up",
        "v3": "set up",
        "opposite": "close down"
    },
    {
        "word": "find out",
        "level": "elementary",
        "theme": "news_media_A2",
        "emoji": "🔎",
        "form": "verb",
        "subtext": "find out about / find out the truth / find out later",
        "definitions": [
            {
                "text": "To discover or learn information.",
                "examples": [
                    "She found out that the rent was going to increase."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "found out",
        "v3": "found out",
        "opposite": "hide"
    },
    {
        "word": "carry on",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⏩",
        "form": "verb",
        "subtext": "carry on working / carry on regardless / carry on with something",
        "definitions": [
            {
                "text": "To continue doing something.",
                "examples": [
                    "He carried on working despite feeling ill."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "carried on",
        "v3": "carried on",
        "opposite": "stop"
    },
    {
        "word": "give up",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏳️",
        "form": "verb",
        "subtext": "give up a job / give up smoking / give up trying",
        "definitions": [
            {
                "text": "To stop trying to do something; to quit.",
                "examples": [
                    "She gave up her job to start her own company."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "gave up",
        "v3": "given up",
        "opposite": "continue"
    },
    {
        "word": "sort out",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🔧",
        "form": "verb",
        "subtext": "sort out a problem / sort out a situation / sort something out",
        "definitions": [
            {
                "text": "To resolve a problem or deal with something.",
                "examples": [
                    "Can you sort out the problem with the contract?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sorted out",
        "v3": "sorted out",
        "opposite": "mess up"
    },
    {
        "word": "look after",
        "level": "elementary",
        "theme": "relationships_family_A2",
        "emoji": "👶",
        "form": "verb",
        "subtext": "look after someone / look after yourself / look after a child",
        "definitions": [
            {
                "text": "To take care of someone or something.",
                "examples": [
                    "He looks after his elderly mother at weekends."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "looked after",
        "v3": "looked after",
        "opposite": "neglect"
    },
    {
        "word": "cut down on",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "📉",
        "form": "verb",
        "subtext": "cut down on spending / cut down on sugar / cut costs",
        "definitions": [
            {
                "text": "To reduce the amount of something you do or consume.",
                "examples": [
                    "She cut down on caffeine to improve her sleep."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "cut down on",
        "v3": "cut down on",
        "opposite": "increase"
    },
    {
        "word": "take on",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💪",
        "form": "verb",
        "subtext": "take on responsibility / take on extra work / take on a project",
        "definitions": [
            {
                "text": "To accept a responsibility or piece of work.",
                "examples": [
                    "He took on a second job to pay off the mortgage faster."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "took on",
        "v3": "taken on",
        "opposite": "refuse"
    },
    {
        "word": "turn down",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "👎",
        "form": "verb",
        "subtext": "turn down an offer / turn down a job / turn down a request",
        "definitions": [
            {
                "text": "To refuse an offer or request.",
                "examples": [
                    "She turned down the job because the salary was too low."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned down",
        "v3": "turned down",
        "opposite": "accept"
    },
    {
        "word": "put off",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⏳",
        "form": "verb",
        "subtext": "put off a meeting / put off a decision / stop putting things off",
        "definitions": [
            {
                "text": "To postpone something to a later time.",
                "examples": [
                    "He keeps putting off the conversation about his salary."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "put off",
        "v3": "put off",
        "opposite": "do now"
    },
    {
        "word": "owe",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💸",
        "form": "verb",
        "subtext": "owe money / owe someone / owe a lot / clear what you owe",
        "definitions": [
            {
                "text": "To be required to pay money to someone.",
                "examples": [
                    "He owes the bank fifty thousand euros on the mortgage."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "owed",
        "v3": "owed",
        "opposite": "pay"
    },
    {
        "word": "invite",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "📩",
        "form": "verb",
        "subtext": "invite someone / invite to dinner / invite to a party",
        "definitions": [
            {
                "text": "To ask someone to come to an event.",
                "examples": [
                    "She invited the whole team to dinner after the project ended."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invited",
        "v3": "invited",
        "opposite": "reject"
    },
    {
        "word": "confirm",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "✅",
        "form": "verb",
        "subtext": "confirm a booking / confirm receipt / confirm in writing",
        "definitions": [
            {
                "text": "To say definitively that something is true or will happen.",
                "examples": [
                    "Please confirm your attendance before Friday morning."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "confirmed",
        "v3": "confirmed",
        "opposite": "cancel"
    },
    {
        "word": "contact",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "📞",
        "form": "verb",
        "subtext": "contact someone / contact by email / contact us",
        "definitions": [
            {
                "text": "To get in touch with someone.",
                "examples": [
                    "I will contact you by the end of the week with an answer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "contacted",
        "v3": "contacted",
        "opposite": "ignore"
    },
    {
        "word": "complain",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "😠",
        "form": "verb",
        "subtext": "complain about / make a complaint / complain to someone",
        "definitions": [
            {
                "text": "To express dissatisfaction about something.",
                "examples": [
                    "She complained about the noise from the flat above."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "complained",
        "v3": "complained",
        "opposite": "praise"
    },
    {
        "word": "discuss",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "🗣️",
        "form": "verb",
        "subtext": "discuss a topic / discuss in detail / discuss with someone",
        "definitions": [
            {
                "text": "To talk about something in detail.",
                "examples": [
                    "We discussed the new contract terms for two hours."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "discussed",
        "v3": "discussed",
        "opposite": "be silent"
    },
    {
        "word": "present",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📊",
        "form": "verb",
        "subtext": "present data / present a proposal / present to a client",
        "definitions": [
            {
                "text": "To show or explain something to a group.",
                "examples": [
                    "She presents the sales results to the board every quarter."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "presented",
        "v3": "presented",
        "opposite": "hide"
    },
    {
        "word": "accept",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "✅",
        "form": "verb",
        "subtext": "accept an offer / accept a challenge / accept a decision",
        "definitions": [
            {
                "text": "To agree to take or receive something.",
                "examples": [
                    "She accepted the job offer after negotiating the salary."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "accepted",
        "v3": "accepted",
        "opposite": "refuse"
    },
    {
        "word": "refuse",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "❌",
        "form": "verb",
        "subtext": "refuse an offer / refuse to do / refuse permission",
        "definitions": [
            {
                "text": "To say no to something; to decline.",
                "examples": [
                    "He refused to sign the contract without legal advice."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "refused",
        "v3": "refused",
        "opposite": "accept"
    },
    {
        "word": "lose weight",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "⚖️",
        "form": "verb",
        "subtext": "lose weight / lose a few kilos / trying to lose weight",
        "definitions": [
            {
                "text": "To become lighter; to reduce body weight.",
                "examples": [
                    "He lost ten kilos after changing his diet and lifestyle."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "lost weight",
        "v3": "lost weight",
        "opposite": "gain weight"
    },
    {
        "word": "increase",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📈",
        "form": "verb",
        "subtext": "increase by / increase rapidly / increase productivity",
        "definitions": [
            {
                "text": "To become or make something larger.",
                "examples": [
                    "The company increased salaries by three percent."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "increased",
        "v3": "increased",
        "opposite": "decrease"
    },
    {
        "word": "reduce",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📉",
        "form": "verb",
        "subtext": "reduce costs / reduce stress / significantly reduce",
        "definitions": [
            {
                "text": "To make something smaller in size or amount.",
                "examples": [
                    "They reduced the team from twelve to eight members."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reduced",
        "v3": "reduced",
        "opposite": "increase"
    },
    {
        "word": "improve skills",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📈",
        "form": "verb",
        "subtext": "improve performance / improve health / room for improvement",
        "definitions": [
            {
                "text": "To become or make something better.",
                "examples": [
                    "She improved her public speaking skills significantly."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "improved skills",
        "v3": "improved skills",
        "opposite": "lose skills"
    },
    {
        "word": "provide",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🤲",
        "form": "verb",
        "subtext": "provide support / provide information / provide a service",
        "definitions": [
            {
                "text": "To give or supply something to someone.",
                "examples": [
                    "The company provides all employees with a laptop."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "provided",
        "v3": "provided",
        "opposite": "take"
    },
    {
        "word": "solve",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🧩",
        "form": "verb",
        "subtext": "solve a problem / solve a mystery / find a solution",
        "definitions": [
            {
                "text": "To find an answer to a problem.",
                "examples": [
                    "He solves problems quickly under pressure."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "solved",
        "v3": "solved",
        "opposite": "complicate"
    },
    {
        "word": "share",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "share information / share a meal / share a flat / share ideas",
        "definitions": [
            {
                "text": "To divide something between people; to tell others.",
                "examples": [
                    "She shared the report with the whole team on Monday."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "shared",
        "v3": "shared",
        "opposite": "keep"
    },
    {
        "word": "join",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "➕",
        "form": "verb",
        "subtext": "join a company / join a team / join a club / join an event",
        "definitions": [
            {
                "text": "To become a member of a group or organisation.",
                "examples": [
                    "He joined the company as a trainee seven years ago."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "joined",
        "v3": "joined",
        "opposite": "leave"
    },
    {
        "word": "receive",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📩",
        "form": "verb",
        "subtext": "receive a letter / receive payment / receive feedback",
        "definitions": [
            {
                "text": "To be given or presented with something.",
                "examples": [
                    "He received the job offer by email on a Friday afternoon."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "received",
        "v3": "received",
        "opposite": "send"
    },
    {
        "word": "contain",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📦",
        "form": "verb",
        "subtext": "contain information / contain ingredients / the file contains",
        "definitions": [
            {
                "text": "To have something inside; to include.",
                "examples": [
                    "The report contains detailed financial projections."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "contained",
        "v3": "contained",
        "opposite": "exclude"
    },
    {
        "word": "plan",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📅",
        "form": "verb",
        "subtext": "plan a trip / plan a meeting / plan ahead / plan carefully",
        "definitions": [
            {
                "text": "To think about and arrange future actions.",
                "examples": [
                    "She plans her whole week every Sunday evening."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "planned",
        "v3": "planned",
        "opposite": "improvise"
    },
    {
        "word": "prepare",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📝",
        "form": "verb",
        "subtext": "prepare for a meeting / prepare a report / prepare carefully",
        "definitions": [
            {
                "text": "To make something ready; to get yourself ready.",
                "examples": [
                    "He prepares a detailed agenda before every meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "prepared",
        "v3": "prepared",
        "opposite": "improvise"
    },
    {
        "word": "fail",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "❌",
        "form": "verb",
        "subtext": "fail an exam / fail to do / fail a test / fail to meet a deadline",
        "definitions": [
            {
                "text": "To not succeed; to not do something required.",
                "examples": [
                    "She failed the first exam but passed the second attempt."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "failed",
        "v3": "failed",
        "opposite": "succeed"
    },
    {
        "word": "succeed",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏆",
        "form": "verb",
        "subtext": "succeed in doing / succeed at something / succeed against the odds",
        "definitions": [
            {
                "text": "To achieve what you set out to do.",
                "examples": [
                    "He succeeded in closing the deal after three months."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "succeeded",
        "v3": "succeeded",
        "opposite": "fail"
    },
    {
        "word": "agree",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "agree with someone / agree on something / agree to do",
        "definitions": [
            {
                "text": "To have the same opinion; to say yes to something.",
                "examples": [
                    "They agreed to meet again the following Tuesday."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "agreed",
        "v3": "agreed",
        "opposite": "disagree"
    },
    {
        "word": "replace",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🔄",
        "form": "verb",
        "subtext": "replace something / replace someone / be replaced by",
        "definitions": [
            {
                "text": "To take the place of someone or something.",
                "examples": [
                    "The new software will replace the old system next year."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "replaced",
        "v3": "replaced",
        "opposite": "keep"
    },
    {
        "word": "look for",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "🔍",
        "form": "verb",
        "subtext": "look for a job / look for something / look for a solution",
        "definitions": [
            {
                "text": "To try to find something.",
                "examples": [
                    "He is looking for a new job with better work-life balance."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "looked for",
        "v3": "looked for",
        "opposite": "find"
    },
    {
        "word": "log out",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "🚪",
        "form": "verb",
        "subtext": "log in to a system / log out / log in with a password",
        "definitions": [
            {
                "text": "To connect to or disconnect from a computer system.",
                "examples": [
                    "Please log out of the system when you leave the office."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "logged out",
        "v3": "logged out",
        "opposite": "log in"
    }
];
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();