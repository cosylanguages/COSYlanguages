(function() {
    const data = [{
                "topic": "Плоские организационные иерархии против вертикальных структур управления — что лучше служит работающим в них взрослым?",
                "sideA": "Плоская иерархия",
                "sideB": "Вертикальная",
                "level": "advanced",
                "theme": "organisational_culture_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Культ продуктивности против аргументов в пользу праздности — что лучше отражает реальные потребности человека в работе?",
                "sideA": "Продуктивность",
                "sideB": "Праздность",
                "level": "advanced",
                "theme": "organisational_culture_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Лидерство как навык, которому можно научиться, против лидерства как врожденного качества — какая позиция более обоснована эмпирически?",
                "sideA": "Навык",
                "sideB": "Качество",
                "level": "advanced",
                "theme": "organisational_culture_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Культ успеха (hustle culture) против медленной жизни (slow living) — кто побеждает и кто должен победить?",
                "sideA": "Культ успеха",
                "sideB": "Медленная жизнь",
                "level": "advanced",
                "theme": "routine_A1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Корпоративная социальная ответственность как искреннее обязательство против инструмента репутационного менеджмента — что честнее?",
                "sideA": "Искренность",
                "sideB": "Репутация",
                "level": "advanced",
                "theme": "organisational_culture_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Взрослая идентичность как нечто фиксированное против идентичности в процессе постоянного конструирования — что лучше отражает жизненный опыт?",
                "sideA": "Фиксированная",
                "sideB": "В процессе",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Приручение феминизма культурой потребления против феминизма, искренне меняющего взрослую жизнь — что ближе к истине?",
                "sideA": "Феминизм потребления",
                "sideB": "Искренние перемены",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Кризис среднего возраста как патология против кризиса как легитимной переоценки ценностей — какая трактовка полезнее?",
                "sideA": "Патология",
                "sideB": "Переоценка",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Давление необходимости быть необычайным против достоинства обычной жизни — какой идеал более гуманен?",
                "sideA": "Необычайность",
                "sideB": "Обычная жизнь",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Обязанность заботиться о стареющих родителях против ответственности государства — на кого должно ложиться это бремя?",
                "sideA": "Семья",
                "sideB": "Государство",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Радикальная честность в отношениях против стратегического молчания — какой подход к близости более этичен?",
                "sideA": "Честность",
                "sideB": "Молчание",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Осознанный выбор социального круга против органического формирования отношений — что создает более подлинную дружбу?",
                "sideA": "Осознанный выбор",
                "sideB": "Органически",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Нуклеарная семья как оптимальная социальная единица против исторически обусловленного соглашения — какой взгляд более обоснован?",
                "sideA": "Оптимальная единица",
                "sideB": "Исторический факт",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Технократическое управление против демократического популизма — что представляет больший долгосрочный риск для граждан?",
                "sideA": "Технократия",
                "sideB": "Популизм",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Справедливость в отношениях между поколениями против текущего благосостояния — что должно быть в приоритете государственной политики?",
                "sideA": "Справедливость поколений",
                "sideB": "Текущее благо",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Обязанность голосовать против права воздержаться — какая гражданская позиция более оправдана?",
                "sideA": "Обязанность",
                "sideB": "Право воздержаться",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Патриотизм как гражданская добродетель против патриотизма как когнитивного искажения — какая позиция убедительнее?",
                "sideA": "Добродетель",
                "sideB": "Искажение",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Абсолютизм свободы слова против регулируемой речи — что дает лучшие результаты для демократического общества?",
                "sideA": "Абсолютизм",
                "sideB": "Регулирование",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Осмысленная карьера против работы, которая финансирует осмысленную частную жизнь — какая амбиция честнее?",
                "sideA": "Карьера",
                "sideB": "Частная жизнь",
                "level": "advanced",
                "theme": "organisational_culture_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Религия против светской философии — что эффективнее отвечает на экзистенциальные потребности современных взрослых?",
                "sideA": "Религия",
                "sideB": "Светская фил.",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Осознанная жизнь против поглощенности жизнью — какую жизнь больше стоит прожить и кто это решает?",
                "sideA": "Осознанность",
                "sideB": "Поглощенность",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Наследие против присутствия — к чему взрослому человеку логичнее стремиться?",
                "sideA": "Наследие",
                "sideB": "Присутствие",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Взрослый, который «наконец-то во всем разобрался», против взрослого, который принял, что никогда не разберется — кто более самоосознан?",
                "sideA": "Разобрался",
                "sideB": "Принял",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Рассказывать все своему психологу против того, чтобы рассказывать все своему парикмахеру — какие отношения эффективнее терапевтически?",
                "sideA": "Психолог",
                "sideB": "Парикмахер",
                "level": "advanced",
                "theme": "psychological_concepts_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Воскресная тревога взрослого с плотным графиком против тревоги человека с пустым графиком — что экзистенциально тревожнее?",
                "sideA": "Плотный график",
                "sideB": "Пустой график",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Долгие раздумья над каждым важным решением против импульсивности — какая стратегия имеет лучший результат?",
                "sideA": "Раздумья",
                "sideB": "Импульсивность",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Взрослые, читающие книги по саморазвитию, против тех, кто принципиально их не читает — с кем сложнее общаться на ужине?",
                "sideA": "Читатели",
                "sideB": "Противники",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Креативность ИИ против человеческого искусства — могут ли машины по-настоящему творить?",
                "sideA": "Креативность ИИ",
                "sideB": "Искусство",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Исследование космоса против исследования морских глубин — на чем стоит сосредоточить ресурсы?",
                "sideA": "Космос",
                "sideB": "Глубины моря",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Цифровая приватность против национальной безопасности — оправдана ли когда-либо тотальная слежка?",
                "sideA": "Приватность",
                "sideB": "Безопасность",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "ГМО против органического земледелия — как нам прокормить мир?",
                "sideA": "ГМО",
                "sideB": "Органика",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            },
            {
                "topic": "Безусловный базовый доход против программ гарантированной занятости — какая соцзащита лучше?",
                "sideA": "ББД",
                "sideB": "Гарантия работы",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Contro idea 1", "Contro idea 2"]
            }];
    const lang = "ru";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();