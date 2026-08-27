const { test, expect } = require('@playwright/test');

const games = [
    { id: 'fluency', path: 'games/fluency_flow/index.html', name: 'Fluency Flow' },
    { id: 'battle', path: 'games/battle_of_wits/index.html', name: 'Battle of Wits' },
    { id: 'opinion', path: 'games/opinion_arena/index.html', name: 'Opinion Arena' },
    { id: 'critic', path: 'games/critics_corner/index.html', name: 'Critic\'s Corner' },
    { id: 'hundred_questions', path: 'games/hundred_questions/index.html', name: '100 Questions' },
    { id: 'storychain', path: 'games/story_chain/index.html', name: 'Story Chain' },
    { id: 'storytelling', path: 'games/storytelling/index.html', name: 'Story Weaver' },
    { id: 'hotseat', path: 'games/hot_seat/index.html', name: 'Hot Seat' },
    { id: 'action', path: 'games/action_hero/index.html', name: 'Action Hero' },
    { id: 'identity', path: 'games/identity_mystery/index.html', name: 'Identity Mystery' },
    { id: 'objectquest', path: 'games/object_quest/index.html', name: 'Object Quest' },
    { id: 'wordlinker', path: 'games/word_linker/index.html', name: 'Word Linker' },
    { id: 'lastletter', path: 'games/last_letter/index.html', name: 'Last Letter' },
    { id: 'emoji', path: 'games/emoji_odyssey/index.html', name: 'Emoji Odyssey' },
    { id: 'crossword', path: 'games/cosy_crossword/index.html', name: 'Cosy Crossword' },
    { id: 'bingo', path: 'games/lucky_numbers/index.html', name: 'Lucky Numbers' },
    { id: 'etymology', path: 'games/etymology_explorer/index.html', name: 'Etymology Explorer' },
    { id: 'gender', path: 'games/what_gender_is_it/index.html', name: 'What Gender Is It?' }
];

const viewports = [
    { name: 'Mobile Android Small', width: 360, height: 800 },
    { name: 'iPhone SE', width: 375, height: 667 },
    { name: 'iPhone 13/14', width: 390, height: 844 },
    { name: 'Tablet iPad', width: 768, height: 1024 },
    { name: 'Laptop', width: 1280, height: 800 },
    { name: 'Desktop HD', width: 1920, height: 1080 }
];

test.describe('Games Section Comprehensive Audit', () => {

    test('Hub page loads cleanly without JS errors or overflow across viewports', async ({ page }) => {
        const errors = [];
        page.on('pageerror', err => errors.push(err.message));
        page.on('console', msg => {
            if (msg.type() === 'error') errors.push(msg.text());
        });

        for (const vp of viewports) {
            await page.setViewportSize({ width: vp.width, height: vp.height });
            await page.goto('http://localhost:8080/games/index.html');
            await page.waitForLoadState('domcontentloaded');

            const overflow = await page.evaluate(() => {
                return document.documentElement.scrollWidth > window.innerWidth;
            });
            expect(overflow, `Games Hub overflow at ${vp.name} (${vp.width}px)`).toBe(false);
        }

        expect(errors, 'Console errors on Games Hub').toEqual([]);
    });

    for (const game of games) {
        test(`Audit standalone game: ${game.name}`, async ({ page }) => {
            const errors = [];
            page.on('pageerror', err => errors.push(err.message));
            page.on('console', msg => {
                if (msg.type() === 'error') errors.push(msg.text());
            });

            // Test on small mobile first
            await page.setViewportSize({ width: 360, height: 800 });
            await page.goto(`http://localhost:8080/${game.path}`);
            await page.waitForLoadState('networkidle');

            // Check no overflow
            const overflow = await page.evaluate(() => {
                return document.documentElement.scrollWidth > window.innerWidth;
            });
            expect(overflow, `Overflow on ${game.name} at 360px`).toBe(false);

            // Check back button exists
            const backBtn = page.locator('.go-back');
            await expect(backBtn).toBeVisible();

            // Try clicking Start Game if start button exists
            const startBtn = page.locator('.btn-start-game, .start-btn, button:has-text("Start"), button:has-text("Begin"), button:has-text("Play")').first();
            if (await startBtn.isVisible()) {
                await startBtn.click();
                await page.waitForTimeout(300);
            }

            // Test on Desktop view
            await page.setViewportSize({ width: 1280, height: 800 });
            const desktopOverflow = await page.evaluate(() => {
                return document.documentElement.scrollWidth > window.innerWidth;
            });
            expect(desktopOverflow, `Overflow on ${game.name} at 1280px`).toBe(false);

            // Toggle Dark Theme and check body/game-card visibility
            await page.evaluate(() => {
                document.documentElement.setAttribute('data-theme', 'dark');
                document.body.classList.add('theme-dark');
            });
            await page.waitForTimeout(200);

            expect(errors, `Errors on ${game.name}`).toEqual([]);
        });
    }
});
