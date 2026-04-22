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
        "word": "Рәсәй",
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
        "word": "АКШ",
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
        "word": "Мәскәү",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Афина",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Нью-Йорк",
        "level": "starter",
        "theme": "address_location_A1"
    }
]
    const lang = "ba";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
