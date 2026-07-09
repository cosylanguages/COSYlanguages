// TODO: verify level classification
(function() {
    const lang = "ka";
    const data = [
    {
        "word": "აპორია",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤔",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "არგუმენტში არსებული წინააღმდეგობების გამო წარმოქმნილი დაბნეულობის მდგომარეობა.",
                "examples": [
                    "დიალოგი აპორიით სრულდება, დამაკმაყოფილებელი პასუხის გარეშე."
                ]
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_001",
        "transcription": ""
    },
    {
        "word": "ტელეოლოგია",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🎯",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "ფილოსოფიური სწავლება ბუნებასა თუ ისტორიაში არსებული მიზანდასახულობის შესახებ.",
                "examples": [
                    "მისი არგუმენტი ეყრდნობა კაცობრიობის პროგრესის ტელეოლოგიურ ხედვას."
                ]
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_002",
        "transcription": ""
    },
    {
        "word": "ონტოლოგია",
        "level": "proficiency",
        "theme": "language",
        "emoji": "👻",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "ფილოსოფიის დარგი, რომელიც შეისწავლის ყოფიერებისა და არსებობის ბუნებას.",
                "examples": [
                    "მისი ონტოლოგიური პოზიცია განსაზღვრავს მთელ მის არგუმენტაციას."
                ]
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_003",
        "transcription": ""
    },
    {
        "word": "რეიფიკაცია",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧱",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "აბსტრაქტული ცნების განხილვა, როგორც კონკრეტული, რეალური საგნის; ნივთადქცევა.",
                "examples": [
                    "საბაზრო ძალების რეიფიკაცია ნიღბავს მათ უკან მდგომ ადამიანურ გადაწყვეტილებებს."
                ]
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_004",
        "transcription": ""
    },
    {
        "word": "დიალექტიკა",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "არგუმენტაციის მეთოდი, რომელიც მოიცავს წინააღმდეგობასა და მათ გადაჭრას.",
                "examples": [
                    "თავისუფლებასა და უსაფრთხოებას შორის დიალექტიკა განსაზღვრავს ლიბერალურ აზროვნებას."
                ]
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_005",
        "transcription": ""
    },
    {
        "word": "ევრისტიკა",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "პრობლემის გადაჭრის მიდგომა, რომელიც ეფუძნება გამოცდილებას და არა გარანტირებულ მტკიცებულებას.",
                "examples": [
                    "'მიჰყევით ფულს' სასარგებლო ევრისტიკაა საგამოძიებო ჟურნალისტიკაში."
                ]
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_psychology_001",
        "transcription": ""
    },
    {
        "word": "აპოფენია",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🕸️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "მიდრეკილება დაუკავშირებელ საგნებს შორის მნიშვნელოვანი კავშირების აღქმისაკენ.",
                "examples": [
                    "კონსპირაციულ აზროვნებას აპოფენია ასაზრდოებს."
                ]
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_psychology_002",
        "transcription": ""
    },
    {
        "word": "მოტივირებული კოგნიცია",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🧠",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "სურვილებისა და ემოციების გავლენა მსჯელობასა და რწმენის ჩამოყალიბებაზე.",
                "examples": [
                    "მოტივირებული კოგნიცია ხსნის, რატომ ეწინააღმდეგებიან ადამიანები არასასურველ მტკიცებულებებს."
                ]
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_psychology_003",
        "transcription": ""
    },
    {
        "word": "პროაქტიული პრინციპი",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🚀",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "მოსაზრება, რომ უმოქმედობის რისკები უნდა შეფასდეს მოქმედების რისკებთან შედარებით.",
                "examples": [
                    "ტრანსჰუმანისტები ხშირად მიმართავენ პროაქტიულ პრინციპს."
                ]
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_social_001",
        "transcription": ""
    },
    {
        "word": "სიფრთხილის პრინციპი",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛡️",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "მოსაზრება, რომ თავიდან უნდა იქნას აცილებული ქმედებები უცნობი, მაგრამ პოტენციურად საზიანო შედეგებით.",
                "examples": [
                    "გარემოსდაცვითი სამართალი ხშირად იყენებს სიფრთხილის პრინციპს."
                ]
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_social_002",
        "transcription": ""
    },
    {
        "word": "ლიბერალური ნეიტრალიტეტი",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⚖️",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "ლიბერალური პრინციპი, რომ სახელმწიფო არ უნდა ანიჭებდეს უპირატესობას კეთილდღეობის რაიმე კონკრეტულ ხედვას.",
                "examples": [
                    "კრიტიკოსები ამტკიცებენ, რომ ლიბერალური ნეიტრალიტეტი თავად არის მორალური პოზიცია."
                ]
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_social_003",
        "transcription": ""
    },
    {
        "word": "პრონატალიზმი",
        "level": "proficiency",
        "theme": "social",
        "emoji": "👶",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "პოლიტიკა ან იდეოლოგია, რომელიც წაახალისებს შობადობას.",
                "examples": [
                    "მან გააკრიტიკა საგადასახადო პოლიტიკაში არსებული პრონატალისტური დაშვებები."
                ]
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_social_004",
        "transcription": ""
    },
    {
        "word": "სუბლიმაცია",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🎨",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "პრიმიტიული იმპულსის გადამისამართება სოციალურად მისაღებ საქმიანობაში.",
                "examples": [
                    "ხელოვნება დიდი ხანია განიხილება, როგორც სუბლიმაციის ფორმა."
                ]
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_psychology_004",
        "transcription": ""
    },
    {
        "word": "ჟუისანსი",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🔥",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "ფსიქოანალიტიკურ თეორიაში, სიამოვნების გადაჭარბებული ან ტრანსგრესიული ფორმა.",
                "examples": [
                    "ჟიჟეკი იყენებს ჟუისანსის ცნებას იდეოლოგიური მიჯაჭვულობის ასახსნელად."
                ]
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_psychology_005",
        "transcription": ""
    },
    {
        "word": "თანატოსი",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💀",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "ფროიდის თეორიაში, სიკვდილის ლტოლვა; თვითგანადგურების ინსტინქტი.",
                "examples": [
                    "რომანი იკვლევს დაძაბულობას ეროსსა და თანატოსს შორის."
                ]
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_psychology_006",
        "transcription": ""
    },
    {
        "word": "ბათოსი",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "📉",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "ამაღლებულიდან მდაბიოზე მკვეთრი, იმედგამაცრუებელი გადასვლა.",
                "examples": [
                    "გადამწყვეტ მომენტში სიტყვა ბათოსში გადავიდა."
                ]
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_art_culture_001",
        "transcription": ""
    },
    {
        "word": "აპოფაზისი",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤫",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "რიტორიკული ხერხი, როდესაც რაიმეზე ყურადღებას ამახვილებენ იმის მტკიცებით, რომ მას არ ახსენებენ.",
                "examples": [
                    "'მის ნასამართლობას არ ვახსენებ' კლასიკური აპოფაზისია."
                ]
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_006",
        "transcription": ""
    },
    {
        "word": "პარალეფსისი",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🙊",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "აპოფაზისის სინონიმი.",
                "examples": [
                    "პოლიტიკური რიტორიკა ხშირად ეყრდნობა პარალეფსისს."
                ]
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_007",
        "transcription": ""
    },
    {
        "word": "ლიმინალური სივრცე",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚪",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "გარდამავალი ფაზა ან ზღურბლის მომენტი ორ მდგომარეობას შორის.",
                "examples": [
                    "შუახნის ასაკი შეიძლება გაგებულ იქნას, როგორც ლიმინალური სივრცე."
                ]
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_008",
        "transcription": ""
    },
    {
        "word": "ქიაზმი",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❌",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "რიტორიკული ფიგურა, რომელშიც მეორე ნაწილი პირველის შებრუნებაა.",
                "examples": [
                    "'ნუ კითხულობთ, რა შეუძლია გააკეთოს ქვეყანამ თქვენთვის' იყენებს ქიაზმს."
                ]
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_009",
        "transcription": ""
    },
    {
        "word": "შიბოლეთი",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔑",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "ჩვეულება, ფრაზა ან რწმენა, რომელიც გამოიყენება კონკრეტული ჯგუფის წევრების ამოსაცნობად.",
                "examples": [
                    "'მშრომელი ოჯახები' პოლიტიკურ შიბოლეთად იქცა."
                ]
            }
        ],
        "lang": "ka",
        "id": "ka_proficiency_language_010",
        "transcription": ""
    }
];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();