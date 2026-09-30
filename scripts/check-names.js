const fs = require('fs');
const path = require('path');

const FORBIDDEN = ['james york', 'damir moskov'];
const IGNORE_DIRS = new Set(['node_modules', '.git']);

let violations = [];

function checkFile(filePath) {
  if (path.resolve(filePath) === path.resolve(__filename)) {
    return;
  }
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lowerContent = content.toLowerCase();

    FORBIDDEN.forEach(forbidden => {
      if (lowerContent.includes(forbidden)) {
        violations.push({ filePath, forbidden });
      }
    });
  } catch (err) {
    // Ignore binary or unreadable files
  }
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (IGNORE_DIRS.has(entry.name)) {
      continue;
    }
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.isFile()) {
      checkFile(fullPath);
    }
  }
}

const rootDir = path.resolve(__dirname, '..');
walkDir(rootDir);

if (violations.length > 0) {
  console.error('Forbidden names found:');
  violations.forEach(v => {
    console.error(`- Found "${v.forbidden}" in ${path.relative(rootDir, v.filePath)}`);
  });
  process.exit(1);
} else {
  console.log('Name check passed: No forbidden names found.');
  process.exit(0);
}
