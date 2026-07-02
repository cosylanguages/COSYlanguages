(function() {
    const data = [
        {
            "word": "мин",
            "level": "starter",
            "theme": "people",
            "emoji": "🙋",
            "form": "pronoun",
            "definitions": [{ "text": "Беренсе зат, берлек һан.", "examples": ["Мин студент."] }]
        },
        {
            "word": "син",
            "level": "starter",
            "theme": "people",
            "emoji": "🫵",
            "form": "pronoun",
            "definitions": [{ "text": "Икенсе зат, берлек һан.", "examples": ["Хәлдәрең нисек син?"] }]
        },
        {
            "word": "ул",
            "level": "starter",
            "theme": "people",
            "emoji": "👨",
            "form": "pronoun",
            "definitions": [{ "text": "Өсөнсө зат, берлек һан.", "examples": ["Ул минең ағайым."] }]
        },
        {
            "word": "беҙ",
            "level": "starter",
            "theme": "people",
            "emoji": "👥",
            "form": "pronoun",
            "definitions": [{ "text": "Беренсе зат, күплек һан.", "examples": ["Беҙ дуҫтар."] }]
        },
        {
            "word": "улар",
            "level": "starter",
            "theme": "people",
            "emoji": "👥",
            "form": "pronoun",
            "definitions": [{ "text": "Өсөнсө зат, күплек һан.", "examples": ["Улар бергә эшләйҙәр."] }]
        },
        {
            "word": "минең",
            "level": "starter",
            "theme": "people",
            "emoji": "🙋",
            "form": "determiner",
            "definitions": [{ "text": "Эйәлекте күрһәтә (мин).", "examples": ["Минең исемем Иван."] }]
        },
        {
            "word": "һинең",
            "level": "starter",
            "theme": "people",
            "emoji": "🫵",
            "form": "determiner",
            "definitions": [{ "text": "Эйәлекте күрһәтә (син).", "examples": ["Бу һинең телефоныңмы?"] }]
        },
        {
            "word": "әрваҡыт",
            "level": "starter",
            "theme": "frequency_adverbs_A1",
            "emoji": "🔄",
            "form": "adverb",
            "definitions": [{ "text": "Һәр ваҡытта.", "examples": ["Мин әрваҡыт кофе эсәм."] }]
        },
        {
            "word": "ни ҡасан да",
            "level": "starter",
            "theme": "frequency_adverbs_A1",
            "emoji": "❌",
            "form": "adverb",
            "definitions": [{ "text": "Ниндәй ҙә булһа ваҡытта түгел.", "examples": ["Мин ни ҡасан да һуңға ҡалмайым."] }]
        },
        {
            "word": "һәм",
            "level": "starter",
            "theme": "conjunctions_connectors_A1",
            "emoji": "➕",
            "form": "conjunction",
            "definitions": [{ "text": "Һүҙҙәрҙе йәки һөйләмдәрҙе бәйләй.", "examples": ["Кофе һәм сәй."] }]
        },
        {
            "word": "ләкин",
            "level": "starter",
            "theme": "conjunctions_connectors_A1",
            "emoji": "❓",
            "form": "conjunction",
            "definitions": [{ "text": "Ҡаршылыҡты күрһәтә.", "examples": ["Миңә кофе оҡшай, ләкин һөт түгел."] }]
        }
    ];
    const lang = "ba";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
