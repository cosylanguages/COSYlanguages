(function() {
    const data = [{
                "topic": "A high salary vs a short commute — which matters more in a job?",
                "sideA": "High salary",
                "sideB": "Short commute",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Buy more things", "Financial security"],
                "ideasB": ["Save time every day", "Less stress"]
            },
            {
                "topic": "Changing jobs often vs staying in the same company — which is better for your career?",
                "sideA": "Changing jobs",
                "sideB": "Staying",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Learn new skills", "Higher salary"],
                "ideasB": ["Better stability", "Stronger relationships"]
            },
            {
                "topic": "Working overtime vs leaving on time every day — which is the better habit?",
                "sideA": "Overtime",
                "sideB": "On time",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Finish more work", "Impress the boss"],
                "ideasB": ["Personal well-being", "Better focus tomorrow"]
            },
            {
                "topic": "A boss who is strict vs a boss who is relaxed — which is better to work for?",
                "sideA": "Strict boss",
                "sideB": "Relaxed boss",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Clearer rules", "Higher standards"],
                "ideasB": ["More creativity", "Less pressure"]
            },
            {
                "topic": "Working in a big company vs a small company — which is better?",
                "sideA": "Big company",
                "sideB": "Small company",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["More opportunities", "Better benefits"],
                "ideasB": ["Friendly atmosphere", "More responsibility"]
            },
            {
                "topic": "Getting a promotion vs getting more free time — which would you choose?",
                "sideA": "Promotion",
                "sideB": "Free time",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Higher status", "Professional growth"],
                "ideasB": ["Family activities", "Hobby development"]
            },
            {
                "topic": "Buying a house vs renting for life — which is the smarter financial decision?",
                "sideA": "Buying",
                "sideB": "Renting",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Long-term investment", "Total freedom"],
                "ideasB": ["Greater flexibility", "No repair costs"]
            },
            {
                "topic": "Living in the city centre vs living in the suburbs — which is better?",
                "sideA": "City centre",
                "sideB": "Suburbs",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Close to shops", "Great nightlife"],
                "ideasB": ["Quiet environment", "Better for children"]
            },
            {
                "topic": "Spending money on experiences vs on things — which makes you happier?",
                "sideA": "Experiences",
                "sideB": "Things",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Great memories", "Personal growth"],
                "ideasB": ["Practical use", "Long-lasting value"]
            },
            {
                "topic": "Cooking every day vs meal prepping once a week — which is more practical?",
                "sideA": "Daily cooking",
                "sideB": "Meal prepping",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Fresh ingredients", "More variety"],
                "ideasB": ["Saves time", "Better organization"]
            },
            {
                "topic": "Having a cleaner vs doing your own housework — which is a better choice?",
                "sideA": "Cleaner",
                "sideB": "Do it yourself",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Saves energy", "Professional quality"],
                "ideasB": ["Saves money", "Total control"]
            },
            {
                "topic": "Living with a partner vs living alone — which is better for adults?",
                "sideA": "With partner",
                "sideB": "Alone",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Sharing costs", "Constant company"],
                "ideasB": ["Independence", "Complete silence"]
            },
            {
                "topic": "Having children early vs having children later in life — which is better?",
                "sideA": "Early",
                "sideB": "Later",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["More energy", "Grow up together"],
                "ideasB": ["Financial stability", "More life experience"]
            },
            {
                "topic": "Close family relationships vs independence from family — which is more important as an adult?",
                "sideA": "Close relationships",
                "sideB": "Independence",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Emotional support", "Strong traditions"],
                "ideasB": ["Personal freedom", "Decision making"]
            },
            {
                "topic": "Meeting new people vs keeping old friendships — which is more valuable?",
                "sideA": "New people",
                "sideB": "Old friends",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["New perspectives", "Networking"],
                "ideasB": ["Shared history", "Deep trust"]
            },
            {
                "topic": "Socialising after work vs going straight home — which is better for work relationships?",
                "sideA": "Socialising",
                "sideB": "Going home",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Better teamwork", "Informal chat"],
                "ideasB": ["Energy recovery", "Family time"]
            },
            {
                "topic": "Going to the gym vs exercising outdoors — which is better for adults?",
                "sideA": "Gym",
                "sideB": "Outdoors",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Modern equipment", "Professional trainers"],
                "ideasB": ["Fresh air", "No membership fees"]
            },
            {
                "topic": "Strict diet vs eating everything in moderation — which is healthier?",
                "sideA": "Strict diet",
                "sideB": "Moderation",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Fast results", "Discipline"],
                "ideasB": ["Long-term balance", "Enjoying food"]
            },
            {
                "topic": "Seeing a doctor early vs waiting to see if you get better — which is wiser?",
                "sideA": "Early",
                "sideB": "Waiting",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Fast treatment", "Prevent problems"],
                "ideasB": ["Natural recovery", "Avoid medicine"]
            },
            {
                "topic": "Sleeping eight hours vs sleeping six but exercising — which is better for energy?",
                "sideA": "8 hours",
                "sideB": "6 hours + exercise",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Full recovery", "Better mood"],
                "ideasB": ["Higher fitness", "Active body"]
            },
            {
                "topic": "Reducing stress through sport vs through relaxation — which works better?",
                "sideA": "Sport",
                "sideB": "Relaxation",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Physical release", "Higher energy"],
                "ideasB": ["Mental peace", "Calm mind"]
            },
            {
                "topic": "Smartphones vs face-to-face conversation — which do we use more, and is that a problem?",
                "sideA": "Smartphones",
                "sideB": "Face-to-face",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": ["Instant access", "Stay connected"],
                "ideasB": ["Real emotions", "Better focus"]
            },
            {
                "topic": "Online banking vs going to the bank — which is better?",
                "sideA": "Online",
                "sideB": "Going to bank",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": ["Very convenient", "Available 24/7"],
                "ideasB": ["Personal advice", "Physical security"]
            },
            {
                "topic": "Working with paper vs working digitally — which is more efficient?",
                "sideA": "Paper",
                "sideB": "Digital",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Better focus", "No eye strain"],
                "ideasB": ["Easier storage", "Faster search"]
            },
            {
                "topic": "Social media for networking vs meeting people in person — which is more useful professionally?",
                "sideA": "Social media",
                "sideB": "In person",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Global reach", "Quick contact"],
                "ideasB": ["Stronger trust", "Personal impact"]
            },
            {
                "topic": "Package holiday vs independent travel — which is better for adults?",
                "sideA": "Package",
                "sideB": "Independent",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["No planning stress", "Safety guaranteed"],
                "ideasB": ["True adventure", "Local experiences"]
            },
            {
                "topic": "City break vs beach holiday — which is a better way to relax?",
                "sideA": "City break",
                "sideB": "Beach holiday",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Cultural visits", "Great food"],
                "ideasB": ["Ocean breeze", "Total relaxation"]
            },
            {
                "topic": "One long holiday a year vs several short breaks — which is better?",
                "sideA": "One long",
                "sideB": "Several short",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Deep rest", "Distant travel"],
                "ideasB": ["Regular breaks", "More destinations"]
            },
            {
                "topic": "Travelling as a couple vs travelling alone — which is more enjoyable?",
                "sideA": "As a couple",
                "sideB": "Alone",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Shared memories", "Lower costs"],
                "ideasB": ["Personal choice", "Meeting locals"]
            },
            {
                "topic": "Telling your partner about every small problem vs keeping things to yourself — which is healthier?",
                "sideA": "Telling all",
                "sideB": "Keeping to self",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Full honesty", "Mutual support"],
                "ideasB": ["Avoid drama", "Internal peace"]
            },
            {
                "topic": "Checking your phone first thing in the morning vs waiting until after breakfast — which is a better habit?",
                "sideA": "First thing",
                "sideB": "After breakfast",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Quick news", "Plan day"],
                "ideasB": ["Quiet start", "Mindful eating"]
            },
            {
                "topic": "Knowing your neighbours' names vs not knowing them — which is the more normal adult experience today?",
                "sideA": "Knowing names",
                "sideB": "Not knowing",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Sense of community", "Mutual help"],
                "ideasB": ["Total privacy", "Avoid gossip"]
            },
            {
                "topic": "Grocery shopping with a list vs without a list — which type of person has a better life?",
                "sideA": "With list",
                "sideB": "Without list",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Organized living", "Saves money"],
                "ideasB": ["Spontaneous choices", "Creative cooking"]
            },
            {
                "topic": "Telling your boss you are sick vs going to work sick — which is the braver choice?",
                "sideA": "Telling boss",
                "sideB": "Going sick",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Protect colleagues", "Faster recovery"],
                "ideasB": ["Show commitment", "Finish deadlines"]
            },
            {
                "topic": "Working full-time vs working part-time — which is better?",
                "sideA": "Full-time",
                "sideB": "Part-time",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Career growth", "Financial stability"],
                "ideasB": ["Better balance", "Study time"]
            },
            {
                "topic": "Working in an office vs working from home — which is better?",
                "sideA": "Office",
                "sideB": "Home",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Social contact", "Professional setup"],
                "ideasB": ["No commuting", "Flexible hours"]
            },
            {
                "topic": "A job you love vs a job that pays well — which is more important?",
                "sideA": "Job you love",
                "sideB": "Pays well",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Daily passion", "Low stress"],
                "ideasB": ["Financial freedom", "Quality life"]
            },
            {
                "topic": "Working with other people vs working alone — which is better?",
                "sideA": "With people",
                "sideB": "Alone",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Team support", "Multiple ideas"],
                "ideasB": ["Quiet focus", "Independent work"]
            },
            {
                "topic": "A short commute vs a long commute — which is more acceptable?",
                "sideA": "Short",
                "sideB": "Long",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["More free time", "Less travel"],
                "ideasB": ["Cheaper housing", "Podcast time"]
            },
            {
                "topic": "Living alone vs living with a partner — which is better?",
                "sideA": "Alone",
                "sideB": "Partner",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Personal space", "Independence"],
                "ideasB": ["Shared life", "Daily support"]
            },
            {
                "topic": "Big city vs small town — which is a better place to live as an adult?",
                "sideA": "Big city",
                "sideB": "Small town",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Job markets", "Entertainment"],
                "ideasB": ["Lower costs", "Clean air"]
            },
            {
                "topic": "Cooking at home vs eating out — which is better for daily life?",
                "sideA": "At home",
                "sideB": "Eating out",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Healther meals", "Lower costs"],
                "ideasB": ["No cleaning", "Professional food"]
            },
            {
                "topic": "Having children vs not having children — which life is better?",
                "sideA": "Children",
                "sideB": "No children",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Family legacy", "Love and joy"],
                "ideasB": ["Freedom of travel", "Career focus"]
            },
            {
                "topic": "Renting a flat vs buying a house — which is better for young adults?",
                "sideA": "Renting",
                "sideB": "Buying",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Mobility", "Fewer worries"],
                "ideasB": ["Equity building", "Garden space"]
            },
            {
                "topic": "Exercise every day vs rest — which is better for your health?",
                "sideA": "Exercise",
                "sideB": "Rest",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Physical fitness", "Energy levels"],
                "ideasB": ["Muscle recovery", "Mental health"]
            },
            {
                "topic": "Going to the doctor vs waiting — which is better when you feel ill?",
                "sideA": "Doctor",
                "sideB": "Waiting",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Expert advice", "Quick recovery"],
                "ideasB": ["Avoid clinics", "Natural healing"]
            },
            {
                "topic": "Sleeping eight hours vs sleeping less — which is more realistic for adults?",
                "sideA": "8 hours",
                "sideB": "Less",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Maximum focus", "Better mood"],
                "ideasB": ["Work-life reality", "Evening hobbies"]
            },
            {
                "topic": "Walking to work vs taking the car — which is better for your health?",
                "sideA": "Walking",
                "sideB": "Car",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Active movement", "Fresh start"],
                "ideasB": ["Weather protection", "Saves energy"]
            },
            {
                "topic": "Online shopping vs shopping in a store — which is better?",
                "sideA": "Online",
                "sideB": "Store",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Convenience", "Better prices"],
                "ideasB": ["Try clothes", "Local support"]
            },
            {
                "topic": "Saving for the future vs enjoying money now — which is wiser?",
                "sideA": "Saving",
                "sideB": "Enjoying now",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Security later", "Investment"],
                "ideasB": ["Mental happiness", "Experience life"]
            },
            {
                "topic": "Expensive things vs cheap things — which is better value?",
                "sideA": "Expensive",
                "sideB": "Cheap",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Higher quality", "Durability"],
                "ideasB": ["Low risk", "Save money"]
            },
            {
                "topic": "Buying new vs buying second-hand — which is better?",
                "sideA": "New",
                "sideB": "Second-hand",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Pristine condition", "Guarantees"],
                "ideasB": ["Environmentally friendly", "Low prices"]
            },
            {
                "topic": "Watching TV at home vs going out — which is a better evening?",
                "sideA": "TV",
                "sideB": "Going out",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Relaxation", "Zero cost"],
                "ideasB": ["Social contact", "New atmosphere"]
            },
            {
                "topic": "Holidays with family vs holidays with friends — which is better?",
                "sideA": "Family",
                "sideB": "Friends",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Deep bonding", "Financial help"],
                "ideasB": ["Shared hobbies", "High energy"]
            },
            {
                "topic": "Staying in your country vs travelling abroad — which is a better holiday?",
                "sideA": "Your country",
                "sideB": "Abroad",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Local support", "Easy travel"],
                "ideasB": ["Foreign cultures", "New languages"]
            },
            {
                "topic": "Sport vs reading — which is a better hobby for adults?",
                "sideA": "Sport",
                "sideB": "Reading",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Physical fitness", "Team spirit"],
                "ideasB": ["Mental growth", "Relaxation"]
            },
            {
                "topic": "Seeing friends often vs having time alone — which is more important?",
                "sideA": "Friends",
                "sideB": "Alone",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Social support", "Good laughter"],
                "ideasB": ["Self-reflection", "Mental peace"]
            },
            {
                "topic": "Replying to emails immediately vs leaving them for later — which is more professional?",
                "sideA": "Immediately",
                "sideB": "Later",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["High efficiency", "Reliability"],
                "ideasB": ["Thoughtful reply", "Better focus"]
            },
            {
                "topic": "Doing the dishes immediately vs leaving them until tomorrow — which is better?",
                "sideA": "Immediately",
                "sideB": "Tomorrow",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Clean kitchen", "Morning peace"],
                "ideasB": ["Evening rest", "Time with family"]
            },
            {
                "topic": "Being always early vs always five minutes late — which is worse at work?",
                "sideA": "Early",
                "sideB": "Late",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Waiting time", "Productivity gap"],
                "ideasB": ["Unprofessional", "Missing starts"]
            },
            {
                "topic": "Having a very organised desk vs a messy desk — which person is more productive?",
                "sideA": "Organised",
                "sideB": "Messy",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Find things quickly", "Clear mind"],
                "ideasB": ["Creative chaos", "Fast access"]
            },
            {
                "topic": "Talking about work at dinner vs no work talk at dinner — which rule is better?",
                "sideA": "Work talk",
                "sideB": "No work talk",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Share problems", "Team bonding"],
                "ideasB": ["Full disconnect", "Quality relaxation"]
            },
            {
                "topic": "Living with family vs Alone — which is better?",
                "sideA": "With family",
                "sideB": "Alone",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Constant company", "Support system"],
                "ideasB": ["Total independence", "Privacy"]
            },
            {
                "topic": "Having a brother vs Sister — which is better?",
                "sideA": "Brother",
                "sideB": "Sister",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Play sports", "Protection"],
                "ideasB": ["Deep talks", "Sharing secrets"]
            },
            {
                "topic": "Big vs Small family — which is nicer?",
                "sideA": "Big family",
                "sideB": "Small family",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Crowded house", "Lots of fun"],
                "ideasB": ["Quiet life", "Closer bonds"]
            },
            {
                "topic": "Oldest vs Youngest child — which is better?",
                "sideA": "Oldest",
                "sideB": "Youngest",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Leadership skills", "Responsibility"],
                "ideasB": ["Extra attention", "More relaxed"]
            },
            {
                "topic": "Morning vs Afternoon school — which is better?",
                "sideA": "Morning",
                "sideB": "Afternoon",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Free afternoon", "Better routine"],
                "ideasB": ["Sleep late", "Quiet start"]
            },
            {
                "topic": "Reading vs Maths — which is more fun?",
                "sideA": "Reading",
                "sideB": "Maths",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Entertaining stories", "Vocabulary"],
                "ideasB": ["Problem solving", "Logic"]
            },
            {
                "topic": "School vs Home learning — which is better?",
                "sideA": "School",
                "sideB": "Home",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Social contact", "Teacher help"],
                "ideasB": ["Comfortable setup", "Flexible hours"]
            },
            {
                "topic": "Homework vs No homework — which helps more?",
                "sideA": "Homework",
                "sideB": "None",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Reinforce lessons", "Self-discipline"],
                "ideasB": ["More free time", "Mental rest"]
            },
            {
                "topic": "Alone vs Partner work — which is better?",
                "sideA": "Alone",
                "sideB": "Partner",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Deep focus", "Independent study"],
                "ideasB": ["Shared knowledge", "Collaborative fun"]
            },
            {
                "topic": "Paper vs Computer — which is better?",
                "sideA": "Paper",
                "sideB": "Computer",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Tactile feeling", "Better memory"],
                "ideasB": ["Speed of typing", "Digital search"]
            },
            {
                "topic": "Breakfast vs Dinner — which meal is more important?",
                "sideA": "Breakfast",
                "sideB": "Dinner",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Morning energy", "Healthy habits"],
                "ideasB": ["Family gathering", "Main meal"]
            },
            {
                "topic": "Hot vs Cold food — which is better?",
                "sideA": "Hot",
                "sideB": "Cold",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Comforting winter", "Cooked taste"],
                "ideasB": ["Fresh summer", "Salad variety"]
            },
            {
                "topic": "Home vs Restaurant — which is better?",
                "sideA": "Home",
                "sideB": "Restaurant",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Control ingredients", "Cheaper costs"],
                "ideasB": ["Professional chefs", "No cleaning"]
            },
            {
                "topic": "Sweet vs Savoury — which is better?",
                "sideA": "Sweet",
                "sideB": "Savoury",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Instant energy", "Dessert treats"],
                "ideasB": ["Nutritional value", "Fuller longer"]
            },
            {
                "topic": "Cooking vs Buying food — which is nicer?",
                "sideA": "Cooking",
                "sideB": "Buying",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Creative process", "Healthy choices"],
                "ideasB": ["Total convenience", "Saves time"]
            },
            {
                "topic": "Early vs Late waking — which is better?",
                "sideA": "Early",
                "sideB": "Late",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Productive hours", "Quiet sunrise"],
                "ideasB": ["Full rest", "Night energy"]
            },
            {
                "topic": "Morning vs Evening — which part of the day is nicer?",
                "sideA": "Morning",
                "sideB": "Evening",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Fresh atmosphere", "New start"],
                "ideasB": ["Social time", "Relaxation"]
            },
            {
                "topic": "Weekdays vs Weekends — which is better?",
                "sideA": "Weekdays",
                "sideB": "Weekends",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Productive work", "Social structure"],
                "ideasB": ["Total freedom", "Time for hobbies"]
            },
            {
                "topic": "Summer vs Winter — which season is better?",
                "sideA": "Summer",
                "sideB": "Winter",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": ["Sunny beaches", "Outdoor life"],
                "ideasB": ["Snow activities", "Cozy atmosphere"]
            },
            {
                "topic": "Early vs Late bed — which is healthier?",
                "sideA": "Early",
                "sideB": "Late",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Natural rhythm", "Better mood"],
                "ideasB": ["Evening creativity", "Movie time"]
            },
            {
                "topic": "House vs Flat — which is better?",
                "sideA": "House",
                "sideB": "Flat",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Private garden", "More space"],
                "ideasB": ["Easy cleaning", "Central location"]
            },
            {
                "topic": "City vs Countryside — which is a better place to live?",
                "sideA": "City",
                "sideB": "Countryside",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Cultural life", "Job markets"],
                "ideasB": ["Fresh air", "Quiet nature"]
            },
            {
                "topic": "Bedroom vs Living room — which room do you prefer?",
                "sideA": "Bedroom",
                "sideB": "Living room",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Total privacy", "Sleep haven"],
                "ideasB": ["Family space", "Large TV"]
            },
            {
                "topic": "Indoor vs Outdoor games — which are more fun?",
                "sideA": "Indoor",
                "sideB": "Outdoor",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Board game fun", "No weather issues"],
                "ideasB": ["Active movement", "Sunlight benefit"]
            },
            {
                "topic": "Watching TV vs Book — which is better?",
                "sideA": "TV",
                "sideB": "Book",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Visual stories", "Easy relaxation"],
                "ideasB": ["Deep imagination", "Vocabulary growth"]
            },
            {
                "topic": "Sport vs Video game — which is more fun?",
                "sideA": "Sport",
                "sideB": "Video game",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Physical fitness", "Social team"],
                "ideasB": ["Strategic skills", "Digital worlds"]
            },
            {
                "topic": "Drawing vs Singing — which hobby is better?",
                "sideA": "Drawing",
                "sideB": "Singing",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Visual creativity", "Quiet time"],
                "ideasB": ["Emotional release", "Musicality"]
            },
            {
                "topic": "Playing alone vs Friends — which is more fun?",
                "sideA": "Alone",
                "sideB": "Friends",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Deep concentration", "Independence"],
                "ideasB": ["Shared laughter", "Collaborative play"]
            },
            {
                "topic": "Swimming vs Running — which sport do you prefer?",
                "sideA": "Swimming",
                "sideB": "Running",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Cool water", "Joint safety"],
                "ideasB": ["Easy to start", "Outdoor views"]
            },
            {
                "topic": "Music vs Sport — which is a better hobby?",
                "sideA": "Music",
                "sideB": "Sport",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Emotional peace", "Cultural growth"],
                "ideasB": ["Physical fitness", "Team success"]
            },
            {
                "topic": "Farm vs Wild animals — which are more interesting?",
                "sideA": "Farm",
                "sideB": "Wild",
                "level": "elementary",
                "theme": "animals_nature_A2",
                "ideasA": ["Useful products", "Friendly pets"],
                "ideasB": ["Exotic biomes", "Natural mystery"]
            },
            {
                "topic": "Rain vs Sunshine — which weather do you prefer?",
                "sideA": "Rain",
                "sideB": "Sunshine",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": ["Plant growth", "Cozy indoor mood"],
                "ideasB": ["Beach weather", "Vitamin D"]
            },
            {
                "topic": "Sea vs Mountains — which is better for a holiday?",
                "sideA": "Sea",
                "sideB": "Mountains",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Swimming fun", "Relaxing sounds"],
                "ideasB": ["Fresh air", "Mountain views"]
            },
            {
                "topic": "Flowers vs Trees — which are more beautiful?",
                "sideA": "Flowers",
                "sideB": "Trees",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": ["Vibrant colours", "Sweet scents"],
                "ideasB": ["Majestic height", "Vital oxygen"]
            },
            {
                "topic": "Car vs Bus — which is better?",
                "sideA": "Car",
                "sideB": "Bus",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Private travel", "Door-to-door"],
                "ideasB": ["Cheaper costs", "Better for nature"]
            },
            {
                "topic": "Walking vs Cycling — which is better to get around?",
                "sideA": "Walking",
                "sideB": "Cycling",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Simplest travel", "Health benefits"],
                "ideasB": ["Higher speed", "Distant range"]
            },
            {
                "topic": "Short vs Long holiday — which is better?",
                "sideA": "Short",
                "sideB": "Long",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Frequent breaks", "Lower budget"],
                "ideasB": ["Complete reset", "Cultural immersion"]
            },
            {
                "topic": "Travelling alone vs Family — which is more fun?",
                "sideA": "Alone",
                "sideB": "Family",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Personal growth", "Freedom"],
                "ideasB": ["Shared joy", "Financial support"]
            },
            {
                "topic": "Online vs. In-person shopping",
                "sideA": "Online",
                "sideB": "In-person",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [
                    "Convenience",
                    "Better prices"
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
                    "Scent/Feel",
                    "Collectable"
                ],
                "ideasB": [
                    "Portability",
                    "Space saving"
                ]
            },
            {
                "topic": "Studying in the morning vs studying in the evening — when is it better?",
                "sideA": "Morning",
                "sideB": "Evening",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Fresh brain", "Zero distractions"],
                "ideasB": ["Quiet night", "Review day"]
            },
            {
                "topic": "Strict teachers vs friendly teachers — who helps students more?",
                "sideA": "Strict",
                "sideB": "Friendly",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["High discipline", "Clear standards"],
                "ideasB": ["Motivation", "Open questions"]
            },
            {
                "topic": "Learning with a textbook vs learning with videos — which is more effective?",
                "sideA": "Textbook",
                "sideB": "Videos",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Structured lessons", "Tactile learning"],
                "ideasB": ["Visual aids", "Modern content"]
            },
            {
                "topic": "Short lessons vs long lessons — which help you learn better?",
                "sideA": "Short",
                "sideB": "Long",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Better focus", "Less fatigue"],
                "ideasB": ["Deep immersion", "Detailed study"]
            },
            {
                "topic": "Group projects vs individual assignments — which is better?",
                "sideA": "Group",
                "sideB": "Individual",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Collaboration", "Idea exchange"],
                "ideasB": ["Self-reliance", "Personal focus"]
            },
            {
                "topic": "School uniform vs casual clothes at school — which is better?",
                "sideA": "Uniform",
                "sideB": "Casual",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Student equality", "Morning simplicity"],
                "ideasB": ["Self-expression", "Comfort"]
            },
            {
                "topic": "Home-cooked meals vs fast food — which is better?",
                "sideA": "Home-cooked",
                "sideB": "Fast food",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Healthier choice", "Control recipes"],
                "ideasB": ["Instant service", "Convenience"]
            },
            {
                "topic": "Three big meals vs many small snacks — which is healthier?",
                "sideA": "Big meals",
                "sideB": "Small snacks",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Consistent rhythm", "Full satisfaction"],
                "ideasB": ["Stable energy", "Metabolism help"]
            },
            {
                "topic": "Vegetarian food vs meat — which diet is better?",
                "sideA": "Vegetarian",
                "sideB": "Meat",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Eco-friendly", "Lighter digestion"],
                "ideasB": ["High protein", "Traditional taste"]
            },
            {
                "topic": "Drinking tea vs drinking coffee — which is better?",
                "sideA": "Tea",
                "sideB": "Coffee",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Calming effect", "Healthy herbs"],
                "ideasB": ["Energy boost", "Social culture"]
            },
            {
                "topic": "Eating alone vs eating with others — which is better?",
                "sideA": "Alone",
                "sideB": "With others",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Peaceful time", "Mindful eating"],
                "ideasB": ["Social bonding", "Sharing joy"]
            },
            {
                "topic": "Playing a team sport vs playing an individual sport — which is better?",
                "sideA": "Team sport",
                "sideB": "Individual sport",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Cooperation", "Social support"],
                "ideasB": ["Personal goals", "Self-reliance"]
            },
            {
                "topic": "Spending free time indoors vs outdoors — which is better?",
                "sideA": "Indoors",
                "sideB": "Outdoors",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Cozy comfort", "Digital hobbies"],
                "ideasB": ["Nature health", "Physical movement"]
            },
            {
                "topic": "Cinema vs theatre — which is a better night out?",
                "sideA": "Cinema",
                "sideB": "Theatre",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Big screen", "Modern effects"],
                "ideasB": ["Live acting", "Cultural tradition"]
            },
            {
                "topic": "Listening to music vs playing an instrument — which is more enjoyable?",
                "sideA": "Listening",
                "sideB": "Playing",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Effortless joy", "Huge variety"],
                "ideasB": ["Skill development", "Creative release"]
            },
            {
                "topic": "Video games vs board games — which are more fun?",
                "sideA": "Video games",
                "sideB": "Board games",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Immersive worlds", "Online friends"],
                "ideasB": ["Face-to-face fun", "Tactile pieces"]
            },
            {
                "topic": "Going shopping vs staying home — which is a better way to spend the weekend?",
                "sideA": "Shopping",
                "sideB": "Staying home",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Social activity", "New items"],
                "ideasB": ["Full relaxation", "Energy recovery"]
            },
            {
                "topic": "Mobile phone vs computer — which is more useful in daily life?",
                "sideA": "Mobile",
                "sideB": "Computer",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": ["Portability", "Instant alerts"],
                "ideasB": ["Larger screen", "Powerful work"]
            },
            {
                "topic": "Sending a message vs making a phone call — which is better?",
                "sideA": "Message",
                "sideB": "Call",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": ["Asynchronous", "Easier edit"],
                "ideasB": ["Voice emotion", "Direct results"]
            },
            {
                "topic": "E-book vs paper book — which is better to read?",
                "sideA": "E-book",
                "sideB": "Paper book",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Saves space", "Built-in dictionary"],
                "ideasB": ["Classic feel", "No battery need"]
            },
            {
                "topic": "Taking photos with your phone vs with a camera — which gives better results?",
                "sideA": "Phone",
                "sideB": "Camera",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": ["Convenience", "Direct sharing"],
                "ideasB": ["Optical quality", "Professional control"]
            },
            {
                "topic": "Holiday at the beach vs holiday in the mountains — which is better?",
                "sideA": "Beach",
                "sideB": "Mountains",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Sunny vibes", "Warm swimming"],
                "ideasB": ["Hiking health", "Scenic views"]
            },
            {
                "topic": "Travelling by train vs travelling by plane — which is better?",
                "sideA": "Train",
                "sideB": "Plane",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Scenic routes", "Eco-friendly"],
                "ideasB": ["Highest speed", "Long distance"]
            },
            {
                "topic": "Visiting a famous city vs visiting a small village — which is more interesting?",
                "sideA": "City",
                "sideB": "Village",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Landmarks", "Dynamic culture"],
                "ideasB": ["Local tradition", "Quiet charm"]
            },
            {
                "topic": "Staying in a hotel vs staying with a local family — which is better?",
                "sideA": "Hotel",
                "sideB": "Local family",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Privacy", "Standardized service"],
                "ideasB": ["Cultural exchange", "Better language practice"]
            },
            {
                "topic": "Travelling abroad vs exploring your own country — which is more worthwhile?",
                "sideA": "Abroad",
                "sideB": "Own country",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Global horizons", "New languages"],
                "ideasB": ["Hidden gems", "Easier planning"]
            },
            {
                "topic": "Having many friends vs having a few close friends — which is better?",
                "sideA": "Many friends",
                "sideB": "Close friends",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Broad network", "Varied hobbies"],
                "ideasB": ["Deep loyalty", "Trusting bond"]
            },
            {
                "topic": "Meeting friends in person vs chatting online — which is more satisfying?",
                "sideA": "In person",
                "sideB": "Online",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Direct energy", "Shared food"],
                "ideasB": ["Time efficiency", "Stay connected"]
            },
            {
                "topic": "Living with parents vs living in a student flat — which is better for young people?",
                "sideA": "With parents",
                "sideB": "Student flat",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Financial help", "Home cooking"],
                "ideasB": ["Social life", "Self-reliance"]
            },
            {
                "topic": "Celebrating birthdays at home vs going out — which is nicer?",
                "sideA": "Home",
                "sideB": "Going out",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Personal touch", "Cozy atmosphere"],
                "ideasB": ["No cleaning", "Professional food"]
            },
            {
                "topic": "Saving money vs spending money — which is wiser?",
                "sideA": "Saving",
                "sideB": "Spending",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Future peace", "Big purchases"],
                "ideasB": ["Instant joy", "Economic health"]
            },
            {
                "topic": "Working part-time while studying vs focusing only on school — which is better?",
                "sideA": "Part-time",
                "sideB": "Focus school",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Financial independence", "Work experience"],
                "ideasB": ["Academic excellence", "Lower stress"]
            },
            {
                "topic": "Earning a lot of money vs having free time — which matters more?",
                "sideA": "Money",
                "sideB": "Free time",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["High quality life", "Retirement savings"],
                "ideasB": ["Mental health", "Hobbies and family"]
            },
            {
                "topic": "Living with grandparents vs not living with them — which is nicer?",
                "sideA": "With grandparents",
                "sideB": "Not living with them",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Wisdom sharing", "Childcare help"],
                "ideasB": ["More privacy", "Quiet environment"]
            },
            {
                "topic": "Mum's cooking vs dad's cooking — which is better?",
                "sideA": "Mum's",
                "sideB": "Dad's",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Traditional taste", "Comforting flavours"],
                "ideasB": ["Innovative recipes", "Special treats"]
            },
            {
                "topic": "Maths vs art — which subject is more fun?",
                "sideA": "Maths",
                "sideB": "Art",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Problem solving", "Logic focus"],
                "ideasB": ["Self-expression", "Creative release"]
            },
            {
                "topic": "Writing on paper vs typing on a tablet — which is better?",
                "sideA": "Paper",
                "sideB": "Tablet",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Physical memory", "Eye health"],
                "ideasB": ["Storage ease", "Auto-correction"]
            },
            {
                "topic": "Pizza vs pasta — which is nicer?",
                "sideA": "Pizza",
                "sideB": "Pasta",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Sharing fun", "Variety of toppings"],
                "ideasB": ["Versatile shapes", "Rich sauces"]
            },
            {
                "topic": "Ice cream vs cake — which is a better dessert?",
                "sideA": "Ice cream",
                "sideB": "Cake",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Refreshing cold", "Many flavours"],
                "ideasB": ["Warm comfort", "Celebration feel"]
            },
            {
                "topic": "Short days vs long days — which is better?",
                "sideA": "Short days",
                "sideB": "Long days",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": ["Cozy nights", "Indoor focus"],
                "ideasB": ["Vitamin D", "Outdoor time"]
            },
            {
                "topic": "Day at the park vs day at the beach — which is better?",
                "sideA": "Park",
                "sideB": "Beach",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Local nature", "Picnic spots"],
                "ideasB": ["Ocean breeze", "Wave activities"]
            },
            {
                "topic": "Plane vs train — which is more fun?",
                "sideA": "Plane",
                "sideB": "Train",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Above clouds", "Fast transit"],
                "ideasB": ["Moving scenery", "Walking room"]
            },
            {
                "topic": "Morning shower vs evening shower — which is better?",
                "sideA": "Morning",
                "sideB": "Evening",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Energy boost", "Fresh start"],
                "ideasB": ["Relaxation", "Clean sheets"]
            },
            {
                "topic": "Cats that knock things off tables vs dogs that chew shoes — which pet is more annoying?",
                "sideA": "Cats",
                "sideB": "Dogs",
                "level": "elementary",
                "theme": "animals_nature_A2",
                "ideasA": ["Broken glass", "Mischief"],
                "ideasB": ["Property damage", "Costly repairs"]
            },
            {
                "topic": "Eating pizza with a fork vs eating pizza with your hands — which is correct?",
                "sideA": "Fork",
                "sideB": "Hands",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Formal etiquette", "Clean fingers"],
                "ideasB": ["Direct enjoyment", "Authentic style"]
            },
            {
                "topic": "Sleeping with socks on vs sleeping without socks — which is better?",
                "sideA": "Socks on",
                "sideB": "No socks",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Circulation help", "Warm feet"],
                "ideasB": ["Body cool-down", "Natural feel"]
            },
            {
                "topic": "Sandcastle vs snowman — which is more fun to build?",
                "sideA": "Sandcastle",
                "sideB": "Snowman",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Beach summer", "Detail work"],
                "ideasB": ["Winter magic", "Social fun"]
            },
            {
                "topic": "Lots of exams vs very few exams — which is fairer?",
                "sideA": "Lots of exams",
                "sideB": "Very few exams",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Comprehensive audit", "Consistency"],
                "ideasB": ["Project focus", "Lower stress"]
            },
            {
                "topic": "Starting school at 7 vs starting school at 5 — which is better for children?",
                "sideA": "At 7",
                "sideB": "At 5",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Play focus", "Maturity gap"],
                "ideasB": ["Early literacy", "Structure start"]
            },
            {
                "topic": "Eating slowly vs eating quickly — which is better for you?",
                "sideA": "Slowly",
                "sideB": "Quickly",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Better digestion", "Fullness signal"],
                "ideasB": ["Save time", "Efficient habits"]
            },
            {
                "topic": "Cooking at home vs ordering food online — which is better?",
                "sideA": "Cooking at home",
                "sideB": "Ordering online",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Ingredient control", "Skill growth"],
                "ideasB": ["Extreme ease", "Zero effort"]
            },
            {
                "topic": "Cooking vs baking — which is more fun as a hobby?",
                "sideA": "Cooking",
                "sideB": "Baking",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Daily utility", "Creative flair"],
                "ideasB": ["Scientific precision", "Sweet rewards"]
            },
            {
                "topic": "Going to the gym vs exercising outside — which is better?",
                "sideA": "Gym",
                "sideB": "Outside",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Standardized gear", "Safety climate"],
                "ideasB": ["Fresh air", "Changing terrain"]
            },
            {
                "topic": "Photos on your phone vs printed photos — which is better?",
                "sideA": "Phone photos",
                "sideB": "Printed photos",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": ["Infinite volume", "Fast edit"],
                "ideasB": ["Tactile history", "Decor value"]
            },
            {
                "topic": "Smart TV vs computer screen — which is better for watching films?",
                "sideA": "Smart TV",
                "sideB": "Computer",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": ["Large immersive", "Better sound"],
                "ideasB": ["Privacy choice", "Closer viewing"]
            },
            {
                "topic": "Hot country vs cold country — which is a better holiday destination?",
                "sideA": "Hot country",
                "sideB": "Cold country",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Beach days", "Ice cream vibe"],
                "ideasB": ["Skiing health", "Northern lights"]
            },
            {
                "topic": "Giving presents vs receiving presents — which is better?",
                "sideA": "Giving",
                "sideB": "Receiving",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Altruistic joy", "Social impact"],
                "ideasB": ["Exciting surprise", "Feel appreciated"]
            },
            {
                "topic": "Working indoors vs working outdoors — which is better?",
                "sideA": "Indoors",
                "sideB": "Outdoors",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Climate control", "Ergonomics"],
                "ideasB": ["Physical health", "Changing views"]
            },
            {
                "topic": "Pineapple on pizza vs no pineapple on pizza — which is correct?",
                "sideA": "Pineapple",
                "sideB": "No pineapple",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Sweet-savoury mix", "Tropical vibe"],
                "ideasB": ["Traditional rules", "Flavour clash"]
            },
            {
                "topic": "Putting milk in first vs putting tea in first — which is better?",
                "sideA": "Milk first",
                "sideB": "Tea first",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Proteins safety", "Cooler start"],
                "ideasB": ["Better brewing", "Full flavour"]
            },
            {
                "topic": "Monday vs Friday — which day is actually worse?",
                "sideA": "Monday",
                "sideB": "Friday",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Start of work", "Low energy"],
                "ideasB": ["Long day wait", "Fatigue finish"]
            },
            {
                "topic": "Waking up five minutes before the alarm vs sleeping until the alarm — which is more annoying?",
                "sideA": "Before alarm",
                "sideB": "Until alarm",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Interrupted rest", "No man's land"],
                "ideasB": ["Shock factor", "No prep time"]
            },
            {
                "topic": "Cats vs dogs — which animal is secretly the boss of the house?",
                "sideA": "Cats",
                "sideB": "Dogs",
                "level": "elementary",
                "theme": "animals_nature_A2",
                "ideasA": ["Mental strategy", "Quiet control"],
                "ideasB": ["Physical energy", "Overt loyalty"]
            },
            {
                "topic": "Being too hot vs being too cold — which is worse?",
                "sideA": "Too hot",
                "sideB": "Too cold",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": ["Sweating fatigue", "Can't sleep"],
                "ideasB": ["Shivering pain", "Restrictive gear"]
            }];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();