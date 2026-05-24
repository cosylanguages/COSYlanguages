// TODO: verify level classification
(function() {
    const data = [
        {
            "word": "խորոված",
            "level": "starter",
            "theme": "basic_foods_A1",
            "emoji": "🥩",
            "form": "noun",
            "definitions": [
                {
                    "text": "Հայկական խորոված միս:",
                    "examples": ["Խորովածը շատ համեղ է:"]
                }
            ]
        },
        {
            "word": "տոլմա",
            "level": "starter",
            "theme": "basic_foods_A1",
            "emoji": "🍲",
            "form": "noun",
            "definitions": [
                {
                    "text": "Միս խաղողի տերևների մեջ:",
                    "examples": ["Մենք տոլմա ենք ուտում:"]
                }
            ]
        },
        {
            "word": "լավաշ",
            "level": "starter",
            "theme": "basic_foods_A1",
            "emoji": "🫓",
            "form": "noun",
            "definitions": [
                {
                    "text": "Հայկական բարակ հաց:",
                    "examples": ["Լավաշը ավանդական հաց է:"]
                }
            ]
        }
    ];
    const lang = "hy";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
