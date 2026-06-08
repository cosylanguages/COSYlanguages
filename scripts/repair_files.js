const fs = require('fs');
const path = require('path');

function repair(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // FIX: Remove double commas before repairing the structure
    content = content.replace(/,,/g, ',');

    const startIdx = content.indexOf('const data = [');
    if (startIdx === -1) return;

    const arrayStart = content.indexOf('[', startIdx);
    let bracketCount = 0;
    let arrayEnd = -1;
    let inString = false;
    for (let i = arrayStart; i < content.length; i++) {
        let char = content[i];
        if (char === '"' && (i === 0 || content[i-1] !== '\\')) inString = !inString;
        if (!inString) {
            if (char === '[') bracketCount++;
            else if (char === ']') {
                bracketCount--;
                if (bracketCount === 0) {
                    arrayEnd = i;
                    break;
                }
            }
        }
    }

    if (arrayEnd === -1) return;

    let dataArrayContent = content.substring(arrayStart, arrayEnd + 1);

    // FIX: Remove trailing comma before }
    dataArrayContent = dataArrayContent.replace(/,\s*\}/g, '}');
    // FIX: Handle definition object trailing commas specifically
    dataArrayContent = dataArrayContent.replace(/,\s*\]/g, ']');

    const lastObjClose = dataArrayContent.lastIndexOf('}');
    if (lastObjClose !== -1) {
         dataArrayContent = dataArrayContent.substring(0, lastObjClose + 1) + "\n    ]";
    }

    let lang = "en";
    const langMatch = content.match(/lang\s*=\s*"([^"]+)"/);
    if (langMatch) lang = langMatch[1];
    else {
        const parts = filePath.split(path.sep);
        if (parts.includes('data')) lang = parts[parts.indexOf('data') + 2];
        else if (parts.includes('vocabulary')) lang = parts[parts.indexOf('vocabulary') + 1];
    }

    let windowProp = "vocabularyData";
    if (content.includes('window.verbsData')) windowProp = "verbsData";
    else if (content.includes('window.grammarData')) windowProp = "grammarData";
    else if (content.includes('window.adjectivesData')) windowProp = "adjectivesData";
    else if (content.includes('window.phrasesData')) windowProp = "phrasesData";
    else if (content.includes('window.speakingData')) windowProp = "speakingData";

    let pronouns = "";
    if (content.includes('const pronouns =')) {
        const pMatch = content.match(/const pronouns = \[.*?\];/);
        if (pMatch) pronouns = "\n    " + pMatch[0];
    }

    const newContent = `(function() {${pronouns}
    const data = ${dataArrayContent};
    const lang = "${lang}";
    window.${windowProp} = window.${windowProp} || {};
    window.${windowProp}[lang] = [...(window.${windowProp}[lang] || []), ...data];
})();`;

    fs.writeFileSync(filePath, newContent);
    console.log(`Repaired ${filePath}`);
}

const files = [
    'js/data/germanic/de/starter/grammar.js',
    'js/data/romance/es/starter/grammar.js',
    'js/data/romance/pt/starter/grammar.js',
    'vocabulary/ba/A1/vocabulary.js',
    'vocabulary/br/A1/vocabulary.js',
    'vocabulary/de/A1/adjectives.js',
    'vocabulary/de/A1/verbs.js',
    'vocabulary/de/A1/vocabulary.js',
    'vocabulary/el/A1/vocabulary.js',
    'vocabulary/es/A1/verbs.js',
    'vocabulary/hy/A1/vocabulary.js',
    'vocabulary/ka/A1/vocabulary.js',
    'vocabulary/pt/A1/verbs.js',
    'vocabulary/pt/A1/vocabulary.js',
    'vocabulary/ru/A1/verbs.js',
    'vocabulary/ru/A1/vocabulary.js',
    'vocabulary/tt/A1/vocabulary.js'
];

files.forEach(f => {
    if (fs.existsSync(f)) repair(f);
});
