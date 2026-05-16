(function() {
    const lang = "ka";
    const data = [
        {
            "word": "ინტერდისციპლინური",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🧪",
            "form": "adjective",
            "definitions": [{ "text": "რომელიც ეხება ან აერთიანებს ორ ან მეტ აკადემიურ სფეროს." }]
        },
        {
            "word": "ჰერმენევტიკული",
            "level": "proficiency",
            "theme": "philosophy_language_C2",
            "emoji": "📜",
            "form": "adjective",
            "definitions": [{ "text": "ტექსტების ან მნიშვნელობის ინტერპრეტაციასთან დაკავშირებული." }]
        },
        {
            "word": "ტავტოლოგიური",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🔄",
            "form": "adjective",
            "definitions": [{ "text": "იგივე რამის სხვა სიტყვებით გამეორება; ციკლური მსჯელობა." }]
        },
        {
            "word": "პოლისემიური",
            "level": "proficiency",
            "theme": "linguistics_theory_C2",
            "emoji": "🔠",
            "form": "adjective",
            "definitions": [{ "text": "რომელსაც მრავალი მნიშვნელობა აქვს." }]
        },
        {
            "word": "ევრისტიკული",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "💡",
            "form": "adjective",
            "definitions": [{ "text": "პრობლემის გადაჭრის მიდგომა, რომელიც დაფუძნებულია გამოცდილებაზე და არა გარანტირებულ მტკიცებულებაზე." }]
        },
        {
            "word": "პოსტკოლონიური",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🌍",
            "form": "adjective",
            "definitions": [{ "text": "კოლონიალიზმის შემდგომ პერიოდთან ან კოლონიური მემკვიდრეობის კრიტიკასთან დაკავშირებული." }]
        },
        {
            "word": "მულტიპოლარული",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🌐",
            "form": "adjective",
            "definitions": [{ "text": "მსოფლიო წესრიგი, რომელსაც აქვს ძალაუფლების რამდენიმე ცენტრი ერთი ან ორის ნაცვლად." }]
        },
        {
            "word": "კოსმოპოლიტური",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🏙️",
            "form": "adjective",
            "definitions": [{ "text": "ბევრი სხვადასხვა ქვეყნისა და კულტურის მცოდნე და მათში თავდაჯერებული." }]
        },
        {
            "word": "ნარცისული",
            "level": "proficiency",
            "theme": "psychoanalysis_unconscious_C2",
            "emoji": "🪞",
            "form": "adjective",
            "definitions": [{ "text": "საკუთარი თავის, გარეგნობის ან მიღწევებისადმი გადაჭარბებული ინტერესის მქონე." }]
        },
        {
            "word": "ჰეტეროდოქსული",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🚩",
            "form": "adjective",
            "definitions": [{ "text": "დადგენილი ან მიღებული რწმენის საწინააღმდეგო." }]
        },
        {
            "word": "იმანენტური",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "⚛️",
            "form": "adjective",
            "definitions": [{ "text": "რაღაცის შიგნით არსებული ან მოქმედი; არა ტრანსცენდენტური." }]
        },
        {
            "word": "მკვეთრი",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "⏱️",
            "form": "adjective",
            "definitions": [{ "text": "უეცარი და მოულოდნელი; უხეში ქცევაში." }]
        },
        {
            "word": "აბსტრუსული",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🧐",
            "form": "adjective",
            "definitions": [{ "text": "ძნელად გასაგები; გაუგებარი ან რთული." }]
        },
        {
            "word": "ანაქრონისტული",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "⌛",
            "form": "adjective",
            "definitions": [{ "text": "მოძველებული; ადრეულ პერიოდს მიკუთვნებული." }]
        },
        {
            "word": "ანტითეტიკური",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [{ "text": "რაღაცის პირდაპირ საწინააღმდეგო." }]
        },
        {
            "word": "არკანული",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🔮",
            "form": "adjective",
            "definitions": [{ "text": "მხოლოდ რჩეულთათვის ცნობილი; იდუმალი და საიდუმლო." }]
        },
        {
            "word": "ატიპიური",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🦄",
            "form": "adjective",
            "definitions": [{ "text": "არა ტიპური; არა ნორმალური ან არა ჩვეულებრივი." }]
        },
        {
            "word": "ბინარული",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🔢",
            "form": "adjective",
            "definitions": [{ "text": "ორი ნაწილისგან შემდგარი; დიქოტომიაზე დაფუძნებული." }]
        },
        {
            "word": "კატეგორიული",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "❗",
            "form": "adjective",
            "definitions": [{ "text": "აბსოლუტური; ყოველგვარი გამონაკლისის ან პირობის გარეშე გამოთქმული." }]
        },
        {
            "word": "წინდახედული",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "🛡️",
            "form": "adjective",
            "definitions": [{ "text": "ფრთხილი, რომელიც ყველა გარემოებას ითვალისწინებს." }]
        },
        {
            "word": "ფარული",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🕵️",
            "form": "adjective",
            "definitions": [{ "text": "დაფარული; საჯაროდ აღიარების გარეშე." }]
        },
        {
            "word": "დიალექტიკური",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [{ "text": "იდეების ლოგიკურ განხილვასთან დაკავშირებული საწინააღმდეგო მხარეების მეშვეობით." }]
        },
        {
            "word": "დიფუზური",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌫️",
            "form": "adjective",
            "definitions": [{ "text": "დიდ ფართობზე გავრცელებული; სიცხადის ნაკლებობის მქონე." }]
        },
        {
            "word": "მიუღწეველი",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🌬️",
            "form": "adjective",
            "definitions": [{ "text": "ძნელად მოსაძებნი, დასაჭერი ან მისაღწევი." }]
        },
        {
            "word": "ეზოთერული",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🗝️",
            "form": "adjective",
            "definitions": [{ "text": "მხოლოდ მცირე ჯგუფისთვის გასაგები ან განკუთვნილი." }]
        },
        {
            "word": "მცდარი",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "❌",
            "form": "adjective",
            "definitions": [{ "text": "ცრუ მსჯელობაზე დაფუძნებული; შეცდომაში შემყვანი." }]
        },
        {
            "word": "უცვლელი",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🧱",
            "form": "adjective",
            "definitions": [{ "text": "რომლის შეცვლაც შეუძლებელია; ფიქსირებული და მუდმივი." }]
        },
        {
            "word": "მიუკერძოებელი",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [{ "text": "რომელიც არ ანიჭებს უპირატესობას არცერთ მხარეს; სამართლიანი." }]
        },
        {
            "word": "თანამგზავრი",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🍃",
            "form": "adjective",
            "definitions": [{ "text": "რომელიც ხდება როგორც სხვა რამის უმნიშვნელო ნაწილი." }]
        },
        {
            "word": "თანდაყოლილი",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "⚛️",
            "form": "adjective",
            "definitions": [{ "text": "რომელიც არსებობს რაღაცაში როგორც ბუნებრივი და მუდმივი თვისება." }]
        },
        {
            "word": "განუმეორებელი",
            "level": "proficiency",
            "theme": "aesthetics_criticism_C2",
            "emoji": "🌟",
            "form": "adjective",
            "definitions": [{ "text": "ისეთი კარგი ან არაჩვეულებრივი, რომ მისი კოპირება შეუძლებელია." }]
        },
        {
            "word": "ვერაგული",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "🐍",
            "form": "adjective",
            "definitions": [{ "text": "ეტაპობრივად მავნე გზით განვითარებადი." }]
        },
        {
            "word": "შეურიგებელი",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🚫",
            "form": "adjective",
            "definitions": [{ "text": "რომლის შერიგება ან თავსებადობის მიღწევა შეუძლებელია." }]
        },
        {
            "word": "ლიმინალური",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🚪",
            "form": "adjective",
            "definitions": [{ "text": "გარდამავალ ან შუალედურ მდგომარეობასთან დაკავშირებული." }]
        },
        {
            "word": "მრავალფეროვანი",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🔢",
            "form": "adjective",
            "definitions": [{ "text": "მრავალრიცხოვანი და მრავალგვარი." }]
        },
        {
            "word": "ბუნდოვანი",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "☁️",
            "form": "adjective",
            "definitions": [{ "text": "გაურკვეველი; ბუნდოვანი და ცუდად განსაზღვრული." }]
        },
        {
            "word": "ნორმატიული",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "📏",
            "form": "adjective",
            "definitions": [{ "text": "ნორმასთან დაკავშირებული; რომელიც ადგენს იმას, რაც უნდა იყოს." }]
        },
        {
            "word": "ნიუანსირებული",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌗",
            "form": "adjective",
            "definitions": [{ "text": "რომელიც აჩვენებს ნატიფ განსხვავებებს; არა მარტივი ან უკიდურესი." }]
        },
        {
            "word": "ირიბი",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "↗️",
            "form": "adjective",
            "definitions": [{ "text": "არა პირდაპირი; ირიბი; არა ღია." }]
        },
        {
            "word": "გაუმჭვირვალე",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌑",
            "form": "adjective",
            "definitions": [{ "text": "არა გამჭვირვალე; ძნელად გასაგები." }]
        },
        {
            "word": "მოჩვენებითი",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🎭",
            "form": "adjective",
            "definitions": [{ "text": "რომელიც რაღაცად ჩანს; რეალურად ან ჭეშმარიტად გამოცხადებული." }]
        },
        {
            "word": "პარადოქსული",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🔄",
            "form": "adjective",
            "definitions": [{ "text": "საკუთარ თავს ეწინააღმდეგება, მაგრამ შეიცავს ჭეშმარიტებას." }]
        },
        {
            "word": "ყოველგანმსჭვალავი",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌊",
            "form": "adjective",
            "definitions": [{ "text": "ყველგან არსებული; ფართოდ გავრცელებული." }]
        },
        {
            "word": "პოლარიზებადი",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🧲",
            "form": "adjective",
            "definitions": [{ "text": "რომელიც აიძულებს ადამიანებს დაიკავონ საწინააღმდეგო პოზიციები." }]
        },
        {
            "word": "არამდგრადი",
            "level": "proficiency",
            "theme": "ontology_existence_C2",
            "emoji": "🧗",
            "form": "adjective",
            "definitions": [{ "text": "არა უსაფრთხო და არა საიმედო; შემთხვევითობაზე დამოკიდებული." }]
        },
        {
            "word": "პრესკრიპციული",
            "level": "proficiency",
            "theme": "linguistics_theory_C2",
            "emoji": "📜",
            "form": "adjective",
            "definitions": [{ "text": "რომელიც კარნახობს რა უნდა გაკეთდეს; წესების დამადგენი." }]
        },
        {
            "word": "გაჭიანურებული",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "⌛",
            "form": "adjective",
            "definitions": [{ "text": "რომელიც მოსალოდნელზე მეტხანს გრძელდება." }]
        },
        {
            "word": "რედუქციული",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "📉",
            "form": "adjective",
            "definitions": [{ "text": "რომელიც ზედმეტად ამარტივებს რთულ რამეს." }]
        },
        {
            "word": "ფუძემდებლური",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌱",
            "form": "adjective",
            "definitions": [{ "text": "ძალიან მნიშვნელოვანი და გავლენიანი; ორიგინალური." }]
        },
        {
            "word": "სპეციოზური",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🤥",
            "form": "adjective",
            "definitions": [{ "text": "რომელიც სწორად ჩანს, მაგრამ რეალურად მცდარია; შეცდომაში შემყვანი." }]
        },
        {
            "word": "ყალბი",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🤡",
            "form": "adjective",
            "definitions": [{ "text": "არა ნამდვილი; მცდარ მსჯელობაზე დაფუძნებული." }]
        },
        {
            "word": "სუბვერსიული",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "💣",
            "form": "adjective",
            "definitions": [{ "text": "მიმართული დადგენილი სისტემის შერყევისკენ." }]
        },
        {
            "word": "უხმო",
            "level": "proficiency",
            "theme": "philosophy_language_C2",
            "emoji": "🤫",
            "form": "adjective",
            "definitions": [{ "text": "სიტყვების გარეშე გასაგები ან შეთანხმებული." }]
        },
        {
            "word": "სუსტი",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🕸️",
            "form": "adjective",
            "definitions": [{ "text": "ძალიან სუსტი ან უმნიშვნელო; არა მყარად დადგენილი." }]
        },
        {
            "word": "წარმავალი",
            "level": "proficiency",
            "theme": "mortality_time_C2",
            "emoji": "🌅",
            "form": "adjective",
            "definitions": [{ "text": "არა მუდმივი; სწრაფად გამავალი." }]
        },
        {
            "word": "უბიკვიტური",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌍",
            "form": "adjective",
            "definitions": [{ "text": "ყველგან არსებული; ძალიან გავრცელებული." }]
        },
        {
            "word": "ცალსახა",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "📢",
            "form": "adjective",
            "definitions": [{ "text": "რომელიც ეჭვს არ ტოვებს; სრულიად ნათელი." }]
        },
        {
            "word": "უპრეცედენტო",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🚀",
            "form": "adjective",
            "definitions": [{ "text": "რომელიც აქამდე არასდროს მომხდარა." }]
        },
        {
            "word": "დაუცველი",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🏗️",
            "form": "adjective",
            "definitions": [{ "text": "რომლის შენარჩუნება ან დაცვა შეუძლებელია." }]
        },
        {
            "word": "მოუხერხებელი",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "📦",
            "form": "adjective",
            "definitions": [{ "text": "ძნელად სამართავი ზომის ან სირთულის გამო." }]
        }
    ];

    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
