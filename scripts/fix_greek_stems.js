const fs = require('fs');
const path = require('path');

const walk = (dir) => {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('verbs.js') && file.includes('/el/')) {
            results.push(file);
        }
    });
    return results;
};

const elFiles = walk('js/data/hellenic/el');

elFiles.forEach(filepath => {
    let content = fs.readFileSync(filepath, 'utf8');

    // Simple regex to find and fix Greek v2 stems (remove trailing 'α')
    const updated = content.replace(/"v2": "(.*?)α"/g, '"v2": ""');

    if (updated !== content) {
        fs.writeFileSync(filepath, updated, 'utf8');
    }
});
