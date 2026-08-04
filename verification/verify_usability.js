const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function run() {
    const videoDir = '/home/jules/verification/videos';
    const screenshotDir = '/home/jules/verification/screenshots';

    fs.mkdirSync(videoDir, { recursive: true });
    fs.mkdirSync(screenshotDir, { recursive: true });

    console.log('Launching browser...');
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
        recordVideo: {
            dir: videoDir,
            size: { width: 1280, height: 720 }
        },
        viewport: { width: 1280, height: 720 }
    });

    const page = await context.newPage();
    try {
        console.log('Navigating to homepage...');
        await page.goto('http://localhost:8080/');
        await page.waitForTimeout(1000);

        console.log('Triggering homepage tour...');
        // Let's scroll to tour FAB and click it
        const tourFab = page.locator('#cosy-tour-fab');
        await tourFab.click();
        await page.waitForTimeout(1000);

        // Advance 3 steps of the tour
        for (let i = 0; i < 3; i++) {
            console.log(`Advancing tour step ${i+1}...`);
            const nextBtn = page.locator('.ctb-btn-next');
            await nextBtn.click();
            await page.waitForTimeout(1000);
        }

        // Close the tour
        console.log('Closing tour...');
        await page.keyboard.press('Escape');
        await page.waitForTimeout(1000);

        // Navigate to Karaoke Club
        console.log('Navigating to Karaoke Club page...');
        await page.goto('http://localhost:8080/events/karaoke-club.html');
        await page.waitForTimeout(1000);

        // Click register interest
        console.log('Clicking Register Interest button...');
        const registerBtn = page.locator('a.join-btn').first();
        await registerBtn.click({ modifiers: ['Control'] });
        await page.waitForTimeout(1000);

        // Take a screenshot at the final state
        const screenshotPath = path.join(screenshotDir, 'verification.png');
        console.log(`Saving screenshot to ${screenshotPath}...`);
        await page.screenshot({ path: screenshotPath });
        await page.waitForTimeout(1000);

    } catch (err) {
        console.error('Error during verification run:', err);
    } finally {
        await context.close();
        await browser.close();
        console.log('Browser closed.');
    }
}

run();
