import { test, expect } from '@playwright/test';

test.describe('Notebook Page', () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage before each test
    await page.goto('http://localhost:8080/notebook/index.html');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test('should display empty state when no words are saved', async ({ page }) => {
    await expect(page.locator('.empty-state')).toBeVisible();
    await expect(page.locator('#stat-words')).toHaveText('0');
  });

  test('should add a custom word and persist it', async ({ page }) => {
    await page.fill('#manual-word', 'TestWord');
    await page.fill('#manual-def', 'Test Definition');
    await page.click('button:has-text("+ Save")');

    // Check if word is added to the grid
    await expect(page.locator('.vocab-card')).toHaveCount(1);
    await expect(page.locator('.vocab-word')).toHaveText('TestWord');
    await expect(page.locator('.vocab-def')).toHaveText('Test Definition');
    await expect(page.locator('#stat-words')).toHaveText('1');

    // Verify persistence after reload
    await page.reload();
    await expect(page.locator('.vocab-card')).toHaveCount(1);
    await expect(page.locator('.vocab-word')).toHaveText('TestWord');
  });

  test('should remove a word', async ({ page }) => {
    // Add a word first
    await page.fill('#manual-word', 'RemoveMe');
    await page.fill('#manual-def', 'To be removed');
    await page.click('button:has-text("+ Save")');
    await expect(page.locator('.vocab-card')).toHaveCount(1);

    // Click remove button and handle confirm dialog
    page.on('dialog', dialog => dialog.accept());
    await page.click('.btn-remove');

    // Check if word is removed
    await expect(page.locator('.empty-state')).toBeVisible();
    await expect(page.locator('#stat-words')).toHaveText('0');
  });

  test('should export dictionary', async ({ page }) => {
    await page.fill('#manual-word', 'ExportWord');
    await page.fill('#manual-def', 'Export Def');
    await page.click('button:has-text("+ Save")');

    // Trigger export
    const [ download ] = await Promise.all([
      page.waitForEvent('download'),
      page.click('button:has-text("Export Data")'),
    ]);

    expect(download.suggestedFilename()).toBe('cosy-dictionary.txt');
  });

  test('visual check - capture screenshot', async ({ page }) => {
    await page.fill('#manual-word', 'VisualWord');
    await page.fill('#manual-def', 'A word for visual testing with a slightly longer definition to see how it wraps in the card.');
    await page.click('button:has-text("+ Save")');

    // Wait for animation
    await page.waitForTimeout(500);

    await page.screenshot({ path: 'results/notebook-redesign.png', fullPage: true });
  });
});
