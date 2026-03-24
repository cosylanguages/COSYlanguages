(function() {
    const data = [
    {
        "word": "danzare",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "form": "verb",
        "group": "-are",
        "classification": "regular",
        "past_participle": "danzato"
    },
    {
        "word": "considerare",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🤔",
        "form": "verb",
        "group": "-are",
        "classification": "regular",
        "past_participle": "considerato"
    },
    {
        "word": "apparire",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👻",
        "form": "verb",
        "group": "-ire",
        "classification": "irregular",
        "past_participle": "apparso"
    },
    {
        "word": "servire",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "emoji": "🍽️",
        "form": "verb",
        "group": "-ire",
        "classification": "regular",
        "past_participle": "servito"
    },
    {
        "word": "aspettarsi",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💭",
        "form": "verb",
        "group": "-are",
        "classification": "regular",
        "past_participle": "aspettato"
    },
    {
        "word": "costruire",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🏗️",
        "form": "verb",
        "group": "-ire (isc)",
        "classification": "regular",
        "past_participle": "costruito"
    },
    {
        "word": "raggiungere",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🏁",
        "form": "verb",
        "group": "-ere",
        "classification": "irregular",
        "past_participle": "raggiunto"
    },
    {
        "word": "uccidere",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "⚔️",
        "form": "verb",
        "group": "-ere",
        "classification": "irregular",
        "past_participle": "ucciso"
    },
    {
        "word": "rimanere",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "⏳",
        "form": "verb",
        "group": "-ere",
        "classification": "irregular",
        "past_participle": "rimasto"
    },
    {
        "word": "suggerire",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💡",
        "form": "verb",
        "group": "-ire (isc)",
        "classification": "regular",
        "past_participle": "suggerito"
    },
    {
        "word": "alzare",
        "level": "elementary",
        "theme": "family_life_A1",
        "emoji": "🙋",
        "form": "verb",
        "group": "-are",
        "classification": "regular",
        "past_participle": "alzato"
    },
    {
        "word": "richiedere",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "📜",
        "form": "verb",
        "group": "-ere",
        "classification": "irregular",
        "past_participle": "richiesto"
    },
    {
        "word": "riferire",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📋",
        "form": "verb",
        "group": "-ire (isc)",
        "classification": "regular",
        "past_participle": "riferito"
    },
    {
        "word": "decidere",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "⚖️",
        "form": "verb",
        "group": "-ere",
        "classification": "irregular",
        "past_participle": "deciso"
    },
    {
        "word": "spiegare",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👨‍🏫",
        "form": "verb",
        "group": "-are",
        "classification": "regular",
        "past_participle": "spiegato"
    },
    {
        "word": "sviluppare",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💻",
        "form": "verb",
        "group": "-are",
        "classification": "regular",
        "past_participle": "sviluppato"
    },
    {
        "word": "sostenere",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Aiutare o incoraggiare qualcuno.",
                "examples": [
                    "La mia famiglia sostiene le mie decisioni."
                ]
            }
        ],
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
        "past_participle": "colpito"
    },
    {
        "word": "produrre",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏭",
        "form": "verb",
        "group": "-urre",
        "classification": "irregular",
        "past_participle": "prodotto"
    },
    {
        "word": "affrontare",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👤",
        "form": "verb",
        "group": "-are",
        "classification": "regular",
        "past_participle": "affrontato"
    },
    {
        "word": "coprire",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🧥",
        "form": "verb",
        "group": "-ire",
        "classification": "irregular",
        "past_participle": "coperto"
    },
    {
        "word": "descrivere",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📝",
        "form": "verb",
        "group": "-ere",
        "classification": "irregular",
        "past_participle": "descritto"
    },
    {
        "word": "catturare",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🎣",
        "form": "verb",
        "group": "-are",
        "classification": "regular",
        "past_participle": "catturato"
    },
    {
        "word": "fare domanda",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "📝",
        "form": "verb",
        "definitions": [
            {
                "text": "Fare una richiesta formale per un lavoro.",
                "examples": [
                    "Ha fatto domanda per la posizione di manager."
                ]
            }
        ]
    },
    {
        "word": "assumere",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Dare un lavoro a qualcuno.",
                "examples": [
                    "L'azienda ha assunto due nuove persone."
                ]
            }
        ]
    },
    {
        "word": "andare in pensione",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👴",
        "form": "verb",
        "definitions": [
            {
                "text": "Smettere di lavorare perché si è raggiunta una certa età.",
                "examples": [
                    "Mio padre andrà in pensione l'anno prossimo."
                ]
            }
        ]
    },
    {
        "word": "permettersi",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere abbastanza denaro per pagare qualcosa.",
                "examples": [
                    "Non possiamo permetterci un appartamento più grande."
                ]
            }
        ]
    },
    {
        "word": "litigare",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🗣️",
        "form": "verb",
        "definitions": [
            {
                "text": "Essere in disaccordo con qualcuno in modo arrabbiato.",
                "examples": [
                    "A volte litigano per i soldi."
                ]
            }
        ]
    },
    {
        "word": "fidarsi",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Credere che qualcuno sia onesto e affidabile.",
                "examples": [
                    "Devi fidarti del tuo partner."
                ]
            }
        ]
    },
    {
        "word": "essere d'accordo",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "👍",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere la stessa opinione di qualcun altro.",
                "examples": [
                    "Non siamo sempre d'accordo."
                ]
            }
        ]
    },
    {
        "word": "scendere a compromessi",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Accettare meno di quanto si desidera in modo che entrambe le parti siano soddisfatte.",
                "examples": [
                    "Le buone relazioni hanno bisogno di scendere a compromessi."
                ]
            }
        ]
    },
    {
        "word": "riciclare",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "♻️",
        "form": "verb",
        "definitions": [
            {
                "text": "Trattare materiali usati in modo che possano essere riutilizzati.",
                "examples": [
                    "Ricicliamo carta e vetro."
                ]
            }
        ]
    }
];
    const lang = "it";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
