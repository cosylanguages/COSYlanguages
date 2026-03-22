
import { test, expect } from '@playwright/test';

test('landing page visual and functional check', async ({ page }) => {
  await page.goto('http://localhost:8080/index.html');

  // Wait for the hero section to be visible
  await expect(page.locator('.hero')).toBeVisible();

  // Take a screenshot of the hero
  await page.screenshot({ path: 'verification/landing_hero_final.png' });

  // Verify calculator functionality
  await page.selectOption('#calc-lang', 'fr');
  await page.selectOption('#calc-type', 'spoken');
  await page.selectOption('#calc-dur', '30');
  await page.selectOption('#calc-pack', '16');

  const priceText = await page.locator('#calc-total').innerText();
  console.log('Price for 16 spoken French sessions (30m):', priceText);

  // Wait a bit for potential animations or re-renders
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'verification/calculator_final.png' });

  // Verify scroll reveal
  await page.evaluate(() => window.scrollTo(0, 1000));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'verification/scroll_reveal_final.png' });
});
