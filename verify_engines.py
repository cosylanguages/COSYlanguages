import asyncio
from playwright.async_api import async_playwright
import os

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context()
        page = await context.new_page()

        # 1. Check Practice Engine
        print("Checking Practice Engine...")
        await page.goto("http://localhost:8000/practice/index.html")
        await page.wait_for_selector("#cosy-nav")
        # Check if setup section is visible
        is_setup_visible = await page.is_visible("#setup-section")
        print(f"Setup section visible: {is_setup_visible}")

        # Select a language and start
        await page.click(".lang-pill[data-value='en']")
        await page.click("#start-btn")
        await page.wait_for_selector("#practice-section.active")
        print("Practice section activated.")

        # Check if a question is rendered
        question = await page.inner_text("#task-what-to-do")
        print(f"Question rendered: {question}")
        await page.screenshot(path="practice_verification.png")

        # 2. Check Games Engine
        print("\nChecking Games Engine...")
        await page.goto("http://localhost:8000/games/index.html")
        await page.wait_for_selector("#cosy-nav")

        # Check for game cards
        cards_count = await page.locator(".game-card-lobby").count()
        print(f"Found {cards_count} game cards.")

        # Open a game modal (e.g., Action Hero)
        await page.click("text=Action Hero")
        # Since it uses onclick="openGameSheet(...)", we check if modal or sheet appears
        # The loader.js handles this.
        await page.wait_for_timeout(1000)
        await page.screenshot(path="games_verification.png")

        await browser.close()

if __name__ == "__main__":
    # Start a simple server
    import subprocess
    import time
    server = subprocess.Popen(["python3", "-m", "http.server", "8000"])
    time.sleep(2)
    try:
        asyncio.run(verify())
    finally:
        server.terminate()
