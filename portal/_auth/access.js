// Access code verification for COSYlanguages.
// Codes are checked against data/access/codes.json (loaded at runtime).
// This is client-side only — appropriate for a private learning platform, not for financial data.

async function cosyVerifyCode(code) {
    if (!code) return null;
    const result = await window.COSY.unlock(code);
    if (result && result.ok) {
        const role = window.COSY.mode;
        cosySetRole(role);

        // Map data for legacy compatibility
        const user = window.COSY.student || window.COSY.teacher || window.COSY.admin;
        if (user) {
            localStorage.setItem('cosy_user_name', user.name || user.nickname || '');
            localStorage.setItem('cosy_user_lang', (user.lang || user.language || 'en').toLowerCase());
        }

        return { ...user, role: role };
    }
    return null;
}
