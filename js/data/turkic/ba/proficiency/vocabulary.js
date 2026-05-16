(function() {
    const lang = "ba";
    const data = [
        {
                "word": "апория",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🤔",
                "form": "noun",
                "definitions": [
                        {
                                "text": "Аргументтағы ҡаршылыҡтарҙан килеп сыҡҡан аптырау йәки ҡыйынлыҡ хәле.",
                                "examples": [
                                        "Диалог апория менән тамамлана, бер ниндәй ҡәнәғәтләндерерлек яуапҡа ирешелмәй."
                                ]
                        }
                ]
        },
        {
                "word": "телеология",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🎯",
                "form": "noun",
                "definitions": [
                        {
                                "text": "Тәбиғәттә йәки тарихта маҡсатлылыҡты өйрәнеүсе философик тармаҡ.",
                                "examples": [
                                        "Аның аргументы кешелек прогресына телеологик ҡарашҡа нигеҙләнгән."
                                ]
                        }
                ]
        },
        {
                "word": "онтология",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "👻",
                "form": "noun",
                "definitions": [
                        {
                                "text": "Булыу йәки йәшәү тәбиғәте менән шөғөлләнеүсе философик тармаҡ.",
                                "examples": [
                                        "Аның онтологик йөкләмәләре аның бөтөн аргументын формалаштыра."
                                ]
                        }
                ]
        },
        {
                "word": "реификация",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🧱",
                "form": "noun",
                "definitions": [
                        {
                                "text": "Абстракт нәмәне конкрет, реаль әйбер кеүек ҡарау процессы; әйберләштереү.",
                                "examples": [
                                        "Баҙар көстәрен реификациялау алар артындағы кеше ҡарарҙарын йәшерә."
                                ]
                        }
                ]
        },
        {
                "word": "диалектика",
                "level": "proficiency",
                "theme": "meta_argument_deconstruction_C2",
                "emoji": "⚖️",
                "form": "noun",
                "definitions": [
                        {
                                "text": "Ҡаршылыҡ һәм чишелеште үҙ эсенә алған аргументлау ысулы.",
                                "examples": [
                                        "Ирек һәм куркынысһыҙлыҡ араһындағы диалектика либераль фикерҙе билдәләй."
                                ]
                        }
                ]
        },
        {
                "word": "эвристика",
                "level": "proficiency",
                "theme": "epistemology_knowledge_C2",
                "emoji": "💡",
                "form": "noun",
                "definitions": [
                        {
                                "text": "Гарантияланған иҫбатлауға түгел, ә тәжрибәгә нигеҙләнгән проблема чишеү ысулы.",
                                "examples": [
                                        "'Аҡса артынан бар' - тикшереү журналистикаһында файҙалы эвристика."
                                ]
                        }
                ]
        },
        {
                "word": "апофения",
                "level": "proficiency",
                "theme": "epistemology_knowledge_C2",
                "emoji": "🕸️",
                "form": "noun",
                "definitions": [
                        {
                                "text": "Бәйләнешһеҙ нәмәләр араһында мәғәнәле бәйләнештәр күреү тенденцияһы.",
                                "examples": [
                                        "Конспирологик фикерләү апофения менән этәрелә."
                                ]
                        }
                ]
        },
        {
                "word": "мотивлаштырылған когниция",
                "level": "proficiency",
                "theme": "epistemology_knowledge_C2",
                "emoji": "🧠",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "Теләктәрҙең һәм хистәрҙең фикерләүгә һәм ышаныуҙар формалашыуына йоғонтоһо.",
                                "examples": [
                                        "Мотивлаштырылған когниция кешеләрҙең ни өсөн кәрәкмәгән дәлилдәргә ҡаршы тороуҙарын аңлата."
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
                                "text": "Хәрәкәтһеҙлек куркыныслыҡтарын хәрәкәт куркыныслыҡтары менән сағыштырырға кәрәк тигән ҡараш.",
                                "examples": [
                                        "Трансгуманистар еш ҡына проактив принципты иҫкә төшөрәләр."
                                ]
                        }
                ]
        },
        {
                "word": "саҡлыҡ принцибы",
                "level": "proficiency",
                "theme": "ethics_advanced_C2",
                "emoji": "🛡️",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "Билдәһеҙ, әмма зыянлы булырға мөмкин нәтижәләре булған хәрәкәттәрҙән ҡасырға кәрәк тигән ҡараш.",
                                "examples": [
                                        "Экологик хокук еш ҡына саҡлыҡ принцибын ҡуллана."
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
                                "text": "Дәүләт яҡшы тормоштоң бер ниндәй конкрет күренешенә лә өҫтөнлөк бирергә тейеш түгел тигән либераль принцип.",
                                "examples": [
                                        "Тәнҡитселәр либераль нейтралитеттың үҙе лә конкрет мораль позиция тип бәхәсләшәләр."
                                ]
                        }
                ]
        },
        {
                "word": "пронатализм",
                "level": "proficiency",
                "theme": "political_theory_C2",
                "emoji": "👶",
                "form": "noun",
                "definitions": [
                        {
                                "text": "Кешеләрҙе күберәк бала табырға этәреүсе политика йәки идеология.",
                                "examples": [
                                        "Ул гаилә һалым политикаһына һалынған пронаталистик фаразҙарҙы тәнҡитләне."
                                ]
                        }
                ]
        },
        {
                "word": "сублимация",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "emoji": "🎨",
                "form": "noun",
                "definitions": [
                        {
                                "text": "Примитив импульсты социаль яҡтан ҡабул ителерлек эшсәнлеккә йүнәлтеү.",
                                "examples": [
                                        "Сәнғәт күптәнән сублимация формаһы булараҡ аңлатыла."
                                ]
                        }
                ]
        },
        {
                "word": "жуиссанс",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "emoji": "🔥",
                "form": "noun",
                "definitions": [
                        {
                                "text": "Психоаналитик теорияла, чиктән тыш йәки транссгрессив ләззәт формаһы.",
                                "examples": [
                                        "Жижек идеологик бәйләнеште аңлатыу өсөн жуиссанс төшенсәһен ҡуллана."
                                ]
                        }
                ]
        },
        {
                "word": "танатос",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "emoji": "💀",
                "form": "noun",
                "definitions": [
                        {
                                "text": "Фрейд теорияһында, үлемгә омтылыш; үз-үҙеңде юҡ итеү инстинкты.",
                                "examples": [
                                        "Роман эрос һәм танатос араһындағы киеренкелекте өйрәнә."
                                ]
                        }
                ]
        },
        {
                "word": "батос",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "emoji": "📉",
                "form": "noun",
                "definitions": [
                        {
                                "text": "Юғарынан түбәнгә көтмәгәндә, күңел ҡайтарғыс күсеш.",
                                "examples": [
                                        "Һөйләм хәлиткеч миҙгелдә батосҡа төштө."
                                ]
                        }
                ]
        },
        {
                "word": "апофазис",
                "level": "proficiency",
                "theme": "rhetoric_persuasion_C2",
                "emoji": "🤫",
                "form": "noun",
                "definitions": [
                        {
                                "text": "Бернәмә тураһында әйтмәҫкә вәғәҙә биреп, аңа иғтибарҙы йәлеп итеү риторик алымы.",
                                "examples": [
                                        "'Мин аның йинаять эшен иҫкә алмайым' - классик апофазис."
                                ]
                        }
                ]
        },
        {
                "word": "паралепсис",
                "level": "proficiency",
                "theme": "rhetoric_persuasion_C2",
                "emoji": "🙊",
                "form": "noun",
                "definitions": [
                        {
                                "text": "Апофазистың тағын бер исеме.",
                                "examples": [
                                        "Политик риторика еш ҡына паралепсисҡа таяна."
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
                                "text": "Ике йәшәйеш халәте араһындағы күчеш фазаһы йәки буһаға миҙгеле.",
                                "examples": [
                                        "Урта йәш йәшлек һәм ҡартлыҡ араһындағы лиминаль киңлек булараҡ аңлатыла ала."
                                ]
                        }
                ]
        },
        {
                "word": "хиазм",
                "level": "proficiency",
                "theme": "rhetoric_persuasion_C2",
                "emoji": "❌",
                "form": "noun",
                "definitions": [
                        {
                                "text": "Риторик алым, анда икенче өлөш беренче өлөштөң киреһе булып тора.",
                                "examples": [
                                        "'Һеҙҙең илегеҙ һеҙҙең өсөн нәмә итә ала тип һорама' хиазм ҡуллана."
                                ]
                        }
                ]
        },
        {
                "word": "шибболет",
                "level": "proficiency",
                "theme": "linguistics_theory_C2",
                "emoji": "🔑",
                "form": "noun",
                "definitions": [
                        {
                                "text": "Билдәле бер төркөм әғзаларын асыҡлау өсөн ҡулланыла торған гаҙәт йәки гыйбарә.",
                                "examples": [
                                        "'Хеҙмәт һөйөүсе ғаиләләр' политик шибболетҡа әйләнде."
                                ]
                        }
                ]
        }
];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();