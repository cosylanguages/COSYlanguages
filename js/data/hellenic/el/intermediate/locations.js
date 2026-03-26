(function() {
    const data = [
    {
        "word": "Πελοπόννησος",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Αυστραλία",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Ιαπωνία",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Κίνα",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Βραζιλία",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Ινδία",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Τόκιο",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Σίδνεϊ",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Πεκίνο",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Ρίο ντε Τζανέιρο",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Κάιρο",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Δελχί",
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
