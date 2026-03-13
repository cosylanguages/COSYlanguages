import { test, expect } from '@playwright/test';

test.describe('Practice Engine Grammar Features', () => {
  test('Grammar category and theme selection', async ({ page }) => {
    await page.goto('http://localhost:8080/practice.html');

    // Ensure a language with Gender/Articles is selected (e.g., French)
    await page.click('.lang-selection-card[data-value="fr"]');

    // Select Grammar category
    await page.evaluate(() => {
        const radio = document.getElementById('cat-grammar') as HTMLInputElement;
        radio.checked = true;
        radio.dispatchEvent(new Event('change'));
    });

    // Theme select should be updated
    const themeSelect = page.locator('#practice-theme');
    await expect(themeSelect).toBeVisible();

    // Check for grammar-specific themes (in French)
    const options = await themeSelect.locator('option').allTextContents();
    expect(options).toContain('Présent Simple 🕒');
    expect(options).toContain('Singulier & Pluriel ↔️');

    // Task types should be updated (Gender & Articles, Numbers & Plurals should be visible and checked)
    // Open Advanced options first to make them visible
    await page.click('details.advanced-options summary');

    const gaTaskLabel = page.locator('label.toggle-chip:has(#type-ga)');
    const npTaskLabel = page.locator('label.toggle-chip:has(#type-np)');
    await expect(gaTaskLabel).toBeVisible();
    await expect(npTaskLabel).toBeVisible();
    await expect(page.locator('#type-ga')).toBeChecked();
    await expect(page.locator('#type-np')).toBeChecked();
  });

  test('English grammar hides Gender and Future Simple', async ({ page }) => {
    await page.goto('http://localhost:8080/practice.html');

    // Ensure English is selected
    await page.click('.lang-selection-card[data-value="en"]');

    // Select Grammar category
    await page.evaluate(() => {
        const radio = document.getElementById('cat-grammar') as HTMLInputElement;
        radio.checked = true;
        radio.dispatchEvent(new Event('change'));
    });

    const themeSelect = page.locator('#practice-theme');
    const options = await themeSelect.locator('option').allTextContents();

    // Per requirements, English grammar doesn't show Future Simple or Gender
    expect(options).not.toContain('Future Simple 🚀');
    expect(options).not.toContain('Gender & Articles ⚖️');
  });

  test('Pronoun practice allows multiple correct answers', async ({ page }) => {
    // We need to inject a specific state or wait for a specific task
    await page.goto('http://localhost:8080/practice.html');

    // Ensure a language with pronouns is selected (e.g., French)
    await page.click('.lang-selection-card[data-value="fr"]');

    // Start practice with only grammar/cloze enabled
    await page.evaluate(() => {
        (document.getElementById('cat-grammar') as HTMLInputElement).checked = true;
        (window as any).updateCategoryUI();

        // Disable everything except cloze
        const checks = document.querySelectorAll('.advanced-options input[type="checkbox"]');
        checks.forEach(c => (c as HTMLInputElement).checked = false);
        (document.getElementById('type-cl') as HTMLInputElement).checked = true;
    });

    await page.click('#start-btn');

    // We might need to skip until we find a pronoun task, or just verify the logic
    // For the sake of this test, we verify the data structure via evaluate
    const hasMultipleCorrect = await page.evaluate(() => {
        const current = (window as any).currentPractice;
        const pronounTasks = current.words.filter(w => w.form === 'pronoun');
        return pronounTasks.some(w => w.answer.includes('/'));
    });

    expect(hasMultipleCorrect).toBe(true);
  });

  test('Plural tasks have distractors in MC mode', async ({ page }) => {
    await page.goto('http://localhost:8080/practice.html');

    await page.evaluate(() => {
        (document.getElementById('cat-grammar') as HTMLInputElement).checked = true;
        (window as any).updateCategoryUI();

        const checks = document.querySelectorAll('.advanced-options input[type="checkbox"]');
        checks.forEach(c => (c as HTMLInputElement).checked = false);
        (document.getElementById('type-mc') as HTMLInputElement).checked = true;
    });

    await page.click('#start-btn');

    const hasPluralDistractors = await page.evaluate(() => {
        const current = (window as any).currentPractice;
        const npTasks = current.words.filter(w => w.theme === 'grammar_plurals');
        return npTasks.every(w => w.distractors && w.distractors.length > 0);
    });

    expect(hasPluralDistractors).toBe(true);
  });
});
