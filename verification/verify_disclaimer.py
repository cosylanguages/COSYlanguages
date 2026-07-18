import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1280, "height": 1000})

        # Navigate to the local server
        await page.goto("http://localhost:8080/events/sessions/toutes-les-machines-ont-le-coeur.html")
        await page.wait_for_timeout(2000)

        # Scroll down to Stage 3 or lyrics section
        # Let's find Stage 3 / Lyrics header or details element and open it if collapsed
        try:
            # Stage 3 is typically inside a <details> element or visible by default. Let's open all details just in case.
            await page.evaluate("""() => {
                document.querySelectorAll('details').forEach(el => el.open = true);
            }""")
            await page.wait_for_timeout(1000)
        except Exception as e:
            print("Could not open details:", e)

        # Try to locate the disclaimer elements and scroll to them
        disclaimer = page.locator(".lyrics-disclaimer, .lyrics-container p, .artist-challenge-disclaimer")
        if await disclaimer.count() > 0:
            await disclaimer.first.scroll_into_view_if_needed()
            await page.wait_for_timeout(1000)

        # Take a screenshot
        await page.screenshot(path="/home/jules/verification/screenshots/verification.png", full_page=True)
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
