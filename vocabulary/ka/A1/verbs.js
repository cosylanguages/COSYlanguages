// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "ყოფნა",
        "level": "starter",
        "theme": "name_greeting",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ქონა",
        "level": "starter",
        "theme": "work",
        "emoji": "👜",
        "subtext": "",
        "synonyms": [
            "გქონდეს სამსახური",
            "ისადილო",
            "გქონდეს პრობლემა",
            "გქონდეს დრო"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "გრძნობა",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "🌡️",
        "subtext": "",
        "synonyms": [
            "თავს გრძნობდე დაღლილად",
            "უკეთესად",
            "ავად",
            "დასტრესილად"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "მიცემა",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🎁",
        "subtext": "",
        "synonyms": [
            "მისცე რჩევა",
            "ფული",
            "საჩუქარი",
            "ინფორმაცია"
        ],
        "opposite": "აღება",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "აღება",
        "level": "starter",
        "theme": "travel",
        "emoji": "👜",
        "subtext": "",
        "synonyms": [
            "წახვიდე ავტობუსით",
            "მიიღო წამალი",
            "შეისვენო",
            "დახარჯო დრო"
        ],
        "opposite": "მიცემა",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "მიღება",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📥",
        "subtext": "",
        "synonyms": [
            "იშოვო სამსახური",
            "დაიღალო",
            "გამოჯანმრთელდე",
            "მიხვიდე სახლში"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "დადება",
        "level": "starter",
        "theme": "furniture_objects",
        "emoji": "📥",
        "subtext": "",
        "synonyms": [
            "ჩაიცვა",
            "გადადო",
            "დადო ტელეფონი"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "გაკეთება",
        "level": "starter",
        "theme": "work",
        "emoji": "🏗️",
        "subtext": "",
        "synonyms": [
            "მოადუღო ყავა",
            "მიიღო გადაწყვეტილება",
            "დაუშვა შეცდომა",
            "იშოვო ფული"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "კეთება",
        "level": "starter",
        "theme": "work",
        "emoji": "🛠️",
        "subtext": "",
        "synonyms": [
            "გააკეთო სამუშაო",
            "იშოპინგო",
            "ივარჯიშო",
            "არაფერი აკეთო"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "გამოყენება",
        "level": "starter",
        "theme": "technology",
        "emoji": "🛠️",
        "subtext": "",
        "synonyms": [
            "გამოიყენო ტელეფონი",
            "ტრანსპორტი",
            "კომპიუტერი"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "გახსნა",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📖",
        "subtext": "გახსნა ანგარიში / გახსნა მაღაზია",
        "synonyms": [
            "გააღო კარი"
        ],
        "opposite": "დახურვა",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "დაკეტვა",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔒",
        "subtext": "",
        "synonyms": [
            "დაკეტო კარი",
            "დაიკეტოს ექვსზე",
            "დახურო შეხვედრა"
        ],
        "opposite": "გახსნა",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "დაწყება",
        "level": "starter",
        "theme": "work",
        "emoji": "▶️",
        "subtext": "",
        "synonyms": [
            "დაიწყო მუშაობა",
            "დაიწყო შეხვედრა",
            "დაიწყო ახალი სამსახური"
        ],
        "opposite": "დასრულება",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "დამთავრება",
        "level": "starter",
        "theme": "work",
        "emoji": "🏁",
        "subtext": "",
        "synonyms": [
            "დაამთავრო სამუშაო",
            "პროექტი",
            "ადრე",
            "გვიან"
        ],
        "opposite": "დაწყება",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "დახმარება",
        "level": "starter",
        "theme": "work",
        "emoji": "🤝",
        "subtext": "სთხოვო დახმარება",
        "synonyms": [
            "დაეხმარო ვინმეს",
            "დავალებაში"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ცდა",
        "level": "starter",
        "theme": "school",
        "emoji": "🎯",
        "subtext": "",
        "synonyms": [
            "ეცადო გააკეთო",
            "ბევრი ეცადო",
            "სცადო სიახლე"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ჩვენება",
        "level": "starter",
        "theme": "language",
        "emoji": "📽️",
        "subtext": "",
        "synonyms": [
            "აჩვენო ვინმეს როგორ",
            "აჩვენო დოკუმენტი",
            "გამოიჩინო ინტერესი"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "პოვნა",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔍",
        "subtext": "",
        "synonyms": [
            "იშოვო სამსახური",
            "გაიგო",
            "გაგიჭირდეს",
            "გამონახო დრო"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "შენახვა",
        "level": "starter",
        "theme": "work",
        "emoji": "📦",
        "subtext": "",
        "synonyms": [
            "გააგრძელო",
            "გაჩუმდე",
            "გქონდეს კონტაქტი"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "დაკარგვა",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📉",
        "subtext": "",
        "synonyms": [
            "დაკარგო სამსახური",
            "ფული",
            "დაიკლო წონაში"
        ],
        "opposite": "მოგება",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ჭრა",
        "level": "starter",
        "theme": "cooking_methods",
        "emoji": "✂️",
        "subtext": "",
        "synonyms": [
            "შეამცირო ხარჯები",
            "გაჭრა შუაზე"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "მობრუნება",
        "level": "starter",
        "theme": "directions_navigation",
        "emoji": "🔄",
        "subtext": "",
        "synonyms": [
            "ჩართო",
            "გამორთო",
            "მოუხვიო მარცხნივ"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "მოტანა",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🎁",
        "subtext": "",
        "synonyms": [
            "მოიყვანო ვინმე",
            "მოიტანო საჭმელი"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "თქმა",
        "level": "starter",
        "theme": "greetings_social_phrases",
        "emoji": "🗨️",
        "subtext": "",
        "synonyms": [
            "მიესალმო",
            "თქვა დიახ",
            "თქვა არა",
            "თქვა რამე"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "თხრობა",
        "level": "starter",
        "theme": "language",
        "emoji": "🗣️",
        "subtext": "",
        "synonyms": [
            "თქვა სიმართლე",
            "მოუყვე ვინმეს",
            "მოყვე ამბავი"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "კითხვა",
        "level": "starter",
        "theme": "language",
        "emoji": "❓",
        "subtext": "დასვა კითხვა",
        "synonyms": [
            "სთხოვო დახმარება",
            "იკითხო რაღაცის შესახებ"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ლაპარაკი",
        "level": "starter",
        "theme": "greetings_social_phrases",
        "emoji": "🗣️",
        "subtext": "",
        "synonyms": [
            "ელაპარაკო ვინმეს",
            "ინგლისურად",
            "გარკვევით"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "საუბარი",
        "level": "starter",
        "theme": "social",
        "emoji": "💬",
        "subtext": "",
        "synonyms": [
            "ელაპარაკო ვინმეს",
            "ილაპარაკო რამეზე",
            "გულახდილად"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "დარეკვა",
        "level": "starter",
        "theme": "technology",
        "emoji": "📞",
        "subtext": "",
        "synonyms": [
            "დაურეკო ვინმეს",
            "გადაურეკო",
            "მოიწვიო შეხვედრა"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "წერა",
        "level": "starter",
        "theme": "school",
        "emoji": "✍️",
        "subtext": "",
        "synonyms": [
            "დაწერო იმეილი",
            "ანგარიში",
            "წერილი",
            "შენიშვნები"
        ],
        "opposite": "კითხვა",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "კითხვა",
        "level": "starter",
        "theme": "school",
        "emoji": "📖",
        "subtext": "",
        "synonyms": [
            "წაიკითხო წიგნი",
            "ახალი ამბები",
            "ხელშეკრულება"
        ],
        "opposite": "წერა",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "მოსმენა",
        "level": "starter",
        "theme": "school",
        "emoji": "🎧",
        "subtext": "",
        "synonyms": [
            "მოუსმინო მუსიკას",
            "ყურადღებით",
            "მოუსმინო პოდკასტს"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "პასუხი",
        "level": "starter",
        "theme": "language",
        "emoji": "📞",
        "subtext": "",
        "synonyms": [
            "უპასუხო კითხვას",
            "ტელეფონს",
            "იმეილს"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "გამეორება",
        "level": "starter",
        "theme": "classroom_language",
        "emoji": "🔁",
        "subtext": "",
        "synonyms": [
            "გაიმეორო",
            "გაიმეორო შეკვეთა"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "სვლა",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚶",
        "subtext": "",
        "synonyms": [
            "წახვიდე სამუშაოზე",
            "სახლში",
            "გარეთ",
            "საყიდლებზე"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "მოსვლა",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏃‍♂️",
        "subtext": "",
        "synonyms": [
            "მოხვიდე სახლში",
            "სამუშაოზე",
            "დაბრუნდე",
            "მოხვიდე აქ"
        ],
        "opposite": "წასვლა",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "სიარული",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚶",
        "subtext": "",
        "synonyms": [
            "ფეხით წახვიდე სამსახურში",
            "სახლში",
            "ნელა იარო"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "მართვა",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚗",
        "subtext": "",
        "synonyms": [
            "წახვიდე მანქანით სამსახურში",
            "ატარო მანქანა"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ფრენა",
        "level": "starter",
        "theme": "travel",
        "emoji": "✈️",
        "subtext": "",
        "synonyms": [
            "გაფრინდე ქალაქში",
            "ბიზნეს კლასით",
            "ეკონომით"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ჩამოსვლა",
        "level": "starter",
        "theme": "work",
        "emoji": "🏁",
        "subtext": "",
        "synonyms": [
            "სამსახურში მისვლა",
            "დაგვიანებით მისვლა"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "წასვლა",
        "level": "starter",
        "theme": "work",
        "emoji": "🚪",
        "subtext": "სამსახურიდან წასვლა",
        "synonyms": [
            "სახლიდან გასვლა"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "გადასვლა",
        "level": "starter",
        "theme": "furniture",
        "emoji": "📦",
        "subtext": "",
        "synonyms": [
            "გადახვიდე ახალ ადგილას",
            "გადასახლდე"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "დაბრუნება",
        "level": "starter",
        "theme": "travel",
        "emoji": "🔙",
        "subtext": "",
        "synonyms": [
            "დაბრუნდე სახლში",
            "სამსახურში",
            "გადაურეკო"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "მოგზაურობა",
        "level": "starter",
        "theme": "public_transport",
        "emoji": "✈️",
        "subtext": "საზღვარგარეთ მოგზაურობა",
        "synonyms": [
            "სამსახურებრივი მგზავრობა"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ჭამა",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍎",
        "subtext": "",
        "synonyms": [
            "ისაუზმო",
            "ისადილო",
            "ივახშმო",
            "გარეთ ჭამო"
        ],
        "opposite": "დალევა",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "სმა",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥛",
        "subtext": "",
        "synonyms": [
            "დალიო ყავა",
            "ჩაი",
            "წყალი",
            "ლუდი"
        ],
        "opposite": "ჭამა",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ძილი",
        "level": "starter",
        "theme": "time",
        "emoji": "😴",
        "subtext": "კარგად ძილი / ცუდად ძილი",
        "opposite": "გაღვიძება",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "მომზადება",
        "level": "starter",
        "theme": "cooking_methods",
        "emoji": "🍳",
        "subtext": "ვახშმის მომზადება / სახლში მომზადება",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "დასუფთავება",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🧹",
        "subtext": "",
        "synonyms": [
            "ბინის დალაგება",
            "სამზარეულოს დალაგება"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ტარება",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👕",
        "subtext": "კოსტუმის ტარება / სათვალის ტარება",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "რეცხვა",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🧼",
        "subtext": "",
        "synonyms": [
            "გარეცხო ჭურჭელი",
            "ტანსაცმელი",
            "ხელები"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ყიდვა",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🛒",
        "subtext": "",
        "synonyms": [
            "იყიდო საჭმელი",
            "ბილეთი",
            "ონლაინ"
        ],
        "opposite": "გაყიდვა",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "გადახდა",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💳",
        "subtext": "",
        "synonyms": [
            "გადაიხადო გადასახადი",
            "ქირა",
            "ბარათით"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ხარჯვა",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💸",
        "subtext": "",
        "synonyms": [
            "დახარჯო ფული",
            "დრო"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "დაზოგვა",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💰",
        "subtext": "",
        "synonyms": [
            "დაზოგო ფული",
            "შეინახო"
        ],
        "opposite": "ხარჯვა",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "მუშაობა",
        "level": "starter",
        "theme": "work",
        "emoji": "💼",
        "subtext": "",
        "synonyms": [
            "იმუშაო სახლიდან",
            "სრულ განაკვეთზე",
            "ბევრი იმუშაო"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ცხოვრება",
        "level": "starter",
        "theme": "places",
        "emoji": "🏠",
        "subtext": "",
        "synonyms": [
            "იცხოვრო ბინაში",
            "მარტომ",
            "ვინმესთან",
            "საზღვარგარეთ"
        ],
        "opposite": "სიკვდილი",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ფიქრი",
        "level": "starter",
        "theme": "social",
        "emoji": "💭",
        "subtext": "",
        "synonyms": [
            "იფიქრო რამეზე",
            "გქონდეს აზრი",
            "კარგად დაფიქრდე"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ცოდნა",
        "level": "starter",
        "theme": "school",
        "emoji": "🧠",
        "subtext": "",
        "synonyms": [
            "იცნობდე ვინმეს",
            "იცოდე პასუხი",
            "იცოდე ადგილი"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ნდომა",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🙏",
        "subtext": "",
        "synonyms": [
            "გინდოდეს სამსახური",
            "წასვლა",
            "მეტი ფული",
            "დახმარება"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "საჭიროება",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🆘",
        "subtext": "",
        "synonyms": [
            "გჭირდებოდეს დახმარება",
            "დრო",
            "ფული",
            "დასვენება"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "მოწონება",
        "level": "starter",
        "theme": "emotions",
        "emoji": "👍",
        "subtext": "",
        "synonyms": [
            "მოგწონდეს მუშაობა",
            "მოგზაურობა",
            "ვინმე",
            "იდეა"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ყვარება",
        "level": "starter",
        "theme": "emotions",
        "emoji": "❤️",
        "subtext": "",
        "synonyms": [
            "გიყვარდეს ვინმე",
            "რამის კეთება",
            "ადგილი"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "სძულება",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😡",
        "subtext": "",
        "synonyms": [
            "გძულდეს რამის კეთება",
            "ვინმე",
            "შეხვედრები"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "იმედოვნება",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🤞",
        "subtext": "",
        "synonyms": [
            "გქონდეს იმედი",
            "გინდოდეს გააკეთო",
            "იმედი მაქვს"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "გახსენება",
        "level": "starter",
        "theme": "school",
        "emoji": "🧠",
        "subtext": "",
        "synonyms": [
            "გახსოვდეს გაკეთება",
            "გახსოვდეს სახელი",
            "ნათლად"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "დავიწყება",
        "level": "starter",
        "theme": "school",
        "emoji": "🤔",
        "subtext": "",
        "synonyms": [
            "დაგავიწყდეს სახელი",
            "დაგავიწყდეს გაკეთება"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "გაგება",
        "level": "starter",
        "theme": "language",
        "emoji": "💡",
        "subtext": "",
        "synonyms": [
            "გაიგო პრობლემა",
            "გაუგო ვინმეს",
            "ნათლად"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "გადაწყვეტა",
        "level": "starter",
        "theme": "social",
        "emoji": "⚖️",
        "subtext": "",
        "synonyms": [
            "გადაწყვიტო გაკეთება",
            "მიიღო გადაწყვეტილება"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "სიამოვნება",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😊",
        "subtext": "",
        "synonyms": [
            "ისიამოვნო კეთებით",
            "კერძით",
            "ცხოვრებით"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "დანახვა",
        "level": "starter",
        "theme": "body",
        "emoji": "👁️",
        "subtext": "",
        "synonyms": [
            "ნახო ექიმი",
            "მეგობრები",
            "დაინახო პრობლემა"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "გაგონება",
        "level": "starter",
        "theme": "body",
        "emoji": "👂",
        "subtext": "",
        "synonyms": [
            "გაიგო ამბები",
            "გაიგონო ხმა",
            "ნათლად"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "გაღვიძება",
        "level": "starter",
        "theme": "work",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "",
        "synonyms": [
            "გაიღვიძო ადრე",
            "გვიან",
            "დაღლილმა"
        ],
        "opposite": "ძილი",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ყურება",
        "level": "starter",
        "theme": "social",
        "emoji": "📺",
        "form": "verb",
        "subtext": "",
        "synonyms": [
            "უყურო ტელევიზორს",
            "ფილმს",
            "ახალ ამბებს"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ყურება",
        "level": "starter",
        "theme": "people",
        "emoji": "👀",
        "subtext": "",
        "synonyms": [
            "შეხედო",
            "მოძებნო",
            "გავდე ვინმეს",
            "ჩანდე ბედნიერი"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "თამაში",
        "level": "starter",
        "theme": "social",
        "emoji": "🎮",
        "subtext": "თამაში",
        "synonyms": [
            "ითამაშო სპორტი",
            "მუსიკა"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "სირბილი",
        "level": "starter",
        "theme": "sports",
        "emoji": "🏃",
        "subtext": "",
        "synonyms": [
            "ირბინო",
            "მართო ბიზნესი",
            "დააგვიანო"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ჯდომა",
        "level": "starter",
        "theme": "work",
        "emoji": "🪑",
        "subtext": "",
        "synonyms": [
            "დაჯდე",
            "დაჯდე მაგიდასთან",
            "იჯდე შეხვედრაზე"
        ],
        "opposite": "დგომა",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "დგომა",
        "level": "starter",
        "theme": "work",
        "emoji": "🧍",
        "subtext": "",
        "synonyms": [
            "ადგე",
            "იდგე რიგში",
            "გამოირჩეოდე"
        ],
        "opposite": "ჯდომა",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "შეხვედრა",
        "level": "starter",
        "theme": "work",
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
        "subtext": "",
        "synonyms": [
            "შეხვდე კლიენტს",
            "კოლეგას",
            "ისადილოთ"
        ],
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "სწავლა",
        "level": "starter",
        "theme": "school",
        "emoji": "📚",
        "subtext": "",
        "synonyms": [
            "ისწავლო ენა",
            "უნარი",
            "ისწავლო როგორ"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "შეცვლა",
        "level": "starter",
        "theme": "work",
        "emoji": "🔄",
        "subtext": "",
        "synonyms": [
            "შეიცვალო სამსახური",
            "აზრი",
            "გეგმა"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "გაჩერება",
        "level": "starter",
        "theme": "work",
        "emoji": "🛑",
        "subtext": "",
        "synonyms": [
            "შეწყვიტო კეთება",
            "მუშაობა",
            "გააჩერო ვინმე"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "დამატება",
        "level": "starter",
        "theme": "numbers",
        "emoji": "➕",
        "subtext": "",
        "synonyms": [
            "დაამატო შაქარი",
            "დაამატო",
            "დაამატო კომენტარი"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "მოგება",
        "level": "starter",
        "theme": "social",
        "emoji": "🏆",
        "subtext": "",
        "synonyms": [
            "მოიგო თამაში",
            "პრიზი",
            "კონტრაქტი"
        ],
        "opposite": "დაკარგვა",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ლოდინი",
        "level": "starter",
        "theme": "work",
        "emoji": "⏳",
        "subtext": "",
        "synonyms": [
            "დაელოდო ვინმეს",
            "იცადო რიგში",
            "დაიცადო ცოტა ხანი"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "კვდომა",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "⚰️",
        "subtext": "",
        "synonyms": [
            "მოკვდე რამით",
            "დაიღუპო"
        ],
        "opposite": "ცხოვრება",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "გაგზავნა",
        "level": "starter",
        "theme": "work",
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
        "subtext": "",
        "synonyms": [
            "გააგზავნო იმეილი",
            "შეტყობინება",
            "ანგარიში"
        ],
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "დარჩენა",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏨",
        "subtext": "",
        "synonyms": [
            "დარჩე სახლში",
            "სასტუმროში",
            "გვიანობამდე"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ვარდნა",
        "level": "starter",
        "theme": "nature",
        "emoji": "🍂",
        "subtext": "",
        "synonyms": [
            "ჩამოვარდე",
            "წაიქცე",
            "შეგიყვარდეს",
            "დაგეძინოს"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "გავლა",
        "level": "starter",
        "theme": "school",
        "emoji": "🏔️",
        "subtext": "",
        "synonyms": [
            "ჩააბარო გამოცდა",
            "გადააწოდო ბურთი",
            "გაატარო დრო"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "გაყიდვა",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "subtext": "",
        "synonyms": [
            "გაყიდო პროდუქტები",
            "ონლაინ",
            "ბაზარზე"
        ],
        "opposite": "ყიდვა",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "წევა",
        "level": "starter",
        "theme": "work",
        "emoji": "🚜",
        "subtext": "",
        "synonyms": [
            "გამოაღო კარი",
            "მოქაჩო რამე"
        ],
        "opposite": "ხელის კვრა",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "მიწოლა",
        "level": "starter",
        "theme": "work",
        "emoji": "🛒",
        "subtext": "",
        "synonyms": [
            "დააჭირო ღილაკს",
            "მიაწვე რამეს"
        ],
        "opposite": "წევა",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ტარება",
        "level": "starter",
        "theme": "work",
        "emoji": "🎒",
        "subtext": "",
        "synonyms": [
            "ატარო ჩანთა",
            "ჩანაწერები",
            "შეასრულო"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "გატეხვა",
        "level": "starter",
        "theme": "describing",
        "emoji": "💔",
        "subtext": "",
        "synonyms": [
            "გატეხო შუშა",
            "დაარღვიო კანონი",
            "შეისვენო"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "მიღება",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📩",
        "subtext": "",
        "synonyms": [
            "მიიღო იმეილი",
            "საჩუქარი",
            "გადახდა"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "დათანხმება",
        "level": "starter",
        "theme": "social",
        "emoji": "👍",
        "subtext": "",
        "synonyms": [
            "დაეთანხმო ვინმეს",
            "დაეთანხმო გაკეთებას"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ხატვა",
        "level": "starter",
        "theme": "cinema_film",
        "emoji": "🎨",
        "subtext": "",
        "synonyms": [
            "დახატო სურათი",
            "გამოიტანო დასკვნა"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "გაზიარება",
        "level": "starter",
        "theme": "social",
        "emoji": "🍕",
        "subtext": "",
        "synonyms": [
            "გაიყო ოთახი",
            "გააზიარო ინფორმაცია"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ღიმილი",
        "level": "starter",
        "theme": "people",
        "emoji": "😊",
        "subtext": "დიდი ღიმილი",
        "synonyms": [
            "გაუღიმო ვინმეს"
        ],
        "opposite": "ტირილი",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ტირილი",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😢",
        "subtext": "",
        "synonyms": [
            "ითხოვო დახმარება",
            "დაიყვირო",
            "ატირდე"
        ],
        "opposite": "ღიმილი",
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ცეკვა",
        "level": "starter",
        "theme": "music",
        "emoji": "💃",
        "subtext": "",
        "synonyms": [
            "იცეკვო მუსიკაზე",
            "წახვიდე საცეკვაოდ"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "სიმღერა",
        "level": "starter",
        "theme": "music",
        "emoji": "🎤",
        "subtext": "იმღერო სიმღერა",
        "synonyms": [
            "იმღერო კარგად"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ხტომა",
        "level": "starter",
        "theme": "sports",
        "emoji": "🦘",
        "subtext": "",
        "synonyms": [
            "ახტე მაღლა",
            "გადახტე",
            "ახტე"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ცურვა",
        "level": "starter",
        "theme": "sports",
        "emoji": "🏊",
        "subtext": "",
        "synonyms": [
            "წახვიდე საცურაოდ",
            "გადაცურო",
            "იცურო კარგად"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "სწავლა",
        "level": "starter",
        "theme": "school",
        "emoji": "📖",
        "subtext": "",
        "synonyms": [
            "ისწავლო ინგლისური",
            "იმეცადინო გამოცდისთვის"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "სწავლება",
        "level": "starter",
        "theme": "school",
        "emoji": "👨‍🏫",
        "subtext": "",
        "synonyms": [
            "ასწავლო ვინმეს",
            "ასწავლო საგანი"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "მგზავრობა",
        "level": "starter",
        "theme": "public_transport",
        "emoji": "🚆",
        "subtext": "",
        "synonyms": [
            "იმგზავრო სამსახურამდე",
            "ყოველდღიურად"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ქირაობა",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏠",
        "subtext": "",
        "synonyms": [
            "იქირაო ბინა",
            "გააქირაო ოთახი"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ვარჯიში",
        "level": "starter",
        "theme": "social",
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
        "subtext": "",
        "synonyms": [
            "ივარჯიშო რეგულარულად",
            "დარბაზში"
        ],
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ღირებულება",
        "level": "starter",
        "theme": "shopping",
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
        "subtext": "",
        "synonyms": [
            "ღირდეს ძვირი",
            "ღირდეს ფული"
        ],
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "დაპატიჟება",
        "level": "starter",
        "theme": "social",
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
        "subtext": "",
        "synonyms": [
            "დაპატიჟო ვინმე",
            "სადილზე",
            "წვეულებაზე"
        ],
        "group": "i_eb",
        "auxiliary": ""
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
        "subtext": "",
        "synonyms": [
            "ადგე ადრე",
            "გვიან",
            "სწრაფად"
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ადგა",
        "v3": "ამდაგარი",
        "theme": "work",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "i_eb",
        "auxiliary": ""
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
        "subtext": "",
        "synonyms": [
            "ისაუზმო სახლში",
            "სწრაფად ისაუზმო"
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ისაუზმა",
        "v3": "ნასაუზმევი",
        "theme": "work",
        "emoji": "🍳",
        "level": "starter",
        "form": "verb",
        "group": "i_eb",
        "auxiliary": ""
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
        "subtext": "",
        "synonyms": [
            "დაბრუნდე სახლში",
            "გვიან დაბრუნდე"
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "დაბრუნდა",
        "v3": "დაბრუნებული",
        "theme": "work",
        "emoji": "🔙",
        "level": "starter",
        "form": "verb",
        "group": "i_eb",
        "auxiliary": ""
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
        "subtext": "",
        "synonyms": [
            "დაწვე დასაძინებლად ადრე",
            "გვიან"
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": null,
        "v3": "დაწოლილი",
        "theme": "work",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "i_eb",
        "auxiliary": ""
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
        "subtext": "",
        "synonyms": [
            "შეამოწმო იმეილები",
            "შეტყობინებები"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "შეამოწმა",
        "v3": "შემოწმებული",
        "theme": "work",
        "emoji": "✅",
        "level": "starter",
        "form": "verb",
        "group": "i_eb",
        "auxiliary": ""
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
        "subtext": "",
        "synonyms": [
            "უპასუხო იმეილს",
            "უპასუხო სწრაფად"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "უპასუხა",
        "v3": "გაცემული",
        "theme": "work",
        "emoji": "↩️",
        "level": "starter",
        "form": "verb",
        "group": "i_eb",
        "auxiliary": ""
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
        "subtext": "",
        "synonyms": [
            "წარადგინო ანგარიში",
            "იდეები",
            "კლიენტთან"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "წარადგინა",
        "v3": "წარდგენილი",
        "theme": "work",
        "emoji": "📊",
        "level": "starter",
        "form": "verb",
        "group": "i_eb",
        "auxiliary": ""
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
        "subtext": "",
        "synonyms": [
            "დაესწრო შეხვედრას",
            "კურსს",
            "ღონისძიებას"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "დაესწრო",
        "v3": "დასწრებული",
        "theme": "work",
        "emoji": "📅",
        "level": "starter",
        "form": "verb",
        "group": "i_eb",
        "auxiliary": ""
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
        "subtext": "",
        "synonyms": [
            "მართო გუნდი",
            "პროექტი",
            "დრო"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "მართა",
        "v3": "მართული",
        "theme": "work",
        "emoji": "👤",
        "level": "starter",
        "form": "verb",
        "group": "i_eb",
        "auxiliary": ""
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
        "subtext": "",
        "synonyms": [
            "აიღო საფასური",
            "მომსახურებისთვის"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "გადაახდევინა",
        "v3": "გადახდევინებული",
        "theme": "shopping",
        "emoji": "💳",
        "level": "starter",
        "form": "verb",
        "group": "i_eb",
        "auxiliary": ""
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
        "subtext": "",
        "synonyms": [
            "შეძლო სახლის ყიდვა",
            "მგზავრობა"
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "შეძლო გადახდა",
        "v3": "წვდომილი",
        "theme": "shopping",
        "emoji": "🏦",
        "level": "starter",
        "form": "verb",
        "group": "i_eb",
        "auxiliary": ""
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
        "subtext": "",
        "synonyms": [
            "გემართოს ფული",
            "გემართოს ვინმესი"
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "ემართა",
        "v3": "მართებული",
        "theme": "shopping",
        "emoji": "💸",
        "level": "starter",
        "form": "verb",
        "group": "i_eb",
        "auxiliary": ""
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
        "subtext": "",
        "synonyms": [
            "აიღო ხელფასი",
            "იშოვო ფული"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "გამოიმუშავა",
        "v3": "გამომუშავებული",
        "theme": "shopping",
        "emoji": "💶",
        "level": "starter",
        "form": "verb",
        "group": "i_eb",
        "auxiliary": ""
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
        "subtext": "",
        "synonyms": [
            "ესტუმრო ოჯახს",
            "მეგობარს",
            "ქალაქს"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ესტუმრა",
        "v3": "ნასტუმრები",
        "theme": "social",
        "emoji": "🏘️",
        "level": "starter",
        "form": "verb",
        "group": "i_eb",
        "auxiliary": ""
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
        "subtext": "",
        "synonyms": [
            "აღნიშნო დაბადების დღე",
            "წარმატება"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "აღნიშნა",
        "v3": "აღნიშნული",
        "theme": "social",
        "emoji": "🎉",
        "level": "starter",
        "form": "verb",
        "group": "i_eb",
        "auxiliary": ""
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
        "subtext": "გაუწიო რეკომენდაცია ადგილს",
        "synonyms": [
            "ვინმეს"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "გაუწია რეკომενდაცია",
        "v3": "რეკომენდებული",
        "theme": "social",
        "emoji": "👍",
        "level": "starter",
        "form": "verb",
        "group": "i_eb",
        "auxiliary": ""
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
        "subtext": "",
        "synonyms": [
            "იტკინო ზურგი",
            "ატკინო ვინმეს",
            "გტკიოდეს"
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "hurt",
        "v3": "ნატკენი",
        "theme": "health_medicine",
        "emoji": "🤕",
        "level": "starter",
        "form": "verb",
        "group": "i_eb",
        "auxiliary": ""
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
        "subtext": "",
        "synonyms": [
            "დაისვენო სახლში",
            "სამუშაოს შემდეგ"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "დაისვენა",
        "v3": "დასვენებული",
        "theme": "work",
        "emoji": "🛋️",
        "level": "starter",
        "form": "verb",
        "group": "i_eb",
        "auxiliary": ""
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
        "subtext": "",
        "synonyms": [
            "გამოჯანმრთელდე",
            "სწრაფად"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "გამოჯანმრთელდა",
        "v3": "გამოჯანმრთელებული",
        "theme": "health_medicine",
        "emoji": "🩹",
        "level": "starter",
        "form": "verb",
        "group": "i_eb",
        "auxiliary": ""
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
        "subtext": "",
        "synonyms": [
            "დაჯავშნო სასტუმრო",
            "ფრენა",
            "მაგიდა"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "დაჯავშნა",
        "v3": "დაჯავშნილი",
        "theme": "travel",
        "emoji": "📖",
        "level": "starter",
        "form": "verb",
        "group": "i_eb",
        "auxiliary": ""
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
        "subtext": "",
        "synonyms": [
            "ჩაალაგო ჩანთა",
            "ჩემოდანი"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ჩაალაგა",
        "v3": "ჩალაგებული",
        "theme": "travel",
        "emoji": "🎒",
        "level": "starter",
        "form": "verb",
        "group": "i_eb",
        "auxiliary": ""
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
        "subtext": "",
        "synonyms": [
            "გააუქმო ფრენა",
            "ჯავშანი",
            "შეხვედრა"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "გააუქმა",
        "v3": "გაუქმებული",
        "theme": "travel",
        "emoji": "❌",
        "level": "starter",
        "form": "verb",
        "group": "i_eb",
        "auxiliary": ""
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
        "subtext": "",
        "synonyms": [
            "გაგიხდეს მატარებელი",
            "მოგენატროს ვინმე"
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "გამოტოვა",
        "v3": "გამოტოვებული",
        "theme": "public_transport",
        "emoji": "🏃‍♂️",
        "level": "starter",
        "form": "verb",
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "შეკვეთა",
        "level": "starter",
        "theme": "work",
        "emoji": "📦",
        "subtext": "",
        "synonyms": [
            "შეუკვეთო საჭმელი",
            "სასმელი",
            "ონლაინ"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ახსნა",
        "level": "starter",
        "theme": "work",
        "emoji": "💡",
        "subtext": "ახსნა პროცესი / ახსნა ნათლად",
        "synonyms": [
            "აუხსნა ვინმეს"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "მადლობა",
        "level": "starter",
        "theme": "greetings_social_phrases",
        "emoji": "🙏",
        "subtext": "გადაუხადო მადლობა",
        "synonyms": [
            "გმადლობთ"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "წარდგენა",
        "level": "starter",
        "theme": "name_greeting",
        "emoji": "🤝",
        "subtext": "",
        "synonyms": [
            "წარადგინო თავი",
            "გააცნო ვინმე"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "მოდუნება",
        "level": "starter",
        "theme": "social",
        "emoji": "🧘",
        "subtext": "",
        "synonyms": [
            "მოისვენო სახლში",
            "დაისვენო"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "შეკეთება",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🛠️",
        "subtext": "",
        "synonyms": [
            "შეაკეთო რამე",
            "შეკეთების ხარჯები"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "მოხდენა",
        "level": "starter",
        "theme": "social",
        "emoji": "❔",
        "subtext": "",
        "synonyms": [
            "რა მოხდა",
            "შეემთხვა ვინმეს",
            "ხდება"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ჩენა",
        "level": "starter",
        "theme": "social",
        "emoji": "🎭",
        "subtext": "",
        "synonyms": [
            "ჩანდე კარგად",
            "ჩანდე შეწუხებული"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ნიშნვნა",
        "level": "starter",
        "theme": "school",
        "emoji": "❔",
        "subtext": "",
        "synonyms": [
            "ნიშნავდეს რამეს",
            "რას ნიშნავს"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "მიყოლა",
        "level": "starter",
        "theme": "work",
        "emoji": "👣",
        "subtext": "",
        "synonyms": [
            "მიჰყვე ინსტრუქციებს",
            "მიჰყვე ვინმეს"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "გაგრძელება",
        "level": "starter",
        "theme": "school",
        "emoji": "⏩",
        "subtext": "",
        "synonyms": [
            "გააგრძელო მუშაობა",
            "გააგრძელო კეთება"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "ზრდა",
        "level": "starter",
        "theme": "work",
        "emoji": "📈",
        "subtext": "",
        "synonyms": [
            "გაზარდო ბიზნესი",
            "გაიზარდო სწრაფად"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "მოცვა",
        "level": "starter",
        "theme": "shopping",
        "emoji": "➕",
        "subtext": "",
        "synonyms": [
            "მოიცავდეს რამეს",
            "შედიოდეს"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "გახდომა",
        "level": "starter",
        "theme": "work",
        "emoji": "✨",
        "subtext": "",
        "synonyms": [
            "გახდე მენეჯერი",
            "გახდე პოპულარული"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "კუთვნილება",
        "level": "starter",
        "theme": "work",
        "emoji": "📎",
        "subtext": "გრძნობდე თავს თავის ადგილას",
        "synonyms": [
            "ეკუთვნოდეს ვინმეს"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "არჩევა",
        "level": "starter",
        "theme": "social",
        "emoji": "👉",
        "subtext": "",
        "synonyms": [
            "აირჩიე რამე",
            "აირჩიო კეთება",
            "ყურადღებით"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    },
    {
        "word": "შენება",
        "level": "starter",
        "theme": "work",
        "emoji": "🏗️",
        "subtext": "",
        "synonyms": [
            "ააწყო კარიერა",
            "შექმნა გუნდი"
        ],
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
        "group": "i_eb",
        "auxiliary": ""
    }
];
    const lang = "ka";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = (window.vocabularyData[lang] || []).concat(data);
})();