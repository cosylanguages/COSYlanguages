const fs = require('fs');
const filepath = 'js/data/germanic/en/starter/verbs.js';
const content = fs.readFileSync(filepath, 'utf8');
const match = content.match(/const data = (\[[\s\S]*?\]);/);
const data = eval(match[1]);
fs.writeFileSync('en_verbs_reference.json', JSON.stringify(data, null, 2));
console.log(`Saved ${data.length} verbs to en_verbs_reference.json`);
