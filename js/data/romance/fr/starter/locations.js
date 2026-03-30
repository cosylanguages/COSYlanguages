(function() {
    const data = [
    {
        "word": "France",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Italie",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Russie",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Grèce",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Angleterre",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Espagne",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "États-Unis",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Paris",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Londres",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Rome",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Moscou",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Athènes",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "New York",
        "level": "starter",
        "theme": "address_location_A1"
    }
];
    const lang = "fr";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
