// TODO: verify level classification
(function() {
    const lang = "tt";
    const data = [
        {
            "word": "фәнնәрара",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🧪",
            "form": "adjective",
            "definitions": [{ "text": "Ике яки күбрәк фәнни тармакны берләштерүче." }]
        },
        {
            "word": "герменевтик",
            "level": "proficiency",
            "theme": "philosophy_language_C2",
            "emoji": "📜",
            "form": "adjective",
            "definitions": [{ "text": "Текстларны яки мәгънәләрне аңлату белән бәйле." }]
        },
        {
            "word": "тавтологик",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🔄",
            "form": "adjective",
            "definitions": [{ "text": "Шул ук нәрсәне башка сүзләр белән кабатлаучы." }]
        },
        {
            "word": "күпмәгънәле",
            "level": "proficiency",
            "theme": "linguistics_theory_C2",
            "emoji": "🔠",
            "form": "adjective",
            "definitions": [{ "text": "Берничә мәгънәгә ия булган." }]
        },
        {
            "word": "эвристик",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "💡",
            "form": "adjective",
            "definitions": [{ "text": "Төгәл исбатлауга түгел, ә тәҗрибәгә нигезләнгән ысул." }]
        },
        {
            "word": "постколониаль",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🌍",
            "form": "adjective",
            "definitions": [{ "text": "Колониаль чордан соңгы вакытка яки мираска бәйле." }]
        },
        {
            "word": "күпполярлы",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🌐",
            "form": "adjective",
            "definitions": [{ "text": "Берничә көч үзәге булган дөнья тәртибе." }]
        },
        {
            "word": "космополитик",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🏙️",
            "form": "adjective",
            "definitions": [{ "text": "Күп төрле илләр һәм мәдәниятләр белән таныш булган." }]
        },
        {
            "word": "нарциссик",
            "level": "proficiency",
            "theme": "psychoanalysis_unconscious_C2",
            "emoji": "🪞",
            "form": "adjective",
            "definitions": [{ "text": "Үз-үзенә генә соклану белән бәйле." }]
        },
        {
            "word": "гетеродокс",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🚩",
            "form": "adjective",
            "definitions": [{ "text": "Кабул ителгән догмаларга каршы килүче." }]
        },
        {
            "word": "имманент",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "⚛️",
            "form": "adjective",
            "definitions": [{ "text": "Нәрсәнеңдер эчендә булган, тышкы булмаган." }]
        },
        {
            "word": "кискен",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "⏱️",
            "form": "adjective",
            "definitions": [{ "text": "Көтмәгәндә килеп чыккан; тупас яки кискен." }]
        },
        {
            "word": "аңлаешсыз",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🧐",
            "form": "adjective",
            "definitions": [{ "text": "Аңлау өчен авыр; катлаулы яки ачык булмаган." }]
        },
        {
            "word": "анахроник",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "⌛",
            "form": "adjective",
            "definitions": [{ "text": "Искергән; үткән заманга караган." }]
        },
        {
            "word": "антитетик",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [{ "text": "Нәрсәгәдер турыдан-туры каршы булган." }]
        },
        {
            "word": "арканлы",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🔮",
            "form": "adjective",
            "definitions": [{ "text": "Азчылыкка гына билгеле; серле." }]
        },
        {
            "word": "атипик",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🦄",
            "form": "adjective",
            "definitions": [{ "text": "Типик булмаган; гадәти булмаган." }]
        },
        {
            "word": "бинар",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🔢",
            "form": "adjective",
            "definitions": [{ "text": "Ике өлештән торган; дихотомиягә нигезләнгән." }]
        },
        {
            "word": "категорик",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "❗",
            "form": "adjective",
            "definitions": [{ "text": "Абсолют; бернинди искәрмәләрсез әйтелгән." }]
        },
        {
            "word": "сак",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "🛡️",
            "form": "adjective",
            "definitions": [{ "text": "Сак булучы, барлык шартларны исәпкә алучы." }]
        },
        {
            "word": "яшерен",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🕵️",
            "form": "adjective",
            "definitions": [{ "text": "Ачыктан-ачык танылмаган; серле." }]
        },
        {
            "word": "диалектик",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [{ "text": "Каршылыклар аша фикер алышуга караган." }]
        },
        {
            "word": "диффуз",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌫️",
            "form": "adjective",
            "definitions": [{ "text": "Киң таралышлы; ачыклыгы булмаган." }]
        },
        {
            "word": "тотып булмый торган",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🌬️",
            "form": "adjective",
            "definitions": [{ "text": "Табу яки ирешү өчен авыр булган." }]
        },
        {
            "word": "эзотерик",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🗝️",
            "form": "adjective",
            "definitions": [{ "text": "Тар кешеләр төркеме өчен генә аңлаешлы." }]
        },
        {
            "word": "хаталы",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "❌",
            "form": "adjective",
            "definitions": [{ "text": "Ялгыш фикерләргә нигезләнгән." }]
        },
        {
            "word": "үзгәрмәс",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🧱",
            "form": "adjective",
            "definitions": [{ "text": "Үзгәртелә алмый торган; даими." }]
        },
        {
            "word": "тарафсыз",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [{ "text": "Бер якка да өстенлек бирмәүче; гадел." }]
        },
        {
            "word": "өстәмә",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🍃",
            "form": "adjective",
            "definitions": [{ "text": "Төп максат булмаган, читтәге нәрсә." }]
        },
        {
            "word": "хас булган",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "⚛️",
            "form": "adjective",
            "definitions": [{ "text": "Нәрсәнеңдер эчке, табигый сыйфаты." }]
        },
        {
            "word": "кабатланмас",
            "level": "proficiency",
            "theme": "aesthetics_criticism_C2",
            "emoji": "🌟",
            "form": "adjective",
            "definitions": [{ "text": "Күчереп булмый торган дәрәҗәдә яхшы яки үзенчәлекле." }]
        },
        {
            "word": "хәйләкәр",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "🐍",
            "form": "adjective",
            "definitions": [{ "text": "Акрынлап зыян китерә торган." }]
        },
        {
            "word": "килешмәс",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🚫",
            "form": "adjective",
            "definitions": [{ "text": "Берләштерү яки килештерү мөмкин булмаган." }]
        },
        {
            "word": "лиминаль",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🚪",
            "form": "adjective",
            "definitions": [{ "text": "Күчеш чорына яки арадагы халәткә караган." }]
        },
        {
            "word": "төрле-төрле",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🔢",
            "form": "adjective",
            "definitions": [{ "text": "Күп санлы һәм төрле." }]
        },
        {
            "word": "томанлы",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "☁️",
            "form": "adjective",
            "definitions": [{ "text": "Ачык булмаган; төгәл билгеләнмәгән." }]
        },
        {
            "word": "норматив",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "📏",
            "form": "adjective",
            "definitions": [{ "text": "Нормага караган; ничек булырга тиешлеген күрсәтүче." }]
        },
        {
            "word": "төсмерле",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌗",
            "form": "adjective",
            "definitions": [{ "text": "Нечкә аермаларны күрсәтүче; катлаулы." }]
        },
        {
            "word": "туры булмаган",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "↗️",
            "form": "adjective",
            "definitions": [{ "text": "Турадан-тура булмаган; читләтелгән." }]
        },
        {
            "word": "ачык булмаган",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌑",
            "form": "adjective",
            "definitions": [{ "text": "Аңлау өчен авыр; үтә күренмәле булмаган." }]
        },
        {
            "word": "ялган",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🎭",
            "form": "adjective",
            "definitions": [{ "text": "Чын булып күренгән, әмма чын булмаган." }]
        },
        {
            "word": "парадоксаль",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🔄",
            "form": "adjective",
            "definitions": [{ "text": "Үз-үзенә каршы килгән, әмма хакыйкатьне эченә алган." }]
        },
        {
            "word": "киң таралган",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌊",
            "form": "adjective",
            "definitions": [{ "text": "Һәркайда булган; гомум кабул ителгән." }]
        },
        {
            "word": "поляризацияләүче",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🧲",
            "form": "adjective",
            "definitions": [{ "text": "Кешеләрне каршы якларга бүлүче." }]
        },
        {
            "word": "тотрыксыз",
            "level": "proficiency",
            "theme": "ontology_existence_C2",
            "emoji": "🧗",
            "form": "adjective",
            "definitions": [{ "text": "Куркынычсыз булмаган; очраклылыкка бәйле." }]
        },
        {
            "word": "прескриптив",
            "level": "proficiency",
            "theme": "linguistics_theory_C2",
            "emoji": "📜",
            "form": "adjective",
            "definitions": [{ "text": "Ничек эшләргә кирәклеген әйтүче; кагыйдәләр куючы." }]
        },
        {
            "word": "сузылган",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "⌛",
            "form": "adjective",
            "definitions": [{ "text": "Көтелгәннән озаграк дәвам итүче." }]
        },
        {
            "word": "редуктив",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "📉",
            "form": "adjective",
            "definitions": [{ "text": "Катлаулы нәрсәне артык гадиләштерүче." }]
        },
        {
            "word": "нигез салучы",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌱",
            "form": "adjective",
            "definitions": [{ "text": "Бик мөһим һәм йогынты ясаучы." }]
        },
        {
            "word": "ялган сылтаулы",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🤥",
            "form": "adjective",
            "definitions": [{ "text": "Дөрес булып күренгән, әмма чынлыкта ялган." }]
        },
        {
            "word": "уйдырма",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🤡",
            "form": "adjective",
            "definitions": [{ "text": "Чын булмаган; ялган фикерләргә нигезләнгән." }]
        },
        {
            "word": "җимергеч",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "💣",
            "form": "adjective",
            "definitions": [{ "text": "Системаны какшату өчен юнәлтелгән." }]
        },
        {
            "word": "әйтелмәгән",
            "level": "proficiency",
            "theme": "philosophy_language_C2",
            "emoji": "🤫",
            "form": "adjective",
            "definitions": [{ "text": "Сүзсез дә аңлаешлы булган." }]
        },
        {
            "word": "йомшак",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🕸️",
            "form": "adjective",
            "definitions": [{ "text": "Бик көчсез яки бәхәсле; нык булмаган." }]
        },
        {
            "word": "үткенче",
            "level": "proficiency",
            "theme": "mortality_time_C2",
            "emoji": "🌅",
            "form": "adjective",
            "definitions": [{ "text": "Даими булмаган; тиз уза торган." }]
        },
        {
            "word": "һәркайдагы",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌍",
            "form": "adjective",
            "definitions": [{ "text": "Һәркайда очрый торган; бик киң таралган." }]
        },
        {
            "word": "бермәгънәле",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "📢",
            "form": "adjective",
            "definitions": [{ "text": "Шөбһә калдырмый торган; тулысынча ачык." }]
        },
        {
            "word": "күрелмәгән",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🚀",
            "form": "adjective",
            "definitions": [{ "text": "Элек беркайчан да булмаган." }]
        },
        {
            "word": "нигезсез",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🏗️",
            "form": "adjective",
            "definitions": [{ "text": "Яклау яки исбатлау мөмкин булмаган." }]
        },
        {
            "word": "айкашлы",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "📦",
            "form": "adjective",
            "definitions": [{ "text": "Зурлыгы яки катлаулылыгы аркасында идарә итү авыр булган." }]
        }
    ];

    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
