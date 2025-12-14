import { test, expect } from '@playwright/test';
import path from 'path';

test('homepage screenshot', async ({ page }) => {
  await page.goto(`file://${path.resolve('index.html')}`);
  await page.screenshot({ path: 'results/homepage.png', fullPage: true });
});

test('Russian page should have level test section', async ({ page }) => {
  await page.goto(`file://${path.resolve('TAKORusskiy.html')}`);

  // Manually trigger the translation to Russian
  await page.evaluate(() => {
    // @ts-ignore
    setLanguage('ru');
  });

  const levelTestHeader = await page.locator('[data-translate-key="level_test_header"]');
  await expect(levelTestHeader).toBeVisible();
  await expect(levelTestHeader).toHaveText('Проверьте свой уровень 🧐');
});

test('French page should have level test section', async ({ page }) => {
  await page.goto(`file://${path.resolve('COSYfrancais.html')}`);

  await page.evaluate(() => {
    // @ts-ignore
    setLanguage('fr');
  });

  const levelTestHeader = await page.locator('[data-translate-key="level_test_header"]');
  await expect(levelTestHeader).toBeVisible();
  await expect(levelTestHeader).toHaveText('Testez votre niveau 🧐');
});

test('Italian page should have level test section', async ({ page }) => {
  await page.goto(`file://${path.resolve('COSYitaliano.html')}`);

  await page.evaluate(() => {
    // @ts-ignore
    setLanguage('it');
  });

  const levelTestHeader = await page.locator('[data-translate-key="level_test_header"]');
  await expect(levelTestHeader).toBeVisible();
  await expect(levelTestHeader).toHaveText('Metti alla prova il tuo livello 🧐');
});

test('English page should have level test section', async ({ page }) => {
  await page.goto(`file://${path.resolve('COSYEnglish.html')}`);

  await page.evaluate(() => {
    // @ts-ignore
    setLanguage('en');
  });

  const levelTestHeader = await page.locator('[data-translate-key="level_test_header"]');
  await expect(levelTestHeader).toBeVisible();
  await expect(levelTestHeader).toHaveText('Test Your Level 🧐');
});

test('Greek page should have level test section', async ({ page }) => {
  await page.goto(`file://${path.resolve('KOZYellinika.html')}`);

  await page.evaluate(() => {
    // @ts-ignore
    setLanguage('el');
  });

  const levelTestHeader = await page.locator('[data-translate-key="level_test_header"]');
  await expect(levelTestHeader).toBeVisible();
  await expect(levelTestHeader).toHaveText('Δοκιμάστε το επίπεδό σας 🧐');
});
