(function() {
    const data = [
    {
        "word": "Frankreich",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Italien",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Russland",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Griechenland",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "England",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Spanien",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "USA",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Paris",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "London",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Rom",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Moskau",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Athen",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "New York",
        "level": "starter",
        "theme": "address_location_A1"
    }
];
    const lang = "de";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
