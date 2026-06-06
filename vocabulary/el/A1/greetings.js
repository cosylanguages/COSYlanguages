(function() {
    const data = [
    {
        "word": "γεια",
        "translation": "hi/hello",
        "level": "starter",
        "theme": "greetings",
        "language": "el",
        "emoji": "👋",
        "form": "interjection",
        "definitions": [
            {
                "text": "Συνηθισμένος χαιρετισμός.",
                "examples": [
                    "Γεια σου! Τι κάνεις;"
                ]
            }
        ],
        "transcription": "/ja/"
    },
    {
        "word": "αντίο",
        "translation": "goodbye",
        "level": "starter",
        "theme": "greetings",
        "language": "el",
        "emoji": "👋",
        "form": "interjection",
        "definitions": [
            {
                "text": "Χαιρετισμός όταν φεύγουμε.",
                "examples": [
                    "Αντίο! Θα τα πούμε σύντομα."
                ]
            }
        ],
        "transcription": "/anˈdi.o/"
    },
    {
        "word": "παρακαλώ",
        "translation": "please/you're welcome",
        "level": "starter",
        "theme": "greetings",
        "language": "el",
        "emoji": "🙏",
        "form": "verb",
        "definitions": [
            {
                "text": "Λέξη ευγένειας για να ζητήσουμε κάτι.",
                "examples": [
                    "Ένα νερό, παρακαλώ."
                ]
            }
        ],
        "transcription": "/pa.ra.kaˈlo/"
    },
    {
        "word": "ευχαριστώ",
        "translation": "thank you",
        "level": "starter",
        "theme": "greetings",
        "language": "el",
        "emoji": "😊",
        "form": "verb",
        "definitions": [
            {
                "text": "Λέξη για να δείξουμε ευγνωμοσύνη.",
                "examples": [
                    "Ευχαριστώ για τη βοήθεια."
                ]
            }
        ],
        "transcription": "/ef.xa.risˈto/"
    },
    {
        "word": "συγγνώμη",
        "translation": "sorry/excuse me",
        "level": "starter",
        "theme": "greetings",
        "language": "el",
        "emoji": "🙇",
        "form": "noun",
        "definitions": [
            {
                "text": "Λέξη για να ζητήσουμε συγχώρεση.",
                "examples": [
                    "Συγγνώμη, άργησα."
                ]
            }
        ],
        "transcription": "/siˈɣno.mi/"
    }
    ];
    const lang = "el";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
