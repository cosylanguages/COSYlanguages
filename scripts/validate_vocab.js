const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dirs = [
    'js/data/romance/es/starter',
    'js/data/romance/es/elementary',
    'js/data/romance/es/intermediate',
    'js/data/romance/es/upper-intermediate',
    'js/data/romance/es/advanced',
    'js/data/romance/es/proficiency',
    'vocabulary/es/A1',
    'vocabulary/es/A2',
    'vocabulary/es/B1',
    'vocabulary/es/C2',
    'js/data/romance/fr/starter',
    'js/data/romance/fr/elementary',
    'js/data/romance/fr/intermediate',
    'js/data/romance/fr/upper-intermediate',
    'js/data/romance/fr/advanced',
    'js/data/romance/fr/proficiency',
    'js/data/germanic/de/starter',
    'js/data/germanic/de/elementary',
    'js/data/germanic/de/intermediate',
    'js/data/germanic/de/upper-intermediate',
    'js/data/germanic/de/advanced',
    'js/data/germanic/de/proficiency'
];

let totalEntries = 0;
const violations = [];
const ids = new Set();

dirs.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir).sort();
    files.forEach(file => {
        if (file.endsWith('.js') && !['alphabets.js', 'translations.js', 'speaking.js'].includes(file)) {
            const filePath = path.join(dir, file);
            const content = fs.readFileSync(filePath, 'utf8');

            let lang = "es";
            if (filePath.includes('/fr/')) lang = "fr";
            else if (filePath.includes('/de/')) lang = "de";

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
                    nationalitiesData: {}
                },
                console: console,
                lang: lang
            };
            vm.createContext(context);

            try {
                let pronouns;
                if (lang === 'fr') pronouns = '["je", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles"]';
                else if (lang === 'de') pronouns = '["ich", "du", "er", "sie", "es", "wir", "ihr", "sie"]';
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
                ['verbsData', 'adjectivesData', 'locationsData', 'peopleData', 'nationalitiesData', 'grammarData'].forEach(key => {
                    if (context.window[key] && context.window[key][lang]) {
                        data.push(...context.window[key][lang]);
                    }
                });

                const uniqueRefs = new Set(data);

                uniqueRefs.forEach((entry, index) => {
                    totalEntries++;
                    const fields = ['id', 'word', 'form', 'level', 'theme', 'definitions', 'lang'];
                    fields.forEach(field => {
                        if (!entry[field]) {
                            violations.push(`Missing ${field} in ${filePath} at entry "${entry.word || entry.t || 'index ' + index}"`);
                        }
                    });

                    if (entry.id) {
                        if (ids.has(entry.id)) {
                            violations.push(`Duplicate ID ${entry.id} in ${filePath} (word: ${entry.word})`);
                        }
                        ids.add(entry.id);
                    }
                });

            } catch (e) {
                if (!e.message.includes('lang is not defined') && !e.message.includes('pronouns is not defined')) {
                    console.error(`Error validating ${filePath}: ${e.message}`);
                    console.error(e.stack);
                }
            }
        }
    });
});

console.log(`Total entries: ${totalEntries}`);
if (violations.length === 0) {
    console.log('No violations found! ✅');
} else {
    console.log(`${violations.length} violations found:`);
    violations.forEach(v => console.log(v));
    process.exit(1);
}
