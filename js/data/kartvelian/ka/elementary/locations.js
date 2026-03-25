(function() {
    const data = [
    {
        "word": "გერმანია",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "კანადა",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "მექსიკა",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ეგვიპტე",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "თურქეთი",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "პორტუგალია",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "სომხეთი",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "საქართველო",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ბერლინი",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "მადრიდი",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ტორონტო",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "სტამბოლი",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ლისაბონი",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ერევანი",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "თბილისი",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ყაზანი",
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
