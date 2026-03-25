const fs = require('fs');

const files = {
    "en": "js/data/germanic/en/starter/verbs.js",
    "fr": "js/data/romance/fr/starter/verbs.js",
    "it": "js/data/romance/it/starter/verbs.js",
    "ru": "js/data/slavic/ru/starter/verbs.js",
    "el": "js/data/hellenic/el/starter/verbs.js"
};

function getVerbs(filepath) {
    if (!fs.existsSync(filepath)) return [];
    const content = fs.readFileSync(filepath, 'utf8');
    const match = content.match(/const data = (\[[\s\S]*?\]);/);
    if (!match) return [];
    try {
        // Simple regex to get words to avoid eval issues if possible,
        // but since I wrote them with JSON.stringify earlier, it might be safe to JSON.parse
        // or just use regex.
        const words = [];
        const wordRegex = /"word":\s*"([^"]+)"/g;
        let m;
        while ((m = wordRegex.exec(match[1])) !== null) {
            words.push(m[1]);
        }
        return words;
    } catch (e) {
        return [];
    }
}

Object.entries(files).forEach(([lang, path]) => {
    const verbs = getVerbs(path);
    console.log(`${lang.toUpperCase()}: ${verbs.length} verbs`);
});
