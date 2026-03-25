(function() {
    const data = [
    {
        "word": "საფრანგეთი",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "იტალია",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "რუსეთი",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "საბერძნეთი",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ინგლისი",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ესპანეთი",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "აშშ",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "პარიზი",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ლონდონი",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "რომი",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "მოსკოვი",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ათენი",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ნიუ-იორკი",
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
