(function() {
    const data = [
        {
            "word": "мин",
            "level": "starter",
            "theme": "people",
            "emoji": "🙋",
            "form": "pronoun",
            "definitions": [{ "text": "Беренче зат, берлек сан.", "examples": ["Мин студент."] }]
        },
        {
            "word": "син",
            "level": "starter",
            "theme": "people",
            "emoji": "🫵",
            "form": "pronoun",
            "definitions": [{ "text": "Икенче зат, берлек сан.", "examples": ["Хәлләрең ничек син?"] }]
        },
        {
            "word": "ул",
            "level": "starter",
            "theme": "people",
            "emoji": "👨",
            "form": "pronoun",
            "definitions": [{ "text": "Өченче зат, берлек сан.", "examples": ["Ул минем абый."] }]
        },
        {
            "word": "без",
            "level": "starter",
            "theme": "people",
            "emoji": "👥",
            "form": "pronoun",
            "definitions": [{ "text": "Беренче зат, күплек сан.", "examples": ["Без дуслар."] }]
        },
        {
            "word": "алар",
            "level": "starter",
            "theme": "people",
            "emoji": "👥",
            "form": "pronoun",
            "definitions": [{ "text": "Өченче зат, күплек сан.", "examples": ["Алар бергә эшлиләр."] }]
        },
        {
            "word": "минем",
            "level": "starter",
            "theme": "people",
            "emoji": "🙋",
            "form": "determiner",
            "definitions": [{ "text": "Төшемлелекне күрсәтә (мин).", "examples": ["Минем исемем Иван."] }]
        },
        {
            "word": "синең",
            "level": "starter",
            "theme": "people",
            "emoji": "🫵",
            "form": "determiner",
            "definitions": [{ "text": "Төшемлелекне күрсәтә (син).", "examples": ["Бу синең телефоныңмы?"] }]
        },
        {
            "word": "һәрвакыт",
            "level": "starter",
            "theme": "frequency_adverbs_A1",
            "emoji": "🔄",
            "form": "adverb",
            "definitions": [{ "text": "Һәрбер вакытта.", "examples": ["Мин һәрвакыт кофе эчәм."] }]
        },
        {
            "word": "беркайчан да",
            "level": "starter",
            "theme": "frequency_adverbs_A1",
            "emoji": "❌",
            "form": "adverb",
            "definitions": [{ "text": "Бернинди вакытта да түгел.", "examples": ["Мин беркайчан да соңга калмыйм."] }]
        },
        {
            "word": "һәм",
            "level": "starter",
            "theme": "conjunctions_connectors_A1",
            "emoji": "➕",
            "form": "conjunction",
            "definitions": [{ "text": "Сүзләрне яки җөмләләрне бәйли.", "examples": ["Кофе һәм чәй."] }]
        },
        {
            "word": "ләкин",
            "level": "starter",
            "theme": "conjunctions_connectors_A1",
            "emoji": "❓",
            "form": "conjunction",
            "definitions": [{ "text": "Каршылыкны күрсәтә.", "examples": ["Миңа кофе ошый, ләкин сөт түгел."] }]
        }
    ];
    const lang = "tt";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
