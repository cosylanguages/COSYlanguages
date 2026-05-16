(function() {
    const lang = "ba";
    const data = [
        {
            "word": "фәндәр-ара",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🧪",
            "form": "adjective",
            "definitions": [{ "text": "Ике йәки күберәк фәнни тармаҡты берләштереүсе." }]
        },
        {
            "word": "герменевтик",
            "level": "proficiency",
            "theme": "philosophy_language_C2",
            "emoji": "📜",
            "form": "adjective",
            "definitions": [{ "text": "Текстарҙы йәки мәғәнәләрҙе аңлатыу менән бәйле." }]
        },
        {
            "word": "тавтологик",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🔄",
            "form": "adjective",
            "definitions": [{ "text": "Шул уҡ нәрсәне башҡа һүҙҙәр менән ҡабатлаусы." }]
        },
        {
            "word": "күпмәғәнәле",
            "level": "proficiency",
            "theme": "linguistics_theory_C2",
            "emoji": "🔠",
            "form": "adjective",
            "definitions": [{ "text": "Бернисә мәғәнәгә эйә булған." }]
        },
        {
            "word": "эвристик",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "💡",
            "form": "adjective",
            "definitions": [{ "text": "Төгәл иҫбатлауға түгел, ә тәжрибәгә нигеҙләнгән ысул." }]
        },
        {
            "word": "постколониаль",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🌍",
            "form": "adjective",
            "definitions": [{ "text": "Колониаль чорҙан һуңғы ваҡытҡа йәки мираҫҡа бәйле." }]
        },
        {
            "word": "күпполярлы",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🌐",
            "form": "adjective",
            "definitions": [{ "text": "Бернисә көс үҙәге булған донъя тәртибе." }]
        },
        {
            "word": "космополитик",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🏙️",
            "form": "adjective",
            "definitions": [{ "text": "Күп төрлө илдәр һәм мәҙәниәттәр менән таныш булған." }]
        },
        {
            "word": "нарциссик",
            "level": "proficiency",
            "theme": "psychoanalysis_unconscious_C2",
            "emoji": "🪞",
            "form": "adjective",
            "definitions": [{ "text": "Үҙ-үҙенә генә һоҡланыу менән бәйле." }]
        },
        {
            "word": "гетеродокс",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🚩",
            "form": "adjective",
            "definitions": [{ "text": "Ҡабул ителгән догмаларға ҡаршы килеүсе." }]
        },
        {
            "word": "имманент",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "⚛️",
            "form": "adjective",
            "definitions": [{ "text": "Нәрсәнеңдер эсендә булған, тышҡы булмаған." }]
        },
        {
            "word": "киҫкен",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "⏱️",
            "form": "adjective",
            "definitions": [{ "text": "Көтмәгәндә килеп сыҡҡан; тупаҫ йәки киҫкен." }]
        },
        {
            "word": "аңлайышһыҙ",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🧐",
            "form": "adjective",
            "definitions": [{ "text": "Аңлау өсөн ауыр; ҡатмарлы йәки асыҡ булмаған." }]
        },
        {
            "word": "анахроник",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "⌛",
            "form": "adjective",
            "definitions": [{ "text": "Иҫкергән; үткән заманға ҡараған." }]
        },
        {
            "word": "антитетик",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [{ "text": "Нәмәгәлер турынан-туры ҡаршы булған." }]
        },
        {
            "word": "арканлы",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🔮",
            "form": "adjective",
            "definitions": [{ "text": "Аҙсылыҡҡа ғына билдәле; серле." }]
        },
        {
            "word": "атипик",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🦄",
            "form": "adjective",
            "definitions": [{ "text": "Типик булмаған; ғәҙәти булмаған." }]
        },
        {
            "word": "бинар",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🔢",
            "form": "adjective",
            "definitions": [{ "text": "Ике өлөштән торған; дихотомияға нигеҙләнгән." }]
        },
        {
            "word": "категорик",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "❗",
            "form": "adjective",
            "definitions": [{ "text": "Абсолют; бер ниндәй иҫкәрмәләрһеҙ әйтелгән." }]
        },
        {
            "word": "һаҡ",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "🛡️",
            "form": "adjective",
            "definitions": [{ "text": "Һаҡ булыусы, барлыҡ шарттарҙы иҫәпкә алыусы." }]
        },
        {
            "word": "йәшерен",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🕵️",
            "form": "adjective",
            "definitions": [{ "text": "Асыҡтан-асыҡ танылмаған; серле." }]
        },
        {
            "word": "диалектик",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [{ "text": "Ҡаршылыҡтар аша фекер алышыуға ҡараған." }]
        },
        {
            "word": "диффуз",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌫️",
            "form": "adjective",
            "definitions": [{ "text": "Киң таралышлы; асыҡлығы булмаған." }]
        },
        {
            "word": "тотоп булмай торған",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🌬️",
            "form": "adjective",
            "definitions": [{ "text": "Табыу йәки ирешеү өсөн ауыр булған." }]
        },
        {
            "word": "эзотерик",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🗝️",
            "form": "adjective",
            "definitions": [{ "text": "Тар кешеләр төркөмө өсөн генә аңлайышлы." }]
        },
        {
            "word": "хаталы",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "❌",
            "form": "adjective",
            "definitions": [{ "text": "Ялған фекерҙәргә нигеҙләнгән." }]
        },
        {
            "word": "үҙгәрмәҫ",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🧱",
            "form": "adjective",
            "definitions": [{ "text": "Үҙгәртелә алмай торған; даими." }]
        },
        {
            "word": "тарафһыҙ",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [{ "text": "Бер яҡҡа ла өҫтөнлөк бирмәүсе; ғәҙел." }]
        },
        {
            "word": "өҫтәмә",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🍃",
            "form": "adjective",
            "definitions": [{ "text": "Төп маҡсат булмаған, ситтәге нәмә." }]
        },
        {
            "word": "хас булған",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "⚛️",
            "form": "adjective",
            "definitions": [{ "text": "Нәмәнеңдер эске, тәбиғи сифаты." }]
        },
        {
            "word": "ҡабатланмаҫ",
            "level": "proficiency",
            "theme": "aesthetics_criticism_C2",
            "emoji": "🌟",
            "form": "adjective",
            "definitions": [{ "text": "Күсереп булмай торған дәрәҗәлә яҡшы йәки үҙенсәлекле." }]
        },
        {
            "word": "хәйләкәр",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "🐍",
            "form": "adjective",
            "definitions": [{ "text": "Аҡрынлап зыян килтерә торған." }]
        },
        {
            "word": "килешмәҫ",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🚫",
            "form": "adjective",
            "definitions": [{ "text": "Берләштереү йәки килештереү мөмкин булмаған." }]
        },
        {
            "word": "лиминаль",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🚪",
            "form": "adjective",
            "definitions": [{ "text": "Күсеү осорона йәки аралағы халәткә ҡараған." }]
        },
        {
            "word": "төрлө-төрлө",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🔢",
            "form": "adjective",
            "definitions": [{ "text": "Күп санлы һәм төрлө." }]
        },
        {
            "word": "томанлы",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "☁️",
            "form": "adjective",
            "definitions": [{ "text": "Асыҡ булмаған; төгәл билдәләнмәгән." }]
        },
        {
            "word": "норматив",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "📏",
            "form": "adjective",
            "definitions": [{ "text": "Нормаға ҡараған; ничек булырға тейешлеген күрһәтеүсе." }]
        },
        {
            "word": "төҫмәрле",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌗",
            "form": "adjective",
            "definitions": [{ "text": "Нескә айырмаларҙы күрһәтеүсе; ҡатмарлы." }]
        },
        {
            "word": "туры булмаған",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "↗️",
            "form": "adjective",
            "definitions": [{ "text": "Туранан-тура булмаған; ситләтелгән." }]
        },
        {
            "word": "асыҡ булмаған",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌑",
            "form": "adjective",
            "definitions": [{ "text": "Аңлау өсөн ауыр; үтә күренмәле булмаған." }]
        },
        {
            "word": "ялған",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🎭",
            "form": "adjective",
            "definitions": [{ "text": "Чын булып күренгән, әмма чын булмаған." }]
        },
        {
            "word": "парадоксаль",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🔄",
            "form": "adjective",
            "definitions": [{ "text": "Үҙ-үҙенә ҡаршы килгән, әмма хаҡиҡәтте эсенә алған." }]
        },
        {
            "word": "киң таралған",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌊",
            "form": "adjective",
            "definitions": [{ "text": "Һәрҡайҙа булған; гомум ҡабул ителгән." }]
        },
        {
            "word": "поляризациялаусы",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🧲",
            "form": "adjective",
            "definitions": [{ "text": "Кешеләрҙе ҡаршы яҡтарға бүлеүсе." }]
        },
        {
            "word": "тотрыҡһыҙ",
            "level": "proficiency",
            "theme": "ontology_existence_C2",
            "emoji": "🧗",
            "form": "adjective",
            "definitions": [{ "text": "Ҡурҡынысһыҙ булмаған; осраҡлылыҡҡа бәйле." }]
        },
        {
            "word": "прескриптив",
            "level": "proficiency",
            "theme": "linguistics_theory_C2",
            "emoji": "📜",
            "form": "adjective",
            "definitions": [{ "text": "Нисек эшләргә кәрәклеген әйтеүсе; ҡағиҙәләр ҡуйыусы." }]
        },
        {
            "word": "һуҙылған",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "⌛",
            "form": "adjective",
            "definitions": [{ "text": "Көтелгәндән оҙағыраҡ дауам итеүсе." }]
        },
        {
            "word": "редуктив",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "📉",
            "form": "adjective",
            "definitions": [{ "text": "Ҡатмарлы нәмәне артыҡ гадиләштереүсе." }]
        },
        {
            "word": "нигеҙ һалыусы",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌱",
            "form": "adjective",
            "definitions": [{ "text": "Бик мөһим һәм йоғонто яһаусы." }]
        },
        {
            "word": "ялған сылтаулы",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🤥",
            "form": "adjective",
            "definitions": [{ "text": "Дөрөҫ булып күренгән, әмма чынлыҡта ялған." }]
        },
        {
            "word": "уйҙырма",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🤡",
            "form": "adjective",
            "definitions": [{ "text": "Чын булмаған; ялған фекерҙәргә нигеҙләнгән." }]
        },
        {
            "word": "җимергеч",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "💣",
            "form": "adjective",
            "definitions": [{ "text": "Системаны ҡакшатыу өсөн йүнәлтелгән." }]
        },
        {
            "word": "әйтелмәгән",
            "level": "proficiency",
            "theme": "philosophy_language_C2",
            "emoji": "🤫",
            "form": "adjective",
            "definitions": [{ "text": "Һүҙҙеҙ ҙә аңлайышлы булған." }]
        },
        {
            "word": "йомшаҡ",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🕸️",
            "form": "adjective",
            "definitions": [{ "text": "Бик көсһөҙ йәки бәхәсле; ныҡ булмаған." }]
        },
        {
            "word": "үткенсе",
            "level": "proficiency",
            "theme": "mortality_time_C2",
            "emoji": "🌅",
            "form": "adjective",
            "definitions": [{ "text": "Даими булмаған; тиҙ уҙа торған." }]
        },
        {
            "word": "һәрҡайҙағы",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌍",
            "form": "adjective",
            "definitions": [{ "text": "Һәрҡайҙа осрай торған; бик киң таралған." }]
        },
        {
            "word": "бермәғәнәле",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "📢",
            "form": "adjective",
            "definitions": [{ "text": "Шөбһә ҡалдырмай торған; тулыһынса асыҡ." }]
        },
        {
            "word": "күрелмәгән",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🚀",
            "form": "adjective",
            "definitions": [{ "text": "Элек берҡайсан да булмаған." }]
        },
        {
            "word": "нигеҙһеҙ",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🏗️",
            "form": "adjective",
            "definitions": [{ "text": "Яҡлау йәки иҫбатлау мөмкин булмаған." }]
        },
        {
            "word": "айҡашлы",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "📦",
            "form": "adjective",
            "definitions": [{ "text": "Ҙурлығы йәки ҡатмарлылығы арҡаһында идара итеү ауыр булған." }]
        }
    ];

    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
