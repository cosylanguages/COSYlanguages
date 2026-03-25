(function() {
    const data = [
    {
        "word": "Θεσσαλονίκη",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Κρήτη",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ρόδος",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Γερμανία",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Καναδάς",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Μεξικό",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Αίγυπτος",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Τουρκία",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Πορτογαλία",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Αρμενία",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Γεωργία",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Βερολίνο",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Μαδρίτη",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Τορόντο",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Κωνσταντινούπολη",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Λισαβόνα",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ερεβάν",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Τιφλίδα",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Καζάν",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    }
];
    const lang = "el";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
