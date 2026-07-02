// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Франция",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Италия",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Рәсәй",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Греция",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Англия",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Испания",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "АКШ",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Париж",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Лондон",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Рим",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Мәскәү",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Афина",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Нью-Йорк",
        "level": "starter",
        "theme": "places"
    }
]
    const lang = "ba";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
