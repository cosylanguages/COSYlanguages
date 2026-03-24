(function() {
    const data = [
    {
        "word": "ισχυρίζονται ότι",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🗣️",
        "form": "verb",
        "subtext": "υποστηρίζω, επιχειρηματολογώ",
        "definitions": [
            {
                "text": "Δίνω λόγους για να υποστηρίξω μια συγκεκριμένη άποψη.",
                "examples": [
                    "Κάποιοι ισχυρίζονται ότι η τηλεργασία μειώνει την καινοτομία."
                ]
            }
        ]
    }
];
    const lang = "el";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
