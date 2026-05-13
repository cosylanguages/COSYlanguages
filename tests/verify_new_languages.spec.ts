import { test, expect } from '@playwright/test';

const newLangs = ['es', 'de', 'pt', 'hy', 'ka', 'tt', 'ba', 'br'];
const allLangs = ['en', 'fr', 'it', 'ru', 'el', ...newLangs];

test.describe('New Language Pages Verification', () => {
  for (const lang of newLangs) {
    test(`should load ${lang} page correctly`, async ({ page }) => {
      await page.goto(`http://localhost:8080/languages/${lang}.html`);

      // Check title
      const title = await page.title();
      expect(title.toLowerCase()).toContain('cosy');

      // Check "Coming Soon" messaging
      const bodyText = await page.innerText('body');
      expect(bodyText).toContain('Soon');

      // Check for resource cards
      const resourceCards = page.locator('.resource-card');
      await expect(resourceCards.first()).toBeVisible();

      // Check lead capture form
      await expect(page.locator('.lead-email')).toBeVisible();
      await expect(page.locator('button', { hasText: /Notify|soon/i })).toBeVisible();
    });
  }

  test('should have synchronized navigation across all languages', async ({ page }) => {
    for (const lang of allLangs) {
      await page.goto(`http://localhost:8080/languages/${lang}.html`);
      const navLinks = page.locator('.nav-lang a');
      await expect(navLinks).toHaveCount(13);

      const activeLink = page.locator('.nav-lang a.active-lang');
      await expect(activeLink).toHaveAttribute('data-lang', lang);
    }
  });

  test('should link to new pages from index.html', async ({ page }) => {
    await page.goto('http://localhost:8080/index.html');
    for (const lang of newLangs) {
      const card = page.locator(`.lang-grid-soon .lang-card-soon[onclick*="${lang}.html"]`);
      await expect(card).toBeVisible();
    }
  });
});
