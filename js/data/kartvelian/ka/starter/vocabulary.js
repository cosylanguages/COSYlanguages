(function() {
    const data = [
    {
        "word": "ექიმი",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "definitions": [
            {
                "text": "ადამიანი, რომელიც ეხმარება ავადმყოფებს.",
                "examples": ["ექიმი საავადმყოფოში მუშაობს."]
            }
        ]
    },
    {
        "word": "ფეხი",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "🦶",
        "form": "noun",
        "definitions": [
            {
                "text": "სხეულის ნაწილი ფეხის ქვედა მხარეს.",
                "examples": ["ფეხი მტკივა."]
            }
        ]
    },
    {
        "word": "მასწავლებელი",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🧑‍🏫",
        "form": "noun",
        "definitions": [
            {
                "text": "ადამიანი, რომელიც გეხმარება სწავლაში.",
                "examples": ["მასწავლებელი საკლასო ოთახშია."]
            }
        ]
    },
    {
        "word": "პიცა",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍕",
        "form": "noun",
        "definitions": [
            {
                "text": "ბრტყელი პური ყველით და პომიდორით.",
                "examples": ["პიცა მიყვარს."]
            }
        ]
    },
    {
        "word": "პასტა",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍝",
        "form": "noun",
        "definitions": [
            {
                "text": "ფქვილისა და კვერცხისგან დამზადებული საკვები.",
                "examples": ["დღეს პასტას ვჭამთ."]
            }
        ]
    },
    {
        "word": "ვაშლი",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍎",
        "form": "noun",
        "definitions": [
            {
                "text": "მრგვალი ხილი, წითელი ან მწვანე.",
                "examples": ["ვაშლი წითელია."]
            }
        ]
    },
    {
        "word": "პური",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍞",
        "form": "noun",
        "definitions": [
            {
                "text": "ფქვილისა და წყლისგან დამზადებული საკვები.",
                "examples": ["ყოველ დილით პურს ვყიდულობ."]
            }
        ]
    },
    {
        "word": "კვერცხი",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥚",
        "form": "noun",
        "definitions": [
            {
                "text": "ოვალური ობიექტი, რომელსაც დებს ქათამი.",
                "examples": ["კვერცხი საუზმისთვის."]
            }
        ]
    },
    {
        "word": "რძე",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥛",
        "form": "noun",
        "definitions": [
            {
                "text": "თეთრი სითხე ძროხისგან.",
                "examples": ["ცივ რძეს ვსვამ."]
            }
        ]
    },
    {
        "word": "ბანანი",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍌",
        "form": "noun",
        "definitions": [
            {
                "text": "გრძელი ყვითელი ხილი.",
                "examples": ["ბანანი ყვითელია."]
            }
        ]
    },
    {
        "word": "ყავა",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "☕",
        "form": "noun",
        "definitions": [
            {
                "text": "ცხელი ყავისფერი სასმელი.",
                "examples": ["ყავას უშაქროდ ვსვამ."]
            }
        ]
    },
    {
        "word": "ჩაი",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🍵",
        "form": "noun",
        "definitions": [
            {
                "text": "ცხელი სასმელი ფოთლებისგან.",
                "examples": ["ერთი ცხელი ჩაი, თუ შეიძლება."]
            }
        ]
    },
    {
        "word": "წყალი",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🚰",
        "form": "noun",
        "definitions": [
            {
                "text": "გამჭვირვალე სითხე, რომელსაც ვსვამთ.",
                "examples": []
            }
        ]
    },
    {
        "word": "სკოლა",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🏫",
        "form": "noun",
        "definitions": [
            {
                "text": "ადგილი, სადაც ბავშვები სწავლობენ.",
                "examples": ["სკოლა რვა საათზე იხსნება."]
            }
        ]
    },
    {
        "word": "მაისური",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👕",
        "form": "noun",
        "definitions": [
            {
                "text": "მოსასხამი მოკლე სახელოებით.",
                "examples": ["ლურჯი მაისური მაცვია."]
            }
        ]
    },
    {
        "word": "შარვალი",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👖",
        "form": "noun",
        "definitions": [
            {
                "text": "ტანსაცმელი ფეხებისთვის.",
                "examples": ["ეს შარვალი ახალია."]
            }
        ]
    },
    {
        "word": "ფეხსაცმელი",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👞",
        "form": "noun",
        "definitions": [
            {
                "text": "რამე, რასაც იცვამთ ფეხზე.",
                "examples": []
            }
        ]
    },
    {
        "word": "ქუდი",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👒",
        "form": "noun",
        "definitions": [
            {
                "text": "რამე, რასაც იხურავთ თავზე.",
                "examples": ["მზისგან დასაცავად ქუდს ატარებს."]
            }
        ]
    },
    {
        "word": "სკამი",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🪑",
        "form": "noun",
        "definitions": [
            {
                "text": "ავეჯი ჯდომისთვის.",
                "examples": ["დაჯექი ამ სკამზე."]
            }
        ]
    },
    {
        "word": "მაგიდა",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🪑",
        "form": "noun",
        "definitions": [
            {
                "text": "ავეჯი ოთხი ფეხით.",
                "examples": ["წიგნი მაგიდაზე დევს."]
            }
        ]
    },
    {
        "word": "საწოლი",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🛏️",
        "form": "noun",
        "definitions": [
            {
                "text": "ავეჯი ძილისთვის.",
                "examples": ["საწოლი ძალიან დიდია."]
            }
        ]
    },
    {
        "word": "გასაღები",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🔑",
        "form": "noun",
        "definitions": [
            {
                "text": "ლითონის ობიექტი კარის გასაღებად.",
                "examples": ["გასაღები დავკარგე."]
            }
        ]
    },
    {
        "word": "ტელეფონი",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📱",
        "form": "noun",
        "definitions": [
            {
                "text": "მოწყობილობა ადამიანებთან სასაუბროდ.",
                "examples": ["ჩემი ტელეფონი არ მუშაობს."]
            }
        ]
    },
    {
        "word": "წიგნი",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "📚",
        "form": "noun",
        "definitions": [
            {
                "text": "ბევრი გვერდი სიტყვებით, რომლებსაც კითხულობთ.",
                "examples": []
            }
        ]
    },
    {
        "word": "ჩანთა",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "👜",
        "form": "noun",
        "definitions": [
            {
                "text": "კონტეინერი ნივთების გადასატანად.",
                "examples": ["ნივთებს ჩანთით ვატარებ."]
            }
        ]
    },
    {
        "word": "კალამი",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🖊️",
        "form": "noun",
        "definitions": [
            {
                "text": "ობიექტი მელნით წერისთვის.",
                "examples": []
            }
        ]
    },
    {
        "word": "კატა",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐈",
        "form": "noun",
        "definitions": [
            {
                "text": "პატარა ცხოველი ბეწვით.",
                "examples": []
            }
        ]
    },
    {
        "word": "ძაღლი",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐕",
        "form": "noun",
        "definitions": [
            {
                "text": "ადამიანის საუკეთესო მეგობარი.",
                "examples": []
            }
        ]
    },
    {
        "word": "ხელი",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "✋",
        "form": "noun",
        "definitions": [
            {
                "text": "ხელის ნაწილი თითებით.",
                "examples": ["ხელები დაიბანე."]
            }
        ]
    },
    {
        "word": "ფეხი",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "🦵",
        "form": "noun",
        "definitions": [
            {
                "text": "სხეულის ნაწილი სიარულისთვის.",
                "examples": ["გრძელი ფეხები აქვს."]
            }
        ]
    },
    {
        "word": "თვალი",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👁️",
        "form": "noun",
        "definitions": [
            {
                "text": "სხეულის ნაწილი ხედვისთვის.",
                "examples": ["მწვანე თვალები აქვს."]
            }
        ]
    },
    {
        "word": "ცხვირი",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👃",
        "form": "noun",
        "definitions": [
            {
                "text": "სახის ნაწილი სუნთქვისთვის.",
                "examples": ["ცხვირით ვსუნთქავთ."]
            }
        ]
    },
    {
        "word": "პირი",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👄",
        "form": "noun",
        "definitions": [
            {
                "text": "სახის ნაწილი ჭამისა და ლაპარაკისთვის.",
                "examples": ["პირი გააღე."]
            }
        ]
    },
    {
        "word": "ყური",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👂",
        "form": "noun",
        "definitions": [
            {
                "text": "სხეულის ნაწილი სმენისთვის.",
                "examples": ["ყურებით გვესმის."]
            }
        ]
    },
    {
        "word": "დედა",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👩",
        "form": "noun",
        "definitions": [
            {
                "text": "ქალი მშობელი.",
                "examples": ["ქალი გაზეთს კითხულობს."]
            }
        ]
    },
    {
        "word": "მამა",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👨",
        "form": "noun",
        "definitions": [
            {
                "text": "კაცი მშობელი.",
                "examples": ["ეს კაცი ჩემი ბიძაა."]
            }
        ]
    },
    {
        "word": "მუშაობა",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "💼",
        "form": "noun",
        "definitions": [
            {
                "text": "სამუშაო ადგილი.",
                "examples": ["ახალ სამსახურს ვეძებ."]
            }
        ]
    },
    {
        "word": "სახლი",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "emoji": "🏠",
        "form": "noun",
        "definitions": [
            {
                "text": "ადგილი, სადაც ცხოვრობთ.",
                "examples": ["სახლში გვიან ვბრუნდები."]
            }
        ]
    },
    {
        "word": "მანქანა",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚗",
        "form": "noun",
        "definitions": [
            {
                "text": "ოთხბორბლიანი მანქანა.",
                "examples": ["წითელ მანქანას ვმართავ."]
            }
        ]
    },
    {
        "word": "ავტობუსი",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚌",
        "form": "noun",
        "definitions": [
            {
                "text": "დიდი მანქანა ბევრი ადამიანისთვის.",
                "examples": ["ავტობუსი მალე მოვა."]
            }
        ]
    },
    {
        "word": "მატარებელი",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚆",
        "form": "noun",
        "definitions": [
            {
                "text": "მანქანა რელსებზე.",
                "examples": []
            }
        ]
    },
    {
        "word": "ფული",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💰",
        "form": "noun",
        "definitions": [
            {
                "text": "მონეტები ან ბანკნოტები.",
                "examples": []
            }
        ]
    },
    {
        "word": "მაღაზია",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🛒",
        "form": "noun",
        "definitions": [
            {
                "text": "ადგილი, სადაც ყიდულობთ ნივთებს.",
                "examples": []
            }
        ]
    },
    {
        "word": "ოჯახი",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👪",
        "form": "noun",
        "definitions": [
            {
                "text": "ადამიანთა ჯგუფი.",
                "examples": []
            }
        ]
    },
    {
        "word": "მეგობარი",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👫",
        "form": "noun",
        "definitions": [
            {
                "text": "ადამიანი, რომელიც გიყვართ და კარგად იცნობთ.",
                "examples": ["ის ჩემი საუკეთესო მეგობარია."]
            }
        ]
    },
    {
        "word": "დღე",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "☀️",
        "form": "noun",
        "definitions": [
            {
                "text": "24 საათიანი პერიოდი.",
                "examples": []
            }
        ]
    },
    {
        "word": "კვირა",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "📅",
        "form": "noun",
        "definitions": [
            {
                "text": "შვიდდღიანი პერიოდი.",
                "examples": ["დღეს კარგი დღეა."]
            }
        ]
    },
    {
        "word": "საჭმელი",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍲",
        "form": "noun",
        "definitions": [
            {
                "text": "რასაც ადამიანები ჭამენ.",
                "examples": ["სადილი მზადაა."]
            }
        ]
    },
    {
        "word": "საუზმე",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍳",
        "form": "noun",
        "definitions": [
            {
                "text": "დღის პირველი კვება.",
                "examples": []
            }
        ]
    },
    {
        "word": "სადილი",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍱",
        "form": "noun",
        "definitions": [
            {
                "text": "შუადღის კვება.",
                "examples": []
            }
        ]
    },
    {
        "word": "ვახშამი",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍽️",
        "form": "noun",
        "definitions": [
            {
                "text": "მთავარი კვება საღამოს.",
                "examples": ["რვა საათზე ვვახშმობთ."]
            }
        ]
    },
    {
        "word": "დილა",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌅",
        "form": "noun",
        "definitions": [
            {
                "text": "დღის ნაწილი შუადღემდე.",
                "examples": ["ამ დილით ცივა."]
            }
        ]
    },
    {
        "word": "საღამო",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌆",
        "form": "noun",
        "definitions": [
            {
                "text": "დღის ნაწილი საღამომდე.",
                "examples": ["საღამოს გავდივართ."]
            }
        ]
    },
    {
        "word": "ღამე",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌙",
        "form": "noun",
        "definitions": [
            {
                "text": "სიბნელის პერიოდი.",
                "examples": []
            }
        ]
    },
    {
        "word": "დღეს",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "📅",
        "form": "noun",
        "definitions": [
            {
                "text": "დღევანდელი დღე.",
                "examples": []
            }
        ]
    },
    {
        "word": "ხვალ",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "⏭️",
        "form": "noun",
        "definitions": [
            {
                "text": "დღე დღევანდელის შემდეგ.",
                "examples": []
            }
        ]
    },
    {
        "word": "ქმარი",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👨",
        "form": "noun",
        "definitions": [
            {
                "text": "დაქორწინებული მამაკაცი.",
                "examples": []
            }
        ]
    },
    {
        "word": "ცოლი",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👩",
        "form": "noun",
        "definitions": [
            {
                "text": "დაქორწინებული ქალი.",
                "examples": []
            }
        ]
    },
    {
        "word": "ბავშვი",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👶",
        "form": "noun",
        "definitions": [
            {
                "text": "ახალგაზრდა ადამიანი.",
                "examples": []
            }
        ]
    },
    {
        "word": "მზე",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "noun",
        "definitions": [
            {
                "text": "ვარსკვლავი, რომელიც იძლევა სინათლესა და სითბოს.",
                "examples": []
            }
        ]
    },
    {
        "word": "წვიმა",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌧️",
        "form": "noun",
        "definitions": [
            {
                "text": "წყალი, რომელიც ღრუბლებიდან მოდის.",
                "examples": []
            }
        ]
    }
]
    const lang = "ka";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();