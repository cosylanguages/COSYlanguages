const fs = require('fs');
const path = require('path');
const { runAudit, LANGS } = require('./generate_vocab_audit_report');

function isEmptyOrWhitespace(str) {
    if (str === null || str === undefined) return true;
    if (typeof str !== 'string') return false;
    return str.trim().length === 0;
}

function isStringArtifact(str) {
    if (typeof str !== 'string') return false;
    const s = str.trim();
    if (!s) return false;

    if (/\bundefined\b/i.test(s)) return true;
    if (/\bTODO\b/i.test(s)) return true;
    if (/\{\{|\}\}/.test(s)) return true;
    if (/\[object Object\]/.test(s)) return true;
    if (/\bNaN\b/.test(s)) return true;

    return false;
}

function findArtifactFields(val, currentPath = '') {
    let fields = [];
    if (val === null || val === undefined) return fields;

    if (typeof val === 'string') {
        if (isStringArtifact(val)) {
            fields.push(currentPath || 'value');
        }
    } else if (Array.isArray(val)) {
        val.forEach((item, idx) => {
            fields.push(...findArtifactFields(item, `${currentPath}[${idx}]`));
        });
    } else if (typeof val === 'object') {
        for (const [k, v] of Object.entries(val)) {
            const pathName = currentPath ? `${currentPath}.${k}` : k;
            fields.push(...findArtifactFields(v, pathName));
        }
    }
    return fields;
}

function checkSampleTextFields(raw) {
    let textValues = [];

    if (raw.definitions && Array.isArray(raw.definitions)) {
        for (const d of raw.definitions) {
            if (typeof d === 'string') textValues.push(d);
            else if (typeof d === 'object' && d !== null) {
                if (d.text) textValues.push(d.text);
                if (d.examples && Array.isArray(d.examples)) {
                    textValues.push(...d.examples);
                }
            }
        }
    }
    if (raw.examples && Array.isArray(raw.examples)) {
        textValues.push(...raw.examples);
    }
    if (raw.ideasA && Array.isArray(raw.ideasA)) textValues.push(...raw.ideasA);
    if (raw.ideasB && Array.isArray(raw.ideasB)) textValues.push(...raw.ideasB);
    if (raw.h && Array.isArray(raw.h)) textValues.push(...raw.h);
    if (raw.subtext) textValues.push(raw.subtext);
    if (raw.explanation) textValues.push(raw.explanation);

    if (textValues.length === 0) return true;

    const nonEntries = textValues.filter(t => !isEmptyOrWhitespace(t));
    return nonEntries.length === 0;
}

function auditQuality() {
    console.log('Fetching Category (a) missing entries from primary audit engine...');
    const auditResults = runAudit();

    const qualityReport = {};
    let totalFlaggedEntries = 0;

    for (const lang of LANGS) {
        qualityReport[lang] = {
            totalCategoryA: auditResults[lang].missingFromCD.length,
            flaggedEntries: [],
            flaggedByIssueType: {
                emptyField: 0,
                inSameFileDuplicate: 0,
                placeholderArtifact: 0
            },
            byFile: {}
        };

        const missingEntries = auditResults[lang].missingFromCD;

        const fileMap = new Map();
        for (const entryObj of missingEntries) {
            const filePath = entryObj.filePath;
            if (!fileMap.has(filePath)) fileMap.set(filePath, []);
            fileMap.get(filePath).push(entryObj);
        }

        for (const [filePath, entriesInFile] of fileMap.entries()) {
            const fileRelPath = path.relative(path.join('vocabulary', lang), filePath);

            const seenInFile = new Map();
            for (const entryObj of entriesInFile) {
                const w = entryObj.word.trim().toLowerCase();
                const f = entryObj.form.trim().toLowerCase();
                const key = `${w}|${f}`;
                if (!seenInFile.has(key)) seenInFile.set(key, []);
                seenInFile.get(key).push(entryObj);
            }

            for (const entryObj of entriesInFile) {
                const issues = [];
                const raw = entryObj.raw;
                const word = entryObj.word;

                // 1. Empty/whitespace check
                const wordIsEmpty = isEmptyOrWhitespace(word);
                const allSamplesEmpty = checkSampleTextFields(raw);
                if (wordIsEmpty || allSamplesEmpty) {
                    const detail = wordIsEmpty
                        ? 'Word/term field is empty or whitespace-only'
                        : 'All sample/definition/example text fields are empty or whitespace-only';
                    issues.push({ type: 'emptyField', detail });
                }

                // 2. In-file duplicate check
                const w = word.trim().toLowerCase();
                const f = entryObj.form.trim().toLowerCase();
                const key = `${w}|${f}`;
                const dupes = seenInFile.get(key);
                if (dupes.length > 1) {
                    issues.push({
                        type: 'inSameFileDuplicate',
                        detail: `Duplicate term '${word}' (${f || 'no-form'}) appears ${dupes.length} times in file`
                    });
                }

                // 3. Artifact check (recursive traversal of leaf fields)
                const artifactFields = findArtifactFields(raw);
                if (artifactFields.length > 0) {
                    issues.push({
                        type: 'placeholderArtifact',
                        detail: `Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): ${artifactFields.join(', ')}`
                    });
                }

                if (issues.length > 0) {
                    const flagged = {
                        lang,
                        file: fileRelPath,
                        filePath,
                        level: entryObj.fileLevel,
                        word: word || '(EMPTY_WORD)',
                        form: entryObj.form,
                        id: entryObj.id,
                        raw,
                        issues
                    };

                    qualityReport[lang].flaggedEntries.push(flagged);
                    totalFlaggedEntries++;

                    for (const iss of issues) {
                        qualityReport[lang].flaggedByIssueType[iss.type]++;
                    }

                    if (!qualityReport[lang].byFile[fileRelPath]) {
                        qualityReport[lang].byFile[fileRelPath] = [];
                    }
                    qualityReport[lang].byFile[fileRelPath].push(flagged);
                }
            }
        }
    }

    return { qualityReport, totalFlaggedEntries };
}

module.exports = { auditQuality, isEmptyOrWhitespace, isStringArtifact };
