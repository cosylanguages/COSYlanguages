import { test, expect } from '@playwright/test';
import path from 'path';

test('homepage screenshot', async ({ page }) => {
  await page.goto(`file://${path.resolve('index.html')}`);
  await page.screenshot({ path: 'results/homepage.png', fullPage: true });
});
