from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    # 1. Navigate to Let's Celebrate parent page
    page.goto("http://localhost:8080/events/lets-celebrate.html")
    page.wait_for_timeout(1000)

    # Scroll down to the past sessions block
    page.locator('#lc-hist').scroll_into_view_if_needed()
    page.wait_for_timeout(500)

    # Take screenshot of all 15 celebration past sessions cards (showing split levels)
    page.screenshot(path="verification/screenshots/celebrate_cards_split_all.png")
    page.wait_for_timeout(500)

    # 2. Click on the first card view link (Urban Beekeeping Day Starter A1)
    page.locator('.celebrate-card-view').first.click()
    page.wait_for_timeout(1500)

    # Take screenshot of the session page, including the Available Levels switcher and the Celebration Snapshot Box!
    page.screenshot(path="verification/screenshots/celebrate_session_page.png")
    page.wait_for_timeout(500)

    # 3. Click on the "Elementary (A2)" level switcher button to test interactive navigation
    # It should have a switcher button matching text 'Elementary' or similar. Let's find it.
    level_btn = page.get_by_role("link", name="Elementary (A2)")
    if level_btn.is_visible():
        level_btn.click()
        page.wait_for_timeout(1500)
        # Take a screenshot of the switched A2 page
        page.screenshot(path="verification/screenshots/celebrate_session_switched_a2.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
