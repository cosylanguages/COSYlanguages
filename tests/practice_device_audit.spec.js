const { test, expect } = require('@playwright/test');

const practiceUrls = [
    '/practice/index.html',
    '/practice/cognitive-immersion.html',
    '/practice/types/flashcard/index.html',
    '/practice/types/vocabulary/index.html',
    '/practice/types/grammar/index.html',
    '/practice/types/reading/index.html',
    '/practice/types/listening/index.html',
    '/practice/types/writing/index.html'
];

const viewports = [
    { name: 'Desktop HD', width: 1440, height: 900, isMobile: false },
    { name: 'Laptop Standard', width: 1280, height: 800, isMobile: false },
    { name: 'Tablet iPad Air', width: 820, height: 1180, isMobile: true },
    { name: 'iPhone 14 Pro', width: 393, height: 852, isMobile: true, hasTouch: true },
    { name: 'Android Pixel 7', width: 412, height: 915, isMobile: true, hasTouch: true },
    { name: 'Small Phone 360px', width: 360, height: 740, isMobile: true, hasTouch: true }
];

test.describe('Practice Section Responsive & Functional Audit', () => {
    for (const vp of viewports) {
        for (const urlPath of practiceUrls) {
            test(`[${vp.name}] Audit ${urlPath}`, async ({ page }) => {
                await page.setViewportSize({ width: vp.width, height: vp.height });
                const consoleErrors = [];
                const pageErrors = [];
                const netErrors = [];

                page.on('console', msg => {
                    if (msg.type() === 'error') consoleErrors.push(msg.text());
                });
                page.on('pageerror', err => pageErrors.push(err.message));
                page.on('response', resp => {
                    if (resp.status() >= 400 && !resp.url().includes('favicon')) {
                        netErrors.push(`${resp.status()} ${resp.url()}`);
                    }
                });

                await page.goto(`http://localhost:8080${urlPath}`);
                await page.waitForLoadState('domcontentloaded');
                await page.waitForTimeout(300);

                // Check horizontal overflow
                const overflow = await page.evaluate(() => {
                    const docWidth = document.documentElement.scrollWidth;
                    const winWidth = window.innerWidth;
                    return { docWidth, winWidth, hasOverflow: docWidth > winWidth + 1 };
                });

                expect(overflow.hasOverflow, `Page ${urlPath} on ${vp.name} has horizontal overflow (${overflow.docWidth}px > ${overflow.winWidth}px)`).toBe(false);

                // Check runtime console and page errors
                expect(pageErrors, `Page errors on ${urlPath}: ${pageErrors.join(', ')}`).toEqual([]);

                // Check network response errors
                expect(netErrors, `Network errors on ${urlPath}: ${netErrors.join(', ')}`).toEqual([]);

                // Check body element visibility
                const bodyVisible = await page.isVisible('body');
                expect(bodyVisible).toBe(true);
            });
        }
    }
});
