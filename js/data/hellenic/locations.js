(function() {
    const data = {
    "el": [
        {
            "word": "Θεσσαλονίκη",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Κρήτη",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Ρόδος",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Πελοπόννησος",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Γαλλία",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Ιταλία",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Ρωσία",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Ελλάδα",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Αγγλία",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Γερμανία",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Ισπανία",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "ΗΠΑ",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Καναδάς",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Αυστραλία",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Ιαπωνία",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Κίνα",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Βραζιλία",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Μεξικό",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Αίγυπτος",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Τουρκία",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Πορτογαλία",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Αρμενία",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Γεωργία",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Ινδία",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Παρίσι",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Λονδίνο",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Ρώμη",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Μόσχα",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Αθήνα",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Βερολίνο",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Μαδρίτη",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Νέα Υόρκη",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Τόκιο",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Σίδνεϊ",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Τορόντο",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Πεκίνο",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Ρίο ντε Τζανέιρο",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Κάιρο",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Κωνσταντινούπολη",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Λισαβόνα",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Ερεβάν",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Τιφλίδα",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Δελχί",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Καζάν",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        }
    ]
};
    if (window.vocabularyData) {
        for (let lang in data) {
            if (window.vocabularyData[lang]) {
                window.vocabularyData[lang] = [...window.vocabularyData[lang], ...data[lang]];
            }
        }
    }
    window.locationsData = { ...window.locationsData, ...data };
})();
