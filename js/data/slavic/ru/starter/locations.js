(function() {
    const data = [
    {
        "word": "Франция",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Италия",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Россия",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Греция",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Англия",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Испания",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "США",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Париж",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Лондон",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Рим",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Москва",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Афины",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Нью-Йорк",
        "level": "starter",
        "theme": "address_location_A1"
    }
]
    const lang = "ru";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
