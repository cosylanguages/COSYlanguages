(function() {
    const data = [
        {
            "word": "bacalhau",
            "level": "starter",
            "theme": "basic_foods_A1",
            "emoji": "🐟",
            "form": "noun",
            "definitions": [
                {
                    "text": "Peixe salgado típico de Portugal.",
                    "examples": ["Eu gosto de bacalhau à brás."]
                }
            ],
            "article": "o",
            "gender": "masculine"
        },
        {
            "word": "feijoada",
            "level": "starter",
            "theme": "basic_foods_A1",
            "emoji": "🍲",
            "form": "noun",
            "definitions": [
                {
                    "text": "Prato de feijão e carne.",
                    "examples": ["A feijoada é um prato tradicional."]
                }
            ],
            "article": "a",
            "gender": "feminine"
        },
        {
            "word": "brigadeiro",
            "level": "starter",
            "theme": "basic_foods_A1",
            "emoji": "🍫",
            "form": "noun",
            "definitions": [
                {
                    "text": "Doce de chocolate brasileiro.",
                    "examples": ["O brigadeiro é muito doce."]
                }
            ],
            "article": "o",
            "gender": "masculine"
        }
    ];
    const lang = "pt";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
