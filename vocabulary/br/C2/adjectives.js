// TODO: verify level classification
(function() {
    const lang = "br";
    const data = [
        {
            "word": "etrekelennous",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🧪",
            "form": "adjective",
            "definitions": [{ "text": "A denn da veur a dachenn studiek war un dro." }]
        },
        {
            "word": "hermeneutek",
            "level": "proficiency",
            "theme": "philosophy_language_C2",
            "emoji": "📜",
            "form": "adjective",
            "definitions": [{ "text": "A denn da dornata hag da zisplegañ an testennoù." }]
        },
        {
            "word": "tautologek",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🔄",
            "form": "adjective",
            "definitions": [{ "text": "A lavar div wech an hevelep tra gant gerioù disheñvel." }]
        },
        {
            "word": "liessteriek",
            "level": "proficiency",
            "theme": "linguistics_theory_C2",
            "emoji": "🔠",
            "form": "adjective",
            "definitions": [{ "text": "Dezhañ meur a ster." }]
        },
        {
            "word": "heuristek",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "💡",
            "form": "adjective",
            "definitions": [{ "text": "Hentenn evit diskoulmañ kudennoù diazezet war an arnod." }]
        },
        {
            "word": "goude-trevadennel",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🌍",
            "form": "adjective",
            "definitions": [{ "text": "A denn d'ar mare goude an trevadenner hag d'e heuliadoù." }]
        },
        {
            "word": "liespennel",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🌐",
            "form": "adjective",
            "definitions": [{ "text": "A zeskriv un urzh bedel gant meur a greizenn galloud." }]
        },
        {
            "word": "kosmopolit",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🏙️",
            "form": "adjective",
            "definitions": [{ "text": "A anavez meur a vro hag a sevenadur disheñvel." }]
        },
        {
            "word": "narsisek",
            "level": "proficiency",
            "theme": "psychoanalysis_unconscious_C2",
            "emoji": "🪞",
            "form": "adjective",
            "definitions": [{ "text": "Re droet war e skeudenn e-unan." }]
        },
        {
            "word": "heterodoks",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🚩",
            "form": "adjective",
            "definitions": [{ "text": "A ya a-enep d'ar pezh a zo degemeret evel reolenn." }]
        },
        {
            "word": "imanent",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "⚛️",
            "form": "adjective",
            "definitions": [{ "text": "A zo e diabarzh un dra bennak; n'eo ket treuzvevel." }]
        },
        {
            "word": "trumm",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "⏱️",
            "form": "adjective",
            "definitions": [{ "text": "A zegouezh prim-ha-prim." }]
        },
        {
            "word": "teñval",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🧐",
            "form": "adjective",
            "definitions": [{ "text": "Diaes da gompren; dispis." }]
        },
        {
            "word": "anac'hronikel",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "⌛",
            "form": "adjective",
            "definitions": [{ "text": "A denn d'ur marevezh all; n'eo ket mui diouzh an amzer." }]
        },
        {
            "word": "antitetek",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [{ "text": "Eneb-krenn ouzh un dra bennak." }]
        },
        {
            "word": "kevrinus",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🔮",
            "form": "adjective",
            "definitions": [{ "text": "Kuzh ha diaes da anavezout evit an darn vrasañ." }]
        },
        {
            "word": "anreoliek",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🦄",
            "form": "adjective",
            "definitions": [{ "text": "N'eo ket hervez ar c'hustum." }]
        },
        {
            "word": "daouredel",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🔢",
            "form": "adjective",
            "definitions": [{ "text": "Diazezet war daou dra enebet." }]
        },
        {
            "word": "kategoriel",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "❗",
            "form": "adjective",
            "definitions": [{ "text": "Hollbadus; hep amziforc'h ebet." }]
        },
        {
            "word": "evezhiek",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "🛡️",
            "form": "adjective",
            "definitions": [{ "text": "A daol evezh ouzh pep tra a-raok ober un dra bennak." }]
        },
        {
            "word": "kuzh",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🕵️",
            "form": "adjective",
            "definitions": [{ "text": "A vez graet e-kuzh; n'eo ket diskouezet anat." }]
        },
        {
            "word": "dialektek",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [{ "text": "A denn d'an eskemm soñjoù enebet evit kavout ur wirionez." }]
        },
        {
            "word": "strewet",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌫️",
            "form": "adjective",
            "definitions": [{ "text": "Skignet war un dachenn ledan; dispis." }]
        },
        {
            "word": "didispeg",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🌬️",
            "form": "adjective",
            "definitions": [{ "text": "Diaes da gavout pe da dapañ." }]
        },
        {
            "word": "ezoterek",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🗝️",
            "form": "adjective",
            "definitions": [{ "text": "Kuzh ha miret evit un niver bihan a dud." }]
        },
        {
            "word": "fals",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "❌",
            "form": "adjective",
            "definitions": [{ "text": "Diazezet war ur rezoniñ fall." }]
        },
        {
            "word": "didregemmesk",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🧱",
            "form": "adjective",
            "definitions": [{ "text": "N'haller ket cheñch; padus." }]
        },
        {
            "word": "neptu",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [{ "text": "A chom hep kemer tu evit unan pe unan." }]
        },
        {
            "word": "darvoudel",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🍃",
            "form": "adjective",
            "definitions": [{ "text": "A c'hoarvez dre zegouezh." }]
        },
        {
            "word": "genedik",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "⚛️",
            "form": "adjective",
            "definitions": [{ "text": "A zo e natur un dra bennak adalek ar penn-kentañ." }]
        },
        {
            "word": "dreist",
            "level": "proficiency",
            "theme": "aesthetics_criticism_C2",
            "emoji": "🌟",
            "form": "adjective",
            "definitions": [{ "text": "Ken mat ha m'eo dibosupl d'e eilañ." }]
        },
        {
            "word": "treitour",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "🐍",
            "form": "adjective",
            "definitions": [{ "text": "A ya war-raok tamm-ha-tamm en ur doare drouk." }]
        },
        {
            "word": "digevall",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🚫",
            "form": "adjective",
            "definitions": [{ "text": "N'haller ket lakaat an traoù da glotañ." }]
        },
        {
            "word": "liminel",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🚪",
            "form": "adjective",
            "definitions": [{ "text": "A denn d'ur mare tremen." }]
        },
        {
            "word": "liesseurt",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🔢",
            "form": "adjective",
            "definitions": [{ "text": "Meur a hini ha meur a seurt." }]
        },
        {
            "word": "dispis",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "☁️",
            "form": "adjective",
            "definitions": [{ "text": "N'eo ket sklaer; flou." }]
        },
        {
            "word": "reoliat",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "📏",
            "form": "adjective",
            "definitions": [{ "text": "A denn d'un norm; a lavar petra a zlefe bezañ." }]
        },
        {
            "word": "fin",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌗",
            "form": "adjective",
            "definitions": [{ "text": "Gant diforc'hioùigoù munut." }]
        },
        {
            "word": "beskell",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "↗️",
            "form": "adjective",
            "definitions": [{ "text": "N'eo ket war-eeun; nebeut anat." }]
        },
        {
            "word": "didreuzwelus",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌑",
            "form": "adjective",
            "definitions": [{ "text": "Diaes da gompren; n'eo ket treuzwelus." }]
        },
        {
            "word": "war-wel",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🎭",
            "form": "adjective",
            "definitions": [{ "text": "Ar pezh a seblant bezañ ar pal, hep bezañ an hini gwir." }]
        },
        {
            "word": "paradoksel",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🔄",
            "form": "adjective",
            "definitions": [{ "text": "Eneb-ha-eneb anezhañ e-unan met gwir memes tra." }]
        },
        {
            "word": "hollek",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌊",
            "form": "adjective",
            "definitions": [{ "text": "A gaver e pep lec'h; skignet mat." }]
        },
        {
            "word": "reunius",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🧲",
            "form": "adjective",
            "definitions": [{ "text": "A laka an dud da gemer tu enebet krenn." }]
        },
        {
            "word": "diskredus",
            "level": "proficiency",
            "theme": "ontology_existence_C2",
            "emoji": "🧗",
            "form": "adjective",
            "definitions": [{ "text": "N'eo ket sur; en arvar." }]
        },
        {
            "word": "erbedus",
            "level": "proficiency",
            "theme": "linguistics_theory_C2",
            "emoji": "📜",
            "form": "adjective",
            "definitions": [{ "text": "A lavar petra a zle bezañ graet; a ro reolennoù." }]
        },
        {
            "word": "hirbadus",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "⌛",
            "form": "adjective",
            "definitions": [{ "text": "A bad pelloc'h eget ar pezh a oa rakwelet." }]
        },
        {
            "word": "bihanaus",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "📉",
            "form": "adjective",
            "definitions": [{ "text": "A simplaer re an traoù." }]
        },
        {
            "word": "diazezel",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌱",
            "form": "adjective",
            "definitions": [{ "text": "Hidik-kenañ ha levezonus." }]
        },
        {
            "word": "touellus",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🤥",
            "form": "adjective",
            "definitions": [{ "text": "A seblant bezañ gwir met fals eo e gwirionez." }]
        },
        {
            "word": "spurius",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🤡",
            "form": "adjective",
            "definitions": [{ "text": "N'eo ket gwirion; diazezet war ur rezoniñ fals." }]
        },
        {
            "word": "disivour",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "💣",
            "form": "adjective",
            "definitions": [{ "text": "Gant ar pal diskar ur sistem bennak." }]
        },
        {
            "word": "didispleg",
            "level": "proficiency",
            "theme": "philosophy_language_C2",
            "emoji": "🤫",
            "form": "adjective",
            "definitions": [{ "text": "Komprenet hep bezañ lavaret anat." }]
        },
        {
            "word": "tanav",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🕸️",
            "form": "adjective",
            "definitions": [{ "text": "Gwan-kenañ; n'eo ket diazezet start." }]
        },
        {
            "word": "daoulamm",
            "level": "proficiency",
            "theme": "mortality_time_C2",
            "emoji": "🌅",
            "form": "adjective",
            "definitions": [{ "text": "N'eo ket padus; a dremen buan." }]
        },
        {
            "word": "holllec'hiel",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌍",
            "form": "adjective",
            "definitions": [{ "text": "A gaver e pep lec'h." }]
        },
        {
            "word": "anat",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "📢",
            "form": "adjective",
            "definitions": [{ "text": "Sklaer-kenañ; hep douetañs ebet." }]
        },
        {
            "word": "dic'hortoz",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🚀",
            "form": "adjective",
            "definitions": [{ "text": "N'eo ket c'hoarvezet biskoazh a-raok." }]
        },
        {
            "word": "diskant",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🏗️",
            "form": "adjective",
            "definitions": [{ "text": "N'haller ket difenn nag heuliañ." }]
        },
        {
            "word": "pounner",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "📦",
            "form": "adjective",
            "definitions": [{ "text": "Diaes da dornata abalamour d'e vent pe d'e ronezon." }]
        }
    ];

    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
