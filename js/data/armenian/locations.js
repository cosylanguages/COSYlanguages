(function() {
    const data = {
    "hy": [
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
            "word": "Գերմանիա",
            "level": "elementary",
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
            "word": "Կանադա",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Ավստրալիա",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Ճապոնիա",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Չինաստան",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Բրազիլիա",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Մեքսիկա",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Եգիպտոս",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Թուրքիա",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Պորտուգալիա",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Հայաստան",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Վրաստան",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Հնդկաստան",
            "level": "intermediate",
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
            "word": "Բերլին",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Մադրիդ",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Նյու Յորք",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Տոկիո",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Սիդնեյ",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Տորոնտո",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Պեկին",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Ռիո դե Ժանեյրո",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Կահիրե",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Ստամբուլ",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Լիսաբոն",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Երևան",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Թբիլիսի",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Դելի",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Կազան",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        }
    ]
};
    if (window.vocabularyData) {
        for (let lang in data) {
            if (window.vocabularyData[lang]) {
                window.vocabularyData[lang] = [...window.vocabularyData[lang], ...data[lang]];
            }
        }
    }
    window.locationsData = { ...window.locationsData, ...data };
})();
