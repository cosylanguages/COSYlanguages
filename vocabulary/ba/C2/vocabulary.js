// TODO: verify level classification
(function() {
    const lang = "ba";
    const data = [
    {
        "word": "апория",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤔",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Аргументтағы ҡаршылыҡтарҙан килеп сыҡҡан аптырау йәки ҡыйынлыҡ хәле.",
                "examples": [
                    "Диалог апория менән тамамлана, бер ниндәй ҡәнәғәтләндерерлек яуапҡа ирешелмәй."
                ]
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_001",
        "transcription": ""
    },
    {
        "word": "телеология",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🎯",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Тәбиғәттә йәки тарихта маҡсатлылыҡты өйрәнеүсе философик тармаҡ.",
                "examples": [
                    "Аның аргументы кешелек прогресына телеологик ҡарашҡа нигеҙләнгән."
                ]
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_002",
        "transcription": ""
    },
    {
        "word": "онтология",
        "level": "proficiency",
        "theme": "language",
        "emoji": "👻",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Булыу йәки йәшәү тәбиғәте менән шөғөлләнеүсе философик тармаҡ.",
                "examples": [
                    "Аның онтологик йөкләмәләре аның бөтөн аргументын формалаштыра."
                ]
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_003",
        "transcription": ""
    },
    {
        "word": "реификация",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧱",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Абстракт нәмәне конкрет, реаль әйбер кеүек ҡарау процессы; әйберләштереү.",
                "examples": [
                    "Баҙар көстәрен реификациялау алар артындағы кеше ҡарарҙарын йәшерә."
                ]
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_004",
        "transcription": ""
    },
    {
        "word": "диалектика",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Ҡаршылыҡ һәм чишелеште үҙ эсенә алған аргументлау ысулы.",
                "examples": [
                    "Ирек һәм куркынысһыҙлыҡ араһындағы диалектика либераль фикерҙе билдәләй."
                ]
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_005",
        "transcription": ""
    },
    {
        "word": "эвристика",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Гарантияланған иҫбатлауға түгел, ә тәжрибәгә нигеҙләнгән проблема чишеү ысулы.",
                "examples": [
                    "'Аҡса артынан бар' - тикшереү журналистикаһында файҙалы эвристика."
                ]
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_psychology_001",
        "transcription": ""
    },
    {
        "word": "апофения",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🕸️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Бәйләнешһеҙ нәмәләр араһында мәғәнәле бәйләнештәр күреү тенденцияһы.",
                "examples": [
                    "Конспирологик фикерләү апофения менән этәрелә."
                ]
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_psychology_002",
        "transcription": ""
    },
    {
        "word": "мотивлаштырылған когниция",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🧠",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Теләктәрҙең һәм хистәрҙең фикерләүгә һәм ышаныуҙар формалашыуына йоғонтоһо.",
                "examples": [
                    "Мотивлаштырылған когниция кешеләрҙең ни өсөн кәрәкмәгән дәлилдәргә ҡаршы тороуҙарын аңлата."
                ]
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_psychology_003",
        "transcription": ""
    },
    {
        "word": "проактив принцип",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🚀",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Хәрәкәтһеҙлек куркыныслыҡтарын хәрәкәт куркыныслыҡтары менән сағыштырырға кәрәк тигән ҡараш.",
                "examples": [
                    "Трансгуманистар еш ҡына проактив принципты иҫкә төшөрәләр."
                ]
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_social_001",
        "transcription": ""
    },
    {
        "word": "саҡлыҡ принцибы",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛡️",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Билдәһеҙ, әмма зыянлы булырға мөмкин нәтижәләре булған хәрәкәттәрҙән ҡасырға кәрәк тигән ҡараш.",
                "examples": [
                    "Экологик хокук еш ҡына саҡлыҡ принцибын ҡуллана."
                ]
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_social_002",
        "transcription": ""
    },
    {
        "word": "либераль нейтралитет",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⚖️",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Дәүләт яҡшы тормоштоң бер ниндәй конкрет күренешенә лә өҫтөнлөк бирергә тейеш түгел тигән либераль принцип.",
                "examples": [
                    "Тәнҡитселәр либераль нейтралитеттың үҙе лә конкрет мораль позиция тип бәхәсләшәләр."
                ]
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_social_003",
        "transcription": ""
    },
    {
        "word": "пронатализм",
        "level": "proficiency",
        "theme": "social",
        "emoji": "👶",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Кешеләрҙе күберәк бала табырға этәреүсе политика йәки идеология.",
                "examples": [
                    "Ул гаилә һалым политикаһына һалынған пронаталистик фаразҙарҙы тәнҡитләне."
                ]
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_social_004",
        "transcription": ""
    },
    {
        "word": "сублимация",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🎨",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Примитив импульсты социаль яҡтан ҡабул ителерлек эшсәнлеккә йүнәлтеү.",
                "examples": [
                    "Сәнғәт күптәнән сублимация формаһы булараҡ аңлатыла."
                ]
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_psychology_004",
        "transcription": ""
    },
    {
        "word": "жуиссанс",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🔥",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Психоаналитик теорияла, чиктән тыш йәки транссгрессив ләззәт формаһы.",
                "examples": [
                    "Жижек идеологик бәйләнеште аңлатыу өсөн жуиссанс төшенсәһен ҡуллана."
                ]
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_psychology_005",
        "transcription": ""
    },
    {
        "word": "танатос",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💀",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Фрейд теорияһында, үлемгә омтылыш; үз-үҙеңде юҡ итеү инстинкты.",
                "examples": [
                    "Роман эрос һәм танатос араһындағы киеренкелекте өйрәнә."
                ]
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_psychology_006",
        "transcription": ""
    },
    {
        "word": "батос",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "📉",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Юғарынан түбәнгә көтмәгәндә, күңел ҡайтарғыс күсеш.",
                "examples": [
                    "Һөйләм хәлиткеч миҙгелдә батосҡа төштө."
                ]
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_art_culture_001",
        "transcription": ""
    },
    {
        "word": "апофазис",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤫",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Бернәмә тураһында әйтмәҫкә вәғәҙә биреп, аңа иғтибарҙы йәлеп итеү риторик алымы.",
                "examples": [
                    "'Мин аның йинаять эшен иҫкә алмайым' - классик апофазис."
                ]
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_006",
        "transcription": ""
    },
    {
        "word": "паралепсис",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🙊",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Апофазистың тағын бер исеме.",
                "examples": [
                    "Политик риторика еш ҡына паралепсисҡа таяна."
                ]
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_007",
        "transcription": ""
    },
    {
        "word": "лиминаль киңлек",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚪",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Ике йәшәйеш халәте араһындағы күчеш фазаһы йәки буһаға миҙгеле.",
                "examples": [
                    "Урта йәш йәшлек һәм ҡартлыҡ араһындағы лиминаль киңлек булараҡ аңлатыла ала."
                ]
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_008",
        "transcription": ""
    },
    {
        "word": "хиазм",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❌",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Риторик алым, анда икенче өлөш беренче өлөштөң киреһе булып тора.",
                "examples": [
                    "'Һеҙҙең илегеҙ һеҙҙең өсөн нәмә итә ала тип һорама' хиазм ҡуллана."
                ]
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_009",
        "transcription": ""
    },
    {
        "word": "шибболет",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔑",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Билдәле бер төркөм әғзаларын асыҡлау өсөн ҡулланыла торған гаҙәт йәки гыйбарә.",
                "examples": [
                    "'Хеҙмәт һөйөүсе ғаиләләр' политик шибболетҡа әйләнде."
                ]
            }
        ],
        "lang": "ba",
        "id": "ba_proficiency_language_010",
        "transcription": ""
    }
];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();