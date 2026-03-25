(function() {
    const data = [
    {
        "word": "Франция",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Италия",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Россия",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Греция",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Англия",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Испания",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "США",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Париж",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Лондон",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Рим",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Москва",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Афины",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Нью-Йорк",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    }
];
    const lang = "ru";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
