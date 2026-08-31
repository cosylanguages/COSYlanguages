import os, json

BASE_DIR = "vocabulary/tt"

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

tt_a1_categories = {
    "animals.js": [
        {"word": "эт", "level": "starter", "theme": "animals", "emoji": "🐕", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Өй хайваны, кешенең якын дусы.", "examples": ["Эт ишегалдында чаба."]}], "lang": "tt", "transcription": "", "id": "tt_starter_animals_001"},
        {"word": "мәче", "level": "starter", "theme": "animals", "emoji": "🐈", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Кечкенә өй хайваны.", "examples": ["Мәче урындыкта йоклый."]}], "lang": "tt", "transcription": "", "id": "tt_starter_animals_002"},
        {"word": "кош", "level": "starter", "theme": "animals", "emoji": "🐦", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Канатлы, һавада оча торган хайван.", "examples": ["Кош агачта ырлый."]}], "lang": "tt", "transcription": "", "id": "tt_starter_animals_003"},
        {"word": "балык", "level": "starter", "theme": "animals", "emoji": "🐟", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Суда яши торган хайван.", "examples": ["Балык су астында йөзә."]}], "lang": "tt", "transcription": "", "id": "tt_starter_animals_004"},
        {"word": "сыер", "level": "starter", "theme": "animals", "emoji": "🐄", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Сөт бирә торган зур өй хайваны.", "examples": ["Сыер үлән ашый."]}], "lang": "tt", "transcription": "", "id": "tt_starter_starter_animals_005"},
        {"word": "ат", "level": "starter", "theme": "animals", "emoji": "🐎", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Көчле, тиз чаба торган хайван.", "examples": ["Ат яланда чаба."]}], "lang": "tt", "transcription": "", "id": "tt_starter_animals_006"},
        {"word": "бүре", "level": "starter", "theme": "animals", "emoji": "🐺", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Урманда яши торган ерткыч хайван.", "examples": ["Бүре урманда яши."]}], "lang": "tt", "transcription": "", "id": "tt_starter_animals_007"},
        {"word": "куян", "level": "starter", "theme": "animals", "emoji": "🐇", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Озын колаклы кечкенә хайван.", "examples": ["Куян урманда сикерә."]}], "lang": "tt", "transcription": "", "id": "tt_starter_animals_008"}
    ],
    "body.js": [
        {"word": "баш", "level": "starter", "theme": "body", "emoji": "🗣️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Кешенең яки хайванның өске өлеше.", "examples": ["Башым авырта."]}], "lang": "tt", "transcription": "", "id": "tt_starter_body_001"},
        {"word": "кул", "level": "starter", "theme": "body", "emoji": "✋", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Нәрсәнедер тоту өчен тән өлеше.", "examples": ["Кулны юарга кирәк."]}], "lang": "tt", "transcription": "", "id": "tt_starter_body_002"},
        {"word": "аяк", "level": "starter", "theme": "body", "emoji": "🦶", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Йөрү өчен тән өлеше.", "examples": ["Аягым арыды."]}], "lang": "tt", "transcription": "", "id": "tt_starter_body_003"},
        {"word": "күз", "level": "starter", "theme": "body", "emoji": "👁️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Күрү органы.", "examples": ["Аның күзләре зәңгәр."]}], "lang": "tt", "transcription": "", "id": "tt_starter_body_004"},
        {"word": "колак", "level": "starter", "theme": "body", "emoji": "👂", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Иштерү органы.", "examples": ["Колак белән ишетәбез."]}], "lang": "tt", "transcription": "", "id": "tt_starter_body_005"},
        {"word": "авыз", "level": "starter", "theme": "body", "emoji": "👄", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ашау һәм сөйләшү органы.", "examples": ["Авызны ачу."]}], "lang": "tt", "transcription": "", "id": "tt_starter_body_006"}
    ],
    "clothes.js": [
        {"word": "күлмәк", "level": "starter", "theme": "clothes", "emoji": "👗", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Үскән кием өлеше.", "examples": ["Яңа күлмәк кидем."]}], "lang": "tt", "transcription": "", "id": "tt_starter_clothes_001"},
        {"word": "ыштан", "level": "starter", "theme": "clothes", "emoji": "👖", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Аяк киеме һәм тән киеме.", "examples": ["Кара ыштан кию."]}], "lang": "tt", "transcription": "", "id": "tt_starter_clothes_002"},
        {"word": "башлык", "level": "starter", "theme": "clothes", "emoji": "🧢", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Башка кия торган кием.", "examples": ["Кышын җылы башлык киябез."]}], "lang": "tt", "transcription": "", "id": "tt_starter_clothes_003"},
        {"word": "куртка", "level": "starter", "theme": "clothes", "emoji": "🧥", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Өске җылы кием.", "examples": ["Көзен куртка киелә."]}], "lang": "tt", "transcription": "", "id": "tt_starter_clothes_004"}
    ],
    "colours.js": [
        {"word": "кара", "level": "starter", "theme": "colours", "emoji": "⬛", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Төн төсе.", "examples": ["Кара мәче аша уза."]}], "lang": "tt", "transcription": "", "id": "tt_starter_colours_001"},
        {"word": "ак", "level": "starter", "theme": "colours", "emoji": "⬜", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Кар төсе.", "examples": ["Ап-ак кар ява."]}], "lang": "tt", "transcription": "", "id": "tt_starter_colours_002"},
        {"word": "кызыл", "level": "starter", "theme": "colours", "emoji": "🟥", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Кан яки кайнар төс.", "examples": ["Кызыл алма бик тәмле."]}], "lang": "tt", "transcription": "", "id": "tt_starter_colours_003"},
        {"word": "зәңгәр", "level": "starter", "theme": "colours", "emoji": "🟦", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Күк төсе.", "examples": ["Зәңгәр күк йөзе."]}], "lang": "tt", "transcription": "", "id": "tt_starter_colours_004"},
        {"word": "яшел", "level": "starter", "theme": "colours", "emoji": "🟩", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Үлән һәм яфрак төсе.", "examples": ["Яшел үлән үсә."]}], "lang": "tt", "transcription": "", "id": "tt_starter_colours_005"},
        {"word": "сары", "level": "starter", "theme": "colours", "emoji": "🟨", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Кояш төсе.", "examples": ["Сары чәчәк атылды."]}], "lang": "tt", "transcription": "", "id": "tt_starter_colours_006"}
    ],
    "family.js": [
        {"word": "әти", "level": "starter", "theme": "family", "emoji": "👨", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Гаиләдә абый/ир кеше.", "examples": ["Әти эштән кайтты."]}], "lang": "tt", "transcription": "", "id": "tt_starter_family_001"},
        {"word": "әни", "level": "starter", "theme": "family", "emoji": "👩", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Гаиләдә ана кеше.", "examples": ["Әни аш пешерә."]}], "lang": "tt", "transcription": "", "id": "tt_starter_family_002"},
        {"word": "абый", "level": "starter", "theme": "family", "emoji": "👦", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Уз егет туган.", "examples": ["Абыем мәктәптә укый."]}], "lang": "tt", "transcription": "", "id": "tt_starter_family_003"},
        {"word": "апа", "level": "starter", "theme": "family", "emoji": "👧", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Уз кыз туган.", "examples": ["Апам китап укый."]}], "lang": "tt", "transcription": "", "id": "tt_starter_family_004"},
        {"word": "бабай", "level": "starter", "theme": "family", "emoji": "👴", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Әтинең яки әнинең әтисе.", "examples": ["Бабай бакчада эшли."]}], "lang": "tt", "transcription": "", "id": "tt_starter_family_005"},
        {"word": "әби", "level": "starter", "theme": "family", "emoji": "👵", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Әтинең яки әнинең әнисе.", "examples": ["Әби бәлеш пешерә."]}], "lang": "tt", "transcription": "", "id": "tt_starter_family_006"}
    ],
    "food_drink.js": [
        {"word": "икмәк", "level": "starter", "theme": "food_drink", "emoji": "🍞", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Төп ризык, оннан пешерелә.", "examples": ["Икмәк ашарга кирәк."]}], "lang": "tt", "transcription": "", "id": "tt_starter_food_drink_001"},
        {"word": "сөт", "level": "starter", "theme": "food_drink", "emoji": "🥛", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Сыердан алына торган сүт эчемлеге.", "examples": ["Иртән сөт эчәм."]}], "lang": "tt", "transcription": "", "id": "tt_starter_food_drink_002"},
        {"word": "су", "level": "starter", "theme": "food_drink", "emoji": "💧", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Яшәү өчен иң мөһим сыеклык.", "examples": ["Салкын су эчү."]}], "lang": "tt", "transcription": "", "id": "tt_starter_food_drink_003"},
        {"word": "чәй", "level": "starter", "theme": "food_drink", "emoji": "☕", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Иң популяр кайнар эчемлек.", "examples": ["Кайнар чәй ясыйм."]}], "lang": "tt", "transcription": "", "id": "tt_starter_food_drink_004"},
        {"word": "май", "level": "starter", "theme": "food_drink", "emoji": "🧈", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Сөттән ясала торган май.", "examples": ["Икмәккә май сөртү."]}], "lang": "tt", "transcription": "", "id": "tt_starter_food_drink_005"},
        {"word": "алма", "level": "starter", "theme": "food_drink", "emoji": "🍎", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Тәмле җиләк-җимеш.", "examples": ["Кызыл алма ашау."]}], "lang": "tt", "transcription": "", "id": "tt_starter_food_drink_006"}
    ],
    "furniture.js": [
        {"word": "өстәл", "level": "starter", "theme": "furniture", "emoji": "🪑", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ашау яки язу өчен җиһаз.", "examples": ["Китап өстәлдә ята."]}], "lang": "tt", "transcription": "", "id": "tt_starter_furniture_001"},
        {"word": "урындык", "level": "starter", "theme": "furniture", "emoji": "🪑", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Утыру өчен җиһаз.", "examples": ["Урындыкка утыру."]}], "lang": "tt", "transcription": "", "id": "tt_starter_furniture_002"},
        {"word": "карават", "level": "starter", "theme": "furniture", "emoji": "🛏️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Йоклау өчен җиһаз.", "examples": ["Караватта йоклау."]}], "lang": "tt", "transcription": "", "id": "tt_starter_furniture_003"},
        {"word": "шкаф", "level": "starter", "theme": "furniture", "emoji": "🚪", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Кием яки китап кую җиһазы.", "examples": ["Киемнәр шкафта."]}], "lang": "tt", "transcription": "", "id": "tt_starter_furniture_004"}
    ],
    "greetings.js": [
        {"word": "исәнмесез", "level": "starter", "theme": "greetings", "emoji": "👋", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Сәламләү сүзе.", "examples": ["Исәнмесез, хәлләр ничек?"]}], "lang": "tt", "transcription": "", "id": "tt_starter_greetings_001"},
        {"word": "сау булыгыз", "level": "starter", "theme": "greetings", "emoji": "👋", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Саубуллашу сүзе.", "examples": ["Сау булыгыз, иртәгәгә кадәр!"]}], "lang": "tt", "transcription": "", "id": "tt_starter_greetings_002"},
        {"word": "рәхмәт", "level": "starter", "theme": "greetings", "emoji": "🙏", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Рәхмәт белдерү сүзе.", "examples": ["Күп рәхмәт сезгә!"]}], "lang": "tt", "transcription": "", "id": "tt_starter_greetings_003"},
        {"word": "хәерле иртә", "level": "starter", "theme": "greetings", "emoji": "🌅", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Иртәнге сәламләү.", "examples": ["Хәерле иртә, барыгызга да!"]}], "lang": "tt", "transcription": "", "id": "tt_starter_greetings_004"}
    ],
    "jobs.js": [
        {"word": "укытучы", "level": "starter", "theme": "jobs", "emoji": "👨‍🏫", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Мәктәптә белем бирүче кеше.", "examples": ["Укытучы дәрес аңлата."]}], "lang": "tt", "transcription": "", "id": "tt_starter_jobs_001"},
        {"word": "табиб", "level": "starter", "theme": "jobs", "emoji": "👨‍⚕️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Авыруларны дәвалучы кеше.", "examples": ["Табиб авыруны карый."]}], "lang": "tt", "transcription": "", "id": "tt_starter_jobs_002"},
        {"word": "ашчы", "level": "starter", "theme": "jobs", "emoji": "👨‍🍳", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Аш-су пешерүче белгеч.", "examples": ["Ашчы тәмле аш әзерләде."]}], "lang": "tt", "transcription": "", "id": "tt_starter_jobs_003"},
        {"word": "шофёр", "level": "starter", "theme": "jobs", "emoji": "👨‍✈️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Автомобиль йөртүче кеше.", "examples": ["Шофёр автобусны йөртә."]}], "lang": "tt", "transcription": "", "id": "tt_starter_jobs_004"}
    ],
    "nature.js": [
        {"word": "кояш", "level": "starter", "theme": "nature", "emoji": "☀️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Җылылык һәм яктылык бирүче йолдыз.", "examples": ["Кояш якты балкый."]}], "lang": "tt", "transcription": "", "id": "tt_starter_nature_001"},
        {"word": "ай", "level": "starter", "theme": "nature", "emoji": "🌙", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Төнлә күктә күренә торган ай.", "examples": ["Төнлә күктә ай калка."]}], "lang": "tt", "transcription": "", "id": "tt_starter_nature_002"},
        {"word": "агач", "level": "starter", "theme": "nature", "emoji": "🌳", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Урманда үсә торган зур өсемлек.", "examples": ["Агач астында утыру."]}], "lang": "tt", "transcription": "", "id": "tt_starter_nature_003"},
        {"word": "елга", "level": "starter", "theme": "nature", "emoji": "🏞️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ага торган табигый су юлы.", "examples": ["Идел – зур елга."]}], "lang": "tt", "transcription": "", "id": "tt_starter_nature_004"},
        {"word": "диңгез", "level": "starter", "theme": "nature", "emoji": "🌊", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Зур тотрыклы су яткылыгы.", "examples": ["Диңгезгә сәяхәт итү."]}], "lang": "tt", "transcription": "", "id": "tt_starter_nature_005"}
    ],
    "numbers.js": [
        {"word": "бер", "level": "starter", "theme": "numbers", "emoji": "1️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Беренче сан.", "examples": ["Бер, ике, өч."]}], "lang": "tt", "transcription": "", "id": "tt_starter_numbers_001"},
        {"word": "ике", "level": "starter", "theme": "numbers", "emoji": "2️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Бердән соң килә торган сан.", "examples": ["Ике китап бар."]}], "lang": "tt", "transcription": "", "id": "tt_starter_numbers_002"},
        {"word": "өч", "level": "starter", "theme": "numbers", "emoji": "3️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Икедән соң килә торган сан.", "examples": ["Өч бакча."]}], "lang": "tt", "transcription": "", "id": "tt_starter_numbers_003"},
        {"word": "дүрт", "level": "starter", "theme": "numbers", "emoji": "4️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Өчтән соң килә торган сан.", "examples": ["Дүрт урындык."]}], "lang": "tt", "transcription": "", "id": "tt_starter_numbers_004"},
        {"word": "биш", "level": "starter", "theme": "numbers", "emoji": "5️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Дүрттән соң килә торган сан.", "examples": ["Биш бармак."]}], "lang": "tt", "transcription": "", "id": "tt_starter_numbers_005"}
    ],
    "places.js": [
        {"word": "өй", "level": "starter", "theme": "places", "emoji": "🏠", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Кешеләр яши торган бина.", "examples": ["Өйгә кайту."]}], "lang": "tt", "transcription": "", "id": "tt_starter_places_001"},
        {"word": "шәһәр", "level": "starter", "theme": "places", "emoji": "🏙️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Күп кеше яши торган торак пункт.", "examples": ["Казан – матур шәһәр."]}], "lang": "tt", "transcription": "", "id": "tt_starter_places_002"},
        {"word": "мәктәп", "level": "starter", "theme": "places", "emoji": "🏫", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Балалар укый торган урын.", "examples": ["Балалар мәктәпкә бара."]}], "lang": "tt", "transcription": "", "id": "tt_starter_places_003"},
        {"word": "кибет", "level": "starter", "theme": "places", "emoji": "🏪", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Нәрсә дә булса сатып алу урыны.", "examples": ["Кибеттән икмәк алу."]}], "lang": "tt", "transcription": "", "id": "tt_starter_places_004"}
    ],
    "school.js": [
        {"word": "китап", "level": "starter", "theme": "school", "emoji": "📖", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Кызыклы уку өчен басылган битләр.", "examples": ["Кызыклы китап уку."]}], "lang": "tt", "transcription": "", "id": "tt_starter_school_001"},
        {"word": "дәфтәр", "level": "starter", "theme": "school", "emoji": "📓", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Язу өчен буш битләр иясе.", "examples": ["Дәфтәргә язу."]}], "lang": "tt", "transcription": "", "id": "tt_starter_school_002"},
        {"word": "ручка", "level": "starter", "theme": "school", "emoji": "🖊️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Язу коралы.", "examples": ["Ручка белән язу."]}], "lang": "tt", "transcription": "", "id": "tt_starter_school_003"},
        {"word": "дәрес", "level": "starter", "theme": "school", "emoji": "📝", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Уку дәвамындагы укыту вакыты.", "examples": ["Татар теле дәресе."]}], "lang": "tt", "transcription": "", "id": "tt_starter_school_004"}
    ],
    "shopping.js": [
        {"word": "бәя", "level": "starter", "theme": "shopping", "emoji": "🏷️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Товарның бәясе, акча суммасы.", "examples": ["Нинди бәя бу товарда?"]}], "lang": "tt", "transcription": "", "id": "tt_starter_shopping_001"},
        {"word": "акча", "level": "starter", "theme": "shopping", "emoji": "💶", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Сатып алу коралы.", "examples": ["Акча белән түләү."]}], "lang": "tt", "transcription": "", "id": "tt_starter_shopping_002"},
        {"word": "сатып алу", "level": "starter", "theme": "shopping", "emoji": "🛒", "form": "verb", "classification": "regular", "countability": "null", "definitions": [{"text": "Акча биреп товар алу.", "examples": ["Кибеттән ризык сатып алу."]}], "lang": "tt", "transcription": "", "id": "tt_starter_shopping_003"}
    ],
    "social.js": [
        {"word": "дус", "level": "starter", "theme": "social", "emoji": "🧑‍🤝‍🧑", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Үзгә якын кеше.", "examples": ["Минем якын дусым бар."]}], "lang": "tt", "transcription": "", "id": "tt_starter_social_001"},
        {"word": "бәйрәм", "level": "starter", "theme": "social", "emoji": "🎉", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Шатлыклы җәмәгать көне.", "examples": ["Сабантуй – зур бәйрәм."]}], "lang": "tt", "transcription": "", "id": "tt_starter_social_002"},
        {"word": "сөйләшү", "level": "starter", "theme": "social", "emoji": "💬", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Кешеләр арасында әңгәмә.", "examples": ["Дус белән сөйләшү."]}], "lang": "tt", "transcription": "", "id": "tt_starter_social_003"}
    ],
    "technology.js": [
        {"word": "компьютер", "level": "starter", "theme": "technology", "emoji": "💻", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Электрон эш машинасында эшләү.", "examples": ["Компьютерда эшләү."]}], "lang": "tt", "transcription": "", "id": "tt_starter_technology_001"},
        {"word": "телефон", "level": "starter", "theme": "technology", "emoji": "📱", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Аралашу җайланмасы.", "examples": ["Телефоннан шылтырату."]}], "lang": "tt", "transcription": "", "id": "tt_starter_technology_002"}
    ],
    "time.js": [
        {"word": "көн", "level": "starter", "theme": "time", "emoji": "📅", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Сүлләр вакыты (24 сәгать).", "examples": ["Бүген матур көн."]}], "lang": "tt", "transcription": "", "id": "tt_starter_time_001"},
        {"word": "төн", "level": "starter", "theme": "time", "emoji": "🌃", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Карангы вакыт.", "examples": ["Төнлә барысы да йоклый."]}], "lang": "tt", "transcription": "", "id": "tt_starter_time_002"},
        {"word": "бүген", "level": "starter", "theme": "time", "emoji": "📆", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Хәзерге көн.", "examples": ["Бүген һава яхшы."]}], "lang": "tt", "transcription": "", "id": "tt_starter_time_003"},
        {"word": "иртәгә", "level": "starter", "theme": "time", "emoji": "➡️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Бүгенгедән соңгы көн.", "examples": ["Иртәгә очрашырбыз."]}], "lang": "tt", "transcription": "", "id": "tt_starter_time_004"}
    ],
    "travel.js": [
        {"word": "машина", "level": "starter", "theme": "travel", "emoji": "🚗", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Транспорт чарасы.", "examples": ["Машина белән бару."]}], "lang": "tt", "transcription": "", "id": "tt_starter_travel_001"},
        {"word": "поезд", "level": "starter", "theme": "travel", "emoji": "🚆", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Тимер юл транспорты.", "examples": ["Поезд белән юлга чыгу."]}], "lang": "tt", "transcription": "", "id": "tt_starter_travel_002"},
        {"word": "сәяхәт", "level": "starter", "theme": "travel", "emoji": "🧳", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Яңа җирләргә бару.", "examples": ["Кызыклы сәяхәт кылу."]}], "lang": "tt", "transcription": "", "id": "tt_starter_travel_003"}
    ]
}

for filename, entries in tt_a1_categories.items():
    write_js(os.path.join(BASE_DIR, "A1", filename), "tt", entries)

tt_b2_vocabulary = [
    {"word": "гражданлык", "level": "upper_intermediate", "theme": "society", "emoji": "🏛️", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Дәүләт белән кеше арасындагы юридик бәйләнеш.", "examples": ["Гражданлык җаваплылыгын аңлау."]}], "lang": "tt", "transcription": "", "id": "tt_upper_intermediate_society_001"},
    {"word": "җәмгыять", "level": "upper_intermediate", "theme": "society", "emoji": "👥", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Бергә яшәүче кешеләр төркеме.", "examples": ["Җәмгыять үсеше."]}], "lang": "tt", "transcription": "", "id": "tt_upper_intermediate_society_002"},
    {"word": "хезмәттәшлек", "level": "upper_intermediate", "theme": "economy", "emoji": "🤝", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Бергәләп эш итү оешмасы.", "examples": ["Хезмәттәшлек килешүе төзү."]}], "lang": "tt", "transcription": "", "id": "tt_upper_intermediate_economy_001"}
]

tt_b2_adjectives = [
    {"word": "мөстәкыйль", "level": "upper_intermediate", "theme": "describing", "emoji": "🗽", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Беркемгә дә бәйле булмаган.", "examples": ["Мөстәкыйль карар кабул итү."]}], "lang": "tt", "transcription": "", "id": "tt_upper_intermediate_describing_001"},
    {"word": "файдалы", "level": "upper_intermediate", "theme": "describing", "emoji": "💡", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Яхшы нәтиҗә бирә торган.", "examples": ["Файдалы киңәш бирү."]}], "lang": "tt", "transcription": "", "id": "tt_upper_intermediate_describing_002"}
]

tt_b2_verbs = [
    {"word": "ныгыту", "level": "upper_intermediate", "theme": "actions", "emoji": "💪", "form": "verb", "classification": "regular", "countability": "null", "definitions": [{"text": "Көчлерәк итү, нык итү.", "examples": ["Араларны ныгыту."]}], "lang": "tt", "transcription": "", "id": "tt_upper_intermediate_actions_001"},
    {"word": "үстерү", "level": "upper_intermediate", "theme": "actions", "emoji": "📈", "form": "verb", "classification": "regular", "countability": "null", "definitions": [{"text": "Алга бару, камилләштерү.", "examples": ["Тел белемен үстерү."]}], "lang": "tt", "transcription": "", "id": "tt_upper_intermediate_actions_002"}
]

write_js(os.path.join(BASE_DIR, "B2", "vocabulary.js"), "tt", tt_b2_vocabulary)
write_js(os.path.join(BASE_DIR, "B2", "adjectives.js"), "tt", tt_b2_adjectives)
write_js(os.path.join(BASE_DIR, "B2", "verbs.js"), "tt", tt_b2_verbs)

tt_c1_vocabulary = [
    {"word": "концепция", "level": "advanced", "theme": "philosophy", "emoji": "🧠", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Төп карашлар һәм идеялар системасы.", "examples": ["Фәнни концепция төзү."]}], "lang": "tt", "transcription": "", "id": "tt_advanced_philosophy_001"},
    {"word": "автономия", "level": "advanced", "theme": "politics", "emoji": "🏛️", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Үз-үзеңне идарә итү хокукы.", "examples": ["Мәдәни автономия ашу."]}], "lang": "tt", "transcription": "", "id": "tt_advanced_politics_001"}
]

tt_c1_adjectives = [
    {"word": "концептуаль", "level": "advanced", "theme": "describing", "emoji": "🔬", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Концепциягә нигезләнгән.", "examples": ["Концептуаль караш тәкъдим итү."]}], "lang": "tt", "transcription": "", "id": "tt_advanced_describing_001"}
]

tt_c1_verbs = [
    {"word": "анализлау", "level": "advanced", "theme": "actions", "emoji": "🔎", "form": "verb", "classification": "regular", "countability": "null", "definitions": [{"text": "Тирәнтен тикшерү һәм тиешле нәтиҗәләр ясау.", "examples": ["Мәгълүматны анализлау."]}], "lang": "tt", "transcription": "", "id": "tt_advanced_actions_001"}
]

write_js(os.path.join(BASE_DIR, "C1", "vocabulary.js"), "tt", tt_c1_vocabulary)
write_js(os.path.join(BASE_DIR, "C1", "adjectives.js"), "tt", tt_c1_adjectives)
write_js(os.path.join(BASE_DIR, "C1", "verbs.js"), "tt", tt_c1_verbs)

def update_index_json(dirpath):
    files = sorted([f for f in os.listdir(dirpath) if f.endswith('.js')])
    with open(os.path.join(dirpath, "index.json"), "w", encoding="utf-8") as f:
        json.dump(files, f, ensure_ascii=False, indent=2)

update_index_json(os.path.join(BASE_DIR, "A1"))
update_index_json(os.path.join(BASE_DIR, "B2"))
update_index_json(os.path.join(BASE_DIR, "C1"))

print("Updated generate_tt_vocab.py successfully!")
