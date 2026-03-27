(function() {
    const data = [
    {
        "word": "красивый",
        "feminine": "красивая",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "emoji": "✨",
        "form": "adjective",
        "plural": "красивые",
        "gender": "он",
        "definitions": [
            {
                "text": "Приятный на вид, отличающийся красотой.",
                "examples": [
                    "Вид с вершины горы был абсолютно красивым."
                ]
            }
        ],
        "subtext": "очень красивый / красивый день / красивый вид",
        "comparative": "красивее",
        "superlative": "самый красивый",
        "opposite": "некрасивый"
    },
    {
        "word": "сильный",
        "feminine": "сильная",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "emoji": "💪",
        "form": "adjective",
        "plural": "сильные",
        "gender": "он",
        "definitions": [
            {
                "text": "Обладающий большой физической или моральной силой.",
                "examples": [
                    "Он сильный пловец и может легко переплыть озеро."
                ]
            }
        ],
        "subtext": "сильные мышцы / очень сильный / достаточно сильный",
        "comparative": "сильнее",
        "superlative": "самый сильный",
        "opposite": "слабый"
    },
    {
        "word": "блондин",
        "feminine": "блондинка",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "emoji": "👱",
        "form": "adjective",
        "plural": "блондины",
        "gender": "он",
        "definitions": [
            {
                "text": "Человек со светлыми волосами.",
                "examples": [
                    "У нее длинные светлые волосы и голубые глаза."
                ]
            }
        ],
        "subtext": "натуральный блондин / светлые волосы / светло-русый",
        "comparative": null,
        "superlative": null,
        "opposite": "брюнет"
    },
    {
        "word": "снежный",
        "feminine": "снежная",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "❄️",
        "form": "adjective",
        "plural": "снежные",
        "gender": "он",
        "definitions": [
            {
                "text": "Покрытый снегом или характеризующийся снегом.",
                "examples": [
                    "Это было снежное утро, поэтому дети пошли играть на улицу."
                ]
            }
        ],
        "subtext": "снежная погода / снежный день / холодно и снежно",
        "comparative": "более снежный",
        "superlative": "самый снежный",
        "opposite": "бесснежный"
    },
    {
        "word": "ветреный",
        "feminine": "ветреная",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "💨",
        "form": "adjective",
        "plural": "ветреные",
        "gender": "он",
        "definitions": [
            {
                "text": "С сильным ветром.",
                "examples": [
                    "Сегодня очень ветрено, поэтому будьте осторожны с зонтиком."
                ]
            }
        ],
        "subtext": "очень ветрено / ветреный день / холодно и ветрено",
        "comparative": "ветренее",
        "superlative": "самый ветреный",
        "opposite": "безветренный"
    },
    {
        "word": "облачный",
        "feminine": "облачная",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "☁️",
        "form": "adjective",
        "plural": "облачные",
        "gender": "он",
        "definitions": [
            {
                "text": "Покрытый облаками.",
                "examples": [
                    "Сейчас облачный день, но дождя может и не быть."
                ]
            }
        ],
        "subtext": "облачное небо / очень облачно / переменная облачность",
        "comparative": "более облачный",
        "superlative": "самый облачный",
        "opposite": "ясный"
    },
    {
        "word": "атлетичный",
        "feminine": "атлетичная",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🏃",
        "form": "adjective",
        "plural": "атлетичные",
        "gender": "он",
        "definitions": [
            {
                "text": "Имеющий телосложение атлета; крепкий.",
                "examples": [
                    "У него атлетичное телосложение, потому что он каждый день играет в футбол."
                ]
            }
        ],
        "subtext": "атлетичное телосложение / очень атлетичный / атлетические показатели",
        "comparative": "атлетичнее",
        "superlative": "самый атлетичный",
        "opposite": "ленивый"
    },
    {
        "word": "в форме",
        "feminine": "в форме",
        "level": "elementary",
        "theme": "exercise_fitness_A2",
        "emoji": "💪",
        "form": "adjective",
        "plural": "в форме",
        "gender": "он",
        "definitions": [
            {
                "text": "В хорошем физическом состоянии.",
                "examples": [
                    "Он поддерживает себя в форме, посещая спортзал три раза в неделю."
                ]
            }
        ],
        "subtext": "физически в форме / в отличной форме / оставаться в форме",
        "comparative": "в лучшей форме",
        "superlative": "в лучшей форме",
        "opposite": "не в форме"
    },
    {
        "word": "с лишним весом",
        "feminine": "с лишним весом",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "⚖️",
        "form": "adjective",
        "plural": "с лишним весом",
        "gender": "он",
        "definitions": [
            {
                "text": "Весящий больше, чем считается здоровым.",
                "examples": [
                    "Врач сказал ему, что у него небольшой лишний вес."
                ]
            }
        ],
        "subtext": "небольшой лишний вес / набрать лишний вес / клиническое ожирение",
        "comparative": "с большим весом",
        "superlative": "с наибольшим весом",
        "opposite": "худой"
    },
    {
        "word": "удобный",
        "feminine": "удобная",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "👌",
        "form": "adjective",
        "plural": "удобные",
        "gender": "он",
        "definitions": [
            {
                "text": "Легкий в использовании или удачно расположенный.",
                "examples": [
                    "Офис находится в удобном месте рядом со станцией."
                ]
            }
        ],
        "subtext": "очень удобно / удачно расположен / удобное время",
        "comparative": "удобнее",
        "superlative": "самый удобный",
        "opposite": "неудобный"
    },
    {
        "word": "стрессовый",
        "feminine": "стрессовая",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "😫",
        "form": "adjective",
        "plural": "стрессовые",
        "gender": "он",
        "definitions": [
            {
                "text": "Вызывающий беспокойство или тревогу.",
                "examples": [
                    "Его работа очень стрессовая."
                ]
            }
        ],
        "subtext": "стрессовая работа / очень стрессовый / стрессовая ситуация",
        "comparative": "более стрессовый",
        "superlative": "самый стрессовый",
        "opposite": "спокойный"
    },
    {
        "word": "комфортный",
        "feminine": "комфортная",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🛋️",
        "form": "adjective",
        "plural": "комфортные",
        "gender": "он",
        "definitions": [
            {
                "text": "Обеспечивающий физический покой и удобство.",
                "examples": [
                    "Новые кресла гораздо более комфортные."
                ]
            }
        ],
        "subtext": "очень комфортно / удобно с / чувствовать себя комфортно",
        "comparative": "комфортнее",
        "superlative": "самый комфортный",
        "opposite": "неудобный"
    },
    {
        "word": "практичный",
        "feminine": "практичная",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🛠️",
        "form": "adjective",
        "plural": "практичные",
        "gender": "он",
        "definitions": [
            {
                "text": "Полезный в реальных ситуациях; разумный.",
                "examples": [
                    "Она дала очень практичный совет."
                ]
            }
        ],
        "subtext": "очень практично / крайне практично / практичное решение",
        "comparative": "практичнее",
        "superlative": "самый практичный",
        "opposite": "непрактичный"
    },
    {
        "word": "популярный",
        "feminine": "популярная",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "🌟",
        "form": "adjective",
        "plural": "популярные",
        "gender": "он",
        "definitions": [
            {
                "text": "Пользующийся широкой известностью, любимый многими.",
                "examples": [
                    "Этот ресторан очень популярный."
                ]
            }
        ],
        "subtext": "очень популярный / популярный выбор / популярный человек",
        "comparative": "популярнее",
        "superlative": "самый популярный",
        "opposite": "непопулярный"
    },
    {
        "word": "занятой",
        "feminine": "занятая",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏃",
        "form": "adjective",
        "plural": "занятые",
        "gender": "он",
        "definitions": [
            {
                "text": "Имеющий много работы или дел.",
                "examples": [
                    "У нее плотный график на этой неделе с тремя визитами к клиентам."
                ]
            }
        ],
        "subtext": "очень занят / загруженный день / слишком занят, чтобы говорить",
        "comparative": "более занятой",
        "superlative": "самый занятой",
        "opposite": "свободный"
    },
    {
        "word": "гибкий",
        "feminine": "гибкая",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🧘",
        "form": "adjective",
        "plural": "гибкие",
        "gender": "он",
        "definitions": [
            {
                "text": "Способный легко меняться и адаптироваться к различным ситуациям.",
                "examples": [
                    "Компания предлагает гибкий график работы."
                ]
            }
        ],
        "subtext": "гибкий график / гибкий подход / очень гибкий",
        "comparative": "гибче",
        "superlative": "самый гибкий",
        "opposite": "жесткий"
    },
    {
        "word": "организованный",
        "feminine": "организованная",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📁",
        "form": "adjective",
        "plural": "организованные",
        "gender": "он",
        "definitions": [
            {
                "text": "Способный планировать и вести дела упорядоченно.",
                "examples": [
                    "Нужно быть очень организованным, чтобы соблюдать все сроки."
                ]
            }
        ],
        "subtext": "хорошо организован / высоко организован / оставаться организованным",
        "comparative": "более организованный",
        "superlative": "самый организованный",
        "opposite": "неорганизованный"
    },
    {
        "word": "профессиональный",
        "feminine": "профессиональная",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👔",
        "form": "adjective",
        "plural": "профессиональные",
        "gender": "он",
        "definitions": [
            {
                "text": "Действующий умело и подобающим для работы образом.",
                "examples": [
                    "Она всегда выглядит очень профессионально на встречах."
                ]
            }
        ],
        "subtext": "профессиональный совет / очень профессионально / высокопрофессиональный",
        "comparative": "более профессиональный",
        "superlative": "самый профессиональный",
        "opposite": "любительский"
    },
    {
        "word": "ответственный",
        "feminine": "ответственная",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🛡️",
        "form": "adjective",
        "plural": "ответственные",
        "gender": "он",
        "definitions": [
            {
                "text": "Имеющий обязанность заниматься чем-либо; надежный.",
                "examples": [
                    "Он отвечает за весь маркетинговый бюджет."
                ]
            }
        ],
        "subtext": "ответственный за / очень ответственный / высокоответственный",
        "comparative": "более ответственный",
        "superlative": "самый ответственный",
        "opposite": "безответственный"
    },
    {
        "word": "опытный",
        "feminine": "опытная",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🎓",
        "form": "adjective",
        "plural": "опытные",
        "gender": "он",
        "definitions": [
            {
                "text": "Имеющий знания и навыки, полученные на практике.",
                "examples": [
                    "Компании нужен опытный менеджер проектов."
                ]
            }
        ],
        "subtext": "очень опытный / опытный в / достаточно опытный",
        "comparative": "более опытный",
        "superlative": "самый опытный",
        "opposite": "неопытный"
    },
    {
        "word": "квалифицированный",
        "feminine": "квалифицированная",
        "level": "elementary",
        "theme": "qualifications_exams_A2",
        "emoji": "✅",
        "form": "adjective",
        "plural": "квалифицированные",
        "gender": "он",
        "definitions": [
            {
                "text": "Имеющий необходимые навыки или подготовку.",
                "examples": [
                    "Она полностью квалифицирована, чтобы возглавить команду."
                ]
            }
        ],
        "subtext": "высококвалифицированный / хорошо подготовленный / полностью квалифицированный",
        "comparative": "более квалифицированный",
        "superlative": "самый квалифицированный",
        "opposite": "неквалифицированный"
    },
    {
        "word": "доступный",
        "feminine": "доступная",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🙋",
        "form": "adjective",
        "plural": "доступные",
        "gender": "он",
        "definitions": [
            {
                "text": "Свободный; такой, которым можно воспользоваться или с которым можно связаться.",
                "examples": [
                    "Свободен ли менеджер для встречи в три часа?"
                ]
            }
        ],
        "subtext": "широко доступен / в свободном доступе / доступен для",
        "comparative": "доступнее",
        "superlative": "самый доступный",
        "opposite": "недоступный"
    },
    {
        "word": "успешный",
        "feminine": "успешная",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏆",
        "form": "adjective",
        "plural": "успешные",
        "gender": "он",
        "definitions": [
            {
                "text": "Добившийся желаемого результата.",
                "examples": [
                    "У нее был очень успешный первый год на этой должности."
                ]
            }
        ],
        "subtext": "очень успешный / успешная карьера / весьма успешный",
        "comparative": "успешнее",
        "superlative": "самый успешный",
        "opposite": "неудачный"
    },
    {
        "word": "амбициозный",
        "feminine": "амбициозная",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🚀",
        "form": "adjective",
        "plural": "амбициозные",
        "gender": "он",
        "definitions": [
            {
                "text": "Имеющий сильное желание добиться успеха.",
                "examples": [
                    "Он очень амбициозен и хочет стать директором к сорока годам."
                ]
            }
        ],
        "subtext": "очень амбициозный / чрезвычайно амбициозный / амбициозный план",
        "comparative": "более амбициозный",
        "superlative": "самый амбициозный",
        "opposite": "безынициативный"
    },
    {
        "word": "творческий",
        "feminine": "творческая",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🎨",
        "form": "adjective",
        "plural": "творческие",
        "gender": "он",
        "definitions": [
            {
                "text": "Способный создавать новые и оригинальные идеи.",
                "examples": [
                    "Команда дизайнеров очень творческая и трудолюбивая."
                ]
            }
        ],
        "subtext": "очень творческий / творческое мышление / творческое решение",
        "comparative": "более творческий",
        "superlative": "самый творческий",
        "opposite": "нетворческий"
    },
    {
        "word": "продуктивный",
        "feminine": "продуктивная",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⚙️",
        "form": "adjective",
        "plural": "продуктивные",
        "gender": "он",
        "definitions": [
            {
                "text": "Делающий или производящий много полезной работы.",
                "examples": [
                    "Она наиболее продуктивна в ранние утренние часы."
                ]
            }
        ],
        "subtext": "очень продуктивный / высокопродуктивный / продуктивная встреча",
        "comparative": "продуктивнее",
        "superlative": "самый продуктивный",
        "opposite": "непродуктивный"
    },
    {
        "word": "надежный",
        "feminine": "надежная",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🤝",
        "form": "adjective",
        "plural": "надежные",
        "gender": "он",
        "definitions": [
            {
                "text": "Всегда хороший; такой, которому можно доверять.",
                "examples": [
                    "Он самый надежный человек в команде."
                ]
            }
        ],
        "subtext": "очень надежный / высоконадежный / надежный источник",
        "comparative": "надежнее",
        "superlative": "самый надежный",
        "opposite": "ненадежный"
    },
    {
        "word": "независимый",
        "feminine": "независимая",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🦅",
        "form": "adjective",
        "plural": "независимые",
        "gender": "он",
        "definitions": [
            {
                "text": "Не нуждающийся в помощи или поддержке других.",
                "examples": [
                    "Она очень независима и сама справляется со своей нагрузкой."
                ]
            }
        ],
        "subtext": "финансово независимый / очень независимый / независимый отчет",
        "comparative": "независимее",
        "superlative": "самый независимый",
        "opposite": "зависимый"
    },
    {
        "word": "дешевый",
        "feminine": "дешевая",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🏷️",
        "form": "adjective",
        "plural": "дешевые",
        "gender": "он",
        "definitions": [
            {
                "text": "Низкий по цене; недорогой.",
                "examples": [
                    "Это решение намного дешевле, чем нанимать дополнительный персонал."
                ]
            }
        ],
        "subtext": "очень дешево / дешевый вариант / дешево и просто",
        "comparative": "дешевле",
        "superlative": "самый дешевый",
        "opposite": "дорогой"
    },
    {
        "word": "дорогой",
        "feminine": "дорогая",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💎",
        "form": "adjective",
        "plural": "дорогие",
        "gender": "он",
        "definitions": [
            {
                "text": "Высокий по цене; стоящий много.",
                "examples": [
                    "Офисное помещение в центре города стоит чрезвычайно дорого."
                ]
            }
        ],
        "subtext": "очень дорого / дорогой вкус / слишком дорого",
        "comparative": "дороже",
        "superlative": "самый дорогой",
        "opposite": "дешевый"
    },
    {
        "word": "доступный по цене",
        "feminine": "доступная по цене",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💵",
        "form": "adjective",
        "plural": "доступные по цене",
        "gender": "он",
        "definitions": [
            {
                "text": "В пределах финансовых возможностей большинства людей.",
                "examples": [
                    "Они ищут доступные офисные помещения."
                ]
            }
        ],
        "subtext": "доступная цена / более доступный / доступный вариант",
        "comparative": "более доступный по цене",
        "superlative": "самый доступный по цене",
        "opposite": "дорогой"
    },
    {
        "word": "стоящий",
        "feminine": "стоящая",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💰",
        "form": "adjective",
        "plural": "стоящие",
        "gender": "он",
        "definitions": [
            {
                "text": "Имеющий равную ценность или заслуживающий.",
                "examples": [
                    "Инвестиция стоит каждого потраченного цента."
                ]
            }
        ],
        "subtext": "стоит денег / стоит сделать / стоит рассмотреть",
        "comparative": null,
        "superlative": null,
        "opposite": "бесполезный"
    },
    {
        "word": "бесплатный",
        "feminine": "бесплатная",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🎁",
        "form": "adjective",
        "plural": "бесплатные",
        "gender": "он",
        "definitions": [
            {
                "text": "Не стоящий никаких денег.",
                "examples": [
                    "Парковка бесплатна для всех сотрудников."
                ]
            }
        ],
        "subtext": "бесплатно / совершенно бесплатно / бесплатная пробная версия",
        "comparative": null,
        "superlative": null,
        "opposite": "платный"
    },
    {
        "word": "на мели",
        "feminine": "на мели",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📉",
        "form": "adjective",
        "plural": "на мели",
        "gender": "он",
        "definitions": [
            {
                "text": "Совсем не имеющий денег; разг.",
                "examples": [
                    "Он потратил слишком много и остался совершенно на мели."
                ]
            }
        ],
        "subtext": "совсем без денег / остаться на мели / обанкротиться",
        "comparative": null,
        "superlative": null,
        "opposite": "богатый"
    },
    {
        "word": "богатый",
        "feminine": "богатая",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🏦",
        "form": "adjective",
        "plural": "богатые",
        "gender": "он",
        "definitions": [
            {
                "text": "Имеющий много денег.",
                "examples": [
                    "Она стала очень богатой после продажи своей компании."
                ]
            }
        ],
        "subtext": "очень богатый / достаточно богатый / сказочно богатый",
        "comparative": "богаче",
        "superlative": "самый богатый",
        "opposite": "бедный"
    },
    {
        "word": "бедный",
        "feminine": "бедная",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🏚️",
        "form": "adjective",
        "plural": "бедные",
        "gender": "он",
        "definitions": [
            {
                "text": "Имеющий очень мало денег.",
                "examples": [
                    "Компания начинала как очень бедная и сама себя построила."
                ]
            }
        ],
        "subtext": "очень бедный / плохое качество / крайне бедный",
        "comparative": "беднее",
        "superlative": "самый бедный",
        "opposite": "богатый"
    },
    {
        "word": "здоровый",
        "feminine": "здоровая",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🍎",
        "form": "adjective",
        "plural": "здоровые",
        "gender": "он",
        "definitions": [
            {
                "text": "В добром здравии; полезный для здоровья.",
                "examples": [
                    "Она ведет здоровый образ жизни вне работы."
                ]
            }
        ],
        "subtext": "здоровое питание / очень здоровый / оставаться здоровым",
        "comparative": "здоровее",
        "superlative": "самый здоровый",
        "opposite": "больной"
    },
    {
        "word": "нездоровый",
        "feminine": "нездоровая",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🍔",
        "form": "adjective",
        "plural": "нездоровые",
        "gender": "он",
        "definitions": [
            {
                "text": "Не полезный для вашего здоровья.",
                "examples": [
                    "Сидеть за столом весь день вредно для здоровья."
                ]
            }
        ],
        "subtext": "очень вредно / нездоровые привычки / крайне нездоровый",
        "comparative": "нездоровее",
        "superlative": "самый нездоровый",
        "opposite": "здоровый"
    },
    {
        "word": "больной",
        "feminine": "больная",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🤒",
        "form": "adjective",
        "plural": "больные",
        "gender": "он",
        "definitions": [
            {
                "text": "Нездоровый; страдающий от болезни.",
                "examples": [
                    "Она больна и работает из дома на этой неделе."
                ]
            }
        ],
        "subtext": "серьезно болен / заболеть / чувствовать себя больным",
        "comparative": null,
        "superlative": null,
        "opposite": "здоровый"
    },
    {
        "word": "больной",
        "feminine": "больная",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🤢",
        "form": "adjective",
        "plural": "больные",
        "gender": "он",
        "definitions": [
            {
                "text": "Плохо себя чувствующий физически; испытывающий тошноту.",
                "examples": [
                    "В понедельник утром он сказался больным."
                ]
            }
        ],
        "subtext": "чувствовать тошноту / сказаться больным / очень болен",
        "comparative": null,
        "superlative": null,
        "opposite": "здоровый"
    },
    {
        "word": "уставший",
        "feminine": "уставшая",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "😴",
        "form": "adjective",
        "plural": "уставшие",
        "gender": "он",
        "definitions": [
            {
                "text": "Испытывающий потребность в отдыхе.",
                "examples": [
                    "Я чувствую себя очень уставшим после долгой деловой поездки."
                ]
            }
        ],
        "subtext": "чувствовать усталость / измотанный и уставший / слишком устал",
        "comparative": "более уставший",
        "superlative": "самый уставший",
        "opposite": "бодрый"
    },
    {
        "word": "напряженный",
        "feminine": "напряженная",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "😫",
        "form": "adjective",
        "plural": "напряженные",
        "gender": "он",
        "definitions": [
            {
                "text": "Чувствующий беспокойство и напряжение.",
                "examples": [
                    "Она чувствует напряжение из-за предстоящей презентации."
                ]
            }
        ],
        "subtext": "чувствовать стресс / очень напряжен / в сильном стрессе",
        "comparative": "более напряженный",
        "superlative": "самый напряженный",
        "opposite": "спокойный"
    },
    {
        "word": "дружелюбный",
        "feminine": "дружелюбная",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👋",
        "form": "adjective",
        "plural": "дружелюбные",
        "gender": "он",
        "definitions": [
            {
                "text": "Добрый, приятный и легкий в общении.",
                "examples": [
                    "Весь персонал в этом офисе очень дружелюбный."
                ]
            }
        ],
        "subtext": "очень дружелюбный / дружелюбная атмосфера / достаточно дружелюбный",
        "comparative": "дружелюбнее",
        "superlative": "самый дружелюбный",
        "opposite": "недружелюбный"
    },
    {
        "word": "добрый",
        "feminine": "добрая",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "❤️",
        "form": "adjective",
        "plural": "добрые",
        "gender": "он",
        "definitions": [
            {
                "text": "Щедрый и заботливый по отношению к другим.",
                "examples": [
                    "Она добра ко всем, даже под давлением."
                ]
            }
        ],
        "subtext": "очень добрый / любезно с вашей стороны / добрый жест",
        "comparative": "добрее",
        "superlative": "самый добрый",
        "opposite": "злой"
    },
    {
        "word": "честный",
        "feminine": "честная",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "⚖️",
        "form": "adjective",
        "plural": "честные",
        "gender": "он",
        "definitions": [
            {
                "text": "Говорящий правду; не обманывающий людей.",
                "examples": [
                    "Он совершенно честен с клиентами и коллегами."
                ]
            }
        ],
        "subtext": "предельно честный / очень честный / абсолютно честный",
        "comparative": "честнее",
        "superlative": "самый честный",
        "opposite": "лживый"
    },
    {
        "word": "терпеливый",
        "feminine": "терпеливая",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "⏳",
        "form": "adjective",
        "plural": "терпеливые",
        "gender": "он",
        "definitions": [
            {
                "text": "Способный ждать без жалоб.",
                "examples": [
                    "Хороший тренер должен быть чрезвычайно терпеливым."
                ]
            }
        ],
        "subtext": "очень терпеливый / терпелив с / невероятно терпеливый",
        "comparative": "терпеливее",
        "superlative": "самый терпеливый",
        "opposite": "нетерпеливый"
    },
    {
        "word": "вежливый",
        "feminine": "вежливая",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🙇",
        "form": "adjective",
        "plural": "вежливые",
        "gender": "он",
        "definitions": [
            {
                "text": "Ведущий себя учтиво и с уважением.",
                "examples": [
                    "Она всегда вежлива, даже в трудных разговорах."
                ]
            }
        ],
        "subtext": "очень вежливый / вежливо отказаться / быть вежливым",
        "comparative": "вежливее",
        "superlative": "самый вежливый",
        "opposite": "грубый"
    },
    {
        "word": "поддерживающий",
        "feminine": "поддерживающая",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🤝",
        "form": "adjective",
        "plural": "поддерживающие",
        "gender": "он",
        "definitions": [
            {
                "text": "Оказывающий помощь и поощрение.",
                "examples": [
                    "Ее менеджер очень поддерживает в загруженные периоды."
                ]
            }
        ],
        "subtext": "очень отзывчивый / поддерживающая команда / оказывать поддержку",
        "comparative": "более поддерживающий",
        "superlative": "самый поддерживающий",
        "opposite": "безучастный"
    },
    {
        "word": "уверенный",
        "feminine": "уверенная",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "✨",
        "form": "adjective",
        "plural": "уверенные",
        "gender": "он",
        "definitions": [
            {
                "text": "Уверенный в собственных способностях.",
                "examples": [
                    "Он выступает с уверенностью и очень уверен в себе."
                ]
            }
        ],
        "subtext": "уверенный в себе / очень уверенный / чувствовать уверенность",
        "comparative": "увереннее",
        "superlative": "самый уверенный",
        "opposite": "неуверенный"
    },
    {
        "word": "общительный",
        "feminine": "общительная",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🗣️",
        "form": "adjective",
        "plural": "общительные",
        "gender": "он",
        "definitions": [
            {
                "text": "Любящий проводить время с другими людьми.",
                "examples": [
                    "Она очень общительна и всех знает."
                ]
            }
        ],
        "subtext": "очень общительный / общительный от природы / общительный человек",
        "comparative": "общительнее",
        "superlative": "самый общительный",
        "opposite": "замкнутый"
    },
    {
        "word": "современный",
        "feminine": "современная",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🏙️",
        "form": "adjective",
        "plural": "современные",
        "gender": "он",
        "definitions": [
            {
                "text": "Созданный для настоящего времени; актуальный.",
                "examples": [
                    "Компания переехала в современный офис открытого типа."
                ]
            }
        ],
        "subtext": "очень современный / современный дизайн / ультрасовременный",
        "comparative": "современнее",
        "superlative": "самый современный",
        "opposite": "старый"
    },
    {
        "word": "традиционный",
        "feminine": "традиционная",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🏛️",
        "form": "adjective",
        "plural": "традиционные",
        "gender": "он",
        "definitions": [
            {
                "text": "Следующий установленным обычаям или путям.",
                "examples": [
                    "У компании традиционная структура управления."
                ]
            }
        ],
        "subtext": "очень традиционный / традиционный подход / глубоко традиционный",
        "comparative": "традиционнее",
        "superlative": "самый традиционный",
        "opposite": "современный"
    },
    {
        "word": "местный",
        "feminine": "местная",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "📍",
        "form": "adjective",
        "plural": "местные",
        "gender": "он",
        "definitions": [
            {
                "text": "Относящийся к близлежащей местности.",
                "examples": [
                    "Она предпочитает использовать местных поставщиков."
                ]
            }
        ],
        "subtext": "местный район / местный бизнес / местная проблема",
        "comparative": null,
        "superlative": null,
        "opposite": "международный"
    },
    {
        "word": "международный",
        "feminine": "международная",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🌎",
        "form": "adjective",
        "plural": "международные",
        "gender": "он",
        "definitions": [
            {
                "text": "Затрагивающий более чем одну страну.",
                "examples": [
                    "Компания работает с международными клиентами."
                ]
            }
        ],
        "subtext": "международный бизнес / полностью международный / международная команда",
        "comparative": null,
        "superlative": null,
        "opposite": "местный"
    },
    {
        "word": "интересный",
        "feminine": "интересная",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "💡",
        "form": "adjective",
        "plural": "интересные",
        "gender": "он",
        "definitions": [
            {
                "text": "Привлекающий внимание; заслуживающий внимания.",
                "examples": [
                    "Сессия конференции по ИИ была очень интересной."
                ]
            }
        ],
        "subtext": "очень интересно / находить интересным / интересный момент",
        "comparative": "интереснее",
        "superlative": "самый интересный",
        "opposite": "скучный"
    },
    {
        "word": "скучный",
        "feminine": "скучная",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "💤",
        "form": "adjective",
        "plural": "скучные",
        "gender": "он",
        "definitions": [
            {
                "text": "Неинтересный; занудный.",
                "examples": [
                    "Тренинг по комплаенсу был очень скучным."
                ]
            }
        ],
        "subtext": "очень скучно / скучное собрание / находить скучным",
        "comparative": "скучнее",
        "superlative": "самый скучный",
        "opposite": "интересный"
    },
    {
        "word": "странный",
        "feminine": "странная",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "❓",
        "form": "adjective",
        "plural": "странные",
        "gender": "он",
        "definitions": [
            {
                "text": "Необычный или удивительный так, что это трудно понять.",
                "examples": [
                    "Электронное письмо от клиента звучало очень странно."
                ]
            }
        ],
        "subtext": "очень странно / странное чувство / находить странным",
        "comparative": "страннее",
        "superlative": "самый странный",
        "opposite": "нормальный"
    },
    {
        "word": "нормальный",
        "feminine": "нормальная",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "✅",
        "form": "adjective",
        "plural": "нормальные",
        "gender": "он",
        "definitions": [
            {
                "text": "Типичный или обычный; то, что вы ожидаете.",
                "examples": [
                    "Это нормально — нервничать перед большой презентацией."
                ]
            }
        ],
        "subtext": "совершенно нормально / абсолютно нормально / чувствовать себя нормально",
        "comparative": "нормальнее",
        "superlative": "самый нормальный",
        "opposite": "странный"
    },
    {
        "word": "типичный",
        "feminine": "типичная",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🔄",
        "form": "adjective",
        "plural": "типичные",
        "gender": "он",
        "definitions": [
            {
                "text": "Имеющий обычные качества типа человека или вещи.",
                "examples": [
                    "Это типичная проблема в крупных организациях."
                ]
            }
        ],
        "subtext": "очень типично / типичный день / типично для",
        "comparative": "типичнее",
        "superlative": "самый типичный",
        "opposite": "нетипичный"
    },
    {
        "word": "обычный",
        "feminine": "обычная",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "📍",
        "form": "adjective",
        "plural": "обычные",
        "gender": "он",
        "definitions": [
            {
                "text": "Происходящий часто; встречающийся во многих местах.",
                "examples": [
                    "Выгорание — обычная проблема в этой отрасли."
                ]
            }
        ],
        "subtext": "очень распространено / общая проблема / здравый смысл",
        "comparative": "обычнее",
        "superlative": "самый обычный",
        "opposite": "редкий"
    },
    {
        "word": "редкий",
        "feminine": "редкая",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "💎",
        "form": "adjective",
        "plural": "редкие",
        "gender": "он",
        "definitions": [
            {
                "text": "Происходящий нечасто; не встречающийся во многих местах.",
                "examples": [
                    "По-настоящему поддерживающий менеджер — редкость."
                ]
            }
        ],
        "subtext": "очень редко / редкая возможность / редкое событие",
        "comparative": "реже",
        "superlative": "самый редкий",
        "opposite": "частый"
    },
    {
        "word": "уверенный",
        "feminine": "уверенная",
        "level": "elementary",
        "theme": "comparison_A2",
        "emoji": "🎯",
        "form": "adjective",
        "plural": "уверенные",
        "gender": "он",
        "definitions": [
            {
                "text": "Определенный; без всяких сомнений.",
                "examples": [
                    "Она уверена, что сделала правильный выбор."
                ]
            }
        ],
        "subtext": "абсолютно уверен / быть уверенным / чувствовать уверенность",
        "comparative": "увереннее",
        "superlative": "самый уверенный",
        "opposite": "неуверенный"
    },
    {
        "word": "ясный",
        "feminine": "ясная",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🔍",
        "form": "adjective",
        "plural": "ясные",
        "gender": "он",
        "definitions": [
            {
                "text": "Легкий для понимания; без путаницы.",
                "examples": [
                    "Инструкции очень ясные."
                ]
            }
        ],
        "subtext": "предельно ясно / очень ясно / прояснить",
        "comparative": "яснее",
        "superlative": "самый ясный",
        "opposite": "непонятный"
    },
    {
        "word": "трудный",
        "feminine": "трудная",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🧩",
        "form": "adjective",
        "plural": "трудные",
        "gender": "он",
        "definitions": [
            {
                "text": "Нелегкий; требующий усилий или навыков.",
                "examples": [
                    "Переговоры были очень трудными."
                ]
            }
        ],
        "subtext": "очень трудно / находить трудным / трудно понять",
        "comparative": "труднее",
        "superlative": "самый трудный",
        "opposite": "легкий"
    },
    {
        "word": "простой",
        "feminine": "простая",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "💡",
        "form": "adjective",
        "plural": "простые",
        "gender": "он",
        "definitions": [
            {
                "text": "Легкий для понимания или выполнения; не сложный.",
                "examples": [
                    "Решение на самом деле очень простое."
                ]
            }
        ],
        "subtext": "очень просто / достаточно просто / будь проще",
        "comparative": "проще",
        "superlative": "самый простой",
        "opposite": "сложный"
    },
    {
        "word": "сложный",
        "feminine": "сложная",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🕸️",
        "form": "adjective",
        "plural": "сложные",
        "gender": "он",
        "definitions": [
            {
                "text": "Включающий много частей; не легкий для понимания.",
                "examples": [
                    "Контракт очень сложный."
                ]
            }
        ],
        "subtext": "очень сложно / усложняется / слишком сложный",
        "comparative": "сложнее",
        "superlative": "самый сложный",
        "opposite": "простой"
    },
    {
        "word": "серьезный",
        "feminine": "серьезная",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "👔",
        "form": "adjective",
        "plural": "серьезные",
        "gender": "он",
        "definitions": [
            {
                "text": "Важный; требующий тщательного обдумывания.",
                "examples": [
                    "Это серьезная проблема, которая требует внимания."
                ]
            }
        ],
        "subtext": "очень серьезно / смертельно серьезно / серьезный вопрос",
        "comparative": "серьезнее",
        "superlative": "самый серьезный",
        "opposite": "смешной"
    },
    {
        "word": "смешной",
        "feminine": "смешная",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "😂",
        "form": "adjective",
        "plural": "смешные",
        "gender": "он",
        "definitions": [
            {
                "text": "Заставляющий вас смеяться; юмористический.",
                "examples": [
                    "Клиент поделился смешной историей, чтобы разрядить обстановку."
                ]
            }
        ],
        "subtext": "очень смешно / смешная ситуация / находить смешным",
        "comparative": "смешнее",
        "superlative": "самый смешной",
        "opposite": "серьезный"
    },
    {
        "word": "прямой",
        "feminine": "прямая",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "➡️",
        "form": "adjective",
        "plural": "прямые",
        "gender": "он",
        "definitions": [
            {
                "text": "Идущий прямо к сути; не косвенный.",
                "examples": [
                    "Он очень прямолинеен и говорит именно то, что думает."
                ]
            }
        ],
        "subtext": "очень прямолинейно / прямой подход / прямой вопрос",
        "comparative": "прямее",
        "superlative": "самый прямой",
        "opposite": "косвенный"
    },
    {
        "word": "ежедневный",
        "feminine": "ежедневная",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "📅",
        "form": "adjective",
        "plural": "ежедневные",
        "gender": "он",
        "definitions": [
            {
                "text": "Происходящий каждый день.",
                "examples": [
                    "У нее ежедневная поездка на работу занимает сорок пять минут."
                ]
            }
        ],
        "subtext": "ежедневная рутина / на ежедневной основе / ежедневный отчет",
        "comparative": null,
        "superlative": null,
        "opposite": "ежемесячный"
    },
    {
        "word": "регулярный",
        "feminine": "регулярная",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🔁",
        "form": "adjective",
        "plural": "регулярные",
        "gender": "он",
        "definitions": [
            {
                "text": "Происходящий в фиксированное время или интервалы.",
                "examples": [
                    "У них регулярные встречи команды по понедельникам."
                ]
            }
        ],
        "subtext": "очень регулярно / на регулярной основе / постоянный клиент",
        "comparative": "регулярнее",
        "superlative": "самый регулярный",
        "opposite": "нерегулярный"
    },
    {
        "word": "недавний",
        "feminine": "недавняя",
        "level": "elementary",
        "theme": "past_time_A2",
        "emoji": "🕒",
        "form": "adjective",
        "plural": "недавние",
        "gender": "он",
        "definitions": [
            {
                "text": "Произошедший не так давно.",
                "examples": [
                    "Вы видели недавние изменения в политике?"
                ]
            }
        ],
        "subtext": "самый недавний / совсем недавний / последние новости",
        "comparative": null,
        "superlative": null,
        "opposite": "давний"
    },
    {
        "word": "текущий",
        "feminine": "текущая",
        "level": "elementary",
        "theme": "sequence_order_A2",
        "emoji": "📍",
        "form": "adjective",
        "plural": "текущие",
        "gender": "он",
        "definitions": [
            {
                "text": "Происходящий или существующий сейчас.",
                "examples": [
                    "Какова ваша текущая зарплата?"
                ]
            }
        ],
        "subtext": "текущая ситуация / текущий работодатель / в настоящее время",
        "comparative": null,
        "superlative": null,
        "opposite": "предыдущий"
    },
    {
        "word": "будущий",
        "feminine": "будущая",
        "level": "elementary",
        "theme": "future_time_A2",
        "emoji": "🔮",
        "form": "adjective",
        "plural": "будущие",
        "gender": "он",
        "definitions": [
            {
                "text": "Еще не произошедший; относящийся к более позднему времени.",
                "examples": [
                    "Каковы ваши будущие планы на карьеру?"
                ]
            }
        ],
        "subtext": "планы на будущее / в будущем / будущий работодатель",
        "comparative": null,
        "superlative": null,
        "opposite": "прошлый"
    },
    {
        "word": "предыдущий",
        "feminine": "предыдущая",
        "level": "elementary",
        "theme": "past_time_A2",
        "emoji": "⬅️",
        "form": "adjective",
        "plural": "предыдущие",
        "gender": "он",
        "definitions": [
            {
                "text": "Произошедший или существовавший до настоящего момента.",
                "examples": [
                    "Она упомянула своего предыдущего работодателя в интервью."
                ]
            }
        ],
        "subtext": "предыдущая работа / прошлый работодатель / предыдущий опыт",
        "comparative": null,
        "superlative": null,
        "opposite": "следующий"
    }
];
    const lang = "ru";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();