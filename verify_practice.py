from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': 1280, 'height': 1200})
        file_path = "file://" + os.path.abspath("practice.html")
        page.goto(file_path)

        # Take screenshot of setup section
        page.screenshot(path="practice_setup_full.png", full_page=True)

        # Start practice with default settings (should include all categories and types)
        # But wait, default checkboxes might not be set in HTML.
        # Let's check them.
        page.check("#cat-vocab")
        page.check("#cat-grammar")
        page.check("#type-mc")
        page.check("#type-ls")
        page.check("#type-sc")
        page.check("#type-op")
        page.check("#type-cl")
        page.check("#type-tf")
        page.check("#type-ga")

        page.click("#start-btn")

        # Wait for practice to start
        page.wait_for_selector("#practice-section", state="visible")

        # Take screenshot of first question
        page.screenshot(path="practice_question_full.png", full_page=True)

        browser.close()

if __name__ == "__main__":
    run()
