(function() {
    const locationsData = {
        "en": [
            { "word": "France", "level": "starter", "theme": "country" },
            { "word": "Italy", "level": "starter", "theme": "country" },
            { "word": "Russia", "level": "starter", "theme": "country" },
            { "word": "Greece", "level": "starter", "theme": "country" },
            { "word": "England", "level": "starter", "theme": "country" },
            { "word": "Germany", "level": "elementary", "theme": "country" },
            { "word": "Spain", "level": "starter", "theme": "country" },
            { "word": "USA", "level": "starter", "theme": "country" },
            { "word": "Canada", "level": "elementary", "theme": "country" },
            { "word": "Australia", "level": "intermediate", "theme": "country" },
            { "word": "Japan", "level": "intermediate", "theme": "country" },
            { "word": "China", "level": "intermediate", "theme": "country" },
            { "word": "Paris", "level": "starter", "theme": "city" },
            { "word": "London", "level": "starter", "theme": "city" },
            { "word": "Rome", "level": "starter", "theme": "city" },
            { "word": "Moscow", "level": "starter", "theme": "city" },
            { "word": "Athens", "level": "starter", "theme": "city" },
            { "word": "Berlin", "level": "elementary", "theme": "city" },
            { "word": "Madrid", "level": "elementary", "theme": "city" },
            { "word": "New York", "level": "starter", "theme": "city" },
            { "word": "Tokyo", "level": "intermediate", "theme": "city" },
            { "word": "Sydney", "level": "intermediate", "theme": "city" }
        ],
        "fr": [
            { "word": "France", "level": "starter", "theme": "country" },
            { "word": "Italie", "level": "starter", "theme": "country" },
            { "word": "Russie", "level": "starter", "theme": "country" },
            { "word": "Grèce", "level": "starter", "theme": "country" },
            { "word": "Angleterre", "level": "starter", "theme": "country" },
            { "word": "Allemagne", "level": "elementary", "theme": "country" },
            { "word": "Espagne", "level": "starter", "theme": "country" },
            { "word": "Paris", "level": "starter", "theme": "city" },
            { "word": "Lyon", "level": "starter", "theme": "city" },
            { "word": "Marseille", "level": "starter", "theme": "city" },
            { "word": "Bordeaux", "level": "starter", "theme": "city" },
            { "word": "Lille", "level": "starter", "theme": "city" },
            { "word": "Nice", "level": "elementary", "theme": "city" }
        ],
        "it": [
            { "word": "Francia", "level": "starter", "theme": "country" },
            { "word": "Italia", "level": "starter", "theme": "country" },
            { "word": "Russia", "level": "starter", "theme": "country" },
            { "word": "Grecia", "level": "starter", "theme": "country" },
            { "word": "Inghilterra", "level": "starter", "theme": "country" },
            { "word": "Germania", "level": "elementary", "theme": "country" },
            { "word": "Spagna", "level": "starter", "theme": "country" },
            { "word": "Roma", "level": "starter", "theme": "city" },
            { "word": "Milano", "level": "starter", "theme": "city" },
            { "word": "Napoli", "level": "starter", "theme": "city" },
            { "word": "Firenze", "level": "starter", "theme": "city" },
            { "word": "Venezia", "level": "starter", "theme": "city" },
            { "word": "Torino", "level": "elementary", "theme": "city" }
        ],
        "ru": [
            { "word": "Франция", "level": "starter", "theme": "country" },
            { "word": "Италия", "level": "starter", "theme": "country" },
            { "word": "Россия", "level": "starter", "theme": "country" },
            { "word": "Греция", "level": "starter", "theme": "country" },
            { "word": "Англия", "level": "starter", "theme": "country" },
            { "word": "Германия", "level": "elementary", "theme": "country" },
            { "word": "Испания", "level": "starter", "theme": "country" },
            { "word": "Москва", "level": "starter", "theme": "city" },
            { "word": "Санкт-Петербург", "level": "starter", "theme": "city" },
            { "word": "Новосибирск", "level": "starter", "theme": "city" },
            { "word": "Екатеринбург", "level": "starter", "theme": "city" },
            { "word": "Казань", "level": "starter", "theme": "city" }
        ],
        "el": [
            { "word": "Γαλλία", "level": "starter", "theme": "country" },
            { "word": "Ιταλία", "level": "starter", "theme": "country" },
            { "word": "Ρωσία", "level": "starter", "theme": "country" },
            { "word": "Ελλάδα", "level": "starter", "theme": "country" },
            { "word": "Αγγλία", "level": "starter", "theme": "country" },
            { "word": "Γερμανία", "level": "elementary", "theme": "country" },
            { "word": "Ισπανία", "level": "starter", "theme": "country" },
            { "word": "Αθήνα", "level": "starter", "theme": "city" },
            { "word": "Θεσσαλονίκη", "level": "starter", "theme": "city" },
            { "word": "Πάτρα", "level": "starter", "theme": "city" },
            { "word": "Ηράκλειο", "level": "starter", "theme": "city" },
            { "word": "Λάρισα", "level": "starter", "theme": "city" }
        ]
    };

    if (window.vocabularyData) {
        for (let lang in locationsData) {
            if (window.vocabularyData[lang]) {
                window.vocabularyData[lang] = [...window.vocabularyData[lang], ...locationsData[lang]];
            }
        }
    }

    window.locationsData = locationsData;
})();
