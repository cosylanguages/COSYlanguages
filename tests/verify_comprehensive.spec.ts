import { test, expect } from '@playwright/test';
import path from 'path';

test('homepage sections and assets', async ({ page }) => {
  const responses: any[] = [];
  page.on('response', response => {
    responses.push({ url: response.url(), status: response.status() });
  });

  await page.goto(`file://${path.resolve('index.html')}`);

  // Check for new sections
  await expect(page.locator('#tips').first()).toBeVisible();

  // Check assets
  const cssResponse = responses.find(r => r.url.endsWith('css/style.css'));
  expect(cssResponse).toBeDefined();

  const jsResponse = responses.find(r => r.url.endsWith('js/script.js'));
  expect(jsResponse).toBeDefined();

  // Check navigation to English page
  await page.click('a[href="languages/en.html"]');
  await expect(page).toHaveURL(/languages\/en.html/);

  await expect(page.locator('h1')).toContainText('Welcome to COSYEnglish');
});

test('practice page links', async ({ page }) => {
  await page.goto(`file://${path.resolve('practice.html')}`);
  await expect(page.locator('#practice-container')).toBeVisible();
  await expect(page.locator('details.help-details').first()).toBeVisible();
});

test('events page links', async ({ page }) => {
  await page.goto(`file://${path.resolve('events.html')}`);
  await expect(page.locator('#events')).toBeVisible();
  await expect(page.locator('details.help-details').first()).toBeVisible();
});
