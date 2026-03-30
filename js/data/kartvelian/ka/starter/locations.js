(function() {
    const data = [
    {
        "word": "საფრანგეთი",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "იტალია",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "რუსეთი",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "საბერძნეთი",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "ინგლისი",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "ესპანეთი",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "აშშ",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "პარიზი",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "ლონდონი",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "რომი",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "მოსკოვი",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "ათენი",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "ნიუ-იორკი",
        "level": "starter",
        "theme": "address_location_A1"
    }
];
    const lang = "ka";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
