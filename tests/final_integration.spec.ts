import { test, expect } from '@playwright/test';

test.describe('COSYlanguages 4-App Integration', () => {

  test('Marketing Home Loads', async ({ page }) => {
    await page.goto('http://localhost:8080/index.html');
    await expect(page).toHaveTitle(/COSYlanguages/);
    // Flexible text check
    await expect(page.locator('body')).toContainText('lessons');
  });

  test('Practice Hub Dashboard Loads', async ({ page }) => {
    await page.goto('http://localhost:8080/practice/index.html');
    await expect(page.locator('text=Ready to practise?')).toBeVisible();
    await expect(page.locator('#streak-arc')).toBeVisible();
  });

  test('Games Hub Lobby Loads', async ({ page }) => {
    await page.goto('http://localhost:8080/games/index.html');
    await expect(page.locator('h1')).toContainText('Games Hub');
    const gameCards = page.locator('.game-card-lobby');
    await expect(gameCards.first()).toBeVisible();
  });

  test('Student Portal Lifecycle', async ({ page }) => {
    await page.goto('http://localhost:8080/portal/index.html');

    // Unlock
    await page.fill('#student-code', 'COSY-EN-A1-GEN');
    await page.click('button:has-text("Unlock My Path")');

    // Dashboard
    await expect(page.locator('.profile-card')).toBeVisible();
    await expect(page.locator('.chapter-node').first()).toBeVisible();
    const count = await page.locator('.chapter-node').count();
    expect(count).toBeGreaterThan(0);

    // Lesson Detail
    await page.click('.chapter-node:first-child');
    await expect(page.locator('#ld')).toHaveClass(/open/);
    await expect(page.locator('#ld-content')).toContainText('Day 1');

    // Notebook
    await page.click('text=Vocab Notebook');
    await expect(page.locator('#panel-vocab')).toHaveClass(/active/);
  });

});
