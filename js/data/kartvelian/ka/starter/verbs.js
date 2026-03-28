(function() {
    const data = [
    {
        "word": "ყოფნა",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "👤",
        "subtext": "დაღლილი ყოფნა / ბედნიერი ყოფნა / სამსახურში ყოფნა / მზად ყოფნა",
        "form": "verb",
        "definitions": [
            {
                "text": "არსებობა ან მდგომარეობა:",
                "examples": [
                    "მე დაღლილი ვარ:",
                    "ის ექიმია:",
                    "ჩვენ დავაგვიანეთ:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": null,
        "v3": "ყოფილი",
        "group": "irregular"
    },
    {
        "word": "ქონა",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "👜",
        "subtext": "have a job / have lunch / have a problem / have time",
        "form": "verb",
        "definitions": [
            {
                "text": "ფლობა რაიმესი:",
                "examples": [
                    "მე მაქვს სამსახური:",
                    "მას აქვს მანქანა:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "had",
        "v3": "ქონებული",
        "group": "irregular"
    },
    {
        "word": "გრძნობა",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🌡️",
        "subtext": "feel tired / feel better / feel ill / feel stressed",
        "form": "verb",
        "definitions": [
            {
                "text": "ფიზიკური ან ემოციური მდგომარეობის განცდა:",
                "examples": [
                    "ის თავს დაღლილად გრძნობს:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "felt",
        "v3": "გრძნობილი",
        "group": "irregular"
    },
    {
        "word": "მიცემა",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "subtext": "give advice / give money / give a present / give information",
        "opposite": "take",
        "oppositeEmoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს გადაცემა ვინმესთვის:",
                "examples": [
                    "ის ბევრ სამუშაოს მაძლევს:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "gave",
        "v3": "მიცემული",
        "group": "irregular"
    },
    {
        "word": "აღება",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "👜",
        "subtext": "take the bus / take medicine / take a break / take time",
        "opposite": "give",
        "oppositeEmoji": "🎁",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს ხელში აღება ან გამოყენება:",
                "examples": [
                    "მე ავტობუსს ვიყენებ სამსახურში წასასვლელად:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "took",
        "v3": "აღებული",
        "group": "irregular"
    },
    {
        "word": "მიღება",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📥",
        "subtext": "get a job / get tired / get better / get home",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს მიღება ან გახდომა:",
                "examples": [
                    "მე კარგ ხელფასს ვიღებ:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "got",
        "v3": "მიღებული",
        "group": "irregular"
    },
    {
        "word": "დადება",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "📥",
        "subtext": "put on / put away / put the phone down / put money aside",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს სადმე განთავსება:",
                "examples": [
                    "დადეთ თქვენი ჩანთა აქ:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "put",
        "v3": "დადებული",
        "group": "irregular"
    },
    {
        "word": "გაკეთება",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏗️",
        "subtext": "make coffee / make a decision / make a mistake / make money",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს შექმნა ან წარმოება:",
                "examples": [
                    "მე ყოველ დილით ყავას ვაკეთებ:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "made",
        "v3": "გაკეთებული",
        "group": "irregular"
    },
    {
        "word": "კეთება",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "subtext": "do work / do the shopping / do exercise / do nothing",
        "form": "verb",
        "definitions": [
            {
                "text": "ქმედების შესრულება:",
                "examples": [
                    "მე ყოველდღე ვაკეთებ ჩემს საქმეს:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": null,
        "v3": "გაკეთებული",
        "group": "irregular"
    },
    {
        "word": "გამოყენება",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🛠️",
        "subtext": "use a phone / use public transport / use a computer / use time",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს გამოყენება მიზნისთვის:",
                "examples": [
                    "მე ვიყენებ ტელეფონს ყველაფრისთვის:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "used",
        "v3": "გამოყენებული",
        "group": "regular"
    },
    {
        "word": "გახსნა",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "subtext": "open a door / open an account / open a shop / open at nine",
        "opposite": "close",
        "oppositeEmoji": "🔒",
        "form": "verb",
        "definitions": [
            {
                "text": "დახურული რაიმეს გახსნა:",
                "examples": [
                    "ის ოფისს რვაზე ხსნის:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "opened",
        "v3": "გახსნილი",
        "group": "regular"
    },
    {
        "word": "დაკეტვა",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "subtext": "close a door / close at six / close an account / close the meeting",
        "opposite": "open",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "ღია რაიმეს დახურვა:",
                "examples": [
                    "ოფისი ექვსზე იკეტება:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "closed",
        "v3": "დაკეტილი",
        "group": "regular"
    },
    {
        "word": "დაწყება",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "subtext": "start work / start a meeting / start a new job",
        "opposite": "finish",
        "oppositeEmoji": "🏁",
        "form": "verb",
        "definitions": [
            {
                "text": "საქმიანობის დაწყება:",
                "examples": [
                    "მე სამუშაოს რვაზე ვიწყებ:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "started",
        "v3": "დაწყებული",
        "group": "regular"
    },
    {
        "word": "დამთავრება",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "finish work / finish a project / finish early / finish late",
        "opposite": "start",
        "oppositeEmoji": "▶️",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს დასრულება:",
                "examples": [
                    "ის სამუშაოს ხუთზე ამთავრებს:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "finished",
        "v3": "დამთავრებული",
        "group": "regular"
    },
    {
        "word": "დახმარება",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🤝",
        "subtext": "help someone / help with a task / help out / ask for help",
        "form": "verb",
        "definitions": [
            {
                "text": "ვინმესთვის საქმის გაადვილება:",
                "examples": [
                    "ის ეხმარება ახალ კოლეგებს:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "helped",
        "v3": "დახმარებული",
        "group": "regular"
    },
    {
        "word": "ცდა",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎯",
        "subtext": "try to do / try hard / try something new / give it a try",
        "form": "verb",
        "definitions": [
            {
                "text": "მცდელობა რაიმეს გასაკეთებლად:",
                "examples": [
                    "მე ყოველთვის ვცდილობ ვუპასუხო შეტყობინებებს:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "tried",
        "v3": "ნაცადი",
        "group": "regular"
    },
    {
        "word": "ჩვენება",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📽️",
        "subtext": "show someone how / show a document / show interest",
        "form": "verb",
        "definitions": [
            {
                "text": "საშუალების მიცემა ვინმესთვის, რომ ნახოს რაიმე:",
                "examples": [
                    "შეგიძლიათ მაჩვენოთ როგორ მუშაობს სისტემა?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "showed",
        "v3": "ნაჩვენები",
        "group": "irregular"
    },
    {
        "word": "პოვნა",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔍",
        "subtext": "find a job / find out / find it difficult / find time",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს აღმოჩენა:",
                "examples": [
                    "მე ახალი სამსახური ვიპოვე:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "found",
        "v3": "ნაპოვნი",
        "group": "irregular"
    },
    {
        "word": "შენახვა",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "📦",
        "subtext": "keep going / keep quiet / keep a record / keep in touch",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს ქონის გაგრძელება:",
                "examples": [
                    "შეინახეთ ქვითარი:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "kept",
        "v3": "შენახული",
        "group": "irregular"
    },
    {
        "word": "დაკარგვა",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📉",
        "subtext": "lose a job / lose money / lose weight / lose time",
        "opposite": "win",
        "oppositeEmoji": "🏆",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს ქონის შეწყვეტა:",
                "examples": [
                    "მე გასაღებები დავკარგე:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "lost",
        "v3": "დაკარგული",
        "group": "irregular"
    },
    {
        "word": "ჭრა",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "✂️",
        "subtext": "cut costs / cut spending / cut short / cut in half",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს გაყოფა ბასრი საგნით:",
                "examples": [
                    "ის პურს ჭრის:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "cut",
        "v3": "გაჭრილი",
        "group": "irregular"
    },
    {
        "word": "მობრუნება",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "🔄",
        "subtext": "turn on / turn off / turn left / turn right",
        "form": "verb",
        "definitions": [
            {
                "text": "მიმართულების შეცვლა:",
                "examples": [
                    "მოუხვიეთ მარცხნივ ოფისთან:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned",
        "v3": "მობრუნებული",
        "group": "regular"
    },
    {
        "word": "მოტანა",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🎁",
        "subtext": "bring someone / bring food / bring a document / bring up",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს თან მოტანა:",
                "examples": [
                    "მოიტანეთ თქვენი პასპორტი:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "brought",
        "v3": "მოტანილი",
        "group": "irregular"
    },
    {
        "word": "თქმა",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🗨️",
        "subtext": "say hello / say yes / say no / say something",
        "form": "verb",
        "definitions": [
            {
                "text": "სიტყვების გამოთქმა:",
                "examples": [
                    "ის ყოველ დილით გამარჯობას ამბობს:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "said",
        "v3": "თქმული",
        "group": "irregular"
    },
    {
        "word": "თხრობა",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "🗣️",
        "subtext": "tell the truth / tell someone / tell a story / tell someone about",
        "form": "verb",
        "definitions": [
            {
                "text": "ინფორმაციის მიწოდება ვინმესთვის:",
                "examples": [
                    "ის უყვება გუნდს ცვლილებების შესახებ:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "told",
        "v3": "ნათქვამი",
        "group": "irregular"
    },
    {
        "word": "კითხვა",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "❓",
        "subtext": "ask a question / ask for help / ask about / ask someone",
        "form": "verb",
        "definitions": [
            {
                "text": "შეკითხვის დასმა:",
                "examples": [
                    "ის აზრს ეკითხება ყოველი პრეზენტაციის შემდეგ:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "asked",
        "v3": "ნაკითხი",
        "group": "regular"
    },
    {
        "word": "ლაპარაკი",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🗣️",
        "subtext": "speak to someone / speak English / speak clearly / speak at a meeting",
        "form": "verb",
        "definitions": [
            {
                "text": "სიტყვების თქმა, კომუნიკაცია:",
                "examples": [
                    "ის ლაპარაკობს ფრანგულად:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "spoke",
        "v3": "ნალაპარაკები",
        "group": "irregular"
    },
    {
        "word": "საუბარი",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "💬",
        "subtext": "talk to someone / talk about / talk openly / talk for a long time",
        "form": "verb",
        "definitions": [
            {
                "text": "კომუნიკაცია ლაპარაკით:",
                "examples": [
                    "ის ესაუბრება თავის მენეჯერს პრობლემაზე:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "talked",
        "v3": "ნასაუბრები",
        "group": "regular"
    },
    {
        "word": "დარეკვა",
        "level": "starter",
        "theme": "using_a_smartphone_A1",
        "emoji": "📞",
        "subtext": "call someone / call back / call a meeting / call in sick",
        "form": "verb",
        "definitions": [
            {
                "text": "ტელეფონით დაკავშირება ვინმესთან:",
                "examples": [
                    "მე ვურეკავ ჩემს კლიენტებს ყოველ დილით:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "called",
        "v3": "დარეკილი",
        "group": "regular"
    },
    {
        "word": "წერა",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "subtext": "write an email / write a report / write a letter / write notes",
        "opposite": "read",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "სიტყვების დაწერა ქაღალდზე ან ეკრანზე:",
                "examples": [
                    "მე მთელი დღე იმეილებს ვწერ:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "wrote",
        "v3": "დაწერილი",
        "group": "irregular"
    },
    {
        "word": "კითხვა",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "read a book / read the news / read a contract / read carefully",
        "opposite": "write",
        "oppositeEmoji": "✍️",
        "form": "verb",
        "definitions": [
            {
                "text": "დაწერილი სიტყვების გაგება:",
                "examples": [
                    "ის ყოველ დილით კითხულობს ამბებს:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "read",
        "v3": "წაკითხული",
        "group": "irregular"
    },
    {
        "word": "მოსმენა",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎧",
        "subtext": "listen to music / listen carefully / listen to a podcast",
        "form": "verb",
        "definitions": [
            {
                "text": "ყურადღების მიქცევა ხმებისთვის:",
                "examples": [
                    "მე ვუსმენ პოდკასტებს მუშაობისას:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "listened",
        "v3": "მოსმენილი",
        "group": "regular"
    },
    {
        "word": "პასუხი",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📞",
        "subtext": "answer a question / answer the phone / answer an email",
        "form": "verb",
        "definitions": [
            {
                "text": "კითხვაზე პასუხის გაცემა:",
                "examples": [
                    "ის სწრაფად პასუხობს ყველა იმეილს:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "answered",
        "v3": "გაცემული",
        "group": "regular"
    },
    {
        "word": "გამეორება",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🔁",
        "subtext": "repeat that / repeat yourself / repeat an order",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს ხელახლა თქმა ან გაკეთება:",
                "examples": [
                    "გთხოვთ, გაიმეოროთ ეს:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "repeated",
        "v3": "გამეორებული",
        "group": "regular"
    },
    {
        "word": "სვლა",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🚶",
        "subtext": "go to work / go home / go out / go shopping",
        "form": "verb",
        "definitions": [
            {
                "text": "ერთი ადგილიდან მეორეზე გადაადგილება:",
                "examples": [
                    "მე სამსახურში ავტობუსით მივდივარ:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": null,
        "v3": "წასული",
        "group": "irregular"
    },
    {
        "word": "მოსვლა",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🏃‍♂️",
        "subtext": "come home / come to work / come back / come here",
        "opposite": "go",
        "oppositeEmoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "ადგილისკენ ან ადამიანისკენ მოძრაობა:",
                "examples": [
                    "ის ოფისში ცხრაზე მოდის:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "came",
        "v3": "მოსული",
        "group": "irregular"
    },
    {
        "word": "სიარული",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚶",
        "subtext": "walk to work / walk home / walk slowly / walk every day",
        "form": "verb",
        "definitions": [
            {
                "text": "ფეხით გადაადგილება:",
                "examples": [
                    "ის ყოველდღე ფეხით დადის სამსახურში:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "walked",
        "v3": "ვლილი",
        "group": "regular"
    },
    {
        "word": "მართვა",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚗",
        "subtext": "drive to work / drive a car / drive home / drive carefully",
        "form": "verb",
        "definitions": [
            {
                "text": "სატრანსპორტო საშუალების მართვა:",
                "examples": [
                    "ის მართავს მანქანას:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drove",
        "v3": "მართული",
        "group": "irregular"
    },
    {
        "word": "ფრენა",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "✈️",
        "subtext": "fly to a city / fly business class / fly economy",
        "form": "verb",
        "definitions": [
            {
                "text": "ჰაერში მოძრაობა:",
                "examples": [
                    "ის დაფრინავს პარიზში შეხვედრებისთვის:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "flew",
        "v3": "ნაფრენი",
        "group": "irregular"
    },
    {
        "word": "ჩამოსვლა",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "arrive at work / arrive late / arrive on time / arrive home",
        "form": "verb",
        "definitions": [
            {
                "text": "დანიშნულების ადგილზე მისვლა:",
                "examples": [
                    "ის ოფისში ცხრაზე მოდის:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "arrived",
        "v3": "ჩამოსული",
        "group": "regular"
    },
    {
        "word": "წასვლა",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚪",
        "subtext": "leave home / leave work / leave early / leave late",
        "form": "verb",
        "definitions": [
            {
                "text": "ადგილიდან წასვლა:",
                "examples": [
                    "მე სახლიდან რვაზე გავდივარ:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "left",
        "v3": "წასული",
        "group": "irregular"
    },
    {
        "word": "გადასვლა",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "📦",
        "subtext": "move to a new place / move in / move out / move house",
        "form": "verb",
        "definitions": [
            {
                "text": "საცხოვრებელი ან სამუშაო ადგილის შეცვლა:",
                "examples": [
                    "ისინი უფრო დიდ ბინაში გადავიდნენ:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "moved",
        "v3": "გადასული",
        "group": "regular"
    },
    {
        "word": "დაბრუნება",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🔙",
        "subtext": "return home / return to work / return a call / return from",
        "form": "verb",
        "definitions": [
            {
                "text": "უკან დაბრუნება სადმე:",
                "examples": [
                    "ის მოგზაურობიდან პარასკევს ბრუნდება:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "returned",
        "v3": "დაბრუნებული",
        "group": "regular"
    },
    {
        "word": "მოგზაურობა",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "✈️",
        "subtext": "travel for work / travel abroad / travel by train",
        "form": "verb",
        "definitions": [
            {
                "text": "ერთი ადგილიდან მეორეზე წასვლა, განსაკუთრებით შორს:",
                "examples": [
                    "ის თვეში სამჯერ მოგზაურობს სამსახურის გამო:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "traveled",
        "v3": "ნამოგზაურები",
        "group": "regular"
    },
    {
        "word": "ჭამა",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍎",
        "subtext": "eat breakfast / eat lunch / eat dinner / eat out",
        "opposite": "drink",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "საკვების მიღება:",
                "examples": [
                    "ჩვენ შვიდზე ვჭამთ:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ate",
        "v3": "ნაჭამი",
        "group": "irregular"
    },
    {
        "word": "სმა",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🥛",
        "subtext": "drink coffee / drink tea / drink water / drink beer",
        "opposite": "eat",
        "oppositeEmoji": "🍎",
        "form": "verb",
        "definitions": [
            {
                "text": "სითხის მიღება:",
                "examples": [
                    "მე წყალს ვსვამ:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drank",
        "v3": "ნასვამი",
        "group": "irregular"
    },
    {
        "word": "ძილი",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "😴",
        "subtext": "sleep well / sleep badly / sleep eight hours / sleep late",
        "opposite": "wake up",
        "oppositeEmoji": "⏰",
        "form": "verb",
        "definitions": [
            {
                "text": "დასვენება დახუჭული თვალებით:",
                "examples": [
                    "მას დღეში შვიდი საათი სძინავს:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "slept",
        "v3": "ნაძინები",
        "group": "irregular"
    },
    {
        "word": "მომზადება",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "🍳",
        "subtext": "cook dinner / cook a meal / cook at home / cook for someone",
        "form": "verb",
        "definitions": [
            {
                "text": "საკვების მომზადება:",
                "examples": [
                    "ის ყოველ საღამოს ამზადებს ვახშამს:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cooked",
        "v3": "მომზადებული",
        "group": "regular"
    },
    {
        "word": "დასუფთავება",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧹",
        "subtext": "clean the flat / clean the kitchen / clean up / clean regularly",
        "form": "verb",
        "definitions": [
            {
                "text": "ჭუჭყის მოცილება:",
                "examples": [
                    "მე ბინას ყოველ კვირას ვასუფთავებ:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cleaned",
        "v3": "დასუფთავებული",
        "group": "regular"
    },
    {
        "word": "ტარება",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👕",
        "subtext": "wear a suit / wear glasses / wear casual clothes",
        "form": "verb",
        "definitions": [
            {
                "text": "ტანსაცმლის ტარება ტანზე:",
                "examples": [
                    "ის კოსტიუმს ატარებს სამსახურში:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "wore",
        "v3": "ნატარები",
        "group": "irregular"
    },
    {
        "word": "რეცხვა",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧼",
        "subtext": "wash the dishes / wash clothes / wash your hands",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს გასუფთავება წყლით:",
                "examples": [
                    "ის ყოველ კვირას რეცხავს მანქანას:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": null,
        "v3": "გარეცხილი",
        "group": "regular"
    },
    {
        "word": "ყიდვა",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🛒",
        "subtext": "buy food / buy a ticket / buy online / buy a house",
        "opposite": "sell",
        "oppositeEmoji": "🏷️",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს შეძენა ფულით:",
                "examples": [
                    "ის საჭმელს ონლაინ ყიდულობს:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "bought",
        "v3": "ნაყიდი",
        "group": "irregular"
    },
    {
        "word": "გადახდა",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💳",
        "subtext": "pay a bill / pay rent / pay by card / pay in cash",
        "form": "verb",
        "definitions": [
            {
                "text": "ფულის მიცემა რაიმეში:",
                "examples": [
                    "მე ვიხდი გადასახადებს:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "paid",
        "v3": "გადახდილი",
        "group": "irregular"
    },
    {
        "word": "ხარჯვა",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "subtext": "spend money / spend on food / spend on rent / spend time",
        "form": "verb",
        "definitions": [
            {
                "text": "ფულის გამოყენება ნივთებისთვის:",
                "examples": [
                    "ის ძალიან ბევრ ფულს ხარჯავს საჭმელში:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "spent",
        "v3": "დახარჯული",
        "group": "irregular"
    },
    {
        "word": "დაზოგვა",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "save money / save for a holiday / save for a house",
        "opposite": "spend",
        "oppositeEmoji": "💸",
        "form": "verb",
        "definitions": [
            {
                "text": "ფულის შენახვა დახარჯვის ნაცვლად:",
                "examples": [
                    "ის ყოველ თვე ას ევროს ზოგავს:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "saved",
        "v3": "დაზოგილი",
        "group": "regular"
    },
    {
        "word": "მუშაობა",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "work from home / work full-time / work hard / work late",
        "form": "verb",
        "definitions": [
            {
                "text": "დავალებების შესრულება სამუშაოდ:",
                "examples": [
                    "ის კვირაში სამი დღე სახლიდან მუშაობს:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "worked",
        "v3": "ნამუშევარი",
        "group": "regular"
    },
    {
        "word": "ცხოვრება",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "🏠",
        "subtext": "live in a flat / live alone / live with someone / live abroad",
        "opposite": "die",
        "oppositeEmoji": "⚰️",
        "form": "verb",
        "definitions": [
            {
                "text": "სახლის ქონა სადმე, ყოფნა ცოცხალი:",
                "examples": [
                    "ის ცენტრთან ახლოს ცხოვრობს:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "lived",
        "v3": "ნაცხოვრები",
        "group": "regular"
    },
    {
        "word": "ფიქრი",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "💭",
        "subtext": "think about / think of / think it is / think carefully",
        "form": "verb",
        "definitions": [
            {
                "text": "აზრის ან შეხედულების ქონა:",
                "examples": [
                    "მე ვფიქრობ, რომ ეს კარგი იდეაა:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "thought",
        "v3": "ნაფიქრი",
        "group": "irregular"
    },
    {
        "word": "ცოდნა",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "know someone / know the answer / know a place / know how to",
        "form": "verb",
        "definitions": [
            {
                "text": "ინფორმაციის ქონა რაიმეს შესახებ:",
                "examples": [
                    "მე ვიცი მისი სახელი:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "knew",
        "v3": "ცნობილი",
        "group": "irregular"
    },
    {
        "word": "ნდომა",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🙏",
        "subtext": "want a job / want to leave / want more money / want help",
        "form": "verb",
        "definitions": [
            {
                "text": "სურვილის ქონა:",
                "examples": [
                    "მე მინდა ყავა:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "wanted",
        "v3": "ნანდომი",
        "group": "regular"
    },
    {
        "word": "საჭიროება",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🆘",
        "subtext": "need help / need time / need money / need to rest",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს მოთხოვნილება:",
                "examples": [
                    "მე მჭირდება დასვენება:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "needed",
        "v3": "საჭიროებული",
        "group": "regular"
    },
    {
        "word": "მოწონება",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "👍",
        "subtext": "like work / like to travel / like someone / like the idea",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს სასიამოვნოდ მიჩნევა:",
                "examples": [
                    "მე მომწონს ჩემი სამუშაო:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "liked",
        "v3": "მოწონებული",
        "group": "regular"
    },
    {
        "word": "ყვარება",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "❤️",
        "subtext": "love someone / love doing / love a place / love the idea",
        "form": "verb",
        "definitions": [
            {
                "text": "ძლიერი მიჯაჭვულობის ქონა:",
                "examples": [
                    "მას უყვარს თავისი საქმე:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "loved",
        "v3": "ყვარებული",
        "group": "regular"
    },
    {
        "word": "სძულება",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😡",
        "subtext": "hate doing / hate someone / hate meetings / hate commuting",
        "form": "verb",
        "definitions": [
            {
                "text": "ძლიერი ანტიპათიის ქონა:",
                "examples": [
                    "მას სძულს გრძელი შეხვედრები:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "hated",
        "v3": "მოძულებული",
        "group": "regular"
    },
    {
        "word": "იმედოვნება",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🤞",
        "subtext": "hope for / hope to do / hope that / I hope so",
        "form": "verb",
        "definitions": [
            {
                "text": "სურვილი, რომ რაიმე მოხდეს:",
                "examples": [
                    "ვიმედოვნებ წელს დაწინაურებას:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "hoped",
        "v3": "იმედოვნებული",
        "group": "regular"
    },
    {
        "word": "გახსენება",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "remember to do / remember a name / remember clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "მეხსიერებაში ქონა:",
                "examples": [
                    "გთხოვთ, დაიმახსოვრეთ ვადები:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "remembered",
        "v3": "გახსენებული",
        "group": "regular"
    },
    {
        "word": "დავიწყება",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🤔",
        "subtext": "forget a name / forget to do / forget about / completely forget",
        "form": "verb",
        "definitions": [
            {
                "text": "ვერ გახსენება რაიმესი:",
                "examples": [
                    "არ დაგავიწყდეთ შეხვედრა:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "forgot",
        "v3": "დავიწყებული",
        "group": "irregular"
    },
    {
        "word": "გაგება",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "💡",
        "subtext": "understand a problem / understand someone / understand clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს მნიშვნელობის წვდომა:",
                "examples": [
                    "მე მესმის კონტრაქტი:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "understood",
        "v3": "გაგებული",
        "group": "irregular"
    },
    {
        "word": "გადაწყვეტა",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "⚖️",
        "subtext": "decide to do / decide on / make a decision / hard to decide",
        "form": "verb",
        "definitions": [
            {
                "text": "არჩევანის გაკეთება:",
                "examples": [
                    "მან გადაწყვიტა კარიერის შეცვლა:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "decided",
        "v3": "გადაწყვეტილი",
        "group": "regular"
    },
    {
        "word": "სიამოვნება",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "subtext": "enjoy doing / enjoy a meal / enjoy your work / enjoy life",
        "form": "verb",
        "definitions": [
            {
                "text": "სიამოვნების მიღება რაიმესგან:",
                "examples": [
                    "ის ნამდვილად სიამოვნებს სახლიდან მუშაობით:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "enjoyed",
        "v3": "ნასიამოვნები",
        "group": "regular"
    },
    {
        "word": "დანახვა",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👁️",
        "subtext": "see a doctor / see friends / see the problem / see clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "თვალებით აღქმა:",
                "examples": [
                    "მე ხვალ ვნახავ ჩემს ექიმს:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "saw",
        "v3": "ნანახი",
        "group": "irregular"
    },
    {
        "word": "გაგონება",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👂",
        "subtext": "hear news / hear from someone / hear a sound / hear clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "ყურით ბგერების აღქმა:",
                "examples": [
                    "მე მესმის მაღვიძარა ყოველ დილით:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "heard",
        "v3": "გაგონილი",
        "group": "irregular"
    },
    {
        "word": "გაღვიძება",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "wake up early / wake up late / wake up tired",
        "opposite": "sleep",
        "oppositeEmoji": "😴",
        "definitions": [
            {
                "text": "ძილის შეწყვეტა:",
                "examples": [
                    "მე ყოველ დილით ექვსის ნახევარზე ვიღვიძებ:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "woke up",
        "v3": "გაღვიძებული",
        "group": "irregular"
    },
    {
        "word": "ყურება",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "form": "verb",
        "subtext": "watch TV / watch a film / watch the news / watch closely",
        "definitions": [
            {
                "text": "რაიმესთვის ყურება გარკვეული დროით:",
                "examples": [
                    "ის ყოველ დილით უყურებს ამბებს:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "watched",
        "v3": "ნანახი",
        "group": "regular"
    },
    {
        "word": "ყურება",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "👀",
        "subtext": "look at / look for / look like / look happy",
        "form": "verb",
        "definitions": [
            {
                "text": "თვალების მიმართვა რაიმესკენ:",
                "examples": [
                    "შეხედეთ ამ ფოტოს:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "looked",
        "v3": "ნანახი",
        "group": "regular"
    },
    {
        "word": "თამაში",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "subtext": "play sport / play a game / play music / play a role",
        "form": "verb",
        "definitions": [
            {
                "text": "თამაშში ან სპორტში მონაწილეობა:",
                "examples": [
                    "ის ფეხბურთს თამაშობს შაბათ-კვირას:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "played",
        "v3": "ნათამაშები",
        "group": "regular"
    },
    {
        "word": "სირბილი",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏃",
        "subtext": "run a race / run a business / run out of / run late",
        "form": "verb",
        "definitions": [
            {
                "text": "ძალიან სწრაფად გადაადგილება:",
                "examples": [
                    "მე პარკში დავრბივარ:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ran",
        "v3": "ნარბენი",
        "group": "irregular"
    },
    {
        "word": "ჯდომა",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🪑",
        "subtext": "sit down / sit at a desk / sit in a meeting / sit quietly",
        "opposite": "stand",
        "oppositeEmoji": "🧍",
        "form": "verb",
        "definitions": [
            {
                "text": "მჯდომარე მდგომარეობაში ყოფნა:",
                "examples": [
                    "ის დღეში რვა საათს ზის თავის მაგიდასთან:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sat",
        "v3": "ნაჯდომი",
        "group": "irregular"
    },
    {
        "word": "დგომა",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🧍",
        "subtext": "stand up / stand in a queue / stand by / stand out",
        "opposite": "sit",
        "oppositeEmoji": "🪑",
        "form": "verb",
        "definitions": [
            {
                "text": "ვერტიკალურ მდგომარეობაში ყოფნა:",
                "examples": [
                    "ის ფეხზე დგას პრეზენტაციისას:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "stood",
        "v3": "მდგარი",
        "group": "irregular"
    },
    {
        "word": "შეხვედრა",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "ვინმესთან ერთად შეკრება:",
                "examples": [
                    "ჩვენ ყოველ ორშაბათს ვხვდებით:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "met",
        "v3": "შეხვედრილი",
        "subtext": "meet a client / meet a colleague / meet for lunch / meet online",
        "group": "irregular"
    },
    {
        "word": "სწავლა",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📚",
        "subtext": "learn a language / learn a skill / learn from / learn how to",
        "form": "verb",
        "definitions": [
            {
                "text": "ცოდნის ან უნარის შეძენა:",
                "examples": [
                    "ის ესპანურს სწავლობს ახალი სამსახურისთვის:"
                ]
            }
        ],
        "classification": "both",
        "aspect": "action",
        "v2": "learned / learnt",
        "v3": "ნასწავლი",
        "group": "both"
    },
    {
        "word": "შეცვლა",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🔄",
        "subtext": "change jobs / change your mind / change the plan / change something",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს სხვანაირად ქცევა:",
                "examples": [
                    "მან სამჯერ შეიცვალა სამსახური სამ წელიწადში:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "changed",
        "v3": "შეცვლილი",
        "group": "regular"
    },
    {
        "word": "გაჩერება",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛑",
        "subtext": "stop doing / stop working / stop a habit / stop someone",
        "form": "verb",
        "definitions": [
            {
                "text": "ქმედების შეწყვეტა:",
                "examples": [
                    "მან შეწყვიტა ავტობუსით სიარული:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stopped",
        "v3": "გაჩერებული",
        "group": "regular"
    },
    {
        "word": "დამატება",
        "level": "starter",
        "theme": "numbers_100_999_A1",
        "emoji": "➕",
        "subtext": "add some sugar / add to / add up / add a comment",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს მიმატება:",
                "examples": [
                    "დაამატეთ ცოტა შაქარი ჩაიში:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "added",
        "v3": "დამატებული",
        "group": "regular"
    },
    {
        "word": "მოგება",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "subtext": "win a game / win a prize / win an award / win a contract",
        "opposite": "lose",
        "oppositeEmoji": "📉",
        "form": "verb",
        "definitions": [
            {
                "text": "თამაშში ან კონკურსში საუკეთესო ყოფნა:",
                "examples": [
                    "ჩვენ გვინდა თამაშის მოგება:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "won",
        "v3": "მოგებული",
        "group": "irregular"
    },
    {
        "word": "ლოდინი",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "subtext": "wait for someone / wait in a queue / wait a moment",
        "form": "verb",
        "definitions": [
            {
                "text": "სადმე დარჩენა რაიმეს მოხდენამდე:",
                "examples": [
                    "ის ოცი წუთი ელოდა შეხვედრის დაწყებას:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "waited",
        "v3": "ნალოდინები",
        "group": "regular"
    },
    {
        "word": "კვდომა",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "⚰️",
        "subtext": "die of / die for / die from / die out",
        "opposite": "live",
        "oppositeEmoji": "🏠",
        "form": "verb",
        "definitions": [
            {
                "text": "სიცოცხლის შეწყვეტა:",
                "examples": [
                    "მცენარეები კვდებიან წყლის გარეშე:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "died",
        "v3": "მკვდარი",
        "group": "regular"
    },
    {
        "word": "გაგზავნა",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს გაგზავნა ვინმესთან:",
                "examples": [
                    "ის ოც იმეილს აგზავნის ლანჩამდე:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sent",
        "v3": "გაგზავნილი",
        "subtext": "send an email / send a message / send a report / send a file",
        "group": "irregular"
    },
    {
        "word": "დარჩენა",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏨",
        "subtext": "stay at home / stay in a hotel / stay up late / stay with someone",
        "form": "verb",
        "definitions": [
            {
                "text": "ადგილზე დარჩენის გაგრძელება:",
                "examples": [
                    "მე კვირაობით სახლში ვრჩები:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stayed",
        "v3": "დარჩენილი",
        "group": "regular"
    },
    {
        "word": "ვარდნა",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "emoji": "🍂",
        "subtext": "fall down / fall off / fall in love / fall asleep",
        "form": "verb",
        "definitions": [
            {
                "text": "ძირს დაცემა:",
                "examples": [
                    "ფოთლები ცვივა შემოდგომაზე:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "fell",
        "v3": "დაცემული",
        "group": "irregular"
    },
    {
        "word": "გავლა",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🏔️",
        "subtext": "pass an exam / pass the ball / pass time / pass the sugar",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს გვერდით გავლა ან გამოცდის ჩაბარება:",
                "examples": [
                    "მე პარკს გავდივარ სახლისკენ მიმავალ გზაზე:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "passed",
        "v3": "გავლილი",
        "group": "regular"
    },
    {
        "word": "გაყიდვა",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "subtext": "sell products / sell online / sell at the market / best seller",
        "opposite": "buy",
        "oppositeEmoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს მიცემა ფულის სანაცვლოდ:",
                "examples": [
                    "ისინი ხილს ყიდიან ბაზარში:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sold",
        "v3": "გაყიდული",
        "group": "irregular"
    },
    {
        "word": "წევა",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚜",
        "subtext": "pull the door / pull something / pull up / pull away",
        "opposite": "push",
        "oppositeEmoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს გამოქაჩვა:",
                "examples": [
                    "გამოქაჩეთ კარი მის გასაღებად:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pulled",
        "v3": "გამოწეული",
        "group": "regular"
    },
    {
        "word": "მიწოლა",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛒",
        "subtext": "push the button / push a cart / push away / push through",
        "opposite": "pull",
        "oppositeEmoji": "🚜",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს მიწოლა თქვენგან შორს:",
                "examples": [
                    "მიაწექით ღილაკს:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pushed",
        "v3": "მიწოლილი",
        "group": "regular"
    },
    {
        "word": "ტარება",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🎒",
        "subtext": "carry a bag / carry notes / carry out / carry on",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს ტარება თქვენთან ერთად:",
                "examples": [
                    "მე ყოველ შეხვედრაზე დამაქვს ლეპტოპი:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "carried",
        "v3": "ნატარები",
        "group": "regular"
    },
    {
        "word": "გატეხვა",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💔",
        "subtext": "break the glass / break a law / take a break / break down",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს ნაწილებად დაყოფა:",
                "examples": [
                    "არ გატეხოთ ჭიქა:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "broke",
        "v3": "გატეხილი",
        "group": "irregular"
    },
    {
        "word": "მიღება",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "📩",
        "subtext": "receive an email / receive a gift / receive payment / receive news",
        "form": "verb",
        "definitions": [
            {
                "text": "იმის მიღება, რაც ვინმემ გამოგიგზავნათ:",
                "examples": [
                    "მე ბევრ წერილს ვიღებ:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "received",
        "v3": "მიღებული",
        "group": "regular"
    },
    {
        "word": "დათანხმება",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "subtext": "agree with someone / agree to do / agree on / I agree",
        "form": "verb",
        "definitions": [
            {
                "text": "იგივე აზრის ქონა:",
                "examples": [
                    "მე გეთანხმებით:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "agreed",
        "v3": "დათანხმებული",
        "group": "regular"
    },
    {
        "word": "ხატვა",
        "level": "starter",
        "theme": "cinema_film_A1",
        "emoji": "🎨",
        "subtext": "draw a picture / draw a conclusion / draw attention / draw a line",
        "form": "verb",
        "definitions": [
            {
                "text": "სურათის შექმნა კალმით ან ფანქრით:",
                "examples": [
                    "მე მიყვარს ჩიტების ხატვა:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drew",
        "v3": "დახატული",
        "group": "irregular"
    },
    {
        "word": "გაზიარება",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "🍕",
        "subtext": "share a room / share information / share an idea / share with",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს ნაწილის მიცემა სხვებისთვის:",
                "examples": [
                    "მოდით, გავიზიაროთ პიცა:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "shared",
        "v3": "გაზიარებული",
        "group": "regular"
    },
    {
        "word": "ღიმილი",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "😊",
        "subtext": "smile at someone / a big smile / smile broadly",
        "opposite": "cry",
        "oppositeEmoji": "😢",
        "form": "verb",
        "definitions": [
            {
                "text": "ბედნიერი გამომეტყველება:",
                "examples": [
                    "მას ლამაზი ღიმილი აქვს:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "smiled",
        "v3": "გაღიმებული",
        "group": "regular"
    },
    {
        "word": "ტირილი",
        "level": "starter",
        "theme": "surprise_interest_A1",
        "emoji": "😢",
        "subtext": "cry for help / cry out / start crying / cry about something",
        "opposite": "smile",
        "oppositeEmoji": "😊",
        "form": "verb",
        "definitions": [
            {
                "text": "ცრემლების ღვრა:",
                "examples": [
                    "ბავშვი ტირის:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cried",
        "v3": "ნატირები",
        "group": "regular"
    },
    {
        "word": "ცეკვა",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "💃",
        "subtext": "dance to music / go dancing / dance together / slow dance",
        "form": "verb",
        "definitions": [
            {
                "text": "მოძრაობა მუსიკაზე:",
                "examples": [
                    "მე მიყვარს ცეკვა:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "danced",
        "v3": "ნაცეკვი",
        "group": "regular"
    },
    {
        "word": "სიმღერა",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "🎤",
        "subtext": "sing a song / sing along / sing well / lead singer",
        "form": "verb",
        "definitions": [
            {
                "text": "მუსიკალური ბგერების გამოცემა ხმით:",
                "examples": [
                    "მე მიყვარს შხაპის ქვეშ სიმღერა:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sang",
        "v3": "ნამღერი",
        "group": "irregular"
    },
    {
        "word": "ხტომა",
        "level": "starter",
        "theme": "playing_watching_sport_A1",
        "emoji": "🦘",
        "subtext": "jump high / jump over / jump up / jump in",
        "form": "verb",
        "definitions": [
            {
                "text": "ჰაერში ახტომა:",
                "examples": [
                    "შეგიძლიათ მაღლა ახტომა?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "jumped",
        "v3": "ნახტომი",
        "group": "regular"
    },
    {
        "word": "ცურვა",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏊",
        "subtext": "go swimming / swim across / swim laps / swim well",
        "form": "verb",
        "definitions": [
            {
                "text": "წყალში მოძრაობა:",
                "examples": [
                    "მე ყოველ დილით ვცურავ:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "swam",
        "v3": "ნაცურავი",
        "group": "irregular"
    },
    {
        "word": "სწავლა",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "study English / study for an exam / study hard / self-study",
        "form": "verb",
        "definitions": [
            {
                "text": "კითხვა და ვარჯიში ცოდნისთვის:",
                "examples": [
                    "ის სწავლობს პროფესიული კვალიფიკაციისთვის:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "studied",
        "v3": "ნასწავლი",
        "group": "regular"
    },
    {
        "word": "სწავლება",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "👨‍🏫",
        "subtext": "teach someone / teach a subject / teach how to / teach a class",
        "form": "verb",
        "definitions": [
            {
                "text": "ინსტრუქციების მიცემა რაიმე საგანში:",
                "examples": [
                    "ის ასწავლის კომუნიკაციის უნარებს:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "taught",
        "v3": "ნასწავლები",
        "group": "irregular"
    },
    {
        "word": "მგზავრობა",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🚆",
        "subtext": "commute to work / daily commute / long commute / commute by train",
        "form": "verb",
        "definitions": [
            {
                "text": "რეგულარული მგზავრობა სახლსა და სამუშაოს შორის:",
                "examples": [
                    "მე ქალაქში მატარებლით დავდივარ:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "commuted",
        "v3": "ნამგზავრები",
        "group": "regular"
    },
    {
        "word": "ქირაობა",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏠",
        "subtext": "rent a flat / rent a property / rent out a room",
        "form": "verb",
        "definitions": [
            {
                "text": "ფულის გადახდა სხვისი საკუთრების გამოყენებისთვის:",
                "examples": [
                    "ისინი ქირაობენ ოროთახიან ბინას:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "rented",
        "v3": "ნაქირავები",
        "group": "regular"
    },
    {
        "word": "ვარჯიში",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏋️",
        "form": "verb",
        "definitions": [
            {
                "text": "ფიზიკური აქტივობა ჯანმრთელობისთვის:",
                "examples": [
                    "ის კვირაში ოთხჯერ ვარჯიშობს დარბაზში:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "exercised",
        "v3": "ნავარჯიშევი",
        "subtext": "exercise regularly / exercise at the gym / exercise outdoors",
        "group": "regular"
    },
    {
        "word": "ღირებულება",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმე ფასის ქონა:",
                "examples": [
                    "ბინა თვეში ათას ორასი ევრო ღირს:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "cost",
        "v3": "ღირებული",
        "subtext": "cost a lot / cost money / cost too much / cost less",
        "group": "irregular"
    },
    {
        "word": "დაპატიჟება",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "ვინმეს თხოვნა სადმე მოსვლაზე:",
                "examples": [
                    "მათ დაპატიჟეს ყველა კოლეგა წვეულებაზე:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invited",
        "v3": "დაპატიჟებული",
        "subtext": "invite someone / invite to dinner / invite to a party",
        "group": "regular"
    },
    {
        "word": "ადგომა",
        "definitions": [
            {
                "text": "ლოგინიდან ადგომა:",
                "examples": [
                    "ის შვიდზე დგება და მაშინვე ყავას ადუღებს:"
                ]
            }
        ],
        "subtext": "get up early / get up late / get up quickly",
        "classification": "irregular",
        "aspect": "action",
        "v2": "got up",
        "v3": "ამდაგარი",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "irregular"
    },
    {
        "word": "საუზმობა",
        "definitions": [
            {
                "text": "დილის კვება:",
                "examples": [
                    "ის ყოველთვის საუზმობს სახლიდან გასვლამდე:"
                ]
            }
        ],
        "subtext": "have breakfast at home / have a quick breakfast / skip breakfast",
        "classification": "irregular",
        "aspect": "action",
        "v2": "had breakfast",
        "v3": "ნასაუზმევი",
        "theme": "daily_work_routines_A1",
        "emoji": "🍳",
        "level": "starter",
        "form": "verb",
        "group": "irregular"
    },
    {
        "word": "დაბრუნება",
        "definitions": [
            {
                "text": "სადმე დაბრუნება:",
                "examples": [
                    "ის ლანჩიდან ორ საათზე ბრუნდება:"
                ]
            }
        ],
        "subtext": "come back home / come back late / come back from a trip",
        "classification": "irregular",
        "aspect": "action",
        "v2": "came back",
        "v3": "დაბრუნებული",
        "theme": "daily_work_routines_A1",
        "emoji": "🔙",
        "level": "starter",
        "form": "verb",
        "group": "irregular"
    },
    {
        "word": "დაწოლა",
        "definitions": [
            {
                "text": "ლოგინში ჩაწოლა დასაძინებლად:",
                "examples": [
                    "ისინი ყოველ ღამე თერთმეტზე წვებიან:"
                ]
            }
        ],
        "subtext": "go to bed early / go to bed late / go to bed tired",
        "classification": "irregular",
        "aspect": "action",
        "v2": null,
        "v3": "დაწოლილი",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "irregular"
    },
    {
        "word": "შემოწმება",
        "definitions": [
            {
                "text": "რაიმეს დათვალიერება ან შემოწმება:",
                "examples": [
                    "მე ყოველ დილით ვამოწმებ იმეილებს:"
                ]
            }
        ],
        "subtext": "check emails / check messages / check a document / check the time",
        "classification": "regular",
        "aspect": "action",
        "v2": "checked",
        "v3": "შემოწმებული",
        "theme": "workplace_basics_A1",
        "emoji": "✅",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "პასუხი",
        "definitions": [
            {
                "text": "შეტყობინებაზე პასუხის გაცემა:",
                "examples": [
                    "ის ყოველთვის იმავე დღეს პასუხობს იმეილებს:"
                ]
            }
        ],
        "subtext": "reply to an email / reply quickly / reply to a message",
        "classification": "regular",
        "aspect": "action",
        "v2": "replied",
        "v3": "გაცემული",
        "theme": "workplace_basics_A1",
        "emoji": "↩️",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "წარდგენა",
        "definitions": [
            {
                "text": "რაიმეს ჩვენება ან ახსნა ჯგუფისთვის:",
                "examples": [
                    "ის ყოველ პარასკევს წარადგენს შედეგებს:"
                ]
            }
        ],
        "subtext": "present a report / present ideas / present to a client",
        "classification": "regular",
        "aspect": "action",
        "v2": "presented",
        "v3": "წარდგენილი",
        "theme": "workplace_basics_A1",
        "emoji": "📊",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "დასწრება",
        "definitions": [
            {
                "text": "ღონისძიებაზე ან შეხვედრაზე წასვლა:",
                "examples": [
                    "მე ყოველ ორშაბათს ვესწრები მენეჯმენტის შეხვედრას:"
                ]
            }
        ],
        "subtext": "attend a meeting / attend a course / attend an event",
        "classification": "regular",
        "aspect": "action",
        "v2": "attended",
        "v3": "დასწრებული",
        "theme": "workplace_basics_A1",
        "emoji": "📅",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "მართვა",
        "definitions": [
            {
                "text": "ადამიანებზე ან სიტუაციაზე პასუხისმგებლობა:",
                "examples": [
                    "ის რვაკაციან გუნდს მართავს:"
                ]
            }
        ],
        "subtext": "manage a team / manage a project / manage time / manage stress",
        "classification": "regular",
        "aspect": "action",
        "v2": "managed",
        "v3": "მართული",
        "theme": "workplace_basics_A1",
        "emoji": "👤",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "გადახდევინება",
        "definitions": [
            {
                "text": "მომსახურებისთვის ფულის მოთხოვნა:",
                "examples": [
                    "მექანიკოსმა სამასი ევრო გადაგვახდევინა:"
                ]
            }
        ],
        "subtext": "charge a fee / charge for a service / charge extra",
        "classification": "regular",
        "aspect": "action",
        "v2": "charged",
        "v3": "გადახდევინებული",
        "theme": "money_payment_A1",
        "emoji": "💳",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "წვდომა",
        "definitions": [
            {
                "text": "საკმარისი ფულის ქონა რაიმესთვის:",
                "examples": [
                    "მათ არ შეუძლიათ ცენტრში ბინის ყიდვა:"
                ]
            }
        ],
        "subtext": "afford a house / afford to travel / afford something",
        "classification": "regular",
        "aspect": "stative",
        "v2": "afforded",
        "v3": "წვდომილი",
        "theme": "money_payment_A1",
        "emoji": "🏦",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "ვალის ქონა",
        "definitions": [
            {
                "text": "ვინმესთვის ფულის გადახდის ვალდებულება:",
                "examples": [
                    "მას ბანკის ორმოცდაათი ათასი ევრო მართებს:"
                ]
            }
        ],
        "subtext": "owe money / owe someone / owe a lot / owe nothing",
        "classification": "regular",
        "aspect": "stative",
        "v2": "owed",
        "v3": "მართებული",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "გამომუშავება",
        "definitions": [
            {
                "text": "ფულის მიღება მუშაობისთვის:",
                "examples": [
                    "ის კარგ ხელფასს გამოიმუშავებს:"
                ]
            }
        ],
        "subtext": "earn a salary / earn money / earn more / earn enough",
        "classification": "regular",
        "aspect": "action",
        "v2": "earned",
        "v3": "გამომუშავებული",
        "theme": "money_payment_A1",
        "emoji": "💶",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "სტუმრობა",
        "definitions": [
            {
                "text": "ადამიანის ან ადგილის ნახვა:",
                "examples": [
                    "ის ყოველ მეორე შაბათ-კვირას სტუმრობს მშობლებს:"
                ]
            }
        ],
        "subtext": "visit family / visit a friend / visit a city / visit regularly",
        "classification": "regular",
        "aspect": "action",
        "v2": "visited",
        "v3": "ნასტუმრები",
        "theme": "family_life_A1",
        "emoji": "🏘️",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "აღნიშვნა",
        "definitions": [
            {
                "text": "რაიმე სასიამოვნოს გაკეთება განსაკუთრებულ დღეს:",
                "examples": [
                    "ისინი ერთად აღნიშნავენ იუბილეს:"
                ]
            }
        ],
        "subtext": "celebrate a birthday / celebrate success / celebrate together",
        "classification": "regular",
        "aspect": "action",
        "v2": "celebrated",
        "v3": "აღნიშნული",
        "theme": "leisure_activities_A1",
        "emoji": "🎉",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "რეკომენდაცია",
        "definitions": [
            {
                "text": "რაიმეს შეთავაზება:",
                "examples": [
                    "შეგიძლიათ მირჩიოთ კარგი რესტორანი ოფისთან ახლოს?"
                ]
            }
        ],
        "subtext": "recommend a place / recommend someone / recommend a film",
        "classification": "regular",
        "aspect": "action",
        "v2": "recommended",
        "v3": "რეკომენდებული",
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "ტკივილი",
        "definitions": [
            {
                "text": "ტკივილის მიყენება ან განცდა:",
                "examples": [
                    "ზურგი მტკივა მთელი დღე ჯდომისგან:"
                ]
            }
        ],
        "subtext": "hurt your back / hurt someone / hurt yourself / it hurts",
        "classification": "irregular",
        "aspect": "both",
        "v2": "hurt",
        "v3": "ნატკენი",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤕",
        "level": "starter",
        "form": "verb",
        "group": "irregular"
    },
    {
        "word": "დასვენება",
        "definitions": [
            {
                "text": "მუშაობის შეწყვეტა ენერგიის აღსადგენად:",
                "examples": [
                    "ის ყოველდღე ისვენებს ერთი საათით ლანჩის შემდეგ:"
                ]
            }
        ],
        "subtext": "rest at home / rest after work / need rest / get some rest",
        "classification": "regular",
        "aspect": "action",
        "v2": "rested",
        "v3": "დასვენებული",
        "theme": "daily_work_routines_A1",
        "emoji": "🛋️",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "გამოჯანმრთელება",
        "definitions": [
            {
                "text": "ჯანმრთელობის აღდგენა ავადმყოფობის შემდეგ:",
                "examples": [
                    "ის გამოჯანმრთელდა ზურგის ტრავმისგან:"
                ]
            }
        ],
        "subtext": "recover from illness / recover quickly / recover fully",
        "classification": "regular",
        "aspect": "action",
        "v2": "recovered",
        "v3": "გამოჯანმრთელებული",
        "theme": "medical_appointments_A1",
        "emoji": "🩹",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "დაჯავშნა",
        "definitions": [
            {
                "text": "ადგილის ან სერვისის წინასწარ შენახვა:",
                "examples": [
                    "მე ყოველთვის ონლაინ ვჯავშნი სასტუმროებს:"
                ]
            }
        ],
        "subtext": "book a hotel / book a flight / book a table / book in advance",
        "classification": "regular",
        "aspect": "action",
        "v2": "booked",
        "v3": "დაჯავშნილი",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "📖",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "ჩალაგება",
        "definitions": [
            {
                "text": "ნივთების ჩანთაში ჩალაგება მოგზაურობისთვის:",
                "examples": [
                    "ის წინა ღამეს ალაგებს ჩანთას:"
                ]
            }
        ],
        "subtext": "pack a bag / pack a suitcase / pack lightly",
        "classification": "regular",
        "aspect": "action",
        "v2": "packed",
        "v3": "ჩალაგებული",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🎒",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "გაუქმება",
        "definitions": [
            {
                "text": "დაგეგმილი რაიმეს შეწყვეტა:",
                "examples": [
                    "მას ფრენის გაუქმება მოუწია ავადმყოფობის გამო:"
                ]
            }
        ],
        "subtext": "cancel a flight / cancel a booking / cancel a meeting",
        "classification": "regular",
        "aspect": "action",
        "v2": "cancelled",
        "v3": "გაუქმებული",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "❌",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "გამოტოვება",
        "definitions": [
            {
                "text": "რაიმეს ვერ მიღწევა ან მონატრება:",
                "examples": [
                    "მან მატარებელზე დააგვიანა და ერთი საათი მოუწია ლოდინი:"
                ]
            }
        ],
        "subtext": "miss a train / miss a flight / miss someone / miss work",
        "classification": "regular",
        "aspect": "both",
        "v2": "missed",
        "v3": "გამოტოვებული",
        "theme": "public_transport_A1",
        "emoji": "🏃‍♂️",
        "level": "starter",
        "form": "verb",
        "group": "regular"
    },
    {
        "word": "შეკვეთა",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📦",
        "subtext": "order food / order a drink / order online / order supplies",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს მოთხოვნა, განსაკუთრებით საჭმლის:",
                "examples": [
                    "მე ყოველთვის ერთსა და იმავე ადგილას ვუკვეთავ ლანჩს:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ordered",
        "v3": "შეკვეთილი",
        "group": "regular"
    },
    {
        "word": "ახსნა",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "💡",
        "subtext": "explain a process / explain clearly / explain to someone",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს გასაგებად ქცევა დეტალებით:",
                "examples": [
                    "ის ყოველთვის უხსნის პროცესს გუნდის ახალ წევრებს:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "explained",
        "v3": "ახსნილი",
        "group": "regular"
    },
    {
        "word": "მადლობა",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🙏",
        "subtext": "thank someone / thank you for / many thanks",
        "form": "verb",
        "definitions": [
            {
                "text": "მადლიერების გამოხატვა:",
                "examples": [
                    "მან მადლობა გადაუხადა გუნდს მუშაობისთვის:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "thanked",
        "v3": "მადლობა გადახდილი",
        "group": "regular"
    },
    {
        "word": "წარდგენა",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "🤝",
        "subtext": "introduce yourself / introduce someone / introduce a topic",
        "form": "verb",
        "definitions": [
            {
                "text": "ვინმეს გაცნობა სხვისთვის:",
                "examples": [
                    "მან თავი წარადგინა შეხვედრის დასაწყისში:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "introduced",
        "v3": "წარდგენილი",
        "group": "regular"
    },
    {
        "word": "მოდუნება",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🧘",
        "subtext": "relax at home / relax after work / relax on holiday",
        "form": "verb",
        "definitions": [
            {
                "text": "მუშაობის შეწყვეტა და დასვენება:",
                "examples": [
                    "მე შაბათ-კვირას ვისვენებ და არასდროს ვამოწმებ იმეილებს:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "relaxed",
        "v3": "მოდუნებული",
        "group": "regular"
    },
    {
        "word": "შეკეთება",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🛠️",
        "subtext": "repair something / get repaired / repair costs",
        "form": "verb",
        "definitions": [
            {
                "text": "გატეხილი რაიმეს შეკეთება:",
                "examples": [
                    "სახლის პატრონი ნელა აკეთებს ნივთებს ბინაში:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "repaired",
        "v3": "შეკეთებული",
        "group": "regular"
    },
    {
        "word": "მოხდენა",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "❔",
        "subtext": "what happened / happen to someone / it happens / happen again",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს მოხდომა:",
                "examples": [
                    "რა მოხდა შეხვედრაზე?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "happened",
        "v3": "მოხდენილი",
        "group": "regular"
    },
    {
        "word": "ჩენა",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "🎭",
        "subtext": "seem fine / seem worried / seem happy / seem like",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმედ მოჩვენება:",
                "examples": [
                    "ის თავდაჯერებული ჩანს შეხვედრებზე:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "seemed",
        "v3": "მოჩვენებული",
        "group": "regular"
    },
    {
        "word": "ნიშნვნა",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "❔",
        "subtext": "mean something / what does it mean / mean to do / I didn't mean to",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმე მნიშვნელობის ქონა:",
                "examples": [
                    "რას ნიშნავს კონტრაქტის ეს პუნქტი?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "meant",
        "v3": "ნიშნებული",
        "group": "irregular"
    },
    {
        "word": "მიყოლა",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "👣",
        "subtext": "follow instructions / follow someone / follow the news / follow up",
        "form": "verb",
        "definitions": [
            {
                "text": "წესების ან ინსტრუქციების დაცვა:",
                "examples": [
                    "გთხოვთ, ყურადღებით მიჰყევით ინსტრუქციებს:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "followed",
        "v3": "მიყოლილი",
        "group": "regular"
    },
    {
        "word": "გაგრძელება",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "⏩",
        "subtext": "continue working / continue to do / continue with / continue a task",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს კეთების გაგრძელება შეუჩერებლად:",
                "examples": [
                    "მან გააგრძელა მუშაობა ექვსის შემდეგ:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "continued",
        "v3": "გაგრძელებული",
        "group": "regular"
    },
    {
        "word": "ზრდა",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📈",
        "subtext": "grow a business / grow quickly / grow by / grow into",
        "form": "verb",
        "definitions": [
            {
                "text": "ზომაში ან რაოდენობაში მატება:",
                "examples": [
                    "კომპანია გასულ წელს ოცი პროცენტით გაიზარდა:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "grew",
        "v3": "გაზრდილი",
        "group": "irregular"
    },
    {
        "word": "მოცვა",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "➕",
        "subtext": "include something / include in / not included / price includes",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს ნაწილად ქცევა:",
                "examples": [
                    "ფასი მოიცავს საუზმეს და ვახშამს:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "included",
        "v3": "მოცული",
        "group": "regular"
    },
    {
        "word": "გახდომა",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✨",
        "subtext": "become a manager / become popular / become clear / become important",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმედ ქცევა:",
                "examples": [
                    "ის მენეჯერი გახდა სულ რაღაც ორ წელიწადში:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "became",
        "v3": "გამხდარი",
        "group": "irregular"
    },
    {
        "word": "კუთვნილება",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📎",
        "subtext": "belong to someone / belong in / feel like you belong",
        "form": "verb",
        "definitions": [
            {
                "text": "სხვის საკუთრებაში ყოფნა:",
                "examples": [
                    "ეს ანგარიში ფინანსურ განყოფილებას ეკუთვნის:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "belonged",
        "v3": "კუთვნილი",
        "group": "regular"
    },
    {
        "word": "არჩევა",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👉",
        "subtext": "choose between / choose to do / choose carefully / choose a career",
        "form": "verb",
        "definitions": [
            {
                "text": "არჩევანის გაკეთება ვარიანტებიდან:",
                "examples": [
                    "მან ნახევარ განაკვეთზე მუშაობა აირჩია:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "chose",
        "v3": "არჩეული",
        "group": "irregular"
    },
    {
        "word": "შენება",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🏗️",
        "subtext": "build a career / build a team / build experience / build trust",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს აგება დროთა განმავლობაში:",
                "examples": [
                    "მან კარგი რეპუტაცია აიშენა ათი წლის განმავლობაში:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "built",
        "v3": "აშენებული",
        "group": "irregular"
    }
];
    const lang = "ka";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();