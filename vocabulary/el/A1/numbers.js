(function() {
    const data = [
    {
        "word": "ένα",
        "translation": "one",
        "level": "starter",
        "theme": "numbers",
        "language": "el",
        "emoji": "1️⃣",
        "form": "number",
        "definitions": [
            {
                "text": "Ο αριθμός 1.",
                "examples": [
                    "Έχω ένα βιβλίο."
                ]
            }
        ],
        "transcription": "/ˈe.na/"
    },
    {
        "word": "δύο",
        "translation": "two",
        "level": "starter",
        "theme": "numbers",
        "language": "el",
        "emoji": "2️⃣",
        "form": "number",
        "definitions": [
            {
                "text": "Ο αριθμός 2.",
                "examples": [
                    "Έχει δύο γάτες."
                ]
            }
        ],
        "transcription": "/ˈði.o/"
    },
    {
        "word": "τρία",
        "translation": "three",
        "level": "starter",
        "theme": "numbers",
        "language": "el",
        "emoji": "3️⃣",
        "form": "number",
        "definitions": [
            {
                "text": "Ο αριθμός 3.",
                "examples": [
                    "Έχουμε τρία μήλα."
                ]
            }
        ],
        "transcription": "/ˈtri.a/"
    },
    {
        "word": "τέσσερα",
        "translation": "four",
        "level": "starter",
        "theme": "numbers",
        "language": "el",
        "emoji": "4️⃣",
        "form": "number",
        "definitions": [
            {
                "text": "Ο αριθμός 4.",
                "examples": [
                    "Έχει τέσσερα παιδιά."
                ]
            }
        ],
        "transcription": "/ˈte.se.ra/"
    },
    {
        "word": "πέντε",
        "translation": "five",
        "level": "starter",
        "theme": "numbers",
        "language": "el",
        "emoji": "5️⃣",
        "form": "number",
        "definitions": [
            {
                "text": "Ο αριθμός 5.",
                "examples": [
                    "Υπάρχουν πέντε καρέκλες."
                ]
            }
        ],
        "transcription": "/ˈpen.de/"
    }
    ];
    const lang = "el";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
