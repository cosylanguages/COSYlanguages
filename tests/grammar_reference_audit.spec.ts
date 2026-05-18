import { test, expect } from '@playwright/test';

test.describe('Grammar Reference Audit - Authorized', () => {

  test.beforeEach(async ({ page }) => {
    // Unlock student area
    await page.goto('http://localhost:8080/portal/index.html');
    await page.evaluate(() => {
      localStorage.setItem('student_unlocked', 'true');
    });
    // Go directly to the reference page as the button might be missing or injected dynamically
    await page.goto('http://localhost:8080/portal/grammar-reference.html');
  });

  test('Grammar Reference Page Load', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Grammar Reference');
  });

  test('Language switching and multi-tense rendering', async ({ page }) => {
    // Default is English
    await expect(page.locator('.section-title')).toContainText('English');
    await expect(page.locator('#verb-to-be .gtable')).toHaveCount(2); // Present, Past

    // Switch to French
    await page.click('.lang-tab[data-lang="fr"]');
    await expect(page.locator('.section-title')).toContainText('Français');
    await expect(page.locator('#verb-être')).toBeVisible();
    // French "être" has Present, Imperfect, Future, Conditional, Subjunctive
    await expect(page.locator('#verb-être .gtable')).toHaveCount(5);
    await expect(page.locator('#verb-être .level-badge')).toContainText(['Group: irregular', 'irregular', 'stative']);

    // Switch to Russian
    await page.click('.lang-tab[data-lang="ru"]');
    await expect(page.locator('.section-title')).toContainText('Русский');
    await expect(page.locator('#verb-делать-сделать')).toBeVisible();
    // Russian "делать" has Present Imp, Past Imp, Future Perf
    await expect(page.locator('#verb-делать-сделать .gtable')).toHaveCount(3);
    await expect(page.locator('#verb-делать-сделать .level-badge')).toContainText(['Видовая пара', 'regular', 'action']);
  });

  test('Sidebar scroll-spy and navigation', async ({ page }) => {
    // Click sidebar item for "to be" (English default)
    const beLink = '.sidebar-item[href="#verb-to-be"]';
    await page.click(beLink);
    await expect(page.locator('#verb-to-be')).toBeInViewport();
    await expect(page.locator(beLink)).toHaveClass(/active/);
  });
});

test.describe('Grammar Reference Audit - Unauthorized', () => {
  test('Security redirect if not unlocked', async ({ page }) => {
    // Clear storage
    await page.goto('http://localhost:8080/portal/index.html');
    await page.evaluate(() => localStorage.clear());

    await page.goto('http://localhost:8080/portal/grammar-reference.html');
    await expect(page).toHaveURL(/\/index\.html/);
  });
});
