const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DATA_ROOT = path.join(__dirname, '../js/data');

function getFiles(dir, name) {
    let results = [];
    if (!fs.existsSync(dir)) return [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(filePath, name));
        } else if (file.endsWith(name)) {
            results.push(filePath);
        }
    });
    return results;
}

const levelsOrder = ["starter", "elementary", "intermediate", "upper-intermediate", "advanced", "proficiency"];

async function run() {
    console.log("Reading data from grammar.js and verbs.js...");

    const verbsFiles = getFiles(DATA_ROOT, 'verbs.js');
    const grammarFiles = getFiles(DATA_ROOT, 'grammar.js');

    console.log(`Found ${verbsFiles.length} verb files and ${grammarFiles.length} grammar files.`);

    // 1. Process all Grammar files into a lookup map
    const grammarMap = {}; // lang -> level -> verb -> data

    grammarFiles.forEach(fp => {
        const parts = fp.split(path.sep);
        const level = parts[parts.length - 2];
        const lang = parts[parts.length - 3];

        const content = fs.readFileSync(fp, 'utf8');
        const mockWindow = { grammarData: {} };
        mockWindow.window = mockWindow;
        mockWindow.self = mockWindow;
        try {
            const script = new vm.Script(content);
            script.runInNewContext(mockWindow);
            const langKey = Object.keys(mockWindow.grammarData)[0];
            const data = mockWindow.grammarData[langKey] || [];

            if (!grammarMap[lang]) grammarMap[lang] = {};
            if (!grammarMap[lang][level]) grammarMap[lang][level] = {};

            data.forEach(g => {
                // Normalize: remove "to ", take first part of slash pairs
                const name = g.verb.toLowerCase().replace(/^to\s+/, '').split('/')[0].trim();
                grammarMap[lang][level][name] = g;
            });
        } catch (e) {
            console.error(`Error parsing grammar ${fp}:`, e.message);
        }
    });

    // 2. Process all Verb files
    const globalSeen = {};

    const familyDirs = fs.readdirSync(DATA_ROOT).filter(d => {
        const p = path.join(DATA_ROOT, d);
        return fs.statSync(p).isDirectory() && d !== 'curriculum';
    });

    familyDirs.forEach(family => {
        const langDirs = fs.readdirSync(path.join(DATA_ROOT, family)).filter(d => {
             const p = path.join(DATA_ROOT, family, d);
             return fs.statSync(p).isDirectory();
        });

        langDirs.forEach(lang => {
            if (!globalSeen[lang]) globalSeen[lang] = new Set();

            levelsOrder.forEach(level => {
                const vfp = path.join(DATA_ROOT, family, lang, level, 'verbs.js');
                if (!fs.existsSync(vfp)) return;

                const content = fs.readFileSync(vfp, 'utf8');
                const mockWindow = { verbsData: {}, vocabularyData: {} };
                mockWindow.window = mockWindow;
                mockWindow.self = mockWindow;
                try {
                    const script = new vm.Script(content);
                    script.runInNewContext(mockWindow);
                    const langKey = Object.keys(mockWindow.verbsData)[0] || lang;
                    let data = mockWindow.verbsData[langKey] || [];

                    // Deduplicate
                    data = data.filter(v => {
                        const name = v.word.toLowerCase().trim();
                        if (globalSeen[lang].has(name)) return false;
                        globalSeen[lang].add(name);
                        return true;
                    });

                    // Merge grammar data
                    data.forEach(v => {
                        const name = v.word.toLowerCase().trim();
                        const gMatch = grammarMap[lang]?.[level]?.[name];
                        if (gMatch) {
                            if (gMatch.tenses) v.tenses = gMatch.tenses;
                            if (gMatch.pronouns) v.pronouns = gMatch.pronouns;
                            if (gMatch.auxiliary) v.auxiliary = gMatch.auxiliary;
                            if (gMatch.group && !v.group) v.group = gMatch.group;
                            if (gMatch.classification && !v.classification) v.classification = gMatch.classification;
                            if (gMatch.aspect && !v.aspect) v.aspect = gMatch.aspect;
                        }
                    });

                    // Add verbs from grammar that WEREN'T in verbs.js
                    const levelGrammar = grammarMap[lang]?.[level] || {};
                    Object.keys(levelGrammar).forEach(gName => {
                        if (!globalSeen[lang].has(gName)) {
                            const g = levelGrammar[gName];
                            data.push({
                                word: g.verb.replace(/^to\s+/, ''),
                                level: level,
                                theme: 'grammar_sync',
                                emoji: '📐',
                                form: 'verb',
                                definitions: [{ text: 'Verb from grammar reference', examples: [] }],
                                tenses: g.tenses,
                                pronouns: g.pronouns,
                                auxiliary: g.auxiliary,
                                group: g.group,
                                classification: g.classification,
                                aspect: g.aspect
                            });
                            globalSeen[lang].add(gName);
                        }
                    });

                    // Write back
                    const output = `(function() {
    const lang = "${langKey}";
    const data = ${JSON.stringify(data, null, 4)};

    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [
        ...(window.verbsData[lang] || []),
        ...data
    ];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [
        ...(window.vocabularyData[lang] || []),
        ...data
    ];
})();`;
                    fs.writeFileSync(vfp, output);
                    console.log(`Updated ${vfp} with ${data.length} verbs.`);

                } catch (e) {
                    console.error(`Error processing verbs ${vfp}:`, e.message);
                }
            });
        });
    });

    console.log("Final verification of generated files...");
    const enStarterVerbs = getFiles(path.join(DATA_ROOT, 'germanic/en/starter'), 'verbs.js')[0];
    const enContent = fs.readFileSync(enStarterVerbs, 'utf8');
    if (enContent.includes('"tenses":')) {
        console.log("Success: Conjugation data found in EN starter verbs.");
        console.log("Cleanup: Deleting grammar.js files...");
        getFiles(DATA_ROOT, 'grammar.js').forEach(fp => fs.unlinkSync(fp));
    } else {
        console.error("FAILURE: Conjugation data missing in generated verbs.js. Aborting cleanup.");
    }
    console.log("Done.");
}

run();
