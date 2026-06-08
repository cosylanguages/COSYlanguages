// TODO: verify level classification
(function() {
    const lang = "ka";
    const data = [
        {
                "word": "აპორია",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🤔",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "არგუმენტში არსებული წინააღმდეგობების გამო წარმოქმნილი დაბნეულობის მდგომარეობა.",
                                "examples": [
                                        "დიალოგი აპორიით სრულდება, დამაკმაყოფილებელი პასუხის გარეშე."
                                ]
                        }
                ]
        },
        {
                "word": "ტელეოლოგია",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🎯",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "ფილოსოფიური სწავლება ბუნებასა თუ ისტორიაში არსებული მიზანდასახულობის შესახებ.",
                                "examples": [
                                        "მისი არგუმენტი ეყრდნობა კაცობრიობის პროგრესის ტელეოლოგიურ ხედვას."
                                ]
                        }
                ]
        },
        {
                "word": "ონტოლოგია",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "👻",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "ფილოსოფიის დარგი, რომელიც შეისწავლის ყოფიერებისა და არსებობის ბუნებას.",
                                "examples": [
                                        "მისი ონტოლოგიური პოზიცია განსაზღვრავს მთელ მის არგუმენტაციას."
                                ]
                        }
                ]
        },
        {
                "word": "რეიფიკაცია",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🧱",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "აბსტრაქტული ცნების განხილვა, როგორც კონკრეტული, რეალური საგნის; ნივთადქცევა.",
                                "examples": [
                                        "საბაზრო ძალების რეიფიკაცია ნიღბავს მათ უკან მდგომ ადამიანურ გადაწყვეტილებებს."
                                ]
                        }
                ]
        },
        {
                "word": "დიალექტიკა",
                "level": "proficiency",
                "theme": "meta_argument_deconstruction_C2",
                "emoji": "⚖️",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "არგუმენტაციის მეთოდი, რომელიც მოიცავს წინააღმდეგობასა და მათ გადაჭრას.",
                                "examples": [
                                        "თავისუფლებასა და უსაფრთხოებას შორის დიალექტიკა განსაზღვრავს ლიბერალურ აზროვნებას."
                                ]
                        }
                ]
        },
        {
                "word": "ევრისტიკა",
                "level": "proficiency",
                "theme": "epistemology_knowledge_C2",
                "emoji": "💡",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "პრობლემის გადაჭრის მიდგომა, რომელიც ეფუძნება გამოცდილებას და არა გარანტირებულ მტკიცებულებას.",
                                "examples": [
                                        "'მიჰყევით ფულს' სასარგებლო ევრისტიკაა საგამოძიებო ჟურნალისტიკაში."
                                ]
                        }
                ]
        },
        {
                "word": "აპოფენია",
                "level": "proficiency",
                "theme": "epistemology_knowledge_C2",
                "emoji": "🕸️",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "მიდრეკილება დაუკავშირებელ საგნებს შორის მნიშვნელოვანი კავშირების აღქმისაკენ.",
                                "examples": [
                                        "კონსპირაციულ აზროვნებას აპოფენია ასაზრდოებს."
                                ]
                        }
                ]
        },
        {
                "word": "მოტივირებული კოგნიცია",
                "level": "proficiency",
                "theme": "epistemology_knowledge_C2",
                "emoji": "🧠",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "სურვილებისა და ემოციების გავლენა მსჯელობასა და რწმენის ჩამოყალიბებაზე.",
                                "examples": [
                                        "მოტივირებული კოგნიცია ხსნის, რატომ ეწინააღმდეგებიან ადამიანები არასასურველ მტკიცებულებებს."
                                ]
                        }
                ]
        },
        {
                "word": "პროაქტიული პრინციპი",
                "level": "proficiency",
                "theme": "ethics_advanced_C2",
                "emoji": "🚀",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "მოსაზრება, რომ უმოქმედობის რისკები უნდა შეფასდეს მოქმედების რისკებთან შედარებით.",
                                "examples": [
                                        "ტრანსჰუმანისტები ხშირად მიმართავენ პროაქტიულ პრინციპს."
                                ]
                        }
                ]
        },
        {
                "word": "სიფრთხილის პრინციპი",
                "level": "proficiency",
                "theme": "ethics_advanced_C2",
                "emoji": "🛡️",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "მოსაზრება, რომ თავიდან უნდა იქნას აცილებული ქმედებები უცნობი, მაგრამ პოტენციურად საზიანო შედეგებით.",
                                "examples": [
                                        "გარემოსდაცვითი სამართალი ხშირად იყენებს სიფრთხილის პრინციპს."
                                ]
                        }
                ]
        },
        {
                "word": "ლიბერალური ნეიტრალიტეტი",
                "level": "proficiency",
                "theme": "political_theory_C2",
                "emoji": "⚖️",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "ლიბერალური პრინციპი, რომ სახელმწიფო არ უნდა ანიჭებდეს უპირატესობას კეთილდღეობის რაიმე კონკრეტულ ხედვას.",
                                "examples": [
                                        "კრიტიკოსები ამტკიცებენ, რომ ლიბერალური ნეიტრალიტეტი თავად არის მორალური პოზიცია."
                                ]
                        }
                ]
        },
        {
                "word": "პრონატალიზმი",
                "level": "proficiency",
                "theme": "political_theory_C2",
                "emoji": "👶",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "პოლიტიკა ან იდეოლოგია, რომელიც წაახალისებს შობადობას.",
                                "examples": [
                                        "მან გააკრიტიკა საგადასახადო პოლიტიკაში არსებული პრონატალისტური დაშვებები."
                                ]
                        }
                ]
        },
        {
                "word": "სუბლიმაცია",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "emoji": "🎨",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "პრიმიტიული იმპულსის გადამისამართება სოციალურად მისაღებ საქმიანობაში.",
                                "examples": [
                                        "ხელოვნება დიდი ხანია განიხილება, როგორც სუბლიმაციის ფორმა."
                                ]
                        }
                ]
        },
        {
                "word": "ჟუისანსი",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "emoji": "🔥",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "ფსიქოანალიტიკურ თეორიაში, სიამოვნების გადაჭარბებული ან ტრანსგრესიული ფორმა.",
                                "examples": [
                                        "ჟიჟეკი იყენებს ჟუისანსის ცნებას იდეოლოგიური მიჯაჭვულობის ასახსნელად."
                                ]
                        }
                ]
        },
        {
                "word": "თანატოსი",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "emoji": "💀",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "ფროიდის თეორიაში, სიკვდილის ლტოლვა; თვითგანადგურების ინსტინქტი.",
                                "examples": [
                                        "რომანი იკვლევს დაძაბულობას ეროსსა და თანატოსს შორის."
                                ]
                        }
                ]
        },
        {
                "word": "ბათოსი",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "emoji": "📉",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "ამაღლებულიდან მდაბიოზე მკვეთრი, იმედგამაცრუებელი გადასვლა.",
                                "examples": [
                                        "გადამწყვეტ მომენტში სიტყვა ბათოსში გადავიდა."
                                ]
                        }
                ]
        },
        {
                "word": "აპოფაზისი",
                "level": "proficiency",
                "theme": "rhetoric_persuasion_C2",
                "emoji": "🤫",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "რიტორიკული ხერხი, როდესაც რაიმეზე ყურადღებას ამახვილებენ იმის მტკიცებით, რომ მას არ ახსენებენ.",
                                "examples": [
                                        "'მის ნასამართლობას არ ვახსენებ' კლასიკური აპოფაზისია."
                                ]
                        }
                ]
        },
        {
                "word": "პარალეფსისი",
                "level": "proficiency",
                "theme": "rhetoric_persuasion_C2",
                "emoji": "🙊",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "აპოფაზისის სინონიმი.",
                                "examples": [
                                        "პოლიტიკური რიტორიკა ხშირად ეყრდნობა პარალეფსისს."
                                ]
                        }
                ]
        },
        {
                "word": "ლიმინალური სივრცე",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🚪",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "გარდამავალი ფაზა ან ზღურბლის მომენტი ორ მდგომარეობას შორის.",
                                "examples": [
                                        "შუახნის ასაკი შეიძლება გაგებულ იქნას, როგორც ლიმინალური სივრცე."
                                ]
                        }
                ]
        },
        {
                "word": "ქიაზმი",
                "level": "proficiency",
                "theme": "rhetoric_persuasion_C2",
                "emoji": "❌",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "რიტორიკული ფიგურა, რომელშიც მეორე ნაწილი პირველის შებრუნებაა.",
                                "examples": [
                                        "'ნუ კითხულობთ, რა შეუძლია გააკეთოს ქვეყანამ თქვენთვის' იყენებს ქიაზმს."
                                ]
                        }
                ]
        },
        {
                "word": "შიბოლეთი",
                "level": "proficiency",
                "theme": "linguistics_theory_C2",
                "emoji": "🔑",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "ჩვეულება, ფრაზა ან რწმენა, რომელიც გამოიყენება კონკრეტული ჯგუფის წევრების ამოსაცნობად.",
                                "examples": [
                                        "'მშრომელი ოჯახები' პოლიტიკურ შიბოლეთად იქცა."
                                ]
                        }
                ]
        }
];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();