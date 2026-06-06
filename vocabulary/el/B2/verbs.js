// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "ισχυρίζονται ότι",
        "level": "upper_intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🗣️",
        "form": "verb",
        "subtext": "",
        "synonyms": [
            "υποστηρίζω",
            "επιχειρηματολογώ"
        ],
        "definitions": [
            {
                "text": "Δίνω λόγους για να υποστηρίξω μια συγκεκριμένη άποψη.",
                "examples": [
                    "Κάποιοι ισχυρίζονται ότι η τηλεργασία μειώνει την καινοτομία."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "ισχυριστούν",
        "group": "1st_conj",
        "auxiliary": "έχω"
    }
];
    const lang = "el";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = (window.vocabularyData[lang] || []).concat(data);
})();