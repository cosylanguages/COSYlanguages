const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  // Ensure directories exist
  fs.mkdirSync('/home/jules/verification/videos', { recursive: true });
  fs.mkdirSync('/home/jules/verification/screenshots', { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    recordVideo: {
      dir: '/home/jules/verification/videos',
      size: { width: 1280, height: 720 }
    },
    viewport: { width: 1280, height: 1200 } // height 1200 to capture everything!
  });

  const page = await context.newPage();

  console.log('Navigating to Placement Quiz...');
  await page.goto('http://localhost:8080/placement-quiz.html');
  await page.waitForTimeout(1000);

  console.log('Selecting English language...');
  await page.click('text=🇬🇧 English');
  await page.waitForTimeout(1000);

  console.log('Answering all 10 receptive questions correctly (Option 0)...');
  for (let i = 0; i < 10; i++) {
    const options = page.locator('.option-btn');
    await options.nth(0).click();
    await page.waitForTimeout(1300);
  }

  console.log('Answering 5 active speaking questions with Option 0 (High anxiety / Freeze)...');
  for (let i = 10; i < 15; i++) {
    const options = page.locator('.option-btn');
    await options.nth(0).click();
    await page.waitForTimeout(1300);
  }

  console.log('We should be on the results screen. Scrolling down to capture full diagnostic and action plan...');
  await page.waitForTimeout(2000);

  // Scroll down to the diagnostic section
  await page.evaluate(() => {
    const diagnostic = document.getElementById('dynamic-diagnostic');
    if (diagnostic) diagnostic.scrollIntoView();
  });
  await page.waitForTimeout(1500);

  await page.screenshot({ path: '/home/jules/verification/screenshots/verification.png' });
  await page.waitForTimeout(1000);

  await context.close();
  await browser.close();
  console.log('Verification finished and video/screenshot saved!');
})();
