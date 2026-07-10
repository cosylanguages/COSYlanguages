// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "მაღალი",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "საშუალოზე მაღალი სიმაღლის:",
                "examples": [
                    "ის ჩვენს გუნდში ყველაზე მაღალია:"
                ]
            }
        ],
        "subtext": "მაღალი შენობა / მაღალი ადამიანი / საკმარისად მაღალი",
        "comparative": "უფრო მაღალი",
        "superlative": "ყველაზე მაღალი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_001",
        "lang": "ka",
        "emoji": "✨",
        "transcription": "",
        "antonyms": [
            "მოკლე"
        ]
    },
    {
        "word": "მოკლე",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "პატარა მანძილის ან ხანგრძლივობის:",
                "examples": [
                    "მან მოკლე შესვენება აიღო:"
                ]
            }
        ],
        "subtext": "მოკლე მგზავრობა / მოკლე თმა / ძალიან მოკლე",
        "comparative": "უფრო მოკლე",
        "superlative": "ყველაზე მოკლე",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_002",
        "lang": "ka",
        "emoji": "✨",
        "transcription": "",
        "antonyms": [
            "მაღალი"
        ]
    },
    {
        "word": "ახალგაზრდა",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "ცხოვრების დასაწყისში მყოფი:",
                "examples": [
                    "ჩვენი გუნდი ძალიან ახალგაზრდაა:"
                ]
            }
        ],
        "subtext": "ახალგაზრდა ადამიანი / ახალგაზრდა პროფესიონალი / გულით ახალგაზრდა",
        "comparative": "უფრო ახალგაზრდა",
        "superlative": "ყველაზე ახალგაზრდა",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_003",
        "lang": "ka",
        "emoji": "✨",
        "transcription": "",
        "antonyms": [
            "ძველი"
        ]
    },
    {
        "word": "ძველი",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "დიდი ხნის წინ შექმნილი:",
                "examples": [
                    "ჩვენი ოფისი ძველ შენობაშია:"
                ]
            }
        ],
        "subtext": "ძველი მეგობარი / ძველი ჩვევები / ძალიან ძველი",
        "comparative": "უფრო ძველი",
        "superlative": "ყველაზე ძველი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_004",
        "lang": "ka",
        "emoji": "✨",
        "transcription": "",
        "antonyms": [
            "ახალგაზრდა"
        ]
    },
    {
        "word": "მზიანი",
        "level": "starter",
        "theme": "nature",
        "emoji": "☀️",
        "form": "adjective",
        "definitions": [
            {
                "text": "მზით სავსე:",
                "examples": [
                    "მე მიყვარს მზიანი დღეები:"
                ]
            }
        ],
        "subtext": "მზიანი დღე / მზიანი ამინდი / მზიანი პერიოდი",
        "comparative": "უფრო მზიანი",
        "superlative": "ყველაზე მზიანი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_005",
        "lang": "ka",
        "transcription": ""
    },
    {
        "word": "წვიმიანი",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌧️",
        "form": "adjective",
        "definitions": [
            {
                "text": "წვიმით:",
                "examples": [
                    "დღეს წვიმიანი დღეა:"
                ]
            }
        ],
        "subtext": "წვიმიანი დღე / წვიმიანი ამინდი",
        "synonyms": [
            "წვიმების სეზონი"
        ],
        "comparative": "უფრო წვიმიანი",
        "superlative": "ყველაზე წვიმიანი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_006",
        "lang": "ka",
        "transcription": ""
    },
    {
        "word": "ცხელი",
        "level": "starter",
        "theme": "nature",
        "emoji": "🔥",
        "form": "adjective",
        "subtext": "ცხელი ამინდი / ცხელი სასმელი / ძალიან ცხელი",
        "definitions": [
            {
                "text": "მაღალი ტემპერატურის მქონე:",
                "examples": [
                    "ოფისში დღეს ძალიან ცხელა:"
                ]
            }
        ],
        "comparative": "უფრო ცხელი",
        "superlative": "ყველაზე ცხელი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_007",
        "lang": "ka",
        "transcription": "",
        "antonyms": [
            "ცივი"
        ]
    },
    {
        "word": "ცივი",
        "level": "starter",
        "theme": "nature",
        "emoji": "❄️",
        "form": "adjective",
        "subtext": "ძალიან ცივი / ცივი დილა / ცივი სასმელი",
        "definitions": [
            {
                "text": "დაბალი ტემპერატურის მქონე:",
                "examples": [
                    "მე მიყვარს ცივი წყლის სმა:"
                ]
            }
        ],
        "comparative": "უფრო ცივი",
        "superlative": "ყველაზე ცივი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_008",
        "lang": "ka",
        "transcription": "",
        "antonyms": [
            "ცხელი"
        ]
    },
    {
        "word": "ჩვეულებრივი",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "ჩვეულებრივი ან ნორმალური; არა სპეციალური:",
                "examples": [
                    "ეს ჩვეულებრივი დღე იყო."
                ]
            }
        ],
        "subtext": "ჩვეულებრივი დღე / ჩვეულებრივი ცხოვრება",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_009",
        "lang": "ka",
        "emoji": "✨",
        "transcription": "",
        "antonyms": [
            "სპეციალური"
        ]
    },
    {
        "word": "იაფი",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "form": "adjective",
        "subtext": "იაფი ფრენა / ძალიან იაფი",
        "synonyms": [
            "დაბალი ფასი"
        ],
        "definitions": [
            {
                "text": "ცოტა ფული რომ ღირს:",
                "examples": [
                    "ოფისთან ახლოს მდებარე რესტორანი საკმაოდ იაფია:"
                ]
            }
        ],
        "comparative": "უფრო იაფი",
        "superlative": "ყველაზე იაფი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_010",
        "lang": "ka",
        "transcription": "",
        "antonyms": [
            "ძვირი"
        ]
    },
    {
        "word": "ძვირი",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💎",
        "form": "adjective",
        "subtext": "ძვირი ფასი / ძალიან ძვირი / ძვირი სიამოვნება",
        "definitions": [
            {
                "text": "ბევრი ფული რომ ღირს:",
                "examples": [
                    "ეს მანქანა ზედმეტად ძვირია:"
                ]
            }
        ],
        "comparative": "უფრო ძვირი",
        "superlative": "ყველაზე ძვირი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_011",
        "lang": "ka",
        "transcription": "",
        "antonyms": [
            "იაფი"
        ]
    },
    {
        "word": "კარგი",
        "level": "starter",
        "theme": "describing",
        "emoji": "👍",
        "form": "adjective",
        "subtext": "კარგი იდეა / კარგი ფასი",
        "synonyms": [
            "დიდებული",
            "წარმატება"
        ],
        "definitions": [
            {
                "text": "მაღალი ხარისხის ან სასიამოვნო:",
                "examples": [
                    "ეს კარგი შესაძლებლობაა ჩვენი გუნდისთვის:"
                ]
            }
        ],
        "comparative": "უფრო კარგი",
        "superlative": "საუკეთესო",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_012",
        "lang": "ka",
        "transcription": "",
        "antonyms": [
            "ცუდი"
        ]
    },
    {
        "word": "ცუდი",
        "level": "starter",
        "theme": "describing",
        "emoji": "👎",
        "form": "adjective",
        "subtext": "ცუდი ამბები / ცუდი გადაწყვეტილება",
        "synonyms": [
            "საშინელი",
            "უიღბლობა"
        ],
        "definitions": [
            {
                "text": "არა კარგი, დაბალი ხარისხის:",
                "examples": [
                    "გუშინ ცუდი დღე იყო სამსახურში:"
                ]
            }
        ],
        "comparative": "უფრო ცუდი",
        "superlative": "ყველაზე ცუდი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_013",
        "lang": "ka",
        "transcription": "",
        "antonyms": [
            "კარგი"
        ]
    },
    {
        "word": "დიდი",
        "level": "starter",
        "theme": "describing",
        "emoji": "🐘",
        "form": "adjective",
        "subtext": "დიდი სახლი / დიდი პრობლემა / საკმარისად დიდი",
        "definitions": [
            {
                "text": "დიდი ზომის ან რაოდენობის:",
                "examples": [
                    "ჩვენ გვაქვს დიდი ოფისი ცენტრში:"
                ]
            }
        ],
        "comparative": "უფრო დიდი",
        "superlative": "ყველაზე დიდი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_014",
        "lang": "ka",
        "transcription": "",
        "antonyms": [
            "პატარა"
        ]
    },
    {
        "word": "პატარა",
        "level": "starter",
        "theme": "describing",
        "emoji": "🐭",
        "form": "adjective",
        "subtext": "პატარა ბინა / პატარა ხელფასი / ძალიან პატარა",
        "definitions": [
            {
                "text": "პატარა ზომის ან რაოდენობის:",
                "examples": [
                    "ის ცხოვრობს პატარა ბინაში:"
                ]
            }
        ],
        "comparative": "უფრო პატარა",
        "superlative": "ყველაზე პატარა",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_015",
        "lang": "ka",
        "transcription": "",
        "antonyms": [
            "დიდი"
        ]
    },
    {
        "word": "ადვილი",
        "level": "starter",
        "theme": "describing",
        "emoji": "✅",
        "form": "adjective",
        "definitions": [
            {
                "text": "არა რთული:",
                "examples": [
                    "ეს ადვილი დავალებაა:"
                ]
            }
        ],
        "subtext": "ძალიან ადვილი / არ არის ადვილი",
        "synonyms": [
            "ადვილად გასაკეთებელი"
        ],
        "comparative": "უფრო ადვილი",
        "superlative": "ყველაზე ადვილი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_016",
        "lang": "ka",
        "transcription": "",
        "antonyms": [
            "რთული"
        ]
    },
    {
        "word": "რთული",
        "level": "starter",
        "theme": "describing",
        "emoji": "❌",
        "form": "adjective",
        "definitions": [
            {
                "text": "ბევრ ძალისხმევას რომ მოითხოვს:",
                "examples": [
                    "პროექტი ძალიან რთული ჩანს:"
                ]
            }
        ],
        "subtext": "ძალიან რთული",
        "synonyms": [
            "რთულად გასაკეთებელი"
        ],
        "comparative": "უფრო რთული",
        "superlative": "ყველაზე რთული",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_017",
        "lang": "ka",
        "transcription": "",
        "antonyms": [
            "ადვილი"
        ]
    },
    {
        "word": "ბედნიერი",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😊",
        "form": "adjective",
        "subtext": "ბედნიერი / ბედნიერი დღე",
        "synonyms": [
            "ბედნიერად ყოფნა"
        ],
        "definitions": [
            {
                "text": "სიხარულის ან კმაყოფილების განცდა:",
                "examples": [
                    "მე ბედნიერი ვარ ჩემი ახალი სამსახურით:"
                ]
            }
        ],
        "comparative": "უფრო ბედნიერი",
        "superlative": "ყველაზე ბედნიერი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_018",
        "lang": "ka",
        "transcription": ""
    },
    {
        "word": "დაღლილი",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😫",
        "form": "adjective",
        "subtext": "ძალიან დაღლილი",
        "synonyms": [
            "მძინარე",
            "დაღლილად ყოფნა"
        ],
        "definitions": [
            {
                "text": "დასვენების საჭიროების მქონე:",
                "examples": [
                    "ის დაღლილი ჩანს გრძელი დღის შემდეგ:"
                ]
            }
        ],
        "comparative": "უფრო დაღლილი",
        "superlative": "ყველაზე დაღლილი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_019",
        "lang": "ka",
        "transcription": ""
    },
    {
        "word": "სრული განაკვეთი",
        "level": "starter",
        "theme": "work",
        "emoji": "⏰",
        "form": "adjective",
        "definitions": [
            {
                "text": "სამუშაო კვირის ყველა საათის განმავლობაში მუშაობა:",
                "examples": [
                    "მას სრული განაკვეთით სამუშაო აქვს ბანკში:"
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "სრული განაკვეთით მუშაობა"
        ],
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_020",
        "lang": "ka",
        "transcription": "",
        "antonyms": [
            "ნახევარი განაკვეთი"
        ]
    },
    {
        "word": "ნახევარი განაკვეთი",
        "level": "starter",
        "theme": "work",
        "emoji": "⏳",
        "form": "adjective",
        "definitions": [
            {
                "text": "სამუშაო კვირის არა ყველა საათის განმავლობაში მუშაობა:",
                "examples": [
                    "შაბათობით ნახევარ განაკვეთზე მუშაობს:"
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "ნახევარი განაკვეთით მუშაობა"
        ],
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_021",
        "lang": "ka",
        "transcription": "",
        "antonyms": [
            "სრული განაკვეთი"
        ]
    },
    {
        "word": "სუფთა",
        "level": "starter",
        "theme": "furniture",
        "emoji": "✨",
        "form": "adjective",
        "subtext": "სუფთა ტანსაცმელი / სუფთა ოთახი",
        "synonyms": [
            "სისუფთავის დაცვა"
        ],
        "definitions": [
            {
                "text": "ჭუჭყის გარეშე:",
                "examples": [
                    "სამზარეულო ყოველთვის სუფთაა:"
                ]
            }
        ],
        "comparative": "უფრო სუფთა",
        "superlative": "ყველაზე სუფთა",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_022",
        "lang": "ka",
        "transcription": "",
        "antonyms": [
            "ჭუჭყიანი"
        ]
    },
    {
        "word": "ჯანსაღი",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥗",
        "form": "adjective",
        "subtext": "ჯანსაღი კვება / ჯანსაღი ცხოვრების წესი",
        "definitions": [
            {
                "text": "კარგი ჯანმრთელობის მქონე:",
                "examples": [
                    "მე ვცდილობ ჯანსაღი საკვები ვჭამო:"
                ]
            }
        ],
        "comparative": "უფრო ჯანსაღი",
        "superlative": "ყველაზე ჯანსაღი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_023",
        "lang": "ka",
        "transcription": "",
        "antonyms": [
            "არაჯანსაღი"
        ]
    },
    {
        "word": "ავადმყოფი",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "🤒",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "ავადმყოფად ყოფნა"
        ],
        "definitions": [
            {
                "text": "არა ჯანსაღი; ავადმყოფი:",
                "examples": [
                    "დღეს თავს შეუძლოდ ვგრძნობ:"
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_024",
        "lang": "ka",
        "transcription": "",
        "antonyms": [
            "ჯანმრთელი"
        ]
    },
    {
        "word": "ონლაინ",
        "level": "starter",
        "theme": "technology",
        "emoji": "🌐",
        "form": "adjective",
        "definitions": [
            {
                "text": "ინტერნეტის გამოყენებით:",
                "examples": [
                    "I buy food online sometimes."
                ]
            }
        ],
        "subtext": "ონლაინ შოპინგი / ონლაინ კურსი",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_025",
        "lang": "ka",
        "transcription": "",
        "antonyms": [
            "ხაზგარეშე"
        ]
    },
    {
        "word": "მარტო",
        "level": "starter",
        "theme": "social",
        "emoji": "👤",
        "form": "adjective",
        "definitions": [
            {
                "text": "სხვა ადამიანების გარეშე; დამოუკიდებლად:",
                "examples": [
                    "She lives alone."
                ]
            }
        ],
        "subtext": "მარტო ცხოვრება / მარტო მოგზაურობა",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_026",
        "lang": "ka",
        "transcription": "",
        "antonyms": [
            "ერთად"
        ]
    },
    {
        "word": "მოდუნებული",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😌",
        "form": "adjective",
        "subtext": "მოდუნებული",
        "synonyms": [
            "წყნარად ყოფნა"
        ],
        "definitions": [
            {
                "text": "წყნარი; არა შეშფოთებული ან დასტრესილი:",
                "examples": [
                    "დასვენების დღეებში თავს მშვიდად ვგრძნობ:"
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_027",
        "lang": "ka",
        "transcription": "",
        "antonyms": [
            "დასტრესილი"
        ]
    },
    {
        "word": "შეწუხებული",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😟",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "შეშფოთება"
        ],
        "definitions": [
            {
                "text": "შეშფოთების განცდა რაღაცის გამო:",
                "examples": [
                    "თავის სამსახურზე ნერვიულობს:"
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_028",
        "lang": "ka",
        "transcription": "",
        "antonyms": [
            "წყნარი"
        ]
    },
    {
        "word": "დაკავებული",
        "level": "starter",
        "theme": "work",
        "emoji": "🏃",
        "form": "adjective",
        "subtext": "დაკავებული დღე",
        "synonyms": [
            "დატვირთული გრაფიკი"
        ],
        "definitions": [
            {
                "text": "ბევრი საქმის მქონე:",
                "examples": [
                    "მე ამ კვირაში ძალიან დაკავებული ვარ:"
                ]
            }
        ],
        "comparative": "უფრო დაკავებული",
        "superlative": "ყველაზე დაკავებული",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_029",
        "lang": "ka",
        "transcription": ""
    },
    {
        "word": "სასარგებლო",
        "level": "starter",
        "theme": "describing",
        "emoji": "🛠️",
        "form": "adjective",
        "subtext": "სასარგებლო ყოფნა",
        "synonyms": [
            "პრაქტიკული"
        ],
        "definitions": [
            {
                "text": "სარგებლის მომტანი:",
                "examples": [
                    "ეს ძალიან სასარგებლო ინსტრუმენტია:"
                ]
            }
        ],
        "comparative": "უფრო სასარგებლო",
        "superlative": "ყველაზე სასარგებლო",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_030",
        "lang": "ka",
        "transcription": "",
        "antonyms": [
            "უსარგებლო"
        ]
    },
    {
        "word": "მნიშვნელოვანი",
        "level": "starter",
        "theme": "describing",
        "emoji": "❗",
        "form": "adjective",
        "subtext": "მნიშვნელოვანი შეხვედრა / ძალიან მნიშვნელოვანი",
        "definitions": [
            {
                "text": "დიდი მნიშვნელობის მქონე:",
                "examples": [
                    "ეს ძალიან მნიშვნელოვანი პროექტია:"
                ]
            }
        ],
        "comparative": "უფრო მნიშვნელოვანი",
        "superlative": "ყველაზე მნიშვნელოვანი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_031",
        "lang": "ka",
        "transcription": ""
    },
    {
        "word": "წითელი",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟥",
        "form": "adjective",
        "subtext": "წითელი ღვინო / წითელი შუქი",
        "definitions": [
            {
                "text": "სისხლის ან მწიფე პომიდვრის ფერი:",
                "examples": [
                    "She has a red bag."
                ]
            },
            {
                "text": "სისხლის ფერი:",
                "examples": [
                    "She drives a red car."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_032",
        "lang": "ka",
        "transcription": ""
    },
    {
        "word": "ლურჯი",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟦",
        "form": "adjective",
        "subtext": "ლურჯი ცა",
        "definitions": [
            {
                "text": "მოწმენდილი ცის ფერი:",
                "examples": [
                    "მისი მანქანა ლურჯია:"
                ]
            },
            {
                "text": "ცის ფერი:",
                "examples": [
                    "სამსახურში ლურჯ პერანგს ატარებს:"
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_033",
        "lang": "ka",
        "transcription": ""
    },
    {
        "word": "მწვანე",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟩",
        "form": "adjective",
        "subtext": "მწვანე სივრცე",
        "definitions": [
            {
                "text": "ბალახის ან ფოთლების ფერი:",
                "examples": [
                    "She wears a green dress."
                ]
            },
            {
                "text": "ბალახის ფერი:",
                "examples": [
                    "კომპანიას აქვს ეკოლოგიური მახასიათებლები:"
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_034",
        "lang": "ka",
        "transcription": ""
    },
    {
        "word": "თეთრი",
        "level": "starter",
        "theme": "colours",
        "emoji": "⬜",
        "form": "adjective",
        "subtext": "თეთრი ღვინო",
        "definitions": [
            {
                "text": "თოვლის ან რძის ფერი:",
                "examples": [
                    "კედლები თეთრია:"
                ]
            },
            {
                "text": "ყველაზე ღია ფერი:",
                "examples": [
                    "ოფისის კედლები თეთრადაა შეღებილი:"
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_035",
        "lang": "ka",
        "transcription": ""
    },
    {
        "word": "შავი",
        "level": "starter",
        "theme": "colours",
        "emoji": "⬛",
        "form": "adjective",
        "subtext": "შავი ყავა",
        "definitions": [
            {
                "text": "ყველაზე მუქი ფერი, როგორც ღამის ცა:",
                "examples": [
                    "He wears a black coat."
                ]
            },
            {
                "text": "ყველაზე მუქი ფერი:",
                "examples": [
                    "He always wears a black suit."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_036",
        "lang": "ka",
        "transcription": ""
    },
    {
        "word": "ყვითელი",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟨",
        "form": "adjective",
        "subtext": "ყვითელი შუქი",
        "definitions": [
            {
                "text": "მზის ან ლიმონის ფერი:",
                "examples": [
                    "She has a yellow umbrella."
                ]
            },
            {
                "text": "მზის ფერი:",
                "examples": [
                    "She bought a yellow notepad."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_037",
        "lang": "ka",
        "transcription": ""
    },
    {
        "word": "თავისუფალი",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "თავისუფალი დრო",
        "synonyms": [
            "უფასო"
        ],
        "definitions": [
            {
                "text": "არა დაკავებული ან უფასო:",
                "examples": [
                    "ხუთშაბათს თავისუფალი ხართ?"
                ]
            }
        ],
        "comparative": "უფრო თავისუფალი",
        "superlative": "ყველაზე თავისუფალი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_038",
        "lang": "ka",
        "transcription": ""
    },
    {
        "word": "ღია",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📖",
        "form": "adjective",
        "subtext": "ღია კარი",
        "synonyms": [
            "ღიაა ბიზნესისთვის"
        ],
        "definitions": [
            {
                "text": "არა დაკეტილი:",
                "examples": [
                    "კარი ღიაა, შედით:"
                ]
            }
        ],
        "comparative": "უფრო ღია",
        "superlative": "ყველაზე ღია",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_039",
        "lang": "ka",
        "transcription": "",
        "antonyms": [
            "დაკეტილი"
        ]
    },
    {
        "word": "დაკეტილი",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔒",
        "form": "adjective",
        "subtext": "დაკეტილი კარი",
        "synonyms": [
            "დაკეტილია ლანჩისთვის"
        ],
        "definitions": [
            {
                "text": "არა ღია:",
                "examples": [
                    "ოფისი დაკეტილია შაბათ-კვირას:"
                ]
            }
        ],
        "comparative": "უფრო დაკეტილი",
        "superlative": "ყველაზე დაკეტილი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_040",
        "lang": "ka",
        "transcription": "",
        "antonyms": [
            "ღია"
        ]
    },
    {
        "word": "დიდი",
        "level": "starter",
        "form": "adjective",
        "subtext": "დიდი ქალაქი / დიდი კომპანია",
        "definitions": [
            {
                "text": "საშუალოზე დიდი ზომის ან რაოდენობის:",
                "examples": [
                    "პარიზი ძალიან დიდი ქალაქია:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_041",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "პატარა",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "ცოტაოდენი",
            "ცოტა ფული"
        ],
        "definitions": [
            {
                "text": "პატარა ზომის; მცირე რაოდენობით:",
                "examples": [
                    "He drives a little car to save on fuel."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_042",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "გრძელი",
        "level": "starter",
        "form": "adjective",
        "subtext": "გრძელი მოგზაურობა / გრძელი დღე",
        "definitions": [
            {
                "text": "დიდი მანძილის ან ხანგრძლივობის:",
                "examples": [
                    "დღეს შეხვედრა ძალიან გრძელი იყო:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": "უფრო გრძელი",
        "superlative": "ყველაზე გრძელი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_043",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "მაღალი",
        "level": "starter",
        "form": "adjective",
        "subtext": "მაღალი ფასი / მაღალი ხარისხი",
        "definitions": [
            {
                "text": "საშუალოზე მაღალი დონის:",
                "examples": [
                    "ამ რაიონში ქირა ძალიან მაღალია:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_044",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "დაბალი",
        "level": "starter",
        "form": "adjective",
        "subtext": "დაბალი ფასი / დაბალი ხელფასი",
        "definitions": [
            {
                "text": "საშუალოზე დაბალი დონის:",
                "examples": [
                    "ხელფასი ძალიან დაბალია იმ საათებისთვის:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_045",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "სავსე",
        "level": "starter",
        "form": "adjective",
        "subtext": "ხალხით სავსე",
        "synonyms": [
            "სრული დღე"
        ],
        "definitions": [
            {
                "text": "როდესაც ადგილი აღარ არის:",
                "examples": [
                    "ოფისი სავსეა ხალხით დღეს:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": "უფრო სავსე",
        "superlative": "ყველაზე სავსე",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_046",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ცარიელი",
        "level": "starter",
        "form": "adjective",
        "subtext": "ცარიელი ბინა / ცარიელი ოთახი",
        "definitions": [
            {
                "text": "როდესაც შიგნით არაფერია:",
                "examples": [
                    "ყავის ჭიქა ცარიელია:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": "უფრო ცარიელი",
        "superlative": "ყველაზე ცარიელი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_047",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "თბილი",
        "level": "starter",
        "form": "adjective",
        "subtext": "თბილი ამინდი / თბილი მიღება",
        "definitions": [
            {
                "text": "სასიამოვნოდ თბილი; გაცხელებული:",
                "examples": [
                    "ოფისი თბილი და კომფორტულია:"
                ]
            }
        ],
        "theme": "nature",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_048",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "გრილი",
        "level": "starter",
        "form": "adjective",
        "subtext": "გრილი სასმელი",
        "synonyms": [
            "სიგრილის შენარჩუნება"
        ],
        "definitions": [
            {
                "text": "ოდნავ ცივი; სასიამოვნო დაბალი ტემპერატურა:",
                "examples": [
                    "მუშაობისთვის გრილ ამინდს ამჯობინებს:"
                ]
            }
        ],
        "theme": "nature",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_049",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "სველი",
        "level": "starter",
        "form": "adjective",
        "subtext": "სველი ამინდი / სველი ტანსაცმელი",
        "definitions": [
            {
                "text": "წყლით დაფარული:",
                "examples": [
                    "გზები სველია წვიმის შემდეგ:"
                ]
            }
        ],
        "theme": "nature",
        "comparative": "უფრო სველი",
        "superlative": "ყველაზე სველი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_050",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "მშრალი",
        "level": "starter",
        "form": "adjective",
        "subtext": "მშრალი ამინდი / მშრალი კანი",
        "definitions": [
            {
                "text": "წყლის გარეშე:",
                "examples": [
                    "დღეს ჰაერი ძალიან მშრალია:"
                ]
            }
        ],
        "theme": "nature",
        "comparative": "უფრო მშრალი",
        "superlative": "ყველაზე მშრალი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_051",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ჭუჭყიანი",
        "level": "starter",
        "theme": "furniture",
        "form": "adjective",
        "subtext": "ჭუჭყიანი ხელები / ჭუჭყიანი ტანსაცმელი",
        "definitions": [
            {
                "text": "ჭუჭყით დაფარული:",
                "examples": [
                    "მანქანა ძალიან ჭუჭყიანია დღეს:"
                ]
            }
        ],
        "comparative": "უფრო ჭუჭყიანი",
        "superlative": "ყველაზე ჭუჭყიანი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_052",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "მაგარი",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "რთული სამუშაო",
            "რთული გადაწყვეტილება"
        ],
        "definitions": [
            {
                "text": "არა რბილი:",
                "examples": [
                    "ეს სკამი ძალიან მაგარია:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": "უფრო მაგარი",
        "superlative": "ყველაზე მაგარი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_053",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "რბილი",
        "level": "starter",
        "form": "adjective",
        "subtext": "რბილი შუქი / რბილი მუსიკა",
        "definitions": [
            {
                "text": "ადვილად ფორმირებადი, სასიამოვნო:",
                "examples": [
                    "ეს სავარძელი ძალიან რბილია:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": "უფრო რბილი",
        "superlative": "ყველაზე რბილი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_054",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "მძიმე",
        "level": "starter",
        "form": "adjective",
        "subtext": "მძიმე ტრაფიკი",
        "synonyms": [
            "ძლიერი წვიმა"
        ],
        "definitions": [
            {
                "text": "დიდი წონის მქონე:",
                "examples": [
                    "ეს ყუთი ძალიან მძიმეა:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": "უფრო მძიმე",
        "superlative": "ყველაზე მძიმე",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_055",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "მსუბუქი",
        "level": "starter",
        "form": "adjective",
        "subtext": "მსუბუქი წვიმა / მსუბუქი კვება",
        "definitions": [
            {
                "text": "არა მძიმე; ღია ფერის:",
                "examples": [
                    "ის ყოველდღე სამსახურში მსუბუქ ჩანთას ატარებს:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_056",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ყავისფერი",
        "level": "starter",
        "form": "adjective",
        "subtext": "მუქი ყავისფერი",
        "definitions": [
            {
                "text": "ხის ან მიწის ფერი:",
                "examples": [
                    "მას ყავისფერი თვალები და მუქი თმა აქვს:"
                ]
            }
        ],
        "theme": "colours",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_057",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ნაცრისფერი",
        "level": "starter",
        "form": "adjective",
        "subtext": "ნაცრისფერი ცა",
        "definitions": [
            {
                "text": "შავსა და თეთრს შორის არსებული ფერი:",
                "examples": [
                    "მას ჭაღარა თმა და კეთილი სახე აქვს:"
                ]
            }
        ],
        "theme": "colours",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_058",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ვარდისფერი",
        "level": "starter",
        "form": "adjective",
        "subtext": "ღია ვარდისფერი",
        "definitions": [
            {
                "text": "ღია წითელი ფერის მქონე:",
                "examples": [
                    "She prefers pink to red."
                ]
            }
        ],
        "theme": "colours",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_059",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ნარინჯისფერი",
        "level": "starter",
        "form": "adjective",
        "subtext": "მკვეთრი ნარინჯისფერი",
        "definitions": [
            {
                "text": "ფორთოხლის ფერის მქონე:",
                "examples": [
                    "He bought an orange jacket."
                ]
            }
        ],
        "theme": "colours",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_060",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "დიდებული",
        "level": "starter",
        "form": "adjective",
        "subtext": "დიდებული იდეა",
        "definitions": [
            {
                "text": "უკიდურესად კარგი; დიდი რაოდენობით:",
                "examples": [
                    "ის შესანიშნავი მენეჯერია:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_061",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "კარგი",
        "level": "starter",
        "form": "adjective",
        "subtext": "კარგი დღე / კარგი ადგილი",
        "definitions": [
            {
                "text": "სასიამოვნო ან კეთილი:",
                "examples": [
                    "ახალი ოფისი ძალიან კარგია:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_062",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "საოცარი",
        "level": "starter",
        "form": "adjective",
        "subtext": "საოცარი დრო",
        "definitions": [
            {
                "text": "უკიდურესად კარგი; აღფრთოვანების გამომწვევი:",
                "examples": [
                    "They had a wonderful team."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_063",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "საშინელი",
        "level": "starter",
        "form": "adjective",
        "subtext": "საშინელი ამბები",
        "definitions": [
            {
                "text": "ძალიან ცუდი:",
                "examples": [
                    "გუშინ საშინელი ამინდი იყო:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": "უფრო საშინელი",
        "superlative": "ყველაზე საშინელი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_064",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "საშინელი",
        "level": "starter",
        "form": "adjective",
        "subtext": "საშინელი ამბები",
        "definitions": [
            {
                "text": "ძალიან ცუდი ან უსიამოვნო:",
                "examples": [
                    "ღია ოფისში ხმაური საშინელებაა:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_065",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "გადასარევი",
        "level": "starter",
        "form": "adjective",
        "subtext": "გადასარევი შედეგი",
        "definitions": [
            {
                "text": "დიდი სიურპრიზის ან აღფრთოვანების გამომწვევი:",
                "examples": [
                    "She gave an amazing presentation."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_066",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ფანტასტიკური",
        "level": "starter",
        "form": "adjective",
        "subtext": "ფანტასტიკური ამბები",
        "definitions": [
            {
                "text": "უკიდურესად კარგი:",
                "examples": [
                    "ახალი სისტემა ფანტასტიკურად მუშაობს:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_067",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "მოწყენილი",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "მოწყენილად ყოფნა",
            "სევდიანი სიტუაცია"
        ],
        "definitions": [
            {
                "text": "არა ბედნიერი, ხშირად ცუდი ამბის გამო:",
                "examples": [
                    "ის მოწყენილია, რომ ოფისიდან უნდა წავიდეს:"
                ]
            }
        ],
        "theme": "emotions",
        "comparative": "უფრო მოწყენილი",
        "superlative": "ყველაზე მოწყენილი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_068",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "მშიერი",
        "level": "starter",
        "form": "adjective",
        "subtext": "მშიერი ყოფნა / ძალიან მშიერი",
        "definitions": [
            {
                "text": "ჭამის სურვილის მქონე:",
                "examples": [
                    "მე ყოველთვის მშია ლანჩის წინ:"
                ]
            }
        ],
        "theme": "emotions",
        "comparative": "უფრო მშიერი",
        "superlative": "ყველაზე მშიერი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_069",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "გაბრაზებული",
        "level": "starter",
        "form": "adjective",
        "subtext": "გაბრაზებული ყოფნა",
        "synonyms": [
            "ვინმეზე გაბრაზება"
        ],
        "definitions": [
            {
                "text": "რისხვის განცდა:",
                "examples": [
                    "ის გაბრაზებულია დაგვიანების გამო:"
                ]
            }
        ],
        "theme": "emotions",
        "comparative": "უფრო გაბრაზებული",
        "superlative": "ყველაზე გაბრაზებული",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_070",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "მოწყენილი",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "მოწყენილად ყოფნა"
        ],
        "definitions": [
            {
                "text": "ინტერესის არმქონე:",
                "examples": [
                    "გრძელ შეხვედრებზე ბეზრდება:"
                ]
            }
        ],
        "theme": "emotions",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_071",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "აღელვებული",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "subtext": "ძალიან აღელვებული",
        "definitions": [
            {
                "text": "ენთუზიაზმის და ხალისის განცდა:",
                "examples": [
                    "აღფრთოვანებულია თავისი ახალი სამსახურით:"
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_072",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "შეშინებული",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "რაღაცის შიში"
        ],
        "definitions": [
            {
                "text": "შიშის განცდა:",
                "examples": [
                    "შეცდომების დაშვების ეშინია:"
                ]
            }
        ],
        "theme": "emotions",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_073",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "მწუხარე",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "წუხილი რაღაცის გამო"
        ],
        "definitions": [
            {
                "text": "სინანულის ან სევდის განცდა:",
                "examples": [
                    "ბოდიშს იხდის დაგვიანებისთვის:"
                ]
            }
        ],
        "theme": "emotions",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_074",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "სწორი",
        "level": "starter",
        "form": "adjective",
        "subtext": "სწორი პასუხი / სწორი დრო",
        "definitions": [
            {
                "text": "სწორი; შესაბამისი:",
                "examples": [
                    "ეს სწორი ოფისია?"
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_075",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "არასწორი",
        "level": "starter",
        "form": "adjective",
        "subtext": "არასწორი პასუხი",
        "definitions": [
            {
                "text": "არა სწორი:",
                "examples": [
                    "ეს არასწორი რიცხვია:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": "უფრო არასწორი",
        "superlative": "ყველაზე არასწორი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_076",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ახალი",
        "level": "starter",
        "form": "adjective",
        "subtext": "ახალი სამსახური / სულ ახალი",
        "definitions": [
            {
                "text": "ახლახან შექმნილი ან ნაყიდი:",
                "examples": [
                    "მე მაქვს ახალი კომპიუტერი:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": "უფრო ახალი",
        "superlative": "ყველაზე ახალი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_077",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "განსხვავებული",
        "level": "starter",
        "form": "adjective",
        "subtext": "სრულიად განსხვავებული / ძალიან განსხვავებული",
        "definitions": [
            {
                "text": "არა იგივე:",
                "examples": [
                    "ჩვენ განსხვავებული აზრები გვაქვს ამ საკითხზე:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": "უფრო განსხვავებული",
        "superlative": "ყველაზე განსხვავებული",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_078",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "იგივე",
        "level": "starter",
        "form": "adjective",
        "subtext": "იგივე, რაც / ზუსტად იგივე",
        "definitions": [
            {
                "text": "არა განსხვავებული:",
                "examples": [
                    "ჩვენ იმავე ოფისში ვმუშაობთ:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": "უფრო იგივე",
        "superlative": "ყველაზე იგივე",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_079",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "სწრაფი",
        "level": "starter",
        "form": "adjective",
        "subtext": "სწრაფი კვება / სწრაფი მატარებელი",
        "definitions": [
            {
                "text": "დიდი სიჩქარით მოძრავი:",
                "examples": [
                    "ის ძალიან სწრაფად მუშაობს:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": "უფრო სწრაფი",
        "superlative": "ყველაზე სწრაფი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_080",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ნელი",
        "level": "starter",
        "form": "adjective",
        "subtext": "ნელი პროგრესი / ნელი ინტერნეტი",
        "definitions": [
            {
                "text": "დაბალი სიჩქარით მოძრავი:",
                "examples": [
                    "ინტერნეტი დღეს ნელია:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": "უფრო ნელი",
        "superlative": "ყველაზე ნელი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_081",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "წყნარი",
        "level": "starter",
        "form": "adjective",
        "subtext": "წყნარი ადგილი",
        "synonyms": [
            "სიწყნარის შენარჩუნება"
        ],
        "definitions": [
            {
                "text": "ხმაურის გარეშე:",
                "examples": [
                    "აქ ძალიან წყნარია მუშაობისთვის:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": "უფრო წყნარი",
        "superlative": "ყველაზე წყნარი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_082",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ხმამაღალი",
        "level": "starter",
        "form": "adjective",
        "subtext": "ხმამაღალი ხმა / ძალიან ხმამაღალი",
        "definitions": [
            {
                "text": "დიდი ხმის მქონე:",
                "examples": [
                    "ის ძალიან ხმამაღლა ლაპარაკობს:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": "უფრო ხმამაღალი",
        "superlative": "ყველაზე ხმამაღალი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_083",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "უსაფრთხო",
        "level": "starter",
        "form": "adjective",
        "subtext": "უსაფრთხო ადგილი",
        "synonyms": [
            "უსაფრთხოდ ყოფნა"
        ],
        "definitions": [
            {
                "text": "საფრთხისგან შორს:",
                "examples": [
                    "ეს ტერიტორია ძალიან უსაფრთხოა:"
                ]
            }
        ],
        "theme": "places",
        "comparative": "უფრო უსაფრთხო",
        "superlative": "ყველაზე უსაფრთხო",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_084",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "სახიფათო",
        "level": "starter",
        "form": "adjective",
        "subtext": "სახიფათო სიტუაცია / ძალიან სახიფათო",
        "definitions": [
            {
                "text": "საფრთხის შემცველი:",
                "examples": [
                    "ეს გზა სახიფათოა ღამით:"
                ]
            }
        ],
        "theme": "places",
        "comparative": "უფრო სახიფათო",
        "superlative": "ყველაზე სახიფათო",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_085",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "უბედური",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "უკმაყოფილო; არა ნასიამოვნები:",
                "examples": [
                    "ის უკმაყოფილოა თავისი ამჟამინდელი ხელფასით:"
                ]
            }
        ],
        "subtext": "ძალიან უბედური",
        "synonyms": [
            "უბედურად ყოფნა"
        ],
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_086",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ნერვიული",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "შეშფოთებული ან შეშინებული:",
                "examples": [
                    "მე ყოველთვის ცოტათი ვნერვიულობ შეხვედრების წინ:"
                ]
            }
        ],
        "subtext": "ძალიან ნერვიული",
        "synonyms": [
            "ნერვიულად ყოფნა"
        ],
        "comparative": "უფრო ნერვიული",
        "superlative": "ყველაზე ნერვიული",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_087",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "დასტრესილი",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "წნეხისგან გამოწვეული შეშფოთება და დაძაბულობა:",
                "examples": [
                    "She feels stressed before every deadline."
                ]
            }
        ],
        "subtext": "ძალიან დასტრესილი",
        "synonyms": [
            "დაძაბულად ყოფნა"
        ],
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_088",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "თავდაჯერებული",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "საკუთარ შესაძლებლობებში დარწმუნებულობა:",
                "examples": [
                    "ის ძალიან თავდაჯერებულია კლიენტების პრეზენტაციებისას:"
                ]
            }
        ],
        "subtext": "ძალიან თავდაჯერებული",
        "synonyms": [
            "თავდაჯერებულად ყოფნა"
        ],
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_089",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ამაყი",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "სიამაყის განცდა:",
                "examples": [
                    "მე ვამაყობ ჩვენი გუნდის წარმატებით:"
                ]
            }
        ],
        "subtext": "ძალიან ამაყი",
        "synonyms": [
            "ამაყად ყოფნა"
        ],
        "comparative": "უფრო ამაყი",
        "superlative": "ყველაზე ამაყი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_090",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "შეშინებული",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "შიშის განცდა:",
                "examples": [
                    "ის შეშინებული ჩანს:"
                ]
            }
        ],
        "subtext": "ძალიან შეშინებული",
        "synonyms": [
            "შეშინებულად ყოფნა"
        ],
        "comparative": "უფრო შეშინებული",
        "superlative": "ყველაზე შეშინებული",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_091",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "გაკვირვებული",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "შოკის განცდა მოულოდნელი რაღაცის გამო:",
                "examples": [
                    "გაუკვირდა ხელფასის მომატება:"
                ]
            }
        ],
        "subtext": "ძალიან გაკვირვებული",
        "synonyms": [
            "გაკვირვებულად ყოფნა"
        ],
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_092",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "იმედგაცრუებული",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "მოწყენილობა იმის გამო, რომ რაღაც არ აღმოჩნდა მოლოდინის შესაბამისი:",
                "examples": [
                    "იმედგაცრუებული დარჩა, რომ სამსახური ვერ მიიღო:"
                ]
            }
        ],
        "subtext": "ძალიან იმედგაცრუებული",
        "synonyms": [
            "იმედგაცრუებულად ყოფნა"
        ],
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_093",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ლამაზი",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "თვალისთვის სასიამოვნო:",
                "examples": [
                    "ხედი ოფისიდან ლამაზია:"
                ]
            }
        ],
        "subtext": "ლამაზი ხედი / ლამაზი ქალაქი",
        "comparative": "უფრო ლამაზი",
        "superlative": "ყველაზე ლამაზი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_094",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ლამაზი",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "თვალისთვის სასიამოვნო; საკმაოდ მიმზიდველი:",
                "examples": [
                    "ახალი შეხვედრების ოთახი ძალიან ლამაზია:"
                ]
            }
        ],
        "subtext": "ლამაზი ადგილი",
        "synonyms": [
            "საკმაოდ კარგი"
        ],
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_095",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ძლიერი",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "დიდი ფიზიკური ძალის მქონე:",
                "examples": [
                    "ის ძალიან ძლიერი კაცია:"
                ]
            }
        ],
        "subtext": "ძლიერი ყავა / ძლიერი აზრი",
        "comparative": "უფრო ძლიერი",
        "superlative": "ყველაზე ძლიერი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_096",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "სუსტი",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "ფიზიკური ძალის არმქონე:",
                "examples": [
                    "თავს სუსტად ვგრძნობ ავადმყოფობის შემდეგ:"
                ]
            }
        ],
        "subtext": "სუსტი კავშირი / სუსტი არგუმენტი",
        "comparative": "უფრო სუსტი",
        "superlative": "ყველაზე სუსტი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_097",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ფორმაში",
        "level": "starter",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "კარგ ფიზიკურ მდგომარეობაში ვარჯიშის წყალობით:",
                "examples": [
                    "ის ფორმას ინარჩუნებს ყოველდღე სამსახურში ველოსიპედით სიარულით:"
                ]
            }
        ],
        "subtext": "ფიზიკურად კარგ ფორმაში",
        "synonyms": [
            "ფორმის შენარჩუნება"
        ],
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_098",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "შესანიშნავი",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "უკიდურესად კარგი; ძალიან მაღალი სტანდარტის:",
                "examples": [
                    "She received an excellent review."
                ]
            }
        ],
        "subtext": "შესანიშნავი ნამუშევარი / შესანიშნავი შედეგები",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_099",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "იდეალური",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "ყოველგვარი ნაკლის გარეშე:",
                "examples": [
                    "ეს იდეალური დღეა მოგზაურობისთვის:"
                ]
            }
        ],
        "subtext": "იდეალური შესაძლებლობა / იდეალური დრო",
        "comparative": "უფრო იდეალური",
        "superlative": "ყველაზე იდეალური",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_100",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "უსარგებლო",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "სარგებლის არმქონე:",
                "examples": [
                    "ეს ძველი კომპიუტერი უკვე უსარგებლოა:"
                ]
            }
        ],
        "subtext": "სრულიად უსარგებლო / უსარგებლო იდეა",
        "comparative": "უფრო უსარგებლო",
        "superlative": "ყველაზე უსარგებლო",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_101",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "სწორი",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "შეცდომის გარეშე:",
                "examples": [
                    "ეს სწორი პასუხია:"
                ]
            }
        ],
        "subtext": "სწორი პასუხი / სრულიად სწორი",
        "comparative": "უფრო სწორი",
        "superlative": "ყველაზე სწორი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_102",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "საინტერესო",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "ყურადღების მიმზიდველი:",
                "examples": [
                    "მას ძალიან საინტერესო იდეები აქვს:"
                ]
            }
        ],
        "subtext": "ძალიან საინტერესო",
        "synonyms": [
            "საინტერესოდ მიჩნევა"
        ],
        "comparative": "უფრო საინტერესო",
        "superlative": "ყველაზე საინტერესო",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_103",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "მოსაწყენი",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "არა საინტერესო:",
                "examples": [
                    "შეხვედრა ძალიან მოსაწყენი იყო:"
                ]
            }
        ],
        "subtext": "ძალიან მოსაწყენი / მოსაწყენი შეხვედრა",
        "comparative": "უფრო მოსაწყენი",
        "superlative": "ყველაზე მოსაწყენი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_104",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "საჭირო",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "საჭირო რაღაცის გასაკეთებლად:",
                "examples": [
                    "კარგი ინტერნეტ კავშირი აუცილებელია დისტანციური მუშაობისთვის:"
                ]
            }
        ],
        "subtext": "აბსოლუტურად საჭირო",
        "synonyms": [
            "თუ საჭიროა"
        ],
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_105",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "შესაძლებელი",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "რაც შეიძლება მოხდეს:",
                "examples": [
                    "შესაძლებელია, რომ დავაგვიანო:"
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "რაც შეიძლება მალე",
            "შესაძლებელია"
        ],
        "comparative": "უფრო შესაძლებელი",
        "superlative": "ყველაზე შესაძლებელი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_106",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "შეუძლებელი",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "რაც ვერ მოხდება:",
                "examples": [
                    "ამ პროექტის ერთ დღეში დასრულება შეუძლებელია:"
                ]
            }
        ],
        "subtext": "თითქმის შეუძლებელი",
        "synonyms": [
            "შეუძლებლის გაკეთება"
        ],
        "comparative": "უფრო შეუძლებელი",
        "superlative": "ყველაზე შეუძლებელი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_107",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "სპეციალური",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "არა ჩვეულებრივი:",
                "examples": [
                    "ეს სპეციალური შემთხვევაა:"
                ]
            }
        ],
        "subtext": "სპეციალური შეთავაზება / სპეციალური შემთხვევა",
        "comparative": "უფრო სპეციალური",
        "superlative": "ყველაზე სპეციალური",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_108",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "პოპულარული",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "ბევრ ადამიანს რომ მოსწონს:",
                "examples": [
                    "ოფისთან ახლოს მდებარე ახალი კაფე ძალიან პოპულარულია:"
                ]
            }
        ],
        "subtext": "ძალიან პოპულარული / პოპულარული არჩევანი",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_109",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "მსგავსი",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "თითქმის იგივე; ბევრი საერთო ნიშნის მქონე:",
                "examples": [
                    "ჩვენი მიდგომები ძალიან ჰგავს ერთმანეთს:"
                ]
            }
        ],
        "subtext": "ძალიან მსგავსი / რაღაცის მსგავსი",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_110",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "მეგობრული",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "კეთილი და სასიამოვნო; ადვილად სასაუბრო:",
                "examples": [
                    "ახალი მენეჯერი ძალიან მეგობრული და ხელმისაწვდომია:"
                ]
            }
        ],
        "subtext": "ძალიან მეგობრული / მეგობრული სახე",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_111",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "კეთილი",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "მზრუნველი და დამხმარე:",
                "examples": [
                    "ის ძალიან კეთილი კოლეგაა:"
                ]
            }
        ],
        "subtext": "ძალიან კეთილი",
        "synonyms": [
            "კეთილია თქვენი მხრიდან"
        ],
        "comparative": "უფრო კეთილი",
        "superlative": "ყველაზე კეთილი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_112",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "სასაცილო",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "სიცილის გამომწვევი:",
                "examples": [
                    "ის ყოველთვის სასაცილო ამბებს ჰყვება:"
                ]
            }
        ],
        "subtext": "ძალიან სასაცილო / სასაცილო ამბავი",
        "comparative": "უფრო სასაცილო",
        "superlative": "ყველაზე სასაცილო",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_113",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ჭკვიანი",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "სწრაფად შემთვისებელი:",
                "examples": [
                    "ის ჩვენს გუნდში ყველაზე ჭკვიანია:"
                ]
            }
        ],
        "subtext": "ძალიან ჭკვიანი",
        "synonyms": [
            "ჭკვიანური იდეა"
        ],
        "comparative": "უფრო ჭკვიანი",
        "superlative": "ყველაზე ჭკვიანი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_114",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ზრდილი",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "კარგი მანერების მქონე:",
                "examples": [
                    "ის ყოველთვის ძალიან ზრდილია კლიენტებთან:"
                ]
            }
        ],
        "subtext": "ძალიან ზრდილი / ზრდილი თხოვნა",
        "comparative": "უფრო ზრდილი",
        "superlative": "ყველაზე ზრდილი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_115",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "უხეში",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "არა ზრდილი:",
                "examples": [
                    "მისი პასუხი საკმაოდ უხეში იყო:"
                ]
            }
        ],
        "subtext": "ძალიან უხეში / წარმოუდგენლად უხეში",
        "comparative": "უფრო უხეში",
        "superlative": "ყველაზე უხეში",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_116",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ზარმაცი",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "მუშაობის სურვილის არმქონე:",
                "examples": [
                    "ის არ არის ზარმაცი, უბრალოდ დაიღალა:"
                ]
            }
        ],
        "subtext": "ძალიან ზარმაცი",
        "synonyms": [
            "ზარმაცული მიდგომა"
        ],
        "comparative": "უფრო ზარმაცი",
        "superlative": "ყველაზე ზარმაცი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_117",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "პატიოსანი",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "სიმართლის მთქმელი; არა მატყუარა:",
                "examples": [
                    "ის ცნობილია კლიენტებთან სრული პატიოსნებით:"
                ]
            }
        ],
        "subtext": "ძალიან პატიოსანი / სრულიად პატიოსანი",
        "comparative": null,
        "superlative": null,
        "id": "ka_starter_adjectives_118",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    },
    {
        "word": "ხმაურიანი",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "ბევრი ხმაურის მქონე:",
                "examples": [
                    "ქუჩა ძალიან ხმაურიანია:"
                ]
            }
        ],
        "subtext": "ძალიან ხმაურიანი / ხმაურიანი გარემო",
        "comparative": "უფრო ხმაურიანი",
        "superlative": "ყველაზე ხმაურიანი",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "id": "ka_starter_adjectives_119",
        "lang": "ka",
        "emoji": "✨",
        "transcription": ""
    }
]
    const lang = "ka";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();