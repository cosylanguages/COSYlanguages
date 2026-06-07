# Supabase setup

1. Create a free project at https://supabase.com
2. Go to SQL Editor and paste the contents of `schema.sql`
3. Copy your project URL and anon key from Settings > API
4. Create `js/config.js` locally (see `js/config.template.js`)
5. For GitHub Pages deployment, add COSY_SUPABASE_URL and COSY_SUPABASE_ANON_KEY
   as repository secrets and inject them at build time
