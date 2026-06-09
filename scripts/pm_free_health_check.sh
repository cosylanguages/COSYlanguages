#!/bin/bash
# COSYlanguages × ProgressMe — Albato-free integration health check

PASS=0; FAIL=0

check() {
  if [ "$2" = "true" ]; then echo "  ✅  $1"; PASS=$((PASS+1))
  else echo "  ❌  $1"; FAIL=$((FAIL+1)); fi
}

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  COSYlanguages × ProgressMe — Free Integration Check"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

echo ""; echo "[ Infrastructure ]"
check "migrations/001_enable_extensions.sql"  "$([ -f supabase/migrations/001_enable_extensions.sql ] && echo true || echo false)"
check "migrations/002_cron_jobs.sql"          "$([ -f supabase/migrations/002_cron_jobs.sql ] && echo true || echo false)"
check "pg_net referenced in migrations"       "$(grep -q 'pg_net' supabase/migrations/001_enable_extensions.sql 2>/dev/null && echo true || echo false)"
check "pg_cron referenced in migrations"      "$(grep -q 'pg_cron' supabase/migrations/001_enable_extensions.sql 2>/dev/null && echo true || echo false)"

echo ""; echo "[ Edge Functions ]"
for fn in vocab-inbound vocab-outbound progress-sync mistake-check telegram-register send-telegram homework-reminders streak-nudge; do
  check "functions/$fn/index.ts" "$([ -f supabase/functions/$fn/index.ts ] && echo true || echo false)"
done

echo ""; echo "[ No Albato references ]"
ALBATO=$(grep -r "albato" --include="*.ts" --include="*.js" --include="*.html" --include="*.md" . 2>/dev/null | grep -v "MASTER_PLAN" | grep -v "progressme_jules_issues")
check "No Albato URLs in code" "$([ -z "$ALBATO" ] && echo true || echo false)"

echo ""; echo "[ Schema additions ]"
check "telegram_chat_id in schema"    "$(grep -q 'telegram_chat_id' supabase/schema.sql 2>/dev/null && echo true || echo false)"
check "unit_vocabulary table"         "$(grep -q 'unit_vocabulary' supabase/schema.sql 2>/dev/null && echo true || echo false)"
check "curriculum_links table"        "$(grep -q 'curriculum_links' supabase/schema.sql 2>/dev/null && echo true || echo false)"
check "on_mistake_logged trigger"     "$(grep -q 'on_mistake_logged' supabase/schema.sql 2>/dev/null && echo true || echo false)"

echo ""; echo "[ Telegram bot ]"
check "telegram-register README"      "$([ -f supabase/functions/telegram-register/README.md ] && echo true || echo false)"
check "BotFather instructions present" "$(grep -q 'BotFather' supabase/functions/telegram-register/README.md 2>/dev/null && echo true || echo false)"

echo ""; echo "[ Security ]"
CREDS=$(grep -r "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" --include="*.ts" --include="*.js" . 2>/dev/null | grep -v config.template)
check "No hardcoded JWT in functions" "$([ -z "$CREDS" ] && echo true || echo false)"
check "TELEGRAM_BOT_TOKEN uses env"   "$(grep -q 'Deno.env.get.*TELEGRAM_BOT_TOKEN' supabase/functions/telegram-register/index.ts 2>/dev/null && echo true || echo false)"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Results: $PASS passed · $FAIL failed"
[ "$FAIL" = "0" ] && echo "  🎉 All checks passed — zero paid services required!" \
                  || echo "  ⚠️  $FAIL check(s) failed — review above"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
