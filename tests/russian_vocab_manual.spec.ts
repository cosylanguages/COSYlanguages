import { test, expect } from '@playwright/test';

test.describe('Russian Vocabulary Manual (A0-A1)', () => {
  test('Index page renders correctly with 6 module cards', async ({ page }) => {
    await page.goto('/leksika-russkogo-yazyka/index.html');

    await expect(page).toHaveTitle(/COSYlanguages Лексика русского языка/);
    await expect(page.locator('h1')).toContainText('Лексика русского языка');

    const partCards = page.locator('.part-card');
    await expect(partCards).toHaveCount(6);

    await partCards.first().click();
    await page.waitForURL('**/razdel-1.html');
    await expect(page.locator('h1')).toContainText('Человек и общение');
  });

  test('Topic page renders vocabulary cards, search, and flashcards', async ({ page }) => {
    await page.goto('/leksika-russkogo-yazyka/topics/privetstvie-i-znakomstvo.html');

    await expect(page.locator('h1')).toHaveText('Приветствие и знакомство');

    // Check vocabulary cards
    const vocabCards = page.locator('.vocab-card');
    await expect(vocabCards).toHaveCount(4);
    await expect(vocabCards.first()).toContainText('Здравствуйте');

    // Test search filter
    const searchInput = page.locator('#vocab-search');
    await searchInput.fill('Привет');

    // Only matching cards should remain visible
    const visibleCards = page.locator('.vocab-card:not([style*="display: none"])');
    await expect(visibleCards).toHaveCount(1);
    await expect(visibleCards.first()).toContainText('Привет');

    // Clear search
    await searchInput.fill('');
    await expect(page.locator('.vocab-card:not([style*="display: none"])')).toHaveCount(4);

    // Test Flashcards flip
    const flashCard = page.locator('.flashcard').first();
    await expect(flashCard).not.toHaveClass(/flipped/);
    await flashCard.click();
    await expect(flashCard).toHaveClass(/flipped/);
  });
});
