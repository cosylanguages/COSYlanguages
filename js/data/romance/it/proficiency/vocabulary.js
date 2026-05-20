(function() {
    const lang = "it";
    const data = [
        {
                "word": "aporia",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🤔",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Uno stato di perplessità o difficoltà derivante da contraddizioni in un argomento.",
                                "examples": [
                                        "Il dialogo finisce in aporia, senza raggiungere alcuna risposta soddisfacente."
                                ]
                        }
                ]
        },
        {
                "word": "teleologia",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🎯",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Lo studio filosofico della finalità o dell'orientamento a uno scopo nella natura o nella storia.",
                                "examples": [
                                        "Il suo argomento poggia su una visione teleologica del progresso umano."
                                ]
                        }
                ]
        },
        {
                "word": "ontologia",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "👻",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "La branca della filosofia che si occupa della natura dell'essere o dell'esistenza.",
                                "examples": [
                                        "I suoi impegni ontologici modellano tutto il suo argomento."
                                ]
                        }
                ]
        },
        {
                "word": "reificazione",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🧱",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Il processo di trattare qualcosa di astratto come se fosse una cosa concreta e reale.",
                                "examples": [
                                        "La reificazione delle forze di mercato maschera le decisioni umane dietro di esse."
                                ]
                        }
                ]
        },
        {
                "word": "dialettica",
                "level": "proficiency",
                "theme": "meta_argument_deconstruction_C2",
                "emoji": "⚖️",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Un metodo di argomentazione che implica contraddizione e risoluzione.",
                                "examples": [
                                        "La dialettica tra libertà e sicurezza definisce il pensiero liberale."
                                ]
                        }
                ]
        },
        {
                "word": "euristica",
                "level": "proficiency",
                "theme": "epistemology_knowledge_C2",
                "emoji": "💡",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Un approccio di risoluzione dei problemi basato sull'esperienza piuttosto che su una prova garantita.",
                                "examples": [
                                        "'Segui il denaro' è un'euristica utile nel giornalismo investigativo."
                                ]
                        }
                ]
        },
        {
                "word": "apofenia",
                "level": "proficiency",
                "theme": "epistemology_knowledge_C2",
                "emoji": "🕸️",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "La tendenza a percepire connessioni significative tra cose non correlate.",
                                "examples": [
                                        "Il pensiero cospiratorio è alimentato dall'apofenia."
                                ]
                        }
                ]
        },
        {
                "word": "cognizione motivata",
                "level": "proficiency",
                "theme": "epistemology_knowledge_C2",
                "emoji": "🧠",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "L'influenza di desideri ed emozioni sul ragionamento e sulla formazione delle credenze.",
                                "examples": [
                                        "La cognizione motivata spiega perché le persone resistono a prove sgradite."
                                ]
                        }
                ]
        },
        {
                "word": "principio proattivo",
                "level": "proficiency",
                "theme": "ethics_advanced_C2",
                "emoji": "🚀",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "L'idea che i rischi dell'inazione debbano essere pesati rispetto ai rischi dell'azione.",
                                "examples": [
                                        "I transumanisti invocano spesso il principio proattivo."
                                ]
                        }
                ]
        },
        {
                "word": "principio di precauzione",
                "level": "proficiency",
                "theme": "ethics_advanced_C2",
                "emoji": "🛡️",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "L'idea che le azioni con conseguenze sconosciute ma potenzialmente dannose debbano essere evitate.",
                                "examples": [
                                        "Il diritto ambientale applica frequentemente il principio di precauzione."
                                ]
                        }
                ]
        },
        {
                "word": "neutralità liberale",
                "level": "proficiency",
                "theme": "political_theory_C2",
                "emoji": "⚖️",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "Il principio liberale secondo cui lo Stato non dovrebbe favorire alcuna visione particolare della vita buona.",
                                "examples": [
                                        "I critici sostengono che la neutralità liberale sia essa stessa una posizione morale sostanziale."
                                ]
                        }
                ]
        },
        {
                "word": "pronatalismo",
                "level": "proficiency",
                "theme": "political_theory_C2",
                "emoji": "👶",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Una politica o ideologia che incoraggia le persone ad avere più figli.",
                                "examples": [
                                        "Ha criticato i presupposti pronatalisti insiti nella politica fiscale familiare."
                                ]
                        }
                ]
        },
        {
                "word": "sublimazione",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "emoji": "🎨",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Il reindirizzamento di un impulso primitivo verso un'attività socialmente accettabile.",
                                "examples": [
                                        "L'arte è stata a lungo intesa come una forma di sublimazione."
                                ]
                        }
                ]
        },
        {
                "word": "jouissance",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "emoji": "🔥",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Nella teoria psicoanalitica, una forma eccessiva o trasgressiva di godimento.",
                                "examples": [
                                        "Žižek usa il concetto di jouissance per spiegare l'attaccamento ideologico."
                                ]
                        }
                ]
        },
        {
                "word": "thanatos",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "emoji": "💀",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Nella teoria freudiana, la pulsione di morte.",
                                "examples": [
                                        "Il romanzo esplora la tensione tra eros e thanatos."
                                ]
                        }
                ]
        },
        {
                "word": "bathos",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "emoji": "📉",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Una transizione brusca e deludente dall'elevato al triviale.",
                                "examples": [
                                        "Il discorso è sceso nel bathos al momento cruciale."
                                ]
                        }
                ]
        },
        {
                "word": "apofasi",
                "level": "proficiency",
                "theme": "rhetoric_persuasion_C2",
                "emoji": "🤫",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Un espediente retorico per attirare l'attenzione su qualcosa affermando di non menzionarlo.",
                                "examples": [
                                        "'Non menzionerò i suoi precedenti penali' è una classica apofasi."
                                ]
                        }
                ]
        },
        {
                "word": "paralepsis",
                "level": "proficiency",
                "theme": "rhetoric_persuasion_C2",
                "emoji": "🙊",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Un altro termine per apofasi.",
                                "examples": [
                                        "La retorica politica si affida spesso alla paralepsis."
                                ]
                        }
                ]
        },
        {
                "word": "spazio liminale",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "emoji": "🚪",
                "form": "noun phrase",
                "definitions": [
                        {
                                "text": "Una fase di transizione o un momento di soglia tra due stati d'essere.",
                                "examples": [
                                        "La mezza età può essere intesa come uno spazio liminale."
                                ]
                        }
                ]
        },
        {
                "word": "quiasmo",
                "level": "proficiency",
                "theme": "rhetoric_persuasion_C2",
                "emoji": "❌",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Un espediente retorico in cui la seconda parte è un'inversione della prima.",
                                "examples": [
                                        "'Non chiedere cosa il tuo paese può fare per te' usa il quiasmo."
                                ]
                        }
                ]
        },
        {
                "word": "shibboleth",
                "level": "proficiency",
                "theme": "linguistics_theory_C2",
                "emoji": "🔑",
                "form": "noun", "classification": "regular",
                "definitions": [
                        {
                                "text": "Una consuetudine, una frase o una credenza usata per identificare i membri di un particolare gruppo.",
                                "examples": [
                                        "'Le famiglie che lavorano sodo' è diventato uno shibboleth politico."
                                ]
                        }
                ]
        }
];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();