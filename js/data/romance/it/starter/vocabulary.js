(function() {
    const data = [
    {
        "word": "medico",
        "level": "starter",
        "theme": "jobs_A0",
        "numberPlural": "2 medico",
        "answer": "due medici",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "plural": "medici",
        "definitions": [
            {
                "text": "Una persona che cura i malati.",
                "examples": [
                    "Il medico è in ospedale.",
                    "Vado dal medico."
                ]
            },
            {
                "text": "Questa persona lavora solitamente in un ospedale o in una clinica.",
                "examples": [
                    "I medici portano il camice bianco."
                ]
            }
        ]
    },
    {
        "word": "insegnante",
        "level": "starter",
        "theme": "jobs_A0",
        "emoji": "🧑‍🏫",
        "form": "noun",
        "plural": "insegnanti",
        "definitions": [
            {
                "text": "Una persona che aiuta a imparare.",
                "examples": [
                    "L'insegnante spiega la lezione.",
                    "Ho una brava insegnante."
                ]
            },
            {
                "text": "Questa persona lavora solitamente in una scuola o all'università.",
                "examples": [
                    "Gli insegnanti spiegano nuovi argomenti."
                ]
            }
        ]
    },
    {
        "word": "pasta",
        "level": "starter",
        "theme": "food_drink_A0",
        "emoji": "🍝",
        "form": "noun",
        "plural": "paste",
        "definitions": [
            {
                "text": "Un alimento a base di farina e acqua o uova.",
                "examples": [
                    "Mi piace la pasta al pomodoro.",
                    "Gli spaghetti sono un tipo di pasta."
                ]
            },
            {
                "text": "Questo cibo è il simbolo della cucina italiana.",
                "examples": [
                    "Ci sono molti formati di pasta."
                ]
            }
        ]
    },
    {
        "word": "lasagna",
        "level": "starter",
        "theme": "food_drink_A0",
        "form": "noun",
        "plural": "lasagne",
        "definitions": [
            {
                "text": "Fogli di pasta alternati con ragù e besciamella.",
                "examples": [
                    "Le lasagne sono nel forno.",
                    "Mi piacciono le lasagne della mamma."
                ]
            },
            {
                "text": "Questo piatto viene spesso mangiato la domenica.",
                "examples": [
                    "Le lasagne sono molto nutrienti."
                ]
            }
        ]
    },
    {
        "word": "mela",
        "level": "starter",
        "theme": "food_drink_A0",
        "numberPlural": "4 mela",
        "answer": "quattro mele",
        "emoji": "🍎",
        "form": "noun",
        "plural": "mele",
        "definitions": [
            {
                "text": "Un frutto tondo, rosso o verde.",
                "examples": [
                    "Mangio una mela ogni giorno.",
                    "La mela è buona."
                ]
            }
        ]
    },
    {
        "word": "pane",
        "level": "starter",
        "theme": "food_drink_A0",
        "emoji": "🍞",
        "form": "noun",
        "plural": "pane",
        "definitions": [
            {
                "text": "Un cibo fatto di farina e acqua, poi cotto al forno.",
                "examples": [
                    "Mi piace il pane fresco.",
                    "Puoi comprare del pane?"
                ]
            }
        ]
    },
    {
        "word": "uovo",
        "level": "starter",
        "theme": "food_drink_A0",
        "emoji": "🥚",
        "form": "noun",
        "plural": "uova"
    },
    {
        "word": "latte",
        "level": "starter",
        "theme": "food_drink_A0",
        "emoji": "🥛",
        "form": "noun",
        "plural": "latte"
    },
    {
        "word": "caffè",
        "level": "starter",
        "theme": "food_drink_A0",
        "article": "il",
        "baseWord": "caffè",
        "emoji": "☕",
        "form": "noun",
        "plural": "caffè"
    },
    {
        "word": "tè",
        "level": "starter",
        "theme": "food_drink_A0",
        "article": "il",
        "baseWord": "tè",
        "emoji": "🍵",
        "form": "noun",
        "plural": "tè"
    },
    {
        "word": "succo",
        "level": "starter",
        "theme": "food_drink_A0",
        "article": "il",
        "baseWord": "succo",
        "emoji": "🧃",
        "form": "noun",
        "plural": "succo"
    },
    {
        "word": "acqua",
        "level": "starter",
        "theme": "food_drink_A0",
        "article": "l'",
        "baseWord": "acqua",
        "emoji": "🚰",
        "form": "noun",
        "plural": "acqua",
        "definitions": [
            {
                "text": "Un liquido trasparente che beviamo per vivere.",
                "examples": [
                    "Bevo un bicchiere d'acqua.",
                    "L'acqua è fredda."
                ]
            }
        ]
    },
    {
        "word": "parco",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🌳",
        "form": "noun",
        "plural": "parci",
        "definitions": [
            {
                "text": "Un'area verde pubblica per camminare o giocare.",
                "examples": [
                    "Domenica andiamo al parco.",
                    "Ci sono molti fiori nel parco."
                ]
            }
        ]
    },
    {
        "word": "scuola",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🏫",
        "form": "noun",
        "plural": "scuole",
        "definitions": [
            {
                "text": "Un luogo dove i bambini vanno per imparare.",
                "examples": [
                    "Vado a scuola in autobus.",
                    "La mia scuola è vicino a casa mia."
                ]
            }
        ]
    },
    {
        "word": "maglietta",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "👕",
        "form": "noun",
        "plural": "magliette"
    },
    {
        "word": "pantaloni",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "👖",
        "form": "noun",
        "plural": "pantaloni"
    },
    {
        "word": "scarpe",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "👟",
        "form": "noun",
        "plural": "scarpi"
    },
    {
        "word": "cappello",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "👒",
        "form": "noun",
        "plural": "cappelli"
    },
    {
        "word": "sedia",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🪑",
        "form": "noun",
        "plural": "sedie"
    },
    {
        "word": "tavolo",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🪑",
        "form": "noun",
        "plural": "tavoli"
    },
    {
        "word": "letto",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🛏️",
        "form": "noun",
        "plural": "letti",
        "definitions": [
            {
                "text": "Un mobile su cui si dorme.",
                "examples": [
                    "Il mio letto è molto comodo.",
                    "È ora di andare a letto."
                ]
            }
        ]
    },
    {
        "word": "alto",
        "level": "starter",
        "theme": "adjectives_A0",
        "form": "noun",
        "plural": "alti",
        "definitions": [
            {
                "text": "Una persona o una cosa che è grande dal basso verso l'alto.",
                "examples": [
                    "Lui è molto alto.",
                    "Quell'edificio è alto."
                ]
            }
        ]
    },
    {
        "word": "basso",
        "level": "starter",
        "theme": "adjectives_A0",
        "form": "noun",
        "plural": "bassi",
        "definitions": [
            {
                "text": "Una persona o una cosa che non è alta.",
                "examples": [
                    "Lei è bassa.",
                    "La matita è bassa."
                ]
            }
        ]
    },
    {
        "word": "giovane",
        "level": "starter",
        "theme": "adjectives_A0",
        "form": "noun",
        "plural": "giovani"
    },
    {
        "word": "vecchio",
        "level": "starter",
        "theme": "adjectives_A0",
        "form": "noun",
        "plural": "vecchii"
    },
    {
        "word": "svegliarsi",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "⏰",
        "form": "noun",
        "plural": "svegliarsi"
    },
    {
        "word": "dormire",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "😴",
        "subtext": "dormire 8 ore, andare a dormire",
        "form": "noun",
        "plural": "dormiri"
    },
    {
        "word": "chiave",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🔑",
        "form": "noun",
        "plural": "chiavi",
        "definitions": [
            {
                "text": "Un oggetto metallico per aprire una porta o accendere l'auto.",
                "examples": [
                    "Non trovo le mie chiavi.",
                    "Ecco la chiave della camera."
                ]
            },
            {
                "text": "Qualcosa di molto importante (come la chiave del successo).",
                "examples": [
                    "La pratica è la chiave per imparare.",
                    "Qual è il punto chiave?"
                ]
            }
        ]
    },
    {
        "word": "telefono",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📱",
        "form": "noun",
        "plural": "telefoni"
    },
    {
        "word": "libro",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📖",
        "form": "noun",
        "plural": "libri",
        "definitions": [
            {
                "text": "Un insieme di fogli stampati che si leggono.",
                "examples": [
                    "Il libro è sul tavolo.",
                    "Amo leggere libri gialli."
                ]
            }
        ]
    },
    {
        "word": "gatto",
        "level": "starter",
        "theme": "weather_A0",
        "article": "il",
        "baseWord": "gatto",
        "emoji": "🐈",
        "numberPlural": "2 gatto",
        "answer": "due gatti",
        "form": "adjective",
        "plural": "gatti",
        "definitions": [
            {
                "text": "Un piccolo animale con il pelo che molte persone tengono in casa.",
                "examples": [
                    "Il mio gatto dorme.",
                    "Amo i gatti."
                ]
            }
        ]
    },
    {
        "word": "cane",
        "level": "starter",
        "theme": "weather_A0",
        "article": "il",
        "baseWord": "cane",
        "emoji": "🐕",
        "numberPlural": "5 cane",
        "answer": "cinque cani",
        "form": "adjective",
        "plural": "cani",
        "definitions": [
            {
                "text": "Un animale che viene spesso chiamato 'il migliore amico dell'uomo'.",
                "examples": [
                    "Porto il mio cane al parco.",
                    "Il cane abbaia."
                ]
            }
        ]
    },
    {
        "word": "uccello",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "🐦",
        "form": "noun",
        "plural": "uccelli",
        "definitions": [
            {
                "text": "Un animale con piume e ali che di solito può volare.",
                "examples": [
                    "L'uccello canta al mattino.",
                    "Guarda quel bell'uccello!"
                ]
            }
        ]
    },
    {
        "word": "freddo",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "❄️",
        "form": "noun",
        "plural": "freddi"
    },
    {
        "word": "testa",
        "level": "starter",
        "theme": "body_A0",
        "emoji": "👤",
        "form": "noun",
        "plural": "teste",
        "definitions": [
            {
                "text": "La parte superiore del corpo umano.",
                "examples": [
                    "Porta un cappello in testa.",
                    "Muove la testa per dire di sì."
                ]
            },
            {
                "text": "La parte anteriore o superiore di qualcosa.",
                "examples": [
                    "In testa alla classifica.",
                    "Il treno è in testa al binario."
                ]
            }
        ]
    },
    {
        "word": "mano",
        "level": "starter",
        "theme": "body_A0",
        "emoji": "✋",
        "form": "noun",
        "plural": "mani",
        "definitions": [
            {
                "text": "La parte finale del braccio con cinque dita.",
                "examples": [
                    "Lavarsi le mani.",
                    "Tenersi per mano."
                ]
            },
            {
                "text": "Un aiuto.",
                "examples": [
                    "Dammi una mano con queste buste.",
                    "Serve una mano?"
                ]
            }
        ]
    },
    {
        "word": "gamba",
        "level": "starter",
        "theme": "body_A0",
        "emoji": "🦵",
        "form": "noun",
        "plural": "gambe"
    },
    {
        "word": "occhio",
        "level": "starter",
        "theme": "body_A0",
        "emoji": "👁️",
        "form": "noun",
        "plural": "occhi",
        "definitions": [
            {
                "text": "L'organo della vista.",
                "examples": [
                    "Chiudi gli occhi.",
                    "Ha gli occhi azzurri."
                ]
            }
        ]
    },
    {
        "word": "naso",
        "level": "starter",
        "theme": "body_A0",
        "emoji": "👃",
        "form": "noun",
        "plural": "nasi"
    },
    {
        "word": "bocca",
        "level": "starter",
        "theme": "body_A0",
        "emoji": "👄",
        "form": "noun",
        "plural": "bocce"
    },
    {
        "word": "orecchio",
        "level": "starter",
        "theme": "body_A0",
        "emoji": "👂",
        "form": "noun",
        "plural": "orecchii"
    },
    {
        "word": "piede",
        "level": "starter",
        "theme": "body_A0",
        "emoji": "🦶",
        "form": "noun",
        "plural": "piedi"
    },
    {
        "word": "madre",
        "level": "starter",
        "theme": "immediate_family_A0",
        "emoji": "👩",
        "form": "noun",
        "definitions": [
            {
                "text": "Una donna che è un tuo genitore.",
                "examples": [
                    "Mia madre cucina bene.",
                    "Voglio bene a mia madre."
                ]
            },
            {
                "text": "Questa persona è solitamente la moglie di tuo padre (o un altro genitore).",
                "examples": [
                    "Le madri si prendono cura dei loro figli."
                ]
            }
        ]
    },
    {
        "word": "padre",
        "level": "starter",
        "theme": "immediate_family_A0",
        "emoji": "👨",
        "form": "noun",
        "definitions": [
            {
                "text": "Un uomo che è un tuo genitore.",
                "examples": [
                    "Mio padre lavora molto.",
                    "Mio padre è simpatico."
                ]
            },
            {
                "text": "Questa persona è solitamente il marito di tua madre (o un altro genitore).",
                "examples": [
                    "Mio padre lavora molto."
                ]
            }
        ]
    },
    {
        "word": "ragazzo",
        "theme": "adjectives_A0",
        "level": "starter",
        "article": "il",
        "baseWord": "ragazzo",
        "numberPlural": "2 ragazzo",
        "answer": "due ragazzi",
        "emoji": "👦",
        "form": "adjective",
        "plural": "ragazzi"
    },
    {
        "word": "ragazza",
        "theme": "adjectives_A0",
        "level": "starter",
        "article": "la",
        "baseWord": "ragazza",
        "numberPlural": "3 ragazza",
        "answer": "tre ragazze",
        "emoji": "👧",
        "form": "adjective",
        "plural": "ragazze"
    },
    {
        "word": "amico",
        "theme": "adjectives_A0",
        "level": "starter",
        "article": "l'",
        "baseWord": "amico",
        "numberPlural": "2 amico",
        "answer": "due amici",
        "emoji": "🧑‍🤝‍🧑",
        "form": "adjective",
        "plural": "amici"
    },
    {
        "word": "libro",
        "level": "starter",
        "theme": "home_A0",
        "article": "il",
        "baseWord": "libro",
        "numberPlural": "4 libro",
        "answer": "quattro libri",
        "emoji": "📚",
        "form": "adjective",
        "plural": "libri",
        "definitions": [
            {
                "text": "Molte pagine con parole e immagini che si leggono.",
                "examples": [
                    "Leggo un libro ogni sera.",
                    "Questo libro è interessante."
                ]
            }
        ]
    },
    {
        "word": "casa",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "article": "la",
        "baseWord": "casa",
        "numberPlural": "molte casa",
        "answer": "molte case",
        "emoji": "🏠",
        "form": "adjective",
        "plural": "case"
    },
    {
        "word": "uomo",
        "level": "starter",
        "theme": "adjectives_A0",
        "article": "l'",
        "baseWord": "uomo",
        "numberPlural": "2 uomo",
        "answer": "due uomini",
        "emoji": "👨",
        "form": "noun",
        "plural": "uomini",
        "definitions": [
            {
                "text": "Un essere umano maschio adulto.",
                "examples": [
                    "Quell'uomo è mio padre.",
                    "Un uomo alto attraversa la strada."
                ]
            }
        ]
    },
    {
        "word": "donna",
        "level": "starter",
        "theme": "adjectives_A0",
        "article": "la",
        "baseWord": "donna",
        "numberPlural": "3 donna",
        "answer": "tre donne",
        "emoji": "👩",
        "form": "noun",
        "plural": "donne",
        "definitions": [
            {
                "text": "Un essere umano femmina adulta.",
                "examples": [
                    "È una donna molto intelligente.",
                    "Tre donne lavorano qui."
                ]
            }
        ]
    },
    {
        "word": "essere",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "👤",
        "subtext": "avere freddo, avere 20 anni",
        "form": "noun",
        "plural": "esseri"
    },
    {
        "word": "avere",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "👜",
        "subtext": "fare colazione, avere un'auto",
        "form": "noun",
        "plural": "averi"
    },
    {
        "word": "andare",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🚶",
        "subtext": "andare a scuola, andare a casa",
        "form": "noun",
        "plural": "andari"
    },
    {
        "word": "fare",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🛠️",
        "subtext": "fare i compiti, fare sport",
        "form": "noun",
        "plural": "fari"
    },
    {
        "word": "lavorare",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "💼",
        "subtext": "lavorare in un ufficio, lavorare sodo",
        "form": "noun",
        "plural": "lavorari"
    },
    {
        "word": "sapere",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🧠",
        "subtext": "sapere la risposta, conoscere una persona",
        "form": "noun",
        "plural": "saperi"
    },
    {
        "word": "pensare",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "💭",
        "subtext": "pensare a, pensare che",
        "form": "noun",
        "plural": "pensari"
    },
    {
        "word": "volere",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🙏",
        "subtext": "volere acqua, volere andare",
        "form": "noun",
        "plural": "voleri"
    },
    {
        "word": "piacere",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "👍",
        "subtext": "mi piace il cioccolato, mi piace ballare",
        "form": "noun",
        "plural": "piaceri"
    },
    {
        "word": "amare",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "❤️",
        "subtext": "amare la mia famiglia, amare viaggiare",
        "form": "noun",
        "plural": "amari"
    },
    {
        "word": "scrivere",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "✍️",
        "subtext": "scrivere una lettera, scrivere un messaggio",
        "opposite": "leggere",
        "oppositeEmoji": "📖",
        "form": "noun",
        "plural": "scriveri"
    },
    {
        "word": "venire",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🏃‍♂️",
        "subtext": "venire qui, venire a casa",
        "opposite": "andare",
        "oppositeEmoji": "🚶",
        "form": "noun",
        "plural": "veniri"
    },
    {
        "word": "dare",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🎁",
        "subtext": "dare un regalo, dare aiuto",
        "opposite": "prendere",
        "oppositeEmoji": "👜",
        "form": "adjective"
    },
    {
        "word": "prendere",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "👜",
        "subtext": "prendere l'autobus, fare una foto",
        "opposite": "dare",
        "oppositeEmoji": "🎁",
        "form": "adjective"
    },
    {
        "word": "trovare",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🔍",
        "form": "adjective"
    },
    {
        "word": "dire",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🗣️",
        "form": "adjective"
    },
    {
        "word": "chiedere",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "❓",
        "form": "noun",
        "plural": "chiederi"
    },
    {
        "word": "sentire",
        "level": "starter",
        "theme": "body_A0",
        "emoji": "🌡️",
        "form": "noun",
        "plural": "sentiri"
    },
    {
        "word": "provare",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🎯",
        "form": "noun",
        "plural": "provari"
    },
    {
        "word": "partire",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🚪",
        "form": "noun",
        "plural": "partiri"
    },
    {
        "word": "chiamare",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📞",
        "form": "noun",
        "plural": "chiamari"
    },
    {
        "word": "guardare",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "📺",
        "form": "noun",
        "plural": "guardari"
    },
    {
        "word": "usare",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🛠️",
        "form": "noun",
        "plural": "usari"
    },
    {
        "word": "ottenere",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📥",
        "form": "noun",
        "plural": "otteneri"
    },
    {
        "word": "iniziare",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "▶️",
        "opposite": "finire",
        "oppositeEmoji": "🏁",
        "form": "noun",
        "plural": "iniziari"
    },
    {
        "word": "aiutare",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🤝",
        "form": "noun",
        "plural": "aiutari"
    },
    {
        "word": "giocare",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🎮",
        "form": "noun",
        "plural": "giocari"
    },
    {
        "word": "correre",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🏃",
        "form": "noun",
        "plural": "correri"
    },
    {
        "word": "vivere",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🏠",
        "opposite": "morire",
        "oppositeEmoji": "⚰️",
        "form": "noun",
        "plural": "viveri"
    },
    {
        "word": "portare",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🎒",
        "form": "noun",
        "plural": "portari"
    },
    {
        "word": "sedersi",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🪑",
        "opposite": "stare in piedi",
        "oppositeEmoji": "🧍",
        "form": "noun",
        "plural": "sedersi"
    },
    {
        "word": "stare in piedi",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🧍",
        "opposite": "sedersi",
        "oppositeEmoji": "🪑",
        "form": "noun",
        "plural": "stare in piedi"
    },
    {
        "word": "perdere",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📉",
        "opposite": "vincere",
        "oppositeEmoji": "🏆",
        "form": "noun",
        "plural": "perderi"
    },
    {
        "word": "pagare",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "💰",
        "form": "noun",
        "plural": "pagari"
    },
    {
        "word": "incontrare",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🤝",
        "form": "noun",
        "plural": "incontrari"
    },
    {
        "word": "imparare",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "📚",
        "form": "noun",
        "plural": "imparari"
    },
    {
        "word": "cambiare",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🔄",
        "form": "adjective"
    },
    {
        "word": "capire",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "💡",
        "form": "noun",
        "plural": "capiri"
    },
    {
        "word": "fermarsi",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🛑",
        "form": "noun",
        "plural": "fermarsi"
    },
    {
        "word": "aggiungere",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "➕",
        "form": "noun",
        "plural": "aggiungeri"
    },
    {
        "word": "spendere",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "💸",
        "form": "noun",
        "plural": "spenderi"
    },
    {
        "word": "aprire",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📖",
        "opposite": "chiudere",
        "oppositeEmoji": "🔒",
        "form": "noun",
        "plural": "apriri"
    },
    {
        "word": "vincere",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🏆",
        "opposite": "perdere",
        "oppositeEmoji": "📉",
        "form": "noun",
        "plural": "vinceri"
    }
];
    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
