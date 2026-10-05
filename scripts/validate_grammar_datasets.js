const fs = require('fs');
const path = require('path');

const levels = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];
const targetDirs = [
    path.join(__dirname, '../practice/data/grammar'),
    path.join(__dirname, '../practice/data/grammar/fr')
];

let totalChecked = 0;
let errorsFound = 0;

for (const baseDir of targetDirs) {
    if (!fs.existsSync(baseDir)) continue;

    for (const lvl of levels) {
        const dir = path.join(baseDir, lvl);
        if (!fs.existsSync(dir)) continue;

        const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
        for (const f of files) {
            const filePath = path.join(dir, f);
            const window = {};
            const content = fs.readFileSync(filePath, 'utf8');
            eval(content);

            const keys = Object.keys(window.COSY_GRAMMAR_DATA || {});
            if (keys.length === 0) {
                console.error(`No dataset found in ${filePath}`);
                errorsFound++;
                continue;
            }

            const dataKey = keys[keys.length - 1];
            const data = window.COSY_GRAMMAR_DATA[dataKey];
            const sentences = data.sentences || [];

            const rightSentences = sentences.filter(s => s.type !== 'find_mistake');
            const wrongSentences = sentences.filter(s => s.type === 'find_mistake');

            if (sentences.length !== 150) {
                console.error(`File ${filePath} total items expected 150, got ${sentences.length}`);
                errorsFound++;
            }
            if (rightSentences.length !== 100) {
                console.error(`File ${filePath} right items expected 100, got ${rightSentences.length}`);
                errorsFound++;
            }
            if (wrongSentences.length !== 50) {
                console.error(`File ${filePath} wrong items expected 50, got ${wrongSentences.length}`);
                errorsFound++;
            }

            totalChecked++;
        }
    }
}

if (errorsFound > 0) {
    console.error(`Validation Failed! ${errorsFound} errors found across ${totalChecked} dataset files.`);
    process.exit(1);
} else {
    console.log(`Validation Passed! All ${totalChecked} dataset files contain exactly 100 right + 50 wrong sentences.`);
}
