(function() {
    const data = [
    {
        "word": "საფრანგეთი",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "იტალია",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "რუსეთი",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "საბერძნეთი",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ინგლისი",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ესპანეთი",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "აშშ",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "პარიზი",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ლონდონი",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "რომი",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "მოსკოვი",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ათენი",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ნიუ-იორკი",
        "level": "starter",
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
