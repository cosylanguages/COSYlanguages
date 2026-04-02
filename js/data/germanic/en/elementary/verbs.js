(function() {
    const data = [
    {
        "word": "brush teeth",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
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
        "theme": "home_repairs_maintenance_A2",
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
        "word": "continue",
        "level": "elementary",
        "theme": "school_life_routines_A2",
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
    },


    {
        "word": "commute",
        "level": "elementary",
        "theme": "booking_planning_a_trip_A2",
        "emoji": "🚆",
        "subtext": "commute to work / daily commute / long commute / commute by train",
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
        "v3": "commuted",
        "group": "regular",
        "opposite": "stay home"
    },


    {
        "word": "recover",
        "definitions": [
            {
                "text": "To return to good health after illness or injury.",
                "examples": [
                    "She is recovering from a back injury."
                ]
            }
        ],
        "subtext": "recover from illness / recover quickly / recover fully",
        "classification": "regular",
        "aspect": "action",
        "v2": "recovered",
        "v3": "recovered",
        "theme": "human_body_A2",
        "emoji": "🩹",
        "level": "elementary",
        "form": "verb",
        "group": "regular",
        "opposite": "get sick"
    },


    {
        "word": "repair",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🛠️",
        "subtext": "repair something / get repaired / repair costs",
        "form": "verb",
        "definitions": [
            {
                "text": "To fix something that is broken.",
                "examples": [
                    "The landlord is slow to repair things in the flat."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "repaired",
        "v3": "repaired",
        "group": "regular",
        "opposite": "break"
    },


    {
        "word": "happen",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "❔",
        "subtext": "what happened / happen to someone / it happens / happen again",
        "form": "verb",
        "definitions": [
            {
                "text": "To take place; to occur.",
                "examples": [
                    "What happened at the meeting? Something went wrong."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "happened",
        "v3": "happened",
        "group": "regular",
        "opposite": "stop"
    },


    {
        "word": "seem",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🎭",
        "subtext": "seem fine / seem worried / seem happy / seem like",
        "form": "verb",
        "definitions": [
            {
                "text": "To appear to be something; to give an impression.",
                "examples": [
                    "She seems very confident in client meetings."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "seemed",
        "v3": "seemed",
        "group": "regular",
        "opposite": "be"
    },


    {
        "word": "continue",
        "level": "elementary",
        "theme": "school_life_routines_A2",
        "emoji": "⏩",
        "subtext": "continue working / continue to do / continue with / continue a task",
        "form": "verb",
        "definitions": [
            {
                "text": "To keep doing something without stopping.",
                "examples": [
                    "He continued working after six despite feeling ill."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "continued",
        "v3": "continued",
        "group": "regular",
        "opposite": "stop"
    },


    {
        "word": "belong",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📎",
        "subtext": "belong to someone / belong in / feel like you belong",
        "form": "verb",
        "definitions": [
            {
                "text": "To be the property of someone; to be a member.",
                "examples": [
                    "That account belongs to the finance department."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "belonged",
        "v3": "belonged",
        "group": "regular",
        "opposite": "be separate"
    },


    {
        "word": "build",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏗️",
        "subtext": "build a career / build a team / build experience / build trust",
        "opposite": "destroy",
        "oppositeEmoji": "💣",
        "form": "verb",
        "definitions": [
            {
                "text": "To construct something; to develop something over time.",
                "examples": [
                    "She built a strong reputation over ten years."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "built",
        "v3": "built",
        "group": "irregular"
    },


    {
        "word": "dream",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💭",
        "form": "verb",
        "subtext": "dream about / have a dream",
        "definitions": [
            {
                "text": "To experience pictures or ideas in your mind while sleeping.",
                "examples": [
                    "I dreamed about a holiday last night."
                ]
            }
        ],
        "classification": "both",
        "aspect": "action",
        "v2": "dreamed / dreamt",
        "v3": "dreamed / dreamt",
        "group": "both",
        "opposite": "wake up"
    },


    {
        "word": "notice",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "👀",
        "form": "verb",
        "subtext": "see / notice a difference / did you notice?",
        "definitions": [
            {
                "text": "To see or become aware of something.",
                "examples": [
                    "Did you notice the new office?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "noticed",
        "v3": "noticed",
        "group": "regular",
        "opposite": "ignore"
    },


    {
        "word": "prepare",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🥘",
        "form": "verb",
        "subtext": "get ready / prepare dinner / prepare for a meeting",
        "definitions": [
            {
                "text": "To get something ready.",
                "examples": [
                    "He is preparing dinner."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "prepared",
        "v3": "prepared",
        "group": "regular",
        "opposite": "improvise"
    },


    {
        "word": "organize",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📂",
        "form": "verb",
        "subtext": "plan / organize a meeting / organize files",
        "definitions": [
            {
                "text": "To plan or arrange something.",
                "examples": [
                    "She organizes all the meetings."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "organized",
        "v3": "organized",
        "group": "regular",
        "opposite": "mess up"
    },


    {
        "word": "lend",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📤",
        "form": "verb",
        "subtext": "give for a short time / lend a pen / lend money",
        "definitions": [
            {
                "text": "To give something for a short time.",
                "examples": [
                    "I can lend you some money."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "lent",
        "v3": "lent",
        "group": "irregular",
        "opposite": "borrow"
    },


    {
        "word": "fail",
        "level": "elementary",
        "theme": "school_life_routines_A2",
        "emoji": "❌",
        "subtext": "fail an exam / fail a test / fail to do / fail completely",
        "opposite": "pass",
        "oppositeEmoji": "🏔️",
        "form": "verb",
        "definitions": [
            {
                "text": "To not succeed in what you are trying to do.",
                "examples": [
                    "I failed my driving test three times.",
                    "She failed to arrive on time."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "failed",
        "v3": "failed",
        "group": "regular"
    },


    {
        "word": "imagine",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💭",
        "form": "verb",
        "subtext": "imagine that / can you imagine?",
        "definitions": [
            {
                "text": "To form a picture or idea in your mind.",
                "examples": [
                    "Imagine you are on a beach."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "imagined",
        "v3": "imagined",
        "group": "regular",
        "opposite": "know"
    },


    {
        "word": "produce",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏭",
        "form": "verb",
        "subtext": "produce goods / produce results",
        "definitions": [
            {
                "text": "To make or grow something.",
                "examples": [
                    "This factory produces cars."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "produced",
        "v3": "produced",
        "group": "regular",
        "opposite": "consume"
    },


    {
        "word": "promise",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "promise to / I promise",
        "definitions": [
            {
                "text": "To say that you will certainly do something.",
                "examples": [
                    "I promise to help you tomorrow."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "promised",
        "v3": "promised",
        "group": "regular",
        "opposite": "lie"
    },


    {
        "word": "record",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "⏺️",
        "form": "verb",
        "subtext": "record a video / record a song",
        "definitions": [
            {
                "text": "To store sounds or pictures using electronic equipment.",
                "examples": [
                    "She is recording a video of the party."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recorded",
        "v3": "recorded",
        "group": "regular",
        "opposite": "delete"
    },


    {
        "word": "doubt",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🤨",
        "subtext": "not believe / doubt it",
        "opposite": "believe",
        "oppositeEmoji": "🙏",
        "form": "verb",
        "definitions": [
            {
                "text": "To not feel certain or confident about something.",
                "examples": [
                    "I doubt he will come."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "doubted",
        "v3": "doubted",
        "group": "regular"
    },


    {
        "word": "destroy",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💣",
        "form": "verb",
        "opposite": "build",
        "oppositeEmoji": "🏗️",
        "subtext": "damage / destroy a file / destroy completely",
        "definitions": [
            {
                "text": "To damage something so badly that it cannot be used or does not exist any more.",
                "examples": [
                    "Be careful not to destroy important files."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "destroyed",
        "v3": "destroyed",
        "group": "regular"
    },


    {
        "word": "charge",
        "definitions": [
            {
                "text": "To ask an amount of money for a service.",
                "examples": [
                    "The mechanic charged three hundred euros."
                ]
            }
        ],
        "subtext": "charge a fee / charge for a service / charge extra",
        "classification": "regular",
        "aspect": "action",
        "v2": "charged",
        "v3": "charged",
        "theme": "finances_A2",
        "emoji": "💳",
        "level": "elementary",
        "form": "verb",
        "group": "regular",
        "opposite": "pay"
    },


    {
        "word": "afford",
        "definitions": [
            {
                "text": "To have enough money for something.",
                "examples": [
                    "They cannot afford to buy a flat in the city centre."
                ]
            }
        ],
        "subtext": "afford a house / afford to travel / afford something",
        "classification": "regular",
        "aspect": "stative",
        "v2": "afforded",
        "v3": "afforded",
        "theme": "finances_A2",
        "emoji": "🏦",
        "level": "elementary",
        "form": "verb",
        "group": "regular",
        "opposite": "lack"
    },


    {
        "word": "owe",
        "definitions": [
            {
                "text": "To be required to pay money to someone.",
                "examples": [
                    "He owes the bank fifty thousand euros."
                ]
            }
        ],
        "subtext": "owe money / owe someone / owe a lot / owe nothing",
        "classification": "regular",
        "aspect": "stative",
        "v2": "owed",
        "v3": "owed",
        "theme": "finances_A2",
        "emoji": "💸",
        "level": "elementary",
        "form": "verb",
        "group": "regular",
        "opposite": "pay"
    },


    {
        "word": "recommend",
        "definitions": [
            {
                "text": "To suggest something as good or suitable.",
                "examples": [
                    "Can you recommend a good restaurant near the office?"
                ]
            }
        ],
        "subtext": "recommend a place / recommend someone / recommend a film",
        "classification": "regular",
        "aspect": "action",
        "v2": "recommended",
        "v3": "recommended",
        "theme": "giving_reasons_A2",
        "emoji": "👍",
        "level": "elementary",
        "form": "verb",
        "group": "regular",
        "opposite": "warn"
    },


    {
        "word": "explain",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💡",
        "subtext": "explain a process / explain clearly / explain to someone",
        "form": "verb",
        "definitions": [
            {
                "text": "To make something clear by giving details.",
                "examples": [
                    "He always explains the process to new team members."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "explained",
        "v3": "explained",
        "group": "regular",
        "opposite": "confuse"
    },


    {
        "word": "include",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "➕",
        "subtext": "include something / include in / not included / price includes",
        "form": "verb",
        "definitions": [
            {
                "text": "To make something part of a whole.",
                "examples": [
                    "The price includes breakfast and evening meals."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "included",
        "v3": "included",
        "group": "regular",
        "opposite": "exclude"
    },


    {
        "word": "improve",
        "level": "elementary",
        "theme": "school_life_routines_A2",
        "emoji": "📈",
        "form": "verb",
        "subtext": "get better / improve your English / improve results",
        "definitions": [
            {
                "text": "To make something better.",
                "examples": [
                    "I want to improve my English."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "improved",
        "v3": "improved",
        "group": "regular",
        "opposite": "worsen"
    },


    {
        "word": "suggest",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💡",
        "form": "verb",
        "subtext": "suggest an idea / let me suggest",
        "definitions": [
            {
                "text": "To mention an idea or a plan for someone to consider.",
                "examples": [
                    "Can you suggest a good restaurant?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "suggested",
        "v3": "suggested",
        "group": "regular",
        "opposite": "demand"
    },


    {
        "word": "disagree",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "👎",
        "subtext": "disagree with / I disagree",
        "opposite": "agree",
        "oppositeEmoji": "👍",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a different opinion from someone.",
                "examples": [
                    "I disagree with that statement."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "disagreed",
        "v3": "disagreed",
        "group": "regular"
    }
    ];
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();