import { chromium } from 'playwright';
import path from 'path';

async function verify() {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const practiceUrl = `file://${path.resolve('practice.html')}`;

    await page.goto(practiceUrl);

    // Start lesson 1
    await page.fill('#lesson-range', '1');
    await page.click('#start-btn');

    // Try to find MC
    let mcVisible = false;
    for (let i = 0; i < 20; i++) {
        if (await page.locator('#choices-grid').isVisible()) {
            await page.screenshot({ path: 'practice_mc.png' });
            mcVisible = true;
        }
        if (await page.locator('#scramble-container').isVisible()) {
            await page.screenshot({ path: 'practice_scramble.png' });
        }

        // Skip word
        await page.evaluate(() => {
            showFeedback(true);
        });
        await page.click('#next-btn');
        if (mcVisible && await page.locator('#scramble-container').isVisible()) break;
    }

    await browser.close();
}

verify();
