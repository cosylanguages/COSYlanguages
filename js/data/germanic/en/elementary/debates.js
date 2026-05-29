(function() {
    const data = [
    {
        "id": "en_elementary_career_development_001",
        "topic": "A high salary vs a short commute — which matters more in a job?",
        "sideA": "High salary",
        "sideB": "Short commute",
        "ideasA": [
            "Increase financial security",
            "Afford higher quality products"
        ],
        "ideasB": [
            "Reduce daily travel stress",
            "More time for personal life"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_002",
        "topic": "Changing jobs often vs staying in the same company — which is better for your career?",
        "sideA": "Changing jobs",
        "sideB": "Staying",
        "ideasA": [
            "Gain diverse work experience",
            "Negotiate a better salary"
        ],
        "ideasB": [
            "Build long-term professional trust",
            "Opportunities for internal promotion"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_003",
        "topic": "Working overtime vs leaving on time every day — which is the better habit?",
        "sideA": "Overtime",
        "sideB": "On time",
        "ideasA": [
            "Complete urgent projects faster",
            "Demonstrate strong commitment"
        ],
        "ideasB": [
            "Prevent professional burnout",
            "Maintain a healthy work-life balance"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_004",
        "topic": "A boss who is strict vs a boss who is relaxed — which is better to work for?",
        "sideA": "Strict boss",
        "sideB": "Relaxed boss",
        "ideasA": [
            "Clear expectations and rules",
            "Higher professional standards"
        ],
        "ideasB": [
            "Encourages creative thinking",
            "Lower levels of workplace pressure"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_005",
        "topic": "Working in a big company vs a small company — which is better?",
        "sideA": "Big company",
        "sideB": "Small company",
        "ideasA": [
            "Structured career paths",
            "Better employee benefits"
        ],
        "ideasB": [
            "Friendly and close atmosphere",
            "More varied responsibilities"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_006",
        "topic": "Getting a promotion vs getting more free time — which would you choose?",
        "sideA": "Promotion",
        "sideB": "Free time",
        "ideasA": [
            "Professional growth and status",
            "Increased financial responsibility"
        ],
        "ideasB": [
            "Focus on family activities",
            "Develop personal hobbies"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_neighbourhood_local_001",
        "topic": "Buying a house vs renting for life — which is the smarter financial decision?",
        "sideA": "Buying",
        "sideB": "Renting",
        "ideasA": [
            "Stable long-term investment",
            "Freedom to renovate property"
        ],
        "ideasB": [
            "Greater flexibility to move",
            "No responsibility for repairs"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "neighbourhood_local",
        "sub_theme": null
    },
    {
        "id": "en_elementary_travel_001",
        "topic": "Living in the city centre vs living in the suburbs — which is better?",
        "sideA": "City centre",
        "sideB": "Suburbs",
        "ideasA": [
            "Walking distance to shops",
            "Access to vibrant nightlife"
        ],
        "ideasB": [
            "Quieter and safer environment",
            "More space for families"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null
    },
    {
        "id": "en_elementary_neighbourhood_local_002",
        "topic": "Spending money on experiences vs on things — which makes you happier?",
        "sideA": "Experiences",
        "sideB": "Things",
        "ideasA": [
            "Create lasting memories",
            "Opportunities for personal growth"
        ],
        "ideasB": [
            "Practical daily use",
            "Long-lasting physical value"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "neighbourhood_local",
        "sub_theme": null
    },
    {
        "id": "en_elementary_diet_nutrition_001",
        "topic": "Cooking every day vs meal prepping once a week — which is more practical?",
        "sideA": "Daily cooking",
        "sideB": "Meal prepping",
        "ideasA": [
            "Use fresh ingredients daily",
            "More variety in your diet"
        ],
        "ideasB": [
            "Save significant time",
            "Better kitchen organization"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "diet_nutrition",
        "sub_theme": null
    },
    {
        "id": "en_elementary_neighbourhood_local_003",
        "topic": "Having a cleaner vs doing your own housework — which is a better choice?",
        "sideA": "Cleaner",
        "sideB": "Do it yourself",
        "ideasA": [
            "Save time and energy",
            "Professional cleaning quality"
        ],
        "ideasB": [
            "Save household money",
            "Maintain total control"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "neighbourhood_local",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_001",
        "topic": "Living with a partner vs living alone — which is better for adults?",
        "sideA": "With partner",
        "sideB": "Alone",
        "ideasA": [
            "Share household costs",
            "Constant emotional support"
        ],
        "ideasB": [
            "Total personal independence",
            "Peace and quiet"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_002",
        "topic": "Having children early vs having children later in life — which is better?",
        "sideA": "Early",
        "sideB": "Later",
        "ideasA": [
            "More energy for parenting",
            "Grow up with your children"
        ],
        "ideasB": [
            "Better financial stability",
            "More life experience to share"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_003",
        "topic": "Close family relationships vs independence from family — which is more important as an adult?",
        "sideA": "Close relationships",
        "sideB": "Independence",
        "ideasA": [
            "Strong emotional support",
            "Maintain family traditions"
        ],
        "ideasB": [
            "Personal freedom",
            "Make independent decisions"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_004",
        "topic": "Meeting new people vs keeping old friendships — which is more valuable?",
        "sideA": "New people",
        "sideB": "Old friends",
        "ideasA": [
            "Learn new perspectives",
            "Expand professional network"
        ],
        "ideasB": [
            "Shared personal history",
            "Higher level of trust"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_007",
        "topic": "Socialising after work vs going straight home — which is better for work relationships?",
        "sideA": "Socialising",
        "sideB": "Going home",
        "ideasA": [
            "Improve team collaboration",
            "Relaxed informal communication"
        ],
        "ideasB": [
            "Recover mental energy",
            "Quality time with family"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_body_001",
        "topic": "Going to the gym vs exercising outdoors — which is better for adults?",
        "sideA": "Gym",
        "sideB": "Outdoors",
        "ideasA": [
            "Access to modern equipment",
            "Work with professional trainers"
        ],
        "ideasB": [
            "Enjoy fresh air",
            "No monthly membership fees"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_elementary_body_002",
        "topic": "Strict diet vs eating everything in moderation — which is healthier?",
        "sideA": "Strict diet",
        "sideB": "Moderation",
        "ideasA": [
            "Achieve faster results",
            "Develop strong discipline"
        ],
        "ideasB": [
            "Sustainable long-term balance",
            "Enjoy different types of food"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_elementary_body_003",
        "topic": "Seeing a doctor early vs waiting to see if you get better — which is wiser?",
        "sideA": "Early",
        "sideB": "Waiting",
        "ideasA": [
            "Receive fast treatment",
            "Prevent serious problems"
        ],
        "ideasB": [
            "Allow natural recovery",
            "Avoid unnecessary medicine"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_elementary_body_004",
        "topic": "Sleeping eight hours vs sleeping six but exercising — which is better for energy?",
        "sideA": "8 hours",
        "sideB": "6 hours + exercise",
        "ideasA": [
            "Full physical recovery",
            "Improved daily mood"
        ],
        "ideasB": [
            "Higher physical fitness",
            "Keep the body active"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_elementary_body_005",
        "topic": "Reducing stress through sport vs through relaxation — which works better?",
        "sideA": "Sport",
        "sideB": "Relaxation",
        "ideasA": [
            "Physical stress release",
            "Higher energy levels"
        ],
        "ideasB": [
            "Mental peace",
            "Calm the mind"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_elementary_technology_001",
        "topic": "Smartphones vs face-to-face conversation — which do we use more, and is that a problem?",
        "sideA": "Smartphones",
        "sideB": "Face-to-face",
        "ideasA": [
            "Instant global access",
            "Stay constantly connected"
        ],
        "ideasB": [
            "Express real emotions",
            "Better personal focus"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "technology",
        "sub_theme": null
    },
    {
        "id": "en_elementary_technology_002",
        "topic": "Online banking vs going to the bank — which is better?",
        "sideA": "Online",
        "sideB": "Going to bank",
        "ideasA": [
            "Highly convenient",
            "Available 24/7"
        ],
        "ideasB": [
            "Personal expert advice",
            "Physical security"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "technology",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_008",
        "topic": "Working with paper vs working digitally — which is more efficient?",
        "sideA": "Paper",
        "sideB": "Digital",
        "ideasA": [
            "Better mental focus",
            "Reduce eye strain"
        ],
        "ideasB": [
            "Efficient digital storage",
            "Faster information search"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_009",
        "topic": "Social media for networking vs meeting people in person — which is more useful professionally?",
        "sideA": "Social media",
        "sideB": "In person",
        "ideasA": [
            "Reach global audiences",
            "Quick professional contact"
        ],
        "ideasB": [
            "Build stronger trust",
            "Make a personal impact"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_travel_002",
        "topic": "Package holiday vs independent travel — which is better for adults?",
        "sideA": "Package",
        "sideB": "Independent",
        "ideasA": [
            "Reduce planning stress",
            "Guaranteed safety standards"
        ],
        "ideasB": [
            "Authentic adventure",
            "Unique local experiences"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null
    },
    {
        "id": "en_elementary_travel_003",
        "topic": "City break vs beach holiday — which is a better way to relax?",
        "sideA": "City break",
        "sideB": "Beach holiday",
        "ideasA": [
            "Interesting cultural visits",
            "Try local food"
        ],
        "ideasB": [
            "Relaxing ocean breeze",
            "Complete physical relaxation"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null
    },
    {
        "id": "en_elementary_travel_004",
        "topic": "One long holiday a year vs several short breaks — which is better?",
        "sideA": "One long",
        "sideB": "Several short",
        "ideasA": [
            "Deep mental rest",
            "Travel to distant places"
        ],
        "ideasB": [
            "Regular breaks from work",
            "Visit more destinations"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null
    },
    {
        "id": "en_elementary_travel_005",
        "topic": "Travelling as a couple vs travelling alone — which is more enjoyable?",
        "sideA": "As a couple",
        "sideB": "Alone",
        "ideasA": [
            "Share special memories",
            "Lower shared costs"
        ],
        "ideasB": [
            "Complete personal choice",
            "Meet more local people"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_005",
        "topic": "Telling your partner about every small problem vs keeping things to yourself — which is healthier?",
        "sideA": "Telling all",
        "sideB": "Keeping to self",
        "ideasA": [
            "Full emotional honesty",
            "Receive mutual support"
        ],
        "ideasB": [
            "Avoid unnecessary drama",
            "Internal mental peace"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_neighbourhood_local_004",
        "topic": "Checking your phone first thing in the morning vs waiting until after breakfast — which is a better habit?",
        "sideA": "First thing",
        "sideB": "After breakfast",
        "ideasA": [
            "Check urgent news",
            "Plan your day early"
        ],
        "ideasB": [
            "Quiet start to the day",
            "Practice mindful eating"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "neighbourhood_local",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_006",
        "topic": "Knowing your neighbours' names vs not knowing them — which is the more normal adult experience today?",
        "sideA": "Knowing names",
        "sideB": "Not knowing",
        "ideasA": [
            "Strong sense of community",
            "Mutual help and safety"
        ],
        "ideasB": [
            "Maintain total privacy",
            "Avoid local gossip"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_neighbourhood_local_005",
        "topic": "Grocery shopping with a list vs without a list — which type of person has a better life?",
        "sideA": "With list",
        "sideB": "Without list",
        "ideasA": [
            "Organized lifestyle",
            "Saves monthly money"
        ],
        "ideasB": [
            "Spontaneous choices",
            "Creative cooking ideas"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "neighbourhood_local",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_010",
        "topic": "Telling your boss you are sick vs going to work sick — which is the braver choice?",
        "sideA": "Telling boss",
        "sideB": "Going sick",
        "ideasA": [
            "Protect your colleagues",
            "Ensure faster recovery"
        ],
        "ideasB": [
            "Show work commitment",
            "Finish important deadlines"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_011",
        "topic": "Working full-time vs working part-time — which is better?",
        "sideA": "Full-time",
        "sideB": "Part-time",
        "ideasA": [
            "Steady career growth",
            "Better financial stability"
        ],
        "ideasB": [
            "Better life balance",
            "More time for study"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_012",
        "topic": "Working in an office vs working from home — which is better?",
        "sideA": "Office",
        "sideB": "Home",
        "ideasA": [
            "Important social contact",
            "Professional workspace"
        ],
        "ideasB": [
            "No time commuting",
            "Flexible working hours"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_013",
        "topic": "A job you love vs a job that pays well — which is more important?",
        "sideA": "Job you love",
        "sideB": "Pays well",
        "ideasA": [
            "Daily professional passion",
            "Lower stress levels"
        ],
        "ideasB": [
            "Greater financial freedom",
            "Higher quality of life"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_014",
        "topic": "Working with other people vs working alone — which is better?",
        "sideA": "With people",
        "sideB": "Alone",
        "ideasA": [
            "Receive team support",
            "Exchange multiple ideas"
        ],
        "ideasB": [
            "Quiet mental focus",
            "Independent work style"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_015",
        "topic": "A short commute vs a long commute — which is more acceptable?",
        "sideA": "Short",
        "sideB": "Long",
        "ideasA": [
            "More daily free time",
            "Less travel fatigue"
        ],
        "ideasB": [
            "Cheaper suburban housing",
            "Time for podcasts"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_007",
        "topic": "Living alone vs living with a partner — which is better?",
        "sideA": "Alone",
        "sideB": "Partner",
        "ideasA": [
            "Private personal space",
            "Total independence"
        ],
        "ideasB": [
            "Shared daily life",
            "Support during problems"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_travel_006",
        "topic": "Big city vs small town — which is a better place to live as an adult?",
        "sideA": "Big city",
        "sideB": "Small town",
        "ideasA": [
            "Dynamic job markets",
            "Endless entertainment"
        ],
        "ideasB": [
            "Lower living costs",
            "Clean and fresh air"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null
    },
    {
        "id": "en_elementary_diet_nutrition_002",
        "topic": "Cooking at home vs eating out — which is better for daily life?",
        "sideA": "At home",
        "sideB": "Eating out",
        "ideasA": [
            "Much healthier meals",
            "Reduce household costs"
        ],
        "ideasB": [
            "No kitchen cleaning",
            "Try professional food"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "diet_nutrition",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_008",
        "topic": "Having children vs not having children — which life is better?",
        "sideA": "Children",
        "sideB": "No children",
        "ideasA": [
            "Create a family legacy",
            "Experience love and joy"
        ],
        "ideasB": [
            "Total freedom of travel",
            "Intense career focus"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_neighbourhood_local_006",
        "topic": "Renting a flat vs buying a house — which is better for young adults?",
        "sideA": "Renting",
        "sideB": "Buying",
        "ideasA": [
            "Greater social mobility",
            "Fewer financial worries"
        ],
        "ideasB": [
            "Build property equity",
            "Space for a garden"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "neighbourhood_local",
        "sub_theme": null
    },
    {
        "id": "en_elementary_body_006",
        "topic": "Exercise every day vs rest — which is better for your health?",
        "sideA": "Exercise",
        "sideB": "Rest",
        "ideasA": [
            "Higher physical fitness",
            "Increase energy levels"
        ],
        "ideasB": [
            "Essential muscle recovery",
            "Support mental health"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_elementary_body_007",
        "topic": "Going to the doctor vs waiting — which is better when you feel ill?",
        "sideA": "Doctor",
        "sideB": "Waiting",
        "ideasA": [
            "Get professional advice",
            "Fast medical recovery"
        ],
        "ideasB": [
            "Avoid busy clinics",
            "Support natural healing"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_elementary_body_008",
        "topic": "Sleeping eight hours vs sleeping less — which is more realistic for adults?",
        "sideA": "8 hours",
        "sideB": "Less",
        "ideasA": [
            "Maximum mental focus",
            "Better daily mood"
        ],
        "ideasB": [
            "Face work-life reality",
            "Time for evening hobbies"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_elementary_body_009",
        "topic": "Walking to work vs taking the car — which is better for your health?",
        "sideA": "Walking",
        "sideB": "Car",
        "ideasA": [
            "Active physical movement",
            "Fresh start to the day"
        ],
        "ideasB": [
            "Protection from weather",
            "Save physical energy"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_elementary_neighbourhood_local_007",
        "topic": "Online shopping vs shopping in a store — which is better?",
        "sideA": "Online",
        "sideB": "Store",
        "ideasA": [
            "Shopping convenience",
            "Find better prices"
        ],
        "ideasB": [
            "Try on clothes",
            "Support local business"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "neighbourhood_local",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_016",
        "topic": "Saving for the future vs enjoying money now — which is wiser?",
        "sideA": "Saving",
        "sideB": "Enjoying now",
        "ideasA": [
            "Financial security later",
            "Long-term investment"
        ],
        "ideasB": [
            "Increase mental happiness",
            "Experience life fully"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_neighbourhood_local_008",
        "topic": "Expensive things vs cheap things — which is better value?",
        "sideA": "Expensive",
        "sideB": "Cheap",
        "ideasA": [
            "Higher product quality",
            "Greater durability"
        ],
        "ideasB": [
            "Low financial risk",
            "Save more money"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "neighbourhood_local",
        "sub_theme": null
    },
    {
        "id": "en_elementary_neighbourhood_local_009",
        "topic": "Buying new vs buying second-hand — which is better?",
        "sideA": "New",
        "sideB": "Second-hand",
        "ideasA": [
            "In perfect condition",
            "Product guarantees"
        ],
        "ideasB": [
            "Eco-friendly choice",
            "Very low prices"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "neighbourhood_local",
        "sub_theme": null
    },
    {
        "id": "en_elementary_interests_hobbies_001",
        "topic": "Watching TV at home vs going out — which is a better evening?",
        "sideA": "TV",
        "sideB": "Going out",
        "ideasA": [
            "Complete relaxation",
            "Zero financial cost"
        ],
        "ideasB": [
            "Social contact",
            "Vibrant atmosphere"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "interests_hobbies",
        "sub_theme": null
    },
    {
        "id": "en_elementary_travel_007",
        "topic": "Holidays with family vs holidays with friends — which is better?",
        "sideA": "Family",
        "sideB": "Friends",
        "ideasA": [
            "Deep emotional bonding",
            "Extra financial help"
        ],
        "ideasB": [
            "Share similar hobbies",
            "Dynamic energy levels"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null
    },
    {
        "id": "en_elementary_travel_008",
        "topic": "Staying in your country vs travelling abroad — which is a better holiday?",
        "sideA": "Your country",
        "sideB": "Abroad",
        "ideasA": [
            "Ease of travel",
            "Support local tourism"
        ],
        "ideasB": [
            "Learn foreign cultures",
            "Practice new languages"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null
    },
    {
        "id": "en_elementary_interests_hobbies_002",
        "topic": "Sport vs reading — which is a better hobby for adults?",
        "sideA": "Sport",
        "sideB": "Reading",
        "ideasA": [
            "Improve physical health",
            "Build team spirit"
        ],
        "ideasB": [
            "Stimulate mental growth",
            "Deep mental relaxation"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "interests_hobbies",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_009",
        "topic": "Seeing friends often vs having time alone — which is more important?",
        "sideA": "Friends",
        "sideB": "Alone",
        "ideasA": [
            "Vital social support",
            "Shared laughter"
        ],
        "ideasB": [
            "Space for self-reflection",
            "Total mental peace"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_017",
        "topic": "Replying to emails immediately vs leaving them for later — which is more professional?",
        "sideA": "Immediately",
        "sideB": "Later",
        "ideasA": [
            "High work efficiency",
            "Increase reliability"
        ],
        "ideasB": [
            "Prepare thoughtful replies",
            "Maintain deep focus"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_neighbourhood_local_010",
        "topic": "Doing the dishes immediately vs leaving them until tomorrow — which is better?",
        "sideA": "Immediately",
        "sideB": "Tomorrow",
        "ideasA": [
            "Maintain a clean kitchen",
            "Peaceful morning start"
        ],
        "ideasB": [
            "Enjoy evening rest",
            "Spend time with family"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "neighbourhood_local",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_018",
        "topic": "Being always early vs always five minutes late — which is worse at work?",
        "sideA": "Early",
        "sideB": "Late",
        "ideasA": [
            "Wasted waiting time",
            "Productivity gap"
        ],
        "ideasB": [
            "Appears unprofessional",
            "Missing meeting starts"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_019",
        "topic": "Having a very organised desk vs a messy desk — which person is more productive?",
        "sideA": "Organised",
        "sideB": "Messy",
        "ideasA": [
            "Find documents quickly",
            "Clear mental state"
        ],
        "ideasB": [
            "Encourages creative chaos",
            "Fast access to tools"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_neighbourhood_local_011",
        "topic": "Talking about work at dinner vs no work talk at dinner — which rule is better?",
        "sideA": "Work talk",
        "sideB": "No work talk",
        "ideasA": [
            "Share daily problems",
            "Professional bonding"
        ],
        "ideasB": [
            "Disconnect fully",
            "Quality relaxation time"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "neighbourhood_local",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_010",
        "topic": "Living with family vs Alone — which is better?",
        "sideA": "With family",
        "sideB": "Alone",
        "ideasA": [
            "Constant company",
            "Household support system"
        ],
        "ideasB": [
            "Total independence",
            "Absolute privacy"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_011",
        "topic": "Having a brother vs Sister — which is better?",
        "sideA": "Brother",
        "sideB": "Sister",
        "ideasA": [
            "Play team sports",
            "Sense of protection"
        ],
        "ideasB": [
            "Have deep talks",
            "Sharing secrets"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_012",
        "topic": "Big vs Small family — which is nicer?",
        "sideA": "Big family",
        "sideB": "Small family",
        "ideasA": [
            "Vibrant crowded house",
            "Lots of social fun"
        ],
        "ideasB": [
            "Quiet daily life",
            "Closer emotional bonds"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_013",
        "topic": "Oldest vs Youngest child — which is better?",
        "sideA": "Oldest",
        "sideB": "Youngest",
        "ideasA": [
            "Develop leadership skills",
            "Learn responsibility"
        ],
        "ideasB": [
            "Receive extra attention",
            "More relaxed rules"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_020",
        "topic": "Morning vs Afternoon school — which is better?",
        "sideA": "Morning",
        "sideB": "Afternoon",
        "ideasA": [
            "Free afternoon time",
            "Maintain a routine"
        ],
        "ideasB": [
            "Able to sleep late",
            "Quiet start to the day"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_021",
        "topic": "Reading vs Maths — which is more fun?",
        "sideA": "Reading",
        "sideB": "Maths",
        "ideasA": [
            "Entertaining stories",
            "Expand vocabulary"
        ],
        "ideasB": [
            "Complex problem solving",
            "Logical thinking"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_022",
        "topic": "School vs Home learning — which is better?",
        "sideA": "School",
        "sideB": "Home",
        "ideasA": [
            "Direct social contact",
            "Teacher assistance"
        ],
        "ideasB": [
            "Comfortable setup",
            "Flexible learning hours"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_023",
        "topic": "Homework vs No homework — which helps more?",
        "sideA": "Homework",
        "sideB": "None",
        "ideasA": [
            "Reinforce daily lessons",
            "Build self-discipline"
        ],
        "ideasB": [
            "More free time",
            "Mental rest period"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_024",
        "topic": "Alone vs Partner work — which is better?",
        "sideA": "Alone",
        "sideB": "Partner",
        "ideasA": [
            "Deep individual focus",
            "Independent study"
        ],
        "ideasB": [
            "Share knowledge",
            "Collaborative fun"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_025",
        "topic": "Paper vs Computer — which is better?",
        "sideA": "Paper",
        "sideB": "Computer",
        "ideasA": [
            "Tactile writing feeling",
            "Improve memory"
        ],
        "ideasB": [
            "Speed of typing",
            "Digital search tools"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_diet_nutrition_003",
        "topic": "Breakfast vs Dinner — which meal is more important?",
        "sideA": "Breakfast",
        "sideB": "Dinner",
        "ideasA": [
            "Morning energy boost",
            "Build healthy habits"
        ],
        "ideasB": [
            "Family gathering time",
            "Main daily meal"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "diet_nutrition",
        "sub_theme": null
    },
    {
        "id": "en_elementary_diet_nutrition_004",
        "topic": "Hot vs Cold food — which is better?",
        "sideA": "Hot",
        "sideB": "Cold",
        "ideasA": [
            "Comforting in winter",
            "Traditional cooked taste"
        ],
        "ideasB": [
            "Fresh for summer",
            "Salad variety"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "diet_nutrition",
        "sub_theme": null
    },
    {
        "id": "en_elementary_diet_nutrition_005",
        "topic": "Home vs Restaurant — which is better?",
        "sideA": "Home",
        "sideB": "Restaurant",
        "ideasA": [
            "Control all ingredients",
            "Lower food costs"
        ],
        "ideasB": [
            "Professional chefs",
            "Zero cleaning"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "diet_nutrition",
        "sub_theme": null
    },
    {
        "id": "en_elementary_diet_nutrition_006",
        "topic": "Sweet vs Savoury — which is better?",
        "sideA": "Sweet",
        "sideB": "Savoury",
        "ideasA": [
            "Instant energy release",
            "Delicious treats"
        ],
        "ideasB": [
            "High nutritional value",
            "Feel fuller longer"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "diet_nutrition",
        "sub_theme": null
    },
    {
        "id": "en_elementary_diet_nutrition_007",
        "topic": "Cooking vs Buying food — which is nicer?",
        "sideA": "Cooking",
        "sideB": "Buying",
        "ideasA": [
            "Creative process",
            "Healthy ingredient choices"
        ],
        "ideasB": [
            "Total convenience",
            "Saves time"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "diet_nutrition",
        "sub_theme": null
    },
    {
        "id": "en_elementary_neighbourhood_local_012",
        "topic": "Early vs Late waking — which is better?",
        "sideA": "Early",
        "sideB": "Late",
        "ideasA": [
            "More productive hours",
            "Enjoy a quiet sunrise"
        ],
        "ideasB": [
            "Full physical rest",
            "High night energy"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "neighbourhood_local",
        "sub_theme": null
    },
    {
        "id": "en_elementary_neighbourhood_local_013",
        "topic": "Morning vs Evening — which part of the day is nicer?",
        "sideA": "Morning",
        "sideB": "Evening",
        "ideasA": [
            "Fresh atmosphere",
            "Fresh daily start"
        ],
        "ideasB": [
            "Social time",
            "Complete relaxation"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "neighbourhood_local",
        "sub_theme": null
    },
    {
        "id": "en_elementary_neighbourhood_local_014",
        "topic": "Weekdays vs Weekends — which is better?",
        "sideA": "Weekdays",
        "sideB": "Weekends",
        "ideasA": [
            "Productive work time",
            "Regular structure"
        ],
        "ideasB": [
            "Total personal freedom",
            "Time for hobbies"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "neighbourhood_local",
        "sub_theme": null
    },
    {
        "id": "en_elementary_environment_001",
        "topic": "Summer vs Winter — which season is better?",
        "sideA": "Summer",
        "sideB": "Winter",
        "ideasA": [
            "Sunny beaches",
            "Outdoor life"
        ],
        "ideasB": [
            "Snow activities",
            "Cozy atmosphere"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "environment",
        "sub_theme": null
    },
    {
        "id": "en_elementary_neighbourhood_local_015",
        "topic": "Early vs Late bed — which is healthier?",
        "sideA": "Early",
        "sideB": "Late",
        "ideasA": [
            "Natural rhythm",
            "Improved mood"
        ],
        "ideasB": [
            "Evening creativity",
            "Time for movies"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "neighbourhood_local",
        "sub_theme": null
    },
    {
        "id": "en_elementary_neighbourhood_local_016",
        "topic": "House vs Flat — which is better?",
        "sideA": "House",
        "sideB": "Flat",
        "ideasA": [
            "Private garden area",
            "More living space"
        ],
        "ideasB": [
            "Easy cleaning",
            "Central location"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "neighbourhood_local",
        "sub_theme": null
    },
    {
        "id": "en_elementary_travel_009",
        "topic": "City vs Countryside — which is a better place to live?",
        "sideA": "City",
        "sideB": "Countryside",
        "ideasA": [
            "Vibrant cultural life",
            "Broad job markets"
        ],
        "ideasB": [
            "Fresh clean air",
            "Quiet nature"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null
    },
    {
        "id": "en_elementary_neighbourhood_local_017",
        "topic": "Bedroom vs Living room — which room do you prefer?",
        "sideA": "Bedroom",
        "sideB": "Living room",
        "ideasA": [
            "Total privacy",
            "Sleep haven"
        ],
        "ideasB": [
            "Family space",
            "Large screen TV"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "neighbourhood_local",
        "sub_theme": null
    },
    {
        "id": "en_elementary_interests_hobbies_003",
        "topic": "Indoor vs Outdoor games — which are more fun?",
        "sideA": "Indoor",
        "sideB": "Outdoor",
        "ideasA": [
            "Board game fun",
            "No weather issues"
        ],
        "ideasB": [
            "Active movement",
            "Sunlight benefits"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "interests_hobbies",
        "sub_theme": null
    },
    {
        "id": "en_elementary_interests_hobbies_004",
        "topic": "Watching TV vs Book — which is better?",
        "sideA": "TV",
        "sideB": "Book",
        "ideasA": [
            "Rich visual stories",
            "Easy relaxation"
        ],
        "ideasB": [
            "Deep imagination",
            "Vocabulary growth"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "interests_hobbies",
        "sub_theme": null
    },
    {
        "id": "en_elementary_interests_hobbies_005",
        "topic": "Sport vs Video game — which is more fun?",
        "sideA": "Sport",
        "sideB": "Video game",
        "ideasA": [
            "Physical fitness",
            "Social team experience"
        ],
        "ideasB": [
            "Strategic skills",
            "Digital worlds"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "interests_hobbies",
        "sub_theme": null
    },
    {
        "id": "en_elementary_interests_hobbies_006",
        "topic": "Drawing vs Singing — which hobby is better?",
        "sideA": "Drawing",
        "sideB": "Singing",
        "ideasA": [
            "Visual creativity",
            "Quiet personal time"
        ],
        "ideasB": [
            "Emotional release",
            "Musical expression"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "interests_hobbies",
        "sub_theme": null
    },
    {
        "id": "en_elementary_interests_hobbies_007",
        "topic": "Playing alone vs Friends — which is more fun?",
        "sideA": "Alone",
        "sideB": "Friends",
        "ideasA": [
            "Deep concentration",
            "Full independence"
        ],
        "ideasB": [
            "Shared laughter",
            "Collaborative play"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "interests_hobbies",
        "sub_theme": null
    },
    {
        "id": "en_elementary_interests_hobbies_008",
        "topic": "Swimming vs Running — which sport do you prefer?",
        "sideA": "Swimming",
        "sideB": "Running",
        "ideasA": [
            "Refreshing water",
            "Protects joints"
        ],
        "ideasB": [
            "Easy to start",
            "Outdoor views"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "interests_hobbies",
        "sub_theme": null
    },
    {
        "id": "en_elementary_interests_hobbies_009",
        "topic": "Music vs Sport — which is a better hobby?",
        "sideA": "Music",
        "sideB": "Sport",
        "ideasA": [
            "Emotional peace",
            "Cultural growth"
        ],
        "ideasB": [
            "Physical fitness",
            "Team success"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "interests_hobbies",
        "sub_theme": null
    },
    {
        "id": "en_elementary_animals_001",
        "topic": "Farm vs Wild animals — which are more interesting?",
        "sideA": "Farm",
        "sideB": "Wild",
        "ideasA": [
            "Provide useful products",
            "Friendly pets"
        ],
        "ideasB": [
            "Exotic biomes",
            "Natural mystery"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "animals",
        "sub_theme": null
    },
    {
        "id": "en_elementary_environment_002",
        "topic": "Rain vs Sunshine — which weather do you prefer?",
        "sideA": "Rain",
        "sideB": "Sunshine",
        "ideasA": [
            "Essential for plants",
            "Cozy indoor mood"
        ],
        "ideasB": [
            "Perfect beach weather",
            "Vitamin D"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "environment",
        "sub_theme": null
    },
    {
        "id": "en_elementary_travel_010",
        "topic": "Sea vs Mountains — which is better for a holiday?",
        "sideA": "Sea",
        "sideB": "Mountains",
        "ideasA": [
            "Swimming fun",
            "Relaxing waves"
        ],
        "ideasB": [
            "Fresh clean air",
            "Scenic mountain views"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null
    },
    {
        "id": "en_elementary_environment_003",
        "topic": "Flowers vs Trees — which are more beautiful?",
        "sideA": "Flowers",
        "sideB": "Trees",
        "ideasA": [
            "Vibrant colours",
            "Sweet scents"
        ],
        "ideasB": [
            "Majestic height",
            "Provide oxygen"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "environment",
        "sub_theme": null
    },
    {
        "id": "en_elementary_travel_011",
        "topic": "Car vs Bus — which is better?",
        "sideA": "Car",
        "sideB": "Bus",
        "ideasA": [
            "Private travel",
            "Door-to-door transit"
        ],
        "ideasB": [
            "Lower costs",
            "Environmentally friendly"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null
    },
    {
        "id": "en_elementary_travel_012",
        "topic": "Walking vs Cycling — which is better to get around?",
        "sideA": "Walking",
        "sideB": "Cycling",
        "ideasA": [
            "Simplest travel",
            "Great health benefits"
        ],
        "ideasB": [
            "Higher speed",
            "Longer travel range"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null
    },
    {
        "id": "en_elementary_travel_013",
        "topic": "Short vs Long holiday — which is better?",
        "sideA": "Short",
        "sideB": "Long",
        "ideasA": [
            "Frequent work breaks",
            "Lower budget"
        ],
        "ideasB": [
            "Complete mental reset",
            "Cultural immersion"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null
    },
    {
        "id": "en_elementary_travel_014",
        "topic": "Travelling alone vs Family — which is more fun?",
        "sideA": "Alone",
        "sideB": "Family",
        "ideasA": [
            "Personal growth",
            "Total freedom"
        ],
        "ideasB": [
            "Shared joy",
            "Financial support"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null
    },
    {
        "id": "en_elementary_neighbourhood_local_018",
        "topic": "Online vs. In-person shopping",
        "sideA": "Online",
        "sideB": "In-person",
        "ideasA": [
            "Shopping convenience",
            "Lower prices"
        ],
        "ideasB": [
            "Try on items",
            "Instant gratification"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "neighbourhood_local",
        "sub_theme": null
    },
    {
        "id": "en_elementary_interests_hobbies_010",
        "topic": "Paper books vs. E-books",
        "sideA": "Paper",
        "sideB": "E-books",
        "ideasA": [
            "Traditional feel",
            "Highly collectable"
        ],
        "ideasB": [
            "Extreme portability",
            "Space saving"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "interests_hobbies",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_026",
        "topic": "Studying in the morning vs studying in the evening — when is it better?",
        "sideA": "Morning",
        "sideB": "Evening",
        "ideasA": [
            "Fresh brain state",
            "Zero daily distractions"
        ],
        "ideasB": [
            "Quiet night environment",
            "Review daily material"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_027",
        "topic": "Strict teachers vs friendly teachers — who helps students more?",
        "sideA": "Strict",
        "sideB": "Friendly",
        "ideasA": [
            "High classroom discipline",
            "Clear standards"
        ],
        "ideasB": [
            "Student motivation",
            "Ask open questions"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_028",
        "topic": "Learning with a textbook vs learning with videos — which is more effective?",
        "sideA": "Textbook",
        "sideB": "Videos",
        "ideasA": [
            "Structured lessons",
            "Tactile learning experience"
        ],
        "ideasB": [
            "Modern visual aids",
            "Dynamic content"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_029",
        "topic": "Short lessons vs long lessons — which help you learn better?",
        "sideA": "Short",
        "sideB": "Long",
        "ideasA": [
            "Maintain better focus",
            "Less mental fatigue"
        ],
        "ideasB": [
            "Deep topic immersion",
            "Detailed study time"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_030",
        "topic": "Group projects vs individual assignments — which is better?",
        "sideA": "Group",
        "sideB": "Individual",
        "ideasA": [
            "Improve collaboration",
            "Exchange diverse ideas"
        ],
        "ideasB": [
            "Develop self-reliance",
            "Personal study focus"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_031",
        "topic": "School uniform vs casual clothes at school — which is better?",
        "sideA": "Uniform",
        "sideB": "Casual",
        "ideasA": [
            "Promote student equality",
            "Morning simplicity"
        ],
        "ideasB": [
            "Personal self-expression",
            "Daily comfort"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_diet_nutrition_008",
        "topic": "Home-cooked meals vs fast food — which is better?",
        "sideA": "Home-cooked",
        "sideB": "Fast food",
        "ideasA": [
            "Much healthier choices",
            "Control specific recipes"
        ],
        "ideasB": [
            "Instant service",
            "Great convenience"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "diet_nutrition",
        "sub_theme": null
    },
    {
        "id": "en_elementary_diet_nutrition_009",
        "topic": "Three big meals vs many small snacks — which is healthier?",
        "sideA": "Big meals",
        "sideB": "Small snacks",
        "ideasA": [
            "Consistent daily rhythm",
            "Full stomach satisfaction"
        ],
        "ideasB": [
            "Maintain stable energy",
            "Support metabolism"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "diet_nutrition",
        "sub_theme": null
    },
    {
        "id": "en_elementary_diet_nutrition_010",
        "topic": "Vegetarian food vs meat — which diet is better?",
        "sideA": "Vegetarian",
        "sideB": "Meat",
        "ideasA": [
            "Eco-friendly lifestyle",
            "Lighter digestion"
        ],
        "ideasB": [
            "High protein levels",
            "Traditional taste"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "diet_nutrition",
        "sub_theme": null
    },
    {
        "id": "en_elementary_diet_nutrition_011",
        "topic": "Drinking tea vs drinking coffee — which is better?",
        "sideA": "Tea",
        "sideB": "Coffee",
        "ideasA": [
            "Calming mental effect",
            "Healthy natural herbs"
        ],
        "ideasB": [
            "Instant energy boost",
            "Global social culture"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "diet_nutrition",
        "sub_theme": null
    },
    {
        "id": "en_elementary_diet_nutrition_012",
        "topic": "Eating alone vs eating with others — which is better?",
        "sideA": "Alone",
        "sideB": "With others",
        "ideasA": [
            "Peaceful personal time",
            "Practice mindful eating"
        ],
        "ideasB": [
            "Social emotional bonding",
            "Share the joy of food"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "diet_nutrition",
        "sub_theme": null
    },
    {
        "id": "en_elementary_interests_hobbies_011",
        "topic": "Playing a team sport vs playing an individual sport — which is better?",
        "sideA": "Team sport",
        "sideB": "Individual sport",
        "ideasA": [
            "Group cooperation",
            "Social support network"
        ],
        "ideasB": [
            "Personal performance goals",
            "Self-reliance"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "interests_hobbies",
        "sub_theme": null
    },
    {
        "id": "en_elementary_interests_hobbies_012",
        "topic": "Spending free time indoors vs outdoors — which is better?",
        "sideA": "Indoors",
        "sideB": "Outdoors",
        "ideasA": [
            "Cozy indoor comfort",
            "Digital hobbies"
        ],
        "ideasB": [
            "Health in nature",
            "Active physical movement"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "interests_hobbies",
        "sub_theme": null
    },
    {
        "id": "en_elementary_interests_hobbies_013",
        "topic": "Cinema vs theatre — which is a better night out?",
        "sideA": "Cinema",
        "sideB": "Theatre",
        "ideasA": [
            "Big immersive screen",
            "Modern sound effects"
        ],
        "ideasB": [
            "Live acting experience",
            "Cultural tradition"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "interests_hobbies",
        "sub_theme": null
    },
    {
        "id": "en_elementary_interests_hobbies_014",
        "topic": "Listening to music vs playing an instrument — which is more enjoyable?",
        "sideA": "Listening",
        "sideB": "Playing",
        "ideasA": [
            "Effortless daily joy",
            "Huge musical variety"
        ],
        "ideasB": [
            "Intense skill development",
            "Creative emotional release"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "interests_hobbies",
        "sub_theme": null
    },
    {
        "id": "en_elementary_interests_hobbies_015",
        "topic": "Video games vs board games — which are more fun?",
        "sideA": "Video games",
        "sideB": "Board games",
        "ideasA": [
            "Deep immersive worlds",
            "Connect with online friends"
        ],
        "ideasB": [
            "Face-to-face fun",
            "Tactile game pieces"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "interests_hobbies",
        "sub_theme": null
    },
    {
        "id": "en_elementary_interests_hobbies_016",
        "topic": "Going shopping vs staying home — which is a better way to spend the weekend?",
        "sideA": "Shopping",
        "sideB": "Staying home",
        "ideasA": [
            "Social weekend activity",
            "Discover new items"
        ],
        "ideasB": [
            "Full mental relaxation",
            "Physical energy recovery"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "interests_hobbies",
        "sub_theme": null
    },
    {
        "id": "en_elementary_technology_003",
        "topic": "Mobile phone vs computer — which is more useful in daily life?",
        "sideA": "Mobile",
        "sideB": "Computer",
        "ideasA": [
            "Total portability",
            "Instant mobile alerts"
        ],
        "ideasB": [
            "Larger viewing screen",
            "Powerful work tools"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "technology",
        "sub_theme": null
    },
    {
        "id": "en_elementary_technology_004",
        "topic": "Sending a message vs making a phone call — which is better?",
        "sideA": "Message",
        "sideB": "Call",
        "ideasA": [
            "Asynchronous communication",
            "Easier to edit text"
        ],
        "ideasB": [
            "Hear vocal emotion",
            "Get direct results"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "technology",
        "sub_theme": null
    },
    {
        "id": "en_elementary_interests_hobbies_017",
        "topic": "E-book vs paper book — which is better to read?",
        "sideA": "E-book",
        "sideB": "Paper book",
        "ideasA": [
            "Save significant space",
            "Built-in dictionary"
        ],
        "ideasB": [
            "Classic tactile feel",
            "No battery needed"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "interests_hobbies",
        "sub_theme": null
    },
    {
        "id": "en_elementary_technology_005",
        "topic": "Taking photos with your phone vs with a camera — which gives better results?",
        "sideA": "Phone",
        "sideB": "Camera",
        "ideasA": [
            "Maximum convenience",
            "Direct social sharing"
        ],
        "ideasB": [
            "High optical quality",
            "Professional manual control"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "technology",
        "sub_theme": null
    },
    {
        "id": "en_elementary_travel_015",
        "topic": "Holiday at the beach vs holiday in the mountains — which is better?",
        "sideA": "Beach",
        "sideB": "Mountains",
        "ideasA": [
            "Sunny coastal vibes",
            "Warm water swimming"
        ],
        "ideasB": [
            "Improve hiking health",
            "Beautiful scenic views"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null
    },
    {
        "id": "en_elementary_travel_016",
        "topic": "Travelling by train vs travelling by plane — which is better?",
        "sideA": "Train",
        "sideB": "Plane",
        "ideasA": [
            "Scenic travel routes",
            "Eco-friendly option"
        ],
        "ideasB": [
            "Highest travel speed",
            "Long distance travel"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null
    },
    {
        "id": "en_elementary_travel_017",
        "topic": "Visiting a famous city vs visiting a small village — which is more interesting?",
        "sideA": "City",
        "sideB": "Village",
        "ideasA": [
            "Historical landmarks",
            "Dynamic cultural life"
        ],
        "ideasB": [
            "Local traditions",
            "Quiet village charm"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null
    },
    {
        "id": "en_elementary_travel_018",
        "topic": "Staying in a hotel vs staying with a local family — which is better?",
        "sideA": "Hotel",
        "sideB": "Local family",
        "ideasA": [
            "Personal privacy",
            "Standardized service"
        ],
        "ideasB": [
            "Deep cultural exchange",
            "Better language practice"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null
    },
    {
        "id": "en_elementary_travel_019",
        "topic": "Travelling abroad vs exploring your own country — which is more worthwhile?",
        "sideA": "Abroad",
        "sideB": "Own country",
        "ideasA": [
            "Global horizons",
            "New languages"
        ],
        "ideasB": [
            "Find hidden gems",
            "Easier trip planning"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_014",
        "topic": "Having many friends vs having a few close friends — which is better?",
        "sideA": "Many friends",
        "sideB": "Close friends",
        "ideasA": [
            "Broad social network",
            "Varied group hobbies"
        ],
        "ideasB": [
            "Deep loyalty",
            "Strong trusting bond"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_015",
        "topic": "Meeting friends in person vs chatting online — which is more satisfying?",
        "sideA": "In person",
        "sideB": "Online",
        "ideasA": [
            "Direct personal energy",
            "Share real food"
        ],
        "ideasB": [
            "High time efficiency",
            "Stay easily connected"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_016",
        "topic": "Living with parents vs living in a student flat — which is better for young people?",
        "sideA": "With parents",
        "sideB": "Student flat",
        "ideasA": [
            "Financial assistance",
            "Home-cooked meals"
        ],
        "ideasB": [
            "Vibrant social life",
            "Build self-reliance"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_017",
        "topic": "Celebrating birthdays at home vs going out — which is nicer?",
        "sideA": "Home",
        "sideB": "Going out",
        "ideasA": [
            "Personal warm touch",
            "Cozy home atmosphere"
        ],
        "ideasB": [
            "No household cleaning",
            "Try professional food"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_032",
        "topic": "Saving money vs spending money — which is wiser?",
        "sideA": "Saving",
        "sideB": "Spending",
        "ideasA": [
            "Future mental peace",
            "Plan big purchases"
        ],
        "ideasB": [
            "Receive instant joy",
            "Support economic health"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_033",
        "topic": "Working part-time while studying vs focusing only on school — which is better?",
        "sideA": "Part-time",
        "sideB": "Focus school",
        "ideasA": [
            "Financial independence",
            "Early work experience"
        ],
        "ideasB": [
            "Academic excellence",
            "Lower daily stress"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_034",
        "topic": "Earning a lot of money vs having free time — which matters more?",
        "sideA": "Money",
        "sideB": "Free time",
        "ideasA": [
            "High quality of life",
            "Steady retirement savings"
        ],
        "ideasB": [
            "Protect mental health",
            "Family and hobbies"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_018",
        "topic": "Living with grandparents vs not living with them — which is nicer?",
        "sideA": "With grandparents",
        "sideB": "Not living with them",
        "ideasA": [
            "Share generational wisdom",
            "Extra childcare help"
        ],
        "ideasB": [
            "More household privacy",
            "Quiet home environment"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_diet_nutrition_013",
        "topic": "Mum's cooking vs dad's cooking — which is better?",
        "sideA": "Mum's",
        "sideB": "Dad's",
        "ideasA": [
            "Traditional family taste",
            "Comforting flavours"
        ],
        "ideasB": [
            "Innovative new recipes",
            "Special weekend treats"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "diet_nutrition",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_035",
        "topic": "Maths vs art — which subject is more fun?",
        "sideA": "Maths",
        "sideB": "Art",
        "ideasA": [
            "Complex problem solving",
            "Focus on logic"
        ],
        "ideasB": [
            "Creative self-expression",
            "Emotional release"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_036",
        "topic": "Writing on paper vs typing on a tablet — which is better?",
        "sideA": "Paper",
        "sideB": "Tablet",
        "ideasA": [
            "Physical writing memory",
            "Better for eye health"
        ],
        "ideasB": [
            "Storage convenience",
            "Useful auto-correction"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_diet_nutrition_014",
        "topic": "Pizza vs pasta — which is nicer?",
        "sideA": "Pizza",
        "sideB": "Pasta",
        "ideasA": [
            "Fun for sharing",
            "Huge variety of toppings"
        ],
        "ideasB": [
            "Versatile pasta shapes",
            "Rich delicious sauces"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "diet_nutrition",
        "sub_theme": null
    },
    {
        "id": "en_elementary_diet_nutrition_015",
        "topic": "Ice cream vs cake — which is a better dessert?",
        "sideA": "Ice cream",
        "sideB": "Cake",
        "ideasA": [
            "Refreshing in summer",
            "Many intense flavours"
        ],
        "ideasB": [
            "Warm dessert comfort",
            "Celebration feeling"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "diet_nutrition",
        "sub_theme": null
    },
    {
        "id": "en_elementary_environment_004",
        "topic": "Short days vs long days — which is better?",
        "sideA": "Short days",
        "sideB": "Long days",
        "ideasA": [
            "Cozy evening nights",
            "Focus on indoor life"
        ],
        "ideasB": [
            "Receive Vitamin D",
            "More outdoor time"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "environment",
        "sub_theme": null
    },
    {
        "id": "en_elementary_travel_020",
        "topic": "Day at the park vs day at the beach — which is better?",
        "sideA": "Park",
        "sideB": "Beach",
        "ideasA": [
            "Enjoy local nature",
            "Perfect picnic spots"
        ],
        "ideasB": [
            "Relaxing ocean breeze",
            "Intense wave activities"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null
    },
    {
        "id": "en_elementary_travel_021",
        "topic": "Plane vs train — which is more fun?",
        "sideA": "Plane",
        "sideB": "Train",
        "ideasA": [
            "Fly above the clouds",
            "Very fast transit"
        ],
        "ideasB": [
            "Enjoy moving scenery",
            "Space for walking"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null
    },
    {
        "id": "en_elementary_neighbourhood_local_019",
        "topic": "Morning shower vs evening shower — which is better?",
        "sideA": "Morning",
        "sideB": "Evening",
        "ideasA": [
            "Mental energy boost",
            "Fresh daily start"
        ],
        "ideasB": [
            "Complete relaxation",
            "Keep sheets clean"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "neighbourhood_local",
        "sub_theme": null
    },
    {
        "id": "en_elementary_animals_002",
        "topic": "Cats that knock things off tables vs dogs that chew shoes — which pet is more annoying?",
        "sideA": "Cats",
        "sideB": "Dogs",
        "ideasA": [
            "Broken glass mess",
            "Playful mischief"
        ],
        "ideasB": [
            "Property damage",
            "Costly shoe repairs"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "animals",
        "sub_theme": null
    },
    {
        "id": "en_elementary_diet_nutrition_016",
        "topic": "Eating pizza with a fork vs eating pizza with your hands — which is correct?",
        "sideA": "Fork",
        "sideB": "Hands",
        "ideasA": [
            "Formal dining etiquette",
            "Keep fingers clean"
        ],
        "ideasB": [
            "Direct food enjoyment",
            "Authentic eating style"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "diet_nutrition",
        "sub_theme": null
    },
    {
        "id": "en_elementary_neighbourhood_local_020",
        "topic": "Sleeping with socks on vs sleeping without socks — which is better?",
        "sideA": "Socks on",
        "sideB": "No socks",
        "ideasA": [
            "Improve circulation",
            "Keep feet warm"
        ],
        "ideasB": [
            "Natural body cool-down",
            "Natural skin feeling"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "neighbourhood_local",
        "sub_theme": null
    },
    {
        "id": "en_elementary_interests_hobbies_018",
        "topic": "Sandcastle vs snowman — which is more fun to build?",
        "sideA": "Sandcastle",
        "sideB": "Snowman",
        "ideasA": [
            "Beach summer fun",
            "Focus on detail work"
        ],
        "ideasB": [
            "Winter seasonal magic",
            "Collaborative social fun"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "interests_hobbies",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_037",
        "topic": "Lots of exams vs very few exams — which is fairer?",
        "sideA": "Lots of exams",
        "sideB": "Very few exams",
        "ideasA": [
            "Comprehensive skills audit",
            "Academic consistency"
        ],
        "ideasB": [
            "Intense project focus",
            "Reduce student stress"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_038",
        "topic": "Starting school at 7 vs starting school at 5 — which is better for children?",
        "sideA": "At 7",
        "sideB": "At 5",
        "ideasA": [
            "Focus on play",
            "Account for maturity"
        ],
        "ideasB": [
            "Early daily literacy",
            "Structured start to life"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_body_010",
        "topic": "Eating slowly vs eating quickly — which is better for you?",
        "sideA": "Slowly",
        "sideB": "Quickly",
        "ideasA": [
            "Much better digestion",
            "Clear fullness signals"
        ],
        "ideasB": [
            "Save daily time",
            "Efficient habits"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_elementary_diet_nutrition_017",
        "topic": "Cooking at home vs ordering food online — which is better?",
        "sideA": "Cooking at home",
        "sideB": "Ordering online",
        "ideasA": [
            "Ingredient quality control",
            "Skill development"
        ],
        "ideasB": [
            "Extreme daily ease",
            "Zero physical effort"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "diet_nutrition",
        "sub_theme": null
    },
    {
        "id": "en_elementary_interests_hobbies_019",
        "topic": "Cooking vs baking — which is more fun as a hobby?",
        "sideA": "Cooking",
        "sideB": "Baking",
        "ideasA": [
            "Essential daily utility",
            "Creative culinary flair"
        ],
        "ideasB": [
            "Scientific precision",
            "Sweet rewards"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "interests_hobbies",
        "sub_theme": null
    },
    {
        "id": "en_elementary_body_011",
        "topic": "Going to the gym vs exercising outside — which is better?",
        "sideA": "Gym",
        "sideB": "Outside",
        "ideasA": [
            "Standardized gear",
            "Controlled climate"
        ],
        "ideasB": [
            "Breathe fresh air",
            "Changing terrain"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_elementary_technology_006",
        "topic": "Photos on your phone vs printed photos — which is better?",
        "sideA": "Phone photos",
        "sideB": "Printed photos",
        "ideasA": [
            "Infinite storage volume",
            "Fast digital editing"
        ],
        "ideasB": [
            "Tactile history",
            "Physical decor value"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "technology",
        "sub_theme": null
    },
    {
        "id": "en_elementary_technology_007",
        "topic": "Smart TV vs computer screen — which is better for watching films?",
        "sideA": "Smart TV",
        "sideB": "Computer",
        "ideasA": [
            "Large immersive view",
            "Better audio quality"
        ],
        "ideasB": [
            "Personal privacy",
            "Close-up viewing"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "technology",
        "sub_theme": null
    },
    {
        "id": "en_elementary_travel_022",
        "topic": "Hot country vs cold country — which is a better holiday destination?",
        "sideA": "Hot country",
        "sideB": "Cold country",
        "ideasA": [
            "Beach relaxation",
            "Summer ice cream vibes"
        ],
        "ideasB": [
            "Skiing health benefits",
            "See northern lights"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_019",
        "topic": "Giving presents vs receiving presents — which is better?",
        "sideA": "Giving",
        "sideB": "Receiving",
        "ideasA": [
            "Altruistic personal joy",
            "Positive social impact"
        ],
        "ideasB": [
            "Exciting surprise",
            "Feel truly appreciated"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_039",
        "topic": "Working indoors vs working outdoors — which is better?",
        "sideA": "Indoors",
        "sideB": "Outdoors",
        "ideasA": [
            "Controlled climate",
            "Ergonomic workspace"
        ],
        "ideasB": [
            "Improve physical health",
            "Enjoy changing views"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_diet_nutrition_018",
        "topic": "Pineapple on pizza vs no pineapple on pizza — which is correct?",
        "sideA": "Pineapple",
        "sideB": "No pineapple",
        "ideasA": [
            "Sweet-savoury mix",
            "Tropical flavour vibes"
        ],
        "ideasB": [
            "Follow traditional rules",
            "Avoid flavour clash"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "diet_nutrition",
        "sub_theme": null
    },
    {
        "id": "en_elementary_diet_nutrition_019",
        "topic": "Putting milk in first vs putting tea in first — which is better?",
        "sideA": "Milk first",
        "sideB": "Tea first",
        "ideasA": [
            "Protects milk proteins",
            "Cooler initial temperature"
        ],
        "ideasB": [
            "Better brewing process",
            "Full intense flavour"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "diet_nutrition",
        "sub_theme": null
    },
    {
        "id": "en_elementary_neighbourhood_local_021",
        "topic": "Monday vs Friday — which day is actually worse?",
        "sideA": "Monday",
        "sideB": "Friday",
        "ideasA": [
            "Start of work week",
            "Lower energy levels"
        ],
        "ideasB": [
            "Long weekend wait",
            "Finish work fatigue"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "neighbourhood_local",
        "sub_theme": null
    },
    {
        "id": "en_elementary_neighbourhood_local_022",
        "topic": "Waking up five minutes before the alarm vs sleeping until the alarm — which is more annoying?",
        "sideA": "Before alarm",
        "sideB": "Until alarm",
        "ideasA": [
            "Interrupted rest",
            "No man's land"
        ],
        "ideasB": [
            "Shock factor",
            "No preparation time"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "neighbourhood_local",
        "sub_theme": null
    },
    {
        "id": "en_elementary_animals_003",
        "topic": "Cats vs dogs — which animal is secretly the boss of the house?",
        "sideA": "Cats",
        "sideB": "Dogs",
        "ideasA": [
            "Mental strategy",
            "Quiet home control"
        ],
        "ideasB": [
            "Physical energy",
            "Overt loyalty"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "animals",
        "sub_theme": null
    },
    {
        "id": "en_elementary_environment_005",
        "topic": "Being too hot vs being too cold — which is worse?",
        "sideA": "Too hot",
        "sideB": "Too cold",
        "ideasA": [
            "Sweating and fatigue",
            "Cannot sleep well"
        ],
        "ideasB": [
            "Shivering pain",
            "Restrictive winter gear"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "environment",
        "sub_theme": null
    }
];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();