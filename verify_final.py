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
            print("Navigating to Games Hub...")
            await page.goto("http://localhost:8080/games/index.html")

            # Debug: what cards are visible?
            cards = await page.evaluate("() => Array.from(document.querySelectorAll('.gc-name')).map(el => el.innerText)")
            print(f"Found game cards: {cards}")

            # Test 1: English Opinion Arena
            print("Testing English Opinion Arena...")
            # Use specific selector for the "Play" button in the Opinion Arena card
            # The Opinion Arena card is the 3rd one in the Speaking section
            await page.click(".gc:has-text('Opinion Arena') .gc-play")

            print("Waiting for Setup screen...")
            await page.wait_for_selector(".btn-start-game", timeout=10000)
            await page.click(".btn-start-game")

            # Check if game started
            print("Waiting for Game content...")
            await page.wait_for_selector(".game-prompt", timeout=10000)
            prompt = await page.inner_text(".game-prompt")
            print(f"Opinion Arena prompt: {prompt}")

            if "..." not in prompt and len(prompt) > 5:
                print("SUCCESS: Opinion Arena started correctly in English.")
            else:
                print("FAILURE: Opinion Arena shows fallback/empty content in English.")

            await page.click("text=Back to games")

            # Test 2: French Fluency Flow (Should fallback to English data)
            print("Testing French Fluency Flow (Fallback)...")
            # The language switcher in games/index.html is NOT present.
            # The global COSYS nav might have it, but let's check.
            # Actually, COSYS nav might not have it in the sandbox.

            # Let's try to set language via localStorage and reload
            await page.evaluate("localStorage.setItem('language', 'fr')")
            await page.reload()

            await page.click(".gc:has-text('Fluency Flow') .gc-play")
            await page.wait_for_selector(".btn-start-game", timeout=10000)
            await page.click(".btn-start-game")

            await page.wait_for_selector(".game-prompt", timeout=10000)
            prompt = await page.inner_text(".game-prompt")
            print(f"Fluency Flow prompt: {prompt}")

            if "..." not in prompt and len(prompt) > 5:
                print("SUCCESS: Fluency Flow started correctly in French (via fallback).")
            else:
                print("FAILURE: Fluency Flow shows fallback/empty content in French.")

        except Exception as e:
            print(f"An error occurred: {e}")
            await page.screenshot(path="error.png")
            # Get body content for debugging
            body = await page.evaluate("document.body.innerHTML")
            with open("body_debug.html", "w") as f:
                f.write(body)
        finally:
            await browser.close()
            os.system("kill $(lsof -t -i :8080) 2>/dev/null || true")

if __name__ == "__main__":
    asyncio.run(run_verification())
