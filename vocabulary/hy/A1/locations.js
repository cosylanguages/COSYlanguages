// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Ֆրանսիա",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Իտալիա",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Ռուսաստան",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Հունաստան",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Անգլիա",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Իսպանիա",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "ԱՄՆ",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Փարիզ",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Լոնդոն",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Հռոմ",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Մոսկվա",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Աթենք",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Նյու Յորք",
        "level": "starter",
        "theme": "places"
    }
]
    const lang = "hy";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
