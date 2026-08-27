import os
import time
import subprocess
from playwright.sync_api import sync_playwright

def run_multidevice_verification():
    os.makedirs("/home/jules/project/tests/verification/videos", exist_ok=True)
    os.makedirs("/home/jules/project/tests/verification/screenshots", exist_ok=True)

    server = subprocess.Popen(["python3", "-m", "http.server", "8080"])
    time.sleep(2)

    viewports = [
        {"name": "mobile_se", "width": 375, "height": 667},
        {"name": "pixel_7", "width": 393, "height": 851},
        {"name": "tablet_ipad", "width": 768, "height": 1024},
        {"name": "desktop_laptop", "width": 1280, "height": 800}
    ]

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)

            for vp in viewports:
                context = browser.new_context(
                    viewport={"width": vp["width"], "height": vp["height"]},
                    record_video_dir="/home/jules/project/tests/verification/videos"
                )
                page = context.new_page()

                # Test Level Hub
                page.goto("http://localhost:8080/manuals/brezhoneg-a0-a1.html")
                page.wait_for_timeout(500)
                page.screenshot(path=f"/home/jules/project/tests/verification/screenshots/hub_{vp['name']}.png")

                # Test Vocab Topic Page with TTS and gender badges
                page.goto("http://localhost:8080/geriou-brezhoneg/topics/an-tiegezh.html")
                page.wait_for_timeout(500)
                page.screenshot(path=f"/home/jules/project/tests/verification/screenshots/vocab_{vp['name']}.png")

                context.close()

            browser.close()
            print("Multi-device visual verification completed successfully!")
    finally:
        server.terminate()
        server.wait()

if __name__ == "__main__":
    run_multidevice_verification()
