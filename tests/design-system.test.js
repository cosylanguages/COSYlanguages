/**
 * tests/design-system.test.js
 * The brand contract: the signal teal is this site's identity, and it is
 * consumed through tokens only.
 *
 * #0ABBB5 is 2.4:1 on white, so it may never be body text; it is a fill that
 * carries --cosy-on-signal. These tests keep the tier wired, readable, and
 * single-sourced (no page may hardcode the brand hexes).
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const TOKENS = path.join(ROOT, 'shared', 'css', 'tokens.css');
const tokensSource = fs.readFileSync(TOKENS, 'utf8');

function token(name) {
    const match = tokensSource.match(new RegExp(`--${name}\\s*:\\s*([^;]+);`));
    return match ? match[1].trim() : null;
}

function resolve(name) {
    let value = token(name);
    for (let hop = 0; hop < 4 && value && value.startsWith('var('); hop++) {
        value = token(value.slice(6, -1).trim().replace(/^--/, ''));
    }
    return value;
}

function rgb(hex) {
    const value = hex.replace('#', '');
    const full = value.length === 3 ? value.split('').map(c => c + c).join('') : value;
    return [0, 2, 4].map(i => parseInt(full.slice(i, i + 2), 16));
}

function luminance(hex) {
    const [r, g, b] = rgb(hex).map(channel => {
        const c = channel / 255;
        return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a, b) {
    const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
    return (hi + 0.05) / (lo + 0.05);
}

test('the signal tier is defined with the brand hexes', () => {
    assert.equal(token('cosy-signal')?.toLowerCase(), '#0abbb5');
    assert.equal(token('cosy-signal-secondary')?.toLowerCase(), '#0ca2b0');
    assert.ok(token('cosy-signal-deep'));
    assert.ok(token('cosy-signal-soft'));
});

test('the brand accent and primary action resolve to the signal tier', () => {
    assert.match(token('cosy-languages-accent') || '', /--cosy-signal/);
    assert.match(token('btn-primary-bg') || '', /--cosy-fill-signal|--cosy-signal/);
    assert.doesNotMatch(token('btn-primary-bg') || '', /sage/);
});

test('signal fills carry a readable dark ink, and teal text has a text-safe ink', () => {
    const ink = token('cosy-on-signal');
    assert.match(ink, /^#[0-9a-fA-F]{6}$/);
    const light = token('cosy-signal');
    const secondary = token('cosy-signal-secondary');
    assert.ok(contrast(ink, light) >= 4.5, `on-signal on ${light} is ${contrast(ink, light).toFixed(2)}:1`);
    assert.ok(contrast(ink, secondary) >= 4.5, `on-signal on ${secondary} is ${contrast(ink, secondary).toFixed(2)}:1`);
    assert.ok(contrast(resolve('cosy-signal-ink'), '#FFFFFF') >= 4.5, 'signal-ink must be text-safe on white');
});

test('the signal tier is actually consumed, not dormant', () => {
    const consumers = [
        ['css/base.css', '::selection', '--cosy-signal'],
        ['css/shared-nav.css', '.cosy-nav-link.active', '--cosy-signal'],
        ['css/mobile.css', '.mobile-nav-item.active', '--cosy-signal'],
        ['css/components.css', '.nav-cta', '--cosy-fill-signal'],
    ];
    for (const [file, selector, needle] of consumers) {
        const source = fs.readFileSync(path.join(ROOT, file), 'utf8');
        const start = source.indexOf(selector);
        assert.notEqual(start, -1, `${file} no longer defines ${selector}`);
        const block = source.slice(start, start + 320);
        assert.ok(block.includes(needle), `${selector} in ${file} must use ${needle}`);
    }
});

test('no page hardcodes the brand hexes outside the token file', () => {
    const IGNORED = new Set(['.git', 'node_modules', '.github', 'tests', 'docs']);
    const offenders = [];
    (function walk(dir) {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            if (entry.isDirectory()) {
                if (!IGNORED.has(entry.name)) walk(path.join(dir, entry.name));
                continue;
            }
            const file = path.join(dir, entry.name);
            if (!/\.(html|css|js|json)$/.test(file)) continue;
            if (path.resolve(file) === path.resolve(TOKENS)) continue;
            const source = fs.readFileSync(file, 'utf8')
                // A literal inside var(--token, #fallback) is the token's own
                // value spelled out for engines without custom properties.
                .replace(/var\([^)]*#[0-9a-fA-F]{3,8}[^)]*\)/g, '');
            if (/#0abbb5|#0ca2b0/i.test(source)) offenders.push(path.relative(ROOT, file));
        }
    })(ROOT);
    assert.deepEqual(offenders, [], `use var(--cosy-signal*) instead of the raw hex in: ${offenders.join(', ')}`);
});

test('navigation hover states use the signal tier, not sage', () => {
    const components = fs.readFileSync(path.join(ROOT, 'css', 'components.css'), 'utf8');
    const nav = fs.readFileSync(path.join(ROOT, 'css', 'shared-nav.css'), 'utf8');

    const rules = [
        [components, '.nav-links a:hover'],
        [components, '#cosy-mobile-menu a:hover'],
        [nav, '.cosy-nav-more-dropdown a:hover'],
    ];
    for (const [source, selector] of rules) {
        const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const rule = new RegExp(`${escaped}\\s*\\{([^}]*)\\}`).exec(source);
        assert.ok(rule, `${selector} not found`);
        assert.match(rule[1], /--cosy-signal-soft/, `${selector} should use the signal fill`);
        assert.match(rule[1], /--cosy-signal-ink/, `${selector} should use the signal ink`);
        assert.doesNotMatch(rule[1], /--sage/, `${selector} should not fall back to sage`);
    }
});
