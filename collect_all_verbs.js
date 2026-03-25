const fs = require('fs');
const path = require('path');

const langPaths = {
    "fr": "js/data/romance/fr",
    "it": "js/data/romance/it",
    "ru": "js/data/slavic/ru",
    "el": "js/data/hellenic/el"
};

const levels = ["starter", "elementary", "intermediate", "upper-intermediate", "advanced", "proficiency"];

const allVerbs = {};

Object.entries(langPaths).forEach(([lang, basePath]) => {
    allVerbs[lang] = [];
    levels.forEach(lvl => {
        const lvlFile = path.join(basePath, lvl, "verbs.js");
        if (fs.existsSync(lvlFile)) {
            const content = fs.readFileSync(lvlFile, 'utf8');
            const match = content.match(/const data = (\[[\s\S]*?\]);/);
            if (match) {
                try {
                    const data = eval(match[1]);
                    data.forEach(v => {
                        v.originalLevel = lvl;
                        allVerbs[lang].push(v);
                    });
                } catch (e) {}
            }
        }
    });
});

fs.writeFileSync('all_langs_verbs.json', JSON.stringify(allVerbs, null, 2));
console.log("Saved all verbs from all levels for each language to all_langs_verbs.json");
