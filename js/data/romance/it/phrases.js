(function() {
    const lang = 'it';
    const data = {
        "essere": [
            { "phrase": "essere d'accordo", "definition": "avere la stessa opinione", "example": "Sono d'accordo con te." },
            { "phrase": "essere in ritardo", "definition": "arrivare dopo l'orario previsto", "example": "Scusa, sono in ritardo." },
            { "phrase": "essere pronto", "definition": "essere preparato", "example": "Sei pronto per uscire?" },
            { "phrase": "essere stanco", "definition": "sentire il bisogno di riposare", "example": "Sono molto stanco stasera." }
        ],
        "fare": [
            { "phrase": "fare la spesa", "definition": "comprare cibo e generi alimentari", "example": "Vado a fare la spesa al supermercato." },
            { "phrase": "fare colazione", "definition": "mangiare il primo pasto del giorno", "example": "Faccio colazione alle sette." },
            { "phrase": "fare una doccia", "definition": "lavarsi sotto la doccia", "example": "Faccio una doccia veloce." },
            { "phrase": "fare una domanda", "definition": "chiedere qualcosa", "example": "Posso farti una domanda?" }
        ],
        "avere": [
            { "phrase": "avere bisogno di", "definition": "necessitare di qualcosa", "example": "Ho bisogno di aiuto." },
            { "phrase": "avere fame", "definition": "sentire il bisogno di mangiare", "example": "Ho fame, andiamo a mangiare?" },
            { "phrase": "avere ragione", "definition": "essere nel giusto", "example": "Hai ragione, ho sbagliato io." },
            { "phrase": "avere voglia di", "definition": "desiderare qualcosa", "example": "Ho voglia di un gelato." }
        ],
        "prendere": [
            { "phrase": "prendere il caffè", "definition": "bere un caffè", "example": "Prendiamo un caffè insieme?" },
            { "phrase": "prendere l'autobus", "definition": "usare l'autobus", "example": "Prendo l'autobus per andare al lavoro." },
            { "phrase": "prendere una decisione", "definition": "scegliere cosa fare", "example": "Dobbiamo prendere una decisione oggi." },
            { "phrase": "prendere appunti", "definition": "scrivere note", "example": "Prendo appunti durante la lezione." }
        ],
        "andare": [
            { "phrase": "andare a casa", "definition": "ritornare alla propria abitazione", "example": "Vado a casa ora." },
            { "phrase": "andare al lavoro", "definition": "recarsi al posto di lavoro", "example": "Vado al lavoro in macchina." },
            { "phrase": "andare d'accordo", "definition": "avere un buon rapporto", "example": "Vado molto d'accordo con i miei colleghi." },
            { "phrase": "andare fuori", "definition": "uscire di casa", "example": "Andiamo fuori stasera?" }
        ],
        "venire": [
            { "phrase": "venire da", "definition": "indicare l'origine", "example": "Vengo dall'Italia." },
            { "phrase": "venire in mente", "definition": "ricordarsi o avere un'idea", "example": "Non mi viene in mente il suo nome." },
            { "phrase": "venire bene", "definition": "riuscire bene", "example": "La torta è venuta bene." },
            { "phrase": "venire via", "definition": "andarsene", "example": "Dobbiamo venire via subito." }
        ]
    };

    window.phrasesData = window.phrasesData || {};
    window.phrasesData[lang] = data;
})();
