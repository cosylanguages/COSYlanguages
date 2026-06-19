// TODO: verify level classification
(function() {
    const lang = "hy";
    const data = [
    {
        "word": "ապորիա",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤔",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Տարակուսանքի կամ դժվարության վիճակ, որն առաջանում է փաստարկի մեջ առկա հակասություններից:",
                "examples": [
                    "Երկխոսությունն ավարտվում է ապորիայով, քանի որ գոհացուցիչ պատասխան չի գտնվել:"
                ]
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_001"
    },
    {
        "word": "տելեոլոգիա",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🎯",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Բնության կամ պատմության մեջ նպատակահարմարության կամ նպատակաուղղվածության մասին փիլիսոփայական ուսմունք:",
                "examples": [
                    "Նրա փաստարկը հիմնված է մարդկային առաջընթացի տելեոլոգիական հայացքի վրա:"
                ]
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_002"
    },
    {
        "word": "օնտոլոգիա",
        "level": "proficiency",
        "theme": "language",
        "emoji": "👻",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Փիլիսոփայության բաժին, որն զբաղվում է կեցության կամ գոյության բնույթով:",
                "examples": [
                    "Նրա օնտոլոգիական համոզմունքները ձևավորում են նրա ողջ փաստարկը:"
                ]
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_003"
    },
    {
        "word": "ռեիֆիկացիա",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧱",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Աբստրակտ երևույթը որպես կոնկրետ, իրական իր դիտարկելու գործընթացը. իրականացում:",
                "examples": [
                    "Շուկայական ուժերի ռեիֆիկացիան քողարկում է դրանց հետևում կանգնած մարդկային որոշումները:"
                ]
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_004"
    },
    {
        "word": "դիալեկտիկա",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Փաստարկման մեթոդ, որը ներառում է հակասություն և լուծում:",
                "examples": [
                    "Ազատության և անվտանգության միջև դիալեկտիկան սահմանում է լիբերալ մտածողությունը:"
                ]
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_005"
    },
    {
        "word": "հևրիստիկ",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Խնդիրների լուծման մոտեցում՝ հիմնված փորձի, այլ ոչ թե երաշխավորված ապացույցների վրա:",
                "examples": [
                    "'Հետևիր փողերին' սկզբունքը օգտակար հևրիստիկա է հետաքննող լրագրության մեջ:"
                ]
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_psychology_001"
    },
    {
        "word": "ապոֆենիա",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🕸️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Չկապակցված երևույթների միջև իմաստալից կապեր տեսնելու հակումը:",
                "examples": [
                    "Դավադրության տեսությունները հաճախ սնվում են ապոֆենիայով:"
                ]
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_psychology_002"
    },
    {
        "word": "մոտիվացված կոգնիցիա",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🧠",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Ցանկությունների և հույզերի ազդեցությունը դատողությունների և համոզմունքների ձևավորման վրա:",
                "examples": [
                    "Մոտիվացված կոգնիցիան բացատրում է, թե ինչու են մարդիկ դիմադրում անցանկալի ապացույցներին:"
                ]
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_psychology_003"
    },
    {
        "word": "պրոակտիվ սկզբունք",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🚀",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Այն տեսակետը, որ անգործության ռիսկերը պետք է կշռադատվեն գործողության ռիսկերի հետ:",
                "examples": [
                    "Տրանսհումանիստները հաճախ վկայակոչում են պրոակտիվ սկզբունքը:"
                ]
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_social_001"
    },
    {
        "word": "նախազգուշական սկզբունք",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛡️",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Այն տեսակետը, որ անհայտ, բայց պոտենցիալ վնասակար հետևանքներ ունեցող գործողություններից պետք է խուսափել:",
                "examples": [
                    "Բնապահպանական իրավունքը հաճախ կիրառում է նախազգուշական սկզբունքը:"
                ]
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_social_002"
    },
    {
        "word": "լիբերալ չեզոքություն",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⚖️",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Լիբերալ սկզբունք, ըստ որի պետությունը չպետք է նախապատվություն տա լավ կյանքի որևէ կոնկրետ տեսլականի:",
                "examples": [
                    "Քննադատները պնդում են, որ լիբերալ չեզոքությունն ինքնին բարոյական դիրքորոշում է:"
                ]
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_social_003"
    },
    {
        "word": "պրոնատալիզմ",
        "level": "proficiency",
        "theme": "social",
        "emoji": "👶",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Քաղաքականություն կամ գաղափարախոսություն, որը խրախուսում է մարդկանց ավելի շատ երեխաներ ունենալ:",
                "examples": [
                    "Նա քննադատեց ընտանեկան հարկային քաղաքականության մեջ ներդրված պրոնատալիստական ենթադրությունները:"
                ]
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_social_004"
    },
    {
        "word": "սուբլիմացիա",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🎨",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Պրիմիտիվ մղման վերաուղղորդումը դեպի սոցիալապես ընդունելի գործունեություն:",
                "examples": [
                    "Արվեստը վաղուց ընկալվել է որպես սուբլիմացիայի ձև:"
                ]
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_psychology_004"
    },
    {
        "word": "ժուիսանս",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🔥",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Պսիխոանալիտիկ տեսության մեջ՝ վայելքի չափազանց կամ տրանսգրեսիվ ձև:",
                "examples": [
                    "Ժիժեկն օգտագործում է ժուիսանսի հասկացությունը գաղափարախոսական կապվածությունը բացատրելու համար:"
                ]
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_psychology_005"
    },
    {
        "word": "թանատոս",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💀",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Ֆրոյդի տեսության մեջ՝ մահվան մղում. ինքնակործանման բնազդ:",
                "examples": [
                    "Վեպը հետազոտում է էրոսի և թանատոսի միջև լարվածությունը:"
                ]
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_psychology_006"
    },
    {
        "word": "բաթոս",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "📉",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Կտրուկ, հուսախաբող անցում վեհից դեպի սովորականը կամ չնչինը:",
                "examples": [
                    "Ելույթը վճռորոշ պահին վերածվեց բաթոսի:"
                ]
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_art_culture_001"
    },
    {
        "word": "ապոֆազիս",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤫",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Հռետորական հնարք՝ ինչ-որ բանի վրա ուշադրություն հրավիրելու համար՝ պնդելով, թե չեք հիշատակում այն:",
                "examples": [
                    "'Ես չեմ նշի նրա դատվածությունը' դասական ապոֆազիս է:"
                ]
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_006"
    },
    {
        "word": "պարալեպսիս",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🙊",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Ապոֆազիսի հոմանիշը:",
                "examples": [
                    "Քաղաքական հռետորաբանությունը հաճախ հիմնվում է պարալեպսիսի վրա:"
                ]
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_007"
    },
    {
        "word": "լիմինալ տարածություն",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚪",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Անցումային փուլ կամ շեմային պահ երկու վիճակների միջև:",
                "examples": [
                    "Միջին տարիքը կարելի է հասկանալ որպես լիմինալ տարածություն երիտասարդության և ծերության միջև:"
                ]
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_008"
    },
    {
        "word": "քիազմ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❌",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Հռետորական հնարք, որտեղ երկրորդ մասը առաջինի շրջումն է:",
                "examples": [
                    "'Մի հարցրու, թե ինչ կարող է անել երկիրը քեզ համար' նախադասությունը օգտագործում է քիազմ:"
                ]
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_009"
    },
    {
        "word": "շիբոլեթ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔑",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Սովորույթ, արտահայտություն կամ համոզմունք, որն օգտագործվում է որոշակի խմբի անդամներին նույնականացնելու համար:",
                "examples": [
                    "'Աշխատասեր ընտանիքներ' արտահայտությունը դարձել է քաղաքական շիբոլեթ:"
                ]
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_010"
    }
];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();