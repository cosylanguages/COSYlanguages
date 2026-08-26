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
            topic: "Αποτελεί το φιλοσοφικό παράδειγμα του τεχνολογικού ντετερμινισμού μια αναπόδραστη πραγματικότητα ή παραίτηση από την ανθρώπινη αυτονομία;",
            level: "proficiency",
            theme: "philosophy",
            language: "el"
        },
        {
            topic: "Σε ποιο βαθμό η εμπορευματοποιημένη πολιτισμική νοσταλγία παρακωλύει την αυθεντική καλλιτεχνική καινοτομία στη σύγχρονη κοινωνία;",
            level: "proficiency",
            theme: "culture",
            language: "el"
        },
        {
            topic: "Πώς οι κυρίαρχες νομισματικές πολιτικές αντιμετωπίζουν τη συστημική αποσταθεροποίηση που προκαλούν τα αποκεντρωμένα κρυπτονομίσματα;",
            level: "proficiency",
            theme: "economics",
            language: "el"
        },
        {
            topic: "Μπορεί να επιτευχθεί επιστημική δικαιοσύνη εντός ακαδημαϊκών ερευνητικών πλαισίων ριζωμένων στον ευρωκεντρισμό;",
            level: "proficiency",
            theme: "epistemology",
            language: "el"
        },
        {
            topic: "Με ποιους τρόπους η διάβρωση των τρίτων χώρων επιδεινώνει την υπαρξιακή μοναξιά στις υπερσυνδεδεμένες μητροπόλεις;",
            level: "proficiency",
            theme: "sociology",
            language: "el"
        },
        {
            topic: "Μήπως το ανθρωποκεντρικό παράδειγμα των διεθνών κλιματικών συνθηκών παρερμηνεύει τη φυσική οικολογική διασύνδεση;",
            level: "proficiency",
            theme: "ecology",
            language: "el"
        },
        {
            topic: "Πώς τα αλγοριθμικά συστήματα συστάσεων αναδιαμορφώνουν διακριτικά την ανθρώπινη αυτονομία και τον αυτοπροσδιορισμό;",
            level: "proficiency",
            theme: "technology",
            language: "el"
        },
        {
            topic: "Σε ποιο βαθμό μπορούν οι μεταανθρωπιστικές τεχνολογίες να αμφισβητήσουν τους βιολογικούς ορισμούς του προσώπου;",
            level: "proficiency",
            theme: "transhumanism",
            language: "el"
        },
        {
            topic: "Λειτουργεί η αξιοκρατία ως νομιμοποιητικός μύθος για τη δομική ανισότητα αντί για εργαλείο κοινωνικής κινητικότητας;",
            level: "proficiency",
            theme: "politics",
            language: "el"
        },
        {
            topic: "Πώς οι πολιτικοί λόγοι της μετα-αλήθειας υπονομεύουν τη δημοκρατική διαβούλευση και τη θεσμική εμπιστοσύνη;",
            level: "proficiency",
            theme: "governance",
            language: "el"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();
