import { test, expect } from '@playwright/test';

test.describe('New Features Verification', () => {
  test('Vocabulary Reference page loads and displays content', async ({ page }) => {
    await page.goto('http://localhost:8080/vocabulary/index.html');
    await expect(page).toHaveTitle(/Vocabulary Reference/);
    await expect(page.locator('nav#cosy-nav')).toBeVisible();
    // Wait for dynamic content
    await page.waitForSelector('.rt-word', { timeout: 10000 });
    const wordCount = await page.locator('.rt-word').count();
    expect(wordCount).toBeGreaterThan(0);
  });

  test('Grammar Reference page loads and displays content', async ({ page }) => {
    await page.goto('http://localhost:8080/grammar/index.html?lang=en');
    await expect(page).toHaveTitle(/Grammar Reference/);
    await expect(page.locator('nav#cosy-nav')).toBeVisible();
    // Check for a verb card
    await page.waitForSelector('.card', { timeout: 10000 });
    const cardCount = await page.locator('.card').count();
    expect(cardCount).toBeGreaterThan(0);
  });

  test('Notebook page loads and allows manual word entry', async ({ page }) => {
    await page.goto('http://localhost:8080/notebook/index.html');
    await expect(page).toHaveTitle(/My Vocabulary/);

    // Add a manual word
    await page.fill('#manual-word', 'TestWord');
    await page.fill('#manual-def', 'TestDefinition');
    await page.click('button:has-text("+ Save")');

    // Check if it appeared
    await expect(page.locator('.vocab-word:has-text("TestWord")')).toBeVisible();
    await expect(page.locator('.vocab-def:has-text("TestDefinition")')).toBeVisible();
  });

  test('Speaking Club page has article info', async ({ page }) => {
    await page.goto('http://localhost:8080/events/keeping-up-with-science.html');
    await expect(page.getByRole('cell', { name: 'Article', exact: true })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Description', exact: true })).toBeVisible();
    await expect(page.locator('a:has-text("Read Article")')).toBeVisible();
  });
});
