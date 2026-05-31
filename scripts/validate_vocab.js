const fs = require('fs');
const path = require('path');
const vm = require('vm');

const baseDir = 'js/data/romance/fr';
const levels = ['starter', 'elementary', 'intermediate', 'upper-intermediate', 'advanced', 'proficiency'];

let totalEntries = 0;
const idSet = new Map();
const violations = [];

function validateEntry(entry, filePath) {
    totalEntries++;
    const requiredFields = ['id', 'word', 'form', 'level', 'theme', 'definitions'];
    const actualMissing = requiredFields.filter(field => entry[field] === undefined || entry[field] === null || entry[field] === '');

    if (actualMissing.length > 0) {
        violations.push(`${filePath}: Entry "${entry.word || 'unknown'}" missing fields: ${actualMissing.join(', ')}`);
    }

    if (entry.id) {
        if (idSet.has(entry.id)) {
            violations.push(`${filePath}: Duplicate ID found: ${entry.id} (previously in ${idSet.get(entry.id)})`);
        }
        idSet.set(entry.id, filePath);
    }
}

function processFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');

    const sandbox = {
        window: {},
        console: console
    };
    sandbox.self = sandbox.window;

    try {
        vm.createContext(sandbox);
        vm.runInContext(content, sandbox);

        const dataContainers = [
            sandbox.window.vocabularyData,
            sandbox.window.verbsData,
            sandbox.window.adjectivesData,
            sandbox.window.locationsData,
            sandbox.window.peopleData,
            sandbox.window.nationalitiesData,
            sandbox.window.grammarElements,
            sandbox.window.grammarData,
            sandbox.window.phrasesData,
            sandbox.window.speakingData
        ];

        let foundData = false;
        dataContainers.forEach(container => {
            if (!container || !container.fr) return;
            foundData = true;

            const frData = container.fr;
            if (Array.isArray(frData)) {
                frData.forEach(entry => validateEntry(entry, filePath));
            } else if (typeof frData === 'object') {
                Object.values(frData).forEach(val => {
                    if (Array.isArray(val)) {
                        val.forEach(entry => validateEntry(entry, filePath));
                    }
                });
            }
        });

        if (!foundData) {
            const arrayRegex = /(?:data|Data|fr)\s*=\s*\[\s*([\s\S]*?)\s*\](?=\s*(?:;|\)\)|$))/;
            const match = content.match(arrayRegex);
            if (match) {
                const data = new Function(`return [${match[1]}]`)();
                if (Array.isArray(data) && data.length > 0 && data[0].word) {
                    data.forEach(entry => validateEntry(entry, filePath));
                }
            }
        }
    } catch (e) {
        violations.push(`${filePath}: Failed to parse/execute: ${e.message}`);
    }
}

function main() {
    levels.forEach(level => {
        const dir = path.join(baseDir, level);
        if (fs.existsSync(dir)) {
            const files = fs.readdirSync(dir).filter(f => f.endsWith('.js')).sort();
            files.forEach(file => {
                if (file === 'speaking.js') return;
                processFile(path.join(dir, file));
            });
        }
    });

    console.log('--- Vocabulary Validation Summary ---');
    console.log(`Total entries checked: ${totalEntries}`);
    console.log(`Total violations found: ${violations.length}`);

    if (violations.length > 0) {
        console.log('\nViolations:');
        violations.forEach(v => console.log(`- ${v}`));
        process.exit(1);
    } else {
        console.log('\nAll checks passed!');
        process.exit(0);
    }
}

main();
