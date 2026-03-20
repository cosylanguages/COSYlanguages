(function() {
    const speakingData = {
    "it": {
        "opinionArena": [
            {
                "text": "I social media stanno distruggendo le nostre abilità sociali?",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "text": "I trasporti pubblici dovrebbero essere gratuiti?",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2"
            }
        ],
        "criticsCorner": [
            {
                "text": "L'unica costante è il cambiamento.",
                "author": "Heraclitus",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2"
            }
        ],
        "debates": [
            {
                "topic": "La settimana lavorativa di quattro giorni vs la settimana di cinque giorni — quale modello avvantaggia maggiormente lavoratori e datori di lavoro?",
                "sideA": "4 giorni",
                "sideB": "5 giorni",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Reddito di base universale vs assistenza sociale mirata — qual è la rete di sicurezza più efficace per gli adulti che lavorano?",
                "sideA": "Reddito universale",
                "sideB": "Assistenza mirata",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La gig economy vs l'impiego a tempo indeterminato — quale modello serve meglio i lavoratori a lungo termine?",
                "sideA": "Gig economy",
                "sideB": "Tempo indeterminato",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Meritocrazia vs vantaggio strutturale — cosa spiega più accuratamente il successo professionale?",
                "sideA": "Meritocrazia",
                "sideB": "Vantaggio strutturale",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Trasparenza retributiva vs privacy salariale — cosa crea un luogo di lavoro più equo?",
                "sideA": "Trasparenza",
                "sideB": "Privacy",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Automazione vs lavoro umano — qual è la più grande minaccia a lungo termine per l'occupazione degli adulti?",
                "sideA": "Automazione",
                "sideB": "Lavoro umano",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lavoro da remoto vs presenza in ufficio — cosa è meglio per la progressione di carriera e la cultura del team?",
                "sideA": "Lavoro remoto",
                "sideB": "Presenza ufficio",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Congedo parentale uguale per uomini e donne vs congedo di maternità più lungo — quale politica è più equa?",
                "sideA": "Congedo uguale",
                "sideB": "Maternità lunga",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Scegliere di non avere figli vs pressione sociale per avere una famiglia — cosa merita più rispetto?",
                "sideA": "Niente figli",
                "sideB": "Pressione sociale",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Il matrimonio come istituzione vs la convivenza senza matrimonio — cosa è più rilevante oggi?",
                "sideA": "Matrimonio",
                "sideB": "Convivenza",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Nuclei familiari a doppio reddito vs un partner che resta a casa — quale modello è migliore per bambini e adulti?",
                "sideA": "Doppio reddito",
                "sideB": "Uno a casa",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Il divario retributivo di genere come problema strutturale vs una questione di scelte individuali — quale spiegazione ha più peso?",
                "sideA": "Prob. strutturale",
                "sideB": "Scelte individuali",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La proprietà della casa come obiettivo vs un mercato degli affitti professionale — quale modello abitativo si adatta meglio agli adulti moderni?",
                "sideA": "Proprietà",
                "sideB": "Affitto pro",
                "level": "upper-intermediate",
                "theme": "economy_labour_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La gentrificazione come miglioramento vs la gentrificazione come spostamento — quale inquadramento è più onesto?",
                "sideA": "Miglioramento",
                "sideB": "Spostamento",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Densità urbana vs espansione suburbana — qual è il modello migliore per città vivibili?",
                "sideA": "Densità urbana",
                "sideB": "Espansione suburbana",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivere vicino alla famiglia vs allontanarsi per opportunità — quale scelta produce un miglior benessere a lungo termine?",
                "sideA": "Vivere vicino",
                "sideB": "Allontanarsi",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Una popolazione che invecchia come una crisi vs come una risorsa — quale inquadramento è più produttivo?",
                "sideA": "Crisi",
                "sideB": "Risorsa",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Responsabilità personale per la salute vs fattori sistemici — cosa ha più peso nello spiegare i risultati di salute?",
                "sideA": "Resp. personale",
                "sideB": "Fattori sistemici",
                "level": "upper-intermediate",
                "theme": "healthcare_systems_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Giornate per la salute mentale come diritto legittimo sul posto di lavoro vs fonte di abusi — dove dovrebbero tracciare il limite i datori di lavoro?",
                "sideA": "Diritto legittimo",
                "sideB": "Fonte di abusi",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Medicina preventiva vs medicina curativa — quale dovrebbe ricevere più finanziamenti pubblici?",
                "sideA": "Preventiva",
                "sideB": "Curativa",
                "level": "upper-intermediate",
                "theme": "healthcare_systems_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Medicina anti-invecchiamento vs invecchiare con grazia — quale atteggiamento è più coerente?",
                "sideA": "Anti-age",
                "sideB": "Invecchiare con grazia",
                "level": "upper-intermediate",
                "theme": "healthcare_systems_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Tecnologia di sorveglianza per la sicurezza pubblica vs diritto alla privacy — dove dovrebbe risiedere l'equilibrio?",
                "sideA": "Sicurezza pubblica",
                "sideB": "Privacy",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "I social media come strumento di impegno civile vs come motore di polarizzazione — quale effetto domina?",
                "sideA": "Impegno civile",
                "sideB": "Polarizzazione",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'IA nel reclutamento vs giudizio umano — cosa produce decisioni di assunzione più eque?",
                "sideA": "IA",
                "sideB": "Giudizio umano",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Il diritto all'oblio online vs il diritto all'informazione del pubblico — cosa dovrebbe avere la precedenza?",
                "sideA": "Diritto all'oblio",
                "sideB": "Diritto info",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Voto obbligatorio vs voto volontario — cosa produce democrazie più sane?",
                "sideA": "Obbligatorio",
                "sideB": "Volontario",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Impegno politico attraverso la protesta vs attraverso i canali istituzionali — cosa è più efficace per gli adulti di oggi?",
                "sideA": "Protesta",
                "sideB": "Istituzionale",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Identità nazionale vs identità europea o globale — cosa è più significativo per gli adulti nel 2026?",
                "sideA": "Identità nazionale",
                "sideB": "Identità globale",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Aumento delle tasse per finanziare i servizi pubblici vs tagli alla spesa — quale è la scelta politica più difendibile?",
                "sideA": "Aumento tasse",
                "sideB": "Tagli alla spesa",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ammettere di non avere idea di come funzioni la propria pensione vs fingere con sicurezza di saperlo — quale è l'esperienza adulta più universale?",
                "sideA": "Ammettere ignoranza",
                "sideB": "Fingere",
                "level": "upper-intermediate",
                "theme": "economy_labour_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Essere la persona che pianifica sempre gli eventi sociali vs essere sempre quella che si limita a presentarsi — quale ruolo è più estenuante?",
                "sideA": "L'organizzatore",
                "sideB": "L'ospite",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avere una forte opinione sulle abitudini culinarie dei colleghi vs non importarsene affatto — quale persona è più tollerabile?",
                "sideA": "Opinione forte",
                "sideB": "Indifferenza",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Partecipare a ogni evento sociale facoltativo di lavoro vs non partecipare mai a nessuno — quale strategia è migliore per la carriera e la salute mentale?",
                "sideA": "Tutti",
                "sideB": "Nessuno",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Adulti che sono ancora confusi dalla loro dichiarazione dei redditi vs adulti che si divertono a farla — quale gruppo è più affidabile?",
                "sideA": "Confusi",
                "sideB": "Divertiti",
                "level": "upper-intermediate",
                "theme": "economy_labour_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lamentarsi del costo della vita con gli amici vs fingere che tutto vada bene — quale è la risposta adulta più onesta?",
                "sideA": "Lamentarsi",
                "sideB": "Fingere tutto bene",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Social media vs interazioni faccia a faccia — cosa è meglio per costruire relazioni?",
                "sideA": "Social media",
                "sideB": "Faccia a faccia",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vita urbana vs vita rurale — quale offre una migliore qualità della vita?",
                "sideA": "Urbana",
                "sideB": "Rurale",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Apprendimento online vs aula tradizionale — quale è il futuro dell'istruzione?",
                "sideA": "Online",
                "sideB": "Aula",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Energia rinnovabile vs energia nucleare — quale è la soluzione migliore per il clima?",
                "sideA": "Rinnovabile",
                "sideB": "Nucleare",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fast fashion vs abbigliamento sostenibile — possiamo permetterci di essere etici?",
                "sideA": "Fast fashion",
                "sideB": "Sostenibile",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "Il futuro del mondo tra 50 anni",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "topic": "L'impatto del cambiamento climatico sulle comunità locali",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2"
            }
        ]
    }
};

    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData["it"]) window.speakingData["it"] = {};

    for (const cat in speakingData["it"]) {
        if (!window.speakingData["it"][cat]) window.speakingData["it"][cat] = [];
        window.speakingData["it"][cat].push(...speakingData["it"][cat]);
    }
})();
