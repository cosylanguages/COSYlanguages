(function() {
    const data = [
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
        "word": "Γερμανία",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Καναδάς",
        "level": "elementary",
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
        "word": "Τορόντο",
        "level": "elementary",
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
        "word": "Καζάν",
        "level": "elementary",
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
