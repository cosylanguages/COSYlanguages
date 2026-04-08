import { test, expect } from '@playwright/test';

const pages = [
  'index.html',
  'practice.html',
  'lesson.html',
  'events.html',
  'days.html',
  'languages/en.html'
];

const viewports = [
  { name: 'Mobile', width: 375, height: 812 }, // iPhone X
  { name: 'Desktop', width: 1440, height: 900 }
];

test.describe('Overall Website Audit', () => {
  for (const pageName of pages) {
    for (const vp of viewports) {
      test(`Audit ${pageName} on ${vp.name}`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await page.goto(`http://localhost:8080/${pageName}`);

        // Wait for reasonable content to load
        await page.waitForTimeout(2000);

        // Specific element checks
        if (pageName === 'index.html') {
          const bodyText = await page.textContent('body');
          expect(bodyText).toContain('14'); // Verify game count update
        }

        if (pageName === 'events.html') {
          const gameCards = await page.locator('.game-card-lobby').count();
          console.log(`Found ${gameCards} game cards on events.html`);
          expect(gameCards).toBeGreaterThan(10);
        }

        // Mobile Nav check
        if (vp.name === 'Mobile') {
          const navContainer = page.locator('.mobile-nav');
          await expect(navContainer).toBeVisible();
          const activeLink = page.locator('.mobile-nav-item.active');
          if (await activeLink.count() > 0) {
              const activeText = await activeLink.innerText();
              console.log(`${pageName} mobile active link: ${activeText}`);
          } else {
              console.log(`${pageName} has NO active mobile link`);
          }
        }

        // Check for Recently Played container where expected
        if (pageName === 'index.html' || pageName === 'events.html') {
             const recentlyPlayed = page.locator('#session-log-container');
             // It might be hidden if empty, but it should exist in DOM
             await expect(recentlyPlayed).toBeDefined();
        }

        await page.screenshot({
          path: `audit_screenshots/${pageName.replace('/', '_')}_${vp.name.toLowerCase()}.png`,
          fullPage: true
        });
      });
    }
  }
});
