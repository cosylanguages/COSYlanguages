import os
import time
from playwright.sync_api import sync_playwright

def run_verification():
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
    os.makedirs("/home/jules/verification/videos", exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        # ─── VIEWPORT 1280px ───
        context_1280 = browser.new_context(
            viewport={"width": 1280, "height": 800},
            record_video_dir="/home/jules/verification/videos"
        )
        page_1280 = context_1280.new_page()

        # 1. Homepage at 1280px
        page_1280.goto("http://localhost:8080/index.html")
        page_1280.wait_for_timeout(1000)
        page_1280.screenshot(path="/home/jules/verification/screenshots/index_1280.png")

        # 2. Interact with calculator on Homepage (1280px)
        # Scroll to calculator section
        page_1280.locator("#calculator").scroll_into_view_if_needed()
        page_1280.wait_for_timeout(1000)

        # Let's click "Français" segmented button
        # The button has data-translate-key="french" or is labeled "Français 🇫🇷"
        french_btn = page_1280.locator("button.segment-btn:has-text('Français')")
        if french_btn.is_visible():
            french_btn.click()
            page_1280.wait_for_timeout(800)

        # Click "Spoken Course"
        spoken_btn = page_1280.locator("button.segment-btn:has-text('Spoken Course')")
        if spoken_btn.is_visible():
            spoken_btn.click()
            page_1280.wait_for_timeout(800)

        # Take screenshot of selected state
        page_1280.screenshot(path="/home/jules/verification/screenshots/index_calc_1280.png")

        # 3. Karaoke Club past sessions at 1280px
        page_1280.goto("http://localhost:8080/events/karaoke-club.html")
        page_1280.wait_for_timeout(1000)
        # Scroll to standalones
        page_1280.locator("h3:has-text('Standalone Song Sessions')").scroll_into_view_if_needed()
        page_1280.wait_for_timeout(1000)
        page_1280.screenshot(path="/home/jules/verification/screenshots/karaoke_1280.png")

        context_1280.close()

        # ─── VIEWPORT 375px ───
        context_375 = browser.new_context(
            viewport={"width": 375, "height": 667},
            record_video_dir="/home/jules/verification/videos"
        )
        page_375 = context_375.new_page()

        # 1. Homepage at 375px
        page_375.goto("http://localhost:8080/index.html")
        page_375.wait_for_timeout(1000)
        page_375.screenshot(path="/home/jules/verification/screenshots/index_375.png")

        # 2. Calculator on Homepage at 375px
        page_375.locator("#calculator").scroll_into_view_if_needed()
        page_375.wait_for_timeout(1000)
        page_375.screenshot(path="/home/jules/verification/screenshots/index_calc_375.png")

        # 3. Karaoke Club past sessions at 375px
        page_375.goto("http://localhost:8080/events/karaoke-club.html")
        page_375.wait_for_timeout(1000)
        # Scroll to standalones
        page_375.locator("h3:has-text('Standalone Song Sessions')").scroll_into_view_if_needed()
        page_375.wait_for_timeout(1000)
        page_375.screenshot(path="/home/jules/verification/screenshots/karaoke_375.png")

        context_375.close()
        browser.close()

if __name__ == "__main__":
    run_verification()
    print("Verification completed successfully!")
