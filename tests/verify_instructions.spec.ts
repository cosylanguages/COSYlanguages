import { test, expect } from '@playwright/test';

test('verify instructions and examples appear in practice', async ({ page }) => {
  // Use URL params to skip the setup screen entirely
  await page.goto('http://localhost:8080/practice.html?lang=en&level=starter&cat=vocab');

  // Wait for the word display to appear - this confirms practice has started
  const wordDisplay = page.locator('#word-display');
  await expect(wordDisplay).toBeVisible({ timeout: 10000 });

  // Check instructions box
  const wtd = page.locator('#task-what-to-do');
  await expect(wtd).not.toHaveClass(/hidden/);

  // Take a full page screenshot to see the whole layout
  await page.screenshot({ path: 'task-full-layout.png', fullPage: true });

  const wtdText = await wtd.textContent();
  console.log('Instruction:', wtdText);
});
