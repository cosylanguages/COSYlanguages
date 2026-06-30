const fs = require('fs');
const path = require('path');

const LANGS = ['en', 'fr', 'it', 'es', 'pt', 'de', 'ru', 'el', 'hy', 'ka', 'tt', 'ba', 'br'];
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

console.log('# Curriculum Coverage Report\n');
console.log('| Language | ' + LEVELS.join(' | ') + ' |');
console.log('| --- | ' + LEVELS.map(() => '---').join(' | ') + ' |');

LANGS.forEach(lang => {
    let row = `| ${lang} |`;
    LEVELS.forEach(level => {
        const filePath = `curriculum/${lang}/general/${level}.json`;
        const filePathV2 = `curriculum/${lang}/general/${level}_v2.json`;
        if (fs.existsSync(filePath) || fs.existsSync(filePathV2)) {
            row += ' ✅ |';
        } else {
            row += ' ❌ |';
        }
    });
    console.log(row);
});
