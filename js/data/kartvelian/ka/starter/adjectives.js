(function() {
    const data = [
    {
        "word": "მაღალი",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "მოკლე",
        "oppositeEmoji": "📏",
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
        "femininePlural": null
    },
    {
        "word": "მოკლე",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "მაღალი",
        "oppositeEmoji": "🗼",
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
        "femininePlural": null
    },
    {
        "word": "ახალგაზრდა",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "ძველი",
        "oppositeEmoji": "👴",
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
        "femininePlural": null
    },
    {
        "word": "ძველი",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "ახალგაზრდა",
        "oppositeEmoji": "👶",
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
        "femininePlural": null
    },
    {
        "word": "მზიანი",
        "level": "starter",
        "theme": "weather_A1",
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
        "femininePlural": null
    },
    {
        "word": "წვიმიანი",
        "level": "starter",
        "theme": "weather_A1",
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
        "subtext": "წვიმიანი დღე / წვიმიანი ამინდი / წვიმების სეზონი",
        "comparative": "უფრო წვიმიანი",
        "superlative": "ყველაზე წვიმიანი",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "ცხელი",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🔥",
        "form": "adjective",
        "opposite": "ცივი",
        "oppositeEmoji": "❄️",
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
        "femininePlural": null
    },
    {
        "word": "ცივი",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "❄️",
        "form": "adjective",
        "opposite": "ცხელი",
        "oppositeEmoji": "🔥",
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
        "femininePlural": null
    },
    {
        "word": "ჩვეულებრივი",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "სპეციალური",
        "oppositeEmoji": "✨",
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
         "superlative": null
    },
    {
        "word": "იაფი",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "ძვირი",
        "oppositeEmoji": "💎",
        "subtext": "დაბალი ფასი / იაფი ფრენა / ძალიან იაფი",
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
        "femininePlural": null
    },
    {
        "word": "ძვირი",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "იაფი",
        "oppositeEmoji": "🏷️",
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
        "femininePlural": null
    },
    {
        "word": "კარგი",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "ცუდი",
        "oppositeEmoji": "👎",
        "subtext": "დიდებული / კარგი იდეა / წარმატება / კარგი ფასი",
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
        "femininePlural": null
    },
    {
        "word": "ცუდი",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "კარგი",
        "oppositeEmoji": "👍",
        "subtext": "საშინელი / ცუდი ამბები / უიღბლობა / ცუდი გადაწყვეტილება",
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
        "femininePlural": null
    },
    {
        "word": "დიდი",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "პატარა",
        "oppositeEmoji": "🐭",
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
        "femininePlural": null
    },
    {
        "word": "პატარა",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "დიდი",
        "oppositeEmoji": "🐘",
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
        "femininePlural": null
    },
    {
        "word": "ადვილი",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "რთული",
        "oppositeEmoji": "❌",
        "definitions": [
            {
                "text": "არა რთული:",
                "examples": [
                    "ეს ადვილი დავალებაა:"
                ]
            }
        ],
        "subtext": "ადვილად გასაკეთებელი / ძალიან ადვილი / არ არის ადვილი",
        "comparative": "უფრო ადვილი",
        "superlative": "ყველაზე ადვილი",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "რთული",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "ადვილი",
        "oppositeEmoji": "✅",
        "definitions": [
            {
                "text": "ბევრ ძალისხმევას რომ მოითხოვს:",
                "examples": [
                    "პროექტი ძალიან რთული ჩანს:"
                ]
            }
        ],
        "subtext": "რთულად გასაკეთებელი / ძალიან რთული",
        "comparative": "უფრო რთული",
        "superlative": "ყველაზე რთული",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "ბედნიერი",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "form": "adjective",
        "subtext": "ბედნიერი / ბედნიერად ყოფნა / ბედნიერი დღე",
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
        "femininePlural": null
    },
    {
        "word": "დაღლილი",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😫",
        "form": "adjective",
        "subtext": "მძინარე / დაღლილად ყოფნა / ძალიან დაღლილი",
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
        "femininePlural": null
    },
    {
        "word": "სრული განაკვეთი",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "adjective",
        "opposite": "ნახევარი განაკვეთი",
        "oppositeEmoji": "⏳",
        "definitions": [
            {
                "text": "სამუშაო კვირის ყველა საათის განმავლობაში მუშაობა:",
                "examples": [
                    "მას სრული განაკვეთით სამუშაო აქვს ბანკში:"
                ]
            }
        ],
        "subtext": "სრული განაკვეთით მუშაობა",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "ნახევარი განაკვეთი",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "form": "adjective",
        "opposite": "სრული განაკვეთი",
        "oppositeEmoji": "⏰",
        "definitions": [
            {
                "text": "სამუშაო კვირის არა ყველა საათის განმავლობაში მუშაობა:",
                "examples": [
                    "შაბათობით ნახევარ განაკვეთზე მუშაობს:"
                ]
            }
        ],
        "subtext": "ნახევარი განაკვეთით მუშაობა",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "სუფთა",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "ჭუჭყიანი",
        "oppositeEmoji": "💩",
        "subtext": "სუფთა ტანსაცმელი / სუფთა ოთახი / სისუფთავის დაცვა",
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
        "femininePlural": null
    },
    {
        "word": "ჯანსაღი",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥗",
        "form": "adjective",
        "opposite": "არაჯანსაღი",
        "oppositeEmoji": "🍔",
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
        "femininePlural": null
    },
    {
        "word": "ავადმყოფი",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤒",
        "form": "adjective",
        "opposite": "ჯანმრთელი",
        "oppositeEmoji": "💪",
        "subtext": "ავადმყოფად ყოფნა",
        "definitions": [
            {
                "text": "არა ჯანსაღი; ავადმყოფი:",
                "examples": [
                    "დღეს თავს შეუძლოდ ვგრძნობ:"
                ]
            }
        ],
        "comparative": null,
         "superlative": null
    },
    {
        "word": "ონლაინ",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🌐",
        "form": "adjective",
        "opposite": "ხაზგარეშე",
        "oppositeEmoji": "📴",
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
         "superlative": null
    },
    {
        "word": "მარტო",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "ერთად",
        "oppositeEmoji": "👫",
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
         "superlative": null
    },
    {
        "word": "მოდუნებული",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "დასტრესილი",
        "oppositeEmoji": "😫",
        "subtext": "წყნარად ყოფნა / მოდუნებული",
        "definitions": [
            {
                "text": "წყნარი; არა შეშფოთებული ან დასტრესილი:",
                "examples": [
                    "დასვენების დღეებში თავს მშვიდად ვგრძნობ:"
                ]
            }
        ],
        "comparative": null,
         "superlative": null
    },
    {
        "word": "შეწუხებული",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😟",
        "form": "adjective",
        "opposite": "წყნარი",
        "oppositeEmoji": "😌",
        "subtext": "შეშფოთება",
        "definitions": [
            {
                "text": "შეშფოთების განცდა რაღაცის გამო:",
                "examples": [
                    "თავის სამსახურზე ნერვიულობს:"
                ]
            }
        ],
        "comparative": null,
         "superlative": null
    },
    {
        "word": "დაკავებული",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "subtext": "დაკავებული დღე / დატვირთული გრაფიკი",
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
        "femininePlural": null
    },
    {
        "word": "სასარგებლო",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "უსარგებლო",
        "oppositeEmoji": "🗑️",
        "subtext": "პრაქტიკული / სასარგებლო ყოფნა",
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
        "femininePlural": null
    },
    {
        "word": "მნიშვნელოვანი",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": null
    },
    {
        "word": "წითელი",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
         "superlative": null
    },
    {
        "word": "ლურჯი",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
         "superlative": null
    },
    {
        "word": "მწვანე",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
         "superlative": null
    },
    {
        "word": "თეთრი",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
         "superlative": null
    },
    {
        "word": "შავი",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
         "superlative": null
    },
    {
        "word": "ყვითელი",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
         "superlative": null
    },
    {
        "word": "თავისუფალი",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "თავისუფალი დრო / უფასო",
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
        "femininePlural": null
    },
    {
        "word": "ღია",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "form": "adjective",
        "opposite": "დაკეტილი",
        "oppositeEmoji": "🔒",
        "subtext": "ღია კარი / ღიაა ბიზნესისთვის",
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
        "femininePlural": null
    },
    {
        "word": "დაკეტილი",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "form": "adjective",
        "opposite": "ღია",
        "oppositeEmoji": "📖",
        "subtext": "დაკეტილია ლანჩისთვის / დაკეტილი კარი",
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
        "femininePlural": null
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
        "theme": "size_shape_A1",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "პატარა",
        "level": "starter",
        "form": "adjective",
        "subtext": "ცოტაოდენი / ცოტა ფული",
        "definitions": [
            {
                "text": "პატარა ზომის; მცირე რაოდენობით:",
                "examples": [
                    "He drives a little car to save on fuel."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": null,
         "superlative": null
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
        "theme": "size_shape_A1",
        "comparative": "უფრო გრძელი",
        "superlative": "ყველაზე გრძელი",
        "feminine": null,
        "plural": null,
        "femininePlural": null
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
        "theme": "size_shape_A1",
        "comparative": null,
         "superlative": null
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
        "theme": "size_shape_A1",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "სავსე",
        "level": "starter",
        "form": "adjective",
        "subtext": "სრული დღე / ხალხით სავსე",
        "definitions": [
            {
                "text": "როდესაც ადგილი აღარ არის:",
                "examples": [
                    "ოფისი სავსეა ხალხით დღეს:"
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "უფრო სავსე",
        "superlative": "ყველაზე სავსე",
        "feminine": null,
        "plural": null,
        "femininePlural": null
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
        "theme": "size_shape_A1",
        "comparative": "უფრო ცარიელი",
        "superlative": "ყველაზე ცარიელი",
        "feminine": null,
        "plural": null,
        "femininePlural": null
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
        "theme": "weather_A1",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "გრილი",
        "level": "starter",
        "form": "adjective",
        "subtext": "გრილი სასმელი / სიგრილის შენარჩუნება",
        "definitions": [
            {
                "text": "ოდნავ ცივი; სასიამოვნო დაბალი ტემპერატურა:",
                "examples": [
                    "მუშაობისთვის გრილ ამინდს ამჯობინებს:"
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": null,
         "superlative": null
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
        "theme": "weather_A1",
        "comparative": "უფრო სველი",
        "superlative": "ყველაზე სველი",
        "feminine": null,
        "plural": null,
        "femininePlural": null
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
        "theme": "weather_A1",
        "comparative": "უფრო მშრალი",
        "superlative": "ყველაზე მშრალი",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "ჭუჭყიანი",
        "level": "starter",
        "theme": "household_tasks_A1",
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
        "femininePlural": null
    },
    {
        "word": "მაგარი",
        "level": "starter",
        "form": "adjective",
        "subtext": "რთული სამუშაო / რთული გადაწყვეტილება",
        "definitions": [
            {
                "text": "არა რბილი:",
                "examples": [
                    "ეს სკამი ძალიან მაგარია:"
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "უფრო მაგარი",
        "superlative": "ყველაზე მაგარი",
        "feminine": null,
        "plural": null,
        "femininePlural": null
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
        "theme": "size_shape_A1",
        "comparative": "უფრო რბილი",
        "superlative": "ყველაზე რბილი",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "მძიმე",
        "level": "starter",
        "form": "adjective",
        "subtext": "მძიმე ტრაფიკი / ძლიერი წვიმა",
        "definitions": [
            {
                "text": "დიდი წონის მქონე:",
                "examples": [
                    "ეს ყუთი ძალიან მძიმეა:"
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "უფრო მძიმე",
        "superlative": "ყველაზე მძიმე",
        "feminine": null,
        "plural": null,
        "femininePlural": null
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
        "theme": "size_shape_A1",
        "comparative": null,
         "superlative": null
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
        "theme": "colours_patterns_A1",
        "comparative": null,
         "superlative": null
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
        "theme": "colours_patterns_A1",
        "comparative": null,
         "superlative": null
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
        "theme": "colours_patterns_A1",
        "comparative": null,
         "superlative": null
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
        "theme": "colours_patterns_A1",
        "comparative": null,
         "superlative": null
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
        "theme": "describing_things_A1",
        "comparative": null,
         "superlative": null
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
        "theme": "describing_things_A1",
        "comparative": null,
         "superlative": null
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
        "theme": "describing_things_A1",
        "comparative": null,
         "superlative": null
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
        "theme": "describing_things_A1",
        "comparative": "უფრო საშინელი",
        "superlative": "ყველაზე საშინელი",
        "feminine": null,
        "plural": null,
        "femininePlural": null
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
        "theme": "describing_things_A1",
        "comparative": null,
         "superlative": null
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
        "theme": "describing_things_A1",
        "comparative": null,
         "superlative": null
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
        "theme": "describing_things_A1",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "მოწყენილი",
        "level": "starter",
        "form": "adjective",
        "subtext": "მოწყენილად ყოფნა / სევდიანი სიტუაცია",
        "definitions": [
            {
                "text": "არა ბედნიერი, ხშირად ცუდი ამბის გამო:",
                "examples": [
                    "ის მოწყენილია, რომ ოფისიდან უნდა წავიდეს:"
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "უფრო მოწყენილი",
        "superlative": "ყველაზე მოწყენილი",
        "feminine": null,
        "plural": null,
        "femininePlural": null
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
        "theme": "basic_negative_emotions_A1",
        "comparative": "უფრო მშიერი",
        "superlative": "ყველაზე მშიერი",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "გაბრაზებული",
        "level": "starter",
        "form": "adjective",
        "subtext": "გაბრაზებული ყოფნა / ვინმეზე გაბრაზება",
        "definitions": [
            {
                "text": "რისხვის განცდა:",
                "examples": [
                    "ის გაბრაზებულია დაგვიანების გამო:"
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "უფრო გაბრაზებული",
        "superlative": "ყველაზე გაბრაზებული",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "მოწყენილი",
        "level": "starter",
        "form": "adjective",
        "subtext": "მოწყენილად ყოფნა",
        "definitions": [
            {
                "text": "ინტერესის არმქონე:",
                "examples": [
                    "გრძელ შეხვედრებზე ბეზრდება:"
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "აღელვებული",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
         "superlative": null
    },
    {
        "word": "შეშინებული",
        "level": "starter",
        "form": "adjective",
        "subtext": "რაღაცის შიში",
        "definitions": [
            {
                "text": "შიშის განცდა:",
                "examples": [
                    "შეცდომების დაშვების ეშინია:"
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "მწუხარე",
        "level": "starter",
        "form": "adjective",
        "subtext": "წუხილი რაღაცის გამო",
        "definitions": [
            {
                "text": "სინანულის ან სევდის განცდა:",
                "examples": [
                    "ბოდიშს იხდის დაგვიანებისთვის:"
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": null,
         "superlative": null
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
        "theme": "describing_things_A1",
        "comparative": null,
         "superlative": null
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
        "theme": "describing_things_A1",
        "comparative": "უფრო არასწორი",
        "superlative": "ყველაზე არასწორი",
        "feminine": null,
        "plural": null,
        "femininePlural": null
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
        "theme": "size_shape_A1",
        "comparative": "უფრო ახალი",
        "superlative": "ყველაზე ახალი",
        "feminine": null,
        "plural": null,
        "femininePlural": null
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
        "theme": "describing_things_A1",
        "comparative": "უფრო განსხვავებული",
        "superlative": "ყველაზე განსხვავებული",
        "feminine": null,
        "plural": null,
        "femininePlural": null
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
        "theme": "describing_things_A1",
        "comparative": "უფრო იგივე",
        "superlative": "ყველაზე იგივე",
        "feminine": null,
        "plural": null,
        "femininePlural": null
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
        "theme": "size_shape_A1",
        "comparative": "უფრო სწრაფი",
        "superlative": "ყველაზე სწრაფი",
        "feminine": null,
        "plural": null,
        "femininePlural": null
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
        "theme": "size_shape_A1",
        "comparative": "უფრო ნელი",
        "superlative": "ყველაზე ნელი",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "წყნარი",
        "level": "starter",
        "form": "adjective",
        "subtext": "წყნარი ადგილი / სიწყნარის შენარჩუნება",
        "definitions": [
            {
                "text": "ხმაურის გარეშე:",
                "examples": [
                    "აქ ძალიან წყნარია მუშაობისთვის:"
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "უფრო წყნარი",
        "superlative": "ყველაზე წყნარი",
        "feminine": null,
        "plural": null,
        "femininePlural": null
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
        "theme": "describing_things_A1",
        "comparative": "უფრო ხმამაღალი",
        "superlative": "ყველაზე ხმამაღალი",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "უსაფრთხო",
        "level": "starter",
        "form": "adjective",
        "subtext": "უსაფრთხო ადგილი / უსაფრთხოდ ყოფნა",
        "definitions": [
            {
                "text": "საფრთხისგან შორს:",
                "examples": [
                    "ეს ტერიტორია ძალიან უსაფრთხოა:"
                ]
            }
        ],
        "theme": "local_places_services_A1",
        "comparative": "უფრო უსაფრთხო",
        "superlative": "ყველაზე უსაფრთხო",
        "feminine": null,
        "plural": null,
        "femininePlural": null
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
        "theme": "local_places_services_A1",
        "comparative": "უფრო სახიფათო",
        "superlative": "ყველაზე სახიფათო",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "უბედური",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "უკმაყოფილო; არა ნასიამოვნები:",
                "examples": [
                    "ის უკმაყოფილოა თავისი ამჟამინდელი ხელფასით:"
                ]
            }
        ],
        "subtext": "უბედურად ყოფნა / ძალიან უბედური",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "ნერვიული",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "შეშფოთებული ან შეშინებული:",
                "examples": [
                    "მე ყოველთვის ცოტათი ვნერვიულობ შეხვედრების წინ:"
                ]
            }
        ],
        "subtext": "ნერვიულად ყოფნა / ძალიან ნერვიული",
        "comparative": "უფრო ნერვიული",
        "superlative": "ყველაზე ნერვიული",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "დასტრესილი",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "წნეხისგან გამოწვეული შეშფოთება და დაძაბულობა:",
                "examples": [
                    "She feels stressed before every deadline."
                ]
            }
        ],
        "subtext": "დაძაბულად ყოფნა / ძალიან დასტრესილი",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "თავდაჯერებული",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "საკუთარ შესაძლებლობებში დარწმუნებულობა:",
                "examples": [
                    "ის ძალიან თავდაჯერებულია კლიენტების პრეზენტაციებისას:"
                ]
            }
        ],
        "subtext": "თავდაჯერებულად ყოფნა / ძალიან თავდაჯერებული",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "ამაყი",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "სიამაყის განცდა:",
                "examples": [
                    "მე ვამაყობ ჩვენი გუნდის წარმატებით:"
                ]
            }
        ],
        "subtext": "ამაყად ყოფნა / ძალიან ამაყი",
        "comparative": "უფრო ამაყი",
        "superlative": "ყველაზე ამაყი",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "შეშინებული",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "შიშის განცდა:",
                "examples": [
                    "ის შეშინებული ჩანს:"
                ]
            }
        ],
        "subtext": "შეშინებულად ყოფნა / ძალიან შეშინებული",
        "comparative": "უფრო შეშინებული",
        "superlative": "ყველაზე შეშინებული",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "გაკვირვებული",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "შოკის განცდა მოულოდნელი რაღაცის გამო:",
                "examples": [
                    "გაუკვირდა ხელფასის მომატება:"
                ]
            }
        ],
        "subtext": "გაკვირვებულად ყოფნა / ძალიან გაკვირვებული",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "იმედგაცრუებული",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "მოწყენილობა იმის გამო, რომ რაღაც არ აღმოჩნდა მოლოდინის შესაბამისი:",
                "examples": [
                    "იმედგაცრუებული დარჩა, რომ სამსახური ვერ მიიღო:"
                ]
            }
        ],
        "subtext": "იმედგაცრუებულად ყოფნა / ძალიან იმედგაცრუებული",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "ლამაზი",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": null
    },
    {
        "word": "ლამაზი",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "თვალისთვის სასიამოვნო; საკმაოდ მიმზიდველი:",
                "examples": [
                    "ახალი შეხვედრების ოთახი ძალიან ლამაზია:"
                ]
            }
        ],
        "subtext": "საკმაოდ კარგი / ლამაზი ადგილი",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "ძლიერი",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": null
    },
    {
        "word": "სუსტი",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": null
    },
    {
        "word": "ფორმაში",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "კარგ ფიზიკურ მდგომარეობაში ვარჯიშის წყალობით:",
                "examples": [
                    "ის ფორმას ინარჩუნებს ყოველდღე სამსახურში ველოსიპედით სიარულით:"
                ]
            }
        ],
        "subtext": "ფიზიკურად კარგ ფორმაში / ფორმის შენარჩუნება",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "შესანიშნავი",
        "level": "starter",
        "theme": "describing_things_A1",
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
         "superlative": null
    },
    {
        "word": "იდეალური",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": null
    },
    {
        "word": "უსარგებლო",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": null
    },
    {
        "word": "სწორი",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": null
    },
    {
        "word": "საინტერესო",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "ყურადღების მიმზიდველი:",
                "examples": [
                    "მას ძალიან საინტერესო იდეები აქვს:"
                ]
            }
        ],
        "subtext": "საინტერესოდ მიჩნევა / ძალიან საინტერესო",
        "comparative": "უფრო საინტერესო",
        "superlative": "ყველაზე საინტერესო",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "მოსაწყენი",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": null
    },
    {
        "word": "საჭირო",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "საჭირო რაღაცის გასაკეთებლად:",
                "examples": [
                    "კარგი ინტერნეტ კავშირი აუცილებელია დისტანციური მუშაობისთვის:"
                ]
            }
        ],
        "subtext": "აბსოლუტურად საჭირო / თუ საჭიროა",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "შესაძლებელი",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "რაც შეიძლება მოხდეს:",
                "examples": [
                    "შესაძლებელია, რომ დავაგვიანო:"
                ]
            }
        ],
        "subtext": "რაც შეიძლება მალე / შესაძლებელია",
        "comparative": "უფრო შესაძლებელი",
        "superlative": "ყველაზე შესაძლებელი",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "შეუძლებელი",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "რაც ვერ მოხდება:",
                "examples": [
                    "ამ პროექტის ერთ დღეში დასრულება შეუძლებელია:"
                ]
            }
        ],
        "subtext": "თითქმის შეუძლებელი / შეუძლებლის გაკეთება",
        "comparative": "უფრო შეუძლებელი",
        "superlative": "ყველაზე შეუძლებელი",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "სპეციალური",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": null
    },
    {
        "word": "პოპულარული",
        "level": "starter",
        "theme": "describing_things_A1",
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
         "superlative": null
    },
    {
        "word": "მსგავსი",
        "level": "starter",
        "theme": "describing_things_A1",
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
         "superlative": null
    },
    {
        "word": "მეგობრული",
        "level": "starter",
        "theme": "describing_things_A1",
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
         "superlative": null
    },
    {
        "word": "კეთილი",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "მზრუნველი და დამხმარე:",
                "examples": [
                    "ის ძალიან კეთილი კოლეგაა:"
                ]
            }
        ],
        "subtext": "ძალიან კეთილი / კეთილია თქვენი მხრიდან",
        "comparative": "უფრო კეთილი",
        "superlative": "ყველაზე კეთილი",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "სასაცილო",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": null
    },
    {
        "word": "ჭკვიანი",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "სწრაფად შემთვისებელი:",
                "examples": [
                    "ის ჩვენს გუნდში ყველაზე ჭკვიანია:"
                ]
            }
        ],
        "subtext": "ძალიან ჭკვიანი / ჭკვიანური იდეა",
        "comparative": "უფრო ჭკვიანი",
        "superlative": "ყველაზე ჭკვიანი",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "ზრდილი",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": null
    },
    {
        "word": "უხეში",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": null
    },
    {
        "word": "ზარმაცი",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "მუშაობის სურვილის არმქონე:",
                "examples": [
                    "ის არ არის ზარმაცი, უბრალოდ დაიღალა:"
                ]
            }
        ],
        "subtext": "ძალიან ზარმაცი / ზარმაცული მიდგომა",
        "comparative": "უფრო ზარმაცი",
        "superlative": "ყველაზე ზარმაცი",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "პატიოსანი",
        "level": "starter",
        "theme": "describing_things_A1",
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
         "superlative": null
    },
    {
        "word": "ხმაურიანი",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "femininePlural": null
    }
];
    const lang = "ka";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();