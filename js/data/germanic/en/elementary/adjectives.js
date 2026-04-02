(function() {
    const data = [
    {
        "word": "beautiful",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "form": "adjective",
        "emoji": "✨",
        "opposite": "ugly",
        "definitions": [
            {
                "text": "Pleasing the senses or mind aesthetically.",
                "examples": [
                    "The view from the top of the mountain was absolutely beautiful."
                ]
            }
        ],
        "subtext": "absolutely beautiful / a beautiful day / beautiful view",
        "comparative": "more beautiful",
        "superlative": "the most beautiful"
    },
    {
        "word": "strong",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "form": "adjective",
        "emoji": "💪",
        "opposite": "weak",
        "definitions": [
            {
                "text": "Having the power to move heavy weights or perform other physically demanding tasks.",
                "examples": [
                    "He is a strong swimmer and can cross the lake easily."
                ]
            }
        ],
        "subtext": "strong muscles / very strong / strong enough",
        "comparative": "stronger",
        "superlative": "the strongest"
    },
    {
        "word": "blonde",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "form": "adjective",
        "emoji": "👱",
        "opposite": "brunette",
        "definitions": [
            {
                "text": "Having fair or pale yellow hair.",
                "examples": [
                    "She has long blonde hair and blue eyes."
                ]
            }
        ],
        "subtext": "natural blonde / blonde hair / light blonde",
        "comparative": "blonder",
        "superlative": "the blondest"
    },
    {
        "word": "snowy",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "❄️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Covered with snow or characterized by snow.",
                "examples": [
                    "It was a snowy morning, so the children went out to play."
                ]
            }
        ],
        "subtext": "snowy weather / snowy day / cold and snowy",
        "comparative": "snowier",
        "superlative": "the snowiest",
        "opposite": "clear"
    },
    {
        "word": "windy",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "💨",
        "form": "adjective",
        "definitions": [
            {
                "text": "Characterized by or exposed to strong winds.",
                "examples": [
                    "It is very windy today, so be careful with your umbrella."
                ]
            }
        ],
        "subtext": "very windy / windy day / cold and windy",
        "comparative": "windier",
        "superlative": "the windiest",
        "opposite": "calm"
    },
    {
        "word": "cloudy",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "☁️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Covered with or characterized by clouds.",
                "examples": [
                    "It is a cloudy afternoon, but it might not rain."
                ]
            }
        ],
        "subtext": "cloudy sky / very cloudy / partly cloudy",
        "comparative": "cloudier",
        "superlative": "the cloudiest",
        "opposite": "clear"
    },
    {
        "word": "athletic",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "form": "adjective",
        "emoji": "🏃",
        "opposite": "lazy",
        "definitions": [
            {
                "text": "Physically strong, fit, and active.",
                "examples": [
                    "He has an athletic build because he plays football every day."
                ]
            }
        ],
        "subtext": "athletic build / very athletic / athletic performance",
        "comparative": "more athletic",
        "superlative": "the most athletic"
    },
    {
        "word": "fit",
        "level": "elementary",
        "theme": "exercise_fitness_A2",
        "emoji": "💪",
        "form": "adjective",
        "opposite": "unfit",
        "definitions": [
            {
                "text": "In good physical condition.",
                "examples": [
                    "He stays fit by going to the gym three times a week."
                ]
            }
        ],
        "subtext": "physically fit / very fit / stay fit",
        "comparative": "fitter",
        "superlative": "the fittest"
    },
    {
        "word": "overweight",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "⚖️",
        "form": "adjective",
        "opposite": "underweight",
        "definitions": [
            {
                "text": "Heavier than is considered healthy.",
                "examples": [
                    "The doctor told him he was slightly overweight."
                ]
            }
        ],
        "subtext": "slightly overweight / become overweight / clinically overweight",
        "comparative": "more overweight",
        "superlative": "the most overweight"
    },
    {
        "word": "convenient",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "👌",
        "form": "adjective",
        "opposite": "inconvenient",
        "definitions": [
            {
                "text": "Easy to use or well-positioned.",
                "examples": [
                    "The office is in a convenient location near the station."
                ]
            }
        ],
        "subtext": "very convenient / conveniently located / a convenient time",
        "comparative": "more convenient",
        "superlative": "the most convenient"
    },
    {
        "word": "stressful",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "😫",
        "form": "adjective",
        "opposite": "relaxing",
        "definitions": [
            {
                "text": "Causing worry or anxiety.",
                "examples": [
                    "Her job is very stressful."
                ]
            }
        ],
        "subtext": "a stressful job / very stressful / stressful situation",
        "comparative": "more stressful",
        "superlative": "the most stressful"
    },
    {
        "word": "comfortable",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🛋️",
        "form": "adjective",
        "opposite": "uncomfortable",
        "definitions": [
            {
                "text": "Providing physical ease; free from pain.",
                "examples": [
                    "The new chairs are much more comfortable."
                ]
            }
        ],
        "subtext": "very comfortable / comfortable with / feel comfortable",
        "comparative": "more comfortable",
        "superlative": "the most comfortable"
    },
    {
        "word": "practical",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "impractical",
        "definitions": [
            {
                "text": "Useful in real situations; sensible.",
                "examples": [
                    "She gave very practical advice."
                ]
            }
        ],
        "subtext": "very practical / highly practical / a practical solution",
        "comparative": "more practical",
        "superlative": "the most practical"
    },
    {
        "word": "popular",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "🌟",
        "form": "adjective",
        "opposite": "unpopular",
        "definitions": [
            {
                "text": "Liked or enjoyed by many people.",
                "examples": [
                    "This restaurant is very popular."
                ]
            }
        ],
        "subtext": "very popular / popular choice / a popular person",
        "comparative": "more popular",
        "superlative": "the most popular"
    },
    {
        "word": "busy",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏃",
        "form": "adjective",
        "opposite": "quiet",
        "definitions": [
            {
                "text": "Having a lot of work or activity.",
                "examples": [
                    "She has a busy schedule this week with three client visits."
                ]
            }
        ],
        "subtext": "very busy / a busy day / too busy to talk",
        "comparative": "busier",
        "superlative": "the busiest"
    },
    {
        "word": "flexible",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🧘",
        "form": "adjective",
        "opposite": "rigid",
        "definitions": [
            {
                "text": "Able to change and adapt easily to different situations.",
                "examples": [
                    "The company offers flexible working hours."
                ]
            }
        ],
        "subtext": "flexible hours / flexible approach / very flexible",
        "comparative": "more flexible",
        "superlative": "the most flexible"
    },
    {
        "word": "organised",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📁",
        "form": "adjective",
        "opposite": "disorganised",
        "definitions": [
            {
                "text": "Able to plan and manage things in an orderly way.",
                "examples": [
                    "You need to be very organised to meet every deadline."
                ]
            }
        ],
        "subtext": "well organised / highly organised / stay organised",
        "comparative": "more organised",
        "superlative": "the most organised"
    },
    {
        "word": "professional",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👔",
        "form": "adjective",
        "opposite": "unprofessional",
        "definitions": [
            {
                "text": "Behaving in a skilled and appropriate way for a job.",
                "examples": [
                    "She always appears very professional in meetings."
                ]
            }
        ],
        "subtext": "professional advice / very professional / highly professional",
        "comparative": "more professional",
        "superlative": "the most professional"
    },
    {
        "word": "responsible",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🛡️",
        "form": "adjective",
        "opposite": "irresponsible",
        "definitions": [
            {
                "text": "Having a duty to deal with something; reliable.",
                "examples": [
                    "He is responsible for the whole marketing budget."
                ]
            }
        ],
        "subtext": "responsible for / very responsible / highly responsible",
        "comparative": "more responsible",
        "superlative": "the most responsible"
    },
    {
        "word": "experienced",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🎓",
        "form": "adjective",
        "opposite": "inexperienced",
        "definitions": [
            {
                "text": "Having knowledge and skill from practice.",
                "examples": [
                    "The company needs an experienced project manager."
                ]
            }
        ],
        "subtext": "highly experienced / experienced in / experienced enough",
        "comparative": "more experienced",
        "superlative": "the most experienced"
    },
    {
        "word": "qualified",
        "level": "elementary",
        "theme": "qualifications_exams_A2",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "unqualified",
        "definitions": [
            {
                "text": "Having the necessary skills or training.",
                "examples": [
                    "She is fully qualified to lead the team."
                ]
            }
        ],
        "subtext": "fully qualified / well qualified / highly qualified",
        "comparative": "more qualified",
        "superlative": "the most qualified"
    },
    {
        "word": "available",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🙋",
        "form": "adjective",
        "opposite": "unavailable",
        "definitions": [
            {
                "text": "Free; able to be used or reached.",
                "examples": [
                    "Is the manager available for a meeting at three?"
                ]
            }
        ],
        "subtext": "widely available / freely available / available for",
        "comparative": "more available",
        "superlative": "the most available"
    },
    {
        "word": "successful",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏆",
        "form": "adjective",
        "opposite": "unsuccessful",
        "definitions": [
            {
                "text": "Having achieved something desired.",
                "examples": [
                    "She had a very successful first year in the role."
                ]
            }
        ],
        "subtext": "highly successful / a successful career / very successful",
        "comparative": "more successful",
        "superlative": "the most successful"
    },
    {
        "word": "ambitious",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🚀",
        "form": "adjective",
        "opposite": "lazy",
        "definitions": [
            {
                "text": "Having a strong desire to succeed.",
                "examples": [
                    "He is very ambitious and wants to be a director by forty."
                ]
            }
        ],
        "subtext": "very ambitious / hugely ambitious / an ambitious plan",
        "comparative": "more ambitious",
        "superlative": "the most ambitious"
    },
    {
        "word": "creative",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🎨",
        "form": "adjective",
        "opposite": "unimaginative",
        "definitions": [
            {
                "text": "Able to produce new and original ideas.",
                "examples": [
                    "The design team is very creative and hard-working."
                ]
            }
        ],
        "subtext": "very creative / creative thinking / creative solution",
        "comparative": "more creative",
        "superlative": "the most creative"
    },
    {
        "word": "productive",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⚙️",
        "form": "adjective",
        "opposite": "unproductive",
        "definitions": [
            {
                "text": "Doing or producing a lot of useful work.",
                "examples": [
                    "She is most productive in the early morning hours."
                ]
            }
        ],
        "subtext": "very productive / highly productive / a productive meeting",
        "comparative": "more productive",
        "superlative": "the most productive"
    },
    {
        "word": "reliable",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🤝",
        "form": "adjective",
        "opposite": "unreliable",
        "definitions": [
            {
                "text": "Consistently good; able to be trusted.",
                "examples": [
                    "He is the most reliable person in the team."
                ]
            }
        ],
        "subtext": "very reliable / highly reliable / a reliable source",
        "comparative": "more reliable",
        "superlative": "the most reliable"
    },
    {
        "word": "independent",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🦅",
        "form": "adjective",
        "opposite": "dependent",
        "definitions": [
            {
                "text": "Not needing help or support from others.",
                "examples": [
                    "She is very independent and manages her own workload."
                ]
            }
        ],
        "subtext": "financially independent / very independent / an independent report",
        "comparative": "more independent",
        "superlative": "the most independent"
    },
    {
        "word": "cheap",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "expensive",
        "definitions": [
            {
                "text": "Low in price; not expensive.",
                "examples": [
                    "This solution is much cheaper than hiring extra staff."
                ]
            }
        ],
        "subtext": "very cheap / cheap option / cheap and easy",
        "comparative": "cheaper",
        "superlative": "the cheapest"
    },
    {
        "word": "expensive",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "cheap",
        "definitions": [
            {
                "text": "High in price; costing a lot.",
                "examples": [
                    "The central office space is extremely expensive."
                ]
            }
        ],
        "subtext": "very expensive / expensive taste / too expensive",
        "comparative": "more expensive",
        "superlative": "the most expensive"
    },
    {
        "word": "affordable",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💵",
        "form": "adjective",
        "opposite": "expensive",
        "definitions": [
            {
                "text": "Within the ability of most people to pay.",
                "examples": [
                    "They are looking for affordable office space."
                ]
            }
        ],
        "subtext": "affordable price / more affordable / affordable option",
        "comparative": "more affordable",
        "superlative": "the most affordable"
    },
    {
        "word": "worth",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💰",
        "form": "adjective",
        "opposite": "worthless",
        "definitions": [
            {
                "text": "Having a value equal to or deserving of.",
                "examples": [
                    "The investment is worth every penny."
                ]
            }
        ],
        "subtext": "worth the money / worth doing / worth considering",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "free",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🎁",
        "form": "adjective",
        "opposite": "expensive",
        "definitions": [
            {
                "text": "Not costing any money.",
                "examples": [
                    "The parking is free for all employees."
                ]
            }
        ],
        "subtext": "free of charge / completely free / free trial",
        "comparative": "freer",
        "superlative": "the freest"
    },
    {
        "word": "broke",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📉",
        "form": "adjective",
        "opposite": "rich",
        "definitions": [
            {
                "text": "Having no money at all; informal.",
                "examples": [
                    "He spent too much and is completely broke."
                ]
            }
        ],
        "subtext": "flat broke / completely broke / go broke",
        "comparative": "more broke",
        "superlative": "the most broke"
    },
    {
        "word": "rich",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🏦",
        "form": "adjective",
        "opposite": "poor",
        "definitions": [
            {
                "text": "Having a lot of money.",
                "examples": [
                    "She became very rich after selling her company."
                ]
            }
        ],
        "subtext": "very rich / rich enough / fabulously rich",
        "comparative": "richer",
        "superlative": "the richest"
    },
    {
        "word": "poor",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🏚️",
        "form": "adjective",
        "opposite": "rich",
        "definitions": [
            {
                "text": "Having very little money.",
                "examples": [
                    "The company started out very poor and built itself up."
                ]
            }
        ],
        "subtext": "very poor / poor quality / dirt poor",
        "comparative": "poorer",
        "superlative": "the poorest"
    },
    {
        "word": "healthy",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🍎",
        "form": "adjective",
        "opposite": "unhealthy",
        "definitions": [
            {
                "text": "In good health; good for you.",
                "examples": [
                    "She follows a healthy lifestyle outside work."
                ]
            }
        ],
        "subtext": "healthy diet / very healthy / stay healthy",
        "comparative": "healthier",
        "superlative": "the healthiest"
    },
    {
        "word": "unhealthy",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🍔",
        "form": "adjective",
        "opposite": "healthy",
        "definitions": [
            {
                "text": "Not good for your health.",
                "examples": [
                    "Sitting at a desk all day is unhealthy."
                ]
            }
        ],
        "subtext": "very unhealthy / unhealthy habits / deeply unhealthy",
        "comparative": "unhealthier",
        "superlative": "the unhealthiest"
    },
    {
        "word": "ill",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🤒",
        "form": "adjective",
        "opposite": "well",
        "definitions": [
            {
                "text": "Not well; suffering from sickness.",
                "examples": [
                    "She is ill and working from home this week."
                ]
            }
        ],
        "subtext": "seriously ill / fall ill / feel ill",
        "comparative": "iller",
        "superlative": "the illest"
    },
    {
        "word": "sick",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🤢",
        "form": "adjective",
        "opposite": "well",
        "definitions": [
            {
                "text": "Feeling physically unwell; nauseous.",
                "examples": [
                    "He called in sick on Monday morning."
                ]
            }
        ],
        "subtext": "feel sick / call in sick / very sick",
        "comparative": "sicker",
        "superlative": "the sickest"
    },
    {
        "word": "tired",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "😴",
        "form": "adjective",
        "opposite": "rested",
        "definitions": [
            {
                "text": "Feeling the need to rest.",
                "examples": [
                    "I feel very tired after the long business trip."
                ]
            }
        ],
        "subtext": "feel tired / exhausted and tired / too tired",
        "comparative": "tireder",
        "superlative": "the tiredest"
    },
    {
        "word": "stressed",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "😫",
        "form": "adjective",
        "opposite": "relaxed",
        "definitions": [
            {
                "text": "Feeling worried and tense.",
                "examples": [
                    "She feels stressed about the upcoming presentation."
                ]
            }
        ],
        "subtext": "feel stressed / very stressed / completely stressed",
        "comparative": "more stressed",
        "superlative": "the most stressed"
    },
    {
        "word": "friendly",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👋",
        "form": "adjective",
        "opposite": "unfriendly",
        "definitions": [
            {
                "text": "Kind, pleasant and easy to talk to.",
                "examples": [
                    "All the staff in this office are very friendly."
                ]
            }
        ],
        "subtext": "very friendly / a friendly atmosphere / friendly enough",
        "comparative": "friendlier",
        "superlative": "the friendliest"
    },
    {
        "word": "kind",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "❤️",
        "form": "adjective",
        "opposite": "unkind",
        "definitions": [
            {
                "text": "Generous and caring towards others.",
                "examples": [
                    "She is kind to everyone, even under pressure."
                ]
            }
        ],
        "subtext": "very kind / kind of you / a kind gesture",
        "comparative": "kinder",
        "superlative": "the kindest"
    },
    {
        "word": "honest",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "⚖️",
        "form": "adjective",
        "opposite": "dishonest",
        "definitions": [
            {
                "text": "Telling the truth; not deceiving people.",
                "examples": [
                    "He is completely honest with clients and colleagues."
                ]
            }
        ],
        "subtext": "brutally honest / very honest / completely honest",
        "comparative": "more honest",
        "superlative": "the most honest"
    },
    {
        "word": "patient",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "⏳",
        "form": "adjective",
        "opposite": "impatient",
        "definitions": [
            {
                "text": "Able to wait without complaining.",
                "examples": [
                    "A good trainer needs to be extremely patient."
                ]
            }
        ],
        "subtext": "very patient / patient with / incredibly patient",
        "comparative": "more patient",
        "superlative": "the most patient"
    },
    {
        "word": "polite",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🙇",
        "form": "adjective",
        "opposite": "rude",
        "definitions": [
            {
                "text": "Behaving with courtesy and respect.",
                "examples": [
                    "She is always polite, even in difficult conversations."
                ]
            }
        ],
        "subtext": "very polite / politely refuse / be polite",
        "comparative": "politer",
        "superlative": "the politest"
    },
    {
        "word": "supportive",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🤝",
        "form": "adjective",
        "opposite": "unsupportive",
        "definitions": [
            {
                "text": "Giving help and encouragement.",
                "examples": [
                    "Her manager is very supportive during busy periods."
                ]
            }
        ],
        "subtext": "very supportive / supportive team / be supportive",
        "comparative": "more supportive",
        "superlative": "the most supportive"
    },
    {
        "word": "confident",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "insecure",
        "definitions": [
            {
                "text": "Sure of one's own ability.",
                "examples": [
                    "He presents with confidence and is very confident."
                ]
            }
        ],
        "subtext": "self-confident / very confident / feel confident",
        "comparative": "more confident",
        "superlative": "the most confident"
    },
    {
        "word": "sociable",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🗣️",
        "form": "adjective",
        "opposite": "unsociable",
        "definitions": [
            {
                "text": "Enjoying spending time with other people.",
                "examples": [
                    "She is very sociable and knows everyone."
                ]
            }
        ],
        "subtext": "very sociable / naturally sociable / sociable person",
        "comparative": "more sociable",
        "superlative": "the most sociable"
    },
    {
        "word": "modern",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🏙️",
        "form": "adjective",
        "opposite": "old-fashioned",
        "definitions": [
            {
                "text": "Designed for the present time; up to date.",
                "examples": [
                    "The company moved to a modern, open-plan office."
                ]
            }
        ],
        "subtext": "very modern / modern design / ultra-modern",
        "comparative": "more modern",
        "superlative": "the most modern"
    },
    {
        "word": "traditional",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🏛️",
        "form": "adjective",
        "opposite": "modern",
        "definitions": [
            {
                "text": "Following established customs or ways.",
                "examples": [
                    "The company has a traditional management structure."
                ]
            }
        ],
        "subtext": "very traditional / traditional approach / deeply traditional",
        "comparative": "more traditional",
        "superlative": "the most traditional"
    },
    {
        "word": "local",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "📍",
        "form": "adjective",
        "opposite": "international",
        "definitions": [
            {
                "text": "Relating to the nearby area.",
                "examples": [
                    "She prefers to use local suppliers."
                ]
            }
        ],
        "subtext": "local area / local business / a local problem",
        "comparative": "more local",
        "superlative": "the most local"
    },
    {
        "word": "international",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🌎",
        "form": "adjective",
        "opposite": "local",
        "definitions": [
            {
                "text": "Involving more than one country.",
                "examples": [
                    "The company works with international clients."
                ]
            }
        ],
        "subtext": "international business / fully international / international team",
        "comparative": "more international",
        "superlative": "the most international"
    },
    {
        "word": "interesting",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "💡",
        "form": "adjective",
        "opposite": "boring",
        "definitions": [
            {
                "text": "Attracting attention; worth knowing about.",
                "examples": [
                    "The conference session on AI was very interesting."
                ]
            }
        ],
        "subtext": "very interesting / find interesting / an interesting point",
        "comparative": "more interesting",
        "superlative": "the most interesting"
    },
    {
        "word": "boring",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "💤",
        "form": "adjective",
        "opposite": "interesting",
        "definitions": [
            {
                "text": "Not interesting; dull.",
                "examples": [
                    "The compliance training was very boring."
                ]
            }
        ],
        "subtext": "very boring / a boring meeting / find boring",
        "comparative": "more boring",
        "superlative": "the most boring"
    },
    {
        "word": "strange",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "❓",
        "form": "adjective",
        "opposite": "normal",
        "definitions": [
            {
                "text": "Unusual or surprising in a way that is hard to understand.",
                "examples": [
                    "The email from the client sounded very strange."
                ]
            }
        ],
        "subtext": "very strange / a strange feeling / find strange",
        "comparative": "stranger",
        "superlative": "the strangest"
    },
    {
        "word": "normal",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "strange",
        "definitions": [
            {
                "text": "Typical or usual; what you would expect.",
                "examples": [
                    "It is normal to feel nervous before a big presentation."
                ]
            }
        ],
        "subtext": "completely normal / perfectly normal / feel normal",
        "comparative": "more normal",
        "superlative": "the most normal"
    },
    {
        "word": "typical",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🔄",
        "form": "adjective",
        "opposite": "unusual",
        "definitions": [
            {
                "text": "Having the usual qualities of a type of person or thing.",
                "examples": [
                    "This is a typical problem in large organisations."
                ]
            }
        ],
        "subtext": "very typical / a typical day / typical of",
        "comparative": "more typical",
        "superlative": "the most typical"
    },
    {
        "word": "common",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "📍",
        "form": "adjective",
        "opposite": "rare",
        "definitions": [
            {
                "text": "Happening often; found in many places.",
                "examples": [
                    "Burnout is a common problem in this industry."
                ]
            }
        ],
        "subtext": "very common / common problem / common sense",
        "comparative": "commoner",
        "superlative": "the commonest"
    },
    {
        "word": "rare",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "common",
        "definitions": [
            {
                "text": "Not happening often; not found in many places.",
                "examples": [
                    "A truly supportive manager is rare."
                ]
            }
        ],
        "subtext": "very rare / rare opportunity / a rare event",
        "comparative": "rarer",
        "superlative": "the rarest"
    },
    {
        "word": "certain",
        "level": "elementary",
        "theme": "comparison_A2",
        "emoji": "🎯",
        "form": "adjective",
        "opposite": "uncertain",
        "definitions": [
            {
                "text": "Definite; without any doubt.",
                "examples": [
                    "She is certain that she made the right choice."
                ]
            }
        ],
        "subtext": "absolutely certain / be certain / feel certain",
        "comparative": "more certain",
        "superlative": "the most certain"
    },
    {
        "word": "clear",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🔍",
        "form": "adjective",
        "opposite": "unclear",
        "definitions": [
            {
                "text": "Easy to understand; free from confusion.",
                "examples": [
                    "The instructions are very clear."
                ]
            }
        ],
        "subtext": "crystal clear / very clear / make clear",
        "comparative": "clearer",
        "superlative": "the clearest"
    },
    {
        "word": "difficult",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🧩",
        "form": "adjective",
        "opposite": "easy",
        "definitions": [
            {
                "text": "Not easy; requiring effort or skill.",
                "examples": [
                    "The negotiation was very difficult."
                ]
            }
        ],
        "subtext": "very difficult / find difficult / difficult to understand",
        "comparative": "more difficult",
        "superlative": "the most difficult"
    },
    {
        "word": "simple",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "💡",
        "form": "adjective",
        "opposite": "complicated",
        "definitions": [
            {
                "text": "Easy to understand or do; not complicated.",
                "examples": [
                    "The solution is actually very simple."
                ]
            }
        ],
        "subtext": "very simple / simple enough / keep it simple",
        "comparative": "simpler",
        "superlative": "the simplest"
    },
    {
        "word": "complicated",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🕸️",
        "form": "adjective",
        "opposite": "simple",
        "definitions": [
            {
                "text": "Involving many parts; not easy to understand.",
                "examples": [
                    "The contract is very complicated."
                ]
            }
        ],
        "subtext": "very complicated / get complicated / overly complicated",
        "comparative": "more complicated",
        "superlative": "the most complicated"
    },
    {
        "word": "serious",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "👔",
        "form": "adjective",
        "opposite": "funny",
        "definitions": [
            {
                "text": "Important; requiring careful thought.",
                "examples": [
                    "This is a serious problem that needs attention."
                ]
            }
        ],
        "subtext": "very serious / deadly serious / a serious issue",
        "comparative": "more serious",
        "superlative": "the most serious"
    },
    {
        "word": "funny",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "😂",
        "form": "adjective",
        "opposite": "serious",
        "definitions": [
            {
                "text": "Making you laugh; humorous.",
                "examples": [
                    "The client shared a funny story to break the ice."
                ]
            }
        ],
        "subtext": "very funny / a funny situation / find funny",
        "comparative": "funnier",
        "superlative": "the funniest"
    },
    {
        "word": "direct",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "➡️",
        "form": "adjective",
        "opposite": "indirect",
        "definitions": [
            {
                "text": "Going straight to the point; not indirect.",
                "examples": [
                    "He is very direct and says exactly what he thinks."
                ]
            }
        ],
        "subtext": "very direct / direct approach / a direct question",
        "comparative": "more direct",
        "superlative": "the most direct"
    },
    {
        "word": "daily",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "📅",
        "form": "adjective",
        "opposite": "rare",
        "definitions": [
            {
                "text": "Happening every day.",
                "examples": [
                    "She has a daily commute of forty-five minutes."
                ]
            }
        ],
        "subtext": "daily routine / on a daily basis / daily report",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "regular",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🔁",
        "form": "adjective",
        "opposite": "irregular",
        "definitions": [
            {
                "text": "Happening at fixed times or intervals.",
                "examples": [
                    "They have regular team meetings on Mondays."
                ]
            }
        ],
        "subtext": "very regular / regular basis / regular customer",
        "comparative": "more regular",
        "superlative": "the most regular"
    },
    {
        "word": "recent",
        "level": "elementary",
        "theme": "past_time_A2",
        "emoji": "🕒",
        "form": "adjective",
        "opposite": "old",
        "definitions": [
            {
                "text": "Having happened not long ago.",
                "examples": [
                    "Have you seen the recent changes to the policy?"
                ]
            }
        ],
        "subtext": "most recent / very recent / recent news",
        "comparative": "more recent",
        "superlative": "the most recent"
    },
    {
        "word": "current",
        "level": "elementary",
        "theme": "sequence_order_A2",
        "emoji": "📍",
        "form": "adjective",
        "opposite": "former",
        "definitions": [
            {
                "text": "Happening or existing now.",
                "examples": [
                    "What is your current salary?"
                ]
            }
        ],
        "subtext": "current situation / current employer / currently",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "future",
        "level": "elementary",
        "theme": "future_time_A2",
        "emoji": "🔮",
        "form": "adjective",
        "opposite": "past",
        "definitions": [
            {
                "text": "Not yet happened; relating to a later time.",
                "examples": [
                    "What are your future plans for your career?"
                ]
            }
        ],
        "subtext": "future plans / in the future / future employer",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "previous",
        "level": "elementary",
        "theme": "past_time_A2",
        "emoji": "⬅️",
        "form": "adjective",
        "opposite": "next",
        "definitions": [
            {
                "text": "Happening or existing before the present.",
                "examples": [
                    "She mentioned her previous employer in the interview."
                ]
            }
        ],
        "subtext": "previous job / previous employer / previous experience",
        "comparative": null,
        "superlative": null
    }
];
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();