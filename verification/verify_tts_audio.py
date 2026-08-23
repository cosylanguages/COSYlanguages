import asyncio
from playwright.async_api import async_playwright

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1280, "height": 800})

        page.on("console", lambda msg: print(f"Console [{msg.type}]: {msg.text}"))

        print("Navigating to http://localhost:8080/practice/")
        await page.goto("http://localhost:8080/practice/")
        await page.wait_for_timeout(1000)

        has_engine = await page.evaluate("typeof window.cosyPracticeEngine !== 'undefined'")
        print("window.cosyPracticeEngine exists natively on load:", has_engine)
        assert has_engine, "cosyPracticeEngine should exist"

        await page.evaluate("""
            window.cosyPracticeEngine.startSession('en', 'Vocabulary', 'starter', 'all', false, [
                {
                    form: 'mc',
                    q: '"sibling" = ?',
                    item: { word: 'sibling', translation: 'A brother or sister', emoji: '👥' },
                    ans: 0,
                    opts: ['A brother or sister', 'A parent', 'A cousin']
                }
            ]);
        """)
        await page.wait_for_timeout(1000)

        listen_btn = await page.query_selector(".pe-card-speak-btn, button[onclick*='speakText']")
        print("Listen button query result:", listen_btn)
        assert listen_btn is not None, "Listen button not rendered"

        await page.screenshot(path="/home/jules/verification/screenshots/tts_audio_question.png")
        print("Saved screenshot /home/jules/verification/screenshots/tts_audio_question.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
