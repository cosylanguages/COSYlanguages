const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8080/games/index.html');
});

const games = [
    { id: 'fluency_flow', title: 'Fluency Flow' },
    { id: 'battle_of_wits', title: 'Battle of Wits' },
    { id: 'opinion_arena', title: 'Opinion Arena' },
    { id: 'critics_corner', title: "Critic's Corner" },
    { id: 'story_chain', title: 'Story Chain' },
    { id: 'hot_seat', title: 'Hot Seat' },
    { id: 'action_hero', title: 'Action Hero' },
    { id: 'identity_mystery', title: 'Identity Mystery' },
    { id: 'object_quest', title: 'Object Quest' },
    { id: 'word_linker', title: 'Word Linker' },
    { id: 'last_letter', title: 'Last Letter' },
    { id: 'emoji_odyssey', title: 'Emoji Odyssey' },
    { id: 'cosy_crossword', title: 'Cosy Crossword' },
    { id: 'lucky_numbers', title: 'Lucky Numbers' }
];

for (const game of games) {
    test(`Game: ${game.title} navigates to standalone page`, async ({ page }) => {
        const card = page.locator(`.gc[onclick*="${game.id}"]`).first();
        await expect(card).toBeVisible();
        await card.click();

        await expect(page).toHaveURL(new RegExp(`games/${game.id}/index.html`));
    });
}
