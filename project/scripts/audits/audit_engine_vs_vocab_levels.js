const fs = require('fs');
const path = require('path');

const levelMap = {
  'starter': 'A1',
  'elementary': 'A2',
  'intermediate': 'B1',
  'upper_intermediate': 'B2',
  'advanced': 'C1',
  'proficiency': 'C2',
  'a1': 'A1', 'a2': 'A2', 'b1': 'B1', 'b2': 'B2', 'c1': 'C1', 'c2': 'C2'
};

function normLvl(l) {
  if (!l) return '';
  const lower = String(l).trim().toLowerCase();
  return levelMap[lower] || String(l).trim();
}

function getFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

function loadEngineWords(lang) {
  const words = [];
  const apps = fs.readdirSync('apps').filter(f => {
    const full = path.join('apps', f);
    return fs.statSync(full).isDirectory() && (f === lang + '-verb-prep' || f.startsWith(lang + '-'));
  });

  apps.forEach(appName => {
    const dataDir = path.join('apps', appName, 'data');
    if (!fs.existsSync(dataDir)) return;
    ['verbs.json', 'nouns.json'].forEach(fname => {
      const fpath = path.join(dataDir, fname);
      if (fs.existsSync(fpath)) {
        const data = JSON.parse(fs.readFileSync(fpath, 'utf8'));
        Object.entries(data).forEach(([word, info]) => {
          words.push({
            word: word.trim(),
            raw_level: (info.level || '').trim(),
            level: normLvl(info.level),
            app: appName,
            file: fpath
          });
        });
      }
    });
  });
  return words;
}

function loadVocabWords(lang) {
  const vocabMap = new Map();
  const files = getFiles(path.join('vocabulary', lang));

  // 1. JSON files (e.g. LEVEL.json if present, excluding index/manifest)
  const jsonFiles = files.filter(f => f.endsWith('.json') && !f.endsWith('index.json') && !f.endsWith('manifest.json'));
  jsonFiles.forEach(file => {
    try {
      const data = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (Array.isArray(data)) {
        data.forEach(item => {
          if (item && item.word) {
            const w = String(item.word).trim();
            const key = w.toLowerCase();
            const rawLvl = item.level || '';
            const relPath = file.replace(/\\/g, '/');
            const parts = relPath.split('/');
            const dirLvl = parts[2] || '';
            const lvl = normLvl(rawLvl) || dirLvl;
            if (!vocabMap.has(key)) vocabMap.set(key, []);
            vocabMap.get(key).push({
              word: w,
              raw_level: rawLvl,
              level: lvl,
              file: relPath
            });
          }
        });
      }
    } catch(e) {}
  });

  // 2. JS files
  const jsFiles = files.filter(f => f.endsWith('.js'));
  jsFiles.forEach(file => {
    const relPath = file.replace(/\\/g, '/');
    const parts = relPath.split('/');
    const dirLvl = parts[2] || '';
    const content = fs.readFileSync(file, 'utf8');
    const window = {};
    try {
      eval(content);
      if (window.vocabularyData && window.vocabularyData[lang]) {
        window.vocabularyData[lang].forEach(item => {
          if (item && item.word) {
            const w = String(item.word).trim();
            const key = w.toLowerCase();
            const rawLvl = item.level || '';
            const lvl = normLvl(rawLvl) || dirLvl;
            if (!vocabMap.has(key)) vocabMap.set(key, []);
            vocabMap.get(key).push({
              word: w,
              raw_level: rawLvl,
              level: lvl,
              file: relPath
            });
          }
        });
        window.vocabularyData[lang] = [];
      }
    } catch(e) {}
  });

  return vocabMap;
}

function generateReport() {
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },
    { code: 'it', name: 'Italian' },
    { code: 'ru', name: 'Russian' },
    { code: 'el', name: 'Greek' }
  ];

  let md = `# Standalone Engine Apps vs. Vocabulary Data Level Audit Report\n\n`;
  md += `This audit compares the word entries and CEFR level assignments across all 9 standalone engine applications under \`apps/\` against the core vocabulary datasets under \`vocabulary/\` for English, French, Italian, Russian, and Modern Greek.\n\n`;
  md += `## Audit Methodology & Standardizations\n\n`;
  md += `- **Word Matching**: Base form exact string matching (case-insensitive, accent-preserving).\n`;
  md += `- **Level Normalization**: Engine level descriptors (\`A1\`–\`C2\`) and vocabulary level IDs (\`starter\` -> \`A1\`, \`elementary\` -> \`A2\`, \`intermediate\` -> \`B1\`, \`upper_intermediate\` -> \`B2\`, \`advanced\` -> \`C1\`, \`proficiency\` -> \`C2\`) are normalized to standard CEFR notation.\n`;
  md += `- **Disagreements Recorded**: Any instance where a word exists in both an engine app and a vocabulary file with differing level classifications.\n`;
  md += `- **Engine-Only Words Recorded**: Words defined in engine apps that do not currently appear in the vocabulary dataset for that language.\n\n`;

  languages.forEach(lang => {
    const engineWords = loadEngineWords(lang.code);
    const vocabMap = loadVocabWords(lang.code);

    const disagreements = [];
    const engineOnly = [];

    engineWords.forEach(ew => {
      const key = ew.word.toLowerCase();
      if (vocabMap.has(key)) {
        const hits = vocabMap.get(key);
        // Find all vocabulary entries that disagree with the engine level
        const diffHits = hits.filter(h => h.level !== ew.level);
        if (diffHits.length > 0) {
          diffHits.forEach(dh => {
            disagreements.push({
              word: ew.word,
              engineLevel: ew.level,
              vocabLevel: `${dh.level}${dh.raw_level && dh.raw_level !== dh.level ? ' (' + dh.raw_level + ')' : ''}`,
              engineApp: ew.app,
              vocabFile: dh.file
            });
          });
        }
      } else {
        engineOnly.push({
          word: ew.word,
          engineLevel: ew.level,
          vocabLevel: 'N/A',
          engineApp: ew.app,
          vocabFile: 'N/A'
        });
      }
    });

    md += `## ${lang.name} (\`${lang.code}\`)\n\n`;
    md += `**Summary**: ${engineWords.length} engine entries audited | ${disagreements.length} level disagreement(s) | ${engineOnly.length} engine-only candidate word(s).\n\n`;

    if (disagreements.length > 0 || engineOnly.length > 0) {
      md += `| Word | Engine Level | Vocabulary Level | Engine App | Vocabulary File |\n`;
      md += `| :--- | :--- | :--- | :--- | :--- |\n`;

      if (disagreements.length > 0) {
        md += `| **-- LEVEL DISAGREEMENTS --** | | | | |\n`;
        disagreements.forEach(d => {
          md += `| \`${d.word}\` | ${d.engineLevel} | ${d.vocabLevel} | \`${d.engineApp}\` | \`${d.vocabFile}\` |\n`;
        });
      }

      if (engineOnly.length > 0) {
        md += `| **-- ENGINE-ONLY WORDS --** | | | | |\n`;
        engineOnly.forEach(e => {
          md += `| \`${e.word}\` | ${e.engineLevel} | ${e.vocabLevel} | \`${e.engineApp}\` | \`${e.vocabFile}\` |\n`;
        });
      }
      md += `\n`;
    } else {
      md += `No level disagreements or engine-only words found.\n\n`;
    }
  });

  const outPath = path.join('project', 'docs', 'audits', 'ENGINE_VOCAB_LEVEL_AUDIT.md');
  const dirPath = path.dirname(outPath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(outPath, md, 'utf8');
  console.log(`Report successfully written to ${outPath}`);
}

generateReport();
