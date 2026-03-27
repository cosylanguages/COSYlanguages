(function() {
    const speakingData = {
    "ru": {
        "opinionArena": [
            {
                "text": "Должны ли у детей быть мобильные телефоны?",
                "level": "starter",
                "theme": "technology_A2"
            },
            {
                "text": "Где лучше жить: в доме или в квартире?",
                "level": "elementary",
                "theme": "neighbourhood_local_A2"
            }
        ],
        "criticsCorner": [
            {
                "text": "Жизнь — это то, что происходит с тобой, пока ты оживленно строишь другие планы.",
                "author": "John Lennon",
                "level": "elementary",
                "theme": "relationships_dating_A2"
            }
        ],
        "debates": [
            {
                "topic": "Высокая зарплата или короткий путь до работы — что важнее?",
                "sideA": "Высокая зарплата",
                "sideB": "Короткий путь",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Частая смена работы или преданность одной компании — что лучше для карьеры?",
                "sideA": "Частая смена",
                "sideB": "Одна компания",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Работа сверхурочно или уход вовремя каждый день — какая привычка лучше?",
                "sideA": "Сверхурочно",
                "sideB": "Вовремя",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Строгий босс или мягкий босс — с кем лучше работать?",
                "sideA": "Строгий",
                "sideB": "Мягкий",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Работа в большой компании или в маленькой — что лучше?",
                "sideA": "Большая",
                "sideB": "Маленькая",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Получить повышение или получить больше свободного времени — что бы вы выбрали?",
                "sideA": "Повышение",
                "sideB": "Свободное время",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Покупка дома или аренда на всю жизнь — какое финансовое решение умнее?",
                "sideA": "Покупка",
                "sideB": "Аренда",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Жизнь в центре города или в пригороде — что лучше?",
                "sideA": "Центр города",
                "sideB": "Пригород",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Тратить деньги на впечатления или на вещи — что делает вас счастливее?",
                "sideA": "Впечатления",
                "sideB": "Вещи",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Готовить каждый день или готовить на неделю вперед — что практичнее?",
                "sideA": "Каждый день",
                "sideB": "На неделю",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Нанять клинера или делать уборку самому — какой выбор лучше?",
                "sideA": "Клинер",
                "sideB": "Самому",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Жить с партнером или жить одному — что лучше для взрослых людей?",
                "sideA": "С партнером",
                "sideB": "Одному",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Рожать детей рано или позже в жизни — что лучше?",
                "sideA": "Рано",
                "sideB": "Позже",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Близкие отношения с семьей или независимость от нее — что важнее во взрослом возрасте?",
                "sideA": "Близкие отношения",
                "sideB": "Независимость",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Знакомство с новыми людьми или сохранение старых друзей — что ценнее?",
                "sideA": "Новые люди",
                "sideB": "Старые друзья",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Общение с коллегами после работы или поход прямо домой — что лучше для рабочих отношений?",
                "sideA": "Общение",
                "sideB": "Домой",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ходить в спортзал или тренироваться на улице — что лучше для взрослых?",
                "sideA": "Спортзал",
                "sideB": "Улица",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Строгая диета или умеренность во всем — что здоровее?",
                "sideA": "Строгая диета",
                "sideB": "Умеренность",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Идти к врачу сразу или ждать, пока само пройдет — что мудрее?",
                "sideA": "Сразу",
                "sideB": "Ждать",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Спать по восемь часов или шесть, но заниматься спортом — что лучше для энергии?",
                "sideA": "8 часов",
                "sideB": "6 часов + спорт",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Снимать стресс спортом или релаксацией — что работает лучше?",
                "sideA": "Спорт",
                "sideB": "Релаксация",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Смартфоны или живое общение — чем мы пользуемся больше, и проблема ли это?",
                "sideA": "Смартфоны",
                "sideB": "Общение",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Онлайн-банкинг или поход в банк — что лучше?",
                "sideA": "Онлайн",
                "sideB": "Поход в банк",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Работа с бумагой или работа в цифровом виде — что эффективнее?",
                "sideA": "Бумага",
                "sideB": "Цифра",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Соцсети для нетворкинга или личные встречи — что полезнее для карьеры?",
                "sideA": "Соцсети",
                "sideB": "Личные встречи",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Пакетный тур или самостоятельное путешествие — что лучше для взрослых?",
                "sideA": "Пакетный тур",
                "sideB": "Самостоятельно",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Поездка в город или отдых на пляже — как лучше расслабиться?",
                "sideA": "Город",
                "sideB": "Пляж",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Один длинный отпуск в году или несколько коротких — что лучше?",
                "sideA": "Один длинный",
                "sideB": "Несколько коротких",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Путешествие парой или в одиночку — что приносит больше удовольствия?",
                "sideA": "Парой",
                "sideB": "В одиночку",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Рассказывать партнеру о каждой мелочи или держать все в себе — что здоровее?",
                "sideA": "Все рассказывать",
                "sideB": "Держать в себе",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Проверять телефон первым делом утром или после завтрака — какая привычка лучше?",
                "sideA": "Сразу",
                "sideB": "После завтрака",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Знать имена соседей или не знать их — что сейчас считается нормой для взрослого?",
                "sideA": "Знать имена",
                "sideB": "Не знать",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Поход за продуктами со списком или без него — у кого жизнь лучше?",
                "sideA": "Со списком",
                "sideB": "Без списка",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Сказать боссу, что заболел, или идти на работу больным — какой выбор смелее?",
                "sideA": "Сказать боссу",
                "sideB": "Идти больным",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Полный рабочий день или частичная занятость — что лучше?",
                "sideA": "Полный день",
                "sideB": "Частичная",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Работа в офисе или работа из дома — что вы предпочитаете?",
                "sideA": "Офис",
                "sideB": "Дом",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Работа, которую вы любите, или работа, которая хорошо оплачивается — что важнее?",
                "sideA": "Любимая работа",
                "sideB": "Хорошая оплата",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Работа с другими людьми или работа в одиночку — что лучше?",
                "sideA": "С людьми",
                "sideB": "В одиночку",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Короткий путь на работу или длинный — что более приемлемо?",
                "sideA": "Короткий",
                "sideB": "Длинный",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Жить одному или жить с партнером — что лучше?",
                "sideA": "Одному",
                "sideB": "С партнером",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Большой город или маленький городок — где лучше жить взрослому человеку?",
                "sideA": "Большой город",
                "sideB": "Маленький городок",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Готовить дома или есть вне дома — что лучше для повседневной жизни?",
                "sideA": "Дома",
                "sideB": "Вне дома",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Иметь детей или не иметь — какая жизнь лучше?",
                "sideA": "С детьми",
                "sideB": "Без детей",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Снимать квартиру или покупать дом — что лучше для молодых людей?",
                "sideA": "Снимать",
                "sideB": "Покупать",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Физкультура каждый день или отдых — что лучше для здоровья?",
                "sideA": "Упражнения",
                "sideB": "Отдых",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Идти к врачу или ждать — что лучше, когда вы чувствуете себя больным?",
                "sideA": "Врач",
                "sideB": "Ждать",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Спать по восемь часов или меньше — что более реально для взрослых?",
                "sideA": "8 часов",
                "sideB": "Меньше",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ходить на работу пешком или ездить на машине — что лучше для здоровья?",
                "sideA": "Пешком",
                "sideB": "Машина",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Онлайн-покупки или покупки в магазине — что вы предпочитаете?",
                "sideA": "Онлайн",
                "sideB": "Магазин",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Копить на будущее или наслаждаться деньгами сейчас — что мудрее?",
                "sideA": "Копить",
                "sideB": "Наслаждаться сейчас",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Дорогие вещи или дешевые — что выгоднее?",
                "sideA": "Дорогие",
                "sideB": "Дешевые",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Покупка нового или покупка подержанного — что лучше?",
                "sideA": "Новое",
                "sideB": "Подержанное",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Смотреть телевизор дома или гулять — какой вечер лучше?",
                "sideA": "ТВ",
                "sideB": "Гулять",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Отпуск с семьей или отпуск с друзьями — что лучше?",
                "sideA": "С семьей",
                "sideB": "С друзьями",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Оставаться в своей стране или путешествовать за границу — какой отдых лучше?",
                "sideA": "Своя страна",
                "sideB": "За границу",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Спорт или чтение — какое хобби лучше для взрослых?",
                "sideA": "Спорт",
                "sideB": "Чтение",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Часто видеться с друзьями или проводить время в одиночестве — что важнее?",
                "sideA": "Друзья",
                "sideB": "Одиночество",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Отвечать на электронные письма сразу или оставлять их на потом — что более профессионально?",
                "sideA": "Сразу",
                "sideB": "Потом",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Мыть посуду сразу или оставить до завтра — что лучше?",
                "sideA": "Сразу",
                "sideB": "До завтра",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Всегда приходить заранее или всегда опаздывать на пять минут — что хуже на работе?",
                "sideA": "Заранее",
                "sideB": "Опоздание",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Очень организованный стол или беспорядок на столе — какой человек более продуктивен?",
                "sideA": "Организованный",
                "sideB": "Беспорядок",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Разговоры о работе за ужином или никаких разговоров о работе — какое правило лучше?",
                "sideA": "О работе",
                "sideB": "Без работы",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Жить с семьей против одного — что лучше?",
                "sideA": "С семьей",
                "sideB": "Один",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Иметь брата против сестры — что лучше?",
                "sideA": "Брат",
                "sideB": "Сестра",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Большая против маленькой семьи — какая лучше?",
                "sideA": "Большая",
                "sideB": "Маленькая",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Старший против младшего ребенка — что лучше?",
                "sideA": "Старший",
                "sideB": "Младший",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Утренняя против дневной школы — что лучше?",
                "sideA": "Утро",
                "sideB": "День",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Чтение против математики — что веселее?",
                "sideA": "Чтение",
                "sideB": "Математика",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Школа против обучения дома — что лучше?",
                "sideA": "Школа",
                "sideB": "Дом",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Домашка против ее отсутствия — что больше помогает?",
                "sideA": "Домашка",
                "sideB": "Нет",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Один против работы в паре — что вы предпочитаете?",
                "sideA": "Один",
                "sideB": "Пара",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Бумага против компьютера — что лучше?",
                "sideA": "Бумага",
                "sideB": "Компьютер",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Завтрак против ужина — какой прием пищи важнее?",
                "sideA": "Завтрак",
                "sideB": "Ужин",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Горячая против холодной еды — что лучше?",
                "sideA": "Горячая",
                "sideB": "Холодная",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Дом против ресторана — что лучше?",
                "sideA": "Дом",
                "sideB": "Ресторан",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Сладкое против соленого — что вы предпочитаете?",
                "sideA": "Сладкое",
                "sideB": "Соленое",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Готовить против покупать еду — что приятнее?",
                "sideA": "Готовить",
                "sideB": "Покупать",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Рано против поздно вставать — что лучше?",
                "sideA": "Рано",
                "sideB": "Поздно",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Утро против вечера — какое время суток приятнее?",
                "sideA": "Утро",
                "sideB": "Вечер",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Будни против выходных — что вы предпочитаете?",
                "sideA": "Будни",
                "sideB": "Выходные",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Лето против зимы — какое время года лучше?",
                "sideA": "Лето",
                "sideB": "Зима",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Рано против поздно ложиться — что здоровее?",
                "sideA": "Рано",
                "sideB": "Поздно",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Дом против квартиры — что лучше?",
                "sideA": "Дом",
                "sideB": "Квартира",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Город против деревни — где лучше жить?",
                "sideA": "Город",
                "sideB": "Деревня",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Спальня против гостиной — какая комната вам больше нравится?",
                "sideA": "Спальня",
                "sideB": "Гостиная",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Игры дома против улицы — какие веселее?",
                "sideA": "Дома",
                "sideB": "Улица",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "ТВ против книги — что лучше?",
                "sideA": "ТВ",
                "sideB": "Книга",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Спорт против видеоигр — что веселее?",
                "sideA": "Спорт",
                "sideB": "Видеоигры",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Рисование против пения — какое хобби лучше?",
                "sideA": "Рисование",
                "sideB": "Пение",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Играть одному против друзей — что веселее?",
                "sideA": "Один",
                "sideB": "Друзья",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Плавание против бега — какой спорт вы предпочитаете?",
                "sideA": "Плавание",
                "sideB": "Бег",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Музыка против спорта — какое хобби лучше?",
                "sideA": "Музыка",
                "sideB": "Спорт",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Домашние против диких животных — кто интереснее?",
                "sideA": "Домашние",
                "sideB": "Дикие",
                "level": "elementary",
                "theme": "animals_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Дождь против солнца — какую погоду вы предпочитаете?",
                "sideA": "Дождь",
                "sideB": "Солнце",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Море против гор — что лучше для отпуска?",
                "sideA": "Море",
                "sideB": "Горы",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Цветы против деревьев — что красивее?",
                "sideA": "Цветы",
                "sideB": "Деревья",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Машина против автобуса — что лучше?",
                "sideA": "Машина",
                "sideB": "Автобус",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Пешком против велосипеда — как лучше передвигаться?",
                "sideA": "Пешком",
                "sideB": "Велосипед",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Короткий против долгого отпуска — что лучше?",
                "sideA": "Короткий",
                "sideB": "Долгий",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Один против поездки с семьей — что веселее?",
                "sideA": "Один",
                "sideB": "Семья",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Онлайн-шопинг против покупок в магазине",
                "sideA": "Онлайн",
                "sideB": "Лично",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [
                    "Удобство",
                    "Лучшие цены"
                ],
                "ideasB": [
                    "Примерить вещи",
                    "Мгновенное удовлетворение"
                ]
            },
            {
                "topic": "Бумажные книги против электронных",
                "sideA": "Бумажные",
                "sideB": "Электронные",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [
                    "Запах/Ощущение",
                    "Предмет коллекционирования"
                ],
                "ideasB": [
                    "Портативность",
                    "Экономия места"
                ]
            },
            {
                "topic": "Учиться утром или учиться вечером — когда лучше?",
                "sideA": "Утром",
                "sideB": "Вечером",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Строгие учителя или добрые учителя — кто больше помогает ученикам?",
                "sideA": "Строгие",
                "sideB": "Добрые",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Учиться по учебнику или учиться по видео — что эффективнее?",
                "sideA": "Учебник",
                "sideB": "Видео",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Короткие уроки или длинные уроки — какие помогают учиться лучше?",
                "sideA": "Короткие",
                "sideB": "Длинные",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Групповые проекты или индивидуальные задания — что вы предпочитаете?",
                "sideA": "Группа",
                "sideB": "Индивидуально",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Школьная форма или повседневная одежда в школе — что лучше?",
                "sideA": "Форма",
                "sideB": "Повседневная",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Домашняя еда или фастфуд — что лучше?",
                "sideA": "Домашняя",
                "sideB": "Фастфуд",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Три больших приема пищи или много маленьких перекусов — что здоровее?",
                "sideA": "Три раза",
                "sideB": "Перекусы",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Вегетарианская еда или мясо — какая диета лучше?",
                "sideA": "Вегетарианская",
                "sideB": "Мясо",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Пить чай или пить кофе — что лучше?",
                "sideA": "Чай",
                "sideB": "Кофе",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Есть в одиночестве или есть с другими — что вы предпочитаете?",
                "sideA": "Один",
                "sideB": "С другими",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Заниматься командным спортом или индивидуальным — что лучше?",
                "sideA": "Командный",
                "sideB": "Индивидуальный",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Проводить свободное время дома или на улице — что лучше?",
                "sideA": "Дома",
                "sideB": "На улице",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Кино или театр — куда лучше сходить вечером?",
                "sideA": "Кино",
                "sideB": "Театр",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Слушать музыку или играть на инструменте — что приятнее?",
                "sideA": "Слушать",
                "sideB": "Играть",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Видеоигры или настольные игры — что веселее?",
                "sideA": "Видеоигры",
                "sideB": "Настольные",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ходить по магазинам или оставаться дома — как лучше провести выходные?",
                "sideA": "Магазины",
                "sideB": "Дома",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Мобильный телефон или компьютер — что полезнее в повседневной жизни?",
                "sideA": "Телефон",
                "sideB": "Компьютер",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Отправить сообщение или позвонить по телефону — что лучше?",
                "sideA": "Сообщение",
                "sideB": "Звонок",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Электронная книга или бумажная — что вы предпочитаете читать?",
                "sideA": "Э-книга",
                "sideB": "Бумажная",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Фотографировать на телефон или на камеру — что дает лучший результат?",
                "sideA": "Телефон",
                "sideB": "Камера",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Отпуск на пляже или отпуск в горах — что лучше?",
                "sideA": "Пляж",
                "sideB": "Горы",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Путешествовать на поезде или на самолете — что лучше?",
                "sideA": "Поезд",
                "sideB": "Самолет",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Посетить знаменитый город или маленькую деревню — что интереснее?",
                "sideA": "Город",
                "sideB": "Деревня",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Остановиться в отеле или в местной семье — что вы предпочитаете?",
                "sideA": "Отель",
                "sideB": "В семье",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Путешествовать за границу или изучать свою страну — что более стоящее?",
                "sideA": "За границу",
                "sideB": "Своя страна",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Иметь много друзей или несколько близких друзей — что лучше?",
                "sideA": "Много друзей",
                "sideB": "Близкие друзья",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Встречаться с друзьями лично или общаться онлайн — что приносит больше удовольствия?",
                "sideA": "Лично",
                "sideB": "Онлайн",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Жить с родителями или в студенческой квартире — что лучше для молодежи?",
                "sideA": "С родителями",
                "sideB": "Студ. квартира",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Праздновать день рождения дома или куда-то сходить — что приятнее?",
                "sideA": "Дома",
                "sideB": "Вне дома",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Копить деньги или тратить их — что мудрее?",
                "sideA": "Копить",
                "sideB": "Тратить",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Работать неполный рабочий день во время учебы или сосредоточиться только на школе — что лучше?",
                "sideA": "Подработка",
                "sideB": "Только учеба",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Зарабатывать много денег или иметь свободное время — что важнее?",
                "sideA": "Деньги",
                "sideB": "Свободное время",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Жить с бабушкой и дедушкой против жизни без них — что приятнее?",
                "sideA": "С бабушкой и дедушкой",
                "sideB": "Без них",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Мамина еда против папиной — что лучше?",
                "sideA": "Мамина",
                "sideB": "Папина",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Математика против рисования — какой предмет веселее?",
                "sideA": "Математика",
                "sideB": "Рисование",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Писать на бумаге против печати на планшете — что лучше?",
                "sideA": "Бумага",
                "sideB": "Планшет",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Пицца против пасты — что вкуснее?",
                "sideA": "Пицца",
                "sideB": "Паста",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Мороженое против торта — какой десерт лучше?",
                "sideA": "Мороженое",
                "sideB": "Торт",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Короткие дни против длинных — что лучше?",
                "sideA": "Короткие дни",
                "sideB": "Длинные",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "День в парке против дня на пляже — что лучше?",
                "sideA": "Парк",
                "sideB": "Пляж",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Самолет против поезда — что веселее?",
                "sideA": "Самолет",
                "sideB": "Поезд",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Душ утром против душа вечером — что лучше?",
                "sideA": "Утром",
                "sideB": "Вечером",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Кошки, сбрасывающие вещи со столов, против собак, грызущих обувь — какой питомец больше раздражает?",
                "sideA": "Кошки",
                "sideB": "Собаки",
                "level": "elementary",
                "theme": "animals_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Есть пиццу вилкой против того, чтобы есть ее руками — как правильно?",
                "sideA": "Вилкой",
                "sideB": "Руками",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Спать в носках против того, чтобы спать без носков — что лучше?",
                "sideA": "В носках",
                "sideB": "Без носков",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Замок из песка против снеговика — что веселее строить?",
                "sideA": "Замок из песка",
                "sideB": "Снеговик",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Много экзаменов против очень малого количества — что справедливее?",
                "sideA": "Много экзаменов",
                "sideB": "Мало экзаменов",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Начало школы в 7 лет против начала в 5 лет — что лучше для детей?",
                "sideA": "В 7 лет",
                "sideB": "В 5 лет",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Есть медленно против того, чтобы есть быстро — что лучше для вас?",
                "sideA": "Медленно",
                "sideB": "Быстро",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Готовить дома против заказа еды онлайн — что лучше?",
                "sideA": "Готовить дома",
                "sideB": "Заказывать онлайн",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Готовка еды против выпечки — что веселее как хобби?",
                "sideA": "Готовка",
                "sideB": "Выпечка",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ходить в спортзал против тренировок на улице — что лучше?",
                "sideA": "Спортзал",
                "sideB": "Улица",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Фото в телефоне против распечатанных фото — что лучше?",
                "sideA": "В телефоне",
                "sideB": "Распечатанные",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Смарт-ТВ против компьютерного монитора — на чем лучше смотреть фильмы?",
                "sideA": "Смарт-ТВ",
                "sideB": "Компьютер",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Жаркая страна против холодной страны — где лучше отдыхать?",
                "sideA": "Жаркая",
                "sideB": "Холодная",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Дарить подарки против того, чтобы их получать — что вы предпочитаете?",
                "sideA": "Дарить",
                "sideB": "Получать",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Работа в помещении против работы на улице — что лучше?",
                "sideA": "В помещении",
                "sideB": "На улице",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ананас в пицце против отсутствия ананаса — как правильно?",
                "sideA": "Ананас",
                "sideB": "Без ананаса",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Наливать сначала молоко против того, чтобы наливать сначала чай — как лучше?",
                "sideA": "Сначала молоко",
                "sideB": "Сначала чай",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Понедельник против пятницы — какой день на самом деле хуже?",
                "sideA": "Понедельник",
                "sideB": "Пятница",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Проснуться за пять минут до будильника против сна до самого будильника — что больше раздражает?",
                "sideA": "До будильника",
                "sideB": "До конца",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Кошки против собак — кто из них на самом деле хозяин в доме?",
                "sideA": "Кошки",
                "sideB": "Собаки",
                "level": "elementary",
                "theme": "animals_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Когда слишком жарко против того, когда слишком холодно — что хуже?",
                "sideA": "Слишком жарко",
                "sideB": "Слишком холодно",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "Мой последний отпуск",
                "level": "elementary",
                "theme": "transport_travel_A2"
            }
        ]
    }
};

    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData["ru"]) window.speakingData["ru"] = {};

    for (const cat in speakingData["ru"]) {
        if (!window.speakingData["ru"][cat]) window.speakingData["ru"][cat] = [];
        window.speakingData["ru"][cat].push(...speakingData["ru"][cat]);
    }
})();
