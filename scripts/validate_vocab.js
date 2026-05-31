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
    'vocabulary/es/C2'
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
                lang: "es"
            };
            vm.createContext(context);

            try {
                vm.runInContext(`const pronouns = ["yo", "tú", "él", "ella", "nosotros", "vosotros", "ellos", "ellas"];`, context);
                vm.runInContext(content, context);

                let data = [];
                if (context.window.speakingData && context.window.speakingData.es) {
                    Object.values(context.window.speakingData.es).forEach(arr => {
                        if (Array.isArray(arr)) data.push(...arr);
                    });
                }
                if (context.window.vocabularyData && context.window.vocabularyData.es) {
                    data.push(...context.window.vocabularyData.es);
                }
                ['verbsData', 'adjectivesData', 'locationsData', 'peopleData', 'nationalitiesData', 'grammarData'].forEach(key => {
                    if (context.window[key] && context.window[key].es) {
                        data.push(...context.window[key].es);
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
