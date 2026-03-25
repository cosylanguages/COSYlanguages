const fs = require('fs');

const files = {
    "en": "js/data/germanic/en/starter/verbs.js",
    "fr": "js/data/romance/fr/starter/verbs.js",
    "it": "js/data/romance/it/starter/verbs.js",
    "ru": "js/data/slavic/ru/starter/verbs.js",
    "el": "js/data/hellenic/el/starter/verbs.js"
};

function getVerbEntries(filepath) {
    if (!fs.existsSync(filepath)) return [];
    const content = fs.readFileSync(filepath, 'utf8');
    const match = content.match(/const data = (\[[\s\S]*?\]);/);
    if (!match) return [];
    return eval(match[1]);
}

const enVerbs = getVerbEntries(files.en);
const enWords = enVerbs.map(v => v.word);

console.log(JSON.stringify(enWords, null, 2));
