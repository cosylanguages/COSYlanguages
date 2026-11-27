#!/usr/bin/env node
/**
 * Renders shared/partials/footer.html into every page that carries the standard
 * footer, so the footer has one source of truth.
 *
 * This is a maintenance tool, not a build step: the rendered markup is committed
 * and GitHub Pages serves it as-is, so pages work without JavaScript and a page
 * can still be deleted without touching anything else. `tests/footer.test.js`
 * fails when a page and the partial disagree, which is what keeps them in sync.
 *
 *   node scripts/sync-footer.js          # rewrite the pages
 *   node scripts/sync-footer.js --check  # report drift, exit 1
 */

const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const PARTIAL = fs.readFileSync(path.join(ROOT, 'shared', 'partials', 'footer.html'), 'utf8').replace(/\n$/, '');
const IGNORED_DIRS = new Set(['.git', 'node_modules', '.github']);
const PIN_LINK = '      <a href="#" data-i18n="button.pinToHome" onclick="event.preventDefault();showPinModal((window.t ? window.t(\'pin_title\') : \'Add to Home Screen\'), (window.t ? window.t(\'pin_home_desc\') : \'Add COSYlanguages for instant access.\'), window.location.origin + window.location.pathname + \'?embed=true\')">Add to home screen 📲</a>\n';

function htmlFiles(dir = ROOT, found = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.isDirectory()) {
            if (!IGNORED_DIRS.has(entry.name)) htmlFiles(path.join(dir, entry.name), found);
        } else if (entry.name.endsWith('.html')) {
            found.push(path.join(dir, entry.name));
        }
    }
    return found;
}

function depthOf(relative) {
    return relative.split('/').length - 1;
}

function renderFooter(relative) {
    return PARTIAL
        .replaceAll('{{root}}', '../'.repeat(depthOf(relative)))
        .replace('{{pin}}', relative === 'index.html' ? PIN_LINK : '');
}

const FOOTER = /<footer\b[\s\S]*?<\/footer>/;
// A page carries the standard footer when that footer links the course hub.
// Minimal footers (print artefacts, marathon levels, the login page) do not.
const STANDARD = /href="(?:\.\.\/)*courses\/index\.html"/;

function main() {
    const check = process.argv.includes('--check');
    const drift = [];
    let examined = 0;
    for (const file of htmlFiles()) {
        const relative = path.relative(ROOT, file).split(path.sep).join('/');
        if (relative.startsWith('shared/')) continue;
        const source = fs.readFileSync(file, 'utf8');
        const footer = source.match(FOOTER);
        if (!footer || !STANDARD.test(footer[0])) continue;
        examined++;
        const wanted = renderFooter(relative);
        if (footer[0] === wanted) continue;
        drift.push(relative);
        if (!check) fs.writeFileSync(file, source.replace(FOOTER, wanted), 'utf8');
    }
    if (check && drift.length) {
        console.error(`footer out of sync in ${drift.length} of ${examined} page(s):\n  ${drift.join('\n  ')}`);
        console.error('\nRun: node scripts/sync-footer.js');
        process.exit(1);
    }
    console.log(`${check ? 'checked' : 'synced'} ${examined} page(s), ${drift.length} changed`);
}

module.exports = { renderFooter, htmlFiles };

if (require.main === module) main();
