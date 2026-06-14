import asyncio
from playwright.async_api import async_playwright
import os

async def run_verification():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context()
        page = await context.new_page()

        print("Starting local server...")
        os.system("npx http-server . -p 8080 > server.log 2>&1 &")
        await asyncio.sleep(2)

        try:
            # Monitor console logs
            page.on("console", lambda msg: print(f"BROWSER CONSOLE: {msg.text}"))

            print("Navigating to Games Hub...")
            await page.goto("http://localhost:8080/games/index.html")

            # Test 1: English Opinion Arena
            print("Testing English Opinion Arena...")
            await page.click(".gc:has-text('Opinion Arena') .gc-play")

            print("Waiting for Setup screen...")
            await page.wait_for_selector(".btn-start-game", timeout=20000)
            await page.click(".btn-start-game")

            # Check if game started
            print("Waiting for Game content (with 60s timeout for data loading)...")
            # Increase timeout significantly as data loading is slow in this environment
            await page.wait_for_selector(".game-prompt", timeout=60000)
            prompt = await page.inner_text(".game-prompt")
            print(f"Opinion Arena prompt: {prompt}")

            if "..." not in prompt and len(prompt) > 5:
                print("SUCCESS: Opinion Arena started correctly in English.")
                await page.screenshot(path="success_opinion_en.png")
            else:
                print("FAILURE: Opinion Arena shows fallback/empty content in English.")

        except Exception as e:
            print(f"An error occurred: {e}")
            await page.screenshot(path="error_final.png")
        finally:
            await browser.close()
            os.system("kill $(lsof -t -i :8080) 2>/dev/null || true")

if __name__ == "__main__":
    asyncio.run(run_verification())
