const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execSync } = require('child_process');

const LANGS = ['ba', 'br', 'cv', 'de', 'el', 'en', 'es', 'fr', 'hy', 'it', 'ka', 'pt', 'ru', 'tt'];
const COSYDATA_DIR = '/tmp/COSYdata';

// Ensure COSYdata repo exists in /tmp
if (!fs.existsSync(COSYDATA_DIR)) {
    console.log('Cloning COSYdata repository into /tmp/COSYdata...');
    execSync('git clone https://github.com/cosylanguages/COSYdata.git /tmp/COSYdata', { stdio: 'inherit' });
}

function extractEntriesFromWindow(obj) {
    let entries = [];
    if (!obj || typeof obj !== 'object') return entries;
    if (Array.isArray(obj)) {
        for (const item of obj) {
            if (item && typeof item === 'object' && (item.word || item.id || item.topic || item.text)) {
                entries.push(item);
            }
        }
    } else {
        for (const k of Object.keys(obj)) {
            entries.push(...extractEntriesFromWindow(obj[k]));
        }
    }
    return entries;
}

function parseCosylanguagesFile(filepath) {
    if (filepath.endsWith('.json')) {
        try {
            const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));
            return Array.isArray(data) ? data : (data.id || data.word ? [data] : extractEntriesFromWindow(data));
        } catch (e) {
            return [];
        }
    }
    const content = fs.readFileSync(filepath, 'utf8');
    const mockWindow = {};
    const context = vm.createContext({ window: mockWindow, console });
    try {
        vm.runInContext(content, context);
    } catch (e) {
        return [];
    }
    return extractEntriesFromWindow(mockWindow);
}

function parseCosydataFile(filepath) {
    try {
        const content = JSON.parse(fs.readFileSync(filepath, 'utf8'));
        if (Array.isArray(content)) return content;
        if (content.id || content.word) return [content];
        return Object.values(content).filter(x => x && typeof x === 'object');
    } catch (e) {
        return [];
    }
}

function normalizeLevel(levelStr) {
    if (!levelStr) return 'unknown';
    const l = levelStr.toLowerCase().trim();
    if (['a0_a1', 'a0-a1', 'a1', 'starter', 'beginner'].includes(l)) return 'a1';
    if (['a2', 'elementary'].includes(l)) return 'a2';
    if (['b1', 'intermediate'].includes(l)) return 'b1';
    if (['b2', 'upper_intermediate', 'upper-intermediate'].includes(l)) return 'b2';
    if (['c1', 'advanced'].includes(l)) return 'c1';
    if (['c2', 'proficiency', 'mastery'].includes(l)) return 'c2';
    return l;
}

function getWord(entry) {
    const w = entry.word || entry.topic || entry.text || entry.term || '';
    return w.toString().trim();
}

function getForm(entry) {
    const f = entry.form || entry.pos || '';
    return f.toString().trim().toLowerCase();
}

function isExactMatch(e1, e2) {
    return JSON.stringify(e1) === JSON.stringify(e2);
}

function runAudit() {
    const auditResults = {};

    for (const lang of LANGS) {
        auditResults[lang] = {
            clTotal: 0,
            cdTotal: 0,
            missingFromCD: [],
            differingInContent: [],
            identical: [],
            byLevel: {},
            filesCL: [],
            filesCD: []
        };

        // Load COSYlanguages
        const clEntries = [];
        const clDir = path.join('vocabulary', lang);
        if (fs.existsSync(clDir)) {
            function walkCL(dir) {
                for (const f of fs.readdirSync(dir)) {
                    const p = path.join(dir, f);
                    if (fs.statSync(p).isDirectory()) walkCL(p);
                    else if (p.endsWith('.js') || p.endsWith('.json')) {
                        if (f.endsWith('manifest.json') || f.endsWith('index.json')) continue;
                        const relPath = path.relative(clDir, p);
                        const parts = relPath.split(path.sep);
                        const fileLevel = normalizeLevel(parts[0]);
                        const items = parseCosylanguagesFile(p);
                        auditResults[lang].filesCL.push({ relPath, level: fileLevel, count: items.length });
                        for (const item of items) {
                            const level = normalizeLevel(item.level || item.level_code || fileLevel);
                            clEntries.push({
                                lang,
                                level,
                                fileLevel,
                                file: relPath,
                                filePath: p,
                                word: getWord(item),
                                form: getForm(item),
                                id: item.id || '',
                                raw: item
                            });
                        }
                    }
                }
            }
            walkCL(clDir);
        }

        // Load COSYdata
        const cdEntries = [];
        const cdDir = path.join(COSYDATA_DIR, 'vocabulary', lang);
        if (fs.existsSync(cdDir)) {
            function walkCD(dir) {
                for (const f of fs.readdirSync(dir)) {
                    const p = path.join(dir, f);
                    if (fs.statSync(p).isDirectory()) walkCD(p);
                    else if (p.endsWith('.json')) {
                        if (f.endsWith('manifest.json') || f.endsWith('index.json')) continue;
                        const relPath = path.relative(cdDir, p);
                        const parts = relPath.split(path.sep);
                        const fileLevel = normalizeLevel(parts[0]);
                        const items = parseCosydataFile(p);
                        auditResults[lang].filesCD.push({ relPath, level: fileLevel, count: items.length });
                        for (const item of items) {
                            const level = normalizeLevel(item.level || item.level_code || fileLevel);
                            cdEntries.push({
                                lang,
                                level,
                                fileLevel,
                                file: relPath,
                                filePath: p,
                                word: getWord(item),
                                form: getForm(item),
                                id: item.id || '',
                                raw: item
                            });
                        }
                    }
                }
            }
            walkCD(cdDir);
        }

        auditResults[lang].clTotal = clEntries.length;
        auditResults[lang].cdTotal = cdEntries.length;

        // Build CD Index
        const cdById = new Map();
        const cdByWordLevelForm = new Map();
        const cdByWordLevel = new Map();
        const cdByWordAny = new Map();

        for (const cd of cdEntries) {
            if (cd.id) cdById.set(cd.id, cd);
            const w = cd.word.toLowerCase();
            const keyWLF = `${w}|${cd.level}|${cd.form}`;
            const keyWL = `${w}|${cd.level}`;

            if (!cdByWordLevelForm.has(keyWLF)) cdByWordLevelForm.set(keyWLF, []);
            cdByWordLevelForm.get(keyWLF).push(cd);

            if (!cdByWordLevel.has(keyWL)) cdByWordLevel.set(keyWL, []);
            cdByWordLevel.get(keyWL).push(cd);

            if (!cdByWordAny.has(w)) cdByWordAny.set(w, []);
            cdByWordAny.get(w).push(cd);
        }

        // Match CL entries against CD
        for (const cl of clEntries) {
            const w = cl.word.toLowerCase();
            const keyWLF = `${w}|${cl.level}|${cl.form}`;
            const keyWL = `${w}|${cl.level}`;

            let cdMatch = null;
            if (cl.id && cdById.has(cl.id)) {
                cdMatch = cdById.get(cl.id);
            } else if (cdByWordLevelForm.has(keyWLF)) {
                cdMatch = cdByWordLevelForm.get(keyWLF)[0];
            } else if (cdByWordLevel.has(keyWL)) {
                cdMatch = cdByWordLevel.get(keyWL)[0];
            } else if (cdByWordAny.has(w)) {
                cdMatch = cdByWordAny.get(w)[0];
            }

            const levelKey = cl.fileLevel;
            if (!auditResults[lang].byLevel[levelKey]) {
                auditResults[lang].byLevel[levelKey] = { clCount: 0, cdCount: 0, missing: 0, differ: 0, identical: 0 };
            }
            auditResults[lang].byLevel[levelKey].clCount++;

            if (!cdMatch) {
                auditResults[lang].missingFromCD.push(cl);
                auditResults[lang].byLevel[levelKey].missing++;
            } else {
                if (isExactMatch(cl.raw, cdMatch.raw)) {
                    auditResults[lang].identical.push({ cl, cd: cdMatch });
                    auditResults[lang].byLevel[levelKey].identical++;
                } else {
                    auditResults[lang].differingInContent.push({ cl, cd: cdMatch });
                    auditResults[lang].byLevel[levelKey].differ++;
                }
            }
        }
    }

    return auditResults;
}

if (require.main === module) {
    const results = runAudit();
    console.log('Audit completed successfully. Total languages processed:', Object.keys(results).length);
}

module.exports = { runAudit, LANGS };
