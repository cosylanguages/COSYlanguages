(function() {
    const lang = "en";
    const data = [
    {
        "id": "en_elementary_idioms_001",
        "word": "Under the weather",
        "form": "idiom",
        "definitions": [
            {
                "text": "Feeling slightly unwell or sick",
                "examples": [
                    "I am feeling a bit under the weather today, so I will rest."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "health"
    },
    {
        "id": "en_elementary_idioms_002",
        "word": "Once in a blue moon",
        "form": "idiom",
        "definitions": [
            {
                "text": "Very rarely",
                "examples": [
                    "He visits his hometown only once in a blue moon."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "frequency"
    },
    {
        "id": "en_elementary_idioms_003",
        "word": "Spill the beans",
        "form": "idiom",
        "definitions": [
            {
                "text": "Reveal a secret accidentally or prematurely",
                "examples": [
                    "Who spilled the beans about the surprise party?"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "secrets"
    },
    {
        "id": "en_elementary_idioms_004",
        "word": "Lend a hand",
        "form": "idiom",
        "definitions": [
            {
                "text": "Help someone with a task",
                "examples": [
                    "Could you lend a hand with carrying these heavy boxes?"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "help"
    },
    {
        "id": "en_elementary_idioms_005",
        "word": "In the same boat",
        "form": "idiom",
        "definitions": [
            {
                "text": "Facing the same difficult situation",
                "examples": [
                    "We both lost our bus tickets, so we are in the same boat."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "situations"
    },
    {
        "id": "en_elementary_idioms_006",
        "word": "See eye to eye",
        "form": "idiom",
        "definitions": [
            {
                "text": "Agree completely with someone",
                "examples": [
                    "My brother and I do not always see eye to eye on politics."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "agreement"
    },
    {
        "id": "en_elementary_idioms_007",
        "word": "Cost an arm and a leg",
        "form": "idiom",
        "definitions": [
            {
                "text": "Be extremely expensive",
                "examples": [
                    "That new sports car costs an arm and a leg."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "money"
    },
    {
        "id": "en_elementary_idioms_008",
        "word": "Rule of thumb",
        "form": "idiom",
        "definitions": [
            {
                "text": "A useful practical general principle",
                "examples": [
                    "As a rule of thumb, drink plenty of water while hiking."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "advice"
    },
    {
        "id": "en_elementary_idioms_009",
        "word": "Sleep on it",
        "form": "idiom",
        "definitions": [
            {
                "text": "Delay making a decision until the next day",
                "examples": [
                    "Do not decide right now; sleep on it tonight."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "decisions"
    },
    {
        "id": "en_elementary_idioms_010",
        "word": "Break the ice",
        "form": "idiom",
        "definitions": [
            {
                "text": "Make people feel more relaxed in a social setting",
                "examples": [
                    "Playing a quick game helped break the ice among students."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "social"
    },
    {
        "id": "en_elementary_idioms_011",
        "word": "Out of the blue",
        "form": "idiom",
        "definitions": [
            {
                "text": "Completely unexpected and sudden",
                "examples": [
                    "She received an unexpected job offer out of the blue."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "surprise"
    },
    {
        "id": "en_elementary_idioms_012",
        "word": "A drop in the ocean",
        "form": "idiom",
        "definitions": [
            {
                "text": "A tiny insignificant part of a much larger whole",
                "examples": [
                    "Ten dollars is just a drop in the ocean for that charity."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "quantity"
    },
    {
        "id": "en_elementary_idioms_013",
        "word": "Back to square one",
        "form": "idiom",
        "definitions": [
            {
                "text": "Returning to the starting point after a failure",
                "examples": [
                    "The plan failed, so we are back to square one."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "progress"
    },
    {
        "id": "en_elementary_idioms_014",
        "word": "On the fence",
        "form": "idiom",
        "definitions": [
            {
                "text": "Undecided or neutral between two choices",
                "examples": [
                    "I am still on the fence about which course to take."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "decisions"
    },
    {
        "id": "en_elementary_idioms_015",
        "word": "Miss the boat",
        "form": "idiom",
        "definitions": [
            {
                "text": "Miss an opportunity by acting too slowly",
                "examples": [
                    "If you do not register today, you will miss the boat."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "opportunity"
    },
    {
        "id": "en_elementary_idioms_016",
        "word": "Keep an eye on",
        "form": "idiom",
        "definitions": [
            {
                "text": "Watch or monitor carefully",
                "examples": [
                    "Please keep an eye on my bag while I buy a drink."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "care"
    },
    {
        "id": "en_elementary_idioms_017",
        "word": "Pain in the neck",
        "form": "idiom",
        "definitions": [
            {
                "text": "An annoying person, thing, or situation",
                "examples": [
                    "Filling out long tax forms is a real pain in the neck."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "annoyance"
    },
    {
        "id": "en_elementary_idioms_018",
        "word": "Beat the clock",
        "form": "idiom",
        "definitions": [
            {
                "text": "Finish a task before a time limit expires",
                "examples": [
                    "They worked fast and managed to beat the clock before noon."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "time"
    },
    {
        "id": "en_elementary_idioms_019",
        "word": "Call it a day",
        "form": "idiom",
        "definitions": [
            {
                "text": "Stop working on something for the rest of the day",
                "examples": [
                    "We have achieved a lot, so let us call it a day."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "work"
    },
    {
        "id": "en_elementary_idioms_020",
        "word": "Face the music",
        "form": "idiom",
        "definitions": [
            {
                "text": "Accept the unpleasant consequences of one's actions",
                "examples": [
                    "He broke the office window and now must face the music."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "consequences"
    },
    {
        "id": "en_elementary_idioms_021",
        "word": "Fish out of water",
        "form": "idiom",
        "definitions": [
            {
                "text": "Feeling uncomfortable in an unfamiliar environment",
                "examples": [
                    "At the formal gala dinner, he felt like a fish out of water."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "comfort"
    },
    {
        "id": "en_elementary_idioms_022",
        "word": "Hot potato",
        "form": "idiom",
        "definitions": [
            {
                "text": "A controversial topic that is awkward to deal with",
                "examples": [
                    "The tax reform topic became a political hot potato."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "politics"
    },
    {
        "id": "en_elementary_idioms_023",
        "word": "In hot water",
        "form": "idiom",
        "definitions": [
            {
                "text": "In serious trouble or facing criticism",
                "examples": [
                    "He found himself in hot water after arriving late again."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "trouble"
    },
    {
        "id": "en_elementary_idioms_024",
        "word": "Keep your chin up",
        "form": "idiom",
        "definitions": [
            {
                "text": "Stay confident and cheerful during tough times",
                "examples": [
                    "Keep your chin up; things will improve soon."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "encouragement"
    },
    {
        "id": "en_elementary_idioms_025",
        "word": "Like father, like son",
        "form": "idiom",
        "definitions": [
            {
                "text": "Resembling one's parent in character or behavior",
                "examples": [
                    "He became an engineer just like his dad; like father, like son."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "family"
    },
    {
        "id": "en_elementary_idioms_026",
        "word": "Make ends meet",
        "form": "idiom",
        "definitions": [
            {
                "text": "Earn enough money to cover basic living expenses",
                "examples": [
                    "Working two part-time jobs helps her make ends meet."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "money"
    },
    {
        "id": "en_elementary_idioms_027",
        "word": "No pain, no gain",
        "form": "idiom",
        "definitions": [
            {
                "text": "Success requires hard work and effort",
                "examples": [
                    "Training for a marathon is tough, but no pain, no gain."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "effort"
    },
    {
        "id": "en_elementary_idioms_028",
        "word": "Off the record",
        "form": "idiom",
        "definitions": [
            {
                "text": "Unofficial or not intended for public reporting",
                "examples": [
                    "The politician spoke off the record during the interview."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "communication"
    },
    {
        "id": "en_elementary_idioms_029",
        "word": "On cloud nine",
        "form": "idiom",
        "definitions": [
            {
                "text": "Extremely happy and joyful",
                "examples": [
                    "She was on cloud nine after receiving her promotion."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "happiness"
    },
    {
        "id": "en_elementary_idioms_030",
        "word": "Peace of mind",
        "form": "idiom",
        "definitions": [
            {
                "text": "Feeling calm and free from worry",
                "examples": [
                    "Having savings gives her peace of mind."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "calmness"
    },
    {
        "id": "en_elementary_idioms_031",
        "word": "Pull yourself together",
        "form": "idiom",
        "definitions": [
            {
                "text": "Calm down and regain control of emotions",
                "examples": [
                    "Take a deep breath and pull yourself together before speaking."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "emotions"
    },
    {
        "id": "en_elementary_idioms_032",
        "word": "Raining cats and dogs",
        "form": "idiom",
        "definitions": [
            {
                "text": "Raining very heavily",
                "examples": [
                    "We stayed indoors because it was raining cats and dogs."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "weather"
    },
    {
        "id": "en_elementary_idioms_033",
        "word": "Save for a rainy day",
        "form": "idiom",
        "definitions": [
            {
                "text": "Reserve money or resources for future emergency needs",
                "examples": [
                    "It is wise to save part of your salary for a rainy day."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "finance"
    },
    {
        "id": "en_elementary_idioms_034",
        "word": "Speak of the devil",
        "form": "idiom",
        "definitions": [
            {
                "text": "Said when a person appears right after being mentioned",
                "examples": [
                    "Speak of the devil! Here comes Mark now."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "coincidence"
    },
    {
        "id": "en_elementary_idioms_035",
        "word": "Take with a grain of salt",
        "form": "idiom",
        "definitions": [
            {
                "text": "Maintain skepticism regarding a statement",
                "examples": [
                    "Take his dramatic stories with a grain of salt."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "skepticism"
    },
    {
        "id": "en_elementary_idioms_036",
        "word": "The best of both worlds",
        "form": "idiom",
        "definitions": [
            {
                "text": "Enjoying two different advantages at once",
                "examples": [
                    "Living near the city and the countryside offers the best of both worlds."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "advantage"
    },
    {
        "id": "en_elementary_idioms_037",
        "word": "Under lock and key",
        "form": "idiom",
        "definitions": [
            {
                "text": "Securely locked away for safety",
                "examples": [
                    "Important documents are kept under lock and key."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "security"
    },
    {
        "id": "en_elementary_idioms_038",
        "word": "Walking on air",
        "form": "idiom",
        "definitions": [
            {
                "text": "Feeling delighted and overjoyed",
                "examples": [
                    "Ever since passing his exams, he has been walking on air."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "happiness"
    },
    {
        "id": "en_elementary_idioms_039",
        "word": "You can say that again",
        "form": "idiom",
        "definitions": [
            {
                "text": "Expressing strong agreement with a statement",
                "examples": [
                    "This pizza is delicious! You can say that again!"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "agreement"
    },
    {
        "id": "en_elementary_idioms_040",
        "word": "Zip your lip",
        "form": "idiom",
        "definitions": [
            {
                "text": "Keep quiet or keep a secret",
                "examples": [
                    "Zip your lip and do not tell anyone about the plan."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "silence"
    },
    {
        "id": "en_elementary_idioms_041",
        "word": "All ears",
        "form": "idiom",
        "definitions": [
            {
                "text": "Listening attentively and eagerly",
                "examples": [
                    "Tell me about your vacation; I am all ears!"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "attention"
    },
    {
        "id": "en_elementary_idioms_042",
        "word": "At the tip of my tongue",
        "form": "idiom",
        "definitions": [
            {
                "text": "Almost remembered but not quite recalled",
                "examples": [
                    "Her phone number was on the tip of my tongue."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "memory"
    },
    {
        "id": "en_elementary_idioms_043",
        "word": "Bark up the wrong tree",
        "form": "idiom",
        "definitions": [
            {
                "text": "Pursue a mistaken course of action or blame wrong person",
                "examples": [
                    "If you think I took your keys, you are barking up the wrong tree."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "mistakes"
    },
    {
        "id": "en_elementary_idioms_044",
        "word": "Bite your tongue",
        "form": "idiom",
        "definitions": [
            {
                "text": "Refrain from speaking to avoid trouble",
                "examples": [
                    "I had to bite my tongue during the meeting to stay polite."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "restraint"
    },
    {
        "id": "en_elementary_idioms_045",
        "word": "Blow off steam",
        "form": "idiom",
        "definitions": [
            {
                "text": "Release built-up tension or anger",
                "examples": [
                    "He went for a long run to blow off steam."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "stress"
    },
    {
        "id": "en_elementary_idioms_046",
        "word": "Call the shots",
        "form": "idiom",
        "definitions": [
            {
                "text": "Make the main decisions or be in control",
                "examples": [
                    "The senior director calls the shots in this division."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "authority"
    },
    {
        "id": "en_elementary_idioms_047",
        "word": "Change one's mind",
        "form": "idiom",
        "definitions": [
            {
                "text": "Alter one's opinion or decision",
                "examples": [
                    "She changed her mind and ordered tea instead of coffee."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "decisions"
    },
    {
        "id": "en_elementary_idioms_048",
        "word": "Cool as a cucumber",
        "form": "idiom",
        "definitions": [
            {
                "text": "Remarkably calm and relaxed under pressure",
                "examples": [
                    "Despite the tight deadline, she remained as cool as a cucumber."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "calmness"
    },
    {
        "id": "en_elementary_idioms_049",
        "word": "Down in the dumps",
        "form": "idiom",
        "definitions": [
            {
                "text": "Feeling sad or depressed",
                "examples": [
                    "He has been down in the dumps since losing his match."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "emotions"
    },
    {
        "id": "en_elementary_idioms_050",
        "word": "Drive someone crazy",
        "form": "idiom",
        "definitions": [
            {
                "text": "Annoy or irritate someone greatly",
                "examples": [
                    "Loud construction noise outside is driving me crazy."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "annoyance"
    },
    {
        "id": "en_elementary_idioms_051",
        "word": "Easier said than done",
        "form": "idiom",
        "definitions": [
            {
                "text": "More difficult to accomplish than to talk about",
                "examples": [
                    "Eating healthier every day is easier said than done."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "difficulty"
    },
    {
        "id": "en_elementary_idioms_052",
        "word": "Get cold feet",
        "form": "idiom",
        "definitions": [
            {
                "text": "Become nervous about a planned commitment",
                "examples": [
                    "He got cold feet right before giving his public speech."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "fear"
    },
    {
        "id": "en_elementary_idioms_053",
        "word": "Give a hand",
        "form": "idiom",
        "definitions": [
            {
                "text": "Assist someone",
                "examples": [
                    "Can you give me a hand moving this heavy table?"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "help"
    },
    {
        "id": "en_elementary_idioms_054",
        "word": "Go with the flow",
        "form": "idiom",
        "definitions": [
            {
                "text": "Accept situations as they happen naturally",
                "examples": [
                    "Instead of stressing, I decided to go with the flow."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "flexibility"
    },
    {
        "id": "en_elementary_idioms_055",
        "word": "Hit the roof",
        "form": "idiom",
        "definitions": [
            {
                "text": "Become extremely angry suddenly",
                "examples": [
                    "My father hit the roof when he saw the broken window."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "anger"
    },
    {
        "id": "en_elementary_idioms_056",
        "word": "In the dark",
        "form": "idiom",
        "definitions": [
            {
                "text": "Uninformed or unaware about something",
                "examples": [
                    "Employees were kept in the dark about the company merger."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "ignorance"
    },
    {
        "id": "en_elementary_idioms_057",
        "word": "Keep your fingers crossed",
        "form": "idiom",
        "definitions": [
            {
                "text": "Hope for a favorable outcome",
                "examples": [
                    "Let us keep our fingers crossed for sunny weather tomorrow."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "hope"
    },
    {
        "id": "en_elementary_idioms_058",
        "word": "Kill time",
        "form": "idiom",
        "definitions": [
            {
                "text": "Pass time while waiting for something",
                "examples": [
                    "We played card games to kill time at the airport."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "time"
    },
    {
        "id": "en_elementary_idioms_059",
        "word": "Let sleeping dogs lie",
        "form": "idiom",
        "definitions": [
            {
                "text": "Avoid interfering in a situation that could cause trouble",
                "examples": [
                    "Do not bring up old arguments; let sleeping dogs lie."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "peace"
    },
    {
        "id": "en_elementary_idioms_060",
        "word": "Look up to",
        "form": "idiom",
        "definitions": [
            {
                "text": "Admire and respect someone",
                "examples": [
                    "Young athletes look up to world champion competitors."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "admiration"
    },
    {
        "id": "en_elementary_idioms_061",
        "word": "Lose one's temper",
        "form": "idiom",
        "definitions": [
            {
                "text": "Become suddenly very angry",
                "examples": [
                    "Try not to lose your temper when solving disputes."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "emotions"
    },
    {
        "id": "en_elementary_idioms_062",
        "word": "Make a living",
        "form": "idiom",
        "definitions": [
            {
                "text": "Earn money to support oneself",
                "examples": [
                    "He makes a living as a freelance graphic designer."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "work"
    },
    {
        "id": "en_elementary_idioms_063",
        "word": "Mind your own business",
        "form": "idiom",
        "definitions": [
            {
                "text": "Do not pry into other people's affairs",
                "examples": [
                    "Stop asking personal questions and mind your own business."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "privacy"
    },
    {
        "id": "en_elementary_idioms_064",
        "word": "On the tip of one's tongue",
        "form": "idiom",
        "definitions": [
            {
                "text": "Almost remembered",
                "examples": [
                    "His name was right on the tip of my tongue."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "memory"
    },
    {
        "id": "en_elementary_idioms_065",
        "word": "Out of sight, out of mind",
        "form": "idiom",
        "definitions": [
            {
                "text": "Forgotten when no longer visible",
                "examples": [
                    "Once he moved abroad, he was out of sight, out of mind."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "memory"
    },
    {
        "id": "en_elementary_idioms_066",
        "word": "Play it by ear",
        "form": "idiom",
        "definitions": [
            {
                "text": "Proceed spontaneously without a fixed plan",
                "examples": [
                    "We do not have a schedule, so let us play it by ear."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "flexibility"
    },
    {
        "id": "en_elementary_idioms_067",
        "word": "Pull someone's leg",
        "form": "idiom",
        "definitions": [
            {
                "text": "Jokingly deceive someone playfully",
                "examples": [
                    "Are you serious or are you pulling my leg?"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "humor"
    },
    {
        "id": "en_elementary_idioms_068",
        "word": "Ring a bell",
        "form": "idiom",
        "definitions": [
            {
                "text": "Sound vaguely familiar",
                "examples": [
                    "That actor's name rings a bell, but I cannot recall his films."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "memory"
    },
    {
        "id": "en_elementary_idioms_069",
        "word": "Run out of",
        "form": "idiom",
        "definitions": [
            {
                "text": "Exhaust the supply of something",
                "examples": [
                    "We ran out of milk, so I need to go to the store."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "scarcity"
    },
    {
        "id": "en_elementary_idioms_070",
        "word": "See the light",
        "form": "idiom",
        "definitions": [
            {
                "text": "Finally understand something after confusion",
                "examples": [
                    "After reading the guide, I finally saw the light."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "understanding"
    },
    {
        "id": "en_elementary_idioms_071",
        "word": "Shed light on",
        "form": "idiom",
        "definitions": [
            {
                "text": "Clarify or reveal information about",
                "examples": [
                    "The report shed light on the cause of the power outage."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "clarity"
    },
    {
        "id": "en_elementary_idioms_072",
        "word": "Sick and tired",
        "form": "idiom",
        "definitions": [
            {
                "text": "Thoroughly annoyed or frustrated with something",
                "examples": [
                    "I am sick and tired of waiting in long traffic jams."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "frustration"
    },
    {
        "id": "en_elementary_idioms_073",
        "word": "Spill the tea",
        "form": "idiom",
        "definitions": [
            {
                "text": "Share gossipy news or secrets",
                "examples": [
                    "Come sit down and spill the tea about yesterday's event."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "gossip"
    },
    {
        "id": "en_elementary_idioms_074",
        "word": "Stand out",
        "form": "idiom",
        "definitions": [
            {
                "text": "Be easily noticeable or superior",
                "examples": [
                    "Her bright red coat stood out in the crowd."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "visibility"
    },
    {
        "id": "en_elementary_idioms_075",
        "word": "Take for granted",
        "form": "idiom",
        "definitions": [
            {
                "text": "Fail to appreciate the value of something",
                "examples": [
                    "Do not take your good health for granted."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "appreciation"
    },
    {
        "id": "en_elementary_idioms_076",
        "word": "Think outside the box",
        "form": "idiom",
        "definitions": [
            {
                "text": "Think creatively and unconventional",
                "examples": [
                    "To solve this problem, we need to think outside the box."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "creativity"
    },
    {
        "id": "en_elementary_idioms_077",
        "word": "Through the grapevine",
        "form": "idiom",
        "definitions": [
            {
                "text": "Via informal rumors",
                "examples": [
                    "I heard through the grapevine that they are moving house."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "news"
    },
    {
        "id": "en_elementary_idioms_078",
        "word": "Time will tell",
        "form": "idiom",
        "definitions": [
            {
                "text": "The outcome will become clear in the future",
                "examples": [
                    "Whether this investment succeeds, only time will tell."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "future"
    },
    {
        "id": "en_elementary_idioms_079",
        "word": "To make matters worse",
        "form": "idiom",
        "definitions": [
            {
                "text": "Exacerbate an already bad situation",
                "examples": [
                    "It rained, and to make matters worse, I lost my umbrella."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "worsening"
    },
    {
        "id": "en_elementary_idioms_080",
        "word": "Turn over a new leaf",
        "form": "idiom",
        "definitions": [
            {
                "text": "Start behaving better or change habits",
                "examples": [
                    "He promised to turn over a new leaf and study hard."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "improvement"
    },
    {
        "id": "en_elementary_idioms_081",
        "word": "Under the sun",
        "form": "idiom",
        "definitions": [
            {
                "text": "In existence anywhere on earth",
                "examples": [
                    "We discussed almost every topic under the sun."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "scope"
    },
    {
        "id": "en_elementary_idioms_082",
        "word": "Up and down",
        "form": "idiom",
        "definitions": [
            {
                "text": "Fluctuating back and forth",
                "examples": [
                    "Prices have been going up and down all month."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "change"
    },
    {
        "id": "en_elementary_idioms_083",
        "word": "Wait and see",
        "form": "idiom",
        "definitions": [
            {
                "text": "Delay judgment until future developments occur",
                "examples": [
                    "We must wait and see how the market reacts."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "patience"
    },
    {
        "id": "en_elementary_idioms_084",
        "word": "Wear one's heart on one's sleeve",
        "form": "idiom",
        "definitions": [
            {
                "text": "Display emotions openly",
                "examples": [
                    "You always know how she feels because she wears her heart on her sleeve."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "emotions"
    },
    {
        "id": "en_elementary_idioms_085",
        "word": "What on earth",
        "form": "idiom",
        "definitions": [
            {
                "text": "Expressing extreme surprise or confusion",
                "examples": [
                    "What on earth happened to the kitchen lights?"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "surprise"
    },
    {
        "id": "en_elementary_idioms_086",
        "word": "When pigs fly",
        "form": "idiom",
        "definitions": [
            {
                "text": "Something that will never happen",
                "examples": [
                    "He will clean his room when pigs fly!"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "impossibility"
    },
    {
        "id": "en_elementary_idioms_087",
        "word": "Work like a charm",
        "form": "idiom",
        "definitions": [
            {
                "text": "Function or succeed perfectly",
                "examples": [
                    "The new software update worked like a charm."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "success"
    },
    {
        "id": "en_elementary_idioms_088",
        "word": "You live and learn",
        "form": "idiom",
        "definitions": [
            {
                "text": "Gain wisdom from life experiences",
                "examples": [
                    "I made a mistake, but you live and learn."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "wisdom"
    },
    {
        "id": "en_elementary_idioms_089",
        "word": "Your turn",
        "form": "idiom",
        "definitions": [
            {
                "text": "It is now your opportunity to act",
                "examples": [
                    "I finished my move, so now it is your turn."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "games"
    },
    {
        "id": "en_elementary_idioms_090",
        "word": "A piece of advice",
        "form": "idiom",
        "definitions": [
            {
                "text": "A single helpful suggestion",
                "examples": [
                    "Let me give you a useful piece of advice."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "guidance"
    },
    {
        "id": "en_elementary_idioms_091",
        "word": "Arm in arm",
        "form": "idiom",
        "definitions": [
            {
                "text": "With arms linked together closely",
                "examples": [
                    "They walked arm in arm along the avenue."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "relationships"
    },
    {
        "id": "en_elementary_idioms_092",
        "word": "As quiet as a mouse",
        "form": "idiom",
        "definitions": [
            {
                "text": "Extremely silent and unobtrusive",
                "examples": [
                    "The child sat as quiet as a mouse during the play."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "silence"
    },
    {
        "id": "en_elementary_idioms_093",
        "word": "Be in charge of",
        "form": "idiom",
        "definitions": [
            {
                "text": "Have responsibility for managing something",
                "examples": [
                    "She is in charge of customer service inquiries."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "management"
    },
    {
        "id": "en_elementary_idioms_094",
        "word": "Behind the scenes",
        "form": "idiom",
        "definitions": [
            {
                "text": "Privately out of public view",
                "examples": [
                    "Much hard work happens behind the scenes before a show."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "secrecy"
    },
    {
        "id": "en_elementary_idioms_095",
        "word": "Bite off more than one can chew",
        "form": "idiom",
        "definitions": [
            {
                "text": "Take on a responsibility too big to handle",
                "examples": [
                    "By agreeing to write three articles today, he bit off more than he could chew."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "overload"
    },
    {
        "id": "en_elementary_idioms_096",
        "word": "Break someone's heart",
        "form": "idiom",
        "definitions": [
            {
                "text": "Cause deep emotional pain to someone",
                "examples": [
                    "It broke her heart to see her old dog suffer."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "sadness"
    },
    {
        "id": "en_elementary_idioms_097",
        "word": "By heart",
        "form": "idiom",
        "definitions": [
            {
                "text": "From memory completely",
                "examples": [
                    "The actor learned all his lines by heart."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "memory"
    },
    {
        "id": "en_elementary_idioms_098",
        "word": "Clear as crystal",
        "form": "idiom",
        "definitions": [
            {
                "text": "Very easy to perceive or understand",
                "examples": [
                    "His explanation was clear as crystal to everyone."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "clarity"
    },
    {
        "id": "en_elementary_idioms_099",
        "word": "Close at hand",
        "form": "idiom",
        "definitions": [
            {
                "text": "Nearby and accessible",
                "examples": [
                    "Keep a notepad close at hand during the lecture."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "proximity"
    },
    {
        "id": "en_elementary_idioms_100",
        "word": "Come true",
        "form": "idiom",
        "definitions": [
            {
                "text": "Become reality as hoped",
                "examples": [
                    "Her dream of becoming a doctor finally came true."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "fulfillment"
    },
    {
        "id": "en_elementary_idioms_101",
        "word": "Count on someone",
        "form": "idiom",
        "definitions": [
            {
                "text": "Rely or depend on a person",
                "examples": [
                    "You can always count on your best friends for support."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "trust"
    },
    {
        "id": "en_elementary_idioms_102",
        "word": "Cross one's mind",
        "form": "idiom",
        "definitions": [
            {
                "text": "Occur briefly in one's thoughts",
                "examples": [
                    "It never crossed my mind that he was lying."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "thought"
    },
    {
        "id": "en_elementary_idioms_103",
        "word": "Cry wolf",
        "form": "idiom",
        "definitions": [
            {
                "text": "Raise false alarms repeatedly",
                "examples": [
                    "If you cry wolf too often, no one will believe you when danger is real."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "honesty"
    },
    {
        "id": "en_elementary_idioms_104",
        "word": "Day and night",
        "form": "idiom",
        "definitions": [
            {
                "text": "Continuously without stopping",
                "examples": [
                    "Nurses worked day and night to care for patients."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "duration"
    },
    {
        "id": "en_elementary_idioms_105",
        "word": "Die out",
        "form": "idiom",
        "definitions": [
            {
                "text": "Become extinct or disappear completely",
                "examples": [
                    "Many ancient customs slowly died out over centuries."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "extinction"
    },
    {
        "id": "en_elementary_idioms_106",
        "word": "Do your best",
        "form": "idiom",
        "definitions": [
            {
                "text": "Exert maximum personal effort",
                "examples": [
                    "Do your best on the test and do not worry about the result."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "effort"
    },
    {
        "id": "en_elementary_idioms_107",
        "word": "Drop a line",
        "form": "idiom",
        "definitions": [
            {
                "text": "Send a brief short letter or note",
                "examples": [
                    "Drop me a line when you arrive in Paris."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "communication"
    },
    {
        "id": "en_elementary_idioms_108",
        "word": "Early bird",
        "form": "idiom",
        "definitions": [
            {
                "text": "A person who rises or arrives early",
                "examples": [
                    "She is an early bird who starts work at six in the morning."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "habits"
    },
    {
        "id": "en_elementary_idioms_109",
        "word": "Every now and then",
        "form": "idiom",
        "definitions": [
            {
                "text": "Occasionally from time to time",
                "examples": [
                    "Every now and then, we order takeaway food."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "frequency"
    },
    {
        "id": "en_elementary_idioms_110",
        "word": "Fall behind",
        "form": "idiom",
        "definitions": [
            {
                "text": "Fail to keep up with progress or payments",
                "examples": [
                    "He fell behind in his studies after being sick."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "lag"
    },
    {
        "id": "en_elementary_idioms_111",
        "word": "Fall in love",
        "form": "idiom",
        "definitions": [
            {
                "text": "Begin to feel romantic love",
                "examples": [
                    "They fell in love during their summer holiday."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "emotions"
    },
    {
        "id": "en_elementary_idioms_112",
        "word": "Feel free",
        "form": "idiom",
        "definitions": [
            {
                "text": "Do not hesitate to do something",
                "examples": [
                    "Feel free to ask any questions during the tour."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "permission"
    },
    {
        "id": "en_elementary_idioms_113",
        "word": "Figure out",
        "form": "idiom",
        "definitions": [
            {
                "text": "Understand or solve a problem after thought",
                "examples": [
                    "I finally figured out how to assemble the bookshelf."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "understanding"
    },
    {
        "id": "en_elementary_idioms_114",
        "word": "Fill shoes",
        "form": "idiom",
        "definitions": [
            {
                "text": "Take over someone's role effectively",
                "examples": [
                    "The new manager has big shoes to fill."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "role"
    },
    {
        "id": "en_elementary_idioms_115",
        "word": "From scratch",
        "form": "idiom",
        "definitions": [
            {
                "text": "From the very beginning using raw materials",
                "examples": [
                    "She baked the chocolate cake from scratch."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "creation"
    },
    {
        "id": "en_elementary_idioms_116",
        "word": "Get rid of",
        "form": "idiom",
        "definitions": [
            {
                "text": "Eliminate or dispose of something unwanted",
                "examples": [
                    "We need to get rid of old clutter in the attic."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "disposal"
    },
    {
        "id": "en_elementary_idioms_117",
        "word": "Get along with",
        "form": "idiom",
        "definitions": [
            {
                "text": "Have a friendly relationship with someone",
                "examples": [
                    "I get along very well with my new housemates."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "social"
    },
    {
        "id": "en_elementary_idioms_118",
        "word": "Give a rain check",
        "form": "idiom",
        "definitions": [
            {
                "text": "Postpone an invitation to a later date",
                "examples": [
                    "I cannot join you for lunch today, but I take a rain check."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "invitation"
    },
    {
        "id": "en_elementary_idioms_119",
        "word": "Give a ride",
        "form": "idiom",
        "definitions": [
            {
                "text": "Transport someone in a vehicle",
                "examples": [
                    "Could you give me a ride to the train station?"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "transport"
    },
    {
        "id": "en_elementary_idioms_120",
        "word": "Give one's word",
        "form": "idiom",
        "definitions": [
            {
                "text": "Promise solemnly",
                "examples": [
                    "I give you my word that I will keep your secret."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "promise"
    },
    {
        "id": "en_elementary_idioms_121",
        "word": "Go viral",
        "form": "idiom",
        "definitions": [
            {
                "text": "Spread rapidly across the internet",
                "examples": [
                    "Her funny cat video went viral within two days."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "internet"
    },
    {
        "id": "en_elementary_idioms_122",
        "word": "Hand down",
        "form": "idiom",
        "definitions": [
            {
                "text": "Pass knowledge or items to younger generations",
                "examples": [
                    "This antique ring was handed down through generations."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "heritage"
    },
    {
        "id": "en_elementary_idioms_123",
        "word": "Hard to believe",
        "form": "idiom",
        "definitions": [
            {
                "text": "Difficult to accept as true",
                "examples": [
                    "It is hard to believe that summer is already over."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "disbelief"
    },
    {
        "id": "en_elementary_idioms_124",
        "word": "Have a heart of gold",
        "form": "idiom",
        "definitions": [
            {
                "text": "Be exceptionally kind and generous",
                "examples": [
                    "Our neighbor has a heart of gold and helps everyone."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "kindness"
    },
    {
        "id": "en_elementary_idioms_125",
        "word": "In charge",
        "form": "idiom",
        "definitions": [
            {
                "text": "Having authority or control",
                "examples": [
                    "Who is in charge of organizing the office conference?"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "authority"
    },
    {
        "id": "en_elementary_idioms_126",
        "word": "In no time",
        "form": "idiom",
        "definitions": [
            {
                "text": "Very quickly in a brief moment",
                "examples": [
                    "We finished the group project in no time."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "speed"
    },
    {
        "id": "en_elementary_idioms_127",
        "word": "In the long run",
        "form": "idiom",
        "definitions": [
            {
                "text": "Over a extended period of future time",
                "examples": [
                    "Investing in good education pays off in the long run."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "future"
    },
    {
        "id": "en_elementary_idioms_128",
        "word": "Keep a secret",
        "form": "idiom",
        "definitions": [
            {
                "text": "Not reveal confidential information",
                "examples": [
                    "Can you keep a secret about the surprise party?"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "trust"
    },
    {
        "id": "en_elementary_idioms_129",
        "word": "Keep track of",
        "form": "idiom",
        "definitions": [
            {
                "text": "Stay informed or monitor changes",
                "examples": [
                    "Use an app to keep track of your daily expenses."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "organization"
    },
    {
        "id": "en_elementary_idioms_130",
        "word": "Know by heart",
        "form": "idiom",
        "definitions": [
            {
                "text": "Memorize thoroughly",
                "examples": [
                    "She knows all the poem verses by heart."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "memory"
    },
    {
        "id": "en_elementary_idioms_131",
        "word": "Learn by heart",
        "form": "idiom",
        "definitions": [
            {
                "text": "Memorize word for word",
                "examples": [
                    "Students had to learn the song lyrics by heart."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "learning"
    },
    {
        "id": "en_elementary_idioms_132",
        "word": "Leave alone",
        "form": "idiom",
        "definitions": [
            {
                "text": "Stop bothering someone",
                "examples": [
                    "Please leave me alone while I am concentrating."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "privacy"
    },
    {
        "id": "en_elementary_idioms_133",
        "word": "Look forward to",
        "form": "idiom",
        "definitions": [
            {
                "text": "Anticipate with pleasure",
                "examples": [
                    "I look forward to meeting you next week."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "anticipation"
    },
    {
        "id": "en_elementary_idioms_134",
        "word": "Make sense",
        "form": "idiom",
        "definitions": [
            {
                "text": "Be logical and understandable",
                "examples": [
                    "His explanation makes complete sense now."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "logic"
    },
    {
        "id": "en_elementary_idioms_135",
        "word": "Nip in the bud",
        "form": "idiom",
        "definitions": [
            {
                "text": "Stop a problem early before it grows",
                "examples": [
                    "We should nip bad habits in the bud early."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "prevention"
    },
    {
        "id": "en_elementary_idioms_136",
        "word": "On one's own",
        "form": "idiom",
        "definitions": [
            {
                "text": "Alone without assistance",
                "examples": [
                    "She built the entire website on her own."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "independence"
    },
    {
        "id": "en_elementary_idioms_137",
        "word": "Out of hand",
        "form": "idiom",
        "definitions": [
            {
                "text": "Out of control",
                "examples": [
                    "The situation got out of hand before security arrived."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "control"
    },
    {
        "id": "en_elementary_idioms_138",
        "word": "Pay a visit",
        "form": "idiom",
        "definitions": [
            {
                "text": "Visit someone socially",
                "examples": [
                    "We decided to pay a visit to our grandparents."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "social"
    },
    {
        "id": "en_elementary_idioms_139",
        "word": "Run late",
        "form": "idiom",
        "definitions": [
            {
                "text": "Be behind schedule",
                "examples": [
                    "Hurry up because the morning train is running late."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "delay"
    },
    {
        "id": "en_elementary_idioms_140",
        "word": "Set an example",
        "form": "idiom",
        "definitions": [
            {
                "text": "Behave in a way that others should copy",
                "examples": [
                    "Senior managers should set a good example for staff."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "leadership"
    },
    {
        "id": "en_elementary_idioms_141",
        "word": "Show up",
        "form": "idiom",
        "definitions": [
            {
                "text": "Arrive or appear at an event",
                "examples": [
                    "He failed to show up for the morning meeting."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "arrival"
    },
    {
        "id": "en_elementary_idioms_142",
        "word": "State of the art",
        "form": "idiom",
        "definitions": [
            {
                "text": "Utilizing the newest advanced technology",
                "examples": [
                    "The new hospital laboratory features state of the art equipment."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "technology"
    },
    {
        "id": "en_elementary_idioms_143",
        "word": "Take part in",
        "form": "idiom",
        "definitions": [
            {
                "text": "Participate in an activity",
                "examples": [
                    "Many students took part in the annual sports day."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "participation"
    },
    {
        "id": "en_elementary_idioms_144",
        "word": "Take place",
        "form": "idiom",
        "definitions": [
            {
                "text": "Occur or happen at a venue",
                "examples": [
                    "The music festival will take place in the central park."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "events"
    },
    {
        "id": "en_elementary_idioms_145",
        "word": "Under pressure",
        "form": "idiom",
        "definitions": [
            {
                "text": "Facing stress or urgent demands",
                "examples": [
                    "She performs well even when working under pressure."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "stress"
    },
    {
        "id": "en_elementary_idioms_146",
        "word": "Word of mouth",
        "form": "idiom",
        "definitions": [
            {
                "text": "Spoken recommendations",
                "examples": [
                    "The restaurant became popular purely through word of mouth."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "reputation"
    },
    {
        "id": "en_elementary_idioms_147",
        "word": "At a glance",
        "form": "idiom",
        "definitions": [
            {
                "text": "In a single brief look or immediate inspection",
                "examples": [
                    "At a glance, the report seemed thorough and accurate."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "inspection"
    },
    {
        "id": "en_elementary_idioms_148",
        "word": "Word for word",
        "form": "idiom",
        "definitions": [
            {
                "text": "Exactly in the same words",
                "examples": [
                    "He repeated the instructions word for word."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "accuracy"
    },
    {
        "id": "en_elementary_idioms_149",
        "word": "Work hard, play hard",
        "form": "idiom",
        "definitions": [
            {
                "text": "Balance intense work with energetic recreation",
                "examples": [
                    "Software developers at this firm work hard, play hard."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "lifestyle"
    },
    {
        "id": "en_elementary_idioms_150",
        "word": "Keep in mind",
        "form": "idiom",
        "definitions": [
            {
                "text": "Remember or consider information",
                "examples": [
                    "Keep in mind that the office closes early on Friday."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "elementary",
        "theme": "idioms",
        "sub_theme": "memory"
    }
    ];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
