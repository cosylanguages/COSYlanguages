(function() {
    const data = [
          {
                    "topic": "A high salary vs a short commute — which matters more in a job?",
                    "sideA": "High salary",
                    "sideB": "Short commute",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Changing jobs often vs staying in the same company — which is better for your career?",
                    "sideA": "Changing jobs",
                    "sideB": "Staying",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Working overtime vs leaving on time every day — which is the better habit?",
                    "sideA": "Overtime",
                    "sideB": "On time",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "A boss who is strict vs a boss who is relaxed — which is better to work for?",
                    "sideA": "Strict boss",
                    "sideB": "Relaxed boss",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Working in a big company vs a small company — which is better?",
                    "sideA": "Big company",
                    "sideB": "Small company",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Getting a promotion vs getting more free time — which would you choose?",
                    "sideA": "Promotion",
                    "sideB": "Free time",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Buying a house vs renting for life — which is the smarter financial decision?",
                    "sideA": "Buying",
                    "sideB": "Renting",
                    "level": "elementary",
                    "theme": "neighbourhood_local_A2",
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
                    "topic": "Living in the city centre vs living in the suburbs — which is better?",
                    "sideA": "City centre",
                    "sideB": "Suburbs",
                    "level": "elementary",
                    "theme": "transport_travel_A2",
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
                    "topic": "Spending money on experiences vs on things — which makes you happier?",
                    "sideA": "Experiences",
                    "sideB": "Things",
                    "level": "elementary",
                    "theme": "neighbourhood_local_A2",
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
                    "topic": "Cooking every day vs meal prepping once a week — which is more practical?",
                    "sideA": "Daily cooking",
                    "sideB": "Meal prepping",
                    "level": "elementary",
                    "theme": "diet_nutrition_A2",
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
                    "topic": "Having a cleaner vs doing your own housework — which is a better choice?",
                    "sideA": "Cleaner",
                    "sideB": "Do it yourself",
                    "level": "elementary",
                    "theme": "neighbourhood_local_A2",
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
                    "topic": "Living with a partner vs living alone — which is better for adults?",
                    "sideA": "With partner",
                    "sideB": "Alone",
                    "level": "elementary",
                    "theme": "relationships_dating_A2",
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
                    "topic": "Having children early vs having children later in life — which is better?",
                    "sideA": "Early",
                    "sideB": "Later",
                    "level": "elementary",
                    "theme": "relationships_dating_A2",
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
                    "topic": "Close family relationships vs independence from family — which is more important as an adult?",
                    "sideA": "Close relationships",
                    "sideB": "Independence",
                    "level": "elementary",
                    "theme": "relationships_dating_A2",
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
                    "topic": "Meeting new people vs keeping old friendships — which is more valuable?",
                    "sideA": "New people",
                    "sideB": "Old friends",
                    "level": "elementary",
                    "theme": "relationships_dating_A2",
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
                    "topic": "Socialising after work vs going straight home — which is better for work relationships?",
                    "sideA": "Socialising",
                    "sideB": "Going home",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Going to the gym vs exercising outdoors — which is better for adults?",
                    "sideA": "Gym",
                    "sideB": "Outdoors",
                    "level": "elementary",
                    "theme": "health_body_A2",
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
                    "topic": "Strict diet vs eating everything in moderation — which is healthier?",
                    "sideA": "Strict diet",
                    "sideB": "Moderation",
                    "level": "elementary",
                    "theme": "health_body_A2",
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
                    "topic": "Seeing a doctor early vs waiting to see if you get better — which is wiser?",
                    "sideA": "Early",
                    "sideB": "Waiting",
                    "level": "elementary",
                    "theme": "health_body_A2",
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
                    "topic": "Sleeping eight hours vs sleeping six but exercising — which is better for energy?",
                    "sideA": "8 hours",
                    "sideB": "6 hours + exercise",
                    "level": "elementary",
                    "theme": "health_body_A2",
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
                    "topic": "Reducing stress through sport vs through relaxation — which works better?",
                    "sideA": "Sport",
                    "sideB": "Relaxation",
                    "level": "elementary",
                    "theme": "health_body_A2",
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
                    "topic": "Smartphones vs face-to-face conversation — which do we use more, and is that a problem?",
                    "sideA": "Smartphones",
                    "sideB": "Face-to-face",
                    "level": "elementary",
                    "theme": "technology_A2",
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
                    "topic": "Online banking vs going to the bank — which is better?",
                    "sideA": "Online",
                    "sideB": "Going to bank",
                    "level": "elementary",
                    "theme": "technology_A2",
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
                    "topic": "Working with paper vs working digitally — which is more efficient?",
                    "sideA": "Paper",
                    "sideB": "Digital",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Social media for networking vs meeting people in person — which is more useful professionally?",
                    "sideA": "Social media",
                    "sideB": "In person",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Package holiday vs independent travel — which is better for adults?",
                    "sideA": "Package",
                    "sideB": "Independent",
                    "level": "elementary",
                    "theme": "transport_travel_A2",
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
                    "topic": "City break vs beach holiday — which is a better way to relax?",
                    "sideA": "City break",
                    "sideB": "Beach holiday",
                    "level": "elementary",
                    "theme": "transport_travel_A2",
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
                    "topic": "One long holiday a year vs several short breaks — which is better?",
                    "sideA": "One long",
                    "sideB": "Several short",
                    "level": "elementary",
                    "theme": "transport_travel_A2",
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
                    "topic": "Travelling as a couple vs travelling alone — which is more enjoyable?",
                    "sideA": "As a couple",
                    "sideB": "Alone",
                    "level": "elementary",
                    "theme": "transport_travel_A2",
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
                    "topic": "Telling your partner about every small problem vs keeping things to yourself — which is healthier?",
                    "sideA": "Telling all",
                    "sideB": "Keeping to self",
                    "level": "elementary",
                    "theme": "relationships_dating_A2",
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
                    "topic": "Checking your phone first thing in the morning vs waiting until after breakfast — which is a better habit?",
                    "sideA": "First thing",
                    "sideB": "After breakfast",
                    "level": "elementary",
                    "theme": "neighbourhood_local_A2",
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
                    "topic": "Knowing your neighbours' names vs not knowing them — which is the more normal adult experience today?",
                    "sideA": "Knowing names",
                    "sideB": "Not knowing",
                    "level": "elementary",
                    "theme": "relationships_dating_A2",
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
                    "topic": "Grocery shopping with a list vs without a list — which type of person has a better life?",
                    "sideA": "With list",
                    "sideB": "Without list",
                    "level": "elementary",
                    "theme": "neighbourhood_local_A2",
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
                    "topic": "Telling your boss you are sick vs going to work sick — which is the braver choice?",
                    "sideA": "Telling boss",
                    "sideB": "Going sick",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Working full-time vs working part-time — which is better?",
                    "sideA": "Full-time",
                    "sideB": "Part-time",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Working in an office vs working from home — which is better?",
                    "sideA": "Office",
                    "sideB": "Home",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "A job you love vs a job that pays well — which is more important?",
                    "sideA": "Job you love",
                    "sideB": "Pays well",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Working with other people vs working alone — which is better?",
                    "sideA": "With people",
                    "sideB": "Alone",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "A short commute vs a long commute — which is more acceptable?",
                    "sideA": "Short",
                    "sideB": "Long",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Living alone vs living with a partner — which is better?",
                    "sideA": "Alone",
                    "sideB": "Partner",
                    "level": "elementary",
                    "theme": "relationships_dating_A2",
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
                    "topic": "Big city vs small town — which is a better place to live as an adult?",
                    "sideA": "Big city",
                    "sideB": "Small town",
                    "level": "elementary",
                    "theme": "transport_travel_A2",
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
                    "topic": "Cooking at home vs eating out — which is better for daily life?",
                    "sideA": "At home",
                    "sideB": "Eating out",
                    "level": "elementary",
                    "theme": "diet_nutrition_A2",
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
                    "topic": "Having children vs not having children — which life is better?",
                    "sideA": "Children",
                    "sideB": "No children",
                    "level": "elementary",
                    "theme": "relationships_dating_A2",
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
                    "topic": "Renting a flat vs buying a house — which is better for young adults?",
                    "sideA": "Renting",
                    "sideB": "Buying",
                    "level": "elementary",
                    "theme": "neighbourhood_local_A2",
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
                    "topic": "Exercise every day vs rest — which is better for your health?",
                    "sideA": "Exercise",
                    "sideB": "Rest",
                    "level": "elementary",
                    "theme": "health_body_A2",
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
                    "topic": "Going to the doctor vs waiting — which is better when you feel ill?",
                    "sideA": "Doctor",
                    "sideB": "Waiting",
                    "level": "elementary",
                    "theme": "health_body_A2",
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
                    "topic": "Sleeping eight hours vs sleeping less — which is more realistic for adults?",
                    "sideA": "8 hours",
                    "sideB": "Less",
                    "level": "elementary",
                    "theme": "health_body_A2",
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
                    "topic": "Walking to work vs taking the car — which is better for your health?",
                    "sideA": "Walking",
                    "sideB": "Car",
                    "level": "elementary",
                    "theme": "health_body_A2",
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
                    "topic": "Online shopping vs shopping in a store — which is better?",
                    "sideA": "Online",
                    "sideB": "Store",
                    "level": "elementary",
                    "theme": "neighbourhood_local_A2",
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
                    "topic": "Saving for the future vs enjoying money now — which is wiser?",
                    "sideA": "Saving",
                    "sideB": "Enjoying now",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Expensive things vs cheap things — which is better value?",
                    "sideA": "Expensive",
                    "sideB": "Cheap",
                    "level": "elementary",
                    "theme": "neighbourhood_local_A2",
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
                    "topic": "Buying new vs buying second-hand — which is better?",
                    "sideA": "New",
                    "sideB": "Second-hand",
                    "level": "elementary",
                    "theme": "neighbourhood_local_A2",
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
                    "topic": "Watching TV at home vs going out — which is a better evening?",
                    "sideA": "TV",
                    "sideB": "Going out",
                    "level": "elementary",
                    "theme": "interests_hobbies_A2",
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
                    "topic": "Holidays with family vs holidays with friends — which is better?",
                    "sideA": "Family",
                    "sideB": "Friends",
                    "level": "elementary",
                    "theme": "transport_travel_A2",
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
                    "topic": "Staying in your country vs travelling abroad — which is a better holiday?",
                    "sideA": "Your country",
                    "sideB": "Abroad",
                    "level": "elementary",
                    "theme": "transport_travel_A2",
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
                    "topic": "Sport vs reading — which is a better hobby for adults?",
                    "sideA": "Sport",
                    "sideB": "Reading",
                    "level": "elementary",
                    "theme": "interests_hobbies_A2",
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
                    "topic": "Seeing friends often vs having time alone — which is more important?",
                    "sideA": "Friends",
                    "sideB": "Alone",
                    "level": "elementary",
                    "theme": "relationships_dating_A2",
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
                    "topic": "Replying to emails immediately vs leaving them for later — which is more professional?",
                    "sideA": "Immediately",
                    "sideB": "Later",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Doing the dishes immediately vs leaving them until tomorrow — which is better?",
                    "sideA": "Immediately",
                    "sideB": "Tomorrow",
                    "level": "elementary",
                    "theme": "neighbourhood_local_A2",
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
                    "topic": "Being always early vs always five minutes late — which is worse at work?",
                    "sideA": "Early",
                    "sideB": "Late",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Having a very organised desk vs a messy desk — which person is more productive?",
                    "sideA": "Organised",
                    "sideB": "Messy",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Talking about work at dinner vs no work talk at dinner — which rule is better?",
                    "sideA": "Work talk",
                    "sideB": "No work talk",
                    "level": "elementary",
                    "theme": "neighbourhood_local_A2",
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
                    "topic": "Living with family vs Alone — which is better?",
                    "sideA": "With family",
                    "sideB": "Alone",
                    "level": "elementary",
                    "theme": "relationships_dating_A2",
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
                    "topic": "Having a brother vs Sister — which is better?",
                    "sideA": "Brother",
                    "sideB": "Sister",
                    "level": "elementary",
                    "theme": "relationships_dating_A2",
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
                    "topic": "Big vs Small family — which is nicer?",
                    "sideA": "Big family",
                    "sideB": "Small family",
                    "level": "elementary",
                    "theme": "relationships_dating_A2",
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
                    "topic": "Oldest vs Youngest child — which is better?",
                    "sideA": "Oldest",
                    "sideB": "Youngest",
                    "level": "elementary",
                    "theme": "relationships_dating_A2",
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
                    "topic": "Morning vs Afternoon school — which is better?",
                    "sideA": "Morning",
                    "sideB": "Afternoon",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Reading vs Maths — which is more fun?",
                    "sideA": "Reading",
                    "sideB": "Maths",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "School vs Home learning — which is better?",
                    "sideA": "School",
                    "sideB": "Home",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Homework vs No homework — which helps more?",
                    "sideA": "Homework",
                    "sideB": "None",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Alone vs Partner work — which is better?",
                    "sideA": "Alone",
                    "sideB": "Partner",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Paper vs Computer — which is better?",
                    "sideA": "Paper",
                    "sideB": "Computer",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Breakfast vs Dinner — which meal is more important?",
                    "sideA": "Breakfast",
                    "sideB": "Dinner",
                    "level": "elementary",
                    "theme": "diet_nutrition_A2",
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
                    "topic": "Hot vs Cold food — which is better?",
                    "sideA": "Hot",
                    "sideB": "Cold",
                    "level": "elementary",
                    "theme": "diet_nutrition_A2",
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
                    "topic": "Home vs Restaurant — which is better?",
                    "sideA": "Home",
                    "sideB": "Restaurant",
                    "level": "elementary",
                    "theme": "diet_nutrition_A2",
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
                    "topic": "Sweet vs Savoury — which is better?",
                    "sideA": "Sweet",
                    "sideB": "Savoury",
                    "level": "elementary",
                    "theme": "diet_nutrition_A2",
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
                    "topic": "Cooking vs Buying food — which is nicer?",
                    "sideA": "Cooking",
                    "sideB": "Buying",
                    "level": "elementary",
                    "theme": "diet_nutrition_A2",
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
                    "topic": "Early vs Late waking — which is better?",
                    "sideA": "Early",
                    "sideB": "Late",
                    "level": "elementary",
                    "theme": "neighbourhood_local_A2",
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
                    "topic": "Morning vs Evening — which part of the day is nicer?",
                    "sideA": "Morning",
                    "sideB": "Evening",
                    "level": "elementary",
                    "theme": "neighbourhood_local_A2",
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
                    "topic": "Weekdays vs Weekends — which is better?",
                    "sideA": "Weekdays",
                    "sideB": "Weekends",
                    "level": "elementary",
                    "theme": "neighbourhood_local_A2",
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
                    "topic": "Summer vs Winter — which season is better?",
                    "sideA": "Summer",
                    "sideB": "Winter",
                    "level": "elementary",
                    "theme": "environment_A2",
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
                    "topic": "Early vs Late bed — which is healthier?",
                    "sideA": "Early",
                    "sideB": "Late",
                    "level": "elementary",
                    "theme": "neighbourhood_local_A2",
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
                    "topic": "House vs Flat — which is better?",
                    "sideA": "House",
                    "sideB": "Flat",
                    "level": "elementary",
                    "theme": "neighbourhood_local_A2",
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
                    "topic": "City vs Countryside — which is a better place to live?",
                    "sideA": "City",
                    "sideB": "Countryside",
                    "level": "elementary",
                    "theme": "transport_travel_A2",
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
                    "topic": "Bedroom vs Living room — which room do you prefer?",
                    "sideA": "Bedroom",
                    "sideB": "Living room",
                    "level": "elementary",
                    "theme": "neighbourhood_local_A2",
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
                    "topic": "Indoor vs Outdoor games — which are more fun?",
                    "sideA": "Indoor",
                    "sideB": "Outdoor",
                    "level": "elementary",
                    "theme": "interests_hobbies_A2",
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
                    "topic": "Watching TV vs Book — which is better?",
                    "sideA": "TV",
                    "sideB": "Book",
                    "level": "elementary",
                    "theme": "interests_hobbies_A2",
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
                    "topic": "Sport vs Video game — which is more fun?",
                    "sideA": "Sport",
                    "sideB": "Video game",
                    "level": "elementary",
                    "theme": "interests_hobbies_A2",
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
                    "topic": "Drawing vs Singing — which hobby is better?",
                    "sideA": "Drawing",
                    "sideB": "Singing",
                    "level": "elementary",
                    "theme": "interests_hobbies_A2",
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
                    "topic": "Playing alone vs Friends — which is more fun?",
                    "sideA": "Alone",
                    "sideB": "Friends",
                    "level": "elementary",
                    "theme": "interests_hobbies_A2",
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
                    "topic": "Swimming vs Running — which sport do you prefer?",
                    "sideA": "Swimming",
                    "sideB": "Running",
                    "level": "elementary",
                    "theme": "interests_hobbies_A2",
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
                    "topic": "Music vs Sport — which is a better hobby?",
                    "sideA": "Music",
                    "sideB": "Sport",
                    "level": "elementary",
                    "theme": "interests_hobbies_A2",
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
                    "topic": "Farm vs Wild animals — which are more interesting?",
                    "sideA": "Farm",
                    "sideB": "Wild",
                    "level": "elementary",
                    "theme": "animals_nature_A2",
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
                    "topic": "Rain vs Sunshine — which weather do you prefer?",
                    "sideA": "Rain",
                    "sideB": "Sunshine",
                    "level": "elementary",
                    "theme": "environment_A2",
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
                    "topic": "Sea vs Mountains — which is better for a holiday?",
                    "sideA": "Sea",
                    "sideB": "Mountains",
                    "level": "elementary",
                    "theme": "transport_travel_A2",
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
                    "topic": "Flowers vs Trees — which are more beautiful?",
                    "sideA": "Flowers",
                    "sideB": "Trees",
                    "level": "elementary",
                    "theme": "environment_A2",
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
                    "topic": "Car vs Bus — which is better?",
                    "sideA": "Car",
                    "sideB": "Bus",
                    "level": "elementary",
                    "theme": "transport_travel_A2",
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
                    "topic": "Walking vs Cycling — which is better to get around?",
                    "sideA": "Walking",
                    "sideB": "Cycling",
                    "level": "elementary",
                    "theme": "transport_travel_A2",
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
                    "topic": "Short vs Long holiday — which is better?",
                    "sideA": "Short",
                    "sideB": "Long",
                    "level": "elementary",
                    "theme": "transport_travel_A2",
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
                    "topic": "Travelling alone vs Family — which is more fun?",
                    "sideA": "Alone",
                    "sideB": "Family",
                    "level": "elementary",
                    "theme": "transport_travel_A2",
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
                    "topic": "Online vs. In-person shopping",
                    "sideA": "Online",
                    "sideB": "In-person",
                    "level": "elementary",
                    "theme": "neighbourhood_local_A2",
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
                    "topic": "Paper books vs. E-books",
                    "sideA": "Paper",
                    "sideB": "E-books",
                    "level": "elementary",
                    "theme": "interests_hobbies_A2",
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
                    "topic": "Studying in the morning vs studying in the evening — when is it better?",
                    "sideA": "Morning",
                    "sideB": "Evening",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Strict teachers vs friendly teachers — who helps students more?",
                    "sideA": "Strict",
                    "sideB": "Friendly",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Learning with a textbook vs learning with videos — which is more effective?",
                    "sideA": "Textbook",
                    "sideB": "Videos",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Short lessons vs long lessons — which help you learn better?",
                    "sideA": "Short",
                    "sideB": "Long",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Group projects vs individual assignments — which is better?",
                    "sideA": "Group",
                    "sideB": "Individual",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "School uniform vs casual clothes at school — which is better?",
                    "sideA": "Uniform",
                    "sideB": "Casual",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Home-cooked meals vs fast food — which is better?",
                    "sideA": "Home-cooked",
                    "sideB": "Fast food",
                    "level": "elementary",
                    "theme": "diet_nutrition_A2",
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
                    "topic": "Three big meals vs many small snacks — which is healthier?",
                    "sideA": "Big meals",
                    "sideB": "Small snacks",
                    "level": "elementary",
                    "theme": "diet_nutrition_A2",
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
                    "topic": "Vegetarian food vs meat — which diet is better?",
                    "sideA": "Vegetarian",
                    "sideB": "Meat",
                    "level": "elementary",
                    "theme": "diet_nutrition_A2",
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
                    "topic": "Drinking tea vs drinking coffee — which is better?",
                    "sideA": "Tea",
                    "sideB": "Coffee",
                    "level": "elementary",
                    "theme": "diet_nutrition_A2",
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
                    "topic": "Eating alone vs eating with others — which is better?",
                    "sideA": "Alone",
                    "sideB": "With others",
                    "level": "elementary",
                    "theme": "diet_nutrition_A2",
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
                    "topic": "Playing a team sport vs playing an individual sport — which is better?",
                    "sideA": "Team sport",
                    "sideB": "Individual sport",
                    "level": "elementary",
                    "theme": "interests_hobbies_A2",
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
                    "topic": "Spending free time indoors vs outdoors — which is better?",
                    "sideA": "Indoors",
                    "sideB": "Outdoors",
                    "level": "elementary",
                    "theme": "interests_hobbies_A2",
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
                    "topic": "Cinema vs theatre — which is a better night out?",
                    "sideA": "Cinema",
                    "sideB": "Theatre",
                    "level": "elementary",
                    "theme": "interests_hobbies_A2",
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
                    "topic": "Listening to music vs playing an instrument — which is more enjoyable?",
                    "sideA": "Listening",
                    "sideB": "Playing",
                    "level": "elementary",
                    "theme": "interests_hobbies_A2",
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
                    "topic": "Video games vs board games — which are more fun?",
                    "sideA": "Video games",
                    "sideB": "Board games",
                    "level": "elementary",
                    "theme": "interests_hobbies_A2",
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
                    "topic": "Going shopping vs staying home — which is a better way to spend the weekend?",
                    "sideA": "Shopping",
                    "sideB": "Staying home",
                    "level": "elementary",
                    "theme": "interests_hobbies_A2",
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
                    "topic": "Mobile phone vs computer — which is more useful in daily life?",
                    "sideA": "Mobile",
                    "sideB": "Computer",
                    "level": "elementary",
                    "theme": "technology_A2",
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
                    "topic": "Sending a message vs making a phone call — which is better?",
                    "sideA": "Message",
                    "sideB": "Call",
                    "level": "elementary",
                    "theme": "technology_A2",
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
                    "topic": "E-book vs paper book — which is better to read?",
                    "sideA": "E-book",
                    "sideB": "Paper book",
                    "level": "elementary",
                    "theme": "interests_hobbies_A2",
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
                    "topic": "Taking photos with your phone vs with a camera — which gives better results?",
                    "sideA": "Phone",
                    "sideB": "Camera",
                    "level": "elementary",
                    "theme": "technology_A2",
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
                    "topic": "Holiday at the beach vs holiday in the mountains — which is better?",
                    "sideA": "Beach",
                    "sideB": "Mountains",
                    "level": "elementary",
                    "theme": "transport_travel_A2",
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
                    "topic": "Travelling by train vs travelling by plane — which is better?",
                    "sideA": "Train",
                    "sideB": "Plane",
                    "level": "elementary",
                    "theme": "transport_travel_A2",
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
                    "topic": "Visiting a famous city vs visiting a small village — which is more interesting?",
                    "sideA": "City",
                    "sideB": "Village",
                    "level": "elementary",
                    "theme": "transport_travel_A2",
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
                    "topic": "Staying in a hotel vs staying with a local family — which is better?",
                    "sideA": "Hotel",
                    "sideB": "Local family",
                    "level": "elementary",
                    "theme": "transport_travel_A2",
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
                    "topic": "Travelling abroad vs exploring your own country — which is more worthwhile?",
                    "sideA": "Abroad",
                    "sideB": "Own country",
                    "level": "elementary",
                    "theme": "transport_travel_A2",
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
                    "topic": "Having many friends vs having a few close friends — which is better?",
                    "sideA": "Many friends",
                    "sideB": "Close friends",
                    "level": "elementary",
                    "theme": "relationships_dating_A2",
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
                    "topic": "Meeting friends in person vs chatting online — which is more satisfying?",
                    "sideA": "In person",
                    "sideB": "Online",
                    "level": "elementary",
                    "theme": "relationships_dating_A2",
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
                    "topic": "Living with parents vs living in a student flat — which is better for young people?",
                    "sideA": "With parents",
                    "sideB": "Student flat",
                    "level": "elementary",
                    "theme": "relationships_dating_A2",
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
                    "topic": "Celebrating birthdays at home vs going out — which is nicer?",
                    "sideA": "Home",
                    "sideB": "Going out",
                    "level": "elementary",
                    "theme": "relationships_dating_A2",
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
                    "topic": "Saving money vs spending money — which is wiser?",
                    "sideA": "Saving",
                    "sideB": "Spending",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Working part-time while studying vs focusing only on school — which is better?",
                    "sideA": "Part-time",
                    "sideB": "Focus school",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Earning a lot of money vs having free time — which matters more?",
                    "sideA": "Money",
                    "sideB": "Free time",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Living with grandparents vs not living with them — which is nicer?",
                    "sideA": "With grandparents",
                    "sideB": "Not living with them",
                    "level": "elementary",
                    "theme": "relationships_dating_A2",
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
                    "topic": "Mum's cooking vs dad's cooking — which is better?",
                    "sideA": "Mum's",
                    "sideB": "Dad's",
                    "level": "elementary",
                    "theme": "diet_nutrition_A2",
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
                    "topic": "Maths vs art — which subject is more fun?",
                    "sideA": "Maths",
                    "sideB": "Art",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Writing on paper vs typing on a tablet — which is better?",
                    "sideA": "Paper",
                    "sideB": "Tablet",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Pizza vs pasta — which is nicer?",
                    "sideA": "Pizza",
                    "sideB": "Pasta",
                    "level": "elementary",
                    "theme": "diet_nutrition_A2",
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
                    "topic": "Ice cream vs cake — which is a better dessert?",
                    "sideA": "Ice cream",
                    "sideB": "Cake",
                    "level": "elementary",
                    "theme": "diet_nutrition_A2",
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
                    "topic": "Short days vs long days — which is better?",
                    "sideA": "Short days",
                    "sideB": "Long days",
                    "level": "elementary",
                    "theme": "environment_A2",
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
                    "topic": "Day at the park vs day at the beach — which is better?",
                    "sideA": "Park",
                    "sideB": "Beach",
                    "level": "elementary",
                    "theme": "transport_travel_A2",
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
                    "topic": "Plane vs train — which is more fun?",
                    "sideA": "Plane",
                    "sideB": "Train",
                    "level": "elementary",
                    "theme": "transport_travel_A2",
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
                    "topic": "Morning shower vs evening shower — which is better?",
                    "sideA": "Morning",
                    "sideB": "Evening",
                    "level": "elementary",
                    "theme": "neighbourhood_local_A2",
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
                    "topic": "Cats that knock things off tables vs dogs that chew shoes — which pet is more annoying?",
                    "sideA": "Cats",
                    "sideB": "Dogs",
                    "level": "elementary",
                    "theme": "animals_nature_A2",
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
                    "topic": "Eating pizza with a fork vs eating pizza with your hands — which is correct?",
                    "sideA": "Fork",
                    "sideB": "Hands",
                    "level": "elementary",
                    "theme": "diet_nutrition_A2",
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
                    "topic": "Sleeping with socks on vs sleeping without socks — which is better?",
                    "sideA": "Socks on",
                    "sideB": "No socks",
                    "level": "elementary",
                    "theme": "neighbourhood_local_A2",
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
                    "topic": "Sandcastle vs snowman — which is more fun to build?",
                    "sideA": "Sandcastle",
                    "sideB": "Snowman",
                    "level": "elementary",
                    "theme": "interests_hobbies_A2",
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
                    "topic": "Lots of exams vs very few exams — which is fairer?",
                    "sideA": "Lots of exams",
                    "sideB": "Very few exams",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Starting school at 7 vs starting school at 5 — which is better for children?",
                    "sideA": "At 7",
                    "sideB": "At 5",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Eating slowly vs eating quickly — which is better for you?",
                    "sideA": "Slowly",
                    "sideB": "Quickly",
                    "level": "elementary",
                    "theme": "health_body_A2",
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
                    "topic": "Cooking at home vs ordering food online — which is better?",
                    "sideA": "Cooking at home",
                    "sideB": "Ordering online",
                    "level": "elementary",
                    "theme": "diet_nutrition_A2",
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
                    "topic": "Cooking vs baking — which is more fun as a hobby?",
                    "sideA": "Cooking",
                    "sideB": "Baking",
                    "level": "elementary",
                    "theme": "interests_hobbies_A2",
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
                    "topic": "Going to the gym vs exercising outside — which is better?",
                    "sideA": "Gym",
                    "sideB": "Outside",
                    "level": "elementary",
                    "theme": "health_body_A2",
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
                    "topic": "Photos on your phone vs printed photos — which is better?",
                    "sideA": "Phone photos",
                    "sideB": "Printed photos",
                    "level": "elementary",
                    "theme": "technology_A2",
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
                    "topic": "Smart TV vs computer screen — which is better for watching films?",
                    "sideA": "Smart TV",
                    "sideB": "Computer",
                    "level": "elementary",
                    "theme": "technology_A2",
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
                    "topic": "Hot country vs cold country — which is a better holiday destination?",
                    "sideA": "Hot country",
                    "sideB": "Cold country",
                    "level": "elementary",
                    "theme": "transport_travel_A2",
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
                    "topic": "Giving presents vs receiving presents — which is better?",
                    "sideA": "Giving",
                    "sideB": "Receiving",
                    "level": "elementary",
                    "theme": "relationships_dating_A2",
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
                    "topic": "Working indoors vs working outdoors — which is better?",
                    "sideA": "Indoors",
                    "sideB": "Outdoors",
                    "level": "elementary",
                    "theme": "career_development_A2",
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
                    "topic": "Pineapple on pizza vs no pineapple on pizza — which is correct?",
                    "sideA": "Pineapple",
                    "sideB": "No pineapple",
                    "level": "elementary",
                    "theme": "diet_nutrition_A2",
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
                    "topic": "Putting milk in first vs putting tea in first — which is better?",
                    "sideA": "Milk first",
                    "sideB": "Tea first",
                    "level": "elementary",
                    "theme": "diet_nutrition_A2",
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
                    "topic": "Monday vs Friday — which day is actually worse?",
                    "sideA": "Monday",
                    "sideB": "Friday",
                    "level": "elementary",
                    "theme": "neighbourhood_local_A2",
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
                    "topic": "Waking up five minutes before the alarm vs sleeping until the alarm — which is more annoying?",
                    "sideA": "Before alarm",
                    "sideB": "Until alarm",
                    "level": "elementary",
                    "theme": "neighbourhood_local_A2",
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
                    "topic": "Cats vs dogs — which animal is secretly the boss of the house?",
                    "sideA": "Cats",
                    "sideB": "Dogs",
                    "level": "elementary",
                    "theme": "animals_nature_A2",
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
                    "topic": "Being too hot vs being too cold — which is worse?",
                    "sideA": "Too hot",
                    "sideB": "Too cold",
                    "level": "elementary",
                    "theme": "environment_A2",
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