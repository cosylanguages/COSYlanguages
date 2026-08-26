#!/usr/bin/env python3
"""
Generator script for COSYlanguages Russian Vocabulary Manual (A0-A1) Interactive Web Edition.
Generates leksika-russkogo-yazyka/index.html, 6 section hub HTML pages (razdel-1.html .. razdel-6.html),
and 21 topic HTML pages in leksika-russkogo-yazyka/topics/.
"""

import os
import json
import glob

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "leksika-russkogo-yazyka"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(os.path.join(BASE_DIR, "assets"), exist_ok=True)

# Purge any non-ASCII files if present
for f in glob.glob(os.path.join(TOPICS_DIR, "*.html")):
    try:
        f.encode('ascii')
    except UnicodeEncodeError:
        os.remove(f)

MODULES = [
    {
        "id": "razdel-1",
        "file": "razdel-1.html",
        "title": "Модуль 1 · Человек и общение",
        "subtitle": "Приветствия, знакомство, семья, профессии, страны, языки и описание человека",
        "stripe": "#3562e0",
        "topics": [
            {
                "slug": "privetstvie-i-znakomstvo",
                "title": "Приветствие и знакомство",
                "subtitle": "Первые фразы для начала разговора",
                "words": [
                    {"word": "Здра́вствуйте", "type": "expr", "meta": "междометие · офиц.", "def": "Формальное вежливое приветствие.", "ex": "Здравствуйте! Как ваши дела?", "colloc": "Здравствуйте, Дамир!"},
                    {"word": "Приве́т", "type": "expr", "meta": "междометие · неформальное", "def": "Дружеское приветствие близких людей.", "ex": "Привет, Маша! Рад тебя видеть.", "colloc": "Привет всем!"},
                    {"word": "Меня́ зову́т...", "type": "expr", "meta": "фраза", "def": "Представление своего имени.", "ex": "Меня зовут Алексей. А вас?", "colloc": "Как вас зовут?"},
                    {"word": "О́чень прия́тно", "type": "expr", "meta": "фраза", "def": "Ответ при знакомстве.", "ex": "— Я Анна. — Очень приятно!", "colloc": "Очень приятно познакомиться"},
                    {"word": "До свида́ния", "type": "expr", "meta": "фраза · офиц.", "def": "Формальное прощание.", "ex": "Спасибо за урок, до свидания!", "colloc": "До свидания, учитель!"},
                    {"word": "Пока́", "type": "expr", "meta": "междометие · неформальное", "def": "Дружеское прощание.", "ex": "Увидимся завтра, пока!", "colloc": "Пока, увидимся!"}
                ],
                "tip": "При знакомстве с ровесниками в неформальной обстановке говорите «Привет!», а с преподавателями и незнакомыми — «Здравствуйте!»."
            },
            {
                "slug": "semya-i-lyudi",
                "title": "Семья и родственники",
                "subtitle": "Слова для разговора о близких людях",
                "words": [
                    {"word": "Ма́ть / Ма́ма", "type": "noun", "meta": "сущ. · ж.р.", "def": "Мама, родительница.", "ex": "Моя мама работает врачом.", "colloc": "добрая мама"},
                    {"word": "Оте́ц / Па́па", "type": "noun", "meta": "сущ. · м.р.", "def": "Папа, родитель.", "ex": "Мой папа любит спорт.", "colloc": "старший отец"},
                    {"word": "Бра́т", "type": "noun", "meta": "сущ. · м.р.", "def": "Сын тех же родителей.", "ex": "У меня есть младший брат.", "colloc": "родной брат"},
                    {"word": "Сестра́", "type": "noun", "meta": "сущ. · ж.р.", "def": "Дочь тех же родителей.", "ex": "Моя сестра учится в школе.", "colloc": "старшая сестра"},
                    {"word": "Ба́бушка", "type": "noun", "meta": "сущ. · ж.р.", "def": "Мать отца или матери.", "ex": "Бабушка печёт вкусные пироги.", "colloc": "любимая бабушка"},
                    {"word": "Де́душка", "type": "noun", "meta": "сущ. · м.р.", "def": "Отец отца или матери.", "ex": "Дедушка читает газету.", "colloc": "старый дедушка"}
                ],
                "tip": "Обратите внимание: слова «мама» и «папа» относятся к женскому и мужскому роду, но согласуются по смыслу (мой папа, моя мама)."
            },
            {
                "slug": "strany-i-yazyki",
                "title": "Страны, языки и национальности",
                "subtitle": "Откуда вы и на каких языках говорите",
                "words": [
                    {"word": "Росси́я", "type": "noun", "meta": "сущ. · ж.р. (собств.)", "def": "Государство на востоке Европы и севере Азии.", "ex": "Я живу в России.", "colloc": "столица России"},
                    {"word": "Ру́сский язы́к", "type": "noun", "meta": "сущ. сочетание · м.р.", "def": "Язык общения и обучения.", "ex": "Я изучаю русский язык.", "colloc": "урок русского языка"},
                    {"word": "Говори́ть по-ру́сски", "type": "verb", "meta": "глаг. сочетание", "def": "Владеть русским языком.", "ex": "Вы говорите по-русски?", "colloc": "хорошо говорить по-русски"},
                    {"word": "Иностра́нец", "type": "noun", "meta": "сущ. · м.р.", "def": "Гражданин другой страны.", "ex": "Он иностранец, но хорошо знает язык.", "colloc": "молодой иностранец"}
                ],
                "tip": "Различайте: «русский язык» (существительное + прилагательное) и «говорить по-русски» (наречие с дефисом)."
            },
            {
                "slug": "professii-i-rabota",
                "title": "Профессии и занятия",
                "subtitle": "Названия основных специальностей",
                "words": [
                    {"word": "Вра́ч", "type": "noun", "meta": "сущ. · м.р.", "def": "Специалист по медицине.", "ex": "Врач работает в больнице.", "colloc": "хороший врач"},
                    {"word": "Учи́тель", "type": "noun", "meta": "сущ. · м.р.", "def": "Преподаватель в школе.", "ex": "Учитель объясняет урок.", "colloc": "строгий учитель"},
                    {"word": "Студе́нт", "type": "noun", "meta": "сущ. · м.р.", "def": "Учащийся университета.", "ex": "Я студент первого курса.", "colloc": "успешный студент"},
                    {"word": "Инжене́р", "type": "noun", "meta": "сущ. · м.р.", "def": "Специалист по технике.", "ex": "Мой брат — инженер.", "colloc": "главный инженер"}
                ],
                "tip": "Названия большинства профессий в русском языке грамматически мужского рода, даже если говорит женщина: «Она опытный врач»."
            },
            {
                "slug": "vneshnost-i-kharakter",
                "title": "Описание человека",
                "subtitle": "Прилагательные для описания внешности и характера",
                "words": [
                    {"word": "Высо́кий", "type": "adj", "meta": "прил. · м.р.", "def": "Большего роста.", "ex": "Мой брат очень высокий.", "colloc": "высокий человек"},
                    {"word": "Краси́вый", "type": "adj", "meta": "прил. · м.р.", "def": "Приятный на вид.", "ex": "Это красивый город.", "colloc": "красивая девушка"},
                    {"word": "До́брый", "type": "adj", "meta": "прил. · м.р.", "def": "Отзывчивый, делающий добро.", "ex": "Наша бабушка очень добрая.", "colloc": "добрый характер"},
                    {"word": "У́мный", "type": "adj", "meta": "прил. · м.р.", "def": "Обладающий хорошим умом.", "ex": "Это умный студент.", "colloc": "умный ответ"}
                ],
                "tip": "Прилагательные меняют окончание по родам: высокий (м.р.), высокая (ж.р.), высокое (ср.р.), высокие (мн.ч.)."
            }
        ]
    },
    {
        "id": "razdel-2",
        "file": "razdel-2.html",
        "title": "Модуль 2 · Дом, быт и город",
        "subtitle": "Предметы дома, городская инфраструктура, транспорт и покупки",
        "stripe": "#1c9483",
        "topics": [
            {
                "slug": "dom-i-kvartira",
                "title": "Дом, мебель и комната",
                "subtitle": "Предметы интерьера и домашний быт",
                "words": [
                    {"word": "До́м", "type": "noun", "meta": "сущ. · м.р.", "def": "Здание для проживания.", "ex": "Наш дом находится в центре.", "colloc": "большой дом"},
                    {"word": "Ко́мната", "type": "noun", "meta": "сущ. · ж.р.", "def": "Часть квартиры или дома.", "ex": "Моя комната светлая и уютная.", "colloc": "светлая комната"},
                    {"word": "Сто́л", "type": "noun", "meta": "сущ. · м.р.", "def": "Предмет мебели с плоской поверхностью.", "ex": "Книга лежит на столе.", "colloc": "письменный стол"},
                    {"word": "Сту́л", "type": "noun", "meta": "сущ. · м.р.", "def": "Предмет мебели для сидения.", "ex": "Садитесь на этот стул.", "colloc": "удобный стул"},
                    {"word": "Окно́", "type": "noun", "meta": "сущ. · ср.р.", "def": "Проем в стене для света.", "ex": "Окно выходить в сад.", "colloc": "большое окно"}
                ],
                "tip": "Для указания местонахождения предметов используйте предложный падеж: в комнате, на столе, в доме."
            },
            {
                "slug": "gorod-i-mesta",
                "title": "Город, улицы и здания",
                "subtitle": "Ориентация в населенном пункте",
                "words": [
                    {"word": "Го́род", "type": "noun", "meta": "сущ. · м.р.", "def": "Крупный населенный пункт.", "ex": "Москва — старинный город.", "colloc": "красивый город"},
                    {"word": "У́лица", "type": "noun", "meta": "сущ. · ж.р.", "def": "Пространство между домами для движения.", "ex": "Мы гуляем по улице.", "colloc": "тихая улица"},
                    {"word": "Па́рк", "type": "noun", "meta": "сущ. · м.р.", "def": "Зеленая зона отдыха.", "ex": "В парке много деревьев.", "colloc": "городской парк"},
                    {"word": "Музе́й", "type": "noun", "meta": "сущ. · м.р.", "def": "Учреждение с выставками элементов культуры.", "ex": "Мы идём в исторический музей.", "colloc": "известный музей"}
                ],
                "tip": "С названиями улиц используется предлог «на» (на улице), а с городами — «в» (в городе)."
            },
            {
                "slug": "transport-i-poezdki",
                "title": "Транспорт и движение",
                "subtitle": "Средства передвижения и билеты",
                "words": [
                    {"word": "Авто́бус", "type": "noun", "meta": "сущ. · м.р.", "def": "Общественный пассажирский транспорт.", "ex": "Автобус приходит вовремя.", "colloc": "ехать на автобусе"},
                    {"word": "По́езд", "type": "noun", "meta": "сущ. · м.р.", "def": "Железнодорожный транспорт.", "ex": "Поезд отправляется в пять часов.", "colloc": "скорый поезд"},
                    {"word": "Биле́т", "type": "noun", "meta": "сущ. · м.р.", "def": "Документ для проезда.", "ex": "Купите билет в кассе.", "colloc": "входной билет"},
                    {"word": "Метро́", "type": "noun", "meta": "сущ. · ср.р. (нескл.)", "def": "Подземная железная дорога.", "ex": "Я еду на метро.", "colloc": "станция метро"}
                ],
                "tip": "При передвижении на транспорте используется предлог «на» + предложный падеж: на автобусе, на поезде, на метро."
            },
            {
                "slug": "pokupki-i-magazin",
                "title": "Покупки и магазин",
                "subtitle": "Цены, деньги и общение с продавцом",
                "words": [
                    {"word": "Магази́н", "type": "noun", "meta": "сущ. · м.р.", "def": "Торговое заведение.", "ex": "Продуктовый магазин открыт.", "colloc": "продуктовый магазин"},
                    {"word": "Купи́ть", "type": "verb", "meta": "глаг. · сов.вид", "def": "Приобрести за деньги.", "ex": "Я хочу купить хлеб и молоко.", "colloc": "купить подарок"},
                    {"word": "Ру́бль", "type": "noun", "meta": "сущ. · м.р.", "def": "Денежная единица России.", "ex": "Книга стоит 500 рублей.", "colloc": "один рубль"},
                    {"word": "Ско́лько сто́ит?", "type": "expr", "meta": "вопросительная фраза", "def": "Запрос цены предмета.", "ex": "Скажите, пожалуйста, сколько стоит этот журнал?", "colloc": "Сколько стоит билет?"}
                ],
                "tip": "Помните правила числительных с денежными единицами: 1 рубль, 2–4 рубля, 5–20 рублей."
            }
        ]
    },
    {
        "id": "razdel-3",
        "file": "razdel-3.html",
        "title": "Модуль 3 · Еда, напитки, одежда и здоровье",
        "subtitle": "Продукты питания, заказы в кафе, одежда и фразы о самочувствии",
        "stripe": "#c9740a",
        "topics": [
            {
                "slug": "eda-i-produkty",
                "title": "Продукты и блюда",
                "subtitle": "Названия основных продуктов и блюд",
                "words": [
                    {"word": "Хле́б", "type": "noun", "meta": "сущ. · м.р.", "def": "Выпекаемое изделие из муки.", "ex": "Свежий хлеб очень вкусный.", "colloc": "белый хлеб"},
                    {"word": "Сы́р", "type": "noun", "meta": "сущ. · м.р.", "def": "Молочный продукт.", "ex": "На завтрак мы едим сыр.", "colloc": "твердый сыр"},
                    {"word": "Я́блоко", "type": "noun", "meta": "сущ. · ср.р.", "def": "Сочный фрукт.", "ex": "Оно съел красное яблоко.", "colloc": "спелое яблоко"},
                    {"word": "Мя́со", "type": "noun", "meta": "сущ. · ср.р.", "def": "Продукт питания животного происхождения.", "ex": "Мы готовим мясо с овощами.", "colloc": "свежее мясо"}
                ],
                "tip": "Существительное «яблоко» — среднего рода (зеленое яблоко), а «хлеб» и «сыр» — мужского."
            },
            {
                "slug": "napitki-i-kafe",
                "title": "Напитки и в кафе",
                "subtitle": "Заказ горячих и холодных напитков",
                "words": [
                    {"word": "Ко́фе", "type": "noun", "meta": "сущ. · м.р. (нескл.)", "def": "Горячий ароматный напиток.", "ex": "Я люблю чёрный кофе без сахара.", "colloc": "горячий кофе"},
                    {"word": "Ча́й", "type": "noun", "meta": "сущ. · м.р.", "def": "Напиток из заваренных листьев.", "ex": "Принесите, пожалуйста, зеленый чай.", "colloc": "чашка чая"},
                    {"word": "Заказа́ть", "type": "verb", "meta": "глаг. · сов.вид", "def": "Попросить принести в кафе.", "ex": "Мы хотим заказать ужин.", "colloc": "заказать столик"},
                    {"word": "Вода́", "type": "noun", "meta": "сущ. · ж.р.", "def": "Прозрачная питьевая жидкость.", "ex": "Принесите, пожалуйста, стакан воды.", "colloc": "минеральная вода"}
                ],
                "tip": "Слово «кофе» грамматически мужского рода и не склоняется: «один горячий кофе»."
            },
            {
                "slug": "odezhda-i-obuv",
                "title": "Одежда и обувь",
                "subtitle": "Предметы гардероба и ношение одежды",
                "words": [
                    {"word": "Руба́шка", "type": "noun", "meta": "сущ. · ж.р.", "def": "Одежда для верхней части тела с пуговицами.", "ex": "Он носит белую рубашку.", "colloc": "чистая рубашка"},
                    {"word": "Пальто́", "type": "noun", "meta": "сущ. · ср.р. (нескл.)", "def": "Верхняя тёплая одежда.", "ex": "Зимой я ношу тёплое пальто.", "colloc": "зимнее пальто"},
                    {"word": "О́бувь", "type": "noun", "meta": "сущ. · ж.р. (собират.)", "def": "Предметы для ношения на ногах.", "ex": "В магазине продаётся удобная обувь.", "colloc": "кожаная обувь"},
                    {"word": "Носи́ть", "type": "verb", "meta": "глаг. · несов.вид", "def": "Иметь надетой одежду.", "ex": "Она любит носить платья.", "colloc": "носить очки"}
                ],
                "tip": "Слово «пальто» — среднего рода и не склоняется: «в тёплом пальто»."
            },
            {
                "slug": "zdorove-i-samochuvstvie",
                "title": "Здоровье и тело",
                "subtitle": "Части тела и фразы при недомогании",
                "words": [
                    {"word": "Голова́", "type": "noun", "meta": "сущ. · ж.р.", "def": "Верхняя часть тела человека.", "ex": "У меня болит голова.", "colloc": "болит голова"},
                    {"word": "Больни́ца", "type": "noun", "meta": "сущ. · ж.р.", "def": "Медицинское учреждение.", "ex": "Врач работает в больнице.", "colloc": "городская больница"},
                    {"word": "Боле́ть", "type": "verb", "meta": "глаг. · несов.вид", "def": "Испытывать боль / быть больным.", "ex": "Мой друг сегодня болеет.", "colloc": "болеть гриппом"},
                    {"word": "Апте́ка", "type": "noun", "meta": "сущ. · ж.р.", "def": "Магазин лекарств.", "ex": "Купите аспирин в аптеке.", "colloc": "круглосуточная аптека"}
                ],
                "tip": "Для выражения боли используйте конструкцию: «У меня болит + имя существительное» (У меня болит горло)."
            }
        ]
    },
    {
        "id": "razdel-4",
        "file": "razdel-4.html",
        "title": "Модуль 4 · Время, календарь и погода",
        "subtitle": "Дни недели, месяцы, время суток и погодные явления",
        "stripe": "#7c4fd6",
        "topics": [
            {
                "slug": "dni-nedeli-i-mesyatsy",
                "title": "Дни недели, месяцы и сезоны",
                "subtitle": "Календарная лексика",
                "words": [
                    {"word": "Понеде́льник", "type": "noun", "meta": "сущ. · м.р.", "def": "Первый день недели.", "ex": "В понедельник начинается учеба.", "colloc": "в понедельник"},
                    {"word": "Пя́тница", "type": "noun", "meta": "сущ. · ж.р.", "def": "Пятый день недели.", "ex": "В пятницу вечером мы отдыхаем.", "colloc": "в пятницу"},
                    {"word": "Ле́то", "type": "noun", "meta": "сущ. · ср.р.", "def": "Самое теплое время года.", "ex": "Летом мы едем на море.", "colloc": "жаркое лето"},
                    {"word": "Зима́", "type": "noun", "meta": "сущ. · ж.р.", "def": "Холодное время года.", "ex": "Зимой идёт снег.", "colloc": "холодная зима"}
                ],
                "tip": "Для ответа на вопрос «Когда?» с днями недели используйте «в + Винительный падеж» (в понедельник, в пятницу)."
            },
            {
                "slug": "vremya-i-raspisanie",
                "title": "Время, часы и распорядок дня",
                "subtitle": "Обозначение времени и частей суток",
                "words": [
                    {"word": "Ча́с", "type": "noun", "meta": "сущ. · м.р.", "def": "Единица времени (60 минут).", "ex": "Сейчас ровно один час.", "colloc": "два часа"},
                    {"word": "У́тро", "type": "noun", "meta": "сущ. · ср.р.", "def": "Начало дня.", "ex": "Каждое утро я пью кофе.", "colloc": "доброе утро"},
                    {"word": "Ве́чер", "type": "noun", "meta": "сущ. · м.р.", "def": "Время суток перед ночью.", "ex": "Вечером мы смотрим фильм.", "colloc": "Добрый вечер!"},
                    {"word": "Мину́та", "type": "noun", "meta": "сущ. · ж.р.", "def": "Единица времени (60 секунд).", "ex": "Подождите одну минуту.", "colloc": "пять минут"}
                ],
                "tip": "Приветствия зависят от времени суток: «Доброе утро!», «Добрый день!», «Добрый вечер!»."
            },
            {
                "slug": "pogoda-i-priroda",
                "title": "Погода и природа",
                "subtitle": "Описание природного состояния",
                "words": [
                    {"word": "Со́лнце", "type": "noun", "meta": "сущ. · ср.р.", "def": "Небесное светило.", "ex": "Сегодня ярко светит солнце.", "colloc": "яркое солнце"},
                    {"word": "До́ждь", "type": "noun", "meta": "сущ. · м.р.", "def": "Атмосферные осадки.", "ex": "На улице идет дождь.", "colloc": "сильный дождь"},
                    {"word": "Тепло́", "type": "expr", "meta": "наречие / безличн.", "def": "Приятная теплая погода.", "ex": "Летом у нас очень тепло.", "colloc": "сегодня тепло"},
                    {"word": "Сне́г", "type": "noun", "meta": "сущ. · м.р.", "def": "Замерзшие белые осадки.", "ex": "Зимой выпадает белый снег.", "colloc": "идёт снег"}
                ],
                "tip": "Погода описывается безлично: «Сегодня холодно», «На улице ветрено»."
            }
        ]
    },
    {
        "id": "razdel-5",
        "file": "razdel-5.html",
        "title": "Модуль 5 · Учёба, технологии, досуг и хобби",
        "subtitle": "Учебные принадлежности, интернет, виды отдыха и числительные",
        "stripe": "#a3195b",
        "topics": [
            {
                "slug": "ucheba-i-klass",
                "title": "Предметы в классе и учёба",
                "subtitle": "Школьная и студенческая лексика",
                "words": [
                    {"word": "Кни́га", "type": "noun", "meta": "сущ. · ж.р.", "def": "Печатное издание для чтения.", "ex": "Эта книга очень интересная.", "colloc": "учебная книга"},
                    {"word": "Тетра́дь", "type": "noun", "meta": "сущ. · ж.р.", "def": "Сшитые листы бумаги для записей.", "ex": "Запишите правило в тетрадь.", "colloc": "школьная тетрадь"},
                    {"word": "Уро́к", "type": "noun", "meta": "сущ. · м.р.", "def": "Учебное занятие.", "ex": "Урок начинается в девять часов.", "colloc": "урок русского языка"},
                    {"word": "Слова́рь", "type": "noun", "meta": "сущ. · м.р.", "def": "Справочная книга со словами.", "ex": "Посмотри перевод слова в словаре.", "colloc": "русско-английский словарь"}
                ],
                "tip": "Слово «тетрадь» — женского рода с мягким знаком на конце (моя тетрадь)."
            },
            {
                "slug": "svyaz-i-internet",
                "title": "Технологии, связь и интернет",
                "subtitle": "Слова для общения в цифровую эпоху",
                "words": [
                    {"word": "Телефо́н", "type": "noun", "meta": "сущ. · м.р.", "def": "Устройство для связи и звонков.", "ex": "Мой телефон лежит на столе.", "colloc": "мобильный телефон"},
                    {"word": "Компью́тер", "type": "noun", "meta": "сущ. · м.р.", "def": "Электронное устройство для работы.", "ex": "Я работаю за компьютером.", "colloc": "персональный компьютер"},
                    {"word": "Интерне́т", "type": "noun", "meta": "сущ. · м.р.", "def": "Всемирная компьютерная сеть.", "ex": "Я ищу информацию в интернете.", "colloc": "быстрый интернет"},
                    {"word": "Пи́сьмо / Сообще́ние", "type": "noun", "meta": "сущ. · ср.р.", "def": "Текстовое послание.", "ex": "Я получил новое сообщение.", "colloc": "отправить письмо"}
                ],
                "tip": "Слово «интернет» пишется с строчной или прописной буквы и склоняется как обычное существительное мужского рода (в интернете)."
            },
            {
                "slug": "svobodnoe-vremya-i-khobbi",
                "title": "Хобби, спорт и отдых",
                "subtitle": "Занятия в свободное время",
                "words": [
                    {"word": "Му́зыка", "type": "noun", "meta": "сущ. · ж.р.", "def": "Искусство звуков.", "ex": "Она любит слушать музыку.", "colloc": "классическая музыка"},
                    {"word": "Спо́рт", "type": "noun", "meta": "сущ. · м.р.", "def": "Физические упражнения.", "ex": "Заниматься спортом полезно.", "colloc": "зимний спорт"},
                    {"word": "Пла́вать", "type": "verb", "meta": "глаг. · несов.вид", "def": "Двигаться по воде.", "ex": "Летом я люблю плавать в море.", "colloc": "плавать в бассейне"},
                    {"word": "Фи́льм", "type": "noun", "meta": "сущ. · м.р.", "def": "Кинопроизведение.", "ex": "Вчера мы смотрели интересный фильм.", "colloc": "новый фильм"}
                ],
                "tip": "С глаголом «заниматься» используется творительный падеж: заниматься спортом, заниматься музыкой."
            },
            {
                "slug": "tsifry-i-chisla",
                "title": "Числа, количества и счёт",
                "subtitle": "Числительные и выражения количества",
                "words": [
                    {"word": "Оди́н / Одна́ / Одно́", "type": "expr", "meta": "числ. · м./ж./ср.", "def": "Число 1.", "ex": "У меня один брат и одна сестра.", "colloc": "один час"},
                    {"word": "Мно́го", "type": "expr", "meta": "наречие количества", "def": "Большое количество.", "ex": "В городе много красивых парков.", "colloc": "много друзей"},
                    {"word": "Ма́ло", "type": "expr", "meta": "наречие количества", "def": "Небольшое количество.", "ex": "У нас мало времени.", "colloc": "мало денег"},
                    {"word": "Сто́лько", "type": "expr", "meta": "указат. наречие", "def": "Такое количество.", "ex": "Почему здесь столько людей?", "colloc": "столько книг"}
                ],
                "tip": "Числительное «один» согласуется в роде: один дом, одна книга, одно окно."
            }
        ]
    },
    {
        "id": "razdel-6",
        "file": "razdel-6.html",
        "title": "Модуль 6 · Важные глаголы и свойства",
        "subtitle": "Основные глаголы действия, базовые качественные прилагательные и слова-связки",
        "stripe": "#3562e0",
        "topics": [
            {
                "slug": "glavnye-glagoly-a1",
                "title": "Самые частые глаголы действия",
                "subtitle": "Базовый глагольный словарь начинающего",
                "words": [
                    {"word": "Жить", "type": "verb", "meta": "глаг. · несов.вид (живу, живёшь)", "def": "Проживать в определенном месте.", "ex": "Я живу в Москве.", "colloc": "жить в центре"},
                    {"word": "Рабо́тать", "type": "verb", "meta": "глаг. · несов.вид (работаю, работаешь)", "def": "Заниматься трудом.", "ex": "Мой отец работает в банке.", "colloc": "работать врачом"},
                    {"word": "Де́лать", "type": "verb", "meta": "глаг. · несов.вид (делаю, делаешь)", "def": "Совершать действие.", "ex": "Что ты делаешь вечером?", "colloc": "делать домашнее задание"},
                    {"word": "Зна́ть", "type": "verb", "meta": "глаг. · несов.вид (знаю, знаешь)", "def": "Иметь информацию.", "ex": "Я знаю правильный ответ.", "colloc": "знать правила"}
                ],
                "tip": "Глагол «жить» относится к I спряжению с чередованием в корне: живу́, живёшь, живу́т."
            },
            {
                "slug": "opisanie-i-prilagatelnye",
                "title": "Основные прилагательные",
                "subtitle": "Качественная оценка предметов и явлений",
                "words": [
                    {"word": "Большо́й", "type": "adj", "meta": "прил. · м.р.", "def": "Значительного размера.", "ex": "Москва — большой город.", "colloc": "большая семья"},
                    {"word": "Ма́ленький", "type": "adj", "meta": "прил. · м.р.", "def": "Небольшого размера.", "ex": "У нас маленький котёнок.", "colloc": "маленькая комната"},
                    {"word": "Хоро́ший", "type": "adj", "meta": "прил. · м.р.", "def": "Приятный, качественный.", "ex": "Это очень хороший день.", "colloc": "хороший друг"},
                    {"word": "Плохо́й", "type": "adj", "meta": "прил. · м.р.", "def": "Некачественный, некой нехороший.", "ex": "Сегодня плохая погода.", "colloc": "плохой ответ"}
                ],
                "tip": "Пара антонимов помогает быстрее запоминать слова: большой — маленький, хороший — плохой, новый — старый."
            },
            {
                "slug": "svyazuyushchie-slova",
                "title": "Слова-связки и вводные слова",
                "subtitle": "Слова для логического связывания предложений",
                "words": [
                    {"word": "И", "type": "expr", "meta": "союз", "def": "Соединительный союз.", "ex": "Я люблю чай и кофе.", "colloc": "хлеб и масло"},
                    {"word": "Но", "type": "expr", "meta": "союз", "def": "Противопоставительный союз.", "ex": "Я хочу пойти, но занят.", "colloc": "красивый, но дорогой"},
                    {"word": "Потому́ что", "type": "expr", "meta": "союз", "def": "Указывает на причину.", "ex": "Я отдыхаю, потому что устал.", "colloc": "устал, потому что..."},
                    {"word": "Поэ́этому", "type": "expr", "meta": "союз / наречие", "def": "Указывает на следствие.", "ex": "Шёл дождь, поэтому мы остались дома.", "colloc": "устал, поэтому спал"}
                ],
                "tip": "Перед союзами «а», «но», «потому что», «поэтому» в русском языке всегда ставится запятая."
            }
        ]
    }
]

# Flat list of topics for prev/next resolving
flat_topics = []
for mod in MODULES:
    for top in mod["topics"]:
        flat_topics.append((mod, top))

def get_prev_next_vocab(slug):
    for idx, (mod, top) in enumerate(flat_topics):
        if top["slug"] == slug:
            prev_t = flat_topics[idx - 1][1] if idx > 0 else None
            next_t = flat_topics[idx + 1][1] if idx < len(flat_topics) - 1 else None
            return prev_t, next_t
    return None, None

def render_vocab_topbar(active_mod_id=None, is_topic=False):
    rel_prefix = "../" if is_topic else ""
    nav_links = []
    for m in MODULES:
        act = 'class="active"' if active_mod_id == m["id"] else ''
        short_title = m["title"].split("·")[0].strip()
        nav_links.append(f'<a {act} href="{rel_prefix}{m["file"]}">{short_title}</a>')
    nav_html = "".join(nav_links)

    return f'''<header class="topbar">
  <div class="topbar-inner">
    <a class="brand" href="{rel_prefix}index.html">
      <span class="brand-mark">cl</span>
      <span class="brand-name">COSY<em>languages</em> &middot; Лексика A0&ndash;A1</span>
    </a>
    <nav class="topbar-nav">
      {nav_html}
    </nav>
  </div>
</header>'''

def render_vocab_footer():
    return '''<footer class="site">
  <div class="container">
    <div>COSYlanguages &middot; Справочник по лексике русского языка, Уровень A0&ndash;A1 &middot; интерактивное веб-издание</div>
    <div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">&larr; Вернуться на главный сайт COSYlanguages</a></div>
  </div>
</footer>'''

# 1. Render Topic Pages
for mod in MODULES:
    for top in mod["topics"]:
        prev_t, next_t = get_prev_next_vocab(top["slug"])

        cards_html = []
        flash_cards = []
        for w in top["words"]:
            tag_cls = w["type"]
            tag_name = {"noun": "Существительное", "verb": "Глагол", "adj": "Прилагательное", "expr": "Выражение"}.get(w["type"], "Слово")
            cards_html.append(f'''<div class="vocab-card">
  <span class="type-tag {tag_cls}">{tag_name}</span>
  <div class="v-word">{w["word"]}</div>
  <div class="v-meta">{w["meta"]}</div>
  <div class="v-def">{w["def"]}</div>
  <div class="v-ex">{w["ex"]}</div>
  <div class="v-colloc">&#128279; Сочетаемость: {w["colloc"]}</div>
</div>''')

            flash_cards.append(f'''<div class="flashcard">
  <div class="flash-inner">
    <div class="flash-face front">{w["word"]}</div>
    <div class="flash-face back"><strong>{w["def"]}</strong><br><small>{w["ex"]}</small></div>
  </div>
</div>''')

        tip_html = f'<div class="box tip"><h3>&#128161; Важная заметка</h3><p>{top["tip"]}</p></div>' if top.get("tip") else ""

        prev_link = f'<a class="prev" href="{prev_t["slug"]}.html"><span class="dir">&larr; Назад</span><span class="ttl">{prev_t["title"]}</span></a>' if prev_t else '<span></span>'
        next_link = f'<a class="next" href="{next_t["slug"]}.html"><span class="dir">Далее &rarr;</span><span class="ttl">{next_t["title"]}</span></a>' if next_t else '<span></span>'
        pager_html = f'<div class="pager">{prev_link}{next_link}</div>'

        topic_code = f'''<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} &middot; COSYlanguages Лексика русского языка</title>
<meta name="description" content="{top["title"]}: {top["subtitle"]}">
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
{render_vocab_topbar(mod["id"], is_topic=True)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">{mod["title"]}</span>
    <h1>{top["title"]}</h1>
    <p class="subtitle">{top["subtitle"]}</p>
    <hr class="rule">
  </div>

  <div class="vocab-search-box">
    <input type="text" id="vocab-search" class="vocab-search-input" placeholder="🔍 Поиск по словам, значениям и примерам...">
  </div>

  {tip_html}

  <h2 style="font-family:var(--font-display); font-size:22px; margin-top:30px;">Словарные карточки</h2>
  <div class="vocab-grid">
    {"".join(cards_html)}
  </div>

  <h2 style="font-family:var(--font-display); font-size:22px; margin-top:40px;">Карточки для запоминания (нажмите, чтобы перевернуть)</h2>
  <div class="flash-grid">
    {"".join(flash_cards)}
  </div>

  {pager_html}
</main>
{render_vocab_footer()}
<script src="../assets/app.js"></script>
</body>
</html>'''

        with open(os.path.join(TOPICS_DIR, f'{top["slug"]}.html'), 'w', encoding='utf-8') as f:
            f.write(topic_code)

print("Generated 21 vocabulary topic pages in leksika-russkogo-yazyka/topics/.")

# 2. Render Module Hub Pages
for mod in MODULES:
    topic_cards = []
    for top in mod["topics"]:
        num_w = len(top["words"])
        topic_cards.append(f'''<a class="topic-card" href="topics/{top["slug"]}.html">
  <div class="ttl">{top["title"]}</div>
  <div class="sub">{top["subtitle"]}</div>
  <span class="topics-count" style="margin-top:10px; display:inline-block; font-family:var(--font-mono); font-size:11px; background:var(--teal-100); color:var(--teal-800); padding:3px 8px; border-radius:99px;">{num_w} ключевых слов</span>
</a>''')

    mod_code = f'''<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{mod["title"]} &middot; COSYlanguages</title>
<meta name="description" content="{mod["title"]}: {mod["subtitle"]}">
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_vocab_topbar(mod["id"], is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">Модуль лексики</span>
    <h1>{mod["title"]}</h1>
    <p class="subtitle">{mod["subtitle"]}</p>
    <hr class="rule">
  </div>

  <div class="topic-grid">
    {"".join(topic_cards)}
  </div>
</main>
{render_vocab_footer()}
<script src="assets/app.js"></script>
</body>
</html>'''

    with open(os.path.join(BASE_DIR, mod["file"]), 'w', encoding='utf-8') as f:
        f.write(mod_code)

print("Generated 6 section hub pages.")

# 3. Render Main Index Page (index.html)
part_cards = []
for mod in MODULES:
    pnum = mod["title"].split("·")[0].strip()
    phead = mod["title"].split("·")[1].strip()
    num_t = len(mod["topics"])
    part_cards.append(f'''<a class="part-card" href="{mod["file"]}">
  <div class="stripe" style="background:{mod["stripe"]};"></div>
  <span class="pnum">{pnum}</span>
  <h2>{phead}</h2>
  <p>{mod["subtitle"]}</p>
  <span class="topics-count">{num_t} темы</span>
</a>''')

index_code = f'''<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>COSYlanguages Лексика русского языка (A0–A1) &middot; COSYlanguages</title>
<meta name="description" content="Интерактивное веб-издание справочника «Лексика русского языка» COSYlanguages A0-A1: 6 модулей, 21 тема, словарные карточки и упражнения.">
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_vocab_topbar(active_mod_id=None, is_topic=False)}
<section class="hero" style="background:var(--teal-900); color:#eafaf5; padding:54px 0 44px;">
  <div class="container">
    <span class="hero-kicker" style="font-family:var(--font-mono); font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:#8fd6c4;">COSYlanguages &middot; Уровень A0&ndash;A1</span>
    <h1 style="font-family:var(--font-display); font-weight:800; font-size:clamp(30px,5vw,48px); margin:12px 0;">Лексика русского языка,<br>слово за словом.</h1>
    <p class="lead" style="max-width:560px; color:#cdeee5; font-size:17px;">Полный интерактивный справочник по лексике для начинающих — 6 тематических модулей, 21 тема, словарные карточки с родом и сочетаемостью, интерактивные карточки для запоминания и самопроверка.</p>
  </div>
</section>

<main class="container">
  <div class="page-head" style="padding-top:34px;">
    <span class="eyebrow">Модули лексики</span>
    <h1 style="font-size:28px;">Оглавление справочника по лексике</h1>
    <p class="subtitle">Выбирайте нужный тематический модуль для расширения словарного запаса.</p>
  </div>

  <div class="parts-grid">
    {"".join(part_cards)}
  </div>

  <div class="box tip" style="margin-top:40px;">
    <h3>&#128218; Взаимосвязь со справочником по грамматике</h3>
    <p>Каждая тема этого лексического справочника напрямую перекликается с грамматическими конструкциями из <strong>Грамматики русского языка (A0–A1)</strong>. Учите слова вместе с правилами их употребления!</p>
  </div>
</main>

{render_vocab_footer()}
<script src="assets/app.js"></script>
</body>
</html>'''

with open(os.path.join(BASE_DIR, "index.html"), 'w', encoding='utf-8') as f:
    f.write(index_code)

print("Generated leksika-russkogo-yazyka/index.html successfully.")
