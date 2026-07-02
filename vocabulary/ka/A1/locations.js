// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "საფრანგეთი",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "იტალია",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "რუსეთი",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "საბერძნეთი",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "ინგლისი",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "ესპანეთი",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "აშშ",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "პარიზი",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "ლონდონი",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "რომი",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "მოსკოვი",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "ათენი",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "ნიუ-იორკი",
        "level": "starter",
        "theme": "places"
    }
]
    const lang = "ka";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
