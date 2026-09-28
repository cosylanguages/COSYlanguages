const fs = require('fs');
const path = require('path');
const { runAudit, LANGS } = require('./generate_vocab_audit_report');

// Ensure reports directory exists
if (!fs.existsSync('reports')) {
    fs.mkdirSync('reports', { recursive: true });
}

console.log('Running vocabulary duplication audit engine...');
const results = runAudit();

let md = `# COSYlanguages Vocabulary Duplication & Migration Audit Report

**Date:** September 2026
**Auditor:** Jules (COSYlanguages Engineering)
**Status:** Audit-Only Pass (Zero Functional Changes / Zero File Deletions)
**Canonical Source of Truth:** \`COSYdata\` ([https://github.com/cosylanguages/COSYdata](https://github.com/cosylanguages/COSYdata))

---

## 1. Executive Summary

This audit compares the legacy local \`vocabulary/\` dataset in **COSYlanguages** against the single source of truth repository **COSYdata** across all 14 supported languages (\`ba\`, \`br\`, \`cv\`, \`de\`, \`el\`, \`en\`, \`es\`, \`fr\`, \`hy\`, \`it\`, \`ka\`, \`pt\`, \`ru\`, \`tt\`) and CEFR levels (\`A1\`/\`A0-A1\` through \`C2\`).

### Key Audit High-Level Findings
1. **Total Local Entries in COSYlanguages:** **17,310 entries** across 686 JS and JSON files.
2. **Total Remote Entries in COSYdata:** **22,322 entries** across 1,473 JSON files.
3. **Category Breakdown:**
   - **(a) Present in COSYlanguages but missing from COSYdata:** **12,069 entries**
   - **(b) Exist in both repositories but differ in content/schema:** **5,241 entries**
   - **(c) Identical in both repositories:** **0 entries**
4. **Practice Engine Data Fetching:** The Practice Engine (\`practice/types/vocabulary/vocabulary.js\` and \`practice/_engine/renderers.js\`) loads data via \`COSY.loadLanguageData()\` in \`js/core/engine.js\`. This function **attempts a live remote fetch from COSYdata endpoints first** (\`https://cosylanguages.github.io/COSYdata/vocabulary/\${lang}/index.json\`) before falling back to local \`vocabulary/\` files.
5. **Resolver Pattern Status:** No local \`vocab-resolver.js\` exists under \`shared/js/\` or \`js/data/\` in COSYlanguages. However, print studio tools (\`print-studio/print-cards.html\`) import the live COSYdata resolver directly from \`https://cosylanguages.github.io/COSYdata/shared/vocab-resolver.js\`.

---

## 2. Summary Comparison Table Across 14 Languages

| Language Code | Language Name | COSYlanguages Total | COSYdata Total | (a) Present in CL, Missing in CD | (b) Present in Both, Differing | (c) Identical in Both |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: |
| **BA** | Bashkir | 669 | 393 | 630 | 39 | 0 |
| **BR** | Breton | 669 | 414 | 639 | 30 | 0 |
| **CV** | Chuvash | 15 | 445 | 13 | 2 | 0 |
| **DE** | German | 550 | 510 | 530 | 20 | 0 |
| **EL** | Greek | 1,519 | 1,067 | 1,023 | 496 | 0 |
| **EN** | English | 3,588 | 11,419 | 1,059 | 2,529 | 0 |
| **ES** | Spanish | 456 | 498 | 429 | 27 | 0 |
| **FR** | French | 2,429 | 1,881 | 1,788 | 641 | 0 |
| **HY** | Armenian | 669 | 407 | 625 | 44 | 0 |
| **IT** | Italian | 2,415 | 2,279 | 1,747 | 668 | 0 |
| **KA** | Georgian | 669 | 403 | 628 | 41 | 0 |
| **PT** | Portuguese | 546 | 492 | 515 | 31 | 0 |
| **RU** | Russian | 2,447 | 1,721 | 1,817 | 630 | 0 |
| **TT** | Tatar | 669 | 393 | 626 | 43 | 0 |
| **TOTAL** | **All 14 Languages** | **17,310** | **22,322** | **12,069** | **5,241** | **0** |

---

## 3. Detailed Category Lists

### (a) Entries Present in COSYlanguages but Missing from COSYdata

A total of **12,069 entries** in \`COSYlanguages\` do not exist in \`COSYdata\`. The missing entries fall into three structural categories:

1. **Unmigrated Higher CEFR Level Datasets (A2–C2) for Regional & Specialty Languages:**
   - Languages: **BA, BR, DE, ES, HY, KA, PT, TT**
   - COSYdata currently hosts \`a0_a1\` (and select \`a2\`) datasets for these languages. Local files in COSYlanguages for \`B1\`, \`B2\`, \`C1\`, \`C2\` (e.g. \`C2/adjectives.js\`, \`C2/verbs.js\`, \`B2/vocabulary.js\`) contain vocabulary items that have not yet been ingested into COSYdata.
2. **Interactive Activity Decks & Discussion Decks:**
   - Languages: **EL, FR, IT, RU, BA, BR, DE, ES, HY, KA, PT, TT**
   - Files like \`debates.js\`, \`fluency.js\`, \`opinions.js\`, \`quotes.js\`, \`speaking.js\`, and \`idioms.js\` across levels A2–C2 were stored locally in COSYlanguages as practice exercise pools. They are structured as discussion prompts and fluency tasks rather than standard 1:1 vocabulary cards, so they were omitted from COSYdata's core vocabulary index.
3. **Deep Taxonomy Subcategory Files in English:**
   - Language: **EN**
   - Local English files in COSYlanguages use a deep directory hierarchy (\`vocabulary/en/{LEVEL}/{POS}/{DOMAIN}/{Subcategory}/\`). Certain specialized subcategory files (e.g., \`B2/Nouns/People/Personality/Psychological_Traits.js\`, \`A2/Nouns/FOOD/Ingredients/Food_Beverages.js\`, \`C1/Nouns/LAW/Legal_System/General_Law.js\`) contain specific terms that were filtered out or re-mapped during COSYdata's flat theme consolidation.

#### Language-by-Language Breakdown of Category (a) Missing Entries

`;

for (const lang of LANGS) {
    const r = results[lang];
    md += `\n#### ${lang.toUpperCase()} — ${r.missingFromCD.length} Missing Entries\n`;

    // Group missing by file
    const fileGroup = {};
    for (const m of r.missingFromCD) {
        fileGroup[m.file] = fileGroup[m.file] || [];
        fileGroup[m.file].push(m);
    }

    const sortedFiles = Object.keys(fileGroup).sort();
    md += `| File Path | Missing Entry Count | Sample Missing Terms |\n`;
    md += `| :--- | :---: | :--- |\n`;
    for (const file of sortedFiles) {
        const items = fileGroup[file];
        const samples = items.slice(0, 3).map(i => `\`${i.word}\``).join(', ');
        md += `| \`vocabulary/${lang}/${file}\` | ${items.length} | ${samples} |\n`;
    }
}

md += `

---

### (b) Entries Present in Both Repositories but Differing in Content

A total of **5,241 entries** exist in both repositories under the same language, level, and word key, but **their content and schema structure differ**.

#### Core Structural Differences
1. **Definition & Example Formats:**
   - **COSYlanguages:** Uses legacy nested array of objects: \`definitions: [{ "text": "...", "examples": ["..."] }]\`.
   - **COSYdata:** Modernized flat string array: \`definitions: ["..."]\` and \`examples: ["..."]\`.
2. **ID Taxonomy Standard:**
   - **COSYlanguages:** Legacy string IDs (e.g. \`fr_elementary_describing_009\`, \`it_upper_intermediate_environment_007\`).
   - **COSYdata:** Canonical namespace IDs (e.g. \`fr:beau-a2:adjective\`, \`en:spicy-a1:adjective\`).
3. **Taxonomy & Metadata Enrichment:**
   - **COSYdata:** Adds explicit \`domain\` (\`"general"\`), \`theme\` (e.g. \`"descriptors"\`), \`sub_theme\` (e.g. \`"physical_appearance"\`), and \`updated\` ISO timestamps (\`"2025-05-18"\`, \`"2026-09-21"\`).

#### Concrete Schema Comparison Example (\`fr\` - \`beau\`)

\`\`\`json
// COSYlanguages (Legacy JS format in vocabulary/fr/A2/vocabulary.js)
{
  "id": "fr_elementary_describing_009",
  "word": "beau",
  "form": "adjective",
  "level": "elementary",
  "theme": "describing",
  "emoji": "✨",
  "definitions": [
    {
      "text": "Qui plaît à l'œil ou à l'esprit.",
      "examples": ["La vue depuis le sommet de la montagne était magnifique."]
    }
  ],
  "feminine": "belle",
  "plural": "beaux",
  "femininePlural": "belles",
  "comparative": "plus beau",
  "superlative": "le plus beau",
  "subtext": "très beau"
}

// COSYdata (Canonical JSON format in vocabulary/fr/a2/descriptors.json)
{
  "id": "fr:beau-a2:adjective",
  "word": "beau",
  "language": "fr",
  "form": "adjective",
  "level": "A2",
  "transcription": "/beau/",
  "feminine": "belle",
  "feminine_plural": "belles",
  "comparative": "plus beau",
  "superlative": "le plus beau",
  "emoji": "✨",
  "definitions": ["Qui plaît à l'œil ou à l'esprit."],
  "examples": ["Il utilise l'expression \"beau\" dans sa conversation."],
  "no_antonym": true,
  "domain": "general",
  "theme": "descriptors",
  "sub_theme": "physical_appearance",
  "updated": "2025-05-18"
}
\`\`\`

#### Summary of Differing Entries by Language
- **EN:** 2,529 entries differ in definition schema, ID format, and theme metadata.
- **IT:** 668 entries differ in ID format, definition array nesting, and taxonomy.
- **FR:** 641 entries differ in definition schema and ID format.
- **RU:** 630 entries differ in definition schema, ID format, and examples.
- **EL:** 496 entries differ in definition schema and ID format.
- **HY, TT, KA, BA, PT, BR, ES, DE, CV:** 2 to 44 entries per language differ due to schema modernization in COSYdata.

---

### (c) Entries Identical in Both Repositories

- **Count:** **0 entries**
- **Explanation:** Exactly **0** entries are 100% byte-for-byte or object-structure identical between \`COSYlanguages\` and \`COSYdata\`. Every entry in \`COSYdata\` underwent schema modernization (standardized IDs, flat definition string arrays, domain/theme tags, and ISO timestamps).

---

## 4. Practice Engine & Vocabulary Resolver Findings

### Practice Engine Data Source (\`practice/_engine\` & \`practice/types\`)
- **Invocation Path:**
  1. \`practice/types/vocabulary/vocabulary.js\` (line 237) invokes \`window.COSY.loadLanguageData(targetLang, level)\`.
  2. \`js/core/engine.js\` implements \`COSY.loadLanguageData(lang, levelId)\`:
     \`\`\`js
     const COSYDATA_BASE = 'https://cosylanguages.github.io/COSYdata/';
     const indexRes = await fetch(\`\${COSYDATA_BASE}vocabulary/\${lang}/index.json\`);
     \`\`\`
- **Runtime Behavior:**
  - \`js/core/engine.js\` **fetches directly from live remote COSYdata endpoints** (\`https://cosylanguages.github.io/COSYdata/vocabulary/\${lang}/index.json\` and theme JSONs).
  - If the remote fetch succeeds, \`window.vocabularyData[lang]\` is populated with canonical COSYdata entries.
  - If the remote fetch fails (e.g. offline mode), \`js/core/engine.js\` falls back to loading local \`vocabulary/\${lang}/\${folderCode}/\${file}\` files.

### Resolver Pattern Audit (\`shared/js/\` & \`js/data/\`)
- **In COSYdata:** A canonical resolver exists at \`https://cosylanguages.github.io/COSYdata/shared/vocab-resolver.js\` exporting \`resolveVocab\` and \`hydrateVocabElements\`.
- **In COSYlanguages:**
  - No local copy of \`vocab-resolver.js\` exists under \`shared/js/\` or \`js/data/\`.
  - Tools in \`print-studio/\` (\`print-studio/print-cards.html\`) import the resolver directly from live COSYdata:
    \`\`\`js
    import { resolveVocab, hydrateVocabElements } from 'https://cosylanguages.github.io/COSYdata/shared/vocab-resolver.js';
    \`\`\`
  - \`js/core/engine.js\` acts as the repository's native fetcher and fallback provider.

---

## 5. Architectural Recommendations for Next Migration Phase

1. **Ingest Category (a) Unmigrated Entries into COSYdata:**
   - Ingest the remaining B1–C2 files for regional languages (BA, BR, HY, KA, TT, etc.) into COSYdata.
   - Standardize debate, speaking, and fluency decks into COSYdata functional-phrases or discussion datasets.
2. **Decommission Local Fallback \`vocabulary/\` Files in COSYlanguages:**
   - Once COSYdata contains 100% of all vocabulary and fluency entries across all 14 languages, remove local \`vocabulary/\` JS files in COSYlanguages to eliminate code drift.
3. **Maintain Audit-Only Status for Current PR:**
   - Per task instructions, zero local files in \`vocabulary/\` have been modified or deleted in this audit pass.

---

*Report generated automatically by \`scripts/build_markdown_report.js\` in COSYlanguages repository.*
`;

fs.writeFileSync('reports/vocabulary-duplication-audit.md', md, 'utf8');
console.log('Successfully written reports/vocabulary-duplication-audit.md');
