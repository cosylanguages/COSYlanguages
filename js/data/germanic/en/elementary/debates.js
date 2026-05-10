(function() {
    const data = [
        {
            "topic": "A high salary vs a short commute — which matters more?",
            "sideA": "High salary",
            "sideB": "Short commute",
            "level": "elementary",
            "theme": "career_development_A2",
            "ideasA": ["Better financial stability", "Can save for the future"],
            "ideasB": ["More free time every day", "Less stress from travel"]
        },
        {
            "topic": "Changing jobs often vs staying in the same company — which is better?",
            "sideA": "Changing jobs",
            "sideB": "Staying",
            "level": "elementary",
            "theme": "career_development_A2",
            "ideasA": ["Learn new skills", "Get a higher salary"],
            "ideasB": ["Job security", "Stronger relationships with colleagues"]
        },
        {
            "topic": "Working overtime vs leaving on time every day — which is the better habit?",
            "sideA": "Overtime",
            "sideB": "On time",
            "level": "elementary",
            "theme": "career_development_A2",
            "ideasA": ["Finish more work", "Impress the boss"],
            "ideasB": ["Avoid burnout", "Have a better social life"]
        },
        {
            "topic": "A boss who is strict vs a boss who is relaxed — which is better to work for?",
            "sideA": "Strict boss",
            "sideB": "Relaxed boss",
            "level": "elementary",
            "theme": "career_development_A2",
            "ideasA": ["Work more efficiently", "Clear expectations"],
            "ideasB": ["More creativity", "Less pressure at work"]
        },
        {
            "topic": "Working in a big company vs a small company — which is better?",
            "sideA": "Big company",
            "sideB": "Small company",
            "level": "elementary",
            "theme": "career_development_A2",
            "ideasA": ["Better benefits", "Clear career path"],
            "ideasB": ["Friendly atmosphere", "More varied responsibilities"]
        },
        {
            "topic": "Getting a promotion vs getting more free time — which would you choose?",
            "sideA": "Promotion",
            "sideB": "Free time",
            "level": "elementary",
            "theme": "career_development_A2",
            "ideasA": ["More money", "Higher professional status"],
            "ideasB": ["Reduce stress", "Time for family and hobbies"]
        },
        {
            "topic": "Buying a house vs renting for life — which is a smarter decision?",
            "sideA": "Buying",
            "sideB": "Renting",
            "level": "elementary",
            "theme": "neighbourhood_local_A2",
            "ideasA": ["A good investment", "Freedom to decorate"],
            "ideasB": ["More flexibility", "No maintenance costs"]
        },
        {
            "topic": "Living in the city centre vs living in the suburbs — which is better?",
            "sideA": "City centre",
            "sideB": "Suburbs",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "ideasA": ["Close to shops and work", "Exciting nightlife"],
            "ideasB": ["Quieter environment", "Better for families"]
        },
        {
            "topic": "Spending money on experiences vs on things — which makes you happier?",
            "sideA": "Experiences",
            "sideB": "Things",
            "level": "elementary",
            "theme": "neighbourhood_local_A2",
            "ideasA": ["Memories last forever", "Personal growth"],
            "ideasB": ["Can be used daily", "Last longer than a trip"]
        },
        {
            "topic": "Cooking every day vs meal prepping once a week — which is more practical?",
            "sideA": "Daily cooking",
            "sideB": "Meal prepping",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "ideasA": ["Fresher food", "More variety"],
            "ideasB": ["Saves time during the week", "Easier to manage budget"]
        },
        {
            "topic": "Having a cleaner vs doing your own housework — which is a better choice?",
            "sideA": "Cleaner",
            "sideB": "Do it yourself",
            "level": "elementary",
            "theme": "neighbourhood_local_A2",
            "ideasA": ["More free time", "Professional results"],
            "ideasB": ["Save money", "Total privacy at home"]
        },
        {
            "topic": "Living with a partner vs living alone — which is better for adults?",
            "sideA": "With partner",
            "sideB": "Alone",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "ideasA": ["Shared costs", "Emotional support"],
            "ideasB": ["Total independence", "Peace and quiet"]
        },
        {
            "topic": "Having children early vs having children later in life — which is better?",
            "sideA": "Early",
            "sideB": "Later",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "ideasA": ["More energy for kids", "Grandparents are younger"],
            "ideasB": ["Better financial stability", "More life experience"]
        },
        {
            "topic": "Close family relationships vs independence from family — which is more important?",
            "sideA": "Close relationships",
            "sideB": "Independence",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "ideasA": ["Strong support network", "Shared traditions"],
            "ideasB": ["Make your own choices", "Privacy for your life"]
        },
        {
            "topic": "Meeting new people vs keeping old friendships — which is more valuable?",
            "sideA": "New people",
            "sideB": "Old friends",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "ideasA": ["New perspectives", "Networking opportunities"],
            "ideasB": ["Deep trust", "Shared history"]
        },
        {
            "topic": "Socialising after work vs going straight home — which is better?",
            "sideA": "Socialising",
            "sideB": "Going home",
            "level": "elementary",
            "theme": "career_development_A2",
            "ideasA": ["Build team relationships", "Relax with colleagues"],
            "ideasB": ["Properly disconnect", "Save energy for family"]
        },
        {
            "topic": "Going to the gym vs exercising outdoors — which is better for adults?",
            "sideA": "Gym",
            "sideB": "Outdoors",
            "level": "elementary",
            "theme": "health_body_A2",
            "ideasA": ["Specialised equipment", "Professional trainers"],
            "ideasB": ["Fresh air", "No membership fees"]
        },
        {
            "topic": "Strict diet vs eating everything in moderation — which is healthier?",
            "sideA": "Strict diet",
            "sideB": "Moderation",
            "level": "elementary",
            "theme": "health_body_A2",
            "ideasA": ["Faster results", "Clear discipline"],
            "ideasB": ["Sustainable long-term", "Enjoy social eating"]
        },
        {
            "topic": "Seeing a doctor early vs waiting to see if you get better — which is wiser?",
            "sideA": "Early",
            "sideB": "Waiting",
            "level": "elementary",
            "theme": "health_body_A2",
            "ideasA": ["Prevent serious problems", "Peace of mind"],
            "ideasB": ["Avoid unnecessary costs", "Let the body heal naturally"]
        },
        {
            "topic": "Sleeping eight hours vs sleeping six but exercising — which is better?",
            "sideA": "8 hours",
            "sideB": "6 hours + exercise",
            "level": "elementary",
            "theme": "health_body_A2",
            "ideasA": ["Better mental health", "Optimal recovery"],
            "ideasB": ["Stay physically fit", "More productive day"]
        },
        {
            "topic": "Reducing stress through sport vs through relaxation — which works better?",
            "sideA": "Sport",
            "sideB": "Relaxation",
            "level": "elementary",
            "theme": "health_body_A2",
            "ideasA": ["Release endorphins", "Physical health benefits"],
            "ideasB": ["Calm the mind", "Improve sleep quality"]
        },
        {
            "topic": "Smartphones vs face-to-face conversation — which is more important?",
            "sideA": "Smartphones",
            "sideB": "Face-to-face",
            "level": "elementary",
            "theme": "technology_A2",
            "ideasA": ["Stay connected easily", "Share moments instantly"],
            "ideasB": ["Better communication", "More meaningful connections"]
        },
        {
            "topic": "Online banking vs going to the bank — which is better?",
            "sideA": "Online",
            "sideB": "Going to bank",
            "level": "elementary",
            "theme": "technology_A2",
            "ideasA": ["Available 24/7", "Very convenient"],
            "ideasB": ["Personal service", "Better for complex issues"]
        },
        {
            "topic": "Working with paper vs working digitally — which is more efficient?",
            "sideA": "Paper",
            "sideB": "Digital",
            "level": "elementary",
            "theme": "career_development_A2",
            "ideasA": ["Better for memory", "No eye strain"],
            "ideasB": ["Easy to search", "Environmentally friendly"]
        },
        {
            "topic": "Social media for networking vs meeting people in person — which is better?",
            "sideA": "Social media",
            "sideB": "In person",
            "level": "elementary",
            "theme": "career_development_A2",
            "ideasA": ["Wider reach", "Build a personal brand"],
            "ideasB": ["Build deeper trust", "Better first impression"]
        },
        {
            "topic": "Package holiday vs independent travel — which is better?",
            "sideA": "Package",
            "sideB": "Independent",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "ideasA": ["Everything is organized", "Less stress"],
            "ideasB": ["Unique experiences", "More freedom"]
        },
        {
            "topic": "City break vs beach holiday — which is better for relaxation?",
            "sideA": "City break",
            "sideB": "Beach holiday",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "ideasA": ["Culture and history", "Great shopping"],
            "ideasB": ["Complete relaxation", "Sun and sea"]
        },
        {
            "topic": "One long holiday a year vs several short breaks — which is better?",
            "sideA": "One long",
            "sideB": "Several short",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "ideasA": ["Fully disconnect", "Travel further away"],
            "ideasB": ["Regularly recharge", "Less work builds up"]
        },
        {
            "topic": "Travelling as a couple vs travelling alone — which is more enjoyable?",
            "sideA": "As a couple",
            "sideB": "Alone",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "ideasA": ["Shared memories", "Safer for travel"],
            "ideasB": ["Total freedom", "Meet more locals"]
        },
        {
            "topic": "Telling your partner about every small problem vs keeping to yourself — which is healthier?",
            "sideA": "Telling all",
            "sideB": "Keeping to self",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "ideasA": ["Build trust", "Solve problems together"],
            "ideasB": ["Maintain independence", "Avoid unnecessary drama"]
        },
        {
            "topic": "Checking your phone first thing in the morning vs waiting — which is better?",
            "sideA": "First thing",
            "sideB": "Waiting",
            "level": "elementary",
            "theme": "neighbourhood_local_A2",
            "ideasA": ["Stay informed", "Plan the day early"],
            "ideasB": ["Lower stress", "Mindful morning"]
        },
        {
            "topic": "Knowing your neighbours' names vs not knowing them — which is better?",
            "sideA": "Knowing names",
            "sideB": "Not knowing",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "ideasA": ["Sense of community", "Mutual help"],
            "ideasB": ["More privacy", "Modern lifestyle"]
        },
        {
            "topic": "Grocery shopping with a list vs without a list — which is better?",
            "sideA": "With list",
            "sideB": "Without list",
            "level": "elementary",
            "theme": "neighbourhood_local_A2",
            "ideasA": ["Save money", "Forget nothing"],
            "ideasB": ["More creative cooking", "Flexible shopping"]
        },
        {
            "topic": "Telling your boss you are sick vs going to work sick — which is wiser?",
            "sideA": "Telling boss",
            "sideB": "Going sick",
            "level": "elementary",
            "theme": "career_development_A2",
            "ideasA": ["Honesty is best", "Recover faster"],
            "ideasB": ["Show commitment", "Avoid falling behind"]
        },
        {
            "topic": "Working full-time vs working part-time — which is better?",
            "sideA": "Full-time",
            "sideB": "Part-time",
            "level": "elementary",
            "theme": "career_development_A2",
            "ideasA": ["Financial stability", "Better career growth"],
            "ideasB": ["Work-life balance", "Time for other interests"]
        },
        {
            "topic": "Working in an office vs working from home — which is better?",
            "sideA": "Office",
            "sideB": "Home",
            "level": "elementary",
            "theme": "career_development_A2",
            "ideasA": ["Better collaboration", "Social life"],
            "ideasB": ["No commute", "Flexible schedule"]
        },
        {
            "topic": "A job you love vs a job that pays well — which is more important?",
            "sideA": "Job you love",
            "sideB": "Pays well",
            "level": "elementary",
            "theme": "career_development_A2",
            "ideasA": ["Better mental health", "Passionate work"],
            "ideasB": ["Financial freedom", "Higher quality of life"]
        },
        {
            "topic": "Working with other people vs working alone — which is better?",
            "sideA": "With people",
            "sideB": "Alone",
            "level": "elementary",
            "theme": "career_development_A2",
            "ideasA": ["Diverse ideas", "Team support"],
            "ideasB": ["Avoid distractions", "Work at your own pace"]
        },
        {
            "topic": "Online shopping vs shopping in a store — which is better?",
            "sideA": "Online",
            "sideB": "Store",
            "level": "elementary",
            "theme": "neighbourhood_local_A2",
            "ideasA": ["Wider selection", "Home delivery"],
            "ideasB": ["Try before you buy", "Support local shops"]
        },
        {
            "topic": "Saving for the future vs enjoying money now — which is wiser?",
            "sideA": "Saving",
            "sideB": "Enjoying now",
            "level": "elementary",
            "theme": "career_development_A2",
            "ideasA": ["Financial peace", "Retirement fund"],
            "ideasB": ["Live in the moment", "Enjoy life today"]
        },
        {
            "topic": "Expensive things vs cheap things — which is better value?",
            "sideA": "Expensive",
            "sideB": "Cheap",
            "level": "elementary",
            "theme": "neighbourhood_local_A2",
            "ideasA": ["Higher quality", "Durable items"],
            "ideasB": ["Affordable", "Easy to replace"]
        },
        {
            "topic": "Buying new vs buying second-hand — which is better?",
            "sideA": "New",
            "sideB": "Second-hand",
            "level": "elementary",
            "theme": "neighbourhood_local_A2",
            "ideasA": ["Latest technology", "Full warranty"],
            "ideasB": ["Save money", "Environmentally friendly"]
        },
        {
            "topic": "Replying to emails immediately vs leaving them for later — which is better?",
            "sideA": "Immediately",
            "sideB": "Later",
            "level": "elementary",
            "theme": "career_development_A2",
            "ideasA": ["Stay organized", "Efficient work"],
            "ideasB": ["Time to think", "Prioritize tasks"]
        },
        {
            "topic": "Being always early vs always five minutes late — which is worse?",
            "sideA": "Early",
            "sideB": "Late",
            "level": "elementary",
            "theme": "career_development_A2",
            "ideasA": ["Waste of your time", "Social anxiety"],
            "ideasB": ["Disrespectful to others", "Miss important info"]
        },
        {
            "topic": "Paper books vs. E-books — which is better?",
            "sideA": "Paper",
            "sideB": "E-books",
            "level": "elementary",
            "theme": "interests_hobbies_A2",
            "ideasA": ["Scent and feel of paper", "Collectable"],
            "ideasB": ["Very portable", "Space saving"]
        },
        {
            "topic": "Big city vs small town — which is a better place to live?",
            "sideA": "Big city",
            "sideB": "Small town",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "ideasA": ["Better job opportunities", "More entertainment"],
            "ideasB": ["Safer for children", "Lower cost of living"]
        },
        {
            "topic": "Cooking at home vs eating out — which is better for daily life?",
            "sideA": "At home",
            "sideB": "Eating out",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "ideasA": ["Know exactly what is in food", "Save a lot of money"],
            "ideasB": ["Try new cuisines", "No cleanup required"]
        },
        {
            "topic": "Having children vs not having children — which life is better?",
            "sideA": "Children",
            "sideB": "No children",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "ideasA": ["Family legacy", "Joy of watching them grow"],
            "ideasB": ["More personal freedom", "Fewer financial worries"]
        },
        {
            "topic": "Holidays with family vs holidays with friends — which is better?",
            "sideA": "Family",
            "sideB": "Friends",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "ideasA": ["Deepen family bonds", "Usually more relaxed"],
            "ideasB": ["More adventure", "Shared interests in activities"]
        },
        {
            "topic": "Staying in your country vs travelling abroad — which is a better holiday?",
            "sideA": "Your country",
            "sideB": "Abroad",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "ideasA": ["Support local economy", "Easier to plan"],
            "ideasB": ["Experience new cultures", "Learn a new language"]
        },
        {
            "topic": "Seeing friends often vs having time alone — which is more important?",
            "sideA": "Friends",
            "sideB": "Alone",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "ideasA": ["Avoid loneliness", "Better social skills"],
            "ideasB": ["Focus on personal goals", "Mental recharge"]
        },
        {
            "topic": "Doing the dishes immediately vs tomorrow — which is better?",
            "sideA": "Immediately",
            "sideB": "Tomorrow",
            "level": "elementary",
            "theme": "neighbourhood_local_A2",
            "ideasA": ["Clean kitchen in the morning", "Easier to clean when fresh"],
            "ideasB": ["Relax after a long day", "Do them all at once later"]
        },
        {
            "topic": "Talking about work at dinner vs no work talk — which is better?",
            "sideA": "Work talk",
            "sideB": "No work talk",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "ideasA": ["Share your day with family", "Get advice on problems"],
            "ideasB": ["Better for relaxation", "Focus on family time"]
        },
        {
            "topic": "Strict teachers vs friendly teachers — who helps students more?",
            "sideA": "Strict",
            "sideB": "Friendly",
            "level": "elementary",
            "theme": "career_development_A2",
            "ideasA": ["Better discipline", "Students work harder"],
            "ideasB": ["More comfortable to ask questions", "Better motivation"]
        },
        {
            "topic": "Learning with a textbook vs with videos — which is more effective?",
            "sideA": "Textbook",
            "sideB": "Videos",
            "level": "elementary",
            "theme": "career_development_A2",
            "ideasA": ["Better for deep focus", "Easy to highlight and take notes"],
            "ideasB": ["Visual learning is easier", "More engaging content"]
        },
        {
            "topic": "Short lessons vs long lessons — which help you learn better?",
            "sideA": "Short",
            "sideB": "Long",
            "level": "elementary",
            "theme": "career_development_A2",
            "ideasA": ["Better for attention span", "Easier to fit in schedule"],
            "ideasB": ["Can go into more detail", "More time for practice"]
        },
        {
            "topic": "Group projects vs individual assignments — which is better?",
            "sideA": "Group",
            "sideB": "Individual",
            "level": "elementary",
            "theme": "career_development_A2",
            "ideasA": ["Learn teamwork", "Share the workload"],
            "ideasB": ["Work at your own pace", "Full control over the result"]
        },
        {
            "topic": "School uniform vs casual clothes — which is better?",
            "sideA": "Uniform",
            "sideB": "Casual",
            "level": "elementary",
            "theme": "career_development_A2",
            "ideasA": ["No social pressure about fashion", "Faster to get ready"],
            "ideasB": ["Express your personality", "More comfortable to wear"]
        },
        {
            "topic": "Three big meals vs many small snacks — which is healthier?",
            "sideA": "Big meals",
            "sideB": "Small snacks",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "ideasA": ["Better for digestion", "More social experience"],
            "ideasB": ["Maintain steady energy", "Avoid overeating at dinner"]
        },
        {
            "topic": "Vegetarian food vs meat — which diet is better?",
            "sideA": "Vegetarian",
            "sideB": "Meat",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "ideasA": ["Better for the environment", "Higher in fibre"],
            "ideasB": ["Easier to get protein", "Essential for some cultures"]
        },
        {
            "topic": "Playing a team sport vs an individual sport — which is better?",
            "sideA": "Team sport",
            "sideB": "Individual sport",
            "level": "elementary",
            "theme": "interests_hobbies_A2",
            "ideasA": ["Socialise while exercising", "Learn to cooperate"],
            "ideasB": ["Personal responsibility", "No need to coordinate with others"]
        },
        {
            "topic": "Cinema vs theatre — which is a better night out?",
            "sideA": "Cinema",
            "sideB": "Theatre",
            "level": "elementary",
            "theme": "interests_hobbies_A2",
            "ideasA": ["Latest blockbuster films", "More comfortable seating"],
            "ideasB": ["Live performance energy", "Unique artistic experience"]
        },
        {
            "topic": "Video games vs board games — which are more fun?",
            "sideA": "Video games",
            "sideB": "Board games",
            "level": "elementary",
            "theme": "interests_hobbies_A2",
            "ideasA": ["Amazing graphics", "Online play with anyone"],
            "ideasB": ["Better for group socialising", "No screen time"]
        },
        {
            "topic": "Mobile phone vs computer — which is more useful?",
            "sideA": "Mobile",
            "sideB": "Computer",
            "level": "elementary",
            "theme": "technology_A2",
            "ideasA": ["Available everywhere", "Apps for everything"],
            "ideasB": ["Better for serious work", "Larger screen and keyboard"]
        },
        {
            "topic": "Sending a message vs a phone call — which is better?",
            "sideA": "Message",
            "sideB": "Call",
            "level": "elementary",
            "theme": "technology_A2",
            "ideasA": ["Respond when you have time", "Keep a record of the talk"],
            "ideasB": ["Clearer communication", "More personal and immediate"]
        },
        {
            "topic": "Taking photos with a phone vs a camera — which is better?",
            "sideA": "Phone",
            "sideB": "Camera",
            "level": "elementary",
            "theme": "technology_A2",
            "ideasA": ["Very convenient", "Easy to share on social media"],
            "ideasB": ["Higher image quality", "More artistic control"]
        },
        {
            "topic": "Travelling by train vs by plane — which is better?",
            "sideA": "Train",
            "sideB": "Plane",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "ideasA": ["See the landscape", "More eco-friendly"],
            "ideasB": ["Much faster for long distances", "Can travel overseas"]
        },
        {
            "topic": "Visiting a famous city vs a small village — which is more interesting?",
            "sideA": "City",
            "sideB": "Village",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "ideasA": ["World-famous landmarks", "Busy and exciting energy"],
            "ideasB": ["Authentic local life", "Peace and relaxation"]
        },
        {
            "topic": "Staying in a hotel vs with a local family — which is better?",
            "sideA": "Hotel",
            "sideB": "Local family",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "ideasA": ["More privacy and luxury", "Professional service"],
            "ideasB": ["Learn the culture better", "Practice the language"]
        },
        {
            "topic": "Living with parents vs in a student flat — which is better?",
            "sideA": "Parents",
            "sideB": "Student flat",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "ideasA": ["Save a lot of money", "Home-cooked meals"],
            "ideasB": ["Learn to be independent", "Social life with peers"]
        },
        {
            "topic": "Saving money vs spending money — which is wiser?",
            "sideA": "Saving",
            "sideB": "Spending",
            "level": "elementary",
            "theme": "career_development_A2",
            "ideasA": ["Safety for emergencies", "Buy a home later"],
            "ideasB": ["Help the economy", "Enjoy life while you are young"]
        },
        {
            "topic": "Maths vs art — which is a better subject to study?",
            "sideA": "Maths",
            "sideB": "Art",
            "level": "elementary",
            "theme": "career_development_A2",
            "ideasA": ["Essential for many jobs", "Develops logical thinking"],
            "ideasB": ["Develops creativity", "More relaxing and fun"]
        },
        {
            "topic": "Waking up before the alarm vs with the alarm — which is more annoying?",
            "sideA": "Before alarm",
            "sideB": "With alarm",
            "level": "elementary",
            "theme": "neighbourhood_local_A2",
            "ideasA": ["Feel you lost sleep time", "Too quiet in the morning"],
            "ideasB": ["A loud and scary noise", "Always feel tired at that moment"]
        }
    ];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();
