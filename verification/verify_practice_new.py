import os
import time
from playwright.sync_api import sync_playwright

def run_verification():
    os.makedirs("verification/screenshots", exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 800})
        page = context.new_page()

        # Load Practice page
        page.goto("http://localhost:8080/practice/index.html")
        page.wait_for_timeout(1000)
        page.screenshot(path="verification/screenshots/practice_setup.png")

        # Click the "Français Vocab" quick start button
        french_vocab_qs = page.locator(".qs-card:has-text('Français Vocab')")
        if french_vocab_qs.is_visible():
            print("Clicking French Vocab Quick Start...")
            french_vocab_qs.click()
            page.wait_for_timeout(1000) # wait for smooth transition opacity animation
            page.screenshot(path="verification/screenshots/practice_active.png")

            # Let's perform a choice select or check action
            # The scramble/choice options are dynamic, let's find the first visible option button and click it
            scramble_item = page.locator(".word-scramble-choice, button.btn-outline, .scramble-choice-btn, [role='button']").first
            if scramble_item.is_visible():
                print("Clicking a practice item option...")
                scramble_item.click()
                page.wait_for_timeout(500)
                page.screenshot(path="verification/screenshots/practice_selected.png")

        context.close()
        browser.close()

if __name__ == "__main__":
    run_verification()
    print("Practice Verification completed successfully!")
