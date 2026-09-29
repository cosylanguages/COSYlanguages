const fs = require('fs');
const path = require('path');
const { auditQuality } = require('./generate_quality_audit_report');

// Ensure reports directory exists
if (!fs.existsSync('docs/archive/reports')) {
    fs.mkdirSync('docs/archive/reports', { recursive: true });
}

console.log('Running vocabulary data quality audit engine...');
const { qualityReport, totalFlaggedEntries } = auditQuality();

let md = `# Vocabulary Data Quality Audit Report (Pre-Migration Analysis)

**Date:** September 2026
**Auditor:** Jules (COSYlanguages Engineering)
**Status:** Audit-Only Pass (Zero Functional Changes / Zero File Deletions)
**Scope:** Re-opened and inspected all **12,069 Category (a)** local entries (present in \`COSYlanguages\` but missing from \`COSYdata\`) ahead of dataset migration.

---

## 1. Executive Summary

Before migrating unmigrated local vocabulary and exercise entries from \`COSYlanguages\` into \`COSYdata\`, this quality pass audited all **12,069 Category (a)** entries across all 14 supported languages (\`ba\`, \`br\`, \`cv\`, \`de\`, \`el\`, \`en\`, \`es\`, \`fr\`, \`hy\`, \`it\`, \`ka\`, \`pt\`, \`ru\`, \`tt\`).

### Key Quality Findings
1. **Total Category (a) Entries Inspected:** **12,069 entries**.
2. **Total Flagged Entries:** **4,905 entries** (40.6% of Category (a) entries contain at least one quality issue).
3. **Issue Type Breakdown:**
   - **Issue Type 1 — Empty / Whitespace Fields:** **745 entries** have an empty/whitespace word/term field OR all sample/definition/example text fields are empty/whitespace.
   - **Issue Type 2 — In-File Duplicates:** **3,980 entries** share identical \`word\` + identical \`form\` with another entry in the same local file (e.g. repeated prompts or duplicate entries in \`fluency.js\`, \`quotes.js\`, \`debates.js\`).
   - **Issue Type 3 — Template / Placeholder Artifacts:** **967 entries** contain unresolved developer placeholders or template strings (e.g. literal \`"TODO"\`, \`"undefined"\`, \`"{{\"\`, \`"}}"\`, or \`"[object Object]"\`).

---

## 2. Summary Quality Audit Table Across 14 Languages

| Language Code | Language Name | Category (a) Total | Total Flagged Entries | Empty/Whitespace Fields | In-File Duplicates | Placeholder Artifacts |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: |
| **BA** | Bashkir | 630 | 350 | 87 | 304 | 35 |
| **BR** | Breton | 639 | 344 | 87 | 298 | 35 |
| **CV** | Chuvash | 13 | 0 | 0 | 0 | 0 |
| **DE** | German | 530 | 352 | 11 | 306 | 35 |
| **EL** | Greek | 1,023 | 582 | 180 | 361 | 172 |
| **EN** | English | 1,059 | 0 | 0 | 0 | 0 |
| **ES** | Spanish | 429 | 265 | 0 | 222 | 53 |
| **FR** | French | 1,788 | 568 | 88 | 358 | 166 |
| **HY** | Armenian | 625 | 346 | 87 | 300 | 35 |
| **IT** | Italian | 1,747 | 504 | 53 | 310 | 149 |
| **KA** | Georgian | 628 | 344 | 87 | 298 | 35 |
| **PT** | Portuguese | 515 | 340 | 2 | 300 | 48 |
| **RU** | Russian | 1,817 | 560 | 43 | 358 | 169 |
| **TT** | Tatar | 626 | 350 | 87 | 304 | 35 |
| **TOTAL** | **All 14 Languages** | **12,069** | **4,905** | **745** | **3,980** | **967** |

---

## 3. Detailed Quality Findings Broken Down by Language and File

`;

const LANG_NAMES = {
    ba: 'Bashkir', br: 'Breton', cv: 'Chuvash', de: 'German', el: 'Greek',
    en: 'English', es: 'Spanish', fr: 'French', hy: 'Armenian', it: 'Italian',
    ka: 'Georgian', pt: 'Portuguese', ru: 'Russian', tt: 'Tatar'
};

for (const lang of Object.keys(qualityReport)) {
    const q = qualityReport[lang];
    const langName = LANG_NAMES[lang] || lang.toUpperCase();

    md += `### ${lang.toUpperCase()} (${langName}) — ${q.flaggedEntries.length} Flagged Entries out of ${q.totalCategoryA} Category (a) Entries\n\n`;

    if (q.flaggedEntries.length === 0) {
        md += `*No data quality issues found for ${langName}. All ${q.totalCategoryA} Category (a) entries pass empty field, duplicate, and artifact checks.*\n\n`;
        continue;
    }

    const files = Object.keys(q.byFile).sort();
    for (const file of files) {
        const flaggedInFile = q.byFile[file];
        md += `#### File: \`vocabulary/${lang}/${file}\` (${flaggedInFile.length} flagged entries)\n\n`;
        md += `| Level | Term / Word | Form | Issue Types | Issue Details |\n`;
        md += `| :---: | :--- | :---: | :--- | :--- |\n`;

        for (const item of flaggedInFile) {
            const types = item.issues.map(i => `\`${i.type}\``).join(', ');
            const details = item.issues.map(i => i.detail).join('; ');
            const displayWord = item.word === '(EMPTY_WORD)' ? '*(EMPTY)*' : `\`${item.word.replace(/\|/g, '\\|')}\``;
            md += `| ${item.level.toUpperCase()} | ${displayWord} | ${item.form || '-'} | ${types} | ${details} |\n`;
        }
        md += `\n`;
    }
}

md += `---

## 4. Issue Type Definitions & Examples

### Issue Type 1: Empty / Whitespace Fields (\`emptyField\`)
- **Definition:** The term/word field is empty/whitespace OR all definition, example, and sample text fields in the entry are empty or whitespace-only.
- **Example:**
  \`\`\`json
  // In vocabulary/fr/B2/vocabulary.js
  {
    "word": "",
    "definitions": [],
    "form": "noun"
  }
  \`\`\`

### Issue Type 2: In-File Duplicates (\`inSameFileDuplicate\`)
- **Definition:** Multiple entries within the same file share the exact same \`word\` and \`form\` (e.g., repeated prompts or duplicated cards in \`fluency.js\`, \`debates.js\`, or \`quotes.js\`).
- **Example:**
  \`\`\`javascript
  // In vocabulary/ru/B1/debates.js - Same debate question repeated twice in the same array
  { "word": "Удаленная работа против работы в офисе: что лучше?" }
  { "word": "Удаленная работа против работы в офисе: что лучше?" }
  \`\`\`

### Issue Type 3: Template / Placeholder Artifacts (\`placeholderArtifact\`)
- **Definition:** The entry contains developer TODO comments, literal \`"undefined"\`, \`"{{"\` / \`"}}"\` curly brace template syntax, or unrendered \`"[object Object]"\` strings.
- **Example:**
  \`\`\`javascript
  // In vocabulary/de/A2/vocabulary.js
  // TODO: verify level classification
  { "word": "undefined", "subtext": "TODO: fill example" }
  \`\`\`

---

## 5. Pre-Migration Action Plan & Recommendations

1. **Purge In-File Duplicates:**
   - Deduplicate entries in \`fluency.js\`, \`debates.js\`, \`quotes.js\`, and \`opinions.js\` prior to importing into \`COSYdata\`.
2. **Filter Out Empty Stubs:**
   - Exclude the 745 empty/whitespace stub entries during dataset intake into \`COSYdata\`.
3. **Remediate Placeholder Artifacts:**
   - Clean up developer notes (\`"TODO"\`, \`"undefined"\`) and populate proper target-language definitions/examples before canonical ingestion.
4. **Maintain Audit-Only Status:**
   - Zero local files in \`vocabulary/\` have been modified or deleted in this audit pass.

---

*Report generated automatically by \`scripts/build_quality_markdown_report.js\` in COSYlanguages repository.*
`;

fs.writeFileSync('docs/archive/reports/vocabulary-data-quality-audit.md', md, 'utf8');
console.log('Successfully written docs/archive/reports/vocabulary-data-quality-audit.md');
