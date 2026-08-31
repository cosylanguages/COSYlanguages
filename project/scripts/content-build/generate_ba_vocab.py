import os, json

BASE_DIR = "vocabulary/ba"

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

ba_a1_categories = {
    "animals.js": [
        {"word": "эт", "level": "starter", "theme": "animals", "emoji": "🐕", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Өй хайуаны, кешенең яҡын дуҫы.", "examples": ["Эт ихатала саба."]}], "lang": "ba", "transcription": "", "id": "ba_starter_animals_001"},
        {"word": "бесәй", "level": "starter", "theme": "animals", "emoji": "🐈", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Кескәй өй хайуаны.", "examples": ["Бесәй урындыҡта йоҡлай."]}], "lang": "ba", "transcription": "", "id": "ba_starter_animals_002"},
        {"word": "ҡош", "level": "starter", "theme": "animals", "emoji": "🐦", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ҡанатлы, һауала осла торган хайуан.", "examples": ["Ҡош ағаста йырлай."]}], "lang": "ba", "transcription": "", "id": "ba_starter_animals_003"},
        {"word": "балыҡ", "level": "starter", "theme": "animals", "emoji": "🐟", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Һыуҙа йәшәй торган хайуан.", "examples": ["Балыҡ һыу аҫтында йөҙә."]}], "lang": "ba", "transcription": "", "id": "ba_starter_animals_004"},
        {"word": "һыйыр", "level": "starter", "theme": "animals", "emoji": "🐄", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Һөт бирә торган ҙур өй хайуаны.", "examples": ["Һыйыр үлән ашай."]}], "lang": "ba", "transcription": "", "id": "ba_starter_animals_005"},
        {"word": "ат", "level": "starter", "theme": "animals", "emoji": "🐎", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Көслө, тиҙ саба торган хайуан.", "examples": ["Ат яланда саба."]}], "lang": "ba", "transcription": "", "id": "ba_starter_animals_006"},
        {"word": "бүре", "level": "starter", "theme": "animals", "emoji": "🐺", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Урманда йәшәй торган ертҡыс хайуан.", "examples": ["Бүре урманда йәшәй."]}], "lang": "ba", "transcription": "", "id": "ba_starter_animals_007"}
    ],
    "body.js": [
        {"word": "баш", "level": "starter", "theme": "body", "emoji": "🗣️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Кешенең йәки хайуандың өҫкө өлөшө.", "examples": ["Башым ауырта."]}], "lang": "ba", "transcription": "", "id": "ba_starter_body_001"},
        {"word": "ҡул", "level": "starter", "theme": "body", "emoji": "✋", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Нәмәне тотмаҡ өсөн тән өлөшө.", "examples": ["Ҡулды йуырға кәрәк."]}], "lang": "ba", "transcription": "", "id": "ba_starter_body_002"},
        {"word": "аяҡ", "level": "starter", "theme": "body", "emoji": "🦶", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Йөрөү өсөн тән өлөшө.", "examples": ["Аяғым арыны."]}], "lang": "ba", "transcription": "", "id": "ba_starter_body_003"},
        {"word": "күҙ", "level": "starter", "theme": "body", "emoji": "👁️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Күрү органы.", "examples": ["Аның күҙҙәре күк."]}], "lang": "ba", "transcription": "", "id": "ba_starter_body_004"},
        {"word": "ҡолаҡ", "level": "starter", "theme": "body", "emoji": "👂", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ишетеү органы.", "examples": ["Ҡолаҡ бән ишетәбеҙ."]}], "lang": "ba", "transcription": "", "id": "ba_starter_body_005"},
        {"word": "ауыҙ", "level": "starter", "theme": "body", "emoji": "👄", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ашау һәм һөйләшеү органы.", "examples": ["Ауыҙҙы асыу."]}], "lang": "ba", "transcription": "", "id": "ba_starter_body_006"}
    ],
    "clothes.js": [
        {"word": "күлмәк", "level": "starter", "theme": "clothes", "emoji": "👗", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Өҫкә кейелә торган кейем.", "examples": ["Яңы күлмәк кейҙем."]}], "lang": "ba", "transcription": "", "id": "ba_starter_clothes_001"},
        {"word": "ыштан", "level": "starter", "theme": "clothes", "emoji": "👖", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Аяҡ кейеме янындағы кейем.", "examples": ["Ҡара ыштан кейеү."]}], "lang": "ba", "transcription": "", "id": "ba_starter_clothes_002"},
        {"word": "башлыҡ", "level": "starter", "theme": "clothes", "emoji": "🧢", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Башҡа кейелә торган кейем.", "examples": ["Ҡышын йылы башлыҡ кейәбеҙ."]}], "lang": "ba", "transcription": "", "id": "ba_starter_clothes_003"},
        {"word": "тун", "level": "starter", "theme": "clothes", "emoji": "🧥", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ҡышҡы йылы өҫ кейеме.", "examples": ["Ҡышын тун кейелә."]}], "lang": "ba", "transcription": "", "id": "ba_starter_clothes_004"}
    ],
    "colours.js": [
        {"word": "ҡара", "level": "starter", "theme": "colours", "emoji": "⬛", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Төн төҫө.", "examples": ["Ҡара бесәй аша үтә."]}], "lang": "ba", "transcription": "", "id": "ba_starter_colours_001"},
        {"word": "аҡ", "level": "starter", "theme": "colours", "emoji": "⬜", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Ҡар төҫө.", "examples": ["Ап-аҡ ҡар яуа."]}], "lang": "ba", "transcription": "", "id": "ba_starter_colours_002"},
        {"word": "ҡыҙыл", "level": "starter", "theme": "colours", "emoji": "🟥", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Ҡан төҫө.", "examples": ["Ҡыҙыл алма бик тәмле."]}], "lang": "ba", "transcription": "", "id": "ba_starter_colours_003"},
        {"word": "күк", "level": "starter", "theme": "colours", "emoji": "🟦", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Һауа төҫө.", "examples": ["Күк һауа аяҙ."]}], "lang": "ba", "transcription": "", "id": "ba_starter_colours_004"},
        {"word": "йәшел", "level": "starter", "theme": "colours", "emoji": "🟩", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Үлән төҫө.", "examples": ["Йәшел үлән үҫә."]}], "lang": "ba", "transcription": "", "id": "ba_starter_colours_005"},
        {"word": "һары", "level": "starter", "theme": "colours", "emoji": "🟨", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Ҡояш төҫө.", "examples": ["Һары сәсәк атылды."]}], "lang": "ba", "transcription": "", "id": "ba_starter_colours_006"}
    ],
    "family.js": [
        {"word": "атай", "level": "starter", "theme": "family", "emoji": "👨", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ғәиләлә ир кеше.", "examples": ["Атай эштән ҡайтты."]}], "lang": "ba", "transcription": "", "id": "ba_starter_family_001"},
        {"word": "әсәй", "level": "starter", "theme": "family", "emoji": "👩", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ғәиләлә ана кеше.", "examples": ["Әсәй аш пешерә."]}], "lang": "ba", "transcription": "", "id": "ba_starter_family_002"},
        {"word": "ағай", "level": "starter", "theme": "family", "emoji": "👦", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ул ир туған.", "examples": ["Ағайым мәктәптә уҡый."]}], "lang": "ba", "transcription": "", "id": "ba_starter_family_003"},
        {"word": "апай", "level": "starter", "theme": "family", "emoji": "👧", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ул ҡыҙ туған.", "examples": ["Апайым китап уҡый."]}], "lang": "ba", "transcription": "", "id": "ba_starter_family_004"},
        {"word": "олатай", "level": "starter", "theme": "family", "emoji": "👴", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Атайҙың йәки әсәйҙең атаһы.", "examples": ["Олатай баҡсала эшләй."]}], "lang": "ba", "transcription": "", "id": "ba_starter_family_005"},
        {"word": "өләсәй", "level": "starter", "theme": "family", "emoji": "👵", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Атайҙың йәки әсәйҙең әсәһе.", "examples": ["Өләсәй бәлеш пешерә."]}], "lang": "ba", "transcription": "", "id": "ba_starter_family_006"}
    ],
    "food_drink.js": [
        {"word": "икмәк", "level": "starter", "theme": "food_drink", "emoji": "🍞", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Төп ризыҡ, ондан бешерелә.", "examples": ["Икмәк ашарға кәрәк."]}], "lang": "ba", "transcription": "", "id": "ba_starter_food_drink_001"},
        {"word": "һөт", "level": "starter", "theme": "food_drink", "emoji": "🥛", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Һыйырҙան алына торган һөт эсемлеге.", "examples": ["Иртән һөт эсәм."]}], "lang": "ba", "transcription": "", "id": "ba_starter_food_drink_002"},
        {"word": "һыу", "level": "starter", "theme": "food_drink", "emoji": "💧", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Йәшәү өсөн иң мөһим һыулыҡ.", "examples": ["Салҡын һыу эсеү."]}], "lang": "ba", "transcription": "", "id": "ba_starter_food_drink_003"},
        {"word": "сәй", "level": "starter", "theme": "food_drink", "emoji": "☕", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Ҡайнар эсемлек.", "examples": ["Ҡайнар сәй яһайым."]}], "lang": "ba", "transcription": "", "id": "ba_starter_food_drink_004"},
        {"word": "май", "level": "starter", "theme": "food_drink", "emoji": "🧈", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Һөттән яһала торган май.", "examples": ["Икмәккә май һөртөү."]}], "lang": "ba", "transcription": "", "id": "ba_starter_food_drink_005"},
        {"word": "алма", "level": "starter", "theme": "food_drink", "emoji": "🍎", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Тәмле емеш.", "examples": ["Ҡыҙыл алма ашау."]}], "lang": "ba", "transcription": "", "id": "ba_starter_food_drink_006"}
    ],
    "furniture.js": [
        {"word": "өҫтәл", "level": "starter", "theme": "furniture", "emoji": "🪑", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ашау йәки яҙыу өсөн җиһаз.", "examples": ["Китап өҫтәлдә ята."]}], "lang": "ba", "transcription": "", "id": "ba_starter_furniture_001"},
        {"word": "урындыҡ", "level": "starter", "theme": "furniture", "emoji": "🪑", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Утырыу өсөн җиһаз.", "examples": ["Урындыҡҡа утырыу."]}], "lang": "ba", "transcription": "", "id": "ba_starter_furniture_002"},
        {"word": "карауат", "level": "starter", "theme": "furniture", "emoji": "🛏️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Йоҡлау өсөн җиһаз.", "examples": ["Карауатта йоҡлау."]}], "lang": "ba", "transcription": "", "id": "ba_starter_furniture_003"},
        {"word": "шкаф", "level": "starter", "theme": "furniture", "emoji": "🚪", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Кейем ҡуйыу җиһазы.", "examples": ["Кейемдәр шкафта."]}], "lang": "ba", "transcription": "", "id": "ba_starter_furniture_004"}
    ],
    "greetings.js": [
        {"word": "һаумыһығыҙ", "level": "starter", "theme": "greetings", "emoji": "👋", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Һәләмләү һүҙе.", "examples": ["Һаумыһығыҙ, хәлдәр ничек?"]}], "lang": "ba", "transcription": "", "id": "ba_starter_greetings_001"},
        {"word": "һау булығыҙ", "level": "starter", "theme": "greetings", "emoji": "👋", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Һаубуллашыу һүҙе.", "examples": ["Һау булығыҙ, иртәгәгә тиклем!"]}], "lang": "ba", "transcription": "", "id": "ba_starter_greetings_002"},
        {"word": "рәхмәт", "level": "starter", "theme": "greetings", "emoji": "🙏", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Рәхмәт белдереү һүҙе.", "examples": ["Ул һеҙгә рәхмәт әйтте."]}], "lang": "ba", "transcription": "", "id": "ba_starter_greetings_003"},
        {"word": "хәйерле иртә", "level": "starter", "theme": "greetings", "emoji": "🌅", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Иртәнге һәләмләү.", "examples": ["Хәйерле иртә, дуҫтар!"]}], "lang": "ba", "transcription": "", "id": "ba_starter_greetings_004"}
    ],
    "jobs.js": [
        {"word": "уҡытыусы", "level": "starter", "theme": "jobs", "emoji": "👨‍🏫", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Мәктәптә белем биреүсе кеше.", "examples": ["Уҡытыусы дәрес аңлата."]}], "lang": "ba", "transcription": "", "id": "ba_starter_jobs_001"},
        {"word": "табип", "level": "starter", "theme": "jobs", "emoji": "👨‍⚕️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ауырыуҙарҙы дауաлаусы кеше.", "examples": ["Табип ауырыуҙы ҡарай."]}], "lang": "ba", "transcription": "", "id": "ba_starter_jobs_002"},
        {"word": "ашсы", "level": "starter", "theme": "jobs", "emoji": "👨‍🍳", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Аш-һыу пешереүсе белгес.", "examples": ["Ашсы тәмле аш әҙерләне."]}], "lang": "ba", "transcription": "", "id": "ba_starter_jobs_003"},
        {"word": "шофёр", "level": "starter", "theme": "jobs", "emoji": "👨‍✈️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Автомобиль йөрөтөүсе кеше.", "examples": ["Шофёр автобусты йөрөтә."]}], "lang": "ba", "transcription": "", "id": "ba_starter_jobs_004"}
    ],
    "nature.js": [
        {"word": "ҡояш", "level": "starter", "theme": "nature", "emoji": "☀️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Йылылыҡ һәм яҡтылыҡ биреүсе йондоҙ.", "examples": ["Ҡояш яҡты ялтырай."]}], "lang": "ba", "transcription": "", "id": "ba_starter_nature_001"},
        {"word": "ай", "level": "starter", "theme": "nature", "emoji": "🌙", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Төнлә күктә күренә торган ай.", "examples": ["Төнлә күктә ай ҡалҡа."]}], "lang": "ba", "transcription": "", "id": "ba_starter_nature_002"},
        {"word": "ағас", "level": "starter", "theme": "nature", "emoji": "🌳", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Урманда үҫә торган ҙур үҫемлек.", "examples": ["Ағас аҫтында олтырыу."]}], "lang": "ba", "transcription": "", "id": "ba_starter_nature_003"},
        {"word": "йылға", "level": "starter", "theme": "nature", "emoji": "🏞️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Аға торган тәбиғи һыу юлы.", "examples": ["Ағиҙел – ҙур йылға."]}], "lang": "ba", "transcription": "", "id": "ba_starter_nature_004"},
        {"word": "диңгеҙ", "level": "starter", "theme": "nature", "emoji": "🌊", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Зур һыу ятҡылығы.", "examples": ["Диңгеҙгә сәйәхәт итеү."]}], "lang": "ba", "transcription": "", "id": "ba_starter_nature_005"}
    ],
    "numbers.js": [
        {"word": "бер", "level": "starter", "theme": "numbers", "emoji": "1️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Беренсе һан.", "examples": ["Бер, ике, өс."]}], "lang": "ba", "transcription": "", "id": "ba_starter_numbers_001"},
        {"word": "ике", "level": "starter", "theme": "numbers", "emoji": "2️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Берҙән һуң килә торган һан.", "examples": ["Ике китап бар."]}], "lang": "ba", "transcription": "", "id": "ba_starter_numbers_002"},
        {"word": "өс", "level": "starter", "theme": "numbers", "emoji": "3️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Икенән һуң килә торган һан.", "examples": ["Өс баҡса."]}], "lang": "ba", "transcription": "", "id": "ba_starter_numbers_003"},
        {"word": "дүрт", "level": "starter", "theme": "numbers", "emoji": "4️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Өстән һуң килә торган һан.", "examples": ["Дүрт урындыҡ."]}], "lang": "ba", "transcription": "", "id": "ba_starter_numbers_004"},
        {"word": "биш", "level": "starter", "theme": "numbers", "emoji": "5️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Дүрттән һуң килә торган һан.", "examples": ["Биш бармаҡ."]}], "lang": "ba", "transcription": "", "id": "ba_starter_numbers_005"}
    ],
    "places.js": [
        {"word": "өй", "level": "starter", "theme": "places", "emoji": "🏠", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Кешеләр йәшәй торган бина.", "examples": ["Өйгә ҡайтыу."]}], "lang": "ba", "transcription": "", "id": "ba_starter_places_001"},
        {"word": "ҡала", "level": "starter", "theme": "places", "emoji": "🏙️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Күп кеше йәшәй торган урын.", "examples": ["Өфө – ҙур ҡала."]}], "lang": "ba", "transcription": "", "id": "ba_starter_places_002"},
        {"word": "мәктәп", "level": "starter", "theme": "places", "emoji": "🏫", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Балалар уҡый торган урын.", "examples": ["Балалар мәктәпкә бара."]}], "lang": "ba", "transcription": "", "id": "ba_starter_places_003"},
        {"word": "кибет", "level": "starter", "theme": "places", "emoji": "🏪", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Һатып алыу урыны.", "examples": ["Кибеттән икмәк алыу."]}], "lang": "ba", "transcription": "", "id": "ba_starter_places_004"}
    ],
    "school.js": [
        {"word": "китап", "level": "starter", "theme": "school", "emoji": "📖", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Уҡыу өсөн баҫылған биттәр.", "examples": ["Башҡортса китап уҡыу."]}], "lang": "ba", "transcription": "", "id": "ba_starter_school_001"},
        {"word": "дәфтәр", "level": "starter", "theme": "school", "emoji": "📓", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Яҙыу өсөн буш биттәр.", "examples": ["Дәфтәргә яҙыу."]}], "lang": "ba", "transcription": "", "id": "ba_starter_school_002"},
        {"word": "ручка", "level": "starter", "theme": "school", "emoji": "🖊️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Яҙыу ҡоралы.", "examples": ["Ручка менән яҙыу."]}], "lang": "ba", "transcription": "", "id": "ba_starter_school_003"},
        {"word": "дәрес", "level": "starter", "theme": "school", "emoji": "📝", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Уҡытыу ваҡыты.", "examples": ["Башҡорт теле дәресе."]}], "lang": "ba", "transcription": "", "id": "ba_starter_school_004"}
    ],
    "shopping.js": [
        {"word": "бәһа", "level": "starter", "theme": "shopping", "emoji": "🏷️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Товарҙың бәһаһы, аҡса суммаһы.", "examples": ["Бәһаһын белеү."]}], "lang": "ba", "transcription": "", "id": "ba_starter_shopping_001"},
        {"word": "аҡса", "level": "starter", "theme": "shopping", "emoji": "💶", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Һатып алыу ҡоралы.", "examples": ["Аҡса менән түләү."]}], "lang": "ba", "transcription": "", "id": "ba_starter_shopping_002"},
        {"word": "һатып алыу", "level": "starter", "theme": "shopping", "emoji": "🛒", "form": "verb", "classification": "regular", "countability": "null", "definitions": [{"text": "Аҡса биреп товар алыу.", "examples": ["Кибеттән аҙыҡ һатып алыу."]}], "lang": "ba", "transcription": "", "id": "ba_starter_shopping_003"}
    ],
    "social.js": [
        {"word": "дуҫ", "level": "starter", "theme": "social", "emoji": "🧑‍🤝‍🧑", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Үҙгә яҡын кеше.", "examples": ["Минең яҡын дуҫым бар."]}], "lang": "ba", "transcription": "", "id": "ba_starter_social_001"},
        {"word": "байрам", "level": "starter", "theme": "social", "emoji": "🎉", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Шатлыҡлы йәмәғәт көنө.", "examples": ["Һабантуй – ҙур байрам."]}], "lang": "ba", "transcription": "", "id": "ba_starter_social_002"},
        {"word": "һөйләшеү", "level": "starter", "theme": "social", "emoji": "💬", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Кешеләр араһында әңгәмә.", "examples": ["Дуҫ менән һөйләшеү."]}], "lang": "ba", "transcription": "", "id": "ba_starter_social_003"}
    ],
    "technology.js": [
        {"word": "компьютер", "level": "starter", "theme": "technology", "emoji": "💻", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Электрон машинала эшләү.", "examples": ["Компьютерҙа эшләү."]}], "lang": "ba", "transcription": "", "id": "ba_starter_technology_001"},
        {"word": "телефон", "level": "starter", "theme": "technology", "emoji": "📱", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Аралашыу ҡоролмаһы.", "examples": ["Телефондан шылтыратыу."]}], "lang": "ba", "transcription": "", "id": "ba_starter_technology_002"}
    ],
    "time.js": [
        {"word": "көн", "level": "starter", "theme": "time", "emoji": "📅", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Түлек ваҡыты (24 сәғәт).", "examples": ["Бүген матур көн."]}], "lang": "ba", "transcription": "", "id": "ba_starter_time_001"},
        {"word": "төн", "level": "starter", "theme": "time", "emoji": "🌃", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ҡараңғы ваҡыт.", "examples": ["Төнлә барыһы ла йоҡлай."]}], "lang": "ba", "transcription": "", "id": "ba_starter_time_002"},
        {"word": "бүген", "level": "starter", "theme": "time", "emoji": "📆", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Хәҙерге көн.", "examples": ["Бүген һауа яҡшы."]}], "lang": "ba", "transcription": "", "id": "ba_starter_time_003"},
        {"word": "иртәгә", "level": "starter", "theme": "time", "emoji": "➡️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Бүгенгенән һуңғы көн.", "examples": ["Иртәгә осрашырбыҙ."]}], "lang": "ba", "transcription": "", "id": "ba_starter_time_004"}
    ],
    "travel.js": [
        {"word": "машина", "level": "starter", "theme": "travel", "emoji": "🚗", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Транспорт ҡоролмаһы.", "examples": ["Машина менән барыу."]}], "lang": "ba", "transcription": "", "id": "ba_starter_travel_001"},
        {"word": "поезд", "level": "starter", "theme": "travel", "emoji": "🚆", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Тимер юл транспорты.", "examples": ["Поезд менән юлға сығыу."]}], "lang": "ba", "transcription": "", "id": "ba_starter_travel_002"},
        {"word": "сәйәхәт", "level": "starter", "theme": "travel", "emoji": "🧳", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Яңы ерҙәргә барыу.", "examples": ["Ҡыҙыҡлы сәйәхәт ҡылыу."]}], "lang": "ba", "transcription": "", "id": "ba_starter_travel_003"}
    ]
}

for filename, entries in ba_a1_categories.items():
    write_js(os.path.join(BASE_DIR, "A1", filename), "ba", entries)

ba_b2_vocabulary = [
    {"word": "гражданлыҡ", "level": "upper_intermediate", "theme": "society", "emoji": "🏛️", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Дәүләт менән кеше араһындағы хоҡуҡи бәйләнеш.", "examples": ["Гражданлыҡ яуаплылығын аңлау."]}], "lang": "ba", "transcription": "", "id": "ba_upper_intermediate_society_001"},
    {"word": "йәмғиәт", "level": "upper_intermediate", "theme": "society", "emoji": "👥", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Бергә йәшәүсе кешеләр төркөмө.", "examples": ["Йәмғиәт үҫеше."]}], "lang": "ba", "transcription": "", "id": "ba_upper_intermediate_society_002"},
    {"word": "хеҙмәттәшлек", "level": "upper_intermediate", "theme": "economy", "emoji": "🤝", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Бергәләп эш итеү ойошмаһы.", "examples": ["Хеҙмәттәшлек килешеүе төҙөү."]}], "lang": "ba", "transcription": "", "id": "ba_upper_intermediate_economy_001"}
]

ba_b2_adjectives = [
    {"word": "мөстәҡил", "level": "upper_intermediate", "theme": "describing", "emoji": "🗽", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Бер кемгә лә бәйле булмаған.", "examples": ["Мөстәҡил ҡарар ҡабул итеү."]}], "lang": "ba", "transcription": "", "id": "ba_upper_intermediate_describing_001"},
    {"word": "файҙалы", "level": "upper_intermediate", "theme": "describing", "emoji": "💡", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Яҡшы нәтижә бирә торган.", "examples": ["Файҙалы кәңәш биреү."]}], "lang": "ba", "transcription": "", "id": "ba_upper_intermediate_describing_002"}
]

ba_b2_verbs = [
    {"word": "нығытыу", "level": "upper_intermediate", "theme": "actions", "emoji": "💪", "form": "verb", "classification": "regular", "countability": "null", "definitions": [{"text": "Көслөрәк итеү, ныҡ итеү.", "examples": ["Араларҙы нығытыу."]}], "lang": "ba", "transcription": "", "id": "ba_upper_intermediate_actions_001"},
    {"word": "үҫтереү", "level": "upper_intermediate", "theme": "actions", "emoji": "📈", "form": "verb", "classification": "regular", "countability": "null", "definitions": [{"text": "Алға барыу, камиллаштырыу.", "examples": ["Тел белемен үҫтереү."]}], "lang": "ba", "transcription": "", "id": "ba_upper_intermediate_actions_002"}
]

write_js(os.path.join(BASE_DIR, "B2", "vocabulary.js"), "ba", ba_b2_vocabulary)
write_js(os.path.join(BASE_DIR, "B2", "adjectives.js"), "ba", ba_b2_adjectives)
write_js(os.path.join(BASE_DIR, "B2", "verbs.js"), "ba", ba_b2_verbs)

ba_c1_vocabulary = [
    {"word": "концепция", "level": "advanced", "theme": "philosophy", "emoji": "🧠", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Төп ҡараштар һәм идеялар системаһы.", "examples": ["Фәнни концепция төҙөү."]}], "lang": "ba", "transcription": "", "id": "ba_advanced_philosophy_001"},
    {"word": "автономия", "level": "advanced", "theme": "politics", "emoji": "🏛️", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Үҙ-үҙеңде идарә итеү хоҡуғы.", "examples": ["Мәҙәни автономия ашыу."]}], "lang": "ba", "transcription": "", "id": "ba_advanced_politics_001"}
]

ba_c1_adjectives = [
    {"word": "концептуаль", "level": "advanced", "theme": "describing", "emoji": "🔬", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Концепцияға нигеҙләнгән.", "examples": ["Концептуаль ҡараш тәҡдим итеү."]}], "lang": "ba", "transcription": "", "id": "ba_advanced_describing_001"}
]

ba_c1_verbs = [
    {"word": "анализлау", "level": "advanced", "theme": "actions", "emoji": "🔎", "form": "verb", "classification": "regular", "countability": "null", "definitions": [{"text": "Тирәнтен тикшереү һәм тейешле нәтижәләр яһау.", "examples": ["Мәғлүмәтте анализлау."]}], "lang": "ba", "transcription": "", "id": "ba_advanced_actions_001"}
]

write_js(os.path.join(BASE_DIR, "C1", "vocabulary.js"), "ba", ba_c1_vocabulary)
write_js(os.path.join(BASE_DIR, "C1", "adjectives.js"), "ba", ba_c1_adjectives)
write_js(os.path.join(BASE_DIR, "C1", "verbs.js"), "ba", ba_c1_verbs)

def update_index_json(dirpath):
    files = sorted([f for f in os.listdir(dirpath) if f.endswith('.js')])
    with open(os.path.join(dirpath, "index.json"), "w", encoding="utf-8") as f:
        json.dump(files, f, ensure_ascii=False, indent=2)

update_index_json(os.path.join(BASE_DIR, "A1"))
update_index_json(os.path.join(BASE_DIR, "B2"))
update_index_json(os.path.join(BASE_DIR, "C1"))

print("Updated generate_ba_vocab.py successfully!")
