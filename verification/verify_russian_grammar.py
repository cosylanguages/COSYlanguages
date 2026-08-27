import os
from playwright.sync_api import sync_playwright

def run_cuj_russian(page):
    # Navigate to the newly updated Russian pronouns page
    page.goto("http://localhost:8080/reference-grammar/ru/morphology/ru-pronouns.html")
    page.wait_for_timeout(1000)

    # Scroll down to the table / visual map area
    page.evaluate("window.scrollTo(0, 300)")
    page.wait_for_timeout(1000)

    # Scroll down to the interactive quiz
    page.evaluate("window.scrollTo(0, 1000)")
    page.wait_for_timeout(1000)

    # Click correct option on first quiz question
    # Prompt: How do you say "We" in Russian?
    # Option 1: "Мы" (correct)
    btn_correct = page.locator("#q1 .g-quiz-opt").first
    btn_correct.click()
    page.wait_for_timeout(1000)

    # Click correct option on second quiz question
    # Prompt: Where is "папа" (dad)? ___ дома.
    # Option 1: "Он" (correct)
    btn_correct2 = page.locator("#q2 .g-quiz-opt").first
    btn_correct2.click()
    page.wait_for_timeout(1000)

    # Take screenshot at the final state
    page.screenshot(path="/home/jules/verification/screenshots/verification_russian.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj_russian(page)
        finally:
            context.close()
            browser.close()
