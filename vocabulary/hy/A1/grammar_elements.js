(function() {
    const data = [
        {
            "word": "ես",
            "level": "starter",
            "theme": "people",
            "emoji": "🙋",
            "form": "pronoun",
            "definitions": [{ "text": "Առաջին դեմք, եզակի թիվ:", "examples": ["Ես ուսանող եմ:"] }]
        },
        {
            "word": "դու",
            "level": "starter",
            "theme": "people",
            "emoji": "🫵",
            "form": "pronoun",
            "definitions": [{ "text": "Երկրորդ դեմք, եզակի թիվ:", "examples": ["Ինչպե՞ս ես դու:"] }]
        },
        {
            "word": "նա",
            "level": "starter",
            "theme": "people",
            "emoji": "👨",
            "form": "pronoun",
            "definitions": [{ "text": "Երրորդ դեմք, եզակի թիվ:", "examples": ["Նա իմ եղբայրն է:"] }]
        },
        {
            "word": "մենք",
            "level": "starter",
            "theme": "people",
            "emoji": "👥",
            "form": "pronoun",
            "definitions": [{ "text": "Առաջին դեմք, հոգնակի թիվ:", "examples": ["Մենք ընկերներ ենք:"] }]
        },
        {
            "word": "նրանք",
            "level": "starter",
            "theme": "people",
            "emoji": "👥",
            "form": "pronoun",
            "definitions": [{ "text": "Երրորդ դեմք, հոգնակի թիվ:", "examples": ["Նրանք միասին են աշխատում:"] }]
        },
        {
            "word": "իմ",
            "level": "starter",
            "theme": "people",
            "emoji": "🙋",
            "form": "determiner",
            "definitions": [{ "text": "Ցույց է տալիս պատկանելություն (ես):", "examples": ["Իմ անունը Հովհաննես է:"] }]
        },
        {
            "word": "քո",
            "level": "starter",
            "theme": "people",
            "emoji": "🫵",
            "form": "determiner",
            "definitions": [{ "text": "Ցույց է տալիս պատկանելություն (դու):", "examples": ["Սա քո՞ հեռախոսն է:"] }]
        },
        {
            "word": "միշտ",
            "level": "starter",
            "theme": "frequency_adverbs_A1",
            "emoji": "🔄",
            "form": "adverb",
            "definitions": [{ "text": "Ամեն ժամանակ:", "examples": ["Ես միշտ սուրճ եմ խմում:"] }]
        },
        {
            "word": "երբեք",
            "level": "starter",
            "theme": "frequency_adverbs_A1",
            "emoji": "❌",
            "form": "adverb",
            "definitions": [{ "text": "Ոչ մի ժամանակ:", "examples": ["Ես երբեք չեմ ուշանում:"] }]
        },
        {
            "word": "և",
            "level": "starter",
            "theme": "conjunctions_connectors_A1",
            "emoji": "➕",
            "form": "conjunction",
            "definitions": [{ "text": "Միացնում է բառեր կամ նախադասություններ:", "examples": ["Սուրճ և թեյ:"] }]
        },
        {
            "word": "բայց",
            "level": "starter",
            "theme": "conjunctions_connectors_A1",
            "emoji": "❓",
            "form": "conjunction",
            "definitions": [{ "text": "Ցույց է տալիս հակադրություն:", "examples": ["Ես սիրում եմ սուրճ, բայց ոչ կաթ:"] }]
        }
    ];
    const lang = "hy";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
