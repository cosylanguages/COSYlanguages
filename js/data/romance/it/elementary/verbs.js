(function() {
    const data = [
    {
        "word": "danzare",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "💃",
        "form": "verb",
        "group": "-are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "danzare con qualcuno / andare a danzare",
        "definitions": [
            {
                "text": "Muoversi a ritmo di musica.",
                "examples": [
                    "Abbiamo danzato tutta la notte."
                ]
            }
        ],
        "v3": "danzato"
    },
    {
        "word": "considerare",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🤔",
        "form": "verb",
        "group": "-are",
        "classification": "regular",
        "aspect": "both",
        "subtext": "considerare un'opzione / considerare qualcuno",
        "definitions": [
            {
                "text": "Esaminare attentamente qualcosa.",
                "examples": [
                    "Dobbiamo considerare tutte le opzioni."
                ]
            }
        ],
        "v3": "considerato"
    },
    {
        "word": "apparire",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👻",
        "form": "verb",
        "group": "-ire",
        "classification": "irregular",
        "aspect": "stative",
        "subtext": "apparire in TV / apparire improvvisamente",
        "definitions": [
            {
                "text": "Diventare visibile.",
                "examples": [
                    "Il sole comincia ad apparire."
                ]
            }
        ],
        "v3": "apparso"
    },
    {
        "word": "servire",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "emoji": "🍽️",
        "form": "verb",
        "group": "-ire",
        "classification": "regular",
        "aspect": "action",
        "subtext": "servire la cena / servire a qualcosa",
        "definitions": [
            {
                "text": "Presentare un piatto a qualcuno o essere utile.",
                "examples": [
                    "La cena è servita."
                ]
            }
        ],
        "v3": "servito"
    },
    {
        "word": "aspettarsi",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💭",
        "form": "verb",
        "group": "-are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "aspettarsi il peggio / aspettarsi qualcuno",
        "definitions": [
            {
                "text": "Rimanere in attesa o prevedere qualcosa.",
                "examples": [
                    "Mi aspetto che arrivino presto."
                ]
            }
        ],
        "v3": "aspettato"
    },
    {
        "word": "costruire",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🏗️",
        "form": "verb",
        "group": "-ire (isc)",
        "classification": "regular",
        "aspect": "action",
        "subtext": "costruire una casa / costruire un futuro",
        "definitions": [
            {
                "text": "Edificare o assemblare le parti di qualcosa.",
                "examples": [
                    "Stanno costruendo un nuovo palazzo."
                ]
            }
        ],
        "v3": "costruito"
    },
    {
        "word": "raggiungere",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🏁",
        "form": "verb",
        "group": "-ere",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "raggiungere un obiettivo / raggiungere la vetta",
        "definitions": [
            {
                "text": "Arrivare a un luogo o a un livello.",
                "examples": [
                    "Abbiamo raggiunto la cima della montagna."
                ]
            }
        ],
        "v3": "raggiunto"
    },
    {
        "word": "uccidere",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "⚔️",
        "form": "verb",
        "group": "-ere",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "uccidere il tempo",
        "definitions": [
            {
                "text": "Causare la morte di qualcuno o qualcosa.",
                "examples": [
                    "Il freddo ha ucciso le piante."
                ]
            }
        ],
        "v3": "ucciso"
    },
    {
        "word": "rimanere",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "⏳",
        "form": "verb",
        "group": "-ere",
        "classification": "irregular",
        "aspect": "stative",
        "subtext": "rimanere a casa / rimanere calmi",
        "definitions": [
            {
                "text": "Restare in un luogo o in una condizione.",
                "examples": [
                    "Rimango a casa stasera."
                ]
            }
        ],
        "v3": "rimasto"
    },
    {
        "word": "suggerire",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💡",
        "form": "verb",
        "group": "-ire (isc)",
        "classification": "regular",
        "aspect": "action",
        "subtext": "suggerire un'idea / suggerire di fare",
        "definitions": [
            {
                "text": "Proporre un'idea o un'azione.",
                "examples": [
                    "Suggerisco di partire ora."
                ]
            }
        ],
        "v3": "suggerito"
    },
    {
        "word": "alzare",
        "level": "elementary",
        "theme": "family_life_A1",
        "emoji": "🙋",
        "form": "verb",
        "group": "-are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "alzare la mano / alzarsi presto",
        "definitions": [
            {
                "text": "Spostare qualcosa verso l'alto.",
                "examples": [
                    "Alza la mano se hai una domanda."
                ]
            }
        ],
        "v3": "alzato"
    },
    {
        "word": "richiedere",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "📜",
        "form": "verb",
        "group": "-ere",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "richiedere aiuto / richiedere il passaporto",
        "definitions": [
            {
                "text": "Domandare qualcosa in modo formale o necessario.",
                "examples": [
                    "Questo lavoro richiede molta pazienza."
                ]
            }
        ],
        "v3": "richiesto"
    },
    {
        "word": "riferire",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📋",
        "form": "verb",
        "group": "-ire (isc)",
        "classification": "regular",
        "aspect": "action",
        "subtext": "riferire un problema / riferire a qualcuno",
        "definitions": [
            {
                "text": "Riportare un'informazione.",
                "examples": [
                    "Deve riferire quello che ha visto."
                ]
            }
        ],
        "v3": "riferito"
    },
    {
        "word": "decidere",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "⚖️",
        "form": "verb",
        "group": "-ere",
        "classification": "irregular",
        "aspect": "stative",
        "subtext": "decidere di / decidersi",
        "definitions": [
            {
                "text": "Prendere una risoluzione o fare una scelta.",
                "examples": [
                    "Ho deciso di cambiare lavoro."
                ]
            }
        ],
        "v3": "deciso"
    },
    {
        "word": "spiegare",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👨‍🏫",
        "form": "verb",
        "group": "-are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "spiegare il problema / spiegare come",
        "definitions": [
            {
                "text": "Far capire qualcosa tramite spiegazioni.",
                "examples": [
                    "L'insegnante spiega la lezione."
                ]
            }
        ],
        "v3": "spiegato"
    },
    {
        "word": "sviluppare",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💻",
        "form": "verb",
        "group": "-are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "sviluppare un progetto / sviluppare una competenza",
        "definitions": [
            {
                "text": "Far crescere o progredire qualcosa.",
                "examples": [
                    "Lei sviluppa un nuovo software."
                ]
            }
        ],
        "v3": "sviluppato"
    },
    {
        "word": "sostenere",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "-ere",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "sostenere un amico / sostenere un esame",
        "definitions": [
            {
                "text": "Aiutare o incoraggiare qualcuno.",
                "examples": [
                    "La mia famiglia sostiene le mie decisioni."
                ]
            }
        ],
        "v3": "sostenuto",
        "tenses": {
            "present_simple": {
                "positive": ["sostengo", "sostieni", "sostiene", "sostiene", "sosteniamo", "sostenete", "sostengono"],
                "negative": ["non sostengo", "non sostieni", "non sostiene", "non sostiene", "non sosteniamo", "non sostenete", "non sostengono"]
            }
        }
    },
    {
        "word": "colpire",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🥊",
        "form": "verb",
        "group": "-ire (isc)",
        "classification": "regular",
        "aspect": "action",
        "subtext": "colpire la palla / colpire il bersaglio",
        "definitions": [
            {
                "text": "Toccare qualcosa con forza improvvisa.",
                "examples": [
                    "Ha colpito la palla con la mazza."
                ]
            }
        ],
        "v3": "colpito"
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
                "text": "Creare o fabbricare qualcosa.",
                "examples": [
                    "La fabbrica produce auto."
                ]
            }
        ],
        "v3": "prodotto"
    },
    {
        "word": "affrontare",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👤",
        "form": "verb",
        "group": "-are",
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
        "v3": "affrontato"
    },
    {
        "word": "coprire",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🧥",
        "form": "verb",
        "group": "-ire",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "coprire con una coperta / coprire una notizia",
        "definitions": [
            {
                "text": "Mettere qualcosa sopra qualcos'altro.",
                "examples": [
                    "Ha coperto il tavolo con una tovaglia."
                ]
            }
        ],
        "v3": "coperto"
    },
    {
        "word": "descrivere",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📝",
        "form": "verb",
        "group": "-ere",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "descrivere qualcuno / descrivere una situazione",
        "definitions": [
            {
                "text": "Dire com'è qualcuno o qualcosa.",
                "examples": [
                    "Puoi descrivere l'uomo che hai visto?"
                ]
            }
        ],
        "v3": "descritto"
    },
    {
        "word": "catturare",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🎣",
        "form": "verb",
        "group": "-are",
        "classification": "regular",
        "aspect": "action",
        "subtext": "catturare la palla / catturare un ladro",
        "definitions": [
            {
                "text": "Prendere possesso di qualcosa che si muove.",
                "examples": [
                    "Cerca di catturare la palla!"
                ]
            }
        ],
        "v3": "catturato"
    },
    {
        "word": "fare domanda",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "📝",
        "form": "verb",
        "group": "locuzione",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "fare domanda per un lavoro",
        "definitions": [
            {
                "text": "Fare una richiesta formale per un lavoro.",
                "examples": [
                    "Ha fatto domanda per la posizione di manager."
                ]
            }
        ],
        "v3": "fatto domanda"
    },
    {
        "word": "assumere",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "-ere",
        "classification": "irregular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Dare un lavoro a qualcuno.",
                "examples": [
                    "L'azienda ha assunto due nuove persone."
                ]
            }
        ],
        "v3": "assunto"
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
        "definitions": [
            {
                "text": "Smettere di lavorare perché si è raggiunta una certa età.",
                "examples": [
                    "Mio padre andrà in pensione l'anno prossimo."
                ]
            }
        ],
        "v3": "andato in pensione"
    },
    {
        "word": "permettersi",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💰",
        "form": "verb",
        "group": "riflessivo",
        "classification": "regular",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Avere abbastanza denaro per pagare qualcosa.",
                "examples": [
                    "Non possiamo permetterci un appartamento più grande."
                ]
            }
        ],
        "v3": "permesso"
    },
    {
        "word": "litigare",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🗣️",
        "form": "verb",
        "group": "-are",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Essere in disaccordo con qualcuno in modo arrabbiato.",
                "examples": [
                    "A volte litigano per i soldi."
                ]
            }
        ],
        "v3": "litigato"
    },
    {
        "word": "fidarsi",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "riflessivo",
        "classification": "regular",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Credere che qualcuno sia onesto e affidabile.",
                "examples": [
                    "Devi fidarti del tuo partner."
                ]
            }
        ],
        "v3": "fidato"
    },
    {
        "word": "essere d'accordo",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "👍",
        "form": "verb",
        "group": "locuzione",
        "classification": "irregular",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Avere la stessa opinione di qualcun altro.",
                "examples": [
                    "Non siamo sempre d'accordo."
                ]
            }
        ],
        "v3": "stato d'accordo"
    },
    {
        "word": "scendere a compromessi",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "locuzione",
        "classification": "irregular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Accettare meno di quanto si desidera in modo che entrambe le parti siano soddisfatte.",
                "examples": [
                    "Le buone relazioni hanno bisogno di scendere a compromessi."
                ]
            }
        ],
        "v3": "sceso a compromessi"
    },
    {
        "word": "riciclare",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "♻️",
        "form": "verb",
        "group": "-are",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Trattare materiali usati in modo che possano essere riutilizzati.",
                "examples": [
                    "Ricicliamo carta e vetro."
                ]
            }
        ],
        "v3": "riciclato"
    }
];
    const lang = "it";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
