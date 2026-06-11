# Telegram Bot setup (completely free)

## One-time setup

1. Open Telegram and search for @BotFather
2. Send: /newbot
3. Choose a name: COSYlanguages
4. Choose a username: cosylanguages_bot (or similar)
5. BotFather gives you a token — save it as TELEGRAM_BOT_TOKEN in Supabase secrets

## Register the webhook (run once after deploying)
curl "https://api.telegram.org/botYOUR_TOKEN/setWebhook?url=https://iajkejcmoykubthlwfra.supabase.co/functions/v1/telegram-register"

## How students register
1. Student opens Telegram and searches for your bot name
2. They send their COSYlanguages access code (e.g. MARIE-FR-2024)
3. Bot confirms registration — they receive all future reminders here

## Environment variables
TELEGRAM_BOT_TOKEN — from BotFather (set in Supabase Edge Function secrets)
