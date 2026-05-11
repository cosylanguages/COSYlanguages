const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8080/games/index.html');
});

const games = [
    { id: 'fluency', title: 'Fluency Flow', setupText: 'Speak about it', levels: true },
    { id: 'battle', title: 'Battle of Wits', setupText: 'Language', levels: true },
    { id: 'opinion', title: 'Opinion Arena', setupText: 'Language', levels: true },
    { id: 'critic', title: "Critic's Corner", setupText: 'Language', levels: true, minLevel: 'Intermediate (B1)' },
    { id: 'storychain', title: 'Story Chain', setupText: 'Language', levels: true },
    { id: 'hotseat', title: 'Hot Seat', setupText: 'Language', levels: true },
    { id: 'action', title: 'Action Hero', setupText: 'Category', levels: true, categories: ['Verbs 🏃‍♂️', 'Animals 🐾'] },
    { id: 'identity', title: 'Identity Mystery', setupText: 'Category', levels: true, categories: ['Famous People 🌟', 'Jobs & Professions 💼'] },
    { id: 'objectquest', title: 'Object Quest', setupText: 'Category', levels: true, categories: ['Animals 🐾', 'Food & Drink 🍕'] },
    { id: 'wordlinker', title: 'Word Linker', setupText: 'Mode', levels: true, modes: ['Odd One Out ❌', 'Common Connection 🔗'] },
    { id: 'lastletter', title: 'Last Letter', setupText: 'category', levels: true },
    { id: 'emoji', title: 'Emoji Odyssey', setupText: 'Mode', levels: true },
    { id: 'crossword', title: 'Cosy Crossword', setupText: 'Language', levels: true },
    { id: 'bingo', title: 'Lucky Numbers', setupText: 'Role', levels: false, infoText: 'Level: Starter (A1)' }
];

for (const game of games) {
    test(`Game: ${game.title} integration, selectors and constraints`, async ({ page }) => {
        const card = page.locator(`.gc[onclick*="openGame('${game.id}')"]`);
        await expect(card).toBeVisible();
        await card.click();

        const overlay = page.locator('#game-overlay');
        await expect(overlay).toHaveClass(/open/);

        // Verify setup text
        const setupElement = page.locator(`#go-body :text("${game.setupText}")`).first();
        await expect(setupElement).toBeVisible();

        // Verify language selector is present
        const langSelector = page.locator('#s-lang');
        await expect(langSelector).toBeVisible();

        // Verify level selector
        if (game.levels) {
            const levelSelector = page.locator('#s-level');
            await expect(levelSelector).toBeVisible();
            if (game.minLevel) {
                const options = await levelSelector.locator('option').allTextContents();
                expect(options[0]).toBe(game.minLevel);
            }
        } else {
            // Bingo case
            await expect(page.locator('#s-level')).not.toBeVisible();
            await expect(page.locator(`text=${game.infoText}`)).toBeVisible();
        }

        // Verify categories
        if (game.categories) {
            const catSelector = page.locator('#s-cat');
            await expect(catSelector).toBeVisible();
            const options = await catSelector.locator('option').allTextContents();
            for (const cat of game.categories) {
                expect(options).toContain(cat);
            }
        }

        // Verify modes
        if (game.modes) {
            const modeSelector = page.locator('#s-mode');
            await expect(modeSelector).toBeVisible();
            const options = await modeSelector.locator('option').allTextContents();
            for (const mode of game.modes) {
                expect(options).toContain(mode);
            }
        }

        // Close overlay
        await page.click('.go-back');
        await expect(overlay).not.toHaveClass(/open/);
    });
}
