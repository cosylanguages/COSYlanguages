(function() {
    const data = {
    "br": [
        {
            "word": "Frañs",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Italia",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Rusia",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Gres",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Bro-Saoz",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Alamagn",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Spagn",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Stadoù-Unanet",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Kanada",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Aostralia",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Japan",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Sina",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Brazil",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Mec'hiko",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Egipt",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Turkia",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Portugal",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Armenia",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Jorjia",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "India",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Pariz",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Londrez",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Roma",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Moskov",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Aten",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Berlin",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Madrid",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "New York",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Tokyo",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Sydney",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Toronto",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Pekin",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Rio de Janeiro",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Kaero",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Istanbul",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Lisbon",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Yerevan",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Tbilisi",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Delhi",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Kazan",
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
