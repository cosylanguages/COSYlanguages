const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

  await page.goto('http://localhost:8080/');
  await page.evaluate(() => localStorage.setItem('student_unlocked', 'true'));

  console.log('Checking French...');
  await page.goto('http://localhost:8080/portal/grammar-reference.html?lang=fr');
  await page.waitForTimeout(5000);
  const frTitle = await page.textContent('.section-title');
  console.log('Title:', frTitle);
  const verbs = await page.locator('.sidebar-item').allTextContents();
  console.log('Verbs found:', verbs.length);
  if (verbs.includes('être')) console.log('ÊTRE FOUND');
  else console.log('ÊTRE NOT FOUND among:', verbs.slice(0, 10));

  await page.screenshot({ path: 'verification/screenshots/grammar_fr_final.png', fullPage: true });

  await browser.close();
})();
