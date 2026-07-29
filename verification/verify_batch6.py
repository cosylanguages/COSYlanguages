import asyncio
from playwright.async_api import async_playwright
import subprocess
import time
import os

async def main():
    print("Starting local HTTP server...")
    server_process = subprocess.Popen(
        ["python3", "-m", "http.server", "8080"],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL
    )
    time.sleep(2)  # Wait for server to start up

    try:
        async with async_playwright() as p:
            print("Launching browser...")
            browser = await p.chromium.launch()
            page = await browser.new_page()

            url = "http://localhost:8080/events/sessions/mind-matters/brain-discipline-dopamine.html"
            print(f"Navigating to {url}...")
            await page.goto(url)
            await page.set_viewport_size({"width": 1280, "height": 1000})

            # Take screenshot of the Hero in Light mode
            print("Capturing light mode hero...")
            await page.screenshot(path="verification_dopamine_light.png")

            # Switch to dark theme
            print("Switching to dark theme...")
            await page.evaluate("document.documentElement.setAttribute('data-theme', 'dark')")
            await page.screenshot(path="verification_dopamine_dark.png")

            print("Screenshots taken successfully!")
            await browser.close()
    finally:
        print("Stopping local HTTP server...")
        server_process.terminate()
        server_process.wait()

if __name__ == "__main__":
    asyncio.run(main())
