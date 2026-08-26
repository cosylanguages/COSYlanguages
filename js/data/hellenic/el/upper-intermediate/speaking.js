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
            topic: "Σε ποιο βαθμό η αλγοριθμική επιμέλεια των μέσων κοινωνικής δικτύωσης απομονώνει τα άτομα σε θαλάμους αντήχησης;",
            level: "upper_intermediate",
            theme: "technology",
            language: "el"
        },
        {
            topic: "Πρέπει οι κυβερνήσεις να θεσπίσουν αυστηρούς κανονισμούς για την ανάπτυξη της τεχνητής νοημοσύνης ώστε να προστατευθεί η απασχόληση;",
            level: "upper_intermediate",
            theme: "ethics",
            language: "el"
        },
        {
            topic: "Πόσο σημαντικά επηρεάζει το κοινωνικοοικονομικό υπόβαθρο τη μακροπρόθεσμη εκπαιδευτική επίδοση;",
            level: "upper_intermediate",
            theme: "society",
            language: "el"
        },
        {
            topic: "Απειλεί η παγκοσμιοποίηση την αυθεντικότητα των περιφερειακών πολιτιστικών ταυτοτήτων ή τις εμπλουτίζει;",
            level: "upper_intermediate",
            theme: "culture",
            language: "el"
        },
        {
            topic: "Πόσο αποτελεσματικά μπορούν οι εταιρικές οικολογικές δεσμεύσεις να αντιμετωπίσουν την κλιματική αλλαγή χωρίς συστημικές μεταρρυθμίσεις;",
            level: "upper_intermediate",
            theme: "environment",
            language: "el"
        },
        {
            topic: "Αποτελεί η δημόσια αναγνώριση ή το εσωτερικό προσωπικό πάθος πιο βιώσιμο κινητήριο μοχλό επαγγελματικής επιτυχίας;",
            level: "upper_intermediate",
            theme: "psychology",
            language: "el"
        },
        {
            topic: "Πώς έχει μετασχηματίσει η εξάπλωση των πλατφορμών ευκαιριακής εργασίας τις παραδοσιακές προστασίες των εργαζομένων;",
            level: "upper_intermediate",
            theme: "economy",
            language: "el"
        },
        {
            topic: "Σε ποιο βαθμό πρέπει τα δημόσια συστήματα υγείας να δίνουν προτεραιότητα στη προληπτική ευεξία έναντι της θεραπευτικής αγωγής;",
            level: "upper_intermediate",
            theme: "health",
            language: "el"
        },
        {
            topic: "Μπορεί η σύγχρονη τέχνη να αμφισβητήσει ουσιαστικά τους κοινωνικούς κανόνες εάν εμπορευματοποιείται από ελίτ αγορές;",
            level: "upper_intermediate",
            theme: "art",
            language: "el"
        },
        {
            topic: "Πρέπει τα ιδρύματα ανώτατης εκπαίδευσης να καταργήσουν πλήρως τις τυποποιημένες εξετάσεις κατά τις εισαγωγικές διαδικασίες;",
            level: "upper_intermediate",
            theme: "education",
            language: "el"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();
