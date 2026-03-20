(function() {
    const data = [
    {
        "word": "firefighter",
        "level": "advanced",
        "theme": "advanced_register_C1",
        "emoji": "👨‍🚒",
        "form": "noun",
        "plural": "firefighters",
        "definitions": [
            {
                "text": "A person whose job is to stop fires from burning.",
                "examples": [
                    "The firefighter is wearing a helmet.",
                    "Firefighters are very brave."
                ]
            },
            {
                "text": "This person works at a fire station.",
                "examples": [
                    "Firefighters drive a big red truck."
                ]
            }
        ]
    },
    {
        "word": "data scientist",
        "level": "advanced",
        "theme": "advanced_register_C1",
        "emoji": "📊",
        "form": "noun",
        "plural": "data scientists",
        "definitions": [
            {
                "text": "A person who analyzes data to find patterns.",
                "examples": [
                    "The data scientist is using machine learning.",
                    "Data scientists are in high demand."
                ]
            },
            {
                "text": "This person works with large amounts of information on a computer.",
                "examples": [
                    "Data scientists help companies make better decisions."
                ]
            }
        ]
    },
    {
        "word": "charismatic",
        "level": "advanced",
        "theme": "power_institutions_C1",
        "form": "adjective"
    },
    {
        "word": "virtual reality",
        "level": "advanced",
        "theme": "science_tech_society_C1",
        "emoji": "🥽",
        "form": "noun",
        "plural": "virtual realities"
    },
    {
        "word": "quantum mechanics",
        "level": "advanced",
        "theme": "science_tech_society_C1",
        "emoji": "⚛️",
        "form": "noun",
        "plural": "quantum mechanicses"
    },
    {
        "word": "sustainability",
        "level": "advanced",
        "theme": "power_institutions_C1",
        "emoji": "🌱",
        "form": "noun",
        "plural": "sustainabilities"
    },
    {
        "word": "infrastructure",
        "level": "advanced",
        "theme": "science_tech_society_C1",
        "emoji": "🏗️",
        "form": "noun",
        "plural": "infrastructures"
    },
    {
        "word": "biodiversity",
        "level": "advanced",
        "theme": "advanced_register_C1",
        "emoji": "🦋",
        "form": "noun",
        "plural": "biodiversities"
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
