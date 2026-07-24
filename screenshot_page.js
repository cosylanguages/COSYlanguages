const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });

  // Go to local server
  await page.goto('http://localhost:8080/events/cinema-club.html');
  await page.waitForTimeout(2000); // let animations run

  // Take screenshot of the history grid section
  const grid = await page.$('.cinema-history-grid');
  if (grid) {
    await grid.screenshot({ path: 'cinema-club-grid-visual.png' });
    console.log('Visual screenshot of the grid saved successfully.');
  } else {
    await page.screenshot({ path: 'cinema-club-full-page.png' });
    console.log('Full page screenshot saved since grid was not found.');
  }

  await browser.close();
})();
