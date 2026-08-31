import os, json

BASE_DIR = "vocabulary/hy"

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

hy_a1_categories = {
    "animals.js": [
        {"word": "շուն", "level": "starter", "theme": "animals", "emoji": "🐕", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ընտանի կենդանի, մարդու հավատարիմ ընկերը:", "examples": ["Շունը վազում է բակում:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_animals_001"},
        {"word": "կատու", "level": "starter", "theme": "animals", "emoji": "🐈", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Փոքր ընտանի կենդանի:", "examples": ["Կատուն քնած է աթոռին:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_animals_002"},
        {"word": "թռչուն", "level": "starter", "theme": "animals", "emoji": "🐦", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Թևավոր կենդանի, որը թռչում է օդում:", "examples": ["Թռչունը երգում է ծառի վրա:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_animals_003"},
        {"word": "ձուկ", "level": "starter", "theme": "animals", "emoji": "🐟", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ջրում ապրող կենդանի:", "examples": ["Ձուկը լողում է ջրում:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_animals_004"},
        {"word": "կով", "level": "starter", "theme": "animals", "emoji": "🐄", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Խոշոր ընտանի կենդանի, որը կաթ է տալիս:", "examples": ["Կովը խոտ է ուտում:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_animals_005"},
        {"word": "ձի", "level": "starter", "theme": "animals", "emoji": "🐎", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ուժեղ, արագ վազող կենդանի:", "examples": ["Ձին վազում է դաշտում:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_animals_006"},
        {"word": "գայլ", "level": "starter", "theme": "animals", "emoji": "🐺", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Անտառում ապրող գիշատիչ կենդանի:", "examples": ["Գայլը ապրում է անտառում:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_animals_007"}
    ],
    "body.js": [
        {"word": "գլուխ", "level": "starter", "theme": "body", "emoji": "🗣️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Մարմնի վերին մասը:", "examples": ["Գլուխս ցավում է:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_body_001"},
        {"word": "ձեռք", "level": "starter", "theme": "body", "emoji": "✋", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Իրերը բռնելու մարմնի մասը:", "examples": ["Ձեռքերը լվանալը պարտադիր է:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_body_002"},
        {"word": "ոտք", "level": "starter", "theme": "body", "emoji": "🦶", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Քայլելու համար մարմնի մասը:", "examples": ["Ոտքով քայլելը առողջարար է:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_body_003"},
        {"word": "աչք", "level": "starter", "theme": "body", "emoji": "👁️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Տեսողության օրգան:", "examples": ["Նա սիրուն աչքեր ունի:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_body_004"},
        {"word": "ականջ", "level": "starter", "theme": "body", "emoji": "👂", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Լսողության օրգան:", "examples": ["Ականջով լսում ենք երաժշտություն:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_body_005"},
        {"word": "բերան", "level": "starter", "theme": "body", "emoji": "👄", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ուտելու և խոսելու օրգան:", "examples": ["Բերանը բացել:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_body_006"}
    ],
    "clothes.js": [
        {"word": "շապիկ", "level": "starter", "theme": "clothes", "emoji": "👔", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Մարմնի վերին մասի հագուստ:", "examples": ["Սպիտակ շապիկ հագա:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_clothes_001"},
        {"word": "տաբատ", "level": "starter", "theme": "clothes", "emoji": "👖", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ոտքերի հագուստ:", "examples": ["Սև տաբատ հագնել:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_clothes_002"},
        {"word": "զգեստ", "level": "starter", "theme": "clothes", "emoji": "👗", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Կանացի հագուստ:", "examples": ["Գեղեցիկ զգեստ է հագել:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_clothes_003"},
        {"word": "բաճկոն", "level": "starter", "theme": "clothes", "emoji": "🧥", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Տաք վերնահագուստ:", "examples": ["Ձմռանը տաք բաճկոն է պետք:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_clothes_004"}
    ],
    "colours.js": [
        {"word": "սև", "level": "starter", "theme": "colours", "emoji": "⬛", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Գիշերվա գույնը:", "examples": ["Սև կատուն բակում է:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_colours_001"},
        {"word": "սպիտակ", "level": "starter", "theme": "colours", "emoji": "⬜", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Ձյան գույնը:", "examples": ["Սպիտակ ձյուն է գալիս:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_colours_002"},
        {"word": "կարմիր", "level": "starter", "theme": "colours", "emoji": "🟥", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Արյան կամ խնձորի գույնը:", "examples": ["Կարմիր խնձորը համեղ է:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_colours_003"},
        {"word": "կապույտ", "level": "starter", "theme": "colours", "emoji": "🟦", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Երկնքի գույնը:", "examples": ["Կապույտ երկինքը պարզ է:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_colours_004"},
        {"word": "կանաչ", "level": "starter", "theme": "colours", "emoji": "🟩", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Խոտի գույնը:", "examples": ["Կանաչ խոտը բակում:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_colours_005"},
        {"word": "դեղին", "level": "starter", "theme": "colours", "emoji": "🟨", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Արևի գույնը:", "examples": ["Դեղին ծաղիկ այգում:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_colours_006"}
    ],
    "family.js": [
        {"word": "հայր", "level": "starter", "theme": "family", "emoji": "👨", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ընտանիքի տղամարդ ծնողը:", "examples": ["Հայրս վերադարձավ աշխատանքից:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_family_001"},
        {"word": "մայր", "level": "starter", "theme": "family", "emoji": "👩", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ընտանիքի կին ծնողը:", "examples": ["Մայրս ճաշ է պատրաստում:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_family_002"},
        {"word": "եղբայր", "level": "starter", "theme": "family", "emoji": "👦", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Տղա քույր-եղբայր:", "examples": ["Եղբայրս սովորում է դպրոցում:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_family_003"},
        {"word": "քույր", "level": "starter", "theme": "family", "emoji": "👧", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Աղջիկ քույր-եղբայր:", "examples": ["Քույրս գիրք է կարդում:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_family_004"},
        {"word": "պապ", "level": "starter", "theme": "family", "emoji": "👴", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ծնողի հայրը:", "examples": ["Պապս աշխատում է այգում:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_family_005"},
        {"word": "տատ", "level": "starter", "theme": "family", "emoji": "👵", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ծնողի մայրը:", "examples": ["Տատս գաթա է թխում:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_family_006"}
    ],
    "food_drink.js": [
        {"word": "հաց", "level": "starter", "theme": "food_drink", "emoji": "🍞", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Հիմնական սնունդ, ալյուրից թխված:", "examples": ["Թարմ հացը համեղ է:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_food_drink_001"},
        {"word": "կաթ", "level": "starter", "theme": "food_drink", "emoji": "🥛", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Սպիտակ ըմպելիք, կովից ստացված:", "examples": ["Առավոտյան տաք կաթ եմ խմում:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_food_drink_002"},
        {"word": "ջուր", "level": "starter", "theme": "food_drink", "emoji": "💧", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Կյանքի համար անհրաժեշտ հեղուկ:", "examples": ["Սառը ջուր խմել:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_food_drink_003"},
        {"word": "թեյ", "level": "starter", "theme": "food_drink", "emoji": "☕", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Տաք տարածված ըմպելիք:", "examples": ["Տաք թեյ եմ պատրաստում:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_food_drink_004"},
        {"word": "կարագ", "level": "starter", "theme": "food_drink", "emoji": "🧈", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Կաթից պատրաստված մթերք:", "examples": ["Հացին կարագ քսել:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_food_drink_005"},
        {"word": "խնձոր", "level": "starter", "theme": "food_drink", "emoji": "🍎", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Համեղ միրգ:", "examples": ["Կարմիր խնձոր ուտել:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_food_drink_006"}
    ],
    "furniture.js": [
        {"word": "սեղան", "level": "starter", "theme": "furniture", "emoji": "🪑", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ուտելու և աշխատելու կահույք:", "examples": ["Գիրքը սեղանին է:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_furniture_001"},
        {"word": "աթոռ", "level": "starter", "theme": "furniture", "emoji": "🪑", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Նստելու կահույք:", "examples": ["Աթոռին նստել:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_furniture_002"},
        {"word": "մահճակալ", "level": "starter", "theme": "furniture", "emoji": "🛏️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Քնելու համար կահույք:", "examples": ["Մահճակալին քնել:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_furniture_003"},
        {"word": "պահարան", "level": "starter", "theme": "furniture", "emoji": "🚪", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Հագուստ պահելու կահույք:", "examples": ["Հագուստը պահարանում է:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_furniture_004"}
    ],
    "greetings.js": [
        {"word": "բարև", "level": "starter", "theme": "greetings", "emoji": "👋", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Ողջույնի խոսք:", "examples": ["Բարև, ինչպե՞ս ես:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_greetings_001"},
        {"word": "ցտեսություն", "level": "starter", "theme": "greetings", "emoji": "👋", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Հրաժեշտի խոսք:", "examples": ["Ցտեսություն, մինչ վաղը:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_greetings_002"},
        {"word": "շնորհակալություն", "level": "starter", "theme": "greetings", "emoji": "🙏", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Երախտագիտություն հայտնելու խոսք:", "examples": ["Շատ շնորհակալություն օգնության համար:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_greetings_003"},
        {"word": "բարի լույս", "level": "starter", "theme": "greetings", "emoji": "🌅", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Առավոտյան ողջույն:", "examples": ["Բարի լույս, բոլորին:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_greetings_004"}
    ],
    "jobs.js": [
        {"word": "ուսուցիչ", "level": "starter", "theme": "jobs", "emoji": "👨‍🏫", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Դպրոցում կրթող մասնագետ:", "examples": ["Ուսուցիչը բացատրում է դասը:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_jobs_001"},
        {"word": "բժիշկ", "level": "starter", "theme": "jobs", "emoji": "👨‍⚕️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Հիվանդներին բուժող մասնագետ:", "examples": ["Բժիշկը ստուգում է հիվանդին:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_jobs_002"},
        {"word": "խոհարար", "level": "starter", "theme": "jobs", "emoji": "👨‍🍳", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Կերակուր պատրաստող մասնագետ:", "examples": ["Խոհարարը համեղ ճաշ պատրաստեց:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_jobs_003"},
        {"word": "վարորդ", "level": "starter", "theme": "jobs", "emoji": "👨‍✈️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Մեքենա վարող մասնագետ:", "examples": ["Վարորդը վարում է ավտոբուսը:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_jobs_004"}
    ],
    "nature.js": [
        {"word": "արև", "level": "starter", "theme": "nature", "emoji": "☀️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ջերմություն և լույս տվող աստղ:", "examples": ["Արևը փայլում է երկնքում:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_nature_001"},
        {"word": "լուսին", "level": "starter", "theme": "nature", "emoji": "🌙", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Գիշերը երկնքում երևացող մարմին:", "examples": ["Գիշերը լուսինն է ծագում:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_nature_002"},
        {"word": "ծառ", "level": "starter", "theme": "nature", "emoji": "🌳", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Բարձր բույս տերևներով:", "examples": ["Մեծ ծառ կա այգում:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_nature_003"},
        {"word": "գետ", "level": "starter", "theme": "nature", "emoji": "🏞️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ջրի բնական հոսք:", "examples": ["Գետը հոսում է դեպի լիճ:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_nature_004"},
        {"word": "ծով", "level": "starter", "theme": "nature", "emoji": "🌊", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ջրային մեծ ավազան:", "examples": ["Ծովի ափին հանգստանալ:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_nature_005"}
    ],
    "numbers.js": [
        {"word": "մեկ", "level": "starter", "theme": "numbers", "emoji": "1️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Առաջին թիվը:", "examples": ["Մեկ, երկու, երեք:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_numbers_001"},
        {"word": "երկու", "level": "starter", "theme": "numbers", "emoji": "2️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Մեկին հաջորդող թիվը:", "examples": ["Երկու գիրք ունեմ:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_numbers_002"},
        {"word": "երեք", "level": "starter", "theme": "numbers", "emoji": "3️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Երկուսին հաջորդող թիվը:", "examples": ["Երեք եղբայր:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_numbers_003"},
        {"word": "չորս", "level": "starter", "theme": "numbers", "emoji": "4️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Երեքին հաջորդող թիվը:", "examples": ["Չորս աթոռ:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_numbers_004"},
        {"word": "հինգ", "level": "starter", "theme": "numbers", "emoji": "5️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Չորսին հաջորդող թիվը:", "examples": ["Հինգ մատ ձեռքին:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_numbers_005"}
    ],
    "places.js": [
        {"word": "տուն", "level": "starter", "theme": "places", "emoji": "🏠", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Մարդկանց բնակության շենք:", "examples": ["Տուն վերադառնալ:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_places_001"},
        {"word": "քաղաք", "level": "starter", "theme": "places", "emoji": "🏙️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Խոշոր բնակավայր:", "examples": ["Երևանը գեղեցիկ քաղաք է:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_places_002"},
        {"word": "դպրոց", "level": "starter", "theme": "places", "emoji": "🏫", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Սովորելու վայր:", "examples": ["Երեխաները գնում են դպրոց:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_places_003"},
        {"word": "խանութ", "level": "starter", "theme": "places", "emoji": "🏪", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ապրանքներ գնելու վայր:", "examples": ["Խանութից հաց գնել:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_places_004"}
    ],
    "school.js": [
        {"word": "գիրք", "level": "starter", "theme": "school", "emoji": "📖", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Տպագրված էջերի հավաքածու կարդալու համար:", "examples": ["Հետաքրքիր գիրք կարդալ:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_school_001"},
        {"word": "տետր", "level": "starter", "theme": "school", "emoji": "📓", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Գրելու համար մաքուր էջեր:", "examples": ["Տետրում գրել:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_school_002"},
        {"word": "գրիչ", "level": "starter", "theme": "school", "emoji": "🖊️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Գրելու գործիք:", "examples": ["Գրիչով գրել:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_school_003"},
        {"word": "դաս", "level": "starter", "theme": "school", "emoji": "📝", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ուսուցման ժամանակ դպրոցում:", "examples": ["Հայոց լեզվի դաս:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_school_004"}
    ],
    "shopping.js": [
        {"word": "գին", "level": "starter", "theme": "shopping", "emoji": "🏷️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ապրանքի արժեքը դրամով:", "examples": ["Ի՞նչ արժե այս ապրանքը:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_shopping_001"},
        {"word": "դրամ", "level": "starter", "theme": "shopping", "emoji": "💶", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Վճարման միջոց:", "examples": ["Դրամով վճարել:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_shopping_002"},
        {"word": "գնել", "level": "starter", "theme": "shopping", "emoji": "🛒", "form": "verb", "classification": "regular", "countability": "null", "definitions": [{"text": "Ապրանք ստանալ դրամ վճարելով:", "examples": ["Խանութից ուտելիք գնել:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_shopping_003"}
    ],
    "social.js": [
        {"word": "ընկեր", "level": "starter", "theme": "social", "emoji": "🧑‍🤝‍🧑", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Մտերիմ մարդ:", "examples": ["Լավագույն ընկերս է:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_social_001"},
        {"word": "տոն", "level": "starter", "theme": "social", "emoji": "🎉", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ուրախության հասարակական օր:", "examples": ["Նոր տարին մեծ տոն է:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_social_002"},
        {"word": "զրույց", "level": "starter", "theme": "social", "emoji": "💬", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Մարդկանց միջև խոսակցություն:", "examples": ["Ընկերոջ հետ զրույց:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_social_003"}
    ],
    "technology.js": [
        {"word": "համակարգիչ", "level": "starter", "theme": "technology", "emoji": "💻", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Էլեկտրոնային սարք աշխատանքի համար:", "examples": ["Համակարգչով աշխատել:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_technology_001"},
        {"word": "հեռախոս", "level": "starter", "theme": "technology", "emoji": "📱", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Կապի սարքավորում:", "examples": ["Հեռախոսով զանգահարել:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_technology_002"}
    ],
    "time.js": [
        {"word": "օր", "level": "starter", "theme": "time", "emoji": "📅", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "24 ժամյա ժամանակահատված:", "examples": ["Այսօր լավ օր է:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_time_001"},
        {"word": "գիշեր", "level": "starter", "theme": "time", "emoji": "🌃", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Մութ ժամանակ քնելու համար:", "examples": ["Գիշերը բոլորը քնած են:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_time_002"},
        {"word": "այսօր", "level": "starter", "theme": "time", "emoji": "📆", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ընթացիկ օրը:", "examples": ["Այսօր կարևոր հանդիպում կա:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_time_003"},
        {"word": "վաղը", "level": "starter", "theme": "time", "emoji": "➡️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Այսօրվան հաջորդող օրը:", "examples": ["Վաղը կհանդիպենք:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_time_004"}
    ],
    "travel.js": [
        {"word": "մեքենա", "level": "starter", "theme": "travel", "emoji": "🚗", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Տրանսպորտային միջոց:", "examples": ["Մեքենայով գնալ:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_travel_001"},
        {"word": "գնացք", "level": "starter", "theme": "travel", "emoji": "🚆", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Երկաթուղային տրանսպորտ:", "examples": ["Գնացքով ճանապարհորդել:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_travel_002"},
        {"word": "ճանապարհորդություն", "level": "starter", "theme": "travel", "emoji": "🧳", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Նոր վայրեր այցելելը:", "examples": ["Հետաքրքիր ճանապարհորդություն:"]}], "lang": "hy", "transcription": "", "id": "hy_starter_travel_003"}
    ]
}

for filename, entries in hy_a1_categories.items():
    write_js(os.path.join(BASE_DIR, "A1", filename), "hy", entries)

hy_b2_vocabulary = [
    {"word": "քաղաքացիություն", "level": "upper_intermediate", "theme": "society", "emoji": "🏛️", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Իրավական կապ անձի և պետության միջև:", "examples": ["Քաղաքացիության պատասխանատվությունը:"]}], "lang": "hy", "transcription": "", "id": "hy_upper_intermediate_society_001"},
    {"word": "հասարակություն", "level": "upper_intermediate", "theme": "society", "emoji": "👥", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Միասին ապրող մարդկանց ամբողջություն:", "examples": ["Հասարակության զարգացումը:"]}], "lang": "hy", "transcription": "", "id": "hy_upper_intermediate_society_002"},
    {"word": "համագործակցություն", "level": "upper_intermediate", "theme": "economy", "emoji": "🤝", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Համատեղ աշխատանք ընդհանուր նպատակի համար:", "examples": ["Միջազգային համագործակցություն:"]}], "lang": "hy", "transcription": "", "id": "hy_upper_intermediate_economy_001"}
]

hy_b2_adjectives = [
    {"word": "ինքնուրույն", "level": "upper_intermediate", "theme": "describing", "emoji": "🗽", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Ուրիշներից չկախված:", "examples": ["Ինքնուրույն որոշում կայացնել:"]}], "lang": "hy", "transcription": "", "id": "hy_upper_intermediate_describing_001"},
    {"word": "օգտակար", "level": "upper_intermediate", "theme": "describing", "emoji": "💡", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Լավ արդյունք բերող:", "examples": ["Օգտակար խորհուրդ տալ:"]}], "lang": "hy", "transcription": "", "id": "hy_upper_intermediate_describing_002"}
]

hy_b2_verbs = [
    {"word": "ամրապնդել", "level": "upper_intermediate", "theme": "actions", "emoji": "💪", "form": "verb", "classification": "regular", "countability": "null", "definitions": [{"text": "Ավելի ուժեղ դարձնել:", "examples": ["Կապերը ամրապնդել:"]}], "lang": "hy", "transcription": "", "id": "hy_upper_intermediate_actions_001"},
    {"word": "զարգացնել", "level": "upper_intermediate", "theme": "actions", "emoji": "📈", "form": "verb", "classification": "regular", "countability": "null", "definitions": [{"text": "Առաջ տանել, կատարելագործել:", "examples": ["Լեզվի իմացությունը զարգացնել:"]}], "lang": "hy", "transcription": "", "id": "hy_upper_intermediate_actions_002"}
]

write_js(os.path.join(BASE_DIR, "B2", "vocabulary.js"), "hy", hy_b2_vocabulary)
write_js(os.path.join(BASE_DIR, "B2", "adjectives.js"), "hy", hy_b2_adjectives)
write_js(os.path.join(BASE_DIR, "B2", "verbs.js"), "hy", hy_b2_verbs)

hy_c1_vocabulary = [
    {"word": "հայեցակարգ", "level": "advanced", "theme": "philosophy", "emoji": "🧠", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Հիմնական հայացքների և գաղափարների համակարգ:", "examples": ["Գիտական հայեցակարգ մշակել:"]}], "lang": "hy", "transcription": "", "id": "hy_advanced_philosophy_001"},
    {"word": "ինքնավարություն", "level": "advanced", "theme": "politics", "emoji": "🏛️", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Ինքնակառավարման իրավունք:", "examples": ["Մշակութային ինքնավարություն:"]}], "lang": "hy", "transcription": "", "id": "hy_advanced_politics_001"}
]

hy_c1_adjectives = [
    {"word": "հայեցակարգային", "level": "advanced", "theme": "describing", "emoji": "🔬", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "Հայեցակարգի վրա հիմնված:", "examples": ["Հայեցակարգային մոտեցում:"]}], "lang": "hy", "transcription": "", "id": "hy_advanced_describing_001"}
]

hy_c1_verbs = [
    {"word": "վերլուծել", "level": "advanced", "theme": "actions", "emoji": "🔎", "form": "verb", "classification": "regular", "countability": "null", "definitions": [{"text": "Խորը ուսումնասիրել և եզրակացություններ անել:", "examples": ["Տվյալները վերլուծել:"]}], "lang": "hy", "transcription": "", "id": "hy_advanced_actions_001"}
]

write_js(os.path.join(BASE_DIR, "C1", "vocabulary.js"), "hy", hy_c1_vocabulary)
write_js(os.path.join(BASE_DIR, "C1", "adjectives.js"), "hy", hy_c1_adjectives)
write_js(os.path.join(BASE_DIR, "C1", "verbs.js"), "hy", hy_c1_verbs)

def update_index_json(dirpath):
    files = sorted([f for f in os.listdir(dirpath) if f.endswith('.js')])
    with open(os.path.join(dirpath, "index.json"), "w", encoding="utf-8") as f:
        json.dump(files, f, ensure_ascii=False, indent=2)

update_index_json(os.path.join(BASE_DIR, "A1"))
update_index_json(os.path.join(BASE_DIR, "B2"))
update_index_json(os.path.join(BASE_DIR, "C1"))

print("Updated generate_hy_vocab.py successfully!")
