(function() {
    const data = [
        {
            "word": "кеше",
            "level": "starter",
            "theme": "people_A1",
            "emoji": "👤",
            "form": "noun",
            "definitions": [
                {
                    "text": "Бер кеше.",
                    "examples": ["Яҡшы кеше."]
                }
            ]
        },
        {
            "word": "ҡатын",
            "level": "starter",
            "theme": "people_A1",
            "emoji": "👩",
            "form": "noun",
            "definitions": [
                {
                    "text": "Өлкән ҡатын-ҡыҙ.",
                    "examples": ["Был ҡатын — уҡытыусы."]
                }
            ]
        },
        {
            "word": "ир",
            "level": "starter",
            "theme": "people_A1",
            "emoji": "👨",
            "form": "noun",
            "definitions": [
                {
                    "text": "Өлкән ир-ат.",
                    "examples": ["Ир монда эшлай."]
                }
            ]
        }
    ];
    const lang = "ba";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
