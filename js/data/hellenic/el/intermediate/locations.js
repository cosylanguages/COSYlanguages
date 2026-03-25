(function() {
    const data = [
    {
        "word": "Πελοπόννησος",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Αυστραλία",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ιαπωνία",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Κίνα",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Βραζιλία",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ινδία",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Τόκιο",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Σίδνεϊ",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Πεκίνο",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ρίο ντε Τζανέιρο",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Κάιρο",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Δελχί",
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
