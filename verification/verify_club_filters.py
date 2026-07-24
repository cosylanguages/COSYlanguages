from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    # Navigate to Keeping Up with Science Speaking Club page
    page.goto("http://localhost:8080/events/keeping-up-with-science.html")
    page.wait_for_timeout(1000)

    # Scroll down to the past sessions block
    page.locator('#sc-hist').scroll_into_view_if_needed()
    page.wait_for_timeout(500)

    # Click on C1 level filter button (which has sessions)
    page.locator('.filter-btn[data-level="c1"]').click()
    page.wait_for_timeout(1000)

    # Click on A1 level filter button (which has NO sessions)
    page.locator('.filter-btn[data-level="a1"]').click()
    page.wait_for_timeout(1500)

    # Take screenshot of the beautiful empty state card
    page.screenshot(path="verification/screenshots/verification.png")
    page.wait_for_timeout(1000)  # Hold final state for video

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
