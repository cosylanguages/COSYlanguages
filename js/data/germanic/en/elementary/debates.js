(function() {
    const data = [
    {
        "id": "en_elementary_work_001",
        "word": "A high salary vs a short commute — which matters more in a job?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "A high salary vs a short commute — which matters more in a job?",
                "examples": []
            }
        ],
        "sideA": "High salary",
        "sideB": "Short commute",
        "ideasA": [
            "Increase financial security",
            "Afford higher quality products"
        ],
        "ideasB": [
            "Reduce daily travel stress",
            "More time for personal life"
        ]
    },
    {
        "id": "en_elementary_work_002",
        "word": "Changing jobs often vs staying in the same company — which is better for your career?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Changing jobs often vs staying in the same company — which is better for your career?",
                "examples": []
            }
        ],
        "sideA": "Changing jobs",
        "sideB": "Staying",
        "ideasA": [
            "Gain diverse work experience",
            "Negotiate a better salary"
        ],
        "ideasB": [
            "Build long-term professional trust",
            "Opportunities for internal promotion"
        ]
    },
    {
        "id": "en_elementary_work_003",
        "word": "Working overtime vs leaving on time every day — which is the better habit?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Working overtime vs leaving on time every day — which is the better habit?",
                "examples": []
            }
        ],
        "sideA": "Overtime",
        "sideB": "On time",
        "ideasA": [
            "Complete urgent projects faster",
            "Demonstrate strong commitment"
        ],
        "ideasB": [
            "Prevent professional burnout",
            "Maintain a healthy work-life balance"
        ]
    },
    {
        "id": "en_elementary_work_004",
        "word": "A boss who is strict vs a boss who is relaxed — which is better to work for?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "A boss who is strict vs a boss who is relaxed — which is better to work for?",
                "examples": []
            }
        ],
        "sideA": "Strict boss",
        "sideB": "Relaxed boss",
        "ideasA": [
            "Clear expectations and rules",
            "Higher professional standards"
        ],
        "ideasB": [
            "Encourages creative thinking",
            "Lower levels of workplace pressure"
        ]
    },
    {
        "id": "en_elementary_work_005",
        "word": "Working in a big company vs a small company — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Working in a big company vs a small company — which is better?",
                "examples": []
            }
        ],
        "sideA": "Big company",
        "sideB": "Small company",
        "ideasA": [
            "Structured career paths",
            "Better employee benefits"
        ],
        "ideasB": [
            "Friendly and close atmosphere",
            "More varied responsibilities"
        ]
    },
    {
        "id": "en_elementary_work_006",
        "word": "Getting a promotion vs getting more free time — which would you choose?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Getting a promotion vs getting more free time — which would you choose?",
                "examples": []
            }
        ],
        "sideA": "Promotion",
        "sideB": "Free time",
        "ideasA": [
            "Professional growth and status",
            "Increased financial responsibility"
        ],
        "ideasB": [
            "Focus on family activities",
            "Develop personal hobbies"
        ]
    },
    {
        "id": "en_elementary_places_001",
        "word": "Buying a house vs renting for life — which is the smarter financial decision?",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Buying a house vs renting for life — which is the smarter financial decision?",
                "examples": []
            }
        ],
        "sideA": "Buying",
        "sideB": "Renting",
        "ideasA": [
            "Stable long-term investment",
            "Freedom to renovate property"
        ],
        "ideasB": [
            "Greater flexibility to move",
            "No responsibility for repairs"
        ]
    },
    {
        "id": "en_elementary_travel_001",
        "word": "Living in the city centre vs living in the suburbs — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Living in the city centre vs living in the suburbs — which is better?",
                "examples": []
            }
        ],
        "sideA": "City centre",
        "sideB": "Suburbs",
        "ideasA": [
            "Walking distance to shops",
            "Access to vibrant nightlife"
        ],
        "ideasB": [
            "Quieter and safer environment",
            "More space for families"
        ]
    },
    {
        "id": "en_elementary_places_002",
        "word": "Spending money on experiences vs on things — which makes you happier?",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Spending money on experiences vs on things — which makes you happier?",
                "examples": []
            }
        ],
        "sideA": "Experiences",
        "sideB": "Things",
        "ideasA": [
            "Create lasting memories",
            "Opportunities for personal growth"
        ],
        "ideasB": [
            "Practical daily use",
            "Long-lasting physical value"
        ]
    },
    {
        "id": "en_elementary_food_drink_001",
        "word": "Cooking every day vs meal prepping once a week — which is more practical?",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": "cooking",
        "form": "other",
        "definitions": [
            {
                "text": "Cooking every day vs meal prepping once a week — which is more practical?",
                "examples": []
            }
        ],
        "sideA": "Daily cooking",
        "sideB": "Meal prepping",
        "ideasA": [
            "Use fresh ingredients daily",
            "More variety in your diet"
        ],
        "ideasB": [
            "Save significant time",
            "Better kitchen organization"
        ]
    },
    {
        "id": "en_elementary_places_003",
        "word": "Having a cleaner vs doing your own housework — which is a better choice?",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Having a cleaner vs doing your own housework — which is a better choice?",
                "examples": []
            }
        ],
        "sideA": "Cleaner",
        "sideB": "Do it yourself",
        "ideasA": [
            "Save time and energy",
            "Professional cleaning quality"
        ],
        "ideasB": [
            "Save household money",
            "Maintain total control"
        ]
    },
    {
        "id": "en_elementary_people_001",
        "word": "Living with a partner vs living alone — which is better for adults?",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": "relationships",
        "form": "other",
        "definitions": [
            {
                "text": "Living with a partner vs living alone — which is better for adults?",
                "examples": []
            }
        ],
        "sideA": "With partner",
        "sideB": "Alone",
        "ideasA": [
            "Share household costs",
            "Constant emotional support"
        ],
        "ideasB": [
            "Total personal independence",
            "Peace and quiet"
        ]
    },
    {
        "id": "en_elementary_people_002",
        "word": "Having children early vs having children later in life — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Having children early vs having children later in life — which is better?",
                "examples": []
            }
        ],
        "sideA": "Early",
        "sideB": "Later",
        "ideasA": [
            "More energy for parenting",
            "Grow up with your children"
        ],
        "ideasB": [
            "Better financial stability",
            "More life experience to share"
        ]
    },
    {
        "id": "en_elementary_people_003",
        "word": "Close family relationships vs independence from family — which is more important as an adult?",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": "family",
        "form": "other",
        "definitions": [
            {
                "text": "Close family relationships vs independence from family — which is more important as an adult?",
                "examples": []
            }
        ],
        "sideA": "Close relationships",
        "sideB": "Independence",
        "ideasA": [
            "Strong emotional support",
            "Maintain family traditions"
        ],
        "ideasB": [
            "Personal freedom",
            "Make independent decisions"
        ]
    },
    {
        "id": "en_elementary_people_004",
        "word": "Meeting new people vs keeping old friendships — which is more valuable?",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": "relationships",
        "form": "other",
        "definitions": [
            {
                "text": "Meeting new people vs keeping old friendships — which is more valuable?",
                "examples": []
            }
        ],
        "sideA": "New people",
        "sideB": "Old friends",
        "ideasA": [
            "Learn new perspectives",
            "Expand professional network"
        ],
        "ideasB": [
            "Shared personal history",
            "Higher level of trust"
        ]
    },
    {
        "id": "en_elementary_work_007",
        "word": "Socialising after work vs going straight home — which is better for work relationships?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Socialising after work vs going straight home — which is better for work relationships?",
                "examples": []
            }
        ],
        "sideA": "Socialising",
        "sideB": "Going home",
        "ideasA": [
            "Improve team collaboration",
            "Relaxed informal communication"
        ],
        "ideasB": [
            "Recover mental energy",
            "Quality time with family"
        ]
    },
    {
        "id": "en_elementary_body_001",
        "word": "Going to the gym vs exercising outdoors — which is better for adults?",
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Going to the gym vs exercising outdoors — which is better for adults?",
                "examples": []
            }
        ],
        "sideA": "Gym",
        "sideB": "Outdoors",
        "ideasA": [
            "Access to modern equipment",
            "Work with professional trainers"
        ],
        "ideasB": [
            "Enjoy fresh air",
            "No monthly membership fees"
        ]
    },
    {
        "id": "en_elementary_body_002",
        "word": "Strict diet vs eating everything in moderation — which is healthier?",
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Strict diet vs eating everything in moderation — which is healthier?",
                "examples": []
            }
        ],
        "sideA": "Strict diet",
        "sideB": "Moderation",
        "ideasA": [
            "Achieve faster results",
            "Develop strong discipline"
        ],
        "ideasB": [
            "Sustainable long-term balance",
            "Enjoy different types of food"
        ]
    },
    {
        "id": "en_elementary_body_003",
        "word": "Seeing a doctor early vs waiting to see if you get better — which is wiser?",
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Seeing a doctor early vs waiting to see if you get better — which is wiser?",
                "examples": []
            }
        ],
        "sideA": "Early",
        "sideB": "Waiting",
        "ideasA": [
            "Receive fast treatment",
            "Prevent serious problems"
        ],
        "ideasB": [
            "Allow natural recovery",
            "Avoid unnecessary medicine"
        ]
    },
    {
        "id": "en_elementary_body_004",
        "word": "Sleeping eight hours vs sleeping six but exercising — which is better for energy?",
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Sleeping eight hours vs sleeping six but exercising — which is better for energy?",
                "examples": []
            }
        ],
        "sideA": "8 hours",
        "sideB": "6 hours + exercise",
        "ideasA": [
            "Full physical recovery",
            "Improved daily mood"
        ],
        "ideasB": [
            "Higher physical fitness",
            "Keep the body active"
        ]
    },
    {
        "id": "en_elementary_body_005",
        "word": "Reducing stress through sport vs through relaxation — which works better?",
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Reducing stress through sport vs through relaxation — which works better?",
                "examples": []
            }
        ],
        "sideA": "Sport",
        "sideB": "Relaxation",
        "ideasA": [
            "Physical stress release",
            "Higher energy levels"
        ],
        "ideasB": [
            "Mental peace",
            "Calm the mind"
        ]
    },
    {
        "id": "en_elementary_technology_001",
        "word": "Smartphones vs face-to-face conversation — which do we use more, and is that a problem?",
        "lang": "en",
        "level": "elementary",
        "theme": "technology",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Smartphones vs face-to-face conversation — which do we use more, and is that a problem?",
                "examples": []
            }
        ],
        "sideA": "Smartphones",
        "sideB": "Face-to-face",
        "ideasA": [
            "Instant global access",
            "Stay constantly connected"
        ],
        "ideasB": [
            "Express real emotions",
            "Better personal focus"
        ]
    },
    {
        "id": "en_elementary_technology_002",
        "word": "Online banking vs going to the bank — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "technology",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Online banking vs going to the bank — which is better?",
                "examples": []
            }
        ],
        "sideA": "Online",
        "sideB": "Going to bank",
        "ideasA": [
            "Highly convenient",
            "Available 24/7"
        ],
        "ideasB": [
            "Personal expert advice",
            "Physical security"
        ]
    },
    {
        "id": "en_elementary_work_008",
        "word": "Working with paper vs working digitally — which is more efficient?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Working with paper vs working digitally — which is more efficient?",
                "examples": []
            }
        ],
        "sideA": "Paper",
        "sideB": "Digital",
        "ideasA": [
            "Better mental focus",
            "Reduce eye strain"
        ],
        "ideasB": [
            "Efficient digital storage",
            "Faster information search"
        ]
    },
    {
        "id": "en_elementary_work_009",
        "word": "Social media for networking vs meeting people in person — which is more useful professionally?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Social media for networking vs meeting people in person — which is more useful professionally?",
                "examples": []
            }
        ],
        "sideA": "Social media",
        "sideB": "In person",
        "ideasA": [
            "Reach global audiences",
            "Quick professional contact"
        ],
        "ideasB": [
            "Build stronger trust",
            "Make a personal impact"
        ]
    },
    {
        "id": "en_elementary_travel_002",
        "word": "Package holiday vs independent travel — which is better for adults?",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Package holiday vs independent travel — which is better for adults?",
                "examples": []
            }
        ],
        "sideA": "Package",
        "sideB": "Independent",
        "ideasA": [
            "Reduce planning stress",
            "Guaranteed safety standards"
        ],
        "ideasB": [
            "Authentic adventure",
            "Unique local experiences"
        ]
    },
    {
        "id": "en_elementary_travel_003",
        "word": "City break vs beach holiday — which is a better way to relax?",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "City break vs beach holiday — which is a better way to relax?",
                "examples": []
            }
        ],
        "sideA": "City break",
        "sideB": "Beach holiday",
        "ideasA": [
            "Interesting cultural visits",
            "Try local food"
        ],
        "ideasB": [
            "Relaxing ocean breeze",
            "Complete physical relaxation"
        ]
    },
    {
        "id": "en_elementary_travel_004",
        "word": "One long holiday a year vs several short breaks — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "One long holiday a year vs several short breaks — which is better?",
                "examples": []
            }
        ],
        "sideA": "One long",
        "sideB": "Several short",
        "ideasA": [
            "Deep mental rest",
            "Travel to distant places"
        ],
        "ideasB": [
            "Regular breaks from work",
            "Visit more destinations"
        ]
    },
    {
        "id": "en_elementary_travel_005",
        "word": "Travelling as a couple vs travelling alone — which is more enjoyable?",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Travelling as a couple vs travelling alone — which is more enjoyable?",
                "examples": []
            }
        ],
        "sideA": "As a couple",
        "sideB": "Alone",
        "ideasA": [
            "Share special memories",
            "Lower shared costs"
        ],
        "ideasB": [
            "Complete personal choice",
            "Meet more local people"
        ]
    },
    {
        "id": "en_elementary_people_005",
        "word": "Telling your partner about every small problem vs keeping things to yourself — which is healthier?",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": "relationships",
        "form": "other",
        "definitions": [
            {
                "text": "Telling your partner about every small problem vs keeping things to yourself — which is healthier?",
                "examples": []
            }
        ],
        "sideA": "Telling all",
        "sideB": "Keeping to self",
        "ideasA": [
            "Full emotional honesty",
            "Receive mutual support"
        ],
        "ideasB": [
            "Avoid unnecessary drama",
            "Internal mental peace"
        ]
    },
    {
        "id": "en_elementary_places_004",
        "word": "Checking your phone first thing in the morning vs waiting until after breakfast — which is a better habit?",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Checking your phone first thing in the morning vs waiting until after breakfast — which is a better habit?",
                "examples": []
            }
        ],
        "sideA": "First thing",
        "sideB": "After breakfast",
        "ideasA": [
            "Check urgent news",
            "Plan your day early"
        ],
        "ideasB": [
            "Quiet start to the day",
            "Practice mindful eating"
        ]
    },
    {
        "id": "en_elementary_people_006",
        "word": "Knowing your neighbours' names vs not knowing them — which is the more normal adult experience today?",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Knowing your neighbours' names vs not knowing them — which is the more normal adult experience today?",
                "examples": []
            }
        ],
        "sideA": "Knowing names",
        "sideB": "Not knowing",
        "ideasA": [
            "Strong sense of community",
            "Mutual help and safety"
        ],
        "ideasB": [
            "Maintain total privacy",
            "Avoid local gossip"
        ]
    },
    {
        "id": "en_elementary_places_005",
        "word": "Grocery shopping with a list vs without a list — which type of person has a better life?",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Grocery shopping with a list vs without a list — which type of person has a better life?",
                "examples": []
            }
        ],
        "sideA": "With list",
        "sideB": "Without list",
        "ideasA": [
            "Organized lifestyle",
            "Saves monthly money"
        ],
        "ideasB": [
            "Spontaneous choices",
            "Creative cooking ideas"
        ]
    },
    {
        "id": "en_elementary_work_010",
        "word": "Telling your boss you are sick vs going to work sick — which is the braver choice?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Telling your boss you are sick vs going to work sick — which is the braver choice?",
                "examples": []
            }
        ],
        "sideA": "Telling boss",
        "sideB": "Going sick",
        "ideasA": [
            "Protect your colleagues",
            "Ensure faster recovery"
        ],
        "ideasB": [
            "Show work commitment",
            "Finish important deadlines"
        ]
    },
    {
        "id": "en_elementary_work_011",
        "word": "Working full-time vs working part-time — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Working full-time vs working part-time — which is better?",
                "examples": []
            }
        ],
        "sideA": "Full-time",
        "sideB": "Part-time",
        "ideasA": [
            "Steady career growth",
            "Better financial stability"
        ],
        "ideasB": [
            "Better life balance",
            "More time for study"
        ]
    },
    {
        "id": "en_elementary_work_012",
        "word": "Working in an office vs working from home — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Working in an office vs working from home — which is better?",
                "examples": []
            }
        ],
        "sideA": "Office",
        "sideB": "Home",
        "ideasA": [
            "Important social contact",
            "Professional workspace"
        ],
        "ideasB": [
            "No time commuting",
            "Flexible working hours"
        ]
    },
    {
        "id": "en_elementary_work_013",
        "word": "A job you love vs a job that pays well — which is more important?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "A job you love vs a job that pays well — which is more important?",
                "examples": []
            }
        ],
        "sideA": "Job you love",
        "sideB": "Pays well",
        "ideasA": [
            "Daily professional passion",
            "Lower stress levels"
        ],
        "ideasB": [
            "Greater financial freedom",
            "Higher quality of life"
        ]
    },
    {
        "id": "en_elementary_work_014",
        "word": "Working with other people vs working alone — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Working with other people vs working alone — which is better?",
                "examples": []
            }
        ],
        "sideA": "With people",
        "sideB": "Alone",
        "ideasA": [
            "Receive team support",
            "Exchange multiple ideas"
        ],
        "ideasB": [
            "Quiet mental focus",
            "Independent work style"
        ]
    },
    {
        "id": "en_elementary_work_015",
        "word": "A short commute vs a long commute — which is more acceptable?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "A short commute vs a long commute — which is more acceptable?",
                "examples": []
            }
        ],
        "sideA": "Short",
        "sideB": "Long",
        "ideasA": [
            "More daily free time",
            "Less travel fatigue"
        ],
        "ideasB": [
            "Cheaper suburban housing",
            "Time for podcasts"
        ]
    },
    {
        "id": "en_elementary_people_007",
        "word": "Living alone vs living with a partner — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": "relationships",
        "form": "other",
        "definitions": [
            {
                "text": "Living alone vs living with a partner — which is better?",
                "examples": []
            }
        ],
        "sideA": "Alone",
        "sideB": "Partner",
        "ideasA": [
            "Private personal space",
            "Total independence"
        ],
        "ideasB": [
            "Shared daily life",
            "Support during problems"
        ]
    },
    {
        "id": "en_elementary_travel_006",
        "word": "Big city vs small town — which is a better place to live as an adult?",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Big city vs small town — which is a better place to live as an adult?",
                "examples": []
            }
        ],
        "sideA": "Big city",
        "sideB": "Small town",
        "ideasA": [
            "Dynamic job markets",
            "Endless entertainment"
        ],
        "ideasB": [
            "Lower living costs",
            "Clean and fresh air"
        ]
    },
    {
        "id": "en_elementary_food_drink_002",
        "word": "Cooking at home vs eating out — which is better for daily life?",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": "cooking",
        "form": "other",
        "definitions": [
            {
                "text": "Cooking at home vs eating out — which is better for daily life?",
                "examples": []
            }
        ],
        "sideA": "At home",
        "sideB": "Eating out",
        "ideasA": [
            "Much healthier meals",
            "Reduce household costs"
        ],
        "ideasB": [
            "No kitchen cleaning",
            "Try professional food"
        ]
    },
    {
        "id": "en_elementary_people_008",
        "word": "Having children vs not having children — which life is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Having children vs not having children — which life is better?",
                "examples": []
            }
        ],
        "sideA": "Children",
        "sideB": "No children",
        "ideasA": [
            "Create a family legacy",
            "Experience love and joy"
        ],
        "ideasB": [
            "Total freedom of travel",
            "Intense career focus"
        ]
    },
    {
        "id": "en_elementary_places_006",
        "word": "Renting a flat vs buying a house — which is better for young adults?",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Renting a flat vs buying a house — which is better for young adults?",
                "examples": []
            }
        ],
        "sideA": "Renting",
        "sideB": "Buying",
        "ideasA": [
            "Greater social mobility",
            "Fewer financial worries"
        ],
        "ideasB": [
            "Build property equity",
            "Space for a garden"
        ]
    },
    {
        "id": "en_elementary_body_006",
        "word": "Exercise every day vs rest — which is better for your health?",
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Exercise every day vs rest — which is better for your health?",
                "examples": []
            }
        ],
        "sideA": "Exercise",
        "sideB": "Rest",
        "ideasA": [
            "Higher physical fitness",
            "Increase energy levels"
        ],
        "ideasB": [
            "Essential muscle recovery",
            "Support mental health"
        ]
    },
    {
        "id": "en_elementary_body_007",
        "word": "Going to the doctor vs waiting — which is better when you feel ill?",
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Going to the doctor vs waiting — which is better when you feel ill?",
                "examples": []
            }
        ],
        "sideA": "Doctor",
        "sideB": "Waiting",
        "ideasA": [
            "Get professional advice",
            "Fast medical recovery"
        ],
        "ideasB": [
            "Avoid busy clinics",
            "Support natural healing"
        ]
    },
    {
        "id": "en_elementary_body_008",
        "word": "Sleeping eight hours vs sleeping less — which is more realistic for adults?",
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Sleeping eight hours vs sleeping less — which is more realistic for adults?",
                "examples": []
            }
        ],
        "sideA": "8 hours",
        "sideB": "Less",
        "ideasA": [
            "Maximum mental focus",
            "Better daily mood"
        ],
        "ideasB": [
            "Face work-life reality",
            "Time for evening hobbies"
        ]
    },
    {
        "id": "en_elementary_body_009",
        "word": "Walking to work vs taking the car — which is better for your health?",
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Walking to work vs taking the car — which is better for your health?",
                "examples": []
            }
        ],
        "sideA": "Walking",
        "sideB": "Car",
        "ideasA": [
            "Active physical movement",
            "Fresh start to the day"
        ],
        "ideasB": [
            "Protection from weather",
            "Save physical energy"
        ]
    },
    {
        "id": "en_elementary_places_007",
        "word": "Online shopping vs shopping in a store — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Online shopping vs shopping in a store — which is better?",
                "examples": []
            }
        ],
        "sideA": "Online",
        "sideB": "Store",
        "ideasA": [
            "Shopping convenience",
            "Find better prices"
        ],
        "ideasB": [
            "Try on clothes",
            "Support local business"
        ]
    },
    {
        "id": "en_elementary_work_016",
        "word": "Saving for the future vs enjoying money now — which is wiser?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Saving for the future vs enjoying money now — which is wiser?",
                "examples": []
            }
        ],
        "sideA": "Saving",
        "sideB": "Enjoying now",
        "ideasA": [
            "Financial security later",
            "Long-term investment"
        ],
        "ideasB": [
            "Increase mental happiness",
            "Experience life fully"
        ]
    },
    {
        "id": "en_elementary_places_008",
        "word": "Expensive things vs cheap things — which is better value?",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Expensive things vs cheap things — which is better value?",
                "examples": []
            }
        ],
        "sideA": "Expensive",
        "sideB": "Cheap",
        "ideasA": [
            "Higher product quality",
            "Greater durability"
        ],
        "ideasB": [
            "Low financial risk",
            "Save more money"
        ]
    },
    {
        "id": "en_elementary_places_009",
        "word": "Buying new vs buying second-hand — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Buying new vs buying second-hand — which is better?",
                "examples": []
            }
        ],
        "sideA": "New",
        "sideB": "Second-hand",
        "ideasA": [
            "In perfect condition",
            "Product guarantees"
        ],
        "ideasB": [
            "Eco-friendly choice",
            "Very low prices"
        ]
    },
    {
        "id": "en_elementary_social_001",
        "word": "Watching TV at home vs going out — which is a better evening?",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Watching TV at home vs going out — which is a better evening?",
                "examples": []
            }
        ],
        "sideA": "TV",
        "sideB": "Going out",
        "ideasA": [
            "Complete relaxation",
            "Zero financial cost"
        ],
        "ideasB": [
            "Social contact",
            "Vibrant atmosphere"
        ]
    },
    {
        "id": "en_elementary_travel_007",
        "word": "Holidays with family vs holidays with friends — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Holidays with family vs holidays with friends — which is better?",
                "examples": []
            }
        ],
        "sideA": "Family",
        "sideB": "Friends",
        "ideasA": [
            "Deep emotional bonding",
            "Extra financial help"
        ],
        "ideasB": [
            "Share similar hobbies",
            "Dynamic energy levels"
        ]
    },
    {
        "id": "en_elementary_travel_008",
        "word": "Staying in your country vs travelling abroad — which is a better holiday?",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Staying in your country vs travelling abroad — which is a better holiday?",
                "examples": []
            }
        ],
        "sideA": "Your country",
        "sideB": "Abroad",
        "ideasA": [
            "Ease of travel",
            "Support local tourism"
        ],
        "ideasB": [
            "Learn foreign cultures",
            "Practice new languages"
        ]
    },
    {
        "id": "en_elementary_social_002",
        "word": "Sport vs reading — which is a better hobby for adults?",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Sport vs reading — which is a better hobby for adults?",
                "examples": []
            }
        ],
        "sideA": "Sport",
        "sideB": "Reading",
        "ideasA": [
            "Improve physical health",
            "Build team spirit"
        ],
        "ideasB": [
            "Stimulate mental growth",
            "Deep mental relaxation"
        ]
    },
    {
        "id": "en_elementary_people_009",
        "word": "Seeing friends often vs having time alone — which is more important?",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": "relationships",
        "form": "other",
        "definitions": [
            {
                "text": "Seeing friends often vs having time alone — which is more important?",
                "examples": []
            }
        ],
        "sideA": "Friends",
        "sideB": "Alone",
        "ideasA": [
            "Vital social support",
            "Shared laughter"
        ],
        "ideasB": [
            "Space for self-reflection",
            "Total mental peace"
        ]
    },
    {
        "id": "en_elementary_work_017",
        "word": "Replying to emails immediately vs leaving them for later — which is more professional?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Replying to emails immediately vs leaving them for later — which is more professional?",
                "examples": []
            }
        ],
        "sideA": "Immediately",
        "sideB": "Later",
        "ideasA": [
            "High work efficiency",
            "Increase reliability"
        ],
        "ideasB": [
            "Prepare thoughtful replies",
            "Maintain deep focus"
        ]
    },
    {
        "id": "en_elementary_places_010",
        "word": "Doing the dishes immediately vs leaving them until tomorrow — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Doing the dishes immediately vs leaving them until tomorrow — which is better?",
                "examples": []
            }
        ],
        "sideA": "Immediately",
        "sideB": "Tomorrow",
        "ideasA": [
            "Maintain a clean kitchen",
            "Peaceful morning start"
        ],
        "ideasB": [
            "Enjoy evening rest",
            "Spend time with family"
        ]
    },
    {
        "id": "en_elementary_work_018",
        "word": "Being always early vs always five minutes late — which is worse at work?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Being always early vs always five minutes late — which is worse at work?",
                "examples": []
            }
        ],
        "sideA": "Early",
        "sideB": "Late",
        "ideasA": [
            "Wasted waiting time",
            "Productivity gap"
        ],
        "ideasB": [
            "Appears unprofessional",
            "Missing meeting starts"
        ]
    },
    {
        "id": "en_elementary_work_019",
        "word": "Having a very organised desk vs a messy desk — which person is more productive?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Having a very organised desk vs a messy desk — which person is more productive?",
                "examples": []
            }
        ],
        "sideA": "Organised",
        "sideB": "Messy",
        "ideasA": [
            "Find documents quickly",
            "Clear mental state"
        ],
        "ideasB": [
            "Encourages creative chaos",
            "Fast access to tools"
        ]
    },
    {
        "id": "en_elementary_places_011",
        "word": "Talking about work at dinner vs no work talk at dinner — which rule is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Talking about work at dinner vs no work talk at dinner — which rule is better?",
                "examples": []
            }
        ],
        "sideA": "Work talk",
        "sideB": "No work talk",
        "ideasA": [
            "Share daily problems",
            "Professional bonding"
        ],
        "ideasB": [
            "Disconnect fully",
            "Quality relaxation time"
        ]
    },
    {
        "id": "en_elementary_people_010",
        "word": "Living with family vs Alone — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": "family",
        "form": "other",
        "definitions": [
            {
                "text": "Living with family vs Alone — which is better?",
                "examples": []
            }
        ],
        "sideA": "With family",
        "sideB": "Alone",
        "ideasA": [
            "Constant company",
            "Household support system"
        ],
        "ideasB": [
            "Total independence",
            "Absolute privacy"
        ]
    },
    {
        "id": "en_elementary_people_011",
        "word": "Having a brother vs Sister — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": "family",
        "form": "other",
        "definitions": [
            {
                "text": "Having a brother vs Sister — which is better?",
                "examples": []
            }
        ],
        "sideA": "Brother",
        "sideB": "Sister",
        "ideasA": [
            "Play team sports",
            "Sense of protection"
        ],
        "ideasB": [
            "Have deep talks",
            "Sharing secrets"
        ]
    },
    {
        "id": "en_elementary_people_012",
        "word": "Big vs Small family — which is nicer?",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": "family",
        "form": "other",
        "definitions": [
            {
                "text": "Big vs Small family — which is nicer?",
                "examples": []
            }
        ],
        "sideA": "Big family",
        "sideB": "Small family",
        "ideasA": [
            "Vibrant crowded house",
            "Lots of social fun"
        ],
        "ideasB": [
            "Quiet daily life",
            "Closer emotional bonds"
        ]
    },
    {
        "id": "en_elementary_people_013",
        "word": "Oldest vs Youngest child — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Oldest vs Youngest child — which is better?",
                "examples": []
            }
        ],
        "sideA": "Oldest",
        "sideB": "Youngest",
        "ideasA": [
            "Develop leadership skills",
            "Learn responsibility"
        ],
        "ideasB": [
            "Receive extra attention",
            "More relaxed rules"
        ]
    },
    {
        "id": "en_elementary_work_020",
        "word": "Morning vs Afternoon school — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Morning vs Afternoon school — which is better?",
                "examples": []
            }
        ],
        "sideA": "Morning",
        "sideB": "Afternoon",
        "ideasA": [
            "Free afternoon time",
            "Maintain a routine"
        ],
        "ideasB": [
            "Able to sleep late",
            "Quiet start to the day"
        ]
    },
    {
        "id": "en_elementary_work_021",
        "word": "Reading vs Maths — which is more fun?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Reading vs Maths — which is more fun?",
                "examples": []
            }
        ],
        "sideA": "Reading",
        "sideB": "Maths",
        "ideasA": [
            "Entertaining stories",
            "Expand vocabulary"
        ],
        "ideasB": [
            "Complex problem solving",
            "Logical thinking"
        ]
    },
    {
        "id": "en_elementary_work_022",
        "word": "School vs Home learning — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "School vs Home learning — which is better?",
                "examples": []
            }
        ],
        "sideA": "School",
        "sideB": "Home",
        "ideasA": [
            "Direct social contact",
            "Teacher assistance"
        ],
        "ideasB": [
            "Comfortable setup",
            "Flexible learning hours"
        ]
    },
    {
        "id": "en_elementary_work_023",
        "word": "Homework vs No homework — which helps more?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Homework vs No homework — which helps more?",
                "examples": []
            }
        ],
        "sideA": "Homework",
        "sideB": "None",
        "ideasA": [
            "Reinforce daily lessons",
            "Build self-discipline"
        ],
        "ideasB": [
            "More free time",
            "Mental rest period"
        ]
    },
    {
        "id": "en_elementary_work_024",
        "word": "Alone vs Partner work — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Alone vs Partner work — which is better?",
                "examples": []
            }
        ],
        "sideA": "Alone",
        "sideB": "Partner",
        "ideasA": [
            "Deep individual focus",
            "Independent study"
        ],
        "ideasB": [
            "Share knowledge",
            "Collaborative fun"
        ]
    },
    {
        "id": "en_elementary_work_025",
        "word": "Paper vs Computer — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Paper vs Computer — which is better?",
                "examples": []
            }
        ],
        "sideA": "Paper",
        "sideB": "Computer",
        "ideasA": [
            "Tactile writing feeling",
            "Improve memory"
        ],
        "ideasB": [
            "Speed of typing",
            "Digital search tools"
        ]
    },
    {
        "id": "en_elementary_food_drink_003",
        "word": "Breakfast vs Dinner — which meal is more important?",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": "meals",
        "form": "other",
        "definitions": [
            {
                "text": "Breakfast vs Dinner — which meal is more important?",
                "examples": []
            }
        ],
        "sideA": "Breakfast",
        "sideB": "Dinner",
        "ideasA": [
            "Morning energy boost",
            "Build healthy habits"
        ],
        "ideasB": [
            "Family gathering time",
            "Main daily meal"
        ]
    },
    {
        "id": "en_elementary_food_drink_004",
        "word": "Hot vs Cold food — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Hot vs Cold food — which is better?",
                "examples": []
            }
        ],
        "sideA": "Hot",
        "sideB": "Cold",
        "ideasA": [
            "Comforting in winter",
            "Traditional cooked taste"
        ],
        "ideasB": [
            "Fresh for summer",
            "Salad variety"
        ]
    },
    {
        "id": "en_elementary_food_drink_005",
        "word": "Home vs Restaurant — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Home vs Restaurant — which is better?",
                "examples": []
            }
        ],
        "sideA": "Home",
        "sideB": "Restaurant",
        "ideasA": [
            "Control all ingredients",
            "Lower food costs"
        ],
        "ideasB": [
            "Professional chefs",
            "Zero cleaning"
        ]
    },
    {
        "id": "en_elementary_food_drink_006",
        "word": "Sweet vs Savoury — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Sweet vs Savoury — which is better?",
                "examples": []
            }
        ],
        "sideA": "Sweet",
        "sideB": "Savoury",
        "ideasA": [
            "Instant energy release",
            "Delicious treats"
        ],
        "ideasB": [
            "High nutritional value",
            "Feel fuller longer"
        ]
    },
    {
        "id": "en_elementary_food_drink_007",
        "word": "Cooking vs Buying food — which is nicer?",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": "cooking",
        "form": "other",
        "definitions": [
            {
                "text": "Cooking vs Buying food — which is nicer?",
                "examples": []
            }
        ],
        "sideA": "Cooking",
        "sideB": "Buying",
        "ideasA": [
            "Creative process",
            "Healthy ingredient choices"
        ],
        "ideasB": [
            "Total convenience",
            "Saves time"
        ]
    },
    {
        "id": "en_elementary_places_012",
        "word": "Early vs Late waking — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Early vs Late waking — which is better?",
                "examples": []
            }
        ],
        "sideA": "Early",
        "sideB": "Late",
        "ideasA": [
            "More productive hours",
            "Enjoy a quiet sunrise"
        ],
        "ideasB": [
            "Full physical rest",
            "High night energy"
        ]
    },
    {
        "id": "en_elementary_places_013",
        "word": "Morning vs Evening — which part of the day is nicer?",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Morning vs Evening — which part of the day is nicer?",
                "examples": []
            }
        ],
        "sideA": "Morning",
        "sideB": "Evening",
        "ideasA": [
            "Fresh atmosphere",
            "Fresh daily start"
        ],
        "ideasB": [
            "Social time",
            "Complete relaxation"
        ]
    },
    {
        "id": "en_elementary_places_014",
        "word": "Weekdays vs Weekends — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Weekdays vs Weekends — which is better?",
                "examples": []
            }
        ],
        "sideA": "Weekdays",
        "sideB": "Weekends",
        "ideasA": [
            "Productive work time",
            "Regular structure"
        ],
        "ideasB": [
            "Total personal freedom",
            "Time for hobbies"
        ]
    },
    {
        "id": "en_elementary_environment_001",
        "word": "Summer vs Winter — which season is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "environment",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Summer vs Winter — which season is better?",
                "examples": []
            }
        ],
        "sideA": "Summer",
        "sideB": "Winter",
        "ideasA": [
            "Sunny beaches",
            "Outdoor life"
        ],
        "ideasB": [
            "Snow activities",
            "Cozy atmosphere"
        ]
    },
    {
        "id": "en_elementary_places_015",
        "word": "Early vs Late bed — which is healthier?",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Early vs Late bed — which is healthier?",
                "examples": []
            }
        ],
        "sideA": "Early",
        "sideB": "Late",
        "ideasA": [
            "Natural rhythm",
            "Improved mood"
        ],
        "ideasB": [
            "Evening creativity",
            "Time for movies"
        ]
    },
    {
        "id": "en_elementary_places_016",
        "word": "House vs Flat — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "House vs Flat — which is better?",
                "examples": []
            }
        ],
        "sideA": "House",
        "sideB": "Flat",
        "ideasA": [
            "Private garden area",
            "More living space"
        ],
        "ideasB": [
            "Easy cleaning",
            "Central location"
        ]
    },
    {
        "id": "en_elementary_travel_009",
        "word": "City vs Countryside — which is a better place to live?",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "City vs Countryside — which is a better place to live?",
                "examples": []
            }
        ],
        "sideA": "City",
        "sideB": "Countryside",
        "ideasA": [
            "Vibrant cultural life",
            "Broad job markets"
        ],
        "ideasB": [
            "Fresh clean air",
            "Quiet nature"
        ]
    },
    {
        "id": "en_elementary_places_017",
        "word": "Bedroom vs Living room — which room do you prefer?",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Bedroom vs Living room — which room do you prefer?",
                "examples": []
            }
        ],
        "sideA": "Bedroom",
        "sideB": "Living room",
        "ideasA": [
            "Total privacy",
            "Sleep haven"
        ],
        "ideasB": [
            "Family space",
            "Large screen TV"
        ]
    },
    {
        "id": "en_elementary_social_003",
        "word": "Indoor vs Outdoor games — which are more fun?",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Indoor vs Outdoor games — which are more fun?",
                "examples": []
            }
        ],
        "sideA": "Indoor",
        "sideB": "Outdoor",
        "ideasA": [
            "Board game fun",
            "No weather issues"
        ],
        "ideasB": [
            "Active movement",
            "Sunlight benefits"
        ]
    },
    {
        "id": "en_elementary_social_004",
        "word": "Watching TV vs Book — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Watching TV vs Book — which is better?",
                "examples": []
            }
        ],
        "sideA": "TV",
        "sideB": "Book",
        "ideasA": [
            "Rich visual stories",
            "Easy relaxation"
        ],
        "ideasB": [
            "Deep imagination",
            "Vocabulary growth"
        ]
    },
    {
        "id": "en_elementary_social_005",
        "word": "Sport vs Video game — which is more fun?",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Sport vs Video game — which is more fun?",
                "examples": []
            }
        ],
        "sideA": "Sport",
        "sideB": "Video game",
        "ideasA": [
            "Physical fitness",
            "Social team experience"
        ],
        "ideasB": [
            "Strategic skills",
            "Digital worlds"
        ]
    },
    {
        "id": "en_elementary_social_006",
        "word": "Drawing vs Singing — which hobby is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Drawing vs Singing — which hobby is better?",
                "examples": []
            }
        ],
        "sideA": "Drawing",
        "sideB": "Singing",
        "ideasA": [
            "Visual creativity",
            "Quiet personal time"
        ],
        "ideasB": [
            "Emotional release",
            "Musical expression"
        ]
    },
    {
        "id": "en_elementary_social_007",
        "word": "Playing alone vs Friends — which is more fun?",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Playing alone vs Friends — which is more fun?",
                "examples": []
            }
        ],
        "sideA": "Alone",
        "sideB": "Friends",
        "ideasA": [
            "Deep concentration",
            "Full independence"
        ],
        "ideasB": [
            "Shared laughter",
            "Collaborative play"
        ]
    },
    {
        "id": "en_elementary_social_008",
        "word": "Swimming vs Running — which sport do you prefer?",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Swimming vs Running — which sport do you prefer?",
                "examples": []
            }
        ],
        "sideA": "Swimming",
        "sideB": "Running",
        "ideasA": [
            "Refreshing water",
            "Protects joints"
        ],
        "ideasB": [
            "Easy to start",
            "Outdoor views"
        ]
    },
    {
        "id": "en_elementary_social_009",
        "word": "Music vs Sport — which is a better hobby?",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Music vs Sport — which is a better hobby?",
                "examples": []
            }
        ],
        "sideA": "Music",
        "sideB": "Sport",
        "ideasA": [
            "Emotional peace",
            "Cultural growth"
        ],
        "ideasB": [
            "Physical fitness",
            "Team success"
        ]
    },
    {
        "id": "en_elementary_animals_001",
        "word": "Farm vs Wild animals — which are more interesting?",
        "lang": "en",
        "level": "elementary",
        "theme": "animals",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Farm vs Wild animals — which are more interesting?",
                "examples": []
            }
        ],
        "sideA": "Farm",
        "sideB": "Wild",
        "ideasA": [
            "Provide useful products",
            "Friendly pets"
        ],
        "ideasB": [
            "Exotic biomes",
            "Natural mystery"
        ]
    },
    {
        "id": "en_elementary_environment_002",
        "word": "Rain vs Sunshine — which weather do you prefer?",
        "lang": "en",
        "level": "elementary",
        "theme": "environment",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Rain vs Sunshine — which weather do you prefer?",
                "examples": []
            }
        ],
        "sideA": "Rain",
        "sideB": "Sunshine",
        "ideasA": [
            "Essential for plants",
            "Cozy indoor mood"
        ],
        "ideasB": [
            "Perfect beach weather",
            "Vitamin D"
        ]
    },
    {
        "id": "en_elementary_travel_010",
        "word": "Sea vs Mountains — which is better for a holiday?",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Sea vs Mountains — which is better for a holiday?",
                "examples": []
            }
        ],
        "sideA": "Sea",
        "sideB": "Mountains",
        "ideasA": [
            "Swimming fun",
            "Relaxing waves"
        ],
        "ideasB": [
            "Fresh clean air",
            "Scenic mountain views"
        ]
    },
    {
        "id": "en_elementary_environment_003",
        "word": "Flowers vs Trees — which are more beautiful?",
        "lang": "en",
        "level": "elementary",
        "theme": "environment",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Flowers vs Trees — which are more beautiful?",
                "examples": []
            }
        ],
        "sideA": "Flowers",
        "sideB": "Trees",
        "ideasA": [
            "Vibrant colours",
            "Sweet scents"
        ],
        "ideasB": [
            "Majestic height",
            "Provide oxygen"
        ]
    },
    {
        "id": "en_elementary_travel_011",
        "word": "Car vs Bus — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Car vs Bus — which is better?",
                "examples": []
            }
        ],
        "sideA": "Car",
        "sideB": "Bus",
        "ideasA": [
            "Private travel",
            "Door-to-door transit"
        ],
        "ideasB": [
            "Lower costs",
            "Environmentally friendly"
        ]
    },
    {
        "id": "en_elementary_travel_012",
        "word": "Walking vs Cycling — which is better to get around?",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Walking vs Cycling — which is better to get around?",
                "examples": []
            }
        ],
        "sideA": "Walking",
        "sideB": "Cycling",
        "ideasA": [
            "Simplest travel",
            "Great health benefits"
        ],
        "ideasB": [
            "Higher speed",
            "Longer travel range"
        ]
    },
    {
        "id": "en_elementary_travel_013",
        "word": "Short vs Long holiday — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Short vs Long holiday — which is better?",
                "examples": []
            }
        ],
        "sideA": "Short",
        "sideB": "Long",
        "ideasA": [
            "Frequent work breaks",
            "Lower budget"
        ],
        "ideasB": [
            "Complete mental reset",
            "Cultural immersion"
        ]
    },
    {
        "id": "en_elementary_travel_014",
        "word": "Travelling alone vs Family — which is more fun?",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Travelling alone vs Family — which is more fun?",
                "examples": []
            }
        ],
        "sideA": "Alone",
        "sideB": "Family",
        "ideasA": [
            "Personal growth",
            "Total freedom"
        ],
        "ideasB": [
            "Shared joy",
            "Financial support"
        ]
    },
    {
        "id": "en_elementary_places_018",
        "word": "Online vs. In-person shopping",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Online vs. In-person shopping",
                "examples": []
            }
        ],
        "sideA": "Online",
        "sideB": "In-person",
        "ideasA": [
            "Shopping convenience",
            "Lower prices"
        ],
        "ideasB": [
            "Try on items",
            "Instant gratification"
        ]
    },
    {
        "id": "en_elementary_social_010",
        "word": "Paper books vs. E-books",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Paper books vs. E-books",
                "examples": []
            }
        ],
        "sideA": "Paper",
        "sideB": "E-books",
        "ideasA": [
            "Traditional feel",
            "Highly collectable"
        ],
        "ideasB": [
            "Extreme portability",
            "Space saving"
        ]
    },
    {
        "id": "en_elementary_work_026",
        "word": "Studying in the morning vs studying in the evening — when is it better?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Studying in the morning vs studying in the evening — when is it better?",
                "examples": []
            }
        ],
        "sideA": "Morning",
        "sideB": "Evening",
        "ideasA": [
            "Fresh brain state",
            "Zero daily distractions"
        ],
        "ideasB": [
            "Quiet night environment",
            "Review daily material"
        ]
    },
    {
        "id": "en_elementary_work_027",
        "word": "Strict teachers vs friendly teachers — who helps students more?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Strict teachers vs friendly teachers — who helps students more?",
                "examples": []
            }
        ],
        "sideA": "Strict",
        "sideB": "Friendly",
        "ideasA": [
            "High classroom discipline",
            "Clear standards"
        ],
        "ideasB": [
            "Student motivation",
            "Ask open questions"
        ]
    },
    {
        "id": "en_elementary_work_028",
        "word": "Learning with a textbook vs learning with videos — which is more effective?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Learning with a textbook vs learning with videos — which is more effective?",
                "examples": []
            }
        ],
        "sideA": "Textbook",
        "sideB": "Videos",
        "ideasA": [
            "Structured lessons",
            "Tactile learning experience"
        ],
        "ideasB": [
            "Modern visual aids",
            "Dynamic content"
        ]
    },
    {
        "id": "en_elementary_work_029",
        "word": "Short lessons vs long lessons — which help you learn better?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Short lessons vs long lessons — which help you learn better?",
                "examples": []
            }
        ],
        "sideA": "Short",
        "sideB": "Long",
        "ideasA": [
            "Maintain better focus",
            "Less mental fatigue"
        ],
        "ideasB": [
            "Deep topic immersion",
            "Detailed study time"
        ]
    },
    {
        "id": "en_elementary_work_030",
        "word": "Group projects vs individual assignments — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Group projects vs individual assignments — which is better?",
                "examples": []
            }
        ],
        "sideA": "Group",
        "sideB": "Individual",
        "ideasA": [
            "Improve collaboration",
            "Exchange diverse ideas"
        ],
        "ideasB": [
            "Develop self-reliance",
            "Personal study focus"
        ]
    },
    {
        "id": "en_elementary_work_031",
        "word": "School uniform vs casual clothes at school — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "School uniform vs casual clothes at school — which is better?",
                "examples": []
            }
        ],
        "sideA": "Uniform",
        "sideB": "Casual",
        "ideasA": [
            "Promote student equality",
            "Morning simplicity"
        ],
        "ideasB": [
            "Personal self-expression",
            "Daily comfort"
        ]
    },
    {
        "id": "en_elementary_food_drink_008",
        "word": "Home-cooked meals vs fast food — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": "cooking",
        "form": "other",
        "definitions": [
            {
                "text": "Home-cooked meals vs fast food — which is better?",
                "examples": []
            }
        ],
        "sideA": "Home-cooked",
        "sideB": "Fast food",
        "ideasA": [
            "Much healthier choices",
            "Control specific recipes"
        ],
        "ideasB": [
            "Instant service",
            "Great convenience"
        ]
    },
    {
        "id": "en_elementary_food_drink_009",
        "word": "Three big meals vs many small snacks — which is healthier?",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": "meals",
        "form": "other",
        "definitions": [
            {
                "text": "Three big meals vs many small snacks — which is healthier?",
                "examples": []
            }
        ],
        "sideA": "Big meals",
        "sideB": "Small snacks",
        "ideasA": [
            "Consistent daily rhythm",
            "Full stomach satisfaction"
        ],
        "ideasB": [
            "Maintain stable energy",
            "Support metabolism"
        ]
    },
    {
        "id": "en_elementary_food_drink_010",
        "word": "Vegetarian food vs meat — which diet is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Vegetarian food vs meat — which diet is better?",
                "examples": []
            }
        ],
        "sideA": "Vegetarian",
        "sideB": "Meat",
        "ideasA": [
            "Eco-friendly lifestyle",
            "Lighter digestion"
        ],
        "ideasB": [
            "High protein levels",
            "Traditional taste"
        ]
    },
    {
        "id": "en_elementary_food_drink_011",
        "word": "Drinking tea vs drinking coffee — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": "drinks",
        "form": "other",
        "definitions": [
            {
                "text": "Drinking tea vs drinking coffee — which is better?",
                "examples": []
            }
        ],
        "sideA": "Tea",
        "sideB": "Coffee",
        "ideasA": [
            "Calming mental effect",
            "Healthy natural herbs"
        ],
        "ideasB": [
            "Instant energy boost",
            "Global social culture"
        ]
    },
    {
        "id": "en_elementary_food_drink_012",
        "word": "Eating alone vs eating with others — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Eating alone vs eating with others — which is better?",
                "examples": []
            }
        ],
        "sideA": "Alone",
        "sideB": "With others",
        "ideasA": [
            "Peaceful personal time",
            "Practice mindful eating"
        ],
        "ideasB": [
            "Social emotional bonding",
            "Share the joy of food"
        ]
    },
    {
        "id": "en_elementary_social_011",
        "word": "Playing a team sport vs playing an individual sport — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Playing a team sport vs playing an individual sport — which is better?",
                "examples": []
            }
        ],
        "sideA": "Team sport",
        "sideB": "Individual sport",
        "ideasA": [
            "Group cooperation",
            "Social support network"
        ],
        "ideasB": [
            "Personal performance goals",
            "Self-reliance"
        ]
    },
    {
        "id": "en_elementary_social_012",
        "word": "Spending free time indoors vs outdoors — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Spending free time indoors vs outdoors — which is better?",
                "examples": []
            }
        ],
        "sideA": "Indoors",
        "sideB": "Outdoors",
        "ideasA": [
            "Cozy indoor comfort",
            "Digital hobbies"
        ],
        "ideasB": [
            "Health in nature",
            "Active physical movement"
        ]
    },
    {
        "id": "en_elementary_social_013",
        "word": "Cinema vs theatre — which is a better night out?",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Cinema vs theatre — which is a better night out?",
                "examples": []
            }
        ],
        "sideA": "Cinema",
        "sideB": "Theatre",
        "ideasA": [
            "Big immersive screen",
            "Modern sound effects"
        ],
        "ideasB": [
            "Live acting experience",
            "Cultural tradition"
        ]
    },
    {
        "id": "en_elementary_social_014",
        "word": "Listening to music vs playing an instrument — which is more enjoyable?",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Listening to music vs playing an instrument — which is more enjoyable?",
                "examples": []
            }
        ],
        "sideA": "Listening",
        "sideB": "Playing",
        "ideasA": [
            "Effortless daily joy",
            "Huge musical variety"
        ],
        "ideasB": [
            "Intense skill development",
            "Creative emotional release"
        ]
    },
    {
        "id": "en_elementary_social_015",
        "word": "Video games vs board games — which are more fun?",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Video games vs board games — which are more fun?",
                "examples": []
            }
        ],
        "sideA": "Video games",
        "sideB": "Board games",
        "ideasA": [
            "Deep immersive worlds",
            "Connect with online friends"
        ],
        "ideasB": [
            "Face-to-face fun",
            "Tactile game pieces"
        ]
    },
    {
        "id": "en_elementary_social_016",
        "word": "Going shopping vs staying home — which is a better way to spend the weekend?",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Going shopping vs staying home — which is a better way to spend the weekend?",
                "examples": []
            }
        ],
        "sideA": "Shopping",
        "sideB": "Staying home",
        "ideasA": [
            "Social weekend activity",
            "Discover new items"
        ],
        "ideasB": [
            "Full mental relaxation",
            "Physical energy recovery"
        ]
    },
    {
        "id": "en_elementary_technology_003",
        "word": "Mobile phone vs computer — which is more useful in daily life?",
        "lang": "en",
        "level": "elementary",
        "theme": "technology",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Mobile phone vs computer — which is more useful in daily life?",
                "examples": []
            }
        ],
        "sideA": "Mobile",
        "sideB": "Computer",
        "ideasA": [
            "Total portability",
            "Instant mobile alerts"
        ],
        "ideasB": [
            "Larger viewing screen",
            "Powerful work tools"
        ]
    },
    {
        "id": "en_elementary_technology_004",
        "word": "Sending a message vs making a phone call — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "technology",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Sending a message vs making a phone call — which is better?",
                "examples": []
            }
        ],
        "sideA": "Message",
        "sideB": "Call",
        "ideasA": [
            "Asynchronous communication",
            "Easier to edit text"
        ],
        "ideasB": [
            "Hear vocal emotion",
            "Get direct results"
        ]
    },
    {
        "id": "en_elementary_social_017",
        "word": "E-book vs paper book — which is better to read?",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "E-book vs paper book — which is better to read?",
                "examples": []
            }
        ],
        "sideA": "E-book",
        "sideB": "Paper book",
        "ideasA": [
            "Save significant space",
            "Built-in dictionary"
        ],
        "ideasB": [
            "Classic tactile feel",
            "No battery needed"
        ]
    },
    {
        "id": "en_elementary_technology_005",
        "word": "Taking photos with your phone vs with a camera — which gives better results?",
        "lang": "en",
        "level": "elementary",
        "theme": "technology",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Taking photos with your phone vs with a camera — which gives better results?",
                "examples": []
            }
        ],
        "sideA": "Phone",
        "sideB": "Camera",
        "ideasA": [
            "Maximum convenience",
            "Direct social sharing"
        ],
        "ideasB": [
            "High optical quality",
            "Professional manual control"
        ]
    },
    {
        "id": "en_elementary_travel_015",
        "word": "Holiday at the beach vs holiday in the mountains — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Holiday at the beach vs holiday in the mountains — which is better?",
                "examples": []
            }
        ],
        "sideA": "Beach",
        "sideB": "Mountains",
        "ideasA": [
            "Sunny coastal vibes",
            "Warm water swimming"
        ],
        "ideasB": [
            "Improve hiking health",
            "Beautiful scenic views"
        ]
    },
    {
        "id": "en_elementary_travel_016",
        "word": "Travelling by train vs travelling by plane — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Travelling by train vs travelling by plane — which is better?",
                "examples": []
            }
        ],
        "sideA": "Train",
        "sideB": "Plane",
        "ideasA": [
            "Scenic travel routes",
            "Eco-friendly option"
        ],
        "ideasB": [
            "Highest travel speed",
            "Long distance travel"
        ]
    },
    {
        "id": "en_elementary_travel_017",
        "word": "Visiting a famous city vs visiting a small village — which is more interesting?",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Visiting a famous city vs visiting a small village — which is more interesting?",
                "examples": []
            }
        ],
        "sideA": "City",
        "sideB": "Village",
        "ideasA": [
            "Historical landmarks",
            "Dynamic cultural life"
        ],
        "ideasB": [
            "Local traditions",
            "Quiet village charm"
        ]
    },
    {
        "id": "en_elementary_travel_018",
        "word": "Staying in a hotel vs staying with a local family — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Staying in a hotel vs staying with a local family — which is better?",
                "examples": []
            }
        ],
        "sideA": "Hotel",
        "sideB": "Local family",
        "ideasA": [
            "Personal privacy",
            "Standardized service"
        ],
        "ideasB": [
            "Deep cultural exchange",
            "Better language practice"
        ]
    },
    {
        "id": "en_elementary_travel_019",
        "word": "Travelling abroad vs exploring your own country — which is more worthwhile?",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Travelling abroad vs exploring your own country — which is more worthwhile?",
                "examples": []
            }
        ],
        "sideA": "Abroad",
        "sideB": "Own country",
        "ideasA": [
            "Global horizons",
            "New languages"
        ],
        "ideasB": [
            "Find hidden gems",
            "Easier trip planning"
        ]
    },
    {
        "id": "en_elementary_people_014",
        "word": "Having many friends vs having a few close friends — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": "relationships",
        "form": "other",
        "definitions": [
            {
                "text": "Having many friends vs having a few close friends — which is better?",
                "examples": []
            }
        ],
        "sideA": "Many friends",
        "sideB": "Close friends",
        "ideasA": [
            "Broad social network",
            "Varied group hobbies"
        ],
        "ideasB": [
            "Deep loyalty",
            "Strong trusting bond"
        ]
    },
    {
        "id": "en_elementary_people_015",
        "word": "Meeting friends in person vs chatting online — which is more satisfying?",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": "relationships",
        "form": "other",
        "definitions": [
            {
                "text": "Meeting friends in person vs chatting online — which is more satisfying?",
                "examples": []
            }
        ],
        "sideA": "In person",
        "sideB": "Online",
        "ideasA": [
            "Direct personal energy",
            "Share real food"
        ],
        "ideasB": [
            "High time efficiency",
            "Stay easily connected"
        ]
    },
    {
        "id": "en_elementary_people_016",
        "word": "Living with parents vs living in a student flat — which is better for young people?",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": "family",
        "form": "other",
        "definitions": [
            {
                "text": "Living with parents vs living in a student flat — which is better for young people?",
                "examples": []
            }
        ],
        "sideA": "With parents",
        "sideB": "Student flat",
        "ideasA": [
            "Financial assistance",
            "Home-cooked meals"
        ],
        "ideasB": [
            "Vibrant social life",
            "Build self-reliance"
        ]
    },
    {
        "id": "en_elementary_people_017",
        "word": "Celebrating birthdays at home vs going out — which is nicer?",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Celebrating birthdays at home vs going out — which is nicer?",
                "examples": []
            }
        ],
        "sideA": "Home",
        "sideB": "Going out",
        "ideasA": [
            "Personal warm touch",
            "Cozy home atmosphere"
        ],
        "ideasB": [
            "No household cleaning",
            "Try professional food"
        ]
    },
    {
        "id": "en_elementary_work_032",
        "word": "Saving money vs spending money — which is wiser?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Saving money vs spending money — which is wiser?",
                "examples": []
            }
        ],
        "sideA": "Saving",
        "sideB": "Spending",
        "ideasA": [
            "Future mental peace",
            "Plan big purchases"
        ],
        "ideasB": [
            "Receive instant joy",
            "Support economic health"
        ]
    },
    {
        "id": "en_elementary_work_033",
        "word": "Working part-time while studying vs focusing only on school — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Working part-time while studying vs focusing only on school — which is better?",
                "examples": []
            }
        ],
        "sideA": "Part-time",
        "sideB": "Focus school",
        "ideasA": [
            "Financial independence",
            "Early work experience"
        ],
        "ideasB": [
            "Academic excellence",
            "Lower daily stress"
        ]
    },
    {
        "id": "en_elementary_work_034",
        "word": "Earning a lot of money vs having free time — which matters more?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Earning a lot of money vs having free time — which matters more?",
                "examples": []
            }
        ],
        "sideA": "Money",
        "sideB": "Free time",
        "ideasA": [
            "High quality of life",
            "Steady retirement savings"
        ],
        "ideasB": [
            "Protect mental health",
            "Family and hobbies"
        ]
    },
    {
        "id": "en_elementary_people_018",
        "word": "Living with grandparents vs not living with them — which is nicer?",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": "family",
        "form": "other",
        "definitions": [
            {
                "text": "Living with grandparents vs not living with them — which is nicer?",
                "examples": []
            }
        ],
        "sideA": "With grandparents",
        "sideB": "Not living with them",
        "ideasA": [
            "Share generational wisdom",
            "Extra childcare help"
        ],
        "ideasB": [
            "More household privacy",
            "Quiet home environment"
        ]
    },
    {
        "id": "en_elementary_food_drink_013",
        "word": "Mum's cooking vs dad's cooking — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": "cooking",
        "form": "other",
        "definitions": [
            {
                "text": "Mum's cooking vs dad's cooking — which is better?",
                "examples": []
            }
        ],
        "sideA": "Mum's",
        "sideB": "Dad's",
        "ideasA": [
            "Traditional family taste",
            "Comforting flavours"
        ],
        "ideasB": [
            "Innovative new recipes",
            "Special weekend treats"
        ]
    },
    {
        "id": "en_elementary_work_035",
        "word": "Maths vs art — which subject is more fun?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Maths vs art — which subject is more fun?",
                "examples": []
            }
        ],
        "sideA": "Maths",
        "sideB": "Art",
        "ideasA": [
            "Complex problem solving",
            "Focus on logic"
        ],
        "ideasB": [
            "Creative self-expression",
            "Emotional release"
        ]
    },
    {
        "id": "en_elementary_work_036",
        "word": "Writing on paper vs typing on a tablet — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Writing on paper vs typing on a tablet — which is better?",
                "examples": []
            }
        ],
        "sideA": "Paper",
        "sideB": "Tablet",
        "ideasA": [
            "Physical writing memory",
            "Better for eye health"
        ],
        "ideasB": [
            "Storage convenience",
            "Useful auto-correction"
        ]
    },
    {
        "id": "en_elementary_food_drink_014",
        "word": "Pizza vs pasta — which is nicer?",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Pizza vs pasta — which is nicer?",
                "examples": []
            }
        ],
        "sideA": "Pizza",
        "sideB": "Pasta",
        "ideasA": [
            "Fun for sharing",
            "Huge variety of toppings"
        ],
        "ideasB": [
            "Versatile pasta shapes",
            "Rich delicious sauces"
        ]
    },
    {
        "id": "en_elementary_food_drink_015",
        "word": "Ice cream vs cake — which is a better dessert?",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Ice cream vs cake — which is a better dessert?",
                "examples": []
            }
        ],
        "sideA": "Ice cream",
        "sideB": "Cake",
        "ideasA": [
            "Refreshing in summer",
            "Many intense flavours"
        ],
        "ideasB": [
            "Warm dessert comfort",
            "Celebration feeling"
        ]
    },
    {
        "id": "en_elementary_environment_004",
        "word": "Short days vs long days — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "environment",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Short days vs long days — which is better?",
                "examples": []
            }
        ],
        "sideA": "Short days",
        "sideB": "Long days",
        "ideasA": [
            "Cozy evening nights",
            "Focus on indoor life"
        ],
        "ideasB": [
            "Receive Vitamin D",
            "More outdoor time"
        ]
    },
    {
        "id": "en_elementary_travel_020",
        "word": "Day at the park vs day at the beach — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Day at the park vs day at the beach — which is better?",
                "examples": []
            }
        ],
        "sideA": "Park",
        "sideB": "Beach",
        "ideasA": [
            "Enjoy local nature",
            "Perfect picnic spots"
        ],
        "ideasB": [
            "Relaxing ocean breeze",
            "Intense wave activities"
        ]
    },
    {
        "id": "en_elementary_travel_021",
        "word": "Plane vs train — which is more fun?",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Plane vs train — which is more fun?",
                "examples": []
            }
        ],
        "sideA": "Plane",
        "sideB": "Train",
        "ideasA": [
            "Fly above the clouds",
            "Very fast transit"
        ],
        "ideasB": [
            "Enjoy moving scenery",
            "Space for walking"
        ]
    },
    {
        "id": "en_elementary_places_019",
        "word": "Morning shower vs evening shower — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Morning shower vs evening shower — which is better?",
                "examples": []
            }
        ],
        "sideA": "Morning",
        "sideB": "Evening",
        "ideasA": [
            "Mental energy boost",
            "Fresh daily start"
        ],
        "ideasB": [
            "Complete relaxation",
            "Keep sheets clean"
        ]
    },
    {
        "id": "en_elementary_animals_002",
        "word": "Cats that knock things off tables vs dogs that chew shoes — which pet is more annoying?",
        "lang": "en",
        "level": "elementary",
        "theme": "animals",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Cats that knock things off tables vs dogs that chew shoes — which pet is more annoying?",
                "examples": []
            }
        ],
        "sideA": "Cats",
        "sideB": "Dogs",
        "ideasA": [
            "Broken glass mess",
            "Playful mischief"
        ],
        "ideasB": [
            "Property damage",
            "Costly shoe repairs"
        ]
    },
    {
        "id": "en_elementary_food_drink_016",
        "word": "Eating pizza with a fork vs eating pizza with your hands — which is correct?",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Eating pizza with a fork vs eating pizza with your hands — which is correct?",
                "examples": []
            }
        ],
        "sideA": "Fork",
        "sideB": "Hands",
        "ideasA": [
            "Formal dining etiquette",
            "Keep fingers clean"
        ],
        "ideasB": [
            "Direct food enjoyment",
            "Authentic eating style"
        ]
    },
    {
        "id": "en_elementary_places_020",
        "word": "Sleeping with socks on vs sleeping without socks — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Sleeping with socks on vs sleeping without socks — which is better?",
                "examples": []
            }
        ],
        "sideA": "Socks on",
        "sideB": "No socks",
        "ideasA": [
            "Improve circulation",
            "Keep feet warm"
        ],
        "ideasB": [
            "Natural body cool-down",
            "Natural skin feeling"
        ]
    },
    {
        "id": "en_elementary_social_018",
        "word": "Sandcastle vs snowman — which is more fun to build?",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Sandcastle vs snowman — which is more fun to build?",
                "examples": []
            }
        ],
        "sideA": "Sandcastle",
        "sideB": "Snowman",
        "ideasA": [
            "Beach summer fun",
            "Focus on detail work"
        ],
        "ideasB": [
            "Winter seasonal magic",
            "Collaborative social fun"
        ]
    },
    {
        "id": "en_elementary_work_037",
        "word": "Lots of exams vs very few exams — which is fairer?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Lots of exams vs very few exams — which is fairer?",
                "examples": []
            }
        ],
        "sideA": "Lots of exams",
        "sideB": "Very few exams",
        "ideasA": [
            "Comprehensive skills audit",
            "Academic consistency"
        ],
        "ideasB": [
            "Intense project focus",
            "Reduce student stress"
        ]
    },
    {
        "id": "en_elementary_work_038",
        "word": "Starting school at 7 vs starting school at 5 — which is better for children?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Starting school at 7 vs starting school at 5 — which is better for children?",
                "examples": []
            }
        ],
        "sideA": "At 7",
        "sideB": "At 5",
        "ideasA": [
            "Focus on play",
            "Account for maturity"
        ],
        "ideasB": [
            "Early daily literacy",
            "Structured start to life"
        ]
    },
    {
        "id": "en_elementary_body_010",
        "word": "Eating slowly vs eating quickly — which is better for you?",
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Eating slowly vs eating quickly — which is better for you?",
                "examples": []
            }
        ],
        "sideA": "Slowly",
        "sideB": "Quickly",
        "ideasA": [
            "Much better digestion",
            "Clear fullness signals"
        ],
        "ideasB": [
            "Save daily time",
            "Efficient habits"
        ]
    },
    {
        "id": "en_elementary_food_drink_017",
        "word": "Cooking at home vs ordering food online — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": "cooking",
        "form": "other",
        "definitions": [
            {
                "text": "Cooking at home vs ordering food online — which is better?",
                "examples": []
            }
        ],
        "sideA": "Cooking at home",
        "sideB": "Ordering online",
        "ideasA": [
            "Ingredient quality control",
            "Skill development"
        ],
        "ideasB": [
            "Extreme daily ease",
            "Zero physical effort"
        ]
    },
    {
        "id": "en_elementary_social_019",
        "word": "Cooking vs baking — which is more fun as a hobby?",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Cooking vs baking — which is more fun as a hobby?",
                "examples": []
            }
        ],
        "sideA": "Cooking",
        "sideB": "Baking",
        "ideasA": [
            "Essential daily utility",
            "Creative culinary flair"
        ],
        "ideasB": [
            "Scientific precision",
            "Sweet rewards"
        ]
    },
    {
        "id": "en_elementary_body_011",
        "word": "Going to the gym vs exercising outside — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Going to the gym vs exercising outside — which is better?",
                "examples": []
            }
        ],
        "sideA": "Gym",
        "sideB": "Outside",
        "ideasA": [
            "Standardized gear",
            "Controlled climate"
        ],
        "ideasB": [
            "Breathe fresh air",
            "Changing terrain"
        ]
    },
    {
        "id": "en_elementary_technology_006",
        "word": "Photos on your phone vs printed photos — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "technology",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Photos on your phone vs printed photos — which is better?",
                "examples": []
            }
        ],
        "sideA": "Phone photos",
        "sideB": "Printed photos",
        "ideasA": [
            "Infinite storage volume",
            "Fast digital editing"
        ],
        "ideasB": [
            "Tactile history",
            "Physical decor value"
        ]
    },
    {
        "id": "en_elementary_technology_007",
        "word": "Smart TV vs computer screen — which is better for watching films?",
        "lang": "en",
        "level": "elementary",
        "theme": "technology",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Smart TV vs computer screen — which is better for watching films?",
                "examples": []
            }
        ],
        "sideA": "Smart TV",
        "sideB": "Computer",
        "ideasA": [
            "Large immersive view",
            "Better audio quality"
        ],
        "ideasB": [
            "Personal privacy",
            "Close-up viewing"
        ]
    },
    {
        "id": "en_elementary_travel_022",
        "word": "Hot country vs cold country — which is a better holiday destination?",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Hot country vs cold country — which is a better holiday destination?",
                "examples": []
            }
        ],
        "sideA": "Hot country",
        "sideB": "Cold country",
        "ideasA": [
            "Beach relaxation",
            "Summer ice cream vibes"
        ],
        "ideasB": [
            "Skiing health benefits",
            "See northern lights"
        ]
    },
    {
        "id": "en_elementary_people_019",
        "word": "Giving presents vs receiving presents — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Giving presents vs receiving presents — which is better?",
                "examples": []
            }
        ],
        "sideA": "Giving",
        "sideB": "Receiving",
        "ideasA": [
            "Altruistic personal joy",
            "Positive social impact"
        ],
        "ideasB": [
            "Exciting surprise",
            "Feel truly appreciated"
        ]
    },
    {
        "id": "en_elementary_work_039",
        "word": "Working indoors vs working outdoors — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Working indoors vs working outdoors — which is better?",
                "examples": []
            }
        ],
        "sideA": "Indoors",
        "sideB": "Outdoors",
        "ideasA": [
            "Controlled climate",
            "Ergonomic workspace"
        ],
        "ideasB": [
            "Improve physical health",
            "Enjoy changing views"
        ]
    },
    {
        "id": "en_elementary_food_drink_018",
        "word": "Pineapple on pizza vs no pineapple on pizza — which is correct?",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Pineapple on pizza vs no pineapple on pizza — which is correct?",
                "examples": []
            }
        ],
        "sideA": "Pineapple",
        "sideB": "No pineapple",
        "ideasA": [
            "Sweet-savoury mix",
            "Tropical flavour vibes"
        ],
        "ideasB": [
            "Follow traditional rules",
            "Avoid flavour clash"
        ]
    },
    {
        "id": "en_elementary_food_drink_019",
        "word": "Putting milk in first vs putting tea in first — which is better?",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": "drinks",
        "form": "other",
        "definitions": [
            {
                "text": "Putting milk in first vs putting tea in first — which is better?",
                "examples": []
            }
        ],
        "sideA": "Milk first",
        "sideB": "Tea first",
        "ideasA": [
            "Protects milk proteins",
            "Cooler initial temperature"
        ],
        "ideasB": [
            "Better brewing process",
            "Full intense flavour"
        ]
    },
    {
        "id": "en_elementary_places_021",
        "word": "Monday vs Friday — which day is actually worse?",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Monday vs Friday — which day is actually worse?",
                "examples": []
            }
        ],
        "sideA": "Monday",
        "sideB": "Friday",
        "ideasA": [
            "Start of work week",
            "Lower energy levels"
        ],
        "ideasB": [
            "Long weekend wait",
            "Finish work fatigue"
        ]
    },
    {
        "id": "en_elementary_places_022",
        "word": "Waking up five minutes before the alarm vs sleeping until the alarm — which is more annoying?",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Waking up five minutes before the alarm vs sleeping until the alarm — which is more annoying?",
                "examples": []
            }
        ],
        "sideA": "Before alarm",
        "sideB": "Until alarm",
        "ideasA": [
            "Interrupted rest",
            "No man's land"
        ],
        "ideasB": [
            "Shock factor",
            "No preparation time"
        ]
    },
    {
        "id": "en_elementary_animals_003",
        "word": "Cats vs dogs — which animal is secretly the boss of the house?",
        "lang": "en",
        "level": "elementary",
        "theme": "animals",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Cats vs dogs — which animal is secretly the boss of the house?",
                "examples": []
            }
        ],
        "sideA": "Cats",
        "sideB": "Dogs",
        "ideasA": [
            "Mental strategy",
            "Quiet home control"
        ],
        "ideasB": [
            "Physical energy",
            "Overt loyalty"
        ]
    },
    {
        "id": "en_elementary_environment_005",
        "word": "Being too hot vs being too cold — which is worse?",
        "lang": "en",
        "level": "elementary",
        "theme": "environment",
        "sub_theme": null,
        "form": "other",
        "definitions": [
            {
                "text": "Being too hot vs being too cold — which is worse?",
                "examples": []
            }
        ],
        "sideA": "Too hot",
        "sideB": "Too cold",
        "ideasA": [
            "Sweating and fatigue",
            "Cannot sleep well"
        ],
        "ideasB": [
            "Shivering pain",
            "Restrictive winter gear"
        ]
    }
];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();