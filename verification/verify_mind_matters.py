import os
from playwright.sync_api import sync_playwright

def run_cuj(page):
    url = "http://localhost:8080/events/sessions/mind-matters/how-to-love-your-work.html"
    print(f"Navigating to: {url}")
    page.goto(url)
    page.wait_for_timeout(1000)

    # Scroll down to Round 2 — Dilemmas / Future
    r2_header = page.locator("#s-r2")
    r2_header.scroll_into_view_if_needed()
    page.wait_for_timeout(1000)

    # Click the header to ensure it's toggled open if it collapsed, but it has class 'open' so it should be open.
    # Let's take a screenshot specifically focused on the #s-r2 container
    r2_header.screenshot(path="/home/jules/verification/screenshots/mind_matters_r2_conditionals.png")
    print("Focused container screenshot captured successfully!")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
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
