(function() {
    const lang = 'it';
    const data = {
        "essere": [
            { "phrase": "essere d'accordo", "definition": "Avere la stessa opinione.", "example": "Sono d'accordo con te." },
            { "phrase": "essere in ritardo", "definition": "Arrivare dopo l'orario previsto.", "example": "Scusa, sono in ritardo." },
            { "phrase": "essere pronto", "definition": "Essere preparato.", "example": "Sei pronto per uscire?" },
            { "phrase": "essere stanco", "definition": "Sentire il bisogno di riposare.", "example": "Sono molto stanco stasera." }
        ],
        "fare": [
            { "phrase": "fare la spesa", "definition": "Comprare cibo e generi alimentari.", "example": "Vado a fare la spesa al supermercato." },
            { "phrase": "fare colazione", "definition": "Mangiare il primo pasto del giorno.", "example": "Faccio colazione alle sette." },
            { "phrase": "fare una doccia", "definition": "Lavarsi sotto la doccia.", "example": "Faccio una doccia veloce." },
            { "phrase": "fare una domanda", "definition": "Chiedere qualcosa.", "example": "Posso farti una domanda?" }
        ],
        "avere": [
            { "phrase": "avere bisogno di", "definition": "Necessitare di qualcosa.", "example": "Ho bisogno di aiuto." },
            { "phrase": "avere fame", "definition": "Sentire il bisogno di mangiare.", "example": "Ho fame, andiamo a mangiare?" },
            { "phrase": "avere ragione", "definition": "Essere nel giusto.", "example": "Hai ragione, ho sbagliato io." },
            { "phrase": "avere voglia di", "definition": "Desiderare qualcosa.", "example": "Ho voglia di un gelato." }
        ],
        "prendere": [
            { "phrase": "prendere il caffè", "definition": "Bere un caffè.", "example": "Prendiamo un caffè insieme?" },
            { "phrase": "prendere l'autobus", "definition": "Usare l'autobus.", "example": "Prendo l'autobus per andare al lavoro." },
            { "phrase": "prendere una decisione", "definition": "Scegliere cosa fare.", "example": "Dobbiamo prendere una decisione oggi." },
            { "phrase": "prendere appunti", "definition": "Scrivere note.", "example": "Prendo appunti durante la lezione." }
        ],
        "andare": [
            { "phrase": "andare a casa", "definition": "Ritornare alla propria abitazione.", "example": "Vado a casa ora." },
            { "phrase": "andare al lavoro", "definition": "Recarsi al posto di lavoro.", "example": "Vado al lavoro in macchina." },
            { "phrase": "andare d'accordo", "definition": "Avere un buon rapporto.", "example": "Vado molto d'accordo con i miei colleghi." },
            { "phrase": "andare fuori", "definition": "Uscire di casa.", "example": "Andiamo fuori stasera?" }
        ],
        "venire": [
            { "phrase": "venire da", "definition": "Indicare l'origine.", "example": "Vengo dall'Italia." },
            { "phrase": "venire in mente", "definition": "Ricordarsi o avere un'idea.", "example": "Non mi viene in mente il suo nome." },
            { "phrase": "venire bene", "definition": "Riuscire bene.", "example": "La torta è venuta bene." },
            { "phrase": "venire via", "definition": "Andarsene.", "example": "Dobbiamo venire via subito." }
        ]
    };

    window.phrasesData = window.phrasesData || {};
    window.phrasesData[lang] = data;
})();
