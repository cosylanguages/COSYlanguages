(function() {
    const speakingData = {
    "en": {
        "opinionArena": [
            {
                "text": "Should children have mobile phones?",
                "level": "starter",
                "theme": "technology_A2"
            },
            {
                "text": "Is it better to live in a house or an apartment?",
                "level": "elementary",
                "theme": "neighbourhood_local_A2"
            }
        ],
        "criticsCorner": [
            {
                "text": "Life is what happens when you're busy making other plans.",
                "author": "John Lennon",
                "level": "elementary",
                "theme": "relationships_dating_A2"
            }
        ],
        "debates": [
            {
                "topic": "A high salary vs a short commute — which matters more in a job?",
                "sideA": "High salary",
                "sideB": "Short commute",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Changing jobs often vs staying in the same company — which is better for your career?",
                "sideA": "Changing jobs",
                "sideB": "Staying",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Working overtime vs leaving on time every day — which is the better habit?",
                "sideA": "Overtime",
                "sideB": "On time",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "A boss who is strict vs a boss who is relaxed — which is better to work for?",
                "sideA": "Strict boss",
                "sideB": "Relaxed boss",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Working in a big company vs a small company — which is better?",
                "sideA": "Big company",
                "sideB": "Small company",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Getting a promotion vs getting more free time — which would you choose?",
                "sideA": "Promotion",
                "sideB": "Free time",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Buying a house vs renting for life — which is the smarter financial decision?",
                "sideA": "Buying",
                "sideB": "Renting",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Living in the city centre vs living in the suburbs — which is better?",
                "sideA": "City centre",
                "sideB": "Suburbs",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Spending money on experiences vs on things — which makes you happier?",
                "sideA": "Experiences",
                "sideB": "Things",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cooking every day vs meal prepping once a week — which is more practical?",
                "sideA": "Daily cooking",
                "sideB": "Meal prepping",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Having a cleaner vs doing your own housework — which is a better choice?",
                "sideA": "Cleaner",
                "sideB": "Do it yourself",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Living with a partner vs living alone — which is better for adults?",
                "sideA": "With partner",
                "sideB": "Alone",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Having children early vs having children later in life — which is better?",
                "sideA": "Early",
                "sideB": "Later",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Close family relationships vs independence from family — which is more important as an adult?",
                "sideA": "Close relationships",
                "sideB": "Independence",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Meeting new people vs keeping old friendships — which is more valuable?",
                "sideA": "New people",
                "sideB": "Old friends",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Socialising after work vs going straight home — which is better for work relationships?",
                "sideA": "Socialising",
                "sideB": "Going home",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Going to the gym vs exercising outdoors — which is better for adults?",
                "sideA": "Gym",
                "sideB": "Outdoors",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Strict diet vs eating everything in moderation — which is healthier?",
                "sideA": "Strict diet",
                "sideB": "Moderation",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Seeing a doctor early vs waiting to see if you get better — which is wiser?",
                "sideA": "Early",
                "sideB": "Waiting",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sleeping eight hours vs sleeping six but exercising — which is better for energy?",
                "sideA": "8 hours",
                "sideB": "6 hours + exercise",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Reducing stress through sport vs through relaxation — which works better?",
                "sideA": "Sport",
                "sideB": "Relaxation",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Smartphones vs face-to-face conversation — which do we use more, and is that a problem?",
                "sideA": "Smartphones",
                "sideB": "Face-to-face",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Online banking vs going to the bank — which is better?",
                "sideA": "Online",
                "sideB": "Going to bank",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Working with paper vs working digitally — which is more efficient?",
                "sideA": "Paper",
                "sideB": "Digital",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Social media for networking vs meeting people in person — which is more useful professionally?",
                "sideA": "Social media",
                "sideB": "In person",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Package holiday vs independent travel — which is better for adults?",
                "sideA": "Package",
                "sideB": "Independent",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "City break vs beach holiday — which is a better way to relax?",
                "sideA": "City break",
                "sideB": "Beach holiday",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "One long holiday a year vs several short breaks — which is better?",
                "sideA": "One long",
                "sideB": "Several short",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travelling as a couple vs travelling alone — which is more enjoyable?",
                "sideA": "As a couple",
                "sideB": "Alone",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Telling your partner about every small problem vs keeping things to yourself — which is healthier?",
                "sideA": "Telling all",
                "sideB": "Keeping to self",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Checking your phone first thing in the morning vs waiting until after breakfast — which is a better habit?",
                "sideA": "First thing",
                "sideB": "After breakfast",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Knowing your neighbours' names vs not knowing them — which is the more normal adult experience today?",
                "sideA": "Knowing names",
                "sideB": "Not knowing",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Grocery shopping with a list vs without a list — which type of person has a better life?",
                "sideA": "With list",
                "sideB": "Without list",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Telling your boss you are sick vs going to work sick — which is the braver choice?",
                "sideA": "Telling boss",
                "sideB": "Going sick",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Working full-time vs working part-time — which is better?",
                "sideA": "Full-time",
                "sideB": "Part-time",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Working in an office vs working from home — which do you prefer?",
                "sideA": "Office",
                "sideB": "Home",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "A job you love vs a job that pays well — which is more important?",
                "sideA": "Job you love",
                "sideB": "Pays well",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Working with other people vs working alone — which is better?",
                "sideA": "With people",
                "sideB": "Alone",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "A short commute vs a long commute — which is more acceptable?",
                "sideA": "Short",
                "sideB": "Long",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Living alone vs living with a partner — which is better?",
                "sideA": "Alone",
                "sideB": "Partner",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Big city vs small town — which is a better place to live as an adult?",
                "sideA": "Big city",
                "sideB": "Small town",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cooking at home vs eating out — which is better for daily life?",
                "sideA": "At home",
                "sideB": "Eating out",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Having children vs not having children — which life is better?",
                "sideA": "Children",
                "sideB": "No children",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Renting a flat vs buying a house — which is better for young adults?",
                "sideA": "Renting",
                "sideB": "Buying",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Exercise every day vs rest — which is better for your health?",
                "sideA": "Exercise",
                "sideB": "Rest",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Going to the doctor vs waiting — which is better when you feel ill?",
                "sideA": "Doctor",
                "sideB": "Waiting",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sleeping eight hours vs sleeping less — which is more realistic for adults?",
                "sideA": "8 hours",
                "sideB": "Less",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Walking to work vs taking the car — which is better for your health?",
                "sideA": "Walking",
                "sideB": "Car",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Online shopping vs shopping in a store — which do you prefer?",
                "sideA": "Online",
                "sideB": "Store",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Saving for the future vs enjoying money now — which is wiser?",
                "sideA": "Saving",
                "sideB": "Enjoying now",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Expensive things vs cheap things — which is better value?",
                "sideA": "Expensive",
                "sideB": "Cheap",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Buying new vs buying second-hand — which is better?",
                "sideA": "New",
                "sideB": "Second-hand",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Watching TV at home vs going out — which is a better evening?",
                "sideA": "TV",
                "sideB": "Going out",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Holidays with family vs holidays with friends — which is better?",
                "sideA": "Family",
                "sideB": "Friends",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Staying in your country vs travelling abroad — which is a better holiday?",
                "sideA": "Your country",
                "sideB": "Abroad",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sport vs reading — which is a better hobby for adults?",
                "sideA": "Sport",
                "sideB": "Reading",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Seeing friends often vs having time alone — which is more important?",
                "sideA": "Friends",
                "sideB": "Alone",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Replying to emails immediately vs leaving them for later — which is more professional?",
                "sideA": "Immediately",
                "sideB": "Later",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Doing the dishes immediately vs leaving them until tomorrow — which is better?",
                "sideA": "Immediately",
                "sideB": "Tomorrow",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Being always early vs always five minutes late — which is worse at work?",
                "sideA": "Early",
                "sideB": "Late",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Having a very organised desk vs a messy desk — which person is more productive?",
                "sideA": "Organised",
                "sideB": "Messy",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Talking about work at dinner vs no work talk at dinner — which rule is better?",
                "sideA": "Work talk",
                "sideB": "No work talk",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Living with family vs Alone — which is better?",
                "sideA": "With family",
                "sideB": "Alone",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Having a brother vs Sister — which is better?",
                "sideA": "Brother",
                "sideB": "Sister",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Big vs Small family — which is nicer?",
                "sideA": "Big family",
                "sideB": "Small family",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Oldest vs Youngest child — which is better?",
                "sideA": "Oldest",
                "sideB": "Youngest",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Morning vs Afternoon school — which is better?",
                "sideA": "Morning",
                "sideB": "Afternoon",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Reading vs Maths — which is more fun?",
                "sideA": "Reading",
                "sideB": "Maths",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "School vs Home learning — which is better?",
                "sideA": "School",
                "sideB": "Home",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Homework vs No homework — which helps more?",
                "sideA": "Homework",
                "sideB": "None",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Alone vs Partner work — which do you prefer?",
                "sideA": "Alone",
                "sideB": "Partner",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Paper vs Computer — which is better?",
                "sideA": "Paper",
                "sideB": "Computer",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Breakfast vs Dinner — which meal is more important?",
                "sideA": "Breakfast",
                "sideB": "Dinner",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Hot vs Cold food — which is better?",
                "sideA": "Hot",
                "sideB": "Cold",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Home vs Restaurant — which is better?",
                "sideA": "Home",
                "sideB": "Restaurant",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sweet vs Savoury — which do you prefer?",
                "sideA": "Sweet",
                "sideB": "Savoury",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cooking vs Buying food — which is nicer?",
                "sideA": "Cooking",
                "sideB": "Buying",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Early vs Late waking — which is better?",
                "sideA": "Early",
                "sideB": "Late",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Morning vs Evening — which part of the day is nicer?",
                "sideA": "Morning",
                "sideB": "Evening",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Weekdays vs Weekends — which do you prefer?",
                "sideA": "Weekdays",
                "sideB": "Weekends",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Summer vs Winter — which season is better?",
                "sideA": "Summer",
                "sideB": "Winter",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Early vs Late bed — which is healthier?",
                "sideA": "Early",
                "sideB": "Late",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "House vs Flat — which is better?",
                "sideA": "House",
                "sideB": "Flat",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "City vs Countryside — which is a better place to live?",
                "sideA": "City",
                "sideB": "Countryside",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Bedroom vs Living room — which room do you prefer?",
                "sideA": "Bedroom",
                "sideB": "Living room",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Indoor vs Outdoor games — which are more fun?",
                "sideA": "Indoor",
                "sideB": "Outdoor",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Watching TV vs Book — which is better?",
                "sideA": "TV",
                "sideB": "Book",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sport vs Video game — which is more fun?",
                "sideA": "Sport",
                "sideB": "Video game",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Drawing vs Singing — which hobby is better?",
                "sideA": "Drawing",
                "sideB": "Singing",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Playing alone vs Friends — which is more fun?",
                "sideA": "Alone",
                "sideB": "Friends",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Swimming vs Running — which sport do you prefer?",
                "sideA": "Swimming",
                "sideB": "Running",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Music vs Sport — which is a better hobby?",
                "sideA": "Music",
                "sideB": "Sport",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Farm vs Wild animals — which are more interesting?",
                "sideA": "Farm",
                "sideB": "Wild",
                "level": "elementary",
                "theme": "animals_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rain vs Sunshine — which weather do you prefer?",
                "sideA": "Rain",
                "sideB": "Sunshine",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sea vs Mountains — which is better for a holiday?",
                "sideA": "Sea",
                "sideB": "Mountains",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Flowers vs Trees — which are more beautiful?",
                "sideA": "Flowers",
                "sideB": "Trees",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Car vs Bus — which is better?",
                "sideA": "Car",
                "sideB": "Bus",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Walking vs Cycling — which is better to get around?",
                "sideA": "Walking",
                "sideB": "Cycling",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Short vs Long holiday — which is better?",
                "sideA": "Short",
                "sideB": "Long",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travelling alone vs Family — which is more fun?",
                "sideA": "Alone",
                "sideB": "Family",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
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
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Strict teachers vs friendly teachers — who helps students more?",
                "sideA": "Strict",
                "sideB": "Friendly",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Learning with a textbook vs learning with videos — which is more effective?",
                "sideA": "Textbook",
                "sideB": "Videos",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Short lessons vs long lessons — which help you learn better?",
                "sideA": "Short",
                "sideB": "Long",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Group projects vs individual assignments — which do you prefer?",
                "sideA": "Group",
                "sideB": "Individual",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "School uniform vs casual clothes at school — which is better?",
                "sideA": "Uniform",
                "sideB": "Casual",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Home-cooked meals vs fast food — which is better?",
                "sideA": "Home-cooked",
                "sideB": "Fast food",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Three big meals vs many small snacks — which is healthier?",
                "sideA": "Big meals",
                "sideB": "Small snacks",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vegetarian food vs meat — which diet is better?",
                "sideA": "Vegetarian",
                "sideB": "Meat",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Drinking tea vs drinking coffee — which is better?",
                "sideA": "Tea",
                "sideB": "Coffee",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Eating alone vs eating with others — which do you prefer?",
                "sideA": "Alone",
                "sideB": "With others",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Playing a team sport vs playing an individual sport — which is better?",
                "sideA": "Team sport",
                "sideB": "Individual sport",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Spending free time indoors vs outdoors — which is better?",
                "sideA": "Indoors",
                "sideB": "Outdoors",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cinema vs theatre — which is a better night out?",
                "sideA": "Cinema",
                "sideB": "Theatre",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Listening to music vs playing an instrument — which is more enjoyable?",
                "sideA": "Listening",
                "sideB": "Playing",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Video games vs board games — which are more fun?",
                "sideA": "Video games",
                "sideB": "Board games",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Going shopping vs staying home — which is a better way to spend the weekend?",
                "sideA": "Shopping",
                "sideB": "Staying home",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mobile phone vs computer — which is more useful in daily life?",
                "sideA": "Mobile",
                "sideB": "Computer",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sending a message vs making a phone call — which is better?",
                "sideA": "Message",
                "sideB": "Call",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "E-book vs paper book — which do you prefer to read?",
                "sideA": "E-book",
                "sideB": "Paper book",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Taking photos with your phone vs with a camera — which gives better results?",
                "sideA": "Phone",
                "sideB": "Camera",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Holiday at the beach vs holiday in the mountains — which is better?",
                "sideA": "Beach",
                "sideB": "Mountains",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travelling by train vs travelling by plane — which is better?",
                "sideA": "Train",
                "sideB": "Plane",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Visiting a famous city vs visiting a small village — which is more interesting?",
                "sideA": "City",
                "sideB": "Village",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Staying in a hotel vs staying with a local family — which do you prefer?",
                "sideA": "Hotel",
                "sideB": "Local family",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travelling abroad vs exploring your own country — which is more worthwhile?",
                "sideA": "Abroad",
                "sideB": "Own country",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Having many friends vs having a few close friends — which is better?",
                "sideA": "Many friends",
                "sideB": "Close friends",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Meeting friends in person vs chatting online — which is more satisfying?",
                "sideA": "In person",
                "sideB": "Online",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Living with parents vs living in a student flat — which is better for young people?",
                "sideA": "With parents",
                "sideB": "Student flat",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Celebrating birthdays at home vs going out — which is nicer?",
                "sideA": "Home",
                "sideB": "Going out",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Saving money vs spending money — which is wiser?",
                "sideA": "Saving",
                "sideB": "Spending",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Working part-time while studying vs focusing only on school — which is better?",
                "sideA": "Part-time",
                "sideB": "Focus school",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Earning a lot of money vs having free time — which matters more?",
                "sideA": "Money",
                "sideB": "Free time",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Living with grandparents vs not living with them — which is nicer?",
                "sideA": "With grandparents",
                "sideB": "Not living with them",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mum's cooking vs dad's cooking — which is better?",
                "sideA": "Mum's",
                "sideB": "Dad's",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Maths vs art — which subject is more fun?",
                "sideA": "Maths",
                "sideB": "Art",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Writing on paper vs typing on a tablet — which is better?",
                "sideA": "Paper",
                "sideB": "Tablet",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pizza vs pasta — which is nicer?",
                "sideA": "Pizza",
                "sideB": "Pasta",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ice cream vs cake — which is a better dessert?",
                "sideA": "Ice cream",
                "sideB": "Cake",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Short days vs long days — which is better?",
                "sideA": "Short days",
                "sideB": "Long days",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Day at the park vs day at the beach — which is better?",
                "sideA": "Park",
                "sideB": "Beach",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Plane vs train — which is more fun?",
                "sideA": "Plane",
                "sideB": "Train",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Morning shower vs evening shower — which is better?",
                "sideA": "Morning",
                "sideB": "Evening",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cats that knock things off tables vs dogs that chew shoes — which pet is more annoying?",
                "sideA": "Cats",
                "sideB": "Dogs",
                "level": "elementary",
                "theme": "animals_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Eating pizza with a fork vs eating pizza with your hands — which is correct?",
                "sideA": "Fork",
                "sideB": "Hands",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sleeping with socks on vs sleeping without socks — which is better?",
                "sideA": "Socks on",
                "sideB": "No socks",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sandcastle vs snowman — which is more fun to build?",
                "sideA": "Sandcastle",
                "sideB": "Snowman",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lots of exams vs very few exams — which is fairer?",
                "sideA": "Lots of exams",
                "sideB": "Very few exams",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Starting school at 7 vs starting school at 5 — which is better for children?",
                "sideA": "At 7",
                "sideB": "At 5",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Eating slowly vs eating quickly — which is better for you?",
                "sideA": "Slowly",
                "sideB": "Quickly",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cooking at home vs ordering food online — which is better?",
                "sideA": "Cooking at home",
                "sideB": "Ordering online",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cooking vs baking — which is more fun as a hobby?",
                "sideA": "Cooking",
                "sideB": "Baking",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Going to the gym vs exercising outside — which is better?",
                "sideA": "Gym",
                "sideB": "Outside",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Photos on your phone vs printed photos — which is better?",
                "sideA": "Phone photos",
                "sideB": "Printed photos",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Smart TV vs computer screen — which is better for watching films?",
                "sideA": "Smart TV",
                "sideB": "Computer",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Hot country vs cold country — which is a better holiday destination?",
                "sideA": "Hot country",
                "sideB": "Cold country",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Giving presents vs receiving presents — which do you prefer?",
                "sideA": "Giving",
                "sideB": "Receiving",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Working indoors vs working outdoors — which is better?",
                "sideA": "Indoors",
                "sideB": "Outdoors",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pineapple on pizza vs no pineapple on pizza — which is correct?",
                "sideA": "Pineapple",
                "sideB": "No pineapple",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Putting milk in first vs putting tea in first — which is better?",
                "sideA": "Milk first",
                "sideB": "Tea first",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Monday vs Friday — which day is actually worse?",
                "sideA": "Monday",
                "sideB": "Friday",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Waking up five minutes before the alarm vs sleeping until the alarm — which is more annoying?",
                "sideA": "Before alarm",
                "sideB": "Until alarm",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cats vs dogs — which animal is secretly the boss of the house?",
                "sideA": "Cats",
                "sideB": "Dogs",
                "level": "elementary",
                "theme": "animals_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Being too hot vs being too cold — which is worse?",
                "sideA": "Too hot",
                "sideB": "Too cold",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "The last vacation I took",
                "level": "elementary",
                "theme": "transport_travel_A2"
            }
        ]
    }
};

    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData["en"]) window.speakingData["en"] = {};

    for (const cat in speakingData["en"]) {
        if (!window.speakingData["en"][cat]) window.speakingData["en"][cat] = [];
        window.speakingData["en"][cat].push(...speakingData["en"][cat]);
    }
})();
