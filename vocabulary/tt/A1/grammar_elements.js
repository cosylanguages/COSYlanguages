(function() {
    const lang = "tt";
    const data = [
        {
            "id": "tt_starter_language_001",
            "word": "өчен",
            "form": "postposition",
            "definitions": [{ "text": "Берәр зат яки нәрсә файдасына, максаты белән.", "examples": ["Мин синең өчен килдем.", "Уку өчен китап кирәк."] }],
            "subtext": "postposition for/because of",
            "emoji": "🎁",
            "lang": "tt",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "tt_starter_language_002",
            "word": "белән",
            "form": "postposition",
            "definitions": [{ "text": "Бергәлекне, коралы яки ысулын белдерә.", "examples": ["Дус белән сөйләшү.", "Каләм белән язу."] }],
            "subtext": "postposition with",
            "emoji": "🤝",
            "lang": "tt",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "tt_starter_language_003",
            "word": "турында",
            "form": "postposition",
            "definitions": [{ "text": "Берәр шәхес яки тема турында сүз барганда.", "examples": ["Казан турында сөйләштек.", "Бу фильм турында беләсеңме?"] }],
            "subtext": "postposition about",
            "emoji": "💬",
            "lang": "tt",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "tt_starter_language_004",
            "word": "соң",
            "form": "postposition",
            "definitions": [{ "text": "Берәр вакыйгадан яки вакыттан соң.", "examples": ["Дәрестән соң очрашырбыз.", "Бер сәгатьтән соң киләм."] }],
            "subtext": "postposition after",
            "emoji": "⏱️",
            "lang": "tt",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "tt_starter_language_005",
            "word": "һәм",
            "form": "conjunction",
            "definitions": [{ "text": "Сүзләрне яки җөмләләрне тоташтыра.", "examples": ["Алма һәм икмәк.", "Ул укый һәм яза."] }],
            "subtext": "conjunction and",
            "emoji": "➕",
            "lang": "tt",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "tt_starter_language_006",
            "word": "амма",
            "form": "conjunction",
            "definitions": [{ "text": "Каршылыкны билгели.", "examples": ["Мин барырга теләдем, амма вакытым булмады."] }],
            "subtext": "conjunction but",
            "emoji": "❓",
            "lang": "tt",
            "level": "starter",
            "theme": "language",
            "sub_theme": null,
            "synonyms": ["ләкин", "мәгәр"]
        },
        {
            "id": "tt_starter_language_007",
            "word": "яки",
            "form": "conjunction",
            "definitions": [{ "text": "Сайлау мөмкинлеген белдерә.", "examples": ["Чәй яки кофе эчәсеңме?"] }],
            "subtext": "conjunction or",
            "emoji": "🔀",
            "lang": "tt",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "tt_starter_language_008",
            "word": "чөнки",
            "form": "conjunction",
            "definitions": [{ "text": "Сәбәпне аңлата.", "examples": ["Ул килмәде, чөнки авырый."] }],
            "subtext": "conjunction because",
            "emoji": "💡",
            "lang": "tt",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "tt_starter_language_009",
            "word": "бүген",
            "form": "adverb",
            "definitions": [{ "text": "Агымдагы көндә.", "examples": ["Бүген һава яхшы."] }],
            "subtext": "adverb today",
            "emoji": "📅",
            "lang": "tt",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "tt_starter_language_010",
            "word": "иртәгә",
            "form": "adverb",
            "definitions": [{ "text": "Бүгеннән соңгы көндә.", "examples": ["Иртәгә эшкә барабыз."] }],
            "subtext": "adverb tomorrow",
            "emoji": "⏭️",
            "lang": "tt",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "tt_starter_language_011",
            "word": "кичә",
            "form": "adverb",
            "definitions": [{ "text": "Бүгенгегә кадәр булган көндә.", "examples": ["Кичә яңгыр яуды."] }],
            "subtext": "adverb yesterday",
            "emoji": "⏮️",
            "lang": "tt",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "tt_starter_language_012",
            "word": "хәзер",
            "form": "adverb",
            "definitions": [{ "text": "Шушы мизгелдә.", "examples": ["Хәзер без дәрестә."] }],
            "subtext": "adverb now",
            "emoji": "⏱️",
            "lang": "tt",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "tt_starter_language_013",
            "word": "һәрвакыт",
            "form": "adverb",
            "definitions": [{ "text": "Мәңге, даими рәвештә.", "examples": ["Ул һәрвакыт вакытында килә."] }],
            "subtext": "adverb always",
            "emoji": "♾️",
            "lang": "tt",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "tt_starter_language_014",
            "word": "бу",
            "form": "determiner",
            "definitions": [{ "text": "Күрсәтү алмашы (близкий предмет).", "examples": ["Бу китап бик кызыклы."] }],
            "subtext": "demonstrative this",
            "emoji": "👇",
            "lang": "tt",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "tt_starter_language_015",
            "word": "шул",
            "form": "determiner",
            "definitions": [{ "text": "Күрсәтү алмашы (тот предмет).", "examples": ["Шул кешене беләсеңме?"] }],
            "subtext": "demonstrative that",
            "emoji": "👉",
            "lang": "tt",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "tt_starter_language_016",
            "word": "түгел",
            "form": "particle",
            "definitions": [{ "text": "Инкар итү искәрмәсе (не).", "examples": ["Ул студент түгел."] }],
            "subtext": "negation not",
            "emoji": "🚫",
            "lang": "tt",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        }
    ];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
