from playwright.sync_api import sync_playwright, expect

def verify_deep_linking():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Verify Italian Lesson 3 Grammar Linear (Embedded)
        print("Testing Practice Deep Link...")
        page.goto("http://localhost:8080/practice.html?lang=it&lesson=3&cat=grammar&embed=true")

        # Expect header and footer to be hidden
        expect(page.locator('header')).not_to_be_visible()
        expect(page.locator('footer')).not_to_be_visible()

        # Wait for practice to start automatically
        expect(page.locator('#question-card')).to_be_visible()
        # Verify it's Italian and Grammar (e.g. by checking lesson-info or a badge)
        expect(page.locator('#lesson-info')).to_contain_text("Giorno 3")
        page.screenshot(path="/home/jules/verification/it_grammar_embedded.png")

        # 2. Verify Charades Russian Deep Link (Embedded)
        print("Testing Charades Deep Link...")
        page.goto("http://localhost:8080/events.html?game=charades&lang=ru&lesson=1-2&theme=food_drinks&embed=true")

        # Expect header and footer to be hidden
        expect(page.locator('header')).not_to_be_visible()
        expect(page.locator('footer')).not_to_be_visible()

        # Expect Charades modal to be open and gameplay visible
        expect(page.locator('#charades-modal')).to_be_visible()
        expect(page.locator('#charades-gameplay')).to_be_visible()

        # Check if the word is from Lesson 1-2 (Manual verification of screenshot)
        page.screenshot(path="/home/jules/verification/ru_charades_embedded.png")

        browser.close()

if __name__ == "__main__":
    verify_deep_linking()
