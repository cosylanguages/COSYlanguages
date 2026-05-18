import { test, expect } from '@playwright/test';

test('Debug Grammar Reference', async ({ page }) => {
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));

  await page.goto('http://localhost:8080/portal/index.html');
  await page.evaluate(() => {
    localStorage.setItem('student_unlocked', 'true');
  });

  await page.goto('http://localhost:8080/portal/grammar-reference.html');

  // Wait for some time to let scripts load
  await page.waitForTimeout(2000);

  const title = await page.locator('.section-title').innerText();
  console.log('Title found:', title);

  const html = await page.content();
  console.log('Main content summary:', html.substring(0, 1000));

  const verbsDataExists = await page.evaluate(() => !!window.verbsData);
  console.log('window.verbsData exists:', verbsDataExists);

  if (verbsDataExists) {
    const enVerbs = await page.evaluate(() => window.verbsData['en']?.length || 0);
    console.log('EN verbs count in window.verbsData:', enVerbs);
    const verbsWithTenses = await page.evaluate(() => window.verbsData['en']?.filter(v => v.tenses).length || 0);
    console.log('EN verbs with tenses count:', verbsWithTenses);
  }

  const cardsCount = await page.locator('.card').count();
  console.log('Cards count:', cardsCount);

  if (cardsCount > 0) {
    const firstCardId = await page.locator('.card').first().getAttribute('id');
    console.log('First card ID:', firstCardId);
  }

  await page.screenshot({ path: 'grammar-debug.png', fullPage: true });
});
