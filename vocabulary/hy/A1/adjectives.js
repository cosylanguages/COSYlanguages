// TODO: verify level classification
(function() {
    const lang = "hy";
    const data = [
    {
        "word": "բարձրահասակ",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Միջինից բարձր հասակ ունեցող:",
                "examples": [
                    "Նա մեր թիմի ամենաբարձրահասակ մարդն է:"
                ]
            }
        ],
        "subtext": "բարձրահասակ մարդ",
        "synonyms": [
            "բարձր շենք",
            "բավականին բարձր"
        ],
        "comparative": "ավելի բարձրահասակ",
        "superlative": "ամենաբարձրահասակ",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "antonyms": [
            "կարճ"
        ],
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_001"
    },
    {
        "word": "կարճ",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
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
        "femininePlural": null,
        "lang": "hy",
        "antonyms": [
            "բարձրահասակ"
        ],
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_002"
    },
    {
        "word": "երիտասարդ",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
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
        "femininePlural": null,
        "lang": "hy",
        "antonyms": [
            "հին"
        ],
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_003"
    },
    {
        "word": "հին",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
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
        "femininePlural": null,
        "lang": "hy",
        "antonyms": [
            "երիտասարդ"
        ],
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_004"
    },
    {
        "word": "արևոտ",
        "level": "starter",
        "theme": "nature",
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
        "subtext": "արևոտ օր / արևոտ եղանակ",
        "synonyms": [
            "պարզկա օր"
        ],
        "comparative": "ավելի արևոտ",
        "superlative": "ամենաարևոտ",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_nature_001"
    },
    {
        "word": "անձրևոտ",
        "level": "starter",
        "theme": "nature",
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
        "subtext": "անձրևոտ օր / անձրևոտ եղանակ",
        "synonyms": [
            "անձրևների սեզոն"
        ],
        "comparative": "ավելի անձրևոտ",
        "superlative": "ամենաանձրևոտ",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_nature_002"
    },
    {
        "word": "տաք",
        "level": "starter",
        "theme": "nature",
        "emoji": "🔥",
        "form": "adjective",
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
        "femininePlural": null,
        "lang": "hy",
        "antonyms": [
            "սառը"
        ],
        "transcription": "",
        "id": "hy_starter_nature_003"
    },
    {
        "word": "սառը",
        "level": "starter",
        "theme": "nature",
        "emoji": "❄️",
        "form": "adjective",
        "subtext": "շատ սառը / սառը խմիչք",
        "synonyms": [
            "ցուրտ առավոտ",
            "շատ ցուրտ"
        ],
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
        "femininePlural": null,
        "lang": "hy",
        "antonyms": [
            "տաք"
        ],
        "transcription": "",
        "id": "hy_starter_nature_004"
    },
    {
        "word": "սովորական",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
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
        "superlative": null,
        "lang": "hy",
        "antonyms": [
            "հատուկ"
        ],
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_005"
    },
    {
        "word": "էժան",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "form": "adjective",
        "subtext": "էժան թռիչք / շատ էժան",
        "synonyms": [
            "ցածր գին"
        ],
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
        "femininePlural": null,
        "lang": "hy",
        "antonyms": [
            "թանկ"
        ],
        "transcription": "",
        "id": "hy_starter_shopping_001"
    },
    {
        "word": "թանկ",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💎",
        "form": "adjective",
        "subtext": "շատ թանկ / թանկ հաճույք",
        "synonyms": [
            "բարձր գին"
        ],
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
        "femininePlural": null,
        "lang": "hy",
        "antonyms": [
            "էժան"
        ],
        "transcription": "",
        "id": "hy_starter_shopping_002"
    },
    {
        "word": "լավ",
        "level": "starter",
        "theme": "describing",
        "emoji": "👍",
        "form": "adjective",
        "subtext": "լավ գաղափար / լավ արժեք",
        "synonyms": [
            "հիանալի",
            "հաջողություն"
        ],
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
        "femininePlural": null,
        "lang": "hy",
        "antonyms": [
            "վատ"
        ],
        "transcription": "",
        "id": "hy_starter_describing_006"
    },
    {
        "word": "վատ",
        "level": "starter",
        "theme": "describing",
        "emoji": "👎",
        "form": "adjective",
        "subtext": "վատ լուրեր / վատ որոշում",
        "synonyms": [
            "սարսափելի",
            "անհաջողություն"
        ],
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
        "femininePlural": null,
        "lang": "hy",
        "antonyms": [
            "լավ"
        ],
        "transcription": "",
        "id": "hy_starter_describing_007"
    },
    {
        "word": "մեծ",
        "level": "starter",
        "theme": "describing",
        "emoji": "🐘",
        "form": "adjective",
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
        "femininePlural": null,
        "lang": "hy",
        "antonyms": [
            "փոքր"
        ],
        "transcription": "",
        "id": "hy_starter_describing_008"
    },
    {
        "word": "փոքր",
        "level": "starter",
        "theme": "describing",
        "emoji": "🐭",
        "form": "adjective",
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
        "femininePlural": null,
        "lang": "hy",
        "antonyms": [
            "մեծ"
        ],
        "transcription": "",
        "id": "hy_starter_describing_009"
    },
    {
        "word": "հեշտ",
        "level": "starter",
        "theme": "describing",
        "emoji": "✅",
        "form": "adjective",
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
        "femininePlural": null,
        "lang": "hy",
        "antonyms": [
            "դժվար"
        ],
        "transcription": "",
        "id": "hy_starter_describing_010"
    },
    {
        "word": "դժվար",
        "level": "starter",
        "theme": "describing",
        "emoji": "❌",
        "form": "adjective",
        "definitions": [
            {
                "text": "Շատ ջանք կամ հմտություն պահանջող:",
                "examples": [
                    "Նախագիծը շատ դժվար է թվում:"
                ]
            }
        ],
        "subtext": "դժվար անել / շատ դժվար",
        "synonyms": [
            "դժվարությամբ"
        ],
        "comparative": "ավելի դժվար",
        "superlative": "ամենադժվար",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "antonyms": [
            "հեշտ"
        ],
        "transcription": "",
        "id": "hy_starter_describing_011"
    },
    {
        "word": "երջանիկ",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😊",
        "form": "adjective",
        "subtext": "երջանիկ զգալ / երջանիկ օր",
        "synonyms": [
            "ուրախ"
        ],
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
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_emotions_001"
    },
    {
        "word": "հոգնած",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😫",
        "form": "adjective",
        "subtext": "հոգնած զգալ / շատ հոգնած",
        "synonyms": [
            "քնկոտ"
        ],
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
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_emotions_002"
    },
    {
        "word": "լրիվ դրույք",
        "level": "starter",
        "theme": "work",
        "emoji": "⏰",
        "form": "adjective",
        "definitions": [
            {
                "text": "Աշխատանքային շաբաթվա բոլոր ժամերով աշխատելը:",
                "examples": [
                    "Նա լրիվ դրույքով աշխատանք ունի բանկում:"
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "լրիվ դրույքով աշխատանք"
        ],
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "antonyms": [
            "կես դրույք"
        ],
        "transcription": "",
        "id": "hy_starter_work_001"
    },
    {
        "word": "կես դրույք",
        "level": "starter",
        "theme": "work",
        "emoji": "⏳",
        "form": "adjective",
        "definitions": [
            {
                "text": "Աշխատանքային շաբաթվա ոչ բոլոր ժամերով աշխատելը:",
                "examples": [
                    "Նա շաբաթ օրերին աշխատում է կես դրույքով:"
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "կես դրույքով աշխատանք"
        ],
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "antonyms": [
            "լրիվ դրույք"
        ],
        "transcription": "",
        "id": "hy_starter_work_002"
    },
    {
        "word": "մաքուր",
        "level": "starter",
        "theme": "furniture",
        "emoji": "✨",
        "form": "adjective",
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
        "femininePlural": null,
        "lang": "hy",
        "antonyms": [
            "կեղտոտ"
        ],
        "transcription": "",
        "id": "hy_starter_furniture_001"
    },
    {
        "word": "առողջ",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥗",
        "form": "adjective",
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
        "femininePlural": null,
        "lang": "hy",
        "antonyms": [
            "ոչ առողջ"
        ],
        "transcription": "",
        "id": "hy_starter_food_drink_001"
    },
    {
        "word": "հիվանդ",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "🤒",
        "form": "adjective",
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
        "superlative": null,
        "lang": "hy",
        "antonyms": [
            "առողջ"
        ],
        "transcription": "",
        "id": "hy_starter_health_medicine_001"
    },
    {
        "word": "առցանց",
        "level": "starter",
        "theme": "technology",
        "emoji": "🌐",
        "form": "adjective",
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
        "superlative": null,
        "lang": "hy",
        "antonyms": [
            "անցանց"
        ],
        "transcription": "",
        "id": "hy_starter_technology_001"
    },
    {
        "word": "մենակ",
        "level": "starter",
        "theme": "social",
        "emoji": "👤",
        "form": "adjective",
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
        "superlative": null,
        "lang": "hy",
        "antonyms": [
            "միասին"
        ],
        "transcription": "",
        "id": "hy_starter_social_001"
    },
    {
        "word": "հանգիստ",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😌",
        "form": "adjective",
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
        "superlative": null,
        "lang": "hy",
        "antonyms": [
            "լարված"
        ],
        "transcription": "",
        "id": "hy_starter_emotions_003"
    },
    {
        "word": "անհանգիստ",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😟",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "անհանգստանալ"
        ],
        "definitions": [
            {
                "text": "Անհանգստության զգացում ինչ-որ բանի պատճառով:",
                "examples": [
                    "Նա անհանգստացած է իր աշխատանքի համար:"
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "antonyms": [
            "հանգիստ"
        ],
        "transcription": "",
        "id": "hy_starter_emotions_004"
    },
    {
        "word": "զբաղված",
        "level": "starter",
        "theme": "work",
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
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_work_003"
    },
    {
        "word": "օգտակար",
        "level": "starter",
        "theme": "describing",
        "emoji": "🛠️",
        "form": "adjective",
        "subtext": "օգտակար լինել",
        "synonyms": [
            "գործնական"
        ],
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
        "femininePlural": null,
        "lang": "hy",
        "antonyms": [
            "անօգուտ"
        ],
        "transcription": "",
        "id": "hy_starter_describing_012"
    },
    {
        "word": "կարևոր",
        "level": "starter",
        "theme": "describing",
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
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_describing_013"
    },
    {
        "word": "կարմիր",
        "level": "starter",
        "theme": "colours",
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
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_colours_001"
    },
    {
        "word": "կապույտ",
        "level": "starter",
        "theme": "colours",
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
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_colours_002"
    },
    {
        "word": "կանաչ",
        "level": "starter",
        "theme": "colours",
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
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_colours_003"
    },
    {
        "word": "սպիտակ",
        "level": "starter",
        "theme": "colours",
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
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_colours_004"
    },
    {
        "word": "սև",
        "level": "starter",
        "theme": "colours",
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
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_colours_005"
    },
    {
        "word": "դեղին",
        "level": "starter",
        "theme": "colours",
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
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_colours_006"
    },
    {
        "word": "ազատ",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "ազատ ժամանակ",
        "synonyms": [
            "անվճար"
        ],
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
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_shopping_003"
    },
    {
        "word": "բաց",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📖",
        "form": "adjective",
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
        "femininePlural": null,
        "lang": "hy",
        "antonyms": [
            "փակ"
        ],
        "transcription": "",
        "id": "hy_starter_shopping_004"
    },
    {
        "word": "փակ",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔒",
        "form": "adjective",
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
        "femininePlural": null,
        "lang": "hy",
        "antonyms": [
            "բաց"
        ],
        "transcription": "",
        "id": "hy_starter_shopping_005"
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
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_014"
    },
    {
        "word": "փոքր",
        "level": "starter",
        "form": "adjective",
        "subtext": "մի փոքր",
        "synonyms": [
            "քիչ գումար"
        ],
        "definitions": [
            {
                "text": "Փոքր չափի; քիչ քանակությամբ:",
                "examples": [
                    "He drives a little car to save on fuel."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_015"
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
        "theme": "describing",
        "comparative": "ավելի երկար",
        "superlative": "ամենաերկար",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_016"
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
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_017"
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
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_018"
    },
    {
        "word": "լիքը",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "լիարժեք օր",
            "մարդկանցով լի"
        ],
        "definitions": [
            {
                "text": "Այլևս տեղ չունեցող:",
                "examples": [
                    "Գրասենյակը լիքն է մարդկանցով այսօր:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": "ավելի լիքը",
        "superlative": "ամենալիքը",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_019"
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
        "theme": "describing",
        "comparative": "ավելի դատարկ",
        "superlative": "ամենադատարկ",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_020"
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
        "theme": "nature",
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_nature_005"
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
        "theme": "nature",
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_nature_006"
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
        "theme": "nature",
        "comparative": "ավելի թաց",
        "superlative": "ամենաթաց",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_nature_007"
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
        "theme": "nature",
        "comparative": "ավելի չոր",
        "superlative": "ամենաչոր",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_nature_008"
    },
    {
        "word": "կեղտոտ",
        "level": "starter",
        "theme": "furniture",
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
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_furniture_002"
    },
    {
        "word": "կոշտ",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "դժվար աշխատանք",
            "դժվար որոշում"
        ],
        "definitions": [
            {
                "text": "Ոչ փափուկ:",
                "examples": [
                    "Այս աթոռը շատ կոշտ է:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": "ավելի կոշտ",
        "superlative": "ամենակոշտ",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_021"
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
        "theme": "describing",
        "comparative": "ավելի փափուկ",
        "superlative": "ամենափափուկ",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_022"
    },
    {
        "word": "ծանր",
        "level": "starter",
        "form": "adjective",
        "subtext": "ծանր երթևեկություն",
        "synonyms": [
            "ուժեղ անձրև"
        ],
        "definitions": [
            {
                "text": "Մեծ քաշ ունեցող:",
                "examples": [
                    "Այս տուփը շատ ծանր է:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": "ավելի ծանր",
        "superlative": "ամենածանր",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_023"
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
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_024"
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
        "theme": "colours",
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_colours_007"
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
        "theme": "colours",
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_colours_008"
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
        "theme": "colours",
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_colours_009"
    },
    {
        "word": "նարնջագույν",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "վառ նարնջագույն"
        ],
        "definitions": [
            {
                "text": "Նարնջի գույն ունեցող:",
                "examples": [
                    "He bought an orange jacket."
                ]
            }
        ],
        "theme": "colours",
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_colours_010"
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
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_025"
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
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_026"
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
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_027"
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
        "theme": "describing",
        "comparative": "ավելի սարսափելի",
        "superlative": "ամենասարսափելի",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_028"
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
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_029"
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
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_030"
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
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_031"
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
        "theme": "emotions",
        "comparative": "ավելի տխուր",
        "superlative": "ամենատխուր",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_emotions_005"
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
        "theme": "emotions",
        "comparative": "ավելի սոված",
        "superlative": "ամենասոված",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_emotions_006"
    },
    {
        "word": "բարկացած",
        "level": "starter",
        "form": "adjective",
        "subtext": "բարկացած զգալ / շատ բարկացած",
        "synonyms": [
            "բարկանալ մեկի վրա"
        ],
        "definitions": [
            {
                "text": "Զայրույթ զգացող:",
                "examples": [
                    "Նա բարկացած է ուշացման պատճառով:"
                ]
            }
        ],
        "theme": "emotions",
        "comparative": "ավելի բարկացած",
        "superlative": "ամենաբարկացած",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_emotions_007"
    },
    {
        "word": "ձանձրացած",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "ձանձրանալ"
        ],
        "definitions": [
            {
                "text": "Հետաքրքրության պակաս զգացող:",
                "examples": [
                    "Նա ձանձրանում է երկար հանդիպումների ժամանակ:"
                ]
            }
        ],
        "theme": "emotions",
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_emotions_008"
    },
    {
        "word": "ոգևորված",
        "level": "starter",
        "theme": "emotions",
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
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_emotions_009"
    },
    {
        "word": "վախեցած",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "վախենալ ինչ-որ բանից"
        ],
        "definitions": [
            {
                "text": "Վախ զգացող:",
                "examples": [
                    "Նա վախենում է սխալվելուց:"
                ]
            }
        ],
        "theme": "emotions",
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_emotions_010"
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
        "theme": "emotions",
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_emotions_011"
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
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_032"
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
        "theme": "describing",
        "comparative": "ավելի սխալ",
        "superlative": "ամենասխալ",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_033"
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
        "theme": "describing",
        "comparative": "ավելի նոր",
        "superlative": "ամենանոր",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_034"
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
        "theme": "describing",
        "comparative": "ավելի տարբեր",
        "superlative": "ամենատարբեր",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_035"
    },
    {
        "word": "նույն",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "նույնը",
            "ինչ",
            "ճիշտ նույնը"
        ],
        "definitions": [
            {
                "text": "Ոչ տարբեր:",
                "examples": [
                    "Մենք աշխատում ենք նույն գրասենյակում:"
                ]
            }
        ],
        "theme": "describing",
        "comparative": "ավելի նույն",
        "superlative": "ամենանույն",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_036"
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
        "theme": "describing",
        "comparative": "ավելի արագ",
        "superlative": "ամենաարագ",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_037"
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
        "theme": "describing",
        "comparative": "ավելի դանդաղ",
        "superlative": "ամենադանդաղ",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_038"
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
        "theme": "describing",
        "comparative": "ավելի հանգիստ",
        "superlative": "ամենահանգիստ",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_039"
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
        "theme": "describing",
        "comparative": "ավելի բարձր",
        "superlative": "ամենաբարձր",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_040"
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
        "theme": "places",
        "comparative": "ավելի ապահով",
        "superlative": "ամենաապահով",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_places_001"
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
        "theme": "places",
        "comparative": "ավելի վտանգավոր",
        "superlative": "ամենավտանգավոր",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_places_002"
    },
    {
        "word": "դժբախտ",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ոչ գոհ; դժգոհ:",
                "examples": [
                    "Նա դժգոհ է իր ներկայիս աշխատավարձից:"
                ]
            }
        ],
        "subtext": "շատ դժբախտ",
        "synonyms": [
            "տխուր զգալ"
        ],
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_emotions_012"
    },
    {
        "word": "նյարդային",
        "level": "starter",
        "theme": "emotions",
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
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_emotions_013"
    },
    {
        "word": "սթրեսի մեջ",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ճնշումից անհանգստության և լարվածության զգացում:",
                "examples": [
                    "She feels stressed before every deadline."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "լարված զգալ",
            "շատ լարված"
        ],
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_emotions_014"
    },
    {
        "word": "ինքնավստահ",
        "level": "starter",
        "theme": "describing",
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
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_041"
    },
    {
        "word": "հպարտ",
        "level": "starter",
        "theme": "describing",
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
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_042"
    },
    {
        "word": "վախեցած",
        "level": "starter",
        "theme": "emotions",
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
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_emotions_015"
    },
    {
        "word": "զարմացած",
        "level": "starter",
        "theme": "emotions",
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
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_emotions_016"
    },
    {
        "word": "հիասթափված",
        "level": "starter",
        "theme": "emotions",
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
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_emotions_017"
    },
    {
        "word": "գեղեցիկ",
        "level": "starter",
        "theme": "describing",
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
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_043"
    },
    {
        "word": "գեղեցիկ",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Տեսքով հաճելի; բավականին գրավիչ:",
                "examples": [
                    "Նոր հանդիպումների սենյակը շատ գեղեցիկ է:"
                ]
            }
        ],
        "subtext": "գեղեցիկ վայր",
        "synonyms": [
            "բավականին լավ"
        ],
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_044"
    },
    {
        "word": "ուժեղ",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ֆիզիկական մեծ ուժ ունեցող:",
                "examples": [
                    "Նա շատ ուժեղ մարդ է:"
                ]
            }
        ],
        "subtext": "ուժեղ կարծիք",
        "synonyms": [
            "թունդ սուրճ"
        ],
        "comparative": "ավելի ուժեղ",
        "superlative": "ամենաուժեղ",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_045"
    },
    {
        "word": "թույլ",
        "level": "starter",
        "theme": "describing",
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
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_046"
    },
    {
        "word": "կոկիկ",
        "level": "starter",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "Լավ ֆիզիկական վիճակում մարզումների շնորհիվ:",
                "examples": [
                    "Նա պահպանում է մարզավիճակը ամեն օր հեծանիվով աշխատանքի գնալով:"
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "ֆիզիկապես լավ վիճակում",
            "մարզված մնալ"
        ],
        "comparative": null,
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_health_medicine_002"
    },
    {
        "word": "գերազանց",
        "level": "starter",
        "theme": "describing",
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
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_047"
    },
    {
        "word": "կատարյալ",
        "level": "starter",
        "theme": "describing",
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
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_048"
    },
    {
        "word": "անօգուտ",
        "level": "starter",
        "theme": "describing",
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
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_049"
    },
    {
        "word": "ճիշտ",
        "level": "starter",
        "theme": "describing",
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
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_050"
    },
    {
        "word": "հետաքրքիր",
        "level": "starter",
        "theme": "describing",
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
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_051"
    },
    {
        "word": "ձանձրալի",
        "level": "starter",
        "theme": "describing",
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
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_052"
    },
    {
        "word": "անհրաժեշտ",
        "level": "starter",
        "theme": "describing",
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
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_053"
    },
    {
        "word": "հնարավոր",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ինչ-որ բան, որ կարող է տեղի ունենալ:",
                "examples": [
                    "Հնարավոր է, որ ես ուշանամ:"
                ]
            }
        ],
        "subtext": "հնարավոր է",
        "synonyms": [
            "հնարավորինս շուտ"
        ],
        "comparative": "ավելի հնարավոր",
        "superlative": "ամենահնարավոր",
        "feminine": null,
        "plural": null,
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_054"
    },
    {
        "word": "անհնար",
        "level": "starter",
        "theme": "describing",
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
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_055"
    },
    {
        "word": "հատուկ",
        "level": "starter",
        "theme": "describing",
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
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_056"
    },
    {
        "word": "հանրաճանաչ",
        "level": "starter",
        "theme": "describing",
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
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_057"
    },
    {
        "word": "նման",
        "level": "starter",
        "theme": "describing",
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
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_058"
    },
    {
        "word": "ընկերական",
        "level": "starter",
        "theme": "describing",
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
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_059"
    },
    {
        "word": "բարի",
        "level": "starter",
        "theme": "describing",
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
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_060"
    },
    {
        "word": "ծիծաղելի",
        "level": "starter",
        "theme": "describing",
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
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_061"
    },
    {
        "word": "խելացի",
        "level": "starter",
        "theme": "describing",
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
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_062"
    },
    {
        "word": "քաղաքավարի",
        "level": "starter",
        "theme": "describing",
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
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_063"
    },
    {
        "word": "կոպիտ",
        "level": "starter",
        "theme": "describing",
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
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_064"
    },
    {
        "word": "ծույլ",
        "level": "starter",
        "theme": "describing",
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
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_065"
    },
    {
        "word": "ազնիվ",
        "level": "starter",
        "theme": "describing",
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
        "superlative": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_066"
    },
    {
        "word": "աղմկոտ",
        "level": "starter",
        "theme": "describing",
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
        "femininePlural": null,
        "lang": "hy",
        "transcription": "",
        "emoji": "✨",
        "id": "hy_starter_describing_067"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
