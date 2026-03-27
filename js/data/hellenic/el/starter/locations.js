(function() {
    const data = [
    {
        "word": "Γαλλία",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Ιταλία",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Ρωσία",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Ελλάδα",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Αγγλία",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Ισπανία",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "ΗΠΑ",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Παρίσι",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Λονδίνο",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Ρώμη",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Μόσχα",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Αθήνα",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Νέα Υόρκη",
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
