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
                "text": "Una persona o una cosa che è alta.",
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
        "synonyms": ["una persona alta"],
        "comparative": "più alto",
        "superlative": "il più alto"
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
                "text": "Una persona o una cosa che non è alta.",
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
        "synonyms": ["un breve viaggio", "capelli corti"],
        "comparative": "più corto",
        "superlative": "il più corto",
        "opposite": "alto",
        "oppositeEmoji": "🗼"
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
                "text": "Che ha vissuto o è esistito per poco tempo.",
                "examples": [
                    "È un uomo giovane."
                ]
            }
        ],
        "comparative": "più giovane",
        "superlative": "il più giovane",
        "opposite": "vecchio",
        "oppositeEmoji": "👴",
        "subtext": "",
        "synonyms": ["giovane persona", "giovane professionista", "giovane dentro"],
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
                "text": "Che ha vissuto o è esistito per molto tempo.",
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
        "synonyms": ["vecchie abitudini"],
        "comparative": "più vecchio",
        "superlative": "il più vecchio"
    },
    {
        "word": "soleggiato",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Con molta luce dal sole.",
                "examples": [
                    "È una giornata soleggiata.",
                    "Mi piace il tempo soleggiato."
                ]
            }
        ],
        "subtext": "tempo soleggiato",
        "synonyms": ["giornata di sole", "schiarite"],
        "comparative": "più soleggiato",
        "superlative": "il più soleggiato",
        "feminine": "soleggiata",
        "plural": "soleggiati",
        "femininePlural": "soleggiate"
    },
    {
        "word": "piovoso",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌧️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Con molta pioggia.",
                "examples": [
                    "È una giornata piovosa.",
                    "Indossa un cappotto, fuori piove."
                ]
            }
        ],
        "subtext": "tempo piovoso",
        "synonyms": ["giornata di pioggia", "stagione delle piogge"],
        "comparative": "più piovoso",
        "superlative": "il più piovoso",
        "feminine": "piovosa",
        "plural": "piovosi",
        "femininePlural": "piovose"
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
                "text": "Che ha un'alta temperatura.",
                "examples": [
                    "Il caffè è caldo."
                ]
            }
        ],
        "feminine": "calda",
        "plural": "caldi",
        "femininePlural": "calde",
        "comparative": "più caldo",
        "superlative": "il più caldo"
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
                "text": "Che ha una bassa temperatura.",
                "examples": [
                    "L'acqua è fredda."
                ]
            }
        ],
        "feminine": "fredda",
        "plural": "freddi",
        "femininePlural": "fredde",
        "comparative": "più freddo",
        "superlative": "il più freddo"
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
                "text": "Normale o usuale; non speciale.",
                "examples": [
                    "Era una giornata ordinaria."
                ]
            }
        ],
        "subtext": "giorno ordinario / niente di ordinario",
        "synonyms": ["vita ordinaria"],
        "comparative": "più ordinario",
        "superlative": "il più ordinario",
        "feminine": "ordinaria",
        "plural": "ordinari",
        "femininePlural": "ordinarie"
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
                "text": "Non costoso; a basso prezzo.",
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
        "synonyms": ["alla mano"],
        "comparative": "più economico",
        "superlative": "il più economico"
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
                "text": "Che costa molti soldi.",
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
        "synonyms": ["gusti costosi"],
        "comparative": "più costoso",
        "superlative": "il più costoso",
        "opposite": "economico",
        "oppositeEmoji": "🏷️"
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
                "text": "Di alta qualità o abilità; piacevole.",
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
        "synonyms": ["ottimo", "piacevole", "buona idea", "buona fortuna", "buon valore"],
        "comparative": "migliore",
        "superlative": "il migliore"
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
                "text": "Non buono; spiacevole o di scarsa qualità.",
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
        "synonyms": ["terribile", "pessimo", "spiacevole", "cattive notizie", "sfortuna", "cattiva decisione"],
        "comparative": "peggiore",
        "superlative": "il peggiore"
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
                "text": "Di grandi dimensioni.",
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
        "synonyms": ["ampio", "enorme"],
        "comparative": "più grande",
        "superlative": "il più grande"
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
                "text": "Di piccole dimensioni.",
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
        "superlative": "il più piccolo"
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
                "text": "Non difficile.",
                "examples": [
                    "Il test è facile.",
                    "Il modulo di domanda è facile da compilare."
                ]
            }
        ],
        "subtext": "facile da fare / non facile",
        "synonyms": ["semplice e veloce"],
        "comparative": "più facile",
        "superlative": "il più facile"
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
                "text": "Difficile da fare o capire.",
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
        "superlative": "il più difficile"
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
                "text": "Che prova piacere o gioia.",
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
        "superlative": "il più felice"
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
                "text": "Che ha bisogno di riposo o sonno.",
                "examples": [
                    "Sono molto stanco dopo il lavoro.",
                    "Mi sento stanco dopo una lunga settimana."
                ]
            }
        ],
        "subtext": "sonnolento, esausto, sentirsi stanco / sentirsi stanco / stanco di qualcosa / molto stanco",
        "comparative": "più stanco",
        "superlative": "il più stanco"
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
        "femininePlural": "a tempo pieno"
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
        "synonyms": ["studente lavoratore"],
        "comparative": "più a tempo parziale",
        "superlative": "il più a tempo parziale",
        "feminine": "a tempo parziale",
        "plural": "a tempo parziale",
        "femininePlural": "a tempo parziale"
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
        "synonyms": ["ordinato", "limpido"],
        "definitions": [
            {
                "text": "Privo di sporco.",
                "examples": [
                    "La mia camera è pulita."
                ]
            }
        ],
        "feminine": "pulita",
        "plural": "puliti",
        "femininePlural": "pulite",
        "comparative": "più pulito",
        "superlative": "il più pulito"
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
                "text": "Che fa bene al corpo; non malato.",
                "examples": [
                    "Le verdure sono cibo sano."
                ]
            }
        ],
        "subtext": "bene, in forma, dieta sana",
        "comparative": "più sano",
        "superlative": "il più sano",
        "opposite": "unhealthy",
        "oppositeEmoji": "🍔"
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
                "text": "Non sta bene; malato.",
                "examples": [
                    "Mi sento malato oggi."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["indisposto", "sentirsi male"],
        "comparative": "più malato",
        "superlative": "il più malato",
        "opposite": "well",
        "oppositeEmoji": "💪"
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
        "femininePlural": "online"
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
                "text": "Senza altre persone; da solo.",
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
        "femininePlural": "sole"
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
        "oppositeEmoji": "😫"
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
        "synonyms": ["ansioso"],
        "comparative": "più preoccupato",
        "superlative": "il più preoccupato",
        "opposite": "calm",
        "oppositeEmoji": "😌"
    },
    {
        "word": "occupato",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "definitions": [
            {
                "text": "Avere molte cose da fare.",
                "examples": [
                    "Sono molto occupato questa settimana."
                ]
            }
        ],
        "feminine": "occupata",
        "plural": "occupati",
        "femininePlural": "occupate",
        "subtext": "molto occupato, giornata piena / troppo occupato",
        "synonyms": ["programma fitto"],
        "comparative": "più occupato",
        "superlative": "il più occupato"
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
                "text": "D'aiuto; che ha uno scopo pratico.",
                "examples": [
                    "Un'auto è molto utile in campagna."
                ]
            }
        ],
        "subtext": "utile, pratico",
        "comparative": "più utile",
        "superlative": "il più utile",
        "opposite": "inutile",
        "oppositeEmoji": "🗑️"
    },
    {
        "word": "importante",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❗",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["essenziale", "fondamentale"],
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
        "superlative": "il più importante"
    },
    {
        "word": "rosso",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟥",
        "form": "adjective",
        "subtext": "rosso scuro, rosso vivo / vino rosso / semaforo rosso",
        "synonyms": ["faccia rossa"],
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
        "superlative": "il più rosso"
    },
    {
        "word": "blu",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟦",
        "form": "adjective",
        "subtext": "azzurro, blu scuro / blu scuro / cielo blu",
        "synonyms": ["azzurro"],
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
        "superlative": "il più blu"
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
        "superlative": "il più verde"
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
        "superlative": "il più bianco"
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
        "superlative": "il più nero"
    },
    {
        "word": "giallo",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟨",
        "form": "adjective",
        "subtext": "giallo limone, giallo oro / giallo pallido / giallo brillante",
        "synonyms": ["luce gialla"],
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
        "superlative": "il più giallo"
    },
    {
        "word": "libero",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["gratis", "senza costi"],
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
        "superlative": "il più libero"
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
        "synonyms": ["libero", "non chiuso"],
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
        "superlative": "il più aperto"
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
        "synonyms": ["non accessibile"],
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
        "superlative": "il più chiuso"
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
                "text": "Di dimensioni o quantità superiori alla media.",
                "examples": [
                    "Parigi è una città molto grande."
                ]
            }
        ],
        "subtext": "una grande città / una grande azienda / una grande quantità",
        "comparative": "più grande",
        "superlative": "il più grande"
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
                "text": "Piccolo di dimensioni; una piccola quantità di.",
                "examples": [
                    "Guida una piccola auto per risparmiare sul carburante."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["un pochino", "pochi soldi", "troppo poco"],
        "comparative": "più piccolo",
        "superlative": "il più piccolo"
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
                "text": "Di grande lunghezza; che dura molto tempo.",
                "examples": [
                    "Ha un lungo tragitto ogni giorno."
                ]
            }
        ],
        "subtext": "un lungo viaggio",
        "synonyms": ["una lunga giornata", "molto tempo"],
        "comparative": "più lungo",
        "superlative": "il più lungo"
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
                "text": "Di altezza o livello superiore alla media.",
                "examples": [
                    "L'affitto in questa zona è molto alto."
                ]
            }
        ],
        "subtext": "prezzo alto / affitto alto",
        "synonyms": ["alta qualità"],
        "comparative": "più alto",
        "superlative": "il più alto"
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
                "text": "Di altezza o livello inferiore alla media.",
                "examples": [
                    "Lo stipendio è troppo basso per le ore richieste."
                ]
            }
        ],
        "subtext": "prezzo basso / stipendio basso",
        "synonyms": ["bassa qualità"],
        "comparative": "più basso",
        "superlative": "il più basso"
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
        "synonyms": ["una giornata piena"],
        "comparative": "più pieno",
        "superlative": "il più pieno"
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
        "synonyms": ["una stanza vuota"],
        "comparative": "più vuoto",
        "superlative": "il più vuoto"
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
        "synonyms": ["un caloroso benvenuto", "stare al caldo"],
        "comparative": "più tiepido",
        "superlative": "il più tiepido"
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
        "synonyms": ["una bevanda fresca"],
        "comparative": "più fresco",
        "superlative": "il più fresco"
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
        "synonyms": ["tempo umido", "vestiti bagnati", "bagnarsi"],
        "comparative": "più bagnato",
        "superlative": "il più bagnato"
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
        "synonyms": ["tempo secco", "pelle secca"],
        "comparative": "più asciutto",
        "superlative": "il più asciutto"
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
                "text": "Coperto di sporcizia o impurità.",
                "examples": [
                    "Le sue mani sono sporche dopo aver riparato l'auto."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["mani sporche", "vestiti sporchi", "sporcarsi"],
        "comparative": "più sporco",
        "superlative": "il più sporco"
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
        "synonyms": ["una decisione difficile"],
        "comparative": "più duro",
        "superlative": "il più duro"
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
        "synonyms": ["luce soffusa", "musica dolce", "soft skills"],
        "comparative": "più morbido",
        "superlative": "il più morbido"
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
        "synonyms": ["pioggia forte"],
        "comparative": "più pesante",
        "superlative": "il più pesante"
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
        "synonyms": ["pioggerella"],
        "comparative": "più leggero",
        "superlative": "il più leggero"
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
        "synonyms": ["pane integrale"],
        "comparative": "più marrone",
        "superlative": "il più marrone"
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
        "synonyms": ["zona grigia"],
        "comparative": "più grigio",
        "superlative": "il più grigio"
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
        "superlative": "il più rosa"
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
        "superlative": "il più arancione"
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
                "text": "Estremamente buono; grande in quantità.",
                "examples": [
                    "È una grande manager."
                ]
            }
        ],
        "subtext": "una grande idea / una grande opportunità",
        "synonyms": ["ottimo rapporto qualità-prezzo"],
        "comparative": "più grande",
        "superlative": "il più grande"
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
                "text": "Piacevole o gentile.",
                "examples": [
                    "Il nuovo ufficio è molto bello."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["una bella giornata", "un bel posto", "una bella persona"],
        "comparative": "più bello",
        "superlative": "il più bello"
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
        "synonyms": ["una meravigliosa opportunità"],
        "comparative": "più meraviglioso",
        "superlative": "il più meraviglioso"
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
        "synonyms": ["notizie terribili"],
        "comparative": "più terribile",
        "superlative": "il più terribile"
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
        "synonyms": ["pessime notizie"],
        "comparative": "più orribile",
        "superlative": "il più orribile"
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
        "superlative": "il più incredibile"
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
        "synonyms": ["notizie fantastiche", "una fantastica opportunità"],
        "comparative": "più fantastico",
        "superlative": "il più fantastico"
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
                "text": "Sentirsi infelice o addolorato.",
                "examples": [
                    "Era triste di lasciare l'azienda."
                ]
            }
        ],
        "subtext": "sentirsi triste / una situazione triste / profondamente triste",
        "comparative": "più triste",
        "superlative": "il più triste"
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
        "synonyms": ["sentire fame", "molta fame", "soffrire la fame"],
        "comparative": "più affamato",
        "superlative": "il più affamato"
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
        "superlative": "il più arrabbiato"
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
        "superlative": "il più annoiato"
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
        "synonyms": ["eccitato per"],
        "comparative": "più emozionato",
        "superlative": "il più emozionato"
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
                "text": "Sentire paura.",
                "examples": [
                    "Ha paura di commettere errori."
                ]
            }
        ],
        "subtext": "profondamente spaventato",
        "synonyms": ["paura di", "avere paura"],
        "comparative": "più spaventato",
        "superlative": "il più spaventato"
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
        "synonyms": ["scusarsi di"],
        "comparative": "più dispiaciuto",
        "superlative": "il più dispiaciuto"
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
        "synonyms": ["risposta giusta"],
        "comparative": "più giusto",
        "superlative": "il più giusto"
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
        "synonyms": ["risposta sbagliata", "andare male"],
        "comparative": "più sbagliato",
        "superlative": "il più sbagliato"
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
                "text": "Non esistente prima; fatto di recente.",
                "examples": [
                    "Ha un nuovo lavoro che inizia a marzo."
                ]
            }
        ],
        "subtext": "nuovo lavoro / completamente nuovo",
        "synonyms": ["fiammante"],
        "comparative": "più nuovo",
        "superlative": "il più nuovo"
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
                "text": "Non uguale a un altro.",
                "examples": [
                    "Questo lavoro è molto differente dal mio precedente."
                ]
            }
        ],
        "subtext": "differente da",
        "synonyms": ["completamente diverso", "molto diverso"],
        "comparative": "più differente",
        "superlative": "il più differente"
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
                "text": "Non differente; identico.",
                "examples": [
                    "Guadagnano lo stesso stipendio."
                ]
            }
        ],
        "subtext": "lo stesso di / esattamente lo stesso",
        "synonyms": ["contemporaneamente"],
        "comparative": "più stesso",
        "superlative": "il più stesso"
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
                "text": "Che si muove o accade rapidamente.",
                "examples": [
                    "Il treno per il lavoro è veloce e affidabile."
                ]
            }
        ],
        "subtext": "treno veloce / molto veloce",
        "synonyms": ["fast food"],
        "comparative": "più veloce",
        "superlative": "il più veloce"
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
                "text": "Non veloce; che impiega molto tempo.",
                "examples": [
                    "Il nuovo sistema è molto lento."
                ]
            }
        ],
        "subtext": "internet lento / molto lento",
        "synonyms": ["progressi lenti"],
        "comparative": "più lento",
        "superlative": "il più lento"
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
                "text": "Che fa poco o nessun rumore; pacifico.",
                "examples": [
                    "L'ufficio è silenzioso all'ora di pranzo."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["zona silenziosa", "stare zitti", "bello e tranquillo"],
        "comparative": "più silenzioso",
        "superlative": "il più silenzioso"
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
                    "L'ufficio open space è troppo rumoroso."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["forte rumore", "troppo forte", "una voce forte"],
        "comparative": "più rumoroso",
        "superlative": "il più rumoroso"
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
                "text": "Non pericoloso; protetto dal pericolo.",
                "examples": [
                    "Questo quartiere è molto sicuro."
                ]
            }
        ],
        "subtext": "sicuro da fare / sentirsi al sicuro",
        "synonyms": ["zona sicura"],
        "comparative": "più sicuro",
        "superlative": "il più sicuro"
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
                "text": "Probabile che causi danni.",
                "examples": [
                    "Il tragitto su quella strada è pericoloso."
                ]
            }
        ],
        "subtext": "molto pericoloso / potenzialmente pericoloso",
        "synonyms": ["situazione pericolosa"],
        "comparative": "più pericoloso",
        "superlative": "il più pericoloso"
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
                "text": "Non sentirsi soddisfatto o felice.",
                "examples": [
                    "È infelice con il suo attuale stipendio."
                ]
            }
        ],
        "subtext": "infelice per qualcosa / profondamente infelice",
        "comparative": "più infelice",
        "superlative": "il più infelice"
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
                "text": "Sentirsi ansioso o preoccupato.",
                "examples": [
                    "Era nervoso prima del colloquio di lavoro."
                ]
            }
        ],
        "subtext": "nervoso prima di un colloquio / molto nervoso",
        "comparative": "più nervoso",
        "superlative": "il più nervoso"
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
                "text": "Sentirsi preoccupati e tesi per la pressione.",
                "examples": [
                    "Si sente stressata prima di ogni scadenza."
                ]
            }
        ],
        "subtext": "sentirsi stressato / molto stressato",
        "synonyms": ["esaurito"],
        "comparative": "più stressato",
        "superlative": "il più stressato"
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
                "text": "Sentirsi sicuri delle proprie capacità.",
                "examples": [
                    "È molto sicura di sé nelle presentazioni ai clienti."
                ]
            }
        ],
        "subtext": "fiducia in se stessi",
        "synonyms": ["sentirsi fiduciosi", "molto sicuri"],
        "comparative": "più sicuro di sé",
        "superlative": "il più sicuro di sé"
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
                "text": "Sentirsi orgogliosi per un risultato.",
                "examples": [
                    "Era orgoglioso di ottenere la sua prima promozione."
                ]
            }
        ],
        "subtext": "orgoglioso di",
        "synonyms": ["sentirsi fiero", "molto fiero"],
        "comparative": "più orgoglioso",
        "superlative": "il più orgoglioso"
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
                "text": "Sentire paura per qualcosa.",
                "examples": [
                    "Aveva paura di fare la presentazione."
                ]
            }
        ],
        "subtext": "molto spaventato",
        "synonyms": ["sentire paura", "paura di"],
        "comparative": "più spaventato",
        "superlative": "il più spaventato"
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
                "text": "Sentire shock per qualcosa di inaspettato.",
                "examples": [
                    "È rimasto sorpreso di ricevere un aumento di stipendio."
                ]
            }
        ],
        "subtext": "sentirsi sorpreso / molto sorpreso / piacevolmente sorpreso",
        "comparative": "più sorpreso",
        "superlative": "il più sorpreso"
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
                "text": "Sentirsi tristi perché qualcosa non è stato all'altezza delle aspettative.",
                "examples": [
                    "Era delusa per non aver ottenuto il lavoro."
                ]
            }
        ],
        "subtext": "sentirsi deluso / profondamente deluso / deluso da",
        "comparative": "più deluso",
        "superlative": "il più deluso"
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
                "text": "Attrattivo e piacevole da guardare.",
                "examples": [
                    "Ha un ufficio bello e luminoso con vista sulla città."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["bella vista", "bella città", "assolutamente splendido"],
        "comparative": "più bello",
        "superlative": "il più bello"
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
                "text": "Piacevole da guardare; piuttosto attraente.",
                "examples": [
                    "La nuova sala riunioni è molto carina."
                ]
            }
        ],
        "subtext": "abbastanza carino",
        "synonyms": ["piuttosto bene", "un bel posto"],
        "comparative": "più carino",
        "superlative": "il più carino"
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
                "text": "Che ha grande forza fisica o mentale.",
                "examples": [
                    "È una leader forte e molto rispettata."
                ]
            }
        ],
        "subtext": "caffè forte / opinione forte / molto forte",
        "comparative": "più forte",
        "superlative": "il più forte"
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
                "text": "Mancanza di forza o potere.",
                "examples": [
                    "Il segnale è debole all'ultimo piano."
                ]
            }
        ],
        "subtext": "connessione debole / un argomento debole / molto debole",
        "comparative": "più debole",
        "superlative": "il più debole"
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
                "text": "In buone condizioni fisiche grazie all'esercizio.",
                "examples": [
                    "Si mantiene in forma andando al lavoro in bicicletta ogni giorno."
                ]
            }
        ],
        "subtext": "in forma fisica / restare in forma / mantenersi in forma",
        "comparative": "più in forma",
        "superlative": "il più in forma"
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
                "text": "Estremamente buono; di uno standard molto elevato.",
                "examples": [
                    "Ha ricevuto un'eccellente recensione."
                ]
            }
        ],
        "subtext": "lavoro eccellente / assolutamente eccellente",
        "synonyms": ["risultati eccellenti"],
        "comparative": "più eccellente",
        "superlative": "il più eccellente"
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
                "text": "Senza alcun difetto; completamente corretto.",
                "examples": [
                    "Il tempismo del lancio è stato perfetto."
                ]
            }
        ],
        "subtext": "tempismo perfetto / assolutamente perfetto",
        "synonyms": ["una perfetta opportunità"],
        "comparative": "più perfetto",
        "superlative": "il più perfetto"
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
                "text": "Senza alcun valore utile; non d'aiuto.",
                "examples": [
                    "Questo software è inutile per le nostre esigenze."
                ]
            }
        ],
        "subtext": "completamente inutile / rivelarsi inutile / un'idea inutile",
        "comparative": "più inutile",
        "superlative": "il più inutile"
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
                "text": "Vero o giusto; senza errori.",
                "examples": [
                    "Per favore verifica che le cifre siano corrette."
                ]
            }
        ],
        "subtext": "il modo corretto / completamente corretto",
        "synonyms": ["risposta corretta"],
        "comparative": "più corretto",
        "superlative": "il più corretto"
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
                "text": "Che attrae l'attenzione; che vale la pena conoscere.",
                "examples": [
                    "La nuova proposta è molto interessante."
                ]
            }
        ],
        "subtext": "trovare interessante / molto interessante / un'idea interessante",
        "comparative": "più interessante",
        "superlative": "il più interessante"
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
                "text": "Non interessante; monotono.",
                "examples": [
                    "La sessione di formazione è stata molto noiosa."
                ]
            }
        ],
        "subtext": "molto noioso / trovarlo noioso",
        "synonyms": ["una riunione noiosa"],
        "comparative": "più noioso",
        "superlative": "il più noioso"
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
                "text": "Necessario; richiesto per poter fare qualcosa.",
                "examples": [
                    "Una buona connessione internet è necessaria per il lavoro a distanza."
                ]
            }
        ],
        "subtext": "assolutamente necessario / se necessario / necessario da fare",
        "comparative": "più necessario",
        "superlative": "il più necessario"
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
                "text": "In grado di accadere o di essere raggiunto.",
                "examples": [
                    "È possibile finire entro venerdì?"
                ]
            }
        ],
        "subtext": "al più presto possibile / è possibile / rendere possibile",
        "comparative": "più possibile",
        "superlative": "il più possibile"
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
                "text": "Non in grado di accadere o di essere fatto.",
                "examples": [
                    "È impossibile finire in un giorno."
                ]
            }
        ],
        "subtext": "praticamente impossibile / rendere impossibile / quasi impossibile",
        "comparative": "più impossibile",
        "superlative": "il più impossibile"
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
                "text": "Diverso dal solito; particolarmente importante.",
                "examples": [
                    "Ha un talento speciale per la risoluzione dei problemi."
                ]
            }
        ],
        "subtext": "un'offerta speciale / occasione speciale / molto speciale",
        "comparative": "più speciale",
        "superlative": "il più speciale"
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
                "text": "Apprezzato da molte persone.",
                "examples": [
                    "Il nuovo bar vicino all'ufficio è molto popolare."
                ]
            }
        ],
        "subtext": "molto popolare / scelta popolare / il più popolare",
        "comparative": "più popolare",
        "superlative": "il più popolare"
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
                "text": "Quasi lo stesso; che ha molte caratteristiche comuni.",
                "examples": [
                    "I nostri approcci sono molto simili."
                ]
            }
        ],
        "subtext": "molto simile / simile a",
        "synonyms": ["risultati simili"],
        "comparative": "più simile",
        "superlative": "il più simile"
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
                "text": "Gentile e piacevole; facile con cui parlare.",
                "examples": [
                    "Il nuovo manager è molto amichevole e disponibile."
                ]
            }
        ],
        "subtext": "molto amichevole / atmosfera amichevole",
        "synonyms": ["un volto amico"],
        "comparative": "più amichevole",
        "superlative": "il più amichevole"
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
                "text": "Premuroso e generoso verso gli altri.",
                "examples": [
                    "È gentile con tutti in ufficio."
                ]
            }
        ],
        "subtext": "molto gentile / gentile da parte tua / una persona gentile",
        "comparative": "più gentile",
        "superlative": "il più gentile"
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
                "text": "Che fa ridere le persone; umoristico.",
                "examples": [
                    "Ha un modo divertente di spiegare idee complesse."
                ]
            }
        ],
        "subtext": "molto divertente / storia divertente / trovarlo divertente",
        "comparative": "più divertente",
        "superlative": "il più divertente"
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
                "text": "Intelligente; rapido nel capire.",
                "examples": [
                    "È un'abile negoziatrice."
                ]
            }
        ],
        "subtext": "molto intelligente / un'idea intelligente",
        "synonyms": ["abbastanza scaltro"],
        "comparative": "più intelligente",
        "superlative": "il più intelligente"
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
                "text": "Comportarsi in modo rispettoso e cortese.",
                "examples": [
                    "È sempre educato con i clienti."
                ]
            }
        ],
        "subtext": "molto educato",
        "synonyms": ["richiesta gentile", "abbastanza cortese"],
        "comparative": "più educato",
        "superlative": "il più educato"
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
                "text": "Non educato; che mostra mancanza di rispetto.",
                "examples": [
                    "Quell'email era piuttosto maleducata e non professionale."
                ]
            }
        ],
        "subtext": "molto maleducato",
        "synonyms": ["incredibilmente scortese", "deliberatamente offensivo"],
        "comparative": "più maleducato",
        "superlative": "il più maleducato"
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
                "text": "Non disposto a lavorare o a sforzarsi.",
                "examples": [
                    "Ha la reputazione di essere pigro con i follow-up."
                ]
            }
        ],
        "subtext": "molto pigro / un approccio pigro / troppo pigro",
        "comparative": "più pigro",
        "superlative": "il più pigro"
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
                "text": "Dire la verità; non ingannare.",
                "examples": [
                    "È nota per essere completamente onesta con i clienti."
                ]
            }
        ],
        "subtext": "molto onesto / brutalmente onesto / del tutto onesto",
        "comparative": "più onesto",
        "superlative": "il più onesto"
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
                "text": "Che fa molto rumore; chiassoso.",
                "examples": [
                    "L'ufficio open space è molto rumoroso."
                ]
            }
        ],
        "subtext": "molto rumoroso / ambiente rumoroso / troppo rumoroso",
        "comparative": "più rumoroso",
        "superlative": "il più rumoroso"
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
                "text": "Definizione di onesto.",
                "examples": []
            }
        ],
        "subtext": "onesto",
        "comparative": "più onesto",
        "superlative": "il più onesto"
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
                "text": "Definizione di rumoroso.",
                "examples": []
            }
        ],
        "subtext": "rumoroso",
        "comparative": "più rumoroso",
        "superlative": "il più rumoroso"
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
                "text": "Definizione di rotondo.",
                "examples": []
            }
        ],
        "subtext": "rotondo",
        "comparative": "più rotondo",
        "superlative": "il più rotondo"
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
                "text": "Definizione di quadrato.",
                "examples": []
            }
        ],
        "subtext": "quadrato",
        "comparative": "più quadrato",
        "superlative": "il più quadrato"
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
                "text": "Definizione di utile.",
                "examples": []
            }
        ],
        "subtext": "utile",
        "comparative": "più utile",
        "superlative": "il più utile"
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
                "text": "Definizione di paziente.",
                "examples": []
            }
        ],
        "subtext": "paziente",
        "comparative": "più paziente",
        "superlative": "il più paziente"
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
                "text": "Definizione di attivo.",
                "examples": []
            }
        ],
        "subtext": "attivo",
        "comparative": "più attivo",
        "superlative": "il più attivo"
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
                "text": "Definizione di attento.",
                "examples": []
            }
        ],
        "subtext": "attento",
        "comparative": "più attento",
        "superlative": "il più attento"
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
                "text": "Definizione di creativo.",
                "examples": []
            }
        ],
        "subtext": "creativo",
        "comparative": "più creativo",
        "superlative": "il più creativo"
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
                "text": "Definizione di nuvoloso.",
                "examples": []
            }
        ],
        "subtext": "nuvoloso",
        "comparative": "più nuvoloso",
        "superlative": "il più nuvoloso"
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
                "text": "Definizione di ventoso.",
                "examples": []
            }
        ],
        "subtext": "ventoso",
        "comparative": "più ventoso",
        "superlative": "il più ventoso"
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
                "text": "Definizione di nevoso.",
                "examples": []
            }
        ],
        "subtext": "nevoso",
        "comparative": "più nevoso",
        "superlative": "il più nevoso"
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
                "text": "Definizione di nebbioso.",
                "examples": []
            }
        ],
        "subtext": "nebbioso",
        "comparative": "più nebbioso",
        "superlative": "il più nebbioso"
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
                "text": "Definizione di tempestoso.",
                "examples": []
            }
        ],
        "subtext": "tempestoso",
        "comparative": "più tempestoso",
        "superlative": "il più tempestoso"
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
                "text": "Definizione di biondo.",
                "examples": []
            }
        ],
        "subtext": "biondo",
        "comparative": "più biondo",
        "superlative": "il più biondo"
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
                "text": "Definizione di intelligente.",
                "examples": []
            }
        ],
        "subtext": "intelligente",
        "comparative": "più intelligente",
        "superlative": "il più intelligente"
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
                "text": "Definizione di serio.",
                "examples": []
            }
        ],
        "subtext": "serio",
        "comparative": "più serio",
        "superlative": "il più serio"
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
                "text": "Definizione di brutto.",
                "examples": []
            }
        ],
        "subtext": "brutto",
        "comparative": "più brutto",
        "superlative": "il più brutto"
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
                "text": "Definizione di vicino.",
                "examples": []
            }
        ],
        "subtext": "vicino",
        "comparative": "più vicino",
        "superlative": "il più vicino"
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
                "text": "Definizione di lontano.",
                "examples": []
            }
        ],
        "subtext": "lontano",
        "comparative": "più lontano",
        "superlative": "il più lontano"
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
                "text": "Definizione di ricco.",
                "examples": []
            }
        ],
        "subtext": "ricco",
        "comparative": "più ricco",
        "superlative": "il più ricco"
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
                "text": "Definizione di povero.",
                "examples": []
            }
        ],
        "subtext": "povero",
        "comparative": "più povero",
        "superlative": "il più povero"
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
                "text": "Definizione di presto.",
                "examples": []
            }
        ],
        "subtext": "presto",
        "comparative": "più presto",
        "superlative": "il più presto"
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
                "text": "Definizione di tardi.",
                "examples": []
            }
        ],
        "subtext": "tardi",
        "comparative": "più tardi",
        "superlative": "il più tardi"
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
                "text": "Definizione di emozionante.",
                "examples": []
            }
        ],
        "subtext": "emozionante",
        "comparative": "più emozionante",
        "superlative": "il più emozionante"
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
                "text": "Definizione di delizioso.",
                "examples": []
            }
        ],
        "subtext": "delizioso",
        "comparative": "più delizioso",
        "superlative": "il più delizioso"
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
                "text": "Definizione di dolce.",
                "examples": []
            }
        ],
        "subtext": "dolce",
        "comparative": "più dolce",
        "superlative": "il più dolce"
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
                "text": "Definizione di comodo.",
                "examples": []
            }
        ],
        "subtext": "comodo",
        "comparative": "più comodo",
        "superlative": "il più comodo"
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
                "text": "Definizione di vero.",
                "examples": []
            }
        ],
        "subtext": "vero",
        "comparative": "più vero",
        "superlative": "il più vero"
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
                "text": "Definizione di semplice.",
                "examples": []
            }
        ],
        "subtext": "semplice",
        "comparative": "più semplice",
        "superlative": "il più semplice"
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
                "text": "Definizione di naturale.",
                "examples": []
            }
        ],
        "subtext": "naturale",
        "comparative": "più naturale",
        "superlative": "il più naturale"
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
                "text": "Definizione di chiaro.",
                "examples": []
            }
        ],
        "subtext": "chiaro",
        "comparative": "più chiaro",
        "superlative": "il più chiaro"
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
                "text": "Definizione di comune.",
                "examples": []
            }
        ],
        "subtext": "comune",
        "comparative": "più comune",
        "superlative": "il più comune"
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
                "text": "Definizione di famoso.",
                "examples": []
            }
        ],
        "subtext": "famoso",
        "comparative": "più famoso",
        "superlative": "il più famoso"
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
                "text": "Definizione di salato.",
                "examples": []
            }
        ],
        "subtext": "salato",
        "comparative": "più salato",
        "superlative": "il più salato"
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
                "text": "Definizione di acido.",
                "examples": []
            }
        ],
        "subtext": "acido",
        "comparative": "più acido",
        "superlative": "il più acido"
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
                "text": "Definizione di amaro.",
                "examples": []
            }
        ],
        "subtext": "amaro",
        "comparative": "più amaro",
        "superlative": "il più amaro"
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
                "text": "Definizione di grasso.",
                "examples": []
            }
        ],
        "subtext": "grasso",
        "comparative": "più grasso",
        "superlative": "il più grasso"
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
                "text": "Definizione di magro.",
                "examples": []
            }
        ],
        "subtext": "magro",
        "comparative": "più magro",
        "superlative": "il più magro"
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
                "text": "Definizione di riccio.",
                "examples": []
            }
        ],
        "subtext": "riccio",
        "comparative": "più riccio",
        "superlative": "il più riccio"
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
                "text": "Definizione di liscio.",
                "examples": []
            }
        ],
        "subtext": "liscio",
        "comparative": "più liscio",
        "superlative": "il più liscio"
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
                "text": "Definizione di triangolare.",
                "examples": []
            }
        ],
        "subtext": "triangolare",
        "comparative": "più triangolare",
        "superlative": "il più triangolare"
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
                "text": "Definizione di rettangolare.",
                "examples": []
            }
        ],
        "subtext": "rettangolare",
        "comparative": "più rettangolare",
        "superlative": "il più rettangolare"
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
                "text": "Definizione di ovale.",
                "examples": []
            }
        ],
        "subtext": "ovale",
        "comparative": "più ovale",
        "superlative": "il più ovale"
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
                "text": "Definizione di preferito.",
                "examples": []
            }
        ],
        "subtext": "preferito",
        "comparative": "più preferito",
        "superlative": "il più preferito"
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
                "text": "Definizione di scuro.",
                "examples": []
            }
        ],
        "subtext": "scuro",
        "comparative": "più scuro",
        "superlative": "il più scuro"
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
                "text": "Definizione di luminoso.",
                "examples": []
            }
        ],
        "subtext": "luminoso",
        "comparative": "più luminoso",
        "superlative": "il più luminoso"
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
                "text": "Definizione di dorato.",
                "examples": []
            }
        ],
        "subtext": "dorato",
        "comparative": "più dorato",
        "superlative": "il più dorato"
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
                "text": "Definizione di argentato.",
                "examples": []
            }
        ],
        "subtext": "argentato",
        "comparative": "più argentato",
        "superlative": "il più argentato"
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
                "text": "Definizione di profondo.",
                "examples": []
            }
        ],
        "subtext": "profondo",
        "comparative": "più profondo",
        "superlative": "il più profondo"
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
                "text": "Definizione di poco profondo.",
                "examples": []
            }
        ],
        "subtext": "poco profondo",
        "comparative": "più poco profondo",
        "superlative": "il più poco profondo"
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
                "text": "Definizione di moderno.",
                "examples": []
            }
        ],
        "subtext": "moderno",
        "comparative": "più moderno",
        "superlative": "il più moderno"
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
                "text": "Definizione di antico.",
                "examples": []
            }
        ],
        "subtext": "antico",
        "comparative": "più antico",
        "superlative": "il più antico"
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
                "text": "Definizione di coraggioso.",
                "examples": []
            }
        ],
        "subtext": "coraggioso",
        "comparative": "più coraggioso",
        "superlative": "il più coraggioso"
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
                "text": "Definizione di codardo.",
                "examples": []
            }
        ],
        "subtext": "codardo",
        "comparative": "più codardo",
        "superlative": "il più codardo"
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
                "text": "Definizione di largo.",
                "examples": []
            }
        ],
        "subtext": "largo",
        "comparative": "più largo",
        "superlative": "il più largo"
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
                "text": "Definizione di stretto.",
                "examples": []
            }
        ],
        "subtext": "stretto",
        "comparative": "più stretto",
        "superlative": "il più stretto"
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
                "text": "Definizione di poco amichevole.",
                "examples": []
            }
        ],
        "subtext": "poco amichevole",
        "comparative": "più poco amichevole",
        "superlative": "il più poco amichevole"
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
                "text": "Definizione di impaziente.",
                "examples": []
            }
        ],
        "subtext": "impaziente",
        "comparative": "più impaziente",
        "superlative": "il più impaziente"
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
                "text": "Definizione di maleducato.",
                "examples": []
            }
        ],
        "subtext": "maleducato",
        "comparative": "più maleducato",
        "superlative": "il più maleducato"
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
                "text": "Definizione di falso.",
                "examples": []
            }
        ],
        "subtext": "falso",
        "comparative": "più falso",
        "superlative": "il più falso"
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
                "text": "Definizione di sfortunato.",
                "examples": []
            }
        ],
        "subtext": "sfortunato",
        "comparative": "più sfortunato",
        "superlative": "il più sfortunato"
    },
];
    const lang = "it";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();