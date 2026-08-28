from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Navigate to the new Mind Matters hub page
    page.goto("http://localhost:8080/apps/premium-events/clubs/mind/mind-matters.html")
    page.wait_for_timeout(500)

    # Click on the B2 level filter button
    b2_button = page.locator('.club-filters-level .filter-btn[data-level="b2"]')
    b2_button.click()
    page.wait_for_timeout(500)

    # Click on the C1 level filter button
    c1_button = page.locator('.club-filters-level .filter-btn[data-level="c1"]')
    c1_button.click()
    page.wait_for_timeout(500)

    # Click on the "All Levels" filter button
    all_button = page.locator('.club-filters-level .filter-btn[data-level="all"]')
    all_button.click()
    page.wait_for_timeout(500)

    # Take screenshot at the end of the user journey
    page.screenshot(path="project/tests/verification/screenshots/verification_mind_matters.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="project/tests/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
