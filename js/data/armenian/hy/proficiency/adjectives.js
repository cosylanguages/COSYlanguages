// TODO: verify level classification
(function() {
    const lang = "hy";
    const data = [
    {
        "word": "միջգիտակարգային",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧪",
        "form": "adjective",
        "definitions": [
            {
                "text": "Որը վերաբերում է կամ միավորում է երկու կամ ավելի ակադեմիական ոլորտներ:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_001",
        "transcription": ""
    },
    {
        "word": "հերմենևտիկ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📜",
        "form": "adjective",
        "definitions": [
            {
                "text": "Տեքստերի կամ իմաստի մեկնաբանությանը վերաբերող:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_002",
        "transcription": ""
    },
    {
        "word": "նույնաբանական",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔄",
        "form": "adjective",
        "definitions": [
            {
                "text": "Նույն բանը տարբեր բառերով կրկնող; տրամաբանության մեջ փակ շրջան կազմող:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_003",
        "transcription": ""
    },
    {
        "word": "բազմիմաստ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔠",
        "form": "adjective",
        "definitions": [
            {
                "text": "Բազմաթիվ իմաստներ ունեցող:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_004",
        "transcription": ""
    },
    {
        "word": "հևրիստիկ",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💡",
        "form": "adjective",
        "definitions": [
            {
                "text": "Խնդիրների լուծման մոտեցում՝ հիմնված փորձի, այլ ոչ թե երաշխավորված ապացույցի վրա:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_psychology_001",
        "transcription": ""
    },
    {
        "word": "հետգաղութային",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🌍",
        "form": "adjective",
        "definitions": [
            {
                "text": "Գաղութատիրությանը հաջորդող ժամանակաշրջանին կամ գաղութատիրական ժառանգության քննադատությանը վերաբերող:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_social_001",
        "transcription": ""
    },
    {
        "word": "բազմաբևեռ",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🌐",
        "form": "adjective",
        "definitions": [
            {
                "text": "Աշխարհակարգ, որն ունի ուժի մի քանի կենտրոններ՝ մեկի կամ երկուսի փոխարեն:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_social_002",
        "transcription": ""
    },
    {
        "word": "կոսմոպոլիտ",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🏙️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Տարբեր երկրների և մշակույթների հետ ծանոթ և դրանցում իրեն հարմար զգացող:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_social_003",
        "transcription": ""
    },
    {
        "word": "նարցիսիստական",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🪞",
        "form": "adjective",
        "definitions": [
            {
                "text": "Սեփական անձի, արտաքինի կամ ձեռքբերումների նկատմամբ չափազանցված հետաքրքրություն ունեցող:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_psychology_002",
        "transcription": ""
    },
    {
        "word": "հերետիկոսական",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚩",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ընդունված համոզմունքներին կամ դոկտրիններին հակասող:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_005",
        "transcription": ""
    },
    {
        "word": "ներհատուկ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚛️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ինչ-որ բանի ներսում գոյություն ունեցող կամ գործող; ոչ տրանսցենդենտալ:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_006",
        "transcription": ""
    },
    {
        "word": "կտրուկ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⏱️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Հանկարծակի և անսպասելի; կոպիտ կամ անտաշ վարվելակերպում:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_007",
        "transcription": ""
    },
    {
        "word": "խրթին",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🧐",
        "form": "adjective",
        "definitions": [
            {
                "text": "Դժվար հասկանալի; անորոշ կամ բարդ:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_psychology_003",
        "transcription": ""
    },
    {
        "word": "անախրոնիկ",
        "level": "proficiency",
        "theme": "time",
        "emoji": "⌛",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ժամանակավրեպ; ավելի վաղ շրջանին պատկանող:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_time_001",
        "transcription": ""
    },
    {
        "word": "հակաթեթիկ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ինչ-որ բանին ուղղակիորեն հակադիր:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_008",
        "transcription": ""
    },
    {
        "word": "արկանային",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🔮",
        "form": "adjective",
        "definitions": [
            {
                "text": "Միայն քչերին հայտնի; խորհրդավոր և գաղտնի:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_psychology_004",
        "transcription": ""
    },
    {
        "word": "ոչ տիպիկ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🦄",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ոչ բնորոշ; ոչ նորմալ կամ ոչ սովորական:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_009",
        "transcription": ""
    },
    {
        "word": "բինար",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔢",
        "form": "adjective",
        "definitions": [
            {
                "text": "Երկու մասից բաղկացած; երկընտրանքի վրա հիմնված:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_010",
        "transcription": ""
    },
    {
        "word": "կատեգորիկ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❗",
        "form": "adjective",
        "definitions": [
            {
                "text": "Բացարձակ; առանց որևէ բացառության կամ պայմանի արտահայտված:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_011",
        "transcription": ""
    },
    {
        "word": "շրջահայաց",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛡️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Զգույշ, բոլոր հանգամանքները հաշվի առնող:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_social_004",
        "transcription": ""
    },
    {
        "word": "գաղտնի",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🕵️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Թաքնված; բացահայտ չընդունվող:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_social_005",
        "transcription": ""
    },
    {
        "word": "դիալեկտիկական",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Հակադրությունների միջոցով գաղափարների տրամաբանական քննարկմանը վերաբերող:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_012",
        "transcription": ""
    },
    {
        "word": "դիֆուզ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌫️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Մեծ տարածքի վրա տարածված; հստակություն չունեցող:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_013",
        "transcription": ""
    },
    {
        "word": "դժվարորսալի",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🌬️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Դժվար գտնելու, բռնելու կամ հասնելու համար:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_psychology_005",
        "transcription": ""
    },
    {
        "word": "էզոթերիկ",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🗝️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Հասկանալի կամ նախատեսված միայն մարդկանց նեղ խմբի համար:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_psychology_006",
        "transcription": ""
    },
    {
        "word": "սխալական",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❌",
        "form": "adjective",
        "definitions": [
            {
                "text": "Կեղծ դատողությունների վրա հիմնված; մոլորեցնող:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_014",
        "transcription": ""
    },
    {
        "word": "անփոփոխ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧱",
        "form": "adjective",
        "definitions": [
            {
                "text": "Որը հնարավոր չէ փոխել; ֆիքսված և մշտական:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_015",
        "transcription": ""
    },
    {
        "word": "անկողմնակալ",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Որևէ կողմին նախապատվություն չտվող; արդար:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_social_006",
        "transcription": ""
    },
    {
        "word": "պատահական",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🍃",
        "form": "adjective",
        "definitions": [
            {
                "text": "Որպես մեկ այլ բանի ոչ էական մաս տեղի ունեցող:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_016",
        "transcription": ""
    },
    {
        "word": "բնածին",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚛️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ինչ-որ բանի մեջ որպես բնական և մշտական որակ գոյություն ունեցող:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_017",
        "transcription": ""
    },
    {
        "word": "աննման",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "🌟",
        "form": "adjective",
        "definitions": [
            {
                "text": "Այնքան լավ կամ անսովոր, որ անհնար է կրկնօրինակել:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_art_culture_001",
        "transcription": ""
    },
    {
        "word": "նենգ",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🐍",
        "form": "adjective",
        "definitions": [
            {
                "text": "Վնասակար կերպով աստիճանաբար զարգացող:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_social_007",
        "transcription": ""
    },
    {
        "word": "անհաշտելի",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚫",
        "form": "adjective",
        "definitions": [
            {
                "text": "Որը հնարավոր չէ հաշտեցնել կամ համատեղելի դարձնել:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_018",
        "transcription": ""
    },
    {
        "word": "լիմինալ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚪",
        "form": "adjective",
        "definitions": [
            {
                "text": "Անցումային կամ միջանկյալ վիճակին վերաբերող:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_019",
        "transcription": ""
    },
    {
        "word": "բազմազան",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔢",
        "form": "adjective",
        "definitions": [
            {
                "text": "Բազմաթիվ և տարբերատեսակ:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_020",
        "transcription": ""
    },
    {
        "word": "մշուշոտ",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "☁️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Անորոշ; աղոտ և վատ սահմանված:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_psychology_007",
        "transcription": ""
    },
    {
        "word": "նորմատիվ",
        "level": "proficiency",
        "theme": "social",
        "emoji": "📏",
        "form": "adjective",
        "definitions": [
            {
                "text": "Նորմին վերաբերող; այն, ինչ պետք է լինի, թելադրող:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_social_008",
        "transcription": ""
    },
    {
        "word": "նրբերանգային",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌗",
        "form": "adjective",
        "definitions": [
            {
                "text": "Նուրբ տարբերություններ ցույց տվող; ոչ պարզ և ոչ ծայրահեղ:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_021",
        "transcription": ""
    },
    {
        "word": "անուղղակի",
        "level": "proficiency",
        "theme": "language",
        "emoji": "↗️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ոչ ուղղակի; շեղակի; ոչ պարզ կամ ոչ բացահայտ:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_022",
        "transcription": ""
    },
    {
        "word": "անթափանց",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌑",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ոչ թափանցիկ; դժվար հասկանալի:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_023",
        "transcription": ""
    },
    {
        "word": "թվացյալ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🎭",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ինչ-որ բան թվացող; որպես իրական կամ ճշմարիտ հայտարարված:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_024",
        "transcription": ""
    },
    {
        "word": "պարադոքսալ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔄",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ինքն իրեն հակասող, բայց ճշմարտություն պարունակող:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_025",
        "transcription": ""
    },
    {
        "word": "համատարած",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌊",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ամենուր առկա; լայնորեն տարածված:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_time_002",
        "transcription": ""
    },
    {
        "word": "բևեռացնող",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🧲",
        "form": "adjective",
        "definitions": [
            {
                "text": "Մարդկանց հակադիր դիրքեր գրավելուն դրդող:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_social_009",
        "transcription": ""
    },
    {
        "word": "երերուն",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧗",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ոչ ապահով և ոչ հուսալի; պատահականությունից կախված:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_026",
        "transcription": ""
    },
    {
        "word": "պրեսկրիպտիվ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📜",
        "form": "adjective",
        "definitions": [
            {
                "text": "Թելադրող, թե ինչ պետք է արվի; կանոններ սահմանող:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_027",
        "transcription": ""
    },
    {
        "word": "ձգձգված",
        "level": "proficiency",
        "theme": "time",
        "emoji": "⌛",
        "form": "adjective",
        "definitions": [
            {
                "text": "Սպասվածից ավելի երկար տևող:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_time_003",
        "transcription": ""
    },
    {
        "word": "ռեդուկտիվ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📉",
        "form": "adjective",
        "definitions": [
            {
                "text": "Բարդ երևույթը չափազանց պարզեցնող:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_028",
        "transcription": ""
    },
    {
        "word": "հիմնարար",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌱",
        "form": "adjective",
        "definitions": [
            {
                "text": "Շատ կարևոր և ազդեցիկ; բնօրինակ:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_time_004",
        "transcription": ""
    },
    {
        "word": "թվացյալ հիմնավոր",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤥",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ճիշտ թվացող, բայց իրականում կեղծ; մոլորեցնող:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_029",
        "transcription": ""
    },
    {
        "word": "կեղծ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤡",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ոչ իրական; կեղծ դատողությունների վրա հիմնված:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_030",
        "transcription": ""
    },
    {
        "word": "քայքայիչ",
        "level": "proficiency",
        "theme": "social",
        "emoji": "💣",
        "form": "adjective",
        "definitions": [
            {
                "text": "Հաստատված համակարգը տապալելուն ուղղված:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_social_010",
        "transcription": ""
    },
    {
        "word": "լռելյայն",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤫",
        "form": "adjective",
        "definitions": [
            {
                "text": "Առանց բառերի հասկանալի կամ համաձայնեցված:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_031",
        "transcription": ""
    },
    {
        "word": "թույլ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🕸️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Շատ թույլ կամ աննշան; ամուր չհաստատված:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_032",
        "transcription": ""
    },
    {
        "word": "անցողիկ",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌅",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ոչ մշտական; արագ անցնող:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_time_005",
        "transcription": ""
    },
    {
        "word": "ամենուրեք",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌍",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ամենուր հայտնվող; շատ տարածված:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_time_006",
        "transcription": ""
    },
    {
        "word": "միանշանակ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📢",
        "form": "adjective",
        "definitions": [
            {
                "text": "Կասկածի տեղ չթողնող; լիովին հստակ:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_033",
        "transcription": ""
    },
    {
        "word": "աննախադեպ",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🚀",
        "form": "adjective",
        "definitions": [
            {
                "text": "Նախկինում երբեք չպատահած:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_time_007",
        "transcription": ""
    },
    {
        "word": "անհիմն",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🏗️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Որը հնարավոր չէ պահպանել կամ պաշտպանել:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_034",
        "transcription": ""
    },
    {
        "word": "ծանրաշարժ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📦",
        "form": "adjective",
        "definitions": [
            {
                "text": "Չափսի կամ բարդության պատճառով դժվար կառավարելի:",
                "examples": []
            }
        ],
        "lang": "hy",
        "id": "hy_proficiency_language_035",
        "transcription": ""
    }
];

    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
