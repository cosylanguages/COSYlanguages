(function() {
    const data = [
    {
        "word": "França",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Itália",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Rússia",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Grécia",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Inglaterra",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Espanha",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "EUA",
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
        "word": "Roma",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Moscou",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Atenas",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Nova York",
        "level": "starter",
        "theme": "address_location_A1"
    }
];
    const lang = "pt";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
