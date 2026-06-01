const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dirs = [];

function addJsDataDirs(family, lang) {
    const base = path.join('js/data', family, lang);
    if (fs.existsSync(base)) {
        const levels = fs.readdirSync(base);
        levels.forEach(level => {
            const fullPath = path.join(base, level);
            if (fs.statSync(fullPath).isDirectory()) {
                dirs.push(fullPath);
            }
        });
    }
}

if (fs.existsSync('js/data')) {
    const families = fs.readdirSync('js/data');
    families.forEach(family => {
        const familyPath = path.join('js/data', family);
        if (fs.statSync(familyPath).isDirectory()) {
            const langs = fs.readdirSync(familyPath);
            langs.forEach(lang => {
                const langPath = path.join(familyPath, lang);
                if (fs.statSync(langPath).isDirectory()) {
                    addJsDataDirs(family, lang);
                }
            });
        }
    });
}

if (fs.existsSync('vocabulary')) {
    const vLangs = fs.readdirSync('vocabulary');
    vLangs.forEach(vLang => {
        const vLangPath = path.join('vocabulary', vLang);
        if (fs.statSync(vLangPath).isDirectory() && vLang !== '_schema') {
            const vLevels = fs.readdirSync(vLangPath);
            vLevels.forEach(vLevel => {
                const fullPath = path.join(vLangPath, vLevel);
                if (fs.statSync(fullPath).isDirectory()) {
                    dirs.push(fullPath);
                }
            });
        }
    });
}

let totalEntries = 0;
let entriesWithEtymology = 0;
let entriesMissingEtymology = 0;
const ids = new Set();

dirs.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir).sort();
    files.forEach(file => {
        if (file.endsWith('.js') && !['alphabets.js', 'translations.js', 'speaking.js'].includes(file)) {
            const filePath = path.join(dir, file);
            const content = fs.readFileSync(filePath, 'utf8');

            let lang = "en";
            const parts = filePath.split(path.sep);
            if (parts[0] === 'js' && parts[1] === 'data') {
                lang = parts[3];
            } else if (parts[0] === 'vocabulary') {
                lang = parts[1];
            }

            const context = {
                window: {
                    speakingData: {},
                    vocabularyData: {},
                    grammarData: {},
                    grammarElements: {},
                    verbsData: {},
                    adjectivesData: {},
                    locationsData: {},
                    peopleData: {},
                    nationalitiesData: {},
                    phrasesData: {}
                },
                console: console,
                lang: lang
            };
            vm.createContext(context);

            try {
                let pronouns;
                if (lang === 'fr') pronouns = '["je", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles"]';
                else if (lang === 'de') pronouns = '["ich", "du", "er", "sie", "es", "wir", "ihr", "sie"]';
                else if (lang === 'en') pronouns = '["I", "you", "he", "she", "it", "we", "they"]';
                else if (lang === 'ru') pronouns = '["я", "ты", "он/она/оно", "мы", "вы", "они"]';
                else if (lang === 'pt') pronouns = '["eu", "tu", "ele/ela", "nós", "vós", "eles/elas"]';
                else pronouns = '["yo", "tú", "él", "ella", "nosotros", "vosotros", "ellos", "ellas"]';

                vm.runInContext(`const pronouns = ${pronouns};`, context);
                vm.runInContext(content, context);

                let data = [];
                if (context.window.speakingData && context.window.speakingData[lang]) {
                    Object.values(context.window.speakingData[lang]).forEach(arr => {
                        if (Array.isArray(arr)) data.push(...arr);
                    });
                }
                if (context.window.vocabularyData && context.window.vocabularyData[lang]) {
                    data.push(...context.window.vocabularyData[lang]);
                }
                ['verbsData', 'adjectivesData', 'locationsData', 'peopleData', 'nationalitiesData', 'grammarData', 'grammarElements', 'phrasesData'].forEach(key => {
                    if (context.window[key] && context.window[key][lang]) {
                        data.push(...context.window[key][lang]);
                    }
                });

                const uniqueRefs = new Set(data);

                uniqueRefs.forEach((entry, index) => {
                    totalEntries++;

                    if (entry.etymology && entry.etymology.origin_lang) {
                        entriesWithEtymology++;
                    } else {
                        entriesMissingEtymology++;
                    }
                });

            } catch (e) {
                console.error(`Error in ${filePath}: ${e.message}`);
            }
        }
    });
});

console.log(`Total entries: ${totalEntries}`);
console.log(`Entries with etymology: ${entriesWithEtymology}`);
console.log(`Entries missing etymology: ${entriesMissingEtymology}`);
console.log(`Etymology coverage: ${((entriesWithEtymology / totalEntries) * 100).toFixed(2)}%`);
