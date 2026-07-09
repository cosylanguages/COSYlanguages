// TODO: verify level classification
(function() {
    const lang = "tt";
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
                "text": "Аргументтагы каршылыклардан килеп чыккан аптырау яки кыенлык хәле.",
                "examples": [
                    "Диалог апория белән тәмамлана, бернинди канәгатьләндерерлек җавапка ирешелми."
                ]
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_001",
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
                "text": "Табигатьтә яки тарихта максатчанлыкны өйрәнүче философияви тармак.",
                "examples": [
                    "Аның аргументы кешелек прогрессына телеологик карашка нигезләнгән."
                ]
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_002",
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
                "text": "Булу яки яшәү табигате белән шөгыльләнүче философияви тармак.",
                "examples": [
                    "Аның онтологик йөкләмәләре аның бөтен аргументын формалаштыра."
                ]
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_003",
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
                "text": "Абстракт нәрсәне конкрет, реаль әйбер кебек карау процессы; әйберләштерү.",
                "examples": [
                    "Базар көчләрен реификацияләү алар артындагы кеше карарларын яшерә."
                ]
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_004",
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
                "text": "Каршылык һәм чишелешне үз эченә алган аргументлау ысулы.",
                "examples": [
                    "Ирек һәм куркынычсызлык арасындагы диалектика либераль фикерне билгели."
                ]
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_005",
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
                "text": "Гарантияләнгән исбатлауга түгел, ә тәҗрибәгә нигезләнгән проблема чишү ысулы.",
                "examples": [
                    "'Акча артыннан бар' - тикшерү журналистикасында файдалы эвристика."
                ]
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_psychology_001",
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
                "text": "Бәйләнешсез нәрсәләр арасында мәгънәле бәйләнешләр күрү тенденциясе.",
                "examples": [
                    "Конспирологик фикерләү апофения белән этәрелә."
                ]
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_psychology_002",
        "transcription": ""
    },
    {
        "word": "мотивлаштырылган когниция",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🧠",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Теләкләрнең һәм хисләрнең фикерләүгә һәм ышанулар формалашуына йогынтысы.",
                "examples": [
                    "Мотивлаштырылган когниция кешеләрнең кирәкмәгән дәлилләргә ни өчен каршы торуларын аңлата."
                ]
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_psychology_003",
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
                "text": "Хәрәкәтсезлек куркынычларын хәрәкәт куркынычлары белән чагыштырырга кирәк дигән караш.",
                "examples": [
                    "Трансгуманистлар еш кына проактив принципны искә төшерәләр."
                ]
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_social_001",
        "transcription": ""
    },
    {
        "word": "саклык принцибы",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛡️",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Билгесез, әмма зыянлы булырга мөмкин нәтиҗәләре булган хәрәкәтләрдән качарга кирәк дигән караш.",
                "examples": [
                    "Экологик хокук еш кына саклык принцибын куллана."
                ]
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_social_002",
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
                "text": "Дәүләт яхшы тормышның бернинди конкрет күренешенә дә өстенлек бирергә тиеш түгел дигән либераль принцип.",
                "examples": [
                    "Тәнкыйтьчеләр либераль нейтралитетның үзе дә конкрет мораль позиция дип бәхәсләшәләр."
                ]
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_social_003",
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
                "text": "Кешеләрне күбрәк бала табарга этәрүче политика яки идеология.",
                "examples": [
                    "Ул гаилә салым политикасына салынган пронаталистик фаразларны тәнкыйтьләде."
                ]
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_social_004",
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
                "text": "Примитив импульсны социаль яктан кабул ителерлек эшчәнлеккә юнәлтү.",
                "examples": [
                    "Сәнгать күптәннән сублимация формасы буларак аңлатыла."
                ]
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_psychology_004",
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
                "text": "Психоаналитик теориядә, чиктән тыш яки транссгрессив ләззәт формасы.",
                "examples": [
                    "Жижек идеологик бәйләнешне аңлату өчен жуиссанс төшенчәсен куллана."
                ]
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_psychology_005",
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
                "text": "Фрейд теориясендә, үлемгә омтылыш; үз-үзеңне юк итү инстинкты.",
                "examples": [
                    "Роман эрос һәм танатос арасындагы киеренкелекне өйрәнә."
                ]
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_psychology_006",
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
                "text": "Югарыдан түбәнгә көтмәгәндә, күңел кайтаргыч күчеш.",
                "examples": [
                    "Сөйләм хәлиткеч мизгелдә батоска төште."
                ]
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_art_culture_001",
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
                "text": "Бернәрсә турында әйтмәскә вәгъдә биреп, аңа игътибарны җәлеп итү риторик алымы.",
                "examples": [
                    "'Мин аның җинаять эшен искә алмыйм' - классик апофазис."
                ]
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_006",
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
                "text": "Апофазисның тагын бер исеме.",
                "examples": [
                    "Политик риторика еш кына паралепсиска таяна."
                ]
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_007",
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
                "text": "Ике яшәеш халәте арасындагы күчеш фазасы яки бусага мизгеле.",
                "examples": [
                    "Урта яшь яшьлек һәм картлык арасындагы лиминаль киңлек буларак аңлатыла ала."
                ]
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_008",
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
                "text": "Риторик алым, анда икенче өлеш беренче өлешнең киресе булып тора.",
                "examples": [
                    "'Илең синең өчен нәрсә итә ала дип сорама' хиазм куллана."
                ]
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_009",
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
                "text": "Билгеле бер төркем әгъзаларын ачыклау өчен кулланыла торган гадәт яки гыйбарә.",
                "examples": [
                    "'Хезмәт сөюче гаиләләр' политик шибболетка әйләнде."
                ]
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_010",
        "transcription": ""
    }
];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();