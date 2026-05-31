const fs = require('fs');
const path = require('path');

const BASE_DIR = 'js/data/germanic/en/';
const LEVEL_FOLDERS = ["starter", "elementary", "intermediate", "upper-intermediate", "advanced", "proficiency"];

let totalEntries = 0;
let violationsCount = 0;
const ids = new Set();
const duplicateIds = new Set();

function getWord(entry) {
    return entry.word || entry.t || entry.topic || entry.q || entry.verb || entry.phrase || entry.text || "";
}

function findArrays(content) {
    const arrays = [];
    let depth = 0;
    let start = -1;
    for (let i = 0; i < content.length; i++) {
        if (content[i] === '[') {
            if (depth === 0) start = i;
            depth++;
        } else if (content[i] === ']') {
            depth--;
            if (depth === 0 && start !== -1) {
                const arrayStr = content.substring(start, i + 1);
                try {
                    const data = eval(arrayStr);
                    if (Array.isArray(data) && data.length > 0 && typeof data[0] === 'object' && getWord(data[0])) {
                        arrays.push(data);
                    }
                } catch (e) {}
                start = -1;
            }
        }
    }
    return arrays;
}

LEVEL_FOLDERS.forEach(folder => {
    const dir = path.join(BASE_DIR, folder);
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach(file => {
            if (file.endsWith('.js') && file !== 'speaking.js') {
                const content = fs.readFileSync(path.join(dir, file), 'utf8');
                const arrays = findArrays(content);
                arrays.forEach(data => {
                    data.forEach((entry, idx) => {
                        totalEntries++;
                        const missing = [];
                        if (!entry.id) missing.push('id');
                        if (!entry.word) missing.push('word');
                        if (!entry.form) missing.push('form');
                        if (!entry.level) missing.push('level');
                        if (!entry.theme) missing.push('theme');
                        if (!entry.definitions || !Array.isArray(entry.definitions) || entry.definitions.length === 0) missing.push('definitions');

                        if (missing.length > 0) {
                            violationsCount++;
                            console.log(`Violation in ${folder}/${file} index ${idx}: Missing ${missing.join(', ')}`);
                        }

                        if (entry.id) {
                            if (ids.has(entry.id)) {
                                duplicateIds.add(entry.id);
                                console.log(`Duplicate ID found: ${entry.id} in ${folder}/${file}`);
                            }
                            ids.add(entry.id);
                        }
                    });
                });
            }
        });
    }
});

console.log("\n--- English Vocabulary Validation Summary ---");
console.log(`Total entries checked: ${totalEntries}`);
console.log(`Violations found: ${violationsCount}`);
if (duplicateIds.size > 0) {
    console.log(`Duplicate IDs found: ${duplicateIds.size}`);
} else {
    console.log("No duplicate IDs found.");
}
