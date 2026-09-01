(function() {
    const lang = "br";
    const data = [
        {
            "id": "br_starter_language_001",
            "word": "e",
            "form": "preposition",
            "definitions": [{ "text": "En un lec'h bennak.", "examples": ["E Paris emaon.", "E Brest e chom."] }],
            "subtext": "fuzion e + an = er",
            "emoji": "📍",
            "lang": "br",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "br_starter_language_002",
            "word": "war",
            "form": "preposition",
            "definitions": [{ "text": "Maniere ha lec'h war un dra bennak.", "examples": ["War an daol emañ al levr."] }],
            "subtext": "war an daol, war ar straed",
            "emoji": "🔛",
            "lang": "br",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "br_starter_language_003",
            "word": "da",
            "form": "preposition",
            "definitions": [{ "text": "Toul ha pal al levrioù pe al lec'hioù.", "examples": ["Mont a ran d'ar gêr.", "Ro an dra-mañ da Yann."] }],
            "subtext": "da + an = d'an",
            "emoji": "➡️",
            "lang": "br",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "br_starter_language_004",
            "word": "gant",
            "form": "preposition",
            "definitions": [{ "text": "Gant un den bennak pe gant un benveg.", "examples": ["Mont a ran gant ma micherour.", "Skrivet eo gant ur stilom."] }],
            "subtext": "ganti, gantañ, ganeomp",
            "emoji": "👫",
            "lang": "br",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "br_starter_language_005",
            "word": "evit",
            "form": "preposition",
            "definitions": [{ "text": "Evit un den bennak pe evit un pal.", "examples": ["Evidout eo ar prof-mañ.", "Evit deskiñ brezhoneg e lenno."] }],
            "subtext": "evidon, evidout, evitañ",
            "emoji": "🎁",
            "lang": "br",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "br_starter_language_006",
            "word": "eus",
            "form": "preposition",
            "definitions": [{ "text": "Orin un den pe un dra bennak.", "examples": ["Eus Breizh on.", "Deuet eo eus ar gêr."] }],
            "subtext": "eus an ti, eus ar skol",
            "emoji": "🛫",
            "lang": "br",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "br_starter_language_007",
            "word": "ha",
            "form": "conjunction",
            "definitions": [{ "text": "Stagañ daou dra pe div frazenn.", "examples": ["Pai ha mamm.", "Bara ha kafe."] }],
            "subtext": "ha / hag (dirak ur vogalenn)",
            "emoji": "➕",
            "lang": "br",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "br_starter_language_008",
            "word": "met",
            "form": "conjunction",
            "definitions": [{ "text": "Diskouez un diforc'h pe un enebiezh.", "examples": ["Matañ a ra, met skuizh on."] }],
            "subtext": "koulskoude, avat",
            "emoji": "❓",
            "lang": "br",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "br_starter_language_009",
            "word": "pe",
            "form": "conjunction",
            "definitions": [{ "text": "Diskouez ur c'hoant pe un dibab.", "examples": ["Te pe kafe?"] }],
            "subtext": "pe... pe...",
            "emoji": "🔀",
            "lang": "br",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "br_starter_language_010",
            "word": "rak",
            "form": "conjunction",
            "definitions": [{ "text": "Diskouez an abeg.", "examples": ["Chom a ran er gêr rak glav a ra."] }],
            "subtext": "peogwir, o vezañ ma",
            "emoji": "💡",
            "lang": "br",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "br_starter_language_011",
            "word": "hiziv",
            "form": "adverb",
            "definitions": [{ "text": "An devezh bremañ.", "examples": ["Brav eo an amzer hiziv."] }],
            "subtext": "amzer hiziv",
            "emoji": "📅",
            "lang": "br",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "br_starter_language_012",
            "word": "warc'hoazh",
            "form": "adverb",
            "definitions": [{ "text": "An devezh goude hiziv.", "examples": ["Mont a raimp da Brest warc'hoazh."] }],
            "subtext": "amzer da zont",
            "emoji": "⏭️",
            "lang": "br",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "br_starter_language_013",
            "word": "dec'h",
            "form": "adverb",
            "definitions": [{ "text": "An devezh a-raok hiziv.", "examples": ["Arived eo dec'h."] }],
            "subtext": "amzer dremenet",
            "emoji": "⏮️",
            "lang": "br",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "br_starter_language_014",
            "word": "bremañ",
            "form": "adverb",
            "definitions": [{ "text": "Er mare-mañ alies.", "examples": ["Debriñ a reomp bremañ."] }],
            "subtext": "ar mare-mañ",
            "emoji": "⏱️",
            "lang": "br",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "br_starter_language_015",
            "word": "ar",
            "form": "determiner",
            "definitions": [{ "text": "Ger-mell strizh dirak ur gensonenn (estreget k, t, p, d, n, h).", "examples": ["Ar skol, ar gaoz."] }],
            "subtext": "ar / an / al",
            "emoji": "👉",
            "lang": "br",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "br_starter_language_016",
            "word": "ur",
            "form": "determiner",
            "definitions": [{ "text": "Ger-mell amstrizh dirak pep kensonenn (estreget k, t, p, d, n, h, l).", "examples": ["Ur c'hi, ur vag."] }],
            "subtext": "ur / un / ul",
            "emoji": "🅰️",
            "lang": "br",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "br_starter_language_017",
            "word": "ket",
            "form": "adverb",
            "definitions": [{ "text": "Ger-nac'h e brezhoneg (ne ... ket).", "examples": ["Ne ouzon ket.", "N'eo ket bras."] }],
            "subtext": "nac'hadur",
            "emoji": "🚫",
            "lang": "br",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        },
        {
            "id": "br_starter_language_018",
            "word": "anit / atav",
            "form": "adverb",
            "definitions": [{ "text": "Atav, hep paouez.", "examples": ["Bred atav e vez er gêr."] }],
            "subtext": "bepred",
            "emoji": "♾️",
            "lang": "br",
            "level": "starter",
            "theme": "language",
            "sub_theme": null
        }
    ];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
