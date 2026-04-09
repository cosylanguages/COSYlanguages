(function() {
    const data = [
    {
        "word": "engineer",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "👷",
        "form": "noun",
        "plural": "engineers",
        "transcription": "ˌɛndʒɪˈnɪə",
        "countability": "countable",
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
        "transcription": "ˈpaɪlət",
        "countability": "countable",
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
        "transcription": "ˈsuːʃi",
        "countability": "uncountable",
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
        "transcription": "ˈpænkeɪk",
        "countability": "countable",
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
        "transcription": "ˈkærət",
        "countability": "countable",
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
        "transcription": "ˈmɪlkʃeɪk",
        "countability": "countable",
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
        "plural": "libraries",
        "transcription": "ˈlaɪbrəri",
        "countability": "countable"
    },
    {
        "word": "museum",
        "level": "intermediate",
        "theme": "neighbourhood_local_A2",
        "emoji": "🏛️",
        "form": "noun",
        "plural": "museums",
        "transcription": "mjuˈziːəm",
        "countability": "countable"
    },
    {
        "word": "airport",
        "level": "intermediate",
        "theme": "travel_cultural_B1",
        "emoji": "✈️",
        "form": "noun",
        "plural": "airports",
        "transcription": "ˈeəpɔːt",
        "countability": "countable",
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
        "plural": "sweaters",
        "transcription": "ˈswɛtə",
        "countability": "countable"
    },
    {
        "word": "scarf",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🧣",
        "form": "noun",
        "plural": "scarves",
        "transcription": "skɑːf",
        "countability": "countable"
    },
    {
        "word": "wardrobe",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "👗",
        "form": "noun",
        "plural": "wardrobes",
        "transcription": "ˈwɔːdrəʊb",
        "countability": "countable"
    },
    {
        "word": "shelf",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "📚",
        "form": "noun",
        "plural": "shelves",
        "transcription": "ʃɛlf",
        "countability": "countable"
    },
    {
        "word": "mirror",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🪞",
        "form": "noun",
        "plural": "mirrors",
        "transcription": "ˈmɪrə",
        "countability": "countable"
    },
    {
        "word": "umbrella",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "☂️",
        "form": "noun",
        "plural": "umbrellas",
        "transcription": "ʌmˈbrɛlə",
        "countability": "countable"
    },
    {
        "word": "laptop",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "💻",
        "form": "noun",
        "plural": "laptops",
        "transcription": "ˈlæptɒp",
        "countability": "countable"
    },
    {
        "word": "elephant",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🐘",
        "form": "noun",
        "plural": "elephants",
        "transcription": "ˈɛlɪfənt",
        "countability": "countable"
    },
    {
        "word": "monkey",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🐒",
        "form": "noun",
        "plural": "monkeys",
        "transcription": "ˈmʌŋki",
        "countability": "countable"
    },
    {
        "word": "software developer",
        "level": "intermediate",
        "theme": "career_development_B1",
        "explanation": "A software developer creates code, while the others are physical structures or objects.",
        "emoji": "💻",
        "form": "noun",
        "plural": "software developers",
        "transcription": "ˈsɒftweə dɪˈvɛləpə",
        "countability": "countable",
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
        "transcription": "ˈɑːkɪtɛkt",
        "countability": "countable",
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
        "plural": "algorithms",
        "transcription": "ˈælɡərɪðəm",
        "countability": "countable"
    },
    {
        "word": "evolution",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🐒",
        "form": "noun",
        "plural": "evolutions",
        "transcription": "ˌiːvəˈluːʃn",
        "countability": "uncountable"
    },
    {
        "word": "democracy",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🗳️",
        "form": "noun",
        "plural": "democracies",
        "transcription": "dɪˈmɒkrəsi",
        "countability": "countable"
    },
    {
        "word": "ecosystem",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "🌲",
        "form": "noun",
        "plural": "ecosystems",
        "transcription": "ˈiːkəʊˌsɪstəm",
        "countability": "countable"
    },
    {
        "word": "colleague",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "👥",
        "form": "noun",
        "plural": "colleagues",
        "transcription": "ˈkɒliːɡ",
        "countability": "countable"
    },
    {
        "word": "remote work",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "💻",
        "form": "noun phrase",
        "plural": null,
        "transcription": "rɪˈməʊt wɜːk",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Working from a location other than the office, usually home.",
                "examples": [
                    "Remote work has become normal for many professionals."
                ]
            }
        ]
    },
    {
        "word": "global warming",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "🌡️",
        "form": "noun phrase",
        "plural": null,
        "transcription": "ˈɡləʊbl ˈwɔːmɪŋ",
        "countability": "uncountable"
    },
    {
        "word": "commuter",
        "level": "intermediate",
        "theme": "travel_cultural_B1",
        "emoji": "🚆",
        "form": "noun",
        "plural": "commuters",
        "transcription": "kəˈmjuːtə",
        "countability": "countable",
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
        "transcription": "tʃaɪld",
        "countability": "countable",
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
        "plural": "leaves",
        "transcription": "liːf",
        "countability": "countable"
    },
    {
        "word": "tooth",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "numberPlural": "32 tooth",
        "answer": "thirty-two teeth",
        "emoji": "🦷",
        "form": "noun",
        "plural": "teeth",
        "transcription": "tuːθ",
        "countability": "countable"
    },
    {
        "word": "career",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "📈",
        "form": "noun",
        "plural": "careers",
        "transcription": "kəˈrɪə",
        "countability": "countable",
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
        "transcription": "rɪˈdʌndənsi",
        "countability": "countable",
        "subtext": "voluntary redundancy, redundancy pay",
        "definitions": [
            {
                "text": "Losing your job because the employer no longer needs the role.",
                "examples": [
                    "He received redundancy pay last year.",
                    "Thousands of workers face redundancy.",
                    "He received a redundancy notice last month."
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
        "transcription": "ˈflɛksəbl ˈwɜːkɪŋ",
        "countability": "uncountable",
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
        "transcription": "ˈnɛtwɜːkɪŋ",
        "countability": "uncountable",
        "subtext": "professional networking, networking event",
        "definitions": [
            {
                "text": "Building professional relationships to help your career.",
                "examples": [
                    "Networking is essential in this industry.",
                    "I met him at a networking event.",
                    "Networking helped her find her current job."
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
        "transcription": "ˈwɜːkləʊd",
        "countability": "countable",
        "subtext": "heavy workload, manage workload",
        "definitions": [
            {
                "text": "The amount of work a person has to do.",
                "examples": [
                    "Her workload has increased a lot this month.",
                    "I need to reduce my workload.",
                    "Her workload has doubled since the merger."
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
        "transcription": "ˈtiːmwɜːk",
        "countability": "uncountable",
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
        "transcription": "æmˈbɪʃn",
        "countability": "countable",
        "subtext": "high ambition, professional ambition",
        "definitions": [
            {
                "text": "A strong desire to achieve something.",
                "examples": [
                    "His ambition is to become a manager.",
                    "She has the ambition to start her own business.",
                    "Her ambition is to run her own company."
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
        "transcription": "skɪl",
        "countability": "countable",
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
        "transcription": "məˈtɜːnɪti liːv",
        "countability": "uncountable",
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
        "transcription": "ˈpɛnʃn",
        "countability": "countable",
        "subtext": "pension plan, retirement fund",
        "definitions": [
            {
                "text": "Money paid to someone regularly after they retire.",
                "examples": [
                    "He contributes to his pension every month.",
                    "The state pension is not enough to live on.",
                    "She contributes ten percent of her salary to her pension."
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
        "transcription": "ɪnˈvɛstmənt",
        "countability": "countable",
        "subtext": "long-term investment, return on investment",
        "definitions": [
            {
                "text": "Money put into something in order to get a profit in the future.",
                "examples": [
                    "Property is a popular investment.",
                    "He made a risky investment in stocks.",
                    "Property is considered a safe long-term investment."
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
        "transcription": "ˈɪntrəst reɪt",
        "countability": "countable",
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
        "transcription": "ˈɪnkʌm",
        "countability": "countable",
        "subtext": "annual income, disposable income",
        "opposite": "expense",
        "oppositeEmoji": "💸",
        "definitions": [
            {
                "text": "Money received from work or other sources.",
                "examples": [
                    "Their household income is comfortable.",
                    "He has no steady income.",
                    "Their combined household income is comfortable."
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
        "transcription": "ɪnˈʃʊərəns",
        "countability": "uncountable",
        "subtext": "health insurance, car insurance",
        "definitions": [
            {
                "text": "An agreement where you pay regularly to be protected against loss or damage.",
                "examples": [
                    "Health insurance is expensive in some countries.",
                    "Do you have travel insurance?",
                    "Health insurance costs have risen significantly."
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
        "transcription": "tæks",
        "countability": "countable",
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
        "transcription": "ˌwɛlˈbiːɪŋ",
        "countability": "uncountable",
        "subtext": "mental wellbeing, emotional wellbeing",
        "definitions": [
            {
                "text": "A general feeling of being comfortable, healthy and happy.",
                "examples": [
                    "Exercise is important for mental wellbeing.",
                    "The company cares about employee wellbeing.",
                    "The company has introduced wellbeing initiatives."
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
        "transcription": "ˈmɛntl hɛlθ",
        "countability": "uncountable",
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
        "transcription": "ˈbɜːnaʊt",
        "countability": "uncountable",
        "subtext": "emotional exhaustion, work stress",
        "definitions": [
            {
                "text": "A state of exhaustion caused by too much stress over a long time.",
                "examples": [
                    "She suffered from burnout after working without a break.",
                    "Burnout is common in high-pressure jobs.",
                    "She took sick leave after suffering from burnout."
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
        "transcription": "prɪˈvɛnʃn",
        "countability": "uncountable",
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
        "transcription": "ˈsɪmptəmz",
        "countability": "countable",
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
        "transcription": "ˈθɛrəpi",
        "countability": "countable",
        "subtext": "speech therapy, cognitive behavioral therapy",
        "definitions": [
            {
                "text": "Treatment for mental or physical problems, often through talking.",
                "examples": [
                    "He goes to therapy once a week.",
                    "Therapy helped her cope with anxiety.",
                    "She started therapy after losing her job."
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
        "transcription": "trʌst",
        "countability": "uncountable",
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
        "transcription": "ˈkɒnflɪkt",
        "countability": "countable",
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
        "transcription": "rɪˌspɒnsəˈbɪlɪti",
        "countability": "countable",
        "subtext": "take responsibility, a sense of responsibility",
        "definitions": [
            {
                "text": "A duty to take care of someone or something.",
                "examples": [
                    "Parents have a responsibility for their children.",
                    "He has a lot of responsibility at work.",
                    "We all have a responsibility to the environment."
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
        "transcription": "ˌɛkspɛkˈteɪʃn",
        "countability": "countable",
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
        "transcription": "ˈbaʊndəri",
        "countability": "countable",
        "subtext": "set boundaries, personal boundaries",
        "definitions": [
            {
                "text": "A limit on what you are willing to accept in a relationship.",
                "examples": [
                    "It is healthy to set clear boundaries.",
                    "The river forms the boundary between the two countries.",
                    "Setting boundaries at work is very important."
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
        "transcription": "dɪˈvɔːs",
        "countability": "countable",
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
        "transcription": "iˈkwɒlɪti",
        "countability": "uncountable",
        "subtext": "gender equality, racial equality",
        "opposite": "inequality",
        "definitions": [
            {
                "text": "The state of being equal in rights and opportunities.",
                "examples": [
                    "They fight for gender equality at work.",
                    "Equality of opportunity is a key goal.",
                    "She campaigns for equality in the workplace."
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
        "transcription": "ˈfriːdəm",
        "countability": "uncountable",
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
        "transcription": "ˌɪnɪˈkwɒlɪti",
        "countability": "uncountable",
        "subtext": "income inequality, social inequality",
        "opposite": "equality",
        "definitions": [
            {
                "text": "An unfair situation in which some people have more than others.",
                "examples": [
                    "Income inequality is growing in many countries.",
                    "We must address the inequality in our schools.",
                    "Income inequality has grown in recent decades."
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
        "transcription": "ˌvɒlənˈtɪə",
        "countability": "countable",
        "subtext": "volunteer work, unpaid work",
        "definitions": [
            {
                "text": "A person who offers to do something without being paid.",
                "examples": [
                    "He is a volunteer at the hospital.",
                    "Many volunteers helped clean up the park.",
                    "She volunteers at the local food bank every Saturday."
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
        "transcription": "kəˈmjuːnɪti",
        "countability": "countable",
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
        "transcription": "ˌdʒɛnəˈreɪʃn",
        "countability": "countable",
        "subtext": "future generations, gap between generations",
        "definitions": [
            {
                "text": "All the people of a similar age in a society.",
                "examples": [
                    "Each generation faces different challenges.",
                    "My generation grew up with the internet.",
                    "Each generation faces different economic pressures."
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
        "transcription": "ˈklaɪmət tʃeɪndʒ",
        "countability": "uncountable",
        "subtext": "global warming, environmental impact",
        "definitions": [
            {
                "text": "Long-term changes in global temperatures and weather patterns.",
                "examples": [
                    "Climate change is the biggest challenge of our time.",
                    "We must take action to combat climate change.",
                    "Climate change affects food prices worldwide."
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
        "transcription": "rɪˈnjuːəbl ˈɛnədʒi",
        "countability": "uncountable",
        "subtext": "solar power, wind energy",
        "opposite": "fossil fuels",
        "definitions": [
            {
                "text": "Energy from natural sources that are not used up, such as wind or solar.",
                "examples": [
                    "The company switched to renewable energy.",
                    "Renewable energy is becoming cheaper.",
                    "They installed solar panels to use renewable energy."
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
        "transcription": "ˈkɑːbən ˈfʊtprɪnt",
        "countability": "countable",
        "subtext": "reduce carbon footprint, environmental impact",
        "definitions": [
            {
                "text": "The total amount of greenhouse gases produced by a person's activities.",
                "examples": [
                    "Flying increases your carbon footprint.",
                    "How can I reduce my carbon footprint?",
                    "Flying significantly increases your carbon footprint."
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
        "transcription": "weɪst",
        "countability": "uncountable",
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
        "transcription": "haʊˈɛvə",
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
        "transcription": "ɔːlˈðəʊ",
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
        "transcription": "ɒn ði ˈʌðə hænd",
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
        "transcription": "ɪn maɪ əˈpɪnjən",
        "subtext": "from my perspective, I think",
        "definitions": [
            {
                "text": "Used to introduce your personal view.",
                "examples": [
                    "In my opinion, remote work is more productive.",
                    "In my opinion, the movie was too long.",
                    "In my opinion, working from home is more productive."
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
        "transcription": "æz ə rɪˈzʌlt",
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
    },
    {
        "word": "promotion",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "📈",
        "form": "noun",
        "plural": "promotions",
        "transcription": "prəˈməʊʃn",
        "countability": "countable",
        "definitions": [
            {
                "text": "Advancement to a higher position at work.",
                "examples": [
                    "She was passed over for promotion twice."
                ]
            }
        ]
    },
    {
        "word": "skill set",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "🛠️",
        "form": "noun",
        "plural": "skill sets",
        "transcription": "skɪl sɛt",
        "countability": "countable",
        "definitions": [
            {
                "text": "The range of abilities and experience a person has.",
                "examples": [
                    "Her skill set makes her very employable."
                ]
            }
        ]
    },
    {
        "word": "appraisal",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "📋",
        "form": "noun",
        "plural": "appraisals",
        "transcription": "əˈpreɪzl",
        "countability": "countable",
        "definitions": [
            {
                "text": "A formal assessment of an employee's performance.",
                "examples": [
                    "Her annual appraisal is next week."
                ]
            }
        ]
    },
    {
        "word": "workplace",
        "level": "intermediate",
        "theme": "workplace_communication_B1",
        "emoji": "🏢",
        "form": "noun",
        "plural": "workplaces",
        "transcription": "ˈwɜːkpleɪs",
        "countability": "countable",
        "definitions": [
            {
                "text": "The physical environment where people work.",
                "examples": [
                    "The new workplace is much more modern."
                ]
            }
        ]
    },
    {
        "word": "leadership",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "👑",
        "form": "noun",
        "plural": null,
        "transcription": "ˈliːdəʃɪp",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "The ability to guide, motivate and direct other people.",
                "examples": [
                    "Strong leadership is essential in a crisis."
                ]
            }
        ]
    },
    {
        "word": "flexible hours",
        "level": "intermediate",
        "theme": "work_life_balance_B1",
        "emoji": "⏰",
        "form": "noun phrase",
        "plural": null,
        "transcription": "ˈflɛksəbl ˈaʊəz",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "A work arrangement allowing employees to choose when they start and finish.",
                "examples": [
                    "Flexible hours make the job much more attractive."
                ]
            }
        ]
    },
    {
        "word": "annual leave",
        "level": "intermediate",
        "theme": "work_life_balance_B1",
        "emoji": "🏖️",
        "form": "noun phrase",
        "plural": null,
        "transcription": "ˈænjuəl liːv",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "The paid days off work that employees are entitled to each year.",
                "examples": [
                    "She has ten days of annual leave remaining."
                ]
            }
        ]
    },
    {
        "word": "anxiety",
        "level": "intermediate",
        "theme": "stress_anxiety_B1",
        "emoji": "😟",
        "form": "noun",
        "plural": null,
        "transcription": "æŋˈzaɪəti",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "A feeling of worry, nervousness and unease about uncertain outcomes.",
                "examples": [
                    "He suffers from anxiety before presentations."
                ]
            }
        ]
    },
    {
        "word": "depression",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "emoji": "😔",
        "form": "noun",
        "plural": null,
        "transcription": "dɪˈprɛʃn",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "A medical condition causing persistent sadness and lack of energy.",
                "examples": [
                    "Depression affects millions of working adults."
                ]
            }
        ]
    },
    {
        "word": "resilience",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "emoji": "🌱",
        "form": "noun",
        "plural": null,
        "transcription": "rɪˈzɪliəns",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "The ability to recover quickly from difficult situations.",
                "examples": [
                    "Resilience is one of the most valuable qualities in adult life."
                ]
            }
        ]
    },
    {
        "word": "mindfulness",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "emoji": "🧘",
        "form": "noun",
        "plural": null,
        "transcription": "ˈmaɪndflnəs",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "The practice of focusing on the present moment to reduce stress.",
                "examples": [
                    "He practises mindfulness for ten minutes every morning."
                ]
            }
        ]
    },
    {
        "word": "self-care",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "emoji": "🛁",
        "form": "noun",
        "plural": null,
        "transcription": "sɛlf ˈkeə",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Activities done deliberately to maintain physical or mental health.",
                "examples": [
                    "Self-care is not a luxury — it is a necessity."
                ]
            }
        ]
    },
    {
        "word": "tax return",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "emoji": "📄",
        "form": "noun",
        "plural": "tax returns",
        "transcription": "tæks rɪˈtɜːn",
        "countability": "countable",
        "definitions": [
            {
                "text": "A document filed with the government showing income and calculating tax owed.",
                "examples": [
                    "He needs to submit his tax return by January."
                ]
            }
        ]
    },
    {
        "word": "expenditure",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "emoji": "💸",
        "form": "noun",
        "plural": "expenditures",
        "transcription": "ɪkˈspɛndɪtʃə",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "The total amount of money spent by a person or organisation.",
                "examples": [
                    "They tracked their monthly expenditure carefully."
                ]
            }
        ]
    },
    {
        "word": "credit",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "emoji": "💳",
        "form": "noun",
        "plural": null,
        "transcription": "ˈkrɛdɪt",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "An arrangement allowing you to borrow money or buy on delayed payment.",
                "examples": [
                    "He used credit to buy the car."
                ]
            }
        ]
    },
    {
        "word": "mortgage",
        "level": "intermediate",
        "theme": "buying_property_B1",
        "emoji": "🏠",
        "form": "noun",
        "plural": "mortgages",
        "transcription": "ˈmɔːɡɪdʒ",
        "countability": "countable",
        "definitions": [
            {
                "text": "A bank loan secured against a property, repaid over many years.",
                "examples": [
                    "The mortgage is spread over twenty-five years."
                ]
            }
        ]
    },
    {
        "word": "property",
        "level": "intermediate",
        "theme": "buying_property_B1",
        "emoji": "🏡",
        "form": "noun",
        "plural": "properties",
        "transcription": "ˈprɒpəti",
        "countability": "countable",
        "definitions": [
            {
                "text": "A building and the land it stands on; also a legal right to own something.",
                "examples": [
                    "Property prices have risen sharply in this city."
                ]
            }
        ]
    },
    {
        "word": "equity",
        "level": "intermediate",
        "theme": "buying_property_B1",
        "emoji": "📈",
        "form": "noun",
        "plural": null,
        "transcription": "ˈɛkwɪti",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "The value of a property minus the amount still owed on the mortgage.",
                "examples": [
                    "They have built up significant equity in their home."
                ]
            }
        ]
    },
    {
        "word": "renovation",
        "level": "intermediate",
        "theme": "buying_property_B1",
        "emoji": "🔨",
        "form": "noun",
        "plural": "renovations",
        "transcription": "ˌrɛnəˈveɪʃn",
        "countability": "countable",
        "definitions": [
            {
                "text": "The process of improving a building by repairing or updating it.",
                "examples": [
                    "They spent a year on renovations before moving in."
                ]
            }
        ]
    },
    {
        "word": "survey",
        "level": "intermediate",
        "theme": "buying_property_B1",
        "emoji": "📝",
        "form": "noun",
        "plural": "surveys",
        "transcription": "ˈsɜːveɪ",
        "countability": "countable",
        "definitions": [
            {
                "text": "A professional inspection of a property's condition before purchase.",
                "examples": [
                    "The survey revealed serious problems with the roof."
                ]
            }
        ]
    },
    {
        "word": "paternity leave",
        "level": "intermediate",
        "theme": "work_life_balance_B1",
        "emoji": "🍼",
        "form": "noun phrase",
        "plural": null,
        "transcription": "pəˈtɜːnɪti liːv",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Paid time off work for a father after the birth of a child.",
                "examples": [
                    "He took two weeks of paternity leave."
                ]
            }
        ]
    },
    {
        "word": "childcare",
        "level": "intermediate",
        "theme": "parenting_childcare_B1",
        "emoji": "🧸",
        "form": "noun",
        "plural": null,
        "transcription": "ˈtʃaɪldkeə",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "The care of young children by someone other than their parents.",
                "examples": [
                    "Childcare costs are a major expense for families."
                ]
            }
        ]
    },
    {
        "word": "upbringing",
        "level": "intermediate",
        "theme": "parenting_childcare_B1",
        "emoji": "👨‍👩‍👧",
        "form": "noun",
        "plural": "upbringings",
        "transcription": "ˈʌpˌbrɪŋɪŋ",
        "countability": "countable",
        "definitions": [
            {
                "text": "The way a child is raised and taught values during childhood.",
                "examples": [
                    "Her upbringing influenced her approach to money."
                ]
            }
        ]
    },
    {
        "word": "charity",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🎗️",
        "form": "noun",
        "plural": "charities",
        "transcription": "ˈtʃærɪti",
        "countability": "countable",
        "definitions": [
            {
                "text": "An organisation that collects money to help people in need.",
                "examples": [
                    "He donates to several charities each year."
                ]
            }
        ]
    },
    {
        "word": "emissions",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "💨",
        "form": "noun",
        "plural": "emissions",
        "transcription": "iˈmɪʃnz",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Gases or other substances released into the atmosphere.",
                "examples": [
                    "The government wants to reduce carbon emissions."
                ]
            }
        ]
    },
    {
        "word": "point of view",
        "level": "intermediate",
        "theme": "expressing_opinion_B1",
        "emoji": "👁️",
        "form": "noun phrase",
        "plural": "points of view",
        "transcription": "pɔɪnt əv vjuː",
        "countability": "countable",
        "definitions": [
            {
                "text": "A particular way of thinking about something; an opinion.",
                "examples": [
                    "From my point of view, the policy is unfair."
                ]
            }
        ]
    },
    {
        "word": "evidence",
        "level": "intermediate",
        "theme": "structured_argument_B1",
        "emoji": "🔍",
        "form": "noun",
        "plural": null,
        "transcription": "ˈɛvɪdəns",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Facts or information used to support a claim.",
                "examples": [
                    "There is strong evidence that exercise reduces stress."
                ]
            }
        ]
    },
    {
        "word": "opinion",
        "level": "intermediate",
        "theme": "expressing_opinion_B1",
        "emoji": "🗣️",
        "form": "noun",
        "plural": "opinions",
        "transcription": "əˈpɪnjən",
        "countability": "countable",
        "definitions": [
            {
                "text": "A personal view or judgement not necessarily based on facts.",
                "examples": [
                    "In my opinion, working from home is more productive."
                ]
            }
        ]
    },
    {
        "word": "against",
        "level": "intermediate",
        "theme": "expressing_opinion_B1",
        "emoji": "🚫",
        "form": "preposition",
        "transcription": "əˈɡɛnst",
        "definitions": [
            {
                "text": "Opposed to something.",
                "examples": [
                    "He is strongly against the new policy."
                ]
            }
        ]
    },
    {
        "word": "in favour of",
        "level": "intermediate",
        "theme": "expressing_opinion_B1",
        "emoji": "✅",
        "form": "phrase",
        "transcription": "ɪn ˈfeɪvər əv",
        "definitions": [
            {
                "text": "Supporting or agreeing with something.",
                "examples": [
                    "Most employees are in favour of flexible working."
                ]
            }
        ]
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
