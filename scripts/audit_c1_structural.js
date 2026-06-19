const fs = require('fs');
const path = require('path');

const dirs = [
    'vocabulary',
    'js/data'
];

function checkFile(filepath) {
    if (!filepath.endsWith('.js')) return;

    const content = fs.readFileSync(filepath, 'utf8');
    const errors = [];

    if (!content.includes('(function() {')) {
        errors.push('Missing IIFE wrapper');
    }

    if (!content.includes('"definitions":') && !filepath.endsWith('index.json') &&
        !content.includes('window.speakingData') && !content.includes('window.debatesData') &&
        !content.includes('window.quotesData') && !content.includes('window.verbsData') &&
        !content.includes('window.peopleData')) {
        errors.push('Missing "definitions" field (mandatory for vocabulary)');
    }

    if (content.includes('"image":')) {
        errors.push('Contains forbidden "image" field');
    }

    if (errors.length > 0) {
        console.log(`FAIL: ${filepath}`);
        errors.forEach(e => console.log(`  - ${e}`));
    } else {
        console.log(`PASS: ${filepath}`);
    }
}

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            if (file === 'C1' || file === 'advanced') {
                const subFiles = fs.readdirSync(fullPath);
                subFiles.forEach(f => checkFile(path.join(fullPath, f)));
            } else {
                walk(fullPath);
            }
        }
    }
}

dirs.forEach(dir => {
    if (fs.existsSync(dir)) walk(dir);
});
