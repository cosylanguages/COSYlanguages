// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Frañs",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Italia",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Rusia",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Gres",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Bro-Saoz",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Spagn",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Stadoù-Unanet",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Pariz",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Londrez",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Roma",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Moskov",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Aten",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "New York",
        "level": "starter",
        "theme": "places"
    }
]
    const lang = "br";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
