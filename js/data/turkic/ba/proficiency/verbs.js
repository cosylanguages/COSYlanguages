(function() {
    const data = [
    {
        "word": "реификацияларға",
        "level": "proficiency",
        "theme": "philosophy_logic",
        "emoji": "🗿",
        "subtext": "концепцияны реификациялау / баҙарҙы реификациялау / хеҙмәтте реификациялау",
        "form": "verb",
        "definitions": [
            {
                "text": "Абстракт идеяны матди йәки конкрет нәмә булараҡ ҡарау; әйберләштереү.",
                "examples": [
                    "Иҡтисади моделдәр баҙар көстәрен реификациялай, аларҙы тәбиғи итеп күрһәтә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "реификацияланы",
        "v3": "реификацияланған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "сублимацияларға",
        "level": "proficiency",
        "theme": "psychology_academic",
        "emoji": "🎭",
        "subtext": "теләкте сублимациялау / импульс сублимацияһы / йүнәлтеү",
        "form": "verb",
        "definitions": [
            {
                "text": "Импульстарҙы йәки хистәрҙе социаль яҡтан ҡабул ителгән йәки ижади йүнәлешкә йүнәлтеү.",
                "examples": [
                    "Ул үҙенең политик ҡәнәғәтһеҙлеген академик яҙыуға сублимацияланы."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "сублимацияланы",
        "v3": "сублимацияланған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "предицировать итергә",
        "level": "proficiency",
        "theme": "logic_linguistics",
        "emoji": "🗣️",
        "subtext": "предицировать итеү / раҫлауға нигеҙләнеү / фаразға нигеҙләнгән",
        "form": "verb",
        "definitions": [
            {
                "text": "Субъект тураһында берәр нәмә раҫлау; йәки раҫлауҙы берәр нәмәгә нигеҙләү.",
                "examples": [
                    "Аның аргументы хәҙер юҡҡа сыҡҡан ышаныс дәрәжәһен предицировать итә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "предицировать итте",
        "v3": "предицировать ителгән",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "кәүҙәләндерергә",
        "level": "proficiency",
        "theme": "logic_computing",
        "emoji": "📋",
        "subtext": "концепцияны кәүҙәләндереү / практикала инстанциялау",
        "form": "verb",
        "definitions": [
            {
                "text": "Абстракт нәмәне конкрет өлгө аша күрһәтеү йәки һүрәтләү.",
                "examples": [
                    "Был осраҡ регуляторҙы ҡулға төшөрөү теорияһын кәүҙәләндерә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "кәүҙәләндерҙе",
        "v3": "кәүҙәләндерелгән",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "инҡар итергә",
        "level": "proficiency",
        "theme": "logic_debate",
        "emoji": "❌",
        "subtext": "аргументты инҡар итеү / хоҡуҡты юҡҡа сығарыу / диалектик инҡар итеү",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәне дөрөҫ түгел тип таныу йәки юҡҡа сығарыу.",
                "examples": [
                    "Яңы пункт ул биргән кеүек күренгән хоҡуҡты эффектив рәүештә инҡар итә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "инҡар итте",
        "v3": "инҡар ителгән",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "сиктән уҙырға",
        "level": "proficiency",
        "theme": "philosophy_general",
        "emoji": "🌌",
        "subtext": "сиктәрҙе уҙыу / категорияларҙы уҙыу / шәхси сиктән уҙыу",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәнән дә булһа өҫтөн булыу йәки аның сиктәренән тыш сығыу (transcend).",
                "examples": [
                    "Бөйөк сәнғәт аны тыуҙырыуҙың тарихи миҙгеленән өҫтөн сыға."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "сиктән уҙҙы",
        "v3": "сиктән уҙған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "аралашсы булырға",
        "level": "proficiency",
        "theme": "sociology_conflict",
        "emoji": "⚖️",
        "subtext": "аралашсы булыу / конфликтта аралашсылыҡ итеү / социаль аралашсылыҡ",
        "form": "verb",
        "definitions": [
            {
                "text": "Ике яҡты килештереү йәки бәйләү өсөн ҡатнашыу (mediate).",
                "examples": [
                    "Тел беҙҙең тышкы донъя менән мөнәсәбәттәребеҙгә аралашсылыҡ итә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "аралашсы булды",
        "v3": "аралашсы булған",
        "group": "vowel",
        "auxiliary": "булырға"
    },
    {
        "word": "төшөрөп ҡалдырырға",
        "level": "proficiency",
        "theme": "linguistics_debate",
        "emoji": "✂️",
        "subtext": "айырманы төшөрөп ҡалдырыу / элидировать итеү / белә тороп ҡалдырыу",
        "form": "verb",
        "definitions": [
            {
                "text": "Белә тороп нәмәне үткәреп ебәреү йәки иғтибарһыҙ ҡалдырыу.",
                "examples": [
                    "Доклад ярлылыҡ һәм мохтажлыҡ араһындағы айырманы төшөрөп ҡалдыра."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "төшөрөп ҡалдырҙы",
        "v3": "төшөрөп ҡалдырылған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "бутарға",
        "level": "proficiency",
        "theme": "debate_communication",
        "emoji": "🌫️",
        "subtext": "хәҡиҡәтте бутау / белә тороп бутау / жаргон менән бутау",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәне аңлайышһыҙ йәки аңлау өсөн ҡыйын итеү, еш ҡына белә тороп (obfuscate).",
                "examples": [
                    "Техник тел асыҡлау өсөн түгел, ә бутау өсөн эшләнгән кеүек ине."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "бутаны",
        "v3": "буталған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "ҡушып бутарға",
        "level": "proficiency",
        "theme": "debate_academic",
        "emoji": "🌀",
        "subtext": "мәсьәләләрҙе ҡушып бутау / ҡушыу / ҡурҡыныс рәүештә бутау",
        "form": "verb",
        "definitions": [
            {
                "text": "Ике йәки күберәк идеяны бергә ҡушыу, еш ҡына хаталы рәүештә (conflate).",
                "examples": [
                    "Дебаттарҙа тәртипһеҙ миграция менән законһыҙ иммиграция ҡушып бутала."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ҡушып бутаны",
        "v3": "ҡушып буталған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "мөрәжәғәт итергә",
        "level": "proficiency",
        "theme": "law_debate",
        "emoji": "📜",
        "subtext": "хоҡуҡҡа мөрәжәғәт итеү / прецедентҡа таяныу / аргумент ҡулланыу",
        "form": "verb",
        "definitions": [
            {
                "text": "Берәр эш өсөн авторитет булараҡ нәмәне килтереү йәки аңа таяныу (invoke).",
                "examples": [
                    "Ул үҙенең яҡлауында һүҙ иреге хоҡуғына мөрәжәғәт итте."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "мөрәжәғәт итте",
        "v3": "мөрәжәғәт ителгән",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "алғы планға сығарырга",
        "level": "proficiency",
        "theme": "art_media",
        "emoji": "🔦",
        "subtext": "мәсьәләне алғы планға сығарыу / перспективаны ассыҙыҡлау / белә тороп айырыу",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәне иғтибар үҙәгенә ҡуйыу (foreground).",
                "examples": [
                    "Фильм раса мәсьәләсен белә тороп алғы планға сығара."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "алғы планға сығарҙы",
        "v3": "алғы планға сығарылған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "үҙләштерергә",
        "level": "proficiency",
        "theme": "sociology_culture",
        "emoji": "♻️",
        "subtext": "хәрәкәтте үҙләштереү / үҙләштерелгән булыу / мәдәни рекуперация",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәне (мәҫәлән, фетнәсе эстетикаһын) мейнстрим мәҙәниәтенә кертү (recuperate).",
                "examples": [
                    "Мода индустрияһы панктың фетнәсе эстетикаһын үҙләштерҙе."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "үҙләштерҙе",
        "v3": "үҙләштерелгән",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "дестабилизацияларға",
        "level": "proficiency",
        "theme": "politics_academic",
        "emoji": "⚖️",
        "subtext": "режимды дестабилизациялау / фаразларҙы ҡакшатыу / белә тороп дестабилизациялау",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәне тотрыҡһыҙ итеү йәки тигеҙлеген боҙоу.",
                "examples": [
                    "Дәлилдәр докладтың үҙәк фаразын дестабилизациялай."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "дестабилизацияланы",
        "v3": "дестабилизацияланған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "товарлаштырырға",
        "level": "proficiency",
        "theme": "economics_sociology",
        "emoji": "💰",
        "subtext": "хеҙмәтте товарлаштырыу / ҡайғыртыуҙы товарлаштырыу / иғтибар товарлашыуы",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәгә һатып алырға һәм һатырға мөмкин булған коммерция продукты кеүек ҡарау (commodify).",
                "examples": [
                    "Сәләмәтлек индустрияһы психик сәләмәтлекте һәм үҙ-үҙеңде ҡайғыртыуҙы товарлаштыра."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "товарлаштырҙы",
        "v3": "товарлаштырылған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "инструментальләштерергә",
        "level": "proficiency",
        "theme": "politics_philosophy",
        "emoji": "🛠️",
        "subtext": "кешеләрҙе инструментальләштереү / идеяны ҡорал итеп ҡулланыу",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәне йәки кемделер маҡсатҡа ирешеү өсөн ҡорал булараҡ ҡулланыу.",
                "examples": [
                    "Тәңҡитселәр был политика эшселәрҙең иминлеген инструментальләштерә тип бәхәсләште."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "инструментальләштерҙе",
        "v3": "инструментальләштерелгән",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "валоризацияларға",
        "level": "proficiency",
        "theme": "sociology_academic",
        "emoji": "💎",
        "subtext": "хеҙмәтте валоризациялау / концепцияға ҡыйммәт биреү / мәҙәниәт тарафынан валоризацияланыу",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәгә ҙур ҡыйммәт йәки әһәмиәт биреү (valorise).",
                "examples": [
                    "Заманса мәҙәниәт хеҙмәтте ялдан һәм тыныслыҡтан юғарыраҡ ҡуя."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "валоризацияланы",
        "v3": "валоризацияланған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "фетишизацияларға",
        "level": "proficiency",
        "theme": "sociology_academic",
        "emoji": "🧿",
        "subtext": "идеяны фетишизациялау / товар фетишизмы / үҫеште фетишизациялау",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәгә ҡарата чиктән тыш йәки иррациональ бирелгәнлек күрһәтеү.",
                "examples": [
                    "Стартап мәҙәниәте үҙгәреште үҙ маҡсаты итеп фетишизациялай."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "фетишизацияланы",
        "v3": "фетишизацияланған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "ятлаштырырға",
        "level": "proficiency",
        "theme": "sociology_psychology",
        "emoji": "👽",
        "subtext": "кемделер ятлаштырыу / ятлашыу хисе / хеҙмәттән ятлашыу",
        "form": "verb",
        "definitions": [
            {
                "text": "Кемделер үҙ тирәлегенән йәки үҙ-үҙенән читләштерергә мәжбүр итеү (alienate).",
                "examples": [
                    "Индустриаль шарттар эшселәрҙе оҫталыҡ хисенән ятлаштыра."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ятлаштырҙы",
        "v3": "ятлаштырылған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "сиктәрен билдәләргә",
        "level": "proficiency",
        "theme": "law_philosophy",
        "emoji": "🚧",
        "subtext": "чикте билдәләү / асыҡ демаркациялау / демаркация һыҙығы",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәнең сиктәрен урынлаштырыу (demarcate).",
                "examples": [
                    "Закон көйләү менән цензура араһындағы чикте билдәләргә омтыла."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "сиктәрен билдәләне",
        "v3": "сиктәре билдәләнгән",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "сикләргә",
        "level": "proficiency",
        "theme": "academic_research",
        "emoji": "📏",
        "subtext": "коласты сикләү / концепцияны сикләү / етди сикләнгән",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәнең сиктәрен төгәл билдәләү (delimit).",
                "examples": [
                    "Тикшеренеү артыҡ гомумиләштереүҙән ҡасыу өсөн үҙ коласын белә тороп сикләй."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "сикләне",
        "v3": "сикләнгән",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "ҡаршы торорға",
        "level": "proficiency",
        "theme": "debate_academic",
        "emoji": "🛡️",
        "subtext": "ҡаршы тороу / ҡаты ҡаршы тороу / файҙаһына булыу",
        "form": "verb",
        "definitions": [
            {
                "text": "(Факт йәки хәл тураһында) нәмәгә ҡаршы йоғонто яһау (militate).",
                "examples": [
                    "Системаның ҡатмарлылығы эффектив реформаға ҡаршы тора."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "ҡаршы торҙо",
        "v3": "ҡаршы торған",
        "group": "vowel",
        "auxiliary": "булырға"
    },
    {
        "word": "боҙорға",
        "level": "proficiency",
        "theme": "law_academic",
        "emoji": "☤",
        "subtext": "раҫлауҙы боҙоу / аргументты боҙоу / юридик яҡтан боҙолған",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәне нәтижәһеҙ йәки дөрөҫ түгел итеү (vitiate).",
                "examples": [
                    "Методологик хата тикшеренеүҙең үҙәк нәтижәләрен боҙа."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "боҙҙо",
        "v3": "боҙолған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "кире ҡағырға",
        "level": "proficiency",
        "theme": "debate_logic",
        "emoji": "🗣️",
        "subtext": "кире ҡағыу ҡыйын / бер кем дә кире ҡаға алмай / раҫлауҙы кире ҡағыу",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәгә ҡаршы килеү йәки инҡар итеү (gainsay).",
                "examples": [
                    "Тикшереү тәҡдим иткән дәлилдәрҙе кире ҡағыу ҡыйын."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "кире ҡаҡты",
        "v3": "кире ҡағылған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "юҡҡа сығарырға",
        "level": "proficiency",
        "theme": "law_politics",
        "emoji": "📜",
        "subtext": "килешеүҙе юҡҡа сығарыу / договорҙы юҡҡа сығарыу / бер яҡлы юҡҡа сығарыу",
        "form": "verb",
        "definitions": [
            {
                "text": "Законды йәки рәсми килешеүҙе рәсми рәүештә туҡтатыу (abrogate).",
                "examples": [
                    "Хөкүмәт килешеүҙе бер яҡлы рәүештә юҡҡа сығарырға омтылды."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "юҡҡа сығарҙы",
        "v3": "юҡҡа сығарылған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "боҙорға",
        "level": "proficiency",
        "theme": "law_debate",
        "emoji": "🚫",
        "subtext": "законды боҙоу / ҡағиҙәләргә ҡаршы килеү / килешеүҙе боҙоу",
        "form": "verb",
        "definitions": [
            {
                "text": "Закон йәки ҡағиҙә билдәләгәнсә эшләмәү (contravene).",
                "examples": [
                    "Чишелеш ЕО конкуренция законын боҙа тип табылды."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "боҙҙо",
        "v3": "боҙолған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "индерергә",
        "level": "proficiency",
        "theme": "logic_philosophy",
        "emoji": "📂",
        "subtext": "аҫтына индереү / индерелгән булыу / категорияға индереү",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәне киңерәк төркөм йәки категория өлөшө итеп индереү (subsume).",
                "examples": [
                    "Аның теорияһы барлыҡ элекке хисапларҙы берҙәм ҡысаларға индерә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "индерҙе",
        "v3": "индерелгән",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "deconstruct",
        "level": "proficiency",
        "theme": "philosophy_literature",
        "emoji": "🧩",
        "subtext": "аргументты деконструкциялау / текстты деконструкциялау",
        "form": "verb",
        "definitions": [
            {
                "text": "Текстты йәки аргументты аның эчке ҡаршылыҡтарын һәм фаразларын фаш итеү өсөн анализлау.",
                "examples": [
                    "Ул идеологик яҡтылығын асыу өсөн политиканы деконструкцияланы."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "деконструкцияланы",
        "v3": "деконструкцияланған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "алҙан сикләргә",
        "level": "proficiency",
        "theme": "law_debate",
        "emoji": "🚪",
        "subtext": "вариантты сикләү / дебатты сикләү / мөмкинлекте сикләү",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәне алҙан булдырмау йәки сикләү (foreclose).",
                "examples": [
                    "Һорауҙың ҡуйылышы иң ҡыҙыҡлы яуаптарҙы алҙан сикләй."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "алҙан сикләне",
        "v3": "алҙан сикләнгән",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "диалектизацияларға",
        "level": "proficiency",
        "theme": "philosophy_academic",
        "emoji": "☯️",
        "subtext": "бинарлыҡты диалектизациялау / диалектик метод / тезис һәм антитезис",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәгә ҡаршы көстәрҙең үҙара бәйләнешен иҫәпкә алып диалектик ҡарай (dialecticise).",
                "examples": [
                    "Ул ирек һәм куркынысһыҙлыҡ араһындағы ҡаршылыҡты диалектизациялай."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "диалектизацияланы",
        "v3": "диалектизацияланған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "гегемонизацияларға",
        "level": "proficiency",
        "theme": "politics_sociology",
        "emoji": "👑",
        "subtext": "дискурсны гегемонизациялау / гегемонизацияға ҡаршы тору",
        "form": "verb",
        "definitions": [
            {
                "text": "Өлкә йәки дискурс өҫтөнән өҫтөнлөклө йоғонто яһау.",
                "examples": [
                    "Бер теоретик ҡысалар бөтөн өлкәне гегемонизацияларға иреште."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "гегемонизацияланы",
        "v3": "гегемонизацияланған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "ассыҙыҡларға",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🔊",
        "subtext": "айырманы ассыҙыҡлау / уңай яҡтарҙы ассыҙыҡлау / ассыҙыҡланған булыу",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәне күренеп торған йәки күренекле итеү (accentuate).",
                "examples": [
                    "Кризис эшче көстәр араһындағы булған тигеҙһеҙлекте ассыҙыҡланы."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ассыҙыҡланы",
        "v3": "ассыҙыҡланған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "ризалашырға",
        "level": "proficiency",
        "theme": "debate_communication",
        "emoji": "🤝",
        "subtext": "ризалашыу / риза булыу / теләмәйенсә ризалашыу",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмә менән булһа ла, еш ҡына дәшмәйенсә йәки пассив рәүештә ризалашыу (acquiesce).",
                "examples": [
                    "Ҡаты ҡаршылыҡтары булһа ла, ул идара ҡарары менән ризалашты."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ризалашты",
        "v3": "ризалашҡан",
        "group": "vowel",
        "auxiliary": "булырға"
    },
    {
        "word": "еңелләштерергә",
        "level": "proficiency",
        "theme": "policy_general",
        "emoji": "🩹",
        "subtext": "азапты еңелләштереү / ярлылыҡты еңелләштереү / баҫымды еңелләштереү",
        "form": "verb",
        "definitions": [
            {
                "text": "Проблеманы йәки симптомды аҙраҡ ауыр итеү (alleviate).",
                "examples": [
                    "Яңы политика торлаҡ кризисын еңелләштереү өсөн аҙ эш эшләне."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "еңелләштерҙе",
        "v3": "еңелләштерелгән",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "әйләнеп уҙырға",
        "level": "proficiency",
        "theme": "debate_general",
        "emoji": "🏃",
        "subtext": "ҡағиҙәләрҙе әйләнеп уҙыу / проблеманы әйләнеп уҙыу / контрольдәрҙе уҙыу",
        "form": "verb",
        "definitions": [
            {
                "text": "Төпле рәүештә ҡыйынлыҡты йәки тотҡарлыҡты уҙыу (circumvent).",
                "examples": [
                    "Ул бюрократик тотҡарлыҡты әйләнеп уҙыуҙың законлы юлын тапты."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "әйләнеп уҙҙы",
        "v3": "әйләнеп уҙған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "раҫларға",
        "level": "proficiency",
        "theme": "academic_research",
        "emoji": "✅",
        "subtext": "раҫлауҙы раҫлау / дәлилде раҫлау / раҫланған булыу",
        "form": "verb",
        "definitions": [
            {
                "text": "Теорияны йәки белдереүҙе өҫтәмә дәлилдәр менән раҫлау (corroborate).",
                "examples": [
                    "Шаһит күрһәтмәләре документаль дәлилдәрҙе тулыһынса раҫланы."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "раҫланы",
        "v3": "раҫланған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "таратырға",
        "level": "proficiency",
        "theme": "academic_research",
        "emoji": "📢",
        "subtext": "мәғлүмәт таратыу / нәтижәләрҙе таратыу / киң таралған",
        "form": "verb",
        "definitions": [
            {
                "text": "Мәғлүмәтте йәки белемде киң таратыу (disseminate).",
                "examples": [
                    "Нәтижәләр халыҡ-ара тикшеренеү челтәрҙәре аша таратылды."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "таратты",
        "v3": "таратылған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "үҙ эсенә алырға",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "💊",
        "subtext": "идеяны үҙ эсенә алыу / проблеманы үҙ эсенә алыу / бик яҡшы алыу",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәнең төп сыйфаттарын ҡыҫҡаса белдереү (encapsulate).",
                "examples": [
                    "Был гыйбарә заманса эш парадоксын бик яҡшы үҙ эсенә ала."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "үҙ эсенә алды",
        "v3": "үҙ эсенә алған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "тыуҙырырға",
        "level": "proficiency",
        "theme": "sociology_general",
        "emoji": "🌱",
        "subtext": "ышаныс тыуҙырыу / конфликт тыуҙырыу / үпкә тыуҙырыу",
        "form": "verb",
        "definitions": [
            {
                "text": "Хис, хәл йәки шарт тыуҙырыу йәки башлау (engender).",
                "examples": [
                    "Яңы политика хезмәткәрҙәр араһында ҙур үпкә тыуҙырҙы."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "тыуҙырҙы",
        "v3": "тыуҙырылған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "киҫкенләштерергә",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🔥",
        "subtext": "проблеманы киҫкенләштереү / киеренкелекте киҫкенләштереү / тигеҙһеҙлекте киҫкенләштереү",
        "form": "verb",
        "definitions": [
            {
                "text": "Проблеманы йәки тиҫкәре хәлде тағын да начарраҡ итеү (exacerbate).",
                "examples": [
                    "Иҡтисади төшөнкөлөк булған социаль тигеҙһеҙлекте киҫкенләштерҙе."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "киҫкенләштерҙе",
        "v3": "киҫкенләштерелгән",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "өлгө булып торорға",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "📖",
        "subtext": "өлгө булыу / проблема өлгөһө булыу / асыҡ өлгө булыу",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәнең типик өлгөһө булып тороу (exemplify).",
                "examples": [
                    "Аның карьераһы юғары вазыйфаларҙағы хатын-ҡыҙҙар алдында торған ҡыйынлыҡтарҙың өлгөһө булып тора."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "өлгө булды",
        "v3": "өлгө булған",
        "group": "vowel",
        "auxiliary": "булырға"
    },
    {
        "word": "ҡамасауларға",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🚧",
        "subtext": "алғарышҡа ҡамасаулау / үҫешкә ҡамасаулау / комачаулау",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәнең алғарышына комачаулау йәки тотҡарлау (impede).",
                "examples": [
                    "Артыҡ көйләү яңы тармаҡтарҙа инновацияларға ҡамасауларға мөмкин."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ҡамасауланы",
        "v3": "ҡамасаулаған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "йомшартырға",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🛡️",
        "subtext": "рискты йомшартыу / йоғонтоно йомшартыу / йомшартыуға йүнәлтеү",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәне аҙраҡ етди, ауыр йәки ауыртыулы итеү (mitigate).",
                "examples": [
                    "Яҡшы аралашыу үҙгәрештәрҙең йоғонтоһон йомшартырға ярҙам итә ала."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "йомшартты",
        "v3": "йомшартылған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "мәжбүр итергә",
        "level": "proficiency",
        "theme": "law_general",
        "emoji": "⚖️",
        "subtext": "мәжбүр булыу / кемделер мәжбүр итеү / мәжбүр хисе",
        "form": "verb",
        "definitions": [
            {
                "text": "Кемделер законлы йәки мораль яҡтан нәмәгә мәжбүр итеү (oblige).",
                "examples": [
                    "Закон барлыҡ эш биреүселәрҙе ҡурҡынысһыҙ эш мохите менән тәьмин итергә мәжбүр итә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "мәжбүр итте",
        "v3": "мәжбүр ителгән",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "таралырга",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "💧",
        "subtext": "оешмаға таралыу / таралыу / барлыҡҡа үтеп кереү",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәнең барлыҡ өлөштәрендә дә булыу (pervade).",
                "examples": [
                    "Артыҡ эшләү мәҙәниәте финанс хеҙмәттәре өлкәһенә таралған."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "таралды",
        "v3": "таралған",
        "group": "vowel",
        "auxiliary": "булырға"
    },
    {
        "word": "булдырмаҫҡа",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🚫",
        "subtext": "кемделер булдырмаҫҡа / мөмкинлекте сикләү / булдырмайынса",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәгә комачаулау йәки ҡатнашыуҙы булдырмау (preclude).",
                "examples": [
                    "Тийешле тәжрибәһе булмау аны ҡыҫҡа исемлектән булдырманы."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "булдырманы",
        "v3": "булдырмаған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "килештерергә",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🤝",
        "subtext": "идеяларҙы килештереү / килештереү ҡыйын / айырмаларҙы килештереү",
        "form": "verb",
        "definitions": [
            {
                "text": "Ике ҡапма-ҡаршы идея йәки хәлдең бергә булыу юлын табыу (reconcile).",
                "examples": [
                    "Ул үҙ ҡыйммәттәрен компания мәҙәниәте менән килештереүҙе мөмкин түгел тип тапты."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "килештерҙе",
        "v3": "килештерелгән",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "алмаштырырға",
        "level": "proficiency",
        "theme": "law_academic",
        "emoji": "🔄",
        "subtext": "законды алмаштырыу / элеккеге күрһәтмәләрҙе алмаштырыу / алмаштырылған булыу",
        "form": "verb",
        "definitions": [
            {
                "text": "Элек ҡулланылған нәмә урынын алыу (supersede).",
                "examples": [
                    "Яңы күрһәтмәләр барлыҡ элекке версияларҙы алмаштырасаҡ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "алмаштырҙы",
        "v3": "алмаштырылған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "нигеҙләнергә",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "⚓",
        "subtext": "аргументҡа нигеҙләнеү / уңышҡа нигеҙләнеү / нигеҙләнгән булыу",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмә өсөн нигеҙ йәки терәк булып тороу (underpin).",
                "examples": [
                    "Көслө ышаныс һәр уңышлы оҙаҡ ваҡытлы партнерлыҡ нигеҙендә тора."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "нигеҙләнде",
        "v3": "нигеҙләнгән",
        "group": "vowel",
        "auxiliary": "булырға"
    },
    {
        "word": "аҡларға",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🏆",
        "subtext": "кемделер аҡлау / ҡарарҙы аҡлау / аҡланған хисе",
        "form": "verb",
        "definitions": [
            {
                "text": "Кемдеңдер йәки нәмәнең дөрөҫ йәки нигеҙле булыуын күрһәтеү (vindicate).",
                "examples": [
                    "Нәтижәләр ике йылдан һуң аның бәхәсле ҡарарын аҡланы."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "аҡланы",
        "v3": "аҡланған",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "бәйле булырға",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "⛓️",
        "subtext": "ҡарарға бәйле булыу / бер факторҙан тороу / барыһы ла бәйле",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмә менән билдәләнеү йәки аңа бәйле булыу (hinge on).",
                "examples": [
                    "Проекттың бөтөн уңышы клиенттың раҫлауына бәйле."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "бәйле булды",
        "v3": "бәйле булған",
        "group": "vowel",
        "auxiliary": "булырға"
    },
    {
        "word": "көрәшергә",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🤼",
        "subtext": "проблеманы чишергә тырышыу / йоғонтолар менән эшләргә тырышыу / ҡатмарлылыҡ менән көрәшеү",
        "form": "verb",
        "definitions": [
            {
                "text": "Ҡыйын проблеманы чишергә йәки аңларға тырышыу (grapple with).",
                "examples": [
                    "Политика яһаусылар һаман да ЯИ йоғонтолары менән эшләргә тырыша."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "көрәште",
        "v3": "көрәшкән",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "өҫтән-өҫтән үтергә",
        "level": "proficiency",
        "theme": "debate_academic",
        "emoji": "🙈",
        "subtext": "проблеманы өҫтән-өҫтән үтеү / деталдәрҙе өҫтән-өҫтән үтеү / иғтибарһыҙ үтмәү",
        "form": "verb",
        "definitions": [
            {
                "text": "Нәмәгә әһәмиәтһеҙ кеүек ҡарау; иғтибар итмәү (gloss over).",
                "examples": [
                    "Доклад иң бәхәсле финанс деталдәрен өҫтән-өҫтән үтә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "өҫтән-өҫтән үтте",
        "v3": "өҫтән-өҫтән үтелгән",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "йәшерергә",
        "level": "proficiency",
        "theme": "debate_politics",
        "emoji": "🩹",
        "subtext": "проблеманы йәшереү / ярыҡтарҙы йәшереү / айырмаларҙы йәшереү",
        "form": "verb",
        "definitions": [
            {
                "text": "Ҡыйын хәлде яҡшыраҡ күренһен өсөн йәшерергә йәки иғтибар итмәҫкә тырышыу (paper over).",
                "examples": [
                    "Килешеү бары тик тирән структур айырмаларҙы йәшерҙе генә."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "йәшерҙе",
        "v3": "йәшерелгән",
        "group": "vowel",
        "auxiliary": "итергә"
    },
    {
        "word": "парадигма үҙгәреүе",
        "level": "proficiency",
        "theme": "academic_general",
        "emoji": "🔄",
        "subtext": "яҡын килеүҙә фундаменталь үҙгәреш",
        "form": "verb",
        "definitions": [
            {
                "text": "Яҡын килеүҙә йәки төп фаразларҙа фундаменталь үҙгәреш.",
                "examples": [
                    "Бу яңы технологияны ҡабул итеү тармаҡта парадигма үҙгәреүен аңлата."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "парадигма үҙгәрҙе",
        "v3": "парадигма үҙгәргән",
        "group": "vowel",
        "auxiliary": "булырға"
    }
];
    const lang = "ba";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = (window.vocabularyData[lang] || []).concat(data);
})();