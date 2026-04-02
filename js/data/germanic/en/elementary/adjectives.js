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
        "theme": "condition_state_A2",
        "emoji": "🌟",
        "form": "adjective",
        "opposite": "unpopular",
        "definitions": [
            {
                "text": "Liked or enjoyed by many people.",
                "examples": [
                    "This restaurant is very popular.",
                    "The new café near the office is very popular."
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
                "text": "Feeling worried and tense from pressure.",
                "examples": [
                    "She feels stressed about the upcoming presentation.",
                    "She feels stressed before every deadline."
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
                "text": "Feeling sure of your own abilities.",
                "examples": [
                    "He presents with confidence and is very confident.",
                    "She is very confident in client presentations."
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
                    "The email from the client sounded very strange.",
                    "He heard a strange noise."
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
        "emoji": "😐",
        "form": "adjective",
        "opposite": "special",
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
        "superlative": "the most ordinary"
    },
    {
        "word": "satisfied",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "dissatisfied",
        "definitions": [
            {
                "text": "Pleased because you have got what you wanted.",
                "examples": [
                    "She is satisfied with her new salary."
                ]
            }
        ],
        "subtext": "content, pleased / feel satisfied / satisfied with",
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
        "definitions": [
            {
                "text": "Helpful; having a practical purpose.",
                "examples": [
                    "A car is very useful in the country."
                ]
            }
        ],
        "subtext": "helpful, practical",
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
        "definitions": [
            {
                "text": "Not pleased with something.",
                "examples": [
                    "He is dissatisfied with the service."
                ]
            }
        ],
        "subtext": "unhappy, not content / dissatisfied customer / feel dissatisfied",
        "comparative": "more dissatisfied",
        "superlative": "the most dissatisfied"
    },
    {
        "word": "excellent",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🏆",
        "form": "adjective",
        "opposite": "poor",
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
        "superlative": "the most excellent"
    },
    {
        "word": "imperfect",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🩹",
        "form": "adjective",
        "opposite": "perfect",
        "definitions": [
            {
                "text": "Not perfect; having some faults or mistakes.",
                "examples": [
                    "We live in an imperfect world."
                ]
            }
        ],
        "subtext": "flawed / imperfect system / imperfect world",
        "comparative": "more imperfect",
        "superlative": "the most imperfect"
    },
    {
        "word": "useless",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🗑️",
        "form": "adjective",
        "opposite": "useful",
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
        "superlative": "the most useless"
    },
    {
        "word": "necessary",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "❗",
        "form": "adjective",
        "opposite": "unnecessary",
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
        "superlative": "the most necessary"
    },
    {
        "word": "unnecessary",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🍃",
        "form": "adjective",
        "opposite": "necessary",
        "definitions": [
            {
                "text": "Not needed; more than is needed.",
                "examples": [
                    "That is an unnecessary expense."
                ]
            }
        ],
        "subtext": "not needed / unnecessary expense / absolutely unnecessary",
        "comparative": "more unnecessary",
        "superlative": "the most unnecessary"
    },
    {
        "word": "possible",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "impossible",
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
        "superlative": "the most possible"
    },
    {
        "word": "impossible",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🚫",
        "form": "adjective",
        "opposite": "possible",
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
        "superlative": "the most impossible"
    },
    {
        "word": "unpopular",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "popular",
        "definitions": [
            {
                "text": "Not liked by many people.",
                "examples": [
                    "The decision was very unpopular with the staff."
                ]
            }
        ],
        "subtext": "disliked / unpopular decision / become unpopular",
        "comparative": "more unpopular",
        "superlative": "the most unpopular"
    },
    {
        "word": "similar",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "👯",
        "form": "adjective",
        "opposite": "different",
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
        "superlative": "the most similar"
    },
    {
        "word": "dishonest",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🤥",
        "form": "adjective",
        "opposite": "honest",
        "definitions": [
            {
                "text": "Not honest; intended to deceive.",
                "examples": [
                    "He gave a dishonest answer to the question."
                ]
            }
        ],
        "subtext": "lying, deceitful / dishonest behavior / completely dishonest",
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
        "definitions": [
            {
                "text": "Not friendly.",
                "examples": [
                    "The shop assistant was quite unfriendly."
                ]
            }
        ],
        "subtext": "mean / an unfriendly person / quite unfriendly",
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
        "definitions": [
            {
                "text": "Easily annoyed by someone's mistakes or because you have to wait.",
                "examples": [
                    "Don't be so impatient!"
                ]
            }
        ],
        "subtext": "restless / become impatient / don't be impatient",
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
        "definitions": [
            {
                "text": "Not polite; rude.",
                "examples": [
                    "It is impolite to point at people."
                ]
            }
        ],
        "subtext": "rude / an impolite answer / it is impolite",
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
        "definitions": [
            {
                "text": "Not real, but made to look or seem real.",
                "examples": [
                    "He was wearing a fake beard."
                ]
            }
        ],
        "subtext": "false, artificial / fake money / a fake smile",
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
        "definitions": [
            {
                "text": "Having or bringing bad luck.",
                "examples": [
                    "Thirteen is considered an unlucky number by some."
                ]
            }
        ],
        "subtext": "unfortunate / feel unlucky / an unlucky day",
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
        "definitions": [
            {
                "text": "Not able to do something.",
                "examples": [
                    "She was unable to attend the meeting."
                ]
            }
        ],
        "subtext": "incapable / unable to do / feel unable",
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
        "definitions": [
            {
                "text": "Not treating people in an equal or right way.",
                "examples": [
                    "It is unfair that she has to work on Sundays."
                ]
            }
        ],
        "subtext": "unjust / unfair treatment / very unfair",
        "comparative": "more unfair",
        "superlative": "the most unfair"
    },
    {
        "word": "wild",
        "level": "elementary",
        "theme": "animals_nature_A2",
        "emoji": "🦁",
        "form": "adjective",
        "opposite": "tame",
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
        "opposite": "wild",
        "definitions": [
            {
                "text": "Not wild; comfortable around humans.",
                "examples": [
                    "The bird is very tame and will sit on your hand."
                ]
            }
        ],
        "subtext": "domesticated / tame animal / very tame",
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
        "definitions": [
            {
                "text": "Silly or not sensible.",
                "examples": [
                    "It was a foolish thing to do."
                ]
            }
        ],
        "subtext": "silly, stupid / foolish mistake / feel foolish",
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
        "definitions": [
            {
                "text": "Having or involving a lot of energy.",
                "examples": [
                    "She is very energetic and works fast."
                ]
            }
        ],
        "subtext": "active, lively / feel energetic / very energetic",
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
        "definitions": [
            {
                "text": "Having dark brown hair.",
                "examples": [
                    "She is a brunette."
                ]
            }
        ],
        "subtext": "dark-haired / a brunette woman",
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
        "definitions": [
            {
                "text": "Not giving enough attention to what you are doing.",
                "examples": [
                    "It was a careless mistake."
                ]
            }
        ],
        "subtext": "thoughtless, reckless / a careless mistake / be careless",
        "comparative": "more careless",
        "superlative": "the most careless"
    },
    {
        "word": "previous",
        "level": "elementary",
        "theme": "past_time_A2",
        "emoji": "🔙",
        "form": "adjective",
        "opposite": "next",
        "definitions": [
            {
                "text": "Happening or existing before something or someone else.",
                "examples": [
                    "In my previous job, I worked in a bank."
                ]
            }
        ],
        "subtext": "former, earlier / previous job / previous week",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "ancient",
        "level": "elementary",
        "theme": "past_time_A2",
        "emoji": "🏛️",
        "form": "adjective",
        "opposite": "modern",
        "definitions": [
            {
                "text": "Very old; belonging to the past.",
                "examples": [
                    "They visited the ancient ruins.",
                    "History is full of ancient civilizations."
                ]
            }
        ],
        "subtext": "very old / from long ago",
        "comparative": "more ancient",
        "superlative": "the most ancient"
    },
    {
        "word": "basic",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🧱",
        "form": "adjective",
        "opposite": "advanced",
        "definitions": [
            {
                "text": "Simple and most important; being the main part of something.",
                "examples": [
                    "I have a basic understanding of French.",
                    "The hotel provides basic facilities."
                ]
            }
        ],
        "subtext": "simple / fundamental",
        "comparative": "more basic",
        "superlative": "the most basic"
    },
    {
        "word": "calm",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🧘",
        "form": "adjective",
        "opposite": "nervous",
        "definitions": [
            {
                "text": "Peaceful, quiet, and without worry.",
                "examples": [
                    "Please try to stay calm.",
                    "The sea was very calm today."
                ]
            }
        ],
        "subtext": "peaceful / quiet",
        "comparative": "calmer",
        "superlative": "the calmest"
    },
    {
        "word": "delicious",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "😋",
        "form": "adjective",
        "opposite": "disgusting",
        "definitions": [
            {
                "text": "Having a very pleasant taste or smell.",
                "examples": [
                    "This cake is delicious.",
                    "We had a delicious meal at the restaurant."
                ]
            }
        ],
        "subtext": "tasty / yummy",
        "comparative": "more delicious",
        "superlative": "the most delicious"
    },
    {
        "word": "empty",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🫙",
        "form": "adjective",
        "opposite": "full",
        "definitions": [
            {
                "text": "Containing nothing.",
                "examples": [
                    "The box is empty.",
                    "The streets were empty late at night."
                ]
            }
        ],
        "subtext": "containing nothing / vacant",
        "comparative": "emptier",
        "superlative": "the emptiest"
    },
    {
        "word": "formal",
        "level": "elementary",
        "theme": "customs_traditions_A2",
        "emoji": "🤵",
        "form": "adjective",
        "opposite": "informal",
        "definitions": [
            {
                "text": "Public or official; following fixed rules for doing something.",
                "examples": [
                    "He wore a formal suit to the wedding.",
                    "The letter was written in a formal style."
                ]
            }
        ],
        "subtext": "official / serious",
        "comparative": "more formal",
        "superlative": "the most formal"
    },
    {
        "word": "general",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🌐",
        "form": "adjective",
        "opposite": "specific",
        "definitions": [
            {
                "text": "Involving or relating to most people, things, or cases.",
                "examples": [
                    "There is a general feeling of happiness.",
                    "I gave a general description of the man."
                ]
            }
        ],
        "subtext": "common / overall",
        "comparative": "more general",
        "superlative": "the most general"
    },
    {
        "word": "huge",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "tiny",
        "definitions": [
            {
                "text": "Extremely large in size or amount.",
                "examples": [
                    "They live in a huge house.",
                    "The project was a huge success."
                ]
            }
        ],
        "subtext": "very large / enormous",
        "comparative": "huger",
        "superlative": "the hugest"
    },
    {
        "word": "internal",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🏢",
        "form": "adjective",
        "opposite": "external",
        "definitions": [
            {
                "text": "Inside something.",
                "examples": [
                    "The internal doors are made of wood.",
                    "The company is having an internal meeting."
                ]
            }
        ],
        "subtext": "inside / inner",
        "comparative": "more internal",
        "superlative": "the most internal"
    },
    {
        "word": "junior",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👶",
        "form": "adjective",
        "opposite": "senior",
        "definitions": [
            {
                "text": "Having a low rank in an organization.",
                "examples": [
                    "He is a junior manager.",
                    "She has a junior position in the company."
                ]
            }
        ],
        "subtext": "lower rank / younger",
        "comparative": "more junior",
        "superlative": "the most junior"
    },
    {
        "word": "local",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "🏘️",
        "form": "adjective",
        "opposite": "national",
        "definitions": [
            {
                "text": "Relating to a particular area, city, or town.",
                "examples": [
                    "We buy food at the local market.",
                    "The local news starts at six."
                ]
            }
        ],
        "subtext": "nearby / regional",
        "comparative": "more local",
        "superlative": "the most local"
    },
    {
        "word": "natural",
        "level": "elementary",
        "theme": "animals_nature_A2",
        "emoji": "🌿",
        "form": "adjective",
        "opposite": "artificial",
        "definitions": [
            {
                "text": "As found in nature and not involving anything made or done by people.",
                "examples": [
                    "This yogurt contains only natural ingredients.",
                    "It's natural to feel nervous before an exam."
                ]
            }
        ],
        "subtext": "normal / from nature",
        "comparative": "more natural",
        "superlative": "the most natural"
    },
    {
        "word": "official",
        "level": "elementary",
        "theme": "customs_traditions_A2",
        "emoji": "📜",
        "form": "adjective",
        "opposite": "unofficial",
        "definitions": [
            {
                "text": "Agreed to or arranged by people in positions of authority.",
                "examples": [
                    "We are waiting for an official statement.",
                    "The official language of the country is English."
                ]
            }
        ],
        "subtext": "formal / authorized",
        "comparative": "more official",
        "superlative": "the most official"
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
                "text": "Not common; very unusual.",
                "examples": [
                    "This is a rare bird in this area.",
                    "It is rare to see him so happy."
                ]
            }
        ],
        "subtext": "uncommon / unusual",
        "comparative": "rarer",
        "superlative": "the rarest"
    },
    {
        "word": "serious",
        "level": "elementary",
        "theme": "personality_character_A2",
        "emoji": "😐",
        "form": "adjective",
        "opposite": "funny",
        "definitions": [
            {
                "text": "Severe in effect; bad.",
                "examples": [
                    "This is a serious problem.",
                    "He is a very serious person."
                ]
            }
        ],
        "subtext": "grave / solemn",
        "comparative": "more serious",
        "superlative": "the most serious"
    },
    {
        "word": "unusual",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🌀",
        "form": "adjective",
        "opposite": "usual",
        "definitions": [
            {
                "text": "Different from what is usual or expected.",
                "examples": [
                    "He has an unusual name.",
                    "It is unusual for it to snow in April."
                ]
            }
        ],
        "subtext": "strange / uncommon",
        "comparative": "more unusual",
        "superlative": "the most unusual"
    },
    {
        "word": "active",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🏃",
        "form": "adjective",
        "opposite": "passive",
        "definitions": [
            {
                "text": "Busy and doing a lot of things.",
                "examples": [
                    "She is very active in local politics.",
                    "He leads an active lifestyle."
                ]
            }
        ],
        "subtext": "busy / energetic",
        "comparative": "more active",
        "superlative": "the most active"
    },
    {
        "word": "creative",
        "level": "elementary",
        "theme": "art_design_A2",
        "emoji": "🎨",
        "form": "adjective",
        "opposite": "uncreative",
        "definitions": [
            {
                "text": "Producing or using original and unusual ideas.",
                "examples": [
                    "She has a lot of creative ideas.",
                    "The children are doing some creative writing."
                ]
            }
        ],
        "subtext": "imaginative / original",
        "comparative": "more creative",
        "superlative": "the most creative"
    },
    {
        "word": "helpful",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🤝",
        "form": "adjective",
        "opposite": "unhelpful",
        "definitions": [
            {
                "text": "Willing to help.",
                "examples": [
                    "The staff were very helpful.",
                    "Thank you for your helpful advice."
                ]
            }
        ],
        "subtext": "useful / kind",
        "comparative": "more helpful",
        "superlative": "the most helpful"
    },
    {
        "word": "private",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🔒",
        "form": "adjective",
        "opposite": "public",
        "definitions": [
            {
                "text": "Only for one person or group and not for everyone.",
                "examples": [
                    "This is a private conversation.",
                    "He has a private garden."
                ]
            }
        ],
        "subtext": "personal / confidential",
        "comparative": "more private",
        "superlative": "the most private"
    },
    {
        "word": "public",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🏢",
        "form": "adjective",
        "opposite": "private",
        "definitions": [
            {
                "text": "Relating to or available to everyone.",
                "examples": [
                    "Public transport is very good here.",
                    "The park is open to the public."
                ]
            }
        ],
        "subtext": "open / communal",
        "comparative": "more public",
        "superlative": "the most public"
    },
    {
        "word": "smooth",
        "level": "elementary",
        "theme": "materials_textures_A2",
        "emoji": "🧊",
        "form": "adjective",
        "opposite": "rough",
        "definitions": [
            {
                "text": "Having a surface or substance that is perfectly regular and has no holes, lumps, or areas that rise or fall suddenly.",
                "examples": [
                    "The table has a smooth surface.",
                    "The flight was very smooth."
                ]
            }
        ],
        "subtext": "even / flat",
        "comparative": "smoother",
        "superlative": "the smoothest"
    },
    {
        "word": "rough",
        "level": "elementary",
        "theme": "materials_textures_A2",
        "emoji": "🪵",
        "form": "adjective",
        "opposite": "smooth",
        "definitions": [
            {
                "text": "Not smooth.",
                "examples": [
                    "The sea was rough today.",
                    "The bark of the tree is rough."
                ]
            }
        ],
        "subtext": "uneven / coarse",
        "comparative": "rougher",
        "superlative": "the roughest"
    },
    {
        "word": "soft",
        "level": "elementary",
        "theme": "materials_textures_A2",
        "emoji": "🧸",
        "form": "adjective",
        "opposite": "hard",
        "definitions": [
            {
                "text": "Not hard or firm.",
                "examples": [
                    "The pillow is very soft.",
                    "I like soft music."
                ]
            }
        ],
        "subtext": "gentle / tender",
        "comparative": "softer",
        "superlative": "the softest"
    },
    {
        "word": "hard",
        "level": "elementary",
        "theme": "materials_textures_A2",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "soft",
        "definitions": [
            {
                "text": "Firm and stiff and not easy to press or bend.",
                "examples": [
                    "The ground is very hard.",
                    "Diamond is a hard substance."
                ]
            }
        ],
        "subtext": "firm / stiff",
        "comparative": "harder",
        "superlative": "the hardest"
    },
    {
        "word": "thin",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "📏",
        "form": "adjective",
        "opposite": "thick",
        "definitions": [
            {
                "text": "Having a small distance between two opposite sides.",
                "examples": [
                    "The book is very thin.",
                    "He is quite thin."
                ]
            }
        ],
        "subtext": "slim / narrow",
        "comparative": "thinner",
        "superlative": "the thinnest"
    },
    {
        "word": "thick",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🧱",
        "form": "adjective",
        "opposite": "thin",
        "definitions": [
            {
                "text": "Having a large distance between two opposite sides.",
                "examples": [
                    "The walls are very thick.",
                    "She has thick hair."
                ]
            }
        ],
        "subtext": "wide / dense",
        "comparative": "thicker",
        "superlative": "the thickest"
    },
    {
        "word": "valuable",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "worthless",
        "definitions": [
            {
                "text": "Worth a lot of money.",
                "examples": [
                    "She has a valuable painting.",
                    "The ring is very valuable."
                ]
            }
        ],
        "subtext": "expensive / precious",
        "comparative": "more valuable",
        "superlative": "the most valuable"
    },
    {
        "word": "worthless",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🗑️",
        "form": "adjective",
        "opposite": "valuable",
        "definitions": [
            {
                "text": "Having no value in money.",
                "examples": [
                    "The old car is almost worthless.",
                    "He felt worthless after losing his job."
                ]
            }
        ],
        "subtext": "cheap / useless",
        "comparative": "more worthless",
        "superlative": "the most worthless"
    },
    {
        "word": "correct",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "incorrect",
        "definitions": [
            {
                "text": "Right; without any mistakes.",
                "examples": [
                    "That is the correct answer.",
                    "Please check if the information is correct."
                ]
            }
        ],
        "subtext": "right / true",
        "comparative": "more correct",
        "superlative": "the most correct"
    },
    {
        "word": "incorrect",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "correct",
        "definitions": [
            {
                "text": "Not right; containing mistakes.",
                "examples": [
                    "The calculations were incorrect.",
                    "This statement is incorrect."
                ]
            }
        ],
        "subtext": "wrong / false",
        "comparative": "more incorrect",
        "superlative": "the most incorrect"
    },
    {
        "word": "tight",
        "level": "elementary",
        "theme": "shopping_for_clothes_A2",
        "emoji": "👚",
        "form": "adjective",
        "opposite": "loose",
        "definitions": [
            {
                "text": "Fitting very closely or too closely.",
                "examples": [
                    "These shoes are too tight.",
                    "The dress is a bit tight around the waist."
                ]
            }
        ],
        "subtext": "close-fitting / small",
        "comparative": "tighter",
        "superlative": "the tightest"
    },
    {
        "word": "loose",
        "level": "elementary",
        "theme": "shopping_for_clothes_A2",
        "emoji": "👕",
        "form": "adjective",
        "opposite": "tight",
        "definitions": [
            {
                "text": "Not fitting closely; large.",
                "examples": [
                    "I prefer loose clothes in summer.",
                    "The handle is loose."
                ]
            }
        ],
        "subtext": "baggy / not tight",
        "comparative": "looser",
        "superlative": "the loosest"
    },
    {
        "word": "neat",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🧹",
        "form": "adjective",
        "opposite": "messy",
        "definitions": [
            {
                "text": "Tidy and in good order.",
                "examples": [
                    "His desk is always very neat.",
                    "She has neat handwriting."
                ]
            }
        ],
        "subtext": "tidy / organized",
        "comparative": "neater",
        "superlative": "the neatest"
    },
    {
        "word": "messy",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🧺",
        "form": "adjective",
        "opposite": "neat",
        "definitions": [
            {
                "text": "Untidy or dirty.",
                "examples": [
                    "My room is very messy.",
                    "It was a messy situation."
                ]
            }
        ],
        "subtext": "untidy / disordered",
        "comparative": "messier",
        "superlative": "the messiest"
    },
    {
        "word": "patient",
        "level": "elementary",
        "theme": "personality_character_A2",
        "emoji": "🧘",
        "form": "adjective",
        "opposite": "impatient",
        "definitions": [
            {
                "text": "Able to wait for a long time or accept difficulties without becoming angry.",
                "examples": [
                    "You need to be patient with children.",
                    "The teacher was very patient with me."
                ]
            }
        ],
        "subtext": "calm / tolerant",
        "comparative": "more patient",
        "superlative": "the most patient"
    }
    ];
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();