import { test, expect } from '@playwright/test';

test.describe('Wonder Club and Session Verification', () => {
  test('Club page should load and display correctly', async ({ page }) => {
    await page.goto('http://localhost:8080/events/i-couldnt-help-but-wonder.html');
    await expect(page.locator('h1')).toContainText("I Couldn't Help But Wonder");
    await expect(page.locator('.club-hero p')).toContainText('Random ideas');

    // Past Sessions list checks
    await expect(page.locator('h4:has-text("Do Raindrops Select Where to Fall?")')).toBeVisible();
    await expect(page.locator('a:has-text("View Full Session →")')).toBeVisible();
  });

  test('First session page should load and contain all required sections', async ({ page }) => {
    await page.goto('http://localhost:8080/events/sessions/whether-raindrops-select-where-to-fall.html');
    await expect(page.locator('h1')).toContainText('Do Raindrops Select the Place Where to Fall?');
    await expect(page.locator('.club-tag')).toContainText("I Couldn't Help But Wonder");

    // Detailed description is present and has text
    await expect(page.locator('.content-container > div').first()).toBeVisible();

    // Vocabulary grid check (should have 10 cards)
    const vocabCards = page.locator('.vocab-card');
    await expect(vocabCards).toHaveCount(10);

    // Check first vocabulary card has the right words and button
    await expect(vocabCards.first().locator('.vocab-word')).toContainText('Speculate');
    await expect(vocabCards.first().locator('.btn-add-dict')).toBeVisible();

    // Warm-up, Round 1, Let's Speak Together, and Round 2 present
    await expect(page.locator('#s-warm')).toBeVisible();
    await expect(page.locator('#s-r1')).toBeVisible();
    await expect(page.locator('#s-lst')).toBeVisible();
    await expect(page.locator('#s-r2')).toBeVisible();
    await expect(page.locator('#s-mistakes')).toBeVisible();

    // Header tags shouldn't contain numbers
    await expect(page.locator('#s-warm .round-header span').first()).toContainText('Warm-up');
    await expect(page.locator('#s-r1 .round-header span').first()).toContainText('Round 1');
    await expect(page.locator('#s-r2 .round-header span').first()).toContainText('Round 2');
  });
});
