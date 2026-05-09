const { test, expect } = require('@playwright/test');

test.describe('Games Hub - All Games Verification', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:8080/games/index.html');
    });

    const games = [
        { id: 'fluency', title: 'Fluency Flow', setupText: 'Speak about it' },
        { id: 'battle', title: 'Battle of Wits', setupText: 'Language' },
        { id: 'opinion', title: 'Opinion Arena', setupText: 'Language' },
        { id: 'critic', title: "Critic's Corner", setupText: 'Language' },
        { id: 'storychain', title: 'Story Chain', setupText: 'Language' },
        { id: 'hotseat', title: 'Hot Seat', setupText: 'Language' },
        { id: 'action', title: 'Action Hero', setupText: 'Level' },
        { id: 'identity', title: 'Identity Mystery', setupText: 'Language' },
        { id: 'objectquest', title: 'Object Quest', setupText: 'Language' },
        { id: 'wordlinker', title: 'Word Linker', setupText: 'connection' },
        { id: 'lastletter', title: 'Last Letter', setupText: 'category' },
        { id: 'emoji', title: 'Emoji Odyssey', setupText: 'Mode' },
        { id: 'crossword', title: 'Cosy Crossword', setupText: 'Language' },
        { id: 'bingo', title: 'Lucky Numbers', setupText: 'Role' }
    ];

    for (const game of games) {
        test(`Game: ${game.title} integration`, async ({ page }) => {
            const card = page.locator(`.gc[onclick*="openGame('${game.id}')"]`);
            await expect(card).toBeVisible();
            await card.click();

            const overlay = page.locator('#game-overlay');
            await expect(overlay).toHaveClass(/open/);

            // Scoped search within the overlay body
            const setupElement = page.locator(`#go-body :text("${game.setupText}")`).first();
            await expect(setupElement).toBeVisible();

            // Close overlay
            await page.click('.go-back');
            await expect(overlay).not.toHaveClass(/open/);
        });
    }
});
