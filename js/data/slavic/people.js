(function() {
    const data = {
    "ru": [
        {
            "word": "Александр Пушкин",
            "level": "starter",
            "theme": "identity_self_C1"
        },
        {
            "word": "Лев Толстой",
            "level": "elementary",
            "theme": "identity_self_C1"
        },
        {
            "word": "Юрий Гагарин",
            "level": "intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Пётр I",
            "level": "upper-intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Мария Шарапова",
            "level": "advanced",
            "theme": "identity_self_C1"
        },
        {
            "word": "Фёдор Достоевский",
            "level": "upper-intermediate",
            "theme": "identity_self_C1"
        },
        {
            "word": "Анна Ахматова",
            "level": "advanced",
            "theme": "identity_self_C1"
        },
        {
            "word": "Виктор Цой",
            "level": "elementary",
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
