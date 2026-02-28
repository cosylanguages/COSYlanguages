import asyncio
from playwright.async_api import async_playwright
import os

async def verify_deep_link():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(viewport={'width': 1280, 'height': 800})
        page = await context.new_page()

        # Test Italian Day 3 Wheel Deep Link
        url = "http://localhost:8000/practice.html?mode=wheel&lang=it&lesson=3"
        print(f"Testing deep link: {url}")

        # Start a local server (assuming current directory is served)
        # For simplicity, we'll just check if the page loads and triggers the wheel
        # In a real environment, I'd use the provided server tools if available.
        # But here I'll just use file:// for direct access if possible or assume it's served.

        file_path = f"file://{os.getcwd()}/practice.html?mode=wheel&lang=it&lesson=3"
        await page.goto(file_path)

        # Wait for potential auto-start (setTimeout 500ms in practice.js)
        await page.wait_for_timeout(2000)

        # Check if wheel-container is visible
        is_wheel_visible = await page.is_visible("#wheel-container")
        print(f"Wheel visible: {is_wheel_visible}")

        # Take screenshot
        await page.screenshot(path="verification/italian_wheel_deep_link.png")

        # Check if it's Italian
        lang_card = await page.locator(".lang-selection-card.active").get_attribute("data-value")
        print(f"Active language: {lang_card}")

        # Check lesson range
        lesson_val = await page.input_value("#lesson-range")
        print(f"Lesson range value: {lesson_val}")

        # Check Mobile View
        mobile_context = await browser.new_context(viewport={'width': 375, 'height': 667})
        mobile_page = await mobile_context.new_page()
        await mobile_page.goto(file_path)
        await mobile_page.wait_for_timeout(2000)
        await mobile_page.screenshot(path="verification/italian_wheel_mobile.png")

        await browser.close()

        return is_wheel_visible and lang_card == "it" and lesson_val == "3"

if __name__ == "__main__":
    success = asyncio.run(verify_deep_link())
    if success:
        print("Deep link verification PASSED")
    else:
        print("Deep link verification FAILED")
