import { test, expect } from '@playwright/test';

test.describe('Grammar Roadmap Integration', () => {
  test('Accessing Grammar Reference via days.html', async ({ page }) => {
    await page.goto('http://localhost:8080/days.html');

    // Initially curriculum should be hidden
    const curriculum = page.locator('#curriculum-content');
    await expect(curriculum).not.toBeVisible();

    // Enter secret code
    await page.fill('#student-code', 'COSYSTUDENT2025');
    await page.click('#unlock-btn');

    // Now it should be visible
    await expect(curriculum).toBeVisible();

    // Check Grammar Reference section
    const grammarSection = page.locator('h3:has-text("Grammar Reference")');
    await expect(grammarSection).toBeVisible();

    // Click the button
    await page.click('#open-grammar-btn');

    // Should navigate to grammar.html
    await expect(page).toHaveURL(/grammar.html/);

    // Verify it's unlocked (doesn't redirect back)
    await expect(page).toHaveURL(/grammar.html/);

    // Verify English content is shown by default
    const englishHeader = page.locator('.section-title:has-text("English")');
    await expect(englishHeader).toBeVisible();
    await expect(page.locator('#lang-en')).toBeVisible();

    // Verify sidebar items for English
    const sidebarItem = page.locator('.sidebar-item:has-text("Verb to be")');
    await expect(sidebarItem).toBeVisible();

    // Verify Interactive Components (English)
    await expect(page.locator('#lang-en .progress-bar-wrap')).toBeVisible();
    await expect(page.locator('#en-flip')).toBeVisible();
    await expect(page.locator('#en-builder')).toBeVisible();

    // Test Flip Card
    const firstFlipCard = page.locator('#en-flip .flip-card').first();
    await expect(firstFlipCard).not.toHaveClass(/flipped/);
    await firstFlipCard.click();
    await expect(firstFlipCard).toHaveClass(/flipped/);

    // Test Rule Builder (English)
    const amBankItem = page.locator('#en-builder .bank-item:has-text("am")');
    const firstDropSlot = page.locator('#en-builder .builder-drop').first();

    await amBankItem.click();
    await expect(amBankItem).toHaveClass(/selected/);

    await firstDropSlot.click();
    await expect(firstDropSlot).toHaveText('am');
    await expect(amBankItem).toHaveClass(/used/);
  });

  test('Language switching in Grammar Reference', async ({ page }) => {
    // Navigate directly with unlock state in localStorage
    await page.goto('http://localhost:8080/days.html');
    await page.evaluate(() => localStorage.setItem('student_unlocked', 'true'));
    await page.goto('http://localhost:8080/grammar.html?lang=fr');

    // Verify French content
    const frenchHeader = page.locator('#lang-fr .section-title');
    await expect(frenchHeader).toBeVisible();
    await expect(page.locator('#lang-fr')).toBeVisible();
    await expect(page.locator('#lang-en')).not.toBeVisible();

    // Switch to Italian
    await page.click('.lang-tab:has-text("IT")');
    const italianHeader = page.locator('#lang-it .section-title');
    await expect(italianHeader).toBeVisible();
    await expect(page.locator('#lang-it')).toBeVisible();

    // Switch to Russian
    await page.click('.lang-tab:has-text("RU")');
    const russianHeader = page.locator('#lang-ru .section-title');
    await expect(russianHeader).toBeVisible();

    // Switch to Greek
    await page.click('.lang-tab:has-text("EL")');
    const greekHeader = page.locator('#lang-el .section-title');
    await expect(greekHeader).toBeVisible();

    // Switch to Spanish
    await page.click('.lang-tab:has-text("ES")');
    const spanishHeader = page.locator('#lang-es .section-title');
    await expect(spanishHeader).toBeVisible();
    await expect(spanishHeader).toContainText('Español');

    // Verify header flag changed (Spanish flag colors: #AA151B, #F1BF00)
    const f1 = page.locator('#header-flag .f1');
    // Using evaluate to get computed style background color since it's set via JS
    const color = await f1.evaluate(el => window.getComputedStyle(el).backgroundColor);
    // rgb(170, 21, 27) is roughly #AA151B
    expect(color).toBe('rgb(170, 21, 27)');
  });

  test('Grammar Reference redirects if not unlocked', async ({ page }) => {
    // Ensure locked
    await page.goto('http://localhost:8080/days.html');
    await page.evaluate(() => localStorage.removeItem('student_unlocked'));

    await page.goto('http://localhost:8080/grammar.html');

    // Should redirect back to days.html
    await expect(page).toHaveURL(/days.html/);
  });
});
