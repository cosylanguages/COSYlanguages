#!/usr/bin/env node
/**
 * Finds visible strings that no dictionary can reach.
 *
 * A string is translatable when it sits inside an element carrying
 * data-translate-key or data-i18n, or is an attribute covered by
 * data-i18n-aria-label. Everything else is hardcoded: it stays in whatever
 * language it was typed in, whatever the visitor selects.
 *
 *   node scripts/i18n-audit.js            # summary per page
 *   node scripts/i18n-audit.js --json     # machine-readable
 *   node scripts/i18n-audit.js --page comparative/index.html
 */

const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const IGNORED = new Set(['.git', 'node_modules', '.github', 'tests', 'docs', 'partials']);

// Pages whose body copy is deliberately in a language other than the interface:
// language hubs teach their own language, marathon levels are French material.
const CONTENT_PAGES = [/^languages\/(?!.*\/(?:index|grammar|vocabulary|curriculum)\.html)[a-z-]+\//, /^print-studio\//];

const SKIP_TAGS = new Set(['script', 'style', 'code', 'pre', 'kbd', 'samp', 'svg', 'math', 'template', 'noscript']);
const TRANSLATED_ATTRS = new Set(['data-translate-key', 'data-i18n']);
const CHECKED_ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];
const NOISE = [
    /^[\s\d\p{P}\p{S}]+$/u,          // numbers, punctuation, symbols
    /^[\w.+-]+@[\w.-]+$/,            // email
    /^https?:\/\//,                  // url
    /^[A-Z]{2,5}$/,                  // acronyms: CEFR, DELF, IELTS, PDF
    /^COSYlanguages$/,               // the brand
    /^[^\p{L}]*$/u
];

function htmlFiles(dir = ROOT, found = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            if (!IGNORED.has(entry.name)) htmlFiles(full, found);
        } else if (entry.name.endsWith('.html')) {
            found.push(full);
        }
    }
    return found;
}

function isNoise(text) {
    const t = text.replace(/\s+/g, ' ').trim();
    if (t.length < 2) return true;
    return NOISE.some(pattern => pattern.test(t));
}

/** Walk the markup, tracking whether an ancestor is translatable. */
function auditSource(source) {
    const findings = [];
    const stack = [];
    let i = 0;
    const translatable = () => stack.some(frame => frame.translatable);
    const push = text => {
        if (stack.some(frame => frame.skip || frame.translatable)) return;
        const value = text.replace(/\s+/g, ' ').trim();
        if (!value || isNoise(value)) return;
        findings.push({ kind: 'text', value });
    };

    while (i < source.length) {
        const lt = source.indexOf('<', i);
        if (lt === -1) {
            push(source.slice(i));
            break;
        }
        if (lt > i) push(source.slice(i, lt));

        if (source.startsWith('<!--', lt)) {
            const end = source.indexOf('-->', lt);
            i = end === -1 ? source.length : end + 3;
            continue;
        }

        const gt = source.indexOf('>', lt);
        if (gt === -1) break;
        const raw = source.slice(lt, gt + 1);
        const closing = /^<\s*\//.test(raw);
        const name = (raw.match(/^<\s*\/?\s*([a-zA-Z0-9-]+)/) || [, ''])[1].toLowerCase();
        const selfClosing = /\/>$/.test(raw) || ['br', 'hr', 'img', 'input', 'meta', 'link', 'source', 'area', 'base', 'col', 'embed', 'track', 'wbr'].includes(name);

        if (closing) {
            for (let s = stack.length - 1; s >= 0; s--) {
                if (stack[s].name === name) {
                    stack.length = s;
                    break;
                }
            }
            i = gt + 1;
            continue;
        }

        const hasKey = [...TRANSLATED_ATTRS].some(attr => new RegExp(`\\b${attr}\\s*=`).test(raw));
        const skip = SKIP_TAGS.has(name);
        const frame = { name, translatable: translatable() || hasKey, skip: skip || (stack.length && stack[stack.length - 1].skip) };

        // Attributes that render as visible text (button value, field placeholder...).
        if (!hasKey && !frame.skip && !raw.includes('data-i18n-aria-label')) {
            for (const attr of CHECKED_ATTRS) {
                const m = raw.match(new RegExp(`\\b${attr}\\s*=\\s*("([^"]*)"|'([^']*)')`));
                if (!m) continue;
                const value = (m[2] !== undefined ? m[2] : m[3]).trim();
                if (!isNoise(value)) findings.push({ kind: attr, value });
            }
            const vm = raw.match(/\bvalue\s*=\s*("([^"]*)"|'([^']*)')/);
            if (vm && /^<input|^<button/i.test(raw)) {
                const value = (vm[2] !== undefined ? vm[2] : vm[3]).trim();
                if (!isNoise(value)) findings.push({ kind: 'value', value });
            }
        }

        if (!selfClosing) stack.push(frame);
        i = gt + 1;
    }
    return findings;
}

function main() {
    const json = process.argv.includes('--json');
    const only = (() => {
        const at = process.argv.indexOf('--page');
        return at === -1 ? null : process.argv[at + 1];
    })();

    const report = [];
    for (const file of htmlFiles()) {
        const relative = path.relative(ROOT, file).split(path.sep).join('/');
        if (only && relative !== only) continue;
        const findings = auditSource(fs.readFileSync(file, 'utf8'));
        const content = CONTENT_PAGES.some(pattern => pattern.test(relative));
        report.push({ page: relative, content, count: findings.length, findings });
    }
    report.sort((a, b) => b.count - a.count);

    if (json) {
        console.log(JSON.stringify(report, null, 2));
        return;
    }
    const total = report.reduce((n, r) => n + r.count, 0);
    console.log(`hardcoded strings: ${total} across ${report.filter(r => r.count).length} page(s)\n`);
    for (const r of report.filter(r => r.count)) {
        console.log(`${String(r.count).padStart(4)}  ${r.page}${r.content ? '   [content page: copy may stay]' : ''}`);
    }
    const worst = report.find(r => r.count);
    if (worst) {
        console.log(`\nsample from ${worst.page}:`);
        for (const f of worst.findings.slice(0, 12)) console.log(`   ${f.kind}: ${f.value}`);
    }
}

module.exports = { auditSource, htmlFiles };

if (require.main === module) main();
