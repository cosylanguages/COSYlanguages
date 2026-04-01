(function() {
    const data = [
    {
        "word": "Albert Einstein",
        "level": "starter",
        "theme": "marital_status_A1"
    },
    {
        "word": "Taylor Swift",
        "level": "starter",
        "theme": "marital_status_A1"
    },
    {
        "word": "Cristiano Ronaldo",
        "level": "starter",
        "theme": "marital_status_A1"
    },
    {
        "word": "Lionel Messi",
        "level": "starter",
        "theme": "marital_status_A1"
    },
    {
        "word": "Beyoncé",
        "level": "starter",
        "theme": "marital_status_A1"
    },
    {
        "word": "Elon Musk",
        "level": "starter",
        "theme": "marital_status_A1"
    },
    {
        "word": "Queen Elizabeth II",
        "level": "starter",
        "theme": "marital_status_A1"
    },
    {
        "word": "Marie Curie",
        "level": "starter",
        "theme": "marital_status_A1"
    },
    {
        "word": "Leonardo da Vinci",
        "level": "starter",
        "theme": "marital_status_A1"
    }
];
    const lang = "en";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
