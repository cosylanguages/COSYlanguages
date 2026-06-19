// TODO: verify level classification
(function() {
    const lang = "it";
    const data = [
    {
        "word": "aporia",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤔",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Uno stato di perplessità o difficoltà derivante da contraddizioni in un argomento.",
                "examples": [
                    "Il dialogo finisce in aporia, senza raggiungere alcuna risposta soddisfacente."
                ]
            }
        ],
        "lang": "it",
        "id": "it_proficiency_language_001"
    },
    {
        "word": "teleologia",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🎯",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Lo studio filosofico della finalità o dell'orientamento a uno scopo nella natura o nella storia.",
                "examples": [
                    "Il suo argomento poggia su una visione teleologica del progresso umano."
                ]
            }
        ],
        "lang": "it",
        "id": "it_proficiency_language_002"
    },
    {
        "word": "ontologia",
        "level": "proficiency",
        "theme": "language",
        "emoji": "👻",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "La branca della filosofia che si occupa della natura dell'essere o dell'esistenza.",
                "examples": [
                    "I suoi impegni ontologici modellano tutto il suo argomento."
                ]
            }
        ],
        "lang": "it",
        "id": "it_proficiency_language_003"
    },
    {
        "word": "reificazione",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧱",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Il processo di trattare qualcosa di astratto come se fosse una cosa concreta e reale.",
                "examples": [
                    "La reificazione delle forze di mercato maschera le decisioni umane dietro di esse."
                ]
            }
        ],
        "lang": "it",
        "id": "it_proficiency_language_004"
    },
    {
        "word": "dialettica",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Un metodo di argomentazione che implica contraddizione e risoluzione.",
                "examples": [
                    "La dialettica tra libertà e sicurezza definisce il pensiero liberale."
                ]
            }
        ],
        "lang": "it",
        "id": "it_proficiency_language_005"
    },
    {
        "word": "euristica",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Un approccio di risoluzione dei problemi basato sull'esperienza piuttosto che su una prova garantita.",
                "examples": [
                    "'Segui il denaro' è un'euristica utile nel giornalismo investigativo."
                ]
            }
        ],
        "lang": "it",
        "id": "it_proficiency_psychology_001"
    },
    {
        "word": "apofenia",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🕸️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "La tendenza a percepire connessioni significative tra cose non correlate.",
                "examples": [
                    "Il pensiero cospiratorio è alimentato dall'apofenia."
                ]
            }
        ],
        "lang": "it",
        "id": "it_proficiency_psychology_002"
    },
    {
        "word": "cognizione motivata",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🧠",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "L'influenza di desideri ed emozioni sul ragionamento e sulla formazione delle credenze.",
                "examples": [
                    "La cognizione motivata spiega perché le persone resistono a prove sgradite."
                ]
            }
        ],
        "lang": "it",
        "id": "it_proficiency_psychology_003"
    },
    {
        "word": "principio proattivo",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🚀",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "L'idea che i rischi dell'inazione debbano essere pesati rispetto ai rischi dell'azione.",
                "examples": [
                    "I transumanisti invocano spesso il principio proattivo."
                ]
            }
        ],
        "lang": "it",
        "id": "it_proficiency_social_001"
    },
    {
        "word": "principio di precauzione",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛡️",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "L'idea che le azioni con conseguenze sconosciute ma potenzialmente dannose debbano essere evitate.",
                "examples": [
                    "Il diritto ambientale applica frequentemente il principio di precauzione."
                ]
            }
        ],
        "lang": "it",
        "id": "it_proficiency_social_002"
    },
    {
        "word": "neutralità liberale",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⚖️",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Il principio liberale secondo cui lo Stato non dovrebbe favorire alcuna visione particolare della vita buona.",
                "examples": [
                    "I critici sostengono che la neutralità liberale sia essa stessa una posizione morale sostanziale."
                ]
            }
        ],
        "lang": "it",
        "id": "it_proficiency_social_003"
    },
    {
        "word": "pronatalismo",
        "level": "proficiency",
        "theme": "social",
        "emoji": "👶",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Una politica o ideologia che incoraggia le persone ad avere più figli.",
                "examples": [
                    "Ha criticato i presupposti pronatalisti insiti nella politica fiscale familiare."
                ]
            }
        ],
        "lang": "it",
        "id": "it_proficiency_social_004"
    },
    {
        "word": "sublimazione",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🎨",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Il reindirizzamento di un impulso primitivo verso un'attività socialmente accettabile.",
                "examples": [
                    "L'arte è stata a lungo intesa come una forma di sublimazione."
                ]
            }
        ],
        "lang": "it",
        "id": "it_proficiency_psychology_004"
    },
    {
        "word": "jouissance",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🔥",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Nella teoria psicoanalitica, una forma eccessiva o trasgressiva di godimento.",
                "examples": [
                    "Žižek usa il concetto di jouissance per spiegare l'attaccamento ideologico."
                ]
            }
        ],
        "lang": "it",
        "id": "it_proficiency_psychology_005"
    },
    {
        "word": "thanatos",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💀",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Nella teoria freudiana, la pulsione di morte.",
                "examples": [
                    "Il romanzo esplora la tensione tra eros e thanatos."
                ]
            }
        ],
        "lang": "it",
        "id": "it_proficiency_psychology_006"
    },
    {
        "word": "bathos",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "📉",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Una transizione brusca e deludente dall'elevato al triviale.",
                "examples": [
                    "Il discorso è sceso nel bathos al momento cruciale."
                ]
            }
        ],
        "lang": "it",
        "id": "it_proficiency_art_culture_001"
    },
    {
        "word": "apofasi",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤫",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Un espediente retorico per attirare l'attenzione su qualcosa affermando di non menzionarlo.",
                "examples": [
                    "'Non menzionerò i suoi precedenti penali' è una classica apofasi."
                ]
            }
        ],
        "lang": "it",
        "id": "it_proficiency_language_006"
    },
    {
        "word": "paralepsis",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🙊",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Un altro termine per apofasi.",
                "examples": [
                    "La retorica politica si affida spesso alla paralepsis."
                ]
            }
        ],
        "lang": "it",
        "id": "it_proficiency_language_007"
    },
    {
        "word": "spazio liminale",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚪",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Una fase di transizione o un momento di soglia tra due stati d'essere.",
                "examples": [
                    "La mezza età può essere intesa come uno spazio liminale."
                ]
            }
        ],
        "lang": "it",
        "id": "it_proficiency_language_008"
    },
    {
        "word": "quiasmo",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❌",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Un espediente retorico in cui la seconda parte è un'inversione della prima.",
                "examples": [
                    "'Non chiedere cosa il tuo paese può fare per te' usa il quiasmo."
                ]
            }
        ],
        "lang": "it",
        "id": "it_proficiency_language_009"
    },
    {
        "word": "shibboleth",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔑",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Una consuetudine, una frase o una credenza usata per identificare i membri di un particolare gruppo.",
                "examples": [
                    "'Le famiglie che lavorano sodo' è diventato uno shibboleth politico."
                ]
            }
        ],
        "lang": "it",
        "id": "it_proficiency_language_010"
    }
];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();