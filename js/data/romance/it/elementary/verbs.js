(function() {
    const data = [
    {
        "word": "lavarsi i denti",
        "level": "elementary",
        "theme": "household_tasks_A1",
        "emoji": "🪥",
        "form": "verb",
        "group": "riflessivo",
        "classification": "regular",
        "aspect": "action",
        "subtext": "lavarsi i denti dopo i pasti",
        "definitions": [
            {
                "text": "Pulire i denti usando uno spazzolino.",
                "examples": [
                    "Mi lavo i denti ogni mattina e sera."
                ]
            }
        ],
        "v3": "lavato i denti",
        "auxiliary": "essere"
    },
    {
        "word": "farsi la doccia",
        "level": "elementary",
        "theme": "household_tasks_A1",
        "emoji": "🚿",
        "form": "verb",
        "group": "riflessivo",
        "classification": "regular",
        "aspect": "action",
        "subtext": "fare la doccia fredda",
        "definitions": [
            {
                "text": "Lavarsi il corpo sotto una doccia.",
                "examples": [
                    "Di solito mi faccio la doccia al mattino."
                ]
            }
        ],
        "v3": "fatto la doccia",
        "auxiliary": "essere"
    },
    {
        "word": "sembrare",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤔",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "stative",
        "subtext": "sembrare felice / sembrare una buona idea",
        "definitions": [
            {
                "text": "Dare l'impressione di essere qualcosa.",
                "examples": [
                    "Sembri stanco oggi."
                ]
            }
        ],
        "v3": "sembrato",
        "auxiliary": "essere"
    },
    {
        "word": "diventare",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🦋",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "diventare un medico / diventare famoso",
        "definitions": [
            {
                "text": "Cominciare a essere qualcosa.",
                "examples": [
                    "Lui vuole diventare un pilota."
                ]
            }
        ],
        "v3": "diventato",
        "auxiliary": "essere"
    },
    {
        "word": "credere",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🙏",
        "form": "verb",
        "group": "ere",
        "classification": "regular",
        "aspect": "stative",
        "subtext": "credere in qualcosa / credere a qualcuno",
        "definitions": [
            {
                "text": "Pensare che qualcosa sia vero.",
                "examples": [
                    "Ti credo."
                ]
            }
        ],
        "v3": "creduto",
        "auxiliary": "avere"
    },
    {
        "word": "succedere",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "⚡",
        "form": "verb",
        "group": "ere",
        "classification": "regular",
        "aspect": "action",
        "subtext": "succedere improvvisamente",
        "synonyms": ["cosa è successo?"],
        "definitions": [
            {
                "text": "Aver luogo; accadere.",
                "examples": [
                    "L'incidente è successo ieri."
                ]
            }
        ],
        "v3": "successo",
        "auxiliary": "essere"
    },
    {
        "word": "includere",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "➕",
        "form": "verb",
        "group": "ere",
        "classification": "irregular",
        "aspect": "stative",
        "subtext": "includere tutto / il prezzo include le tasse",
        "definitions": [
            {
                "text": "Contenere qualcosa come parte di un tutto.",
                "examples": [
                    "La colazione è inclusa nel prezzo."
                ]
            }
        ],
        "v3": "incluso",
        "auxiliary": "avere"
    },
    {
        "word": "continuare",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "➡️",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "continuare a lavorare / continuare a fare",
        "definitions": [
            {
                "text": "Seguitare a fare qualcosa senza fermarsi.",
                "examples": [
                    "Per favore, continua a leggere."
                ]
            }
        ],
        "v3": "continuato",
        "auxiliary": "avere"
    },
    {
        "word": "impostare",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "⚙️",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "impostare la sveglia / impostare i parametri",
        "definitions": [
            {
                "text": "Mettere qualcosa in un particolare stato o posizione.",
                "examples": [
                    "Imposto la sveglia per le 7 del mattino."
                ]
            }
        ],
        "v3": "impostato",
        "auxiliary": "avere"
    },
    {
        "word": "guidare",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "👑",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "guidare una squadra / guidare l'auto",
        "definitions": [
            {
                "text": "Mostrare la strada o essere a capo di un gruppo.",
                "examples": [
                    "Lei guida un grande team di ricercatori."
                ]
            }
        ],
        "v3": "guidato",
        "auxiliary": "avere"
    },
    {
        "word": "seguire",
        "level": "elementary",
        "theme": "directions_navigation_A1",
        "emoji": "👣",
        "form": "verb",
        "group": "ire",
        "classification": "regular",
        "aspect": "action",
        "subtext": "seguire le regole / seguire qualcuno",
        "definitions": [
            {
                "text": "Andare dietro a qualcuno o obbedire a qualcosa.",
                "examples": [
                    "Per favore, seguitemi nella sala riunioni."
                ]
            }
        ],
        "v3": "seguito",
        "auxiliary": "avere"
    },
    {
        "word": "creare",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "✨",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "creare un sito web / creare confusione",
        "definitions": [
            {
                "text": "Fare qualcosa di nuovo.",
                "examples": [
                    "Ha creato una bellissima opera d'arte."
                ]
            }
        ],
        "v3": "creato",
        "auxiliary": "avere"
    },
    {
        "word": "permettere",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "✅",
        "form": "verb",
        "group": "ere",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "permettere a qualcuno di fare",
        "synonyms": ["permettersi il lusso"],
        "definitions": [
            {
                "text": "Lasciare che qualcuno faccia qualcosa.",
                "examples": [
                    "Non è permesso fumare qui."
                ]
            }
        ],
        "v3": "permesso",
        "auxiliary": "avere"
    },
    {
        "word": "crescere",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🌱",
        "form": "verb",
        "group": "ere",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "crescere in fretta / far crescere",
        "definitions": [
            {
                "text": "Aumentare di dimensioni o svilupparsi.",
                "examples": [
                    "I bambini crescono molto in fretta."
                ]
            }
        ],
        "v3": "cresciuto",
        "auxiliary": "essere"
    },
    {
        "word": "offrire",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤲",
        "form": "verb",
        "group": "ire",
        "classification": "regular",
        "aspect": "action",
        "subtext": "offrire un lavoro / offrire aiuto",
        "definitions": [
            {
                "text": "Chiedere a qualcuno se gradirebbe qualcosa.",
                "examples": [
                    "Mi ha offerto un caffè."
                ]
            }
        ],
        "v3": "offerto",
        "auxiliary": "avere"
    },
    {
        "word": "considerare",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🤔",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "both",
        "subtext": "considerare un'opzione / considerare qualcuno per un lavoro",
        "definitions": [
            {
                "text": "Pensare a qualcosa attentamente.",
                "examples": [
                    "Per favore, considera la mia candidatura."
                ]
            }
        ],
        "v3": "considerato",
        "auxiliary": "avere"
    },
    {
        "word": "apparire",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👻",
        "form": "verb",
        "group": "ire",
        "classification": "irregular",
        "aspect": "stative",
        "subtext": "apparire in TV / apparire improvvisamente",
        "definitions": [
            {
                "text": "Diventare visibile o sembrare essere.",
                "examples": [
                    "Sembrava essere molto felice."
                ]
            }
        ],
        "v3": "apparso",
        "auxiliary": "essere"
    },
    {
        "word": "servire",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "emoji": "🍽️",
        "form": "verb",
        "group": "ire",
        "classification": "regular",
        "aspect": "action",
        "subtext": "servire il cibo / servire a uno scopo",
        "definitions": [
            {
                "text": "Fornire cibo o un servizio.",
                "examples": [
                    "Servono la colazione fino alle 11."
                ]
            }
        ],
        "v3": "servito",
        "auxiliary": "avere"
    },
    {
        "word": "aspettarsi",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💭",
        "form": "verb",
        "group": "riflessivo",
        "classification": "regular",
        "aspect": "stative",
        "subtext": "aspettarsi un bambino / aspettarsi che qualcuno arrivi",
        "definitions": [
            {
                "text": "Pensare che qualcosa accadrà.",
                "examples": [
                    "Mi aspetto che arrivino presto."
                ]
            }
        ],
        "v3": "aspettato",
        "auxiliary": "essere"
    },
    {
        "word": "costruire",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🏗️",
        "form": "verb",
        "group": "ire",
        "classification": "regular",
        "aspect": "action",
        "subtext": "costruire una casa / costruire una relazione",
        "definitions": [
            {
                "text": "Fare qualcosa mettendo insieme delle parti.",
                "examples": [
                    "Stanno costruendo un nuovo complesso di uffici."
                ]
            }
        ],
        "v3": "costruito",
        "auxiliary": "avere"
    },
    {
        "word": "raggiungere",
        "level": "elementary",
        "theme": "booking_planning_a_trip_A2",
        "emoji": "🏁",
        "form": "verb",
        "group": "ere",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "raggiungere la vetta / raggiungere un accordo",
        "definitions": [
            {
                "text": "Arrivare in un luogo o a un livello.",
                "examples": [
                    "Abbiamo raggiunto l'hotel a tarda notte."
                ]
            }
        ],
        "v3": "raggiunto",
        "auxiliary": "avere"
    },
    {
        "word": "uccidere",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "⚔️",
        "form": "verb",
        "group": "ere",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "uccidere il tempo / uccidere un insetto",
        "definitions": [
            {
                "text": "Causare la morte di qualcuno o qualcosa.",
                "examples": [
                    "Il freddo ha ucciso le piante."
                ]
            }
        ],
        "v3": "ucciso",
        "auxiliary": "avere"
    },
    {
        "word": "rimanere",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "⏳",
        "form": "verb",
        "group": "ere",
        "classification": "irregular",
        "aspect": "stative",
        "subtext": "rimanere calmi / rimanere a casa",
        "definitions": [
            {
                "text": "Stare nello stesso posto o condizione.",
                "examples": [
                    "Si prega di rimanere seduti fino a quando l'aereo non si ferma."
                ]
            }
        ],
        "v3": "rimasto",
        "auxiliary": "essere"
    },
    {
        "word": "suggerire",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💡",
        "form": "verb",
        "group": "ire",
        "classification": "regular",
        "aspect": "action",
        "subtext": "suggerire un piano / suggerire di fare qualcosa",
        "definitions": [
            {
                "text": "Menzionare un'idea o un piano.",
                "examples": [
                    "Suggerisco di andare a fare una passeggiata."
                ]
            }
        ],
        "v3": "suggerito",
        "auxiliary": "avere"
    },
    {
        "word": "alzare",
        "level": "elementary",
        "theme": "family_life_A1",
        "emoji": "🙋",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "alzare la mano",
        "synonyms": ["crescere un figlio"],
        "definitions": [
            {
                "text": "Sollevare qualcosa o prendersi cura di un bambino.",
                "examples": [
                    "Ha alzato la mano per fare una domanda."
                ]
            }
        ],
        "v3": "alzato",
        "auxiliary": "avere"
    },
    {
        "word": "richiedere",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "📜",
        "form": "verb",
        "group": "ere",
        "classification": "irregular",
        "aspect": "stative",
        "subtext": "richiedere aiuto / richiedere il passaporto",
        "definitions": [
            {
                "text": "Aver bisogno di qualcosa.",
                "examples": [
                    "Questo lavoro richiede molti spostamenti."
                ]
            }
        ],
        "v3": "richiesto",
        "auxiliary": "avere"
    },
    {
        "word": "riferire",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📋",
        "form": "verb",
        "group": "ire",
        "classification": "regular",
        "aspect": "action",
        "subtext": "riferire un crimine / riferire un problema",
        "definitions": [
            {
                "text": "Dare informazioni su qualcosa.",
                "examples": [
                    "Ha riferito del furto dell'auto alla polizia."
                ]
            }
        ],
        "v3": "riferito",
        "auxiliary": "avere"
    },
    {
        "word": "spiegare",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👨‍🏫",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "spiegare le regole / spiegare perché",
        "definitions": [
            {
                "text": "Rendere qualcosa chiaro fornendo dettagli.",
                "examples": [
                    "Puoi spiegarmi questa parola?"
                ]
            }
        ],
        "v3": "spiegato",
        "auxiliary": "avere"
    },
    {
        "word": "sviluppare",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💻",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "sviluppare un'abilità / sviluppare un prodotto",
        "definitions": [
            {
                "text": "Far crescere o cambiare in qualcosa di più avanzato.",
                "examples": [
                    "L'azienda sta sviluppando una nuova app."
                ]
            }
        ],
        "v3": "sviluppato",
        "auxiliary": "avere"
    },
    {
        "word": "andare in pensione",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👴",
        "form": "verb",
        "group": "locuzione",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "",
        "synonyms": ["pensione anticipata"],
        "definitions": [
            {
                "text": "Smettere di lavorare perché si è raggiunta una certa età.",
                "examples": [
                    "Mio padre andrà in pensione l'anno prossimo."
                ]
            }
        ],
        "v3": "andato in pensione",
        "auxiliary": "essere"
    },
    {
        "word": "permettersi",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💰",
        "form": "verb",
        "group": "riflessivo",
        "classification": "irregular",
        "aspect": "stative",
        "subtext": "permettersi una casa",
        "synonyms": ["potersi permettere"],
        "definitions": [
            {
                "text": "Avere abbastanza soldi per pagare qualcosa.",
                "examples": [
                    "Non possiamo permetterci un appartamento più grande."
                ]
            }
        ],
        "v3": "permesso",
        "auxiliary": "essere"
    },
    {
        "word": "riciclare",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "♻️",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "riciclare la carta",
        "synonyms": ["bidoni del riciclo"],
        "definitions": [
            {
                "text": "Trattare materiali usati in modo che possano essere riutilizzati.",
                "examples": [
                    "Ricicliamo carta e vetro."
                ]
            }
        ],
        "v3": "riciclato",
        "auxiliary": "avere"
    },
    {
        "word": "colpire",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🥊",
        "form": "verb",
        "group": "ire",
        "classification": "regular",
        "aspect": "action",
        "subtext": "colpire la palla / colpire un bersaglio",
        "definitions": [
            {
                "text": "Toccare qualcosa con forza improvvisa.",
                "examples": [
                    "Ha colpito la palla con la mazza."
                ]
            }
        ],
        "v3": "colpito",
        "auxiliary": "avere"
    },
    {
        "word": "produrre",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏭",
        "form": "verb",
        "group": "-urre",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "produrre energia / produrre un film",
        "definitions": [
            {
                "text": "Fare o creare qualcosa.",
                "examples": [
                    "La fabbrica produce auto."
                ]
            }
        ],
        "v3": "prodotto",
        "auxiliary": "avere"
    },
    {
        "word": "affrontare",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👤",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "affrontare un problema / affrontare la realtà",
        "definitions": [
            {
                "text": "Gestire una situazione difficile.",
                "examples": [
                    "Dobbiamo affrontare le nostre paure."
                ]
            }
        ],
        "v3": "affrontato",
        "auxiliary": "avere"
    },
    {
        "word": "coprire",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🧥",
        "form": "verb",
        "group": "ire",
        "classification": "regular",
        "aspect": "action",
        "subtext": "coprire con una coperta / coprire una storia",
        "definitions": [
            {
                "text": "Mettere qualcosa sopra qualcos'altro.",
                "examples": [
                    "Ha coperto il tavolo con una tovaglia."
                ]
            }
        ],
        "v3": "coperto",
        "auxiliary": "avere"
    },
    {
        "word": "descrivere",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📝",
        "form": "verb",
        "group": "ere",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "descrivere qualcuno / descrivere una situazione",
        "definitions": [
            {
                "text": "Dire come è qualcuno o qualcosa.",
                "examples": [
                    "Puoi descrivere l'uomo che hai visto?"
                ]
            }
        ],
        "v3": "descritto",
        "auxiliary": "avere"
    },
    {
        "word": "prendere",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🎣",
        "form": "verb",
        "group": "ere",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "prendere una palla / prendere il raffreddore / prendere l'autobus",
        "definitions": [
            {
                "text": "Afferrare qualcosa che si muove.",
                "examples": [
                    "Cerca di prendere la palla!"
                ]
            }
        ],
        "v3": "preso",
        "auxiliary": "avere"
    },
    {
        "word": "fare domanda per",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "📝",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "fare domanda per un lavoro",
        "synonyms": ["candidarsi online"],
        "definitions": [
            {
                "text": "Fare una richiesta scritta formale per un lavoro o una posizione.",
                "examples": [
                    "Ha fatto domanda per tre diverse posizioni manageriali."
                ]
            }
        ],
        "v3": "fatto domanda per",
        "auxiliary": "avere"
    },
    {
        "word": "assumere",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "ere",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "assumere qualcuno / assumere una squadra",
        "definitions": [
            {
                "text": "Prendere ufficialmente qualcuno come dipendente.",
                "examples": [
                    "L'azienda ha assunto quindici nuove persone lo scorso trimestre."
                ]
            }
        ],
        "v3": "assunto",
        "auxiliary": "avere"
    },
    {
        "word": "promuovere",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📈",
        "form": "verb",
        "group": "ere",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "",
        "synonyms": ["essere promosso", "promozione interna"],
        "definitions": [
            {
                "text": "Spostare un dipendente in una posizione superiore.",
                "examples": [
                    "È stato promosso a senior manager dopo due anni."
                ]
            }
        ],
        "v3": "promosso",
        "auxiliary": "avere"
    },
    {
        "word": "dimettersi",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🚪",
        "form": "verb",
        "group": "riflessivo",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "dimettersi da un lavoro",
        "synonyms": ["dare le dimissioni"],
        "definitions": [
            {
                "text": "Lasciare formalmente un lavoro per scelta.",
                "examples": [
                    "Si è dimessa dopo aver dissentito sulla nuova strategia."
                ]
            }
        ],
        "v3": "dimesso",
        "auxiliary": "essere"
    },
    {
        "word": "licenziare",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "❌",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "licenziare un dipendente",
        "synonyms": ["essere licenziato"],
        "definitions": [
            {
                "text": "Rimuovere ufficialmente qualcuno dal proprio lavoro.",
                "examples": [
                    "È stato licenziato per assenze ripetute senza spiegazione."
                ]
            }
        ],
        "v3": "licenziato",
        "auxiliary": "avere"
    },
    {
        "word": "delegare",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📋",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "delegare un compito / delegare responsabilità",
        "definitions": [
            {
                "text": "Dare un compito o una responsabilità a qualcun altro.",
                "examples": [
                    "Un buon manager sa come delegare efficacemente."
                ]
            }
        ],
        "v3": "delegato",
        "auxiliary": "avere"
    },
    {
        "word": "negoziare",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "negoziare uno stipendio / negoziare i termini",
        "definitions": [
            {
                "text": "Discutere qualcosa per raggiungere un accordo.",
                "examples": [
                    "Ha negoziato uno stipendio più alto prima di firmare il contratto."
                ]
            }
        ],
        "v3": "negoziato",
        "auxiliary": "avere"
    },
    {
        "word": "valutare",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📊",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "valutare la performance / valutare i risultati",
        "definitions": [
            {
                "text": "Giudicare la qualità o il valore di qualcosa.",
                "examples": [
                    "Il manager valuta annualmente le prestazioni di ogni membro del team."
                ]
            }
        ],
        "v3": "valutato",
        "auxiliary": "avere"
    },
    {
        "word": "collaborare",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👥",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "collaborare con / collaborare a un progetto",
        "definitions": [
            {
                "text": "Lavorare insieme ad altri su un progetto condiviso.",
                "examples": [
                    "Hanno collaborato con un team di Berlino per la campagna."
                ]
            }
        ],
        "v3": "collaborato",
        "auxiliary": "avere"
    },
    {
        "word": "pianificare",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📅",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "pianificare una riunione / pianificare il tempo",
        "definitions": [
            {
                "text": "Organizzare un orario affinché accada qualcosa.",
                "examples": [
                    "Possiamo pianificare una riunione per giovedì pomeriggio?"
                ]
            }
        ],
        "v3": "pianificato",
        "auxiliary": "avere"
    },
    {
        "word": "investire",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📈",
        "form": "verb",
        "group": "ire",
        "classification": "regular",
        "aspect": "action",
        "subtext": "investire denaro / investire in immobili",
        "definitions": [
            {
                "text": "Mettere denaro in qualcosa aspettandosi un ritorno futuro.",
                "examples": [
                    "Investe parte del suo stipendio in un fondo indicizzato ogni mese."
                ]
            }
        ],
        "v3": "investito",
        "auxiliary": "avere"
    },
    {
        "word": "prendere in prestito",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💸",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "",
        "synonyms": ["chiedere in prestito", "prestito bancario"],
        "definitions": [
            {
                "text": "Prendere qualcosa con l'intenzione di restituirlo.",
                "examples": [
                    "Ha preso in prestito dei soldi dai suoi genitori per il deposito."
                ]
            }
        ],
        "v3": "preso in prestito",
        "auxiliary": "avere"
    },
    {
        "word": "prestare",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "prestare soldi / prestare attenzione",
        "definitions": [
            {
                "text": "Dare temporaneamente qualcosa a qualcuno.",
                "examples": [
                    "La banca ha rifiutato di prestargli altri soldi."
                ]
            }
        ],
        "v3": "prestato",
        "auxiliary": "avere"
    },
    {
        "word": "preventivare",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📊",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "preventivare con cura",
        "synonyms": ["budget mensile"],
        "definitions": [
            {
                "text": "Pianificare come verranno spesi i soldi.",
                "examples": [
                    "Pianificano attentamente le spese per risparmiare per una casa."
                ]
            }
        ],
        "v3": "preventivato",
        "auxiliary": "avere"
    },
    {
        "word": "prelevare",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "🏧",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "prelevare contanti / prelevare dal conto",
        "definitions": [
            {
                "text": "Prendere denaro da un conto bancario.",
                "examples": [
                    "Prelevo contanti ogni lunedì per la settimana."
                ]
            }
        ],
        "v3": "prelevato",
        "auxiliary": "avere"
    },
    {
        "word": "trasferire",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "📲",
        "form": "verb",
        "group": "ire",
        "classification": "regular",
        "aspect": "action",
        "subtext": "trasferire denaro",
        "synonyms": ["bonifico bancario"],
        "definitions": [
            {
                "text": "Spostare denaro da un conto all'altro.",
                "examples": [
                    "Ha trasferito l'affitto sul conto del proprietario."
                ]
            }
        ],
        "v3": "trasferito",
        "auxiliary": "avere"
    },
    {
        "word": "addebitare",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💳",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "addebitare una tariffa / addebitare extra",
        "definitions": [
            {
                "text": "Chiedere una somma di denaro per un servizio.",
                "examples": [
                    "Il meccanico ha addebitato più del preventivo."
                ]
            }
        ],
        "v3": "addebitato",
        "auxiliary": "avere"
    },
    {
        "word": "richiedere",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📜",
        "form": "verb",
        "group": "ere",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "richiedere assicurazione / richiedere un rimborso",
        "definitions": [
            {
                "text": "Chiedere formalmente denaro che ti è dovuto, specialmente l'assicurazione.",
                "examples": [
                    "Ha fatto richiesta alla sua assicurazione dopo l'incidente."
                ]
            }
        ],
        "v3": "richiesto",
        "auxiliary": "avere"
    },
    {
        "word": "litigare",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "🗣️",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "litigare per / litigare con qualcuno",
        "definitions": [
            {
                "text": "Non essere d'accordo con qualcuno in modo arrabbiato o energico.",
                "examples": [
                    "Litigano spesso per soldi e orari di lavoro."
                ]
            }
        ],
        "v3": "litigato",
        "auxiliary": "avere"
    },
    {
        "word": "fidarsi",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "riflessivo",
        "classification": "regular",
        "aspect": "stative",
        "subtext": "fidarsi di qualcuno / fidarsi del proprio istinto",
        "definitions": [
            {
                "text": "Avere fiducia nell'onestà e nell'affidabilità di qualcuno.",
                "examples": [
                    "Si fida completamente del suo socio in affari."
                ]
            }
        ],
        "v3": "fidato",
        "auxiliary": "essere"
    },
    {
        "word": "sostenere",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "ere",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "sostenere qualcuno / sostenere una decisione",
        "definitions": [
            {
                "text": "Aiutare e incoraggiare qualcuno nelle difficoltà.",
                "examples": [
                    "Sostiene la sua partner durante un periodo difficile al lavoro."
                ]
            }
        ],
        "v3": "sostenuto",
        "auxiliary": "avere"
    },
    {
        "word": "non essere d'accordo",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "👎",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "",
        "synonyms": ["dissentire da qualcuno", "essere in disaccordo"],
        "definitions": [
            {
                "text": "Avere un'opinione diversa da qualcuno.",
                "examples": [
                    "Era rispettosamente in disaccordo con la decisione del manager."
                ]
            }
        ],
        "v3": "stato in disaccordo",
        "auxiliary": "avere"
    },
    {
        "word": "scusarsi",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🙏",
        "form": "verb",
        "group": "riflessivo",
        "classification": "regular",
        "aspect": "action",
        "subtext": "scusarsi per / scusarsi con qualcuno",
        "definitions": [
            {
                "text": "Esprimere rammarico per qualcosa che si è fatto di sbagliato.",
                "examples": [
                    "Si è scusato per aver perso la riunione."
                ]
            }
        ],
        "v3": "scusato",
        "auxiliary": "essere"
    },
    {
        "word": "perdonare",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "perdonare qualcuno / perdonare un errore",
        "definitions": [
            {
                "text": "Smettere di sentirsi arrabbiati con qualcuno per quello che ha fatto.",
                "examples": [
                    "Alla fine lo ha perdonato per l'errore commesso."
                ]
            }
        ],
        "v3": "perdonato",
        "auxiliary": "avere"
    },
    {
        "word": "scendere a compromessi",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "riflessivo",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "",
        "synonyms": ["trovare un compromesso", "scendere a patti"],
        "definitions": [
            {
                "text": "Accettare meno dell'ideale per raggiungere un accordo.",
                "examples": [
                    "Hanno raggiunto un compromesso sul prezzo e hanno firmato il contratto."
                ]
            }
        ],
        "v3": "sceso a compromessi",
        "auxiliary": "essere"
    },
    {
        "word": "diagnosticare",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🩺",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "diagnosticare una malattia / diagnosticare precocemente",
        "definitions": [
            {
                "text": "Identificare una malattia o un problema dopo un esame.",
                "examples": [
                    "Il dottore le ha diagnosticato la pressione alta."
                ]
            }
        ],
        "v3": "diagnosticato",
        "auxiliary": "avere"
    },
    {
        "word": "trattare",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🩹",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "trattare un paziente / trattare una malattia",
        "definitions": [
            {
                "text": "Fornire cure mediche a qualcuno che è malato o ferito.",
                "examples": [
                    "Lo specialista ha trattato il suo infortunio al ginocchio con la fisioterapia."
                ]
            }
        ],
        "v3": "trattato",
        "auxiliary": "avere"
    },
    {
        "word": "prevenire",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🛡️",
        "form": "verb",
        "group": "ire",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "prevenire malattie",
        "synonyms": ["adottare misure preventive"],
        "definitions": [
            {
                "text": "Impedire che accada qualcosa di brutto.",
                "examples": [
                    "L'esercizio fisico e la dieta possono prevenire molte malattie comuni."
                ]
            }
        ],
        "v3": "prevenuto",
        "auxiliary": "avere"
    },
    {
        "word": "soffrire",
        "level": "elementary",
        "theme": "human_body_A2",
        "emoji": "🤕",
        "form": "verb",
        "group": "ire",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "soffrire di / soffrire dolore",
        "definitions": [
            {
                "text": "Sperimentare dolore o angoscia.",
                "examples": [
                    "Soffre di mal di schiena cronico a causa del lavoro d'ufficio."
                ]
            }
        ],
        "v3": "sofferto",
        "auxiliary": "avere"
    },
    {
        "word": "raccomandare",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💡",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "raccomandare un trattamento / raccomandare il riposo",
        "definitions": [
            {
                "text": "Suggerire una linea di condotta come buona o adatta.",
                "examples": [
                    "Il dottore ha raccomandato più sonno e meno caffeina."
                ]
            }
        ],
        "v3": "raccomandato",
        "auxiliary": "avere"
    },
    {
        "word": "migliorare",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "📈",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "migliorare la salute / migliorare la forma fisica",
        "definitions": [
            {
                "text": "Diventare migliore o rendere qualcosa migliore.",
                "examples": [
                    "La sua salute è migliorata dopo aver cambiato dieta e routine."
                ]
            }
        ],
        "v3": "migliorato",
        "auxiliary": "avere"
    },
    {
        "word": "affittare",
        "level": "elementary",
        "theme": "renting_landlords_A2",
        "emoji": "🏠",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "affittare un appartamento / affittare una stanza",
        "definitions": [
            {
                "text": "Pagare regolarmente per utilizzare una proprietà appartenente a qualcun altro.",
                "examples": [
                    "Affittano un trilocale vicino al centro città."
                ]
            }
        ],
        "v3": "affittato",
        "auxiliary": "avere"
    },
    {
        "word": "possedere",
        "level": "elementary",
        "theme": "renting_landlords_A2",
        "emoji": "🏡",
        "form": "verb",
        "group": "ere",
        "classification": "regular",
        "aspect": "stative",
        "subtext": "possedere una proprietà / possedere un'auto",
        "definitions": [
            {
                "text": "Avere legalmente qualcosa.",
                "examples": [
                    "Possiede un piccolo appartamento in periferia."
                ]
            }
        ],
        "v3": "posseduto",
        "auxiliary": "avere"
    },
    {
        "word": "riparare",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🔧",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "riparare qualcosa",
        "synonyms": ["effettuare riparazioni"],
        "definitions": [
            {
                "text": "Aggiustare qualcosa che è rotto o non funziona.",
                "examples": [
                    "Il proprietario è lento a riparare le cose nell'appartamento."
                ]
            }
        ],
        "v3": "riparato",
        "auxiliary": "avere"
    },
    {
        "word": "traslocare",
        "level": "elementary",
        "theme": "moving_home_A2",
        "emoji": "📦",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "",
        "synonyms": ["trasferirsi", "cambiare casa"],
        "definitions": [
            {
                "text": "Andare a vivere o lavorare in un posto diverso.",
                "examples": [
                    "Hanno traslocato in un appartamento più grande quando è nata la figlia."
                ]
            }
        ],
        "v3": "traslocato",
        "auxiliary": "avere"
    },
    {
        "word": "decorare",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "emoji": "🎨",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "decorare una stanza",
        "synonyms": ["arredamento d'interni"],
        "definitions": [
            {
                "text": "Rendere un luogo più attraente, specialmente dipingendo.",
                "examples": [
                    "Hanno decorato l'appartamento prima di traslocare."
                ]
            }
        ],
        "v3": "decorato",
        "auxiliary": "avere"
    },
    {
        "word": "avviare",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏗️",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "avviare un'attività / avviare un'azienda",
        "definitions": [
            {
                "text": "Iniziare o stabilire qualcosa (come un'attività).",
                "examples": [
                    "Ha avviato la propria attività di consulenza all'età di trent'anni."
                ]
            }
        ],
        "v3": "avviato",
        "auxiliary": "avere"
    },
    {
        "word": "scoprire",
        "level": "elementary",
        "theme": "news_media_A2",
        "emoji": "🔎",
        "form": "verb",
        "group": "ire",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "scoprire la verità / scoprire più tardi",
        "definitions": [
            {
                "text": "Venire a conoscenza o apprendere informazioni.",
                "examples": [
                    "Ha scoperto che l'affitto stava per aumentare."
                ]
            }
        ],
        "v3": "scoperto",
        "auxiliary": "avere"
    },
    {
        "word": "continuare",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⏩",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "continuare a lavorare / continuare nonostante tutto",
        "definitions": [
            {
                "text": "Proseguire nel fare qualcosa.",
                "examples": [
                    "Ha continuato a lavorare nonostante si sentisse male."
                ]
            }
        ],
        "v3": "continuato",
        "auxiliary": "avere"
    },
    {
        "word": "arrendersi",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏳️",
        "form": "verb",
        "group": "riflessivo",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "arrendersi al lavoro",
        "synonyms": ["smettere di provare"],
        "definitions": [
            {
                "text": "Smettere di provare a fare qualcosa; rinunciare.",
                "examples": [
                    "Ha rinunciato al suo lavoro per avviare la sua azienda."
                ]
            }
        ],
        "v3": "arreso",
        "auxiliary": "essere"
    },
    {
        "word": "risolvere",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🔧",
        "form": "verb",
        "group": "ere",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "risolvere un problema / risolvere una situazione",
        "definitions": [
            {
                "text": "Trovare una soluzione a un problema o occuparsi di qualcosa.",
                "examples": [
                    "Puoi risolvere il problema con il contratto?"
                ]
            }
        ],
        "v3": "risolto",
        "auxiliary": "avere"
    },
    {
        "word": "prendersi cura di",
        "level": "elementary",
        "theme": "relationships_family_A2",
        "emoji": "👶",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "prendersi cura di qualcuno",
        "synonyms": ["accudire un bambino"],
        "definitions": [
            {
                "text": "Occuparsi di qualcuno o qualcosa.",
                "examples": [
                    "Si prende cura dell'anziana madre nei fine settimana."
                ]
            }
        ],
        "v3": "preso cura di",
        "auxiliary": "avere"
    },
    {
        "word": "ridurre",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "📉",
        "form": "verb",
        "group": "-urre",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "ridurre le spese / ridurre lo zucchero",
        "definitions": [
            {
                "text": "Diminuire la quantità di qualcosa che si fa o si consuma.",
                "examples": [
                    "Ha ridotto la caffeina per migliorare il sonno."
                ]
            }
        ],
        "v3": "ridotto",
        "auxiliary": "avere"
    },
    {
        "word": "assumere",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💪",
        "form": "verb",
        "group": "ere",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "",
        "synonyms": ["assumersi la responsabilità", "assumersi un impegno"],
        "definitions": [
            {
                "text": "Accettare una responsabilità o un incarico di lavoro.",
                "examples": [
                    "Ha assunto un secondo lavoro per estinguere il mutuo più velocemente."
                ]
            }
        ],
        "v3": "assunto",
        "auxiliary": "avere"
    },
    {
        "word": "rifiutare",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "👎",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "rifiutare un'offerta / rifiutare un lavoro",
        "definitions": [
            {
                "text": "Dire di no a un'offerta o a una richiesta.",
                "examples": [
                    "Ha rifiutato il lavoro perché lo stipendio era troppo basso."
                ]
            }
        ],
        "v3": "rifiutato",
        "auxiliary": "avere"
    },
    {
        "word": "rimandare",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⏳",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "rimandare una riunione / rimandare una decisione",
        "definitions": [
            {
                "text": "Posticipare qualcosa a un momento successivo.",
                "examples": [
                    "Continua a rimandare la conversazione sul suo stipendio."
                ]
            }
        ],
        "v3": "rimandato",
        "auxiliary": "avere"
    },
    {
        "word": "dovere",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💸",
        "form": "verb",
        "group": "ere",
        "classification": "irregular",
        "aspect": "stative",
        "subtext": "dovere dei soldi / dovere molto",
        "definitions": [
            {
                "text": "Essere obbligati a pagare denaro a qualcuno.",
                "examples": [
                    "Deve alla banca cinquantamila euro di mutuo."
                ]
            }
        ],
        "v3": "dovuto",
        "auxiliary": "avere"
    },
    {
        "word": "invitare",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "📩",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "invitare a cena / invitare a una festa",
        "definitions": [
            {
                "text": "Chiedere a qualcuno di venire a un evento.",
                "examples": [
                    "Ha invitato tutto il team a cena dopo la fine del progetto."
                ]
            }
        ],
        "v3": "invitato",
        "auxiliary": "avere"
    },
    {
        "word": "confermare",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "✅",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "confermare una prenotazione / confermare per iscritto",
        "definitions": [
            {
                "text": "Dire definitivamente che qualcosa è vero o che accadrà.",
                "examples": [
                    "Si prega di confermare la partecipazione entro venerdì mattina."
                ]
            }
        ],
        "v3": "confermato",
        "auxiliary": "avere"
    },
    {
        "word": "contattare",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "📞",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "contattare via email",
        "synonyms": ["contattaci"],
        "definitions": [
            {
                "text": "Mersi in contatto con qualcuno.",
                "examples": [
                    "Ti contatterò entro la fine della settimana con una risposta."
                ]
            }
        ],
        "v3": "contattato",
        "auxiliary": "avere"
    },
    {
        "word": "lamentarsi",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "😠",
        "form": "verb",
        "group": "riflessivo",
        "classification": "regular",
        "aspect": "action",
        "subtext": "lamentarsi di",
        "synonyms": ["fare un reclamo"],
        "definitions": [
            {
                "text": "Esprimere insoddisfazione per qualcosa.",
                "examples": [
                    "Si è lamentata del rumore proveniente dall'appartamento di sopra."
                ]
            }
        ],
        "v3": "lamentato",
        "auxiliary": "essere"
    },
    {
        "word": "discutere",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "🗣️",
        "form": "verb",
        "group": "ere",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "discutere un argomento / discutere in dettaglio",
        "definitions": [
            {
                "text": "Parlare di qualcosa in dettaglio.",
                "examples": [
                    "Abbiamo discusso i nuovi termini del contratto per due ore."
                ]
            }
        ],
        "v3": "discusso",
        "auxiliary": "avere"
    },
    {
        "word": "presentare",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📊",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "presentare dati / presentare a un cliente",
        "definitions": [
            {
                "text": "Mostrare o spiegare qualcosa a un gruppo.",
                "examples": [
                    "Presenta i risultati delle vendite al consiglio ogni trimestre."
                ]
            }
        ],
        "v3": "presentato",
        "auxiliary": "avere"
    },
    {
        "word": "accettare",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "✅",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "accettare un'offerta / accettare una sfida",
        "definitions": [
            {
                "text": "Accettare di prendere o ricevere qualcosa.",
                "examples": [
                    "Ha accettato l'offerta di lavoro dopo aver negoziato lo stipendio."
                ]
            }
        ],
        "v3": "accettato",
        "auxiliary": "avere"
    },
    {
        "word": "rifiutare",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "❌",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "rifiutare un'offerta / rifiutare il permesso",
        "definitions": [
            {
                "text": "Dire di no a qualcosa; declinare.",
                "examples": [
                    "Ha rifiutato di firmare il contratto senza consulenza legale."
                ]
            }
        ],
        "v3": "rifiutato",
        "auxiliary": "avere"
    },
    {
        "word": "perdere peso",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "⚖️",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "cercare di perdere peso",
        "synonyms": ["perdere qualche chilo"],
        "definitions": [
            {
                "text": "Diventare più leggeri; ridurre il peso corporeo.",
                "examples": [
                    "Ha perso dieci chili dopo aver cambiato dieta e stile di vita."
                ]
            }
        ],
        "v3": "perso peso",
        "auxiliary": "avere"
    },
    {
        "word": "aumentare",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📈",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "aumentare di / aumentare rapidamente",
        "definitions": [
            {
                "text": "Diventare o rendere qualcosa più grande.",
                "examples": [
                    "L'azienda ha aumentato gli stipendi del tre per cento."
                ]
            }
        ],
        "v3": "aumentato",
        "auxiliary": "avere"
    },
    {
        "word": "ridurre",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📉",
        "form": "verb",
        "group": "-urre",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "ridurre i costi / ridurre lo stress",
        "definitions": [
            {
                "text": "Rendere qualcosa più piccolo per dimensioni o quantità.",
                "examples": [
                    "Hanno ridotto il team da dodici a otto membri."
                ]
            }
        ],
        "v3": "ridotto",
        "auxiliary": "avere"
    },
    {
        "word": "migliorare le competenze",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📈",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "",
        "synonyms": ["migliorare le prestazioni", "migliorarsi"],
        "definitions": [
            {
                "text": "Diventare o rendere qualcosa migliore.",
                "examples": [
                    "Ha migliorato notevolmente le sue capacità di parlare in pubblico."
                ]
            }
        ],
        "v3": "migliorato le competenze",
        "auxiliary": "avere"
    },
    {
        "word": "fornire",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🤲",
        "form": "verb",
        "group": "ire",
        "classification": "regular",
        "aspect": "action",
        "subtext": "fornire supporto / fornire un servizio",
        "definitions": [
            {
                "text": "Dare o fornire qualcosa a qualcuno.",
                "examples": [
                    "L'azienda fornisce a tutti i dipendenti un computer portatile."
                ]
            }
        ],
        "v3": "fornito",
        "auxiliary": "avere"
    },
    {
        "word": "risolvere",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🧩",
        "form": "verb",
        "group": "ere",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "risolvere un mistero",
        "synonyms": ["trovare una soluzione"],
        "definitions": [
            {
                "text": "Trovare una risposta a un problema.",
                "examples": [
                    "Risolve rapidamente i problemi sotto pressione."
                ]
            }
        ],
        "v3": "risolto",
        "auxiliary": "avere"
    },
    {
        "word": "condividere",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "ere",
        "classification": "regular",
        "aspect": "action",
        "subtext": "condividere informazioni / condividere un pasto / condividere idee",
        "definitions": [
            {
                "text": "Dividere qualcosa tra le persone; dire agli altri.",
                "examples": [
                    "Lunedì ha condiviso il rapporto con tutto il team."
                ]
            }
        ],
        "v3": "condiviso",
        "auxiliary": "avere"
    },
    {
        "word": "unirsi",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "➕",
        "form": "verb",
        "group": "riflessivo",
        "classification": "regular",
        "aspect": "action",
        "subtext": "unirsi a una squadra",
        "synonyms": ["entrare in azienda"],
        "definitions": [
            {
                "text": "Diventare membro di un gruppo o di un'organizzazione.",
                "examples": [
                    "È entrato in azienda come tirocinante sette anni fa."
                ]
            }
        ],
        "v3": "unito",
        "auxiliary": "essere"
    },
    {
        "word": "ricevere",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📩",
        "form": "verb",
        "group": "ere",
        "classification": "regular",
        "aspect": "action",
        "subtext": "ricevere una lettera / ricevere un pagamento",
        "definitions": [
            {
                "text": "Ricevere qualcosa che ti viene dato o presentato.",
                "examples": [
                    "Ha ricevuto l'offerta di lavoro via email un venerdì pomeriggio."
                ]
            }
        ],
        "v3": "ricevuto",
        "auxiliary": "avere"
    },
    {
        "word": "contenere",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📦",
        "form": "verb",
        "group": "ere",
        "classification": "irregular",
        "aspect": "stative",
        "subtext": "contenere informazioni",
        "synonyms": ["il file contiene"],
        "definitions": [
            {
                "text": "Avere qualcosa all'interno; includere.",
                "examples": [
                    "Il rapporto contiene proiezioni finanziarie dettagliate."
                ]
            }
        ],
        "v3": "contenuto",
        "auxiliary": "avere"
    },
    {
        "word": "pianificare",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📅",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "pianificare un viaggio / pianificare in anticipo",
        "definitions": [
            {
                "text": "Pensare e organizzare azioni future.",
                "examples": [
                    "Pianifica l'intera settimana ogni domenica sera."
                ]
            }
        ],
        "v3": "pianificato",
        "auxiliary": "avere"
    },
    {
        "word": "preparare",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📝",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "preparare una riunione / preparare un rapporto",
        "definitions": [
            {
                "text": "Rendere qualcosa pronto; prepararsi.",
                "examples": [
                    "Prepara un ordine del giorno dettagliato prima di ogni riunione."
                ]
            }
        ],
        "v3": "preparato",
        "auxiliary": "avere"
    },
    {
        "word": "fallire",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "❌",
        "form": "verb",
        "group": "ire",
        "classification": "regular",
        "aspect": "action",
        "subtext": "fallire un esame",
        "synonyms": ["mancare di fare"],
        "definitions": [
            {
                "text": "Non riuscire; non fare qualcosa di richiesto.",
                "examples": [
                    "Ha fallito il primo esame ma ha superato il secondo tentativo."
                ]
            }
        ],
        "v3": "fallito",
        "auxiliary": "avere"
    },
    {
        "word": "avere successo",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏆",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "avere successo in qualcosa",
        "synonyms": ["riuscire a fare"],
        "definitions": [
            {
                "text": "Ottenere ciò che si era prefissati.",
                "examples": [
                    "È riuscito a concludere l'affare dopo tre mesi."
                ]
            }
        ],
        "v3": "avuto successo",
        "auxiliary": "avere"
    },
    {
        "word": "essere d'accordo",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "essere d'accordo con qualcuno",
        "synonyms": ["andare d'accordo"],
        "definitions": [
            {
                "text": "Avere la stessa opinione; dire di sì a qualcosa.",
                "examples": [
                    "Hanno concordato di incontrarsi di nuovo il martedì successivo."
                ]
            }
        ],
        "v3": "stato d'accordo",
        "auxiliary": "essere"
    },
    {
        "word": "sostituire",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🔄",
        "form": "verb",
        "group": "ire",
        "classification": "regular",
        "aspect": "action",
        "subtext": "sostituire qualcosa",
        "synonyms": ["essere sostituito da"],
        "definitions": [
            {
                "text": "Prendere il posto di qualcuno o qualcosa.",
                "examples": [
                    "Il nuovo software sostituirà il vecchio sistema l'anno prossimo."
                ]
            }
        ],
        "v3": "sostituito",
        "auxiliary": "avere"
    },
    {
        "word": "cercare",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "🔍",
        "form": "verb",
        "group": "are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "cercare lavoro / cercare una soluzione",
        "definitions": [
            {
                "text": "Tentare di trovare qualcosa.",
                "examples": [
                    "Sta cercando un nuovo lavoro con un migliore equilibrio tra vita privata e professionale."
                ]
            }
        ],
        "v3": "cercato",
        "auxiliary": "avere"
    },
    {
        "word": "disconnettersi",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "🚪",
        "form": "verb",
        "group": "riflessivo",
        "classification": "regular",
        "aspect": "action",
        "subtext": "uscire da un account",
        "definitions": [
            {
                "text": "Disconnettersi da un sistema informatico.",
                "examples": [
                    "Si prega di disconnettersi dal sistema quando si lascia l'ufficio."
                ]
            }
        ],
        "v3": "disconnesso",
        "auxiliary": "essere"
    }
];
    const lang = "it";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
