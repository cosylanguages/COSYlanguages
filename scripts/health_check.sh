#!/bin/bash

echo "Running COSYlanguages Health Check..."
echo "------------------------------------"

PASS=0
FAIL=0

check() {
    if eval "$1"; then
        PASS=$((PASS + 1))
    else
        FAIL=$((FAIL + 1))
    fi
}

# These must exist
echo "Checking required files:"
check "test -f js/supabase.js && echo \"✅ js/supabase.js\" || (echo \"❌ MISSING: js/supabase.js\" && false)"
check "test -f js/config.template.js && echo \"✅ js/config.template.js\" || (echo \"❌ MISSING: js/config.template.js\" && false)"
check "test -f supabase/schema.sql && echo \"✅ supabase/schema.sql\" || (echo \"❌ MISSING: supabase/schema.sql\" && false)"
check "test -f supabase/README.md && echo \"✅ supabase/README.md\" || (echo \"❌ MISSING: supabase/README.md\" && false)"
check "test -f .github/workflows/deploy.yml && echo \"✅ deploy.yml\" || (echo \"❌ MISSING: deploy.yml\" && false)"
check "test -f portal/challenges.js && echo \"✅ portal/challenges.js\" || (echo \"❌ MISSING: portal/challenges.js\" && false)"
check "test -f docs/progressme-integration.md && echo \"✅ progressme-integration.md\" || (echo \"❌ MISSING: docs/progressme-integration.md\" && false)"

echo ""
echo "Checking deprecated files (must be absent):"
# These must NOT exist
check "test ! -f students.json && echo \"✅ students.json removed\" || (echo \"❌ students.json still exists — must be deleted\" && false)"
check "test ! -f broadcast.json && echo \"✅ broadcast.json removed\" || (echo \"❌ broadcast.json still exists — must be deleted\" && false)"
check "test ! -f js/config.js && echo \"✅ js/config.js not committed\" || (echo \"❌ js/config.js committed — must be gitignored only\" && false)"

# Also checking the ones I just removed from data/ as they are clearly intended to be gone
check "test ! -f data/students.json && echo \"✅ data/students.json removed\" || (echo \"❌ data/students.json still exists\" && false)"
check "test ! -f data/broadcast.json && echo \"✅ data/broadcast.json removed\" || (echo \"❌ data/broadcast.json still exists\" && false)"

echo "------------------------------------"
echo "Summary: $PASS checks passed, $FAIL checks failed."

if [ $FAIL -gt 0 ]; then
    exit 1
fi
exit 0
