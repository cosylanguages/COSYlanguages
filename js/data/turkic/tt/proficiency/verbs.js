(function() {
    const lang = "tt";
    const data = [
        {
            "word": "реификацияләргә",
            "level": "proficiency",
            "theme": "philosophy_logic",
            "emoji": "🗿",
            "subtext": "концепцияне реификацияләү / базарны реификацияләү / хезмәтне реификацияләү",
            "form": "verb",
            "definitions": [
                {
                    "text": "Абстракт идеяне матди яки конкрет нәрсә буларак карау; әйберләштерү.",
                    "examples": [
                        "Икътисади модельләр базар көчләрен реификациялиләр, аларны табигый итеп күрсәтәләр."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "реификацияләде",
            "v3": "реификацияләнгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "сублимацияләргә",
            "level": "proficiency",
            "theme": "psychology_academic",
            "emoji": "🎭",
            "subtext": "теләкне сублимацияләү / импульс сублимациясе / юнәлтү",
            "form": "verb",
            "definitions": [
                {
                    "text": "Импульсларны яки хисләрне социаль яктан кабул ителгән яки иҗади юнәлешкә юнәлтү.",
                    "examples": [
                        "Ул үзенең политик канәгатьсезлеген академик язуга сублимацияләде."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "сублимацияләде",
            "v3": "сублимацияләнгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "предицировать итәргә",
            "level": "proficiency",
            "theme": "logic_linguistics",
            "emoji": "🗣️",
            "subtext": "предицировать итү / раслауга нигезләнү / фаразга нигезләнгән",
            "form": "verb",
            "definitions": [
                {
                    "text": "Субъект турында берәр нәрсә раслау; яки раслауны берәр нәрсәгә нигезләү.",
                    "examples": [
                        "Аның аргументы хәзер юкка чыккан ышаныч дәрәҗәсен предицировать итә."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "предицировать итте",
            "v3": "предицировать ителгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "гәүдәләндерергә",
            "level": "proficiency",
            "theme": "logic_computing",
            "emoji": "📋",
            "subtext": "концепцияне гәүдәләндерү / практикада инстанцияләү",
            "form": "verb",
            "definitions": [
                {
                    "text": "Абстракт нәрсәне конкрет үрнәк аша күрсәтү яки сурәтләү.",
                    "examples": [
                        "Бу очрак регуляторны кулга төшерү теориясен гәүдәләндерә."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "гәүдәләндерде",
            "v3": "гәүдәләндерелгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "инкарь итәргә",
            "level": "proficiency",
            "theme": "logic_debate",
            "emoji": "❌",
            "subtext": "аргументны инкарь итү / хокукны юкка чыгару / диалектик инкарь итү",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәнедер дөрес түгел дип тану яки юкка чыгару.",
                    "examples": [
                        "Яңа пункт ул биргән кебек күренгән хокукны эффектив рәвештә инкарь итә."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "инкарь итте",
            "v3": "инкарь ителгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "чиктән узгарга",
            "level": "proficiency",
            "theme": "philosophy_general",
            "emoji": "🌌",
            "subtext": "чикләрне узу / категорияләрне узу / шәхси чиктән узу",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәдән дә булса өстен булу яки аның чикләреннән тыш чыгу (transcend).",
                    "examples": [
                        "Бөек сәнгать аны тудыруның тарихи мизгеленнән өстен чыга."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "both",
            "v2": "чиктән узды",
            "v3": "чиктән узган",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "арадашчы булырга",
            "level": "proficiency",
            "theme": "sociology_conflict",
            "emoji": "⚖️",
            "subtext": "арадашчы булу / конфликтта арадашчылык итү / социаль арадашчылык",
            "form": "verb",
            "definitions": [
                {
                    "text": "Ике ячны килештерү яки бәйләү өчен катнашу (mediate).",
                    "examples": [
                        "Тел безнең тышкы дөнья белән мөнәсәбәтләребезгә арадашчылык итә."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "арадашчы булды",
            "v3": "арадашчы булган",
            "group": "regular",
            "auxiliary": "булырга"
        },
        {
            "word": "төшереп калдырырга",
            "level": "proficiency",
            "theme": "linguistics_debate",
            "emoji": "✂️",
            "subtext": "аерманы төшереп калдыру / элидировать итү / белә торып калдыру",
            "form": "verb",
            "definitions": [
                {
                    "text": "Белә торып нәрсәнедер үткәреп җибәрү яки игътибарсыз калдыру.",
                    "examples": [
                        "Доклад ярлылык һәм мохтаҗлык арасындагы аерманы төшереп калдыра."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "төшереп калдырды",
            "v3": "төшереп калдырылган",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "бутарга",
            "level": "proficiency",
            "theme": "debate_communication",
            "emoji": "🌫️",
            "subtext": "хәкыйкатьне бутау / белә торып бутау / жаргон белән бутау",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәнедер аңлаешсыз яки аңлау өчен кыен итү, еш кына белә торып (obfuscate).",
                    "examples": [
                        "Техник тел ачыклау өчен түгел, ә бутау өчен эшләнгән кебек иде."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "бутады",
            "v3": "буталган",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "кушып бутарга",
            "level": "proficiency",
            "theme": "debate_academic",
            "emoji": "🌀",
            "subtext": "мәсьәләләрне кушып бутау / кушу / куркыныч рәвештә бутау",
            "form": "verb",
            "definitions": [
                {
                    "text": "Ике яки күбрәк идеяне бергә кушу, еш кына хаталы рәвештә (conflate).",
                    "examples": [
                        "Дебатларда тәртипсез миграция белән законсыз иммиграция кушып бутала."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "кушып бутады",
            "v3": "кушып буталган",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "мөрәҗәгать итәргә",
            "level": "proficiency",
            "theme": "law_debate",
            "emoji": "📜",
            "subtext": "хокукка мөрәҗәгать итү / прецедентка таяну / аргумент куллану",
            "form": "verb",
            "definitions": [
                {
                    "text": "Берәр эш өчен авторитет буларак нәрсәнедер китерү яки аңа таяну (invoke).",
                    "examples": [
                        "Ул үзенең яклавында сүз иреге хокукына мөрәҗәгать итте."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "мөрәҗәгать итте",
            "v3": "мөрәҗәгать ителгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "алгы планга чыгарырга",
            "level": "proficiency",
            "theme": "art_media",
            "emoji": "🔦",
            "subtext": "мәсьәләне алгы планга чыгару / перспективаны ассызыклау / белә торып аеру",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәнедер игътибар үзәгенә кую (foreground).",
                    "examples": [
                        "Фильм раса мәсьәләсен белә торып алгы планга чыгара."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "алгы планга чыгарды",
            "v3": "алгы планга чыгарылган",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "үзләштерергә",
            "level": "proficiency",
            "theme": "sociology_culture",
            "emoji": "♻️",
            "subtext": "хәрәкәтне үзләштерү / үзләштерелгән булу / мәдәни рекуперация",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәнедер (мәсәлән, фетнәче эстетикасын) мейнстрим мәдәниятенә кертү (recuperate).",
                    "examples": [
                        "Мода индустриясе панкның фетнәче эстетикасын үзләштерде."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "үзләштерде",
            "v3": "үзләштерелгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "дестабилизацияләргә",
            "level": "proficiency",
            "theme": "politics_academic",
            "emoji": "⚖️",
            "subtext": "режимны дестабилизацияләү / фаразларны какшату / белә торып дестабилизацияләү",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәнедер тотрыксыз итү яки тигезлеген бозу.",
                    "examples": [
                        "Длилләр докладның үзәк фаразын дестабилизациялиләр."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "дестабилизацияләде",
            "v3": "дестабилизацияләнгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "товарлаштырырга",
            "level": "proficiency",
            "theme": "economics_sociology",
            "emoji": "💰",
            "subtext": "хезмәтне товарлаштыру / кайгыртуны товарлаштыру / игътибар товарлашуы",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәгәдер сатып алырга һәм сатырга мөмкин булган коммерция продукты кебек карау (commodify).",
                    "examples": [
                        "Сәламәтлек индустриясе психик сәламәтлекне һәм үз-үзеңне кайгыртуны товарлаштыра."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "товарлаштырды",
            "v3": "товарлаштырылган",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "инструментальләштерергә",
            "level": "proficiency",
            "theme": "politics_philosophy",
            "emoji": "🛠️",
            "subtext": "кешеләрне инструментальләштерү / идеяне корал итеп куллану",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәнедер яки кемнедер максатка ирешү өчен корал буларак куллану.",
                    "examples": [
                        "Тәнкыйтьчеләр бу политика эшчеләрнең иминлеген инструментальләштерә дип бәхәсләштеләр."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "инструментальләштерде",
            "v3": "инструментальләштерелгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "валоризацияләргә",
            "level": "proficiency",
            "theme": "sociology_academic",
            "emoji": "💎",
            "subtext": "хезмәтне валоризацияләү / концепциягә кыйммәт бирү / мәдәният тарафыннан валоризацияләнү",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәгәдер зур кыйммәт яки әһәмият бирү (valorise).",
                    "examples": [
                        "Заманча мәдәният хезмәтне ялдан һәм тынычлыктан югарырак куя."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "валоризацияләде",
            "v3": "валоризацияләнгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "фетишизацияләргә",
            "level": "proficiency",
            "theme": "sociology_academic",
            "emoji": "🧿",
            "subtext": "идеяне фетишизацияләү / товар фетишизмы / үсешне фетишизацияләү",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәгәдер карата чиктән тыш яки иррациональ бирелгәнлек күрсәтү.",
                    "examples": [
                        "Стартап мәдәнияте үзгәрешне үз максаты итеп фетишизацияли."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "фетишизацияләде",
            "v3": "фетишизацияләнгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "ятлаштырырга",
            "level": "proficiency",
            "theme": "sociology_psychology",
            "emoji": "👽",
            "subtext": "кемнедер ятлаштыру / ятлашу хис итү / хезмәттән ятлашу",
            "form": "verb",
            "definitions": [
                {
                    "text": "Кемнедер үз тирәлегеннән яки үз-үзеннән читләштерергә мәҗбүр итү (alienate).",
                    "examples": [
                        "Индустриаль шартлар эшчеләрне осталык хисеннән ятлаштыра."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "ятлаштырды",
            "v3": "ятлаштырылган",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "чикләрен билгеләргә",
            "level": "proficiency",
            "theme": "law_philosophy",
            "emoji": "🚧",
            "subtext": "чикне билгеләү / ачык демаркацияләү / демаркация сызыгы",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәнеңдер чикләрен урнаштыру (demarcate).",
                    "examples": [
                        "Закон көйләү белән цензура арасындагы чикне билгеләргә омтыла."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "чикләрен билгеләде",
            "v3": "чикләре билгеләнгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "чикләргә",
            "level": "proficiency",
            "theme": "academic_research",
            "emoji": "📏",
            "subtext": "колачны чикләү / концепцияне чикләү / җитди чикләнгән",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәнеңдер чикләрен төгәл билгеләү (delimit).",
                    "examples": [
                        "Тикшеренү артык гомумиләштерүдән качу өчен үз колачын белә торып чикли."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "чикләде",
            "v3": "чикләнгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "каршы торырга",
            "level": "proficiency",
            "theme": "debate_academic",
            "emoji": "🛡️",
            "subtext": "каршы тору / каты каршы тору / файдасына булу",
            "form": "verb",
            "definitions": [
                {
                    "text": "(Факт яки хәл турында) нәрсәгәдер каршы йогынты ясау (militate).",
                    "examples": [
                        "Системаның катлаулылыгы эффектив реформага каршы тора."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "stative",
            "v2": "каршы торды",
            "v3": "каршы торган",
            "group": "regular",
            "auxiliary": "булырга"
        },
        {
            "word": "бозарга",
            "level": "proficiency",
            "theme": "law_academic",
            "emoji": "☤",
            "subtext": "раслауны бозу / аргументны бозу / юридик яктан бозылган",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәнедер нәтиҗәсез яки дөрес түгел итү (vitiate).",
                    "examples": [
                        "Методологик хата тикшеренүнең үзәк нәтиҗәләрен боза."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "бозды",
            "v3": "бозылган",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "кире кагарга",
            "level": "proficiency",
            "theme": "debate_logic",
            "emoji": "🗣️",
            "subtext": "кире кагу кыен / беркем дә кире кага алмый / раслауны кире кагу",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәгәдер каршы килү яки инкарь итү (gainsay).",
                    "examples": [
                        "Тикшерү тәкъдим иткән дәлилләрне кире кагу кыен."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "кире какты",
            "v3": "кире кагылган",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "юкка чыгарырга",
            "level": "proficiency",
            "theme": "law_politics",
            "emoji": "📜",
            "subtext": "килешүне юкка чыгару / договорны юкка чыгару / бер яклы юкка чыгару",
            "form": "verb",
            "definitions": [
                {
                    "text": "Законны яки рәсми килешүне рәсми рәвештә туктату (abrogate).",
                    "examples": [
                        "Хөкүмәт килешүне бер яклы рәвештә юкка чыгарырга омтылды."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "юкка чыгарды",
            "v3": "юкка чыгарылган",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "бозарга",
            "level": "proficiency",
            "theme": "law_debate",
            "emoji": "🚫",
            "subtext": "законны бозу / кагыйдәләргә каршы килү / килешүне бозу",
            "form": "verb",
            "definitions": [
                {
                    "text": "Закон яки кагыйдә билгеләгәнчә эшләмәү (contravene).",
                    "examples": [
                        "Чишелеш ЕО конкуренция законын боза дип табылды."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "бозды",
            "v3": "бозылган",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "кертергә",
            "level": "proficiency",
            "theme": "logic_philosophy",
            "emoji": "📂",
            "subtext": "астына кертү / кертелгән булу / категориягә кертү",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәнедер киңрәк төркем яки категория өлеше итеп кертү (subsume).",
                    "examples": [
                        "Аның теориясе барлык элеккеге хисапларны бердәм кысаларга кертә."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "кертте",
            "v3": "кертелгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "деконструкцияләргә",
            "level": "proficiency",
            "theme": "philosophy_literature",
            "emoji": "🧩",
            "subtext": "аргументны деконструкцияләү / текстны деконструкцияләү / Деррида деконструкциясе",
            "form": "verb",
            "definitions": [
                {
                    "text": "Текстны яки аргументны аның эчке каршылыкларын һәм фаразларын фаш итү өчен анализлау.",
                    "examples": [
                        "Ул идеологик яктылыгын ачу өчен политиканы деконструкцияләде."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "деконструкцияләде",
            "v3": "деконструкцияләнгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "алдан чикләргә",
            "level": "proficiency",
            "theme": "law_debate",
            "emoji": "🚪",
            "subtext": "вариантны чикләү / дебатны чикләү / мөмкинлекне чикләү",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәнедер алдан булдырмау яки чикләү (foreclose).",
                    "examples": [
                        "Сорауның куелышы иң кызыклы җавапларны алдан чикли."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "алдан чикләде",
            "v3": "алдан чикләнгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "диалектизацияләргә",
            "level": "proficiency",
            "theme": "philosophy_academic",
            "emoji": "☯️",
            "subtext": "бинарлыкны диалектизацияләү / диалектик метод / тезис һәм антитезис",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәгәдер каршы көчләрнең үзара бәйләнешен исәпкә алып диалектик карый (dialecticise).",
                    "examples": [
                        "Ул ирек һәм куркынычсызлык арасындагы каршылыкны диалектизацияли."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "диалектизацияләде",
            "v3": "диалектизацияләнгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "гегемонизацияләргә",
            "level": "proficiency",
            "theme": "politics_sociology",
            "emoji": "👑",
            "subtext": "дискурсны гегемонизацияләү / гегемонизациягә каршы тору",
            "form": "verb",
            "definitions": [
                {
                    "text": "Өлкә яки дискурс өстеннән өстенлекле йогынты ясау.",
                    "examples": [
                        "Бер теоретик кысалар бөтен өлкәне гегемонизацияләргә иреште."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "гегемонизацияләде",
            "v3": "гегемонизацияләнгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "ассызыкларга",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "🔊",
            "subtext": "аерманы ассызыклау / уңай якларны ассызыклау / ассызыкланган булу",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәнедер күренеп торган яки күренекле итү (accentuate).",
                    "examples": [
                        "Кризис эшче көчләр арасындагы булган тигезсезлекне ассызыклады."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "ассызыклады",
            "v3": "ассызыкланган",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "ризалашырга",
            "level": "proficiency",
            "theme": "debate_communication",
            "emoji": "🤝",
            "subtext": "ризалашу / риза булу / теләмичә ризалашу",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсә белән булса да, еш кына дәшмичә яки пассив рәвештә ризалашу (acquiesce).",
                    "examples": [
                        "Каты каршылыклары булса да, ул идарә карары белән ризалашты."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "ризалашты",
            "v3": "ризалашкан",
            "group": "regular",
            "auxiliary": "булырга"
        },
        {
            "word": "җиңеләйтергә",
            "level": "proficiency",
            "theme": "policy_general",
            "emoji": "🩹",
            "subtext": "азапны җиңеләйтү / ярлылыкны җиңеләйтү / басымны җиңеләйтү",
            "form": "verb",
            "definitions": [
                {
                    "text": "Проблеманы яки симптомны азрак авыр итү (alleviate).",
                    "examples": [
                        "Яңа политика торак кризисын җиңеләйтү өчен аз эш эшләде."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "җиңеләйтте",
            "v3": "җиңеләйтелгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "әйләнеп узарга",
            "level": "proficiency",
            "theme": "debate_general",
            "emoji": "🏃",
            "subtext": "кагыйдәләрне әйләнеп узу / проблеманы әйләнеп узу / контрольләрне узу",
            "form": "verb",
            "definitions": [
                {
                    "text": "Төпле рәвештә кыенлыкны яки тоткарлыкны узу (circumvent).",
                    "examples": [
                        "Ул бюрократик тоткарлыкны әйләнеп узуның законлы юлын тапты."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "әйләнеп узды",
            "v3": "әйләнеп узган",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "раслый торган дәлил китерергә",
            "level": "proficiency",
            "theme": "academic_research",
            "emoji": "✅",
            "subtext": "раслауны раслау / дәлилне раслау / расланган булу",
            "form": "verb",
            "definitions": [
                {
                    "text": "Теорияне яки белдерүне өстәмә дәлилләр белән раслау (corroborate).",
                    "examples": [
                        "Шаһит күрсәтмәләре документаль дәлилләрне тулысынча раслады."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "дәлил китерде",
            "v3": "дәлил китерелгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "таратырга",
            "level": "proficiency",
            "theme": "academic_research",
            "emoji": "📢",
            "subtext": "мәгълүмат тарату / нәтиҗәләрне тарату / киң таралган",
            "form": "verb",
            "definitions": [
                {
                    "text": "Мәгълүматны яки белемне киң тарату (disseminate).",
                    "examples": [
                        "Нәтиҗәләр халыкара тикшеренү челтәрләре аша таратылды."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "таратты",
            "v3": "таратылган",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "кулланырга",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "💊",
            "subtext": "идеяне куллану / проблеманы куллану / бик яхшы куллану",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәнеңдер төп сыйфатларын кыскача белдерү (encapsulate).",
                    "examples": [
                        "Бу гыйбарә заманча эш парадоксын бик яхшы куллана."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "кулланды",
            "v3": "кулланылган",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "тудырырга",
            "level": "proficiency",
            "theme": "sociology_general",
            "emoji": "🌱",
            "subtext": "ышаныч тудыру / конфликт тудыру / үпкә тудыру",
            "form": "verb",
            "definitions": [
                {
                    "text": "Хис, хәл яки шарт тудыру яки башлау (engender).",
                    "examples": [
                        "Яңа политика хезмәткәрләр арасында зур үпкә тудырды."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "тудырды",
            "v3": "тудырылган",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "кискенләштерергә",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "🔥",
            "subtext": "проблеманы кискенләштерү / киеренкелекне кискенләштерү / тигезсезлекне кискенләштерү",
            "form": "verb",
            "definitions": [
                {
                    "text": "Проблеманы яки тискәре хәлне тагын да начаррак итү (exacerbate).",
                    "examples": [
                        "Икътисади төшенкелек булган социаль тигезсезлекне кискенләштерде."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "кискенләштерде",
            "v3": "кискенләштерелгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "үрнәк булырга",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "📖",
            "subtext": "үрнәк булу / проблема үрнәге булу / ачык үрнәк булу",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәнеңдер типик үрнәге булып тору (exemplify).",
                    "examples": [
                        "Аның карьерасы югары вазыйфалардагы хатын-кызлар алдында торган кыенлыкларның үрнәге булып тора."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "үрнәк булды",
            "v3": "үрнәк булган",
            "group": "regular",
            "auxiliary": "булырга"
        },
        {
            "word": "аяк чалырга",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "🚧",
            "subtext": "алгарышка аяк чалу / үсешкә аяк чалу / комачаулау",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәнеңдер алгарышына комачаулау яки тоткарлау (impede).",
                    "examples": [
                        "Артык көйләү яңа тармакларда инновацияләргә аяк чалырга мөмкин."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "аяк чалды",
            "v3": "аяк чалган",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "йомшартырга",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "🛡️",
            "subtext": "рискны йомшарту / йогынтыны йомшарту / йомшартуга юнәлтү",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәнедер азрак җитди, авыр яки авыртулы итү (mitigate).",
                    "examples": [
                        "Яхшы аралашу үзгәрешләрнең йогынтысын йомшартырга ярдәм итә ала."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "йомшартты",
            "v3": "йомшартылган",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "мәҗбүр итәргә",
            "level": "proficiency",
            "theme": "law_general",
            "emoji": "⚖️",
            "subtext": "мәҗбүр булу / кемнедер мәҗбүр итү / мәҗбүр хис итү",
            "form": "verb",
            "definitions": [
                {
                    "text": "Кемнедер законлы яки мораль яктан нәрсәгәдер мәҗбүр итү (oblige).",
                    "examples": [
                        "Закон барлык эш бирүчеләрне куркынычсыз эш мохите белән тәэмин итәргә мәҗбүр итә."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "мәҗбүр итте",
            "v3": "мәҗбүр ителгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "таралырга",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "💧",
            "subtext": "оешмага таралу / таралу / барлыкка үтеп керү",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәнеңдер барлык өлешләрендә дә булу (pervade).",
                    "examples": [
                        "Артык эшләү мәдәнияте финанс хезмәтләре өлкәсенә таралган."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "stative",
            "v2": "таралды",
            "v3": "таралган",
            "group": "regular",
            "auxiliary": "булырга"
        },
        {
            "word": "искәртергә",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "🚫",
            "subtext": "кемнедер искәртеп калдыру / мөмкинлекне искәртү / искәртмичә",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәгәдер комачаулау яки катнашуны булдырмау (preclude).",
                    "examples": [
                        "Тиешле тәҗрибәсе булмау аны кыска исемлектән искәртеп калдырды."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "искәртте",
            "v3": "искәртелгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "килештерергә",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "🤝",
            "subtext": "идеяләрне килештерү / килештерү кыен / аермаларны килештерү",
            "form": "verb",
            "definitions": [
                {
                    "text": "Ике капма-каршы идея яки хәлнең бергә булу юлын табу (reconcile).",
                    "examples": [
                        "Ул үз кыйммәтләрен компания мәдәнияте белән килештерүне мөмкин түгел дип тапты."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "килештерде",
            "v3": "килештерелгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "алыштырырга",
            "level": "proficiency",
            "theme": "law_academic",
            "emoji": "🔄",
            "subtext": "законны алыштыру / элеккеге күрсәтмәләрне алыштыру / алыштырылган булу",
            "form": "verb",
            "definitions": [
                {
                    "text": "Элек кулланылган нәрсә урынын алу (supersede).",
                    "examples": [
                        "Яңа күрсәтмәләр барлык элеккеге версияләрне алыштырачак."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "алыштырды",
            "v3": "алыштырылган",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "нигезләнергә",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "⚓",
            "subtext": "аргументка нигезләнү / уңышка нигезләнү / нигезләнгән булу",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсә өчендер нигез яки терәк булып тору (underpin).",
                    "examples": [
                        "Көчле ышаныч һәр уңышлы озак вакытлы партнерлык нигезендә тора."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "stative",
            "v2": "нигезләнде",
            "v3": "нигезләнгән",
            "group": "regular",
            "auxiliary": "булырга"
        },
        {
            "word": "акларга",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "🏆",
            "subtext": "кемнедер аклау / карарны аклау / акланган хис итү",
            "form": "verb",
            "definitions": [
                {
                    "text": "Кемнеңдер яки нәрсәнеңдер дөрес яки нигезле булуын күрсәтү (vindicate).",
                    "examples": [
                        "Нәтиҗәләр ике елдан соң аның бәхәсле карарын акладылар."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "аклады",
            "v3": "акланган",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "бәйле булырга",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "⛓️",
            "subtext": "карарга бәйле булу / бер фактордан тору / барысы да бәйле",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәдер белән билгеләнү яки аңа бәйле булу (hinge on).",
                    "examples": [
                        "Проектның бөтен уңышы клиентның раславына бәйле."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "stative",
            "v2": "бәйле булды",
            "v3": "бәйле булган",
            "group": "regular",
            "auxiliary": "булырга"
        },
        {
            "word": "ишләргә",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "🤼",
            "subtext": "проблеманы чишәргә тырышу / йогынтылар белән эшләргә тырышу / катлаулылык белән көрәшү",
            "form": "verb",
            "definitions": [
                {
                    "text": "Кыен проблеманы чишәргә яки аңларга тырышу (grapple with).",
                    "examples": [
                        "Политика ясаучылар һаман да ЯИ йогынтылары белән эшләргә тырышалар."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "ишләде",
            "v3": "ишләгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "өстән-өстән үтәргә",
            "level": "proficiency",
            "theme": "debate_academic",
            "emoji": "🙈",
            "subtext": "проблеманы өстән-өстән үтү / детальләрне өстән-өстән үтү / игътибарсыз үтмәү",
            "form": "verb",
            "definitions": [
                {
                    "text": "Нәрсәгәдер әһәмиятсез кебек карау; игътибар итмәү (gloss over).",
                    "examples": [
                        "Доклад иң бәхәсле финанс детальләрен өстән-өстән үтә."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "өстән-өстән үтте",
            "v3": "өстән-өстән үтелгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "яшерергә",
            "level": "proficiency",
            "theme": "debate_politics",
            "emoji": "🩹",
            "subtext": "проблеманы яшерү / ярыкларны яшерү / аермаларны яшерү",
            "form": "verb",
            "definitions": [
                {
                    "text": "Кыен хәлне яхшырак күренсен өчен яшерергә яки игътибар итмәскә тырышу (paper over).",
                    "examples": [
                        "Килешү бары тик тирән структур аермаларны яшерде генә."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "яшерде",
            "v3": "яшерелгән",
            "group": "regular",
            "auxiliary": "итергә"
        },
        {
            "word": "парадигма үзгәрү",
            "level": "proficiency",
            "theme": "academic_general",
            "emoji": "🔄",
            "subtext": "якын килүдә фундаменталь үзгәреш",
            "form": "verb",
            "definitions": [
                {
                    "text": "Якын килүдә яки төп фаразларда фундаменталь үзгәреш.",
                    "examples": [
                        "Бу яңа технологияне кабул итү тармакта парадигма үзгәрүен аңлата."
                    ]
                }
            ],
            "classification": "irregular",
            "aspect": "action",
            "v2": "парадигма үзгәрде",
            "v3": "парадигма үзгәргән",
            "group": "locution",
            "auxiliary": "булырга"
        }
    ];
    window.vocabularyData[lang] = [
        ...(window.vocabularyData[lang] || []),
        ...data
    ];
})();
