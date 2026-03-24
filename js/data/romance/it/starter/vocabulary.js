(function() {
    const data = [
    {
        "word": "medico",
        "level": "starter",
        "theme": "job_titles_professions_A0",
        "article": "il",
        "numberPlural": "2 medico",
        "answer": "due medici",
        "emoji": "🧑‍⚕️",
        "form": "noun",
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
        "theme": "body_parts_A0",
        "article": "il",
        "numberPlural": "2 piede",
        "answer": "due piedi",
        "emoji": "🦶",
        "form": "noun",
        "plural": "piedi"
    },
    {
        "word": "insegnante",
        "level": "starter",
        "theme": "job_titles_professions_A0",
        "article": "l'",
        "emoji": "🧑‍🏫",
        "form": "noun",
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
        "theme": "basic_foods_A0",
        "article": "la",
        "emoji": "🍝",
        "form": "noun",
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
        "theme": "basic_foods_A0",
        "article": "la",
        "form": "noun",
        "plural": "lasagne"
    },
    {
        "word": "mela",
        "level": "starter",
        "theme": "basic_foods_A0",
        "article": "la",
        "emoji": "🍎",
        "numberPlural": "4 mela",
        "answer": "quattro mele",
        "form": "noun",
        "plural": "mele"
    },
    {
        "word": "pane",
        "level": "starter",
        "theme": "basic_foods_A0",
        "article": "il",
        "emoji": "🍞",
        "form": "noun",
        "plural": "pani"
    },
    {
        "word": "uovo",
        "level": "starter",
        "theme": "basic_foods_A0",
        "article": "l'",
        "emoji": "🥚",
        "form": "noun",
        "plural": "uova"
    },
    {
        "word": "latte",
        "level": "starter",
        "theme": "basic_foods_A0",
        "article": "il",
        "emoji": "🥛",
        "form": "noun",
        "plural": "latti"
    },
    {
        "word": "riso",
        "level": "starter",
        "theme": "basic_foods_A0",
        "article": "il",
        "emoji": "🍚",
        "form": "noun",
        "plural": "risi"
    },
    {
        "word": "carne",
        "level": "starter",
        "theme": "basic_foods_A0",
        "article": "la",
        "emoji": "🥩",
        "form": "noun",
        "plural": "carni"
    },
    {
        "word": "cibo",
        "level": "starter",
        "theme": "basic_foods_A0",
        "article": "il",
        "emoji": "🍲",
        "form": "noun",
        "plural": "cibi"
    },
    {
        "word": "caffè",
        "level": "starter",
        "theme": "drinks_A0",
        "article": "il",
        "emoji": "☕",
        "form": "noun",
        "plural": "caffè"
    },
    {
        "word": "tè",
        "level": "starter",
        "theme": "drinks_A0",
        "article": "il",
        "emoji": "🍵",
        "form": "noun",
        "plural": "tè"
    },
    {
        "word": "succo",
        "level": "starter",
        "theme": "drinks_A0",
        "article": "il",
        "emoji": "🧃",
        "form": "noun",
        "plural": "succhi"
    },
    {
        "word": "acqua",
        "level": "starter",
        "theme": "drinks_A0",
        "article": "l'",
        "emoji": "🚰",
        "form": "noun",
        "plural": "acque"
    },
    {
        "word": "colazione",
        "level": "starter",
        "theme": "meals_of_the_day_A0",
        "article": "la",
        "emoji": "🍳",
        "form": "noun",
        "plural": "colazioni"
    },
    {
        "word": "cena",
        "level": "starter",
        "theme": "meals_of_the_day_A0",
        "article": "la",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "cene"
    },
    {
        "word": "pranzo",
        "level": "starter",
        "theme": "meals_of_the_day_A0",
        "article": "il",
        "emoji": "🍱",
        "form": "noun",
        "plural": "pranzi"
    },
    {
        "word": "parco",
        "level": "starter",
        "theme": "local_places_services_A0",
        "article": "il",
        "emoji": "🌳",
        "form": "noun",
        "plural": "parchi"
    },
    {
        "word": "scuola",
        "level": "starter",
        "theme": "local_places_services_A0",
        "article": "la",
        "emoji": "🏫",
        "form": "noun",
        "plural": "scuole"
    },
    {
        "word": "negozio",
        "level": "starter",
        "theme": "local_places_services_A0",
        "article": "il",
        "emoji": "🛒",
        "form": "noun",
        "plural": "negozi"
    },
    {
        "word": "maglietta",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "article": "la",
        "emoji": "👕",
        "form": "noun",
        "plural": "magliette"
    },
    {
        "word": "pantaloni",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "article": "i",
        "emoji": "👖",
        "form": "noun",
        "plural": "pantaloni"
    },
    {
        "word": "scarpe",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "article": "le",
        "emoji": "👟",
        "form": "noun",
        "plural": "scarpe"
    },
    {
        "word": "cappello",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "article": "il",
        "emoji": "👒",
        "form": "noun",
        "plural": "cappelli"
    },
    {
        "word": "sedia",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "article": "la",
        "emoji": "🪑",
        "form": "noun",
        "plural": "sedie"
    },
    {
        "word": "tavolo",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "article": "il",
        "emoji": "🪑",
        "form": "noun",
        "plural": "tavoli"
    },
    {
        "word": "letto",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "article": "il",
        "emoji": "🛏️",
        "form": "noun",
        "plural": "letti"
    },
    {
        "word": "chiave",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "article": "la",
        "emoji": "🔑",
        "form": "noun",
        "plural": "chiavi"
    },
    {
        "word": "telefono",
        "level": "starter",
        "theme": "basic_technology_devices_A0",
        "article": "il",
        "emoji": "📱",
        "form": "noun",
        "plural": "telefoni"
    },
    {
        "word": "libro",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "article": "il",
        "emoji": "📖",
        "form": "noun",
        "plural": "libri"
    },
    {
        "word": "borsa",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "article": "la",
        "emoji": "👜",
        "form": "noun",
        "plural": "borse"
    },
    {
        "word": "penna",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "article": "la",
        "emoji": "🖊️",
        "form": "noun",
        "plural": "penne"
    },
    {
        "word": "gatto",
        "level": "starter",
        "theme": "animals_A0",
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
        "theme": "animals_A0",
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
        "theme": "animals_A0",
        "article": "l'",
        "emoji": "🐦",
        "form": "noun",
        "plural": "uccelli"
    },
    {
        "word": "pesce",
        "level": "starter",
        "theme": "animals_A0",
        "article": "il",
        "emoji": "🐟",
        "form": "noun",
        "plural": "pesci"
    },
    {
        "word": "testa",
        "level": "starter",
        "theme": "body_parts_A0",
        "article": "la",
        "emoji": "👤",
        "form": "noun",
        "plural": "teste"
    },
    {
        "word": "mano",
        "level": "starter",
        "theme": "body_parts_A0",
        "article": "la",
        "emoji": "✋",
        "form": "noun",
        "plural": "mani"
    },
    {
        "word": "gamba",
        "level": "starter",
        "theme": "body_parts_A0",
        "article": "la",
        "emoji": "🦵",
        "form": "noun",
        "plural": "gambe"
    },
    {
        "word": "occhio",
        "level": "starter",
        "theme": "body_parts_A0",
        "article": "l'",
        "emoji": "👁️",
        "form": "noun",
        "plural": "occhi"
    },
    {
        "word": "naso",
        "level": "starter",
        "theme": "body_parts_A0",
        "article": "il",
        "emoji": "👃",
        "form": "noun",
        "plural": "nasi"
    },
    {
        "word": "bocca",
        "level": "starter",
        "theme": "body_parts_A0",
        "article": "la",
        "emoji": "👄",
        "form": "noun",
        "plural": "bocche"
    },
    {
        "word": "orecchio",
        "level": "starter",
        "theme": "body_parts_A0",
        "article": "l'",
        "emoji": "👂",
        "form": "noun",
        "plural": "orecchi"
    },
    {
        "word": "madre",
        "level": "starter",
        "theme": "immediate_family_A0",
        "article": "la",
        "emoji": "👩",
        "form": "noun",
        "plural": "madri"
    },
    {
        "word": "padre",
        "level": "starter",
        "theme": "immediate_family_A0",
        "article": "il",
        "emoji": "👨",
        "form": "noun",
        "plural": "padri"
    },
    {
        "word": "famiglia",
        "level": "starter",
        "theme": "immediate_family_A0",
        "article": "la",
        "emoji": "👪",
        "form": "noun",
        "plural": "famiglie"
    },
    {
        "word": "amico",
        "level": "starter",
        "theme": "immediate_family_A0",
        "article": "l'",
        "emoji": "👫",
        "form": "noun",
        "plural": "amici"
    },
    {
        "word": "partner",
        "level": "starter",
        "theme": "marital_status_A0",
        "article": "il",
        "emoji": "💑",
        "form": "noun",
        "plural": "partner"
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
        "theme": "rooms_of_a_home_A0",
        "article": "la",
        "emoji": "🏡",
        "form": "noun",
        "plural": "case",
        "subtext": "a casa, tornare a casa"
    },
    {
        "word": "appartamento",
        "level": "starter",
        "theme": "rooms_of_a_home_A0",
        "article": "l'",
        "emoji": "🏢",
        "form": "noun",
        "plural": "appartamenti"
    },
    {
        "word": "ufficio",
        "level": "starter",
        "theme": "rooms_indoor_spaces_A0",
        "article": "l'",
        "emoji": "🏢",
        "form": "noun",
        "plural": "uffici"
    },
    {
        "word": "macchina",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "article": "la",
        "emoji": "🚗",
        "form": "noun",
        "plural": "macchine"
    },
    {
        "word": "autobus",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "article": "l'",
        "emoji": "🚌",
        "form": "noun",
        "plural": "autobus"
    },
    {
        "word": "treno",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "article": "il",
        "emoji": "🚆",
        "form": "noun",
        "plural": "treni"
    },
    {
        "word": "denaro",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "article": "il",
        "emoji": "💰",
        "form": "noun",
        "plural": "denari"
    },
    {
        "word": "mattina",
        "level": "starter",
        "theme": "times_day_A0",
        "article": "la",
        "emoji": "🌅",
        "form": "noun",
        "plural": "mattine"
    },
    {
        "word": "sera",
        "level": "starter",
        "theme": "times_day_A0",
        "article": "la",
        "emoji": "🌆",
        "form": "noun",
        "plural": "sere"
    },
    {
        "word": "giorno",
        "level": "starter",
        "theme": "times_day_A0",
        "article": "il",
        "emoji": "☀️",
        "form": "noun",
        "plural": "giorni"
    },
    {
        "word": "settimana",
        "level": "starter",
        "theme": "times_day_A0",
        "article": "la",
        "emoji": "📅",
        "form": "noun",
        "plural": "settimane"
    },
    {
        "word": "ogni giorno",
        "level": "starter",
        "theme": "times_day_A0",
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
        "subtext": "salario",
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
        "subtext": "meeting",
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
        "theme": "rooms_of_a_home_A0",
        "article": "la",
        "emoji": "🚪",
        "form": "noun",
        "plural": "stanze",
        "subtext": "camera",
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
        "theme": "rooms_of_a_home_A0",
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
        "subtext": "rapporto, legame",
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
        "theme": "travel_vocabulary_basics_A0",
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
        "theme": "travel_vocabulary_basics_A0",
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
        "theme": "times_day_A0",
        "article": "il",
        "emoji": "🗓️",
        "form": "noun",
        "plural": "fine settimana",
        "subtext": "weekend",
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
        "emoji": "🎮",
        "form": "noun",
        "definitions": [
            {
                "text": "Momento in cui non lavori e puoi fare ciò che vuoi.",
                "examples": [
                    "Leggo libri nel mio tempo libero."
                ]
            }
        ]
    }
];
    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
