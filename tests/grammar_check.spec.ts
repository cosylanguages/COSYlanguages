import { test, expect } from '@playwright/test';
import path from 'path';

const fileUrl = (filename) => 'file://' + path.resolve(filename);

test('Grammar category and theme selection', async ({ page }) => {
    await page.goto(fileUrl('practice.html'));

    // Select Language (Italian)
    await page.click('.lang-selection-card[data-value="it"]');

    // Select Grammar category
    await page.click('.toggle-chip:has(#cat-grammar)');

    // Verify themes
    const themeValues = await page.locator('#practice-theme option').evaluateAll(options => options.map(opt => (opt as HTMLOptionElement).value));

    expect(themeValues).toContain('grammar_plurals');
    expect(themeValues).toContain('grammar_present_simple');
    expect(themeValues).toContain('grammar_gender');
    expect(themeValues).toContain('grammar_past_simple');

    // Select Gender & Articles
    await page.selectOption('#practice-theme', 'grammar_gender');

    // Start
    await page.click('#start-btn');

    // Should see task instruction
    await expect(page.locator('#task-instruction')).toBeVisible();

    // instruction should be for gender & articles
    const instruction = await page.locator('#task-instruction').getAttribute('data-translate-key');
    expect(instruction).toBe('task_gender_articles');
});

test('English grammar hides Future Simple and Gender', async ({ page }) => {
    await page.goto(fileUrl('practice.html'));

    // Select Language (English)
    await page.click('.lang-selection-card[data-value="en"]');

    // Select Grammar category
    await page.click('.toggle-chip:has(#cat-grammar)');

    // Verify themes
    const themeValues = await page.locator('#practice-theme option').evaluateAll(options => options.map(opt => (opt as HTMLOptionElement).value));
    expect(themeValues).not.toContain('grammar_future_simple');
    expect(themeValues).not.toContain('grammar_gender');
});

test('Pronoun practice allows multiple correct answers', async ({ page }) => {
    await page.goto(fileUrl('practice.html'));

    await page.click('.lang-selection-card[data-value="en"]');
    await page.click('.toggle-chip:has(#cat-grammar)');

    // Select Present Simple
    await page.selectOption('#practice-theme', 'grammar_present_simple');

    // Force uncheck via evaluate since the inputs might be hidden for styling
    await page.evaluate(() => {
        ['type-ga', 'type-ws', 'type-cl', 'type-np'].forEach(id => {
            const el = document.getElementById(id) as HTMLInputElement;
            if (el) el.checked = false;
        });
    });

    await page.click('#start-btn');

    let foundPronounTask = false;
    for (let i = 0; i < 10; i++) {
        const text = await page.locator('#word-display').textContent();
        if (text && text.startsWith('____')) {
            foundPronounTask = true;
            // Check choices
            const choices = await page.locator('.choice-btn').evaluateAll(btns => btns.map(b => b.textContent));
            expect(choices.length).toBeGreaterThan(0);

            const instruction = await page.locator('#task-instruction').getAttribute('data-translate-key');
            expect(instruction).toBe('task_multiple_choice');

            break;
        }
        await page.click('#next-btn');
    }
    expect(foundPronounTask).toBe(true);
});

test('Plural tasks have distractors in MC mode', async ({ page }) => {
    await page.goto(fileUrl('practice.html'));
    await page.click('.lang-selection-card[data-value="en"]');
    await page.click('.toggle-chip:has(#cat-grammar)');

    await page.selectOption('#practice-theme', 'grammar_plurals');

    await page.evaluate(() => {
        const mc = document.getElementById('type-mc') as HTMLInputElement;
        if (mc) mc.checked = true;
        ['type-cl', 'type-np'].forEach(id => {
            const el = document.getElementById(id) as HTMLInputElement;
            if (el) el.checked = false;
        });
    });

    await page.click('#start-btn');

    const choices = await page.locator('.choice-btn').count();
    expect(choices).toBeGreaterThan(1);
});
