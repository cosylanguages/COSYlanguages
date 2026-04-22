(function() {
    const data = [
    {
        "word": "Frañs",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Italia",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Rusia",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Gres",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Bro-Saoz",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Spagn",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Stadoù-Unanet",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Pariz",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Londrez",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Roma",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Moskov",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Aten",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "New York",
        "level": "starter",
        "theme": "address_location_A1"
    }
]
    const lang = "br";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
