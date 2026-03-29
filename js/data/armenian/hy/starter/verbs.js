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
        "v2": null,
        "v3": "եղել",
        "group": "irregular"
    },
    {
        "word": "ունենալ",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "v2": "had",
        "v3": "ունեցել",
        "group": "irregular"
    },
    {
        "word": "զգալ",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
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
        "v2": "felt",
        "v3": "զգացել",
        "group": "irregular"
    },
    {
        "word": "տալ",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "subtext": "աշխատանք տալ / փող տալ / խորհուրդ տալ",
        "opposite": "take",
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
        "v2": "gave",
        "v3": "տվել",
        "group": "irregular"
    },
    {
        "word": "վերցնել",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "👜",
        "subtext": "ավտոբուս նստել / տաքսի նստել / դաս վերցնել",
        "opposite": "give",
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
        "v2": "took",
        "v3": "վերցրել",
        "group": "irregular"
    },
    {
        "word": "ստանալ",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "v2": "got",
        "v3": "ստացել",
        "group": "irregular"
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
        "v2": "put",
        "v3": "դրել",
        "group": "irregular"
    },
    {
        "word": "պատրաստել",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏗️",
        "subtext": "սուրճ պատրաստել / ճաշ պատրաստել / սխալ անել",
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
        "v2": "made",
        "v3": "պատրաստել",
        "group": "irregular"
    },
    {
        "word": "անել",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "v2": null,
        "v3": "արել",
        "group": "irregular"
    },
    {
        "word": "օգտագործել",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
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
        "v2": "used",
        "v3": "օգտագործել",
        "group": "el"
    },
    {
        "word": "բացել",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "subtext": "դուռը բացել / գրասենյակը բացել / պատուհանը բացել",
        "opposite": "close",
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
        "v2": "opened",
        "v3": "բացել",
        "group": "el"
    },
    {
        "word": "փակել",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "subtext": "դուռը փակել / գրասենյակը փակել / աչքերը փակել",
        "opposite": "open",
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
        "v2": "closed",
        "v3": "փակել",
        "group": "el"
    },
    {
        "word": "սկսել",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "subtext": "աշխատանքը սկսել / դասը սկսել / օրը սկսել",
        "opposite": "finish",
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
        "v2": "started",
        "v3": "սկսել",
        "group": "el"
    },
    {
        "word": "ավարտել",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "աշխատանքը ավարտել / նախագիծը ավարտել",
        "opposite": "start",
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
        "v2": "finished",
        "v3": "ավարտել",
        "group": "el"
    },
    {
        "word": "օգնել",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "v2": "helped",
        "v3": "օգնել",
        "group": "el"
    },
    {
        "word": "փորձել",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "v2": "tried",
        "v3": "փորձել",
        "group": "el"
    },
    {
        "word": "ցույց տալ",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "v2": "showed",
        "v3": "ցույց տվել",
        "group": "irregular"
    },
    {
        "word": "գտնել",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "v2": "found",
        "v3": "գտել",
        "group": "irregular"
    },
    {
        "word": "պահել",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "v2": "kept",
        "v3": "պահել",
        "group": "irregular"
    },
    {
        "word": "կորցնել",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📉",
        "subtext": "բանալիները կորցնել / ժամանակ կորցնել",
        "opposite": "win",
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
        "v2": "lost",
        "v3": "կորցրել",
        "group": "irregular"
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
        "v2": "cut",
        "v3": "կտրել",
        "group": "irregular"
    },
    {
        "word": "պտտել",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "🔄",
        "subtext": "ձախ թեքվել / աջ թեքվել",
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
        "group": "el"
    },
    {
        "word": "բերել",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
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
        "v2": "brought",
        "v3": "բերել",
        "group": "irregular"
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
        "v2": "said",
        "v3": "ասել",
        "group": "irregular"
    },
    {
        "word": "պատմել",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "v2": "told",
        "v3": "պատմել",
        "group": "irregular"
    },
    {
        "word": "հարցնել",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "❓",
        "subtext": "հարց հարցնել / օգնություն խնդրել",
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
        "v2": "asked",
        "v3": "հարցրել",
        "group": "el"
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
        "v2": "spoke",
        "v3": "խոսել",
        "group": "irregular"
    },
    {
        "word": "զրուցել",
        "level": "starter",
        "theme": "family_life_A1",
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
        "v2": "talked",
        "v3": "զրուցել",
        "group": "el"
    },
    {
        "word": "զանգել",
        "level": "starter",
        "theme": "using_a_smartphone_A1",
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
        "group": "el"
    },
    {
        "word": "գրել",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "subtext": "նամակ գրել / անունը գրել",
        "opposite": "read",
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
        "v2": "wrote",
        "v3": "գրել",
        "group": "irregular"
    },
    {
        "word": "կարդալ",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "գիրք կարդալ / լուրեր կարդալ",
        "opposite": "write",
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
        "v2": "read",
        "v3": "կարդացել",
        "group": "irregular"
    },
    {
        "word": "լսել",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎧",
        "subtext": "երաժշტություն լսել / ուսուցչին լսել",
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
        "v2": "listened",
        "v3": "լսել",
        "group": "el"
    },
    {
        "word": "պատասխանել",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "v2": "answered",
        "v3": "պատասխանել",
        "group": "el"
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
        "v2": "repeated",
        "v3": "կրկնել",
        "group": "el"
    },
    {
        "word": "գնալ",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
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
        "v2": null,
        "v3": "գնացել",
        "group": "irregular"
    },
    {
        "word": "գալ",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🏃‍♂️",
        "subtext": "տուն գալ / գրասենյակ գալ",
        "opposite": "go",
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
        "v2": "came",
        "v3": "եկել",
        "group": "irregular"
    },
    {
        "word": "քայլել",
        "level": "starter",
        "theme": "modes_of_transport_A1",
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
        "v2": "walked",
        "v3": "քայլել",
        "group": "el"
    },
    {
        "word": "վարել",
        "level": "starter",
        "theme": "modes_of_transport_A1",
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
        "v2": "drove",
        "v3": "վարել",
        "group": "irregular"
    },
    {
        "word": "թռչել",
        "level": "starter",
        "theme": "modes_of_transport_A1",
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
        "v2": "flew",
        "v3": "թռել",
        "group": "irregular"
    },
    {
        "word": "ժամանել",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "v2": "arrived",
        "v3": "ժամանել",
        "group": "el"
    },
    {
        "word": "հեռանալ",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚪",
        "subtext": "տանից դուրս գալ / գրասենյակից հեռանալ",
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
        "v2": "left",
        "v3": "հեռացել",
        "group": "irregular"
    },
    {
        "word": "տեղափոխվել",
        "level": "starter",
        "theme": "household_tasks_A1",
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
        "v2": "moved",
        "v3": "տեղափոխվել",
        "group": "el"
    },
    {
        "word": "վերադառնալ",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
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
        "v2": "returned",
        "v3": "վերադարձել",
        "group": "al"
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
        "v2": "traveled",
        "v3": "ճամփորդել",
        "group": "el"
    },
    {
        "word": "ուտել",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍎",
        "subtext": "ճաշ ուտել / խնձոր ուտել",
        "opposite": "drink",
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
        "v2": "ate",
        "v3": "կերել",
        "group": "irregular"
    },
    {
        "word": "խմել",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🥛",
        "subtext": "ջուր խմել / սուրճ խմել / թեյ խմել",
        "opposite": "eat",
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
        "v2": "drank",
        "v3": "խմել",
        "group": "irregular"
    },
    {
        "word": "քնել",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "😴",
        "subtext": "լավ քնել / ութ ժամ քնել",
        "opposite": "wake up",
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
        "v2": "slept",
        "v3": "քնել",
        "group": "irregular"
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
        "v2": "cooked",
        "v3": "եփել",
        "group": "el"
    },
    {
        "word": "մաքրել",
        "level": "starter",
        "theme": "household_tasks_A1",
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
        "v2": "cleaned",
        "v3": "մաքրել",
        "group": "el"
    },
    {
        "word": "հագնել",
        "level": "starter",
        "theme": "items_of_clothing_A1",
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
        "v2": "wore",
        "v3": "հագել",
        "group": "irregular"
    },
    {
        "word": "լվանալ",
        "level": "starter",
        "theme": "household_tasks_A1",
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
        "v2": null,
        "v3": "լվացել",
        "group": "al"
    },
    {
        "word": "գնել",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🛒",
        "subtext": "սնունդ գնել / նվեր գնել",
        "opposite": "sell",
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
        "v2": "bought",
        "v3": "գնել",
        "group": "irregular"
    },
    {
        "word": "վճարել",
        "level": "starter",
        "theme": "money_payment_A1",
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
        "v2": "paid",
        "v3": "վճարել",
        "group": "irregular"
    },
    {
        "word": "ծախսել",
        "level": "starter",
        "theme": "money_payment_A1",
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
        "v2": "spent",
        "v3": "ծախսել",
        "group": "irregular"
    },
    {
        "word": "խնայել",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "փող խնայել / էներգիա խնայել",
        "opposite": "spend",
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
        "v2": "saved",
        "v3": "խնայել",
        "group": "el"
    },
    {
        "word": "աշխատել",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "v2": "worked",
        "v3": "աշխատել",
        "group": "el"
    },
    {
        "word": "ապրել",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "🏠",
        "subtext": "Երևանում ապրել / բնակարանում ապրել",
        "opposite": "die",
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
        "v2": "lived",
        "v3": "ապրել",
        "group": "el"
    },
    {
        "word": "մտածել",
        "level": "starter",
        "theme": "giving_opinions_A1",
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
        "v2": "thought",
        "v3": "մտածել",
        "group": "irregular"
    },
    {
        "word": "իմանալ",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "group": "irregular"
    },
    {
        "word": "ուզել",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "group": "el"
    },
    {
        "word": "կարիք ունենալ",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        "v2": "needed",
        "v3": "կարիք ունեցել",
        "group": "al"
    },
    {
        "word": "հավանել",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "v2": "liked",
        "v3": "հավանել",
        "group": "el"
    },
    {
        "word": "սիրել",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "v2": "loved",
        "v3": "սիրել",
        "group": "el"
    },
    {
        "word": "ատել",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        "v2": "hated",
        "v3": "ատել",
        "group": "el"
    },
    {
        "word": "հուսալ",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🤞",
        "subtext": "լավագույնին հուսալ / տեսնել ձեզ շուտով",
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
        "v2": "hoped",
        "v3": "հուսացել",
        "group": "al"
    },
    {
        "word": "հիշել",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "v2": "remembered",
        "v3": "հիշել",
        "group": "el"
    },
    {
        "word": "մոռանալ",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "v2": "forgot",
        "v3": "մոռացել",
        "group": "irregular"
    },
    {
        "word": "հասկանալ",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "v2": "understood",
        "v3": "հասկացել",
        "group": "irregular"
    },
    {
        "word": "որոշել",
        "level": "starter",
        "theme": "giving_opinions_A1",
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
        "v2": "decided",
        "v3": "որոշել",
        "group": "el"
    },
    {
        "word": "վայելել",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "v2": "enjoyed",
        "v3": "վայելել",
        "group": "el"
    },
    {
        "word": "տեսնել",
        "level": "starter",
        "theme": "body_parts_A1",
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
        "v2": "saw",
        "v3": "տեսել",
        "group": "irregular"
    },
    {
        "word": "լսել",
        "level": "starter",
        "theme": "body_parts_A1",
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
        "v2": "heard",
        "v3": "լսել",
        "group": "irregular"
    },
    {
        "word": "արթնանալ",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "վաղ արթնանալ / ժամը յոթին արթնանալ",
        "opposite": "sleep",
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
        "v2": "woke up",
        "v3": "արթնացել",
        "group": "irregular"
    },
    {
        "word": "դիտել",
        "level": "starter",
        "theme": "leisure_activities_A1",
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
        "v2": "watched",
        "v3": "դիտել",
        "group": "el"
    },
    {
        "word": "նայել",
        "level": "starter",
        "theme": "physical_appearance_A1",
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
        "v2": "looked",
        "v3": "նայել",
        "group": "el"
    },
    {
        "word": "խաղալ",
        "level": "starter",
        "theme": "leisure_activities_A1",
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
        "v2": "played",
        "v3": "խաղացել",
        "group": "al"
    },
    {
        "word": "վազել",
        "level": "starter",
        "theme": "common_sports_A1",
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
        "v2": "ran",
        "v3": "վազել",
        "group": "irregular"
    },
    {
        "word": "նստել",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🪑",
        "subtext": "աթոռին նստել / սեղանի մոտ նստել",
        "opposite": "stand",
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
        "v2": "sat",
        "v3": "նստել",
        "group": "irregular"
    },
    {
        "word": "կանգնել",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🧍",
        "subtext": "դռան մոտ կանգնել / հերթում կանգնել",
        "opposite": "sit",
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
        "v2": "stood",
        "v3": "կանգնել",
        "group": "irregular"
    },
    {
        "word": "հանդիպել",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "v2": "met",
        "v3": "հանդիպել",
        "subtext": "նոր մարդկանց հանդիպել / օդանավակայանում հանդիպել",
        "group": "irregular"
    },
    {
        "word": "սովորել",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "v2": "learned / learnt",
        "v3": "սովորել",
        "group": "el"
    },
    {
        "word": "փոխել",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "v2": "changed",
        "v3": "փոխել",
        "group": "el"
    },
    {
        "word": "կանգնեցնել",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛑",
        "subtext": "ավտոբուսը կանգնեցնել / աշխատանքը դադարեցնել",
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
        "group": "el"
    },
    {
        "word": "ավելացնել",
        "level": "starter",
        "theme": "numbers_100_999_A1",
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
        "v2": "added",
        "v3": "ավելացրել",
        "group": "el"
    },
    {
        "word": "հաղթել",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "subtext": "խաղը հաղթել / մրցանակ հաղթել",
        "opposite": "lose",
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
        "v2": "won",
        "v3": "հաղթել",
        "group": "irregular"
    },
    {
        "word": "սպասել",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "v2": "waited",
        "v3": "սպասել",
        "group": "el"
    },
    {
        "word": "մահանալ",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "⚰️",
        "subtext": "երիտասարդ մահանալ / ծարավից մահանալ",
        "opposite": "live",
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
        "v2": "died",
        "v3": "մահացել",
        "group": "al"
    },
    {
        "word": "ուղարկել",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "v2": "sent",
        "v3": "ուղարկել",
        "subtext": "նամակ ուղարկել / փաթեթ ուղարկել",
        "group": "irregular"
    },
    {
        "word": "մնալ",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
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
        "v2": "stayed",
        "v3": "մնացել",
        "group": "al"
    },
    {
        "word": "ընկնել",
        "level": "starter",
        "theme": "seasons_climate_A1",
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
        "v2": "fell",
        "v3": "ընկել",
        "group": "irregular"
    },
    {
        "word": "անցնել",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "v2": "passed",
        "v3": "անցել",
        "group": "el"
    },
    {
        "word": "վաճառել",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "subtext": "մեքենան վաճառել / տունը վաճառել",
        "opposite": "buy",
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
        "v2": "sold",
        "v3": "վաճառել",
        "group": "irregular"
    },
    {
        "word": "քաշել",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚜",
        "subtext": "դուռը քաշել / պարանը քաշել",
        "opposite": "push",
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
        "v2": "pulled",
        "v3": "քաշել",
        "group": "el"
    },
    {
        "word": "հրել",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛒",
        "subtext": "դուռը հրել / կոճակը սեղմել",
        "opposite": "pull",
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
        "v2": "pushed",
        "v3": "հրել",
        "group": "el"
    },
    {
        "word": "տանել",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "group": "el"
    },
    {
        "word": "կոտրել",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "v2": "broke",
        "v3": "կոտրել",
        "group": "irregular"
    },
    {
        "word": "ստանալ",
        "level": "starter",
        "theme": "money_payment_A1",
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
        "v2": "received",
        "v3": "ստացել",
        "group": "al"
    },
    {
        "word": "համաձայնել",
        "level": "starter",
        "theme": "giving_opinions_A1",
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
        "v2": "agreed",
        "v3": "համաձայնել",
        "group": "el"
    },
    {
        "word": "նկարել",
        "level": "starter",
        "theme": "cinema_film_A1",
        "emoji": "🎨",
        "subtext": "նկար նկարել / գիծ քաշել",
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
        "v2": "drew",
        "v3": "նկարել",
        "group": "irregular"
    },
    {
        "word": "կիսվել",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "🍕",
        "subtext": "ուտելիքը կիսել / գաղափարը կիսել",
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
        "v2": "shared",
        "v3": "կիսվել",
        "group": "el"
    },
    {
        "word": "ժպտալ",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "😊",
        "subtext": "երջանիկ ժպտալ / երեխային ժպտալ",
        "opposite": "cry",
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
        "v2": "smiled",
        "v3": "ժպտացել",
        "group": "al"
    },
    {
        "word": "լաց լինել",
        "level": "starter",
        "theme": "surprise_interest_A1",
        "emoji": "😢",
        "subtext": "տխրությունից լաց լինել / բարձր լաց լինել",
        "opposite": "smile",
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
        "v2": "cried",
        "v3": "լաց եղել",
        "group": "el"
    },
    {
        "word": "պարել",
        "level": "starter",
        "theme": "music_A1",
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
        "v2": "danced",
        "v3": "պարել",
        "group": "el"
    },
    {
        "word": "երգել",
        "level": "starter",
        "theme": "music_A1",
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
        "v2": "sang",
        "v3": "երգել",
        "group": "irregular"
    },
    {
        "word": "ցատկել",
        "level": "starter",
        "theme": "playing_watching_sport_A1",
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
        "v2": "jumped",
        "v3": "ցատկել",
        "group": "el"
    },
    {
        "word": "լողալ",
        "level": "starter",
        "theme": "common_sports_A1",
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
        "v2": "swam",
        "v3": "լողացել",
        "group": "irregular"
    },
    {
        "word": "ուսումնասիրել",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "համալսարանում սովորել / քննության համար սովորել",
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
        "v2": "studied",
        "v3": "ուսումնասիրել",
        "group": "el"
    },
    {
        "word": "դասավանդել",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "v2": "taught",
        "v3": "դասավանդել",
        "group": "irregular"
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
        "v2": "commuted",
        "v3": "երթևեկել",
        "group": "el"
    },
    {
        "word": "վարձել",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
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
        "v2": "rented",
        "v3": "վարձել",
        "group": "el"
    },
    {
        "word": "մարզվել",
        "level": "starter",
        "theme": "leisure_activities_A1",
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
        "v2": "exercised",
        "v3": "մարզվել",
        "subtext": "ամեն օր մարզվել / մարզասրահում մարզվել",
        "group": "el"
    },
    {
        "word": "արժենալ",
        "level": "starter",
        "theme": "money_payment_A1",
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
        "v2": "cost",
        "v3": "արժեցել",
        "subtext": "շատ արժենալ / քիչ արժենալ",
        "group": "irregular"
    },
    {
        "word": "հրավիրել",
        "level": "starter",
        "theme": "family_life_A1",
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
        "v2": "invited",
        "v3": "հրավիրել",
        "subtext": "հյուրեր հրավիրել / խնջույքին հրավիրել",
        "group": "el"
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
        "v2": "got up",
        "v3": "վեր կացել",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "irregular"
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
        "v2": "had breakfast",
        "v3": "նախաճաշել",
        "theme": "daily_work_routines_A1",
        "emoji": "🍳",
        "level": "starter",
        "form": "verb",
        "group": "irregular"
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
        "v2": "came back",
        "v3": "վերադարձել",
        "theme": "daily_work_routines_A1",
        "emoji": "🔙",
        "level": "starter",
        "form": "verb",
        "group": "irregular"
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
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "irregular"
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
        "v2": "checked",
        "v3": "ստուգել",
        "theme": "workplace_basics_A1",
        "emoji": "✅",
        "level": "starter",
        "form": "verb",
        "group": "el"
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
        "v2": "replied",
        "v3": "պատասխանել",
        "theme": "workplace_basics_A1",
        "emoji": "↩️",
        "level": "starter",
        "form": "verb",
        "group": "el"
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
        "v2": "presented",
        "v3": "ներկայացրել",
        "theme": "workplace_basics_A1",
        "emoji": "📊",
        "level": "starter",
        "form": "verb",
        "group": "el"
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
        "v2": "attended",
        "v3": "մասնակցել",
        "theme": "workplace_basics_A1",
        "emoji": "📅",
        "level": "starter",
        "form": "verb",
        "group": "el"
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
        "v2": "managed",
        "v3": "ղեկավարել",
        "theme": "workplace_basics_A1",
        "emoji": "👤",
        "level": "starter",
        "form": "verb",
        "group": "el"
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
        "v2": "charged",
        "v3": "գանձել",
        "theme": "money_payment_A1",
        "emoji": "💳",
        "level": "starter",
        "form": "verb",
        "group": "el"
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
        "v2": "afforded",
        "v3": "թույլ տվել",
        "theme": "money_payment_A1",
        "emoji": "🏦",
        "level": "starter",
        "form": "verb",
        "group": "al"
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
        "v2": "owed",
        "v3": "պարտք եղել",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "level": "starter",
        "form": "verb",
        "group": "el"
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
        "v2": "earned",
        "v3": "վաստակել",
        "theme": "money_payment_A1",
        "emoji": "💶",
        "level": "starter",
        "form": "verb",
        "group": "el"
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
        "v2": "visited",
        "v3": "այցելել",
        "theme": "family_life_A1",
        "emoji": "🏘️",
        "level": "starter",
        "form": "verb",
        "group": "el"
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
        "v2": "celebrated",
        "v3": "տոնել",
        "theme": "leisure_activities_A1",
        "emoji": "🎉",
        "level": "starter",
        "form": "verb",
        "group": "el"
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
        "v2": "recommended",
        "v3": "խորհուրդ տվել",
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "level": "starter",
        "form": "verb",
        "group": "al"
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
        "subtext": "ոտքը ցավեցնել / մեջքը ցավել",
        "classification": "irregular",
        "aspect": "both",
        "v2": "hurt",
        "v3": "ցավեցրել",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤕",
        "level": "starter",
        "form": "verb",
        "group": "irregular"
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
        "v2": "rested",
        "v3": "հանգստացել",
        "theme": "daily_work_routines_A1",
        "emoji": "🛋️",
        "level": "starter",
        "form": "verb",
        "group": "al"
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
        "v2": "recovered",
        "v3": "ապաքինվել",
        "theme": "medical_appointments_A1",
        "emoji": "🩹",
        "level": "starter",
        "form": "verb",
        "group": "el"
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
        "v2": "booked",
        "v3": "ամրագրել",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "📖",
        "level": "starter",
        "form": "verb",
        "group": "el"
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
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🎒",
        "level": "starter",
        "form": "verb",
        "group": "el"
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
        "v2": "cancelled",
        "v3": "չեղարկել",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "❌",
        "level": "starter",
        "form": "verb",
        "group": "el"
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
        "v2": "missed",
        "v3": "բաց թողել",
        "theme": "public_transport_A1",
        "emoji": "🏃‍♂️",
        "level": "starter",
        "form": "verb",
        "group": "el"
    },
    {
        "word": "պատվիրել",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "v2": "ordered",
        "v3": "պատվիրել",
        "group": "el"
    },
    {
        "word": "բացատրել",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "v2": "explained",
        "v3": "բացատրել",
        "group": "el"
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
        "v2": "thanked",
        "v3": "շնորհակալություն հայտնել",
        "group": "el"
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
        "v2": "introduced",
        "v3": "ներկայացրել",
        "group": "el"
    },
    {
        "word": "թուլանալ",
        "level": "starter",
        "theme": "leisure_activities_A1",
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
        "v2": "relaxed",
        "v3": "թուլացել",
        "group": "al"
    },
    {
        "word": "նորոգել",
        "level": "starter",
        "theme": "household_tasks_A1",
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
        "group": "el"
    },
    {
        "word": "պատահել",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "❔",
        "subtext": "պատահաբար պատահել / ինչ պատահեց",
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
        "v2": "happened",
        "v3": "պատահել",
        "group": "el"
    },
    {
        "word": "թվալ",
        "level": "starter",
        "theme": "giving_opinions_A1",
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
        "v2": "seemed",
        "v3": "թվացել",
        "group": "al"
    },
    {
        "word": "նշանակել",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "❔",
        "subtext": "ի՞նչ է նշանակում / սա նշանակում է",
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
        "v2": "meant",
        "v3": "նշանակել",
        "group": "irregular"
    },
    {
        "word": "հետևել",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "v2": "followed",
        "v3": "հետևել",
        "group": "el"
    },
    {
        "word": "շարունակել",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "v2": "continued",
        "v3": "շարունակել",
        "group": "el"
    },
    {
        "word": "աճել",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "v2": "grew",
        "v3": "աճել",
        "group": "irregular"
    },
    {
        "word": "ներառել",
        "level": "starter",
        "theme": "money_payment_A1",
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
        "v2": "included",
        "v3": "ներառել",
        "group": "el"
    },
    {
        "word": "դառնալ",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "v2": "became",
        "v3": "դարձել",
        "group": "irregular"
    },
    {
        "word": "պատկանել",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "v2": "belonged",
        "v3": "պատկանել",
        "group": "el"
    },
    {
        "word": "ընտրել",
        "level": "starter",
        "theme": "giving_opinions_A1",
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
        "v2": "chose",
        "v3": "ընտրել",
        "group": "irregular"
    },
    {
        "word": "կառուցել",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "v2": "built",
        "v3": "կառուցել",
        "group": "irregular"
    }
];
    const lang = "hy";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();