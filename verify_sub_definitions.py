
import asyncio
from playwright.async_api import async_playwright
import os

async def verify_definitions():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Absolute path to practice.html
        path = os.path.abspath("practice.html")
        await page.goto(f"file://{path}")

        # Select English
        await page.click('.lang-selection-card[data-value="en"]')

        # Start practice with specific settings to find "park" or "book"
        # We'll just hope it comes up or use a hack to inject it into currentPractice

        await page.evaluate("""() => {
            currentPractice.currentWord = {
                word: "park",
                definitions: [
                    { text: "A public garden.", examples: ["Example 1"] },
                    { text: "To leave a car.", examples: ["Example 2"] }
                ]
            };
            showWordDefinition();
        }""")

        await page.wait_for_selector('#definition-modal', state='visible')
        await page.screenshot(path='/home/jules/verification/sub_definitions.png')

        print("Screenshot of sub-definitions saved.")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_definitions())
