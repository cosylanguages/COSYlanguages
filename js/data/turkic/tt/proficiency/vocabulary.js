(function() {
    const lang = "tt";
    const data = [
        {
                "word": "апория",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🤔",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Аргументтагы каршылыклардан килеп чыккан аптырау яки кыенлык хәле.",
                                "examples": [
                                        "Диалог апория белән тәмамлана, бернинди канәгатьләндерерлек җавапка ирешелми."
                                ]
                        }
                ]
        },
        {
                "word": "телеология",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🎯",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Табигатьтә яки тарихта максатчанлыкны өйрәнүче философияви тармак.",
                                "examples": [
                                        "Аның аргументы кешелек прогрессына телеологик карашка нигезләнгән."
                                ]
                        }
                ]
        },
        {
                "word": "онтология",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "👻",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Булу яки яшәү табигате белән шөгыльләнүче философияви тармак.",
                                "examples": [
                                        "Аның онтологик йөкләмәләре аның бөтен аргументын формалаштыра."
                                ]
                        }
                ]
        },
        {
                "word": "реификация",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🧱",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Абстракт нәрсәне конкрет, реаль әйбер кебек карау процессы; әйберләштерү.",
                                "examples": [
                                        "Базар көчләрен реификацияләү алар артындагы кеше карарларын яшерә."
                                ]
                        }
                ]
        },
        {
                "word": "диалектика",
                "level": "proficiency",
                "theme": "meta_argument_deconstruction_C2",
                "emoji": "⚖️",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Каршылык һәм чишелешне үз эченә алган аргументлау ысулы.",
                                "examples": [
                                        "Ирек һәм куркынычсызлык арасындагы диалектика либераль фикерне билгели."
                                ]
                        }
                ]
        },
        {
                "word": "эвристика",
                "level": "proficiency",
                "theme": "epistemology_knowledge_C2",
                "emoji": "💡",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Гарантияләнгән исбатлауга түгел, ә тәҗрибәгә нигезләнгән проблема чишү ысулы.",
                                "examples": [
                                        "'Акча артыннан бар' - тикшерү журналистикасында файдалы эвристика."
                                ]
                        }
                ]
        },
        {
                "word": "апофения",
                "level": "proficiency",
                "theme": "epistemology_knowledge_C2",
                "emoji": "🕸️",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Бәйләнешсез нәрсәләр арасында мәгънәле бәйләнешләр күрү тенденциясе.",
                                "examples": [
                                        "Конспирологик фикерләү апофения белән этәрелә."
                                ]
                        }
                ]
        },
        {
                "word": "мотивлаштырылган когниция",
                "level": "proficiency",
                "theme": "epistemology_knowledge_C2",
                "emoji": "🧠",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "Теләкләрнең һәм хисләрнең фикерләүгә һәм ышанулар формалашуына йогынтысы.",
                                "examples": [
                                        "Мотивлаштырылган когниция кешеләрнең кирәкмәгән дәлилләргә ни өчен каршы торуларын аңлата."
                                ]
                        }
                ]
        },
        {
                "word": "проактив принцип",
                "level": "proficiency",
                "theme": "ethics_advanced_C2",
                "emoji": "🚀",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "Хәрәкәтсезлек куркынычларын хәрәкәт куркынычлары белән чагыштырырга кирәк дигән караш.",
                                "examples": [
                                        "Трансгуманистлар еш кына проактив принципны искә төшерәләр."
                                ]
                        }
                ]
        },
        {
                "word": "саклык принцибы",
                "level": "proficiency",
                "theme": "ethics_advanced_C2",
                "emoji": "🛡️",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "Билгесез, әмма зыянлы булырга мөмкин нәтиҗәләре булган хәрәкәтләрдән качарга кирәк дигән караш.",
                                "examples": [
                                        "Экологик хокук еш кына саклык принцибын куллана."
                                ]
                        }
                ]
        },
        {
                "word": "либераль нейтралитет",
                "level": "proficiency",
                "theme": "political_theory_C2",
                "emoji": "⚖️",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "Дәүләт яхшы тормышның бернинди конкрет күренешенә дә өстенлек бирергә тиеш түгел дигән либераль принцип.",
                                "examples": [
                                        "Тәнкыйтьчеләр либераль нейтралитетның үзе дә конкрет мораль позиция дип бәхәсләшәләр."
                                ]
                        }
                ]
        },
        {
                "word": "пронатализм",
                "level": "proficiency",
                "theme": "political_theory_C2",
                "emoji": "👶",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Кешеләрне күбрәк бала табарга этәрүче политика яки идеология.",
                                "examples": [
                                        "Ул гаилә салым политикасына салынган пронаталистик фаразларны тәнкыйтьләде."
                                ]
                        }
                ]
        },
        {
                "word": "сублимация",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "emoji": "🎨",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Примитив импульсны социаль яктан кабул ителерлек эшчәнлеккә юнәлтү.",
                                "examples": [
                                        "Сәнгать күптәннән сублимация формасы буларак аңлатыла."
                                ]
                        }
                ]
        },
        {
                "word": "жуиссанс",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "emoji": "🔥",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Психоаналитик теориядә, чиктән тыш яки транссгрессив ләззәт формасы.",
                                "examples": [
                                        "Жижек идеологик бәйләнешне аңлату өчен жуиссанс төшенчәсен куллана."
                                ]
                        }
                ]
        },
        {
                "word": "танатос",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "emoji": "💀",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Фрейд теориясендә, үлемгә омтылыш; үз-үзеңне юк итү инстинкты.",
                                "examples": [
                                        "Роман эрос һәм танатос арасындагы киеренкелекне өйрәнә."
                                ]
                        }
                ]
        },
        {
                "word": "батос",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "emoji": "📉",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Югарыдан түбәнгә көтмәгәндә, күңел кайтаргыч күчеш.",
                                "examples": [
                                        "Сөйләм хәлиткеч мизгелдә батоска төште."
                                ]
                        }
                ]
        },
        {
                "word": "апофазис",
                "level": "proficiency",
                "theme": "rhetoric_persuasion_C2",
                "emoji": "🤫",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Бернәрсә турында әйтмәскә вәгъдә биреп, аңа игътибарны җәлеп итү риторик алымы.",
                                "examples": [
                                        "'Мин аның җинаять эшен искә алмыйм' - классик апофазис."
                                ]
                        }
                ]
        },
        {
                "word": "паралепсис",
                "level": "proficiency",
                "theme": "rhetoric_persuasion_C2",
                "emoji": "🙊",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Апофазисның тагын бер исеме.",
                                "examples": [
                                        "Политик риторика еш кына паралепсиска таяна."
                                ]
                        }
                ]
        },
        {
                "word": "лиминаль киңлек",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🚪",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "Ике яшәеш халәте арасындагы күчеш фазасы яки бусага мизгеле.",
                                "examples": [
                                        "Урта яшь яшьлек һәм картлык арасындагы лиминаль киңлек буларак аңлатыла ала."
                                ]
                        }
                ]
        },
        {
                "word": "хиазм",
                "level": "proficiency",
                "theme": "rhetoric_persuasion_C2",
                "emoji": "❌",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Риторик алым, анда икенче өлеш беренче өлешнең киресе булып тора.",
                                "examples": [
                                        "'Илең синең өчен нәрсә итә ала дип сорама' хиазм куллана."
                                ]
                        }
                ]
        },
        {
                "word": "шибболет",
                "level": "proficiency",
                "theme": "linguistics_theory_C2",
                "emoji": "🔑",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Билгеле бер төркем әгъзаларын ачыклау өчен кулланыла торган гадәт яки гыйбарә.",
                                "examples": [
                                        "'Хезмәт сөюче гаиләләр' политик шибболетка әйләнде."
                                ]
                        }
                ]
        }
];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();