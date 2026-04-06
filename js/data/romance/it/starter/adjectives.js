(function() {
    const data = [
    {
        "word": "alto",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "basso",
        "oppositeEmoji": "📉",
        "feminine": "alta",
        "emoji": "🦒",
        "plural": "alti",
        "femininePlural": "alte",
        "definitions": [
            {
                "text": "Di statura superiore alla media; che si estende molto verso l'alto.",
                "examples": [
                    "Lui è molto alto.",
                    "Quell'edificio è alto."
                ]
            }
        ],
        "subtext": "un edificio alto / abbastanza alto",
        "synonyms": [
            "una persona alta"
        ],
        "comparative": "più alto",
        "superlative": "il più alto",
        "transcription": "ˈalto"
    },
    {
        "word": "basso",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "alto",
        "oppositeEmoji": "🦒",
        "feminine": "bassa",
        "emoji": "📉",
        "plural": "bassi",
        "femininePlural": "basse",
        "definitions": [
            {
                "text": "Di piccola altezza; poco elevato.",
                "examples": [
                    "Lo stipendio è troppo basso per le ore richieste.",
                    "Lui è un uomo basso."
                ]
            }
        ],
        "subtext": "prezzo basso / stipendio basso",
        "synonyms": [
            "bassa qualità"
        ],
        "comparative": "più basso",
        "superlative": "il più basso",
        "transcription": "ˈbasso"
    },
    {
        "word": "lungo",
        "feminine": "lunga",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "plural": "lunghi",
        "femininePlural": "lunghe",
        "opposite": "corto",
        "oppositeEmoji": "🤏",
        "definitions": [
            {
                "text": "Che ha una grande estensione in lunghezza.",
                "examples": [
                    "Ha un lungo tragitto ogni giorno.",
                    "La strada è lunga."
                ]
            }
        ],
        "subtext": "un lungo viaggio",
        "synonyms": [
            "una lunga giornata",
            "molto tempo"
        ],
        "comparative": "più lungo",
        "superlative": "il più lungo",
        "transcription": "ˈlunɡo"
    },
    {
        "word": "corto",
        "feminine": "corta",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🤏",
        "form": "adjective",
        "plural": "corti",
        "femininePlural": "corte",
        "opposite": "lungo",
        "oppositeEmoji": "📏",
        "definitions": [
            {
                "text": "Di piccola estensione in lunghezza.",
                "examples": [
                    "La matita è corta.",
                    "Ha i capelli corti."
                ]
            }
        ],
        "subtext": "troppo corto",
        "synonyms": [
            "capelli corti"
        ],
        "comparative": "più corto",
        "superlative": "il più corto",
        "transcription": "ˈkorto"
    },
    {
        "word": "giovane",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "feminine": "giovane",
        "plural": "giovani",
        "femininePlural": "giovani",
        "opposite": "vecchio",
        "oppositeEmoji": "👴",
        "definitions": [
            {
                "text": "Che è in età tra l'infanzia e la maturità.",
                "examples": [
                    "È un uomo giovane."
                ]
            }
        ],
        "comparative": "più giovane",
        "superlative": "il più giovane",
        "transcription": "ˈdʒovane",
        "subtext": "",
        "synonyms": [
            "giovane persona"
        ]
    },
    {
        "word": "vecchio",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "nuovo",
        "oppositeEmoji": "🆕",
        "feminine": "vecchia",
        "emoji": "👴",
        "plural": "vecchi",
        "femininePlural": "vecchie",
        "definitions": [
            {
                "text": "Che ha molti anni; che esiste da molto tempo.",
                "examples": [
                    "Questo è un libro vecchio.",
                    "Lavora con vecchi clienti."
                ]
            }
        ],
        "subtext": "vecchio amico / molto vecchio",
        "synonyms": [
            "vecchie abitudini"
        ],
        "comparative": "più vecchio",
        "superlative": "il più vecchio",
        "transcription": "ˈvɛkkjo"
    },
    {
        "word": "nuovo",
        "feminine": "nuova",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🆕",
        "form": "adjective",
        "plural": "nuovi",
        "femininePlural": "nuove",
        "opposite": "vecchio",
        "oppositeEmoji": "👴",
        "definitions": [
            {
                "text": "Recente; non usato in precedenza.",
                "examples": [
                    "Ha un nuovo lavoro.",
                    "La macchina è nuova."
                ]
            }
        ],
        "subtext": "nuovo lavoro / completamente nuovo",
        "synonyms": [
            "fiammante"
        ],
        "comparative": "più nuovo",
        "superlative": "il più nuovo",
        "transcription": "ˈnwɔvo"
    },
    {
        "word": "soleggiato",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "adjective",
        "opposite": "nuvoloso",
        "oppositeEmoji": "☁️",
        "definitions": [
            {
                "text": "Pieno di sole; esposto al sole.",
                "examples": [
                    "È una giornata soleggiata.",
                    "Mi piace il tempo soleggiato."
                ]
            }
        ],
        "subtext": "tempo soleggiato",
        "synonyms": [
            "giornata di sole"
        ],
        "comparative": "più soleggiato",
        "superlative": "il più soleggiato",
        "feminine": "soleggiata",
        "plural": "soleggiati",
        "femininePlural": "soleggiate",
        "transcription": "soledˈdʒato"
    },
    {
        "word": "nuvoloso",
        "feminine": "nuvolosa",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☁️",
        "form": "adjective",
        "plural": "nuvolosi",
        "femininePlural": "nuvolose",
        "opposite": "soleggiato",
        "oppositeEmoji": "☀️",
        "definitions": [
            {
                "text": "Coperto di nuvole.",
                "examples": [
                    "Oggi il cielo è nuvoloso.",
                    "Il tempo è nuvoloso."
                ]
            }
        ],
        "subtext": "nuvoloso",
        "comparative": "più nuvoloso",
        "superlative": "il più nuvoloso",
        "transcription": "nuvoˈlozo",
        "synonyms": []
    },
    {
        "word": "piovoso",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌧️",
        "form": "adjective",
        "opposite": "soleggiato",
        "oppositeEmoji": "☀️",
        "definitions": [
            {
                "text": "Caratterizzato da pioggia frequente.",
                "examples": [
                    "È una giornata piovosa.",
                    "Il clima è piovoso in autunno."
                ]
            }
        ],
        "subtext": "tempo piovoso",
        "synonyms": [
            "giornata di pioggia"
        ],
        "comparative": "più piovoso",
        "superlative": "il più piovoso",
        "feminine": "piovosa",
        "plural": "piovosi",
        "femininePlural": "piovose",
        "transcription": "pjoˈvozo"
    },
    {
        "word": "caldo",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🔥",
        "form": "adjective",
        "opposite": "freddo",
        "oppositeEmoji": "❄️",
        "subtext": "molto caldo, bollente",
        "definitions": [
            {
                "text": "Che ha una temperatura elevata.",
                "examples": [
                    "Il caffè è caldo.",
                    "Fa molto caldo oggi."
                ]
            }
        ],
        "feminine": "calda",
        "plural": "caldi",
        "femininePlural": "calde",
        "comparative": "più caldo",
        "superlative": "il più caldo",
        "transcription": "ˈkaldo",
        "synonyms": []
    },
    {
        "word": "freddo",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "❄️",
        "form": "adjective",
        "opposite": "caldo",
        "oppositeEmoji": "🔥",
        "subtext": "molto freddo, gelido",
        "definitions": [
            {
                "text": "Che ha una temperatura bassa.",
                "examples": [
                    "L'acqua è fredda.",
                    "L'inverno è freddo."
                ]
            }
        ],
        "feminine": "fredda",
        "plural": "freddi",
        "femininePlural": "fredde",
        "comparative": "più freddo",
        "superlative": "il più freddo",
        "transcription": "ˈfreddo",
        "synonyms": []
    },
    {
        "word": "ordinario",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "speciale",
        "oppositeEmoji": "✨",
        "definitions": [
            {
                "text": "Che rientra nella norma; comune.",
                "examples": [
                    "Era una giornata ordinaria."
                ]
            }
        ],
        "subtext": "giorno ordinario / niente di ordinario",
        "synonyms": [
            "vita ordinaria"
        ],
        "comparative": "più ordinario",
        "superlative": "il più ordinario",
        "feminine": "ordinaria",
        "plural": "ordinari",
        "femininePlural": "ordinarie",
        "transcription": "ordiˈnarjo"
    },
    {
        "word": "speciale",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "speciale",
        "plural": "speciali",
        "femininePlural": "speciali",
        "opposite": "ordinario",
        "oppositeEmoji": "🔄",
        "definitions": [
            {
                "text": "Diverso dal comune; particolare.",
                "examples": [
                    "Ha un talento speciale.",
                    "È un'occasione speciale."
                ]
            }
        ],
        "subtext": "un'offerta speciale / occasione speciale",
        "comparative": "più speciale",
        "superlative": "il più speciale",
        "transcription": "speˈtʃale",
        "synonyms": []
    },
    {
        "word": "economico",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "costoso",
        "oppositeEmoji": "💎",
        "feminine": "economica",
        "plural": "economici",
        "femininePlural": "economiche",
        "definitions": [
            {
                "text": "Che costa poco.",
                "examples": [
                    "Questo caffè è economico.",
                    "Il pranzo è molto economico."
                ]
            }
        ],
        "subtext": "prezzo basso / volo economico",
        "synonyms": [
            "a buon mercato"
        ],
        "comparative": "più economico",
        "superlative": "il più economico",
        "transcription": "ekoˈnɔmiko"
    },
    {
        "word": "costoso",
        "feminine": "costosa",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💎",
        "form": "adjective",
        "plural": "costosi",
        "femininePlural": "costose",
        "opposite": "economico",
        "oppositeEmoji": "🏷️",
        "definitions": [
            {
                "text": "Che ha un prezzo elevato.",
                "examples": [
                    "Quell'auto è costosa.",
                    "Il centro città è costoso."
                ]
            }
        ],
        "subtext": "prezzo alto / molto costoso",
        "synonyms": [
            "caro"
        ],
        "comparative": "più costoso",
        "superlative": "il più costoso",
        "transcription": "kosˈtozo"
    },
    {
        "word": "buono",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "cattivo",
        "oppositeEmoji": "👎",
        "feminine": "buona",
        "plural": "buoni",
        "femininePlural": "buone",
        "definitions": [
            {
                "text": "Che ha qualità positive; piacevole al gusto.",
                "examples": [
                    "Questo è un buon lavoro.",
                    "La pizza è buona."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "ottimo",
            "piacevole"
        ],
        "comparative": "migliore",
        "superlative": "il migliore",
        "transcription": "ˈbwɔno"
    },
    {
        "word": "cattivo",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "buono",
        "oppositeEmoji": "👍",
        "feminine": "cattiva",
        "plural": "cattivi",
        "femininePlural": "cattive",
        "definitions": [
            {
                "text": "Che non è buono; di scarsa qualità.",
                "examples": [
                    "Il tempo è cattivo oggi.",
                    "Ha avuto una cattiva idea."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "terribile",
            "pessimo"
        ],
        "comparative": "peggiore",
        "superlative": "il peggiore",
        "transcription": "katˈtivo"
    },
    {
        "word": "grande",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "piccolo",
        "oppositeEmoji": "🐭",
        "feminine": "grande",
        "plural": "grandi",
        "femininePlural": "grandi",
        "definitions": [
            {
                "text": "Di notevoli dimensioni o importanza.",
                "examples": [
                    "È un grande ufficio.",
                    "Parigi è una città grande."
                ]
            }
        ],
        "subtext": "una casa grande / abbastanza grande",
        "synonyms": [
            "ampio",
            "enorme"
        ],
        "comparative": "più grande",
        "superlative": "il più grande",
        "transcription": "ˈɡrande"
    },
    {
        "word": "piccolo",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "grande",
        "oppositeEmoji": "🐘",
        "feminine": "piccola",
        "plural": "piccoli",
        "femininePlural": "piccole",
        "definitions": [
            {
                "text": "Di dimensioni ridotte.",
                "examples": [
                    "Ha un piccolo appartamento.",
                    "Guida una piccola auto."
                ]
            }
        ],
        "subtext": "piccolo, minuscolo",
        "comparative": "più piccolo",
        "superlative": "il più piccolo",
        "transcription": "ˈpikkolo",
        "synonyms": []
    },
    {
        "word": "facile",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "difficile",
        "oppositeEmoji": "❌",
        "feminine": "facile",
        "plural": "facili",
        "femininePlural": "facili",
        "definitions": [
            {
                "text": "Che si fa senza sforzo.",
                "examples": [
                    "Il test è facile.",
                    "È facile da fare."
                ]
            }
        ],
        "subtext": "facile da fare",
        "synonyms": [
            "semplice"
        ],
        "comparative": "più facile",
        "superlative": "il più facile",
        "transcription": "ˈfatʃile"
    },
    {
        "word": "difficile",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "facile",
        "oppositeEmoji": "✅",
        "feminine": "difficile",
        "plural": "difficili",
        "femininePlural": "difficili",
        "definitions": [
            {
                "text": "Che richiede fatica o impegno.",
                "examples": [
                    "Questo lavoro è difficile.",
                    "È difficile da capire."
                ]
            }
        ],
        "subtext": "molto difficile",
        "comparative": "più difficile",
        "superlative": "il più difficile",
        "transcription": "difˈfitʃile",
        "synonyms": []
    },
    {
        "word": "felice",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "form": "adjective",
        "feminine": "felice",
        "plural": "felici",
        "femininePlural": "felici",
        "opposite": "triste",
        "oppositeEmoji": "😢",
        "definitions": [
            {
                "text": "Che prova contentezza o soddisfazione.",
                "examples": [
                    "Sono felice oggi.",
                    "Lei è felice del suo lavoro."
                ]
            }
        ],
        "subtext": "contento, allegro",
        "comparative": "più felice",
        "superlative": "il più felice",
        "transcription": "feˈlitʃe",
        "synonyms": []
    },
    {
        "word": "triste",
        "feminine": "triste",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😢",
        "form": "adjective",
        "plural": "tristi",
        "femininePlural": "tristi",
        "opposite": "felice",
        "oppositeEmoji": "😊",
        "definitions": [
            {
                "text": "Che prova dolore morale o malinconia.",
                "examples": [
                    "Era triste di lasciare l'azienda.",
                    "Un film triste."
                ]
            }
        ],
        "subtext": "sentirsi triste",
        "comparative": "più triste",
        "superlative": "il più triste",
        "transcription": "ˈtriste",
        "synonyms": []
    },
    {
        "word": "stanco",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😫",
        "form": "adjective",
        "feminine": "stanca",
        "plural": "stanchi",
        "femininePlural": "stanche",
        "opposite": "rilassato",
        "oppositeEmoji": "😌",
        "definitions": [
            {
                "text": "Che sente il bisogno di riposare.",
                "examples": [
                    "Sono molto stanco dopo il lavoro.",
                    "Mi sento stanco."
                ]
            }
        ],
        "subtext": "esausto",
        "comparative": "più stanco",
        "superlative": "il più stanco",
        "transcription": "ˈstanko",
        "synonyms": []
    },
    {
        "word": "a tempo pieno",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "adjective",
        "opposite": "a tempo parziale",
        "oppositeEmoji": "⏳",
        "definitions": [
            {
                "text": "Che lavora il numero completo di ore.",
                "examples": [
                    "Ha un lavoro a tempo pieno in banca."
                ]
            }
        ],
        "subtext": "lavoro a tempo pieno",
        "comparative": "più a tempo pieno",
        "superlative": "il più a tempo pieno",
        "feminine": "a tempo pieno",
        "plural": "a tempo pieno",
        "femininePlural": "a tempo pieno",
        "transcription": "a ˈtɛmpo ˈpjɛno",
        "synonyms": []
    },
    {
        "word": "a tempo parziale",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "form": "adjective",
        "opposite": "a tempo pieno",
        "oppositeEmoji": "⏰",
        "definitions": [
            {
                "text": "Che lavora meno ore della settimana standard.",
                "examples": [
                    "Lavora a tempo parziale il sabato."
                ]
            }
        ],
        "subtext": "lavoro a tempo parziale",
        "synonyms": [
            "part-time"
        ],
        "comparative": "più a tempo parziale",
        "superlative": "il più a tempo parziale",
        "feminine": "a tempo parziale",
        "plural": "a tempo parziale",
        "femininePlural": "a tempo parziale",
        "transcription": "a ˈtɛmpo parˈtsjale"
    },
    {
        "word": "pulito",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "sporco",
        "oppositeEmoji": "💩",
        "subtext": "",
        "synonyms": [
            "ordinato"
        ],
        "definitions": [
            {
                "text": "Privo di sporcizia o macchie.",
                "examples": [
                    "La mia camera è pulita.",
                    "L'ufficio è pulito."
                ]
            }
        ],
        "feminine": "pulita",
        "plural": "puliti",
        "femininePlural": "pulite",
        "comparative": "più pulito",
        "superlative": "il più pulito",
        "transcription": "puˈlito"
    },
    {
        "word": "sporco",
        "feminine": "sporca",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "💩",
        "form": "adjective",
        "plural": "sporchi",
        "femininePlural": "sporche",
        "opposite": "pulito",
        "oppositeEmoji": "✨",
        "definitions": [
            {
                "text": "Che presenta sporcizia.",
                "examples": [
                    "Le sue mani sono sporche.",
                    "Il pavimento è sporco."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "sudicio"
        ],
        "comparative": "più sporco",
        "superlative": "il più sporco",
        "transcription": "ˈspɔrko"
    },
    {
        "word": "sano",
        "level": "starter",
        "theme": "basic_foods_A1",
        "form": "adjective",
        "feminine": "sana",
        "plural": "sani",
        "femininePlural": "sane",
        "opposite": "malato",
        "oppositeEmoji": "🤒",
        "definitions": [
            {
                "text": "Che gode di buona salute o fa bene alla salute.",
                "examples": [
                    "Le verdure sono cibo sano.",
                    "Lui è un uomo sano."
                ]
            }
        ],
        "subtext": "in forma",
        "comparative": "più sano",
        "superlative": "il più sano",
        "transcription": "ˈsano",
        "synonyms": []
    },
    {
        "word": "malato",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "feminine": "malata",
        "plural": "malati",
        "femininePlural": "malate",
        "opposite": "sano",
        "oppositeEmoji": "💪",
        "definitions": [
            {
                "text": "Che soffre di una malattia.",
                "examples": [
                    "Mi sento malato oggi.",
                    "Lui è a casa perché è malato."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "indisposto"
        ],
        "comparative": "più malato",
        "superlative": "il più malato",
        "transcription": "maˈlato"
    },
    {
        "word": "online",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🌐",
        "form": "adjective",
        "opposite": "offline",
        "oppositeEmoji": "📴",
        "definitions": [
            {
                "text": "Utilizzando internet.",
                "examples": [
                    "Compro cibo online.",
                    "Il sito è online."
                ]
            }
        ],
        "subtext": "shopping online",
        "comparative": "più online",
        "superlative": "il più online",
        "feminine": "online",
        "plural": "online",
        "femininePlural": "online",
        "transcription": "onˈlain",
        "synonyms": []
    },
    {
        "word": "offline",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📴",
        "form": "adjective",
        "opposite": "online",
        "oppositeEmoji": "🌐",
        "definitions": [
            {
                "text": "Non connesso a internet.",
                "examples": [
                    "Il computer è offline.",
                    "Lavoro offline."
                ]
            }
        ],
        "subtext": "non connesso",
        "comparative": "più offline",
        "superlative": "il più offline",
        "feminine": "offline",
        "plural": "offline",
        "femininePlural": "offline",
        "transcription": "ofˈflain",
        "synonyms": []
    },
    {
        "word": "solo",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "insieme",
        "oppositeEmoji": "👫",
        "definitions": [
            {
                "text": "Senza compagnia; unico.",
                "examples": [
                    "Vive da sola.",
                    "Lui viaggia solo."
                ]
            }
        ],
        "subtext": "vivere da solo",
        "comparative": "più solo",
        "superlative": "il più solo",
        "feminine": "sola",
        "plural": "soli",
        "femininePlural": "sole",
        "transcription": "ˈsolo",
        "synonyms": []
    },
    {
        "word": "insieme",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👫",
        "form": "adverb",
        "opposite": "solo",
        "oppositeEmoji": "👤",
        "definitions": [
            {
                "text": "In compagnia di altri.",
                "examples": [
                    "Lavoriamo insieme.",
                    "Ceniamo insieme."
                ]
            }
        ],
        "subtext": "con altri",
        "transcription": "inˈsjɛme",
        "synonyms": []
    },
    {
        "word": "rilassato",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "feminine": "rilassata",
        "plural": "rilassati",
        "femininePlural": "rilassate",
        "opposite": "stressato",
        "oppositeEmoji": "😫",
        "definitions": [
            {
                "text": "Calmo; non preoccupato.",
                "examples": [
                    "Mi sento rilassato nel fine settimana."
                ]
            }
        ],
        "subtext": "calmo",
        "comparative": "più rilassato",
        "superlative": "il più rilassato",
        "transcription": "rilasˈsato",
        "synonyms": []
    },
    {
        "word": "stressato",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "stressata",
        "plural": "stressati",
        "femininePlural": "stressate",
        "opposite": "rilassato",
        "oppositeEmoji": "😌",
        "definitions": [
            {
                "text": "Sotto pressione psicologica.",
                "examples": [
                    "Si sente stressata prima di ogni scadenza."
                ]
            }
        ],
        "subtext": "sentirsi stressato",
        "synonyms": [
            "esaurito"
        ],
        "comparative": "più stressato",
        "superlative": "il più stressato",
        "transcription": "stresˈsato"
    },
    {
        "word": "preoccupato",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "preoccupata",
        "plural": "preoccupati",
        "femininePlural": "preoccupate",
        "opposite": "calmo",
        "oppositeEmoji": "😌",
        "definitions": [
            {
                "text": "Che si sente ansioso per qualcosa.",
                "examples": [
                    "È preoccupata per il suo lavoro."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "ansioso"
        ],
        "comparative": "più preoccupato",
        "superlative": "il più preoccupato",
        "transcription": "preokkuˈpato"
    },
    {
        "word": "calmo",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "feminine": "calma",
        "plural": "calmi",
        "femininePlural": "calme",
        "opposite": "preoccupato",
        "oppositeEmoji": "😟",
        "definitions": [
            {
                "text": "Tranquillo; senza agitazione.",
                "examples": [
                    "È una persona molto calma.",
                    "Il mare è calmo."
                ]
            }
        ],
        "subtext": "tranquillo",
        "comparative": "più calmo",
        "superlative": "il più calmo",
        "transcription": "ˈkalmo",
        "synonyms": []
    },
    {
        "word": "occupato",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "opposite": "libero",
        "oppositeEmoji": "🆓",
        "definitions": [
            {
                "text": "Impegnato in un'attività; non libero.",
                "examples": [
                    "Sono molto occupato questa settimana."
                ]
            }
        ],
        "feminine": "occupata",
        "plural": "occupati",
        "femininePlural": "occupate",
        "subtext": "giornata piena",
        "synonyms": [
            "impegnato"
        ],
        "comparative": "più occupato",
        "superlative": "il più occupato",
        "transcription": "okkuˈpato"
    },
    {
        "word": "libero",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🆓",
        "form": "adjective",
        "opposite": "occupato",
        "oppositeEmoji": "🏃",
        "subtext": "non occupato",
        "synonyms": [
            "disponibile"
        ],
        "definitions": [
            {
                "text": "Che non ha impegni; o che non costa denaro.",
                "examples": [
                    "Sei libero domani?",
                    "Il museo è gratuito."
                ]
            }
        ],
        "feminine": "libera",
        "plural": "liberi",
        "femininePlural": "libere",
        "comparative": "più libero",
        "superlative": "il più libero",
        "transcription": "ˈlibero"
    },
    {
        "word": "utile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "utile",
        "plural": "utili",
        "femininePlural": "utili",
        "opposite": "inutile",
        "oppositeEmoji": "🗑️",
        "definitions": [
            {
                "text": "Che serve a uno scopo; vantaggioso.",
                "examples": [
                    "Questo libro è molto utile.",
                    "È un'informazione utile."
                ]
            }
        ],
        "subtext": "pratico",
        "comparative": "più utile",
        "superlative": "il più utile",
        "transcription": "ˈutile",
        "synonyms": []
    },
    {
        "word": "inutile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "inutile",
        "plural": "inutili",
        "femininePlural": "inutili",
        "opposite": "utile",
        "oppositeEmoji": "🤝",
        "definitions": [
            {
                "text": "Che non serve a nulla.",
                "examples": [
                    "Questo software è inutile per noi.",
                    "È tempo inutile."
                ]
            }
        ],
        "subtext": "completamente inutile",
        "comparative": "più inutile",
        "superlative": "il più inutile",
        "transcription": "iˈnutile",
        "synonyms": []
    },
    {
        "word": "aperto",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "form": "adjective",
        "opposite": "chiuso",
        "oppositeEmoji": "🔒",
        "subtext": "",
        "synonyms": [
            "non chiuso"
        ],
        "definitions": [
            {
                "text": "Che non è chiuso; che permette l'ingresso.",
                "examples": [
                    "Il negozio è aperto.",
                    "La finestra è aperta."
                ]
            }
        ],
        "feminine": "aperta",
        "plural": "aperti",
        "femininePlural": "aperte",
        "comparative": "più aperto",
        "superlative": "il più aperto",
        "transcription": "aˈpɛrto"
    },
    {
        "word": "chiuso",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "form": "adjective",
        "opposite": "aperto",
        "oppositeEmoji": "📖",
        "subtext": "",
        "synonyms": [
            "non accessibile"
        ],
        "definitions": [
            {
                "text": "Che non è aperto.",
                "examples": [
                    "La banca è chiusa.",
                    "Il negozio è chiuso la domenica."
                ]
            }
        ],
        "feminine": "chiusa",
        "plural": "chiusi",
        "femininePlural": "chiuse",
        "comparative": "più chiuso",
        "superlative": "il più chiuso",
        "transcription": "ˈkjuzo"
    },
    {
        "word": "pieno",
        "feminine": "piena",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🥛",
        "form": "adjective",
        "plural": "pieni",
        "femininePlural": "piene",
        "opposite": "vuoto",
        "oppositeEmoji": "🫙",
        "definitions": [
            {
                "text": "Che contiene quanto più possibile; completo.",
                "examples": [
                    "Il bicchiere è pieno.",
                    "L'autobus è pieno."
                ]
            }
        ],
        "subtext": "pieno di gente",
        "synonyms": [
            "al completo"
        ],
        "comparative": "più pieno",
        "superlative": "il più pieno",
        "transcription": "ˈpjɛno"
    },
    {
        "word": "vuoto",
        "feminine": "vuota",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🫙",
        "form": "adjective",
        "plural": "vuoti",
        "femininePlural": "vuote",
        "opposite": "pieno",
        "oppositeEmoji": "🥛",
        "definitions": [
            {
                "text": "Che non contiene nulla; senza persone.",
                "examples": [
                    "L'ufficio è vuoto.",
                    "La bottiglia è vuota."
                ]
            }
        ],
        "subtext": "un appartamento vuoto",
        "synonyms": [
            "deserto"
        ],
        "comparative": "più vuoto",
        "superlative": "il più vuoto",
        "transcription": "ˈvwɔto"
    },
    {
        "word": "bagnato",
        "feminine": "bagnata",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🚿",
        "form": "adjective",
        "plural": "bagnati",
        "femininePlural": "bagnate",
        "opposite": "asciutto",
        "oppositeEmoji": "🏜️",
        "definitions": [
            {
                "text": "Coperto d'acqua o liquido.",
                "examples": [
                    "La giacca è bagnata dalla pioggia.",
                    "Il pavimento è bagnato."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "umido"
        ],
        "comparative": "più bagnato",
        "superlative": "il più bagnato",
        "transcription": "baɲˈɲato"
    },
    {
        "word": "asciutto",
        "feminine": "asciutta",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🏜️",
        "form": "adjective",
        "plural": "asciutti",
        "femininePlural": "asciutte",
        "opposite": "bagnato",
        "oppositeEmoji": "🚿",
        "definitions": [
            {
                "text": "Senza acqua o liquido; non bagnato.",
                "examples": [
                    "I vestiti sono asciutti.",
                    "Resta all'asciutto."
                ]
            }
        ],
        "subtext": "stare all'asciutto",
        "synonyms": [
            "secco"
        ],
        "comparative": "più asciutto",
        "superlative": "il più asciutto",
        "transcription": "aʃˈʃutto"
    },
    {
        "word": "duro",
        "feminine": "dura",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🧱",
        "form": "adjective",
        "plural": "duri",
        "femininePlural": "dure",
        "opposite": "morbido",
        "oppositeEmoji": "☁️",
        "definitions": [
            {
                "text": "Compatto e solido; difficile.",
                "examples": [
                    "Il pane è duro.",
                    "È un lavoro duro."
                ]
            }
        ],
        "subtext": "lavoro duro",
        "synonyms": [
            "solido"
        ],
        "comparative": "più duro",
        "superlative": "il più duro",
        "transcription": "ˈduro"
    },
    {
        "word": "morbido",
        "feminine": "morbida",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "☁️",
        "form": "adjective",
        "plural": "morbidi",
        "femininePlural": "morbide",
        "opposite": "duro",
        "oppositeEmoji": "🧱",
        "definitions": [
            {
                "text": "Non duro; delicato al tatto.",
                "examples": [
                    "Il divano è molto morbido.",
                    "Un cuscino morbido."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "soffice"
        ],
        "comparative": "più morbido",
        "superlative": "il più morbido",
        "transcription": "ˈmɔrbido"
    },
    {
        "word": "pesante",
        "feminine": "pesante",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🏋️",
        "form": "adjective",
        "plural": "pesanti",
        "femininePlural": "pesanti",
        "opposite": "leggero",
        "oppositeEmoji": "🪶",
        "definitions": [
            {
                "text": "Di grande peso; difficile da trasportare.",
                "examples": [
                    "La borsa è molto pesante.",
                    "Un pacco pesante."
                ]
            }
        ],
        "subtext": "traffico pesante",
        "synonyms": [
            "faticoso"
        ],
        "comparative": "più pesante",
        "superlative": "il più pesante",
        "transcription": "peˈzante"
    },
    {
        "word": "leggero",
        "feminine": "leggera",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🪶",
        "form": "adjective",
        "plural": "leggeri",
        "femininePlural": "leggere",
        "opposite": "pesante",
        "oppositeEmoji": "🏋️",
        "definitions": [
            {
                "text": "Non pesante; di colore chiaro.",
                "examples": [
                    "Porta una borsa leggera.",
                    "Un pasto leggero."
                ]
            }
        ],
        "subtext": "un pasto leggero",
        "synonyms": [
            "tenue"
        ],
        "comparative": "più leggero",
        "superlative": "il più leggero",
        "transcription": "ledˈdʒɛro"
    },
    {
        "word": "bello",
        "feminine": "bella",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😊",
        "form": "adjective",
        "plural": "belli",
        "femininePlural": "belle",
        "opposite": "brutto",
        "oppositeEmoji": "👹",
        "definitions": [
            {
                "text": "Che desta ammirazione per l'aspetto estetico.",
                "examples": [
                    "Il nuovo ufficio è molto bello.",
                    "È una bella giornata."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "splendido",
            "carino"
        ],
        "comparative": "più bello",
        "superlative": "il più bello",
        "transcription": "ˈbɛllo"
    },
    {
        "word": "brutto",
        "feminine": "brutta",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "👹",
        "form": "adjective",
        "plural": "brutti",
        "femininePlural": "brutte",
        "opposite": "bello",
        "oppositeEmoji": "😊",
        "definitions": [
            {
                "text": "Sgradevole alla vista.",
                "examples": [
                    "Quel vestito è brutto.",
                    "È stata una brutta giornata."
                ]
            }
        ],
        "subtext": "brutto tempo",
        "comparative": "più brutto",
        "superlative": "il più brutto",
        "transcription": "ˈbrutto",
        "synonyms": []
    },
    {
        "word": "veloce",
        "feminine": "veloce",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "⚡",
        "form": "adjective",
        "plural": "veloci",
        "femininePlural": "veloci",
        "opposite": "lento",
        "oppositeEmoji": "🐢",
        "definitions": [
            {
                "text": "Che si muove con rapidità.",
                "examples": [
                    "Il treno è veloce.",
                    "Lui cammina veloce."
                ]
            }
        ],
        "subtext": "treno veloce",
        "synonyms": [
            "rapido"
        ],
        "comparative": "più veloce",
        "superlative": "il più veloce",
        "transcription": "veˈlotʃe"
    },
    {
        "word": "lento",
        "feminine": "lenta",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐢",
        "form": "adjective",
        "plural": "lenti",
        "femininePlural": "lente",
        "opposite": "veloce",
        "oppositeEmoji": "⚡",
        "definitions": [
            {
                "text": "Che si muove con scarsa rapidità.",
                "examples": [
                    "Il nuovo sistema è molto lento.",
                    "Lui è lento a mangiare."
                ]
            }
        ],
        "subtext": "internet lento",
        "synonyms": [
            "pigro"
        ],
        "comparative": "più lento",
        "superlative": "il più lento",
        "transcription": "ˈlɛnto"
    },
    {
        "word": "silenzioso",
        "feminine": "silenziosa",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤫",
        "form": "adjective",
        "plural": "silenziosi",
        "femininePlural": "silenziose",
        "opposite": "rumoroso",
        "oppositeEmoji": "🔊",
        "definitions": [
            {
                "text": "Che fa poco rumore; tranquillo.",
                "examples": [
                    "L'ufficio è silenzioso.",
                    "È una stanza silenziosa."
                ]
            }
        ],
        "subtext": "bello e tranquillo",
        "synonyms": [
            "quieto"
        ],
        "comparative": "più silenzioso",
        "superlative": "il più silenzioso",
        "transcription": "silenˈtsjozo"
    },
    {
        "word": "rumoroso",
        "feminine": "rumorosa",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🔊",
        "form": "adjective",
        "plural": "rumorosi",
        "femininePlural": "rumorose",
        "opposite": "silenzioso",
        "oppositeEmoji": "🤫",
        "definitions": [
            {
                "text": "Che fa molto rumore.",
                "examples": [
                    "Il traffico è molto rumoroso.",
                    "I vicini sono rumorosi."
                ]
            }
        ],
        "subtext": "forte rumore",
        "synonyms": [
            "chiassoso"
        ],
        "comparative": "più rumoroso",
        "superlative": "il più rumoroso",
        "transcription": "rumoˈrozo"
    },
    {
        "word": "sicuro",
        "feminine": "sicura",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🛡️",
        "form": "adjective",
        "plural": "sicuri",
        "femininePlural": "sicure",
        "opposite": "pericoloso",
        "oppositeEmoji": "⚠️",
        "definitions": [
            {
                "text": "Privo di pericoli; certo.",
                "examples": [
                    "Questo quartiere è molto sicuro.",
                    "Mi sento al sicuro qui."
                ]
            }
        ],
        "subtext": "sentirsi al sicuro",
        "synonyms": [
            "protetto"
        ],
        "comparative": "più sicuro",
        "superlative": "il più sicuro",
        "transcription": "siˈkuro"
    },
    {
        "word": "pericoloso",
        "feminine": "pericolosa",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "⚠️",
        "form": "adjective",
        "plural": "pericolosi",
        "femininePlural": "pericolose",
        "opposite": "sicuro",
        "oppositeEmoji": "🛡️",
        "definitions": [
            {
                "text": "Che può causare danni o pericoli.",
                "examples": [
                    "La strada è pericolosa.",
                    "È un gioco pericoloso."
                ]
            }
        ],
        "subtext": "molto pericoloso",
        "synonyms": [
            "rischioso"
        ],
        "comparative": "più pericoloso",
        "superlative": "il più pericoloso",
        "transcription": "perikoˈlozo"
    },
    {
        "word": "infelice",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "infelice",
        "plural": "infelici",
        "femininePlural": "infelici",
        "opposite": "felice",
        "oppositeEmoji": "😊",
        "definitions": [
            {
                "text": "Non felice; addolorato.",
                "examples": [
                    "È infelice con il suo stipendio.",
                    "Una faccia infelice."
                ]
            }
        ],
        "subtext": "profondamente infelice",
        "comparative": "più infelice",
        "superlative": "il più infelice",
        "transcription": "infeˈlitʃe",
        "synonyms": []
    },
    {
        "word": "vicino",
        "feminine": "vicina",
        "level": "starter",
        "theme": "distance_A1",
        "emoji": "📍",
        "form": "adjective",
        "plural": "vicini",
        "femininePlural": "vicine",
        "opposite": "lontano",
        "oppositeEmoji": "🔭",
        "definitions": [
            {
                "text": "Posto a poca distanza.",
                "examples": [
                    "L'ospedale è vicino.",
                    "Il bar è molto vicino a casa."
                ]
            }
        ],
        "subtext": "vicino di casa",
        "comparative": "più vicino",
        "superlative": "il più vicino",
        "transcription": "viˈtʃino",
        "synonyms": []
    },
    {
        "word": "lontano",
        "feminine": "lontana",
        "level": "starter",
        "theme": "distance_A1",
        "emoji": "🔭",
        "form": "adjective",
        "plural": "lontani",
        "femininePlural": "lontane",
        "opposite": "vicino",
        "oppositeEmoji": "📍",
        "definitions": [
            {
                "text": "Posto a grande distanza.",
                "examples": [
                    "Roma è lontana da qui.",
                    "Il mio ufficio è lontano."
                ]
            }
        ],
        "subtext": "lontano nel tempo",
        "comparative": "più lontano",
        "superlative": "il più lontano",
        "transcription": "lonˈtano",
        "synonyms": []
    },
    {
        "word": "ricco",
        "feminine": "ricca",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "adjective",
        "plural": "ricchi",
        "femininePlural": "ricche",
        "opposite": "povero",
        "oppositeEmoji": "🏚️",
        "definitions": [
            {
                "text": "Che possiede molti beni o denaro.",
                "examples": [
                    "Lui è un uomo molto ricco.",
                    "Un paese ricco."
                ]
            }
        ],
        "subtext": "ricco di sapore",
        "comparative": "più ricco",
        "superlative": "il più ricco",
        "transcription": "ˈrikko",
        "synonyms": []
    },
    {
        "word": "povero",
        "feminine": "povera",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "🏚️",
        "form": "adjective",
        "plural": "poveri",
        "femininePlural": "povere",
        "opposite": "ricco",
        "oppositeEmoji": "💰",
        "definitions": [
            {
                "text": "Che ha poco denaro; misero.",
                "examples": [
                    "È un quartiere povero.",
                    "Un pasto povero."
                ]
            }
        ],
        "subtext": "povero me",
        "comparative": "più povero",
        "superlative": "il più povero",
        "transcription": "ˈpɔvero",
        "synonyms": []
    },
    {
        "word": "presto",
        "feminine": "presto",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌅",
        "form": "adjective",
        "plural": "presto",
        "femininePlural": "presto",
        "opposite": "tardi",
        "oppositeEmoji": "🌙",
        "definitions": [
            {
                "text": "In orario anticipato; velocemente.",
                "examples": [
                    "Domani mi sveglio presto.",
                    "Arriva presto in ufficio."
                ]
            }
        ],
        "subtext": "presto o tardi",
        "comparative": "più presto",
        "superlative": "il più presto",
        "transcription": "ˈprɛsto",
        "synonyms": []
    },
    {
        "word": "tardi",
        "feminine": "tardi",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌙",
        "form": "adjective",
        "plural": "tardi",
        "femininePlural": "tardi",
        "opposite": "presto",
        "oppositeEmoji": "🌅",
        "definitions": [
            {
                "text": "In orario avanzato.",
                "examples": [
                    "È tardi, devo andare.",
                    "Arriva sempre tardi alle riunioni."
                ]
            }
        ],
        "subtext": "più tardi",
        "comparative": "più tardi",
        "superlative": "il più tardi",
        "transcription": "ˈtardi",
        "synonyms": []
    },
    {
        "word": "dolce",
        "feminine": "dolce",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "🍬",
        "form": "adjective",
        "plural": "dolci",
        "femininePlural": "dolci",
        "opposite": "amaro",
        "oppositeEmoji": "☕",
        "definitions": [
            {
                "text": "Che ha il sapore dello zucchero.",
                "examples": [
                    "Il tè è troppo dolce.",
                    "Amo i cibi dolci."
                ]
            }
        ],
        "subtext": "voce dolce",
        "comparative": "più dolce",
        "superlative": "il più dolce",
        "transcription": "ˈdoltʃe",
        "synonyms": []
    },
    {
        "word": "amaro",
        "feminine": "amara",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "☕",
        "form": "adjective",
        "plural": "amari",
        "femininePlural": "amare",
        "opposite": "dolce",
        "oppositeEmoji": "🍬",
        "definitions": [
            {
                "text": "Che ha un sapore aspro e pungente.",
                "examples": [
                    "Il caffè senza zucchero è amaro.",
                    "Un cioccolato amaro."
                ]
            }
        ],
        "subtext": "amaro destino",
        "comparative": "più amaro",
        "superlative": "il più amaro",
        "transcription": "aˈmaro",
        "synonyms": []
    },
    {
        "word": "chiaro",
        "feminine": "chiara",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💧",
        "form": "adjective",
        "plural": "chiari",
        "femininePlural": "chiare",
        "opposite": "scuro",
        "oppositeEmoji": "🌑",
        "definitions": [
            {
                "text": "Luminoso; facile da capire.",
                "examples": [
                    "Il cielo è chiaro oggi.",
                    "Il messaggio è chiaro."
                ]
            }
        ],
        "subtext": "azzurro chiaro",
        "comparative": "più chiaro",
        "superlative": "il più chiaro",
        "transcription": "ˈkjaro",
        "synonyms": []
    },
    {
        "word": "scuro",
        "feminine": "scura",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🌑",
        "form": "adjective",
        "plural": "scuri",
        "femininePlural": "scure",
        "opposite": "chiaro",
        "oppositeEmoji": "💧",
        "definitions": [
            {
                "text": "Privo di luce; di colore cupo.",
                "examples": [
                    "Il mare è scuro di notte.",
                    "Ha i capelli scuri."
                ]
            }
        ],
        "subtext": "verde scuro",
        "comparative": "più scuro",
        "superlative": "il più scuro",
        "transcription": "ˈskuro",
        "synonyms": []
    },
    {
        "word": "forte",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "forte",
        "plural": "forti",
        "femininePlural": "forti",
        "opposite": "debole",
        "oppositeEmoji": "☁️",
        "definitions": [
            {
                "text": "Dotato di vigore fisico o morale.",
                "examples": [
                    "È una leader forte.",
                    "Caffè molto forte."
                ]
            }
        ],
        "subtext": "molto forte",
        "comparative": "più forte",
        "superlative": "il più forte",
        "transcription": "ˈfɔrte",
        "synonyms": []
    },
    {
        "word": "debole",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "debole",
        "plural": "deboli",
        "femininePlural": "deboli",
        "opposite": "forte",
        "oppositeEmoji": "💪",
        "definitions": [
            {
                "text": "Privo di forza o vigore.",
                "examples": [
                    "Il segnale è debole.",
                    "Si sente debole dopo l'influenza."
                ]
            }
        ],
        "subtext": "connessione debole",
        "comparative": "più debole",
        "superlative": "il più debole",
        "transcription": "ˈdebole",
        "synonyms": []
    },
    {
        "word": "moderno",
        "feminine": "moderna",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🏙️",
        "form": "adjective",
        "plural": "moderni",
        "femininePlural": "moderne",
        "opposite": "antico",
        "oppositeEmoji": "🏛️",
        "definitions": [
            {
                "text": "Proprio dei nostri tempi.",
                "examples": [
                    "È un edificio moderno.",
                    "L'arte moderna è interessante."
                ]
            }
        ],
        "subtext": "stile moderno",
        "comparative": "più moderno",
        "superlative": "il più moderno",
        "transcription": "moˈdɛrno",
        "synonyms": []
    },
    {
        "word": "antico",
        "feminine": "antica",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🏛️",
        "form": "adjective",
        "plural": "antichi",
        "femininePlural": "antiche",
        "opposite": "moderno",
        "oppositeEmoji": "🏙️",
        "definitions": [
            {
                "text": "Di tempi molto lontani nel passato.",
                "examples": [
                    "Visitiamo un castello antico.",
                    "Un libro antico."
                ]
            }
        ],
        "subtext": "storia antica",
        "comparative": "più antico",
        "superlative": "il più antico",
        "transcription": "anˈtiko",
        "synonyms": []
    },
    {
        "word": "coraggioso",
        "feminine": "coraggiosa",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🦁",
        "form": "adjective",
        "plural": "coraggiosi",
        "femininePlural": "coraggiose",
        "opposite": "codardo",
        "oppositeEmoji": "🐭",
        "definitions": [
            {
                "text": "Che ha coraggio.",
                "examples": [
                    "Lui è un uomo coraggioso.",
                    "Una decisione coraggiosa."
                ]
            }
        ],
        "subtext": "molto coraggioso",
        "comparative": "più coraggioso",
        "superlative": "il più coraggioso",
        "transcription": "koradˈdʒozo",
        "synonyms": []
    },
    {
        "word": "codardo",
        "feminine": "codarda",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🐭",
        "form": "adjective",
        "plural": "codardi",
        "femininePlural": "codarde",
        "opposite": "coraggioso",
        "oppositeEmoji": "🦁",
        "definitions": [
            {
                "text": "Privo di coraggio; vile.",
                "examples": [
                    "Non essere codardo!",
                    "Un comportamento codardo."
                ]
            }
        ],
        "subtext": "essere codardo",
        "comparative": "più codardo",
        "superlative": "il più codardo",
        "transcription": "koˈdardo",
        "synonyms": []
    },
    {
        "word": "largo",
        "feminine": "larga",
        "level": "starter",
        "theme": "size_measurements_A1",
        "emoji": "↔️",
        "form": "adjective",
        "plural": "larghi",
        "femininePlural": "larghe",
        "opposite": "stretto",
        "oppositeEmoji": "⬇️",
        "definitions": [
            {
                "text": "Che ha una larghezza notevole.",
                "examples": [
                    "Il sentiero è molto largo.",
                    "Pantaloni larghi."
                ]
            }
        ],
        "subtext": "troppo largo",
        "comparative": "più largo",
        "superlative": "il più largo",
        "transcription": "ˈlarɡo",
        "synonyms": []
    },
    {
        "word": "stretto",
        "feminine": "stretta",
        "level": "starter",
        "theme": "size_measurements_A1",
        "emoji": "⬇️",
        "form": "adjective",
        "plural": "stretti",
        "femininePlural": "strette",
        "opposite": "largo",
        "oppositeEmoji": "↔️",
        "definitions": [
            {
                "text": "Che ha poca larghezza; serrato.",
                "examples": [
                    "Il corridoio è troppo stretto.",
                    "Un vestito stretto."
                ]
            }
        ],
        "subtext": "molto stretto",
        "comparative": "più stretto",
        "superlative": "il più stretto",
        "transcription": "ˈstretto",
        "synonyms": []
    },
    {
        "word": "simpatico",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😊",
        "form": "adjective",
        "feminine": "simpatica",
        "plural": "simpatici",
        "femininePlural": "simpatiche",
        "opposite": "antipatico",
        "oppositeEmoji": "😒",
        "definitions": [
            {
                "text": "Che suscita simpatia.",
                "examples": [
                    "Il mio collega è simpatico.",
                    "Una persona simpatica."
                ]
            }
        ],
        "subtext": "molto simpatico",
        "comparative": "più simpatico",
        "superlative": "il più simpatico",
        "transcription": "simˈpatiko",
        "synonyms": []
    },
    {
        "word": "antipatico",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😒",
        "form": "adjective",
        "feminine": "antipatica",
        "plural": "antipatici",
        "femininePlural": "antipatiche",
        "opposite": "simpatico",
        "oppositeEmoji": "😊",
        "definitions": [
            {
                "text": "Che suscita antipatia.",
                "examples": [
                    "Quel ragazzo è antipatico.",
                    "Un comportamento antipatico."
                ]
            }
        ],
        "subtext": "piuttosto antipatico",
        "comparative": "più antipatico",
        "superlative": "il più antipatico",
        "transcription": "antiˈpatiko",
        "synonyms": []
    }
];
    const lang = "it";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();