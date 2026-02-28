import asyncio
from playwright.async_api import async_playwright
import os

async def verify_charades():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Go to events page
        await page.goto(f"file://{os.getcwd()}/events.html")

        # Click "Show Games"
        await page.click("button#toggle-games-btn")
        await page.wait_for_selector("#game-nights-topics", state="visible")

        # Click "Play Charades"
        await page.click("button#open-charades-btn")
        await page.wait_for_selector("#charades-modal", state="visible")
        print("Charades modal opened.")

        # Select Russian and Theme
        await page.select_option("#charades-lang", "ru")
        await page.select_option("#charades-theme", "food_drinks")
        await page.fill("#charades-lessons", "1")

        # Start game
        await page.click("#start-charades-game-btn")
        await page.wait_for_selector("#charades-gameplay", state="visible")
        print("Charades game started.")

        # Verify word and emoji are displayed
        word = await page.inner_text("#charades-word")
        emoji = await page.inner_text("#charades-emoji")
        print(f"Charade: {word} {emoji}")
        assert word != ""
        assert emoji != ""

        # Take screenshot
        await page.screenshot(path="verification/charades_gameplay.png")

        # Click Next
        await page.click("#charades-next-btn")
        new_word = await page.inner_text("#charades-word")
        print(f"Next Charade: {new_word}")

        # Close game
        await page.click("#charades-stop-btn")
        await page.wait_for_selector("#charades-setup", state="visible")

        await page.click("#close-charades-btn")
        await page.wait_for_selector("#charades-modal", state="hidden")
        print("Charades modal closed.")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_charades())
