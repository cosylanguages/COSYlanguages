import { test, expect } from '@playwright/test';

test.describe('Grammar Reference Audit - Authorized', () => {

  test.beforeEach(async ({ page }) => {
    // Unlock student area
    await page.goto('http://localhost:8080/portal/student/grammar-reference.html');
    await page.evaluate(() => {
      localStorage.setItem('student_unlocked', 'true');
    });
    await page.goto('http://localhost:8080/portal/student/grammar-reference.html?lang=en');
    // Wait for async script loading (loadGrammarData has 1000ms timeout)
    await page.waitForTimeout(2000);
  });

  test('Language switching logic', async ({ page }) => {
    // Default is English
    await expect(page.locator('.section-title')).toContainText('EN');

    // Switch to French
    await page.click('.lang-tab[data-lang="fr"]');
    await page.waitForTimeout(2000);
    await expect(page.locator('.section-title')).toContainText('FR');
    await expect(page.locator('#verb-être')).toBeVisible();

    // Switch to Russian
    await page.click('.lang-tab[data-lang="ru"]');
    await page.waitForTimeout(2000);
    await expect(page.locator('.section-title')).toContainText('RU');
    await expect(page.locator('#verb-быть')).toBeVisible();
  });

  test('Sidebar scroll-spy and navigation', async ({ page }) => {
    // Click sidebar item for "be" (English default)
    const beLink = '.sidebar-item[href="#verb-be"]';
    await page.click(beLink);
    await expect(page.locator('#verb-be')).toBeInViewport();
    await expect(page.locator(beLink)).toHaveClass(/active/);
  });
});

test.describe('Grammar Reference Audit - Unauthorized', () => {
  test('Security redirect if not unlocked', async ({ page }) => {
    await page.goto('http://localhost:8080/portal/student/grammar-reference.html');
    await expect(page).toHaveURL(/.*index\.html/);
  });
});
