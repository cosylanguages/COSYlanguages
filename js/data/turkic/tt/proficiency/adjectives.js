// TODO: verify level classification
(function() {
    const lang = "tt";
    const data = [
    {
        "word": "фәнնәрара",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧪",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ике яки күбрәк фәнни тармакны берләштерүче.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_001",
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
                "text": "Текстларны яки мәгънәләрне аңлату белән бәйле.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_002",
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
                "text": "Шул ук нәрсәне башка сүзләр белән кабатлаучы.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_003",
        "transcription": ""
    },
    {
        "word": "күпмәгънәле",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔠",
        "form": "adjective",
        "definitions": [
            {
                "text": "Берничә мәгънәгә ия булган.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_004",
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
                "text": "Төгәл исбатлауга түгел, ә тәҗрибәгә нигезләнгән ысул.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_psychology_001",
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
                "text": "Колониаль чордан соңгы вакытка яки мираска бәйле.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_social_001",
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
                "text": "Берничә көч үзәге булган дөнья тәртибе.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_social_002",
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
                "text": "Күп төрле илләр һәм мәдәниятләр белән таныш булган.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_social_003",
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
                "text": "Үз-үзенә генә соклану белән бәйле.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_psychology_002",
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
                "text": "Кабул ителгән догмаларга каршы килүче.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_005",
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
                "text": "Нәрсәнеңдер эчендә булган, тышкы булмаган.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_006",
        "transcription": ""
    },
    {
        "word": "кискен",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⏱️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Көтмәгәндә килеп чыккан; тупас яки кискен.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_007",
        "transcription": ""
    },
    {
        "word": "аңлаешсыз",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🧐",
        "form": "adjective",
        "definitions": [
            {
                "text": "Аңлау өчен авыр; катлаулы яки ачык булмаган.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_psychology_003",
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
                "text": "Искергән; үткән заманга караган.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_time_001",
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
                "text": "Нәрсәгәдер турыдан-туры каршы булган.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_008",
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
                "text": "Азчылыкка гына билгеле; серле.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_psychology_004",
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
                "text": "Типик булмаган; гадәти булмаган.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_009",
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
                "text": "Ике өлештән торган; дихотомиягә нигезләнгән.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_010",
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
                "text": "Абсолют; бернинди искәрмәләрсез әйтелгән.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_011",
        "transcription": ""
    },
    {
        "word": "сак",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛡️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Сак булучы, барлык шартларны исәпкә алучы.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_social_004",
        "transcription": ""
    },
    {
        "word": "яшерен",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🕵️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ачыктан-ачык танылмаган; серле.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_social_005",
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
                "text": "Каршылыклар аша фикер алышуга караган.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_012",
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
                "text": "Киң таралышлы; ачыклыгы булмаган.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_013",
        "transcription": ""
    },
    {
        "word": "тотып булмый торган",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🌬️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Табу яки ирешү өчен авыр булган.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_psychology_005",
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
                "text": "Тар кешеләр төркеме өчен генә аңлаешлы.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_psychology_006",
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
                "text": "Ялгыш фикерләргә нигезләнгән.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_014",
        "transcription": ""
    },
    {
        "word": "үзгәрмәс",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧱",
        "form": "adjective",
        "definitions": [
            {
                "text": "Үзгәртелә алмый торган; даими.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_015",
        "transcription": ""
    },
    {
        "word": "тарафсыз",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Бер якка да өстенлек бирмәүче; гадел.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_social_006",
        "transcription": ""
    },
    {
        "word": "өстәмә",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🍃",
        "form": "adjective",
        "definitions": [
            {
                "text": "Төп максат булмаган, читтәге нәрсә.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_016",
        "transcription": ""
    },
    {
        "word": "хас булган",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚛️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Нәрсәнеңдер эчке, табигый сыйфаты.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_017",
        "transcription": ""
    },
    {
        "word": "кабатланмас",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "🌟",
        "form": "adjective",
        "definitions": [
            {
                "text": "Күчереп булмый торган дәрәҗәдә яхшы яки үзенчәлекле.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_art_culture_001",
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
                "text": "Акрынлап зыян китерә торган.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_social_007",
        "transcription": ""
    },
    {
        "word": "килешмәс",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚫",
        "form": "adjective",
        "definitions": [
            {
                "text": "Берләштерү яки килештерү мөмкин булмаган.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_018",
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
                "text": "Күчеш чорына яки арадагы халәткә караган.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_019",
        "transcription": ""
    },
    {
        "word": "төрле-төрле",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔢",
        "form": "adjective",
        "definitions": [
            {
                "text": "Күп санлы һәм төрле.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_020",
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
                "text": "Ачык булмаган; төгәл билгеләнмәгән.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_psychology_007",
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
                "text": "Нормага караган; ничек булырга тиешлеген күрсәтүче.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_social_008",
        "transcription": ""
    },
    {
        "word": "төсмерле",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌗",
        "form": "adjective",
        "definitions": [
            {
                "text": "Нечкә аермаларны күрсәтүче; катлаулы.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_021",
        "transcription": ""
    },
    {
        "word": "туры булмаган",
        "level": "proficiency",
        "theme": "language",
        "emoji": "↗️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Турадан-тура булмаган; читләтелгән.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_022",
        "transcription": ""
    },
    {
        "word": "ачык булмаган",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌑",
        "form": "adjective",
        "definitions": [
            {
                "text": "Аңлау өчен авыр; үтә күренмәле булмаган.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_023",
        "transcription": ""
    },
    {
        "word": "ялган",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🎭",
        "form": "adjective",
        "definitions": [
            {
                "text": "Чын булып күренгән, әмма чын булмаган.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_024",
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
                "text": "Үз-үзенә каршы килгән, әмма хакыйкатьне эченә алган.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_025",
        "transcription": ""
    },
    {
        "word": "киң таралган",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌊",
        "form": "adjective",
        "definitions": [
            {
                "text": "Һәркайда булган; гомум кабул ителгән.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_time_002",
        "transcription": ""
    },
    {
        "word": "поляризацияләүче",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🧲",
        "form": "adjective",
        "definitions": [
            {
                "text": "Кешеләрне каршы якларга бүлүче.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_social_009",
        "transcription": ""
    },
    {
        "word": "тотрыксыз",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧗",
        "form": "adjective",
        "definitions": [
            {
                "text": "Куркынычсыз булмаган; очраклылыкка бәйле.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_026",
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
                "text": "Ничек эшләргә кирәклеген әйтүче; кагыйдәләр куючы.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_027",
        "transcription": ""
    },
    {
        "word": "сузылган",
        "level": "proficiency",
        "theme": "time",
        "emoji": "⌛",
        "form": "adjective",
        "definitions": [
            {
                "text": "Көтелгәннән озаграк дәвам итүче.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_time_003",
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
                "text": "Катлаулы нәрсәне артык гадиләштерүче.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_028",
        "transcription": ""
    },
    {
        "word": "нигез салучы",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌱",
        "form": "adjective",
        "definitions": [
            {
                "text": "Бик мөһим һәм йогынты ясаучы.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_time_004",
        "transcription": ""
    },
    {
        "word": "ялган сылтаулы",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤥",
        "form": "adjective",
        "definitions": [
            {
                "text": "Дөрес булып күренгән, әмма чынлыкта ялган.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_029",
        "transcription": ""
    },
    {
        "word": "уйдырма",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤡",
        "form": "adjective",
        "definitions": [
            {
                "text": "Чын булмаган; ялган фикерләргә нигезләнгән.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_030",
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
                "text": "Системаны какшату өчен юнәлтелгән.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_social_010",
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
                "text": "Сүзсез дә аңлаешлы булган.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_031",
        "transcription": ""
    },
    {
        "word": "йомшак",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🕸️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Бик көчсез яки бәхәсле; нык булмаган.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_032",
        "transcription": ""
    },
    {
        "word": "үткенче",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌅",
        "form": "adjective",
        "definitions": [
            {
                "text": "Даими булмаган; тиз уза торган.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_time_005",
        "transcription": ""
    },
    {
        "word": "һәркайдагы",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌍",
        "form": "adjective",
        "definitions": [
            {
                "text": "Һәркайда очрый торган; бик киң таралган.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_time_006",
        "transcription": ""
    },
    {
        "word": "бермәгънәле",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📢",
        "form": "adjective",
        "definitions": [
            {
                "text": "Шөбһә калдырмый торган; тулысынча ачык.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_033",
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
                "text": "Элек беркайчан да булмаган.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_time_007",
        "transcription": ""
    },
    {
        "word": "нигезсез",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🏗️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Яклау яки исбатлау мөмкин булмаган.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_034",
        "transcription": ""
    },
    {
        "word": "айкашлы",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📦",
        "form": "adjective",
        "definitions": [
            {
                "text": "Зурлыгы яки катлаулылыгы аркасында идарә итү авыр булган.",
                "examples": []
            }
        ],
        "lang": "tt",
        "id": "tt_proficiency_language_035",
        "transcription": ""
    }
];

    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
