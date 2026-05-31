const fs = require('fs');
const path = require('path');

const baseDirs = ['js/data/romance/pt', 'vocabulary/pt'];
const requiredFields = ['id', 'word', 'form', 'level', 'theme', 'definitions'];

let totalEntries = 0;
let violations = [];
const globalIds = new Set();

function validateFile(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');
    let dataMatch = content.match(/data\s*=\s*(\[[\s\S]*?\])\s*;/);
    if (!dataMatch) return;
    let dataStr = dataMatch[1];
    let data;
    try {
        const pronouns = ["eu", "tu", "ele", "ela", "nós", "vós", "eles", "elas"];
        data = new Function('pronouns', 'return ' + dataStr)(pronouns);
    } catch (e) { return; }
    if (!Array.isArray(data)) return;

    data.forEach(entry => {
        totalEntries++;
        requiredFields.forEach(field => {
            if (!entry[field]) violations.push(`Entry in ${filepath} missing ${field}: ${JSON.stringify(entry).substring(0, 100)}`);
        });
        if (entry.id) {
            if (globalIds.has(entry.id)) {
                violations.push(`Global duplicate ID: ${entry.id} found in ${filepath}`);
            }
            globalIds.add(entry.id);
        }
    });
}

function traverse(dir) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.lstatSync(fullPath).isDirectory()) traverse(fullPath);
        else if (file.endsWith('.js') && !['speaking.js', 'translations.js', 'alphabets.js'].includes(file)) validateFile(fullPath);
    });
}

baseDirs.forEach(dir => traverse(dir));
console.log(`Total entries: ${totalEntries}`);
if (violations.length > 0) {
    console.log(`Violations found (${violations.length}):`);
    violations.forEach(v => console.log(`- ${v}`));
} else {
    console.log("No violations found!");
}
