(function() {
    const data = [
    {
        "word": "Ֆրանսիա",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Իտալիա",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ռուսաստան",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Հունաստան",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Անգլիա",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Իսպանիա",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ԱՄՆ",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Փարիզ",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Լոնդոն",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Հռոմ",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Մոսկվա",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Աթենք",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Նյու Յորք",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    }
];
    const lang = "hy";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
