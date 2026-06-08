import { test, expect } from '@playwright/test';

test.describe('Navigation Engine Verification', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:8080/index.html');
        await page.evaluate(() => localStorage.clear());
    });

    test('Free Mode Navigation & Localization (BA)', async ({ page }) => {
        await page.evaluate(async () => {
            if (window.setLanguage) await window.setLanguage('ba');
            document.documentElement.setAttribute('lang', 'ba');
            COSY.refresh();
        });

        const nav = page.locator('#cosy-nav');
        await expect(nav).toBeVisible();
        await expect(nav).toContainText('Баш бит'); // Home
        await expect(nav).toContainText('Практика'); // Practice

        // Check context hook
        await page.evaluate(() => {
            COSY.setNavContext('<button id="test-ctx">Context Button</button>');
        });
        await expect(page.locator('#test-ctx')).toBeVisible();
    });

    test('Student Mode Navigation & Context Hook', async ({ page }) => {
        await page.goto('http://localhost:8080/portal/index.html');
        await page.evaluate(() => {
            localStorage.setItem('cosy_user_lang', 'en');
        });
        await page.locator('#mp-gateway-code').fill('COSY-DEMO');
        await page.getByRole('button', { name: /Unlock/i }).click();

        // Wait for engine to apply student nav
        await expect(page.locator('body')).toHaveClass(/mode-student/);

        const nav = page.locator('#cosy-nav');
        await expect(nav.locator('#cosy-nav-context')).toBeAttached();

        // Verify localization prefixing fix
        // In student mode, it should find 'practice' even if template uses 'nav.practice' or 'practice'
        // Let's force BA for student
        await page.evaluate(async () => {
            if (window.setLanguage) await window.setLanguage('ba');
            document.documentElement.setAttribute('lang', 'ba');
            COSY.refresh();
        });
        // Practice in Student Nav uses t('practice') now in my fix
        await expect(nav).toContainText('Практика');
    });

    test('Teacher Mode Navigation & Context Hook', async ({ page }) => {
        await page.goto('http://localhost:8080/portal/index.html');
        await page.locator('#mp-gateway-code').fill('TEACH-DEMO');
        await page.getByRole('button', { name: /Unlock/i }).click();

        await expect(page.locator('body')).toHaveClass(/mode-teacher/);
        const nav = page.locator('#cosy-nav');
        await expect(nav.locator('#cosy-nav-context')).toBeAttached();
    });
});
