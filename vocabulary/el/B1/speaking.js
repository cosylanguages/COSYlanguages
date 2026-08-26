(function() {
    const lang = "el";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    const keys = ["talkThatTalk", "debates", "opinions", "quotes", "fluency"];
    keys.forEach(k => {
        if (!window.speakingData[lang][k]) window.speakingData[lang][k] = [];
    });

    const newSpeakingTopics = [
        {
            topic: "Πώς έχουν αλλάξει τα μέσα κοινωνικής δικτύωσης την καθημερινή επικοινωνία με τους φίλους σας;",
            level: "intermediate",
            theme: "technology",
            language: "el"
        },
        {
            topic: "Ποιους παράγοντες θεωρείτε πιο σημαντικούς όταν επιλέγετε μια επαγγελματική πορεία;",
            level: "intermediate",
            theme: "career",
            language: "el"
        },
        {
            topic: "Με ποιον τρόπο η ζωή σε μια μεγάλη πόλη επηρεάζει την ψυχική ευημερία του ανθρώπου;",
            level: "intermediate",
            theme: "society",
            language: "el"
        },
        {
            topic: "Πώς εξελίσσονται οι οικογενειακές παραδόσεις ανάμεσα στις διαφορετικές γενιές;",
            level: "intermediate",
            theme: "culture",
            language: "el"
        },
        {
            topic: "Ποιο ρόλο οφείλουν να παίζουν οι προσωπικές οικολογικές συνήθειες στην προστασία του περιβάλλοντος;",
            level: "intermediate",
            theme: "environment",
            language: "el"
        },
        {
            topic: "Πώς μπορούν τα χόμπι να συμβάλουν στη διατήρηση μιας υγιούς ισορροπίας μεταξύ εργασίας και προσωπικής ζωής;",
            level: "intermediate",
            theme: "lifestyle",
            language: "el"
        },
        {
            topic: "Ποια είναι τα κύρια πλεονεκτήματα και μειονεκτήματα της τακτικής εξ αποστάσεως εργασίας;",
            level: "intermediate",
            theme: "work",
            language: "el"
        },
        {
            topic: "Πώς επηρεάζει το ταξίδι σε άγνωστους προορισμούς τη κοσμοθεωρία ενός ατόμου;",
            level: "intermediate",
            theme: "travel",
            language: "el"
        },
        {
            topic: "Πρέπει οι πρακτικές δεξιότητες ζωής να αποκτούν ίση προτεραιότητα με τα ακαδημαϊκά μαθήματα στο σχολείο;",
            level: "intermediate",
            theme: "education",
            language: "el"
        },
        {
            topic: "Πώς επηρεάζει η διαφήμιση τις καθημερινές αγοραστικές μας αποφάσεις;",
            level: "intermediate",
            theme: "consumerism",
            language: "el"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();
