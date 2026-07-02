// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Frankreich",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Italien",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Russland",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Griechenland",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "England",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Spanien",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "USA",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Paris",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "London",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Rom",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Moskau",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Athen",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "New York",
        "level": "starter",
        "theme": "places"
    }
]
    const lang = "de";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
