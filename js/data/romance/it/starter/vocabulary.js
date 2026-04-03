(function() {
    const data = [
    {
        "word": "medico",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "il",
        "numberPlural": "2 medico",
        "answer": "due medici",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "transcription": "ˈmɛdiko",
        "image": "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=150&h=150&fit=crop",
        "plural": "medici",
        "definitions": [
            {
                "text": "Una persona che aiuta le persone malate.",
                "examples": [
                    "Il medico è all'ospedale.",
                    "Devo vedere un medico."
                ]
            }
        ]
    },
    {
        "word": "piede",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "il",
        "numberPlural": "2 piede",
        "answer": "due piedi",
        "emoji": "🦶",
        "form": "noun",
        "transcription": "ˈpjɛde",
        "image": "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?w=150&h=150&fit=crop",
        "plural": "piedi"
    },
    {
        "word": "insegnante",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "l'",
        "emoji": "🧑‍🏫",
        "form": "noun",
        "transcription": "inseɲˈɲante",
        "image": "https://images.unsplash.com/photo-1544717305-27a734ef41c4?w=150&h=150&fit=crop",
        "plural": "insegnanti",
        "definitions": [
            {
                "text": "Una persona che aiuta a imparare cose nuove.",
                "examples": [
                    "L'insegnante è in classe."
                ]
            }
        ]
    },
    {
        "word": "pasta",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "emoji": "🍝",
        "form": "noun",
        "transcription": "ˈpasta",
        "image": "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=150&h=150&fit=crop",
        "plural": "pasta",
        "definitions": [
            {
                "text": "Un cibo tipico italiano fatto di farina.",
                "examples": [
                    "Amo la pasta al pomodoro."
                ]
            }
        ]
    },
    {
        "word": "lasagna",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "form": "noun",
        "transcription": "laˈzaɲɲa",
        "image": "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=150&h=150&fit=crop",
        "plural": "lasagne"
    },
    {
        "word": "mela",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "emoji": "🍎",
        "numberPlural": "4 mela",
        "answer": "quattro mele",
        "form": "noun",
        "transcription": "ˈmela",
        "image": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=150&h=150&fit=crop",
        "plural": "mele"
    },
    {
        "word": "pane",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍞",
        "form": "noun",
        "transcription": "ˈpane",
        "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=150&h=150&fit=crop",
        "plural": null,
        "subtext": "pane fresco, baguette"
    },
    {
        "word": "uovo",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🥚",
        "form": "noun",
        "transcription": "ˈwɔːvo",
        "image": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=150&h=150&fit=crop",
        "plural": "uova",
        "subtext": "uovo sodo, frittata"
    },
    {
        "word": "latte",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🥛",
        "form": "noun",
        "transcription": "ˈlatte",
        "image": "https://images.unsplash.com/photo-1550583724-1276f2c8023e?w=150&h=150&fit=crop",
        "plural": null,
        "subtext": "bicchiere di latte, latte fresco"
    },
    {
        "word": "riso",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍚",
        "form": "noun",
        "transcription": "ˈrizo",
        "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=150&h=150&fit=crop",
        "plural": null,
        "subtext": "riso bianco, risotto"
    },
    {
        "word": "carne",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥩",
        "form": "noun",
        "plural": null,
        "subtext": "carne fresca, manzo, pollo"
    },
    {
        "word": "cibo",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "emoji": "🍲",
        "form": "noun",
        "plural": "cibi"
    },
    {
        "word": "caffè",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☕",
        "form": "noun",
        "plural": null,
        "subtext": "caffè nero, tazzina di caffè"
    },
    {
        "word": "tè",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍵",
        "form": "noun",
        "plural": null,
        "subtext": "tè verde, tazza di tè"
    },
    {
        "word": "succo",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧃",
        "form": "noun",
        "plural": null,
        "subtext": "succo d'arancia, succo di mela"
    },
    {
        "word": "acqua",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🚰",
        "form": "noun",
        "plural": null,
        "subtext": "acqua fredda, bicchiere d'acqua"
    },
    {
        "word": "colazione",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "la",
        "emoji": "🍳",
        "form": "noun",
        "plural": "colazioni"
    },
    {
        "word": "cena",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "la",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "cene"
    },
    {
        "word": "pranzo",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "il",
        "emoji": "🍱",
        "form": "noun",
        "plural": "pranzi"
    },
    {
        "word": "parco",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "il",
        "emoji": "🌳",
        "form": "noun",
        "plural": "parchi"
    },
    {
        "word": "scuola",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "la",
        "emoji": "🏫",
        "form": "noun",
        "plural": "scuole"
    },
    {
        "word": "negozio",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "il",
        "emoji": "🛒",
        "form": "noun",
        "plural": "negozi"
    },
    {
        "word": "maglietta",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "emoji": "👕",
        "form": "noun",
        "plural": "magliette"
    },
    {
        "word": "pantaloni",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "i",
        "emoji": "👖",
        "form": "noun",
        "plural": "pantaloni"
    },
    {
        "word": "scarpe",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "le",
        "emoji": "👟",
        "form": "noun",
        "plural": "scarpe"
    },
    {
        "word": "cappello",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "emoji": "👒",
        "form": "noun",
        "plural": "cappelli"
    },
    {
        "word": "sedia",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🪑",
        "form": "noun",
        "plural": "sedie",
        "subtext": "sedia di legno, sedersi su una sedia"
    },
    {
        "word": "tavolo",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🪑",
        "form": "noun",
        "plural": "tavoli",
        "subtext": "tavolo da cucina, sul tavolo"
    },
    {
        "word": "letto",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛏️",
        "form": "noun",
        "plural": "letti",
        "subtext": "letto comodo, andare a letto"
    },
    {
        "word": "chiave",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "emoji": "🔑",
        "form": "noun",
        "plural": "chiavi"
    },
    {
        "word": "telefono",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "il",
        "emoji": "📱",
        "form": "noun",
        "plural": "telefoni"
    },
    {
        "word": "libro",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "emoji": "📖",
        "form": "noun",
        "plural": "libri"
    },
    {
        "word": "borsa",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "emoji": "👜",
        "form": "noun",
        "plural": "borse"
    },
    {
        "word": "penna",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "emoji": "🖊️",
        "form": "noun",
        "plural": "penne"
    },
    {
        "word": "gatto",
        "level": "starter",
        "theme": "animals_A1",
        "article": "il",
        "emoji": "🐈",
        "numberPlural": "2 gatto",
        "answer": "due gatti",
        "form": "noun",
        "plural": "gatti"
    },
    {
        "word": "cane",
        "level": "starter",
        "theme": "animals_A1",
        "article": "il",
        "emoji": "🐕",
        "numberPlural": "5 cane",
        "answer": "cinque cani",
        "form": "noun",
        "plural": "cani"
    },
    {
        "word": "uccello",
        "level": "starter",
        "theme": "animals_A1",
        "article": "l'",
        "emoji": "🐦",
        "form": "noun",
        "plural": "uccelli"
    },
    {
        "word": "frutta",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍎",
        "form": "noun",
        "plural": null,
        "subtext": "frutta fresca, succo di frutta",
        "definitions": [
            {
                "text": "La parte dolce di una pianta che contiene semi, usata come cibo.",
                "examples": [
                    "La frutta è sana."
                ]
            }
        ]
    },
    {
        "word": "verdura",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥦",
        "form": "noun",
        "plural": "verdure",
        "subtext": "verdura fresca, verdure verdi",
        "definitions": [
            {
                "text": "Una pianta che viene mangiata come cibo, come una carota o un pomodoro.",
                "examples": [
                    "Lui mangia verdura ogni giorno."
                ]
            }
        ]
    },
    {
        "word": "pesce",
        "level": "starter",
        "theme": "animals_A1",
        "article": "il",
        "emoji": "🐟",
        "form": "noun",
        "plural": "pesci"
    },
    {
        "word": "testa",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "la",
        "emoji": "👤",
        "form": "noun",
        "plural": "teste"
    },
    {
        "word": "mano",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "la",
        "emoji": "✋",
        "form": "noun",
        "plural": "mani"
    },
    {
        "word": "gamba",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "la",
        "emoji": "🦵",
        "form": "noun",
        "plural": "gambe"
    },
    {
        "word": "occhio",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "l'",
        "emoji": "👁️",
        "form": "noun",
        "plural": "occhi"
    },
    {
        "word": "naso",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "il",
        "emoji": "👃",
        "form": "noun",
        "plural": "nasi"
    },
    {
        "word": "bocca",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "la",
        "emoji": "👄",
        "form": "noun",
        "plural": "bocche"
    },
    {
        "word": "orecchio",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "l'",
        "emoji": "👂",
        "form": "noun",
        "plural": "orecchi"
    },
    {
        "word": "schiena",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚶",
        "form": "noun",
        "plural": "schiene",
        "subtext": "mal di schiena, sdraiarsi sulla schiena",
        "definitions": [
            {
                "text": "La parte posteriore del corpo, dal collo al sedere.",
                "examples": [
                    "Ho dolore alla schiena."
                ]
            }
        ]
    },
    {
        "word": "braccio",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💪",
        "form": "noun",
        "plural": "braccia",
        "subtext": "braccio rotto, braccio sinistro",
        "definitions": [
            {
                "text": "La parte del corpo dalla spalla alla mano.",
                "examples": [
                    "Si è rotta il braccio."
                ]
            }
        ]
    },
    {
        "word": "madre",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "plural": "madri",
        "subtext": "",
        "synonyms": ["mamma"],
        "definitions": [
            {
                "text": "La donna che è vostra parente.",
                "examples": [
                    "Mia madre è gentile."
                ]
            }
        ]
    },
    {
        "word": "padre",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "plural": "padri",
        "subtext": "",
        "synonyms": ["papà"],
        "definitions": [
            {
                "text": "L'uomo che è vostro parente.",
                "examples": [
                    "Mio padre è al lavoro."
                ]
            }
        ]
    },
    {
        "word": "famiglia",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👪",
        "form": "noun",
        "plural": "famiglie",
        "definitions": [
            {
                "text": "Un gruppo di persone che sono legate.",
                "examples": [
                    "Mia famiglia è grande."
                ]
            }
        ]
    },
    {
        "word": "amico",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "👫",
        "form": "noun",
        "plural": "amici",
        "definitions": [
            {
                "text": "Una persona che amate e conoscete bene.",
                "examples": [
                    "Lei è la mia amica."
                ]
            }
        ]
    },
    {
        "word": "partner",
        "level": "starter",
        "theme": "marital_status_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💑",
        "form": "noun",
        "plural": "partner",
        "subtext": "marito, moglie, fidanzato, fidanzata",
        "definitions": [
            {
                "text": "La persona con cui vivi o hai una relazione.",
                "examples": [
                    "Il mio partner lavora qui."
                ]
            }
        ]
    },
    {
        "word": "uomo",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "article": "l'",
        "numberPlural": "2 uomo",
        "answer": "due uomini",
        "emoji": "👨",
        "form": "noun",
        "plural": "uomini"
    },
    {
        "word": "donna",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "article": "la",
        "numberPlural": "2 donna",
        "answer": "due donne",
        "emoji": "👩",
        "form": "noun",
        "plural": "donne"
    },
    {
        "word": "casa",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏡",
        "form": "noun",
        "plural": "case",
        "subtext": "a casa, tornare a casa",
        "definitions": [
            {
                "text": "Un edificio dove vive una famiglia.",
                "examples": [
                    "Hanno una grande casa."
                ]
            }
        ]
    },
    {
        "word": "appartamento",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏢",
        "form": "noun",
        "plural": "appartamenti",
        "subtext": "flat, vivere in un appartamento",
        "definitions": [
            {
                "text": "Un insieme di stanze su un piano di un edificio.",
                "examples": [
                    "Lei vive in un appartamento."
                ]
            }
        ]
    },
    {
        "word": "ufficio",
        "level": "starter",
        "theme": "rooms_indoor_spaces_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏢",
        "form": "noun",
        "plural": "uffici",
        "subtext": "luogo di lavoro, grande ufficio",
        "definitions": [
            {
                "text": "Una stanza o un edificio dove lavorano le persone.",
                "examples": [
                    "Lui è in ufficio."
                ]
            }
        ]
    },
    {
        "word": "macchina",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚗",
        "form": "noun",
        "plural": "macchine",
        "subtext": "guidare una macchina, macchina veloce",
        "definitions": [
            {
                "text": "Un veicolo con quattro ruote e un motore.",
                "examples": [
                    "La sua macchina è rossa."
                ]
            }
        ]
    },
    {
        "word": "autobus",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🚌",
        "form": "noun",
        "plural": "autobus",
        "subtext": "prendere l'autobus, fermata dell'autobus",
        "definitions": [
            {
                "text": "Un grande veicolo che trasporta molte persone.",
                "examples": [
                    "Prendo l'autobus per andare al lavoro."
                ]
            }
        ]
    },
    {
        "word": "treno",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🚆",
        "form": "noun",
        "plural": "treni",
        "subtext": "prendere il treno, in treno, stazione",
        "definitions": [
            {
                "text": "Un veicolo che circola su rotaie.",
                "examples": [
                    "Il treno è veloce."
                ]
            }
        ]
    },
    {
        "word": "denaro",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💰",
        "form": "noun",
        "plural": null,
        "subtext": "spendere denaro, risparmiare denaro"
    },
    {
        "word": "mattina",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌅",
        "form": "noun",
        "plural": "mattine",
        "subtext": "mattina presto, buongiorno",
        "definitions": [
            {
                "text": "La parte della giornata prima delle 12.",
                "examples": [
                    "Inizio a lavorare la mattina."
                ]
            }
        ]
    },
    {
        "word": "sera",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌆",
        "form": "noun",
        "plural": "sere",
        "subtext": "",
        "synonyms": ["stasera", "buonasera"],
        "definitions": [
            {
                "text": "La parte della giornata dopo il pomeriggio.",
                "examples": [
                    "Ceniamo la sera."
                ]
            }
        ]
    },
    {
        "word": "giorno",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "il",
        "emoji": "☀️",
        "form": "noun",
        "plural": "giorni"
    },
    {
        "word": "settimana",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "la",
        "emoji": "📅",
        "form": "noun",
        "plural": "settimane"
    },
    {
        "word": "ogni giorno",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🔁",
        "form": "adverb",
        "definitions": [
            {
                "text": "Tutti i giorni senza eccezioni.",
                "examples": [
                    "Bevo caffè ogni giorno."
                ]
            }
        ]
    },
    {
        "word": "capo",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "il",
        "emoji": "👨‍💼",
        "form": "noun",
        "plural": "capi",
        "definitions": [
            {
                "text": "La persona che è responsabile al lavoro.",
                "examples": [
                    "Il mio capo è molto gentile."
                ]
            }
        ]
    },
    {
        "word": "collega",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "il",
        "emoji": "🧑‍💼",
        "form": "noun",
        "plural": "colleghi",
        "definitions": [
            {
                "text": "Una persona con cui lavori.",
                "examples": [
                    "I miei colleghi sono d'aiuto."
                ]
            }
        ]
    },
    {
        "word": "stipendio",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "lo",
        "emoji": "💰",
        "form": "noun",
        "plural": "stipendi",
        "subtext": "",
        "synonyms": ["salario"],
        "definitions": [
            {
                "text": "Il denaro che una persona guadagna dal proprio lavoro ogni mese.",
                "examples": [
                    "Il suo stipendio è buono."
                ]
            }
        ]
    },
    {
        "word": "riunione",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "la",
        "emoji": "🤝",
        "form": "noun",
        "plural": "riunioni",
        "subtext": "",
        "synonyms": ["meeting"],
        "definitions": [
            {
                "text": "Un momento in cui le persone si riuniscono per parlare di qualcosa.",
                "examples": [
                    "Abbiamo una riunione ogni lunedì."
                ]
            }
        ]
    },
    {
        "word": "tragitto",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "il",
        "emoji": "🚆",
        "form": "noun",
        "plural": "tragitti",
        "definitions": [
            {
                "text": "Il viaggio per andare e tornare dal lavoro ogni giorno.",
                "examples": [
                    "Il mio tragitto dura un'ora."
                ]
            }
        ]
    },
    {
        "word": "stress",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "lo",
        "emoji": "😫",
        "form": "noun",
        "definitions": [
            {
                "text": "Una sensazione di preoccupazione causata da una situazione difficile.",
                "examples": [
                    "Ho molto stress al lavoro."
                ]
            }
        ]
    },
    {
        "word": "affitto",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "article": "l'",
        "emoji": "🏠",
        "form": "noun",
        "plural": "affitti",
        "definitions": [
            {
                "text": "Il denaro pagato per usare una casa o un appartamento che appartiene a qualcun altro.",
                "examples": [
                    "L'affitto è alto in città."
                ]
            }
        ]
    },
    {
        "word": "vicino",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "il",
        "emoji": "🏠",
        "form": "noun",
        "plural": "vicini",
        "definitions": [
            {
                "text": "Una persona che vive accanto a te o vicino a te.",
                "examples": [
                    "I miei vicini sono molto simpatici."
                ]
            }
        ]
    },
    {
        "word": "stanza",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "emoji": "🚪",
        "form": "noun",
        "plural": "stanze",
        "subtext": "",
        "synonyms": ["camera"],
        "definitions": [
            {
                "text": "Una parte separata di un edificio con pareti e una porta.",
                "examples": [
                    "L'appartamento ha tre stanze."
                ]
            }
        ]
    },
    {
        "word": "cucina",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "emoji": "🍳",
        "form": "noun",
        "plural": "cucine",
        "definitions": [
            {
                "text": "La stanza di una casa dove si prepara il cibo.",
                "examples": [
                    "Cucino in cucina."
                ]
            }
        ]
    },
    {
        "word": "sonno",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "article": "il",
        "emoji": "😴",
        "form": "noun",
        "definitions": [
            {
                "text": "Il riposo naturale di cui il corpo ha bisogno ogni notte.",
                "examples": [
                    "Dormo otto ore a notte."
                ]
            }
        ]
    },
    {
        "word": "esercizio",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "article": "l'",
        "emoji": "🏋️",
        "form": "noun",
        "plural": "esercizi",
        "definitions": [
            {
                "text": "Attività fisica che ti mantiene in forma e in salute.",
                "examples": [
                    "Faccio esercizio tre volte a settimana."
                ]
            }
        ]
    },
    {
        "word": "prezzo",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "il",
        "emoji": "🏷️",
        "form": "noun",
        "plural": "prezzi",
        "definitions": [
            {
                "text": "La quantità di denaro che paghi per qualcosa.",
                "examples": [
                    "Il prezzo del cibo è alto."
                ]
            }
        ]
    },
    {
        "word": "costo",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "il",
        "emoji": "💰",
        "form": "noun",
        "plural": "costi",
        "definitions": [
            {
                "text": "La quantità di denaro necessaria per comprare qualcosa.",
                "examples": [
                    "L'appartamento costa molto."
                ]
            }
        ]
    },
    {
        "word": "relazione",
        "level": "starter",
        "theme": "family_life_A1",
        "article": "la",
        "emoji": "❤️",
        "form": "noun",
        "plural": "relazioni",
        "subtext": "",
        "synonyms": ["rapporto", "legame"],
        "definitions": [
            {
                "text": "Una connessione tra due persone.",
                "examples": [
                    "Hanno una buona relazione."
                ]
            }
        ]
    },
    {
        "word": "insieme",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👫",
        "form": "adverb",
        "opposite": "solo",
        "oppositeEmoji": "🧍",
        "definitions": [
            {
                "text": "Con un'altra persona o gruppo.",
                "examples": [
                    "Ceniamo insieme."
                ]
            }
        ]
    },
    {
        "word": "vacanza",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "emoji": "🏖️",
        "form": "noun",
        "plural": "vacanze",
        "definitions": [
            {
                "text": "Un periodo di tempo lontano dal lavoro quando viaggi o ti rilassi.",
                "examples": [
                    "Andiamo in vacanza a luglio."
                ]
            }
        ]
    },
    {
        "word": "viaggio",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "il",
        "emoji": "✈️",
        "form": "noun",
        "plural": "viaggi",
        "definitions": [
            {
                "text": "L'atto di andare da un luogo all'altro.",
                "examples": [
                    "Amo i viaggi."
                ]
            }
        ]
    },
    {
        "word": "hotel",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "article": "l'",
        "emoji": "🏨",
        "form": "noun",
        "plural": "hotel",
        "definitions": [
            {
                "text": "Un edificio dove le persone pagano per pernottare.",
                "examples": [
                    "L'hotel è vicino alla stazione."
                ]
            }
        ]
    },
    {
        "word": "fine settimana",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "il",
        "emoji": "🗓️",
        "form": "noun",
        "plural": "fine settimana",
        "subtext": "fine settimana",
        "definitions": [
            {
                "text": "Sabato e domenica.",
                "examples": [
                    "Mi rilasso nel fine settimana."
                ]
            }
        ]
    },
    {
        "word": "tempo libero",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎮",
        "form": "noun",
        "plural": null,
        "subtext": "",
        "synonyms": ["svago", "relax"],
        "definitions": [
            {
                "text": "Momento in cui non lavori e puoi fare ciò che vuoi.",
                "examples": [
                    "Leggo libri nel mio tempo libero."
                ]
            }
        ]
    },
    {
        "word": "birra",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍺",
        "form": "noun",
        "plural": null,
        "subtext": "birra fredda, alla spina",
        "definitions": [
            {
                "text": "Una bevanda alcolica popolare fatta dal grano.",
                "examples": [
                    "Lui beve una birra nel fine settimana."
                ]
            }
        ]
    },
    {
        "word": "vino",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍷",
        "form": "noun",
        "plural": null,
        "subtext": "vino rosso, vino bianco, bicchiere di vino",
        "definitions": [
            {
                "text": "Una bevanda alcolica fatta dall'uva.",
                "examples": [
                    "Lei beve un bicchiere di vino la sera."
                ]
            }
        ]
    },
    {
        "word": "porta",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚪",
        "form": "noun",
        "plural": "porte",
        "subtext": "aprire la porta, porta d'ingresso",
        "definitions": [
            {
                "text": "Un pannello piatto che si apre e si chiude per far entrare e uscire le persone.",
                "examples": [
                    "Per favore, chiudi la porta."
                ]
            }
        ]
    },
    {
        "word": "finestra",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🪟",
        "form": "noun",
        "plural": "finestre",
        "subtext": "aprire la finestra, vetrina",
        "definitions": [
            {
                "text": "Un'apertura in una parete riempita di vetro che lascia entrare la luce.",
                "examples": [
                    "Apri la finestra — fa caldo."
                ]
            }
        ]
    },
    {
        "word": "infermiere",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "plural": "infermieri",
        "subtext": "",
        "synonyms": ["infermiera", "assistente"],
        "definitions": [
            {
                "text": "Una persona addestrata per curare malati o feriti.",
                "examples": [
                    "L'infermiere controlla la pressione sanguigna."
                ]
            }
        ]
    },
    {
        "word": "conducente",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🚗",
        "form": "noun",
        "plural": "conducenti",
        "subtext": "",
        "synonyms": ["autista", "guidatore"],
        "definitions": [
            {
                "text": "Una persona che guida un veicolo per lavoro.",
                "examples": [
                    "L'autista dell'autobus era amichevole."
                ]
            }
        ]
    },
    {
        "word": "cuoco",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👨‍🍳",
        "form": "noun",
        "plural": "cuochi",
        "subtext": "",
        "synonyms": ["chef", "cuciniere"],
        "definitions": [
            {
                "text": "Un cuoco professionista, specialmente il capo cuoco in un ristorante.",
                "examples": [
                    "Il cuoco prepara un cibo eccellente."
                ]
            }
        ]
    },
    {
        "word": "direttore",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧑‍💼",
        "form": "noun",
        "plural": "direttori",
        "subtext": "",
        "synonyms": ["manager", "dirigente"],
        "definitions": [
            {
                "text": "Una persona che è a capo di un team o di un'azienda.",
                "examples": [
                    "Il mio direttore lavora per molte ore."
                ]
            }
        ]
    },
    {
        "word": "aereo",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "plural": "aerei",
        "subtext": "prendere l'aereo, volo",
        "definitions": [
            {
                "text": "Un veicolo con ali che vola nell'aria.",
                "examples": [
                    "L'aereo atterra alle nove."
                ]
            }
        ]
    },
    {
        "word": "bicicletta",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚲",
        "form": "noun",
        "plural": "biciclette",
        "subtext": "bici, andare in bici",
        "definitions": [
            {
                "text": "Un veicolo a due ruote che guidi spingendo i pedali.",
                "examples": [
                    "Lui va al lavoro in bicicletta."
                ]
            }
        ]
    },
    {
        "word": "ospedale",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏥",
        "form": "noun",
        "plural": "ospedali",
        "subtext": "andare all'ospedale, pronto soccorso",
        "definitions": [
            {
                "text": "Un luogo dove le persone malate o ferite ricevono cure mediche.",
                "examples": [
                    "È andato all'ospedale in ambulanza."
                ]
            }
        ]
    },
    {
        "word": "ristorante",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍴",
        "form": "noun",
        "plural": "ristoranti",
        "subtext": "ristorante italiano, andare al ristorante",
        "definitions": [
            {
                "text": "Un luogo dove paghi per mangiare i pasti.",
                "examples": [
                    "Andiamo al ristorante il venerdì."
                ]
            }
        ]
    },
    {
        "word": "banca",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏦",
        "form": "noun",
        "plural": "banche",
        "subtext": "conto in banca, andare in banca",
        "definitions": [
            {
                "text": "Un luogo dove le persone tengono i soldi e fanno transazioni finanziarie.",
                "examples": [
                    "La banca è vicino al mio ufficio."
                ]
            }
        ]
    },
    {
        "word": "stazione",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚉",
        "form": "noun",
        "plural": "stazioni",
        "subtext": "stazione ferroviaria, stazione degli autobus",
        "definitions": [
            {
                "text": "Un edificio dove i treni o gli autobus si fermano per i passeggeri.",
                "examples": [
                    "La stazione è a dieci minuti da qui."
                ]
            }
        ]
    },
    {
        "word": "supermercato",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛒",
        "form": "noun",
        "plural": "supermercati",
        "subtext": "andare al supermercato",
        "definitions": [
            {
                "text": "Un grande negozio che vende cibo e altri beni per la casa.",
                "examples": [
                    "Vado al supermercato il sabato."
                ]
            }
        ]
    },
    {
        "word": "sole",
        "level": "starter",
        "theme": "weather_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "plural": null,
        "subtext": "sole caldo, sole del mattino",
        "definitions": [
            {
                "text": "La stella che dà luce e calore durante il giorno.",
                "examples": [
                    "Il sole è molto forte oggi."
                ]
            }
        ]
    },
    {
        "word": "pioggia",
        "level": "starter",
        "theme": "weather_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌧️",
        "form": "noun",
        "plural": null,
        "subtext": "forte pioggia, stivali da pioggia",
        "definitions": [
            {
                "text": "Acqua che cade dalle nuvole in gocce.",
                "examples": [
                    "C'è molta pioggia in autunno."
                ]
            }
        ]
    },
    {
        "word": "vento",
        "level": "starter",
        "theme": "weather_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💨",
        "form": "noun",
        "plural": null,
        "subtext": "vento forte, vento freddo",
        "definitions": [
            {
                "text": "Aria che si muove, a volte fortemente.",
                "examples": [
                    "Il vento è molto forte oggi."
                ]
            }
        ]
    },
    {
        "word": "pomeriggio",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "plural": "pomeriggi",
        "subtext": "questo pomeriggio, buon pomeriggio",
        "definitions": [
            {
                "text": "La parte della giornata da mezzogiorno fino a sera.",
                "examples": [
                    "Finisco di lavorare alle cinque del pomeriggio."
                ]
            }
        ]
    },
    {
        "word": "notte",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌙",
        "form": "noun",
        "plural": "notti",
        "subtext": "buonanotte, di notte",
        "definitions": [
            {
                "text": "Il periodo di oscurità tra sera e mattina.",
                "examples": [
                    "Dormo otto ore ogni notte."
                ]
            }
        ]
    },
    {
        "word": "oggi",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "📅",
        "form": "adverb",
        "subtext": "la riunione di oggi, iniziare oggi",
        "definitions": [
            {
                "text": "In questo giorno; il giorno attuale.",
                "examples": [
                    "Ho una riunione oggi alle dieci."
                ]
            }
        ]
    },
    {
        "word": "domani",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "⏭️",
        "form": "adverb",
        "subtext": "domani mattina, a domani",
        "definitions": [
            {
                "text": "Il giorno dopo oggi.",
                "examples": [
                    "Lei ha un appuntamento dal medico domani."
                ]
            }
        ]
    },
    {
        "word": "marito",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "plural": "mariti",
        "opposite": "moglie",
        "oppositeEmoji": "👩",
        "subtext": "",
        "synonyms": ["sposo", "compagno"],
        "definitions": [
            {
                "text": "Un uomo sposato, in relazione a sua moglie.",
                "examples": [
                    "Suo marito è un medico."
                ]
            }
        ]
    },
    {
        "word": "moglie",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "plural": "mogli",
        "opposite": "marito",
        "oppositeEmoji": "👨",
        "subtext": "",
        "synonyms": ["sposa", "compagna"],
        "definitions": [
            {
                "text": "Una donna sposata, in relazione a suo marito.",
                "examples": [
                    "Sua moglie lavora in finanza."
                ]
            }
        ]
    },
    {
        "word": "bambino",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👶",
        "form": "noun",
        "plural": "bambini",
        "subtext": "",
        "synonyms": ["bimbo", "ragazzino"],
        "definitions": [
            {
                "text": "Una giovane persona; un figlio o una figlia.",
                "examples": [
                    "Hanno due bambini."
                ]
            }
        ]
    },
    {
        "word": "genitore",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👪",
        "form": "noun",
        "plural": "genitori",
        "subtext": "",
        "synonyms": ["madre o padre"],
        "definitions": [
            {
                "text": "Una madre o un padre.",
                "examples": [
                    "I miei genitori vivono al nord."
                ]
            }
        ]
    },
    {
        "word": "vino",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍷",
        "form": "noun",
        "plural": "vini",
        "definitions": [
            {
                "text": "Una bevanda alcolica fatta di uva.",
                "examples": [
                    "Lui beve del vino rosso."
                ]
            }
        ]
    },
    {
        "word": "porta",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚪",
        "form": "noun",
        "plural": "porte",
        "definitions": [
            {
                "text": "Pannello per entrare in una stanza.",
                "examples": [
                    "Chiudi la porta, per favore."
                ]
            }
        ]
    },
    {
        "word": "finestra",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🪟",
        "form": "noun",
        "plural": "finestre",
        "definitions": [
            {
                "text": "Apertura nel muro con vetro.",
                "examples": [
                    "Apri la finestra."
                ]
            }
        ]
    },
    {
        "word": "infermiere",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "plural": "infermieri",
        "definitions": [
            {
                "text": "Persona che cura i malati.",
                "examples": [
                    "L'infermiere lavora in ospedale."
                ]
            }
        ]
    },
    {
        "word": "autista",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🚗",
        "form": "noun",
        "plural": "autisti",
        "definitions": [
            {
                "text": "Persona che guida un veicolo.",
                "examples": [
                    "L'autista dell'autobus è gentile."
                ]
            }
        ]
    },
    {
        "word": "chef",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "👨‍🍳",
        "form": "noun",
        "plural": "chef",
        "definitions": [
            {
                "text": "Un cuoco professionista.",
                "examples": [
                    "Lo chef prepara il pasto."
                ]
            }
        ]
    },
    {
        "word": "direttore",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧑‍💼",
        "form": "noun",
        "plural": "direttori",
        "definitions": [
            {
                "text": "Persona che dirige una squadra.",
                "examples": [
                    "Il direttore è in riunione."
                ]
            }
        ]
    },
    {
        "word": "aereo",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "plural": "aerei",
        "definitions": [
            {
                "text": "Veicolo che vola.",
                "examples": [
                    "L'aereo parte a mezzogiorno."
                ]
            }
        ]
    },
    {
        "word": "bicicletta",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚲",
        "form": "noun",
        "plural": "biciclette",
        "definitions": [
            {
                "text": "Veicolo a due ruote.",
                "examples": [
                    "Vado al lavoro in bicicletta."
                ]
            }
        ]
    },
    {
        "word": "ospedale",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏥",
        "form": "noun",
        "plural": "ospedali",
        "definitions": [
            {
                "text": "Luogo di cure mediche.",
                "examples": [
                    "Lui è in ospedale."
                ]
            }
        ]
    },
    {
        "word": "ristorante",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍴",
        "form": "noun",
        "plural": "ristoranti",
        "definitions": [
            {
                "text": "Luogo per mangiare fuori.",
                "examples": [
                    "Andiamo al ristorante."
                ]
            }
        ]
    },
    {
        "word": "banca",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏦",
        "form": "noun",
        "plural": "banche",
        "definitions": [
            {
                "text": "Luogo dove si tiene il denaro.",
                "examples": [
                    "La banca è chiusa."
                ]
            }
        ]
    },
    {
        "word": "stazione",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚉",
        "form": "noun",
        "plural": "stazioni",
        "definitions": [
            {
                "text": "Luogo dove si fermano i treni.",
                "examples": [
                    "Dov'è la stazione?"
                ]
            }
        ]
    },
    {
        "word": "supermercato",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛒",
        "form": "noun",
        "plural": "supermercati",
        "definitions": [
            {
                "text": "Grande negozio di alimentari.",
                "examples": [
                    "Faccio la spesa al supermercato."
                ]
            }
        ]
    },
    {
        "word": "sole",
        "level": "starter",
        "theme": "weather_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "plural": "soli",
        "definitions": [
            {
                "text": "La stella che ci illumina.",
                "examples": [
                    "Il sole splende."
                ]
            }
        ]
    },
    {
        "word": "pioggia",
        "level": "starter",
        "theme": "weather_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌧️",
        "form": "noun",
        "plural": "piogge",
        "definitions": [
            {
                "text": "Acqua che cade dal cielo.",
                "examples": [
                    "Amo camminare sotto la pioggia."
                ]
            }
        ]
    },
    {
        "word": "vento",
        "level": "starter",
        "theme": "weather_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💨",
        "form": "noun",
        "plural": "venti",
        "definitions": [
            {
                "text": "Aria che si muove.",
                "examples": [
                    "Il vento è forte."
                ]
            }
        ]
    },
    {
        "word": "pomeriggio",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "plural": "pomeriggi",
        "definitions": [
            {
                "text": "Tempo tra mezzogiorno e sera.",
                "examples": [
                    "Buon pomeriggio!"
                ]
            }
        ]
    },
    {
        "word": "notte",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌙",
        "form": "noun",
        "plural": "notti",
        "definitions": [
            {
                "text": "Tempo quando è buio.",
                "examples": [
                    "Buonanotte."
                ]
            }
        ]
    },
    {
        "word": "oggi",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "",
        "gender": "",
        "emoji": "📅",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Il giorno presente.",
                "examples": [
                    "Lavoro oggi."
                ]
            }
        ]
    },
    {
        "word": "domani",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "",
        "gender": "",
        "emoji": "⏭️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Il giorno dopo oggi.",
                "examples": [
                    "Ci vediamo domani."
                ]
            }
        ]
    },
    {
        "word": "marito",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "plural": "mariti",
        "definitions": [
            {
                "text": "Uomo sposato.",
                "examples": [
                    "Mio marito è gentile."
                ]
            }
        ]
    },
    {
        "word": "moglie",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "plural": "mogli",
        "definitions": [
            {
                "text": "Donna sposata.",
                "examples": [
                    "È sua moglie."
                ]
            }
        ]
    },
    {
        "word": "bambino",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👶",
        "form": "noun",
        "plural": "bambini",
        "definitions": [
            {
                "text": "Giovane persona.",
                "examples": [
                    "Hanno un bambino."
                ]
            }
        ]
    },
    {
        "word": "genitore",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👪",
        "form": "noun",
        "plural": "genitori",
        "definitions": [
            {
                "text": "Madre o padre.",
                "examples": [
                    "I miei genitori abitano qui."
                ]
            }
        ]
    },
    {
        "word": "sorella",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👧",
        "form": "noun",
        "plural": "sorelle",
        "definitions": [
            {
                "text": "Figlia degli stessi genitori.",
                "examples": [
                    "Ho una sorella."
                ]
            }
        ]
    },
    {
        "word": "fratello",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👦",
        "form": "noun",
        "plural": "fratelli",
        "definitions": [
            {
                "text": "Figlio degli stessi genitori.",
                "examples": [
                    "Mio fratello ha dieci anni."
                ]
            }
        ]
    },
    {
        "word": "figlio",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👦",
        "form": "noun",
        "plural": "figli",
        "definitions": [
            {
                "text": "Figlio maschio.",
                "examples": [
                    "È mio figlio."
                ]
            }
        ]
    },
    {
        "word": "figlia",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👧",
        "form": "noun",
        "plural": "figlie",
        "definitions": [
            {
                "text": "Figlia femmina.",
                "examples": [
                    "È mia figlia."
                ]
            }
        ]
    },
    {
        "word": "nonno",
        "level": "starter",
        "theme": "extended_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👴",
        "form": "noun",
        "plural": "nonni",
        "definitions": [
            {
                "text": "Padre di un genitore.",
                "examples": [
                    "Mio nonno è vecchio."
                ]
            }
        ]
    },
    {
        "word": "nonna",
        "level": "starter",
        "theme": "extended_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👵",
        "form": "noun",
        "plural": "nonne",
        "definitions": [
            {
                "text": "Madre di un genitore.",
                "examples": [
                    "Mia nonna cucina bene."
                ]
            }
        ]
    },
    {
        "word": "zio",
        "level": "starter",
        "theme": "extended_family_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "plural": "zii",
        "definitions": [
            {
                "text": "Fratello del padre o della madre.",
                "examples": [
                    "Mio zio vive a Roma."
                ]
            }
        ]
    },
    {
        "word": "zia",
        "level": "starter",
        "theme": "extended_family_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "plural": "zie",
        "definitions": [
            {
                "text": "Sorella del padre o della madre.",
                "examples": [
                    "Mia zia è medico."
                ]
            }
        ]
    },
    {
        "word": "cugino",
        "level": "starter",
        "theme": "extended_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧑",
        "form": "noun",
        "plural": "cugini",
        "definitions": [
            {
                "text": "Figlio di uno zio o di una zia.",
                "examples": [
                    "È mio cugino."
                ]
            }
        ]
    },
    {
        "word": "albero",
        "level": "starter",
        "theme": "plants_natural_world_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🌳",
        "form": "noun",
        "plural": "alberi",
        "definitions": [
            {
                "text": "Grande pianta con un tronco.",
                "examples": [
                    "L'albero è verde."
                ]
            }
        ]
    },
    {
        "word": "fiore",
        "level": "starter",
        "theme": "plants_natural_world_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌸",
        "form": "noun",
        "plural": "fiori",
        "definitions": [
            {
                "text": "Parte colorata di una pianta.",
                "examples": [
                    "Il fiore profuma."
                ]
            }
        ]
    },
    {
        "word": "montagna",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏔️",
        "form": "noun",
        "plural": "montagne",
        "definitions": [
            {
                "text": "Grande massa di terra elevata.",
                "examples": [
                    "La montagna è alta."
                ]
            }
        ]
    },
    {
        "word": "fiume",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏞️",
        "form": "noun",
        "plural": "fiumi",
        "definitions": [
            {
                "text": "Corso d'acqua.",
                "examples": [
                    "L'acqua del fiume è fredda."
                ]
            }
        ]
    },
    {
        "word": "mare",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌊",
        "form": "noun",
        "plural": "mari",
        "definitions": [
            {
                "text": "Vasta distesa di acqua salata.",
                "examples": [
                    "Nuoto nel mare."
                ]
            }
        ]
    },
    {
        "word": "spiaggia",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏖️",
        "form": "noun",
        "plural": "spiagge",
        "definitions": [
            {
                "text": "Riva del mare con sabbia.",
                "examples": [
                    "Andiamo in spiaggia."
                ]
            }
        ]
    },
    {
        "word": "cielo",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌌",
        "form": "noun",
        "plural": "cieli",
        "definitions": [
            {
                "text": "Spazio sopra la Terra.",
                "examples": [
                    "Il cielo è blu."
                ]
            }
        ]
    },
    {
        "word": "luna",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌙",
        "form": "noun",
        "plural": "lune",
        "definitions": [
            {
                "text": "Astro che brilla di notte.",
                "examples": [
                    "La luna è tonda."
                ]
            }
        ]
    },
    {
        "word": "piatto",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "piatti",
        "definitions": [
            {
                "text": "Oggetto piatto per mangiare.",
                "examples": [
                    "Metti il piatto sul tavolo."
                ]
            }
        ]
    },
    {
        "word": "tazza",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "☕",
        "form": "noun",
        "plural": "tazze",
        "definitions": [
            {
                "text": "Piccolo recipiente con manico.",
                "examples": [
                    "Una tazza di caffè."
                ]
            }
        ]
    },
    {
        "word": "bicchiere",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🥛",
        "form": "noun",
        "plural": "bicchieri",
        "definitions": [
            {
                "text": "Recipiente per bere.",
                "examples": [
                    "Un bicchiere d'acqua."
                ]
            }
        ]
    },
    {
        "word": "forchetta",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍴",
        "form": "noun",
        "plural": "forchette",
        "definitions": [
            {
                "text": "Utensile con rebbi.",
                "examples": [
                    "Mangio con la forchetta."
                ]
            }
        ]
    },
    {
        "word": "cucchiaio",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🥄",
        "form": "noun",
        "plural": "cucchiai",
        "definitions": [
            {
                "text": "Utensile per la minestra.",
                "examples": [
                    "Un cucchiaio di zucchero."
                ]
            }
        ]
    },
    {
        "word": "coltello",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🔪",
        "form": "noun",
        "plural": "coltelli",
        "definitions": [
            {
                "text": "Utensile per tagliare.",
                "examples": [
                    "Il coltello taglia bene."
                ]
            }
        ]
    },
    {
        "word": "computer portatile",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💻",
        "form": "noun",
        "plural": "computer portatili",
        "definitions": [
            {
                "text": "Piccolo computer che si trasporta.",
                "examples": [
                    "Uso il mio computer portatile."
                ]
            }
        ]
    },
    {
        "word": "televisione",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📺",
        "form": "noun",
        "plural": "televisioni",
        "definitions": [
            {
                "text": "Apparecchio per guardare i film.",
                "examples": [
                    "Guardo la televisione."
                ]
            }
        ]
    },
    {
        "word": "cinema",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎬",
        "form": "noun",
        "plural": "cinema",
        "definitions": [
            {
                "text": "Luogo per vedere i film.",
                "examples": [
                    "Andiamo al cinema."
                ]
            }
        ]
    },
    {
        "word": "museo",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏛️",
        "form": "noun",
        "plural": "musei",
        "definitions": [
            {
                "text": "Luogo con oggetti d'arte.",
                "examples": [
                    "Il museo è grande."
                ]
            }
        ]
    },
    {
        "word": "aeroporto",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "plural": "aeroporti",
        "definitions": [
            {
                "text": "Luogo per prendere l'aereo.",
                "examples": [
                    "Vado all'aeroporto."
                ]
            }
        ]
    },
    {
        "word": "farmacia",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💊",
        "form": "noun",
        "plural": "farmacie",
        "definitions": [
            {
                "text": "Luogo per comprare medicine.",
                "examples": [
                    "Dov'è la farmacia?"
                ]
            }
        ]
    },
    {
        "word": "pollo",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍗",
        "form": "noun",
        "plural": "polli",
        "definitions": [
            {
                "text": "Carne di gallina.",
                "examples": [
                    "Mi piace il pollo."
                ]
            }
        ]
    },
    {
        "word": "zucchero",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🍚",
        "form": "noun",
        "plural": "zuccheri",
        "definitions": [
            {
                "text": "Polvere dolce per i dolci.",
                "examples": [
                    "Niente zucchero nel mio tè."
                ]
            }
        ]
    },
    {
        "word": "insalata",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🥗",
        "form": "noun",
        "plural": "insalate",
        "definitions": [
            {
                "text": "Piatto di verdure fredde.",
                "examples": [
                    "Un'insalata piccola, per favore."
                ]
            }
        ]
    },
    {
        "word": "cappotto",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧥",
        "form": "noun",
        "plural": "cappotti",
        "definitions": [
            {
                "text": "Vestito caldo per fuori.",
                "examples": [
                    "Metti il cappotto."
                ]
            }
        ]
    },
    {
        "word": "calzini",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "i",
        "gender": "masculine",
        "emoji": "🧦",
        "form": "noun",
        "plural": "calzini",
        "definitions": [
            {
                "text": "Vestiti per i piedi.",
                "examples": [
                    "I miei calzini sono blu."
                ]
            }
        ]
    },
    {
        "word": "collo",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🦒",
        "form": "noun",
        "plural": "colli",
        "definitions": [
            {
                "text": "Parte tra la testa e il corpo.",
                "examples": [
                    "Ho male al collo."
                ]
            }
        ]
    },
    {
        "word": "spalla",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👤",
        "form": "noun",
        "plural": "spalle",
        "definitions": [
            {
                "text": "Parte del corpo tra il collo e il braccio.",
                "examples": [
                    "Mi fa male la spalla."
                ]
            }
        ]
    },
    {
        "word": "in",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "preposition",
        "plural": "",
        "definitions": [
            {
                "text": "All'interno di.",
                "examples": [
                    "Il gatto è nella scatola."
                ]
            }
        ]
    },
    {
        "word": "su",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "preposition",
        "plural": "",
        "definitions": [
            {
                "text": "A contatto con il sopra di.",
                "examples": [
                    "Il libro è sul tavolo."
                ]
            }
        ]
    },
    {
        "word": "a",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "preposition",
        "plural": "",
        "definitions": [
            {
                "text": "Luogo o direzione.",
                "examples": [
                    "Vado a Roma."
                ]
            }
        ]
    },
    {
        "word": "sotto",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "preposition",
        "plural": "",
        "definitions": [
            {
                "text": "Al di sotto di.",
                "examples": [
                    "Il cane è sotto il tavolo."
                ]
            }
        ]
    },
    {
        "word": "e",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "conjunction",
        "plural": "",
        "definitions": [
            {
                "text": "Aggiunge qualcosa.",
                "examples": [
                    "Tu ed io."
                ]
            }
        ]
    },
    {
        "word": "ma",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "conjunction",
        "plural": "",
        "definitions": [
            {
                "text": "Indica una opposizione.",
                "examples": [
                    "È buono ma costoso."
                ]
            }
        ]
    },
    {
        "word": "perché",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "article": "",
        "gender": "",
        "emoji": "",
        "form": "conjunction",
        "plural": "",
        "definitions": [
            {
                "text": "Dà una ragione.",
                "examples": [
                    "Dormo perché sono stanco."
                ]
            }
        ]
    },
    {
        "word": "tempo",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "⌚",
        "form": "noun",
        "plural": "tempi",
        "definitions": [
            {
                "text": "La durata o l'ora.",
                "examples": [
                    "Non ho tempo."
                ]
            }
        ]
    },
    {
        "word": "problema",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "❓",
        "form": "noun",
        "plural": "problemi",
        "definitions": [
            {
                "text": "Una difficoltà.",
                "examples": [
                    "C'è un problema."
                ]
            }
        ]
    },
    {
        "word": "manzo",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🥩",
        "form": "noun",
        "plural": "manzi",
        "definitions": [
            {
                "text": "Carne di mucca.",
                "examples": [
                    "Mangio del manzo."
                ]
            }
        ]
    },
    {
        "word": "maiale",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🥩",
        "form": "noun",
        "plural": "maiali",
        "definitions": [
            {
                "text": "Carne di maiale.",
                "examples": [
                    "Lei non mangia maiale."
                ]
            }
        ]
    },
    {
        "word": "patata",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥔",
        "form": "noun",
        "plural": "patate",
        "definitions": [
            {
                "text": "Un tubero commestibile.",
                "examples": [
                    "Patatine fritte fatte con le patate."
                ]
            }
        ]
    },
    {
        "word": "pomodoro",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍅",
        "form": "noun",
        "plural": "pomodori",
        "definitions": [
            {
                "text": "Un frutto rosso mangiato come verdura.",
                "examples": [
                    "Il pomodoro è maturo."
                ]
            }
        ]
    },
    {
        "word": "cipolla",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧅",
        "form": "noun",
        "plural": "cipolle",
        "definitions": [
            {
                "text": "Verdura forte che fa piangere.",
                "examples": [
                    "Taglio una cipolla."
                ]
            }
        ]
    },
    {
        "word": "carota",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥕",
        "form": "noun",
        "plural": "carote",
        "definitions": [
            {
                "text": "Verdura arancione lunga.",
                "examples": [
                    "Il coniglio mangia una carota."
                ]
            }
        ]
    },
    {
        "word": "zuppa",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥣",
        "form": "noun",
        "plural": "zuppe",
        "definitions": [
            {
                "text": "Piatto liquido caldo.",
                "examples": [
                    "La zuppa è buona."
                ]
            }
        ]
    },
    {
        "word": "torta",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍰",
        "form": "noun",
        "plural": "torte",
        "definitions": [
            {
                "text": "Dolce cotto al forno.",
                "examples": [
                    "Una torta al cioccolato."
                ]
            }
        ]
    },
    {
        "word": "cioccolato",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍫",
        "form": "noun",
        "plural": "cioccolati",
        "definitions": [
            {
                "text": "Cibo dolce marrone.",
                "examples": [
                    "Amo il cioccolato."
                ]
            }
        ]
    },
    {
        "word": "gelato",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍦",
        "form": "noun",
        "plural": "gelati",
        "definitions": [
            {
                "text": "Cibo freddo e dolce.",
                "examples": [
                    "Un gelato alla vaniglia."
                ]
            }
        ]
    },
    {
        "word": "maglione",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧶",
        "form": "noun",
        "plural": "maglioni",
        "definitions": [
            {
                "text": "Vestito caldo di lana.",
                "examples": [
                    "Metto un maglione."
                ]
            }
        ]
    },
    {
        "word": "vestito",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👗",
        "form": "noun",
        "plural": "vestiti",
        "definitions": [
            {
                "text": "Abito intero.",
                "examples": [
                    "Lei ha un bel vestito."
                ]
            }
        ]
    },
    {
        "word": "gonna",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👗",
        "form": "noun",
        "plural": "gonne",
        "definitions": [
            {
                "text": "Vestito che copre dai fianchi in giù.",
                "examples": [
                    "Una gonna corta."
                ]
            }
        ]
    },
    {
        "word": "stivali",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "gli",
        "gender": "masculine",
        "emoji": "🥾",
        "form": "noun",
        "plural": "stivali",
        "definitions": [
            {
                "text": "Scarpe alte.",
                "examples": [
                    "Stivali per la pioggia."
                ]
            }
        ]
    },
    {
        "word": "dito",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☝️",
        "form": "noun",
        "plural": "dita",
        "definitions": [
            {
                "text": "Una delle cinque parti della mano.",
                "examples": [
                    "Ho dieci dita."
                ]
            }
        ]
    },
    {
        "word": "dito del piede",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🦶",
        "form": "noun",
        "plural": "dita dei piedi",
        "definitions": [
            {
                "text": "Un dito del piede.",
                "examples": [
                    "Mi fa male il dito del piede."
                ]
            }
        ]
    },
    {
        "word": "stomaco",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🤰",
        "form": "noun",
        "plural": "stomaci",
        "definitions": [
            {
                "text": "Parte del corpo per digerire.",
                "examples": [
                    "Ho male allo stomaco."
                ]
            }
        ]
    },
    {
        "word": "ginocchio",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🦵",
        "form": "noun",
        "plural": "ginocchia",
        "definitions": [
            {
                "text": "Parte a metà della gamba.",
                "examples": [
                    "Cado sul ginocchio."
                ]
            }
        ]
    },
    {
        "word": "erba",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🌱",
        "form": "noun",
        "plural": "erbe",
        "definitions": [
            {
                "text": "Piccole piante verdi a terra.",
                "examples": [
                    "L'erba è verde."
                ]
            }
        ]
    },
    {
        "word": "lago",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏞️",
        "form": "noun",
        "plural": "laghi",
        "definitions": [
            {
                "text": "Grande distesa di acqua dolce.",
                "examples": [
                    "Il lago è calmo."
                ]
            }
        ]
    },
    {
        "word": "nuvola",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "☁️",
        "form": "noun",
        "plural": "nuvole",
        "definitions": [
            {
                "text": "Massa bianca nel cielo.",
                "examples": [
                    "Ci sono delle nuvole."
                ]
            }
        ]
    },
    {
        "word": "stella",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⭐",
        "form": "noun",
        "plural": "stelle",
        "definitions": [
            {
                "text": "Punto luminoso nel cielo di notte.",
                "examples": [
                    "Guardo le stelle."
                ]
            }
        ]
    },
    {
        "word": "scrivania",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🖥️",
        "form": "noun",
        "plural": "scrivanie",
        "definitions": [
            {
                "text": "Tavolo per lavorare.",
                "examples": [
                    "Sono alla mia scrivania."
                ]
            }
        ]
    },
    {
        "word": "lampada",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💡",
        "form": "noun",
        "plural": "lampade",
        "definitions": [
            {
                "text": "Oggetto che fa luce.",
                "examples": [
                    "Accendi la lampada."
                ]
            }
        ]
    },
    {
        "word": "orologio",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "⏰",
        "form": "noun",
        "plural": "orologi",
        "definitions": [
            {
                "text": "Oggetto per dare l'ora.",
                "examples": [
                    "Guarda l'orologio."
                ]
            }
        ]
    },
    {
        "word": "specchio",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🪞",
        "form": "noun",
        "plural": "specchi",
        "definitions": [
            {
                "text": "Superficie che riflette l'immagine.",
                "examples": [
                    "Mi guardo allo specchio."
                ]
            }
        ]
    },
    {
        "word": "biblioteca",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📚",
        "form": "noun",
        "plural": "biblioteche",
        "definitions": [
            {
                "text": "Luogo con molti libri.",
                "examples": [
                    "Vado in biblioteca."
                ]
            }
        ]
    },
    {
        "word": "lunedì",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "lunedì",
        "definitions": [
            {
                "text": "Primo giorno della settimana.",
                "examples": [
                    "Il lunedì è difficile."
                ]
            }
        ]
    },
    {
        "word": "martedì",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "martedì",
        "definitions": [
            {
                "text": "Secondo giorno della settimana.",
                "examples": [
                    "Martedì ho sport."
                ]
            }
        ]
    },
    {
        "word": "mercoledì",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "mercoledì",
        "definitions": [
            {
                "text": "Terzo giorno della settimana.",
                "examples": [
                    "Il mercoledì è calmo."
                ]
            }
        ]
    },
    {
        "word": "giovedì",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "giovedì",
        "definitions": [
            {
                "text": "Quarto giorno della settimana.",
                "examples": [
                    "Giovedì sera."
                ]
            }
        ]
    },
    {
        "word": "venerdì",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "venerdì",
        "definitions": [
            {
                "text": "Quinto giorno della settimana.",
                "examples": [
                    "Venerdì è il weekend."
                ]
            }
        ]
    },
    {
        "word": "sabato",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "sabati",
        "definitions": [
            {
                "text": "Sesto giorno della settimana.",
                "examples": [
                    "Faccio la spesa sabato."
                ]
            }
        ]
    },
    {
        "word": "domenica",
        "level": "starter",
        "theme": "days_week_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📅",
        "form": "noun",
        "plural": "domeniche",
        "definitions": [
            {
                "text": "Settimo giorno della settimana.",
                "examples": [
                    "Domenica è un giorno di riposo."
                ]
            }
        ]
    },
    {
        "word": "gennaio",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "❄️",
        "form": "noun",
        "plural": "gennai",
        "definitions": [
            {
                "text": "Primo mese dell'anno.",
                "examples": [
                    "A gennaio fa freddo."
                ]
            }
        ]
    },
    {
        "word": "febbraio",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "❄️",
        "form": "noun",
        "plural": "febbrai",
        "definitions": [
            {
                "text": "Secondo mese dell'anno.",
                "examples": [
                    "Febbraio è corto."
                ]
            }
        ]
    },
    {
        "word": "marzo",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌱",
        "form": "noun",
        "plural": "marzi",
        "definitions": [
            {
                "text": "Terzo mese dell'anno.",
                "examples": [
                    "La primavera comincia in marzo."
                ]
            }
        ]
    },
    {
        "word": "aprile",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🌧️",
        "form": "noun",
        "plural": "aprili",
        "definitions": [
            {
                "text": "Quarto mese dell'anno.",
                "examples": [
                    "In aprile piove spesso."
                ]
            }
        ]
    },
    {
        "word": "maggio",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌸",
        "form": "noun",
        "plural": "maggi",
        "definitions": [
            {
                "text": "Quinto mese dell'anno.",
                "examples": [
                    "Maggio è un bel mese."
                ]
            }
        ]
    },
    {
        "word": "giugno",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "plural": "giugni",
        "definitions": [
            {
                "text": "Sesto mese dell'anno.",
                "examples": [
                    "L'estate inizia in giugno."
                ]
            }
        ]
    },
    {
        "word": "luglio",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "plural": "lugli",
        "definitions": [
            {
                "text": "Settimo mese dell'anno.",
                "examples": [
                    "Vado in vacanza in luglio."
                ]
            }
        ]
    },
    {
        "word": "agosto",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏖️",
        "form": "noun",
        "plural": "agosti",
        "definitions": [
            {
                "text": "Ottavo mese dell'anno.",
                "examples": [
                    "Fa molto caldo in agosto."
                ]
            }
        ]
    },
    {
        "word": "settembre",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍂",
        "form": "noun",
        "plural": "settembri",
        "definitions": [
            {
                "text": "Nono mese dell'anno.",
                "examples": [
                    "La scuola inizia in settembre."
                ]
            }
        ]
    },
    {
        "word": "ottobre",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🎃",
        "form": "noun",
        "plural": "ottobri",
        "definitions": [
            {
                "text": "Decimo mese dell'anno.",
                "examples": [
                    "Halloween è in ottobre."
                ]
            }
        ]
    },
    {
        "word": "novembre",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌫️",
        "form": "noun",
        "plural": "novembri",
        "definitions": [
            {
                "text": "Undicesimo mese dell'anno.",
                "examples": [
                    "Piove spesso in novembre."
                ]
            }
        ]
    },
    {
        "word": "dicembre",
        "level": "starter",
        "theme": "months_year_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎄",
        "form": "noun",
        "plural": "dicembri",
        "definitions": [
            {
                "text": "Dodicesimo mese dell'anno.",
                "examples": [
                    "Natale è in dicembre."
                ]
            }
        ]
    },
    {
        "word": "primavera",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌱",
        "form": "noun",
        "plural": "primavere",
        "definitions": [
            {
                "text": "Stagione dopo l'inverno.",
                "examples": [
                    "In primavera i fiori sbocciano."
                ]
            }
        ]
    },
    {
        "word": "estate",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "☀️",
        "form": "noun",
        "plural": "estati",
        "definitions": [
            {
                "text": "La stagione più calda.",
                "examples": [
                    "Amo l'estate."
                ]
            }
        ]
    },
    {
        "word": "autunno",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🍂",
        "form": "noun",
        "plural": "autunni",
        "definitions": [
            {
                "text": "Stagione quando cadono le foglie.",
                "examples": [
                    "L'autunno è bello."
                ]
            }
        ]
    },
    {
        "word": "inverno",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "❄️",
        "form": "noun",
        "plural": "inverni",
        "definitions": [
            {
                "text": "La stagione più fredda.",
                "examples": [
                    "Nevica in inverno."
                ]
            }
        ]
    },
    {
        "word": "leone",
        "level": "starter",
        "theme": "animals_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🦁",
        "form": "noun",
        "plural": "leoni",
        "definitions": [
            {
                "text": "Un grande felino selvaggio.",
                "examples": [
                    "Il leone è il re."
                ]
            }
        ]
    },
    {
        "word": "elefante",
        "level": "starter",
        "theme": "animals_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🐘",
        "form": "noun",
        "plural": "elefanti",
        "definitions": [
            {
                "text": "Un animale molto grande con la proboscide.",
                "examples": [
                    "L'elefante è grigio."
                ]
            }
        ]
    },
    {
        "word": "coniglio",
        "level": "starter",
        "theme": "animals_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🐰",
        "form": "noun",
        "plural": "conigli",
        "definitions": [
            {
                "text": "Piccolo animale con lunghe orecchie.",
                "examples": [
                    "Il coniglio mangia una carota."
                ]
            }
        ]
    },
    {
        "word": "cavallo",
        "level": "starter",
        "theme": "animals_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🐴",
        "form": "noun",
        "plural": "cavalli",
        "definitions": [
            {
                "text": "Un animale che si può cavalcare.",
                "examples": [
                    "Vado a cavallo."
                ]
            }
        ]
    },
    {
        "word": "mucca",
        "level": "starter",
        "theme": "animals_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🐮",
        "form": "noun",
        "plural": "mucche",
        "definitions": [
            {
                "text": "L'animale che dà il latte.",
                "examples": [
                    "La mucca è nel prato."
                ]
            }
        ]
    },
    {
        "word": "maiale",
        "level": "starter",
        "theme": "animals_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🐷",
        "form": "noun",
        "plural": "maiali",
        "definitions": [
            {
                "text": "Un animale rosa della fattoria.",
                "examples": [
                    "Il maiale è grasso."
                ]
            }
        ]
    },
    {
        "word": "pecora",
        "level": "starter",
        "theme": "animals_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🐑",
        "form": "noun",
        "plural": "pecore",
        "definitions": [
            {
                "text": "Animale con la lana bianca.",
                "examples": [
                    "Un gregge di pecore."
                ]
            }
        ]
    },
    {
        "word": "limone",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍋",
        "form": "noun",
        "plural": "limoni",
        "definitions": [
            {
                "text": "Un frutto giallo acido.",
                "examples": [
                    "Del limone nel mio tè."
                ]
            }
        ]
    },
    {
        "word": "arancia",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🍊",
        "form": "noun",
        "plural": "arance",
        "definitions": [
            {
                "text": "Un frutto arancione e tondo.",
                "examples": [
                    "Mangio un'arancia."
                ]
            }
        ]
    },
    {
        "word": "fragola",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍓",
        "form": "noun",
        "plural": "fragole",
        "definitions": [
            {
                "text": "Un piccolo frutto rosso dolce.",
                "examples": [
                    "Mi piacciono le fragole."
                ]
            }
        ]
    },
    {
        "word": "uva",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🍇",
        "form": "noun",
        "plural": "uve",
        "definitions": [
            {
                "text": "Piccoli frutti per fare il vino.",
                "examples": [
                    "Un grappolo d'uva."
                ]
            }
        ]
    },
    {
        "word": "aglio",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🧄",
        "form": "noun",
        "plural": "agli",
        "definitions": [
            {
                "text": "Pianta con un forte odore.",
                "examples": [
                    "Cucino con l'aglio."
                ]
            }
        ]
    },
    {
        "word": "sempre",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "article": "",
        "gender": "",
        "emoji": "♾️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Tutto il tempo.",
                "examples": [
                    "Bevo sempre acqua."
                ]
            }
        ]
    },
    {
        "word": "solitamente",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "article": "",
        "gender": "",
        "emoji": "🔄",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Di solito.",
                "examples": [
                    "Di solito finisco alle 18."
                ]
            }
        ]
    },
    {
        "word": "spesso",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "article": "",
        "gender": "",
        "emoji": "🔁",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Molte volte.",
                "examples": [
                    "Vado spesso al cinema."
                ]
            }
        ]
    },
    {
        "word": "qualche volta",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "article": "",
        "gender": "",
        "emoji": "⏱️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Talvolta.",
                "examples": [
                    "Arriva qualche volta in ritardo."
                ]
            }
        ]
    },
    {
        "word": "mai",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "article": "",
        "gender": "",
        "emoji": "🚫",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Nessuna volta.",
                "examples": [
                    "Non fumo mai."
                ]
            }
        ]
    },
    {
        "word": "chi",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "👤",
        "form": "pronoun",
        "plural": "",
        "definitions": [
            {
                "text": "Chiede di una persona.",
                "examples": [
                    "Chi è lì?"
                ]
            }
        ]
    },
    {
        "word": "cosa",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "❓",
        "form": "pronoun",
        "plural": "",
        "definitions": [
            {
                "text": "Chiede di una cosa.",
                "examples": [
                    "Cos'è?"
                ]
            }
        ]
    },
    {
        "word": "dove",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "📍",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Chiede di un luogo.",
                "examples": [
                    "Dove abiti?"
                ]
            }
        ]
    },
    {
        "word": "quando",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "⏰",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Chiede del tempo.",
                "examples": [
                    "Quando vieni?"
                ]
            }
        ]
    },
    {
        "word": "perché",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "❓",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Chiede la ragione.",
                "examples": [
                    "Perché dormi?"
                ]
            }
        ]
    },
    {
        "word": "come",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "⚙️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Chiede la maniera.",
                "examples": [
                    "Come stai?"
                ]
            }
        ]
    },
    {
        "word": "ciao",
        "level": "starter",
        "theme": "name_greeting_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👋",
        "form": "noun",
        "plural": "ciao",
        "definitions": [
            {
                "text": "Saluto amichevole.",
                "examples": [
                    "Ciao a tutti."
                ]
            }
        ]
    },
    {
        "word": "arrivederci",
        "level": "starter",
        "theme": "name_greeting_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "👋",
        "form": "noun",
        "plural": "arrivederci",
        "definitions": [
            {
                "text": "Saluto quando si parte.",
                "examples": [
                    "Arrivederci, signore."
                ]
            }
        ]
    },
    {
        "word": "per favore",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "article": "",
        "gender": "",
        "emoji": "🙏",
        "form": "phrase",
        "plural": "",
        "definitions": [
            {
                "text": "Formula di cortesia.",
                "examples": [
                    "Un caffè, per favore."
                ]
            }
        ]
    },
    {
        "word": "grazie",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🙏",
        "form": "noun",
        "plural": "grazie",
        "definitions": [
            {
                "text": "Formula per ringraziare.",
                "examples": [
                    "Grazie mille."
                ]
            }
        ]
    },
    {
        "word": "scusa",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🙇",
        "form": "noun",
        "plural": "scuse",
        "definitions": [
            {
                "text": "Formula per scusarsi.",
                "examples": [
                    "Scusa, sono in ritardo."
                ]
            }
        ]
    },
    {
        "word": "sì",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "✅",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Affermazione.",
                "examples": [
                    "Sì, voglio bene."
                ]
            }
        ]
    },
    {
        "word": "no",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "",
        "gender": "",
        "emoji": "❌",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Negazione.",
                "examples": [
                    "No, grazie."
                ]
            }
        ]
    },
    {
        "word": "nome",
        "level": "starter",
        "theme": "name_greeting_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🆔",
        "form": "noun",
        "plural": "nomi",
        "definitions": [
            {
                "text": "Come ci si chiama.",
                "examples": [
                    "Il mio nome è Mario."
                ]
            }
        ]
    },
    {
        "word": "viola",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🟣",
        "form": "noun",
        "plural": "viola",
        "definitions": [
            {
                "text": "Colore tra blu e rosso.",
                "examples": [
                    "Ho una borsa viola."
                ]
            }
        ]
    },
    {
        "word": "bagno",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🚿",
        "form": "noun",
        "plural": "bagni",
        "definitions": [
            {
                "text": "Stanza per lavarsi.",
                "examples": [
                    "Il bagno è piccolo."
                ]
            }
        ]
    },
    {
        "word": "camera da letto",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛏️",
        "form": "noun",
        "plural": "camere da letto",
        "definitions": [
            {
                "text": "Stanza per dormire.",
                "examples": [
                    "La mia camera è pulita."
                ]
            }
        ]
    },
    {
        "word": "neonato",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👶",
        "form": "noun",
        "plural": "neonati",
        "definitions": [
            {
                "text": "Bambino molto piccolo.",
                "examples": [
                    "Il neonato dorme."
                ]
            }
        ]
    },
    {
        "word": "ragazzo",
        "level": "starter",
        "theme": "people_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👦",
        "form": "noun",
        "plural": "ragazzi",
        "definitions": [
            {
                "text": "Giovane maschio.",
                "examples": [
                    "È un bel ragazzo."
                ]
            }
        ]
    },
    {
        "word": "ragazza",
        "level": "starter",
        "theme": "people_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👧",
        "form": "noun",
        "plural": "ragazze",
        "definitions": [
            {
                "text": "Giovane femmina.",
                "examples": [
                    "È una brava ragazza."
                ]
            }
        ]
    },
    {
        "word": "fidanzato",
        "level": "starter",
        "theme": "marital_status_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "plural": "fidanzati",
        "definitions": [
            {
                "text": "Partner maschile.",
                "examples": [
                    "Il mio fidanzato è qui."
                ]
            }
        ]
    },
    {
        "word": "fidanzata",
        "level": "starter",
        "theme": "marital_status_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "plural": "fidanzate",
        "definitions": [
            {
                "text": "Partner femminile.",
                "examples": [
                    "La sua fidanzata è italiana."
                ]
            }
        ]
    },
    {
        "word": "studente",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🧑‍🎓",
        "form": "noun",
        "plural": "studenti",
        "definitions": [
            {
                "text": "Persona che studia.",
                "examples": [
                    "Sono uno studente."
                ]
            }
        ]
    },
    {
        "word": "compagno di classe",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "plural": "compagni di classe",
        "definitions": [
            {
                "text": "Persona nella stessa classe.",
                "examples": [
                    "Il mio compagno è simpatico."
                ]
            }
        ]
    },
    {
        "word": "macchina fotografica",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📷",
        "form": "noun",
        "plural": "macchine fotografiche",
        "definitions": [
            {
                "text": "Apparecchio per fare foto.",
                "examples": [
                    "Ho una nuova macchina fotografica."
                ]
            }
        ]
    },
    {
        "word": "computer",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💻",
        "form": "noun",
        "plural": "computer",
        "definitions": [
            {
                "text": "Macchina elettronica per lavorare.",
                "examples": [
                    "Il mio computer è veloce."
                ]
            }
        ]
    },
    {
        "word": "bottiglia",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍼",
        "form": "noun",
        "plural": "bottiglie",
        "definitions": [
            {
                "text": "Recipiente per liquidi.",
                "examples": [
                    "Una bottiglia d'acqua."
                ]
            }
        ]
    },
    {
        "word": "scatola",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📦",
        "form": "noun",
        "plural": "scatole",
        "definitions": [
            {
                "text": "Contenitore cavo.",
                "examples": [
                    "Il gatto è nella scatola."
                ]
            }
        ]
    },
    {
        "word": "palla",
        "level": "starter",
        "theme": "sports_equipment_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⚽",
        "form": "noun",
        "plural": "palle",
        "definitions": [
            {
                "text": "Oggetto tondo per lo sport.",
                "examples": [
                    "Giochiamo con la palla."
                ]
            }
        ]
    },
    {
        "word": "regalo",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎁",
        "form": "noun",
        "plural": "regali",
        "definitions": [
            {
                "text": "Ciò che si offre a qualcuno.",
                "examples": [
                    "È un regalo per te."
                ]
            }
        ]
    },
    {
        "word": "strada",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛣️",
        "form": "noun",
        "plural": "strade",
        "definitions": [
            {
                "text": "Via in una città.",
                "examples": [
                    "Abito in questa strada."
                ]
            }
        ]
    },
    {
        "word": "edificio",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏢",
        "form": "noun",
        "plural": "edifici",
        "definitions": [
            {
                "text": "Grande costruzione urbana.",
                "examples": [
                    "Un bell'edificio."
                ]
            }
        ]
    },
    {
        "word": "bar",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☕",
        "form": "noun",
        "plural": "bar",
        "definitions": [
            {
                "text": "Luogo dove si beve il caffè.",
                "examples": [
                    "Andiamo al bar."
                ]
            }
        ]
    },
    {
        "word": "centro",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📍",
        "form": "noun",
        "plural": "centri",
        "definitions": [
            {
                "text": "Il mezzo di un luogo.",
                "examples": [
                    "Il centro città."
                ]
            }
        ]
    },
    {
        "word": "burro",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧈",
        "form": "noun",
        "plural": "burri",
        "definitions": [
            {
                "text": "Prodotto grasso del latte.",
                "examples": [
                    "Del burro sul pane."
                ]
            }
        ]
    },
    {
        "word": "formaggio",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧀",
        "form": "noun",
        "plural": "formaggi",
        "definitions": [
            {
                "text": "Prodotto fatto col latte.",
                "examples": [
                    "Mi piace il formaggio."
                ]
            }
        ]
    },
    {
        "word": "attore",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🎭",
        "form": "noun",
        "plural": "attori",
        "definitions": [
            {
                "text": "Persona che recita.",
                "examples": [
                    "È un attore famoso."
                ]
            }
        ]
    },
    {
        "word": "artista",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🎨",
        "form": "noun",
        "plural": "artisti",
        "definitions": [
            {
                "text": "Persona che fa arte.",
                "examples": [
                    "Lei è una grande artista."
                ]
            }
        ]
    },
    {
        "word": "adulto",
        "level": "starter",
        "theme": "people_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🧑",
        "form": "noun",
        "plural": "adulti",
        "definitions": [
            {
                "text": "Persona non più bambina.",
                "examples": [
                    "Un biglietto per adulti."
                ]
            }
        ]
    },
    {
        "word": "consiglio",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💡",
        "form": "noun",
        "plural": "consigli",
        "definitions": [
            {
                "text": "Suggerimento per aiutare.",
                "examples": [
                    "Dammi un consiglio."
                ]
            }
        ]
    },
    {
        "word": "età",
        "level": "starter",
        "theme": "age_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🎂",
        "form": "noun",
        "plural": "età",
        "definitions": [
            {
                "text": "Numero di anni vissuti.",
                "examples": [
                    "Che età hai?"
                ]
            }
        ]
    },
    {
        "word": "aria",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🌬️",
        "form": "noun",
        "plural": "arie",
        "definitions": [
            {
                "text": "Gas che si respira.",
                "examples": [
                    "L'aria è pura qui."
                ]
            }
        ]
    },
    {
        "word": "quartiere",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📍",
        "form": "noun",
        "plural": "quartieri",
        "definitions": [
            {
                "text": "Parte di una città.",
                "examples": [
                    "È il mio quartiere."
                ]
            }
        ]
    },
    {
        "word": "arte",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🎨",
        "form": "noun",
        "plural": "arti",
        "definitions": [
            {
                "text": "Creazione di cose belle.",
                "examples": [
                    "Amo l'arte moderna."
                ]
            }
        ]
    },
    {
        "word": "band",
        "level": "starter",
        "theme": "music_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎸",
        "form": "noun",
        "plural": "band",
        "definitions": [
            {
                "text": "Gruppo di musicisti.",
                "examples": [
                    "Una rock band."
                ]
            }
        ]
    },
    {
        "word": "bagno",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛁",
        "form": "noun",
        "plural": "bagni",
        "definitions": [
            {
                "text": "Azione di lavarsi nell'acqua.",
                "examples": [
                    "Fare un bagno caldo."
                ]
            }
        ]
    },
    {
        "word": "compleanno",
        "level": "starter",
        "theme": "personal_identity_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎂",
        "form": "noun",
        "plural": "compleanni",
        "definitions": [
            {
                "text": "Giorno della nascita.",
                "examples": [
                    "Buon compleanno!"
                ]
            }
        ]
    },
    {
        "word": "barca",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⛵",
        "form": "noun",
        "plural": "barche",
        "definitions": [
            {
                "text": "Veicolo per l'acqua.",
                "examples": [
                    "La barca è sul mare."
                ]
            }
        ]
    },
    {
        "word": "affari",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "gli",
        "gender": "masculine",
        "emoji": "💼",
        "form": "noun",
        "plural": "affari",
        "definitions": [
            {
                "text": "Attività commerciali.",
                "examples": [
                    "Viaggia per affari."
                ]
            }
        ]
    },
    {
        "word": "università",
        "level": "starter",
        "theme": "types_of_education_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🎓",
        "form": "noun",
        "plural": "università",
        "definitions": [
            {
                "text": "Scuola superiore.",
                "examples": [
                    "Vado all'università."
                ]
            }
        ]
    },
    {
        "word": "azienda",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🏢",
        "form": "noun",
        "plural": "aziende",
        "definitions": [
            {
                "text": "Luogo di lavoro o servizio.",
                "examples": [
                    "È una grande azienda."
                ]
            }
        ]
    },
    {
        "word": "concerto",
        "level": "starter",
        "theme": "music_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎵",
        "form": "noun",
        "plural": "concerti",
        "definitions": [
            {
                "text": "Spettacolo musicale.",
                "examples": [
                    "Un concerto di piano."
                ]
            }
        ]
    },
    {
        "word": "conversazione",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💬",
        "form": "noun",
        "plural": "conversazioni",
        "definitions": [
            {
                "text": "Parlare insieme.",
                "examples": [
                    "Una conversazione interessante."
                ]
            }
        ]
    },
    {
        "word": "ancora",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "article": "",
        "gender": "",
        "emoji": "🔁",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Un'altra volta.",
                "examples": [
                    "Ancora una volta."
                ]
            }
        ]
    },
    {
        "word": "fa",
        "level": "starter",
        "theme": "duration_expressions_A1",
        "article": "",
        "gender": "",
        "emoji": "🕰️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Indica tempo passato.",
                "examples": [
                    "Due giorni fa."
                ]
            }
        ]
    },
    {
        "word": "anche",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "article": "",
        "gender": "",
        "emoji": "➕",
        "form": "adjunction",
        "plural": "",
        "definitions": [
            {
                "text": "Pure.",
                "examples": [
                    "Anch'io."
                ]
            }
        ]
    },
    {
        "word": "veramente",
        "level": "starter",
        "theme": "basic_intensifiers_A1",
        "article": "",
        "gender": "",
        "emoji": "‼️",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Realmente.",
                "examples": [
                    "È veramente bello."
                ]
            }
        ]
    },
    {
        "word": "lì",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "article": "",
        "gender": "",
        "emoji": "👉",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "In quel posto.",
                "examples": [
                    "Il gatto è lì."
                ]
            }
        ]
    },
    {
        "word": "matita",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "✏️",
        "form": "noun",
        "plural": "matite",
        "definitions": [
            {
                "text": "Oggetto per scrivere.",
                "examples": [
                    "Una matita colorata."
                ]
            }
        ]
    },
    {
        "word": "carta",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📄",
        "form": "noun",
        "plural": "carte",
        "definitions": [
            {
                "text": "Materiale in fogli.",
                "examples": [
                    "Un foglio di carta."
                ]
            }
        ]
    },
    {
        "word": "portafoglio",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👛",
        "form": "noun",
        "plural": "portafogli",
        "definitions": [
            {
                "text": "Oggetto per i soldi.",
                "examples": [
                    "Ho il mio portafoglio."
                ]
            }
        ]
    },
    {
        "word": "ombrello",
        "level": "starter",
        "theme": "weather_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "☂️",
        "form": "noun",
        "plural": "ombrelli",
        "definitions": [
            {
                "text": "Oggetto contro la pioggia.",
                "examples": [
                    "Prendi l'ombrello."
                ]
            }
        ]
    },
    {
        "word": "occhiali",
        "level": "starter",
        "theme": "accessories_A1",
        "article": "gli",
        "gender": "masculine",
        "emoji": "👓",
        "form": "noun",
        "plural": "occhiali",
        "definitions": [
            {
                "text": "Oggetto per vedere meglio.",
                "examples": [
                    "I miei occhiali sono sul tavolo."
                ]
            }
        ]
    },
    {
        "word": "signore",
        "level": "starter",
        "theme": "name_greeting_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "plural": "signori",
        "definitions": [
            {
                "text": "Uomo adulto.",
                "examples": [
                    "Buongiorno, signore."
                ]
            }
        ]
    },
    {
        "word": "signora",
        "level": "starter",
        "theme": "name_greeting_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "plural": "signore",
        "definitions": [
            {
                "text": "Donna adulta.",
                "examples": [
                    "Grazie, signora."
                ]
            }
        ]
    },
    {
        "word": "città",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏙️",
        "form": "noun",
        "plural": "città",
        "definitions": [
            {
                "text": "Luogo con molte case.",
                "examples": [
                    "Roma è una grande città."
                ]
            }
        ]
    },
    {
        "word": "paese",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🗺️",
        "form": "noun",
        "plural": "paesi",
        "definitions": [
            {
                "text": "Territorio di una nazione.",
                "examples": [
                    "L'Italia è un bel paese."
                ]
            }
        ]
    },
    {
        "word": "mondo",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌍",
        "form": "noun",
        "plural": "mondi",
        "definitions": [
            {
                "text": "L'intera Terra.",
                "examples": [
                    "Tutto il mondo."
                ]
            }
        ]
    },
    {
        "word": "gente",
        "level": "starter",
        "theme": "people_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👥",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Persone in generale.",
                "examples": [
                    "C'è molta gente."
                ]
            }
        ]
    },
    {
        "word": "cosa",
        "level": "starter",
        "theme": "describing_things_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📦",
        "form": "noun",
        "plural": "cose",
        "definitions": [
            {
                "text": "Un oggetto o un'idea.",
                "examples": [
                    "È una bella cosa."
                ]
            }
        ]
    },
    {
        "word": "tempo",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "⏱️",
        "form": "noun",
        "plural": "tempi",
        "definitions": [
            {
                "text": "Ora o durata.",
                "examples": [
                    "Non ho tempo."
                ]
            }
        ]
    },
    {
        "word": "ora",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "⌚",
        "form": "noun",
        "plural": "ore",
        "definitions": [
            {
                "text": "Sessanta minuti.",
                "examples": [
                    "È l'una."
                ]
            }
        ]
    },
    {
        "word": "minuto",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "⏱️",
        "form": "noun",
        "plural": "minuti",
        "definitions": [
            {
                "text": "Sessanta secondi.",
                "examples": [
                    "Aspetta un minuto."
                ]
            }
        ]
    },
    {
        "word": "secondo",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "⏱️",
        "form": "noun",
        "plural": "secondi",
        "definitions": [
            {
                "text": "Tempo molto breve.",
                "examples": [
                    "Un secondo, per favore."
                ]
            }
        ]
    },
    {
        "word": "ieri",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "",
        "gender": "",
        "emoji": "🔙",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Il giorno prima di oggi.",
                "examples": [
                    "Ieri ero stanco."
                ]
            }
        ]
    },
    {
        "word": "mattina",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌅",
        "form": "noun",
        "plural": "mattine",
        "definitions": [
            {
                "text": "Tempo del mattino.",
                "examples": [
                    "Buongiorno!"
                ]
            }
        ]
    },
    {
        "word": "pomeriggio",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "plural": "pomeriggi",
        "definitions": [
            {
                "text": "Dopo mezzogiorno.",
                "examples": [
                    "Lavoro nel pomeriggio."
                ]
            }
        ]
    },
    {
        "word": "sera",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌆",
        "form": "noun",
        "plural": "sere",
        "definitions": [
            {
                "text": "Tempo della sera.",
                "examples": [
                    "Buonasera!"
                ]
            }
        ]
    },
    {
        "word": "mezzanotte",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🕛",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Le dodici di notte.",
                "examples": [
                    "È mezzanotte."
                ]
            }
        ]
    },
    {
        "word": "mezzogiorno",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🕛",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Le dodici del giorno.",
                "examples": [
                    "È mezzogiorno."
                ]
            }
        ]
    },
    {
        "word": "lavoro",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💼",
        "form": "noun",
        "plural": "lavori",
        "definitions": [
            {
                "text": "Ciò che si fa per vivere.",
                "examples": [
                    "Vado al lavoro."
                ]
            }
        ]
    },
    {
        "word": "impiego",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🛠️",
        "form": "noun",
        "plural": "impieghi",
        "definitions": [
            {
                "text": "Lavoro o occupazione.",
                "examples": [
                    "Ho un nuovo impiego."
                ]
            }
        ]
    },
    {
        "word": "mestiere",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👔",
        "form": "noun",
        "plural": "mestieri",
        "definitions": [
            {
                "text": "Professione.",
                "examples": [
                    "Qual è il tuo mestiere?"
                ]
            }
        ]
    },
    {
        "word": "azienda",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🏢",
        "form": "noun",
        "plural": "aziende",
        "definitions": [
            {
                "text": "Società dove si lavora.",
                "examples": [
                    "Una grande azienda."
                ]
            }
        ]
    },
    {
        "word": "ufficio",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🖥️",
        "form": "noun",
        "plural": "uffici",
        "definitions": [
            {
                "text": "Luogo di lavoro.",
                "examples": [
                    "Lui è in ufficio."
                ]
            }
        ]
    },
    {
        "word": "cliente",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👤",
        "form": "noun",
        "plural": "clienti",
        "definitions": [
            {
                "text": "Persona che compra un servizio.",
                "examples": [
                    "Il cliente ha ragione."
                ]
            }
        ]
    },
    {
        "word": "messaggio",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "✉️",
        "form": "noun",
        "plural": "messaggi",
        "definitions": [
            {
                "text": "Informazione inviata.",
                "examples": [
                    "Hai un messaggio."
                ]
            }
        ]
    },
    {
        "word": "email",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "📧",
        "form": "noun",
        "plural": "email",
        "definitions": [
            {
                "text": "Posta elettronica.",
                "examples": [
                    "Rispondo alle email."
                ]
            }
        ]
    },
    {
        "word": "sito web",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌐",
        "form": "noun",
        "plural": "siti web",
        "definitions": [
            {
                "text": "Pagine su internet.",
                "examples": [
                    "Guarda questo sito."
                ]
            }
        ]
    },
    {
        "word": "password",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🔑",
        "form": "noun",
        "plural": "password",
        "definitions": [
            {
                "text": "Codice segreto.",
                "examples": [
                    "Ho dimenticato la password."
                ]
            }
        ]
    },
    {
        "word": "tastiera",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⌨️",
        "form": "noun",
        "plural": "tastiere",
        "definitions": [
            {
                "text": "Oggetto per scrivere al computer.",
                "examples": [
                    "Una tastiera nuova."
                ]
            }
        ]
    },
    {
        "word": "mouse",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🖱️",
        "form": "noun",
        "plural": "mouse",
        "definitions": [
            {
                "text": "Oggetto per muovere il cursore.",
                "examples": [
                    "Il mouse è rotto."
                ]
            }
        ]
    },
    {
        "word": "schermo",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🖥️",
        "form": "noun",
        "plural": "schermi",
        "definitions": [
            {
                "text": "Parte del computer per vedere.",
                "examples": [
                    "Lo schermo è luminoso."
                ]
            }
        ]
    },
    {
        "word": "musica",
        "level": "starter",
        "theme": "music_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎵",
        "form": "noun",
        "plural": "musiche",
        "definitions": [
            {
                "text": "Suoni melodici.",
                "examples": [
                    "Ascolto musica."
                ]
            }
        ]
    },
    {
        "word": "canzone",
        "level": "starter",
        "theme": "music_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎤",
        "form": "noun",
        "plural": "canzoni",
        "definitions": [
            {
                "text": "Parole con musica.",
                "examples": [
                    "È una bella canzone."
                ]
            }
        ]
    },
    {
        "word": "film",
        "level": "starter",
        "theme": "cinema_film_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎞️",
        "form": "noun",
        "plural": "film",
        "definitions": [
            {
                "text": "Storia vista al cinema.",
                "examples": [
                    "Guardo un film."
                ]
            }
        ]
    },
    {
        "word": "foto",
        "level": "starter",
        "theme": "hobbies_interests_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📷",
        "form": "noun",
        "plural": "foto",
        "definitions": [
            {
                "text": "Immagine da una macchina fotografica.",
                "examples": [
                    "Una foto ricordo."
                ]
            }
        ]
    },
    {
        "word": "sport",
        "level": "starter",
        "theme": "common_sports_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "⚽",
        "form": "noun",
        "plural": "sport",
        "definitions": [
            {
                "text": "Attività fisica.",
                "examples": [
                    "Faccio sport."
                ]
            }
        ]
    },
    {
        "word": "calcio",
        "level": "starter",
        "theme": "common_sports_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "⚽",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Sport con palla tonda.",
                "examples": [
                    "Giochiamo a calcio."
                ]
            }
        ]
    },
    {
        "word": "tennis",
        "level": "starter",
        "theme": "common_sports_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎾",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Sport con la racchetta.",
                "examples": [
                    "Lui gioca a tennis."
                ]
            }
        ]
    },
    {
        "word": "nuoto",
        "level": "starter",
        "theme": "common_sports_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏊",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "L'atto di nuotare.",
                "examples": [
                    "Mi piace il nuoto."
                ]
            }
        ]
    },
    {
        "word": "mensa",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍴",
        "form": "noun",
        "plural": "mense",
        "definitions": [
            {
                "text": "Ristorante per lavoratori o studenti.",
                "examples": [
                    "Mangiamo in mensa."
                ]
            }
        ]
    },
    {
        "word": "mercato",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛒",
        "form": "noun",
        "plural": "mercati",
        "definitions": [
            {
                "text": "Luogo per comprare cibo fresco.",
                "examples": [
                    "Andiamo al mercato."
                ]
            }
        ]
    },
    {
        "word": "biglietto",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎟️",
        "form": "noun",
        "plural": "biglietti",
        "definitions": [
            {
                "text": "Tagliando per bus o cinema.",
                "examples": [
                    "Un biglietto per il treno."
                ]
            }
        ]
    },
    {
        "word": "ricevuta",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📄",
        "form": "noun",
        "plural": "ricevute",
        "definitions": [
            {
                "text": "Foglio che prova il pagamento.",
                "examples": [
                    "Tieni la ricevuta."
                ]
            }
        ]
    },
    {
        "word": "fattura",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💳",
        "form": "noun",
        "plural": "fatture",
        "definitions": [
            {
                "text": "Documento di pagamento.",
                "examples": [
                    "Pago la fattura."
                ]
            }
        ]
    },
    {
        "word": "carta di credito",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💳",
        "form": "noun",
        "plural": "carte di credito",
        "definitions": [
            {
                "text": "Carta per pagare.",
                "examples": [
                    "Pago con la carta."
                ]
            }
        ]
    },
    {
        "word": "contanti",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "i",
        "gender": "masculine",
        "emoji": "💵",
        "form": "noun",
        "plural": "contanti",
        "definitions": [
            {
                "text": "Soldi liquidi.",
                "examples": [
                    "Non ho contanti."
                ]
            }
        ]
    },
    {
        "word": "vestito",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👕",
        "form": "noun",
        "plural": "vestiti",
        "definitions": [
            {
                "text": "Ciò che si indossa.",
                "examples": [
                    "Un vestito nuovo."
                ]
            }
        ]
    },
    {
        "word": "cucina",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍳",
        "form": "noun",
        "plural": "cucine",
        "definitions": [
            {
                "text": "L'arte di cucinare.",
                "examples": [
                    "Amo la cucina italiana."
                ]
            }
        ]
    },
    {
        "word": "sale",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧂",
        "form": "noun",
        "plural": "sali",
        "definitions": [
            {
                "text": "Polvere bianca per salare.",
                "examples": [
                    "Un po' di sale."
                ]
            }
        ]
    },
    {
        "word": "pepe",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧂",
        "form": "noun",
        "plural": "pepi",
        "definitions": [
            {
                "text": "Polvere nera piccante.",
                "examples": [
                    "Metti il pepe."
                ]
            }
        ]
    },
    {
        "word": "olio",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏺",
        "form": "noun",
        "plural": "oli",
        "definitions": [
            {
                "text": "Liquido per condire.",
                "examples": [
                    "Olio d'oliva."
                ]
            }
        ]
    },
    {
        "word": "aceto",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🏺",
        "form": "noun",
        "plural": "aceti",
        "definitions": [
            {
                "text": "Liquido acido per insalata.",
                "examples": [
                    "Sale, pepe e aceto."
                ]
            }
        ]
    },
    {
        "word": "colazione",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "☕",
        "form": "noun",
        "plural": "colazioni",
        "definitions": [
            {
                "text": "Pasto del mattino.",
                "examples": [
                    "Faccio colazione."
                ]
            }
        ]
    },
    {
        "word": "pranzo",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "pranzi",
        "definitions": [
            {
                "text": "Pasto di mezzogiorno.",
                "examples": [
                    "È ora di pranzo."
                ]
            }
        ]
    },
    {
        "word": "cena",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍷",
        "form": "noun",
        "plural": "cene",
        "definitions": [
            {
                "text": "Pasto della sera.",
                "examples": [
                    "Una buona cena."
                ]
            }
        ]
    },
    {
        "word": "merenda",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍪",
        "form": "noun",
        "plural": "merende",
        "definitions": [
            {
                "text": "Pasto del pomeriggio.",
                "examples": [
                    "I bambini fanno merenda."
                ]
            }
        ]
    },
    {
        "word": "ospite",
        "level": "starter",
        "theme": "family_life_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "👤",
        "form": "noun",
        "plural": "ospiti",
        "definitions": [
            {
                "text": "Persona che si riceve.",
                "examples": [
                    "Abbiamo ospiti."
                ]
            }
        ]
    },
    {
        "word": "festa",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎉",
        "form": "noun",
        "plural": "feste",
        "definitions": [
            {
                "text": "Momento per divertirsi insieme.",
                "examples": [
                    "Buona festa!"
                ]
            }
        ]
    },
    {
        "word": "regalo",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎁",
        "form": "noun",
        "plural": "regali",
        "definitions": [
            {
                "text": "Oggetto offerto.",
                "examples": [
                    "Un regalo per te."
                ]
            }
        ]
    },
    {
        "word": "viaggiatore",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👤",
        "form": "noun",
        "plural": "viaggiatori",
        "definitions": [
            {
                "text": "Persona che viaggia.",
                "examples": [
                    "Il treno è pieno di viaggiatori."
                ]
            }
        ]
    },
    {
        "word": "valigia",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧳",
        "form": "noun",
        "plural": "valigie",
        "definitions": [
            {
                "text": "Contenitore per i viaggi.",
                "examples": [
                    "Preparo la valigia."
                ]
            }
        ]
    },
    {
        "word": "zaino",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🎒",
        "form": "noun",
        "plural": "zaini",
        "definitions": [
            {
                "text": "Sacca da spalla.",
                "examples": [
                    "Ho un grosso zaino."
                ]
            }
        ]
    },
    {
        "word": "passaporto",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛂",
        "form": "noun",
        "plural": "passaporti",
        "definitions": [
            {
                "text": "Documento per viaggiare.",
                "examples": [
                    "Dov'è il passaporto?"
                ]
            }
        ]
    },
    {
        "word": "mappa",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🗺️",
        "form": "noun",
        "plural": "mappe",
        "definitions": [
            {
                "text": "Disegno di un luogo.",
                "examples": [
                    "Guarda la mappa."
                ]
            }
        ]
    },
    {
        "word": "piantina",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📍",
        "form": "noun",
        "plural": "piantine",
        "definitions": [
            {
                "text": "Mappa di una città.",
                "examples": [
                    "La piantina di Roma."
                ]
            }
        ]
    },
    {
        "word": "via",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛣️",
        "form": "noun",
        "plural": "vie",
        "definitions": [
            {
                "text": "Strada di città.",
                "examples": [
                    "In che via?"
                ]
            }
        ]
    },
    {
        "word": "sentiero",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👣",
        "form": "noun",
        "plural": "sentieri",
        "definitions": [
            {
                "text": "Piccola strada.",
                "examples": [
                    "Il sentiero nel bosco."
                ]
            }
        ]
    },
    {
        "word": "strada",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛣️",
        "form": "noun",
        "plural": "strade",
        "definitions": [
            {
                "text": "Via di comunicazione.",
                "examples": [
                    "La strada è lunga."
                ]
            }
        ]
    },
    {
        "word": "piazza",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏙️",
        "form": "noun",
        "plural": "piazze",
        "definitions": [
            {
                "text": "Spazio pubblico aperto.",
                "examples": [
                    "La piazza del Duomo."
                ]
            }
        ]
    },
    {
        "word": "ponte",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🌉",
        "form": "noun",
        "plural": "ponti",
        "definitions": [
            {
                "text": "Passaggio sopra l'acqua.",
                "examples": [
                    "Il ponte è vecchio."
                ]
            }
        ]
    },
    {
        "word": "foresta",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🌲",
        "form": "noun",
        "plural": "foreste",
        "definitions": [
            {
                "text": "Luogo con molti alberi.",
                "examples": [
                    "Camminiamo nella foresta."
                ]
            }
        ]
    },
    {
        "word": "spiaggia",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏖️",
        "form": "noun",
        "plural": "spiagge",
        "definitions": [
            {
                "text": "Sabbia in riva al mare.",
                "examples": [
                    "Amo la spiaggia."
                ]
            }
        ]
    },
    {
        "word": "campagna",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚜",
        "form": "noun",
        "plural": "campagne",
        "definitions": [
            {
                "text": "Luogo fuori città.",
                "examples": [
                    "Vivere in campagna."
                ]
            }
        ]
    },
    {
        "word": "villaggio",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏘️",
        "form": "noun",
        "plural": "villaggi",
        "definitions": [
            {
                "text": "Piccolo centro abitato.",
                "examples": [
                    "Un bel villaggio."
                ]
            }
        ]
    },
    {
        "word": "lingua",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🗣️",
        "form": "noun",
        "plural": "lingue",
        "definitions": [
            {
                "text": "Ciò che si parla.",
                "examples": [
                    "L'italiano è una lingua."
                ]
            }
        ]
    },
    {
        "word": "parola",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📝",
        "form": "noun",
        "plural": "parole",
        "definitions": [
            {
                "text": "Unità del linguaggio.",
                "examples": [
                    "Una parola difficile."
                ]
            }
        ]
    },
    {
        "word": "frase",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📝",
        "form": "noun",
        "plural": "frasi",
        "definitions": [
            {
                "text": "Insieme di parole.",
                "examples": [
                    "Fai una frase."
                ]
            }
        ]
    },
    {
        "word": "domanda",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "❓",
        "form": "noun",
        "plural": "domande",
        "definitions": [
            {
                "text": "Ciò che si chiede.",
                "examples": [
                    "Ho una domanda."
                ]
            }
        ]
    },
    {
        "word": "risposta",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💡",
        "form": "noun",
        "plural": "risposte",
        "definitions": [
            {
                "text": "Ciò che si dice dopo una domanda.",
                "examples": [
                    "La risposta è corretta."
                ]
            }
        ]
    },
    {
        "word": "idea",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "💡",
        "form": "noun",
        "plural": "idee",
        "definitions": [
            {
                "text": "Ciò che si pensa.",
                "examples": [
                    "È una buona idea."
                ]
            }
        ]
    },
    {
        "word": "parere",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💬",
        "form": "noun",
        "plural": "pareri",
        "definitions": [
            {
                "text": "Ciò che si crede su un tema.",
                "examples": [
                    "Dammi il tuo parere."
                ]
            }
        ]
    },
    {
        "word": "opinione",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🗣️",
        "form": "noun",
        "plural": "opinioni",
        "definitions": [
            {
                "text": "Giudizio personale.",
                "examples": [
                    "Un'opinione forte."
                ]
            }
        ]
    },
    {
        "word": "scelta",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👉",
        "form": "noun",
        "plural": "scelte",
        "definitions": [
            {
                "text": "Atto di scegliere.",
                "examples": [
                    "È la tua scelta."
                ]
            }
        ]
    },
    {
        "word": "decisione",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⚖️",
        "form": "noun",
        "plural": "decisioni",
        "definitions": [
            {
                "text": "Ciò che si decide.",
                "examples": [
                    "Prendere una decisione."
                ]
            }
        ]
    },
    {
        "word": "piano",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📅",
        "form": "noun",
        "plural": "piani",
        "definitions": [
            {
                "text": "Ciò che si prevede di fare.",
                "examples": [
                    "Qual è il piano?"
                ]
            }
        ]
    },
    {
        "word": "progetto",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📊",
        "form": "noun",
        "plural": "progetti",
        "definitions": [
            {
                "text": "Lavoro programmato.",
                "examples": [
                    "Un nuovo progetto."
                ]
            }
        ]
    },
    {
        "word": "successo",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏆",
        "form": "noun",
        "plural": "successi",
        "definitions": [
            {
                "text": "Riuscita positiva.",
                "examples": [
                    "È un successo."
                ]
            }
        ]
    },
    {
        "word": "errore",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "❌",
        "form": "noun",
        "plural": "errori",
        "definitions": [
            {
                "text": "Sbaglio.",
                "examples": [
                    "Fare un errore."
                ]
            }
        ]
    },
    {
        "word": "sbaglio",
        "level": "starter",
        "theme": "learning_studying_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "⚠️",
        "form": "noun",
        "plural": "sbagli",
        "definitions": [
            {
                "text": "Mancanza o errore.",
                "examples": [
                    "Uno sbaglio di grammatica."
                ]
            }
        ]
    },
    {
        "word": "regalo",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎁",
        "form": "noun",
        "plural": "regali",
        "definitions": [
            {
                "text": "Dono.",
                "examples": [
                    "Grazie per il regalo."
                ]
            }
        ]
    },
    {
        "word": "prezzo",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏷️",
        "form": "noun",
        "plural": "prezzi",
        "definitions": [
            {
                "text": "Valore di una cosa.",
                "examples": [
                    "Qual è il prezzo?"
                ]
            }
        ]
    },
    {
        "word": "vendita",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏷️",
        "form": "noun",
        "plural": "vendite",
        "definitions": [
            {
                "text": "Atto di vendere.",
                "examples": [
                    "In vendita."
                ]
            }
        ]
    },
    {
        "word": "acquisto",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🛒",
        "form": "noun",
        "plural": "acquisti",
        "definitions": [
            {
                "text": "Atto di comprare.",
                "examples": [
                    "Un acquisto utile."
                ]
            }
        ]
    },
    {
        "word": "negozio",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏪",
        "form": "noun",
        "plural": "negozi",
        "definitions": [
            {
                "text": "Luogo per comprare.",
                "examples": [
                    "Il negozio è grande."
                ]
            }
        ]
    },
    {
        "word": "boutique",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👗",
        "form": "noun",
        "plural": "boutique",
        "definitions": [
            {
                "text": "Piccolo negozio elegante.",
                "examples": [
                    "Una bella boutique."
                ]
            }
        ]
    },
    {
        "word": "centro commerciale",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏬",
        "form": "noun",
        "plural": "centri commerciali",
        "definitions": [
            {
                "text": "Luogo con molti negozi.",
                "examples": [
                    "Andiamo al centro commerciale."
                ]
            }
        ]
    },
    {
        "word": "monete",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "le",
        "gender": "feminine",
        "emoji": "🪙",
        "form": "noun",
        "plural": "monete",
        "definitions": [
            {
                "text": "Soldi metallici.",
                "examples": [
                    "Hai delle monete?"
                ]
            }
        ]
    },
    {
        "word": "banconota",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💵",
        "form": "noun",
        "plural": "banconote",
        "definitions": [
            {
                "text": "Soldi di carta.",
                "examples": [
                    "Una banconota da dieci euro."
                ]
            }
        ]
    },
    {
        "word": "conto",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏦",
        "form": "noun",
        "plural": "conti",
        "definitions": [
            {
                "text": "Conto in banca.",
                "examples": [
                    "Aprire un conto."
                ]
            }
        ]
    },
    {
        "word": "banca",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏢",
        "form": "noun",
        "plural": "banche",
        "definitions": [
            {
                "text": "Luogo dei soldi.",
                "examples": [
                    "Vado in banca."
                ]
            }
        ]
    },
    {
        "word": "risparmio",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💰",
        "form": "noun",
        "plural": "risparmi",
        "definitions": [
            {
                "text": "Soldi messi da parte.",
                "examples": [
                    "I miei risparmi."
                ]
            }
        ]
    },
    {
        "word": "spesa",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💸",
        "form": "noun",
        "plural": "spese",
        "definitions": [
            {
                "text": "Soldi che escono.",
                "examples": [
                    "Ridurre le spese."
                ]
            }
        ]
    },
    {
        "word": "pagamento",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💳",
        "form": "noun",
        "plural": "pagamenti",
        "definitions": [
            {
                "text": "Azione di pagare.",
                "examples": [
                    "Pagamento con carta."
                ]
            }
        ]
    },
    {
        "word": "costo",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "💰",
        "form": "noun",
        "plural": "costi",
        "definitions": [
            {
                "text": "Ciò che costa.",
                "examples": [
                    "Il costo della vita."
                ]
            }
        ]
    },
    {
        "word": "mercato",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏢",
        "form": "noun",
        "plural": "mercati",
        "definitions": [
            {
                "text": "Luogo di commercio.",
                "examples": [
                    "Il mercato mondiale."
                ]
            }
        ]
    },
    {
        "word": "prodotto",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📦",
        "form": "noun",
        "plural": "prodotti",
        "definitions": [
            {
                "text": "Cosa fabbricata.",
                "examples": [
                    "Un nuovo prodotto."
                ]
            }
        ]
    },
    {
        "word": "servizio",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🤝",
        "form": "noun",
        "plural": "servizi",
        "definitions": [
            {
                "text": "Azione di aiutare.",
                "examples": [
                    "Un buon servizio."
                ]
            }
        ]
    },
    {
        "word": "offerta",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🏷️",
        "form": "noun",
        "plural": "offerte",
        "definitions": [
            {
                "text": "Proposta di prezzo.",
                "examples": [
                    "Un'offerta speciale."
                ]
            }
        ]
    },
    {
        "word": "domanda",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "❓",
        "form": "noun",
        "plural": "domande",
        "definitions": [
            {
                "text": "Azione di chiedere.",
                "examples": [
                    "La domanda è forte."
                ]
            }
        ]
    },
    {
        "word": "consegna",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚚",
        "form": "noun",
        "plural": "consegne",
        "definitions": [
            {
                "text": "Trasporto di merci.",
                "examples": [
                    "Consegna a domicilio."
                ]
            }
        ]
    },
    {
        "word": "ordine",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "📦",
        "form": "noun",
        "plural": "ordini",
        "definitions": [
            {
                "text": "Acquisto richiesto.",
                "examples": [
                    "Fare un ordine."
                ]
            }
        ]
    },
    {
        "word": "clientela",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👥",
        "form": "noun",
        "plural": "",
        "definitions": [
            {
                "text": "Insieme dei clienti.",
                "examples": [
                    "Una clientela fedele."
                ]
            }
        ]
    },
    {
        "word": "vendita",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏷️",
        "form": "noun",
        "plural": "vendite",
        "definitions": [
            {
                "text": "Azione di vendere.",
                "examples": [
                    "In vendita."
                ]
            }
        ]
    },
    {
        "word": "boutique",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👗",
        "form": "noun",
        "plural": "boutique",
        "definitions": [
            {
                "text": "Piccolo negozio.",
                "examples": [
                    "Una boutique di moda."
                ]
            }
        ]
    },
    {
        "word": "piano",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📶",
        "form": "noun",
        "plural": "piani",
        "definitions": [
            {
                "text": "Livello di un edificio.",
                "examples": [
                    "Abito al primo piano."
                ]
            }
        ]
    },
    {
        "word": "entrata",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🚪",
        "form": "noun",
        "plural": "entrate",
        "definitions": [
            {
                "text": "Luogo da cui si entra.",
                "examples": [
                    "L'entrata della casa."
                ]
            }
        ]
    },
    {
        "word": "uscita",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🚪",
        "form": "noun",
        "plural": "uscite",
        "definitions": [
            {
                "text": "Luogo da cui si esce.",
                "examples": [
                    "L'uscita è lì."
                ]
            }
        ]
    },
    {
        "word": "scale",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "le",
        "gender": "feminine",
        "emoji": "🪜",
        "form": "noun",
        "plural": "scale",
        "definitions": [
            {
                "text": "Serie di scalini.",
                "examples": [
                    "Salire le scale."
                ]
            }
        ]
    },
    {
        "word": "ascensore",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🛗",
        "form": "noun",
        "plural": "ascensori",
        "definitions": [
            {
                "text": "Apparecchio per salire i piani.",
                "examples": [
                    "Prendere l'ascensore."
                ]
            }
        ]
    },
    {
        "word": "corridoio",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👣",
        "form": "noun",
        "plural": "corridoi",
        "definitions": [
            {
                "text": "Passaggio lungo e stretto.",
                "examples": [
                    "Il corridoio è buio."
                ]
            }
        ]
    },
    {
        "word": "muri",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "i",
        "gender": "masculine",
        "emoji": "🧱",
        "form": "noun",
        "plural": "muri",
        "definitions": [
            {
                "text": "Pareti di una stanza.",
                "examples": [
                    "Muri bianchi."
                ]
            }
        ]
    },
    {
        "word": "tetto",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏠",
        "form": "noun",
        "plural": "tetti",
        "definitions": [
            {
                "text": "Copertura di una casa.",
                "examples": [
                    "Il gatto è sul tetto."
                ]
            }
        ]
    },
    {
        "word": "giardino",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🏡",
        "form": "noun",
        "plural": "giardini",
        "definitions": [
            {
                "text": "Terreno con piante.",
                "examples": [
                    "Lavorare in giardino."
                ]
            }
        ]
    },
    {
        "word": "garage",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🚗",
        "form": "noun",
        "plural": "garage",
        "definitions": [
            {
                "text": "Luogo per l'auto.",
                "examples": [
                    "L'auto è in garage."
                ]
            }
        ]
    },
    {
        "word": "soggiorno",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "soggiorni",
        "definitions": [
            {
                "text": "Stanza per stare insieme.",
                "examples": [
                    "Guardare la tv in soggiorno."
                ]
            }
        ]
    },
    {
        "word": "cucina",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍳",
        "form": "noun",
        "plural": "cucine",
        "definitions": [
            {
                "text": "Stanza per cucinare.",
                "examples": [
                    "La cucina è moderna."
                ]
            }
        ]
    },
    {
        "word": "sala da pranzo",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "sale da pranzo",
        "definitions": [
            {
                "text": "Stanza per mangiare.",
                "examples": [
                    "Cenare in sala da pranzo."
                ]
            }
        ]
    },
    {
        "word": "bagno",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🚽",
        "form": "noun",
        "plural": "bagni",
        "definitions": [
            {
                "text": "Luogo per i bisogni.",
                "examples": [
                    "Dov'è il bagno?"
                ]
            }
        ]
    },
    {
        "word": "doccia",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚿",
        "form": "noun",
        "plural": "docce",
        "definitions": [
            {
                "text": "Installazione per lavarsi in piedi.",
                "examples": [
                    "Fare una doccia."
                ]
            }
        ]
    },
    {
        "word": "rubinetto",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🚰",
        "form": "noun",
        "plural": "rubinetti",
        "definitions": [
            {
                "text": "Oggetto per l'acqua.",
                "examples": [
                    "Chiudi il rubinetto."
                ]
            }
        ]
    },
    {
        "word": "sapone",
        "level": "starter",
        "theme": "household_tasks_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧼",
        "form": "noun",
        "plural": "saponi",
        "definitions": [
            {
                "text": "Prodotto per lavarsi.",
                "examples": [
                    "Lavarsi col sapone."
                ]
            }
        ]
    },
    {
        "word": "asciugamano",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🧺",
        "form": "noun",
        "plural": "asciugamani",
        "definitions": [
            {
                "text": "Panno per asciugarsi.",
                "examples": [
                    "Un asciugamano pulito."
                ]
            }
        ]
    },
    {
        "word": "specchio",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🪞",
        "form": "noun",
        "plural": "specchi",
        "definitions": [
            {
                "text": "Superficie riflettente.",
                "examples": [
                    "Guardarsi allo specchio."
                ]
            }
        ]
    },
    {
        "word": "letto",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛌",
        "form": "noun",
        "plural": "letti",
        "definitions": [
            {
                "text": "Mobile per dormire.",
                "examples": [
                    "Un letto comodo."
                ]
            }
        ]
    },
    {
        "word": "cuscino",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "☁️",
        "form": "noun",
        "plural": "cuscini",
        "definitions": [
            {
                "text": "Appoggio per la testa.",
                "examples": [
                    "Un cuscino morbido."
                ]
            }
        ]
    },
    {
        "word": "coperta",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧶",
        "form": "noun",
        "plural": "coperte",
        "definitions": [
            {
                "text": "Telo caldo per il letto.",
                "examples": [
                    "Una coperta di lana."
                ]
            }
        ]
    },
    {
        "word": "armadio",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🚪",
        "form": "noun",
        "plural": "armadi",
        "definitions": [
            {
                "text": "Mobile per vestiti.",
                "examples": [
                    "Riorganizzare l'armadio."
                ]
            }
        ]
    },
    {
        "word": "scaffale",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "📶",
        "form": "noun",
        "plural": "scaffali",
        "definitions": [
            {
                "text": "Ripiano per libri.",
                "examples": [
                    "Uno scaffale pieno."
                ]
            }
        ]
    },
    {
        "word": "scrivania",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🖥️",
        "form": "noun",
        "plural": "scrivanie",
        "definitions": [
            {
                "text": "Tavolo da lavoro.",
                "examples": [
                    "Lavorare alla scrivania."
                ]
            }
        ]
    },
    {
        "word": "sedia",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🪑",
        "form": "noun",
        "plural": "sedie",
        "definitions": [
            {
                "text": "Seduta con schienale.",
                "examples": [
                    "Una sedia di legno."
                ]
            }
        ]
    },
    {
        "word": "poltrona",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "poltrone",
        "definitions": [
            {
                "text": "Seduta comoda.",
                "examples": [
                    "Sedersi in poltrona."
                ]
            }
        ]
    },
    {
        "word": "divano",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "divani",
        "definitions": [
            {
                "text": "Grande seduta per più persone.",
                "examples": [
                    "Dormire sul divano."
                ]
            }
        ]
    },
    {
        "word": "lampada",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💡",
        "form": "noun",
        "plural": "lampade",
        "definitions": [
            {
                "text": "Oggetto luminoso.",
                "examples": [
                    "Accendi la lampada."
                ]
            }
        ]
    },
    {
        "word": "televisione",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📺",
        "form": "noun",
        "plural": "televisioni",
        "definitions": [
            {
                "text": "Apparecchio video.",
                "examples": [
                    "Guardare la televisione."
                ]
            }
        ]
    },
    {
        "word": "radio",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📻",
        "form": "noun",
        "plural": "radio",
        "definitions": [
            {
                "text": "Apparecchio audio.",
                "examples": [
                    "Ascoltare la radio."
                ]
            }
        ]
    },
    {
        "word": "telefono",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "📞",
        "form": "noun",
        "plural": "telefoni",
        "definitions": [
            {
                "text": "Apparecchio per chiamare.",
                "examples": [
                    "Rispondere al telefono."
                ]
            }
        ]
    },
    {
        "word": "orologio",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "⌚",
        "form": "noun",
        "plural": "orologi",
        "definitions": [
            {
                "text": "Apparecchio per l'ora.",
                "examples": [
                    "Il mio orologio corre."
                ]
            }
        ]
    },
    {
        "word": "sveglia",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⏰",
        "form": "noun",
        "plural": "sveglie",
        "definitions": [
            {
                "text": "Orologio che suona al mattino.",
                "examples": [
                    "La sveglia suona."
                ]
            }
        ]
    },
    {
        "word": "chiave",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🔑",
        "form": "noun",
        "plural": "chiavi",
        "definitions": [
            {
                "text": "Oggetto per aprire.",
                "examples": [
                    "Dov'è la chiave?"
                ]
            }
        ]
    },
    {
        "word": "borsa",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👜",
        "form": "noun",
        "plural": "borse",
        "definitions": [
            {
                "text": "Contenitore flessibile.",
                "examples": [
                    "Una borsa a mano."
                ]
            }
        ]
    },
    {
        "word": "portafoglio",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👛",
        "form": "noun",
        "plural": "portafogli",
        "definitions": [
            {
                "text": "Per i soldi.",
                "examples": [
                    "Dimenticare il portafoglio."
                ]
            }
        ]
    },
    {
        "word": "occhiali",
        "level": "starter",
        "theme": "accessories_A1",
        "article": "gli",
        "gender": "masculine",
        "emoji": "👓",
        "form": "noun",
        "plural": "occhiali",
        "definitions": [
            {
                "text": "Per vedere meglio.",
                "examples": [
                    "Portare gli occhiali."
                ]
            }
        ]
    },
    {
        "word": "ombrello",
        "level": "starter",
        "theme": "weather_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "☂️",
        "form": "noun",
        "plural": "ombrelli",
        "definitions": [
            {
                "text": "Contro la pioggia.",
                "examples": [
                    "Prendere l'ombrello."
                ]
            }
        ]
    },
    {
        "word": "scarpe",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "le",
        "gender": "feminine",
        "emoji": "👟",
        "form": "noun",
        "plural": "scarpe",
        "definitions": [
            {
                "text": "Per camminare.",
                "examples": [
                    "Mettere le scarpe."
                ]
            }
        ]
    },
    {
        "word": "stivali",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "gli",
        "gender": "masculine",
        "emoji": "🥾",
        "form": "noun",
        "plural": "stivali",
        "definitions": [
            {
                "text": "Scarpe alte.",
                "examples": [
                    "Stivali di pelle."
                ]
            }
        ]
    },
    {
        "word": "calzini",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "i",
        "gender": "masculine",
        "emoji": "🧦",
        "form": "noun",
        "plural": "calzini",
        "definitions": [
            {
                "text": "Indumenti per piedi.",
                "examples": [
                    "Un paio di calzini."
                ]
            }
        ]
    },
    {
        "word": "pantaloni",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "i",
        "gender": "masculine",
        "emoji": "👖",
        "form": "noun",
        "plural": "pantaloni",
        "definitions": [
            {
                "text": "Indumento per gambe.",
                "examples": [
                    "Pantaloni blu."
                ]
            }
        ]
    },
    {
        "word": "jeans",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "i",
        "gender": "masculine",
        "emoji": "👖",
        "form": "noun",
        "plural": "jeans",
        "definitions": [
            {
                "text": "Pantaloni di tela blu.",
                "examples": [
                    "Indossare i jeans."
                ]
            }
        ]
    },
    {
        "word": "gonna",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👗",
        "form": "noun",
        "plural": "gonne",
        "definitions": [
            {
                "text": "Indumento femminile corto.",
                "examples": [
                    "Una gonna a pieghe."
                ]
            }
        ]
    },
    {
        "word": "vestito",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "👗",
        "form": "noun",
        "plural": "vestiti",
        "definitions": [
            {
                "text": "Indumento intero femminile.",
                "examples": [
                    "Un vestito da sera."
                ]
            }
        ]
    },
    {
        "word": "camicia",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👔",
        "form": "noun",
        "plural": "camicie",
        "definitions": [
            {
                "text": "Indumento con bottoni.",
                "examples": [
                    "Una camicia bianca."
                ]
            }
        ]
    },
    {
        "word": "t-shirt",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "👕",
        "form": "noun",
        "plural": "t-shirt",
        "definitions": [
            {
                "text": "Maglietta a maniche corte.",
                "examples": [
                    "Una t-shirt di cotone."
                ]
            }
        ]
    },
    {
        "word": "maglione",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧶",
        "form": "noun",
        "plural": "maglioni",
        "definitions": [
            {
                "text": "Maglia calda.",
                "examples": [
                    "Mettere un maglione."
                ]
            }
        ]
    },
    {
        "word": "cappotto",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧥",
        "form": "noun",
        "plural": "cappotti",
        "definitions": [
            {
                "text": "Indumento invernale.",
                "examples": [
                    "Un lungo cappotto."
                ]
            }
        ]
    },
    {
        "word": "giacca",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧥",
        "form": "noun",
        "plural": "giacche",
        "definitions": [
            {
                "text": "Cappotto leggero.",
                "examples": [
                    "Una giacca leggera."
                ]
            }
        ]
    },
    {
        "word": "cappello",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎩",
        "form": "noun",
        "plural": "cappelli",
        "definitions": [
            {
                "text": "Per la testa.",
                "examples": [
                    "Un cappello a bombetta."
                ]
            }
        ]
    },
    {
        "word": "berretto",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🧢",
        "form": "noun",
        "plural": "berretti",
        "definitions": [
            {
                "text": "Cappello sportivo.",
                "examples": [
                    "Mettere un berretto."
                ]
            }
        ]
    },
    {
        "word": "zuccotto",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🧣",
        "form": "noun",
        "plural": "zuccotti",
        "definitions": [
            {
                "text": "Cappello di lana.",
                "examples": [
                    "Uno zuccotto caldo."
                ]
            }
        ]
    },
    {
        "word": "sciarpa",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧣",
        "form": "noun",
        "plural": "sciarpe",
        "definitions": [
            {
                "text": "Per il collo.",
                "examples": [
                    "Indossare la sciarpa."
                ]
            }
        ]
    },
    {
        "word": "guanti",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "i",
        "gender": "masculine",
        "emoji": "🧤",
        "form": "noun",
        "plural": "guanti",
        "definitions": [
            {
                "text": "Per le mani.",
                "examples": [
                    "Un paio di guanti."
                ]
            }
        ]
    },
    {
        "word": "cintura",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎗️",
        "form": "noun",
        "plural": "cinture",
        "definitions": [
            {
                "text": "Per tenere i pantaloni.",
                "examples": [
                    "Una cintura di pelle."
                ]
            }
        ]
    },
    {
        "word": "costume da bagno",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🩱",
        "form": "noun",
        "plural": "costumi da bagno",
        "definitions": [
            {
                "text": "Per nuotare.",
                "examples": [
                    "Prendere il costume."
                ]
            }
        ]
    },
    {
        "word": "pigiama",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛌",
        "form": "noun",
        "plural": "pigiami",
        "definitions": [
            {
                "text": "Per dormire.",
                "examples": [
                    "Mettere il pigiama."
                ]
            }
        ]
    },
    {
        "word": "valigia",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧳",
        "form": "noun",
        "plural": "valigie",
        "definitions": [
            {
                "text": "Contenitore da viaggio.",
                "examples": [
                    "Fare la valigia."
                ]
            }
        ]
    },
    {
        "word": "zaino",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🎒",
        "form": "noun",
        "plural": "zaini",
        "definitions": [
            {
                "text": "Sacca da spalla.",
                "examples": [
                    "Prendere lo zaino."
                ]
            }
        ]
    },
    {
        "word": "passaporto",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛂",
        "form": "noun",
        "plural": "passaporti",
        "definitions": [
            {
                "text": "Documento di viaggio.",
                "examples": [
                    "Mostrare il passaporto."
                ]
            }
        ]
    },
    {
        "word": "biglietto",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🎟️",
        "form": "noun",
        "plural": "biglietti",
        "definitions": [
            {
                "text": "Titolo di trasporto.",
                "examples": [
                    "Un biglietto del treno."
                ]
            }
        ]
    },
    {
        "word": "mappa",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🗺️",
        "form": "noun",
        "plural": "mappe",
        "definitions": [
            {
                "text": "Rappresentazione di un luogo.",
                "examples": [
                    "Una mappa stradale."
                ]
            }
        ]
    },
    {
        "word": "piantina",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📍",
        "form": "noun",
        "plural": "piantine",
        "definitions": [
            {
                "text": "Mappa di una città.",
                "examples": [
                    "Una piantina della metropolitana."
                ]
            }
        ]
    },
    {
        "word": "stazione",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚉",
        "form": "noun",
        "plural": "stazioni",
        "definitions": [
            {
                "text": "Luogo dei treni.",
                "examples": [
                    "Andare in stazione."
                ]
            }
        ]
    },
    {
        "word": "aeroporto",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "plural": "aeroporti",
        "definitions": [
            {
                "text": "Luogo degli aerei.",
                "examples": [
                    "Prendere un taxi per l'aeroporto."
                ]
            }
        ]
    },
    {
        "word": "fermata dell'autobus",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚌",
        "form": "noun",
        "plural": "fermate dell'autobus",
        "definitions": [
            {
                "text": "Luogo dei bus.",
                "examples": [
                    "Aspettare alla fermata."
                ]
            }
        ]
    },
    {
        "word": "banchina",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛤️",
        "form": "noun",
        "plural": "banchine",
        "definitions": [
            {
                "text": "Bordo del binario.",
                "examples": [
                    "Il treno arriva alla banchina 3."
                ]
            }
        ]
    },
    {
        "word": "binario",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🛤️",
        "form": "noun",
        "plural": "binari",
        "definitions": [
            {
                "text": "Percorso del treno.",
                "examples": [
                    "Il binario è libero."
                ]
            }
        ]
    },
    {
        "word": "treno",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🚆",
        "form": "noun",
        "plural": "treni",
        "definitions": [
            {
                "text": "Veicolo su rotaia.",
                "examples": [
                    "Prendere il treno."
                ]
            }
        ]
    },
    {
        "word": "autobus",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🚌",
        "form": "noun",
        "plural": "autobus",
        "definitions": [
            {
                "text": "Grande veicolo urbano.",
                "examples": [
                    "L'autobus delle 8."
                ]
            }
        ]
    },
    {
        "word": "metropolitana",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚇",
        "form": "noun",
        "plural": "metropolitane",
        "definitions": [
            {
                "text": "Treno sotterraneo.",
                "examples": [
                    "Prendere la metro."
                ]
            }
        ]
    },
    {
        "word": "taxi",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🚕",
        "form": "noun",
        "plural": "taxi",
        "definitions": [
            {
                "text": "Auto con autista.",
                "examples": [
                    "Chiamare un taxi."
                ]
            }
        ]
    },
    {
        "word": "velocità",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏎️",
        "form": "noun",
        "plural": "velocità",
        "definitions": [
            {
                "text": "Rapidità di movimento.",
                "examples": [
                    "Limitare la velocità."
                ]
            }
        ]
    },
    {
        "word": "bagagli",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "i",
        "gender": "masculine",
        "emoji": "🧳",
        "form": "noun",
        "plural": "bagagli",
        "definitions": [
            {
                "text": "Effetti personali.",
                "examples": [
                    "Portare i bagagli."
                ]
            }
        ]
    },
    {
        "word": "viaggio",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "plural": "viaggi",
        "definitions": [
            {
                "text": "Azione di viaggiare.",
                "examples": [
                    "Buon viaggio!"
                ]
            }
        ]
    },
    {
        "word": "vacanza",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏖️",
        "form": "noun",
        "plural": "vacanze",
        "definitions": [
            {
                "text": "Tempo di riposo.",
                "examples": [
                    "Andare in vacanza."
                ]
            }
        ]
    },
    {
        "word": "partenza",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛫",
        "form": "noun",
        "plural": "partenze",
        "definitions": [
            {
                "text": "Azione di partire.",
                "examples": [
                    "L'ora della partenza."
                ]
            }
        ]
    },
    {
        "word": "arrivo",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🛬",
        "form": "noun",
        "plural": "arrivi",
        "definitions": [
            {
                "text": "Azione di arrivare.",
                "examples": [
                    "L'ora dell'arrivo."
                ]
            }
        ]
    },
    {
        "word": "volo",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "plural": "voli",
        "definitions": [
            {
                "text": "Viaggio in aereo.",
                "examples": [
                    "Un volo notturno."
                ]
            }
        ]
    },
    {
        "word": "prenotazione",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "📖",
        "form": "noun",
        "plural": "prenotazioni",
        "definitions": [
            {
                "text": "Azione di prenotare.",
                "examples": [
                    "Fare una prenotazione."
                ]
            }
        ]
    },
    {
        "word": "camera d'albergo",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏨",
        "form": "noun",
        "plural": "camere d'albergo",
        "definitions": [
            {
                "text": "Stanza in albergo.",
                "examples": [
                    "Prenotare una camera d'albergo."
                ]
            }
        ]
    },
    {
        "word": "chiave",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🔑",
        "form": "noun",
        "plural": "chiavi",
        "definitions": [
            {
                "text": "Per aprire la stanza.",
                "examples": [
                    "Riconsegnare la chiave."
                ]
            }
        ]
    },
    {
        "word": "reception",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛎️",
        "form": "noun",
        "plural": "reception",
        "definitions": [
            {
                "text": "Accoglienza in hotel.",
                "examples": [
                    "Andare alla reception."
                ]
            }
        ]
    },
    {
        "word": "pranzo",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "pranzi",
        "definitions": [
            {
                "text": "Pasto di mezzogiorno.",
                "examples": [
                    "Un pranzo leggero."
                ]
            }
        ]
    },
    {
        "word": "cena",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🍷",
        "form": "noun",
        "plural": "cene",
        "definitions": [
            {
                "text": "Pasto serale.",
                "examples": [
                    "Una cena tra amici."
                ]
            }
        ]
    },
    {
        "word": "spuntino",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "lo",
        "gender": "masculine",
        "emoji": "🥣",
        "form": "noun",
        "plural": "spuntini",
        "definitions": [
            {
                "text": "Piccolo pasto.",
                "examples": [
                    "Fare uno spuntino."
                ]
            }
        ]
    },
    {
        "word": "pasto",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "pasti",
        "definitions": [
            {
                "text": "L'atto di mangiare.",
                "examples": [
                    "Un pasto abbondante."
                ]
            }
        ]
    },
    {
        "word": "sveglia",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "⏰",
        "form": "noun",
        "plural": "sveglie",
        "definitions": [
            {
                "text": "Orologio del mattino.",
                "examples": [
                    "La sveglia suona."
                ]
            }
        ]
    },
    {
        "word": "orario",
        "level": "starter",
        "theme": "telling_time_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "⌚",
        "form": "noun",
        "plural": "orari",
        "definitions": [
            {
                "text": "Tempo stabilito.",
                "examples": [
                    "L'orario dei treni."
                ]
            }
        ]
    },
];
    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
