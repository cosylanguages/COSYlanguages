import { test, expect } from '@playwright/test';

const POST_SLUGS = [
  'replace-very-50-stronger-adjectives',
  'stop-translating-10-sentence-frames',
  'top-10-verb-synonyms-intermediate-plateau'
];

test.describe('COSY Stage Mode Smoke Tests', () => {
  for (const slug of POST_SLUGS) {
    test(`Stage mode should load and advance beats without errors for ${slug}`, async ({ page }) => {
      const pageErrors: Error[] = [];
      page.on('pageerror', (err) => pageErrors.push(err));

      await page.goto(`http://localhost:8080/blog/${slug}.html?stage=1`, { waitUntil: 'domcontentloaded' });

      // Wait for stage frame and viewport
      const stageFrame = page.locator('.stage-frame-16-9');
      await expect(stageFrame).toBeVisible({ timeout: 10000 });

      // Verify title card and main controls
      const titleCard = page.locator('#stage-title-card');
      await expect(titleCard).toBeVisible();

      const lowerThird = page.locator('#lower-third-text');
      await expect(lowerThird).toBeVisible();

      const nextBtn = page.locator('#btn-next');
      await expect(nextBtn).toBeVisible();

      const counter = page.locator('#beat-counter');
      await expect(counter).toContainText('/');

      // Advance through 5 beats
      for (let step = 0; step < 5; step++) {
        await nextBtn.click();
        await page.waitForTimeout(150);
      }

      // Ensure no JS uncaught exceptions occurred
      expect(pageErrors.length).toBe(0);
    });

    test(`Teleprompter script mode (?script=1) should load correctly for ${slug}`, async ({ page }) => {
      const pageErrors: Error[] = [];
      page.on('pageerror', (err) => pageErrors.push(err));

      await page.goto(`http://localhost:8080/blog/${slug}.html?script=1`, { waitUntil: 'domcontentloaded' });

      const tpWrapper = page.locator('.teleprompter-wrapper');
      await expect(tpWrapper).toBeVisible({ timeout: 10000 });

      const beatsCount = await page.locator('.teleprompter-beat').count();
      expect(beatsCount).toBeGreaterThan(0);

      expect(pageErrors.length).toBe(0);
    });
  }
});
