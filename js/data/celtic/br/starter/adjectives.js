(function() {
    const data = [
    {
        "word": "uhel",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "berr",
        "oppositeEmoji": "📏",
        "definitions": [
            {
                "text": "Gant un uhelder bras.",
                "examples": [
                    "An den uhelañ eo en hor skipailh."
                ]
            }
        ],
        "subtext": "ur savadur uhel / un den uhel / uhel a-walc'h",
        "comparative": "uheloc'h",
        "superlative": "uhelañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "berr",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "uhel",
        "oppositeEmoji": "🗼",
        "definitions": [
            {
                "text": "Gant un hed bihan.",
                "examples": [
                    "Ur prantad berr he deus kemeret."
                ]
            }
        ],
        "subtext": "ur veaj berr / blev berr / re verr",
        "comparative": "berroc'h",
        "superlative": "berrañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "yaouank",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "kozh",
        "oppositeEmoji": "👴",
        "definitions": [
            {
                "text": "E penn-kentañ e vuhez.",
                "examples": [
                    "Yaouank-tre eo hor skipailh."
                ]
            }
        ],
        "subtext": "young person / young professional / young at heart",
        "comparative": "yaouankoc'h",
        "superlative": "yaouankañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "kozh",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "yaouank",
        "oppositeEmoji": "👶",
        "definitions": [
            {
                "text": "Bet implijet e-pad pell.",
                "examples": [
                    "E-barzh ur savadur kozh emañ hor burev."
                ]
            }
        ],
        "subtext": "old friend / old habits / very old",
        "comparative": "koshoc'h",
        "superlative": "koshañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "heoliek",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gant heol.",
                "examples": [
                    "Karet a ran an devezhioù heoliek."
                ]
            }
        ],
        "subtext": "sunny day / sunny weather / sunny spell",
        "comparative": "heoliekoc'h",
        "superlative": "heoliekañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "glavek",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌧️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gant glav.",
                "examples": [
                    "Un devezh glavek eo hiziv."
                ]
            }
        ],
        "subtext": "rainy day / rainy weather / rainy season",
        "comparative": "glavekoc'h",
        "superlative": "glavekañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "tomm",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🔥",
        "form": "adjective",
        "opposite": "yen",
        "oppositeEmoji": "❄️",
        "subtext": "very hot, hot weather / hot weather / a hot drink / too hot",
        "definitions": [
            {
                "text": "Gant ur wrez uhel.",
                "examples": [
                    "Tomm-tre eo er burev hiziv."
                ]
            }
        ],
        "comparative": "tommoc'h",
        "superlative": "tommañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "yen",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "❄️",
        "form": "adjective",
        "opposite": "tomm",
        "oppositeEmoji": "🔥",
        "subtext": "very cold, cold morning / cold weather / a cold drink / too cold",
        "definitions": [
            {
                "text": "Gant ur wrez izel.",
                "examples": [
                    "Plijout a ra din evañ dour yen."
                ]
            }
        ],
        "comparative": "yenoc'h",
        "superlative": "yenañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "boutin",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "ispisial",
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
        "word": "marc'had-mat",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "ker",
        "oppositeEmoji": "💎",
        "subtext": "low price, inexpensive / cheap flight / very cheap / cheap and cheerful",
        "definitions": [
            {
                "text": "Na gousta ket kalz arc'hant.",
                "examples": [
                    "Marc'had-mat eo ar pretis e-kichen ar burev."
                ]
            }
        ],
        "comparative": "marc'had-matoc'h",
        "superlative": "marc'had-matañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "ker",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "marc'had-mat",
        "oppositeEmoji": "🏷️",
        "subtext": "costly, high price / very expensive / expensive taste / too expensive",
        "definitions": [
            {
                "text": "Koustañ a ra kalz arc'hant.",
                "examples": [
                    "Re ger eo ar c'harr-mañ."
                ]
            }
        ],
        "comparative": "keroc'h",
        "superlative": "kerañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "mat",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "fall",
        "oppositeEmoji": "👎",
        "subtext": "great, nice, pleasant / good idea / good luck / good value",
        "definitions": [
            {
                "text": "Gant perzhioù mat.",
                "examples": [
                    "Un darvoud mat eo evit ar skipailh."
                ]
            }
        ],
        "comparative": "gwelloc'h",
        "superlative": "gwellañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "fall",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "mat",
        "oppositeEmoji": "👍",
        "subtext": "terrible, awful, unpleasant / bad news / bad luck / bad decision",
        "definitions": [
            {
                "text": "Na vezañ mat.",
                "examples": [
                    "Un devezh fall e oa dec'h er labour."
                ]
            }
        ],
        "comparative": "falloc'h",
        "superlative": "fallañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "bras",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "bihan",
        "oppositeEmoji": "🐭",
        "subtext": "large, huge / a big house / a big problem / big enough",
        "definitions": [
            {
                "text": "Bras e vent pe e niver.",
                "examples": [
                    "Ur burev bras hon eus er greizenn-gêr."
                ]
            }
        ],
        "comparative": "brasoc'h",
        "superlative": "brasañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "bihan",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "bras",
        "oppositeEmoji": "🐘",
        "subtext": "little, tiny / a small flat / a small salary / too small",
        "definitions": [
            {
                "text": "Bihan e vent pe e niver.",
                "examples": [
                    "Bevañ a ra en un ranndi bihan."
                ]
            }
        ],
        "comparative": "bihanoc'h",
        "superlative": "bihanañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "aes",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "diaes",
        "oppositeEmoji": "❌",
        "definitions": [
            {
                "text": "N'eo ket diaes.",
                "examples": [
                    "Ul labour aes eo."
                ]
            }
        ],
        "subtext": "easy to do / nice and easy / not easy",
        "comparative": "aesoc'h",
        "superlative": "aesañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "diaes",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "aes",
        "oppositeEmoji": "✅",
        "definitions": [
            {
                "text": "Gant kudennoù.",
                "examples": [
                    "Diaes-tre eo ar raktres-mañ."
                ]
            }
        ],
        "subtext": "difficult to do / very difficult / find it difficult",
        "comparative": "diaesoc'h",
        "superlative": "diaesañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "laouen",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "form": "adjective",
        "subtext": "glad, cheerful, feel happy / feel happy / happy with something / a happy day",
        "definitions": [
            {
                "text": "Plijet gant e vuhez.",
                "examples": [
                    "Laouen on gant ma labour nevez."
                ]
            }
        ],
        "comparative": "laouenoc'h",
        "superlative": "laouenañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "skuizh",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😫",
        "form": "adjective",
        "subtext": "sleepy, exhausted, feel tired / feel tired / tired of something / very tired",
        "definitions": [
            {
                "text": "Ezhomm diskuizhañ.",
                "examples": [
                    "Skuizh eo goude un devezh hir."
                ]
            }
        ],
        "comparative": "skuizhoc'h",
        "superlative": "skuizhañ",
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
        "word": "naet",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "lous",
        "oppositeEmoji": "💩",
        "subtext": "tidy, not dirty, keep it clean / clean clothes / a clean room / keep clean",
        "definitions": [
            {
                "text": "Hep poultrenn.",
                "examples": [
                    "Naet eo ar gegin bepred."
                ]
            }
        ],
        "comparative": "naetoc'h",
        "superlative": "naetañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "yac'h",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥗",
        "form": "adjective",
        "opposite": "unhealthy",
        "oppositeEmoji": "🍔",
        "subtext": "well, fit, healthy diet",
        "definitions": [
            {
                "text": "Gant ur yec'hed mat.",
                "examples": [
                    "Klask a ran debriñ boued yac'h."
                ]
            }
        ],
        "comparative": "yac'hoc'h",
        "superlative": "yac'hañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "klañv",
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
        "word": "enlinenn",
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
        "word": "e-unan",
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
        "word": "distend",
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
        "word": "anxious",
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
        "word": "strollat",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "subtext": "very busy, busy day / busy schedule / very busy / too busy",
        "definitions": [
            {
                "text": "Gant kalz labour.",
                "examples": [
                    "Strollat on ar sizhun-mañ."
                ]
            }
        ],
        "comparative": "strollatoc'h",
        "superlative": "strollatañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "talvoudus",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "ditalvoud",
        "oppositeEmoji": "🗑️",
        "subtext": "helpful, practical",
        "definitions": [
            {
                "text": "Gant ur splet.",
                "examples": [
                    "Ur benveg talvoudus-tre eo."
                ]
            }
        ],
        "comparative": "talvoudusoc'h",
        "superlative": "talvoudusañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "pouezus",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❗",
        "form": "adjective",
        "subtext": "essential / important meeting / very important / most important",
        "definitions": [
            {
                "text": "Gant kalz talvoudegezh.",
                "examples": [
                    "Ur raktres pouezus-tre eo."
                ]
            }
        ],
        "comparative": "pouezusoc'h",
        "superlative": "pouezusañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "ruz",
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
        "word": "glas",
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
        "word": "gwer",
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
        "word": "gwenn",
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
        "word": "du",
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
        "word": "melen",
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
        "word": "dieub",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "free of charge, free gift / free time / free of charge / free to do",
        "definitions": [
            {
                "text": "Hep labour pe didall.",
                "examples": [
                    "Dieub oc'h d'ar yaou?"
                ]
            }
        ],
        "comparative": "dieuboc'h",
        "superlative": "dieubañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "digor",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "form": "adjective",
        "opposite": "serr",
        "oppositeEmoji": "🔒",
        "subtext": "now open, open for business / open door / open to ideas / wide open",
        "definitions": [
            {
                "text": "N'eo ket serr.",
                "examples": [
                    "Digor eo an nor, deuit e-barzh."
                ]
            }
        ],
        "comparative": "digoroc'h",
        "superlative": "digorañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "serr",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "form": "adjective",
        "opposite": "digor",
        "oppositeEmoji": "📖",
        "subtext": "now closed, temporarily closed / closed for lunch / closed mind / closed door",
        "definitions": [
            {
                "text": "N'eo ket digor.",
                "examples": [
                    "Serr eo ar burev e-pad an dibenn-sizhun."
                ]
            }
        ],
        "comparative": "serroc'h",
        "superlative": "serrañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "ledan",
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
        "word": "bihan",
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
        "word": "hir",
        "level": "starter",
        "form": "adjective",
        "subtext": "a long journey / a long day / a long time",
        "definitions": [
            {
                "text": "Gant un hed bras.",
                "examples": [
                    "Hir-tre e oa an emvod hiziv."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "hiroc'h",
        "superlative": "hirañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "uhel",
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
        "word": "izel",
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
        "word": "leun",
        "level": "starter",
        "form": "adjective",
        "subtext": "full time / a full day / full of people",
        "definitions": [
            {
                "text": "Gant traoù e-barzh.",
                "examples": [
                    "Leun eo ar burev gant tud hiziv."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "leunoc'h",
        "superlative": "leunañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "goullo",
        "level": "starter",
        "form": "adjective",
        "subtext": "an empty flat / an empty room / nearly empty",
        "definitions": [
            {
                "text": "Hep tra e-barzh.",
                "examples": [
                    "Goullo eo ar gib kafe."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "goullooc'h",
        "superlative": "goulloañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "tomm",
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
        "word": "fresk",
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
        "word": "gleb",
        "level": "starter",
        "form": "adjective",
        "subtext": "wet weather / wet clothes / get wet",
        "definitions": [
            {
                "text": "Gant dour.",
                "examples": [
                    "Gleb eo an hent goude ar glav."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "glepoc'h",
        "superlative": "glepañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "sec'h",
        "level": "starter",
        "form": "adjective",
        "subtext": "dry weather / dry skin / keep dry",
        "definitions": [
            {
                "text": "Hep dour.",
                "examples": [
                    "Sec'h eo an amzer hiziv."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "sec'hoc'h",
        "superlative": "sec'hañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "lous",
        "level": "starter",
        "form": "adjective",
        "subtext": "dirty hands / dirty clothes / get dirty",
        "definitions": [
            {
                "text": "Gant poultrenn.",
                "examples": [
                    "Lous eo ar c'harr hiziv."
                ]
            }
        ],
        "comparative": "lousoc'h",
        "superlative": "lousañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "kalet",
        "level": "starter",
        "form": "adjective",
        "subtext": "hard work / a hard decision / too hard",
        "definitions": [
            {
                "text": "N'eo ket blot.",
                "examples": [
                    "Kalet-tre eo ar gador-mañ."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "kaletoc'h",
        "superlative": "kaletañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "blot",
        "level": "starter",
        "form": "adjective",
        "subtext": "soft light / soft music / soft skills",
        "definitions": [
            {
                "text": "N'eo ket kalet.",
                "examples": [
                    "Blot-tre eo ar gador-vrec'h-mañ."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "blotoc'h",
        "superlative": "blotañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "pounner",
        "level": "starter",
        "form": "adjective",
        "subtext": "heavy traffic / heavy rain / too heavy",
        "definitions": [
            {
                "text": "Gant ur pouez bras.",
                "examples": [
                    "Pounner-tre eo ar voest-mañ."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "pounneroc'h",
        "superlative": "pounnerañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "skañv",
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
        "word": "gell",
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
        "word": "gris",
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
        "word": "roz",
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
        "word": "orañjez",
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
        "word": "meur",
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
        "word": "brav",
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
        "word": "marzhus",
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
        "word": "euzhus",
        "level": "starter",
        "form": "adjective",
        "subtext": "terrible weather / a terrible mistake / terrible news",
        "definitions": [
            {
                "text": "Fall-tre.",
                "examples": [
                    "Dec'h e oa un amzer euzhus."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "euzhusoc'h",
        "superlative": "euzhusañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "euzhus",
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
        "word": "estonus",
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
        "word": "dreist",
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
        "word": "trist",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel sad / a sad situation / deeply sad",
        "definitions": [
            {
                "text": "Na vezañ laouen.",
                "examples": [
                    "Trist eo rak rankout a ra kuitaat ar burev."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "tristoc'h",
        "superlative": "tristañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "naoniek",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel hungry / very hungry / go hungry",
        "definitions": [
            {
                "text": "C'hoant debriñ.",
                "examples": [
                    "Naoniek on bepred a-raok lein."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "naoniekoc'h",
        "superlative": "naoniekañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "konnar",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel angry / angry with someone / very angry",
        "definitions": [
            {
                "text": "Gant droug.",
                "examples": [
                    "Konnar a zo ennañ abalamour d'an dale."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "konnaroc'h",
        "superlative": "konnarañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "borodet",
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
        "word": "fentus",
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
        "word": "aoniek",
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
        "word": "keuziek",
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
        "word": "reizh",
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
        "word": "fazi",
        "level": "starter",
        "form": "adjective",
        "subtext": "wrong answer / go wrong / completely wrong",
        "definitions": [
            {
                "text": "Gant ur fazi.",
                "examples": [
                    "Ar sifr fall eo."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "fazioc'h",
        "superlative": "faziañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "nevez",
        "level": "starter",
        "form": "adjective",
        "subtext": "new job / brand new / completely new",
        "definitions": [
            {
                "text": "N'eo ket bet implijet c'hoazh.",
                "examples": [
                    "Un urzhiataer nevez am eus."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "nevesoc'h",
        "superlative": "nevesañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "disheñvel",
        "level": "starter",
        "form": "adjective",
        "subtext": "completely different / very different / different from",
        "definitions": [
            {
                "text": "N'eo ket ar memes tra.",
                "examples": [
                    "Ali disheñvel hon eus diwar-benn ar gudenn-mañ."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "disheñveloc'h",
        "superlative": "disheñvelañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "memes",
        "level": "starter",
        "form": "adjective",
        "subtext": "the same as / exactly the same / same time",
        "definitions": [
            {
                "text": "Ar memes tra.",
                "examples": [
                    "Labourat a reomp er memes burev."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "memesoc'h",
        "superlative": "memesañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "buan",
        "level": "starter",
        "form": "adjective",
        "subtext": "fast food / fast train / very fast",
        "definitions": [
            {
                "text": "Gant tizh.",
                "examples": [
                    "Labourat a ra buan-tre."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "buanoc'h",
        "superlative": "buanañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "gorrek",
        "level": "starter",
        "form": "adjective",
        "subtext": "slow progress / slow internet / very slow",
        "definitions": [
            {
                "text": "Hep tizh.",
                "examples": [
                    "Gorrek eo an internet hiziv."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "gorrekoc'h",
        "superlative": "gorrekañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "didrous",
        "level": "starter",
        "form": "adjective",
        "subtext": "quiet area / keep quiet / nice and quiet",
        "definitions": [
            {
                "text": "Hep trouz.",
                "examples": [
                    "Didrous eo amañ evit labourat."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "didrousoc'h",
        "superlative": "didrousañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "kreñv",
        "level": "starter",
        "form": "adjective",
        "subtext": "loud noise / too loud / a loud voice",
        "definitions": [
            {
                "text": "Gant ur son kreñv.",
                "examples": [
                    "Komz a ra kreñv-tre."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "kreñvoc'h",
        "superlative": "kreñvañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "diogel",
        "level": "starter",
        "form": "adjective",
        "subtext": "safe area / safe to do / feel safe",
        "definitions": [
            {
                "text": "Hep dañjer.",
                "examples": [
                    "Diogel eo an takad-mañ."
                ]
            }
        ],
        "theme": "local_places_services_A1",
        "comparative": "diogeloc'h",
        "superlative": "diogelañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "dañjerus",
        "level": "starter",
        "form": "adjective",
        "subtext": "dangerous situation / very dangerous / potentially dangerous",
        "definitions": [
            {
                "text": "Gant dañjer.",
                "examples": [
                    "Dañjerus eo an hent-se en noz."
                ]
            }
        ],
        "theme": "local_places_services_A1",
        "comparative": "dañjerusoc'h",
        "superlative": "dañjerusañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "dilaouen",
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
        "word": "strafuilhet",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gant stress.",
                "examples": [
                    "Strafuilhet on bepred a-raok un emvod."
                ]
            }
        ],
        "subtext": "feel nervous / nervous about / very nervous",
        "comparative": "strafuilhetoc'h",
        "superlative": "strafuilhetañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "strafuilhet",
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
        "word": "fiziañs",
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
        "word": "lorc'hus",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gant lorc'h.",
                "examples": [
                    "Lorc'hus on gant berzh hor skipailh."
                ]
            }
        ],
        "subtext": "feel proud / very proud / proud of",
        "comparative": "lorc'husoc'h",
        "superlative": "lorc'husañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "aoniek",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gant aon.",
                "examples": [
                    "Aoniek eo."
                ]
            }
        ],
        "subtext": "feel scared / scared of / very scared",
        "comparative": "aoniekoc'h",
        "superlative": "aoniekañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "souezhet",
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
        "word": "disantet",
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
        "word": "brav",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Plijus da welet.",
                "examples": [
                    "Brav eo ar gwel eus ar burev."
                ]
            }
        ],
        "subtext": "beautiful view / beautiful city / absolutely beautiful",
        "comparative": "bravoc'h",
        "superlative": "bravañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "koant",
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
        "word": "kreñv",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gant nerzh.",
                "examples": [
                    "Un den kreñv eo."
                ]
            }
        ],
        "subtext": "strong coffee / strong opinion / very strong",
        "comparative": "kreñvoc'h",
        "superlative": "kreñvañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "wan",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Hep nerzh.",
                "examples": [
                    "Wan en em sentan goude bezañ bet klañv."
                ]
            }
        ],
        "subtext": "weak connection / a weak argument / very weak",
        "comparative": "wanoc'h",
        "superlative": "wanañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "yac'h",
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
        "word": "dreist",
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
        "word": "perfezh",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Hep fazi ebet.",
                "examples": [
                    "Un devezh perfezh eo evit beajiñ."
                ]
            }
        ],
        "subtext": "a perfect opportunity / perfect timing / absolutely perfect",
        "comparative": "perfezhoc'h",
        "superlative": "perfezhañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "ditalvoud",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Hep splet.",
                "examples": [
                    "Ditalvoud eo an urzhiataer kozh-mañ dija."
                ]
            }
        ],
        "subtext": "completely useless / prove useless / a useless idea",
        "comparative": "ditalvoudoc'h",
        "superlative": "ditalvoudañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "reizh",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Hep fazi.",
                "examples": [
                    "Ar respont reizh eo."
                ]
            }
        ],
        "subtext": "correct answer / the correct way / completely correct",
        "comparative": "reishoc'h",
        "superlative": "reishañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "dedennus",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gant kalz talvoudegezh.",
                "examples": [
                    "Mennozhioù dedennus he deus."
                ]
            }
        ],
        "subtext": "find interesting / very interesting / an interesting idea",
        "comparative": "dedennusoc'h",
        "superlative": "dedennusañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "borodus",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "N'eo ket dedennus.",
                "examples": [
                    "Borodus-tre e oa an emvod."
                ]
            }
        ],
        "subtext": "very boring / a boring meeting / find boring",
        "comparative": "borodusoc'h",
        "superlative": "borodusañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "ret",
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
        "word": "posupl",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gallout a ra degouezhout.",
                "examples": [
                    "Posupl eo e vefen diwezhat."
                ]
            }
        ],
        "subtext": "as soon as possible / it is possible / make possible",
        "comparative": "posuploc'h",
        "superlative": "posuplañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "amposupl",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ne c'hell ket degouezhout.",
                "examples": [
                    "Echuiñ ar raktres-mañ en un devezh a zo amposupl."
                ]
            }
        ],
        "subtext": "virtually impossible / make impossible / nearly impossible",
        "comparative": "amposuploc'h",
        "superlative": "amposuplañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "ispisial",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "N'eo ket boutin.",
                "examples": [
                    "Un degouezh ispisial eo."
                ]
            }
        ],
        "subtext": "a special offer / special occasion / very special",
        "comparative": "ispisialoc'h",
        "superlative": "ispisialañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "brudet",
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
        "word": "heñvel",
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
        "word": "mignonel",
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
        "word": "jentil",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gant ur galon vat.",
                "examples": [
                    "Ur genseurt jentil-tre eo."
                ]
            }
        ],
        "subtext": "very kind / kind of you / a kind person",
        "comparative": "jentiloc'h",
        "superlative": "jentilañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "farsus",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Lakaat an dud da c'hoarzhin.",
                "examples": [
                    "Kontañ a ra istorioù farsus bepred."
                ]
            }
        ],
        "subtext": "very funny / funny story / find funny",
        "comparative": "farsusoc'h",
        "superlative": "farsusañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "speredek",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gant ur spered fin.",
                "examples": [
                    "An hini speredekañ eo en hor skipailh."
                ]
            }
        ],
        "subtext": "very clever / a clever idea / clever enough",
        "comparative": "speredekoc'h",
        "superlative": "speredekañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "seven",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gant doareoù mat.",
                "examples": [
                    "Seven eo bepred gant ar bratided."
                ]
            }
        ],
        "subtext": "very polite / polite request / polite enough",
        "comparative": "sevenoc'h",
        "superlative": "sevenañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "dizereat",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Hep doareoù mat.",
                "examples": [
                    "Dizereat e oa e respont."
                ]
            }
        ],
        "subtext": "very rude / incredibly rude / deliberately rude",
        "comparative": "dizereatoc'h",
        "superlative": "dizereatañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "leue",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Hep c'hoant labourat.",
                "examples": [
                    "N'eo ket leue, skuizh eo hepken."
                ]
            }
        ],
        "subtext": "very lazy / a lazy approach / too lazy",
        "comparative": "leueoc'h",
        "superlative": "leueañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "onest",
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
        "word": "trouzus",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gant trouz.",
                "examples": [
                    "Trouzus-tre eo ar straed."
                ]
            }
        ],
        "subtext": "very noisy / noisy environment / too noisy",
        "comparative": "trouzusoc'h",
        "superlative": "trouzusañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    }
];
    const lang = "br";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();