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
        "subtext": "young person / young professional / young at heart",
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
        "subtext": "old friend / old habits / very old",
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
        "subtext": "sunny day / sunny weather / sunny spell",
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
        "subtext": "rainy day / rainy weather / rainy season",
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
        "subtext": "very hot, hot weather / hot weather / a hot drink / too hot",
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
        "subtext": "very cold, cold morning / cold weather / a cold drink / too cold",
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
                "text": "Normal or usual; not special.",
                "examples": [
                    "It was an ordinary day."
                ]
            }
        ],
        "subtext": "ordinary day / ordinary life / nothing ordinary",
        "comparative": "more ordinary",
        "superlative": "the most ordinary"
    },
    {
        "word": "იაფი",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "ძვირი",
        "oppositeEmoji": "💎",
        "subtext": "low price, inexpensive / cheap flight / very cheap / cheap and cheerful",
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
        "subtext": "costly, high price / very expensive / expensive taste / too expensive",
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
        "subtext": "great, nice, pleasant / good idea / good luck / good value",
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
        "subtext": "terrible, awful, unpleasant / bad news / bad luck / bad decision",
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
        "subtext": "large, huge / a big house / a big problem / big enough",
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
        "subtext": "little, tiny / a small flat / a small salary / too small",
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
        "subtext": "easy to do / nice and easy / not easy",
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
        "subtext": "difficult to do / very difficult / find it difficult",
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
        "subtext": "glad, cheerful, feel happy / feel happy / happy with something / a happy day",
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
        "subtext": "sleepy, exhausted, feel tired / feel tired / tired of something / very tired",
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
        "word": "full-time",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "adjective",
        "opposite": "part-time",
        "oppositeEmoji": "⏳",
        "definitions": [
            {
                "text": "Working the complete number of hours in a working week.",
                "examples": [
                    "She has a full-time job in a bank."
                ]
            }
        ],
        "subtext": "full-time job / full-time work / full-time employee",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "part-time",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "form": "adjective",
        "opposite": "full-time",
        "oppositeEmoji": "⏰",
        "definitions": [
            {
                "text": "Working fewer hours than a standard working week.",
                "examples": [
                    "He works part-time on Saturdays."
                ]
            }
        ],
        "subtext": "part-time job / part-time work / part-time student",
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
        "subtext": "tidy, not dirty, keep it clean / clean clothes / a clean room / keep clean",
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
        "opposite": "unhealthy",
        "oppositeEmoji": "🍔",
        "subtext": "well, fit, healthy diet",
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
        "opposite": "well",
        "oppositeEmoji": "💪",
        "subtext": "sick, feel ill",
        "definitions": [
            {
                "text": "Not well; sick.",
                "examples": [
                    "I feel ill today."
                ]
            }
        ],
        "comparative": "iller",
        "superlative": "the illest"
    },
    {
        "word": "ონლაინ",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🌐",
        "form": "adjective",
        "opposite": "offline",
        "oppositeEmoji": "📴",
        "definitions": [
            {
                "text": "Using the internet.",
                "examples": [
                    "I buy food online sometimes."
                ]
            }
        ],
        "subtext": "online shopping / online course / stay online",
        "comparative": "more online",
        "superlative": "the most online"
    },
    {
        "word": "მარტო",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "together",
        "oppositeEmoji": "👫",
        "definitions": [
            {
                "text": "Without other people; by yourself.",
                "examples": [
                    "She lives alone."
                ]
            }
        ],
        "subtext": "live alone / travel alone / feel alone",
        "comparative": "more alone",
        "superlative": "the most alone"
    },
    {
        "word": "მოდუნებული",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "stressed",
        "oppositeEmoji": "😫",
        "subtext": "calm, feeling relaxed",
        "definitions": [
            {
                "text": "Calm; not worried or stressed.",
                "examples": [
                    "I feel relaxed at the weekend."
                ]
            }
        ],
        "comparative": "more relaxed",
        "superlative": "the most relaxed"
    },
    {
        "word": "შეწუხებული",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😟",
        "form": "adjective",
        "opposite": "calm",
        "oppositeEmoji": "😌",
        "subtext": "anxious",
        "definitions": [
            {
                "text": "Feeling anxious about something that might happen.",
                "examples": [
                    "She is worried about her job."
                ]
            }
        ],
        "comparative": "more worried",
        "superlative": "the most worried"
    },
    {
        "word": "დაკავებული",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "subtext": "very busy, busy day / busy schedule / very busy / too busy",
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
        "subtext": "helpful, practical",
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
        "subtext": "essential / important meeting / very important / most important",
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
        "subtext": "dark red, bright red / red wine / red face / red light",
        "definitions": [
            {
                "text": "Having the colour of blood or a ripe tomato.",
                "examples": [
                    "She has a red bag."
                ]
            },
            {
                "text": "Having the colour of blood.",
                "examples": [
                    "She drives a red car."
                ]
            }
        ],
        "comparative": "redder",
        "superlative": "the reddest"
    },
    {
        "word": "ლურჯი",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟦",
        "form": "adjective",
        "subtext": "light blue, dark blue / dark blue / light blue / blue sky",
        "definitions": [
            {
                "text": "Having the colour of a clear sky.",
                "examples": [
                    "His car is blue."
                ]
            },
            {
                "text": "Having the colour of the sky.",
                "examples": [
                    "He wears a blue shirt to work."
                ]
            }
        ],
        "comparative": "bluer",
        "superlative": "the bluest"
    },
    {
        "word": "მწვანე",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟩",
        "form": "adjective",
        "subtext": "bright green, dark green / green energy / green space / bright green",
        "definitions": [
            {
                "text": "Having the colour of grass or leaves.",
                "examples": [
                    "She wears a green dress."
                ]
            },
            {
                "text": "Having the colour of grass.",
                "examples": [
                    "The company has green credentials."
                ]
            }
        ],
        "comparative": "greener",
        "superlative": "the greenest"
    },
    {
        "word": "თეთრი",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬜",
        "form": "adjective",
        "subtext": "pure white, snow white / white wine / off-white / bright white",
        "definitions": [
            {
                "text": "Having the colour of snow or milk.",
                "examples": [
                    "The walls are white."
                ]
            },
            {
                "text": "Having the lightest colour.",
                "examples": [
                    "The office walls are painted white."
                ]
            }
        ],
        "comparative": "whiter",
        "superlative": "the whitest"
    },
    {
        "word": "შავი",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬛",
        "form": "adjective",
        "subtext": "jet black, dark as night / black coffee / black market / jet black",
        "definitions": [
            {
                "text": "Having the darkest colour, like the night sky.",
                "examples": [
                    "He wears a black coat."
                ]
            },
            {
                "text": "Having the darkest colour.",
                "examples": [
                    "He always wears a black suit."
                ]
            }
        ],
        "comparative": "blacker",
        "superlative": "the blackest"
    },
    {
        "word": "ყვითელი",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟨",
        "form": "adjective",
        "subtext": "bright yellow, lemon yellow / yellow light / pale yellow / bright yellow",
        "definitions": [
            {
                "text": "Having the colour of the sun or a lemon.",
                "examples": [
                    "She has a yellow umbrella."
                ]
            },
            {
                "text": "Having the colour of the sun.",
                "examples": [
                    "She bought a yellow notepad."
                ]
            }
        ],
        "comparative": "yellower",
        "superlative": "the yellowest"
    },
    {
        "word": "თავისუფალი",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "free of charge, free gift / free time / free of charge / free to do",
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
        "subtext": "now open, open for business / open door / open to ideas / wide open",
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
        "subtext": "now closed, temporarily closed / closed for lunch / closed mind / closed door",
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
        "subtext": "a large city / a large company / a large amount",
        "definitions": [
            {
                "text": "Of more than average size or amount.",
                "examples": [
                    "Paris is a very large city."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "larger",
        "superlative": "the largest"
    },
    {
        "word": "პატარა",
        "level": "starter",
        "form": "adjective",
        "subtext": "a little bit / a little money / too little",
        "definitions": [
            {
                "text": "Small in size; a small amount of.",
                "examples": [
                    "He drives a little car to save on fuel."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "smaller",
        "superlative": "the smallest"
    },
    {
        "word": "გრძელი",
        "level": "starter",
        "form": "adjective",
        "subtext": "a long journey / a long day / a long time",
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
        "subtext": "high price / high rent / high quality",
        "definitions": [
            {
                "text": "Of greater than average height or level.",
                "examples": [
                    "The rent in this area is very high."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "higher",
        "superlative": "the highest"
    },
    {
        "word": "დაბალი",
        "level": "starter",
        "form": "adjective",
        "subtext": "low price / low salary / low quality",
        "definitions": [
            {
                "text": "Of less than average height or level.",
                "examples": [
                    "The salary is too low for the hours involved."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "lower",
        "superlative": "the lowest"
    },
    {
        "word": "სავსე",
        "level": "starter",
        "form": "adjective",
        "subtext": "full time / a full day / full of people",
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
        "subtext": "an empty flat / an empty room / nearly empty",
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
        "subtext": "warm weather / a warm welcome / keep warm",
        "definitions": [
            {
                "text": "Slightly hot; pleasantly heated.",
                "examples": [
                    "The office is warm and comfortable."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "warmer",
        "superlative": "the warmest"
    },
    {
        "word": "გრილი",
        "level": "starter",
        "form": "adjective",
        "subtext": "cool weather / a cool drink / stay cool",
        "definitions": [
            {
                "text": "Slightly cold; pleasantly low temperature.",
                "examples": [
                    "She prefers cool weather for working."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "cooler",
        "superlative": "the coolest"
    },
    {
        "word": "სველი",
        "level": "starter",
        "form": "adjective",
        "subtext": "wet weather / wet clothes / get wet",
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
        "subtext": "dry weather / dry skin / keep dry",
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
        "form": "adjective",
        "subtext": "dirty hands / dirty clothes / get dirty",
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
        "subtext": "hard work / a hard decision / too hard",
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
        "subtext": "soft light / soft music / soft skills",
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
        "subtext": "heavy traffic / heavy rain / too heavy",
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
        "subtext": "light rain / light traffic / a light meal",
        "definitions": [
            {
                "text": "Not heavy; pale in colour.",
                "examples": [
                    "She carries a light bag to work every day."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "lighter",
        "superlative": "the lightest"
    },
    {
        "word": "ყავისფერი",
        "level": "starter",
        "form": "adjective",
        "subtext": "dark brown / light brown / brown bread",
        "definitions": [
            {
                "text": "Having the colour of wood or earth.",
                "examples": [
                    "She has brown eyes and dark hair."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "browner",
        "superlative": "the brownest"
    },
    {
        "word": "ნაცრისფერი",
        "level": "starter",
        "form": "adjective",
        "subtext": "grey area / grey sky / pale grey",
        "definitions": [
            {
                "text": "Having a colour between black and white.",
                "examples": [
                    "He has grey hair and a kind face."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "greyer",
        "superlative": "the greyest"
    },
    {
        "word": "ვარდისფერი",
        "level": "starter",
        "form": "adjective",
        "subtext": "light pink / bright pink / hot pink",
        "definitions": [
            {
                "text": "Having a pale red colour.",
                "examples": [
                    "She prefers pink to red."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "pinker",
        "superlative": "the pinkest"
    },
    {
        "word": "ნარინჯისფერი",
        "level": "starter",
        "form": "adjective",
        "subtext": "bright orange / dark orange / orange light",
        "definitions": [
            {
                "text": "Having the colour of an orange fruit.",
                "examples": [
                    "He bought an orange jacket."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "orangeer",
        "superlative": "the orangeest"
    },
    {
        "word": "დიდებული",
        "level": "starter",
        "form": "adjective",
        "subtext": "a great idea / a great opportunity / great value",
        "definitions": [
            {
                "text": "Extremely good; large in amount.",
                "examples": [
                    "She is a great manager."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "greater",
        "superlative": "the greatest"
    },
    {
        "word": "კარგი",
        "level": "starter",
        "form": "adjective",
        "subtext": "a nice day / a nice place / a nice person",
        "definitions": [
            {
                "text": "Pleasant or kind.",
                "examples": [
                    "The new office is very nice."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "nicer",
        "superlative": "the nicest"
    },
    {
        "word": "საოცარი",
        "level": "starter",
        "form": "adjective",
        "subtext": "a wonderful opportunity / a wonderful time",
        "definitions": [
            {
                "text": "Extremely good; causing delight.",
                "examples": [
                    "They had a wonderful team."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "more wonderful",
        "superlative": "the most wonderful"
    },
    {
        "word": "საშინელი",
        "level": "starter",
        "form": "adjective",
        "subtext": "terrible weather / a terrible mistake / terrible news",
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
        "subtext": "awful weather / awful news / simply awful",
        "definitions": [
            {
                "text": "Very bad or unpleasant.",
                "examples": [
                    "The noise in the open office is awful."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "more awful",
        "superlative": "the most awful"
    },
    {
        "word": "გადასარევი",
        "level": "starter",
        "form": "adjective",
        "subtext": "an amazing result / an amazing offer / truly amazing",
        "definitions": [
            {
                "text": "Causing great surprise or admiration.",
                "examples": [
                    "She gave an amazing presentation."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "more amazing",
        "superlative": "the most amazing"
    },
    {
        "word": "ფანტასტიკური",
        "level": "starter",
        "form": "adjective",
        "subtext": "fantastic news / a fantastic opportunity / truly fantastic",
        "definitions": [
            {
                "text": "Extremely good.",
                "examples": [
                    "The new system works in a fantastic way."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "more fantastic",
        "superlative": "the most fantastic"
    },
    {
        "word": "მოწყენილი",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel sad / a sad situation / deeply sad",
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
        "subtext": "feel hungry / very hungry / go hungry",
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
        "subtext": "feel angry / angry with someone / very angry",
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
        "subtext": "feel bored / bored with / easily bored",
        "definitions": [
            {
                "text": "Feeling uninterested or restless.",
                "examples": [
                    "He feels bored in long meetings."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "more bored",
        "superlative": "the most bored"
    },
    {
        "word": "აღელვებული",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel excited / excited about / very excited",
        "definitions": [
            {
                "text": "Feeling enthusiasm and eagerness.",
                "examples": [
                    "She is excited about her new job."
                ]
            }
        ],
        "comparative": "more excited",
        "superlative": "the most excited"
    },
    {
        "word": "შეშინებული",
        "level": "starter",
        "form": "adjective",
        "subtext": "afraid of / feel afraid / deeply afraid",
        "definitions": [
            {
                "text": "Feeling fear.",
                "examples": [
                    "He is afraid of making mistakes."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "more afraid",
        "superlative": "the most afraid"
    },
    {
        "word": "მწუხარე",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel sorry / sorry for / sorry about",
        "definitions": [
            {
                "text": "Feeling regret or sadness.",
                "examples": [
                    "She is sorry for the delay."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "sorrier",
        "superlative": "the sorriest"
    },
    {
        "word": "სწორი",
        "level": "starter",
        "form": "adjective",
        "subtext": "right answer / right time / absolutely right",
        "definitions": [
            {
                "text": "Correct; suitable.",
                "examples": [
                    "Is this the right office?"
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "righter",
        "superlative": "the rightest"
    },
    {
        "word": "არასწორი",
        "level": "starter",
        "form": "adjective",
        "subtext": "wrong answer / go wrong / completely wrong",
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
        "subtext": "new job / brand new / completely new",
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
        "subtext": "completely different / very different / different from",
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
        "subtext": "the same as / exactly the same / same time",
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
        "subtext": "fast food / fast train / very fast",
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
        "subtext": "slow progress / slow internet / very slow",
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
        "subtext": "quiet area / keep quiet / nice and quiet",
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
        "subtext": "loud noise / too loud / a loud voice",
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
        "subtext": "safe area / safe to do / feel safe",
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
        "subtext": "dangerous situation / very dangerous / potentially dangerous",
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
                "text": "Not feeling pleased; dissatisfied.",
                "examples": [
                    "He is unhappy with his current salary."
                ]
            }
        ],
        "subtext": "feel unhappy / very unhappy / unhappy about",
        "comparative": "unhappier",
        "superlative": "the unhappiest"
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
        "subtext": "feel nervous / nervous about / very nervous",
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
                "text": "Feeling worried and tense from pressure.",
                "examples": [
                    "She feels stressed before every deadline."
                ]
            }
        ],
        "subtext": "feel stressed / very stressed / stressed out",
        "comparative": "more stressed",
        "superlative": "the most stressed"
    },
    {
        "word": "თავდაჯერებული",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling sure of your own abilities.",
                "examples": [
                    "She is very confident in client presentations."
                ]
            }
        ],
        "subtext": "feel confident / self-confident / very confident",
        "comparative": "more confident",
        "superlative": "the most confident"
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
        "subtext": "feel proud / very proud / proud of",
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
        "subtext": "feel scared / scared of / very scared",
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
                "text": "Feeling shock at something unexpected.",
                "examples": [
                    "He was surprised to get a pay rise."
                ]
            }
        ],
        "subtext": "feel surprised / very surprised / pleasantly surprised",
        "comparative": "more surprised",
        "superlative": "the most surprised"
    },
    {
        "word": "იმედგაცრუებული",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling sad because something was not as good as expected.",
                "examples": [
                    "She was disappointed not to get the job."
                ]
            }
        ],
        "subtext": "feel disappointed / deeply disappointed / disappointed with",
        "comparative": "more disappointed",
        "superlative": "the most disappointed"
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
        "subtext": "beautiful view / beautiful city / absolutely beautiful",
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
                "text": "Pleasant to look at; quite attractive.",
                "examples": [
                    "The new meeting room is very pretty."
                ]
            }
        ],
        "subtext": "pretty good / a pretty place / quite pretty",
        "comparative": "prettier",
        "superlative": "the prettiest"
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
        "subtext": "strong coffee / strong opinion / very strong",
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
        "subtext": "weak connection / a weak argument / very weak",
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
                "text": "In good physical condition through exercise.",
                "examples": [
                    "She keeps fit by cycling to work every day."
                ]
            }
        ],
        "subtext": "physically fit / stay fit / keep fit",
        "comparative": "fitter",
        "superlative": "the fittest"
    },
    {
        "word": "შესანიშნავი",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Extremely good; of a very high standard.",
                "examples": [
                    "She received an excellent review."
                ]
            }
        ],
        "subtext": "excellent work / excellent results / absolutely excellent",
        "comparative": "more excellent",
        "superlative": "the most excellent"
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
        "subtext": "a perfect opportunity / perfect timing / absolutely perfect",
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
        "subtext": "completely useless / prove useless / a useless idea",
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
        "subtext": "correct answer / the correct way / completely correct",
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
        "subtext": "find interesting / very interesting / an interesting idea",
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
        "subtext": "very boring / a boring meeting / find boring",
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
                "text": "Needed; required in order to do something.",
                "examples": [
                    "A good internet connection is necessary for remote work."
                ]
            }
        ],
        "subtext": "absolutely necessary / if necessary / necessary to do",
        "comparative": "more necessary",
        "superlative": "the most necessary"
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
        "subtext": "as soon as possible / it is possible / make possible",
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
        "subtext": "virtually impossible / make impossible / nearly impossible",
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
        "subtext": "a special offer / special occasion / very special",
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
                "text": "Liked by many people.",
                "examples": [
                    "The new café near the office is very popular."
                ]
            }
        ],
        "subtext": "very popular / popular choice / most popular",
        "comparative": "more popular",
        "superlative": "the most popular"
    },
    {
        "word": "მსგავსი",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Almost the same; having many shared features.",
                "examples": [
                    "Our approaches are very similar."
                ]
            }
        ],
        "subtext": "very similar / similar to / similar results",
        "comparative": "more similar",
        "superlative": "the most similar"
    },
    {
        "word": "მეგობრული",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Kind and pleasant; easy to talk to.",
                "examples": [
                    "The new manager is very friendly and approachable."
                ]
            }
        ],
        "subtext": "very friendly / a friendly face / friendly atmosphere",
        "comparative": "more friendly",
        "superlative": "the most friendly"
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
        "subtext": "very kind / kind of you / a kind person",
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
        "subtext": "very funny / funny story / find funny",
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
        "subtext": "very clever / a clever idea / clever enough",
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
        "subtext": "very polite / polite request / polite enough",
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
        "subtext": "very rude / incredibly rude / deliberately rude",
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
        "subtext": "very lazy / a lazy approach / too lazy",
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
                "text": "Telling the truth; not deceiving.",
                "examples": [
                    "She is known for being completely honest with clients."
                ]
            }
        ],
        "subtext": "very honest / brutally honest / completely honest",
        "comparative": "more honest",
        "superlative": "the most honest"
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
        "subtext": "very noisy / noisy environment / too noisy",
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