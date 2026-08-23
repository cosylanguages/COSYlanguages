import { test, expect } from '@playwright/test';

test.describe('Keeping Up with Science - Phase 2 Mode & Passcode Verification', () => {
  test('KUS Hub page should load with the new 3-button mode access grids', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/clubs/kus/keeping-up-with-science.html');

    // Check if science cards exist
    const cards = page.locator('.science-card');
    await expect(cards).not.toHaveCount(0);

    // Verify each card contains a 3-button mode-grid
    const firstCardGrid = cards.first().locator('.wonder-modes-grid');
    await expect(firstCardGrid).toBeVisible();

    const bigBtn = firstCardGrid.locator('.btn-big');
    const miniBtn = firstCardGrid.locator('.btn-mini');
    const privateBtn = firstCardGrid.locator('.btn-private');

    await expect(bigBtn).toBeVisible();
    await expect(miniBtn).toBeVisible();
    await expect(privateBtn).toBeVisible();
  });

  test('KUS Session page under protected mode should display the KUS-themed lock screen', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/clubs/kus/sessions/keeping-up-with-science/ai-and-the-brain-intermediate.html?mode=mini');

    // The lock overlay should be visible
    const overlay = page.locator('#wonder-passcode-gate');
    await expect(overlay).toBeVisible();

    // Check if it has the KUS-specific modal class
    const card = overlay.locator('.lock-modal-card.kus-modal');
    await expect(card).toBeVisible();

    // Confirm title matches localized/mode values
    const title = card.locator('.lock-modal-title');
    await expect(title).toHaveText('👥 MINI GROUP');
  });

  test('KUS Session with incorrect passcode should show error, and correct passcode should unlock successfully', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/clubs/kus/sessions/keeping-up-with-science/ai-and-the-brain-intermediate.html?mode=mini');

    const input = page.locator('#gate-passcode-input');
    const submitBtn = page.locator('#gate-passcode-submit');
    const errorMsg = page.locator('#gate-error-message');

    // Try wrong passcode
    await input.fill('WRONG_CODE');
    await submitBtn.click();
    await expect(errorMsg).toBeVisible();

    // Try correct passcode (Specimen 1 Mini Group = KUSMG01)
    await input.fill('KUSMG01');
    await submitBtn.click();

    // Modal should disappear and page becomes unlocked
    await expect(page.locator('#wonder-passcode-gate')).not.toBeVisible();
  });

  test('KUS Session with shared=true student link should bypass passcode gate', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/clubs/kus/sessions/keeping-up-with-science/ai-and-the-brain-intermediate.html?mode=mini&shared=true');

    // Lock overlay should NOT be visible
    const overlay = page.locator('#wonder-passcode-gate');
    await expect(overlay).not.toBeVisible();

    // Host utility bar should be visible on the page
    const hostBar = page.locator('#kus-dynamic-host-bar');
    await expect(hostBar).toBeVisible();
  });

  test('KUS Session page should follow the 12-point vertical hierarchy layout redesign', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/clubs/kus/sessions/keeping-up-with-science/ai-and-the-brain-intermediate.html?mode=private&shared=true');

    // 1. Session Information Data Sheet should be visible
    const infoBox = page.locator('.science-session-info-box');
    await expect(infoBox).toBeVisible();
    await expect(infoBox.locator('.info-box-header')).toContainText('SPECIMEN SCIENTIFIC DATA SHEET');

    // 2. Three Format Switcher buttons should be visible
    const formatSwitcher = page.locator('#kus-dynamic-switcher');
    await expect(formatSwitcher).toBeVisible();
    await expect(formatSwitcher.locator('.btn-big')).toBeVisible();
    await expect(formatSwitcher.locator('.btn-mini')).toBeVisible();
    await expect(formatSwitcher.locator('.btn-private')).toBeVisible();

    // 3. Primary Source Artifact card should be visible
    const sourceCard = page.locator('.science-source-card');
    await expect(sourceCard).toBeVisible();
    await expect(sourceCard.locator('.source-card-header')).toContainText('PRIMARY SCIENTIFIC SOURCE ARTIFACT');

    // 4. Digest Abstract summary should be visible
    const digest = page.locator('.science-digest-summary');
    await expect(digest).toBeVisible();
    await expect(digest.locator('.digest-header')).toContainText('SCIENTIFIC COMPREHENSION ABSTRACT');

    // 5. Go Deeper section with related recommendations should exist
    const goDeeper = page.locator('#go-deeper');
    await expect(goDeeper).toBeVisible();
    await expect(goDeeper.locator('.section-title')).toContainText('Go Deeper');
    await expect(goDeeper.locator('.science-card')).not.toHaveCount(0);
  });

  test('KUS Session page under unlocked Mini Group mode should dynamically compile and present all 6 Units', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/clubs/kus/sessions/keeping-up-with-science/ai-and-the-brain-intermediate.html?mode=mini&shared=true');

    // Mini Group Speaking Session title should be visible
    const pageTitle = page.locator('#structure .section-title');
    await expect(pageTitle).toHaveText('👥 Mini Group Speaking Session');

    // Verify presence of all 6 Units with their customized headings
    const u1 = page.locator('#m-unit1');
    const u2 = page.locator('#m-unit2');
    const u3 = page.locator('#m-unit3');
    const u4 = page.locator('#m-unit4');
    const u5 = page.locator('#m-unit5');
    const u6 = page.locator('#m-unit6');

    await expect(u1).toBeVisible();
    await expect(u2).toBeVisible();
    await expect(u3).toBeVisible();
    await expect(u4).toBeVisible();
    await expect(u5).toBeVisible();
    await expect(u6).toBeVisible();

    // Check customized titles
    await expect(u1.locator('.round-header')).toContainText('Unit 1 - Enter the Topic');
    await expect(u2.locator('.round-header')).toContainText('Unit 2 - Understand the Findings');
    await expect(u3.locator('.round-header')).toContainText('Unit 3 - Explore the Science');
    await expect(u4.locator('.round-header')).toContainText('Unit 4 - Evidence + Evaluation');
    await expect(u5.locator('.round-header')).toContainText('Unit 5 - Why Does It Matter?');
    await expect(u6.locator('.round-header')).toContainText('Unit 6 - Future Projections');

    // Check if vocabulary is recycled under Unit 1
    const vocabGrid = u1.locator('.vocab-grid-10');
    await expect(vocabGrid).toBeVisible();
    await expect(vocabGrid.locator('.vocab-card')).toHaveCount(10);
  });

  test('KUS Session page under unlocked Private Lesson mode should dynamically compile and present all 10 Steps with Teacher Notes', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/clubs/kus/sessions/keeping-up-with-science/ai-and-the-brain-intermediate.html?mode=private&shared=true');

    // Private Lesson Speaking Session title should be visible
    const pageTitle = page.locator('#structure .section-title');
    await expect(pageTitle).toHaveText('🎓 Private Lesson Speaking Session');

    // Verify presence of all 10 Steps
    for (let i = 1; i <= 10; i++) {
      const step = page.locator(`#p-step${i}`);
      await expect(step).toBeVisible();
    }

    // Verify first and last step headers
    await expect(page.locator('#p-step1 .round-header')).toContainText('Step 1 - Lead-In / Warm-Up');
    await expect(page.locator('#p-step10 .round-header')).toContainText('Step 10 - Independent Final Production');

    // Verify presence of teacher manual guidance chips inside steps
    const teacherNotes = page.locator('#p-step1 .teacher-manual-chip');
    await expect(teacherNotes).toBeVisible();
    await expect(teacherNotes).toContainText('Teacher Guidance:');
  });
});
