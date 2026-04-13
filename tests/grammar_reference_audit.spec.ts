import { test, expect } from '@playwright/test';

test.describe('Grammar Reference Audit - Authorized', () => {

  test.beforeEach(async ({ page }) => {
    // Unlock student area
    await page.goto('http://localhost:8080/days.html');
    await page.evaluate(() => localStorage.setItem('student_unlocked', 'true'));
    await page.goto('http://localhost:8080/days.html');
  });

  test('Navigation to Grammar Reference from Student Area', async ({ page }) => {
    await page.click('#open-grammar-ref-btn');
    await expect(page).toHaveURL(/grammar-reference.html/);
    await expect(page.locator('h1')).toContainText('Grammar Reference');
  });

  test('Language switching logic', async ({ page }) => {
    await page.goto('http://localhost:8080/grammar-reference.html');

    // Default is English
    await expect(page.locator('.section-title')).toContainText('English');

    // Switch to French
    await page.click('.lang-tab[data-lang="fr"]');
    await expect(page.locator('.section-title')).toContainText('Français');
    await expect(page.locator('#etre')).toBeVisible();

    // Switch to Russian
    await page.click('.lang-tab[data-lang="ru"]');
    await expect(page.locator('.section-title')).toContainText('Русский');
  });

  test('Sidebar scroll-spy and navigation', async ({ page }) => {
    await page.goto('http://localhost:8080/grammar-reference.html');

    // Click sidebar item
    await page.click('.sidebar-item[href="#present-simple"]');
    await expect(page.locator('#present-simple')).toBeInViewport();
    await expect(page.locator('.sidebar-item[href="#present-simple"]')).toHaveClass(/active/);
  });
});

test.describe('Grammar Reference Audit - Unauthorized', () => {
  test('Security redirect if not unlocked', async ({ page }) => {
    await page.goto('http://localhost:8080/grammar-reference.html');
    await expect(page).toHaveURL(/days.html/);
  });
});
