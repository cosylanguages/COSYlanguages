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
            topic: "Πώς οι λεπτές γνωστικές μεροληψίες υπονομεύουν την αντικειμενική λήψη αποφάσεων στην εταιρική ηγεσία;",
            level: "advanced",
            theme: "psychology",
            language: "el"
        },
        {
            topic: "Σε ποιο βαθμό το δίκαιο πνευματικής ιδιοκτησίας δυσκολεύεται να προσαρμοστεί στα δημιουργικά προϊόντα της παραγωγικής τεχνητής νοημοσύνης;",
            level: "advanced",
            theme: "technology",
            language: "el"
        },
        {
            topic: "Έχει ο αρχιτεκτονικός αστικός σχεδιασμός τη δύναμη να αποδομήσει τον περιχαρακωμένο κοινωνικό διαχωρισμό;",
            level: "advanced",
            theme: "society",
            language: "el"
        },
        {
            topic: "Πώς η γλωσσική σχετικότητα διαμορφώνει εννοιολογικά πλαίσια σε διαφορετικά πολιτισμικά παραδείγματα;",
            level: "advanced",
            theme: "linguistics",
            language: "el"
        },
        {
            topic: "Μπορούν οι εταιρικοί δείκτες ESG να επιβάλουν ουσιαστική ηθική λογοδοσία ή απλώς ενθαρρύνουν το greenwashing;",
            level: "advanced",
            theme: "ethics",
            language: "el"
        },
        {
            topic: "Πώς οι δημογραφικές μεταβολές αμφισβητούν τα εδραιωμένα συστήματα κοινωνικής ασφάλισης παγκοσμίως;",
            level: "advanced",
            theme: "economics",
            language: "el"
        },
        {
            topic: "Σε ποιο βαθμό πρέπει η δημόσια χρηματοδότηση να δίνει προτεραιότητα στη διαστημική έρευνα έναντι των γήινων κρίσεων;",
            level: "advanced",
            theme: "science",
            language: "el"
        },
        {
            topic: "Πώς η διάχυτη ψηφιακή επιτήρηση αλλοιώνει τη ψυχολογική σχέση των πολιτών με την κρατική εξουσία;",
            level: "advanced",
            theme: "politics",
            language: "el"
        },
        {
            topic: "Μπορεί η ανθρώπινη ιστορική μνήμη να διατηρήσει την αυθεντικότητά της στην εποχή των συνθετικών μέσων;",
            level: "advanced",
            theme: "media",
            language: "el"
        },
        {
            topic: "Πρέπει τα βιοηθικά πλαίσια να επιτρέπουν τη γενετική τροποποίηση της βλαστικής σειράς για μη θεραπευτική βελτίωση;",
            level: "advanced",
            theme: "bioethics",
            language: "el"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();
