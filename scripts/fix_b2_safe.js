const fs = require('fs');
const path = require('path');

const languages = ['en', 'fr', 'it', 'ru', 'el', 'es', 'de', 'pt', 'hy', 'ka', 'tt', 'ba', 'br'];
const baseDir = 'vocabulary';

// Correct theme mapping based on file names for fallback
const fileToTheme = {
    'adjectives.js': 'describing',
    'verbs.js': 'other', // Verbs usually have their own theme or 'other'
    'people.js': 'people',
    'opinions.js': 'social',
    'fluency.js': 'language',
    'debates.js': 'language',
    'quotes.js': 'art_culture',
    'vocabulary.js': 'other'
};

function getNextId(lang, theme, existingIds) {
    let seq = 1;
    while (true) {
        const id = `${lang}_upper_intermediate_${theme}_${seq.toString().padStart(3, '0')}`;
        if (!existingIds.has(id)) {
            return id;
        }
        seq++;
    }
}

function cleanTheme(theme) {
    if (!theme) return null;
    return theme.replace(/_A1|_A2|_B1|_B2|_C1|_C2/g, '').toLowerCase();
}

const allExistingIds = new Set();

languages.forEach(lang => {
    const b2Dir = path.join(baseDir, lang, 'B2');
    if (!fs.existsSync(b2Dir)) return;

    const files = fs.readdirSync(b2Dir).filter(f => f.endsWith('.js'));

    files.forEach(file => {
        const filePath = path.join(b2Dir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // Regex to find the data array content and keep everything else
        const dataMatch = content.match(/const data = (\[[\s\S]*?\]);/);
        if (!dataMatch) return;

        let dataArrayStr = dataMatch[1];

        // Remove trailing empty objects {} often found in these files
        dataArrayStr = dataArrayStr.replace(/,\s*{\s*}\s*\]/, '\n    ]');

        // Now we need to parse the individual objects.
        // Since they aren't strictly JSON, we'll use a balancing bracket approach.
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

        const newObjects = objects.map(objStr => {
            if (objStr.trim() === '{}') return null;

            let updatedObj = objStr;

            // 1. Remove image
            updatedObj = updatedObj.replace(/"image":\s*"[^"]*",?\s*/g, '');

            // 2. Convert opposite to antonyms
            updatedObj = updatedObj.replace(/"opposite":\s*("[^"]*")/g, '"antonyms": [$1]');
            updatedObj = updatedObj.replace(/"opposite":\s*null/g, '"antonyms": []');

            // 3. Clean theme
            updatedObj = updatedObj.replace(/"theme":\s*"([^"]+)"/g, (m, p1) => `"theme": "${cleanTheme(p1)}"`);

            // 4. Add lang if missing
            if (!/"lang":/.test(updatedObj)) {
                updatedObj = updatedObj.replace('{', `{\n        "lang": "${lang}",`);
            }

            // 5. Add id if missing
            if (!/"id":/.test(updatedObj)) {
                const themeMatch = updatedObj.match(/"theme":\s*"([^"]+)"/);
                const theme = themeMatch ? themeMatch[1] : (fileToTheme[file] || 'vocabulary');
                const id = getNextId(lang, theme, allExistingIds);
                allExistingIds.add(id);
                updatedObj = updatedObj.replace('{', `{\n        "id": "${id}",`);
            } else {
                // Record existing ID to avoid collisions
                const idMatch = updatedObj.match(/"id":\s*"([^"]+)"/);
                if (idMatch) allExistingIds.add(idMatch[1]);
            }

            return updatedObj;
        }).filter(o => o !== null);

        const newDataArrayStr = '[\n    ' + newObjects.join(',\n    ') + '\n    ]';
        const newContent = content.replace(dataMatch[0], `const data = ${newDataArrayStr};`);

        fs.writeFileSync(filePath, newContent);
        console.log(`Processed ${filePath} safely.`);
    });
});
