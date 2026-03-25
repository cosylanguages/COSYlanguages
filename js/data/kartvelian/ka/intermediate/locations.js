(function() {
    const data = [
    {
        "word": "ავსტრალია",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "იაპონია",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ჩინეთი",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ბრაზილია",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ინდოეთი",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ტოკიო",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "სიდნეი",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "პეკინი",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "რიო-დე-ჟანეირო",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "კაირო",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "დელი",
        "level": "baby",
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
