(function() {
    const data = [
    {
        "word": "բարձրահասակ",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "կարճ",
        "oppositeEmoji": "📏",
        "definitions": [
            {
                "text": "Միջինից բարձր հասակ ունեցող:",
                "examples": [
                    "Նա մեր թիմի ամենաբարձրահասակ մարդն է:"
                ]
            }
        ],
        "subtext": "բարձր շենք / բարձրահասակ մարդ / բավականին բարձր",
        "comparative": "ավելի բարձրահասակ",
        "superlative": "ամենաբարձրահասակ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "կարճ",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "բարձրահասակ",
        "oppositeEmoji": "🗼",
        "definitions": [
            {
                "text": "Փոքր հեռավորություն կամ տևողություն ունեցող:",
                "examples": [
                    "Նա կարճ ընդմիջում արեց:"
                ]
            }
        ],
        "subtext": "կարճ ճանապարհորդություն / կարճ մազեր / շատ կարճ",
        "comparative": "ավելի կարճ",
        "superlative": "ամենակարճ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "երիտասարդ",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "հին",
        "oppositeEmoji": "👴",
        "definitions": [
            {
                "text": "Կյանքի սկզբում գտնվող:",
                "examples": [
                    "Մեր թիմը շատ երիտասարդ է:"
                ]
            }
        ],
        "subtext": "young person / young professional / young at heart",
        "comparative": "ավելի երիտասարդ",
        "superlative": "ամենաերիտասարդ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "հին",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "երիտասարդ",
        "oppositeEmoji": "👶",
        "definitions": [
            {
                "text": "Երկար ժամանակ գոյություն ունեցող:",
                "examples": [
                    "Մեր գրասենյակը հին շենքում է:"
                ]
            }
        ],
        "subtext": "old friend / old habits / very old",
        "comparative": "ավելի հին",
        "superlative": "ամենահին",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "արևոտ",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Արևով լի:",
                "examples": [
                    "Ես սիրում եմ արևոտ օրերը:"
                ]
            }
        ],
        "subtext": "sunny day / sunny weather / sunny spell",
        "comparative": "ավելի արևոտ",
        "superlative": "ամենաարևոտ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "անձրևոտ",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌧️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Անձրևով:",
                "examples": [
                    "Այսօր անձրևոտ օր է:"
                ]
            }
        ],
        "subtext": "rainy day / rainy weather / rainy season",
        "comparative": "ավելի անձրևոտ",
        "superlative": "ամենաանձրևոտ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "տաք",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🔥",
        "form": "adjective",
        "opposite": "սառը",
        "oppositeEmoji": "❄️",
        "subtext": "very hot, hot weather / hot weather / a hot drink / too hot",
        "definitions": [
            {
                "text": "Բարձր ջերմաստիճան ունեցող:",
                "examples": [
                    "Գրասենյակում այսօր շատ տաք է:"
                ]
            }
        ],
        "comparative": "ավելի տաք",
        "superlative": "ամենատաք",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "սառը",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "❄️",
        "form": "adjective",
        "opposite": "տաք",
        "oppositeEmoji": "🔥",
        "subtext": "very cold, cold morning / cold weather / a cold drink / too cold",
        "definitions": [
            {
                "text": "Ցածր ջերմաստիճան ունեցող:",
                "examples": [
                    "Ես սիրում եմ սառը ջուր խմել:"
                ]
            }
        ],
        "comparative": "ավելի սառը",
        "superlative": "ամենասառը",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "սովորական",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "հատուկ",
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
        "word": "էժան",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "թանկ",
        "oppositeEmoji": "💎",
        "subtext": "low price, inexpensive / cheap flight / very cheap / cheap and cheerful",
        "definitions": [
            {
                "text": "Քիչ գումար արժեցող:",
                "examples": [
                    "Գրասենյակի մոտ գտնվող ռեստորանը բավականին էժան է:"
                ]
            }
        ],
        "comparative": "ավելի էժան",
        "superlative": "ամենաէժան",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "թանկ",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "էժան",
        "oppositeEmoji": "🏷️",
        "subtext": "costly, high price / very expensive / expensive taste / too expensive",
        "definitions": [
            {
                "text": "Շատ գումար արժեցող:",
                "examples": [
                    "Այդ մեքենան չափազանց թանկ է:"
                ]
            }
        ],
        "comparative": "ավելի թանկ",
        "superlative": "ամենաթանկ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "լավ",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "վատ",
        "oppositeEmoji": "👎",
        "subtext": "great, nice, pleasant / good idea / good luck / good value",
        "definitions": [
            {
                "text": "Բարձր որակի կամ հաճելի:",
                "examples": [
                    "Սա լավ հնարավորություն է մեր թիմի համար:"
                ]
            }
        ],
        "comparative": "ավելի լավ",
        "superlative": "ամենալավ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "վատ",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "լավ",
        "oppositeEmoji": "👍",
        "subtext": "terrible, awful, unpleasant / bad news / bad luck / bad decision",
        "definitions": [
            {
                "text": "Ոչ լավ, ցածր որակի:",
                "examples": [
                    "Երեկ վատ օր էր աշխատանքում:"
                ]
            }
        ],
        "comparative": "ավելի վատ",
        "superlative": "ամենավատ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "մեծ",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "փոքր",
        "oppositeEmoji": "🐭",
        "subtext": "large, huge / a big house / a big problem / big enough",
        "definitions": [
            {
                "text": "Մեծ չափերով կամ քանակով:",
                "examples": [
                    "Մենք մեծ գրասենյակ ունենք կենտրոնում:"
                ]
            }
        ],
        "comparative": "ավելի մեծ",
        "superlative": "ամենամեծ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "փոքր",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "մեծ",
        "oppositeEmoji": "🐘",
        "subtext": "little, tiny / a small flat / a small salary / too small",
        "definitions": [
            {
                "text": "Փոքր չափերով կամ քանակով:",
                "examples": [
                    "Նա ապրում է փոքր բնակարանում:"
                ]
            }
        ],
        "comparative": "ավելի փոքր",
        "superlative": "ամենափոքր",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "հեշտ",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "դժվար",
        "oppositeEmoji": "❌",
        "definitions": [
            {
                "text": "Ոչ դժվար:",
                "examples": [
                    "Սա հեշտ առաջադրանք է:"
                ]
            }
        ],
        "subtext": "easy to do / nice and easy / not easy",
        "comparative": "ավելի հեշտ",
        "superlative": "ամենահեշտ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "դժվար",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "հեշտ",
        "oppositeEmoji": "✅",
        "definitions": [
            {
                "text": "Շատ ջանք կամ հմտություն պահանջող:",
                "examples": [
                    "Նախագիծը շատ դժվար է թվում:"
                ]
            }
        ],
        "subtext": "difficult to do / very difficult / find it difficult",
        "comparative": "ավելի դժվար",
        "superlative": "ամենադժվար",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "երջանիկ",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "form": "adjective",
        "subtext": "glad, cheerful, feel happy / feel happy / happy with something / a happy day",
        "definitions": [
            {
                "text": "Ուրախություն կամ բավարարվածություն զգալ:",
                "examples": [
                    "Ես երջանիկ եմ իմ նոր աշխատանքով:"
                ]
            }
        ],
        "comparative": "ավելի երջանիկ",
        "superlative": "ամենաերջանիկ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "հոգնած",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😫",
        "form": "adjective",
        "subtext": "sleepy, exhausted, feel tired / feel tired / tired of something / very tired",
        "definitions": [
            {
                "text": "Հանգստի կարիք ունեցող:",
                "examples": [
                    "Նա հոգնած է թվում երկար օրվանից հետո:"
                ]
            }
        ],
        "comparative": "ավելի հոգնած",
        "superlative": "ամենահոգնած",
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
        "word": "մաքուր",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "կեղտոտ",
        "oppositeEmoji": "💩",
        "subtext": "tidy, not dirty, keep it clean / clean clothes / a clean room / keep clean",
        "definitions": [
            {
                "text": "Առանց կեղտի:",
                "examples": [
                    "Խոհանոցը միշտ մաքուր է:"
                ]
            }
        ],
        "comparative": "ավելի մաքուր",
        "superlative": "ամենամաքուր",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "առողջ",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥗",
        "form": "adjective",
        "opposite": "unhealthy",
        "oppositeEmoji": "🍔",
        "subtext": "well, fit, healthy diet",
        "definitions": [
            {
                "text": "Լավ առողջություն ունեցող:",
                "examples": [
                    "Ես փորձում եմ առողջ սնունդ ուտել:"
                ]
            }
        ],
        "comparative": "ավելի առողջ",
        "superlative": "ամենաառողջ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "հիվանդ",
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
        "word": "առցանց",
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
        "word": "մենակ",
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
        "word": "հանգիստ",
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
        "word": "անհանգիստ",
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
        "word": "զբաղված",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "subtext": "very busy, busy day / busy schedule / very busy / too busy",
        "definitions": [
            {
                "text": "Շատ աշխատանք ունեցող:",
                "examples": [
                    "Ես այս շաբաթ շատ զբաղված եմ:"
                ]
            }
        ],
        "comparative": "ավելի զբաղված",
        "superlative": "ամենազբաղված",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "օգտակար",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "անօգուտ",
        "oppositeEmoji": "🗑️",
        "subtext": "helpful, practical",
        "definitions": [
            {
                "text": "Օգուտ բերող:",
                "examples": [
                    "Սա շատ օգտակար գործիք է:"
                ]
            }
        ],
        "comparative": "ավելի օգտակար",
        "superlative": "ամենաօգտակար",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "կարևոր",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❗",
        "form": "adjective",
        "subtext": "essential / important meeting / very important / most important",
        "definitions": [
            {
                "text": "Մեծ նշանակություն ունեցող:",
                "examples": [
                    "Սա շատ կարևոր նախագիծ է:"
                ]
            }
        ],
        "comparative": "ավելի կարևոր",
        "superlative": "ամենակարևոր",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "կարմիր",
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
        "word": "կապույտ",
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
        "word": "կանաչ",
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
        "word": "սպիտակ",
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
        "word": "սև",
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
        "word": "դեղին",
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
        "word": "ազատ",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "free of charge, free gift / free time / free of charge / free to do",
        "definitions": [
            {
                "text": "Չզբաղված կամ անվճար:",
                "examples": [
                    "Դուք ազատ եք հինգշաբթի օրը:"
                ]
            }
        ],
        "comparative": "ավելի ազատ",
        "superlative": "ամենաազատ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "բաց",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "form": "adjective",
        "opposite": "փակ",
        "oppositeEmoji": "🔒",
        "subtext": "now open, open for business / open door / open to ideas / wide open",
        "definitions": [
            {
                "text": "Ոչ փակ:",
                "examples": [
                    "Դուռը բաց է, մտեք:"
                ]
            }
        ],
        "comparative": "ավելի բաց",
        "superlative": "ամենաբաց",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "փակ",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "form": "adjective",
        "opposite": "բաց",
        "oppositeEmoji": "📖",
        "subtext": "now closed, temporarily closed / closed for lunch / closed mind / closed door",
        "definitions": [
            {
                "text": "Ոչ բաց:",
                "examples": [
                    "Գրասենյակը փակ է հանգստյան օրերին:"
                ]
            }
        ],
        "comparative": "ավելի փակ",
        "superlative": "ամենափակ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "մեծ",
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
        "word": "փոքր",
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
        "word": "երկար",
        "level": "starter",
        "form": "adjective",
        "subtext": "a long journey / a long day / a long time",
        "definitions": [
            {
                "text": "Մեծ հեռավորություն կամ տևողություն ունեցող:",
                "examples": [
                    "Այսօր հանդիպումը շատ երկար էր:"
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "ավելի երկար",
        "superlative": "ամենաերկար",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "բարձր",
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
        "word": "ցածր",
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
        "word": "լիքը",
        "level": "starter",
        "form": "adjective",
        "subtext": "full time / a full day / full of people",
        "definitions": [
            {
                "text": "Այլևս տեղ չունեցող:",
                "examples": [
                    "Գրասենյակը լիքն է մարդկանցով այսօր:"
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "ավելի լիքը",
        "superlative": "ամենալիքը",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "դատարկ",
        "level": "starter",
        "form": "adjective",
        "subtext": "an empty flat / an empty room / nearly empty",
        "definitions": [
            {
                "text": "Ոչինչ չպարունակող:",
                "examples": [
                    "Սուրճի բաժակը դատարկ է:"
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "ավելի դատարկ",
        "superlative": "ամենադատարկ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "տաք",
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
        "word": "զով",
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
        "word": "թաց",
        "level": "starter",
        "form": "adjective",
        "subtext": "wet weather / wet clothes / get wet",
        "definitions": [
            {
                "text": "Ջրով կամ հեղուկով պատված:",
                "examples": [
                    "Ճանապարհները թաց են անձրևից հետո:"
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "ավելի թաց",
        "superlative": "ամենաթաց",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "չոր",
        "level": "starter",
        "form": "adjective",
        "subtext": "dry weather / dry skin / keep dry",
        "definitions": [
            {
                "text": "Առանց ջրի կամ խոնավության:",
                "examples": [
                    "Այսօր օդը շատ չոր է:"
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "ավելի չոր",
        "superlative": "ամենաչոր",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "կեղտոտ",
        "level": "starter",
        "form": "adjective",
        "subtext": "dirty hands / dirty clothes / get dirty",
        "definitions": [
            {
                "text": "Կեղտով պատված:",
                "examples": [
                    "Մեքենան շատ կեղտոտ է այսօր:"
                ]
            }
        ],
        "comparative": "ավելի կեղտոտ",
        "superlative": "ամենակեղտոտ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "կոշտ",
        "level": "starter",
        "form": "adjective",
        "subtext": "hard work / a hard decision / too hard",
        "definitions": [
            {
                "text": "Ոչ փափուկ:",
                "examples": [
                    "Այս աթոռը շատ կոշտ է:"
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "ավելի կոշտ",
        "superlative": "ամենակոշտ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "փափուկ",
        "level": "starter",
        "form": "adjective",
        "subtext": "soft light / soft music / soft skills",
        "definitions": [
            {
                "text": "Հեշտությամբ ձևափոխվող, հաճելի:",
                "examples": [
                    "Այս բազկաթոռը շատ փափուկ է:"
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "ավելի փափուկ",
        "superlative": "ամենափափուկ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "ծանր",
        "level": "starter",
        "form": "adjective",
        "subtext": "heavy traffic / heavy rain / too heavy",
        "definitions": [
            {
                "text": "Մեծ քաշ ունեցող:",
                "examples": [
                    "Այս տուփը շատ ծանր է:"
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "ավելի ծանր",
        "superlative": "ամենածանր",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "թեթև",
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
        "word": "շագանակագույն",
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
        "word": "մոխրագույն",
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
        "word": "վարդագույն",
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
        "word": "նարնջագույν",
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
        "word": "հիանալի",
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
        "word": "հաճելի",
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
        "word": "սքանչելի",
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
        "word": "սարսափելի",
        "level": "starter",
        "form": "adjective",
        "subtext": "terrible weather / a terrible mistake / terrible news",
        "definitions": [
            {
                "text": "Շատ վատ:",
                "examples": [
                    "Երեկ սարսափելի եղանակ էր:"
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "ավելի սարսափելի",
        "superlative": "ամենասարսափելի",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "սարսափելի",
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
        "word": "զարմանալի",
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
        "word": "ֆանտաստիկ",
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
        "word": "տխուր",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel sad / a sad situation / deeply sad",
        "definitions": [
            {
                "text": "Ոչ երջանիկ, սովորաբար ինչ-որ վատ բանի պատճառով:",
                "examples": [
                    "Նա տխուր է, որ պետք է հեռանա գրասենյակից:"
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "ավելի տխուր",
        "superlative": "ամենատխուր",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "սոված",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel hungry / very hungry / go hungry",
        "definitions": [
            {
                "text": "Ուտելու կարիք ունեցող:",
                "examples": [
                    "Ես միշտ սոված եմ ճաշից առաջ:"
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "ավելի սոված",
        "superlative": "ամենասոված",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "բարկացած",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel angry / angry with someone / very angry",
        "definitions": [
            {
                "text": "Զայրույթ զգացող:",
                "examples": [
                    "Նա բարկացած է ուշացման պատճառով:"
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "ավելի բարկացած",
        "superlative": "ամենաբարկացած",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "ձանձրացած",
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
        "word": "ոգևորված",
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
        "word": "վախեցած",
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
        "word": "զղջացող",
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
        "word": "ճիշտ",
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
        "word": "սխալ",
        "level": "starter",
        "form": "adjective",
        "subtext": "wrong answer / go wrong / completely wrong",
        "definitions": [
            {
                "text": "Ոչ ճիշտ:",
                "examples": [
                    "Դա սխալ թիվ է:"
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "ավելի սխալ",
        "superlative": "ամենասխալ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "նոր",
        "level": "starter",
        "form": "adjective",
        "subtext": "new job / brand new / completely new",
        "definitions": [
            {
                "text": "Վերջերս ստեղծված կամ գնված:",
                "examples": [
                    "Ես նոր համակարգիչ ունեմ:"
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "ավելի նոր",
        "superlative": "ամենանոր",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "տարբեր",
        "level": "starter",
        "form": "adjective",
        "subtext": "completely different / very different / different from",
        "definitions": [
            {
                "text": "Ոչ նույնը:",
                "examples": [
                    "Մենք տարբեր կարծիքներ ունենք այս հարցում:"
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "ավելի տարբեր",
        "superlative": "ամենատարբեր",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "նույն",
        "level": "starter",
        "form": "adjective",
        "subtext": "the same as / exactly the same / same time",
        "definitions": [
            {
                "text": "Ոչ տարբեր:",
                "examples": [
                    "Մենք աշխատում ենք նույն գրասենյակում:"
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "ավելի նույն",
        "superlative": "ամենանույն",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "արագ",
        "level": "starter",
        "form": "adjective",
        "subtext": "fast food / fast train / very fast",
        "definitions": [
            {
                "text": "Մեծ արագությամբ շարժվող կամ տեղի ունեցող:",
                "examples": [
                    "Նա շատ արագ է աշխատում:"
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "ավելի արագ",
        "superlative": "ամենաարագ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "դանդաղ",
        "level": "starter",
        "form": "adjective",
        "subtext": "slow progress / slow internet / very slow",
        "definitions": [
            {
                "text": "Ցածր արագությամբ շարժվող կամ տեղի ունեցող:",
                "examples": [
                    "Ինտերնետը այսօր դանդաղ է:"
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "ավելի դանդաղ",
        "superlative": "ամենադանդաղ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "հանգիստ",
        "level": "starter",
        "form": "adjective",
        "subtext": "quiet area / keep quiet / nice and quiet",
        "definitions": [
            {
                "text": "Առանց աղմուկի:",
                "examples": [
                    "Այստեղ շատ հանգիստ է աշխատելու համար:"
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "ավելի հանգիստ",
        "superlative": "ամենահանգիստ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "բարձր",
        "level": "starter",
        "form": "adjective",
        "subtext": "loud noise / too loud / a loud voice",
        "definitions": [
            {
                "text": "Մեծ ձայն ունեցող:",
                "examples": [
                    "Նա շատ բարձր է խոսում:"
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "ավելի բարձր",
        "superlative": "ամենաբարձր",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "ապահով",
        "level": "starter",
        "form": "adjective",
        "subtext": "safe area / safe to do / feel safe",
        "definitions": [
            {
                "text": "Վտանգից հեռու:",
                "examples": [
                    "Այս տարածքը շատ ապահով է:"
                ]
            }
        ],
        "theme": "local_places_services_A1",
        "comparative": "ավելի ապահով",
        "superlative": "ամենաապահով",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "վտանգավոր",
        "level": "starter",
        "form": "adjective",
        "subtext": "dangerous situation / very dangerous / potentially dangerous",
        "definitions": [
            {
                "text": "Վտանգ ներկայացնող:",
                "examples": [
                    "Այդ ճանապարհը վտանգավոր է գիշերը:"
                ]
            }
        ],
        "theme": "local_places_services_A1",
        "comparative": "ավելի վտանգավոր",
        "superlative": "ամենավտանգավոր",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "դժբախտ",
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
        "word": "նյարդային",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Անհանգիստ կամ վախեցած:",
                "examples": [
                    "Ես միշտ մի քիչ նյարդային եմ հանդիպումներից առաջ:"
                ]
            }
        ],
        "subtext": "feel nervous / nervous about / very nervous",
        "comparative": "ավելի նյարդային",
        "superlative": "ամենանյարդային",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "սթրեսի մեջ",
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
        "word": "ինքնավստահ",
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
        "word": "հպարտ",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Հպարտություն զգացող:",
                "examples": [
                    "Ես հպարտ եմ մեր թիմի հաջողությամբ:"
                ]
            }
        ],
        "subtext": "feel proud / very proud / proud of",
        "comparative": "ավելի հպարտ",
        "superlative": "ամենահպարտ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "վախեցած",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Վախ զգացող:",
                "examples": [
                    "Նա վախեցած է թվում:"
                ]
            }
        ],
        "subtext": "feel scared / scared of / very scared",
        "comparative": "ավելի վախեցած",
        "superlative": "ամենավախեցած",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "զարմացած",
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
        "word": "հիասթափված",
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
        "word": "գեղեցիկ",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Տեսքով հաճելի:",
                "examples": [
                    "Գրասենյակից տեսարանը գեղեցիկ է:"
                ]
            }
        ],
        "subtext": "beautiful view / beautiful city / absolutely beautiful",
        "comparative": "ավելի գեղեցիկ",
        "superlative": "ամենագեղեցիկ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "գեղեցիկ",
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
        "word": "ուժեղ",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ֆիզիկական մեծ ուժ ունեցող:",
                "examples": [
                    "Նա շատ ուժեղ մարդ է:"
                ]
            }
        ],
        "subtext": "strong coffee / strong opinion / very strong",
        "comparative": "ավելի ուժեղ",
        "superlative": "ամենաուժեղ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "թույլ",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ֆիզիկական ուժ չունեցող:",
                "examples": [
                    "Ես ինձ թույլ եմ զգում հիվանդությունից հետո:"
                ]
            }
        ],
        "subtext": "weak connection / a weak argument / very weak",
        "comparative": "ավելի թույլ",
        "superlative": "ամենաթույլ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "կոկիկ",
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
        "word": "գերազանց",
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
        "word": "կատարյալ",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Առանց որևէ թերության:",
                "examples": [
                    "Սա կատարյալ օր է ճամփորդության համար:"
                ]
            }
        ],
        "subtext": "a perfect opportunity / perfect timing / absolutely perfect",
        "comparative": "ավելի կատարյալ",
        "superlative": "ամենակատարյալ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "անօգուտ",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Օգուտ չբերող:",
                "examples": [
                    "Այս հին համակարգիչն արդեն անօգուտ է:"
                ]
            }
        ],
        "subtext": "completely useless / prove useless / a useless idea",
        "comparative": "ավելի անօգուտ",
        "superlative": "ամենաանօգուտ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "ճիշտ",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Առանց սխալների:",
                "examples": [
                    "Դա ճիշտ պատասխան է:"
                ]
            }
        ],
        "subtext": "correct answer / the correct way / completely correct",
        "comparative": "ավելի ճիշտ",
        "superlative": "ամենաճիշտ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "հետաքրքիր",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ուշադրություն գրավող:",
                "examples": [
                    "Նա շատ հետաքրքիր գաղափարներ ունի:"
                ]
            }
        ],
        "subtext": "find interesting / very interesting / an interesting idea",
        "comparative": "ավելի հետաքրքիր",
        "superlative": "ամենահետաքրքիր",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "ձանձրալի",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ոչ հետաքրքիր:",
                "examples": [
                    "Հանդիպումը շատ ձանձրալի էր:"
                ]
            }
        ],
        "subtext": "very boring / a boring meeting / find boring",
        "comparative": "ավելի ձանձրալի",
        "superlative": "ամենաձանձրալի",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "անհրաժեշտ",
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
        "word": "հնարավոր",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ինչ-որ բան, որ կարող է տեղի ունենալ:",
                "examples": [
                    "Հնարավոր է, որ ես ուշանամ:"
                ]
            }
        ],
        "subtext": "as soon as possible / it is possible / make possible",
        "comparative": "ավելի հնարավոր",
        "superlative": "ամենահնարավոր",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "անհնար",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ինչ-որ բան, որ չի կարող տեղի ունենալ:",
                "examples": [
                    "Այս նախագիծն ավարտելը մեկ օրում անհնար է:"
                ]
            }
        ],
        "subtext": "virtually impossible / make impossible / nearly impossible",
        "comparative": "ավելի անհնար",
        "superlative": "ամենաանհնար",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "հատուկ",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ոչ սովորական:",
                "examples": [
                    "Սա հատուկ դեպք է:"
                ]
            }
        ],
        "subtext": "a special offer / special occasion / very special",
        "comparative": "ավելի հատուկ",
        "superlative": "ամենահատուկ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "հանրաճանաչ",
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
        "word": "նման",
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
        "word": "ընկերական",
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
        "word": "բարի",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Հոգատար և օգնող:",
                "examples": [
                    "Նա շատ բարի գործընկեր է:"
                ]
            }
        ],
        "subtext": "very kind / kind of you / a kind person",
        "comparative": "ավելի բարի",
        "superlative": "ամենաբարի",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "ծիծաղելի",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ծիծաղ առաջացնող:",
                "examples": [
                    "Նա շատ ծիծաղելի պատմություններ է պատմում:"
                ]
            }
        ],
        "subtext": "very funny / funny story / find funny",
        "comparative": "ավելի ծիծաղելի",
        "superlative": "ամենածիծաղելի",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "խելացի",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Արագ սովորող և հասկացող:",
                "examples": [
                    "Նա մեր թիմի ամենախելացի անդամն է:"
                ]
            }
        ],
        "subtext": "very clever / a clever idea / clever enough",
        "comparative": "ավելի խելացի",
        "superlative": "ամենախելացի",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "քաղաքավարի",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Լավ վարվեցողություն ունեցող:",
                "examples": [
                    "Նա միշտ շատ քաղաքավարի է հաճախորդների հետ:"
                ]
            }
        ],
        "subtext": "very polite / polite request / polite enough",
        "comparative": "ավելի քաղաքավարի",
        "superlative": "ամենաքաղաքավարի",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "կոպիտ",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ոչ քաղաքավարի:",
                "examples": [
                    "Նրա պատասխանը բավականին կոպիտ էր:"
                ]
            }
        ],
        "subtext": "very rude / incredibly rude / deliberately rude",
        "comparative": "ավելի կոպիտ",
        "superlative": "ամենակոպիտ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "ծույլ",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Աշխատել չցանկացող:",
                "examples": [
                    "Նա ծույլ չէ, պարզապես հոգնած է:"
                ]
            }
        ],
        "subtext": "very lazy / a lazy approach / too lazy",
        "comparative": "ավելի ծույլ",
        "superlative": "ամենածույլ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "ազնիվ",
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
        "word": "աղմկոտ",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Շատ աղմուկ ունեցող:",
                "examples": [
                    "Փողոցը շատ աղմկոտ է:"
                ]
            }
        ],
        "subtext": "very noisy / noisy environment / too noisy",
        "comparative": "ավելի աղմկոտ",
        "superlative": "ամենաաղմկոտ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    }
];
    const lang = "hy";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();