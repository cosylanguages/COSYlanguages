#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const SCOPE_FILE = path.join(ROOT_DIR, 'data/courses/language_scope.json');
const CURRICULUM_DIR = path.join(ROOT_DIR, 'curriculum');

if (!fs.existsSync(SCOPE_FILE)) {
  console.error(`Error: Config file not found at ${SCOPE_FILE}`);
  process.exit(1);
}

let languageScope;
try {
  languageScope = JSON.parse(fs.readFileSync(SCOPE_FILE, 'utf8'));
} catch (err) {
  console.error(`Error parsing ${SCOPE_FILE}:`, err.message);
  process.exit(1);
}

const missingFiles = [];
const outOfScopeFiles = [];

// 1. Check missing files for in-scope levels
for (const [lang, courseTypes] of Object.entries(languageScope)) {
  for (const [courseType, levels] of Object.entries(courseTypes)) {
    for (const level of levels) {
      const relPath = path.join('curriculum', lang, courseType, `${level}.json`).replace(/\\/g, '/');
      const fullPath = path.join(ROOT_DIR, relPath);
      if (!fs.existsSync(fullPath)) {
        missingFiles.push({
          lang,
          courseType,
          level,
          path: relPath,
          status: 'missing'
        });
      }
    }
  }
}

// 2. Find out-of-scope files
function scanCurriculum(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== '_schema') {
        results = results.concat(scanCurriculum(fullPath));
      }
    } else if (entry.isFile() && entry.name.endsWith('.json')) {
      results.push(fullPath);
    }
  }
  return results;
}

const allJsonFiles = scanCurriculum(CURRICULUM_DIR);

for (const filePath of allJsonFiles) {
  const relPath = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
  const pathParts = path.relative(CURRICULUM_DIR, filePath).split(path.sep);

  // We are interested in files matching curriculum/<lang>/<course_type>/<level>.json
  if (pathParts.length === 3) {
    const lang = pathParts[0];
    const courseType = pathParts[1];
    const filename = pathParts[2];

    const levelMatch = filename.match(/^([A-C][1-2])\.json$/i);
    if (levelMatch) {
      const level = levelMatch[1].toUpperCase();
      const isInScope =
        languageScope[lang] &&
        languageScope[lang][courseType] &&
        languageScope[lang][courseType].includes(level);

      if (!isInScope) {
        outOfScopeFiles.push({
          lang,
          courseType,
          level,
          path: relPath,
          status: 'out of scope — should be removed or archived'
        });
      }
    }
  }
}

// 3. Print report
console.log('======================================================================');
console.log('                    CURRICULUM SCOPE AUDIT REPORT                     ');
console.log('======================================================================\n');

if (missingFiles.length > 0) {
  console.log(`[IN-SCOPE MISSING FILES] (${missingFiles.length} missing - expected/ongoing work):`);
  console.log('----------------------------------------------------------------------');
  console.log('Language | Course Type  | Level | Path');
  console.log('----------------------------------------------------------------------');
  for (const item of missingFiles) {
    console.log(`${item.lang.padEnd(8)} | ${item.courseType.padEnd(12)} | ${item.level.padEnd(5)} | ${item.path}`);
  }
  console.log('----------------------------------------------------------------------\n');
} else {
  console.log('[IN-SCOPE MISSING FILES]: None\n');
}

if (outOfScopeFiles.length > 0) {
  console.log(`[OUT-OF-SCOPE FILES FOUND] (${outOfScopeFiles.length} file(s)):`);
  console.log('---------------------------------------------------------------------------------------------------');
  console.log('Language | Course Type  | Level | Path                            | Status');
  console.log('---------------------------------------------------------------------------------------------------');
  for (const item of outOfScopeFiles) {
    console.log(`${item.lang.padEnd(8)} | ${item.courseType.padEnd(12)} | ${item.level.padEnd(5)} | ${item.path.padEnd(31)} | ${item.status}`);
  }
  console.log('---------------------------------------------------------------------------------------------------\n');
} else {
  console.log('[OUT-OF-SCOPE FILES]: None\n');
}

console.log('======================================================================');
console.log('                            AUDIT SUMMARY                             ');
console.log('======================================================================');
console.log(`Missing In-Scope Files:   ${missingFiles.length}`);
console.log(`Out-of-Scope Files:       ${outOfScopeFiles.length}`);

if (outOfScopeFiles.length > 0) {
  console.log('RESULT: FAIL — Out-of-scope curriculum files exist.');
  process.exit(1);
} else {
  console.log('RESULT: PASS — All curriculum files are in scope.');
  process.exit(0);
}
