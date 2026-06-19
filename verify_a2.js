const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const langs = ['en', 'fr', 'ru', 'el', 'it', 'es', 'de'];

  for (const lang of langs) {
    await page.goto(`http://localhost:8080/vocabulary/index.html?lang=${lang}`);
    await page.waitForTimeout(2000); // Wait for scripts to load

    // Jump to A2
    await page.click('#sb-A2');
    await page.waitForTimeout(1000);

    await page.screenshot({ path: `verification/vocab_${lang}_a2.png`, fullPage: false });

    await page.goto(`http://localhost:8080/grammar/index.html?lang=${lang}`);
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `verification/grammar_${lang}.png`, fullPage: false });
  }

  await browser.close();
})();
