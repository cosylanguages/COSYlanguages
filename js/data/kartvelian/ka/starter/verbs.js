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
        "v2": "იყო",
        "v3": "ყოფილი",
        "group": "irregular"
    },
    {
        "word": "ქონა",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "👜",
        "subtext": "გქონდეს სამსახური / ისადილო / გქონდეს პრობლემა / გქონდეს დრო",
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
        "v2": "ჰქონდა",
        "v3": "ქონებული",
        "group": "irregular"
    },
    {
        "word": "გრძნობა",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🌡️",
        "subtext": "თავს გრძნობდე დაღლილად / უკეთესად / ავად / დასტრესილად",
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
        "v2": "იგრძნო",
        "v3": "გრძნობილი",
        "group": "irregular"
    },
    {
        "word": "მიცემა",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "subtext": "მისცე რჩევა / ფული / საჩუქარი / ინფორმაცია",
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
        "v2": "მისცა",
        "v3": "მიცემული",
        "group": "irregular"
    },
    {
        "word": "აღება",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "👜",
        "subtext": "წახვიდე ავტობუსით / მიიღო წამალი / შეისვენო / დახარჯო დრო",
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
        "v2": "აიღო",
        "v3": "აღებული",
        "group": "irregular"
    },
    {
        "word": "მიღება",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📥",
        "subtext": "იშოვო სამსახური / დაიღალო / გამოჯანმრთელდე / მიხვიდე სახლში",
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
        "v2": "მიიღო",
        "v3": "მიღებული",
        "group": "irregular"
    },
    {
        "word": "დადება",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "📥",
        "subtext": "ჩაიცვა / გადადო / დადო ტელეფონი",
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
        "v2": "დადო",
        "v3": "დადებული",
        "group": "irregular"
    },
    {
        "word": "გაკეთება",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏗️",
        "subtext": "მოადუღო ყავა / მიიღო გადაწყვეტილება / დაუშვა შეცდომა / იშოვო ფული",
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
        "v2": "გააკეთა",
        "v3": "გაკეთებული",
        "group": "irregular"
    },
    {
        "word": "კეთება",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "subtext": "გააკეთო სამუშაო / იშოპინგო / ივარჯიშო / არაფერი აკეთო",
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
        "subtext": "გამოიყენო ტელეფონი / ტრანსპორტი / კომპიუტერი",
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
        "v2": "გამოიყენა",
        "v3": "გამოყენებული",
        "group": "regular"
    },
    {
        "word": "გახსნა",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "subtext": "გააღო კარი / გახსნა ანგარიში / გახსნა მაღაზია",
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
        "subtext": "დაკეტო კარი / დაიკეტოს ექვსზე / დახურო შეხვედრა",
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
        "v2": "დაკეტა",
        "v3": "დაკეტილი",
        "group": "regular"
    },
    {
        "word": "დაწყება",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "subtext": "დაიწყო მუშაობა / დაიწყო შეხვედრა / დაიწყო ახალი სამსახური",
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
        "v2": "დაიწყო",
        "v3": "დაწყებული",
        "group": "regular"
    },
    {
        "word": "დამთავრება",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "დაამთავრო სამუშაო / პროექტი / ადრე / გვიან",
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
        "v2": "დაამთავრა",
        "v3": "დამთავრებული",
        "group": "regular"
    },
    {
        "word": "დახმარება",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🤝",
        "subtext": "დაეხმარო ვინმეს / დავალებაში / სთხოვო დახმარება",
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
        "v2": "დაეხმარა",
        "v3": "დახმარებული",
        "group": "regular"
    },
    {
        "word": "ცდა",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎯",
        "subtext": "ეცადო გააკეთო / ბევრი ეცადო / სცადო სიახლე",
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
        "v2": "ცადა",
        "v3": "ნაცადი",
        "group": "regular"
    },
    {
        "word": "ჩვენება",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📽️",
        "subtext": "აჩვენო ვინმეს როგორ / აჩვენო დოკუმენტი / გამოიჩინო ინტერესი",
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
        "v2": "აჩვენა",
        "v3": "ნაჩვენები",
        "group": "irregular"
    },
    {
        "word": "პოვნა",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔍",
        "subtext": "იშოვო სამსახური / გაიგო / გაგიჭირდეს / გამონახო დრო",
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
        "v2": "იპოვა",
        "v3": "ნაპოვნი",
        "group": "irregular"
    },
    {
        "word": "შენახვა",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "📦",
        "subtext": "გააგრძელო / გაჩუმდე / გქონდეს კონტაქტი",
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
        "v2": "შეინახა",
        "v3": "შენახული",
        "group": "irregular"
    },
    {
        "word": "დაკარგვა",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📉",
        "subtext": "დაკარგო სამსახური / ფული / დაიკლო წონაში",
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
        "v2": "დაკარგა",
        "v3": "დაკარგული",
        "group": "irregular"
    },
    {
        "word": "ჭრა",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "✂️",
        "subtext": "შეამცირო ხარჯები / გაჭრა შუაზე",
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
        "v2": "მოჭრა",
        "v3": "გაჭრილი",
        "group": "irregular"
    },
    {
        "word": "მობრუნება",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "🔄",
        "subtext": "ჩართო / გამორთო / მოუხვიო მარცხნივ",
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
        "subtext": "მოიყვანო ვინმე / მოიტანო საჭმელი",
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
        "v2": "მოიტანა",
        "v3": "მოტანილი",
        "group": "irregular"
    },
    {
        "word": "თქმა",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🗨️",
        "subtext": "მიესალმო / თქვა დიახ / თქვა არა / თქვა რამე",
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
        "v2": "თქვა",
        "v3": "თქმული",
        "group": "irregular"
    },
    {
        "word": "თხრობა",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "🗣️",
        "subtext": "თქვა სიმართლე / მოუყვე ვინმეს / მოყვე ამბავი",
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
        "subtext": "დასვა კითხვა / სთხოვო დახმარება / იკითხო რაღაცის შესახებ",
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
        "v2": "იკითხა",
        "v3": "ნაკითხი",
        "group": "regular"
    },
    {
        "word": "ლაპარაკი",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🗣️",
        "subtext": "ელაპარაკო ვინმეს / ინგლისურად / გარკვევით",
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
        "v2": "ილაპარაკა",
        "v3": "ნალაპარაკები",
        "group": "irregular"
    },
    {
        "word": "საუბარი",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "💬",
        "subtext": "ელაპარაკო ვინმეს / ილაპარაკო რამეზე / გულახდილად",
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
        "v2": "ისაუბრა",
        "v3": "ნასაუბრები",
        "group": "regular"
    },
    {
        "word": "დარეკვა",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📞",
        "subtext": "დაურეკო ვინმეს / გადაურეკო / მოიწვიო შეხვედრა",
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
        "v2": "დარეკა",
        "v3": "დარეკილი",
        "group": "regular"
    },
    {
        "word": "წერა",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "subtext": "დაწერო იმეილი / ანგარიში / წერილი / შენიშვნები",
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
        "v2": "დაწერა",
        "v3": "დაწერილი",
        "group": "irregular"
    },
    {
        "word": "კითხვა",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "წაიკითხო წიგნი / ახალი ამბები / ხელშეკრულება",
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
        "v2": "იკითხა",
        "v3": "წაკითხული",
        "group": "irregular"
    },
    {
        "word": "მოსმენა",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎧",
        "subtext": "მოუსმინო მუსიკას / ყურადღებით / მოუსმინო პოდკასტს",
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
        "v2": "მოისმინა",
        "v3": "მოსმენილი",
        "group": "regular"
    },
    {
        "word": "პასუხი",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📞",
        "subtext": "უპასუხო კითხვას / ტელეფონს / იმეილს",
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
        "v2": "უპასუხა",
        "v3": "გაცემული",
        "group": "regular"
    },
    {
        "word": "გამეორება",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🔁",
        "subtext": "გაიმეორო / გაიმეორო შეკვეთა",
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
        "v2": "გაიმეორა",
        "v3": "გამეორებული",
        "group": "regular"
    },
    {
        "word": "სვლა",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🚶",
        "subtext": "წახვიდე სამუშაოზე / სახლში / გარეთ / საყიდლებზე",
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
        "subtext": "მოხვიდე სახლში / სამუშაოზე / დაბრუნდე / მოხვიდე აქ",
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
        "v2": "მოვიდა",
        "v3": "მოსული",
        "group": "irregular"
    },
    {
        "word": "სიარული",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚶",
        "subtext": "ფეხით წახვიდე სამსახურში / სახლში / ნელა იარო",
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
        "v2": "იარა",
        "v3": "ვლილი",
        "group": "regular"
    },
    {
        "word": "მართვა",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚗",
        "subtext": "წახვიდე მანქანით სამსახურში / ატარო მანქანა",
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
        "v2": "მართა",
        "v3": "მართული",
        "group": "irregular"
    },
    {
        "word": "ფრენა",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "✈️",
        "subtext": "გაფრინდე ქალაქში / ბიზნეს კლასით / ეკონომით",
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
        "v2": "იფრინა",
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
        "v2": "წავიდა",
        "v3": "წასული",
        "group": "irregular"
    },
    {
        "word": "გადასვლა",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "📦",
        "subtext": "გადახვიდე ახალ ადგილას / გადასახლდე",
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
        "v2": "გადავიდა",
        "v3": "გადასული",
        "group": "regular"
    },
    {
        "word": "დაბრუნება",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🔙",
        "subtext": "დაბრუნდე სახლში / სამსახურში / გადაურეკო",
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
        "v2": "დაბრუნდა",
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
        "v2": "იმოგზაურა",
        "v3": "ნამოგზაურები",
        "group": "regular"
    },
    {
        "word": "ჭამა",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍎",
        "subtext": "ისაუზმო / ისადილო / ივახშმო / გარეთ ჭამო",
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
        "v2": "ჭამა",
        "v3": "ნაჭამი",
        "group": "irregular"
    },
    {
        "word": "სმა",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🥛",
        "subtext": "დალიო ყავა / ჩაი / წყალი / ლუდი",
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
        "v2": "ეძინა",
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
        "v2": "მოამზადა",
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
        "v2": "ატარა",
        "v3": "ნატარები",
        "group": "irregular"
    },
    {
        "word": "რეცხვა",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧼",
        "subtext": "გარეცხო ჭურჭელი / ტანსაცმელი / ხელები",
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
        "subtext": "იყიდო საჭმელი / ბილეთი / ონლაინ",
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
        "v2": "იყიდა",
        "v3": "ნაყიდი",
        "group": "irregular"
    },
    {
        "word": "გადახდა",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💳",
        "subtext": "გადაიხადო გადასახადი / ქირა / ბარათით",
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
        "v2": "გადაიხადა",
        "v3": "გადახდილი",
        "group": "irregular"
    },
    {
        "word": "ხარჯვა",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "subtext": "დახარჯო ფული / დრო",
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
        "v2": "დახარჯა",
        "v3": "დახარჯული",
        "group": "irregular"
    },
    {
        "word": "დაზოგვა",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "დაზოგო ფული / შეინახო",
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
        "v2": "დაზოგა",
        "v3": "დაზოგილი",
        "group": "regular"
    },
    {
        "word": "მუშაობა",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "იმუშაო სახლიდან / სრულ განაკვეთზე / ბევრი იმუშაო",
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
        "v2": "იმუშავა",
        "v3": "ნამუშევარი",
        "group": "regular"
    },
    {
        "word": "ცხოვრება",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "🏠",
        "subtext": "იცხოვრო ბინაში / მარტომ / ვინმესთან / საზღვარგარეთ",
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
        "v2": "იცხოვრა",
        "v3": "ნაცხოვრები",
        "group": "regular"
    },
    {
        "word": "ფიქრი",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "💭",
        "subtext": "იფიქრო რამეზე / გქონდეს აზრი / კარგად დაფიქრდე",
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
        "v2": "იფიქრა",
        "v3": "ნაფიქრი",
        "group": "irregular"
    },
    {
        "word": "ცოდნა",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "იცნობდე ვინმეს / იცოდე პასუხი / იცოდე ადგილი",
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
        "v2": "იცოდა",
        "v3": "ცნობილი",
        "group": "irregular"
    },
    {
        "word": "ნდომა",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🙏",
        "subtext": "გინდოდეს სამსახური / წასვლა / მეტი ფული / დახმარება",
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
        "v2": "უნდოდა",
        "v3": "ნანდომი",
        "group": "regular"
    },
    {
        "word": "საჭიროება",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🆘",
        "subtext": "გჭირდებოდეს დახმარება / დრო / ფული / დასვენება",
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
        "v2": "სჭირდებოდა",
        "v3": "საჭიროებული",
        "group": "regular"
    },
    {
        "word": "მოწონება",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "👍",
        "subtext": "მოგწონდეს მუშაობა / მოგზაურობა / ვინმე / იდეა",
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
        "v2": "მოეწონა",
        "v3": "მოწონებული",
        "group": "regular"
    },
    {
        "word": "ყვარება",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "❤️",
        "subtext": "გიყვარდეს ვინმე / რამის კეთება / ადგილი",
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
        "v2": "უყვარდა",
        "v3": "ყვარებული",
        "group": "regular"
    },
    {
        "word": "სძულება",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😡",
        "subtext": "გძულდეს რამის კეთება / ვინმე / შეხვედრები",
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
        "subtext": "გქონდეს იმედი / გინდოდეს გააკეთო / იმედი მაქვს",
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
        "subtext": "გახსოვდეს გაკეთება / გახსოვდეს სახელი / ნათლად",
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
        "v2": "გაახსენდა",
        "v3": "გახსენებული",
        "group": "regular"
    },
    {
        "word": "დავიწყება",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🤔",
        "subtext": "დაგავიწყდეს სახელი / დაგავიწყდეს გაკეთება",
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
        "v2": "დაავიწყდა",
        "v3": "დავიწყებული",
        "group": "irregular"
    },
    {
        "word": "გაგება",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "💡",
        "subtext": "გაიგო პრობლემა / გაუგო ვინმეს / ნათლად",
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
        "v2": "გაიგო",
        "v3": "გაგებული",
        "group": "irregular"
    },
    {
        "word": "გადაწყვეტა",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "⚖️",
        "subtext": "გადაწყვიტო გაკეთება / მიიღო გადაწყვეტილება",
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
        "v2": "გადაწყვიტა",
        "v3": "გადაწყვეტილი",
        "group": "regular"
    },
    {
        "word": "სიამოვნება",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "subtext": "ისიამოვნო კეთებით / კერძით / ცხოვრებით",
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
        "v2": "ისიამოვნა",
        "v3": "ნასიამოვნები",
        "group": "regular"
    },
    {
        "word": "დანახვა",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👁️",
        "subtext": "ნახო ექიმი / მეგობრები / დაინახო პრობლემა",
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
        "v2": "დაინახა",
        "v3": "ნანახი",
        "group": "irregular"
    },
    {
        "word": "გაგონება",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👂",
        "subtext": "გაიგო ამბები / გაიგონო ხმა / ნათლად",
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
        "v2": "გაიგონა",
        "v3": "გაგონილი",
        "group": "irregular"
    },
    {
        "word": "გაღვიძება",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "გაიღვიძო ადრე / გვიან / დაღლილმა",
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
        "v2": "გაიღვიძა",
        "v3": "გაღვიძებული",
        "group": "irregular"
    },
    {
        "word": "ყურება",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "form": "verb",
        "subtext": "უყურო ტელევიზორს / ფილმს / ახალ ამბებს",
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
        "v2": "უყურა",
        "v3": "ნანახი",
        "group": "regular"
    },
    {
        "word": "ყურება",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "👀",
        "subtext": "შეხედო / მოძებნო / გავდე ვინმეს / ჩანდე ბედნიერი",
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
        "v2": "უყურა",
        "v3": "ნანახი",
        "group": "regular"
    },
    {
        "word": "თამაში",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "subtext": "ითამაშო სპორტი / თამაში / მუსიკა",
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
        "v2": "ითამაშა",
        "v3": "ნათამაშები",
        "group": "regular"
    },
    {
        "word": "სირბილი",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏃",
        "subtext": "ირბინო / მართო ბიზნესი / დააგვიანო",
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
        "v2": "ირბინა",
        "v3": "ნარბენი",
        "group": "irregular"
    },
    {
        "word": "ჯდომა",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🪑",
        "subtext": "დაჯდე / დაჯდე მაგიდასთან / იჯდე შეხვედრაზე",
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
        "v2": "იჯდა",
        "v3": "ნაჯდომი",
        "group": "irregular"
    },
    {
        "word": "დგომა",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🧍",
        "subtext": "ადგე / იდგე რიგში / გამოირჩეოდე",
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
        "v2": "იდგა",
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
        "v2": "შეხვდა",
        "v3": "შეხვედრილი",
        "subtext": "შეხვდე კლიენტს / კოლეგას / ისადილოთ",
        "group": "irregular"
    },
    {
        "word": "სწავლა",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📚",
        "subtext": "ისწავლო ენა / უნარი / ისწავლო როგორ",
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
        "v2": "ისწავლა",
        "v3": "ნასწავლი",
        "group": "both"
    },
    {
        "word": "შეცვლა",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🔄",
        "subtext": "შეიცვალო სამსახური / აზრი / გეგმა",
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
        "v2": "შეცვალა",
        "v3": "შეცვლილი",
        "group": "regular"
    },
    {
        "word": "გაჩერება",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛑",
        "subtext": "შეწყვიტო კეთება / მუშაობა / გააჩერო ვინმე",
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
        "v2": "გაჩერდა",
        "v3": "გაჩერებული",
        "group": "regular"
    },
    {
        "word": "დამატება",
        "level": "starter",
        "theme": "numbers_100_999_A1",
        "emoji": "➕",
        "subtext": "დაამატო შაქარი / დაამატო / დაამატო კომენტარი",
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
        "v2": "დაამატა",
        "v3": "დამატებული",
        "group": "regular"
    },
    {
        "word": "მოგება",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "subtext": "მოიგო თამაში / პრიზი / კონტრაქტი",
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
        "v2": "მოიგო",
        "v3": "მოგებული",
        "group": "irregular"
    },
    {
        "word": "ლოდინი",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "subtext": "დაელოდო ვინმეს / იცადო რიგში / დაიცადო ცოტა ხანი",
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
        "v2": "ელოდა",
        "v3": "ნალოდინები",
        "group": "regular"
    },
    {
        "word": "კვდომა",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "⚰️",
        "subtext": "მოკვდე რამით / დაიღუპო",
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
        "v2": "გაგზავნა",
        "v3": "გაგზავნილი",
        "subtext": "გააგზავნო იმეილი / შეტყობინება / ანგარიში",
        "group": "irregular"
    },
    {
        "word": "დარჩენა",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏨",
        "subtext": "დარჩე სახლში / სასტუმროში / გვიანობამდე",
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
        "v2": "დარჩა",
        "v3": "დარჩენილი",
        "group": "regular"
    },
    {
        "word": "ვარდნა",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "emoji": "🍂",
        "subtext": "ჩამოვარდე / წაიქცე / შეგიყვარდეს / დაგეძინოს",
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
        "v2": "დავარდა",
        "v3": "დაცემული",
        "group": "irregular"
    },
    {
        "word": "გავლა",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🏔️",
        "subtext": "ჩააბარო გამოცდა / გადააწოდო ბურთი / გაატარო დრო",
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
        "v2": "გაიარა",
        "v3": "გავლილი",
        "group": "regular"
    },
    {
        "word": "გაყიდვა",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "subtext": "გაყიდო პროდუქტები / ონლაინ / ბაზარზე",
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
        "v2": "გაყიდა",
        "v3": "გაყიდული",
        "group": "irregular"
    },
    {
        "word": "წევა",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚜",
        "subtext": "გამოაღო კარი / მოქაჩო რამე",
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
        "v2": "გაწია",
        "v3": "გამოწეული",
        "group": "regular"
    },
    {
        "word": "მიწოლა",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛒",
        "subtext": "დააჭირო ღილაკს / მიაწვე რამეს",
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
        "subtext": "ატარო ჩანთა / ჩანაწერები / შეასრულო",
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
        "v2": "ატარა",
        "v3": "ნატარები",
        "group": "regular"
    },
    {
        "word": "გატეხვა",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💔",
        "subtext": "გატეხო შუშა / დაარღვიო კანონი / შეისვენო",
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
        "v2": "გატეხა",
        "v3": "გატეხილი",
        "group": "irregular"
    },
    {
        "word": "მიღება",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "📩",
        "subtext": "მიიღო იმეილი / საჩუქარი / გადახდა",
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
        "v2": "მიიღო",
        "v3": "მიღებული",
        "group": "regular"
    },
    {
        "word": "დათანხმება",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "subtext": "დაეთანხმო ვინმეს / დაეთანხმო გაკეთებას",
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
        "v2": "დაეთანხმა",
        "v3": "დათანხმებული",
        "group": "regular"
    },
    {
        "word": "ხატვა",
        "level": "starter",
        "theme": "cinema_film_A1",
        "emoji": "🎨",
        "subtext": "დახატო სურათი / გამოიტანო დასკვნა",
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
        "v2": "დახატა",
        "v3": "დახატული",
        "group": "irregular"
    },
    {
        "word": "გაზიარება",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "🍕",
        "subtext": "გაიყო ოთახი / გააზიარო ინფორმაცია",
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
        "v2": "გააზიარა",
        "v3": "გაზიარებული",
        "group": "regular"
    },
    {
        "word": "ღიმილი",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "😊",
        "subtext": "გაუღიმო ვინმეს / დიდი ღიმილი",
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
        "v2": "გაიღიმა",
        "v3": "გაღიმებული",
        "group": "regular"
    },
    {
        "word": "ტირილი",
        "level": "starter",
        "theme": "surprise_interest_A1",
        "emoji": "😢",
        "subtext": "ითხოვო დახმარება / დაიყვირო / ატირდე",
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
        "v2": "იტირა",
        "v3": "ნატირები",
        "group": "regular"
    },
    {
        "word": "ცეკვა",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "💃",
        "subtext": "იცეკვო მუსიკაზე / წახვიდე საცეკვაოდ",
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
        "v2": "იცეკვა",
        "v3": "ნაცეკვი",
        "group": "regular"
    },
    {
        "word": "სიმღერა",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "🎤",
        "subtext": "იმღერო სიმღერა / იმღერო კარგად",
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
        "v2": "იმღერა",
        "v3": "ნამღერი",
        "group": "irregular"
    },
    {
        "word": "ხტომა",
        "level": "starter",
        "theme": "playing_watching_sport_A1",
        "emoji": "🦘",
        "subtext": "ახტე მაღლა / გადახტე / ახტე",
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
        "v2": "გადახტა",
        "v3": "ნახტომი",
        "group": "regular"
    },
    {
        "word": "ცურვა",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏊",
        "subtext": "წახვიდე საცურაოდ / გადაცურო / იცურო კარგად",
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
        "v2": "იცურავა",
        "v3": "ნაცურავი",
        "group": "irregular"
    },
    {
        "word": "სწავლა",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "ისწავლო ინგლისური / იმეცადინო გამოცდისთვის",
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
        "v2": "ისწავლა",
        "v3": "ნასწავლი",
        "group": "regular"
    },
    {
        "word": "სწავლება",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "👨‍🏫",
        "subtext": "ასწავლო ვინმეს / ასწავლო საგანი",
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
        "v2": "ასწავლა",
        "v3": "ნასწავლები",
        "group": "irregular"
    },
    {
        "word": "მგზავრობა",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🚆",
        "subtext": "იმგზავრო სამსახურამდე / ყოველდღიურად",
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
        "v2": "იმგზავრა",
        "v3": "ნამგზავრები",
        "group": "regular"
    },
    {
        "word": "ქირაობა",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏠",
        "subtext": "იქირაო ბინა / გააქირაო ოთახი",
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
        "v2": "იქირავა",
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
        "v2": "ივარჯიშა",
        "v3": "ნავარჯიშევი",
        "subtext": "ივარჯიშო რეგულარულად / დარბაზში",
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
        "v2": "ღირდა",
        "v3": "ღირებული",
        "subtext": "ღირდეს ძვირი / ღირდეს ფული",
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
        "v2": "დაპატიჟა",
        "v3": "დაპატიჟებული",
        "subtext": "დაპატიჟო ვინმე / სადილზე / წვეულებაზე",
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
        "subtext": "ადგე ადრე / გვიან / სწრაფად",
        "classification": "irregular",
        "aspect": "action",
        "v2": "ადგა",
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
        "subtext": "ისაუზმო სახლში / სწრაფად ისაუზმო",
        "classification": "irregular",
        "aspect": "action",
        "v2": "ისაუზმა",
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
        "subtext": "დაბრუნდე სახლში / გვიან დაბრუნდე",
        "classification": "irregular",
        "aspect": "action",
        "v2": "დაბრუნდა",
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
        "subtext": "დაწვე დასაძინებლად ადრე / გვიან",
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
        "subtext": "შეამოწმო იმეილები / შეტყობინებები",
        "classification": "regular",
        "aspect": "action",
        "v2": "შეამოწმა",
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
        "subtext": "უპასუხო იმეილს / უპასუხო სწრაფად",
        "classification": "regular",
        "aspect": "action",
        "v2": "უპასუხა",
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
        "subtext": "წარადგინო ანგარიში / იდეები / კლიენტთან",
        "classification": "regular",
        "aspect": "action",
        "v2": "წარადგინა",
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
        "subtext": "დაესწრო შეხვედრას / კურსს / ღონისძიებას",
        "classification": "regular",
        "aspect": "action",
        "v2": "დაესწრო",
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
        "subtext": "მართო გუნდი / პროექტი / დრო",
        "classification": "regular",
        "aspect": "action",
        "v2": "მართა",
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
        "subtext": "აიღო საფასური / მომსახურებისთვის",
        "classification": "regular",
        "aspect": "action",
        "v2": "გადაახდევინა",
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
        "subtext": "შეძლო სახლის ყიდვა / მგზავრობა",
        "classification": "regular",
        "aspect": "stative",
        "v2": "შეძლო გადახდა",
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
        "subtext": "გემართოს ფული / გემართოს ვინმესი",
        "classification": "regular",
        "aspect": "stative",
        "v2": "ემართა",
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
        "subtext": "აიღო ხელფასი / იშოვო ფული",
        "classification": "regular",
        "aspect": "action",
        "v2": "გამოიმუშავა",
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
        "subtext": "ესტუმრო ოჯახს / მეგობარს / ქალაქს",
        "classification": "regular",
        "aspect": "action",
        "v2": "ესტუმრა",
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
        "subtext": "აღნიშნო დაბადების დღე / წარმატება",
        "classification": "regular",
        "aspect": "action",
        "v2": "აღნიშნა",
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
        "subtext": "გაუწიო რეკომენდაცია ადგილს / ვინმეს",
        "classification": "regular",
        "aspect": "action",
        "v2": "გაუწია რეკომενდაცია",
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
        "subtext": "იტკინო ზურგი / ატკინო ვინმეს / გტკიოდეს",
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
        "subtext": "დაისვენო სახლში / სამუშაოს შემდეგ",
        "classification": "regular",
        "aspect": "action",
        "v2": "დაისვენა",
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
        "subtext": "გამოჯანმრთელდე / სწრაფად",
        "classification": "regular",
        "aspect": "action",
        "v2": "გამოჯანმრთელდა",
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
        "subtext": "დაჯავშნო სასტუმრო / ფრენა / მაგიდა",
        "classification": "regular",
        "aspect": "action",
        "v2": "დაჯავშნა",
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
        "subtext": "ჩაალაგო ჩანთა / ჩემოდანი",
        "classification": "regular",
        "aspect": "action",
        "v2": "ჩაალაგა",
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
        "subtext": "გააუქმო ფრენა / ჯავშანი / შეხვედრა",
        "classification": "regular",
        "aspect": "action",
        "v2": "გააუქმა",
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
        "subtext": "გაგიხდეს მატარებელი / მოგენატროს ვინმე",
        "classification": "regular",
        "aspect": "both",
        "v2": "გამოტოვა",
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
        "subtext": "შეუკვეთო საჭმელი / სასმელი / ონლაინ",
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
        "v2": "შეუკვეთა",
        "v3": "შეკვეთილი",
        "group": "regular"
    },
    {
        "word": "ახსნა",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "💡",
        "subtext": "ახსნა პროცესი / ახსნა ნათლად / აუხსნა ვინმეს",
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
        "v2": "აუხსნა",
        "v3": "ახსნილი",
        "group": "regular"
    },
    {
        "word": "მადლობა",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🙏",
        "subtext": "გადაუხადო მადლობა / გმადლობთ",
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
        "v2": "გადაუხადა მადლობა",
        "v3": "მადლობა გადახდილი",
        "group": "regular"
    },
    {
        "word": "წარდგენა",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "🤝",
        "subtext": "წარადგინო თავი / გააცნო ვინმე",
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
        "v2": "წარადგინა",
        "v3": "წარდგენილი",
        "group": "regular"
    },
    {
        "word": "მოდუნება",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🧘",
        "subtext": "მოისვენო სახლში / დაისვენო",
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
        "v2": "მოდუნდა",
        "v3": "მოდუნებული",
        "group": "regular"
    },
    {
        "word": "შეკეთება",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🛠️",
        "subtext": "შეაკეთო რამე / შეკეთების ხარჯები",
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
        "v2": "შეაკეთა",
        "v3": "შეკეთებული",
        "group": "regular"
    },
    {
        "word": "მოხდენა",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "❔",
        "subtext": "რა მოხდა / შეემთხვა ვინმეს / ხდება",
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
        "v2": "მოხდა",
        "v3": "მოხდენილი",
        "group": "regular"
    },
    {
        "word": "ჩენა",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "🎭",
        "subtext": "ჩანდე კარგად / ჩანდე შეწუხებული",
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
        "subtext": "ნიშნავდეს რამეს / რას ნიშნავს",
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
        "subtext": "მიჰყვე ინსტრუქციებს / მიჰყვე ვინმეს",
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
        "v2": "მიჰყვა",
        "v3": "მიყოლილი",
        "group": "regular"
    },
    {
        "word": "გაგრძელება",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "⏩",
        "subtext": "გააგრძელო მუშაობა / გააგრძელო კეთება",
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
        "v2": "გააგრძელა",
        "v3": "გაგრძელებული",
        "group": "regular"
    },
    {
        "word": "ზრდა",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📈",
        "subtext": "გაზარდო ბიზნესი / გაიზარდო სწრაფად",
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
        "v2": "გაიზარდა",
        "v3": "გაზრდილი",
        "group": "irregular"
    },
    {
        "word": "მოცვა",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "➕",
        "subtext": "მოიცავდეს რამეს / შედიოდეს",
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
        "v2": "მოიცვა",
        "v3": "მოცული",
        "group": "regular"
    },
    {
        "word": "გახდომა",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✨",
        "subtext": "გახდე მენეჯერი / გახდე პოპულარული",
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
        "v2": "გახდა",
        "v3": "გამხდარი",
        "group": "irregular"
    },
    {
        "word": "კუთვნილება",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📎",
        "subtext": "ეკუთვნოდეს ვინმეს / გრძნობდე თავს თავის ადგილას",
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
        "v2": "ეკუთვნოდა",
        "v3": "კუთვნილი",
        "group": "regular"
    },
    {
        "word": "არჩევა",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👉",
        "subtext": "აირჩიო რამე / აირჩիო კეთება / ყურადღებით",
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
        "v2": "აირჩია",
        "v3": "არჩეული",
        "group": "irregular"
    },
    {
        "word": "შენება",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🏗️",
        "subtext": "ააწყო კარიერა / შექმნა გუნდი",
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
})();