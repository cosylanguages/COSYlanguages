#!/usr/bin/env node
/**
 * scripts/build_etymology_dict.js
 *
 * Bulk-generates etymology data for every word already in vocabulary/
 * (recursively) that doesn't have an "etymology" field yet, by looking
 * each word up in
 * a Wiktextract dump (the structured JSON/JSONL export of Wiktionary
 * produced by the kaikki.org project — https://kaikki.org).
 *
 * WHY WIKTEXTRACT AND NOT HAND-WRITTEN ENTRIES:
 * We have ~17,700 words across 13 languages. Hand-writing (or having an
 * LLM freehand-write) etymologies at that scale is exactly how wrong
 * "confident-sounding" etymologies end up shipped to learners, especially
 * for languages like Armenian, Georgian, Bashkir, Tatar, and Breton where
 * good etymological sources are scarce. Wiktionary is imperfect but it is
 * sourced, versioned, and it's the same data academic tools use as a
 * starting point — so this script uses it as the source of truth and
 * explicitly flags (rather than guesses at) anything it can't parse
 * cleanly.
 *
 * WHAT THIS SCRIPT DOES NOT DO:
 * It does not touch vocabulary/ (recursively) directly. It only produces
 * scripts/etymology_dict.generated.json. The actual injection into the
 * existing vocabulary files is still done by scripts/enrich_etymology.js
 * (unchanged logic — see the small patch described in
 * scripts/enrich_etymology.patch.md) so there is exactly one code path
 * that ever writes "etymology" into vocabulary files, and it's the one
 * that's already been used and reviewed for en/de/fr/it/es/pt/ru/ba/tt.
 *
 * USAGE:
 *   node scripts/build_etymology_dict.js --dump /path/to/wiktextract.jsonl
 *
 * Optional flags:
 *   --langs en,fr,it,es,de,pt,ru,el,hy,ka,tt,ba,br   (default: all 13)
 *   --out   scripts/etymology_dict.generated.json     (default path)
 *
 * WHERE TO GET THE DUMP:
 * kaikki.org publishes per-language JSONL extracts of English Wiktionary
 * (which documents etymologies for foreign words too, each tagged with a
 * lang_code field) as well as a combined "raw-wiktextract-data" dump.
 * Check https://kaikki.org for current download links and file sizes —
 * the combined dump is large (multi-GB), so per-language files are
 * usually more practical for this. This script streams the file line by
 * line rather than loading it into memory, so either works.
 *
 * OUTPUT:
 * scripts/etymology_dict.generated.json — same shape as the etymDict
 * object already hardcoded in enrich_etymology.js:
 *   { "en": { "word": { origin_lang, origin_word, origin_meaning? }, ... }, ... }
 *
 * Also prints a coverage report to stdout: for each language, how many
 * words needed etymology vs. how many were actually found in the dump.
 * Words with no match are left alone — nothing is fabricated.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// ---- CLI args -------------------------------------------------------

function parseArgs(argv) {
    const out = { dump: null, langs: null, out: path.join(__dirname, 'etymology_dict.generated.json') };
    for (let i = 2; i < argv.length; i++) {
        if (argv[i] === '--dump') out.dump = argv[++i];
        else if (argv[i] === '--langs') out.langs = argv[++i].split(',').map(s => s.trim());
        else if (argv[i] === '--out') out.out = argv[++i];
    }
    return out;
}

const ALL_LANGS = ['en', 'fr', 'it', 'es', 'de', 'pt', 'ru', 'el', 'hy', 'ka', 'tt', 'ba', 'br'];

// Wiktextract's lang_code field mostly follows ISO 639-1/639-3 codes that
// already match our folder codes 1:1. This map exists as an explicit,
// visible override point in case any of them don't (rather than a silent
// assumption buried in the matching logic).
const LANG_CODE_MAP = {
    en: 'en', fr: 'fr', it: 'it', es: 'es', de: 'de', pt: 'pt',
    ru: 'ru', el: 'el', hy: 'hy', ka: 'ka', tt: 'tt', ba: 'ba', br: 'br',
};

// Common source-language codes seen in Wiktionary etymology templates,
// mapped to readable names. Not exhaustive — anything not in this table
// is passed through as its raw code (visibly, so it's obvious it needs a
// human to double check) rather than guessed at.
const SOURCE_LANG_NAMES = {
    'la': 'Latin', 'grc': 'Ancient Greek', 'gkm': 'Byzantine Greek',
    'non': 'Old Norse', 'fro': 'Old French', 'goh': 'Old High German',
    'gem-pro': 'Proto-Germanic', 'ine-pro': 'Proto-Indo-European',
    'ar': 'Arabic', 'tr': 'Turkish', 'ota': 'Ottoman Turkish',
    'it': 'Italian', 'es': 'Spanish', 'pt': 'Portuguese', 'en': 'English',
    'de': 'German', 'fr': 'French', 'ru': 'Russian', 'el': 'Greek',
    'cu': 'Old Church Slavonic', 'xcl': 'Classical Armenian',
    'ka': 'Georgian', 'hy': 'Armenian', 'sa': 'Sanskrit', 'fa': 'Persian',
    'zh': 'Chinese', 'nl': 'Dutch', 'ang': 'Old English', 'enm': 'Middle English',
    'sla-pro': 'Proto-Slavic', 'trk-pro': 'Proto-Turkic', 'xta': 'Tatar (historical)',
};

function readableLang(code) {
    return SOURCE_LANG_NAMES[code] || code;
}

// Etymology template names that reliably encode "word X comes from
// language Y's word Z" in a structured way. Order = preference when a
// word's etymology_templates array has more than one.
const ETYM_TEMPLATE_NAMES = ['inh', 'inh+', 'der', 'der+', 'bor', 'bor+', 'bor2'];

// ---- Step 1: find which words actually need etymology ---------------

function findWordsNeedingEtymology(vocabRoot, langs) {
    const needed = {}; // { lang: Set(word) }
    langs.forEach(l => needed[l] = new Set());

    const totals = {};
    langs.forEach(l => totals[l] = { total: 0, missing: 0 });

    function walk(dir) {
        if (!fs.existsSync(dir)) return;
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            const full = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                walk(full);
            } else if (entry.name.endsWith('.js')) {
                processFile(full);
            }
        }
    }

    function processFile(filePath) {
        const parts = filePath.split(path.sep);
        const vocabIdx = parts.indexOf('vocabulary');
        if (vocabIdx === -1) return;
        const lang = parts[vocabIdx + 1];
        if (!langs.includes(lang)) return;

        const content = fs.readFileSync(filePath, 'utf8');
        // Find each "word": "..." occurrence and check whether its
        // enclosing object already has an "etymology" key. This mirrors
        // the matching approach already used in enrich_etymology.js, so
        // behaviour stays consistent between the two scripts.
        const wordRegex = /"word"\s*:\s*"([^"]+)"/g;
        let m;
        while ((m = wordRegex.exec(content)) !== null) {
            const word = m[1];
            totals[lang].total++;

            // Grab a reasonably-sized window around the match to check
            // for a sibling "etymology" key without a full parser.
            const windowEnd = content.indexOf('\n    }', m.index); // heuristic end-of-object
            const windowText = content.slice(m.index, windowEnd === -1 ? m.index + 2000 : windowEnd);
            if (!windowText.includes('"etymology"') && !windowText.includes('etymology:')) {
                needed[lang].add(word);
                totals[lang].missing++;
            }
        }
    }

    walk(vocabRoot);
    return { needed, totals };
}

// ---- Step 2: stream the Wiktextract dump and match -------------------

async function matchFromDump(dumpPath, needed, langCodeMap) {
    const found = {}; // { lang: { word: {origin_lang, origin_word, origin_meaning?} } }
    Object.keys(needed).forEach(l => found[l] = {});

    // Reverse map: wiktextract lang_code -> our internal lang code(s)
    const reverseMap = {};
    Object.entries(langCodeMap).forEach(([ours, theirs]) => {
        reverseMap[theirs] = reverseMap[theirs] || [];
        reverseMap[theirs].push(ours);
    });

    const stream = fs.createReadStream(dumpPath, { encoding: 'utf8' });
    const rl = readline.createInterface({ input: stream, crlfDelay: Infinity });

    let lineNum = 0;
    for await (const line of rl) {
        lineNum++;
        if (!line.trim()) continue;

        let entry;
        try {
            entry = JSON.parse(line);
        } catch (e) {
            continue; // skip malformed lines rather than crash a multi-GB run
        }

        const wiktLangCode = entry.lang_code;
        if (!wiktLangCode || !reverseMap[wiktLangCode]) continue;

        const word = entry.word;
        if (!word) continue;

        for (const ourLang of reverseMap[wiktLangCode]) {
            if (!needed[ourLang] || !needed[ourLang].has(word)) continue;
            if (found[ourLang][word]) continue; // already matched, first hit wins

            const etym = extractEtymology(entry);
            if (etym) found[ourLang][word] = etym;
        }

        if (lineNum % 500000 === 0) {
            console.log(`  ...scanned ${lineNum.toLocaleString()} dump lines`);
        }
    }

    return found;
}

function extractEtymology(entry) {
    const templates = entry.etymology_templates || [];

    for (const tplName of ETYM_TEMPLATE_NAMES) {
        const tpl = templates.find(t => t.name === tplName);
        if (tpl && tpl.args) {
            // Standard Wiktionary etymology template shape:
            // args["1"] = the entry's own language, args["2"] = source
            // language code, args["3"] = source word (sometimes absent).
            const sourceLangCode = tpl.args['2'];
            const sourceWord = tpl.args['3'] || tpl.args['alt'] || null;
            if (sourceLangCode) {
                const result = {
                    origin_lang: readableLang(sourceLangCode),
                    origin_word: sourceWord || undefined,
                };
                if (!result.origin_word) delete result.origin_word;
                return result;
            }
        }
    }

    // No structured template found — fall back to the raw prose, but
    // mark it explicitly as unstructured rather than inventing an
    // origin_lang. This is meant to be picked up in manual review, not
    // shipped straight to the game.
    if (entry.etymology_text && entry.etymology_text.trim()) {
        return {
            origin_lang: 'UNVERIFIED — needs manual review',
            origin_meaning: entry.etymology_text.trim().slice(0, 200),
        };
    }

    return null;
}

// ---- Main -------------------------------------------------------------

async function main() {
    const args = parseArgs(process.argv);
    if (!args.dump) {
        console.error('Usage: node scripts/build_etymology_dict.js --dump /path/to/wiktextract.jsonl [--langs en,fr,...] [--out path.json]');
        process.exit(1);
    }
    if (!fs.existsSync(args.dump)) {
        console.error(`Dump file not found: ${args.dump}`);
        process.exit(1);
    }

    const langs = args.langs || ALL_LANGS;
    const vocabRoot = path.join(process.cwd(), 'vocabulary');

    console.log(`Scanning ${vocabRoot} for words missing etymology (languages: ${langs.join(', ')})...`);
    const { needed, totals } = findWordsNeedingEtymology(vocabRoot, langs);

    langs.forEach(l => {
        console.log(`  ${l}: ${totals[l].missing} of ${totals[l].total} words need etymology`);
    });

    console.log(`\nStreaming ${args.dump} (this can take a while for large dumps)...`);
    const found = await matchFromDump(args.dump, needed, LANG_CODE_MAP);

    console.log('\n=== Coverage report ===');
    const output = {};
    langs.forEach(l => {
        const matchedCount = Object.keys(found[l]).length;
        const neededCount = needed[l].size;
        const pct = neededCount ? ((matchedCount / neededCount) * 100).toFixed(1) : '0.0';
        console.log(`  ${l}: matched ${matchedCount} / ${neededCount} needed (${pct}%)`);
        if (matchedCount > 0) output[l] = found[l];
    });

    const unverifiedCounts = {};
    langs.forEach(l => {
        unverifiedCounts[l] = Object.values(found[l] || {})
            .filter(v => v.origin_lang === 'UNVERIFIED — needs manual review').length;
    });
    console.log('\n=== Entries flagged UNVERIFIED (unstructured etymology_text, needs a human) ===');
    langs.forEach(l => {
        if (unverifiedCounts[l] > 0) console.log(`  ${l}: ${unverifiedCounts[l]}`);
    });

    fs.writeFileSync(args.out, JSON.stringify(output, null, 2));
    console.log(`\nWrote ${args.out}`);
    console.log('Next step: merge this into scripts/enrich_etymology.js and run it against vocabulary/ (see scripts/enrich_etymology.patch.md).');
}

main().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
