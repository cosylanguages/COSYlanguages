(function() {
    const data = [
    {
        "id": "it_upper_intermediate_environment_policy_001",
        "lang": "it",
        "word": "sostenibile",
        "level": "upper_intermediate",
        "theme": "environment",
        "emoji": "🌱",
        "form": "adjective",
        "definitions": [
            {
                "text": "Che può essere mantenuto a lungo senza danneggiare l'ambiente.",
                "examples": [
                    "Dobbiamo promuovere uno sviluppo sostenibile."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "it_upper_intermediate_politics_governance_001",
        "lang": "it",
        "word": "civico",
        "level": "upper_intermediate",
        "theme": "people",
        "emoji": "🏛️",
        "form": "adjective",
        "subtext": "senso civico, dovere civico",
        "definitions": [
            {
                "text": "Relativo a una città o alle persone che vi abitano.",
                "examples": [
                    "Votare è un dovere civico."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "it_upper_intermediate_serious_illness_treatment_001",
        "lang": "it",
        "word": "cronico",
        "level": "upper_intermediate",
        "theme": "health_medicine",
        "emoji": "⏳🤒",
        "form": "adjective",
        "subtext": "dolore cronico, persistente",
        "antonyms": [
            "acuto"
        ],
        "definitions": [
            {
                "text": "Che dura a lungo; di una condizione di salute che è persistente.",
                "examples": [
                    "Soffre di mal di schiena cronico."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "it_upper_intermediate_serious_illness_treatment_002",
        "lang": "it",
        "word": "preventivo",
        "level": "upper_intermediate",
        "theme": "health_medicine",
        "emoji": "🛡️",
        "form": "adjective",
        "subtext": "medicina preventiva, misura precauzionale",
        "definitions": [
            {
                "text": "Progettato per impedire che accada qualcosa di brutto.",
                "examples": [
                    "La medicina preventiva riduce i costi a lungo termine."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "it_upper_intermediate_ethical_dilemmas_001",
        "lang": "it",
        "word": "morale",
        "level": "upper_intermediate",
        "theme": "psychology",
        "emoji": "⚖️",
        "form": "adjective",
        "subtext": "decisione morale, etica",
        "definitions": [
            {
                "text": "Relativo ai principi di comportamento corretto e scorretto.",
                "examples": [
                    "Ha preso una decisione morale rifiutando i soldi."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "it_upper_intermediate_ethical_dilemmas_002",
        "lang": "it",
        "word": "etico",
        "level": "upper_intermediate",
        "theme": "psychology",
        "emoji": "🤔⚖️",
        "form": "adjective",
        "subtext": "comportamento etico",
        "definitions": [
            {
                "text": "Relativo all'etica; seguendo le regole accettate di condotta corretta.",
                "examples": [
                    "Le aziende devono operare in modo etico."
                ]
            }
        ],
        "transcription": ""
    }
];
    const lang = "it";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
