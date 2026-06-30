import asyncio
from playwright.async_api import async_playwright
import os

async def verify_losing_words_session():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(viewport={'width': 1280, 'height': 720})
        page = await context.new_page()

        # Start local server
        # Kill existing process on 8080 first
        os.system('kill $(lsof -t -i :8080) 2>/dev/null || true')
        server_process = await asyncio.create_subprocess_exec(
            'python3', '-m', 'http.server', '8080'
        )
        await asyncio.sleep(2)

        try:
            # 1. Check link from index page
            await page.goto('http://localhost:8080/events/keeping-up-with-science.html')
            link = page.locator('a[href="sessions/losing-spoken-words.html"]')
            assert await link.is_visible(), "Link to losing words session not visible"
            await link.click()
            await asyncio.sleep(1)
            assert page.url.endswith('losing-spoken-words.html'), f"Navigation failed: {page.url}"

            # 2. Verify Session Content
            title = await page.inner_text('h1')
            assert "We’re Losing 338 Spoken Words Every Day" in title, f"Wrong title: {title}"

            # 3. Verify 10-10-10 Counts
            vocab_cards = page.locator('.vocab-card')
            assert await vocab_cards.count() == 10, f"Expected 10 vocab cards, found {await vocab_cards.count()}"

            r1_items = page.locator('#s-r1 .round-item')
            assert await r1_items.count() == 10, f"Expected 10 Round 1 questions, found {await r1_items.count()}"

            r2_items = page.locator('#s-r2 .round-item')
            assert await r2_items.count() == 10, f"Expected 10 Round 2 statements, found {await r2_items.count()}"

            # 4. Check specific vocabulary word
            first_vocab = await vocab_cards.nth(0).inner_text()
            assert "Decline" in first_vocab, f"Missing 'Decline' vocab: {first_vocab}"

            # 5. Take screenshot
            os.makedirs('/home/jules/verification/screenshots', exist_ok=True)
            await page.screenshot(path='/home/jules/verification/screenshots/losing_words_session.png')
            print("Verification successful!")

        finally:
            server_process.terminate()
            await server_process.wait()
            await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_losing_words_session())
