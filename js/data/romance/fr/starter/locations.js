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
    },
    {
        "word": "Mexico City",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Amsterdam",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Vienne",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Prague",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Barcelone",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Venise",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Florence",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Dublin",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Édimbourg",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Chicago",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Los Angeles",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "San Francisco",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Miami",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Washington DC",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Vancouver",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Montréal",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Melbourne",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Thaïlande",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Corée du Sud",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Suède",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Norvège",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Danemark",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Finlande",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Pologne",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Ukraine",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Autriche",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Suisse",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Pays-Bas",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Belgique",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Irlande",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Londres",
        "level": "starter",
        "theme": "address_location_A1"
    },
];
    const lang = "fr";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
