import os
from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Navigate to the My Life With & Without speaking club page
    page.goto("http://localhost:8080/apps/premium-events/clubs/life/my-life-with-without.html")
    page.wait_for_timeout(1000)

    # Scroll to the Past Sessions section
    past_sessions_header = page.locator("h2:has-text('Past Sessions')")
    past_sessions_header.scroll_into_view_if_needed()
    page.wait_for_timeout(1000)

    # Hover over the first card (Obsolete Jobs B1)
    first_card = page.locator(".life-balance-card").first
    first_card.hover()
    page.wait_for_timeout(1000)

    # Click the "B2" filter button to filter sessions
    b2_filter = page.get_by_role("button", name="B2")
    b2_filter.click()
    page.wait_for_timeout(1000)

    # Take a screenshot showing the B2 cards filtered and styled perfectly
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
    page.screenshot(path="/home/jules/verification/screenshots/verification.png")
    page.wait_for_timeout(1000)

    # Click "All Levels" button to restore all cards
    all_filter = page.get_by_role("button", name="All Levels")
    all_filter.click()
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    os.makedirs("/home/jules/verification/videos", exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos",
            viewport={"width": 1280, "height": 800}
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
