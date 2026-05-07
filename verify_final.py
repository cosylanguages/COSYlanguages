
import asyncio
from playwright.async_api import async_playwright
import os

async def verify_final():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # 1. Check Practice Hub
        print("Checking Practice Hub...")
        await page.goto("http://localhost:8081/practice/index.html")
        await page.wait_for_load_state("networkidle")

        # Check if setup is visible
        is_setup_visible = await page.is_visible("#practice-setup")
        print(f"Practice setup visible: {is_setup_visible}")

        # Check if task types are present
        task_types = await page.query_selector_all(".task-type-toggle")
        print(f"Task types found: {len(task_types)}")
        for tt in task_types:
            name = await tt.inner_text()
            print(f" - {name}")

        # Check interactivity: toggle a task
        if task_types:
            await task_types[0].click()
            is_active = await task_types[0].evaluate("el => el.classList.contains('active')")
            print(f"First task type toggled active: {is_active}")

        # 2. Check Games Hub - Bingo Modal
        print("\nChecking Games Hub - Bingo Modal...")
        await page.goto("http://localhost:8081/games/index.html")
        await page.wait_for_load_state("networkidle")

        # Open Lucky Numbers (Bingo)
        bingo_card = page.locator(".game-card-lobby", has_text="Lucky Numbers")
        await bingo_card.locator("button", has_text="Play solo").click()
        await page.wait_for_timeout(1000)

        # Since we might have auto-launched, check if setup or gameplay is visible
        # Actually mobile.js might open the setup sheet instead of the modal if window width is small
        # But playwright default is 1280x720, so it should open launchGame directly.

        is_setup = await page.is_visible("#bingo-setup")
        is_caller = await page.is_visible("#bingo-caller-area")
        print(f"Bingo setup visible: {is_setup}")
        print(f"Bingo caller visible: {is_caller}")

        if is_setup:
            levels = await page.locator("#bingo-level option").all_inner_texts()
            print(f"Bingo levels found: {levels}")

        await page.screenshot(path="verification_final_bingo.png")

        # 3. Check Practice Hub Start
        print("\nTesting Practice Session Start...")
        await page.goto("http://localhost:8081/practice/index.html")
        await page.wait_for_load_state("networkidle")

        # Select English, A1
        # In the new design, lang selection might be different
        lang_card = page.locator(".lang-selection-card", has_text="English")
        await lang_card.click()

        # Click "Random Practice" (Spinning Wheel)
        await page.click("#practice-spin-btn")
        await page.wait_for_timeout(2000)

        is_engine_visible = await page.is_visible("#practice-engine")
        print(f"Practice engine visible after spin: {is_engine_visible}")

        # If engine is visible, check if a task is rendered
        if is_engine_visible:
            task_rendered = await page.is_visible(".pe-task")
            print(f"Practice task rendered: {task_rendered}")

        await page.screenshot(path="verification_final_practice.png")

        await browser.close()

if __name__ == "__main__":
    import subprocess
    import time

    server = subprocess.Popen(["python3", "-m", "http.server", "8081"])
    time.sleep(2)
    try:
        asyncio.run(verify_final())
    finally:
        server.terminate()
