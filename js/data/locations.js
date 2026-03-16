(function() {
    const locationsData = {
        "en": [
            { "word": "France", "level": "starter", "theme": "places_A0" },
            { "word": "Italy", "level": "starter", "theme": "places_A0" },
            { "word": "Russia", "level": "starter", "theme": "places_A0" },
            { "word": "Greece", "level": "starter", "theme": "places_A0" },
            { "word": "England", "level": "starter", "theme": "places_A0" },
            { "word": "Germany", "level": "elementary", "theme": "places_A0" },
            { "word": "Spain", "level": "starter", "theme": "places_A0" },
            { "word": "USA", "level": "starter", "theme": "places_A0" },
            { "word": "Canada", "level": "elementary", "theme": "places_A0" },
            { "word": "Australia", "level": "intermediate", "theme": "places_A0" },
            { "word": "Japan", "level": "intermediate", "theme": "places_A0" },
            { "word": "China", "level": "intermediate", "theme": "places_A0" },
            { "word": "Paris", "level": "starter", "theme": "places_A0" },
            { "word": "London", "level": "starter", "theme": "places_A0" },
            { "word": "Rome", "level": "starter", "theme": "places_A0" },
            { "word": "Moscow", "level": "starter", "theme": "places_A0" },
            { "word": "Athens", "level": "starter", "theme": "places_A0" },
            { "word": "Berlin", "level": "elementary", "theme": "places_A0" },
            { "word": "Madrid", "level": "elementary", "theme": "places_A0" },
            { "word": "New York", "level": "starter", "theme": "places_A0" },
            { "word": "Tokyo", "level": "intermediate", "theme": "places_A0" },
            { "word": "Sydney", "level": "intermediate", "theme": "places_A0" }
        ],
        "fr": [
            { "word": "France", "level": "starter", "theme": "places_A0" },
            { "word": "Italie", "level": "starter", "theme": "places_A0" },
            { "word": "Russie", "level": "starter", "theme": "places_A0" },
            { "word": "Grèce", "level": "starter", "theme": "places_A0" },
            { "word": "Angleterre", "level": "starter", "theme": "places_A0" },
            { "word": "Allemagne", "level": "elementary", "theme": "places_A0" },
            { "word": "Espagne", "level": "starter", "theme": "places_A0" },
            { "word": "Paris", "level": "starter", "theme": "places_A0" },
            { "word": "Lyon", "level": "starter", "theme": "places_A0" },
            { "word": "Marseille", "level": "starter", "theme": "places_A0" },
            { "word": "Bordeaux", "level": "starter", "theme": "places_A0" },
            { "word": "Lille", "level": "starter", "theme": "places_A0" },
            { "word": "Nice", "level": "elementary", "theme": "places_A0" }
        ],
        "it": [
            { "word": "Francia", "level": "starter", "theme": "places_A0" },
            { "word": "Italia", "level": "starter", "theme": "places_A0" },
            { "word": "Russia", "level": "starter", "theme": "places_A0" },
            { "word": "Grecia", "level": "starter", "theme": "places_A0" },
            { "word": "Inghilterra", "level": "starter", "theme": "places_A0" },
            { "word": "Germania", "level": "elementary", "theme": "places_A0" },
            { "word": "Spagna", "level": "starter", "theme": "places_A0" },
            { "word": "Roma", "level": "starter", "theme": "places_A0" },
            { "word": "Milano", "level": "starter", "theme": "places_A0" },
            { "word": "Napoli", "level": "starter", "theme": "places_A0" },
            { "word": "Firenze", "level": "starter", "theme": "places_A0" },
            { "word": "Venezia", "level": "starter", "theme": "places_A0" },
            { "word": "Torino", "level": "elementary", "theme": "places_A0" }
        ],
        "ru": [
            { "word": "Франция", "level": "starter", "theme": "places_A0" },
            { "word": "Италия", "level": "starter", "theme": "places_A0" },
            { "word": "Россия", "level": "starter", "theme": "places_A0" },
            { "word": "Греция", "level": "starter", "theme": "places_A0" },
            { "word": "Англия", "level": "starter", "theme": "places_A0" },
            { "word": "Германия", "level": "elementary", "theme": "places_A0" },
            { "word": "Испания", "level": "starter", "theme": "places_A0" },
            { "word": "Москва", "level": "starter", "theme": "places_A0" },
            { "word": "Санкт-Петербург", "level": "starter", "theme": "places_A0" },
            { "word": "Новосибирск", "level": "starter", "theme": "places_A0" },
            { "word": "Екатеринбург", "level": "starter", "theme": "places_A0" },
            { "word": "Казань", "level": "starter", "theme": "places_A0" }
        ],
        "el": [
            { "word": "Γαλλία", "level": "starter", "theme": "places_A0" },
            { "word": "Ιταλία", "level": "starter", "theme": "places_A0" },
            { "word": "Ρωσία", "level": "starter", "theme": "places_A0" },
            { "word": "Ελλάδα", "level": "starter", "theme": "places_A0" },
            { "word": "Αγγλία", "level": "starter", "theme": "places_A0" },
            { "word": "Γερμανία", "level": "elementary", "theme": "places_A0" },
            { "word": "Ισπανία", "level": "starter", "theme": "places_A0" },
            { "word": "Αθήνα", "level": "starter", "theme": "places_A0" },
            { "word": "Θεσσαλονίκη", "level": "starter", "theme": "places_A0" },
            { "word": "Πάτρα", "level": "starter", "theme": "places_A0" },
            { "word": "Ηράκλειο", "level": "starter", "theme": "places_A0" },
            { "word": "Λάρισα", "level": "starter", "theme": "places_A0" }
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
