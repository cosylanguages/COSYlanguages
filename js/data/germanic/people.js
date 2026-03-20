(function() {
    const data = {
    "en": [
        {
            "word": "Albert Einstein",
            "level": "starter",
            "theme": "identity_self_C1"
        },
        {
            "word": "Marie Curie",
            "level": "elementary",
            "theme": "identity_self_C1"
        },
        {
            "word": "Leonardo da Vinci",
            "level": "intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "William Shakespeare",
            "level": "upper-intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Elon Musk",
            "level": "advanced",
            "theme": "identity_self_C1"
        },
        {
            "word": "Marilyn Monroe",
            "level": "proficiency",
            "theme": "identity_self_C1"
        },
        {
            "word": "Taylor Swift",
            "level": "starter",
            "theme": "identity_self_C1"
        },
        {
            "word": "Barack Obama",
            "level": "elementary",
            "theme": "identity_self_C1"
        },
        {
            "word": "Stephen Hawking",
            "level": "intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Virginia Woolf",
            "level": "upper-intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Nelson Mandela",
            "level": "advanced",
            "theme": "identity_self_C1"
        },
        {
            "word": "Aristotle",
            "level": "proficiency",
            "theme": "identity_self_C1"
        }
    ]
};
    if (window.vocabularyData) {
        for (let lang in data) {
            if (window.vocabularyData[lang]) {
                window.vocabularyData[lang] = [...window.vocabularyData[lang], ...data[lang].map(p => ({...p, theme: 'famous_people'}))];
            }
        }
    }
    window.peopleData = { ...window.peopleData, ...data };
})();
