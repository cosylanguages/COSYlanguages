(function() {
    const data = [
    {
        "word": "sostenibile",
        "level": "upper-intermediate",
        "theme": "environment_policy_B2",
        "emoji": "🌱",
        "form": "adjective",
        "definitions": [
            {
                "text": "Che può essere mantenuto a lungo senza danneggiare l'ambiente.",
                "examples": [
                    "Dobbiamo promuovere uno sviluppo sostenibile."
                ]
            }
        ]
    },
    {
        "word": "civico",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
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
        ]
    },
    {
        "word": "cronico",
        "level": "upper-intermediate",
        "theme": "serious_illness_treatment_B2",
        "emoji": "⏳🤒",
        "form": "adjective",
        "subtext": "dolore cronico, persistente",
        "opposite": "acuto",
        "definitions": [
            {
                "text": "Che dura a lungo; di una condizione di salute che è persistente.",
                "examples": [
                    "Soffre di mal di schiena cronico."
                ]
            }
        ]
    },
    {
        "word": "preventivo",
        "level": "upper-intermediate",
        "theme": "serious_illness_treatment_B2",
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
        ]
    },
    {
        "word": "morale",
        "level": "upper-intermediate",
        "theme": "ethical_dilemmas_B2",
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
        ]
    },
    {
        "word": "etico",
        "level": "upper-intermediate",
        "theme": "ethical_dilemmas_B2",
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
        ]
    }
];
    const lang = "it";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
