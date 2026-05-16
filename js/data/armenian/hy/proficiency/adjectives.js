(function() {
    const lang = "hy";
    const data = [
        {
            "word": "միջգիտակարգային",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🧪",
            "form": "adjective",
            "definitions": [{ "text": "Որը վերաբերում է կամ միավորում է երկու կամ ավելի ակադեմիական ոլորտներ:" }]
        },
        {
            "word": "հերմենևտիկ",
            "level": "proficiency",
            "theme": "philosophy_language_C2",
            "emoji": "📜",
            "form": "adjective",
            "definitions": [{ "text": "Տեքստերի կամ իմաստի մեկնաբանությանը վերաբերող:" }]
        },
        {
            "word": "նույնաբանական",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🔄",
            "form": "adjective",
            "definitions": [{ "text": "Նույն բանը տարբեր բառերով կրկնող; տրամաբանության մեջ փակ շրջան կազմող:" }]
        },
        {
            "word": "բազմիմաստ",
            "level": "proficiency",
            "theme": "linguistics_theory_C2",
            "emoji": "🔠",
            "form": "adjective",
            "definitions": [{ "text": "Բազմաթիվ իմաստներ ունեցող:" }]
        },
        {
            "word": "հևրիստիկ",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "💡",
            "form": "adjective",
            "definitions": [{ "text": "Խնդիրների լուծման մոտեցում՝ հիմնված փորձի, այլ ոչ թե երաշխավորված ապացույցի վրա:" }]
        },
        {
            "word": "հետգաղութային",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🌍",
            "form": "adjective",
            "definitions": [{ "text": "Գաղութատիրությանը հաջորդող ժամանակաշրջանին կամ գաղութատիրական ժառանգության քննադատությանը վերաբերող:" }]
        },
        {
            "word": "բազմաբևեռ",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🌐",
            "form": "adjective",
            "definitions": [{ "text": "Աշխարհակարգ, որն ունի ուժի մի քանի կենտրոններ՝ մեկի կամ երկուսի փոխարեն:" }]
        },
        {
            "word": "կոսմոպոլիտ",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🏙️",
            "form": "adjective",
            "definitions": [{ "text": "Տարբեր երկրների և մշակույթների հետ ծանոթ և դրանցում իրեն հարմար զգացող:" }]
        },
        {
            "word": "նարցիսիստական",
            "level": "proficiency",
            "theme": "psychoanalysis_unconscious_C2",
            "emoji": "🪞",
            "form": "adjective",
            "definitions": [{ "text": "Սեփական անձի, արտաքինի կամ ձեռքբերումների նկատմամբ չափազանցված հետաքրքրություն ունեցող:" }]
        },
        {
            "word": "հերետիկոսական",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🚩",
            "form": "adjective",
            "definitions": [{ "text": "Ընդունված համոզմունքներին կամ դոկտրիններին հակասող:" }]
        },
        {
            "word": "ներհատուկ",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "⚛️",
            "form": "adjective",
            "definitions": [{ "text": "Ինչ-որ բանի ներսում գոյություն ունեցող կամ գործող; ոչ տրանսցենդենտալ:" }]
        },
        {
            "word": "կտրուկ",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "⏱️",
            "form": "adjective",
            "definitions": [{ "text": "Հանկարծակի և անսպասելի; կոպիտ կամ անտաշ վարվելակերպում:" }]
        },
        {
            "word": "խրթին",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🧐",
            "form": "adjective",
            "definitions": [{ "text": "Դժվար հասկանալի; անորոշ կամ բարդ:" }]
        },
        {
            "word": "անախրոնիկ",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "⌛",
            "form": "adjective",
            "definitions": [{ "text": "Ժամանակավրեպ; ավելի վաղ շրջանին պատկանող:" }]
        },
        {
            "word": "հակաթեթիկ",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [{ "text": "Ինչ-որ բանին ուղղակիորեն հակադիր:" }]
        },
        {
            "word": "արկանային",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🔮",
            "form": "adjective",
            "definitions": [{ "text": "Միայն քչերին հայտնի; խորհրդավոր և գաղտնի:" }]
        },
        {
            "word": "ոչ տիպիկ",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🦄",
            "form": "adjective",
            "definitions": [{ "text": "Ոչ բնորոշ; ոչ նորմալ կամ ոչ սովորական:" }]
        },
        {
            "word": "բինար",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🔢",
            "form": "adjective",
            "definitions": [{ "text": "Երկու մասից բաղկացած; երկընտրանքի վրա հիմնված:" }]
        },
        {
            "word": "կատեգորիկ",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "❗",
            "form": "adjective",
            "definitions": [{ "text": "Բացարձակ; առանց որևէ բացառության կամ պայմանի արտահայտված:" }]
        },
        {
            "word": "շրջահայաց",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "🛡️",
            "form": "adjective",
            "definitions": [{ "text": "Զգույշ, բոլոր հանգամանքները հաշվի առնող:" }]
        },
        {
            "word": "գաղտնի",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🕵️",
            "form": "adjective",
            "definitions": [{ "text": "Թաքնված; բացահայտ չընդունվող:" }]
        },
        {
            "word": "դիալեկտիկական",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [{ "text": "Հակադրությունների միջոցով գաղափարների տրամաբանական քննարկմանը վերաբերող:" }]
        },
        {
            "word": "դիֆուզ",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌫️",
            "form": "adjective",
            "definitions": [{ "text": "Մեծ տարածքի վրա տարածված; հստակություն չունեցող:" }]
        },
        {
            "word": "դժվարորսալի",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🌬️",
            "form": "adjective",
            "definitions": [{ "text": "Դժվար գտնելու, բռնելու կամ հասնելու համար:" }]
        },
        {
            "word": "էզոթերիկ",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🗝️",
            "form": "adjective",
            "definitions": [{ "text": "Հասկանալի կամ նախատեսված միայն մարդկանց նեղ խմբի համար:" }]
        },
        {
            "word": "սխալական",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "❌",
            "form": "adjective",
            "definitions": [{ "text": "Կեղծ դատողությունների վրա հիմնված; մոլորեցնող:" }]
        },
        {
            "word": "անփոփոխ",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🧱",
            "form": "adjective",
            "definitions": [{ "text": "Որը հնարավոր չէ փոխել; ֆիքսված և մշտական:" }]
        },
        {
            "word": "անկողմնակալ",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [{ "text": "Որևէ կողմին նախապատվություն չտվող; արդար:" }]
        },
        {
            "word": "պատահական",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🍃",
            "form": "adjective",
            "definitions": [{ "text": "Որպես մեկ այլ բանի ոչ էական մաս տեղի ունեցող:" }]
        },
        {
            "word": "բնածին",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "⚛️",
            "form": "adjective",
            "definitions": [{ "text": "Ինչ-որ բանի մեջ որպես բնական և մշտական որակ գոյություն ունեցող:" }]
        },
        {
            "word": "աննման",
            "level": "proficiency",
            "theme": "aesthetics_criticism_C2",
            "emoji": "🌟",
            "form": "adjective",
            "definitions": [{ "text": "Այնքան լավ կամ անսովոր, որ անհնար է կրկնօրինակել:" }]
        },
        {
            "word": "նենգ",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "🐍",
            "form": "adjective",
            "definitions": [{ "text": "Վնասակար կերպով աստիճանաբար զարգացող:" }]
        },
        {
            "word": "անհաշտելի",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🚫",
            "form": "adjective",
            "definitions": [{ "text": "Որը հնարավոր չէ հաշտեցնել կամ համատեղելի դարձնել:" }]
        },
        {
            "word": "լիմինալ",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🚪",
            "form": "adjective",
            "definitions": [{ "text": "Անցումային կամ միջանկյալ վիճակին վերաբերող:" }]
        },
        {
            "word": "բազմազան",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🔢",
            "form": "adjective",
            "definitions": [{ "text": "Բազմաթիվ և տարբերատեսակ:" }]
        },
        {
            "word": "մշուշոտ",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "☁️",
            "form": "adjective",
            "definitions": [{ "text": "Անորոշ; աղոտ և վատ սահմանված:" }]
        },
        {
            "word": "նորմատիվ",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "📏",
            "form": "adjective",
            "definitions": [{ "text": "Նորմին վերաբերող; այն, ինչ պետք է լինի, թելադրող:" }]
        },
        {
            "word": "նրբերանգային",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌗",
            "form": "adjective",
            "definitions": [{ "text": "Նուրբ տարբերություններ ցույց տվող; ոչ պարզ և ոչ ծայրահեղ:" }]
        },
        {
            "word": "անուղղակի",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "↗️",
            "form": "adjective",
            "definitions": [{ "text": "Ոչ ուղղակի; շեղակի; ոչ պարզ կամ ոչ բացահայտ:" }]
        },
        {
            "word": "անթափանց",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌑",
            "form": "adjective",
            "definitions": [{ "text": "Ոչ թափանցիկ; դժվար հասկանալի:" }]
        },
        {
            "word": "թվացյալ",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🎭",
            "form": "adjective",
            "definitions": [{ "text": "Ինչ-որ բան թվացող; որպես իրական կամ ճշմարիտ հայտարարված:" }]
        },
        {
            "word": "պարադոքսալ",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🔄",
            "form": "adjective",
            "definitions": [{ "text": "Ինքն իրեն հակասող, բայց ճշմարտություն պարունակող:" }]
        },
        {
            "word": "համատարած",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌊",
            "form": "adjective",
            "definitions": [{ "text": "Ամենուր առկա; լայնորեն տարածված:" }]
        },
        {
            "word": "բևեռացնող",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🧲",
            "form": "adjective",
            "definitions": [{ "text": "Մարդկանց հակադիր դիրքեր գրավելուն դրդող:" }]
        },
        {
            "word": "երերուն",
            "level": "proficiency",
            "theme": "ontology_existence_C2",
            "emoji": "🧗",
            "form": "adjective",
            "definitions": [{ "text": "Ոչ ապահով և ոչ հուսալի; պատահականությունից կախված:" }]
        },
        {
            "word": "պրեսկրիպտիվ",
            "level": "proficiency",
            "theme": "linguistics_theory_C2",
            "emoji": "📜",
            "form": "adjective",
            "definitions": [{ "text": "Թելադրող, թե ինչ պետք է արվի; կանոններ սահմանող:" }]
        },
        {
            "word": "ձգձգված",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "⌛",
            "form": "adjective",
            "definitions": [{ "text": "Սպասվածից ավելի երկար տևող:" }]
        },
        {
            "word": "ռեդուկտիվ",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "📉",
            "form": "adjective",
            "definitions": [{ "text": "Բարդ երևույթը չափազանց պարզեցնող:" }]
        },
        {
            "word": "հիմնարար",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌱",
            "form": "adjective",
            "definitions": [{ "text": "Շատ կարևոր և ազդեցիկ; բնօրինակ:" }]
        },
        {
            "word": "թվացյալ հիմնավոր",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🤥",
            "form": "adjective",
            "definitions": [{ "text": "Ճիշտ թվացող, բայց իրականում կեղծ; մոլորեցնող:" }]
        },
        {
            "word": "կեղծ",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🤡",
            "form": "adjective",
            "definitions": [{ "text": "Ոչ իրական; կեղծ դատողությունների վրա հիմնված:" }]
        },
        {
            "word": "քայքայիչ",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "💣",
            "form": "adjective",
            "definitions": [{ "text": "Հաստատված համակարգը տապալելուն ուղղված:" }]
        },
        {
            "word": "լռելյայն",
            "level": "proficiency",
            "theme": "philosophy_language_C2",
            "emoji": "🤫",
            "form": "adjective",
            "definitions": [{ "text": "Առանց բառերի հասկանալի կամ համաձայնեցված:" }]
        },
        {
            "word": "թույլ",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🕸️",
            "form": "adjective",
            "definitions": [{ "text": "Շատ թույլ կամ աննշան; ամուր չհաստատված:" }]
        },
        {
            "word": "անցողիկ",
            "level": "proficiency",
            "theme": "mortality_time_C2",
            "emoji": "🌅",
            "form": "adjective",
            "definitions": [{ "text": "Ոչ մշտական; արագ անցնող:" }]
        },
        {
            "word": "ամենուրեք",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌍",
            "form": "adjective",
            "definitions": [{ "text": "Ամենուր հայտնվող; շատ տարածված:" }]
        },
        {
            "word": "միանշանակ",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "📢",
            "form": "adjective",
            "definitions": [{ "text": "Կասկածի տեղ չթողնող; լիովին հստակ:" }]
        },
        {
            "word": "աննախադեպ",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🚀",
            "form": "adjective",
            "definitions": [{ "text": "Նախկինում երբեք չպատահած:" }]
        },
        {
            "word": "անհիմն",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🏗️",
            "form": "adjective",
            "definitions": [{ "text": "Որը հնարավոր չէ պահպանել կամ պաշտպանել:" }]
        },
        {
            "word": "ծանրաշարժ",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "📦",
            "form": "adjective",
            "definitions": [{ "text": "Չափսի կամ բարդության պատճառով դժվար կառավարելի:" }]
        }
    ];

    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
