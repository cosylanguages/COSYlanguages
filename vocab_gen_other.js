const fs = require('fs');

const enRef = [
    { word: "doctor", theme: "job_titles_professions_A1", emoji: "🧑‍⚕️", def: "A person who helps people when they are sick." },
    { word: "foot", theme: "body_parts_A1", emoji: "🦶", def: "The part of the body at the bottom of the leg." },
    { word: "teacher", theme: "job_titles_professions_A1", emoji: "🧑‍🏫", def: "A person who helps you learn new things." },
    { word: "pizza", theme: "basic_foods_A1", emoji: "🍕", def: "A flat bread with cheese and tomato." },
    { word: "pasta", theme: "basic_foods_A1", emoji: "🍝", def: "A food made from flour and eggs." },
    { word: "apple", theme: "basic_foods_A1", emoji: "🍎", def: "A round fruit that can be red or green." },
    { word: "bread", theme: "basic_foods_A1", emoji: "🍞", def: "A common food made from flour and water." },
    { word: "egg", theme: "basic_foods_A1", emoji: "🥚", def: "An oval object laid by a hen." },
    { word: "milk", theme: "basic_foods_A1", emoji: "🥛", def: "A white liquid produced by cows." },
    { word: "banana", theme: "basic_foods_A1", emoji: "🍌", def: "A long yellow fruit." },
    { word: "coffee", theme: "drinks_A1", emoji: "☕", def: "A hot brown drink made from coffee beans." },
    { word: "tea", theme: "drinks_A1", emoji: "🍵", def: "A hot drink made with water and tea leaves." },
    { word: "water", theme: "drinks_A1", emoji: "🚰", def: "A clear liquid that we drink." },
    { word: "school", theme: "local_places_services_A1", emoji: "🏫", def: "A place where children go to learn." },
    { word: "t-shirt", theme: "items_of_clothing_A1", emoji: "👕", def: "A casual shirt with short sleeves." },
    { word: "pants", theme: "items_of_clothing_A1", emoji: "👖", def: "A garment covering each leg from waist to ankle." },
    { word: "shoe", theme: "items_of_clothing_A1", emoji: "👞", def: "Something you wear on your feet." },
    { word: "hat", theme: "items_of_clothing_A1", emoji: "👒", def: "Something you wear on your head." },
    { word: "chair", theme: "furniture_objects_A1", emoji: "🪑", def: "A piece of furniture for one person to sit on." },
    { word: "table", theme: "furniture_objects_A1", emoji: "🪑", def: "A piece of furniture with four legs." },
    { word: "bed", theme: "furniture_objects_A1", emoji: "🛏️", def: "A piece of furniture that you sleep on." },
    { word: "key", theme: "furniture_objects_A1", emoji: "🔑", def: "A metal object used to open a door." },
    { word: "phone", theme: "basic_technology_devices_A1", emoji: "📱", def: "A device used to talk to people far away." },
    { word: "book", theme: "furniture_objects_A1", emoji: "📚", def: "Many pages with words that you read." },
    { word: "bag", theme: "furniture_objects_A1", emoji: "👜", def: "A container used to carry things." },
    { word: "pen", theme: "furniture_objects_A1", emoji: "🖊️", def: "An object used for writing with ink." },
    { word: "cat", theme: "animals_A1", emoji: "🐈", def: "A small animal with fur." },
    { word: "dog", theme: "animals_A1", emoji: "🐕", def: "An animal often called 'man's best friend'." },
    { word: "hand", theme: "body_parts_A1", emoji: "✋", def: "The part of your arm that has fingers." },
    { word: "leg", theme: "body_parts_A1", emoji: "🦵", def: "The part of the body used for walking." },
    { word: "eye", theme: "body_parts_A1", emoji: "👁️", def: "The part of your body used for seeing." },
    { word: "nose", theme: "body_parts_A1", emoji: "👃", def: "The part of the face used for smelling." },
    { word: "mouth", theme: "body_parts_A1", emoji: "👄", def: "The part of the face used for eating and speaking." },
    { word: "ear", theme: "body_parts_A1", emoji: "👂", def: "The part of the body used for hearing." },
    { word: "mother", theme: "immediate_family_A1", emoji: "👩", def: "A woman who is your parent." },
    { word: "father", theme: "immediate_family_A1", emoji: "👨", def: "A man who is your parent." },
    { word: "work", theme: "job_titles_professions_A1", emoji: "💼", def: "A job; a place where people earn money." },
    { word: "home", theme: "rooms_of_a_home_A1", emoji: "🏠", def: "The place where you live." },
    { word: "car", theme: "modes_of_transport_A1", emoji: "🚗", def: "A vehicle with four wheels." },
    { word: "bus", theme: "modes_of_transport_A1", emoji: "🚌", def: "A large vehicle for many people." },
    { word: "train", theme: "modes_of_transport_A1", emoji: "🚆", def: "A vehicle that runs on rails." },
    { word: "money", theme: "everyday_shopping_A1", emoji: "💰", def: "Coins or notes used to buy things." },
    { word: "shop", theme: "local_places_services_A1", emoji: "🛒", def: "A place where you can buy things." },
    { word: "family", theme: "immediate_family_A1", emoji: "👪", def: "A group of people who are related." },
    { word: "friend", theme: "immediate_family_A1", emoji: "👫", def: "A person you like and know well." },
    { word: "day", theme: "times_day_A1", emoji: "☀️", def: "A period of 24 hours." },
    { word: "week", theme: "times_day_A1", emoji: "📅", def: "A period of seven days." },
    { word: "food", theme: "basic_foods_A1", emoji: "🍲", def: "Things that people eat." },
    { word: "breakfast", theme: "meals_of_the_day_A1", emoji: "🍳", def: "The first meal of the day." },
    { word: "lunch", theme: "meals_of_the_day_A1", emoji: "🍱", def: "A meal eaten in the middle of the day." },
    { word: "dinner", theme: "meals_of_the_day_A1", emoji: "🍽️", def: "The main meal, usually in the evening." },
    { word: "morning", theme: "times_day_A1", emoji: "🌅", def: "The part of the day before noon." },
    { word: "evening", theme: "times_day_A1", emoji: "🌆", def: "The part of the day after afternoon." },
    { word: "night", theme: "times_day_A1", emoji: "🌙", def: "The period of darkness." },
    { word: "today", theme: "times_day_A1", emoji: "📅", def: "On this day; the current day." },
    { word: "tomorrow", theme: "times_day_A1", emoji: "⏭️", def: "On the day after today." },
    { word: "husband", theme: "immediate_family_A1", emoji: "👨", def: "A married man." },
    { word: "wife", theme: "immediate_family_A1", emoji: "👩", def: "A married woman." },
    { word: "child", theme: "immediate_family_A1", emoji: "👶", def: "A young person; a son or daughter." },
    { word: "sun", theme: "weather_A1", emoji: "☀️", def: "The star that gives light and heat." },
    { word: "rain", theme: "weather_A1", emoji: "🌧️", def: "Water that falls from clouds." }
];

const hy = {
    words: ["բժիշկ", "ոտք", "ուսուցիչ", "պիցցա", "մակարոն", "խնձոր", "հաց", "ձու", "կաթ", "բանան", "սուրճ", "թեյ", "ջուր", "դպրոց", "շապիկ", "տաբատ", "կոշիկ", "գլխարկ", "աթոռ", "սեղան", "մահճակալ", "բանալի", "հեռախոս", "գիրք", "պայուսակ", "գրիչ", "կատու", "շուն", "ձեռք", "ոտք", "աչք", "քիթ", "բերան", "ականջ", "մայր", "հայր", "աշխատանք", "տուն", "մեքենա", "ավտոբուս", "գնացք", "փող", "խանութ", "ընտանիք", "ընկեր", "օր", "շաբաթ", "ուտելիք", "նախաճաշ", "ճաշ", "ընթրիք", "առավոտ", "երեկո", "գիշեր", "այսօր", "վաղը", "ամուսին", "կին", "երեխա", "արև", "անձրև"],
    defs: ["Մարդ, ով օգնում է հիվանդներին:", "Մարմնի մաս ոտքի ներքևում:", "Մարդ, ով օգնում է սովորել:", "Հաց պանրով և լոլիկով:", "Ալյուրից և ձվից պատրաստված ուտելիք:", "Կլոր միրգ, կարմիր կամ կանաչ:", "Ալյուրից և ջրից պատրաստված ուտելիք:", "Հավի ձու:", "Կովի սպիտակ հեղուկ:", "Երկար դեղին միրգ:", "Սուրճի հատիկներից պատրաստված տաք ըմպելիք:", "Տերևներից պատրաստված տաք ըմպելիք:", "Թափանցիկ հեղուկ, որը խմում ենք:", "Տեղ, որտեղ երեխաները սովորում են:", "Կարճ թևերով վերնաշապիկ:", "Հագուստ ոտքերի համար:", "Ինչ-որ բան, որ հագնում են ոտքերին:", "Ինչ-որ բան, որ դնում են գլխին:", "Կահույք նստելու համար:", "Կահույք չորս ոտքով:", "Կահույք քնելու համար:", "Մետաղյա առարկա դուռ բացելու համար:", "Սարք հեռվից խոսելու համար:", "Էջեր բառերով, որոնք կարդում եք:", "Տարա իրեր տեղափոխելու համար:", "Առարկա թանաքով գրելու համար:", "Փոքրիկ կենդանի:", "Մարդու լավագույն բարեկամը:", "Ձեռքի մասը մատներով:", "Մարմնի մաս քայլելու համար:", "Մարմնի մաս տեսնելու համար:", "Դեմքի մաս հոտառության համար:", "Դեմքի մաս ուտելու և խոսելու համար:", "Մարմնի մաս լսելու համար:", "Կին ծնող:", "Տղամարդ ծնող:", "Աշխատանք, տեղ փող աշխատելու համար:", "Տեղ, որտեղ ապրում եք:", "Չորս անիվով մեքենա:", "Մեծ մեքենա շատ մարդկանց համար:", "Մեքենա ռելսերի վրա:", "Մետաղադրամներ կամ թղթադրամներ:", "Տեղ, որտեղ գնումներ եք անում:", "Մարդկանց խումբ:", "Մարդ, ում դուք սիրում եք և լավ եք ճանաչում:", "24 ժամվա ընթացքում:", "Յոթ օրվա ընթացքում:", "Ինչ մարդիկ ուտում են:", "Օրվա առաջին ուտելիքը:", "Կեսօրվա ուտելիքը:", "Երեկոյան ուտելիքը:", "Օրվա մասը մինչև կեսօր:", "Օրվա մասը կեսօրից հետո:", "Մթության ժամանակաշրջան:", "Այսօրվա օրը:", "Այսօրվանից հետո հաջորդ օրը:", "Ամուսնացած տղամարդ:", "Ամուսնացած կին:", "Երիտասարդ մարդ:", "Աստղ, որը լույս և ջերմություն է տալիս:", "Անձրևի ջուրը, որը թափվում է ամպերից:"]
};

const ka = {
    words: ["ექიმი", "ფეხი", "მასწავლებელი", "პიცა", "პასტა", "ვაშლი", "პური", "კვერცხი", "რძე", "ბანანი", "ყავა", "ჩაი", "წყალი", "სკოლა", "მაისური", "შარვალი", "ფეხსაცმელი", "ქუდი", "სკამი", "მაგიდა", "საწოლი", "გასაღები", "ტელეფონი", "წიგნი", "ჩანთა", "კალამი", "კატა", "ძაღლი", "ხელი", "ფეხი", "თვალი", "ცხვირი", "პირი", "ყური", "დედა", "მამა", "მუშაობა", "სახლი", "მანქანა", "ავტობუსი", "მატარებელი", "ფული", "მაღაზია", "ოჯახი", "მეგობარი", "დღე", "კვირა", "საჭმელი", "საუზმე", "სადილი", "ვახშამი", "დილა", "საღამო", "ღამე", "დღეს", "ხვალ", "ქმარი", "ცოლი", "ბავშვი", "მზე", "წვიმა"],
    defs: ["ადამიანი, რომელიც ეხმარება ავადმყოფებს.", "სხეულის ნაწილი ფეხის ქვედა მხარეს.", "ადამიანი, რომელიც გეხმარება სწავლაში.", "ბრტყელი პური ყველით და პომიდორით.", "ფქვილისა და კვერცხისგან დამზადებული საკვები.", "მრგვალი ხილი, წითელი ან მწვანე.", "ფქვილისა და წყლისგან დამზადებული საკვები.", "ოვალური ობიექტი, რომელსაც დებს ქათამი.", "თეთრი სითხე ძროხისგან.", "გრძელი ყვითელი ხილი.", "ცხელი ყავისფერი სასმელი.", "ცხელი სასმელი ფოთლებისგან.", "გამჭვირვალე სითხე, რომელსაც ვსვამთ.", "ადგილი, სადაც ბავშვები სწავლობენ.", "მოსასხამი მოკლე სახელოებით.", "ტანსაცმელი ფეხებისთვის.", "რამე, რასაც იცვამთ ფეხზე.", "რამე, რასაც იხურავთ თავზე.", "ავეჯი ჯდომისთვის.", "ავეჯი ოთხი ფეხით.", "ავეჯი ძილისთვის.", "ლითონის ობიექტი კარის გასაღებად.", "მოწყობილობა ადამიანებთან სასაუბროდ.", "ბევრი გვერდი სიტყვებით, რომლებსაც კითხულობთ.", "კონტეინერი ნივთების გადასატანად.", "ობიექტი მელნით წერისთვის.", "პატარა ცხოველი ბეწვით.", "ადამიანის საუკეთესო მეგობარი.", "ხელის ნაწილი თითებით.", "სხეულის ნაწილი სიარულისთვის.", "სხეულის ნაწილი ხედვისთვის.", "სახის ნაწილი სუნთქვისთვის.", "სახის ნაწილი ჭამისა და ლაპარაკისთვის.", "სხეულის ნაწილი სმენისთვის.", "ქალი მშობელი.", "კაცი მშობელი.", "სამუშაო ადგილი.", "ადგილი, სადაც ცხოვრობთ.", "ოთხბორბლიანი მანქანა.", "დიდი მანქანა ბევრი ადამიანისთვის.", "მანქანა რელსებზე.", "მონეტები ან ბანკნოტები.", "ადგილი, სადაც ყიდულობთ ნივთებს.", "ადამიანთა ჯგუფი.", "ადამიანი, რომელიც გიყვართ და კარგად იცნობთ.", "24 საათიანი პერიოდი.", "შვიდდღიანი პერიოდი.", "რასაც ადამიანები ჭამენ.", "დღის პირველი კვება.", "შუადღის კვება.", "მთავარი კვება საღამოს.", "დღის ნაწილი შუადღემდე.", "დღის ნაწილი საღამომდე.", "სიბნელის პერიოდი.", "დღევანდელი დღე.", "დღე დღევანდელის შემდეგ.", "დაქორწინებული მამაკაცი.", "დაქორწინებული ქალი.", "ახალგაზრდა ადამიანი.", "ვარსკვლავი, რომელიც იძლევა სინათლესა და სითბოს.", "წყალი, რომელიც ღრუბლებიდან მოდის."]
};

const tt = {
    words: ["врач", "аяк", "укытучы", "пицца", "паста", "алма", "икмәк", "йомырка", "сөт", "банан", "кофе", "чәй", "су", "мәктәп", "футболка", "чалбар", "аяк киеме", "баш киеме", "урындык", "өстәл", "карават", "ачкыч", "телефон", "китап", "сумка", "ручка", "мәче", "эт", "кул", "аяк", "күз", "борын", "авыз", "колак", "әни", "әти", "эш", "өй", "машина", "автобус", "поезд", "акча", "кибет", "гаилә", "дус", "көн", "атна", "ризык", "иртәнге аш", "төшке аш", "кичке аш", "иртә", "кич", "төн", "бүген", "иртәгә", "ир", "хатын", "бала", "кояш", "яңгыр"],
    defs: ["Авыруларга ярдәм итүче кеше.", "Гәүдәнең аяк астындагы өлеше.", "Өйрәнергә ярдәм итүче кеше.", "Сыр һәм помидор белән яссы икмәк.", "Он һәм йомыркадан ясалган ризык.", "Түгәрәк җимеш, кызыл яки яшел.", "Он һәм судан ясалган гади ризык.", "Тавык салган оваль объект.", "Сыйырлардан алынган ак сыеклык.", "Озын сары җимеш.", "Кофе чөгендереннән ясалган кайнар эчемлек.", "Яфраклардан ясалган кайнар эчемлек.", "Без эчә торган үтә күренмәле сыеклык.", "Балалар укый торган урын.", "Кыска җиңле күлмәк.", "Аяклар өчен кием.", "Аякларга киелә торган нәрсә.", "Башка киелә торган нәрсә.", "Утыру өчен җиһаз.", "Дүрт аяклы җиһаз.", "Йоклау өчен җиһаз.", "Ишекне ачу өчен металл объект.", "Ерактагы кешеләр белән сөйләшү җайланмасы.", "Сез укыган сүзләр булган битләр.", "Әйберләр ташу өчен савыт.", "Сия белән язу өчен объект.", "Йонлы кечкенә хайван.", "Кешенең иң яхшы дусты.", "Кулның бармаклары булган өлеше.", "Гәүдәнең йөрү өчен өлеше.", "Гәүдәнең күрү өчен өлеше.", "Йөзнең ис сизү өчен өлеше.", "Йөзнең ашау һәм сөйләшү өчен өлеше.", "Гәүдәнең ишетү өчен өлеше.", "Ана булган хатын-кыз.", "Ата булган ир-ат.", "Акча эшли торган урын.", "Сез яши торган урын.", "Дүрт тәгәрмәчле машина.", "Күп кеше өчен зур машина.", "Рельслардагы машина.", "Тәңкәләр яки кәгазь акча.", "Әйберләр сатып алырга мөмкин булган урын.", "Туганнар төркеме.", "Сез яраткан кеше.", "24 сәгатьлек вакыт.", "Җиде көнлек вакыт.", "Кешеләр ашый торган әйберләр.", "Көннең беренче ризыгы.", "Көн уртасындагы ризык.", "Көннең төп ризыгы.", "Көннең төшкә кадәрге өлеше.", "Көннең кичкә кадәрге өлеше.", "Карангылык вакыты.", "Бу көн.", "Иртәгәге көн.", "Өйләнгән ир.", "Кияүдәге хатын.", "Яшь кеше.", "Яктылык һәм җылылык бирүче йолдыз.", "Болытлардан төшкән су."]
};

const ba = {
    words: ["врач", "аяк", "уҡытыусы", "пицца", "паста", "алма", "икмәк", "йомортҡа", "һөт", "банан", "кофе", "сәй", "һыу", "мәктәп", "футболка", "салбар", "аяк киеме", "баш кейеме", "олтырғыс", "өҫтәл", "карауат", "асҡыс", "телефон", "китап", "сумка", "ручка", "беше", "эт", "ҡул", "аяк", "күҙ", "борон", "ауыҙ", "ҡолаҡ", "әсәй", "атай", "эш", "өй", "машина", "автобус", "поезд", "аҡса", "кибет", "ғаилә", "дуҫ", "көн", "атна", "аҙыҡ", "иртәнге аш", "төшке аш", "киске аш", "иртә", "кич", "төн", "бөгөн", "иртәгә", "ир", "ҡатын", "бала", "ҡояш", "яңгыр"],
    defs: ["Ауырыуҙарға ярҙам иткән кеше.", "Кәүҙәнең аяк аҫтындағы өлешө.", "Өйрәнергә ярҙам иткән кеше.", "Сыр һәм помидор менән яҫы икмәк.", "Он һәм йомортҡанан яһалған аҙыҡ.", "Түңәрәк емеш, ҡыҙыл йәки йәшел.", "Он һәм һыуҙан яһалған ябай аҙыҡ.", "Тауыҡ һалған оваль объект.", "Һыйырҙарҙан алынған аҡ һыйыҡлыҡ.", "Оҙон һары емеш.", "Кофе сөгендеренән яһалған ҡайнар эсемлек.", "Япраҡтарҙан яһалған ҡайнар эсемлек.", "Беҙ эсә торған үтә күренмәле һыйыҡлыҡ.", "Балалар уҡыған урын.", "Ҡыҫҡа еңле күлдәк.", "Аяктар өсөн кейем.", "Аяктарға кейелә торған нәмә.", "Башҡа кейелә торған нәмә.", "Олтырыу өсөн йыһаз.", "Дүрт аяклы йыһаз.", "Йоҡлау өсөн йыһаз.", "Ишекте асыу өсөн металл объект.", "Алыҫтағы кешеләр менән һөйләшеү ҡулайламаһы.", "Сез уҡыған һүҙҙәр булған битләр.", "Әйберҙәр ташыу өсөн һауыт.", "Сия менән яҙыу өсөн объект.", "Йөнлө кескәй хайван.", "Кешенең иң яҡшы дуҫы.", "Ҡулдың бармаҡтары булған өлешө.", "Кәүҙәнең йөрөү өсөн өлешө.", "Кәүҙәнең күреү өсөн өлешө.", "Йөҙҙөң еҫ һиҙеү өсөн өлешө.", "Йөҙҙөң ашау һәм һөйләшеү өсөн өлешө.", "Кәүҙәнең ишетеү өсөн өлешө.", "Әсәй булған ҡатын-ҡыҙ.", "Атай булған ир-ат.", "Аҡса эшләгән урын.", "Һеҙ йәшәгән урын.", "Дүрт тәгәрмәсле машина.", "Күп кеше өсөн ҙур машина.", "Рельстарҙағы машина.", "Тәңкәләр йәки ҡағыҙ аҡса.", "Әйберҙәр һатып алырға мөмкин булған урын.", "Туғандар төркөмө.", "Сез яратҡан кеше.", "24 сәғәтлек вакыт.", "Ете көнлөк вакыт.", "Кешеләр ашаған нәмәләр.", "Көндөң беренсе аҙығы.", "Көн уртаһындағы аҙыҡ.", "Көндөң төп аҙығы.", "Көндөң төшкә тиклемге өлешө.", "Көндөң кискә тиклемге өлешө.", "Ҡараңғылыҡ вакыты.", "Бөгөнгө көн.", "Иртәгәге көн.", "Өйләнгән ир.", "Кейәүҙәге ҡатын.", "Йәш кеше.", "Яҡтылыҡ һәм йылылыҡ биреүсе йондоҙ.", "Болоттарҙан төшкән һыу."]
};

const br = {
    words: ["medisin", "troad", "kelenner", "pizza", "pasta", "aval", "取得", "vi", "laezh", "banana", "kafe", "te", "dour", "skol", "t-shirt", "bragoù", "botez", "tog", "kador", "taol", "gwele", "alc'hwez", "pellgomz", "levr", "sac'h", "stilo", "kazh", "ki", "dorn", "gar", "lagad", "fri", "genou", "skouarn", "mamm", "tad", "labour", "gêr", "karr", "karr-boutin", "tren", "arc'hant", "stal", "familh", "mignon", "deiz", "sizhun", "boued", "lein", "merenn", "koan", "mintin", "noz", "teñvalijenn", "hiziv", "warc'hoazh", "gwaz", "gwreg", "bugel", "heol", "glav"],
    defs: ["Un den a sikour ar re glañv.", "Lid ar c'horf e traoñ ar c'har.", "Un den a sikour da zeskiñ.", "Bara plat gant keuz ha tomatez.", "Boued graet gant bleud ha vioù.", "Ur frouezhenn ront, ruz pe wer.", "Ur boued boutin graet gant bleud ha dour.", "Un dra vi lakaet gant ur yar.", "Ul livenn wenn produet gant saout.", "Ur frouezhenn velen hir.", "Un evaj rous tomm graet gant greun kafe.", "Un evaj tomm graet gant dour ha delioù te.", "Ul livenn splann a evomp.", "Ul lec'h ma ya ar vugale da zeskiñ.", "Ur roched skañv gant milginoù berr.", "Ur gwiskamant evit ar gar.", "Un dra a lakaer war an treid.", "Un dra a lakaer war ar penn.", "Ur pezh arrebeuri evit azezañ.", "Ur pezh arrebeuri gant pevar zroad.", "Ur pezh arrebeuri evit kousket.", "Un dra vetal evit digeriñ un nor.", "Un dra evit komz ouzh an dud bell.", "Meur a bajenn gant gerioù a lennit.", "Ur barrikenn evit dougen traoù.", "Un dra evit skrivañ gant liv.", "Ul loen bihan gant blev.", "Mignon gwellañ an den.", "Lid ar vrec'h gant bizied.", "Lid ar c'horf evit bale.", "Lid ar c'horf evit gwelet.", "Lid ar dremm evit klevout an ez.", "Lid ar dremm evit debriñ ha komz.", "Lid ar c'horf evit klevout.", "Ur vaouez hag a zo tad pe vamm.", "Un den hag a zo tad pe vamm.", "Ul labour; ul lec'h evit gounit arc'hant.", "Al lec'h ma vevit.", "Ur c'harr gant peder rod.", "Ur c'harr bras evit kalz a dud.", "Ur c'harr war hentoù-houarn.", "Pezhioù pe bilhedoù arc'hant.", "Ul lec'h ma c'hallit prenañ traoù.", "Ur strollad tud eus ar memes tiegezh.", "Un den a blij deoc'h ha a anavezit mat.", "Ur prantad 24 eurvezh.", "Ur prantad seizh devezh.", "Traoù a vez debret gant an dud.", "Ar pred kentañ eus an deiz.", "Ar pred da greisteiz.", "Ar pred pennañ, d'an noz peurvuiañ.", "Lid an deiz a-raok kreisteiz.", "Lid an deiz goude merenn.", "Ar prantad teñval.", "An deiz-mañ.", "An deiz goude hiziv.", "Un den dimezet.", "Ur vaouez dimezet.", "Un den yaouank.", "Ar steredenn a ro sklêrijenn ha gwrez.", "Dour a gouezh eus ar c'houmoul."]
};

const otherDirs = { hy: 'armenian', ka: 'kartvelian', tt: 'turkic', ba: 'turkic', br: 'celtic' };
const datasets = { hy, ka, tt, ba, br };

Object.entries(datasets).forEach(([lang, trans]) => {
    const data = enRef.map((item, i) => {
        return {
            word: trans.words[i],
            level: "starter",
            theme: item.theme,
            emoji: item.emoji,
            form: "noun",
            definitions: [{ text: trans.defs[i], examples: [] }]
        };
    });
    const content = `(function() {
    const data = ${JSON.stringify(data, null, 4)};
    const lang = "${lang}";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();`;
    fs.writeFileSync(`js/data/${otherDirs[lang]}/${lang}/starter/vocabulary.js`, content);
});
