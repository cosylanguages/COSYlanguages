#!/usr/bin/env node

/**
 * scripts/check-canon-drift.mjs
 * Standalone utility to check drift between a local dataset mirror and canonical source of truth files.
 *
 * Usage:
 *   node scripts/check-canon-drift.mjs <mirror-file-path> [--canon <canon-file-path>]
 *
 * Examples:
 *   node scripts/check-canon-drift.mjs ../COSYgames/data/A0-A1_master.json
 *   node scripts/check-canon-drift.mjs mirror_A1.json --canon curriculum/en/general/A1.json
 */

import fs from 'fs';
import path from 'path';

const DEFAULT_VOCAB_CANON_PATH = 'vocabulary/_canonical/en/A0-A1_master.json';
const DEFAULT_CURRICULUM_DIR = 'curriculum/en/general';

function printHelp() {
  console.log(`
Usage:
  node scripts/check-canon-drift.mjs <mirror-file-path> [--canon <canon-file-path>]

Description:
  Diffs a local mirror file word-for-word / field-for-field against the official
  canonical dataset in COSYlanguages.

Options:
  --canon <path>  Explicitly set the canonical file path to compare against.
  --help, -h      Show this help message.
`);
}

function parseArgs() {
  const args = process.argv.slice(2);
  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    printHelp();
    process.exit(args.length === 0 ? 1 : 0);
  }

  let mirrorPath = null;
  let canonPath = null;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--canon') {
      canonPath = args[i + 1];
      i++;
    } else if (!mirrorPath) {
      mirrorPath = args[i];
    }
  }

  return { mirrorPath, canonPath };
}

function loadJsonFile(filePath) {
  const absolutePath = path.resolve(filePath);
  if (!fs.existsSync(absolutePath)) {
    console.error(`Error: File not found at path: ${filePath}`);
    process.exit(1);
  }
  try {
    const raw = fs.readFileSync(absolutePath, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error(`Error reading or parsing JSON file at ${filePath}: ${err.message}`);
    process.exit(1);
  }
}

function detectType(data) {
  if (data && Array.isArray(data.words)) {
    return 'vocab';
  }
  if (data && (Array.isArray(data.units) || data.course_type || Array.isArray(data.lessons))) {
    return 'curriculum';
  }
  if (Array.isArray(data)) {
    if (data.length > 0 && data[0].word) return 'vocab';
    if (data.length > 0 && (data[0].lesson || data[0].unit)) return 'curriculum';
  }
  return 'unknown';
}

function diffVocab(mirrorData, canonData, mirrorPath, canonPath) {
  const mirrorWordsList = Array.isArray(mirrorData) ? mirrorData : (mirrorData.words || []);
  const canonWordsList = Array.isArray(canonData) ? canonData : (canonData.words || []);

  const canonMap = new Map();
  for (const item of canonWordsList) {
    const key = (item.word || '').trim().toLowerCase();
    if (key) canonMap.set(key, item);
  }

  const mirrorMap = new Map();
  for (const item of mirrorWordsList) {
    const key = (item.word || '').trim().toLowerCase();
    if (key) mirrorMap.set(key, item);
  }

  const addedElsewhere = [];
  const fieldMismatches = [];

  for (const [key, mirrorItem] of mirrorMap.entries()) {
    if (!canonMap.has(key)) {
      addedElsewhere.push(mirrorItem.word || key);
    } else {
      const canonItem = canonMap.get(key);
      const diffs = [];
      if (mirrorItem.pos && canonItem.pos && mirrorItem.pos !== canonItem.pos) {
        diffs.push(`pos: mirror="${mirrorItem.pos}" vs canon="${canonItem.pos}"`);
      }
      if (mirrorItem.topic && canonItem.topic && mirrorItem.topic !== canonItem.topic) {
        diffs.push(`topic: mirror="${mirrorItem.topic}" vs canon="${canonItem.topic}"`);
      }
      if (mirrorItem.definition && canonItem.definition && mirrorItem.definition !== canonItem.definition) {
        diffs.push(`definition mismatch`);
      }
      if (diffs.length > 0) {
        fieldMismatches.push({ word: mirrorItem.word || key, diffs });
      }
    }
  }

  const missingElsewhere = [];
  for (const [key, canonItem] of canonMap.entries()) {
    if (!mirrorMap.has(key)) {
      missingElsewhere.push(canonItem.word || key);
    }
  }

  console.log(`\n=== DRIFT AUDIT REPORT (Vocabulary Canon) ===`);
  console.log(`Mirror File  : ${mirrorPath} (${mirrorWordsList.length} words)`);
  console.log(`Canon File   : ${canonPath} (${canonWordsList.length} words)\n`);

  console.log(`--- Added elsewhere (${addedElsewhere.length}) ---`);
  if (addedElsewhere.length === 0) {
    console.log(`(None - no extra words in mirror)`);
  } else {
    addedElsewhere.sort().forEach((w) => console.log(`  + ${w}`));
  }

  console.log(`\n--- Missing elsewhere (${missingElsewhere.length}) ---`);
  if (missingElsewhere.length === 0) {
    console.log(`(None - mirror contains all canon words)`);
  } else {
    missingElsewhere.sort().forEach((w) => console.log(`  - ${w}`));
  }

  if (fieldMismatches.length > 0) {
    console.log(`\n--- Field Mismatches (${fieldMismatches.length}) ---`);
    fieldMismatches.forEach(({ word, diffs }) => {
      console.log(`  * ${word}:`);
      diffs.forEach((d) => console.log(`      ${d}`));
    });
  }

  console.log(`\nSummary: ${addedElsewhere.length} added elsewhere, ${missingElsewhere.length} missing elsewhere, ${fieldMismatches.length} field mismatches.`);
}

function extractCurriculumLessons(curriculumData) {
  const lessonsMap = new Map();
  const units = curriculumData.units || (Array.isArray(curriculumData) ? curriculumData : []);

  for (const u of units) {
    const unitNum = u.unit || u.unit_number || '?';
    const lessons = u.lessons || [];
    for (const l of lessons) {
      const lessonNum = l.lesson || l.lesson_number || '?';
      const key = `Unit ${unitNum} Lesson ${lessonNum}`;
      lessonsMap.set(key, { unitNum, lessonNum, ...l });
    }
  }
  return lessonsMap;
}

function diffCurriculum(mirrorData, canonData, mirrorPath, canonPath) {
  const mirrorLessons = extractCurriculumLessons(mirrorData);
  const canonLessons = extractCurriculumLessons(canonData);

  const addedElsewhere = [];
  const fieldMismatches = [];

  for (const [key, mirrorItem] of mirrorLessons.entries()) {
    if (!canonLessons.has(key)) {
      addedElsewhere.push(`${key}: "${mirrorItem.title || ''}"`);
    } else {
      const canonItem = canonLessons.get(key);
      const diffs = [];
      if (mirrorItem.title && canonItem.title && mirrorItem.title !== canonItem.title) {
        diffs.push(`title: mirror="${mirrorItem.title}" vs canon="${canonItem.title}"`);
      }
      if (Array.isArray(mirrorItem.vocabulary) && Array.isArray(canonItem.vocabulary)) {
        const mVocab = mirrorItem.vocabulary.join(', ');
        const cVocab = canonItem.vocabulary.join(', ');
        if (mVocab !== cVocab) {
          diffs.push(`vocabulary mismatch`);
        }
      }
      if (Array.isArray(mirrorItem.grammar) && Array.isArray(canonItem.grammar)) {
        const mGram = mirrorItem.grammar.join(', ');
        const cGram = canonItem.grammar.join(', ');
        if (mGram !== cGram) {
          diffs.push(`grammar mismatch`);
        }
      }
      if (diffs.length > 0) {
        fieldMismatches.push({ key, diffs });
      }
    }
  }

  const missingElsewhere = [];
  for (const [key, canonItem] of canonLessons.entries()) {
    if (!mirrorLessons.has(key)) {
      missingElsewhere.push(`${key}: "${canonItem.title || ''}"`);
    }
  }

  console.log(`\n=== DRIFT AUDIT REPORT (Curriculum Dataset) ===`);
  console.log(`Mirror File  : ${mirrorPath} (${mirrorLessons.size} lessons)`);
  console.log(`Canon File   : ${canonPath} (${canonLessons.size} lessons)\n`);

  console.log(`--- Added elsewhere (${addedElsewhere.length}) ---`);
  if (addedElsewhere.length === 0) {
    console.log(`(None - no extra lessons in mirror)`);
  } else {
    addedElsewhere.forEach((l) => console.log(`  + ${l}`));
  }

  console.log(`\n--- Missing elsewhere (${missingElsewhere.length}) ---`);
  if (missingElsewhere.length === 0) {
    console.log(`(None - mirror contains all canon lessons)`);
  } else {
    missingElsewhere.forEach((l) => console.log(`  - ${l}`));
  }

  if (fieldMismatches.length > 0) {
    console.log(`\n--- Field Mismatches (${fieldMismatches.length}) ---`);
    fieldMismatches.forEach(({ key, diffs }) => {
      console.log(`  * ${key}:`);
      diffs.forEach((d) => console.log(`      ${d}`));
    });
  }

  console.log(`\nSummary: ${addedElsewhere.length} added elsewhere, ${missingElsewhere.length} missing elsewhere, ${fieldMismatches.length} field mismatches.`);
}

function main() {
  const { mirrorPath, canonPath: inputCanonPath } = parseArgs();
  const mirrorData = loadJsonFile(mirrorPath);

  const mirrorType = detectType(mirrorData);

  let targetCanonPath = inputCanonPath;
  if (!targetCanonPath) {
    if (mirrorType === 'vocab') {
      targetCanonPath = DEFAULT_VOCAB_CANON_PATH;
    } else if (mirrorType === 'curriculum') {
      const level = (mirrorData.level || 'A1').toUpperCase();
      targetCanonPath = path.join(DEFAULT_CURRICULUM_DIR, `${level}.json`);
    } else {
      targetCanonPath = DEFAULT_VOCAB_CANON_PATH;
    }
  }

  const canonData = loadJsonFile(targetCanonPath);
  const canonType = detectType(canonData);

  if (mirrorType === 'vocab' || canonType === 'vocab') {
    diffVocab(mirrorData, canonData, mirrorPath, targetCanonPath);
  } else if (mirrorType === 'curriculum' || canonType === 'curriculum') {
    diffCurriculum(mirrorData, canonData, mirrorPath, targetCanonPath);
  } else {
    console.error(`Unable to auto-detect schema type for comparison.`);
    process.exit(1);
  }
}

main();
