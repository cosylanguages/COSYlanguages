(function() {
    const data = {
    "el": [
        {
            "word": "Σωκράτης",
            "level": "starter",
            "theme": "identity_self_C1"
        },
        {
            "word": "Μέγας Αλέξανδρος",
            "level": "elementary",
            "theme": "identity_self_C1"
        },
        {
            "word": "Πλάτωνας",
            "level": "intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Μαρία Κάλλας",
            "level": "upper-intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Νίκος Καζαντζάκης",
            "level": "advanced",
            "theme": "identity_self_C1"
        },
        {
            "word": "Μελίνα Μερκούρη",
            "level": "intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Οδυσσέας Ελύτης",
            "level": "upper-intermediate",
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
