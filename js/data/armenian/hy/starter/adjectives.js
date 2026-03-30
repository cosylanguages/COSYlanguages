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
        "subtext": "երիտասարդ մարդ / երիտասարդ մասնագետ / հոգով երիտասարդ",
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
        "subtext": "հին ընկեր / հին սովորություններ / շատ հին",
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
        "subtext": "արևոտ օր / արևոտ եղանակ / պարզկա օր",
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
        "subtext": "անձրևոտ օր / անձրևոտ եղանակ / անձրևների սեզոն",
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
        "subtext": "տաք եղանակ / տաք խմիչք / չափազանց տաք",
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
        "subtext": "շատ սառը / ցուրտ առավոտ / սառը խմիչք / շատ ցուրտ",
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
                "text": "Բնական կամ սովորական; ոչ հատուկ:",
                "examples": [
                    "Դա սովորական օր էր:"
                ]
            }
        ],
        "subtext": "սովորական օր / սովորական կյանք / ոչ մի անսովոր բան",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "էժան",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "թանկ",
        "oppositeEmoji": "💎",
        "subtext": "ցածր գին / էժան թռիչք / շատ էժան",
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
        "subtext": "բարձր գին / շատ թանկ / թանկ հաճույք",
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
        "subtext": "հիանալի / լավ գաղափար / հաջողություն / լավ արժեք",
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
        "subtext": "սարսափելի / վատ լուրեր / անհաջողություն / վատ որոշում",
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
        "subtext": "մեծ տուն / մեծ խնդիր / բավականին մեծ",
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
        "subtext": "փոքր բնակարան / փոքր աշխատավարձ / շատ փոքր",
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
        "subtext": "հեշտ անել / շատ հեշտ / հեշտ չէ",
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
        "subtext": "դժվար անել / շատ դժվար / դժվարությամբ",
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
        "subtext": "ուրախ / երջանիկ զգալ / երջանիկ օր",
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
        "subtext": "քնկոտ / հոգնած զգալ / շատ հոգնած",
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
        "word": "լրիվ դրույք",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "adjective",
        "opposite": "կես դրույք",
        "oppositeEmoji": "⏳",
        "definitions": [
            {
                "text": "Աշխատանքային շաբաթվա բոլոր ժամերով աշխատելը:",
                "examples": [
                    "Նա լրիվ դրույքով աշխատանք ունի բանկում:"
                ]
            }
        ],
        "subtext": "լրիվ դրույքով աշխատանք",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "կես դրույք",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "form": "adjective",
        "opposite": "լրիվ դրույք",
        "oppositeEmoji": "⏰",
        "definitions": [
            {
                "text": "Աշխատանքային շաբաթվա ոչ բոլոր ժամերով աշխատելը:",
                "examples": [
                    "Նա շաբաթ օրերին աշխատում է կես դրույքով:"
                ]
            }
        ],
        "subtext": "կես դրույքով աշխատանք",
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
        "subtext": "մաքուր հագուստ / մաքուր սենյակ / մաքուր պահել",
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
        "opposite": "ոչ առողջ",
        "oppositeEmoji": "🍔",
        "subtext": "առողջ սննդակարգ / առողջ ապրելակերպ",
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
        "opposite": "առողջ",
        "oppositeEmoji": "💪",
        "subtext": "հիվանդ զգալ",
        "definitions": [
            {
                "text": "Ոչ առողջ; հիվանդ:",
                "examples": [
                    "Ես այսօր ինձ վատ եմ զգում:"
                ]
            }
        ],
        "comparative": null,
         "superlative": null
    },
    {
        "word": "առցանց",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🌐",
        "form": "adjective",
        "opposite": "անցանց",
        "oppositeEmoji": "📴",
        "definitions": [
            {
                "text": "Ինտերնետի օգտագործմամբ:",
                "examples": [
                    "I buy food online sometimes."
                ]
            }
        ],
        "subtext": "առցանց գնումներ / առցանց դասընթաց",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "մենակ",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "միասին",
        "oppositeEmoji": "👫",
        "definitions": [
            {
                "text": "Առանց այլ մարդկանց; ինքնուրույն:",
                "examples": [
                    "She lives alone."
                ]
            }
        ],
        "subtext": "մենակ ապրել / մենակ ճամփորդել",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "հանգիստ",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "լարված",
        "oppositeEmoji": "😫",
        "subtext": "հանգիստ զգալ",
        "definitions": [
            {
                "text": "Հանգիստ; ոչ անհանգստացած կամ լարված:",
                "examples": [
                    "Ես ինձ հանգիստ եմ զգում հանգստյան օրերին:"
                ]
            }
        ],
        "comparative": null,
         "superlative": null
    },
    {
        "word": "անհանգիստ",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😟",
        "form": "adjective",
        "opposite": "հանգիստ",
        "oppositeEmoji": "😌",
        "subtext": "անհանգստանալ",
        "definitions": [
            {
                "text": "Անհանգստության զգացում ինչ-որ բանի պատճառով:",
                "examples": [
                    "Նա անհանգստացած է իր աշխատանքի համար:"
                ]
            }
        ],
        "comparative": null,
         "superlative": null
    },
    {
        "word": "զբաղված",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "subtext": "զբաղված օր / զբաղված գրաֆիկ / շատ զբաղված",
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
        "subtext": "գործնական / օգտակար լինել",
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
        "subtext": "կարևոր հանդիպում / շատ կարևոր",
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
        "subtext": "կարմիր գինի / կարմիր լույս",
        "definitions": [
            {
                "text": "Արյան կամ հասած լոլիկի գույնը:",
                "examples": [
                    "She has a red bag."
                ]
            },
            {
                "text": "Արյան գույն ունեցող:",
                "examples": [
                    "She drives a red car."
                ]
            }
        ],
        "comparative": null,
         "superlative": null
    },
    {
        "word": "կապույտ",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟦",
        "form": "adjective",
        "subtext": "կապույտ երկինք",
        "definitions": [
            {
                "text": "Պարզ երկնքի գույնը:",
                "examples": [
                    "Նրա մեքենան կապույտ է:"
                ]
            },
            {
                "text": "Երկնքի գույն ունեցող:",
                "examples": [
                    "Նա կապույտ շապիկ է հագնում աշխատանքի համար:"
                ]
            }
        ],
        "comparative": null,
         "superlative": null
    },
    {
        "word": "կանաչ",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟩",
        "form": "adjective",
        "subtext": "կանաչ տարածք",
        "definitions": [
            {
                "text": "Խոտի կամ տերևների գույնը:",
                "examples": [
                    "She wears a green dress."
                ]
            },
            {
                "text": "Խոտի գույն ունեցող:",
                "examples": [
                    "Ընկերությունն ունի էկոլոգիական բնութագրեր:"
                ]
            }
        ],
        "comparative": null,
         "superlative": null
    },
    {
        "word": "սպիտակ",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬜",
        "form": "adjective",
        "subtext": "սպիտակ գինի",
        "definitions": [
            {
                "text": "Ձյան կամ կաթի գույնը:",
                "examples": [
                    "Պատերը սպիտակ են:"
                ]
            },
            {
                "text": "Ամենաբաց գույնն ունեցող:",
                "examples": [
                    "Գրասենյակի պատերը ներկված են սպիտակ:"
                ]
            }
        ],
        "comparative": null,
         "superlative": null
    },
    {
        "word": "սև",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬛",
        "form": "adjective",
        "subtext": "սև սուրճ",
        "definitions": [
            {
                "text": "Ամենամութ գույնը, ինչպես գիշերային երկինքը:",
                "examples": [
                    "He wears a black coat."
                ]
            },
            {
                "text": "Ամենամութ գույնն ունեցող:",
                "examples": [
                    "He always wears a black suit."
                ]
            }
        ],
        "comparative": null,
         "superlative": null
    },
    {
        "word": "դեղին",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟨",
        "form": "adjective",
        "subtext": "դեղին լույս",
        "definitions": [
            {
                "text": "Արևի կամ կիտրոնի գույնը:",
                "examples": [
                    "She has a yellow umbrella."
                ]
            },
            {
                "text": "Արևի գույն ունեցող:",
                "examples": [
                    "She bought a yellow notepad."
                ]
            }
        ],
        "comparative": null,
         "superlative": null
    },
    {
        "word": "ազատ",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "ազատ ժամանակ / անվճար",
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
        "subtext": "բաց դուռ / բաց է բիզնեսի համար",
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
        "subtext": "փակ է ընդմիջման համար / փակ դուռ",
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
        "subtext": "մեծ քաղաք / մեծ ընկերություն",
        "definitions": [
            {
                "text": "Միջինից մեծ չափի կամ քանակի:",
                "examples": [
                    "Փարիզը շատ մեծ քաղաք է:"
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "փոքր",
        "level": "starter",
        "form": "adjective",
        "subtext": "մի փոքր / քիչ գումար",
        "definitions": [
            {
                "text": "Փոքր չափի; քիչ քանակությամբ:",
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
        "word": "երկար",
        "level": "starter",
        "form": "adjective",
        "subtext": "երկար ճանապարհորդություն / երկար օր",
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
        "subtext": "բարձր գին / բարձր որակ",
        "definitions": [
            {
                "text": "Միջինից բարձր մակարդակի:",
                "examples": [
                    "Այս տարածքում վարձավճարը շատ բարձր է:"
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "ցածր",
        "level": "starter",
        "form": "adjective",
        "subtext": "ցածր գին / ցածր աշխատավարձ",
        "definitions": [
            {
                "text": "Միջինից ցածր մակարդակի:",
                "examples": [
                    "Աշխատավարձը շատ ցածր է ներգրավված ժամերի համար:"
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "լիքը",
        "level": "starter",
        "form": "adjective",
        "subtext": "լիարժեք օր / մարդկանցով լի",
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
        "subtext": "դատարկ բնակարան / դատարկ սենյակ",
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
        "subtext": "հաճելի տաք / տաք ընդունելություն",
        "definitions": [
            {
                "text": "Հաճելի տաք; տաքացված:",
                "examples": [
                    "Գրասենյակը տաք է և հարմարավետ:"
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "զով",
        "level": "starter",
        "form": "adjective",
        "subtext": "զով խմիչք / զով մնալ",
        "definitions": [
            {
                "text": "Մի փոքր սառը; հաճելի ցածր ջերմաստիճան:",
                "examples": [
                    "Նա նախընտրում է զով եղանակ աշխատելու համար:"
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "թաց",
        "level": "starter",
        "form": "adjective",
        "subtext": "թաց եղանակ / թաց հագուստ",
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
        "subtext": "չոր եղանակ / չոր մաշկ",
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
        "subtext": "կեղտոտ ձեռքեր / կեղտոտ հագուստ",
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
        "subtext": "դժվար աշխատանք / դժվար որոշում",
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
        "subtext": "փափուկ լույս / փափուկ երաժշտություն",
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
        "subtext": "ծանր երթևեկություն / ուժեղ անձրև",
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
        "subtext": "թեթև անձրև / թեթև սնունդ",
        "definitions": [
            {
                "text": "Ոչ ծանր; բաց գույնի:",
                "examples": [
                    "Նա ամեն օր աշխատանքի է տանում թեթև պայուսակ:"
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "շագանակագույն",
        "level": "starter",
        "form": "adjective",
        "subtext": "մուգ շագանակագույն",
        "definitions": [
            {
                "text": "Փայտի կամ հողի գույնը:",
                "examples": [
                    "Նա ունի շագանակագույն աչքեր և մուգ մազեր:"
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "մոխրագույն",
        "level": "starter",
        "form": "adjective",
        "subtext": "մոխրագույն երկինք",
        "definitions": [
            {
                "text": "Սևի և սպիտակի միջև գտնվող գույնը:",
                "examples": [
                    "Նա ունի մոխրագույն մազեր և բարի դեմք:"
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "վարդագույն",
        "level": "starter",
        "form": "adjective",
        "subtext": "բաց վարդագույն",
        "definitions": [
            {
                "text": "Բաց կարմիր գույն ունեցող:",
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
        "word": "նարնջագույν",
        "level": "starter",
        "form": "adjective",
        "subtext": "վառ նարնջագույն",
        "definitions": [
            {
                "text": "Նարնջի գույն ունեցող:",
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
        "word": "հիանալի",
        "level": "starter",
        "form": "adjective",
        "subtext": "հիանալի գաղափար",
        "definitions": [
            {
                "text": "Չափազանց լավ; մեծ քանակությամբ:",
                "examples": [
                    "Նա հիանալի մենեջեր է:"
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "հաճելի",
        "level": "starter",
        "form": "adjective",
        "subtext": "հաճելի օր / հաճելի վայր",
        "definitions": [
            {
                "text": "Հաճելի կամ բարի:",
                "examples": [
                    "Նոր գրասենյակը շատ հաճելի է:"
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "սքանչելի",
        "level": "starter",
        "form": "adjective",
        "subtext": "սքանչելի ժամանակ",
        "definitions": [
            {
                "text": "Չափազանց լավ; հիացմունք առաջացնող:",
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
        "word": "սարսափելի",
        "level": "starter",
        "form": "adjective",
        "subtext": "սարսափելի լուրեր",
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
        "subtext": "սարսափելի լուրեր",
        "definitions": [
            {
                "text": "Շատ վատ կամ տհաճ:",
                "examples": [
                    "Բաց գրասենյակում աղմուկը սարսափելի է:"
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "զարմանալի",
        "level": "starter",
        "form": "adjective",
        "subtext": "զարմանալի արդյունք",
        "definitions": [
            {
                "text": "Մեծ զարմանք կամ հիացմունք առաջացնող:",
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
        "word": "ֆանտաստիկ",
        "level": "starter",
        "form": "adjective",
        "subtext": "ֆանտաստիկ լուրեր",
        "definitions": [
            {
                "text": "Չափազանց լավ:",
                "examples": [
                    "Նոր համակարգն աշխատում է ֆանտաստիկ ձևով:"
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "տխուր",
        "level": "starter",
        "form": "adjective",
        "subtext": "տխուր զգալ / տխուր իրավիճակ / խորապես տխուր",
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
        "subtext": "սոված զգալ / շատ սոված / սոված մնալ",
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
        "subtext": "բարկացած զգալ / բարկանալ մեկի վրա / շատ բարկացած",
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
        "subtext": "ձանձրանալ",
        "definitions": [
            {
                "text": "Հետաքրքրության պակաս զգացող:",
                "examples": [
                    "Նա ձանձրանում է երկար հանդիպումների ժամանակ:"
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "ոգևորված",
        "level": "starter",
        "form": "adjective",
        "subtext": "շատ ոգևորված",
        "definitions": [
            {
                "text": "Էնտուզիազմ և եռանդ զգացող:",
                "examples": [
                    "Նա ոգևորված է իր նոր աշխատանքով:"
                ]
            }
        ],
        "comparative": null,
         "superlative": null
    },
    {
        "word": "վախեցած",
        "level": "starter",
        "form": "adjective",
        "subtext": "վախենալ ինչ-որ բանից",
        "definitions": [
            {
                "text": "Վախ զգացող:",
                "examples": [
                    "Նա վախենում է սխալվելուց:"
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "զղջացող",
        "level": "starter",
        "form": "adjective",
        "subtext": "ցավել ինչ-որ բանի համար",
        "definitions": [
            {
                "text": "Ափսոսանք կամ տխրություն զգացող:",
                "examples": [
                    "Նա ներողություն է խնդրում ուշացման համար:"
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "ճիշտ",
        "level": "starter",
        "form": "adjective",
        "subtext": "ճիշտ պատասխան / ճիշտ ժամանակ",
        "definitions": [
            {
                "text": "Ճիշտ; համապատասխան:",
                "examples": [
                    "Սա՞ է ճիշտ գրասենյակը:"
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "սխալ",
        "level": "starter",
        "form": "adjective",
        "subtext": "սխալ պատասխան",
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
        "subtext": "նոր աշխատանք / լրիվ նոր",
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
        "subtext": "լիովին տարբեր / շատ տարբեր",
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
        "subtext": "նույնը, ինչ / ճիշտ նույնը",
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
        "subtext": "արագ սնունդ / արագ գնացք",
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
        "subtext": "դանդաղ առաջընթաց / դանդաղ ինտերնետ",
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
        "subtext": "հանգիստ տարածք / հանգիստ մնալ",
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
        "subtext": "բարձր աղմուկ / շատ բարձր",
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
        "subtext": "ապահով տարածք / ապահով զգալ",
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
        "subtext": "վտանգավոր իրավիճակ / շատ վտանգավոր",
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
                "text": "Ոչ գոհ; դժգոհ:",
                "examples": [
                    "Նա դժգոհ է իր ներկայիս աշխատավարձից:"
                ]
            }
        ],
        "subtext": "տխուր զգալ / շատ դժբախտ",
        "comparative": null,
         "superlative": null
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
        "subtext": "նյարդային զգալ / շատ նյարդային",
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
                "text": "Ճնշումից անհանգստության և լարվածության զգացում:",
                "examples": [
                    "She feels stressed before every deadline."
                ]
            }
        ],
        "subtext": "լարված զգալ / շատ լարված",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "ինքնավստահ",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Սեփական կարողությունների վրա վստահ լինելը:",
                "examples": [
                    "Նա շատ վստահ է հաճախորդների ներկայացումների ժամանակ:"
                ]
            }
        ],
        "subtext": "ինքնավստահ զգալ / շատ ինքնավստահ",
        "comparative": null,
         "superlative": null
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
        "subtext": "հպարտ զգալ / շատ հպարտ",
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
        "subtext": "վախեցած զգալ / շատ վախեցած",
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
                "text": "Շոկի զգացում անսպասելի բանից:",
                "examples": [
                    "Նա զարմացած էր աշխատավարձի բարձրացում ստանալու համար:"
                ]
            }
        ],
        "subtext": "զարմացած զգալ / շատ զարմացած",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "հիասթափված",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Տխրության զգացում, քանի որ ինչ-որ բան սպասվածի պես լավ չէր:",
                "examples": [
                    "Նա հիասթափված էր աշխատանքը չստանալու համար:"
                ]
            }
        ],
        "subtext": "հիասթափված զգալ / շատ հիասթափված",
        "comparative": null,
         "superlative": null
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
        "subtext": "գեղեցիկ տեսարան / գեղեցիկ քաղաք",
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
                "text": "Տեսքով հաճելի; բավականին գրավիչ:",
                "examples": [
                    "Նոր հանդիպումների սենյակը շատ գեղեցիկ է:"
                ]
            }
        ],
        "subtext": "բավականին լավ / գեղեցիկ վայր",
        "comparative": null,
         "superlative": null
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
        "subtext": "թունդ սուրճ / ուժեղ կարծիք",
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
        "subtext": "թույլ կապ / թույլ փաստարկ",
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
                "text": "Լավ ֆիզիկական վիճակում մարզումների շնորհիվ:",
                "examples": [
                    "Նա պահպանում է մարզավիճակը ամեն օր հեծանիվով աշխատանքի գնալով:"
                ]
            }
        ],
        "subtext": "ֆիզիկապես լավ վիճակում / մարզված մնալ",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "գերազանց",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Չափազանց լավ; շատ բարձր չափանիշի:",
                "examples": [
                    "She received an excellent review."
                ]
            }
        ],
        "subtext": "գերազանց աշխատանք / գերազանց արդյունքներ",
        "comparative": null,
         "superlative": null
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
        "subtext": "կատարյալ հնարավորություն / կատարյալ ժամանակ",
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
        "subtext": "լիովին անօգուտ / անօգուտ գաղափար",
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
        "subtext": "ճիշտ պատասխան / լիովին ճիշտ",
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
        "subtext": "հետաքրքիր գտնել / շատ հետաքրքիր",
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
        "subtext": "շատ ձանձրալի / ձանձրալի հանդիպում",
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
                "text": "Անհրաժեշտ ինչ-որ բան անելու համար:",
                "examples": [
                    "Լավ ինտերնետ կապը անհրաժեշտ է հեռավար աշխատանքի համար:"
                ]
            }
        ],
        "subtext": "բացարձակ անհրաժեշտ / եթե անհրաժեշտ է",
        "comparative": null,
         "superlative": null
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
        "subtext": "հնարավորինս շուտ / հնարավոր է",
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
        "subtext": "գրեթե անհնար / անհնար դարձնել",
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
        "subtext": "հատուկ առաջարկ / հատուկ դեպք",
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
                "text": "Շատ մարդկանց կողմից սիրված:",
                "examples": [
                    "Գրասենյակի մոտ գտնվող նոր սրճարանը շատ սիրված է:"
                ]
            }
        ],
        "subtext": "շատ հանրաճանաչ / հանրաճանաչ ընտրություն",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "նման",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Գրեթե նույնը; շատ ընդհանուր հատկանիշներ ունեցող:",
                "examples": [
                    "Մեր մոտեցումները շատ նման են:"
                ]
            }
        ],
        "subtext": "շատ նման / նման ինչ-որ բանի",
        "comparative": null,
         "superlative": null
    },
    {
        "word": "ընկերական",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Բարի և հաճելի; հեշտ շփվող:",
                "examples": [
                    "Նոր մենեջերը շատ ընկերասեր է և մատչելի:"
                ]
            }
        ],
        "subtext": "շատ ընկերական / ընկերական դեմք",
        "comparative": null,
         "superlative": null
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
        "subtext": "շատ բարի / ձեր կողմից շատ բարի է",
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
        "subtext": "շատ ծիծաղելի / ծիծաղելի պատմություն",
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
        "subtext": "շատ խելացի / խելացի գաղափար",
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
        "subtext": "շատ քաղաքավարի / քաղաքավարի խնդրանք",
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
        "subtext": "շատ կոպիտ / անհավանական կոպիտ",
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
        "subtext": "շատ ծույլ / ծույլ մոտեցում",
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
                "text": "Ճշմարտությունը խոսող; ոչ խաբող:",
                "examples": [
                    "Նա հայտնի է հաճախորդների հետ լիովին ազնիվ լինելով:"
                ]
            }
        ],
        "subtext": "շատ ազնիվ / լիովին ազնիվ",
        "comparative": null,
         "superlative": null
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
        "subtext": "շատ աղմկոտ / աղմկոտ միջավայր",
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