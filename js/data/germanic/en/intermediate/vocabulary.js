(function() {
    const data = [
    {
        "word": "engineer",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "👷",
        "form": "noun",
        "plural": "engineers",
        "definitions": [
            {
                "text": "A person who designs or builds machines, engines, or structures.",
                "examples": [
                    "The engineer is working on a new bridge.",
                    "He wants to be an electrical engineer."
                ]
            },
            {
                "text": "This person often works in an office or on a construction site.",
                "examples": [
                    "Engineers use computers to design things."
                ]
            }
        ]
    },
    {
        "word": "pilot",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "🧑‍✈️",
        "form": "noun",
        "plural": "pilots",
        "definitions": [
            {
                "text": "A person who flies an airplane or a helicopter.",
                "examples": [
                    "The pilot is in the cockpit.",
                    "He wants to be a pilot."
                ]
            },
            {
                "text": "This person works in the sky and at the airport.",
                "examples": [
                    "Pilots wear a uniform."
                ]
            }
        ]
    },
    {
        "word": "sushi",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🍣",
        "form": "noun",
        "plural": "sushi",
        "definitions": [
            {
                "text": "A Japanese dish with rice and raw fish.",
                "examples": [
                    "I like eating sushi with soy sauce.",
                    "We are going to a sushi restaurant."
                ]
            },
            {
                "text": "This food is originally from Japan.",
                "examples": [
                    "Sushi is often served with ginger and wasabi."
                ]
            }
        ]
    },
    {
        "word": "pancake",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🥞",
        "form": "noun",
        "plural": "pancakes",
        "definitions": [
            {
                "text": "A flat, round cake cooked in a pan.",
                "examples": [
                    "She is making pancakes.",
                    "I like pancakes with honey."
                ]
            },
            {
                "text": "People often eat this for breakfast with syrup.",
                "examples": [
                    "Pancakes are soft and sweet."
                ]
            }
        ]
    },
    {
        "word": "carrot",
        "level": "intermediate",
        "theme": "society_community_B1",
        "explanation": "Carrot is a vegetable, the others are fruits.",
        "emoji": "🥕",
        "form": "noun",
        "plural": "carrots",
        "definitions": [
            {
                "text": "A long orange root vegetable.",
                "examples": [
                    "Carrots are good for your eyes.",
                    "I like raw carrots."
                ]
            },
            {
                "text": "Rabbits love eating carrots.",
                "examples": [
                    "You can use carrots in a cake."
                ]
            }
        ]
    },
    {
        "word": "milkshake",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🥤",
        "form": "noun",
        "plural": "milkshakes",
        "definitions": [
            {
                "text": "A cold drink made of milk, ice cream, and flavorings.",
                "examples": [
                    "I'll have a chocolate milkshake.",
                    "The milkshake is very thick."
                ]
            },
            {
                "text": "This is a sweet and thick drink.",
                "examples": [
                    "Milkshakes are popular in American diners."
                ]
            }
        ]
    },
    {
        "word": "library",
        "level": "intermediate",
        "theme": "neighbourhood_local_A2",
        "explanation": "A library is a place for books, while the others might be related to food or travel.",
        "emoji": "📚",
        "form": "noun",
        "plural": "libraries"
    },
    {
        "word": "museum",
        "level": "intermediate",
        "theme": "neighbourhood_local_A2",
        "emoji": "🏛️",
        "form": "noun",
        "plural": "museums"
    },
    {
        "word": "airport",
        "level": "intermediate",
        "theme": "travel_cultural_B1",
        "emoji": "✈️",
        "form": "noun",
        "plural": "airports",
        "definitions": [
            {
                "text": "A place where planes land and take off.",
                "examples": [
                    "I am going to the airport.",
                    "The airport is very big."
                ]
            },
            {
                "text": "This is the place where you go to catch a flight.",
                "examples": [
                    "We need to be at the airport two hours before the flight."
                ]
            }
        ]
    },
    {
        "word": "sweater",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🧶",
        "form": "noun",
        "plural": "sweaters"
    },
    {
        "word": "scarf",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🧣",
        "form": "noun",
        "plural": "scarves"
    },
    {
        "word": "wardrobe",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "👗",
        "form": "noun",
        "plural": "wardrobes"
    },
    {
        "word": "shelf",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "📚",
        "form": "noun",
        "plural": "shelves"
    },
    {
        "word": "mirror",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🪞",
        "form": "noun",
        "plural": "mirrors"
    },
    {
        "word": "umbrella",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "☂️",
        "form": "noun",
        "plural": "umbrellas"
    },
    {
        "word": "laptop",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "💻",
        "form": "noun",
        "plural": "laptops"
    },
    {
        "word": "elephant",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🐘",
        "form": "noun",
        "plural": "elephants"
    },
    {
        "word": "monkey",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🐒",
        "form": "noun",
        "plural": "monkeys"
    },
    {
        "word": "software developer",
        "level": "intermediate",
        "theme": "career_development_B1",
        "explanation": "A software developer creates code, while the others are physical structures or objects.",
        "emoji": "💻",
        "form": "noun",
        "plural": "software developers",
        "definitions": [
            {
                "text": "A person who writes computer programs.",
                "examples": [
                    "The software developer is coding a new app.",
                    "I want to be a software developer."
                ]
            },
            {
                "text": "This person works with a computer.",
                "examples": [
                    "Software developers use different programming languages."
                ]
            }
        ]
    },
    {
        "word": "architect",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "🏗️",
        "form": "noun",
        "plural": "architects",
        "definitions": [
            {
                "text": "A person who designs buildings.",
                "examples": [
                    "The architect designed this skyscraper.",
                    "My brother is an architect."
                ]
            },
            {
                "text": "This person draws plans for houses and offices.",
                "examples": [
                    "Architects need to be good at math and drawing."
                ]
            }
        ]
    },
    {
        "word": "algorithm",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "💻",
        "form": "noun",
        "plural": "algorithms"
    },
    {
        "word": "evolution",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🐒",
        "form": "noun",
        "plural": "evolutions"
    },
    {
        "word": "democracy",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🗳️",
        "form": "noun",
        "plural": "democracies"
    },
    {
        "word": "ecosystem",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "🌲",
        "form": "noun",
        "plural": "ecosystems"
    },
    {
        "word": "colleague",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "👥",
        "form": "noun",
        "plural": "colleagues"
    },
    {
        "word": "remote work",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "💻",
        "form": "noun",
        "plural": null
    },
    {
        "word": "global warming",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "🌡️",
        "form": "noun",
        "plural": null
    },
    {
        "word": "commuter",
        "level": "intermediate",
        "theme": "travel_cultural_B1",
        "emoji": "🚆",
        "form": "noun",
        "plural": "commuters",
        "definitions": [
            {
                "text": "A person who travels some distance to work on a regular basis.",
                "examples": [
                    "The train is full of commuters.",
                    "I am a daily commuter."
                ]
            },
            {
                "text": "This person often uses public transport like trains or buses.",
                "examples": [
                    "Commuters often travel during rush hour."
                ]
            }
        ]
    },
    {
        "word": "child",
        "theme": "society_community_B1",
        "level": "intermediate",
        "numberPlural": "5 child",
        "answer": "five children",
        "emoji": "🧒",
        "form": "noun",
        "plural": "children",
        "definitions": [
            {
                "text": "A young human who is not yet an adult.",
                "examples": [
                    "The child is playing with a toy.",
                    "How many children do they have?"
                ]
            }
        ]
    },
    {
        "word": "leaf",
        "theme": "environment_sustainability_B1",
        "level": "intermediate",
        "numberPlural": "many leaf",
        "answer": "many leaves",
        "emoji": "🍃",
        "form": "noun",
        "plural": "leaves"
    },
    {
        "word": "tooth",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "numberPlural": "32 tooth",
        "answer": "thirty-two teeth",
        "emoji": "🦷",
        "form": "noun",
        "plural": "teeth"
    },
    {
        "word": "career",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "📈",
        "form": "noun",
        "plural": "careers",
        "subtext": "career path, long-term career",
        "definitions": [
            {
                "text": "The series of jobs someone has during their working life.",
                "examples": [
                    "She has had a successful career in finance.",
                    "He is looking for a career change."
                ]
            }
        ]
    },
    {
        "word": "redundancy",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "📉",
        "form": "noun",
        "plural": "redundancies",
        "subtext": "voluntary redundancy, redundancy pay",
        "definitions": [
            {
                "text": "Losing your job because the employer no longer needs the role.",
                "examples": [
                    "He received redundancy pay last year.",
                    "Thousands of workers face redundancy."
                ]
            }
        ]
    },
    {
        "word": "flexible working",
        "level": "intermediate",
        "theme": "work_life_balance_B1",
        "emoji": "🏠",
        "form": "noun phrase",
        "plural": null,
        "subtext": "work from home, flexitime",
        "definitions": [
            {
                "text": "An arrangement allowing employees to vary their hours or location.",
                "examples": [
                    "The company offers flexible working from home.",
                    "Flexible working helps parents balance their lives."
                ]
            }
        ]
    },
    {
        "word": "networking",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "🤝",
        "form": "noun",
        "plural": null,
        "subtext": "professional networking, networking event",
        "definitions": [
            {
                "text": "Building professional relationships to help your career.",
                "examples": [
                    "Networking is essential in this industry.",
                    "I met him at a networking event."
                ]
            }
        ]
    },
    {
        "word": "workload",
        "level": "intermediate",
        "theme": "work_life_balance_B1",
        "emoji": "📚",
        "form": "noun",
        "plural": "workloads",
        "subtext": "heavy workload, manage workload",
        "definitions": [
            {
                "text": "The amount of work a person has to do.",
                "examples": [
                    "Her workload has increased a lot this month.",
                    "I need to reduce my workload."
                ]
            }
        ]
    },
    {
        "word": "teamwork",
        "level": "intermediate",
        "theme": "workplace_communication_B1",
        "emoji": "👥",
        "form": "noun",
        "plural": null,
        "subtext": "effective teamwork, team spirit",
        "definitions": [
            {
                "text": "Working effectively together with other people.",
                "examples": [
                    "Good teamwork made the project a success.",
                    "We value teamwork above all else."
                ]
            }
        ]
    },
    {
        "word": "ambition",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "🚀",
        "form": "noun",
        "plural": "ambitions",
        "subtext": "high ambition, professional ambition",
        "definitions": [
            {
                "text": "A strong desire to achieve something.",
                "examples": [
                    "His ambition is to become a manager.",
                    "She has the ambition to start her own business."
                ]
            }
        ]
    },
    {
        "word": "skill",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "🛠️",
        "form": "noun",
        "plural": "skills",
        "subtext": "soft skills, hard skills, practical skills",
        "definitions": [
            {
                "text": "An ability to do something well, usually gained through practice.",
                "examples": [
                    "Communication skills are very important at work.",
                    "He has great technical skills."
                ]
            }
        ]
    },
    {
        "word": "maternity leave",
        "level": "intermediate",
        "theme": "work_life_balance_B1",
        "emoji": "👶",
        "form": "noun phrase",
        "plural": null,
        "subtext": "paternity leave, parental leave",
        "definitions": [
            {
                "text": "Paid time off work given to a mother after having a baby.",
                "examples": [
                    "She took six months of maternity leave.",
                    "He is on paternity leave."
                ]
            }
        ]
    },
    {
        "word": "pension",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "emoji": "👴",
        "form": "noun",
        "plural": "pensions",
        "subtext": "pension plan, retirement fund",
        "definitions": [
            {
                "text": "Money paid to someone regularly after they retire.",
                "examples": [
                    "He contributes to his pension every month.",
                    "The state pension is not enough to live on."
                ]
            }
        ]
    },
    {
        "word": "investment",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "emoji": "💰",
        "form": "noun",
        "plural": "investments",
        "subtext": "long-term investment, return on investment",
        "definitions": [
            {
                "text": "Money put into something in order to get a profit in the future.",
                "examples": [
                    "Property is a popular investment.",
                    "He made a risky investment in stocks."
                ]
            }
        ]
    },
    {
        "word": "interest rate",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "emoji": "📊",
        "form": "noun phrase",
        "plural": "interest rates",
        "subtext": "high interest rate, low interest rate",
        "definitions": [
            {
                "text": "The percentage charged for borrowing money or earned on savings.",
                "examples": [
                    "The interest rate on the mortgage is three percent.",
                    "Bank of England raised the interest rate."
                ]
            }
        ]
    },
    {
        "word": "income",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "emoji": "💵",
        "form": "noun",
        "plural": "incomes",
        "subtext": "annual income, disposable income",
        "opposite": "expense",
        "oppositeEmoji": "💸",
        "definitions": [
            {
                "text": "Money received from work or other sources.",
                "examples": [
                    "Their household income is comfortable.",
                    "He has no steady income."
                ]
            }
        ]
    },
    {
        "word": "insurance",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "emoji": "🛡️",
        "form": "noun",
        "plural": "insurances",
        "subtext": "health insurance, car insurance",
        "definitions": [
            {
                "text": "An agreement where you pay regularly to be protected against loss or damage.",
                "examples": [
                    "Health insurance is expensive in some countries.",
                    "Do you have travel insurance?"
                ]
            }
        ]
    },
    {
        "word": "tax",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "emoji": "🏛️",
        "form": "noun",
        "plural": "taxes",
        "subtext": "income tax, value-added tax (VAT)",
        "definitions": [
            {
                "text": "Money paid to the government based on income or purchases.",
                "examples": [
                    "She pays a lot of income tax.",
                    "The tax on fuel has increased."
                ]
            }
        ]
    },
    {
        "word": "wellbeing",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "emoji": "🧘",
        "form": "noun",
        "plural": null,
        "subtext": "mental wellbeing, emotional wellbeing",
        "definitions": [
            {
                "text": "A general feeling of being comfortable, healthy and happy.",
                "examples": [
                    "Exercise is important for mental wellbeing.",
                    "The company cares about employee wellbeing."
                ]
            }
        ]
    },
    {
        "word": "mental health",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "emoji": "🧠",
        "form": "noun phrase",
        "plural": null,
        "subtext": "mental health awareness, psychological state",
        "definitions": [
            {
                "text": "A person's psychological and emotional state.",
                "examples": [
                    "Companies are taking mental health more seriously.",
                    "Stress can affect your mental health."
                ]
            }
        ]
    },
    {
        "word": "burnout",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "emoji": "🔋",
        "form": "noun",
        "plural": null,
        "subtext": "emotional exhaustion, work stress",
        "definitions": [
            {
                "text": "A state of exhaustion caused by too much stress over a long time.",
                "examples": [
                    "She suffered from burnout after working without a break.",
                    "Burnout is common in high-pressure jobs."
                ]
            }
        ]
    },
    {
        "word": "prevention",
        "level": "intermediate",
        "theme": "healthcare_systems_B1",
        "emoji": "🛡️",
        "form": "noun",
        "plural": "preventions",
        "subtext": "prevention is better than cure, crime prevention",
        "definitions": [
            {
                "text": "Action taken to stop something bad from happening.",
                "examples": [
                    "Prevention is better than cure.",
                    "The focus is on the prevention of disease."
                ]
            }
        ]
    },
    {
        "word": "symptoms",
        "level": "intermediate",
        "theme": "healthcare_systems_B1",
        "emoji": "🤒",
        "form": "noun",
        "plural": "symptoms",
        "subtext": "flu symptoms, show symptoms",
        "definitions": [
            {
                "text": "Signs that suggest a person has a particular illness.",
                "examples": [
                    "The symptoms started last week.",
                    "If you have any symptoms, stay at home."
                ]
            }
        ]
    },
    {
        "word": "therapy",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "emoji": "🗣️",
        "form": "noun",
        "plural": "therapies",
        "subtext": "speech therapy, cognitive behavioral therapy",
        "definitions": [
            {
                "text": "Treatment for mental or physical problems, often through talking.",
                "examples": [
                    "He goes to therapy once a week.",
                    "Therapy helped her cope with anxiety."
                ]
            }
        ]
    },
    {
        "word": "trust",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🤝",
        "form": "noun",
        "plural": null,
        "subtext": "mutual trust, lack of trust",
        "opposite": "distrust",
        "definitions": [
            {
                "text": "A firm belief in the honesty and reliability of someone.",
                "examples": [
                    "Trust is the foundation of a good relationship.",
                    "It takes years to build trust and seconds to break it."
                ]
            }
        ]
    },
    {
        "word": "conflict",
        "level": "intermediate",
        "theme": "family_dynamics_B1",
        "emoji": "⚔️",
        "form": "noun",
        "plural": "conflicts",
        "subtext": "resolve conflict, armed conflict",
        "opposite": "harmony",
        "oppositeEmoji": "🕊️",
        "definitions": [
            {
                "text": "A serious disagreement or argument.",
                "examples": [
                    "They had a conflict about money.",
                    "The managers are trying to avoid conflict."
                ]
            }
        ]
    },
    {
        "word": "responsibility",
        "level": "intermediate",
        "theme": "family_dynamics_B1",
        "emoji": "🤲",
        "form": "noun",
        "plural": "responsibilities",
        "subtext": "take responsibility, a sense of responsibility",
        "definitions": [
            {
                "text": "A duty to take care of someone or something.",
                "examples": [
                    "Parents have a responsibility for their children.",
                    "He has a lot of responsibility at work."
                ]
            }
        ]
    },
    {
        "word": "expectation",
        "level": "intermediate",
        "theme": "family_dynamics_B1",
        "emoji": "💭",
        "form": "noun",
        "plural": "expectations",
        "subtext": "high expectations, meet expectations",
        "definitions": [
            {
                "text": "A belief about what will happen or should happen.",
                "examples": [
                    "She has high expectations of her partner.",
                    "The results exceeded our expectations."
                ]
            }
        ]
    },
    {
        "word": "boundary",
        "level": "intermediate",
        "theme": "family_dynamics_B1",
        "emoji": "🚧",
        "form": "noun",
        "plural": "boundaries",
        "subtext": "set boundaries, personal boundaries",
        "definitions": [
            {
                "text": "A limit on what you are willing to accept in a relationship.",
                "examples": [
                    "It is healthy to set clear boundaries.",
                    "The river forms the boundary between the two countries."
                ]
            }
        ]
    },
    {
        "word": "divorce",
        "level": "intermediate",
        "theme": "family_dynamics_B1",
        "emoji": "💔",
        "form": "noun",
        "plural": "divorces",
        "subtext": "get a divorce, divorce rate",
        "opposite": "marriage",
        "oppositeEmoji": "💍",
        "definitions": [
            {
                "text": "The legal ending of a marriage.",
                "examples": [
                    "The divorce rate has increased in recent decades.",
                    "They are getting a divorce."
                ]
            }
        ]
    },
    {
        "word": "equality",
        "level": "intermediate",
        "theme": "equality_rights_B1",
        "emoji": "⚖️",
        "form": "noun",
        "plural": null,
        "subtext": "gender equality, racial equality",
        "opposite": "inequality",
        "definitions": [
            {
                "text": "The state of being equal in rights and opportunities.",
                "examples": [
                    "They fight for gender equality at work.",
                    "Equality of opportunity is a key goal."
                ]
            }
        ]
    },
    {
        "word": "freedom",
        "level": "intermediate",
        "theme": "equality_rights_B1",
        "emoji": "🗽",
        "form": "noun",
        "plural": "freedoms",
        "subtext": "freedom of speech, individual freedom",
        "opposite": "slavery",
        "definitions": [
            {
                "text": "The right to act and think without restriction.",
                "examples": [
                    "Freedom of speech is very important.",
                    "They are fighting for their freedom."
                ]
            }
        ]
    },
    {
        "word": "inequality",
        "level": "intermediate",
        "theme": "equality_rights_B1",
        "emoji": "🚫⚖️",
        "form": "noun",
        "plural": "inequalities",
        "subtext": "income inequality, social inequality",
        "opposite": "equality",
        "definitions": [
            {
                "text": "An unfair situation in which some people have more than others.",
                "examples": [
                    "Income inequality is growing in many countries.",
                    "We must address the inequality in our schools."
                ]
            }
        ]
    },
    {
        "word": "volunteer",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🙋",
        "form": "noun",
        "plural": "volunteers",
        "subtext": "volunteer work, unpaid work",
        "definitions": [
            {
                "text": "A person who offers to do something without being paid.",
                "examples": [
                    "He is a volunteer at the hospital.",
                    "Many volunteers helped clean up the park."
                ]
            }
        ]
    },
    {
        "word": "community",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🏘️",
        "form": "noun",
        "plural": "communities",
        "subtext": "local community, sense of community",
        "definitions": [
            {
                "text": "A group of people sharing a common location, identity or interest.",
                "examples": [
                    "He is very active in his local community.",
                    "The online community is very supportive."
                ]
            }
        ]
    },
    {
        "word": "generation",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "👪",
        "form": "noun",
        "plural": "generations",
        "subtext": "future generations, gap between generations",
        "definitions": [
            {
                "text": "All the people of a similar age in a society.",
                "examples": [
                    "Each generation faces different challenges.",
                    "My generation grew up with the internet."
                ]
            }
        ]
    },
    {
        "word": "climate change",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "🌍🌡️",
        "form": "noun phrase",
        "plural": null,
        "subtext": "global warming, environmental impact",
        "definitions": [
            {
                "text": "Long-term changes in global temperatures and weather patterns.",
                "examples": [
                    "Climate change is the biggest challenge of our time.",
                    "We must take action to combat climate change."
                ]
            }
        ]
    },
    {
        "word": "renewable energy",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "☀️💨",
        "form": "noun phrase",
        "plural": null,
        "subtext": "solar power, wind energy",
        "opposite": "fossil fuels",
        "definitions": [
            {
                "text": "Energy from natural sources that are not used up, such as wind or solar.",
                "examples": [
                    "The company switched to renewable energy.",
                    "Renewable energy is becoming cheaper."
                ]
            }
        ]
    },
    {
        "word": "carbon footprint",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "👣",
        "form": "noun phrase",
        "plural": "carbon footprints",
        "subtext": "reduce carbon footprint, environmental impact",
        "definitions": [
            {
                "text": "The total amount of greenhouse gases produced by a person's activities.",
                "examples": [
                    "Flying increases your carbon footprint.",
                    "How can I reduce my carbon footprint?"
                ]
            }
        ]
    },
    {
        "word": "waste",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "🗑️",
        "form": "noun",
        "plural": null,
        "subtext": "food waste, zero waste, waste of time",
        "definitions": [
            {
                "text": "Material that is no longer needed and thrown away.",
                "examples": [
                    "We need to reduce food waste.",
                    "The factory produces a lot of chemical waste."
                ]
            }
        ]
    },
    {
        "word": "however",
        "level": "intermediate",
        "theme": "discourse_markers_B1",
        "emoji": "🤔",
        "form": "adverb",
        "subtext": "nevertheless, on the other hand",
        "definitions": [
            {
                "text": "Used to introduce a contrast or opposite idea.",
                "examples": [
                    "I like the city. However, it is very expensive.",
                    "The hotel was beautiful. However, the service was poor."
                ]
            }
        ]
    },
    {
        "word": "although",
        "level": "intermediate",
        "theme": "discourse_markers_B1",
        "emoji": "🔄",
        "form": "conjunction",
        "subtext": "even though, despite the fact",
        "definitions": [
            {
                "text": "In spite of the fact that; even though.",
                "examples": [
                    "Although she is tired, she goes to the gym.",
                    "Although it was raining, we went for a walk."
                ]
            }
        ]
    },
    {
        "word": "on the other hand",
        "level": "intermediate",
        "theme": "discourse_markers_B1",
        "emoji": "⚖️",
        "form": "phrase",
        "subtext": "",
        "synonyms": ["alternatively", "conversely"],
        "definitions": [
            {
                "text": "Used to introduce a contrasting point.",
                "examples": [
                    "City life is exciting. On the other hand, it is stressful.",
                    "Laptops are portable. On the other hand, they are less powerful."
                ]
            }
        ]
    },
    {
        "word": "in my opinion",
        "level": "intermediate",
        "theme": "expressing_opinion_B1",
        "emoji": "🗣️",
        "form": "phrase",
        "subtext": "from my perspective, I think",
        "definitions": [
            {
                "text": "Used to introduce your personal view.",
                "examples": [
                    "In my opinion, remote work is more productive.",
                    "In my opinion, the movie was too long."
                ]
            }
        ]
    },
    {
        "word": "as a result",
        "level": "intermediate",
        "theme": "discourse_markers_B1",
        "emoji": "🔚",
        "form": "phrase",
        "subtext": "",
        "synonyms": ["consequently", "therefore"],
        "definitions": [
            {
                "text": "Because of this; consequently.",
                "examples": [
                    "He worked hard. As a result, he got a promotion.",
                    "It rained heavily. As a result, the match was cancelled."
                ]
            }
        ]
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
