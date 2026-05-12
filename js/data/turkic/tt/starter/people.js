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
                    "text": "Бер шәхес.",
                    "examples": ["Яхшы кеше."]
                }
            ]
        },
        {
            "word": "хатын-кыз",
            "level": "starter",
            "theme": "people_A1",
            "emoji": "👩",
            "form": "noun",
            "definitions": [
                {
                    "text": "Өлкән кеше (хатын).",
                    "examples": ["Ул хатын — укытучы."]
                }
            ]
        },
        {
            "word": "ир-ат",
            "level": "starter",
            "theme": "people_A1",
            "emoji": "👨",
            "form": "noun",
            "definitions": [
                {
                    "text": "Өлкән кеше (ир).",
                    "examples": ["Бу ир монда эшли."]
                }
            ]
        }
    ];
    const lang = "tt";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
