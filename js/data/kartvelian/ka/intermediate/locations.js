(function() {
    const data = [
    {
        "word": "ავსტრალია",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "იაპონია",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ჩინეთი",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ბრაზილია",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ინდოეთი",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ტოკიო",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "სიდნეი",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "პეკინი",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "რიო-დე-ჟანეირო",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "კაირო",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "დელი",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    }
];
    const lang = "ka";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
