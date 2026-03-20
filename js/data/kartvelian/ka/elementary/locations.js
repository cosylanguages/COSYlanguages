(function() {
    const data = [
    {
        "word": "გერმანია",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "კანადა",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "მექსიკა",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ეგვიპტე",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "თურქეთი",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "პორტუგალია",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "სომხეთი",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "საქართველო",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ბერლინი",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "მადრიდი",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ტორონტო",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "სტამბოლი",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ლისაბონი",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ერევანი",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "თბილისი",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ყაზანი",
        "level": "elementary",
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
