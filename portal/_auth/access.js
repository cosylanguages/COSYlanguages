// Access code verification for COSYlanguages.
// Codes are checked against data/access/codes.json (loaded at runtime).
// This is client-side only — appropriate for a private learning platform, not for financial data.

async function cosyVerifyCode(code) {
  try {
    const prefix = (window.COSY && typeof window.COSY.getPrefix === 'function') ? window.COSY.getPrefix() : '../../';
    const response = await fetch(`${prefix}data/access/codes.json`);
    const text = await response.text();

    // Strip comments (lines starting with //) before parsing
    const jsonText = text.split('\n')
      .filter(line => !line.trim().startsWith('//'))
      .join('\n');

    const codes = JSON.parse(jsonText);
    const match = codes.find(c => c.code === code.trim().toUpperCase());
    if (match) {
      cosySetRole(match.role);
      localStorage.setItem('cosy_user_name', match.name || '');
      localStorage.setItem('cosy_user_lang', match.language || 'en');
      return match;
    }
    return null;
  } catch(e) {
    console.error('Access verification failed', e);
    return null;
  }
}
