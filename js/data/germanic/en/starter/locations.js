(function() {
    const data = [
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
        "word": "Vienna",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Prague",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Barcelona",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Venice",
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
        "word": "Edinburgh",
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
        "word": "Thailand",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "South Korea",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Sweden",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Norway",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Denmark",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Finland",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Poland",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Ukraine",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Austria",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Switzerland",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Netherlands",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Belgium",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Ireland",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "London",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "France",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Italy",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Russia",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Greece",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "England",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Spain",
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
        "word": "Rome",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Moscow",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Athens",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "New York",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Berlin",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Tokyo",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Beijing",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Sydney",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Rio de Janeiro",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Egypt",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "China",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Japan",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Germany",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Canada",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Australia",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Brazil",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "India",
        "level": "starter",
        "theme": "address_location_A1"
    }
];
    const lang = "en";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
