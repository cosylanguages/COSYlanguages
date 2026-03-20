(function() {
    const data = [
    {
        "word": "Ֆրանսիա",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Իտալիա",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ռուսաստան",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Հունաստան",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Անգլիա",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Իսպանիա",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "ԱՄՆ",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Փարիզ",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Լոնդոն",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Հռոմ",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Մոսկվա",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Աթենք",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Նյու Յորք",
        "level": "starter",
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
