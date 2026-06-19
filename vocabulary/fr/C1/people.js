(function() {
    const data = [
    {
        "word": "Claude Monet",
        "level": "advanced",
        "theme": "identity_self_c1",
        "lang": "fr",
        "id": "fr_advanced_identity_self_c1_misc_claude_monet"
    },
    {
        "word": "Jean-Paul Sartre",
        "level": "advanced",
        "theme": "identity_self_c1",
        "lang": "fr",
        "id": "fr_advanced_identity_self_c1_misc_jean-paul_sartre"
    }
];
    const lang = "fr";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
})();