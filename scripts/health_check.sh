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

echo ""
echo "Scanning for legacy references:"
check "! grep -r \"students\\.json\" --include=\"*.html\" --include=\"*.js\" . && echo \"✅ No students.json references\" || (echo \"❌ students.json references found\" && false)"
check "! grep -r \"broadcast\\.json\" --include=\"*.html\" --include=\"*.js\" . && echo \"✅ No broadcast.json references\" || (echo \"❌ broadcast.json references found\" && false)"
check "! grep -r \"localStorage\\.setItem.*cosy_student\\|localStorage\\.getItem.*cosy_student\" --include=\"*.html\" --include=\"*.js\" . && echo \"✅ No localStorage auth references\" || (echo \"❌ localStorage cosy_student references found\" && false)"
check "! grep -r \"fetch.*students\\.json\\|fetch.*broadcast\\.json\" --include=\"*.html\" --include=\"*.js\" . && echo \"✅ No static JSON fetches\" || (echo \"❌ Static JSON fetch calls found\" && false)"

echo ""
echo "Checking Supabase integration:"
check "grep -q \"createClient\" js/supabase.js && echo \"✅ createClient imported\" || (echo \"❌ createClient not found in js/supabase.js\" && false)"
check "grep -q \"export const supabase\" js/supabase.js && echo \"✅ supabase exported\" || (echo \"❌ supabase not exported\" && false)"
check "grep -q \"COSY_SUPABASE_URL\" js/supabase.js && echo \"✅ URL env var referenced\" || (echo \"❌ COSY_SUPABASE_URL not referenced\" && false)"
check "grep -q \"COSY_SUPABASE_ANON_KEY\" js/supabase.js && echo \"✅ Anon key env var referenced\" || (echo \"❌ COSY_SUPABASE_ANON_KEY not referenced\" && false)"
check "! grep -q \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\" js/supabase.js && echo \"✅ No hardcoded keys\" || (echo \"❌ REAL KEY HARDCODED IN supabase.js — SECURITY ISSUE\" && false)"

echo ""
echo "Checking schema.sql completeness:"
for table in teachers students progress sessions homework vocab_notebook challenges challenge_enrolments broadcasts; do
  check "grep -q \"create table .*public\\.$table\" supabase/schema.sql && echo \"✅ Table: $table\" || (echo \"❌ MISSING table: $table\" && false)"
done
check "grep -q \"row level security\" supabase/schema.sql && echo \"✅ RLS policies present\" || (echo \"❌ RLS policies missing\" && false)"
check "grep -q \"progressme_id\" supabase/schema.sql && echo \"✅ progressme_id field present\" || (echo \"❌ progressme_id field missing\" && false)"

echo ""
echo "Checking portal auth migration:"
check "grep -q \"supabase\" portal/index.html && echo \"✅ Supabase referenced in portal\" || (echo \"❌ Supabase not found in portal/index.html\" && false)"
check "grep -q \"from('students')\" portal/index.html && echo \"✅ students table queried\" || (echo \"❌ students query not found\" && false)"
check "grep -q \"sessionStorage\" portal/index.html && echo \"✅ sessionStorage used\" || (echo \"❌ sessionStorage not found\" && false)"
check "! grep -q \"students\\.json\" portal/index.html && echo \"✅ No students.json in portal\" || (echo \"❌ students.json still referenced in portal\" && false)"
check "! grep -q \"broadcast\\.json\" portal/index.html && echo \"✅ No broadcast.json in portal\" || (echo \"❌ broadcast.json still referenced in portal\" && false)"

echo ""
echo "Checking practice persistence migration:"
check "grep -q \"supabase\" practice/index.html && echo \"✅ Supabase referenced in practice\" || (echo \"❌ Supabase not in practice/index.html\" && false)"
check "grep -q \"from('progress')\" practice/index.html && echo \"✅ progress table used\" || (echo \"❌ progress table not referenced\" && false)"
check "grep -q \"total_points\\|streak_days\" practice/index.html && echo \"✅ Points/streak fields referenced\" || (echo \"❌ Points/streak fields missing\" && false)"

echo ""
echo "Checking teacher dashboard migration:"
check "grep -q \"loadTeacherDashboard\\|renderStudentTable\" portal/admin/index.html && echo \"✅ Teacher dashboard functions present\" || (echo \"❌ Teacher dashboard functions missing\" && false)"
check "grep -q \"assignHomework\\|markHomeworkDone\" portal/admin/index.html && echo \"✅ Homework functions present\" || (echo \"❌ Homework functions missing\" && false)"
check "grep -q \"activateBroadcast\\|clearBroadcast\" js/portal/dashboard-core.js && echo \"✅ Broadcast functions present\" || (echo \"❌ Broadcast functions missing\" && false)"
check "grep -q \"progressme_id\\|progressme\" portal/admin/index.html && echo \"✅ ProgressMe ID field present\" || (echo \"❌ ProgressMe ID field missing\" && false)"

echo ""
echo "Checking challenges module:"
check "grep -q \"loadActiveChallenges\" portal/challenges.js && echo \"✅ loadActiveChallenges exported\" || (echo \"❌ loadActiveChallenges missing\" && false)"
check "grep -q \"enrolInChallenge\" portal/challenges.js && echo \"✅ enrolInChallenge exported\" || (echo \"❌ enrolInChallenge missing\" && false)"
check "grep -q \"markDayComplete\" portal/challenges.js && echo \"✅ markDayComplete exported\" || (echo \"❌ markDayComplete missing\" && false)"
check "grep -q \"challenge_enrolments\" portal/challenges.js && echo \"✅ challenge_enrolments table referenced\" || (echo \"❌ challenge_enrolments missing\" && false)"

echo ""
echo "Checking GitHub Actions deploy workflow:"
check "grep -q \"COSY_SUPABASE_URL\" .github/workflows/deploy.yml && echo \"✅ URL secret injected in workflow\" || (echo \"❌ URL secret missing from workflow\" && false)"
check "grep -q \"COSY_SUPABASE_ANON_KEY\" .github/workflows/deploy.yml && echo \"✅ Anon key secret injected in workflow\" || (echo \"❌ Anon key secret missing from workflow\" && false)"
check "grep -E \"peaceiris/actions-gh-pages|actions/deploy-pages|actions/upload-pages-artifact\" .github/workflows/deploy.yml && echo \"✅ Deploy step present\" || (echo \"❌ Deploy step missing\" && false)"
check "grep -q \"js/config.js\" .github/workflows/deploy.yml && echo \"✅ config.js generated in workflow\" || (echo \"❌ config.js not generated in workflow\" && false)"

echo ""
echo "Security scan:"
check "! grep -r \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\" --include=\"*.html\" --include=\"*.js\" --include=\"*.json\" --include=\"*.yml\" . && echo \"✅ No hardcoded JWT tokens\" || (echo \"❌ REAL JWT TOKEN FOUND IN REPO — CRITICAL SECURITY ISSUE\" && false)"
check "! (grep -r \"supabase\\.co\" --include=\"*.html\" --include=\"*.js\" --include=\"*.json\" . | grep -v \"config\\.template\\.js\\|supabase/README\\.md\\|docs/\\|sw\\.js\" | grep -q .) && echo \"✅ Supabase URL only in expected locations\" || (echo \"⚠️ Supabase URL found outside expected files — review manually\" && false)"
check "grep -q \"js/config\\.js\" .gitignore && echo \"✅ config.js is gitignored\" || (echo \"❌ config.js is NOT in .gitignore — SECURITY ISSUE\" && false)"

echo "------------------------------------"
echo "Summary: $PASS checks passed, $FAIL checks failed."

echo ""
echo "========================================"
echo "  COSYlanguages Health Check Complete"
echo "========================================"
echo "Review any ❌ items above before deploying."
echo "If all items show ✅ the migration is complete."
echo "========================================"

if [ $FAIL -gt 0 ]; then
    exit 1
fi
exit 0
