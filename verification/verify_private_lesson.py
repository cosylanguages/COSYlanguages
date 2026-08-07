from playwright.sync_api import sync_playwright
import os

def run_private_lesson_verification(page):
    # Navigate to the session page in private mode
    page.goto("http://localhost:8080/events/sessions/i-couldnt-help-but-wonder/does-inclusive-language-make-us-equal.html?mode=private")
    page.wait_for_timeout(1000)

    # Verify we are blocked by the passcode gate
    print("Passcode gate should be visible...")
    page.wait_for_selector("#gate-passcode-input")
    page.wait_for_timeout(500)

    # Type the correct passcode: ICHBWPL18
    print("Entering passcode ICHBWPL18...")
    page.fill("#gate-passcode-input", "ICHBWPL18")
    page.wait_for_timeout(500)

    # Click the enter button
    page.click("#gate-passcode-submit")
    page.wait_for_timeout(1000)

    # Ensure the passcode gate is removed and private lesson step is visible
    print("Verifying page is unlocked...")
    page.wait_for_selector("#p-step1")
    page.wait_for_timeout(500)

    # Scroll down to Step 1 & 2
    page.locator("#p-step1").scroll_into_view_if_needed()
    page.wait_for_timeout(1000)

    # Scroll down to Step 5 (Grammar task)
    page.locator("#p-step5").scroll_into_view_if_needed()
    page.wait_for_timeout(1000)

    # Scroll to Step 8 (Final production task)
    page.locator("#p-step8").scroll_into_view_if_needed()
    page.wait_for_timeout(1000)

    # Take a beautiful screenshot of the final production challenge
    screenshot_path = "verification/screenshots/private_lesson_unlocked.png"
    page.screenshot(path=screenshot_path, full_page=False)
    print(f"Screenshot successfully saved to {screenshot_path}")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Create context recording video
        context = browser.new_context(
            record_video_dir="verification/videos"
        )
        page = context.new_page()
        try:
            run_private_lesson_verification(page)
        finally:
            context.close()
            browser.close()
