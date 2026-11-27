#!/usr/bin/env node
/**
 * Reports CSS classes that no page, script or data file mentions.
 *
 * A report, not a gate. A class can be built at runtime (`'we-g' + index`), or
 * used by a sibling repository through a cross-origin stylesheet. Shared
 * stylesheets are skipped for that reason, and classes matching a concatenation
 * prefix are ignored. Treat every remaining hit as a question, then delete only
 * what you have checked by hand.
 *
 * Usage: node scripts/audit-css-usage.js [--json]
 */

const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const SKIP_DIRS = new Set(['.git', 'node_modules', '.github', 'tests', 'scripts', 'docs']);
const SOURCE = /\.(?:html|js|json|md)$/;

// Published for other repositories, or loaded on demand by their scripts.
const SHARED = new Set([
    'shared/css/tokens.css',
    'css/fonts.css',
    'css/cosy-icons.css',
    'css/ecosystem-strip.css',
    'css/daily-directory.css',
    'css/daily-strip.css',
    'css/shared-nav.css',
    'css/mobile.css',
    'css/components.css',
    'css/contact-chooser.css',
]);

function walk(dir, found = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.isDirectory()) {
            if (!SKIP_DIRS.has(entry.name)) walk(path.join(dir, entry.name), found);
        } else {
            found.push(path.join(dir, entry.name));
        }
    }
    return found;
}

const files = walk(ROOT);
const relative = file => path.relative(ROOT, file).split(path.sep).join('/');

const corpus = files
    .filter(file => SOURCE.test(file))
    .map(file => fs.readFileSync(file, 'utf8'))
    .join('\n');

// `family-badge-${family}`, `'we-g' + index`, `"tab-" + name`, `'we-mk we-g' + index`.
const dynamicLiterals = new Set([
    ...[...corpus.matchAll(/(['"])([^'"\n]*?)([A-Za-z][\w-]*)\1\s*\+/g)].map(match => match[3]),
    ...[...corpus.matchAll(/([A-Za-z][\w-]*?)\$\{/g)].map(match => match[1]),
].filter(prefix => /^[a-z][a-z0-9]*-[a-z0-9-]*$/.test(prefix)));

const isDynamic = className => [...dynamicLiterals].some(prefix => {
    if (prefix.length < 3) return false;
    if (prefix.endsWith('-')) return className.startsWith(prefix);
    return className.startsWith(`${prefix}-`) ||
        (className.startsWith(prefix) && /^\d+$/.test(className.slice(prefix.length)));
});

const report = [];
for (const file of files.filter(entry => entry.endsWith('.css'))) {
    const name = relative(file);
    if (SHARED.has(name)) continue;

    const css = fs.readFileSync(file, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
    const classes = new Set([...css.matchAll(/\.([A-Za-z_][\w-]*)/g)].map(match => match[1]));
    const unused = [...classes].filter(className =>
        !corpus.includes(className) && !isDynamic(className)
    );
    if (unused.length) report.push({ file: name, unused: unused.sort() });
}

if (process.argv.includes('--json')) {
    console.log(JSON.stringify(report, null, 2));
    process.exit(0);
}

const total = report.reduce((sum, entry) => sum + entry.unused.length, 0);
console.log(`CSS usage audit: ${total} class(es) no page, script or data file mentions.\n`);
for (const entry of report.sort((a, b) => b.unused.length - a.unused.length)) {
    console.log(`${String(entry.unused.length).padStart(3)}  ${entry.file}`);
    console.log(`     ${entry.unused.join(' ')}\n`);
}
console.log(`Skipped ${SHARED.size} shared stylesheets. Ignored ${dynamicLiterals.size} concatenation prefixes:`);
console.log(`  ${[...dynamicLiterals].sort().join(' ')}`);
