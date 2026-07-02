// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Γαλλία",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Ιταλία",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Ρωσία",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Ελλάδα",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Αγγλία",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Ισπανία",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "ΗΠΑ",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Παρίσι",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Λονδίνο",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Ρώμη",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Μόσχα",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Αθήνα",
        "level": "starter",
        "theme": "places"
    },
    {
        "word": "Νέα Υόρκη",
        "level": "starter",
        "theme": "places"
    }
]
    const lang = "el";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
