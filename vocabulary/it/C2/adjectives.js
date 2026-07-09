// TODO: verify level classification
(function() {
    const lang = "it";
    const data = [
    {
        "word": "abrupto",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⏱️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Improvviso e inaspettato; brusco e sgarbato nei modi.",
                "examples": [
                    "La conversazione giunse a una fine abrupta e inaspettata."
                ]
            }
        ],
        "subtext": "una fine abrupta / modi abrupti / si fermò abruptamente",
        "comparative": "più abrupto",
        "superlative": "il più abrupto",
        "synonyms": [
            "improvviso",
            "brusco"
        ],
        "lang": "it",
        "id": "it_proficiency_language_001",
        "antonyms": [
            "graduale"
        ],
        "transcription": ""
    },
    {
        "word": "astruso",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🧐",
        "form": "adjective",
        "definitions": [
            {
                "text": "Difficile da comprendere; oscuro o complesso.",
                "examples": [
                    "L'articolo è stato criticato per il suo quadro teorico astruso."
                ]
            }
        ],
        "subtext": "molto astruso / piuttosto astruso / un argomento astruso",
        "comparative": "più astruso",
        "superlative": "il più astruso",
        "synonyms": [
            "oscuro",
            "recondito"
        ],
        "lang": "it",
        "id": "it_proficiency_psychology_001",
        "antonyms": [
            "semplice"
        ],
        "transcription": ""
    },
    {
        "word": "anacronistico",
        "level": "proficiency",
        "theme": "time",
        "emoji": "⌛",
        "form": "adjective",
        "definitions": [
            {
                "text": "Antiquato; appartenente a un'epoca precedente.",
                "examples": [
                    "La politica sembra totalmente anacronistica nel contesto attuale."
                ]
            }
        ],
        "subtext": "totalmente anacronistico / sempre più anacronistico / profondamente anacronistico",
        "comparative": "più anacronistico",
        "superlative": "il più anacronistico",
        "synonyms": [
            "antiquato",
            "arcaico"
        ],
        "lang": "it",
        "id": "it_proficiency_time_001",
        "antonyms": [
            "contemporaneo"
        ],
        "transcription": ""
    },
    {
        "word": "antitetico",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Direttamente opposto o contrario a qualcosa.",
                "examples": [
                    "Le sue azioni erano antitetiche ai valori che sosteneva di difendere."
                ]
            }
        ],
        "subtext": "direttamente antitetico / totalmente antitetico / antitetico a",
        "comparative": "più antitetico",
        "superlative": "il più antitetico",
        "synonyms": [
            "contrario",
            "opposto"
        ],
        "lang": "it",
        "id": "it_proficiency_language_002",
        "antonyms": [
            "identico"
        ],
        "transcription": ""
    },
    {
        "word": "arcano",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🔮",
        "form": "adjective",
        "definitions": [
            {
                "text": "Conosciuto solo da poche persone; misterioso e segreto.",
                "examples": [
                    "La procedura era inutilmente arcana e inaccessibile."
                ]
            }
        ],
        "subtext": "molto arcano / totalmente arcano / conoscenza arcana",
        "comparative": "più arcano",
        "superlative": "il più arcano",
        "synonyms": [
            "misterioso",
            "segreto"
        ],
        "lang": "it",
        "id": "it_proficiency_psychology_002",
        "antonyms": [
            "comune"
        ],
        "transcription": ""
    },
    {
        "word": "atipico",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🦄",
        "form": "adjective",
        "definitions": [
            {
                "text": "Non tipico; non normale o abituale.",
                "examples": [
                    "Questo è stato un caso atipico che non riflette la norma."
                ]
            }
        ],
        "subtext": "molto atipico / altamente atipico / statisticamente atipico",
        "comparative": "più atipico",
        "superlative": "il più atipico",
        "synonyms": [
            "inusuale",
            "anormale"
        ],
        "lang": "it",
        "id": "it_proficiency_language_003",
        "antonyms": [
            "tipico"
        ],
        "transcription": ""
    },
    {
        "word": "binario",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔢",
        "form": "adjective",
        "definitions": [
            {
                "text": "Composto da due cose; basato su una dicotomia.",
                "examples": [
                    "Il dibattito presenta un falso binario tra crescita e giustizia."
                ]
            }
        ],
        "subtext": "un falso binario / una scelta binaria / non puramente binario",
        "comparative": "più binario",
        "superlative": "il più binario",
        "synonyms": [
            "duale",
            "doppio"
        ],
        "lang": "it",
        "id": "it_proficiency_language_004",
        "antonyms": [
            "unitario"
        ],
        "transcription": ""
    },
    {
        "word": "categorico",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❗",
        "form": "adjective",
        "definitions": [
            {
                "text": "Assoluto; espresso senza eccezioni o condizioni.",
                "examples": [
                    "Ha dato una smentita categorica delle accuse."
                ]
            }
        ],
        "subtext": "una smentita categorica / rifiutato categoricamente / assolutamente categorico",
        "comparative": "più categorico",
        "superlative": "il più categorico",
        "synonyms": [
            "assoluto",
            "incondizionato"
        ],
        "lang": "it",
        "id": "it_proficiency_language_005",
        "antonyms": [
            "qualificato"
        ],
        "transcription": ""
    },
    {
        "word": "circospetto",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛡️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Cauto nel considerare tutte le circostanze; prudente.",
                "examples": [
                    "È stato circospetto nelle sue dichiarazioni pubbliche."
                ]
            }
        ],
        "subtext": "molto circospetto / estremamente circospetto / rimanere circospetto",
        "comparative": "più circospetto",
        "superlative": "il più circospetto",
        "synonyms": [
            "prudente",
            "cauto"
        ],
        "lang": "it",
        "id": "it_proficiency_social_001",
        "antonyms": [
            "temerario"
        ],
        "transcription": ""
    },
    {
        "word": "coperto",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🕵️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Nascosto; segreto; non riconosciuto apertamente.",
                "examples": [
                    "L'operazione prevedeva la sorveglianza coperta del gruppo."
                ]
            }
        ],
        "subtext": "totalmente coperto / un'operazione coperta / profondamente coperto",
        "comparative": "più coperto",
        "superlative": "il più coperto",
        "synonyms": [
            "segreto",
            "clandestino"
        ],
        "lang": "it",
        "id": "it_proficiency_social_002",
        "antonyms": [
            "aperto"
        ],
        "transcription": ""
    },
    {
        "word": "dialettico",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relativo alla discussione logica di idee attraverso gli opposti.",
                "examples": [
                    "L'analisi utilizza un metodo dialettico in tutto il testo."
                ]
            }
        ],
        "subtext": "un approccio dialettico / tensione dialettica / risolto dialetticamente",
        "comparative": "più dialettico",
        "superlative": "il più dialettico",
        "synonyms": [
            "logico",
            "analitico"
        ],
        "lang": "it",
        "id": "it_proficiency_language_006",
        "transcription": ""
    },
    {
        "word": "diffuso",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌫️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Sparso su una vasta area; privo di chiarezza.",
                "examples": [
                    "L'argomento era troppo diffuso per fare una forte impressione."
                ]
            }
        ],
        "subtext": "molto diffuso / piuttosto diffuso / una risposta diffusa",
        "comparative": "più diffuso",
        "superlative": "il più diffuso",
        "synonyms": [
            "disperso",
            "vago"
        ],
        "lang": "it",
        "id": "it_proficiency_language_007",
        "antonyms": [
            "concentrato"
        ],
        "transcription": ""
    },
    {
        "word": "elusivo",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🌬️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Difficile da trovare, catturare o raggiungere.",
                "examples": [
                    "La verità in questo caso si è rivelata notevolmente elusiva."
                ]
            },
            {
                "text": "Difficile da afferrare o ricordare.",
                "examples": [
                    "Un chiaro consenso rimane elusivo."
                ]
            }
        ],
        "subtext": "molto elusivo / rimane elusivo / un obiettivo elusivo / una qualità elusiva",
        "comparative": "più elusivo",
        "superlative": "il più elusivo",
        "synonyms": [
            "evasivo",
            "sfuggente"
        ],
        "lang": "it",
        "id": "it_proficiency_psychology_003",
        "antonyms": [
            "raggiungibile"
        ],
        "transcription": ""
    },
    {
        "word": "esoterico",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🗝️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Compreso da o destinato solo a un piccolo gruppo ristretto.",
                "examples": [
                    "Il dibattito è diventato troppo esoterico per un pubblico generale."
                ]
            }
        ],
        "subtext": "molto esoterico / piuttosto esoterico / profondamente esoterico",
        "comparative": "più esoterico",
        "superlative": "il più esoterico",
        "synonyms": [
            "arcano",
            "oscuro"
        ],
        "lang": "it",
        "id": "it_proficiency_psychology_004",
        "antonyms": [
            "essoterico"
        ],
        "transcription": ""
    },
    {
        "word": "fallace",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❌",
        "form": "adjective",
        "definitions": [
            {
                "text": "Basato su un ragionamento falso; ingannevole.",
                "examples": [
                    "Il tuo argomento è fondamentalmente fallace."
                ]
            }
        ],
        "subtext": "profondamente fallace / logicamente fallace / un'affermazione fallace",
        "comparative": "più fallace",
        "superlative": "il più fallace",
        "synonyms": [
            "falso",
            "errato"
        ],
        "lang": "it",
        "id": "it_proficiency_language_008",
        "antonyms": [
            "solido"
        ],
        "transcription": ""
    },
    {
        "word": "immutabile",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧱",
        "form": "adjective",
        "definitions": [
            {
                "text": "Incapace di essere cambiato; fisso e permanente.",
                "examples": [
                    "Il linguaggio non è immutabile — si evolve costantemente."
                ]
            }
        ],
        "subtext": "totalmente immutabile / non immutabile / un fatto immutabile",
        "comparative": "più immutabile",
        "superlative": "il più immutabile",
        "synonyms": [
            "fisso",
            "permanente"
        ],
        "lang": "it",
        "id": "it_proficiency_language_009",
        "antonyms": [
            "mutabile"
        ],
        "transcription": ""
    },
    {
        "word": "imparziale",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Che non favorisce una parte rispetto a un'altra; giusto.",
                "examples": [
                    "La commissione deve essere completamente imparziale nel suo giudizio."
                ]
            }
        ],
        "subtext": "completamente imparziale / strettamente imparziale / un osservatore imparziale",
        "comparative": "più imparziale",
        "superlative": "il più imparziale",
        "synonyms": [
            "giusto",
            "neutro"
        ],
        "lang": "it",
        "id": "it_proficiency_social_003",
        "antonyms": [
            "parziale"
        ],
        "transcription": ""
    },
    {
        "word": "incidentale",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🍃",
        "form": "adjective",
        "definitions": [
            {
                "text": "Che accade come parte minore di qualcos'altro.",
                "examples": [
                    "Il risparmio era incidentale piuttosto che l'obiettivo principale."
                ]
            }
        ],
        "subtext": "puramente incidentale / meramente incidentale / incidentale a",
        "comparative": "più incidentale",
        "superlative": "il più incidentale",
        "synonyms": [
            "secondario",
            "minore"
        ],
        "lang": "it",
        "id": "it_proficiency_language_010",
        "antonyms": [
            "centrale"
        ],
        "transcription": ""
    },
    {
        "word": "inerente",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚛️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Esistente in qualcosa come qualità naturale e permanente.",
                "examples": [
                    "Il sistema è inerentemente difettoso e deve essere riprogettato."
                ]
            }
        ],
        "subtext": "inerentemente difettoso / inerentemente prevenuto / inerentemente problematico",
        "comparative": "più inerente",
        "superlative": "il più inerente",
        "synonyms": [
            "innato",
            "intrinseco"
        ],
        "lang": "it",
        "id": "it_proficiency_language_011",
        "antonyms": [
            "estrinseco"
        ],
        "transcription": ""
    },
    {
        "word": "inimitabile",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "🌟",
        "form": "adjective",
        "definitions": [
            {
                "text": "Così buono o insolito che è impossibile copiarlo.",
                "examples": [
                    "Ha un modo inimitabile di rendere chiare idee complesse."
                ]
            }
        ],
        "subtext": "veramente inimitabile / assolutamente inimitabile / uno stile inimitabile",
        "comparative": "più inimitabile",
        "superlative": "il più inimitabile",
        "synonyms": [
            "unico",
            "ineguagliabile"
        ],
        "lang": "it",
        "id": "it_proficiency_art_culture_001",
        "antonyms": [
            "comune"
        ],
        "transcription": ""
    },
    {
        "word": "insidioso",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🐍",
        "form": "adjective",
        "definitions": [
            {
                "text": "Che progredisce gradualmente in modo dannoso.",
                "examples": [
                    "Gli effetti dello stress a lungo termine possono essere insidiosi."
                ]
            }
        ],
        "subtext": "molto insidioso / profondamente insidioso / un processo insidioso",
        "comparative": "più insidioso",
        "superlative": "il più insidioso",
        "synonyms": [
            "subdolo",
            "sottile"
        ],
        "lang": "it",
        "id": "it_proficiency_social_004",
        "antonyms": [
            "diretto"
        ],
        "transcription": ""
    },
    {
        "word": "irreconciliabile",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚫",
        "form": "adjective",
        "definitions": [
            {
                "text": "Incapace di essere conciliato o reso compatibile.",
                "examples": [
                    "Le due posizioni sono fondamentalmente irreconciliabili."
                ]
            }
        ],
        "subtext": "fondamentalmente irreconciliabile / totalmente irreconciliabile / differenze irreconciliabili",
        "comparative": "più irreconciliabile",
        "superlative": "il più irreconciliabile",
        "synonyms": [
            "incompatibile",
            "conflittuale"
        ],
        "lang": "it",
        "id": "it_proficiency_language_012",
        "antonyms": [
            "compatibile"
        ],
        "transcription": ""
    },
    {
        "word": "liminale",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚪",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relativo a uno stato di transizione o intermedio.",
                "examples": [
                    "I mesi successivi al licenziamento sono un periodo veramente liminale."
                ]
            }
        ],
        "subtext": "uno spazio liminale / una fase liminale / profondamente liminale",
        "comparative": "più liminale",
        "superlative": "il più liminale",
        "synonyms": [
            "transizionale",
            "soglia"
        ],
        "lang": "it",
        "id": "it_proficiency_language_013",
        "transcription": ""
    },
    {
        "word": "multiplo",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔢",
        "form": "adjective",
        "definitions": [
            {
                "text": "Numeroso e di diversi tipi.",
                "examples": [
                    "Le implicazioni di questa decisione sono multiple."
                ]
            }
        ],
        "subtext": "implicazioni multiple / problemi multipli / sfide multiple",
        "comparative": "più multiplo",
        "superlative": "il più multiplo",
        "synonyms": [
            "numeroso",
            "diverso"
        ],
        "lang": "it",
        "id": "it_proficiency_language_014",
        "antonyms": [
            "unico"
        ],
        "transcription": ""
    },
    {
        "word": "nebuloso",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "☁️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Non chiaro; vago e mal definito.",
                "examples": [
                    "Il concetto rimane un po' nebuloso nel rapporto."
                ]
            }
        ],
        "subtext": "molto nebuloso / piuttosto nebuloso / pericolosamente nebuloso",
        "comparative": "più nebuloso",
        "superlative": "il più nebuloso",
        "synonyms": [
            "vago",
            "diffuso"
        ],
        "lang": "it",
        "id": "it_proficiency_psychology_005",
        "antonyms": [
            "distinto"
        ],
        "transcription": ""
    },
    {
        "word": "normativo",
        "level": "proficiency",
        "theme": "social",
        "emoji": "📏",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relativo a una norma; che prescrive ciò che dovrebbe essere.",
                "examples": [
                    "Questa è un'affermazione normativa, non descrittiva."
                ]
            }
        ],
        "subtext": "un quadro normativo / presupposto normativo / affermazione normativa",
        "comparative": "più normativo",
        "superlative": "il più normativo",
        "synonyms": [
            "prescrittivo",
            "standard"
        ],
        "lang": "it",
        "id": "it_proficiency_social_005",
        "antonyms": [
            "descrittivo"
        ],
        "transcription": ""
    },
    {
        "word": "sfumato",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌗",
        "form": "adjective",
        "definitions": [
            {
                "text": "Che mostra distinzioni sottili; non semplice o estremo.",
                "examples": [
                    "Il rapporto fornisce un resoconto molto sfumato della questione."
                ]
            }
        ],
        "subtext": "molto sfumato / altamente sfumato / un argomento sfumato",
        "comparative": "più sfumato",
        "superlative": "il più sfumato",
        "synonyms": [
            "sottile",
            "raffinato"
        ],
        "lang": "it",
        "id": "it_proficiency_language_015",
        "antonyms": [
            "grossolano"
        ],
        "transcription": ""
    },
    {
        "word": "obliquo",
        "level": "proficiency",
        "theme": "language",
        "emoji": "↗️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Non diretto; indiretto; che non è retto o aperto.",
                "examples": [
                    "Ha dato una risposta obliqua che non ha soddisfatto nessuno."
                ]
            }
        ],
        "subtext": "un po' obliquo / molto obliquo / un riferimento obliquo",
        "comparative": "più obliquo",
        "superlative": "il più obliquo",
        "synonyms": [
            "indiretto",
            "dispartito"
        ],
        "lang": "it",
        "id": "it_proficiency_language_016",
        "antonyms": [
            "diretto"
        ],
        "transcription": ""
    },
    {
        "word": "opaco",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌑",
        "form": "adjective",
        "definitions": [
            {
                "text": "Non trasparente; difficile da comprendere.",
                "examples": [
                    "Il ragionamento del governo è stato completamente opaco."
                ]
            }
        ],
        "subtext": "molto opaco / completamente opaco / profondamente opaco",
        "comparative": "più opaco",
        "superlative": "il più opaco",
        "synonyms": [
            "oscuro",
            "poco chiaro"
        ],
        "lang": "it",
        "id": "it_proficiency_language_017",
        "antonyms": [
            "trasparente"
        ],
        "transcription": ""
    },
    {
        "word": "ostensibile",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🎭",
        "form": "adjective",
        "definitions": [
            {
                "text": "Che sembra essere qualcosa; dichiarato come reale o vero.",
                "examples": [
                    "L'obiettivo ostensibile era l'efficienza; quello reale era il controllo."
                ]
            }
        ],
        "subtext": "l'obiettivo ostensibile / ostensibilmente corretto / motivazione ostensibile",
        "comparative": "più ostensibile",
        "superlative": "il più ostensibile",
        "synonyms": [
            "apparente",
            "presunto"
        ],
        "lang": "it",
        "id": "it_proficiency_language_018",
        "antonyms": [
            "vero"
        ],
        "transcription": ""
    },
    {
        "word": "paradossale",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔄",
        "form": "adjective",
        "definitions": [
            {
                "text": "Che si contraddice ma contiene una verità.",
                "examples": [
                    "È paradossale che fare meno possa a volte far ottenere di più."
                ]
            }
        ],
        "subtext": "apparentemente paradossale / profondamente paradossale / una situazione paradossale",
        "comparative": "più paradossale",
        "superlative": "il più paradossale",
        "synonyms": [
            "contraddittorio",
            "ironico"
        ],
        "lang": "it",
        "id": "it_proficiency_language_019",
        "antonyms": [
            "coerente"
        ],
        "transcription": ""
    },
    {
        "word": "pervasivo",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌊",
        "form": "adjective",
        "definitions": [
            {
                "text": "Presente ovunque; che si diffonde ampiamente.",
                "examples": [
                    "Una cultura del sovraccarico di lavoro è pervasiva in questo settore."
                ]
            }
        ],
        "subtext": "molto pervasivo / sempre più pervasivo / pervasivo",
        "comparative": "più pervasivo",
        "superlative": "il più pervasivo",
        "synonyms": [
            "diffuso",
            "prevalente"
        ],
        "lang": "it",
        "id": "it_proficiency_time_002",
        "antonyms": [
            "raro"
        ],
        "transcription": ""
    },
    {
        "word": "polarizzante",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🧲",
        "form": "adjective",
        "definitions": [
            {
                "text": "Che porta le persone a prendere posizioni opposte.",
                "examples": [
                    "La proposta è stata profondamente polarizzante all'interno dell'organizzazione."
                ]
            }
        ],
        "subtext": "profondamente polarizzante / estremamente polarizzante / altamente polarizzante",
        "comparative": "più polarizzante",
        "superlative": "il più polarizzante",
        "synonyms": [
            "divisivo",
            "conflittuale"
        ],
        "lang": "it",
        "id": "it_proficiency_social_006",
        "antonyms": [
            "unificante"
        ],
        "transcription": ""
    },
    {
        "word": "precario",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧗",
        "form": "adjective",
        "definitions": [
            {
                "text": "Non sicuro o certo; dipendente dal caso.",
                "examples": [
                    "Ha lasciato una vita da freelance precario per un posto stabile."
                ]
            }
        ],
        "subtext": "molto precario / profondamente precario / una posizione precaria",
        "comparative": "più precario",
        "superlative": "il più precario",
        "synonyms": [
            "instabile",
            "rischioso"
        ],
        "lang": "it",
        "id": "it_proficiency_language_020",
        "antonyms": [
            "stabile"
        ],
        "transcription": ""
    },
    {
        "word": "prescrittivo",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📜",
        "form": "adjective",
        "definitions": [
            {
                "text": "Che detta ciò che deve essere fatto; che stabilisce regole.",
                "examples": [
                    "Le linee guida sono troppo prescrittive per consentire la creatività."
                ]
            }
        ],
        "subtext": "molto prescrittivo / altamente prescrittivo / eccessivamente prescrittivo",
        "comparative": "più prescrittivo",
        "superlative": "il più prescrittivo",
        "synonyms": [
            "dittatoriale",
            "rigido"
        ],
        "lang": "it",
        "id": "it_proficiency_language_021",
        "antonyms": [
            "descrittivo"
        ],
        "transcription": ""
    },
    {
        "word": "prolungato",
        "level": "proficiency",
        "theme": "time",
        "emoji": "⌛",
        "form": "adjective",
        "definitions": [
            {
                "text": "Che dura più a lungo del previsto.",
                "examples": [
                    "La controversia legale è stata lunga e prolungata."
                ]
            }
        ],
        "subtext": "molto prolungato / estremamente prolungato / un processo prolungato",
        "comparative": "più prolungato",
        "superlative": "il più prolungato",
        "synonyms": [
            "esteso",
            "lungo"
        ],
        "lang": "it",
        "id": "it_proficiency_time_003",
        "antonyms": [
            "breve"
        ],
        "transcription": ""
    },
    {
        "word": "riduttivo",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📉",
        "form": "adjective",
        "definitions": [
            {
                "text": "Che semplifica eccessivamente qualcosa di complesso.",
                "examples": [
                    "Sarebbe riduttivo spiegare tutto solo con l'avidità."
                ]
            }
        ],
        "subtext": "molto riduttivo / profondamente riduttivo / un'analisi riduttiva",
        "comparative": "più riduttivo",
        "superlative": "il più riduttivo",
        "synonyms": [
            "semplicistico",
            "minimalista"
        ],
        "lang": "it",
        "id": "it_proficiency_language_022",
        "antonyms": [
            "complesso"
        ],
        "transcription": ""
    },
    {
        "word": "seminale",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌱",
        "form": "adjective",
        "definitions": [
            {
                "text": "Molto importante e influente; originale.",
                "examples": [
                    "Questo è stato un momento seminale nella storia dell'azienda."
                ]
            }
        ],
        "subtext": "veramente seminale / un'opera seminale / una figura seminale",
        "comparative": "più seminale",
        "superlative": "il più seminale",
        "synonyms": [
            "influente",
            "innovativo"
        ],
        "lang": "it",
        "id": "it_proficiency_time_004",
        "antonyms": [
            "insignificante"
        ],
        "transcription": ""
    },
    {
        "word": "specioso",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤥",
        "form": "adjective",
        "definitions": [
            {
                "text": "Che sembra corretto ma è, in realtà, falso; ingannevole.",
                "examples": [
                    "L'argomento è superficialmente attraente, ma infine specioso."
                ]
            }
        ],
        "subtext": "molto specioso / un'affermazione speciosa / fondamentalmente specioso",
        "comparative": "più specioso",
        "superlative": "il più specioso",
        "synonyms": [
            "ingannevole",
            "illusorio"
        ],
        "lang": "it",
        "id": "it_proficiency_language_023",
        "antonyms": [
            "valido"
        ],
        "transcription": ""
    },
    {
        "word": "spurio",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤡",
        "form": "adjective",
        "definitions": [
            {
                "text": "Non genuino; basato su un ragionamento falso.",
                "examples": [
                    "Questa è una comparazione spuria che distorce il dibattito."
                ]
            }
        ],
        "subtext": "completamente spurio / totalmente spurio / un argomento spurio",
        "comparative": "più spurio",
        "superlative": "il più spurio",
        "synonyms": [
            "falso",
            "fittizio"
        ],
        "lang": "it",
        "id": "it_proficiency_language_024",
        "antonyms": [
            "autentico"
        ],
        "transcription": ""
    },
    {
        "word": "subversivo",
        "level": "proficiency",
        "theme": "social",
        "emoji": "💣",
        "form": "adjective",
        "definitions": [
            {
                "text": "Destinato a minare un sistema stabilito.",
                "examples": [
                    "L'opera d'arte è stata vista come subversiva dalle autorità."
                ]
            }
        ],
        "subtext": "discretamente subversivo / profondamente subversivo / apertamente subversivo",
        "comparative": "più subversivo",
        "superlative": "il più subversivo",
        "synonyms": [
            "ribelle",
            "disrompente"
        ],
        "lang": "it",
        "id": "it_proficiency_social_007",
        "antonyms": [
            "conformista"
        ],
        "transcription": ""
    },
    {
        "word": "tacito",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤫",
        "form": "adjective",
        "definitions": [
            {
                "text": "Sottinteso o concordato senza essere dichiarato.",
                "examples": [
                    "C'era un'intesa tacita tra loro."
                ]
            }
        ],
        "subtext": "un accordo tacito / approvazione tacita / rimanere tacito",
        "comparative": "più tacito",
        "superlative": "il più tacito",
        "synonyms": [
            "implicito",
            "sottinteso"
        ],
        "lang": "it",
        "id": "it_proficiency_language_025",
        "antonyms": [
            "esplicito"
        ],
        "transcription": ""
    },
    {
        "word": "tenue",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🕸️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Molto debole o leggero; non stabilito saldamente.",
                "examples": [
                    "Il legame tra i due eventi è molto tenue."
                ]
            }
        ],
        "subtext": "molto tenue / piuttosto tenue / un legame tenue",
        "comparative": "più tenue",
        "superlative": "il più tenue",
        "synonyms": [
            "fragile",
            "debole"
        ],
        "lang": "it",
        "id": "it_proficiency_language_026",
        "antonyms": [
            "forte"
        ],
        "transcription": ""
    },
    {
        "word": "transitorio",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌅",
        "form": "adjective",
        "definitions": [
            {
                "text": "Non permanente; che passa rapidamente.",
                "examples": [
                    "I benefici sono stati transitori e sono scomparsi in pochi mesi."
                ]
            }
        ],
        "subtext": "molto transitorio / meramente transitorio / un effetto transitorio",
        "comparative": "più transitorio",
        "superlative": "il più transitorio",
        "synonyms": [
            "temporale",
            "fugace"
        ],
        "lang": "it",
        "id": "it_proficiency_time_005",
        "antonyms": [
            "permanente"
        ],
        "transcription": ""
    },
    {
        "word": "ubiquo",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌍",
        "form": "adjective",
        "definitions": [
            {
                "text": "Che appare ovunque; molto comune.",
                "examples": [
                    "Gli smartphone sono diventati ubiqui nella vita quotidiana."
                ]
            }
        ],
        "subtext": "veramente ubiquo / apparentemente ubiquo / diventare ubiquo",
        "comparative": "più ubiquo",
        "superlative": "il più ubiquo",
        "synonyms": [
            "onnipresente",
            "onnipresente"
        ],
        "lang": "it",
        "id": "it_proficiency_time_006",
        "antonyms": [
            "raro"
        ],
        "transcription": ""
    },
    {
        "word": "inequivocabile",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📢",
        "form": "adjective",
        "definitions": [
            {
                "text": "Che non lascia dubbi; completamente chiaro.",
                "examples": [
                    "Il suo sostegno alla decisione è stato inequivocabile."
                ]
            }
        ],
        "subtext": "completamente inequivocabile / assolutamente inequivocabile / un rifiuto inequivocabile",
        "comparative": "più inequivocabile",
        "superlative": "il più inequivocabile",
        "synonyms": [
            "univoco",
            "chiaro"
        ],
        "lang": "it",
        "id": "it_proficiency_language_027",
        "antonyms": [
            "ambiguo"
        ],
        "transcription": ""
    },
    {
        "word": "senza precedenti",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🚀",
        "form": "adjective",
        "definitions": [
            {
                "text": "Che non è mai accaduto prima.",
                "examples": [
                    "L'azienda ha raggiunto una crescita senza precedenti in cinque anni."
                ]
            }
        ],
        "subtext": "veramente senza precedenti / completamente senza precedenti / un evento senza precedenti",
        "comparative": "più inaudito",
        "superlative": "il più inaudito",
        "synonyms": [
            "unico",
            "innovativo"
        ],
        "lang": "it",
        "id": "it_proficiency_time_007",
        "antonyms": [
            "comune"
        ],
        "transcription": ""
    },
    {
        "word": "insostenibile",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🏗️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Non capace di essere mantenuto o difeso.",
                "examples": [
                    "La sua posizione è diventata completamente insostenibile."
                ]
            }
        ],
        "subtext": "completamente insostenibile / totalmente insostenibile / un argomento insostenibile",
        "comparative": "più insostenibile",
        "superlative": "il più insostenibile",
        "synonyms": [
            "indifendibile",
            "instabile"
        ],
        "lang": "it",
        "id": "it_proficiency_language_028",
        "antonyms": [
            "difendibile"
        ],
        "transcription": ""
    },
    {
        "word": "pesante",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📦",
        "form": "adjective",
        "definitions": [
            {
                "text": "Difficile da gestire o gestire a causa delle dimensioni o della complessità.",
                "examples": [
                    "Il processo è diventato pesante e inefficiente."
                ]
            }
        ],
        "subtext": "molto pesante / piuttosto pesante / un sistema pesante",
        "comparative": "più pesante",
        "superlative": "il più pesante",
        "synonyms": [
            "ingombrante",
            "faticoso"
        ],
        "lang": "it",
        "id": "it_proficiency_language_029",
        "antonyms": [
            "maneggevole"
        ],
        "transcription": ""
    }
];

    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data,
{
        "word": "ermeneutico",
        "level": "proficiency",
        "theme": "philosophy_language",
        "emoji": "📜",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Relativo all'interpretazione dei testi o del significato.",
                        "examples": [
                                "Ha adottato un approccio ermeneutico per analizzare i discorsi politici."
                        ]
                }
        ]
},
{
        "word": "tautologico",
        "level": "proficiency",
        "theme": "meta_argument_deconstruction",
        "emoji": "🔄",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Dire la stessa cosa due volte in parole diverse; circolare nel ragionamento.",
                        "examples": [
                                "L'argomento è tautologico: presuppone ciò che si propone di dimostrare."
                        ]
                }
        ]
},
{
        "word": "polisemico",
        "level": "proficiency",
        "theme": "linguistics_theory",
        "emoji": "🔠",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Avere più significati.",
                        "examples": [
                                "La parola 'libertà' è profondamente polisemica nel discorso politico."
                        ]
                }
        ]
},
{
        "word": "post-coloniale",
        "level": "proficiency",
        "theme": "political_theory",
        "emoji": "🌍",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Relativo al periodo successivo al dominio coloniale, o alla critica delle eredità coloniali.",
                        "examples": [
                                "La teoria post-coloniale mette in discussione i presupposti occidentali sul progresso."
                        ]
                }
        ]
},
{
        "word": "multipolare",
        "level": "proficiency",
        "theme": "political_theory",
        "emoji": "🌐",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Descrivere un ordine mondiale con diversi centri di potere invece di uno o due.",
                        "examples": [
                                "Un mondo multipolare può essere più instabile ma più rappresentativo."
                        ]
                }
        ]
},
{
        "word": "cosmopolita",
        "level": "proficiency",
        "theme": "political_theory",
        "emoji": "🏙️",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Familiare e a proprio agio in molti paesi e culture diverse.",
                        "examples": [
                                "Aveva una visione cosmopolita dell'obbligo politico."
                        ]
                }
        ]
},
{
        "word": "narcisistico",
        "level": "proficiency",
        "theme": "psychoanalysis_unconscious",
        "emoji": "🪞",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Avere un interesse eccessivo per se stessi e per il proprio aspetto o per i propri risultati.",
                        "examples": [
                                "Alcuni critici descrivono la cultura delle celebrités come narcisistica."
                        ]
                }
        ]
},
{
        "word": "eterodosso",
        "level": "proficiency",
        "theme": "meta_argument_deconstruction",
        "emoji": "🚩",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Contrario a credenze o dottrine stabilite o accettate.",
                        "examples": [
                                "Le sue visioni economiche eterodosse non erano popolari nel mondo accademico tradizionale."
                        ]
                }
        ]
}
    ];

    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];

    if ("adjectivesData" !== "vocabularyData") {
        window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();