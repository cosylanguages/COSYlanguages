# vocab-inbound

Receives words from ProgressMe and writes them to the student's vocab_notebook.

## Deploy
`supabase functions deploy vocab-inbound --project-ref iajkejcmoykubthlwfra`

## ProgressMe setup (no Albato needed)
In ProgressMe → Settings → Integrations → Webhooks:
- Event: student saves a word
- URL: https://iajkejcmoykubthlwfra.supabase.co/functions/v1/vocab-inbound
- Method: POST
- Header: x-cosy-secret: [your PROGRESSME_WEBHOOK_SECRET value]
- Body mapping:
  ```json
  {
    "progressme_id": "{{student.id}}",
    "word":          "{{word.text}}",
    "definition":    "{{word.definition}}",
    "language":      "{{student.language}}"
  }
  ```

## Environment variables (Supabase dashboard → Edge Functions → Secrets)
PROGRESSME_WEBHOOK_SECRET — any random string, set the same in ProgressMe

## Test
```bash
curl -X POST https://iajkejcmoykubthlwfra.supabase.co/functions/v1/vocab-inbound \
  -H "Content-Type: application/json" \
  -H "x-cosy-secret: YOUR_SECRET" \
  -d '{"progressme_id":"pm_test","word":"bonjour","definition":"hello","language":"fr"}'
```
