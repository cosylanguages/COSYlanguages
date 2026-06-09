#!/bin/bash
# COSYlanguages — full migration health check
# Run from repo root: bash scripts/health_check.sh

PASS=0
FAIL=0

check() {
  local desc="$1"
  local result="$2"
  if [ "$result" = "true" ]; then
    echo "  ✅  $desc"
    PASS=$((PASS+1))
  else
    echo "  ❌  $desc"
    FAIL=$((FAIL+1))
  fi
}

nogrep() {
  local desc="$1"
  local pattern="$2"
  local result
  result=$(grep -r "$pattern" --include="*.html" --include="*.js" . 2>/dev/null)
  if [ -z "$result" ]; then
    check "$desc" "true"
  else
    check "$desc" "false"
    echo "     Found in: $(echo "$result" | head -3 | cut -c1-100)"
  fi
}

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  COSYlanguages Health Check"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

echo ""
echo "[ 1 ] Required files"
check "js/supabase.js exists"              "$([ -f js/supabase.js ] && echo true || echo false)"
check "js/config.template.js exists"      "$([ -f js/config.template.js ] && echo true || echo false)"
check "supabase/schema.sql exists"        "$([ -f supabase/schema.sql ] && echo true || echo false)"
check "supabase/README.md exists"         "$([ -f supabase/README.md ] && echo true || echo false)"
check ".github/workflows/deploy.yml"      "$([ -f .github/workflows/deploy.yml ] && echo true || echo false)"
check "portal/challenges.js exists"       "$([ -f portal/challenges.js ] && echo true || echo false)"
check "docs/progressme-integration.md"    "$([ -f docs/progressme-integration.md ] && echo true || echo false)"

echo ""
echo "[ 2 ] Deleted files"
check "students.json removed"             "$([ ! -f students.json ] && echo true || echo false)"
check "broadcast.json removed"            "$([ ! -f broadcast.json ] && echo true || echo false)"
check "js/config.js NOT committed"        "$([ ! -f js/config.js ] && echo true || echo false)"

echo ""
echo "[ 3 ] No legacy references"
nogrep "No students.json references"       "students\.json"
nogrep "No broadcast.json references"      "broadcast\.json"
nogrep "No localStorage cosy_student"      "localStorage.*cosy_student"
nogrep "No static JSON fetches"            "fetch.*students\.json\|fetch.*broadcast\.json"

echo ""
echo "[ 4 ] Supabase client"
check "createClient imported"             "$(grep -q 'createClient' js/supabase.js 2>/dev/null && echo true || echo false)"
check "supabase exported"                 "$(grep -q 'export const supabase' js/supabase.js 2>/dev/null && echo true || echo false)"
check "URL env var referenced"            "$(grep -q 'COSY_SUPABASE_URL' js/supabase.js 2>/dev/null && echo true || echo false)"
check "No hardcoded JWT in supabase.js"   "$(! grep -q 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' js/supabase.js 2>/dev/null && echo true || echo false)"

echo ""
echo "[ 5 ] Schema completeness"
for table in teachers students progress sessions homework vocab_notebook challenges challenge_enrolments broadcasts; do
  check "Table: $table" "$(grep -q "create table.*public\.$table" supabase/schema.sql 2>/dev/null && echo true || echo false)"
done
check "RLS policies present"              "$(grep -q 'row level security' supabase/schema.sql 2>/dev/null && echo true || echo false)"
check "progressme_id field present"       "$(grep -q 'progressme_id' supabase/schema.sql 2>/dev/null && echo true || echo false)"

echo ""
echo "[ 6 ] Portal Supabase integration"
check "Supabase in portal/index.html"     "$(grep -q 'supabase' portal/index.html 2>/dev/null && echo true || echo false)"
check "students table queried in portal"  "$(grep -q "from('students')" portal/index.html 2>/dev/null && echo true || echo false)"
check "sessionStorage used in portal"     "$(grep -q 'sessionStorage' portal/index.html 2>/dev/null && echo true || echo false)"
check "JSON export button removed"        "$(! grep -qi 'export.*json\|json.*clipboard' portal/index.html 2>/dev/null && echo true || echo false)"

echo ""
echo "[ 7 ] Practice persistence"
check "Supabase in practice/index.html"   "$(grep -q 'supabase' practice/index.html 2>/dev/null && echo true || echo false)"
check "progress table used"               "$(grep -q "from('progress')" practice/index.html 2>/dev/null && echo true || echo false)"
check "streak_days referenced"            "$(grep -q 'streak_days' practice/index.html 2>/dev/null && echo true || echo false)"

echo ""
echo "[ 8 ] Teacher dashboard"
check "loadTeacherDashboard present"      "$(grep -q 'loadTeacherDashboard' portal/index.html 2>/dev/null && echo true || echo false)"
check "assignHomework present"            "$(grep -q 'assignHomework' portal/index.html 2>/dev/null && echo true || echo false)"
check "activateBroadcast present"         "$(grep -q 'activateBroadcast' portal/index.html 2>/dev/null && echo true || echo false)"
check "progressme_id in teacher form"     "$(grep -q 'progressme' portal/index.html 2>/dev/null && echo true || echo false)"

echo ""
echo "[ 9 ] Challenges module"
check "loadActiveChallenges exported"     "$(grep -q 'loadActiveChallenges' portal/challenges.js 2>/dev/null && echo true || echo false)"
check "enrolInChallenge exported"         "$(grep -q 'enrolInChallenge' portal/challenges.js 2>/dev/null && echo true || echo false)"
check "markDayComplete exported"          "$(grep -q 'markDayComplete' portal/challenges.js 2>/dev/null && echo true || echo false)"
check "challenge_enrolments referenced"   "$(grep -q 'challenge_enrolments' portal/challenges.js 2>/dev/null && echo true || echo false)"

echo ""
echo "[ 10 ] Deploy workflow"
check "URL secret in deploy.yml"          "$(grep -q 'COSY_SUPABASE_URL' .github/workflows/deploy.yml 2>/dev/null && echo true || echo false)"
check "Anon key secret in deploy.yml"     "$(grep -q 'COSY_SUPABASE_ANON_KEY' .github/workflows/deploy.yml 2>/dev/null && echo true || echo false)"
check "config.js generated in workflow"   "$(grep -q 'config.js' .github/workflows/deploy.yml 2>/dev/null && echo true || echo false)"

echo ""
echo "[ 11 ] Security"
check "config.js in .gitignore"           "$(grep -q 'config\.js' .gitignore 2>/dev/null && echo true || echo false)"
REAL_KEY=$(grep -r "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" --include="*.html" --include="*.js" --include="*.json" --include="*.yml" . 2>/dev/null | grep -v config.template)
check "No hardcoded JWT anywhere in repo" "$([ -z "$REAL_KEY" ] && echo true || echo false)"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Results: $PASS passed · $FAIL failed"
if [ "$FAIL" = "0" ]; then
  echo "  🎉 All checks passed — migration complete!"
else
  echo "  ⚠️  $FAIL check(s) failed — review above before deploying"
fi
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
