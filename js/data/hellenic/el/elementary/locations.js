(function() {
    const data = [
    {
        "word": "Θεσσαλονίκη",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Κρήτη",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Ρόδος",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Γερμανία",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Καναδάς",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Μεξικό",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Αίγυπτος",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Τουρκία",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Πορτογαλία",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Αρμενία",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Γεωργία",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Βερολίνο",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Μαδρίτη",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Τορόντο",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Κωνσταντινούπολη",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Λισαβόνα",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Ερεβάν",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Τιφλίδα",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Καζάν",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    }
];
    const lang = "el";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
