import { test, expect } from '@playwright/test';

test.describe('End-to-End System Flow', () => {
  test('should unlock, view dashboard, and start a lesson', async ({ page }) => {
    await page.goto('http://localhost:8080/days.html');
    await page.fill('#ci', 'COSY-EN-A1-GEN');
    await page.click('button.btn-primary-new');

    await expect(page.locator('#area')).toBeVisible();

    const lessonCards = page.locator('.lesson');
    await expect(lessonCards.first()).toBeVisible();

    await page.click('.lesson:first-child .l-head');

    const startBtn = page.locator('.lesson:first-child .btn-start-new');
    await expect(startBtn).toBeVisible();
    await startBtn.click();

    await expect(page).toHaveURL(/lesson.html/);
  });

  test('should access Grammar Reference through dashboard', async ({ page }) => {
    await page.goto('http://localhost:8080/days.html');
    await page.fill('#ci', 'COSY-EN-A1-GEN');
    await page.click('button.btn-primary-new');

    await expect(page.locator('#area')).toBeVisible();

    await page.click('.lesson:first-child .l-head');
    await page.click('.lesson:first-child .tab-btn:has-text("References")');

    const grammarHubLink = page.locator('.lesson:first-child .ref-card-new:has-text("Grammar Hub")');
    await expect(grammarHubLink).toBeVisible();
    await grammarHubLink.click();

    await expect(page).toHaveURL(/grammar-reference.html/);
  });

  test('should access Workbook through dashboard', async ({ page }) => {
    await page.goto('http://localhost:8080/days.html');
    await page.fill('#ci', 'COSY-EN-A1-GEN');
    await page.click('button.btn-primary-new');

    await expect(page.locator('#area')).toBeVisible();

    await page.click('.lesson:first-child .l-head');
    await page.click('.lesson:first-child .tab-btn:has-text("References")');

    const workbookLink = page.locator('.lesson:first-child .ref-card-new:has-text("Open My Workbook")');
    await expect(workbookLink).toBeVisible();
    await workbookLink.click();

    await expect(page).toHaveURL(/workbook.html/);
  });
});
