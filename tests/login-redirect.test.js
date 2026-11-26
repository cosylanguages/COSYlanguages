/**
 * tests/login-redirect.test.js
 * Unit tests for the shared post-login redirect resolver.
 *
 * The resolver must return visitors to the COSYlanguages page they came from without
 * allowing open redirects, and must never bounce back to the sign-in page.
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs');

const { resolve, isSafeRedirect } = require(path.join(__dirname, '../js/core/login-redirect.js'));

const BASE = 'https://cosylanguages.github.io/COSYlanguages/login.html?redirect=ignored';
const ORIGIN = 'https://cosylanguages.github.io';
const FALLBACK = 'https://cosylanguages.github.io/COSYplatform/';

function options(extra) {
  return Object.assign({ base: BASE, origin: ORIGIN, fallback: FALLBACK }, extra || {});
}

test('returns an absolute same-origin redirect with its query string', () => {
  const target = 'https://cosylanguages.github.io/COSYplatform/index.html?lesson=lessons/en/b1/unit1-travel.json';
  assert.equal(resolve(target, options()), target);
});

test('returns a visitor to any COSYlanguages app page, not just platform or manuals', () => {
  const events = 'https://cosylanguages.github.io/COSYevents/events/speaking-club.html?session=abc';
  const magazine = 'https://cosylanguages.github.io/COSYmagazine/issues/2026-11.html';
  assert.equal(resolve(events, options()), events);
  assert.equal(resolve(magazine, options()), magazine);
});

test('preserves a hash used by lesson deep links', () => {
  const target = 'https://cosylanguages.github.io/COSYplatform/index.html#lesson=lessons/en/b1/unit1-travel.json';
  assert.equal(resolve(target, options()), target);
});

test('keeps an encoded manual id in the query intact', () => {
  const target = 'https://cosylanguages.github.io/COSYmanuals/index.html?manual=en%3Aa1%3Amanual%3Ato-be-test';
  assert.equal(resolve(target, options()), target);
});

test('returns a root-relative redirect inside the ecosystem', () => {
  assert.equal(
    resolve('/COSYmanuals/index.html?manual=en-b1-grammar', options()),
    'https://cosylanguages.github.io/COSYmanuals/index.html?manual=en-b1-grammar'
  );
});

test('returns a single-page relative redirect in the login folder', () => {
  assert.equal(
    resolve('student.html?lesson=abc', options()),
    'https://cosylanguages.github.io/COSYlanguages/student.html?lesson=abc'
  );
});

test('rejects a redirect to another origin', () => {
  assert.equal(resolve('https://evil.example/phish', options()), FALLBACK);
});

test('rejects a protocol-relative redirect to another origin', () => {
  assert.equal(resolve('//evil.example/phish', options()), FALLBACK);
});

test('rejects javascript and data schemes', () => {
  assert.equal(resolve('javascript:alert(1)', options()), FALLBACK);
  assert.equal(resolve('data:text/html,<script>alert(1)</script>', options()), FALLBACK);
});

test('rejects a redirect back to the login page to avoid a loop', () => {
  assert.equal(resolve('login.html', options()), FALLBACK);
  assert.equal(resolve('/COSYlanguages/login.html?redirect=x', options()), FALLBACK);
  assert.equal(resolve('/COSYlanguages/%6Cogin.html', options()), FALLBACK);
});

test('rejects bare tokens that are not page paths', () => {
  assert.equal(resolve('en-b1-grammar', options()), FALLBACK);
  assert.equal(resolve('lessons/en/b1/unit1-travel.json', options()), FALLBACK);
});

test('falls back to the referring COSYlanguages page when the redirect is unusable', () => {
  const referrer = 'https://cosylanguages.github.io/COSYmanuals/index.html?manual=en-b1-grammar';
  assert.equal(resolve('en-b1-grammar', options({ referrer })), referrer);
});

test('ignores a referrer outside the ecosystem', () => {
  assert.equal(resolve(null, options({ referrer: 'https://evil.example/page' })), FALLBACK);
});

test('ignores a referrer that is the login page itself', () => {
  assert.equal(
    resolve(null, options({ referrer: 'https://cosylanguages.github.io/COSYlanguages/login.html' })),
    FALLBACK
  );
});

test('uses the fallback when nothing else is available', () => {
  assert.equal(resolve(null, options()), FALLBACK);
});

test('isSafeRedirect reports the same safety decision', () => {
  assert.equal(isSafeRedirect('/COSYplatform/student.html', options()), true);
  assert.equal(isSafeRedirect('https://evil.example/', options()), false);
  assert.equal(isSafeRedirect('login.html', options()), false);
});

test('the requested page wins over the referring page', () => {
  const target = 'https://cosylanguages.github.io/COSYplatform/student.html?lesson=abc';
  const referrer = 'https://cosylanguages.github.io/COSYmanuals/';
  assert.equal(resolve(target, options({ referrer })), target);
});

test('the sign-in page never chooses a destination from the account role', () => {
  const html = fs.readFileSync(path.join(__dirname, '../login.html'), 'utf8');
  assert.doesNotMatch(html, /COSY_MANUALS_URL/);
  assert.doesNotMatch(html, /if\s*\(\s*role\s*===/);
  assert.match(html, /login-redirect\.js\?v=\d+/);
});

test('the login URLs generated by the shared nav carry a cache version', () => {
  const engine = fs.readFileSync(path.join(__dirname, '../js/core/engine.js'), 'utf8');
  assert.match(engine, /LOGIN_REDIRECT_VERSION\s*=\s*'[^']+'/);
  assert.match(engine, /&v=' \+ LOGIN_REDIRECT_VERSION/);
});
