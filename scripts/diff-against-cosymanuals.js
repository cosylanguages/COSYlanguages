#!/usr/bin/env node

/**
 * scripts/diff-against-cosymanuals.js
 *
 * Compares local course/unit/lesson curriculum datasets (under apps/premium-courses/
 * and curriculum/) against equivalent files in COSYmanuals.
 *
 * Usage:
 *   node scripts/diff-against-cosymanuals.js [/path/to/COSYmanuals]
 *
 * Read-only script. Outputs report to docs/PREMIUM_COURSES_DIFF.md.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const vm = require('vm');

// Command line argument for local COSYmanuals path
const localCosymanualsPath = process.argv[2] ? path.resolve(process.argv[2]) : null;

// Recursively walk directory
function walkDir(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(fullPath));
    } else {
      results.push(fullPath);
    }
  });
  return results;
}

// Normalize a unit object into schema shape
function normalizeUnit(u, uIndex) {
  const unitNum = u.unit !== undefined ? u.unit : (u.num !== undefined ? u.num : uIndex + 1);
  const rawTitle = u.title || u.label || `Unit ${unitNum}`;
  const cleanTitle = rawTitle.replace(/^Unit\s+\d+:\s*/i, '').replace(/^Unità\s+\d+:\s*/i, '').replace(/^Ενότητα\s+\d+:\s*/i, '').trim();

  const rawLessons = u.lessons || [];
  const lessons = rawLessons.map((l, lIndex) => {
    const lessonNum = l.lesson !== undefined ? l.lesson : (l.num !== undefined ? l.num : lIndex + 1);
    const title = (l.title || `Lesson ${lessonNum}`).replace(/^Day\s+\d+:\s*/i, '').trim();
    const grammar = Array.isArray(l.grammar) ? l.grammar : (l.grammar ? [l.grammar] : []);
    const vocabulary = Array.isArray(l.vocabulary) ? l.vocabulary : (Array.isArray(l.vocab) ? l.vocab : (l.vocab ? [l.vocab] : []));

    return {
      lesson: lessonNum,
      type: l.type || 'vocab',
      title: title,
      grammar: grammar,
      vocabulary: vocabulary,
      recycled: l.recycled || null,
      teacher_notes: l.teacher_notes || l.desc || l.cando || null
    };
  });

  return {
    unit: unitNum,
    title: rawTitle,
    cleanTitle: cleanTitle,
    lessons: lessons
  };
}

// Parse metadata (lang, course_type, level) flexibly from rawData or source path
function parseMetadata(rawData, sourceFile = '') {
  let lang = rawData ? rawData.language : null;
  let type = rawData ? rawData.course_type : null;
  let level = rawData ? rawData.level : null;

  if (sourceFile) {
    const normalizedPath = sourceFile.replace(/\\/g, '/');
    const parts = normalizedPath.split('/');

    // Match patterns like curriculum/{lang}/{course_type}/{level}.json or _out_of_scope/{level}.json
    const currIdx = parts.indexOf('curriculum') !== -1 ? parts.indexOf('curriculum') : parts.indexOf('curriculums');
    if (currIdx !== -1 && parts.length > currIdx + 1) {
      if (parts[currIdx + 1] === '_archive') {
        if (!lang) lang = 'en';
        if (!type) type = 'general';
        if (!level) {
          const filename = parts[parts.length - 1];
          const m = filename.match(/^([A-Z][0-9])/i);
          if (m) level = m[1].toUpperCase();
        }
      } else {
        if (!lang) lang = parts[currIdx + 1];
        if (!type && parts.length > currIdx + 2) type = parts[currIdx + 2];
        if (!level) {
          const filename = parts[parts.length - 1];
          const m = filename.match(/^([A-Z][0-9])/i);
          if (m) level = m[1].toUpperCase();
        }
      }
    }

    // Match apps/premium-courses/{course_type}/{lang}/{level}.html or .json
    const pcIdx = parts.indexOf('premium-courses');
    if (pcIdx !== -1 && parts.length > pcIdx + 2) {
      if (!type) type = parts[pcIdx + 1];
      if (!lang) lang = parts[pcIdx + 2];
      if (!level && parts.length > pcIdx + 3) {
        const filename = parts[pcIdx + 3];
        const m = filename.match(/^([A-Z][0-9])/i);
        if (m) level = m[1].toUpperCase();
      }
    }
  }

  return {
    language: (lang || 'unknown').toLowerCase(),
    course_type: (type || 'unknown').toLowerCase(),
    level: (level || 'unknown').toUpperCase()
  };
}

// Normalize a full curriculum JSON object
function normalizeCurriculum(rawData, sourceFile = '') {
  const meta = parseMetadata(rawData, sourceFile);
  const rawUnits = rawData ? (rawData.units || []) : [];
  const units = rawUnits.map((u, i) => normalizeUnit(u, i));

  return {
    language: meta.language,
    course_type: meta.course_type,
    level: meta.level,
    units: units,
    sourceFile: sourceFile
  };
}

// Load local curriculum files from curriculum/ and apps/premium-courses/
function loadLocalCurriculums() {
  const localMap = new Map(); // key: `${lang}_${course_type}_${level}` -> curriculum object

  const candidateDirs = ['curriculum', 'apps/premium-courses'];
  let files = [];
  candidateDirs.forEach(dir => {
    files = files.concat(walkDir(dir));
  });

  files.forEach(f => {
    // Skip non-data files (CSS, README, manifest, SW, HTML templates without inline data)
    if (!f.endsWith('.json') && !f.endsWith('.js') && !f.endsWith('.html')) return;
    if (f.includes('_schema') || f.endsWith('package.json') || f.endsWith('manifest.json')) return;

    let rawData = null;

    if (f.endsWith('.json')) {
      try {
        rawData = JSON.parse(fs.readFileSync(f, 'utf8'));
      } catch (e) {
        return;
      }
    } else if (f.endsWith('.js')) {
      try {
        const content = fs.readFileSync(f, 'utf8');
        const sandbox = { window: {} };
        vm.createContext(sandbox);
        vm.runInContext(content, sandbox);
        const cData = sandbox.window.curriculumData || {};
        const keys = Object.keys(cData);
        if (keys.length > 0) {
          const arr = cData[keys[0]];
          rawData = { units: arr };
        }
      } catch (e) {
        return;
      }
    } else if (f.endsWith('.html')) {
      // Check if HTML contains inline lesson/unit data
      const content = fs.readFileSync(f, 'utf8');
      if (!content.includes('units') && !content.includes('curriculumData')) {
        return;
      }
    }

    if (!rawData) return;
    const normalized = normalizeCurriculum(rawData, f);
    if (normalized.language === '_archive' || normalized.language === '_schema' || normalized.language === 'unknown') return;

    const key = `${normalized.language}_${normalized.course_type}_${normalized.level}`.toLowerCase();

    // Prefer non-out-of-scope files over out-of-scope files if duplicates exist
    if (!localMap.has(key) || !f.includes('_out_of_scope')) {
      localMap.set(key, normalized);
    }
  });

  return localMap;
}

// Fetch remote JSON via HTTPS
function fetchRemoteJson(url) {
  return new Promise((resolve) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Node.js' }, timeout: 5000 }, (res) => {
      if (res.statusCode !== 200) {
        resolve(null);
        return;
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(null);
        }
      });
    });
    req.on('error', () => resolve(null));
    req.on('timeout', () => {
      req.destroy();
      resolve(null);
    });
  });
}

// Load remote/COSYmanuals curriculum for a given key
async function loadCosymanualsCurriculum(lang, courseType, level) {
  if (localCosymanualsPath && fs.existsSync(localCosymanualsPath)) {
    const candidates = [
      path.join(localCosymanualsPath, 'curriculums', lang, courseType, `${level}.json`),
      path.join(localCosymanualsPath, 'curriculum', lang, courseType, `${level}.json`)
    ];
    for (const cand of candidates) {
      if (fs.existsSync(cand)) {
        try {
          const raw = JSON.parse(fs.readFileSync(cand, 'utf8'));
          return normalizeCurriculum(raw, cand);
        } catch (e) {
          return null;
        }
      }
    }
    return null;
  }

  // Fallback to remote fetching
  const urls = [
    `https://raw.githubusercontent.com/cosylanguages/COSYmanuals/main/curriculums/${lang}/${courseType}/${level}.json`,
    `https://raw.githubusercontent.com/cosylanguages/COSYmanuals/main/curriculum/${lang}/${courseType}/${level}.json`,
    `https://raw.githubusercontent.com/cosylanguages/COSYmanuals/master/curriculums/${lang}/${courseType}/${level}.json`,
    `https://raw.githubusercontent.com/cosylanguages/COSYmanuals/master/curriculum/${lang}/${courseType}/${level}.json`
  ];

  for (const url of urls) {
    const raw = await fetchRemoteJson(url);
    if (raw) {
      return normalizeCurriculum(raw, url);
    }
  }

  return null;
}

// Discover all COSYmanuals curriculum keys when local path is passed
function discoverCosymanualsKeys() {
  const cosyMap = new Map();
  if (!localCosymanualsPath || !fs.existsSync(localCosymanualsPath)) {
    return cosyMap;
  }

  const candidateDirs = [
    path.join(localCosymanualsPath, 'curriculums'),
    path.join(localCosymanualsPath, 'curriculum')
  ];

  candidateDirs.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    const files = walkDir(dir).filter(f => f.endsWith('.json') && !f.includes('_schema'));
    files.forEach(f => {
      try {
        const raw = JSON.parse(fs.readFileSync(f, 'utf8'));
        const normalized = normalizeCurriculum(raw, f);
        if (normalized.language !== 'unknown') {
          const key = `${normalized.language}_${normalized.course_type}_${normalized.level}`.toLowerCase();
          cosyMap.set(key, normalized);
        }
      } catch (e) {}
    });
  });

  return cosyMap;
}

// Diff two curriculum objects
function compareCurriculums(local, remote) {
  const diffs = {
    identical: true,
    localUnitsCount: local ? local.units.length : 0,
    remoteUnitsCount: remote ? remote.units.length : 0,
    localLessonsCount: local ? local.units.reduce((acc, u) => acc + u.lessons.length, 0) : 0,
    remoteLessonsCount: remote ? remote.units.reduce((acc, u) => acc + u.lessons.length, 0) : 0,
    uniqueInLocalUnits: [],
    uniqueInRemoteUnits: [],
    unitDiffs: []
  };

  if (!local || !remote) {
    diffs.identical = false;
    return diffs;
  }

  if (diffs.localUnitsCount !== diffs.remoteUnitsCount || diffs.localLessonsCount !== diffs.remoteLessonsCount) {
    diffs.identical = false;
  }

  const maxUnits = Math.max(local.units.length, remote.units.length);

  for (let i = 0; i < maxUnits; i++) {
    const uLocal = local.units[i];
    const uRemote = remote.units[i];

    if (uLocal && !uRemote) {
      diffs.uniqueInLocalUnits.push(uLocal);
      diffs.identical = false;
      continue;
    }

    if (!uLocal && uRemote) {
      diffs.uniqueInRemoteUnits.push(uRemote);
      diffs.identical = false;
      continue;
    }

    // Both exist, compare unit titles and lessons
    const unitDiff = {
      unitNum: uLocal.unit,
      titleMatch: uLocal.cleanTitle === uRemote.cleanTitle,
      localTitle: uLocal.title,
      remoteTitle: uRemote.title,
      uniqueLocalLessons: [],
      uniqueRemoteLessons: [],
      lessonDiffs: []
    };

    if (!unitDiff.titleMatch) {
      diffs.identical = false;
    }

    const maxLessons = Math.max(uLocal.lessons.length, uRemote.lessons.length);

    for (let j = 0; j < maxLessons; j++) {
      const lLocal = uLocal.lessons[j];
      const lRemote = uRemote.lessons[j];

      if (lLocal && !lRemote) {
        unitDiff.uniqueLocalLessons.push(lLocal);
        diffs.identical = false;
        continue;
      }

      if (!lLocal && lRemote) {
        unitDiff.uniqueRemoteLessons.push(lRemote);
        diffs.identical = false;
        continue;
      }

      // Both exist, check if titles, grammar, or vocabulary differ
      const titleMatch = (lLocal.title || '').trim().toLowerCase() === (lRemote.title || '').trim().toLowerCase();
      const grammarMatch = JSON.stringify(lLocal.grammar) === JSON.stringify(lRemote.grammar);
      const vocabMatch = JSON.stringify(lLocal.vocabulary) === JSON.stringify(lRemote.vocabulary);

      if (!titleMatch || !grammarMatch || !vocabMatch) {
        diffs.identical = false;
        unitDiff.lessonDiffs.push({
          lessonNum: lLocal.lesson,
          local: lLocal,
          remote: lRemote,
          titleMatch,
          grammarMatch,
          vocabMatch
        });
      }
    }

    if (!unitDiff.titleMatch || unitDiff.uniqueLocalLessons.length > 0 || unitDiff.uniqueRemoteLessons.length > 0 || unitDiff.lessonDiffs.length > 0) {
      diffs.unitDiffs.push(unitDiff);
    }
  }

  return diffs;
}

async function main() {
  console.log('🔍 Starting Premium Courses & Curriculum Diff against COSYmanuals...');
  if (localCosymanualsPath) {
    console.log(`📁 Using local COSYmanuals directory: ${localCosymanualsPath}`);
  } else {
    console.log('🌐 No local path passed; fetching COSYmanuals datasets over HTTPS raw.githubusercontent.com');
  }

  const localMap = loadLocalCurriculums();
  console.log(`📊 Loaded ${localMap.size} local track combinations from premium-courses / curriculum.`);

  const cosymanualsDiscoveredMap = discoverCosymanualsKeys();
  if (cosymanualsDiscoveredMap.size > 0) {
    console.log(`📊 Discovered ${cosymanualsDiscoveredMap.size} COSYmanuals track combinations from local checkout.`);
  }

  // Combine key sets
  const allKeysSet = new Set([...localMap.keys(), ...cosymanualsDiscoveredMap.keys()]);
  const keys = Array.from(allKeysSet).sort();

  const reportData = [];
  let totalIdentical = 0;
  let totalDivergent = 0;
  let totalLocalOnly = 0;
  let totalRemoteOnly = 0;

  for (const key of keys) {
    const local = localMap.get(key) || null;
    let remote = cosymanualsDiscoveredMap.get(key) || null;

    if (!remote && local) {
      remote = await loadCosymanualsCurriculum(local.language, local.course_type, local.level);
    }

    const lang = local ? local.language : (remote ? remote.language : 'unknown');
    const course_type = local ? local.course_type : (remote ? remote.course_type : 'unknown');
    const level = local ? local.level : (remote ? remote.level : 'unknown');

    const diff = compareCurriculums(local, remote);

    let status = 'Divergent';
    if (!remote && local) {
      status = 'Local Only';
      totalLocalOnly++;
    } else if (remote && !local) {
      status = 'COSYmanuals Only';
      totalRemoteOnly++;
    } else if (diff.identical) {
      status = 'Identical';
      totalIdentical++;
    } else {
      totalDivergent++;
    }

    reportData.push({
      key,
      lang,
      course_type,
      level,
      local,
      remote,
      diff,
      status
    });
  }

  // Generate Markdown report
  const now = new Date().toISOString().split('T')[0];
  let markdown = `# Premium Courses & Curriculum Diff Report vs COSYmanuals

**Date:** ${now}
**Source Locations:**
- Local: \`apps/premium-courses/\` & \`curriculum/\`
- Remote / Target: COSYmanuals (\`curriculums/{iso}/{course_type}/{LEVEL}.json\`)

---

## 1. Executive Summary

This report presents a read-only structural comparison between local curriculum datasets in **COSYlanguages** (\`apps/premium-courses/\` and \`curriculum/\`) and the equivalent CEFR curriculum files in **COSYmanuals**.

- **Total Combinations Analyzed:** ${reportData.length}
- **Identical Combinations:** ${totalIdentical}
- **Divergent Combinations:** ${totalDivergent}
- **Local-Only Combinations:** ${totalLocalOnly}
- **COSYmanuals-Only Combinations:** ${totalRemoteOnly}

> **Note:** This is a read-only diagnostic report to inform human decisions on which unique content in \`premium-courses\` or \`curriculum/\` needs to be carried over into \`cosyplatform\` and \`COSYmanuals\`.

---

## 2. Track & Level Comparison Matrix

| Target Language | Course Track | CEFR Level | Local Units / Lessons | COSYmanuals Units / Lessons | Status | Notes |
|---|---|---|---|---|---|---|
`;

  reportData.forEach(item => {
    const localUL = item.local ? `${item.diff.localUnitsCount} u / ${item.diff.localLessonsCount} l` : 'Not Found';
    const remoteUL = item.remote ? `${item.diff.remoteUnitsCount} u / ${item.diff.remoteLessonsCount} l` : 'Not Found';
    let note = '100% Structural Sync';
    if (item.status === 'Local Only') {
      note = 'Unique to premium-courses/curriculum';
    } else if (item.status === 'COSYmanuals Only') {
      note = 'Unique to COSYmanuals';
    } else if (item.status === 'Divergent') {
      const details = [];
      if (item.diff.localUnitsCount !== item.diff.remoteUnitsCount) details.push(`Units: ${item.diff.localUnitsCount} vs ${item.diff.remoteUnitsCount}`);
      if (item.diff.localLessonsCount !== item.diff.remoteLessonsCount) details.push(`Lessons: ${item.diff.localLessonsCount} vs ${item.diff.remoteLessonsCount}`);
      if (details.length === 0) details.push('Title / Content variations');
      note = details.join('; ');
    }

    markdown += `| \`${item.lang.toUpperCase()}\` | \`${item.course_type}\` | \`${item.level}\` | ${localUL} | ${remoteUL} | **${item.status}** | ${note} |\n`;
  });

  markdown += `\n---

## 3. Detailed Divergent Track Analysis

`;

  const divergentItems = reportData.filter(i => i.status === 'Divergent' || i.status === 'Local Only' || i.status === 'COSYmanuals Only');

  if (divergentItems.length === 0) {
    markdown += `*No structural divergences found across all compared curriculum tracks.*\n`;
  } else {
    divergentItems.forEach(item => {
      markdown += `### 3.${reportData.indexOf(item) + 1} \`${item.lang.toUpperCase()}\` — \`${item.course_type}\` (${item.level})\n\n`;
      markdown += `- **Local File:** \`${item.local ? item.local.sourceFile : 'Not Found'}\`\n`;
      markdown += `- **COSYmanuals Source:** \`${item.remote ? item.remote.sourceFile : 'Not Found'}\`\n`;
      markdown += `- **Status:** **${item.status}**\n\n`;

      if (item.status === 'Local Only') {
        markdown += `> **Unique Local Content:** This combination exists in \`premium-courses/curriculum\` with **${item.diff.localUnitsCount} units** and **${item.diff.localLessonsCount} lessons**, but does not exist in COSYmanuals.\n\n`;
      } else if (item.status === 'COSYmanuals Only') {
        markdown += `> **Unique COSYmanuals Content:** This combination exists in COSYmanuals with **${item.diff.remoteUnitsCount} units** and **${item.diff.remoteLessonsCount} lessons**, but does not exist locally.\n\n`;
      } else {
        const diff = item.diff;

        if (diff.uniqueInLocalUnits.length > 0) {
          markdown += `#### Units Present in Local but Missing in COSYmanuals:\n`;
          diff.uniqueInLocalUnits.forEach(u => {
            markdown += `- **Unit ${u.unit}: ${u.title}** (${u.lessons.length} lessons)\n`;
          });
          markdown += `\n`;
        }

        if (diff.uniqueInRemoteUnits.length > 0) {
          markdown += `#### Units Present in COSYmanuals but Missing in Local:\n`;
          diff.uniqueInRemoteUnits.forEach(u => {
            markdown += `- **Unit ${u.unit}: ${u.title}** (${u.lessons.length} lessons)\n`;
          });
          markdown += `\n`;
        }

        if (diff.unitDiffs.length > 0) {
          markdown += `#### Unit & Lesson Level Divergences:\n`;
          diff.unitDiffs.forEach(ud => {
            markdown += `##### Unit ${ud.unitNum}:\n`;
            if (!ud.titleMatch) {
              markdown += `- **Title Mismatch:** Local: "*${ud.localTitle}*" vs COSYmanuals: "*${ud.remoteTitle}*"\n`;
            }

            if (ud.uniqueLocalLessons.length > 0) {
              markdown += `- **Local-Only Lessons:**\n`;
              ud.uniqueLocalLessons.forEach(l => {
                markdown += `  - Lesson ${l.lesson}: *${l.title}* (Grammar: ${l.grammar.join(', ') || 'none'})\n`;
              });
            }

            if (ud.uniqueRemoteLessons.length > 0) {
              markdown += `- **COSYmanuals-Only Lessons:**\n`;
              ud.uniqueRemoteLessons.forEach(l => {
                markdown += `  - Lesson ${l.lesson}: *${l.title}* (Grammar: ${l.grammar.join(', ') || 'none'})\n`;
              });
            }

            if (ud.lessonDiffs.length > 0) {
              markdown += `- **Lesson Content Differences:**\n`;
              ud.lessonDiffs.forEach(ld => {
                const diffs = [];
                if (!ld.titleMatch) diffs.push(`Title ("${ld.local.title}" vs "${ld.remote.title}")`);
                if (!ld.grammarMatch) diffs.push(`Grammar ([${ld.local.grammar.join(', ')}] vs [${ld.remote.grammar.join(', ')}])`);
                if (!ld.vocabMatch) diffs.push(`Vocab count (${ld.local.vocabulary.length} vs ${ld.remote.vocabulary.length})`);
                markdown += `  - Lesson ${ld.lessonNum}: ${diffs.join(' | ')}\n`;
              });
            }
          });
          markdown += `\n`;
        }
      }
    });
  }

  markdown += `---

## 4. Recommendations & Carry-Over Action Plan

1. **Local-Only Content Preservation:** Preserve all local-only curriculum files identified in Section 3 and carry them over to \`cosyplatform\` and \`COSYmanuals\`.
2. **Divergent Track Alignment:** For tracks where local \`premium-courses\` contains richer metadata (e.g. detailed teacher notes, IPA pronunciation guides, or recycled knowledge tags), merge those fields into COSYmanuals without overwriting COSYmanuals's unit structures.
3. **Zero Deletion Safety:** No files have been deleted or modified during this audit. All decisions should be reviewed by curriculum authors before final migration to \`cosyplatform\`.
`;

  const outputPath = path.join('docs', 'PREMIUM_COURSES_DIFF.md');
  fs.writeFileSync(outputPath, markdown, 'utf8');
  console.log(`\n✅ Comparison complete! Report generated at: ${outputPath}`);
}

main().catch(err => {
  console.error('❌ Error executing diff script:', err);
  process.exit(1);
});
