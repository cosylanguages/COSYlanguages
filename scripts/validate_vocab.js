const fs = require('fs');
const path = require('path');

const BASE_DIR = 'js/data/romance/it/';
const LEVELS = ['starter', 'elementary', 'intermediate', 'upper-intermediate', 'advanced', 'proficiency'];

let totalEntries = 0;
let violations = [];
const ids = new Set();

function validateFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const arrayRegex = /\[\s*\{[\s\S]*\}\s*\]/;
    const match = content.match(arrayRegex);
    if (!match) return;

    let data;
    try {
        data = eval(match[0]);
    } catch (e) {
        violations.push(`${filePath}: Failed to parse data array`);
        return;
    }

    data.forEach((entry, index) => {
        totalEntries++;
        const entryId = entry.id || `unnamed_entry_at_index_${index}`;

        // Required fields
        const required = ['id', 'word', 'form', 'level', 'theme', 'definitions'];
        required.forEach(field => {
            const val = entry[field];
            if (!val) {
                violations.push(`${filePath} (ID: ${entryId}): Missing required field "${field}"`);
            }
        });

        // Uniqueness
        if (entry.id) {
            if (ids.has(entry.id)) {
                violations.push(`${filePath}: Duplicate ID found: ${entry.id}`);
            }
            ids.add(entry.id);
        }
    });
}

LEVELS.forEach(level => {
    const levelDir = path.join(BASE_DIR, level);
    if (!fs.existsSync(levelDir)) return;

    fs.readdirSync(levelDir).forEach(file => {
        if (file.endsWith('.js') && file !== 'speaking.js') {
            validateFile(path.join(levelDir, file));
        }
    });
});

console.log(`Total entries processed: ${totalEntries}`);
if (violations.length === 0) {
    console.log('No violations found! ✅');
} else {
    console.log(`${violations.length} violations found:`);
    violations.forEach(v => console.log(`- ${v}`));
    process.exit(1);
}
