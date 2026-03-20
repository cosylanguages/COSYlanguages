(function() {
    const data = {
    "fr": [
        {
            "word": "Napoléon Bonaparte",
            "level": "starter",
            "theme": "identity_self_C1"
        },
        {
            "word": "Marie Curie",
            "level": "elementary",
            "theme": "identity_self_C1"
        },
        {
            "word": "Victor Hugo",
            "level": "intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Edith Piaf",
            "level": "upper-intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Claude Monet",
            "level": "advanced",
            "theme": "identity_self_C1"
        },
        {
            "word": "Zinedine Zidane",
            "level": "starter",
            "theme": "identity_self_C1"
        },
        {
            "word": "Simone de Beauvoir",
            "level": "upper-intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Jean-Paul Sartre",
            "level": "advanced",
            "theme": "identity_self_C1"
        },
        {
            "word": "Molière",
            "level": "proficiency",
            "theme": "identity_self_C1"
        }
    ],
    "it": [
        {
            "word": "Leonardo da Vinci",
            "level": "starter",
            "theme": "identity_self_C1"
        },
        {
            "word": "Dante Alighieri",
            "level": "elementary",
            "theme": "identity_self_C1"
        },
        {
            "word": "Galileo Galilei",
            "level": "intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Sophia Loren",
            "level": "upper-intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Federico Fellini",
            "level": "intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Umberto Eco",
            "level": "advanced",
            "theme": "identity_self_C1"
        },
        {
            "word": "Monica Bellucci",
            "level": "starter",
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
