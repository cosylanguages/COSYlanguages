(function() {
    const data = [
        {
            "word": "be",
            "level": "starter",
            "theme": "social_life_A1",
            "emoji": "👤",
            "subtext": "be ready / be tired / be at home / be open",
            "form": "verb",
            "definitions": [
                {
                    "text": "To exist; to have a quality or state.",
                    "examples": [
                        "I am tired.",
                        "She is a nurse.",
                        "We are at work."
                    ]
                }
            ],
            "pastSimple": "was/were",
            "pastParticiple": "been"
        },
        {
            "word": "have",
            "level": "starter",
            "theme": "household_tasks_A1",
            "emoji": "👜",
            "subtext": "have a job / have lunch / have time / have a problem",
            "form": "verb",
            "definitions": [
                {
                    "text": "To possess or experience something.",
                    "examples": [
                        "I have a flat.",
                        "He has a headache.",
                        "She has a job."
                    ]
                }
            ],
            "pastSimple": "had",
            "pastParticiple": "had"
        },
        {
            "word": "feel",
            "level": "starter",
            "theme": "parts_of_the_body_A0",
            "emoji": "🌡️",
            "subtext": "feel tired / feel well / feel better / feel cold",
            "form": "verb",
            "definitions": [
                {
                    "text": "To experience a physical or emotional sensation.",
                    "examples": [
                        "I feel happy.",
                        "She feels tired.",
                        "He feels better."
                    ]
                }
            ],
            "pastSimple": "felt",
            "pastParticiple": "felt"
        },
        {
            "word": "give",
            "level": "starter",
            "theme": "social_life_A1",
            "emoji": "🎁",
            "subtext": "give advice / give a gift / give money / give information",
            "form": "verb",
            "definitions": [
                {
                    "text": "To hand something to someone.",
                    "examples": [
                        "He gives me good advice.",
                        "She gives a lot."
                    ]
                }
            ],
            "pastSimple": "gave",
            "pastParticiple": "given"
        },
        {
            "word": "take",
            "level": "starter",
            "theme": "routine_A1",
            "emoji": "👜",
            "subtext": "take the bus / take medicine / take a break / take a photo",
            "form": "verb",
            "definitions": [
                {
                    "text": "To hold and carry something; to use something.",
                    "examples": [
                        "I take the bus.",
                        "She takes medicine.",
                        "He takes notes."
                    ]
                }
            ],
            "pastSimple": "took",
            "pastParticiple": "taken"
        },
        {
            "word": "get",
            "level": "starter",
            "theme": "routine_A1",
            "emoji": "📥",
            "subtext": "get home / get a job / get tired / get better",
            "form": "verb",
            "definitions": [
                {
                    "text": "To receive or obtain; to become.",
                    "examples": [
                        "I get a good salary.",
                        "She gets tired.",
                        "He gets home at six."
                    ]
                }
            ],
            "pastSimple": "got",
            "pastParticiple": "got/gotten"
        },
        {
            "word": "put",
            "level": "starter",
            "theme": "household_tasks_A1",
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
            "pastSimple": "put",
            "pastParticiple": "put"
        },
        {
            "word": "make",
            "level": "starter",
            "theme": "cooking_methods_A1",
            "emoji": "🛠️",
            "subtext": "make coffee / make a decision / make a mistake / make money",
            "form": "verb",
            "definitions": [
                {
                    "text": "To create or produce something; to cause.",
                    "examples": [
                        "I make coffee every morning.",
                        "She makes decisions quickly."
                    ]
                }
            ],
            "pastSimple": "made",
            "pastParticiple": "made"
        },
        {
            "word": "do",
            "level": "starter",
            "theme": "routine_A1",
            "emoji": "🛠️",
            "subtext": "do work / do exercise / do the shopping / do nothing",
            "form": "verb",
            "definitions": [
                {
                    "text": "To perform a task or activity.",
                    "examples": [
                        "I do my work.",
                        "She does the cooking.",
                        "He does nothing."
                    ]
                }
            ],
            "pastSimple": "did",
            "pastParticiple": "done"
        },
        {
            "word": "use",
            "level": "starter",
            "theme": "routine_A1",
            "emoji": "🛠️",
            "subtext": "use a phone / use public transport / use a computer",
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
            "pastSimple": "used",
            "pastParticiple": "used"
        },
        {
            "word": "open",
            "level": "starter",
            "theme": "household_tasks_A1",
            "emoji": "📖",
            "subtext": "open a door / open an account / open at nine",
            "form": "verb",
            "definitions": [
                {
                    "text": "To make not closed; to begin.",
                    "examples": [
                        "He opens the door.",
                        "She opens a bank account."
                    ]
                }
            ],
            "pastSimple": "opened",
            "pastParticiple": "opened"
        },
        {
            "word": "close",
            "level": "starter",
            "theme": "household_tasks_A1",
            "emoji": "🔒",
            "subtext": "close a door / close at six / close the meeting",
            "form": "verb",
            "definitions": [
                {
                    "text": "To make not open; to finish.",
                    "examples": [
                        "She closes her laptop.",
                        "The bank closes at five."
                    ]
                }
            ],
            "pastSimple": "closed",
            "pastParticiple": "closed"
        },
        {
            "word": "start",
            "level": "starter",
            "theme": "routine_A1",
            "emoji": "▶️",
            "subtext": "start work / start a meeting / start a new job",
            "form": "verb",
            "definitions": [
                {
                    "text": "To begin something.",
                    "examples": [
                        "I start work at eight.",
                        "She starts a new job."
                    ]
                }
            ],
            "pastSimple": "started",
            "pastParticiple": "started"
        },
        {
            "word": "finish",
            "level": "starter",
            "theme": "routine_A1",
            "emoji": "🏁",
            "subtext": "finish work / finish a project / finish early",
            "form": "verb",
            "definitions": [
                {
                    "text": "To complete something or stop.",
                    "examples": [
                        "He finishes work at five.",
                        "She finishes the report."
                    ]
                }
            ],
            "pastSimple": "finished",
            "pastParticiple": "finished"
        },
        {
            "word": "help",
            "level": "starter",
            "theme": "social_life_A1",
            "emoji": "🤝",
            "subtext": "help someone / help with / ask for help / help out",
            "form": "verb",
            "definitions": [
                {
                    "text": "To assist someone.",
                    "examples": [
                        "He helps his colleagues.",
                        "Can you help me?"
                    ]
                }
            ],
            "pastSimple": "helped",
            "pastParticiple": "helped"
        },
        {
            "word": "try",
            "level": "starter",
            "theme": "routine_A1",
            "emoji": "🎯",
            "subtext": "try to do / try hard / try something new / give it a try",
            "form": "verb",
            "definitions": [
                {
                    "text": "To make an effort; to attempt something.",
                    "examples": [
                        "I always try my best at work.",
                        "Try the coffee here."
                    ]
                }
            ],
            "pastSimple": "tried",
            "pastParticiple": "tried"
        },
        {
            "word": "show",
            "level": "starter",
            "theme": "social_life_A1",
            "emoji": "👀",
            "subtext": "show someone / show how / show a document / show interest",
            "form": "verb",
            "definitions": [
                {
                    "text": "To let someone see something; to explain.",
                    "examples": [
                        "She shows me the map.",
                        "He shows his work."
                    ]
                }
            ],
            "pastSimple": "showed",
            "pastParticiple": "shown"
        },
        {
            "word": "find",
            "level": "starter",
            "theme": "routine_A1",
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
            "pastSimple": "found",
            "pastParticiple": "found"
        },
        {
            "word": "keep",
            "level": "starter",
            "theme": "household_tasks_A1",
            "emoji": "🔒",
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
            "pastSimple": "kept",
            "pastParticiple": "kept"
        },
        {
            "word": "lose",
            "level": "starter",
            "theme": "routine_A1",
            "emoji": "📉",
            "subtext": "lose a job / lose money / lose weight / lose time",
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
            "pastSimple": "lost",
            "pastParticiple": "lost"
        },
        {
            "word": "cut",
            "level": "starter",
            "theme": "household_tasks_A1",
            "emoji": "✂️",
            "subtext": "cut costs / cut spending / cut short / cut in half",
            "form": "verb",
            "definitions": [
                {
                    "text": "To divide with something sharp; to reduce.",
                    "examples": [
                        "She cuts her lunch break short.",
                        "He cuts costs."
                    ]
                }
            ],
            "pastSimple": "cut",
            "pastParticiple": "cut"
        },
        {
            "word": "turn",
            "level": "starter",
            "theme": "routine_A1",
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
            "pastSimple": "turned",
            "pastParticiple": "turned"
        },
        {
            "word": "bring",
            "level": "starter",
            "theme": "social_life_A1",
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
            "pastSimple": "brought",
            "pastParticiple": "brought"
        },
        {
            "word": "say",
            "level": "starter",
            "theme": "social_life_A1",
            "emoji": "🗣️",
            "subtext": "say hello / say yes / say no / say something",
            "form": "verb",
            "definitions": [
                {
                    "text": "To express something in words.",
                    "examples": [
                        "She says hello every morning.",
                        "He says it is fine."
                    ]
                }
            ],
            "pastSimple": "said",
            "pastParticiple": "said"
        },
        {
            "word": "tell",
            "level": "starter",
            "theme": "social_life_A1",
            "emoji": "🗣️",
            "subtext": "tell the truth / tell someone / tell a story / tell lies",
            "form": "verb",
            "definitions": [
                {
                    "text": "To give information to someone.",
                    "examples": [
                        "He tells the truth.",
                        "She tells me about her day."
                    ]
                }
            ],
            "pastSimple": "told",
            "pastParticiple": "told"
        },
        {
            "word": "ask",
            "level": "starter",
            "theme": "social_life_A1",
            "emoji": "❓",
            "subtext": "ask a question / ask for help / ask about / ask someone",
            "form": "verb",
            "definitions": [
                {
                    "text": "To put a question; to make a request.",
                    "examples": [
                        "She asks good questions.",
                        "I ask my boss for help."
                    ]
                }
            ],
            "pastSimple": "asked",
            "pastParticiple": "asked"
        },
        {
            "word": "speak",
            "level": "starter",
            "theme": "social_life_A1",
            "emoji": "🗣️",
            "subtext": "speak to someone / speak a language / speak clearly",
            "form": "verb",
            "definitions": [
                {
                    "text": "To communicate verbally; to know a language.",
                    "examples": [
                        "He speaks three languages.",
                        "She speaks to her manager."
                    ]
                }
            ],
            "pastSimple": "spoke",
            "pastParticiple": "spoken"
        },
        {
            "word": "talk",
            "level": "starter",
            "theme": "social_life_A1",
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
            "pastSimple": "talked",
            "pastParticiple": "talked"
        },
        {
            "word": "call",
            "level": "starter",
            "theme": "social_life_A1",
            "emoji": "📞",
            "subtext": "call someone / call back / call a meeting / call in sick",
            "form": "verb",
            "definitions": [
                {
                    "text": "To telephone someone.",
                    "examples": [
                        "I call my clients every morning.",
                        "She calls a meeting."
                    ]
                }
            ],
            "pastSimple": "called",
            "pastParticiple": "called"
        },
        {
            "word": "write",
            "level": "starter",
            "theme": "learning_studying_A1",
            "emoji": "✍️",
            "subtext": "write an email / write a report / write a letter / write notes",
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
            "pastSimple": "wrote",
            "pastParticiple": "written"
        },
        {
            "word": "read",
            "level": "starter",
            "theme": "learning_studying_A1",
            "emoji": "📖",
            "subtext": "read a book / read the news / read a contract / read carefully",
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
            "pastSimple": "read",
            "pastParticiple": "read"
        },
        {
            "word": "listen",
            "level": "starter",
            "theme": "leisure_activities_A1",
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
            "pastSimple": "listened",
            "pastParticiple": "listened"
        },
        {
            "word": "answer",
            "level": "starter",
            "theme": "social_life_A1",
            "emoji": "💡",
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
            "pastSimple": "answered",
            "pastParticiple": "answered"
        },
        {
            "word": "repeat",
            "level": "starter",
            "theme": "learning_studying_A1",
            "emoji": "🔄",
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
            "pastSimple": "repeated",
            "pastParticiple": "repeated"
        },
        {
            "word": "go",
            "level": "starter",
            "theme": "routine_A1",
            "emoji": "🚶",
            "subtext": "go to work / go home / go out / go shopping / go abroad",
            "form": "verb",
            "definitions": [
                {
                    "text": "To move from one place to another.",
                    "examples": [
                        "I go to work by train.",
                        "She goes abroad every year."
                    ]
                }
            ],
            "pastSimple": "went",
            "pastParticiple": "gone"
        },
        {
            "word": "come",
            "level": "starter",
            "theme": "routine_A1",
            "emoji": "🏃‍♂️",
            "subtext": "come home / come back / come to work / come here",
            "form": "verb",
            "definitions": [
                {
                    "text": "To move towards a place.",
                    "examples": [
                        "He comes to the office at nine.",
                        "She comes home late."
                    ]
                }
            ],
            "pastSimple": "came",
            "pastParticiple": "come"
        },
        {
            "word": "walk",
            "level": "starter",
            "theme": "routine_A1",
            "emoji": "🚶",
            "subtext": "walk to work / walk home / walk fast / walk every day",
            "form": "verb",
            "definitions": [
                {
                    "text": "To move on foot at a normal speed.",
                    "examples": [
                        "He walks to work every day.",
                        "She walks during lunch."
                    ]
                }
            ],
            "pastSimple": "walked",
            "pastParticiple": "walked"
        },
        {
            "word": "drive",
            "level": "starter",
            "theme": "routine_A1",
            "emoji": "🚗",
            "subtext": "drive to work / drive a car / drive home / drive carefully",
            "form": "verb",
            "definitions": [
                {
                    "text": "To operate and control a vehicle.",
                    "examples": [
                        "She drives a company car.",
                        "He drives to meetings."
                    ]
                }
            ],
            "pastSimple": "drove",
            "pastParticiple": "driven"
        },
        {
            "word": "fly",
            "level": "starter",
            "theme": "travel_vocabulary_basics_A0",
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
            "pastSimple": "flew",
            "pastParticiple": "flown"
        },
        {
            "word": "arrive",
            "level": "starter",
            "theme": "travel_vocabulary_basics_A0",
            "emoji": "🏁",
            "subtext": "arrive at work / arrive late / arrive on time / arrive home",
            "form": "verb",
            "definitions": [
                {
                    "text": "To reach a destination.",
                    "examples": [
                        "He arrives at the office at nine.",
                        "The train arrives late."
                    ]
                }
            ],
            "pastSimple": "arrived",
            "pastParticiple": "arrived"
        },
        {
            "word": "leave",
            "level": "starter",
            "theme": "travel_vocabulary_basics_A0",
            "emoji": "🚪",
            "subtext": "leave home / leave work / leave early / leave late",
            "form": "verb",
            "definitions": [
                {
                    "text": "To go away from a place.",
                    "examples": [
                        "I leave home at eight.",
                        "She left the company last year."
                    ]
                }
            ],
            "pastSimple": "left",
            "pastParticiple": "left"
        },
        {
            "word": "move",
            "level": "starter",
            "theme": "moving_home_A2",
            "emoji": "📦",
            "subtext": "move house / move to a city / move on / move forward",
            "form": "verb",
            "definitions": [
                {
                    "text": "To change position or place of living.",
                    "examples": [
                        "They moved to a new flat.",
                        "She moves to a different team."
                    ]
                }
            ],
            "pastSimple": "moved",
            "pastParticiple": "moved"
        },
        {
            "word": "return",
            "level": "starter",
            "theme": "travel_vocabulary_basics_A0",
            "emoji": "↩️",
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
            "pastSimple": "returned",
            "pastParticiple": "returned"
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
                    "text": "To go from one place to another, often far.",
                    "examples": [
                        "She travels for work once a month.",
                        "He loves to travel."
                    ]
                }
            ],
            "pastSimple": "travelled",
            "pastParticiple": "travelled"
        },
        {
            "word": "eat",
            "level": "starter",
            "theme": "meals_of_the_day_A0",
            "emoji": "🍎",
            "subtext": "eat breakfast / eat lunch / eat dinner / eat out",
            "form": "verb",
            "definitions": [
                {
                    "text": "To put food in the mouth and consume it.",
                    "examples": [
                        "We eat lunch at one o'clock.",
                        "She eats at her desk."
                    ]
                }
            ],
            "pastSimple": "ate",
            "pastParticiple": "eaten"
        },
        {
            "word": "drink",
            "level": "starter",
            "theme": "drinks_A0",
            "emoji": "🥛",
            "subtext": "drink coffee / drink tea / drink water / drink alcohol",
            "form": "verb",
            "definitions": [
                {
                    "text": "To swallow liquid.",
                    "examples": [
                        "She drinks coffee every morning.",
                        "I drink water at work."
                    ]
                }
            ],
            "pastSimple": "drank",
            "pastParticiple": "drunk"
        },
        {
            "word": "sleep",
            "level": "starter",
            "theme": "times_day_A0",
            "emoji": "😴",
            "subtext": "sleep well / sleep badly / sleep eight hours",
            "form": "verb",
            "definitions": [
                {
                    "text": "To rest in an unconscious state.",
                    "examples": [
                        "He sleeps seven hours a night.",
                        "She sleeps badly."
                    ]
                }
            ],
            "pastSimple": "slept",
            "pastParticiple": "slept"
        },
        {
            "word": "cook",
            "level": "starter",
            "theme": "cooking_methods_A1",
            "emoji": "🍳",
            "subtext": "cook dinner / cook a meal / cook at home",
            "form": "verb",
            "definitions": [
                {
                    "text": "To prepare food using heat.",
                    "examples": [
                        "She cooks dinner every evening.",
                        "He cooks for the team."
                    ]
                }
            ],
            "pastSimple": "cooked",
            "pastParticiple": "cooked"
        },
        {
            "word": "clean",
            "level": "starter",
            "theme": "household_tasks_A1",
            "emoji": "🧹",
            "subtext": "clean the flat / clean up / clean the kitchen",
            "form": "verb",
            "definitions": [
                {
                    "text": "To remove dirt from something.",
                    "examples": [
                        "I clean the flat on Saturdays.",
                        "He cleans his desk daily."
                    ]
                }
            ],
            "pastSimple": "cleaned",
            "pastParticiple": "cleaned"
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
            "pastSimple": "wore",
            "pastParticiple": "worn"
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
            "pastSimple": "washed",
            "pastParticiple": "washed"
        },
        {
            "word": "buy",
            "level": "starter",
            "theme": "everyday_shopping_A0",
            "emoji": "🛒",
            "subtext": "buy food / buy a ticket / buy online / buy a house",
            "form": "verb",
            "definitions": [
                {
                    "text": "To get something by paying money.",
                    "examples": [
                        "She buys groceries online.",
                        "He wants to buy a flat."
                    ]
                }
            ],
            "pastSimple": "bought",
            "pastParticiple": "bought"
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
                    "text": "To give money in exchange for something.",
                    "examples": [
                        "I pay the rent monthly.",
                        "She pays by card."
                    ]
                }
            ],
            "pastSimple": "paid",
            "pastParticiple": "paid"
        },
        {
            "word": "spend",
            "level": "starter",
            "theme": "money_payment_A1",
            "emoji": "💸",
            "subtext": "spend money / spend time / spend on rent",
            "form": "verb",
            "definitions": [
                {
                    "text": "To use money or time.",
                    "examples": [
                        "He spends too much on takeaway.",
                        "She spends time commuting."
                    ]
                }
            ],
            "pastSimple": "spent",
            "pastParticiple": "spent"
        },
        {
            "word": "save",
            "level": "starter",
            "theme": "money_payment_A1",
            "emoji": "💰",
            "subtext": "save money / save for a house / save time",
            "form": "verb",
            "definitions": [
                {
                    "text": "To keep money rather than spending it.",
                    "examples": [
                        "She saves a hundred euros a month.",
                        "Save your work."
                    ]
                }
            ],
            "pastSimple": "saved",
            "pastParticiple": "saved"
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
                        "He works from home three days a week.",
                        "She works hard."
                    ]
                }
            ],
            "pastSimple": "worked",
            "pastParticiple": "worked"
        },
        {
            "word": "live",
            "level": "starter",
            "theme": "address_location_A1",
            "emoji": "🏠",
            "subtext": "live in a flat / live alone / live with someone / live abroad",
            "form": "verb",
            "definitions": [
                {
                    "text": "To have your home in a place; to be alive.",
                    "examples": [
                        "She lives in a flat near the centre.",
                        "We live together."
                    ]
                }
            ],
            "pastSimple": "lived",
            "pastParticiple": "lived"
        },
        {
            "word": "think",
            "level": "starter",
            "theme": "giving_opinions_A1",
            "emoji": "💭",
            "subtext": "think about / think of / think carefully / think it is",
            "form": "verb",
            "definitions": [
                {
                    "text": "To use the mind; to have an opinion.",
                    "examples": [
                        "I think it is a good idea.",
                        "She thinks about quitting."
                    ]
                }
            ],
            "pastSimple": "thought",
            "pastParticiple": "thought"
        },
        {
            "word": "know",
            "level": "starter",
            "theme": "learning_studying_A1",
            "emoji": "🧠",
            "subtext": "know someone / know the answer / know how to / know about",
            "form": "verb",
            "definitions": [
                {
                    "text": "To have information or be familiar with.",
                    "examples": [
                        "I know his name.",
                        "She knows how to negotiate."
                    ]
                }
            ],
            "pastSimple": "knew",
            "pastParticiple": "known"
        },
        {
            "word": "want",
            "level": "starter",
            "theme": "giving_opinions_A1",
            "emoji": "🙏",
            "subtext": "want a job / want to do / want more / want help",
            "form": "verb",
            "definitions": [
                {
                    "text": "To desire or wish for something.",
                    "examples": [
                        "I want a coffee.",
                        "She wants a promotion.",
                        "He wants to retire."
                    ]
                }
            ],
            "pastSimple": "wanted",
            "pastParticiple": "wanted"
        },
        {
            "word": "need",
            "level": "starter",
            "theme": "giving_opinions_A1",
            "emoji": "❗",
            "subtext": "need help / need time / need money / need to rest",
            "form": "verb",
            "definitions": [
                {
                    "text": "To require something.",
                    "examples": [
                        "I need a break.",
                        "She needs more time.",
                        "He needs help."
                    ]
                }
            ],
            "pastSimple": "needed",
            "pastParticiple": "needed"
        },
        {
            "word": "like",
            "level": "starter",
            "theme": "giving_opinions_A1",
            "emoji": "👍",
            "subtext": "like work / like to travel / like someone / like the idea",
            "form": "verb",
            "definitions": [
                {
                    "text": "To find something pleasant.",
                    "examples": [
                        "I like my job.",
                        "She likes cooking at home.",
                        "He likes coffee."
                    ]
                }
            ],
            "pastSimple": "liked",
            "pastParticiple": "liked"
        },
        {
            "word": "love",
            "level": "starter",
            "theme": "giving_opinions_A1",
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
            "pastSimple": "loved",
            "pastParticiple": "loved"
        },
        {
            "word": "hate",
            "level": "starter",
            "theme": "giving_opinions_A1",
            "emoji": "😠",
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
            "pastSimple": "hated",
            "pastParticiple": "hated"
        },
        {
            "word": "hope",
            "level": "starter",
            "theme": "giving_opinions_A1",
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
            "pastSimple": "hoped",
            "pastParticiple": "hoped"
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
            "pastSimple": "remembered",
            "pastParticiple": "remembered"
        },
        {
            "word": "forget",
            "level": "starter",
            "theme": "learning_studying_A1",
            "emoji": "❌",
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
            "pastSimple": "forgot",
            "pastParticiple": "forgotten"
        },
        {
            "word": "understand",
            "level": "starter",
            "theme": "learning_studying_A1",
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
            "pastSimple": "understood",
            "pastParticiple": "understood"
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
            "pastSimple": "decided",
            "pastParticiple": "decided"
        },
        {
            "word": "enjoy",
            "level": "starter",
            "theme": "giving_opinions_A1",
            "emoji": "😊",
            "subtext": "enjoy doing / enjoy a meal / enjoy your work / enjoy life",
            "form": "verb",
            "definitions": [
                {
                    "text": "To take pleasure from something.",
                    "examples": [
                        "He enjoys working from home.",
                        "She enjoys her new role."
                    ]
                }
            ],
            "pastSimple": "enjoyed",
            "pastParticiple": "enjoyed"
        }
    ];
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
