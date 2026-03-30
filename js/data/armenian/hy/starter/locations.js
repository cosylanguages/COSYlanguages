(function() {
    const data = [
    {
        "word": "Ֆրանսիա",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Իտալիա",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Ռուսաստան",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Հունաստան",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Անգլիա",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Իսպանիա",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "ԱՄՆ",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Փարիզ",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Լոնդոն",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Հռոմ",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Մոսկվա",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Աթենք",
        "level": "starter",
        "theme": "address_location_A1"
    },
    {
        "word": "Նյու Յորք",
        "level": "starter",
        "theme": "address_location_A1"
    }
];
    const lang = "hy";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
