// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "реифицировать",
        "level": "proficiency",
        "theme": "philosophy_logic",
        "emoji": "🗿",
        "subtext": "реифицировать концепцию / реифицировать рынок / реификация труда",
        "form": "verb",
        "definitions": [
            {
                "text": "Рассматривать абстрактную идею как нечто материальное или конкретное; овеществлять.",
                "examples": [
                    "Экономические модели реифицируют рыночные силы, заставляя их казаться естественными."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "реифицировал",
        "v3": "реифицированный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "сублимировать",
        "level": "proficiency",
        "theme": "psychology_academic",
        "emoji": "🎭",
        "subtext": "сублимировать желание / сублимация импульса / перенаправлять в",
        "form": "verb",
        "definitions": [
            {
                "text": "Направлять импульсы или чувства в социально приемлемое или творческое русло.",
                "examples": [
                    "Он сублимировал свое политическое разочарование в академические труды."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "сублимировал",
        "v3": "сублимированный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "предицировать",
        "level": "proficiency",
        "theme": "logic_linguistics",
        "emoji": "🗣️",
        "subtext": "предицировать что-либо / основывать утверждение / базироваться на допущении",
        "form": "verb",
        "definitions": [
            {
                "text": "Утверждать что-либо о субъекте; или основывать утверждение на чем-либо.",
                "examples": [
                    "Ее аргумент предицирует уровень доверия, которого больше не существует."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "предицировал",
        "v3": "предицированный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "воплощать",
        "level": "proficiency",
        "theme": "logic_computing",
        "emoji": "📋",
        "subtext": "воплощать концепцию / инстанцировать на практике",
        "form": "verb",
        "definitions": [
            {
                "text": "Представлять или иллюстрировать что-то абстрактное на конкретном примере.",
                "examples": [
                    "Данное исследование воплощает теорию захвата регулятора."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "воплощал",
        "v3": "воплощенный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "отрицать",
        "level": "proficiency",
        "theme": "logic_debate",
        "emoji": "❌",
        "subtext": "отрицать аргумент / сводить на нет право / диалектическое отрицание",
        "form": "verb",
        "definitions": [
            {
                "text": "Делать недействительным или сводить к нулю.",
                "examples": [
                    "Новое условие фактически отрицает право, которое оно, казалось бы, предоставляет."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "отрицал",
        "v3": "отрицаемый",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "превосходить",
        "level": "proficiency",
        "theme": "philosophy_general",
        "emoji": "🌌",
        "subtext": "выходить за пределы / превосходить категории / выходить за рамки личного",
        "form": "verb",
        "definitions": [
            {
                "text": "Выходить за пределы или рамки чего-либо; трансцендировать.",
                "examples": [
                    "Великое искусство превосходит исторический момент своего создания."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "превосходил",
        "v3": "превосходимый",
        "group": "2nd_conj",
        "auxiliary": "быть"
    },
    {
        "word": "опосредовать",
        "level": "proficiency",
        "theme": "sociology_conflict",
        "emoji": "⚖️",
        "subtext": "опосредовать отношения / выступать посредником в конфликте / социально опосредованный",
        "form": "verb",
        "definitions": [
            {
                "text": "Вмешиваться, чтобы примирить стороны или служить связующим звеном.",
                "examples": [
                    "Язык опосредует наши отношения с внешним миром."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "опосредовал",
        "v3": "опосредованный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "опускать",
        "level": "proficiency",
        "theme": "linguistics_debate",
        "emoji": "✂️",
        "subtext": "опускать различие / элидировать разницу / намеренно опускать",
        "form": "verb",
        "definitions": [
            {
                "text": "Преднамеренно пропускать или игнорировать что-либо.",
                "examples": [
                    "В отчете опускается различие между бедностью и депривацией."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "опускал",
        "v3": "опущенный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "запутывать",
        "level": "proficiency",
        "theme": "debate_communication",
        "emoji": "🌫️",
        "subtext": "запутывать истину / преднамеренное запутывание / обфусцировать жаргоном",
        "form": "verb",
        "definitions": [
            {
                "text": "Делать что-либо неясным или трудным для понимания, часто намеренно.",
                "examples": [
                    "Технический язык, казалось, был разработан для того, чтобы запутать, а не прояснить."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "запутывал",
        "v3": "запутанный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "смешивать",
        "level": "proficiency",
        "theme": "debate_academic",
        "emoji": "🌀",
        "subtext": "смешивать понятия / объединять с / опасно смешивать",
        "form": "verb",
        "definitions": [
            {
                "text": "Объединять две или более идей в одну, часто ошибочно.",
                "examples": [
                    "В ходе дебатов смешиваются понятия нелегальной миграции и незаконной иммиграции."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "смешивал",
        "v3": "смешанный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "ссылаться",
        "level": "proficiency",
        "theme": "law_debate",
        "emoji": "📜",
        "subtext": "ссылаться на право / призывать прецедент / использовать аргумент",
        "form": "verb",
        "definitions": [
            {
                "text": "Цитировать или апеллировать к чему-либо как к авторитетному источнику.",
                "examples": [
                    "Она сослалась на право на свободу слова в свою защиту."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ссылался",
        "v3": "сосланный",
        "group": "1st_conj",
        "auxiliary": "быть",
        "reflexive": true
    },
    {
        "word": "выдвигать",
        "level": "proficiency",
        "theme": "art_media",
        "emoji": "🔦",
        "subtext": "выдвигать проблему на передний план / подчеркивать перспективу / намеренно выделять",
        "form": "verb",
        "definitions": [
            {
                "text": "Делать что-либо центром внимания.",
                "examples": [
                    "Фильм намеренно выдвигает расовый вопрос на передний план."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "выдвигал",
        "v3": "выдвинутый",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "апроприировать",
        "level": "proficiency",
        "theme": "sociology_culture",
        "emoji": "♻️",
        "subtext": "рекуперировать движение / быть апроприированным / культурная рекуперация",
        "form": "verb",
        "definitions": [
            {
                "text": "Включать что-либо (например, бунтарскую эстетику) в мейнстримную культуру.",
                "examples": [
                    "Индустрия моды апроприировала бунтарскую эстетику панка."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "апроприировал",
        "v3": "апроприированный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "дестабилизировать",
        "level": "proficiency",
        "theme": "politics_academic",
        "emoji": "⚖️",
        "subtext": "дестабилизировать режим / подрывать предпосылки / намеренно дестабилизировать",
        "form": "verb",
        "definitions": [
            {
                "text": "Делать что-либо нестабильным или нарушать равновесие.",
                "examples": [
                    "Доказательства дестабилизируют центральную предпосылку отчета."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "дестабилизировал",
        "v3": "дестабилизированный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "коммодифицировать",
        "level": "proficiency",
        "theme": "economics_sociology",
        "emoji": "💰",
        "subtext": "превращать труд в товар / коммодифицировать заботу / коммодификация внимания",
        "form": "verb",
        "definitions": [
            {
                "text": "Относиться к чему-либо как к коммерческому продукту, который можно купить и продать.",
                "examples": [
                    "Индустрия благополучия коммодифицирует психическое здоровье и заботу о себе."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "коммодифицировал",
        "v3": "коммодифицированный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "инструментализировать",
        "level": "proficiency",
        "theme": "politics_philosophy",
        "emoji": "🛠️",
        "subtext": "инструментализировать людей / использовать идею как инструмент",
        "form": "verb",
        "definitions": [
            {
                "text": "Использовать что-то или кого-то просто как средство для достижения цели.",
                "examples": [
                    "Критики утверждали, что политика инструментализировала благосостояние рабочих."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "инструментализировал",
        "v3": "инструментализированный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "валоризировать",
        "level": "proficiency",
        "theme": "sociology_academic",
        "emoji": "💎",
        "subtext": "валоризировать труд / придавать ценность концепции / валоризироваться культурой",
        "form": "verb",
        "definitions": [
            {
                "text": "Придавать большое значение или ценность чему-либо.",
                "examples": [
                    "Современная культура валоризирует продуктивность выше отдыха и покоя."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "валоризировал",
        "v3": "валоризированный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "фетишизировать",
        "level": "proficiency",
        "theme": "sociology_academic",
        "emoji": "🧿",
        "subtext": "фетишизировать идею / товарный фетишизм / фетишизировать рост",
        "form": "verb",
        "definitions": [
            {
                "text": "Проявлять чрезмерную или иррациональную приверженность чему-либо.",
                "examples": [
                    "Культура стартапов фетишизирует дескриптивность как самоцель."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "фетишизировал",
        "v3": "фетишизированный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "отчуждать",
        "level": "proficiency",
        "theme": "sociology_psychology",
        "emoji": "👽",
        "subtext": "отчуждать кого-либо / чувствовать себя отчужденным / отчуждение от труда",
        "form": "verb",
        "definitions": [
            {
                "text": "Заставлять кого-либо чувствовать себя изолированным от окружения или самого себя.",
                "examples": [
                    "Промышленные условия отчуждают рабочих от любого чувства мастерства."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "отчуждал",
        "v3": "отчужденный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "разграничивать",
        "level": "proficiency",
        "theme": "law_philosophy",
        "emoji": "🚧",
        "subtext": "разграничивать границу / четко демаркировать / демаркационная линия",
        "form": "verb",
        "definitions": [
            {
                "text": "Устанавливать границы чего-либо.",
                "examples": [
                    "Закон пытается разграничить линию между регулированием и цензурой."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "разграничивал",
        "v3": "разграниченный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "ограничивать",
        "level": "proficiency",
        "theme": "academic_research",
        "emoji": "📏",
        "subtext": "ограничивать рамки / делимитировать концепцию / тщательно ограниченный",
        "form": "verb",
        "definitions": [
            {
                "text": "Точно определять или устанавливать границы чего-либо.",
                "examples": [
                    "Исследование намеренно ограничивает свои рамки, чтобы избежать чрезмерного обобщения."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ограничивал",
        "v3": "ограниченный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "препятствовать",
        "level": "proficiency",
        "theme": "debate_academic",
        "emoji": "🛡️",
        "subtext": "действовать против / решительно препятствовать / свидетельствовать в пользу",
        "form": "verb",
        "definitions": [
            {
                "text": "(О факте или обстоятельстве) иметь вес или влияние против чего-либо.",
                "examples": [
                    "Сложность системы препятствует эффективному реформированию."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "препятствовал",
        "v3": "препятствующий",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "искажать",
        "level": "proficiency",
        "theme": "law_academic",
        "emoji": "☣️",
        "subtext": "лишать силы утверждение / портить аргумент / юридически недействительный",
        "form": "verb",
        "definitions": [
            {
                "text": "Делать что-либо неэффективным или недействительным; вицировать.",
                "examples": [
                    "Методологический изъян искажает основные выводы исследования."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "искажал",
        "v3": "искаженный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "оспаривать",
        "level": "proficiency",
        "theme": "debate_logic",
        "emoji": "🗣️",
        "subtext": "трудно оспорить / никто не может отрицать / оспаривать утверждение",
        "form": "verb",
        "definitions": [
            {
                "text": "Отрицать или противоречить чему-либо.",
                "examples": [
                    "Трудно оспорить доказательства, представленные в ходе расследования."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "оспаривал",
        "v3": "оспариваемый",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "аннулировать",
        "level": "proficiency",
        "theme": "law_politics",
        "emoji": "📜",
        "subtext": "аннулировать соглашение / отменять договор / одностороннее аннулирование",
        "form": "verb",
        "definitions": [
            {
                "text": "Официально отменять или объявлять недействительным закон или соглашение.",
                "examples": [
                    "Правительство стремилось аннулировать договор в одностороннем порядке."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "аннулировал",
        "v3": "аннулированный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "нарушать",
        "level": "proficiency",
        "theme": "law_debate",
        "emoji": "🚫",
        "subtext": "нарушать закон / противоречить правилам / нарушать соглашение",
        "form": "verb",
        "definitions": [
            {
                "text": "Действовать вопреки закону или правилу; контрвенировать.",
                "examples": [
                    "Было установлено, что решение нарушает антимонопольное законодательство ЕС."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "нарушал",
        "v3": "нарушенный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "включать",
        "level": "proficiency",
        "theme": "logic_philosophy",
        "emoji": "📂",
        "subtext": "субсумировать под / быть включенным в / относить к категории",
        "form": "verb",
        "definitions": [
            {
                "text": "Включать что-то в более широкую группу или категорию.",
                "examples": [
                    "Его теория включает все предыдущие концепции в единую структуру."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "включал",
        "v3": "включенный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "деконструировать",
        "level": "proficiency",
        "theme": "philosophy_literature",
        "emoji": "🧩",
        "subtext": "деконструировать аргумент / деконструировать текст / дерридианская деконструкция",
        "form": "verb",
        "definitions": [
            {
                "text": "Анализировать текст или аргумент, выявляя его внутренние противоречия и скрытые допущения.",
                "examples": [
                    "Она деконструировала политику, чтобы выявить ее идеологическую предвзятость."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "деконструировал",
        "v3": "деконструированный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "предотвращать",
        "level": "proficiency",
        "theme": "law_debate",
        "emoji": "🚪",
        "subtext": "исключать вариант / прекращать дебаты / исключать возможность",
        "form": "verb",
        "definitions": [
            {
                "text": "Заранее исключать или делать невозможным.",
                "examples": [
                    "Сама постановка вопроса предотвращает получение наиболее интересных ответов."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "предотвращал",
        "v3": "предотвращенный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "диалектизировать",
        "level": "proficiency",
        "theme": "philosophy_academic",
        "emoji": "☯️",
        "subtext": "диалектизировать бинарность / диалектический метод / тезис и антитезис",
        "form": "verb",
        "definitions": [
            {
                "text": "Рассматривать что-либо диалектически, учитывая взаимодействие противоположных сил.",
                "examples": [
                    "Он диалектизирует оппозицию между свободой и безопасностью."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "диалектизировал",
        "v3": "диалектизированный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "гегемонизировать",
        "level": "proficiency",
        "theme": "politics_sociology",
        "emoji": "👑",
        "subtext": "гегемонизировать дискурс / сопротивляться гегемонизации",
        "form": "verb",
        "definitions": [
            {
                "text": "Оказывать доминирующее влияние на область или дискурс.",
                "examples": [
                    "Одна теоретическая база стала гегемонизировать всю область."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "гегемонизировал",
        "v3": "гегемонизированный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "подчеркивать",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🔊",
        "subtext": "акцентировать различие / подчеркивать позитивное / усиливаться чем-либо",
        "form": "verb",
        "definitions": [
            {
                "text": "Делать что-либо более заметным или выраженным.",
                "examples": [
                    "Кризис подчеркнул существующее неравенство среди рабочей силы."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "подчеркивал",
        "v3": "подчеркнутый",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "соглашаться",
        "level": "proficiency",
        "theme": "debate_communication",
        "emoji": "🤝",
        "subtext": "согласиться с / уступить в / неохотное согласие",
        "form": "verb",
        "definitions": [
            {
                "text": "Принимать или соглашаться с чем-либо, часто молчаливо или пассивно.",
                "examples": [
                    "Он согласился с решением совета, несмотря на серьезные возражения."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "соглашался",
        "v3": "согласившийся",
        "group": "1st_conj",
        "auxiliary": "быть",
        "reflexive": true
    },
    {
        "word": "облегчать",
        "level": "proficiency",
        "theme": "policy_general",
        "emoji": "🩹",
        "subtext": "облегчать страдания / смягчать бедность / уменьшать давление",
        "form": "verb",
        "definitions": [
            {
                "text": "Делать проблему или симптом менее тяжелым.",
                "examples": [
                    "Новая политика мало что сделала для облегчения жилищного кризиса."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "облегчал",
        "v3": "облегченный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "обходить",
        "level": "proficiency",
        "theme": "debate_general",
        "emoji": "🏃",
        "subtext": "обходить правила / обходить проблему / обходить контроль",
        "form": "verb",
        "definitions": [
            {
                "text": "Умело избегать трудностей или препятствий.",
                "examples": [
                    "Она нашла законный способ обойти бюрократическое препятствие."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "обходил",
        "v3": "обходимый",
        "group": "2nd_conj",
        "auxiliary": "быть"
    },
    {
        "word": "подтверждать",
        "level": "proficiency",
        "theme": "academic_research",
        "emoji": "✅",
        "subtext": "подтверждать утверждение / подкреплять доказательства / подтверждаться чем-либо",
        "form": "verb",
        "definitions": [
            {
                "text": "Поддерживать теорию или заявление дополнительными доказательствами; корроборировать.",
                "examples": [
                    "Показания свидетеля полностью подтвердили документальные доказательства."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "подтверждал",
        "v3": "подтвержденный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "распространять",
        "level": "proficiency",
        "theme": "academic_research",
        "emoji": "📢",
        "subtext": "распространять информацию / диссеминировать результаты / широко распространенный",
        "form": "verb",
        "definitions": [
            {
                "text": "Широко распространять информацию или знания.",
                "examples": [
                    "Результаты были распространены через международные исследовательские сети."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "распространял",
        "v3": "распространенный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "инкапсулировать",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "💊",
        "subtext": "воплощать идею / резюмировать проблему / идеально инкапсулировать",
        "form": "verb",
        "definitions": [
            {
                "text": "Кратко выражать основные черты чего-либо.",
                "examples": [
                    "Фраза идеально инкапсулирует парадокс современной работы."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "инкапсулировал",
        "v3": "инкапсулированный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "порождать",
        "level": "proficiency",
        "theme": "sociology_general",
        "emoji": "🌱",
        "subtext": "порождать доверие / вызывать конфликт / порождать недовольство",
        "form": "verb",
        "definitions": [
            {
                "text": "Вызывать или давать начало чувству, ситуации или условию.",
                "examples": [
                    "Новая политика породила значительное недовольство среди сотрудников."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "порождал",
        "v3": "порожденный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "усугублять",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🔥",
        "subtext": "усугублять проблему / обострять напряженность / усугублять неравенство",
        "form": "verb",
        "definitions": [
            {
                "text": "Делать проблему или негативную ситуацию еще хуже.",
                "examples": [
                    "Экономический спад усугубил существующее социальное неравенство."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "усугублял",
        "v3": "усугубленный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "служить примером",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "📖",
        "subtext": "иллюстрировать что-либо / являться примером проблемы / наглядно иллюстрировать",
        "form": "verb",
        "definitions": [
            {
                "text": "Быть типичным примером чего-либо.",
                "examples": [
                    "Ее карьера служит примером трудностей, с которыми сталкиваются женщины на руководящих постах."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "служил примером",
        "v3": "служивший примером",
        "group": "2nd_conj",
        "auxiliary": "быть"
    },
    {
        "word": "препятствовать",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🚧",
        "subtext": "препятствовать прогрессу / сдерживать рост / мешать кому-либо делать",
        "form": "verb",
        "definitions": [
            {
                "text": "Затруднять или задерживать развитие чего-либо.",
                "examples": [
                    "Чрезмерное регулирование может препятствовать инновациям в новых отраслях."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "препятствовал",
        "v3": "препятствующий",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "смягчать",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🛡️",
        "subtext": "снижать риск / смягчать воздействие / митигировать",
        "form": "verb",
        "definitions": [
            {
                "text": "Делать что-либо менее суровым, серьезным или болезненным.",
                "examples": [
                    "Хорошая коммуникация может помочь смягчить последствия изменений."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "смягчал",
        "v3": "смягченный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "обязывать",
        "level": "proficiency",
        "theme": "law_general",
        "emoji": "⚖️",
        "subtext": "быть обязанным / обязывать кого-либо / чувствовать себя обязанным",
        "form": "verb",
        "definitions": [
            {
                "text": "Принуждать кого-либо к действию юридически или морально.",
                "examples": [
                    "Закон обязывает всех работодателей обеспечивать безопасные условия труда."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "обязывал",
        "v3": "обязанный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "пронизывать",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "💧",
        "subtext": "пронизывать организацию / быть пронизанным чем-либо / всепроникающий",
        "form": "verb",
        "definitions": [
            {
                "text": "Присутствовать во всех частях чего-либо.",
                "examples": [
                    "Культура переработок пронизывает сектор финансовых услуг."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "пронизывал",
        "v3": "пронизанный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "исключать",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🚫",
        "subtext": "отстранять кого-либо / исключать возможность / не исключать",
        "form": "verb",
        "definitions": [
            {
                "text": "Делать невозможным событие или участие кого-либо.",
                "examples": [
                    "Отсутствие соответствующего опыта исключило его из списка кандидатов."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "исключал",
        "v3": "исключенный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "согласовывать",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🤝",
        "subtext": "примирять идеи / трудно согласовать / улаживать разногласия",
        "form": "verb",
        "definitions": [
            {
                "text": "Находить способ сосуществования двух противоположных идей или ситуаций.",
                "examples": [
                    "Она сочла невозможным согласовать свои ценности с корпоративной культурой."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "согласовывал",
        "v3": "согласованный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "вытеснять",
        "level": "proficiency",
        "theme": "law_academic",
        "emoji": "🔄",
        "subtext": "отменять закон / заменять предыдущие правила / быть вытесненным чем-либо",
        "form": "verb",
        "definitions": [
            {
                "text": "Занимать место того, что использовалось ранее.",
                "examples": [
                    "Новые правила вытеснят все предыдущие версии."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "вытеснял",
        "v3": "вытесненный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "подкреплять",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "⚓",
        "subtext": "подкреплять аргумент / лежать в основе успеха / подкрепляться чем-либо",
        "form": "verb",
        "definitions": [
            {
                "text": "Служить основой или опорой для чего-либо.",
                "examples": [
                    "Крепкое доверие подкрепляет каждое успешное долгосрочное партнерство."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "подкреплял",
        "v3": "подкрепленный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "подтверждать правоту",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🏆",
        "subtext": "оправдывать кого-либо / подтверждать решение / чувствовать себя правым",
        "form": "verb",
        "definitions": [
            {
                "text": "Доказывать, что кто-то или что-то было верным или оправданным; виндицировать.",
                "examples": [
                    "Результаты подтвердили правоту ее спорного решения два года спустя."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "подтвердил правоту",
        "v3": "подтвердивший правоту",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "зависеть от",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "⛓️",
        "subtext": "зависеть от решения / зависеть от одного фактора / все зависит от",
        "form": "verb",
        "definitions": [
            {
                "text": "Определяться или обуславливаться чем-либо.",
                "examples": [
                    "Весь успех проекта зависит от одобрения клиента."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "зависел",
        "v3": "зависящий",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "бороться с",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🤼",
        "subtext": "пытаться решить проблему / бороться с последствиями / разбираться в сложности",
        "form": "verb",
        "definitions": [
            {
                "text": "Прилагать усилия, чтобы справиться с трудной проблемой или понять ее.",
                "examples": [
                    "Политики все еще борются с последствиями внедрения ИИ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "боролся",
        "v3": "боровшийся",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "замалчивать",
        "level": "proficiency",
        "theme": "debate_academic",
        "emoji": "🙈",
        "subtext": "сглаживать проблему / замалчивать детали / не замалчивать",
        "form": "verb",
        "definitions": [
            {
                "text": "Представлять что-либо как менее важное; игнорировать неприятные факты.",
                "examples": [
                    "В отчете замалчиваются наиболее спорные финансовые детали."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "замалчивал",
        "v3": "замалчиваемый",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "сглаживать",
        "level": "proficiency",
        "theme": "debate_politics",
        "emoji": "🩹",
        "subtext": "маскировать проблему / сглаживать противоречия / маскировать различия",
        "form": "verb",
        "definitions": [
            {
                "text": "Пытаться скрыть или игнорировать трудную ситуацию, чтобы она казалась лучше.",
                "examples": [
                    "Соглашение лишь сгладило глубокие структурные разногласия."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "сглаживал",
        "v3": "сглаженный",
        "group": "1st_conj",
        "auxiliary": "быть"
    },
    {
        "word": "смена парадигмы",
        "level": "proficiency",
        "theme": "academic_general",
        "emoji": "🔄",
        "subtext": "фундаментальное изменение подхода",
        "form": "verb",
        "definitions": [
            {
                "text": "Коренное изменение в подходе или базовых предположениях.",
                "examples": [
                    "Внедрение этой новой технологии представляет собой смену парадигмы в отрасли."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "сменил парадигму",
        "v3": "сменивший парадигму",
        "group": "1st_conj",
        "auxiliary": "быть"
    }
];
    const lang = "ru";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = (window.vocabularyData[lang] || []).concat(data);
})();