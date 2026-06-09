# vocab-outbound

Triggered automatically by a Supabase Database Webhook when a word is
inserted into vocab_notebook. Pushes the word to ProgressMe directly.

## Deploy
supabase functions deploy vocab-outbound --project-ref iajkejcmoykubthlwfra

## Database Webhook setup (no Albato — done inside Supabase)
In Supabase dashboard → Database → Webhooks → Create webhook:
- Name: vocab-outbound
- Table: vocab_notebook
- Events: INSERT
- Type: Supabase Edge Functions
- Function: vocab-outbound

That's it. Supabase calls the function automatically on every new word.

## Environment variables
PROGRESSME_API_URL — ProgressMe API base URL (get from ProgressMe docs/support)
PROGRESSME_API_KEY — your ProgressMe API key

## Note on ProgressMe API
If ProgressMe hasn't provided you with an API key yet, the function falls
back gracefully — it logs the word but does nothing harmful. Once you have
the API credentials, add them as secrets and re-deploy.
