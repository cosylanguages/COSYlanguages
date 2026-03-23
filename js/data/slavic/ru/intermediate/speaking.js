(function() {
    const speakingData = {
    "ru": {
        "opinionArena": [
            {
                "text": "Можем ли мы прожить без интернета неделю?",
                "level": "intermediate",
                "theme": "media_news_B1"
            },
            {
                "text": "Нужно ли каждому учить второй язык?",
                "level": "intermediate",
                "theme": "society_community_B1"
            }
        ],
        "criticsCorner": [
            {
                "text": "Я мыслю, следовательно, я существую.",
                "author": "Descartes",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "text": "Красота спасет мир.",
                "author": "Dostoevsky",
                "level": "intermediate",
                "theme": "society_community_B1"
            }
        ],
        "debates": [
            {
                "topic": "Удаленка или офис — что лучше для продуктивности и благополучия?",
                "sideA": "Удаленка",
                "sideB": "Офис",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Стабильность работы или карьерный рост — что взрослым стоит приоритизировать?",
                "sideA": "Стабильность",
                "sideB": "Рост",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Свой бизнес или работа по найму — какой выбор лучше в 30 лет?",
                "sideA": "Свой бизнес",
                "sideB": "По найму",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Амбиции или баланс между работой и жизнью — можно ли действительно иметь и то, и другое?",
                "sideA": "Амбиции",
                "sideB": "Баланс",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Нетворкинг или развитие навыков — что больше продвигает вашу карьеру?",
                "sideA": "Нетворкинг",
                "sideB": "Навыки",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Честная обратная связь от начальника или полная независимость в работе — что больше мотивирует взрослых?",
                "sideA": "Обратная связь",
                "sideB": "Независимость",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Смена карьеры в 40 лет или верность своей области — какое решение мудрее?",
                "sideA": "Смена карьеры",
                "sideB": "Верность области",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Досрочное погашение ипотеки или инвестирование этих денег — что умнее?",
                "sideA": "Погасить ипотеку",
                "sideB": "Инвестировать",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Собственное жилье или пожизненная аренда — что больше подходит для современной взрослой жизни?",
                "sideA": "Собственное",
                "sideB": "Аренда",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Копить на пенсию смолоду или наслаждаться деньгами в 30 лет — что мудрее?",
                "sideA": "Копить смолоду",
                "sideB": "Наслаждаться сейчас",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Жить скромнее своих возможностей или тратить, чтобы наслаждаться жизнью сейчас — какой подход здоровее?",
                "sideA": "Жить скромнее",
                "sideB": "Наслаждаться сейчас",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Два дохода в семье или один партнер, сидящий дома — что лучше для семей?",
                "sideA": "Два дохода",
                "sideB": "Один дома",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Иметь детей или сознательно отказаться от них — какая взрослая жизнь более насыщенная?",
                "sideA": "С детьми",
                "sideB": "Без детей",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Строгое воспитание или вседозволенность — из кого вырастают более счастливые взрослые?",
                "sideA": "Строгое",
                "sideB": "Вседозволенность",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Долгосрочные отношения или жизнь в одиночку — что лучше для личностного роста?",
                "sideA": "Отношения",
                "sideB": "Одиночество",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Разделять работу и личную жизнь или объединять их — что здоровее?",
                "sideA": "Разделять",
                "sideB": "Объединять",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Переезд за границу парой или жизнь рядом с семьей — какое решение верное?",
                "sideA": "Переезд",
                "sideB": "Рядом с семьей",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Приоритет физического здоровья или ментального — на чем взрослым стоит сосредоточиться в первую очередь?",
                "sideA": "Физическое",
                "sideB": "Ментальное",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Частная медицина или опора на государственную систему — какая стратегия лучше для взрослого?",
                "sideA": "Частная",
                "sideB": "Государственная",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Регулярные медосмотры или поход к врачу только во время болезни — какой подход умнее?",
                "sideA": "Регулярно",
                "sideB": "Только когда болен",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Меньше алкоголя или меньше стресса — что сильнее влияет на здоровье взрослых?",
                "sideA": "Меньше алкоголя",
                "sideB": "Меньше стресса",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Личная свобода или ответственность перед обществом — чем должны руководствоваться взрослые при принятии решений?",
                "sideA": "Свобода",
                "sideB": "Ответственность",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Оптимизм по поводу будущего или реализм — какая позиция полезнее для взрослых?",
                "sideA": "Оптимизм",
                "sideB": "Реализм",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Изменять мир или строить стабильную личную жизнь — какая амбиция более честная?",
                "sideA": "Изменять мир",
                "sideB": "Стабильная жизнь",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Тратить свое время на волонтерство или жертвовать деньги — что приносит больше пользы?",
                "sideA": "Волонтерство",
                "sideB": "Деньги",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Следовать ценностям своего поколения или ставить их под сомнение — что более достойно восхищения?",
                "sideA": "Следовать",
                "sideB": "Сомневаться",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Знать, сколько зарабатывают ваши коллеги, или не знать — что лучше для гармонии в офисе?",
                "sideA": "Знать",
                "sideB": "Не знать",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Отвечать на сообщения мгновенно или не торопиться — что более уважительно во взрослой жизни?",
                "sideA": "Сразу",
                "sideB": "Не торопясь",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Признаться, что не имеешь понятия, что такое пенсионный фонд, или притворяться, что знаешь — что больше похоже на жизнь взрослого человека?",
                "sideA": "Признаться",
                "sideB": "Притворяться",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Отменять планы в последний момент или идти куда-то через силу — какая взрослая привычка хуже?",
                "sideA": "Отменять",
                "sideB": "Идти через силу",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Открыто обсуждать деньги с друзьями или держать это в секрете — какой подход более зрелый?",
                "sideA": "Обсуждать",
                "sideB": "Держать в секрете",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Работа из дома против работы в офисе",
                "sideA": "Дом",
                "sideB": "Офис",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [
                    "Нет поездок",
                    "Гибкость"
                ],
                "ideasB": [
                    "Общение",
                    "Лучшая концентрация"
                ]
            },
            {
                "topic": "Электромобили против бензиновых авто",
                "sideA": "Электро",
                "sideB": "Бензин",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [
                    "Экология",
                    "Тишина"
                ],
                "ideasB": [
                    "Запас хода",
                    "Скорость зарядки"
                ]
            },
            {
                "topic": "Онлайн-обучение или обучение в классе — что эффективнее?",
                "sideA": "Онлайн",
                "sideB": "В классе",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Запоминание фактов или умение находить информацию — какой навык важнее?",
                "sideA": "Факты",
                "sideB": "Поиск инфо",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Университетское образование или профессиональное обучение — какой путь лучше?",
                "sideA": "Университет",
                "sideB": "Колледж/ПТУ",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Экзамены или непрерывное оценивание — какой способ оценки студентов более справедлив?",
                "sideA": "Экзамены",
                "sideB": "Оценки за год",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Изучение иностранного языка в школе или жизнь за границей — что эффективнее?",
                "sideA": "Школа",
                "sideB": "За границей",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Школы с раздельным обучением или смешанные школы — какие лучше для учеников?",
                "sideA": "Раздельные",
                "sideB": "Смешанные",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Социальные сети или личное общение — что лучше для поддержания связи?",
                "sideA": "Соцсети",
                "sideB": "Лично",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Стриминговые сервисы или традиционное ТВ — что лучше?",
                "sideA": "Стриминг",
                "sideB": "ТВ",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Работа из дома или работа в офисе — что продуктивнее?",
                "sideA": "Дом",
                "sideB": "Офис",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Чтение новостей онлайн или чтение газеты — что надежнее?",
                "sideA": "Новости онлайн",
                "sideB": "Газета",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Проводить время в соцсетях или проводить время на природе — что лучше для вашего психического здоровья?",
                "sideA": "Соцсети",
                "sideB": "Природа",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Пользоваться общественным транспортом или водить машину — что лучше для общества?",
                "sideA": "Общ. транспорт",
                "sideB": "Машина",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Покупка подержанной одежды или покупка новой — какая привычка лучше?",
                "sideA": "Б/у",
                "sideB": "Новое",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Жизнь в городе или жизнь в деревне — что больше подходит молодежи?",
                "sideA": "Город",
                "sideB": "Деревня",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Вегетарианство или употребление мяса — что лучше для планеты?",
                "sideA": "Вегетарианство",
                "sideB": "Мясо",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Индивидуальные изменения образа жизни или действия правительства — что дает больше для экологии?",
                "sideA": "Лично",
                "sideB": "Государство",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Стабильная работа или творческая карьера — какой жизненный выбор лучше?",
                "sideA": "Стабильность",
                "sideB": "Творчество",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Открытие собственного бизнеса или работа на компанию — что лучше?",
                "sideA": "Свой бизнес",
                "sideB": "Компания",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Высокая зарплата или удовлетворение от работы — что важнее в работе?",
                "sideA": "Зарплата",
                "sideB": "Удовлетворение",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Работать сверхурочно или иметь баланс между работой и личной жизнью — что ведет к большему успеху?",
                "sideA": "Много работы",
                "sideB": "Баланс",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Выбор карьеры по призванию или на основе перспектив трудоустройства — что мудрее?",
                "sideA": "Призвание",
                "sideB": "Перспективы",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Жить как индивидуальность или ставить интересы общества на первое место — что важнее?",
                "sideA": "Индивид",
                "sideB": "Общество",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Традиционные ценности или современные ценности — какие важнее сохранить?",
                "sideA": "Традиции",
                "sideB": "Модерн",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Волонтерство или пожертвование денег на благотворительность — что помогает больше?",
                "sideA": "Волонтерство",
                "sideB": "Деньги",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Слава или возможность тихо менять мир к лучшему — какая цель в жизни лучше?",
                "sideA": "Слава",
                "sideB": "Тихое влияние",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Следование правилам или умение думать самостоятельно — что важнее?",
                "sideA": "Правила",
                "sideB": "Свои мысли",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Физическое здоровье или психическое здоровье — что должно быть приоритетом?",
                "sideA": "Физическое",
                "sideB": "Психическое",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Профилактика или лечение — какой подход к здравоохранению лучше?",
                "sideA": "Профилактика",
                "sideB": "Лечение",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Соревновательный спорт или упражнения для удовольствия — что лучше для вас?",
                "sideA": "Спорт",
                "sideB": "Для себя",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Частное здравоохранение или государственное — какая система справедливее?",
                "sideA": "Частное",
                "sideB": "Государственное",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Кино или литература — какая форма искусства сильнее?",
                "sideA": "Кино",
                "sideB": "Литература",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Современное искусство или классическое — что ценнее?",
                "sideA": "Современное",
                "sideB": "Классика",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Сохранение старых зданий или строительство новых — что важнее?",
                "sideA": "Сохранение",
                "sideB": "Новые здания",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Местная культура или глобализация — что больше обогащает общество?",
                "sideA": "Местная",
                "sideB": "Глобализация",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Учиться на ошибках против того, чтобы учиться на успехе — что учит большему?",
                "sideA": "Ошибки",
                "sideB": "Успех",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Планшеты в классе против традиционных тетрадей — что больше помогает ученикам?",
                "sideA": "Планшеты",
                "sideB": "Тетради",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Быть всегда на связи против наличия цифрового свободного времени — что лучше?",
                "sideA": "Всегда на связи",
                "sideB": "Свободное время",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Повторное использование вещей против переработки — что эффективнее?",
                "sideA": "Повторное использование",
                "sideB": "Переработка",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Одна карьера на всю жизнь против частой смены профессий — что лучше?",
                "sideA": "Одна карьера",
                "sideB": "Частая смена",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Сон против физических упражнений — что больше влияет на ваше здоровье?",
                "sideA": "Сон",
                "sideB": "Упражнения",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Поп-музыка против классической музыки — что имеет большее культурное влияние?",
                "sideA": "Поп-музыка",
                "sideB": "Классика",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Знать, чем все закончится, против того, чтобы быть застигнутым врасплох — что лучше?",
                "sideA": "Знать заранее",
                "sideB": "Сюрприз",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Мгновенный ответ на сообщения против того, чтобы не торопиться — что более уважительно?",
                "sideA": "Мгновенно",
                "sideB": "Не торопясь",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Просмотр сериала запоем против просмотра одной серии в неделю — как правильно?",
                "sideA": "Запоем",
                "sideB": "По серии",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Место у окна против места у прохода в самолете — что объективно лучше?",
                "sideA": "У окна",
                "sideB": "У прохода",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Один раз пропустить спортзал против того, чтобы пойти и плохо потренироваться — что хуже?",
                "sideA": "Пропустить",
                "sideB": "Плохая тренировка",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Разговаривать с самим собой против разговора со своим питомцем — что более разумно?",
                "sideA": "С собой",
                "sideB": "С питомцем",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "Человек, который меня вдохновил",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "topic": "Важность осведомленности о ментальном здоровье",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1"
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
