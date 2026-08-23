(function() {
    const lang = 'fr';
    const data = {
        "être": [
            { "phrase": "être d'accord", "definition": "avoir la même opinion", "example": "Je suis tout à fait d'accord avec toi." },
            { "phrase": "être en retard", "definition": "arriver après l'heure prévue", "example": "Désolé, je suis en retard de dix minutes." },
            { "phrase": "être en train de", "definition": "indique une action en cours", "example": "Je suis en train de travailler." },
            { "phrase": "être prêt", "definition": "être préparé pour quelque chose", "example": "Es-tu prêt pour la réunion ?" }
        ],
        "faire": [
            { "phrase": "faire les courses", "definition": "acheter de la nourriture et des provisions", "example": "Je fais les courses tous les samedis matins." },
            { "phrase": "faire attention", "definition": "être vigilant ou prudent", "example": "Fais attention quand tu traverses la rue." },
            { "phrase": "faire la cuisine", "definition": "préparer un repas", "example": "Mon mari fait très bien la cuisine." },
            { "phrase": "faire une erreur", "definition": "se tromper", "example": "J'ai fait une petite erreur dans le rapport." }
        ],
        "avoir": [
            { "phrase": "avoir besoin de", "definition": "nécessiter quelque chose", "example": "J'ai besoin d'un nouveau stylo." },
            { "phrase": "avoir faim", "definition": "ressentir le besoin de manger", "example": "Est-ce que tu as faim ?" },
            { "phrase": "avoir raison", "definition": "être dans le vrai", "example": "Tu as raison, c'est une excellente idée." },
            { "phrase": "avoir envie de", "definition": "désirer quelque chose", "example": "J'ai envie de prendre un café." }
        ],
        "prendre": [
            { "phrase": "prendre le bus", "definition": "utiliser le bus pour se déplacer", "example": "Je prends le bus pour aller au bureau." },
            { "phrase": "prendre une décision", "definition": "choisir une option", "example": "Il est temps de prendre une décision." },
            { "phrase": "prendre une pause", "definition": "s'arrêter de travailler un moment", "example": "Prenons une pause de dix minutes." },
            { "phrase": "prendre soin de", "definition": "s'occuper de quelqu'un ou de quelque chose", "example": "Elle prend soin de ses plantes." }
        ],
        "aller": [
            { "phrase": "aller au travail", "definition": "se rendre à son lieu de travail", "example": "Je vais au travail en train." },
            { "phrase": "aller bien", "definition": "être en bonne santé ou heureux", "example": "Comment vas-tu ? Je vais très bien, merci." },
            { "phrase": "s'en aller", "definition": "partir d'un lieu", "example": "Il est tard, je m'en vais." },
            { "phrase": "aller faire", "definition": "indique un futur proche", "example": "Je vais faire mes devoirs." }
        ],
        "venir": [
            { "phrase": "venir de", "definition": "indique une provenance ou un passé récent", "example": "Je viens de Paris. / Je viens de finir." },
            { "phrase": "revenir", "definition": "venir de nouveau", "example": "Quand reviendras-tu ?" },
            { "phrase": "devenir", "definition": "commencer à être", "example": "Elle veut devenir médecin." },
            { "phrase": "convenir", "definition": "être approprié", "example": "Cette date me convient parfaitement." }
        ]
    };

    window.phrasesData = window.phrasesData || {};
    window.phrasesData[lang] = data;
})();
