(function() {
    const data = [
    {
        "word": "ser",
        "level": "starter",
        "theme": "personal_identity_A0",
        "emoji": "👤",
        "form": "verb",
        "classification": "irregular",
        "group": "-er (irregular)",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Existir; tener una cualidad o estado permanente.",
                "examples": [
                    "Soy estudiante. El coche es rojo."
                ]
            }
        ],
        "v3": "sido"
    },
    {
        "word": "estar",
        "level": "starter",
        "theme": "personal_identity_A0",
        "emoji": "📍",
        "form": "verb",
        "classification": "irregular",
        "group": "-ar (irregular)",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Estar en un lugar o estado temporal.",
                "examples": [
                    "Estoy cansado. Estamos en Madrid."
                ]
            }
        ],
        "v3": "estado"
    },
    {
        "word": "haber",
        "level": "starter",
        "theme": "personal_identity_A0",
        "emoji": "👜",
        "form": "verb",
        "classification": "irregular",
        "group": "-er (irregular)",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Existir (impersonal) o auxiliar para tiempos compuestos.",
                "examples": [
                    "Hay tres libros. He comido."
                ]
            }
        ],
        "v3": "habido"
    },
    {
        "word": "tener",
        "level": "starter",
        "theme": "personal_identity_A0",
        "emoji": "🤲",
        "form": "verb",
        "classification": "irregular",
        "group": "-er (irregular)",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Poseer algo.",
                "examples": [
                    "Tengo un perro. Tienes hambre."
                ]
            }
        ],
        "v3": "tenido"
    },
    {
        "word": "hacer",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "form": "verb",
        "classification": "irregular",
        "group": "-er (irregular)",
        "aspect": "action",
        "definitions": [
            {
                "text": "Realizar una acción o actividad.",
                "examples": [
                    "Hago los deberes. Ella hace café."
                ]
            }
        ],
        "v3": "hecho"
    },
    {
        "word": "ir",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "form": "verb",
        "classification": "irregular",
        "group": "irregular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Moverse de un lugar a otro.",
                "examples": [
                    "Voy al cine. Vamos a casa."
                ]
            }
        ],
        "v3": "ido"
    }
];
    const lang = "es";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
