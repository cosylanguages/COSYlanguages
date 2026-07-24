const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 800 });

    // Mock window config secrets before init
    await page.addInitScript(() => {
        window.COSY_SUPABASE_URL = 'https://iajkejcmoykubthlwfra.supabase.co';
        window.COSY_SUPABASE_ANON_KEY = 'mocked-key';
    });

    console.log("Navigating to Practice Page...");
    await page.goto('http://localhost:8080/practice/index.html');
    await page.waitForTimeout(2000);

    // Let's start a normal vocab session to showcase choice/scramble shortcut buttons
    console.log("Starting a dynamic Vocabulary session...");
    await page.click('button:has-text("Start Practice")');
    await page.waitForTimeout(2000);

    console.log("Taking screenshot of active game board with keycap badges...");
    await page.screenshot({ path: 'verification/screenshots/gameplay_keycaps_and_progress.png' });

    await browser.close();
    console.log("Visual capture of gameplay keycaps complete!");
})();
