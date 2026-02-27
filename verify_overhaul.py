from playwright.sync_api import sync_playwright, expect
import os

def verify_practice_overhaul():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Load practice page
        page.goto(f"file://{os.path.abspath('practice.html')}")

        # 2. Check setup section
        # Categories
        expect(page.locator("#cat-vocab")).to_be_visible()
        expect(page.locator("#cat-grammar")).to_be_visible()
        # Task types (Gender & Articles)
        expect(page.locator("#type-ga")).to_be_visible()

        # 3. Italian Lesson 1 - Vocabulary only
        page.select_option('#practice-language', 'it')
        page.fill('#lesson-range', '1')
        page.uncheck('#cat-grammar')
        page.check('#cat-vocab')

        page.screenshot(path="setup_it_vocab.png")

        page.click('#start-btn')

        # Verify first word
        expect(page.locator("#word-display")).not_to_have_text("")
        page.screenshot(path="practice_it_start.png")

        # 4. Back to menu (reload)
        page.goto(f"file://{os.path.abspath('practice.html')}")

        # 5. Russian Lesson 1 - Grammar only (Gender)
        page.select_option('#practice-language', 'ru')
        page.fill('#lesson-range', '1')
        page.uncheck('#cat-vocab')
        page.check('#cat-grammar')
        # Ensure Gender & Articles is checked
        page.check('#type-ga')

        page.click('#start-btn')

        # Since it's random, we might need to skip words until we find a gender task
        # Let's take a screenshot of whatever it is
        page.screenshot(path="practice_ru_grammar_start.png")

        browser.close()

if __name__ == "__main__":
    verify_practice_overhaul()
