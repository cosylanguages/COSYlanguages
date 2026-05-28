const { test, expect } = require('@playwright/test');

test.describe('Etymology Explorer Game', () => {
    test.beforeEach(async ({ page }) => {
        // Go to the etymology explorer page directly
        // Tests usually run against the local server started in pre-commit/CI
        // Append trailing slash to ensure relative paths resolve correctly in 'serve'
        await page.goto('http://localhost:8080/games/etymology_explorer/');
    });

    test('should load setup screen correctly', async ({ page }) => {
        await expect(page.locator('.setup-screen')).toBeVisible();
        await expect(page.locator('h2')).toHaveText('Etymology Explorer 📜');
        await expect(page.locator('select#s-level')).toBeVisible();
        await expect(page.locator('button.btn-start-game')).toBeVisible();
    });

    test('should start game and show questions', async ({ page }) => {
        await page.click('button.btn-start-game');

        // Wait for game-card to appear
        await expect(page.locator('.game-card')).toBeVisible();
        await expect(page.locator('.etymology-word')).not.toBeEmpty();
        await expect(page.locator('.word-opt')).toHaveCount(4);

        // Verify score bar
        await expect(page.locator('#et-score')).toHaveText('0');
        await expect(page.locator('.sb-item').nth(1)).toContainText('/10');
    });

    test('should handle correct answer and show path with arrows', async ({ page }) => {
        // Inject mock data directly before anything happens
        await page.evaluate(() => {
            window.mockData = {
                etymology: [
                    {
                        word: "TestWord",
                        options: ["Origin", "W1", "W2", "W3"],
                        answer: "Origin",
                        level: "easy",
                        path: "TestWord → Origin",
                        detail: "Correct detail"
                    }
                ]
            };
            window.COSYLoader.getGameData = () => window.mockData;
        });

        await page.click('button.btn-start-game');

        // Check the word
        await expect(page.locator('.etymology-word')).toHaveText('TestWord');

        // Click the correct option
        await page.click('button.word-opt:has-text("Origin")');

        // Check feedback
        const feedback = page.locator('#et-fb');
        await expect(feedback).toHaveClass(/ok/);
        await expect(feedback).toContainText('Correct!');
        await expect(feedback).toContainText('Correct detail');

        // Check path with the specific arrow format requested by user
        await expect(page.locator('.et-path')).toHaveText('TestWord → Origin');

        // Check score updated
        await expect(page.locator('#et-score')).toHaveText('10');
    });
});
