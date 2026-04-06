(function() {
    const data = [
    {
        "word": "alto",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "corto",
        "oppositeEmoji": "📏",
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
            },
            {
                "text": "Di statura superiore alla media.",
                "examples": [
                    "È una donna alta che lavora come ingegnere."
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
        "word": "corto",
        "feminine": "corta",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "plural": "corti",
        "femininePlural": "corte",
        "definitions": [
            {
                "text": "Di piccola estensione in lunghezza.",
                "examples": [
                    "Lei è bassa.",
                    "La matita è corta."
                ]
            },
            {
                "text": "Di altezza o lunghezza inferiore alla media.",
                "examples": [
                    "Ha un tragitto breve — dieci minuti in bicicletta."
                ]
            }
        ],
        "subtext": "troppo corto",
        "synonyms": [
            "un breve viaggio",
            "capelli corti"
        ],
        "comparative": "più corto",
        "superlative": "il più corto",
        "opposite": "alto",
        "oppositeEmoji": "🗼",
        "transcription": "ˈkorto"
    },
    {
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "feminine": "giovane",
        "plural": "giovani",
        "femininePlural": "giovani",
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
        "opposite": "vecchio",
        "oppositeEmoji": "👴",
        "subtext": "",
        "synonyms": [
            "giovane persona",
            "giovane professionista",
            "giovane dentro"
        ],
        "word": "giovane"
    },
    {
        "word": "vecchio",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "giovane",
        "oppositeEmoji": "👶",
        "feminine": "vecchia",
        "emoji": "👴",
        "plural": "vecchi",
        "femininePlural": "vecchie",
        "definitions": [
            {
                "text": "Che ha molti anni; che esiste da molto tempo.",
                "examples": [
                    "Questo è un libro vecchio."
                ]
            },
            {
                "text": "Che esiste da molto tempo.",
                "examples": [
                    "Lavora con vecchi clienti di dieci anni fa."
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
        "word": "soleggiato",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "adjective",
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
            "giornata di sole",
            "schiarite"
        ],
        "comparative": "più soleggiato",
        "superlative": "il più soleggiato",
        "feminine": "soleggiata",
        "plural": "soleggiati",
        "femininePlural": "soleggiate",
        "transcription": "soledˈdʒato"
    },
    {
        "word": "piovoso",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌧️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Caratterizzato da pioggia frequente.",
                "examples": [
                    "È una giornata piovosa.",
                    "Indossa un cappotto, fuori piove."
                ]
            }
        ],
        "subtext": "tempo piovoso",
        "synonyms": [
            "giornata di pioggia",
            "stagione delle piogge"
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
                    "Il caffè è caldo."
                ]
            }
        ],
        "feminine": "calda",
        "plural": "caldi",
        "femininePlural": "calde",
        "comparative": "più caldo",
        "superlative": "il più caldo",
        "transcription": "ˈkaldo"
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
                    "L'acqua è fredda."
                ]
            }
        ],
        "feminine": "fredda",
        "plural": "freddi",
        "femininePlural": "fredde",
        "comparative": "più freddo",
        "superlative": "il più freddo",
        "transcription": "ˈfreddo"
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
                "text": "Che costa poco; relativo all'economia.",
                "examples": [
                    "Questo caffè è economico."
                ]
            },
            {
                "text": "A basso prezzo.",
                "examples": [
                    "Il pranzo vicino all'ufficio è molto economico."
                ]
            }
        ],
        "subtext": "prezzo basso, non costoso / volo economico / molto economico",
        "synonyms": [
            "alla mano"
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
        "definitions": [
            {
                "text": "Che ha un prezzo elevato.",
                "examples": [
                    "Quell'auto è costosa."
                ]
            },
            {
                "text": "Ad alto prezzo.",
                "examples": [
                    "Il centro città è costoso per l'affitto."
                ]
            }
        ],
        "subtext": "costoso, prezzo alto / molto costoso / troppo costoso",
        "synonyms": [
            "gusti costosi"
        ],
        "comparative": "più costoso",
        "superlative": "il più costoso",
        "opposite": "economico",
        "oppositeEmoji": "🏷️",
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
                    "Questo è un buon lavoro."
                ]
            },
            {
                "text": "Di alta qualità o piacevole.",
                "examples": [
                    "Ha un buon lavoro con orari flessibili."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "ottimo",
            "piacevole",
            "buona idea",
            "buona fortuna",
            "buon valore"
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
                "text": "Che non è buono; malvagio o di scarsa qualità.",
                "examples": [
                    "Il tempo è brutto oggi."
                ]
            },
            {
                "text": "Di scarsa qualità; spiacevole o dannoso.",
                "examples": [
                    "Ha avuto una brutta giornata al lavoro."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "terribile",
            "pessimo",
            "spiacevole",
            "cattive notizie",
            "sfortuna",
            "cattiva decisione"
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
                    "È un grande ufficio."
                ]
            },
            {
                "text": "Grande per dimensioni o quantità.",
                "examples": [
                    "Hanno una casa grande vicino al parco."
                ]
            }
        ],
        "subtext": "una casa grande / un grande problema / abbastanza grande",
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
                    "Ha un piccolo appartamento."
                ]
            },
            {
                "text": "Piccolo per dimensioni o quantità.",
                "examples": [
                    "Affitta un piccolo appartamento in centro città."
                ]
            }
        ],
        "subtext": "piccolo, minuscolo / un piccolo appartamento / un piccolo stipendio / troppo piccolo",
        "comparative": "più piccolo",
        "superlative": "il più piccolo",
        "transcription": "ˈpikkolo"
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
                    "Il modulo di domanda è facile da compilare."
                ]
            }
        ],
        "subtext": "facile da fare / non facile",
        "synonyms": [
            "semplice e veloce"
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
                "text": "Che richiede fatica o impegno per essere fatto o capito.",
                "examples": [
                    "Questo lavoro è difficile."
                ]
            },
            {
                "text": "Non facile; che richiede sforzo.",
                "examples": [
                    "La negoziazione è stata molto difficile."
                ]
            }
        ],
        "subtext": "difficile da fare / molto difficile / trovarlo difficile",
        "comparative": "più difficile",
        "superlative": "il più difficile",
        "transcription": "difˈfitʃile"
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
        "definitions": [
            {
                "text": "Che prova contentezza o soddisfazione.",
                "examples": [
                    "Sono felice oggi."
                ]
            },
            {
                "text": "Che prova piacere o soddisfazione.",
                "examples": [
                    "È felice nel suo nuovo ruolo."
                ]
            }
        ],
        "subtext": "contento, allegro, sentirsi felice / sentirsi felice / felice di qualcosa / un giorno felice",
        "comparative": "più felice",
        "superlative": "il più felice",
        "transcription": "feˈlitʃe"
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
        "definitions": [
            {
                "text": "Che sente il bisogno di riposare.",
                "examples": [
                    "Sono molto stanco dopo il lavoro.",
                    "Mi sento stanco dopo una lunga settimana."
                ]
            }
        ],
        "subtext": "sonnolento, esausto, sentirsi stanco / sentirsi stanco / stanco di qualcosa / molto stanco",
        "comparative": "più stanco",
        "superlative": "il più stanco",
        "transcription": "ˈstanko"
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
                "text": "Che lavora il numero completo di ore in una settimana lavorativa.",
                "examples": [
                    "Ha un lavoro a tempo pieno in banca."
                ]
            }
        ],
        "subtext": "lavoro a tempo pieno / impiegato a tempo pieno",
        "comparative": "più a tempo pieno",
        "superlative": "il più a tempo pieno",
        "feminine": "a tempo pieno",
        "plural": "a tempo pieno",
        "femininePlural": "a tempo pieno",
        "transcription": "a ˈtɛmpo ˈpjɛno"
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
                "text": "Che lavora meno ore di una settimana lavorativa standard.",
                "examples": [
                    "Lavora a tempo parziale il sabato."
                ]
            }
        ],
        "subtext": "lavoro a tempo parziale",
        "synonyms": [
            "studente lavoratore"
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
            "ordinato",
            "limpido"
        ],
        "definitions": [
            {
                "text": "Privo di sporcizia o macchie.",
                "examples": [
                    "La mia camera è pulita."
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
        "word": "sano",
        "level": "starter",
        "theme": "basic_foods_A1",
        "form": "adjective",
        "feminine": "sana",
        "plural": "sani",
        "femininePlural": "sane",
        "definitions": [
            {
                "text": "Che gode di buona salute; che fa bene alla salute.",
                "examples": [
                    "Le verdure sono cibo sano."
                ]
            }
        ],
        "subtext": "bene, in forma, dieta sana",
        "comparative": "più sano",
        "superlative": "il più sano",
        "opposite": "unhealthy",
        "oppositeEmoji": "🍔",
        "transcription": "ˈsano"
    },
    {
        "word": "malato",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "feminine": "malata",
        "plural": "malati",
        "femininePlural": "malate",
        "definitions": [
            {
                "text": "Che soffre di una malattia.",
                "examples": [
                    "Mi sento malato oggi."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "indisposto",
            "sentirsi male"
        ],
        "comparative": "più malato",
        "superlative": "il più malato",
        "opposite": "well",
        "oppositeEmoji": "💪",
        "transcription": "maˈlato"
    },
    {
        "word": "online",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🌐",
        "form": "adjective",
        "definitions": [
            {
                "text": "Utilizzando internet.",
                "examples": [
                    "A volte compro cibo online."
                ]
            }
        ],
        "subtext": "shopping online / corso online / restare online",
        "comparative": "più online",
        "superlative": "il più online",
        "opposite": "offline",
        "oppositeEmoji": "📴",
        "feminine": "online",
        "plural": "online",
        "femininePlural": "online",
        "transcription": "onˈlain"
    },
    {
        "word": "solo",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "together",
        "oppositeEmoji": "👫",
        "definitions": [
            {
                "text": "Senza compagnia; unico.",
                "examples": [
                    "Vive da sola."
                ]
            }
        ],
        "subtext": "vivere da solo / viaggiare da solo / sentirsi solo",
        "comparative": "più solo",
        "superlative": "il più solo",
        "feminine": "sola",
        "plural": "soli",
        "femininePlural": "sole",
        "transcription": "ˈsolo"
    },
    {
        "word": "rilassato",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "feminine": "rilassata",
        "plural": "rilassati",
        "femininePlural": "rilassate",
        "definitions": [
            {
                "text": "Calmo; non preoccupato o stressato.",
                "examples": [
                    "Mi sento rilassato nel fine settimana."
                ]
            }
        ],
        "subtext": "calmo, sentirsi rilassato",
        "comparative": "più rilassato",
        "superlative": "il più rilassato",
        "opposite": "stressato",
        "oppositeEmoji": "😫",
        "transcription": "rilasˈsato"
    },
    {
        "word": "preoccupato",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "preoccupata",
        "plural": "preoccupati",
        "femininePlural": "preoccupate",
        "definitions": [
            {
                "text": "Che si sente ansioso per qualcosa che potrebbe accadere.",
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
        "opposite": "calm",
        "oppositeEmoji": "😌",
        "transcription": "preokkuˈpato"
    },
    {
        "word": "occupato",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
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
        "subtext": "molto occupato, giornata piena / troppo occupato",
        "synonyms": [
            "programma fitto"
        ],
        "comparative": "più occupato",
        "superlative": "il più occupato",
        "transcription": "okkuˈpato"
    },
    {
        "word": "utile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "utile",
        "plural": "utili",
        "femininePlural": "utili",
        "definitions": [
            {
                "text": "Che serve a uno scopo; vantaggioso.",
                "examples": [
                    "Questo libro è molto utile.",
                    "È un'informazione utile."
                ]
            }
        ],
        "subtext": "utile, pratico",
        "comparative": "più utile",
        "superlative": "il più utile",
        "opposite": "inutile",
        "oppositeEmoji": "🗑️",
        "transcription": "ˈutile"
    },
    {
        "word": "importante",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❗",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "essenziale",
            "fondamentale"
        ],
        "definitions": [
            {
                "text": "Che ha grande valore o effetto.",
                "examples": [
                    "Il sonno è molto importante."
                ]
            }
        ],
        "feminine": "importante",
        "plural": "importanti",
        "femininePlural": "importanti",
        "comparative": "più importante",
        "superlative": "il più importante",
        "transcription": "imporˈtante"
    },
    {
        "word": "rosso",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟥",
        "form": "adjective",
        "subtext": "rosso scuro, rosso vivo / vino rosso / semaforo rosso",
        "synonyms": [
            "faccia rossa"
        ],
        "definitions": [
            {
                "text": "Che ha il colore del sangue o di un pomodoro maturo.",
                "examples": [
                    "Lei ha una borsa rossa."
                ]
            }
        ],
        "feminine": "rossa",
        "plural": "rossi",
        "femininePlural": "rosse",
        "comparative": "più rosso",
        "superlative": "il più rosso",
        "transcription": "ˈrosso"
    },
    {
        "word": "blu",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟦",
        "form": "adjective",
        "subtext": "azzurro, blu scuro / blu scuro / cielo blu",
        "synonyms": [
            "azzurro"
        ],
        "definitions": [
            {
                "text": "Che ha il colore del cielo limpido.",
                "examples": [
                    "La sua macchina è blu."
                ]
            }
        ],
        "feminine": "blu",
        "plural": "blu",
        "femininePlural": "blu",
        "comparative": "più blu",
        "superlative": "il più blu",
        "transcription": "ˈblu"
    },
    {
        "word": "verde",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟩",
        "form": "adjective",
        "subtext": "verde chiaro, verde scuro / energia verde / spazio verde",
        "definitions": [
            {
                "text": "Che ha il colore dell'erba o delle foglie.",
                "examples": [
                    "Lei indossa un vestito verde."
                ]
            }
        ],
        "feminine": "verde",
        "plural": "verdi",
        "femininePlural": "verdi",
        "comparative": "più verde",
        "superlative": "il più verde",
        "transcription": "ˈverde"
    },
    {
        "word": "bianco",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬜",
        "form": "adjective",
        "subtext": "bianco puro, bianco neve / vino bianco / bianco sporco / bianco brillante",
        "definitions": [
            {
                "text": "Che ha il colore della neve o del latte.",
                "examples": [
                    "Le pareti sono bianche."
                ]
            }
        ],
        "feminine": "bianca",
        "plural": "bianchi",
        "femininePlural": "bianche",
        "comparative": "più bianco",
        "superlative": "il più bianco",
        "transcription": "ˈbjanko"
    },
    {
        "word": "nero",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬛",
        "form": "adjective",
        "subtext": "nero come la pece, scuro / caffè nero / mercato nero / nero profondo",
        "definitions": [
            {
                "text": "Che ha il colore più scuro, come il cielo notturno.",
                "examples": [
                    "Lui indossa un cappotto nero."
                ]
            }
        ],
        "feminine": "nera",
        "plural": "neri",
        "femininePlural": "nere",
        "comparative": "più nero",
        "superlative": "il più nero",
        "transcription": "ˈnero"
    },
    {
        "word": "giallo",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟨",
        "form": "adjective",
        "subtext": "giallo limone, giallo oro / giallo pallido / giallo brillante",
        "synonyms": [
            "luce gialla"
        ],
        "definitions": [
            {
                "text": "Che ha il colore del sole o di un limone.",
                "examples": [
                    "Lei ha un ombrello giallo."
                ]
            }
        ],
        "feminine": "gialla",
        "plural": "gialli",
        "femininePlural": "gialle",
        "comparative": "più giallo",
        "superlative": "il più giallo",
        "transcription": "ˈdʒallo"
    },
    {
        "word": "libero",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "gratis",
            "senza costi"
        ],
        "definitions": [
            {
                "text": "Che non costa denaro.",
                "examples": [
                    "Il museo è gratuito la domenica."
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
        "word": "aperto",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "form": "adjective",
        "opposite": "chiuso",
        "oppositeEmoji": "🔒",
        "subtext": "",
        "synonyms": [
            "libero",
            "non chiuso"
        ],
        "definitions": [
            {
                "text": "Che non è chiuso; che permette l'ingresso.",
                "examples": [
                    "Il negozio è aperto fino alle otto."
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
                    "La banca è chiusa la domenica."
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
        "word": "grande",
        "feminine": "grande",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "plural": "grandi",
        "femininePlural": "grandi",
        "definitions": [
            {
                "text": "Di notevoli dimensioni o importanza.",
                "examples": [
                    "Parigi è una città molto grande."
                ]
            }
        ],
        "subtext": "una grande città / una grande azienda / una grande quantità",
        "comparative": "più grande",
        "superlative": "il più grande",
        "transcription": "ˈɡrande"
    },
    {
        "word": "piccolo",
        "feminine": "piccola",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "plural": "piccoli",
        "femininePlural": "piccole",
        "definitions": [
            {
                "text": "Di dimensioni ridotte.",
                "examples": [
                    "Guida una piccola auto per risparmiare sul carburante."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "un pochino",
            "pochi soldi",
            "troppo poco"
        ],
        "comparative": "più piccolo",
        "superlative": "il più piccolo",
        "transcription": "ˈpikkolo"
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
        "definitions": [
            {
                "text": "Che ha una grande estensione in lunghezza.",
                "examples": [
                    "Ha un lungo tragitto ogni giorno."
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
        "word": "alto",
        "feminine": "alta",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📈",
        "form": "adjective",
        "plural": "alti",
        "femininePlural": "alte",
        "definitions": [
            {
                "text": "Di statura superiore alla media; che si estende molto verso l'alto.",
                "examples": [
                    "L'affitto in questa zona è molto alto."
                ]
            }
        ],
        "subtext": "prezzo alto / affitto alto",
        "synonyms": [
            "alta qualità"
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
        "feminine": "bassa",
        "emoji": "📉",
        "plural": "bassi",
        "femininePlural": "basse",
        "definitions": [
            {
                "text": "Di piccola altezza; poco elevato.",
                "examples": [
                    "Lo stipendio è troppo basso per le ore richieste."
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
        "word": "pieno",
        "feminine": "piena",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🥛",
        "form": "adjective",
        "plural": "pieni",
        "femininePlural": "piene",
        "definitions": [
            {
                "text": "Che contiene quanto più possibile; completo.",
                "examples": [
                    "Mi sento pieno dopo quel pranzo."
                ]
            }
        ],
        "subtext": "tempo pieno / pieno di gente",
        "synonyms": [
            "una giornata piena"
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
        "definitions": [
            {
                "text": "Che non contiene nulla; senza persone.",
                "examples": [
                    "L'ufficio è vuoto nei fine settimana."
                ]
            }
        ],
        "subtext": "un appartamento vuoto / quasi vuoto",
        "synonyms": [
            "una stanza vuota"
        ],
        "comparative": "più vuoto",
        "superlative": "il più vuoto",
        "transcription": "ˈvwɔto"
    },
    {
        "word": "tiepido",
        "feminine": "tiepida",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "adjective",
        "plural": "tiepidi",
        "femininePlural": "tiepide",
        "definitions": [
            {
                "text": "Leggermente caldo; piacevolmente riscaldato.",
                "examples": [
                    "L'ufficio è tiepido e confortevole."
                ]
            }
        ],
        "subtext": "tempo tiepido",
        "synonyms": [
            "un caloroso benvenuto",
            "stare al caldo"
        ],
        "comparative": "più tiepido",
        "superlative": "il più tiepido",
        "transcription": "ˈtjɛpido"
    },
    {
        "word": "fresco",
        "feminine": "fresca",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌬️",
        "form": "adjective",
        "plural": "freschi",
        "femininePlural": "fresche",
        "definitions": [
            {
                "text": "Leggermente freddo; piacevolmente fresco.",
                "examples": [
                    "Preferisce il tempo fresco per lavorare."
                ]
            }
        ],
        "subtext": "tempo fresco / stare al fresco",
        "synonyms": [
            "una bevanda fresca"
        ],
        "comparative": "più fresco",
        "superlative": "il più fresco",
        "transcription": "ˈfresko"
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
        "definitions": [
            {
                "text": "Coperto d'acqua o liquido.",
                "examples": [
                    "La sua giacca è bagnata dalla pioggia."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "tempo umido",
            "vestiti bagnati",
            "bagnarsi"
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
        "definitions": [
            {
                "text": "Senza acqua o liquido; non bagnato.",
                "examples": [
                    "Il magazzino deve rimanere asciutto."
                ]
            }
        ],
        "subtext": "stare all'asciutto",
        "synonyms": [
            "tempo secco",
            "pelle secca"
        ],
        "comparative": "più asciutto",
        "superlative": "il più asciutto",
        "transcription": "aʃˈʃutto"
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
        "definitions": [
            {
                "text": "Che presenta sporcizia.",
                "examples": [
                    "Le sue mani sono sporche dopo aver riparato l'auto."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "mani sporche",
            "vestiti sporchi",
            "sporcarsi"
        ],
        "comparative": "più sporco",
        "superlative": "il più sporco",
        "transcription": "ˈspɔrko"
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
        "definitions": [
            {
                "text": "Compatto e solido; difficile.",
                "examples": [
                    "La sedia è molto dura e scomoda."
                ]
            }
        ],
        "subtext": "lavoro duro / troppo duro",
        "synonyms": [
            "una decisione difficile"
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
        "definitions": [
            {
                "text": "Non duro; delicato al tatto.",
                "examples": [
                    "Il divano è molto morbido e comodo."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "luce soffusa",
            "musica dolce",
            "soft skills"
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
        "definitions": [
            {
                "text": "Di grande peso; difficile da trasportare.",
                "examples": [
                    "La borsa è molto pesante con tutti quei documenti."
                ]
            }
        ],
        "subtext": "traffico pesante / troppo pesante",
        "synonyms": [
            "pioggia forte"
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
        "definitions": [
            {
                "text": "Non pesante; di colore chiaro.",
                "examples": [
                    "Porta una borsa leggera al lavoro ogni giorno."
                ]
            }
        ],
        "subtext": "traffico leggero / un pasto leggero",
        "synonyms": [
            "pioggerella"
        ],
        "comparative": "più leggero",
        "superlative": "il più leggero",
        "transcription": "ledˈdʒɛro"
    },
    {
        "word": "marrone",
        "feminine": "marrone",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟫",
        "form": "adjective",
        "plural": "marroni",
        "femininePlural": "marroni",
        "definitions": [
            {
                "text": "Che ha il colore del legno o della terra.",
                "examples": [
                    "Ha gli occhi marroni e i capelli scuri."
                ]
            }
        ],
        "subtext": "marrone scuro / marrone chiaro",
        "synonyms": [
            "pane integrale"
        ],
        "comparative": "più marrone",
        "superlative": "il più marrone",
        "transcription": "marˈrone"
    },
    {
        "word": "grigio",
        "feminine": "grigia",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🩶",
        "form": "adjective",
        "plural": "grigi",
        "femininePlural": "grigie",
        "definitions": [
            {
                "text": "Che ha un colore tra il nero e il bianco.",
                "examples": [
                    "Ha i capelli grigi e un viso gentile."
                ]
            }
        ],
        "subtext": "cielo grigio / grigio pallido",
        "synonyms": [
            "zona grigia"
        ],
        "comparative": "più grigio",
        "superlative": "il più grigio",
        "transcription": "ˈɡridʒo"
    },
    {
        "word": "rosa",
        "feminine": "rosa",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🩷",
        "form": "adjective",
        "plural": "rosa",
        "femininePlural": "rosa",
        "definitions": [
            {
                "text": "Che ha un colore rosso pallido.",
                "examples": [
                    "Preferisce il rosa al rosso."
                ]
            }
        ],
        "subtext": "rosa chiaro / rosa acceso / rosa shocking",
        "comparative": "più rosa",
        "superlative": "il più rosa",
        "transcription": "ˈrɔza"
    },
    {
        "word": "arancione",
        "feminine": "arancioni",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟧",
        "form": "adjective",
        "plural": "arancioni",
        "femininePlural": "arancioni",
        "definitions": [
            {
                "text": "Che ha il colore dell'arancia.",
                "examples": [
                    "Ha comprato una giacca arancione."
                ]
            }
        ],
        "subtext": "arancione acceso / arancione scuro / luce arancione",
        "comparative": "più arancione",
        "superlative": "il più arancione",
        "transcription": "aranˈtʃone"
    },
    {
        "word": "grande",
        "feminine": "grande",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🌟",
        "form": "adjective",
        "plural": "grandi",
        "femininePlural": "grandi",
        "definitions": [
            {
                "text": "Di notevoli dimensioni o importanza.",
                "examples": [
                    "È una grande manager."
                ]
            }
        ],
        "subtext": "una grande idea / una grande opportunità",
        "synonyms": [
            "ottimo rapporto qualità-prezzo"
        ],
        "comparative": "più grande",
        "superlative": "il più grande",
        "transcription": "ˈɡrande"
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
        "definitions": [
            {
                "text": "Che desta ammirazione per l'aspetto estetico.",
                "examples": [
                    "Il nuovo ufficio è molto bello."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "una bella giornata",
            "un bel posto",
            "una bella persona"
        ],
        "comparative": "più bello",
        "superlative": "il più bello",
        "transcription": "ˈbɛllo"
    },
    {
        "word": "meraviglioso",
        "feminine": "meravigliosa",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "✨",
        "form": "adjective",
        "plural": "meravigliosi",
        "femininePlural": "meravigliose",
        "definitions": [
            {
                "text": "Estremamente buono; che causa delizia.",
                "examples": [
                    "Avevano una squadra meravigliosa."
                ]
            }
        ],
        "subtext": "un tempo meraviglioso",
        "synonyms": [
            "una meravigliosa opportunità"
        ],
        "comparative": "più meraviglioso",
        "superlative": "il più meraviglioso",
        "transcription": "meraviʎˈʎozo"
    },
    {
        "word": "terribile",
        "feminine": "terribile",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😫",
        "form": "adjective",
        "plural": "terribili",
        "femininePlural": "terribili",
        "definitions": [
            {
                "text": "Estremamente cattivo.",
                "examples": [
                    "Il traffico stamattina era terribile."
                ]
            }
        ],
        "subtext": "tempo terribile / un terribile errore",
        "synonyms": [
            "notizie terribili"
        ],
        "comparative": "più terribile",
        "superlative": "il più terribile",
        "transcription": "terˈribile"
    },
    {
        "word": "orribile",
        "feminine": "orribile",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤮",
        "form": "adjective",
        "plural": "orribili",
        "femininePlural": "orribili",
        "definitions": [
            {
                "text": "Molto cattivo o spiacevole.",
                "examples": [
                    "Il rumore nell'open space è orribile."
                ]
            }
        ],
        "subtext": "tempo orribile / semplicemente orribile",
        "synonyms": [
            "pessime notizie"
        ],
        "comparative": "più orribile",
        "superlative": "il più orribile",
        "transcription": "orˈribile"
    },
    {
        "word": "incredibile",
        "feminine": "incredibile",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😲",
        "form": "adjective",
        "plural": "incredibili",
        "femininePlural": "incredibili",
        "definitions": [
            {
                "text": "Che causa grande sorpresa o ammirazione.",
                "examples": [
                    "Ha fatto una presentazione incredibile."
                ]
            }
        ],
        "subtext": "un risultato incredibile / un'offerta incredibile / davvero incredibile",
        "comparative": "più incredibile",
        "superlative": "il più incredibile",
        "transcription": "inkreˈdibile"
    },
    {
        "word": "fantastico",
        "feminine": "fantastica",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤩",
        "form": "adjective",
        "plural": "fantastici",
        "femininePlural": "fantastiche",
        "definitions": [
            {
                "text": "Estremamente buono.",
                "examples": [
                    "Il nuovo sistema funziona in modo fantastico."
                ]
            }
        ],
        "subtext": "davvero fantastico",
        "synonyms": [
            "notizie fantastiche",
            "una fantastica opportunità"
        ],
        "comparative": "più fantastico",
        "superlative": "il più fantastico",
        "transcription": "fanˈtastiko"
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
        "definitions": [
            {
                "text": "Che prova dolore morale o malinconia.",
                "examples": [
                    "Era triste di lasciare l'azienda."
                ]
            }
        ],
        "subtext": "sentirsi triste / una situazione triste / profondamente triste",
        "comparative": "più triste",
        "superlative": "il più triste",
        "transcription": "ˈtriste"
    },
    {
        "word": "affamato",
        "feminine": "affamata",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🤤",
        "form": "adjective",
        "plural": "affamati",
        "femininePlural": "affamate",
        "definitions": [
            {
                "text": "Che ha bisogno di cibo.",
                "examples": [
                    "Ho fame — sono già le due."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "sentire fame",
            "molta fame",
            "soffrire la fame"
        ],
        "comparative": "più affamato",
        "superlative": "il più affamato",
        "transcription": "affaˈmato"
    },
    {
        "word": "arrabbiato",
        "feminine": "arrabbiata",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😠",
        "form": "adjective",
        "plural": "arrabbiati",
        "femininePlural": "arrabbiate",
        "definitions": [
            {
                "text": "Sentire un forte dispiacere.",
                "examples": [
                    "Era arrabbiata per la decisione."
                ]
            }
        ],
        "subtext": "sentirsi arrabbiato / arrabbiato con qualcuno / molto arrabbiato",
        "comparative": "più arrabbiato",
        "superlative": "il più arrabbiato",
        "transcription": "arrabˈbjato"
    },
    {
        "word": "annoiato",
        "feminine": "annoiata",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😐",
        "form": "adjective",
        "plural": "annoiati",
        "femininePlural": "annoiate",
        "definitions": [
            {
                "text": "Sentirsi disinteressato o irrequieto.",
                "examples": [
                    "Si annoia nelle lunghe riunioni."
                ]
            }
        ],
        "subtext": "sentirsi annoiato / annoiato da / che si annoia facilmente",
        "comparative": "più annoiato",
        "superlative": "il più annoiato",
        "transcription": "annoˈjato"
    },
    {
        "word": "emozionato",
        "feminine": "emozionata",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🤩",
        "form": "adjective",
        "plural": "emozionati",
        "femininePlural": "emozionate",
        "definitions": [
            {
                "text": "Sentire entusiasmo e impazienza.",
                "examples": [
                    "È emozionata per il suo nuovo lavoro."
                ]
            }
        ],
        "subtext": "sentirsi emozionato / molto emozionato",
        "synonyms": [
            "eccitato per"
        ],
        "comparative": "più emozionato",
        "superlative": "il più emozionato",
        "transcription": "emotsjoˈnato"
    },
    {
        "word": "spaventato",
        "feminine": "spaventata",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😨",
        "form": "adjective",
        "plural": "spaventati",
        "femininePlural": "spaventate",
        "definitions": [
            {
                "text": "Che prova spavento.",
                "examples": [
                    "Ha paura di commettere errori."
                ]
            }
        ],
        "subtext": "profondamente spaventato",
        "synonyms": [
            "paura di",
            "avere paura"
        ],
        "comparative": "più spaventato",
        "superlative": "il più spaventato",
        "transcription": "spavenˈtato"
    },
    {
        "word": "dispiaciuto",
        "feminine": "dispiaciuta",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🥺",
        "form": "adjective",
        "plural": "dispiaciuti",
        "femininePlural": "dispiaciute",
        "definitions": [
            {
                "text": "Sentire rammarico o tristezza.",
                "examples": [
                    "Le dispiace per il ritardo."
                ]
            }
        ],
        "subtext": "sentirsi dispiaciuto / dispiaciuto per",
        "synonyms": [
            "scusarsi di"
        ],
        "comparative": "più dispiaciuto",
        "superlative": "il più dispiaciuto",
        "transcription": "dispjaˈtʃuto"
    },
    {
        "word": "giusto",
        "feminine": "giusta",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "✅",
        "form": "adjective",
        "plural": "giusti",
        "femininePlural": "giuste",
        "definitions": [
            {
                "text": "Corretto; adatto.",
                "examples": [
                    "È questo l'ufficio giusto?"
                ]
            }
        ],
        "subtext": "momento giusto / assolutamente giusto",
        "synonyms": [
            "risposta giusta"
        ],
        "comparative": "più giusto",
        "superlative": "il più giusto",
        "transcription": "ˈdʒusto"
    },
    {
        "word": "sbagliato",
        "feminine": "sbagliata",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❌",
        "form": "adjective",
        "plural": "sbagliati",
        "femininePlural": "sbagliate",
        "definitions": [
            {
                "text": "Non corretto; non adatto.",
                "examples": [
                    "Quella era la decisione sbagliata."
                ]
            }
        ],
        "subtext": "completamente sbagliato",
        "synonyms": [
            "risposta sbagliata",
            "andare male"
        ],
        "comparative": "più sbagliato",
        "superlative": "il più sbagliato",
        "transcription": "zbaʎˈʎato"
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
        "definitions": [
            {
                "text": "Recente; non usato in precedenza.",
                "examples": [
                    "Ha un nuovo lavoro che inizia a marzo."
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
        "word": "differente",
        "feminine": "differente",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "↔️",
        "form": "adjective",
        "plural": "differenti",
        "femininePlural": "differenti",
        "definitions": [
            {
                "text": "Diverso; non uguale.",
                "examples": [
                    "Questo lavoro è molto differente dal mio precedente."
                ]
            }
        ],
        "subtext": "differente da",
        "synonyms": [
            "completamente diverso",
            "molto diverso"
        ],
        "comparative": "più differente",
        "superlative": "il più differente",
        "transcription": "diffeˈrɛnte"
    },
    {
        "word": "stesso",
        "feminine": "stessa",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "identical",
        "form": "adjective",
        "plural": "stessi",
        "femininePlural": "stesse",
        "definitions": [
            {
                "text": "Identico a un altro.",
                "examples": [
                    "Guadagnano lo stesso stipendio."
                ]
            }
        ],
        "subtext": "lo stesso di / esattamente lo stesso",
        "synonyms": [
            "contemporaneamente"
        ],
        "comparative": "più stesso",
        "superlative": "il più stesso",
        "transcription": "ˈstesso"
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
        "definitions": [
            {
                "text": "Che si muove con rapidità.",
                "examples": [
                    "Il treno per il lavoro è veloce e affidabile."
                ]
            }
        ],
        "subtext": "treno veloce / molto veloce",
        "synonyms": [
            "fast food"
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
        "definitions": [
            {
                "text": "Che si muove con scarsa rapidità.",
                "examples": [
                    "Il nuovo sistema è molto lento."
                ]
            }
        ],
        "subtext": "internet lento / molto lento",
        "synonyms": [
            "progressi lenti"
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
        "definitions": [
            {
                "text": "Che fa poco rumore; tranquillo.",
                "examples": [
                    "L'ufficio è silenzioso all'ora di pranzo."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "zona silenziosa",
            "stare zitti",
            "bello e tranquillo"
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
        "definitions": [
            {
                "text": "Che fa molto rumore.",
                "examples": [
                    "Il traffico è molto rumoroso.",
                    "I vicini sono rumorosi."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "forte rumore",
            "troppo forte",
            "una voce forte"
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
        "definitions": [
            {
                "text": "Privo di pericoli; certo.",
                "examples": [
                    "Questo quartiere è molto sicuro."
                ]
            }
        ],
        "subtext": "sicuro da fare / sentirsi al sicuro",
        "synonyms": [
            "zona sicura"
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
        "definitions": [
            {
                "text": "Che può causare danni o pericoli.",
                "examples": [
                    "Il tragitto su quella strada è pericoloso."
                ]
            }
        ],
        "subtext": "molto pericoloso / potenzialmente pericoloso",
        "synonyms": [
            "situazione pericolosa"
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
        "definitions": [
            {
                "text": "Non felice; addolorato.",
                "examples": [
                    "È infelice con il suo attuale stipendio."
                ]
            }
        ],
        "subtext": "infelice per qualcosa / profondamente infelice",
        "comparative": "più infelice",
        "superlative": "il più infelice",
        "transcription": "infeˈlitʃe"
    },
    {
        "word": "nervoso",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "nervosa",
        "plural": "nervosi",
        "femininePlural": "nervose",
        "definitions": [
            {
                "text": "Irritabile; teso.",
                "examples": [
                    "Era nervoso prima del colloquio di lavoro."
                ]
            }
        ],
        "subtext": "nervoso prima di un colloquio / molto nervoso",
        "comparative": "più nervoso",
        "superlative": "il più nervoso",
        "transcription": "nerˈvozo"
    },
    {
        "word": "stressato",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "stressata",
        "plural": "stressati",
        "femininePlural": "stressate",
        "definitions": [
            {
                "text": "Sotto pressione psicologica.",
                "examples": [
                    "Si sente stressata prima di ogni scadenza."
                ]
            }
        ],
        "subtext": "sentirsi stressato / molto stressato",
        "synonyms": [
            "esaurito"
        ],
        "comparative": "più stressato",
        "superlative": "il più stressato",
        "transcription": "stresˈsato"
    },
    {
        "word": "sicuro di sé",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "sicura di sé",
        "plural": "sicuri di sé",
        "femininePlural": "sicure di sé",
        "definitions": [
            {
                "text": "Che ha fiducia nelle proprie capacità.",
                "examples": [
                    "È molto sicura di sé nelle presentazioni ai clienti."
                ]
            }
        ],
        "subtext": "fiducia in se stessi",
        "synonyms": [
            "sentirsi fiduciosi",
            "molto sicuri"
        ],
        "comparative": "più sicuro di sé",
        "superlative": "il più sicuro di sé",
        "transcription": "siˈkuro di ˈsɛ"
    },
    {
        "word": "orgoglioso",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "orgogliosa",
        "plural": "orgogliosi",
        "femininePlural": "orgogliose",
        "definitions": [
            {
                "text": "Fiero di sé o dei propri risultati.",
                "examples": [
                    "Era orgoglioso di ottenere la sua prima promozione."
                ]
            }
        ],
        "subtext": "orgoglioso di",
        "synonyms": [
            "sentirsi fiero",
            "molto fiero"
        ],
        "comparative": "più orgoglioso",
        "superlative": "il più orgoglioso",
        "transcription": "orɡoʎˈʎozo"
    },
    {
        "word": "spaventato",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "spaventata",
        "plural": "spaventati",
        "femininePlural": "spaventate",
        "definitions": [
            {
                "text": "Che prova spavento.",
                "examples": [
                    "Aveva paura di fare la presentazione."
                ]
            }
        ],
        "subtext": "molto spaventato",
        "synonyms": [
            "sentire paura",
            "paura di"
        ],
        "comparative": "più spaventato",
        "superlative": "il più spaventato",
        "transcription": "spavenˈtato"
    },
    {
        "word": "sorpreso",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "feminine": "sorpresa",
        "plural": "sorpresi",
        "femininePlural": "sorprese",
        "definitions": [
            {
                "text": "Stupefatto da qualcosa di inaspettato.",
                "examples": [
                    "È rimasto sorpreso di ricevere un aumento di stipendio."
                ]
            }
        ],
        "subtext": "sentirsi sorpreso / molto sorpreso / piacevolmente sorpreso",
        "comparative": "più sorpreso",
        "superlative": "il più sorpreso",
        "transcription": "sorˈprezo"
    },
    {
        "word": "deluso",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "feminine": "delusa",
        "plural": "delusi",
        "femininePlural": "deluse",
        "definitions": [
            {
                "text": "Amareggiato per la mancata realizzazione di una speranza.",
                "examples": [
                    "Era delusa per non aver ottenuto il lavoro."
                ]
            }
        ],
        "subtext": "sentirsi deluso / profondamente deluso / deluso da",
        "comparative": "più deluso",
        "superlative": "il più deluso",
        "transcription": "deˈluzo"
    },
    {
        "word": "bello",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "bella",
        "plural": "belli",
        "femininePlural": "belle",
        "definitions": [
            {
                "text": "Che desta ammirazione per l'aspetto estetico.",
                "examples": [
                    "Ha un ufficio bello e luminoso con vista sulla città."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "bella vista",
            "bella città",
            "assolutamente splendido"
        ],
        "comparative": "più bello",
        "superlative": "il più bello",
        "transcription": "ˈbɛllo"
    },
    {
        "word": "carino",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "carina",
        "plural": "carini",
        "femininePlural": "carine",
        "definitions": [
            {
                "text": "Grazioso; piacevole.",
                "examples": [
                    "La nuova sala riunioni è molto carina."
                ]
            }
        ],
        "subtext": "abbastanza carino",
        "synonyms": [
            "piuttosto bene",
            "un bel posto"
        ],
        "comparative": "più carino",
        "superlative": "il più carino",
        "transcription": "kaˈrino"
    },
    {
        "word": "forte",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "forte",
        "plural": "forti",
        "femininePlural": "forti",
        "definitions": [
            {
                "text": "Dotato di vigore fisico o morale.",
                "examples": [
                    "È una leader forte e molto rispettata."
                ]
            }
        ],
        "subtext": "caffè forte / opinione forte / molto forte",
        "comparative": "più forte",
        "superlative": "il più forte",
        "transcription": "ˈfɔrte"
    },
    {
        "word": "debole",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "debole",
        "plural": "deboli",
        "femininePlural": "deboli",
        "definitions": [
            {
                "text": "Privo di forza o vigore.",
                "examples": [
                    "Il segnale è debole all'ultimo piano."
                ]
            }
        ],
        "subtext": "connessione debole / un argomento debole / molto debole",
        "comparative": "più debole",
        "superlative": "il più debole",
        "transcription": "ˈdebole"
    },
    {
        "word": "in forma",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "feminine": "in forma",
        "plural": "in forma",
        "femininePlural": "in forma",
        "definitions": [
            {
                "text": "In buone condizioni fisiche.",
                "examples": [
                    "Si mantiene in forma andando al lavoro in bicicletta ogni giorno."
                ]
            }
        ],
        "subtext": "in forma fisica / restare in forma / mantenersi in forma",
        "comparative": "più in forma",
        "superlative": "il più in forma",
        "transcription": "in ˈfɔrma"
    },
    {
        "word": "eccellente",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "eccellente",
        "plural": "eccellenti",
        "femininePlural": "eccellenti",
        "definitions": [
            {
                "text": "Di ottima qualità; superiore.",
                "examples": [
                    "Ha ricevuto un'eccellente recensione."
                ]
            }
        ],
        "subtext": "lavoro eccellente / assolutamente eccellente",
        "synonyms": [
            "risultati eccellenti"
        ],
        "comparative": "più eccellente",
        "superlative": "il più eccellente",
        "transcription": "ettʃelˈlɛnte"
    },
    {
        "word": "perfetto",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "perfetta",
        "plural": "perfetti",
        "femininePlural": "perfette",
        "definitions": [
            {
                "text": "Che non ha difetti; compiuto.",
                "examples": [
                    "Il tempismo del lancio è stato perfetto."
                ]
            }
        ],
        "subtext": "tempismo perfetto / assolutamente perfetto",
        "synonyms": [
            "una perfetta opportunità"
        ],
        "comparative": "più perfetto",
        "superlative": "il più perfetto",
        "transcription": "perˈfɛtto"
    },
    {
        "word": "inutile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "inutile",
        "plural": "inutili",
        "femininePlural": "inutili",
        "definitions": [
            {
                "text": "Che non serve a nulla.",
                "examples": [
                    "Questo software è inutile per le nostre esigenze."
                ]
            }
        ],
        "subtext": "completamente inutile / rivelarsi inutile / un'idea inutile",
        "comparative": "più inutile",
        "superlative": "il più inutile",
        "transcription": "iˈnutile"
    },
    {
        "word": "corretto",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "corretta",
        "plural": "corretti",
        "femininePlural": "corrette",
        "definitions": [
            {
                "text": "Giusto; privo di errori.",
                "examples": [
                    "Per favore verifica che le cifre siano corrette."
                ]
            }
        ],
        "subtext": "il modo corretto / completamente corretto",
        "synonyms": [
            "risposta corretta"
        ],
        "comparative": "più corretto",
        "superlative": "il più corretto",
        "transcription": "korˈrɛtto"
    },
    {
        "word": "interessante",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "interessante",
        "plural": "interessanti",
        "femininePlural": "interessanti",
        "definitions": [
            {
                "text": "Che desta interesse o curiosità.",
                "examples": [
                    "La nuova proposta è molto interessante."
                ]
            }
        ],
        "subtext": "trovare interessante / molto interessante / un'idea interessante",
        "comparative": "più interessante",
        "superlative": "il più interessante",
        "transcription": "interesˈsante"
    },
    {
        "word": "noioso",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "noiosa",
        "plural": "noiosi",
        "femininePlural": "noiose",
        "definitions": [
            {
                "text": "Che provoca noia; monotono.",
                "examples": [
                    "La sessione di formazione è stata molto noiosa."
                ]
            }
        ],
        "subtext": "molto noioso / trovarlo noioso",
        "synonyms": [
            "una riunione noiosa"
        ],
        "comparative": "più noioso",
        "superlative": "il più noioso",
        "transcription": "noˈjozo"
    },
    {
        "word": "necessario",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "necessaria",
        "plural": "necessari",
        "femininePlural": "necessarie",
        "definitions": [
            {
                "text": "Che è indispensabile.",
                "examples": [
                    "Una buona connessione internet è necessaria per il lavoro a distanza."
                ]
            }
        ],
        "subtext": "assolutamente necessario / se necessario / necessario da fare",
        "comparative": "più necessario",
        "superlative": "il più necessario",
        "transcription": "netʃesˈsarjo"
    },
    {
        "word": "possibile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "possibile",
        "plural": "possibili",
        "femininePlural": "possibili",
        "definitions": [
            {
                "text": "Che può accadere o essere realizzato.",
                "examples": [
                    "È possibile finire entro venerdì?"
                ]
            }
        ],
        "subtext": "al più presto possibile / è possibile / rendere possibile",
        "comparative": "più possibile",
        "superlative": "il più possibile",
        "transcription": "posˈsibile"
    },
    {
        "word": "impossibile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "impossibile",
        "plural": "impossibili",
        "femininePlural": "impossibili",
        "definitions": [
            {
                "text": "Che non può accadere o essere realizzato.",
                "examples": [
                    "È impossibile finire in un giorno."
                ]
            }
        ],
        "subtext": "praticamente impossibile / rendere impossibile / quasi impossibile",
        "comparative": "più impossibile",
        "superlative": "il più impossibile",
        "transcription": "imposˈsibile"
    },
    {
        "word": "speciale",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "speciale",
        "plural": "speciali",
        "femininePlural": "speciali",
        "definitions": [
            {
                "text": "Diverso dal comune; particolare.",
                "examples": [
                    "Ha un talento speciale per la risoluzione dei problemi."
                ]
            }
        ],
        "subtext": "un'offerta speciale / occasione speciale / molto speciale",
        "comparative": "più speciale",
        "superlative": "il più speciale",
        "transcription": "speˈtʃale"
    },
    {
        "word": "popolare",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "popolare",
        "plural": "popolari",
        "femininePlural": "popolari",
        "definitions": [
            {
                "text": "Molto conosciuto o amato dalla gente.",
                "examples": [
                    "Il nuovo bar vicino all'ufficio è molto popolare."
                ]
            }
        ],
        "subtext": "molto popolare / scelta popolare / il più popolare",
        "comparative": "più popolare",
        "superlative": "il più popolare",
        "transcription": "popoˈlare"
    },
    {
        "word": "simile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "simile",
        "plural": "simili",
        "femininePlural": "simili",
        "definitions": [
            {
                "text": "Che ha somiglianza con qualcos'altro.",
                "examples": [
                    "I nostri approcci sono molto simili."
                ]
            }
        ],
        "subtext": "molto simile / simile a",
        "synonyms": [
            "risultati simili"
        ],
        "comparative": "più simile",
        "superlative": "il più simile",
        "transcription": "ˈsimile"
    },
    {
        "word": "amichevole",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "amichevole",
        "plural": "amichevoli",
        "femininePlural": "amichevoli",
        "definitions": [
            {
                "text": "Proprio di un amico; cordiale.",
                "examples": [
                    "Il nuovo manager è molto amichevole e disponibile."
                ]
            }
        ],
        "subtext": "molto amichevole / atmosfera amichevole",
        "synonyms": [
            "un volto amico"
        ],
        "comparative": "più amichevole",
        "superlative": "il più amichevole",
        "transcription": "amiˈkevole"
    },
    {
        "word": "gentile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "gentile",
        "plural": "gentili",
        "femininePlural": "gentili",
        "definitions": [
            {
                "text": "Cortese e premuroso verso gli altri.",
                "examples": [
                    "È gentile con tutti in ufficio."
                ]
            }
        ],
        "subtext": "molto gentile / gentile da parte tua / una persona gentile",
        "comparative": "più gentile",
        "superlative": "il più gentile",
        "transcription": "dʒenˈtile"
    },
    {
        "word": "divertente",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "divertente",
        "plural": "divertenti",
        "femininePlural": "divertenti",
        "definitions": [
            {
                "text": "Che diverte; piacevole.",
                "examples": [
                    "Ha un modo divertente di spiegare idee complesse."
                ]
            }
        ],
        "subtext": "molto divertente / storia divertente / trovarlo divertente",
        "comparative": "più divertente",
        "superlative": "il più divertente",
        "transcription": "diverˈtente"
    },
    {
        "word": "intelligente",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "intelligente",
        "plural": "intelligenti",
        "femininePlural": "intelligenti",
        "definitions": [
            {
                "text": "Dotato di intelletto; acuto.",
                "examples": [
                    "È un ragazzo molto intelligente.",
                    "Una scelta intelligente."
                ]
            }
        ],
        "subtext": "molto intelligente / un'idea intelligente",
        "synonyms": [
            "abbastanza scaltro"
        ],
        "comparative": "più intelligente",
        "superlative": "il più intelligente",
        "transcription": "intelliˈdʒɛnte"
    },
    {
        "word": "educato",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "educata",
        "plural": "educati",
        "femininePlural": "educate",
        "definitions": [
            {
                "text": "Che ha buone maniere.",
                "examples": [
                    "È sempre educato con i clienti."
                ]
            }
        ],
        "subtext": "molto educato",
        "synonyms": [
            "richiesta gentile",
            "abbastanza cortese"
        ],
        "comparative": "più educato",
        "superlative": "il più educato",
        "transcription": "eduˈkato"
    },
    {
        "word": "maleducato",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "maleducata",
        "plural": "maleducati",
        "femininePlural": "maleducate",
        "definitions": [
            {
                "text": "Privo di buona educazione.",
                "examples": [
                    "Quel ragazzo è maleducato.",
                    "Un gesto maleducato."
                ]
            }
        ],
        "subtext": "molto maleducato",
        "synonyms": [
            "incredibilmente scortese",
            "deliberatamente offensivo"
        ],
        "comparative": "più maleducato",
        "superlative": "il più maleducato",
        "transcription": "maleduˈkato"
    },
    {
        "word": "pigro",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "pigra",
        "plural": "pigri",
        "femininePlural": "pigre",
        "definitions": [
            {
                "text": "Che non ha voglia di lavorare o agire.",
                "examples": [
                    "Ha la reputazione di essere pigro con i follow-up."
                ]
            }
        ],
        "subtext": "molto pigro / un approccio pigro / troppo pigro",
        "comparative": "più pigro",
        "superlative": "il più pigro",
        "transcription": "ˈpiɡro"
    },
    {
        "word": "onesto",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "onesta",
        "plural": "onesti",
        "femininePlural": "oneste",
        "definitions": [
            {
                "text": "Che agisce con rettitudine e sincerità.",
                "examples": [
                    "Lui è un uomo onesto.",
                    "È stata una risposta onesta."
                ]
            }
        ],
        "subtext": "molto onesto / brutalmente onesto / del tutto onesto",
        "comparative": "più onesto",
        "superlative": "il più onesto",
        "transcription": "oˈnɛsto"
    },
    {
        "word": "rumoroso",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "feminine": "rumorosa",
        "plural": "rumorosi",
        "femininePlural": "rumorose",
        "definitions": [
            {
                "text": "Che fa molto rumore.",
                "examples": [
                    "Il traffico è molto rumoroso.",
                    "I vicini sono rumorosi."
                ]
            }
        ],
        "subtext": "molto rumoroso / ambiente rumoroso / troppo rumoroso",
        "comparative": "più rumoroso",
        "superlative": "il più rumoroso",
        "transcription": "rumoˈrozo"
    },
    {
        "word": "onesto",
        "feminine": "onesta",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😇",
        "form": "adjective",
        "plural": "onesti",
        "femininePlural": "oneste",
        "definitions": [
            {
                "text": "Che agisce con rettitudine e sincerità.",
                "examples": [
                    "Lui è un uomo onesto.",
                    "È stata una risposta onesta."
                ]
            }
        ],
        "subtext": "onesto",
        "comparative": "più onesto",
        "superlative": "il più onesto",
        "transcription": "oˈnɛsto"
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
        "definitions": [
            {
                "text": "Che fa molto rumore.",
                "examples": [
                    "Il traffico è molto rumoroso.",
                    "I vicini sono rumorosi."
                ]
            }
        ],
        "subtext": "rumoroso",
        "comparative": "più rumoroso",
        "superlative": "il più rumoroso",
        "transcription": "rumoˈrozo"
    },
    {
        "word": "rotondo",
        "feminine": "rotonda",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "⭕",
        "form": "adjective",
        "plural": "rotondi",
        "femininePlural": "rotonde",
        "definitions": [
            {
                "text": "Che ha forma circolare o sferica.",
                "examples": [
                    "Il tavolo è rotondo.",
                    "La luna è rotonda."
                ]
            }
        ],
        "subtext": "rotondo",
        "comparative": "più rotondo",
        "superlative": "il più rotondo",
        "transcription": "roˈtondo"
    },
    {
        "word": "quadrato",
        "feminine": "quadrata",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "⬛",
        "form": "adjective",
        "plural": "quadrati",
        "femininePlural": "quadrate",
        "definitions": [
            {
                "text": "Che ha forma di quadrato.",
                "examples": [
                    "L'orologio è quadrato.",
                    "Voglio un tavolo quadrato."
                ]
            }
        ],
        "subtext": "quadrato",
        "comparative": "più quadrato",
        "superlative": "il più quadrato",
        "transcription": "kwaˈdrato"
    },
    {
        "word": "utile",
        "feminine": "utile",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤝",
        "form": "adjective",
        "plural": "utili",
        "femininePlural": "utili",
        "definitions": [
            {
                "text": "Che serve a uno scopo; vantaggioso.",
                "examples": [
                    "Questo libro è molto utile.",
                    "È un'informazione utile."
                ]
            }
        ],
        "subtext": "utile",
        "comparative": "più utile",
        "superlative": "il più utile",
        "transcription": "ˈutile"
    },
    {
        "word": "paziente",
        "feminine": "paziente",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🧘",
        "form": "adjective",
        "plural": "pazienti",
        "femininePlural": "pazienti",
        "definitions": [
            {
                "text": "Che sa aspettare con calma.",
                "examples": [
                    "L'insegnante è molto paziente.",
                    "Devi essere paziente."
                ]
            }
        ],
        "subtext": "paziente",
        "comparative": "più paziente",
        "superlative": "il più paziente",
        "transcription": "patˈtsjɛnte"
    },
    {
        "word": "attivo",
        "feminine": "attiva",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🏃",
        "form": "adjective",
        "plural": "attivi",
        "femininePlural": "attive",
        "definitions": [
            {
                "text": "Operoso; che agisce.",
                "examples": [
                    "Mio nonno è ancora molto attivo.",
                    "Lui fa una vita attiva."
                ]
            }
        ],
        "subtext": "attivo",
        "comparative": "più attivo",
        "superlative": "il più attivo",
        "transcription": "atˈtivo"
    },
    {
        "word": "attento",
        "feminine": "attenta",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "⚠️",
        "form": "adjective",
        "plural": "attenti",
        "femininePlural": "attente",
        "definitions": [
            {
                "text": "Che rivolge la mente a ciò che fa.",
                "examples": [
                    "Sii attento quando attraversi la strada.",
                    "Lui è uno studente attento."
                ]
            }
        ],
        "subtext": "attento",
        "comparative": "più attento",
        "superlative": "il più attento",
        "transcription": "atˈtɛnto"
    },
    {
        "word": "creativo",
        "feminine": "creativa",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🎨",
        "form": "adjective",
        "plural": "creativi",
        "femininePlural": "creative",
        "definitions": [
            {
                "text": "Dotato di fantasia e inventiva.",
                "examples": [
                    "Lei è una ragazza creativa.",
                    "È un progetto creativo."
                ]
            }
        ],
        "subtext": "creativo",
        "comparative": "più creativo",
        "superlative": "il più creativo",
        "transcription": "kreaˈtivo"
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
        "transcription": "nuvoˈlozo"
    },
    {
        "word": "ventoso",
        "feminine": "ventosa",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "💨",
        "form": "adjective",
        "plural": "ventosi",
        "femininePlural": "ventose",
        "definitions": [
            {
                "text": "Battuto dal vento.",
                "examples": [
                    "Oggi è una giornata ventosa.",
                    "Il clima è ventoso."
                ]
            }
        ],
        "subtext": "ventoso",
        "comparative": "più ventoso",
        "superlative": "il più ventoso",
        "transcription": "venˈtozo"
    },
    {
        "word": "nevoso",
        "feminine": "nevosa",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "❄️",
        "form": "adjective",
        "plural": "nevosi",
        "femininePlural": "nevose",
        "definitions": [
            {
                "text": "Caratterizzato da neve.",
                "examples": [
                    "L'inverno è spesso nevoso in montagna.",
                    "Un sentiero nevoso."
                ]
            }
        ],
        "subtext": "nevoso",
        "comparative": "più nevoso",
        "superlative": "il più nevoso",
        "transcription": "neˈvozo"
    },
    {
        "word": "nebbioso",
        "feminine": "nebbiosa",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌫️",
        "form": "adjective",
        "plural": "nebbiosi",
        "femininePlural": "nebbiose",
        "definitions": [
            {
                "text": "Caratterizzato da nebbia.",
                "examples": [
                    "Il mattino è molto nebbioso.",
                    "Un bosco nebbioso."
                ]
            }
        ],
        "subtext": "nebbioso",
        "comparative": "più nebbioso",
        "superlative": "il più nebbioso",
        "transcription": "nebˈbjozo"
    },
    {
        "word": "tempestoso",
        "feminine": "tempestosa",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "⛈️",
        "form": "adjective",
        "plural": "tempestosi",
        "femininePlural": "tempestose",
        "definitions": [
            {
                "text": "Sconvolto dalla tempesta.",
                "examples": [
                    "Il mare è tempestoso oggi.",
                    "Una notte tempestosa."
                ]
            }
        ],
        "subtext": "tempestoso",
        "comparative": "più tempestoso",
        "superlative": "il più tempestoso",
        "transcription": "tempesˈtozo"
    },
    {
        "word": "biondo",
        "feminine": "bionda",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "👱",
        "form": "adjective",
        "plural": "biondi",
        "femininePlural": "bionde",
        "definitions": [
            {
                "text": "Di colore giallo oro (riferito ai capelli).",
                "examples": [
                    "Lei ha i capelli biondi.",
                    "Il bambino è biondo."
                ]
            }
        ],
        "subtext": "biondo",
        "comparative": "più biondo",
        "superlative": "il più biondo",
        "transcription": "ˈbjondo"
    },
    {
        "word": "intelligente",
        "feminine": "intelligente",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🧠",
        "form": "adjective",
        "plural": "intelligenti",
        "femininePlural": "intelligenti",
        "definitions": [
            {
                "text": "Dotato di intelletto; acuto.",
                "examples": [
                    "È un ragazzo molto intelligente.",
                    "Una scelta intelligente."
                ]
            }
        ],
        "subtext": "intelligente",
        "comparative": "più intelligente",
        "superlative": "il più intelligente",
        "transcription": "intelliˈdʒɛnte"
    },
    {
        "word": "serio",
        "feminine": "seria",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🧐",
        "form": "adjective",
        "plural": "seri",
        "femininePlural": "serie",
        "definitions": [
            {
                "text": "Che non ride facilmente; impegnato.",
                "examples": [
                    "Il mio capo è un uomo serio.",
                    "È un problema serio."
                ]
            }
        ],
        "subtext": "serio",
        "comparative": "più serio",
        "superlative": "il più serio",
        "transcription": "ˈsɛːrjo"
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
        "definitions": [
            {
                "text": "Sgradevole alla vista.",
                "examples": [
                    "Quel vestito è brutto.",
                    "È stata una brutta giornata."
                ]
            }
        ],
        "subtext": "brutto",
        "comparative": "più brutto",
        "superlative": "il più brutto",
        "transcription": "ˈbrutto"
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
        "definitions": [
            {
                "text": "Posto a poca distanza.",
                "examples": [
                    "L'ospedale è vicino a casa mia.",
                    "Il bar è molto vicino."
                ]
            }
        ],
        "subtext": "vicino",
        "comparative": "più vicino",
        "superlative": "il più vicino",
        "transcription": "viˈtʃino"
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
        "definitions": [
            {
                "text": "Posto a grande distanza.",
                "examples": [
                    "Roma è lontana da qui.",
                    "Il mio ufficio è lontano."
                ]
            }
        ],
        "subtext": "lontano",
        "comparative": "più lontano",
        "superlative": "il più lontano",
        "transcription": "lonˈtano"
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
        "definitions": [
            {
                "text": "Che possiede molti beni o denaro.",
                "examples": [
                    "Lui è un uomo molto ricco.",
                    "Un piatto ricco di sapore."
                ]
            }
        ],
        "subtext": "ricco",
        "comparative": "più ricco",
        "superlative": "il più ricco",
        "transcription": "ˈrikko"
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
        "definitions": [
            {
                "text": "Che ha poco denaro; misero.",
                "examples": [
                    "È un paese povero.",
                    "Un pasto povero."
                ]
            }
        ],
        "subtext": "povero",
        "comparative": "più povero",
        "superlative": "il più povero",
        "transcription": "ˈpɔvero"
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
        "definitions": [
            {
                "text": "In orario anticipato; velocemente.",
                "examples": [
                    "Domani mi sveglio presto.",
                    "È ancora troppo presto."
                ]
            }
        ],
        "subtext": "presto",
        "comparative": "più presto",
        "superlative": "il più presto",
        "transcription": "ˈprɛsto"
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
        "definitions": [
            {
                "text": "In orario avanzato.",
                "examples": [
                    "È tardi, devo andare.",
                    "Arriva sempre tardi."
                ]
            }
        ],
        "subtext": "tardi",
        "comparative": "più tardi",
        "superlative": "il più tardi",
        "transcription": "ˈtardi"
    },
    {
        "word": "emozionante",
        "feminine": "emozionante",
        "level": "starter",
        "theme": "surprise_interest_A1",
        "emoji": "🤩",
        "form": "adjective",
        "plural": "emozionanti",
        "femininePlural": "emozionanti",
        "definitions": [
            {
                "text": "Che suscita forti emozioni.",
                "examples": [
                    "Il film è stato molto emozionante.",
                    "Un viaggio emozionante."
                ]
            }
        ],
        "subtext": "emozionante",
        "comparative": "più emozionante",
        "superlative": "il più emozionante",
        "transcription": "emotsjoˈnante"
    },
    {
        "word": "delizioso",
        "feminine": "deliziosa",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "😋",
        "form": "adjective",
        "plural": "deliziosi",
        "femininePlural": "deliziose",
        "definitions": [
            {
                "text": "Molto buono; squisito.",
                "examples": [
                    "La lasagna è deliziosa.",
                    "Un dolce delizioso."
                ]
            }
        ],
        "subtext": "delizioso",
        "comparative": "più delizioso",
        "superlative": "il più delizioso",
        "transcription": "delitˈtsjozo"
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
        "definitions": [
            {
                "text": "Che ha il sapore dello zucchero; gentile.",
                "examples": [
                    "Il tè è troppo dolce.",
                    "Lei ha una voce dolce."
                ]
            }
        ],
        "subtext": "dolce",
        "comparative": "più dolce",
        "superlative": "il più dolce",
        "transcription": "ˈdoltʃe"
    },
    {
        "word": "comodo",
        "feminine": "comoda",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🛋️",
        "form": "adjective",
        "plural": "comodi",
        "femininePlural": "comode",
        "definitions": [
            {
                "text": "Che offre agio e benessere.",
                "examples": [
                    "Il divano è molto comodo.",
                    "Scarpe comode."
                ]
            }
        ],
        "subtext": "comodo",
        "comparative": "più comodo",
        "superlative": "il più comodo",
        "transcription": "ˈkɔmodo"
    },
    {
        "word": "vero",
        "feminine": "vera",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💎",
        "form": "adjective",
        "plural": "veri",
        "femininePlural": "vere",
        "definitions": [
            {
                "text": "Conforme alla realtà; non falso.",
                "examples": [
                    "È un amico vero.",
                    "Questa è una storia vera."
                ]
            }
        ],
        "subtext": "vero",
        "comparative": "più vero",
        "superlative": "il più vero",
        "transcription": "ˈveːro"
    },
    {
        "word": "semplice",
        "feminine": "semplice",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "✅",
        "form": "adjective",
        "plural": "semplici",
        "femininePlural": "semplici",
        "definitions": [
            {
                "text": "Non complicato; facile.",
                "examples": [
                    "È un esercizio semplice.",
                    "Una soluzione semplice."
                ]
            }
        ],
        "subtext": "semplice",
        "comparative": "più semplice",
        "superlative": "il più semplice",
        "transcription": "ˈsemplitʃe"
    },
    {
        "word": "naturale",
        "feminine": "naturale",
        "level": "starter",
        "theme": "plants_natural_world_A1",
        "emoji": "🌱",
        "form": "adjective",
        "plural": "naturali",
        "femininePlural": "naturali",
        "definitions": [
            {
                "text": "Prodotto dalla natura; non artificiale.",
                "examples": [
                    "Amo il succo d'arancia naturale.",
                    "Un ambiente naturale."
                ]
            }
        ],
        "subtext": "naturale",
        "comparative": "più naturale",
        "superlative": "il più naturale",
        "transcription": "natuˈrale"
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
        "definitions": [
            {
                "text": "Luminoso; facile da capire.",
                "examples": [
                    "Il cielo è chiaro oggi.",
                    "Un messaggio chiaro."
                ]
            }
        ],
        "subtext": "chiaro",
        "comparative": "più chiaro",
        "superlative": "il più chiaro",
        "transcription": "ˈkjaro"
    },
    {
        "word": "comune",
        "feminine": "comune",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🔄",
        "form": "adjective",
        "plural": "comuni",
        "femininePlural": "comuni",
        "definitions": [
            {
                "text": "Che appartiene a molti; ordinario.",
                "examples": [
                    "È un errore comune.",
                    "Un obiettivo comune."
                ]
            }
        ],
        "subtext": "comune",
        "comparative": "più comune",
        "superlative": "il più comune",
        "transcription": "koˈmune"
    },
    {
        "word": "famoso",
        "feminine": "famosa",
        "level": "starter",
        "theme": "people_A1",
        "emoji": "🌟",
        "form": "adjective",
        "plural": "famosi",
        "femininePlural": "famose",
        "definitions": [
            {
                "text": "Conosciuto da molti; celebre.",
                "examples": [
                    "Lui è un attore famoso.",
                    "Una città famosa."
                ]
            }
        ],
        "subtext": "famoso",
        "comparative": "più famoso",
        "superlative": "il più famoso",
        "transcription": "faˈmozo"
    },
    {
        "word": "salato",
        "feminine": "salata",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "🧂",
        "form": "adjective",
        "plural": "salati",
        "femininePlural": "salate",
        "definitions": [
            {
                "text": "Che contiene sale.",
                "examples": [
                    "Il cibo è troppo salato.",
                    "Burro salato."
                ]
            }
        ],
        "subtext": "salato",
        "comparative": "più salato",
        "superlative": "il più salato",
        "transcription": "saˈlato"
    },
    {
        "word": "acido",
        "feminine": "acida",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "🍋",
        "form": "adjective",
        "plural": "acidi",
        "femininePlural": "acide",
        "definitions": [
            {
                "text": "Che ha sapore aspro.",
                "examples": [
                    "Il limone è acido.",
                    "Un sapore acido."
                ]
            }
        ],
        "subtext": "acido",
        "comparative": "più acido",
        "superlative": "il più acido",
        "transcription": "ˈatʃido"
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
        "definitions": [
            {
                "text": "Che ha un sapore aspro e pungente.",
                "examples": [
                    "Il caffè senza zucchero è amaro.",
                    "Un amaro destino."
                ]
            }
        ],
        "subtext": "amaro",
        "comparative": "più amaro",
        "superlative": "il più amaro",
        "transcription": "aˈmaro"
    },
    {
        "word": "grasso",
        "feminine": "grassa",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "🍔",
        "form": "adjective",
        "plural": "grassi",
        "femininePlural": "grasse",
        "definitions": [
            {
                "text": "Che ha molto grasso; corpulento.",
                "examples": [
                    "Non mangio cibo grasso.",
                    "Un gatto grasso."
                ]
            }
        ],
        "subtext": "grasso",
        "comparative": "più grasso",
        "superlative": "il più grasso",
        "transcription": "ˈɡrasso"
    },
    {
        "word": "magro",
        "feminine": "magra",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "🥬",
        "form": "adjective",
        "plural": "magri",
        "femininePlural": "magre",
        "definitions": [
            {
                "text": "Che ha poco grasso; snello.",
                "examples": [
                    "Lui è molto magro.",
                    "Carne magra."
                ]
            }
        ],
        "subtext": "magro",
        "comparative": "più magro",
        "superlative": "il più magro",
        "transcription": "ˈmaɡro"
    },
    {
        "word": "riccio",
        "feminine": "riccia",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "🌀",
        "form": "adjective",
        "plural": "ricci",
        "femininePlural": "ricce",
        "definitions": [
            {
                "text": "Incurvato in anelli (riferito ai capelli).",
                "examples": [
                    "Lei ha i capelli ricci.",
                    "Un filo riccio."
                ]
            }
        ],
        "subtext": "riccio",
        "comparative": "più riccio",
        "superlative": "il più riccio",
        "transcription": "ˈrittʃo"
    },
    {
        "word": "liscio",
        "feminine": "liscia",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "📏",
        "form": "adjective",
        "plural": "lisci",
        "femininePlural": "lisce",
        "definitions": [
            {
                "text": "Senza rugosità o onde.",
                "examples": [
                    "Ho i capelli lisci.",
                    "Una superficie liscia."
                ]
            }
        ],
        "subtext": "liscio",
        "comparative": "più liscio",
        "superlative": "il più liscio",
        "transcription": "ˈliʃʃo"
    },
    {
        "word": "triangolare",
        "feminine": "triangolare",
        "level": "starter",
        "theme": "shapes_A1",
        "emoji": "🔺",
        "form": "adjective",
        "plural": "triangolari",
        "femininePlural": "triangolari",
        "definitions": [
            {
                "text": "Che ha tre angoli.",
                "examples": [
                    "Un pezzo di pizza triangolare.",
                    "Una forma triangolare."
                ]
            }
        ],
        "subtext": "triangolare",
        "comparative": "più triangolare",
        "superlative": "il più triangolare",
        "transcription": "trianɡoˈlare"
    },
    {
        "word": "rettangolare",
        "feminine": "rettangolare",
        "level": "starter",
        "theme": "shapes_A1",
        "emoji": "▭",
        "form": "adjective",
        "plural": "rettangolari",
        "femininePlural": "rettangolari",
        "definitions": [
            {
                "text": "Che ha forma di rettangolo.",
                "examples": [
                    "Il tavolo è rettangolare.",
                    "Una scatola rettangolare."
                ]
            }
        ],
        "subtext": "rettangolare",
        "comparative": "più rettangolare",
        "superlative": "il più rettangolare",
        "transcription": "rettanɡoˈlare"
    },
    {
        "word": "ovale",
        "feminine": "ovale",
        "level": "starter",
        "theme": "shapes_A1",
        "emoji": "🥚",
        "form": "adjective",
        "plural": "ovali",
        "femininePlural": "ovali",
        "definitions": [
            {
                "text": "Che ha forma di ellisse.",
                "examples": [
                    "Lo specchio è ovale.",
                    "Un viso ovale."
                ]
            }
        ],
        "subtext": "ovale",
        "comparative": "più ovale",
        "superlative": "il più ovale",
        "transcription": "oˈvale"
    },
    {
        "word": "preferito",
        "feminine": "preferita",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "⭐",
        "form": "adjective",
        "plural": "preferiti",
        "femininePlural": "preferite",
        "definitions": [
            {
                "text": "Scelto tra gli altri per predilezione.",
                "examples": [
                    "Il mio colore preferito è il blu.",
                    "La mia pizza preferita."
                ]
            }
        ],
        "subtext": "preferito",
        "comparative": "più preferito",
        "superlative": "il più preferito",
        "transcription": "prefeˈrito"
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
        "definitions": [
            {
                "text": "Privo di luce; di colore cupo.",
                "examples": [
                    "Il mare è scuro di notte.",
                    "Capelli scuri."
                ]
            }
        ],
        "subtext": "scuro",
        "comparative": "più scuro",
        "superlative": "il più scuro",
        "transcription": "ˈskuro"
    },
    {
        "word": "luminoso",
        "feminine": "luminosa",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💡",
        "form": "adjective",
        "plural": "luminosi",
        "femininePlural": "luminose",
        "definitions": [
            {
                "text": "Che manda molta luce.",
                "examples": [
                    "L'ufficio è molto luminoso.",
                    "Una stella luminosa."
                ]
            }
        ],
        "subtext": "luminoso",
        "comparative": "più luminoso",
        "superlative": "il più luminoso",
        "transcription": "lumiˈnozo"
    },
    {
        "word": "dorato",
        "feminine": "dorata",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟡",
        "form": "adjective",
        "plural": "dorati",
        "femininePlural": "dorate",
        "definitions": [
            {
                "text": "Del colore dell'oro.",
                "examples": [
                    "Lei porta un orologio dorato.",
                    "Un campo dorato."
                ]
            }
        ],
        "subtext": "dorato",
        "comparative": "più dorato",
        "superlative": "il più dorato",
        "transcription": "doˈrato"
    },
    {
        "word": "argentato",
        "feminine": "argentata",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⚪",
        "form": "adjective",
        "plural": "argentati",
        "femininePlural": "argentate",
        "definitions": [
            {
                "text": "Del colore dell'argento.",
                "examples": [
                    "Una luna argentata.",
                    "Capelli argentati."
                ]
            }
        ],
        "subtext": "argentato",
        "comparative": "più argentato",
        "superlative": "il più argentato",
        "transcription": "ardʒenˈtato"
    },
    {
        "word": "profondo",
        "feminine": "profonda",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🕳️",
        "form": "adjective",
        "plural": "profondi",
        "femininePlural": "profonde",
        "definitions": [
            {
                "text": "Che si estende molto verso il basso.",
                "examples": [
                    "Il lago è molto profondo.",
                    "Un respiro profondo."
                ]
            }
        ],
        "subtext": "profondo",
        "comparative": "più profondo",
        "superlative": "il più profondo",
        "transcription": "proˈfondo"
    },
    {
        "word": "poco profondo",
        "feminine": "poco profonda",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "plural": "poco profondi",
        "femininePlural": "poco profonde",
        "definitions": [
            {
                "text": "Che ha poca profondità.",
                "examples": [
                    "Il fiume è poco profondo qui.",
                    "Un piatto poco profondo."
                ]
            }
        ],
        "subtext": "poco profondo",
        "comparative": "più poco profondo",
        "superlative": "il più poco profondo",
        "transcription": "ˈpɔko proˈfondo"
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
        "definitions": [
            {
                "text": "Proprio dei nostri tempi.",
                "examples": [
                    "È un edificio moderno.",
                    "Arte moderna."
                ]
            }
        ],
        "subtext": "moderno",
        "comparative": "più moderno",
        "superlative": "il più moderno",
        "transcription": "moˈdɛrno"
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
        "definitions": [
            {
                "text": "Di tempi molto lontani nel passato.",
                "examples": [
                    "Visitiamo un castello antico.",
                    "Un libro antico."
                ]
            }
        ],
        "subtext": "antico",
        "comparative": "più antico",
        "superlative": "il più antico",
        "transcription": "anˈtiko"
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
        "definitions": [
            {
                "text": "Che ha coraggio.",
                "examples": [
                    "Lui è un soldato coraggioso.",
                    "Una decisione coraggiosa."
                ]
            }
        ],
        "subtext": "coraggioso",
        "comparative": "più coraggioso",
        "superlative": "il più coraggioso",
        "transcription": "koradˈdʒozo"
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
        "definitions": [
            {
                "text": "Privo di coraggio; vile.",
                "examples": [
                    "Non essere codardo!",
                    "Un comportamento codardo."
                ]
            }
        ],
        "subtext": "codardo",
        "comparative": "più codardo",
        "superlative": "il più codardo",
        "transcription": "koˈdardo"
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
        "definitions": [
            {
                "text": "Che ha una larghezza notevole.",
                "examples": [
                    "Il sentiero è molto largo.",
                    "Pantaloni larghi."
                ]
            }
        ],
        "subtext": "largo",
        "comparative": "più largo",
        "superlative": "il più largo",
        "transcription": "ˈlarɡo"
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
        "definitions": [
            {
                "text": "Che ha poca larghezza; serrato.",
                "examples": [
                    "Il corridoio è troppo stretto.",
                    "Un vestito stretto."
                ]
            }
        ],
        "subtext": "stretto",
        "comparative": "più stretto",
        "superlative": "il più stretto",
        "transcription": "ˈstretto"
    },
    {
        "word": "poco amichevole",
        "feminine": "poco amichevole",
        "level": "starter",
        "theme": "personality_traits_A1",
        "emoji": "😠",
        "form": "adjective",
        "plural": "poco amichevoli",
        "femininePlural": "poco amichevoli",
        "definitions": [
            {
                "text": "Non socievole o cordiale.",
                "examples": [
                    "Il gatto è poco amichevole.",
                    "Un vicino poco amichevole."
                ]
            }
        ],
        "subtext": "poco amichevole",
        "comparative": "più poco amichevole",
        "superlative": "il più poco amichevole",
        "transcription": "ˈpɔko amiˈkevole"
    },
    {
        "word": "impaziente",
        "feminine": "impaziente",
        "level": "starter",
        "theme": "personality_traits_A1",
        "emoji": "⌚",
        "form": "adjective",
        "plural": "impazienti",
        "femininePlural": "impazienti",
        "definitions": [
            {
                "text": "Che non sa aspettare.",
                "examples": [
                    "Lui è molto impaziente.",
                    "Un cliente impaziente."
                ]
            }
        ],
        "subtext": "impaziente",
        "comparative": "più impaziente",
        "superlative": "il più impaziente",
        "transcription": "impatˈtsjɛnte"
    },
    {
        "word": "maleducato",
        "feminine": "maleducata",
        "level": "starter",
        "theme": "personality_traits_A1",
        "emoji": "😛",
        "form": "adjective",
        "plural": "maleducati",
        "femininePlural": "maleducate",
        "definitions": [
            {
                "text": "Privo di buona educazione.",
                "examples": [
                    "Quel ragazzo è maleducato.",
                    "Un gesto maleducato."
                ]
            }
        ],
        "subtext": "maleducato",
        "comparative": "più maleducato",
        "superlative": "il più maleducato",
        "transcription": "maleduˈkato"
    },
    {
        "word": "falso",
        "feminine": "falsa",
        "level": "starter",
        "theme": "material_objects_A1",
        "emoji": "🎭",
        "form": "adjective",
        "plural": "falsi",
        "femininePlural": "false",
        "definitions": [
            {
                "text": "Contrario al vero; non autentico.",
                "examples": [
                    "È un dente falso.",
                    "Una notizia falsa."
                ]
            }
        ],
        "subtext": "falso",
        "comparative": "più falso",
        "superlative": "il più falso",
        "transcription": "ˈfalso"
    },
    {
        "word": "sfortunato",
        "feminine": "sfortunata",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😿",
        "form": "adjective",
        "plural": "sfortunati",
        "femininePlural": "sfortunate",
        "definitions": [
            {
                "text": "Che non ha fortuna.",
                "examples": [
                    "Lui è molto sfortunato.",
                    "Un evento sfortunato."
                ]
            }
        ],
        "subtext": "sfortunato",
        "comparative": "più sfortunato",
        "superlative": "il più sfortunato",
        "transcription": "sfortuˈnato"
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
        "definitions": [
            {
                "text": "Che suscita simpatia.",
                "examples": [
                    "Il mio collega è molto simpatico.",
                    "Una persona simpatica."
                ]
            }
        ],
        "subtext": "molto simpatico",
        "opposite": "antipatico",
        "oppositeEmoji": "😒",
        "transcription": "simˈpatiko"
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
        "opposite": "simpatico",
        "oppositeEmoji": "😊",
        "transcription": "antiˈpatiko"
    }
];
    const lang = "it";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();