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
        } else if (file.endsWith('verbs.js')) {
            results.push(file);
        }
    });
    return results;
};

const verbFiles = walk('js/data');

verbFiles.forEach(filepath => {
    let content = fs.readFileSync(filepath, 'utf8');
    if (content.trim().startsWith('(function()')) return; // Already fixed

    const newContent = `(function() {
${content}
})();`;
    fs.writeFileSync(filepath, newContent, 'utf8');
});
