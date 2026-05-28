const fs = require('fs');
const filePath = process.argv[2] || 'vocab_raw.txt';
const content = fs.readFileSync(filePath, 'utf8');
const themeRegex = /"theme":\s*"([^"]+)"/g;
const themes = new Set();
let match;
while ((match = themeRegex.exec(content)) !== null) {
  themes.add(match[1]);
}
console.log("Found themes:", Array.from(themes).sort());
