// TODO: verify level classification
(function() {
    const lang = "br";
    const data = [
    {
        "word": "aporia",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤔",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Ur stad a rann-galon pe a dhifister a zeu eus an enebadennoù en un arguzenn.",
                "examples": [
                    "Echuiñ a ra an diviz en un aporia, hep respont ebet."
                ]
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_001",
        "transcription": ""
    },
    {
        "word": "teleologiezh",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🎯",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Studi ar pal pe an dezoù en natur pe en istor.",
                "examples": [
                    "E arguzenn a bue war ur sell teleologiezh eus araokadenn an denelezh."
                ]
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_002",
        "transcription": ""
    },
    {
        "word": "ontologiezh",
        "level": "proficiency",
        "theme": "language",
        "emoji": "👻",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Skourr ar brederouriezh a bled gant an natur an den pe an ober.",
                "examples": [
                    "He mennozhioù ontologiezh a stumm he holl arguzenn."
                ]
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_003",
        "transcription": ""
    },
    {
        "word": "reifiadur",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧱",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "An argerzh da blediñ gant un dra difetis evel un dra fetis ha real.",
                "examples": [
                    "Reifiadur ar marc'had a guz an divizoù denel a zo a-drek."
                ]
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_004",
        "transcription": ""
    },
    {
        "word": "dialektik",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Un doare d'arguzenniñ hag a bled gant an enebadennoù.",
                "examples": [
                    "An dialektik etre ar frankiz hag ar surentez a derme ar soñjal frankizour."
                ]
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_005",
        "transcription": ""
    },
    {
        "word": "heuristik",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Un doare da ziskoulmañ kudennoù diazezet war an arnod.",
                "examples": [
                    "'Heuilh an arc'hant' zo un heuristik talvoudus."
                ]
            }
        ],
        "lang": "br",
        "id": "br_proficiency_psychology_001",
        "transcription": ""
    },
    {
        "word": "apofenia",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🕸️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "An tued d'unan da welout liammoù steret etre traoù n'o deus liamm ebet.",
                "examples": [
                    "An apofenia a vag ar soñjal kuzh."
                ]
            }
        ],
        "lang": "br",
        "id": "br_proficiency_psychology_002",
        "transcription": ""
    },
    {
        "word": "anavezout awenet",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🧠",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Levezon ar c'hoantoù hag ar santimantoù war ar soñjal hag ar c'hredennoù.",
                "examples": [
                    "Lakaat a ra an anavezout awenet da gompren perak e nac'h an dud an titouroù a zisplij dezho."
                ]
            }
        ],
        "lang": "br",
        "id": "br_proficiency_psychology_003",
        "transcription": ""
    },
    {
        "word": "pennaenn proaktivel",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🚀",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Ar sell ma ranker pazañ ar riskloù n'ober netra e-keñver riskloù an ober.",
                "examples": [
                    "An transhumanourien a gomz alies eus ar bennaenn proaktivel."
                ]
            }
        ],
        "lang": "br",
        "id": "br_proficiency_social_001",
        "transcription": ""
    },
    {
        "word": "pennaenn ziwall",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛡️",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Ar sell ma ranker kuitat an oberoù gant heuliadoù dianav ha marteze noazus.",
                "examples": [
                    "Ar gwir war an endro a laka alies ar bennaenn ziwall da dalvezout."
                ]
            }
        ],
        "lang": "br",
        "id": "br_proficiency_social_002",
        "transcription": ""
    },
    {
        "word": "neptuegezh frankizour",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⚖️",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Ar bennaenn frankizour ma ne rank ket ar stad lakaat ur sell bennak eus ar vuhez vat a-raok ar re all.",
                "examples": [
                    "An dud a lavar n'eo ket an neptuegezh frankizour neptu tamm ebet."
                ]
            }
        ],
        "lang": "br",
        "id": "br_proficiency_social_003",
        "transcription": ""
    },
    {
        "word": "pronatalouriezh",
        "level": "proficiency",
        "theme": "social",
        "emoji": "👶",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Ur bolitikerezh hag a vriata an dud da gaout muioc'h a vugale.",
                "examples": [
                    "Burutellet he deus ar pronatalouriezh a zo er politikerezh tailhoù."
                ]
            }
        ],
        "lang": "br",
        "id": "br_proficiency_social_004",
        "transcription": ""
    },
    {
        "word": "sublimadur",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🎨",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Adkas un nerzh kentidik war-zu un obererezh asantet gant ar gevredigezh.",
                "examples": [
                    "An arz zo gwelet abaoe pell evel ur sublimadur."
                ]
            }
        ],
        "lang": "br",
        "id": "br_proficiency_psychology_004",
        "transcription": ""
    },
    {
        "word": "jouissance",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🔥",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "En deorienn psikoanalitek, ur seurt plijadur dreistmuzul pe a ya dreist d'ar reolennoù.",
                "examples": [
                    "Žižek a implij ar jouissance da zisplegañ al liamm gant an ideologiezh."
                ]
            }
        ],
        "lang": "br",
        "id": "br_proficiency_psychology_005",
        "transcription": ""
    },
    {
        "word": "thanatos",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💀",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "En deorienn freudat, an nerzh a gas d'ar marv.",
                "examples": [
                    "Ar romant a studier an dennder etre eros ha thanatos."
                ]
            }
        ],
        "lang": "br",
        "id": "br_proficiency_psychology_006",
        "transcription": ""
    },
    {
        "word": "bathos",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "📉",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Ur c'hemm trumm eus un dra uhel d'un dra dister.",
                "examples": [
                    "Kouezhet eo ar brezegenn er bathos."
                ]
            }
        ],
        "lang": "br",
        "id": "br_proficiency_art_culture_001",
        "transcription": ""
    },
    {
        "word": "apofas",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤫",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Un doare retorik da sachañ an evezh war un dra bennak en ur lavarout ne vo ket meneget.",
                "examples": [
                    "'Ne gomzin ket eus e dorfedoù' zo un apofas."
                ]
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_006",
        "transcription": ""
    },
    {
        "word": "paraleps",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🙊",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Ur ger all evit apofas.",
                "examples": [
                    "Alies e vez implijet ar paraleps er politikerezh."
                ]
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_007",
        "transcription": ""
    },
    {
        "word": "egor liminal",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚪",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Ur stad a dremen etre div stad a vezañs.",
                "examples": [
                    "E-kreiz ar vuhez e c'haller bezañ en un egor liminal."
                ]
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_008",
        "transcription": ""
    },
    {
        "word": "chiasmus",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❌",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Ur seurt retorik ma vez eil lodenn ur frazenn enebet ouzh an hini gentañ.",
                "examples": [
                    "'Na c'houlenit ket petra a c'hall ho pro ober evidoc'h' zo ur chiasmus."
                ]
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_009",
        "transcription": ""
    },
    {
        "word": "shibboleth",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔑",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Ur c'hiz, ur frazenn pe ur gredenn a servij da anavezout tud ur strollad.",
                "examples": [
                    "'Ar familhoù a labour' zo deuet da vezañ ur shibboleth politikel."
                ]
            }
        ],
        "lang": "br",
        "id": "br_proficiency_language_010",
        "transcription": ""
    }
];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();