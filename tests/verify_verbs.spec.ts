import { test, expect } from '@playwright/test';

const languages = ['en', 'fr', 'it', 'ru', 'el'];

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:8080/practice.html');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  // Wait for translations and scripts to load
  await page.waitForTimeout(1000);
});

for (const lang of languages) {
  test(`Verb practice loads correctly for ${lang} - Vocab`, async ({ page }) => {
    await page.click(`.lang-selection-card[data-value="${lang}"]`);
    await page.click('span[data-translate-key="cat_vocab"]');
    await page.selectOption('#practice-level', 'starter');
    await page.click('#start-btn');
    await expect(page.locator('#practice-section')).toBeVisible();

    // Use regex that handles different languages
    const progressText = await page.textContent('#progress-text');
    expect(progressText).toMatch(/\d+ (of|sur|από) \d+/i);
  });

  test(`Verb practice loads correctly for ${lang} - Grammar`, async ({ page }) => {
    await page.click(`.lang-selection-card[data-value="${lang}"]`);
    await page.click('span[data-translate-key="cat_grammar"]');
    await page.selectOption('#practice-level', 'starter');

    // Pick a tense theme
    await page.selectOption('#practice-theme', 'grammar_present_simple');

    await page.click('#start-btn');
    await expect(page.locator('#practice-section')).toBeVisible();

    const progressText = await page.textContent('#progress-text');
    expect(progressText).toMatch(/\d+ (of|sur|από) \d+/i);
  });
}

test('English Verb Classification Task (Regular vs Irregular)', async ({ page }) => {
  await page.click('.lang-selection-card[data-value="en"]');
  await page.click('span[data-translate-key="cat_grammar"]');
  await page.selectOption('#practice-level', 'starter');
  await page.selectOption('#practice-theme', 'grammar_reg_irregular');
  await page.click('#start-btn');

  await expect(page.locator('#practice-section')).toBeVisible();
  const instruction = await page.textContent('#task-instruction');
  // It should be multiple choice
  expect(instruction?.toLowerCase()).toContain('correct word'); // Localization "Select the correct word: 🎯"

  const choices = await page.locator('.choice-btn').allTextContents();
  expect(choices).toContain('Regular');
  expect(choices).toContain('Irregular');
});

test('French Verb Form Task integration in Past Simple', async ({ page }) => {
  await page.click('.lang-selection-card[data-value="fr"]');
  await page.click('span[data-translate-key="cat_grammar"]');
  await page.selectOption('#practice-theme', 'grammar_past_simple');
  await page.click('#start-btn');

  await expect(page.locator('#practice-section')).toBeVisible();
  const progressText = await page.textContent('#progress-text');
  expect(progressText).toMatch(/\d+ (of|sur|από) \d+/i);
});

test('Upper-Intermediate data linking check (EN and EL)', async ({ page }) => {
  // English B2
  await page.click('.lang-selection-card[data-value="en"]');
  await page.click('span[data-translate-key="cat_vocab"]');
  await page.selectOption('#practice-level', 'upper-intermediate');
  // Wait for theme options to update
  await page.waitForTimeout(1000);
  await page.selectOption('#practice-theme', 'opinion_debate');
  await page.click('#start-btn');

  await expect(page.locator('#practice-section')).toBeVisible();
  // 7 vocab + 1 verb = 8 items
  const progressText = await page.textContent('#progress-text');
  expect(progressText).toContain('8');

  // Greek B2
  await page.goto('http://localhost:8080/practice.html');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.waitForTimeout(1000);
  await page.click('.lang-selection-card[data-value="el"]');
  await page.click('span[data-translate-key="cat_vocab"]');
  await page.selectOption('#practice-level', 'upper-intermediate');
  await page.waitForTimeout(1000);
  await page.selectOption('#practice-theme', 'opinion_debate');
  await page.click('#start-btn');

  await expect(page.locator('#practice-section')).toBeVisible();
  const elProgress = await page.textContent('#progress-text');
  expect(elProgress).toContain('8');
});
