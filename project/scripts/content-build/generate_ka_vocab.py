import os, json

BASE_DIR = "vocabulary/ka"

def write_js(filepath, lang, data):
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    content = f"""// TODO: verify level classification
(function() {{
    const lang = "{lang}";
    const data = {json.dumps(data, ensure_ascii=False, indent=4)};
    window.vocabularyData = window.vocabularyData || {{}};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
}})();
"""
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

ka_a1_categories = {
    "animals.js": [
        {"word": "ძაღლი", "level": "starter", "theme": "animals", "emoji": "🐕", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "შინაური ცხოველი, ადამიანის ერთგული მეგობარი.", "examples": ["ძაღლი ეზოში დარბის."]}], "lang": "ka", "transcription": "", "id": "ka_starter_animals_001"},
        {"word": "კატა", "level": "starter", "theme": "animals", "emoji": "🐈", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "პატარა შინაური ცხოველი.", "examples": ["კატას სკამზე სძინავს."]}], "lang": "ka", "transcription": "", "id": "ka_starter_animals_002"},
        {"word": "ფრინველი", "level": "starter", "theme": "animals", "emoji": "🐦", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ფრთებიანი ცხოველი, რომელიც ჰაერში დაფრინავს.", "examples": ["ფრინველი ხეზე მღერის."]}], "lang": "ka", "transcription": "", "id": "ka_starter_animals_003"},
        {"word": "თევზი", "level": "starter", "theme": "animals", "emoji": "🐟", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "წყალში მცხოვრები ცხოველი.", "examples": ["თევზი წყალში ცურავს."]}], "lang": "ka", "transcription": "", "id": "ka_starter_animals_004"},
        {"word": "ძროხა", "level": "starter", "theme": "animals", "emoji": "🐄", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "დიდი შინაური ცხოველი, რომელიც რძეს იძლევა.", "examples": ["ძროხა ბალახს ჭამს."]}], "lang": "ka", "transcription": "", "id": "ka_starter_animals_005"},
        {"word": "ცხენი", "level": "starter", "theme": "animals", "emoji": "🐎", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ძლიერი, სწრაფი ცხოველი.", "examples": ["ცხენი ველზე დარბის."]}], "lang": "ka", "transcription": "", "id": "ka_starter_animals_006"},
        {"word": "მგელი", "level": "starter", "theme": "animals", "emoji": "🐺", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ტყეში მცხოვრები მტაცებელი ცხოველი.", "examples": ["მგელი ტყეში ცხოვრობს."]}], "lang": "ka", "transcription": "", "id": "ka_starter_animals_007"},
        {"word": "დათვი", "level": "starter", "theme": "animals", "emoji": "🐻", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "დიდი ტყის ცხოველი.", "examples": ["დათვი ტყეში დადის."]}], "lang": "ka", "transcription": "", "id": "ka_starter_animals_008"}
    ],
    "body.js": [
        {"word": "თავი", "level": "starter", "theme": "body", "emoji": "🗣️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "სხეულის ზედა ნაწილი.", "examples": ["თავი მტკივა."]}], "lang": "ka", "transcription": "", "id": "ka_starter_body_001"},
        {"word": "ხელი", "level": "starter", "theme": "body", "emoji": "✋", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "საგნების დასაჭერი სხეულის ნაწილი.", "examples": ["ხელების დაბანა აუცილებელია."]}], "lang": "ka", "transcription": "", "id": "ka_starter_body_002"},
        {"word": "ფეხი", "level": "starter", "theme": "body", "emoji": "🦶", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "სიარულისთვის განკუთვნილი სხეულის ნაწილი.", "examples": ["ფეხით სეირნობა მიყვარს."]}], "lang": "ka", "transcription": "", "id": "ka_starter_body_003"},
        {"word": "თვალი", "level": "starter", "theme": "body", "emoji": "👁️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ხედვის ორგანო.", "examples": ["მას ლურჯი თვალები აქვს."]}], "lang": "ka", "transcription": "", "id": "ka_starter_body_004"},
        {"word": "ყური", "level": "starter", "theme": "body", "emoji": "👂", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "სმენის ორგანო.", "examples": ["ყურით ვისმენთ მუსიკას."]}], "lang": "ka", "transcription": "", "id": "ka_starter_body_005"},
        {"word": "პირის ღრუ", "level": "starter", "theme": "body", "emoji": "👄", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ჭამისა და ლაპარაკის ორგანო.", "examples": ["პირის გაღება."]}], "lang": "ka", "transcription": "", "id": "ka_starter_body_006"}
    ],
    "clothes.js": [
        {"word": "პერანგი", "level": "starter", "theme": "clothes", "emoji": "👔", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ტანის ზედა სამოსი.", "examples": ["თეთრი პერანგი ჩავიცვი."]}], "lang": "ka", "transcription": "", "id": "ka_starter_clothes_001"},
        {"word": "შარვალი", "level": "starter", "theme": "clothes", "emoji": "👖", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ფეხის სამოსი.", "examples": ["შავი შარვალი აცვია."]}], "lang": "ka", "transcription": "", "id": "ka_starter_clothes_002"},
        {"word": "კაბა", "level": "starter", "theme": "clothes", "emoji": "👗", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ქალის ტანსაცმელი.", "examples": ["ლამაზი კაბა აცვია."]}], "lang": "ka", "transcription": "", "id": "ka_starter_clothes_003"},
        {"word": "ქურთუკი", "level": "starter", "theme": "clothes", "emoji": "🧥", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "თბილი ზედა ტანსაცმელი.", "examples": ["ზამთარში თბილი ქურთუკი გვჭირდება."]}], "lang": "ka", "transcription": "", "id": "ka_starter_clothes_004"}
    ],
    "colours.js": [
        {"word": "შავი", "level": "starter", "theme": "colours", "emoji": "⬛", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "ღამის ფერი.", "examples": ["შავი კატა ეზოშია."]}], "lang": "ka", "transcription": "", "id": "ka_starter_colours_001"},
        {"word": "თეთრი", "level": "starter", "theme": "colours", "emoji": "⬜", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "თოვლის ფერი.", "examples": ["თეთრი თოვლი მოდის."]}], "lang": "ka", "transcription": "", "id": "ka_starter_colours_002"},
        {"word": "წითელი", "level": "starter", "theme": "colours", "emoji": "🟥", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "სისხლის ან ვაშლის ფერი.", "examples": ["წითელი ვაშლი გემრიელია."]}], "lang": "ka", "transcription": "", "id": "ka_starter_colours_003"},
        {"word": "ლურჯი", "level": "starter", "theme": "colours", "emoji": "🟦", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "ცის ფერი.", "examples": ["ლურჯი ცა მოწმენდილია."]}], "lang": "ka", "transcription": "", "id": "ka_starter_colours_004"},
        {"word": "მწვანე", "level": "starter", "theme": "colours", "emoji": "🟩", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "ბალახის ფერი.", "examples": ["მწვანე ბალახი ეზოში."]}], "lang": "ka", "transcription": "", "id": "ka_starter_colours_005"},
        {"word": "ყვითელი", "level": "starter", "theme": "colours", "emoji": "🟨", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "მზის ფერი.", "examples": ["ყვითელი ყვავილი ბაღში."]}], "lang": "ka", "transcription": "", "id": "ka_starter_colours_006"}
    ],
    "family.js": [
        {"word": "მამა", "level": "starter", "theme": "family", "emoji": "👨", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ოჯახის მამაკაცი მშობელი.", "examples": ["მამა სამსახურიდან დაბრუნდა."]}], "lang": "ka", "transcription": "", "id": "ka_starter_family_001"},
        {"word": "დედა", "level": "starter", "theme": "family", "emoji": "👩", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ოჯახის ქალი მშობელი.", "examples": ["დედა სადილს ამზადებს."]}], "lang": "ka", "transcription": "", "id": "ka_starter_family_002"},
        {"word": "ძმა", "level": "starter", "theme": "family", "emoji": "👦", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ვაჟი დედმამიშვილი.", "examples": ["ჩემი ძმა სკოლაში სწავლობს."]}], "lang": "ka", "transcription": "", "id": "ka_starter_family_003"},
        {"word": "და", "level": "starter", "theme": "family", "emoji": "👧", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ქალი დედმამიშვილი.", "examples": ["ჩემი და წიგნს კითხულობს."]}], "lang": "ka", "transcription": "", "id": "ka_starter_family_004"},
        {"word": "პაპა", "level": "starter", "theme": "family", "emoji": "👴", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "მშობლის მამა.", "examples": ["პაპა ბაღში მუშაობს."]}], "lang": "ka", "transcription": "", "id": "ka_starter_family_005"},
        {"word": "ბებია", "level": "starter", "theme": "family", "emoji": "👵", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "მშობლის დედა.", "examples": ["ბებია ნამცხვარს აცხობს."]}], "lang": "ka", "transcription": "", "id": "ka_starter_family_006"}
    ],
    "food_drink.js": [
        {"word": "პური", "level": "starter", "theme": "food_drink", "emoji": "🍞", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "ძირითადი საჭმელი, ფქვილისგან გამომცხვარი.", "examples": ["ახალი პური გემრიელია."]}], "lang": "ka", "transcription": "", "id": "ka_starter_food_drink_001"},
        {"word": "რძე", "level": "starter", "theme": "food_drink", "emoji": "🥛", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "თეთრი სასმელი, ძროხისგან მიღებული.", "examples": ["დილით თბილ რძეს ვსვამ."]}], "lang": "ka", "transcription": "", "id": "ka_starter_food_drink_002"},
        {"word": "წყალი", "level": "starter", "theme": "food_drink", "emoji": "💧", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "სიცოცხლისთვის აუცილებელი სითხე.", "examples": ["ცივ წყალს ვსვამ."]}], "lang": "ka", "transcription": "", "id": "ka_starter_food_drink_003"},
        {"word": "ჩაი", "level": "starter", "theme": "food_drink", "emoji": "☕", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "ცხელი პოპულარული სასმელი.", "examples": ["ცხელ ჩაის ვამზადებ."]}], "lang": "ka", "transcription": "", "id": "ka_starter_food_drink_004"},
        {"word": "კარაქი", "level": "starter", "theme": "food_drink", "emoji": "🧈", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "რძისგან დამზადებული პროდუქტი.", "examples": ["პურზე კარაქს ვუსვამ."]}], "lang": "ka", "transcription": "", "id": "ka_starter_food_drink_005"},
        {"word": "ვაშლი", "level": "starter", "theme": "food_drink", "emoji": "🍎", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "გემრიელი ხილი.", "examples": ["წითელ ვაშლს ვჭამ."]}], "lang": "ka", "transcription": "", "id": "ka_starter_food_drink_006"}
    ],
    "furniture.js": [
        {"word": "მაგიდა", "level": "starter", "theme": "furniture", "emoji": "🪑", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ავეჯი ჭამისა და მუშაობისთვის.", "examples": ["წიგნი მაგიდაზე დევს."]}], "lang": "ka", "transcription": "", "id": "ka_starter_furniture_001"},
        {"word": "სკამი", "level": "starter", "theme": "furniture", "emoji": "🪑", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "დასაჯდომი ავეჯი.", "examples": ["სკამზე დაჯდომა."]}], "lang": "ka", "transcription": "", "id": "ka_starter_furniture_002"},
        {"word": "საწოლი", "level": "starter", "theme": "furniture", "emoji": "🛏️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ძილისთვის განკუთვნილი ავეჯი.", "examples": ["საწოლში დაძინება."]}], "lang": "ka", "transcription": "", "id": "ka_starter_furniture_003"},
        {"word": "კარადა", "level": "starter", "theme": "furniture", "emoji": "🚪", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ტანსაცმლის შესანახი ავეჯი.", "examples": ["ტანსაცმელი კარადაშია."]}], "lang": "ka", "transcription": "", "id": "ka_starter_furniture_004"}
    ],
    "greetings.js": [
        {"word": "გამარჯობა", "level": "starter", "theme": "greetings", "emoji": "👋", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "მისალმების სიტყვა.", "examples": ["გამარჯობა, როგორ ხარ?"]}], "lang": "ka", "transcription": "", "id": "ka_starter_greetings_001"},
        {"word": "ნახვამდის", "level": "starter", "theme": "greetings", "emoji": "👋", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "დამშვიდობების სიტყვა.", "examples": ["ნახვამდის, ხვალამდე!"]}], "lang": "ka", "transcription": "", "id": "ka_starter_greetings_002"},
        {"word": "გმადლობთ", "level": "starter", "theme": "greetings", "emoji": "🙏", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "მადლობის გადახდის სიტყვა.", "examples": ["დიდი მადლობა დახმარებისთვის."]}], "lang": "ka", "transcription": "", "id": "ka_starter_greetings_003"},
        {"word": "დილა მშვიდობისა", "level": "starter", "theme": "greetings", "emoji": "🌅", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "დილით მისალმება.", "examples": ["დილა მშვიდობისა, ყველას!"]}], "lang": "ka", "transcription": "", "id": "ka_starter_greetings_004"}
    ],
    "jobs.js": [
        {"word": "მასწავლებელი", "level": "starter", "theme": "jobs", "emoji": "👨‍🏫", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "სკოლაში სწავლების სპეციალისტი.", "examples": ["მასწავლებელი გაკვეთილს ხსნის."]}], "lang": "ka", "transcription": "", "id": "ka_starter_jobs_001"},
        {"word": "ექიმი", "level": "starter", "theme": "jobs", "emoji": "👨‍⚕️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ავადმყოფების მკურნალი.", "examples": ["ექიმი პაციენტს სინჯავს."]}], "lang": "ka", "transcription": "", "id": "ka_starter_jobs_002"},
        {"word": "მზარეული", "level": "starter", "theme": "jobs", "emoji": "👨‍🍳", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "საჭმლის მომზადების სპეციალისტი.", "examples": ["მზარეულმა გემრიელი სადილი მოამზადა."]}], "lang": "ka", "transcription": "", "id": "ka_starter_jobs_003"},
        {"word": "მძღოლი", "level": "starter", "theme": "jobs", "emoji": "👨‍✈️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ტრანსპორტის მართვის სპეციალისტი.", "examples": ["მძღოლი ავტობუსს მართავს."]}], "lang": "ka", "transcription": "", "id": "ka_starter_jobs_004"}
    ],
    "nature.js": [
        {"word": "მზე", "level": "starter", "theme": "nature", "emoji": "☀️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "სინათლისა და სითბოს წყარო ვარსკვლავი.", "examples": ["მზე ბრწყინავს ცაზე."]}], "lang": "ka", "transcription": "", "id": "ka_starter_nature_001"},
        {"word": "მთვარე", "level": "starter", "theme": "nature", "emoji": "🌙", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ღამით ცაზე გამოჩენილი მნათობი.", "examples": ["ღამით მთვარე ანათებს."]}], "lang": "ka", "transcription": "", "id": "ka_starter_nature_002"},
        {"word": "ხე", "level": "starter", "theme": "nature", "emoji": "🌳", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "მაღალი მცენარე ფოთლებით.", "examples": ["დიდი ხე დგას ეზოში."]}], "lang": "ka", "transcription": "", "id": "ka_starter_nature_003"},
        {"word": "მდინარე", "level": "starter", "theme": "nature", "emoji": "🏞️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "წყლის ბუნებრივი ნაკადი.", "examples": ["მტკვარი დიდი მდინარეა."]}], "lang": "ka", "transcription": "", "id": "ka_starter_nature_004"},
        {"word": "ზღვა", "level": "starter", "theme": "nature", "emoji": "🌊", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "დიდი მარილიანი წყალსატევი.", "examples": ["შავი ზღვა ძალიან ლამაზია."]}], "lang": "ka", "transcription": "", "id": "ka_starter_nature_005"}
    ],
    "numbers.js": [
        {"word": "ერთი", "level": "starter", "theme": "numbers", "emoji": "1️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "პირველი რიცხვი.", "examples": ["ერთი, ორი, სამი."]}], "lang": "ka", "transcription": "", "id": "ka_starter_numbers_001"},
        {"word": "ორი", "level": "starter", "theme": "numbers", "emoji": "2️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ერთის მომდევნო რიცხვი.", "examples": ["ორი წიგნი მაქვს."]}], "lang": "ka", "transcription": "", "id": "ka_starter_numbers_002"},
        {"word": "სამი", "level": "starter", "theme": "numbers", "emoji": "3️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ორის მომდევნო რიცხვი.", "examples": ["სამი ძმა ყავს."]}], "lang": "ka", "transcription": "", "id": "ka_starter_numbers_003"},
        {"word": "ოთხი", "level": "starter", "theme": "numbers", "emoji": "4️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "სამის მომდევნო რიცხვი.", "examples": ["ოთხი სკამი ოთახში."]}], "lang": "ka", "transcription": "", "id": "ka_starter_numbers_004"},
        {"word": "ხუთი", "level": "starter", "theme": "numbers", "emoji": "5️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ოთხის მომდევნო რიცხვი.", "examples": ["ხუთი თითი ხელზე."]}], "lang": "ka", "transcription": "", "id": "ka_starter_numbers_005"}
    ],
    "places.js": [
        {"word": "სახლი", "level": "starter", "theme": "places", "emoji": "🏠", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ადამიანების საცხოვრებელი შენობა.", "examples": ["სახლში დაბრუნება."]}], "lang": "ka", "transcription": "", "id": "ka_starter_places_001"},
        {"word": "ქალაქი", "level": "starter", "theme": "places", "emoji": "🏙️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "დიდი დასახლებული პუნქტი.", "examples": ["თბილისი ლამაზი ქალაქია."]}], "lang": "ka", "transcription": "", "id": "ka_starter_places_002"},
        {"word": "სკოლა", "level": "starter", "theme": "places", "emoji": "🏫", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "სწავლის ადგილი.", "examples": ["ბავშვები სკოლაში მიდიან."]}], "lang": "ka", "transcription": "", "id": "ka_starter_places_003"},
        {"word": "მაღაზია", "level": "starter", "theme": "places", "emoji": "🏪", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "სავაჭრო ადგილი.", "examples": ["მაღაზიაში პურის ყიდვა."]}], "lang": "ka", "transcription": "", "id": "ka_starter_places_004"}
    ],
    "school.js": [
        {"word": "წიგნი", "level": "starter", "theme": "school", "emoji": "📖", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ნაბეჭდი გვერდების კრებული საკითხავად.", "examples": ["საინტერესო წიგნის კითხვა."]}], "lang": "ka", "transcription": "", "id": "ka_starter_school_001"},
        {"word": "რვეული", "level": "starter", "theme": "school", "emoji": "📓", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ჩასაწერი ცარიელი გვერდები.", "examples": ["რვეულში დაწერა."]}], "lang": "ka", "transcription": "", "id": "ka_starter_school_002"},
        {"word": "კალამი", "level": "starter", "theme": "school", "emoji": "🖊️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "წერის იარაღი.", "examples": ["კალმით წერა."]}], "lang": "ka", "transcription": "", "id": "ka_starter_school_003"},
        {"word": "გაკვეთილი", "level": "starter", "theme": "school", "emoji": "📝", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "სწავლების დრო სკოლაში.", "examples": ["ქართული ენის გაკვეთილი."]}], "lang": "ka", "transcription": "", "id": "ka_starter_school_004"}
    ],
    "shopping.js": [
        {"word": "ფასი", "level": "starter", "theme": "shopping", "emoji": "🏷️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ნივთის ღირებულება ფულში.", "examples": ["რა ღირს ეს ნივთი?"]}], "lang": "ka", "transcription": "", "id": "ka_starter_shopping_001"},
        {"word": "ფული", "level": "starter", "theme": "shopping", "emoji": "💶", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "გადახდის საშუალება.", "examples": ["ფულით გადახდა."]}], "lang": "ka", "transcription": "", "id": "ka_starter_shopping_002"},
        {"word": "ყიდვა", "level": "starter", "theme": "shopping", "emoji": "🛒", "form": "verb", "classification": "regular", "countability": "null", "definitions": [{"text": "ნივთის მიღება ფულის გადახდით.", "examples": ["მაღაზიაში პროდუქტების ყიდვა."]}], "lang": "ka", "transcription": "", "id": "ka_starter_shopping_003"}
    ],
    "social.js": [
        {"word": "მეგობარი", "level": "starter", "theme": "social", "emoji": "🧑‍🤝‍🧑", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ახლობელი ადამიანი.", "examples": ["ჩემი საუკეთესო მეგობარი."]}], "lang": "ka", "transcription": "", "id": "ka_starter_social_001"},
        {"word": "დღესასწაული", "level": "starter", "theme": "social", "emoji": "🎉", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "სიხარულის საზოგადოებრივი დღე.", "examples": ["ახალი წელი დიდი დღესასწაულია."]}], "lang": "ka", "transcription": "", "id": "ka_starter_social_002"},
        {"word": "საუბარი", "level": "starter", "theme": "social", "emoji": "💬", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ადამიანებს შორის ლაპარაკი.", "examples": ["მეგობართან საუბარი."]}], "lang": "ka", "transcription": "", "id": "ka_starter_social_003"}
    ],
    "technology.js": [
        {"word": "კომპიუტერი", "level": "starter", "theme": "technology", "emoji": "💻", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ელექტრონული მანქანა მუშაობისთვის.", "examples": ["კომპიუტერთან მუშაობა."]}], "lang": "ka", "transcription": "", "id": "ka_starter_technology_001"},
        {"word": "ტელეფონი", "level": "starter", "theme": "technology", "emoji": "📱", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "კომუნიკაციის მოწყობილობა.", "examples": ["ტელეფონით დარეკვა."]}], "lang": "ka", "transcription": "", "id": "ka_starter_technology_002"}
    ],
    "time.js": [
        {"word": "დღე", "level": "starter", "theme": "time", "emoji": "📅", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "24 საათის დროის მონაკვეთი.", "examples": ["დღეს კარგი ამინდია."]}], "lang": "ka", "transcription": "", "id": "ka_starter_time_001"},
        {"word": "ღამე", "level": "starter", "theme": "time", "emoji": "🌃", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ბნელი დრო ძილისთვის.", "examples": ["ღამით ყველას სძინავს."]}], "lang": "ka", "transcription": "", "id": "ka_starter_time_002"},
        {"word": "დღეს", "level": "starter", "theme": "time", "emoji": "📆", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "მიმდინარე დღე.", "examples": ["დღეს მნიშვნელოვანი შეხვედრაა."]}], "lang": "ka", "transcription": "", "id": "ka_starter_time_003"},
        {"word": "ხვალ", "level": "starter", "theme": "time", "emoji": "➡️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "დღევანდელის მომდევნო დღე.", "examples": ["ხვალ შევხვდებით."]}], "lang": "ka", "transcription": "", "id": "ka_starter_time_004"}
    ],
    "travel.js": [
        {"word": "მანქანა", "level": "starter", "theme": "travel", "emoji": "🚗", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ტრანსპორტი გადასაადგილებლად.", "examples": ["მანქანით მგზავრობა."]}], "lang": "ka", "transcription": "", "id": "ka_starter_travel_001"},
        {"word": "მატარებელი", "level": "starter", "theme": "travel", "emoji": "🚆", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "რკინიგზის ტრანსპორტი.", "examples": ["მატარებლით გამგზავრება."]}], "lang": "ka", "transcription": "", "id": "ka_starter_travel_002"},
        {"word": "მოგზაურობა", "level": "starter", "theme": "travel", "emoji": "🧳", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ახალ ადგილებში წასვლა.", "examples": ["საინტერესო მოგზაურობა."]}], "lang": "ka", "transcription": "", "id": "ka_starter_travel_003"}
    ]
}

for filename, entries in ka_a1_categories.items():
    write_js(os.path.join(BASE_DIR, "A1", filename), "ka", entries)

ka_b2_vocabulary = [
    {"word": "მოქალაქეობა", "level": "upper_intermediate", "theme": "society", "emoji": "🏛️", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "სამართლებრივი კავშირი ადამიანსა და სახელმწიფოს შორის.", "examples": ["მოქალაქეობის პასუხისმგებლობა."]}], "lang": "ka", "transcription": "", "id": "ka_upper_intermediate_society_001"},
    {"word": "საზოგადოება", "level": "upper_intermediate", "theme": "society", "emoji": "👥", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ერთად მცხოვრები ადამიანების ერთობლიობა.", "examples": ["საზოგადოების განვითარება."]}], "lang": "ka", "transcription": "", "id": "ka_upper_intermediate_society_002"},
    {"word": "თანამშრომლობა", "level": "upper_intermediate", "theme": "economy", "emoji": "🤝", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "ერთობლივი მუშაობა საერთო მიზნისთვის.", "examples": ["საერთაშორისო თანამშრომლობა."]}], "lang": "ka", "transcription": "", "id": "ka_upper_intermediate_economy_001"}
]

ka_b2_adjectives = [
    {"word": "დამოუკიდებელი", "level": "upper_intermediate", "theme": "describing", "emoji": "🗽", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "სხვებზე არადამოკიდებული.", "examples": ["დამოუკიდებელი გადაწყვეტილების მიღება."]}], "lang": "ka", "transcription": "", "id": "ka_upper_intermediate_describing_001"},
    {"word": "სასარგებლო", "level": "upper_intermediate", "theme": "describing", "emoji": "💡", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "კარგი შედეგის მომტანი.", "examples": ["სასარგებლო რჩევის მიცემა."]}], "lang": "ka", "transcription": "", "id": "ka_upper_intermediate_describing_002"}
]

ka_b2_verbs = [
    {"word": "გაძლიერება", "level": "upper_intermediate", "theme": "actions", "emoji": "💪", "form": "verb", "classification": "regular", "countability": "null", "definitions": [{"text": "უფრო ძლიერი გახდომა ან გახდომა.", "examples": ["ურთიერთობების გაძლიერება."]}], "lang": "ka", "transcription": "", "id": "ka_upper_intermediate_actions_001"},
    {"word": "განვითარება", "level": "upper_intermediate", "theme": "actions", "emoji": "📈", "form": "verb", "classification": "regular", "countability": "null", "definitions": [{"text": "წინსვლა და სრულყოფა.", "examples": ["ენის ცოდნის განვითარება."]}], "lang": "ka", "transcription": "", "id": "ka_upper_intermediate_actions_002"}
]

write_js(os.path.join(BASE_DIR, "B2", "vocabulary.js"), "ka", ka_b2_vocabulary)
write_js(os.path.join(BASE_DIR, "B2", "adjectives.js"), "ka", ka_b2_adjectives)
write_js(os.path.join(BASE_DIR, "B2", "verbs.js"), "ka", ka_b2_verbs)

ka_c1_vocabulary = [
    {"word": "კონცეფცია", "level": "advanced", "theme": "philosophy", "emoji": "🧠", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "ძირითადი შეხედულებებისა და იდეების სისტემა.", "examples": ["სამეცნიერო კონცეფციის შემუშავება."]}], "lang": "ka", "transcription": "", "id": "ka_advanced_philosophy_001"},
    {"word": "ავტონომია", "level": "advanced", "theme": "politics", "emoji": "🏛️", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "თვითმმართველობის უფლება.", "examples": ["კულტურული ავტონომია."]}], "lang": "ka", "transcription": "", "id": "ka_advanced_politics_001"}
]

ka_c1_adjectives = [
    {"word": "კონცეპტუალური", "level": "advanced", "theme": "describing", "emoji": "🔬", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "კონცეფციაზე დაფუძნებული.", "examples": ["კონცეპტუალური მიდგომა."]}], "lang": "ka", "transcription": "", "id": "ka_advanced_describing_001"}
]

ka_c1_verbs = [
    {"word": "ანალიზი", "level": "advanced", "theme": "actions", "emoji": "🔎", "form": "verb", "classification": "regular", "countability": "null", "definitions": [{"text": "ღრმა გამოკვლევა და დასკვნების გამოტანა.", "examples": ["მონაცემების ანალიზი."]}], "lang": "ka", "transcription": "", "id": "ka_advanced_actions_001"}
]

write_js(os.path.join(BASE_DIR, "C1", "vocabulary.js"), "ka", ka_c1_vocabulary)
write_js(os.path.join(BASE_DIR, "C1", "adjectives.js"), "ka", ka_c1_adjectives)
write_js(os.path.join(BASE_DIR, "C1", "verbs.js"), "ka", ka_c1_verbs)

def update_index_json(dirpath):
    files = sorted([f for f in os.listdir(dirpath) if f.endswith('.js')])
    with open(os.path.join(dirpath, "index.json"), "w", encoding="utf-8") as f:
        json.dump(files, f, ensure_ascii=False, indent=2)

update_index_json(os.path.join(BASE_DIR, "A1"))
update_index_json(os.path.join(BASE_DIR, "B2"))
update_index_json(os.path.join(BASE_DIR, "C1"))

print("Updated generate_ka_vocab.py successfully!")
