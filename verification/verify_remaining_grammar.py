import os
from playwright.sync_api import sync_playwright

def run_cuj_possessives(page):
    # Navigate to the newly updated possessives page
    page.goto("http://localhost:8080/grammar/en/morphology/en-possessives.html")
    page.wait_for_timeout(1000)

    # Scroll down to the table / visual map area
    page.evaluate("window.scrollTo(0, 300)")
    page.wait_for_timeout(1000)

    # Scroll down to the interactive quiz
    page.evaluate("window.scrollTo(0, 1000)")
    page.wait_for_timeout(1000)

    # Click correct option on first quiz question
    # Prompt: I have a cat. ___ name is Luna.
    # Option 1: "its" (correct)
    btn_correct = page.locator("#q1 .g-quiz-opt").first
    btn_correct.click()
    page.wait_for_timeout(1000)

    # Click correct option on second quiz question
    # Prompt: This is ___ car. (I own it)
    # Option 1: "my" (correct)
    btn_correct2 = page.locator("#q2 .g-quiz-opt").first
    btn_correct2.click()
    page.wait_for_timeout(1000)

    # Take screenshot at the final state
    page.screenshot(path="/home/jules/verification/screenshots/verification_possessives.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj_possessives(page)
        finally:
            context.close()
            browser.close()
