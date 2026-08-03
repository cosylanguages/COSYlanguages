import os
from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Navigate to events hub
    print("Navigating to events index page...")
    page.goto("http://localhost:8080/events/index.html")
    page.wait_for_timeout(1000)

    # Click on "Long Reads" club card
    print("Navigating to Long Reads club index...")
    page.click("a[href='long-reads.html']")
    page.wait_for_timeout(1000)

    # Focus the ledger input and type "dopamine"
    print("Interacting with the Literary Parlor Dialogue Ledger...")
    page.fill("#ledger-input", "dopamine")
    page.wait_for_timeout(500)
    page.click("#ledger-submit-btn")
    page.wait_for_timeout(3000) # Wait for the typewriter response to finish typing

    # Take screenshot of the Literary Parlor response
    print("Capturing Literary Parlor screenshot...")
    page.screenshot(path="/home/jules/verification/screenshots/verification_ledger.png")

    # Click on Session 1 details
    print("Navigating to Session 1 details...")
    page.click("a[href='sessions/long-reads/designed-to-addict.html']")
    page.wait_for_timeout(1000)

    # Capture final screenshot of the session page
    print("Capturing Session 1 screenshot...")
    page.screenshot(path="/home/jules/verification/screenshots/verification.png")
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
            print("Video recorded successfully!")
