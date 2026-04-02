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
        "theme": "giving_reasons_A2",
        "emoji": "🤔",
        "form": "verb",
        "subtext": "seem happy, seem like a good idea, seem worried",
        "definitions": [
            {
                "text": "To give the impression of being something; to appear to be.",
                "examples": [
                    "You seem tired today.",
                    "She seems very confident in client meetings."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "seemed",
        "v3": "seemed",
        "opposite": "be"
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
                    "Please continue reading.",
                    "He continued working after six despite feeling ill."
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
        "theme": "career_development_A2",
        "emoji": "🏗️",
        "form": "verb",
        "subtext": "build a career / build a team / build experience / build trust",
        "definitions": [
            {
                "text": "To make something by putting parts together; to construct.",
                "examples": [
                    "They are building a new office block.",
                    "She built a strong reputation over ten years."
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
        "subtext": "produce energy, produce goods / produce results",
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
                    "The mechanic charged more than the estimate.",
                    "The mechanic charged three hundred euros."
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
        "theme": "diet_nutrition_A2",
        "emoji": "🥘",
        "form": "verb",
        "subtext": "prepare for a meeting / prepare a report / prepare dinner",
        "definitions": [
            {
                "text": "To make something ready; to get yourself ready.",
                "examples": [
                    "He prepares a detailed agenda before every meeting.",
                    "He is preparing dinner."
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
        "theme": "school_life_routines_A2",
        "emoji": "❌",
        "form": "verb",
        "subtext": "fail an exam / fail to do / fail a test / fail to meet a deadline",
        "definitions": [
            {
                "text": "To not succeed; to not do something required.",
                "examples": [
                    "She failed the first exam but passed the second attempt.",
                    "I failed my driving test three times."
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
        "opposite": "stay home"
    },
    {
        "word": "recover",
        "level": "elementary",
        "theme": "human_body_A2",
        "emoji": "🩹",
        "form": "verb",
        "subtext": "recover from illness / recover quickly / recover fully",
        "definitions": [
            {
                "text": "To return to good health after illness or injury.",
                "examples": [
                    "She is recovering from a back injury."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recovered",
        "v3": "recovered",
        "opposite": "get sick"
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
                "text": "To be the property of someone; to be a member of a group.",
                "examples": [
                    "That account belongs to the finance department."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "belonged",
        "v3": "belonged",
        "opposite": "be separate"
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
        "opposite": "ignore"
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
                "text": "To plan or arrange something in an orderly way.",
                "examples": [
                    "She organizes all the meetings."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "organized",
        "v3": "organized",
        "opposite": "mess up"
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
        "opposite": "know"
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
        "opposite": "delete"
    },
    {
        "word": "doubt",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🤨",
        "form": "verb",
        "subtext": "not believe / doubt it",
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
        "opposite": "believe"
    },
    {
        "word": "destroy",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💣",
        "form": "verb",
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
        "opposite": "build"
    },
    {
        "word": "owe",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💸",
        "form": "verb",
        "subtext": "owe money / owe someone / owe a lot / owe nothing",
        "definitions": [
            {
                "text": "To be required to pay money to someone.",
                "examples": [
                    "He owes the bank fifty thousand euros."
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
        "word": "recommend",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "👍",
        "form": "verb",
        "subtext": "recommend a place / recommend someone / recommend a film",
        "definitions": [
            {
                "text": "To suggest something as good or suitable.",
                "examples": [
                    "Can you recommend a good restaurant near the office?"
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
        "word": "explain",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💡",
        "form": "verb",
        "subtext": "explain a process / explain clearly / explain to someone",
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
        "opposite": "confuse"
    },
    {
        "word": "include",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "➕",
        "form": "verb",
        "subtext": "include something / include in / not included / price includes",
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
        "opposite": "demand"
    },
    {
        "word": "disagree",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "👎",
        "form": "verb",
        "subtext": "disagree with / I disagree",
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
        "opposite": "agree"
    },
    {
        "word": "achieve",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🎯",
        "form": "verb",
        "subtext": "achieve a goal / achieve success / achieve results",
        "definitions": [
            {
                "text": "To succeed in finishing something or reaching a goal, especially after a lot of work or effort.",
                "examples": [
                    "She worked hard to achieve her goals.",
                    "The team achieved a great victory."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "achieved",
        "v3": "achieved",
        "opposite": "fail"
    },
    {
        "word": "believe",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🙏",
        "form": "verb",
        "subtext": "believe in / I believe / hard to believe",
        "definitions": [
            {
                "text": "To think that something is true, correct, or real.",
                "examples": [
                    "I believe you are right.",
                    "Do you believe in ghosts?"
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
        "word": "deliver",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "emoji": "📦",
        "form": "verb",
        "subtext": "deliver food / deliver a package / deliver a speech",
        "definitions": [
            {
                "text": "To take goods, letters, parcels, etc. to people's houses or places of work.",
                "examples": [
                    "The mail is delivered every morning.",
                    "Can you deliver the pizza to my house?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "delivered",
        "v3": "delivered",
        "opposite": "collect"
    },
    {
        "word": "explore",
        "level": "elementary",
        "theme": "holiday_types_A2",
        "emoji": "🧭",
        "form": "verb",
        "subtext": "explore the city / explore options / explore nature",
        "definitions": [
            {
                "text": "To search and discover about something.",
                "examples": [
                    "We went to explore the old town.",
                    "Scientists are exploring the ocean floor."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "explored",
        "v3": "explored",
        "opposite": "ignore"
    },
    {
        "word": "follow",
        "level": "elementary",
        "theme": "directions_location_A2",
        "emoji": "🚶",
        "form": "verb",
        "subtext": "follow instructions / follow a path / follow someone",
        "definitions": [
            {
                "text": "To move behind someone or something and go where they go.",
                "examples": [
                    "The dog followed me home.",
                    "Please follow the signs to the exit."
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
        "word": "guess",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🤔",
        "form": "verb",
        "subtext": "guess what / can you guess? / I guess so",
        "definitions": [
            {
                "text": "To give an answer to a particular question when you do not have all the facts and so cannot be certain if you are correct.",
                "examples": [
                    "Can you guess how old he is?",
                    "I guess she is about thirty."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "guessed",
        "v3": "guessed",
        "opposite": "know"
    },
    {
        "word": "hope",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🤞",
        "form": "verb",
        "subtext": "hope so / hope for / I hope that",
        "definitions": [
            {
                "text": "To want something to happen or to be true, and usually have a good reason to think that it might.",
                "examples": [
                    "I hope you have a nice day.",
                    "We hope to see you soon."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "hoped",
        "v3": "hoped",
        "opposite": "fear"
    },
    {
        "word": "join",
        "level": "elementary",
        "theme": "community_neighbourhood_local_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "join a club / join a meeting / join us",
        "definitions": [
            {
                "text": "To become a member of an organization.",
                "examples": [
                    "She joined the gym last month.",
                    "Would you like to join us for dinner?"
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
        "word": "manage",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💼",
        "form": "verb",
        "subtext": "manage a team / manage time / manage to do",
        "definitions": [
            {
                "text": "To be responsible for controlling or organizing someone or something.",
                "examples": [
                    "He manages a large department.",
                    "How do you manage your time?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "managed",
        "v3": "managed",
        "opposite": "follow"
    },
    {
        "word": "perform",
        "level": "elementary",
        "theme": "theatre_performance_A2",
        "emoji": "🎭",
        "form": "verb",
        "subtext": "perform on stage / perform well / perform a task",
        "definitions": [
            {
                "text": "To entertain people by acting, singing, dancing, etc.",
                "examples": [
                    "The band performed their new song.",
                    "She performs in the local theatre."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "performed",
        "v3": "performed",
        "opposite": "watch"
    },
    {
        "word": "receive",
        "level": "elementary",
        "theme": "shopping_for_food_A2",
        "emoji": "📥",
        "form": "verb",
        "subtext": "receive a gift / receive an email / receive information",
        "definitions": [
            {
                "text": "To get or be given something.",
                "examples": [
                    "I received a letter this morning.",
                    "Did you receive my message?"
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
        "word": "search",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "🔍",
        "form": "verb",
        "subtext": "search online / search for / search the web",
        "definitions": [
            {
                "text": "To look for something carefully.",
                "examples": [
                    "I searched for my keys everywhere.",
                    "You can search the database for more information."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "searched",
        "v3": "searched",
        "opposite": "find"
    },
    {
        "word": "wonder",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💭",
        "form": "verb",
        "subtext": "I wonder why / wonder if / just wondering",
        "definitions": [
            {
                "text": "To ask yourself questions or express a wish to know about something.",
                "examples": [
                    "I wonder why she is late.",
                    "I was wondering if you could help me."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "wondered",
        "v3": "wondered",
        "opposite": "know"
    },
    {
        "word": "attract",
        "level": "elementary",
        "theme": "personality_character_A2",
        "emoji": "🧲",
        "form": "verb",
        "subtext": "attract attention / attract visitors / be attracted to",
        "definitions": [
            {
                "text": "To pull or draw someone or something towards them.",
                "examples": [
                    "The bright lights attract insects.",
                    "The city attracts many tourists."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "attracted",
        "v3": "attracted",
        "opposite": "repel"
    },
    {
        "word": "avoid",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🚫",
        "form": "verb",
        "subtext": "avoid problems / avoid traffic / avoid someone",
        "definitions": [
            {
                "text": "To stay away from someone or something.",
                "examples": [
                    "I try to avoid processed foods.",
                    "She avoided eye contact with him."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "avoided",
        "v3": "avoided",
        "opposite": "confront"
    },
    {
        "word": "behave",
        "level": "elementary",
        "theme": "personality_character_A2",
        "emoji": "😇",
        "form": "verb",
        "subtext": "behave well / behave badly / behave yourself",
        "definitions": [
            {
                "text": "To act in a particular way.",
                "examples": [
                    "The children behaved very well today.",
                    "He needs to learn how to behave in public."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "behaved",
        "v3": "behaved",
        "opposite": "misbehave"
    },
    {
        "word": "cancel",
        "level": "elementary",
        "theme": "booking_planning_a_trip_A2",
        "emoji": "❌",
        "form": "verb",
        "subtext": "cancel a booking / cancel a meeting / cancel a flight",
        "definitions": [
            {
                "text": "To decide that an organized event will not happen.",
                "examples": [
                    "They had to cancel the match because of rain.",
                    "I need to cancel my appointment."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cancelled",
        "v3": "cancelled",
        "opposite": "confirm"
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
                "text": "To say that something is wrong or not satisfactory.",
                "examples": [
                    "She complained about the noise.",
                    "We should complain to the manager."
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
        "word": "connect",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "🔗",
        "form": "verb",
        "subtext": "connect to wifi / connect with people / connect dots",
        "definitions": [
            {
                "text": "To join or be joined with something else.",
                "examples": [
                    "Click here to connect to the internet.",
                    "The bridge connects the two islands."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "connected",
        "v3": "connected",
        "opposite": "disconnect"
    },
    {
        "word": "convince",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🗣️",
        "form": "verb",
        "subtext": "convince someone / convince yourself / hard to convince",
        "definitions": [
            {
                "text": "To persuade someone or make them certain.",
                "examples": [
                    "He managed to convince me to go.",
                    "I'm not convinced by his story."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "convinced",
        "v3": "convinced",
        "opposite": "dissuade"
    },
    {
        "word": "calculate",
        "level": "elementary",
        "theme": "basic_arithmetic_A2",
        "emoji": "🧮",
        "form": "verb",
        "subtext": "calculate the cost / calculate the distance / calculate results",
        "definitions": [
            {
                "text": "To discover an amount or number using mathematics.",
                "examples": [
                    "Can you calculate the total cost?",
                    "We need to calculate how much paint we need."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "calculated",
        "v3": "calculated",
        "opposite": "guess"
    },
    {
        "word": "measure",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "📏",
        "form": "verb",
        "subtext": "measure length / measure temperature / measure success",
        "definitions": [
            {
                "text": "To discover the exact size or amount of something.",
                "examples": [
                    "Measure the width of the window.",
                    "The nurse measured my height."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "measured",
        "v3": "measured",
        "opposite": "estimate"
    },
    {
        "word": "deposit",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "💰",
        "form": "verb",
        "subtext": "deposit money / deposit a check / direct deposit",
        "definitions": [
            {
                "text": "To put money into a bank account.",
                "examples": [
                    "I need to deposit this check.",
                    "She deposited five hundred dollars into her savings account."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "deposited",
        "v3": "deposited",
        "opposite": "withdraw"
    },
    {
        "word": "reserve",
        "level": "elementary",
        "theme": "accommodation_A2",
        "emoji": "🛎️",
        "form": "verb",
        "subtext": "reserve a room / reserve a table / reserve a seat",
        "definitions": [
            {
                "text": "To keep something for a particular person or purpose.",
                "examples": [
                    "I'd like to reserve a table for two.",
                    "The seats are reserved for elderly passengers."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reserved",
        "v3": "reserved",
        "opposite": "cancel"
    },
    {
        "word": "attend",
        "level": "elementary",
        "theme": "school_life_routines_A2",
        "emoji": "🙋",
        "form": "verb",
        "subtext": "attend a meeting / attend school / attend a wedding",
        "definitions": [
            {
                "text": "To go to an event, place, etc.",
                "examples": [
                    "He attends church every Sunday.",
                    "We attended a very interesting lecture."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "attended",
        "v3": "attended",
        "opposite": "miss"
    },
    {
        "word": "graduate",
        "level": "elementary",
        "theme": "qualifications_exams_A2",
        "emoji": "🎓",
        "form": "verb",
        "subtext": "graduate from university / graduate high school / recent graduate",
        "definitions": [
            {
                "text": "To complete a school, college, or university course.",
                "examples": [
                    "She graduated from Oxford last year.",
                    "My brother is graduating this summer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "graduated",
        "v3": "graduated",
        "opposite": "drop out"
    },
    {
        "word": "rent",
        "level": "elementary",
        "theme": "renting_landlords_A2",
        "emoji": "🔑",
        "form": "verb",
        "subtext": "rent a flat / rent a car / for rent",
        "definitions": [
            {
                "text": "To pay money to use something for a period of time.",
                "examples": [
                    "They are renting a house near the beach.",
                    "How much does it cost to rent a bike?"
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
        "word": "protect",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🛡️",
        "form": "verb",
        "subtext": "protect the environment / protect wildlife / protect from harm",
        "definitions": [
            {
                "text": "To keep someone or something safe from injury, damage, or loss.",
                "examples": [
                    "We must protect the forest.",
                    "Sunglasses protect your eyes from the sun."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "protected",
        "v3": "protected",
        "opposite": "damage"
    },
    {
        "word": "identify",
        "level": "elementary",
        "theme": "personality_character_A2",
        "emoji": "🔎",
        "form": "verb",
        "subtext": "identify a problem / identify a suspect / identify as",
        "definitions": [
            {
                "text": "To recognize someone or something and say who or what they are.",
                "examples": [
                    "Can you identify the man in the photo?",
                    "The police identified the problem quickly."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "identified",
        "v3": "identified",
        "opposite": "ignore"
    },
    {
        "word": "describe",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "📝",
        "form": "verb",
        "subtext": "describe someone / describe a situation / describe in detail",
        "definitions": [
            {
                "text": "To say or write what someone or something is like.",
                "examples": [
                    "Can you describe your new house?",
                    "He described the accident to the police."
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
        "word": "participate",
        "level": "elementary",
        "theme": "community_neighbourhood_local_A2",
        "emoji": "🙋",
        "form": "verb",
        "subtext": "participate in a meeting / participate in a discussion / active participation",
        "definitions": [
            {
                "text": "To take part in or become involved in an activity.",
                "examples": [
                    "Everyone is encouraged to participate in the project.",
                    "She participated in the marathon."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "participated",
        "v3": "participated",
        "opposite": "withdraw"
    },
    {
        "word": "mention",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🗣️",
        "form": "verb",
        "subtext": "mention something / don't mention it / as mentioned before",
        "definitions": [
            {
                "text": "To speak or write about something briefly.",
                "examples": [
                    "He mentioned that he was going to be late.",
                    "Did she mention the new project?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "mentioned",
        "v3": "mentioned",
        "opposite": "ignore"
    },
    {
        "word": "depend",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🔗",
        "form": "verb",
        "subtext": "depend on / it depends / depend on someone",
        "definitions": [
            {
                "text": "To be decided by or change according to something else.",
                "examples": [
                    "Whether we go depends on the weather.",
                    "I can always depend on my friends."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "depended",
        "v3": "depended",
        "opposite": "stand alone"
    },
    {
        "word": "prepare",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "📝",
        "form": "verb",
        "subtext": "prepare for an exam / prepare a meal / prepare a speech",
        "definitions": [
            {
                "text": "To make or get something or someone ready for something that will happen in the future.",
                "examples": [
                    "I'm preparing for my driving test.",
                    "We are preparing the report."
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
        "word": "organize",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📂",
        "form": "verb",
        "subtext": "organize a meeting / organize a trip / highly organized",
        "definitions": [
            {
                "text": "To make arrangements for something to happen.",
                "examples": [
                    "She is organizing the office party.",
                    "I need to organize my desk."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "organized",
        "v3": "organized",
        "opposite": "mess up"
    },
    {
        "word": "manage",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💼",
        "form": "verb",
        "subtext": "manage a project / manage time / manage to do something",
        "definitions": [
            {
                "text": "To succeed in doing or dealing with something, especially something difficult.",
                "examples": [
                    "How do you manage to stay so calm?",
                    "He manages the department efficiently."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "managed",
        "v3": "managed",
        "opposite": "fail"
    },
    {
        "word": "improve",
        "level": "elementary",
        "theme": "school_life_routines_A2",
        "emoji": "📈",
        "form": "verb",
        "subtext": "improve your English / improve performance / room for improvement",
        "definitions": [
            {
                "text": "To get better, or to make something better.",
                "examples": [
                    "I want to improve my speaking skills.",
                    "The weather is improving."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "improved",
        "v3": "improved",
        "opposite": "worsen"
    },
    {
        "word": "increase",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "📈",
        "form": "verb",
        "subtext": "increase in price / increase by ten percent / steady increase",
        "definitions": [
            {
                "text": "To become or make something larger in amount or size.",
                "examples": [
                    "The population is increasing.",
                    "We need to increase our sales."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "increased",
        "v3": "increased",
        "opposite": "decrease"
    },
    {
        "word": "decrease",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "📉",
        "form": "verb",
        "subtext": "decrease in number / decrease gradually / significant decrease",
        "definitions": [
            {
                "text": "To become less, or to make something become less.",
                "examples": [
                    "The number of students decreased this year.",
                    "We should decrease our spending."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "decreased",
        "v3": "decreased",
        "opposite": "increase"
    },
    {
        "word": "achieve",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏆",
        "form": "verb",
        "subtext": "achieve a goal / achieve success / achieve results",
        "definitions": [
            {
                "text": "To succeed in finishing something or reaching a goal.",
                "examples": [
                    "She achieved a lot in her career.",
                    "The team achieved their target."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "achieved",
        "v3": "achieved",
        "opposite": "fail"
    },
    {
        "word": "calculate",
        "level": "elementary",
        "theme": "basic_arithmetic_A2",
        "emoji": "🧮",
        "form": "verb",
        "subtext": "calculate the cost / calculate the total / calculate accurately",
        "definitions": [
            {
                "text": "To find an answer using mathematics.",
                "examples": [
                    "Can you calculate the total?",
                    "We need to calculate the distance."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "calculated",
        "v3": "calculated",
        "opposite": "guess"
    },
    {
        "word": "measure",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "📏",
        "form": "verb",
        "subtext": "measure height / measure weight / measure exactly",
        "definitions": [
            {
                "text": "To find the size, weight, or amount of something.",
                "examples": [
                    "Measure the length of the table.",
                    "He measured his heart rate."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "measured",
        "v3": "measured",
        "opposite": "estimate"
    },
    {
        "word": "solve",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🧩",
        "form": "verb",
        "subtext": "solve a problem / solve a riddle / find a solution",
        "definitions": [
            {
                "text": "To find an answer to a problem.",
                "examples": [
                    "He solved the mystery.",
                    "We need to solve this problem quickly."
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
        "word": "recommend",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "👍",
        "form": "verb",
        "subtext": "recommend a book / recommend a restaurant / highly recommended",
        "definitions": [
            {
                "text": "To suggest that someone or something would be good or suitable for a particular job or purpose.",
                "examples": [
                    "Can you recommend a good hotel?",
                    "I recommend this book to everyone."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recommended",
        "v3": "recommended",
        "opposite": "warn against"
    },
    {
        "word": "compare",
        "level": "elementary",
        "theme": "comparison_A2",
        "emoji": "⚖️",
        "form": "verb",
        "subtext": "compare prices / compare options / in comparison with",
        "definitions": [
            {
                "text": "To examine or look for the difference between two or more things.",
                "examples": [
                    "Compare the two maps.",
                    "If you compare the prices, this one is cheaper."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "compared",
        "v3": "compared",
        "opposite": "differentiate"
    },
    {
        "word": "complete",
        "level": "elementary",
        "theme": "school_life_routines_A2",
        "emoji": "✅",
        "form": "verb",
        "subtext": "complete a task / complete a form / full completion",
        "definitions": [
            {
                "text": "To finish doing something.",
                "examples": [
                    "Please complete the application form.",
                    "He completed the race in record time."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "completed",
        "v3": "completed",
        "opposite": "start"
    },
    {
        "word": "contain",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "📦",
        "form": "verb",
        "subtext": "contain sugar / contain information / the box contains",
        "definitions": [
            {
                "text": "To have something inside or include something as a part.",
                "examples": [
                    "This drink contains a lot of sugar.",
                    "The letter contains important news."
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
        "word": "continue",
        "level": "elementary",
        "theme": "school_life_routines_A2",
        "emoji": "➡️",
        "form": "verb",
        "subtext": "continue working / continue the journey / to be continued",
        "definitions": [
            {
                "text": "To keep happening, or to keep doing something without stopping.",
                "examples": [
                    "The rain continued all day.",
                    "Please continue reading."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "continued",
        "v3": "continued",
        "opposite": "stop"
    },
    {
        "word": "deliver",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "emoji": "📦",
        "form": "verb",
        "subtext": "deliver a pizza / deliver a parcel / home delivery",
        "definitions": [
            {
                "text": "To take goods, letters, parcels, etc. to a person or place.",
                "examples": [
                    "The pizza was delivered in thirty minutes.",
                    "They deliver groceries to your door."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "delivered",
        "v3": "delivered",
        "opposite": "collect"
    },
    {
        "word": "develop",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💻",
        "form": "verb",
        "subtext": "develop a product / develop a skill / research and development",
        "definitions": [
            {
                "text": "To grow or change into something more advanced.",
                "examples": [
                    "The company is developing a new app.",
                    "She is developing her photography skills."
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
        "word": "examine",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "🔬",
        "form": "verb",
        "subtext": "examine a patient / examine a document / cross-examination",
        "definitions": [
            {
                "text": "To look at or consider a person or thing carefully in order to discover something about them.",
                "examples": [
                    "The doctor examined the child.",
                    "We need to examine the evidence."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "examined",
        "v3": "examined",
        "opposite": "ignore"
    },
    {
        "word": "explain",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💡",
        "form": "verb",
        "subtext": "explain the rules / explain clearly / let me explain",
        "definitions": [
            {
                "text": "To make something clear or easy to understand by giving more details.",
                "examples": [
                    "Can you explain this math problem?",
                    "He explained why he was late."
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
        "word": "explore",
        "level": "elementary",
        "theme": "holiday_types_A2",
        "emoji": "🧭",
        "form": "verb",
        "subtext": "explore the woods / explore new ideas / exploration",
        "definitions": [
            {
                "text": "To search and discover about something.",
                "examples": [
                    "They went to explore the island.",
                    "We should explore all the options."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "explored",
        "v3": "explored",
        "opposite": "ignore"
    }
    ];
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();