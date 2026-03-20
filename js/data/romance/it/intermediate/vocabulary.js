(function() {
    const data = [
    {
        "word": "ingegnere",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "👷",
        "form": "noun",
        "plural": "ingegneri",
        "definitions": [
            {
                "text": "Una persona che progetta o costruisce macchine, motori o strutture.",
                "examples": [
                    "L'ingegnere lavora a un nuovo ponte.",
                    "Vuole diventare un ingegnere civile."
                ]
            },
            {
                "text": "Questa persona lavora spesso in un ufficio o in un cantiere.",
                "examples": [
                    "Gli ingegneri usano il computer per progettare."
                ]
            }
        ]
    },
    {
        "word": "pilota",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "🧑‍✈️",
        "form": "noun",
        "plural": "piloti",
        "definitions": [
            {
                "text": "Una persona che guida un aereo o un elicottero.",
                "examples": [
                    "Il pilota è nella cabina di pilotaggio.",
                    "Vuole diventare un pilota."
                ]
            },
            {
                "text": "Questa persona lavora nel cielo e all'aeroporto.",
                "examples": [
                    "I piloti portano la divisa."
                ]
            }
        ]
    },
    {
        "word": "pizza",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🍕",
        "form": "noun",
        "plural": "pizze",
        "definitions": [
            {
                "text": "Un pane piatto condito con pomodoro e mozzarella.",
                "examples": [
                    "Mi piace la pizza margherita.",
                    "Ordiniamo una pizza."
                ]
            },
            {
                "text": "Questo cibo è originario di Napoli.",
                "examples": [
                    "La pizza è famosa in tutto il mondo."
                ]
            }
        ]
    },
    {
        "word": "tiramisù",
        "level": "intermediate",
        "theme": "society_community_B1",
        "form": "noun",
        "plural": "tiramisù",
        "definitions": [
            {
                "text": "Un dolce al cucchiaio con savoiardi, caffè e mascarpone.",
                "examples": [
                    "Il tiramisù è il mio dolce preferito.",
                    "C'è del cacao sopra il tiramisù."
                ]
            },
            {
                "text": "Il nome significa letteralmente 'sollevami'.",
                "examples": [
                    "Il tiramisù deve riposare in frigo."
                ]
            }
        ]
    },
    {
        "word": "aranciata",
        "level": "intermediate",
        "theme": "society_community_B1",
        "form": "noun",
        "plural": "aranciate"
    },
    {
        "word": "biblioteca",
        "level": "intermediate",
        "theme": "travel_cultural_B1",
        "emoji": "📚",
        "form": "noun",
        "plural": "biblioteche",
        "definitions": [
            {
                "text": "Un luogo con molti libri da leggere o prendere in prestito.",
                "examples": [
                    "Studio nella biblioteca dell'università.",
                    "La biblioteca comunale è grande."
                ]
            },
            {
                "text": "Questo è un luogo silenzioso per lo studio e la ricerca.",
                "examples": [
                    "Bisogna stare in silenzio in biblioteca."
                ]
            }
        ]
    },
    {
        "word": "museo",
        "level": "intermediate",
        "theme": "travel_cultural_B1",
        "emoji": "🏛️",
        "form": "noun",
        "plural": "musei",
        "definitions": [
            {
                "text": "Un edificio dove si possono guardare oggetti importanti del passato.",
                "examples": [
                    "Abbiamo visto i resti romani al museo.",
                    "Il museo ha una collezione di quadri antichi."
                ]
            },
            {
                "text": "Questo è un luogo dove imparare la storia, l'arte o la scienza.",
                "examples": [
                    "L'ingresso al museo è gratuito la domenica."
                ]
            }
        ]
    },
    {
        "word": "aeroporto",
        "level": "intermediate",
        "theme": "travel_cultural_B1",
        "emoji": "✈️",
        "form": "noun",
        "plural": "aeroporti",
        "definitions": [
            {
                "text": "Un luogo dove gli aerei atterrano e decollano.",
                "examples": [
                    "Siamo arrivati all'aeroporto in orario.",
                    "L'aeroporto di Roma è molto grande."
                ]
            },
            {
                "text": "È il luogo dove si prende l'aereo per viaggiare.",
                "examples": [
                    "Dobbiamo fare il check-in in aeroporto."
                ]
            }
        ]
    },
    {
        "word": "armadio",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "👗",
        "form": "noun",
        "plural": "armadii"
    },
    {
        "word": "magro",
        "level": "intermediate",
        "theme": "society_community_B1",
        "form": "noun",
        "plural": "magri"
    },
    {
        "word": "elefante",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🐘",
        "form": "adjective"
    },
    {
        "word": "scimmia",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🐒",
        "form": "adjective"
    },
    {
        "word": "sviluppatore software",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "💻",
        "form": "noun",
        "plural": "sviluppatore softwari"
    },
    {
        "word": "collega",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "👥",
        "form": "noun",
        "plural": "college"
    },
    {
        "word": "salute mentale",
        "level": "intermediate",
        "theme": "mental_health_B1",
        "emoji": "🧠",
        "form": "noun",
        "definitions": [
            {
                "text": "Η κατάσταση της συναισθηματικής και ψυχολογικής ευεξίας.",
                "examples": [
                    "Η ψυχική υγεία είναι εξίσου σημαντική με τη σωματική.",
                    "Πρέπει να φροντίζουμε την ψυχική μας υγεία."
                ]
            }
        ]
    }
];
    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
