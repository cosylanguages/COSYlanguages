(function() {
    const data = [
    {
        "word": "Francia",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Italia",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Russia",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Grecia",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Inghilterra",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Spagna",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "USA",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Parigi",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Londra",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Roma",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Mosca",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Atene",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "New York",
        "level": "starter",
        "theme": "address_location_A1"
    }
];
    const lang = "it";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
