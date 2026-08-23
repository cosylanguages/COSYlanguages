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
        "id": "ka_proficiency_language_001",
        "transcription": ""
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
        "id": "ka_proficiency_language_002",
        "transcription": ""
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
        "id": "ka_proficiency_language_003",
        "transcription": ""
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
        "id": "ka_proficiency_language_004",
        "transcription": ""
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
        "id": "ka_proficiency_psychology_001",
        "transcription": ""
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
        "id": "ka_proficiency_social_001",
        "transcription": ""
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
        "id": "ka_proficiency_social_002",
        "transcription": ""
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
        "id": "ka_proficiency_social_003",
        "transcription": ""
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
        "id": "ka_proficiency_psychology_002",
        "transcription": ""
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
        "id": "ka_proficiency_language_005",
        "transcription": ""
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
        "id": "ka_proficiency_language_006",
        "transcription": ""
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
        "id": "ka_proficiency_language_007",
        "transcription": ""
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
        "id": "ka_proficiency_psychology_003",
        "transcription": ""
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
        "id": "ka_proficiency_time_001",
        "transcription": ""
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
        "id": "ka_proficiency_language_008",
        "transcription": ""
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
        "id": "ka_proficiency_psychology_004",
        "transcription": ""
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
        "id": "ka_proficiency_language_009",
        "transcription": ""
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
        "id": "ka_proficiency_language_010",
        "transcription": ""
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
        "id": "ka_proficiency_language_011",
        "transcription": ""
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
        "id": "ka_proficiency_social_004",
        "transcription": ""
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
        "id": "ka_proficiency_social_005",
        "transcription": ""
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
        "id": "ka_proficiency_language_012",
        "transcription": ""
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
        "id": "ka_proficiency_language_013",
        "transcription": ""
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
        "id": "ka_proficiency_psychology_005",
        "transcription": ""
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
        "id": "ka_proficiency_psychology_006",
        "transcription": ""
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
        "id": "ka_proficiency_language_014",
        "transcription": ""
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
        "id": "ka_proficiency_language_015",
        "transcription": ""
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
        "id": "ka_proficiency_social_006",
        "transcription": ""
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
        "id": "ka_proficiency_language_016",
        "transcription": ""
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
        "id": "ka_proficiency_language_017",
        "transcription": ""
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
        "id": "ka_proficiency_art_culture_001",
        "transcription": ""
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
        "id": "ka_proficiency_social_007",
        "transcription": ""
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
        "id": "ka_proficiency_language_018",
        "transcription": ""
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
        "id": "ka_proficiency_language_019",
        "transcription": ""
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
        "id": "ka_proficiency_language_020",
        "transcription": ""
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
        "id": "ka_proficiency_psychology_007",
        "transcription": ""
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
        "id": "ka_proficiency_social_008",
        "transcription": ""
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
        "id": "ka_proficiency_language_021",
        "transcription": ""
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
        "id": "ka_proficiency_language_022",
        "transcription": ""
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
        "id": "ka_proficiency_language_023",
        "transcription": ""
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
        "id": "ka_proficiency_language_024",
        "transcription": ""
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
        "id": "ka_proficiency_language_025",
        "transcription": ""
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
        "id": "ka_proficiency_time_002",
        "transcription": ""
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
        "id": "ka_proficiency_social_009",
        "transcription": ""
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
        "id": "ka_proficiency_language_026",
        "transcription": ""
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
        "id": "ka_proficiency_language_027",
        "transcription": ""
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
        "id": "ka_proficiency_time_003",
        "transcription": ""
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
        "id": "ka_proficiency_language_028",
        "transcription": ""
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
        "id": "ka_proficiency_time_004",
        "transcription": ""
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
        "id": "ka_proficiency_language_029",
        "transcription": ""
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
        "id": "ka_proficiency_language_030",
        "transcription": ""
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
        "id": "ka_proficiency_social_010",
        "transcription": ""
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
        "id": "ka_proficiency_language_031",
        "transcription": ""
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
        "id": "ka_proficiency_language_032",
        "transcription": ""
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
        "id": "ka_proficiency_time_005",
        "transcription": ""
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
        "id": "ka_proficiency_time_006",
        "transcription": ""
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
        "id": "ka_proficiency_language_033",
        "transcription": ""
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
        "id": "ka_proficiency_time_007",
        "transcription": ""
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
        "id": "ka_proficiency_language_034",
        "transcription": ""
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
        "id": "ka_proficiency_language_035",
        "transcription": ""
    }
];

    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
