const fs = require('fs');
const path = require('path');
const vm = require('vm');

/**
 * link_curriculum_vocab.js
 *
 * Usage: node scripts/link_curriculum_vocab.js [lang] [course_type]
 * Default: lang = "en", course_type = "general"
 */

const lang = process.argv[2] || 'en';
const targetCourseType = process.argv[3] || 'general';

console.log(`=== Linking Curriculum Vocabulary & Grammar for lang: ${lang}, course_type: ${targetCourseType} ===`);

// 1. Load Vocabulary Bank
const vocabDir = path.join(__dirname, '..', 'vocabulary', lang);
const vocabEntries = []; // Array of { id, word, level, theme, subtext, file, pos }

if (fs.existsSync(vocabDir)) {
  const levels = fs.readdirSync(vocabDir).filter(f => fs.statSync(path.join(vocabDir, f)).isDirectory());
  for (const lvl of levels) {
    const lvlDir = path.join(vocabDir, lvl);
    const jsFiles = fs.readdirSync(lvlDir).filter(f => f.endsWith('.js'));
    for (const jsFile of jsFiles) {
      const filePath = path.join(lvlDir, jsFile);
      const relativePath = path.relative(path.join(__dirname, '..'), filePath).replace(/\\/g, '/');
      const content = fs.readFileSync(filePath, 'utf8');

      const context = { window: {} };
      vm.createContext(context);
      try {
        vm.runInContext(content, context);
        const data = context.window.vocabularyData && context.window.vocabularyData[lang];
        if (data && Array.isArray(data)) {
          const topicTheme = jsFile.replace(/\.js$/, '');
          for (const item of data) {
            if (item && item.word && item.id) {
              vocabEntries.push({
                id: item.id,
                word: item.word,
                normalizedWord: item.word.trim().toLowerCase(),
                level: item.level || lvl,
                theme: topicTheme,
                subtext: item.subtext || '',
                file: relativePath,
                pos: item.form || item.pos || ''
              });
            }
          }
        }
      } catch (err) {
        console.error(`Error loading JS file ${filePath}:`, err.message);
      }
    }
  }
}

console.log(`Loaded ${vocabEntries.length} vocabulary entries from vocabulary/${lang}/`);

// Build lookup maps for vocabulary
const vocabByExactWord = new Map();
for (const entry of vocabEntries) {
  const norm = entry.normalizedWord;
  if (!vocabByExactWord.has(norm)) {
    vocabByExactWord.set(norm, []);
  }
  vocabByExactWord.get(norm).push(entry);
}

// 2. Load Reference Grammar Groups
const refGrammarDir = path.join(__dirname, '..', 'reference-grammar', lang);
const grammarGroups = []; // Array of { layer, category, group_id, label, level, file }

if (fs.existsSync(refGrammarDir)) {
  const layers = fs.readdirSync(refGrammarDir).filter(f => fs.statSync(path.join(refGrammarDir, f)).isDirectory());
  for (const layer of layers) {
    const layerDir = path.join(refGrammarDir, layer);
    const jsonFiles = fs.readdirSync(layerDir).filter(f => f.endsWith('.json'));
    for (const jsonFile of jsonFiles) {
      const category = jsonFile.replace(/\.json$/, '');
      const filePath = path.join(layerDir, jsonFile);
      const relativePath = path.relative(path.join(__dirname, '..'), filePath).replace(/\\/g, '/');
      try {
        const jsonContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        if (jsonContent.groups && Array.isArray(jsonContent.groups)) {
          for (const group of jsonContent.groups) {
            if (group.id && group.label) {
              grammarGroups.push({
                layer,
                category,
                group_id: group.id,
                label: group.label,
                normalizedLabel: group.label.trim().toLowerCase(),
                level: group.level || '',
                file: relativePath
              });
            }
          }
        }
      } catch (err) {
        console.error(`Error loading reference grammar file ${filePath}:`, err.message);
      }
    }
  }
}

console.log(`Loaded ${grammarGroups.length} reference grammar groups from reference-grammar/${lang}/`);

// Build lookup maps for grammar
const grammarByGroupId = new Map();
const grammarByExactLabel = new Map();
for (const g of grammarGroups) {
  grammarByGroupId.set(g.group_id.toLowerCase(), g);
  grammarByExactLabel.set(g.normalizedLabel, g);
}

// Helper for stemming simple English plurals/verb forms for fuzzy detection
function getLemmaVariations(term) {
  const variations = [];
  if (term.endsWith('s') && term.length > 3) variations.push(term.slice(0, -1));
  if (term.endsWith('es') && term.length > 4) variations.push(term.slice(0, -2));
  if (term.endsWith('ies') && term.length > 4) variations.push(term.slice(0, -3) + 'y');
  if (term.endsWith('ing') && term.length > 5) variations.push(term.slice(0, -3));
  if (term.endsWith('ed') && term.length > 4) variations.push(term.slice(0, -2));
  return variations;
}

// 3. Process Curriculum Files
const currDir = path.join(__dirname, '..', 'curriculum', lang, targetCourseType);
if (!fs.existsSync(currDir)) {
  console.error(`Curriculum directory ${currDir} does not exist!`);
  process.exit(1);
}

const currFiles = fs.readdirSync(currDir).filter(f => f.endsWith('.json'));

let totalVocabStrings = 0;
let vocabExactMatches = 0;
let vocabFuzzyMatches = 0;
let vocabUnmatched = 0;

let totalGrammarStrings = 0;
let grammarExactMatches = 0;
let grammarFuzzyMatches = 0;
let grammarUnmatched = 0;

const unmatchedVocabReport = [];
const fuzzyVocabReport = [];
const unmatchedGrammarReport = [];
const fuzzyGrammarReport = [];

const newlyLinkedWordIds = new Set();
const newlyLinkedGrammarRefs = new Map(); // word_id -> array of grammar_refs

function cleanStr(str) {
  return str.trim().toLowerCase();
}

for (const file of currFiles) {
  const filePath = path.join(currDir, file);
  const currData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const fileLevel = currData.level || file.replace(/\.json$/, '');
  let fileModified = false;

  for (const unit of currData.units || []) {
    for (const lesson of unit.lessons || []) {
      // Process Vocabulary
      const rawVocabList = lesson.vocabulary || [];
      const matchedWordIds = [];
      const matchedThemes = new Set();

      for (const vStr of rawVocabList) {
        totalVocabStrings++;
        const cleaned = cleanStr(vStr);

        // Exact match check
        if (vocabByExactWord.has(cleaned)) {
          const candidates = vocabByExactWord.get(cleaned);
          let best = candidates.find(c => c.level.toLowerCase() === fileLevel.toLowerCase());
          if (!best) best = candidates[0];

          matchedWordIds.push(best.id);
          matchedThemes.add(best.theme);
          vocabExactMatches++;
          newlyLinkedWordIds.add(best.id);
        } else {
          // Check for lemma / fuzzy match
          let fuzzyMatch = null;
          const lemmas = getLemmaVariations(cleaned);
          for (const lemma of lemmas) {
            if (vocabByExactWord.has(lemma)) {
              fuzzyMatch = vocabByExactWord.get(lemma)[0];
              break;
            }
          }

          if (fuzzyMatch) {
            vocabFuzzyMatches++;
            fuzzyVocabReport.push({
              curriculum_string: vStr,
              curriculum_file: file,
              unit: unit.unit,
              lesson: lesson.lesson,
              suggested_match: {
                id: fuzzyMatch.id,
                word: fuzzyMatch.word,
                file: fuzzyMatch.file
              }
            });
          } else {
            vocabUnmatched++;
            unmatchedVocabReport.push({
              curriculum_string: vStr,
              curriculum_file: file,
              unit: unit.unit,
              lesson: lesson.lesson
            });
          }
        }
      }

      if (matchedWordIds.length > 0) {
        lesson.word_ids = Array.from(new Set(matchedWordIds));
        fileModified = true;
      }
      if (matchedThemes.size > 0) {
        lesson.theme = Array.from(matchedThemes)[0];
        fileModified = true;
      }

      // Process Grammar
      const rawGrammarList = lesson.grammar || [];
      const matchedGrammarRefs = [];

      for (const gStr of rawGrammarList) {
        totalGrammarStrings++;
        const cleaned = cleanStr(gStr);

        // Direct ID match or Exact Label match
        let matchedGroup = grammarByGroupId.get(cleaned) || grammarByExactLabel.get(cleaned);

        if (matchedGroup) {
          grammarExactMatches++;
          matchedGrammarRefs.push({
            layer: matchedGroup.layer,
            category: matchedGroup.category,
            group_id: matchedGroup.group_id
          });
        } else {
          // Check for fuzzy label substring match
          let fuzzyGroup = null;
          for (const group of grammarGroups) {
            if (cleaned.length > 5 && (group.normalizedLabel.includes(cleaned) || cleaned.includes(group.normalizedLabel))) {
              fuzzyGroup = group;
              break;
            }
          }

          if (fuzzyGroup) {
            grammarFuzzyMatches++;
            fuzzyGrammarReport.push({
              curriculum_string: gStr,
              curriculum_file: file,
              unit: unit.unit,
              lesson: lesson.lesson,
              suggested_match: {
                layer: fuzzyGroup.layer,
                category: fuzzyGroup.category,
                group_id: fuzzyGroup.group_id,
                label: fuzzyGroup.label
              }
            });
          } else {
            grammarUnmatched++;
            unmatchedGrammarReport.push({
              curriculum_string: gStr,
              curriculum_file: file,
              unit: unit.unit,
              lesson: lesson.lesson
            });
          }
        }
      }

      if (matchedGrammarRefs.length > 0) {
        const uniqueRefsMap = new Map();
        for (const ref of matchedGrammarRefs) {
          uniqueRefsMap.set(`${ref.layer}:${ref.category}:${ref.group_id}`, ref);
        }
        lesson.grammar_refs = Array.from(uniqueRefsMap.values());
        fileModified = true;

        if (lesson.word_ids) {
          for (const wid of lesson.word_ids) {
            if (!newlyLinkedGrammarRefs.has(wid)) {
              newlyLinkedGrammarRefs.set(wid, []);
            }
            newlyLinkedGrammarRefs.get(wid).push(...lesson.grammar_refs);
          }
        }
      }
    }
  }

  if (fileModified) {
    fs.writeFileSync(filePath, JSON.stringify(currData, null, 2) + '\n', 'utf8');
    console.log(`Updated curriculum file: ${file}`);
  }
}

// 4. Save Match Reports
const reportsDir = path.join(__dirname, '..', 'reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

const reportPath = path.join(reportsDir, `unmatched_vocab_${lang}.json`);
const reportData = {
  language: lang,
  course_type: targetCourseType,
  summary: {
    vocabulary: {
      total_strings: totalVocabStrings,
      exact_matches: vocabExactMatches,
      exact_match_percent: totalVocabStrings ? ((vocabExactMatches / totalVocabStrings) * 100).toFixed(1) + '%' : '0%',
      fuzzy_matches: vocabFuzzyMatches,
      fuzzy_match_percent: totalVocabStrings ? ((vocabFuzzyMatches / totalVocabStrings) * 100).toFixed(1) + '%' : '0%',
      unmatched: vocabUnmatched,
      unmatched_percent: totalVocabStrings ? ((vocabUnmatched / totalVocabStrings) * 100).toFixed(1) + '%' : '0%'
    },
    grammar: {
      total_strings: totalGrammarStrings,
      exact_matches: grammarExactMatches,
      exact_match_percent: totalGrammarStrings ? ((grammarExactMatches / totalGrammarStrings) * 100).toFixed(1) + '%' : '0%',
      fuzzy_matches: grammarFuzzyMatches,
      fuzzy_match_percent: totalGrammarStrings ? ((grammarFuzzyMatches / totalGrammarStrings) * 100).toFixed(1) + '%' : '0%',
      unmatched: grammarUnmatched,
      unmatched_percent: totalGrammarStrings ? ((grammarUnmatched / totalGrammarStrings) * 100).toFixed(1) + '%' : '0%'
    }
  },
  unmatched_vocabulary: unmatchedVocabReport,
  fuzzy_vocabulary_review: fuzzyVocabReport,
  unmatched_grammar: unmatchedGrammarReport,
  fuzzy_grammar_review: fuzzyGrammarReport
};

fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2) + '\n', 'utf8');
console.log(`Saved report to ${reportPath}`);

// 5. Update data/index/[lang]_index.json
const indexFilePath = path.join(__dirname, '..', 'data', 'index', `${lang}_index.json`);
let indexData = [];
if (fs.existsSync(indexFilePath)) {
  try {
    indexData = JSON.parse(fs.readFileSync(indexFilePath, 'utf8'));
  } catch (e) {
    indexData = [];
  }
}

const indexByWordId = new Map();
for (const item of indexData) {
  if (item && item.word_id) {
    indexByWordId.set(item.word_id, item);
  }
}

let newIndexEntriesCount = 0;
for (const wordId of newlyLinkedWordIds) {
  const entry = vocabEntries.find(e => e.id === wordId);
  if (entry) {
    const existing = indexByWordId.get(wordId);
    const grammarRefsForWord = newlyLinkedGrammarRefs.get(wordId) || [];

    const gMap = new Map();
    if (existing && existing.grammar_refs) {
      for (const gr of existing.grammar_refs) {
        gMap.set(`${gr.layer}:${gr.category}:${gr.group_id}`, gr);
      }
    }
    for (const gr of grammarRefsForWord) {
      gMap.set(`${gr.layer}:${gr.category}:${gr.group_id}`, {
        layer: gr.layer,
        category: gr.category,
        group_id: gr.group_id,
        file: `reference-grammar/${lang}/${gr.layer}/${gr.category}.json`
      });
    }

    const indexEntry = {
      word_id: entry.id,
      word: entry.word,
      pos: entry.pos || '',
      level: entry.level,
      vocab: {
        file: entry.file,
        topic: entry.theme
      },
      grammar_refs: Array.from(gMap.values())
    };

    indexByWordId.set(wordId, indexEntry);
    newIndexEntriesCount++;
  }
}

const updatedIndexList = Array.from(indexByWordId.values());
fs.writeFileSync(indexFilePath, JSON.stringify(updatedIndexList, null, 2) + '\n', 'utf8');
console.log(`Updated ${indexFilePath} with ${updatedIndexList.length} total entries (${newIndexEntriesCount} newly added/updated).`);

console.log('\n=== SUMMARY ===');
console.log(`Vocabulary Strings: ${totalVocabStrings} total`);
console.log(` - Matched Confidently: ${vocabExactMatches} (${reportData.summary.vocabulary.exact_match_percent})`);
console.log(` - Fuzzy Flagged for Review: ${vocabFuzzyMatches} (${reportData.summary.vocabulary.fuzzy_match_percent})`);
console.log(` - Unmatched: ${vocabUnmatched} (${reportData.summary.vocabulary.unmatched_percent})`);

console.log(`Grammar Strings: ${totalGrammarStrings} total`);
console.log(` - Matched Confidently: ${grammarExactMatches} (${reportData.summary.grammar.exact_match_percent})`);
console.log(` - Fuzzy Flagged for Review: ${grammarFuzzyMatches} (${reportData.summary.grammar.fuzzy_match_percent})`);
console.log(` - Unmatched: ${grammarUnmatched} (${reportData.summary.grammar.unmatched_percent})`);
