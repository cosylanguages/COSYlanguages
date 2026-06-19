// TODO: verify level classification
(function() {
    const lang = "ka";
    const data = [
    {
        "word": "ინტერდისციპლინური",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧪",
        "form": "adjective",
        "definitions": [
            {
                "text": "რომელიც ეხება ან აერთიანებს ორ ან მეტ აკადემიურ სფეროს.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_001"
    },
    {
        "word": "ჰერმენევტიკული",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📜",
        "form": "adjective",
        "definitions": [
            {
                "text": "ტექსტების ან მნიშვნელობის ინტერპრეტაციასთან დაკავშირებული.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_002"
    },
    {
        "word": "ტავტოლოგიური",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔄",
        "form": "adjective",
        "definitions": [
            {
                "text": "იგივე რამის სხვა სიტყვებით გამეორება; ციკლური მსჯელობა.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_003"
    },
    {
        "word": "პოლისემიური",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔠",
        "form": "adjective",
        "definitions": [
            {
                "text": "რომელსაც მრავალი მნიშვნელობა აქვს.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_004"
    },
    {
        "word": "ევრისტიკული",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💡",
        "form": "adjective",
        "definitions": [
            {
                "text": "პრობლემის გადაჭრის მიდგომა, რომელიც დაფუძნებულია გამოცდილებაზე და არა გარანტირებულ მტკიცებულებაზე.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_psychology_001"
    },
    {
        "word": "პოსტკოლონიური",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🌍",
        "form": "adjective",
        "definitions": [
            {
                "text": "კოლონიალიზმის შემდგომ პერიოდთან ან კოლონიური მემკვიდრეობის კრიტიკასთან დაკავშირებული.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_social_001"
    },
    {
        "word": "მულტიპოლარული",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🌐",
        "form": "adjective",
        "definitions": [
            {
                "text": "მსოფლიო წესრიგი, რომელსაც აქვს ძალაუფლების რამდენიმე ცენტრი ერთი ან ორის ნაცვლად.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_social_002"
    },
    {
        "word": "კოსმოპოლიტური",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🏙️",
        "form": "adjective",
        "definitions": [
            {
                "text": "ბევრი სხვადასხვა ქვეყნისა და კულტურის მცოდნე და მათში თავდაჯერებული.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_social_003"
    },
    {
        "word": "ნარცისული",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🪞",
        "form": "adjective",
        "definitions": [
            {
                "text": "საკუთარი თავის, გარეგნობის ან მიღწევებისადმი გადაჭარბებული ინტერესის მქონე.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_psychology_002"
    },
    {
        "word": "ჰეტეროდოქსული",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚩",
        "form": "adjective",
        "definitions": [
            {
                "text": "დადგენილი ან მიღებული რწმენის საწინააღმდეგო.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_005"
    },
    {
        "word": "იმანენტური",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚛️",
        "form": "adjective",
        "definitions": [
            {
                "text": "რაღაცის შიგნით არსებული ან მოქმედი; არა ტრანსცენდენტური.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_006"
    },
    {
        "word": "მკვეთრი",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⏱️",
        "form": "adjective",
        "definitions": [
            {
                "text": "უეცარი და მოულოდნელი; უხეში ქცევაში.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_007"
    },
    {
        "word": "აბსტრუსული",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🧐",
        "form": "adjective",
        "definitions": [
            {
                "text": "ძნელად გასაგები; გაუგებარი ან რთული.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_psychology_003"
    },
    {
        "word": "ანაქრონისტული",
        "level": "proficiency",
        "theme": "time",
        "emoji": "⌛",
        "form": "adjective",
        "definitions": [
            {
                "text": "მოძველებული; ადრეულ პერიოდს მიკუთვნებული.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_time_001"
    },
    {
        "word": "ანტითეტიკური",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "რაღაცის პირდაპირ საწინააღმდეგო.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_008"
    },
    {
        "word": "არკანული",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🔮",
        "form": "adjective",
        "definitions": [
            {
                "text": "მხოლოდ რჩეულთათვის ცნობილი; იდუმალი და საიდუმლო.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_psychology_004"
    },
    {
        "word": "ატიპიური",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🦄",
        "form": "adjective",
        "definitions": [
            {
                "text": "არა ტიპური; არა ნორმალური ან არა ჩვეულებრივი.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_009"
    },
    {
        "word": "ბინარული",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔢",
        "form": "adjective",
        "definitions": [
            {
                "text": "ორი ნაწილისგან შემდგარი; დიქოტომიაზე დაფუძნებული.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_010"
    },
    {
        "word": "კატეგორიული",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❗",
        "form": "adjective",
        "definitions": [
            {
                "text": "აბსოლუტური; ყოველგვარი გამონაკლისის ან პირობის გარეშე გამოთქმული.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_011"
    },
    {
        "word": "წინდახედული",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛡️",
        "form": "adjective",
        "definitions": [
            {
                "text": "ფრთხილი, რომელიც ყველა გარემოებას ითვალისწინებს.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_social_004"
    },
    {
        "word": "ფარული",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🕵️",
        "form": "adjective",
        "definitions": [
            {
                "text": "დაფარული; საჯაროდ აღიარების გარეშე.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_social_005"
    },
    {
        "word": "დიალექტიკური",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "იდეების ლოგიკურ განხილვასთან დაკავშირებული საწინააღმდეგო მხარეების მეშვეობით.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_012"
    },
    {
        "word": "დიფუზური",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌫️",
        "form": "adjective",
        "definitions": [
            {
                "text": "დიდ ფართობზე გავრცელებული; სიცხადის ნაკლებობის მქონე.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_013"
    },
    {
        "word": "მიუღწეველი",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🌬️",
        "form": "adjective",
        "definitions": [
            {
                "text": "ძნელად მოსაძებნი, დასაჭერი ან მისაღწევი.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_psychology_005"
    },
    {
        "word": "ეზოთერული",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🗝️",
        "form": "adjective",
        "definitions": [
            {
                "text": "მხოლოდ მცირე ჯგუფისთვის გასაგები ან განკუთვნილი.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_psychology_006"
    },
    {
        "word": "მცდარი",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❌",
        "form": "adjective",
        "definitions": [
            {
                "text": "ცრუ მსჯელობაზე დაფუძნებული; შეცდომაში შემყვანი.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_014"
    },
    {
        "word": "უცვლელი",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧱",
        "form": "adjective",
        "definitions": [
            {
                "text": "რომლის შეცვლაც შეუძლებელია; ფიქსირებული და მუდმივი.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_015"
    },
    {
        "word": "მიუკერძოებელი",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "რომელიც არ ანიჭებს უპირატესობას არცერთ მხარეს; სამართლიანი.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_social_006"
    },
    {
        "word": "თანამგზავრი",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🍃",
        "form": "adjective",
        "definitions": [
            {
                "text": "რომელიც ხდება როგორც სხვა რამის უმნიშვნელო ნაწილი.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_016"
    },
    {
        "word": "თანდაყოლილი",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚛️",
        "form": "adjective",
        "definitions": [
            {
                "text": "რომელიც არსებობს რაღაცაში როგორც ბუნებრივი და მუდმივი თვისება.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_017"
    },
    {
        "word": "განუმეორებელი",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "🌟",
        "form": "adjective",
        "definitions": [
            {
                "text": "ისეთი კარგი ან არაჩვეულებრივი, რომ მისი კოპირება შეუძლებელია.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_art_culture_001"
    },
    {
        "word": "ვერაგული",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🐍",
        "form": "adjective",
        "definitions": [
            {
                "text": "ეტაპობრივად მავნე გზით განვითარებადი.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_social_007"
    },
    {
        "word": "შეურიგებელი",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚫",
        "form": "adjective",
        "definitions": [
            {
                "text": "რომლის შერიგება ან თავსებადობის მიღწევა შეუძლებელია.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_018"
    },
    {
        "word": "ლიმინალური",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚪",
        "form": "adjective",
        "definitions": [
            {
                "text": "გარდამავალ ან შუალედურ მდგომარეობასთან დაკავშირებული.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_019"
    },
    {
        "word": "მრავალფეროვანი",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔢",
        "form": "adjective",
        "definitions": [
            {
                "text": "მრავალრიცხოვანი და მრავალგვარი.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_020"
    },
    {
        "word": "ბუნდოვანი",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "☁️",
        "form": "adjective",
        "definitions": [
            {
                "text": "გაურკვეველი; ბუნდოვანი და ცუდად განსაზღვრული.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_psychology_007"
    },
    {
        "word": "ნორმატიული",
        "level": "proficiency",
        "theme": "social",
        "emoji": "📏",
        "form": "adjective",
        "definitions": [
            {
                "text": "ნორმასთან დაკავშირებული; რომელიც ადგენს იმას, რაც უნდა იყოს.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_social_008"
    },
    {
        "word": "ნიუანსირებული",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌗",
        "form": "adjective",
        "definitions": [
            {
                "text": "რომელიც აჩვენებს ნატიფ განსხვავებებს; არა მარტივი ან უკიდურესი.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_021"
    },
    {
        "word": "ირიბი",
        "level": "proficiency",
        "theme": "language",
        "emoji": "↗️",
        "form": "adjective",
        "definitions": [
            {
                "text": "არა პირდაპირი; ირიბი; არა ღია.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_022"
    },
    {
        "word": "გაუმჭვირვალე",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌑",
        "form": "adjective",
        "definitions": [
            {
                "text": "არა გამჭვირვალე; ძნელად გასაგები.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_023"
    },
    {
        "word": "მოჩვენებითი",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🎭",
        "form": "adjective",
        "definitions": [
            {
                "text": "რომელიც რაღაცად ჩანს; რეალურად ან ჭეშმარიტად გამოცხადებული.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_024"
    },
    {
        "word": "პარადოქსული",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔄",
        "form": "adjective",
        "definitions": [
            {
                "text": "საკუთარ თავს ეწინააღმდეგება, მაგრამ შეიცავს ჭეშმარიტებას.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_025"
    },
    {
        "word": "ყოველგანმსჭვალავი",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌊",
        "form": "adjective",
        "definitions": [
            {
                "text": "ყველგან არსებული; ფართოდ გავრცელებული.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_time_002"
    },
    {
        "word": "პოლარიზებადი",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🧲",
        "form": "adjective",
        "definitions": [
            {
                "text": "რომელიც აიძულებს ადამიანებს დაიკავონ საწინააღმდეგო პოზიციები.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_social_009"
    },
    {
        "word": "არამდგრადი",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧗",
        "form": "adjective",
        "definitions": [
            {
                "text": "არა უსაფრთხო და არა საიმედო; შემთხვევითობაზე დამოკიდებული.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_026"
    },
    {
        "word": "პრესკრიპციული",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📜",
        "form": "adjective",
        "definitions": [
            {
                "text": "რომელიც კარნახობს რა უნდა გაკეთდეს; წესების დამადგენი.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_027"
    },
    {
        "word": "გაჭიანურებული",
        "level": "proficiency",
        "theme": "time",
        "emoji": "⌛",
        "form": "adjective",
        "definitions": [
            {
                "text": "რომელიც მოსალოდნელზე მეტხანს გრძელდება.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_time_003"
    },
    {
        "word": "რედუქციული",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📉",
        "form": "adjective",
        "definitions": [
            {
                "text": "რომელიც ზედმეტად ამარტივებს რთულ რამეს.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_028"
    },
    {
        "word": "ფუძემდებლური",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌱",
        "form": "adjective",
        "definitions": [
            {
                "text": "ძალიან მნიშვნელოვანი და გავლენიანი; ორიგინალური.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_time_004"
    },
    {
        "word": "სპეციოზური",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤥",
        "form": "adjective",
        "definitions": [
            {
                "text": "რომელიც სწორად ჩანს, მაგრამ რეალურად მცდარია; შეცდომაში შემყვანი.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_029"
    },
    {
        "word": "ყალბი",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤡",
        "form": "adjective",
        "definitions": [
            {
                "text": "არა ნამდვილი; მცდარ მსჯელობაზე დაფუძნებული.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_030"
    },
    {
        "word": "სუბვერსიული",
        "level": "proficiency",
        "theme": "social",
        "emoji": "💣",
        "form": "adjective",
        "definitions": [
            {
                "text": "მიმართული დადგენილი სისტემის შერყევისკენ.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_social_010"
    },
    {
        "word": "უხმო",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤫",
        "form": "adjective",
        "definitions": [
            {
                "text": "სიტყვების გარეშე გასაგები ან შეთანხმებული.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_031"
    },
    {
        "word": "სუსტი",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🕸️",
        "form": "adjective",
        "definitions": [
            {
                "text": "ძალიან სუსტი ან უმნიშვნელო; არა მყარად დადგენილი.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_032"
    },
    {
        "word": "წარმავალი",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌅",
        "form": "adjective",
        "definitions": [
            {
                "text": "არა მუდმივი; სწრაფად გამავალი.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_time_005"
    },
    {
        "word": "უბიკვიტური",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌍",
        "form": "adjective",
        "definitions": [
            {
                "text": "ყველგან არსებული; ძალიან გავრცელებული.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_time_006"
    },
    {
        "word": "ცალსახა",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📢",
        "form": "adjective",
        "definitions": [
            {
                "text": "რომელიც ეჭვს არ ტოვებს; სრულიად ნათელი.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_033"
    },
    {
        "word": "უპრეცედენტო",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🚀",
        "form": "adjective",
        "definitions": [
            {
                "text": "რომელიც აქამდე არასდროს მომხდარა.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_time_007"
    },
    {
        "word": "დაუცველი",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🏗️",
        "form": "adjective",
        "definitions": [
            {
                "text": "რომლის შენარჩუნება ან დაცვა შეუძლებელია.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_034"
    },
    {
        "word": "მოუხერხებელი",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📦",
        "form": "adjective",
        "definitions": [
            {
                "text": "ძნელად სამართავი ზომის ან სირთულის გამო.",
                "examples": []
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_035"
    }
];

    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
