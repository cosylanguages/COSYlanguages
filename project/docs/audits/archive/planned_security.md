# Planned security and privacy improvements

## Current situation
- Access codes stored in data/access/codes.json — a public file in a public GitHub repo
- Anyone who knows to look can find all codes
- No server-side authentication possible on GitHub Pages

## Acceptable for now because:
- Small private learning platform, not a financial service
- Codes grant access to learning content only, not personal data
- No payment information stored anywhere

## Rules to follow until a proper solution is in place
- Never put a student full name in codes.json — use a short ID only (e.g. "student_042")
- Change all codes at the start of each new term
- Keep codes long and unguessable (e.g. "COSY-EL-B1-X7K2", not "student1")
- Do not put any personal contact info (email, phone) in any repo file

## Planned improvements (in order of priority)
| Improvement | Effort | Notes |
|-------------|--------|-------|
| Move codes.json to a private repo, inject at deploy time via GitHub Actions | Low | Keeps codes out of public repo |
| Use free-tier backend (Supabase free plan) for auth | Medium | Proper auth, no codes in repo at all |
| Privacy policy page | Low | Required if collecting any user data |
| Cookie/localStorage notice | Low | Required in EU — students and teachers may be in EU |
