const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Pattern: (function() { const data = [ {(function() { const data = [ ... ]; ... })(); }]; })();
    // We want to keep the inner data and the outer assignments.

    // Let's try a more direct approach:
    // 1. Remove the first few lines up to the second "const data = ["
    // 2. Remove the trailing junk: "]; })(); }]; })();" and replace with correct closing.

    const innerDataStart = content.indexOf('const data = [', content.indexOf('const data = [') + 1);
    if (innerDataStart === -1) return; // Not the pattern we're looking for or already fixed.

    const lastDataEnd = content.lastIndexOf('];');
    if (lastDataEnd === -1) return;

    // The data we want is between innerDataStart and lastDataEnd
    const dataContent = content.substring(innerDataStart, lastDataEnd + 2);

    // Extract the language
    const langMatch = content.match(/const lang = "([^"]+)"/);
    const lang = langMatch ? langMatch[1] : path.basename(path.dirname(path.dirname(filePath)));

    const fixedContent = `(function() {
    ${dataContent}
    const lang = "${lang}";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();`;

    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed ${filePath}`);
}

const targets = [
    'vocabulary/ba/A1/vocabulary.js',
    'vocabulary/br/A1/vocabulary.js',
    'vocabulary/de/A1/vocabulary.js',
    'vocabulary/el/A1/vocabulary.js',
    'vocabulary/hy/A1/vocabulary.js',
    'vocabulary/ka/A1/vocabulary.js',
    'vocabulary/pt/A1/vocabulary.js',
    'vocabulary/ru/A1/vocabulary.js',
    'vocabulary/tt/A1/vocabulary.js'
];

targets.forEach(t => {
    if (fs.existsSync(t)) fixFile(t);
});
