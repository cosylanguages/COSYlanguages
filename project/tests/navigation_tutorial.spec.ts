import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('COSYlanguages Navigation Help & Tour Tutorial', () => {

  test('Homepage Tour Launch and Walkthrough', async ({ page }) => {
    // Navigate to homepage
    await page.goto(`file://${path.resolve('index.html')}`);

    // Verify the Guide button is visible on the page
    const guideBtn = page.locator('#cosy-tour-fab');
    await expect(guideBtn).toBeVisible();
    await expect(guideBtn).toContainText('Guide');

    // Click on Guide to start the tour
    await guideBtn.click();

    // Verify that the tooltip, pointer, and backdrop are active
    const tooltip = page.locator('#cosy-tour-tooltip');
    await expect(tooltip).toBeVisible();
    await expect(tooltip).toContainText('Step 1 of');
    await expect(tooltip).toContainText('Main Navigation');

    const backdrop = page.locator('#cosy-tour-backdrop');
    await expect(backdrop).toBeVisible();

    const pointer = page.locator('#cosy-tour-pointer');
    await expect(pointer).toBeVisible();

    // Click Next → to go to Step 2
    const nextBtn = tooltip.locator('.ctb-btn-next');
    await nextBtn.click();

    // Verify Step 2 is active
    await expect(tooltip).toContainText('Step 2 of');
    await expect(tooltip).toContainText('Start Your Journey');

    // Click Skip to exit the tour
    const skipBtn = tooltip.locator('.ctb-btn-skip');
    await skipBtn.click();

    // Verify everything is dismissed
    await expect(tooltip).not.toBeVisible();
    await expect(backdrop).not.toBeVisible();
    await expect(pointer).not.toBeVisible();
  });

  test('Subpage Navigation Help Modal and Homepage Redirect', async ({ page }) => {
    // Navigate to practice page
    await page.goto(`file://${path.resolve('practice/index.html')}`);

    // Verify Guide button is visible
    const guideBtn = page.locator('#cosy-tour-fab');
    await expect(guideBtn).toBeVisible();

    // Click Guide button to open modal
    await guideBtn.click();

    // Verify modal overlay is displayed
    const helpModal = page.locator('#cosy-nav-help-modal');
    await expect(helpModal).toBeVisible();
    await expect(helpModal).toContainText('COSY Navigation Help & Guide');

    // Verify there's a CTA to go to Homepage Tour
    const startTourLink = helpModal.locator('.btn-primary');
    await expect(startTourLink).toBeVisible();
    await expect(startTourLink).toContainText('Take Interactive Homepage Tour');
  });

});
