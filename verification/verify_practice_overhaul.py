import asyncio
from playwright.async_api import async_playwright
import os

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Open practice.html
        file_path = "file://" + os.path.abspath("practice.html")
        await page.goto(file_path)
        await page.wait_for_timeout(1000)

        # 1. Take screenshot of setup page
        await page.screenshot(path="verification/practice_setup_new.png")
        print("Captured setup screenshot.")

        # 2. Click Grammar and check colors
        await page.click("label:has(#cat-grammar)")
        await page.wait_for_timeout(500)
        await page.screenshot(path="verification/practice_setup_grammar.png")
        print("Captured grammar setup screenshot.")

        # 3. Click Speaking and check colors
        await page.click("label:has(#cat-speaking)")
        await page.wait_for_timeout(500)
        await page.screenshot(path="verification/practice_setup_speaking.png")
        print("Captured speaking setup screenshot.")

        # 4. Start a practice session (Vocab) and check colors
        await page.click("label:has(#cat-vocab)")
        await page.click("#start-btn")
        await page.wait_for_timeout(1000)
        await page.screenshot(path="verification/practice_session_vocab.png")
        print("Captured vocab session screenshot.")

        await browser.close()

if __name__ == "__main__":
    os.makedirs("verification", exist_ok=True)
    asyncio.run(verify())
