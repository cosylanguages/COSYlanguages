(function() {
    const data = [
    {
        "word": "be",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👤",
        "subtext": "be ready / be tired / be at home / be open",
        "form": "verb",
        "definitions": [
            {
                "text": "To exist; to have a quality or state.",
                "examples": [
                    "I am tired. She is a nurse. We are at work."
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
        "theme": "personal_identity",
        "emoji": "👜",
        "subtext": "have a job / have lunch / have time / have a problem",
        "form": "verb",
        "definitions": [
            {
                "text": "To possess or experience something.",
                "examples": [
                    "I have a flat. He has a headache. She has a job."
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
        "theme": "feelings_emotions",
        "emoji": "🌡️",
        "subtext": "feel tired / feel well / feel better / feel cold",
        "form": "verb",
        "definitions": [
            {
                "text": "To experience a physical or emotional sensation.",
                "examples": [
                    "I feel happy. She feels tired. He feels better."
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
        "subtext": "give advice / give a gift / give money / give information",
        "opposite": "take",
        "oppositeEmoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "To hand something to someone.",
                "examples": [
                    "He gives me good advice. She gives a lot."
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
        "subtext": "take the bus / take medicine / take a break / take a photo",
        "opposite": "give",
        "oppositeEmoji": "🎁",
        "form": "verb",
        "definitions": [
            {
                "text": "To hold and carry something; to use something.",
                "examples": [
                    "I take the bus. She takes medicine. He takes notes."
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
        "subtext": "get home / get a job / get tired / get better",
        "form": "verb",
        "definitions": [
            {
                "text": "To receive or obtain; to become.",
                "examples": [
                    "I get a good salary. She gets tired. He gets home at six."
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
        "theme": "home_living",
        "emoji": "📥",
        "subtext": "put on / put away / put the phone down / put money aside",
        "form": "verb",
        "definitions": [
            {
                "text": "To place something in a position.",
                "examples": [
                    "Put your bag here. She puts money in the bank."
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
                "text": "To create or produce something; to cause.",
                "examples": [
                    "I make coffee every morning. She makes decisions quickly."
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
        "subtext": "do work / do exercise / do the shopping / do nothing",
        "form": "verb",
        "definitions": [
            {
                "text": "To perform a task or activity.",
                "examples": [
                    "I do my work. She does the cooking. He does nothing."
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
        "theme": "technology_media",
        "emoji": "🛠️",
        "subtext": "use a phone / use public transport / use a computer",
        "form": "verb",
        "definitions": [
            {
                "text": "To employ something for a purpose.",
                "examples": [
                    "I use my phone for everything. She uses public transport."
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
        "subtext": "open a door / open an account / open at nine",
        "opposite": "close",
        "oppositeEmoji": "🔒",
        "form": "verb",
        "definitions": [
            {
                "text": "To make not closed; to begin.",
                "examples": [
                    "He opens the door. She opens a bank account."
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
        "subtext": "close a door / close at six / close the meeting",
        "opposite": "open",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "To make not open; to finish.",
                "examples": [
                    "She closes her laptop. The bank closes at five."
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
        "theme": "time",
        "emoji": "▶️",
        "subtext": "start work / start a meeting / start a new job",
        "opposite": "finish",
        "oppositeEmoji": "🏁",
        "form": "verb",
        "definitions": [
            {
                "text": "To begin something.",
                "examples": [
                    "I start work at eight. She starts a new job."
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
        "theme": "time",
        "emoji": "🏁",
        "subtext": "finish work / finish a project / finish early",
        "opposite": "start",
        "oppositeEmoji": "▶️",
        "form": "verb",
        "definitions": [
            {
                "text": "To complete something or stop.",
                "examples": [
                    "He finishes work at five. She finishes the report."
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
        "theme": "society_politics",
        "emoji": "🤝",
        "subtext": "help someone / help with / ask for help / help out",
        "form": "verb",
        "definitions": [
            {
                "text": "To assist someone.",
                "examples": [
                    "He helps his colleagues. Can you help me?"
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
        "theme": "education_learning",
        "emoji": "🎯",
        "subtext": "try to do / try hard / try something new / give it a try",
        "form": "verb",
        "definitions": [
            {
                "text": "To make an effort; to attempt something.",
                "examples": [
                    "I always try my best at work. Try the coffee here."
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
        "theme": "language_communication",
        "emoji": "📽️",
        "subtext": "show someone / show how / show a document / show interest",
        "form": "verb",
        "definitions": [
            {
                "text": "To let someone see something; to explain.",
                "examples": [
                    "She shows me the map. He shows his work."
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
                    "I find the work interesting. She found a new job."
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
                    "Keep the receipt. She keeps her phone on all day."
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
        "theme": "leisure_activities_A1",
        "emoji": "📉",
        "subtext": "lose a job / lose money / lose weight / lose time",
        "opposite": "win",
        "oppositeEmoji": "🏆",
        "form": "verb",
        "definitions": [
            {
                "text": "To no longer have something; to fail to win.",
                "examples": [
                    "I lost my keys. She lost her job. He never loses."
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
        "theme": "food_drink",
        "emoji": "✂️",
        "subtext": "cut costs / cut spending / cut short / cut in half",
        "form": "verb",
        "definitions": [
            {
                "text": "To divide with something sharp; to reduce.",
                "examples": [
                    "She cuts her lunch break short. It cuts costs."
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
                    "Turn left at the office. She turns off the light."
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
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "subtext": "bring someone / bring food / bring a document / bring up",
        "form": "verb",
        "definitions": [
            {
                "text": "To carry something to a place.",
                "examples": [
                    "Bring your ID to the interview. He brings lunch."
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
        "theme": "language_communication",
        "emoji": "🗨️",
        "subtext": "say hello / say yes / say no / say something",
        "form": "verb",
        "definitions": [
            {
                "text": "To express something in words.",
                "examples": [
                    "She says hello every morning. He says it is fine."
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
        "theme": "language_communication",
        "emoji": "🗣️",
        "subtext": "tell the truth / tell someone / tell a story / tell lies",
        "form": "verb",
        "definitions": [
            {
                "text": "To give information to someone.",
                "examples": [
                    "He tells the truth. She tells me about her day."
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
        "theme": "language_communication",
        "emoji": "❓",
        "subtext": "ask a question / ask for help / ask about / ask someone",
        "form": "verb",
        "definitions": [
            {
                "text": "To put a question; to make a request.",
                "examples": [
                    "She asks good questions. I ask my boss for help."
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
        "theme": "language_communication",
        "emoji": "🗣️",
        "subtext": "speak to someone / speak a language / speak clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "To communicate verbally; to know a language.",
                "examples": [
                    "He speaks three languages. She speaks to her manager."
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
        "theme": "language_communication",
        "emoji": "💬",
        "subtext": "talk to someone / talk about / talk openly / talk for a while",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a conversation.",
                "examples": [
                    "We talk about work every Monday. She talks a lot."
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
        "theme": "language_communication",
        "emoji": "📞",
        "subtext": "call someone / call back / call a meeting / call in sick",
        "form": "verb",
        "definitions": [
            {
                "text": "To telephone someone.",
                "examples": [
                    "I call my clients every morning. She calls a meeting."
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
                    "I write emails all day. She writes a report every Friday."
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
                    "She reads the news every morning. He reads contracts."
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
        "theme": "language_communication",
        "emoji": "🎧",
        "subtext": "listen to music / listen carefully / listen to a podcast",
        "form": "verb",
        "definitions": [
            {
                "text": "To pay attention to sounds or speech.",
                "examples": [
                    "I listen to podcasts at work. She listens carefully."
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
        "theme": "language_communication",
        "emoji": "📞",
        "subtext": "answer a question / answer the phone / answer an email",
        "form": "verb",
        "definitions": [
            {
                "text": "To respond to a question or communication.",
                "examples": [
                    "He answers all emails quickly. She answered the phone."
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
        "theme": "language_communication",
        "emoji": "🔁",
        "subtext": "repeat that / repeat yourself / repeat an order",
        "form": "verb",
        "definitions": [
            {
                "text": "To say or do something again.",
                "examples": [
                    "Please repeat that. He repeated the instruction twice."
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
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "subtext": "go to work / go home / go out / go shopping / go abroad",
        "form": "verb",
        "definitions": [
            {
                "text": "To move from one place to another.",
                "examples": [
                    "I go to work by train. She goes abroad every year."
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
        "theme": "modes_of_transport_A0",
        "emoji": "🏃‍♂️",
        "subtext": "come home / come back / come to work / come here",
        "opposite": "go",
        "oppositeEmoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "To move towards a place.",
                "examples": [
                    "He comes to the office at nine. She comes home late."
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
        "subtext": "walk to work / walk home / walk fast / walk every day",
        "form": "verb",
        "definitions": [
            {
                "text": "To move on foot at a normal speed.",
                "examples": [
                    "He walks to work every day. She walks during lunch."
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
                "text": "To operate and control a vehicle.",
                "examples": [
                    "She drives a company car. He drives to meetings."
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
                    "She flies to Paris for meetings. He hates flying."
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
        "theme": "modes_of_transport_A0",
        "emoji": "🏁",
        "subtext": "arrive at work / arrive late / arrive on time / arrive home",
        "form": "verb",
        "definitions": [
            {
                "text": "To reach a destination.",
                "examples": [
                    "He arrives at the office at nine. The train arrives late."
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
        "theme": "modes_of_transport_A0",
        "emoji": "🚪",
        "subtext": "leave home / leave work / leave early / leave late",
        "form": "verb",
        "definitions": [
            {
                "text": "To go away from a place.",
                "examples": [
                    "I leave home at eight. She left the company last year."
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
        "theme": "home_living",
        "emoji": "📦",
        "subtext": "move house / move to a city / move on / move forward",
        "form": "verb",
        "definitions": [
            {
                "text": "To change position or place of living.",
                "examples": [
                    "They moved to a new flat. She moves to a different team."
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
        "theme": "modes_of_transport_A0",
        "emoji": "🔙",
        "subtext": "return home / return to work / return a call / return from",
        "form": "verb",
        "definitions": [
            {
                "text": "To come or go back to a place.",
                "examples": [
                    "He returns from a trip on Friday. She returned the call."
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
        "theme": "modes_of_transport_A0",
        "emoji": "✈️",
        "subtext": "travel for work / travel abroad / travel by train",
        "form": "verb",
        "definitions": [
            {
                "text": "To go from one place to another, often far.",
                "examples": [
                    "She travels for work once a month. He loves to travel."
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
        "theme": "basic_foods_A0",
        "emoji": "🍎",
        "subtext": "eat breakfast / eat lunch / eat dinner / eat out",
        "opposite": "drink",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "To put food in the mouth and consume it.",
                "examples": [
                    "We eat lunch at one o'clock. She eats at her desk."
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
        "subtext": "drink coffee / drink tea / drink water / drink alcohol",
        "opposite": "eat",
        "oppositeEmoji": "🍎",
        "form": "verb",
        "definitions": [
            {
                "text": "To swallow liquid.",
                "examples": [
                    "She drinks coffee every morning. I drink water at work."
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
        "theme": "daily_work_routines_A1",
        "emoji": "😴",
        "subtext": "sleep well / sleep badly / sleep eight hours",
        "opposite": "wake up",
        "oppositeEmoji": "⏰",
        "form": "verb",
        "definitions": [
            {
                "text": "To rest in an unconscious state.",
                "examples": [
                    "He sleeps seven hours a night. She sleeps badly."
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
        "theme": "food_drink",
        "emoji": "🍳",
        "subtext": "cook dinner / cook a meal / cook at home",
        "form": "verb",
        "definitions": [
            {
                "text": "To prepare food using heat.",
                "examples": [
                    "She cooks dinner every evening. He cooks for the team."
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
        "theme": "home_living",
        "emoji": "🧹",
        "subtext": "clean the flat / clean up / clean the kitchen",
        "form": "verb",
        "definitions": [
            {
                "text": "To remove dirt from something.",
                "examples": [
                    "I clean the flat on Saturdays. He cleans his desk daily."
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
        "theme": "colours_patterns_A0",
        "emoji": "👕",
        "subtext": "wear a suit / wear glasses / wear casual clothes",
        "form": "verb",
        "definitions": [
            {
                "text": "To have clothing or accessories on your body.",
                "examples": [
                    "She wears a suit to work. He wears glasses."
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
        "theme": "home_living",
        "emoji": "🧼",
        "subtext": "wash the dishes / wash clothes / wash your hands",
        "form": "verb",
        "definitions": [
            {
                "text": "To clean something with water.",
                "examples": [
                    "He washes his car every Sunday. Wash your hands."
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
                "text": "To get something by paying money.",
                "examples": [
                    "She buys groceries online. He wants to buy a flat."
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
        "theme": "everyday_shopping_A0",
        "emoji": "💰",
        "subtext": "pay a bill / pay rent / pay by card / pay in cash",
        "form": "verb",
        "definitions": [
            {
                "text": "To give money in exchange for something.",
                "examples": [
                    "I pay the rent monthly. She pays by card."
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
        "theme": "everyday_shopping_A0",
        "emoji": "💸",
        "subtext": "spend money / spend time / spend on rent",
        "form": "verb",
        "definitions": [
            {
                "text": "To use money or time.",
                "examples": [
                    "He spends too much on takeaway. She spends time commuting."
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
        "theme": "everyday_shopping_A0",
        "emoji": "💰",
        "subtext": "save money / save for a house / save time",
        "opposite": "spend",
        "oppositeEmoji": "💸",
        "form": "verb",
        "definitions": [
            {
                "text": "To keep money rather than spending it.",
                "examples": [
                    "She saves a hundred euros a month. Save your work."
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
                "text": "To do tasks to earn money.",
                "examples": [
                    "He works from home three days a week. She works hard."
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
        "theme": "personal_identity",
        "emoji": "🏠",
        "subtext": "live in a flat / live alone / live with someone / live abroad",
        "opposite": "die",
        "oppositeEmoji": "⚰️",
        "form": "verb",
        "definitions": [
            {
                "text": "To have your home in a place; to be alive.",
                "examples": [
                    "She lives in a flat near the centre. We live together."
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
        "theme": "language_communication",
        "emoji": "💭",
        "subtext": "think about / think of / think carefully / think it is",
        "form": "verb",
        "definitions": [
            {
                "text": "To use the mind; to have an opinion.",
                "examples": [
                    "I think it is a good idea. She thinks about quitting."
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
        "theme": "education_learning",
        "emoji": "🧠",
        "subtext": "know someone / know the answer / know how to / know about",
        "form": "verb",
        "definitions": [
            {
                "text": "To have information or be familiar with.",
                "examples": [
                    "I know his name. She knows how to negotiate."
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
        "theme": "feelings_emotions",
        "emoji": "🙏",
        "subtext": "want a job / want to do / want more / want help",
        "form": "verb",
        "definitions": [
            {
                "text": "To desire or wish for something.",
                "examples": [
                    "I want a coffee. She wants a promotion. He wants to retire."
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
        "theme": "feelings_emotions",
        "emoji": "🆘",
        "subtext": "need help / need time / need money / need to rest",
        "form": "verb",
        "definitions": [
            {
                "text": "To require something.",
                "examples": [
                    "I need a break. She needs more time. He needs help."
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
        "theme": "feelings_emotions",
        "emoji": "👍",
        "subtext": "like work / like to travel / like someone / like the idea",
        "form": "verb",
        "definitions": [
            {
                "text": "To find something pleasant.",
                "examples": [
                    "I like my job. She likes cooking at home. He likes coffee."
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
        "theme": "feelings_emotions",
        "emoji": "❤️",
        "subtext": "love someone / love doing / love a place / love the idea",
        "form": "verb",
        "definitions": [
            {
                "text": "To have strong affection for; to enjoy greatly.",
                "examples": [
                    "She loves her job. He loves travelling for work."
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
        "theme": "feelings_emotions",
        "emoji": "😡",
        "subtext": "hate doing / hate someone / hate meetings / hate commuting",
        "form": "verb",
        "definitions": [
            {
                "text": "To strongly dislike.",
                "examples": [
                    "He hates commuting by bus. She hates long meetings."
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
        "theme": "feelings_emotions",
        "emoji": "🤞",
        "subtext": "hope for / hope to do / hope that / I hope so",
        "form": "verb",
        "definitions": [
            {
                "text": "To wish for something to happen.",
                "examples": [
                    "I hope to get a promotion this year. She hopes for better pay."
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
        "theme": "education_learning",
        "emoji": "🧠",
        "subtext": "remember to do / remember a name / remember clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a memory of; to not forget.",
                "examples": [
                    "Please remember the deadline. She remembers every client."
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
        "theme": "education_learning",
        "emoji": "🤔",
        "subtext": "forget a name / forget to do / forget about / completely forget",
        "form": "verb",
        "definitions": [
            {
                "text": "To fail to remember.",
                "examples": [
                    "Don't forget the meeting. He always forgets passwords."
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
        "theme": "language_communication",
        "emoji": "💡",
        "subtext": "understand a problem / understand someone / understand clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "To grasp the meaning of something.",
                "examples": [
                    "I understand the contract. She understands French."
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
        "theme": "feelings_emotions",
        "emoji": "⚖️",
        "subtext": "decide to do / decide on / make a decision / hard to decide",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a choice.",
                "examples": [
                    "She decided to change careers. He decides quickly."
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
        "theme": "feelings_emotions",
        "emoji": "😊",
        "subtext": "enjoy doing / enjoy a meal / enjoy your work / enjoy life",
        "form": "verb",
        "definitions": [
            {
                "text": "To take pleasure from something.",
                "examples": [
                    "He enjoys working from home. She enjoys her new role."
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
        "theme": "health_body",
        "emoji": "👁️",
        "subtext": "see a doctor / see friends / see the problem / see clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "To notice or perceive with the eyes.",
                "examples": [
                    "I see my doctor tomorrow. She sees the problem."
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
        "theme": "health_body",
        "emoji": "👂",
        "subtext": "hear news / hear from someone / hear a sound / hear clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "To perceive sound through the ears.",
                "examples": [
                    "I hear the alarm every morning. Can you hear me?"
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
        "subtext": "wake up early, wake up at 7am",
        "opposite": "sleep",
        "oppositeEmoji": "😴",
        "definitions": [
            {
                "text": "To stop sleeping and open your eyes.",
                "examples": [
                    "I wake up at seven o'clock.",
                    "What time do you wake up?"
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
        "subtext": "watch TV, watch a movie",
        "definitions": [
            {
                "text": "To look at something for a period of time.",
                "examples": [
                    "I watch TV in the evening.",
                    "They watch the birds."
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
                "text": "To do something for fun or in a game.",
                "examples": [
                    "I play football with my friends.",
                    "She likes to play video games."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "played",
        "v3": "played"
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
                "text": "To rest your weight on your bottom rather than your feet.",
                "examples": [
                    "Please sit down.",
                    "I sit on a chair."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sat",
        "v3": "sat"
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
                "text": "To be on your feet in an upright position.",
                "examples": [
                    "Please stand up.",
                    "She is standing near the door."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "stood",
        "v3": "stood"
    },
    {
        "word": "meet",
        "level": "starter",
        "theme": "society_politics",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "To see and talk to someone for the first time.",
                "examples": [
                    "Nice to meet you.",
                    "We meet every Friday."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "met",
        "v3": "met"
    },
    {
        "word": "learn",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "📚",
        "form": "verb",
        "definitions": [
            {
                "text": "To get knowledge or a skill.",
                "examples": [
                    "I want to learn English.",
                    "Children learn fast."
                ]
            }
        ],
        "classification": "both",
        "aspect": "action",
        "v2": "learned / learnt",
        "v3": "learned / learnt"
    },
    {
        "word": "change",
        "level": "starter",
        "theme": "time",
        "emoji": "🔄",
        "form": "verb",
        "definitions": [
            {
                "text": "To make something different.",
                "examples": [
                    "I want to change my clothes.",
                    "The weather changes quickly."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "changed",
        "v3": "changed"
    },
    {
        "word": "stop",
        "level": "starter",
        "theme": "time",
        "emoji": "🛑",
        "form": "verb",
        "definitions": [
            {
                "text": "To finish doing something or to not move anymore.",
                "examples": [
                    "Stop the car.",
                    "Please stop talking."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stopped",
        "v3": "stopped"
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
                    "Wait for the bus here.",
                    "I am waiting for my friend."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "waited",
        "v3": "waited"
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
        "theme": "language_communication",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "To cause something to go to a place.",
                "examples": [
                    "I send an email every morning.",
                    "Can you send me a photo?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sent",
        "v3": "sent"
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
                "text": "To hold something and move it from one place to another.",
                "examples": [
                    "I carry my bag to school.",
                    "Can you help me carry this box?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "carried",
        "v3": "carried"
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
                "text": "To spend time learning about a subject.",
                "examples": [
                    "I study English at school.",
                    "He is studying for his exams."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "studied",
        "v3": "studied"
    },
    {
        "word": "teach",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "👨‍🏫",
        "form": "verb",
        "definitions": [
            {
                "text": "To give knowledge to others.",
                "examples": [
                    "I teach English.",
                    "She teaches at a university."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "taught",
        "v3": "taught"
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
                "text": "To pay money to use a house or flat that belongs to someone else.",
                "examples": [
                    "We rent a flat in the city."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "rented",
        "v3": "rented"
    },
    {
        "word": "exercise",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏋️",
        "form": "verb",
        "definitions": [
            {
                "text": "To do physical activity to stay healthy.",
                "examples": [
                    "I exercise every morning."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "exercised",
        "v3": "exercised"
    },
    {
        "word": "cost",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a certain price.",
                "examples": [
                    "The flat costs a lot."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "cost",
        "v3": "cost"
    },
    {
        "word": "invite",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "To ask someone to come to a place or event.",
                "examples": [
                    "I invite friends for dinner."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invited",
        "v3": "invited"
    }
];
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
