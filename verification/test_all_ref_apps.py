import http.server
import socketserver
import threading
import time
import json
import os
from playwright.sync_api import sync_playwright

PORT = 8889

def start_server():
    Handler = http.server.SimpleHTTPRequestHandler
    httpd = socketserver.TCPServer(("", PORT), Handler)
    httpd.serve_forever()

APPS = [
    {
        "id": "fr-conjugeur",
        "path": "/apps/fr-conjugeur/index.html",
        "search_input": "#verb-search-input",
        "search_term": "parler",
        "title_id": "#verb-infinitive",
        "expected_title": "parler",
        "game_toggle": "#toggle-game-btn",
        "game_container": "#game-container"
    },
    {
        "id": "fr-genre",
        "path": "/apps/fr-genre/index.html",
        "search_input": "#noun-search-input",
        "search_term": "maison",
        "title_id": "#noun-title",
        "expected_title": "maison",
        "game_toggle": "#toggle-game-btn",
        "game_container": "#game-container"
    },
    {
        "id": "it-coniugatore",
        "path": "/apps/it-coniugatore/index.html",
        "search_input": "#verb-search-input",
        "search_term": "parlare",
        "title_id": "#verb-infinitive",
        "expected_title": "parlare",
        "game_toggle": "#toggle-game-btn",
        "game_container": "#game-container"
    },
    {
        "id": "it-genere",
        "path": "/apps/it-genere/index.html",
        "search_input": "#noun-search-input",
        "search_term": "casa",
        "title_id": "#noun-title",
        "expected_title": "casa",
        "game_toggle": "#toggle-game-btn",
        "game_container": "#game-container"
    },
    {
        "id": "ru-spryazhenie",
        "path": "/apps/ru-spryazhenie/index.html",
        "search_input": "#verb-search-input",
        "search_term": "читать",
        "title_id": "#verb-infinitive",
        "expected_title": "читать",
        "game_toggle": "#toggle-game-btn",
        "game_container": "#game-container"
    },
    {
        "id": "ru-rod-padezhi",
        "path": "/apps/ru-rod-padezhi/index.html",
        "search_input": "#noun-search-input",
        "search_term": "стол",
        "title_id": "#noun-title",
        "expected_title": "стол",
        "game_toggle": "#toggle-game-btn",
        "game_container": "#game-container"
    },
    {
        "id": "el-klisi-rimaton",
        "path": "/apps/el-klisi-rimaton/index.html",
        "search_input": "#verb-search-input",
        "search_term": "γράφω",
        "title_id": "#verb-infinitive",
        "expected_title": "γράφω",
        "game_toggle": "#toggle-game-btn",
        "game_container": "#game-container"
    },
    {
        "id": "el-genos-ptoseis",
        "path": "/apps/el-genos-ptoseis/index.html",
        "search_input": "#noun-search-input",
        "search_term": "άνθρωπος",
        "title_id": "#noun-title",
        "expected_title": "άνθρωπος",
        "game_toggle": "#toggle-game-btn",
        "game_container": "#game-container"
    },
    {
        "id": "en-verb-prep",
        "path": "/apps/en-verb-prep/index.html",
        "search_input": "#verb-search-input",
        "search_term": "depend",
        "title_id": "#verb-title",
        "expected_title": "depend",
        "game_toggle": "#toggle-game-btn",
        "game_container": "#game-container"
    }
]

VIEWPORTS = [
    {"name": "iPhone_SE", "width": 375, "height": 667, "is_mobile": True},
    {"name": "iPhone_14", "width": 390, "height": 844, "is_mobile": True},
    {"name": "Android_Pixel7", "width": 412, "height": 915, "is_mobile": True},
    {"name": "iPad_Tablet", "width": 768, "height": 1024, "is_mobile": False},
    {"name": "Laptop_1280", "width": 1280, "height": 800, "is_mobile": False},
    {"name": "Desktop_1920", "width": 1920, "height": 1080, "is_mobile": False}
]

def run_audit():
    os.makedirs("verification/screenshots/ref_apps", exist_ok=True)
    results = []

    server_thread = threading.Thread(target=start_server, daemon=True)
    server_thread.start()
    time.sleep(1)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        for app in APPS:
            app_id = app["id"]
            print(f"\n--- Testing {app_id} ---")

            for vp in VIEWPORTS:
                context = browser.new_context(
                    viewport={"width": vp["width"], "height": vp["height"]},
                    is_mobile=vp["is_mobile"]
                )
                page = context.new_page()

                console_errors = []
                page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)

                url = f"http://localhost:{PORT}{app['path']}"
                page.goto(url)
                page.wait_for_timeout(500)

                # Check search
                search = page.locator(app["search_input"])
                search.fill(app["search_term"])
                search.press("Enter")
                page.wait_for_timeout(500)

                title_elem = page.locator(app["title_id"])
                title_text = title_elem.text_content() if title_elem.count() > 0 else "NOT FOUND"

                # Check horizontal overflow
                overflow = page.evaluate("document.documentElement.scrollWidth > document.documentElement.clientWidth")
                scroll_w = page.evaluate("document.documentElement.scrollWidth")
                client_w = page.evaluate("document.documentElement.clientWidth")

                # Toggle Game Mode
                game_btn = page.locator(app["game_toggle"])
                if game_btn.count() > 0:
                    game_btn.click()
                    page.wait_for_timeout(300)
                    game_visible = page.locator(app["game_container"]).is_visible()
                else:
                    game_visible = False

                screenshot_path = f"verification/screenshots/ref_apps/{app_id}_{vp['name']}.png"
                page.screenshot(path=screenshot_path)

                res = {
                    "app": app_id,
                    "viewport": vp["name"],
                    "dimensions": f"{vp['width']}x{vp['height']}",
                    "title_match": app["expected_title"] in title_text,
                    "title_text": title_text,
                    "game_works": game_visible,
                    "overflow": overflow,
                    "scroll_width": scroll_w,
                    "client_width": client_w,
                    "errors": console_errors
                }
                results.append(res)
                print(f"[{vp['name']}] Title match: {res['title_match']} | Overflow: {overflow} ({scroll_w} vs {client_w}) | Game works: {game_visible} | Errors: {len(console_errors)}")

                context.close()

        browser.close()

    print("\n=== SUMMARY ===")
    has_issues = False
    for r in results:
        if not r["title_match"] or r["overflow"] or not r["game_works"] or len(r["errors"]) > 0:
            print(f"ISSUE in {r['app']} on {r['viewport']}: title_ok={r['title_match']}, overflow={r['overflow']}, game_ok={r['game_works']}, errors={r['errors']}")
            has_issues = True
    if not has_issues:
        print("All tests passed with zero issues!")

if __name__ == "__main__":
    run_audit()
