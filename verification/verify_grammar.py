import os
from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Navigate to the newly updated word order page
    page.goto("http://localhost:8080/grammar/en/syntax/en-word-order.html")
    page.wait_for_timeout(1000)

    # Scroll down to the table / visual map area
    page.evaluate("window.scrollTo(0, 300)")
    page.wait_for_timeout(1000)

    # Scroll down to the interactive quiz
    page.evaluate("window.scrollTo(0, 1000)")
    page.wait_for_timeout(1000)

    # Click correct option on first quiz question
    # Prompt: Choose the correct order:
    # Option 1: "I drink coffee." (correct)
    btn_correct = page.locator("#q1 .g-quiz-opt").first
    btn_correct.click()
    page.wait_for_timeout(1000)

    # Click incorrect option on second quiz question and then correct option
    # Prompt: Choose the correct order:
    # Option 1: "My mother likes tea." (correct)
    # Option 2: "Likes tea my mother." (wrong)
    btn_wrong = page.locator("#q2 .g-quiz-opt").last
    btn_wrong.click()
    page.wait_for_timeout(1000)

    btn_correct2 = page.locator("#q2 .g-quiz-opt").first
    btn_correct2.click()
    page.wait_for_timeout(1000)

    # Take screenshot at the final state
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
