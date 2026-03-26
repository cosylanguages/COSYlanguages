(function() {
    const data = [
    {
        "word": "გერმანია",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "კანადა",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "მექსიკა",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "ეგვიპტე",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "თურქეთი",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "პორტუგალია",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "სომხეთი",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "საქართველო",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "ბერლინი",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "მადრიდი",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "ტორონტო",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "სტამბოლი",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "ლისაბონი",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "ერევანი",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "თბილისი",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "ყაზანი",
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
