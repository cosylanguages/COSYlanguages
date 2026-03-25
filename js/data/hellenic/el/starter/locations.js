(function() {
    const data = [
    {
        "word": "Γαλλία",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ιταλία",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ρωσία",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ελλάδα",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Αγγλία",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ισπανία",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ΗΠΑ",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Παρίσι",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Λονδίνο",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ρώμη",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Μόσχα",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Αθήνα",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Νέα Υόρκη",
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
