import os
from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Navigate to the club page
    page.goto("http://localhost:8080/events/i-couldnt-help-but-wonder.html")
    page.wait_for_timeout(1000)

    # Click on the first new past session using its href
    page.locator("a[href='sessions/feeling-empty-after-series.html']").click()
    page.wait_for_timeout(1000)

    # Click to toggle the first vocabulary card or scroll down
    page.get_by_role("button", name="Add to Dictionary").first.click()
    page.wait_for_timeout(1000)

    # Click to toggle a round header to collapse/expand
    page.get_by_text("🔵 Round 1 — Column Analysis").click()
    page.wait_for_timeout(1000)

    # Take screenshot of the session page
    page.screenshot(path="verification/screenshots/verification.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    os.makedirs("verification/videos", exist_ok=True)
    os.makedirs("verification/screenshots", exist_ok=True)
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
