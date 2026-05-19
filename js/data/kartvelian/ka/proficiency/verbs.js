(function() {
    const data = [
    {
        "word": "რეიფიცირება",
        "level": "proficiency",
        "theme": "philosophy_logic",
        "emoji": "🗿",
        "subtext": "კონცეფციის რეიფიცირება / ბაზრის რეიფიცირება / შრომის რეიფიკაცია",
        "form": "verb",
        "definitions": [
            {
                "text": "აბსტრაქტული იდეის განხილვა, როგორც მატერიალური ან კონკრეტული საგნის; ნივთადქცევა.",
                "examples": [
                    "ეკონომიკური მოდელები ახდენენ საბაზრო ძალების რეიფიცირებას, რაც მათ ბუნებრივად აჩენს."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "მოახდინა რეიფიცირება",
        "v3": "რეიფიცირებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "სუბლიმირება",
        "level": "proficiency",
        "theme": "psychology_academic",
        "emoji": "🎭",
        "subtext": "სურვილის სუბლიმირება / იმპულსის სუბლიმაცია / მიმართვა",
        "form": "verb",
        "definitions": [
            {
                "text": "იმპულსების ან გრძნობების მიმართვა სოციალურად მისაღები ან შემოქმედებითი საქმიანობისკენ.",
                "examples": [
                    "მან თავისი პოლიტიკური ფრუსტრაცია აკადემიურ წერაში მოახდინა სუბლიმირება."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "მოახდინა სუბლიმირება",
        "v3": "სუბლიმირებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "პრედიცირება",
        "level": "proficiency",
        "theme": "logic_linguistics",
        "emoji": "🗣️",
        "subtext": "პრედიცირება / მტკიცებულების დაფუძნება / დაფუძნებული დაშვებაზე",
        "form": "verb",
        "definitions": [
            {
                "text": "სუბიექტის შესახებ რაიმეს მტკიცება; ან მტკიცების დაფუძნება რაიმეზე (predicate).",
                "examples": [
                    "მისი არგუმენტი პრედიცირებს ნდობის იმ დონეს, რომელიც აღარ არსებობს."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "მოახდინა პრედიცირება",
        "v3": "პრედიცირებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "განხორციელება",
        "level": "proficiency",
        "theme": "logic_computing",
        "emoji": "📋",
        "subtext": "კონცეფციის განხორციელება / პრაქტიკაში ინსტანცირება",
        "form": "verb",
        "definitions": [
            {
                "text": "აბსტრაქტული რამის წარმოდგენა ან ილუსტრირება კონკრეტული მაგალითის საშუალებით (instantiate).",
                "examples": [
                    "მოცემული შემთხვევა ახდენს მარეგულირებლის მიტაცების თეორიის განხორციელებას."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "განახორციელა",
        "v3": "განხორციელებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "უარყოფა",
        "level": "proficiency",
        "theme": "logic_debate",
        "emoji": "❌",
        "subtext": "არგუმენტის უარყოფა / უფლების გაუქმება / დიალექტიკური უარყოფა",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს ძალადაკარგულად გამოცხადება ან გაუქმება (negate).",
                "examples": [
                    "ახალი პუნქტი ეფექტურად უარყოფს იმ უფლებას, რომელსაც თითქოს ანიჭებს."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "უარყო",
        "v3": "უარყოფილი",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "აღმატება",
        "level": "proficiency",
        "theme": "philosophy_general",
        "emoji": "🌌",
        "subtext": "ზღვრების გადალახვა / კატეგორიების აღმატება / პიროვნულზე მაღლა დადგომა",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს საზღვრებს გარეთ გასვლა ან მასზე მაღლა დადგომა (transcend).",
                "examples": [
                    "დიდი ხელოვნება აღემატება მისი შექმნის ისტორიულ მომენტს."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "აღემატა",
        "v3": "აღმატებული",
        "group": "regular",
        "auxiliary": "ყოფნა"
    },
    {
        "word": "მედიაცია",
        "level": "proficiency",
        "theme": "sociology_conflict",
        "emoji": "⚖️",
        "subtext": "მედიაცია მხარეებს შორის / კონფლიქტის მედიაცია / სოციალურად მედიირებული",
        "form": "verb",
        "definitions": [
            {
                "text": "ჩარევა მხარეების მოსარიგებლად ან დასაკავშირებლად (mediate).",
                "examples": [
                    "ენა ახდენს ჩვენი ურთიერთობის მედიაციას გარე სამყაროსთან."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "მოახდინა მედიაცია",
        "v3": "მედიირებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "გამოტოვება",
        "level": "proficiency",
        "theme": "linguistics_debate",
        "emoji": "✂️",
        "subtext": "განსხვავების გამოტოვება / ელიზია / განზრახ გამოტოვება",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს განზრახ გამოტოვება ან უგულებელყოფა (elide).",
                "examples": [
                    "ანგარიში გამოტოვებს განსხვავებას სიღარიბესა და გაჭირვებას შორის."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "გამოტოვა",
        "v3": "გამოტოვებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "დაბინდვა",
        "level": "proficiency",
        "theme": "debate_communication",
        "emoji": "🌫️",
        "subtext": "სიმართლის დაბინდვა / განზრახ დაბინდვა / ჟარგონით დაბინდვა",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს ბუნდოვანი ან რთულად გასაგები გახდომა, ხშირად განზრახ (obfuscate).",
                "examples": [
                    "ტექნიკური ენა თითქოს დაბინდვისთვის იყო შექმნილი და არა განმარტებისთვის."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "დაბინდა",
        "v3": "დაბინდული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "აღრევა",
        "level": "proficiency",
        "theme": "debate_academic",
        "emoji": "🌀",
        "subtext": "საკითხების აღრევა / გაერთიანება / სახიფათო აღრევა",
        "form": "verb",
        "definitions": [
            {
                "text": "ორი ან მეტი იდეის ერთმანეთში არევა, ხშირად შეცდომით (conflate).",
                "examples": [
                    "დებატები ახდენს არარეგულარული მიგრაციის აღრევას უკანონო იმიგრაციასთან."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "არია",
        "v3": "არეული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "მოხმობა",
        "level": "proficiency",
        "theme": "law_debate",
        "emoji": "📜",
        "subtext": "უფლების მოხმობა / პრეცედენტზე მითითება / არგუმენტის გამოყენება",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს მოხმობა ან მასზე მითითება, როგორც ავტორიტეტზე (invoke).",
                "examples": [
                    "მან თავის დასაცავად სიტყვის თავისუფლების უფლება მოიხმო."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "მოიხმო",
        "v3": "მოხმობილი",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "წინ წამოწევა",
        "level": "proficiency",
        "theme": "art_media",
        "emoji": "🔦",
        "subtext": "საკითხის წინ წამოწევა / პერსპექტივის ხაზგასმა / განზრახ გამოყოფა",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს ყურადღების ცენტრში მოქცევა (foreground).",
                "examples": [
                    "ფილმი განზრახ სწევს წინ რასას, როგორც ცენტრალურ პრიზმას."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "წამოსწია წინ",
        "v3": "წინ წამოწეული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "ათვისება",
        "level": "proficiency",
        "theme": "sociology_culture",
        "emoji": "♻️",
        "subtext": "მოძრაობის ათვისება / ათვისებული ყოფნა / კულტურული რეკუპერაცია",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს (მაგ. მეამბოხე ესთეტიკის) ჩართვა გაბატონებულ კულტურაში (recuperate).",
                "examples": [
                    "მოდის ინდუსტრიამ მოახდინა პანკის მეამბოხე ესთეტიკის ათვისება."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "აითვისა",
        "v3": "ათვისებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "დესტაბილიზაცია",
        "level": "proficiency",
        "theme": "politics_academic",
        "emoji": "⚖️",
        "subtext": "რეჟიმის დესტაბილიზაცია / დაშვებების შერყევა / განზრახ დესტაბილიზაცია",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს არასტაბილურად ქცევა ან წონასწორობის დარღვევა.",
                "examples": [
                    "მტკიცებულებები ანგარიშის ცენტრალური დაშვების დესტაბილიზაციას ახდენს."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "მოახდინა დესტაბილიზაცია",
        "v3": "დესტაბილიზებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "კომოდიფიკაცია",
        "level": "proficiency",
        "theme": "economics_sociology",
        "emoji": "💰",
        "subtext": "შრომის კომოდიფიკაცია / მზრუნველობის კომოდიფიკაცია / ყურადღების კომოდიფიკაცია",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს განხილვა კომერციულ პროდუქტად, რომლის ყიდვა-გაყიდვაც შესაძლებელია.",
                "examples": [
                    "ველნეს ინდუსტრია ახდენს ფსიქიკური ჯანმრთელობისა და თავის მოვლის კომოდიფიკაციას."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "მოახდინა კომოდიფიკაცია",
        "v3": "კომოდიფიცირებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "ინსტრუმენტალიზება",
        "level": "proficiency",
        "theme": "politics_philosophy",
        "emoji": "🛠️",
        "subtext": "ხალხის ინსტრუმენტალიზება / იდეის ინსტრუმენტად გამოყენება",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს ან ვინმეს გამოყენება მხოლოდ მიზნის მისაღწევ საშუალებად.",
                "examples": [
                    "კრიტიკოსები ამტკიცებდნენ, რომ პოლიტიკა ახდენდა მუშათა კეთილდღეობის ინსტრუმენტალიზებას."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "მოახდინა ინსტრუმენტალიზება",
        "v3": "ინსტრუმენტალიზებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "ვალორიზაცია",
        "level": "proficiency",
        "theme": "sociology_academic",
        "emoji": "💎",
        "subtext": "შრომის ვალორიზაცია / კონცეფციისთვის ღირებულების მინიჭება",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმესთვის დიდი ღირებულების ან მნიშვნელობის მინიჭება (valorise).",
                "examples": [
                    "თანამედროვე კულტურა ახდენს პროდუქტიულობის ვალორიზაციას დასვენებაზე მაღლა."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "მოახდინა ვალორიზაცია",
        "v3": "ვალორიზებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "ფეტიშიზება",
        "level": "proficiency",
        "theme": "sociology_academic",
        "emoji": "🧿",
        "subtext": "იდეის ფეტიშიზება / სასაქონლო ფეტიშიზმი / ზრდის ფეტიშიზება",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმესადმი გადამეტებული ან ირაციონალური ერთგულების გამოვლენა.",
                "examples": [
                    "სტარტაპ კულტურა ახდენს დისრუფციის ფეტიშიზებას, როგორც თვითმიზანს."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "მოახდინა ფეტიშიზება",
        "v3": "ფეტიშიზებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "გაუცხოება",
        "level": "proficiency",
        "theme": "sociology_psychology",
        "emoji": "👽",
        "subtext": "ვინმეს გაუცხოება / გაუცხოების განცდა / შრომისგან გაუცხოება",
        "form": "verb",
        "definitions": [
            {
                "text": "ვინმესთვის იზოლაციის განცდის შექმნა გარემოსგან ან საკუთარი თავისგან (alienate).",
                "examples": [
                    "ინდუსტრიული პირობები ახდენს მუშების გაუცხოებას ხელოსნობის ყოველგვარი განცდისგან."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "გააუცხოა",
        "v3": "გაუცხოებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "დემარკაცია",
        "level": "proficiency",
        "theme": "law_philosophy",
        "emoji": "🚧",
        "subtext": "საზღვრის დემარკაცია / მკაფიო დემარკაცია / დემარკაციის ხაზი",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს საზღვრების დადგენა (demarcate).",
                "examples": [
                    "კანონი ცდილობს მოახდინოს დემარკაცია რეგულირებასა და ცენზურას შორის."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "მოახდინა დემარკაცია",
        "v3": "დემარკირებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "შემოსაზღვრა",
        "level": "proficiency",
        "theme": "academic_research",
        "emoji": "📏",
        "subtext": "ფარგლების შემოსაზღვრა / კონცეფციის დელიმიტაცია / საგულდაგულოდ შემოსაზღვრული",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს საზღვრების ზუსტად განსაზღვრა (delimit).",
                "examples": [
                    "კვლევა განზრახ საზღვრავს თავის ფარგლებს ზედმეტი განზოგადების თავიდან ასაცილებლად."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "შემოსაზღვრა",
        "v3": "შემოსაზღვრული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "წინააღმდეგ მოქმედება",
        "level": "proficiency",
        "theme": "debate_academic",
        "emoji": "🛡️",
        "subtext": "წინააღმდეგ მოქმედება / ძლიერად მოქმედება / სასარგებლოდ ყოფნა",
        "form": "verb",
        "definitions": [
            {
                "text": "(ფაქტის ან გარემოების შესახებ) რაიმეს წინააღმდეგ ზემოქმედება (militate).",
                "examples": [
                    "სისტემის სირთულე წინააღმდეგ მოქმედებს ეფექტურ რეფორმას."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "იმოქმედა წინააღმდეგ",
        "v3": "წინააღმდეგ მოქმედი",
        "group": "regular",
        "auxiliary": "ყოფნა"
    },
    {
        "word": "გაუფასურება",
        "level": "proficiency",
        "theme": "law_academic",
        "emoji": "☣️",
        "subtext": "მტკიცებულების გაუფასურება / არგუმენტის გაბათილება / იურიდიულად გაბათილებული",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს არაეფექტურად ან ძალადაკარგულად ქცევა (vitiate).",
                "examples": [
                    "მეთოდოლოგიური ხარვეზი აუფასურებს კვლევის ცენტრალურ დასკვნებს."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "გააუფასურა",
        "v3": "გაუფასურებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "უარყოფა",
        "level": "proficiency",
        "theme": "debate_logic",
        "emoji": "🗣️",
        "subtext": "რთულად უარსაყოფი / ვერავინ უარყოფს / მტკიცების უარყოფა",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს უარყოფა ან მის წინააღმდეგ საუბარი (gainsay).",
                "examples": [
                    "რთულია იმ მტკიცებულებების უარყოფა, რომლებიც გამოძიებამ წარადგინა."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "უარყო",
        "v3": "უარყოფილი",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "გაუქმება",
        "level": "proficiency",
        "theme": "law_politics",
        "emoji": "📜",
        "subtext": "შეთანხმების გაუქმება / ხელშეკრულების აბროგაცია / ცალმხრივი გაუქმება",
        "form": "verb",
        "definitions": [
            {
                "text": "კანონის ან ოფიციალური შეთანხმების ფორმალურად გაუქმება (abrogate).",
                "examples": [
                    "მთავრობა შეეცადა ხელშეკრულების ცალმხრივად გაუქმებას."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "გააუქმა",
        "v3": "გაუქმებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "დარღვევა",
        "level": "proficiency",
        "theme": "law_debate",
        "emoji": "🚫",
        "subtext": "კანონის დარღვევა / წესების საწინააღმდეგოდ მოქმედება / შეთანხმების დარღვევა",
        "form": "verb",
        "definitions": [
            {
                "text": "კანონის ან წესის საწინააღმდეგოდ მოქმედება (contravene).",
                "examples": [
                    "დადგინდა, რომ გადაწყვეტილება არღვევდა ევროკავშირის კონკურენციის კანონს."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "დაარღვია",
        "v3": "დარღვეული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "სუბსუმირება",
        "level": "proficiency",
        "theme": "logic_philosophy",
        "emoji": "📂",
        "subtext": "ჩართვა ქვეშ / სუბსუმირებული ყოფნა / კატეგორიაში ჩართვა",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს ჩართვა უფრო ფართო ჯგუფის ან კატეგორიის ნაწილად (subsume).",
                "examples": [
                    "მისი თეორია ახდენს ყველა წინა აღწერის სუბსუმირებას ერთიან ჩარჩოში."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "მოახდინა სუბსუმირება",
        "v3": "სუბსუმირებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "დეკონსტრუქცია",
        "level": "proficiency",
        "theme": "philosophy_literature",
        "emoji": "🧩",
        "subtext": "არგუმენტის დეკონსტრუქცია / ტექსტის დეკონსტრუქცია / დერიდასეული დეკონსტრუქცია",
        "form": "verb",
        "definitions": [
            {
                "text": "ტექსტის ან არგუმენტის ანალიზი მისი შინაგანი წინააღმდეგობებისა და დაშვებების გამოსავლენად.",
                "examples": [
                    "მან მოახდინა პოლიტიკის დეკონსტრუქცია მისი იდეოლოგიური მიკერძოების გამოსავლენად."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "მოახდინა დეკონსტრუქცია",
        "v3": "დეკონსტრუირებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "გამორიცხვა",
        "level": "proficiency",
        "theme": "law_debate",
        "emoji": "🚪",
        "subtext": "ვარიანტის გამორიცხვა / დებატების შეწყვეტა / შესაძლებლობის გამორიცხვა",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს წინასწარ თავიდან აცილება ან გამორიცხვა (foreclose).",
                "examples": [
                    "კითხვის ფორმულირება გამორიცხავს ყველაზე საინტერესო პასუხებს."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "გამორიცხა",
        "v3": "გამორიცხული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "დიალექტიზება",
        "level": "proficiency",
        "theme": "philosophy_academic",
        "emoji": "☯️",
        "subtext": "ბინარულობის დიალექტიზება / დიალექტიკური მეთოდი / თეზისი და ანტითეზისი",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს განხილვა დიალექტიკურად, დაპირისპირებული ძალების ურთიერთქმედების გათვალისწინებით.",
                "examples": [
                    "ის ახდენს თავისუფლებასა და უსაფრთხოებას შორის დაპირისპირების დიალექტიზებას."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "მოახდინა დიალექტიზება",
        "v3": "დიალექტიზებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "ჰეგემონიზება",
        "level": "proficiency",
        "theme": "politics_sociology",
        "emoji": "👑",
        "subtext": "დისკურსის ჰეგემონიზება / ჰეგემონიზაციისადმი წინააღმდეგობა",
        "form": "verb",
        "definitions": [
            {
                "text": "გაბატონებული გავლენის მოპოვება რომელიმე სფეროზე ან დისკურსზე.",
                "examples": [
                    "ერთმა თეორიულმა ჩარჩომ მოახდინა მთელი სფეროს ჰეგემონიზება."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "მოახდინა ჰეგემონიზება",
        "v3": "ჰეგემონიზებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "ხაზგასმა",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🔊",
        "subtext": "განსხვავების ხაზგასმა / პოზიტიურის ხაზგასმა / ხაზგასმული ყოფნა",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს უფრო შესამჩნევად ან მნიშვნელოვნად ქცევა (accentuate).",
                "examples": [
                    "კრიზისმა ხაზი გაუსვა არსებულ უთანასწორობას სამუშაო ძალაში."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "გაუსვა ხაზი",
        "v3": "ხაზგასმული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "დათანხმება",
        "level": "proficiency",
        "theme": "debate_communication",
        "emoji": "🤝",
        "subtext": "დათანხმება / დათმობა / უხალისო დათანხმება",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეზე დათანხმება, ხშირად ჩუმად ან პასიურად (acquiesce).",
                "examples": [
                    "ის დაეთანხმა საბჭოს გადაწყვეტილებას ძლიერი წინააღმდეგობის მიუხედავად."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "დაეთანხმა",
        "v3": "დათანხმებული",
        "group": "regular",
        "auxiliary": "ყოფნა"
    },
    {
        "word": "შემსუბუქება",
        "level": "proficiency",
        "theme": "policy_general",
        "emoji": "🩹",
        "subtext": "ტანჯვის შემსუბუქება / სიღარიბის შემსუბუქება / ზეწოლის შემსუბუქება",
        "form": "verb",
        "definitions": [
            {
                "text": "პრობლემის ან სიმპტომის ნაკლებად მწვავედ ქცევა (alleviate).",
                "examples": [
                    "ახალმა პოლიტიკამ მცირედი გააკეთა საბინაო კრიზისის შესამსუბუქებლად."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "შეამსუბუქა",
        "v3": "შემსუბუქებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "გვერდის ავლით",
        "level": "proficiency",
        "theme": "debate_general",
        "emoji": "🏃",
        "subtext": "წესებისთვის გვერდის ავლით / პრობლემისთვის გვერდის ავლით / კონტროლისთვის გვერდის ავლით",
        "form": "verb",
        "definitions": [
            {
                "text": "სირთულისთვის ან დაბრკოლებისთვის გონივრულად გვერდის ავლით (circumvent).",
                "examples": [
                    "მან იპოვა კანონიერი გზა ბიუროკრატიული დაბრკოლებისთვის გვერდის ავლით."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "აუარა გვერდი",
        "v3": "გვერდავლილი",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "დადასტურება",
        "level": "proficiency",
        "theme": "academic_research",
        "emoji": "✅",
        "subtext": "მტკიცების დადასტურება / მტკიცებულების დადასტურება / დადასტურებული ყოფნა",
        "form": "verb",
        "definitions": [
            {
                "text": "თეორიის ან განცხადების მხარდაჭერა დამატებითი მტკიცებულებებით (corroborate).",
                "examples": [
                    "მოწმის ჩვენებამ სრულად დაადასტურა დოკუმენტური მტკიცებულებები."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "დაადასტურა",
        "v3": "დადასტურებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "გავრცელება",
        "level": "proficiency",
        "theme": "academic_research",
        "emoji": "📢",
        "subtext": "ინფორმაციის გავრცელება / მიგნებების გავრცელება / ფართოდ გავრცელებული",
        "form": "verb",
        "definitions": [
            {
                "text": "ინფორმაციის ან ცოდნის ფართოდ გავრცელება (disseminate).",
                "examples": [
                    "კვლევის მიგნებები გავრცელდა საერთაშორისო კვლევით ქსელებში."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "გაავრცელა",
        "v3": "გავრცელებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "ასახვა",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "💊",
        "subtext": "იდეის ასახვა / პრობლემის ასახვა / ზუსტად ასახვა",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს არსებითი მახასიათებლების მოკლედ გადმოცემა (encapsulate).",
                "examples": [
                    "ეს ფრაზა ზუსტად ასახავს თანამედროვე მუშაობის პარადოქსს."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ასახა",
        "v3": "ასახული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "გამოწვევა",
        "level": "proficiency",
        "theme": "sociology_general",
        "emoji": "🌱",
        "subtext": "ნდობის გამოწვევა / კონფლიქტის გამოწვევა / უკმაყოფილების გამოწვევა",
        "form": "verb",
        "definitions": [
            {
                "text": "გრძნობის, სიტუაციის ან პირობის წარმოშობა (engender).",
                "examples": [
                    "ახალმა პოლიტიკამ მნიშვნელოვანი უკმაყოფილება გამოიწვია თანამშრომლებში."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "გამოიწვია",
        "v3": "გამოწვეული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "გამწვავება",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🔥",
        "subtext": "პრობლემის გამწვავება / დაძაბულობის გამწვავება / უთანასწორობის გამწვავება",
        "form": "verb",
        "definitions": [
            {
                "text": "პრობლემის ან უარყოფითი სიტუაციის კიდევ უფრო გაუარესება (exacerbate).",
                "examples": [
                    "ეკონომიკურმა ვარდნამ გაამწვავა არსებული სოციალური უთანასწორობა."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "გაამწვავა",
        "v3": "გამწვავებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "განსახიერება",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "📖",
        "subtext": "განასახიერებს რაიმეს / პრობლემის მაგალითია / ნათლად განასახიერებს",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს ტიპურ მაგალითს წარმოადგენდეს (exemplify).",
                "examples": [
                    "მისი კარიერა განასახიერებს იმ გამოწვევებს, რომლებსაც ქალები აწყდებიან ხელმძღვანელ პოზიციებზე."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "განასახიერა",
        "v3": "განსახიერებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "შეფერხება",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🚧",
        "subtext": "პროგრესის შეფერხება / ზრდის შეფერხება / ვინმესთვის ხელის შეშლა",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს პროგრესის გაძნელება ან შეფერხება (impede).",
                "examples": [
                    "ჭარბმა რეგულაციამ შეიძლება შეაფერხოს ინოვაციები ახალ ინდუსტრიებში."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "შეაფერხა",
        "v3": "შეფერხებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "შერბილება",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🛡️",
        "subtext": "რისკის შერბილება / ზემოქმედების შერბილება / საწინააღმდეგოდ მოქმედება",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს ნაკლებად მწვავედ, სერიოზულად ან მტკივნეულად ქცევა (mitigate).",
                "examples": [
                    "კარგმა კომუნიკაციამ შეიძლება ხელი შეუწყოს ცვლილების ზემოქმედების შერბილებას."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "შეარბილა",
        "v3": "შერბილებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "ვალდებულება",
        "level": "proficiency",
        "theme": "law_general",
        "emoji": "⚖️",
        "subtext": "იყო ვალდებული / ვინმეს დავალდებულება / ვალდებულების განცდა",
        "form": "verb",
        "definitions": [
            {
                "text": "ვინმესთვის რაიმეს გაკეთების იურიდიულად ან მორალურად დავალება (oblige).",
                "examples": [
                    "კანონი ავალდებულებს ყველა დამსაქმებელს უსაფრთხო სამუშაო გარემოს უზრუნველყოფას."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "დაავალდებულა",
        "v3": "დავალდებულებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "გამსჭვალვა",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "💧",
        "subtext": "ორგანიზაციის გამსჭვალვა / გამსჭვალული ყოფნა / ყოვლისმომცველი",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს ყველა ნაწილში ყოფნა (pervade).",
                "examples": [
                    "ზეგანაკვეთური მუშაობის კულტურა მსჭვალავს ფინანსური მომსახურების სექტორს."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "განმსჭვალა",
        "v3": "განმსჭვალული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "გამორიცხვა",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🚫",
        "subtext": "ვინმეს გამორიცხვა / შესაძლებლობის გამორიცხვა / არ გამორიცხვა",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს მოხდენის ან ვინმეს მონაწილეობის ხელის შეშლა (preclude).",
                "examples": [
                    "შესაბამისი გამოცდილების ნაკლებობამ ის კანდიდატთა სიიდან გამორიცხა."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "გამორიცხა",
        "v3": "გამორიცხული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "შერიგება",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🤝",
        "subtext": "იდეების შეჯერება / რთულად შესაჯერებელი / განსხვავებების შერიგება",
        "form": "verb",
        "definitions": [
            {
                "text": "გზის პოვნა, რომ ორი დაპირისპირებული იდეა ან სიტუაცია ერთად არსებობდეს (reconcile).",
                "examples": [
                    "მან შეუძლებლად მიიჩნია თავისი ღირებულებების შერიგება კომპანიის კულტურასთან."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "შეარიგა",
        "v3": "შერიგებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "ჩანაცვლება",
        "level": "proficiency",
        "theme": "law_academic",
        "emoji": "🔄",
        "subtext": "კანონის ჩანაცვლება / წინა მითითებების ჩანაცვლება / ჩანაცვლებული ყოფნა",
        "form": "verb",
        "definitions": [
            {
                "text": "ადრე გამოყენებული რამის ადგილის დაკავება (supersede).",
                "examples": [
                    "ახალი სახელმძღვანელო მითითებები ჩაანაცვლებს ყველა წინა ვერსიას."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ჩაანაცვლა",
        "v3": "ჩანაცვლებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "საფუძვლის ჩაყრა",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "⚓",
        "subtext": "არგუმენტის გამყარება / წარმატების საფუძველი / გამყარებული ყოფნა",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმესთვის საფუძვლის ან მხარდაჭერის ფუნქციის შესრულება (underpin).",
                "examples": [
                    "ძლიერი ნდობა უდევს საფუძვლად ყოველ წარმატებულ გრძელვადიან პარტნიორობას."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "ჩაუყარა საფუძველი",
        "v3": "საფუძველჩაყრილი",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "გამართლება",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🏆",
        "subtext": "ვინმეს გამართლება / გადაწყვეტილების გამართლება / გამართლებულად განცდა",
        "form": "verb",
        "definitions": [
            {
                "text": "იმის ჩვენება, რომ ვინმე ან რაიმე სწორი ან გამართლებულია (vindicate).",
                "examples": [
                    "შედეგებმა გაამართლა მისი წინააღმდეგობრივი გადაწყვეტილება ორი წლის შემდეგ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "გაამართლა",
        "v3": "გამართლებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "დამოკიდებულება",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "⛓️",
        "subtext": "გადაწყვეტილებაზე დამოკიდებულება / ერთ ფაქტორზე დამოკიდებულება / ყველაფერი დამოკიდებულია",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეთი განსაზღვრა ან მასზე დამოკიდებულება (hinge on).",
                "examples": [
                    "პროექტის მთელი წარმატება დამოკიდებულია კლიენტის თანხმობაზე."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "იყო დამოკიდებული",
        "v3": "დამოკიდებული",
        "group": "regular",
        "auxiliary": "ყოფნა"
    },
    {
        "word": "ჭიდილი",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🤼",
        "subtext": "პრობლემასთან ჭიდილი / შედეგებთან გამკლავება / სირთულის გააზრება",
        "form": "verb",
        "definitions": [
            {
                "text": "რთულ პრობლემასთან გამკლავების ან მისი გაგების მცდელობა (grapple with).",
                "examples": [
                    "პოლიტიკის შემქმნელები კვლავ ჭიდილში არიან ხელოვნური ინტელექტის შედეგებთან."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ეჭიდავა",
        "v3": "ნაჭიდავი",
        "group": "regular",
        "auxiliary": "ყოფნა"
    },
    {
        "word": "ზედაპირულად განხილვა",
        "level": "proficiency",
        "theme": "debate_academic",
        "emoji": "🙈",
        "subtext": "პრობლემის ზედაპირულად განხილვა / დეტალების მიჩუმათება / არ უგულებელყოფა",
        "form": "verb",
        "definitions": [
            {
                "text": "რაიმეს განხილვა, როგორც ნაკლებად მნიშვნელოვანის; უსიამოვნო ფაქტების იგნორირება (gloss over).",
                "examples": [
                    "ანგარიში ზედაპირულად განიხილავს ყველაზე საკამათო ფინანსურ დეტალებს."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ზედაპირულად განიხილა",
        "v3": "ზედაპირულად განხილული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "მიჩუმათება",
        "level": "proficiency",
        "theme": "debate_politics",
        "emoji": "🩹",
        "subtext": "პრობლემის მიჩუმათება / ბზარების დაფარვა / განსხვავებების მიჩქმალვა",
        "form": "verb",
        "definitions": [
            {
                "text": "რთული სიტუაციის დამალვის ან იგნორირების მცდელობა, რომ ის უკეთესად გამოჩნდეს (paper over).",
                "examples": [
                    "შეთანხმებამ მხოლოდ მიჩუმათა ღრმა სტრუქტურული დაყოფა."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "მიჩუმათა",
        "v3": "მიჩუმათებული",
        "group": "regular",
        "auxiliary": "ყოლა"
    },
    {
        "word": "პარადაგმის შეცვლა",
        "level": "proficiency",
        "theme": "academic_general",
        "emoji": "🔄",
        "subtext": "ფუნდამენტური ცვლილება მიდგომაში",
        "form": "verb",
        "definitions": [
            {
                "text": "ფუნდამენტური ცვლილება მიდგომაში ან ძირითად დაშვებებში.",
                "examples": [
                    "ამ ახალი ტექნოლოგიის დანერგვა წარმოადგენს პარადიგმის შეცვლას ინდუსტრიაში."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "შეცვალა პარადიგმა",
        "v3": "პარადიგმაშეცვლილი",
        "group": "locution",
        "auxiliary": "ყოლა"
    }
];
    const lang = "ka";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = (window.vocabularyData[lang] || []).concat(data);
})();