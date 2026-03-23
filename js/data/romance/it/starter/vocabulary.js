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
        "form": "noun"
    },
    {
        "word": "riso",
        "level": "starter",
        "theme": "basic_foods_A0",
        "article": "il",
        "emoji": "🍚",
        "form": "noun"
    },
    {
        "word": "carne",
        "level": "starter",
        "theme": "basic_foods_A0",
        "article": "la",
        "emoji": "🥩",
        "form": "noun"
    },
    {
        "word": "cibo",
        "level": "starter",
        "theme": "basic_foods_A0",
        "article": "il",
        "emoji": "🍲",
        "form": "noun"
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
        "form": "noun"
    },
    {
        "word": "cena",
        "level": "starter",
        "theme": "meals_of_the_day_A0",
        "article": "la",
        "emoji": "🍽️",
        "form": "noun"
    },
    {
        "word": "pranzo",
        "level": "starter",
        "theme": "meals_of_the_day_A0",
        "article": "il",
        "emoji": "🍱",
        "form": "noun"
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
        "word": "alto",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "basso",
        "oppositeEmoji": "📏"
    },
    {
        "word": "basso",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "alto",
        "oppositeEmoji": "🗼"
    },
    {
        "word": "giovane",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "vecchio",
        "oppositeEmoji": "👴"
    },
    {
        "word": "vecchio",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "giovane",
        "oppositeEmoji": "👶"
    },
    {
        "word": "buono",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "cattivo",
        "oppositeEmoji": "👎"
    },
    {
        "word": "cattivo",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "buono",
        "oppositeEmoji": "👍"
    },
    {
        "word": "facile",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "difficile",
        "oppositeEmoji": "❌"
    },
    {
        "word": "difficile",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "facile",
        "oppositeEmoji": "✅"
    },
    {
        "word": "grande",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "piccolo",
        "oppositeEmoji": "🐭"
    },
    {
        "word": "piccolo",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "grande",
        "oppositeEmoji": "🐘"
    },
    {
        "word": "felice",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "emoji": "😊",
        "form": "adjective"
    },
    {
        "word": "stanco",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "emoji": "😫",
        "form": "adjective"
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
        "form": "noun"
    },
    {
        "word": "caro",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "economico",
        "oppositeEmoji": "🏷️"
    },
    {
        "word": "economico",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "caro",
        "oppositeEmoji": "💎"
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
        "form": "adverb"
    }
];
    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
