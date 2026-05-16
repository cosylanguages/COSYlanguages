(function() {
    const lang = "br";
    const data = [
        {
            "word": "reifiñ",
            "level": "proficiency",
            "theme": "philosophy_logic",
            "emoji": "🗿",
            "subtext": "reifiñ ur meizad / reifiñ ar marc'had / reifiadur al labour",
            "form": "verb",
            "definitions": [
                {
                    "text": "Sellet ouzh ur mennozh difetis evel pa vije un dra danvezel pe fetis.",
                    "examples": [
                        "Ar modelloù armerzhel a reifi nerzhioù ar marc'had, o lakaat anezho da seblantout naturel."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "reifis",
            "v3": "reifiet",
            "group": "iñ",
            "auxiliary": "kaout"
        },
        {
            "word": "isberliñ",
            "level": "proficiency",
            "theme": "psychology_academic",
            "emoji": "🎭",
            "subtext": "isberliñ an dezir / isberliadur an impuls / adsturiañ davet",
            "form": "verb",
            "definitions": [
                {
                    "text": "Sturiañ impulsadennoù pe santimantoù davet obererezhioù degemeret mat gant ar gevredigezh pe krouus (sublimate).",
                    "examples": [
                        "Isberlet en deus e froustadur politikel en e skridoù akademiek."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "isberlis",
            "v3": "isberlet",
            "group": "iñ",
            "auxiliary": "kaout"
        },
        {
            "word": "predikadiñ",
            "level": "proficiency",
            "theme": "logic_linguistics",
            "emoji": "🗣️",
            "subtext": "predikadiñ diwar-benn / diazezañ un embann / diazezet war ar martezead",
            "form": "verb",
            "definitions": [
                {
                    "text": "Embann un dra bennak diwar-benn ur sujed; pe diazezañ un embann war un dra bennak (predicate).",
                    "examples": [
                        "He niverenn a bredikad ul live fiziañs n'eus ket anezhañ ken."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "predikadis",
            "v3": "predikadet",
            "group": "iñ",
            "auxiliary": "kaout"
        },
        {
            "word": "instañsiñ",
            "level": "proficiency",
            "theme": "logic_computing",
            "emoji": "📋",
            "subtext": "instañsiñ ur meizad / lakaat e pleustr",
            "form": "verb",
            "definitions": [
                {
                    "text": "Skeudennañ pe skeudenniñ un dra bennak difetis dre ur skouer fetis (instantiate).",
                    "examples": [
                        "Ar studienn-degouezh-mañ a instañs teorienn pakañ ar reoliataer."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "instañsis",
            "v3": "instañset",
            "group": "iñ",
            "auxiliary": "kaout"
        },
        {
            "word": "nac'hañ",
            "level": "proficiency",
            "theme": "logic_debate",
            "emoji": "❌",
            "subtext": "nac'hañ un arguzenn / nullañ ur gwir / nac'hadur dialegek",
            "form": "verb",
            "definitions": [
                {
                    "text": "Lakaat un dra bennak da vezañ didalvoud pe null (negate).",
                    "examples": [
                        "Ar rannbennad nevez a nac'h ent-efedus ar gwir a seblant reiñ."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "nac'has",
            "v3": "nac'het",
            "group": "añ",
            "auxiliary": "kaout"
        },
        {
            "word": "treuziñ",
            "level": "proficiency",
            "theme": "philosophy_general",
            "emoji": "🌌",
            "subtext": "treuziñ an harzoù / mont dreist ar rummadoù / treuziñ an denel",
            "form": "verb",
            "definitions": [
                {
                    "text": "Mont dreist harzoù un dra bennak (transcend).",
                    "examples": [
                        "An arz meur a dreuz koulz istorel e grouidigezh."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "both",
            "v2": "treuzis",
            "v3": "treuzet",
            "group": "iñ",
            "auxiliary": "kaout"
        },
        {
            "word": "mediadiñ",
            "level": "proficiency",
            "theme": "sociology_conflict",
            "emoji": "⚖️",
            "subtext": "mediadiñ etre / mediadiñ en ur c'holl / mediadet ent-soshial",
            "form": "verb",
            "definitions": [
                {
                    "text": "Emellout evit lakaat div gostezenn d'en em glevout pe lakaat ul liamm etrezo (mediate).",
                    "examples": [
                        "Ar yezh a vediad hon darempred gant ar bed diavaez."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "mediadis",
            "v3": "mediadet",
            "group": "iñ",
            "auxiliary": "kaout"
        },
        {
            "word": "elidañ",
            "level": "proficiency",
            "theme": "linguistics_debate",
            "emoji": "✂️",
            "subtext": "elidañ un diforc'h / elidañ an disheñvelder / elidañ a-ratozh",
            "form": "verb",
            "definitions": [
                {
                    "text": "Lezel un dra bennak a-gostez a-ratozh pe chom hep ober van anezhañ (elide).",
                    "examples": [
                        "An danevell a elid an diforc'h etre paourentez ha dienez."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "elidas",
            "v3": "elidet",
            "group": "añ",
            "auxiliary": "kaout"
        },
        {
            "word": "diskañ",
            "level": "proficiency",
            "theme": "debate_communication",
            "emoji": "🌫️",
            "subtext": "diskañ ar wirionez / diskiñ a-ratozh / diskañ gant jargoñ",
            "form": "verb",
            "definitions": [
                {
                    "text": "Lakaat un dra bennak da vezañ dispis pe diaes da gompren, alies a-ratozh (obfuscate).",
                    "examples": [
                        "Ar yezh teknikel a seblante bezañ graet evit diskañ, pas evit skleraat."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "diskas",
            "v3": "disket",
            "group": "añ",
            "auxiliary": "kaout"
        },
        {
            "word": "kenliammañ",
            "level": "proficiency",
            "theme": "debate_academic",
            "emoji": "🌀",
            "subtext": "kenliammañ kudennoù / kenliammañ gant / kenliammañ en un doare dañjerus",
            "form": "verb",
            "definitions": [
                {
                    "text": "Kemmañ daou vennozh pe muioc'h en unan, alies dre fazi (conflate).",
                    "examples": [
                        "An tabut a genliamm ar mirdi neregulek gant an envroadur illegal."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "kenliammas",
            "v3": "kenliammet",
            "group": "añ",
            "auxiliary": "kaout"
        },
        {
            "word": "galvel",
            "level": "proficiency",
            "theme": "law_debate",
            "emoji": "📜",
            "subtext": "galvel ur gwir / galvel un rakskouer / galvel un arguzenn",
            "form": "verb",
            "definitions": [
                {
                    "text": "Meneget pe gervel un dra bennak evel aotrouniezh evit un ober (invoke).",
                    "examples": [
                        "Gervel a reas ar gwir da gomz frank evit he difenn."
                    ]
                }
            ],
            "classification": "irregular",
            "aspect": "action",
            "v2": "galvas",
            "v3": "galvet",
            "group": "el",
            "auxiliary": "kaout"
        },
        {
            "word": "lakaat war-raok",
            "level": "proficiency",
            "theme": "art_media",
            "emoji": "🔦",
            "subtext": "lakaat ur gudenn war-raok / lakaat ur gwel war-raok",
            "form": "verb",
            "definitions": [
                {
                    "text": "Lakaat un dra bennak da vezañ kreiz an evezh (foreground).",
                    "examples": [
                        "Ar film a laka a-ratozh ar ouenn war-raok evel e gwerenn-greskiñ bennañ."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "lakas war-raok",
            "v3": "lakaet war-raok",
            "group": "locution",
            "auxiliary": "kaout"
        },
        {
            "word": "adpakañ",
            "level": "proficiency",
            "theme": "sociology_culture",
            "emoji": "♻️",
            "subtext": "adpakañ un emsav / bezañ adpaked gant / adpakadur sevenadurel",
            "form": "verb",
            "definitions": [
                {
                    "text": "Enframmañ un dra bennak (evel un estetik emsavet) er sevenadur pennañ (recuperate).",
                    "examples": [
                        "Greanterezh ar c'hiz en deus adpaked estetik emsavet ar punk."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "adpakas",
            "v3": "adpaked",
            "group": "añ",
            "auxiliary": "kaout"
        },
        {
            "word": "distabilizañ",
            "level": "proficiency",
            "theme": "politics_academic",
            "emoji": "⚖️",
            "subtext": "distabilizañ ur renad / distabilizañ martezeadoù / distabilizañ a-ratozh",
            "form": "verb",
            "definitions": [
                {
                    "text": "Lakaat un dra bennak da vezañ distabil pe koll e gempouez.",
                    "examples": [
                        "An prouennoù a zistabiliz kentañ martezead an danevell."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "distabilizas",
            "v3": "distabilizet",
            "group": "añ",
            "auxiliary": "kaout"
        },
        {
            "word": "marc'hadourezhaat",
            "level": "proficiency",
            "theme": "economics_sociology",
            "emoji": "💰",
            "subtext": "marc'hadourezhaat al labour / marc'hadourezhaadur an evezh",
            "form": "verb",
            "definitions": [
                {
                    "text": "Trettiñ un dra bennak evel ur produ kenwerzhel a c'haller prenañ ha gwerzhañ (commodify).",
                    "examples": [
                        "Greanterezh an emeur-vat a varc'hadourezha ar yec'hed mantal hag an emzalc'h."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "marc'hadourezhaas",
            "v3": "marc'hadourezhaet",
            "group": "aat",
            "auxiliary": "kaout"
        },
        {
            "word": "benvekaat",
            "level": "proficiency",
            "theme": "politics_philosophy",
            "emoji": "🛠️",
            "subtext": "benvekaat tud / benvekaat ur mennozh",
            "form": "verb",
            "definitions": [
                {
                    "text": "Implijout un dra bennak pe unan bennak evel ur benveg hepken evit tizhout ur pal.",
                    "examples": [
                        "Ar vurutellerien a lavare e oa benvekaet emeur-vat al labourerien gant ar bolitikerezh-se."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "benvekaas",
            "v3": "benvekaet",
            "group": "aat",
            "auxiliary": "kaout"
        },
        {
            "word": "prizañ",
            "level": "proficiency",
            "theme": "sociology_academic",
            "emoji": "💎",
            "subtext": "prizañ al labour / prizañ ur meizad / bezañ prizet gant ar sevenadur",
            "form": "verb",
            "definitions": [
                {
                    "text": "Reiñ ur priz bras pe ur pouez bras d'un dra bennak (valorise).",
                    "examples": [
                        "Ar sevenadur modern a briz ar brouduktivelezh dreist d'ar repose ha d'an dousder."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "prizas",
            "v3": "prizet",
            "group": "añ",
            "auxiliary": "kaout"
        },
        {
            "word": "fetikaat",
            "level": "proficiency",
            "theme": "sociology_academic",
            "emoji": "🧿",
            "subtext": "fetikaat ur mennozh / fetikaat ar c'hresk",
            "form": "verb",
            "definitions": [
                {
                    "text": "Kaout un evezh pe ur gredoni dreist-muzul ha diskiant evit un dra bennak.",
                    "examples": [
                        "Sevenadur ar startups a fetika an dispenn evel ur pal ennañ e-unan."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "fetikaas",
            "v3": "fetikaet",
            "group": "aat",
            "auxiliary": "kaout"
        },
        {
            "word": "estranaat",
            "level": "proficiency",
            "theme": "sociology_psychology",
            "emoji": "👽",
            "subtext": "estranaat unan bennak / en em santiñ estranet / estranadur al labour",
            "form": "verb",
            "definitions": [
                {
                    "text": "Lakaat unan bennak d'en em santiñ digevredet pe distag diouzh e endro pe dioutañ e-unan (alienate).",
                    "examples": [
                        "Ar micherioù greantel a estrana al labourerien diouzh kement santimant a artizanerezh."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "estranaas",
            "v3": "estranaet",
            "group": "aat",
            "auxiliary": "kaout"
        },
        {
            "word": "bevennañ",
            "level": "proficiency",
            "theme": "law_philosophy",
            "emoji": "🚧",
            "subtext": "bevennañ ur vevenn / bevennañ splann / linenn-bevennañ",
            "form": "verb",
            "definitions": [
                {
                    "text": "Lakaat bevennoù un dra bennak (demarcate).",
                    "examples": [
                        "Al lezenn a glask bevennañ al linenn etre ar reoliata hag an turgnañ."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "bevennas",
            "v3": "bevennet",
            "group": "añ",
            "auxiliary": "kaout"
        },
        {
            "word": "bevennañ",
            "level": "proficiency",
            "theme": "academic_research",
            "emoji": "📏",
            "subtext": "bevennañ ar gweled / bevennañ ur meizad / bevennet evezhiek",
            "form": "verb",
            "definitions": [
                {
                    "text": "Termenañ pe lakaat gant resisted harzoù un dra bennak (delimit).",
                    "examples": [
                        "Ar studienn a vevenn a-ratozh he gweled evit chom hep hollekaat dreist-muzul."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "bevennas",
            "v3": "bevennet",
            "group": "añ",
            "auxiliary": "kaout"
        },
        {
            "word": "stourm ouzh",
            "level": "proficiency",
            "theme": "debate_academic",
            "emoji": "🛡️",
            "subtext": "stourm ouzh / stourm kreñv / bezañ a-du gant",
            "form": "verb",
            "definitions": [
                {
                    "text": "(Diwar-benn ur fed pe un degouezh) kaout ur pouez pe ul levezon a-enep un dra bennak (militate).",
                    "examples": [
                        "Paotrentez ar reizhiad a stourm ouzh un azreizhadur efedus."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "stative",
            "v2": "stourmas ouzh",
            "v3": "stourmet ouzh",
            "group": "locution",
            "auxiliary": "kaout"
        },
        {
            "word": "gwallañ",
            "level": "proficiency",
            "theme": "law_academic",
            "emoji": "☤",
            "subtext": "gwallañ un embann / gwallañ un arguzenn / gwallet ent-lezennel",
            "form": "verb",
            "definitions": [
                {
                    "text": "Lakaat un dra bennak da goll e efedusted pe e dalvoudegezh (vitiate).",
                    "examples": [
                        "Ar fazi metodologel a wall kentañ lakaadennoù ar studienn."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "gwallas",
            "v3": "gwallet",
            "group": "añ",
            "auxiliary": "kaout"
        },
        {
            "word": "enebiñ ouzh",
            "level": "proficiency",
            "theme": "debate_logic",
            "emoji": "🗣️",
            "subtext": "diaes da enebiñ ouzh / den ne c'hall enebiñ ouzh / enebiñ ouzh un embann",
            "form": "verb",
            "definitions": [
                {
                    "text": "Nac'hañ pe lavarout ar c'hontrol d'ar pezh a zo bet lavaret gant unan bennak (gainsay).",
                    "examples": [
                        "Diaes eo enebiñ ouzh ar prouennoù lakaet war-raok gant an enklask."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "enebis ouzh",
            "v3": "enebet ouzh",
            "group": "locution",
            "auxiliary": "kaout"
        },
        {
            "word": "nullañ",
            "level": "proficiency",
            "theme": "law_politics",
            "emoji": "📜",
            "subtext": "nullañ un emglev / nullañ ur feur-emglev / nulladur untu",
            "form": "verb",
            "definitions": [
                {
                    "text": "Dilezel pe nullañ ul lezenn pe un emglev ofisiel (abrogate).",
                    "examples": [
                        "Ar gouarnamant a glaskas nullañ ar feur-emglev ent-untu."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "nullas",
            "v3": "nullet",
            "group": "añ",
            "auxiliary": "kaout"
        },
        {
            "word": "terriñ",
            "level": "proficiency",
            "theme": "law_debate",
            "emoji": "🚫",
            "subtext": "terriñ ul lezenn / terriñ reolennoù / terriñ un emglev",
            "form": "verb",
            "definitions": [
                {
                    "text": "Ober a-enep ar pezh a zo lakaet gant ul lezenn pe ur reolenn (contravene).",
                    "examples": [
                        "Kavet e voe e terre an diviz lezenn ar gevezerezh en UE."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "terris",
            "v3": "torret",
            "group": "iñ",
            "auxiliary": "kaout"
        },
        {
            "word": "ebarzhañ",
            "level": "proficiency",
            "theme": "logic_philosophy",
            "emoji": "📂",
            "subtext": "ebarzhañ dindan / bezañ ebarzhet gant / ebarzhañ en ur rummad",
            "form": "verb",
            "definitions": [
                {
                    "text": "Lakaat un dra bennak evel lodenn eus ur strollad pe ur rummad ledanoc'h (subsume).",
                    "examples": [
                        "E deorienn a ebarzh an holl gontadennoù kent en ur stern unvan."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "ebarzhas",
            "v3": "ebarzhet",
            "group": "añ",
            "auxiliary": "kaout"
        },
        {
            "word": "dielfonnañ",
            "level": "proficiency",
            "theme": "philosophy_literature",
            "emoji": "🧩",
            "subtext": "dielfonnañ un arguzenn / dielfonnañ ur skrid / dielfonnadur Derridean",
            "form": "verb",
            "definitions": [
                {
                    "text": "Analizañ ur skrid pe un arguzenn evit diskouez e enebadennoù diabarzh hag e vartezeadoù (deconstruct).",
                    "examples": [
                        "Dielfonnet he deus ar bolitikerezh evit diskouez he liammoù ideologel."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "dielfonnas",
            "v3": "dielfonnet",
            "group": "añ",
            "auxiliary": "kaout"
        },
        {
            "word": "rakserriñ",
            "level": "proficiency",
            "theme": "law_debate",
            "emoji": "🚪",
            "subtext": "rakserriñ un dibab / rakserriñ an tabut / rakserriñ ar posublost",
            "form": "verb",
            "definitions": [
                {
                    "text": "Mirout ouzh un dra bennak pe e lezel a-gostez en a-raok (foreclose).",
                    "examples": [
                        "Sternidigezh ar goulenn a rakserr ar respontoù dedennusañ."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "rakserris",
            "v3": "rakserret",
            "group": "iñ",
            "auxiliary": "kaout"
        },
        {
            "word": "dialegekaat",
            "level": "proficiency",
            "theme": "philosophy_academic",
            "emoji": "☯️",
            "subtext": "dialegekaat un daouad / doare dialegek / kentaenn hag enepkentaenn",
            "form": "verb",
            "definitions": [
                {
                    "text": "Trettiñ un dra bennak en un doare dialegek, o kemer e kont an etrewagadur etre nerzhioù enep.",
                    "examples": [
                        "Dialegekaat a ra an enebadur etre frankiz ha surentez."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "dialegekaas",
            "v3": "dialegekaet",
            "group": "aat",
            "auxiliary": "kaout"
        },
        {
            "word": "hegemonekaat",
            "level": "proficiency",
            "theme": "politics_sociology",
            "emoji": "👑",
            "subtext": "hegemonekaat an diviz / stourm ouzh an hegemonekadur",
            "form": "verb",
            "definitions": [
                {
                    "text": "Kaout ul levezon bennañ war ur vaezienn pe un diviz.",
                    "examples": [
                        "Ur stern teoriel en deus deuet a-benn da hegemonekaat ar vaezienn a-bezh."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "hegemonekaas",
            "v3": "hegemonekaet",
            "group": "aat",
            "auxiliary": "kaout"
        },
        {
            "word": "pouezañ war",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "🔊",
            "subtext": "pouezañ war un diforc'h / pouezañ war ar poentoù mat",
            "form": "verb",
            "definitions": [
                {
                    "text": "Lakaat un dra bennak da vezañ muioc'h heverk pe muioc'h war-raok (accentuate).",
                    "examples": [
                        "Ar c'hrizis en deus pouezet war an dizingalderioù a oa dija en hollad al labourerien."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "pouezas war",
            "v3": "pouezet war",
            "group": "locution",
            "auxiliary": "kaout"
        },
        {
            "word": "plegañ da",
            "level": "proficiency",
            "theme": "debate_communication",
            "emoji": "🤝",
            "subtext": "plegañ da / asantiñ da / plegadur a-enep galon",
            "form": "verb",
            "definitions": [
                {
                    "text": "Degemer pe asantiñ d'un dra bennak, alies en un doare sioul pe pasivel (acquiesce).",
                    "examples": [
                        "Plegañ a reas da ziviz ar poellgor daoust d'e enebadur kreñv."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "plegas da",
            "v3": "pleget da",
            "group": "locution",
            "auxiliary": "kaout"
        },
        {
            "word": "skañvaat",
            "level": "proficiency",
            "theme": "policy_general",
            "emoji": "🩹",
            "subtext": "skañvaat ar boan / skañvaat ar baourentez / skañvaat ar gwask",
            "form": "verb",
            "definitions": [
                {
                    "text": "Lakaat ur gudenn pe un arouez da vezañ nebeutoc'h grav (alleviate).",
                    "examples": [
                        "Ar bolitikerezh nevez n'he deus graet nemeur evit skañvaat krizis an annez."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "skañvaas",
            "v3": "skañvaet",
            "group": "aat",
            "auxiliary": "kaout"
        },
        {
            "word": "treuzveizañ",
            "level": "proficiency",
            "theme": "debate_general",
            "emoji": "🏃",
            "subtext": "treuzveizañ ar reolennoù / treuzveizañ ur gudenn / treuzveizañ reoladurioù",
            "form": "verb",
            "definitions": [
                {
                    "text": "Tec'hout ouzh un diaester pe ur skoilh en un doare speredek (circumvent).",
                    "examples": [
                        "Kavet he deus un doare lezennel da dreuzveizañ ar skoilh melestradurel."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "treuzveizas",
            "v3": "treuzveizet",
            "group": "añ",
            "auxiliary": "kaout"
        },
        {
            "word": "kadarnaat",
            "level": "proficiency",
            "theme": "academic_research",
            "emoji": "✅",
            "subtext": "kadarnaat un embann / kadarnaat prouennoù / bezañ kadarnaet gant",
            "form": "verb",
            "definitions": [
                {
                    "text": "Kadarnaat pe souten un deorienn pe un diskleriadur gant prouennoù ouzhpenn (corroborate).",
                    "examples": [
                        "Testeni an tustur en deus kadarnaet penn-da-benn ar prouennoù dre skrid."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "kadarnaas",
            "v3": "kadarnaet",
            "group": "aat",
            "auxiliary": "kaout"
        },
        {
            "word": "skignañ",
            "level": "proficiency",
            "theme": "academic_research",
            "emoji": "📢",
            "subtext": "skignañ titouroù / skignañ dizoloadennoù / skignet ledan",
            "form": "verb",
            "definitions": [
                {
                    "text": "Skignañ titouroù pe anaoudegezhioù e-touez kalz a dud (disseminate).",
                    "examples": [
                        "An dizoloadennoù a voe skignet dre rouedadoù enklask etrebroadel."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "skignas",
            "v3": "skignet",
            "group": "añ",
            "auxiliary": "kaout"
        },
        {
            "word": "kenvellañ",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "💊",
            "subtext": "kenvellañ ur mennozh / kenvellañ ar gudenn / kenvellañ mat",
            "form": "verb",
            "definitions": [
                {
                    "text": "Ezteuler perzhioù pennañ un dra bennak en un doare berr (encapsulate).",
                    "examples": [
                        "Ar frazenn-mañ a genvell mat paradoks al labour modern."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "kenvellas",
            "v3": "kenvellet",
            "group": "añ",
            "auxiliary": "kaout"
        },
        {
            "word": "engehentañ",
            "level": "proficiency",
            "theme": "sociology_general",
            "emoji": "🌱",
            "subtext": "engehentañ fiziañs / engehentañ tabut / engehentañ droukrañs",
            "form": "verb",
            "definitions": [
                {
                    "text": "Lakaat ur santimant, ur stad pe un degouezh da ziwan (engender).",
                    "examples": [
                        "Ar bolitikerezh nevez he deus engehentet droukrañs bras e-touez ar vicherourien."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "engehentas",
            "v3": "engehentet",
            "group": "añ",
            "auxiliary": "kaout"
        },
        {
            "word": "gwashaat",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "🔥",
            "subtext": "gwashaat ur gudenn / gwashaat an dizingalder",
            "form": "verb",
            "definitions": [
                {
                    "text": "Lakaat ur gudenn pe un degouezh fall da vezañ falloc'h c'hoazh (exacerbate).",
                    "examples": [
                        "An enkadenn armerzhel he deus gwasheet an dizingalderioù soshial a oa dija."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "gwashaas",
            "v3": "gwashaet",
            "group": "aat",
            "auxiliary": "kaout"
        },
        {
            "word": "skoueriaat",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "📖",
            "subtext": "skoueriaat un dra bennak / skoueriaat ar gudenn / skoueriaat splann",
            "form": "verb",
            "definitions": [
                {
                    "text": "Bezañ ur skouer skoueriek eus un dra bennak (exemplify).",
                    "examples": [
                        "He micher a skoueria an drefen a gav ar merc'hed er postoù uhel."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "skoueriaas",
            "v3": "skoueriaet",
            "group": "aat",
            "auxiliary": "kaout"
        },
        {
            "word": "skoilhañ",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "🚧",
            "subtext": "skoilhañ an araokadenn / skoilhañ ar c'hresk / skoilhañ unan bennak d'ober",
            "form": "verb",
            "definitions": [
                {
                    "text": "Lakaat diaesterioù pe dale da araokadenn un dra bennak (impede).",
                    "examples": [
                        "Ur reoliata re greñv a c'hall skoilhañ an neveziñ e greanterezhioù nevez."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "skoilhas",
            "v3": "skoilhet",
            "group": "añ",
            "auxiliary": "kaout"
        },
        {
            "word": "koazhañ",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "🛡️",
            "subtext": "koazhañ ar riskl / koazhañ an efed / stourm ouzh",
            "form": "verb",
            "definitions": [
                {
                    "text": "Lakaat un dra bennak da vezañ nebeutoc'h grav, rust pe boanius (mitigate).",
                    "examples": [
                        "Ur c'hehentiñ mat a c'hall sikour da goazhañ levezon ar cheñchamant."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "koazhas",
            "v3": "koazhet",
            "group": "añ",
            "auxiliary": "kaout"
        },
        {
            "word": "rediañ",
            "level": "proficiency",
            "theme": "law_general",
            "emoji": "⚖️",
            "subtext": "bezañ rediet da / rediañ unan bennak da / en em santiñ rediet",
            "form": "verb",
            "definitions": [
                {
                    "text": "Lakaat unan bennak d'ober un dra bennak, ent-lezennel pe ent-moral.",
                    "examples": [
                        "Al lezenn a redi an holl implijerien da bourchas un endro labour sukr."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "redias",
            "v3": "rediet",
            "group": "añ",
            "auxiliary": "kaout"
        },
        {
            "word": "treuziñ",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "💧",
            "subtext": "treuziñ an aozadur / bezañ treuzet gant / hollvezant",
            "form": "verb",
            "definitions": [
                {
                    "text": "Bezañ prezant e pep lodenn eus un dra bennak (pervade).",
                    "examples": [
                        "Ur sevenadur a dreuzlabour a dreuz rann ar servijoù arc'hantel."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "stative",
            "v2": "treuzis",
            "v3": "treuzet",
            "group": "iñ",
            "auxiliary": "kaout"
        },
        {
            "word": "diarbenn",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "🚫",
            "subtext": "diarbenn unan bennak / diarbenn ar posublost / chom hep diarbenn",
            "form": "verb",
            "definitions": [
                {
                    "text": "Mirout ouzh un dra bennak da c'hoarvezout pe ouzh unan bennak da gemer perzh (preclude).",
                    "examples": [
                        "E vank a skiant-prenañ a ziarbennas anezhañ diouzh ar roll-dibab."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "diarbennas",
            "v3": "diarbennet",
            "group": "regular",
            "auxiliary": "kaout"
        },
        {
            "word": "kempouezañ",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "🤝",
            "subtext": "kempouezañ mennozhioù / diaes da gempouezañ / kempouezañ dizingalderioù",
            "form": "verb",
            "definitions": [
                {
                    "text": "Kavout un doare d'ober evit ma vevfe asambles daou vennozh pe div stad enebet (reconcile).",
                    "examples": [
                        "Dibosubl e kavas kempouezañ he zalvoudoù gant sevenadur an embregerezh."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "kempouezas",
            "v3": "kempouezet",
            "group": "añ",
            "auxiliary": "kaout"
        },
        {
            "word": "erlec'hiañ",
            "level": "proficiency",
            "theme": "law_academic",
            "emoji": "🔄",
            "subtext": "erlec'hiañ ul lezenn / bezañ erlec'hiet gant",
            "form": "verb",
            "definitions": [
                {
                    "text": "Kemer plas un dra bennak a veze implijet diaraok (supersede).",
                    "examples": [
                        "Ar reolennoù nevez a erlec'hio an holl stummoù kent."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "erlec'hias",
            "v3": "erlec'hiet",
            "group": "añ",
            "auxiliary": "kaout"
        },
        {
            "word": "diazezañ",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "⚓",
            "subtext": "diazezañ un arguzenn / diazezañ ar berzh / bezañ diazezet war",
            "form": "verb",
            "definitions": [
                {
                    "text": "Servijout evel diaz pe souten d'un dra bennak (underpin).",
                    "examples": [
                        "Ur fiziañs vras a ziazez kement kenlabour hirbadus a ra berzh."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "stative",
            "v2": "diazezas",
            "v3": "diazezet",
            "group": "añ",
            "auxiliary": "kaout"
        },
        {
            "word": "mirc'hellañ",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "🏆",
            "subtext": "mirc'hellañ unan bennak / mirc'hellañ un diviz / en em santiñ mirc'hellet",
            "form": "verb",
            "definitions": [
                {
                    "text": "Diskouez e oa reizh pe reizhet unan bennak pe un dra bennak (vindicate).",
                    "examples": [
                        "An disoc'hoù o deus mirc'hellet he diviz tabutel daou vloaz war-lerc'h."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "mirc'hellas",
            "v3": "mirc'hellet",
            "group": "añ",
            "auxiliary": "kaout"
        },
        {
            "word": "dependiñ diouzh",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "⛓️",
            "subtext": "dependiñ diouzh un diviz / kement tra a depend diouzh",
            "form": "verb",
            "definitions": [
                {
                    "text": "Bezañ termenet gant pe dindan dalc'h un dra bennak (hinge on).",
                    "examples": [
                        "Berzh ar raktres a-bezh a depend diouzh asant ar c'hliant."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "stative",
            "v2": "dependis diouzh",
            "v3": "dependet diouzh",
            "group": "locution",
            "auxiliary": "kaout"
        },
        {
            "word": "stourm ouzh",
            "level": "proficiency",
            "theme": "general_academic",
            "emoji": "🤼",
            "subtext": "stourm ouzh ur gudenn / stourm ouzh an heuliadoù / stourm ouzh ar luziegezh",
            "form": "verb",
            "definitions": [
                {
                    "text": "Klask nerzhus tretiñ pe kounit ur gudenn diaes (grapple with).",
                    "examples": [
                        "Ar bolitikourien a stourm c'hoazh ouzh heuliadoù an IA."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "stourmas ouzh",
            "v3": "stourmet ouzh",
            "group": "locution",
            "auxiliary": "kaout"
        },
        {
            "word": "pasañ dreist",
            "level": "proficiency",
            "theme": "debate_academic",
            "emoji": "🙈",
            "subtext": "pasañ dreist ur gudenn / pasañ dreist ar munudoù",
            "form": "verb",
            "definitions": [
                {
                    "text": "Trettiñ un dra bennak evel pa ne vije ket pouezus; chom hep ober van eus fedoù displijus (gloss over).",
                    "examples": [
                        "An danevell a bas dreist ar munudoù arc'hantel tabutusañ."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "pasas dreist",
            "v3": "paset dreist",
            "group": "locution",
            "auxiliary": "kaout"
        },
        {
            "word": "kuzhat",
            "level": "proficiency",
            "theme": "debate_politics",
            "emoji": "🩹",
            "subtext": "kuzhat ur gudenn / kuzhat an diforc'hioù",
            "form": "verb",
            "definitions": [
                {
                    "text": "Klask kuzhat pe chom hep ober van eus ur stad diaes evit ma seblantfe bezañ gwelloc'h (paper over).",
                    "examples": [
                        "An emglev n'en deus graet nemet kuzhat an dizingalderioù frammel don."
                    ]
                }
            ],
            "classification": "regular",
            "aspect": "action",
            "v2": "kuzhatas",
            "v3": "kuzhatet",
            "group": "at",
            "auxiliary": "kaout"
        },
        {
            "word": "cheñchamant paradign",
            "level": "proficiency",
            "theme": "academic_general",
            "emoji": "🔄",
            "subtext": "ur cheñchamant diazez en doare d'ober",
            "form": "verb",
            "definitions": [
                {
                    "text": "Ur cheñchamant diazez en doare d'ober pe er martezeadoù dindan.",
                    "examples": [
                        "Degemer an teknologiezh nevez-mañ a ya d'ober ur cheñchamant paradign er greanterezh."
                    ]
                }
            ],
            "classification": "irregular",
            "aspect": "action",
            "v2": "cheñchas paradign",
            "v3": "cheñchet paradign",
            "group": "locution",
            "auxiliary": "kaout"
        }
    ];
    window.vocabularyData[lang] = [
        ...(window.vocabularyData[lang] || []),
        ...data
    ];
})();
