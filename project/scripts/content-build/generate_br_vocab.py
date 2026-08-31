import os, json

BASE_DIR = "vocabulary/br"

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

br_a1_categories = {
    "animals.js": [
        {"word": "ki", "level": "starter", "theme": "animals", "emoji": "🐕", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Loen ti feal a rhag tro.", "examples": ["Ar ki a c'hoari er liorzh."]}], "lang": "br", "transcription": "", "id": "br_starter_animals_001"},
        {"word": "kazh", "level": "starter", "theme": "animals", "emoji": "🐈", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Loen ti bihan a blij dezhañ kousket.", "examples": ["Ar kazh a gousk war ar gador."]}], "lang": "br", "transcription": "", "id": "br_starter_animals_002"},
        {"word": "evn", "level": "starter", "theme": "animals", "emoji": "🐦", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Loen a nij en aer gant plunv.", "examples": ["An evn a gan war ar wezenn."]}], "lang": "br", "transcription": "", "id": "br_starter_animals_003"},
        {"word": "pesk", "level": "starter", "theme": "animals", "emoji": "🐟", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Loen a vev en dour.", "examples": ["Ar pesk a neuñv er stêr."]}], "lang": "br", "transcription": "", "id": "br_starter_animals_004"},
        {"word": "buoc'h", "level": "starter", "theme": "animals", "emoji": "🐄", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Loen bras er c'houlz a ro laezh.", "examples": ["Ar buoc'h a zebr geot."]}], "lang": "br", "transcription": "", "id": "br_starter_animals_005"},
        {"word": "marc'h", "level": "starter", "theme": "animals", "emoji": "🐎", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Loen kreñv a c'heller redak gantañ.", "examples": ["Ar marc'h a red buan."]}], "lang": "br", "transcription": "", "id": "br_starter_animals_006"},
        {"word": "pemoc'h", "level": "starter", "theme": "animals", "emoji": "🐖", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Loen micher er ferm.", "examples": ["Ar pemoc'h a zo er c'hraou."]}], "lang": "br", "transcription": "", "id": "br_starter_animals_007"},
        {"word": "bleiz", "level": "starter", "theme": "animals", "emoji": "🐺", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Loen gouez er c'hoad.", "examples": ["Ar bleiz a vev er c'hoad."]}], "lang": "br", "transcription": "", "id": "br_starter_animals_008"},
        {"word": "yar", "level": "starter", "theme": "animals", "emoji": "🐔", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Evn ti a ro uioù.", "examples": ["Ar yar a zo er c'hraou."]}], "lang": "br", "transcription": "", "id": "br_starter_animals_009"}
    ],
    "body.js": [
        {"word": "penn", "level": "starter", "theme": "body", "emoji": "🗣️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Rann uhelañ ar c'horf.", "examples": ["Poan penn am eus."]}], "lang": "br", "transcription": "", "id": "br_starter_body_001"},
        {"word": "dorn", "level": "starter", "theme": "body", "emoji": "✋", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Rann ar c'horf evit kregiñ en traoù.", "examples": ["Mervel ar daou dorn."]}], "lang": "br", "transcription": "", "id": "br_starter_body_002"},
        {"word": "troad", "level": "starter", "theme": "body", "emoji": "🦶", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Rann ar korf evit kerzhout.", "examples": ["Kerzhout a ran war ma zraod."]}], "lang": "br", "transcription": "", "id": "br_starter_body_003"},
        {"word": "lagad", "level": "starter", "theme": "body", "emoji": "👁️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Organ evit gwelout.", "examples": ["Gwelout a ran gant ma daoulagad."]}], "lang": "br", "transcription": "", "id": "br_starter_body_004"},
        {"word": "skouarn", "level": "starter", "theme": "body", "emoji": "👂", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Organ evit selaou.", "examples": ["Selaou a ran gant ma skouarn."]}], "lang": "br", "transcription": "", "id": "br_starter_body_005"},
        {"word": "genou", "level": "starter", "theme": "body", "emoji": "👄", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Rann ar penn evit komz ha debriñ.", "examples": ["Digor eo e c'henou."]}], "lang": "br", "transcription": "", "id": "br_starter_body_006"},
        {"word": "fri", "level": "starter", "theme": "body", "emoji": "👃", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Organ evit klevout c'hwezh.", "examples": ["C'hwezh mat zo gant ma fri."]}], "lang": "br", "transcription": "", "id": "br_starter_body_007"}
    ],
    "clothes.js": [
        {"word": "roched", "level": "starter", "theme": "clothes", "emoji": "👔", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Dilhad evit lakaat war ar c'horf uhel.", "examples": ["Ur roched gwenn a wiskan."]}], "lang": "br", "transcription": "", "id": "br_starter_clothes_001"},
        {"word": "bragoù", "level": "starter", "theme": "clothes", "emoji": "👖", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Dilhad evit ar gariou.", "examples": ["Un bragoù glas a zo gantañ."]}], "lang": "br", "transcription": "", "id": "br_starter_clothes_002"},
        {"word": "sae", "level": "starter", "theme": "clothes", "emoji": "👗", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Dilhad evit ar merc'hed.", "examples": ["Ur sae gaer zo ganti."]}], "lang": "br", "transcription": "", "id": "br_starter_clothes_003"},
        {"word": "mantell", "level": "starter", "theme": "clothes", "emoji": "🧥", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Dilhad tomm evit an ijin pe ar goañv.", "examples": ["Lakaat a ran ma mantell er goañv."]}], "lang": "br", "transcription": "", "id": "br_starter_clothes_004"},
        {"word": "botez", "level": "starter", "theme": "clothes", "emoji": "👟", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Dilhad evit an treid.", "examples": ["Botoù nevez am eus."]}], "lang": "br", "transcription": "", "id": "br_starter_clothes_005"},
        {"word": "kabell", "level": "starter", "theme": "clothes", "emoji": "🧢", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Dilhad evit ar penn.", "examples": ["Lakaat un kabell war ar penn."]}], "lang": "br", "transcription": "", "id": "br_starter_clothes_006"}
    ],
    "colours.js": [
        {"word": "du", "level": "starter", "theme": "colours", "emoji": "⬛", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Liou ar noz dence'h.", "examples": ["Ur c'harr du eo."]}], "lang": "br", "transcription": "", "id": "br_starter_colours_001"},
        {"word": "gwenn", "level": "starter", "theme": "colours", "emoji": "⬜", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Liou an erc'h.", "examples": ["An erc'h a zo gwenn."]}], "lang": "br", "transcription": "", "id": "br_starter_colours_002"},
        {"word": "ruz", "level": "starter", "theme": "colours", "emoji": "🟥", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Liou ar gwad pe an aval ruz.", "examples": ["Ur stramm ruz a zo war an taol."]}], "lang": "br", "transcription": "", "id": "br_starter_colours_003"},
        {"word": "glas", "level": "starter", "theme": "colours", "emoji": "🟦", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Liou an neñv pe ar mor.", "examples": ["Glas eo an neñv sot."]}], "lang": "br", "transcription": "", "id": "br_starter_colours_004"},
        {"word": "gwer", "level": "starter", "theme": "colours", "emoji": "🟩", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Liou ar geot ha delioù ar gwez.", "examples": ["Gwer eo ar geot er liorzh."]}], "lang": "br", "transcription": "", "id": "br_starter_colours_005"},
        {"word": "melen", "level": "starter", "theme": "colours", "emoji": "🟨", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Liou an heol pe an sitron.", "examples": ["Melen eo an heol."]}], "lang": "br", "transcription": "", "id": "br_starter_colours_006"}
    ],
    "family.js": [
        {"word": "tad", "level": "starter", "theme": "family", "emoji": "👨", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Tad ar familh.", "examples": ["Eus ma zad e teuan."]}], "lang": "br", "transcription": "", "id": "br_starter_family_001"},
        {"word": "mamm", "level": "starter", "theme": "family", "emoji": "👩", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Mamm ar familh.", "examples": ["Karet a ran ma mamm."]}], "lang": "br", "transcription": "", "id": "br_starter_family_002"},
        {"word": "breur", "level": "starter", "theme": "family", "emoji": "👦", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Mab an hevelep kerent.", "examples": ["Ur breur am eus."]}], "lang": "br", "transcription": "", "id": "br_starter_family_003"},
        {"word": "c'hoar", "level": "starter", "theme": "family", "emoji": "👧", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Merc'h an hevelep kerent.", "examples": ["Ma c'hoar a zo o kousket."]}], "lang": "br", "transcription": "", "id": "br_starter_family_004"},
        {"word": "mab", "level": "starter", "theme": "family", "emoji": "👶", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Bugel paotr er familh.", "examples": ["Un mab Yaouank a zo ganto."]}], "lang": "br", "transcription": "", "id": "br_starter_family_005"},
        {"word": "merc'h", "level": "starter", "theme": "family", "emoji": "👧", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Bugel plac'h er familh.", "examples": ["Ma merc'h a ya d'ar skol."]}], "lang": "br", "transcription": "", "id": "br_starter_family_006"}
    ],
    "food_drink.js": [
        {"word": "bara", "level": "starter", "theme": "food_drink", "emoji": "🍞", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Boued diazez graet gant bleud ha dour.", "examples": ["Debriñ a ran bara evit ar beure."]}], "lang": "br", "transcription": "", "id": "br_starter_food_drink_001"},
        {"word": "laezh", "level": "starter", "theme": "food_drink", "emoji": "🥛", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Evaj gwenn roet gant ar buoc'h.", "examples": ["Evat a ran laezh tomm."]}], "lang": "br", "transcription": "", "id": "br_starter_food_drink_002"},
        {"word": "dour", "level": "starter", "theme": "food_drink", "emoji": "💧", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Evaj naturel diazez ar vuhez.", "examples": ["Dour fresk a evan."]}], "lang": "br", "transcription": "", "id": "br_starter_food_drink_003"},
        {"word": "kafe", "level": "starter", "theme": "food_drink", "emoji": "☕", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Evaj tomm ha deneriant.", "examples": ["Evat a ran ur c'hafe da vintin."]}], "lang": "br", "transcription": "", "id": "br_starter_food_drink_004"},
        {"word": "amann", "level": "starter", "theme": "food_drink", "emoji": "🧈", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Boued melen graet diwar laezh.", "examples": ["Amann sall a lakaan war ar bara."]}], "lang": "br", "transcription": "", "id": "br_starter_food_drink_005"},
        {"word": "aval", "level": "starter", "theme": "food_drink", "emoji": "🍎", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Frouezh round ha dous.", "examples": ["Debriñ a ran un aval ruz."]}], "lang": "br", "transcription": "", "id": "br_starter_food_drink_006"}
    ],
    "furniture.js": [
        {"word": "taol", "level": "starter", "theme": "furniture", "emoji": "🪑", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Meubl war bet e lakaer an traoù.", "examples": ["Ar bara a zo war an taol."]}], "lang": "br", "transcription": "", "id": "br_starter_furniture_001"},
        {"word": "kador", "level": "starter", "theme": "furniture", "emoji": "🪑", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Meubl evit azezañ.", "examples": ["Azezañ a ran war ar gador."]}], "lang": "br", "transcription": "", "id": "br_starter_furniture_002"},
        {"word": "gwele", "level": "starter", "theme": "furniture", "emoji": "🛏️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Meubl evit kousket en noz.", "examples": ["Mont a ran d'am gwele."]}], "lang": "br", "transcription": "", "id": "br_starter_furniture_003"},
        {"word": "armel", "level": "starter", "theme": "furniture", "emoji": "🚪", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Meubl bras evit lakaat dilhad.", "examples": ["An dilhad a zo er garmel."]}], "lang": "br", "transcription": "", "id": "br_starter_furniture_004"}
    ],
    "greetings.js": [
        {"word": "demat", "level": "starter", "theme": "greetings", "emoji": "👋", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Ger evit saludiñ da zeiz.", "examples": ["Demat deoc'h, penaos 'ya?"]}], "lang": "br", "transcription": "", "id": "br_starter_greetings_001"},
        {"word": "kenavo", "level": "starter", "theme": "greetings", "emoji": "👋", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Ger evit lavaret kenavo pa vaer kuit.", "examples": ["Kenavo ha d'ar c'hentañ!"]}], "lang": "br", "transcription": "", "id": "br_starter_greetings_002"},
        {"word": "trugarez", "level": "starter", "theme": "greetings", "emoji": "🙏", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Ger evit trugarekaat unan bennak.", "examples": ["Trugarez bras vras deoc'h."]}], "lang": "br", "transcription": "", "id": "br_starter_greetings_003"},
        {"word": "noz vat", "level": "starter", "theme": "greetings", "emoji": "🌙", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Ger evit saludiñ e fin an deiz.", "examples": ["Noz vat d'an holl!"]}], "lang": "br", "transcription": "", "id": "br_starter_greetings_004"}
    ],
    "jobs.js": [
        {"word": "kellenner", "level": "starter", "theme": "jobs", "emoji": "👨‍🏫", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Den a gelenn er skol.", "examples": ["Ar kellenner a zispleg ar kentel."]}], "lang": "br", "transcription": "", "id": "br_starter_jobs_001"},
        {"word": "medisin", "level": "starter", "theme": "jobs", "emoji": "👨‍⚕️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Den a soagn an dud klañv.", "examples": ["Mont a ran d'an amzer medisin."]}], "lang": "br", "transcription": "", "id": "br_starter_jobs_002"},
        {"word": "keginer", "level": "starter", "theme": "jobs", "emoji": "👨‍🍳", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Den a fard boued er preti.", "examples": ["Ar keginer a fard meuzioù mat."]}], "lang": "br", "transcription": "", "id": "br_starter_jobs_003"},
        {"word": "liorzhour", "level": "starter", "theme": "jobs", "emoji": "🧑‍🌾", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Den a labour er liorzh.", "examples": ["Ar liorzhour a blant bleuñv."]}], "lang": "br", "transcription": "", "id": "br_starter_jobs_004"}
    ],
    "nature.js": [
        {"word": "heol", "level": "starter", "theme": "nature", "emoji": "☀️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Steredenn a ro gouloù ha tommder d'ar bed.", "examples": ["An heol a sked en neñv."]}], "lang": "br", "transcription": "", "id": "br_starter_nature_001"},
        {"word": "loar", "level": "starter", "theme": "nature", "emoji": "🌙", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Korf neñv a weler en noz.", "examples": ["Ar loar a zo meur en noz."]}], "lang": "br", "transcription": "", "id": "br_starter_nature_002"},
        {"word": "gwezenn", "level": "starter", "theme": "nature", "emoji": "🌳", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Plantenn uhel gant koad ha delioù.", "examples": ["Ur wezenn vras zo er liorzh."]}], "lang": "br", "transcription": "", "id": "br_starter_nature_003"},
        {"word": "stêr", "level": "starter", "theme": "nature", "emoji": "🏞️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Dour a red war ar douar vras.", "examples": ["Ar stêr a red d'ar mor."]}], "lang": "br", "transcription": "", "id": "br_starter_nature_004"},
        {"word": "mor", "level": "starter", "theme": "nature", "emoji": "🌊", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Dour bras ha sall tro-dro d'ar c'hentadur.", "examples": ["Mont a reomp d'ar mor."]}], "lang": "br", "transcription": "", "id": "br_starter_nature_005"}
    ],
    "numbers.js": [
        {"word": "unan", "level": "starter", "theme": "numbers", "emoji": "1️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Niver kentañ.", "examples": ["Unan, daou, tri."]}], "lang": "br", "transcription": "", "id": "br_starter_numbers_001"},
        {"word": "daou", "level": "starter", "theme": "numbers", "emoji": "2️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Niver goude unan.", "examples": ["Daou gi am eus."]}], "lang": "br", "transcription": "", "id": "br_starter_numbers_002"},
        {"word": "tri", "level": "starter", "theme": "numbers", "emoji": "3️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Niver goude daou.", "examples": ["Tri levr a zo war an taol."]}], "lang": "br", "transcription": "", "id": "br_starter_numbers_003"},
        {"word": "pevar", "level": "starter", "theme": "numbers", "emoji": "4️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Niver goude tri.", "examples": ["Pevar c'hador a zo er c'hlas."]}], "lang": "br", "transcription": "", "id": "br_starter_numbers_004"},
        {"word": "pemp", "level": "starter", "theme": "numbers", "emoji": "5️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Niver goude pevar.", "examples": ["Pemp biskuit am eus debret."]}], "lang": "br", "transcription": "", "id": "br_starter_numbers_005"}
    ],
    "places.js": [
        {"word": "ti", "level": "starter", "theme": "places", "emoji": "🏠", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Lec'h ma vever hag e gousker.", "examples": ["Ma zi a zo e-kreiz kêr."]}], "lang": "br", "transcription": "", "id": "br_starter_places_001"},
        {"word": "kêr", "level": "starter", "theme": "places", "emoji": "🏙️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Lec'h ma vev kalz tud amzer.", "examples": ["Brest a zo ur gêr vras."]}], "lang": "br", "transcription": "", "id": "br_starter_places_002"},
        {"word": "skol", "level": "starter", "theme": "places", "emoji": "🏫", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Lec'h evit deskiñ ha kelenn.", "examples": ["Ar vugale a ya d'ar skol."]}], "lang": "br", "transcription": "", "id": "br_starter_places_003"},
        {"word": "stal", "level": "starter", "theme": "places", "emoji": "🏪", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Lec'h evit prenañ traoù.", "examples": ["Prenañ bara er stal."]}], "lang": "br", "transcription": "", "id": "br_starter_places_004"}
    ],
    "school.js": [
        {"word": "levr", "level": "starter", "theme": "school", "emoji": "📖", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Pajennoù moullet evit lenn.", "examples": ["Lenn a ran ur levr brezhoneg."]}], "lang": "br", "transcription": "", "id": "br_starter_school_001"},
        {"word": "stilo", "level": "starter", "theme": "school", "emoji": "🖊️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Benveg evit skrivañ gant liv.", "examples": ["Skrivañ gant ur stilo glas."]}], "lang": "br", "transcription": "", "id": "br_starter_school_002"},
        {"word": "kaye", "level": "starter", "theme": "school", "emoji": "📓", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Levrig pajennoù goullo evit skrivañ.", "examples": ["Skrivañ al kentelioù er c'haye."]}], "lang": "br", "transcription": "", "id": "br_starter_school_003"},
        {"word": "kentel", "level": "starter", "theme": "school", "emoji": "📝", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Deskadurezh roet gant ar kelennour.", "examples": ["Anzañ ar kentel diwar-benn ar yezh."]}], "lang": "br", "transcription": "", "id": "br_starter_school_004"}
    ],
    "shopping.js": [
        {"word": "priz", "level": "starter", "theme": "shopping", "emoji": "🏷️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Koust un dra bennak e arc'hant.", "examples": ["Peseurt priz zo gant an tra-mañ?"]}], "lang": "br", "transcription": "", "id": "br_starter_shopping_001"},
        {"word": "arc'hant", "level": "starter", "theme": "shopping", "emoji": "💶", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Paeamant evit prenañ traoù.", "examples": ["Paeeañ gant arc'hant."]}], "lang": "br", "transcription": "", "id": "br_starter_shopping_002"},
        {"word": "prenañ", "level": "starter", "theme": "shopping", "emoji": "🛒", "form": "verb", "classification": "regular", "countability": "null", "definitions": [{"text": "Kemer un dra bennak o paeañ arc'hant.", "examples": ["Prenañ a ran bara bep beure."]}], "lang": "br", "transcription": "", "id": "br_starter_shopping_003"},
        {"word": "gwerzhañ", "level": "starter", "theme": "shopping", "emoji": "💰", "form": "verb", "classification": "regular", "countability": "null", "definitions": [{"text": "Radañ un dra bennak evit arc'hant.", "examples": ["Gwerzhañ a ra frouezh er marc'had."]}], "lang": "br", "transcription": "", "id": "br_starter_shopping_004"}
    ],
    "social.js": [
        {"word": "mignon", "level": "starter", "theme": "social", "emoji": "🧑‍🤝‍🧑", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Den a garter hag a garer gantañ.", "examples": ["Ma mignon brasañ eo."]}], "lang": "br", "transcription": "", "id": "br_starter_social_001"},
        {"word": "fest", "level": "starter", "theme": "social", "emoji": "🎉", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Mared leun a levenez ha dañs gant an dud.", "examples": ["Ur fest vras zo fenoz."]}], "lang": "br", "transcription": "", "id": "br_starter_social_002"},
        {"word": "kaoz", "level": "starter", "theme": "social", "emoji": "💬", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Komzoù etre daou pe meur a den.", "examples": ["Ober ur gaoz gant an amezeog."]}], "lang": "br", "transcription": "", "id": "br_starter_social_003"}
    ],
    "technology.js": [
        {"word": "urdiazour", "level": "starter", "theme": "technology", "emoji": "💻", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Mekanik eljektronek evit labourat gant roadoù.", "examples": ["Labourat a ran war ma urdiazour."]}], "lang": "br", "transcription": "", "id": "br_starter_technology_001"},
        {"word": "pellgomz", "level": "starter", "theme": "technology", "emoji": "📱", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Benveg evit komz a-bell gant an dud.", "examples": ["Pellgomz d'am mamm."]}], "lang": "br", "transcription": "", "id": "br_starter_technology_002"},
        {"word": "skramm", "level": "starter", "theme": "technology", "emoji": "🖥️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Uhelwel evit gwelout ar skeudennoù.", "examples": ["Sellout war ar skramm."]}], "lang": "br", "transcription": "", "id": "br_starter_technology_003"}
    ],
    "time.js": [
        {"word": "deiz", "level": "starter", "theme": "time", "emoji": "📅", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Mare 24 eurvezh etre div noz.", "examples": ["Bep deiz e skrievan un notenn."]}], "lang": "br", "transcription": "", "id": "br_starter_time_001"},
        {"word": "noz", "level": "starter", "theme": "time", "emoji": "🌃", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Mare teñval kousket pan a an heol kuit.", "examples": ["Trankil eo an noz."]}], "lang": "br", "transcription": "", "id": "br_starter_time_002"},
        {"word": "hizio", "level": "starter", "theme": "time", "emoji": "📆", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "An deiz a-vremañ.", "examples": ["Hizio eo un deiz brav."]}], "lang": "br", "transcription": "", "id": "br_starter_time_003"},
        {"word": "dec'h", "level": "starter", "theme": "time", "emoji": "⬅️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "An deiz a-raok hizio.", "examples": ["Dec'h e oan o labourat."]}], "lang": "br", "transcription": "", "id": "br_starter_time_004"},
        {"word": "warc'hoazh", "level": "starter", "theme": "time", "emoji": "➡️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "An deiz goude hizio.", "examples": ["Warc'hoazh e vint e Roazhon."]}], "lang": "br", "transcription": "", "id": "br_starter_time_005"}
    ],
    "travel.js": [
        {"word": "karr", "level": "starter", "theme": "travel", "emoji": "🚗", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Mekanik rodoù evit mont a-lec'h da lec'h.", "examples": ["Mont a ran dre karr."]}], "lang": "br", "transcription": "", "id": "br_starter_travel_001"},
        {"word": "tren", "level": "starter", "theme": "travel", "emoji": "🚆", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Mekanik transport war hentou-houarn.", "examples": ["Kemer an tren evit mont da Bariz."]}], "lang": "br", "transcription": "", "id": "br_starter_travel_002"},
        {"word": "karr-boutin", "level": "starter", "theme": "travel", "emoji": "🚌", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Mekanik transport publik bras.", "examples": ["Ar karr-boutin a erru amzer."]}], "lang": "br", "transcription": "", "id": "br_starter_travel_003"},
        {"word": "beaj", "level": "starter", "theme": "travel", "emoji": "🧳", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Mont d'ur bro pe d'ur lec'h pell.", "examples": ["Ur beaj brav am eus graet."]}], "lang": "br", "transcription": "", "id": "br_starter_travel_004"}
    ]
}

for filename, entries in br_a1_categories.items():
    write_js(os.path.join(BASE_DIR, "A1", filename), "br", entries)

br_b2_vocabulary = [
    {"word": "keodedouriezh", "level": "upper_intermediate", "theme": "society", "emoji": "🏛️", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Stad ha gwirioù ur c'heodedour er gevredigezh.", "examples": ["Ar geodedouriezh a zo pouezus evit an demokratiezh."]}], "lang": "br", "transcription": "", "id": "br_upper_intermediate_society_001"},
    {"word": "diorren", "level": "upper_intermediate", "theme": "development", "emoji": "📈", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Krec'h ha kresk ur framm pe ur raktres.", "examples": ["Diorren ar brezhoneg er skolioù."]}], "lang": "br", "transcription": "", "id": "br_upper_intermediate_development_001"},
    {"word": "kensolidariez", "level": "upper_intermediate", "theme": "society", "emoji": "🤝", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Skoazell ha kenskoazell etre an dud.", "examples": ["Kensolidariez a zo ezhomm evit trec'hiñ ar c'hudennoù."]}], "lang": "br", "transcription": "", "id": "br_upper_intermediate_society_002"},
    {"word": "kevezerezh", "level": "upper_intermediate", "theme": "economy", "emoji": "📊", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Stourm poellek etre embregerezhioù pe tud.", "examples": ["Kevezerezh garv a zo er marc'had."]}], "lang": "br", "transcription": "", "id": "br_upper_intermediate_economy_001"}
]

br_b2_adjectives = [
    {"word": "dizindependent", "level": "upper_intermediate", "theme": "describing", "emoji": "🗽", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Lec'h pe den a zo emren hep dalc'hiezh.", "examples": ["Ur strollad dizindependent eo."]}], "lang": "br", "transcription": "", "id": "br_upper_intermediate_describing_001"},
    {"word": "kempouez", "level": "upper_intermediate", "theme": "describing", "emoji": "⚖️", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "A zo reizh hag en e sav ingal.", "examples": ["Ur meno kempouez en deus roet."]}], "lang": "br", "transcription": "", "id": "br_upper_intermediate_describing_002"},
    {"word": "spletus", "level": "upper_intermediate", "theme": "describing", "emoji": "💡", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "A zo talvoudus hag a ro froezh brav.", "examples": ["Ur gaozeadenn spletus eo bet."]}], "lang": "br", "transcription": "", "id": "br_upper_intermediate_describing_003"}
]

br_b2_verbs = [
    {"word": "kreñvaat", "level": "upper_intermediate", "theme": "actions", "emoji": "💪", "form": "verb", "classification": "regular", "countability": "null", "definitions": [{"text": "Lakaat da vezañ kreñvoc'h.", "examples": ["Kreñvaat ar liammoù etre ar re yaouank."]}], "lang": "br", "transcription": "", "id": "br_upper_intermediate_actions_001"},
    {"word": "dielfennañ", "level": "upper_intermediate", "theme": "actions", "emoji": "🔍", "form": "verb", "classification": "regular", "countability": "null", "definitions": [{"text": "Studiañ pizh holl lodennoù un afer.", "examples": ["Dielfennañ an arroudennoù."]}], "lang": "br", "transcription": "", "id": "br_upper_intermediate_actions_002"},
    {"word": "kenlabourat", "level": "upper_intermediate", "theme": "actions", "emoji": "🧑‍🤝‍🧑", "form": "verb", "classification": "regular", "countability": "null", "definitions": [{"text": "Labourat asambles evit un pal boutin.", "examples": ["Kenlabourat a reomp war ar raktres-mañ."]}], "lang": "br", "transcription": "", "id": "br_upper_intermediate_actions_003"}
]

write_js(os.path.join(BASE_DIR, "B2", "vocabulary.js"), "br", br_b2_vocabulary)
write_js(os.path.join(BASE_DIR, "B2", "adjectives.js"), "br", br_b2_adjectives)
write_js(os.path.join(BASE_DIR, "B2", "verbs.js"), "br", br_b2_verbs)

br_c1_vocabulary = [
    {"word": "meizad", "level": "advanced", "theme": "philosophy", "emoji": "🧠", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Skeudenn pe soñj difetis el bred.", "examples": ["Ur meizad uhel a vez pleustret amañ."]}], "lang": "br", "transcription": "", "id": "br_advanced_philosophy_001"},
    {"word": "emrenerezh", "level": "advanced", "theme": "politics", "emoji": "🏛️", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Gwir d'en em ren e-unan.", "examples": ["Stourm evit emrenerezh ar vro."]}], "lang": "br", "transcription": "", "id": "br_advanced_politics_001"},
    {"word": "steroniezh", "level": "advanced", "theme": "language", "emoji": "📚", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Studi ster ar gerioù hag ar frazennoù.", "examples": ["Anzañ reolennoù ar steroniezh."]}], "lang": "br", "transcription": "", "id": "br_advanced_language_001"}
]

br_c1_adjectives = [
    {"word": "meizadel", "level": "advanced", "theme": "describing", "emoji": "🔬", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "A sell ouzh meizadoù ha mennozhioù difetis.", "examples": ["Ur preder meizadel eo."]}], "lang": "br", "transcription": "", "id": "br_advanced_describing_001"},
    {"word": "kendalc'hus", "level": "advanced", "theme": "describing", "emoji": "🔄", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "A bad hep paouez e-pad un amzer hir.", "examples": ["Ur striv kendalc'hus a zo ret."]}], "lang": "br", "transcription": "", "id": "br_advanced_describing_002"}
]

br_c1_verbs = [
    {"word": "furchal", "level": "advanced", "theme": "actions", "emoji": "🔎", "form": "verb", "classification": "regular", "countability": "null", "definitions": [{"text": "Klask pizh e-touez traoù kuzhet.", "examples": ["Furchal e dielloù ar c'henstroll."]}], "lang": "br", "transcription": "", "id": "br_advanced_actions_001"},
    {"word": "strishaat", "level": "advanced", "theme": "actions", "emoji": "📉", "form": "verb", "classification": "regular", "countability": "null", "definitions": [{"text": "Lakaat strishoc'h pe bihanoc'h.", "examples": ["Strishaat ar reolennoù war an amzer."]}], "lang": "br", "transcription": "", "id": "br_advanced_actions_002"}
]

write_js(os.path.join(BASE_DIR, "C1", "vocabulary.js"), "br", br_c1_vocabulary)
write_js(os.path.join(BASE_DIR, "C1", "adjectives.js"), "br", br_c1_adjectives)
write_js(os.path.join(BASE_DIR, "C1", "verbs.js"), "br", br_c1_verbs)

def update_index_json(dirpath):
    files = sorted([f for f in os.listdir(dirpath) if f.endswith('.js')])
    with open(os.path.join(dirpath, "index.json"), "w", encoding="utf-8") as f:
        json.dump(files, f, ensure_ascii=False, indent=2)

update_index_json(os.path.join(BASE_DIR, "A1"))
update_index_json(os.path.join(BASE_DIR, "B2"))
update_index_json(os.path.join(BASE_DIR, "C1"))

print("Updated generate_br_vocab.py successfully!")
