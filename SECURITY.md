# Security Policy: COSYlanguages Repository & Platform Protection

At COSYlanguages, we prioritize the absolute security, safety, and privacy of both our students and educators. Because we do not use a cloud database or centralized servers for user accounts, our security model focuses on safeguarding our open-source codebase, securing client-side states, and protecting administrative integration keys.

---

## 1. Zero-Collection Privacy Architecture
COSYlanguages does **not** collect, store, or track any student or teacher data.
- **No Databases:** There is no centralized database to hack or breach.
- **Client-Side Sovereignty:** All student portfolios, custom vocab dictionaries, practice metrics, and streaks are stored strictly within the user's browser `localStorage`.
- **Zero Tracker Cookies:** We do not use advertising, tracking, or telemetry cookies.

---

## 2. GitHub Repository Protection Best Practices

To protect our open-source ecosystem, the following security standards must be strictly maintained in our GitHub repository:

### A. Environment & Secret Management
*   **Never Hardcode Secrets:** All external API endpoints, keys, and configurations (such as temporary testing databases or future integration credentials) must be managed using **GitHub Secrets**.
*   **Secret Injection at Deploy Time:** Credentials must only be injected dynamically during the deployment build process (as implemented in `.github/workflows/deploy.yml` using `${{ secrets.COSY_SUPABASE_URL }}`).
*   **Secret Scanning:** Enable GitHub Secret Scanning under repository settings to automatically scan for accidentally committed keys, tokens, or personal identifiers.

### B. Branch Protections & Access Control
*   **Protected `main` Branch:** Direct pushes to the `main` branch should be restricted. All code changes must proceed through Pull Requests (PRs).
*   **Mandatory Status Checks:** Configure PR rules to require passing unit tests and structural audits (such as our Playwright suite and `scripts/audit_website_data.py`) before changes can be merged.
*   **Least Privilege Access:** Collaborator permissions must follow the principle of least privilege. Administrative keys and credentials must be restricted to project leads only.

### C. Dependency Hygiene
*   **Vulnerability Scanning:** Utilize GitHub Dependabot to automatically audit and alert developers regarding vulnerabilities in our developer toolchain (`package.json`).
*   **Keep DevTools Decoupled:** Keep production scripts entirely vanilla and static. No heavy, vulnerable Node.js frameworks are shipped to production.

---

## 3. Reporting a Vulnerability

If you discover a security vulnerability or a potential code execution exploit within COSYlanguages, please contact us directly:

*   **Email:** cosylanguages@gmail.com
*   **Telegram:** [@cosylanguagesproject](https://t.me/cosylanguagesproject)

Please do **not** open a public GitHub issue for security exploits. We will review and patch all reported vulnerabilities within 48 hours.

---

## 4. Client-Side Safe Practices for Teachers & Students

Since data lives in your browser's local cache:
1.  **Shared Computer Safety:** If studying on a shared or public computer, utilize "Private/Incognito" mode so that your local dictionary list is wiped once you close the browser.
2.  **Backup Regularly:** Use our built-in "Export Data 📥" feature on your Notebook page to download a local backup file (`.json`) of your study records. You can restore this on any device at any time.
