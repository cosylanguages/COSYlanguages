import asyncio
from playwright.async_api import async_playwright

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1280, "height": 800})

        print("Navigating to http://localhost:8080/practice/")
        await page.goto("http://localhost:8080/practice/")
        await page.wait_for_timeout(1000)

        # Test export function existence
        has_export = await page.evaluate("typeof window.cosyPracticeEngine.exportAnkiCSV === 'function'")
        print("exportAnkiCSV exists:", has_export)
        assert has_export, "exportAnkiCSV function should exist"

        # Test import function existence
        has_import = await page.evaluate("typeof window.cosyPractice.importAnkiCSV === 'function'")
        print("importAnkiCSV exists:", has_import)
        assert has_import, "importAnkiCSV function should exist"

        # Take screenshot of Anki Deck Management bar
        await page.screenshot(path="/home/jules/verification/screenshots/anki_management_bar.png")
        print("Saved screenshot /home/jules/verification/screenshots/anki_management_bar.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
