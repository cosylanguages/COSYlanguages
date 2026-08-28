import { test, expect } from '@playwright/test';

test.describe('Greek Vocabulary Manual (/leksilogio-ellinikon/)', () => {
  test('Index page loads with hero and modules grid', async ({ page }) => {
    await page.goto('http://localhost:8080/leksilogio-ellinikon/index.html');
    await expect(page).toHaveTitle(/Ελληνικό Λεξιλόγιο/);
    const heading = page.locator('h1');
    await expect(heading).toContainText('Ελληνικό Λεξιλόγιο');
    const partCards = page.locator('.part-card');
    await expect(partCards).toHaveCount(6);
  });

  test('Module hub loads and lists topic cards', async ({ page }) => {
    await page.goto('http://localhost:8080/leksilogio-ellinikon/enotita-1.html');
    await expect(page.locator('h1')).toContainText('Ενότητα 1');
    const topicCards = page.locator('.topic-card');
    await expect(topicCards).toHaveCount(5);
  });

  test('Topic page renders cards, grammar link, flashcard flip, and quiz interaction', async ({ page }) => {
    await page.goto('http://localhost:8080/leksilogio-ellinikon/topics/chairetismoi-kai-gnorimia.html');
    await expect(page.locator('h1')).toContainText('Χαιρετισμοί και γνωριμία');

    // Grammar link check
    const grammarLink = page.locator('.box.usage a');
    await expect(grammarLink).toBeVisible();
    await expect(grammarLink).toHaveAttribute('href', '../../elliniki-grammatiki/topics/pos-se-lene.html');

    // Vocab cards check
    const vocabCards = page.locator('.vocab-card');
    await expect(vocabCards).toHaveCount(6);

    // Test search filter
    const searchInput = page.locator('#vocab-search');
    await searchInput.fill('Καλημέρα');
    const visibleCards = page.locator('.vocab-card:not([style*="display: none"])');
    await expect(visibleCards).toHaveCount(1);
    await expect(visibleCards.first()).toContainText('Καλημέρα');

    // Clear search
    await searchInput.fill('');
    await expect(page.locator('.vocab-card:not([style*="display: none"])')).toHaveCount(6);

    // Flashcard flip test
    const firstFlashcard = page.locator('.flashcard').first();
    await expect(firstFlashcard).not.toHaveClass(/flipped/);
    await firstFlashcard.click();
    await expect(firstFlashcard).toHaveClass(/flipped/);

    // Quiz interaction test
    const firstOpt = page.locator('.qopt').first();
    await firstOpt.click();
    await expect(firstOpt).toHaveClass(/correct/);
    await expect(page.locator('.qexplain').first()).toBeVisible();
  });
});
