
import { test, expect } from "@playwright/test";

const pagesToTest = [
  "index.html",
  "courses/index.html",
  "about/index.html",
  "practice/index.html",
  "blog/index.html",
  "languages/en/index.html",
  "languages/en.html",
  "404.html"
];

for (const relPath of pagesToTest) {
  test(`Footer rendering at 375px and 1280px: ${relPath}`, async ({ page }) => {
    const fileUrl = "file://" + process.cwd() + "/" + relPath;

    // 375px Mobile Viewport
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(fileUrl);
    const footerMobile = page.locator("footer");
    await expect(footerMobile).toBeVisible();
    await expect(page.locator("footer .footer-inner")).toBeVisible();

    // Check footer columns exist
    const colsMobile = page.locator("footer .footer-links-col");
    await expect(colsMobile).toHaveCount(4);

    // 1280px Desktop Viewport
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto(fileUrl);
    const footerDesktop = page.locator("footer");
    await expect(footerDesktop).toBeVisible();
    await expect(page.locator("footer .footer-inner")).toBeVisible();
  });
}
