const { test, expect } = require('@playwright/test');

test.describe('Practice Monolingual & Symbolic Verification', () => {
    test('French Practice session is fully monolingual and symbolic', async ({ page }) => {
        // Go to practice hub with French parameters
        await page.goto('http://localhost:8080/practice/index.html?lang=fr&level=starter&cat=vocab&theme=all', { waitUntil: 'networkidle' });

        // Wait for session to start automatically
        const practiceSection = page.locator('#practice-section');
        await expect(practiceSection).toBeVisible({ timeout: 5000 });

        // Check first 5 words of the session
        for (let i = 0; i < 5; i++) {
            const peQuestion = page.locator('.pe-question');
            await expect(peQuestion).toBeVisible();

            const questionText = await peQuestion.textContent();
            console.log(`Word ${i + 1} Question: "${questionText}"`);

            // Verify the question does NOT contain English question strings
            const forbiddenEnglish = [
                'what does',
                'mean?',
                'means',
                'choose the correct',
                'arrange the words',
                'type the word',
                'listen and select'
            ];

            for (const word of forbiddenEnglish) {
                expect(questionText.toLowerCase()).not.toContain(word);
            }

            // Verify that the question uses symbolic representations
            const hasSymbol =
                questionText.includes('=') ||
                questionText.includes('≈') ||
                questionText.includes('≠') ||
                questionText.includes('🧩') ||
                questionText.includes('🔊') ||
                questionText.includes('❓');

            expect(hasSymbol).toBeTruthy();

            // Verify task type label is symbolic/short
            const taskTypeLabel = await page.locator('.pe-task-type').textContent();
            console.log(`Word ${i + 1} Task Type: "${taskTypeLabel}"`);

            // Verify no target word is revealed on typing tasks
            if (taskTypeLabel.includes('Type') || taskTypeLabel.includes('Listen')) {
                const helperContainer = page.locator('#pe-body-content');
                const helperText = await helperContainer.innerText();
                // If it's typing, the visual card helper displays "???" instead of the target word
                if (helperText.includes('✏️') || helperText.includes('🔊')) {
                    if (!helperText.includes('grand-mère')) {
                        expect(helperText).not.toContain('mère');
                    }
                    if (!helperText.includes('grand-père')) {
                        expect(helperText).not.toContain('père');
                    }
                    expect(helperText).toContain('???');
                }
            }

            // Move to the next question by either answering or skipping
            // To be robust, let's select an option if MC, otherwise trigger next/skip
            const mcOpts = page.locator('.mc-opt:not([disabled])');
            const tfBtns = page.locator('.tf-btn:not([disabled])');
            const checkBtn = page.locator('.type-wrap button:not([disabled])');
            const nextBtn = page.locator('#pe-next');

            if (await mcOpts.count() > 0 && await mcOpts.first().isVisible()) {
                await mcOpts.first().click();
                await page.waitForTimeout(1000); // Wait for transition
            } else if (await tfBtns.count() > 0 && await tfBtns.first().isVisible()) {
                await tfBtns.first().click();
                await page.waitForTimeout(1000);
            } else if (await checkBtn.count() > 0 && await checkBtn.first().isVisible()) {
                await checkBtn.first().click();
                await page.waitForTimeout(1000);
            } else {
                // Skip/Next if any other type
                if (await nextBtn.isVisible()) {
                    await nextBtn.click();
                    await page.waitForTimeout(1000);
                }
            }
        }
    });
});
