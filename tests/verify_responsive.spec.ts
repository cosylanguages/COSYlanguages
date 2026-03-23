import { test, expect } from '@playwright/test';

const languages = ['en', 'fr', 'it', 'ru', 'el'];
const viewports = [
  { name: 'Mobile', width: 375, height: 667 }, // iPhone SE
  { name: 'Tablet', width: 768, height: 1024 }, // iPad
  { name: 'Desktop', width: 1280, height: 800 }
];

for (const lang of languages) {
  for (const vp of viewports) {
    test(`Verify ${lang}.html on ${vp.name}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      // Using file path since I'm in a sandbox and can't easily start a server for this quick check if I don't have to,
      // but actually I should use the local server to ensure everything loads correctly (translations etc).
      // I'll assume the server is running on 8080 as per standard.
      await page.goto(`http://localhost:8080/languages/${lang}.html`);

      // Wait for daily dose to load (though it's fast)
      await page.waitForSelector('#word-of-the-day');

      // Scroll to trigger reveal animations if any
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(1000); // Wait for animations to finish

      await page.screenshot({
        path: `verification/${lang}_${vp.name.toLowerCase()}.png`,
        fullPage: true
      });
    });
  }
}
