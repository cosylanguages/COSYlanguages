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
        "word": "Rusia",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Grecia",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Inglaterra",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "España",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "EE. UU.",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "París",
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
        "word": "Moscú",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Atenas",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Nueva York",
        "level": "starter",
        "theme": "address_location_A1"
    }
];
    const lang = "es";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
