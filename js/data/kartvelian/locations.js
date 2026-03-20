(function() {
    const data = {
    "ka": [
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
            "word": "გერმანია",
            "level": "elementary",
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
            "word": "კანადა",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "ავსტრალია",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "იაპონია",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "ჩინეთი",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "ბრაზილია",
            "level": "intermediate",
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
            "word": "ინდოეთი",
            "level": "intermediate",
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
            "word": "ნიუ-იორკი",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "ტოკიო",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "სიდნეი",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "ტორონტო",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "პეკინი",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "რიო-დე-ჟანეირო",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "კაირო",
            "level": "intermediate",
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
            "word": "დელი",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "ყაზანი",
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
