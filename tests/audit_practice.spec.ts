import { test, expect } from '@playwright/test';

const languages = ['en', 'fr', 'it', 'ru', 'el'];
const levels = ['starter', 'elementary', 'intermediate'];

test.describe('Practice Data Audit', () => {
    for (const lang of languages) {
        test(`Verify practice functionality for ${lang.toUpperCase()}`, async ({ page }) => {
            test.slow();

            // Listen for console errors
            page.on('console', msg => {
                if (msg.type() === 'error') console.log(`BROWSER ERROR [${lang}]: ${msg.text()}`);
            });

            for (const level of levels) {
                for (const category of ['vocab', 'grammar']) {
                    // Navigate with parameters directly
                    await page.goto(`http://localhost:8080/practice.html?lang=${lang}&level=${level}&cat=${category}&theme=all`, { waitUntil: 'networkidle' });

                    // The page may auto-start if lang/cat are in URL
                    const practiceSection = page.locator('#practice-section');
                    const startBtn = page.locator('#start-btn');

                    // Wait for either practice to start or setup to stabilize
                    await page.waitForTimeout(1500);

                    if (await practiceSection.evaluate(el => el.classList.contains('hidden'))) {
                        if (await startBtn.isVisible() && await startBtn.isEnabled()) {
                            await startBtn.click();
                        }
                    }

                    try {
                        // Wait for hidden class to be removed
                        await expect(practiceSection).not.toHaveClass(/hidden/, { timeout: 15000 });

                        // Verify that question card has some text
                        const wordDisplay = page.locator('#word-display');
                        await expect(wordDisplay).not.toBeEmpty({ timeout: 5000 });

                        console.log(`✓ Verified ${lang} - ${level} - ${category}`);
                    } catch (e) {
                        console.log(`✗ Failed ${lang} - ${level} - ${category}: Practice section did not appear or word-display is empty.`);
                        await page.screenshot({ path: `failure-${lang}-${level}-${category}.png` });
                        throw e;
                    }
                }
            }
        });
    }
});
