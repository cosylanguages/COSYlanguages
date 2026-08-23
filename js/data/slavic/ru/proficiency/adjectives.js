// TODO: verify level classification
(function() {
    const lang = "ru";
    const data = [
    {
        "id": "ru_proficiency_language_001",
        "word": "резкий",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Внезапный и неожиданный; грубый или резкий в манерах.",
                "examples": [
                    "Разговор подошел к резкому и неожиданному концу."
                ]
            }
        ],
        "emoji": "⏱️",
        "subtext": "резкий конец / резкая манера / резко остановился",
        "comparative": "более резкий",
        "superlative": "самый резкий",
        "synonyms": [
            "внезапный",
            "грубый"
        ],
        "antonyms": [
            "постепенный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_002",
        "word": "маловразумительный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Трудный для понимания; неясный или сложный.",
                "examples": [
                    "Статью критиковали за маловразумительные теоретические рамки."
                ]
            }
        ],
        "emoji": "🧐",
        "subtext": "крайне маловразумительный / довольно маловразумительный / маловразумительный аргумент",
        "comparative": "более маловразумительный",
        "superlative": "самый маловразумительный",
        "synonyms": [
            "неясный",
            "заумный"
        ],
        "antonyms": [
            "простой"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_social_001",
        "word": "анахроничный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Устаревший; принадлежащий к более раннему времени.",
                "examples": [
                    "Эта политика кажется совершенно анахроничной в современном контексте."
                ]
            }
        ],
        "emoji": "⌛",
        "subtext": "совершенно анахроничный / все более анахроничный / глубоко анахроничный",
        "comparative": "более анахроничный",
        "superlative": "самый анахроничный",
        "synonyms": [
            "устаревший",
            "архаичный"
        ],
        "antonyms": [
            "современный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_003",
        "word": "антитетический",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Прямо противоположный чему-либо.",
                "examples": [
                    "Его действия были антитетичны ценностям, которые он якобы защищал."
                ]
            }
        ],
        "emoji": "⚖️",
        "subtext": "прямо антитетический / совершенно антитетический / антитетичный чему-то",
        "comparative": "более антитетический",
        "superlative": "самый антитетический",
        "synonyms": [
            "противоположный",
            "обратный"
        ],
        "antonyms": [
            "тождественный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_004",
        "word": "арканный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Известный лишь немногим; таинственный и секретный.",
                "examples": [
                    "Процедура была излишне арканной и недоступной."
                ]
            }
        ],
        "emoji": "🔮",
        "subtext": "очень арканный / совершенно арканный / арканное знание",
        "comparative": "более арканный",
        "superlative": "самый арканный",
        "synonyms": [
            "таинственный",
            "тайный"
        ],
        "antonyms": [
            "общеизвестный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_005",
        "word": "атипичный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Нетипичный; не нормальный или не привычный.",
                "examples": [
                    "Это был атипичный случай, который не отражает норму."
                ]
            }
        ],
        "emoji": "🦄",
        "subtext": "очень атипичный / крайне атипичный / статистически атипичный",
        "comparative": "более атипичный",
        "superlative": "самый атипичный",
        "synonyms": [
            "необычный",
            "аномальный"
        ],
        "antonyms": [
            "типичный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_006",
        "word": "бинарный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Состоящий из двух частей; основанный на дихотомии.",
                "examples": [
                    "В ходе дебатов возникла ложная бинарная оппозиция между ростом и справедливостью."
                ]
            }
        ],
        "emoji": "🔢",
        "subtext": "ложная бинарная оппозиция / бинарный выбор / не чисто бинарный",
        "comparative": "более бинарный",
        "superlative": "самый бинарный",
        "synonyms": [
            "двойственный",
            "дуальный"
        ],
        "antonyms": [
            "единый"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_007",
        "word": "категоричный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Абсолютный; выраженный без каких-либо исключений или условий.",
                "examples": [
                    "Она дала категоричное опровержение обвинений."
                ]
            }
        ],
        "emoji": "❗",
        "subtext": "категоричное отрицание / категорически отказано / абсолютно категоричный",
        "comparative": "более категоричный",
        "superlative": "самый категоричный",
        "synonyms": [
            "абсолютный",
            "безусловный"
        ],
        "antonyms": [
            "условный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_social_002",
        "word": "осмотрительный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Осторожный, учитывающий все обстоятельства.",
                "examples": [
                    "Он был осмотрителен в своих публичных заявлениях."
                ]
            }
        ],
        "emoji": "🛡️",
        "subtext": "очень осмотрительный / крайне осмотрительный / оставаться осмотрительным",
        "comparative": "более осмотрительный",
        "superlative": "самый осмотрительный",
        "synonyms": [
            "осторожный",
            "бдительный"
        ],
        "antonyms": [
            "опрометчивый"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_social_003",
        "word": "скрытый",
        "lang": "ru",
        "level": "proficiency",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Тайный; не признаваемый открыто.",
                "examples": [
                    "Операция включала скрытое наблюдение за группой."
                ]
            }
        ],
        "emoji": "🕵️",
        "subtext": "полностью скрытый / скрытая операция / глубоко скрытый",
        "comparative": "более скрытый",
        "superlative": "самый скрытый",
        "synonyms": [
            "тайный",
            "негласный"
        ],
        "antonyms": [
            "открытый"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_008",
        "word": "диалектический",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Относящийся к логическому обсуждению идей через противоположности.",
                "examples": [
                    "В анализе повсеместно используется диалектический метод."
                ]
            }
        ],
        "emoji": "⚖️",
        "subtext": "диалектический подход / диалектическое напряжение / решено диалектически",
        "comparative": "более диалектический",
        "superlative": "самый диалектический",
        "synonyms": [
            "логический",
            "аналитический"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_009",
        "word": "диффузный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Распространенный на большой территории; не обладающий ясностью.",
                "examples": [
                    "Аргумент был слишком диффузным, чтобы произвести сильное впечатление."
                ]
            }
        ],
        "emoji": "🌫️",
        "subtext": "очень диффузный / довольно диффузный / диффузный ответ",
        "comparative": "более диффузный",
        "superlative": "самый диффузный",
        "synonyms": [
            "рассеянный",
            "расплывчатый"
        ],
        "antonyms": [
            "концентрированный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_010",
        "word": "неуловимый",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Трудный для нахождения, поимки или достижения.",
                "examples": [
                    "Истина в этом деле оказалась на редкость неуловимой."
                ]
            },
            {
                "text": "Трудный для осознания или запоминания.",
                "examples": [
                    "Четкий консенсус по-прежнему остается неуловимым."
                ]
            }
        ],
        "emoji": "🌬️",
        "subtext": "очень неуловимый / остается неуловимым / неуловимая цель / неуловимое качество",
        "comparative": "более неуловимый",
        "superlative": "самый неуловимый",
        "synonyms": [
            "ускользающий",
            "эфемерный"
        ],
        "antonyms": [
            "достижимый"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_011",
        "word": "эзотерический",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Понятный или предназначенный только для узкой группы людей.",
                "examples": [
                    "Дебаты стали слишком эзотерическими для широкой публики."
                ]
            }
        ],
        "emoji": "🗝️",
        "subtext": "очень эзотерический / довольно эзотерический / глубоко эзотерический",
        "comparative": "более эзотерический",
        "superlative": "самый эзотерический",
        "synonyms": [
            "арканный",
            "тайный"
        ],
        "antonyms": [
            "экзотерический"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_012",
        "word": "ошибочный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Основанный на ложных рассуждениях; вводящий в заблуждение.",
                "examples": [
                    "Ваш аргумент в основе своей ошибочен."
                ]
            }
        ],
        "emoji": "❌",
        "subtext": "глубоко ошибочный / логически ошибочный / ошибочное утверждение",
        "comparative": "более ошибочный",
        "superlative": "самый ошибочный",
        "synonyms": [
            "ложный",
            "неверный"
        ],
        "antonyms": [
            "обоснованный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_013",
        "word": "неизменный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не способный быть измененным; фиксированный и постоянный.",
                "examples": [
                    "Язык не является неизменным — он постоянно развивается."
                ]
            }
        ],
        "emoji": "🧱",
        "subtext": "совершенно неизменный / не неизменный / неизменный факт",
        "comparative": "более неизменный",
        "superlative": "самый неизменный",
        "synonyms": [
            "постоянный",
            "непреложный"
        ],
        "antonyms": [
            "изменчивый"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_social_004",
        "word": "беспристрастный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не отдающий предпочтения одной стороне; справедливый.",
                "examples": [
                    "Комиссия должна быть полностью беспристрастной в своем суждении."
                ]
            }
        ],
        "emoji": "⚖️",
        "subtext": "полностью беспристрастный / строго беспристрастный / беспристрастный наблюдатель",
        "comparative": "более беспристрастный",
        "superlative": "самый беспристрастный",
        "synonyms": [
            "справедливый",
            "нейтральный"
        ],
        "antonyms": [
            "предвзятый"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_014",
        "word": "побочный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Происходящий как незначительная часть чего-то другого.",
                "examples": [
                    "Экономия была скорее побочной, чем основной целью."
                ]
            }
        ],
        "emoji": "🍃",
        "subtext": "чисто побочный / просто побочный / побочный по отношению к",
        "comparative": "более побочный",
        "superlative": "самый побочный",
        "synonyms": [
            "второстепенный",
            "незначительный"
        ],
        "antonyms": [
            "центральный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_015",
        "word": "присущий",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Существующий в чем-то как естественное и постоянное качество.",
                "examples": [
                    "Система изначально порочна и нуждается в пересмотре."
                ]
            }
        ],
        "emoji": "⚛️",
        "subtext": "изначально порочный / изначально предвзятый / изначально проблематичный",
        "comparative": "более присущий",
        "superlative": "самый присущий",
        "synonyms": [
            "врожденный",
            "неотъемлемый"
        ],
        "antonyms": [
            "внешний"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_art_culture_001",
        "word": "неподражаемый",
        "lang": "ru",
        "level": "proficiency",
        "theme": "art_culture",
        "form": "adjective",
        "definitions": [
            {
                "text": "Настолько хороший или необычный, что его невозможно скопировать.",
                "examples": [
                    "У нее есть неподражаемая манера делать сложные идеи понятными."
                ]
            }
        ],
        "emoji": "🌟",
        "subtext": "поистине неподражаемый / абсолютно неподражаемый / неподражаемый стиль",
        "comparative": "более неподражаемый",
        "superlative": "самый неподражаемый",
        "synonyms": [
            "уникальный",
            "бесподобный"
        ],
        "antonyms": [
            "заурядный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_social_005",
        "word": "коварный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Постепенно развивающийся вредным образом.",
                "examples": [
                    "Последствия длительного стресса могут быть коварными."
                ]
            }
        ],
        "emoji": "🐍",
        "subtext": "очень коварный / глубоко коварный / коварный процесс",
        "comparative": "более коварный",
        "superlative": "самый коварный",
        "synonyms": [
            "хитрый",
            "скрытый"
        ],
        "antonyms": [
            "прямой"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_016",
        "word": "непримиримый",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не способный быть примиренным или сделанным совместимым.",
                "examples": [
                    "Две позиции принципиально непримиримы."
                ]
            }
        ],
        "emoji": "🚫",
        "subtext": "принципиально непримиримый / совершенно непримиримый / непримиримые разногласия",
        "comparative": "более непримиримый",
        "superlative": "самый непримиримый",
        "synonyms": [
            "несовместимый",
            "противоречивый"
        ],
        "antonyms": [
            "совместимый"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_017",
        "word": "лиминальный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Относящийся к переходному или промежуточному состоянию.",
                "examples": [
                    "Месяцы после увольнения — это поистине лиминальный период."
                ]
            }
        ],
        "emoji": "🚪",
        "subtext": "лиминальное пространство / лиминальная фаза / глубоко лиминальный",
        "comparative": "более лиминальный",
        "superlative": "самый лиминальный",
        "synonyms": [
            "переходный",
            "пограничный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_018",
        "word": "многообразный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Многочисленный и разнообразный.",
                "examples": [
                    "Последствия этого решения многообразны."
                ]
            }
        ],
        "emoji": "🔢",
        "subtext": "многообразные последствия / многообразные проблемы / многообразные вызовы",
        "comparative": "более многообразный",
        "superlative": "самый многообразный",
        "synonyms": [
            "многочисленный",
            "разнообразный"
        ],
        "antonyms": [
            "единичный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_019",
        "word": "туманный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Неясный; расплывчатый и плохо определенный.",
                "examples": [
                    "Концепция в отчете остается несколько туманной."
                ]
            }
        ],
        "emoji": "☁️",
        "subtext": "очень туманный / довольно туманный / опасно туманный",
        "comparative": "более туманный",
        "superlative": "самый туманный",
        "synonyms": [
            "неясный",
            "расплывчатый"
        ],
        "antonyms": [
            "отчетливый"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_social_006",
        "word": "нормативный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Относящийся к норме; предписывающий то, что должно быть.",
                "examples": [
                    "Это нормативное утверждение, а не описательное."
                ]
            }
        ],
        "emoji": "📏",
        "subtext": "нормативная база / нормативное допущение / нормативное утверждение",
        "comparative": "более нормативный",
        "superlative": "самый нормативный",
        "synonyms": [
            "прескриптивный",
            "узаконенный"
        ],
        "antonyms": [
            "дескриптивный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_020",
        "word": "нюансированный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Показывающий тонкие различия; не простой и не крайний.",
                "examples": [
                    "В отчете дается очень нюансированное описание проблемы."
                ]
            }
        ],
        "emoji": "🌗",
        "subtext": "очень нюансированный / крайне нюансированный / нюансированный аргумент",
        "comparative": "более нюансированный",
        "superlative": "самый нюансированный",
        "synonyms": [
            "тонкий",
            "утонченный"
        ],
        "antonyms": [
            "грубый"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_021",
        "word": "иносказательный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не прямой; косвенный; не прямолинейный или не открытый.",
                "examples": [
                    "Он дал иносказательный ответ, который никого не удовлетворил."
                ]
            }
        ],
        "emoji": "↗️",
        "subtext": "несколько иносказательный / очень иносказательный / иносказательная ссылка",
        "comparative": "более иносказательный",
        "superlative": "самый иносказательный",
        "synonyms": [
            "косвенный",
            "непрямой"
        ],
        "antonyms": [
            "прямой"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_022",
        "word": "непрозрачный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не прозрачный; трудный для понимания.",
                "examples": [
                    "Рассуждения правительства были совершенно непрозрачными."
                ]
            }
        ],
        "emoji": "🌑",
        "subtext": "очень непрозрачный / совершенно непрозрачный / глубоко непрозрачный",
        "comparative": "более непрозрачный",
        "superlative": "самый непрозрачный",
        "synonyms": [
            "неясный",
            "непонятный"
        ],
        "antonyms": [
            "прозрачный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_023",
        "word": "мнимый",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Кажущийся чем-то; заявленный как реальный или истинный.",
                "examples": [
                    "Мнимой целью была эффективность; реальной — контроль."
                ]
            }
        ],
        "emoji": "🎭",
        "subtext": "мнимая цель / мнимо правильный / мнимая мотивация",
        "comparative": "более мнимый",
        "superlative": "самый мнимый",
        "synonyms": [
            "кажущийся",
            "якобы"
        ],
        "antonyms": [
            "подлинный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_024",
        "word": "парадоксальный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Противоречащий самому себе, но содержащий истину.",
                "examples": [
                    "Парадоксально, что делая меньше, иногда можно достичь большего."
                ]
            }
        ],
        "emoji": "🔄",
        "subtext": "кажущийся парадоксальным / глубоко парадоксальный / парадоксальная ситуация",
        "comparative": "более парадоксальный",
        "superlative": "самый парадоксальный",
        "synonyms": [
            "противоречивый",
            "ироничный"
        ],
        "antonyms": [
            "последовательный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_social_007",
        "word": "всеобъемлющий",
        "lang": "ru",
        "level": "proficiency",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Присутствующий повсюду; широко распространенный.",
                "examples": [
                    "Культура переработок в этом секторе носит всеобъемлющий характер."
                ]
            }
        ],
        "emoji": "🌊",
        "subtext": "очень всеобъемлющий / все более всеобъемлющий / всеобъемлющий",
        "comparative": "более всеобъемлющий",
        "superlative": "самый всеобъемлющий",
        "synonyms": [
            "вездесущий",
            "превалирующий"
        ],
        "antonyms": [
            "редкий"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_social_008",
        "word": "поляризующий",
        "lang": "ru",
        "level": "proficiency",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Заставляющий людей занимать противоположные позиции.",
                "examples": [
                    "Предложение вызвало глубокую поляризацию внутри организации."
                ]
            }
        ],
        "emoji": "🧲",
        "subtext": "глубоко поляризующий / крайне поляризующий / весьма поляризующий",
        "comparative": "более поляризующий",
        "superlative": "самый поляризующий",
        "synonyms": [
            "разъединяющий",
            "спорный"
        ],
        "antonyms": [
            "объединяющий"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_025",
        "word": "шаткий",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не безопасный и не надежный; зависящий от случая.",
                "examples": [
                    "Она променяла шаткую жизнь фрилансера на стабильную должность."
                ]
            }
        ],
        "emoji": "🧗",
        "subtext": "очень шаткий / глубоко шаткий / шаткое положение",
        "comparative": "более шаткий",
        "superlative": "самый шаткий",
        "synonyms": [
            "ненадежный",
            "опасный"
        ],
        "antonyms": [
            "стабильный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_026",
        "word": "прескриптивный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Диктующий, что должно быть сделано; устанавливающий правила.",
                "examples": [
                    "Руководящие принципы слишком прескриптивны, чтобы допускать творчество."
                ]
            }
        ],
        "emoji": "📜",
        "subtext": "очень прескриптивный / крайне прескриптивный / чрезмерно прескриптивный",
        "comparative": "более прескриптивный",
        "superlative": "самый прескриптивный",
        "synonyms": [
            "предписывающий",
            "жесткий"
        ],
        "antonyms": [
            "дескриптивный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_social_009",
        "word": "затяжной",
        "lang": "ru",
        "level": "proficiency",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Длящийся дольше, чем ожидалось.",
                "examples": [
                    "Судебный спор был долгим и затяжным."
                ]
            }
        ],
        "emoji": "⌛",
        "subtext": "очень затяжной / крайне затяжной / затяжной процесс",
        "comparative": "более затяжной",
        "superlative": "самый затяжной",
        "synonyms": [
            "длительный",
            "продолжительный"
        ],
        "antonyms": [
            "краткий"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_027",
        "word": "редуктивный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Чрезмерно упрощающий что-то сложное.",
                "examples": [
                    "Было бы редуктивно объяснять все только жадностью."
                ]
            }
        ],
        "emoji": "📉",
        "subtext": "очень редуктивный / глубоко редуктивный / редуктивный анализ",
        "comparative": "более редуктивный",
        "superlative": "самый редуктивный",
        "synonyms": [
            "упрощенный",
            "минималистский"
        ],
        "antonyms": [
            "сложный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_social_010",
        "word": "основополагающий",
        "lang": "ru",
        "level": "proficiency",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Очень важный и влиятельный; оригинальный.",
                "examples": [
                    "Это был основополагающий момент в истории компании."
                ]
            }
        ],
        "emoji": "🌱",
        "subtext": "поистине основополагающий / основополагающая работа / основополагающая фигура",
        "comparative": "более основополагающий",
        "superlative": "самый основополагающий",
        "synonyms": [
            "влиятельный",
            "эпохальный"
        ],
        "antonyms": [
            "незначительный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_028",
        "word": "благовидный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Кажущийся правильным, но на самом деле ложный; вводящий в заблуждение.",
                "examples": [
                    "Аргумент внешне привлекателен, но в конечном итоге благовиден."
                ]
            }
        ],
        "emoji": "🤥",
        "subtext": "очень благовидный / благовидное утверждение / в основе своей благовидный",
        "comparative": "более благовидный",
        "superlative": "самый благовидный",
        "synonyms": [
            "вводящий в заблуждение",
            "ложный"
        ],
        "antonyms": [
            "обоснованный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_029",
        "word": "ложный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не настоящий; основанный на ложных рассуждениях.",
                "examples": [
                    "Это ложное сравнение, которое искажает дебаты."
                ]
            }
        ],
        "emoji": "🤡",
        "subtext": "совершенно ложный / полностью ложный / ложный аргумент",
        "comparative": "более ложный",
        "superlative": "самый ложный",
        "synonyms": [
            "фиктивный",
            "поддельный"
        ],
        "antonyms": [
            "подлинный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_social_011",
        "word": "подрывной",
        "lang": "ru",
        "level": "proficiency",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Направленный на подрыв устоявшейся системы.",
                "examples": [
                    "Власти сочли произведение искусства подрывным."
                ]
            }
        ],
        "emoji": "💣",
        "subtext": "тихо подрывной / глубоко подрывной / открыто подрывной",
        "comparative": "более подрывной",
        "superlative": "самый подрывной",
        "synonyms": [
            "бунтарский",
            "деструктивный"
        ],
        "antonyms": [
            "конформистский"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_030",
        "word": "негласный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Понятный или согласованный без слов.",
                "examples": [
                    "Между ними было негласное понимание."
                ]
            }
        ],
        "emoji": "🤫",
        "subtext": "негласное соглашение / негласное одобрение / оставаться негласным",
        "comparative": "более негласный",
        "superlative": "самый негласный",
        "synonyms": [
            "подразумеваемый",
            "молчаливый"
        ],
        "antonyms": [
            "явный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_031",
        "word": "слабый",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Очень слабый или незначительный; не установленный твердо.",
                "examples": [
                    "Связь между этими двумя событиями очень слабая."
                ]
            }
        ],
        "emoji": "🕸️",
        "subtext": "очень слабый / довольно слабый / слабая связь",
        "comparative": "более слабый",
        "superlative": "самый слабый",
        "synonyms": [
            "хрупкий",
            "тонкий"
        ],
        "antonyms": [
            "сильный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_time_001",
        "word": "преходящий",
        "lang": "ru",
        "level": "proficiency",
        "theme": "time",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не постоянный; быстро проходящий.",
                "examples": [
                    "Выгоды были преходящими и исчезли через несколько месяцев."
                ]
            }
        ],
        "emoji": "🌅",
        "subtext": "очень преходящий / просто преходящий / преходящий эффект",
        "comparative": "более преходящий",
        "superlative": "самый преходящий",
        "synonyms": [
            "временный",
            "мимолетный"
        ],
        "antonyms": [
            "постоянный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_social_012",
        "word": "вездесущий",
        "lang": "ru",
        "level": "proficiency",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Появляющийся повсюду; очень распространенный.",
                "examples": [
                    "Смартфоны стали вездесущими в повседневной жизни."
                ]
            }
        ],
        "emoji": "🌍",
        "subtext": "поистине вездесущий / казалось бы, вездесущий / стать вездесущим",
        "comparative": "более вездесущий",
        "superlative": "самый вездесущий",
        "synonyms": [
            "вездесущий",
            "всеобщий"
        ],
        "antonyms": [
            "редкий"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_032",
        "word": "недвусмысленный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не оставляющий сомнений; совершенно ясный.",
                "examples": [
                    "Его поддержка решения была недвусмысленной."
                ]
            }
        ],
        "emoji": "📢",
        "subtext": "совершенно недвусмысленный / абсолютно недвусмысленный / недвусмысленный отказ",
        "comparative": "более недвусмысленный",
        "superlative": "самый недвусмысленный",
        "synonyms": [
            "однозначный",
            "ясный"
        ],
        "antonyms": [
            "двусмысленный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_social_013",
        "word": "беспрецедентный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Никогда не случавшийся ранее.",
                "examples": [
                    "Компания достигла беспрецедентного роста за пять лет."
                ]
            }
        ],
        "emoji": "🚀",
        "subtext": "поистине беспрецедентный / совершенно беспрецедентный / беспрецедентное событие",
        "comparative": "более беспрецедентный",
        "superlative": "самый беспрецедентный",
        "synonyms": [
            "уникальный",
            "новаторский"
        ],
        "antonyms": [
            "обычный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_033",
        "word": "несостоятельный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Не способный быть сохраненным или защищенным.",
                "examples": [
                    "Его позиция стала совершенно несостоятельной."
                ]
            }
        ],
        "emoji": "🏗️",
        "subtext": "совершенно несостоятельный / полностью несостоятельный / несостоятельный аргумент",
        "comparative": "более несостоятельный",
        "superlative": "самый несостоятельный",
        "synonyms": [
            "незащищенный",
            "неоправданный"
        ],
        "antonyms": [
            "обоснованный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_034",
        "word": "громоздкий",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Трудный в обращении или управлении из-за размера или сложности.",
                "examples": [
                    "Процесс стал громоздким и неэффективным."
                ]
            }
        ],
        "emoji": "📦",
        "subtext": "очень громоздкий / довольно громоздкий / громоздкая система",
        "comparative": "более громоздкий",
        "superlative": "самый громоздкий",
        "synonyms": [
            "неповоротливый",
            "неудобный"
        ],
        "antonyms": [
            "удобный"
        ],
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_035",
        "word": "герменевтический",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Относящийся к интерпретации текстов или смысла.",
                "examples": [
                    "Он применил герменевтический подход к анализу политических речей."
                ]
            }
        ],
        "emoji": "📜",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_036",
        "word": "тавтологичный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Повторение одного и того же разными словами; порочный круг в рассуждении.",
                "examples": [
                    "Аргумент тавтологичен: он предполагает то, что пытается доказать."
                ]
            }
        ],
        "emoji": "🔄",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_037",
        "word": "полисемичный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Имеющий несколько значений.",
                "examples": [
                    "Слово 'свобода' глубоко полисемично в политическом дискурсе."
                ]
            }
        ],
        "emoji": "🔠",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_social_014",
        "word": "постколониальный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Относящийся к периоду после колониального господства или к критике колониального наследия.",
                "examples": [
                    "Постколониальная теория ставит под сомнение западные представления о прогрессе."
                ]
            }
        ],
        "emoji": "🌍",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_social_015",
        "word": "многополярный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Описывающий мировой порядок с несколькими центрами силы, а не с одним или двумя.",
                "examples": [
                    "Многополярный мир может быть более нестабильным, но более представительным."
                ]
            }
        ],
        "emoji": "🌐",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_social_016",
        "word": "космополитичный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Знакомый со многими странами и культурами и чувствующий себя в них как дома.",
                "examples": [
                    "Она придерживалась космополитичного взгляда на политические обязательства."
                ]
            }
        ],
        "emoji": "🏙️",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_psychology_001",
        "word": "нарциссический",
        "lang": "ru",
        "level": "proficiency",
        "theme": "psychology",
        "form": "adjective",
        "definitions": [
            {
                "text": "Имеющий чрезмерный интерес к самому себе, своей внешности или достижениям.",
                "examples": [
                    "Некоторые критики описывают культуру знаменитостей как нарциссическую."
                ]
            }
        ],
        "emoji": "🪞",
        "transcription": ""
    },
    {
        "id": "ru_proficiency_language_038",
        "word": "гетеродоксальный",
        "lang": "ru",
        "level": "proficiency",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Противоречащий установленным или принятым верованиям или доктринам.",
                "examples": [
                    "Ее гетеродоксальные экономические взгляды не были популярны в академической среде."
                ]
            }
        ],
        "emoji": "🚩",
        "transcription": ""
    }
];

    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data,
{
        "word": "герменевтический",
        "level": "proficiency",
        "theme": "philosophy_language",
        "emoji": "📜",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Относящийся к интерпретации текстов или смысла.",
                        "examples": [
                                "Он применил герменевтический подход к анализу политических речей."
                        ]
                }
        ]
},
{
        "word": "тавтологичный",
        "level": "proficiency",
        "theme": "meta_argument_deconstruction",
        "emoji": "🔄",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Повторение одного и того же разными словами; порочный круг в рассуждении.",
                        "examples": [
                                "Аргумент тавтологичен: он предполагает то, что пытается доказать."
                        ]
                }
        ]
},
{
        "word": "полисемичный",
        "level": "proficiency",
        "theme": "linguistics_theory",
        "emoji": "🔠",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Имеющий несколько значений.",
                        "examples": [
                                "Слово 'свобода' глубоко полисемично в политическом дискурсе."
                        ]
                }
        ]
},
{
        "word": "постколониальный",
        "level": "proficiency",
        "theme": "political_theory",
        "emoji": "🌍",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Относящийся к периоду после колониального господства или к критике колониального наследия.",
                        "examples": [
                                "Постколониальная теория ставит под сомнение западные представления о прогрессе."
                        ]
                }
        ]
},
{
        "word": "многополярный",
        "level": "proficiency",
        "theme": "political_theory",
        "emoji": "🌐",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Описывающий мировой порядок с несколькими центрами силы, а не с одним или двумя.",
                        "examples": [
                                "Многополярный мир может быть более нестабильным, но более представительным."
                        ]
                }
        ]
},
{
        "word": "космополитичный",
        "level": "proficiency",
        "theme": "political_theory",
        "emoji": "🏙️",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Знакомый со многими странами и культурами и чувствующий себя в них как дома.",
                        "examples": [
                                "Она придерживалась космополитичного взгляда на политические обязательства."
                        ]
                }
        ]
},
{
        "word": "нарциссический",
        "level": "proficiency",
        "theme": "psychoanalysis_unconscious",
        "emoji": "🪞",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Имеющий чрезмерный интерес к самому себе, своей внешности или достижениям.",
                        "examples": [
                                "Некоторые критики описывают культуру знаменитостей как нарциссическую."
                        ]
                }
        ]
},
{
        "word": "гетеродоксальный",
        "level": "proficiency",
        "theme": "meta_argument_deconstruction",
        "emoji": "🚩",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Противоречащий установленным или принятым верованиям или доктринам.",
                        "examples": [
                                "Ее гетеродоксальные экономические взгляды не были популярны в академической среде."
                        ]
                }
        ]
}
    ];

    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];

    if ("adjectivesData" !== "vocabularyData") {
        window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();