(function() {
    const speakingData = {
    "en": {
        "opinionArena": [
            {
                "text": "Can we live without the internet for a week?",
                "level": "intermediate",
                "theme": "media_news_B1"
            },
            {
                "text": "Should everyone learn a second language?",
                "level": "intermediate",
                "theme": "society_community_B1"
            }
        ],
        "criticsCorner": [
            {
                "text": "I think, therefore I am.",
                "author": "Descartes",
                "options": ["Descartes", "Kant", "Socrates", "Nietzsche"],
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "text": "Be the change you wish to see in the world.",
                "author": "Mahatma Gandhi",
                "options": ["Mahatma Gandhi", "Nelson Mandela", "Martin Luther King Jr.", "Dalai Lama"],
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "text": "The only thing we have to fear is fear itself.",
                "author": "Franklin D. Roosevelt",
                "options": ["Franklin D. Roosevelt", "Winston Churchill", "Abraham Lincoln", "Theodore Roosevelt"],
                "level": "intermediate",
                "theme": "society_community_B1"
            }
        ],
        "debates": [
            {
                "topic": "Remote work vs office work — which is better for productivity and wellbeing?",
                "sideA": "Remote",
                "sideB": "Office",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Job security vs career growth — which should adults prioritise?",
                "sideA": "Security",
                "sideB": "Growth",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Starting your own business vs working for an employer — which is the better choice at 30?",
                "sideA": "Own business",
                "sideB": "Working for employer",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ambition vs work-life balance — can you really have both?",
                "sideA": "Ambition",
                "sideB": "Balance",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Networking vs skill-building — which advances your career more?",
                "sideA": "Networking",
                "sideB": "Skills",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Honest feedback from a manager vs being left to work independently — which motivates adults more?",
                "sideA": "Feedback",
                "sideB": "Independence",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Changing career at 40 vs staying in your field — which is the wiser decision?",
                "sideA": "Changing career",
                "sideB": "Staying",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Paying off a mortgage early vs investing that money — which is smarter?",
                "sideA": "Pay off early",
                "sideB": "Investing",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Owning a home vs renting permanently — which suits modern adult life better?",
                "sideA": "Owning",
                "sideB": "Renting",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Saving for retirement early vs enjoying money in your thirties — which is wiser?",
                "sideA": "Saving early",
                "sideB": "Enjoying now",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Living below your means vs spending to enjoy life now — which approach is healthier?",
                "sideA": "Below means",
                "sideB": "Enjoy now",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Two incomes in a household vs one partner staying home — which works better for families?",
                "sideA": "Two incomes",
                "sideB": "One staying home",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Having children vs choosing not to — which is a more fulfilling adult life?",
                "sideA": "Having children",
                "sideB": "No children",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Strict parenting vs permissive parenting — which produces happier adults?",
                "sideA": "Strict",
                "sideB": "Permissive",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Long-term relationship vs staying single — which is better for personal growth?",
                "sideA": "Relationship",
                "sideB": "Single",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Keeping work and personal life separate vs integrating them — which is healthier?",
                "sideA": "Separate",
                "sideB": "Integrated",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Moving abroad as a couple vs staying close to family — which is the right call?",
                "sideA": "Moving abroad",
                "sideB": "Staying close",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Prioritising physical health vs mental health — which should adults focus on first?",
                "sideA": "Physical",
                "sideB": "Mental",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Private healthcare vs relying on the public system — which is the better adult strategy?",
                "sideA": "Private",
                "sideB": "Public",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Regular medical check-ups vs only going when ill — which is the smarter approach?",
                "sideA": "Regular checks",
                "sideB": "Only when ill",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Reducing alcohol vs reducing stress — which has a greater impact on adult health?",
                "sideA": "Reducing alcohol",
                "sideB": "Reducing stress",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Individual freedom vs community responsibility — which should guide adult decisions?",
                "sideA": "Freedom",
                "sideB": "Responsibility",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Optimism about the future vs realism — which is the more useful attitude for adults?",
                "sideA": "Optimism",
                "sideB": "Realism",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Changing the world vs building a stable personal life — which is the more honest ambition?",
                "sideA": "Changing world",
                "sideB": "Stable life",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Volunteering your time vs donating money — which does more good?",
                "sideA": "Volunteering",
                "sideB": "Donating",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Following your generation's values vs questioning them — which is more admirable?",
                "sideA": "Following",
                "sideB": "Questioning",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Knowing how much your colleagues earn vs not knowing — which is better for office harmony?",
                "sideA": "Knowing",
                "sideB": "Not knowing",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Replying to messages immediately vs taking your time — which is more respectful in adult life?",
                "sideA": "Immediately",
                "sideB": "Taking time",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Admitting you have no idea what a pension fund is vs pretending you do — which is the more relatable adult experience?",
                "sideA": "Admitting",
                "sideB": "Pretending",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cancelling plans at the last minute vs going out when you don't want to — which is the worse adult habit?",
                "sideA": "Cancelling",
                "sideB": "Going anyway",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Talking openly about money with friends vs keeping it private — which is the more mature approach?",
                "sideA": "Talking openly",
                "sideB": "Keeping private",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Work from home vs. Office work",
                "sideA": "Home",
                "sideB": "Office",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [
                    "No commute",
                    "Flexibility"
                ],
                "ideasB": [
                    "Socializing",
                    "Better focus"
                ]
            },
            {
                "topic": "Electric cars vs. Petrol cars",
                "sideA": "Electric",
                "sideB": "Petrol",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [
                    "Environment",
                    "Quiet"
                ],
                "ideasB": [
                    "Range",
                    "Charging speed"
                ]
            },
            {
                "topic": "Online learning vs classroom learning — which is more effective?",
                "sideA": "Online",
                "sideB": "Classroom",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Memorising facts vs learning how to find information — which skill is more important?",
                "sideA": "Facts",
                "sideB": "Finding info",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "University education vs vocational training — which is a better path?",
                "sideA": "University",
                "sideB": "Vocational",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Exams vs continuous assessment — which is a fairer way to evaluate students?",
                "sideA": "Exams",
                "sideB": "Continuous",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Learning a foreign language at school vs living abroad — which is more effective?",
                "sideA": "School",
                "sideB": "Living abroad",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Single-sex schools vs mixed schools — which are better for students?",
                "sideA": "Single-sex",
                "sideB": "Mixed",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Social media vs face-to-face communication — which is better for staying in touch?",
                "sideA": "Social media",
                "sideB": "Face-to-face",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Streaming services vs traditional TV — which is better?",
                "sideA": "Streaming",
                "sideB": "Traditional TV",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Working from home vs working in an office — which is more productive?",
                "sideA": "Home",
                "sideB": "Office",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Reading news online vs reading a newspaper — which is more reliable?",
                "sideA": "Online news",
                "sideB": "Newspaper",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Spending time on social media vs spending time in nature — which is better for your mental health?",
                "sideA": "Social media",
                "sideB": "Nature",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Using public transport vs driving a car — which is better for society?",
                "sideA": "Public transport",
                "sideB": "Car",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Buying second-hand clothes vs buying new clothes — which is the better habit?",
                "sideA": "Second-hand",
                "sideB": "New",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Living in a city vs living in the countryside — which suits young people better?",
                "sideA": "City",
                "sideB": "Countryside",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vegetarianism vs eating meat — which is better for the planet?",
                "sideA": "Vegetarianism",
                "sideB": "Meat",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Individual lifestyle changes vs government action — which does more for the environment?",
                "sideA": "Individual",
                "sideB": "Government",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "A stable job vs a creative career — which is the better life choice?",
                "sideA": "Stable job",
                "sideB": "Creative career",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Starting your own business vs working for a company — which is better?",
                "sideA": "Own business",
                "sideB": "Company",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "High salary vs job satisfaction — which matters more at work?",
                "sideA": "Salary",
                "sideB": "Satisfaction",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Working long hours vs having a work-life balance — which leads to more success?",
                "sideA": "Long hours",
                "sideB": "Balance",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Choosing a career based on passion vs based on job prospects — which is wiser?",
                "sideA": "Passion",
                "sideB": "Prospects",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Living as an individual vs putting community first — which is more important?",
                "sideA": "Individual",
                "sideB": "Community",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Traditional values vs modern values — which are more important to keep?",
                "sideA": "Traditional",
                "sideB": "Modern",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Volunteering vs donating money to charity — which helps more?",
                "sideA": "Volunteering",
                "sideB": "Donating",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fame vs making a difference quietly — which is a better goal in life?",
                "sideA": "Fame",
                "sideB": "Quiet difference",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Following rules vs thinking for yourself — which matters more?",
                "sideA": "Rules",
                "sideB": "Self-thought",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Physical health vs mental health — which should be the priority?",
                "sideA": "Physical",
                "sideB": "Mental",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Prevention vs treatment — which is the better approach to healthcare?",
                "sideA": "Prevention",
                "sideB": "Treatment",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Competitive sport vs exercise for fun — which is better for you?",
                "sideA": "Competitive",
                "sideB": "For fun",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Private healthcare vs public healthcare — which system is fairer?",
                "sideA": "Private",
                "sideB": "Public",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cinema vs literature — which is a more powerful art form?",
                "sideA": "Cinema",
                "sideB": "Literature",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Modern art vs classical art — which is more valuable?",
                "sideA": "Modern",
                "sideB": "Classical",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Preserving old buildings vs building new ones — which matters more?",
                "sideA": "Preserving old",
                "sideB": "Building new",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Local culture vs globalisation — which enriches communities more?",
                "sideA": "Local",
                "sideB": "Globalisation",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Learning from mistakes vs learning from success — which teaches more?",
                "sideA": "Mistakes",
                "sideB": "Success",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Tablets in class vs traditional notebooks — which help students more?",
                "sideA": "Tablets",
                "sideB": "Notebooks",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Being always contactable vs having digital free time — which is better?",
                "sideA": "Contactable",
                "sideB": "Free time",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Reusing things vs recycling — which is more effective?",
                "sideA": "Reusing",
                "sideB": "Recycling",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "One career for life vs changing careers often — which is better?",
                "sideA": "One career",
                "sideB": "Changing often",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sleep vs exercise — which has a bigger impact on your health?",
                "sideA": "Sleep",
                "sideB": "Exercise",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pop music vs classical music — which has a bigger cultural impact?",
                "sideA": "Pop",
                "sideB": "Classical",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Knowing how something ends before watching it vs being surprised — which is better?",
                "sideA": "Knowing",
                "sideB": "Surprised",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Replying to messages immediately vs taking your time — which is more respectful?",
                "sideA": "Immediately",
                "sideB": "Taking time",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Binge-watching a series in one go vs watching one episode a week — which is the right way?",
                "sideA": "Binge-watching",
                "sideB": "Weekly",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Window seat vs aisle seat on a plane — which is objectively better?",
                "sideA": "Window seat",
                "sideB": "Aisle seat",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Skipping the gym once vs going and having a bad session — which is worse?",
                "sideA": "Skipping",
                "sideB": "Bad session",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Talking to yourself vs talking to your pet — which is more reasonable?",
                "sideA": "To yourself",
                "sideB": "To pet",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "A person who inspired me",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "topic": "The importance of mental health awareness",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1"
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
