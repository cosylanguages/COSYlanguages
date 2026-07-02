// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "լինել",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "👤",
        "subtext": "հոգնած լինել / երջանիկ լինել / աշխատանքի լինել / պատրաստ լինել",
        "form": "verb",
        "definitions": [
            {
                "text": "Գոյություն ունենալ, լինել որևէ վիճակում:",
                "examples": [
                    "Ես հոգնած եմ:",
                    "Նա բժիշկ է:",
                    "Մենք ուշացել ենք:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "էր/էին",
        "v3": "եղել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "ունենալ",
        "level": "starter",
        "theme": "work",
        "emoji": "👜",
        "subtext": "աշխատանք ունենալ / մեքենա ունենալ / ժամանակ ունենալ",
        "form": "verb",
        "definitions": [
            {
                "text": "Ինչ-որ բան ունենալ:",
                "examples": [
                    "Ես աշխատանք ունեմ:",
                    "Նա մեքենա ունի:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "ուներ",
        "v3": "ունեցել",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "զգալ",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "🌡️",
        "subtext": "հոգնած զգալ / լավ զգալ / վատ զգալ",
        "form": "verb",
        "definitions": [
            {
                "text": "Ֆիզիկական կամ հուզական վիճակ զգալ:",
                "examples": [
                    "Նա իրեն հոգնած է զգում:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "զգաց",
        "v3": "զգացել",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "տալ",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🎁",
        "subtext": "աշխատանք տալ / փող տալ / խորհուրդ տալ",
        "opposite": "վերցնել",
        "oppositeEmoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "Ինչ-որ բան փոխանցել մեկին:",
                "examples": [
                    "Նա ինձ շատ աշխատանք է տալիս:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "տվեց",
        "v3": "տվել",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "վերցնել",
        "level": "starter",
        "theme": "travel",
        "emoji": "👜",
        "subtext": "դաս վերցնել",
        "synonyms": [
            "ավտոբուս նստել",
            "տաքսի նստել"
        ],
        "opposite": "տալ",
        "oppositeEmoji": "🎁",
        "form": "verb",
        "definitions": [
            {
                "text": "Ինչ-որ բան բռնել կամ օգտագործել:",
                "examples": [
                    "Ես ավտոբուս եմ նստում աշխատանքի գնալու համար:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "վերցրեց",
        "v3": "վերցրել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "ստանալ",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📥",
        "subtext": "նամակ ստանալ / աշխատավարձ ստանալ / պատասխան ստանալ",
        "form": "verb",
        "definitions": [
            {
                "text": "Ընդունել, ստանալ կամ դառնալ:",
                "examples": [
                    "Ես լավ աշխատավարձ եմ ստանում:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ստացավ",
        "v3": "ստացել",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "դնել",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "📥",
        "subtext": "պայուսակը դնել / գիրքը դնել / այստեղ դնել",
        "form": "verb",
        "definitions": [
            {
                "text": "Ինչ-որ բան դնել մի տեղում:",
                "examples": [
                    "Դրեք ձեր պայուսակն այստեղ:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "դրեց",
        "v3": "դրել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "պատրաստել",
        "level": "starter",
        "theme": "work",
        "emoji": "🏗️",
        "subtext": "սուրճ պատրաստել / ճաշ պատրաստել",
        "synonyms": [
            "սխալ անել"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ինչ-որ բան ստեղծել կամ արտադրել:",
                "examples": [
                    "Ես առավոտյան սուրճ եմ պատրաստում:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "պատրաստեց",
        "v3": "պատրաստել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "անել",
        "level": "starter",
        "theme": "work",
        "emoji": "🛠️",
        "subtext": "աշխատանք անել / տնային աշխատանք անել / լավ անել",
        "form": "verb",
        "definitions": [
            {
                "text": "Գործողություն կամ գործունեություն իրականացնել:",
                "examples": [
                    "Ես ամեն օր անում եմ իմ աշխատանքը:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "արեց",
        "v3": "արել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "օգտագործել",
        "level": "starter",
        "theme": "technology",
        "emoji": "🛠️",
        "subtext": "հեռախոս օգտագործել / համակարգիչ օգտագործել",
        "form": "verb",
        "definitions": [
            {
                "text": "Ինչ-որ բան օգտագործել որոշակի նպատակով:",
                "examples": [
                    "Ես օգտագործում եմ իմ հեռախոսը ամեն ինչի համար:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "օգտագործեց",
        "v3": "օգտագործել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "բացել",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📖",
        "subtext": "դուռը բացել / գրասենյակը բացել / պատուհանը բացել",
        "opposite": "փակել",
        "oppositeEmoji": "🔒",
        "form": "verb",
        "definitions": [
            {
                "text": "Ինչ-որ բան բաց անել:",
                "examples": [
                    "Նա բացում է գրասենյակը ութին:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "բացեց",
        "v3": "բացել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "փակել",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔒",
        "subtext": "դուռը փակել / գրասենյակը փակել / աչքերը փակել",
        "opposite": "բացել",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "Ինչ-որ բան փակ անել:",
                "examples": [
                    "Գրասենյակը փակվում է վեցին:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "փակեց",
        "v3": "փակել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "սկսել",
        "level": "starter",
        "theme": "work",
        "emoji": "▶️",
        "subtext": "աշխատանքը սկսել / դասը սկսել / օրը սկսել",
        "opposite": "ավարտել",
        "oppositeEmoji": "🏁",
        "form": "verb",
        "definitions": [
            {
                "text": "Գործունեություն սկսել:",
                "examples": [
                    "Ես սկսում եմ աշխատանքը ութն անց կեսին:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "սկսեց",
        "v3": "սկսել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "ավարտել",
        "level": "starter",
        "theme": "work",
        "emoji": "🏁",
        "subtext": "աշխատանքը ավարտել / նախագիծը ավարտել",
        "opposite": "սկսել",
        "oppositeEmoji": "▶️",
        "form": "verb",
        "definitions": [
            {
                "text": "Ավարտին հասցնել ինչ-որ բան:",
                "examples": [
                    "Նա ավարտում է աշխատանքը հինգին:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ավարտեց",
        "v3": "ավարտել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "օգնել",
        "level": "starter",
        "theme": "work",
        "emoji": "🤝",
        "subtext": "գործընկերոջը օգնել / մարդկանց օգնել",
        "form": "verb",
        "definitions": [
            {
                "text": "Ինչ-որ մեկի համար աշխատանքը հեշտացնել:",
                "examples": [
                    "Նա օգնում է նոր գործընկերներին:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "օգնեց",
        "v3": "օգնել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "փորձել",
        "level": "starter",
        "theme": "school",
        "emoji": "🎯",
        "subtext": "փորձել անել / նորից փորձել",
        "form": "verb",
        "definitions": [
            {
                "text": "Փորձել ինչ-որ բան անել:",
                "examples": [
                    "Ես միշտ փորձում եմ պատասխանել հաղորդագրություններին:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "փորձեց",
        "v3": "փորձել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "ցույց տալ",
        "level": "starter",
        "theme": "language",
        "emoji": "📽️",
        "subtext": "ճանապարհը ցույց տալ / նկարը ցույց տալ",
        "form": "verb",
        "definitions": [
            {
                "text": "Թույլ տալ, որ ինչ-որ մեկը տեսնի ինչ-որ բան:",
                "examples": [
                    "Կարո՞ղ եք ցույց տալ, թե ինչպես է աշխատում համակարգը:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ցույց տվեց",
        "v3": "ցույց տվել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "գտնել",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔍",
        "subtext": "աշխատանք գտնել / բանալիները գտնել",
        "form": "verb",
        "definitions": [
            {
                "text": "Բացահայտել կամ գտնել ինչ-որ բան:",
                "examples": [
                    "Ես նոր աշխատանք գտա:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "գտավ",
        "v3": "գտել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "պահել",
        "level": "starter",
        "theme": "work",
        "emoji": "📦",
        "subtext": "անդորրագիրը պահել / գաղտնիքը պահել",
        "form": "verb",
        "definitions": [
            {
                "text": "Շարունակել ունենալ կամ անել ինչ-որ բան:",
                "examples": [
                    "Պահեք անդորրագիրը:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "պահեց",
        "v3": "պահել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "կորցնել",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📉",
        "subtext": "բանալիները կորցնել / ժամանակ կորցնել",
        "opposite": "հաղթել",
        "oppositeEmoji": "🏆",
        "form": "verb",
        "definitions": [
            {
                "text": "Դադարել ունենալ ինչ-որ բան:",
                "examples": [
                    "Ես կորցրել եմ իմ բանալիները:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "կորցրեց",
        "v3": "կորցրել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "կտրել",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "✂️",
        "subtext": "հացը կտրել / թուղթը կտրել",
        "form": "verb",
        "definitions": [
            {
                "text": "Բաժանել ինչ-որ սուր բանով:",
                "examples": [
                    "Նա հացն է կտրում:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "կտրեց",
        "v3": "կտրել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "պտտել",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "🔄",
        "subtext": "",
        "synonyms": [
            "ձախ թեքվել",
            "աջ թեքվել"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Շարժվել որոշակի ուղղությամբ:",
                "examples": [
                    "Թեքվեք ձախ գրասենյակի մոտ:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned",
        "v3": "պտտել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "բերել",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🎁",
        "subtext": "անձնագիրը բերել / ջուր բերել",
        "form": "verb",
        "definitions": [
            {
                "text": "Ինչ-որ բան բերել մի տեղից:",
                "examples": [
                    "Բերեք ձեր անձնագիրը:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "բերեց",
        "v3": "բերել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "ասել",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🗨️",
        "subtext": "բարև ասել / այո ասել / ոչ ասել",
        "form": "verb",
        "definitions": [
            {
                "text": "Բանավոր արտահայտել ինչ-որ բան:",
                "examples": [
                    "Նա ամեն առավոտ բարև է ասում:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ասաց",
        "v3": "ասել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "պատմել",
        "level": "starter",
        "theme": "language",
        "emoji": "🗣️",
        "subtext": "ճշմարտությունը պատմել / պատմություն պատմել",
        "form": "verb",
        "definitions": [
            {
                "text": "Տեղեկատվություն տրամադրել ինչ-որ մեկին:",
                "examples": [
                    "Նա պատմում է թիմին փոփոխությունների մասին:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "պատմեց",
        "v3": "պատմել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "հարցնել",
        "level": "starter",
        "theme": "language",
        "emoji": "❓",
        "subtext": "հարց հարցնել",
        "synonyms": [
            "օգնություն խնդրել"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Հարց տալ կամ խնդրանք ներկայացնել:",
                "examples": [
                    "Նա կարծիք է հարցնում ամեն ներկայացումից հետո:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "հարցրեց",
        "v3": "հարցրել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "խոսել",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🗣️",
        "subtext": "անգլերեն խոսել / հայերեն խոսել",
        "form": "verb",
        "definitions": [
            {
                "text": "Բառեր ասել, հաղորդակցվել:",
                "examples": [
                    "Նա խոսում է ֆրանսերեն:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "խոսեց",
        "v3": "խոսել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "զրուցել",
        "level": "starter",
        "theme": "social",
        "emoji": "💬",
        "subtext": "ընկերոջ հետ զրուցել / մենեջերի հետ զրուցել",
        "form": "verb",
        "definitions": [
            {
                "text": "Հաղորդակցվել խոսելու միջոցով:",
                "examples": [
                    "Նա զրուցում է իր մենեջերի հետ խնդրի մասին:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "զրուցեց",
        "v3": "զրուցել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "զանգել",
        "level": "starter",
        "theme": "technology",
        "emoji": "📞",
        "subtext": "տաքսի զանգել / մայրիկին զանգել",
        "form": "verb",
        "definitions": [
            {
                "text": "Հեռախոսով կապվել ինչ-որ մեկի հետ:",
                "examples": [
                    "Ես զանգում եմ իմ հաճախորդներին ամեն առավոտ:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "called",
        "v3": "զանգել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "գրել",
        "level": "starter",
        "theme": "school",
        "emoji": "✍️",
        "subtext": "նամակ գրել / անունը գրել",
        "opposite": "կարդալ",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "Բառեր գրել թղթի կամ էկրանի վրա:",
                "examples": [
                    "Ես ամբողջ օրը նամակներ եմ գրում:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "գրեց",
        "v3": "գրել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "կարդալ",
        "level": "starter",
        "theme": "school",
        "emoji": "📖",
        "subtext": "գիրք կարդալ / լուրեր կարդալ",
        "opposite": "գրել",
        "oppositeEmoji": "✍️",
        "form": "verb",
        "definitions": [
            {
                "text": "Նայել և հասկանալ գրված բառերը:",
                "examples": [
                    "Նա ամեն առավոտ լուրեր է կարդում:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "կարդաց",
        "v3": "կարդացել",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "լսել",
        "level": "starter",
        "theme": "school",
        "emoji": "🎧",
        "subtext": "երաժշություն լսել / ուսուցչին լսել",
        "form": "verb",
        "definitions": [
            {
                "text": "Ուշադրություն դարձնել հնչյուններին:",
                "examples": [
                    "Ես աշխատանքի ժամանակ պոդքասթներ եմ լսում:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "լսեց",
        "v3": "լսել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "պատասխանել",
        "level": "starter",
        "theme": "language",
        "emoji": "📞",
        "subtext": "հարցին պատասխանել / նամակին պատասխանել",
        "form": "verb",
        "definitions": [
            {
                "text": "Արձագանքել հարցին կամ հաղորդակցությանը:",
                "examples": [
                    "Նա արագ պատասխանում է բոլոր նամակներին:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "պատասխανեց",
        "v3": "պատասխանել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "կրկնել",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🔁",
        "subtext": "բառը կրկնել / նախադասությունը կրկնել",
        "form": "verb",
        "definitions": [
            {
                "text": "Նորից ասել կամ անել ինչ-որ բան:",
                "examples": [
                    "Խնդրում եմ, կրկնեք դա:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "կրկնեց",
        "v3": "կրկնել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "գնալ",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚶",
        "subtext": "աշխատանքի գնալ / տուն գնալ / խանութ գնալ",
        "form": "verb",
        "definitions": [
            {
                "text": "Մի տեղից մյուսը տեղափոխվել:",
                "examples": [
                    "Ես աշխատանքի եմ գնում ավտոբուսով:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "գնաց",
        "v3": "գնացել",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "գալ",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏃‍♂️",
        "subtext": "տուն գալ / գրասենյակ գալ",
        "opposite": "գնալ",
        "oppositeEmoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "Շարժվել դեպի մի տեղ կամ մարդ:",
                "examples": [
                    "Նա գալիս է գրասենյակ իննին:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "եկավ",
        "v3": "եկել",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "քայլել",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚶",
        "subtext": "այգում քայլել / աշխատանքի քայլել",
        "form": "verb",
        "definitions": [
            {
                "text": "Ոտքով տեղաշարժվել նորմալ տեմպով:",
                "examples": [
                    "Նա ամեն օր քայլում է աշխատանքի գնալիս:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "քայլեց",
        "v3": "քայլել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "վարել",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚗",
        "subtext": "մեքենա վարել / տաքսի վարել",
        "form": "verb",
        "definitions": [
            {
                "text": "Տրանսպորտային միջոց կառավարել:",
                "examples": [
                    "Նա մեքենա է վարում:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "վարեց",
        "v3": "վարել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "թռչել",
        "level": "starter",
        "theme": "travel",
        "emoji": "✈️",
        "subtext": "Ինքնաթիռով թռչել / Փարիզ թռչել",
        "form": "verb",
        "definitions": [
            {
                "text": "Օդով տեղաշարժվել:",
                "examples": [
                    "Նա թռչում է Փարիզ հանդիպումների համար:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "թռավ",
        "v3": "թռել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "ժամանել",
        "level": "starter",
        "theme": "work",
        "emoji": "🏁",
        "subtext": "ժամանակին ժամանել / օդանավակայան ժամանել",
        "form": "verb",
        "definitions": [
            {
                "text": "Հասնել նպատակակետին:",
                "examples": [
                    "Նա ժամանում է գրասենյակ իննին:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ժամանեց",
        "v3": "ժամանել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "հեռանալ",
        "level": "starter",
        "theme": "work",
        "emoji": "🚪",
        "subtext": "գրասենյակից հեռանալ",
        "synonyms": [
            "տանից դուրս գալ"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Հեռանալ մի տեղից:",
                "examples": [
                    "Ես տնից դուրս եմ գալիս ութն անց քառորդ:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "հեռացավ",
        "v3": "հեռացել",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "տեղափոխվել",
        "level": "starter",
        "theme": "furniture",
        "emoji": "📦",
        "subtext": "նոր տուն տեղափոխվել / քաղաք տեղափոխվել",
        "form": "verb",
        "definitions": [
            {
                "text": "Գնալ ապրելու կամ աշխատելու այլ տեղում:",
                "examples": [
                    "Նրանք տեղափոխվեցին ավելի մեծ բնակարան:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "տեղափոխվեց",
        "v3": "տեղափոխվել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "վերադառնալ",
        "level": "starter",
        "theme": "travel",
        "emoji": "🔙",
        "subtext": "ուղևորությունից վերադառնալ / տուն վերադառնալ",
        "form": "verb",
        "definitions": [
            {
                "text": "Հետ գալ կամ գնալ մի տեղ:",
                "examples": [
                    "Նա վերադառնում է ուղևորությունից ուրբաթ օրը:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "վերադարձավ",
        "v3": "վերադարձել",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "ճամփորդել",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "✈️",
        "subtext": "աշխարհով մեկ ճամփորդել / բիզնեսով ճամփորդել",
        "form": "verb",
        "definitions": [
            {
                "text": "Մի տեղից մյուսը գնալ, հատկապես հեռու:",
                "examples": [
                    "Նա ամսական երեք անգամ ճամփորդում է աշխատանքի բերումով:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ճամփորդեց",
        "v3": "ճամփորդել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "ուտել",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍎",
        "subtext": "ճաշ ուտել / խնձոր ուտել",
        "opposite": "խմել",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "Սնունդը դնել բերանը և կուլ տալ:",
                "examples": [
                    "Մենք ճաշում ենք յոթին:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "կերավ",
        "v3": "կերել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "խմել",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥛",
        "subtext": "ջուր խմել / սուրճ խմել / թեյ խմել",
        "opposite": "ուտել",
        "oppositeEmoji": "🍎",
        "form": "verb",
        "definitions": [
            {
                "text": "Հեղուկը դնել բերանը և կուլ տալ:",
                "examples": [
                    "Ես ջուր եմ խմում:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "խմեց",
        "v3": "խմել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "քնել",
        "level": "starter",
        "theme": "time",
        "emoji": "😴",
        "subtext": "լավ քնել / ութ ժամ քնել",
        "opposite": "արթնանալ",
        "oppositeEmoji": "⏰",
        "form": "verb",
        "definitions": [
            {
                "text": "Հանգստանալ փակ աչքերով:",
                "examples": [
                    "Նա քնում է օրական յոթ ժամ:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "քնեց",
        "v3": "քնել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "եփել",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "🍳",
        "subtext": "ճաշ եփել / ընթրիք եփել",
        "form": "verb",
        "definitions": [
            {
                "text": "Սնունդ պատրաստել տաքացնելու միջոցով:",
                "examples": [
                    "Նա ամեն երեկո ընթրիք է եփում:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "եփեց",
        "v3": "եփել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "մաքրել",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🧹",
        "subtext": "տունը մաքրել / սենյակը մաքրել",
        "form": "verb",
        "definitions": [
            {
                "text": "Հեռացնել կեղտը ինչ-որ բանից:",
                "examples": [
                    "Ես մաքրում եմ բնակարանը ամեն շաբաթ:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "մաքրեց",
        "v3": "մաքրել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "հագնել",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👕",
        "subtext": "կոստյում հագնել / շապիկ հագնել",
        "form": "verb",
        "definitions": [
            {
                "text": "Հագուստ կամ պարագաներ ունենալ մարմնի վրա:",
                "examples": [
                    "Նա կոստյում է հագնում աշխատանքի գնալիս:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "հագավ",
        "v3": "հագել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "լվանալ",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🧼",
        "subtext": "ձեռքերը լվանալ / մեքենան լվանալ",
        "form": "verb",
        "definitions": [
            {
                "text": "Մաքրել ինչ-որ բան ջրով:",
                "examples": [
                    "Նա լվանում է իր մեքենան ամեն կիրակի:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "լվաց",
        "v3": "լվացել",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "գնել",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🛒",
        "subtext": "սնունդ գնել / նվեր գնել",
        "opposite": "վաճառել",
        "oppositeEmoji": "🏷️",
        "form": "verb",
        "definitions": [
            {
                "text": "Ինչ-որ բան ձեռք բերել փողի դիմաց:",
                "examples": [
                    "Նա սնունդ է գնում առցանց:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "գնեց",
        "v3": "գնել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "վճարել",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💳",
        "subtext": "հաշիվը վճարել / կանխիկ վճարել",
        "form": "verb",
        "definitions": [
            {
                "text": "Փող տալ ինչ-որ բանի դիմաց:",
                "examples": [
                    "Ես վճարում եմ իմ հաշիվները:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "վճարեց",
        "v3": "վճարել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "ծախսել",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💸",
        "subtext": "փող ծախսել / ժամանակ ծախսել",
        "form": "verb",
        "definitions": [
            {
                "text": "Փող օգտագործել իրերի համար վճարելու նպատակով:",
                "examples": [
                    "Նա չափազանց շատ փող է ծախսում սննդի վրա:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ծախսեց",
        "v3": "ծախսել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "խնայել",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💰",
        "subtext": "փող խնայել / էներգիա խնայել",
        "opposite": "ծախսել",
        "oppositeEmoji": "💸",
        "form": "verb",
        "definitions": [
            {
                "text": "Փողը պահել՝ ծախսելու փոխարեն:",
                "examples": [
                    "Նա ամեն ամիս հարյուր եվրո է խնայում:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "խնայեց",
        "v3": "խնայել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "աշխատել",
        "level": "starter",
        "theme": "work",
        "emoji": "💼",
        "subtext": "գրասենյակում աշխատել / տնից աշխատել",
        "form": "verb",
        "definitions": [
            {
                "text": "Առաջադրանքներ կատարել որպես աշխատանքի մաս:",
                "examples": [
                    "Նա աշխատում է տնից շաբաթական երեք օր:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "աշխատեց",
        "v3": "աշխատել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "ապրել",
        "level": "starter",
        "theme": "places",
        "emoji": "🏠",
        "subtext": "Երևանում ապրել / բնակարանում ապրել",
        "opposite": "մահանալ",
        "oppositeEmoji": "⚰️",
        "form": "verb",
        "definitions": [
            {
                "text": "Տուն ունենալ մի տեղում, լինել ողջ:",
                "examples": [
                    "Նա ապրում է կենտրոնին մոտ բնակարանում:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "ապրեց",
        "v3": "ապրել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "մտածել",
        "level": "starter",
        "theme": "social",
        "emoji": "💭",
        "subtext": "լավ մտածել / գաղափարի մասին մտածել",
        "form": "verb",
        "definitions": [
            {
                "text": "Համոզմունք կամ կարծիք ունենալ, օգտագործել միտքը:",
                "examples": [
                    "Ես մտածում եմ, որ դա լավ գաղափար է:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "մտածեց",
        "v3": "մտածել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "իմանալ",
        "level": "starter",
        "theme": "school",
        "emoji": "🧠",
        "subtext": "նրա անունը իմանալ / ճշմարտությունը իմանալ",
        "form": "verb",
        "definitions": [
            {
                "text": "Տեղեկատվություն կամ իրազեկվածություն ունենալ ինչ-որ բանի մասին:",
                "examples": [
                    "Ես գիտեմ նրա անունը:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "knew",
        "v3": "իմացել",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "ուզել",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🙏",
        "subtext": "սուրճ ուզել / օգնություն ուզել",
        "form": "verb",
        "definitions": [
            {
                "text": "Ցանկանալ ինչ-որ բան:",
                "examples": [
                    "Ես սուրճ եմ ուզում:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "wanted",
        "v3": "ուզել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "կարիք ունենալ",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🆘",
        "subtext": "օգնության կարիք ունենալ / հանգստի կարիք ունենալ",
        "form": "verb",
        "definitions": [
            {
                "text": "Պահանջել ինչ-որ բան:",
                "examples": [
                    "Ես հանգստի կարիք ունեմ:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "կարիք ուներ",
        "v3": "կարիք ունեցել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "հավանել",
        "level": "starter",
        "theme": "emotions",
        "emoji": "👍",
        "subtext": "երաժշտություն հավանել / աշխատանքը հավանել",
        "form": "verb",
        "definitions": [
            {
                "text": "Ինչ-որ բան հաճելի համարել:",
                "examples": [
                    "Ես հավանում եմ իմ աշխատանքը:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "հավանեց",
        "v3": "հավանել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "սիրել",
        "level": "starter",
        "theme": "emotions",
        "emoji": "❤️",
        "subtext": "ընտանիքը սիրել / աշխատանքը սիրել",
        "form": "verb",
        "definitions": [
            {
                "text": "Ուժեղ կապվածություն ունենալ:",
                "examples": [
                    "Նա սիրում է իր աշխատանքը:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "սիրեց",
        "v3": "սիրել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "ատել",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😡",
        "subtext": "ուշացումը ատել / անձրևը ատել",
        "form": "verb",
        "definitions": [
            {
                "text": "Ուժեղ հակակրանք ունենալ:",
                "examples": [
                    "Նա ատում է երկար հանդիպումները:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "ատեց",
        "v3": "ատել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "հուսալ",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🤞",
        "subtext": "լավագույնին հուսալ",
        "synonyms": [
            "տեսնել ձեզ շուտով"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ցանկանալ, որ ինչ-որ բան տեղի ունենա:",
                "examples": [
                    "Հույս ունեմ այս տարի առաջխաղացում ստանալ:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "հուսաց",
        "v3": "հուսացել",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "հիշել",
        "level": "starter",
        "theme": "school",
        "emoji": "🧠",
        "subtext": "իմ անունը հիշել / օրը հիշել",
        "form": "verb",
        "definitions": [
            {
                "text": "Հիշողություն ունենալ, չմոռանալ:",
                "examples": [
                    "Խնդրում եմ, հիշեք վերջնաժամկետը:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "հիշեց",
        "v3": "հիշել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "մոռանալ",
        "level": "starter",
        "theme": "school",
        "emoji": "🤔",
        "subtext": "բանալիները մոռանալ / հանդիպումը մոռանալ",
        "form": "verb",
        "definitions": [
            {
                "text": "Չհիշել:",
                "examples": [
                    "Մի մոռացեք հանդիպման մասին:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "մոռացավ",
        "v3": "մոռացել",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "հասկանալ",
        "level": "starter",
        "theme": "language",
        "emoji": "💡",
        "subtext": "հարցը հասկանալ / կանոնը հասկանալ",
        "form": "verb",
        "definitions": [
            {
                "text": "Ըմբռնել ինչ-որ բանի իմաստը:",
                "examples": [
                    "Ես հասկանում եմ պայմանագիրը:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "հասկացավ",
        "v3": "հասկացել",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "որոշել",
        "level": "starter",
        "theme": "social",
        "emoji": "⚖️",
        "subtext": "հիմա որոշել / փոխել որոշել",
        "form": "verb",
        "definitions": [
            {
                "text": "Ընտրություն կատարել:",
                "examples": [
                    "Նա որոշեց փոխել մասնագիտությունը:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "որոշեց",
        "v3": "որոշել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "վայելել",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😊",
        "subtext": "ֆիլմը վայելել / օրը վայելել",
        "form": "verb",
        "definitions": [
            {
                "text": "Հաճույք ստանալ ինչ-որ բանից:",
                "examples": [
                    "Նա իսկապես վայելում է տնից աշխատելը:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "վայելեց",
        "v3": "վայելել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "տեսնել",
        "level": "starter",
        "theme": "body",
        "emoji": "👁️",
        "subtext": "ընկերոջը տեսնել / ֆիլմ տեսնել",
        "form": "verb",
        "definitions": [
            {
                "text": "Նկատել կամ ընկալել աչքերով:",
                "examples": [
                    "Ես վաղը տեսնելու եմ իմ բժշկին:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "տեսավ",
        "v3": "տեսել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "լսել",
        "level": "starter",
        "theme": "body",
        "emoji": "👂",
        "subtext": "ձայնը լսել / երաժշտություն լսել",
        "form": "verb",
        "definitions": [
            {
                "text": "Ընկալել ձայնը ականջներով:",
                "examples": [
                    "Ես ամեն առավոտ լսում եմ զարթուցիչը:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "լսեց",
        "v3": "լսել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "արթնանալ",
        "level": "starter",
        "theme": "work",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "վաղ արթնանալ / ժամը յոթին արթնանալ",
        "opposite": "քնել",
        "oppositeEmoji": "😴",
        "definitions": [
            {
                "text": "Դադարել քնել:",
                "examples": [
                    "Ես արթնանում եմ վեցն անց կեսին ամեն առավոտ:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "արթնացավ",
        "v3": "արթնացել",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "դիտել",
        "level": "starter",
        "theme": "social",
        "emoji": "📺",
        "form": "verb",
        "subtext": "հեռուստացույց դիտել / ֆուտբոլ դիտել",
        "definitions": [
            {
                "text": "Նայել ինչ-որ բանի որոշակի ժամանակահատվածում:",
                "examples": [
                    "Նա ամեն առավոտ դիտում է լուրերը:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "դիտեց",
        "v3": "դիտել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "նայել",
        "level": "starter",
        "theme": "people",
        "emoji": "👀",
        "subtext": "նկարին նայել / պատուհանից նայել",
        "form": "verb",
        "definitions": [
            {
                "text": "Ուղղել աչքերը դեպի ինչ-որ բան:",
                "examples": [
                    "Նայեք այս լուսանկարին:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "նայեց",
        "v3": "նայել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "խաղալ",
        "level": "starter",
        "theme": "social",
        "emoji": "🎮",
        "subtext": "ֆուտբոլ խաղալ / թենիս խաղալ",
        "form": "verb",
        "definitions": [
            {
                "text": "Մասնակցել խաղի կամ սպորտի:",
                "examples": [
                    "Նա ֆուտբոլ է խաղում հանգստյան օրերին:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "խաղաց",
        "v3": "խաղացել",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "վազել",
        "level": "starter",
        "theme": "sports",
        "emoji": "🏃",
        "subtext": "արագ վազել / այգում վազել",
        "form": "verb",
        "definitions": [
            {
                "text": "Շատ արագ շարժվել ոտքերով:",
                "examples": [
                    "Ես վազում եմ այգում:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "վազեց",
        "v3": "վազել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "նստել",
        "level": "starter",
        "theme": "work",
        "emoji": "🪑",
        "subtext": "աթոռին նստել / սեղանի մոտ նստել",
        "opposite": "կանգնել",
        "oppositeEmoji": "🧍",
        "form": "verb",
        "definitions": [
            {
                "text": "Լինել նստած դիրքում:",
                "examples": [
                    "Նա նստում է իր սեղանի մոտ օրական ութ ժամ:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "նստեց",
        "v3": "նստել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "կանգնել",
        "level": "starter",
        "theme": "work",
        "emoji": "🧍",
        "subtext": "դռան մոտ կանգնել / հերթում կանգնել",
        "opposite": "նստել",
        "oppositeEmoji": "🪑",
        "form": "verb",
        "definitions": [
            {
                "text": "Լինել ուղղահայաց դիրքում:",
                "examples": [
                    "Նա կանգնում է, երբ ելույթ է ունենում:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "կանգնեց",
        "v3": "կանգնել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "հանդիպել",
        "level": "starter",
        "theme": "work",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Միասին հավաքվել ինչ-որ մեկի հետ:",
                "examples": [
                    "Մենք հանդիպում ենք ամեն երկուշաբթի:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "հանդիպեց",
        "v3": "հանդիպել",
        "subtext": "նոր մարդկանց հանդիպել / օդանավակայանում հանդիպել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "սովորել",
        "level": "starter",
        "theme": "school",
        "emoji": "📚",
        "subtext": "լեզու սովորել / նոր հմտություն սովորել",
        "form": "verb",
        "definitions": [
            {
                "text": "Գիտելիք կամ հմտություն ձեռք բերել:",
                "examples": [
                    "Նա սովորում է իսպաներեն իր նոր աշխատանքի համար:"
                ]
            }
        ],
        "classification": "both",
        "aspect": "action",
        "v2": "սովորեց",
        "v3": "սովորել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "փոխել",
        "level": "starter",
        "theme": "work",
        "emoji": "🔄",
        "subtext": "աշխատանքը փոխել / փողը փոխել",
        "form": "verb",
        "definitions": [
            {
                "text": "Դարձնել այլ կերպ:",
                "examples": [
                    "Նա փոխել է աշխատանքը երկու անգամ երեք տարում:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "փոխեց",
        "v3": "փոխել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "կանգնեցնել",
        "level": "starter",
        "theme": "work",
        "emoji": "🛑",
        "subtext": "ավտոբուսը կանգնեցնել",
        "synonyms": [
            "աշխատանքը դադարեցնել"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Դադարեցնել գործողությունը:",
                "examples": [
                    "Նա դադարեցրեց ավտոբուսով գնալը:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stopped",
        "v3": "կանգնեցրել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "ավելացնել",
        "level": "starter",
        "theme": "numbers",
        "emoji": "➕",
        "subtext": "շաքարավազ ավելացնել / անունը ավելացնել",
        "form": "verb",
        "definitions": [
            {
                "text": "Իրերը միասին դնել ավելի մեծ խումբ ստեղծելու համար:",
                "examples": [
                    "Մի քիչ շաքարավազ ավելացրեք թեյի մեջ:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ավելացրեց",
        "v3": "ավելացրել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "հաղթել",
        "level": "starter",
        "theme": "social",
        "emoji": "🏆",
        "subtext": "խաղը հաղթել / մրցանակ հաղթել",
        "opposite": "կորցնել",
        "oppositeEmoji": "📉",
        "form": "verb",
        "definitions": [
            {
                "text": "Լինել լավագույնը խաղում կամ մրցույթում:",
                "examples": [
                    "Մենք ուզում ենք հաղթել խաղը:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "հաղթեց",
        "v3": "հաղթել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "սպասել",
        "level": "starter",
        "theme": "work",
        "emoji": "⏳",
        "subtext": "ավտոբուսին սպասել / ընկերոջը սպասել",
        "form": "verb",
        "definitions": [
            {
                "text": "Մնալ մի տեղում, մինչև ինչ-որ բան տեղի ունենա:",
                "examples": [
                    "Նա քսան րոպե սպասեց հանդիպման սկսվելուն:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "սպասեց",
        "v3": "սպասել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "մահանալ",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "⚰️",
        "subtext": "երիտասարդ մահանալ / ծարավից մահանալ",
        "opposite": "ապրել",
        "oppositeEmoji": "🏠",
        "form": "verb",
        "definitions": [
            {
                "text": "Դադարել ապրել:",
                "examples": [
                    "Բույսերը մահանում են առանց ջրի:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "մահացավ",
        "v3": "մահացել",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "ուղարկել",
        "level": "starter",
        "theme": "work",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Ինչ-որ բան փոխանցել մեկին, հատկապես էլեկտրոնային եղանակով:",
                "examples": [
                    "Նա քսան նամակ է ուղարկում մինչև ճաշը:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ուղարկեց",
        "v3": "ուղարկել",
        "subtext": "նամակ ուղարկել / փաթեթ ուղարկել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "մնալ",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏨",
        "subtext": "տանը մնալ / հյուրանոցում մնալ",
        "form": "verb",
        "definitions": [
            {
                "text": "Շարունակել լինել մի տեղում:",
                "examples": [
                    "Ես մնում եմ տանը կիրակի օրերին:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "մնաց",
        "v3": "մնացել",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "ընկնել",
        "level": "starter",
        "theme": "nature",
        "emoji": "🍂",
        "subtext": "ցած ընկնել / ձյուն ընկնել",
        "form": "verb",
        "definitions": [
            {
                "text": "Շարժվել դեպի ցած՝ գետնին:",
                "examples": [
                    "Տերևները ընկնում են աշնանը:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ընկավ",
        "v3": "ընկել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "անցնել",
        "level": "starter",
        "theme": "school",
        "emoji": "🏔️",
        "subtext": "քննությունը անցնել / փողոցը անցնել",
        "form": "verb",
        "definitions": [
            {
                "text": "Անցնել ինչ-որ բանի կողքով կամ հաջողել քննության ժամանակ:",
                "examples": [
                    "Ես անցնում եմ այգու կողքով տուն գնալիս:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "անցավ",
        "v3": "անցել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "վաճառել",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "subtext": "մեքենան վաճառել / տունը վաճառել",
        "opposite": "գնել",
        "oppositeEmoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "Ինչ-որ բան տալ մեկին փողի դիմաց:",
                "examples": [
                    "Նրանք միրգ են վաճառում շուկայում:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "վաճառեց",
        "v3": "վաճառել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "քաշել",
        "level": "starter",
        "theme": "work",
        "emoji": "🚜",
        "subtext": "դուռը քաշել / պարանը քաշել",
        "opposite": "հրել",
        "oppositeEmoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "Ինչ-որ բան շարժել դեպի քեզ:",
                "examples": [
                    "Քաշեք դուռը այն բացելու համար:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "քաշեց",
        "v3": "քաշել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "հրել",
        "level": "starter",
        "theme": "work",
        "emoji": "🛒",
        "subtext": "դուռը հրել",
        "synonyms": [
            "կոճակը սեղմել"
        ],
        "opposite": "քաշել",
        "oppositeEmoji": "🚜",
        "form": "verb",
        "definitions": [
            {
                "text": "Ինչ-որ բան շարժել քեզնից հեռու:",
                "examples": [
                    "Սեղմեք կոճակը:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "հրեց",
        "v3": "հրել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "տանել",
        "level": "starter",
        "theme": "work",
        "emoji": "🎒",
        "subtext": "պայուսակը տանել / ծանրություն տանել",
        "form": "verb",
        "definitions": [
            {
                "text": "Բռնել և վերցնել ինչ-որ բան քեզ հետ:",
                "examples": [
                    "Ես տանում եմ իմ լեպտոպը ամեն հանդիպման:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "carried",
        "v3": "տարել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "կոտրել",
        "level": "starter",
        "theme": "describing",
        "emoji": "💔",
        "subtext": "բաժակը կոտրել / կանոնը կոտրել",
        "form": "verb",
        "definitions": [
            {
                "text": "Ինչ-որ բան բաժանել երկու կամ ավելի մասերի:",
                "examples": [
                    "Մի կոտրեք բաժակը:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "կոտրեց",
        "v3": "կոտրել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "ստանալ",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📩",
        "subtext": "նվեր ստանալ / նամակ ստանալ",
        "form": "verb",
        "definitions": [
            {
                "text": "Ստանալ այն, ինչ ինչ-որ մեկը տվել կամ ուղարկել է ձեզ:",
                "examples": [
                    "Ես շատ փոստ եմ ստանում:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ստացավ",
        "v3": "ստացել",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "համաձայնել",
        "level": "starter",
        "theme": "social",
        "emoji": "👍",
        "subtext": "պայմանների հետ համաձայնել / ընկերոջ հետ համաձայնել",
        "form": "verb",
        "definitions": [
            {
                "text": "Նույն կարծիքն ունենալ, ինչ որևէ մեկը:",
                "examples": [
                    "Ես համաձայն եմ ձեզ հետ:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "համաձայնեց",
        "v3": "համաձայնել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "նկարել",
        "level": "starter",
        "theme": "cinema_film_A1",
        "emoji": "🎨",
        "subtext": "նկար նկարել",
        "synonyms": [
            "գիծ քաշել"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Նկար պատրաստել գրիչով կամ մատիտով:",
                "examples": [
                    "Ես սիրում եմ թռչուններ նկարել:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "նկարեց",
        "v3": "նկարել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "կիսվել",
        "level": "starter",
        "theme": "social",
        "emoji": "🍕",
        "subtext": "",
        "synonyms": [
            "ուտելիքը կիսել",
            "գաղափարը կիսել"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ինչ-որ բանի մի մասը տալ ուրիշներին:",
                "examples": [
                    "Եկեք կիսվենք պիցցայով:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "կիսվեց",
        "v3": "կիսվել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "ժպտալ",
        "level": "starter",
        "theme": "people",
        "emoji": "😊",
        "subtext": "երջանիկ ժպտալ / երեխային ժպտալ",
        "opposite": "լաց լինել",
        "oppositeEmoji": "😢",
        "form": "verb",
        "definitions": [
            {
                "text": "Երջանիկ արտահայտություն ունենալ բերանով:",
                "examples": [
                    "Նա գեղեցիկ ժպիտ ունի:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ժպտաց",
        "v3": "ժպտացել",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "լաց լինել",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😢",
        "subtext": "տխրությունից լաց լինել / բարձր լաց լինել",
        "opposite": "ժպտալ",
        "oppositeEmoji": "😊",
        "form": "verb",
        "definitions": [
            {
                "text": "Արցունքներ թափել տխրության կամ ցավի պատճառով:",
                "examples": [
                    "Երեխան լաց է լինում:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "լաց եղավ",
        "v3": "լաց եղել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "պարել",
        "level": "starter",
        "theme": "music",
        "emoji": "💃",
        "subtext": "ակումբում պարել / գեղեցիկ պարել",
        "form": "verb",
        "definitions": [
            {
                "text": "Մարմինը շարժել երաժշտության տակ:",
                "examples": [
                    "Ես սիրում եմ պարել:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "պարեց",
        "v3": "պարել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "երգել",
        "level": "starter",
        "theme": "music",
        "emoji": "🎤",
        "subtext": "երգ երգել / բեմում երգել",
        "form": "verb",
        "definitions": [
            {
                "text": "Երաժշտական հնչյուններ հանել ձայնով:",
                "examples": [
                    "Ես սիրում եմ երգել լոգարանում:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "երգեց",
        "v3": "երգել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "ցատկել",
        "level": "starter",
        "theme": "sports",
        "emoji": "🦘",
        "subtext": "բարձր ցատկել / ջուրը ցատկել",
        "form": "verb",
        "definitions": [
            {
                "text": "Ինքն իրեն գետնից վեր մղել ոտքերով:",
                "examples": [
                    "Կարո՞ղ եք բարձր ցատկել:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ցատկեց",
        "v3": "ցատկել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "լողալ",
        "level": "starter",
        "theme": "sports",
        "emoji": "🏊",
        "subtext": "լողավազանում լողալ / ծովում լողալ",
        "form": "verb",
        "definitions": [
            {
                "text": "Շարժվել ջրի միջով՝ օգտագործելով ձեռքերն ու ոտքերը:",
                "examples": [
                    "Ես լողում եմ ամեն առավոտ:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "լողաց",
        "v3": "լողացել",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "ուսումնասիրել",
        "level": "starter",
        "theme": "school",
        "emoji": "📖",
        "subtext": "",
        "synonyms": [
            "համալսարանում սովորել",
            "քննության համար սովորել"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Կարդալ և մարզվել գիտելիք ձեռք բերելու համար:",
                "examples": [
                    "Նա սովորում է մասնագիտական որակավորման համար:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ուսումնասիրեց",
        "v3": "ուսումնասիրել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "դասավանդել",
        "level": "starter",
        "theme": "school",
        "emoji": "👨‍🏫",
        "subtext": "երեխաներին դասավանդել / լեզու դասավանդել",
        "form": "verb",
        "definitions": [
            {
                "text": "Հրահանգներ տալ որևէ առարկայից:",
                "examples": [
                    "Նա դասավանդում է հաղորդակցման հմտություններ:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "դասավանդեց",
        "v3": "դասավանդել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "երթևեկել",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🚆",
        "subtext": "գնացքով երթևեկել / ամեն օր երթևեկել",
        "form": "verb",
        "definitions": [
            {
                "text": "Կանոնավոր կերպով ճանապարհորդել տան և աշխատավայրի միջև:",
                "examples": [
                    "Ես երթևեկում եմ քաղաք գնացքով:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "երթևեկեց",
        "v3": "երթևեկել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "վարձել",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏠",
        "subtext": "բնակարան վարձել / մեքենա վարձել",
        "form": "verb",
        "definitions": [
            {
                "text": "Գումար վճարել ուրիշին պատկանող գույքից օգտվելու համար:",
                "examples": [
                    "Նրանք վարձում են երկու սենյականոց բնակարան:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "վարձեց",
        "v3": "վարձել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "մարզվել",
        "level": "starter",
        "theme": "social",
        "emoji": "🏋️",
        "form": "verb",
        "definitions": [
            {
                "text": "Ֆիզիկական գործունեություն իրականացնել առողջության համար:",
                "examples": [
                    "Նա մարզվում է շաբաթական չորս անգամ մարզասրահում:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "մարզվեց",
        "v3": "մարզվել",
        "subtext": "ամեն օր մարզվել / մարզասրահում մարզվել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "արժենալ",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "Ունենալ գին:",
                "examples": [
                    "Բնակարանը ամսական հազար երկու հարյուր եվրո արժե:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "արժեցավ",
        "v3": "արժեցել",
        "subtext": "շատ արժենալ / քիչ արժենալ",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "հրավիրել",
        "level": "starter",
        "theme": "social",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Ինչ-որ մեկին խնդրել գալ միջոցառման կամ տեղ:",
                "examples": [
                    "Նրանք հրավիրել են իրենց բոլոր գործընկերներին խնջույքին:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "հրավիրեց",
        "v3": "հրավիրել",
        "subtext": "հյուրեր հրավիրել / խնջույքին հրավիրել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "վեր կենալ",
        "definitions": [
            {
                "text": "Անկողնուց բարձրանալ արթնանալուց հետո:",
                "examples": [
                    "Նա վեր է կենում յոթին և անմիջապես սուրճ պատրաստում:"
                ]
            }
        ],
        "subtext": "ուշ վեր կենալ / անկողնուց վեր կենալ",
        "classification": "irregular",
        "aspect": "action",
        "v2": "վեր կացավ",
        "v3": "վեր կացել",
        "theme": "work",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "նախաճաշել",
        "definitions": [
            {
                "text": "Ուտել առավոտյան սնունդը:",
                "examples": [
                    "Նա միշտ նախաճաշում է տնից դուրս գալուց առաջ:"
                ]
            }
        ],
        "subtext": "ընտանիքի հետ նախաճաշել / շուտ նախաճաշել",
        "classification": "irregular",
        "aspect": "action",
        "v2": "նախաճաշեց",
        "v3": "նախաճաշել",
        "theme": "work",
        "emoji": "🍳",
        "level": "starter",
        "form": "verb",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "վերադառնալ",
        "definitions": [
            {
                "text": "Վերադառնալ մի տեղ:",
                "examples": [
                    "Նա վերադառնում է ճաշից երկուսին:"
                ]
            }
        ],
        "subtext": "աշխատանքից վերադառնալ / ուշ վերադառնալ",
        "classification": "irregular",
        "aspect": "action",
        "v2": "վերադարձավ",
        "v3": "վերադարձել",
        "theme": "work",
        "emoji": "🔙",
        "level": "starter",
        "form": "verb",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "անկողին գնալ",
        "definitions": [
            {
                "text": "Մտնել անկողին քնելու համար:",
                "examples": [
                    "Նրանք անկողին են գնում ամեն գիշեր տասնմեկին:"
                ]
            }
        ],
        "subtext": "կանուխ անկողին գնալ / հոգնած անկողին գնալ",
        "classification": "irregular",
        "aspect": "action",
        "v2": null,
        "v3": "անկողին գնացել",
        "theme": "work",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "ստուգել",
        "definitions": [
            {
                "text": "Ուսումնասիրել կամ ստուգել ինչ-որ բան:",
                "examples": [
                    "Ես ստուգում եմ իմ էլփոստը ամեն առավոտ:"
                ]
            }
        ],
        "subtext": "էլփոստը ստուգել / հաշիվը ստուգել",
        "classification": "regular",
        "aspect": "action",
        "v2": "ստուգեց",
        "v3": "ստուգել",
        "theme": "work",
        "emoji": "✅",
        "level": "starter",
        "form": "verb",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "պատասխանել",
        "definitions": [
            {
                "text": "Պատասխանել հաղորդագրությանը կամ հարցին:",
                "examples": [
                    "Նա միշտ պատասխանում է նամակներին նույն օրը:"
                ]
            }
        ],
        "subtext": "հաղորդագրությանը պատասխանել / արագ պատասխանել",
        "classification": "regular",
        "aspect": "action",
        "v2": "պատասխανեց",
        "v3": "պատասխանել",
        "theme": "work",
        "emoji": "↩️",
        "level": "starter",
        "form": "verb",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "ներկայացնել",
        "definitions": [
            {
                "text": "Ինչ-որ բան ցույց տալ կամ բացատրել խմբին:",
                "examples": [
                    "Նա ներկայացնում է արդյունքները ամեն ուրբաթ:"
                ]
            }
        ],
        "subtext": "արդյունքները ներկայացնել / նախագիծը ներկայացնել",
        "classification": "regular",
        "aspect": "action",
        "v2": "ներկայացրեց",
        "v3": "ներկայացրել",
        "theme": "work",
        "emoji": "📊",
        "level": "starter",
        "form": "verb",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "մասնակցել",
        "definitions": [
            {
                "text": "Գնալ միջոցառման կամ հանդիպման:",
                "examples": [
                    "Ես մասնակցում եմ կառավարման հանդիպմանը ամեն երկուշաբթի:"
                ]
            }
        ],
        "subtext": "հանդիպմանը մասնակցել / դասին մասնակցել",
        "classification": "regular",
        "aspect": "action",
        "v2": "մասնակցեց",
        "v3": "մասնակցել",
        "theme": "work",
        "emoji": "📅",
        "level": "starter",
        "form": "verb",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "ղեկավարել",
        "definitions": [
            {
                "text": "Պատասխանատու լինել մարդկանց կամ իրավիճակի համար:",
                "examples": [
                    "Նա ղեկավարում է ութ հոգանոց թիմ:"
                ]
            }
        ],
        "subtext": "թիմը ղեկավարել / ժամանակը ղեկավարել",
        "classification": "regular",
        "aspect": "action",
        "v2": "ղեկավարեց",
        "v3": "ղեկավարել",
        "theme": "work",
        "emoji": "👤",
        "level": "starter",
        "form": "verb",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "գանձել",
        "definitions": [
            {
                "text": "Գումար խնդրել ծառայության դիմաց:",
                "examples": [
                    "Մեխանիկը երեք հարյուր եվրո գանձեց:"
                ]
            }
        ],
        "subtext": "փող գանձել / հաշվին գանձել",
        "classification": "regular",
        "aspect": "action",
        "v2": "գանձեց",
        "v3": "գանձել",
        "theme": "shopping",
        "emoji": "💳",
        "level": "starter",
        "form": "verb",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "թույլ տալ",
        "definitions": [
            {
                "text": "Բավարար գումար ունենալ ինչ-որ բանի համար:",
                "examples": [
                    "Նրանք չեն կարող իրենց թույլ տալ բնակարան գնել կենտրոնում:"
                ]
            }
        ],
        "subtext": "տունը թույլ տալ / մեքենան թույլ տալ",
        "classification": "regular",
        "aspect": "stative",
        "v2": "թույլ տվեց",
        "v3": "թույլ տվել",
        "theme": "shopping",
        "emoji": "🏦",
        "level": "starter",
        "form": "verb",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "պարտք լինել",
        "definitions": [
            {
                "text": "Պահանջվել գումար վճարել ինչ-որ մեկին:",
                "examples": [
                    "Նա բանկին հիսուն հազար եվրո պարտք է:"
                ]
            }
        ],
        "subtext": "բանկին պարտք լինել / ընկերոջը պարտք լինել",
        "classification": "regular",
        "aspect": "stative",
        "v2": "պարտք էր",
        "v3": "պարտք եղել",
        "theme": "shopping",
        "emoji": "💸",
        "level": "starter",
        "form": "verb",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "վաստակել",
        "definitions": [
            {
                "text": "Գումար ստանալ կատարված աշխատանքի դիմաց:",
                "examples": [
                    "Նա լավ աշխատավարձ է վաստակում որպես նախագծի մենեջեր:"
                ]
            }
        ],
        "subtext": "գումար վաստակել / հարգանք վաստակել",
        "classification": "regular",
        "aspect": "action",
        "v2": "վաստակեց",
        "v3": "վաստակել",
        "theme": "shopping",
        "emoji": "💶",
        "level": "starter",
        "form": "verb",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "այցելել",
        "definitions": [
            {
                "text": "Գնալ տեսնելու մարդուն կամ տեղը:",
                "examples": [
                    "Նա այցելում է իր ծնողներին ամեն երկրորդ հանգստյան օրերին:"
                ]
            }
        ],
        "subtext": "թանգարան այցելել / տատիկին այցելել",
        "classification": "regular",
        "aspect": "action",
        "v2": "այցելեց",
        "v3": "այցելել",
        "theme": "social",
        "emoji": "🏘️",
        "level": "starter",
        "form": "verb",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "տոնել",
        "definitions": [
            {
                "text": "Ինչ-որ հաճելի բան անել հատուկ առիթով:",
                "examples": [
                    "Նրանք միասին տոնում են աշխատանքային ամեն ամյակը:"
                ]
            }
        ],
        "subtext": "ծննդյան օրը տոնել / հաղթանակը տոնել",
        "classification": "regular",
        "aspect": "action",
        "v2": "տոնեց",
        "v3": "տոնել",
        "theme": "social",
        "emoji": "🎉",
        "level": "starter",
        "form": "verb",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "խորհուրդ տալ",
        "definitions": [
            {
                "text": "Ինչ-որ բան առաջարկել որպես լավ կամ հարմար:",
                "examples": [
                    "Կարո՞ղ եք խորհուրդ տալ լավ ռեստորան գրասենյակի մոտ:"
                ]
            }
        ],
        "subtext": "գիրք խորհուրդ տալ / ռեստորան խորհուրդ տալ",
        "classification": "regular",
        "aspect": "action",
        "v2": "խորհուրդ տվեց",
        "v3": "խորհուրդ տվել",
        "theme": "social",
        "emoji": "👍",
        "level": "starter",
        "form": "verb",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "ցավեցնել",
        "definitions": [
            {
                "text": "Ցավ պատճառել կամ ցավ զգալ:",
                "examples": [
                    "Իմ մեջքը ցավում է ամբողջ օրը նստելուց հետո:"
                ]
            }
        ],
        "subtext": "ոտքը ցավեցնել",
        "synonyms": [
            "մեջքը ցավել"
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "ցավեցրեց",
        "v3": "ցավեցրել",
        "theme": "health_medicine",
        "emoji": "🤕",
        "level": "starter",
        "form": "verb",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "հանգստանալ",
        "definitions": [
            {
                "text": "Դադարեցնել աշխատանքը և թուլանալ էներգիան վերականգնելու համար:",
                "examples": [
                    "Նա ամեն օր ճաշից հետո մեկ ժամ հանգստանում է:"
                ]
            }
        ],
        "subtext": "լողափին հանգստանալ / աշխատանքից հետո հանգստանալ",
        "classification": "regular",
        "aspect": "action",
        "v2": "հանգստացավ",
        "v3": "հանգստացել",
        "theme": "work",
        "emoji": "🛋️",
        "level": "starter",
        "form": "verb",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "ապաքինվել",
        "definitions": [
            {
                "text": "Վերադառնալ լավ առողջությանը հիվանդությունից հետո:",
                "examples": [
                    "Նա ապաքինվում է մեջքի վնասվածքից:"
                ]
            }
        ],
        "subtext": "հիվանդությունից ապաքինվել / վնասվածքից ապաքինվել",
        "classification": "regular",
        "aspect": "action",
        "v2": "ապաքինվեց",
        "v3": "ապաքինվել",
        "theme": "health_medicine",
        "emoji": "🩹",
        "level": "starter",
        "form": "verb",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "ամրագրել",
        "definitions": [
            {
                "text": "Նախապես տեղ, տոմս կամ ծառայություն պահել:",
                "examples": [
                    "Ես միշտ հյուրանոցներն ամրագրում եմ առցանց:"
                ]
            }
        ],
        "subtext": "տոմս ամրագրել / սեղան ամրագրել",
        "classification": "regular",
        "aspect": "action",
        "v2": "ամրագրեց",
        "v3": "ամրագրել",
        "theme": "travel",
        "emoji": "📖",
        "level": "starter",
        "form": "verb",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "հավաքել",
        "definitions": [
            {
                "text": "Իրերը դնել պայուսակի կամ ճամպրուկի մեջ ճանապարհորդության համար:",
                "examples": [
                    "Նա հավաքում է իր պայուսակը ուղևորության նախորդ գիշերը:"
                ]
            }
        ],
        "subtext": "ճամպրուկը հավաքել / իրերը հավաքել",
        "classification": "regular",
        "aspect": "action",
        "v2": "packed",
        "v3": "հավաքել",
        "theme": "travel",
        "emoji": "🎒",
        "level": "starter",
        "form": "verb",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "չեղարկել",
        "definitions": [
            {
                "text": "Որոշել, որ ծրագրված ինչ-որ բան տեղի չի ունենա:",
                "examples": [
                    "Նա ստիպված էր չեղարկել իր թռիչքը հիվանդության պատճառով:"
                ]
            }
        ],
        "subtext": "թռիչքը չեղարկել / հանդիպումը չեղարկել",
        "classification": "regular",
        "aspect": "action",
        "v2": "չեղարկեց",
        "v3": "չեղարկել",
        "theme": "travel",
        "emoji": "❌",
        "level": "starter",
        "form": "verb",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "բաց թողնել",
        "definitions": [
            {
                "text": "Չհասնել տրանսպորտային միջոցին կամ տխրել բացակայության պատճառով:",
                "examples": [
                    "Նա բաց թողեց իր գնացքը և ստիպված էր սպասել մեկ ժամ:"
                ]
            }
        ],
        "subtext": "գնացքը բաց թողնել / հնարավորությունը բաց թողնել",
        "classification": "regular",
        "aspect": "both",
        "v2": "բաց թողեց",
        "v3": "բաց թողել",
        "theme": "public_transport_A1",
        "emoji": "🏃‍♂️",
        "level": "starter",
        "form": "verb",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "պատվիրել",
        "level": "starter",
        "theme": "work",
        "emoji": "📦",
        "subtext": "ճաշ պատվիրել / առցանց պատվիրել",
        "form": "verb",
        "definitions": [
            {
                "text": "Ինչ-որ բան պաշտոնապես խնդրել, հատկապես սնունդ կամ ապրանքներ:",
                "examples": [
                    "Ես միշտ ճաշ եմ պատվիրում գրասենյակի մոտ գտնվող նույն տեղից:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "պատվիրեց",
        "v3": "պատվիրել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "բացատրել",
        "level": "starter",
        "theme": "work",
        "emoji": "💡",
        "subtext": "իրավիճակը բացատրել / խնդիրը բացատրել",
        "form": "verb",
        "definitions": [
            {
                "text": "Ինչ-որ բան հստակեցնել՝ մանրամասներ տալով:",
                "examples": [
                    "Նա միշտ բացատրում է գործընթացը թիմի նոր անդամներին:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "բացատրեց",
        "v3": "բացատրել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "շնորհակալություն հայտնել",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🙏",
        "subtext": "օգնության համար շնորհակալություն հայտնել",
        "form": "verb",
        "definitions": [
            {
                "text": "Երախտագիտություն հայտնել ինչ-որ մեկին:",
                "examples": [
                    "Նա շնորհակալություն հայտնեց թիմին իրենց քրտնաջան աշխատանքի համար:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "շնորհակալություն հայտնեց",
        "v3": "շնորհակալություն հայտնել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "ներկայացնել",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "🤝",
        "subtext": "ընկերոջը ներկայացնել / նոր գործընկերոջը ներկայացնել",
        "form": "verb",
        "definitions": [
            {
                "text": "Ինչ-որ մեկին ներկայացնել մեկ այլ անձի:",
                "examples": [
                    "Նա ներկայացավ հանդիպման սկզբում:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ներկայացրեց",
        "v3": "ներկայացրել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "թուլանալ",
        "level": "starter",
        "theme": "social",
        "emoji": "🧘",
        "subtext": "երաժշտության տակ թուլանալ / տանը թուլանալ",
        "form": "verb",
        "definitions": [
            {
                "text": "Դադարեցնել աշխատանքը և հանգստանալ:",
                "examples": [
                    "Ես թուլանում եմ հանգստյան օրերին և երբեք չեմ ստուգում նամակները:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "թուլացավ",
        "v3": "թուլացել",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "նորոգել",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🛠️",
        "subtext": "հեռախոսը նորոգել / մեքենան նորոգել",
        "form": "verb",
        "definitions": [
            {
                "text": "Ամրացնել այն, ինչ կոտրված է:",
                "examples": [
                    "Տանտերը դանդաղ է նորոգում բնակարանի իրերը:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "repaired",
        "v3": "նորոգել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "պատահել",
        "level": "starter",
        "theme": "social",
        "emoji": "❔",
        "subtext": "պատահաբար պատահել",
        "synonyms": [
            "ինչ պատահեց"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Տեղի ունենալ:",
                "examples": [
                    "Ի՞նչ պատահեց հանդիպման ժամանակ:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "պատահեց",
        "v3": "պատահել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "թվալ",
        "level": "starter",
        "theme": "social",
        "emoji": "🎭",
        "subtext": "երջանիկ թվալ / հոգնած թվալ",
        "form": "verb",
        "definitions": [
            {
                "text": "Երևալ որպես ինչ-որ բան, տպավորություն թողնել:",
                "examples": [
                    "Նա շատ վստահ է թվում հաճախորդների հետ հանդիպումների ժամանակ:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "թվաց",
        "v3": "թվացել",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "նշանակել",
        "level": "starter",
        "theme": "school",
        "emoji": "❔",
        "subtext": "",
        "synonyms": [
            "ի՞նչ է նշանակում",
            "սա նշանակում է"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ունենալ որոշակի նշանակություն:",
                "examples": [
                    "Ի՞նչ է նշանակում պայմանագրի այս կետը:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "նշանակեց",
        "v3": "նշանակել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "հետևել",
        "level": "starter",
        "theme": "work",
        "emoji": "👣",
        "subtext": "կանոններին հետևել / հրահանգներին հետևել",
        "form": "verb",
        "definitions": [
            {
                "text": "Հետևել կանոններին կամ հրահանգներին:",
                "examples": [
                    "Խնդրում ենք ուշադիր հետևել հրահանգներին:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "հետևեց",
        "v3": "հետևել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "շարունակել",
        "level": "starter",
        "theme": "school",
        "emoji": "⏩",
        "subtext": "աշխատանքը շարունակել / ուղին շարունակել",
        "form": "verb",
        "definitions": [
            {
                "text": "Շարունակել ինչ-որ բան անել առանց կանգ առնելու:",
                "examples": [
                    "Նա շարունակեց աշխատել վեցից հետո, չնայած իրեն վատ էր զգում:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "շարունակեց",
        "v3": "շարունակել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "աճել",
        "level": "starter",
        "theme": "work",
        "emoji": "📈",
        "subtext": "արագ աճել / բիզնեսը աճել",
        "form": "verb",
        "definitions": [
            {
                "text": "Մեծանալ չափերով կամ քանակով, զարգանալ:",
                "examples": [
                    "Ընկերությունը անցյալ տարի աճել է քսան տոկոսով:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "աճեց",
        "v3": "աճել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "ներառել",
        "level": "starter",
        "theme": "shopping",
        "emoji": "➕",
        "subtext": "նախաճաշը ներառել / ցուցակում ներառել",
        "form": "verb",
        "definitions": [
            {
                "text": "Ինչ-որ բան դարձնել ամբողջի մի մասը:",
                "examples": [
                    "Գինը ներառում է նախաճաշը և ընթրիքը:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "ներառեց",
        "v3": "ներառել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "դառնալ",
        "level": "starter",
        "theme": "work",
        "emoji": "✨",
        "subtext": "բժիշկ դառնալ / հայտնի դառնալ",
        "form": "verb",
        "definitions": [
            {
                "text": "Սկսել լինել ինչ-որ բան:",
                "examples": [
                    "Նա դարձավ մենեջեր ընդամենը երկու տարի հետո:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "դարձավ",
        "v3": "դարձել",
        "group": "al",
        "auxiliary": "եմ"
    },
    {
        "word": "պատկանել",
        "level": "starter",
        "theme": "work",
        "emoji": "📎",
        "subtext": "ընտանիքին պատկանել / այստեղ պատկանել",
        "form": "verb",
        "definitions": [
            {
                "text": "Լինել ինչ-որ մեկի սեփականությունը, լինել անդամ:",
                "examples": [
                    "Այդ հաշիվը պատկանում է ֆինանսական բաժնին:"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "պատկանեց",
        "v3": "պատկանել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "ընտրել",
        "level": "starter",
        "theme": "social",
        "emoji": "👉",
        "subtext": "ճիշտը ընտրել / գույնը ընտրել",
        "form": "verb",
        "definitions": [
            {
                "text": "Ընտրություն կատարել տարբերակներից:",
                "examples": [
                    "Նա ընտրեց աշխատել կես դրույքով:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ընտրեց",
        "v3": "ընտրել",
        "group": "el",
        "auxiliary": "եմ"
    },
    {
        "word": "կառուցել",
        "level": "starter",
        "theme": "work",
        "emoji": "🏗️",
        "subtext": "տուն կառուցել / ապագա կառուցել",
        "form": "verb",
        "definitions": [
            {
                "text": "Ինչ-որ բան կառուցել, զարգացնել ժամանակի ընթացքում:",
                "examples": [
                    "Նա ամուր հեղինակություն կառուցեց տասը տարվա ընթացքում:"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "կառուցեց",
        "v3": "կառուցել",
        "group": "el",
        "auxiliary": "եմ"
    }
];
    const lang = "hy";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = (window.vocabularyData[lang] || []).concat(data);
})();