(function() {
    const data = [
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
        "word": "ordinary",
        "level": "elementary",
        "theme": "condition_state_A2",
        "form": "adjective",
        "opposite": "special",
        "oppositeEmoji": "✨",
        "definitions": [
            {
                "text": "Normal or usual; not special.",
                "examples": [
                    "It was an ordinary day."
                ]
            }
        ],
        "subtext": "ordinary day / ordinary life / nothing ordinary",
        "comparative": "more ordinary",
        "superlative": "the most ordinary",
        "emoji": "😐"
    },



    {
        "word": "satisfied",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "dissatisfied",
        "oppositeEmoji": "😒",
        "subtext": "content, pleased / feel satisfied / satisfied with",
        "definitions": [
            {
                "text": "Pleased because you have got what you wanted.",
                "examples": [
                    "She is satisfied with her new salary."
                ]
            }
        ],
        "comparative": "more satisfied",
        "superlative": "the most satisfied"
    },



    {
        "word": "useful",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "useless",
        "oppositeEmoji": "🗑️",
        "subtext": "helpful, practical",
        "definitions": [
            {
                "text": "Helpful; having a practical purpose.",
                "examples": [
                    "A car is very useful in the country."
                ]
            }
        ],
        "comparative": "more useful",
        "superlative": "the most useful"
    },



    {
        "word": "dissatisfied",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "😒",
        "form": "adjective",
        "opposite": "satisfied",
        "oppositeEmoji": "😌",
        "subtext": "unhappy, not content / dissatisfied customer / feel dissatisfied",
        "definitions": [
            {
                "text": "Not pleased with something.",
                "examples": [
                    "He is dissatisfied with the service."
                ]
            }
        ],
        "comparative": "more dissatisfied",
        "superlative": "the most dissatisfied"
    },



    {
        "word": "excellent",
        "level": "elementary",
        "theme": "condition_state_A2",
        "form": "adjective",
        "opposite": "good",
        "oppositeEmoji": "📉",
        "definitions": [
            {
                "text": "Extremely good; of a very high standard.",
                "examples": [
                    "She received an excellent review."
                ]
            }
        ],
        "subtext": "excellent work / excellent results / absolutely excellent",
        "comparative": "more excellent",
        "superlative": "the most excellent",
        "emoji": "🏆"
    },



    {
        "word": "imperfect",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🩹",
        "form": "adjective",
        "opposite": "perfect",
        "oppositeEmoji": "✨",
        "subtext": "flawed / imperfect system / imperfect world",
        "definitions": [
            {
                "text": "Not perfect; having some faults or mistakes.",
                "examples": [
                    "We live in an imperfect world."
                ]
            }
        ],
        "comparative": "more imperfect",
        "superlative": "the most imperfect"
    },



    {
        "word": "useless",
        "level": "elementary",
        "theme": "condition_state_A2",
        "form": "adjective",
        "opposite": "useful",
        "oppositeEmoji": "🛠️",
        "definitions": [
            {
                "text": "Without any useful value; not helpful.",
                "examples": [
                    "This software is useless for our needs."
                ]
            }
        ],
        "subtext": "completely useless / prove useless / a useless idea",
        "comparative": "more useless",
        "superlative": "the most useless",
        "emoji": "🗑️"
    },



    {
        "word": "necessary",
        "level": "elementary",
        "theme": "condition_state_A2",
        "form": "adjective",
        "opposite": "unnecessary",
        "oppositeEmoji": "🍃",
        "definitions": [
            {
                "text": "Needed; required in order to do something.",
                "examples": [
                    "A good internet connection is necessary for remote work."
                ]
            }
        ],
        "subtext": "absolutely necessary / if necessary / necessary to do",
        "comparative": "more necessary",
        "superlative": "the most necessary",
        "emoji": "❗"
    },



    {
        "word": "unnecessary",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🍃",
        "form": "adjective",
        "opposite": "necessary",
        "oppositeEmoji": "❗",
        "subtext": "not needed / unnecessary expense / absolutely unnecessary",
        "definitions": [
            {
                "text": "Not needed; more than is needed.",
                "examples": [
                    "That is an unnecessary expense."
                ]
            }
        ],
        "comparative": "more unnecessary",
        "superlative": "the most unnecessary"
    },



    {
        "word": "possible",
        "level": "elementary",
        "theme": "condition_state_A2",
        "form": "adjective",
        "opposite": "impossible",
        "oppositeEmoji": "🚫",
        "definitions": [
            {
                "text": "Able to happen or be achieved.",
                "examples": [
                    "Is it possible to finish by Friday?"
                ]
            }
        ],
        "subtext": "as soon as possible / it is possible / make possible",
        "comparative": "more possible",
        "superlative": "the most possible",
        "emoji": "👍"
    },



    {
        "word": "impossible",
        "level": "elementary",
        "theme": "condition_state_A2",
        "form": "adjective",
        "opposite": "possible",
        "oppositeEmoji": "✅",
        "definitions": [
            {
                "text": "Not able to happen or be done.",
                "examples": [
                    "It is impossible to finish in one day."
                ]
            }
        ],
        "subtext": "virtually impossible / make impossible / nearly impossible",
        "comparative": "more impossible",
        "superlative": "the most impossible",
        "emoji": "🚫"
    },



    {
        "word": "popular",
        "level": "elementary",
        "theme": "condition_state_A2",
        "form": "adjective",
        "opposite": "unpopular",
        "oppositeEmoji": "👎",
        "definitions": [
            {
                "text": "Liked by many people.",
                "examples": [
                    "The new café near the office is very popular."
                ]
            }
        ],
        "subtext": "very popular / popular choice / most popular",
        "comparative": "more popular",
        "superlative": "the most popular",
        "emoji": "🌟"
    },



    {
        "word": "unpopular",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "popular",
        "oppositeEmoji": "🌟",
        "subtext": "disliked / unpopular decision / become unpopular",
        "definitions": [
            {
                "text": "Not liked by many people.",
                "examples": [
                    "The decision was very unpopular with the staff."
                ]
            }
        ],
        "comparative": "more unpopular",
        "superlative": "the most unpopular"
    },



    {
        "word": "similar",
        "level": "elementary",
        "theme": "condition_state_A2",
        "form": "adjective",
        "opposite": "different",
        "oppositeEmoji": "🌓",
        "definitions": [
            {
                "text": "Almost the same; having many shared features.",
                "examples": [
                    "Our approaches are very similar."
                ]
            }
        ],
        "subtext": "very similar / similar to / similar results",
        "comparative": "more similar",
        "superlative": "the most similar",
        "emoji": "👯"
    },



    {
        "word": "dishonest",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🤥",
        "form": "adjective",
        "opposite": "honest",
        "oppositeEmoji": "🤝",
        "subtext": "lying, deceitful / dishonest behavior / completely dishonest",
        "definitions": [
            {
                "text": "Not honest; intended to deceive.",
                "examples": [
                    "He gave a dishonest answer to the question."
                ]
            }
        ],
        "comparative": "more dishonest",
        "superlative": "the most dishonest"
    },



    {
        "word": "unfriendly",
        "level": "elementary",
        "theme": "personality_character_A2",
        "emoji": "😠",
        "form": "adjective",
        "opposite": "friendly",
        "oppositeEmoji": "😊",
        "subtext": "mean / an unfriendly person / quite unfriendly",
        "definitions": [
            {
                "text": "Not friendly.",
                "examples": [
                    "The shop assistant was quite unfriendly."
                ]
            }
        ],
        "comparative": "unfriendlier",
        "superlative": "the unfriendliest"
    },



    {
        "word": "impatient",
        "level": "elementary",
        "theme": "personality_character_A2",
        "emoji": "⌚",
        "form": "adjective",
        "opposite": "patient",
        "oppositeEmoji": "🧘",
        "subtext": "restless / become impatient / don't be impatient",
        "definitions": [
            {
                "text": "Easily annoyed by someone's mistakes or because you have to wait.",
                "examples": [
                    "Don't be so impatient!"
                ]
            }
        ],
        "comparative": "more impatient",
        "superlative": "the most impatient"
    },



    {
        "word": "impolite",
        "level": "elementary",
        "theme": "personality_character_A2",
        "emoji": "😛",
        "form": "adjective",
        "opposite": "polite",
        "oppositeEmoji": "🤝",
        "subtext": "rude / an impolite answer / it is impolite",
        "definitions": [
            {
                "text": "Not polite; rude.",
                "examples": [
                    "It is impolite to point at people."
                ]
            }
        ],
        "comparative": "more impolite",
        "superlative": "the most impolite"
    },



    {
        "word": "fake",
        "level": "elementary",
        "theme": "materials_textures_A2",
        "emoji": "🎭",
        "form": "adjective",
        "opposite": "real",
        "oppositeEmoji": "💎",
        "subtext": "false, artificial / fake money / a fake smile",
        "definitions": [
            {
                "text": "Not real, but made to look or seem real.",
                "examples": [
                    "He was wearing a fake beard."
                ]
            }
        ],
        "comparative": "more fake",
        "superlative": "the most fake"
    },



    {
        "word": "unlucky",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "😿",
        "form": "adjective",
        "opposite": "lucky",
        "oppositeEmoji": "🍀",
        "subtext": "unfortunate / feel unlucky / an unlucky day",
        "definitions": [
            {
                "text": "Having or bringing bad luck.",
                "examples": [
                    "Thirteen is considered an unlucky number by some."
                ]
            }
        ],
        "comparative": "unluckier",
        "superlative": "the unluckiest"
    },



    {
        "word": "unable",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "able",
        "oppositeEmoji": "💪",
        "subtext": "incapable / unable to do / feel unable",
        "definitions": [
            {
                "text": "Not able to do something.",
                "examples": [
                    "She was unable to attend the meeting."
                ]
            }
        ],
        "comparative": null,
        "superlative": null
    },



    {
        "word": "unfair",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "⚖️",
        "form": "adjective",
        "opposite": "fair",
        "oppositeEmoji": "🤝",
        "subtext": "unjust / unfair treatment / very unfair",
        "definitions": [
            {
                "text": "Not treating people in an equal or right way.",
                "examples": [
                    "It is unfair that she has to work on Sundays."
                ]
            }
        ],
        "comparative": "more unfair",
        "superlative": "the most unfair"
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
                "text": "Unusual or unexpected.",
                "examples": [
                    "He heard a strange noise."
                ]
            }
        ],
        "subtext": "unusual / a strange man / look strange",
        "comparative": "stranger",
        "superlative": "the strangest"
    },



    {
        "word": "wild",
        "level": "elementary",
        "theme": "animals_nature_A2",
        "emoji": "🦁",
        "form": "adjective",
        "opposite": null,
        "definitions": [
            {
                "text": "Living or growing in nature; not controlled by humans.",
                "examples": [
                    "I saw some wild animals in the forest."
                ]
            }
        ],
        "subtext": "natural / wild flowers / wild cats",
        "comparative": "wilder",
        "superlative": "the wildest"
    },



    {
        "word": "tame",
        "level": "elementary",
        "theme": "animals_nature_A2",
        "emoji": "🐈",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🦁",
        "subtext": "domesticated / tame animal / very tame",
        "definitions": [
            {
                "text": "Not wild; comfortable around humans.",
                "examples": [
                    "The bird is very tame and will sit on your hand."
                ]
            }
        ],
        "comparative": "tamer",
        "superlative": "the tamest"
    },



    {
        "word": "wise",
        "level": "elementary",
        "theme": "personality_character_A2",
        "emoji": "🦉",
        "form": "adjective",
        "opposite": "foolish",
        "definitions": [
            {
                "text": "Having or showing the ability to make good judgments, based on a deep understanding and experience of life.",
                "examples": [
                    "He is a wise man."
                ]
            }
        ],
        "subtext": "intelligent / a wise choice / very wise",
        "comparative": "wiser",
        "superlative": "the wisest"
    },



    {
        "word": "foolish",
        "level": "elementary",
        "theme": "personality_character_A2",
        "emoji": "🤡",
        "form": "adjective",
        "opposite": "wise",
        "oppositeEmoji": "🦉",
        "subtext": "silly, stupid / foolish mistake / feel foolish",
        "definitions": [
            {
                "text": "Silly or not sensible.",
                "examples": [
                    "It was a foolish thing to do."
                ]
            }
        ],
        "comparative": "more foolish",
        "superlative": "the most foolish"
    },



    {
        "word": "energetic",
        "level": "elementary",
        "theme": "personality_character_A2",
        "emoji": "⚡",
        "form": "adjective",
        "opposite": "tired",
        "oppositeEmoji": "😫",
        "subtext": "active, lively / feel energetic / very energetic",
        "definitions": [
            {
                "text": "Having or involving a lot of energy.",
                "examples": [
                    "She is very energetic and works fast."
                ]
            }
        ],
        "comparative": "more energetic",
        "superlative": "the most energetic"
    },



    {
        "word": "brunette",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👩🏻",
        "form": "adjective",
        "opposite": "blonde",
        "oppositeEmoji": "👱‍♀️",
        "subtext": "dark-haired / a brunette woman",
        "definitions": [
            {
                "text": "Having dark brown hair.",
                "examples": [
                    "She is a brunette."
                ]
            }
        ],
        "comparative": null,
        "superlative": null
    },



    {
        "word": "careless",
        "level": "elementary",
        "theme": "personality_character_A2",
        "emoji": "🤷",
        "form": "adjective",
        "opposite": "careful",
        "oppositeEmoji": "⚠️",
        "subtext": "thoughtless, reckless / a careless mistake / be careless",
        "definitions": [
            {
                "text": "Not giving enough attention to what you are doing.",
                "examples": [
                    "It was a careless mistake."
                ]
            }
        ],
        "comparative": "more careless",
        "superlative": "the most careless"
    },



    {
        "word": "stressed",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "form": "adjective",
        "opposite": "relaxed",
        "oppositeEmoji": "😌",
        "subtext": "tense / feel stressed / very stressed / stressed out",
        "definitions": [
            {
                "text": "Feeling worried and tense from pressure.",
                "examples": [
                    "She feels stressed before every deadline."
                ]
            }
        ],
        "comparative": "more stressed",
        "superlative": "the most stressed",
        "emoji": "😫"
    },



    {
        "word": "confident",
        "level": "elementary",
        "theme": "condition_state_A2",
        "form": "adjective",
        "opposite": "nervous",
        "oppositeEmoji": "😟",
        "definitions": [
            {
                "text": "Feeling sure of your own abilities.",
                "examples": [
                    "She is very confident in client presentations."
                ]
            }
        ],
        "subtext": "feel confident / self-confident / very confident",
        "comparative": "more confident",
        "superlative": "the most confident",
        "emoji": "🦁"
    },



    {
        "word": "previous",
        "level": "elementary",
        "theme": "past_time_A2",
        "emoji": "🔙",
        "form": "adjective",
        "opposite": "next",
        "oppositeEmoji": "🔜",
        "subtext": "former, earlier / previous job / previous week",
        "definitions": [
            {
                "text": "Happening or existing before something or someone else.",
                "examples": [
                    "In my previous job, I worked in a bank."
                ]
            }
        ],
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