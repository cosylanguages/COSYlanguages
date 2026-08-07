import { test, expect } from '@playwright/test';

test.describe('Wonder Private Lesson (1-to-1) Mode Verification', () => {
  test('Private lesson step structures should exist and have visual splits', async ({ page }) => {
    // Navigate with mode=private query
    await page.goto('http://localhost:8080/events/sessions/i-couldnt-help-but-wonder/does-inclusive-language-make-us-equal.html?mode=private');

    // Ensure the passcode gate is shown initially
    await expect(page.locator('#gate-passcode-input')).toBeVisible();

    // Type the passcode ICHBWPL18 to unlock
    await page.fill("#gate-passcode-input", "ICHBWPL18");
    await page.click("#gate-passcode-submit");

    // Wait for the locked screen to clear
    await page.waitForSelector('#p-step1');

    // Verify presence of step headers
    await expect(page.locator('#p-step1 .private-step-header')).toContainText('Step 1: Lead-In / Warm-Up');
    await expect(page.locator('#p-step2 .private-step-header')).toContainText('Step 2: Vocabulary Integration');
    await expect(page.locator('#p-step3 .private-step-header')).toContainText('Step 3: Philosophical Stimulus');
    await expect(page.locator('#p-step4 .private-step-header')).toContainText('Step 4: Guided Discussion Sequence');
    await expect(page.locator('#p-step5 .private-step-header')).toContainText('Step 5: Target Language Focus');
    await expect(page.locator('#p-step6 .private-step-header')).toContainText('Step 6: Critical & Speculative Discussion');
    await expect(page.locator('#p-step7 .private-step-header')).toContainText('Step 7: Personal Reflection');
    await expect(page.locator('#p-step8 .private-step-header')).toContainText('Step 8: Final Production / Challenge');

    // Verify Teacher Note Panel presence inside steps
    const firstTeacherGuide = page.locator('#p-step1 .teacher-note-panel');
    await expect(firstTeacherGuide).toContainText('TEACHER GUIDE');
    await expect(firstTeacherGuide).toContainText('Goal: Activate schema');

    // Verify Student content
    await expect(page.locator('#p-step1 .student-content-block h4')).toContainText('Initial Spark');

    // Verify specific lesson contents
    await expect(page.locator('#p-step2 .vocab-word').first()).toContainText('Gender-neutral');
    await expect(page.locator('#p-step5 h4')).toContainText('⚡ Grammatical Precision: Focus Adverbs');
    await expect(page.locator('#p-step8 h4')).toContainText('🎯 90-Second Speech Run: The Language Policy Pitch');

    // Verify Host Utility bar controls
    await expect(page.locator('[data-session-mode="private"] .host-utility-bar')).toBeVisible();
    await expect(page.locator('[data-session-mode="private"] .host-utility-bar .hub-tag')).toContainText('Teacher Utility');
    await expect(page.locator('[data-session-mode="private"] .host-utility-bar .btn-copy-link')).toBeVisible();
    await expect(page.locator('[data-session-mode="private"] .host-utility-bar .unobtrusive-back-link')).toBeVisible();
  });

  test('Shared student link should bypass passcode gate successfully', async ({ page }) => {
    // Navigate with shared=true parameter
    await page.goto('http://localhost:8080/events/sessions/i-couldnt-help-but-wonder/does-inclusive-language-make-us-equal.html?mode=private&shared=true');

    // Passcode gate overlay should NOT be visible
    await expect(page.locator('#gate-passcode-input')).toBeHidden();

    // Content should be fully unlocked and visible instantly for the student
    await expect(page.locator('#p-step1')).toBeVisible();
  });
});
