# Security Policy: COSYlanguages Repository & Platform Protection

At COSYlanguages, we prioritize the security, safety, and privacy of students and educators. Most learning state in this repository is stored in the browser, but the sign-in page uses Supabase Auth and reads account roles from a Supabase `profiles` table. Do not describe the whole ecosystem as zero-collection or accountless; each product's data flows and access controls must be documented separately.

---

## 1. Data Storage Boundaries
- **Learning state:** Practice metrics, saved vocabulary, and preferences are generally stored in the user's browser. See `privacy.html` for the documented local-storage keys.
- **Authentication:** `login.html` sends credentials to Supabase Auth and reads a role from the Supabase `profiles` table. Confirm provider retention, account deletion, and Row Level Security policies in the Supabase project and publish those details in the privacy notice.
- **Other products and communications:** Companion repositories and third-party messaging services may have separate data flows; do not assume this repository's local-storage behavior applies to them.
- **Tracking:** No analytics or advertising tracker is evident in this repository's entry-page code. Recheck third-party scripts and companion products before making a site-wide no-tracking claim.

---

## 2. GitHub Repository Protection Best Practices

To protect our open-source ecosystem, the following security standards must be strictly maintained in our GitHub repository:

### A. Environment & Secret Management
*   **API & Key Security:** Publishable / anonymous keys (such as Supabase anon keys) may be public, but administrative and service role keys must never be committed to the repository.
*   **Access Rules in Supabase RLS:** Platform access control, table security, and authorization rules live in Supabase Row Level Security (RLS) policies rather than client-side secrecy.
*   **Secret Injection at Deploy Time:** Credentials and configuration values are injected dynamically during the deployment build process (as implemented in `.github/workflows/deploy.yml` using `${{ secrets.COSY_SUPABASE_URL }}`).
*   **Secret Scanning:** Enable GitHub Secret Scanning under repository settings to automatically scan for accidentally committed service keys, tokens, or personal identifiers.

### B. Branch Protections & Access Control
*   **Protected `main` Branch:** Direct pushes to the `main` branch should be restricted. All code changes must proceed through Pull Requests (PRs).
*   **Mandatory Status Checks:** Configure PR rules to require passing unit tests and structural audits (such as our Playwright suite and `scripts/audits/audit_website_data.py`) before changes can be merged.
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
