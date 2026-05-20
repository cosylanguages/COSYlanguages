const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

  // Bypass security
  await page.goto('http://localhost:8080/');
  await page.evaluate(() => {
    localStorage.setItem('student_unlocked', 'true');
    localStorage.setItem('cosy_lang', 'en');
  });

  // Check English
  console.log('Navigating to English...');
  await page.goto('http://localhost:8080/portal/grammar-reference.html?lang=en');
  await page.waitForTimeout(5000); // Wait for async loading
  await page.screenshot({ path: 'verification/screenshots/grammar_en_fixed.png', fullPage: true });

  // Check Russian
  console.log('Navigating to Russian...');
  await page.goto('http://localhost:8080/portal/grammar-reference.html?lang=ru');
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'verification/screenshots/grammar_ru_fixed.png', fullPage: true });

  await browser.close();
})();
