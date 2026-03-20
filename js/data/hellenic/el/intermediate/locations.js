(function() {
    const data = [
    {
        "word": "Πελοπόννησος",
        "level": "intermediate",
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
        "word": "Ινδία",
        "level": "intermediate",
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
        "word": "Δελχί",
        "level": "intermediate",
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
