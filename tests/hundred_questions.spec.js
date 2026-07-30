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

    // Click Continue
    await page.click('button:has-text("Continue →")');

    // 4. Verify Game Rules screen
    await expect(page.locator('.rules-screen h2')).toHaveText('Game Rules 📜');
    await expect(page.locator('.rules-screen')).toContainText('One question per meeting');

    // 5. Start Game to go to Level Select
    await page.click('button:has-text("▶ Start Game")');
    await expect(page.locator('.levels-screen h2')).toHaveText('Select Level 🗺️');

    // Verify there are 8 levels listed
    const levelCards = page.locator('.levels-screen .lvl-card');
    await expect(levelCards).toHaveCount(8);

    // 6. Select LEVEL 01
    await levelCards.first().click();

    // 7. Verify Gameplay screen of LEVEL 01
    await expect(page.locator('.score-bar')).toContainText('LEVEL 01: Warm-up & Daily Life');
    await expect(page.locator('.score-bar')).toContainText('Question 1 of 13');
    await expect(page.locator('.score-bar')).toContainText('1');

    // Verify first children-friendly question text adapting grandpa/grandma target
    // "What is your favorite memory of us playing together when I was little?"
    const gameCard = page.locator('.game-card');
    await expect(gameCard).toContainText('What is your favorite memory of us playing together when I was little?');
    await expect(gameCard).toContainText('Children-Friendly 👶');

    // 8. Click the card to flip it and see Adult-Friendly side
    await gameCard.click();
    await expect(gameCard).toContainText('What was the exact moment you realized our relationship had successfully transitioned into an adult friendship?');
    await expect(gameCard).toContainText('Adult-Friendly 🔥');

    // Flip back
    await gameCard.click();
    await expect(gameCard).toContainText('What is your favorite memory of us playing together when I was little?');

    // 9. Test Pass button
    const passBtn = page.locator('#pass-btn');
    await expect(passBtn).toHaveText('🤫 Use Pass');
    await passBtn.click();
    await expect(passBtn).toHaveText('🤫 Pass Used');
    await expect(passBtn).toBeDisabled();

    // 10. Test Next button
    await page.click('button:has-text("Next ➡")');
    await expect(page.locator('.score-bar')).toContainText('Question 2 of 13');
    await expect(page.locator('.score-bar')).toContainText('2');

    // Verify adapted text replace for Grandma
    // c: "What is a delicious meal that {role} always makes for me?"
    // Grandma: "What is a delicious meal that grandmother always makes for me?"
    await expect(gameCard).toContainText('What is a delicious meal that grandmother always makes for me?');

    // Take a premium verification screenshot
    await page.screenshot({ path: 'verification/hundred_questions_gameplay.png', fullPage: true });
});
