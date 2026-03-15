const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const fileUrl = (filename) => 'file://' + path.resolve(filename);

  // 1. Events Page Categories
  await page.goto(fileUrl('events.html'));
  await page.click('#toggle-games-btn');
  await page.waitForSelector('#game-nights-topics', { state: 'visible' });
  await page.screenshot({ path: 'verification/events_categories.png' });

  // 2. Bingo Setup Modal
  await page.click('#open-bingo-btn');
  await page.waitForSelector('#bingo-modal', { state: 'visible' });
  await page.screenshot({ path: 'verification/bingo_setup.png' });

  // 3. Bingo 3x5 Grid (Level 2)
  await page.selectOption('#bingo-level', '2');
  await page.click('#start-bingo-player-btn');
  await page.waitForSelector('#bingo-player-grid', { state: 'visible' });
  await page.screenshot({ path: 'verification/bingo_3x5.png' });

  // 4. Bingo 9x3 Grid (Level 5)
  await page.click('#close-bingo-btn');
  await page.click('#open-bingo-btn');
  await page.selectOption('#bingo-level', '5');
  await page.click('#start-bingo-player-btn');
  await page.waitForSelector('#bingo-player-grid', { state: 'visible' });
  await page.screenshot({ path: 'verification/bingo_9x3.png' });

  // 5. Practice Page Notification
  await page.goto(fileUrl('practice.html'));
  // Select numbers theme
  await page.selectOption('#practice-theme', 'numbers');
  // Wait a bit for the notification to appear
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verification/practice_numbers_tip.png' });

  await browser.close();
})();
