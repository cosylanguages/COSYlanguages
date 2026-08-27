import os
from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Navigate to the main "If You Were" speaking club page
    print("Navigating to parent club page...")
    page.goto("http://localhost:8080/apps/premium-events/clubs/if-you-were/if-you-were.html")
    page.wait_for_timeout(1000)

    # Take screenshot of parent page
    print("Capturing parent page screenshot...")
    page.screenshot(path="/home/jules/project/tests/verification/screenshots/parent_page.png")
    page.wait_for_timeout(500)

    # Click on the first session page link
    print("Navigating to 'If You Were Deaf' session page...")
    page.locator(".life-balance-view").first.click()
    page.wait_for_timeout(1000)

    # Take screenshot of session page
    print("Capturing session page screenshot...")
    page.screenshot(path="/home/jules/project/tests/verification/screenshots/session_page.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/project/tests/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
            print("Verification finished.")
