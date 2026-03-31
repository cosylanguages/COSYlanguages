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
    },
    {
        "word": "Città del Messico",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Amsterdam",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Vienna",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Praga",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Barcellona",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Venezia",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Firenze",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Dublino",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Edimburgo",
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
        "word": "Montreal",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Melbourne",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Thailandia",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Corea del Sud",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Svezia",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Norvegia",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Danimarca",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Finlandia",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Polonia",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Ucraina",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Austria",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Svizzera",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Paesi Bassi",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Belgio",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Irlanda",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Londra",
        "level": "starter",
        "theme": "address_location_A1"
    },
];
    const lang = "it";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
