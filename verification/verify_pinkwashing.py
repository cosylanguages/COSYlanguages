import os
from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Navigate to the Pinkwashing page
    page.goto("http://localhost:8080/events/sessions/mind-matters/pinkwashing-upper-intermediate.html")
    page.wait_for_timeout(1000)

    # Scroll down to subheader or profile box
    profile_box = page.locator(".mind-profile-box")
    profile_box.scroll_into_view_if_needed()
    page.wait_for_timeout(500)

    # Hover over the first vocabulary card
    first_vocab = page.locator(".vocab-card").first
    first_vocab.hover()
    page.wait_for_timeout(500)

    # Take a screenshot showing the beautiful styled elements
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
    page.screenshot(path="/home/jules/verification/screenshots/verification_pinkwashing.png")
    page.wait_for_timeout(500)

    # Scroll down to Round 1 and Round 2
    r1_section = page.locator("#s-r1")
    r1_section.scroll_into_view_if_needed()
    page.wait_for_timeout(500)

    # Take a screenshot showing Round 1 structure
    page.screenshot(path="/home/jules/verification/screenshots/verification_pinkwashing_r1.png")
    page.wait_for_timeout(500)

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
