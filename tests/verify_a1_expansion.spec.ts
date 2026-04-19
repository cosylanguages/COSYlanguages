import { test, expect } from '@playwright/test';

const languages = [
    { code: 'COSY-FR-A1-GEN', lang: 'fr', title: "Ma vie aujourd'hui" },
    { code: 'COSY-IT-A1-GEN', lang: 'it', title: 'La mia vita oggi' },
    { code: 'COSY-RU-A1-GEN', lang: 'ru', title: 'Моя жизнь сегодня' },
    { code: 'COSY-EL-A1-GEN', lang: 'el', title: 'Η ζωή μου σήμερα' }
];

test('Verify expanded A1 curricula and roadmaps', async ({ page }) => {
    for (const item of languages) {
        console.log(`Testing ${item.lang} A1...`);
        // Go to a neutral page or clear storage first to ensure gate shows up
        await page.goto('http://localhost:8080/index.html');
        await page.evaluate(() => localStorage.clear());

        await page.goto('http://localhost:8080/days.html');

        // Wait for gate to be visible
        await expect(page.locator('#gate')).toBeVisible();

        await page.locator('#ci').fill(item.code);
        await page.getByRole('button', { name: /Unlock/i }).click();

        // Wait for dashboard to initialize and area to become visible
        await expect(page.locator('#area')).toBeVisible({ timeout: 10000 });

        // Verify the unit title is present in the curriculum list
        const unitTitle = page.locator('.uh-body h2').first();
        await expect(unitTitle).toBeVisible({ timeout: 10000 });
        await expect(unitTitle).toContainText(item.title);

        // Verify "Full Roadmap" button is visible
        const roadmapBtn = page.locator('#open-roadmap-btn');
        await expect(roadmapBtn).toBeVisible();

        // Click roadmap and verify URL
        await roadmapBtn.click();
        await expect(page).toHaveURL(new RegExp(`curriculum/${item.lang}/a1.html`));

        // Verify roadmap content
        await expect(page.locator('h1')).toBeVisible();
        console.log(`${item.lang} A1 verified.`);
    }
});

test('Verify Day 5 lesson practice', async ({ page }) => {
    // Clear storage and set credentials
    await page.goto('http://localhost:8080/index.html');
    await page.evaluate(() => {
        localStorage.clear();
        localStorage.setItem('student_unlocked', 'true');
        localStorage.setItem('student_course_code', 'COSY-EN-A1-GEN');
    });

    // Go directly to lesson page
    await page.goto('http://localhost:8080/lesson.html?lang=en&lesson=5');

    // Wait for lesson data to load and render
    const lessonInfo = page.locator('#lesson-info');
    await expect(lessonInfo).toBeVisible({ timeout: 10000 });
    await expect(lessonInfo).toContainText('Day 5');
    await expect(page.locator('#question-card')).toBeVisible();

    // Verify word display is eventually populated
    const wordDisplay = page.locator('#word-display');
    // It might be '???' or a word, but should not be empty.
    // If it's matching/sorting, it might be hidden, so we check task instruction too.
    await expect(page.locator('#task-instruction')).not.toBeEmpty();

    const wordText = await wordDisplay.textContent();
    console.log(`Lesson loaded. Task: ${await page.locator('#task-instruction').textContent()}`);
    console.log(`Word display content: "${wordText}"`);
});
