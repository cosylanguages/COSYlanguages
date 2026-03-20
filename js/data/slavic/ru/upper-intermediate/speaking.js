(function() {
    const speakingData = {
    "ru": {
        "opinionArena": [
            {
                "text": "Разрушают ли социальные сети наши навыки общения?",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "text": "Должен ли общественный транспорт быть бесплатным?",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2"
            }
        ],
        "criticsCorner": [
            {
                "text": "Единственная константа — это перемены.",
                "author": "Heraclitus",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2"
            }
        ],
        "debates": [
            {
                "topic": "Четырехдневная рабочая неделя против пятидневной — какая модель больше выгодна работникам и работодателям?",
                "sideA": "4 дня",
                "sideB": "5 дней",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Безусловный базовый доход против адресной социальной помощи — что является более эффективной защитой для работающих взрослых?",
                "sideA": "ББД",
                "sideB": "Адресная помощь",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Гиг-экономика против постоянной занятости — какая модель лучше служит работникам в долгосрочной перспективе?",
                "sideA": "Гиг-экономика",
                "sideB": "Постоянная занятость",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Меритократия против структурных преимуществ — что точнее объясняет карьерный успех?",
                "sideA": "Меритократия",
                "sideB": "Структурные преимущества",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Прозрачность зарплат против конфиденциальности — что создает более справедливую рабочую среду?",
                "sideA": "Прозрачность",
                "sideB": "Конфиденциальность",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Автоматизация против человеческого труда — что является большей долгосрочной угрозой для занятости взрослых?",
                "sideA": "Автоматизация",
                "sideB": "Человеческий труд",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Удаленная работа против присутствия в офисе — что лучше для карьерного роста и командной культуры?",
                "sideA": "Удаленка",
                "sideB": "Офис",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Равный отпуск по уходу за ребенком для мужчин и женщин против более длинного декретного отпуска — какая политика справедливее?",
                "sideA": "Равный отпуск",
                "sideB": "Длинный декрет",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Выбор не иметь детей против социального давления завести семью — что заслуживает большего уважения?",
                "sideA": "Бездетность",
                "sideB": "Давление общества",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Брак как институт против сожительства без брака — что более актуально сегодня?",
                "sideA": "Брак",
                "sideB": "Сожительство",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Семьи с двумя доходами против ситуации, когда один партнер остается дома — какая модель лучше для детей и взрослых?",
                "sideA": "Два дохода",
                "sideB": "Один дома",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Гендерный разрыв в оплате труда как структурная проблема против вопроса индивидуального выбора — какое объяснение весомее?",
                "sideA": "Структурная проблема",
                "sideB": "Личный выбор",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Владение жильем как цель против профессионального рынка аренды — какая модель жилья лучше подходит современным взрослым?",
                "sideA": "Владение",
                "sideB": "Аренда",
                "level": "upper-intermediate",
                "theme": "economy_labour_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Джентрификация как улучшение против джентрификации как вытеснение — какая формулировка честнее?",
                "sideA": "Улучшение",
                "sideB": "Вытеснение",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Городская плотность против разрастания пригородов — какая модель лучше для комфортных городов?",
                "sideA": "Плотность",
                "sideB": "Разрастание",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Жизнь рядом с семьей против переезда ради возможностей — какой выбор дает лучшее самочувствие в долгосрочной перспективе?",
                "sideA": "Рядом с семьей",
                "sideB": "Переезд",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Старение населения как кризис против старения как ресурса — какая формулировка продуктивнее?",
                "sideA": "Кризис",
                "sideB": "Ресурс",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Личная ответственность за здоровье против системных факторов — что имеет больший вес в объяснении результатов для здоровья?",
                "sideA": "Личная отв-ть",
                "sideB": "Системные факторы",
                "level": "upper-intermediate",
                "theme": "healthcare_systems_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Дни психологической разгрузки как законное право на рабочем месте против источника злоупотреблений — где работодатели должны провести черту?",
                "sideA": "Законное право",
                "sideB": "Злоупотребление",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Профилактическая медицина против лечебной медицины — на что должно выделяться больше государственного финансирования?",
                "sideA": "Профилактика",
                "sideB": "Лечение",
                "level": "upper-intermediate",
                "theme": "healthcare_systems_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Антивозрастная медицина против грациозного старения — какая позиция более последовательна?",
                "sideA": "Антивозрастная",
                "sideB": "Грациозное старение",
                "level": "upper-intermediate",
                "theme": "healthcare_systems_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Технологии наблюдения для общественной безопасности против права на частную жизнь — где должен быть баланс?",
                "sideA": "Безопасность",
                "sideB": "Частная жизнь",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Соцсети как инструмент гражданского участия против соцсетей как драйвера поляризации — какой эффект преобладает?",
                "sideA": "Участие",
                "sideB": "Поляризация",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "ИИ в найме против человеческого суждения — что дает более справедливые решения о найме?",
                "sideA": "ИИ",
                "sideB": "Человек",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Право быть забытым в интернете против права общественности на информацию — что должно иметь приоритет?",
                "sideA": "Право быть забытым",
                "sideB": "Право на инфо",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Обязательное голосование против добровольного — что создает более здоровую демократию?",
                "sideA": "Обязательное",
                "sideB": "Добровольное",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Политическое участие через протест против участия через официальные институты — что эффективнее для взрослых сегодня?",
                "sideA": "Протест",
                "sideB": "Институты",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Национальная идентичность против европейской или глобальной — что важнее для взрослых в 2026 году?",
                "sideA": "Национальная",
                "sideB": "Глобальная",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Повышение налогов для финансирования госуслуг против сокращения расходов — какой политический выбор более оправдан?",
                "sideA": "Налоги",
                "sideB": "Сокращение расходов",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Признание, что вы не представляете, как устроена ваша пенсия, против уверенной имитации знания — какой опыт более универсален для взрослого?",
                "sideA": "Признание",
                "sideB": "Имитация",
                "level": "upper-intermediate",
                "theme": "economy_labour_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Быть человеком, который всегда планирует встречи, против того, кто просто приходит — какая роль больше утомляет?",
                "sideA": "Организатор",
                "sideB": "Гость",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Иметь твердое мнение о кухонных привычках коллег против полного безразличия — какой человек более терпим?",
                "sideA": "Твердое мнение",
                "sideB": "Безразличие",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Посещение каждого необязательного рабочего мероприятия против полного их игнорирования — какая стратегия лучше для карьеры и психики?",
                "sideA": "Посещать все",
                "sideB": "Игнорировать",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Взрослые, которые все еще путаются в налоговой декларации, против тех, кому нравится ее заполнять — какая группа заслуживает большего доверия?",
                "sideA": "Путаются",
                "sideB": "Нравится",
                "level": "upper-intermediate",
                "theme": "economy_labour_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Жаловаться друзьям на стоимость жизни против того, чтобы делать вид, что все в порядке — какая реакция честнее?",
                "sideA": "Жаловаться",
                "sideB": "Делать вид",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Социальные сети против живого общения — что лучше для построения отношений?",
                "sideA": "Соцсети",
                "sideB": "Лично",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Городская жизнь против сельской жизни — где качество жизни выше?",
                "sideA": "Город",
                "sideB": "Деревня",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Онлайн-обучение против традиционного класса — за чем будущее образования?",
                "sideA": "Онлайн",
                "sideB": "Класс",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Возобновляемая энергия против ядерной энергии — какое решение лучше для климата?",
                "sideA": "Возобновляемая",
                "sideB": "Ядерная",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Быстрая мода против устойчивой моды — можем ли мы позволить себе быть этичными?",
                "sideA": "Быстрая мода",
                "sideB": "Устойчивая",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "Будущее мира через 50 лет",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "topic": "Влияние изменения климата на местные сообщества",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2"
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
