(function() {
    const lang = "en";
    const data = [
    {
        "id": "en_starter_idioms_001",
        "word": "Piece of cake",
        "form": "idiom",
        "definitions": [
            {
                "text": "Very easy to do",
                "examples": [
                    "This English exercise is a piece of cake!"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "simplicity"
    },
    {
        "id": "en_starter_idioms_002",
        "word": "Break a leg",
        "form": "idiom",
        "definitions": [
            {
                "text": "Good luck before a performance",
                "examples": [
                    "You are going on stage now, so break a leg!"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "luck"
    },
    {
        "id": "en_starter_idioms_003",
        "word": "So far so good",
        "form": "idiom",
        "definitions": [
            {
                "text": "Things are going well up to now",
                "examples": [
                    "How is your new job? So far so good!"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "progress"
    },
    {
        "id": "en_starter_idioms_004",
        "word": "Time flies",
        "form": "idiom",
        "definitions": [
            {
                "text": "Time passes very quickly",
                "examples": [
                    "Time flies when you are having fun with friends."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "time"
    },
    {
        "id": "en_starter_idioms_005",
        "word": "Easy come, easy go",
        "form": "idiom",
        "definitions": [
            {
                "text": "Gained and lost quickly without regret",
                "examples": [
                    "I lost twenty dollars, but easy come, easy go."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "money"
    },
    {
        "id": "en_starter_idioms_006",
        "word": "Better late than never",
        "form": "idiom",
        "definitions": [
            {
                "text": "It is better to arrive or do something late than not at all",
                "examples": [
                    "You finally arrived at the party; better late than never!"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "time"
    },
    {
        "id": "en_starter_idioms_007",
        "word": "Make up your mind",
        "form": "idiom",
        "definitions": [
            {
                "text": "Make a decision",
                "examples": [
                    "Please make up your mind so we can order food."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "decisions"
    },
    {
        "id": "en_starter_idioms_008",
        "word": "Keep in touch",
        "form": "idiom",
        "definitions": [
            {
                "text": "Maintain contact with someone",
                "examples": [
                    "Call me next week and let us keep in touch."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "relationships"
    },
    {
        "id": "en_starter_idioms_009",
        "word": "Step by step",
        "form": "idiom",
        "definitions": [
            {
                "text": "Gradually, one stage at a time",
                "examples": [
                    "You will learn English step by step with practice."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "learning"
    },
    {
        "id": "en_starter_idioms_010",
        "word": "Day in, day out",
        "form": "idiom",
        "definitions": [
            {
                "text": "Continuously every day for a long period",
                "examples": [
                    "He practices playing the piano day in, day out."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "routine"
    },
    {
        "id": "en_starter_idioms_011",
        "word": "All in all",
        "form": "idiom",
        "definitions": [
            {
                "text": "Considering everything overall",
                "examples": [
                    "All in all, it was a wonderful holiday trip."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "general"
    },
    {
        "id": "en_starter_idioms_012",
        "word": "Safe and sound",
        "form": "idiom",
        "definitions": [
            {
                "text": "Completely safe and uninjured",
                "examples": [
                    "The travelers arrived home safe and sound after the storm."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "safety"
    },
    {
        "id": "en_starter_idioms_013",
        "word": "First come, first served",
        "form": "idiom",
        "definitions": [
            {
                "text": "Handled in order of arrival",
                "examples": [
                    "Tickets are sold on a first come, first served basis."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "rules"
    },
    {
        "id": "en_starter_idioms_014",
        "word": "Give it a try",
        "form": "idiom",
        "definitions": [
            {
                "text": "Attempt something new",
                "examples": [
                    "If you have never tried sushi, give it a try!"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "effort"
    },
    {
        "id": "en_starter_idioms_015",
        "word": "Cross your fingers",
        "form": "idiom",
        "definitions": [
            {
                "text": "Hope for good luck",
                "examples": [
                    "Cross your fingers for me during my job interview today."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "luck"
    },
    {
        "id": "en_starter_idioms_016",
        "word": "Never mind",
        "form": "idiom",
        "definitions": [
            {
                "text": "Do not worry about it",
                "examples": [
                    "Never mind, I will fix the problem myself."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "communication"
    },
    {
        "id": "en_starter_idioms_017",
        "word": "No problem",
        "form": "idiom",
        "definitions": [
            {
                "text": "You are welcome or it is easily done",
                "examples": [
                    "Thank you for helping me with my luggage. No problem!"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "politeness"
    },
    {
        "id": "en_starter_idioms_018",
        "word": "Long time no see",
        "form": "idiom",
        "definitions": [
            {
                "text": "It has been a long time since we last met",
                "examples": [
                    "Long time no see, my dear friend!"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "greetings"
    },
    {
        "id": "en_starter_idioms_019",
        "word": "Make yourself at home",
        "form": "idiom",
        "definitions": [
            {
                "text": "Feel comfortable in someone's home",
                "examples": [
                    "Please come in and make yourself at home."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "hospitality"
    },
    {
        "id": "en_starter_idioms_020",
        "word": "Take it easy",
        "form": "idiom",
        "definitions": [
            {
                "text": "Relax and do not worry",
                "examples": [
                    "You worked hard today, so take it easy this evening."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "relaxation"
    },
    {
        "id": "en_starter_idioms_021",
        "word": "As good as new",
        "form": "idiom",
        "definitions": [
            {
                "text": "In excellent condition again",
                "examples": [
                    "After replacing the tire, the bicycle was as good as new."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "condition"
    },
    {
        "id": "en_starter_idioms_022",
        "word": "Take your time",
        "form": "idiom",
        "definitions": [
            {
                "text": "Do not hurry",
                "examples": [
                    "Take your time reading the menu before ordering."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "time"
    },
    {
        "id": "en_starter_idioms_023",
        "word": "Sooner or later",
        "form": "idiom",
        "definitions": [
            {
                "text": "Eventually at some point in the future",
                "examples": [
                    "Sooner or later, you will master the language."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "future"
    },
    {
        "id": "en_starter_idioms_024",
        "word": "Over and over",
        "form": "idiom",
        "definitions": [
            {
                "text": "Repeatedly many times",
                "examples": [
                    "She listened to her favorite song over and over."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "repetition"
    },
    {
        "id": "en_starter_idioms_025",
        "word": "Here and there",
        "form": "idiom",
        "definitions": [
            {
                "text": "In various different places",
                "examples": [
                    "We saw pretty wild flowers here and there along the path."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "location"
    },
    {
        "id": "en_starter_idioms_026",
        "word": "Right now",
        "form": "idiom",
        "definitions": [
            {
                "text": "At this exact moment",
                "examples": [
                    "I am busy cooking dinner right now."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "time"
    },
    {
        "id": "en_starter_idioms_027",
        "word": "Good luck",
        "form": "idiom",
        "definitions": [
            {
                "text": "Wishing someone success",
                "examples": [
                    "Good luck on your exam tomorrow morning!"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "luck"
    },
    {
        "id": "en_starter_idioms_028",
        "word": "Have a good time",
        "form": "idiom",
        "definitions": [
            {
                "text": "Enjoy oneself",
                "examples": [
                    "Have a good time at the beach concert tonight!"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "enjoyment"
    },
    {
        "id": "en_starter_idioms_029",
        "word": "You are welcome",
        "form": "idiom",
        "definitions": [
            {
                "text": "Polite response to thank you",
                "examples": [
                    "Thank you for the tea. You are welcome!"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "politeness"
    },
    {
        "id": "en_starter_idioms_030",
        "word": "By the way",
        "form": "idiom",
        "definitions": [
            {
                "text": "Introducing a new topic in conversation",
                "examples": [
                    "By the way, did you receive my email yesterday?"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "conversation"
    },
    {
        "id": "en_starter_idioms_031",
        "word": "In fact",
        "form": "idiom",
        "definitions": [
            {
                "text": "In truth or reality",
                "examples": [
                    "I love fruit; in fact, apples are my favorite."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "truth"
    },
    {
        "id": "en_starter_idioms_032",
        "word": "At last",
        "form": "idiom",
        "definitions": [
            {
                "text": "Finally after a wait",
                "examples": [
                    "At last, the train arrived at the station."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "time"
    },
    {
        "id": "en_starter_idioms_033",
        "word": "On time",
        "form": "idiom",
        "definitions": [
            {
                "text": "At the scheduled time without delay",
                "examples": [
                    "The bus always arrives on time in the morning."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "punctuality"
    },
    {
        "id": "en_starter_idioms_034",
        "word": "In time",
        "form": "idiom",
        "definitions": [
            {
                "text": "Early enough for a purpose",
                "examples": [
                    "We made it to the cinema just in time for the film."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "time"
    },
    {
        "id": "en_starter_idioms_035",
        "word": "For ever",
        "form": "idiom",
        "definitions": [
            {
                "text": "For all future time",
                "examples": [
                    "They promised to stay best friends for ever."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "time"
    },
    {
        "id": "en_starter_idioms_036",
        "word": "All day long",
        "form": "idiom",
        "definitions": [
            {
                "text": "During the entire day",
                "examples": [
                    "It rained heavily all day long on Sunday."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "duration"
    },
    {
        "id": "en_starter_idioms_037",
        "word": "From time to time",
        "form": "idiom",
        "definitions": [
            {
                "text": "Occasionally now and then",
                "examples": [
                    "From time to time, I go for a walk in the park."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "frequency"
    },
    {
        "id": "en_starter_idioms_038",
        "word": "Again and again",
        "form": "idiom",
        "definitions": [
            {
                "text": "Repeatedly on many occasions",
                "examples": [
                    "He made the same small error again and again."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "repetition"
    },
    {
        "id": "en_starter_idioms_039",
        "word": "Little by little",
        "form": "idiom",
        "definitions": [
            {
                "text": "Gradually in small amounts",
                "examples": [
                    "Little by little, her vocabulary expanded."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "progress"
    },
    {
        "id": "en_starter_idioms_040",
        "word": "Side by side",
        "form": "idiom",
        "definitions": [
            {
                "text": "Next to each other",
                "examples": [
                    "They walked side by side along the sandy beach."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "position"
    },
    {
        "id": "en_starter_idioms_041",
        "word": "Hand in hand",
        "form": "idiom",
        "definitions": [
            {
                "text": "Holding hands or closely linked",
                "examples": [
                    "The young couple walked hand in hand through the garden."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "relationships"
    },
    {
        "id": "en_starter_idioms_042",
        "word": "Face to face",
        "form": "idiom",
        "definitions": [
            {
                "text": "Directly in person",
                "examples": [
                    "We met face to face to discuss our weekend plans."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "meeting"
    },
    {
        "id": "en_starter_idioms_043",
        "word": "Out of order",
        "form": "idiom",
        "definitions": [
            {
                "text": "Not functioning properly",
                "examples": [
                    "The coffee machine is currently out of order."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "status"
    },
    {
        "id": "en_starter_idioms_044",
        "word": "At home",
        "form": "idiom",
        "definitions": [
            {
                "text": "In one's house or comfortable",
                "examples": [
                    "I prefer staying at home on rainy evenings."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "location"
    },
    {
        "id": "en_starter_idioms_045",
        "word": "At work",
        "form": "idiom",
        "definitions": [
            {
                "text": "In one's workplace",
                "examples": [
                    "She is at work until five o'clock today."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "work"
    },
    {
        "id": "en_starter_idioms_046",
        "word": "In a hurry",
        "form": "idiom",
        "definitions": [
            {
                "text": "Rushing quickly",
                "examples": [
                    "He ate breakfast in a hurry to catch the bus."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "speed"
    },
    {
        "id": "en_starter_idioms_047",
        "word": "In love",
        "form": "idiom",
        "definitions": [
            {
                "text": "Feeling deep romantic affection",
                "examples": [
                    "They fell in love while studying at university."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "emotions"
    },
    {
        "id": "en_starter_idioms_048",
        "word": "In trouble",
        "form": "idiom",
        "definitions": [
            {
                "text": "Facing difficulty or punishment",
                "examples": [
                    "If you break the classroom window, you will be in trouble."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "difficulty"
    },
    {
        "id": "en_starter_idioms_049",
        "word": "On foot",
        "form": "idiom",
        "definitions": [
            {
                "text": "Walking rather than riding",
                "examples": [
                    "We decided to travel to the shop on foot."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "travel"
    },
    {
        "id": "en_starter_idioms_050",
        "word": "On holiday",
        "form": "idiom",
        "definitions": [
            {
                "text": "Taking a vacation",
                "examples": [
                    "Our neighbors are on holiday in Spain this week."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "travel"
    },
    {
        "id": "en_starter_idioms_051",
        "word": "On sale",
        "form": "idiom",
        "definitions": [
            {
                "text": "Available to buy or at a reduced price",
                "examples": [
                    "Fresh strawberries are on sale at the market."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "shopping"
    },
    {
        "id": "en_starter_idioms_052",
        "word": "On TV",
        "form": "idiom",
        "definitions": [
            {
                "text": "Broadcast on television",
                "examples": [
                    "Is there a good football match on TV tonight?"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "media"
    },
    {
        "id": "en_starter_idioms_053",
        "word": "On the phone",
        "form": "idiom",
        "definitions": [
            {
                "text": "Speaking using a telephone",
                "examples": [
                    "She has been talking on the phone for thirty minutes."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "communication"
    },
    {
        "id": "en_starter_idioms_054",
        "word": "Out of town",
        "form": "idiom",
        "definitions": [
            {
                "text": "Away from one's home city",
                "examples": [
                    "Mr. Brown is out of town on business until Friday."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "travel"
    },
    {
        "id": "en_starter_idioms_055",
        "word": "Up to date",
        "form": "idiom",
        "definitions": [
            {
                "text": "Modern and incorporating current info",
                "examples": [
                    "This train timetable is fully up to date."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "information"
    },
    {
        "id": "en_starter_idioms_056",
        "word": "As soon as possible",
        "form": "idiom",
        "definitions": [
            {
                "text": "At the earliest possible moment",
                "examples": [
                    "Please send me the report as soon as possible."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "urgency"
    },
    {
        "id": "en_starter_idioms_057",
        "word": "All the best",
        "form": "idiom",
        "definitions": [
            {
                "text": "Wishing happiness and success",
                "examples": [
                    "All the best with your new apartment search!"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "wishes"
    },
    {
        "id": "en_starter_idioms_058",
        "word": "Take a break",
        "form": "idiom",
        "definitions": [
            {
                "text": "Pause activity to rest",
                "examples": [
                    "Let us stop studying and take a break for ten minutes."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "rest"
    },
    {
        "id": "en_starter_idioms_059",
        "word": "Take a seat",
        "form": "idiom",
        "definitions": [
            {
                "text": "Sit down",
                "examples": [
                    "Please enter the office and take a seat."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "politeness"
    },
    {
        "id": "en_starter_idioms_060",
        "word": "Take care",
        "form": "idiom",
        "definitions": [
            {
                "text": "Look after oneself or goodbye",
                "examples": [
                    "Take care while driving on the icy road tonight."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "care"
    },
    {
        "id": "en_starter_idioms_061",
        "word": "Have fun",
        "form": "idiom",
        "definitions": [
            {
                "text": "Enjoy an activity",
                "examples": [
                    "Have fun at the amusement park with your family!"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "enjoyment"
    },
    {
        "id": "en_starter_idioms_062",
        "word": "Have a look",
        "form": "idiom",
        "definitions": [
            {
                "text": "Examine or inspect briefly",
                "examples": [
                    "Can you have a look at my homework draft?"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "examination"
    },
    {
        "id": "en_starter_idioms_063",
        "word": "A big deal",
        "form": "idiom",
        "definitions": [
            {
                "text": "An important or significant event or matter",
                "examples": [
                    "Graduating from university is a big deal."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "importance"
    },
    {
        "id": "en_starter_idioms_064",
        "word": "Make a decision",
        "form": "idiom",
        "definitions": [
            {
                "text": "Choose an option",
                "examples": [
                    "It is time to make a decision about our summer holiday."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "decisions"
    },
    {
        "id": "en_starter_idioms_065",
        "word": "Make a mistake",
        "form": "idiom",
        "definitions": [
            {
                "text": "Do something incorrectly",
                "examples": [
                    "Everyone makes a mistake when learning a new language."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "errors"
    },
    {
        "id": "en_starter_idioms_066",
        "word": "Make friends",
        "form": "idiom",
        "definitions": [
            {
                "text": "Form friendships",
                "examples": [
                    "She easily made friends on her first day at school."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "social"
    },
    {
        "id": "en_starter_idioms_067",
        "word": "Make noise",
        "form": "idiom",
        "definitions": [
            {
                "text": "Create loud sounds",
                "examples": [
                    "Please do not make noise while the baby is sleeping."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "sound"
    },
    {
        "id": "en_starter_idioms_068",
        "word": "Pay attention",
        "form": "idiom",
        "definitions": [
            {
                "text": "Focus concentration on something",
                "examples": [
                    "Pay attention to the teacher during the grammar lesson."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "focus"
    },
    {
        "id": "en_starter_idioms_069",
        "word": "Keep quiet",
        "form": "idiom",
        "definitions": [
            {
                "text": "Remain silent",
                "examples": [
                    "Please keep quiet inside the public library reading room."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "silence"
    },
    {
        "id": "en_starter_idioms_070",
        "word": "Keep clean",
        "form": "idiom",
        "definitions": [
            {
                "text": "Maintain cleanliness",
                "examples": [
                    "Always keep your kitchen counter clean before cooking."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "hygiene"
    },
    {
        "id": "en_starter_idioms_071",
        "word": "Get ready",
        "form": "idiom",
        "definitions": [
            {
                "text": "Prepare oneself for an event",
                "examples": [
                    "Get ready because we are leaving in ten minutes."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "preparation"
    },
    {
        "id": "en_starter_idioms_072",
        "word": "Get lost",
        "form": "idiom",
        "definitions": [
            {
                "text": "Lose one's way",
                "examples": [
                    "Use a digital map so you do not get lost in the city."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "navigation"
    },
    {
        "id": "en_starter_idioms_073",
        "word": "Get married",
        "form": "idiom",
        "definitions": [
            {
                "text": "Enter into matrimony",
                "examples": [
                    "My elder sister plans to get married next summer."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "family"
    },
    {
        "id": "en_starter_idioms_074",
        "word": "Get up",
        "form": "idiom",
        "definitions": [
            {
                "text": "Rise from bed or a sitting position",
                "examples": [
                    "I usually get up at seven o'clock every morning."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "routine"
    },
    {
        "id": "en_starter_idioms_075",
        "word": "Go home",
        "form": "idiom",
        "definitions": [
            {
                "text": "Return to one's residence",
                "examples": [
                    "After the movie ended, we decided to go home."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "routine"
    },
    {
        "id": "en_starter_idioms_076",
        "word": "Go shopping",
        "form": "idiom",
        "definitions": [
            {
                "text": "Visit shops to purchase items",
                "examples": [
                    "They go shopping for groceries every Saturday morning."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "shopping"
    },
    {
        "id": "en_starter_idioms_077",
        "word": "Go to sleep",
        "form": "idiom",
        "definitions": [
            {
                "text": "Begin sleeping",
                "examples": [
                    "Children should go to sleep early on school nights."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "health"
    },
    {
        "id": "en_starter_idioms_078",
        "word": "Come in",
        "form": "idiom",
        "definitions": [
            {
                "text": "Enter a room or building",
                "examples": [
                    "Knock on the door and wait for someone to say come in."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "hospitality"
    },
    {
        "id": "en_starter_idioms_079",
        "word": "Come on",
        "form": "idiom",
        "definitions": [
            {
                "text": "Hurry up or encouragement",
                "examples": [
                    "Come on, we will miss the starting scene of the movie!"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "encouragement"
    },
    {
        "id": "en_starter_idioms_080",
        "word": "Call back",
        "form": "idiom",
        "definitions": [
            {
                "text": "Return a telephone call",
                "examples": [
                    "I am in a meeting now, so I will call back later."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "communication"
    },
    {
        "id": "en_starter_idioms_081",
        "word": "Turn on",
        "form": "idiom",
        "definitions": [
            {
                "text": "Activate an electronic appliance",
                "examples": [
                    "Please turn on the light so we can read clearly."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "action"
    },
    {
        "id": "en_starter_idioms_082",
        "word": "Turn off",
        "form": "idiom",
        "definitions": [
            {
                "text": "Deactivate an electronic appliance",
                "examples": [
                    "Remember to turn off the air conditioner when you leave."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "action"
    },
    {
        "id": "en_starter_idioms_083",
        "word": "Look for",
        "form": "idiom",
        "definitions": [
            {
                "text": "Search for something lost or needed",
                "examples": [
                    "I am looking for my misplaced house keys."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "search"
    },
    {
        "id": "en_starter_idioms_084",
        "word": "Look at",
        "form": "idiom",
        "definitions": [
            {
                "text": "Direct one's gaze toward something",
                "examples": [
                    "Look at the beautiful sunrise over the mountain top!"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "perception"
    },
    {
        "id": "en_starter_idioms_085",
        "word": "Listen to",
        "form": "idiom",
        "definitions": [
            {
                "text": "Give attention to sound",
                "examples": [
                    "She loves listening to soft classical music while working."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "perception"
    },
    {
        "id": "en_starter_idioms_086",
        "word": "Wait for",
        "form": "idiom",
        "definitions": [
            {
                "text": "Remain until someone or something arrives",
                "examples": [
                    "We had to wait for the bus in the cold rain."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "patience"
    },
    {
        "id": "en_starter_idioms_087",
        "word": "Ask for",
        "form": "idiom",
        "definitions": [
            {
                "text": "Request something from someone",
                "examples": [
                    "If you need help, do not hesitate to ask for it."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "request"
    },
    {
        "id": "en_starter_idioms_088",
        "word": "Talk about",
        "form": "idiom",
        "definitions": [
            {
                "text": "Discuss a particular topic",
                "examples": [
                    "They sat in the cafe to talk about their travel plans."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "conversation"
    },
    {
        "id": "en_starter_idioms_089",
        "word": "Think about",
        "form": "idiom",
        "definitions": [
            {
                "text": "Consider something carefully",
                "examples": [
                    "Take time to think about the proposal before agreeing."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "thought"
    },
    {
        "id": "en_starter_idioms_090",
        "word": "Worry about",
        "form": "idiom",
        "definitions": [
            {
                "text": "Feel anxious regarding a problem",
                "examples": [
                    "Do not worry about the weather; it will be fine."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "emotions"
    },
    {
        "id": "en_starter_idioms_091",
        "word": "Care about",
        "form": "idiom",
        "definitions": [
            {
                "text": "Feel concern or affection for",
                "examples": [
                    "Good teachers genuinely care about their students' growth."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "emotions"
    },
    {
        "id": "en_starter_idioms_092",
        "word": "Belong to",
        "form": "idiom",
        "definitions": [
            {
                "text": "Be the property of someone",
                "examples": [
                    "Does this blue umbrella belong to you or your colleague?"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "ownership"
    },
    {
        "id": "en_starter_idioms_093",
        "word": "Depend on",
        "form": "idiom",
        "definitions": [
            {
                "text": "Rely on or be contingent upon",
                "examples": [
                    "Our weekend picnic plans depend on the weather forecast."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "relevance"
    },
    {
        "id": "en_starter_idioms_094",
        "word": "Laugh at",
        "form": "idiom",
        "definitions": [
            {
                "text": "Express amusement at something",
                "examples": [
                    "It is polite to laugh at funny harmless jokes."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "humor"
    },
    {
        "id": "en_starter_idioms_095",
        "word": "Smile at",
        "form": "idiom",
        "definitions": [
            {
                "text": "Direct a cheerful expression toward someone",
                "examples": [
                    "The friendly cashier smiled at every customer in line."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "friendliness"
    },
    {
        "id": "en_starter_idioms_096",
        "word": "Shout at",
        "form": "idiom",
        "definitions": [
            {
                "text": "Speak very loudly in anger",
                "examples": [
                    "Parents should avoid shouting at children when upset."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "anger"
    },
    {
        "id": "en_starter_idioms_097",
        "word": "Point at",
        "form": "idiom",
        "definitions": [
            {
                "text": "Indicate direction with a finger",
                "examples": [
                    "It is rude to point directly at strangers in public."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "etiquette"
    },
    {
        "id": "en_starter_idioms_098",
        "word": "Arrive at",
        "form": "idiom",
        "definitions": [
            {
                "text": "Reach a specific location or event",
                "examples": [
                    "We arrived at the airport two hours before departure."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "travel"
    },
    {
        "id": "en_starter_idioms_099",
        "word": "Arrive in",
        "form": "idiom",
        "definitions": [
            {
                "text": "Reach a town city or country",
                "examples": [
                    "They arrived in London on a sunny Tuesday afternoon."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "travel"
    },
    {
        "id": "en_starter_idioms_100",
        "word": "Believe in",
        "form": "idiom",
        "definitions": [
            {
                "text": "Have trust or faith in something",
                "examples": [
                    "You can achieve your goals if you believe in yourself."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "mindset"
    },
    {
        "id": "en_starter_idioms_101",
        "word": "Fill in",
        "form": "idiom",
        "definitions": [
            {
                "text": "Complete a form with requested details",
                "examples": [
                    "Please fill in your full name and address on this form."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "documentation"
    },
    {
        "id": "en_starter_idioms_102",
        "word": "Find out",
        "form": "idiom",
        "definitions": [
            {
                "text": "Discover information or news",
                "examples": [
                    "Call the office to find out what time the event starts."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "discovery"
    },
    {
        "id": "en_starter_idioms_103",
        "word": "A change of mind",
        "form": "idiom",
        "definitions": [
            {
                "text": "A decision to change one's opinion or plan",
                "examples": [
                    "She had a change of mind and decided to stay."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "decisions"
    },
    {
        "id": "en_starter_idioms_104",
        "word": "Grow up",
        "form": "idiom",
        "definitions": [
            {
                "text": "Develop into an adult",
                "examples": [
                    "He grew up in a small peaceful village near the sea."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "development"
    },
    {
        "id": "en_starter_idioms_105",
        "word": "Pick up",
        "form": "idiom",
        "definitions": [
            {
                "text": "Lift or collect someone or something",
                "examples": [
                    "I will pick up the children from school at three o'clock."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "collection"
    },
    {
        "id": "en_starter_idioms_106",
        "word": "Put on",
        "form": "idiom",
        "definitions": [
            {
                "text": "Dress oneself in clothing",
                "examples": [
                    "Put on a warm coat because it is freezing outside."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "clothing"
    },
    {
        "id": "en_starter_idioms_107",
        "word": "Take off",
        "form": "idiom",
        "definitions": [
            {
                "text": "Remove clothing or depart by air",
                "examples": [
                    "Please take off your shoes before entering the house."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "clothing"
    },
    {
        "id": "en_starter_idioms_108",
        "word": "Throw away",
        "form": "idiom",
        "definitions": [
            {
                "text": "Discard unwanted trash",
                "examples": [
                    "Throw away empty plastic bottles into the recycling bin."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "waste"
    },
    {
        "id": "en_starter_idioms_109",
        "word": "Try on",
        "form": "idiom",
        "definitions": [
            {
                "text": "Test clothing for fit before buying",
                "examples": [
                    "She went into the fitting room to try on the dress."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "shopping"
    },
    {
        "id": "en_starter_idioms_110",
        "word": "Wake up",
        "form": "idiom",
        "definitions": [
            {
                "text": "Stop sleeping and awaken",
                "examples": [
                    "My alarm clock rings at six, but I wake up at six-fifteen."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "routine"
    },
    {
        "id": "en_starter_idioms_111",
        "word": "Write down",
        "form": "idiom",
        "definitions": [
            {
                "text": "Record notes on paper or screen",
                "examples": [
                    "Write down the telephone number so you do not forget it."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "notes"
    },
    {
        "id": "en_starter_idioms_112",
        "word": "At first",
        "form": "idiom",
        "definitions": [
            {
                "text": "Initially at the beginning",
                "examples": [
                    "At first the exercise seemed difficult, but later it was easy."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "time"
    },
    {
        "id": "en_starter_idioms_113",
        "word": "At least",
        "form": "idiom",
        "definitions": [
            {
                "text": "Not less than a minimum quantity",
                "examples": [
                    "You should sleep at least seven hours every night."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "quantity"
    },
    {
        "id": "en_starter_idioms_114",
        "word": "At once",
        "form": "idiom",
        "definitions": [
            {
                "text": "Immediately without delay",
                "examples": [
                    "When the fire alarm sounded, everyone exited at once."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "speed"
    },
    {
        "id": "en_starter_idioms_115",
        "word": "At night",
        "form": "idiom",
        "definitions": [
            {
                "text": "During the hours of darkness",
                "examples": [
                    "The city center is quiet and peaceful at night."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "time"
    },
    {
        "id": "en_starter_idioms_116",
        "word": "By car",
        "form": "idiom",
        "definitions": [
            {
                "text": "Traveling using an automobile",
                "examples": [
                    "They drove to the countryside by car last weekend."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "travel"
    },
    {
        "id": "en_starter_idioms_117",
        "word": "By train",
        "form": "idiom",
        "definitions": [
            {
                "text": "Traveling using a railway train",
                "examples": [
                    "Traveling by train is comfortable and scenic."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "travel"
    },
    {
        "id": "en_starter_idioms_118",
        "word": "By chance",
        "form": "idiom",
        "definitions": [
            {
                "text": "Accidentally or without planning",
                "examples": [
                    "I met my primary school teacher by chance at the store."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "coincidence"
    },
    {
        "id": "en_starter_idioms_119",
        "word": "By mistake",
        "form": "idiom",
        "definitions": [
            {
                "text": "Unintentionally through an error",
                "examples": [
                    "He accidentally took my black umbrella by mistake."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "errors"
    },
    {
        "id": "en_starter_idioms_120",
        "word": "In a good mood",
        "form": "idiom",
        "definitions": [
            {
                "text": "Feeling happy and positive",
                "examples": [
                    "She was in a good mood after passing her exam."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "emotions"
    },
    {
        "id": "en_starter_idioms_121",
        "word": "In a bad mood",
        "form": "idiom",
        "definitions": [
            {
                "text": "Feeling irritable or upset",
                "examples": [
                    "Avoid arguing with him when he is in a bad mood."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "emotions"
    },
    {
        "id": "en_starter_idioms_122",
        "word": "In general",
        "form": "idiom",
        "definitions": [
            {
                "text": "Usually or overall considering most cases",
                "examples": [
                    "In general, people in this town are friendly and helpful."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "generality"
    },
    {
        "id": "en_starter_idioms_123",
        "word": "In future",
        "form": "idiom",
        "definitions": [
            {
                "text": "From now on in upcoming time",
                "examples": [
                    "In future, please remember to lock the front door."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "future"
    },
    {
        "id": "en_starter_idioms_124",
        "word": "In person",
        "form": "idiom",
        "definitions": [
            {
                "text": "Directly with physical presence",
                "examples": [
                    "You must collect the diploma in person from the office."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "presence"
    },
    {
        "id": "en_starter_idioms_125",
        "word": "In public",
        "form": "idiom",
        "definitions": [
            {
                "text": "In a place where many people are present",
                "examples": [
                    "It is improper to speak loudly on the phone in public."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "behavior"
    },
    {
        "id": "en_starter_idioms_126",
        "word": "On purpose",
        "form": "idiom",
        "definitions": [
            {
                "text": "Intentionally with deliberate planning",
                "examples": [
                    "He did not break the cup on purpose; it was an accident."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "intent"
    },
    {
        "id": "en_starter_idioms_127",
        "word": "On the way",
        "form": "idiom",
        "definitions": [
            {
                "text": "Along the route while traveling",
                "examples": [
                    "We stopped at a petrol station on the way home."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "travel"
    },
    {
        "id": "en_starter_idioms_128",
        "word": "Out of stock",
        "form": "idiom",
        "definitions": [
            {
                "text": "Temporarily unavailable for sale",
                "examples": [
                    "The popular book is currently out of stock at the shop."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "availability"
    },
    {
        "id": "en_starter_idioms_129",
        "word": "Under control",
        "form": "idiom",
        "definitions": [
            {
                "text": "Managed properly without chaos",
                "examples": [
                    "The fire department brought the blaze under control."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "management"
    },
    {
        "id": "en_starter_idioms_130",
        "word": "Without doubt",
        "form": "idiom",
        "definitions": [
            {
                "text": "Certainly and unquestionable",
                "examples": [
                    "She is without doubt the best candidate for the job."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "certainty"
    },
    {
        "id": "en_starter_idioms_131",
        "word": "All the time",
        "form": "idiom",
        "definitions": [
            {
                "text": "Continuously or very frequently",
                "examples": [
                    "He plays video games on his computer all the time."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "frequency"
    },
    {
        "id": "en_starter_idioms_132",
        "word": "And so on",
        "form": "idiom",
        "definitions": [
            {
                "text": "Et cetera and similar remaining things",
                "examples": [
                    "The store sells fruit, vegetables, bread, and so on."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "continuation"
    },
    {
        "id": "en_starter_idioms_133",
        "word": "As well",
        "form": "idiom",
        "definitions": [
            {
                "text": "In addition or also",
                "examples": [
                    "She speaks English and French as well."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "addition"
    },
    {
        "id": "en_starter_idioms_134",
        "word": "As well as",
        "form": "idiom",
        "definitions": [
            {
                "text": "In addition to",
                "examples": [
                    "The menu includes fresh salad as well as grilled fish."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "addition"
    },
    {
        "id": "en_starter_idioms_135",
        "word": "At the moment",
        "form": "idiom",
        "definitions": [
            {
                "text": "Right now at present time",
                "examples": [
                    "Dr. Smith is currently busy with a patient at the moment."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "time"
    },
    {
        "id": "en_starter_idioms_136",
        "word": "At the same time",
        "form": "idiom",
        "definitions": [
            {
                "text": "Simultaneously together",
                "examples": [
                    "You cannot read a book and watch television at the same time."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "simultaneity"
    },
    {
        "id": "en_starter_idioms_137",
        "word": "For example",
        "form": "idiom",
        "definitions": [
            {
                "text": "For instance as an illustration",
                "examples": [
                    "Many citrus fruits, for example oranges, contain vitamin C."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "illustration"
    },
    {
        "id": "en_starter_idioms_138",
        "word": "In the end",
        "form": "idiom",
        "definitions": [
            {
                "text": "Finally after deliberation",
                "examples": [
                    "In the end, they decided to move to a bigger house."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "conclusion"
    },
    {
        "id": "en_starter_idioms_139",
        "word": "In my opinion",
        "form": "idiom",
        "definitions": [
            {
                "text": "According to my personal view",
                "examples": [
                    "In my opinion, learning languages opens many career doors."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "viewpoint"
    },
    {
        "id": "en_starter_idioms_140",
        "word": "To sum up",
        "form": "idiom",
        "definitions": [
            {
                "text": "In summary or conclusion",
                "examples": [
                    "To sum up, the presentation covered three main points."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "summary"
    },
    {
        "id": "en_starter_idioms_141",
        "word": "Ups and downs",
        "form": "idiom",
        "definitions": [
            {
                "text": "Alternating good and bad periods",
                "examples": [
                    "Every long relationship experiences its ups and downs."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "life"
    },
    {
        "id": "en_starter_idioms_142",
        "word": "Fair and square",
        "form": "idiom",
        "definitions": [
            {
                "text": "Honest and according to rules",
                "examples": [
                    "Our team won the basketball match fair and square."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "honesty"
    },
    {
        "id": "en_starter_idioms_143",
        "word": "Clean and tidy",
        "form": "idiom",
        "definitions": [
            {
                "text": "Neat and well organized",
                "examples": [
                    "Her bedroom is always kept clean and tidy."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "order"
    },
    {
        "id": "en_starter_idioms_144",
        "word": "More or less",
        "form": "idiom",
        "definitions": [
            {
                "text": "Approximately or nearly",
                "examples": [
                    "The renovation project is more or less completed."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "approximation"
    },
    {
        "id": "en_starter_idioms_145",
        "word": "So-so",
        "form": "idiom",
        "definitions": [
            {
                "text": "Neither very good nor very bad",
                "examples": [
                    "How was the movie? It was just so-so."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "quality"
    },
    {
        "id": "en_starter_idioms_146",
        "word": "Short and sweet",
        "form": "idiom",
        "definitions": [
            {
                "text": "Brief and pleasant without delay",
                "examples": [
                    "The manager gave a short and sweet speech at lunch."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "brevity"
    },
    {
        "id": "en_starter_idioms_147",
        "word": "Pros and cons",
        "form": "idiom",
        "definitions": [
            {
                "text": "Advantages and disadvantages",
                "examples": [
                    "We weighed the pros and cons before making our choice."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "analysis"
    },
    {
        "id": "en_starter_idioms_148",
        "word": "Sooner than expected",
        "form": "idiom",
        "definitions": [
            {
                "text": "Earlier than anticipated",
                "examples": [
                    "The package arrived sooner than expected."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "time"
    },
    {
        "id": "en_starter_idioms_149",
        "word": "First of all",
        "form": "idiom",
        "definitions": [
            {
                "text": "To begin with as the main point",
                "examples": [
                    "First of all, I want to thank everyone for coming."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "introduction"
    },
    {
        "id": "en_starter_idioms_150",
        "word": "Last but not least",
        "form": "idiom",
        "definitions": [
            {
                "text": "Finally, equal in importance",
                "examples": [
                    "Last but not least, thank you to our hardworking team."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "starter",
        "theme": "idioms",
        "sub_theme": "conclusion"
    }
    ];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
