import { test, expect } from '@playwright/test';

test.describe('COSYlanguages Accessibility & Image Optimization', () => {

    test('Floating buttons and back to top have accessible ARIA labels', async ({ page }) => {
        await page.goto('http://localhost:8080/index.html');

        const backToTop = page.locator('#back-to-top');
        await expect(backToTop).toHaveAttribute('aria-label', 'Back to Top');

        const tourFab = page.locator('#cosy-tour-fab');
        await expect(tourFab).toHaveAttribute('aria-label', 'Open navigation help guide');
    });

    test('Custom custom element <vim-choice> contains role="tablist", role="tab", and aria-selected', async ({ page }) => {
        await page.goto('http://localhost:8080/apps/premium-events/nights/karaoke/sessions/karaoke-club/challenges/kate-bush-challenge/index.html');

        const tabList = page.locator('.vim-choice-tabs');
        await expect(tabList).toHaveAttribute('role', 'tablist');

        const firstTab = page.locator('.vim-tab-btn').first();
        await expect(firstTab).toHaveAttribute('role', 'tab');
        await expect(firstTab).toHaveAttribute('aria-selected', 'true');

        const secondTab = page.locator('.vim-tab-btn').nth(1);
        await expect(secondTab).toHaveAttribute('aria-selected', 'false');

        // Click second tab and verify aria-selected toggles
        await secondTab.click();
        await expect(secondTab).toHaveAttribute('aria-selected', 'true');
        await expect(firstTab).toHaveAttribute('aria-selected', 'false');
    });

    test('Collapsible blocks update aria-expanded on toggle', async ({ page }) => {
        await page.goto('http://localhost:8080/apps/premium-events/clubs/wonder/sessions/i-couldnt-help-but-wonder/always-watched-in-a-crowd.html');

        const roundHeader = page.locator('.round-block .round-header').first();
        await expect(roundHeader).toHaveAttribute('role', 'button');
        await expect(roundHeader).toHaveAttribute('tabindex', '0');

        const initialExpanded = await roundHeader.getAttribute('aria-expanded');

        // Click to toggle
        await roundHeader.click();
        const toggledExpanded = await roundHeader.getAttribute('aria-expanded');
        expect(toggledExpanded).not.toBe(initialExpanded);
    });

    test('Images on index page contain loading="lazy" and decoding="async"', async ({ page }) => {
        await page.goto('http://localhost:8080/index.html');

        const generalLogo = page.locator('img[alt="General Course logo"]');
        await expect(generalLogo).toHaveAttribute('loading', 'lazy');
        await expect(generalLogo).toHaveAttribute('decoding', 'async');

        const spokenLogo = page.locator('img[alt="Spoken Course logo"]');
        await expect(spokenLogo).toHaveAttribute('loading', 'lazy');
        await expect(spokenLogo).toHaveAttribute('decoding', 'async');
    });
});
