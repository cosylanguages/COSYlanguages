(function() {
    const data = [
    {
        "word": "avocat",
        "level": "upper-intermediate",
        "theme": "academic_vocabulary_B2",
        "emoji": "⚖️",
        "form": "noun",
        "plural": "avocats",
        "definitions": [
            {
                "text": "Une personne qui donne des conseils juridiques et représente les gens au tribunal.",
                "examples": [
                    "Je dois parler à mon avocat.",
                    "L'avocat est au tribunal."
                ]
            },
            {
                "text": "Cette personne travaille souvent dans un bureau ou un tribunal.",
                "examples": [
                    "Les avocats lisent beaucoup de documents."
                ]
            }
        ]
    },
    {
        "word": "psychologue",
        "level": "upper-intermediate",
        "theme": "academic_vocabulary_B2",
        "emoji": "🧠",
        "form": "noun",
        "plural": "psychologues",
        "definitions": [
            {
                "text": "Une personne qui étudie le comportement et la pensée.",
                "examples": [
                    "Le psychologue écoute son patient.",
                    "Elle est psychologue clinicienne."
                ]
            },
            {
                "text": "Cette personne travaille souvent dans un cabinet privé.",
                "examples": [
                    "Les psychologues aident à surmonter les difficultés."
                ]
            }
        ]
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
