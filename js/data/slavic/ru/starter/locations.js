(function() {
    const data = [
    {
        "word": "Франция",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Италия",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Россия",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Греция",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Англия",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Испания",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "США",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Париж",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Лондон",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Рим",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Москва",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Афины",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Нью-Йорк",
        "level": "starter",
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
