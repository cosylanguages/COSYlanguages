import { test, expect } from '@playwright/test';

test('100 Questions standalone game flow verification', async ({ page }) => {
    // Navigate directly to the 100 Questions standalone page
    await page.goto('http://localhost:8080/games/hundred_questions/index.html');

    // 1. Verify Setup screen loads
    await expect(page).toHaveTitle(/100 Questions — COSYlanguages/);
    await expect(page.locator('.setup-screen h2')).toHaveText('100 Questions');

    // Verify default options
    const deckSelect = page.locator('#s-deck');
    await expect(deckSelect).toBeVisible();
    await expect(deckSelect).toHaveValue('friends');

    const langSelect = page.locator('#s-lang');
    await expect(langSelect).toBeVisible();
    await expect(langSelect).toHaveValue('en');

    // 2. Test switching language to Russian (ru) updates the texts dynamically
    await langSelect.selectOption('ru');
    await expect(page.locator('.setup-screen p')).toContainText('Игра для глубоких разговоров');

    // 3. Switch back to English (en) and select Family deck with Subgroups
    await langSelect.selectOption('en');
    await deckSelect.selectOption('family');

    // Check that subgroup selection is visible
    const subgroupSelect = page.locator('#s-subgroup');
    await expect(subgroupSelect).toBeVisible();
    await expect(subgroupSelect).toHaveValue('mother');

    // Switch to grandparents and check target selection
    await subgroupSelect.selectOption('grandparents');
    const targetSelect = page.locator('#s-family-target');
    await expect(targetSelect).toBeVisible();
    await expect(targetSelect).toHaveValue('grandma');

    // 4. Test selecting the new Civic Deck and verify regional subgroup options
    await deckSelect.selectOption('civic');
    await expect(subgroupSelect).toBeVisible();
    await expect(subgroupSelect).toHaveValue('us');

    // Select Canada and click Continue
    await subgroupSelect.selectOption('canada');
    await page.click('button:has-text("Continue →")');

    // 5. Verify Game Rules screen
    await expect(page.locator('.rules-screen h2')).toHaveText('Game Rules 📜');
    await expect(page.locator('.rules-screen')).toContainText('One question per meeting');

    // 6. Start Game to go to Level Select
    await page.click('button:has-text("▶ Start Game")');
    await expect(page.locator('.levels-screen h2')).toHaveText('Select Level 🗺️');

    // Verify there are 5 levels listed for civic
    const levelCards = page.locator('.levels-screen .lvl-card');
    await expect(levelCards).toHaveCount(5);

    // 7. Select LEVEL 01
    await levelCards.first().click();

    // 8. Verify Gameplay screen of LEVEL 01
    await expect(page.locator('.score-bar')).toContainText('LEVEL 01: Warm-up & Geography');
    await expect(page.locator('.score-bar')).toContainText('Question 1 of 20');
    await expect(page.locator('.score-bar')).toContainText('1');

    // Verify first question text adapted for Canada
    const gameCard = page.locator('.game-card');
    await expect(gameCard).toContainText('What is the capital city of Canada?');

    // 9. Test Pass button
    const passBtn = page.locator('#pass-btn');
    await expect(passBtn).toHaveText('🤫 Use Pass');
    await passBtn.click();
    await expect(passBtn).toHaveText('🤫 Pass Used');
    await expect(passBtn).toBeDisabled();

    // 10. Test Next button
    await page.click('button:has-text("Next ➡")');
    await expect(page.locator('.score-bar')).toContainText('Question 2 of 20');
    await expect(page.locator('.score-bar')).toContainText('2');

    // Verify second question text adapted for Canada
    await expect(gameCard).toContainText('Name one of the longest rivers or major oceans bordering Canada.');

    // 11. Navigate back to start and test Netflix deck
    await page.click('button:has-text("🎓 Levels")');
    await page.click('.levels-screen button:has-text("← Back")');

    // Switch to Netflix deck
    await deckSelect.selectOption('netflix');
    await page.click('button:has-text("Continue →")');
    await page.click('button:has-text("▶ Start Game")');

    // Verify Netflix levels are present
    const netflixLevels = page.locator('.levels-screen .lvl-card');
    await expect(netflixLevels).toHaveCount(5);
    await expect(netflixLevels.first()).toContainText('The Hook & Opening Scene');

    // Select LEVEL 01 of Netflix doc
    await netflixLevels.first().click();
    await expect(page.locator('.score-bar')).toContainText('The Hook & Opening Scene');
    await expect(gameCard).toContainText('drone shot');
});
