(function() {
    const data = [
    {
        "word": "ავსტრალია",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "იაპონია",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "ჩინეთი",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "ბრაზილია",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "ინდოეთი",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "ტოკიო",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "სიდნეი",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "პეკინი",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "რიო-დე-ჟანეირო",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "კაირო",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "დელი",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    }
];
    const lang = "ka";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
