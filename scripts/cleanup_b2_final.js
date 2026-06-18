const fs = require('fs');
const path = require('path');

const languages = ['en', 'fr', 'it', 'ru', 'el'];

function removeLowLevel(filePath, wordsToRemove) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    const dataMatch = content.match(/const data = (\[[\s\S]*?\]);/);
    if (!dataMatch) return;

    let dataArrayStr = dataMatch[1];
    const objects = [];
    let depth = 0;
    let start = -1;
    let inString = false;
    let stringChar = '';

    for (let i = 0; i < dataArrayStr.length; i++) {
        const char = dataArrayStr[i];
        if ((char === '"' || char === "'") && dataArrayStr[i-1] !== '\\') {
            if (!inString) {
                inString = true;
                stringChar = char;
            } else if (char === stringChar) {
                inString = false;
            }
        }
        if (!inString) {
            if (char === '{') {
                if (depth === 0) start = i;
                depth++;
            } else if (char === '}') {
                depth--;
                if (depth === 0 && start !== -1) {
                    objects.push(dataArrayStr.substring(start, i + 1));
                    start = -1;
                }
            }
        }
    }

    const filteredObjects = objects.filter(objStr => {
        const wordMatch = objStr.match(/"word":\s*"([^"]+)"/);
        return !wordMatch || !wordsToRemove.includes(wordMatch[1]);
    });

    if (objects.length !== filteredObjects.length) {
        const newDataArrayStr = '[\n    ' + filteredObjects.join(',\n    ') + '\n    ]';
        const newContent = content.replace(dataMatch[0], `const data = ${newDataArrayStr};`);
        fs.writeFileSync(filePath, newContent);
        console.log(`Removed low-level words from ${filePath}`);
    }
}

const wordsByLang = {
    'en': ['garden', 'lawyer', 'police officer'],
    'fr': ['jardin', 'avocat'],
    'it': ['giardino', 'avvocato', 'farmacia'],
    'ru': ['сад', 'юрист', 'аптека'],
    'el': ['κήπος', 'δικηγόρος', 'αστυνομικός']
};

languages.forEach(lang => {
    removeLowLevel(`vocabulary/${lang}/B2/vocabulary.js`, wordsByLang[lang]);
});

// Remove TODO comments
const allB2Files = require('child_process').execSync('find vocabulary -path "*/B2/*.js"').toString().trim().split('\n');
allB2Files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('// TODO: verify level classification')) {
        content = content.replace(/\/\/ TODO: verify level classification\n?/g, '');
        fs.writeFileSync(file, content);
        console.log(`Removed TODO from ${file}`);
    }
});
