// TODO: verify level classification
(function() {
    const lang = "br";
    const data = [
    {
        "word": "etrekelennous",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧪",
        "form": "adjective",
        "definitions": [
            {
                "text": "A denn da veur a dachenn studiek war un dro.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_001"
    },
    {
        "word": "hermeneutek",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📜",
        "form": "adjective",
        "definitions": [
            {
                "text": "A denn da dornata hag da zisplegañ an testennoù.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_002"
    },
    {
        "word": "tautologek",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔄",
        "form": "adjective",
        "definitions": [
            {
                "text": "A lavar div wech an hevelep tra gant gerioù disheñvel.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_003"
    },
    {
        "word": "liessteriek",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔠",
        "form": "adjective",
        "definitions": [
            {
                "text": "Dezhañ meur a ster.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_004"
    },
    {
        "word": "heuristek",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💡",
        "form": "adjective",
        "definitions": [
            {
                "text": "Hentenn evit diskoulmañ kudennoù diazezet war an arnod.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_psychology_001"
    },
    {
        "word": "goude-trevadennel",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🌍",
        "form": "adjective",
        "definitions": [
            {
                "text": "A denn d'ar mare goude an trevadenner hag d'e heuliadoù.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_social_001"
    },
    {
        "word": "liespennel",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🌐",
        "form": "adjective",
        "definitions": [
            {
                "text": "A zeskriv un urzh bedel gant meur a greizenn galloud.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_social_002"
    },
    {
        "word": "kosmopolit",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🏙️",
        "form": "adjective",
        "definitions": [
            {
                "text": "A anavez meur a vro hag a sevenadur disheñvel.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_social_003"
    },
    {
        "word": "narsisek",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🪞",
        "form": "adjective",
        "definitions": [
            {
                "text": "Re droet war e skeudenn e-unan.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_psychology_002"
    },
    {
        "word": "heterodoks",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚩",
        "form": "adjective",
        "definitions": [
            {
                "text": "A ya a-enep d'ar pezh a zo degemeret evel reolenn.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_005"
    },
    {
        "word": "imanent",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚛️",
        "form": "adjective",
        "definitions": [
            {
                "text": "A zo e diabarzh un dra bennak; n'eo ket treuzvevel.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_006"
    },
    {
        "word": "trumm",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⏱️",
        "form": "adjective",
        "definitions": [
            {
                "text": "A zegouezh prim-ha-prim.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_007"
    },
    {
        "word": "teñval",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🧐",
        "form": "adjective",
        "definitions": [
            {
                "text": "Diaes da gompren; dispis.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_psychology_003"
    },
    {
        "word": "anac'hronikel",
        "level": "proficiency",
        "theme": "time",
        "emoji": "⌛",
        "form": "adjective",
        "definitions": [
            {
                "text": "A denn d'ur marevezh all; n'eo ket mui diouzh an amzer.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_time_001"
    },
    {
        "word": "antitetek",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Eneb-krenn ouzh un dra bennak.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_008"
    },
    {
        "word": "kevrinus",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🔮",
        "form": "adjective",
        "definitions": [
            {
                "text": "Kuzh ha diaes da anavezout evit an darn vrasañ.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_psychology_004"
    },
    {
        "word": "anreoliek",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🦄",
        "form": "adjective",
        "definitions": [
            {
                "text": "N'eo ket hervez ar c'hustum.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_009"
    },
    {
        "word": "daouredel",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔢",
        "form": "adjective",
        "definitions": [
            {
                "text": "Diazezet war daou dra enebet.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_010"
    },
    {
        "word": "kategoriel",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❗",
        "form": "adjective",
        "definitions": [
            {
                "text": "Hollbadus; hep amziforc'h ebet.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_011"
    },
    {
        "word": "evezhiek",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛡️",
        "form": "adjective",
        "definitions": [
            {
                "text": "A daol evezh ouzh pep tra a-raok ober un dra bennak.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_social_004"
    },
    {
        "word": "kuzh",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🕵️",
        "form": "adjective",
        "definitions": [
            {
                "text": "A vez graet e-kuzh; n'eo ket diskouezet anat.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_social_005"
    },
    {
        "word": "dialektek",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "A denn d'an eskemm soñjoù enebet evit kavout ur wirionez.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_012"
    },
    {
        "word": "strewet",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌫️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Skignet war un dachenn ledan; dispis.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_013"
    },
    {
        "word": "didispeg",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🌬️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Diaes da gavout pe da dapañ.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_psychology_005"
    },
    {
        "word": "ezoterek",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🗝️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Kuzh ha miret evit un niver bihan a dud.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_psychology_006"
    },
    {
        "word": "fals",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❌",
        "form": "adjective",
        "definitions": [
            {
                "text": "Diazezet war ur rezoniñ fall.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_014"
    },
    {
        "word": "didregemmesk",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧱",
        "form": "adjective",
        "definitions": [
            {
                "text": "N'haller ket cheñch; padus.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_015"
    },
    {
        "word": "neptu",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "A chom hep kemer tu evit unan pe unan.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_social_006"
    },
    {
        "word": "darvoudel",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🍃",
        "form": "adjective",
        "definitions": [
            {
                "text": "A c'hoarvez dre zegouezh.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_016"
    },
    {
        "word": "genedik",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚛️",
        "form": "adjective",
        "definitions": [
            {
                "text": "A zo e natur un dra bennak adalek ar penn-kentañ.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_017"
    },
    {
        "word": "dreist",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "🌟",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ken mat ha m'eo dibosupl d'e eilañ.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_art_culture_001"
    },
    {
        "word": "treitour",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🐍",
        "form": "adjective",
        "definitions": [
            {
                "text": "A ya war-raok tamm-ha-tamm en ur doare drouk.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_social_007"
    },
    {
        "word": "digevall",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚫",
        "form": "adjective",
        "definitions": [
            {
                "text": "N'haller ket lakaat an traoù da glotañ.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_018"
    },
    {
        "word": "liminel",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚪",
        "form": "adjective",
        "definitions": [
            {
                "text": "A denn d'ur mare tremen.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_019"
    },
    {
        "word": "liesseurt",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔢",
        "form": "adjective",
        "definitions": [
            {
                "text": "Meur a hini ha meur a seurt.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_020"
    },
    {
        "word": "dispis",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "☁️",
        "form": "adjective",
        "definitions": [
            {
                "text": "N'eo ket sklaer; flou.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_psychology_007"
    },
    {
        "word": "reoliat",
        "level": "proficiency",
        "theme": "social",
        "emoji": "📏",
        "form": "adjective",
        "definitions": [
            {
                "text": "A denn d'un norm; a lavar petra a zlefe bezañ.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_social_008"
    },
    {
        "word": "fin",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌗",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gant diforc'hioùigoù munut.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_021"
    },
    {
        "word": "beskell",
        "level": "proficiency",
        "theme": "language",
        "emoji": "↗️",
        "form": "adjective",
        "definitions": [
            {
                "text": "N'eo ket war-eeun; nebeut anat.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_022"
    },
    {
        "word": "didreuzwelus",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌑",
        "form": "adjective",
        "definitions": [
            {
                "text": "Diaes da gompren; n'eo ket treuzwelus.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_023"
    },
    {
        "word": "war-wel",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🎭",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ar pezh a seblant bezañ ar pal, hep bezañ an hini gwir.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_024"
    },
    {
        "word": "paradoksel",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔄",
        "form": "adjective",
        "definitions": [
            {
                "text": "Eneb-ha-eneb anezhañ e-unan met gwir memes tra.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_025"
    },
    {
        "word": "hollek",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌊",
        "form": "adjective",
        "definitions": [
            {
                "text": "A gaver e pep lec'h; skignet mat.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_time_002"
    },
    {
        "word": "reunius",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🧲",
        "form": "adjective",
        "definitions": [
            {
                "text": "A laka an dud da gemer tu enebet krenn.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_social_009"
    },
    {
        "word": "diskredus",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧗",
        "form": "adjective",
        "definitions": [
            {
                "text": "N'eo ket sur; en arvar.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_026"
    },
    {
        "word": "erbedus",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📜",
        "form": "adjective",
        "definitions": [
            {
                "text": "A lavar petra a zle bezañ graet; a ro reolennoù.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_027"
    },
    {
        "word": "hirbadus",
        "level": "proficiency",
        "theme": "time",
        "emoji": "⌛",
        "form": "adjective",
        "definitions": [
            {
                "text": "A bad pelloc'h eget ar pezh a oa rakwelet.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_time_003"
    },
    {
        "word": "bihanaus",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📉",
        "form": "adjective",
        "definitions": [
            {
                "text": "A simplaer re an traoù.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_028"
    },
    {
        "word": "diazezel",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌱",
        "form": "adjective",
        "definitions": [
            {
                "text": "Hidik-kenañ ha levezonus.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_time_004"
    },
    {
        "word": "touellus",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤥",
        "form": "adjective",
        "definitions": [
            {
                "text": "A seblant bezañ gwir met fals eo e gwirionez.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_029"
    },
    {
        "word": "spurius",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤡",
        "form": "adjective",
        "definitions": [
            {
                "text": "N'eo ket gwirion; diazezet war ur rezoniñ fals.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_030"
    },
    {
        "word": "disivour",
        "level": "proficiency",
        "theme": "social",
        "emoji": "💣",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gant ar pal diskar ur sistem bennak.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_social_010"
    },
    {
        "word": "didispleg",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤫",
        "form": "adjective",
        "definitions": [
            {
                "text": "Komprenet hep bezañ lavaret anat.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_031"
    },
    {
        "word": "tanav",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🕸️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gwan-kenañ; n'eo ket diazezet start.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_032"
    },
    {
        "word": "daoulamm",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌅",
        "form": "adjective",
        "definitions": [
            {
                "text": "N'eo ket padus; a dremen buan.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_time_005"
    },
    {
        "word": "holllec'hiel",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌍",
        "form": "adjective",
        "definitions": [
            {
                "text": "A gaver e pep lec'h.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_time_006"
    },
    {
        "word": "anat",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📢",
        "form": "adjective",
        "definitions": [
            {
                "text": "Sklaer-kenañ; hep douetañs ebet.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_033"
    },
    {
        "word": "dic'hortoz",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🚀",
        "form": "adjective",
        "definitions": [
            {
                "text": "N'eo ket c'hoarvezet biskoazh a-raok.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_time_007"
    },
    {
        "word": "diskant",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🏗️",
        "form": "adjective",
        "definitions": [
            {
                "text": "N'haller ket difenn nag heuliañ.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_034"
    },
    {
        "word": "pounner",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📦",
        "form": "adjective",
        "definitions": [
            {
                "text": "Diaes da dornata abalamour d'e vent pe d'e ronezon.",
                "examples": []
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_035"
    }
];

    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
