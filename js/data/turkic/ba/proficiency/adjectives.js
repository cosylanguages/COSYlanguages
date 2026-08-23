// TODO: verify level classification
(function() {
    const lang = "ba";
    const data = [
    {
        "word": "фәндәр-ара",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧪",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ике йәки күберәк фәнни тармаҡты берләштереүсе.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_001",
        "transcription": ""
    },
    {
        "word": "герменевтик",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📜",
        "form": "adjective",
        "definitions": [
            {
                "text": "Текстарҙы йәки мәғәнәләрҙе аңлатыу менән бәйле.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_002",
        "transcription": ""
    },
    {
        "word": "тавтологик",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔄",
        "form": "adjective",
        "definitions": [
            {
                "text": "Шул уҡ нәрсәне башҡа һүҙҙәр менән ҡабатлаусы.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_003",
        "transcription": ""
    },
    {
        "word": "күпмәғәнәле",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔠",
        "form": "adjective",
        "definitions": [
            {
                "text": "Бернисә мәғәнәгә эйә булған.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_004",
        "transcription": ""
    },
    {
        "word": "эвристик",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💡",
        "form": "adjective",
        "definitions": [
            {
                "text": "Төгәл иҫбатлауға түгел, ә тәжрибәгә нигеҙләнгән ысул.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_psychology_001",
        "transcription": ""
    },
    {
        "word": "постколониаль",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🌍",
        "form": "adjective",
        "definitions": [
            {
                "text": "Колониаль чорҙан һуңғы ваҡытҡа йәки мираҫҡа бәйле.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_social_001",
        "transcription": ""
    },
    {
        "word": "күпполярлы",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🌐",
        "form": "adjective",
        "definitions": [
            {
                "text": "Бернисә көс үҙәге булған донъя тәртибе.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_social_002",
        "transcription": ""
    },
    {
        "word": "космополитик",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🏙️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Күп төрлө илдәр һәм мәҙәниәттәр менән таныш булған.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_social_003",
        "transcription": ""
    },
    {
        "word": "нарциссик",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🪞",
        "form": "adjective",
        "definitions": [
            {
                "text": "Үҙ-үҙенә генә һоҡланыу менән бәйле.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_psychology_002",
        "transcription": ""
    },
    {
        "word": "гетеродокс",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚩",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ҡабул ителгән догмаларға ҡаршы килеүсе.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_005",
        "transcription": ""
    },
    {
        "word": "имманент",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚛️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Нәрсәнеңдер эсендә булған, тышҡы булмаған.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_006",
        "transcription": ""
    },
    {
        "word": "киҫкен",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⏱️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Көтмәгәндә килеп сыҡҡан; тупаҫ йәки киҫкен.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_007",
        "transcription": ""
    },
    {
        "word": "аңлайышһыҙ",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🧐",
        "form": "adjective",
        "definitions": [
            {
                "text": "Аңлау өсөн ауыр; ҡатмарлы йәки асыҡ булмаған.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_psychology_003",
        "transcription": ""
    },
    {
        "word": "анахроник",
        "level": "proficiency",
        "theme": "time",
        "emoji": "⌛",
        "form": "adjective",
        "definitions": [
            {
                "text": "Иҫкергән; үткән заманға ҡараған.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_time_001",
        "transcription": ""
    },
    {
        "word": "антитетик",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Нәмәгәлер турынан-туры ҡаршы булған.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_008",
        "transcription": ""
    },
    {
        "word": "арканлы",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🔮",
        "form": "adjective",
        "definitions": [
            {
                "text": "Аҙсылыҡҡа ғына билдәле; серле.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_psychology_004",
        "transcription": ""
    },
    {
        "word": "атипик",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🦄",
        "form": "adjective",
        "definitions": [
            {
                "text": "Типик булмаған; ғәҙәти булмаған.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_009",
        "transcription": ""
    },
    {
        "word": "бинар",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔢",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ике өлөштән торған; дихотомияға нигеҙләнгән.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_010",
        "transcription": ""
    },
    {
        "word": "категорик",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❗",
        "form": "adjective",
        "definitions": [
            {
                "text": "Абсолют; бер ниндәй иҫкәрмәләрһеҙ әйтелгән.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_011",
        "transcription": ""
    },
    {
        "word": "һаҡ",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛡️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Һаҡ булыусы, барлыҡ шарттарҙы иҫәпкә алыусы.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_social_004",
        "transcription": ""
    },
    {
        "word": "йәшерен",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🕵️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Асыҡтан-асыҡ танылмаған; серле.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_social_005",
        "transcription": ""
    },
    {
        "word": "диалектик",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ҡаршылыҡтар аша фекер алышыуға ҡараған.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_012",
        "transcription": ""
    },
    {
        "word": "диффуз",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌫️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Киң таралышлы; асыҡлығы булмаған.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_013",
        "transcription": ""
    },
    {
        "word": "тотоп булмай торған",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🌬️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Табыу йәки ирешеү өсөн ауыр булған.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_psychology_005",
        "transcription": ""
    },
    {
        "word": "эзотерик",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🗝️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Тар кешеләр төркөмө өсөн генә аңлайышлы.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_psychology_006",
        "transcription": ""
    },
    {
        "word": "хаталы",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❌",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ялған фекерҙәргә нигеҙләнгән.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_014",
        "transcription": ""
    },
    {
        "word": "үҙгәрмәҫ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧱",
        "form": "adjective",
        "definitions": [
            {
                "text": "Үҙгәртелә алмай торған; даими.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_015",
        "transcription": ""
    },
    {
        "word": "тарафһыҙ",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Бер яҡҡа ла өҫтөнлөк бирмәүсе; ғәҙел.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_social_006",
        "transcription": ""
    },
    {
        "word": "өҫтәмә",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🍃",
        "form": "adjective",
        "definitions": [
            {
                "text": "Төп маҡсат булмаған, ситтәге нәмә.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_016",
        "transcription": ""
    },
    {
        "word": "хас булған",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚛️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Нәмәнеңдер эске, тәбиғи сифаты.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_017",
        "transcription": ""
    },
    {
        "word": "ҡабатланмаҫ",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "🌟",
        "form": "adjective",
        "definitions": [
            {
                "text": "Күсереп булмай торған дәрәҗәлә яҡшы йәки үҙенсәлекле.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_art_culture_001",
        "transcription": ""
    },
    {
        "word": "хәйләкәр",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🐍",
        "form": "adjective",
        "definitions": [
            {
                "text": "Аҡрынлап зыян килтерә торған.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_social_007",
        "transcription": ""
    },
    {
        "word": "килешмәҫ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚫",
        "form": "adjective",
        "definitions": [
            {
                "text": "Берләштереү йәки килештереү мөмкин булмаған.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_018",
        "transcription": ""
    },
    {
        "word": "лиминаль",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚪",
        "form": "adjective",
        "definitions": [
            {
                "text": "Күсеү осорона йәки аралағы халәткә ҡараған.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_019",
        "transcription": ""
    },
    {
        "word": "төрлө-төрлө",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔢",
        "form": "adjective",
        "definitions": [
            {
                "text": "Күп санлы һәм төрлө.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_020",
        "transcription": ""
    },
    {
        "word": "томанлы",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "☁️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Асыҡ булмаған; төгәл билдәләнмәгән.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_psychology_007",
        "transcription": ""
    },
    {
        "word": "норматив",
        "level": "proficiency",
        "theme": "social",
        "emoji": "📏",
        "form": "adjective",
        "definitions": [
            {
                "text": "Нормаға ҡараған; нисек булырға тейешлеген күрһәтеүсе.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_social_008",
        "transcription": ""
    },
    {
        "word": "төҫмәрле",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌗",
        "form": "adjective",
        "definitions": [
            {
                "text": "Нескә айырмаларҙы күрһәтеүсе; ҡатмарлы.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_021",
        "transcription": ""
    },
    {
        "word": "туры булмаған",
        "level": "proficiency",
        "theme": "language",
        "emoji": "↗️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Туранан-тура булмаған; ситләтелгән.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_022",
        "transcription": ""
    },
    {
        "word": "асыҡ булмаған",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌑",
        "form": "adjective",
        "definitions": [
            {
                "text": "Аңлау өсөн ауыр; үтә күренмәле булмаған.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_023",
        "transcription": ""
    },
    {
        "word": "ялған",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🎭",
        "form": "adjective",
        "definitions": [
            {
                "text": "Чын булып күренгән, әмма чын булмаған.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_024",
        "transcription": ""
    },
    {
        "word": "парадоксаль",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔄",
        "form": "adjective",
        "definitions": [
            {
                "text": "Үҙ-үҙенә ҡаршы килгән, әмма хаҡиҡәтте эсенә алған.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_025",
        "transcription": ""
    },
    {
        "word": "киң таралған",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌊",
        "form": "adjective",
        "definitions": [
            {
                "text": "Һәрҡайҙа булған; гомум ҡабул ителгән.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_time_002",
        "transcription": ""
    },
    {
        "word": "поляризациялаусы",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🧲",
        "form": "adjective",
        "definitions": [
            {
                "text": "Кешеләрҙе ҡаршы яҡтарға бүлеүсе.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_social_009",
        "transcription": ""
    },
    {
        "word": "тотрыҡһыҙ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧗",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ҡурҡынысһыҙ булмаған; осраҡлылыҡҡа бәйле.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_026",
        "transcription": ""
    },
    {
        "word": "прескриптив",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📜",
        "form": "adjective",
        "definitions": [
            {
                "text": "Нисек эшләргә кәрәклеген әйтеүсе; ҡағиҙәләр ҡуйыусы.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_027",
        "transcription": ""
    },
    {
        "word": "һуҙылған",
        "level": "proficiency",
        "theme": "time",
        "emoji": "⌛",
        "form": "adjective",
        "definitions": [
            {
                "text": "Көтелгәндән оҙағыраҡ дауам итеүсе.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_time_003",
        "transcription": ""
    },
    {
        "word": "редуктив",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📉",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ҡатмарлы нәмәне артыҡ гадиләштереүсе.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_028",
        "transcription": ""
    },
    {
        "word": "нигеҙ һалыусы",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌱",
        "form": "adjective",
        "definitions": [
            {
                "text": "Бик мөһим һәм йоғонто яһаусы.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_time_004",
        "transcription": ""
    },
    {
        "word": "ялған сылтаулы",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤥",
        "form": "adjective",
        "definitions": [
            {
                "text": "Дөрөҫ булып күренгән, әмма чынлыҡта ялған.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_029",
        "transcription": ""
    },
    {
        "word": "уйҙырма",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤡",
        "form": "adjective",
        "definitions": [
            {
                "text": "Чын булмаған; ялған фекерҙәргә нигеҙләнгән.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_030",
        "transcription": ""
    },
    {
        "word": "җимергеч",
        "level": "proficiency",
        "theme": "social",
        "emoji": "💣",
        "form": "adjective",
        "definitions": [
            {
                "text": "Системаны ҡакшатыу өсөн йүнәлтелгән.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_social_010",
        "transcription": ""
    },
    {
        "word": "әйтелмәгән",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤫",
        "form": "adjective",
        "definitions": [
            {
                "text": "Һүҙҙеҙ ҙә аңлайышлы булған.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_031",
        "transcription": ""
    },
    {
        "word": "йомшаҡ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🕸️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Бик көсһөҙ йәки бәхәсле; ныҡ булмаған.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_032",
        "transcription": ""
    },
    {
        "word": "үткенсе",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌅",
        "form": "adjective",
        "definitions": [
            {
                "text": "Даими булмаған; тиҙ уҙа торған.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_time_005",
        "transcription": ""
    },
    {
        "word": "һәрҡайҙағы",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌍",
        "form": "adjective",
        "definitions": [
            {
                "text": "Һәрҡайҙа осрай торған; бик киң таралған.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_time_006",
        "transcription": ""
    },
    {
        "word": "бермәғәнәле",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📢",
        "form": "adjective",
        "definitions": [
            {
                "text": "Шөбһә ҡалдырмай торған; тулыһынса асыҡ.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_033",
        "transcription": ""
    },
    {
        "word": "күрелмәгән",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🚀",
        "form": "adjective",
        "definitions": [
            {
                "text": "Элек берҡайсан да булмаған.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_time_007",
        "transcription": ""
    },
    {
        "word": "нигеҙһеҙ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🏗️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Яҡлау йәки иҫбатлау мөмкин булмаған.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_034",
        "transcription": ""
    },
    {
        "word": "айҡашлы",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📦",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ҙурлығы йәки ҡатмарлылығы арҡаһында идара итеү ауыр булған.",
                "examples": []
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_035",
        "transcription": ""
    }
];

    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
