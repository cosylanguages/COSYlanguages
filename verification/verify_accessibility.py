from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    page.goto("http://localhost:8080/index.html")
    page.wait_for_timeout(1000)

    # Click accessibility fab
    fab = page.locator("#accessibility-fab")
    fab.click()
    page.wait_for_timeout(1000)

    # Click 'Warm Paper' theme button
    paper_btn = page.locator('button:has-text("Warm Paper")')
    paper_btn.click()
    page.wait_for_timeout(1000)

    # Click 'Dyslexic' font button
    dyslexic_btn = page.locator('button:has-text("Dyslexic")')
    dyslexic_btn.click()
    page.wait_for_timeout(1000)

    # Click '130%' sizing button
    size_btn = page.locator('button:has-text("130%")')
    size_btn.click()
    page.wait_for_timeout(1000)

    # Ensure directories exist
    os.makedirs("verification/screenshots", exist_ok=True)

    # Take screenshot at key moment
    page.screenshot(path="verification/screenshots/verification.png")
    page.wait_for_timeout(1000)  # Hold final state for the video

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Ensure videos folder exists
        os.makedirs("verification/videos", exist_ok=True)
        context = browser.new_context(
            record_video_dir="verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
