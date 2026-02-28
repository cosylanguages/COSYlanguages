import asyncio
from playwright.async_api import async_playwright
import os

async def verify_disabled_states():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(viewport={'width': 1280, 'height': 800})
        page = await context.new_page()

        file_path = f"file://{os.getcwd()}/practice.html"
        await page.goto(file_path)

        # 1. Set Lesson Range to 1 (should disable Speaking/Wheel)
        await page.fill("#lesson-range", "1")
        # Trigger input event manually if needed, but playwright fill should do it
        await page.dispatch_event("#lesson-range", "input")

        await page.wait_for_timeout(500)

        speaking_disabled = await page.is_disabled("#cat-speaking")
        wheel_disabled = await page.is_disabled("#wheel-mode-btn")
        hint_visible = await page.is_visible("#lesson-hint")

        print(f"Lesson 1 - Speaking disabled: {speaking_disabled}")
        print(f"Lesson 1 - Wheel disabled: {wheel_disabled}")
        print(f"Lesson 1 - Hint visible: {hint_visible}")

        await page.screenshot(path="verification/disabled_state_l1.png")

        # 2. Set Lesson Range to 3 (should enable Speaking/Wheel)
        await page.fill("#lesson-range", "3")
        await page.dispatch_event("#lesson-range", "input")

        await page.wait_for_timeout(500)

        speaking_enabled = not await page.is_disabled("#cat-speaking")
        wheel_enabled = not await page.is_disabled("#wheel-mode-btn")
        hint_hidden = not await page.is_visible("#lesson-hint")

        print(f"Lesson 3 - Speaking enabled: {speaking_enabled}")
        print(f"Lesson 3 - Wheel enabled: {wheel_enabled}")
        print(f"Lesson 3 - Hint hidden: {hint_hidden}")

        await page.screenshot(path="verification/enabled_state_l3.png")

        await browser.close()

        return speaking_disabled and wheel_disabled and hint_visible and speaking_enabled and wheel_enabled and hint_hidden

if __name__ == "__main__":
    success = asyncio.run(verify_disabled_states())
    if success:
        print("Feature restriction verification PASSED")
    else:
        print("Feature restriction verification FAILED")
