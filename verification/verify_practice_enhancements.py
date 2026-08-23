from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    page.goto("http://localhost:8080/practice/index.html")
    page.wait_for_timeout(1000)

    # Scroll to Stats Section showing Daily Target
    page.locator("#stats-section").scroll_into_view_if_needed()
    page.wait_for_timeout(500)

    # Scroll to QuickStart section showing SRS Memory Review
    page.locator("#quickstart-section").scroll_into_view_if_needed()
    page.wait_for_timeout(500)

    # Take screenshot of Practice page stats & QuickStart cards
    page.screenshot(path="/home/jules/verification/screenshots/practice_enhancements.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
    os.makedirs("/home/jules/verification/videos", exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
