(function() {
    const data = [
    {
        "word": "be",
        "level": "starter",
        "theme": "name_greeting_A0",
        "emoji": "👤",
        "subtext": "be tired / be happy / be at work / be ready",
        "form": "verb",
        "definitions": [
            {
                "text": "To exist; to have a quality or state.",
                "examples": [
                    "I am tired.",
                    "She is a doctor.",
                    "We are late."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "was / were",
        "v3": "been"
    },
    {
        "word": "have",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "👜",
        "subtext": "have a job / have lunch / have a problem / have time",
        "form": "verb",
        "definitions": [
            {
                "text": "To possess something; to experience something.",
                "examples": [
                    "I have a job.",
                    "He has a car.",
                    "She has a headache."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "had",
        "v3": "had"
    },
    {
        "word": "feel",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "emoji": "🌡️",
        "subtext": "feel tired / feel better / feel ill / feel stressed",
        "form": "verb",
        "definitions": [
            {
                "text": "To experience a physical or emotional state.",
                "examples": [
                    "She feels exhausted after a long week of meetings."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "felt",
        "v3": "felt"
    },
    {
        "word": "give",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "subtext": "give advice / give money / give a present / give information",
        "opposite": "take",
        "oppositeEmoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "To hand or transfer something to someone.",
                "examples": [
                    "He gives me a lot of work.",
                    "She gives advice."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "gave",
        "v3": "given"
    },
    {
        "word": "take",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "👜",
        "subtext": "take the bus / take medicine / take a break / take time",
        "opposite": "give",
        "oppositeEmoji": "🎁",
        "form": "verb",
        "definitions": [
            {
                "text": "To hold and move something; to use or consume.",
                "examples": [
                    "I take the bus to work.",
                    "She takes medicine."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "took",
        "v3": "taken"
    },
    {
        "word": "get",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📥",
        "subtext": "get a job / get tired / get better / get home",
        "form": "verb",
        "definitions": [
            {
                "text": "To receive, obtain or become.",
                "examples": [
                    "I get a good salary.",
                    "He gets tired quickly.",
                    "She gets a promotion."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "got",
        "v3": "got / gotten"
    },
    {
        "word": "put",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "📥",
        "subtext": "put on / put away / put the phone down / put money aside",
        "form": "verb",
        "definitions": [
            {
                "text": "To place something in a position.",
                "examples": [
                    "Put your bag here.",
                    "She puts money in the bank."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "put",
        "v3": "put"
    },
    {
        "word": "make",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏗️",
        "subtext": "make coffee / make a decision / make a mistake / make money",
        "form": "verb",
        "definitions": [
            {
                "text": "To create or produce something; to cause something.",
                "examples": [
                    "I make coffee in the morning.",
                    "She makes a decision."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "made",
        "v3": "made"
    },
    {
        "word": "do",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "subtext": "do work / do the shopping / do exercise / do nothing",
        "form": "verb",
        "definitions": [
            {
                "text": "To perform an action or activity.",
                "examples": [
                    "I do my work every day.",
                    "She does the shopping."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "did",
        "v3": "done"
    },
    {
        "word": "use",
        "level": "starter",
        "theme": "basic_technology_devices_A0",
        "emoji": "🛠️",
        "subtext": "use a phone / use public transport / use a computer / use time",
        "form": "verb",
        "definitions": [
            {
                "text": "To employ something for a purpose.",
                "examples": [
                    "I use my phone for everything.",
                    "She uses public transport."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "used",
        "v3": "used"
    },
    {
        "word": "open",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📖",
        "subtext": "open a door / open an account / open a shop / open at nine",
        "opposite": "close",
        "oppositeEmoji": "🔒",
        "form": "verb",
        "definitions": [
            {
                "text": "To make something not closed; or to start.",
                "examples": [
                    "He opens the office at eight.",
                    "She opens a bank account."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "opened",
        "v3": "opened"
    },
    {
        "word": "close",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔒",
        "subtext": "close a door / close at six / close an account / close the meeting",
        "opposite": "open",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "To make something not open; or to finish.",
                "examples": [
                    "The office closes at six.",
                    "She closes her laptop."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "closed",
        "v3": "closed"
    },
    {
        "word": "start",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "subtext": "start work / start a meeting / start a new job",
        "opposite": "finish",
        "oppositeEmoji": "🏁",
        "form": "verb",
        "definitions": [
            {
                "text": "To begin an activity or period.",
                "examples": [
                    "I start work at eight thirty.",
                    "She starts a new role next month."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "started",
        "v3": "started"
    },
    {
        "word": "finish",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "finish work / finish a project / finish early / finish late",
        "opposite": "start",
        "oppositeEmoji": "▶️",
        "form": "verb",
        "definitions": [
            {
                "text": "To complete something.",
                "examples": [
                    "He finishes work at five.",
                    "She finishes the report by noon."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "finished",
        "v3": "finished"
    },
    {
        "word": "help",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🤝",
        "subtext": "help someone / help with a task / ask for help",
        "form": "verb",
        "definitions": [
            {
                "text": "To assist someone with something.",
                "examples": [
                    "He helps new colleagues understand the systems."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "helped",
        "v3": "helped"
    },
    {
        "word": "try",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎯",
        "subtext": "try to do / try hard / try something new / give it a try",
        "form": "verb",
        "definitions": [
            {
                "text": "To attempt to do something; to test something.",
                "examples": [
                    "I always try to reply to all messages within an hour."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "tried",
        "v3": "tried"
    },
    {
        "word": "show",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "📽️",
        "subtext": "show someone how / show a document / show interest",
        "form": "verb",
        "definitions": [
            {
                "text": "To let someone see or demonstrate something.",
                "examples": [
                    "Can you show me how the system works?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "showed",
        "v3": "shown"
    },
    {
        "word": "find",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔍",
        "subtext": "find a job / find out / find it difficult / find time",
        "form": "verb",
        "definitions": [
            {
                "text": "To discover or locate something.",
                "examples": [
                    "I find the work interesting.",
                    "She found a new job."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "found",
        "v3": "found"
    },
    {
        "word": "keep",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "📦",
        "subtext": "keep going / keep quiet / keep a record / keep in touch",
        "form": "verb",
        "definitions": [
            {
                "text": "To continue having or doing something.",
                "examples": [
                    "Keep the receipt.",
                    "She keeps her phone on all day."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "kept",
        "v3": "kept"
    },
    {
        "word": "lose",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📉",
        "subtext": "lose a job / lose money / lose weight / lose time",
        "opposite": "win",
        "oppositeEmoji": "🏆",
        "form": "verb",
        "definitions": [
            {
                "text": "To no longer have something; to fail to win.",
                "examples": [
                    "I lost my keys.",
                    "She lost her job.",
                    "He never loses."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "lost",
        "v3": "lost"
    },
    {
        "word": "cut",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "✂️",
        "subtext": "cut costs / cut spending / cut short / cut in half",
        "form": "verb",
        "definitions": [
            {
                "text": "To divide with something sharp; to reduce.",
                "examples": [
                    "She cuts her lunch break short.",
                    "It cuts costs."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "cut",
        "v3": "cut"
    },
    {
        "word": "turn",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "🔄",
        "subtext": "turn on / turn off / turn left / turn right",
        "form": "verb",
        "definitions": [
            {
                "text": "To move in a direction; to change state.",
                "examples": [
                    "Turn left at the office.",
                    "She turns off the light."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned",
        "v3": "turned"
    },
    {
        "word": "bring",
        "level": "starter",
        "theme": "meals_of_the_day_A0",
        "emoji": "🎁",
        "subtext": "bring someone / bring food / bring a document / bring up",
        "form": "verb",
        "definitions": [
            {
                "text": "To carry something to a place.",
                "examples": [
                    "Bring your ID to the interview.",
                    "He brings lunch."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "brought",
        "v3": "brought"
    },
    {
        "word": "say",
        "level": "starter",
        "theme": "greetings_social_phrases_A0",
        "emoji": "🗨️",
        "subtext": "say hello / say yes / say no / say something",
        "form": "verb",
        "definitions": [
            {
                "text": "To express something in words.",
                "examples": [
                    "She says hello every morning.",
                    "He says it is difficult."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "said",
        "v3": "said"
    },
    {
        "word": "tell",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🗣️",
        "subtext": "tell the truth / tell someone / tell a story / tell someone about",
        "form": "verb",
        "definitions": [
            {
                "text": "To give information or instructions to someone.",
                "examples": [
                    "She tells the team about changes before they happen."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "told",
        "v3": "told"
    },
    {
        "word": "ask",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "❓",
        "subtext": "ask a question / ask for help / ask about / ask someone",
        "form": "verb",
        "definitions": [
            {
                "text": "To put a question or make a request.",
                "examples": [
                    "She asks for feedback after every presentation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "asked",
        "v3": "asked"
    },
    {
        "word": "speak",
        "level": "starter",
        "theme": "greetings_social_phrases_A0",
        "emoji": "🗣️",
        "subtext": "speak to someone / speak English / speak clearly / speak at a meeting",
        "form": "verb",
        "definitions": [
            {
                "text": "To say words; to communicate verbally.",
                "examples": [
                    "He speaks French.",
                    "She speaks to her manager every day."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "spoke",
        "v3": "spoken"
    },
    {
        "word": "talk",
        "level": "starter",
        "theme": "greetings_social_phrases_A0",
        "emoji": "💬",
        "subtext": "talk to someone / talk about / talk openly / talk for a while",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a conversation.",
                "examples": [
                    "We talk about work every Monday.",
                    "She talks a lot."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "talked",
        "v3": "talked"
    },
    {
        "word": "call",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "📞",
        "subtext": "call someone / call back / call a meeting / call in sick",
        "form": "verb",
        "definitions": [
            {
                "text": "To telephone someone.",
                "examples": [
                    "I call my clients every morning before checking emails."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "called",
        "v3": "called"
    },
    {
        "word": "write",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "subtext": "write an email / write a report / write a letter / write notes",
        "opposite": "read",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "To put words on paper or screen.",
                "examples": [
                    "I write emails all day.",
                    "She writes a report every Friday."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "wrote",
        "v3": "written"
    },
    {
        "word": "read",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "read a book / read the news / read a contract / read carefully",
        "opposite": "write",
        "oppositeEmoji": "✍️",
        "form": "verb",
        "definitions": [
            {
                "text": "To look at and understand written words.",
                "examples": [
                    "She reads the news every morning.",
                    "He reads contracts."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "read",
        "v3": "read"
    },
    {
        "word": "listen",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎧",
        "subtext": "listen to music / listen carefully / listen to a podcast",
        "form": "verb",
        "definitions": [
            {
                "text": "To pay attention to sounds or speech.",
                "examples": [
                    "I listen to podcasts at work.",
                    "She listens carefully."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "listened",
        "v3": "listened"
    },
    {
        "word": "answer",
        "level": "starter",
        "theme": "asking_answering_questions_A0",
        "emoji": "📞",
        "subtext": "answer a question / answer the phone / answer an email",
        "form": "verb",
        "definitions": [
            {
                "text": "To respond to a question or communication.",
                "examples": [
                    "He answers all emails quickly.",
                    "She answered the phone."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "answered",
        "v3": "answered"
    },
    {
        "word": "repeat",
        "level": "starter",
        "theme": "classroom_language_A0",
        "emoji": "🔁",
        "subtext": "repeat that / repeat yourself / repeat an order",
        "form": "verb",
        "definitions": [
            {
                "text": "To say or do something again.",
                "examples": [
                    "Please repeat that.",
                    "He repeated the instruction twice."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "repeated",
        "v3": "repeated"
    },
    {
        "word": "go",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🚶",
        "subtext": "go to work / go home / go out / go shopping",
        "form": "verb",
        "definitions": [
            {
                "text": "To move from one place to another.",
                "examples": [
                    "I go to work by bus.",
                    "She goes to the doctor."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "went",
        "v3": "gone"
    },
    {
        "word": "come",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🏃‍♂️",
        "subtext": "come home / come to work / come back / come here",
        "opposite": "go",
        "oppositeEmoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "To move towards a place or person.",
                "examples": [
                    "He comes to the office at nine.",
                    "She comes home late."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "came",
        "v3": "come"
    },
    {
        "word": "walk",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "subtext": "walk to work / walk home / walk slowly / walk every day",
        "form": "verb",
        "definitions": [
            {
                "text": "To move on foot at a normal pace.",
                "examples": [
                    "He walks to work every day.",
                    "She walks during her lunch break."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "walked",
        "v3": "walked"
    },
    {
        "word": "drive",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚗",
        "subtext": "drive to work / drive a car / drive home / drive carefully",
        "form": "verb",
        "definitions": [
            {
                "text": "To operate a vehicle.",
                "examples": [
                    "She drives to work.",
                    "He drives a company car."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drove",
        "v3": "driven"
    },
    {
        "word": "fly",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "✈️",
        "subtext": "fly to a city / fly business class / fly economy",
        "form": "verb",
        "definitions": [
            {
                "text": "To travel by plane.",
                "examples": [
                    "She flies to Paris for meetings.",
                    "He hates flying."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "flew",
        "v3": "flown"
    },
    {
        "word": "arrive",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "arrive at work / arrive late / arrive on time",
        "form": "verb",
        "definitions": [
            {
                "text": "To reach a destination.",
                "examples": [
                    "He arrives at the office every day at nine."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "arrived",
        "v3": "arrived"
    },
    {
        "word": "leave",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚪",
        "subtext": "leave home / leave work / leave early / leave late",
        "form": "verb",
        "definitions": [
            {
                "text": "To go away from a place or person.",
                "examples": [
                    "I leave home at eight fifteen.",
                    "She left work early."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "left",
        "v3": "left"
    },
    {
        "word": "move",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "📦",
        "subtext": "move to a new place / move in / move out / move house",
        "form": "verb",
        "definitions": [
            {
                "text": "To go to live or work in a different place.",
                "examples": [
                    "They moved to a larger flat when they had children."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "moved",
        "v3": "moved"
    },
    {
        "word": "return",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🔙",
        "subtext": "return home / return to work / return a call / return from",
        "form": "verb",
        "definitions": [
            {
                "text": "To come or go back to a place.",
                "examples": [
                    "He returns from a trip on Friday.",
                    "She returned the call."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "returned",
        "v3": "returned"
    },
    {
        "word": "travel",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "✈️",
        "subtext": "travel for work / travel abroad / travel by train",
        "form": "verb",
        "definitions": [
            {
                "text": "To go from one place to another.",
                "examples": [
                    "She travels for work three times a month."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "traveled",
        "v3": "traveled"
    },
    {
        "word": "eat",
        "level": "starter",
        "theme": "meals_of_the_day_A0",
        "emoji": "🍎",
        "subtext": "eat breakfast / eat lunch / eat dinner / eat out",
        "opposite": "drink",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "To put food in your mouth and swallow it.",
                "examples": [
                    "We eat dinner at seven.",
                    "He eats lunch at his desk."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ate",
        "v3": "eaten"
    },
    {
        "word": "drink",
        "level": "starter",
        "theme": "drinks_A0",
        "emoji": "🥛",
        "subtext": "drink coffee / drink tea / drink water / drink beer",
        "opposite": "eat",
        "oppositeEmoji": "🍎",
        "form": "verb",
        "definitions": [
            {
                "text": "To take liquid into your mouth and swallow it.",
                "examples": [
                    "She drinks coffee every morning.",
                    "I drink water."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drank",
        "v3": "drunk"
    },
    {
        "word": "sleep",
        "level": "starter",
        "theme": "times_day_A0",
        "emoji": "😴",
        "subtext": "sleep well / sleep badly / sleep eight hours / sleep late",
        "opposite": "wake up",
        "oppositeEmoji": "⏰",
        "form": "verb",
        "definitions": [
            {
                "text": "To rest with your eyes closed in a natural state of unconsciousness.",
                "examples": [
                    "He sleeps seven hours a night.",
                    "I sleep badly."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "slept",
        "v3": "slept"
    },
    {
        "word": "cook",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "🍳",
        "subtext": "cook dinner / cook a meal / cook at home / cook for someone",
        "form": "verb",
        "definitions": [
            {
                "text": "To prepare food using heat.",
                "examples": [
                    "She cooks dinner every evening to save money."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cooked",
        "v3": "cooked"
    },
    {
        "word": "clean",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧹",
        "subtext": "clean the flat / clean the kitchen / clean up after work",
        "form": "verb",
        "definitions": [
            {
                "text": "To remove dirt from something.",
                "examples": [
                    "I clean the flat every Saturday morning."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cleaned",
        "v3": "cleaned"
    },
    {
        "word": "wear",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "emoji": "👕",
        "subtext": "wear a suit / wear glasses / wear casual clothes",
        "form": "verb",
        "definitions": [
            {
                "text": "To have clothing or accessories on your body.",
                "examples": [
                    "She wears a suit to work.",
                    "He wears glasses."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "wore",
        "v3": "worn"
    },
    {
        "word": "wash",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧼",
        "subtext": "wash the dishes / wash clothes / wash your hands",
        "form": "verb",
        "definitions": [
            {
                "text": "To clean something with water.",
                "examples": [
                    "He washes his car every Sunday.",
                    "Wash your hands."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "washed",
        "v3": "washed"
    },
    {
        "word": "buy",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🛒",
        "subtext": "buy food / buy a ticket / buy online / buy a house",
        "opposite": "sell",
        "oppositeEmoji": "🏷️",
        "form": "verb",
        "definitions": [
            {
                "text": "To get something in exchange for money.",
                "examples": [
                    "She buys food online.",
                    "He wants to buy a flat."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "bought",
        "v3": "bought"
    },
    {
        "word": "pay",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "pay a bill / pay rent / pay by card / pay in cash",
        "form": "verb",
        "definitions": [
            {
                "text": "To give money for goods or a service.",
                "examples": [
                    "I pay my rent by bank transfer on the first of the month."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "paid",
        "v3": "paid"
    },
    {
        "word": "spend",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "subtext": "spend money / spend on food / spend on rent / spend time",
        "form": "verb",
        "definitions": [
            {
                "text": "To use money or time.",
                "examples": [
                    "He spends too much money on takeaway food every week."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "spent",
        "v3": "spent"
    },
    {
        "word": "save",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "🏦",
        "subtext": "save money / save for a holiday / save for a house",
        "opposite": "spend",
        "oppositeEmoji": "💸",
        "form": "verb",
        "definitions": [
            {
                "text": "To keep money rather than spending it.",
                "examples": [
                    "She saves a hundred euros every month for a holiday."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "saved",
        "v3": "saved"
    },
    {
        "word": "work",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "work from home / work full-time / work hard / work late",
        "form": "verb",
        "definitions": [
            {
                "text": "To do a job in order to earn money.",
                "examples": [
                    "She works in a hospital.",
                    "I work from home."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "worked",
        "v3": "worked"
    },
    {
        "word": "live",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "🏠",
        "subtext": "live in a flat / live alone / live with someone / live abroad",
        "opposite": "die",
        "oppositeEmoji": "⚰️",
        "form": "verb",
        "definitions": [
            {
                "text": "To have your home in a place; to be alive.",
                "examples": [
                    "He lives in a flat near the centre.",
                    "We live together."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "lived",
        "v3": "lived"
    },
    {
        "word": "think",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "💭",
        "subtext": "think about / think of / think it is / think carefully",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a belief or opinion; to use the mind.",
                "examples": [
                    "I think it is a good idea.",
                    "She thinks about her job."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "thought",
        "v3": "thought"
    },
    {
        "word": "know",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "know someone / know the answer / know a place / know how to",
        "form": "verb",
        "definitions": [
            {
                "text": "To have information or awareness about something.",
                "examples": [
                    "I know his name.",
                    "She knows the answer.",
                    "Do you know him?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "knew",
        "v3": "known"
    },
    {
        "word": "want",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "emoji": "🙏",
        "subtext": "want a job / want to leave / want more money / want help",
        "form": "verb",
        "definitions": [
            {
                "text": "To desire or wish for something.",
                "examples": [
                    "I want a coffee.",
                    "She wants a better job.",
                    "He wants to retire."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "wanted",
        "v3": "wanted"
    },
    {
        "word": "need",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "emoji": "🆘",
        "subtext": "need help / need time / need money / need to rest",
        "form": "verb",
        "definitions": [
            {
                "text": "To require something; to feel that something is necessary.",
                "examples": [
                    "I need a break.",
                    "She needs help.",
                    "We need more time."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "needed",
        "v3": "needed"
    },
    {
        "word": "like",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "emoji": "👍",
        "subtext": "like work / like to travel / like someone / like the idea",
        "form": "verb",
        "definitions": [
            {
                "text": "To find something pleasant; to enjoy.",
                "examples": [
                    "I like my job.",
                    "She likes cooking.",
                    "He likes coffee."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "liked",
        "v3": "liked"
    },
    {
        "word": "love",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "emoji": "❤️",
        "subtext": "love someone / love doing / love a place / love the idea",
        "form": "verb",
        "definitions": [
            {
                "text": "To have strong affection for; to enjoy greatly.",
                "examples": [
                    "She loves her job.",
                    "He loves travelling for work."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "loved",
        "v3": "loved"
    },
    {
        "word": "hate",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "emoji": "😡",
        "subtext": "hate doing / hate someone / hate meetings / hate commuting",
        "form": "verb",
        "definitions": [
            {
                "text": "To strongly dislike.",
                "examples": [
                    "He hates commuting by bus.",
                    "She hates long meetings."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "hated",
        "v3": "hated"
    },
    {
        "word": "hope",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "emoji": "🤞",
        "subtext": "hope for / hope to do / hope that / I hope so",
        "form": "verb",
        "definitions": [
            {
                "text": "To wish for something to happen.",
                "examples": [
                    "I hope to get a promotion this year.",
                    "She hopes for better pay."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "hoped",
        "v3": "hoped"
    },
    {
        "word": "remember",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "remember to do / remember a name / remember clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a memory of; to not forget.",
                "examples": [
                    "Please remember the deadline.",
                    "She remembers every client."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "remembered",
        "v3": "remembered"
    },
    {
        "word": "forget",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🤔",
        "subtext": "forget a name / forget to do / forget about / completely forget",
        "form": "verb",
        "definitions": [
            {
                "text": "To fail to remember.",
                "examples": [
                    "Don't forget the meeting.",
                    "He always forgets passwords."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "forgot",
        "v3": "forgotten"
    },
    {
        "word": "understand",
        "level": "starter",
        "theme": "asking_answering_questions_A0",
        "emoji": "💡",
        "subtext": "understand a problem / understand someone / understand clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "To grasp the meaning of something.",
                "examples": [
                    "I understand the contract.",
                    "She understands French."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "understood",
        "v3": "understood"
    },
    {
        "word": "decide",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "⚖️",
        "subtext": "decide to do / decide on / make a decision / hard to decide",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a choice.",
                "examples": [
                    "She decided to change careers.",
                    "He decides quickly."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "decided",
        "v3": "decided"
    },
    {
        "word": "enjoy",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "😊",
        "subtext": "enjoy doing / enjoy a meal / enjoy your work / enjoy life",
        "form": "verb",
        "definitions": [
            {
                "text": "To take pleasure from something.",
                "examples": [
                    "She really enjoys working from home three days a week."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "enjoyed",
        "v3": "enjoyed"
    },
    {
        "word": "see",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "👁️",
        "subtext": "see a doctor / see friends / see the problem / see clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "To notice or perceive with the eyes.",
                "examples": [
                    "I see my doctor tomorrow.",
                    "She sees the problem."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "saw",
        "v3": "seen"
    },
    {
        "word": "hear",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "👂",
        "subtext": "hear news / hear from someone / hear a sound / hear clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "To perceive sound through the ears.",
                "examples": [
                    "I hear the alarm every morning.",
                    "Can you hear me?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "heard",
        "v3": "heard"
    },
    {
        "word": "wake up",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "wake up early / wake up tired / wake up on time",
        "opposite": "sleep",
        "oppositeEmoji": "😴",
        "definitions": [
            {
                "text": "To stop sleeping; to become conscious.",
                "examples": [
                    "I wake up at six thirty.",
                    "She wakes up early for work."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "woke up",
        "v3": "woken up"
    },
    {
        "word": "watch",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "form": "verb",
        "subtext": "watch TV / watch a film / watch the news / watch closely",
        "definitions": [
            {
                "text": "To look at something for a period of time.",
                "examples": [
                    "She watches the market news every morning before work."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "watched",
        "v3": "watched"
    },
    {
        "word": "look",
        "level": "starter",
        "theme": "health_body",
        "emoji": "👀",
        "form": "verb",
        "definitions": [
            {
                "text": "To direct your eyes toward something.",
                "examples": [
                    "Look at this photo.",
                    "He is looking for his keys."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "looked",
        "v3": "looked"
    },
    {
        "word": "play",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "form": "verb",
        "definitions": [
            {
                "text": "To take part in a game or sport; to produce music.",
                "examples": [
                    "He plays football at the weekend to de-stress."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "played",
        "v3": "played",
        "subtext": "play sport / play a game / play music / play a role"
    },
    {
        "word": "run",
        "level": "starter",
        "theme": "common_sports_A0",
        "emoji": "🏃",
        "form": "verb",
        "definitions": [
            {
                "text": "To move very fast on your legs.",
                "examples": [
                    "I run in the park.",
                    "He runs to catch the bus."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ran",
        "v3": "run"
    },
    {
        "word": "sit",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🪑",
        "opposite": "stand",
        "oppositeEmoji": "🧍",
        "form": "verb",
        "definitions": [
            {
                "text": "To be in or take a seated position.",
                "examples": [
                    "He sits at his desk for eight hours a day."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sat",
        "v3": "sat",
        "subtext": "sit down / sit at a desk / sit in a meeting / sit quietly"
    },
    {
        "word": "stand",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🧍",
        "opposite": "sit",
        "oppositeEmoji": "🪑",
        "form": "verb",
        "definitions": [
            {
                "text": "To be in or rise to an upright position.",
                "examples": [
                    "She stands when she presents to keep her energy up."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "stood",
        "v3": "stood",
        "subtext": "stand up / stand in a queue / stand by / stand out"
    },
    {
        "word": "meet",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "To come together with someone by arrangement.",
                "examples": [
                    "We meet every Monday to discuss the week's work."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "met",
        "v3": "met",
        "subtext": "meet a client / meet a colleague / meet for lunch"
    },
    {
        "word": "learn",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "📚",
        "form": "verb",
        "definitions": [
            {
                "text": "To gain knowledge or skill.",
                "examples": [
                    "She is learning Spanish for her new job abroad."
                ]
            }
        ],
        "classification": "both",
        "aspect": "action",
        "v2": "learned / learnt",
        "v3": "learned / learnt",
        "subtext": "learn a language / learn a skill / learn from / learn how to"
    },
    {
        "word": "change",
        "level": "starter",
        "theme": "time",
        "emoji": "🔄",
        "form": "verb",
        "definitions": [
            {
                "text": "To become different; to make something different.",
                "examples": [
                    "She changed jobs twice in three years. Things change fast."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "changed",
        "v3": "changed",
        "subtext": "change jobs / change your mind / change the plan / change something"
    },
    {
        "word": "stop",
        "level": "starter",
        "theme": "time",
        "emoji": "🛑",
        "form": "verb",
        "definitions": [
            {
                "text": "To end an activity or movement.",
                "examples": [
                    "She stopped taking the bus and cycles to work now."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stopped",
        "v3": "stopped",
        "subtext": "stop doing / stop working / stop a habit / stop someone"
    },
    {
        "word": "add",
        "level": "starter",
        "theme": "numbers_math",
        "emoji": "➕",
        "form": "verb",
        "definitions": [
            {
                "text": "To put things together to make a larger group.",
                "examples": [
                    "Add some sugar to the tea.",
                    "What is five plus five?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "added",
        "v3": "added"
    },
    {
        "word": "win",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "opposite": "lose",
        "oppositeEmoji": "📉",
        "form": "verb",
        "definitions": [
            {
                "text": "To be the best in a game or competition.",
                "examples": [
                    "We want to win the game."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "won",
        "v3": "won"
    },
    {
        "word": "wait",
        "level": "starter",
        "theme": "time",
        "emoji": "⏳",
        "form": "verb",
        "definitions": [
            {
                "text": "To stay in a place until something happens.",
                "examples": [
                    "He waited twenty minutes for the meeting to start."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "waited",
        "v3": "waited",
        "subtext": "wait for someone / wait in a queue / wait a moment"
    },
    {
        "word": "die",
        "level": "starter",
        "theme": "health_body",
        "emoji": "⚰️",
        "opposite": "live",
        "oppositeEmoji": "🏠",
        "form": "verb",
        "definitions": [
            {
                "text": "To stop living.",
                "examples": [
                    "Plants die without water."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "died",
        "v3": "died"
    },
    {
        "word": "send",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "To transmit a message or file electronically.",
                "examples": [
                    "She sends twenty emails before lunch every day."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sent",
        "v3": "sent",
        "subtext": "send an email / send a message / send a report"
    },
    {
        "word": "stay",
        "level": "starter",
        "theme": "places_geography",
        "emoji": "🏨",
        "form": "verb",
        "definitions": [
            {
                "text": "To continue to be in a place.",
                "examples": [
                    "I stay at home on Sundays.",
                    "We are staying in a hotel."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stayed",
        "v3": "stayed"
    },
    {
        "word": "fall",
        "level": "starter",
        "theme": "environment_nature",
        "emoji": "🍂",
        "form": "verb",
        "definitions": [
            {
                "text": "To move down toward the ground.",
                "examples": [
                    "Leaves fall in autumn.",
                    "Be careful, don't fall."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "fell",
        "v3": "fallen"
    },
    {
        "word": "pass",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🏔️",
        "form": "verb",
        "definitions": [
            {
                "text": "To go past something or to succeed in an exam.",
                "examples": [
                    "I pass the park on my way home.",
                    "I hope I pass the test."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "passed",
        "v3": "passed"
    },
    {
        "word": "sell",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🏷️",
        "opposite": "buy",
        "oppositeEmoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "To give something to someone for money.",
                "examples": [
                    "They sell fruit at the market."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sold",
        "v3": "sold"
    },
    {
        "word": "pull",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🚜",
        "opposite": "push",
        "oppositeEmoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "To move something toward you.",
                "examples": [
                    "Pull the door to open it."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pulled",
        "v3": "pulled"
    },
    {
        "word": "push",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🛒",
        "opposite": "pull",
        "oppositeEmoji": "🚜",
        "form": "verb",
        "definitions": [
            {
                "text": "To move something away from you.",
                "examples": [
                    "Push the button.",
                    "I push the shopping cart."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pushed",
        "v3": "pushed"
    },
    {
        "word": "carry",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🎒",
        "form": "verb",
        "definitions": [
            {
                "text": "To hold and take something with you.",
                "examples": [
                    "I carry my laptop and notes to every meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "carried",
        "v3": "carried",
        "subtext": "carry a bag / carry notes / carry out / carry on"
    },
    {
        "word": "break",
        "level": "starter",
        "theme": "describing_things",
        "emoji": "💔",
        "form": "verb",
        "definitions": [
            {
                "text": "To separate something into two or more pieces.",
                "examples": [
                    "Don't break the glass.",
                    "He broke his leg."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "broke",
        "v3": "broken"
    },
    {
        "word": "receive",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "📩",
        "form": "verb",
        "definitions": [
            {
                "text": "To get something that someone gave or sent to you.",
                "examples": [
                    "I receive a lot of mail.",
                    "She received a gift."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "received",
        "v3": "received"
    },
    {
        "word": "agree",
        "level": "starter",
        "theme": "opinion_debate",
        "emoji": "👍",
        "form": "verb",
        "definitions": [
            {
                "text": "To have the same opinion as someone.",
                "examples": [
                    "I agree with you.",
                    "We agree on the plan."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "agreed",
        "v3": "agreed"
    },
    {
        "word": "draw",
        "level": "starter",
        "theme": "culture_arts",
        "emoji": "🎨",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a picture with a pen or pencil.",
                "examples": [
                    "I like to draw birds.",
                    "Can you draw a map?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drew",
        "v3": "drawn"
    },
    {
        "word": "share",
        "level": "starter",
        "theme": "society_politics",
        "emoji": "🍕",
        "form": "verb",
        "definitions": [
            {
                "text": "To give a part of something to others.",
                "examples": [
                    "Let's share the pizza.",
                    "I share a room with my brother."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "shared",
        "v3": "shared"
    },
    {
        "word": "smile",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "😊",
        "opposite": "cry",
        "oppositeEmoji": "😢",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a happy expression with your mouth.",
                "examples": [
                    "She has a beautiful smile.",
                    "Smile for the camera."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "smiled",
        "v3": "smiled"
    },
    {
        "word": "cry",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "😢",
        "opposite": "smile",
        "oppositeEmoji": "😊",
        "form": "verb",
        "definitions": [
            {
                "text": "To produce tears because you are sad or in pain.",
                "examples": [
                    "The baby is crying.",
                    "Don't cry."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cried",
        "v3": "cried"
    },
    {
        "word": "dance",
        "level": "starter",
        "theme": "culture_arts",
        "emoji": "💃",
        "form": "verb",
        "definitions": [
            {
                "text": "To move your body to music.",
                "examples": [
                    "I love to dance.",
                    "They are dancing."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "danced",
        "v3": "danced"
    },
    {
        "word": "sing",
        "level": "starter",
        "theme": "culture_arts",
        "emoji": "🎤",
        "form": "verb",
        "definitions": [
            {
                "text": "To make musical sounds with your voice.",
                "examples": [
                    "I like to sing in the shower.",
                    "She sings very well."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sang",
        "v3": "sung"
    },
    {
        "word": "jump",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🦘",
        "form": "verb",
        "definitions": [
            {
                "text": "To push yourself off the ground with your legs.",
                "examples": [
                    "Can you jump high?",
                    "The cat jumped onto the table."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "jumped",
        "v3": "jumped"
    },
    {
        "word": "swim",
        "level": "starter",
        "theme": "common_sports_A0",
        "emoji": "🏊",
        "form": "verb",
        "definitions": [
            {
                "text": "To move through water using your arms and legs.",
                "examples": [
                    "I swim every morning.",
                    "Can you swim?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "swam",
        "v3": "swum"
    },
    {
        "word": "study",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "To read and practise to gain knowledge.",
                "examples": [
                    "He is studying for a professional qualification."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "studied",
        "v3": "studied",
        "subtext": "study English / study for an exam / study hard / self-study"
    },
    {
        "word": "teach",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "👨‍🏫",
        "form": "verb",
        "definitions": [
            {
                "text": "To give instruction in a subject.",
                "examples": [
                    "She teaches communication skills to senior managers."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "taught",
        "v3": "taught",
        "subtext": "teach someone / teach a subject / teach how to / teach a class"
    },
    {
        "word": "commute",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🚆",
        "form": "verb",
        "definitions": [
            {
                "text": "To travel some distance between one's home and place of work on a regular basis.",
                "examples": [
                    "I commute to the city by train."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "commuted",
        "v3": "commuted"
    },
    {
        "word": "rent",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏠",
        "form": "verb",
        "definitions": [
            {
                "text": "To pay money to use property belonging to someone else.",
                "examples": [
                    "They rent a two-bedroom flat near the city centre."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "rented",
        "v3": "rented",
        "subtext": "rent a flat / rent a property / rent out a room"
    },
    {
        "word": "exercise",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏋️",
        "form": "verb",
        "definitions": [
            {
                "text": "To do physical activity for health and fitness.",
                "examples": [
                    "He exercises four times a week to manage work stress."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "exercised",
        "v3": "exercised",
        "subtext": "exercise regularly / exercise at the gym / exercise outdoors"
    },
    {
        "word": "cost",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a price of a particular amount.",
                "examples": [
                    "The flat costs twelve hundred euros a month."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "cost",
        "v3": "cost",
        "subtext": "cost a lot / cost too much / cost less / how much does it cost"
    },
    {
        "word": "invite",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "To ask someone to come to an event or place.",
                "examples": [
                    "She invited all her colleagues to the leaving party."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invited",
        "v3": "invited",
        "subtext": "invite someone / invite to dinner / invite to a party"
    },
    {
        "word": "get up",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🌅",
        "subtext": "get up early / get up late / get up quickly",
        "form": "verb",
        "definitions": [
            {
                "text": "To rise from bed after waking.",
                "examples": [
                    "He gets up at seven and showers immediately."
                ]
            }
        ],
        "classification": "irregular",
        "v2": "got up",
        "v3": "got up / gotten up",
        "aspect": "action"
    },
    {
        "word": "check",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✅",
        "subtext": "check emails / check messages / check a document",
        "form": "verb",
        "definitions": [
            {
                "text": "To examine or verify something.",
                "examples": [
                    "I check my emails first thing every morning."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "checked",
        "v3": "checked"
    },
    {
        "word": "reply",
        "level": "starter",
        "theme": "asking_answering_questions_A0",
        "emoji": "📨",
        "subtext": "reply to an email / reply quickly / reply to a message",
        "form": "verb",
        "definitions": [
            {
                "text": "To respond to a message.",
                "examples": [
                    "He always replies to emails the same day."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "replied",
        "v3": "replied"
    },
    {
        "word": "attend",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "👥",
        "subtext": "attend a meeting / attend a course / attend an event",
        "form": "verb",
        "definitions": [
            {
                "text": "To go to a meeting or event.",
                "examples": [
                    "She attends the management meeting every Monday."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "attended",
        "v3": "attended"
    },
    {
        "word": "manage",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "👔",
        "subtext": "manage a team / manage a project / manage your time",
        "form": "verb",
        "definitions": [
            {
                "text": "To be in charge of people or a situation.",
                "examples": [
                    "She manages a team of twelve people in the sales office."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "managed",
        "v3": "managed"
    },
    {
        "word": "order",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📦",
        "subtext": "order food / order a drink / order online / order supplies",
        "form": "verb",
        "definitions": [
            {
                "text": "To request something formally, especially food or goods.",
                "examples": [
                    "I always order lunch from the same place near the office."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ordered",
        "v3": "ordered"
    },
    {
        "word": "visit",
        "level": "starter",
        "theme": "local_places_services_A0",
        "emoji": "🏠",
        "subtext": "visit a client / visit a city / visit family / visit regularly",
        "form": "verb",
        "definitions": [
            {
                "text": "To go to see a person or place.",
                "examples": [
                    "She visits clients in different cities every week."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "visited",
        "v3": "visited"
    },
    {
        "word": "explain",
        "level": "starter",
        "theme": "asking_answering_questions_A0",
        "emoji": "👨‍🏫",
        "form": "verb",
        "subtext": "explain a process / explain clearly / explain to someone",
        "definitions": [
            {
                "text": "To make something clear by giving details.",
                "examples": [
                    "He always explains the process to new team members."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "explained",
        "v3": "explained"
    },
    {
        "word": "thank",
        "level": "starter",
        "theme": "greetings_social_phrases_A0",
        "emoji": "🙏",
        "subtext": "thank someone / thank you for / many thanks",
        "form": "verb",
        "definitions": [
            {
                "text": "To express gratitude to someone.",
                "examples": [
                    "He thanked the team for their hard work on the project."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "thanked",
        "v3": "thanked"
    },
    {
        "word": "introduce",
        "level": "starter",
        "theme": "greetings_social_phrases_A0",
        "emoji": "🤝",
        "subtext": "introduce yourself / introduce someone / introduce a topic",
        "form": "verb",
        "definitions": [
            {
                "text": "To present someone to another person.",
                "examples": [
                    "She introduced herself at the start of the meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "introduced",
        "v3": "introduced"
    },
    {
        "word": "recommend",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "subtext": "recommend a person / recommend a place / highly recommend",
        "form": "verb",
        "definitions": [
            {
                "text": "To suggest something as good or suitable.",
                "examples": [
                    "Can you recommend a good accountant?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recommended",
        "v3": "recommended"
    },
    {
        "word": "earn",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "subtext": "earn a salary / earn money / earn more / earn enough",
        "form": "verb",
        "definitions": [
            {
                "text": "To receive money for work you do.",
                "examples": [
                    "He earns a good salary as a senior developer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "earned",
        "v3": "earned"
    },
    {
        "word": "afford",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "verb",
        "subtext": "afford a house / afford to travel / can't afford it",
        "definitions": [
            {
                "text": "To have enough money for something.",
                "examples": [
                    "They cannot afford to buy a flat in the city centre."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "afforded",
        "v3": "afforded"
    },
    {
        "word": "charge",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💳",
        "subtext": "charge a fee / charge extra / charge for a service",
        "form": "verb",
        "definitions": [
            {
                "text": "To ask a sum of money for a service.",
                "examples": [
                    "The mechanic charged three hundred euros for the repair."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "charged",
        "v3": "charged"
    },
    {
        "word": "book",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "📖",
        "subtext": "book a hotel / book a flight / book a table / book in advance",
        "form": "verb",
        "definitions": [
            {
                "text": "To reserve a place, ticket or service in advance.",
                "examples": [
                    "I always book restaurants online before going."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "booked",
        "v3": "booked"
    },
    {
        "word": "pack",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🎒",
        "subtext": "pack a bag / pack a suitcase / pack lightly",
        "form": "verb",
        "definitions": [
            {
                "text": "To put items into a bag or case for a trip.",
                "examples": [
                    "He packs his bag the night before every business trip."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "packed",
        "v3": "packed"
    },
    {
        "word": "cancel",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "❌",
        "subtext": "cancel a flight / cancel a booking / cancel a meeting",
        "form": "verb",
        "definitions": [
            {
                "text": "To decide that something planned will not happen.",
                "examples": [
                    "She had to cancel the client meeting due to illness."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cancelled",
        "v3": "cancelled"
    },
    {
        "word": "miss",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🚂",
        "subtext": "miss a train / miss a flight / miss a meeting / miss someone",
        "form": "verb",
        "definitions": [
            {
                "text": "To fail to catch transport; to feel sad about absence.",
                "examples": [
                    "He missed his train and was late for the interview."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "missed",
        "v3": "missed"
    },
    {
        "word": "relax",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🛀",
        "subtext": "relax at home / relax after work / relax on holiday",
        "form": "verb",
        "definitions": [
            {
                "text": "To stop working and rest; to become less tense.",
                "examples": [
                    "I relax at the weekend and never check emails."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "relaxed",
        "v3": "relaxed"
    },
    {
        "word": "hurt",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "🤕",
        "subtext": "hurt your back / hurt someone / it hurts / get hurt",
        "form": "verb",
        "definitions": [
            {
                "text": "To cause pain; or to be in pain.",
                "examples": [
                    "My back hurts after sitting at a desk all day."
                ]
            }
        ],
        "classification": "irregular",
        "v2": "hurt",
        "v3": "hurt",
        "aspect": "both"
    },
    {
        "word": "rest",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🛌",
        "subtext": "rest at home / rest after work / need rest / get some rest",
        "form": "verb",
        "definitions": [
            {
                "text": "To stop working in order to recover energy.",
                "examples": [
                    "He rests for an hour every afternoon after lunch."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "rested",
        "v3": "rested"
    },
    {
        "word": "recover",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "💪",
        "subtext": "recover from illness / recover quickly / recover fully",
        "form": "verb",
        "definitions": [
            {
                "text": "To return to good health after illness.",
                "examples": [
                    "She is recovering from surgery and working part-time."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recovered",
        "v3": "recovered"
    },
    {
        "word": "repair",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🛠️",
        "subtext": "repair something / get repaired / repair costs",
        "form": "verb",
        "definitions": [
            {
                "text": "To fix something that is broken.",
                "examples": [
                    "The landlord is slow to repair things in the flat."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "repaired",
        "v3": "repaired"
    },
    {
        "word": "celebrate",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "🎉",
        "subtext": "celebrate a birthday / celebrate success / celebrate together",
        "form": "verb",
        "definitions": [
            {
                "text": "To do something enjoyable for a special occasion.",
                "examples": [
                    "They celebrate every work anniversary as a team."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "celebrated",
        "v3": "celebrated"
    },
    {
        "word": "happen",
        "level": "starter",
        "theme": "asking_answering_questions_A0",
        "emoji": "⚡",
        "form": "verb",
        "subtext": "what happened / happen to someone / it happens / happen again",
        "definitions": [
            {
                "text": "To take place; to occur.",
                "examples": [
                    "What happened at the meeting? Something went wrong."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "happened",
        "v3": "happened"
    },
    {
        "word": "seem",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤔",
        "form": "verb",
        "subtext": "seem fine / seem worried / seem happy / seem like",
        "definitions": [
            {
                "text": "To appear to be something; to give an impression.",
                "examples": [
                    "She seems very confident in client meetings."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "seemed",
        "v3": "seemed"
    },
    {
        "word": "mean",
        "level": "starter",
        "theme": "asking_answering_questions_A0",
        "emoji": "🗨️",
        "subtext": "mean something / what does it mean / mean to do / I didn't mean to",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a particular meaning; to intend.",
                "examples": [
                    "What does this clause in the contract mean?"
                ]
            }
        ],
        "classification": "irregular",
        "v2": "meant",
        "v3": "meant",
        "aspect": "stative"
    },
    {
        "word": "follow",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "👣",
        "form": "verb",
        "subtext": "follow instructions / follow someone / follow the news / follow up",
        "definitions": [
            {
                "text": "To come after; to obey rules or instructions.",
                "examples": [
                    "Please follow the instructions carefully. He follows the news."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "followed",
        "v3": "followed"
    },
    {
        "word": "continue",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "➡️",
        "form": "verb",
        "subtext": "continue working / continue to do / continue with / continue a task",
        "definitions": [
            {
                "text": "To keep doing something without stopping.",
                "examples": [
                    "He continued working after six despite feeling ill."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "continued",
        "v3": "continued"
    },
    {
        "word": "grow",
        "level": "starter",
        "theme": "plants_natural_world_A1",
        "emoji": "🌱",
        "form": "verb",
        "subtext": "grow a business / grow quickly / grow by / grow into",
        "definitions": [
            {
                "text": "To increase in size or amount; to develop.",
                "examples": [
                    "The company grew by twenty percent last year."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "grew",
        "v3": "grown"
    },
    {
        "word": "include",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "➕",
        "form": "verb",
        "subtext": "include something / include in / not included / price includes",
        "definitions": [
            {
                "text": "To make something part of a whole.",
                "examples": [
                    "The price includes breakfast and evening meals."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "included",
        "v3": "included"
    },
    {
        "word": "become",
        "level": "starter",
        "theme": "relationships_dating_A2",
        "emoji": "🦋",
        "form": "verb",
        "subtext": "become a manager / become popular / become clear / become important",
        "definitions": [
            {
                "text": "To start to be something.",
                "examples": [
                    "She became a manager after just two years in the role."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "became",
        "v3": "become"
    },
    {
        "word": "belong",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🏠",
        "subtext": "belong to someone / belong in / feel like you belong",
        "form": "verb",
        "definitions": [
            {
                "text": "To be the property of someone; to be a member.",
                "examples": [
                    "That account belongs to the finance department."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "belonged",
        "v3": "belonged"
    },
    {
        "word": "choose",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "👈",
        "subtext": "choose between / choose to do / choose carefully / choose a career",
        "form": "verb",
        "definitions": [
            {
                "text": "To select from options.",
                "examples": [
                    "He chose to work part-time to spend more time with family."
                ]
            }
        ],
        "classification": "irregular",
        "v2": "chose",
        "v3": "chosen",
        "aspect": "action"
    },
    {
        "word": "build",
        "level": "starter",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🏗️",
        "form": "verb",
        "subtext": "build a career / build a team / build experience / build trust",
        "definitions": [
            {
                "text": "To construct something; to develop something over time.",
                "examples": [
                    "She built a strong reputation over ten years."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "built",
        "v3": "built"
    }
];
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
